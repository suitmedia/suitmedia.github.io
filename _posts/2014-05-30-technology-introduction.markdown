---
layout: post
title:  "Backend Technology Introduction"
date:   2014-05-30 00:00:00
author: Edwin Lunando
---


Hi! today, I will explain the technology behind the backend team. While our services are not bounded by programming language or frameworks, we do have our own preference technology when developing high performance and robust web applications.

Mainly, we use two programming languages for our projects:

1. PHP
2. Ruby

## Why do we use PHP? ##

PHP is knowned as the most used programming languages for web application. We used it because it is practical, very easy to deploy, and a lot of splashing new frameworks in the PHP community e.g. Yii and Laravel. It is practical because almost all web developers knows PHP, it is not that hard to find people that has great PHP skills. PHP is very easy to deploy because a lot of shared hosting supports it. Many new frameworks means the community is active to build tools that reduce the development time and makes the developer happy.

Since a long time ago, Suitmedia Developers used [CodeIgniter][codeigniter] as it's official framework. It is a micro PHP web framework that easy to learn with having great performance. We do love it until the maintainer sought a new owner for CodeIgniter. Until now, there is no further development of CodeIgniter. So, we decided to drop it and use [Laravel][laravel].It is built on Ruby on Rails architecture and considered one of the most active PHP frameworks in the mean time. There will be a single post talking about Laravel. Besides Laravel, we used [CakePHP][cakephp] too!

![Laravel Meme][laravel-meme]

Even though, there are still a lot of people that used CodeIgniter, we believe we need too keep up to the technology development so that new tools, library, frameworks, or even languages could be technological advantages to Suitmedia Developers.

## Why do we use Ruby? ##

The primary reason we use Ruby as one of our main technology is not because the language, but it is because [Ruby on Rails][rails]. It is true that Ruby language is great with it's simplicity and flexibility, but Ruby on Rails is the most active open source web framework with **2315 contributors** and **76167 libraries** until this post is written. Imagine you are developing an application on top of codes that has been designed, coded, tested, reviewed, and used by 2315 another great developers. It, was, amazing.

Rails really made the developers happy and productive. Every time we need to implement a feature, it is almost very likely it was already implemented as a library and we only need to learn to use it. We will talk more about Ruby on Rails later.

So, these are the two main technologies that used here, in Suitmedia. Stay tuned to get more information and experience from us, Suitmedia Developers.

[jekyll]:    http://jekyllrb.com
[gh-pages]:  https://pages.github.com/
[php-logo]:  http://www.php.net//images/logos/php-med-trans-light.gif
[codeigniter]: http://ellislab.com/codeigniter
[laravel]: http://laravel.com/
[cakephp]: http://cakephp.org/
[laravel-meme]: http://t2.gstatic.com/images?q=tbn:ANd9GcTNBAU1vWSpS6oFEVm9NRxowL3RFO_pftxLXezuCQ5b1c439wdL "Laravel Doge Meme"
[rails]: http://rubyonrails.org/
