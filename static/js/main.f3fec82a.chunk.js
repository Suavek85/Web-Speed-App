(this["webpackJsonpweb-speed-app"]=this["webpackJsonpweb-speed-app"]||[]).push([[0],{105:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(32),l=a.n(n),o=a(6),s=a(27),i=(a(76),a(65)),p=["LOADING","INACTIVE","ERROR","SUCCESS"].reduce((function(e,t){return e[t]=t,e}),{}),u=Object(i.a)({},p);u.LOADING="Loading...",u.INACTIVE="Get report",u.ERROR="Oops, an error",u.SUCCESS="Report created";var m=["Speed Index.","Server response times are low (TTFB).","Avoid enormous network payloads.","Time to Interactive.","Properly size images.","Enable text compression."],d=["Speed Index shows how quickly the contents of a page are visibly populated.","Time To First Byte identifies the time at which your server sends a response.","Large network payloads cost users real money and are highly correlated with long load times.","Time to interactive is the amount of time it takes for the page to become fully interactive.","Serve images that are appropriately-sized to save cellular data and improve load time.","Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes."],h=a(28),E=a.n(h);function f(e){var t=e.handleUrlChange;return c.a.createElement("label",{htmlFor:"urlinput",className:E.a.block},c.a.createElement("input",{onChange:t,autoComplete:"off",type:"url",id:"urlinput",autoFocus:!0,placeholder:"\xa0"}),c.a.createElement("span",{className:E.a.blockLabel},"Enter your website url in this format https://www.bbc.co.uk/"),c.a.createElement("span",{className:E.a.blockBorder}))}var b=function(e){return{type:"SET_URL",payload:e}};function g(){var e=Object(o.b)();return c.a.createElement(f,{handleUrlChange:function(t){var a=t.target.value;e(b(a))}})}var v=a(4),y=a.n(v),w=a(56),k=a.n(w),C=a(33),F=a.n(C),x=a(57),N=a.n(x);function _(e){var t=e.getAppState,a=e.handleGetReportClick,r=function(e){return t===e},n=F.a.bind(N.a)({block:!0,blockInactive:r(p.INACTIVE),blockLoading:r(p.LOADING),blockError:r(p.ERROR),blockSuccess:r(p.SUCCESS)});return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:a,disabled:r(p.LOADING),className:n},function(e){var t=Object.keys(u).findIndex((function(t){return t===e}));return Object.values(u)[t]}(t)))}var A=a(42),S=a.n(A);S.a.initializeApp({apiKey:"AIzaSyD8Ez5Z6p41SfoKnK_nUHAV5PZPtqKkDag",authDomain:"speed-web-1577099660929.firebaseapp.com",databaseURL:"https://speed-web-1577099660929.firebaseio.com",projectId:"speed-web-1577099660929",storageBucket:"speed-web-1577099660929.appspot.com",messagingSenderId:"72511905974",appId:"1:72511905974:web:e4890a7557cbaa3de2c617"});var I=S.a,O=function(e){return{type:"SUCCESS",payload:e}};var D=function(){var e="";I.firestore().collection("key").doc("maAkzowoP49Eu5OKNQV7").get().then((function(t){t.exists&&(e=t.data().keyid)}));var t=Object(o.c)((function(e){return e.urlReducer.getUrl})),a="https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=".concat(t,"&key=").concat(e),r=Object(o.b)(),n=Object(o.c)((function(e){return e.stateReducer.getAppState}));return c.a.createElement(_,{handleGetReportClick:function(){r({type:p.LOADING}),function(){var e,t;y.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,y.a.awrap(k.a.get(a));case 3:e=c.sent,t=e.data,console.log(t),r(O([t.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category,t.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category,t.lighthouseResult.audits["speed-index"],t.lighthouseResult.audits["time-to-first-byte"],t.lighthouseResult.audits["total-byte-weight"],t.lighthouseResult.audits.interactive,t.lighthouseResult.audits["uses-responsive-images"],t.lighthouseResult.audits["uses-text-compression"]])),c.next=13;break;case 9:c.prev=9,c.t0=c.catch(0),r({type:p.ERROR}),setTimeout((function(){r({type:p.INACTIVE})}),4e3);case 13:case"end":return c.stop()}}),null,null,[[0,9]])}()},getAppState:n})},R=a(58),z=a.n(R);function L(e){return e.getAppState===p.LOADING&&c.a.createElement("div",{className:z.a.block})}var M=function(){var e=Object(o.c)((function(e){return e.stateReducer.getAppState}));return c.a.createElement(L,{getAppState:e})},T=["EXPAND","COLLAPSE","NOANIMATION"].reduce((function(e,t){return e[t]=t,e}),{}),j=a(29),V=a.n(j);function B(){var e=Object(o.b)();return c.a.createElement("div",{id:"buttonwrapper",className:V.a.blockWrapper,onClick:function(){return e({type:T.EXPAND})}},c.a.createElement("div",{className:V.a.blockBar}),c.a.createElement("div",{className:V.a.blockBar}),c.a.createElement("div",{className:V.a.blockBar}))}var P=a(64),U=a(38),W=a(114);a(105);var G=function(e){var t={mass:25,tension:25,friction:25},a={mass:1,tension:170,friction:26},r=function(){return e.loadingStatus?a:t},n=Object(U.a)({from:{transform:"rotate(-65deg)",transformOrigin:"center"},to:function(e){return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,y.a.awrap(e({transform:"rotate(-155deg)",config:r()}));case 3:return t.next=5,y.a.awrap(e({transform:"rotate(0deg)",config:r()}));case 5:return t.next=7,y.a.awrap(e({transform:"rotate(-100deg)",config:r()}));case 7:return t.next=9,y.a.awrap(e({transform:"rotate(-65deg)",config:r()}));case 9:return t.next=11,y.a.awrap(e({delay:1e3}));case 11:t.next=0;break;case 13:case"end":return t.stop()}}))}}),l=Object(U.a)({from:{fill:"#FFFFFF"},to:function(e){return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,y.a.awrap(e({fill:"#91E0E8"}));case 3:return t.next=5,y.a.awrap(e({fill:"#5DC1D8"}));case 5:return t.next=7,y.a.awrap(e({fill:"#FFFFFF"}));case 7:t.next=0;break;case 9:case"end":return t.stop()}}))}}),o=Object(U.a)({from:{fill:"#91E0E8"},to:function(e){return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,y.a.awrap(e({fill:"#5DC1D8"}));case 3:return t.next=5,y.a.awrap(e({fill:"#FFFFFF"}));case 5:return t.next=7,y.a.awrap(e({fill:"#91E0E8"}));case 7:t.next=0;break;case 9:case"end":return t.stop()}}))}}),s=Object(U.a)({from:{fill:"#5DC1D8"},to:function(e){return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,y.a.awrap(e({fill:"#FFFFFF"}));case 3:return t.next=5,y.a.awrap(e({fill:"#91E0E8"}));case 5:return t.next=7,y.a.awrap(e({fill:"#5DC1D8"}));case 7:t.next=0;break;case 9:case"end":return t.stop()}}))}});return c.a.createElement("div",{className:"weboptimize__wrapper"},c.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve"},c.a.createElement("circle",{style:{fill:"#445EA0"},cx:"251.381",cy:267,r:245}),c.a.createElement("circle",{style:{fill:"#FFFFFF"},cx:"250.411",cy:"263.49",r:"198.62"}),c.a.createElement("path",{style:{fill:"#445EA0"},d:"M370.784,273.047c-5.275,0-9.553-4.278-9.553-9.554c0-23.982-7.66-46.206-20.657-64.362l-0.001,0.001\r c-12.515-17.481-29.981-31.186-50.329-39.052l-0.001,0.001c-12.367-4.781-25.799-7.409-39.833-7.409\r c-13.98,0-27.355,2.608-39.681,7.353l-0.002-0.005c-20.38,7.844-37.877,21.542-50.418,39.025c0,0,0,0.001,0.001,0.001\r c-13.034,18.171-20.717,40.428-20.717,64.446c0,5.276-4.278,9.554-9.558,9.554H87.333c-0.181-3.163-0.286-6.347-0.286-9.554\r c0,90.223,73.141,163.362,163.363,163.362c87.015,0,158.128-68.033,163.077-153.808L370.784,273.047L370.784,273.047z"}),c.a.createElement("g",null,c.a.createElement("path",{style:{fill:"#FF9518"},d:"M160.31,199.046l-41.732-32.02c-0.001-0.001-0.002-0.002-0.003-0.003\r c-19.816,27.034-31.527,60.382-31.527,96.47c0,3.207,0.105,6.392,0.286,9.554h42.702c5.279,0,9.558-4.278,9.558-9.554\r C139.593,239.475,147.277,217.218,160.31,199.046C160.31,199.047,160.31,199.046,160.31,199.046z"}),c.a.createElement("path",{style:{fill:"#FF9518"},d:"M382.309,167.109c-0.001,0-0.001,0.001-0.001,0.001l-41.733,32.022\r c12.997,18.156,20.657,40.38,20.657,64.362c0,5.276,4.277,9.554,9.553,9.554h42.703c0.182-3.163,0.285-6.347,0.285-9.554\r C413.772,227.443,402.087,194.128,382.309,167.109z"})),c.a.createElement("g",null,c.a.createElement("path",{style:{fill:"#FFAF10"},d:"M192.593,110.671c-0.001-0.002-0.001-0.004-0.002-0.005c-29.819,11.291-55.471,31.058-74.014,56.361\r l41.732,32.02c12.541-17.483,30.038-31.182,50.418-39.025L192.593,110.671z"}),c.a.createElement("path",{style:{fill:"#FFAF10"},d:"M308.381,110.724c-0.001,0.002-0.002,0.004-0.003,0.006l-18.134,49.351\r c20.348,7.866,37.814,21.57,50.329,39.052l41.734-32.022C363.788,141.809,338.168,122.036,308.381,110.724z"})),c.a.createElement("path",{style:{fill:"#FFD00D"},d:"M308.378,110.73c-18.018-6.841-37.553-10.597-57.967-10.597c-20.357,0-39.842,3.736-57.817,10.539\r l18.137,49.354c12.326-4.745,25.701-7.353,39.681-7.353c14.034,0,27.465,2.628,39.833,7.409L308.378,110.73z"}),c.a.createElement("path",{style:{fill:"#D9EAFC"},d:"M71.636,263.493c0-106.363,83.613-193.198,188.696-198.368c-3.287-0.162-6.594-0.247-9.921-0.247\r c-109.692,0-198.617,88.925-198.617,198.615c0,109.692,88.925,198.615,198.617,198.615c3.327,0,6.634-0.086,9.921-0.247\r C155.249,456.691,71.636,369.858,71.636,263.493z"}),c.a.createElement("path",{style:{fill:"#293D7C"},d:"M107.176,273.047H87.332c4.948,85.775,76.064,153.808,163.078,153.808\r c3.333,0,6.638-0.112,9.921-0.309C177.891,421.607,111.934,355.537,107.176,273.047z"}),c.a.createElement("path",{style:{fill:"#FF9518"},d:"M315.577,270.993c-4.143,0-7.5-3.358-7.5-7.5c0-31.798-25.869-57.669-57.667-57.669\r c-31.799,0-57.669,25.87-57.669,57.669c0,4.142-3.358,7.5-7.5,7.5s-7.5-3.358-7.5-7.5c0-40.069,32.599-72.669,72.669-72.669\r c40.069,0,72.667,32.599,72.667,72.669C323.077,267.635,319.72,270.993,315.577,270.993z"}),c.a.createElement("path",{style:{fill:"#91E0E8"},d:"M226.419,358.851c0,1.65-1.35,3-3,3h-30.221c-1.65,0-3-1.35-3-3v-30.218c0-1.65,1.35-3,3-3h30.221\r c1.65,0,3,1.35,3,3V358.851z"}),c.a.createElement("path",{id:"SVGCleanerId_0",style:{fill:"#91E0E8"},d:"M268.518,358.851c0,1.65-1.35,3-3,3h-30.217c-1.65,0-3-1.35-3-3v-30.218\r c0-1.65,1.35-3,3-3h30.217c1.65,0,3,1.35,3,3V358.851z"}),c.a.createElement("path",{id:"SVGCleanerId_1",style:{fill:"#FFFFFF"},d:"M310.62,358.851c0,1.65-1.35,3-3,3h-30.217c-1.65,0-3-1.35-3-3v-30.218\r c0-1.65,1.35-3,3-3h30.217c1.65,0,3,1.35,3,3V358.851z"}),c.a.createElement(W.a.path,{style:s,d:"M226.419,358.851c0,1.65-1.35,3-3,3h-30.221c-1.65,0-3-1.35-3-3v-30.218c0-1.65,1.35-3,3-3h30.221\r c1.65,0,3,1.35,3,3V358.851z"}),c.a.createElement("g",null,c.a.createElement(W.a.path,{id:"SVGCleanerId_0_1_",style:o,d:"M268.518,358.851c0,1.65-1.35,3-3,3h-30.217c-1.65,0-3-1.35-3-3v-30.218\r c0-1.65,1.35-3,3-3h30.217c1.65,0,3,1.35,3,3V358.851z"})),c.a.createElement("g",null,c.a.createElement(W.a.path,{id:"SVGCleanerId_1_1_",style:l,d:"M310.62,358.851c0,1.65-1.35,3-3,3h-30.217c-1.65,0-3-1.35-3-3v-30.218\r c0-1.65,1.35-3,3-3h30.217c1.65,0,3,1.35,3,3V358.851z"})),c.a.createElement(W.a.g,{style:n},c.a.createElement("path",{style:{fill:"#FE3745"},d:"M226.123,274.934c-6.308-13.391-0.546-29.419,12.847-35.728c0.736-0.346,1.494-0.661,2.318-0.96\r c0.057-0.02,0.11-0.037,0.166-0.05l132.179-34.823c0.893-0.235,1.818,0.2,2.213,1.034c0.391,0.832,0.135,1.829-0.613,2.363\r l-111.022,79.738c-0.047,0.035-0.094,0.066-0.145,0.095c-0.758,0.446-1.484,0.83-2.219,1.178\r C248.459,294.09,232.433,288.328,226.123,274.934z"}),c.a.createElement("path",{style:{fill:"#B7092B"},d:"M238.97,247.049c0.736-0.346,1.494-0.661,2.318-0.96c0.057-0.02,0.11-0.037,0.166-0.05\r l124.931-32.913l8.848-6.355c0.748-0.534,1.004-1.531,0.613-2.363c-0.395-0.834-1.32-1.269-2.213-1.034l-132.179,34.823\r c-0.056,0.014-0.109,0.031-0.166,0.05c-0.824,0.299-1.582,0.614-2.318,0.96c-10.959,5.163-16.804,16.833-15.111,28.242\r C225.131,258.852,230.535,251.022,238.97,247.049z"}),c.a.createElement("circle",{style:{fill:"#B7092B"},cx:"250.411",cy:"263.49",r:"13.472"})),c.a.createElement("path",{style:{fill:"#F76C6C"},d:"M379.632,99.894c-2.842,0-5.147-2.304-5.147-5.146V54.866h-17.232c-1.959,0-3.748-1.113-4.615-2.871\r c-0.867-1.757-0.66-3.855,0.533-5.409L387.4,2.012C388.372,0.744,389.882,0,391.479,0l0,0c1.6,0,3.107,0.744,4.082,2.012\r l34.227,44.574c1.193,1.554,1.4,3.651,0.533,5.409c-0.865,1.758-2.654,2.871-4.615,2.871h-17.23v39.882\r c0,2.842-2.303,5.146-5.147,5.146H379.632z"}),c.a.createElement("path",{style:{fill:"#EF8318"},d:"M385.735,48.616c0-2.761-2.238-5-5-5h-25.284l-2.28,2.97c-1.193,1.554-1.4,3.652-0.533,5.409\r c0.867,1.758,2.656,2.871,4.615,2.871h17.232v39.882c0,2.842,2.305,5.146,5.147,5.146h6.103V48.616z"}),c.a.createElement("path",{style:{fill:"#F76C6C"},d:"M454.395,176.369c-2.842,0-5.146-2.304-5.146-5.146V131.34h-17.23c-1.961,0-3.75-1.113-4.615-2.871\r c-0.867-1.757-0.66-3.855,0.533-5.409l34.227-44.573c0.975-1.269,2.482-2.012,4.082-2.012s3.107,0.743,4.082,2.012l34.227,44.573\r c1.193,1.554,1.4,3.652,0.533,5.409c-0.865,1.758-2.654,2.871-4.615,2.871h-17.232v39.883c0,2.842-2.303,5.146-5.147,5.146\r L454.395,176.369L454.395,176.369z"}),c.a.createElement("path",{style:{fill:"#EF8318"},d:"M460.501,125.09c0-2.761-2.238-5-5-5h-25.284l-2.28,2.97c-1.193,1.554-1.4,3.652-0.533,5.409\r c0.867,1.758,2.656,2.871,4.615,2.871h17.232v39.882c0,2.842,2.305,5.146,5.147,5.146h6.103V125.09z"})))};var X=function(){var e=Object(o.c)((function(e){return e.stateReducer.getAppState})),t=e===p.LOADING;return c.a.createElement(G,{getAppState:e,loadingStatus:t})},H=a(25),K=a.n(H);function J(){var e=Object(r.useState)("0"),t=Object(P.a)(e,2),a=t[0],n=t[1],l=parseInt(a),s=F.a.bind(K.a),i=function(e){return s({blockTabsItem:!0,blockActive:a===e})},p=2+l,u=d[l],h=m[l],E=Object(o.c)((function(e){return e.stateReducer.getData}))[p],f=E.score,b=E.displayValue,g=f?Math.round(100*f)+"%":"?",v=b||"?";return c.a.createElement("div",{className:K.a.blockWrapper},c.a.createElement("div",{className:K.a.blockHeader},c.a.createElement(X,null),c.a.createElement("h1",null,"Lighthouse",c.a.createElement("br",null),"Score")),c.a.createElement("div",{className:K.a.blockContent},c.a.createElement("div",{onClickCapture:function(e){return n(e.target.id)},className:K.a.blockTabs},c.a.createElement("div",{id:"0",className:i("0")},"Speed Index"),c.a.createElement("div",{id:"1",className:i("1")},"Time to First Byte"),c.a.createElement("div",{id:"2",className:i("2")},"Total Byte Weight"),c.a.createElement("div",{id:"3",className:i("3")},"Interactive"),c.a.createElement("div",{id:"4",className:i("4")},"Used Responsive Images"),c.a.createElement("div",{id:"5",className:i("5")},"Uses Text Compression")),c.a.createElement("div",{className:K.a.blockResults},c.a.createElement("p",null,c.a.createElement("span",null,"Title:")," ",h),c.a.createElement("p",null,c.a.createElement("span",null,"Description:")," ",u),c.a.createElement("p",null,c.a.createElement("span",null,"Score:")," ",g," "),c.a.createElement("p",null,c.a.createElement("span",null,"Display Value:")," ",v," "))))}var q=a(22),Z=a.n(q);function Q(){return c.a.createElement("div",{className:Z.a.block},c.a.createElement("div",{className:Z.a.blockInner},c.a.createElement("div",{className:Z.a.subWrapper},c.a.createElement("div",{className:Z.a.headerWrapper},c.a.createElement(B,null),c.a.createElement("h1",null,"Web Speed App")),c.a.createElement("div",{style:{display:"flex",margin:"30px 0px"}},c.a.createElement(g,null),c.a.createElement("div",{className:Z.a.btnWrapper},c.a.createElement(D,null),c.a.createElement(M,null))))),c.a.createElement(J,null))}var Y=a(43),$=a.n(Y);a(112);var ee=function(){var e=Object(o.c)((function(e){return e.stateReducer.getAppState})),t=e===p.LOADING,a=e===p.SUCCESS,r=$()({blink:t,shine:a}),n=$()({hide:!0,show:a});return c.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 480.8 480.8",style:{enableBackground:"new 0 0 480.8 480.8"},xmlSpace:"preserve",height:"40px",fill:"#A9A9A9"},c.a.createElement("path",{className:r,d:"M317.112,314.4c-22.4,22.4-19.6,67.6-19.6,67.6h-113.6c0,0,2.4-45.2-19.6-67.6\r c-24.4-21.6-40-52.8-40-87.6c0-64,52-116,116-116s116,52,116,116C356.312,261.6,341.112,292.8,317.112,314.4L317.112,314.4z"}),c.a.createElement("g",null,c.a.createElement("path",{style:{fill:"#A9A9A9"},d:"M300.712,417.6c0,6-4.8,10.8-10.8,10.8h-98.8c-6,0-10.8-4.8-10.8-10.8l0,0c0-6,4.8-10.8,10.8-10.8\r h98.4C295.512,406.8,300.712,411.6,300.712,417.6L300.712,417.6z"}),c.a.createElement("path",{style:{fill:"#A9A9A9"},d:"M285.912,462.4c0,6-4.8,10.8-10.8,10.8h-69.2c-6,0-10.8-4.8-10.8-10.8l0,0c0-6,4.8-10.8,10.8-10.8\r h69.2C281.112,451.6,285.912,456.4,285.912,462.4L285.912,462.4z"})),c.a.createElement("g",null,c.a.createElement("path",{style:{fill:"grey"},d:"M323.112,318.4c26-23.6,40.8-56.8,40.8-91.6c0-68-55.6-123.6-123.6-123.6s-123.6,55.6-123.6,123.6\r c0,35.6,15.6,69.6,42,92.8c19.6,19.6,17.6,61.2,17.6,61.6c0,2,0.8,4,2,5.6c1.6,1.6,3.6,2.4,5.6,2.4h113.2c2,0,4-0.8,5.6-2.4\r s2-3.6,2-5.6c0-0.4-2-42,17.6-61.6C322.712,319.2,323.112,318.8,323.112,318.4z M311.912,308.4c-0.8,0.4-1.2,1.2-1.6,2\r c-17.6,18.8-20.4,49.6-20.8,64h-98c-0.4-14.8-3.6-46.8-22.4-65.6c-23.6-20.8-37.2-50.4-37.2-81.6c0-60,48.8-108.4,108.4-108.4\r c60,0,108.4,48.8,108.4,108.4C348.712,258,335.512,288,311.912,308.4z"}),c.a.createElement("path",{style:{fill:"grey"},d:"M240.312,135.2c-4,0-7.6,3.2-7.6,7.6c0,4,3.2,7.6,7.6,7.6c44.8,0,81.2,36.4,81.2,81.2\r c0,4,3.2,7.6,7.6,7.6c4,0,7.6-3.2,7.6-7.6C336.712,178.4,293.512,135.2,240.312,135.2z"}),c.a.createElement("path",{style:{fill:"grey"},d:"M308.312,417.6c0-10.4-8.4-18.4-18.4-18.4h-98.8c-10.4,0-18.4,8.4-18.4,18.4\r c0,10.4,8.4,18.4,18.4,18.4h98.4C299.912,436,308.312,428,308.312,417.6z M289.512,420.8h-98.4c-2,0-3.2-1.6-3.2-3.2\r c0-2,1.6-3.2,3.2-3.2h98.4c2,0,3.2,1.6,3.2,3.2C293.112,419.6,291.512,420.8,289.512,420.8z"}),c.a.createElement("path",{style:{fill:"grey"},d:"M275.112,444h-69.2c-10.4,0-18.4,8.4-18.4,18.4c0,10.4,8.4,18.4,18.4,18.4h69.2\r c10.4,0,18.4-8.4,18.4-18.4C293.512,452.4,285.112,444,275.112,444z M275.112,465.6h-69.2c-2,0-3.2-1.6-3.2-3.2\r c0-2,1.6-3.2,3.2-3.2h69.2c2,0,3.2,1.6,3.2,3.2C278.312,464.4,277.112,465.6,275.112,465.6z"}),c.a.createElement("path",{className:n,style:{fill:"#FFD517"},d:"M247.912,58.8V7.6c0-4-3.2-7.6-7.6-7.6c-4,0-7.6,3.2-7.6,7.6v51.6c0,4,3.2,7.6,7.6,7.6\r C244.712,66.4,247.912,63.2,247.912,58.8z"}),c.a.createElement("path",{className:n,style:{fill:"#FFD517"},d:"M366.312,38c-3.6-2.4-8-1.2-10.4,2l-28.4,42.8c-2.4,3.6-1.2,8,2,10.4c1.2,0.8,2.8,1.2,4,1.2\r c2.4,0,4.8-1.2,6.4-3.2l28.4-42.8C370.712,45.2,369.512,40.4,366.312,38z"}),c.a.createElement("path",{className:n,style:{fill:"#FFD517"},d:"M149.912,92.8c1.2,0,2.8-0.4,4-1.2c3.6-2.4,4.4-6.8,2.4-10.4l-27.6-43.2c-2.4-3.6-6.8-4.4-10.4-2.4\r c-3.6,2.4-4.4,6.8-2.4,10.4l27.6,43.2C145.112,91.6,147.512,92.8,149.912,92.8z"}),c.a.createElement("path",{className:n,style:{fill:"#FFD517"},d:"M43.912,128.8l45.2,24.4c1.2,0.8,2.4,0.8,3.6,0.8c2.8,0,5.2-1.6,6.8-4c2-3.6,0.8-8.4-3.2-10.4\r l-45.2-24.4c-3.6-2-8.4-0.8-10.4,3.2C39.112,122.4,40.312,126.8,43.912,128.8z"}),c.a.createElement("path",{className:n,style:{fill:"#FFD517"},d:"M387.912,154.4c1.2,0,2.4-0.4,3.6-0.8l45.2-24.4c3.6-2,5.2-6.4,3.2-10.4c-2-3.6-6.4-5.2-10.4-3.2\r l-45.2,24.4c-3.6,2-5.2,6.4-3.2,10.4C382.312,152.8,385.112,154.4,387.912,154.4z"})))},te=a(60),ae=a.n(te);function re(){var e=Object(o.c)((function(e){return e.stateReducer.getData}));return c.a.createElement("div",{className:ae.a.blockWrapper},c.a.createElement("div",{style:{padding:"0px 30px"}},c.a.createElement("h1",{style:{color:"lightgrey"}},"First Contentful Paint",c.a.createElement(ee,null)),c.a.createElement("p",{style:{color:"lightgrey"}},"First Contentful Paint (FCP) measures the time from navigation to the time when the browser renders the first bit of content from the DOM. This is an important milestone for users because it provides feedback that the page is actually loading."),c.a.createElement("p",{style:{color:"ivory"}},"Result: ",c.a.createElement("span",{style:{color:"ivory"}},e[0]))))}var ce=a(61),ne=a.n(ce);function le(){var e=Object(o.c)((function(e){return e.stateReducer.getData}));return c.a.createElement("div",{className:ne.a.blockWrapper},c.a.createElement("div",{style:{padding:"0px 30px"}},c.a.createElement("h1",{style:{color:"lightgrey"}},"First Input Delay",c.a.createElement(ee,null)),c.a.createElement("p",{style:{color:"lightgrey"}},"First Input Delay (FID) measures the time from when a user first interacts with your site (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to respond to that interaction."),c.a.createElement("p",{style:{color:"ivory"}},"Result: ",c.a.createElement("span",{style:{color:"ivory"}},e[1]))))}var oe=a(62),se=a.n(oe);function ie(){return c.a.createElement("div",{className:se.a.block},c.a.createElement(re,null),c.a.createElement(le,null))}var pe=a(36),ue=a.n(pe);function me(){var e=Object(U.a)({config:{duration:330},reset:!0,from:{left:"0px"},to:{left:"-300px"}}),t=Object(U.a)({config:{duration:330},reset:!0,from:{left:"-300px"},to:{left:"0px"}}),a=Object(U.a)({config:{duration:330},reset:!0,from:{opacity:.5,display:"block"},to:{opacity:0,display:"none"}}),r=Object(U.a)({config:{duration:330},reset:!0,from:{opacity:0,display:"none"},to:{opacity:.5,display:"block"}}),n=Object(o.c)((function(e){return e.toggleReducer.toggleNavigation})),l=Object(o.b)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(W.a.div,{style:function(e){return e===T.EXPAND?r:e===T.COLLAPSE?a:void 0}(n),className:ue.a.blockBackground}),c.a.createElement(W.a.div,{style:function(a){return a===T.EXPAND?t:a===T.COLLAPSE?e:void 0}(n),className:ue.a.blockWrapper},c.a.createElement("div",{onClick:function(){return l({type:T.COLLAPSE})},className:ue.a.blockClose},"x")))}var de=a(63),he=a.n(de);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=["?","?",{},{},{},{},{},{}],fe=Object(s.b)({stateReducer:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INACTIVE":return{getAppState:p.INACTIVE,getData:Ee};case p.LOADING:return{getAppState:p.LOADING,getData:Ee};case"ERROR":return{getAppState:p.ERROR,getData:Ee};case"SUCCESS":return{getAppState:p.SUCCESS,getData:e.payload};default:return{getAppState:p.INACTIVE,getData:Ee}}},toggleReducer:function(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:T.NOANIMATION;var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"EXPAND":return{toggleNavigation:T.EXPAND};case"COLLAPSE":return{toggleNavigation:T.COLLAPSE};default:return{toggleNavigation:T.NOANIMATION}}},urlReducer:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_URL":return{getUrl:e.payload};default:return{getUrl:"?"}}}}),be=Object(s.c)(fe);console.log(be.getState()),l.a.render(c.a.createElement(o.a,{store:be},c.a.createElement((function(){return c.a.createElement("div",{className:he.a.block},c.a.createElement(me,null),c.a.createElement(Q,null),c.a.createElement(ie,null))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},22:function(e,t,a){e.exports={block:"inputcard__wrapper",blockInner:"inputcard__wrapperInner",btnWrapper:"inputcard__btn-wrapper",subWrapper:"inputcard__sub-wrapper",headerWrapper:"inputcard__header"}},25:function(e,t,a){e.exports={blockWrapper:"lighthouse__wrapper",blockHeader:"lighthouse__header",blockContent:"lighthouse__content",blockResults:"lighthouse__results",blockTabs:"lighthouse__tabs",blockTabsItem:"lighthouse__tabsitem",blockActive:"lighthouse__active"}},28:function(e,t,a){e.exports={block:"url-input",blockLabel:"url-label",blockBorder:"url-border"}},29:function(e,t,a){e.exports={blockWrapper:"button__wrapper",blockBar:"button__bar"}},36:function(e,t,a){e.exports={blockBackground:"navigation__background",blockWrapper:"navigation__wrapper",blockClose:"navigation__close"}},57:function(e,t,a){e.exports={block:"inputbutton__wrapper",blockInactive:"inputbutton__wrapper--inactive",blockLoading:"inputbutton__wrapper--loading",blockError:"inputbutton__wrapper--error",blockSuccess:"inputbutton__wrapper--success"}},58:function(e,t,a){e.exports={block:"spinner"}},60:function(e,t,a){e.exports={blockWrapper:"resultstop__wrapper"}},61:function(e,t,a){e.exports={blockWrapper:"resultsbottom__wrapper",blockRow:"resultsbottom__row"}},62:function(e,t,a){e.exports={block:"results__wrapper"}},63:function(e,t,a){e.exports={block:"app__wrapper"}},67:function(e,t,a){e.exports=a(113)},76:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.f3fec82a.chunk.js.map