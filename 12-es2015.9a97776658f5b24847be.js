(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Brhd:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var i=e("fXoL"),o=e("DD7I");let c=(()=>{class n{constructor(n){this.userService=n}resolve(n){return this.userService.findAll()}}return n.\u0275fac=function(t){return new(t||n)(i.cc(o.a))},n.\u0275prov=i.Ob({token:n,factory:n.\u0275fac}),n})()},DD7I:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var i=e("vkgz"),o=e("AytR"),c=e("fXoL"),r=e("tk/3");let s=(()=>{class n{constructor(n){this.http=n,this.usersBaseUrl=`${o.a.apiUrl}/users`}findAll(){return this.http.get(this.usersBaseUrl).pipe(Object(i.a)(n=>console.log({u:n})))}update(n){return this.http.patch(`${this.usersBaseUrl}/${n.id}`,Object.assign({},n))}}return n.\u0275fac=function(t){return new(t||n)(c.cc(r.c))},n.\u0275prov=c.Ob({token:n,factory:n.\u0275fac}),n})()},Ihmt:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var i=e("vkgz"),o=e("AytR"),c=e("fXoL"),r=e("tk/3");let s=(()=>{class n{constructor(n){this.http=n,this.projectsBaseUrl=`${o.a.apiUrl}/projects`}findAll(){return this.http.get(this.projectsBaseUrl).pipe(Object(i.a)(n=>console.log({p:n})))}create(n){return this.http.post(this.projectsBaseUrl,Object.assign({},n))}}return n.\u0275fac=function(t){return new(t||n)(c.cc(r.c))},n.\u0275prov=c.Ob({token:n,factory:n.\u0275fac}),n})()},ML9l:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var i=e("fXoL"),o=e("Ihmt");let c=(()=>{class n{constructor(n){this.projectService=n}resolve(n){return this.projectService.findAll()}}return n.\u0275fac=function(t){return new(t||n)(i.cc(o.a))},n.\u0275prov=i.Ob({token:n,factory:n.\u0275fac}),n})()},TzFQ:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var i=e("fXoL"),o=e("7dP1");let c=(()=>{class n{constructor(n){this.auth=n}resolve(n,t){return this.auth.authenticatedUser()}}return n.\u0275fac=function(t){return new(t||n)(i.cc(o.a))},n.\u0275prov=i.Ob({token:n,factory:n.\u0275fac}),n})()},XpXM:function(n,t,e){"use strict";e.r(t),e.d(t,"MainModule",(function(){return j}));var i=e("ofXK"),o=e("yW9e"),c=e("Q8cG"),r=e("FwiY"),s=e("qAZ0"),a=e("tyNb"),b=e("vkgz"),p=e("fXoL"),u=e("7dP1");let l=(()=>{class n{constructor(n,t){this.router=n,this.auth=t}canActivate(n,t){return this.auth.isLoggedIn().pipe(Object(b.a)(n=>{n||this.router.navigate(["/auth"],{queryParams:{returnUrl:t.url}})}))}}return n.\u0275fac=function(t){return new(t||n)(p.cc(a.f),p.cc(u.a))},n.\u0275prov=p.Ob({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function d(n,t){1&n&&(p.Yb(0,"div"),p.Tb(1,"i",23),p.Xb()),2&n&&p.Dc("background-color","#337357")}const h=function(){return["home"]},g=function(){return["projects"]},f=function(){return["users"]},z=[{path:"",component:(()=>{class n{constructor(n){this.router=n,this.isLoading=!1,this.router.events.subscribe(n=>this.checkRouterEvent(n))}ngOnInit(){}checkRouterEvent(n){n instanceof a.e&&(this.isLoading=!0),(n instanceof a.c||n instanceof a.b||n instanceof a.d)&&(this.isLoading=!1)}onSignOut(){}}return n.\u0275fac=function(t){return new(t||n)(p.Sb(a.f))},n.\u0275cmp=p.Mb({type:n,selectors:[["ng-component"]],decls:57,vars:9,consts:[[1,"layout"],[1,"logo"],["src","assets/svg/logo.svg","alt","Laze logo","width","48"],["typography",""],[1,"main-sider"],["nzWidth","280px","nzCollapsible","","nzBreakpoint","lg",3,"nzZeroTrigger","nzCollapsedWidth"],["triggerTemplate",""],["nz-menu","","nzMode","inline",1,"menu-list"],["nz-menu-item","","nzMatchRouter",""],[3,"routerLink"],["nz-icon","","nzType","home"],["nz-icon","","nzType","tool"],["nz-icon","","nzType","folder-open"],["nz-icon","","nzType","team"],["nz-icon","","nzType","setting"],["nz-submenu","","nzTitle","Account","nzIcon","safety","nzOpen",""],["nz-icon","","nzType","user"],["nz-menu-item","",3,"click"],["nz-icon","","nzType","logout"],["nzTip","Loading...",3,"nzSpinning"],[1,"inner-content"],["nz-icon","","nzType","heart","nzTheme","twotone","nzTwotoneColor","#660000"],["href","https://github.com/adzamkomladev"],["nz-icon","","nzType","menu"]],template:function(n,t){if(1&n&&(p.Yb(0,"nz-layout",0),p.Yb(1,"nz-header"),p.Yb(2,"div",1),p.Tb(3,"img",2),p.Yb(4,"span",3),p.Yb(5,"strong"),p.Gc(6,"Laze"),p.Xb(),p.Xb(),p.Xb(),p.Xb(),p.Yb(7,"nz-layout",4),p.Yb(8,"nz-sider",5),p.Ec(9,d,2,2,"ng-template",null,6,p.Fc),p.Yb(11,"ul",7),p.Yb(12,"li",8),p.Yb(13,"a",9),p.Tb(14,"i",10),p.Yb(15,"span"),p.Gc(16,"Home"),p.Xb(),p.Xb(),p.Xb(),p.Yb(17,"li",8),p.Yb(18,"a",9),p.Tb(19,"i",11),p.Yb(20,"span"),p.Gc(21,"Projects"),p.Xb(),p.Xb(),p.Xb(),p.Yb(22,"li",8),p.Tb(23,"i",12),p.Yb(24,"span"),p.Gc(25,"My projects"),p.Xb(),p.Xb(),p.Yb(26,"li",8),p.Yb(27,"a",9),p.Tb(28,"i",13),p.Yb(29,"span"),p.Gc(30,"Users"),p.Xb(),p.Xb(),p.Xb(),p.Yb(31,"li",8),p.Tb(32,"i",14),p.Yb(33,"span"),p.Gc(34,"Settings"),p.Xb(),p.Xb(),p.Yb(35,"li",15),p.Yb(36,"ul"),p.Yb(37,"li",8),p.Tb(38,"i",16),p.Yb(39,"span"),p.Gc(40,"Profile"),p.Xb(),p.Xb(),p.Yb(41,"li",17),p.gc("click",(function(){return t.onSignOut()})),p.Tb(42,"i",18),p.Yb(43,"span"),p.Gc(44,"Sign out"),p.Xb(),p.Xb(),p.Xb(),p.Xb(),p.Xb(),p.Xb(),p.Yb(45,"nz-content"),p.Yb(46,"nz-spin",19),p.Yb(47,"div",20),p.Tb(48,"router-outlet"),p.Xb(),p.Xb(),p.Xb(),p.Xb(),p.Yb(49,"nz-footer"),p.Yb(50,"p",3),p.Yb(51,"strong"),p.Gc(52," Made with "),p.Tb(53,"i",21),p.Gc(54," by "),p.Yb(55,"a",22),p.Gc(56,"kbee"),p.Xb(),p.Xb(),p.Xb(),p.Xb(),p.Xb()),2&n){const n=p.xc(10);p.Cb(8),p.pc("nzZeroTrigger",n)("nzCollapsedWidth",0),p.Cb(5),p.pc("routerLink",p.sc(6,h)),p.Cb(5),p.pc("routerLink",p.sc(7,g)),p.Cb(9),p.pc("routerLink",p.sc(8,f)),p.Cb(19),p.pc("nzSpinning",t.isLoading)}},directives:[o.d,o.c,o.f,c.c,c.d,a.h,r.a,c.f,o.a,s.a,a.j,o.b],styles:["[_nghost-%COMP%]{height:100vh}nz-header[_ngcontent-%COMP%]{z-index:10;box-shadow:0 2px 8px #f0f1f2;text-align:center}nz-header[_ngcontent-%COMP%] > .logo[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{margin-right:16px}nz-header[_ngcontent-%COMP%] > .logo[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:larger;text-transform:uppercase}nz-footer[_ngcontent-%COMP%], nz-header[_ngcontent-%COMP%]{background:#fff}nz-footer[_ngcontent-%COMP%]{line-height:1.5;text-align:center}nz-sider[_ngcontent-%COMP%]{background:#fff}.inner-content[_ngcontent-%COMP%], nz-sider[_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]{padding-top:24px}.main-sider[_ngcontent-%COMP%]{line-height:120px}nz-content[_ngcontent-%COMP%]{background:#fff}nz-content.loading[_ngcontent-%COMP%]{text-align:center;background:rgba(0,0,0,.05)}nz-content[_ngcontent-%COMP%] > .inner-content[_ngcontent-%COMP%]{padding:4%}@media (min-width:768px){nz-header[_ngcontent-%COMP%]{text-align:left}}"]}),n})(),canActivate:[l],children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadChildren:()=>e.e(16).then(e.bind(null,"L+0V")).then(n=>n.HomeModule)},{path:"users",loadChildren:()=>Promise.all([e.e(1),e.e(3),e.e(6),e.e(18)]).then(e.bind(null,"Kq6Y")).then(n=>n.UsersModule)},{path:"user",loadChildren:()=>e.e(17).then(e.bind(null,"9gQ6")).then(n=>n.UserModule)},{path:"projects",loadChildren:()=>Promise.all([e.e(1),e.e(3),e.e(7),e.e(6),e.e(13)]).then(e.bind(null,"DwnV")).then(n=>n.ProjectsModule)}]}];let m=(()=>{class n{}return n.\u0275mod=p.Qb({type:n}),n.\u0275inj=p.Pb({factory:function(t){return new(t||n)},imports:[[a.i.forChild(z)],a.i]}),n})();var O=e("DD7I"),y=e("Ihmt"),v=e("Brhd"),X=e("TzFQ"),C=e("ML9l");let j=(()=>{class n{}return n.\u0275mod=p.Qb({type:n}),n.\u0275inj=p.Pb({factory:function(t){return new(t||n)},providers:[O.a,y.a,v.a,C.a,X.a],imports:[[i.b,m,o.e,c.e,r.b,s.b]]}),n})()},qAZ0:function(n,t,e){"use strict";e.d(t,"a",(function(){return y})),e.d(t,"b",(function(){return v}));var i=e("mrSG"),o=e("2Suw"),c=e("/KA4"),r=e("XNiG"),s=e("2Vo4"),a=e("5+tZ"),b=e("Kj3r"),p=e("1G5W"),u=e("GU7r"),l=e("ofXK"),d=e("fXoL");function h(n,t){1&n&&(d.Yb(0,"span",3),d.Tb(1,"i",4),d.Tb(2,"i",4),d.Tb(3,"i",4),d.Tb(4,"i",4),d.Xb())}function g(n,t){}function f(n,t){if(1&n&&(d.Yb(0,"div",8),d.Gc(1),d.Xb()),2&n){const n=d.jc(2);d.Cb(1),d.Hc(n.nzTip)}}function z(n,t){if(1&n&&(d.Yb(0,"div"),d.Yb(1,"div",5),d.Ec(2,g,0,0,"ng-template",6),d.Ec(3,f,2,1,"div",7),d.Xb(),d.Xb()),2&n){const n=d.jc(),t=d.xc(1);d.Cb(1),d.Ib("ant-spin-spinning",n.isLoading)("ant-spin-lg","large"===n.nzSize)("ant-spin-sm","small"===n.nzSize)("ant-spin-show-text",n.nzTip),d.Cb(1),d.pc("ngTemplateOutlet",n.nzIndicator||t),d.Cb(1),d.pc("ngIf",n.nzTip)}}function m(n,t){if(1&n&&(d.Yb(0,"div",9),d.nc(1),d.Xb()),2&n){const n=d.jc();d.Ib("ant-spin-blur",n.isLoading)}}const O=["*"];let y=(()=>{class n{constructor(n,t){this.nzConfigService=n,this.cdr=t,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new r.a,this.spinning$=new s.a(this.nzSpinning),this.delay$=new s.a(this.nzDelay),this.isLoading=!0}ngOnInit(){this.spinning$.pipe(Object(a.a)(()=>this.delay$),Object(a.a)(n=>0===n?this.spinning$:this.spinning$.pipe(Object(b.a)(n))),Object(p.a)(this.destroy$)).subscribe(n=>{this.isLoading=n,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent("spin").pipe(Object(p.a)(this.destroy$)).subscribe(()=>this.cdr.markForCheck())}ngOnChanges(n){const{nzSpinning:t,nzDelay:e}=n;t&&this.spinning$.next(this.nzSpinning),e&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(t){return new(t||n)(d.Sb(o.a),d.Sb(d.h))},n.\u0275cmp=d.Mb({type:n,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(n,t){2&n&&d.Ib("ant-spin-nested-loading",!t.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[d.Ab],ngContentSelectors:O,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(n,t){1&n&&(d.oc(),d.Ec(0,h,5,0,"ng-template",null,0,d.Fc),d.Ec(2,z,4,10,"div",1),d.Ec(3,m,2,2,"div",2)),2&n&&(d.Cb(2),d.pc("ngIf",t.isLoading),d.Cb(1),d.pc("ngIf",!t.nzSimple))},directives:[l.k,l.p],encapsulation:2}),Object(i.a)([Object(o.b)("spin"),Object(i.b)("design:type",Object)],n.prototype,"nzIndicator",void 0),Object(i.a)([Object(c.b)(),Object(i.b)("design:type",Object)],n.prototype,"nzDelay",void 0),Object(i.a)([Object(c.a)(),Object(i.b)("design:type",Object)],n.prototype,"nzSimple",void 0),Object(i.a)([Object(c.a)(),Object(i.b)("design:type",Object)],n.prototype,"nzSpinning",void 0),n})(),v=(()=>{class n{}return n.\u0275mod=d.Qb({type:n}),n.\u0275inj=d.Pb({factory:function(t){return new(t||n)},imports:[[l.b,u.b]]}),n})()}}]);