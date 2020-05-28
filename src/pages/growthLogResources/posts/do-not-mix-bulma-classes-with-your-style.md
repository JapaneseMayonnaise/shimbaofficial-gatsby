---
title: "Do not mix Bulma classes and your styling if you are using React/JSX"
date: "2020-05-28"
---
I am remodeling my app Democratic Carpool Karaoke using Bulma, and here is just a quick memo for my future self.

## Do Not Add any styles into pre-defined Bulma classes!
Like for example, don't even attempt to do anything like

```hero``` is Bulma pre-defined classes.
```
// app.js

<section className={`${style.hero} is-fullheight`}>

// app.module.css

.hero {
  background:hsl(348, 100%, 61%) url(../images/background-desktop.jpg) center / cover;
  font-family: 'Permanent Marker', cursive;
}

```
If you are going to do use CSS styles with plain HTML and CSS, this won't cause any problems (as far as I know) but if you are using React, doing this makes Bulma classes invalid. (I think something happens while Babel is transforming JSX )


Instead, just write another class even if elements you are about to apply styles to are thecatly the same as Bulma classes you are looking at
```
// app.js
<section className={`hero is-fullheight ${style.heroBackground}`}>

// app.module.css
.heroBackground {
  background:hsl(348, 100%, 61%) url(../images/background-desktop.jpg) center / cover;
  font-family: 'Permanent Marker', cursive;
}
```
