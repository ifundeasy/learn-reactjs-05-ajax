(this["webpackJsonplearn-reactjs-05-ajax"]=this["webpackJsonplearn-reactjs-05-ajax"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),o=(a(14),a(8)),u=a(1),i=a(2),m=a(4),s=a(3),h=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Action")))},b=function(e){var t=e.characters,a=e.removeCharacter,n=t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return a(t)}},"Delete")))}));return r.a.createElement("tbody",null,n)},p=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.myData,a=e.remover;return r.a.createElement("div",{style:{marginTop:"20px",overflowX:"auto"}},r.a.createElement("table",null,r.a.createElement(h,null),r.a.createElement(b,{characters:t,removeCharacter:a})))}}]),a}(n.Component),f=a(7),v=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).defaultState={name:"",job:""},e.state=e.defaultState,e.onChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(f.a)({},n,r))},e.onClickSubmit=function(){e.props.adder(e.state)&&e.onClickReset()},e.onClickReset=function(){e.setState(e.defaultState)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",value:t,onChange:this.onChange}),r.a.createElement("label",{htmlFor:"job"},"Job"),r.a.createElement("input",{type:"text",name:"job",id:"job",value:a,onChange:this.onChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.onClickSubmit}),r.a.createElement("input",{type:"button",value:"Reset",onClick:this.onClickReset}))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={characters:[]},e.remover=function(t){var a=e.state.characters;e.setState({characters:a.filter((function(e,a){return a!==t}))})},e.adder=function(t){if(t.name&&t.job)return e.setState({characters:[].concat(Object(o.a)(e.state.characters),[t])}),!0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=setTimeout((function(){e.setState({characters:[{name:"Charlie",job:"Janitor"},{name:"Mac",job:"Bouncer"},{name:"Dee",job:"Aspring actress"},{name:"Dennis",job:"Bartender"}]}),clearTimeout(t)}),2e3)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{width:"100%",backgroundColor:"#e8e8e8",marginTop:"0px"}},"React App"),r.a.createElement(p,{myData:this.state.characters,remover:this.remover}),r.a.createElement("br",null),r.a.createElement(v,{adder:this.adder}))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.39bf3b38.chunk.js.map