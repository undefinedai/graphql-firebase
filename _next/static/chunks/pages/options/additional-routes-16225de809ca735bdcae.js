_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"6AuS":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/options/additional-routes",function(){return n("sivO")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var s=o(n("q1tI")),a=n("elyg"),c=n("nOHt"),i=n("vNVm"),l={};function u(e,t,n,r){if((0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",d=s.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),s=n[0],c=n[1];return{href:s,as:e.as?(0,a.resolveHref)(o,e.as):c||s}}),[o,e.href,e.as]),f=d.href,p=d.as,h=e.children,j=e.replace,b=e.shallow,v=e.scroll,m=e.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var x=s.Children.only(h),g=x&&"object"===typeof x&&x.ref,y=(0,i.useIntersection)({rootMargin:"200px"}),O=r(y,2),w=O[0],N=O[1],E=s.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,s.useEffect)((function(){var e=N&&t&&(0,a.isLocalURL)(f),r="undefined"!==typeof m?m:n&&n.locale,o=l[f+"%"+p+(r?"%"+r:"")];e&&!o&&u(n,f,p,{locale:r})}),[p,f,N,m,t,n]);var L={ref:E,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,s,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:s,locale:i}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,f,p,j,b,v,m)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(n,f,p,{priority:!0}))}};return(e.passHref||"a"===x.type&&!("href"in x.props))&&(L.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof m?m:n&&n.locale,n&&n.defaultLocale))),s.default.cloneElement(x,L)};t.default=d},sivO:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n("nKUr"),o=n("YFqc"),s=n.n(o);function a(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"jumbotron",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-lg-8 offset-lg-2",children:[Object(r.jsx)("h1",{className:"display-4",children:"Additional Routes"}),Object(r.jsx)("p",{className:"lead",children:Object(r.jsx)(s.a,{href:"/options",children:Object(r.jsx)("a",{children:"\u2190 Back to all options"})})})]})})})}),Object(r.jsx)("main",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-lg-8 offset-lg-2",children:[Object(r.jsxs)("p",{children:["After the GraphQL server is set up, and after any MockQL server, playgrounds, voyager, and dashboard are configured (assuming they\u2019re not disabled), GraphQL Firebase looks for any"," ",Object(r.jsx)("code",{children:"additionalRoutes"})," you pass in. (If you need to customize ",Object(r.jsx)("em",{children:"before"})," these are set up,"," ",Object(r.jsx)(s.a,{href:"/options/middleware",children:Object(r.jsx)("a",{children:"see all the middleware options provided"})}),".)"]}),Object(r.jsxs)("p",{children:["You can add additional routes and handling to GraphQL Firebase by providing an"," ",Object(r.jsx)("a",{href:"https://expressjs.com/en/guide/routing.html#express-router",children:"Express Router"}),". In that router, you can add whatever else you want \u2013 a full express app to serve up any other paths or resources you want."]}),Object(r.jsx)("h2",{children:"Adding a Login Page"}),Object(r.jsxs)("p",{children:["For example, maybe you used the middleware, template customization, and headers options to add Firebase auth to all of your pages, but now you need an actual login page. You can add this with ",Object(r.jsx)("code",{children:"additionalRoutes"}),"."]}),Object(r.jsx)("pre",{className:"bg-light p-3",children:Object(r.jsxs)("code",{children:[Object(r.jsxs)("span",{className:"text-muted",children:["// We use ES6+ and typescript in our projects,",Object(r.jsx)("br",{}),"// but you can adjust this to use commonjs"]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),'import * as functions from "firebase-functions"\nimport express from "express"\n\nimport { GraphQLFirebase } from "@undefinedai/graphql-firebase"\n\nconst router = express.Router()\n\nrouter.get("/login", (req: Request, res: Response) => {\n  // Display login page\n})\n\nexport const graphql = functions.https.onRequest(GraphQLFirebase({ \n  additionalRoutes: router\n}))']})}),Object(r.jsx)("p",{children:Object(r.jsx)(s.a,{href:"/options",children:Object(r.jsx)("a",{children:"\u2190 Back to all options"})})})]})})})]})}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,o=(0,s.useRef)(),l=(0,s.useState)(!1),u=r(l,2),d=u[0],f=u[1],p=(0,s.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||d||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,s=r.observer,a=r.elements;return a.set(e,t),s.observe(e),function(){s.unobserve(e),0===a.size&&(s.disconnect(),i.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,s.useEffect)((function(){c||d||(0,a.default)((function(){return f(!0)}))}),[d]),[p,d]};var s=n("q1tI"),a=o(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[["6AuS",0,1,2]]]);