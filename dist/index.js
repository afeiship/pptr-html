/*!
 * name: @feizheng/pptr-html
 * description: Get html by puppeteer.
 * homepage: https://github.com/afeiship/pptr-html
 * version: 1.0.0
 * date: 2020-07-15T09:08:00.929Z
 * license: MIT
 */

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _puppeteer=_interopRequireDefault(require("puppeteer"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _await(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}require("@feizheng/next-js-core2"),require("@feizheng/next-random-ua");var DEFAULT_OPTIONS={headless:!0,userAgent:nx.randomUa(),selector:null};function _async(r){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(r.apply(this,e))}catch(e){return Promise.reject(e)}}}var _default=_async(function(n,e){var t=nx.mix(null,DEFAULT_OPTIONS,e),u=t.userAgent,a=t.selector;return _await(_puppeteer.default.launch(t),function(r){return _await(r.newPage(),function(t){return _await(u&&t.setUserAgent(u),function(e){return _await(a&&t.waitForSelector(a),function(e){return _await(t.goto(n),function(){return _await(t.content(),function(e){return _await(r.close(),function(){return e})})})},!a)},!u)})})});exports.default=_default;