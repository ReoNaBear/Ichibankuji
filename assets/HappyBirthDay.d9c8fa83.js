import{u as ve,a as fe}from"./use-dark.34edc9b6.js";import{k as $,c as f,h as g,l as he,g as be,aa as xe,t as k,Y as De,al as Ee,am as P,an as j,ao as ee,p as I,ap as Y,aq as H,q as Te,r as h,ar as Me,w as Pe,ac as Be,as as Ae,z as je,L as Ie,a6 as w,at as te,au as O,R as Q,a3 as ae,a2 as x,f as z,av as L,U as _,F as re,a4 as He,S as Oe,a5 as Qe,a7 as B,aw as Le,a8 as Fe,D as Xe,Z as Ne}from"./index.dfe84486.js";import{_ as Ve,b as Ye,a as $e,$ as F,Q as Re,C as Ue}from"./plugin-vue_export-helper.a747f2e2.js";import{c as Ke,Q as Ge}from"./selection.9be6b36f.js";import{Q as le,a as Ze}from"./QScrollObserver.9410016e.js";import{b as A}from"./format.b9446fb2.js";import{Q as Je}from"./QDialog.f1870856.js";import"./focus-manager.c9b70bc2.js";var oe=$({name:"QCard",props:{...ve,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(l,{slots:r}){const{proxy:{$q:s}}=be(),u=fe(l,s),e=f(()=>"q-card"+(u.value===!0?" q-card--dark q-dark":"")+(l.bordered===!0?" q-card--bordered":"")+(l.square===!0?" q-card--square no-border-radius":"")+(l.flat===!0?" q-card--flat no-shadow":""));return()=>g(l.tag,{class:e.value},he(r.default))}}),X=$({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(l,{slots:r}){const s=f(()=>`q-card__section q-card__section--${l.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>g(l.tag,{class:s.value},he(r.default))}});const R={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},We=Object.keys(R);R.all=!0;function ne(l){const r={};for(const s of We)l[s]===!0&&(r[s]=!0);return Object.keys(r).length===0?R:(r.horizontal===!0?r.left=r.right=!0:r.left===!0&&r.right===!0&&(r.horizontal=!0),r.vertical===!0?r.up=r.down=!0:r.up===!0&&r.down===!0&&(r.vertical=!0),r.horizontal===!0&&r.vertical===!0&&(r.all=!0),r)}const et=["INPUT","TEXTAREA"];function ie(l,r){return r.event===void 0&&l.target!==void 0&&l.target.draggable!==!0&&typeof r.handler=="function"&&et.includes(l.target.nodeName.toUpperCase())===!1&&(l.qClonedBy===void 0||l.qClonedBy.indexOf(r.uid)===-1)}function N(l,r,s){const u=Y(l);let e,a=u.left-r.event.x,o=u.top-r.event.y,t=Math.abs(a),d=Math.abs(o);const c=r.direction;c.horizontal===!0&&c.vertical!==!0?e=a<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?e=o<0?"up":"down":c.up===!0&&o<0?(e="up",t>d&&(c.left===!0&&a<0?e="left":c.right===!0&&a>0&&(e="right"))):c.down===!0&&o>0?(e="down",t>d&&(c.left===!0&&a<0?e="left":c.right===!0&&a>0&&(e="right"))):c.left===!0&&a<0?(e="left",t<d&&(c.up===!0&&o<0?e="up":c.down===!0&&o>0&&(e="down"))):c.right===!0&&a>0&&(e="right",t<d&&(c.up===!0&&o<0?e="up":c.down===!0&&o>0&&(e="down")));let p=!1;if(e===void 0&&s===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};e=r.event.lastDir,p=!0,e==="left"||e==="right"?(u.left-=a,t=0,a=0):(u.top-=o,d=0,o=0)}return{synthetic:p,payload:{evt:l,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:u,direction:e,isFirst:r.event.isFirst,isFinal:s===!0,duration:Date.now()-r.event.time,distance:{x:t,y:d},offset:{x:a,y:o},delta:{x:u.left-r.event.lastX,y:u.top-r.event.lastY}}}}let tt=0;var ue=xe({name:"touch-pan",beforeMount(l,{value:r,modifiers:s}){if(s.mouse!==!0&&k.has.touch!==!0)return;function u(a,o){s.mouse===!0&&o===!0?Te(a):(s.stop===!0&&I(a),s.prevent===!0&&ee(a))}const e={uid:"qvtp_"+tt++,handler:r,modifiers:s,direction:ne(s),noop:De,mouseStart(a){ie(a,e)&&Ee(a)&&(P(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(ie(a,e)){const o=a.target;P(e,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,o){if(k.is.firefox===!0&&j(l,!0),e.lastEvt=a,o===!0||s.stop===!0){if(e.direction.all!==!0&&(o!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const c=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&ee(c),a.cancelBubble===!0&&I(c),Object.assign(c,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:c}}I(a)}const{left:t,top:d}=Y(a);e.event={x:t,y:d,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:t,lastY:d}},move(a){if(e.event===void 0)return;const o=Y(a),t=o.left-e.event.x,d=o.top-e.event.y;if(t===0&&d===0)return;e.lastEvt=a;const c=e.event.mouse===!0,p=()=>{u(a,c);let y;s.preserveCursor!==!0&&s.preservecursor!==!0&&(y=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ke(),e.styleCleanup=S=>{if(e.styleCleanup=void 0,y!==void 0&&(document.documentElement.style.cursor=y),document.body.classList.remove("non-selectable"),c===!0){const D=()=>{document.body.classList.remove("no-pointer-events--children")};S!==void 0?setTimeout(()=>{D(),S()},50):D()}else S!==void 0&&S()}};if(e.event.detected===!0){e.event.isFirst!==!0&&u(a,e.event.mouse);const{payload:y,synthetic:S}=N(a,e,!1);y!==void 0&&(e.handler(y)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&p(),e.event.lastX=y.position.left,e.event.lastY=y.position.top,e.event.lastDir=S===!0?void 0:y.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||c===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){p(),e.event.detected=!0,e.move(a);return}const m=Math.abs(t),b=Math.abs(d);m!==b&&(e.direction.horizontal===!0&&m>b||e.direction.vertical===!0&&m<b||e.direction.up===!0&&m<b&&d<0||e.direction.down===!0&&m<b&&d>0||e.direction.left===!0&&m>b&&t<0||e.direction.right===!0&&m>b&&t>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,o){if(e.event!==void 0){if(H(e,"temp"),k.is.firefox===!0&&j(l,!1),o===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(N(a===void 0?e.lastEvt:a,e).payload);const{payload:t}=N(a===void 0?e.lastEvt:a,e,!0),d=()=>{e.handler(t)};e.styleCleanup!==void 0?e.styleCleanup(d):d()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(l.__qtouchpan=e,s.mouse===!0){const a=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";P(e,"main",[[l,"mousedown","mouseStart",`passive${a}`]])}k.has.touch===!0&&P(e,"main",[[l,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[l,"touchmove","noop","notPassiveCapture"]])},updated(l,r){const s=l.__qtouchpan;s!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&s.end(),s.handler=r.value),s.direction=ne(r.modifiers))},beforeUnmount(l){const r=l.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),H(r,"main"),H(r,"temp"),k.is.firefox===!0&&j(l,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete l.__qtouchpan)}});const se=["vertical","horizontal"],V={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},ce={prevent:!0,mouse:!0,mouseAllDir:!0},de=l=>l>=250?50:Math.ceil(l/5);var at=$({name:"QScrollArea",props:{...ve,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(l,{slots:r,emit:s}){const u=h(!1),e=h(!1),a=h(!1),o={vertical:h(0),horizontal:h(0)},t={vertical:{ref:h(null),position:h(0),size:h(0)},horizontal:{ref:h(null),position:h(0),size:h(0)}},{proxy:d}=be(),c=fe(l,d.$q);let p=null,m;const b=h(null),y=f(()=>"q-scrollarea"+(c.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=f(()=>{const n=t.vertical.size.value-o.vertical.value;if(n<=0)return 0;const i=A(t.vertical.position.value/n,0,1);return Math.round(i*1e4)/1e4}),t.vertical.thumbHidden=f(()=>(l.visible===null?a.value:l.visible)!==!0&&u.value===!1&&e.value===!1||t.vertical.size.value<=o.vertical.value+1),t.vertical.thumbStart=f(()=>t.vertical.percentage.value*(o.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=f(()=>Math.round(A(o.vertical.value*o.vertical.value/t.vertical.size.value,de(o.vertical.value),o.vertical.value))),t.vertical.style=f(()=>({...l.thumbStyle,...l.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=f(()=>{const n=t.horizontal.size.value-o.horizontal.value;if(n<=0)return 0;const i=A(Math.abs(t.horizontal.position.value)/n,0,1);return Math.round(i*1e4)/1e4}),t.horizontal.thumbHidden=f(()=>(l.visible===null?a.value:l.visible)!==!0&&u.value===!1&&e.value===!1||t.horizontal.size.value<=o.horizontal.value+1),t.horizontal.thumbStart=f(()=>t.horizontal.percentage.value*(o.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=f(()=>Math.round(A(o.horizontal.value*o.horizontal.value/t.horizontal.size.value,de(o.horizontal.value),o.horizontal.value))),t.horizontal.style=f(()=>({...l.thumbStyle,...l.horizontalThumbStyle,[d.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const S=f(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?l.contentStyle:l.contentActiveStyle),D=[[ue,n=>{Z(n,"vertical")},void 0,{vertical:!0,...ce}]],me=[[ue,n=>{Z(n,"horizontal")},void 0,{horizontal:!0,...ce}]];function U(){const n={};return se.forEach(i=>{const v=t[i];n[i+"Position"]=v.position.value,n[i+"Percentage"]=v.percentage.value,n[i+"Size"]=v.size.value,n[i+"ContainerSize"]=o[i].value}),n}const K=Me(()=>{const n=U();n.ref=d,s("scroll",n)},0);function G(n,i,v){if(se.includes(n)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(n==="vertical"?te:O)(b.value,i,v)}function pe({height:n,width:i}){let v=!1;o.vertical.value!==n&&(o.vertical.value=n,v=!0),o.horizontal.value!==i&&(o.horizontal.value=i,v=!0),v===!0&&E()}function ge({position:n}){let i=!1;t.vertical.position.value!==n.top&&(t.vertical.position.value=n.top,i=!0),t.horizontal.position.value!==n.left&&(t.horizontal.position.value=n.left,i=!0),i===!0&&E()}function ye({height:n,width:i}){t.horizontal.size.value!==i&&(t.horizontal.size.value=i,E()),t.vertical.size.value!==n&&(t.vertical.size.value=n,E())}function Z(n,i){const v=t[i];if(n.isFirst===!0){if(v.thumbHidden.value===!0)return;m=v.position.value,e.value=!0}else if(e.value!==!0)return;n.isFinal===!0&&(e.value=!1);const q=V[i],M=o[i].value,qe=(v.size.value-M)/(M-v.thumbSize.value),we=n.distance[q.dist],ke=m+(n.direction===q.dir?1:-1)*we*qe;W(ke,i)}function J(n,i){const v=t[i];if(v.thumbHidden.value!==!0){const q=n[V[i].offset];if(q<v.thumbStart.value||q>v.thumbStart.value+v.thumbSize.value){const M=q-v.thumbSize.value/2;W(M/o[i].value*v.size.value,i)}v.ref.value!==null&&v.ref.value.dispatchEvent(new MouseEvent(n.type,n))}}function ze(n){J(n,"vertical")}function Se(n){J(n,"horizontal")}function E(){u.value=!0,p!==null&&clearTimeout(p),p=setTimeout(()=>{p=null,u.value=!1},l.delay),l.onScroll!==void 0&&K()}function W(n,i){b.value[V[i].scroll]=n}let C=null;function _e(){C!==null&&clearTimeout(C),C=setTimeout(()=>{C=null,a.value=!0},d.$q.platform.is.ios?50:0)}function Ce(){C!==null&&(clearTimeout(C),C=null),a.value=!1}let T=null;return Pe(()=>d.$q.lang.rtl,n=>{b.value!==null&&O(b.value,Math.abs(t.horizontal.position.value)*(n===!0?-1:1))}),Be(()=>{T={top:t.vertical.position.value,left:t.horizontal.position.value}}),Ae(()=>{if(T===null)return;const n=b.value;n!==null&&(O(n,T.left),te(n,T.top))}),je(K.cancel),Object.assign(d,{getScrollTarget:()=>b.value,getScroll:U,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:G,setScrollPercentage(n,i,v){G(n,i*(t[n].size.value-o[n].value)*(n==="horizontal"&&d.$q.lang.rtl===!0?-1:1),v)}}),()=>g("div",{class:y.value,onMouseenter:_e,onMouseleave:Ce},[g("div",{ref:b,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:l.tabindex!==void 0?l.tabindex:void 0},[g("div",{class:"q-scrollarea__content absolute",style:S.value},Ie(r.default,[g(le,{debounce:0,onResize:ye})])),g(Ze,{axis:"both",onScroll:ge})]),g(le,{debounce:0,onResize:pe}),g("div",{class:t.vertical.barClass.value,style:[l.barStyle,l.verticalBarStyle],"aria-hidden":"true",onMousedown:ze}),g("div",{class:t.horizontal.barClass.value,style:[l.barStyle,l.horizontalBarStyle],"aria-hidden":"true",onMousedown:Se}),w(g("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),D),w(g("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),me)])}}),rt="/Ichibankuji/assets/bear.57debcbb.png",lt="/Ichibankuji/assets/front2.036552cb.png",ot="/Ichibankuji/assets/ticket.e349eb7d.png",nt="/Ichibankuji/assets/frame.76a62cd9.jpg";const it={components:{},setup(){const l=h(!1),r=h(!1),s=h(1),u=h("\u795D\u798F\u7D0D\u7D0D \u751F\u65E5\u5FEB\u6A02 \u8EAB\u9AD4\u5065\u5EB7!");let e="<div>\u55E8~~~\u7D0D\u7D0D!!! \u6211\u662F\u718A\u718A\u62C9!!";e+="<br>\u53C8\u5230\u4E86\u4E00\u5E74\u4E00\u5EA6\u768410\u67081\u865F\u62C9\uFF0C\u4ECA\u5E74\u7684\u4E00\u5207\u5B8C\u5168 \u5B8C\u5168\u4E0D\u5728\u6211\u7684\u610F\u6599\u4E4B\u5167",e+="<br>\u5176\u5BE6\u4E00\u756A\u8CDE\u7684\u9019\u500B\u529F\u80FD\u5927\u69827\u6708\u5E95\u5C31\u7814\u7A76\u7684\u5DEE\u4E0D\u591A\u4E86",e+="<br>\u4F46\u4E4B\u5F8C\u5C31 \u9032\u5165\u5230\u4E86\u52A0\u73ED\u5730\u7344XDDDDDDD",e+="<br>\u4E3B\u7BA1\u554A!!!\u6211\u9084\u60F3\u8981\u5728\u751F\u65E5\u9019\u5929\u5E25\u4E00\u6CE2\u6B38!!!!!(\u260D\uFE4F\u2070)",e+="<br>\u4F46\u81F3\u5C11\u6700\u5F8C\u8D95\u4E86\u4E00\u9EDE\u6771\u897F\uFF0C\u5E0C\u671B\u59B3\u6703\u559C\u6B61!",e+="<br>\u4E4B\u5F8C\u6211\u5011\u518D\u4F86\u8A0E\u8AD6\u8A73\u7D30\u7684\u62BD\u734E\u65B9\u5F0F<3",e+="<br>\u6BC5\u7136\u6C7A\u7136\u62CB\u68C4\u4E3B\u7BA1 (\u256F\u2035\u25A1\u2032)\u256F\uFE35\u2534\u2500\u2534 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<- \u53C8\u5728\u4F5C\u5922",e+="<br><br>\u9996\u5148\u6211\u60F3 \u9084\u662F\u5F97\u611F\u8B1D\u59B3 \u7D0D\u7D0D",e+="<br>\u5728\u9019\u4E9B\u7761\u9192\u5F8C\u4E0A\u73ED\uFF0C\u4E0B\u73ED\u5F8C\u56DE\u5230\u5BB6\u5C31\u7761\u8457\u7684\u65E5\u5B50",e+="<br>\u80FD\u6709\u8457\u59B3\uFF0C\u548C\u59B3\u97F3\u6A02\u4E00\u8D77\u966A\u8457\u6211",e+="<br>\u771F\u7684\u7D66\u4E88\u6211\u5F88\u5927\u7684\u529B\u91CF",e+="<br>\u5373\u4FBF\u59B3\u8AAA\uFF0C\u9019\u4E9B\u6771\u897F\u90FD\u662F\u59B3\u539F\u672C\u8981\u505A\u7684",e+="<br>\u4F46\u6211\u9084\u662F \u5F88\u559C\u6B61 \u5F88\u611F\u8B1D\u59B3",e+="<br>\u73FE\u5728\u60F3\u60F3 \u4ECA\u5E74\u6C92\u6709\u5BC4\u6771\u897F\u7D66\u59B3\uFF0C\u611F\u89BA\u597D\u50CF...\u6709\u54EA\u5152\u4E0D\u5C0D\u52C1",e+="<br>\u4ECA\u5E74\u53EF\u80FD\u9084\u6C92\u8FA6\u6CD5\u5F9E\u9AD8\u7D1A\u7D0D\u5BF6\u9032\u5316\u5230\u8D85\u7D1A\u7D0D\u5BF6!! \u660E\u5E74\u518D\u7E7C\u7E8C\u52AA\u529B",e+="<br>\u9084\u662F\u6211\u5C31 \u73FE\u5728 \u7ACB\u523B \u99AC\u4E0A \u628A\u81EA\u5DF1\u5916\u9001\u904E\u53BB  \u02C3\u0323\u0323\u0325\u1DC4\u2313\u02C2\u0323\u0323\u0325\u1DC5   ",e+="<br><br>\u597D\u4E86\u4E0D\u8AAA\u7B11\u4E86XD",e+="<br>\u5728\u9019\u500B\u91CD\u8981\u7684\u65E5\u5B50",e+="<br>\u9664\u4E86\u751F\u65E5\u5FEB\u6A02 \u5468\u5E74\u5FEB\u6A02\u5916",e+="<br>\u4E5F\u8981\u795D\u798F\u59B3\u8EAB\u9AD4\u80FD\u5920\u4E00\u76F4\u5065\u5065\u5EB7\u5EB7",e+="<br>\u624B\u8155\u5982\u92FC\u9435\u822C\u5F37\u52C1 \u773C\u795E\u5982\u6668\u9732\u822C\u6E05\u6F88",e+="<br>\u80FD\u5920\u6BCF\u5929\u6709\u7CBE\u795E\u7684\u9192\u4F86",e+="<br>\u4EAB\u53D7\u8457\u4E16\u754C\u7684\u9EDE\u9EDE\u6EF4\u6EF4",e+="<br>\u6EFF\u8DB3\u4E14\u5FEB\u6A02\u7684 \u5C07\u9019\u4E9B\u5168\u90E8\u7684\u5E36\u5165\u5922\u4E2D",e+="<br>\u6700\u5F8C\u5225\u5FD8\u8A18\u7B11\u5BB9",e+="<br>\u5225\u5FD8\u8A18\u8981\u8DDF\u81EA\u5DF1\u597D\u597D\u52A0\u6CB9 \u597D\u597D\u8AAA\u8072\u8F9B\u82E6\u4E86",e+="<br>\u5982\u679C\u6709\u5929 \u59B3\u4E0D\u5C0F\u5FC3\u5FD8\u8A18\u4E86\u600E\u9EBC\u7B11 \u600E\u9EBC\u958B\u5FC3",e+="<br>\u6211\u6703\u4F86\u9017\u59B3\u7B11 \u9017\u59B3\u958B\u5FC3",e+="<br>\u5C31\u8DDF\u73FE\u5728\u7684\u59B3\u4E00\u6A23",e+="<br>\u8B93\u6211\u958B\u5FC3 \u8B93\u6211\u7B11",e+="<br><br>\u7D0D\u7D0D \u751F\u65E5&\u5468\u5E74\u5FEB\u6A02!",e+="<br>2024/10/01 \u718A\u718A",e+=" </div>";const a=h(!1),o=h([{url:lt},{url:Ye},{url:$e}]),t=()=>{Ne(()=>{F("#flipbook").turn({direction:"rtl",height:252,width:864,elevation:50,duration:1e3,gradients:!0,autoCenter:!0,acceleration:!0,page:1,pages:o.value.length,display:"double",when:{turning:function(p,m,b){console.log(p,m,b)},turned:function(p,m){!!m&&m==2&&(l.value=!0,F("#flipbook").turn("disable",!0))}}})})};function d(p){a.value=!1,l.value=!1,r.value=!0,t(),F("#flipbook").turn("disable",!1)}function c(){a.value=!0}return{imgList:o,currentPage:s,openDialog:d,dialog:r,ticketImage:ot,bearImage:rt,awordName:u,awordContent:e,content:l,showContent:a,showContents:c,frameImage:nt}}},ut={class:"full-width full-height column items-center justify-center"},st={id:"flipbook"},ct={class:"text-h4 text-brown-8 text-center q-pt-xl"},dt=["innerHTML"];function vt(l,r,s,u,e,a){return Q(),ae(re,null,[x("div",{class:"z-index row items-center justify-center",style:L([{backgroundImage:`url(${u.bearImage})`},{"min-width":"90vw","min-height":"90vh","background-position":"center","background-repeat":"no-repeat"}])},[z(oe,{class:"ticket q-ma-sm q-mt-xl",style:L({backgroundImage:`url(${u.ticketImage})`}),onClick:r[0]||(r[0]=o=>u.openDialog())},null,8,["style"])],4),z(Je,{modelValue:u.dialog,"onUpdate:modelValue":r[2]||(r[2]=o=>u.dialog=o),"full-width":"","full-height":"",persistent:""},{default:_(()=>[x("div",ut,[x("div",st,[(Q(!0),ae(re,null,He(u.imgList,(o,t)=>(Q(),Oe(Re,{key:t,fit:"fill",src:o.url},null,8,["src"]))),128))]),z(Qe,{name:"extend",onAfterEnter:r[1]||(r[1]=o=>u.showContents())},{default:_(()=>[w(z(oe,{dark:"",bordered:"",class:"awordContent my-card q-mt-md",style:L({backgroundImage:`url(${u.frameImage})`})},{default:_(()=>[z(Le,{name:"show"},{default:_(()=>[w(z(X,{key:"section-a",style:{width:"862px",height:"120px"}},{default:_(()=>[x("div",ct,Fe(u.awordName),1)]),_:1},512),[[B,u.showContent]]),z(Ge,{key:"section-b",color:"black",inset:"",class:"q-mx-xl"}),w(z(X,{key:"section-c",class:"text-black q-px-xl text-h6",style:{width:"862px",height:"350px","max-width":"862px","max-height":"350px"}},{default:_(()=>[z(at,{"thumb-style":l.thumbStyle,"bar-style":l.barStyle,style:{height:"330px","max-height":"330px"}},{default:_(()=>[x("div",{innerHTML:u.awordContent,class:"text-black text-h6"},null,8,dt)]),_:1},8,["thumb-style","bar-style"])]),_:1},512),[[B,u.showContent]]),w(z(X,{key:"section-d",class:"row justify-center",style:{width:"862px",height:"68px"}},{default:_(()=>[w(z(Xe,{label:"\u95DC\u9589",color:"grey-3","text-color":"black"},null,512),[[Ue]])]),_:1},512),[[B,u.showContent]])]),_:1})]),_:1},8,["style"]),[[B,u.content]])]),_:1})])]),_:1},8,["modelValue"])],64)}var St=Ve(it,[["render",vt],["__scopeId","data-v-6d9a24c0"]]);export{St as default};
