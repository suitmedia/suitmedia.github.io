---
layout:   post
title:    "Cakpres - Hackathon Pemilu"
date:     2014-06-14 00:00:00
author:   Sonny Lazuardi
author_t: sonnylazuardi
excerpt:  This is the post about cakpres - online multiplayer trivia game
---

# Hackathon

Our second week at suitmedia, we try to join hackathon challange. This hackathon was held by Google Developer Group Jakarta. So, we searched for simple idea to use the API for an application. We are the team of five that consist of Sonny, Fathan, Yogi, Harits, and Edwin. At first, I want to try to make hybrid application from web to native application that run on mobile platform such as Android. So, I try to invite my friends to develop this idea. Today's technology support us to make mobile application from web technology stack such as html 5, css 3, and javascript.

# Cakpres

Before going further about the technology we use, let's see about cakpres application itself. Cakpres is the abbreviation of "aCAK PRESiden". This name come from Fathan idea. We firstly explored all of the list API given from Pemilu API that might be used for our application.

## Features

There are four major features of cakpres. They are 

- Game
- FAQ
- Pelanggaran
- Badges

### Game

The game is about choosing the right candidate that has the characteristic displayed on the screen. It is online massive multiplayer game that you can play in your web browser or mobile devices.

- Game Rules

	The game rule is simple. You just have to choose one of the candidates that has the clue on the screen. The first player that choose in the fastest time would get full score (+10), and the second would get (+4), and the other three would get (+1), The answer would be revealed on the second person answer, so if you don't know the answer you might cheat from the other player answer. It is massive online multiplayer, so your name would appear on the other players' screen.

### FAQ

FAQ or frequently asked question will give brief explanation of common knowledge about pemilu. You may search the information or just scroll down to see all the common question about pemilu. 

### Pelanggaran

This is the violation statistics from the candidates. You might compare each candidate violation in campaign here.

### Badges

The more score you got from the game, the more badges you will got. You may share your badges to twitter and challenge your friend to play.

<script async class="speakerdeck-embed" data-id="1b1a9f40e638013142215a41fb57398d" data-ratio="1.77777777777778" src="http://speakerdeck.com/assets/embed.js"></script>

## Technology Stack

Next, let's talk about the technology that we used to build this web application. These are the list of technology we used in this project.

- Firebase
- Angular.js
- FireAngular
- Node.js
- Express.js
- Socket.io
- IonicFramework

If you are difficult to remember all of the tech list, you may use FEANs (Firebase Express Angular Node and socketio). Yah, the name is originated from [MEAN](http://mean.io/) that stands for (Mongo Express Angular Node). We also have some slides about this technology. we used this slide on sharing knowledge at suitmedia. You may see the features highglight of FEANs.

<script async class="speakerdeck-embed" data-id="7d779490e258013120e156f45b27b54c" data-ratio="1.77777777777778" src="http://speakerdeck.com/assets/embed.js"></script>

## Firebase

This is one of the new technology that I want to share. One of the features that I like is three way data binding. This means when you update from one client on its frontend, it will update the model layer on the frontend and also update the backend. And all client will automatically sync the data. So update once, update everywhere.

## IonicFramework

Have you heard about phonegap? Yes, this is new framework to bundle your web app to mobile app. As we develop cakpres, ionic is still in beta version. But it has already good to make a mobile app because of course it uses angular in its bundle. I think it's the great combo between firebase, angular, and ionic because they support each other.

## Last Word

> Really care about the tools you use because they are what make you your best.
> 
> *Addy Osmani *
> *(Engineer at Google)*



[jekyll]:    http://jekyllrb.com
[gh-pages]:  https://pages.github.com/