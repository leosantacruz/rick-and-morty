(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/Background.b9b7cfd0.gif"},26:function(e,a,t){e.exports=t(39)},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(21),l=t.n(r),s=t(5),o=t(6),m=t(8),i=t(7),u=t(9),b=t(11),g=t(10),d=t(22),p=t.n(d),v=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{class:"text-center"},c.a.createElement("h3",{className:"mb-4 mt-5"},"Welcome to my Rick and Morty website"),c.a.createElement("img",{src:p.a})))}}]),a}(c.a.Component),E=t(15),h=t.n(E),f=t(23);t(32),t(33);var N=function(){return c.a.createElement("div",{className:"lds-ring"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))},k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).getData=function(){var e=Object(f.a)(h.a.mark(function e(a){var n,c;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://rickandmortyapi.com/api/character?limit=4&page=".concat(t.state.pageNumber));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,console.log(c),t.setState({data:c,loading:!1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(a){return e.apply(this,arguments)}}(),t.changePage=function(e){t.setState({loading:!0,pageNumber:t.state.pageNumber+e},function(){t.getData()})},t.state={pageNumber:1,loading:!0,data:{info:[],results:[]}},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log("Montado"),this.getData()}},{key:"componentWillUnmount",value:function(){console.log("Desmontado")}},{key:"render",value:function(){var e=this;return console.log("renderizado"),c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",{className:"mb-4 mt-4"},"List of characters"),c.a.createElement("div",{className:"mb-2"},"Page number: ",this.state.pageNumber),c.a.createElement("div",{className:"btn-group mb-4"},c.a.createElement("button",{className:"btn btn-success",onClick:function(a){return e.changePage(-1)}},"Page before"),c.a.createElement("button",{className:"btn btn-success",onClick:function(a){return e.changePage(1)}},"Next page")),this.state.loading&&c.a.createElement(N,null),c.a.createElement("div",{class:"row"},this.state.data.results.map(function(e){return c.a.createElement(c.a.Fragment,{key:e.id},c.a.createElement("div",{class:"col-sm-4"},c.a.createElement("div",{className:"media"},c.a.createElement("img",{className:"mr-3",src:e.image,alt:"Generic placeholder image"}),c.a.createElement("div",{className:"media-body"},c.a.createElement("h5",{className:"mt-0"},e.name),"Species: ",e.species))))})),c.a.createElement("div",{className:"mb-2"},"Page number: ",this.state.pageNumber),c.a.createElement("div",{className:"btn-group mb-4"},c.a.createElement("button",{className:"btn btn-success",onClick:function(a){return e.changePage(-1)}},"Page before"),c.a.createElement("button",{className:"btn btn-success",onClick:function(a){return e.changePage(1)}},"Next page")))}}]),a}(c.a.Component),j=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},c.a.createElement(b.b,{className:"navbar-brand",to:"/home"},"Rick and Morty"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},c.a.createElement("div",{className:"navbar-nav"},c.a.createElement(b.c,{activeClassName:"active",className:"nav-item nav-link",to:"/home"},"Home"),c.a.createElement(b.c,{activeClassName:"active",className:"nav-item nav-link",to:"/characters"},"List of characters")))))}}]),a}(c.a.Component);var O=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(j,null),c.a.createElement("div",{class:"container"},e.children))},y=(t(38),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(b.a,null,c.a.createElement(O,null,c.a.createElement(g.c,null,c.a.createElement(g.a,{exact:!0,path:"/",component:v}),c.a.createElement(g.a,{exact:!0,path:"/home",component:v}),c.a.createElement(g.a,{exact:!0,path:"/characters",component:k}))))}}]),a}(c.a.Component));l.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.4d3accd8.chunk.js.map