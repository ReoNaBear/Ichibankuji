import{a8 as ve,z as W,v as he,g as K,a9 as ne,W as J,w as Q,aa as He,o as Fe,c as p,ab as A,k as ge,r as F,a as $e,A as Be,h as T,ac as Ve,ad as Me,ae as De,t as w,X as b,q as ze,af as Ae,a7 as Oe,a1 as le,l as Qe,ag as We}from"./index.9bf303f6.js";import{r as ie,a as Ke,b as Re}from"./focus-manager.c9b70bc2.js";import{c as je,b as Ie,h as Ue}from"./scroll.d6c15349.js";function Xe(){let e=null;const t=K();function o(){e!==null&&(clearTimeout(e),e=null)}return ve(o),W(o),{removeTimeout:o,registerTimeout(n,i){o(),he(t)===!1&&(e=setTimeout(()=>{e=null,n()},i))}}}function Ge(e,t,o){let n;function i(){n!==void 0&&(ne.remove(n),n=void 0)}return W(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){n={condition:()=>o.value===!0,handler:t},ne.add(n)}}}function Ye(){let e;const t=K();function o(){e=void 0}return ve(o),W(o),{removeTick:o,registerTick(n){e=n,J(()=>{e===n&&(he(t)===!1&&e(),e=void 0)})}}}const Ne={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Je=["beforeShow","show","beforeHide","hide"];function Ze({showing:e,canShow:t,hideOnRouteChange:o,handleShow:n,handleHide:i,processOnMount:u}){const a=K(),{props:r,emit:c,proxy:m}=a;let f;function v(s){e.value===!0?E(s):h(s)}function h(s){if(r.disable===!0||s!==void 0&&s.qAnchorHandled===!0||t!==void 0&&t(s)!==!0)return;const g=r["onUpdate:modelValue"]!==void 0;g===!0&&(c("update:modelValue",!0),f=s,J(()=>{f===s&&(f=void 0)})),(r.modelValue===null||g===!1)&&x(s)}function x(s){e.value!==!0&&(e.value=!0,c("beforeShow",s),n!==void 0?n(s):c("show",s))}function E(s){if(r.disable===!0)return;const g=r["onUpdate:modelValue"]!==void 0;g===!0&&(c("update:modelValue",!1),f=s,J(()=>{f===s&&(f=void 0)})),(r.modelValue===null||g===!1)&&$(s)}function $(s){e.value!==!1&&(e.value=!1,c("beforeHide",s),i!==void 0?i(s):c("hide",s))}function C(s){r.disable===!0&&s===!0?r["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):s===!0!==e.value&&(s===!0?x:$)(f)}Q(()=>r.modelValue,C),o!==void 0&&He(a)===!0&&Q(()=>m.$route.fullPath,()=>{o.value===!0&&e.value===!0&&E()}),u===!0&&Fe(()=>{C(r.modelValue)});const B={show:h,hide:E,toggle:v};return Object.assign(m,B),B}const et={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function tt(e,t=()=>{},o=()=>{}){return{transitionProps:p(()=>{const n=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:p(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const O=[];function bt(e){return O.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function ot(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return A(e)}else if(e.__qPortal===!0){const o=A(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=A(e)}while(e!=null)}function yt(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=ot(e,t);continue}e.hide(t)}e=A(e)}}const nt=ge({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function lt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function it(e,t,o,n){const i=F(!1),u=F(!1);let a=null;const r={},c=n==="dialog"&&lt(e);function m(v){if(v===!0){ie(r),u.value=!0;return}u.value=!1,i.value===!1&&(c===!1&&a===null&&(a=Me(!1,n)),i.value=!0,O.push(e.proxy),Ke(r))}function f(v){if(u.value=!1,v!==!0)return;ie(r),i.value=!1;const h=O.indexOf(e.proxy);h!==-1&&O.splice(h,1),a!==null&&(De(a),a=null)}return $e(()=>{f(!0)}),e.proxy.__qPortal=!0,Be(e.proxy,"contentEl",()=>t.value),{showPortal:m,hidePortal:f,portalIsActive:i,portalIsAccessible:u,renderPortal:()=>c===!0?o():i.value===!0?[T(Ve,{to:a},T(nt,o))]:void 0}}let _=0,G,Y,H,N=!1,se,ae,re,y=null;function st(e){at(e)&&ze(e)}function at(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=Ae(e),o=e.shiftKey&&!e.deltaX,n=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=o||n?e.deltaY:e.deltaX;for(let u=0;u<t.length;u++){const a=t[u];if(Ue(a,n))return n?i<0&&a.scrollTop===0?!0:i>0&&a.scrollTop+a.clientHeight===a.scrollHeight:i<0&&a.scrollLeft===0?!0:i>0&&a.scrollLeft+a.clientWidth===a.scrollWidth}return!0}function ue(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function D(e){N!==!0&&(N=!0,requestAnimationFrame(()=>{N=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:n}=document.scrollingElement;(H===void 0||t!==window.innerHeight)&&(H=o-t,document.scrollingElement.scrollTop=n),n>H&&(document.scrollingElement.scrollTop-=Math.ceil((n-H)/8))}))}function ce(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:i}=window.getComputedStyle(t);G=je(window),Y=Ie(window),se=t.style.left,ae=t.style.top,re=window.location.href,t.style.left=`-${G}px`,t.style.top=`-${Y}px`,i!=="hidden"&&(i==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,w.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",D,b.passiveCapture),window.visualViewport.addEventListener("scroll",D,b.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",ue,b.passiveCapture))}w.is.desktop===!0&&w.is.mac===!0&&window[`${e}EventListener`]("wheel",st,b.notPassive),e==="remove"&&(w.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",D,b.passiveCapture),window.visualViewport.removeEventListener("scroll",D,b.passiveCapture)):window.removeEventListener("scroll",ue,b.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=se,t.style.top=ae,window.location.href===re&&window.scrollTo(G,Y),H=void 0)}function rt(e){let t="add";if(e===!0){if(_++,y!==null){clearTimeout(y),y=null;return}if(_>1)return}else{if(_===0||(_--,_>0))return;if(t="remove",w.is.ios===!0&&w.is.nativeMobile===!0){y!==null&&clearTimeout(y),y=setTimeout(()=>{ce(t),y=null},100);return}}ce(t)}function ut(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,rt(t))}}}const k=[];let S;function ct(e){S=e.keyCode===27}function dt(){S===!0&&(S=!1)}function ft(e){S===!0&&(S=!1,Oe(e,27)===!0&&k[k.length-1](e))}function pe(e){window[e]("keydown",ct),window[e]("blur",dt),window[e]("keyup",ft),S=!1}function mt(e){w.is.desktop===!0&&(k.push(e),k.length===1&&pe("addEventListener"))}function de(e){const t=k.indexOf(e);t!==-1&&(k.splice(t,1),k.length===0&&pe("removeEventListener"))}const q=[];function we(e){q[q.length-1](e)}function vt(e){w.is.desktop===!0&&(q.push(e),q.length===1&&document.body.addEventListener("focusin",we))}function fe(e){const t=q.indexOf(e);t!==-1&&(q.splice(t,1),q.length===0&&document.body.removeEventListener("focusin",we))}let z=0;const ht={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},me={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Tt=ge({name:"QDialog",inheritAttrs:!1,props:{...Ne,...et,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Je,"shake","click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){const i=K(),u=F(null),a=F(!1),r=F(!1);let c=null,m=null,f,v;const h=p(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:x}=ut(),{registerTimeout:E}=Xe(),{registerTick:$,removeTick:C}=Ye(),{transitionProps:B,transitionStyle:s}=tt(e,()=>me[e.position][0],()=>me[e.position][1]),g=p(()=>s.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:Z,hidePortal:ee,portalIsAccessible:be,renderPortal:ye}=it(i,u,_e,"dialog"),{hide:V}=Ze({showing:a,hideOnRouteChange:h,handleShow:Se,handleHide:xe,processOnMount:!0}),{addToHistory:Te,removeFromHistory:ke}=Ge(a,V,h),qe=p(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${ht[e.position]}`+(r.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),M=p(()=>a.value===!0&&e.seamless!==!0),Ee=p(()=>e.autoClose===!0?{onClick:Ce}:{}),Pe=p(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${M.value===!0?"modal":"seamless"}`,n.class]);Q(()=>e.maximized,l=>{a.value===!0&&I(l)}),Q(M,l=>{x(l),l===!0?(vt(U),mt(j)):(fe(U),de(j))});function Se(l){Te(),m=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,I(e.maximized),Z(),r.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),$(L)):C(),E(()=>{if(i.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:d,bottom:P}=document.activeElement.getBoundingClientRect(),{innerHeight:oe}=window,X=window.visualViewport!==void 0?window.visualViewport.height:oe;d>0&&P>X/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-X,P>=oe?1/0:Math.ceil(document.scrollingElement.scrollTop+P-X/2))),document.activeElement.scrollIntoView()}v=!0,u.value.click(),v=!1}Z(!0),r.value=!1,o("show",l)},e.transitionDuration)}function xe(l){C(),ke(),te(!0),r.value=!0,ee(),m!==null&&(((l&&l.type.indexOf("key")===0?m.closest('[tabindex]:not([tabindex^="-"])'):void 0)||m).focus(),m=null),E(()=>{ee(!0),r.value=!1,o("hide",l)},e.transitionDuration)}function L(l){Re(()=>{let d=u.value;if(d!==null){if(l!==void 0){const P=d.querySelector(l);if(P!==null){P.focus({preventScroll:!0});return}}d.contains(document.activeElement)!==!0&&(d=d.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||d.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||d.querySelector("[autofocus], [data-autofocus]")||d,d.focus({preventScroll:!0}))}})}function R(l){l&&typeof l.focus=="function"?l.focus({preventScroll:!0}):L(),o("shake");const d=u.value;d!==null&&(d.classList.remove("q-animate--scale"),d.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,u.value!==null&&(d.classList.remove("q-animate--scale"),L())},170))}function j(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&R():(o("escapeKey"),V()))}function te(l){c!==null&&(clearTimeout(c),c=null),(l===!0||a.value===!0)&&(I(!1),e.seamless!==!0&&(x(!1),fe(U),de(j))),l!==!0&&(m=null)}function I(l){l===!0?f!==!0&&(z<1&&document.body.classList.add("q-body--dialog"),z++,f=!0):f===!0&&(z<2&&document.body.classList.remove("q-body--dialog"),z--,f=!1)}function Ce(l){v!==!0&&(V(l),o("click",l))}function Le(l){e.persistent!==!0&&e.noBackdropDismiss!==!0?V(l):e.noShake!==!0&&R()}function U(l){e.allowFocusOutside!==!0&&be.value===!0&&We(u.value,l.target)!==!0&&L('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:L,shake:R,__updateRefocusTarget(l){m=l||null}}),W(te);function _e(){return T("div",{role:"dialog","aria-modal":M.value===!0?"true":"false",...n,class:Pe.value},[T(le,{name:"q-transition--fade",appear:!0},()=>M.value===!0?T("div",{class:"q-dialog__backdrop fixed-full",style:g.value,"aria-hidden":"true",tabindex:-1,onClick:Le}):null),T(le,B.value,()=>a.value===!0?T("div",{ref:u,class:qe.value,style:s.value,tabindex:-1,...Ee.value},Qe(t.default)):null)])}return ye}});export{Tt as Q,Ne as a,et as b,yt as c,Je as d,Ye as e,tt as f,bt as g,Ze as h,it as i,vt as j,de as k,mt as l,ot as m,O as p,fe as r,Xe as u};
