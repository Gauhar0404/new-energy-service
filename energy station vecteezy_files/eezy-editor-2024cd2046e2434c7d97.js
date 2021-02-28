!function(e){function t(t){for(var o,a,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(l&&l(t);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={81:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://static.vecteezy.com/packs/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([996,0,1,3,8,7,9,16,25,56,2,4,6,49]),n()}({996:function(e,t,n){"use strict";var o,r=n(2),i=(o=n(997))&&o.__esModule?o:{default:o};r.Application.start().register("eezy-editor",i.default)},997:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(n(5)),r=f(n(203)),i=f(n(7)),a=f(n(35)),s=n(296),c=f(n(3)),u=f(n(73)),l=n(1),d=f(n(299));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=b(e);if(t){var r=b(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(p,e);var t,n,o,f=y(p);function p(){return v(this,p),f.apply(this,arguments)}return t=p,(n=[{key:"connect",value:function(){var e=this;this.element.addEventListener(c.default.editor.command,(function(t){e.handleEditorEvents(t)})),window.addEventListener(c.default.editor.load,(function(){e.loadEditor()}),{once:!0}),this.element.hasAttribute("data-autoload")&&((0,s.browserSupportsEditor)()?this.loadEditor():window.location.assign("/editor")),window.bodymovin=r.default,window.ProgressBar=d.default,this.flagLoaded()}},{key:"disconnect",value:function(){var e=this;this.element.removeEventListener(c.default.editor.command,(function(){e.handleEditorEvents()})),window.bodymovin=null,window.ProgressBar=null}},{key:"handleEditorEvents",value:function(e){var t=e.detail;switch(t){case"exit":(0,l.triggerCustomEvent)(c.default.editor.exit,{pathname:window.location.pathname}),window.location.assign(this.element.getAttribute("data-exit-path"));break;case"help":window.open("https://eezy.zendesk.com/hc/en-us/categories/115000042227-Editor-App","_blank");break;case"triggerJoinPremium":(0,l.triggerCustomEvent)(c.default.editor.join_pro,{}),i.default.set("editorSaveBeforeJoinPremium",!0),window.location.assign(this.element.getAttribute("data-join-pro-path"));break;case"triggerLogin":i.default.set("editorSaveBeforeLogin",!0),document.querySelector('[data-action="site-header#headerLogin"]').click();break;case"triggerSignUp":i.default.set("editorSaveBeforeLogin",!0),document.querySelector('[data-action="site-header#headerSignUp"]').click();break;default:console.warn("unknown editor command received: %s",t)}}},{key:"loadEditor",value:function(){var e=this,t=this.element.getAttribute("data-build");(0,u.default)("/components/eezy-editor/libs/domJSON.min.js",(function(){(0,u.default)("/components/eezy-editor/eezy-editor.js?build=".concat(t),(function(){e.initializeEditor()}))}))}},{key:"initializeEditor",value:function(){this.element.setAttribute("enabled",!0),this.loadSvg(),this.loadZendeskWidget()}},{key:"loadSvg",value:function(){var e=this;"undefined"!==typeof this.element.whenDOMLoaded?a.default.get(this.svgUrl()).then((function(t){e.element.whenDOMLoaded.then((function(){e.showBigFileDialog()?(e.element.showBigFileDialog(),e.element.bigSVG=t.data):e.element.artworkSVG=t.data}))})).catch((function(e){alert("couldn't load svg: %s",e)})):setTimeout((function(){e.loadSvg()}),100)}},{key:"loadZendeskWidget",value:function(){window.zEmbed||function(e,t){var n,o,r,i,a=[],s=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,s.src="javascript:false",s.title="",s.role="presentation",(s.frameElement||s).style.cssText="display: none",(r=(r=document.getElementsByTagName("script"))[r.length-1]).parentNode.insertBefore(s,r),i=s.contentWindow.document;try{o=i}catch(e){n=document.domain,s.src='javascript:var d=document.open();d.domain="'.concat(n,'";void(0);'),o=i}o.open()._l=function(){var e=this.createElement("script");n&&(this.domain=n),e.id="js-iframe-async",e.src="https://assets.zendesk.com/embeddable_framework/main.js",this.t=+new Date,this.zendeskHost="eezy.zendesk.com",this.zEQueue=a,this.body.appendChild(e)},o.write('<body onload="document._l();">'),o.close()}();var e=window.setInterval((function(){var t=document.querySelector("iframe#launcher.zEWidget-launcher--active");t&&(t.style.margin="3px 20px",window.clearInterval(e))}),500)}},{key:"showBigFileDialog",value:function(){var e=this.element.getAttribute("data-svg-size");return!!(e&&parseInt(e,10)>5e5)}},{key:"svgUrl",value:function(){if(this.element.hasAttribute("random")){var e=this.randomSvgs();return e[Math.floor(Math.random()*e.length)]}return this.element.getAttribute("data-svg-url")}},{key:"randomSvgs",value:function(){return["https://static.vecteezy.com/system/resources/svgs/000/131/052/original/2a75cb49-f76c-431f-914f-cc0e5748e5f4.svg?1484155946","https://static.vecteezy.com/system/resources/svgs/000/114/102/original/cca0fca0-8f9d-4d7b-bf85-aae7dee55571.svg?1484930265","https://static.vecteezy.com/system/resources/svgs/000/097/362/original/06d90c10-4f89-43d0-8929-37472b0e9e67.svg?1484157815","https://static.vecteezy.com/system/resources/svgs/000/116/857/original/ca51da6a-f33b-413b-9338-ed6b1609b271.svg?1484167134","https://static.vecteezy.com/system/resources/svgs/000/133/824/original/80f953e9-877a-4a0c-b36a-31f3139d7875.svg?1484930401","https://static.vecteezy.com/system/resources/svgs/000/116/854/original/c74e301f-5d0a-4c92-b894-ff767da070a7.svg?1484167213","https://static.vecteezy.com/system/resources/svgs/000/117/588/original/1f551eb9-8235-4575-b71a-b6cd291fe8cc.svg?1484167903","https://static.vecteezy.com/system/resources/svgs/000/117/526/original/2d1e72f8-25c2-44dc-8ffd-54393c0cab7c.svg?1484930872"]}}])&&m(t.prototype,n),o&&m(t,o),p}(o.default);t.default=w}});
//# sourceMappingURL=eezy-editor-2024cd2046e2434c7d97.js.map