(this["webpackJsonpacnh-twin"]=this["webpackJsonpacnh-twin"]||[]).push([[0],{12:function(e,a,t){},15:function(e,a,t){e.exports=t(37)},37:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),c=t.n(r),i=t(2),s=t(14),o=t.n(s),u=function(e){var a=e.birthday,t=e.handleBirthdayChange;return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"form justify-center align-center flex-row"},l.a.createElement("div",{className:"flex-col"},l.a.createElement("h1",null,"Who's your Animal Crossing: New Horizons twin?"),l.a.createElement("p",{className:"instructions"},'Find the villager that has the same birthday as you! Start by entering your birthday by day and month, for example "July 27th" would yield Ketchup and Eriks information. NPCs are not included.'),"When is your birthday?    "," ",l.a.createElement("input",{value:a,onChange:t,size:"14"}))))},m=(t(12),function(e){var a=e.villagers,t=e.filter,n=a.filter((function(e){return e["birthday-string"].toLowerCase()===t.toLowerCase().trim()}));console.log("vil",n);return l.a.createElement("div",{className:"group"},l.a.createElement("ul",null,n.map((function(e){return l.a.createElement("li",{key:e.id,className:"villagers"},l.a.createElement("h2",null,e.name["name-USen"]),l.a.createElement("br",null),l.a.createElement("img",{src:"https://acnhapi.com/v1/icons/villagers/".concat(e.id),alt:"villager-icon"}),l.a.createElement("div",{className:"inner"},l.a.createElement("h2",{className:"info"},"Info"),l.a.createElement("p",null,"Gender: ",e.gender),l.a.createElement("p",null,"Species: ",e.species),l.a.createElement("p",null,"Personality: ",e.personality),l.a.createElement("p",null,"Catch Phrase: ",e["catch-phrase"])))}))))}),h=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),s=Object(i.a)(c,2),h=s[0],d=s[1];Object(n.useEffect)((function(){o.a.get("http://acnhapi.com/v1/villagers/").then((function(e){console.log(Object.values(e.data)),d(Object.values(e.data))}))}),[]);return l.a.createElement("div",{className:"container"},l.a.createElement(u,{birthday:t,handleBirthdayChange:function(e){r(e.target.value)}}),l.a.createElement(m,{villagers:h,filter:t}))};c.a.render(l.a.createElement(h,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.26abaf9d.chunk.js.map