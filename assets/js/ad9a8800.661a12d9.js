"use strict";(self.webpackChunkbunni_docs=self.webpackChunkbunni_docs||[]).push([[5441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||g[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3},a="Killing an out-of-range gauge",s={unversionedId:"guides/kill-gauge",id:"guides/kill-gauge",title:"Killing an out-of-range gauge",description:"Bunni uses our Uniswap Price-out-of-range oracle to determine if a gauge's position is out of range. If it is, then the gauge is killed and stops receiving oLIT rewards.",source:"@site/docs/guides/kill-gauge.md",sourceDirName:"guides",slug:"/guides/kill-gauge",permalink:"/docs/guides/kill-gauge",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deploying a gauge",permalink:"/docs/guides/deploy-gauge"},next:{title:"Reactivating a killed gauge",permalink:"/docs/guides/reactivate-gauge"}},l={},u=[],c={toc:u};function g(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"killing-an-out-of-range-gauge"},"Killing an out-of-range gauge"),(0,i.kt)("p",null,"Bunni uses our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/timeless-fi/uniswap-poor-oracle"},"Uniswap Price-out-of-range oracle")," to determine if a gauge's position is out of range. If it is, then the gauge is killed and stops receiving oLIT rewards."),(0,i.kt)("p",null,"Killing an out-of-range gauge is a manual but simple process that can be done by anyone. The process is completely permissionless. Follow this guide to do so."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2457).Z,width:"1222",height:"665"})),(0,i.kt)("h1",{id:"step-1-start-recording"},"Step 1: Start recording"),(0,i.kt)("p",null,'Click "Start out-of-range recording" and submit the transaction in your wallet to start a recording.'),(0,i.kt)("p",null,"If clicking the button does nothing, it may be because someone else has started a recording for this gauge that's currently active. Wait a bit to retry."),(0,i.kt)("h1",{id:"step-2-finish-recording"},"Step 2: Finish recording"),(0,i.kt)("p",null,'After between 60 and 90 minutes, click "Finish out-of-range recording" and submit the transaction in your wallet to finish the recording.'),(0,i.kt)("p",null,'If the position was out-of-range for >50% of the recording, the oracle will mark it as out-of-range, and oLIT emissions to the gauge will automatically stop. In that case you should see "Current state" become "Out of range" after you finish the recording.'))}g.isMDXComponent=!0},2457:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kill-gauge-a80180cbc2cbae079d43a62cf917c7f1.png"}}]);