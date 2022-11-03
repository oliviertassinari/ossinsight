"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7046],{82680:(e,t,n)=>{n.d(t,{o:()=>c,a:()=>E});var r=n(87462),a=n(67294),o=n(79072),l=n(61802);function i(e,t,n){return 0===Object.keys(t).length||"string"==typeof e?e:"function"==typeof e[Symbol.iterator]?Array.from(e).map(((e,n)=>i(e,t,n))):a.isValidElement(e)?(0,a.cloneElement)(e,Object.assign({},e.props,t,{key:e.key??n})):e}function c(e){let{xs:t,sm:n,md:c,lg:m,xl:s,children:A,...d}=e;const u=(0,a.useMemo)((()=>{const e={};return(0,l.nf)(t)&&(e.xs=t),(0,l.nf)(n)&&(e.sm=n),(0,l.nf)(c)&&(e.md=c),(0,l.nf)(m)&&(e.lg=m),(0,l.nf)(s)&&(e.xl=s),e}),[t,n,c,m,s]);return a.createElement(o.ZP,(0,r.Z)({container:!0,spacing:[2,4,8]},d),i(A,u))}var m=n(49837),s=n(29630),A=n(40172),d=n(54225),u=n(21448),P=n(30120),p=n(50522),f=n(39960),h=n(13919);function E(e){let{title:t,aspectRatio:n=16/9,image:i,description:c,readMore:E,buttonText:C="read more",buttonVariant:g,codeStyleDescription:v=!0,elevation:z,cardSx:D,tags:j,link:w,top:Z,size:b,...x}=e;const W=a.createElement(a.Fragment,null,a.createElement(s.Z,{variant:"h3",sx:{mb:1,fontWeight:"bold",minHeight:50,fontSize:"small"===b?18:void 0}},t),(0,l.nf)(i)?a.createElement(A.ZP,{ratio:n},i):void 0,(0,l.nf)(j)?a.createElement(P.Z,{sx:{my:2}},j.map(((e,t)=>a.createElement(u.Z,{size:"small",label:e,key:t,sx:{mr:2}})))):void 0,(0,l.nf)(c)&&a.createElement(s.Z,{variant:"body1",sx:{mt:1,color:"text.secondary",minHeight:72,fontSize:"small"===b?14:void 0}},c),E?a.createElement(d.Z,{component:f.Z,rel:(0,h.Z)(E)?void 0:"noopener",to:E,size:"small",variant:g??"text",sx:{mt:2}},C):void 0);return a.createElement(o.ZP,(0,r.Z)({item:!0},x),Z,function(e,t){let{link:n,cardSx:r,elevation:o,size:l}=t;const[i,c]=(0,a.useState)(o??3),s=(0,a.useCallback)((()=>{c(2*(o??3))}),[]),A=(0,a.useCallback)((()=>{c(o??3)}),[]);return n?a.createElement(m.Z,{sx:{userSelect:"none",...r},elevation:i,onMouseEnter:s,onMouseLeave:A,onMouseDown:A},a.createElement(p.Z,{component:f.Z,rel:(0,h.Z)(n)?void 0:"noopener",to:n,sx:{textAlign:"left",p:"small"===l?2:4,display:"block","&:hover":{textDecoration:"none",color:"unset",elevation:4}}},e)):a.createElement(m.Z,{sx:{userSelect:"none",p:"small"===l?2:4,...r},elevation:i??3},e)}(W,{link:w,elevation:z,cardSx:D,size:b}))}},77249:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294),a=n(54364),o=n(26613),l=n(30120);const i=e=>e.toFixed(1).replace(/[.,]0$/,""),c=r.createElement(a.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom"}}),m=r.createElement(o.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom"}}),s="#E30C34",A="#52FF52",d=e=>{let{val:t,suffix:n,reverse:a=!1}=e;return t>0?r.createElement("span",{className:"diff",style:{color:a?s:A}},a?m:c,r.createElement(l.Z,{component:"span",fontSize:14},i(t),n)):t<0?r.createElement("span",{className:"diff",style:{color:a?A:s}},a?c:m,r.createElement(l.Z,{component:"span",fontSize:14},i(-t),n)):r.createElement("span",{className:"diff",style:{color:"gray"}})}},69050:(e,t,n)=>{n.d(t,{V:()=>p,Z:()=>P});var r=n(30120),a=n(29630),o=n(9144),l=n(77249),i=n(39960),c=n(44731),m=n(9566),s=n(67294),A=n(91655),d=n(81719),u=n(16550);function P(e){let{variant:t="clickable",name:n,repos:A,collectionRepos:d}=e;const P=(0,u.k6)(),p=(0,s.useCallback)((()=>{P.push(`/collections/${(0,m.o)(n)}`)}),[n]);return s.createElement(f,{onClick:p,className:t},s.createElement(a.Z,{variant:"body1",fontSize:16},n),s.createElement(a.Z,{variant:"body2",color:"#7C7C7C",mt:2,mb:2},A," repositories"),d.map((e=>s.createElement(o.Z,{key:e.repo_id,direction:"row",mt:1,alignItems:"center"},s.createElement(r.Z,{maxWidth:48,minWidth:48},e.rank,s.createElement(l.Z,{val:e.rank_changes})),s.createElement(r.Z,{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},s.createElement(i.Z,{href:`/analyze/${e.repo_name}`,target:"_blank"},s.createElement(o.Z,{direction:"row",alignItems:"center"},s.createElement(r.Z,{component:"span",display:"inline-flex",bgcolor:"lightgrey",borderRadius:"24px",padding:"0px",alignItems:"center",justifyContent:"center",sx:{verticalAlign:"text-bottom"},mr:1},s.createElement(c.Z,{src:`https://github.com/${e.repo_name.split("/")[0]}.png`})),s.createElement(r.Z,{component:"span",whiteSpace:"nowrap",ml:1},e.repo_name))))))),"link"===t?s.createElement(r.Z,{mt:2,fontSize:14},s.createElement(i.Z,{href:`/collections/${(0,m.o)(n)}`,target:"_blank"},"> See All")):s.createElement(i.Z,{href:`/collections/${(0,m.o)(n)}`,target:"_blank",hidden:!0},"> See All"))}function p(){return s.createElement(r.Z,{border:"2px dashed #3c3c3c",p:2,borderRadius:1,sx:{"&:not(:first-of-type)":{ml:2}}},s.createElement(A.Z,{width:150}),s.createElement(A.Z,{width:160,sx:{mt:2}}),s.createElement(A.Z,{width:120,sx:{my:2}}),[0,1,2].map((e=>s.createElement(o.Z,{key:e,direction:"row"},s.createElement(A.Z,{width:48}),s.createElement(A.Z,{width:36,height:36,variant:"circular",sx:{mx:1}}),s.createElement(A.Z,{width:120})))))}const f=(0,d.ZP)(r.Z)((e=>{let{theme:t}=e;return{border:"2px dashed #3c3c3c",padding:t.spacing(2),borderRadius:t.spacing(1),"&:not(:first-of-type)":{marginLeft:t.spacing(2)},"&.clickable":{cursor:"pointer",transition:"box-shadow .2s ease, transform .2s ease","&:hover":{boxShadow:t.shadows[16],transform:"translateY(-1px) scale(1.02)"}}}}))},71772:(e,t,n)=>{n.d(t,{K:()=>A,b:()=>s});var r=n(28084),a=n(9566),o=n(67294),l=n(8100),i=n(31389),c=n(64063),m=n.n(c);function s(){const{collections:e}=(0,r.eZ)("plugin-prefetch"),{data:t}=(0,l.ZP)("static/collections",{fetcher:i.vE.getCollections,fallbackData:e,compare:m()});return(0,o.useMemo)((()=>(null==t?void 0:t.data.map((e=>({...e,slug:(0,a.o)(e.name)}))))??[]),[t])}function A(e){const t=s();return(0,o.useMemo)((()=>t.find((t=>t.slug===e))),[t,e])}},8899:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var r=n(67294),a=n(78016),o=n(84451),l=n(71772),i=n(16550),c=n(95702),m=n(91262),s=n(81719),A=n(50119);const d="wordCloudContainer_jrWB";var u=n(61802);function P(){const e=(0,l.b)(),t=(0,r.useMemo)((()=>e.map((e=>({text:e.name,value:16,slug:e.slug})))),[e]),n=(0,i.k6)(),a=(0,r.useRef)(null),o=(0,c.Z)(a),s=function(e){void 0===e&&(e=0);return function(){const t=1e4*Math.sin(e++);return t-Math.floor(t)}}();return r.createElement(p,{className:d,ref:a},r.createElement(m.Z,null,(()=>r.createElement(r.Fragment,null,(0,u.nf)(o)&&r.createElement(A.Z,{width:o.width,height:o.height,data:t,font:"system-ui",fontStyle:"italic",fontWeight:"bold",fontSize:()=>16,random:s,rotate:()=>90*(~~(2*s())-1),onWordClick:(e,t)=>{n.push(`/collections/${t.slug}`)}})))))}const p=(0,s.ZP)("div")({height:400});var f=n(87462),h=n(14454),E=n(69050),C=n(79072),g=n(85390),v=n(87054),z=n(44373),D=n(85529),j=n(9041),w=n(26432),Z=n(77169);let b;!function(e){e.alphabetical="alphabetical",e.recent="recent"}(b||(b={}));const x=(0,s.ZP)(g.Z)((e=>{let{theme:t}=e;return{"& .MuiToggleButtonGroup-grouped":{margin:t.spacing(.5),border:0,"&.Mui-disabled":{border:0},"&:not(:first-of-type)":{margin:t.spacing(.5),borderRadius:t.shape.borderRadius},"&:first-of-type":{borderRadius:t.shape.borderRadius}}}}));function W(e){let{sorter:t,search:n}=e;const{data:a,loading:o}=(0,h.I)(),l=(0,r.useMemo)((()=>{let e,r;switch(t){case b.alphabetical:e=(e,t)=>e.name>t.name?1:e.name===t.name?0:-1;break;case b.recent:e=(e,t)=>e.id<t.id?1:e.id===t.id?0:-1}return r=n?e=>e.name.toLowerCase().includes(n.toLowerCase()):()=>!0,(null==a?void 0:a.data.filter(r).sort(e))??[]}),[a,t,n]);return o?r.createElement(C.ZP,{container:!0,spacing:2},[0,1,2,3,4].map((e=>r.createElement(C.ZP,(0,f.Z)({key:e,item:!0},k),r.createElement(E.V,null))))):r.createElement(C.ZP,{container:!0,spacing:2},l.map((e=>{let{id:t,name:n,repos:a,collectionRepos:o}=e;return r.createElement(C.ZP,(0,f.Z)({key:t,item:!0},k),r.createElement(E.Z,{name:n,repos:a,collectionRepos:o}))})))}const k={sm:12,md:6,lg:4,xl:3};var T=n(9144),y=n(29630),S=n(54225),M=n(96540),V=n(39960);const L="Explore Collections",B="Find insights about the monthly or historical rankings and trends in technical fields with curated repository lists.",O=()=>{const[e,t]=function(){const[e,t]=(0,r.useState)(b.alphabetical);return[e,r.createElement(x,{size:"small",value:e,onChange:(e,n)=>{n&&t(n)},unselectable:"off",exclusive:!0},r.createElement(v.Z,{value:b.alphabetical},"A - Z"),r.createElement(z.Z,{flexItem:!0,orientation:"vertical",sx:{width:"1px"},color:"#3c3c3c"}),r.createElement(v.Z,{value:b.recent},"NEW ",r.createElement(D.veu,null)))]}(),[n,l]=function(){const[e,t]=(0,r.useState)(""),n=(0,w.Z)((e=>{t(e.target.value)}));return[e,r.createElement(Z.Z,{variant:"outlined",size:"small",placeholder:"Search...",value:e,onChange:n,InputProps:{startAdornment:r.createElement(j.Z,{position:"start"},r.createElement(D.W1M,null))}})]}();return r.createElement(o.Z,{title:L,description:B},r.createElement(a.Z,{maxWidth:"lg",sx:{py:8}},r.createElement(y.Z,{variant:"h1",fontSize:28,mb:2,align:"center"},L),r.createElement(y.Z,{variant:"body1",fontSize:16,mb:2,align:"center"},B),r.createElement(P,null),r.createElement(T.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",my:2},t,l),r.createElement(W,{sorter:e,search:n}),r.createElement(y.Z,{variant:"body1",align:"center",mt:2},"Not interested in a collection?",r.createElement(S.Z,{component:V.Z,rel:"noopener",href:"https://github.com/pingcap/ossinsight#how-to-add-collections",sx:{ml:1},variant:"contained",color:"primary",startIcon:r.createElement(M.Z,null)},"Add a Collection"))))}},33457:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=n(30120),o=n(78016),l=n(41556);const i="#242526",c="#1C1E21";function m(e){let{id:t,darker:n=!1,pt:m,maxWidth:s="xl",children:A}=e;return r.createElement(a.Z,{component:"section",id:t,sx:[(0,l.j)("py",2,4,6),{backgroundColor:n?c:i,pt:m}]},r.createElement(o.Z,{maxWidth:s,sx:{padding:1}},A))}},41556:(e,t,n)=>{function r(e,t,n,r){return a=>({[e]:r,[a.breakpoints.down("lg")]:{[e]:n},[a.breakpoints.down("md")]:{[e]:t}})}function a(e,t){return"function"==typeof t?t(e):t}function o(e,t,n){return t=>({...a(t,n),[t.breakpoints.down("md")]:a(t,e),[t.breakpoints.down("lg")]:a(t,e)})}n.d(t,{j:()=>r,m:()=>o})},14454:(e,t,n)=>{n.d(t,{I:()=>l});var r=n(6971),a=n(67294),o=n(61802);function l(){const{data:e,loading:t,error:n}=(0,r.WV)("recent-hot-collections",{},!1);return{data:(0,a.useMemo)((()=>{if((0,o.Rw)(e))return;const t=[];for(const r of e.data){var n;r.id===(null==(n=t[t.length-1])?void 0:n.id)?t[t.length-1].collectionRepos.push({repo_id:r.repo_id,repo_name:r.repo_name,last_2nd_month_rank:r.last_2nd_month_rank,last_month_rank:r.last_month_rank,rank:r.rank,rank_changes:r.rank_changes}):t.push({id:r.id,name:r.name,repos:r.repos,visits:r.visits,collectionRepos:[{repo_id:r.repo_id,repo_name:r.repo_name,last_2nd_month_rank:r.last_2nd_month_rank,last_month_rank:r.last_month_rank,rank:r.rank,rank_changes:r.rank_changes}]})}return{...e,fields:e.fields,data:t}}),[e]),loading:t,error:n}}},84451:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(30120),o=n(25098),l=n(67294),i=n(29630),c=n(82680),m=n(33457),s=n(54225),A=n(39960);const d=e=>l.createElement(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:4}},l.createElement("img",{src:e,alt:"logo",width:"54",height:"54"}));function u(){return l.createElement(l.Fragment,null,l.createElement(m.Z,null,l.createElement(i.Z,{variant:"h2",sx:{fontSize:40},align:"center"},"Wonder how OSS Insight works?"),l.createElement(c.o,{sx:{mt:2},xs:12,sm:6,md:4},l.createElement(c.a,{title:"How do we implement OSS Insight ?",description:"Blog: 10 min read",codeStyleDescription:!1,readMore:"/blog/why-we-choose-tidb-to-support-ossinsight",buttonVariant:"outlined",top:d(n(2107).Z),cardSx:{backgroundColor:"#2c2c2c"}}),l.createElement(c.a,{title:"Use TiDB Cloud to Analyze GitHub Events in 10 Minutes",description:"Tutorial: 10 min read",codeStyleDescription:!1,readMore:"/blog/try-it-yourself",buttonVariant:"outlined",top:d(n(39784).Z),cardSx:{backgroundColor:"#2c2c2c"}}),l.createElement(c.a,{title:"Join a Workshop to Setup a Mini OSS Insight",description:"Tutorial: 25 min",codeStyleDescription:!1,readMore:"/docs/workshop/mini-ossinsight/introduction",buttonVariant:"outlined",top:d(n(82674).Z),cardSx:{backgroundColor:"#2c2c2c"}})),l.createElement(a.Z,{textAlign:"center",sx:{fontSize:24,mt:6}},"Want to create your own IDEAInsight in a day?\xa0",l.createElement("br",null),l.createElement(s.Z,{sx:{fontSize:24,fontWeight:"bold",verticalAlign:"baseline",textDecoration:"underline"},component:A.Z,href:"https://share.hsforms.com/1E-qtGQWrTVmctP8kBT34gw2npzm",rel:"noopener"},"Join a workshop!"))),l.createElement(m.Z,{darker:!0},l.createElement("div",{className:"text--center"},l.createElement("h3",null,"Follow us at\xa0",l.createElement("a",{href:"https://twitter.com/OSSInsight"},"@OSSInsight"),"\xa0and join the conversation using the hashtags",l.createElement("br",null),l.createElement("a",{href:"https://twitter.com/hashtag/OSSInsight",target:"_blank",rel:"noreferrer"},"#OSSInsight"),"\xa0",l.createElement("a",{href:"https://twitter.com/hashtag/TiDBCloud",target:"_blank",rel:"noreferrer"},"#TiDBCloud")))))}var P=n(61802);function p(e){let{children:t,header:n,footer:i=!0,dark:c,sideWidth:m,Side:s,...A}=e;return(0,l.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),l.createElement(o.Z,(0,r.Z)({},A,{header:n,sideWidth:m,side:m&&(0,P.nf)(s)?l.createElement(a.Z,{component:"aside",width:m,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},l.createElement(a.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},l.createElement(s,null))):void 0}),l.createElement("div",{hidden:!0,style:{height:72}}),l.createElement("div",{style:{paddingLeft:m,paddingRight:m}},l.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t,i?l.createElement(u,null):void 0)))}},2107:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},39784:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},82674:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);