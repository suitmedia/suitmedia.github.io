---
layout:   post
title:    "Upgrade Your Gear: Node.js"
date:     2014-07-08 00:00:00
author:   Edwin Lunando
author_t: edwinlunando
excerpt: Upgrading Node.js is a trivial thing to do!
---

Hello everyone! This time, we will talk about upgrading Node.js. In our case, Suitmedia has a server that used a rather old Ubuntu version and the most updated version of Node.js on the debian package is far below the current version of Node.js. Since Node.js is one of the most vibrant open source community, a lot of updates has come to Node.js and we need to keep our libraries updated. So, let's start upgrading our Node.js.

In every platform, the simplest way to upgrading your Node.js is replacing the current binary with the new one. I do not recommend to compile the tarball since it is a far more complex thing to do. Now, straight to [download page][node-download] of Node.js and download the binaries on your preferred platform. Now, let's tackle every platform.

Windows is the most trivial when it comes to upgrading Node.js. Just uninstall the Node.js and fresh install the newest one. Mac is also the same. You only need to run the installer and the latest version of Node.js will be installed. The problem rises when you use old version of linux OS. If you cannot use debian, then you need to override the Node.js binaries by yourself. First, check the Node.js installation directory by using this command

{% highlight bash %}
which node
which npm
{% endhighlight %}

In Suitmedia server case, the result is:

    /usr/local/bin/node
    /usr/local/bin/npm

Then, extract the compressed binaries by using this command

{% highlight bash %}
tar -xvzf node-v0.10.29.tar.gz
{% endhighlight %}

Finally, you only need to go the `bin` directory and override the installed binaries with:

{% highlight bash %}
sudo cp node /usr/local/bin/node
sudo cp npm /usr/local/bin/npm
{% endhighlight %}

That's it! Fortunately, upgrading Node.js is not as hard and complicated as upgrading other tools that has a lot of dependency and configuration.

## Conclusion ##
I hope this post could help you to upgrade your Node.js to the latest version. If you get any problem, please let us know. We are here to help you. Stay tuned for the next Upgrading Your Gear! Happy developing!

[node-download]: http://nodejs.org/download/
