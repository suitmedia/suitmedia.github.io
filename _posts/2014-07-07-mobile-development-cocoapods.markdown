---
layout:   post
title:    "Mobile Development: Cocoapods"
date:     2014-07-07 00:00:00
author:   Wito Chandra
author_t: WitoChandra
excerpt:  Cocoapods makes Objective-C developers happy
---
In this post you will find how to setup Cocoapods into your Objective-C application project.

## Cocoapods

Cocoapods is an open-source dependency manager for Objective-C applications.
By using Cocoapods you can find and use many usefull libraries that will help you in making a great apps.

## Installation

Cocoapods is written in Ruby. To install Cocoapods, you can simply run:

{% highlight bash %}
sudo gem install cocoapods
{% endhighlight %}

## Setup project

After creating your Objective-C project, in your project directory you can run:

{% highlight bash %}
pod init
{% endhighlight %}

That command will create file named Podfile.
You can specify your dependencies in that file.
Then run this command to setup your project and install the dependencies.
 
{% highlight bash %}
pod install
{% endhighlight %}

Now you should open ```<your-project-name>.xworkspace``` to open your project.

## Search dependencies

To search a dependency you can go to [Cocoapods](http://cocoapods.org), or run:

{% highlight bash %}
pod search <keywords>
{% endhighlight %}

## Add dependencies

You should add your dependency into ```Podfile```.

{% highlight ruby %}
platform :ios, '7.1'

pod 'AFNetworking', '2.0'
pod 'Facebook-iOS-SDK', '~> 3.10.0'
pod 'your-dependency'
{% endhighlight %}

After that run:

{% highlight bash %}
pod update
{% endhighlight %}

By running that command cocoapods will install:

1. ```AFNetworking``` with version ```2.0```
2. ```Facebook-iOS-SDK``` with version ```3.10.0``` or version up to ```3.11``` not ```3.11``` or higher
3. ```your-dependency``` with lastest version

Notice that in ```Podfile``` you can specify the version of a dependency you use.
The other ways to specify dependency version:

1. ```'~> 2.0'``` means version ```2.0``` and version up to ```3.0``` not including ```3.0``` or higher
2. ```'> 2.0'``` means any version higher than ```2.0```
3. ```'>= 2.0'``` means any version higher than ```2.0``` including ```2.0```
4. ```'< 2.0'``` means any version lower than ```2.0```
5. ```'<= 2.0'``` means any version lower than ```2.0``` including ```2.0```
6. ```'2.0'``` means version ```2.0```
7. leave blank means lastest version

## Conclusion

1. Install Cocoapods
2. Find libraries/dependencies that suit your needs
3. Tell Cocoapods to install your dependencies
4. Have fun

## More

[CocoaPods](http://cocoapods.org)

