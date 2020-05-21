---
title: "Lessons learned from making web app Democratic Carpool Karaoke"
date: "2020-04-14"
---
DCK makes a mixed-generation playlist on user's Spotify account based on the year user and their friends were born. It may makes more sense if you just click [here](https://democratic-carpool-karaoke.herokuapp.com/) and try it out. Click [here](https://github.com/DrCardamom/democratic-carpool-karaoke) for Source code.

The initial inspiration was my bitter-sweet childhood experience; I wanted to listen to Pokemon songs so badly but whenever I was in a car with my mom, I had no choice but to be forced to listen to ABBA or Cyndy Lauper (Yes they are great, but I was too young to appreciate them). It was the era of casette tape - it required some skills to handle that stuff and I was not "qualified" just yet for the complex operations - it would've been absolutely too much work for her to make a mix tape of Pokemon and Cyndy Lauper, each song in turn. That's what I made possible with this app. All you have to do is to click 4 times and this app creates a perfectly fair playlist that prevents musical dictatorship.

Here are some important lessons and tech stacks I learned through the development of this app.
    
## (1) What exactly is HTTP and what is HTTP servers?
Simply put, HTTP is one of the data tranfer methods among FTP, IMAP, MQTT, Gopher etc. HTTP stands for HyperText Transfer Protocol, so as its name says, it is tranfer protocol, and it's a protocol designed to deliver contents over the internet. HTTPS is HTTP but more secure. Hence, HTTP servers are servers that deal with http requests(GET, POST and such) and deliver contents in JSON form.

## (2) How to write and work with servers
Making this application gave me the much clearer idea of what servers do and how they work. Previously I only briefly knew what they did  - they serve contents upon user's request - but actually writing a server, even simple one such as 

```
app.get(/hi, (req, res) => (
   res.send('I got your request baby');
));
```

and sending data back to the client side through HTTP got my understanding and familiarity to the whole another level. From vaguely recognizing servers as "some mysterious entity on the web that send the data back once you hit the button" to being able to write one and have a good (if not complete) understanding of what enables the client-server communication under the hood, it was a big jump.

## (3) How to work with APIs
I really wanted to make something using API (in this post I am specifically talking about web APIs) because I knew I didn't fully understand yet what exactly APIs were nor what they did. Same as my understanding of servers. I knew what they did but I did't fully. I would google and read the typical description, something like 
> [ noun; computing ]  A set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.

and would be left with so many question marks above my head.

In my understanding, APIs

1. enable you to use data or applications other people or organization created to share with other developers.  
2. are not necesarily a server or database, it's more like an access point that has an access to servers or databases that serve up data you want.
3. send you data back in JSON data form which makes it extra easy for developers, especially JavaScript developers since JSON is so much like JavaScript Object.
4. require you to send them data as well when you make a request (at least as far as Spotify APIs I interacted go, that was always the case) For example, below is the code snippet where I make an API request from server side to API endpoint. variable ``` playlistOptions``` is the information I need to provide in order to create a playlist on user's spotify account.

```
const create_a_playlist_bodyData =
  {
  name: req.body.playlistName,
  description: "Playlist created by the web application 'Democratic Carpool Karaoke'",
  public: true
  }

  let playlistOptions =
  {
    url: 'https://api.spotify.com/v1/users/' + user_id + '/playlists',
    headers: { 'Authorization': 'Bearer ' + access_token,
               'Content-Type' : 'application/json'
             },
    json: true,
    body: create_a_playlist_bodyData
  };

  /**
   * create a playlist
   */
  request.post(playlistOptions, (error, resp, body) =>
  {
    if(!error && resp.statusCode === 200 || 201)
    {
      playlistId = body.id;
      playlistURL = body.external_urls.spotify;

      console.log("============= SUCCESS: Created a playlist  ==============");
      // console.log(body);
      console.log('playlistId: ' + playlistId);
      console.log('playlistURL: ' + body.external_urls.spotify);
    }
    else
    {
      console.log("============= FAIL: Create a playlist  ==============");
      console.log(error);
      console.log(body);
      console.log("error => " + JSON.stringify(error));
      console.log("body => " + JSON.stringify(body));
      console.log(resp.statusCode);
      res.send('failed to create a playlist');
    }
  });

```

This part of the code was particulary interesting because not only did Spotify API give me data, which I used to believe was pretty much the only functionality of APIs, but also it created a playlist for me using the data I provided.

when I finally fully realized what they did the the first aspect of APIs in the list above excited me so much since this encourages the collective knowledge and collaboration as well as speed up the general development of the web creation, which are my favourite motto of the dev community.

## (4) What is REST principle?

There are 6 or so requirements in order for an API to be RESTful. Of all, the only requirements that made much sense to me was that it needs to be stateless; that is, the API does not store any data about the clients and it is self-contained every time it works. It doesn't know if a client has accessed to the endpoint before. The rest 5 of them, I did understand what they said but they also sound very much conceptual since I did not write APIs. I also had a hunch that as long as I only interact with them as a client, I probably wouldn't have the moment of "click" anytime soon and it didn't seem to be an obstacle for me to move on, so I temporarily skipped those 5.

## (5) CLI & Shell scripts
I became much familiar with a terminal because I didn't know such a handy tool called Postman existed throughtout the development of Democratic Carpool Karaoke. Yes, it was a shame that I sent so so many HTTP request manually battling with plain terminal, but one of the valuable lessons I learned was that if you find yourself repeating the same operation more than several times, you can definitely find an app for it. The bright side of this mistake was that I had to use terminal to check if I the server I wrote was working properly with the client side as well as with Spotify APIs. Now I would rather use CLI than GUI for the most operations as it is quicker and more direct(no drag and drop through so many layers). Some of the commands I know what I am doing with are;
```
mkdir, cd, ls, nano, cp, rm, cat, sh, grep, node, echo
```

## (6) It essentially comes down to general problem solving 
It was much later that I noticed that Spotify was actually changing their API endpoints and was being a bit slow on updating their documentation according to the changes. It was both a blessing and a curse that I chose Spotify API to work with because even though I did exactly what they said on their documentation, sometimes it spat an error back to me. Since I wasn't familiar with server side interaction nor terminal, I was first confused thinking there was a typo or I was doing something wrong(and probably I was, sometimes).

The bright side of this was that it taught me that no single person or singlr source can teach you or help you with all questions or issues you are facing. Soemtimes you have to search and read through everything until all links have become purple or to change your code partially until it somehow works. This may sound so so simple but it took me a bit to look for information outside of Spotify SDK website such as StackOverflow, MDN, GitHub forum, freecodecamp, DEV community, MEDIUM, a bunch of personal websites where people logged their own problem solving experiences which greatly inspired me to write about mine as well.

I also should be honest and note here to my future self that I should've asked friends for help, way earlier. If my friend [Nori](https://github.com/kitayamanoriaki) hadn't told me about [nodemon](https://nodemon.io/), I would've wasted so much more time killing my server manually. A good developer may not know everything but is good at getting information needed to unblock themselves, using all resouces available. #efficacy

## (7) Believe in what you are making
There were several occations where I go like "uuuugggghhhhhh" being stuck with bugs or not being able to make sense of browser behaviours. All links I could find were purple already, no friends or mentors knew what to do anymore, and I was so so close to change the design/functionality. The biggest reason why I didn't do so was that I liked my app idea and I believed in it. I'm not entirely sure if I could've done the same stubbornly if this had been just a project for me to show off my skills. Although I do think being flexible and open to changes are also important depending on the situation, as a professional often it is not you who gets to decide what functionality or design to be kept. This project trained my persistence as well as my flexibility.

## (8) JavaScript is cooler than I thought 
It is incredibly powerful that you can write not only the user interfaces but also servers both with one language. Coming from Java, I always felt JavaScript wasn't reliable enough and little too funky. What do you mean you don't even have to declare a variable and also you could assign different type to it?! Man, that's wild. Too wild. (if not strict mode, obviously, and this is why there is TypeScript.) Writing both sides myself made me realize how versatile and scalable JavaScript was,which motivated me to learn JavaScript more seriously.

***

If I'd written this note right after I made this app which is obvisouly what I should've done, there might've been a few more things I'd want to log but these are all I could remember from the notebook on which I scribbled the app ideas and lots of flowcharts and things. I like this app not just because of tech stack I used, but because it solves the problem I faced and can relate to. Excited to work on another fun project like this one!
