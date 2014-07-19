---
layout:   post
title:    "Remote Selfie - Angular.js on wearable devices"
date:     2014-07-19 12:58:00
author:   Sonny Lazuardi Hermawan
author_t: sonnylazuardi
excerpt:  The remote selfie application on Samsung Gear using Angular.js
---

Today, Samsung has released the new wearable technology called Samsung Gear that can be used as your handwatch. Samsung also launched gear app challange this July. So, we want to try to build cool application that run on this platform. We are using angular.js on the gear because the simplicity and easeness of the framework. We can build the app on device in fast time.

![reself icon](http://i655.photobucket.com/albums/uu275/sonnylazuardi/splash.png)
![reself splash screen](http://i655.photobucket.com/albums/uu275/sonnylazuardi/reself.png)

This application is open source and you can browse the code here

[ReSelf Wearable Github Repository](https://github.com/sonnylazuardi/reself)

[ReSelf Android Github Repository](https://github.com/yogisalomo/reself-android)

So, the coolest function of this application is image streaming so that you can see the camera of your phone on your smartwatch's screen in real time. The code we use to implement this is using intent service that will send the preview image from phone to gear.

Here is the live demo

<iframe width="420" height="315" src="//www.youtube.com/embed/CZF1PC-gD3I" frameborder="0" allowfullscreen></iframe>
