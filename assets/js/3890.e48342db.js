(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3890],{23508:(e,t,r)=>{"use strict";var o=r(64836);t.Z=void 0;var n=o(r(64938)),a=r(85893),i=(0,n.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=i},74065:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var o=r(63366),n=r(87462),a=r(67294),i=(r(76607),r(86010)),s=r(94780),d=r(81719),l=r(78884),c=r(98885),u=r(53204),p=r(53566),f=r(62097),m=r(84771),h=r(34867),x=r(1588);function v(e){return(0,h.Z)("MuiCollapse",e)}(0,x.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var g=r(85893);const b=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Z=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.orientation],"entered"===r.state&&t.entered,"exited"===r.state&&!r.in&&"0px"===r.collapsedSize&&t.hidden]}})((({theme:e,ownerState:t})=>(0,n.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,n.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"}))),y=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((({ownerState:e})=>(0,n.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),w=(0,d.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((({ownerState:e})=>(0,n.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),R=a.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiCollapse"}),{addEndListener:d,children:h,className:x,collapsedSize:R="0px",component:S,easing:C,in:M,onEnter:N,onEntered:P,onEntering:k,onExit:E,onExited:$,onExiting:j,orientation:W="vertical",style:G,timeout:A=u.x9.standard,TransitionComponent:T=c.ZP}=r,_=(0,o.Z)(r,b),I=(0,n.Z)({},r,{orientation:W,collapsedSize:R}),z=(e=>{const{orientation:t,classes:r}=e,o={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,s.Z)(o,v,r)})(I),B=(0,f.Z)(),O=a.useRef(),D=a.useRef(null),L=a.useRef(),V="number"==typeof R?`${R}px`:R,q="horizontal"===W,H=q?"width":"height";a.useEffect((()=>()=>{clearTimeout(O.current)}),[]);const F=a.useRef(null),Y=(0,m.Z)(t,F),K=e=>t=>{if(e){const r=F.current;void 0===t?e(r):e(r,t)}},U=()=>D.current?D.current[q?"clientWidth":"clientHeight"]:0,J=K(((e,t)=>{D.current&&q&&(D.current.style.position="absolute"),e.style[H]=V,N&&N(e,t)})),Q=K(((e,t)=>{const r=U();D.current&&q&&(D.current.style.position="");const{duration:o,easing:n}=(0,p.C)({style:G,timeout:A,easing:C},{mode:"enter"});if("auto"===A){const t=B.transitions.getAutoHeightDuration(r);e.style.transitionDuration=`${t}ms`,L.current=t}else e.style.transitionDuration="string"==typeof o?o:`${o}ms`;e.style[H]=`${r}px`,e.style.transitionTimingFunction=n,k&&k(e,t)})),X=K(((e,t)=>{e.style[H]="auto",P&&P(e,t)})),ee=K((e=>{e.style[H]=`${U()}px`,E&&E(e)})),te=K($),re=K((e=>{const t=U(),{duration:r,easing:o}=(0,p.C)({style:G,timeout:A,easing:C},{mode:"exit"});if("auto"===A){const r=B.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${r}ms`,L.current=r}else e.style.transitionDuration="string"==typeof r?r:`${r}ms`;e.style[H]=V,e.style.transitionTimingFunction=o,j&&j(e)}));return(0,g.jsx)(T,(0,n.Z)({in:M,onEnter:J,onEntered:X,onEntering:Q,onExit:ee,onExited:te,onExiting:re,addEndListener:e=>{"auto"===A&&(O.current=setTimeout(e,L.current||0)),d&&d(F.current,e)},nodeRef:F,timeout:"auto"===A?null:A},_,{children:(e,t)=>(0,g.jsx)(Z,(0,n.Z)({as:S,className:(0,i.Z)(z.root,x,{entered:z.entered,exited:!M&&"0px"===V&&z.hidden}[e]),style:(0,n.Z)({[q?"minWidth":"minHeight"]:V},G),ownerState:(0,n.Z)({},I,{state:e}),ref:Y},t,{children:(0,g.jsx)(y,{ownerState:(0,n.Z)({},I,{state:e}),className:z.wrapper,ref:D,children:(0,g.jsx)(w,{ownerState:(0,n.Z)({},I,{state:e}),className:z.wrapperInner,children:h})})}))}))}));R.muiSupportAuto=!0;const S=R;var C=r(70918),M=r(42248),N=r(42293);function P(e){return(0,h.Z)("MuiAccordion",e)}const k=(0,x.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),E=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],$=(0,d.ZP)(C.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${k.region}`]:t.region},t.root,!r.square&&t.rounded,!r.disableGutters&&t.gutters]}})((({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${k.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${k.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),(({theme:e,ownerState:t})=>(0,n.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&{[`&.${k.expanded}`]:{margin:"16px 0"}}))),j=a.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiAccordion"}),{children:d,className:c,defaultExpanded:u=!1,disabled:p=!1,disableGutters:f=!1,expanded:m,onChange:h,square:x=!1,TransitionComponent:v=S,TransitionProps:b}=r,Z=(0,o.Z)(r,E),[y,w]=(0,N.Z)({controlled:m,default:u,name:"Accordion",state:"expanded"}),R=a.useCallback((e=>{w(!y),h&&h(e,!y)}),[y,h,w]),[C,...k]=a.Children.toArray(d),j=a.useMemo((()=>({expanded:y,disabled:p,disableGutters:f,toggle:R})),[y,p,f,R]),W=(0,n.Z)({},r,{square:x,disabled:p,disableGutters:f,expanded:y}),G=(e=>{const{classes:t,square:r,expanded:o,disabled:n,disableGutters:a}=e,i={root:["root",!r&&"rounded",o&&"expanded",n&&"disabled",!a&&"gutters"],region:["region"]};return(0,s.Z)(i,P,t)})(W);return(0,g.jsxs)($,(0,n.Z)({className:(0,i.Z)(G.root,c),ref:t,ownerState:W,square:x},Z,{children:[(0,g.jsx)(M.Z.Provider,{value:j,children:C}),(0,g.jsx)(v,(0,n.Z)({in:y,timeout:"auto"},b,{children:(0,g.jsx)("div",{"aria-labelledby":C.props.id,id:C.props["aria-controls"],role:"region",className:G.region,children:k})}))]}))}))},42248:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const o=r(67294).createContext({})},47028:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var o=r(87462),n=r(63366),a=r(67294),i=r(86010),s=r(94780),d=r(81719),l=r(78884),c=r(34867);function u(e){return(0,c.Z)("MuiAccordionDetails",e)}(0,r(1588).Z)("MuiAccordionDetails",["root"]);var p=r(85893);const f=["className"],m=(0,d.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({padding:e.spacing(1,2,2)}))),h=a.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiAccordionDetails"}),{className:a}=r,d=(0,n.Z)(r,f),c=r,h=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},u,t)})(c);return(0,p.jsx)(m,(0,o.Z)({className:(0,i.Z)(h.root,a),ref:t,ownerState:c},d))}))},29618:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Z});var o=r(63366),n=r(87462),a=r(67294),i=r(86010),s=r(94780),d=r(81719),l=r(78884),c=r(50522),u=r(42248),p=r(34867);function f(e){return(0,p.Z)("MuiAccordionSummary",e)}const m=(0,r(1588).Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);var h=r(85893);const x=["children","className","expandIcon","focusVisibleClassName","onClick"],v=(0,d.ZP)(c.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{const r={duration:e.transitions.duration.shortest};return(0,n.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],r),[`&.${m.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${m.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${m.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${m.expanded}`]:{minHeight:64}})})),g=(0,d.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((({theme:e,ownerState:t})=>(0,n.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${m.expanded}`]:{margin:"20px 0"}}))),b=(0,d.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${m.expanded}`]:{transform:"rotate(180deg)"}}))),Z=a.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiAccordionSummary"}),{children:d,className:c,expandIcon:p,focusVisibleClassName:m,onClick:Z}=r,y=(0,o.Z)(r,x),{disabled:w=!1,disableGutters:R,expanded:S,toggle:C}=a.useContext(u.Z),M=(0,n.Z)({},r,{expanded:S,disabled:w,disableGutters:R}),N=(e=>{const{classes:t,expanded:r,disabled:o,disableGutters:n}=e,a={root:["root",r&&"expanded",o&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]};return(0,s.Z)(a,f,t)})(M);return(0,h.jsxs)(v,(0,n.Z)({focusRipple:!1,disableRipple:!0,disabled:w,component:"div","aria-expanded":S,className:(0,i.Z)(N.root,c),focusVisibleClassName:(0,i.Z)(N.focusVisible,m),onClick:e=>{C&&C(e),Z&&Z(e)},ref:t,ownerState:M},y,{children:[(0,h.jsx)(g,{className:N.content,ownerState:M,children:d}),p&&(0,h.jsx)(b,{className:N.expandIconWrapper,ownerState:M,children:p})]}))}))},64489:(e,t,r)=>{"use strict";r.d(t,{Z:()=>N});var o=r(87462),n=r(63366),a=r(67294),i=(r(76607),r(86010)),s=r(94780),d=r(81719),l=r(78884),c=r(29630),u=r(41796),p=r(58175),f=r(85893);const m=(0,p.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var h=r(50522);const x=(0,d.ZP)(h.Z)((({theme:e})=>(0,o.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,o.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,o.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,u._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,u._4)(e.palette.grey[600],.12)})}))),v=(0,d.ZP)(m)({width:24,height:16});const g=function(e){const t=e;return(0,f.jsx)("li",{children:(0,f.jsx)(x,(0,o.Z)({focusRipple:!0},e,{ownerState:t,children:(0,f.jsx)(v,{ownerState:t})}))})};var b=r(34867);function Z(e){return(0,b.Z)("MuiBreadcrumbs",e)}const y=(0,r(1588).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),w=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=(0,d.ZP)(c.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${y.li}`]:t.li},t.root]})({}),S=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),C=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function M(e,t,r,o){return e.reduce(((n,a,i)=>(i<e.length-1?n=n.concat(a,(0,f.jsx)(C,{"aria-hidden":!0,className:t,ownerState:o,children:r},`separator-${i}`)):n.push(a),n)),[])}const N=a.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiBreadcrumbs"}),{children:d,className:c,component:u="nav",expandText:p="Show path",itemsAfterCollapse:m=1,itemsBeforeCollapse:h=1,maxItems:x=8,separator:v="/"}=r,b=(0,n.Z)(r,w),[y,C]=a.useState(!1),N=(0,o.Z)({},r,{component:u,expanded:y,expandText:p,itemsAfterCollapse:m,itemsBeforeCollapse:h,maxItems:x,separator:v}),P=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},Z,t)})(N),k=a.useRef(null),E=a.Children.toArray(d).filter((e=>a.isValidElement(e))).map(((e,t)=>(0,f.jsx)("li",{className:P.li,children:e},`child-${t}`)));return(0,f.jsx)(R,(0,o.Z)({ref:t,component:u,color:"text.secondary",className:(0,i.Z)(P.root,c),ownerState:N},b,{children:(0,f.jsx)(S,{className:P.ol,ref:k,ownerState:N,children:M(y||x&&E.length<=x?E:(e=>h+m>=e.length?e:[...e.slice(0,h),(0,f.jsx)(g,{"aria-label":p,onClick:()=>{C(!0);const e=k.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-m,e.length)])(E),P.separator,v,N)})}))}))},78016:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(35266),n=r(36622),a=r(81719),i=r(78884);const s=(0,o.Z)({createStyledComponent:(0,a.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,n.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,i.Z)({props:e,name:"MuiContainer"})})},35266:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var o=r(63366),n=r(87462),a=r(67294),i=r(86010),s=r(28320),d=r(34867),l=r(94780),c=r(29628),u=r(13264),p=r(10360),f=r(85893);const m=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,p.Z)(),x=(0,u.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),v=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:h});function g(e={}){const{createStyledComponent:t=x,useThemeProps:r=v,componentName:c="MuiContainer"}=e,u=t((({theme:e,ownerState:t})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const o=r,n=e.breakpoints.values[o];return 0!==n&&(t[e.breakpoints.up(o)]={maxWidth:`${n}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,n.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),p=a.forwardRef((function(e,t){const a=r(e),{className:p,component:h="div",disableGutters:x=!1,fixed:v=!1,maxWidth:g="lg"}=a,b=(0,o.Z)(a,m),Z=(0,n.Z)({},a,{component:h,disableGutters:x,fixed:v,maxWidth:g}),y=((e,t)=>{const{classes:r,fixed:o,disableGutters:n,maxWidth:a}=e,i={root:["root",a&&`maxWidth${(0,s.Z)(String(a))}`,o&&"fixed",n&&"disableGutters"]};return(0,l.Z)(i,(e=>(0,d.Z)(t,e)),r)})(Z,c);return(0,f.jsx)(u,(0,n.Z)({as:h,ownerState:Z,className:(0,i.Z)(y.root,p),ref:t},b))}));return p}},13264:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const o=(0,r(70182).ZP)()},31486:function(e,t){var r,o,n;o=[],r=function(){"use strict";function e(e,t){var r,o,n;for(r=1,o=arguments.length;r<o;++r)if(null!=(t=arguments[r]))for(n in t)s(t,n)&&(e[n]=t[n]);return e}function t(e,t){return t.length-e.length}function r(e,t){return e.factor-t.factor}function o(e){return e.replace(/([.*+?=^!:${}()|[\]/\\])/g,"\\$1")}function n(e,t){var r,o;for(r=0,o=e.length;r<o;++r)t(e[r],r)}function a(e,t){var r;for(r in e)s(e,r)&&t(e[r],r)}var i,s=(i=Object.prototype.hasOwnProperty,function(e,t){return null!=e&&i.call(e,t)});function d(e,t){for(;"string"==typeof t;)t=e[t];return t}function l(e){this._prefixes=e;var n=[],i=[];a(e,(function(e,t){n.push(o(t)),i.push({factor:e,prefix:t})}));var d=this._lcPrefixes={};a(e,(function(t,r){var o=r.toLowerCase();s(e,o)||(d[o]=r)})),i.sort(r),this._list=i,n.sort(t),this._regexp=new RegExp("^\\s*(-)?\\s*(\\d+(?:\\.\\d+)?)\\s*("+n.join("|")+")\\s*(.*)\\s*?$","i")}l.create=function(e,t,r){var o={};return void 0===r&&(r=0),n(e,(function(e,n){o[e]=Math.pow(t,n+r)})),new l(o)},l.prototype.findPrefix=function(e){for(var t,r=this._list,o=0,n=r.length-1;o!==n;)r[t=o+n+1>>1].factor>e?n=t-1:o=t;return r[o]},l.prototype.parse=function(e,t){var r=e.match(this._regexp);if(null!==r){var o,n=r[3];if(s(this._prefixes,n))o=this._prefixes[n];else{if(t||(n=n.toLowerCase(),!s(this._lcPrefixes,n)))return;n=this._lcPrefixes[n],o=this._prefixes[n]}var a=+r[2];return void 0!==r[1]&&(a=-a),{factor:o,prefix:n,unit:r[4],value:a}}};var c={binary:l.create(",Ki,Mi,Gi,Ti,Pi,Ei,Zi,Yi".split(","),1024),SI:l.create("y,z,a,f,p,n,\xb5,m,,k,M,G,T,P,E,Z,Y".split(","),1e3,-8)},u={maxDecimals:2,separator:" ",unit:""},p={scale:"SI",strict:!1};function f(t,r){var o=(r=e({},u,r)).decimals;void 0!==o&&delete r.maxDecimals;var n=g(t,r);t=void 0!==o?n.value.toFixed(o):String(n.value);var a=n.prefix+r.unit;return""===a?t:t+r.separator+a}var m={scale:"binary",unit:"B"};function h(t,r){return f(t,void 0===r?m:e({},m,r))}function x(e,t){var r=v(e,t);return r.value*r.factor}function v(t,r){if("string"!=typeof t)throw new TypeError("str must be a string");r=e({},p,r);var o=d(c,r.scale);if(void 0===o)throw new Error("missing scale");var n=o.parse(t,r.strict);if(void 0===n)throw new Error("cannot parse str");return n}function g(t,r){if(0===t)return{value:0,prefix:""};if(t<0){var o=g(-t,r);return o.value=-o.value,o}if("number"!=typeof t||Number.isNaN(t))throw new TypeError("value must be a number");r=e({},p,r);var n,a=d(c,r.scale);if(void 0===a)throw new Error("missing scale");var i=r.maxDecimals,l="auto"===i;l?n=10:void 0!==i&&(n=Math.pow(10,i));var u,f=r.prefix;if(void 0!==f){if(!s(a._prefixes,f))throw new Error("invalid prefix");u=a._prefixes[f]}else{var m=a.findPrefix(t);if(void 0!==n)do{var h=(u=m.factor)/n;t=Math.round(t/h)*h}while((m=a.findPrefix(t)).factor!==u);else u=m.factor;f=m.prefix}return t=void 0===n?t/u:Math.round(t*n/u)/n,l&&Math.abs(t)>=10&&(t=Math.round(t)),{prefix:f,value:t}}return f.bytes=h,f.parse=x,x.raw=v,f.raw=g,f.Scale=l,f},void 0===(n="function"==typeof r?r.apply(t,o):r)||(e.exports=n)},40172:(e,t,r)=>{"use strict";t.ZP=t.oM=void 0;var o=a(r(19777)),n=a(r(43733));function a(e){return e&&e.__esModule?e:{default:e}}var i=o.default;t.ZP=i;var s=n.default;t.oM=s},19777:(e,t,r)=>{"use strict";t.__esModule=!0,t.default=void 0;var o=r(67294),n=r(85893),a=["className","children","ratio","style"];function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},i.apply(this,arguments)}var s="--aspect-ratio";class d extends o.Component{constructor(){super(...arguments),this.node=null,this.setNode=e=>{this.node=e}}componentDidUpdate(){if(this.node){var{node:e}=this;e.style.getPropertyValue(s)||e.style.setProperty(s,"("+this.props.ratio+")")}}render(){var e=this.props,{className:t,children:r,ratio:o,style:d}=e,l=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a),c=i({},d,{[s]:"("+o+")"});return(0,n.jsx)("div",i({className:t,ref:this.setNode,style:c},l,{children:r}))}}d.defaultProps={className:"react-aspect-ratio-placeholder",ratio:1};var l=d;t.default=l},43733:(e,t,r)=>{"use strict";t.__esModule=!0,t.default=void 0;var o=r(85893),n=["className","children","ratio","style"];function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a.apply(this,arguments)}var i="react-aspect-ratio-placeholder";var s=function(e){var{className:t=i,children:r,ratio:s=1,style:d}=e,l=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,n),c=a({},d,{"--aspect-ratio":"("+s+")"});return(0,o.jsx)("div",a({className:t,style:c},l,{children:r}))};t.default=s}}]);