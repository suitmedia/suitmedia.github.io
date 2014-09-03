---
layout:   post
title:    "Discovering Tools: Letter Opener"
date:     2014-09-03 00:00:00
author:   Edwin Lunando
author_t: edwinlunando
excerpt:  Letter Opener give Rails developer a great way to debug your email
---

Welcome back to discovering tools, a series to discuss tools that make us, developers, productive and happy! Have ever had difficulties on debugging email message? Well, not anymore. We have leter opener gem for our Rails project. Letter opener is a gem that lets you preview your email in your web browser instead of sending it. You do not need a SMTP server anymore for your development environment! No longer cry over that accidentally sended email.

## How to Use ##

You only need to three simple steps to use letter opener. First, at letter opener into your gemfile.

{% highlight ruby %}
gem "letter_opener", :group => :development
{% endhighlight %}

You only need letter opener for development, so, put it on the development group. Second, run standard bundle install on our rails project.

{% highlight bash %}
bundle install
{% endhighlight %}

Lastly, set the email delivery method on config/environment/development.rb

{% highlight ruby %}
config.action_mailer.delivery_method = :letter_opener
{% endhighlight %}

Finished, now, you can easily debug your email from web browser. The email html file will be stored in `tmp/letter_opener` directory.

## Example Usage ##

Suppose that you have this mailer code.

{% highlight ruby %}
class TestMailer < ActionMailer::Base

  def test()
    mail(to: 'test@gmail.com', subject: "Thank you")
  end

end
{% endhighlight %}

And this mailer view on `views/test_mailer/test.html.erb`. The content is taken from [here][email-template]. Then, go to rails console and run this command.

{% highlight ruby %}
TestMailer.test().deliver
{% endhighlight %}

Here are the result.

![Example Email Result][email-example]

Simple and clean. Letter opener really help us to debug our email easily and elegantly. Try it and feel the production and mood boost while developing great apps. :D. See you on the next episode of discovering tools.

[email-template]: https://raw.githubusercontent.com/mailgun/transactional-email-templates/master/templates/inlined/action.html
[email-example]: http://i62.tinypic.com/20sj90.png
