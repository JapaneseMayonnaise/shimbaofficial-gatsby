---
title: "🎉 New website with Bulma + Gatsby 🎉"
date: "2020-05-20"
---
As I code and solve the operating system issues with Pop!_OS more, I started wanting to write about and share my experiences and knowledge with fellow developers. I made a website to host what I wrote as well as to showcase my applications.

If you are interested in my operating system <del>struggle</del> learning journey, you can also read

[My root filesystem became 97% full within 2 months and I ended up remounting /home elsewhere]()

[My boot filesystem suddenly got 100% full and this is how I resolved]()



## Contents
+ Designed with [Bulma](https://bulma.io/)
+ Built with [Gatsby](https://www.gatsbyjs.org/) and [GraphQL](https://graphql.org/)
+ Thoughts

## (1) Bulma: Pros and Cons
I chose Bulma because my webdev superstar [Samantha Ming](https://www.samanthaming.com/) once mentioned it in her blog and I had been curious. Bulma is really simple - it comes without JavaScript. I thought it would be interesting how much vanilla html and CSS could do since I hadn't done a project that didn't involve JavaScript for a long time.

I also rather wanted to support a (relatively) rewly-emerging CSS framework than widely-used and established Bootstrap. Having chosen React over Vue is enough of guilt for me.


### 👍 Pros 
#### 1. Makes it REALLY easy to make a responsive website.
It was incredibly quick and easy to make a responsive website with Bulma. Once you use ```container``` class, it centers all child elements horizonatally out of the box for you. Navbar was pretty much ready to be copied and pasted(except that I had to come up with the function for the hamburger menu bar), and you have a plenty of classes to choose for your flexbox. 

#### 2. Simple yet thorough documentation
I found Bulma's documentation quite approachable. Simple, easy to understand yet thorough. They also offer a couple of quick tutorials that walk you through basic Bulma classes and other assets. I remember last time I used material-UI, their documentation didn't feel as approachable as Bulma's, even taking into account that my developer brain had grown over time.

#### 3. Easy to use with other tech stacks
I was pleased to know how easy it was to use Bulma with Gatsby. All I had to do was to change all ```class``` to ```className``` and install ```gatsby-plugin-sass```. I first made this website quickly without a static site generator to get the feels of it, and wasn't entirely sure how smooth it would be to combine them but oh boy that was just as smooth quality Japanese whiskey 🥃 or...let's say, Patrick chan's skating.

<img src="https://thumbs.gfycat.com/UglySpiffyCrab-size_restricted.gif" alt="patrick chan smoothly skating">

Yes, super smooth.

### 👎 Cons
#### 1. No search bar
This may be a minor thing but it would've been much qsuicker if I could just type in "```v-centered```" than to have to click through documentation > Columns > Options and scroll down or to have to open another tab and search "```bulma v-centered```" in search engine. Once you get used to the site you start to remember what is where but I must say that was one of the things I thought may make Bulma inferior to other CSS framework websites. I am actually going to try to make a search bar and suggest they add it to Bulma website once I finish writing this post.

#### 2. No vertical alignment modifier
Bulma only offers ```level``` class which allows you to horizontally center multiple inline elements, but only centered, not top or bottom. It'd be nice to have classes for vertical alighment.

#### 3. Not much customization allowed
You can only modify these variables listed [here](https://bulma.io/documentation/customize/variables/) and I personally wish I could change more. As of 20th May 2020, they say it's a new addition so they may add more to custmizable variables in near future.


## (2) Gatsby & GraphQL
It was natural for me to choose Gatsby over other SSG such as Jekyll or Hugo since I was already familiar with React.js already. Also Gatsby website convinced me that there were more Gatsby offered than other SSG could, and that excited me. Gatsby is the only SSG I've used so I can't compare it with its competitor but these below are my impressions.

### 👍 Pros 
#### 1. React Components
Nothing did I miss more than components. I took it for granted to be able to break down each elements of the page into smaller pieces and to re-use them whenever you need for a long time. When I made the website landing page mock-up with HTML and Bulma only, it would be no exaggeration to say I was "disturbed" by how many repetition there were. 

#### 2. Easy routing & programatically generate a page
Gatsby offers a couple of ways to create a page but the easiest one is just making a ```PAGENAME.js``` in ```page``` directory. and once you have a page created, you can move between them using ```<Link></Link>``` which esentially gets rendered as ```<a>``` tag.

You can also create a path/slug from a file name using ```gatsby-source-filesystem``` as shown [here](https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/) which I did for my blog posts.

### 👎 Cons
No cons. As far as my needs for SSG went, Gatsby offered all tools and functionalities I needed for this project. APIs were simple to use, plenty of documentations and demos, no conflicts while deploying to Netlify.

#### (4) Thoughts
Making a responsive interface is really fast and easy with Bulma. I like Bulma X Gatsby combo quite a lot.