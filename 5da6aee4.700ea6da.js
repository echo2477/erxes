(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{138:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(138)),o={id:"deployment-overview",title:"Deployment Overview"},l={unversionedId:"overview/deployment-overview",id:"overview/deployment-overview",isDocsHomePage:!1,title:"Deployment Overview",description:"This document details the steps to perform the Erxes installation.",source:"@site/docs/overview/deployment-overview.md",slug:"/overview/deployment-overview",permalink:"/overview/deployment-overview",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/overview/deployment-overview.md",version:"current",lastUpdatedBy:"Batnasan Byambasuren",lastUpdatedAt:1599128271,sidebar:"docs",previous:{title:"Architecture Overview",permalink:"/overview/architecture-overview"},next:{title:"Integrations Overview",permalink:"/overview/integrations-overview"}},c=[{value:"Installing erxes",id:"installing-erxes",children:[{value:"Choose an installation method",id:"choose-an-installation-method",children:[]}]},{value:"Prerequisites",id:"prerequisites",children:[]}],s={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document details the steps to perform the Erxes installation."),Object(i.b)("h2",{id:"installing-erxes"},"Installing erxes"),Object(i.b)("p",null,"Modern server architectures and configurations are managed in many different ways. Some people still put new software somewhere in ",Object(i.b)("inlineCode",{parentName:"p"},"opt")," manually for each server while others have already jumped on the configuration management train and fully automated reproducible setups."),Object(i.b)("p",null,"Erxes can be installed in many different ways so you can pick whatever works best for you."),Object(i.b)("p",null,"We recommend to start with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/installation/docker"}),"docker images")," for the fastest way to get started and then pick one of the other, more flexible installation methods to build an easier to scale setup."),Object(i.b)("h3",{id:"choose-an-installation-method"},"Choose an installation method"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/installation/ubuntu"}),"Ubuntu 18.04")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/installation/aws"}),"AWS Marketplace")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/installation/digitalocean"}),"DigitalOcean Marketplace")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/installation/docker"}),"Docker")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/installation/heroku"}),"Heroku"))),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"MongoDB 3.6+"),Object(i.b)("li",{parentName:"ul"},"Redis 3.x+"),Object(i.b)("li",{parentName:"ul"},"RabbitMQ 3.8.x+")))}u.isMDXComponent=!0}}]);