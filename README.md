<img src="https://image.ibb.co/hE6fPx/Screen_Shot_2018_04_11_at_11_51_30_PM.png" width="400" />

Easily `prettier` code from your web-app. (**NOTE**: Under construction. Do not touch.)

---

## Motivation

"how 2 run prettier in the browser" is a question I've seen asked many-a-times in the recent past, and I've finally come to the point that I require such functionality for the sake of one of my intellectual love-children. I've put in the time and effort to provide a solution and I hope that you all look back on this and never allow them to put me in a home when I am old and senile.

This implementation doesn't allow you to actually run `prettier` in the browser, but it does allow you to format code using `prettier` from within your web-app, and I think that's a damn good start.

**`gorgeous` is a namespace, referring to the micro-service (server) that formats code _as well as_ the tiny package that allows you to easily interface with the micro-server.**

## Hold My Beer

_Let me show you the light._ This is how easy it is to run `prettier` in your app.

```js
import { gorgeous as prettier } from 'gorgeous'

const someFunction = async () => {
  const { pretty } = await prettier.format(code, config)
  // Now you have pretty code.
}
 ```

## Usage

```
yarn add gorgeous
```

When you install `gorgeous`, you're installing the package that allows you to interface with the micro-service, not the server itself, obviously. (Although a distributable `gorgeous` server package is on the roadmap.)

`gorgeous` exposes a method `format`, just like `prettier`. This is the method that makes the request to the `gorgeous` server and returns your cleannn code. _Some might even say that your code is... on fleek._


```js
import { gorgeous } from 'gorgeous'

const config = {
  "parser": "babylon",
  "tabWidth": 2,
  "trailingComma": "none",
  "printWidth": 80,
  "singleQuote": true,
  "semi": true,
  "arrowParens": "always",
  "jsxBracketSameLine": false,
  "bracketSpacing": true,
  "useTabs": true
}

export const prettier = async (code: string) => {
  const { pretty } = await gorgeous.format(code, config)
  console.log(pretty)
}

prettier("const\n\tfoo\n\t\t=`yolo`")
// "const foo = 'yolo'"
```

## Development

```sh
yarn # install dependencies
yarn dev:start # start it up
```
