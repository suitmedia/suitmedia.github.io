---
layout:   post
title:    "Handling Muddy Controller in Laravel"
date:     2014-07-07 00:00:00
author:   Sonny Lazuardi
author_t: sonnylazuardi
excerpt:  This is the post about how to handle the muddy controller in Laravel 4.2
---
Have you ever seen the code below ?

{% highlight php %}
	public function store()
	{
		$input = Input::only('username', 'email', 'password');

		$validator = Validator::make($input, [
			'email' => 'required|email',
			'password' => 'required',
		]);

		if ($validator->fails()) return Redirect::back();

		$user = User::create($input);

		Mail::send('emails.welcome', '...');
		UserEvent::create(['description' => 'Signed up for SuitCMS']);
		// other stuff todo after user sign up...
	
		return Redirect::home()->withFlashMessage('Welcome Aboard!');
	}
{% endhighlight %}

You might repeat all of those code on your controller. The Validation, email, redirect and other similar stuff. Have you ever thought that we might create some class that might be inherited to make life easier? In laracon 2014, Jeffrey Way explain at least two ways of doing this.

## 1. Service Class

At this method, you might do some trick to pass the input and the reference of controller to our service class.

	public function store()
	{
		$input = Input::only('username', 'email', 'password');

		//at this point you pass references of controller
		return $this->userCreator->create($input, $this); 
	}

	public function userCreationFails($errors)
	{
		return Redirect::back()->withInput();
	}

	public function userCreationSucceeds()
	{
		return Redirect::home()->withFlashMessage('Welcome Aboard!');
	}

And, let see the content of our new class UserCreator

	class UserCreator {
		public function create($input, UserListener $listener)
		{
			try
			{
				$this->registrationForm->validate($input);
			}
			catch (FormValidationException $e)
			{
				return $listener->userCreationFails($e->getErrors());
			}
		}

		$user = $this->userRepo->create($input);

		//make an announcement that a user has already signed up
		$this->event->fire('user.signed_up', $user);

		return $listener->userCreationSucceeds();
	}

You also can make registrationForm (a model form) that will do validation part for you. Next, you might create interface so that the controller must implement these two methods.

	interface UserListener {

		public function userCreateionFails(MessageBag $errors);

		public function userCreationSucceeds();

	}

## 2. CommandBus

> Commands help you in supporting the ubiquitous languange by explicitly capturing user intent at the boundaries of your system
>
> __Jef Claes__

Here we can use commandbus pattern to solve this problem

	public function store()
	{
		extract(Input::only('username', 'email', 'password'));

		$command = new SubscribeUserCommand($username, $email, $password);

		$this->commandBus->execute($command);

		return Redirect::home();
	}

Then, let's see our SubscribeUserCommand Class

	class SubscribeUserCommand {

		public $username;
		public $password;
		public $email;

		function __construct($username, $email, $password)
		{
			$this->username = $username;
			$this->email = $email;
			$this->password = $password;
		}

	}

This is pretty simple class that will receive the input. Now, let's go to the commandbus class. The name bus because basicly it can get you to where you need to be. notice that we have one on one relationship and associative in your class.

	<?php namespace Suitmedia\Commanding;

	use Illuminte\Foundation\Application as App;

	class CommandBus {

		public function __construct(App $app, CommandNameTranslator $commandNameTranslator)
		{
			$this->app = $app;
			$this->commandNameTranslator = $commandNameTranslator;
		}

		public function execute($command)
		{
			$handler= $this->commandNameTranslator->toCommandHandler($command);

			return $this->app->make($handler)->handle($command);
		}
	}

Here is the simple command handler for subscribing user

	<?php namespace Suitmedia\Users;

	use Suitmedia\Commanding\CommandHandler;
	use Suitmedia\Eventing\EventDispatcher;

	class SubscribeUserCommandHandler implements CommandHandler {
		public function __construct(User $user, EventDispatcher $dispatcher)
		{
			$this->user = $user;
			$this->dispatcher = $dispatcher;
		}

		public function handle($subsribeUserCommand)
		{
			$this->user->subscribe($subscribeUserCommand);
			$this->user->save();

			$this->dispatcher->dispatch($this->user->releaseEvents());
		}
	}

<iframe width="800" height="450" src="//www.youtube.com/embed/eqN-rt-D9KQ?rel=0" frameborder="0" allowfullscreen></iframe>
