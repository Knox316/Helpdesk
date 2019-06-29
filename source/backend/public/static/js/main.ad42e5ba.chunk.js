(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,a){e.exports=a(314)},314:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(10),c=a.n(o),l=a(73),s=a(50),i=a(34),u=a(42),m=a(152),d=a(28),p=a(176),f={isAuthenticated:!1,user:{},loading:!1},h={},g=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(d.a)({},e,{isAuthenticated:!p(t.payload),user:t.payload});case"USER_LOADING":return Object(d.a)({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),v=[m.a],b=Object(u.e)(g,{},Object(u.d)(u.a.apply(void 0,v),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||u.d)),E=a(84),y=a.n(E),x=a(9),D=a.n(x),C=function(e){e?D.a.defaults.headers.common.Authorization=e:delete D.a.defaults.headers.common.Authorization},S=function(e){return{type:"SET_CURRENT_USER",payload:e}},k=function(){return function(e){localStorage.removeItem("jwtToken"),C(!1),e(S({}))}},O=a(63),w=a(16),j=a(17),N=a(19),F=a(18),L=a(20),T=a(352),_=a(353),A=a(351),Y=a(74),M=a(350),R=a(355),P=a(354),U=a(35),I=a(316),H=Object(I.a)(function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},bigAvatar:{margin:10,width:300,height:300}}}),W=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(N.a)(this,Object(F.a)(t).call(this,e))).onChange=function(e){a.setState(Object(O.a)({},e.target.id,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={email:a.state.email,password:a.state.password};console.log(t),a.props.loginUser(t)},a.state={email:"",password:"",errors:{}},a}return Object(L.a)(t,e),Object(j.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/Dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/Dashboard")}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",null,n.a.createElement(M.a,{component:"main",maxWidth:"xs"},n.a.createElement(A.a,null),n.a.createElement("div",{className:H.paper},n.a.createElement(T.a,{alt:"IPCA",src:"http://i68.tinypic.com/2gspvkm.png",className:H.bigAvatar})," ",n.a.createElement(Y.a,{component:"h1",variant:"h5"},"Sign in")," ",n.a.createElement(U.ValidatorForm,{ref:"form",className:H.form,noValidate:!0,onSubmit:this.onSubmit},n.a.createElement(U.TextValidator,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",type:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:this.onChange,value:this.state.email,error:e.email,validators:["required"],errorMessages:["this field is required"]})," ",n.a.createElement(U.TextValidator,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:this.onChange,value:this.state.password,error:e.password,validators:["required"],errorMessages:["this field is required"]})," ",n.a.createElement(_.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:H.submit},"Submit"," ")," ",n.a.createElement(P.a,{container:!0},n.a.createElement(P.a,{item:!0},n.a.createElement(R.a,{href:"#/Register",variant:"body2"},"Don't have an account? Sign Up"))))," ")," ")," ")}}]),t}(r.Component),B=Object(i.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){D.a.post("/api/users/login",e).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),C(a);var r=y()(a);t(S(r))}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(W),V=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(N.a)(this,Object(F.a)(t).call(this,e))).onChange=function(e){a.setState(Object(O.a)({},e.target.id,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={name:a.state.name,email:a.state.email,password:a.state.password,password2:a.state.password2};console.log(t),a.props.registerUser(t,a.props.history)},a.state={name:"",email:"",password:"",password2:"",errors:{}},a}return Object(L.a)(t,e),Object(j.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/Dashboard")}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",null,n.a.createElement(M.a,{component:"main",maxWidth:"xs"},n.a.createElement(A.a,null),n.a.createElement("div",{className:H.paper},n.a.createElement(T.a,{alt:"IPCA",src:"http://i68.tinypic.com/2gspvkm.png",className:H.bigAvatar})," ",n.a.createElement(Y.a,{component:"h1",variant:"h5"},"Sign up"," ")," ",n.a.createElement(U.ValidatorForm,{ref:"form",className:H.form,noValidate:!0,onSubmit:this.onSubmit},n.a.createElement(U.TextValidator,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"text",id:"name",label:"Insert your name",name:"name",autoComplete:"name",autoFocus:!0,onChange:this.onChange,value:this.state.name,error:e.name,validators:["required"],errorMessages:["this field is required"]})," ",n.a.createElement(U.TextValidator,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Insert your email",name:"email",autoComplete:"email",autoFocus:!0,onChange:this.onChange,value:this.state.email,error:e.email,validators:["required"],errorMessages:["this field is required"]})," ",n.a.createElement(U.TextValidator,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Insert your Password",type:"password",id:"password",autoComplete:"current-password",onChange:this.onChange,value:this.state.password,error:e.password,validators:["required"],errorMessages:["this field is required"]})," ",n.a.createElement(U.TextValidator,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Repeat your Password",type:"password",id:"password2",autoComplete:"current-password",onChange:this.onChange,value:this.state.password2,error:e.password2,validators:["required"],errorMessages:["this field is required"]})," ",n.a.createElement(_.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:H.submit},"Submit"," ")," ",n.a.createElement(P.a,{item:!0},n.a.createElement(l.b,{href:"#/Login",variant:"body2"}," ","Already have an account? Log in!"," ")," ")," ")," ")," ")," ")}}]),t}(r.Component),q=Object(i.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){D.a.post("/api/users/register",e).then(function(e){t.push("/login")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(s.g)(V)),G=a(160),z=Object(i.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,r=Object(G.a)(e,["component","auth"]);return n.a.createElement(s.b,Object.assign({},r,{render:function(e){return!0===a.isAuthenticated?n.a.createElement(t,e):n.a.createElement(s.a,{to:"/login"})}}))}),J=a(159),X=a(363),Q=a(366),$=a(364),K=a(12),Z=a.n(K),ee=a(25),te=a(315),ae=Object(I.a)(function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},container:{display:"flex",flexWrap:"wrap",overflowY:"hidden"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},button:{margin:e.spacing(1)},padding:{paddingLeft:"16px"}}}),re=a(150),ne=a(349),oe=a(362),ce=a(361),le=a(356),se=a(357),ie=a(359),ue=a(360),me=a(358),de=a(24),pe=a.n(de),fe=function(e){function t(){var e;return Object(w.a)(this,t),(e=Object(N.a)(this,Object(F.a)(t).call(this))).createData=function(e,t,a,r){return{name:e,calories:t,fat:a,batatas:r}},e.createData2=function(e,t,a){return{name:e,calories:t,fat:a}},e.getGlobalState=function(){var t=Object(ee.a)(Z.a.mark(function t(a,r){var n,o,c,l,s,i,u,m,d,p,f,h,g,v,b,E;return Z.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.formFields.from,r=e.state.formFields.to,t.prev=2,t.next=5,D.a.get("http://localhost:3000/issues/count?from=".concat(a,"&to=").concat(r));case 5:return n=t.sent,u=n.data[0],console.log(e.state),t.next=10,D.a.get("/issues/scoreAvg?from=".concat(a,"&to=").concat(r));case 10:return o=t.sent,void 0===(m=o.data[0])&&(m=0),t.next=15,D.a.get("/issues/scoreStd?from=".concat(a,"&to=").concat(r));case 15:return c=t.sent,void 0===(d=c.data[0])&&(d=0),t.next=20,D.a.get("/issues/priority/responseTimeAvg?from=".concat(a,"&to=").concat(r));case 20:return l=t.sent,p=l.data,864e5,f=p.map(function(e){return e._id.name}),h=p.map(function(e){return Math.round(e.avgRTime/864e5)}),void 0===f&&(f=0),void 0===h&&(h=0),t.next=29,D.a.get("/issues/collaborators/responseTimeAvg?from=".concat(a,"&to=").concat(r));case 29:return s=t.sent,g=s.data,void 0===(v=g.map(function(e){return e._id.name}))&&(v=0),t.next=35,D.a.get("/issues/collaborators/scoreAvg?from=".concat(a,"&to=").concat(r));case 35:i=t.sent,b=i.data,void 0===(E=b.map(function(e){return e._id.name}))&&(E=0),e.setState({count:u,avgScore:m,stdDevScore:d,descrLevel:f,valueLevel:h,celerUser:v,scoreUser:E}),t.next=45;break;case 42:t.prev=42,t.t0=t.catch(2),console.log(t.t0);case 45:case"end":return t.stop()}},t,null,[[2,42]])}));return function(e,a){return t.apply(this,arguments)}}(),e.state={age:"",name:"ai",formFields:{from:"",to:""},count:{total:"0",neval:"0"},avgScore:{avgScore:"-"},stdDevScore:{stdDevScore:"-"},descrLevel:["Descri\xe7\xe3o Nivel"],valueLevel:["Tempo m\xe9dio"],celerUser:["Top Utilizadores"],scoreUser:["Top Utilizadores"]},e}return Object(L.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this,t=[this.createData("N\xba total pedidos",this.state.count.total),this.createData("% Pedidos N\xe3o Avaliados",this.state.count.neval/this.state.count.total),this.createData("Avalia\xe7\xe3o m\xe9dia Qualidade",this.state.avgScore.avgScore),this.createData("Desvio padr\xe3o",this.state.stdDevScore.stdDevScore)],a=[this.createData2(this.state.descrLevel[0],this.state.valueLevel[0]),this.createData2(this.state.descrLevel[1],this.state.valueLevel[1]),this.createData2(this.state.descrLevel[2],this.state.valueLevel[2])];return n.a.createElement("div",{className:ae.root},n.a.createElement(P.a,{container:!0,spacing:3},n.a.createElement("form",{style:{display:"inline-flex",padding:"15px"}},n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(re.a,{id:"from",label:"De",type:"date",name:"from",defaultValue:"2017-05-24",className:ae.textField,InputLabelProps:{shrink:!0},formatDate:function(e){return pe()(e).format("DD-MM-YYYY")},onChange:function(t){return e.inputChangeHandler.call(e,t)},value:this.state.formFields.from})," ")," ",n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(re.a,{id:"date",label:"At\xe9",type:"date",name:"to",defaultValue:"2017-05-24",className:ae.textField,InputLabelProps:{shrink:!0},formatDate:function(e){return pe()(e).format("DD-MM-YYYY")},onChange:function(t){return e.inputChangeHandler.call(e,t)},value:this.state.formFields.to})," ")," ",n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(_.a,{type:"button",variant:"contained",className:ae.button,onClick:function(t){return e.getGlobalState(e.state.formFields)}},"Submit"," ")," ")," ")," ")," ",n.a.createElement(P.a,{container:!0,spacing:3},n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(te.a,{className:ae.root},n.a.createElement(le.a,{className:ae.table},n.a.createElement(se.a,null," ",t.map(function(e){return n.a.createElement(me.a,{key:e.name},n.a.createElement(ie.a,{component:"th",scope:"row"}," ",e.name," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.calories," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.fat," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.carbs," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.batatas," ")," ")})," ")," ")," ")," ")," ",n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(te.a,{className:ae.root},n.a.createElement(le.a,{className:ae.table},n.a.createElement(ue.a,null,n.a.createElement(me.a,null,n.a.createElement(ie.a,{align:"right"}," Nivel de prioridade ")," ",n.a.createElement(ie.a,{align:"right"}," Tempo m\xe9dio ")," ")," ")," ",n.a.createElement(se.a,null," ",a.map(function(e){return n.a.createElement(me.a,{key:e.name},n.a.createElement(ie.a,{component:"th",scope:"row"}," ",e.name," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.calories," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.fat," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.carbs," ")," ")})," ")," ")," ")," ")," ")," ",n.a.createElement(P.a,{container:!0,spacing:3},n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(te.a,{className:ae.paperClasses},n.a.createElement(ne.a,{className:ae.root,subheader:n.a.createElement("li",null)}," ",n.a.createElement(ce.a,null," ","Top users velocidade"," ")," ",this.state.celerUser.map(function(e){return n.a.createElement(oe.a,{style:{paddingLeft:"15px"},primary:"".concat(e)}," ")})," ")," ")," ")," ",n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(te.a,{className:ae.paperClasses},n.a.createElement(ne.a,{className:ae.root,subheader:n.a.createElement("li",null)}," ",n.a.createElement(ce.a,null," ","Top users score"," ")," ",this.state.scoreUser.map(function(e){return n.a.createElement(oe.a,{style:{paddingLeft:"15px"},primary:"".concat(e)}," ")})," ")," ")," ")," ")," "," ")}},{key:"inputChangeHandler",value:function(e){e.preventDefault();var t=Object(d.a)({},this.state.formFields);t[e.target.name]=e.target.value,this.setState({formFields:t})}},{key:"componentDidMount",value:function(){var e=Object(ee.a)(Z.a.mark(function e(){return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getGlobalState();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(r.Component),he=a(155),ge=Object(I.a)(function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}),ve=a(367),be=a(365),Ee=a(370),ye=a(347),xe=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(N.a)(this,Object(F.a)(t).call(this,e))).createData=function(e,t,a,r){return{name:e,calories:t,fat:a,batatas:r}},a.createData2=function(e,t,a){return{name:e,calories:t,fat:a}},a.handleClick=function(){var e=Object(ee.a)(Z.a.mark(function e(t){var r;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.value,a.setState({prod:r}),console.log("1: "+r),e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.getProdAPI=function(){var e=Object(ee.a)(Z.a.mark(function e(t){var r,n,o,c,l,s,i,u,m,d,p,f,h,g,v,b,E,y,x;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.state.formFields.from,n=a.state.formFields.to,o=t.target.value,e.prev=3,e.next=6,D.a.get("/issues/count?from=".concat(r,"&to=").concat(n,"&product_name=").concat(o));case 6:c=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:return d=c.data[0],e.next=15,D.a.get("/issues/scoreAvg?from=".concat(r,"&to=").concat(n,"&product_name=").concat(o));case 15:return l=e.sent,void 0===(p=l.data[0])&&(p=0),e.next=20,D.a.get("/issues/scoreStd?from=".concat(r,"&to=").concat(n,"&product_name=").concat(o));case 20:return s=e.sent,void 0===(f=s.data[0])&&(f=0),e.next=25,D.a.get("/issues/priority/responseTimeAvg?from=".concat(r,"&to=").concat(n,"&product_name=").concat(o));case 25:return i=e.sent,h=i.data,864e5,g=h.map(function(e){return e._id.name}),v=h.map(function(e){return Math.round(e.avgRTime/864e5)}),void 0===g&&(g=0),void 0===v&&(v=0),e.next=34,D.a.get("/issues/collaborators/responseTimeAvg?from=".concat(r,"&to=").concat(n,"&product_name=").concat(o));case 34:return u=e.sent,b=u.data,void 0===(E=b.map(function(e){return e._id.name}))&&(Object(he.a)("celerUser"),E=0),e.next=40,D.a.get("/issues/collaborators/scoreAvg?from=".concat(r,"&to=").concat(n,"&product_name=").concat(o));case 40:m=e.sent,y=m.data,void 0===(x=y.map(function(e){return e._id.name}))&&(x=0),a.setState({count:d,avgScore:p,stdDevScore:f,descrLevel:g,valueLevel:v,celerUser:E,scoreUser:x});case 45:case"end":return e.stop()}},e,null,[[3,9]])}));return function(t){return e.apply(this,arguments)}}(),a.getProductName=function(){var e=Object(ee.a)(Z.a.mark(function e(t,r){var n,o,c;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.formFields.from,r=a.state.formFields.to,e.prev=2,e.next=5,D.a.get("/issues/projects?from=".concat(t,"&to=").concat(r));case 5:n=e.sent,o=n.data,c=o.map(function(e){return e._id.product_name}),a.setState({prods:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[2,11]])}));return function(t,a){return e.apply(this,arguments)}}(),a.state={age:"",name:"ai",formFields:{from:"",to:""},prods:[],prod:"",count:{total:"0",neval:"0"},avgScore:{avgScore:"-"},stdDevScore:{stdDevScore:"-"},descrLevel:["Descri\xe7\xe3o Nivel"],valueLevel:["Tempo m\xe9dio"],celerUser:["Top Utilizadores"],scoreUser:["Top Utilizadores"]},a}return Object(L.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this,t=[this.createData("N\xba total pedidos",this.state.count.total),this.createData("% Pedidos N\xe3o Avaliados",this.state.count.neval/this.state.count.total),this.createData("Avalia\xe7\xe3o m\xe9dia Qualidade",this.state.avgScore.avgScore),this.createData("Desvio padr\xe3o",this.state.stdDevScore.stdDevScore)],a=[this.createData2(this.state.descrLevel[0],this.state.valueLevel[0]),this.createData2(this.state.descrLevel[1],this.state.valueLevel[1]),this.createData2(this.state.descrLevel[2],this.state.valueLevel[2])];return n.a.createElement("div",{className:ae.root},n.a.createElement(P.a,{container:!0,spacing:3},n.a.createElement("form",{style:{display:"inline-flex",padding:"15px"}},n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(re.a,{id:"from",label:"De",type:"date",name:"from",defaultValue:"2017-05-24",className:ae.textField,InputLabelProps:{shrink:!0},formatDate:function(e){return pe()(e).format("DD-MM-YYYY")},onChange:function(t){return e.inputChangeHandler.call(e,t)},value:this.state.formFields.from})," ")," ",n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(re.a,{id:"date",label:"At\xe9",type:"date",name:"to",defaultValue:"2017-05-24",className:ae.textField,InputLabelProps:{shrink:!0},formatDate:function(e){return pe()(e).format("DD-MM-YYYY")},onChange:function(t){return e.inputChangeHandler.call(e,t)},value:this.state.formFields.to})," ")," ",n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(_.a,{type:"button",variant:"contained",className:ae.button,onClick:function(t){return e.getProductName(e.state.formFields)}},"Submit"," ")," ")," ",n.a.createElement(P.a,{item:!0,xs:!0,style:{paddingLeft:"15px"}},n.a.createElement(Ee.a,{shrink:!0,htmlFor:"age-label-placeholder"},"Produto"," ")," ",n.a.createElement(be.a,{value:this.state.prods,onChange:function(t){e.getProdAPI(t),e.handleClick(t)},input:n.a.createElement(ye.a,{name:"prods",id:"age-label-placeholder"}),displayEmpty:!0,name:"prods",className:ge.selectEmpty},n.a.createElement(ve.a,{value:this.state.prod},n.a.createElement("em",null," Selecione o produto ")," ")," ",this.state.prods.map(function(e,t){return n.a.createElement(ve.a,{value:e,key:t,name:"prod"}," ",e," ")})," ")," ")," ")," ")," ",n.a.createElement(P.a,{container:!0,spacing:3},n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(te.a,{className:ae.root},n.a.createElement(le.a,{className:ae.table},n.a.createElement(se.a,null," ",t.map(function(e){return n.a.createElement(me.a,{key:e.name},n.a.createElement(ie.a,{component:"th",scope:"row"}," ",e.name," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.calories," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.fat," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.carbs," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.batatas," ")," ")})," ")," ")," ")," ")," ",n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(te.a,{className:ae.root},n.a.createElement(le.a,{className:ae.table},n.a.createElement(ue.a,null,n.a.createElement(me.a,null,n.a.createElement(ie.a,{align:"right"}," Nivel de prioridade ")," ",n.a.createElement(ie.a,{align:"right"}," Tempo m\xe9dio ")," ")," ")," ",n.a.createElement(se.a,null," ",a.map(function(e){return n.a.createElement(me.a,{key:e.name},n.a.createElement(ie.a,{component:"th",scope:"row"}," ",e.name," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.calories," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.fat," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.carbs," ")," ")})," ")," ")," ")," ")," ")," ",n.a.createElement(P.a,{container:!0,spacing:3},n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(te.a,{className:ae.paperClasses},n.a.createElement(ne.a,{className:ae.root,subheader:n.a.createElement("li",null)}," ",n.a.createElement(ce.a,null," ","Top users velocidade"," ")," ",this.state.celerUser.map(function(e){return n.a.createElement(oe.a,{style:{paddingLeft:"15px"},primary:"".concat(e)}," ")})," ")," ")," ")," ",n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(te.a,{className:ae.paperClasses},n.a.createElement(ne.a,{className:ae.root,subheader:n.a.createElement("li",null)}," ",n.a.createElement(ce.a,null," ","Top users score"," ")," ",this.state.scoreUser.map(function(e){return n.a.createElement(oe.a,{style:{paddingLeft:"15px"},primary:"".concat(e)}," ")})," ")," ")," ")," ")," ")}},{key:"inputChangeHandler",value:function(e){e.preventDefault();var t=Object(d.a)({},this.state.formFields);t[e.target.name]=e.target.value,this.setState({formFields:t})}},{key:"componentDidMount",value:function(){}}]),t}(r.Component),De=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(N.a)(this,Object(F.a)(t).call(this,e))).createData=function(e,t,a,r){return{name:e,calories:t,fat:a,batatas:r}},a.createData2=function(e,t,a){return{name:e,calories:t,fat:a}},a.handleClick=function(){var e=Object(ee.a)(Z.a.mark(function e(t){var r;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.value,a.setState({prod:r}),console.log(a.state),e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.GetColabAPI=function(){var e=Object(ee.a)(Z.a.mark(function e(t){var r,n,o,c,l,s,i,u,m,d,p,f,h;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.state.formFields.from,n=a.state.formFields.to,o=t.target.value,e.prev=3,e.next=6,D.a.get("/issues/count?from=".concat(r,"&to=").concat(n,"&collaborator_name=").concat(o));case 6:c=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:return u=c.data[0],e.next=15,D.a.get("/issues/scoreAvg?from=".concat(r,"&to=").concat(n,"&collaborator_name=").concat(o));case 15:return l=e.sent,void 0===(m=l.data[0])&&(m=0),e.next=20,D.a.get("/issues/scoreStd?from=".concat(r,"&to=").concat(n,"&collaborator_name=").concat(o));case 20:return s=e.sent,void 0===(d=s.data[0])&&(d=0),e.next=25,D.a.get("/issues/priority/responseTimeAvg?from=".concat(r,"&to=").concat(n,"&collaborator_name=").concat(o));case 25:i=e.sent,p=i.data,864e5,f=p.map(function(e){return e._id.name}),h=p.map(function(e){return Math.round(e.avgRTime/864e5)}),void 0===f&&(f=0),void 0===h&&(h=0),a.setState({count:u,avgScore:m,stdDevScore:d,descrLevel:f,valueLevel:h});case 33:case"end":return e.stop()}},e,null,[[3,9]])}));return function(t){return e.apply(this,arguments)}}(),a.getColabName=function(){var e=Object(ee.a)(Z.a.mark(function e(t,r){var n,o,c;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.formFields.from,r=a.state.formFields.to,e.prev=2,e.next=5,D.a.get("/issues/collaborators?from=".concat(t,"&to=").concat(r));case 5:n=e.sent,o=n.data,c=o.map(function(e){return e._id.name}),a.setState({prods:c},function(){console.log("1"+a.state)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[2,11]])}));return function(t,a){return e.apply(this,arguments)}}(),a.state={age:"",name:"ai",formFields:{from:"",to:""},prods:["Sem nome"],prod:"",count:{total:"0",neval:"0"},avgScore:{avgScore:"-"},stdDevScore:{stdDevScore:"-"},descrLevel:["Descri\xe7\xe3o Nivel"],valueLevel:["Tempo m\xe9dio"]},a}return Object(L.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this,t=[this.createData("N\xba total pedidos",this.state.count.total),this.createData("% Pedidos N\xe3o Avaliados",this.state.count.total?this.state.count.neval/this.state.count.total:0),this.createData("Avalia\xe7\xe3o m\xe9dia Qualidade",this.state.avgScore.avgScore),this.createData("Desvio padr\xe3o",this.state.stdDevScore.stdDevScore)],a=[this.createData2(this.state.descrLevel[0],this.state.valueLevel[0]),this.createData2(this.state.descrLevel[1],this.state.valueLevel[1]),this.createData2(this.state.descrLevel[2],this.state.valueLevel[2])];return n.a.createElement("div",{className:ae.root},n.a.createElement(P.a,{container:!0,spacing:3},n.a.createElement("form",{style:{display:"inline-flex",padding:"15px"}},n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(re.a,{id:"from",label:"De",type:"date",name:"from",className:ae.textField,InputLabelProps:{shrink:!0},formatDate:function(e){return pe()(e).format("DD-MM-YYYY")},onChange:function(t){return e.inputChangeHandler.call(e,t)},value:this.state.formFields.from})," ")," ",n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(re.a,{id:"date",label:"At\xe9",type:"date",name:"to",className:ae.textField,InputLabelProps:{shrink:!0},formatDate:function(e){return pe()(e).format("DD-MM-YYYY")},onChange:function(t){return e.inputChangeHandler.call(e,t)},value:this.state.formFields.to})," ")," ",n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(_.a,{type:"button",variant:"contained",className:ae.button,onClick:function(t){return e.getColabName(e.state.formFields)}},"Submit"," ")," ")," ",n.a.createElement(P.a,{item:!0,xs:!0,style:{paddingLeft:"15px"}},n.a.createElement(Ee.a,{shrink:!0,htmlFor:"age-label-placeholder"},"Produto"," ")," ",n.a.createElement(be.a,{value:this.state.prod,onChange:function(t){e.GetColabAPI(t),e.handleClick(t)},input:n.a.createElement(ye.a,{name:"prod",id:"age-label-placeholder"}),displayEmpty:!0,name:"prod",className:ge.selectEmpty},n.a.createElement(ve.a,{value:this.state.prod},n.a.createElement("em",null," Selecione o colaborador ")," ")," ",this.state.prods.map(function(e,t){return n.a.createElement(ve.a,{value:e,key:t,name:"prod"}," ",e," ")})," ")," ")," ")," ")," ",n.a.createElement(P.a,{container:!0,spacing:3},n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(te.a,{className:ae.root},n.a.createElement(le.a,{className:ae.table},n.a.createElement(se.a,null," ",t.map(function(e){return n.a.createElement(me.a,{key:e.name},n.a.createElement(ie.a,{component:"th",scope:"row"}," ",e.name," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.calories," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.fat," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.carbs," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.batatas," ")," ")})," ")," ")," ")," ")," ",n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(te.a,{className:ae.root},n.a.createElement(le.a,{className:ae.table},n.a.createElement(ue.a,null,n.a.createElement(me.a,null,n.a.createElement(ie.a,{align:"right"}," Nivel de prioridade ")," ",n.a.createElement(ie.a,{align:"right"}," Tempo m\xe9dio ")," ")," ")," ",n.a.createElement(se.a,null," ",a.map(function(e){return n.a.createElement(me.a,{key:e.name},n.a.createElement(ie.a,{component:"th",scope:"row"}," ",e.name," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.calories," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.fat," ")," ",n.a.createElement(ie.a,{align:"right"}," ",e.carbs," ")," ")})," ")," ")," ")," ")," ")," ")}},{key:"inputChangeHandler",value:function(e){e.preventDefault();var t=Object(d.a)({},this.state.formFields);t[e.target.name]=e.target.value,this.setState({formFields:t})}},{key:"componentDidMount",value:function(){}}]),t}(r.Component),Ce=Object(I.a)(function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}),Se=a(91),ke=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(N.a)(this,Object(F.a)(t).call(this,e))).getData=function(){var e=Object(ee.a)(Z.a.mark(function e(t,r){var n,o,c,l;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.formFields.from,r=a.state.formFields.to,e.prev=2,e.next=5,D.a.get("/issues/periodic/count?from=".concat(t,"&to=").concat(r));case 5:n=e.sent,o=n.data,c=[],l=o.map(function(e){return e.count}),o.map(function(e){return c.push("".concat(e._id.year,"-").concat(e._id.month,"-").concat(e._id.day))}),console.log(l),console.log(c),a.setState({labels:c,datasets:[{label:"Numero pedidos",fill:!0,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:.1,pointHitRadius:10,data:l}]}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}},e,null,[[2,15]])}));return function(t,a){return e.apply(this,arguments)}}(),a.state={formFields:{from:"",to:""},labels:[],data:[]},a}return Object(L.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("form",{style:{display:"inline-flex",padding:"15px"}},n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(re.a,{id:"from",label:"De",type:"date",name:"from",defaultValue:"2017-05-24",className:ae.textField,InputLabelProps:{shrink:!0},formatDate:function(e){return pe()(e).format("DD-MM-YYYY")},onChange:function(t){return e.inputChangeHandler.call(e,t)},value:this.state.formFields.from})," ")," ",n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(re.a,{id:"date",label:"At\xe9",type:"date",name:"to",defaultValue:"2017-05-24",className:ae.textField,InputLabelProps:{shrink:!0},formatDate:function(e){return pe()(e).format("DD-MM-YYYY")},onChange:function(t){return e.inputChangeHandler.call(e,t)},value:this.state.formFields.to})," ")," ",n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(_.a,{type:"button",variant:"contained",className:ae.button,onClick:function(t){return e.getData(e.state.formFields)}},"Submit"," ")," ")," "),n.a.createElement(Se.a,{data:this.state}))}},{key:"inputChangeHandler",value:function(e){e.preventDefault();var t=Object(d.a)({},this.state.formFields);t[e.target.name]=e.target.value,this.setState({formFields:t})}},{key:"componentDidMount",value:function(){this.getData()}}]),t}(r.Component),Oe=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(N.a)(this,Object(F.a)(t).call(this,e))).getData=function(){var e=Object(ee.a)(Z.a.mark(function e(t,r){var n,o,c,l;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.formFields.from,r=a.state.formFields.to,e.prev=2,e.next=5,D.a.get("/issues/periodic/scoreAvg?from=".concat(t,"&to=").concat(r));case 5:n=e.sent,o=n.data,c=[],l=o.map(function(e){return e.avgScore}),o.map(function(e){return c.push("".concat(e._id.year,"-").concat(e._id.month,"-").concat(e._id.day))}),console.log(l),console.log(c),a.setState({labels:c,datasets:[{label:"Avalia\xe7\xe3o m\xe9dia",fill:!0,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:l}]}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}},e,null,[[2,15]])}));return function(t,a){return e.apply(this,arguments)}}(),a.state={formFields:{from:"",to:""},labels:[],datasets:[{label:[],fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[]}]},a}return Object(L.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("form",{style:{display:"inline-flex",padding:"15px"}},n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(re.a,{id:"from",label:"De",type:"date",name:"from",defaultValue:"2017-05-24",className:ae.textField,InputLabelProps:{shrink:!0},formatDate:function(e){return pe()(e).format("DD-MM-YYYY")},onChange:function(t){return e.inputChangeHandler.call(e,t)},value:this.state.formFields.from})," ")," ",n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(re.a,{id:"date",label:"At\xe9",type:"date",name:"to",defaultValue:"2017-05-24",className:ae.textField,InputLabelProps:{shrink:!0},formatDate:function(e){return pe()(e).format("DD-MM-YYYY")},onChange:function(t){return e.inputChangeHandler.call(e,t)},value:this.state.formFields.to})," ")," ",n.a.createElement(P.a,{item:!0,xs:!0},n.a.createElement(_.a,{type:"button",variant:"contained",className:ae.button,onClick:function(t){return e.getData(e.state.formFields)}},"Submit"," ")," ")," "),n.a.createElement(Se.a,{data:this.state})," ")}},{key:"inputChangeHandler",value:function(e){e.preventDefault();var t=Object(d.a)({},this.state.formFields);t[e.target.name]=e.target.value,this.setState({formFields:t})}},{key:"componentDidMount",value:function(){this.getData()}}]),t}(r.Component),we=Object(I.a)(function(e){return{root:{width:"100%",maxWidth:500}}}),je=function(e){function t(){return Object(w.a)(this,t),Object(N.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:Ce.root},n.a.createElement(P.a,{container:!0,spacing:3},n.a.createElement(P.a,{item:!0,xs:6},n.a.createElement(te.a,{className:Ce.paper},n.a.createElement(Y.a,{className:we.root,variant:"h6",gutterBottom:!0},"Numero pedidos"),n.a.createElement(ke,null))),n.a.createElement(P.a,{item:!0,xs:6},n.a.createElement(te.a,{className:Ce.paper},n.a.createElement(Y.a,{className:we.root,variant:"h6",gutterBottom:!0},"Avalia\xe7\xe3o M\xe9dia"),n.a.createElement(Oe,null))))))}}]),t}(r.Component),Ne=(a(157),Object(I.a)(function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper,top:0}}}));function Fe(e){return n.a.createElement(Y.a,{component:"div",style:{padding:24}}," ",e.children," ")}var Le=Object(i.b)(function(e){return{auth:e.auth}},{logoutUser:k})(function(e){var t=n.a.useState(0),a=Object(J.a)(t,2),r=a[0],o=a[1];return n.a.createElement("div",{className:Ne.root},n.a.createElement(X.a,{position:"sticky"},n.a.createElement(Q.a,{value:r,onChange:function(e,t){o(t)},centered:!0}," "," ",n.a.createElement($.a,{label:"Indicadores Globais"}),n.a.createElement($.a,{label:"Indicadores Colaboradores"}),n.a.createElement($.a,{label:"Indicadores Produto"}),n.a.createElement($.a,{label:"Indicadores Temporais"})," ",e.name," ",n.a.createElement(_.a,{color:"inherit",onClick:function(t){t.preventDefault(),e.logoutUser()}.bind(void 0)},"Logout"," ")," ")," ")," ",0===r&&n.a.createElement(Fe,null,n.a.createElement(M.a,{maxWidth:"xl"},n.a.createElement(fe,null))," ")," ",1===r&&n.a.createElement(Fe,null,n.a.createElement(M.a,{maxWidth:"xl"},n.a.createElement(De,null))," ")," ",2===r&&n.a.createElement(Fe,null,n.a.createElement(M.a,{maxWidth:"xl"},n.a.createElement(xe,null))," ")," ",3===r&&n.a.createElement(Fe,null,n.a.createElement(M.a,{maxWidth:"xl"},n.a.createElement(je,null))," ")," ")}),Te=function(e){function t(){var e,a;Object(w.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(N.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(n)))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser()},a}return Object(L.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(Le,null))}}]),t}(r.Component);a(313);if(localStorage.jwtToken){var _e=localStorage.jwtToken;C(_e);var Ae=y()(_e);b.dispatch(S(Ae));var Ye=Date.now()/1e3;Ae.exp<Ye&&(b.dispatch(k()),window.location.href="./login")}var Me=function(){return n.a.createElement(i.a,{store:b},n.a.createElement(l.a,null,n.a.createElement(s.d,null,n.a.createElement(z,{path:"/Dashboard",component:Te})," ",n.a.createElement(s.b,{path:"/Login",component:B})," ",n.a.createElement(s.b,{path:"/",exact:!0,component:B})," ",n.a.createElement(s.b,{path:"/Register",exact:!0,component:q})," ",n.a.createElement(s.b,{path:"/Signup",component:q})," ")," ")," ")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[167,1,2]]]);
//# sourceMappingURL=main.ad42e5ba.chunk.js.map