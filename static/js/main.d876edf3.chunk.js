(this["webpackJsonpnotes-tracker"]=this["webpackJsonpnotes-tracker"]||[]).push([[0],{62:function(e,t,a){e.exports=a(75)},67:function(e,t,a){},68:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),l=a.n(r),c=(a(67),a(10)),o=a(30),s=a(18),u=a(46),d=a(47),m=a(49),b=a(116),p=(a(68),a(110)),E=a(113),g=a(114),h=a(111),f=a(115),v=a(48),k=a.n(v),I=a(25),S=a(118),y=a(112),L=a(77),x=a(107),w=a(109),O=a(119),j=Object(O.a)(x.a)({background:"rgba(0,212,255,0.5)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:36,padding:"0 30px","&:hover":{background:"rgba(255, 105, 135, .5)"},marginTop:"5px"});var C=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{onClick:e.clicked,variant:"contained",color:"default",style:{background:e.color},endIcon:i.a.createElement(w.a,{onClick:e.listItemClicked},e.icon)},e.label))},A=a(117),V=Object(p.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid rgba(0,212,255,0.5)",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function B(e){var t=V(),a=i.a.useState(!1),n=Object(I.a)(a,2),r=n[0],l=n[1],c=function(){l(!1)},o=null;return e.showInputs&&(o=i.a.createElement("div",null,i.a.createElement(A.a,{id:"standard-full-width",label:"Email address",placeholder:"Add Your Email Address",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}}),i.a.createElement(A.a,{id:"standard-full-width",label:"Your Password",placeholder:"Add Your Password",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}}))),i.a.createElement("div",null,i.a.createElement(h.a,{type:"button",style:{margin:"20px",fontSize:"20px",cursor:"pointer"},onClick:function(){l(!0)}},e.label),i.a.createElement(S.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:r,onClose:c,closeAfterTransition:!0,BackdropComponent:y.a,BackdropProps:{timeout:500}},i.a.createElement(L.a,{in:r},i.a.createElement("div",{className:t.paper},i.a.createElement("h2",{id:"transition-modal-title"},e.title),i.a.createElement("p",{id:"transition-modal-description"},e.description),o,i.a.createElement(C,{clicked:c,label:e.buttonLabel})))))}var F=Object(p.a)((function(e){return{root:{flexGrow:1,background:"rgba(0,212,255,0.5)",color:"black"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function R(){var e=F();return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{position:"static",className:e.root},i.a.createElement(g.a,null,i.a.createElement(f.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},i.a.createElement(k.a,null)),i.a.createElement(h.a,{variant:"h4",className:e.title},"Notes Tracker"),i.a.createElement(B,{showInputs:!1,label:"Account",title:"Account",description:"Manage Your Account",buttonLabel:"close"}),i.a.createElement(B,{showInputs:!1,label:"LogOut",title:"LogOut",description:"",buttonLabel:"LogOut"}),i.a.createElement(B,{showInputs:!0,label:"LogIn",title:"LogIn",description:"",buttonLabel:"LogIn"}),i.a.createElement(B,{showInputs:!0,label:"SignUp",title:"SignUp",description:"",buttonLabel:"SignUp"}))))}var N=Object(p.a)((function(e){return{container:{display:"flex",flexWrap:"wrap",margin:"15px"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));function P(e){var t=N();return i.a.createElement("div",{className:t.container},i.a.createElement(A.a,{onChange:e.onChange,id:"standard-full-width",label:e.label,style:{margin:8},placeholder:e.label,fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},value:e.value}))}var T=a(36),W=a.n(T);function G(e){var t="white"===e.styleBackground?"#E8A9B1":"white";return i.a.createElement("div",{style:{background:t,margin:"8px"}},i.a.createElement(h.a,null,e.todo))}function Y(e){var t=e.addTodo,a=Object(n.useState)(""),r=Object(I.a)(a,2),l=r[0],c=r[1];console.log("the inputValue is: ".concat(l));var o=function(e){e.preventDefault(),l&&(t(l),c(""))};return i.a.createElement(b.a,{container:!0},i.a.createElement(b.a,{item:!0,xs:6},i.a.createElement("form",{onSubmit:o},i.a.createElement(A.a,{id:"standard-full-width",onChange:function(e){return c(e.target.value)},label:"Add Your SubItem",style:{margin:8},placeholder:"Add Your SubItem",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},value:l}))),i.a.createElement(b.a,{item:!0,xs:6},i.a.createElement(w.a,{onClick:o,style:{cursor:"pointer",fontSize:40},color:"secondary","aria-label":"add"},"add_circle")))}var z=function(e){var t=Object(n.useState)(Object(c.a)(e.arraySubItems)),a=Object(I.a)(t,2),r=a[0],l=a[1];Object(n.useEffect)((function(){console.log("USE EFFECT TRIGGERED");var t=Object(c.a)(e.arraySubItems);l(t)}),[e.label.name]),Object(n.useEffect)((function(){console.log("USE EFFECT TRIGGERED");var t=Object(c.a)(e.arraySubItems);l(t)}),[e.arraySubItems.length]);var o=Object(n.useState)(!1),s=Object(I.a)(o,2),u=s[0],d=s[1],m=u?"keyboard_arrow_up":"keyboard_arrow_down";return i.a.createElement(b.a,{container:!0},i.a.createElement(b.a,{item:!0,xs:6},i.a.createElement(h.a,{style:{fontSize:"25px"}},e.label.name)),i.a.createElement(b.a,{item:!0,xs:4},i.a.createElement(w.a,{onClick:function(e){return d(!u)},style:{cursor:"pointer",fontSize:"40px"}},m)),i.a.createElement(b.a,{item:!0,xs:2},i.a.createElement(W.a,{onClick:e.clicked.bind(void 0,e.id),style:{cursor:"pointer",fontSize:"40px"},id:e.id})),u?i.a.createElement(i.a.Fragment,null,r.map((function(t,a){return i.a.createElement(b.a,{container:!0,key:a},i.a.createElement(b.a,{item:!0,xs:10},i.a.createElement(G,{index:a,todo:t,styleBackground:e.styleBackground})),i.a.createElement(b.a,{item:!0,xs:2},i.a.createElement(W.a,{onClick:e.clickedSubItem.bind(void 0,a),style:{cursor:"pointer"}})))})),i.a.createElement(Y,{addTodo:function(t){var a=[].concat(Object(c.a)(e.arraySubItems),[t]);l(a),e.addSubItem(t,e.selectedItem),console.log(e.arraySubItems)}})):null)},D=(a(74),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={container:[],selectedList:0,inputListValue:"",inputItemValue:""},a.addItem=function(e){e.preventDefault();var t=Object(c.a)(a.state.container);t[a.state.selectedList].items.push({name:a.state.inputItemValue,subitems:[]}),a.setState({container:t,inputItemValue:""})},a.addList=function(e){e.preventDefault();var t=Object(c.a)(a.state.container),n=t.length+1;t.push({id:"".concat(a.state.inputListValue,"-").concat(n),items:[]}),a.setState({container:t,inputListValue:""})},a.addSubItem=function(e,t){var n=Object(c.a)(a.state.container);n[a.state.selectedList].items[t].subitems.push(e),a.setState({container:n,inputItemValue:""})},a.saveItem=function(e){a.setState({inputItemValue:e.target.value})},a.saveList=function(e){a.setState({inputListValue:e.target.value})},a.itemRemove=function(e){var t=Object(c.a)(a.state.container);t[a.state.selectedList].items.splice(e,1),a.setState({container:t})},a.subItemRemove=function(e,t){var n=Object(c.a)(a.state.container);n[a.state.selectedList].items[e].subitems.splice(t,1),a.setState({container:n})},a.setActiveList=function(e){var t=parseInt(e.slice(-1))-1;a.setState({selectedList:t})},a.listItemClicked=function(e){var t=Object(c.a)(a.state.container);t.forEach((function(a,n){a.id===e&&t.splice(n,1)})),t.forEach((function(e,t){var a=e.id.substring(0,e.id.length-1),n=t+1;e.id=a+n})),a.setState({container:t})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.container.map((function(t,a){return e.state.selectedList===a?i.a.createElement(C,{key:t.id,label:t.id,clicked:e.setActiveList.bind(e,t.id),icon:"delete",listItemClicked:e.listItemClicked.bind(e,t.id),color:"red"}):i.a.createElement(C,{key:t.id,label:t.id,clicked:e.setActiveList.bind(e,t.id),icon:"delete",listItemClicked:e.listItemClicked.bind(e,t.id)})})),a=null;0!==this.state.container.length&&(a=i.a.createElement(i.a.Fragment,null,t,i.a.createElement(b.a,{container:!0,alignItems:"center"},i.a.createElement(b.a,{item:!0,xs:6},i.a.createElement("form",{onSubmit:this.addItem},i.a.createElement(P,{label:"Please, add your item",onChange:this.saveItem,value:this.state.inputItemValue}))),i.a.createElement(b.a,{item:!0,xs:6},i.a.createElement(C,{label:"Submit",color:"#00474F",clicked:this.addItem,icon:"send"})))));var n=null;return this.state.container[this.state.selectedList]&&(n=this.state.container[this.state.selectedList].items.map((function(t,a){var n;return n=a%2===0?"rgba(0,212,255,0.5)":"white",i.a.createElement("div",{key:a,style:{background:n}},i.a.createElement(z,{label:t,selectedItem:a,arraySubItems:e.state.container[e.state.selectedList].items[a].subitems,addSubItem:e.addSubItem,clickedSubItem:e.subItemRemove.bind(e,a),styleBackground:n,clicked:e.itemRemove.bind(e,a),id:a}))}))),i.a.createElement("div",{className:"App"},i.a.createElement(b.a,{className:"App",container:!0,direction:"row",justify:"center",alignItems:"center"},i.a.createElement(R,null),i.a.createElement(b.a,{item:!0,xs:6},i.a.createElement("form",{onSubmit:this.addList},i.a.createElement(P,{label:"Please, add your list name",onChange:this.saveList,value:this.state.inputListValue}))),i.a.createElement(b.a,{item:!0,xs:6},i.a.createElement(C,{label:"Add List",color:"#00474F",clicked:this.addList,icon:"add"})),i.a.createElement(b.a,{item:!0,xs:12},a),i.a.createElement(b.a,{item:!0,xs:12},n)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[62,1,2]]]);
//# sourceMappingURL=main.d876edf3.chunk.js.map