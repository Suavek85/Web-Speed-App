(this["webpackJsonpweb-speed-app"]=this["webpackJsonpweb-speed-app"]||[]).push([[0],{12:function(e,t,a){e.exports={block:"signin",blockForm:"signin__form",blockInput:"signin__input",blockButton:"signin__button",blockButtonWarm:"signin__button--warm",blockButtonCold:"signin__button--cold"}},122:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(39),l=a.n(c),o=a(28),i=a(5),s=a(34),u=(a(96),a(11)),p=a(8),m=a.n(p),b=a(15),d={maxWidth:1e3},h={maxWidth:700},g={maxWidth:380},f=a(85),E=["LOADING","INACTIVE","ERROR","SUCCESS"].reduce((function(e,t){return e[t]=t,e}),{}),k=Object(f.a)({},E);k.LOADING="Loading...",k.INACTIVE="Get report",k.ERROR="Oops, an error",k.SUCCESS="Get new report";var v=[{content:"First Paint"},{content:"Largest Paint"},{content:"Speed Index"},{content:"Interactive"},{content:"Blocking Time"},{content:"Layout Shift"}],_=["First Contentful Paint","Largest Contentful Paint","Speed Index.","Time to Interactive.","Total Blocking Time","Cumulative Layout Shift."],w=["First Contentful Paint marks the time at which the first text or image is painted.","Largest Contentful Paint marks the time at which the largest text or image is painted.","Speed Index shows how quickly the contents of a page are visibly populated.","Time to interactive is the amount of time it takes for the page to become fully interactive.","Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds","Cumulative Layout Shift measures the movement of visible elements within the viewport."],y=a(35),S=a.n(y);function x(){return r.a.createElement("label",{htmlFor:"urlinput",className:S.a.block},r.a.createElement("input",{autoComplete:"off",type:"url",id:"urlinput",autoFocus:!0,placeholder:"\xa0"}),r.a.createElement("span",{className:S.a.blockLabel},"Enter your website url in this format https://www.bbc.co.uk/"),r.a.createElement("span",{className:S.a.blockBorder}))}function N(){return r.a.createElement(x,null)}var C=a(4),O=a.n(C),A=a(73),I=a.n(A),T=a(74),F=a.n(T);function M(e){var t=e.getAppState,a=e.handleGetReportClick,n=function(e){var t=Object.keys(k).findIndex((function(t){return t===e}));return Object.values(k)[t]}(t),c=function(e){return t===e},l=c(E.LOADING),o=m.a.bind(F.a)({block:!0,blockInactive:c(E.INACTIVE),blockLoading:c(E.LOADING),blockError:c(E.ERROR),blockSuccess:c(E.SUCCESS)});return r.a.createElement("button",{onClick:a,disabled:l,className:o},n)}var D=["first-contentful-paint","largest-contentful-paint","speed-index","interactive","total-blocking-time","cumulative-layout-shift"],L=a(30),j=a.n(L);a(115),a(118);j.a.initializeApp({apiKey:"AIzaSyD8Ez5Z6p41SfoKnK_nUHAV5PZPtqKkDag",authDomain:"speed-web-1577099660929.firebaseapp.com",databaseURL:"https://speed-web-1577099660929.firebaseio.com",projectId:"speed-web-1577099660929",storageBucket:"speed-web-1577099660929.appspot.com",messagingSenderId:"72511905974",appId:"1:72511905974:web:e4890a7557cbaa3de2c617"});var W=j.a.auth(),R=(j.a.firestore(),new j.a.auth.GoogleAuthProvider),B=function(){return W.signInWithPopup(R)},z=j.a,P=function(){var e="";return z.firestore().collection("key").doc("maAkzowoP49Eu5OKNQV7").get().then((function(t){t.exists&&(e=t.data().keyid)})),e}(),G=function(e){return"".concat("https://www.googleapis.com/pagespeedonline/v5/runPagespeed?","url=").concat(e,"&key=").concat(P)};var V=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.stateReducer.getAppState}));return r.a.createElement(M,{handleGetReportClick:function(){e({type:E.LOADING}),function(){var t,a,n,r,c,l;O.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=document.getElementById("urlinput").value,a=G(t),o.prev=2,o.next=5,O.a.awrap(I.a.get(a));case 5:n=o.sent,r=n.data,c=[r.lighthouseResult.audits["dom-size"].score,r.lighthouseResult.audits["unused-javascript"].score,r.loadingExperience.id,r.loadingExperience.overall_category,r.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category,r.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category,r.lighthouseResult.audits["unused-css-rules"].score],l=D.map((function(e){return r.lighthouseResult.audits[e]})),e({type:E.SUCCESS,payload:c,payloadLighthouse:l}),o.next=15;break;case 12:o.prev=12,o.t0=o.catch(2),e({type:E.ERROR});case 15:case"end":return o.stop()}}),null,null,[[2,12]])}()},getAppState:t})},U=a(50),Q=a.n(U);function q(){var e=m.a.bind(Q.a)({block:!0,blockSmallMobile:Object(b.useMediaQuery)(g)});return r.a.createElement("div",{className:e},r.a.createElement(N,null),r.a.createElement("div",{className:Q.a.btnWrapper},r.a.createElement(V,null)))}var X=["EXPAND","COLLAPSE","NOANIMATION"].reduce((function(e,t){return e[t]=t,e}),{}),H=a(75),J=a.n(H);function K(){var e=Object(i.b)();return r.a.createElement("div",{id:"buttonwrapper",className:J.a.blockWrapper,onClick:function(){return e({type:X.EXPAND})}},r.a.createElement("h2",null," ","Settings"," "))}var Z=a(36),Y=a.n(Z);function $(){return r.a.createElement("div",{className:Y.a.block},r.a.createElement(o.b,{to:"/",className:Y.a.blockTitle},r.a.createElement("h1",null,"Web Speed App")),r.a.createElement("div",{className:Y.a.blockLinks},r.a.createElement(o.b,{to:"/signin",className:Y.a.blockTitle},r.a.createElement("h2",null,"Sign in")),r.a.createElement(K,null)))}var ee=a(23),te=a(29),ae=a.n(te);function ne(){return r.a.createElement("div",{style:{margin:"9px 7px"}},r.a.createElement(te.SkeletonTheme,{color:"#bdbdbd",highlightColor:"#d8d8d8"},r.a.createElement(ae.a,{circle:!0,height:56,width:54})))}var re=a(77),ce=a.n(re),le=a(43),oe=a.n(le);function ie(e){var t=e.score,a=t?Math.floor(100*t):0,n="".concat(a,", 100"),c=!!(a<50),l=!!(a<90&&a>49),o=!!(a>89),i=m.a.bind(oe.a),s=i({blockStats:!0,blockStatsAlert:c,blockStatsWarning:l,blockStatsInfo:o}),u=i({blockText:!0,blockTextAlert:c,blockTextWarning:l,blockTextInfo:o}),p=i({blockBg:!0,blockBgAlert:c,blockBgWarning:l,blockBgInfo:o});return r.a.createElement("div",{className:oe.a.block},r.a.createElement("svg",{viewBox:"0 0 36 36",className:oe.a.blockSvg},r.a.createElement("path",{className:p,d:"M18 2.0845\r a 15.9155 15.9155 0 0 1 0 31.831\r a 15.9155 15.9155 0 0 1 0 -31.831"}),r.a.createElement("path",{className:s,strokeDasharray:n,d:"M18 2.0845\r a 15.9155 15.9155 0 0 1 0 31.831\r a 15.9155 15.9155 0 0 1 0 -31.831"}),r.a.createElement("text",{x:"18",y:"21.5",className:u},a)))}function se(e){var t=e.activeTabTitle,a=e.activeTabDesc,n=e.score,c=Object(i.c)((function(e){return e.stateReducer.getAppState}))===E.LOADING;return r.a.createElement("div",{className:ce.a.blockResults},r.a.createElement("p",null,r.a.createElement("span",null,"Title:")," ",t),r.a.createElement("p",null,r.a.createElement("span",null,"Description:")," ",a),!n&&c&&r.a.createElement("p",{style:{display:"flex",alignItems:"center"}},r.a.createElement("span",null,"Score:"),r.a.createElement(ne,null)),n&&r.a.createElement("p",{style:{display:"flex",alignItems:"center"}},r.a.createElement("span",null,"Score:"),r.a.createElement(ie,{score:n})))}var ue=a(78),pe=a.n(ue);function me(e){var t=e.activeTab,a=m.a.bind(pe.a);return v.map((function(e,n){return r.a.createElement("div",{id:n,key:n,className:(c=n.toString(),l=t,a({blockTabsItem:!0,blockTabsItemActive:l===c}))},e.content);var c,l}))}var be=a(79),de=a.n(be);function he(e){var t=e.handleActiveTab,a=e.activeTab,n=m.a.bind(de.a)({blockTabs:!0,blockTabsMobile:Object(b.useMediaQuery)(h),blockTabsSmallMobile:Object(b.useMediaQuery)(g)});return r.a.createElement("div",{onClickCapture:t,className:n},r.a.createElement(me,{activeTab:a}))}var ge=a(48),fe=a(131);a(122);var Ee=function(e){var t={mass:25,tension:25,friction:25},a={mass:1,tension:170,friction:26},n=function(){return e.loadingStatus?a:t},c=Object(ge.a)({from:{transform:"rotate(-65deg)",transformOrigin:"center"},to:function(e){return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,O.a.awrap(e({transform:"rotate(-155deg)",config:n()}));case 3:return t.next=5,O.a.awrap(e({transform:"rotate(0deg)",config:n()}));case 5:return t.next=7,O.a.awrap(e({transform:"rotate(-100deg)",config:n()}));case 7:return t.next=9,O.a.awrap(e({transform:"rotate(-65deg)",config:n()}));case 9:return t.next=11,O.a.awrap(e({delay:1e3}));case 11:t.next=0;break;case 13:case"end":return t.stop()}}))}}),l=Object(ge.a)({from:{fill:"#FFFFFF"},to:function(e){return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,O.a.awrap(e({fill:"#91E0E8"}));case 3:return t.next=5,O.a.awrap(e({fill:"#5DC1D8"}));case 5:return t.next=7,O.a.awrap(e({fill:"#FFFFFF"}));case 7:t.next=0;break;case 9:case"end":return t.stop()}}))}}),o=Object(ge.a)({from:{fill:"#91E0E8"},to:function(e){return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,O.a.awrap(e({fill:"#5DC1D8"}));case 3:return t.next=5,O.a.awrap(e({fill:"#FFFFFF"}));case 5:return t.next=7,O.a.awrap(e({fill:"#91E0E8"}));case 7:t.next=0;break;case 9:case"end":return t.stop()}}))}}),i=Object(ge.a)({from:{fill:"#5DC1D8"},to:function(e){return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,O.a.awrap(e({fill:"#FFFFFF"}));case 3:return t.next=5,O.a.awrap(e({fill:"#91E0E8"}));case 5:return t.next=7,O.a.awrap(e({fill:"#5DC1D8"}));case 7:t.next=0;break;case 9:case"end":return t.stop()}}))}});return r.a.createElement("div",{className:"weboptimize__wrapper"},r.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve"},r.a.createElement("circle",{style:{fill:"#445EA0"},cx:"251.381",cy:267,r:245}),r.a.createElement("circle",{style:{fill:"#FFFFFF"},cx:"250.411",cy:"263.49",r:"198.62"}),r.a.createElement("path",{style:{fill:"#445EA0"},d:"M370.784,273.047c-5.275,0-9.553-4.278-9.553-9.554c0-23.982-7.66-46.206-20.657-64.362l-0.001,0.001\r c-12.515-17.481-29.981-31.186-50.329-39.052l-0.001,0.001c-12.367-4.781-25.799-7.409-39.833-7.409\r c-13.98,0-27.355,2.608-39.681,7.353l-0.002-0.005c-20.38,7.844-37.877,21.542-50.418,39.025c0,0,0,0.001,0.001,0.001\r c-13.034,18.171-20.717,40.428-20.717,64.446c0,5.276-4.278,9.554-9.558,9.554H87.333c-0.181-3.163-0.286-6.347-0.286-9.554\r c0,90.223,73.141,163.362,163.363,163.362c87.015,0,158.128-68.033,163.077-153.808L370.784,273.047L370.784,273.047z"}),r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#ff8989"},d:"M160.31,199.046l-41.732-32.02c-0.001-0.001-0.002-0.002-0.003-0.003\r c-19.816,27.034-31.527,60.382-31.527,96.47c0,3.207,0.105,6.392,0.286,9.554h42.702c5.279,0,9.558-4.278,9.558-9.554\r C139.593,239.475,147.277,217.218,160.31,199.046C160.31,199.047,160.31,199.046,160.31,199.046z"}),r.a.createElement("path",{style:{fill:"#80ff80"},d:"M382.309,167.109c-0.001,0-0.001,0.001-0.001,0.001l-41.733,32.022\r c12.997,18.156,20.657,40.38,20.657,64.362c0,5.276,4.277,9.554,9.553,9.554h42.703c0.182-3.163,0.285-6.347,0.285-9.554\r C413.772,227.443,402.087,194.128,382.309,167.109z"})),r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#ff8989"},d:"M192.593,110.671c-0.001-0.002-0.001-0.004-0.002-0.005c-29.819,11.291-55.471,31.058-74.014,56.361\r l41.732,32.02c12.541-17.483,30.038-31.182,50.418-39.025L192.593,110.671z"}),r.a.createElement("path",{style:{fill:"#FFB134"},d:"M308.381,110.724c-0.001,0.002-0.002,0.004-0.003,0.006l-18.134,49.351\r c20.348,7.866,37.814,21.57,50.329,39.052l41.734-32.022C363.788,141.809,338.168,122.036,308.381,110.724z"})),r.a.createElement("path",{style:{fill:"#FFB134"},d:"M308.378,110.73c-18.018-6.841-37.553-10.597-57.967-10.597c-20.357,0-39.842,3.736-57.817,10.539\r l18.137,49.354c12.326-4.745,25.701-7.353,39.681-7.353c14.034,0,27.465,2.628,39.833,7.409L308.378,110.73z"}),r.a.createElement("path",{style:{fill:"#D9EAFC"},d:"M71.636,263.493c0-106.363,83.613-193.198,188.696-198.368c-3.287-0.162-6.594-0.247-9.921-0.247\r c-109.692,0-198.617,88.925-198.617,198.615c0,109.692,88.925,198.615,198.617,198.615c3.327,0,6.634-0.086,9.921-0.247\r C155.249,456.691,71.636,369.858,71.636,263.493z"}),r.a.createElement("path",{style:{fill:"#293D7C"},d:"M107.176,273.047H87.332c4.948,85.775,76.064,153.808,163.078,153.808\r c3.333,0,6.638-0.112,9.921-0.309C177.891,421.607,111.934,355.537,107.176,273.047z"}),r.a.createElement("path",{style:{fill:"#FF9518"},d:"M315.577,270.993c-4.143,0-7.5-3.358-7.5-7.5c0-31.798-25.869-57.669-57.667-57.669\r c-31.799,0-57.669,25.87-57.669,57.669c0,4.142-3.358,7.5-7.5,7.5s-7.5-3.358-7.5-7.5c0-40.069,32.599-72.669,72.669-72.669\r c40.069,0,72.667,32.599,72.667,72.669C323.077,267.635,319.72,270.993,315.577,270.993z"}),r.a.createElement("path",{style:{fill:"#91E0E8"},d:"M226.419,358.851c0,1.65-1.35,3-3,3h-30.221c-1.65,0-3-1.35-3-3v-30.218c0-1.65,1.35-3,3-3h30.221\r c1.65,0,3,1.35,3,3V358.851z"}),r.a.createElement("path",{id:"SVGCleanerId_0",style:{fill:"#91E0E8"},d:"M268.518,358.851c0,1.65-1.35,3-3,3h-30.217c-1.65,0-3-1.35-3-3v-30.218\r c0-1.65,1.35-3,3-3h30.217c1.65,0,3,1.35,3,3V358.851z"}),r.a.createElement("path",{id:"SVGCleanerId_1",style:{fill:"#FFFFFF"},d:"M310.62,358.851c0,1.65-1.35,3-3,3h-30.217c-1.65,0-3-1.35-3-3v-30.218\r c0-1.65,1.35-3,3-3h30.217c1.65,0,3,1.35,3,3V358.851z"}),r.a.createElement(fe.a.path,{style:i,d:"M226.419,358.851c0,1.65-1.35,3-3,3h-30.221c-1.65,0-3-1.35-3-3v-30.218c0-1.65,1.35-3,3-3h30.221\r c1.65,0,3,1.35,3,3V358.851z"}),r.a.createElement("g",null,r.a.createElement(fe.a.path,{id:"SVGCleanerId_0_1_",style:o,d:"M268.518,358.851c0,1.65-1.35,3-3,3h-30.217c-1.65,0-3-1.35-3-3v-30.218\r c0-1.65,1.35-3,3-3h30.217c1.65,0,3,1.35,3,3V358.851z"})),r.a.createElement("g",null,r.a.createElement(fe.a.path,{id:"SVGCleanerId_1_1_",style:l,d:"M310.62,358.851c0,1.65-1.35,3-3,3h-30.217c-1.65,0-3-1.35-3-3v-30.218\r c0-1.65,1.35-3,3-3h30.217c1.65,0,3,1.35,3,3V358.851z"})),r.a.createElement(fe.a.g,{style:c},r.a.createElement("path",{style:{fill:"#FE3745"},d:"M226.123,274.934c-6.308-13.391-0.546-29.419,12.847-35.728c0.736-0.346,1.494-0.661,2.318-0.96\r c0.057-0.02,0.11-0.037,0.166-0.05l132.179-34.823c0.893-0.235,1.818,0.2,2.213,1.034c0.391,0.832,0.135,1.829-0.613,2.363\r l-111.022,79.738c-0.047,0.035-0.094,0.066-0.145,0.095c-0.758,0.446-1.484,0.83-2.219,1.178\r C248.459,294.09,232.433,288.328,226.123,274.934z"}),r.a.createElement("path",{style:{fill:"#B7092B"},d:"M238.97,247.049c0.736-0.346,1.494-0.661,2.318-0.96c0.057-0.02,0.11-0.037,0.166-0.05\r l124.931-32.913l8.848-6.355c0.748-0.534,1.004-1.531,0.613-2.363c-0.395-0.834-1.32-1.269-2.213-1.034l-132.179,34.823\r c-0.056,0.014-0.109,0.031-0.166,0.05c-0.824,0.299-1.582,0.614-2.318,0.96c-10.959,5.163-16.804,16.833-15.111,28.242\r C225.131,258.852,230.535,251.022,238.97,247.049z"}),r.a.createElement("circle",{style:{fill:"#B7092B"},cx:"250.411",cy:"263.49",r:"13.472"}))))};var ke=function(){var e=Object(i.c)((function(e){return e.stateReducer.getAppState})),t=e===E.LOADING;return r.a.createElement(Ee,{getAppState:e,loadingStatus:t})},ve=a(37),_e=a.n(ve);function we(){return r.a.createElement("div",{className:_e.a.blockHeader},r.a.createElement(ke,null),r.a.createElement("div",{className:_e.a.blockTitleWrapper},r.a.createElement("h1",{className:_e.a.blockTitle},"Lighthouse Score"),r.a.createElement("h2",{className:_e.a.blockSubTitle},"Performance")))}var ye=a(53),Se=a.n(ye);function xe(){var e=Object(n.useState)("0"),t=Object(ee.a)(e,2),a=t[0],c=t[1],l=parseInt(a),o=w[l],s=_[l],u=Object(i.c)((function(e){return e.stateReducer.getLighthouseData}))[l].score,p=m.a.bind(Se.a)({blockWrapper:!0,blockWrapperTablet:Object(b.useMediaQuery)(d),blockWrapperSmallMobile:Object(b.useMediaQuery)(g)}),h={handleActiveTab:function(e){return c(e.target.id)},activeTab:a},f={activeTabDesc:o,activeTabTitle:s,score:u};return r.a.createElement("div",{className:p},r.a.createElement(we,null),r.a.createElement("div",{className:Se.a.blockContent},r.a.createElement(he,h),r.a.createElement(se,f)))}var Ne=a(54),Ce=a.n(Ne);function Oe(){var e=m.a.bind(Ce.a)({block:!0,blockTablet:Object(b.useMediaQuery)(d)});return r.a.createElement("div",{className:e},r.a.createElement($,null),r.a.createElement("div",{className:Ce.a.headerInputWrapper},r.a.createElement(q,null)),r.a.createElement(xe,null))}function Ae(){return r.a.createElement(te.SkeletonTheme,{color:"#bdbdbd",highlightColor:"#d8d8d8"},r.a.createElement(ae.a,{width:50}))}var Ie=a(55),Te=a.n(Ie);a(129);var Fe=function(){var e=Object(i.c)((function(e){return e.stateReducer.getAppState})),t=e===E.LOADING,a=e===E.SUCCESS,n=Te()({blink:t,shine:a}),c=Te()({hide:!0,show:a});return r.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 480.8 480.8",style:{enableBackground:"new 0 0 480.8 480.8"},xmlSpace:"preserve",height:"32px",fill:"#A9A9A9"},r.a.createElement("path",{className:n,d:"M317.112,314.4c-22.4,22.4-19.6,67.6-19.6,67.6h-113.6c0,0,2.4-45.2-19.6-67.6\r c-24.4-21.6-40-52.8-40-87.6c0-64,52-116,116-116s116,52,116,116C356.312,261.6,341.112,292.8,317.112,314.4L317.112,314.4z"}),r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#A9A9A9"},d:"M300.712,417.6c0,6-4.8,10.8-10.8,10.8h-98.8c-6,0-10.8-4.8-10.8-10.8l0,0c0-6,4.8-10.8,10.8-10.8\r h98.4C295.512,406.8,300.712,411.6,300.712,417.6L300.712,417.6z"}),r.a.createElement("path",{style:{fill:"#A9A9A9"},d:"M285.912,462.4c0,6-4.8,10.8-10.8,10.8h-69.2c-6,0-10.8-4.8-10.8-10.8l0,0c0-6,4.8-10.8,10.8-10.8\r h69.2C281.112,451.6,285.912,456.4,285.912,462.4L285.912,462.4z"})),r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"grey"},d:"M323.112,318.4c26-23.6,40.8-56.8,40.8-91.6c0-68-55.6-123.6-123.6-123.6s-123.6,55.6-123.6,123.6\r c0,35.6,15.6,69.6,42,92.8c19.6,19.6,17.6,61.2,17.6,61.6c0,2,0.8,4,2,5.6c1.6,1.6,3.6,2.4,5.6,2.4h113.2c2,0,4-0.8,5.6-2.4\r s2-3.6,2-5.6c0-0.4-2-42,17.6-61.6C322.712,319.2,323.112,318.8,323.112,318.4z M311.912,308.4c-0.8,0.4-1.2,1.2-1.6,2\r c-17.6,18.8-20.4,49.6-20.8,64h-98c-0.4-14.8-3.6-46.8-22.4-65.6c-23.6-20.8-37.2-50.4-37.2-81.6c0-60,48.8-108.4,108.4-108.4\r c60,0,108.4,48.8,108.4,108.4C348.712,258,335.512,288,311.912,308.4z"}),r.a.createElement("path",{style:{fill:"grey"},d:"M240.312,135.2c-4,0-7.6,3.2-7.6,7.6c0,4,3.2,7.6,7.6,7.6c44.8,0,81.2,36.4,81.2,81.2\r c0,4,3.2,7.6,7.6,7.6c4,0,7.6-3.2,7.6-7.6C336.712,178.4,293.512,135.2,240.312,135.2z"}),r.a.createElement("path",{style:{fill:"grey"},d:"M308.312,417.6c0-10.4-8.4-18.4-18.4-18.4h-98.8c-10.4,0-18.4,8.4-18.4,18.4\r c0,10.4,8.4,18.4,18.4,18.4h98.4C299.912,436,308.312,428,308.312,417.6z M289.512,420.8h-98.4c-2,0-3.2-1.6-3.2-3.2\r c0-2,1.6-3.2,3.2-3.2h98.4c2,0,3.2,1.6,3.2,3.2C293.112,419.6,291.512,420.8,289.512,420.8z"}),r.a.createElement("path",{style:{fill:"grey"},d:"M275.112,444h-69.2c-10.4,0-18.4,8.4-18.4,18.4c0,10.4,8.4,18.4,18.4,18.4h69.2\r c10.4,0,18.4-8.4,18.4-18.4C293.512,452.4,285.112,444,275.112,444z M275.112,465.6h-69.2c-2,0-3.2-1.6-3.2-3.2\r c0-2,1.6-3.2,3.2-3.2h69.2c2,0,3.2,1.6,3.2,3.2C278.312,464.4,277.112,465.6,275.112,465.6z"}),r.a.createElement("path",{className:c,style:{fill:"#FFD517"},d:"M247.912,58.8V7.6c0-4-3.2-7.6-7.6-7.6c-4,0-7.6,3.2-7.6,7.6v51.6c0,4,3.2,7.6,7.6,7.6\r C244.712,66.4,247.912,63.2,247.912,58.8z"}),r.a.createElement("path",{className:c,style:{fill:"#FFD517"},d:"M366.312,38c-3.6-2.4-8-1.2-10.4,2l-28.4,42.8c-2.4,3.6-1.2,8,2,10.4c1.2,0.8,2.8,1.2,4,1.2\r c2.4,0,4.8-1.2,6.4-3.2l28.4-42.8C370.712,45.2,369.512,40.4,366.312,38z"}),r.a.createElement("path",{className:c,style:{fill:"#FFD517"},d:"M149.912,92.8c1.2,0,2.8-0.4,4-1.2c3.6-2.4,4.4-6.8,2.4-10.4l-27.6-43.2c-2.4-3.6-6.8-4.4-10.4-2.4\r c-3.6,2.4-4.4,6.8-2.4,10.4l27.6,43.2C145.112,91.6,147.512,92.8,149.912,92.8z"}),r.a.createElement("path",{className:c,style:{fill:"#FFD517"},d:"M43.912,128.8l45.2,24.4c1.2,0.8,2.4,0.8,3.6,0.8c2.8,0,5.2-1.6,6.8-4c2-3.6,0.8-8.4-3.2-10.4\r l-45.2-24.4c-3.6-2-8.4-0.8-10.4,3.2C39.112,122.4,40.312,126.8,43.912,128.8z"}),r.a.createElement("path",{className:c,style:{fill:"#FFD517"},d:"M387.912,154.4c1.2,0,2.4-0.4,3.6-0.8l45.2-24.4c3.6-2,5.2-6.4,3.2-10.4c-2-3.6-6.4-5.2-10.4-3.2\r l-45.2,24.4c-3.6,2-5.2,6.4-3.2,10.4C382.312,152.8,385.112,154.4,387.912,154.4z"})))},Me=a(44),De=a.n(Me);function Le(e){var t=e.content,a=e.data,n=e.position,c=t.header,l=t.mainContent,o=t.result,s=Object(i.c)((function(e){return e.stateReducer.getAppState}))===E.LOADING,u=m.a.bind(De.a),p=u({blockWrapper:!0,blockGeneric:"generic"===n,blockTop:"top"===n,blockBottom:"bottom"===n}),b=function e(t,a){return"?"!==t&&!s&&r.a.createElement("p",{className:e,key:a},"Score:",r.a.createElement("span",null,r.a.createElement(ie,{score:t})))},d=r.a.createElement("span",{className:De.a.blockLightbulb},r.a.createElement(Fe,null));return r.a.createElement("div",{className:p},r.a.createElement("div",{className:De.a.contentWrapper},r.a.createElement("h2",null,c,"generic"===n&&d),r.a.createElement("p",null,l),"generic"===n&&a.map((function(e,t){return r.a.createElement("p",{key:t},o[t],r.a.createElement("span",{className:(a=e,u({blockAlert:"SLOW"===a,blockInfo:"FAST"===a,blockWarning:"AVERAGE"===a}))},"?"!==e&&e,"?"===e&&s&&r.a.createElement(Ae,null)));var a})),"generic"!==n&&a.map(b),"generic"!==n&&a.map((function(e,t){return"?"===e&&s&&r.a.createElement("p",{className:b,key:t},"Score:",r.a.createElement("span",null,r.a.createElement(ne,null)))}))))}function je(){var e=Object(i.c)((function(e){return e.stateReducer.getData})),t={content:{header:"Generic info",mainContent:"Page overall information ",result:["Page overall category: ","First Contentful Paint: ","First Input Delay: "]},data:[e[3],e[4],e[5]],position:"generic"};return r.a.createElement(Le,t)}function We(){var e={content:{header:"Unused Javascript",mainContent:"Remove unused JavaScript to reduce bytes consumed by network activity.",result:["Result: "]},data:[Object(i.c)((function(e){return e.stateReducer.getData}))[1]],position:"bottom"};return r.a.createElement(Le,e)}function Re(){var e={content:{header:"DOM size",mainContent:"A large DOM will increase memory usage, cause longer style calculations.",result:["Result: "]},data:[Object(i.c)((function(e){return e.stateReducer.getData}))[0]],position:"top"};return r.a.createElement(Le,e)}function Be(){var e={content:{header:"Unused CSS",mainContent:"Remove unused JavaScript to reduce bytes consumed by network activity.",result:["Result: "]},data:[Object(i.c)((function(e){return e.stateReducer.getData}))[6]],position:"middle"};return r.a.createElement(Le,e)}var ze=a(81),Pe=a.n(ze);function Ge(){var e=m.a.bind(Pe.a)({block:!0,blockTablet:Object(b.useMediaQuery)(d),blockMobile:Object(b.useMediaQuery)(h)});return r.a.createElement("div",{className:e},r.a.createElement(je,null),r.a.createElement(Re,null),r.a.createElement(We,null),r.a.createElement(Be,null))}var Ve=a(82),Ue=a.n(Ve);function Qe(e){return r.a.createElement("div",{onClick:e.handleOnClick,className:Ue.a.block},"x")}var qe=a(45),Xe=a.n(qe),He={left:"0px",width:"300px"},Je={left:"-300px",width:"0px"},Ke={duration:330},Ze={opacity:.5,display:"block"},Ye={opacity:0,display:"none"},$e=function(e,t,a,n){return{config:e,reset:t,from:a,to:n}},et=$e(Ke,!0,He,Je),tt=$e(Ke,!0,Je,He),at=$e(Ke,!0,Ze,Ye),nt=$e(Ke,!0,Ye,Ze);var rt=r.a.memo((function(){var e=Object(ge.a)(et),t=Object(ge.a)(tt),a=Object(ge.a)(at),n=Object(ge.a)(nt),c=Object(i.c)((function(e){return e.toggleReducer.toggleNavigation})),l=Object(i.b)(),o=function(e,t,a){return e===X.EXPAND?t:e===X.COLLAPSE?a:void 0};return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a.div,{style:o(c,n,a),className:Xe.a.blockBackground}),r.a.createElement(fe.a.div,{style:o(c,t,e),className:Xe.a.block},r.a.createElement("div",{className:Xe.a.blockCloseWrapper},r.a.createElement(Qe,{handleOnClick:function(){return l({type:X.COLLAPSE})}}))))})),ct=a(83),lt=a.n(ct);function ot(){var e=m.a.bind(lt.a)({block:!0,blockTablet:Object(b.useMediaQuery)(d)});return r.a.createElement("section",{className:e},r.a.createElement(rt,null),r.a.createElement(Oe,null),r.a.createElement(Ge,null))}var it=a(12),st=a.n(it);function ut(){return r.a.createElement("button",{onClick:B,className:"".concat(st.a.blockButton," ").concat(st.a.blockButtonCold)},"Sign in with Google")}var pt=a(84);function mt(e){var t=e.handleChange,a=e.label,n=Object(pt.a)(e,["handleChange","label"]);return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("label",null,a):null,r.a.createElement("input",Object.assign({onChange:t},n)))}function bt(){var e=Object(n.useState)(""),t=Object(ee.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(ee.a)(l,2),i=o[0],s=o[1];return r.a.createElement("div",{className:st.a.block},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(""),s("")},className:st.a.blockForm},r.a.createElement(mt,{label:"Email",className:st.a.blockInput,name:"email",type:"email",value:a,handleChange:function(e){return c(e.target.value)},required:!0}),r.a.createElement(mt,{label:"Password",className:st.a.blockInput,name:"password",type:"password",value:i,handleChange:function(e){return s(e.target.value)},required:!0}),r.a.createElement("button",{className:"".concat(st.a.blockButton," ").concat(st.a.blockButtonWarm),type:"submit",value:"Submit form"},"Submit")),r.a.createElement(ut,null))}function dt(){var e=Object(n.useState)(""),t=Object(ee.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(ee.a)(l,2),i=o[0],s=o[1],u=function(e){return c(e.target.value)},p=function(e){return s(e.target.value)};return r.a.createElement("div",{className:st.a.block},r.a.createElement("h2",null,"I don't have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(""),s("")},className:st.a.blockForm},r.a.createElement(mt,{label:"Username",className:st.a.blockInput,name:"username",type:"text",value:a,handleChange:u,required:!0}),r.a.createElement(mt,{label:"Email",className:st.a.blockInput,name:"email",type:"email",value:a,handleChange:u,required:!0}),r.a.createElement(mt,{label:"Password",className:st.a.blockInput,name:"password",type:"password",value:i,handleChange:p,required:!0}),r.a.createElement(mt,{label:"Confirm password",className:st.a.blockInput,name:"confirm password",type:"password",value:i,handleChange:p,required:!0}),r.a.createElement("button",{className:"".concat(st.a.blockButton," ").concat(st.a.blockButtonWarm),type:"submit",value:"Submit form"},"Submit")))}var ht=a(31),gt=a.n(ht);function ft(e){var t=Object(i.b)(),a=Object(n.useState)("signin"),c=Object(ee.a)(a,2),l=c[0],o=c[1],s="signup"===l,u=m.a.bind(gt.a),p=function(e){return u({headeritemWrapper:!0,headeritemWrapperInactive:e!==l})};return r.a.createElement("div",{className:gt.a.mainWrapper},r.a.createElement("div",{onClick:function(e){return o(e.target.id)},className:gt.a.headerWrapper},r.a.createElement("div",{id:"signin",className:p("signin")}," ",r.a.createElement("span",null,"Sign in")),r.a.createElement("div",{id:"signup",className:p("signup")}," ",r.a.createElement("span",null,"New account"))),r.a.createElement("div",{className:gt.a.signinWrapper},r.a.createElement("div",{className:gt.a.navcloseWrapper},r.a.createElement(Qe,{handleOnClick:function(){t({type:X.NOANIMATION}),e.history.push("/")}})),s?r.a.createElement(dt,null):r.a.createElement(bt,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Et=["?","?","?","?","?","?","?"],kt=[{},{},{},{},{},{}],vt=Object(s.b)({stateReducer:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INACTIVE":return{getAppState:E.INACTIVE,getData:Et,getLighthouseData:kt};case E.LOADING:return{getAppState:E.LOADING,getData:Et,getLighthouseData:kt};case"ERROR":return{getAppState:E.ERROR,getData:Et,getLighthouseData:kt};case"SUCCESS":return{getAppState:E.SUCCESS,getData:e.payload,getLighthouseData:e.payloadLighthouse};default:return{getAppState:E.INACTIVE,getData:Et,getLighthouseData:kt}}},toggleReducer:function(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:X.NOANIMATION;var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"EXPAND":return{toggleNavigation:X.EXPAND};case"COLLAPSE":return{toggleNavigation:X.COLLAPSE};default:return{toggleNavigation:X.NOANIMATION}}}}),_t=Object(s.c)(vt);l.a.render(r.a.createElement(o.a,{basename:"/Web-Speed-App"},r.a.createElement(i.a,{store:_t},r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:ot}),r.a.createElement(u.a,{exact:!0,path:"/signin",component:ft})))}),null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},31:function(e,t,a){e.exports={signinWrapper:"signinwrapper",headerWrapper:"headerwrapper",navcloseWrapper:"navclosewrapper",mainWrapper:"mainwrapper",headeritemWrapper:"headeritemwrapper",headeritemWrapperInactive:"headeritemwrapper--inactive"}},35:function(e,t,a){e.exports={block:"url-input",blockLabel:"url-label",blockBorder:"url-border"}},36:function(e,t,a){e.exports={block:"mainheader",blockTitle:"mainheader__title",blockLinks:"mainheader__links"}},37:function(e,t,a){e.exports={blockHeader:"lighthouse__header",blockTitleWrapper:"lighthouse__title-wrapper",blockTitle:"lighthouse__title",blockSubTitle:"lighthouse__subtitle"}},43:function(e,t,a){e.exports={block:"chart__wrapper",blockSvg:"chart__svg",blockBg:"chart__background",blockStats:"chart__stats",blockStatsAlert:"chart__stats--alert",blockStatsWarning:"chart__stats--warning",blockStatsInfo:"chart__stats--info",blockText:"chart__text",blockTextAlert:"chart__text--alert",blockTextWarning:"chart__text--warning",blockTextInfo:"chart__text--info",blockBgAlert:"chart__background--alert",blockBgWarning:"chart__background--warning",blockBgInfo:"chart__background--info"}},44:function(e,t,a){e.exports={blockWrapper:"section__wrapper",blockGeneric:"section__wrapper--generic",blockTop:"section__wrapper--top",blockBottom:"section__wrapper--bottom",blockLightbulb:"section__lightbulb",contentWrapper:"section__content-wrapper",scorePara:"score__para",blockAlert:"section__content-wrapper--alert",blockWarning:"section__content-wrapper--warning",blockInfo:"section__content-wrapper--info"}},45:function(e,t,a){e.exports={blockBackground:"navigation__background",block:"navigation__wrapper",blockCloseWrapper:"navigationclose__wrapper"}},50:function(e,t,a){e.exports={block:"input-wrapper",blockSmallMobile:"input-wrapper--small-mobile",btnWrapper:"primarycard__btn-wrapper"}},53:function(e,t,a){e.exports={blockWrapper:"lighthouse__wrapper",blockWrapperTablet:"lighthouse__wrapper--tablet",blockWrapperSmallMobile:"lighthouse__wrapper--small-mobile",blockContent:"lighthouse__content"}},54:function(e,t,a){e.exports={block:"primarycard__wrapper",blockTablet:"primarycard__wrapper--tablet",headerInputWrapper:"primarycard__header-input-wrapper"}},74:function(e,t,a){e.exports={block:"inputbutton__wrapper",blockInactive:"inputbutton__wrapper--inactive",blockLoading:"inputbutton__wrapper--loading",blockError:"inputbutton__wrapper--error",blockSuccess:"inputbutton__wrapper--success"}},75:function(e,t,a){e.exports={blockWrapper:"button__wrapper"}},77:function(e,t,a){e.exports={blockResults:"lighthouse__results"}},78:function(e,t,a){e.exports={blockTabsItem:"lighthouse__tabsitem",blockTabsItemActive:"lighthouse__tabsitem--active"}},79:function(e,t,a){e.exports={blockTabs:"lighthouse__tabs",blockTabsMobile:"lighthouse__tabs--mobile",blockTabsSmallMobile:"lighthouse__tabs--small-mobile"}},81:function(e,t,a){e.exports={block:"side__wrapper",blockTablet:"side__wrapper--tablet",blockMobile:"side__wrapper--mobile"}},82:function(e,t,a){e.exports={block:"navigationclose"}},83:function(e,t,a){e.exports={block:"app__wrapper",blockTablet:"app__wrapper-tablet"}},87:function(e,t,a){e.exports=a(130)},96:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.fe70787b.chunk.js.map