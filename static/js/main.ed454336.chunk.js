(this["webpackJsonpauth-test-tpp"]=this["webpackJsonpauth-test-tpp"]||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(4),c=n.n(i),r=n(7),u=n(5),l=n(6),s=n.n(l),d=function(){var t=Object(o.useState)({loading:!0,authenticated:null}),e=Object(r.a)(t,2),n=e[0],i=e[1],c=new u.a({domain:"identityservice-ext-public.staging.zopa.com",clientID:"auth-test-tpp",scope:"CardOpenBankingAPI.read openid email profile",responseType:"id_token token",redirectUri:"https://rorydpayne.github.io/auth-test-tpp",overrides:{__token_issuer:"https://".concat("identityservice-ext-public.staging.zopa.com","/oauth")}}),l=Object(o.useCallback)((function(){var t=s.a.parse(window.location.hash,{ignoreQueryPrefix:!0});c.parseHash((function(t,e){i({authenticated:null===t,loading:!1,token:null===e||void 0===e?void 0:e.accessToken})})),i({authenticated:!0,loading:!1,token:t.access_token}),window.location.hash=""}),[c,i]),d=Object(o.useCallback)((function(){c.renewAuth({redirectUri:"".concat("https://rorydpayne.github.io/auth-test-tpp","/pm_cb.html")},(function(t,e){i({authenticated:!t,loading:!1,token:e?e.accessToken:void 0})}))}),[c,i]);Object(o.useEffect)((function(){window.location.hash.indexOf("access_token")>=0?l():null===n.authenticated&&d()}),[n,l,d]);return n.loading?a.a.createElement("div",null,"Loading..."):n.authenticated?a.a.createElement("div",null,a.a.createElement("p",null,"Logged In"),a.a.createElement("button",{onClick:function(){return c.logout({returnTo:"https://rorydpayne.github.io/auth-test-tpp"})}},"Log Out"),a.a.createElement("span",null," "),a.a.createElement("button",{onClick:function(){return c.renewAuth({redirectUri:"".concat("https://rorydpayne.github.io/auth-test-tpp","/pm_cb.html")},(function(t,e){i({authenticated:!t,loading:!1,token:e?e.accessToken:void 0})}))}},"Silent Login"),a.a.createElement("p",null,"token: ",n.token)):a.a.createElement("button",{onClick:function(){return c.authorize()}},"Login")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.ed454336.chunk.js.map