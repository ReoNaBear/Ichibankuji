import{k as v,i as p,m as t,c as m,h as b,l as _,q as z,u as q,g as w,n as C,A as I,B as k,C as s,K as f,f as i,D as l,Q as c}from"./index.cc941d67.js";import{tsParticles as h}from"https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm";import{loadFull as P}from"https://cdn.jsdelivr.net/npm/tsparticles@3.0.3/+esm";var B=v({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(r,{slots:a}){const{proxy:{$q:n}}=w(),e=p(z,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(p(q,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const d=m(()=>{const o=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof r.styleFn=="function"){const y=e.isContainer.value===!0?e.containerHeight.value:n.screen.height;return r.styleFn(o,y)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-o+"px":n.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":n.screen.height-o+"px"}}),x=m(()=>`q-page${r.padding===!0?" q-layout-padding":""}`);return()=>b("main",{class:x.value,style:d.value},_(a.default))}}),g="/Ichibankuji/assets/cryCat.b0191e9e.png";const Q={class:"column"},F=f("div",{class:"text-h2 text-white q-ma-xl"},"\u7D0D\u7D0D\u4E00\u756A\u8CDE (\u02F6\u2019 \u1D55 \u2018 \u02F6)",-1),D={__name:"IndexPage",setup(r){let a;async function n(u){await P(h),a=await h.load({options:u})}return n({fpsLimit:60,particles:{groups:{z5000:{number:{value:70},zIndex:{value:5e3}},z7500:{number:{value:30},zIndex:{value:75}},z2500:{number:{value:50},zIndex:{value:25}},z1000:{number:{value:40},zIndex:{value:10}}},number:{value:200,density:{enable:!1,area:800}},color:{value:"#ffedd4",animation:{enable:!1,speed:20,sync:!0}},shape:{type:"circle"},opacity:{value:{min:.1,max:1},random:!1,animation:{enable:!1,speed:3,sync:!1}},size:{value:3},move:{angle:{value:10,offset:0},enable:!0,speed:5,direction:"right",random:!1,straight:!0,outModes:"out"},zIndex:{value:5,opacityRate:.5}},interactivity:{detectsOn:"canvas",events:{onHover:{enable:!1,mode:"repulse"},onClick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,links:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:.8},repulse:{distance:200},push:{quantity:4,groups:["z5000","z7500","z2500","z1000"]},remove:{quantity:2}}},detectRetina:!0,background:{color:"#ea995e"},emitters:{position:{y:85,x:-10},rate:{delay:2,quantity:1},size:{width:0,height:0},particles:{shape:{type:"images",options:{images:[{src:g,width:41,height:40},{src:g,width:41,height:40}]}},opacity:{value:1},size:{value:40},move:{speed:10,outModes:{default:"destroy",left:"none"},straight:!0},zIndex:{value:-1},rotate:{value:{min:0,max:360},animation:{enable:!0,speed:10,sync:!0}}}}}),C(()=>{a&&a.destroy()}),(u,d)=>(I(),k(B,{class:"flex flex-center background"},{default:s(()=>[f("div",Q,[F,i(c,{to:"/Drawl",class:"q-ma-sm q-mx-xl text-h6",icon:"flag","text-color":"brown-7",color:"brown-3"},{default:s(()=>[l("\u958B\u59CB\u62BD\u734E")]),_:1}),i(c,{to:"/Setting",class:"q-ma-sm q-mx-xl text-h6",icon:"settings","text-color":"brown-7",color:"brown-3"},{default:s(()=>[l("\u734E\u9805\u8A2D\u5B9A")]),_:1}),i(c,{to:"/Record",class:"q-ma-sm q-mx-xl text-h6",icon:"list","text-color":"brown-7",color:"brown-3"},{default:s(()=>[l("\u5F97\u734E\u67E5\u770B")]),_:1}),i(c,{to:"/HappyBirthDay",class:"q-ma-sm q-mx-xl text-h6",icon:"cake","text-color":"deep-orange-7",color:"grey-3"},{default:s(()=>[l("\u7D0D\u7D0D\u751F\u65E5\u5FEB\u6A02")]),_:1})])]),_:1}))}};export{D as default};
