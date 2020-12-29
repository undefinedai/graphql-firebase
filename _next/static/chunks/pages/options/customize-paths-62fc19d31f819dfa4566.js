_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"8u0c":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var c=n("nKUr"),o=n("YFqc"),r=n.n(o);function s(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"jumbotron",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-lg-8 offset-lg-2",children:[Object(c.jsx)("h1",{className:"display-4",children:"Customizing Paths"}),Object(c.jsx)("p",{className:"lead",children:Object(c.jsx)(r.a,{href:"/options",children:Object(c.jsx)("a",{children:"\u2190 Back to all options"})})})]})})})}),Object(c.jsx)("main",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-lg-8 offset-lg-2",children:[Object(c.jsx)("p",{children:"You have almost total control over what paths are used for the GraphQL Firebase resources created. Let\u2019s start with how they are served up out of the box:"}),Object(c.jsxs)("dl",{className:"row",children:[Object(c.jsx)("dt",{className:"col-6 col-md-4",children:Object(c.jsx)("code",{children:"/"})}),Object(c.jsx)("dd",{className:"col-6 col-md-8",children:"Dashboard Endpoint"}),Object(c.jsx)("dt",{className:"col-6 col-md-4",children:Object(c.jsx)("code",{children:"/graphql"})}),Object(c.jsx)("dd",{className:"col-6 col-md-8",children:"GraphQL Endpoint"}),Object(c.jsx)("dt",{className:"col-6 col-md-4",children:Object(c.jsx)("code",{children:"/mockql"})}),Object(c.jsx)("dd",{className:"col-6 col-md-8",children:"MockQL Endpoint"}),Object(c.jsx)("dt",{className:"col-6 col-md-4",children:Object(c.jsx)("code",{children:"/playground/graphql"})}),Object(c.jsx)("dd",{className:"col-6 col-md-8",children:"GraphQL Playground Endpoint"}),Object(c.jsx)("dt",{className:"col-6 col-md-4",children:Object(c.jsx)("code",{children:"/playground/mockql"})}),Object(c.jsx)("dd",{className:"col-6 col-md-8",children:"MockQL Playground Endpoint"}),Object(c.jsx)("dt",{className:"col-6 col-md-4",children:Object(c.jsx)("code",{children:"/voyager"})}),Object(c.jsx)("dd",{className:"col-6 col-md-8",children:"GraphQL Voyager Endpoint"})]}),Object(c.jsx)("p",{children:'We say that you have "almost total control" because there are two caveats:'}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["You can\u2019t have any naming conflicts, which means (for example), you can\u2019t have ",Object(c.jsx)("code",{children:"/foo"})," as both your GraphQL Endpoint and your Voyager Endpoint"]}),Object(c.jsxs)("li",{children:["Paths are relative to the root of your application. So if you configure your server in a way that results in GraphQL Firebase running in the ",Object(c.jsx)("code",{children:"/bar"})," subdirectory, you ",Object(c.jsx)("em",{children:"may"})," ","need to prefix your paths with ",Object(c.jsx)("code",{children:"/bar"}),"."]})]}),Object(c.jsx)("h2",{children:"Moving and renaming things"}),Object(c.jsxs)("p",{children:["Let\u2019s say you want to change your playground and voyager paths all to fall under a subdirectory path"," ",Object(c.jsx)("code",{children:"/resources"}),", but that you also want to change the voyager path to visualizer:"]}),Object(c.jsx)("pre",{className:"bg-light p-3",children:Object(c.jsxs)("code",{children:[Object(c.jsxs)("span",{className:"text-muted",children:["// We use ES6+ and typescript in our projects,",Object(c.jsx)("br",{}),"// but you can adjust this to use commonjs"]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),'import * as functions from "firebase-functions"\n\nimport { GraphQLFirebase } from "@undefinedai/graphql-firebase"\n\nexport const graphql = functions.https.onRequest(GraphQLFirebase({ \n  graphPlaygroundEndpoint: "/resources/playground/graphql",\n  mockPlaygroundEndpoint: "/resources/playground/mockql",\n  voyagerEndpoint: "/resources/visualizer"\n}))']})}),Object(c.jsx)("p",{children:Object(c.jsx)(r.a,{href:"/options",children:Object(c.jsx)("a",{children:"\u2190 Back to all options"})})})]})})})]})}},"RQ/n":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/options/customize-paths",function(){return n("8u0c")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var c=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var r=o(n("q1tI")),s=n("elyg"),a=n("nOHt"),l=n("vNVm"),i={};function d(e,t,n,c){if((0,s.isLocalURL)(t)){e.prefetch(t,n,c).catch((function(e){0}));var o=c&&"undefined"!==typeof c.locale?c.locale:e&&e.locale;i[t+"%"+n+(o?"%"+o:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),o=n&&n.pathname||"/",u=r.default.useMemo((function(){var t=(0,s.resolveHref)(o,e.href,!0),n=c(t,2),r=n[0],a=n[1];return{href:r,as:e.as?(0,s.resolveHref)(o,e.as):a||r}}),[o,e.href,e.as]),h=u.href,j=u.as,p=e.children,f=e.replace,b=e.shallow,m=e.scroll,x=e.locale;"string"===typeof p&&(p=r.default.createElement("a",null,p));var v=r.Children.only(p),O=v&&"object"===typeof v&&v.ref,y=(0,l.useIntersection)({rootMargin:"200px"}),g=c(y,2),N=g[0],w=g[1],E=r.default.useCallback((function(e){N(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,N]);(0,r.useEffect)((function(){var e=w&&t&&(0,s.isLocalURL)(h),c="undefined"!==typeof x?x:n&&n.locale,o=i[h+"%"+j+(c?"%"+c:"")];e&&!o&&d(n,h,j,{locale:c})}),[j,h,w,x,t,n]);var L={ref:E,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,c,o,r,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=c.indexOf("#")<0),t[o?"replace":"push"](n,c,{shallow:r,locale:l}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,h,j,f,b,m,x)},onMouseEnter:function(e){(0,s.isLocalURL)(h)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),d(n,h,j,{priority:!0}))}};return(e.passHref||"a"===v.type&&!("href"in v.props))&&(L.href=(0,s.addBasePath)((0,s.addLocale)(j,"undefined"!==typeof x?x:n&&n.locale,n&&n.defaultLocale))),r.default.cloneElement(v,L)};t.default=u},vNVm:function(e,t,n){"use strict";var c=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,o=(0,r.useRef)(),i=(0,r.useState)(!1),d=c(i,2),u=d[0],h=d[1],j=(0,r.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||u||e&&e.tagName&&(o.current=function(e,t,n){var c=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var c=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=c.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:c}),n}(n),o=c.id,r=c.observer,s=c.elements;return s.set(e,t),r.observe(e),function(){r.unobserve(e),0===s.size&&(r.disconnect(),l.delete(o))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,u]);return(0,r.useEffect)((function(){a||u||(0,s.default)((function(){return h(!0)}))}),[u]),[j,u]};var r=n("q1tI"),s=o(n("0G5g")),a="undefined"!==typeof IntersectionObserver;var l=new Map}},[["RQ/n",0,1,2]]]);