_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("rePB"),o=n("nKUr"),a=n("YFqc"),i=n.n(a),c=n("94VV"),s=n.n(c),u=function(e){return Object(o.jsx)("div",{className:s.a.nav,children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.a,{href:"/quiz",children:"Quiz"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.a,{href:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.a,{href:"/forms",children:"Forms"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.a,{href:"/jsonQuestions",children:"JsonQuestions"})})]})})},l=n("fzO5"),f=n.n(l),p=function(e){return console.log("from header"),console.log(e),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{className:f.a.title,children:[Object(o.jsx)("span",{children:"React-Native"})," Quiz"]}),Object(o.jsx)("p",{className:f.a.description})]})},d=n("WnY7"),h=n.n(d),y=n("/MKj");function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m,w=n("q1tI"),g=n("fvjX"),O=n("5HXA");function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={grade:{false:4,true:1},questions:n("ingu").a},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GRADE":return x(x({},e),{},{grade:t.grade});case"ADDQUESTION":return x(x({},e),{},{questions:[].concat(b(e.questions),[t.question])});default:return e}};function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;return Object(g.createStore)(E,e,Object(O.composeWithDevTools)(Object(g.applyMiddleware)()))}var N=function(e){var t,n=null!==(t=m)&&void 0!==t?t:S(e);return console.log("from initalizeStore"),console.log(e),console.log(n),e&&m&&(n=S(x(x({},m.getState()),e)),m=void 0),m||(m=n),n};var R=function(){return N().getState()},T=Object(y.b)((function(e){return R()}),(function(e){return{addQuestion:function(t){return e({type:"ADDQUESTION",question:t})}}}))((function(e){var t=e.children;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{}),Object(o.jsx)("div",{className:h.a.container,children:Object(o.jsxs)("main",{className:h.a.main,children:[Object(o.jsx)(p,{}),t]})})]})}));function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t,n=e.Component,r=e.pageProps,a=(t=r.initialReduxState,Object(w.useMemo)((function(){return N(t)}),[t]));return Object(o.jsx)(y.a,{store:a,children:Object(o.jsx)(T,{children:Object(o.jsx)(n,P({},r))})})}},"5HXA":function(e,t,n){"use strict";var r=n("fvjX").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},"94VV":function(e,t,n){e.exports={nav:"Nav_nav__3Zjf-"}},Az8m:function(e,t){(function(t){e.exports=function(){var e={931:function(e){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}},n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={exports:{}},a=!0;try{e[t](o,o.exports,r),a=!1}finally{a&&delete n[t]}return o.exports}return r.ab=t+"/",r(931)}()}).call(this,"/")},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},SLVX:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"===typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},WnY7:function(e,t,n){e.exports={container:"Layout_container__1SPwL",main:"Layout_main__cgm7e",code:"Layout_code__38HR2"}},XqMk:function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.a=n}).call(this,n("ntbh"))},YFqc:function(e,t,n){e.exports=n("cTJO")},bCCX:function(e,t,n){"use strict";(function(e,r){var o,a=n("SLVX");o="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:r;var i=Object(a.a)(o);t.a=i}).call(this,n("ntbh"),n("Az8m")(e))},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),c=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.asPath||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,y=e.replace,v=e.shallow,b=e.scroll,m=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var w=a.Children.only(h),g=w&&"object"===typeof w&&w.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),j=r(O,2),x=j[0],_=j[1],E=a.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);(0,a.useEffect)((function(){var e=_&&t&&(0,i.isLocalURL)(p),r="undefined"!==typeof m?m:n&&n.locale,o=u[p+"%"+d+(r?"%"+r:"")];e&&!o&&l(n,p,d,{locale:r})}),[d,p,_,m,t,n]);var S={ref:E,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:c}))}(e,n,p,d,y,v,b,m)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),l(n,p,d,{priority:!0}))}};if(e.passHref||"a"===w.type&&!("href"in w.props)){var N="undefined"!==typeof m?m:n&&n.locale,R=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(d,N,n&&n.locales,n&&n.domainLocales);S.href=R||(0,i.addBasePath)((0,i.addLocale)(d,N,n&&n.defaultLocale))}return a.default.cloneElement(w,S)};t.default=f},fvjX:function(e,t,n){"use strict";n.r(t),n.d(t,"createStore",(function(){return E})),n.d(t,"combineReducers",(function(){return N})),n.d(t,"bindActionCreators",(function(){return T})),n.d(t,"applyMiddleware",(function(){return A})),n.d(t,"compose",(function(){return I}));var r=n("XqMk"),o="object"==typeof self&&self&&self.Object===Object&&self,a=(r.a||o||Function("return this")()).Symbol,i=Object.prototype,c=i.hasOwnProperty,s=i.toString,u=a?a.toStringTag:void 0;var l=function(e){var t=c.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(a){}var o=s.call(e);return r&&(t?e[u]=n:delete e[u]),o},f=Object.prototype.toString;var p=function(e){return f.call(e)},d=a?a.toStringTag:void 0;var h=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":d&&d in Object(e)?l(e):p(e)};var y=function(e,t){return function(n){return e(t(n))}}(Object.getPrototypeOf,Object);var v=function(e){return null!=e&&"object"==typeof e},b=Function.prototype,m=Object.prototype,w=b.toString,g=m.hasOwnProperty,O=w.call(Object);var j=function(e){if(!v(e)||"[object Object]"!=h(e))return!1;var t=y(e);if(null===t)return!0;var n=g.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&w.call(n)==O},x=n("bCCX"),_="@@redux/INIT";function E(e,t,n){var r;if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error("Expected the enhancer to be a function.");return n(E)(e,t)}if("function"!==typeof e)throw new Error("Expected the reducer to be a function.");var o=e,a=t,i=[],c=i,s=!1;function u(){c===i&&(c=i.slice())}function l(){return a}function f(e){if("function"!==typeof e)throw new Error("Expected listener to be a function.");var t=!0;return u(),c.push(e),function(){if(t){t=!1,u();var n=c.indexOf(e);c.splice(n,1)}}}function p(e){if(!j(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(s)throw new Error("Reducers may not dispatch actions.");try{s=!0,a=o(a,e)}finally{s=!1}for(var t=i=c,n=0;n<t.length;n++){(0,t[n])()}return e}return p({type:_}),(r={dispatch:p,subscribe:f,getState:l,replaceReducer:function(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,p({type:_})}})[x.a]=function(){var e,t=f;return(e={subscribe:function(e){if("object"!==typeof e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(l())}return n(),{unsubscribe:t(n)}}})[x.a]=function(){return this},e},r}function S(e,t){var n=t&&t.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function N(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"===typeof e[o]&&(n[o]=e[o])}var a=Object.keys(n);var i=void 0;try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if("undefined"===typeof n(void 0,{type:_}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+_+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(c){i=c}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(i)throw i;for(var r=!1,o={},c=0;c<a.length;c++){var s=a[c],u=n[s],l=e[s],f=u(l,t);if("undefined"===typeof f){var p=S(s,t);throw new Error(p)}o[s]=f,r=r||f!==l}return r?o:e}}function R(e,t){return function(){return t(e.apply(void 0,arguments))}}function T(e,t){if("function"===typeof e)return R(e,t);if("object"!==typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var a=n[o],i=e[a];"function"===typeof i&&(r[a]=R(i,t))}return r}function I(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}var P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function A(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(n,r,o){var a,i=e(n,r,o),c=i.dispatch,s={getState:i.getState,dispatch:function(e){return c(e)}};return a=t.map((function(e){return e(s)})),c=I.apply(void 0,a)(i.dispatch),P({},i,{dispatch:c})}}}},fzO5:function(e,t,n){e.exports={title:"Header_title__1vi4d",description:"Header_description__1lhe1"}},ingu:function(e,t,n){"use strict";t.a=[{question:"How many threads run in React Native?",answers:[{type:"true",content:"There are two threads run in React Native JavaScript thread Main UI thread"},{type:"false",content:"There are many threads run in React Native"},{type:"false",content:"React native doesn't use threads"}]},{question:"What are props in React Native?",answers:[{type:"true",content:"props pronounced as the properties of React Native Components. props are the immutable parameters passed in Presentational Component to provide data."},{type:"false",content:"They are variables that can be changed inside the component"},{type:"false",content:"similar to the state constants, and they are used to fill data on the component"}]},{question:"What are React Native Apps?",answers:[{type:"true",content:"They are the real and native mobile applications built-in a single language with the native components to run on mobile devices."},{type:"false",content:"They are web apps"},{type:"false",content:"They are html rendered on your cellphone"}]},{question:"For what purpose is XHR module used in React Native?",answers:[{type:"true",content:"XHR module implements XMLHttpRequest to post data on the server"},{type:"false",content:"Its a protocol for the sim signal to change from LTE to 5G"},{type:"false",content:"A component that renders video of .xhr extension"}]},{question:"Can we combine native codes of Android and iOS in React Native?",answers:[{type:"true",content:"Yes"},{type:"false",content:"No"},{type:"false",content:"i don't know"}]},{question:"Explain What is React Native?",answers:[{type:"true",content:"is a mobile app development platform that allows you to create android and ios apps only using Javascript"},{type:"false",content:"works in the same way as it does in CSS on the web, with a few exceptions. It is used to provide a consistent layout on different screen sizes"},{type:"false",content:"is a component that displays the content in similarly structured data as a scrollable list. It is used for large lists of data where the number of list items changes over time"}]},{question:"2) Who uses React Native?",answers:[{type:"true",content:"Thousands of apps are created using React Native. Here is the list of some popular companies who are using React Native."},{type:"false",content:"Just Facebook"},{type:"false",content:"Accenture"}]},{question:"List some core components of React Native?",answers:[{type:"true",content:"Text, Image, View, TextInput"},{type:"false",content:"Textbox"},{type:"false",content:"Actions"}]},{question:"How Virtual DOM works in React Native?",answers:[{type:"true",content:"React creates an in-memory data structure cache, computes the resulting differences, and then updates the browser\u2019s displayed DOM efficiently. This allows developers to write code as if the entire page is rendered on each change while the React libraries only render subcomponents that actually change."},{type:"false",content:"works in the same way as it does in CSS on the web, with a few exceptions. It is used to provide a consistent layout on different screen sizes."},{type:"false",content:"extends the web spec of the geolocation. In android, the Geolocation uses android.location.API."}]},{question:"What is FlexBox in React Native?",answers:[{type:"true",content:"Flexbox in React Native works in the same way as it does in CSS on the web, with a few exceptions. It is used to provide a consistent layout on different screen sizes."},{type:"false",content:"CSS Class"},{type:"false",content:"extends the web spec of the geolocation. In android, the Geolocation uses android.location.API."}]},{question:"What is use of FlatList in React Native?",answers:[{type:"true",content:"FlatList in React Native is a component that displays the content in similarly structured data as a scrollable list. It is used for large lists of data where the number of list items changes over time."},{type:"false",content:"CSS Class"},{type:"false",content:"extends the web spec of the geolocation. In android, the Geolocation uses android.location.API."}]},{question:"How to get Geolocation in React Native?",answers:[{type:"true",content:"The geolocation API extends the web spec of the geolocation. In android, the Geolocation uses android.location.API."},{type:"false",content:"Is a component that is implemented to load a web page or web content. It is imported from the core of the react-native library"},{type:"false",content:"from the gesture responder system manages the lifecycle of gestures in your app"}]},{question:"What are props and state in React Native?",answers:[{type:"true",content:"In a React native, different props of various component instances will issue the value of the props to render the views"},{type:"false",content:"Is a component that is implemented to load a web page or web content. It is imported from the core of the react-native library"},{type:"false",content:"The gesture responder system manages the lifecycle of gestures in your app. A touch can go through several phases as the app determines what the user's intention is."}]},{question:"9) What does StyleSheet.create do in React Native?",answers:[{type:"true",content:"StyleSheet.create method ensures that values are immutable and opaque, they are also only created once."},{type:"false",content:"combines the components written in Objective-C, Java, or Swift."},{type:"false",content:"The gesture responder system manages the lifecycle of gestures in your app. A touch can go through several phases as the app determines what the user's intention is."}]},{question:"Can we combine native ios or android code in React Native.",answers:[{type:"true",content:"Yes, we can. React Native smoothly combines the components written in Objective-C, Java, or Swift."},{type:"false",content:"The other meaning of the props is properties. A parent component passes a prop to the child component. The values defined in the props are utilized by the child components. It becomes very easy to program a reusable code by the implementation of the props."},{type:"false",content:"The gesture responder system manages the lifecycle of gestures in your app. A touch can go through several phases as the app determines what the user's intention is."}]}]},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"===typeof window&&(t=window)}e.exports=t}},n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={exports:{}},a=!0;try{e[t](o,o.exports,r),a=!1}finally{a&&delete n[t]}return o.exports}return r.ab=t+"/",r(149)}()}).call(this,"/")},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),f=l[0],p=l[1],d=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=n("q1tI"),a=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map}},[[0,0,1,3,2,4]]]);