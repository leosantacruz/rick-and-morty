(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"static/media/Background.b9b7cfd0.gif"},26:function(e,a,t){e.exports=t(39)},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(22),l=t.n(r),s=t(3),o=t(4),i=t(6),m=t(5),u=t(7),p=t(10),d=t(11),b=t(23),h=t.n(b),g=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{class:"text-center"},c.a.createElement("h3",{className:"mb-4 mt-5"},"Welcome to my Rick and Morty website"),c.a.createElement("img",{src:h.a})))}}]),a}(c.a.Component),v=t(12),E=t.n(v),f=t(15);t(32),t(33);var N=function(){return c.a.createElement("div",{className:"lds-ring"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))},j=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={pageNumber:1,loading:!0,data:{info:[],results:[]}},t.getData=function(){var e=Object(f.a)(E.a.mark(function e(a){var n,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://rickandmortyapi.com/api/character?limit=4&page=".concat(t.state.pageNumber));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,console.log(c),t.setState({data:c,loading:!1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(a){return e.apply(this,arguments)}}(),t.changePage=function(e){t.setState({loading:!0,pageNumber:t.state.pageNumber+e},function(){t.getData()})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log("Montado"),this.getData()}},{key:"componentWillUnmount",value:function(){console.log("Desmontado")}},{key:"render",value:function(){var e=this;return console.log("renderizado"),c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",{className:"mb-4 mt-4"},"List of characters"),c.a.createElement("div",{className:"mb-2"},"Page number: ",this.state.pageNumber),c.a.createElement("div",{className:"btn-group mb-4"},c.a.createElement("button",{className:"btn btn-success",onClick:function(a){return e.changePage(-1)}},"Page before"),c.a.createElement("button",{className:"btn btn-success",onClick:function(a){return e.changePage(1)}},"Next page")),this.state.loading&&c.a.createElement(N,null),c.a.createElement("div",{className:"row"},this.state.data.results.map(function(e){return c.a.createElement(c.a.Fragment,{key:e.id},c.a.createElement(p.b,{to:"/detail/".concat(e.id),className:"col-sm-4 text-decoration-none text-reset"},c.a.createElement("div",{className:"media"},c.a.createElement("img",{className:"mr-3",src:e.image,alt:"Generic placeholder image"}),c.a.createElement("div",{className:"media-body"},c.a.createElement("h5",{className:"mt-0"},e.name),"Species: ",e.species))))})),c.a.createElement("div",{className:"mb-2"},"Page number: ",this.state.pageNumber),c.a.createElement("div",{className:"btn-group mb-4"},c.a.createElement("button",{className:"btn btn-success",onClick:function(a){return e.changePage(-1)}},"Page before"),c.a.createElement("button",{className:"btn btn-success",onClick:function(a){return e.changePage(1)}},"Next page")))}}]),a}(c.a.Component),k=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"my-4"},this.props.name," ",c.a.createElement("small",null,this.props.species)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement("img",{className:"img-fluid",src:this.props.image,alt:"",width:"100%"})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("h3",{className:"my-3"},"General information"),c.a.createElement("p",null,"This character is a ",this.props.species," from the planet",this.props.location),c.a.createElement("h3",{className:"my-3"},"Episodes:"),c.a.createElement("ul",null,this.props.episode.map(function(e){return c.a.createElement("a",{href:e},c.a.createElement("li",null,e))})))))}}]),a}(c.a.Component),y=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={loading:!1,error:null,data:{location:{},episode:[]}},t.fetchData=function(){var e=Object(f.a)(E.a.mark(function e(a){var n,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),e.prev=1,e.next=4,fetch("https://rickandmortyapi.com/api/character/".concat(t.props.match.params.id));case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,t.setState({loading:!1,data:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.setState({loading:!1,error:e.t0});case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(a){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.state.data;return 1==this.state.loading?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{class:"mt-4"},c.a.createElement(N,null))):c.a.createElement(c.a.Fragment,null,c.a.createElement(p.b,{to:"/characters",class:"btn btn-secondary btn-sm mt-3"},"Back to the list"),c.a.createElement(k,{name:e.name,species:e.species,location:e.location.name,episode:e.episode,image:e.image}))}}]),a}(c.a.Component),O=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},c.a.createElement(p.b,{className:"navbar-brand",to:"/home"},"Rick and Morty"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},c.a.createElement("div",{className:"navbar-nav"},c.a.createElement(p.c,{activeClassName:"active",className:"nav-item nav-link",to:"/home"},"Home"),c.a.createElement(p.c,{activeClassName:"active",className:"nav-item nav-link",to:"/characters"},"List of characters")))))}}]),a}(c.a.Component);var x=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,null),c.a.createElement("div",{class:"container"},e.children))},w=(t(38),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement(x,null,c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/",component:g}),c.a.createElement(d.a,{exact:!0,path:"/home",component:g}),c.a.createElement(d.a,{exact:!0,path:"/characters",component:j}),c.a.createElement(d.a,{exact:!0,path:"/detail/:id",component:y}))))}}]),a}(c.a.Component));l.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.94303637.chunk.js.map