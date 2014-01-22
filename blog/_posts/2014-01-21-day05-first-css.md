---
layout: post
title : css-with-bootstrap
permalink: /blog/css-with-bootstrap
comments: true
categories: [exercise, web_development]
tags : [part01, exercise 05a]

---

###Goal###
Download and 'install' Twitter Bootstrap and talk about CSS.

_Don\'t judge a book by its cover._

###Recap###
So the previous exercise [mockup or wireframing tools](../mockup-tools-balsamiq) was fun. At least I thought so.

As you probably learned from googling, there is no shortage of free wireframing tools. I found another one at [https://wireframe.cc/](https://wireframe.cc/).

###Main Course###
__Project__

It is probably a good idea to pause and clarify (for the late-comers) the following.
* Our overall objective is to become better technical product managers.
* In part 1 of that path, we are getting our technical feet wet with not just CSS/HTML, but actually building and hosting a personal site.
* I recommend you use the opportunity to build a personal site or a blog site, not only for the experience, but as a calling card for yourself.
* An overarching goal here is to undersand software processes better, and to gain a more tangible understanding of how software developers work and think.
* As always, I am here to help you. If you have questions, not only can you post a comment, you can [write me directly](../../askdave/).

__Transformation__

So, before this lesson, our site looked like this.

![site before css]({{site.url}}/assets/images/2014-01-21_ex02.png "site before css" class="img-responsive")

But, now the site looks like this.

![site after css]({{site.url}}/assets/images/2014-01-21_ex05.png "site after css" class="img-responsive")

<strong>What happened???</strong>

__CSS__

CSS happened is what happened! :) What is CSS? I will refer you to the office W3.org documentation for [Cascading Style Sheets](http://www.w3.org/Style/CSS/Overview.en.html). In short, according to W3, it is "a simple mechanism for adding style to Web documents."

Well, and you can see an illustration of that above!

__How do you do it?__

So, how do you link CSS? Back in [lesson 03a](../html-add-text-images), I shared a folder structure. Hopefully, through your HTML and UNIX exercises, you became familiar with the idea of path and linking.

You define a CSS file in a file with extension ending in __.css__ and put it in a folder and tell your __HTML__ page to use the styles in that file. In our folder structure, we have this:

    |-- assets (folder with sub-folders)
        |-- css
            |-- main.css

You remember that from lesson 03a. The __main.css__ file is empty, but try putting the following inside of that file and save the file.

    body {
      padding-top: 70px;
      padding-left: 15px;
      padding-right: 15px;
      color: #321;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

What happens to your home page now?

Nothing? I hope I didn\'t lead you on. Why is there no change to the styles we defined? It is because we did not link the file from our __index.html__ page. To do that, add the following to index.html between the `<head>` tag. Like so:

    <head>
      <title>Your Awesome Page Title</title>
      <link href="/assets/css/main.css" rel="stylesheet">
    </head>

You can see that `/assets/css/` is the path to where the CSS file is, and then we are "linking" it to the page for which we are defining the style rules. Go ahead and do that and save again.

Now, refresh your home page (index.html file). Voila! It should have worked this time.

There are five lines in the body rule we defined. What do you suspect they do line by line? Why don\'t you try it out? _You are the developer!_ Comment out line by line, one by one, and see what kind of changes it makes. Try making 15px into 25px, and see what that does, and so forth.

__Key Concept__: Experimentation is a virtue, when the cost of trying is low.

###Twitter Bootstrap###
Pending ... come back soon. In the mean time, the idea is similar - download Twitter bootstrap and "link" the CSS file.

You might be wondering, what about the __main.css__ file? Well, we will come around to that. That said, it is perfectly fine to have multiple CSS files linked to your page.

###Summary###
We linked CSS file to your site. As before, you can view or download the [personal page demo repo](https://github.com/productmanagers/personal_page_demo).

###Resources###
* Download [Bootstrap](http://getbootstrap.com).

###Funwork###
Play around with the CSS elements.

###Meditation###
