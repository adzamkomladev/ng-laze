(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{u47x:function(t,e,n){"use strict";n.d(e,"a",(function(){return T})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return m}));var s=n("ofXK"),o=n("fXoL"),i=n("XNiG"),r=(n("quSY"),n("LRne")),c=(n("FtGj"),n("vkgz"),n("Kj3r"),n("pLZG"),n("lJxs"),n("IzEk")),u=n("8LU1"),a=n("nLfN"),h=n("GU7r");let d=(()=>{class t{constructor(t){this._platform=t}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return function(t){return!!(t.offsetWidth||t.offsetHeight||"function"==typeof t.getClientRects&&t.getClientRects().length)}(t)&&"visible"===getComputedStyle(t).visibility}isTabbable(t){if(!this._platform.isBrowser)return!1;const e=function(t){try{return t.frameElement}catch(e){return null}}((n=t).ownerDocument&&n.ownerDocument.defaultView||window);var n;if(e){const t=e&&e.nodeName.toLowerCase();if(-1===_(e))return!1;if((this._platform.BLINK||this._platform.WEBKIT)&&"object"===t)return!1;if((this._platform.BLINK||this._platform.WEBKIT)&&!this.isVisible(e))return!1}let s=t.nodeName.toLowerCase(),o=_(t);if(t.hasAttribute("contenteditable"))return-1!==o;if("iframe"===s)return!1;if("audio"===s){if(!t.hasAttribute("controls"))return!1;if(this._platform.BLINK)return!0}if("video"===s){if(!t.hasAttribute("controls")&&this._platform.TRIDENT)return!1;if(this._platform.BLINK||this._platform.FIREFOX)return!0}return("object"!==s||!this._platform.BLINK&&!this._platform.WEBKIT)&&!(this._platform.WEBKIT&&this._platform.IOS&&!function(t){let e=t.nodeName.toLowerCase(),n="input"===e&&t.type;return"text"===n||"password"===n||"select"===e||"textarea"===e}(t))&&t.tabIndex>=0}isFocusable(t){return function(t){return!function(t){return function(t){return"input"==t.nodeName.toLowerCase()}(t)&&"hidden"==t.type}(t)&&(function(t){let e=t.nodeName.toLowerCase();return"input"===e||"select"===e||"button"===e||"textarea"===e}(t)||function(t){return function(t){return"a"==t.nodeName.toLowerCase()}(t)&&t.hasAttribute("href")}(t)||t.hasAttribute("contenteditable")||l(t))}(t)&&!this.isDisabled(t)&&this.isVisible(t)}}return t.\u0275fac=function(e){return new(e||t)(o.cc(a.a))},t.\u0275prov=Object(o.Ob)({factory:function(){return new t(Object(o.cc)(a.a))},token:t,providedIn:"root"}),t})();function l(t){if(!t.hasAttribute("tabindex")||void 0===t.tabIndex)return!1;let e=t.getAttribute("tabindex");return"-32768"!=e&&!(!e||isNaN(parseInt(e,10)))}function _(t){if(!l(t))return null;const e=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(e)?-1:e}class b{constructor(t,e,n,s,o=!1){this._element=t,this._checker=e,this._ngZone=n,this._document=s,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,o||this.attachAnchors()}get enabled(){return this._enabled}set enabled(t){this._enabled=t,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}destroy(){const t=this._startAnchor,e=this._endAnchor;t&&(t.removeEventListener("focus",this.startAnchorListener),t.parentNode&&t.parentNode.removeChild(t)),e&&(e.removeEventListener("focus",this.endAnchorListener),e.parentNode&&e.parentNode.removeChild(e)),this._startAnchor=this._endAnchor=null}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement()))})}focusFirstTabbableElementWhenReady(){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement()))})}focusLastTabbableElementWhenReady(){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement()))})}_getRegionBoundary(t){let e=this._element.querySelectorAll(`[cdk-focus-region-${t}], `+`[cdkFocusRegion${t}], `+`[cdk-focus-${t}]`);for(let n=0;n<e.length;n++)e[n].hasAttribute(`cdk-focus-${t}`)?console.warn(`Found use of deprecated attribute 'cdk-focus-${t}', `+`use 'cdkFocusRegion${t}' instead. The deprecated `+"attribute will be removed in 8.0.0.",e[n]):e[n].hasAttribute(`cdk-focus-region-${t}`)&&console.warn(`Found use of deprecated attribute 'cdk-focus-region-${t}', `+`use 'cdkFocusRegion${t}' instead. The deprecated attribute `+"will be removed in 8.0.0.",e[n]);return"start"==t?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(){const t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");return t?(t.hasAttribute("cdk-focus-initial")&&console.warn("Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0",t),Object(o.W)()&&!this._checker.isFocusable(t)&&console.warn("Element matching '[cdkFocusInitial]' is not focusable.",t),t.focus(),!0):this.focusFirstTabbableElement()}focusFirstTabbableElement(){const t=this._getRegionBoundary("start");return t&&t.focus(),!!t}focusLastTabbableElement(){const t=this._getRegionBoundary("end");return t&&t.focus(),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;let e=t.children||t.childNodes;for(let n=0;n<e.length;n++){let t=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(t)return t}return null}_getLastTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;let e=t.children||t.childNodes;for(let n=e.length-1;n>=0;n--){let t=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(t)return t}return null}_createAnchor(){const t=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,t),t.classList.add("cdk-visually-hidden"),t.classList.add("cdk-focus-trap-anchor"),t.setAttribute("aria-hidden","true"),t}_toggleAnchorTabIndex(t,e){t?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(t){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}_executeOnStable(t){this._ngZone.isStable?t():this._ngZone.onStable.asObservable().pipe(Object(c.a)(1)).subscribe(t)}}let m=(()=>{class t{constructor(t,e,n){this._checker=t,this._ngZone=e,this._document=n}create(t,e=!1){return new b(t,this._checker,this._ngZone,this._document,e)}}return t.\u0275fac=function(e){return new(e||t)(o.cc(d),o.cc(o.z),o.cc(s.c))},t.\u0275prov=Object(o.Ob)({factory:function(){return new t(Object(o.cc)(d),Object(o.cc)(o.z),Object(o.cc)(s.c))},token:t,providedIn:"root"}),t})();"undefined"!=typeof Element&&Element;const f=new o.q("cdk-focus-monitor-default-options"),g=Object(a.e)({passive:!0,capture:!0});let p=(()=>{class t{constructor(t,e,n,s){this._ngZone=t,this._platform=e,this._origin=null,this._windowFocused=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._documentKeydownListener=()=>{this._lastTouchTarget=null,this._setOriginForCurrentEventQueue("keyboard")},this._documentMousedownListener=t=>{if(!this._lastTouchTarget){const e=function(t){return 0===t.buttons}(t)?"keyboard":"mouse";this._setOriginForCurrentEventQueue(e)}},this._documentTouchstartListener=t=>{null!=this._touchTimeoutId&&clearTimeout(this._touchTimeoutId),this._lastTouchTarget=w(t),this._touchTimeoutId=setTimeout(()=>this._lastTouchTarget=null,650)},this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)},this._rootNodeFocusAndBlurListener=t=>{const e=w(t),n="focus"===t.type?this._onFocus:this._onBlur;for(let s=e;s;s=s.parentElement)n.call(this,t,s)},this._document=n,this._detectionMode=(null==s?void 0:s.detectionMode)||0}monitor(t,e=!1){if(!this._platform.isBrowser)return Object(r.a)(null);const n=Object(u.e)(t),s=Object(a.c)(n)||this._getDocument(),o=this._elementInfo.get(n);if(o)return e&&(o.checkChildren=!0),o.subject.asObservable();const c={checkChildren:e,subject:new i.a,rootNode:s};return this._elementInfo.set(n,c),this._registerGlobalListeners(c),c.subject.asObservable()}stopMonitoring(t){const e=Object(u.e)(t),n=this._elementInfo.get(e);n&&(n.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(n))}focusVia(t,e,n){const s=Object(u.e)(t);this._setOriginForCurrentEventQueue(e),"function"==typeof s.focus&&s.focus(n)}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_toggleClass(t,e,n){n?t.classList.add(e):t.classList.remove(e)}_getFocusOrigin(t){return this._origin?this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:this._wasCausedByTouch(t)?"touch":"program"}_setClasses(t,e){this._toggleClass(t,"cdk-focused",!!e),this._toggleClass(t,"cdk-touch-focused","touch"===e),this._toggleClass(t,"cdk-keyboard-focused","keyboard"===e),this._toggleClass(t,"cdk-mouse-focused","mouse"===e),this._toggleClass(t,"cdk-program-focused","program"===e)}_setOriginForCurrentEventQueue(t){this._ngZone.runOutsideAngular(()=>{this._origin=t,0===this._detectionMode&&(this._originTimeoutId=setTimeout(()=>this._origin=null,1))})}_wasCausedByTouch(t){const e=w(t);return this._lastTouchTarget instanceof Node&&e instanceof Node&&(e===this._lastTouchTarget||e.contains(this._lastTouchTarget))}_onFocus(t,e){const n=this._elementInfo.get(e);if(!n||!n.checkChildren&&e!==w(t))return;const s=this._getFocusOrigin(t);this._setClasses(e,s),this._emitOrigin(n.subject,s),this._lastFocusOrigin=s}_onBlur(t,e){const n=this._elementInfo.get(e);!n||n.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(n.subject,null))}_emitOrigin(t,e){this._ngZone.run(()=>t.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;const e=t.rootNode,n=this._rootNodeFocusListenerCount.get(e)||0;n||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,g),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,g)}),this._rootNodeFocusListenerCount.set(e,n+1),1==++this._monitoredElementCount&&this._ngZone.runOutsideAngular(()=>{const t=this._getDocument(),e=this._getWindow();t.addEventListener("keydown",this._documentKeydownListener,g),t.addEventListener("mousedown",this._documentMousedownListener,g),t.addEventListener("touchstart",this._documentTouchstartListener,g),e.addEventListener("focus",this._windowFocusListener)})}_removeGlobalListeners(t){const e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){const t=this._rootNodeFocusListenerCount.get(e);t>1?this._rootNodeFocusListenerCount.set(e,t-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,g),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,g),this._rootNodeFocusListenerCount.delete(e))}if(!--this._monitoredElementCount){const t=this._getDocument(),e=this._getWindow();t.removeEventListener("keydown",this._documentKeydownListener,g),t.removeEventListener("mousedown",this._documentMousedownListener,g),t.removeEventListener("touchstart",this._documentTouchstartListener,g),e.removeEventListener("focus",this._windowFocusListener),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._touchTimeoutId),clearTimeout(this._originTimeoutId)}}}return t.\u0275fac=function(e){return new(e||t)(o.cc(o.z),o.cc(a.a),o.cc(s.c,8),o.cc(f,8))},t.\u0275prov=Object(o.Ob)({factory:function(){return new t(Object(o.cc)(o.z),Object(o.cc)(a.a),Object(o.cc)(s.c,8),Object(o.cc)(f,8))},token:t,providedIn:"root"}),t})();function w(t){return t.composedPath?t.composedPath()[0]:t.target}let L=(()=>{class t{constructor(t,e){this._platform=t,this._document=e}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);const e=this._document.defaultView||window,n=e&&e.getComputedStyle?e.getComputedStyle(t):null,s=(n&&n.backgroundColor||"").replace(/ /g,"");switch(this._document.body.removeChild(t),s){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(this._platform.isBrowser&&this._document.body){const t=this._document.body.classList;t.remove("cdk-high-contrast-active"),t.remove("cdk-high-contrast-black-on-white"),t.remove("cdk-high-contrast-white-on-black");const e=this.getHighContrastMode();1===e?(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-black-on-white")):2===e&&(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-white-on-black"))}}}return t.\u0275fac=function(e){return new(e||t)(o.cc(a.a),o.cc(s.c))},t.\u0275prov=Object(o.Ob)({factory:function(){return new t(Object(o.cc)(a.a),Object(o.cc)(s.c))},token:t,providedIn:"root"}),t})(),T=(()=>{class t{constructor(t){t._applyBodyHighContrastModeCssClasses()}}return t.\u0275mod=o.Qb({type:t}),t.\u0275inj=o.Pb({factory:function(e){return new(e||t)(o.cc(L))},imports:[[a.b,h.b]]}),t})()}}]);