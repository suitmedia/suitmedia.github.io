---
layout:   post
title:    "Chrome for iOS is not like what you think"
date:     2014-07-02 00:00:00
author:   Bobby
author_t: _bobbylie
excerpt: Chrome for iOS is (not) Chrome. It adopts Webkit browser engine and Nitro javascript engine and literally is a Safari with different skin
---

As a developer, I always find myself using Chrome during development to debug code, element inspecting, etc. For me there is no better browser other than Chrome. When I got my first iOS device, I did tried using Safari till open a page and I found [jumping focus on fixed position element](http://remysharp.com/2012/05/24/issues-with-position-fixed-scrolling-on-ios/). Annoyed by that bug, I downloaded Chrome and expecting I don't have to deal with that Safari bug anymore.

Guess what, that bug also exist in Chrome iOS while Chrome Android render the page correctly. Confused with this phenomenon, I started to find out why. Turn out Chrome for iOS is not Chrome. **It is basically Safari with different skin**.

I think that's why Chrome dev team put different user agent string only for iOS.

<figure>
    <img src="{{"/assets/chrome-ios-user-agent.jpg"}}" alt="">
    <figcaption>Chrome iOS identify as CriOS</figcaption>
</figure>

<figure>
    <img src="{{"/assets/chrome-android-user-agent.jpg"}}" alt="">
    <img src="{{"/assets/chrome-mac-user-agent.jpg"}}" alt="">
    <figcaption>Chrome for other platform identify as Chrome.</figcaption>
</figure>

[App Store Approval Guidelines](https://developer.apple.com/appstore/resources/approval/guidelines.html) stated that:

> Apps that browse the web must use the **iOS WebKit framework** and **WebKit Javascript**

that means Chrome along with other browsers for iOS can only use Webkit rendering engine. That is also why [Firefox doesn't land to iOS](http://www.trustedreviews.com/news/firefox-we-can-t-bring-meaningful-choice-to-ios).

The worse part is, 3<sup>rd</sup> party browsers [are forced to use the older Webkit Javascript engine](http://www.howtogeek.com/184283/why-third-party-browsers-will-always-be-inferior-to-safari-on-iphone-and-ipad/) while Safari uses Nitro, Apple's latest Javascript engine.

## Then why Chrome still landed in iOS?

Best guess is since Blink was a fork of Webkit, and Chrome used Webkit before, the Chrome team can tolerate to this restriction.

## A little hope for 3<sup>rd</sup> party browsers

Apple announced that iOS8 will be shipped with new API that offer equivalent Javascript engine as Safari called [`WKWebView`](https://developer.apple.com/library/prerelease/ios/documentation/WebKit/Reference/WKWebView_Ref/index.html). With the new API, Chrome iOS will be faster along with other app embedded popup browsers like Twitter or Facebook.