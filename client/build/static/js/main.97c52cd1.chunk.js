(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},62:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(14),c=a.n(r),i=a(63),o=a(66),s=a(65),m=a(5),u=a(6),d=a(8),h=a(7),p=a(9),E=a(16),b=a.n(E),f=function(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)},g=function(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)},v=function(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)},x=a(3),j=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(x.u,{color:"dark",dark:!0,expand:"md"},l.a.createElement(x.v,{href:"/"},"Home Brew \ud83c\udf7b"),l.a.createElement(x.r,{className:"ml-auto",navbar:!0},l.a.createElement(x.s,null,l.a.createElement(x.t,{href:"/profile"},"Profile")),l.a.createElement(x.s,null,l.a.createElement(x.t,{href:"/signup"},"Sign Up")),l.a.createElement(x.s,null,l.a.createElement(x.t,{href:"/login"},"Login")),l.a.createElement(x.s,null,l.a.createElement(x.t,{href:"https://github.com/reactstrap/reactstrap"},"GitHub")))))}}]),t}(l.a.Component),w=a(4),O=[{src:"https://via.placeholder.com/800x340",altText:"Slide 1",caption:"Slide 1"},{src:"https://via.placeholder.com/800x340",altText:"Slide 2",caption:"Slide 2"},{src:"https://via.placeholder.com/800x340",altText:"Slide 3",caption:"Slide 3"}],C=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={activeIndex:0},a.next=a.next.bind(Object(w.a)(Object(w.a)(a))),a.previous=a.previous.bind(Object(w.a)(Object(w.a)(a))),a.goToIndex=a.goToIndex.bind(Object(w.a)(Object(w.a)(a))),a.onExiting=a.onExiting.bind(Object(w.a)(Object(w.a)(a))),a.onExited=a.onExited.bind(Object(w.a)(Object(w.a)(a))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===O.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?O.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,a=O.map(function(t){return l.a.createElement(x.m,{onExiting:e.onExiting,onExited:e.onExited,key:t.src},l.a.createElement("img",{src:t.src,alt:t.altText,className:"d-block w-100"}),l.a.createElement(x.j,{captionText:t.caption,captionHeader:t.caption}))});return l.a.createElement(x.i,{activeIndex:t,next:this.next,previous:this.previous},l.a.createElement(x.l,{items:O,activeIndex:t,onClickHandler:this.goToIndex}),a,l.a.createElement(x.k,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),l.a.createElement(x.k,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),t}(n.Component),y=a(17),N=a(64),k=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).state={username:"",password:"",redirectTo:null},e.handleSubmit=e.handleSubmit.bind(Object(w.a)(Object(w.a)(e))),e.handleChange=e.handleChange.bind(Object(w.a)(Object(w.a)(e))),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log("handleSubmit"),b.a.post("/user/login",{username:this.state.username,password:this.state.password}).then(function(e){console.log("login response: "),console.log(e),200===e.status&&(t.props.updateUser({loggedIn:!0,username:e.data.username}),t.setState({redirectTo:"/"}))}).catch(function(e){console.log("login error: "),console.log(e)})}},{key:"render",value:function(){return this.state.redirectTo?l.a.createElement(N.a,{to:{pathname:this.state.redirectTo}}):l.a.createElement("div",null,l.a.createElement("h4",null,"Login"),l.a.createElement("form",{className:"form-horizontal"},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"col-1 col-ml-auto"},l.a.createElement("label",{className:"form-label",htmlFor:"username"},"Username")),l.a.createElement("div",{className:"col-3 col-mr-auto"},l.a.createElement("input",{className:"form-input",type:"text",id:"username",name:"username",placeholder:"Username",value:this.state.username,onChange:this.handleChange}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"col-1 col-ml-auto"},l.a.createElement("label",{className:"form-label",htmlFor:"password"},"Password: ")),l.a.createElement("div",{className:"col-3 col-mr-auto"},l.a.createElement("input",{className:"form-input",placeholder:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}))),l.a.createElement("div",{className:"form-group "},l.a.createElement("div",{className:"col-7"}),l.a.createElement("button",{className:"btn btn-primary col-1 col-mr-auto",onClick:this.handleSubmit,type:"submit"},"Login"))))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={example:"some state!"},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(k,null))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={example:"some state!"},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(C,null))}}]),t}(n.Component),I=function(){return l.a.createElement(g,{fluid:!0},l.a.createElement(v,null,l.a.createElement(f,{size:"md-12"},l.a.createElement("h1",{className:"text-center"},"404 Page Not Found"),l.a.createElement("h1",{className:"text-center"},l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))))},B=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).state={username:"",password:"",redirectTo:null},e.handleSubmit=e.handleSubmit.bind(Object(w.a)(Object(w.a)(e))),e.handleChange=e.handleChange.bind(Object(w.a)(Object(w.a)(e))),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log("handleSubmit"),b.a.post("/user/login",{username:this.state.username,password:this.state.password}).then(function(e){console.log("login response: "),console.log(e),200===e.status&&(t.props.updateUser({loggedIn:!0,username:e.data.username}),t.setState({redirectTo:"/"}))}).catch(function(e){console.log("login error: "),console.log(e)})}},{key:"render",value:function(){return this.state.redirectTo?l.a.createElement(N.a,{to:{pathname:this.state.redirectTo}}):l.a.createElement("div",null,l.a.createElement("h4",null,"SignUp"),l.a.createElement("form",{className:"form-horizontal"},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"col-1 col-ml-auto"},l.a.createElement("label",{className:"form-label",htmlFor:"username"},"Username")),l.a.createElement("div",{className:"col-3 col-mr-auto"},l.a.createElement("input",{className:"form-input",type:"text",id:"username",name:"username",placeholder:"Username",value:this.state.username,onChange:this.handleChange}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"col-1 col-ml-auto"},l.a.createElement("label",{className:"form-label",htmlFor:"password"},"Password: ")),l.a.createElement("div",{className:"col-3 col-mr-auto"},l.a.createElement("input",{className:"form-input",placeholder:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}))),l.a.createElement("div",{className:"form-group "},l.a.createElement("div",{className:"col-7"}),l.a.createElement("button",{className:"btn btn-primary col-1 col-mr-auto",onClick:this.handleSubmit,type:"submit"},"SignUp"))))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={example:"some state!"},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(B,null))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={example:"some state!"},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(x.n,{className:"col-4 mx-auto"},l.a.createElement(x.o,null,l.a.createElement(x.q,{for:"beerNameID"},"Beer Name"),l.a.createElement(x.p,{type:"text",name:"beerName",id:"beerNameID"})),l.a.createElement(x.o,null,l.a.createElement(x.q,{for:"beerStyleID"},"Beer Style"),l.a.createElement(x.p,{type:"select",name:"select",id:"beerStyleID"},l.a.createElement("option",null,"IPA"),l.a.createElement("option",null,"Pilsner"),l.a.createElement("option",null,"Stout"),l.a.createElement("option",null,"Saison"))),l.a.createElement(x.a,null,"Submit")))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={example:"some state!"},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(x.b,{className:"col-sm-3 mx-auto"},l.a.createElement(x.e,{top:!0,width:"100%",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",alt:"Card image cap"}),l.a.createElement(x.c,null,l.a.createElement(x.h,null,"Card title"),l.a.createElement(x.f,null,"Card subtitle"),l.a.createElement(x.g,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),l.a.createElement(x.a,null,"Button"))))}}]),t}(n.Component),P=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).call(this))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(x.d,null,l.a.createElement(x.b,{className:"card"},l.a.createElement(x.e,{top:!0,width:"100%",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180",alt:"Card image cap"}),l.a.createElement(x.c,null,l.a.createElement(x.h,null,"Card title"),l.a.createElement(x.f,null,"Card subtitle"),l.a.createElement(x.g,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),l.a.createElement(x.a,null,"Button"))),l.a.createElement(x.b,{className:"card"},l.a.createElement(x.e,{top:!0,width:"100%",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180",alt:"Card image cap"}),l.a.createElement(x.c,null,l.a.createElement(x.h,null,"Card title"),l.a.createElement(x.f,null,"Card subtitle"),l.a.createElement(x.g,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),l.a.createElement(x.a,null,"Button"))),l.a.createElement(x.b,{className:"card"},l.a.createElement(x.e,{top:!0,width:"100%",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180",alt:"Card image cap"}),l.a.createElement(x.c,null,l.a.createElement(x.h,null,"Card title"),l.a.createElement(x.f,null,"Card subtitle"),l.a.createElement(x.g,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),l.a.createElement(x.a,null,"Button"))),l.a.createElement(x.b,{className:"card"},l.a.createElement(x.e,{top:!0,width:"100%",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180",alt:"Card image cap"}),l.a.createElement(x.c,null,l.a.createElement(x.h,null,"Card title"),l.a.createElement(x.f,null,"Card subtitle"),l.a.createElement(x.g,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),l.a.createElement(x.a,null,"Button"))),l.a.createElement(x.b,{className:"card"},l.a.createElement(x.e,{top:!0,width:"100%",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180",alt:"Card image cap"}),l.a.createElement(x.c,null,l.a.createElement(x.h,null,"Card title"),l.a.createElement(x.f,null,"Card subtitle"),l.a.createElement(x.g,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),l.a.createElement(x.a,null,"Button")))))}}]),t}(l.a.Component),D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={example:"some state!"},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(P,null))}}]),t}(l.a.Component),F=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(o.a,null,l.a.createElement(s.a,{exact:!0,path:"/",component:T}),l.a.createElement(s.a,{exact:!0,path:"/login",component:S}),l.a.createElement(s.a,{exact:!0,path:"/signup",component:z}),l.a.createElement(s.a,{exact:!0,path:"/profile",component:A}),l.a.createElement(s.a,{exact:!0,path:"/addBeer",component:U}),l.a.createElement(s.a,{exact:!0,path:"/beers",component:D}),l.a.createElement(s.a,{component:I}))))},H=(a(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function L(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(l.a.createElement(F,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");H?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):L(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):L(e)})}}()}},[[33,2,1]]]);
//# sourceMappingURL=main.97c52cd1.chunk.js.map