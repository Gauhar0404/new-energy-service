(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{38:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o(5)),r=o(1),i=a(o(3));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=p(e);if(t){var r=p(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return m(this,o)}}function m(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(l,e);var t,o,n,a=h(l);function l(){var e;u(this,l);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return v(y(e=a.call.apply(a,[this].concat(o))),"triggerClose",(function(t){e.close(t)})),v(y(e),"allowEscClose",(function(t){27===t.keyCode&&e.element===document.querySelector('.ez-modal[tabindex="-1"]')&&e.close(t)})),v(y(e),"detectHeightCutoff",(function(){e.contentTarget.parentNode.offsetHeight>=document.documentElement.clientHeight?e.element.classList.add("is-too-tall"):e.element.classList.remove("is-too-tall")})),e}return t=l,(o=[{key:"connect",value:function(){this.open(),window.addEventListener("resize",this.detectHeightCutoff),window.addEventListener("keyup",this.allowEscClose),window.addEventListener(i.default.modal.close_modal,this.triggerClose)}},{key:"disconnect",value:function(){window.removeEventListener("resize",this.detectHeightCutoff),window.removeEventListener("keyup",this.allowEscClose),window.removeEventListener(i.default.modal.close_modal,this.triggerClose)}},{key:"open",value:function(){document.body.classList.contains("has-active-modal")||document.body.classList.add("has-active-modal"),this.element.classList.add("is-active"),this.openModals=s(document.querySelectorAll(".ez-modal.is-active")),this.assignModalDepth(),this.normalizeOverlayOpacity(),this.element.hasAttribute("data-singled-out")&&this.hideShowOtherModals("hide"),this.resetModalFocus(),this.detectHeightCutoff()}},{key:"close",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};e&&!e.keyCode&&e.target!==e.currentTarget||(t(e),this.element.hasAttribute("data-disable-easy-close")||(this.element.classList.remove("is-active"),this.element.parentNode.removeChild(this.element),(0,r.triggerCustomEvent)("ModalClosed",{},this.element),this.element.hasAttribute("data-singled-out")&&this.hideShowOtherModals("show"),this.openModals=s(document.querySelectorAll(".ez-modal.is-active")),this.highestModalIndex()>0&&(this.resetModalFocus(),this.normalizeOverlayOpacity()),o(e)),!document.querySelector(".ez-modal")&&document.body.classList.contains("has-active-modal")&&document.body.classList.remove("has-active-modal"))}},{key:"assignModalDepth",value:function(){this.element.setAttribute("data-modal-depth-index",this.highestModalIndex()+1)}},{key:"confirm",value:function(e){this.close(e),(0,r.triggerCustomEvent)("ConfirmModalConfirm",{},e.target)}},{key:"deny",value:function(e){return this.close(e),!1}},{key:"hideShowOtherModals",value:function(e){var t=this;this.openModals.forEach((function(o){o===t.element||o.classList.contains("ez-modal--parent-modal")||("hide"===e?o.classList.add("is-hidden"):o.classList.remove("is-hidden"))}))}},{key:"highestModalIndex",value:function(){var e=[];return this.openModals.forEach((function(t){var o=parseInt(t.getAttribute("data-modal-depth-index"),10)||0;e.push(o)})),Math.max.apply(Math,e)}},{key:"normalizeOverlayOpacity",value:function(){document.querySelector(".ez-modal.is-top-modal")&&document.querySelector(".ez-modal.is-top-modal").classList.remove("is-top-modal"),document.querySelector(".ez-modal[data-modal-depth-index='".concat(this.highestModalIndex(),"']")).classList.add("is-top-modal")}},{key:"resetModalFocus",value:function(){document.querySelector('.ez-modal[tabindex="-1"]')&&document.querySelector('.ez-modal[tabindex="-1"]').removeAttribute("tabindex");var e=document.querySelector(".ez-modal[data-modal-depth-index='".concat(this.highestModalIndex(),"']"));e.setAttribute("tabindex",-1),e.focus()}}])&&d(t.prototype,o),n&&d(t,n),l}(n.default);t.default=b,v(b,"targets",["content"])}}]);
//# sourceMappingURL=account-pages~application~resources-show-815bf30990460907e17f.chunk.js.map