(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Kq6Y:function(e,n,t){"use strict";t.r(n),t.d(n,"UsersModule",(function(){return Y}));var c=t("ofXK"),r=t("tyNb"),i=t("B+r4"),a=t("JA5x"),s=t("ZE2D"),o=t("FwiY"),u=t("jPNr"),l=t("ZyQt"),h=t("Nqz0"),b=t("PScX"),z=t("qAZ0"),d=t("3/1E"),g=t("Brhd"),p=t("TzFQ"),f=t("vkgz"),m=t("JIr8"),S=t("nYR2"),v=t("fXoL"),I=t("DD7I"),y=t("Q8cG");function C(e,n){if(1&e&&v.Tb(0,"img",12),2&e){const e=v.jc();v.sc("alt","",null==e.user?null:e.user.username,"'s profile image"),v.qc("src",e.profileImageUrl,v.Bc)}}function x(e,n){if(1&e){const e=v.Zb();v.Yb(0,"i",14),v.gc("click",(function(){return v.zc(e),v.jc(2).onAction("EDIT")})),v.Xb()}}function w(e,n){if(1&e&&v.Fc(0,x,1,0,"i",13),2&e){const e=v.jc();v.qc("ngIf",e.isOwner)}}function T(e,n){if(1&e){const e=v.Zb();v.Yb(0,"i",15),v.gc("click",(function(){return v.zc(e),v.jc().onAction("VIEW")})),v.Xb()}}function A(e,n){if(1&e){const e=v.Zb();v.Yb(0,"li",20),v.gc("click",(function(){return v.zc(e),v.jc(3).onAction("MAKE_ADMIN")})),v.Hc(1," Make admin "),v.Xb()}}function O(e,n){if(1&e){const e=v.Zb();v.Yb(0,"div"),v.Tb(1,"i",17),v.Yb(2,"nz-dropdown-menu",null,18),v.Yb(4,"ul",19),v.Yb(5,"li",20),v.gc("click",(function(){return v.zc(e),v.jc(2).onAction("APPROVE")})),v.Hc(6),v.Xb(),v.Fc(7,A,2,0,"li",21),v.Xb(),v.Xb(),v.Xb()}if(2&e){const e=v.yc(3),n=v.jc(2);v.Cb(1),v.qc("nzDropdownMenu",e),v.Cb(5),v.Jc(" ",null!=n.user&&n.user.approved?"Disapprove":"Approve"," "),v.Cb(1),v.qc("ngIf",!n.isAdmin)}}function j(e,n){if(1&e&&v.Fc(0,O,8,3,"div",16),2&e){const e=v.jc();v.qc("ngIf",e.isAdmin)}}const X=function(e,n,t){return[e,n,t]};let k=(()=>{class e{constructor(){this.cardAction=new v.n,this.profileImageUrl="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}set hasSubmitted(e){this.showLoader=!e&&this.isSubmitting,this.isSubmitting=this.showLoader}get isAdmin(){var e;return"ADMIN"===(null===(e=this.currentUser)||void 0===e?void 0:e.role)}get isOwner(){var e,n;return(null===(e=this.currentUser)||void 0===e?void 0:e.id)===(null===(n=this.user)||void 0===n?void 0:n.id)}ngOnInit(){var e,n;this.profileImageUrl=null!==(n=null===(e=this.user)||void 0===e?void 0:e.profileImageUrl)&&void 0!==n?n:this.profileImageUrl}onAction(e){this.isSubmitting=this.showLoader=!0,this.cardAction.emit(e)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=v.Mb({type:e,selectors:[["laze-user-card"]],inputs:{user:"user",currentUser:"currentUser",hasSubmitted:"hasSubmitted"},outputs:{cardAction:"cardAction"},decls:27,vars:16,consts:[["nzTip","Loading...",3,"nzSpinning"],[3,"nzCover","nzActions"],[1,"card-body"],["typography",""],[3,"href"],["nz-icon","","nzType","phone"],["nz-icon","","nzType","mail"],["nzColor","#337357"],["coverTemplate",""],["actionEdit",""],["actionView",""],["actionMore",""],[3,"alt","src"],["nz-icon","","nzType","edit",3,"click",4,"ngIf"],["nz-icon","","nzType","edit",3,"click"],["nz-icon","","nzType","eye",3,"click"],[4,"ngIf"],["nz-icon","","nzType","more","nz-dropdown","","nzPlacement","topCenter",3,"nzDropdownMenu"],["menu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"click"],["nz-menu-item","",3,"click",4,"ngIf"]],template:function(e,n){if(1&e&&(v.Yb(0,"nz-spin",0),v.Yb(1,"nz-card",1),v.Yb(2,"div",2),v.Yb(3,"h3",3),v.Yb(4,"strong"),v.Hc(5),v.Xb(),v.Xb(),v.Yb(6,"p"),v.Yb(7,"a",4),v.Tb(8,"i",5),v.Hc(9),v.Xb(),v.Xb(),v.Yb(10,"p"),v.Yb(11,"a",4),v.Tb(12,"i",6),v.Hc(13),v.Xb(),v.Xb(),v.Yb(14,"p"),v.Hc(15),v.Xb(),v.Yb(16,"nz-tag",7),v.Hc(17),v.kc(18,"titlecase"),v.Xb(),v.Xb(),v.Xb(),v.Xb(),v.Fc(19,C,1,2,"ng-template",null,8,v.Gc),v.Fc(21,w,1,1,"ng-template",null,9,v.Gc),v.Fc(23,T,1,0,"ng-template",null,10,v.Gc),v.Fc(25,j,1,1,"ng-template",null,11,v.Gc)),2&e){const e=v.yc(20),t=v.yc(22),c=v.yc(24),r=v.yc(26);v.qc("nzSpinning",n.showLoader&&n.isSubmitting),v.Cb(1),v.qc("nzCover",e)("nzActions",v.wc(12,X,t,c,r)),v.Cb(4),v.Ic(null==n.user?null:n.user.username),v.Cb(2),v.sc("href","tel:",null==n.user?null:n.user.telephone,"",v.Bc),v.Cb(2),v.Jc(" ",(null==n.user?null:n.user.telephone)||"N/A"," "),v.Cb(2),v.sc("href","mailto:",null==n.user?null:n.user.email,"",v.Bc),v.Cb(2),v.Jc(" ",(null==n.user?null:n.user.email)||"N/A"," "),v.Cb(2),v.Jc(" ",(null==n.user?null:n.user.careerDetails)||"N/A"," "),v.Cb(2),v.Ic(v.lc(18,10,null==n.user?null:n.user.role))}},directives:[z.a,a.a,o.a,l.a,c.m,h.a,h.c,y.c,y.d],pipes:[c.v],styles:["nz-card[_ngcontent-%COMP%]{margin:auto;width:280px;text-align:center;box-shadow:0 2px 2px #bababa}.card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-bottom:3px}.card-body[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:12px}.card-body[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#337357}"]}),e})();function M(e,n){if(1&e){const e=v.Zb();v.Yb(0,"laze-user-card",4),v.gc("cardAction",(function(t){v.zc(e);const c=n.$implicit;return v.jc().onCardAction(t,c)})),v.Xb()}if(2&e){const e=n.$implicit,t=v.jc();v.qc("user",e)("currentUser",t.currentUser)("hasSubmitted",t.hasSubmitted)}}let P=(()=>{class e{constructor(e,n,t,c){this.route=e,this.router=n,this.nzMessageService=t,this.userService=c,this.hasSubmitted=!1}ngOnInit(){this.users=this.route.snapshot.data.users,this.currentUser=this.route.snapshot.data.currentUser,this.onPageIndexChange(1)}onPageIndexChange(e){this.usersToDisplay=this.users.slice(10*(e-1),10*e)}onCardAction(e,n){switch(this.hasSubmitted=!1,e){case"EDIT":case"VIEW":this.viewOrEditUser(n);break;case"APPROVE":this.approveUser(n);break;case"MAKE_ADMIN":this.makeUserAdmin(n)}}viewOrEditUser(e){this.router.navigate(["main","user",e.id])}makeUserAdmin(e){this.userService.update({id:e.id,role:"ADMIN"}).pipe(Object(f.a)(e=>this.nzMessageService.success("User is now an ADMIN!")),Object(m.a)(e=>(this.nzMessageService.error(e.message),e)),Object(S.a)(()=>this.hasSubmitted=!0)).subscribe()}approveUser(e){this.userService.update({id:e.id,approved:!(null==e?void 0:e.approved)}).pipe(Object(f.a)(e=>this.nzMessageService.success("User has been approved!")),Object(m.a)(e=>(this.nzMessageService.error(e.message),e)),Object(S.a)(()=>this.hasSubmitted=!0)).subscribe()}}return e.\u0275fac=function(n){return new(n||e)(v.Sb(r.a),v.Sb(r.f),v.Sb(b.b),v.Sb(I.a))},e.\u0275cmp=v.Mb({type:e,selectors:[["ng-component"]],decls:4,vars:3,consts:[["nzTitle","Users","nzSubtitle","All users of the system",1,"site-page-header"],["nz-row","",1,"user-cards"],["nz-col","","nzXs","24","nzSm","24","nzMd","9","nzLg","10","nzXl","7",3,"user","currentUser","hasSubmitted","cardAction",4,"ngFor","ngForOf"],[3,"nzPageIndex","nzTotal","nzPageIndexChange"],["nz-col","","nzXs","24","nzSm","24","nzMd","9","nzLg","10","nzXl","7",3,"user","currentUser","hasSubmitted","cardAction"]],template:function(e,n){1&e&&(v.Tb(0,"nz-page-header",0),v.Yb(1,"div",1),v.Fc(2,M,1,3,"laze-user-card",2),v.Xb(),v.Yb(3,"nz-pagination",3),v.gc("nzPageIndexChange",(function(e){return n.onPageIndexChange(e)})),v.Xb()),2&e&&(v.Cb(2),v.qc("ngForOf",n.usersToDisplay),v.Cb(1),v.qc("nzPageIndex",1)("nzTotal",n.users.length))},directives:[u.a,i.c,c.l,d.a,k,i.a],styles:["nz-page-header[_ngcontent-%COMP%]{margin-bottom:24px}.user-cards[_ngcontent-%COMP%]{justify-content:center}.user-cards[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-bottom:24px}nz-pagination[_ngcontent-%COMP%]{text-align:center}@media (min-width:768px){.user-cards[_ngcontent-%COMP%]{justify-content:space-between}}"]}),e})(),Y=(()=>{class e{}return e.\u0275mod=v.Qb({type:e}),e.\u0275inj=v.Pb({factory:function(n){return new(n||e)},imports:[[c.c,r.i.forChild([{path:"",component:P,resolve:{users:g.a,currentUser:p.a}}]),i.b,a.b,s.b,o.b,u.b,l.b,h.b,b.a,z.b,d.b]]}),e})()},ZE2D:function(e,n,t){"use strict";t.d(n,"a",(function(){return z})),t.d(n,"b",(function(){return d}));var c=t("mrSG"),r=t("nLfN"),i=t("fXoL"),a=t("2Suw"),s=t("ofXK"),o=t("FwiY");const u=["textEl"];function l(e,n){if(1&e&&i.Tb(0,"i",3),2&e){const e=i.jc();i.qc("nzType",e.nzIcon)}}function h(e,n){if(1&e){const e=i.Zb();i.Yb(0,"img",4),i.gc("error",(function(n){return i.zc(e),i.jc().imgError(n)})),i.Xb()}if(2&e){const e=i.jc();i.qc("src",e.nzSrc,i.Bc),i.Db("srcset",e.nzSrcSet,i.Bc)("alt",e.nzAlt)}}function b(e,n){if(1&e&&(i.Yb(0,"span",5,6),i.Hc(2),i.Xb()),2&e){const e=i.jc();i.qc("ngStyle",e.textStyles),i.Cb(2),i.Ic(e.nzText)}}let z=(()=>{class e{constructor(e,n,t,c){this.nzConfigService=e,this.elementRef=n,this.cdr=t,this.platform=c,this.nzShape="circle",this.nzSize="default",this.nzError=new i.n,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(e){this.nzError.emit(e),e.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const e=this.textEl.nativeElement.offsetWidth,n=this.el.getBoundingClientRect().width;this.textStyles={transform:`scale(${n-8<e?(n-8)/e:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return e.\u0275fac=function(n){return new(n||e)(i.Sb(a.a),i.Sb(i.l),i.Sb(i.h),i.Sb(r.a))},e.\u0275cmp=i.Mb({type:e,selectors:[["nz-avatar"]],viewQuery:function(e,n){var t;1&e&&i.Lc(u,!0),2&e&&i.xc(t=i.hc())&&(n.textEl=t.first)},hostVars:22,hostBindings:function(e,n){2&e&&(i.Ec("width",n.customSize)("height",n.customSize)("line-height",n.customSize)("font-size",n.hasIcon&&n.customSize?n.nzSize/2:null,"px"),i.Ib("ant-avatar",!0)("ant-avatar-lg","large"===n.nzSize)("ant-avatar-sm","small"===n.nzSize)("ant-avatar-square","square"===n.nzShape)("ant-avatar-circle","circle"===n.nzShape)("ant-avatar-icon",n.nzIcon)("ant-avatar-image",n.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[i.Ab],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(e,n){1&e&&(i.Fc(0,l,1,1,"i",0),i.Fc(1,h,1,3,"img",1),i.Fc(2,b,3,2,"span",2)),2&e&&(i.qc("ngIf",n.nzIcon&&n.hasIcon),i.Cb(1),i.qc("ngIf",n.nzSrc&&n.hasSrc),i.Cb(1),i.qc("ngIf",n.nzText&&n.hasText))},directives:[s.m,o.a,s.n],encapsulation:2,changeDetection:0}),Object(c.a)([Object(a.b)("avatar"),Object(c.b)("design:type",String)],e.prototype,"nzShape",void 0),Object(c.a)([Object(a.b)("avatar"),Object(c.b)("design:type",Object)],e.prototype,"nzSize",void 0),e})(),d=(()=>{class e{}return e.\u0275mod=i.Qb({type:e}),e.\u0275inj=i.Pb({factory:function(n){return new(n||e)},imports:[[s.c,o.b,r.b]]}),e})()},jPNr:function(e,n,t){"use strict";t.d(n,"a",(function(){return y})),t.d(n,"b",(function(){return C}));var c=t("ofXK"),r=t("fXoL"),i=t("pdGh"),a=t("FwiY"),s=t("mrSG"),o=t("2Suw"),u=t("79xS");function l(e,n){if(1&e&&(r.Wb(0),r.Tb(1,"i",9),r.Vb()),2&e){const e=n.$implicit;r.Cb(1),r.qc("nzType",e||"arrow-left")}}function h(e,n){if(1&e){const e=r.Zb();r.Yb(0,"div",6),r.gc("click",(function(){return r.zc(e),r.jc().onBack()})),r.Yb(1,"div",7),r.Fc(2,l,2,1,"ng-container",8),r.Xb(),r.Xb()}if(2&e){const e=r.jc();r.Cb(2),r.qc("nzStringTemplateOutlet",e.nzBackIcon)}}function b(e,n){if(1&e&&(r.Wb(0),r.Hc(1),r.Vb()),2&e){const e=r.jc(2);r.Cb(1),r.Ic(e.nzTitle)}}function z(e,n){if(1&e&&(r.Yb(0,"span",10),r.Fc(1,b,2,1,"ng-container",8),r.Xb()),2&e){const e=r.jc();r.Cb(1),r.qc("nzStringTemplateOutlet",e.nzTitle)}}function d(e,n){1&e&&r.oc(0,6,["*ngIf","!nzTitle"])}function g(e,n){if(1&e&&(r.Wb(0),r.Hc(1),r.Vb()),2&e){const e=r.jc(2);r.Cb(1),r.Ic(e.nzSubtitle)}}function p(e,n){if(1&e&&(r.Yb(0,"span",11),r.Fc(1,g,2,1,"ng-container",8),r.Xb()),2&e){const e=r.jc();r.Cb(1),r.qc("nzStringTemplateOutlet",e.nzSubtitle)}}function f(e,n){1&e&&r.oc(0,7,["*ngIf","!nzSubtitle"])}const m=[[["nz-breadcrumb","nz-page-header-breadcrumb",""]],[["nz-avatar","nz-page-header-avatar",""]],[["nz-page-header-tags"],["","nz-page-header-tags",""]],[["nz-page-header-extra"],["","nz-page-header-extra",""]],[["nz-page-header-content"],["","nz-page-header-content",""]],[["nz-page-header-footer"],["","nz-page-header-footer",""]],[["nz-page-header-title"],["","nz-page-header-title",""]],[["nz-page-header-subtitle"],["","nz-page-header-subtitle",""]]],S=["nz-breadcrumb[nz-page-header-breadcrumb]","nz-avatar[nz-page-header-avatar]","nz-page-header-tags, [nz-page-header-tags]","nz-page-header-extra, [nz-page-header-extra]","nz-page-header-content, [nz-page-header-content]","nz-page-header-footer, [nz-page-header-footer]","nz-page-header-title, [nz-page-header-title]","nz-page-header-subtitle, [nz-page-header-subtitle]"];let v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=r.Nb({type:e,selectors:[["nz-page-header-footer"],["","nz-page-header-footer",""]],hostAttrs:[1,"ant-page-header-footer"],exportAs:["nzPageHeaderFooter"]}),e})(),I=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=r.Nb({type:e,selectors:[["nz-breadcrumb","nz-page-header-breadcrumb",""]],exportAs:["nzPageHeaderBreadcrumb"]}),e})(),y=(()=>{class e{constructor(e,n){this.location=e,this.nzConfigService=n,this.nzBackIcon=null,this.nzGhost=!0,this.nzBack=new r.n}onBack(){if(this.nzBack.observers.length)this.nzBack.emit();else{if(!this.location)throw new Error(`${u.a} you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!`);this.location.back()}}}return e.\u0275fac=function(n){return new(n||e)(r.Sb(c.i,8),r.Sb(o.a))},e.\u0275cmp=r.Mb({type:e,selectors:[["nz-page-header"]],contentQueries:function(e,n,t){var c;1&e&&(r.Kb(t,v,!0),r.Kb(t,I,!0)),2&e&&(r.xc(c=r.hc())&&(n.nzPageHeaderFooter=c.first),r.xc(c=r.hc())&&(n.nzPageHeaderBreadcrumb=c.first))},hostAttrs:[1,"ant-page-header"],hostVars:6,hostBindings:function(e,n){2&e&&r.Ib("has-footer",n.nzPageHeaderFooter)("ant-page-header-ghost",n.nzGhost)("has-breadcrumb",n.nzPageHeaderBreadcrumb)},inputs:{nzBackIcon:"nzBackIcon",nzGhost:"nzGhost",nzTitle:"nzTitle",nzSubtitle:"nzSubtitle"},outputs:{nzBack:"nzBack"},exportAs:["nzPageHeader"],ngContentSelectors:S,decls:13,vars:5,consts:[[1,"ant-page-header-heading"],[1,"ant-page-header-heading-left"],["class","ant-page-header-back",3,"click",4,"ngIf"],["class","ant-page-header-heading-title",4,"ngIf"],[4,"ngIf"],["class","ant-page-header-heading-sub-title",4,"ngIf"],[1,"ant-page-header-back",3,"click"],["role","button","tabindex","0",1,"ant-page-header-back-button"],[4,"nzStringTemplateOutlet"],["nz-icon","","nzTheme","outline",3,"nzType"],[1,"ant-page-header-heading-title"],[1,"ant-page-header-heading-sub-title"]],template:function(e,n){1&e&&(r.pc(m),r.oc(0),r.Yb(1,"div",0),r.Yb(2,"div",1),r.Fc(3,h,3,1,"div",2),r.oc(4,1),r.Fc(5,z,2,1,"span",3),r.Fc(6,d,1,0,void 0,4),r.Fc(7,p,2,1,"span",5),r.Fc(8,f,1,0,void 0,4),r.oc(9,2),r.Xb(),r.oc(10,3),r.Xb(),r.oc(11,4),r.oc(12,5)),2&e&&(r.Cb(3),r.qc("ngIf",null!==n.nzBackIcon),r.Cb(2),r.qc("ngIf",n.nzTitle),r.Cb(1),r.qc("ngIf",!n.nzTitle),r.Cb(1),r.qc("ngIf",n.nzSubtitle),r.Cb(1),r.qc("ngIf",!n.nzSubtitle))},directives:[c.m,i.b,a.a],encapsulation:2,changeDetection:0}),Object(s.a)([Object(o.b)("pageHeader"),Object(s.b)("design:type",Boolean)],e.prototype,"nzGhost",void 0),e})(),C=(()=>{class e{}return e.\u0275mod=r.Qb({type:e}),e.\u0275inj=r.Pb({factory:function(n){return new(n||e)},imports:[[c.c,i.a,a.b]]}),e})()}}]);