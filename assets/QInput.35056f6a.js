import{K as Ce,r as O,o as oe,w as P,c as b,ax as Me,g as G,i as Se,z as ae,aG as Re,an as qe,A as ke,q as Ae,W as Y,a8 as Ve,ao as Fe,h as k,ak as J,C as de,Q as _e,l as X,a1 as Ee,t as Be,aA as $e,k as Oe,p as fe}from"./index.9bf303f6.js";import{u as Te,a as Ie}from"./use-dark.b2d1c811.js";import{b as xe,c as Pe}from"./focus-manager.c9b70bc2.js";let re,ee=0;const $=new Array(256);for(let e=0;e<256;e++)$[e]=(e+256).toString(16).substring(1);const De=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const u=new Uint8Array(t);return e.getRandomValues(u),u}}return t=>{const u=[];for(let i=t;i>0;i--)u.push(Math.floor(Math.random()*256));return u}})(),ce=4096;function ie(){(re===void 0||ee+16>ce)&&(ee=0,re=De(ce));const e=Array.prototype.slice.call(re,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,$[e[0]]+$[e[1]]+$[e[2]]+$[e[3]]+"-"+$[e[4]]+$[e[5]]+"-"+$[e[6]]+$[e[7]]+"-"+$[e[8]]+$[e[9]]+"-"+$[e[10]]+$[e[11]]+$[e[12]]+$[e[13]]+$[e[14]]+$[e[15]]}function je(e){return e==null?null:e}function ve(e,t){return e==null?t===!0?`f_${ie()}`:null:e}function ze({getValue:e,required:t=!0}={}){if(Ce.value===!0){const u=e!==void 0?O(je(e())):O(null);return t===!0&&u.value===null&&oe(()=>{u.value=`f_${ie()}`}),e!==void 0&&P(e,i=>{u.value=ve(i,t)}),u}return e!==void 0?b(()=>ve(e(),t)):O(`f_${ie()}`)}const ge=/^on[A-Z]/;function Ke(){const{attrs:e,vnode:t}=G(),u={listeners:O({}),attributes:O({})};function i(){const f={},d={};for(const h in e)h!=="class"&&h!=="style"&&ge.test(h)===!1&&(f[h]=e[h]);for(const h in t.props)ge.test(h)===!0&&(d[h]=t.props[h]);u.attributes.value=f,u.listeners.value=d}return Me(i),i(),u}function Le({validate:e,resetValidation:t,requiresQForm:u}){const i=Se(Re,!1);if(i!==!1){const{props:f,proxy:d}=G();Object.assign(d,{validate:e,resetValidation:t}),P(()=>f.disable,h=>{h===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),oe(()=>{f.disable!==!0&&i.bindComponent(d)}),ae(()=>{f.disable!==!0&&i.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const me=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,he=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,pe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,te=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ne=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ue={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>me.test(e),hexaColor:e=>he.test(e),hexOrHexaColor:e=>pe.test(e),rgbColor:e=>te.test(e),rgbaColor:e=>ne.test(e),rgbOrRgbaColor:e=>te.test(e)||ne.test(e),hexOrRgbColor:e=>me.test(e)||te.test(e),hexaOrRgbaColor:e=>he.test(e)||ne.test(e),anyColor:e=>pe.test(e)||te.test(e)||ne.test(e)},Ne=[!0,!1,"ondemand"],Ze={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Ne.includes(e)}};function Ue(e,t){const{props:u,proxy:i}=G(),f=O(!1),d=O(null),h=O(!1);Le({validate:j,resetValidation:D});let x=0,_;const R=b(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),w=b(()=>u.disable!==!0&&R.value===!0&&t.value===!1),p=b(()=>u.error===!0||f.value===!0),H=b(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);P(()=>u.modelValue,()=>{h.value=!0,w.value===!0&&u.lazyRules===!1&&T()});function B(){u.lazyRules!=="ondemand"&&w.value===!0&&h.value===!0&&T()}P(()=>u.reactiveRules,K=>{K===!0?_===void 0&&(_=P(()=>u.rules,B,{immediate:!0,deep:!0})):_!==void 0&&(_(),_=void 0)},{immediate:!0}),P(()=>u.lazyRules,B),P(e,K=>{K===!0?h.value=!0:w.value===!0&&u.lazyRules!=="ondemand"&&T()});function D(){x++,t.value=!1,h.value=!1,f.value=!1,d.value=null,T.cancel()}function j(K=u.modelValue){if(u.disable===!0||R.value===!1)return!0;const A=++x,Q=t.value!==!0?()=>{h.value=!0}:()=>{},L=(S,C)=>{S===!0&&Q(),f.value=S,d.value=C||null,t.value=!1},z=[];for(let S=0;S<u.rules.length;S++){const C=u.rules[S];let E;if(typeof C=="function"?E=C(K,ue):typeof C=="string"&&ue[C]!==void 0&&(E=ue[C](K)),E===!1||typeof E=="string")return L(!0,E),!1;E!==!0&&E!==void 0&&z.push(E)}return z.length===0?(L(!1),!0):(t.value=!0,Promise.all(z).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return A===x&&L(!1),!0;const C=S.find(E=>E===!1||typeof E=="string");return A===x&&L(C!==void 0,C),C===void 0},S=>(A===x&&(console.error(S),L(!0)),!1)))}const T=qe(j,0);return ae(()=>{_!==void 0&&_(),T.cancel()}),Object.assign(i,{resetValidation:D,validate:j}),ke(i,"hasError",()=>p.value),{isDirtyModel:h,hasRules:R,hasError:p,errorMessage:H,validate:j,resetValidation:D}}function se(e){return e!=null&&(""+e).length!==0}const He={...Te,...Ze,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Qe=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ye({requiredForAttr:e=!0,tagProp:t}={}){const{props:u,proxy:i}=G(),f=Ie(u,i.$q),d=ze({required:e,getValue:()=>u.for});return{requiredForAttr:e,tag:t===!0?b(()=>u.tag):{value:"label"},isDark:f,editable:b(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:O(!1),focused:O(!1),hasPopupOpen:!1,splitAttrs:Ke(),targetUid:d,rootRef:O(null),targetRef:O(null),controlRef:O(null)}}function We(e){const{props:t,emit:u,slots:i,attrs:f,proxy:d}=G(),{$q:h}=d;let x=null;e.hasValue===void 0&&(e.hasValue=b(()=>se(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{u("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:o}),Object.assign(e,{clearValue:s,onControlFocusin:a,onControlFocusout:o,focus:C}),e.computedCounter===void 0&&(e.computedCounter=b(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,v=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(v!==void 0?" / "+v:"")}}));const{isDirtyModel:_,hasRules:R,hasError:w,errorMessage:p,resetValidation:H}=Ue(e.focused,e.innerLoading),B=e.floatingLabel!==void 0?b(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):b(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),D=b(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),j=b(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),T=b(()=>`q-field row no-wrap items-start q-field--${j.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(B.value===!0?" q-field--float":"")+(A.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(w.value===!0?" q-field--error":"")+(w.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&D.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),K=b(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(w.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),A=b(()=>t.labelSlot===!0||t.label!==void 0),Q=b(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&w.value!==!0?` text-${t.labelColor}`:"")),L=b(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:B.value,modelValue:t.modelValue,emitValue:e.emitValue})),z=b(()=>{const l={};return e.targetUid.value&&(l.for=e.targetUid.value),t.disable===!0&&(l["aria-disabled"]="true"),l});function S(){const l=document.activeElement;let v=e.targetRef!==void 0&&e.targetRef.value;v&&(l===null||l.id!==e.targetUid.value)&&(v.hasAttribute("tabindex")===!0||(v=v.querySelector("[tabindex]")),v&&v!==l&&v.focus({preventScroll:!0}))}function C(){xe(S)}function E(){Pe(S);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function a(l){x!==null&&(clearTimeout(x),x=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",l))}function o(l,v){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",l)),v!==void 0&&v())})}function s(l){Ae(l),h.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Y(()=>{const v=_.value;H(),_.value=v})}function r(){const l=[];return i.prepend!==void 0&&l.push(k("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},i.prepend())),l.push(k("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),w.value===!0&&t.noErrorIcon===!1&&l.push(M("error",[k(de,{name:h.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(M("inner-loading-append",i.loading!==void 0?i.loading():[k(_e,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(M("inner-clearable-append",[k(de,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||h.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&l.push(k("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},i.append())),e.getInnerAppend!==void 0&&l.push(M("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function g(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(k("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):i.rawControl!==void 0?l.push(i.rawControl()):i.control!==void 0&&l.push(k("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(L.value))),A.value===!0&&l.push(k("div",{class:Q.value},X(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(k("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(X(i.default))}function c(){let l,v;w.value===!0?p.value!==null?(l=[k("div",{role:"alert"},p.value)],v=`q--slot-error-${p.value}`):(l=X(i.error),v="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[k("div",t.hint)],v=`q--slot-hint-${t.hint}`):(l=X(i.hint),v="q--slot-hint"));const N=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&N===!1&&l===void 0)return;const y=k("div",{key:v,class:"q-field__messages col"},l);return k("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:J},[t.hideBottomSpace===!0?y:k(Ee,{name:"q-transition--field-message"},()=>y),N===!0?k("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function M(l,v){return v===null?null:k("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},v)}let m=!1;return Ve(()=>{m=!0}),Fe(()=>{m===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&oe(()=>{d.focus()}),ae(()=>{x!==null&&clearTimeout(x)}),Object.assign(d,{focus:C,blur:E}),function(){const v=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...z.value}:z.value;return k(e.tag.value,{ref:e.rootRef,class:[T.value,f.class],style:f.style,...v},[i.before!==void 0?k("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},i.before()):null,k("div",{class:"q-field__inner relative-position col self-stretch"},[k("div",{ref:e.controlRef,class:K.value,tabindex:-1,...e.controlEvents},r()),D.value===!0?c():null]),i.after!==void 0?k("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},i.after()):null])}}const Ge={name:String};function ft(e={}){return(t,u,i)=>{t[u](k("input",{class:"hidden"+(i||""),...e.value}))}}function Je(e){return b(()=>e.name||e.for)}const Xe=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,et=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,tt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,nt=/[a-z0-9_ -]$/i;function lt(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Be.is.firefox===!0?nt.test(u.data)===!1:Xe.test(u.data)===!0||et.test(u.data)===!0||tt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}const be={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},we=Object.keys(le);we.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const ot=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+we.join("")+"])|(.)","g"),ye=/[.*+?^${}()|[\]\\]/g,V=String.fromCharCode(1),at={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function rt(e,t,u,i){let f,d,h,x,_,R;const w=O(null),p=O(B());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}P(()=>e.type+e.autogrow,j),P(()=>e.mask,a=>{if(a!==void 0)T(p.value,!0);else{const o=C(p.value);j(),e.modelValue!==o&&t("update:modelValue",o)}}),P(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&T(p.value,!0)}),P(()=>e.unmaskedValue,()=>{w.value===!0&&T(p.value)});function B(){if(j(),w.value===!0){const a=z(C(e.modelValue));return e.fillMask!==!1?E(a):a}return e.modelValue}function D(a){if(a<f.length)return f.slice(-a);let o="",s=f;const r=s.indexOf(V);if(r!==-1){for(let g=a-s.length;g>0;g--)o+=V;s=s.slice(0,r)+o+s.slice(r)}return s}function j(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&H(),w.value===!1){x=void 0,f="",d="";return}const a=be[e.mask]===void 0?e.mask:be[e.mask],o=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=o.replace(ye,"\\$&"),r=[],g=[],c=[];let M=e.reverseFillMask===!0,m="",l="";a.replace(ot,(F,n,q,U,Z)=>{if(U!==void 0){const I=le[U];c.push(I),l=I.negate,M===!0&&(g.push("(?:"+l+"+)?("+I.pattern+"+)?(?:"+l+"+)?("+I.pattern+"+)?"),M=!1),g.push("(?:"+l+"+)?("+I.pattern+")?")}else if(q!==void 0)m="\\"+(q==="\\"?"":q),c.push(q),r.push("([^"+m+"]+)?"+m+"?");else{const I=n!==void 0?n:Z;m=I==="\\"?"\\\\\\\\":I.replace(ye,"\\\\$&"),c.push(I),r.push("([^"+m+"]+)?"+m+"?")}});const v=new RegExp("^"+r.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),N=g.length-1,y=g.map((F,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+F):n===N?new RegExp("^"+F+"("+(l===""?".":l)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+F));h=c,x=F=>{const n=v.exec(e.reverseFillMask===!0?F:F.slice(0,c.length+1));n!==null&&(F=n.slice(1).join(""));const q=[],U=y.length;for(let Z=0,I=F;Z<U;Z++){const W=y[Z].exec(I);if(W===null)break;I=I.slice(W.shift().length),q.push(...W)}return q.length!==0?q.join(""):F},f=c.map(F=>typeof F=="string"?F:V).join(""),d=f.split(V).join(o)}function T(a,o,s){const r=i.value,g=r.selectionEnd,c=r.value.length-g,M=C(a);o===!0&&j();const m=z(M),l=e.fillMask!==!1?E(m):m,v=p.value!==l;r.value!==l&&(r.value=l),v===!0&&(p.value=l),document.activeElement===r&&Y(()=>{if(l===d){const y=e.reverseFillMask===!0?d.length:0;r.setSelectionRange(y,y,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const y=r.selectionEnd;let F=g-1;for(let n=_;n<=F&&n<y;n++)f[n]!==V&&F++;A.right(r,F);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const y=e.reverseFillMask===!0?g===0?l.length>m.length?1:0:Math.max(0,l.length-(l===d?0:Math.min(m.length,c)+1))+1:g;r.setSelectionRange(y,y,"forward");return}if(e.reverseFillMask===!0)if(v===!0){const y=Math.max(0,l.length-(l===d?0:Math.min(m.length,c+1)));y===1&&g===1?r.setSelectionRange(y,y,"forward"):A.rightReverse(r,y)}else{const y=l.length-c;r.setSelectionRange(y,y,"backward")}else if(v===!0){const y=Math.max(0,f.indexOf(V),Math.min(m.length,g)-1);A.right(r,y)}else{const y=g-1;A.right(r,y)}});const N=e.unmaskedValue===!0?C(l):l;String(e.modelValue)!==N&&(e.modelValue!==null||N!=="")&&u(N,!0)}function K(a,o,s){const r=z(C(a.value));o=Math.max(0,f.indexOf(V),Math.min(r.length,o)),_=o,a.setSelectionRange(o,s,"forward")}const A={left(a,o){const s=f.slice(o-1).indexOf(V)===-1;let r=Math.max(0,o-1);for(;r>=0;r--)if(f[r]===V){o=r,s===!0&&o++;break}if(r<0&&f[o]!==void 0&&f[o]!==V)return A.right(a,0);o>=0&&a.setSelectionRange(o,o,"backward")},right(a,o){const s=a.value.length;let r=Math.min(s,o+1);for(;r<=s;r++)if(f[r]===V){o=r;break}else f[r-1]===V&&(o=r);if(r>s&&f[o-1]!==void 0&&f[o-1]!==V)return A.left(a,s);a.setSelectionRange(o,o,"forward")},leftReverse(a,o){const s=D(a.value.length);let r=Math.max(0,o-1);for(;r>=0;r--)if(s[r-1]===V){o=r;break}else if(s[r]===V&&(o=r,r===0))break;if(r<0&&s[o]!==void 0&&s[o]!==V)return A.rightReverse(a,0);o>=0&&a.setSelectionRange(o,o,"backward")},rightReverse(a,o){const s=a.value.length,r=D(s),g=r.slice(0,o+1).indexOf(V)===-1;let c=Math.min(s,o+1);for(;c<=s;c++)if(r[c-1]===V){o=c,o>0&&g===!0&&o--;break}if(c>s&&r[o-1]!==void 0&&r[o-1]!==V)return A.leftReverse(a,s);a.setSelectionRange(o,o,"forward")}};function Q(a){t("click",a),R=void 0}function L(a){if(t("keydown",a),$e(a)===!0||a.altKey===!0)return;const o=i.value,s=o.selectionStart,r=o.selectionEnd;if(a.shiftKey||(R=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&R===void 0&&(R=o.selectionDirection==="forward"?s:r);const g=A[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),g(o,R===s?r:s),a.shiftKey){const c=o.selectionStart;o.setSelectionRange(Math.min(R,c),Math.max(R,c),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&s===r?(A.left(o,s),o.setSelectionRange(o.selectionStart,r,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&s===r&&(A.rightReverse(o,r),o.setSelectionRange(s,o.selectionEnd,"forward"))}function z(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return S(a);const o=h;let s=0,r="";for(let g=0;g<o.length;g++){const c=a[s],M=o[g];if(typeof M=="string")r+=M,c===M&&s++;else if(c!==void 0&&M.regex.test(c))r+=M.transform!==void 0?M.transform(c):c,s++;else return r}return r}function S(a){const o=h,s=f.indexOf(V);let r=a.length-1,g="";for(let c=o.length-1;c>=0&&r!==-1;c--){const M=o[c];let m=a[r];if(typeof M=="string")g=M+g,m===M&&r--;else if(m!==void 0&&M.regex.test(m))do g=(M.transform!==void 0?M.transform(m):m)+g,r--,m=a[r];while(s===c&&m!==void 0&&M.regex.test(m));else return g}return g}function C(a){return typeof a!="string"||x===void 0?typeof a=="number"?x(""+a):a:x(a)}function E(a){return d.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?d.slice(0,-a.length)+a:a+d.slice(a.length)}return{innerValue:p,hasMask:w,moveCursorForPaste:K,updateMaskValue:T,onMaskedKeydown:L,onMaskedClick:Q}}function ut(e,t){function u(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?b(()=>{if(e.type==="file")return u()}):b(u)}var ct=Oe({name:"QInput",inheritAttrs:!1,props:{...He,...at,...Ge,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Qe,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=G(),{$q:f}=i,d={};let h=NaN,x,_,R=null,w;const p=O(null),H=Je(e),{innerValue:B,hasMask:D,moveCursorForPaste:j,updateMaskValue:T,onMaskedKeydown:K,onMaskedClick:A}=rt(e,t,m,p),Q=ut(e,!0),L=b(()=>se(B.value)),z=lt(c),S=Ye(),C=b(()=>e.type==="textarea"||e.autogrow===!0),E=b(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),a=b(()=>{const n={...S.splitAttrs.listeners.value,onInput:c,onPaste:g,onChange:v,onBlur:N,onFocus:fe};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=z,D.value===!0&&(n.onKeydown=K,n.onClick=A),e.autogrow===!0&&(n.onAnimationend=M),n}),o=b(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});P(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),P(()=>e.modelValue,n=>{if(D.value===!0){if(_===!0&&(_=!1,String(n)===h))return;T(n)}else B.value!==n&&(B.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete d.value));e.autogrow===!0&&Y(l)}),P(()=>e.autogrow,n=>{n===!0?Y(l):p.value!==null&&u.rows>0&&(p.value.style.height="auto")}),P(()=>e.dense,()=>{e.autogrow===!0&&Y(l)});function s(){xe(()=>{const n=document.activeElement;p.value!==null&&p.value!==n&&(n===null||n.id!==S.targetUid.value)&&p.value.focus({preventScroll:!0})})}function r(){p.value!==null&&p.value.select()}function g(n){if(D.value===!0&&e.reverseFillMask!==!0){const q=n.target;j(q,q.selectionStart,q.selectionEnd)}t("paste",n)}function c(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const q=n.target.value;if(n.target.qComposing===!0){d.value=q;return}if(D.value===!0)T(q,!1,n.inputType);else if(m(q),E.value===!0&&n.target===document.activeElement){const{selectionStart:U,selectionEnd:Z}=n.target;U!==void 0&&Z!==void 0&&Y(()=>{n.target===document.activeElement&&q.indexOf(n.target.value)===0&&n.target.setSelectionRange(U,Z)})}e.autogrow===!0&&l()}function M(n){t("animationend",n),l()}function m(n,q){w=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&h!==n&&(h=n,q===!0&&(_=!0),t("update:modelValue",n),Y(()=>{h===n&&(h=NaN)})),w=void 0},e.type==="number"&&(x=!0,d.value=n),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=n,R=setTimeout(w,e.debounce)):w()}function l(){requestAnimationFrame(()=>{const n=p.value;if(n!==null){const q=n.parentNode.style,{scrollTop:U}=n,{overflowY:Z,maxHeight:I}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),W=Z!==void 0&&Z!=="scroll";W===!0&&(n.style.overflowY="hidden"),q.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",W===!0&&(n.style.overflowY=parseInt(I,10)<n.scrollHeight?"auto":"hidden"),q.marginBottom="",n.scrollTop=U}})}function v(n){z(n),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),t("change",n.target.value)}function N(n){n!==void 0&&fe(n),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),x=!1,_=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=B.value!==void 0?B.value:"")})}function y(){return d.hasOwnProperty("value")===!0?d.value:B.value!==void 0?B.value:""}ae(()=>{N()}),oe(()=>{e.autogrow===!0&&l()}),Object.assign(S,{innerValue:B,fieldClass:b(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:p,emitValue:m,hasValue:L,floatingLabel:b(()=>L.value===!0&&(e.type!=="number"||isNaN(B.value)===!1)||se(e.displayValue)),getControl:()=>k(C.value===!0?"textarea":"input",{ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...a.value,...e.type!=="file"?{value:y()}:Q.value}),getShadowControl:()=>k("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[k("span",{class:"invisible"},y()),k("span",e.shadowText)])});const F=We(S);return Object.assign(i,{focus:s,select:r,getNativeElement:()=>p.value}),ke(i,"nativeEl",()=>p.value),F}});export{ct as Q,Qe as a,We as b,Ye as c,Ge as d,Je as e,se as f,lt as g,ft as h,He as u};
