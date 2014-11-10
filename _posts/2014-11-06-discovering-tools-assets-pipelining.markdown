---
layout:   post
title:    "Discovering Tools: Assets Pipeline"
date:     2014-11-06 00:00:00
author:   Edwin Lunando
author_t: edwinlunando
excerpt: Assets pipeline to improve the web app performance
---

Welcome back to discovering tools, a series to discuss tools that make us, developers, productive and happy! In this episode, we will cover a tools that help us delivering high performance web applications. It is called assets pipeline. HTTP 1.1 has several limitations on retrieving static assets file. It only allow 6 connections per origin. In a case where a web app has enormous amount of static files, it will surely increase the load time. So, assets pipeline is a concept to concatenate and compress javascript or CSS files so that, the browser only need to retrieve minimum amount of assets files to make the page load faster. Here are the pros of assets pipelining.

1. **Only need minimum amount of files**. You can reduce the CSS and JS files into 1.
2. **Save bandwitdh with minifed files**. The assets files is minified and compressed.
3. **Only need to load the assets files first time**. After load, the other page will hit the cache.

## Assets Pipelining Tools ##

Actually, the concept is pretty much simple. First, you concatenate the assets file manually, then compress or minify it using the command line tools or with an online service, then, serve it. The only downside of this method is that you need to do all the things by yourself every time you want to update your assets. We can do better. The tools is here to help us out. 

## Front End ##

If you are developing web app on the front end, you can use [gulpjs][gulp]. It is a tools that help you "compile" your front-end template to run commands like concat or minify your assets file. You need to install [node.js][nodejs] to use gulp. Here are some gulp plug-ins that help you concat and minify assets.

1. [gulp-concat][gulp-concat-link]. To concat files
2. [gulp-uglify][gulp-uglify-link]. To minify javascript files.
3. [gulp-minify-css][gulp-minify-css-link]. To minify CSS files.

## Back End ##

If you are a back-end developer, the are a lot of libraries that would match your framework. We will talk about this per-case.

### Ruby on Rails ###

Ruby on Rails really likes assets pipelining. The even integrate this method inside their framework. It is called [sprockets][sprockets-rails]. If you are developing with Rails framework, you only need to follow their guidelines and you are automatically using assets pipelining.

### Laravel ###

If you are using Laravel, there are several plugins that could help you. First, you can use [elixir][elixir-laravel]. Elixir is a library that help you define Gulp task for your Laravel application.

If you are not a fan of Gulp, you can use [assets pipeline][assets-pipeline-laravel] for Laravel. It is like Sprockets for PHP. By using Laravel and this library, it is like developing Rails application using PHP. :D.

### Django ###

Django has a good third party library that implement assets pipelining. It is called [django-pipeline][django-pipeline-github]. The plugin is very easy to use and very good integration with another static files library like [django-storages][django-storages-github].

## Cons ##

While There are a lot of reasons to use assets pipelining, there are several drawbacks with assets pipeline. Here you go.

1. **Huge monolithic code**. Most page only use a portion percent of your CSS and javascript code. 
2. **Expensive cache invalidations**. Simple code modification will result in forcing full fetch a new file.
3. **Late execution of CSS and JS**. Must wait the entire JS or CSS file to start executing code.

While there are a lot of cons, assets pipelining still increase the web performance in a lot of cases. Thank you for your attention, see you on the next Discovering Tools. Keep productive and happy!

[nodejs]: http://nodejs.org/
[gulp]: http://gulpjs.com/
[gulp-concat-link]: https://www.npmjs.org/package/gulp-concat
[gulp-uglify-link]: https://www.npmjs.org/packagea/gulp-uglify
[gulp-minify-css-link]: https://www.npmjs.org/package/gulp-minify-css
[sprockets-rails]: https://github.com/rails/sprockets-rails
[elixir-laravel]: https://github.com/rails/sprockets-rails
[assets-pipeline-laravel]: https://github.com/CodeSleeve/asset-pipeline
[django-pipeline-github]: https://pypi.python.org/pypi/django-pipeline/
[django-storages-github]: http://code.larlet.fr/django-storages/
