(function(e){function t(t){for(var r,s,i=t[0],m=t[1],l=t[2],u=0,c=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&c.push(a[s][0]),a[s]=0;for(r in m)Object.prototype.hasOwnProperty.call(m,r)&&(e[r]=m[r]);d&&d(t);while(c.length)c.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,i=1;i<o.length;i++){var m=o[i];0!==a[m]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=o[0]))}return e}var r={},a={app:0},n=[];function s(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=r,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],m=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=m;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("c21b")},"2f35":function(e,t){},3320:function(e,t,o){},"3fdb":function(e,t,o){},"48d8":function(e,t,o){"use strict";o("3320")},"56d7":function(e,t,o){"use strict";o.r(t);var r=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.homepage?o("div",{attrs:{id:"homepage"}},[o("h1",[e._v("Welcome to Mdel Management")]),o("img",{attrs:{src:"Images/NewLogo.png"}}),o("br"),o("br"),o("button",{on:{click:function(t){e.changeState()}}},[o("a",[o("router-link",{attrs:{to:"/UserLogin"}},[e._v("Login")])],1)])]):e._e(),o("div",[o("router-view")],1)])},n=[],s=o("fb62"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.loginSucceded?e._e():o("div",[o("h1",[e._v("Login")]),o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"email"}},[e._v("Email: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"email",placeholder:"Enter your email here",required:""},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"password"}},[e._v("Password: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"text",placeholder:"Enter your password here",required:""},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.loginFunction}},[o("a",[o("router-link",{attrs:{to:"/Menu"}},[e._v("Login")])],1)])])])]),e.loginSucceded?o("div",[o("router-view")],1):e._e()])},m=[],l=(o("96cf"),o("1da1")),d={name:"UserLogin",data:function(){return{form:{email:"",password:""},loginSucceded:!1}},methods:{loginFunction:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,o,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="https://localhost:44368/api/Account/login",e.prev=1,e.next=4,fetch(t,{method:"POST",body:JSON.stringify(this.form),headers:new Headers({"Content-Type":"application/json"})});case 4:if(o=e.sent,!o.ok){e.next=13;break}return e.next=8,o.json();case 8:r=e.sent,localStorage.setItem("token",r.jwt),this.loginSucceded=!0,e.next=14;break;case 13:alert("Server returned: "+o.statusText);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](1),alert("Error: "+e.t0);case 19:return e.abrupt("return");case 20:case"end":return e.stop()}},e,this,[[1,16]])}));function t(){return e.apply(this,arguments)}return t}()}},u=d,c=o("2877"),p=Object(c["a"])(u,i,m,!1,null,"6f7cf1f4",null),f=p.exports,v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Add model")]),o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"firstName"}},[e._v("First name: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.firstName,expression:"modelform.firstName"}],attrs:{type:"text"},domProps:{value:e.modelform.firstName},on:{input:function(t){t.target.composing||e.$set(e.modelform,"firstName",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"lastName"}},[e._v("Last name: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.lastName,expression:"modelform.lastName"}],attrs:{type:"text"},domProps:{value:e.modelform.lastName},on:{input:function(t){t.target.composing||e.$set(e.modelform,"lastName",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"email"}},[e._v("Email: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.email,expression:"modelform.email"}],attrs:{type:"email",required:""},domProps:{value:e.modelform.email},on:{input:function(t){t.target.composing||e.$set(e.modelform,"email",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"phoneNumber"}},[e._v("Phonenumber: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.phoneNumber,expression:"modelform.phoneNumber"}],attrs:{type:"text"},domProps:{value:e.modelform.phoneNumber},on:{input:function(t){t.target.composing||e.$set(e.modelform,"phoneNumber",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"adressLine1"}},[e._v("AdressLine1: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.adressLine1,expression:"modelform.adressLine1"}],attrs:{type:"text"},domProps:{value:e.modelform.adressLine1},on:{input:function(t){t.target.composing||e.$set(e.modelform,"adressLine1",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"adressLine2"}},[e._v("AdressLine2: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.adressLine2,expression:"modelform.adressLine2"}],attrs:{type:"text"},domProps:{value:e.modelform.adressLine2},on:{input:function(t){t.target.composing||e.$set(e.modelform,"adressLine2",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"zip"}},[e._v("Zip: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.zip,expression:"modelform.zip"}],attrs:{type:"text"},domProps:{value:e.modelform.zip},on:{input:function(t){t.target.composing||e.$set(e.modelform,"zip",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"City"}},[e._v("City: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.City,expression:"modelform.City"}],attrs:{type:"text"},domProps:{value:e.modelform.City},on:{input:function(t){t.target.composing||e.$set(e.modelform,"City",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"country"}},[e._v("Country: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.country,expression:"modelform.country"}],attrs:{type:"text"},domProps:{value:e.modelform.country},on:{input:function(t){t.target.composing||e.$set(e.modelform,"country",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"birthdate"}},[e._v("Birthdate: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.birthdate,expression:"modelform.birthdate"}],attrs:{type:"datetime"},domProps:{value:e.modelform.birthdate},on:{input:function(t){t.target.composing||e.$set(e.modelform,"birthdate",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"nationality"}},[e._v("Nationality: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.nationality,expression:"modelform.nationality"}],attrs:{type:"text"},domProps:{value:e.modelform.nationality},on:{input:function(t){t.target.composing||e.$set(e.modelform,"nationality",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"height"}},[e._v("Height: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.height,expression:"modelform.height"}],attrs:{type:"number"},domProps:{value:e.modelform.height},on:{input:function(t){t.target.composing||e.$set(e.modelform,"height",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"shoeSize"}},[e._v("Shoe Size: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.shoeSize,expression:"modelform.shoeSize"}],attrs:{type:"number"},domProps:{value:e.modelform.shoeSize},on:{input:function(t){t.target.composing||e.$set(e.modelform,"shoeSize",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"hairColor"}},[e._v("Hair Color: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.hairColor,expression:"modelform.hairColor"}],attrs:{type:"text"},domProps:{value:e.modelform.hairColor},on:{input:function(t){t.target.composing||e.$set(e.modelform,"hairColor",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"eyeColor"}},[e._v("Eye Color: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.eyeColor,expression:"modelform.eyeColor"}],attrs:{type:"text"},domProps:{value:e.modelform.eyeColor},on:{input:function(t){t.target.composing||e.$set(e.modelform,"eyeColor",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"comments"}},[e._v("Comments: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.comments,expression:"modelform.comments"}],attrs:{type:"text"},domProps:{value:e.modelform.comments},on:{input:function(t){t.target.composing||e.$set(e.modelform,"comments",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"password"}},[e._v("Password: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.password,expression:"modelform.password"}],attrs:{type:"password",required:""},domProps:{value:e.modelform.password},on:{input:function(t){t.target.composing||e.$set(e.modelform,"password",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.addModelFunction}},[o("a",[o("router-link",{attrs:{to:"/Menu"}},[e._v("Add Model")])],1)])]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button"},[o("router-link",{attrs:{to:"/Menu"}},[e._v("Back to menu")])],1)])])])},b=[],g={name:"AddModel",data:function(){return{modelform:{firstName:"",lastName:"",email:"",phoneNumber:"",adressLine1:"",adressLine2:"",zip:"",city:"",country:"",birthdate:"",nationality:"",height:"",shoeSize:"",hairColor:"",eyeColor:"",comments:"",password:""}}},methods:{addModelFunction:function(){var e=this,t="https://localhost:44368/api/Models";fetch(t,{method:"POST",body:JSON.stringify(this.modelform),credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(function(t){e.response=t}).catch(function(e){return alert("Something bad happened: "+e)})}}},h=g,y=Object(c["a"])(h,v,b,!1,null,"2b26d7aa",null),x=y.exports,_=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Add News Manager")]),o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"firstName"}},[e._v("First name: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.managerform.firstName,expression:"managerform.firstName"}],attrs:{type:"text"},domProps:{value:e.managerform.firstName},on:{input:function(t){t.target.composing||e.$set(e.managerform,"firstName",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"lastName"}},[e._v("Last name: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.managerform.lastName,expression:"managerform.lastName"}],attrs:{type:"text"},domProps:{value:e.managerform.lastName},on:{input:function(t){t.target.composing||e.$set(e.managerform,"lastName",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"email"}},[e._v("Email: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.managerform.email,expression:"managerform.email"}],attrs:{type:"email",required:""},domProps:{value:e.managerform.email},on:{input:function(t){t.target.composing||e.$set(e.managerform,"email",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"password"}},[e._v("Password: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.managerform.password,expression:"managerform.password"}],attrs:{type:"password",required:""},domProps:{value:e.managerform.password},on:{input:function(t){t.target.composing||e.$set(e.managerform,"password",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){e.addNewManager()}}},[o("a",[o("router-link",{attrs:{to:"/Menu"}},[e._v("Add new manager")])],1)])]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button"},[o("router-link",{attrs:{to:"/Menu"}},[e._v("Back to menu")])],1)])])])},C=[],w={name:"AddNewManager",data:function(){return{managerform:{firstName:"",lastName:"",email:"",password:""}}},methods:{addNewManager:function(){}}},N=w,M=Object(c["a"])(N,_,C,!1,null,"cb229a58",null),J=M.exports,j=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Add New Job")]),o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"customer"}},[e._v("Customer: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addjobform.customer,expression:"addjobform.customer"}],attrs:{type:"text"},domProps:{value:e.addjobform.customer},on:{input:function(t){t.target.composing||e.$set(e.addjobform,"customer",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"startDay"}},[e._v("Start Day: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addjobform.startDay,expression:"addjobform.startDay"}],attrs:{type:"text"},domProps:{value:e.addjobform.startDay},on:{input:function(t){t.target.composing||e.$set(e.addjobform,"startDay",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"days"}},[e._v("Days: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addjobform.days,expression:"addjobform.days"}],attrs:{type:"number"},domProps:{value:e.addjobform.days},on:{input:function(t){t.target.composing||e.$set(e.addjobform,"days",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"location"}},[e._v("Location: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addjobform.location,expression:"addjobform.location"}],attrs:{type:"text"},domProps:{value:e.addjobform.location},on:{input:function(t){t.target.composing||e.$set(e.addjobform,"location",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"comments"}},[e._v("Comments: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addjobform.comments,expression:"addjobform.comments"}],attrs:{type:"text"},domProps:{value:e.addjobform.comments},on:{input:function(t){t.target.composing||e.$set(e.addjobform,"comments",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.addJobFunction}},[o("a",[o("router-link",{attrs:{to:"/Menu"}},[e._v("Add Job")])],1)])]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button"},[o("router-link",{attrs:{to:"/Menu"}},[e._v("Back to menu")])],1)])])])},k=[],A={name:"AddJob",props:{msg:String},data:function(){return{addjobform:{customer:"",startDay:"",days:"",location:"",comments:""}}},methods:{addJobFunction:function(){}}},P=A,S=Object(c["a"])(P,j,k,!1,null,"2ccca50c",null),$=S.exports,T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Add Model To Job")]),o("form",[o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){e.addModelToJobFunction()}}},[o("a",[o("router-link",{attrs:{to:"/Menu"}},[e._v("Add Model To Job")])],1)])]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button"},[o("router-link",{attrs:{to:"/Menu"}},[e._v("Back to menu")])],1)])])])},E=[],L={name:"AddModelToJob",props:{msg:String},data:function(){return{addmodeltojobform:{}}},methods:{addModelToJobFunction:function(){}}},O=L,F=Object(c["a"])(O,T,E,!1,null,"1f2b297b",null),D=F.exports,z=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Remove Model From Job")]),o("form",[o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){e.deleteModelFromJobFunction()}}},[o("a",[o("router-link",{attrs:{to:"/Menu"}},[e._v("Remove Model From Job")])],1)])]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button"},[o("router-link",{attrs:{to:"/Menu"}},[e._v("Back to menu")])],1)])])])},B=[],q={name:"DeleteModelFromJob",props:{msg:String},data:function(){return{deletemodelfromjobform:{}}},methods:{deleteModelFromJobFunction:function(){}}},R=q,U=Object(c["a"])(R,z,B,!1,null,"d757b528",null),H=U.exports,I=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"elements"}},[o("h1",[e._v("See Job")]),e._l(e.jobs,function(t,r){return o("div",{key:r},[o("p",[e._v("Customer: "+e._s(t.customer))]),o("p",[e._v("Start Date: "+e._s(e.dateToString(t.startDate)))]),o("p",[e._v("Days: "+e._s(t.days))]),o("p",[e._v("Location: "+e._s(t.location))]),o("p",[e._v("Comments: "+e._s(t.comments))]),o("br")])}),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",on:{click:e.getJobsFunction}},[e._v("Load")])]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button"},[o("router-link",{attrs:{to:"/Menu"}},[e._v("Back to menu")])],1)])],2)},W=[],G=(o("28a5"),{name:"SeeJobs",data:function(){return{jobs:[]}},methods:{getJobsFunction:function(){var e=this,t="https://localhost:44368/api/Jobs";fetch(t,{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.jobs=t}).catch(function(e){return alert("Something bad happened: "+e)})},dateToString:function(e){var t=e.split("T"),o=t[1].split("+");return t[0]+" "+o[0]}}}),Z=G,K=(o("f008"),Object(c["a"])(Z,I,W,!1,null,"d57c56b8",null)),Q=K.exports,V=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Add Expense To Job")]),o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"date"}},[e._v("Date: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addexpenseform.date,expression:"addexpenseform.date"}],attrs:{type:"text"},domProps:{value:e.addexpenseform.date},on:{input:function(t){t.target.composing||e.$set(e.addexpenseform,"date",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"text"}},[e._v("Text: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addexpenseform.text,expression:"addexpenseform.text"}],attrs:{type:"text"},domProps:{value:e.addexpenseform.text},on:{input:function(t){t.target.composing||e.$set(e.addexpenseform,"text",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"amount"}},[e._v("Amount: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addexpenseform.amount,expression:"addexpenseform.amount"}],attrs:{type:"number"},domProps:{value:e.addexpenseform.amount},on:{input:function(t){t.target.composing||e.$set(e.addexpenseform,"amount",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){e.addExpenseToJobFunction()}}},[o("a",[o("router-link",{attrs:{to:"/Menu"}},[e._v("Add Expense To Job")])],1)])]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button"},[o("router-link",{attrs:{to:"/Menu"}},[e._v("Back to menu")])],1)])])])},X=[],Y={name:"AddExpenseToJob",props:{msg:String},data:function(){return{addexpenseform:{date:"",text:"",amount:""}}},methods:{addExpenseToJobFunction:function(){}}},ee=Y,te=Object(c["a"])(ee,V,X,!1,null,"ae70511a",null),oe=te.exports,re={name:"app",components:{Menu:s["default"],UserLogin:f,AddModel:x,AddManager:J,AddModelJob:$,AddModelToJob:D,DeleteModelFromJob:H,SeeJobs:Q,AddExpenseToJob:oe},data:function(){return{homepage:!0}},methods:{changeState:function(){this.homepage=!1}}},ae=re,ne=(o("034f"),Object(c["a"])(ae,a,n,!1,null,null,null)),se=ne.exports,ie=o("8c4f");r["a"].use(ie["a"]);var me=new ie["a"]({mode:"history",base:"/",routes:[{path:"/Menu",name:"Menu",component:s["default"]},{path:"/UserLogin",name:"UserLogin",component:f},{path:"/AddModel",name:"AddModel",component:x},{path:"/AddManager",name:"AddManager",component:J},{path:"/AddModelJob",name:"AddModelJob",component:$},{path:"/AddModelToJob",name:"AddModelToJob",component:D},{path:"/DeleteModelFromJob",name:"DeleteModelFromJob",component:H},{path:"/SeeJobs",name:"SeeJobs",component:Q},{path:"/AddExpenseToJob",name:"AddExpenseToJob",component:oe}]});r["a"].config.productionTip=!0,new r["a"]({router:me,render:function(e){return e(se)}}).$mount("#app")},9738:function(e,t,o){"use strict";var r=o("2f35"),a=o.n(r);t["default"]=a.a},c21b:function(e,t,o){},c593:function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return a});var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"Menu"}},[o("h1",[e._v("Welcome to ModelManagement!")]),o("button",[o("router-link",{attrs:{to:"/AddModel"}},[e._v("Add New Model")])],1),o("br"),o("br"),o("button",[o("router-link",{attrs:{to:"/AddManager"}},[e._v("Add New Manager")])],1),o("br"),o("br"),o("button",[o("router-link",{attrs:{to:"/AddModelJob"}},[e._v("Add New Job")])],1),o("br"),o("br"),o("button",[o("router-link",{attrs:{to:"/AddModelToJob"}},[e._v("Add Model To Job")])],1),o("br"),o("br"),o("button",[o("router-link",{attrs:{to:"/DeleteModelFromJob"}},[e._v("Remove Model From Job")])],1),o("br"),o("br"),o("button",[o("router-link",{attrs:{to:"/SeeJobs"}},[e._v("Overview Over Jobs")])],1),o("br"),o("br"),o("button",[o("router-link",{attrs:{to:"/AddExpenseToJob"}},[e._v("Add Expense To A Job")])],1)])},a=[]},f008:function(e,t,o){"use strict";o("3fdb")},fb62:function(e,t,o){"use strict";var r=o("c593"),a=o("9738"),n=(o("48d8"),o("2877")),s=Object(n["a"])(a["default"],r["a"],r["b"],!1,null,"291c0ac2",null);t["default"]=s.exports}});
//# sourceMappingURL=app.a2ffbbf4.js.map