(this["webpackJsonpsanta-shares.github.io"]=this["webpackJsonpsanta-shares.github.io"]||[]).push([[0],{24:function(e,t,a){e.exports=a(40)},29:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),l=a.n(s),c=(a(29),a(7)),u=a.n(c),i=a(23),o=a(11),m=a(3),h=a(4),d=a(6),p=a(5),E=a(13),v=a(1),b=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(h.a)(a,[{key:"handleClick",value:function(e){this.setState({redirect:e})}},{key:"render",value:function(){var e=this;return void 0!==this.state.redirect?r.a.createElement(v.a,{to:"/users/"+this.state.redirect}):r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Leaderboard"),r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Won"))),r.a.createElement("tbody",null,this.props.users.map((function(t){return r.a.createElement("tr",{key:t.user_id,onClick:function(){return e.handleClick(t.user_id)}},r.a.createElement("td",null,t.user_id),r.a.createElement("td",null,t.user_name),r.a.createElement("td",null,t.games_won))})))))}}]),a}(n.Component);function f(e){return 0===e?"Proposed":1===e?"Active":2===e?"Completed":3===e?"Forfeit":4===e?"Cancelled":"Unknown ["+e+"]"}function g(e){return _.apply(this,arguments)}function _(){return(_=Object(o.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Fetching from ["+t+"]"),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var y=a(22),k=a.n(y),x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).chartRef=Object(n.createRef)(),r}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(){this.myChart.data.labels=this.props.data.map((function(e){return e.label})),this.myChart.data.datasets[0].data=this.props.data.map((function(e){return e.value})),this.myChart.update()}},{key:"componentDidMount",value:function(){this.myChart=new k.a(this.chartRef.current,{type:"doughnut",data:{labels:this.props.data.map((function(e){return e.label})),datasets:[{data:this.props.data.map((function(e){return e.value})),backgroundColor:this.props.colors}]}})}},{key:"render",value:function(){return r.a.createElement("canvas",{ref:this.chartRef})}}]),a}(n.Component),j=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:void 0},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("https://santa-games.azurewebsites.net/api/users/"+this.props.user_id);case 3:t=e.sent,this.setState({user:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;if(void 0===this.state.user)e=r.a.createElement("h5",null,"Loading user data...");else{var t=[{label:"Won",value:this.state.user.games_won},{label:"Lost",value:this.state.user.games_lost}];e=r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,this.state.user.user_name),r.a.createElement("h5",null,"Details"),r.a.createElement("table",{className:"table table-sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"User ID"),r.a.createElement("td",null,this.state.user.user_id)),r.a.createElement("tr",null,r.a.createElement("td",null,"User Name"),r.a.createElement("td",null,this.state.user.user_name)))),r.a.createElement("h5",null,"Stats"),r.a.createElement("table",{className:"table table-sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Games Played"),r.a.createElement("td",null,this.state.user.games_lost+this.state.user.games_won)),r.a.createElement("tr",null,r.a.createElement("td",null,"Games Won"),r.a.createElement("td",null,this.state.user.games_won)),r.a.createElement("tr",null,r.a.createElement("td",null,"Games Lost"),r.a.createElement("td",null,this.state.user.games_lost)))),r.a.createElement("h5",null,"Stats"),r.a.createElement(x,{data:t,title:"Won/Lost",colors:["#2c3e50","#95a5a6"]}))}return r.a.createElement("div",null,e)}}]),a}(n.Component),O=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(h.a)(a,[{key:"handleClick",value:function(e){this.setState({redirect:e})}},{key:"render",value:function(){var e,t=this;return void 0!==this.state.redirect?r.a.createElement(v.a,{to:"/games/"+this.state.redirect}):(void 0!==this.props.games&&(e=this.props.games.map((function(e){return r.a.createElement("tr",{key:e.game_id,onClick:function(){return t.handleClick(e.game_id)}},r.a.createElement("td",null,e.game_id),r.a.createElement("td",null,e.game_state),r.a.createElement("td",null,e.host_user),r.a.createElement("td",null,e.guest_user),r.a.createElement("td",null,e.win_user),r.a.createElement("td",null,e.next_user))}))),r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Games"),r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID"),r.a.createElement("th",{scope:"col"},"State"),r.a.createElement("th",{scope:"col"},"Host"),r.a.createElement("th",{scope:"col"},"Guest"),r.a.createElement("th",{scope:"col"},"Winner"),r.a.createElement("th",{scope:"col"},"Next"))),r.a.createElement("tbody",null,e))))}}]),a}(n.Component),w=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){if(null===this.props.data)return null;var e=100,t=100,a=0,n=[];n.push(r.a.createElement("line",{key:a++,x1:e,x2:e,y1:"0",y2:300,stroke:"black",strokeWidth:1})),n.push(r.a.createElement("line",{key:a++,x1:200,x2:200,y1:"0",y2:300,stroke:"black",strokeWidth:1})),n.push(r.a.createElement("line",{key:a++,x1:"0",x2:300,y1:t,y2:t,stroke:"black",strokeWidth:1})),n.push(r.a.createElement("line",{key:a++,x1:"0",x2:300,y1:200,y2:200,stroke:"black",strokeWidth:1}));for(var s=0;s<9;s++){var l=this.props.data[s],c=40,u=(s%3+.5)*e,i=(Math.floor(s/3)%3+.5)*t;"X"===l?(n.push(r.a.createElement("line",{key:a++,x1:u-c,x2:u+c,y1:i+c,y2:i-c,stroke:"black",strokeWidth:1})),n.push(r.a.createElement("line",{key:a++,x1:u-c,x2:u+c,y1:i-c,y2:i+c,stroke:"black",strokeWidth:1}))):"O"===l&&n.push(r.a.createElement("circle",{key:a++,cx:u,cy:i,r:c,stroke:"black",fill:"white",strokeWidth:1}))}var o=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(var m in o){var h=o[m],d=this.props.data[h[0]];if(" "!==d&&(this.props.data[h[1]]===d&&this.props.data[h[2]]===d)){var p=h[0],E=(p%3+.5)*e,v=(Math.floor(p/3)%3+.5)*t,b=h[2],f=(b%3+.5)*e,g=(Math.floor(b/3)%3+.5)*t;n.push(r.a.createElement("line",{key:a++,x1:E,x2:f,y1:v,y2:g,stroke:"red",strokeWidth:"3"}))}}return r.a.createElement("svg",{className:"border rounded",width:300,height:300},n)}}]),a}(n.Component),N=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){if(null===this.props.data)return null;for(var e=100,t=100,a=0,n=[],s=0;s<=7;s++)n.push(r.a.createElement("line",{key:a++,x1:s*e,x2:s*e,y1:"0",y2:600,stroke:"black",strokeWidth:1}));for(var l=0;l<=6;l++)n.push(r.a.createElement("line",{key:a++,x1:"0",x2:700,y1:l*t,y2:l*t,stroke:"black",strokeWidth:1}));return r.a.createElement("svg",{className:"border rounded",width:700,height:600},n)}}]),a}(n.Component),C=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={game:void 0},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.update();case 2:this.timerID=setInterval(Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.update();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),5e3);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"update",value:function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("https://santa-games.azurewebsites.net/api/games/"+this.props.game_id);case 2:t=e.sent,this.setState({game:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;if(void 0===this.state.game)e=r.a.createElement("h5",null,"Loading game data...");else{var t=void 0===this.state.game.host_plays_first||null===this.state.game.host_plays_first,a=null;console.log(this.state.game.game_type_id),"0"===this.state.game.game_type_id?a=r.a.createElement(w,{data:this.state.game.data}):"1"===this.state.game.game_type_id&&(a=r.a.createElement(N,{data:this.state.game.data})),e=r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Game #",this.state.game.game_id," | Tic-Tac-Toe | ",this.state.game.host_user_name," vs ",null===this.state.game.guest_user_name?"[TBD]":this.state.game.guest_user_name),r.a.createElement("h5",null,"Stats"),r.a.createElement("table",{className:"table table-sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Status"),r.a.createElement("td",null,f(this.state.game.game_state_id))),r.a.createElement("tr",null,r.a.createElement("td",null,"Created"),r.a.createElement("td",null,this.state.game.datetime_created)))),r.a.createElement("h5",null,"Details"),r.a.createElement("table",{className:"table table-sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Player 1"),r.a.createElement("td",null,t?"-":this.state.game.host_plays_first?this.state.game.host_user_name:this.state.game.guest_user_name)),r.a.createElement("tr",null,r.a.createElement("td",null,"Player 2"),r.a.createElement("td",null,t?"-":this.state.game.host_plays_first?this.state.game.guest_user_name:this.state.game.host_user_name)),r.a.createElement("tr",null,r.a.createElement("td",null,"Turns"),r.a.createElement("td",null,this.state.game.number_of_turns)),r.a.createElement("tr",null,r.a.createElement("td",null,"Next Player"),r.a.createElement("td",null,null===this.state.game.next_user_id?"-":this.state.game.next_user_id===this.state.game.host_user_id?this.state.game.host_user_name:this.state.game.guest_user_name)))),r.a.createElement("h5",null,"State"),a)}return r.a.createElement("div",null,e)}}]),a}(n.Component),W=(a(38),a(39),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(u.a.mark((function e(){var t,a,n,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("https://santa-games.azurewebsites.net/api/users");case 3:return t=e.sent,e.next=6,g("https://santa-games.azurewebsites.net/api/games");case 6:a=e.sent,t.sort((function(e,t){return t.games_won-e.games_won})),a.sort((function(e,t){return t.game_id-e.game_id})),n=Object(i.a)(a);try{for(s=function(){var e=r.value;e.game_state=f(e.game_state_id),e.host_user=null!==e.host_user_id?t.find((function(t){return t.user_id===e.host_user_id})).user_name:"-",e.guest_user=null!==e.guest_user_id?t.find((function(t){return t.user_id===e.guest_user_id})).user_name:"-",e.next_user=null!==e.next_user_id?t.find((function(t){return t.user_id===e.next_user_id})).user_name:"-",e.win_user=null!==e.win_user_id?t.find((function(t){return t.user_id===e.win_user_id})).user_name:"-"},n.s();!(r=n.n()).done;)s()}catch(l){n.e(l)}finally{n.f()}this.setState({users:t,games:a}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("img",{src:"/icon.svg",alt:"Santa",style:{height:"40px",margin:"100 10 1000 10"}}),r.a.createElement("a",{className:"navbar-brand",href:"/"},"Santa-Games"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.b,{className:"nav-link",to:"/"},"Leaderboard")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.b,{className:"nav-link",to:"/games"},"Games"))))),r.a.createElement(v.d,null,r.a.createElement(v.b,{path:"/users/:user_id",render:function(e){return r.a.createElement(j,{user_id:parseInt(e.match.params.user_id)})}}),r.a.createElement(v.b,{path:"/games/:game_id",render:function(e){return r.a.createElement(C,{game_id:parseInt(e.match.params.game_id)})}}),r.a.createElement(v.b,{path:"/games"},r.a.createElement(O,{games:this.state.games})),r.a.createElement(v.b,{path:"/"},r.a.createElement(b,{users:this.state.users}))))))}}]),a}(n.Component));l.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.5f4c19d0.chunk.js.map