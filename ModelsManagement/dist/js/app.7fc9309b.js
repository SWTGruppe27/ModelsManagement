(function(e){function t(t){for(var r,s,i=t[0],d=t[1],l=t[2],u=0,c=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&c.push(a[s][0]),a[s]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);m&&m(t);while(c.length)c.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,i=1;i<o.length;i++){var d=o[i];0!==a[d]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=o[0]))}return e}var r={},a={app:0},n=[];function s(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=r,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var m=d;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("c21b")},"0feb":function(e,t,o){},"20e1":function(e,t,o){"use strict";o("f3f2")},"4e8d":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);var r=o("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.homepage?r("div",{attrs:{id:"homepage"}},[r("img",{attrs:{src:o("ddbd")}}),r("br"),r("br"),r("button",[r("a",{on:{click:function(t){e.changeState()}}},[r("router-link",{attrs:{to:"/UserLogin"}},[e._v("Login")])],1)])]):e._e(),r("div",[r("router-view")],1)])},n=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"Menu"}},[o("h1",[e._v("Welcome to Model Management!")]),o("div",{directives:[{name:"show",rawName:"v-show",value:e.getIsManager(),expression:"getIsManager()"}]},[o("button",[o("router-link",{attrs:{to:"/AddModel"}},[e._v("Add New Model")])],1),o("br"),o("br"),o("button",[o("router-link",{attrs:{to:"/AddManager"}},[e._v("Add New Manager")])],1),o("br"),o("br"),o("button",[o("router-link",{attrs:{to:"/AddModelJob"}},[e._v("Add New Job")])],1),o("br"),o("br"),o("button",[o("router-link",{attrs:{to:"/AddModelToJob"}},[e._v("Add Model To Job")])],1),o("br"),o("br"),o("button",[o("router-link",{attrs:{to:"/DeleteModelFromJob"}},[e._v("Remove Model From Job")])],1),o("br"),o("br")]),o("button",[o("router-link",{attrs:{to:"/SeeJobs"}},[e._v("Overview Over Jobs")])],1),o("br"),o("br"),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.getIsManager(),expression:"!getIsManager()"}]},[o("button",[o("router-link",{attrs:{to:"/AddExpenseToJob"}},[e._v("Add Expense To A Job")])],1)])])},i=[],d={name:"Menu",data:function(){return{}},methods:{getIsManager:function(){return JSON.parse(localStorage.getItem("isManager"))}}},l=d,m=(o("20e1"),o("2877")),u=Object(m["a"])(l,s,i,!1,null,"8f76f2f4",null),c=u.exports,p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"login"}},[e.loginSucceded?e._e():o("div",[o("h1",[e._v("Login")]),o("form",[o("table",{staticClass:"center"},[o("tr",[e._m(0),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"email",placeholder:"Enter your email here",required:""},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})])]),o("br"),o("tr",[e._m(1),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"text",placeholder:"Enter your password here",required:""},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})])])]),o("br"),o("button",{staticClass:"button",attrs:{type:"button"}},[o("a",{on:{click:function(t){e.loginFunction()}}},[e._v("Login")])])])]),e.loginSucceded?o("div",[o("router-view")],1):e._e()])},f=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("td",[o("label",{attrs:{for:"email"}},[o("b",[e._v("Email: ")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("td",[o("label",{attrs:{for:"password"}},[o("b",[e._v("Password: ")])])])}],v=(o("96cf"),o("1da1")),b={name:"UserLogin",data:function(){return{form:{email:"",password:""},loginSucceded:!1}},methods:{loginFunction:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(){var t,o,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="https://localhost:44368/api/Account/login",e.prev=1,e.next=4,fetch(t,{method:"POST",body:JSON.stringify(this.form),headers:new Headers({"Content-Type":"application/json"})});case 4:if(o=e.sent,!o.ok){e.next=16;break}return e.next=8,o.json();case 8:r=e.sent,localStorage.clear(),localStorage.setItem("token",r.jwt),localStorage.setItem("isManager",r.isManager),this.$router.push("/Menu"),this.loginSucceded=!0,e.next=17;break;case 16:alert("Server returned: "+o.statusText);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](1),alert("Error: "+e.t0);case 22:return e.abrupt("return");case 23:case"end":return e.stop()}},e,this,[[1,19]])}));function t(){return e.apply(this,arguments)}return t}()}},g=b,h=(o("fe4f"),Object(m["a"])(g,p,f,!1,null,"cf377674",null)),_=h.exports,y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"addmodel"}},[o("h1",[e._v("Add model")]),o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"firstName"}},[e._v("First name: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.firstName,expression:"modelform.firstName"}],attrs:{type:"text"},domProps:{value:e.modelform.firstName},on:{input:function(t){t.target.composing||e.$set(e.modelform,"firstName",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"lastName"}},[e._v("Last name: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.lastName,expression:"modelform.lastName"}],attrs:{type:"text"},domProps:{value:e.modelform.lastName},on:{input:function(t){t.target.composing||e.$set(e.modelform,"lastName",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"email"}},[e._v("Email: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.email,expression:"modelform.email"}],attrs:{type:"email",required:""},domProps:{value:e.modelform.email},on:{input:function(t){t.target.composing||e.$set(e.modelform,"email",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"phoneNumber"}},[e._v("Phonenumber: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.phoneNumber,expression:"modelform.phoneNumber"}],attrs:{type:"text"},domProps:{value:e.modelform.phoneNumber},on:{input:function(t){t.target.composing||e.$set(e.modelform,"phoneNumber",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"adressLine1"}},[e._v("AdressLine1: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.adressLine1,expression:"modelform.adressLine1"}],attrs:{type:"text"},domProps:{value:e.modelform.adressLine1},on:{input:function(t){t.target.composing||e.$set(e.modelform,"adressLine1",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"adressLine2"}},[e._v("AdressLine2: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.adressLine2,expression:"modelform.adressLine2"}],attrs:{type:"text"},domProps:{value:e.modelform.adressLine2},on:{input:function(t){t.target.composing||e.$set(e.modelform,"adressLine2",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"zip"}},[e._v("Zip: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.zip,expression:"modelform.zip"}],attrs:{type:"text"},domProps:{value:e.modelform.zip},on:{input:function(t){t.target.composing||e.$set(e.modelform,"zip",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"City"}},[e._v("City: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.City,expression:"modelform.City"}],attrs:{type:"text"},domProps:{value:e.modelform.City},on:{input:function(t){t.target.composing||e.$set(e.modelform,"City",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"country"}},[e._v("Country: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.country,expression:"modelform.country"}],attrs:{type:"text"},domProps:{value:e.modelform.country},on:{input:function(t){t.target.composing||e.$set(e.modelform,"country",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"birthdate"}},[e._v("Birthdate: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.birthdate,expression:"modelform.birthdate"}],attrs:{type:"datetime",placeholder:"yyyy-mm-dd"},domProps:{value:e.modelform.birthdate},on:{input:function(t){t.target.composing||e.$set(e.modelform,"birthdate",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"nationality"}},[e._v("Nationality: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.nationality,expression:"modelform.nationality"}],attrs:{type:"text"},domProps:{value:e.modelform.nationality},on:{input:function(t){t.target.composing||e.$set(e.modelform,"nationality",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"height"}},[e._v("Height: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.height,expression:"modelform.height"}],attrs:{type:"number"},domProps:{value:e.modelform.height},on:{input:function(t){t.target.composing||e.$set(e.modelform,"height",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"shoeSize"}},[e._v("Shoe Size: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.shoeSize,expression:"modelform.shoeSize"}],attrs:{type:"number"},domProps:{value:e.modelform.shoeSize},on:{input:function(t){t.target.composing||e.$set(e.modelform,"shoeSize",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"hairColor"}},[e._v("Hair Color: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.hairColor,expression:"modelform.hairColor"}],attrs:{type:"text"},domProps:{value:e.modelform.hairColor},on:{input:function(t){t.target.composing||e.$set(e.modelform,"hairColor",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"eyeColor"}},[e._v("Eye Color: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.eyeColor,expression:"modelform.eyeColor"}],attrs:{type:"text"},domProps:{value:e.modelform.eyeColor},on:{input:function(t){t.target.composing||e.$set(e.modelform,"eyeColor",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"comments"}},[e._v("Comments: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.comments,expression:"modelform.comments"}],attrs:{type:"text"},domProps:{value:e.modelform.comments},on:{input:function(t){t.target.composing||e.$set(e.modelform,"comments",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"password"}},[e._v("Password: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelform.password,expression:"modelform.password"}],attrs:{type:"password",required:""},domProps:{value:e.modelform.password},on:{input:function(t){t.target.composing||e.$set(e.modelform,"password",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.addModelFunction}},[o("a",[o("router-link",{attrs:{to:"/Menu"}},[e._v("Add Model")])],1)])]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button"},[o("router-link",{attrs:{to:"/Menu"}},[e._v("Back to menu")])],1)])])])},x=[],C=(o("c5f6"),o("5df2"),{name:"AddModel",data:function(){return{modelform:{firstName:"",lastName:"",email:"",phoneNumber:"",adressLine1:"",adressLine2:"",zip:"",city:"",country:"",birthdate:"",nationality:"",height:0,shoeSize:0,hairColor:"",eyeColor:"",comments:"",password:""}}},methods:{addModelFunction:function(){var e=this,t="https://localhost:44368/api/Models",o=this.modelform;o.height=Number.parseFloat(this.modelform.height),o.shoeSize=Number.parseFloat(this.modelform.shoeSize),fetch(t,{method:"POST",body:JSON.stringify(o),credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(function(t){e.response=t}).catch(function(e){return alert("Something bad happened: "+e)})}}}),w=C,j=(o("76bc"),Object(m["a"])(w,y,x,!1,null,"31cdd366",null)),N=j.exports,M=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"addmanager"}},[o("h1",[e._v("Add News Manager")]),o("form",[o("div",{staticClass:"form-group"},[e._m(0),o("input",{directives:[{name:"model",rawName:"v-model",value:e.managerform.firstName,expression:"managerform.firstName"}],attrs:{type:"text"},domProps:{value:e.managerform.firstName},on:{input:function(t){t.target.composing||e.$set(e.managerform,"firstName",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[e._m(1),o("input",{directives:[{name:"model",rawName:"v-model",value:e.managerform.lastName,expression:"managerform.lastName"}],attrs:{type:"text"},domProps:{value:e.managerform.lastName},on:{input:function(t){t.target.composing||e.$set(e.managerform,"lastName",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[e._m(2),o("input",{directives:[{name:"model",rawName:"v-model",value:e.managerform.email,expression:"managerform.email"}],attrs:{type:"email",required:""},domProps:{value:e.managerform.email},on:{input:function(t){t.target.composing||e.$set(e.managerform,"email",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[e._m(3),o("input",{directives:[{name:"model",rawName:"v-model",value:e.managerform.password,expression:"managerform.password"}],attrs:{type:"password",required:""},domProps:{value:e.managerform.password},on:{input:function(t){t.target.composing||e.$set(e.managerform,"password",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"}},[o("a",{on:{click:function(t){e.addNewManager()}}},[e._v("Add new manager")])])]),o("br")]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button"},[o("router-link",{attrs:{to:"/Menu"}},[e._v("Back to menu")])],1)])])},I=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{attrs:{for:"firstName"}},[o("b",[e._v("First name:")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{attrs:{for:"lastName"}},[o("b",[e._v("Last name: ")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{attrs:{for:"email"}},[o("b",[e._v("Email: ")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{attrs:{for:"password"}},[o("b",[e._v("Password: ")])])}],J={name:"AddNewManager",data:function(){return{managerform:{firstName:"",lastName:"",email:"",password:""}}},methods:{addNewManager:function(){var e=this,t="https://localhost:44368/api/Managers";fetch(t,{method:"POST",body:JSON.stringify(this.managerform),credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(function(t){e.response=t}).catch(function(e){return alert("Something bad happened: "+e)})}}},S=J,k=(o("93a4"),Object(m["a"])(S,M,I,!1,null,"03b3e0c3",null)),A=k.exports,P=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"addjob"}},[o("h1",[e._v("Add New Job")]),o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"customer"}},[e._v("Customer: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addjobform.customer,expression:"addjobform.customer"}],attrs:{type:"text"},domProps:{value:e.addjobform.customer},on:{input:function(t){t.target.composing||e.$set(e.addjobform,"customer",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"startDay"}},[e._v("Start Day: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addjobform.startDay,expression:"addjobform.startDay"}],attrs:{type:"text"},domProps:{value:e.addjobform.startDay},on:{input:function(t){t.target.composing||e.$set(e.addjobform,"startDay",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"days"}},[e._v("Days: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addjobform.days,expression:"addjobform.days"}],attrs:{type:"number"},domProps:{value:e.addjobform.days},on:{input:function(t){t.target.composing||e.$set(e.addjobform,"days",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"location"}},[e._v("Location: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addjobform.location,expression:"addjobform.location"}],attrs:{type:"text"},domProps:{value:e.addjobform.location},on:{input:function(t){t.target.composing||e.$set(e.addjobform,"location",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"comments"}},[e._v("Comments: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addjobform.comments,expression:"addjobform.comments"}],attrs:{type:"text"},domProps:{value:e.addjobform.comments},on:{input:function(t){t.target.composing||e.$set(e.addjobform,"comments",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"}},[o("a",{on:{click:e.addJobFunction}},[o("router-link",{attrs:{to:"/Menu"}},[e._v("Add Job")])],1)])]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button"},[o("router-link",{attrs:{to:"/Menu"}},[e._v("Back to menu")])],1)])])])},T=[],$=(o("04ff"),{name:"AddJob",props:{msg:String},data:function(){return{addjobform:{customer:"",startDay:"",days:"",location:"",comments:""}}},methods:{addJobFunction:function(){var e=this,t="https://localhost:44368/api/Jobs",o=this.addjobform;o.days=Number.parseInt(this.addjobform.days),fetch(t,{method:"POST",body:JSON.stringify(o),credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(function(t){e.response=t}).catch(function(e){return alert("Something bad happened: "+e)})}}}),E=$,O=(o("8ae1"),Object(m["a"])(E,P,T,!1,null,"3d595d47",null)),L=O.exports,F=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"addmodeltojob"}},[o("h1",[e._v("Add Model To Job")]),e._l(e.jobs,function(t,r){return o("div",{key:r,attrs:{id:"jobsList"}},[o("p",[o("b",[e._v("Id: ")]),e._v(e._s(t.efJobId)+" "),o("b",[e._v("Customer: ")]),e._v(" "+e._s(t.customer))]),o("p",[o("b",[e._v("Location:")]),e._v(" "+e._s(t.location))]),o("br")])}),e._l(e.models,function(t,r){return o("div",{key:"a"+r,attrs:{id:"modelList"}},[o("p",[o("b",[e._v("Model Id:")]),e._v(" "+e._s(t.efModelId))]),o("p",[o("b",[e._v("Name: ")]),e._v(e._s(t.firstName)+" "+e._s(t.lastName))]),o("br")])}),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"}},[o("a",{on:{click:function(t){e.loadJobs()}}},[e._v("Load Jobs")])])]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"}},[o("a",{on:{click:function(t){e.loadModels()}}},[e._v("Load Models")])])]),o("br"),o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"modelId"}},[e._v("Model Id: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelId,expression:"modelId"}],attrs:{type:"number",required:""},domProps:{value:e.modelId},on:{input:function(t){t.target.composing||(e.modelId=t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"jobId"}},[e._v("Job Id: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.jobId,expression:"jobId"}],attrs:{type:"number",required:""},domProps:{value:e.jobId},on:{input:function(t){t.target.composing||(e.jobId=t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"}},[o("a",{on:{click:function(t){e.addModelToJobFunction()}}},[e._v("Add Model To Job")])])]),o("br")]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"}},[o("router-link",{attrs:{to:"/Menu"}},[e._v("Back to menu")])],1)])],2)},z=[],B={name:"AddModelToJob",props:{msg:String},data:function(){return{jobs:[],models:[],modelId:"",jobId:""}},methods:{loadJobs:function(){var e=this,t="https://localhost:44368/api/Jobs";fetch(t,{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.jobs=t}).catch(function(e){return alert("Something bad happened: "+e)})},loadModels:function(){var e=this,t="https://localhost:44368/api/Models";fetch(t,{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.models=t}).catch(function(e){return alert("Something bad happened: "+e)})},addModelToJobFunction:function(){var e=this,t="https://localhost:44368/api/Jobs/"+this.jobId+"/model/"+this.modelId;fetch(t,{method:"POST",body:JSON.stringify(this.managerform),credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(function(t){e.response=t}).catch(function(e){return alert("Something bad happened: "+e)})}}},D=B,q=(o("f3f4"),Object(m["a"])(D,F,z,!1,null,"279cb008",null)),H=q.exports,G=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"deletemodelfromjob"}},[o("h1",[e._v("Remove Model From Job")]),e._l(e.jobs,function(t,r){return o("div",{key:r,attrs:{id:"jobsList"}},[o("p",[o("b",[e._v("Id: ")]),e._v(e._s(t.efJobId)+" "),o("b",[e._v("Customer: ")]),e._v(" "+e._s(t.customer))]),o("p",[o("b",[e._v("Location:")]),e._v(" "+e._s(t.location))]),o("br")])}),e._l(e.models,function(t,r){return o("div",{key:"a"+r,attrs:{id:"modelList"}},[o("p",[o("b",[e._v("Model Id:")]),e._v(" "+e._s(t.efModelId))]),o("p",[o("b",[e._v("Name: ")]),e._v(e._s(t.firstName)+" "+e._s(t.lastName))]),o("br")])}),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"}},[o("a",{on:{click:function(t){e.loadJobs()}}},[e._v("Load Jobs")])])]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"}},[o("a",{on:{click:function(t){e.loadModels()}}},[e._v("Load Models")])])]),o("br"),o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"modelId"}},[e._v("Model Id: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modelId,expression:"modelId"}],attrs:{type:"number",required:""},domProps:{value:e.modelId},on:{input:function(t){t.target.composing||(e.modelId=t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"jobId"}},[e._v("Job Id: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.jobId,expression:"jobId"}],attrs:{type:"number",required:""},domProps:{value:e.jobId},on:{input:function(t){t.target.composing||(e.jobId=t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"}},[o("a",{on:{click:function(t){e.deleteModelFromJobFunction()}}},[e._v("Delete Model From Job")])])]),o("br")]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"}},[o("router-link",{attrs:{to:"/Menu"}},[e._v("Back to menu")])],1)])],2)},U=[],R={name:"DeleteModelFromJob",data:function(){return{jobs:[],models:[],modelId:"",jobId:""}},methods:{loadJobs:function(){var e=this,t="https://localhost:44368/api/Jobs";fetch(t,{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.jobs=t}).catch(function(e){return alert("Something bad happened: "+e)})},loadModels:function(){var e=this,t="https://localhost:44368/api/Models";fetch(t,{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.models=t}).catch(function(e){return alert("Something bad happened: "+e)})},deleteModelFromJobFunction:function(){var e=this,t="https://localhost:44368/api/Jobs/"+this.jobId+"/model/"+this.modelId;fetch(t,{method:"Delete",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.models=t})}}},W=R,Z=(o("dc23"),Object(m["a"])(W,G,U,!1,null,"00af4e46",null)),K=Z.exports,Q=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"elements"}},[o("h1",[e._v("Overviews Over Jobs")]),e._l(e.jobs,function(t,r){return o("div",{key:r},[o("p",[o("b",[e._v("Customer: ")]),e._v(e._s(t.customer))]),o("p",[o("b",[e._v("Start Date: ")]),e._v(e._s(e.dateToString(t.startDate)))]),o("p",[o("b",[e._v("Days: ")]),e._v(e._s(t.days))]),o("p",[o("b",[e._v("Location: ")]),e._v(e._s(t.location))]),0!=t.comments.length?o("p",[o("b",[e._v("Comments: ")]),e._v(e._s(t.comments))]):e._e(),o("br")])}),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",on:{click:e.getJobsFunction}},[o("a",[e._v("Load")])])]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button"},[o("router-link",{attrs:{to:"/Menu"}},[e._v("Back to menu")])],1)])],2)},V=[],X=(o("28a5"),{name:"SeeJobs",data:function(){return{jobs:[]}},methods:{getJobsFunction:function(){var e=this,t="https://localhost:44368/api/Jobs";fetch(t,{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.jobs=t}).catch(function(e){return alert("Something bad happened: "+e)})},dateToString:function(e){var t=e.split("T"),o=t[1].split("+");return t[0]+" "+o[0]}}}),Y=X,ee=(o("9ddc"),Object(m["a"])(Y,Q,V,!1,null,"fe632a2c",null)),te=ee.exports,oe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"addexpenses"}},[o("h1",[e._v("Add Expense To Job")]),o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"modelId"}},[e._v("Model Id: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addexpenseform.modelId,expression:"addexpenseform.modelId"}],attrs:{type:"number",required:""},domProps:{value:e.addexpenseform.modelId},on:{input:function(t){t.target.composing||e.$set(e.addexpenseform,"modelId",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"jobId"}},[e._v("Job Id: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addexpenseform.jobId,expression:"addexpenseform.jobId"}],attrs:{type:"number",required:""},domProps:{value:e.addexpenseform.jobId},on:{input:function(t){t.target.composing||e.$set(e.addexpenseform,"jobId",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"date"}},[e._v("Date: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addexpenseform.date,expression:"addexpenseform.date"}],attrs:{type:"text",placeholder:"yyyy-mm-dd"},domProps:{value:e.addexpenseform.date},on:{input:function(t){t.target.composing||e.$set(e.addexpenseform,"date",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"text"}},[e._v("Text: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addexpenseform.text,expression:"addexpenseform.text"}],attrs:{type:"text"},domProps:{value:e.addexpenseform.text},on:{input:function(t){t.target.composing||e.$set(e.addexpenseform,"text",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"amount"}},[e._v("Amount: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.addexpenseform.amount,expression:"addexpenseform.amount"}],attrs:{type:"number"},domProps:{value:e.addexpenseform.amount},on:{input:function(t){t.target.composing||e.$set(e.addexpenseform,"amount",t.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{type:"button"}},[o("a",{on:{click:function(t){e.addExpenseToJobFunction()}}},[e._v("Add Expense To Job")])])]),o("br")]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button"},[o("router-link",{attrs:{to:"/Menu"}},[e._v("Back to menu")])],1)])])},re=[],ae={name:"AddExpenseToJob",props:{msg:String},data:function(){return{addexpenseform:{date:"",text:"",amount:0,modelId:"",jobId:""}}},methods:{addExpenseToJobFunction:function(){var e=this,t="https://localhost:44368/api/Expenses",o=this.addexpenseform;o.jobId=Number.parseInt(this.addexpenseform.jobId),o.modelId=Number.parseInt(this.addexpenseform.modelId),o.amount=Number.parseFloat(this.addexpenseform.amount),fetch(t,{method:"POST",body:JSON.stringify(o),credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(function(t){e.response=t}).catch(function(e){return alert("Something bad happened: "+e)})}}},ne=ae,se=(o("e092"),Object(m["a"])(ne,oe,re,!1,null,"af2a9766",null)),ie=se.exports,de={name:"app",components:{Menu:c,UserLogin:_,AddModel:N,AddManager:A,AddModelJob:L,AddModelToJob:H,DeleteModelFromJob:K,SeeJobs:te,AddExpenseToJob:ie},data:function(){return{homepage:!0}},methods:{changeState:function(){this.homepage=!1}}},le=de,me=(o("034f"),Object(m["a"])(le,a,n,!1,null,null,null)),ue=me.exports,ce=o("8c4f");r["a"].use(ce["a"]);var pe=new ce["a"]({mode:"history",base:"/",routes:[{path:"/Menu",name:"Menu",component:c},{path:"/UserLogin",name:"UserLogin",component:_},{path:"/AddModel",name:"AddModel",component:N},{path:"/AddManager",name:"AddManager",component:A},{path:"/AddModelJob",name:"AddModelJob",component:L},{path:"/AddModelToJob",name:"AddModelToJob",component:H},{path:"/DeleteModelFromJob",name:"DeleteModelFromJob",component:K},{path:"/SeeJobs",name:"SeeJobs",component:te},{path:"/AddExpenseToJob",name:"AddExpenseToJob",component:ie}]});r["a"].config.productionTip=!0,new r["a"]({router:pe,render:function(e){return e(ue)}}).$mount("#app")},"76bc":function(e,t,o){"use strict";o("8a2c")},8202:function(e,t,o){},"82b2":function(e,t,o){},"8a2c":function(e,t,o){},"8ae1":function(e,t,o){"use strict";o("0feb")},"8cbd":function(e,t,o){},"93a4":function(e,t,o){"use strict";o("e806")},"9ddc":function(e,t,o){"use strict";o("4e8d")},c21b:function(e,t,o){},dc23:function(e,t,o){"use strict";o("f50b")},ddbd:function(e,t,o){e.exports=o.p+"img/NewLogo.d681f78c.png"},e092:function(e,t,o){"use strict";o("8202")},e806:function(e,t,o){},f3f2:function(e,t,o){},f3f4:function(e,t,o){"use strict";o("8cbd")},f50b:function(e,t,o){},fe4f:function(e,t,o){"use strict";o("82b2")}});
//# sourceMappingURL=app.7fc9309b.js.map