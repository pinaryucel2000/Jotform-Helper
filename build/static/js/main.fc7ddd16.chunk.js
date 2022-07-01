(this["webpackJsonpjotform-helper-extension"]=this["webpackJsonpjotform-helper-extension"]||[]).push([[0],{234:function(e,t,a){},235:function(e,t,a){},241:function(e,t,a){},437:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),o=a.n(i),s=(a(234),a(22)),c=(a(235),a(216)),l=a.n(c),d=a(217),u=a.n(d),p=a(467),g=a(438),f=a(466),h=a(477),m=a(476),b=a(468),j=[{id:1,name:"Main components of a form",rules:[{id:1,name:"Greet your respondents with a title and an introduction"},{id:3,name:"Decide whether you\u2019ll use multi-page or single page form"},{id:4,name:"Identify your form fields"},{id:6,name:"Never forget \u201cThanks\u201d page"}]},{id:2,name:"How to write so people will listen",rules:[{id:1,name:"Eliminate passive sentences"},{id:3,name:"Use contracted versions of words"}]},{id:3,name:"The psychology of forms",rules:[{id:6,name:"Consider the colors"}]},{id:4,name:"Questions, answers and grouping",rules:[{id:1,name:"Ask one thing at a time"},{id:2,name:"Give shortcuts: Field label"}]},{id:5,name:"Form visuals and structure",rules:[{id:1,name:"Use the predefined form element"}]},{id:6,name:"All about payment forms",rules:[{id:2,name:"Use pictures of your products"}]}],x=a(464),y=Object(x.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2),width:"270px",height:"800px",backgroundColor:"#f8f4fc"},typography:{fontFamily:"CircularXXWeb,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif",margin:"-15px",fontSize:"20px"},menuItem:{padding:"20px"},typographyNested:{fontSize:"16px",marginLeft:"5px",fontFamily:"CircularXXWeb,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif"}}})),O=a(3);function v(e){var t=e.setPage,a=Object(n.useState)(""),i=Object(s.a)(a,2),o=i[0],c=i[1],d=y();function x(e){c(e),t(e)}var v=r.a.useState(!1),w=Object(s.a)(v,2),k=w[0],N=w[1];return Object(O.jsx)("div",{className:d.root,children:Object(O.jsx)(f.a,{className:d.paper,children:Object(O.jsxs)(m.a,{children:[Object(O.jsxs)(h.a,{name:"API",className:d.menuItem,selected:"API"===o,onClick:function(){return x("API")},children:[Object(O.jsx)(p.a,{children:Object(O.jsx)(l.a,{fontSize:"medium"})}),Object(O.jsx)(g.a,{className:d.typography,variant:"inherit",children:"API"})]}),Object(O.jsxs)(h.a,{className:d.menuItem,selected:"Preferences"===o,onClick:function(){N(!k),c("Preferences")},children:[Object(O.jsx)(p.a,{children:Object(O.jsx)(u.a,{fontSize:"medium"})}),Object(O.jsx)(g.a,{className:d.typography,variant:"inherit",children:"Preferences"})]}),Object(O.jsx)(b.a,{in:k,timeout:"auto",unmountOnExit:!0,children:Object(O.jsx)(m.a,{component:"div",disablePadding:!0,children:j.map((function(e){return Object(O.jsx)(h.a,{name:e.name,id:e.id,button:!0,onClick:function(){x(e.id)},children:Object(O.jsx)(g.a,{className:d.typographyNested,children:e.name})})}))})})]})})})}var w=a(469),k=a(123),N=a(67),S=a(470),C=a(218),I=a.n(C),P=a(219),F=a.n(P),T=a(472),H=a(475),z=a(471),A=a(473),X=Object(x.a)((function(e){return{root:{borderColor:"#E2E2E2  ",border:"1.5px solid",width:"850px",marginTop:"15px",height:"770px",fontFamily:"CircularXXWeb,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif","& label.Mui-focused":{color:"black"},"& .MuiInput-underline:after":{borderBottomColor:"black"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"black",border:"1.5px solid"},"&:hover fieldset":{borderColor:"black",border:"1.5px solid"},"&.Mui-focused fieldset":{borderColor:"black"}}},headerContainer:{marginTop:"50px",textAlign:"center",width:"100%"},typographyHeader1:{fontSize:"30px",color:"#666666"},typographyHeader2:{fontSize:"30px",color:"#136ea0",fontWeight:"500"},container:{marginTop:"50px",width:"920px",height:"20px"},input:{width:"780px",marginLeft:"30px",fontSize:"20px"},typographyTitle:{width:"150px",marginLeft:"30px",marginBottom:"8px",fontSize:"20px",fontWeight:"Bold"},dividerHeader:{background:"linear-gradient(to right, #F9F6F2  5%, #5ca8c6 10%, #3d7070  15%, #004949    25%,#0a1b40   80%, #0a1b40  90%,#5ca8c6 95%, #F9F6F2 );",marginLeft:"205px",marginTop:"15px",width:"400px"},button:{marginLeft:"750px",marginTop:"10px",backgroundColor:"#f8f4fc"},typographyButton:{fontSize:"18px"}}})),W=a(44),E=a.n(W),K=[5,2,9,2,0,1,6,8,4,9,54,14,72,44,61,73],L=function(e){var t=E.a.utils.utf8.toBytes(e),a=new E.a.ModeOfOperation.ctr(K,new E.a.Counter(5)).encrypt(t);return E.a.utils.hex.fromBytes(a)},U=function(e){var t=E.a.utils.hex.toBytes(e),a=new E.a.ModeOfOperation.ctr(K,new E.a.Counter(5)).decrypt(t);return E.a.utils.utf8.fromBytes(a)},B=function(){var e=X(),t=Object(n.useState)({key:"",showKey:!1}),a=Object(s.a)(t,2),r=a[0],i=a[1];Object(n.useEffect)((function(){chrome.storage.local.get(["APIKey"],(function(e){i(Object(N.a)(Object(N.a)({},r),{},{key:U(e.APIKey)}))}))}),[]);var o;return Object(O.jsxs)(w.a,{className:e.root,children:[Object(O.jsxs)(w.a,{className:e.headerContainer,children:[Object(O.jsxs)(g.a,{className:e.typographyHeader1,variant:"inherit",children:["Update Your"," "]}),Object(O.jsx)(g.a,{className:e.typographyHeader2,variant:"inherit",children:"API Key"}),Object(O.jsx)(S.a,{className:e.dividerHeader})]}),Object(O.jsxs)(w.a,{className:e.container,children:[Object(O.jsx)(g.a,{className:e.typographyTitle,children:"API Key"}),Object(O.jsx)(H.a,{className:e.input,type:r.showKey?"text":"password",value:r.key,onChange:(o="key",function(e){i(Object(N.a)(Object(N.a)({},r),{},Object(k.a)({},o,e.target.value)))}),endAdornment:Object(O.jsx)(z.a,{position:"end",children:Object(O.jsx)(T.a,{"aria-label":"toggle password visibility",onClick:function(){i(Object(N.a)(Object(N.a)({},r),{},{showKey:!r.showKey}))},onMouseDown:function(e){e.preventDefault()},children:r.showKey?Object(O.jsx)(I.a,{}):Object(O.jsx)(F.a,{})})})}),Object(O.jsx)(A.a,{className:e.button,onClick:function(){chrome.storage.local.set({APIKey:L(r.key)})},children:Object(O.jsx)(g.a,{className:e.typographyButton,variant:"inherit",children:"Save"})})]})]})},R=(a(241),Object(x.a)((function(e){return{root:{borderColor:"#E2E2E2  ",border:"1.5px solid",width:"850px",marginTop:"15px",height:"770px",fontFamily:"CircularXXWeb,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif"},typographyHeader:{fontSize:"30px",color:"#666666"},dividerHeader:{background:"linear-gradient(to right, #F9F6F2  5%, #5ca8c6 10%, #3d7070  15%, #004949    25%,#0a1b40   80%, #0a1b40  90%,#5ca8c6 95%, #F9F6F2 );",marginTop:"15px",marginLeft:"120px",width:"550px"},headerContainer:{textAlign:"center",width:"100%",marginTop:"50px"},ruleContainer:{width:"95%",display:"flex",marginTop:"25px",marginLeft:"20px"},typographyRule:{fontFamily:"CircularXXWeb,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif",fontSize:"20px",color:"black"},ruleDivider:{marginTop:"10px"}}}))),D=function(e){var t=e.categoryID,a=R(),r=j.find((function(e){return e.id===t}));console.log(r);var i=Object(n.useState)([]),o=Object(s.a)(i,2),c=o[0],l=o[1],d=Object(n.useState)(!1),u=Object(s.a)(d,2),p=u[0],f=u[1];Object(n.useEffect)((function(){var e=[];chrome.storage.local.get(["categories"],(function(a){for(var n=a.categories.filter((function(e){return e.id==t})),r=0;r<n[0].rules.length;r++)e.push(n[0].rules[r]);l(e)}))}),[t,p]);var h=function(e){if(0==c.length)return!1;var t=c.filter((function(t){return t.id==e}));return 0!=t.length&&t[0].active};return Object(O.jsxs)(w.a,{className:a.root,children:[Object(O.jsxs)(w.a,{className:a.headerContainer,children:[Object(O.jsx)(g.a,{className:a.typographyHeader,variant:"inherit",children:r.name}),Object(O.jsx)(S.a,{className:a.dividerHeader})]}),r.rules.map((function(e,n){return Object(O.jsxs)(w.a,{children:[Object(O.jsxs)(w.a,{className:a.ruleContainer,children:[Object(O.jsx)(g.a,{className:a.typographyRule,children:e.name}),Object(O.jsxs)("div",{class:"onoffswitch",children:[Object(O.jsx)("input",{onClick:function(){var a;a=e.id,chrome.storage.local.get(["categories"],(function(e){for(var n=e.categories,r=0;r<n.length;r++)if(n[r].id==t){for(var i=0;i<n[r].rules.length;i++)if(n[r].rules[i].id==a){n[r].rules[i].active=!n[r].rules[i].active;break}break}chrome.storage.local.set({categories:n}),f(!p)})),chrome.storage.local.get(["categories"],(function(e){console.log(e.categories)}))},type:"checkbox",name:"onoffswitch",class:"onoffswitch-checkbox",id:e.name,tabindex:"0",checked:h(e.id)}),Object(O.jsxs)("label",{class:"onoffswitch-label",for:e.name,children:[Object(O.jsx)("span",{class:"onoffswitch-inner"}),Object(O.jsx)("span",{class:"onoffswitch-switch"})]})]})]}),Object(O.jsx)(S.a,{className:a.ruleDivider})]})}))]})},M=Object(x.a)((function(e){return{topContainer:{display:"flex",float:"right",height:"60px",marginTop:"-10px"},typography:{textTransform:"none",padding:"13px",color:"white",fontSize:"16px",fontFamily:"CircularXXWeb,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif",fontWeight:"500",whiteSpace:"nowrap"},underlinedTypography:{textTransform:"none",padding:"13px",color:"white",fontSize:"16px",fontFamily:"CircularXXWeb,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif",fontWeight:"500",whiteSpace:"nowrap",textDecoration:"underline white",textUnderlineOffset:"5px"}}})),_=function(e){var t=e.setSettingsPage,a=e.settingsPage,n=M();return Object(O.jsxs)(w.a,{className:n.topContainer,children:[Object(O.jsx)(A.a,{onClick:function(){t("building")},children:"building"===a?Object(O.jsx)(g.a,{className:n.underlinedTypography,variant:"inherit",children:"Form Building"}):Object(O.jsx)(g.a,{className:n.typography,variant:"inherit",children:"Form Building"})}),Object(O.jsx)(A.a,{onClick:function(){t("filling")},children:"filling"===a?Object(O.jsx)(g.a,{className:n.underlinedTypography,variant:"inherit",children:"Form Filling"}):Object(O.jsx)(g.a,{className:n.typography,variant:"inherit",children:"Form Filling"})})]})},G=Object(x.a)((function(e){return{root:{display:"grid"},container:{display:"block",width:"1150px",minWidth:"1150px",minHeight:"800px",marginRight:"auto",marginLeft:"auto"},paper:{position:"relative",width:"1150px",minWidth:"1150px",minHeight:"800px",marginRight:"auto",marginLeft:"auto",marginTop:"50px",display:"flex",justifyContent:"flex-start"},link:{margin:"5px",borderRadius:"50%",border:"2px solid #f98e03",width:"52px",height:"52px",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"50% 50%",backgroundImage:'url("//www.gravatar.com/avatar/266ca03e409566bead65079af3ed408c?s=50&d=https://cdn.jotfor.ms/assets/img/v4/avatar/Podo-Avatar2-01.png")'}}})),J=function(e){var t=e.setSettingsPage,a=e.settingsPage,r=G(),i=Object(n.useState)("API"),o=Object(s.a)(i,2),c=o[0],l=o[1];return Object(O.jsx)(w.a,{className:r.root,children:Object(O.jsxs)(w.a,{className:r.container,children:[Object(O.jsx)(_,{setSettingsPage:t,settingsPage:a}),Object(O.jsxs)(f.a,{className:r.paper,children:[Object(O.jsx)(v,{setPage:l}),"API"===c?Object(O.jsx)(B,{}):Object(O.jsx)(D,{categoryID:c})]})]})})},Q=a(220),Y=a.n(Q),q=Object(x.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2),width:"270px",height:"800px",backgroundColor:"#f8f4fc"},typography:{fontFamily:"CircularXXWeb,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif",margin:"-15px",fontSize:"20px"},menuItem:{padding:"20px"},typographyNested:{fontSize:"16px",marginLeft:"12px",fontFamily:"CircularXXWeb,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif"}}}));function V(e){var t=e.setPage,a=Object(n.useState)("Information"),r=Object(s.a)(a,2),i=r[0],o=r[1],c=q();return Object(O.jsx)("div",{className:c.root,children:Object(O.jsx)(f.a,{className:c.paper,children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(h.a,{name:"Information",className:c.menuItem,selected:"Information"===i,onClick:function(){return o(e="Information"),void t(e);var e},children:[Object(O.jsx)(p.a,{children:Object(O.jsx)(Y.a,{fontSize:"medium"})}),Object(O.jsx)(g.a,{className:c.typography,variant:"inherit",children:"Information"})]})})})})}var Z=a(221),$=a.n(Z),ee=a(478),te=a(474),ae=Object(x.a)((function(e){return{root:{borderColor:"#E2E2E2  ",border:"1.5px solid",width:"850px",marginTop:"15px",height:"770px"},backdrop:{zIndex:e.zIndex.drawer+1,height:"768px",width:"847px",backgroundColor:"#F9F6F2",color:"black",position:"relative"}}})),ne="211712629725052",re=function(){var e=ae(),t=Object(n.useState)(null),a=Object(s.a)(t,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){chrome.storage.local.get(["APIKey"],(function(e){var t=U(e.APIKey);fetch("https://api.jotform.com/form/211712629725052/submissions?apiKey=511097404d329521c38c6b174d99e522").then((function(e){return e.json()})).then((function(e){for(var a="http://form.jotform.com/"+ne+"?apiKey="+t,n=0;n<e.content.length;n++)if(e.content[n].answers[7].answer==t){var r=e.content[n].answers[3].answer;void 0!=r.first&&(a=a+"&name[first]="+r.first),void 0!=r.last&&(a=a+"&name[last]="+r.last);var o=e.content[n].answers[4].answer;void 0!=o&&(a=a+"&email="+o);var s=e.content[n].answers[6].answer.full;void 0!=s&&(a=a+"&phoneNumber="+s);var c=e.content[n].answers[10].answer;void 0!=c&&(a=a+"&birthdate[day]="+c.day+"&birthdate[month]="+c.month+"&birthdate[year]="+c.year);var l=e.content[n].answers[9].answer;void 0!=l&&(console.log(l),a=a+"&address[addr_line1]="+l.addr_line1+"&address[addr_line2]="+l.addr_line2+"&address[city]="+l.city+"&address[postal]="+l.postal+"&address[state]="+l.state);break}i(a)}))}))})),Object(O.jsx)(w.a,{className:e.root,children:r?Object(O.jsx)($.a,{src:r}):Object(O.jsx)(ee.a,{className:e.backdrop,open:!0,children:Object(O.jsx)(te.a,{color:"inherit"})})})},ie=Object(x.a)((function(e){return{root:{display:"grid"},container:{display:"block",width:"1150px",minWidth:"1150px",minHeight:"800px",marginRight:"auto",marginLeft:"auto"},paper:{position:"relative",width:"1150px",minWidth:"1150px",minHeight:"800px",marginRight:"auto",marginLeft:"auto",marginTop:"50px",display:"flex",justifyContent:"flex-start"}}})),oe=function(e){var t=e.setSettingsPage,a=e.settingsPage,r=Object(n.useState)(""),i=Object(s.a)(r,2),o=(i[0],i[1]),c=ie();return Object(O.jsx)(w.a,{className:c.root,children:Object(O.jsxs)(w.a,{className:c.container,children:[Object(O.jsx)(_,{setSettingsPage:t,settingsPage:a}),Object(O.jsxs)(f.a,{className:c.paper,children:[Object(O.jsx)(V,{setPage:o}),Object(O.jsx)(re,{})]})]})})};var se=function(){var e=Object(n.useState)("building"),t=Object(s.a)(e,2),a=t[0],r=t[1],i=function(e,t,a){if(void 0==e)return 0;for(var n=0;n<e.length;n++)if(e[n].id==t){for(var r=0;r<e[n].rules.length;r++){if(e[n].rules[r].id==a)return e[n].rules[r];break}break}return 0};return Object(n.useEffect)((function(){chrome.storage.local.get(["categories"],(function(e){for(var t=[],a=0;a<j.length;a++){for(var n=[],r=0;r<j[a].rules.length;r++)0==i(e.categories,j[a].id,j[a].rules[r].id)?n.push({id:j[a].rules[r].id,active:!0}):n.push(e.categories[a].rules[r]);t.push({id:j[a].id,rules:n})}chrome.storage.local.set({categories:t})}))}),[]),Object(O.jsx)("div",{children:"building"===a?Object(O.jsx)(J,{setSettingsPage:r,settingsPage:a}):Object(O.jsx)(oe,{setSettingsPage:r,settingsPage:a})})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,479)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),i(e),o(e)}))};o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(se,{})}),document.getElementById("root")),ce()}},[[437,1,2]]]);
//# sourceMappingURL=main.fc7ddd16.chunk.js.map