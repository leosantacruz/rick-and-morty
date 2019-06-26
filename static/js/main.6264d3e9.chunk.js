(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"static/media/Background.b9b7cfd0.gif"},26:function(e,a,t){e.exports=t(43)},31:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),l=t.n(c),s=t(3),i=t(4),o=t(6),m=t(5),u=t(7),p=t(10),d=t(11),b=t(23),g=t.n(b),h=(t(31),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"text-center"},r.a.createElement("h3",{className:"mb-4 mt-5"},"Welcome to my Rick and Morty website"),r.a.createElement("img",{src:g.a,id:"homeBackground"})))}}]),a}(r.a.Component)),v=t(12),f=t.n(v),E=t(15);t(33),t(34);var N=function(){return r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},y=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={pageNumber:1,filter:"",loading:!0,data:{info:[],results:[]}},t.getData=function(){var e=Object(E.a)(f.a.mark(function e(a){var n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),e.prev=1,e.next=4,fetch("https://rickandmortyapi.com/api/character?limit=4&page=".concat(t.state.pageNumber,"&name=").concat(t.state.filter));case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,console.log(r),t.setState({data:r,loading:!1}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[1,12]])}));return function(a){return e.apply(this,arguments)}}(),t.changePage=function(e){t.setState({loading:!0,pageNumber:t.state.pageNumber+e},function(){t.getData()})},t.filterByName=function(e){t.setState({filter:e.target.value.trim(),pageNumber:1,firstPage:!0}),""==e.target.value.trim()&&t.setState({filter:""}),t.getData()},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("Montado"),this.getData()}},{key:"componentWillUnmount",value:function(){console.log("Desmontado")}},{key:"render",value:function(){var e=this,a="",t="";return""==this.state.data.info.prev&&(a="disabled"),""==this.state.data.info.next&&(t="disabled"),r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"mb-4 mt-4"},"List of characters"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Filter by name"),r.a.createElement("input",{onKeyUp:this.filterByName,className:"form-control"})),r.a.createElement("div",{className:"mb-2"},"Page number: ",this.state.pageNumber),r.a.createElement("div",{className:"btn-group mb-4"},r.a.createElement("button",{className:"btn btn-success",onClick:function(a){return e.changePage(-1)},disabled:a},"Page before"),r.a.createElement("button",{className:"btn btn-success",onClick:function(a){return e.changePage(1)},disabled:t},"Next page")),this.state.loading&&r.a.createElement(N,null),r.a.createElement("div",{className:"row"},this.state.data.results.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(p.b,{to:"/detail/".concat(e.id),className:"col-sm-4 text-decoration-none text-reset"},r.a.createElement("div",{className:"media"},r.a.createElement("img",{className:"mr-3",src:e.image,alt:"Generic placeholder image"}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",{className:"mt-0"},e.name),"Species: ",e.species))))})),r.a.createElement("div",{className:"mb-2"},"Page number: ",this.state.pageNumber),r.a.createElement("div",{className:"btn-group mb-4"},r.a.createElement("button",{className:"btn btn-success",onClick:function(a){return e.changePage(-1)},disabled:a},"Page before"),r.a.createElement("button",{className:"btn btn-success",onClick:function(a){return e.changePage(1)},disabled:t},"Next page")))}}]),a}(r.a.Component),j=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"my-4"},this.props.name," ",r.a.createElement("small",null,this.props.species)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{className:"img-fluid",src:this.props.image,alt:"",width:"100%"})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h3",{className:"my-3"},"General information"),r.a.createElement("p",null,"This character is a"," ",r.a.createElement("strong",null,this.props.gender," ",this.props.species)," ","from the planet ",r.a.createElement("strong",null,this.props.origin)," and is currently ",r.a.createElement("strong",null,this.props.status)),r.a.createElement("h3",{className:"my-3"},"More info:"),r.a.createElement("p",null,"Praesent vel dui et justo consectetur tincidunt. Pellentesque id porta lacus. Aliquam ut metus suscipit, cursus felis non, scelerisque nunc. Nam tempus placerat risus eu sollicitudin. Mauris vehicula arcu eu blandit gravida. Fusce bibendum ut ligula at vehicula. Nullam nec nunc vitae erat egestas suscipit."))))}}]),a}(r.a.Component),k=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!1,error:null,data:{origin:{},episode:[]}},t.fetchData=function(){var e=Object(E.a)(f.a.mark(function e(a){var n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),e.prev=1,e.next=4,fetch("https://rickandmortyapi.com/api/character/".concat(t.props.match.params.id));case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,t.setState({loading:!1,data:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.setState({loading:!1,error:e.t0});case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(a){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.state.data;return console.log(e),1==this.state.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"mt-4"},r.a.createElement(N,null))):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:"/characters",class:"btn btn-secondary btn-sm mt-3"},"Back to the list"),r.a.createElement(j,{name:e.name,species:e.species,origin:e.origin.name,episode:e.episode,image:e.image,gender:e.gender,status:e.status}))}}]),a}(r.a.Component),O=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(p.b,{className:"navbar-brand",to:"/home"},"Rick and Morty"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(p.c,{activeClassName:"active",className:"nav-item nav-link",to:"/home"},"Home"),r.a.createElement(p.c,{activeClassName:"active",className:"nav-item nav-link",to:"/characters"},"List of characters")))))}}]),a}(r.a.Component);var x=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("div",{class:"container"},e.children))},w=(t(39),t(40),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(x,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:h}),r.a.createElement(d.a,{exact:!0,path:"/home",component:h}),r.a.createElement(d.a,{exact:!0,path:"/characters",component:y}),r.a.createElement(d.a,{exact:!0,path:"/detail/:id",component:k}))))}}]),a}(r.a.Component));l.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.6264d3e9.chunk.js.map