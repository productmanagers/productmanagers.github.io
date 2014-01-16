---
layout: post
title : git-push-pull-supplement
permalink: /blog/git-push-pull-supplement
comments: true
categories: [exercise, web_development]
tags : [part01, exercise03b]

---

###Goal###
To get more practice with git commands and terminal.

###Recap###
This is a companion lesson to [html basics](../html-add-text-images/). There, you were asked to _clone_ your github page to your computer (or local environment) so that you can begin adding text and image and other tweaks. If you got stuck, then hopefully this supplement will help.

###Main Course###
If you clicked on the [__HTML__](http://www.w3.org/html/) link above, you\'ll have seen that HTML is "the publishing language of the World Wide Web." You might also notice that the [w3.org](http://www.w3.org/) is the standard-setting body for this (and many other) web standard.

__Browser is a HTML parser__

A _parser_ is like an interpreter. As an example, you feed it French, and it gives back English so you can understand it.

For our purposes, it\'s probably enough to share the following diagram of how what you do relates to the web. On the left, you type html, then in the middle, web or mobile browser _parses_ the html with built-in parsers. This allows the browsers to _render_ the html (or css or other markup instructions) to the end-users on the right. For us, the end-users could be mom and dad, or your friends, or me, or potential recruiters.

![diagram of html to browser]({{site.url}}/assets/images/2014-01-16_day03a_w3.png)

__Clone your github repo to local__

If you did the previous lesson on [generating a page with git](../first-site-with-git-generator) correctly, you have a __github repo__ (short for repository) named `user_name.github.io`. Clone this repo to your computer by doing this:

* First navigate to a folder location where you want to clone your repo.
* Next copy the repo url (see image below) from github.

  ![git clone]({{site.url}}/assets/images/2014-01-16_day03a_gitclone.png)

* In your terminal navigated to the place where you will clone the folder, type the following (The $ sign comes with your terminal, so don\'t type that):

  `$ git clone paste_your_repo_address_here`

* It should look something like this - in this case with my repo address -

  ![git clone terminal]({{site.url}}/assets/images/2014-01-16_day03a_terminal.png)

* When you hit enter, you will see some messages in your console, and then you will find that it will have created a clone of the files you see on your github on your computer, so that you can edit and play with the files.



Was it tough to follow some of this stuff? Please share your gripes in the comments. Also, keep in mind, I\'m going to make a [git push supplement](../git-push-pull-supplement/) to this exercise for more practice. Stay tuned.

###Summary###


###Resources###


###Funwork###
* Once again, CodeSchool has a really nice [Try Git](http://try.github.io/) tutorial. It is free; set aside some time to practice.

###Meditation###
These are all new jargons and processes. Things take time to feel familiar. Don\'t be hard on yourself, and instead set learning goals and try your best to keep up. Trust that you will improve over time.
