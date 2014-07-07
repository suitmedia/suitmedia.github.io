---
layout:   post
title:    "Handling Muddy Controller in Laravel"
date:     2014-07-07 00:00:00
author:   Sonny Lazuardi
author_t: sonnylazuardi
excerpt:  This is the post about how to handle the muddy controller in Laravel 4.2
---
Have you ever seen the code below ?

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

You might repeat all of those code on your controller. The Validation, email, redirect and other similar stuff. Have you ever thought that we might create some class that might be inherited to make life easier? In laracon 2014, Jeffrey Way explain at least two ways of doing this.

## 1. Service Class

## 2. CommandBus

<iframe src="//www.slideshare.net/slideshow/embed_code/36588397?rel=0" width="597" height="486" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px 1px 0; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>