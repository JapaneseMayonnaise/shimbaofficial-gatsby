---
title: "Async/Await"
date: "2020-05-25"
---
This is the latter half of promise & async/await revising session post. 

## Contents
- Definitions
- Syntax
- Switch to async/await from promises

## (1) Definitions
MDN says 
> "An asynchronous function is a function which operates asynchronously via the event loop, using an implicit ```promise``` to return its result. [...]"

Another important thing to remember:
> An ```async``` function can contain an ```await``` expression that PAUSES the execusion of the async function and WAITS for the passed ```promise```'s resolution, and then resumes the ```async```function's execusion and returns the resolved value. Remember, the ```await``` keywords is only valid inside ```async``` functions.

Async/await was created to simplify the process of working with and writing chained promises. Hence, async functions return a ```promise```. If the function throws an error, the Promise will be rejected. If the ```promise``` returns a value, the ```promise``` will be resolved.

## (2) Syntax

```
async function doSomething() {}

// arrow function

const doSomething = async() => {}

```
## (3) Switch to async/await from promises
```
const doubleAfter2seconds = x => {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve(x * 2)
      }, 4000)
   });
}

doubleAfter2seconds(10).then(value => {
   console.log(value)
});

```

If I was to add up the resolved value, I'd do

```
const addPromise = x => {
   return new Promise(resolve => {
      doubleAfter2seconds(10).then((a) => {
         doubleAfter2seconds(20).then((b) => {
            doubleAfter2seconds(30).then(c) => {
               resolve(x + a + b + c)
            }
         })
      })
   })
}

addPromise(10).then((sum) => {
   console.log(sum)
})

```

which is...not the easiest thing to read.
If I use async/await, this above become as simple as below

```
const addPromiseAsync = async(x) => {
   const a = await doubleAfter2seconds(10);
   const b = await doubleAfter2seconds(20);
   const c = await doubleAfter2seconds(30);
   return x + a + b + c;
}

addPromiseAsync(10).then((sum) => {
   console.log(sum);
})

```

Thanks to ```await``` keyword, the function ```addPromiseAsync()``` pauses for 2 seconds while it waits for the promise to resolve. Once the promise resolves, variable ```a, b, c``` will have resolved values respectively.
