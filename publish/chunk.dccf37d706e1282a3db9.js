(window.webpackJsonp=window.webpackJsonp||[]).push([[9,40],{273:function(t,e,s){"use strict";var a=s(24),o=s(66),i=s(23),r=s(7),n=s(42);a({target:"Iterator",proto:!0,real:!0},{some:function(t){r(this),i(t);var e=n(this),s=0;return o(e,(function(e,a){if(t(e,s++))return a()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},282:function(t,e,s){"use strict";var a=s(36),o=s(35),i=s(54),r=s(107),n=s(120),c=s(119),l=s(45),u=s.n(l),m=s(293),d=s(279),p=s(350),f=s(302);const _=o.$ecomConfig.get("country_code"),{sessionStorage:h}=window,g="ecomCustomerAccount",v=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":invalid";return document.querySelectorAll(`.account-form input${t}`).length},b="was-validated";var A={name:"AccountForm",components:{InputDocNumber:d.a,InputPhone:p.a,InputDate:f.a},props:{isShort:Boolean,isGuestAccess:Boolean,customer:{type:Object,default:()=>({})},privacyPolicyUrl:{type:String,default:"object"==typeof window?window.privacyPolicyUrl:null},hasSubmitBtn:{type:Boolean,default:!0},btnText:{type:String,default:()=>Object(i.a)(a.Ad)}},data(){return{localCustomer:Object.assign(u()(this.customer),{registry_type:"j"}),fullName:Object(r.a)(this.customer),storageInterval:null,btnLabel:this.btnText,isPrivacyOptIn:Boolean(this.customer._id)}},computed:{i19a:()=>Object(i.a)(a.f),i19birthdate:()=>Object(i.a)(a.w),i19cellphone:()=>Object(i.a)(a.J),i19companyRegistration:()=>Object(i.a)(a.T),i19contactPhone:()=>Object(i.a)(a.X),i19corporateName:()=>Object(i.a)(a.db),i19docNumber:()=>Object(i.a)(a.mb),i19emailAddress:()=>Object(i.a)(a.pb),i19female:()=>Object(i.a)(a.yb),i19fullName:()=>Object(i.a)(a.Hb),i19Gender:()=>Object(i.a)(a.c),i19inscriptionNumber:()=>Object(i.a)(a.Tb),i19InscriptionType:()=>Object(i.a)(a.d),i19iReadAndAccept:()=>Object(i.a)(a.Qb),i19male:()=>Object(i.a)(a.kc),i19nickname:()=>Object(i.a)(a.wc),i19emailMarketingOptInMsg:()=>Object(i.a)(a.qb),i19personalRegistration:()=>Object(i.a)(a.Yc),i19privacyPolicy:()=>Object(i.a)(a.fd),birthdate:{get(){return Object(n.a)(this.localCustomer)},set(t){if(8===t.length){const e=(e,s)=>parseInt(t.substr(e,s),10);let s,a,o;"BR"===_?(s=e(0,2),a=e(2,2),o=e(4,4)):(s=e(6,2),a=e(4,2),o=e(0,4));const i=(new Date).getFullYear();o<i-125?o=i-125:o>i&&(o=i),this.localCustomer.birth_date={day:s,month:a,year:o}}}},phoneNumber:{get(){return this.getPhoneStr(0)},set(t){this.localCustomer.phones[0]=this.parsePhoneStr(t)}},secondPhoneNumber:{get(){return this.getPhoneStr(1)},set(t){const{phones:e}=this.localCustomer;e[e.length>0?1:0]=this.parsePhoneStr(t)}}},methods:{getPhoneStr(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{phones:e}=this.localCustomer;return e[t]?Object(c.a)(this.localCustomer.phones[t]):""},parsePhoneStr(t){let e,s;"+"===t.charAt(0)?(e=parseInt(t.substr(1,2)),s=t.substr(3)):s=t;const a={number:s};return e>=1&&e<=999&&(a.country_code=e),a},update(){this.$el.checkValidity()&&this.$emit("update:customer",this.localCustomer)},mergeLocalCustomer(t){for(const e in t)if(t[e]){const s=this.localCustomer[e];(!s||"object"==typeof s&&!Object.keys(s).length||["addresses","orders","loyalty_points_entries"].includes(e))&&("name"===e?this.fullName=Object(r.a)({name:t[e]}):this.localCustomer[e]=t[e])}},saveToStorage(){h.setItem(g,JSON.stringify(this.localCustomer))},submit(){this.$nextTick((()=>{const t=this.$el;v(".is-invalid")?t.classList.remove(b):(this.localCustomer.display_name||(this.localCustomer.display_name=this.localCustomer.name.given_name),Object(m.a)(t)?(this.saveToStorage(),this.save()):t.classList.contains(b)&&!v()&&this.save(),t.classList.add(b))}))},save(){this.update(),this.$emit("submit",this.localCustomer),this.btnLabel=Object(i.a)(a.Bd)+"...",setTimeout((()=>{this.btnLabel=this.btnText}),3e3)}},watch:{fullName(t){const e=t.replace(/\s{2,}/g," ");if(e!==this.fullName)this.fullName=e;else{const t=e.trim().split(" ");this.localCustomer.name={given_name:t.shift()};const{name:s}=this.localCustomer;t.length&&(s.family_name=t.pop(),t.length&&(s[s.family_name?"middle_name":"family_name"]=t.join(" ")))}},customer:{handler(){this.mergeLocalCustomer(this.customer)},deep:!0},localCustomer:{handler(){this.isGuestAccess&&this.$nextTick(this.update)},deep:!0}},created(){const t=JSON.parse(h.getItem(g));t&&this.mergeLocalCustomer(t),this.storageInterval=setInterval((()=>{Object.keys(this.localCustomer).length&&this.saveToStorage()}),7e3),this.localCustomer._id||(this.localCustomer.accepts_marketing=!0)},mounted(){const t=this.$el.querySelectorAll("input");for(let e=0;e<t.length;e++)if(!t[e].value){t[e].focus();break}},destroyed(){clearInterval(this.storageInterval)}};e.a=A},283:function(t,e,s){"use strict";s(8);var a=s(36),o=s(54),i=s(40),r=s(256),n=s(279),c={name:"LoginBlock",components:{AAlert:r.a,InputDocNumber:n.a},props:{customerEmail:String,canAcceptGuest:{type:Boolean,default:!1},ecomPassport:{type:Object,default:()=>i.a}},data(){return{email:this.customerEmail,docNumber:"",isCompany:!1,oauthProviders:[],isWaitingPopup:!1,isWaitingLogin:!1,failAlertText:null}},computed:{i19continue:()=>Object(o.a)(a.Y),i19enterYourDocNumberMsg:()=>Object(o.a)(a.tb),i19enterYourEmailMsg:()=>Object(o.a)(a.ub),i19helloAgain:()=>Object(o.a)(a.Nb),i19identifyYourAccount:()=>Object(o.a)(a.Rb),i19manageYourPurchaseHistory:()=>Object(o.a)(a.lc),i19notifyAboutOrders:()=>Object(o.a)(a.Dc),i19oauthOnPopup:()=>Object(o.a)(a.Fc),i19orProceedWith:()=>Object(o.a)(a.Nc),i19signInWith:()=>Object(o.a)(a.Td),i19weUseYourDataToMsg:()=>Object(o.a)(a.ue)},methods:{confirmAccount(){const{checkLogin:t,checkAuthorization:e,getCustomer:s}=this.ecomPassport,a=t()&&!e()&&s().main_email===this.email;return a&&this.$nextTick((()=>{this.$refs.InputDoc.$el.focus()})),a},submitLogin(){if(!this.isWaitingLogin){this.isWaitingLogin=!0,this.failAlertText=null;const{docNumber:t}=this,e=this.email&&this.email.toLowerCase(),s=this.confirmAccount(),i=()=>this.$emit("update",{email:e,docNumber:t});this.ecomPassport.fetchLogin(e,s?t:null).then((()=>{s&&i()})).catch((t=>{const{response:r}=t;r&&403===r.status?!s&&this.canAcceptGuest?(this.$emit("update:customer-email",e),i()):this.failAlertText=Object(o.a)(a.Yb):(console.error(t),this.failAlertText=Object(o.a)(a.fc),401===r.status&&(this.failAlertText="Seu cadastro ainda está em análise."))})).finally((()=>{this.isWaitingLogin=!1}))}},oauthPopup(t){this.ecomPassport.popupOauthLink(t),this.isWaitingPopup=!0,setTimeout((()=>{this.isWaitingPopup=!1}),7500)}},watch:{email(){this.failAlertText=null},docNumber(){this.failAlertText=null}},created(){this.ecomPassport.fetchOauthProviders().then((t=>{let{host:e,baseUri:s,oauthPath:a,providers:o}=t;const i=[];for(const t in o)if(o[t]){const{faIcon:r,providerName:n}=o[t];let c=e+s+t+a;const l="object"==typeof window&&window.sessionStorage.getItem("ecomReferral");l&&(c+=`?referral=${l}`),i.push({link:c,faIcon:r,provider:t,providerName:n})}this.oauthProviders=i})).catch((t=>{console.error(t)}))},mounted(){this.$refs.inputEmail.focus();const{checkLogin:t,checkAuthorization:e,getCustomer:s}=this.ecomPassport,a=()=>{if(e())this.$emit("login",this.ecomPassport);else if(t()){const t=s();this.email=t.main_email,this.isCompany="j"===t.registry_type}};i.a.on("login",(()=>{this.isWaitingPopup=!1,a()})),a()}};e.a=c},299:function(t,e,s){"use strict";s.r(e);s(8),s(134);var a=s(36),o=s(54),i={name:"APagination",props:{totalItems:{type:Number,required:!0},page:{type:Number,default:1},pageSize:{type:Number,default:24}},computed:{i19next:()=>Object(o.a)(a.vc),i19previous:()=>Object(o.a)(a.cd),totalPages(){return Math.ceil(this.totalItems/this.pageSize)},pageNums(){const t=[];if(this.totalPages>0){let e;for(let s=-2;s<=2;s++)if(e=this.page+s,e>=1){if(!(e<=this.totalPages))break;t.push(e)}3===t[0]?t.unshift(1,2):2===t[0]&&t.unshift(1),e===this.totalPages-2?t.push(e+1,e+2):e===this.totalPages-1&&t.push(e+1)}return t},lastPageNum(){return this.pageNums[this.pageNums.length-1]}},methods:{go(t){t>=1&&t<=this.totalPages&&this.$emit("update:page",t)}}},r=s(65),n=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"d-flex"},[s("ul",{staticClass:"pagination mr-2"},[s("li",{staticClass:"page-item",class:t.page<=1?"disabled":null},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-disabled":t.page<=1||null},on:{click:function(e){return e.preventDefault(),t.go(t.page-1)}}},[t._v(" « "+t._s(t.i19previous)+" ")])]),s("li",{staticClass:"page-item",class:t.page>=t.totalPages?"disabled":null},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-disabled":t.page>=t.totalPages||null},on:{click:function(e){return e.preventDefault(),t.go(t.page+1)}}},[t._v(" "+t._s(t.i19next)+" » ")])])]),s("ul",{staticClass:"pagination d-none d-lg-flex"},[t.pageNums[0]>1?[s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.go(1)}}},[t._v(" 1 ")])]),t._m(0)]:t._e(),t._l(t.pageNums,(function(e){return s("li",{key:"p"+e,staticClass:"page-item",class:t.page===e?"active":null},[t.page!==e?s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.go(e)}}},[t._v(" "+t._s(e)+" ")]):s("span",{staticClass:"page-link",attrs:{"aria-current":"page"}},[t._v(" "+t._s(e)+" ")])])})),t.lastPageNum<t.totalPages?[t._m(1),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.go(t.totalPages)}}},[t._v(" "+t._s(t.totalPages)+" ")])])]:t._e()],2)])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"page-item disabled"},[s("span",{staticClass:"page-link"},[t._v(" ... ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"page-item disabled"},[s("span",{staticClass:"page-link"},[t._v(" ... ")])])}],!1,null,null,null);e.default=n.exports},341:function(t,e,s){var a=s(441);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(191).default)("405957c1",a,!0,{})},342:function(t,e,s){var a=s(443);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(191).default)("4f248663",a,!0,{})},343:function(t,e,s){var a=s(445);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(191).default)("735f70c0",a,!0,{})},359:function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"account-form needs-validation",attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"account-form-email"}},[t._v(" "+t._s(t.i19emailAddress)+" ")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.localCustomer.main_email,expression:"localCustomer.main_email",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"email",pattern:"\\S+@\\S+\\.\\S{2,}",id:"account-form-email",placeholder:"email@mail.com",required:""},domProps:{value:t.localCustomer.main_email},on:{input:function(e){e.target.composing||t.$set(t.localCustomer,"main_email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-lg-8"},[s("label",{attrs:{for:"account-form-name"}},[t._v(" "+t._s(t.i19fullName)+" ")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.fullName,expression:"fullName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",pattern:"[^\\d\\s]{2,}[\\s][^\\d\\s]{2,}.*",id:"account-form-name",required:""},domProps:{value:t.fullName},on:{input:function(e){e.target.composing||(t.fullName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t.isShort?t._e():s("div",{staticClass:"form-group col-lg-4"},[s("label",{attrs:{for:"account-form-nickname"}},[t._v(" "+t._s(t.i19nickname)+" ")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.localCustomer.display_name,expression:"localCustomer.display_name",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",pattern:"[^\\d\\s]{2,}.*",id:"account-form-nickname"},domProps:{value:t.localCustomer.display_name},on:{input:function(e){e.target.composing||t.$set(t.localCustomer,"display_name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t.isShort?t._e():s("div",{staticClass:"form-group"},t._l(t.i19Gender,(function(e,a){return s("div",{staticClass:"custom-control custom-radio custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localCustomer.gender,expression:"localCustomer.gender"}],staticClass:"custom-control-input",attrs:{type:"radio",name:"account-form-gender",id:"account-form-gender-"+a},domProps:{value:a,checked:t._q(t.localCustomer.gender,a)},on:{change:function(e){return t.$set(t.localCustomer,"gender",a)}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"account-form-gender-"+a}},[t._v(" "+t._s(e)+" ")])])})),0),s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-lg-4"},[s("label",{attrs:{for:"account-form-phone"}},[t._v(" "+t._s(t.i19contactPhone)+" ")]),s("input-phone",{attrs:{id:"account-form-phone",required:""},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}})],1),t.isShort?t._e():s("div",{staticClass:"form-group col-lg-4"},[s("label",{attrs:{for:"account-form-cell"}},[t._v(" "+t._s(t.i19cellphone)+" ")]),s("input-phone",{attrs:{id:"account-form-cell"},model:{value:t.secondPhoneNumber,callback:function(e){t.secondPhoneNumber=e},expression:"secondPhoneNumber"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isGuestAccess,expression:"!isGuestAccess"}],staticClass:"form-group col-lg-4"},[s("label",{attrs:{for:"account-form-birth"}},[t._v(" "+t._s(t.i19birthdate)+" ")]),s("input-date",{attrs:{id:"account-form-birth"},model:{value:t.birthdate,callback:function(e){t.birthdate=e},expression:"birthdate"}})],1)]),s("div",{staticClass:"form-group"},t._l({j:t.i19companyRegistration},(function(e,a){return s("div",{staticClass:"custom-control custom-radio custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localCustomer.registry_type,expression:"localCustomer.registry_type"}],staticClass:"custom-control-input",attrs:{type:"radio",name:"account-form-type",id:"account-form-type-"+a,required:""},domProps:{value:a,checked:t._q(t.localCustomer.registry_type,a)},on:{change:function(e){return t.$set(t.localCustomer,"registry_type",a)}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"account-form-type-"+a}},[t._v(" "+t._s(e)+" ")])])})),0),s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-lg-6"},[s("label",{attrs:{for:"account-form-doc"}},[t._v(" "+t._s(t.i19docNumber)+" ")]),s("input-doc-number",{attrs:{id:"account-form-doc",isCompany:"p"!==t.localCustomer.registry_type,required:""},model:{value:t.localCustomer.doc_number,callback:function(e){t.$set(t.localCustomer,"doc_number",e)},expression:"localCustomer.doc_number"}})],1)]),"p"!==t.localCustomer.registry_type?s("div",{staticClass:"account-form__legal-person"},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-lg-8"},[s("label",{attrs:{for:"account-form-name"}},[t._v(" "+t._s(t.i19corporateName)+" ")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.localCustomer.corporate_name,expression:"localCustomer.corporate_name",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",pattern:"[\\w-]{1,}[\\s][\\w-]{1,}.*",minlength:"4",id:"account-form-name",required:""},domProps:{value:t.localCustomer.corporate_name},on:{input:function(e){e.target.composing||t.$set(t.localCustomer,"corporate_name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),s("div",{staticClass:"form-row account-form__inscription"},[s("div",{staticClass:"form-group col-lg-6"},[s("label",{attrs:{for:"account-form-inscription"}},[t._v(" "+t._s(t.i19inscriptionNumber)+" ")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.localCustomer.inscription_number,expression:"localCustomer.inscription_number",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",maxlength:"50",id:"account-form-inscription"},domProps:{value:t.localCustomer.inscription_number},on:{input:function(e){e.target.composing||t.$set(t.localCustomer,"inscription_number",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group col-lg-5 pb-lg-2 ml-lg-2"},t._l(t.i19InscriptionType,(function(e,a){return s("div",{staticClass:"custom-control custom-radio custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localCustomer.inscription_type,expression:"localCustomer.inscription_type"}],staticClass:"custom-control-input",attrs:{type:"radio",name:"account-form-gender",id:"account-form-gender-"+a},domProps:{value:a,checked:t._q(t.localCustomer.inscription_type,a)},on:{change:function(e){return t.$set(t.localCustomer,"inscription_type",a)}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"account-form-gender-"+a}},[t._v(" "+t._s(e)+" ")])])})),0)])]):t._e(),s("div",{staticClass:"form-group"},[s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localCustomer.accepts_marketing,expression:"localCustomer.accepts_marketing"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"account-form-marketing"},domProps:{checked:Array.isArray(t.localCustomer.accepts_marketing)?t._i(t.localCustomer.accepts_marketing,null)>-1:t.localCustomer.accepts_marketing},on:{change:function(e){var s=t.localCustomer.accepts_marketing,a=e.target,o=!!a.checked;if(Array.isArray(s)){var i=t._i(s,null);a.checked?i<0&&t.$set(t.localCustomer,"accepts_marketing",s.concat([null])):i>-1&&t.$set(t.localCustomer,"accepts_marketing",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.localCustomer,"accepts_marketing",o)}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"account-form-marketing"}},[t._v(" "+t._s(t.i19emailMarketingOptInMsg)+" ")])])]),t.isGuestAccess?t._e():[t.privacyPolicyUrl?s("div",{staticClass:"form-group"},[s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.isPrivacyOptIn,expression:"isPrivacyOptIn"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"account-form-privacy-policy",required:""},domProps:{checked:Array.isArray(t.isPrivacyOptIn)?t._i(t.isPrivacyOptIn,null)>-1:t.isPrivacyOptIn},on:{change:function(e){var s=t.isPrivacyOptIn,a=e.target,o=!!a.checked;if(Array.isArray(s)){var i=t._i(s,null);a.checked?i<0&&(t.isPrivacyOptIn=s.concat([null])):i>-1&&(t.isPrivacyOptIn=s.slice(0,i).concat(s.slice(i+1)))}else t.isPrivacyOptIn=o}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"account-form-privacy-policy"}},[t._v(" "+t._s(t.i19iReadAndAccept)+" "+t._s(t.i19a)+" "),s("a",{attrs:{href:t.privacyPolicyUrl,target:"_blank"},domProps:{textContent:t._s(t.i19privacyPolicy)}}),t._v(". ")])])]):t._e()],t.hasSubmitBtn?s("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"submit"}},[s("i",{staticClass:"i-check mr-1"}),t._v(" "+t._s(t.btnLabel)+" ")]):t._e()],2)},o=[]},440:function(t,e,s){"use strict";s(341)},441:function(t,e,s){(e=s(190)(!0)).push([t.i,".account__greetings i,.account__greetings svg{color:var(--success);margin-right:var(--spacer-1)}.account__logout{color:var(--text-muted);margin:var(--spacer-3) 0}.account__logout a{color:var(--danger);margin:0 var(--spacer-2)}.account__nav{display:flex;flex-wrap:nowrap;margin-top:var(--spacer-5);overflow-x:auto;overflow-y:hidden}.account__content{padding-top:var(--spacer-5);position:relative}","",{version:3,sources:["TheAccount.scss"],names:[],mappings:"AAAA,8CAA8C,oBAAoB,CAAC,4BAA4B,CAAC,iBAAiB,uBAAuB,CAAC,wBAAwB,CAAC,mBAAmB,mBAAmB,CAAC,wBAAwB,CAAC,cAAc,YAAY,CAAC,gBAAgB,CAAC,0BAA0B,CAAC,eAAe,CAAC,iBAAiB,CAAC,kBAAkB,2BAA2B,CAAC,iBAAiB",file:"TheAccount.scss",sourcesContent:[".account__greetings i,.account__greetings svg{color:var(--success);margin-right:var(--spacer-1)}.account__logout{color:var(--text-muted);margin:var(--spacer-3) 0}.account__logout a{color:var(--danger);margin:0 var(--spacer-2)}.account__nav{display:flex;flex-wrap:nowrap;margin-top:var(--spacer-5);overflow-x:auto;overflow-y:hidden}.account__content{padding-top:var(--spacer-5);position:relative}"]}]),t.exports=e},442:function(t,e,s){"use strict";s(342)},443:function(t,e,s){(e=s(190)(!0)).push([t.i,".account-points__entry small{text-transform:lowercase}.account-points__info{align-items:center;display:flex;justify-content:space-between}.account-points__entry-title{display:flex;justify-content:space-between;width:100%}","",{version:3,sources:["AccountPoints.scss"],names:[],mappings:"AAAA,6BAA6B,wBAAwB,CAAC,sBAAsB,kBAAkB,CAAC,YAAY,CAAC,6BAA6B,CAAC,6BAA6B,YAAY,CAAC,6BAA6B,CAAC,UAAU",file:"AccountPoints.scss",sourcesContent:[".account-points__entry small{text-transform:lowercase}.account-points__info{align-items:center;display:flex;justify-content:space-between}.account-points__entry-title{display:flex;justify-content:space-between;width:100%}"]}]),t.exports=e},444:function(t,e,s){"use strict";s(343)},445:function(t,e,s){(e=s(190)(!0)).push([t.i,".orders-list{margin:0 auto;max-width:700px}@media(min-width:768px){.orders-list__item{display:flex;justify-content:space-between}.orders-list__item>div{flex:1.4 1 0}.orders-list__item>span{flex:1.4 1 0;text-align:right}}.orders-list__item:hover .orders-list__number{text-decoration:underline}.orders-list__number{border-left:.5rem solid var(--primary-lightest);color:var(--primary);padding:0 1rem}.orders-list__number--open{border-left-color:var(--info)}.orders-list__number--closed{border-left-color:var(--success)}.orders-list__number--cancelled{border-left-color:var(--danger)}.orders-list__financial-status,.orders-list__fulfillment-status,.orders-list__status{color:var(--info);font-weight:var(--font-bold)}@media(max-width:767.98px){.orders-list__financial-status,.orders-list__fulfillment-status,.orders-list__status{float:right}}.orders-list__status--closed{color:var(--success)}.orders-list__status--cancelled{color:var(--danger)}.orders-list__financial-status--pending{color:var(--warning)}.orders-list__financial-status--in_dispute,.orders-list__financial-status--unauthorized,.orders-list__financial-status--voided{color:var(--danger)}.orders-list__financial-status--paid,.orders-list__fulfillment-status--delivered{color:var(--success)}","",{version:3,sources:["EcOrdersList.scss"],names:[],mappings:"AAAA,aAAa,aAAa,CAAC,eAAe,CAAC,wBAAwB,mBAAmB,YAAY,CAAC,6BAA6B,CAAC,uBAAuB,YAAY,CAAC,wBAAwB,YAAY,CAAC,gBAAgB,CAAC,CAAC,8CAA8C,yBAAyB,CAAC,qBAAqB,+CAA+C,CAAC,oBAAoB,CAAC,cAAc,CAAC,2BAA2B,6BAA6B,CAAC,6BAA6B,gCAAgC,CAAC,gCAAgC,+BAA+B,CAAC,qFAAqF,iBAAiB,CAAC,4BAA4B,CAAC,2BAA2B,qFAAqF,WAAW,CAAC,CAAC,6BAA6B,oBAAoB,CAAC,gCAAgC,mBAAmB,CAAC,wCAAwC,oBAAoB,CAAC,+HAA+H,mBAAmB,CAAC,iFAAiF,oBAAoB",file:"EcOrdersList.scss",sourcesContent:[".orders-list{margin:0 auto;max-width:700px}@media(min-width:768px){.orders-list__item{display:flex;justify-content:space-between}.orders-list__item>div{flex:1.4 1 0}.orders-list__item>span{flex:1.4 1 0;text-align:right}}.orders-list__item:hover .orders-list__number{text-decoration:underline}.orders-list__number{border-left:.5rem solid var(--primary-lightest);color:var(--primary);padding:0 1rem}.orders-list__number--open{border-left-color:var(--info)}.orders-list__number--closed{border-left-color:var(--success)}.orders-list__number--cancelled{border-left-color:var(--danger)}.orders-list__financial-status,.orders-list__fulfillment-status,.orders-list__status{color:var(--info);font-weight:var(--font-bold)}@media(max-width:767.98px){.orders-list__financial-status,.orders-list__fulfillment-status,.orders-list__status{float:right}}.orders-list__status--closed{color:var(--success)}.orders-list__status--cancelled{color:var(--danger)}.orders-list__financial-status--pending{color:var(--warning)}.orders-list__financial-status--in_dispute,.orders-list__financial-status--unauthorized,.orders-list__financial-status--voided{color:var(--danger)}.orders-list__financial-status--paid,.orders-list__fulfillment-status--delivered{color:var(--success)}"]}]),t.exports=e},465:function(t,e,s){"use strict";s.r(e);s(8);var a=s(40),o=s(135),i=(s(3),s(273),s(36)),r=s(54),n=s(118),c=s(189),l=s(35),u=s(358),m=s(281),d=s(256),p=s(292),f={name:"TheAccount",components:{LoginBlock:u.a,RecommendedItems:m.a,AAlert:d.a,AccountForm:p.a},props:{customer:{type:Object,default:()=>({})},currentTab:{type:String,validator:function(t){return["orders","favorites","subscriptions","points","account"].includes(t)}},ecomPassport:{type:Object,default:()=>a.a}},data(){return{favoriteIds:[],navTabs:[],customerEmail:this.customer.main_email||this.ecomPassport.getCustomer().main_email,isAccountCreated:!0}},computed:{i19addresses:()=>Object(r.a)(i.o),i19favorites:()=>Object(r.a)(i.xb),i19hello:()=>Object(r.a)(i.Mb),i19isNotYou:()=>Object(r.a)(i.Zb),i19logout:()=>Object(r.a)(i.hc),i19noSavedFavoritesMsg:()=>Object(r.a)(i.Bc),i19orders:()=>Object(r.a)(i.Rc),i19subscriptions:()=>Object(r.a)(i.Zd),i19registration:()=>Object(r.a)(i.rd),activeTab:{get(){return this.currentTab||"account"},set(t){this.$emit("update:current-tab",t)}},localCustomer:{get(){return this.customer},set(t){this.$emit("update:customer",t)}},nickname(){return Object(n.a)(this.customer)},check(){return this.ecomPassport.getCustomer()}},methods:{hasTab(t){return this.navTabs.some((e=>e.value===t))},insertSubscriptionTab(){const t=this.hasTab("subscriptions");this.ecomPassport.checkAuthorization()&&!t&&this.ecomPassport.requestApi("/orders.json?transactions.type=recurrence&limit=1&fields=_id").then((t=>{let{data:e}=t;const{result:s}=e;s.length&&this.navTabs.push({label:this.i19subscriptions,value:"subscriptions"})})).catch(console.error)},login(t){t.checkAuthorization()&&(this.localCustomer=t.getCustomer(),this.$emit("login",t))},logout(){this.ecomPassport.checkLogin()&&(this.ecomPassport.logout(),this.$emit("logout"))},signup(){const t=`https://passport.e-com.plus/v1/${l.$ecomConfig.get("store_id")}/signup.json`;c.a.post(t,this.localCustomer).then((()=>{this.isAccountCreated=!0,this.isLogged=!0}))}},watch:{customer:{handler(t){const e=this.hasTab("points");Array.isArray(t.loyalty_points_entries)&&t.loyalty_points_entries.length&&!e&&this.navTabs.push({label:"Cashback",value:"points"})},immediate:!0,deep:!0},customerEmail(t){t&&t!==this.localCustomer.main_email&&(this.localCustomer.main_email=t)}},created(){this.navTabs=[{label:this.i19registration,value:"account"},{label:this.i19orders,value:"orders"},{label:this.i19favorites,value:"favorites"}];const{favorites:t}=this.ecomPassport.getCustomer();this.favoriteIds=t||[],this.insertSubscriptionTab(),this.ecomPassport.on("login",this.insertSubscriptionTab),this.$once("hook:beforeDestroy",(()=>{this.ecomPassport.off("login",this.insertSubscriptionTab)}))}},_=(s(440),s(65)),h=Object(_.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account"},[t.localCustomer._id?s("div",{staticClass:"account__logged"},[s("h2",{staticClass:"account__greetings"},[s("i",{staticClass:"i-user-circle"}),t._v(" "+t._s(t.i19hello+" "+t.nickname)+" ")]),s("div",{staticClass:"account__logout"},[t._v(" "+t._s(t.i19isNotYou+"?")+" "),s("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout.apply(null,arguments)}}},[s("i",{staticClass:"i-sign-out"}),t._v(" "+t._s(t.i19logout)+" ")])]),s("ul",{staticClass:"account__nav nav nav-tabs"},t._l(t.navTabs,(function(e){var a=e.label,o=e.value;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:t.activeTab===o?"active":null,attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.activeTab=o}}},[t._v(" "+t._s(a)+" ")])])})),0),s("div",{staticClass:"account__content"},[s("transition",{attrs:{"enter-active-class":"animated fadeInLeft slow","leave-active-class":"animated fadeOutLeft"}},["account"!==t.currentTab&&t.currentTab?t._e():s("div",[t._t("registration",(function(){return[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-7"},[t._t("account-form")],2),s("div",{staticClass:"col-md-5 mt-3 mt-md-0"},[s("h4",[t._v(t._s(t.i19addresses))]),t._t("account-addresses")],2)])]}))],2)]),s("transition",{attrs:{"enter-active-class":"animated fadeInRight slow","leave-active-class":"animated fadeOutRight position-absolute"}},["orders"===t.currentTab?s("div",[t._t("orders-list")],2):t._e()]),s("transition",{attrs:{"enter-active-class":"animated fadeInRight slow","leave-active-class":"animated fadeOutRight position-absolute"}},["favorites"===t.currentTab?s("div",[t._t("favorites",(function(){return[t.favoriteIds.length?s("recommended-items",{attrs:{"product-ids":t.favoriteIds}}):s("div",[t._v(" "+t._s(t.i19noSavedFavoritesMsg)+" ")])]}))],2):t._e()]),s("transition",{attrs:{"enter-active-class":"animated fadeInRight slow","leave-active-class":"animated fadeOutRight position-absolute"}},["points"===t.currentTab?s("div",[t._t("account-points")],2):t._e()]),s("transition",{attrs:{"enter-active-class":"animated fadeInRight slow","leave-active-class":"animated fadeOutRight position-absolute"}},["subscriptions"===t.currentTab?s("div",[t._t("subscriptions")],2):t._e()])],1)]):t.customerEmail?s("div",{staticStyle:{"max-width":"600px",margin:"0 auto"}},[t.isAccountCreated?t._e():[s("p",{staticClass:"lead"},[t._v(" Cadastre-se pelo formulário abaixo ")]),s("account-form",{attrs:{customer:t.localCustomer},on:{"update:customer":function(e){t.localCustomer=e},submit:t.signup}})],s("a-alert",{attrs:{"can-show":t.isAccountCreated,variant:"info"}},[t._v(" Sua conta foi criada com sucesso, por favor aguarde a aprovação e retorne nos próximos dias. Entraremos em contato. ")]),s("p",{staticClass:"mt-3"},[t._v(" Analisaremos os dados cadastrados o mais rápido possível, você poderá visualizar os preços e comprar na loja após a aprovação da conta. ")])],2):s("login-block",{staticClass:"account__login",attrs:{"customer-email":t.customerEmail,"can-accept-guest":!0},on:{login:t.login,"update:customerEmail":function(e){t.customerEmail=e},"update:customer-email":function(e){t.customerEmail=e}}})],1)}),[],!1,null,null,null),g=h.exports,v=s(348),b=(s(22),s(234),s(56)),A=s(104),C={name:"AccountPoints",props:{customer:{type:Object,default:()=>({})}},computed:{i19available:()=>Object(r.a)(i.t),i19loyaltyPoints:()=>Object(r.a)(i.jc),i19pointsEarned:()=>Object(r.a)(i.ad),i19upTo:()=>Object(r.a)(i.oe),validPointsEntries(){const t=this.customer.loyalty_points_entries;return t?t.filter((t=>{const e=t.valid_thru;return(!e||new Date(e).getTime()>=Date.now())&&t.active_points>0})):[]},totalPoints(){return this.validPointsEntries.length?this.validPointsEntries.reduce(((t,e)=>t+e.active_points),0):0},totalCashback(){return this.validPointsEntries.length?this.validPointsEntries.reduce(((t,e)=>t+e.active_points*e.ratio),0):0}},methods:{formatDate:b.a,formatMoney:A.a}},y=(s(442),Object(_.a)(C,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.validPointsEntries.length?s("div",{staticClass:"account-points"},[s("div",{staticClass:"account-points__info"},[s("h4",[t._v(t._s(t.i19loyaltyPoints))]),s("span",[t._v(t._s(t.i19available)+": "),s("b",[t._v(t._s(t.totalPoints.toFixed(1)))]),t._v(" / Cashback: "),s("b",[t._v(t._s(t.formatMoney(t.totalCashback)))])])]),s("ul",{staticClass:"list-group"},t._l(t.validPointsEntries,(function(e){return s("li",{staticClass:"list-group-item account-points__entry"},[s("div",{staticClass:"account-points__entry-title"},[s("h5",{staticClass:"mb-1"},[t._v(" "+t._s(e.name)+" ")]),e.valid_thru?s("small",[t._v(" "+t._s(t.i19upTo)+" "+t._s(t.formatDate(e.valid_thru))+" ")]):t._e()]),t._v(" "+t._s(t.i19available)+": "),s("b",[t._v(t._s(e.active_points.toFixed(1)))]),e.earned_points?s("small",{staticClass:"text-muted"},[t._v(" / "+t._s(e.earned_points.toFixed(1)+" "+t.i19pointsEarned)+" ")]):t._e(),s("div",{staticClass:"account-points__cashback"},[t._v(" Cashback: "),s("b",[t._v(t._s(t.formatMoney(e.active_points*e.ratio)))])])])})),0)]):t._e()}),[],!1,null,null,null).exports),P=s(299),O={name:"EcOrdersList",components:{EcOrderInfo:s(301).a,APagination:P.default},props:{mergeDictionary:{type:Object,default:()=>{}},ecomPassport:{type:Object,default:()=>a.a},ordersListParams:{type:String,default:""},isSubscriptions:Boolean},data:()=>({updateInterval:null,orders:[],totalOrders:0,currentPage:1,pageSize:10}),computed:{i19active:()=>Object(r.a)(i.h),i19inactive:()=>Object(r.a)(i.Sb)},methods:{formatDate:b.a,formatMoney:A.a,i19FinancialStatus:t=>Object(r.a)(i.a)[t],i19FulfillmentStatus:t=>Object(r.a)(i.b)[t],i19OrderStatus:t=>Object(r.a)(i.e)[t],updateOrders(){return this.ecomPassport.fetchOrdersList((this.currentPage-1)*this.pageSize).then((t=>{this.orders=t})).catch(console.error)}},created(){const t=()=>{this.updateInterval=setInterval(this.updateOrders,7e3)};this.ecomPassport.checkAuthorization()?this.ecomPassport.requestApi(`/orders.json?${this.ordersListParams}`).then((t=>{let{data:e}=t;const{result:s}=e;this.ecomPassport.setCustomer({orders:s}),this.updateOrders(),this.totalOrders=s.length})).catch(this.updateOrders).finally(t):(this.updateOrders(),t())},watch:{currentPage(){this.updateOrders()}},beforeDestroy(){clearInterval(this.updateInterval)}},w=(s(444),Object(_.a)(O,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"orders-list"},[t._l(t.orders,(function(e){return t.orders.length?s("div",{staticClass:"list-group list-group-flush"},[s("a",{staticClass:"orders-list__item list-group-item list-group-item-action",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),function(){return t.$emit("click:order",e)}.apply(null,arguments)}}},[s("div",[s("samp",{staticClass:"orders-list__number",class:"orders-list__number--"+e.status,domProps:{textContent:t._s("#"+e.number)}}),e.amount?s("strong",{staticClass:"orders-list__amount"},[t._v(" "+t._s(t.formatMoney(e.amount.total))+" ")]):t._e()]),s("span",[t._v(t._s(t.formatDate(e.created_at)))]),t.isSubscriptions?s("span",{staticClass:"orders-list__status",class:"orders-list__status--"+e.status},[t._v(" "+t._s("cancelled"===e.status?t.i19inactive:t.i19active)+" ")]):"cancelled"!==e.status&&e.financial_status?"paid"===e.financial_status.current&&e.fulfillment_status?s("span",{staticClass:"orders-list__fulfillment-status",class:"orders-list__fulfillment-status--"+e.fulfillment_status.current},[t._v(" "+t._s(t.i19FulfillmentStatus(e.fulfillment_status.current))+" ")]):s("span",{staticClass:"orders-list__financial-status",class:"orders-list__financial-status--"+e.financial_status.current},[t._v(" "+t._s(t.i19FinancialStatus(e.financial_status.current))+" ")]):s("span",{staticClass:"orders-list__status",class:"orders-list__status--"+e.status},[t._v(" "+t._s(t.i19OrderStatus(e.status))+" ")])])]):t._e()})),t.totalOrders>1?s("a-pagination",{staticClass:"mt-3",attrs:{"total-items":t.totalOrders,page:t.currentPage,"page-size":t.pageSize},on:{"update:page":function(e){t.currentPage=e}}}):t._e()],2)}),[],!1,null,null,null)),k=w.exports,x={name:"account",components:{TheAccount:g,AccountForm:p.a,AccountAddresses:v.a,AccountPoints:y,EcOrdersList:k},data:()=>({isMounted:!1,ecomPassport:a.a}),computed:{customer:{get(){return this.$store.getters.customer},set(t){this.setCustomer(t);const{ecomPassport:e}=this;e&&e.checkAuthorization()&&this.isMounted&&(this.triggerLoading(!0),this.saveCustomer({ecomPassport:e}).finally((()=>this.triggerLoading(!1))))}},currentTab:{get(){return this.$route.params.tab},set(t){t!==this.$route.params.tab&&this.$router.push({name:"account",params:{tab:t}})}}},methods:{...Object(o.d)(["triggerLoading","setCustomer","resetAccount"]),...Object(o.b)(["fetchCustomer","saveCustomer"]),login(t){this.ecomPassport=t,this.triggerLoading(!0),this.fetchCustomer({ecomPassport:t}).finally((()=>this.triggerLoading(!1)))},viewOrder(t){let{_id:e,number:s}=t;s&&this.$router.push({name:"order",params:{number:s,id:e}})}},created(){Boolean(window.$firebaseConfig&&window.$firebaseConfig.authDomain)&&!this.ecomPassport.checkAuthorization()&&setTimeout((()=>{this.ecomPassport.checkAuthorization()||(window.location.href="/app/account")}),1e3)},mounted(){this.isMounted=!0}},B=Object(_.a)(x,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"account"}},[s("the-account",{attrs:{"ecom-passport":t.ecomPassport,customer:t.customer,"current-tab":t.currentTab},on:{"update:customer":function(e){t.customer=e},"update:currentTab":function(e){t.currentTab=e},"update:current-tab":function(e){t.currentTab=e},login:t.login,logout:t.resetAccount},scopedSlots:t._u([{key:"account-form",fn:function(){return[s("account-form",{attrs:{customer:t.customer},on:{"update:customer":function(e){t.customer=e}}})]},proxy:!0},{key:"account-addresses",fn:function(){return[s("account-addresses",{attrs:{customer:t.customer},on:{"update:customer":function(e){t.customer=e}}})]},proxy:!0},{key:"account-points",fn:function(){return[s("account-points",{attrs:{customer:t.customer},on:{"update:customer":function(e){t.customer=e}}})]},proxy:!0},{key:"orders-list",fn:function(){return[s("ec-orders-list",{attrs:{"ecom-passport":t.ecomPassport},on:{"click:order":t.viewOrder}})]},proxy:!0},{key:"subscriptions",fn:function(){return[s("ec-orders-list",{attrs:{"ecom-passport":t.ecomPassport,"orders-list-params":"transactions.type=recurrence","is-subscriptions":!0},on:{"click:order":t.viewOrder}})]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=B.exports}}]);