import{a8 as ut}from"./index.56365fac.js";import{c as K}from"./_commonjsHelpers.0b3cc204.js";var it={exports:{}};(function(Z,B){(function(z,T){Z.exports=T()})(K,function(){var z=1e3,T=6e4,P=36e5,N="millisecond",v="second",x="minute",m="hour",_="day",p="week",b="month",D="quarter",y="year",$="date",i="Invalid Date",r=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var e=["th","st","nd","rd"],t=a%100;return"["+a+(e[(t-20)%10]||e[t]||e[0])+"]"}},f=function(a,e,t){var s=String(a);return!s||s.length>=e?a:""+Array(e+1-s.length).join(t)+a},S={s:f,z:function(a){var e=-a.utcOffset(),t=Math.abs(e),s=Math.floor(t/60),n=t%60;return(e<=0?"+":"-")+f(s,2,"0")+":"+f(n,2,"0")},m:function a(e,t){if(e.date()<t.date())return-a(t,e);var s=12*(t.year()-e.year())+(t.month()-e.month()),n=e.clone().add(s,b),o=t-n<0,c=e.clone().add(s+(o?-1:1),b);return+(-(s+(t-n)/(o?n-c:c-n))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:b,y,w:p,d:_,D:$,h:m,m:x,s:v,ms:N,Q:D}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},g="en",L={};L[g]=h;var k="$isDayjsObject",H=function(a){return a instanceof A||!(!a||!a[k])},Y=function a(e,t,s){var n;if(!e)return g;if(typeof e=="string"){var o=e.toLowerCase();L[o]&&(n=o),t&&(L[o]=t,n=o);var c=e.split("-");if(!n&&c.length>1)return a(c[0])}else{var l=e.name;L[l]=e,n=l}return!s&&n&&(g=n),n||!s&&g},M=function(a,e){if(H(a))return a.clone();var t=typeof e=="object"?e:{};return t.date=a,t.args=arguments,new A(t)},d=S;d.l=Y,d.i=H,d.w=function(a,e){return M(a,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var A=function(){function a(t){this.$L=Y(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[k]=!0}var e=a.prototype;return e.parse=function(t){this.$d=function(s){var n=s.date,o=s.utc;if(n===null)return new Date(NaN);if(d.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var c=n.match(r);if(c){var l=c[2]-1||0,w=(c[7]||"0").substring(0,3);return o?new Date(Date.UTC(c[1],l,c[3]||1,c[4]||0,c[5]||0,c[6]||0,w)):new Date(c[1],l,c[3]||1,c[4]||0,c[5]||0,c[6]||0,w)}}return new Date(n)}(t),this.init()},e.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},e.$utils=function(){return d},e.isValid=function(){return this.$d.toString()!==i},e.isSame=function(t,s){var n=M(t);return this.startOf(s)<=n&&n<=this.endOf(s)},e.isAfter=function(t,s){return M(t)<this.startOf(s)},e.isBefore=function(t,s){return this.endOf(s)<M(t)},e.$g=function(t,s,n){return d.u(t)?this[s]:this.set(n,t)},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,s){var n=this,o=!!d.u(s)||s,c=d.p(t),l=function(j,U){var W=d.w(n.$u?Date.UTC(n.$y,U,j):new Date(n.$y,U,j),n);return o?W:W.endOf(_)},w=function(j,U){return d.w(n.toDate()[j].apply(n.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(U)),n)},O=this.$W,C=this.$M,I=this.$D,J="set"+(this.$u?"UTC":"");switch(c){case y:return o?l(1,0):l(31,11);case b:return o?l(1,C):l(0,C+1);case p:var q=this.$locale().weekStart||0,Q=(O<q?O+7:O)-q;return l(o?I-Q:I+(6-Q),C);case _:case $:return w(J+"Hours",0);case m:return w(J+"Minutes",1);case x:return w(J+"Seconds",2);case v:return w(J+"Milliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,s){var n,o=d.p(t),c="set"+(this.$u?"UTC":""),l=(n={},n[_]=c+"Date",n[$]=c+"Date",n[b]=c+"Month",n[y]=c+"FullYear",n[m]=c+"Hours",n[x]=c+"Minutes",n[v]=c+"Seconds",n[N]=c+"Milliseconds",n)[o],w=o===_?this.$D+(s-this.$W):s;if(o===b||o===y){var O=this.clone().set($,1);O.$d[l](w),O.init(),this.$d=O.set($,Math.min(this.$D,O.daysInMonth())).$d}else l&&this.$d[l](w);return this.init(),this},e.set=function(t,s){return this.clone().$set(t,s)},e.get=function(t){return this[d.p(t)]()},e.add=function(t,s){var n,o=this;t=Number(t);var c=d.p(s),l=function(C){var I=M(o);return d.w(I.date(I.date()+Math.round(C*t)),o)};if(c===b)return this.set(b,this.$M+t);if(c===y)return this.set(y,this.$y+t);if(c===_)return l(1);if(c===p)return l(7);var w=(n={},n[x]=T,n[m]=P,n[v]=z,n)[c]||1,O=this.$d.getTime()+t*w;return d.w(O,this)},e.subtract=function(t,s){return this.add(-1*t,s)},e.format=function(t){var s=this,n=this.$locale();if(!this.isValid())return n.invalidDate||i;var o=t||"YYYY-MM-DDTHH:mm:ssZ",c=d.z(this),l=this.$H,w=this.$m,O=this.$M,C=n.weekdays,I=n.months,J=n.meridiem,q=function(U,W,E,V){return U&&(U[W]||U(s,o))||E[W].slice(0,V)},Q=function(U){return d.s(l%12||12,U,"0")},j=J||function(U,W,E){var V=U<12?"AM":"PM";return E?V.toLowerCase():V};return o.replace(u,function(U,W){return W||function(E){switch(E){case"YY":return String(s.$y).slice(-2);case"YYYY":return d.s(s.$y,4,"0");case"M":return O+1;case"MM":return d.s(O+1,2,"0");case"MMM":return q(n.monthsShort,O,I,3);case"MMMM":return q(I,O);case"D":return s.$D;case"DD":return d.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return q(n.weekdaysMin,s.$W,C,2);case"ddd":return q(n.weekdaysShort,s.$W,C,3);case"dddd":return C[s.$W];case"H":return String(l);case"HH":return d.s(l,2,"0");case"h":return Q(1);case"hh":return Q(2);case"a":return j(l,w,!0);case"A":return j(l,w,!1);case"m":return String(w);case"mm":return d.s(w,2,"0");case"s":return String(s.$s);case"ss":return d.s(s.$s,2,"0");case"SSS":return d.s(s.$ms,3,"0");case"Z":return c}return null}(U)||c.replace(":","")})},e.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},e.diff=function(t,s,n){var o,c=this,l=d.p(s),w=M(t),O=(w.utcOffset()-this.utcOffset())*T,C=this-w,I=function(){return d.m(c,w)};switch(l){case y:o=I()/12;break;case b:o=I();break;case D:o=I()/3;break;case p:o=(C-O)/6048e5;break;case _:o=(C-O)/864e5;break;case m:o=C/P;break;case x:o=C/T;break;case v:o=C/z;break;default:o=C}return n?o:d.a(o)},e.daysInMonth=function(){return this.endOf(b).$D},e.$locale=function(){return L[this.$L]},e.locale=function(t,s){if(!t)return this.$L;var n=this.clone(),o=Y(t,s,!0);return o&&(n.$L=o),n},e.clone=function(){return d.w(this.$d,this)},e.toDate=function(){return new Date(this.valueOf())},e.toJSON=function(){return this.isValid()?this.toISOString():null},e.toISOString=function(){return this.$d.toISOString()},e.toString=function(){return this.$d.toUTCString()},a}(),F=A.prototype;return M.prototype=F,[["$ms",N],["$s",v],["$m",x],["$H",m],["$W",_],["$M",b],["$y",y],["$D",$]].forEach(function(a){F[a[1]]=function(e){return this.$g(e,a[0],a[1])}}),M.extend=function(a,e){return a.$i||(a(e,A,M),a.$i=!0),M},M.locale=Y,M.isDayjs=H,M.unix=function(a){return M(1e3*a)},M.en=L[g],M.Ls=L,M.p={},M})})(it);var R=it.exports,st={exports:{}};(function(Z,B){(function(z,T){Z.exports=T()})(K,function(){var z="minute",T=/[+-]\d\d(?::?\d\d)?/g,P=/([+-]|\d\d)/g;return function(N,v,x){var m=v.prototype;x.utc=function(i){var r={date:i,utc:!0,args:arguments};return new v(r)},m.utc=function(i){var r=x(this.toDate(),{locale:this.$L,utc:!0});return i?r.add(this.utcOffset(),z):r},m.local=function(){return x(this.toDate(),{locale:this.$L,utc:!1})};var _=m.parse;m.parse=function(i){i.utc&&(this.$u=!0),this.$utils().u(i.$offset)||(this.$offset=i.$offset),_.call(this,i)};var p=m.init;m.init=function(){if(this.$u){var i=this.$d;this.$y=i.getUTCFullYear(),this.$M=i.getUTCMonth(),this.$D=i.getUTCDate(),this.$W=i.getUTCDay(),this.$H=i.getUTCHours(),this.$m=i.getUTCMinutes(),this.$s=i.getUTCSeconds(),this.$ms=i.getUTCMilliseconds()}else p.call(this)};var b=m.utcOffset;m.utcOffset=function(i,r){var u=this.$utils().u;if(u(i))return this.$u?0:u(this.$offset)?b.call(this):this.$offset;if(typeof i=="string"&&(i=function(g){g===void 0&&(g="");var L=g.match(T);if(!L)return null;var k=(""+L[0]).match(P)||["-",0,0],H=k[0],Y=60*+k[1]+ +k[2];return Y===0?0:H==="+"?Y:-Y}(i),i===null))return this;var h=Math.abs(i)<=16?60*i:i,f=this;if(r)return f.$offset=h,f.$u=i===0,f;if(i!==0){var S=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(f=this.local().add(h+S,z)).$offset=h,f.$x.$localOffset=S}else f=this.utc();return f};var D=m.format;m.format=function(i){var r=i||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return D.call(this,r)},m.valueOf=function(){var i=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*i},m.isUTC=function(){return!!this.$u},m.toISOString=function(){return this.toDate().toISOString()},m.toString=function(){return this.toDate().toUTCString()};var y=m.toDate;m.toDate=function(i){return i==="s"&&this.$offset?x(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():y.call(this)};var $=m.diff;m.diff=function(i,r,u){if(i&&this.$u===i.$u)return $.call(this,i,r,u);var h=this.local(),f=x(i).local();return $.call(h,f,r,u)}}})})(st);var ct=st.exports,at={exports:{}};(function(Z,B){(function(z,T){Z.exports=T()})(K,function(){var z={year:0,month:1,day:2,hour:3,minute:4,second:5},T={};return function(P,N,v){var x,m=function(D,y,$){$===void 0&&($={});var i=new Date(D),r=function(u,h){h===void 0&&(h={});var f=h.timeZoneName||"short",S=u+"|"+f,g=T[S];return g||(g=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:u,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:f}),T[S]=g),g}(y,$);return r.formatToParts(i)},_=function(D,y){for(var $=m(D,y),i=[],r=0;r<$.length;r+=1){var u=$[r],h=u.type,f=u.value,S=z[h];S>=0&&(i[S]=parseInt(f,10))}var g=i[3],L=g===24?0:g,k=i[0]+"-"+i[1]+"-"+i[2]+" "+L+":"+i[4]+":"+i[5]+":000",H=+D;return(v.utc(k).valueOf()-(H-=H%1e3))/6e4},p=N.prototype;p.tz=function(D,y){D===void 0&&(D=x);var $,i=this.utcOffset(),r=this.toDate(),u=r.toLocaleString("en-US",{timeZone:D}),h=Math.round((r-new Date(u))/1e3/60),f=15*-Math.round(r.getTimezoneOffset()/15)-h;if(!Number(f))$=this.utcOffset(0,y);else if($=v(u,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(f,!0),y){var S=$.utcOffset();$=$.add(i-S,"minute")}return $.$x.$timezone=D,$},p.offsetName=function(D){var y=this.$x.$timezone||v.tz.guess(),$=m(this.valueOf(),y,{timeZoneName:D}).find(function(i){return i.type.toLowerCase()==="timezonename"});return $&&$.value};var b=p.startOf;p.startOf=function(D,y){if(!this.$x||!this.$x.$timezone)return b.call(this,D,y);var $=v(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return b.call($,D,y).tz(this.$x.$timezone,!0)},v.tz=function(D,y,$){var i=$&&y,r=$||y||x,u=_(+v(),r);if(typeof D!="string")return v(D).tz(r);var h=function(L,k,H){var Y=L-60*k*1e3,M=_(Y,H);if(k===M)return[Y,k];var d=_(Y-=60*(M-k)*1e3,H);return M===d?[Y,M]:[L-60*Math.min(M,d)*1e3,Math.max(M,d)]}(v.utc(D,i).valueOf(),u,r),f=h[0],S=h[1],g=v(f).utcOffset(S);return g.$x.$timezone=r,g},v.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},v.tz.setDefault=function(D){x=D}}})})(at);var ft=at.exports,ot={exports:{}};(function(Z,B){(function(z,T){Z.exports=T()})(K,function(){var z={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},T=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,P=/\d/,N=/\d\d/,v=/\d\d?/,x=/\d*[^-_:/,()\s\d]+/,m={},_=function(r){return(r=+r)+(r>68?1900:2e3)},p=function(r){return function(u){this[r]=+u}},b=[/[+-]\d\d:?(\d\d)?|Z/,function(r){(this.zone||(this.zone={})).offset=function(u){if(!u||u==="Z")return 0;var h=u.match(/([+-]|\d\d)/g),f=60*h[1]+(+h[2]||0);return f===0?0:h[0]==="+"?-f:f}(r)}],D=function(r){var u=m[r];return u&&(u.indexOf?u:u.s.concat(u.f))},y=function(r,u){var h,f=m.meridiem;if(f){for(var S=1;S<=24;S+=1)if(r.indexOf(f(S,0,u))>-1){h=S>12;break}}else h=r===(u?"pm":"PM");return h},$={A:[x,function(r){this.afternoon=y(r,!1)}],a:[x,function(r){this.afternoon=y(r,!0)}],Q:[P,function(r){this.month=3*(r-1)+1}],S:[P,function(r){this.milliseconds=100*+r}],SS:[N,function(r){this.milliseconds=10*+r}],SSS:[/\d{3}/,function(r){this.milliseconds=+r}],s:[v,p("seconds")],ss:[v,p("seconds")],m:[v,p("minutes")],mm:[v,p("minutes")],H:[v,p("hours")],h:[v,p("hours")],HH:[v,p("hours")],hh:[v,p("hours")],D:[v,p("day")],DD:[N,p("day")],Do:[x,function(r){var u=m.ordinal,h=r.match(/\d+/);if(this.day=h[0],u)for(var f=1;f<=31;f+=1)u(f).replace(/\[|\]/g,"")===r&&(this.day=f)}],w:[v,p("week")],ww:[N,p("week")],M:[v,p("month")],MM:[N,p("month")],MMM:[x,function(r){var u=D("months"),h=(D("monthsShort")||u.map(function(f){return f.slice(0,3)})).indexOf(r)+1;if(h<1)throw new Error;this.month=h%12||h}],MMMM:[x,function(r){var u=D("months").indexOf(r)+1;if(u<1)throw new Error;this.month=u%12||u}],Y:[/[+-]?\d+/,p("year")],YY:[N,function(r){this.year=_(r)}],YYYY:[/\d{4}/,p("year")],Z:b,ZZ:b};function i(r){var u,h;u=r,h=m&&m.formats;for(var f=(r=u.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(M,d,A){var F=A&&A.toUpperCase();return d||h[A]||z[A]||h[F].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(a,e,t){return e||t.slice(1)})})).match(T),S=f.length,g=0;g<S;g+=1){var L=f[g],k=$[L],H=k&&k[0],Y=k&&k[1];f[g]=Y?{regex:H,parser:Y}:L.replace(/^\[|\]$/g,"")}return function(M){for(var d={},A=0,F=0;A<S;A+=1){var a=f[A];if(typeof a=="string")F+=a.length;else{var e=a.regex,t=a.parser,s=M.slice(F),n=e.exec(s)[0];t.call(d,n),M=M.replace(n,"")}}return function(o){var c=o.afternoon;if(c!==void 0){var l=o.hours;c?l<12&&(o.hours+=12):l===12&&(o.hours=0),delete o.afternoon}}(d),d}}return function(r,u,h){h.p.customParseFormat=!0,r&&r.parseTwoDigitYear&&(_=r.parseTwoDigitYear);var f=u.prototype,S=f.parse;f.parse=function(g){var L=g.date,k=g.utc,H=g.args;this.$u=k;var Y=H[1];if(typeof Y=="string"){var M=H[2]===!0,d=H[3]===!0,A=M||d,F=H[2];d&&(F=H[2]),m=this.$locale(),!M&&F&&(m=h.Ls[F]),this.$d=function(s,n,o,c){try{if(["x","X"].indexOf(n)>-1)return new Date((n==="X"?1e3:1)*s);var l=i(n)(s),w=l.year,O=l.month,C=l.day,I=l.hours,J=l.minutes,q=l.seconds,Q=l.milliseconds,j=l.zone,U=l.week,W=new Date,E=C||(w||O?1:W.getDate()),V=w||W.getFullYear(),X=0;w&&!O||(X=O>0?O-1:W.getMonth());var G,tt=I||0,et=J||0,nt=q||0,rt=Q||0;return j?new Date(Date.UTC(V,X,E,tt,et,nt,rt+60*j.offset*1e3)):o?new Date(Date.UTC(V,X,E,tt,et,nt,rt)):(G=new Date(V,X,E,tt,et,nt,rt),U&&(G=c(G).week(U).toDate()),G)}catch{return new Date("")}}(L,Y,k,h),this.init(),F&&F!==!0&&(this.$L=this.locale(F).$L),A&&L!=this.format(Y)&&(this.$d=new Date("")),m={}}else if(Y instanceof Array)for(var a=Y.length,e=1;e<=a;e+=1){H[1]=Y[e-1];var t=h.apply(this,H);if(t.isValid()){this.$d=t.$d,this.$L=t.$L,this.init();break}e===a&&(this.$d=new Date(""))}else S.call(this,g)}}})})(ot);var ht=ot.exports;R.extend(ct);R.extend(ft);R.extend(ht);const $t=ut("counter",{state:()=>({awardList:[{id:Math.ceil(Math.random()*99999999)+1+new Date().getTime(),category:"A",name:"\u9810\u8A2DA\u8CDE",qty:3},{id:Math.ceil(Math.random()*99999999)+1+new Date().getTime(),category:"B",name:"\u9810\u8A2DB\u8CDE",qty:3},{id:Math.ceil(Math.random()*99999999)+1+new Date().getTime(),category:"C",name:"\u9810\u8A2DC\u8CDE",qty:2},{id:Math.ceil(Math.random()*99999999)+1+new Date().getTime(),category:"D",name:"\u9810\u8A2DD\u8CDE",qty:1},{id:Math.ceil(Math.random()*99999999)+1+new Date().getTime(),category:"E",name:"\u9810\u8A2DE\u8CDE",qty:1}],ticketList:[]}),getters:{},actions:{reNewAward(Z){let B=this;this.awardList=Z,this.ticketList=[],this.awardList.forEach(z=>{for(let T=0;T<z.qty;T++)B.ticketList.push({category:z.category,name:z.name,id:Math.ceil(Math.random()*99999999)+1+new Date().getTime(),openTime:null})})},ticketOpen(Z){let B=this.ticketList.find(z=>z.id==Z);B.openTime=R(new Date().getTime()).tz("Asia/Taipei").format("YYYY/MM/DD HH:mm:ss")},insertData(Z){this.awardList=Z.awardSettings,this.ticketList=Z.ticketData}}});export{$t as u};
