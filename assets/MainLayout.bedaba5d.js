import{k as X,c as f,h as m,l as ue,u as Be,m as Re,n as Ue,g as V,r as L,p as Se,q as Fe,t as Te,v as $e,x as ie,y as Pe,w as Q,z as se,b as Qe,A as De,B as Ee,Q as _e,C as Oe,D as A,E as je,i as ce,G as H,H as Ne,I as le,J as He,K as xe,L as we,M as ee,a as Ae,N as Xe,O as Me,P as Ve,R as E,f as P,S as K}from"./index.bc407c1e.js";import{b as Ie,h as be}from"./format.b9446fb2.js";import{u as We,a as Ge}from"./use-dark.1bb4437a.js";import{Q as ae,a as Ke}from"./QScrollObserver.9e24225b.js";import{g as ne}from"./scroll.1231bd33.js";var Ye=X({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:p}){const i=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>m("div",{class:i.value},ue(p.default))}});const Je={...Be,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},re=50,qe=2*re,ze=qe*Math.PI,Ze=Math.round(ze*1e3)/1e3;var et=X({name:"QCircularProgress",props:{...Je,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:p}){const{proxy:{$q:i}}=V(),o=Re(e),l=f(()=>{const d=(i.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(i.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-d}deg)`:`rotate3d(0, 0, 1, ${d-90}deg)`}}),c=f(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),g=f(()=>qe/(1-e.thickness/2)),B=f(()=>`${g.value/2} ${g.value/2} ${g.value} ${g.value}`),C=f(()=>Ie(e.value,e.min,e.max)),w=f(()=>e.max-e.min),h=f(()=>e.thickness/2*g.value),q=f(()=>{const d=(e.max-C.value)/w.value,t=e.rounded===!0&&C.value<e.max&&d<.25?h.value/2*(1-d/.25):0;return ze*d+t});function y({thickness:d,offset:t,color:v,cls:z,rounded:_}){return m("circle",{class:"q-circular-progress__"+z+(v!==void 0?` text-${v}`:""),style:c.value,fill:"transparent",stroke:"currentColor","stroke-width":d,"stroke-dasharray":Ze,"stroke-dashoffset":t,"stroke-linecap":_,cx:g.value,cy:g.value,r:re})}return()=>{const d=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&d.push(m("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:re-h.value/2,cx:g.value,cy:g.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&d.push(y({cls:"track",thickness:h.value,offset:0,color:e.trackColor})),d.push(y({cls:"circle",thickness:h.value,offset:q.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const t=[m("svg",{class:"q-circular-progress__svg",style:l.value,viewBox:B.value,"aria-hidden":"true"},d)];return e.showValue===!0&&t.push(m("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},p.default!==void 0?p.default():[m("div",C.value)])),m("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:o.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:C.value},Ue(p.internal,t))}}});function Y(e,p,i,o){const l=[];return e.forEach(c=>{o(c)===!0?l.push(c):p.push({failedPropValidation:i,file:c})}),l}function te(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),Fe(e)}const tt={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},at=["rejected"];function lt({editable:e,dnd:p,getFileInput:i,addFilesToQueue:o}){const{props:l,emit:c,proxy:g}=V(),B=L(null),C=f(()=>l.accept!==void 0?l.accept.split(",").map(a=>(a=a.trim(),a==="*"?"*/":(a.endsWith("/*")&&(a=a.slice(0,a.length-1)),a.toUpperCase()))):null),w=f(()=>parseInt(l.maxFiles,10)),h=f(()=>parseInt(l.maxTotalSize,10));function q(a){if(e.value)if(a!==Object(a)&&(a={target:null}),a.target!==null&&a.target.matches('input[type="file"]')===!0)a.clientX===0&&a.clientY===0&&Se(a);else{const b=i();b&&b!==a.target&&b.click(a)}}function y(a){e.value&&a&&o(null,a)}function d(a,b,r,u){let s=Array.from(b||a.target.files);const S=[],U=()=>{S.length!==0&&c("rejected",S)};if(l.accept!==void 0&&C.value.indexOf("*/")===-1&&(s=Y(s,S,"accept",F=>C.value.some(R=>F.type.toUpperCase().startsWith(R)||F.name.toUpperCase().endsWith(R))),s.length===0))return U();if(l.maxFileSize!==void 0){const F=parseInt(l.maxFileSize,10);if(s=Y(s,S,"max-file-size",R=>R.size<=F),s.length===0)return U()}if(l.multiple!==!0&&s.length!==0&&(s=[s[0]]),s.forEach(F=>{F.__key=F.webkitRelativePath+F.lastModified+F.name+F.size}),u===!0){const F=r.map(R=>R.__key);s=Y(s,S,"duplicate",R=>F.includes(R.__key)===!1)}if(s.length===0)return U();if(l.maxTotalSize!==void 0){let F=u===!0?r.reduce((R,O)=>R+O.size,0):0;if(s=Y(s,S,"max-total-size",R=>(F+=R.size,F<=h.value)),s.length===0)return U()}if(typeof l.filter=="function"){const F=l.filter(s);s=Y(s,S,"filter",R=>F.includes(R))}if(l.maxFiles!==void 0){let F=u===!0?r.length:0;if(s=Y(s,S,"max-files",()=>(F++,F<=w.value)),s.length===0)return U()}if(U(),s.length!==0)return s}function t(a){te(a),p.value!==!0&&(p.value=!0)}function v(a){Fe(a),(a.relatedTarget!==null||Te.is.safari!==!0?a.relatedTarget!==B.value:document.elementsFromPoint(a.clientX,a.clientY).includes(B.value)===!1)===!0&&(p.value=!1)}function z(a){te(a);const b=a.dataTransfer.files;b.length!==0&&o(null,b),p.value=!1}function _(a){if(p.value===!0)return m("div",{ref:B,class:`q-${a}__dnd absolute-full`,onDragenter:te,onDragover:te,onDragleave:v,onDrop:z})}return Object.assign(g,{pickFiles:q,addFiles:y}),{pickFiles:q,addFiles:y,onDragover:t,onDragleave:v,processFiles:d,getDndNode:_,maxFilesNumber:w,maxTotalSizeNumber:h}}function ye(e){return(e*100).toFixed(2)+"%"}const ot={...We,...tt,label:String,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,noThumbnails:Boolean,autoUpload:Boolean,hideUploadBtn:Boolean,disable:Boolean,readonly:Boolean},ke=[...at,"start","finish","added","removed"];function nt(e,p){const i=V(),{props:o,slots:l,emit:c,proxy:g}=i,{$q:B}=g,C=Ge(o,B);function w(n,k,T){if(n.__status=k,k==="idle"){n.__uploaded=0,n.__progress=0,n.__sizeLabel=be(n.size),n.__progressLabel="0.00%";return}if(k==="failed"){g.$forceUpdate();return}n.__uploaded=k==="uploaded"?n.size:T,n.__progress=k==="uploaded"?1:Math.min(.9999,n.__uploaded/n.size),n.__progressLabel=ye(n.__progress),g.$forceUpdate()}const h=f(()=>o.disable!==!0&&o.readonly!==!0),q=L(!1),y=L(null),d=L(null),t={files:L([]),queuedFiles:L([]),uploadedFiles:L([]),uploadedSize:L(0),updateFileStatus:w,isAlive:()=>$e(i)===!1},{pickFiles:v,addFiles:z,onDragover:_,onDragleave:a,processFiles:b,getDndNode:r,maxFilesNumber:u,maxTotalSizeNumber:s}=lt({editable:h,dnd:q,getFileInput:ve,addFilesToQueue:me});Object.assign(t,e({props:o,slots:l,emit:c,helpers:t,exposeApi:n=>{Object.assign(t,n)}})),t.isBusy===void 0&&(t.isBusy=L(!1));const S=L(0),U=f(()=>S.value===0?0:t.uploadedSize.value/S.value),F=f(()=>ye(U.value)),R=f(()=>be(S.value)),O=f(()=>h.value===!0&&t.isUploading.value!==!0&&(o.multiple===!0||t.queuedFiles.value.length===0)&&(o.maxFiles===void 0||t.files.value.length<u.value)&&(o.maxTotalSize===void 0||S.value<s.value)),x=f(()=>h.value===!0&&t.isBusy.value!==!0&&t.isUploading.value!==!0&&t.queuedFiles.value.length!==0);ie(Pe,he);const M=f(()=>"q-uploader column no-wrap"+(C.value===!0?" q-uploader--dark q-dark":"")+(o.bordered===!0?" q-uploader--bordered":"")+(o.square===!0?" q-uploader--square no-border-radius":"")+(o.flat===!0?" q-uploader--flat no-shadow":"")+(o.disable===!0?" disabled q-uploader--disable":"")+(q.value===!0?" q-uploader--dnd":"")),I=f(()=>"q-uploader__header"+(o.color!==void 0?` bg-${o.color}`:"")+(o.textColor!==void 0?` text-${o.textColor}`:""));Q(t.isUploading,(n,k)=>{k===!1&&n===!0?c("start"):k===!0&&n===!1&&c("finish")});function W(){o.disable===!1&&(t.abort(),t.uploadedSize.value=0,S.value=0,fe(),t.files.value=[],t.queuedFiles.value=[],t.uploadedFiles.value=[])}function D(){o.disable===!1&&de(["uploaded"],()=>{t.uploadedFiles.value=[]})}function Z(){de(["idle","failed"],({size:n})=>{S.value-=n,t.queuedFiles.value=[]})}function de(n,k){if(o.disable===!0)return;const T={files:[],size:0},j=t.files.value.filter($=>n.indexOf($.__status)===-1?!0:(T.size+=$.size,T.files.push($),$.__img!==void 0&&window.URL.revokeObjectURL($.__img.src),!1));T.files.length!==0&&(t.files.value=j,k(T),c("removed",T.files))}function oe(n){o.disable||(n.__status==="uploaded"?t.uploadedFiles.value=t.uploadedFiles.value.filter(k=>k.__key!==n.__key):n.__status==="uploading"?n.__abort():S.value-=n.size,t.files.value=t.files.value.filter(k=>k.__key!==n.__key?!0:(k.__img!==void 0&&window.URL.revokeObjectURL(k.__img.src),!1)),t.queuedFiles.value=t.queuedFiles.value.filter(k=>k.__key!==n.__key),c("removed",[n]))}function fe(){t.files.value.forEach(n=>{n.__img!==void 0&&window.URL.revokeObjectURL(n.__img.src)})}function ve(){return d.value||y.value.getElementsByClassName("q-uploader__input")[0]}function me(n,k){const T=b(n,k,t.files.value,!0),j=ve();j!=null&&(j.value=""),T!==void 0&&(T.forEach($=>{if(t.updateFileStatus($,"idle"),S.value+=$.size,o.noThumbnails!==!0&&$.type.toUpperCase().startsWith("IMAGE")){const pe=new Image;pe.src=window.URL.createObjectURL($),$.__img=pe}}),t.files.value=t.files.value.concat(T),t.queuedFiles.value=t.queuedFiles.value.concat(T),c("added",T),o.autoUpload===!0&&t.upload())}function ge(){x.value===!0&&t.upload()}function J(n,k,T){if(n===!0){const j={type:"a",key:k,icon:B.iconSet.uploader[k],flat:!0,dense:!0};let $;return k==="add"?(j.onClick=v,$=he):j.onClick=T,m(A,j,$)}}function he(){return m("input",{ref:d,class:"q-uploader__input overflow-hidden absolute-full",tabindex:-1,type:"file",title:"",accept:o.accept,multiple:o.multiple===!0?"multiple":void 0,capture:o.capture,onMousedown:Se,onClick:v,onChange:me})}function Ce(){return l.header!==void 0?l.header(G):[m("div",{class:"q-uploader__header-content column"},[m("div",{class:"flex flex-center no-wrap q-gutter-xs"},[J(t.queuedFiles.value.length!==0,"removeQueue",Z),J(t.uploadedFiles.value.length!==0,"removeUploaded",D),t.isUploading.value===!0?m(_e,{class:"q-uploader__spinner"}):null,m("div",{class:"col column justify-center"},[o.label!==void 0?m("div",{class:"q-uploader__title"},[o.label]):null,m("div",{class:"q-uploader__subtitle"},[R.value+" / "+F.value])]),J(O.value,"add"),J(o.hideUploadBtn===!1&&x.value===!0,"upload",t.upload),J(t.isUploading.value,"clear",t.abort)])])]}function Le(){return l.list!==void 0?l.list(G):t.files.value.map(n=>m("div",{key:n.__key,class:"q-uploader__file relative-position"+(o.noThumbnails!==!0&&n.__img!==void 0?" q-uploader__file--img":"")+(n.__status==="failed"?" q-uploader__file--failed":n.__status==="uploaded"?" q-uploader__file--uploaded":""),style:o.noThumbnails!==!0&&n.__img!==void 0?{backgroundImage:'url("'+n.__img.src+'")'}:null},[m("div",{class:"q-uploader__file-header row flex-center no-wrap"},[n.__status==="failed"?m(Oe,{class:"q-uploader__file-status",name:B.iconSet.type.negative,color:"negative"}):null,m("div",{class:"q-uploader__file-header-content col"},[m("div",{class:"q-uploader__title"},[n.name]),m("div",{class:"q-uploader__subtitle row items-center no-wrap"},[n.__sizeLabel+" / "+n.__progressLabel])]),n.__status==="uploading"?m(et,{value:n.__progress,min:0,max:1,indeterminate:n.__progress===0}):m(A,{round:!0,dense:!0,flat:!0,icon:B.iconSet.uploader[n.__status==="uploaded"?"done":"clear"],onClick:()=>{oe(n)}})])]))}se(()=>{t.isUploading.value===!0&&t.abort(),t.files.value.length!==0&&fe()});const G={};for(const n in t)Qe(t[n])===!0?De(G,n,()=>t[n].value):G[n]=t[n];return Object.assign(G,{upload:ge,reset:W,removeUploadedFiles:D,removeQueuedFiles:Z,removeFile:oe,pickFiles:v,addFiles:z}),Ee(G,{canAddFiles:()=>O.value,canUpload:()=>x.value,uploadSizeLabel:()=>R.value,uploadProgressLabel:()=>F.value}),p({...t,upload:ge,reset:W,removeUploadedFiles:D,removeQueuedFiles:Z,removeFile:oe,pickFiles:v,addFiles:z,canAddFiles:O,canUpload:x,uploadSizeLabel:R,uploadProgressLabel:F}),()=>{const n=[m("div",{class:I.value},Ce()),m("div",{class:"q-uploader__list scroll"},Le()),r("uploader")];t.isBusy.value===!0&&n.push(m("div",{class:"q-uploader__overlay absolute-full flex flex-center"},[m(_e)]));const k={ref:y,class:M.value};return O.value===!0&&Object.assign(k,{onDragover:_,onDragleave:a}),m("div",k,n)}}const rt=()=>!0;function ut(e){const p={};return e.forEach(i=>{p[i]=rt}),p}const it=ut(ke);var st=({name:e,props:p,emits:i,injectPlugin:o})=>X({name:e,props:{...ot,...p},emits:je(i)===!0?{...it,...i}:[...ke,...i],setup(l,{expose:c}){return nt(o,c)}});function N(e){return typeof e=="function"?e:()=>e}const ct="QUploader",dt={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>e=>e.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},ft=["factoryFailed","uploaded","failed","uploading"];function vt({props:e,emit:p,helpers:i}){const o=L([]),l=L([]),c=L(0),g=f(()=>({url:N(e.url),method:N(e.method),headers:N(e.headers),formFields:N(e.formFields),fieldName:N(e.fieldName),withCredentials:N(e.withCredentials),sendRaw:N(e.sendRaw),batch:N(e.batch)})),B=f(()=>c.value>0),C=f(()=>l.value.length!==0);let w;function h(){o.value.forEach(t=>{t.abort()}),l.value.length!==0&&(w=!0)}function q(){const t=i.queuedFiles.value.slice(0);i.queuedFiles.value=[],g.value.batch(t)?y(t):t.forEach(v=>{y([v])})}function y(t){if(c.value++,typeof e.factory!="function"){d(t,{});return}const v=e.factory(t);if(!v)p("factoryFailed",new Error("QUploader: factory() does not return properly"),t),c.value--;else if(typeof v.catch=="function"&&typeof v.then=="function"){l.value.push(v);const z=_=>{i.isAlive()===!0&&(l.value=l.value.filter(a=>a!==v),l.value.length===0&&(w=!1),i.queuedFiles.value=i.queuedFiles.value.concat(t),t.forEach(a=>{i.updateFileStatus(a,"failed")}),p("factoryFailed",_,t),c.value--)};v.then(_=>{w===!0?z(new Error("Aborted")):i.isAlive()===!0&&(l.value=l.value.filter(a=>a!==v),d(t,_))}).catch(z)}else d(t,v||{})}function d(t,v){const z=new FormData,_=new XMLHttpRequest,a=(x,M)=>v[x]!==void 0?N(v[x])(M):g.value[x](M),b=a("url",t);if(!b){console.error("q-uploader: invalid or no URL specified"),c.value--;return}const r=a("formFields",t);r!==void 0&&r.forEach(x=>{z.append(x.name,x.value)});let u=0,s=0,S=0,U=0,F;_.upload.addEventListener("progress",x=>{if(F===!0)return;const M=Math.min(U,x.loaded);i.uploadedSize.value+=M-S,S=M;let I=S-s;for(let W=u;I>0&&W<t.length;W++){const D=t[W];if(I>D.size)I-=D.size,u++,s+=D.size,i.updateFileStatus(D,"uploading",D.size);else{i.updateFileStatus(D,"uploading",I);return}}},!1),_.onreadystatechange=()=>{_.readyState<4||(_.status&&_.status<400?(i.uploadedFiles.value=i.uploadedFiles.value.concat(t),t.forEach(x=>{i.updateFileStatus(x,"uploaded")}),p("uploaded",{files:t,xhr:_})):(F=!0,i.uploadedSize.value-=S,i.queuedFiles.value=i.queuedFiles.value.concat(t),t.forEach(x=>{i.updateFileStatus(x,"failed")}),p("failed",{files:t,xhr:_})),c.value--,o.value=o.value.filter(x=>x!==_))},_.open(a("method",t),b),a("withCredentials",t)===!0&&(_.withCredentials=!0);const R=a("headers",t);R!==void 0&&R.forEach(x=>{_.setRequestHeader(x.name,x.value)});const O=a("sendRaw",t);t.forEach(x=>{i.updateFileStatus(x,"uploading",0),O!==!0&&z.append(a("fieldName",x),x,x.name),x.xhr=_,x.__abort=()=>{_.abort()},U+=x.size}),p("uploading",{files:t,xhr:_}),o.value.push(_),O===!0?_.send(new Blob(t)):_.send(z)}return{isUploading:B,isBusy:C,abort:h,upload:q}}var mt={name:ct,props:dt,emits:ft,injectPlugin:vt},gt=st(mt),ht=X({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:p}){const i=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>m("div",{class:i.value,role:"toolbar"},ue(p.default))}}),pt=X({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:p,emit:i}){const{proxy:{$q:o}}=V(),l=ce(le,H);if(l===H)return console.error("QHeader needs to be child of QLayout"),H;const c=L(parseInt(e.heightHint,10)),g=L(!0),B=f(()=>e.reveal===!0||l.view.value.indexOf("H")!==-1||o.platform.is.ios&&l.isContainer.value===!0),C=f(()=>{if(e.modelValue!==!0)return 0;if(B.value===!0)return g.value===!0?c.value:0;const a=c.value-l.scroll.value.position;return a>0?a:0}),w=f(()=>e.modelValue!==!0||B.value===!0&&g.value!==!0),h=f(()=>e.modelValue===!0&&w.value===!0&&e.reveal===!0),q=f(()=>"q-header q-layout__section--marginal "+(B.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(w.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=f(()=>{const a=l.rows.value.top,b={};return a[0]==="l"&&l.left.space===!0&&(b[o.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),a[2]==="r"&&l.right.space===!0&&(b[o.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),b});function d(a,b){l.update("header",a,b)}function t(a,b){a.value!==b&&(a.value=b)}function v({height:a}){t(c,a),d("size",a)}function z(a){h.value===!0&&t(g,!0),i("focusin",a)}Q(()=>e.modelValue,a=>{d("space",a),t(g,!0),l.animate()}),Q(C,a=>{d("offset",a)}),Q(()=>e.reveal,a=>{a===!1&&t(g,e.modelValue)}),Q(g,a=>{l.animate(),i("reveal",a)}),Q(l.scroll,a=>{e.reveal===!0&&t(g,a.direction==="up"||a.position<=e.revealOffset||a.position-a.inflectionPoint<100)});const _={};return l.instances.header=_,e.modelValue===!0&&d("size",c.value),d("space",e.modelValue),d("offset",C.value),se(()=>{l.instances.header===_&&(l.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const a=Ne(p.default,[]);return e.elevated===!0&&a.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(m(ae,{debounce:0,onResize:v})),m("header",{class:q.value,style:y.value,onFocusin:z},a)}}}),_t=X({name:"QPageContainer",setup(e,{slots:p}){const{proxy:{$q:i}}=V(),o=ce(le,H);if(o===H)return console.error("QPageContainer needs to be child of QLayout"),H;ie(He,!0);const l=f(()=>{const c={};return o.header.space===!0&&(c.paddingTop=`${o.header.size}px`),o.right.space===!0&&(c[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(c.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(c[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),c});return()=>m("div",{class:"q-page-container",style:l.value},ue(p.default))}}),bt=X({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:p,emit:i}){const{proxy:{$q:o}}=V(),l=ce(le,H);if(l===H)return console.error("QFooter needs to be child of QLayout"),H;const c=L(parseInt(e.heightHint,10)),g=L(!0),B=L(xe.value===!0||l.isContainer.value===!0?0:window.innerHeight),C=f(()=>e.reveal===!0||l.view.value.indexOf("F")!==-1||o.platform.is.ios&&l.isContainer.value===!0),w=f(()=>l.isContainer.value===!0?l.containerHeight.value:B.value),h=f(()=>{if(e.modelValue!==!0)return 0;if(C.value===!0)return g.value===!0?c.value:0;const u=l.scroll.value.position+w.value+c.value-l.height.value;return u>0?u:0}),q=f(()=>e.modelValue!==!0||C.value===!0&&g.value!==!0),y=f(()=>e.modelValue===!0&&q.value===!0&&e.reveal===!0),d=f(()=>"q-footer q-layout__section--marginal "+(C.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(q.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(C.value!==!0?" hidden":""):"")),t=f(()=>{const u=l.rows.value.bottom,s={};return u[0]==="l"&&l.left.space===!0&&(s[o.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),u[2]==="r"&&l.right.space===!0&&(s[o.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),s});function v(u,s){l.update("footer",u,s)}function z(u,s){u.value!==s&&(u.value=s)}function _({height:u}){z(c,u),v("size",u)}function a(){if(e.reveal!==!0)return;const{direction:u,position:s,inflectionPoint:S}=l.scroll.value;z(g,u==="up"||s-S<100||l.height.value-w.value-s-c.value<300)}function b(u){y.value===!0&&z(g,!0),i("focusin",u)}Q(()=>e.modelValue,u=>{v("space",u),z(g,!0),l.animate()}),Q(h,u=>{v("offset",u)}),Q(()=>e.reveal,u=>{u===!1&&z(g,e.modelValue)}),Q(g,u=>{l.animate(),i("reveal",u)}),Q([c,l.scroll,l.height],a),Q(()=>o.screen.height,u=>{l.isContainer.value!==!0&&z(B,u)});const r={};return l.instances.footer=r,e.modelValue===!0&&v("size",c.value),v("space",e.modelValue),v("offset",h.value),se(()=>{l.instances.footer===r&&(l.instances.footer=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const u=we(p.default,[m(ae,{debounce:0,onResize:_})]);return e.elevated===!0&&u.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),m("footer",{class:d.value,style:t.value,onFocusin:b},u)}}}),yt=X({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:p,emit:i}){const{proxy:{$q:o}}=V(),l=L(null),c=L(o.screen.height),g=L(e.container===!0?0:o.screen.width),B=L({position:0,direction:"down",inflectionPoint:0}),C=L(0),w=L(xe.value===!0?0:ne()),h=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),q=f(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),y=f(()=>w.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${w.value}px`}:null),d=f(()=>w.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${w.value}px`,width:`calc(100% + ${w.value}px)`}:null);function t(r){if(e.container===!0||document.qScrollPrevented!==!0){const u={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};B.value=u,e.onScroll!==void 0&&i("scroll",u)}}function v(r){const{height:u,width:s}=r;let S=!1;c.value!==u&&(S=!0,c.value=u,e.onScrollHeight!==void 0&&i("scrollHeight",u),_()),g.value!==s&&(S=!0,g.value=s),S===!0&&e.onResize!==void 0&&i("resize",r)}function z({height:r}){C.value!==r&&(C.value=r,_())}function _(){if(e.container===!0){const r=c.value>C.value?ne():0;w.value!==r&&(w.value=r)}}let a=null;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:l,height:c,containerHeight:C,scrollbarWidth:w,totalWidth:f(()=>g.value+w.value),rows:f(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:ee({size:0,offset:0,space:!1}),right:ee({size:300,offset:0,space:!1}),footer:ee({size:0,offset:0,space:!1}),left:ee({size:300,offset:0,space:!1}),scroll:B,animate(){a!==null?clearTimeout(a):document.body.classList.add("q-body--layout-animate"),a=setTimeout(()=>{a=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,u,s){b[r][u]=s}};if(ie(le,b),ne()>0){let s=function(){r=null,u.classList.remove("hide-scrollbar")},S=function(){if(r===null){if(u.scrollHeight>o.screen.height)return;u.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(s,300)},U=function(F){r!==null&&F==="remove"&&(clearTimeout(r),s()),window[`${F}EventListener`]("resize",S)},r=null;const u=document.body;Q(()=>e.container!==!0?"add":"remove",U),e.container!==!0&&U("add"),Ae(()=>{U("remove")})}return()=>{const r=we(p.default,[m(Ke,{onScroll:t}),m(ae,{onResize:v})]),u=m("div",{class:h.value,style:q.value,ref:e.container===!0?void 0:l,tabindex:-1},r);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:l},[m(ae,{onResize:z}),m("div",{class:"absolute-full",style:y.value},[m("div",{class:"scroll",style:d.value},[u])])]):u}}});const zt=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){const p=useCounterStore(),i=L(null),o=L(null),l=()=>{i.value.pickFiles()},c=h=>{const q=h[0],y=new FileReader;y.onload=d=>{const t=new Uint8Array(d.target.result),v=XLSX.read(t,{type:"array"}),z=g(v,"\u734E\u9805\u8A2D\u5B9A",["\u8B58\u5225\u78BC","\u734E\u9805\u985E\u5225","\u734E\u9805\u540D\u7A31","\u734E\u9805\u6578\u91CF"],B),_=g(v,"\u7968\u5238\u8CC7\u6599",["\u8B58\u5225\u78BC","\u7968\u5238\u7A2E\u985E","\u7968\u5238\u540D\u7A31","\u7968\u5238\u958B\u555F\u6642\u9593"],C);o.value={awardSettings:z,ticketData:_},p.insertData(o.value)},y.readAsArrayBuffer(q)},g=(h,q,y,d)=>{const t=h.Sheets[q];return XLSX.utils.sheet_to_json(t,{header:y}).map(d)},B=h=>{const q=h.\u8B58\u5225\u78BC||Math.ceil(Math.random()*99999999)+1+new Date().getTime(),y=h.\u734E\u9805\u985E\u5225&&["A","B","C","D","E","F","G"].includes(h.\u734E\u9805\u985E\u5225)?h.\u734E\u9805\u985E\u5225:"G",d=h.\u734E\u9805\u540D\u7A31||"",t=h.\u734E\u9805\u6578\u91CF||1;return{id:q,category:y,name:d,qty:t}},C=h=>{const q=h.\u8B58\u5225\u78BC||Math.ceil(Math.random()*99999999)+1+new Date().getTime(),y=h.\u7968\u5238\u7A2E\u985E&&["A","B","C","D","E","F","G"].includes(h.\u7968\u5238\u7A2E\u985E)?h.\u7968\u5238\u7A2E\u985E:"G",d=h.\u7968\u5238\u540D\u7A31||"",t=h.\u7968\u5238\u958B\u555F\u6642\u9593||null;return{id:q,category:y,name:d,openTime:t}},w=()=>{var b;let h=p.awardList,q=p.ticketList,y=(b=q.filter(r=>r.openTime!==null))==null?void 0:b.sort((r,u)=>r.openTime-u.openTime).map(r=>({\u8B58\u5225\u78BC:String(r.id),\u7968\u5238\u7A2E\u985E:r.category,\u7968\u5238\u540D\u7A31:String(r.name),\u7968\u5238\u958B\u555F\u6642\u9593:r.openTime})),d=h.map(r=>({\u8B58\u5225\u78BC:String(r.id),\u734E\u9805\u985E\u5225:r.category,\u734E\u9805\u540D\u7A31:String(r.name),\u734E\u9805\u6578\u91CF:r.qty})),t=q.map(r=>({\u8B58\u5225\u78BC:String(r.id),\u7968\u5238\u7A2E\u985E:r.category,\u7968\u5238\u540D\u7A31:String(r.name),\u7968\u5238\u958B\u555F\u6642\u9593:r.openTime}));const v=XLSX.utils.json_to_sheet(d),z=XLSX.utils.json_to_sheet(t),_=XLSX.utils.json_to_sheet(y),a=XLSX.utils.book_new();XLSX.utils.book_append_sheet(a,v,"\u734E\u9805\u8A2D\u5B9A"),XLSX.utils.book_append_sheet(a,z,"\u7968\u5238\u8CC7\u6599"),XLSX.utils.book_append_sheet(a,_,"\u5F97\u734E\u540D\u55AE"),XLSX.writeFile(a,"\u4E00\u756A\u8CDE\u8CC7\u6599.xlsx")};return(h,q)=>{const y=Xe("router-view");return Me(),Ve(yt,{view:"lHh Lpr lFf"},{default:E(()=>[P(pt,{elevated:"",style:{"background-color":"#ffedd4"}},{default:E(()=>[P(ht,null,{default:E(()=>[P(A,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",class:"bg-amber-8",to:"/"}),P(Ye,{class:"text-orange-10"},{default:E(()=>[K(" \u4E00\u756A\u8CDE! ")]),_:1}),P(A,{to:"/Drawl",class:"bg-amber-6 q-mx-sm","text-color":"brown-7"},{default:E(()=>[K("\u958B\u59CB\u62BD\u734E")]),_:1}),P(A,{to:"/Setting",class:"bg-amber-6 q-mx-sm","text-color":"brown-7"},{default:E(()=>[K("\u734E\u9805\u8A2D\u5B9A")]),_:1}),P(A,{to:"/Record",class:"bg-amber-6 q-mx-sm","text-color":"brown-7"},{default:E(()=>[K("\u5F97\u734E\u67E5\u770B")]),_:1}),P(A,{class:"bg-amber-2 q-mx-sm","text-color":"brown-7",onClick:w},{default:E(()=>[K("\u8CC7\u6599\u532F\u51FA")]),_:1}),P(gt,{ref_key:"uploader",ref:i,accept:".xlsx, .xls",onAdded:c,style:{display:"none"}},null,512),P(A,{class:"bg-amber-2 q-mx-sm","text-color":"brown-7",onClick:l},{default:E(()=>[K("\u8CC7\u6599\u532F\u5165")]),_:1})]),_:1})]),_:1}),P(_t,null,{default:E(()=>[P(y)]),_:1}),P(bt,{elevated:"",style:{"background-color":"#ffedd4",height:"50px"}})]),_:1})}}});export{zt as default};
