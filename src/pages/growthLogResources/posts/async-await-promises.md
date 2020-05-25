---
title: "Modularizing functions & promises"
date: "2020-05-25"
---
The 2 main goals of my renovating my app Democratic Carpool Karaoke were
1. To modularize functions into smaller parts from one gignatic ```server.js``` file

2. Make it mobile friendly

As I was working on goal (1), I needed to add asnyc function to my code. It did seem like a good timing to revise promises and async/await, and I'd like leave some memo mostly for my future self.

## Contents
- How to create a ```promise```
- Promise object
- Prototype methods ```.then , .catch, .finally```
- Static methods ```.reject(), .resolve()```

## (1) How to create a ```promise```
``` new Promise( /* executor */ () => (resolve, reject){ ... }```
Promise constructor accpects 2 parameters, ```resolve``` and ```reject```, which are actually in turn functions.

Promises are used for easier handling of asynchronous operations or blocking code, such as API calls, DB calls, etc. These asynchronous operations initiates inside the ```executor``` function.

Easy example of promise

```

console.log("other stuff that is placed before promise but needs to be done asap")

let promise = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve({
         message: "That pizza was good"
      });
   }, 10*1000)
   console.log(promise)
})

console.log("other stuff that is placed after a promise but needs to be done asap")

```

## (2) Promise object
MDN documentation says

> The promise objects represents the eventual completion or failrure of an asynchronous operation, and its resulting value.  

## (3) Prototype methods ```.then , .catch, .finally```

All these 3 methods return a promise in turn. When ```promise``` is just created, it's in ```pending``` state. One or more of the following methods will be run when a promise is settled based on whether they are ```fulfilled``` or ```rejected```.

```Promise.prototype.then(onFullfilled, onRejected)```

```Promise.prototype.catch(onRejected)```

```Promise.prototype.finally(onFinally)```

Here is a real-life promise example. Shimba's roommate Louise asked them if they've done the house chore of the week. Shimba say "I swear to god I will do it this weekend, I promise." Since Shimba gave Louise a promise, now Louise can focus on other tasks instead of keeping telling Shimba about the chore (asynchronous) based on the assumption that they would keep their word and do sweep thr floow this weekend.

This situation looks like this in JavaScirpt world;
```
let shimbasPromise = new Promise((resolve, reject) => {
   shimbasResposibleLevel = 6;

   if(shimbasResposibleLevel > 5) {
      resolve({
         houseChore: "done",
         ifLouiseStillTrustShimba: true
      })
   } else {
      reject("They got carried away with coding");
   }
})

shimbasPromise.then((value) => {
   console.log("Let's see if Shimba is a true adult", 
   JSON.stringify(value))
})

shimbasPromise.catch((reason) => {
         console.log("Shimba did't do house chore again this week because", reason)
})

shimbasPromise.finally(()=> {
   console.log("Irrespective of whether Shimba did house chore or not, Louise still loves Shimba...hopefully")
})

```

## (4) Static methods ```.reject(), .resolve()```

```Promise.resolve(value)``` helps you create a resolved promise.

```
const promise = Promise.resolve("That pizza was okay");
promise.then((value) => {
   console.log("This will run as it is a resolved promise. The resolved value is ", value)
});
promise.catch((reason) => {
   console.log("This will run as it is a rejected promise. The reason for rejection is", reason)
})
```

Whereas ```Promise.reject(reason)``` helps you create a rejected promise.

```
const promise = Promise.reject("sorry dude, not happening")
promise.then((value) => {
   console.log("This will not run since this is a rejected promise")
})
promise.catch((reason) => {
   console.log("This will run as it is a rejected promise. The reason for rejection is", reason)
})

```
