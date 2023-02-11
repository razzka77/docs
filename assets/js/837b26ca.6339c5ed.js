"use strict";(self.webpackChunkbunni_docs=self.webpackChunkbunni_docs||[]).push([[257],{3905:(e,t,o)=>{o.d(t,{Zo:()=>g,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},g=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=l(o),d=n,f=p["".concat(u,".").concat(d)]||p[d]||c[d]||a;return o?r.createElement(f,i(i({ref:t},g),{},{components:o})):r.createElement(f,i({ref:t},g))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5293:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:4},i="Gauges",s={unversionedId:"tokenomics/gauges",id:"tokenomics/gauges",title:"Gauges",description:"oLIT incentives are distributed among different gauges based on how veLIT holders vote on the gauge weights. Bunni LPs stake their LP tokens in gauges to receive oLIT incentives.",source:"@site/docs/tokenomics/gauges.md",sourceDirName:"tokenomics",slug:"/tokenomics/gauges",permalink:"/docs/tokenomics/gauges",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"veLIT",permalink:"/docs/tokenomics/velit"},next:{title:"Boosting",permalink:"/docs/tokenomics/boosting"}},u={},l=[{value:"How to earn oLIT rewards from gauges",id:"how-to-earn-olit-rewards-from-gauges",level:2},{value:"How to boost your oLIT rewards",id:"how-to-boost-your-olit-rewards",level:2},{value:"What happens when the LP position of a gauge goes out of range?",id:"what-happens-when-the-lp-position-of-a-gauge-goes-out-of-range",level:2}],g={toc:l};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gauges"},"Gauges"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./olit"},"oLIT")," incentives are distributed among different gauges based on how ",(0,n.kt)("a",{parentName:"p",href:"./velit"},"veLIT")," holders vote on the gauge weights. Bunni LPs stake their LP tokens in gauges to receive oLIT incentives."),(0,n.kt)("p",null,"Bunni gauges are based on Curve gauges. Read the ",(0,n.kt)("a",{parentName:"p",href:"https://curve.readthedocs.io/dao-gauges.html"},"Curve docs")," to learn more."),(0,n.kt)("h2",{id:"how-to-earn-olit-rewards-from-gauges"},"How to earn oLIT rewards from gauges"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Provide liquidity to a Bunni pool that has a gauge."),(0,n.kt)("li",{parentName:"ol"},"Stake your LP tokens into the gauge."),(0,n.kt)("li",{parentName:"ol"},"You will now receive oLIT rewards over time. You must claim the rewards from the gauge contract.")),(0,n.kt)("h2",{id:"how-to-boost-your-olit-rewards"},"How to boost your oLIT rewards"),(0,n.kt)("p",null,"Holding veLIT will boost the amount of rewards you receive. The more veLIT you hold, the more rewards you receive (up to a point). See ",(0,n.kt)("a",{parentName:"p",href:"./boosting"},"boosting")," to learn more."),(0,n.kt)("h2",{id:"what-happens-when-the-lp-position-of-a-gauge-goes-out-of-range"},"What happens when the LP position of a gauge goes out of range?"),(0,n.kt)("p",null,"Bunni uses our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/timeless-fi/uniswap-poor-oracle"},"Uniswap Price-out-of-range oracle")," to determine if a gauge's position is out of range. If it is, then the gauge is killed and stops receiving oLIT rewards. The oLIT rewards directed to the killed gauge are burnt."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"../guides/kill-gauge"},"Killing an out-of-range gauge")," to learn more."))}c.isMDXComponent=!0}}]);