"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[1372],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,v=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(v,a(a({ref:t},s),{},{components:r})):n.createElement(v,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26777:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],c={sidebar_position:0,title:"Overview",description:"OSS Insight API Overview",sidebar_label:"Overview",slug:"/"},l=void 0,u={unversionedId:"overview",id:"overview",title:"Overview",description:"OSS Insight API Overview",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/pingcap/ossinsight/tree/main/docs/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Overview",description:"OSS Insight API Overview",sidebar_label:"Overview",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Trending Repos",permalink:"/docs/api/trending-repos"}},s=[{value:"API Host",id:"api-host",children:[],level:2},{value:"API Rate Limit",id:"api-rate-limit",children:[],level:2}],p={toc:s};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"api-host"},"API Host"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://api.ossinsight.io")),(0,o.kt)("h2",{id:"api-rate-limit"},"API Rate Limit"),(0,o.kt)("p",null,"For each IP address, the rate limit allows for up to 60 requests per minute."))}f.isMDXComponent=!0}}]);