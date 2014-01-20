---
layout: post
title : git-push-pull-supplement
permalink: /blog/git-push-pull-supplement
comments: true
categories: [exercise, web_development]
tags : [part01, exercise 03b]

---

###Goal###
To get more practice with git commands and terminal.

###Recap###
This is a companion lesson to [html basics](../html-add-text-images/). There, you were asked to _clone_ your github page to your computer (or local environment) so that you can begin adding text and image and other tweaks. If you got stuck, then hopefully this supplement will help.

###Main Course###
Apologies in advance. I asked you all to do a `git clone` but then ended up recording a webcast primarily about `git push` and `git pull`. I hope you are resourceful enough to figure things out. I will include the video here, and also include some screen-shots as `git clone` supplement to the video content. :)

__Video walthrough of github repo and git push__

<iframe width="560" height="315" src="http://www.youtube.com/embed/zjwL68VIAog" frameborder="0" allowfullscreen="allow">
</iframe>

__Clone your github repo to local__

If you did the previous lesson on [generating a page with git](../first-site-with-git-generator) correctly, you have a __github repo__ (short for repository) named `user_name.github.io`. Clone this repo to your computer by doing this:

* First navigate to a folder location where you want to clone your repo.
* Next copy the repo url (see image below) from github.

  ![git clone]({{site.url}}/assets/images/2014-01-16_day03b_gitclone.png "github repo example" class="img-responsive")

* In your terminal navigated to the place where you will clone the folder, type the following (The $ sign comes with your terminal, so don\'t type that):

  `$ git clone paste_your_repo_address_here`

* It should look something like this - in this case with my repo address -

  ![git clone terminal]({{site.url}}/assets/images/2014-01-16_day03b_terminal.png "git clone in terminal" class="img-responsive")

* When you hit enter, you will see some messages in your console, and then you will find that it will have created a clone of the files you see on your github on your computer, so that you can edit and play with the files.

These instructions should make more sense in conjunction with the video which walks you through creating files locally using `touch` command and reading them using `cat` command. You can list your files in the current folder with `ls` command.

###Summary###
This lesson was about getting comfortable with github and git commands, and hopefully some basic UNIX commands as well. In the companion lesson [html basics](../html-add-text-images/) you also gained familiarity with creating a _very_ basic webpage. In the next lesson on [mockups with balsamiq](../mockup-tools-balsamiq), you will have a chance to design what your site looks like. It will be fun.

###Resources###
If you didn\'t start with us from the beginning, and are trying to follow along in Windows machine (fine machines), you might be scratching your head when you open the COMMAND terminal and find that UNIX commands do not work.

My suggestion is take the first step of serious programming and [install Ubuntu](http://www.ubuntu.com/). But, if that is not your cup of tea, then there are alternatives. Google for it and you find that something called [Cyngwin](http://www.cygwin.com/) is quite popular. I find that simply installing the [ruby development kit](http://rubyinstaller.org/downloads/) and adding it to your path gives you most of the basic commands you will need for at least this module. Also, the recent [Windows PowerShell](http://en.wikipedia.org/wiki/Windows_PowerShell) is encouraging and would be the preferred command-line in Windows for me.

###Funwork###
Play with the following UNIX commands in your terminal aka console aka command-line-interface (CLI).

    touch [file name to be created]
    mkdir [folder name to be created]
    ls
    la
    cd [folder name]
    cd .
    cd ..
    cat [file name]
    head [file name]
    tail [file name]
    nano [file name]
    cp [file name]
    mv [file/directory name]
    rm [file name] - careful, this will delete the file, so try on a test file

###Meditation###
Instead of a meditation, I\'ll share a story. I catch myself marveling at how other developers still spend so much of their life on the command line, and how I have come to love using the command line and text editor as well. Yet I find it a little bit odd.

I went to school in North Carolina. (The beauty of its name still tastes sweet whenever I say it.) I was in high school when the fist Netscape came out (the preview versions came in 1996 and first public release in 1997). And I remember the 'nerds' in my high school class sitting behind huge Linux terminals late into the night - shadows of people in front of dark screens with text.

Those folks were, of course, working in command line. And from the first Netscape browser to where we are now with browsers like Chrome or Firefox. When I went to college in 1997, I had seen the future, and yet discounted it as bunch of nerds in a dark room. I wanted to hang around pretty girls. The dark UNIX room was not it.

I don\'t know how many of those shadowy nerds today might be dotcom millionaires or billionaires with companies like google or yahoo (I am guessing some of them came out straight to Silicon Valley in late-90s and stayed). Yet, the thing about technology, it is ever marching on. The story of web technology has been one improvement building on another piece of technology, each time opening new doors. So, you see, you are never too late to learn a bit more about the web and how to interface with it and ultimately use it for some good purpose.

That said, I am not so naive as to suggest that everyone should learn to code; merely, that it is never too late to learn. And the moral of this story is actually about command lines and UNIX commands. As silly as they may seem, give it time and acquire the taste. There is a long and proven history of their effectiveness that commands respect, not judgment.
