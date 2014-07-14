---
layout:   post
title:    "Discovering Tools: Capistrano"
date:     2014-06-08 00:00:00
author:   Edwin Lunando
author_t: edwinlunando
excerpt: Capistrano is the solution to this manual deployment problem. Deploying your code is as easy as runnning a single command from your local computer. Let's start.
---

Hello everyone! Welcome to next on Discovering Tools, a series to discuss tools that make us, developers, productive and happy. When you deploy your application, what tools do you use? FTP client to upload your code? Third party service to sync your code with the repository? Manual SCP upload? SSH? After that, you need to run a lot of commands on the server? All of it require us to do a lot of steps to deploy our apps. Capistrano is the solution to this manual deployment problem. Deploying your code is as easy as runnning a single command from your local computer. Let's start.

## What is Capistrano? ##

In technical terms, [Capistrano][capistrano] is a SSH automation tools with deployment framework written in Ruby language. Means, you can execute terminal task at the designated server from your local machine. In order to use Capistrano, you need **SSH access** to the server and use **git** as your source control management. Every time you run the `deploy` command, Capistrano automatically **pull the latest code from your git repository** and **set up 4 folder** at your chosen directory at your server. It is:

1. `current`
2. `releases`
3. `shared`
4. `repo`

`current` directory is the folder of your latest deployment.  Set your web server to this directory. `releases` is the folder that saves all or several last deployment. `releases` folder is made to make it easy to do rollback. If your latest code have errors, you can rollback to the previous code. `shared` folder is the place to put shared configuration files, application logs, and user uploaded files that shared even though the code is different. `repo` is the main repository of your code. You do not need to touch this folder since it was used by Capistrano. In simple terms, every time you deploy, Capistrano add your code into the `releases` directory and make symbolic link from `current` to the release directory. It made deployment as simple as running one command.

## How to use Capistrano? ##

In this case, we will deploy our application to our staging server. This example use Capistrano version `3.2.0`

After you install `ruby`, run `gem install capistrano` to install Capistrano. Then, run `cap install` at your project directory. It should generated the required files. The `Capfile` is the main capistrano file to mark a project deployed using Capistrano, `deploy.rb` file is to set the main configuration, and `staging.rb` and `production.rb` is environment specific configuration file. Now, open `deploy.rb` file inside `config` directory and set these variables

{% highlight ruby %}
set :application, 'test'  # Set this to your application name
set :repo_url, 'git@bitbucket.org:test/test.git'  # Set this to your repository SSH URI
set :deploy_to, '/var/www/test'  # Set your deployment target directory
{% endhighlight %}

After that, open `staging.rb` to set the user and server location.

{% highlight ruby %}
role :app, %w{user@ip}  # Set user to your deploy server user.
role :web, %w{user@ip}  # Set ip to your server ip. e.g. 123.123.23.78
role :db,  %w{user@ip}
server 'ip', user: 'user', roles: %w{web app}, my_property: :my_value
{% endhighlight %}

Next, since the latest Capistrano use public key authentication, you need to add your public key into `~/.ssh/authorized_keys` on your user home directory. If you do not have any public-secret key, generate the key first with this [guide][github-ssh]. Ideally, you need to use the same public key with your git account. Finally, run `cap staging deploy` on your local terminal and it will deploy your code automatically to your server. Every time you want to deploy your latest code, just run the command again.

If you need to do some operation like updating your library or migrating your database after deploy, you can add the command at this code.

{% highlight ruby %}
namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      # Your restart mechanism here, for example:
      # execute :touch, release_path.join('tmp/restart.txt')
      execute "php #{release_path.join('artisan')} migrate"
    end
  end

  after :publishing, :restart

end
{% endhighlight %}

You see? We just need to write our commands as string on the code and it will be executed. I use this example to migrate my Laravel application after the deployment is finished. If you need to rollback your application to the previous release, you only need to run `cap staging deploy:rollback`. What I have showed you is just the tip of the iceberg from Capistrano. You can access the full configuration [here][capistrano-git].

## Conclusion ##

Capistrano really made us productive and happy! Before using capistrano, we need to upload the code manually or run the `git pull` command from the server and do the manual task by ourself. Fortunately, Capistrano handles it all in one single command. Incredible! Thank you for your attention, see you on the next Discovering Tools. Keep productive and happy!

[capistrano]: http://capistranorb.com/
[capistrano-git]: https://github.com/capistrano/capistrano
[github-ssh]: https://help.github.com/articles/generating-ssh-keys
