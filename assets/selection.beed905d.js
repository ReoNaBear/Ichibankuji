import{u as v,a as g}from"./use-dark.b2d1c811.js";import{k as f,c as t,h as $,g as h,ar as S}from"./index.9bf303f6.js";const x={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},i={xs:2,sm:4,md:8,lg:16,xl:24};var w=f({name:"QSeparator",props:{...v,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const r=h(),c=g(e,r.proxy.$q),n=t(()=>e.vertical===!0?"vertical":"horizontal"),o=t(()=>` q-separator--${n.value}`),l=t(()=>e.inset!==!1?`${o.value}-${x[e.inset]}`:""),m=t(()=>`q-separator${o.value}${l.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(c.value===!0?" q-separator--dark":"")),u=t(()=>{const a={};if(e.size!==void 0&&(a[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const d=e.spaced===!0?`${i.md}px`:e.spaced in i?`${i[e.spaced]}px`:e.spaced,s=e.vertical===!0?["Left","Right"]:["Top","Bottom"];a[`margin${s[0]}`]=a[`margin${s[1]}`]=d}return a});return()=>$("hr",{class:m.value,style:u.value,"aria-orientation":n.value})}});function z(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),S.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{w as Q,z as c};
