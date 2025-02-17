# Valentine's Website

This website is for your special someone <3

## What to edit

edit the metadata in /src/app/layout.js

```js
export const metadata = {
  title: "<title here>",
  description: "<desc here>",
};
```

edit your messages in /src/app/page.js

```js
const messages = [
  ...your messages
];
```

## How to run locally

- install node (recommendation: [nvm linux](https://github.com/nvm-sh/nvm) / [nvm windows](https://github.com/coreybutler/nvm-windows))
- clone this repository `git clone https://github.com/mulitet4/Valentines-25`
- run `npm i`
- `npm start dev`

## How to host

- fork this repository
- log in to vercel
- give it access to your github repository
- set it to next.js
- deploy!
