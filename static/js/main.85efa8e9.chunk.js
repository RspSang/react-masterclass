(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{78:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t.n(r),o=t(24),i=t.n(o),a=t(15),s=t(12),l=t(8),d=t(7),u=t(51),b={bgColor:"#c8d6e5",textColor:"#FFFFFF",accentColor:"#5100AA",cardBgColor:"#6200EE",borderColor:"1px solid #EAEAEA"},j={bgColor:"#1F1E22",textColor:"#FFFFFF",accentColor:"#AA86AA",cardBgColor:"#BB86FC",borderColor:"1px solid #2C2D33"},h=t(25),p=t(22),x=t(10),f=t(37),g=Object(s.b)({key:"isDark",default:!1}),O="https://api.coinpaprika.com/v1";function m(){return fetch("".concat(O,"/coins")).then((function(n){return n.json()}))}function v(n){return fetch("".concat(O,"/tickers/").concat(n)).then((function(n){return n.json()}))}var y,C,k,w,F=t(4),I=t(39),q=t.n(I),S=t(1),z=d.c.button(y||(y=Object(l.a)(["\n  background-color: ",";\n  border: ",";\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 96px;\n  height: 48px;\n  border-radius: 30px;\n  cursor: pointer;\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.borderColor})),A=function(n){var e=n.coinId,t=Object(s.c)(g),c=Object(a.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(O,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),o=c.isLoading,i=c.data,l=Object(r.useState)(!0),d=Object(F.a)(l,2),u=d[0],b=d[1];return Object(S.jsx)("div",{children:o?"Loading chart...":Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(z,{onClick:function(){b((function(n){return!n}))},children:u?"\ud83d\udcc8":"\ud83d\udcca"}),u?Object(S.jsx)(q.a,{type:"line",series:[{name:"Price",data:null===i||void 0===i?void 0:i.map((function(n){return n.close}))}],options:{theme:{mode:t?"dark":"light"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===i||void 0===i?void 0:i.map((function(n){return n.time_close}))},fill:{type:"gradient",gradient:{gradientToColors:["#0be881"],stops:[0,100]}},colors:["#0fbcf9"],tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(2))}}}}}):Object(S.jsx)(q.a,{type:"candlestick",series:[{name:"price",data:null===i||void 0===i?void 0:i.map((function(n){return{x:n.time_open,y:[n.close,n.high,n.low,n.open]}}))}],options:{theme:{mode:"light"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},xaxis:{type:"datetime",axisBorder:{show:!1}},yaxis:{show:!1},grid:{show:!1}}})]})})},B=d.c.div(C||(C=Object(l.a)(["\n  display: grid;\n  margin: 10px 0px;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 10px;\n"]))),L=d.c.span(k||(k=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: ",";\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n"])),(function(n){return n.theme.cardBgColor}),(function(n){return n.theme.textColor})),_=d.c.span(w||(w=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: ",";\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n"])),(function(n){return n.theme.cardBgColor}),(function(n){return n.theme.textColor}));var D,Q,E,$,P,M,T,U,H,J,R,Y=function(n){var e=n.coinId,t=Object(a.useQuery)(["tickers",e],(function(){return v(e)}),{refetchInterval:5e3}),r=(t.isLoading,t.data);return Object(S.jsxs)("div",{children:[Object(S.jsxs)(B,{children:[Object(S.jsx)(L,{children:"12Hours"}),Object(S.jsxs)(_,{children:["$",null===r||void 0===r?void 0:r.quotes.USD.percent_change_12h.toFixed(3)]})]}),Object(S.jsxs)(B,{children:[Object(S.jsx)(L,{children:"24Hours"}),Object(S.jsxs)(_,{children:["$",null===r||void 0===r?void 0:r.quotes.USD.percent_change_24h.toFixed(3)]})]}),Object(S.jsxs)(B,{children:[Object(S.jsx)(L,{children:"7Days"}),Object(S.jsxs)(_,{children:["$",null===r||void 0===r?void 0:r.quotes.USD.percent_change_7d.toFixed(3)]})]}),Object(S.jsxs)(B,{children:[Object(S.jsx)(L,{children:"1Years"}),Object(S.jsxs)(_,{children:["$",null===r||void 0===r?void 0:r.quotes.USD.percent_change_1y.toFixed(3)]})]})]})},G=d.c.h1(D||(D=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),K=d.c.span(Q||(Q=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),N=d.c.div(E||(E=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),V=d.c.header($||($=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),W=d.c.div(P||(P=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ",";\n  padding: 10px 20px;\n  border-radius: 10px;\n"])),(function(n){return n.theme.cardBgColor})),X=d.c.div(M||(M=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),Z=d.c.p(T||(T=Object(l.a)(["\n  margin: 20px 0px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),nn=d.c.div(U||(U=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),en=d.c.span(H||(H=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: ",";\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),(function(n){return n.theme.cardBgColor}),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor})),tn=d.c.button(J||(J=Object(l.a)(["\n  all: unset;\n  position: absolute;\n  top: 50px;\n  right: 50px;\n  background-color: ",";\n  border: ",";\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 96px;\n  height: 48px;\n  border-radius: 30px;\n  cursor: pointer;\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.borderColor})),rn=d.c.button(R||(R=Object(l.a)(["\n  position: fixed;\n  z-index: 999999;\n  top: 50px;\n  left: 50px;\n\n  background-color: ",";\n  border: ",";\n  font-size: 20px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 96px;\n  height: 48px;\n  border-radius: 30px;\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.borderColor}));var cn,on,an,sn,ln,dn,un,bn,jn=function(n){Object(h.a)(n);var e=Object(s.d)(g),t=Object(s.c)(g),r=Object(x.g)().coinId,c=Object(x.f)().state,o=Object(x.h)("react-masterclass/:coinId/price"),i=Object(x.h)("react-masterclass/:coinId/chart"),l=Object(a.useQuery)(["info",r],(function(){return function(n){return fetch("".concat(O,"/coins/").concat(n)).then((function(n){return n.json()}))}(r)})),d=l.isLoading,u=l.data,b=Object(a.useQuery)(["tickers",r],(function(){return v(r)}),{refetchInterval:5e3}),j=b.isLoading,m=b.data,y=d||j;return Object(S.jsxs)(N,{children:[Object(S.jsx)(f.a,{children:Object(S.jsx)("title",{children:(null===c||void 0===c?void 0:c.name)?c.name:y?"Loading...":null===u||void 0===u?void 0:u.name})}),Object(S.jsxs)(V,{children:[Object(S.jsx)(G,{children:(null===c||void 0===c?void 0:c.name)?c.name:y?"Loading...":null===u||void 0===u?void 0:u.name}),Object(S.jsx)(tn,{onClick:function(){return e((function(n){return!n}))},children:t?"\ud83c\udf1a":"\ud83c\udf1e"}),Object(S.jsx)(p.b,{to:"/react-masterclass/",children:Object(S.jsx)(rn,{children:"\ud83d\udc48"})})," "]}),y?Object(S.jsx)(K,{children:"Loading..."}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(W,{children:[Object(S.jsxs)(X,{children:[Object(S.jsx)("span",{children:"Rank:"}),Object(S.jsx)("span",{children:null===u||void 0===u?void 0:u.rank})]}),Object(S.jsxs)(X,{children:[Object(S.jsx)("span",{children:"Symbol:"}),Object(S.jsxs)("span",{children:["$",null===u||void 0===u?void 0:u.symbol]})]}),Object(S.jsxs)(X,{children:[Object(S.jsx)("span",{children:"Price:"}),Object(S.jsxs)("span",{children:["$",null===m||void 0===m?void 0:m.quotes.USD.price.toFixed(3)]})]})]}),Object(S.jsx)(Z,{children:null===u||void 0===u?void 0:u.description}),Object(S.jsxs)(W,{children:[Object(S.jsxs)(X,{children:[Object(S.jsx)("span",{children:"Total Suply:"}),Object(S.jsx)("span",{children:null===m||void 0===m?void 0:m.total_supply})]}),Object(S.jsxs)(X,{children:[Object(S.jsx)("span",{children:"Max Supply:"}),Object(S.jsx)("span",{children:null===m||void 0===m?void 0:m.max_supply})]})]}),Object(S.jsxs)(nn,{children:[Object(S.jsx)(en,{isActive:null!==i,children:Object(S.jsx)(p.b,{to:"/react-masterclass/chart",children:"Chart"})}),Object(S.jsx)(en,{isActive:null!==o,children:Object(S.jsx)(p.b,{to:"/react-masterclass/price",children:"Price"})})]}),Object(S.jsxs)(x.c,{children:[Object(S.jsx)(x.a,{path:"/:coinId/price",children:Object(S.jsx)(Y,{coinId:r})}),Object(S.jsx)(x.a,{path:"/:coinId/chart",children:Object(S.jsx)(A,{coinId:r})})]})]})]})},hn=d.c.div(cn||(cn=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),pn=d.c.header(on||(on=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n"]))),xn=d.c.button(an||(an=Object(l.a)(["\n  all: unset;\n  position: absolute;\n  top: 50px;\n  right: 50px;\n  background-color: ",";\n  border: ",";\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 96px;\n  height: 48px;\n  border-radius: 30px;\n  cursor: pointer;\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.borderColor})),fn=d.c.ul(sn||(sn=Object(l.a)([""]))),gn=d.c.li(ln||(ln=Object(l.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.cardBgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),On=d.c.h1(dn||(dn=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),mn=d.c.span(un||(un=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),vn=d.c.img(bn||(bn=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var yn=function(n){Object(h.a)(n);var e=Object(s.d)(g),t=Object(s.c)(g),r=Object(a.useQuery)("allcoins",m),c=r.isLoading,o=r.data;return Object(S.jsxs)(hn,{children:[Object(S.jsx)(f.a,{children:Object(S.jsx)("title",{children:"\ucf54\uc778"})}),Object(S.jsx)(pn,{children:Object(S.jsx)(On,{children:"\ucf54\uc778"})}),Object(S.jsx)(xn,{onClick:function(){return e((function(n){return!n}))},children:t?"\ud83c\udf1a":"\ud83c\udf1e"}),c?Object(S.jsx)(mn,{children:"Loading..."}):Object(S.jsx)(fn,{children:null===o||void 0===o?void 0:o.slice(0,100).map((function(n){return Object(S.jsx)(gn,{children:Object(S.jsxs)(p.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(S.jsx)(vn,{src:"https://cryptocurrencyliveprices.com/img/".concat(n.id,".png")}),n.name," \u2192"]})},n.id)}))})]})};var Cn,kn=function(n){return Object(h.a)(n),Object(S.jsx)(p.a,{basename:"/react-masterclass",children:Object(S.jsxs)(x.c,{children:[Object(S.jsx)(x.a,{path:"/:coinId",children:Object(S.jsx)(jn,{})}),Object(S.jsx)(x.a,{path:"/",children:Object(S.jsx)(yn,{})})]})})},wn=Object(d.b)(Cn||(Cn=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var Fn=function(){var n=Object(s.c)(g);return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(d.a,{theme:n?j:b,children:[Object(S.jsx)(wn,{}),Object(S.jsx)(kn,{}),Object(S.jsx)(u.ReactQueryDevtools,{initialIsOpen:!0})]})})},In=new a.QueryClient;i.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(s.a,{children:Object(S.jsx)(a.QueryClientProvider,{client:In,children:Object(S.jsx)(Fn,{})})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.85efa8e9.chunk.js.map