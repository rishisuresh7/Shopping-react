(this["webpackJsonpreact-shopping"]=this["webpackJsonpreact-shopping"]||[]).push([[0],{51:function(e,t,n){e.exports=n(90)},56:function(e,t,n){},58:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),i=n.n(c),l=(n(56),n(8)),o=n.n(l),s=n(7),u=n(15),m=n(19),p=n(20),b=n(22),d=n(23),f=n(4),g=(n(58),n(6)),h=n(12),E=(n(63),n(16)),v=Object(E.g)((function(e){var t=e.size,n=e.name,a=e.imageUrl,c=e.history,i=e.match,l=e.linkUrl;return r.a.createElement("div",{className:"".concat(t," menu-item"),onClick:function(){return c.push("".concat(i.path).concat(l))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"menu-content"},r.a.createElement("h1",{className:"title"}," ",n),r.a.createElement("span",{className:"subtitle"},"Shop Now")))})),O=(n(65),function(e){return e.directory}),y=Object(f.a)([O],(function(e){return e.sections})),j=Object(f.a)([O],(function(e){return e.isFetching})),w=Object(f.a)([O],(function(e){return e.isError})),C=Object(f.b)({sections:y}),S=Object(g.b)(C)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(h.a)(e,["id"]);return r.a.createElement(v,Object.assign({key:t},n))})))})),k=function(e){return{type:"FETCH_SECTIONS_SUCCESS",payload:e}},N=(n(66),function(e){return function(t){var n=t.isLoading,a=Object(h.a)(t,["isLoading"]);return n?r.a.createElement("div",{id:"loader"}):r.a.createElement(e,a)}}),T=N(S),U=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchSectionsStart()}},{key:"render",value:function(){var e=this.props,t=e.isLoading,n=e.isError;return r.a.createElement("div",{className:"homepage"},n?r.a.createElement("div",{className:"error"},"Oops something went wrong"):r.a.createElement(T,{isLoading:t}))}}]),n}(r.a.Component),_=Object(f.b)({isLoading:j,isError:w}),A=Object(g.b)(_,(function(e){return{fetchSectionsStart:function(){return e({type:"FETCH_SECTIONS_START"})}}}))(U),I=(n(67),n(9)),x=function(e){return e.shop},D=Object(f.a)([x],(function(e){return e.collection})),R=Object(f.a)([D],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),H=Object(f.a)([x],(function(e){return e.isFetching})),P=Object(f.a)([D],(function(e){return!e})),F=(n(68),n(69),n(70),function(e){var t=e.children,n=e.inverted,a=e.isGoogleSignIn,c=Object(h.a)(e,["children","inverted","isGoogleSignIn"]);return r.a.createElement("button",Object.assign({className:" ".concat(n?"inverted":""," ").concat(a?"google-sign-in":""," custom-button")},c),t)}),M=function(e){return{type:"ADD_CART_ITEM",payload:e}},B=Object(g.b)(null,(function(e){return{addCartItem:function(t){e(M(t))}}}))((function(e){var t=e.item,n=e.addCartItem,a=e.inCart,c=t.imageUrl,i=t.price,l=t.name;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(c,")")},className:"item-preview"}),r.a.createElement("div",{className:"item-title"},r.a.createElement("span",{className:"item-name"},l),r.a.createElement("span",{className:"item-price"},"\u20b9",i)),a?null:r.a.createElement(F,{onClick:function(){return n(t)},inverted:!0},"Add To Cart"))})),L=function(e){var t=e.title,n=e.items;return r.a.createElement("div",{className:"preview-collection"},r.a.createElement("h1",{className:"title"}," ",t.toUpperCase()),r.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(B,{key:e.id,item:e})}))))},W=Object(f.b)({collection:R}),q=Object(g.b)(W)((function(e){var t=e.collection;return r.a.createElement("div",{className:"collection-overview"},t.map((function(e){var t=e.id,n=Object(h.a)(e,["id"]);return r.a.createElement(L,Object.assign({key:t},n))})))})),z=Object(f.b)({isLoading:H}),J=Object(I.d)(Object(g.b)(z),N)(q),G=(n(71),Object(g.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(f.a)([D],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){var t=e.collection;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},t.title),r.a.createElement("div",{className:"items"},t.items.map((function(e){return r.a.createElement(B,{key:e.id,item:e})}))))}))),V=Object(f.b)({isLoading:P}),Y=Object(I.d)(Object(g.b)(V),N)(G),K={FETCH_SHOP_DATA_START:"FETCH_SHOP_DATA_START",FETCH_SHOP_DATA_SUCCESS:"FETCH_SHOP_DATA_SUCCESS",FETCH_SHOP_DATA_FAILURE:"FETCH_SHOP_DATA_FAILURE",INIT_SHOP:"INIT_SHOP"},Q=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){var e=this.props.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(E.b,{exact:!0,path:e.path,component:J}),r.a.createElement(E.b,{exact:!0,path:"".concat(e.path,"/:collectionId"),component:Y}))}}]),n}(r.a.Component),X=Object(g.b)(null,(function(e){return{fetchData:function(){return e({type:K.FETCH_SHOP_DATA_START})}}}))(Q),Z=n(14);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var te=r.a.createElement("g",{transform:"translate(0.000000,200.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},r.a.createElement("path",{d:"M840 1795 c-151 -33 -298 -113 -411 -226 l-61 -61 123 -73 123 -72 53 43 c30 24 72 53 94 65 57 28 182 59 243 59 119 0 253 -53 344 -135 l51 -46 -15 53 c-31 104 -56 160 -104 231 -52 78 -106 127 -173 157 -51 24 -169 25 -267 5z"}),r.a.createElement("path",{d:"M1296 1748 c5 -7 24 -33 43 -58 102 -134 191 -426 191 -632 l0 -38 -72 -1 -73 0 140 -135 c76 -73 141 -134 145 -134 3 1 68 61 145 135 l140 134 -71 1 -71 0 -7 66 c-8 75 -47 206 -84 279 -77 153 -215 292 -369 369 -59 29 -67 31 -57 14z"}),r.a.createElement("path",{d:"M185 1155 l-140 -134 71 -1 71 0 6 -84 c14 -199 130 -418 299 -563 71 -61 213 -134 305 -157 200 -51 424 -19 612 87 71 40 241 191 241 214 0 5 -55 39 -122 75 l-123 65 -48 -43 c-69 -62 -143 -101 -233 -124 -92 -24 -157 -25 -243 -5 -144 34 -278 141 -345 272 -37 75 -66 173 -66 231 l0 32 73 0 72 1 -139 134 c-77 74 -142 135 -145 135 -3 0 -69 -61 -146 -135z"})),ne=function(e){var t=e.svgRef,n=e.title,a=ee(e,["svgRef","title"]);return r.a.createElement("svg",$({width:"50px",height:"50px",viewBox:"0 0 200.000000 200.000000",preserveAspectRatio:"xMidYMid meet",ref:t},a),n?r.a.createElement("title",null,n):null,te)},ae=r.a.forwardRef((function(e,t){return r.a.createElement(ne,$({svgRef:t},e))})),re=(n.p,n(24)),ce=n.n(re);n(72),n(74);ce.a.initializeApp({apiKey:"AIzaSyAOOR8_PHULIMT2inh6axO546PLrHFt6og",authDomain:"shopping-94b2d.firebaseapp.com",databaseURL:"https://shopping-94b2d.firebaseio.com",projectId:"shopping-94b2d",storageBucket:"shopping-94b2d.appspot.com",messagingSenderId:"182413790542",appId:"1:182413790542:web:2aca5ccc9505c47b7f221f"});var ie=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=oe.doc("/users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(s.a)({displayName:r,email:c,date:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("unexpected error happend",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),le=ce.a.auth(),oe=ce.a.firestore(),se=new ce.a.auth.GoogleAuthProvider;se.setCustomParameters({prompt:"select_account"});var ue=function(){return le.signInWithPopup(se)},me=(ce.a,function(e){return e.map((function(e){var t=e.title,n=Object(h.a)(e,["title"]);return Object(s.a)({linkUrl:encodeURI("shop/"+t.toLowerCase())},n)}))}),pe=function(e){return Object.keys(e).filter((function(e){return"_id"!==e})).reduce((function(t,n){return t[n]=e[n],t}),{})};function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function de(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var fe=r.a.createElement("g",null),ge=r.a.createElement("g",null),he=r.a.createElement("g",null),Ee=r.a.createElement("g",null),ve=r.a.createElement("g",null),Oe=r.a.createElement("g",null),ye=r.a.createElement("g",null),je=r.a.createElement("g",null),we=r.a.createElement("g",null),Ce=r.a.createElement("g",null),Se=r.a.createElement("g",null),ke=r.a.createElement("g",null),Ne=r.a.createElement("g",null),Te=r.a.createElement("g",null),Ue=r.a.createElement("g",null),_e=function(e){var t=e.svgRef,n=e.title,a=de(e,["svgRef","title"]);return r.a.createElement("svg",be({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),fe,ge,he,Ee,ve,Oe,ye,je,we,Ce,Se,ke,Ne,Te,Ue)},Ae=r.a.forwardRef((function(e,t){return r.a.createElement(_e,be({svgRef:t},e))})),Ie=(n.p,n(77),function(e){return e.cart}),xe=Object(f.a)([Ie],(function(e){return e.cartItems})),De=Object(f.a)([xe],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Re=Object(f.a)([Ie],(function(e){return e.showDropDown})),He=Object(f.a)([xe],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Pe=Object(f.b)({itemCount:De}),Fe=Object(g.b)(Pe,(function(e){return{showDropDown:function(){e({type:"SHOW_DROP_DOWN"})}}}))((function(e){var t=e.showDropDown,n=e.itemCount;return r.a.createElement("div",{className:"cart",onClick:t},r.a.createElement(Ae,{className:"cart-icon"}),r.a.createElement("span",{className:"cart-count"},n))})),Me=(n(78),n(79),function(e){var t=e.item,n=t.price,a=t.name,c=t.imageUrl,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:c,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"}," ",i," x \u20b9",n," ")))}),Be=Object(f.b)({cartItems:xe}),Le=Object(E.g)(Object(g.b)(Be)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Me,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your Cart is Empty!!!")),r.a.createElement(F,{onClick:function(){n.push("/checkout"),a({type:"SHOW_DROP_DOWN"})}},"GO TO CHECKOUT"))}))),We=Object(f.a)([function(e){return e.user}],(function(e){return e.currentUser})),qe=(n(80),Object(f.b)({currentUser:We,showDropDown:Re})),ze=Object(g.b)(qe)((function(e){var t=e.currentUser,n=e.showDropDown;return r.a.createElement("div",{className:"header"},r.a.createElement(Z.b,{className:"logo-container",to:"/"},r.a.createElement(ae,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(Z.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(Z.b,{className:"option",to:"/contact"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return le.signOut()}},"SIGN OUT"):r.a.createElement(Z.b,{className:"option",to:"/login"},"SIGNIN"),r.a.createElement(Fe,null)),n?r.a.createElement(Le,null):null)})),Je=(n(81),n(28)),Ge=(n(82),n(83),function(e){var t=e.label,n=e.handleChange,a=Object(h.a)(e,["label","handleChange"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:n},a,{autoComplete:"off"})),t?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},t):null)}),Ve=function(){var e=Object(a.useState)(""),t=Object(Je.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),l=Object(Je.a)(i,2),s=l[0],m=l[1],p=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,le.signInWithEmailAndPassword(n,s);case 4:c(""),m(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"signin"},r.a.createElement("h2",{className:"title"},"I already have an Account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:p},r.a.createElement(Ge,{name:"email",type:"email",label:"Email",handleChange:function(e){return c(e.target.value)},value:n,required:!0}),r.a.createElement(Ge,{name:"password",type:"password",label:"Password",handleChange:function(e){m(e.target.value)},value:s,required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(F,{type:"submit"},"Sign In"),r.a.createElement(F,{onClick:ue,isGoogleSignIn:!0},"Sign In With Google"))))},Ye=n(33),Ke=(n(84),function(){var e=Object(a.useState)({email:"",password:"",confirmPassword:"",displayName:""}),t=Object(Je.a)(e,2),n=t[0],c=t[1],i=n.displayName,l=n.email,m=n.password,p=n.confirmPassword,b=function(e){var t=e.target,a=t.name,r=t.value;c(Object(s.a)({},n,Object(Ye.a)({},a,r)))},d=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),m===p){e.next=4;break}return alert("passwords do not match"),e.abrupt("return");case 4:return e.prev=4,e.next=7,le.createUserWithEmailAndPassword(l,m);case 7:return n=e.sent,a=n.user,e.next=11,ie(a,{displayName:i});case 11:c({email:"",password:"",confirmPassword:"",displayName:""}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"signup"},r.a.createElement("h2",{className:"title"},"I don't have an Account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{onSubmit:d},r.a.createElement(Ge,{name:"displayName",type:"text",label:"Display Name",handleChange:b,value:i,required:!0}),r.a.createElement(Ge,{name:"email",type:"email",label:"Email",handleChange:b,value:l,required:!0}),r.a.createElement(Ge,{name:"password",type:"password",label:"Password",handleChange:b,value:m,required:!0}),r.a.createElement(Ge,{name:"confirmPassword",type:"password",label:"Confirm Password",handleChange:b,value:p,required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(F,{type:"submit"},"Sign Up"))))}),Qe=function(){return r.a.createElement("div",{className:"login-page"},r.a.createElement(Ve,null),r.a.createElement(Ke,null))},Xe=(n(85),Object(g.b)(null,(function(e){return{clearCartItem:function(t){return e(function(e){return{type:"CLEAR_CART_ITEM",payload:e}}(t))},addCartItem:function(t){return e(M(t))},removeCartItem:function(t){return e(function(e){return{type:"REMOVE_CART_ITEM",payload:e}}(t))}}}))((function(e){var t=e.item,n=e.clearCartItem,a=e.addCartItem,c=e.removeCartItem;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:t.imageUrl,alt:"item"})),r.a.createElement("span",{className:"name"},t.name),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e "),r.a.createElement("span",{className:"value"},t.quantity),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}}," \u276f")),r.a.createElement("span",{className:"price"},t.price),r.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))}))),Ze=(n(86),n(45)),$e=n.n(Ze),et=function(e){var t=e.price,n=100*t;return r.a.createElement($e.a,{label:"Buy Now",name:"Reuse Store",billingAddress:!0,shippingAddress:!0,currency:"INR",image:"",amount:n,description:"Your total price is $".concat(t),panelLabel:"Pay Now",allowRememberMe:!0,token:function(e){console.log(e),alert("Successful")},stripeKey:""})},tt=Object(f.b)({cartItems:xe,totalPrice:He}),nt=Object(g.b)(tt)((function(e){var t=e.cartItems,n=e.totalPrice;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(Xe,{key:e.id,item:e})})),r.a.createElement("div",{className:"total"},"Total: $",n),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - 01/20 - 123"),r.a.createElement(et,{price:n}))})),at=(n(87),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unSubscribeFromAuth=null,e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.unSubscribeFromAuth=le.onAuthStateChanged(function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,ie(n);case 3:t.sent.onSnapshot((function(t){e.props.setCurrentUser(Object(s.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e.props.setCurrentUser(null);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unSubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(ze,null),r.a.createElement(E.d,null,r.a.createElement(E.b,{strict:!0,path:"/shop",component:X}),r.a.createElement(E.b,{exact:!0,path:"/checkout",component:nt}),r.a.createElement(E.b,{exact:!0,path:"/login",render:function(){return e.props.currentUser?r.a.createElement(E.a,{to:"/"}):r.a.createElement(Qe,null)}}),r.a.createElement(E.b,{path:["/"],component:A})))}}]),n}(r.a.Component)),rt=Object(f.b)({currentUser:We}),ct=Object(g.b)(rt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:"SET_CURRENT_USER",payload:e}}(t))}}}))(at),it=n(46),lt={currentUser:null},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(s.a)({},e,{currentUser:t.payload});default:return e}},st=n(50),ut=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(s.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(st.a)(e),[Object(s.a)({},t,{quantity:1})])},mt=function(e,t){return e.filter((function(e){return e.id!==t.id}))},pt=function(e,t){return e.map((function(e){return e.id===t.id?Object(s.a)({},e,{quantity:e.quantity-1}):e})).filter((function(e){return 0!==e.quantity}))},bt={showDropDown:!1,cartItems:[]},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_DROP_DOWN":return Object(s.a)({},e,{showDropDown:!e.showDropDown});case"ADD_CART_ITEM":return Object(s.a)({},e,{cartItems:ut(e.cartItems,t.payload)});case"CLEAR_CART_ITEM":return Object(s.a)({},e,{cartItems:mt(e.cartItems,t.payload)});case"REMOVE_CART_ITEM":return Object(s.a)({},e,{cartItems:pt(e.cartItems,t.payload)});default:return e}},ft={isFetching:!0,isError:null},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SECTIONS_START":return Object(s.a)({},e,{sections:[],isFetching:!0,error:null});case"FETCH_SECTIONS_SUCCESS":return Object(s.a)({},e,{sections:t.payload,isFetching:!1,error:null});case"FETCH_SECTIONS_FAILURE":return Object(s.a)({},e,{isFetching:!1,error:t.payload});default:return e}},ht={collection:null,isFetching:!1,errorMessage:void 0},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.FETCH_SHOP_DATA_START:return Object(s.a)({},e,{isFetching:!0});case K.FETCH_SHOP_DATA_SUCCESS:return Object(s.a)({},e,{isFetching:!1,collection:t.payload});case K.FETCH_SHOP_DATA_FAILURE:return Object(s.a)({},e,{isFetching:!1,errorMessage:t.payload});default:return e}},vt=n(27),Ot=n(47),yt=n.n(Ot),jt=Object(I.c)({user:ot,cart:dt,directory:gt,shop:Et}),wt={key:"root",storage:yt.a,whitelist:["cart"]},Ct=Object(vt.a)(wt,jt),St=n(49),kt=n(10),Nt=o.a.mark(Ut),Tt=o.a.mark(_t);function Ut(){var e,t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=[{id:3,imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",title:"Sneakers"},{id:4,imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",title:"Jackets"},{id:5,imageUrl:"https://i.ibb.co/cvpntL1/hats.png",title:"Hats"},{id:1,imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",title:"Mens"},{id:2,imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",title:"Womens"}],n.next=4,Object(kt.b)(me,e);case 4:return t=n.sent,n.next=7,Object(kt.c)(k(t));case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(kt.c)({type:"FETCH_SECTIONS_FAILURE",payload:n.t0});case 13:case"end":return n.stop()}}),Nt,null,[[0,9]])}function _t(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(kt.d)("FETCH_SECTIONS_START",Ut);case 2:case"end":return e.stop()}}),Tt)}var At={hats:{id:1,items:[{id:1,imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",name:"Brown Brim",price:25},{id:2,imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",name:"Blue Beanie",price:18},{id:3,imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",name:"Brown Cowboy",price:35},{id:4,imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",name:"Grey Brim",price:25},{id:5,imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",name:"Green Beanie",price:18},{id:6,imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",name:"Palm Tree Cap",price:14},{id:7,imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",name:"Red Beanie",price:18},{id:8,imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",name:"Wolf Cap",price:14},{id:9,imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",name:"Blue Snapback",price:16}],title:"Hats"},jackets:{id:3,items:[{id:18,imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",name:"Black Jean Shearling",price:125},{id:19,imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",name:"Blue Jean Jacket",price:90},{id:20,imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",name:"Grey Jean Jacket",price:90},{id:21,imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",name:"Brown Shearling",price:165},{id:22,imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",name:"Tan Trench",price:185}],title:"Jackets"},mens:{id:5,items:[{id:30,imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",name:"Camo Down Vest",price:325},{id:31,imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",name:"Floral T-shirt",price:20},{id:32,imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",name:"Black & White Longsleeve",price:25},{id:33,imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",name:"Pink T-shirt",price:25},{id:34,imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",name:"Jean Long Sleeve",price:40},{id:35,imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",name:"Burgundy T-shirt",price:25}],title:"Mens"},sneakers:{id:2,items:[{id:10,imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",name:"Adidas NMD",price:220},{id:11,imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",name:"Adidas Yeezy",price:280},{id:12,imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",name:"Black Converse",price:110},{id:13,imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",name:"Nike White AirForce",price:160},{id:14,imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",name:"Nike Red High Tops",price:160},{id:15,imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",name:"Nike Brown High Tops",price:160},{id:16,imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",name:"Air Jordan Limited",price:190},{id:17,imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",name:"Timberlands",price:200}],title:"Sneakers"},womens:{id:4,items:[{id:23,imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",name:"Blue Tanktop",price:25},{id:24,imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",name:"Floral Blouse",price:20},{id:25,imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",name:"Floral Dress",price:80},{id:26,imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",name:"Red Dots Dress",price:80},{id:27,imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",name:"Striped Sweater",price:45},{id:28,imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",name:"Yellow Track Suit",price:135},{id:29,imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",name:"White Blouse",price:20}],title:"Womens"}},It=o.a.mark(Dt),xt=o.a.mark(Rt);function Dt(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(kt.b)(pe,At);case 3:return e=t.sent,t.next=7,Object(kt.c)({type:K.FETCH_SHOP_DATA_SUCCESS,payload:e});case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),t.next=13,Object(kt.c)((n=t.t0.message,{type:K.FETCH_SHOP_DATA_FAILURE,payload:n}));case 13:case"end":return t.stop()}var n}),It,null,[[0,9]])}function Rt(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(kt.d)(K.FETCH_SHOP_DATA_START,Dt);case 2:case"end":return e.stop()}}),xt)}var Ht=o.a.mark(Pt);function Pt(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(kt.a)([Object(kt.b)(_t),Object(kt.b)(Rt)]);case 2:case"end":return e.stop()}}),Ht)}var Ft=Object(St.a)(),Mt=[it.logger,Ft],Bt=Object(I.e)(Ct,I.a.apply(void 0,Mt));Ft.run(Pt);var Lt=Object(vt.b)(Bt),Wt=(vt.b,n(48));i.a.render(r.a.createElement(g.a,{store:Bt},r.a.createElement(Z.a,null,r.a.createElement(Wt.PersistGate,{persistor:Lt},r.a.createElement(ct,null)))),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.df625e6e.chunk.js.map