(this["webpackJsonptic-tac"]=this["webpackJsonptic-tac"]||[]).push([[0],{13:function(t,e,s){},8:function(t,e,s){"use strict";s.r(e);var a=s(3),n=s(4),r=s(6),c=s(5),i=s(1),l=s.n(i),o=s(7),u=s.n(o),h=(s(13),s(0));function v(t){return Object(h.jsx)("button",{id:t.id,className:"square",onClick:t.onClick,children:t.value})}function j(t){for(var e,s,a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<a.length;n++)if(e=0,null!==(s=t[a[n][0]])){for(var r=0;r<3;r++)t[a[n][r]]===s&&e++;if(3===e)break}return 3===e}var d=function(t){Object(r.a)(s,t);var e=Object(c.a)(s);function s(){return Object(a.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"renderSquare",value:function(t){var e=this,s="square".concat(t);return Object(h.jsx)(v,{id:s,value:this.props.squares[t],onClick:function(){return e.props.onClick(t)}},t)}},{key:"render",value:function(){for(var t=[],e=0;e<3;e++){for(var s=[],a=void 0,n=0;n<3;n++)a=3*e+n,s.push(this.renderSquare(a));t.push(Object(h.jsx)("div",{className:"board-row",children:s},e))}return Object(h.jsx)("div",{children:t})}}]),s}(l.a.Component),p=function(t){Object(r.a)(s,t);var e=Object(c.a)(s);function s(t){var n;return Object(a.a)(this,s),(n=e.call(this,t)).state={history:[{squares:Array(9).fill(null)}],moves:[{cell:Array(2).fill(null)}],stepNo:0,nextplayer:"X"},n}return Object(n.a)(s,[{key:"handleClick",value:function(t){var e=this.state.history.slice(0,this.state.stepNo+1),s=e[e.length-1];if(!j(s.squares)&&!s.squares[t]){var a=s.squares.slice();a[t]=this.state.nextplayer;var n="X"===this.state.nextplayer?"Y":"X",r=Math.floor(t/3),c=t%3,i=this.state.moves.slice(0,this.state.stepNo+1),l=[r,c];this.setState({history:e.concat({squares:a}),moves:i.concat({cell:l}),stepNo:this.state.stepNo+1,nextplayer:n})}}},{key:"jumpTo",value:function(t){if(0!==t){var e=3*this.state.moves[t].cell[0]+this.state.moves[t].cell[1],s="square".concat(e);document.getElementById(s).focus()}this.setState({stepNo:t,nextplayer:t%2===0?"X":"Y"})}},{key:"render",value:function(){var t=this,e=this.state.history[this.state.stepNo].squares,s=this.state.history.map((function(e,s){var a=s?"Go to #".concat(s):"Go to start",n=null;return 0!==s&&(n="|| "+t.state.moves[s].cell[0]+" "+t.state.moves[s].cell[1]),Object(h.jsx)("li",{children:Object(h.jsxs)("button",{onClick:function(){return t.jumpTo(s)},children:[a," ",n]})},s)})),a=null,n=null;return!0===j(e)?(n="X"===this.state.nextplayer?"Y":"X",a="Winner is: ".concat(n)):a="Next player: ".concat(this.state.nextplayer),Object(h.jsxs)("div",{className:"game",children:[Object(h.jsx)("div",{className:"game-board",children:Object(h.jsx)(d,{squares:e,onClick:function(e){return t.handleClick(e)}})}),Object(h.jsxs)("div",{className:"game-info",children:[Object(h.jsx)("div",{className:"status",children:a}),Object(h.jsx)("ol",{children:s})]})]})}}]),s}(l.a.Component);u.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.c6845f14.chunk.js.map