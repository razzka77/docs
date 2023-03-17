"use strict";(self.webpackChunkbunni_docs=self.webpackChunkbunni_docs||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},a="What is Bunni?",s={unversionedId:"intro",id:"intro",title:"What is Bunni?",description:"Bunni is a liquidity engine for incentivizing Uniswap v3 liquidity.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Useful Links",permalink:"/docs/links"}},l={},u=[{value:"Uniswap wrapper",id:"uniswap-wrapper",level:2},{value:"Vetokenomics system",id:"vetokenomics-system",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-bunni"},"What is Bunni?"),(0,r.kt)("p",null,"Bunni is a liquidity engine for incentivizing Uniswap v3 liquidity."),(0,r.kt)("p",null,"Bunni has two parts: a protocol that wraps Uniswap liquidity positions into fungible ERC-20 tokens, and a vetokenomics system for incentivizing Bunni liquidity."),(0,r.kt)("p",null,"The combination of a robust incentivization system and concentrated liquidity makes Bunni on track to be the most efficient method for incentivizing DEX liquidity. "),(0,r.kt)("h2",{id:"uniswap-wrapper"},"Uniswap wrapper"),(0,r.kt)("p",null,"Officially Uniswap uses NFTs to represent liquidity positions, but it's a little-known fact that it doesn't have to be the case: anyone can build a contract that represents Uniswap positions in any form, be it an ERC-721 NFT, an ERC-1155 NFT, or ERC-20 tokens. This is thanks to the permissionlessness of the Uniswap core protocol."),(0,r.kt)("p",null,"Bunni has built the first such wrapper contract that represents Uniswap positions as ERC-20 tokens. This has numerous benefits over using NFTs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gas efficiency"),": LPs using the same price range & same pool share the same ERC-20 token, spreading the gas cost of providing liquidity over all LPs and thus making it much cheaper."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Easy composability"),": While it's possible to build financial applications on top of Uniswap NFTs, it is far easier to do so using ERC-20 LP tokens, since most existing financial applications are designed for tokens rather than NFTs. This is what enabled Bunni to adopt Curve's gauge system for Uniswap positions.")),(0,r.kt)("h2",{id:"vetokenomics-system"},"Vetokenomics system"),(0,r.kt)("p",null,"Bunni's native token, the ",(0,r.kt)("strong",{parentName:"p"},"Liquidity Incentive Token (LIT)"),", is used to incentivize liquidity on Bunni. Bunni has improved upon the vetokenomics used by Curve to reduce farming-and-dumping and increase longevity."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Balancer LP token as vote-locked token"),": Bunni uses the Balancer 80LIT-20WETH LP token as the lock token for obtaining veLIT."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Increased max boost"),": Bunni gives a max of 10x boost to LPs who have veLIT, instead of the 2.5x used by Curve & Balancer. This increases the advantage of holding veLIT."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Call option as reward token"),": Instead of using LIT as the reward token, Bunni uses call option tokens for LIT as the reward token. This has the benefit of enabling the protocol to accumulate a large cash reserve regardless of market conditions, as well as letting loyal holders buy LIT at a discount.")))}p.isMDXComponent=!0}}]);