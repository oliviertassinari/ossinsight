"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[3085],{39649:function(e,n,a){a.d(n,{N:function(){return u},Z:function(){return v}});var t=a(63366),l=a(87462),r=a(67294),i=a(86010),c=a(95999),o=a(53810),s="anchorWithStickyNavbar_y2LR",m="anchorWithHideOnScrollNavbar_3ly5",d=["id"],u=function(e){var n=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,l.Z)({},n,{id:void 0}),n.children))},v=function(e){return"h1"===e?u:(n=e,function(e){var a,u=e.id,v=(0,t.Z)(e,d),h=(0,o.LU)().navbar.hideOnScroll;return u?r.createElement(n,(0,l.Z)({},v,{className:(0,i.Z)("anchor",(a={},a[m]=h,a[s]=!h,a)),id:u}),v.children,r.createElement("a",{className:"hash-link",href:"#"+u,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(n,v)});var n}},73491:function(e,n,a){var t=a(87462),l=a(63366),r=a(67294),i=a(12859),c=a(39960),o=a(19055),s=a(39649),m=a(7488),d=["mdxType","originalType"];var u={head:function(e){var n=r.Children.map(e.children,(function(e){return function(e){var n,a;if(null!=e&&null!=(n=e.props)&&n.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var t=e.props,i=(t.mdxType,t.originalType,(0,l.Z)(t,d));return r.createElement(e.props.originalType,i)}return e}(e)}));return r.createElement(i.Z,e,n)},code:function(e){var n=e.children;return(0,r.isValidElement)(n)?n:n.includes("\n")?r.createElement(o.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(c.Z,e)},pre:function(e){var n,a=e.children;return(0,r.isValidElement)(a)&&(0,r.isValidElement)(null==a||null==(n=a.props)?void 0:n.children)?a.props.children:r.createElement(o.Z,(0,r.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var n=r.Children.toArray(e.children),a=n.find((function(e){var n;return"summary"===(null==e||null==(n=e.props)?void 0:n.mdxType)})),l=r.createElement(r.Fragment,null,n.filter((function(e){return e!==a})));return r.createElement(m.Z,(0,t.Z)({},e,{summary:a}),l)},h1:(0,s.Z)("h1"),h2:(0,s.Z)("h2"),h3:(0,s.Z)("h3"),h4:(0,s.Z)("h4"),h5:(0,s.Z)("h5"),h6:(0,s.Z)("h6")};n.Z=u},87529:function(e,n,a){a.r(n),a.d(n,{default:function(){return d}});var t=a(67294),l=a(86010),r=a(77019),i=a(3905),c=a(73491),o=a(51575),s=a(53810),m="mdxPageWrapper_eQvw";var d=function(e){var n=e.content,a=n.frontMatter,d=n.metadata,u=a.title,v=a.description,h=a.wrapperClassName,f=a.hide_table_of_contents,p=d.permalink;return t.createElement(r.Z,{title:u,description:v,permalink:p,wrapperClassName:null!=h?h:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",m)},t.createElement("div",{className:(0,l.Z)("col",!f&&"col--8")},t.createElement(i.Zo,{components:c.Z},t.createElement(n,null))),!f&&n.toc&&t.createElement("div",{className:"col col--2"},t.createElement(o.Z,{toc:n.toc,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level})))))}},51575:function(e,n,a){a.d(n,{Z:function(){return m}});var t=a(87462),l=a(63366),r=a(67294),i=a(86010),c=a(25002),o="tableOfContents_vrFS",s=["className"];var m=function(e){var n=e.className,a=(0,l.Z)(e,s);return r.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",n)},r.createElement(c.Z,(0,t.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:function(e,n,a){a.d(n,{Z:function(){return s}});var t=a(87462),l=a(63366),r=a(67294),i=a(53810),c=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var n=e.toc,a=e.className,t=e.linkClassName,l=e.isChild;return n.length?r.createElement("ul",{className:l?void 0:a},n.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:t}))}))):null}function s(e){var n=e.toc,a=e.className,s=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,d=void 0===m?"table-of-contents__link":m,u=e.linkActiveClassName,v=void 0===u?void 0:u,h=e.minHeadingLevel,f=e.maxHeadingLevel,p=(0,l.Z)(e,c),g=(0,i.LU)(),N=null!=h?h:g.tableOfContents.minHeadingLevel,Z=null!=f?f:g.tableOfContents.maxHeadingLevel,E=(0,i.DA)({toc:n,minHeadingLevel:N,maxHeadingLevel:Z}),k=(0,r.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:N,maxHeadingLevel:Z}}),[d,v,N,Z]);return(0,i.Si)(k),r.createElement(o,(0,t.Z)({toc:E,className:s,linkClassName:d},p))}}}]);