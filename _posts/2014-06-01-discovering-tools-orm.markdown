---
layout:   post
title:    "Discovering Tools: Object Relational Mapper"
date:     2014-06-01 00:00:00
author:   Edwin Lunando
author_t: edwinlunando
excerpt:  I will start writing post series 'Discovering Tools'. This post explains about object relational mapper(ORM).
---


Hi! For today, I will start writing post series. This one is called Discovering Tools. In this series, we will talk about tools that we used to increase our productivity and makes us happy. Increased productivity means reduced development time and happy developer means great application. This post explains about object relational mapper(ORM). Enough chit-chat and let's start.

## What is ORM? ##

ORM is a tool for converting between incompatible data type from relational table into object-oriented paradigm. In more technical terms, ORM convert relational `table` into `class`, `row` into `object`, and `column` into `attribute`. So, the ORM create a virtual database in object-oriented paradigm that consists classes instead of tables.

ORM is usually already wrapped inside one framework as one of the feature, but there are a lot of third party or stand alone ORM that can be used freely if you do not satified with the native framework's ORM. We usually stick to the native one because it is usually easier to use and do not need some glue code to integrate with the third party ORM. Here is the example stand alone ORM in PHP we have used in our projects, [Doctrine][doctrine].

## Why do we use ORM? ##

Obviously, we do not need to write SQL while using ORM. If we do not use ORM, imagine building all the SQL strings in our own code and clean it to protect from SQL injection. This very tedious task to do because we need to build the SQL string for every database operation. Here are some examples of the use of ORM. In this example, we have `posts` table that translated into `Post` class and `tags` table into `Tag` class.

{% highlight sql %}
SELECT *
FROM posts
WHERE active = 1 AND user_id = 1 LIMIT 1
{% endhighlight %}

Equivalent into this python code with Django ORM.

{% highlight python %}
Post.objects.get(active=1, user_id=1)
{% endhighlight %}

Simple, we want to get one post with `active` and `user_id` is `1`. Here is one more complex example.

{% highlight sql %}
SELECT * FROM posts
INNER JOIN tags ON posts.tag_id = tags.id
WHERE tags.name LIKE '%sql%'
{% endhighlight %}

Equivalent into.

{% highlight python %}
Post.objects.filter(tags__name__contains='sql')
{% endhighlight %}

Not only we do not write any SQL and SQL cleaning code, but also the syntax is more intuitive from the object-oriented design perpective. With this, the amount of code written is reduced so that, the code much more cleaner with SQL-free code. :D. Happy developers!

## Conclusion ##

![ORM Meme][orm-meme]

Using ORM is really an integral part to us in order to develop robust and high performance application swiftly. Numerous line of code to building SQL can be replaced by one line of code that is more intuitive to read. Try it and see the productivity improvement while developing your apps. Stay tuned for the next Discovering Tools. Keep productive!

[orm-meme]: https://i.chzbgr.com/maxW500/8207712000/hF6B89741/ "ORM Durrant Meme"
[doctrine]: http://www.doctrine-project.org/index.html
