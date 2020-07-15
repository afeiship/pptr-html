# pptr-html
> Get html by puppeteer.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/pptr-html
```

## usage
```js
import pptrHtml from '@feizheng/pptr-html';

pptrHtml('https://github.com/afeiship').then(res => {
  console.log(res);
});
```

## options
> { headless: true, closeable: true, userAgent: nx.randomUa(), selector: null };


## license
Code released under [the MIT license](https://github.com/afeiship/pptr-html/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/pptr-html
[version-url]: https://npmjs.org/package/@feizheng/pptr-html

[license-image]: https://img.shields.io/npm/l/@feizheng/pptr-html
[license-url]: https://github.com/afeiship/pptr-html/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/pptr-html
[size-url]: https://github.com/afeiship/pptr-html/blob/master/dist/pptr-html.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/pptr-html
[download-url]: https://www.npmjs.com/package/@feizheng/pptr-html
