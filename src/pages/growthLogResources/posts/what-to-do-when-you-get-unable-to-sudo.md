---
title: "What to do when sudo won't work"
date: "2020-09-25"
---

When ```sudo``` doesn't work, it kind of feels like the end of the world (to me, at least). I noticed this message 'unable to resolve host fun-toy: Name or service not known' started to show every now and then when I ran certain commands and ```sudo``` didn't work. Here is what to do when you want that ultimate power back.

## Contents
- The cause of the issue & Fix

## (1) How I identified the cause of the issue

[Ask! Ubuntu](https://askubuntu.com/questions/59458/error-message-sudo-unable-to-resolve-host-none) taught me that 

#### ```/etc/hostname``` and ```/etc/hosts``` both need to contain the name of your machine.

So I took a look at both of them and aha, my /etc/hosts file didn't have my machine name ```fun-toy``` in it. After the edit, the file looks like this;

![/etc/hostname and /etc/host](./images/etc_host.png)

Make sure to run ```sudo reboot``` so that this fix takes into effect.

