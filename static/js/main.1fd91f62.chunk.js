(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(0),a=n.n(c),r=n(21),i=n.n(r),b=(n(28),n(7)),d=n(8),o=n(10),l=n(9),j=(n(29),n(30),n(31),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"heading",children:this.props.heading})}}]),n}(c.Component)),u=n(12),h=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(b.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).onDeletedClick=function(t){e.props.deleteSubscriberHandler(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)(j,{heading:"PHONE DIRECTORY"}),Object(s.jsxs)("div",{className:"component-body-container",children:[Object(s.jsx)(u.b,{to:"/add",children:Object(s.jsx)("button",{type:"button",className:"custom-btn add-btn",children:"ADD"})}),Object(s.jsxs)("div",{className:"grid-container heading-container",children:[Object(s.jsx)("span",{className:"grid-item name-heading",children:"NAME"}),Object(s.jsx)("span",{className:"grid-item phone-heading",children:"PHONE"})]}),this.props.subscribersList.map((function(t){return Object(s.jsxs)("div",{className:"grid-container",children:[Object(s.jsx)("span",{className:"grid-item",children:t.name}),Object(s.jsx)("span",{className:"grid-item",children:t.phone}),Object(s.jsx)("button",{className:"custom-btn delete-btn",onClick:e.onDeletedClick.bind(e,t.id),children:"Delete"})]},t.id)}))]})]})}}]),n}(c.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))},m=(n(37),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).inputChangedHandler=function(t){var n=e.state;n[t.target.name]=t.target.value,e.setState(n)},e.onFormSubmitted=function(t){t.preventDefault(),e.props.addSubscriberHandler(e.state),e.setState({id:0,name:"",phone:" "}),e.props.history.push("/")},e.state={id:0,name:"",phone:""},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.phone;return Object(s.jsxs)("div",{children:[Object(s.jsx)(j,{heading:"AddSubscriber"}),Object(s.jsxs)("div",{className:"component-body-container",children:[Object(s.jsx)(u.b,{to:"/",children:Object(s.jsx)("button",{className:"custom-btn",children:" Back"})}),Object(s.jsxs)("form",{className:"subscriber-form",onSubmit:this.onFormSubmitted.bind(this),children:[Object(s.jsx)("label",{htmlFor:"name",className:"label-control",children:"Name : "}),Object(s.jsx)("input",{id:"name",type:"text",className:"input-control",name:"name",onChange:this.inputChangedHandler}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"phone",className:"label-control",children:"Phone : "}),Object(s.jsx)("input",{id:"phone",type:"text",className:"input-control",name:"phone",onChange:this.inputChangedHandler}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"subscriber-info-container",children:[Object(s.jsx)("span",{className:"subscriber-to-ad-heading",children:"Subscriber to be added : "}),Object(s.jsx)("br",{}),Object(s.jsxs)("span",{className:"subscriber-info",children:["Name : ",t," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)("span",{className:"subscriber-info",children:["Phone : ",n," "]}),Object(s.jsx)("br",{})]}),Object(s.jsx)("button",{type:"submit",className:"custom-btn add-btn",children:"Add"})]})]})]})}}]),n}(c.Component)),p=n(14),x=n(15),f=n(2),v=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).addSubscriberHandler=function(t){var n=e.state.subscribersList;n.length>0?t.id=n[n.length-1].id+1:t.id=1,n.push(t),e.setState({subscribersList:n})},e.deleteSubscriberHandler=function(t){var n=e.state.subscribersList,s=0;n.forEach((function(e,n){e.id===t&&(s=n)}),Object(x.a)(e));var c=n;c.splice(s,1),e.setState({subscribers:c})},e.state={subscribersList:[{id:1,name:"Rishav Jaiswal",phone:"8888888888"},{id:2,name:"Manni Jaiswal",phone:"9999999999"}]},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsx)(u.a,{children:Object(s.jsxs)("div",{className:"component-container",children:[Object(s.jsx)(f.a,{exact:!0,path:"/",render:function(t){return Object(s.jsx)(h,Object(p.a)(Object(p.a)({},t),{},{subscribersList:e.state.subscribersList,deleteSubscriberHandler:e.deleteSubscriberHandler}))}}),Object(s.jsx)(f.a,{exact:!0,path:"/add",render:function(t,n){var c=t.history;return Object(s.jsx)(m,Object(p.a)(Object(p.a)({history:c},n),{},{addSubscriberHandler:e.addSubscriberHandler}))}})]})})}}]),n}(c.Component);i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),O()}},[[38,1,2]]]);
//# sourceMappingURL=main.1fd91f62.chunk.js.map