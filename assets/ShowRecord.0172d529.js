import{Q as n}from"./QInput.30ce986f.js";import{a as l}from"./award.fe7e3c34.js";import{r as m,O as c,$ as p,f as u}from"./index.340c18dd.js";import"./use-dark.7ce3f4ba.js";import"./focus-manager.c9b70bc2.js";import"./_commonjsHelpers.4e997714.js";const d={class:"z-index row items-center justify-center"},V={__name:"ShowRecord",setup(f){const a=l(),o=m("");s();function s(){var t;let r=a.ticketList;o.value=(t=r.filter(e=>e.openTime!==null))==null?void 0:t.sort((e,i)=>checkDateComparison(e.openTime,i.openTime)).map(e=>e.name).join(`
`)}return(r,t)=>(c(),p("div",d,[u(n,{class:"q-ma-xl",style:{width:"80%","max-width":"80%","max-height":"95%"},modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),filled:"",type:"textarea"},null,8,["modelValue"])]))}};export{V as default};
