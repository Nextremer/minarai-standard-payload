!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["minarai-standard-payload"]=t():e["minarai-standard-payload"]=t()}(global,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.w={},r(r.s=9)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(3)),o=u(r(2));function u(e){return e&&e.__esModule?e:{default:e}}t.default={isValidCSChatApplicationServerResponse:(0,n.default)(o.default)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PAYLOAD_TYPES=void 0;var n,o=r(7),u=(n=o)&&n.__esModule?n:{default:n};t.PAYLOAD_TYPES=(0,u.default)({MINARAI_STANDARD_REQUEST:null,MINARAI_STANDARD_RESPONSE_FROM_ENGINE:null,MINARAI_STANDARD_RESPONSE_FROM_MINARAI:null,ANOI_REQUEST:null,ANOI_RESPONSE:null,GODSPEED_REQUEST:null,GODSPEED_RESPONSE:null,CSCHAT_APPLICATION_SERVER_RESPONSE:null})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={head:{engineType:String,engineName:String,requestId:String},body:{messages:Array.of({value:{entries:Array.of([{type:String,md:String,"?text":String,"?face":String},{type:String,"?alt":String,url:String},{type:String,captions:Array.of(String),commands:Array.of(String)},{type:String,command:String}])},"?extra":{}}),"?extra":{}}}},function(e,t){e.exports=require("js-schema")},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return Error.captureStackTrace(r,r.constructor),r.name=r.constructor.name,r}return u(t,Error),t}();t.InvalidPayloadError=function(e){function t(e){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,i),t}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){try{if(!(0,i.default.isValidCSChatApplicationServerResponse)(e))throw new o.InvalidPayloadError;var t=e.head,r=e.body.messages[0],n=r.value.entries.filter(function(e){return"balloon"===e.type}).map(function(e){return{actor:"",text:e.md,extra:{face:e.face||""}}}),u=["horizontalButtons","verticalButtons"],a=r.value.entries.find(function(e){return u.includes(e.type)}),l=["figure","file"],c=r.value.entries.find(function(e){return l.includes(e.type)}),f="chat";return a?(f=a.type,a=a.captions.map(function(e,t){return{presentation:{type:"text",detail:{viewText:e}},action:{type:"command",detail:{value:a.commands[t]}}}})):c&&(f="image-buttons-1",a=[{presentation:{type:"image",detail:{url:c.url}},action:{type:"none",detail:{}}}]),{head:t,body:{messages:[{layout:f,titleText:"",utterances:n,buttons:a,extra:r.extra}]}}}catch(e){return console.log(JSON.stringify(e)),{}}};var n,o=r(4),u=r(0),i=(n=u)&&n.__esModule?n:{default:n}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.from,n=t.to;if(!r||!n)return{};if(!Object.keys(o.PAYLOAD_TYPES).includes(r)||!Object.keys(o.PAYLOAD_TYPES).includes(n))return{};var u=l[r][n];return u?u(e):{}};var n,o=r(1),u=r(5),i=(n=u)&&n.__esModule?n:{default:n};function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=a({},o.PAYLOAD_TYPES.CSCHAT_APPLICATION_SERVER_RESPONSE,a({},o.PAYLOAD_TYPES.MINARAI_STANDARD_RESPONSE_FROM_MINARAI,i.default))},function(e,t){e.exports=require("keymirror")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validator=t.convert=t.PAYLOAD_TYPES=void 0;var n=r(1),o=i(r(6)),u=i(r(0));function i(e){return e&&e.__esModule?e:{default:e}}t.PAYLOAD_TYPES=n.PAYLOAD_TYPES,t.convert=o.default,t.validator=u.default},function(e,t,r){e.exports=r(8)}])});