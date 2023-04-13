# YASA, Yet Another Search App

## What is this?

This is a Next.js app to search for tv shows, made in about 5 hours.

## Running locally

1. install dependencies ```npm i```
1. install playwright browser (don't worry, just 1 🙂) ```npx playwright install```
1. run the local server ```npm run dev```
1. (on a different terminal session) run e2e tests ```npm run test:e2e```


## Improvements

I ran out of time working on this, most notably, there's an incomplete e2e internet connectivity test. If I had some more time I would continue working on adding more e2e tests, unit and integration tests, and more specific errors, instead of generic ones. 

Also, based on the feedback from lighthouse on performance and accessibility I would introduce those changes to the codebase.

In terms of UI, the search state should also be persisted in the URL, for a better UX when going back and forth between the show page and the home page.

In terms of architecture, and thinking about this being the start of a more complex app, I would probably have gone with a framework like https://trpc.io/, that has more type safety between the server and client out of the box.

In terms of usability and design, I didn’t have time to improve the search box, the low internet connectivity banner and the positioning of some elements in mobile and desktop.

There's of course probably much more improvements to be made that I'm missing. 

Hejdå!
