(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(4),o=n.n(s),i=n(2),r=n(5),c=n(6),l=n(8),a=n(7),b=n(1),u=n.n(b),h=n(0),j=function(t){var e=t.goods;return Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)("li",{children:t},t)}))})},d=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),v=function(t){Object(l.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={visibleGoods:[].concat(d),isVisible:!1},t.reverse=function(){t.setState((function(t){var e=t.visibleGoods;return{visibleGoods:Object(i.a)(e).reverse()}}))},t.sortByAlph=function(){t.setState((function(t){var e=t.visibleGoods;return{visibleGoods:Object(i.a)(e).sort((function(t,e){return t.localeCompare(e)}))}}))},t.reset=function(){t.setState({visibleGoods:[].concat(d)})},t.sortByLength=function(){t.setState((function(t){var e=t.visibleGoods;return{visibleGoods:Object(i.a)(e).sort((function(t,e){return t.length-e.length}))}}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.visibleGoods,s=e.isVisible;return Object(h.jsx)("div",{className:"App",children:s?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Goods List:"}),Object(h.jsx)(j,{goods:n}),Object(h.jsx)("button",{type:"button",onClick:this.reverse,children:"Reverse"}),Object(h.jsx)("button",{type:"button",onClick:this.sortByAlph,children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"}),Object(h.jsx)("button",{type:"button",onClick:this.sortByLength,children:"Sort by length"})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Goods"}),Object(h.jsx)("button",{type:"button",onClick:function(){return t.setState({isVisible:!0})},children:"Start"})]})})}}]),n}(u.a.Component),p=v;o.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ac033a1b.chunk.js.map