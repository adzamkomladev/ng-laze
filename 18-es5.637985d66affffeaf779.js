function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Yj9t:function(n,e,t){"use strict";t.r(e),t.d(e,"AuthModule",(function(){return hn}));var i,o,s,a,r,c,u,b,h=t("ofXK"),l=t("tyNb"),d=t("3Pt+"),m=t("B+r4"),f=t("ocnv"),p=t("OzZK"),g=t("mrSG"),z=t("u47x"),C=t("fXoL"),k=t("/KA4"),S=["*"],y=["inputElement"],v=["nz-checkbox",""],w=((s=function(){function n(e,t){_classCallCheck(this,n),this.nzOnChange=new C.n,this.checkboxList=[],e.addClass(t.nativeElement,"ant-checkbox-group")}return _createClass(n,[{key:"addCheckbox",value:function(n){this.checkboxList.push(n)}},{key:"removeCheckbox",value:function(n){this.checkboxList.splice(this.checkboxList.indexOf(n),1)}},{key:"onChange",value:function(){var n=this.checkboxList.filter((function(n){return n.nzChecked})).map((function(n){return n.nzValue}));this.nzOnChange.emit(n)}}]),n}()).\u0275fac=function(n){return new(n||s)(C.Sb(C.E),C.Sb(C.l))},s.\u0275cmp=C.Mb({type:s,selectors:[["nz-checkbox-wrapper"]],outputs:{nzOnChange:"nzOnChange"},exportAs:["nzCheckboxWrapper"],ngContentSelectors:S,decls:1,vars:0,template:function(n,e){1&n&&(C.pc(),C.oc(0))},encapsulation:2,changeDetection:0}),s),O=((o=function(){function n(e,t,i,o){_classCallCheck(this,n),this.elementRef=e,this.nzCheckboxWrapperComponent=t,this.cdr=i,this.focusMonitor=o,this.onChange=function(){},this.onTouched=function(){},this.nzCheckedChange=new C.n,this.nzValue=null,this.nzAutoFocus=!1,this.nzDisabled=!1,this.nzIndeterminate=!1,this.nzChecked=!1}return _createClass(n,[{key:"hostClick",value:function(n){n.preventDefault(),this.focus(),this.innerCheckedChange(!this.nzChecked)}},{key:"innerCheckedChange",value:function(n){this.nzDisabled||(this.nzChecked=n,this.onChange(this.nzChecked),this.nzCheckedChange.emit(this.nzChecked),this.nzCheckboxWrapperComponent&&this.nzCheckboxWrapperComponent.onChange())}},{key:"writeValue",value:function(n){this.nzChecked=n,this.cdr.markForCheck()}},{key:"registerOnChange",value:function(n){this.onChange=n}},{key:"registerOnTouched",value:function(n){this.onTouched=n}},{key:"setDisabledState",value:function(n){this.nzDisabled=n,this.cdr.markForCheck()}},{key:"focus",value:function(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}},{key:"blur",value:function(){this.inputElement.nativeElement.blur()}},{key:"ngOnInit",value:function(){var n=this;this.focusMonitor.monitor(this.elementRef,!0).subscribe((function(e){e||Promise.resolve().then((function(){return n.onTouched()}))})),this.nzCheckboxWrapperComponent&&this.nzCheckboxWrapperComponent.addCheckbox(this)}},{key:"ngAfterViewInit",value:function(){this.nzAutoFocus&&this.focus()}},{key:"ngOnDestroy",value:function(){this.focusMonitor.stopMonitoring(this.elementRef),this.nzCheckboxWrapperComponent&&this.nzCheckboxWrapperComponent.removeCheckbox(this)}}]),n}()).\u0275fac=function(n){return new(n||o)(C.Sb(C.l),C.Sb(w,8),C.Sb(C.h),C.Sb(z.b))},o.\u0275cmp=C.Mb({type:o,selectors:[["","nz-checkbox",""]],viewQuery:function(n,e){var t;1&n&&C.Dc(y,!0),2&n&&C.xc(t=C.hc())&&(e.inputElement=t.first)},hostVars:4,hostBindings:function(n,e){1&n&&C.gc("click",(function(n){return e.hostClick(n)})),2&n&&C.Ib("ant-checkbox-wrapper",!0)("ant-checkbox-wrapper-checked",e.nzChecked)},inputs:{nzValue:"nzValue",nzAutoFocus:"nzAutoFocus",nzDisabled:"nzDisabled",nzIndeterminate:"nzIndeterminate",nzChecked:"nzChecked"},outputs:{nzCheckedChange:"nzCheckedChange"},exportAs:["nzCheckbox"],features:[C.Bb([{provide:d.i,useExisting:Object(C.U)((function(){return o})),multi:!0}])],attrs:v,ngContentSelectors:S,decls:6,vars:10,consts:[[1,"ant-checkbox"],["type","checkbox",1,"ant-checkbox-input",3,"checked","ngModel","disabled","ngModelChange","click"],["inputElement",""],[1,"ant-checkbox-inner"]],template:function(n,e){1&n&&(C.pc(),C.Yb(0,"span",0),C.Yb(1,"input",1,2),C.gc("ngModelChange",(function(n){return e.innerCheckedChange(n)}))("click",(function(n){return n.stopPropagation()})),C.Xb(),C.Tb(3,"span",3),C.Xb(),C.Yb(4,"span"),C.oc(5),C.Xb()),2&n&&(C.Ib("ant-checkbox-checked",e.nzChecked&&!e.nzIndeterminate)("ant-checkbox-disabled",e.nzDisabled)("ant-checkbox-indeterminate",e.nzIndeterminate),C.Cb(1),C.qc("checked",e.nzChecked)("ngModel",e.nzChecked)("disabled",e.nzDisabled),C.Db("autofocus",e.nzAutoFocus?"autofocus":null))},directives:[d.b,d.k,d.m],encapsulation:2,changeDetection:0}),Object(g.a)([Object(k.a)(),Object(g.b)("design:type",Object)],o.prototype,"nzAutoFocus",void 0),Object(g.a)([Object(k.a)(),Object(g.b)("design:type",Object)],o.prototype,"nzDisabled",void 0),Object(g.a)([Object(k.a)(),Object(g.b)("design:type",Object)],o.prototype,"nzIndeterminate",void 0),Object(g.a)([Object(k.a)(),Object(g.b)("design:type",Object)],o.prototype,"nzChecked",void 0),o),I=((i=function n(){_classCallCheck(this,n)}).\u0275mod=C.Qb({type:i}),i.\u0275inj=C.Pb({factory:function(n){return new(n||i)},imports:[[h.c,d.h,z.a]]}),i),x=t("PTRe"),R=t("FwiY"),D=t("jtHE"),j=t("XNiG"),M=t("1G5W"),Y=["*"],F=["inputElement"],P=["nz-radio",""],T=((b=function n(){_classCallCheck(this,n)}).\u0275fac=function(n){return new(n||b)},b.\u0275dir=C.Nb({type:b,selectors:[["","nz-radio-button",""]]}),b),X=((u=function(){function n(){_classCallCheck(this,n),this.selected$=new D.a(1),this.touched$=new j.a,this.disabled$=new D.a(1),this.name$=new D.a(1)}return _createClass(n,[{key:"touch",value:function(){this.touched$.next()}},{key:"select",value:function(n){this.selected$.next(n)}},{key:"setDisabled",value:function(n){this.disabled$.next(n)}},{key:"setName",value:function(n){this.name$.next(n)}}]),n}()).\u0275fac=function(n){return new(n||u)},u.\u0275prov=C.Ob({token:u,factory:u.\u0275fac}),u),E=((c=function(){function n(e,t){_classCallCheck(this,n),this.cdr=e,this.nzRadioService=t,this.value=null,this.destroy$=new j.a,this.onChange=function(){},this.onTouched=function(){},this.nzDisabled=!1,this.nzButtonStyle="outline",this.nzSize="default",this.nzName=null}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.nzRadioService.selected$.subscribe((function(e){n.value!==e&&(n.value=e,n.onChange(n.value))})),this.nzRadioService.touched$.subscribe((function(){Promise.resolve().then((function(){return n.onTouched()}))}))}},{key:"ngOnChanges",value:function(n){var e=n.nzDisabled,t=n.nzName;e&&this.nzRadioService.setDisabled(this.nzDisabled),t&&this.nzRadioService.setName(this.nzName)}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}},{key:"writeValue",value:function(n){this.value=n,this.nzRadioService.select(n),this.cdr.markForCheck()}},{key:"registerOnChange",value:function(n){this.onChange=n}},{key:"registerOnTouched",value:function(n){this.onTouched=n}},{key:"setDisabledState",value:function(n){this.nzDisabled=n,this.nzRadioService.setDisabled(n),this.cdr.markForCheck()}}]),n}()).\u0275fac=function(n){return new(n||c)(C.Sb(C.h),C.Sb(X))},c.\u0275cmp=C.Mb({type:c,selectors:[["nz-radio-group"]],hostVars:8,hostBindings:function(n,e){2&n&&C.Ib("ant-radio-group",!0)("ant-radio-group-large","large"===e.nzSize)("ant-radio-group-small","small"===e.nzSize)("ant-radio-group-solid","solid"===e.nzButtonStyle)},inputs:{nzDisabled:"nzDisabled",nzButtonStyle:"nzButtonStyle",nzSize:"nzSize",nzName:"nzName"},exportAs:["nzRadioGroup"],features:[C.Bb([X,{provide:d.i,useExisting:Object(C.U)((function(){return c})),multi:!0}]),C.Ab],ngContentSelectors:Y,decls:1,vars:0,template:function(n,e){1&n&&(C.pc(),C.oc(0))},encapsulation:2,changeDetection:0}),Object(g.a)([Object(k.a)(),Object(g.b)("design:type",Object)],c.prototype,"nzDisabled",void 0),c),_=((r=function(){function n(e,t,i,o,s){_classCallCheck(this,n),this.elementRef=e,this.cdr=t,this.focusMonitor=i,this.nzRadioService=o,this.nzRadioButtonDirective=s,this.isNgModel=!1,this.destroy$=new j.a,this.isChecked=!1,this.name=null,this.isRadioButton=!!this.nzRadioButtonDirective,this.onChange=function(){},this.onTouched=function(){},this.nzValue=null,this.nzDisabled=!1,this.nzAutoFocus=!1}return _createClass(n,[{key:"onHostClick",value:function(n){n.stopPropagation(),n.preventDefault(),this.focus(),this.nzDisabled||this.isChecked||(this.nzRadioService&&this.nzRadioService.select(this.nzValue),this.isNgModel&&(this.isChecked=!0,this.onChange(!0)))}},{key:"focus",value:function(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}},{key:"blur",value:function(){this.inputElement.nativeElement.blur()}},{key:"setDisabledState",value:function(n){this.nzDisabled=n,this.cdr.markForCheck()}},{key:"writeValue",value:function(n){this.isChecked=n,this.cdr.markForCheck()}},{key:"registerOnChange",value:function(n){this.isNgModel=!0,this.onChange=n}},{key:"registerOnTouched",value:function(n){this.onTouched=n}},{key:"ngOnInit",value:function(){var n=this;this.nzRadioService&&(this.nzRadioService.name$.pipe(Object(M.a)(this.destroy$)).subscribe((function(e){n.name=e,n.cdr.markForCheck()})),this.nzRadioService.disabled$.pipe(Object(M.a)(this.destroy$)).subscribe((function(e){n.nzDisabled=e,n.cdr.markForCheck()})),this.nzRadioService.selected$.pipe(Object(M.a)(this.destroy$)).subscribe((function(e){n.isChecked=n.nzValue===e,n.cdr.markForCheck()}))),this.focusMonitor.monitor(this.elementRef,!0).subscribe((function(e){e||(Promise.resolve().then((function(){return n.onTouched()})),n.nzRadioService&&n.nzRadioService.touch())}))}},{key:"ngAfterViewInit",value:function(){this.nzAutoFocus&&this.focus()}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete(),this.focusMonitor.stopMonitoring(this.elementRef)}}]),n}()).\u0275fac=function(n){return new(n||r)(C.Sb(C.l),C.Sb(C.h),C.Sb(z.b),C.Sb(X,8),C.Sb(T,8))},r.\u0275cmp=C.Mb({type:r,selectors:[["","nz-radio",""],["","nz-radio-button",""]],viewQuery:function(n,e){var t;1&n&&C.Lc(F,!0),2&n&&C.xc(t=C.hc())&&(e.inputElement=t.first)},hostVars:12,hostBindings:function(n,e){1&n&&C.gc("click",(function(n){return e.onHostClick(n)})),2&n&&C.Ib("ant-radio-wrapper",!e.isRadioButton)("ant-radio-button-wrapper",e.isRadioButton)("ant-radio-wrapper-checked",e.isChecked&&!e.isRadioButton)("ant-radio-button-wrapper-checked",e.isChecked&&e.isRadioButton)("ant-radio-wrapper-disabled",e.nzDisabled&&!e.isRadioButton)("ant-radio-button-wrapper-disabled",e.nzDisabled&&e.isRadioButton)},inputs:{nzValue:"nzValue",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus"},exportAs:["nzRadio"],features:[C.Bb([{provide:d.i,useExisting:Object(C.U)((function(){return r})),multi:!0}])],attrs:P,ngContentSelectors:Y,decls:6,vars:24,consts:[["type","radio",3,"disabled","checked"],["inputElement",""]],template:function(n,e){1&n&&(C.pc(),C.Yb(0,"span"),C.Tb(1,"input",0,1),C.Tb(3,"span"),C.Xb(),C.Yb(4,"span"),C.oc(5),C.Xb()),2&n&&(C.Ib("ant-radio",!e.isRadioButton)("ant-radio-checked",e.isChecked&&!e.isRadioButton)("ant-radio-disabled",e.nzDisabled&&!e.isRadioButton)("ant-radio-button",e.isRadioButton)("ant-radio-button-checked",e.isChecked&&e.isRadioButton)("ant-radio-button-disabled",e.nzDisabled&&e.isRadioButton),C.Cb(1),C.Ib("ant-radio-input",!e.isRadioButton)("ant-radio-button-input",e.isRadioButton),C.qc("disabled",e.nzDisabled)("checked",e.isChecked),C.Db("autofocus",e.nzAutoFocus?"autofocus":null)("name",e.name),C.Cb(2),C.Ib("ant-radio-inner",!e.isRadioButton)("ant-radio-button-inner",e.isRadioButton))},encapsulation:2,changeDetection:0}),Object(g.a)([Object(k.a)(),Object(g.b)("design:type",Object)],r.prototype,"nzDisabled",void 0),Object(g.a)([Object(k.a)(),Object(g.b)("design:type",Object)],r.prototype,"nzAutoFocus",void 0),r),V=((a=function n(){_classCallCheck(this,n)}).\u0275mod=C.Qb({type:a}),a.\u0275inj=C.Pb({factory:function(n){return new(n||a)},imports:[[h.c,d.h]]}),a),q=t("Wfee"),B=t("vkgz"),A=t("JIr8"),$=t("7dP1"),H=t("RwU8"),L=t("C2AL");function N(n,e){1&n&&(C.Wb(0),C.Hc(1," Please input your username! "),C.Vb())}function W(n,e){1&n&&(C.Wb(0),C.Hc(1," Your username must be more than 4 characters! "),C.Vb())}function U(n,e){1&n&&(C.Wb(0),C.Hc(1," Your username must be less than 20 characters! "),C.Vb())}function G(n,e){if(1&n&&(C.Fc(0,N,2,0,"ng-container",11),C.Fc(1,W,2,0,"ng-container",11),C.Fc(2,U,2,0,"ng-container",11)),2&n){var t=e.$implicit;C.qc("ngIf",t.hasError("required")),C.Cb(1),C.qc("ngIf",t.hasError("minlength")),C.Cb(1),C.qc("ngIf",t.hasError("maxlength"))}}function Q(n,e){if(1&n){var t=C.Zb();C.Yb(0,"i",20),C.gc("click",(function(){return C.zc(t),C.jc().onTogglePasswordVisibility()})),C.Xb()}if(2&n){var i=C.jc();C.qc("nzType",i.passwordIconType)}}function J(n,e){1&n&&(C.Wb(0),C.Hc(1," Please input your password! "),C.Vb())}function K(n,e){1&n&&(C.Wb(0),C.Hc(1," Your password must be more than 8 characters! "),C.Vb())}function Z(n,e){1&n&&(C.Wb(0),C.Hc(1," Your password must be less than 20 characters! "),C.Vb())}function nn(n,e){1&n&&(C.Wb(0),C.Hc(1," Your password should include at least an uppercase letter, numbers and special characters! "),C.Vb())}function en(n,e){if(1&n&&(C.Fc(0,J,2,0,"ng-container",11),C.Fc(1,K,2,0,"ng-container",11),C.Fc(2,Z,2,0,"ng-container",11),C.Fc(3,nn,2,0,"ng-container",11)),2&n){var t=e.$implicit;C.qc("ngIf",t.hasError("required")),C.Cb(1),C.qc("ngIf",t.hasError("minlength")),C.Cb(1),C.qc("ngIf",t.hasError("maxlength")),C.Cb(1),C.qc("ngIf",t.hasError("pattern"))}}function tn(n,e){1&n&&(C.Yb(0,"nz-form-item"),C.Yb(1,"nz-form-label",21),C.Yb(2,"strong"),C.Hc(3,"Role"),C.Xb(),C.Xb(),C.Yb(4,"nz-form-control"),C.Yb(5,"nz-radio-group",22),C.Yb(6,"label",23),C.Yb(7,"strong"),C.Hc(8,"Student"),C.Xb(),C.Xb(),C.Yb(9,"label",24),C.Yb(10,"strong"),C.Hc(11,"Service provider"),C.Xb(),C.Xb(),C.Xb(),C.Xb(),C.Xb()),2&n&&(C.Cb(1),C.qc("nzSpan",24))}function on(n,e){if(1&n&&C.Tb(0,"nz-alert",25),2&n){var t=C.jc();C.qc("nzDescription",null==t.submitState?null:t.submitState.errorMessage)}}function sn(n,e){1&n&&C.Tb(0,"nz-alert",26)}var an,rn,cn,un=((cn=function(){function n(e){_classCallCheck(this,n),this.fb=e,this.isPasswordVisible=!1,this.submitStateChange=new C.n,this.submitForm=new C.n}return _createClass(n,[{key:"ngOnInit",value:function(){this.initializeForm()}},{key:"onTogglePasswordVisibility",value:function(){this.isPasswordVisible=!this.isPasswordVisible}},{key:"onToggleSignIn",value:function(){if(!this.isSubmitLoading){var n={isSignIn:!this.submitState.isSignIn,isSubmitting:!1,hasSubmitted:!1,hasError:!1};this.submitStateChange.emit(n),n.isSignIn?this.form.removeControl("role"):this.form.addControl("role",this.fb.control("STUDENT",[d.o.required]))}}},{key:"onSubmit",value:function(){this.submitStateChange.emit({isSignIn:this.submitState.isSignIn,isSubmitting:!0,hasSubmitted:!1,hasError:!1}),this.submitForm.emit(Object.assign({},this.form.value))}},{key:"initializeForm",value:function(){this.form=this.fb.group({username:[null,[d.o.required,d.o.minLength(4),d.o.maxLength(20)]],password:[null,[d.o.required,d.o.minLength(8),d.o.maxLength(20),d.o.pattern(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/)]],remember:[!1]},{updateOn:"blur"})}},{key:"passwordInputType",get:function(){return this.isPasswordVisible?"text":"password"}},{key:"passwordIconType",get:function(){return this.isPasswordVisible?"eye-invisible":"eye"}},{key:"isSubmitLoading",get:function(){var n=this.submitState,e=n.isSubmitting,t=n.hasSubmitted,i=n.hasError;return e&&!t&&!i}},{key:"hasRegistered",get:function(){var n=this.submitState,e=n.isSignIn,t=n.hasSubmitted,i=n.hasError;return!e&&t&&!i}}]),n}()).\u0275fac=function(n){return new(n||cn)(C.Sb(d.d))},cn.\u0275cmp=C.Mb({type:cn,selectors:[["laze-auth-form"]],inputs:{submitState:"submitState"},outputs:{submitStateChange:"submitStateChange",submitForm:"submitForm"},decls:38,vars:16,consts:[["nz-form","",1,"auth-form",3,"formGroup","ngSubmit"],["nzFor","username","nz-typography","",3,"nzSpan"],["nzHasFeedback","","nzValidatingTip","Validating...",3,"nzErrorTip"],["nzPrefixIcon","user"],["id","username","type","text","nz-input","","nzSize","large","formControlName","username","placeholder","Your username"],["usernameErrorTemplate",""],["nzFor","password","nz-typography","",3,"nzSpan"],["nzPrefixIcon","lock",3,"nzSuffix"],["id","password","nz-input","","nzSize","large","formControlName","password","placeholder","Your password",3,"type"],["passwordSuffixTemplate",""],["passwordErrorTemplate",""],[4,"ngIf"],["nz-row","",1,"auth-form-margin"],["nz-col","",3,"nzSpan"],["nz-checkbox","","formControlName","remember"],[1,"auth-form-forgot"],["class","auth-form-margin","nzType","error","nzCloseable","","nzMessage","Authentication error",3,"nzDescription",4,"ngIf"],["class","auth-form-margin","nzType","success","nzCloseable","","nzMessage","Registration successful","nzDescription","Please wait at least an hour for account confirmation",4,"ngIf"],["nz-button","","nz-typography","","nzType","primary",1,"sign-in-button","auth-form-margin",3,"disabled","nzLoading"],[1,"register-link",3,"click"],["nz-icon","",3,"nzType","click"],["nzFor","role","nz-typography","",3,"nzSpan"],["id","role","formControlName","role","nzButtonStyle","solid"],["nz-radio-button","","nzValue","STUDENT"],["nz-radio-button","","nzValue","SERVICE_PROVIDER"],["nzType","error","nzCloseable","","nzMessage","Authentication error",1,"auth-form-margin",3,"nzDescription"],["nzType","success","nzCloseable","","nzMessage","Registration successful","nzDescription","Please wait at least an hour for account confirmation",1,"auth-form-margin"]],template:function(n,e){if(1&n&&(C.Yb(0,"form",0),C.gc("ngSubmit",(function(){return e.onSubmit()})),C.Yb(1,"nz-form-item"),C.Yb(2,"nz-form-label",1),C.Yb(3,"strong"),C.Hc(4,"Username"),C.Xb(),C.Xb(),C.Yb(5,"nz-form-control",2),C.Yb(6,"nz-input-group",3),C.Tb(7,"input",4),C.Xb(),C.Fc(8,G,3,3,"ng-template",null,5,C.Gc),C.Xb(),C.Xb(),C.Yb(10,"nz-form-item"),C.Yb(11,"nz-form-label",6),C.Yb(12,"strong"),C.Hc(13,"Password"),C.Xb(),C.Xb(),C.Yb(14,"nz-form-control",2),C.Yb(15,"nz-input-group",7),C.Tb(16,"input",8),C.Xb(),C.Fc(17,Q,1,1,"ng-template",null,9,C.Gc),C.Fc(19,en,4,4,"ng-template",null,10,C.Gc),C.Xb(),C.Xb(),C.Fc(21,tn,12,1,"nz-form-item",11),C.Yb(22,"div",12),C.Yb(23,"div",13),C.Yb(24,"label",14),C.Yb(25,"span"),C.Hc(26,"Remember me"),C.Xb(),C.Xb(),C.Xb(),C.Yb(27,"div",13),C.Yb(28,"a",15),C.Hc(29,"Forgot password?"),C.Xb(),C.Xb(),C.Xb(),C.Fc(30,on,1,1,"nz-alert",16),C.Fc(31,sn,1,0,"nz-alert",17),C.Yb(32,"button",18),C.Yb(33,"strong"),C.Hc(34),C.Xb(),C.Xb(),C.Hc(35," or "),C.Yb(36,"a",19),C.gc("click",(function(){return e.onToggleSignIn()})),C.Hc(37),C.Xb(),C.Xb()),2&n){var t=C.yc(9),i=C.yc(18),o=C.yc(20);C.qc("formGroup",e.form),C.Cb(2),C.qc("nzSpan",24),C.Cb(3),C.qc("nzErrorTip",t),C.Cb(6),C.qc("nzSpan",24),C.Cb(3),C.qc("nzErrorTip",o),C.Cb(1),C.qc("nzSuffix",i),C.Cb(1),C.qc("type",e.passwordInputType),C.Cb(5),C.qc("ngIf",!e.submitState.isSignIn),C.Cb(2),C.qc("nzSpan",12),C.Cb(4),C.qc("nzSpan",12),C.Cb(3),C.qc("ngIf",e.submitState.hasError),C.Cb(1),C.qc("ngIf",e.hasRegistered),C.Cb(1),C.qc("disabled",e.form.invalid)("nzLoading",e.isSubmitLoading),C.Cb(2),C.Ic(e.submitState.isSignIn?"Sign in":"Register"),C.Cb(3),C.Jc(" ",e.submitState.isSignIn?"Register":"Sign in"," ")}},directives:[d.p,d.l,f.b,d.g,m.c,f.c,m.a,f.d,f.a,x.b,x.a,d.c,d.k,d.f,x.c,h.m,O,p.a,H.a,L.a,R.a,E,_,T,q.a],styles:[".auth-form-margin[_ngcontent-%COMP%]{margin-top:16px}.auth-form-forgot[_ngcontent-%COMP%]{float:right}.sign-in-button[_ngcontent-%COMP%]{width:40%}"]}),cn),bn=((rn=function(){function n(e,t,i){_classCallCheck(this,n),this.route=e,this.router=t,this.auth=i,this.submitState={isSignIn:!0,isSubmitting:!1,hasSubmitted:!1,hasError:!1}}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"onSubmitStateChange",value:function(n){this.submitState=Object.assign({},n)}},{key:"onSubmitForm",value:function(n){this.submitState.isSignIn?this.signIn(n):this.signUp(n)}},{key:"signUp",value:function(n){var e=this;this.auth.signUp(Object.assign({},n)).pipe(Object(B.a)((function(n){e.submitState={isSignIn:e.submitState.isSignIn,isSubmitting:!1,hasSubmitted:!0,hasError:!1}})),Object(A.a)((function(n){return e.submitState={isSignIn:e.submitState.isSignIn,isSubmitting:!1,hasSubmitted:!1,hasError:!0,errorMessage:n.message},n}))).subscribe()}},{key:"signIn",value:function(n){var e=this;this.auth.signIn(Object.assign({},n)).pipe(Object(B.a)((function(n){var t;e.submitState={isSignIn:e.submitState.isSignIn,isSubmitting:!1,hasSubmitted:!0,hasError:!1};var i=null!==(t=e.route.snapshot.queryParamMap.get("returnUrl"))&&void 0!==t?t:"/main";e.router.navigateByUrl(i)})),Object(A.a)((function(n){return e.submitState={isSignIn:e.submitState.isSignIn,isSubmitting:!1,hasSubmitted:!1,hasError:!0,errorMessage:n.message},n}))).subscribe()}}]),n}()).\u0275fac=function(n){return new(n||rn)(C.Sb(l.a),C.Sb(l.f),C.Sb($.a))},rn.\u0275cmp=C.Mb({type:rn,selectors:[["ng-component"]],decls:10,vars:1,consts:[["nz-row","",1,"container"],["nz-col","","nzXs","24","nzSm","24","nzMd","24","nzLg","12",1,"form-container"],[1,"form-card"],["src","assets/svg/logo.svg","alt","Laze logo","width","96"],["nz-typography",""],[3,"submitState","submitStateChange","submitForm"],["nz-col","","nzXs","0","nzSm","0","nzMd","0","nzLg","12",1,"pic-container"],["src","assets/svg/student.svg","alt","Student","width","60%"]],template:function(n,e){1&n&&(C.Yb(0,"div",0),C.Yb(1,"div",1),C.Yb(2,"div",2),C.Tb(3,"img",3),C.Yb(4,"h2",4),C.Yb(5,"strong"),C.Hc(6,"Authenticate your account"),C.Xb(),C.Xb(),C.Yb(7,"laze-auth-form",5),C.gc("submitStateChange",(function(n){return e.onSubmitStateChange(n)}))("submitForm",(function(n){return e.onSubmitForm(n)})),C.Xb(),C.Xb(),C.Xb(),C.Yb(8,"div",6),C.Tb(9,"img",7),C.Xb(),C.Xb()),2&n&&(C.Cb(7),C.qc("submitState",e.submitState))},directives:[m.c,m.a,un],styles:[".container[_ngcontent-%COMP%]{height:100vh}.form-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.form-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:86%}.form-card[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{display:block;margin:auto}.pic-container[_ngcontent-%COMP%]{display:flex;justify-content:center;justify-items:center;background-color:#f4f4f9}.pic-container[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{display:none}@media (min-width:576px){.form-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:78%}}@media (min-width:768px){.form-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:58%}}@media (min-width:992px){.pic-container[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{display:block}}"]}),rn),hn=((an=function n(){_classCallCheck(this,n)}).\u0275mod=C.Qb({type:an}),an.\u0275inj=C.Pb({factory:function(n){return new(n||an)},imports:[[h.c,l.i.forChild([{path:"",component:bn}]),d.h,d.n,m.b,f.e,x.d,p.c,I,R.b,V,q.b]]}),an)}}]);