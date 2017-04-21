<h1 align="center">image-to-uri</h1>
<div align="center">
  <strong>Convert image file to data URI</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/image-to-uri">
    <img src="https://img.shields.io/npm/v/image-to-uri.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/image-to-uri">
  <img src="https://img.shields.io/npm/dm/image-to-uri.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/image-to-uri">
    <img src="https://img.shields.io/travis/tiaanduplessis/image-to-uri.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fimage-to-uri">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fimage-to-uri.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/image-to-uri">
    <img src="https://dependencyci.com/github/tiaanduplessis/image-to-uri/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/image-to-uri/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/image-to-uri.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/image-to-uri/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/image-to-uri.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/image-to-uri/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/image-to-uri.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20image-to-uri!%20https://github.com/tiaanduplessis/image-to-uri%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/image-to-uri.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaan.beer">Tiaan</a> and <a href="https://github.com/tiaanduplessis/image-to-uri/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#cli">CLI</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install --save image-to-uri
# OR
$ yarn add image-to-uri
```

## Usage

```js

const imageToUri = require('image-to-uri')
console.log(imageToUri('./example.jpg')) // data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQAB...

```

Supported image types:

- png
- gif
- jpg
- jpeg
- bm
- bmp
- webp
- ico
- svg

## CLI

```sh
$ npm install --global image-to-uri
# OR
$ yarn global add image-to-uri
```

Then:

```sh
$ image-to-uri ./example.jpg
# data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQAB...
$ image-to-uri ./example.jpg | pbcopy
# pipe to clipboard(macOS)
```

## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
