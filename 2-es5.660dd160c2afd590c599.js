function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(u){r=!0,o=u}finally{try{i||null==a.return||a.return()}finally{if(r)throw o}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"B+r4":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return h}));var i=n("0MNC"),r=n("nLfN"),o=n("JwMs"),s=n("jtHE"),a=n("XNiG"),u=n("1G5W"),c=n("/KA4"),l=n("ofXK"),d=n("fXoL"),h=function(){var e=function(){function e(t,n,i,r,o,u){_classCallCheck(this,e),this.elementRef=t,this.renderer=n,this.mediaMatcher=i,this.ngZone=r,this.platform=o,this.breakpointService=u,this.nzType="flex",this.nzAlign=null,this.nzJustify=null,this.nzGutter=null,this.actualGutter$=new s.a(1),this.destroy$=new a.a}return _createClass(e,[{key:"getGutter",value:function(){var e=this,t=[0,0],n=this.nzGutter||0;return(Array.isArray(n)?n:[n,0]).forEach((function(n,i){"object"==typeof n?(t[i]=0,Object.keys(o.e).map((function(r){var s=r;e.mediaMatcher.matchMedia(o.e[s]).matches&&n[s]&&(t[i]=n[s])}))):t[i]=n||0})),t}},{key:"setGutterStyle",value:function(){var e=this,t=_slicedToArray(this.getGutter(),2),n=t[0],i=t[1];this.actualGutter$.next([n,i]);var r=function(t,n){e.renderer.setStyle(e.elementRef.nativeElement,t,"-".concat(n/2,"px"))};n>0&&(r("margin-left",n),r("margin-right",n)),i>0&&(r("margin-top",i),r("margin-bottom",i))}},{key:"ngOnInit",value:function(){this.setGutterStyle()}},{key:"ngOnChanges",value:function(e){e.nzGutter&&this.setGutterStyle()}},{key:"ngAfterViewInit",value:function(){var e=this;this.platform.isBrowser&&this.breakpointService.subscribe(o.e).pipe(Object(u.a)(this.destroy$)).subscribe((function(){e.setGutterStyle()}))}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(d.Nb(d.l),d.Nb(d.E),d.Nb(i.b),d.Nb(d.z),d.Nb(r.a),d.Nb(o.b))},e.\u0275dir=d.Ib({type:e,selectors:[["","nz-row",""],["nz-row"],["nz-form-item"]],hostVars:18,hostBindings:function(e,t){2&e&&d.Eb("ant-row",!0)("ant-row-top","top"===t.nzAlign)("ant-row-middle","middle"===t.nzAlign)("ant-row-bottom","bottom"===t.nzAlign)("ant-row-start","start"===t.nzJustify)("ant-row-end","end"===t.nzJustify)("ant-row-center","center"===t.nzJustify)("ant-row-space-around","space-around"===t.nzJustify)("ant-row-space-between","space-between"===t.nzJustify)},inputs:{nzType:"nzType",nzAlign:"nzAlign",nzJustify:"nzJustify",nzGutter:"nzGutter"},exportAs:["nzRow"],features:[d.Ab]}),e}(),f=function(){var e=function(){function e(t,n,i){_classCallCheck(this,e),this.elementRef=t,this.nzRowDirective=n,this.renderer=i,this.classMap={},this.destroy$=new a.a,this.hostFlexStyle=null,this.nzFlex=null,this.nzSpan=null,this.nzOrder=null,this.nzOffset=null,this.nzPush=null,this.nzPull=null,this.nzXs=null,this.nzSm=null,this.nzMd=null,this.nzLg=null,this.nzXl=null,this.nzXXl=null}return _createClass(e,[{key:"setHostClassMap",value:function(){var e,t=Object.assign((_defineProperty(e={"ant-col":!0},"ant-col-".concat(this.nzSpan),Object(c.e)(this.nzSpan)),_defineProperty(e,"ant-col-order-".concat(this.nzOrder),Object(c.e)(this.nzOrder)),_defineProperty(e,"ant-col-offset-".concat(this.nzOffset),Object(c.e)(this.nzOffset)),_defineProperty(e,"ant-col-pull-".concat(this.nzPull),Object(c.e)(this.nzPull)),_defineProperty(e,"ant-col-push-".concat(this.nzPush),Object(c.e)(this.nzPush)),e),this.generateClass());for(var n in this.classMap)this.classMap.hasOwnProperty(n)&&this.renderer.removeClass(this.elementRef.nativeElement,n);for(var i in this.classMap=Object.assign({},t),this.classMap)this.classMap.hasOwnProperty(i)&&this.classMap[i]&&this.renderer.addClass(this.elementRef.nativeElement,i)}},{key:"setHostFlexStyle",value:function(){this.hostFlexStyle=this.parseFlex(this.nzFlex)}},{key:"parseFlex",value:function(e){return"number"==typeof e?"".concat(e," ").concat(e," auto"):"string"==typeof e&&/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}},{key:"generateClass",value:function(){var e=this,t={};return["nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"].forEach((function(n){var i=n.replace("nz","").toLowerCase();if(Object(c.e)(e[n]))if("number"==typeof e[n]||"string"==typeof e[n])t["ant-col-".concat(i,"-").concat(e[n])]=!0;else{var r=e[n];["span","pull","push","offset","order"].forEach((function(e){t["ant-col-".concat(i).concat("span"===e?"-":"-".concat(e,"-")).concat(r[e])]=r&&Object(c.e)(r[e])}))}})),t}},{key:"ngOnInit",value:function(){this.setHostClassMap(),this.setHostFlexStyle()}},{key:"ngOnChanges",value:function(e){this.setHostClassMap(),e.nzFlex&&this.setHostFlexStyle()}},{key:"ngAfterViewInit",value:function(){var e=this;this.nzRowDirective&&this.nzRowDirective.actualGutter$.pipe(Object(u.a)(this.destroy$)).subscribe((function(t){var n=_slicedToArray(t,2),i=n[0],r=n[1],o=function(t,n){e.renderer.setStyle(e.elementRef.nativeElement,t,"".concat(n/2,"px"))};i>0&&(o("padding-left",i),o("padding-right",i)),r>0&&(o("padding-top",r),o("padding-bottom",r))}))}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(d.Nb(d.l),d.Nb(h,9),d.Nb(d.E))},e.\u0275dir=d.Ib({type:e,selectors:[["","nz-col",""],["nz-col"],["nz-form-control"],["nz-form-label"]],hostVars:2,hostBindings:function(e,t){2&e&&d.vc("flex",t.hostFlexStyle)},inputs:{nzFlex:"nzFlex",nzSpan:"nzSpan",nzOrder:"nzOrder",nzOffset:"nzOffset",nzPush:"nzPush",nzPull:"nzPull",nzXs:"nzXs",nzSm:"nzSm",nzMd:"nzMd",nzLg:"nzLg",nzXl:"nzXl",nzXXl:"nzXXl"},exportAs:["nzCol"],features:[d.Ab]}),e}(),b=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=d.Lb({type:e}),e.\u0275inj=d.Kb({factory:function(t){return new(t||e)},imports:[[l.b,i.a,r.b]]}),e}()},C2AL:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var i=n("nLfN"),r=n("fXoL"),o=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.elementRef=t,this.renderer=n,this.hidden=null,this.renderer.setAttribute(this.elementRef.nativeElement,"hidden","")}return _createClass(e,[{key:"setHiddenAttribute",value:function(){!0===this.hidden?this.renderer.setAttribute(this.elementRef.nativeElement,"hidden",""):!1===this.hidden||null===this.hidden?this.renderer.removeAttribute(this.elementRef.nativeElement,"hidden"):"string"==typeof this.hidden&&this.renderer.setAttribute(this.elementRef.nativeElement,"hidden",this.hidden)}},{key:"ngOnChanges",value:function(){this.setHiddenAttribute()}},{key:"ngAfterViewInit",value:function(){this.setHiddenAttribute()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Nb(r.l),r.Nb(r.E))},e.\u0275dir=r.Ib({type:e,selectors:[["","nz-button",""],["nz-button-group"],["","nz-icon",""],["","nz-menu-item",""],["","nz-submenu",""],["nz-select-top-control"],["nz-select-placeholder"]],inputs:{hidden:"hidden"},features:[r.Ab]}),e}(),s=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)},imports:[[i.b]]}),e}()},OzZK:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return z}));var i=n("mrSG"),r=n("fXoL"),o=n("2Suw"),s=n("/KA4"),a=n("FwiY"),u=n("XNiG"),c=n("1G5W"),l=n("JX91"),d=n("pLZG"),h=n("ofXK"),f=n("C2AL"),b=n("RwU8"),g=["nz-button",""];function v(e,t){1&e&&r.Ob(0,"i",1)}var m=["*"],y=function(){var e=function(){function e(t,n,i,r){var o=this;_classCallCheck(this,e),this.elementRef=t,this.cdr=n,this.renderer=i,this.nzConfigService=r,this.nzBlock=!1,this.nzGhost=!1,this.nzSearch=!1,this.nzLoading=!1,this.nzDanger=!1,this.disabled=!1,this.tabIndex=null,this.nzType=null,this.nzShape=null,this.nzSize="default",this.destroy$=new u.a,this.loading$=new u.a,this.nzConfigService.getConfigChangeEventForComponent("button").pipe(Object(c.a)(this.destroy$)).subscribe((function(){o.cdr.markForCheck()}))}return _createClass(e,[{key:"haltDisabledEvents",value:function(e){this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}},{key:"insertSpan",value:function(e,t){e.forEach((function(e){if("#text"===e.nodeName){var n=t.createElement("span"),i=t.parentNode(e);t.insertBefore(i,n,e),t.appendChild(n,e)}}))}},{key:"assertIconOnly",value:function(e,t){var n=Array.from(e.childNodes),i=n.filter((function(e){return"I"===e.nodeName})).length,r=n.every((function(e){return"#text"!==e.nodeName}));n.every((function(e){return"SPAN"!==e.nodeName}))&&r&&1===i&&t.addClass(e,"ant-btn-icon-only")}},{key:"ngOnChanges",value:function(e){e.nzLoading&&this.loading$.next(this.nzLoading)}},{key:"ngAfterViewInit",value:function(){this.assertIconOnly(this.elementRef.nativeElement,this.renderer),this.insertSpan(this.elementRef.nativeElement.childNodes,this.renderer)}},{key:"ngAfterContentInit",value:function(){var e=this;this.loading$.pipe(Object(l.a)(this.nzLoading),Object(d.a)((function(){return!!e.nzIconDirectiveElement})),Object(c.a)(this.destroy$)).subscribe((function(t){var n=e.nzIconDirectiveElement.nativeElement;t?e.renderer.setStyle(n,"display","none"):e.renderer.removeStyle(n,"display")}))}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Nb(r.l),r.Nb(r.h),r.Nb(r.E),r.Nb(o.a))},e.\u0275cmp=r.Hb({type:e,selectors:[["button","nz-button",""],["a","nz-button",""]],contentQueries:function(e,t,n){var i;1&e&&r.Gb(n,a.a,!0,r.l),2&e&&r.oc(i=r.bc())&&(t.nzIconDirectiveElement=i.first)},hostVars:30,hostBindings:function(e,t){1&e&&r.ac("click",(function(e){return t.haltDisabledEvents(e)})),2&e&&(r.Db("tabindex",t.disabled?-1:null===t.tabIndex?null:t.tabIndex)("disabled",t.disabled||null),r.Eb("ant-btn",!0)("ant-btn-primary","primary"===t.nzType)("ant-btn-dashed","dashed"===t.nzType)("ant-btn-link","link"===t.nzType)("ant-btn-danger","danger"===t.nzType)("ant-btn-circle","circle"===t.nzShape)("ant-btn-round","round"===t.nzShape)("ant-btn-lg","large"===t.nzSize)("ant-btn-sm","small"===t.nzSize)("ant-btn-dangerous",t.nzDanger)("ant-btn-loading",t.nzLoading)("ant-btn-background-ghost",t.nzGhost)("ant-btn-block",t.nzBlock)("ant-input-search-button",t.nzSearch))},inputs:{nzBlock:"nzBlock",nzGhost:"nzGhost",nzSearch:"nzSearch",nzLoading:"nzLoading",nzDanger:"nzDanger",disabled:"disabled",tabIndex:"tabIndex",nzType:"nzType",nzShape:"nzShape",nzSize:"nzSize"},exportAs:["nzButton"],features:[r.Ab],attrs:g,ngContentSelectors:m,decls:2,vars:1,consts:[["nz-icon","","nzType","loading",4,"ngIf"],["nz-icon","","nzType","loading"]],template:function(e,t){1&e&&(r.hc(),r.wc(0,v,1,0,"i",0),r.gc(1)),2&e&&r.ic("ngIf",t.nzLoading)},directives:[h.j,a.a,f.a],encapsulation:2,changeDetection:0}),Object(i.a)([Object(s.a)(),Object(i.b)("design:type",Boolean)],e.prototype,"nzBlock",void 0),Object(i.a)([Object(s.a)(),Object(i.b)("design:type",Boolean)],e.prototype,"nzGhost",void 0),Object(i.a)([Object(s.a)(),Object(i.b)("design:type",Boolean)],e.prototype,"nzSearch",void 0),Object(i.a)([Object(s.a)(),Object(i.b)("design:type",Boolean)],e.prototype,"nzLoading",void 0),Object(i.a)([Object(s.a)(),Object(i.b)("design:type",Boolean)],e.prototype,"nzDanger",void 0),Object(i.a)([Object(s.a)(),Object(i.b)("design:type",Boolean)],e.prototype,"disabled",void 0),Object(i.a)([Object(o.b)("button"),Object(i.b)("design:type",String)],e.prototype,"nzSize",void 0),e}(),p=function(){var e=function e(){_classCallCheck(this,e),this.nzSize="default"};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Hb({type:e,selectors:[["nz-button-group"]],hostVars:6,hostBindings:function(e,t){2&e&&r.Eb("ant-btn-group",!0)("ant-btn-group-lg","large"===t.nzSize)("ant-btn-group-sm","small"===t.nzSize)},inputs:{nzSize:"nzSize"},exportAs:["nzButtonGroup"],ngContentSelectors:m,decls:1,vars:0,template:function(e,t){1&e&&(r.hc(),r.gc(0))},encapsulation:2,changeDetection:0}),e}(),z=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)},imports:[[h.b,b.b,a.b,f.b],f.b,b.b]}),e}()},RwU8:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var i=n("nLfN"),r=n("fXoL"),o=n("R1ws"),s=function(){function e(t,n,r){var o=this;_classCallCheck(this,e),this.triggerElement=t,this.ngZone=n,this.insertExtraNode=r,this.waveTransitionDuration=400,this.styleForPseudo=null,this.extraNode=null,this.lastTime=0,this.platform=new i.a,this.onClick=function(e){!o.triggerElement||!o.triggerElement.getAttribute||o.triggerElement.getAttribute("disabled")||"INPUT"===e.target.tagName||o.triggerElement.className.indexOf("disabled")>=0||o.fadeOutWave()},this.clickHandler=this.onClick.bind(this),this.bindTriggerEvent()}return _createClass(e,[{key:"bindTriggerEvent",value:function(){var e=this;this.platform.isBrowser&&this.ngZone.runOutsideAngular((function(){e.removeTriggerEvent(),e.triggerElement&&e.triggerElement.addEventListener("click",e.clickHandler,!0)}))}},{key:"removeTriggerEvent",value:function(){this.triggerElement&&this.triggerElement.removeEventListener("click",this.clickHandler,!0)}},{key:"removeStyleAndExtraNode",value:function(){this.styleForPseudo&&document.body.contains(this.styleForPseudo)&&(document.body.removeChild(this.styleForPseudo),this.styleForPseudo=null),this.insertExtraNode&&this.triggerElement.contains(this.extraNode)&&this.triggerElement.removeChild(this.extraNode)}},{key:"destroy",value:function(){this.removeTriggerEvent(),this.removeStyleAndExtraNode()}},{key:"fadeOutWave",value:function(){var e=this,t=this.triggerElement,n=this.getWaveColor(t);t.setAttribute(this.waveAttributeName,"true"),Date.now()<this.lastTime+this.waveTransitionDuration||(this.isValidColor(n)&&(this.styleForPseudo||(this.styleForPseudo=document.createElement("style")),this.styleForPseudo.innerHTML="\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: ".concat(n,";\n      }"),document.body.appendChild(this.styleForPseudo)),this.insertExtraNode&&(this.extraNode||(this.extraNode=document.createElement("div")),this.extraNode.className="ant-click-animating-node",t.appendChild(this.extraNode)),this.lastTime=Date.now(),this.runTimeoutOutsideZone((function(){t.removeAttribute(e.waveAttributeName),e.removeStyleAndExtraNode()}),this.waveTransitionDuration))}},{key:"isValidColor",value:function(e){return!!e&&"#ffffff"!==e&&"rgb(255, 255, 255)"!==e&&this.isNotGrey(e)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(e)&&"transparent"!==e}},{key:"isNotGrey",value:function(e){var t=e.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return!(t&&t[1]&&t[2]&&t[3]&&t[1]===t[2]&&t[2]===t[3])}},{key:"getWaveColor",value:function(e){var t=getComputedStyle(e);return t.getPropertyValue("border-top-color")||t.getPropertyValue("border-color")||t.getPropertyValue("background-color")}},{key:"runTimeoutOutsideZone",value:function(e,t){this.ngZone.runOutsideAngular((function(){return setTimeout(e,t)}))}},{key:"waveAttributeName",get:function(){return this.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}}]),e}(),a={disabled:!1},u=new r.q("nz-wave-global-options",{providedIn:"root",factory:function(){return a}}),c=function(){var e=function(){function e(t,n,i,r){_classCallCheck(this,e),this.ngZone=t,this.elementRef=n,this.config=i,this.animationType=r,this.nzWaveExtraNode=!1,this.waveDisabled=!1,this.waveDisabled=this.isConfigDisabled()}return _createClass(e,[{key:"isConfigDisabled",value:function(){var e=!1;return this.config&&"boolean"==typeof this.config.disabled&&(e=this.config.disabled),"NoopAnimations"===this.animationType&&(e=!0),e}},{key:"ngOnDestroy",value:function(){this.waveRenderer&&this.waveRenderer.destroy()}},{key:"ngOnInit",value:function(){this.renderWaveIfEnabled()}},{key:"renderWaveIfEnabled",value:function(){!this.waveDisabled&&this.elementRef.nativeElement&&(this.waveRenderer=new s(this.elementRef.nativeElement,this.ngZone,this.nzWaveExtraNode))}},{key:"disable",value:function(){this.waveDisabled=!0,this.waveRenderer&&(this.waveRenderer.removeTriggerEvent(),this.waveRenderer.removeStyleAndExtraNode())}},{key:"enable",value:function(){this.waveDisabled=this.isConfigDisabled()||!1,this.waveRenderer&&this.waveRenderer.bindTriggerEvent()}},{key:"disabled",get:function(){return this.waveDisabled}},{key:"rendererRef",get:function(){return this.waveRenderer}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Nb(r.z),r.Nb(r.l),r.Nb(u,8),r.Nb(o.a,8))},e.\u0275dir=r.Ib({type:e,selectors:[["","nz-wave",""],["button","nz-button","",3,"nzType","link"]],inputs:{nzWaveExtraNode:"nzWaveExtraNode"},exportAs:["nzWave"]}),e}(),l=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)},imports:[[i.b]]}),e}()},u47x:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return h}));var i=n("ofXK"),r=n("fXoL"),o=n("XNiG"),s=(n("quSY"),n("LRne")),a=(n("FtGj"),n("vkgz"),n("Kj3r"),n("pLZG"),n("lJxs"),n("IzEk"),n("8LU1")),u=n("nLfN"),c=n("GU7r");"undefined"!=typeof Element&&Element;var l=new r.q("cdk-focus-monitor-default-options"),d=Object(u.e)({passive:!0,capture:!0}),h=function(){var e=function(){function e(t,n,i,r){var o=this;_classCallCheck(this,e),this._ngZone=t,this._platform=n,this._origin=null,this._windowFocused=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._documentKeydownListener=function(){o._lastTouchTarget=null,o._setOriginForCurrentEventQueue("keyboard")},this._documentMousedownListener=function(e){if(!o._lastTouchTarget){var t=function(e){return 0===e.buttons}(e)?"keyboard":"mouse";o._setOriginForCurrentEventQueue(t)}},this._documentTouchstartListener=function(e){null!=o._touchTimeoutId&&clearTimeout(o._touchTimeoutId),o._lastTouchTarget=f(e),o._touchTimeoutId=setTimeout((function(){return o._lastTouchTarget=null}),650)},this._windowFocusListener=function(){o._windowFocused=!0,o._windowFocusTimeoutId=setTimeout((function(){return o._windowFocused=!1}))},this._rootNodeFocusAndBlurListener=function(e){for(var t=f(e),n="focus"===e.type?o._onFocus:o._onBlur,i=t;i;i=i.parentElement)n.call(o,e,i)},this._document=i,this._detectionMode=(null==r?void 0:r.detectionMode)||0}return _createClass(e,[{key:"monitor",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this._platform.isBrowser)return Object(s.a)(null);var n=Object(a.e)(e),i=Object(u.c)(n)||this._getDocument(),r=this._elementInfo.get(n);if(r)return t&&(r.checkChildren=!0),r.subject.asObservable();var c={checkChildren:t,subject:new o.a,rootNode:i};return this._elementInfo.set(n,c),this._registerGlobalListeners(c),c.subject.asObservable()}},{key:"stopMonitoring",value:function(e){var t=Object(a.e)(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}},{key:"focusVia",value:function(e,t,n){var i=Object(a.e)(e);this._setOriginForCurrentEventQueue(t),"function"==typeof i.focus&&i.focus(n)}},{key:"ngOnDestroy",value:function(){var e=this;this._elementInfo.forEach((function(t,n){return e.stopMonitoring(n)}))}},{key:"_getDocument",value:function(){return this._document||document}},{key:"_getWindow",value:function(){return this._getDocument().defaultView||window}},{key:"_toggleClass",value:function(e,t,n){n?e.classList.add(t):e.classList.remove(t)}},{key:"_getFocusOrigin",value:function(e){return this._origin?this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:this._wasCausedByTouch(e)?"touch":"program"}},{key:"_setClasses",value:function(e,t){this._toggleClass(e,"cdk-focused",!!t),this._toggleClass(e,"cdk-touch-focused","touch"===t),this._toggleClass(e,"cdk-keyboard-focused","keyboard"===t),this._toggleClass(e,"cdk-mouse-focused","mouse"===t),this._toggleClass(e,"cdk-program-focused","program"===t)}},{key:"_setOriginForCurrentEventQueue",value:function(e){var t=this;this._ngZone.runOutsideAngular((function(){t._origin=e,0===t._detectionMode&&(t._originTimeoutId=setTimeout((function(){return t._origin=null}),1))}))}},{key:"_wasCausedByTouch",value:function(e){var t=f(e);return this._lastTouchTarget instanceof Node&&t instanceof Node&&(t===this._lastTouchTarget||t.contains(this._lastTouchTarget))}},{key:"_onFocus",value:function(e,t){var n=this._elementInfo.get(t);if(n&&(n.checkChildren||t===f(e))){var i=this._getFocusOrigin(e);this._setClasses(t,i),this._emitOrigin(n.subject,i),this._lastFocusOrigin=i}}},{key:"_onBlur",value:function(e,t){var n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n.subject,null))}},{key:"_emitOrigin",value:function(e,t){this._ngZone.run((function(){return e.next(t)}))}},{key:"_registerGlobalListeners",value:function(e){var t=this;if(this._platform.isBrowser){var n=e.rootNode,i=this._rootNodeFocusListenerCount.get(n)||0;i||this._ngZone.runOutsideAngular((function(){n.addEventListener("focus",t._rootNodeFocusAndBlurListener,d),n.addEventListener("blur",t._rootNodeFocusAndBlurListener,d)})),this._rootNodeFocusListenerCount.set(n,i+1),1==++this._monitoredElementCount&&this._ngZone.runOutsideAngular((function(){var e=t._getDocument(),n=t._getWindow();e.addEventListener("keydown",t._documentKeydownListener,d),e.addEventListener("mousedown",t._documentMousedownListener,d),e.addEventListener("touchstart",t._documentTouchstartListener,d),n.addEventListener("focus",t._windowFocusListener)}))}}},{key:"_removeGlobalListeners",value:function(e){var t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){var n=this._rootNodeFocusListenerCount.get(t);n>1?this._rootNodeFocusListenerCount.set(t,n-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,d),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,d),this._rootNodeFocusListenerCount.delete(t))}if(!--this._monitoredElementCount){var i=this._getDocument(),r=this._getWindow();i.removeEventListener("keydown",this._documentKeydownListener,d),i.removeEventListener("mousedown",this._documentMousedownListener,d),i.removeEventListener("touchstart",this._documentTouchstartListener,d),r.removeEventListener("focus",this._windowFocusListener),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._touchTimeoutId),clearTimeout(this._originTimeoutId)}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Wb(r.z),r.Wb(u.a),r.Wb(i.c,8),r.Wb(l,8))},e.\u0275prov=Object(r.Jb)({factory:function(){return new e(Object(r.Wb)(r.z),Object(r.Wb)(u.a),Object(r.Wb)(i.c,8),Object(r.Wb)(l,8))},token:e,providedIn:"root"}),e}();function f(e){return e.composedPath?e.composedPath()[0]:e.target}var b=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this._platform=t,this._document=n}return _createClass(e,[{key:"getHighContrastMode",value:function(){if(!this._platform.isBrowser)return 0;var e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);var t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,i=(n&&n.backgroundColor||"").replace(/ /g,"");switch(this._document.body.removeChild(e),i){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}},{key:"_applyBodyHighContrastModeCssClasses",value:function(){if(this._platform.isBrowser&&this._document.body){var e=this._document.body.classList;e.remove("cdk-high-contrast-active"),e.remove("cdk-high-contrast-black-on-white"),e.remove("cdk-high-contrast-white-on-black");var t=this.getHighContrastMode();1===t?(e.add("cdk-high-contrast-active"),e.add("cdk-high-contrast-black-on-white")):2===t&&(e.add("cdk-high-contrast-active"),e.add("cdk-high-contrast-white-on-black"))}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Wb(u.a),r.Wb(i.c))},e.\u0275prov=Object(r.Jb)({factory:function(){return new e(Object(r.Wb)(u.a),Object(r.Wb)(i.c))},token:e,providedIn:"root"}),e}(),g=function(){var e=function e(t){_classCallCheck(this,e),t._applyBodyHighContrastModeCssClasses()};return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)(r.Wb(b))},imports:[[u.b,c.b]]}),e}()}}]);