(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{326:function(e,t,r){"use strict";r.d(t,"a",(function(){return qe}));var n=r(486),a=r(490),c=r(0),s=r.n(c),i=r(1),o=r.n(i),d=r(487),l=r(53),j=r(493),b=r(222),O=r(37),u=r(8),h=r.n(u),p=r(473),g=r(477),f=r(476),x=r(85),m=r(474),y=r(457),v=r(475),I=r(27),w=r(306),R=r(103),P=r(466),C=r(488),S=r(497),D=r(491);function _(){return fetch("https://enigmatic-ocean-67483.herokuapp.com/profiles").then((function(e){return e.json()})).catch((function(e){return console.error(e)}))}function N(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("https://enigmatic-ocean-67483.herokuapp.com/profiles",t).then((function(e){return e.json()})).catch((function(e){return console.error(e)}))}var B=r(6);function k(e){var t=e.showModal,r=e.setShowModal,n=Object(l.p)(),a=(Object(l.r)(),Object(c.useState)()),s=h()(a,2),i=s[0],o=s[1],d=Object(c.useState)([]),j=h()(d,2),b=j[0],O=j[1];return Object(c.useEffect)((function(){_().then((function(e){return O(e)}))}),[t]),Object(B.jsx)(P.a,{children:Object(B.jsx)(C.a,{isOpen:t,onClose:function(){return r(!1)},children:Object(B.jsxs)(C.a.Content,{maxWidth:"400px",children:[Object(B.jsx)(C.a.CloseButton,{}),Object(B.jsx)(C.a.Header,{children:"Find Employee"}),Object(B.jsx)(C.a.Body,{children:Object(B.jsx)(S.a,{placeholder:"Enter name",width:"100%",borderRadius:"4",py:"3",px:"1",fontSize:"14",InputLeftElement:Object(B.jsx)(y.a,{m:"2",ml:"3",size:"6",color:"gray.400",as:Object(B.jsx)(p.a,{name:"search"})}),onChangeText:function(e){return o(e)}})}),Object(B.jsx)(C.a.Footer,{children:Object(B.jsxs)(D.a.Group,{space:2,children:[Object(B.jsx)(D.a,{variant:"ghost",colorScheme:"blueGray",onPress:function(){r(!1)},children:"Cancel"}),Object(B.jsx)(D.a,{onPress:function(){!function(){var e=b.find((function(e){return e.firstName.toLowerCase()==i.toLowerCase()}));void 0!=e&&(r(!1),n.navigate("Details",e))}()},children:"Search"})]})})]})})})}var G=function(e){Object(x.a)().colors;return Object(B.jsx)(m.a,{icon:Object(B.jsx)(y.a,{as:e.as||p.a,name:e.name,size:e.iconSize||"lg",color:e.color||"white"}),_hover:e._hover||{bg:Object(b.c)("ROI.BurntOrange","ROI.Charcoal")},_pressed:e._pressed||{bg:Object(b.c)("ROI.BurntOrange","ROI.Charcoal")},onPress:e.onPress})};function M(e){var t=e.colorModeToggle,r=Object(c.useState)(!1),n=h()(r,2),a=n[0],s=n[1];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(v.a,{bg:"#fff",barStyle:"light-content"}),Object(B.jsx)(I.a,{safeAreaTop:!0,bg:"#fff"}),Object(B.jsxs)(w.a,{_dark:{bg:"ROI.MidGrey"},_light:{bg:"ROI.RealRed"},justifyContent:"space-between",alignItems:"center",w:"100%",h:["50","60"],children:[Object(B.jsxs)(w.a,{alignItems:"center",children:[Object(B.jsx)(G,{name:"menu",onPress:function(){return e.navigation.openDrawer()}}),Object(B.jsx)(R.a,{color:"white",fontSize:"20",children:Object(f.a)(e.options,e.route.name)})]}),Object(B.jsxs)(w.a,{children:[Object(B.jsx)(G,{as:g.a,name:Object(b.c)("sunny","sunny-outline"),onPress:t}),Object(B.jsx)(G,{name:"search",onPress:function(){return s(!0)}}),Object(B.jsx)(G,{name:"more-vert"})]})]}),Object(B.jsx)(k,{showModal:a,setShowModal:s})]})}var W=r(478),E=r(311),T=r(68),L=r(246),Z=r(479);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z=function(e){switch(e){case"Home":return"home";case"Staff":return"account-box-multiple";case"Create":return"account-plus";case"Settings":return"cog";default:return}};function F(e){return Object(B.jsx)(T.a,{px:"5",py:"3",rounded:"md",bg:Object(b.c)("ROI.White","ROI.MidGrey"),onPress:function(t){e.navigation.navigate(e.name)},children:Object(B.jsxs)(w.a,{space:"7",alignItems:"center",children:[Object(B.jsx)(y.a,{color:Object(b.c)("ROI.MidGrey","ROI.White"),size:"5",as:Object(B.jsx)(W.a,{name:z(e.name)})}),Object(B.jsx)(R.a,{fontWeight:"500",color:Object(b.c)("ROI.MidGrey","ROI.White"),children:e.name})]})},e.index)}function J(e){return Object(B.jsx)(E.a,A(A({},e),{},{children:Object(B.jsxs)(L.a,{divider:Object(B.jsx)(Z.a,{}),space:"4",my:"2",mx:"1",children:[Object(B.jsxs)(I.a,{px:"4",children:[Object(B.jsx)(R.a,{bold:!0,color:Object(b.c)("ROI.MidGrey","ROI.White"),children:"HR Manager"}),Object(B.jsx)(R.a,{fontSize:"14",mt:"1",color:Object(b.c)("ROI.MidGrey","ROI.White"),fontWeight:"500",children:"Staff Details Management"})]}),Object(B.jsxs)(L.a,{divider:Object(B.jsx)(Z.a,{}),space:"4",justifyContent:"space-between",children:[Object(B.jsxs)(L.a,{space:"3",children:[Object(B.jsx)(F,A(A({},e),{},{name:"Home",index:1})),Object(B.jsx)(F,A(A({},e),{},{name:"Staff",index:2})),Object(B.jsx)(F,A(A({},e),{},{name:"Create",index:3}))]}),Object(B.jsx)(L.a,{children:Object(B.jsx)(F,A(A({},e),{},{name:"Settings",index:4}))})]})]})}))}var H=r(22),V=r.n(H),U=r(137),K=r(452),Q=r(225),X=r(480),Y=r(274);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var te=function(e){var t={};return!e.firstName&&(t.firstName="Required"),!e.lastName&&(t.lastName="Required"),!e.phone&&(t.phone="Required"),!e.department&&(t.department="Required"),!e.address.street&&(t.street="Required"),!e.address.city&&(t.city="Required"),!e.address.state&&(t.state="Required"),!e.address.ZIP&&(t.ZIP="Required"),!e.address.country&&(t.country="Required"),t},re=function(e){return Object(B.jsx)(S.a,ee(ee({},e),{},{placeholderTextColor:Object(b.c)("rgba(0, 0, 0, 0.5)","rgba(255, 255, 255, 0.5)"),_light:{color:"ROI.MidGrey",bg:"ROI.LightGrey",borderColor:"rgba(0, 0, 0, 0.5)",borderWidth:"0.4"},_dark:{color:"ROI.White",bg:"ROI.MidGrey",borderColor:"ROI.Charcoal",borderWidth:"0.4"},isRequired:!0}))},ne=function(e){return Object(B.jsxs)(K.a,{w:e.w,children:[Object(B.jsx)(K.a.Label,{htmlFor:e.id,children:e.label}),Object(B.jsx)(re,ee(ee({},e),{},{w:"100%"})),Object(B.jsx)(K.a.ErrorMessage,{children:e.error})]})};function ae(){var e=Object(l.p)(),t=function(e){return V.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(JSON.stringify(e)),console.log("submitting with ",e),t.next=4,V.a.awrap(N(e));case 4:return t.abrupt("return",{op:"create",data:e});case 5:case"end":return t.stop()}}),null,null,null,Promise)};return Object(B.jsx)(P.a,{bg:Object(b.c)("#D9D9D9","#595959"),w:"100%",safeArea:!0,children:Object(B.jsx)(U.b,{initialValues:{id:"",firstName:"",lastName:"",phone:"",department:"",address:{street:"",city:"",state:"",ZIP:"",country:""}},onSubmit:t,validate:te,children:function(r){var n=r.handleChange,a=(r.handleBlur,r.handleSubmit,r.values),c=r.errors,s=r.handleReset;return Object(B.jsx)(U.a,{onSubmit:t,children:Object(B.jsx)(L.a,{safeArea:!0,mx:"3",p:"2",py:"8",w:"90%",maxW:"300px",children:Object(B.jsx)(K.a,{children:Object(B.jsxs)(L.a,{space:3,mt:"5",children:[Object(B.jsx)(Q.a,{children:Object(B.jsx)(X.a,{size:"lg",fontWeight:"600",color:"coolGray.800",_dark:{color:"warmGray.50"},children:"Create a new employee profile"})}),Object(B.jsx)(ne,{label:"ID",id:"id",placeholder:"Enter ID here",isInvalid:"id"in c,value:a.id,onChangeText:n("id")}),Object(B.jsxs)(Y.a,{children:[Object(B.jsx)(ne,{label:"First Name",id:"firstName",placeholder:"e.g. John",isInvalid:"firstName"in c,value:a.firstName,onChangeText:n("firstName"),w:"45%"}),Object(B.jsx)(ne,{label:"Last Name",id:"lastName",placeholder:"e.g. Doe",isInvalid:"lastName"in c,value:a.lastName,onChangeText:n("lastName"),w:"55%"})]}),Object(B.jsx)(ne,{label:"Phone",id:"phone",placeholder:"e.g. 000-000-0000",type:"number",isInvalid:"phone"in c,value:a.phone,onChangeText:n("phone")}),Object(B.jsx)(ne,{label:"Department",id:"department",placeholder:"e.g. department",isInvalid:"department"in c,value:a.department,onChangeText:n("department")}),Object(B.jsxs)(K.a,{children:[Object(B.jsx)(K.a.Label,{htmlFor:"address",children:"Address"}),Object(B.jsxs)(Y.a,{children:[Object(B.jsx)(re,{id:"street",name:"Street",type:"text",placeholder:"Street",w:"60%",isInvalid:"street"in c,value:a.address.street,onChangeText:n("address.street")}),Object(B.jsx)(re,{id:"city",name:"City",type:"text",placeholder:"City",w:"40%",isInvalid:"city"in c,value:a.address.city,onChangeText:n("address.city")})]}),Object(B.jsxs)(Y.a,{children:[Object(B.jsx)(re,{id:"state",name:"State",type:"text",placeholder:"State",w:"40%",isInvalid:"state"in c,value:a.address.state,onChangeText:n("address.state")}),Object(B.jsx)(re,{id:"ZIP",name:"ZIP",type:"text",placeholder:"ZIP",w:"20%",isInvalid:"ZIP"in c,value:a.address.ZIP,onChangeText:n("address.ZIP")}),Object(B.jsx)(re,{id:"country",name:"Country",type:"text",placeholder:"Country",w:"40%",isInvalid:"country"in c,value:a.address.country,onChangeText:n("address.country")})]})]}),Object(B.jsx)(D.a,{bg:"ROI.LightOrange",_hover:{bg:"ROI.BurntOrange"},_pressed:{bg:"ROI.BurntOrange"},type:"submit",onPress:function(){var r;return V.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V.a.awrap(t(a));case 2:r=n.sent,s(),e.navigate("Staff",r);case 5:case"end":return n.stop()}}),null,null,null,Promise)},children:"Submit"}),Object(B.jsx)(D.a,{bg:"ROI.LightOrange",_hover:{bg:"ROI.BurntOrange"},_pressed:{bg:"ROI.BurntOrange"},type:"submit",onPress:function(){s(),e.goBack()},children:"Cancel"})]})})})})}})})}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ie=function(e){return Object(B.jsx)(S.a,se(se({},e),{},{placeholderTextColor:Object(b.c)("rgba(0, 0, 0, 0.5)","rgba(255, 255, 255, 0.5)"),_light:{color:"ROI.MidGrey",bg:"ROI.LightGrey",borderColor:"rgba(0, 0, 0, 0.5)",borderWidth:"0.4"},_dark:{color:"ROI.White",bg:"ROI.MidGrey",borderColor:"ROI.Charcoal",borderWidth:"0.4"},isRequired:!0}))},oe=function(e){return Object(B.jsxs)(K.a,{w:e.w,children:[Object(B.jsx)(K.a.Label,{htmlFor:e.id,children:e.label}),Object(B.jsx)(ie,se(se({},e),{},{w:"100%"})),Object(B.jsx)(K.a.ErrorMessage,{children:e.error})]})};function de(){var e=Object(l.p)(),t=Object(l.r)().params;return console.log(t),Object(B.jsx)(P.a,{bg:Object(b.c)("#D9D9D9","#595959"),w:"100%",safeArea:!0,children:Object(B.jsx)(U.b,{initialValues:{id:t.id,firstName:t.firstName,lastName:t.lastName,phone:t.phone,department:t.department,address:{street:t.address.street,city:t.address.city,state:t.address.state,ZIP:t.address.ZIP,country:t.address.country}},children:function(r){r.handleBlur;var n=r.values;return Object(B.jsx)(L.a,{safeArea:!0,mx:"3",p:"2",py:"8",w:"90%",maxW:"300px",children:Object(B.jsx)(K.a,{children:Object(B.jsxs)(L.a,{space:3,mt:"5",children:[Object(B.jsx)(Q.a,{children:Object(B.jsx)(X.a,{size:"lg",fontWeight:"600",color:"coolGray.800",_dark:{color:"warmGray.50"},children:"Employee details"})}),Object(B.jsx)(oe,{label:"ID",id:"id",value:n.id}),Object(B.jsxs)(Y.a,{children:[Object(B.jsx)(oe,{label:"First Name",id:"firstName",value:n.firstName,w:"45%"}),Object(B.jsx)(oe,{label:"Last Name",id:"lastName",value:n.lastName,w:"55%"})]}),Object(B.jsx)(oe,{label:"Phone",id:"phone",type:"number",value:n.phone}),Object(B.jsx)(oe,{label:"Department",id:"department",value:n.department}),Object(B.jsxs)(K.a,{children:[Object(B.jsx)(K.a.Label,{htmlFor:"address",children:"Address"}),Object(B.jsxs)(Y.a,{readonly:!0,children:[Object(B.jsx)(ie,{readonly:!0,id:"street",name:"Street",type:"text",w:"60%",value:n.address.street}),Object(B.jsx)(ie,{readonly:!0,id:"city",name:"City",type:"text",w:"40%",value:n.address.city})]}),Object(B.jsxs)(Y.a,{readonly:!0,children:[Object(B.jsx)(ie,{id:"state",name:"State",type:"text",w:"40%",value:n.address.state,readonly:!0}),Object(B.jsx)(ie,{readonly:!0,id:"ZIP",name:"ZIP",type:"text",w:"20%",value:n.address.ZIP}),Object(B.jsx)(ie,{readonly:!0,id:"country",name:"Country",type:"text",w:"40%",value:n.address.country})]})]}),Object(B.jsx)(D.a,{bg:"ROI.LightOrange",_hover:{bg:"ROI.BurntOrange"},_pressed:{bg:"ROI.BurntOrange"},type:"submit",onPress:function(){return e.navigate("Edit",t)},children:"Edit"}),Object(B.jsx)(D.a,{bg:"ROI.LightOrange",_hover:{bg:"ROI.BurntOrange"},_pressed:{bg:"ROI.BurntOrange"},type:"submit",onPress:function(){return e.goBack()},children:"Back"})]})})})}})})}function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var be=function(e){var t={};return!e.id&&(t.id="Required"),!e.firstName&&(t.firstName="Required"),!e.lastName&&(t.lastName="Required"),!e.phone&&(t.phone="Required"),!e.department&&(t.department="Required"),!e.address.street&&(t.street="Required"),!e.address.city&&(t.city="Required"),!e.address.state&&(t.state="Required"),!e.address.ZIP&&(t.ZIP="Required"),!e.address.country&&(t.country="Required"),t},Oe=function(e){return Object(B.jsx)(S.a,je(je({},e),{},{placeholderTextColor:Object(b.c)("rgba(0, 0, 0, 0.5)","rgba(255, 255, 255, 0.5)"),_light:{color:"ROI.MidGrey",bg:"ROI.LightGrey",borderColor:"rgba(0, 0, 0, 0.5)",borderWidth:"0.4"},_dark:{color:"ROI.White",bg:"ROI.MidGrey",borderColor:"ROI.Charcoal",borderWidth:"0.4"},isRequired:!0}))},ue=function(e){return Object(B.jsxs)(K.a,{w:e.w,children:[Object(B.jsx)(K.a.Label,{htmlFor:e.id,children:e.label}),Object(B.jsx)(Oe,je(je({},e),{},{w:"100%"})),Object(B.jsx)(K.a.ErrorMessage,{children:e.error})]})};function he(){var e=Object(l.p)(),t=Object(l.r)().params;return Object(B.jsx)(P.a,{bg:Object(b.c)("#D9D9D9","#595959"),w:"100%",safeArea:!0,children:Object(B.jsx)(U.b,{initialValues:{id:t.id,firstName:t.firstName,lastName:t.lastName,phone:t.phone,department:t.department,address:{street:t.address.street,city:t.address.city,state:t.address.state,ZIP:t.address.ZIP,country:t.address.country}},onSubmit:function(t){console.log(JSON.stringify(t)),console.log("submitting with ",t),function(e){var t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("https://enigmatic-ocean-67483.herokuapp.com/profiles",t).then((function(e){return e.json()})).catch((function(e){return console.error(e)}))}(t).then((function(r){var n={op:"update",data:t};e.navigate("Staff",n)}))},validate:be,children:function(t){var r=t.handleChange,n=(t.handleBlur,t.handleSubmit),a=t.values,c=t.errors;return Object(B.jsx)(L.a,{safeArea:!0,mx:"3",p:"2",py:"8",w:"90%",maxW:"300px",children:Object(B.jsx)(K.a,{children:Object(B.jsxs)(L.a,{space:3,mt:"5",children:[Object(B.jsx)(Q.a,{children:Object(B.jsx)(X.a,{size:"lg",fontWeight:"600",color:"coolGray.800",_dark:{color:"warmGray.50"},children:"Update employee profile"})}),Object(B.jsx)(ue,{label:"ID",id:"id",placeholder:"Enter ID here",isInvalid:"id"in c,value:a.id,onChangeText:r("id")}),Object(B.jsxs)(Y.a,{children:[Object(B.jsx)(ue,{label:"First Name",id:"firstName",placeholder:"e.g. John",isInvalid:"firstName"in c,value:a.firstName,onChangeText:r("firstName"),w:"45%"}),Object(B.jsx)(ue,{label:"Last Name",id:"lastName",placeholder:"e.g. Doe",isInvalid:"lastName"in c,value:a.lastName,onChangeText:r("lastName"),w:"55%"})]}),Object(B.jsx)(ue,{label:"Phone",id:"phone",placeholder:"e.g. 000-000-0000",type:"number",isInvalid:"phone"in c,value:a.phone,onChangeText:r("phone")}),Object(B.jsx)(ue,{label:"Department",id:"department",placeholder:"e.g. department",isInvalid:"department"in c,value:a.department,onChangeText:r("department")}),Object(B.jsxs)(K.a,{children:[Object(B.jsx)(K.a.Label,{htmlFor:"address",children:"Address"}),Object(B.jsxs)(Y.a,{children:[Object(B.jsx)(Oe,{id:"street",name:"Street",type:"text",placeholder:"Street",w:"60%",isInvalid:"street"in c,value:a.address.street,onChangeText:r("address.street")}),Object(B.jsx)(Oe,{id:"city",name:"City",type:"text",placeholder:"City",w:"40%",isInvalid:"city"in c,value:a.address.city,onChangeText:r("address.city")})]}),Object(B.jsxs)(Y.a,{children:[Object(B.jsx)(Oe,{id:"state",name:"State",type:"text",placeholder:"State",w:"40%",isInvalid:"state"in c,value:a.address.state,onChangeText:r("address.state")}),Object(B.jsx)(Oe,{id:"ZIP",name:"ZIP",type:"text",placeholder:"ZIP",w:"20%",isInvalid:"ZIP"in c,value:a.address.ZIP,onChangeText:r("address.ZIP")}),Object(B.jsx)(Oe,{id:"country",name:"Country",type:"text",placeholder:"Country",w:"40%",isInvalid:"country"in c,value:a.address.country,onChangeText:r("address.country")})]})]}),Object(B.jsx)(D.a,{bg:"ROI.LightOrange",_hover:{bg:"ROI.BurntOrange"},_pressed:{bg:"ROI.BurntOrange"},type:"submit",onPress:n,children:"Save"}),Object(B.jsx)(D.a,{bg:"ROI.LightOrange",_hover:{bg:"ROI.BurntOrange"},_pressed:{bg:"ROI.BurntOrange"},type:"submit",onPress:function(){return e.goBack()},children:"Cancel"})]})})})}})})}var pe=r(481);r(368);var ge=function(e){return Object(B.jsx)(P.a,{w:["3xs","2xs","xs","sm"],h:"40%",children:Object(B.jsx)(pe.a,{resizeMode:"contain",source:{uri:"https://i.ibb.co/BN0vrkJ/ROI-BAD.png"},alt:"ROI logo",w:"100%",h:"100%"})})};function fe(e){var t=Object(l.p)();return Object(c.useEffect)((function(){}),[]),Object(B.jsxs)(P.a,{alignItems:"center",justifyContent:"center",bg:Object(b.c)("#D9D9D9","#595959"),px:4,flex:1,minW:250,w:"100%",safeArea:!0,children:[Object(B.jsx)(ge,{w:"100%",height:"100%",my:1}),Object(B.jsxs)(L.a,{space:3,size:"100%",children:[Object(B.jsx)(X.a,{fontSize:["2xl","3xl","4xl"],fontWeight:"bold",children:"ROI Staff Manager"}),Object(B.jsx)(w.a,{space:2,alignItems:"center"}),Object(B.jsx)(D.a,{bg:"ROI.LightOrange",_hover:{bg:"ROI.BurntOrange"},_pressed:{bg:"ROI.BurntOrange"},onPress:function(){return t.navigate("Staff")},children:"Staff List"}),Object(B.jsx)(D.a,{bg:"ROI.LightOrange",_hover:{bg:"ROI.BurntOrange"},_pressed:{bg:"ROI.BurntOrange"},onPress:function(){return t.navigate("Create")},children:"Create new profile"}),Object(B.jsx)(D.a,{isDisabled:!0,bg:"ROI.LightOrange",_hover:{bg:"ROI.BurntOrange"},_pressed:{bg:"ROI.BurntOrange"},onPress:function(){return t.navigate("Settings")},children:"Settings"})]})]})}var xe=r(482),me=r(156).a.getColorScheme(),ye=Object(xe.a)({colors:{ROI:{Red:"#941a1d",RealRed:"#7e211f",Charcoal:"#262626",Grey:"#595959",White:"#ffffff",BurntOrange:"#c64c38",LightOrange:"#cb6d4f",MidGrey:"#3b3b3b",LightGrey:"#D9D9D9"}},config:{initialColorMode:String(me),strictMode:"error"}});function ve(e){switch(e){case"bg_dark":return"#595959";case"bg_light":return"#D9D9D9";case"title_dark":return"#262626";case"title_light":return"#941a1d";case"title_btn":case"title_btn_click":return"#";case"btn":return"#c64c38";case"btn_click":return"#cb6d4f"}}function Ie(e){Object(l.p)();return Object(B.jsx)(P.a,{_dark:{bg:ve("bg_dark")},_light:{bg:ve("bg_light")},px:4,flex:1,minW:250,w:"100%",safeArea:!0})}var we=r(17),Re=r.n(we),Pe=r(484),Ce=r(492),Se=r(483),De=r(489),_e=r(247),Ne=r.n(_e);function Be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ge(e){var t=e.icon,r=e.onPress;return Object(B.jsx)(m.a,{icon:t,_hover:{bg:Object(b.c)("ROI.MidGrey","ROI.MidGrey")},_pressed:{bg:Object(b.c)("ROI.MidGrey","ROI.MidGrey")},onPress:r})}function Me(e){var t,r=e.profile,n=Object(l.p)(),a=Object(_e.genConfig)(),c=s.a.useState(!1),i=h()(c,2),o=i[0],d=i[1],j=function(){return d(!1)},O=s.a.useRef(null);return Object(B.jsxs)(I.a,{w:"100%",borderColor:"black",borderWidth:"1px",borderRadius:10,children:[Object(B.jsx)(T.a,{_light:{_hover:{bg:"ROI.BurntOrange"},_pressed:{bg:"ROI.BurntOrange"}},_dark:{_hover:{bg:"ROI.BurntOrange"},_pressed:{bg:"ROI.BurntOrange"}},borderRadius:10,onPress:function(){return n.navigate("Details",r)},children:Object(B.jsx)(I.a,{w:"100%",p:1,children:Object(B.jsxs)(w.a,{w:"100%",alignItems:"center",children:[Object(B.jsx)(Ce.a,{bg:"lightBlue.400",source:{uri:null!=(t=r.uri)?t:""},minW:3,mr:3,children:Object(B.jsx)(Ne.a,ke({style:{width:"3rem",height:"3rem"}},a))}),Object(B.jsx)(I.a,{maxW:"40%",m:0,children:Object(B.jsx)(R.a,{color:"coolGray.800",_dark:{color:"warmGray.50"},bold:!0,children:r.firstName+" "+r.lastName})}),Object(B.jsx)(Se.a,{}),Object(B.jsxs)(Se.b,{wrap:"wrap",justifySelf:"flex-end",direction:["column","row"],ml:0,children:[Object(B.jsx)(Ge,{icon:Object(B.jsx)(y.a,{color:Object(b.c)("black","ROI.White"),size:"5",as:Object(B.jsx)(g.a,{name:"create"})}),onPress:function(){return n.navigate("Edit",r)}}),Object(B.jsx)(Ge,{icon:Object(B.jsx)(y.a,{color:Object(b.c)("black","ROI.White"),size:"5",as:Object(B.jsx)(g.a,{name:"trash"})}),onPress:function(){return d(!o)}})]})]})})}),Object(B.jsx)(De.a,{leastDestructiveRef:O,isOpen:o,onClose:j,children:Object(B.jsxs)(De.a.Content,{children:[Object(B.jsx)(De.a.CloseButton,{}),Object(B.jsx)(De.a.Header,{children:"Delete Customer"}),Object(B.jsx)(De.a.Body,{children:"Are you sure you want to delete "+r.firstName+" "+r.lastName+"?"}),Object(B.jsx)(De.a.Footer,{children:Object(B.jsxs)(D.a.Group,{space:2,children:[Object(B.jsx)(D.a,{variant:"unstyled",colorScheme:"coolGray",onPress:j,ref:O,children:"Cancel"}),Object(B.jsx)(D.a,{colorScheme:"danger",onPress:function(){var e;d(!1),e=r.id,fetch("https://enigmatic-ocean-67483.herokuapp.com/profiles/"+e,{method:"DELETE"}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})),n.navigate("Staff",{op:"delete",id:r.id})},children:"Delete"})]})})]})})]})}function We(){var e=Object(l.p)(),t=Object(l.r)(),r=Object(c.useState)([]),n=h()(r,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){var e;switch(null==(e=t.params)?void 0:e.op){case void 0:_().then((function(e){return s(e)}));break;case"create":console.log("loading with ",t.params.data),s([].concat(Re()(a),[t.params.data]));break;case"update":s(a.map((function(e){return e.id==t.params.data.id?t.params.data:e})));break;case"delete":s(a.filter((function(e){return e.id!==t.params.id})))}}),[t.params]),Object(B.jsxs)(P.a,{bg:Object(b.c)("#D9D9D9","#595959"),px:4,flex:1,minW:250,w:"100%",safeArea:!0,children:[Object(B.jsx)(X.a,{my:6,textAlign:"center",size:"lg",children:"Staff list"}),a.length?Object(B.jsx)(B.Fragment,{}):Object(B.jsx)(R.a,{children:"No profiles found"}),Object(B.jsx)(Pe.a,{w:"70%",data:a,keyExtractor:function(e){return e.id},renderItem:function(e){var t=e.item;return Object(B.jsx)(Me,{profile:t})}}),Object(B.jsxs)(D.a.Group,{w:"70%",my:2,children:[Object(B.jsx)(D.a,{w:"50%",onPress:function(){return e.navigate("Create")},bg:"ROI.LightOrange",_hover:{bg:"ROI.BurntOrange"},_pressed:{bg:"ROI.BurntOrange"},children:"Create Profile"}),Object(B.jsx)(D.a,{w:"50%",onPress:function(){return e.navigate("Home")},bg:"ROI.LightOrange",_hover:{bg:"ROI.BurntOrange"},_pressed:{bg:"ROI.BurntOrange"},children:"Home"})]})]})}function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(j.a)();var Le=Object(d.a)();O.a.get("screen").width;function Ze(){Object(l.p)();var e=Object(b.b)(),t=(e.colorMode,e.toggleColorMode);return Object(B.jsxs)(Le.Navigator,{backBehavior:"history",drawerContent:function(e){return Object(B.jsx)(J,Te({},e))},screenOptions:{drawerStyle:{backgroundColor:Object(b.c)("#D9D9D9","#595959"),maxWidth:"200px"},header:function(e){return Object(B.jsx)(M,Te({colorModeToggle:t},e))}},defaultStatus:"closed",children:[Object(B.jsx)(Le.Screen,{name:"Home",component:fe}),Object(B.jsx)(Le.Screen,{name:"Staff",component:We}),Object(B.jsx)(Le.Screen,{name:"Details",component:de}),Object(B.jsx)(Le.Screen,{name:"Edit",component:he}),Object(B.jsx)(Le.Screen,{name:"Create",component:ae}),Object(B.jsx)(Le.Screen,{name:"Settings",component:Ie})]})}function qe(){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(n.a,{children:Object(B.jsx)(a.a,{theme:ye,bg:"red",children:Object(B.jsx)(Ze,{})})})})}},339:function(e,t,r){e.exports=r(451)},368:function(e,t,r){e.exports=r.p+"static/media/ROI-BAD.087ba7db.png"}},[[339,1,2]]]);
//# sourceMappingURL=app.f22639db.chunk.js.map