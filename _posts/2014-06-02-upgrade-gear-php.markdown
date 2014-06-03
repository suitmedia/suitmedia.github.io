---
layout:   post
title:    "Upgrade Your Gear: PHP"
date:     2014-06-02 00:00:00
author:   Edwin Lunando
author_t: edwinlunando
excerpt:  I will start writing post series 'Discovering Tools'. This post explains about object relational mapper(ORM).
---


Hi! With this post, I will start the Upgrade Your Gear series. This series will talk about upgrading your tool, library, or framework. Upgrading has a long standing reputation for being not a trivial task to do. Without any good preparation, upgrading could lead into catastrophic disaster for your application. In the other hand, technology is developing rapidly. Every month, there will be a new version of programming language or library. To keep our application safe, robust, and clean, we need to upgrade it regularly. So, do not afraid, we are here to help you out!

In this first post, I will explain about upgrading PHP on your server. In this case, one of our staging server that use Ubuntu Server 10.10 still use debian PHP version 5.3. It is simple, we want to upgrade it to the latest PHP version available, 5.5. Since the latest debian PHP on our server is 5.3, we need to compile the PHP source code with our own hands.

I’m assuming that you’re running these commands as root; therefore, I do not include the sudo command. Add this command if you are not running as root (standard disclaimer applies about not running as root unless you know what you’re doing).

## Set Up the Environment ##

Before compiling any applications, we need to set up the build dependency. We need all the library dependency for building PHP. You only need to run this command.

{% highlight bash %}
apt-get install build-essential
apt-get build-dep php5
{% endhighlight %}

If you don’t run this command or install the required libraries, you’ll get all kinds of unpleasant errors and warning from the PHP configure command.

## Get the Source Code ##

Obviously, we do need the source code to compile and install any application.

{% highlight bash %}
wget http://de.php.net/get/php-5.5.x.tar.bz2/from/this/mirror -O php-5.5.x.tar.bz2
tar jxf php-5.5.x.tar.bz2
cd php-5.5.x/
{% endhighlight %}

Change the `x` with the version you need. After running these commands, you should be inside the extracted directory.

## Configure the Code ##

Before we compile the source code, we need to configure the PHP code like the place to install, what library you want to include with your PHP, and binding with another app like Apache. Here are our configuration command.

{% highlight bash %}
./configure \
--prefix=/etc/php5 \
--with-config-file-path=/etc/php5/apache2  \
--with-config-file-scan-dir=/etc/php5/apache2/conf.d \
--with-apxs2=/usr/bin/apxs2 \
--with-pdo-pgsql \
--with-zlib-dir \
--with-freetype-dir \
--enable-mbstring \
--with-libxml-dir=/usr \
--enable-soap \
--enable-calendar \
--with-curl \
--with-mcrypt \
--with-zlib \
--with-gd \
--with-pgsql \
--disable-rpath \
--enable-inline-optimization \
--with-bz2 \
--with-zlib \
--enable-sockets \
--enable-sysvsem \
--enable-sysvshm \
--enable-pcntl \
--enable-mbregex \
--enable-exif \
--enable-bcmath \
--with-mhash \
--enable-zip \
--with-pcre-regex \
--with-mysql \
--with-pdo-mysql \
--with-mysqli \
--with-jpeg-dir=/usr \
--with-png-dir=/usr \
--enable-gd-native-ttf \
--with-openssl \
--with-fpm-user=www-data \
--with-fpm-group=www-data \
--with-libdir=lib64 \
--enable-ftp \
--with-imap \
--with-imap-ssl \
--with-kerberos \
--with-gettext \
--with-xmlrpc \
--with-xsl \
--enable-opcache \
--enable-fpm
{% endhighlight %}


You can see the full configuration [here][php-configuration]. Add the configuration as your need. Some of the most important configuration is:

1. `--prefix` to set your installation path
2. `--with-config-file-path` to set your php.ini file path
3. `--with-apxs2` to bind with Apache2
4. `--with-mcrypt` to enable us to deploy our Laravel app.

The rest is optional. I recommend to install as many library as possible since you can disable the library you do not need to use.

## Compile and Install ##

Once you have successfully run the `./configure` command, you’ll need to run the make command to compile PHP.

{% highlight bash %}
make
{% endhighlight %}

After that, run

{% highlight bash %}
make test
{% endhighlight %}

If you are compiling an unreleased version of PHP source code, do the community a favor and run these tests. Report any test failures you encounter. If you come across failures, run `make clean`


After running make test, it’s time to install PHP. Run make install to install PHP to the destination you chose in configuration.

{% highlight bash %}
make install
{% endhighlight %}

If you get any errors, reconfigure your installation and run `make clean` before anything to ensure it was a clean compile.

## Conclusion ##
At first, upgrading without using the debian is fearful, but, the structure of compiling any application is the same. First, you need to install all the dependency. Then, get the source code and configure it. Lastly, do compile the code and install it. It should run seamlessly. I hope this post could help you to upgrade your PHP to the latest version. If you get any problem, do not mind to ask us. We are here to help you. Stay tuned for the next Upgrading Your Gear!

[php-configuration]: http://www.php.net/manual/en/configure.about.php
