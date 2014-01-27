---
layout: post
title : "First Jekyll Markdown Blog"
permalink: /blog/first-jekyll-markdown-blog
comments: true
categories: [exercise, web_development]
tags : [part01, exercise 06]

---

###Goal###
To write first blog or post. In markdown. See [resources page](../../resources/) for references and links.

_Great products stem from great problems._

###Recap###
So the previous exercise [was linking CSS to your site](../css-with-bootstrap) and a video supplement on downloading and installing [Twitter Bootstrap](../css-bootstrap-video).

###Main Course###
__Problems__

I don\'t know to whom to attribute the quote above. It is certainly a recurring theme in the tech product and hacker community. One could attribute it to Paul Graham (startup evangelist) or to Amy Hoy (product evangelist), or even to Jack Dorsey (design evangelist). The truth is, it is a commonly held wisdom discussed by many. The thinking goes, build something to __"solve your own problem"__ or "problem of a specific __few users__," and you make a bet that it is going to be valuable to many people. It should certainly be valuableo you. It follows, if the problem is trivial, a trivial product may solve your problem. Conversely, great problems give birth to great products.

Recently, at a happy hour, someone related to me a story of how his previous (failed startup) effort involved building an app involved easily coordinating bar hop amongst friends. I asked him if that was really a problem he needed a new application to solve.

__Form__

Of course, this idea is an old one. [Bauhaus](http://en.wikipedia.org/wiki/Bauhaus) and other modern movement masters preached _form follows function_.

__DRY__

Well, whether you knew it or not, we had a problem. Having to write `<html>` and `<body>` and `<href="">` and bunch of other tags each time you want to write a post or create a page within your website would be a real pain in the ass. The problems are many: time constraints, repetition susceptible to error, and difficulty of reading bunch of html tags - which is not particularly human-readable. In particulr, we would end up violating a cardinal rule amongst software engineers: __DRY__.

DRY means _Don\'t Repeat Yourself_. At least not when you can help it. And with the help of Jekyll static site generator, we really can help.

__Jekyll Gem__

Fortunately, others have built nice tools to solve the problem. In particular, one can write posts in a (mostly) plain text, which everyone knows how to do. __Markdown__ is a tag language that can be parsed by the browser to render HTML. And __Jekyll__ gem allows us to generate static pages in HTML. Basically, you write plain text sprinkled with markdown, and you end up with a HTML webpage without having to write HTML tags.

What is a gem? Gems are Ruby code libraries. In other programming languages like Python or Java, one simply says "libraries," but Rubyists call it "gems." These codes are packaged and modularized, so that they can be plugged in and used by other developers. This process reflects both the themes of __abstraction__ and __universality__ in the programming world. _You solve a problem once. And you can share that solution with the world._

You can see if you have it by running this in your console:

`jekyll --version`

If you don\'t have it installed along with your Ruby - see prior [tutorial on installation](../setting-up-github/) - then you can simply install it from your terminal (internet connection needed).

`gem install jekyll`

You can read the installation documentation directly at the [Jekyll docs](http://jekyllrb.com/docs/installation/). The main reason why we will use Jekyll is because Github pages uses it, so whatever you write, your github page can render directly without additional configuration.

__First Page with Markdown__
coming soon ...


###Summary###
Among other things, we introduced you to the following new concepts and technologies:

* Ruby gems - modularized Ruby codes you can use and re-use to perform specific tasks
* Markdown - a way for converting plain text to HTML
* Jekyll - a way for converting plain text to websites/blogs

###Resources###
__Video walkthrough of running Jekyll__

<iframe width="560" height="315" src="http://www.youtube.com/embed/O7jwA3LSEdA" frameborder="0" allowfullscreen="allow">
</iframe>

###Funwork###
Make a list of personal and team tasks that you have observed are not DRY. Are there possible solutions?

###Meditation###
What are some great unsolved problems? In your life?
