(this.webpackJsonpuserlist=this.webpackJsonpuserlist||[]).push([[0],{45:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),c=n(14),i=n.n(c),r=n(19),j=n(15),h=n(16),l=n(17),u=n(21),b=n(20),d=n(18),m=n.n(d),O=n(0),x=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var n={name:e.state.name,username:e.state.username,email:e.state.email},s=[].concat(Object(r.a)(e.state.users),[n]);e.setState({users:s})},e.state={users:[],name:"",username:"",email:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){var n=t.data;e.setState({users:n})}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:["Users List-",this.state.users.length]}),Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"ID"}),Object(O.jsx)("th",{children:"NAME"}),Object(O.jsx)("th",{children:"USERNAME"}),Object(O.jsx)("th",{children:"E-MAIL"})]})}),Object(O.jsx)("tbody",{children:this.state.users.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t+1}),Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.username}),Object(O.jsx)("td",{children:e.email})]},e.id)}))})]}),Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"name",children:"name"}),Object(O.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleChange,name:"name",id:"name"}),"",Object(O.jsx)("br",{})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"username",children:"username"}),Object(O.jsx)("input",{type:"text",value:this.state.username,onChange:this.handleChange,name:"username",id:"username"}),"",Object(O.jsx)("br",{})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"email",children:"email"}),Object(O.jsx)("input",{type:"text",value:this.state.email,onChange:this.handleChange,name:"email",id:"email"}),"",Object(O.jsx)("br",{})]}),Object(O.jsx)("input",{type:"submit",value:"Submit"})]})})]})}}]),n}(a.a.Component);var o=function(e){return Object(O.jsx)(x,{})};i.a.render(Object(O.jsx)(o,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e2cf0572.chunk.js.map