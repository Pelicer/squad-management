(this.webpackJsonpventurus=this.webpackJsonpventurus||[]).push([[0],{28:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),n=a(14),c=a.n(n),r=a(15),l=a(3),o=a(8),d=a(9),m=a(2),j=a(11),h=a(10),b=(a(28),a(39)),p=a(0),u=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={teams:s.props.teams},s}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return null!==this.state.teams&&this.state.teams.length>0?Object(p.jsx)("tbody",{children:this.state.teams.map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t.teamName}),Object(p.jsxs)("td",{children:[Object(p.jsx)("p",{children:t.teamName+" Squad"}),Object(p.jsxs)("div",{className:"actions",children:[Object(p.jsx)("span",{className:"delete",onClick:function(){return e.props.deleteTeam(t.teamId)},children:Object(p.jsx)("div",{className:"tooltip",children:"Delete"})}),Object(p.jsx)("span",{className:"share",children:Object(p.jsx)("div",{className:"tooltip",children:"Share"})}),Object(p.jsx)("span",{className:"edit",onClick:function(){return e.props.editTeam(t.teamId)},children:Object(p.jsx)("div",{className:"tooltip",children:"Edit"})})]})]})]},Object(b.a)())}))}):Object(p.jsx)("tbody",{className:"emptyState",children:Object(p.jsx)("tr",{children:Object(p.jsx)("td",{colSpan:"2",children:"No teams were created yet"})})})}}]),a}(i.a.Component),O=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={teams:s.props.teams,highestAvg:[],lowestAvg:[],teamAgeAverages:[]},s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=0,a=[],s=[];null!==this.state.teams&&this.state.teams.forEach((function(i){var n=i.teamPlayers,c=0;n.forEach((function(e){c+=e.age}));var r={TeamName:i.teamName,AverageAge:c/n.length};a.push(r),s.push(r),t===e.state.teams.length-1&&(a.sort((function(e,t){return t.AverageAge>e.AverageAge?1:e.AverageAge>t.AverageAge?-1:0})),s.sort((function(e,t){return t.AverageAge<e.AverageAge?1:e.AverageAge<t.AverageAge?-1:0})),(s=s.splice(0,5)).sort((function(e,t){return t.AverageAge>e.AverageAge?1:e.AverageAge>t.AverageAge?-1:0})),e.setState({highestAvg:a.splice(0,5),lowestAvg:s})),t++}))}},{key:"render",value:function(){var e=this;return 0!==this.state.highestAvg.length&&0!==this.state.lowestAvg.length?Object(p.jsxs)("div",{className:"ages",children:[Object(p.jsxs)("div",{className:"highest",children:[Object(p.jsx)("p",{children:"Highest avg age"}),Object(p.jsx)("ul",{children:this.state.highestAvg.map((function(t){return 0===e.state.highestAvg.indexOf(t)?Object(p.jsxs)("li",{className:"highlighted",children:[t.TeamName,Object(p.jsx)("span",{children:t.AverageAge.toFixed(2)})]},Object(b.a)()):Object(p.jsxs)("li",{children:[t.TeamName,Object(p.jsx)("span",{children:t.AverageAge.toFixed(2)})]},Object(b.a)())}))})]}),Object(p.jsxs)("div",{className:"lowest",children:[Object(p.jsx)("p",{children:"Lowest avg age"}),Object(p.jsx)("ul",{children:this.state.lowestAvg.map((function(t){return e.state.lowestAvg.indexOf(t)===e.state.lowestAvg.length-1?Object(p.jsxs)("li",{className:"highlighted",children:[t.TeamName,Object(p.jsx)("span",{children:t.AverageAge.toFixed(2)})]},Object(b.a)()):Object(p.jsxs)("li",{children:[t.TeamName,Object(p.jsx)("span",{children:t.AverageAge.toFixed(2)})]},Object(b.a)())}))})]})]}):Object(p.jsx)("div",{className:"ages emptyState",children:Object(p.jsx)("p",{children:"Begin createing teams to get age avarage statistics"})})}}]),a}(i.a.Component),g=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={teams:s.props.teams,most:{},least:{}},s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e={players:[],total:0};if(null!==this.state.teams){this.props.teams.forEach((function(t){t.teamPlayers.forEach((function(t){var a=e.players.filter((function(e){return e.id===t.id}))[0];void 0!==a?a.picks++:e.players.push({id:t.id,name:t.name,initials:t.initials,picks:1}),e.total++}))}));var t={ratio:0},a={ratio:100};e.players.forEach((function(s){s.ratio=(s.picks/e.total*100).toFixed(1),s.ratio>t.ratio&&(t=s),s.ratio<a.ratio&&(a=s)})),void 0!==t.initials&&void 0!==a.initials&&this.setState({most:t,least:a})}}},{key:"render",value:function(){return void 0!==this.state.most.initials&&void 0!==this.state.least.initials?Object(p.jsxs)("div",{className:"ratioWrapper",children:[Object(p.jsxs)("div",{className:"most",children:[Object(p.jsx)("div",{className:"title",children:"Most picked player"}),Object(p.jsx)("div",{className:"player",children:Object(p.jsxs)("div",{className:"initials",children:[this.state.most.initials,Object(p.jsxs)("span",{children:[this.state.most.ratio,"%"]})]})})]}),Object(p.jsxs)("div",{className:"least",children:[Object(p.jsx)("div",{className:"title",children:"Least picked player"}),Object(p.jsx)("div",{className:"player",children:Object(p.jsxs)("div",{className:"initials",children:[this.state.least.initials,Object(p.jsxs)("span",{children:[this.state.least.ratio,"%"]})]})})]})]}):Object(p.jsxs)("div",{className:"ratioWrapper",children:[Object(p.jsxs)("div",{className:"most",children:[Object(p.jsx)("div",{className:"title",children:"Most picked player"}),Object(p.jsx)("div",{className:"player",children:Object(p.jsx)("div",{className:"initials",children:Object(p.jsx)("span",{children:"-"})})})]}),Object(p.jsxs)("div",{className:"least",children:[Object(p.jsx)("div",{className:"title",children:"Least picked player"}),Object(p.jsx)("div",{className:"player",children:Object(p.jsx)("div",{className:"initials",children:Object(p.jsx)("span",{children:"-"})})})]})]})}}]),a}(i.a.Component),v=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;Object(o.a)(this,a),(s=t.call(this,e)).sortTable=function(e){var t,a,s,i,n,c,r;for(t=document.getElementsByTagName("table")[0],s=!0;s;){for(s=!1,a=t.rows,i=1;i<a.length-1;i++)if(r=!1,n=a[i].getElementsByTagName("TD")[e],c=a[i+1].getElementsByTagName("TD")[e],n.innerHTML.toLowerCase()>c.innerHTML.toLowerCase()){r=!0;break}r&&(a[i].parentNode.insertBefore(a[i+1],a[i]),s=!0)}},s.deleteTeam=function(e){var t=s.state.teams,a=-1;t.forEach((function(s){e===s.team_id&&(a=t.indexOf(s))})),t.splice(a,1),s.setState({teams:t}),localStorage.setItem("teamsList",JSON.stringify(t)),c.a.render(Object(p.jsx)(O,{teams:s.state.teams}),document.getElementById("ageWrapper"))},s.editTeam=function(e){window.location.replace("/creation?id="+e)};var i=localStorage.getItem("teamsList");return console.log(i),s.state={teams:JSON.parse(i)},s.deleteTeam=s.deleteTeam.bind(Object(m.a)(s)),s.editTeam=s.editTeam.bind(Object(m.a)(s)),s.sortTable=s.sortTable.bind(Object(m.a)(s)),s}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("section",{id:"content",children:[Object(p.jsxs)("div",{id:"teamsList",className:"panel",children:[Object(p.jsx)("div",{className:"head",children:Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("p",{children:"My teams"}),Object(p.jsx)("a",{className:"link",href:"/creation",children:"+"})]})}),Object(p.jsx)("div",{className:"table-wrapper",children:Object(p.jsxs)("table",{cellSpacing:"0",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{onClick:function(){return e.sortTable(0)},children:"Name"}),Object(p.jsx)("th",{onClick:function(){return e.sortTable(1)},children:"Description"})]})}),Object(p.jsx)(u,{teams:this.state.teams,deleteTeam:this.deleteTeam,editTeam:this.editTeam})]})})]}),Object(p.jsxs)("div",{id:"ageStats",className:"panel",children:[Object(p.jsx)("div",{className:"head",children:Object(p.jsx)("p",{children:"Top 5"})}),Object(p.jsx)("div",{id:"ageWrapper",children:Object(p.jsx)(O,{teams:this.state.teams})})]}),Object(p.jsx)("div",{id:"pickedStats",className:"panel",children:Object(p.jsx)(g,{teams:this.state.teams})})]})}}]),a}(i.a.Component),f=a(16),x=(a(30),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;Object(o.a)(this,a),s=t.call(this,e);var i=JSON.parse(localStorage.getItem("teamsList"));if(""!==s.props.location.search&&-1!==s.props.location.search.indexOf("id")){var n=s.props.location.search.replace("?id=","");if(null==i)s.state={playersSearchList:[],teamId:"",teamPlayers:[],teamName:"",teamDescription:"",teamType:"",teamTags:[],teamWebsite:"",teamFormation:"3 - 2 - 2 - 3"},localStorage.setItem("teamsList","[]");else{var c=i.filter((function(e){return e.teamId=n}))[0];s.state={playersSearchList:[],teamId:n,teamPlayers:c.teamPlayers,teamName:c.teamName,teamDescription:c.teamDescription,teamType:c.teamType,teamTags:c.teamTags,teamWebsite:c.teamWebsite,teamFormation:c.teamFormation}}}else null==i&&localStorage.setItem("teamsList","[]"),s.state={playersSearchList:[],teamId:"",teamPlayers:[],teamName:"",teamDescription:"",teamType:"",teamTags:[],teamWebsite:"",teamFormation:"3 - 2 - 2 - 3"};return s.getPlayers=s.getPlayers.bind(Object(m.a)(s)),s.addPlayerToTeam=s.addPlayerToTeam.bind(Object(m.a)(s)),s.removePlayerFromTeam=s.removePlayerFromTeam.bind(Object(m.a)(s)),s.clearTeam=s.clearTeam.bind(Object(m.a)(s)),s.setTeamDescription=s.setTeamDescription.bind(Object(m.a)(s)),s.setTeamName=s.setTeamName.bind(Object(m.a)(s)),s.setTeamWebsite=s.setTeamWebsite.bind(Object(m.a)(s)),s.setTeamType=s.setTeamType.bind(Object(m.a)(s)),s.setTeamTags=s.setTeamTags.bind(Object(m.a)(s)),s.removeTag=s.removeTag.bind(Object(m.a)(s)),s.setTeamFormation=s.setTeamFormation.bind(Object(m.a)(s)),s.saveTeam=s.saveTeam.bind(Object(m.a)(s)),s.dragPlayer=s.dragPlayer.bind(Object(m.a)(s)),s.allowPlayerDrag=s.allowPlayerDrag.bind(Object(m.a)(s)),s.playerDrop=s.playerDrop.bind(Object(m.a)(s)),s}return Object(d.a)(a,[{key:"getPlayers",value:function(e){var t=this;console.log("a987d74821msh1e7fc476b48eb6dp1cfab0jsn9f1e0d274b6f"),e.length>=4&&fetch("https://api-football-v1.p.rapidapi.com/v2/players/search/"+e,{withCredentials:"false",method:"GET",headers:{"x-rapidapi-key":"a987d74821msh1e7fc476b48eb6dp1cfab0jsn9f1e0d274b6f","x-rapidapi-host":"api-football-v1.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){var a=[];e.api.players.forEach((function(e){var s=e.player_name.split(" ");s=1===s.length?s[0].substring(0,1)+s[0].substring(1,1):s[0].substring(0,1)+s[1].substring(0,1),void 0===t.state.teamPlayers.filter((function(t){return t.id===e.player_id}))[0]&&a.push({id:e.player_id,name:e.player_name,initials:s,nationality:e.nationality,age:e.age})})),t.setState({playersSearchList:a.slice(0,10)})})).catch((function(e){console.error(e)}))}},{key:"setTeamName",value:function(e){this.setState({teamName:e})}},{key:"setTeamDescription",value:function(e){this.setState({teamDescription:e})}},{key:"setTeamWebsite",value:function(e){this.setState({teamWebsite:e})}},{key:"setTeamType",value:function(e){this.setState({teamType:e})}},{key:"setTeamTags",value:function(e){switch(e.keyCode){case 13:case 191:var t=e.target.value;t=t.replace(";",""),this.setState((function(e){return{teamTags:[].concat(Object(f.a)(e.teamTags),[t])}})),document.getElementById("tagsInput").value="";break;case 8:console.log(e);var a=this.state.teamTags;e.target.value.length<=0&&(a.splice(a.length-1,1),this.setState({teamTags:a}));break;default:return}}},{key:"removeTag",value:function(e){var t=this.state.teamTags;t=t.filter((function(t){return t!==e})),this.setState({teamTags:t})}},{key:"setTeamFormation",value:function(e){this.setState({teamFormation:e}),this.clearTeam()}},{key:"clearTeam",value:function(){this.setState({playersSearchList:[],teamPlayers:[]}),document.getElementById("playerSearchInput").value=""}},{key:"checkFields",value:function(e){var t=!0;""===e.teamName?(document.getElementById("teamNameField").parentNode.classList.add("incorrectInfo"),document.getElementById("teamNameField").focus(),t=!1):document.getElementById("teamNameField").parentNode.classList.remove("incorrectInfo");var a=new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi);return""===e.teamWebsite||null===e.teamWebsite.match(a)?(document.getElementById("teamWebsiteField").parentNode.classList.add("incorrectInfo"),document.getElementById("teamWebsiteField").focus(),t=!1):document.getElementById("teamWebsiteField").parentNode.classList.remove("incorrectInfo"),""===e.teamType?(document.getElementById("teamTypeField").classList.add("incorrectInfo"),document.getElementById("teamTypeField").children[1].focus(),t=!1):document.getElementById("teamTypeField").parentNode.classList.remove("incorrectInfo"),e.teamPlayers.length<11&&(document.getElementById("formationField").classList.add("incorrectInfo"),document.getElementById("formationField").focus(),t=!1),t}},{key:"saveTeam",value:function(){var e=this,t=JSON.parse(localStorage.getItem("teamsList"));if(console.log(t),console.log(this.state),null!==t)if(""==this.state.teamId)this.checkFields(this.state)&&(this.state.teamId=Object(b.a)(),delete this.state.playersSearchList,t.push(this.state),localStorage.setItem("teamsList",JSON.stringify(t)),window.location.replace("/"));else{var a=t.filter((function(t){return t.teamId===e.state.teamId}))[0];a=this.state,t.forEach((function(e){e.teamId===a.teamId&&(e.teamName=a.teamName,e.teamDescription=a.teamDescription,e.teamWebsite=a.teamWebsite,e.teamTags=a.teamTags,e.teamType=a.teamType,e.teamFormation=a.teamFormation,e.teamPlayers=a.teamPlayers)})),this.checkFields(a)&&(localStorage.setItem("teamsList",JSON.stringify(t)),window.location.replace("/"))}else this.checkFields(this.state)&&(this.state.teamId=Object(b.a)(),delete this.state.playersSearchList,t.push(this.state),localStorage.setItem("teamsList",JSON.stringify(t)),window.location.replace("/"))}},{key:"addPlayerToTeam",value:function(e){if(this.state.teamPlayers.length<11&&0===this.state.teamPlayers.filter((function(t){return t.id===e.id})).length){this.setState((function(t){return{teamPlayers:[].concat(Object(f.a)(t.teamPlayers),[e])}}));var t=this.state.playersSearchList.filter((function(t){return t.id!==e.id}));this.setState({playersSearchList:t})}}},{key:"removePlayerFromTeam",value:function(e){if(void 0!==e){var t=this.state.teamPlayers;t=t.filter((function(t){return t.id!==e})),this.setState({teamPlayers:t})}}},{key:"dragPlayer",value:function(e){e.dataTransfer.setData("playerId",e.target.id),e.dataTransfer.dropEffect="move"}},{key:"allowPlayerDrag",value:function(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}},{key:"playerDrop",value:function(e){e.preventDefault();var t=e.dataTransfer.getData("playerId"),a=this.state.playersSearchList.filter((function(e){return e.id==t}))[0];a.position=e.target.id.split("_")[1],this.addPlayerToTeam(a)}},{key:"render",value:function(){var e=this,t="Fantasy"===this.state.teamType,a="Real"===this.state.teamType;return Object(p.jsx)("section",{id:"creation-content",children:Object(p.jsxs)("div",{className:"panel",children:[Object(p.jsx)("div",{className:"head",children:Object(p.jsx)("div",{className:"wrapper",children:Object(p.jsx)("p",{children:"Create your team"})})}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"team-info",children:[Object(p.jsx)("p",{className:"section-title",children:"Team information"}),Object(p.jsxs)("div",{className:"left-pane",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"teamname",children:"Team name"}),Object(p.jsx)("input",{id:"teamNameField",name:"teamname",placeholder:"Insert team name",onChange:function(t){return e.setTeamName(t.target.value)},value:this.state.teamName})]}),Object(p.jsxs)("div",{className:"area-wrapper",children:[Object(p.jsx)("label",{htmlFor:"description",children:"Description"}),Object(p.jsx)("textarea",{id:"teamDescriptionField",className:"textarea",name:"description",placeholder:"Insert your team description",onChange:function(t){return e.setTeamDescription(t.target.value)},value:this.state.teamDescription})]})]}),Object(p.jsxs)("div",{className:"right-pane",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"website",children:"Team website"}),Object(p.jsx)("input",{id:"teamWebsiteField",name:"website",placeholder:"http://myteam.com",onChange:function(t){return e.setTeamWebsite(t.target.value)},value:this.state.teamWebsite})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"type",children:"Team type"}),Object(p.jsxs)("div",{id:"teamTypeField",className:"team-types",children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"type",value:"Real",checked:a,onChange:function(t){return e.setTeamType(t.target.value)}}),Object(p.jsx)("span",{className:"checkmark"}),"Real"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"type",value:"Fantasy",checked:t,onChange:function(t){return e.setTeamType(t.target.value)}}),Object(p.jsx)("span",{className:"checkmark"}),"Fantasy"]})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"tags",children:"Tags"}),Object(p.jsxs)("div",{id:"tagsField",suppressContentEditableWarning:!0,contentEditable:"true",className:"textarea",name:"tags",onFocus:function(){return document.getElementById("tagsInput").focus()},children:[this.state.teamTags.map((function(t){return Object(p.jsxs)("span",{children:[t,Object(p.jsx)("b",{onClick:function(){return e.removeTag(t.toString())},children:"X"})]},t)})),Object(p.jsx)("input",{id:"tagsInput",onKeyDown:function(t){return e.setTeamTags(t)}})]})]})]})]}),Object(p.jsxs)("div",{className:"config-info",children:[Object(p.jsx)("p",{className:"section-title",children:"Configure squad"}),Object(p.jsxs)("div",{id:"formationField",className:"left-pane",children:[Object(p.jsxs)("div",{className:"formation-selection",children:[Object(p.jsx)("label",{children:"Formation"}),Object(p.jsxs)("select",{onChange:function(t){return e.setTeamFormation(t.target.value)},children:[Object(p.jsx)("option",{children:"3 - 2 - 2 - 3"}),Object(p.jsx)("option",{children:"3 - 2 - 3 - 1"}),Object(p.jsx)("option",{children:"3 - 4 - 3"}),Object(p.jsx)("option",{children:"3 - 5 - 2"}),Object(p.jsx)("option",{children:"4 - 2 - 3 - 1"}),Object(p.jsx)("option",{children:"4 - 3 - 1 - 1"}),Object(p.jsx)("option",{children:"4 - 3 - 2"}),Object(p.jsx)("option",{children:"4 - 4 - 2"}),Object(p.jsx)("option",{children:"4 - 5 - 1"}),Object(p.jsx)("option",{children:"5 - 4 - 1"})]})]}),Object(p.jsx)("div",{className:"formation-field",children:Object(f.a)(Array(11)).map((function(t,a){var s,i=e.state.teamPlayers.filter((function(e){return e.position==a}))[0];switch(a){case 3:case 10:s="position centered";break;case 5:s="position middle";break;default:s="position"}return Object(p.jsxs)("div",{onDragOver:function(t){return e.allowPlayerDrag(t)},onDrop:function(t){return e.playerDrop(t)},id:"player_"+a,className:s,onClick:function(){return void 0!==i?e.removePlayerFromTeam(i.id):""},children:[void 0===i?"+":i.initials,Object(p.jsxs)("div",{className:"tooltip",children:[Object(p.jsxs)("p",{children:["Name:",Object(p.jsx)("span",{children:void 0===i?"":i.name})]}),Object(p.jsxs)("p",{children:["Age:",Object(p.jsx)("span",{children:void 0===i?"":i.age})]}),Object(p.jsxs)("p",{children:["Nacionality:",Object(p.jsx)("span",{children:void 0===i?"":i.nationality})]})]})]},"player_"+a)}))}),Object(p.jsx)("button",{onClick:this.saveTeam,children:"Save"})]}),Object(p.jsxs)("div",{className:"right-pane",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"searchbox",children:"Search Players"}),Object(p.jsx)("input",{id:"playerSearchInput",name:"searchbox",onChange:function(t){return e.getPlayers(t.target.value)}})]}),Object(p.jsx)("div",{className:"players-list",children:e.state.playersSearchList.length>0?e.state.playersSearchList.map((function(t){return Object(p.jsxs)("div",{draggable:"true",id:t.id,onDragStart:function(t){return e.dragPlayer(t)},className:"player",children:[Object(p.jsxs)("p",{children:["Name:",Object(p.jsx)("span",{children:t.name})]}),Object(p.jsxs)("p",{children:["Age:",Object(p.jsx)("span",{children:t.age})]}),Object(p.jsxs)("p",{children:["Nacionality:",Object(p.jsx)("span",{children:t.nationality})]})]},t.id)})):Object(p.jsxs)("div",{className:"emptyState",children:[Object(p.jsx)("p",{children:"Type on the search box to find players. 4 characters minimum for a search"})," "]})})]})]})]})]})})}}]),a}(i.a.Component)),y=function(){return Object(p.jsx)(r.a,{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/",exact:!0,component:v}),Object(p.jsx)(l.a,{path:"/creation",component:x})]})})},T=a.p+"static/media/logo.e56c4f3c.png";a(36);function N(){return Object(p.jsxs)("section",{id:"header",children:[Object(p.jsxs)("div",{className:"logo",children:[Object(p.jsx)("a",{href:"/",children:Object(p.jsx)("img",{alt:"Venturus logo",src:T})}),Object(p.jsx)("p",{children:"Squad Management Tool"})]}),Object(p.jsxs)("div",{className:"user-info",children:[Object(p.jsx)("p",{children:"John Doe"}),Object(p.jsx)("span",{children:"JD"})]})]})}a(37);function S(){return Object(p.jsx)("section",{id:"footer",children:Object(p.jsx)("p",{children:"2020 - All rights reserved"})})}c.a.render(Object(p.jsxs)(r.a,{children:[Object(p.jsx)(N,{}),Object(p.jsx)(y,{}),Object(p.jsx)(S,{})]}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.79809230.chunk.js.map