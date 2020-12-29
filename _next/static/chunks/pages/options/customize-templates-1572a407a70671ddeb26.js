_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{ERbZ:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n("nKUr"),s=n("YFqc"),c=n.n(s);function i(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"jumbotron",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-lg-8 offset-lg-2",children:[Object(r.jsx)("h1",{className:"display-4",children:"Customizing Templates"}),Object(r.jsx)("p",{className:"lead",children:Object(r.jsx)(c.a,{href:"/options",children:Object(r.jsx)("a",{children:"\u2190 Back to all options"})})})]})})})}),Object(r.jsx)("main",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-lg-8 offset-lg-2",children:[Object(r.jsxs)("p",{children:["When serving up static pages like the playground, GraphQL Firebase uses one of the"," ",Object(r.jsx)("a",{href:"https://expressjs.com/en/guide/using-template-engines.html",children:"built-in template engines with Express"}),". If you\u2019ve never"," ",Object(r.jsx)("a",{href:"https://pugjs.org/api/getting-started.html",children:"built anything in Pug before"}),", we get it \u2013 it takes a little getting used to."]}),Object(r.jsxs)("p",{children:["We originally built our templates in react and converted them to static pages using ",Object(r.jsx)("a",{href:"https://nextjs.org/",children:"Next.js"})," (we love Next \u2013 it\u2019s how we built these docs), but the loading speed was kind of bad compared to how quickly the pug templates were loading."]}),Object(r.jsx)("p",{children:"(That\u2019s not a knock on Next \u2013 we think it has more to do with Express\u2019 built-in template handling versus serving up other static resources, but what do we know? Well, we just know that pug is super quick in Express.)"}),Object(r.jsx)("h2",{children:"Included Templates"}),Object(r.jsx)("p",{children:"GraphQL Firebase comes with three customizable templates written in pug:"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"dashboard.pug"}),Object(r.jsx)("li",{children:"playground.pug (handles both playgrounds)"}),Object(r.jsx)("li",{children:"voyager.pug"})]}),Object(r.jsx)("h2",{children:"Appending To (Extending) Templates"}),Object(r.jsx)("p",{children:"You can customize or override these by creating your own pug templates and passing their locations/paths to:"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("code",{children:"dashboardTemplate"})}),Object(r.jsx)("li",{children:Object(r.jsx)("code",{children:"playgroundTemplate"})}),Object(r.jsx)("li",{children:Object(r.jsx)("code",{children:"voyagerTemplate"})})]}),Object(r.jsxs)("p",{children:['Each template has three "blocks" that'," ",Object(r.jsx)("a",{href:"https://pugjs.org/language/inheritance.html",children:"you can extend with your own pug template"}),". You can append items to the ",Object(r.jsx)("code",{children:"head"})," block or the"," ",Object(r.jsx)("code",{children:"body"})," block, or add additional javascript to the"," ",Object(r.jsx)("code",{children:"scripts"})," block."]}),Object(r.jsxs)("p",{children:["For example, if you wanted to add a custom meta tag to the"," ",Object(r.jsx)("code",{children:"<head>"})," tag of the dashboard, you could create a template named ",Object(r.jsx)("code",{children:"my-dashboard.pug"})," like so:"]}),Object(r.jsx)("pre",{className:"bg-light p-3",children:Object(r.jsx)("code",{children:'extends node_modules/@undefinedai/graphql-firebase/lib/views/dashboard.pug\n\nblock append head\n  meta(name="twitter:title" content="Private GraphQL Dashboard")'})}),Object(r.jsxs)("p",{children:["The rest of the template will remain \u2013 but your meta tag will be ",Object(r.jsx)("em",{children:"appended"}),"."]}),Object(r.jsx)("h2",{children:"Overriding Templates"}),Object(r.jsxs)("p",{children:["If appending/prepending to the templates isn\u2019t flexible enough, you can override them completely. It works the same way as appending above, but you exclude the keyword ",Object(r.jsx)("code",{children:"append"})," ","(or ",Object(r.jsx)("code",{children:"prepend"}),")."]}),Object(r.jsx)("pre",{className:"bg-light p-3",children:Object(r.jsx)("code",{children:'extends node_modules/@undefinedai/graphql-firebase/lib/views/dashboard.pug\n\nblock head\n  meta(name="twitter:title" content="Private GraphQL Dashboard")'})}),Object(r.jsxs)("p",{children:["With this template, the body and script blocks remain in tact, but the head is replaced entirely with just this one new meta tag. Odds are \u2013 if you\u2019re replacing entire blocks, you\u2019ll want to preserve some things like the actual scripts or links included. You can find these in the GraphQL Firebase package in your ",Object(r.jsx)("code",{children:"node_modules"})," or"," ",Object(r.jsx)("a",{href:"https://github.com/undefinedai/graphql-firebase/tree/docs/module/src/views",children:"on Github"}),"."]}),Object(r.jsx)("p",{children:Object(r.jsx)(c.a,{href:"/options",children:Object(r.jsx)("a",{children:"\u2190 Back to all options"})})})]})})})]})}},"R0y/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/options/customize-templates",function(){return n("ERbZ")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),s=n("284h");t.__esModule=!0,t.default=void 0;var c=s(n("q1tI")),i=n("elyg"),a=n("nOHt"),o=n("vNVm"),l={};function d(e,t,n,r){if((0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var s=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(s?"%"+s:"")]=!0}}var h=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),s=n&&n.pathname||"/",h=c.default.useMemo((function(){var t=(0,i.resolveHref)(s,e.href,!0),n=r(t,2),c=n[0],a=n[1];return{href:c,as:e.as?(0,i.resolveHref)(s,e.as):a||c}}),[s,e.href,e.as]),u=h.href,p=h.as,j=e.children,b=e.replace,f=e.shallow,g=e.scroll,m=e.locale;"string"===typeof j&&(j=c.default.createElement("a",null,j));var x=c.Children.only(j),O=x&&"object"===typeof x&&x.ref,v=(0,o.useIntersection)({rootMargin:"200px"}),w=r(v,2),y=w[0],k=w[1],N=c.default.useCallback((function(e){y(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,y]);(0,c.useEffect)((function(){var e=k&&t&&(0,i.isLocalURL)(u),r="undefined"!==typeof m?m:n&&n.locale,s=l[u+"%"+p+(r?"%"+r:"")];e&&!s&&d(n,u,p,{locale:r})}),[p,u,k,m,t,n]);var E={ref:N,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,s,c,a,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[s?"replace":"push"](n,r,{shallow:c,locale:o}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,u,p,b,f,g,m)},onMouseEnter:function(e){(0,i.isLocalURL)(u)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),d(n,u,p,{priority:!0}))}};return(e.passHref||"a"===x.type&&!("href"in x.props))&&(E.href=(0,i.addBasePath)((0,i.addLocale)(p,"undefined"!==typeof m?m:n&&n.locale,n&&n.defaultLocale))),c.default.cloneElement(x,E)};t.default=h},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),s=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,c.useRef)(),l=(0,c.useState)(!1),d=r(l,2),h=d[0],u=d[1],p=(0,c.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||h||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:s,elements:r}),n}(n),s=r.id,c=r.observer,i=r.elements;return i.set(e,t),c.observe(e),function(){c.unobserve(e),0===i.size&&(c.disconnect(),o.delete(s))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[n,t,h]);return(0,c.useEffect)((function(){a||h||(0,i.default)((function(){return u(!0)}))}),[h]),[p,h]};var c=n("q1tI"),i=s(n("0G5g")),a="undefined"!==typeof IntersectionObserver;var o=new Map}},[["R0y/",0,1,2]]]);