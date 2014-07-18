---
layout:   post
title:    "Backend Experience: ASP .NET"
date:     2014-07-18 00:00:00
author:   Edwin Lunando
author_t: edwinlunando
excerpt:  My experience on using ASP .NET MVC. A great framework with great libraries.
---


Hi! It is always a good day to write code. In this previous [post]({% post_url 2014-5-30-intro-to-backend-tech %}), I have explained about tho two main programming languages in Suitmedia Engineering team. Both of them is as good as they are. Now, I will share my experience on the other programming languages based on client request. It is [ASP .NET][asp.net].

## The Story of Using ASP .NET ##

ASP .NET is a web framework released by Microsoft. It boasts the use of the .NET library to help us to build our solution. Pun intended. In this case I used the MVC framework to develop my application

### Controller ###

The first impression on using the ASP MVC framework is the structure is much like [CodeIgniter][codeigniter]. The framework let us to define controller class and access the method of the controller via URL with `/{controller}/{method}` format. Each time the controller is called, it needs to return something. The standard return is `View()`, but it can be anything else. This makes it flexible if we want to return something like JSON or XML, sweet. The ASP .NET controller has not much difference with any other framework, which is good. A framework feature needs to be built outside the controller.

### Model ###

For the model, I use [NHibernate][nhibernate] as the [ORM]({% post_url 2014-06-01-discovering-tools-orm %}). It is a really good ORM with a lot of usage, but one thing i do not like is that we need to define the class on XML. I like it better if we define it with JSON or YAML. Fortunately, [Fluent NHibernate][fluent-nhibernate] is exist. That library enables us to define our model mapping in pure C# code. Cool. Here are the example code of using XML mapping.

{% highlight xml %}
<?xml version="1.0"?>
<hibernate-mapping xmlns="urn:nhibernate-mapping-2.2" assembly="Eg"
    namespace="Eg">
        <class name="Cat" table="CATS" discriminator-value="C">
                <id name="Id" column="uid" type="Int64">
                        <generator class="hilo"/>
                </id>
                <property name="BirthDate" type="Date"/>
                <property name="Color" not-null="true"/>
                <property name="Sex" not-null="true"/>
                <property name="Weight"/>
        </class>
</hibernate-mapping>
{% endhighlight %}

And this is the code version of the mapping.

{% highlight c# %}
namespace House.Session.Mappings
{
    public class CatMap : ClassMap<Cat>
    {
        public CatMap()
        {
            Id(x => x.Id).Column("id");
            Map(x => x.BirthDate).CustomType("Date").Nullable();
            Map(x => x.Color).Not.Nullable();
            Map(x => x.Sex).Not.Nullable();
            Map(x => x.Weight);
        }
    }
}
{% endhighlight %}


Or, you can use the auto-mapping features of `FluentNHibernate`. It automatically read from your model class straight to the database.

{% highlight c# %}
public class Cat
{
  public virtual int Id { get; set; }
  public virtual Date BirthDate { get; set; }
  public virtual string Price { get; set; }
  public virtual string Sex { get; set; }
  public virtual int Weight { get; set; }
}
{% endhighlight %}

At the end of the day, it comes back to the developer preference. For me, the most important feature of a web framework is on the model because working with database like writing SQL is very time consuming and tedious. With the help of choosing a good model, we could build our solution more effectively.

### View ###


The default View directory is included with layout files. For me, this is a plus point since writing views with layout is good practice. It will save you a lot of time in the future. One thing about ASP .NET View is that they have a lot of view engine or we usually called it template renderer. You can see the list and comparison [here][view-engines]. My preference view engine is `Razor` since it is the default. For view, I want to keep everything simple.


## ProConclusion ##

So, that's all the general of my insight for ASP .NET MVC framework. In overall, ASP .NET is a great framework with huge amount of libraries. The .NET libraries is one of the most significant feature that makes ASP is a good choice in developing web application. C# is a good language for those who likes structured language like Java. It is all about object oriented and strongly-typed. You can see the power of strongly-typed language [here][strongly-typed]. The main drawback of using ASP .NET is their cost. You need cost for almost everything you need. You need to pay for IDE, code versioning tool, web server, and Windows server OS license. That hurts.

So, that's my fun experience on using ASP .NET in Suitmedia. Stay tuned to get more information and experience from us, Suitmedia Developers. Happy developing!

[asp.net]: http://www.asp.net/
[python]: https://www.python.org/
[nhibernate]: http://en.wikipedia.org/wiki/NHibernate
[fluent-nhibernate]: https://github.com/jagregory/fluent-nhibernate
[view-engines]: http://stackoverflow.com/questions/1451319/asp-net-mvc-view-engine-comparison
[strongly-typed]: http://stackoverflow.com/questions/859186/why-is-c-sharp-statically-typed
[codeigniter]: http://ellislab.com/codeigniter
