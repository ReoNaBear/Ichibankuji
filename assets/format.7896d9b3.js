import{u as v,a as g}from"./use-dark.5f9944d8.js";import{k as f,c as o,h,g as $,ak as S}from"./index.cc941d67.js";const z={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},r={xs:2,sm:4,md:8,lg:16,xl:24};var w=f({name:"QSeparator",props:{...v,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=$(),n=g(e,t.proxy.$q),i=o(()=>e.vertical===!0?"vertical":"horizontal"),a=o(()=>` q-separator--${i.value}`),l=o(()=>e.inset!==!1?`${a.value}-${z[e.inset]}`:""),u=o(()=>`q-separator${a.value}${l.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),d=o(()=>{const s={};if(e.size!==void 0&&(s[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const m=e.spaced===!0?`${r.md}px`:e.spaced in r?`${r[e.spaced]}px`:e.spaced,c=e.vertical===!0?["Left","Right"]:["Top","Bottom"];s[`margin${c[0]}`]=s[`margin${c[1]}`]=m}return s});return()=>h("hr",{class:u.value,style:d.value,"aria-orientation":i.value})}});function x(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),S.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function y(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function R(e,t,n){if(n<=t)return t;const i=n-t+1;let a=t+(e-t)%i;return a<t&&(a=i+a),a===0?0:a}export{w as Q,y as b,x as c,R as n};
