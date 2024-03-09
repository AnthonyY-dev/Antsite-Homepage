# Antsite-Homepage

This is the homepage to the website antsite.xyz.

## Setup

To setup the page, you need to add some api keys and tokens.

Create a file inside the `src/config` folder, and call it `config.ts`.

Copy the below template, and paste it into config.ts and fill out all the fields marked with a hashtag.

```js
export const config = {
  firebase: {
    apiKey: "#",
    authDomain: "#.firebaseapp.com",
    projectId: "#",
    storageBucket: "#.appspot.com",
    messagingSenderId: "#",
    appId: "#",
    measurementId: "#",
  },
};
```
