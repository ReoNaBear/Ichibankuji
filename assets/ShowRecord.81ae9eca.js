import{Q as V}from"./QInput.a0ef7c7f.js";import{r as u,o as q,W as _,R as r,a3 as i,a2 as o,F as v,a4 as y,f as z,a5 as d,au as A,aL as I,a6 as M}from"./index.ceaf0001.js";import{u as S,D as b}from"./award.a132a148.js";import"./use-dark.03918491.js";import"./focus-manager.c9b70bc2.js";var p="/Ichibankuji/assets/AT.3e0ffa31.png",k="/Ichibankuji/assets/BT.7f1d5ec0.png",T="/Ichibankuji/assets/CT.168cb37f.png",x="/Ichibankuji/assets/DT.aa4bcb44.png",w="/Ichibankuji/assets/ET.658e7057.png",j="/Ichibankuji/assets/FT.d545c591.png",O="/Ichibankuji/assets/GT.5351c5a7.png",F="/Ichibankuji/assets/at1.fb3132c6.png",B="/Ichibankuji/assets/at2.22f528c4.png";const H={class:"z-index row items-center justify-center"},R={style:{width:"80%","max-width":"80%","max-height":"95%"}},G=o("div",{class:"text-h3 text-center q-pa-md q-mt-xl",style:{border:"2px sandybrown solid",color:"#ea995e","background-color":"#ffedd4"}}," \u4E00\u756A\u8CDE \u7D0D\u7D0D\u5E03\u6717 \u8CDE\u7D19\u56DE\u6536\u78BA\u8A8D\u8868 ",-1),N={class:""},P={class:"col-3 column items-center justify-center"},$={class:"text-h4"},Q={class:"text-h6"},U={class:"col-9 row"},W={key:0,class:"column",style:{"align-items":"center",width:"16px",position:"absolute",right:"15%"}},J=o("div",null,"\u679A",-1),K=o("div",null,"\u76EE",-1),te={__name:"ShowRecord",setup(X){const C=[F,B,p,k,T,x,w,j,O],g=u([]),D=()=>{const n=C.map(t=>new Promise(a=>{const e=new Image;e.src=t,e.onload=()=>a(e.src),e.onerror=()=>a(null)}));return Promise.all(n)};q(async()=>{_.show(),g.value=await D(),_.hide(),console.log(g.value)});const h=(n,t)=>{if(n==null)return 1;if(t==null)return-1;const a=b.fromFormat(n,"yyyy-MM-dd HH:mm:ss",{zone:"Asia/Taipei"}),e=b.fromFormat(t,"yyyy-MM-dd HH:mm:ss",{zone:"Asia/Taipei"});return a<e?-1:a>e?1:0},f=S(),l=u(null),m=u("");E();function E(){var a;let n=f.awardList;l.value=n.sort((e,s)=>e.category.localeCompare(s.category));let t=f.ticketList;t.forEach(function(e){switch(e.ticketOpenImage=p,e.category){case"A":e.ticketOpenImage=p;break;case"B":e.ticketOpenImage=k;break;case"C":e.ticketOpenImage=T;break;case"D":e.ticketOpenImage=x;break;case"E":e.ticketOpenImage=w;break;case"F":e.ticketOpenImage=j;break;case"G":e.ticketOpenImage=O;break}}),l.value.forEach(e=>{let s=t.filter(c=>c.category==e.category&&c.name==e.name);s.length>0&&s.sort((c,L)=>h(c.openTime,L.openTime)),e.tickets=s}),m.value=(a=t.filter(e=>e.openTime!==null))==null?void 0:a.sort((e,s)=>h(e.openTime,s.openTime)).map(e=>e.name).join(`
`)}return(n,t)=>(r(),i("div",H,[o("div",R,[G,o("div",N,[(r(!0),i(v,null,y(l.value,a=>(r(),i("div",{style:{border:"1px solid #df7500","background-color":"#f3c898","border-top":"0px"},class:"row q-py-sm",key:a.id},[o("div",P,[o("div",$,d(a.category)+"\u8CDE",1),o("div",Q,d(a.name),1)]),o("div",U,[(r(!0),i(v,null,y(a.tickets,(e,s)=>(r(),i("div",{key:s,class:"ticket flex items-center q-my-sm",style:A([{position:"relative"},{backgroundImage:`url(${e.openTime==null?s%2===0?I(F):I(B):e.ticketOpenImage})`,marginLeft:`${s%16===0?"0px":"-143px"}`,zIndex:`${e.openTime==null?50-s:50+s}`}])},[e.openTime==null?(r(),i("div",W,[o("div",null,d(s+1),1),J,K])):M("",!0)],4))),128))])]))),128))]),z(V,{class:"q-ma-xl",style:{width:"80%","max-width":"80%","max-height":"95%"},modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=a=>m.value=a),filled:"",type:"textarea"},null,8,["modelValue"])])]))}};export{te as default};
