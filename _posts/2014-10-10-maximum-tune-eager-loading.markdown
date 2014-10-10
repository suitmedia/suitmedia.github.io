---
layout:   post
title:    "Maximum Tune: Eager Loading"
date:     2014-10-10 00:00:00
author:   Edwin Lunando
author_t: edwinlunando
excerpt:  Tackling the infamous N + 1 query problem with eager loading technique
---

Good day! We have talked a lot about dev tools and coding tech in some time. Now, time for a new series. Yeah! This series will be called Maximum Tune. In this series, we will talk about performance, performance, and performance. In this first episode, I will raise the infamous N + 1 query problem while using object relational mapper(ORM). Let's get it on.

## What is N + 1 Query Problem? ##

It is a common mistake on using an ORM. Suppose that we have this two model in Python, Django ORM.

{% highlight python %}
class Store(models.Model):
    name = models.CharField(max_length=100)

class Book(models.Model):
    title = models.CharField(max_length=100)
    store = models.ForeignKey(Store)
{% endhighlight %}

It is clearly that the relation between this two models it one `Store` may have a lot of `Book` because of the foreign key on the `Book` towards the `Store`. Now, suppose that we want to iterate all the `Book` to get every `Store` name on each `Book`.

{% highlight python %}
books = Book.objects.all()  # Do not hit the database since lazy loaded
for book in books:
    print book.store.name  # Hit the database every foreign key is accessed
{% endhighlight %}

Since we are using ORM, we can access the foreign key attribute seamlessly. The generated SQL query will be something like this.

{% highlight sql %}
SELECT * FROM book
SELECT * FROM store WHERE store.id = 1
SELECT * FROM store WHERE store.id = 2
SELECT * FROM store WHERE store.id = 3
SELECT * FROM store WHERE store.id = 4
SELECT * FROM store WHERE store.id = 5
{% endhighlight %}

and go on until every `Book` is iterated. Every foreign key access will make the application hit the database. Now, imagine that `Book` has thousands or millions of records. Means, it will give thousands or millions of queries to the database. Moreover, it could block any other request to the database since the database in under heavy load. Not cool. So, the N + 1 query problem is that we have to run N query to get the foreign key data for each record and 1 query to fetch all the records.

## Solution: Eager Loading ##

Fortunately, most of the ORM developer has already aware of this problem and comes with a solution. We need to prepopulate the foreign key attribute before use it. In this case of `Store` and `Book`, it is better to have one or two big SQL queries rather than gazzilions of small query because every new request will give I/O overhead. This technique is calles Eager Loading. By using eager loding on N + 1 query problem, it will boost your performace through the roof. This is the implementation on the solution.

{% highlight python %}
books = Book.objects.select_related('store').all()  # Hit the database once and prepopulate the foreign key
for book in books:
    print book.store.name  # Do not hit the database
{% endhighlight %}

This is Ruby on Rails with the same model structure.

{% highlight ruby %}
books = Book.include(:store).all  # Hit the database once and prepopulate the foreign key
books.each do |book|
    puts book.store.name  # Do not hit the database
end
{% endhighlight %}

And this is the Laravel version.

{% highlight php startinline %}
$books = Book::with('store')->get()  # Hit the database twice and prepopulate the foreign key
foreach ($books as $book) {
    echo $book->store->name;
}
{% endhighlight %}

The big one or two SQL query will be something like this.

{% highlight sql %}
SELECT *
FROM book
INNER JOIN store ON ( book.id = store.id )
{% endhighlight %}

Or like this

{% highlight sql %}
SELECT * FROM book

SELECT * FROM store WHERE id IN (1, 2, 5, 7, 9, ...)
{% endhighlight %}

Different ORM may implement different type of SQL, but the point is to reduce the SQL redundancy. We have been through a lot of experience that the N + 1 problem and it is one of the problem that we encountered a lot due to huge amount of ORM usage. I do hope that this guide will let you avoid this problem. See you one the next episode of Maximum Tune to get more technique on delivering high perfomance applications!
