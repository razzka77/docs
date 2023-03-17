"use strict";(self.webpackChunkbunni_docs=self.webpackChunkbunni_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"What is Bunni?","href":"/docs/intro","docId":"intro"},{"type":"link","label":"Useful Links","href":"/docs/links","docId":"links"},{"type":"category","label":"Tokenomics","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"LIT","href":"/docs/tokenomics/lit","docId":"tokenomics/lit"},{"type":"link","label":"oLIT","href":"/docs/tokenomics/olit","docId":"tokenomics/olit"},{"type":"link","label":"veLIT","href":"/docs/tokenomics/velit","docId":"tokenomics/velit"},{"type":"link","label":"Gauges","href":"/docs/tokenomics/gauges","docId":"tokenomics/gauges"},{"type":"link","label":"Boosting","href":"/docs/tokenomics/boosting","docId":"tokenomics/boosting"},{"type":"link","label":"Protocol revenue","href":"/docs/tokenomics/revenue","docId":"tokenomics/revenue"}]},{"type":"category","label":"Guides","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Providing Liquidity","href":"/docs/guides/lp","docId":"guides/lp"},{"type":"link","label":"Deploying a gauge","href":"/docs/guides/deploy-gauge","docId":"guides/deploy-gauge"},{"type":"link","label":"Killing an out-of-range gauge","href":"/docs/guides/kill-gauge","docId":"guides/kill-gauge"},{"type":"link","label":"Reactivating a killed gauge","href":"/docs/guides/reactivate-gauge","docId":"guides/reactivate-gauge"}]}]},"docs":{"guides/deploy-gauge":{"id":"guides/deploy-gauge","title":"Deploying a gauge","description":"Deploying a Bunni gauge is permissionless. After a gauge is deployed, veLIT holders must approve a gauge via governance in order to enable distributing oLIT incentives to the gauge.","sidebar":"tutorialSidebar"},"guides/kill-gauge":{"id":"guides/kill-gauge","title":"Killing an out-of-range gauge","description":"Bunni uses our Uniswap Price-out-of-range oracle to determine if a gauge\'s position is out of range. If it is, then the gauge is killed and stops receiving oLIT rewards.","sidebar":"tutorialSidebar"},"guides/lp":{"id":"guides/lp","title":"Providing Liquidity","description":"TODO","sidebar":"tutorialSidebar"},"guides/reactivate-gauge":{"id":"guides/reactivate-gauge","title":"Reactivating a killed gauge","description":"It\'s possible to reactivate a gauge that was killed due to being out-of-range but is now back in range. It uses the same process as killing an out-of-range gauge. It involves updating our Uniswap Price-out-of-range oracle to show that the gauge\'s Uniswap position has now come back into range.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"What is Bunni?","description":"Bunni is a liquidity engine for incentivizing Uniswap v3 liquidity.","sidebar":"tutorialSidebar"},"links":{"id":"links","title":"Useful Links","description":"- Bunni Webapp//bunni.pro/","sidebar":"tutorialSidebar"},"tokenomics/boosting":{"id":"tokenomics/boosting","title":"Boosting","description":"Boosting is a mechanic in LIT tokenomics where holding veLIT increases the rate at which you receive oLIT rewards from staking in a gauge.","sidebar":"tutorialSidebar"},"tokenomics/gauges":{"id":"tokenomics/gauges","title":"Gauges","description":"oLIT incentives are distributed among different gauges based on how veLIT holders vote on the gauge weights. Bunni LPs stake their LP tokens in gauges to receive oLIT incentives.","sidebar":"tutorialSidebar"},"tokenomics/lit":{"id":"tokenomics/lit","title":"LIT","description":"Liquidity Incentive Token (LIT) is Bunni\'s native token for incentivizing liquidity.","sidebar":"tutorialSidebar"},"tokenomics/olit":{"id":"tokenomics/olit","title":"oLIT","description":"oLIT is a call option token for LIT that lets its holder purchase LIT at a discount to the market price. Unlike regular options, oLIT does not expire.","sidebar":"tutorialSidebar"},"tokenomics/revenue":{"id":"tokenomics/revenue","title":"Protocol revenue","description":"Bunni currently charges a 5% protocol fee on the swap fees generated by Bunni LPs. Governance has the power to increase the protocol fee to up to 50%.","sidebar":"tutorialSidebar"},"tokenomics/velit":{"id":"tokenomics/velit","title":"veLIT","description":"Vote-escrow LIT (veLIT) is used for voting for governance proposals and gauge weights.","sidebar":"tutorialSidebar"}}}')}}]);