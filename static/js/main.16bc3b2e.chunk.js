(this["webpackJsonpgraybot-web"]=this["webpackJsonpgraybot-web"]||[]).push([[0],{121:function(e,o,n){e.exports=n(279)},279:function(e,o,n){"use strict";n.r(o);var a=n(0),t=n.n(a),r=n(11),l=n.n(r),i=(n(126),n(118)),s=n(51),c=n(12),u=n(106),d=n(31),h=n(107),g=n(108),m=n(119),f=n(114),p=n.n(f),y=n(109),v=n.n(y),b=n(304),w=n(300),C=n(301),E=n(116),O=n.n(E),S=n(303),k=n(302),A=n(117),P=n.n(A),M=n(110),j=n.n(M),T=n(111),L=n.n(T);function x(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?x(Object(n),!0).forEach((function(o){Object(c.a)(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}var D={audioLists:[],defaultPlayIndex:0,theme:"dark",bounds:"parent",preload:!0,glassBg:!0,remember:!0,remove:!0,defaultPosition:{top:300,left:120},playModeText:{order:"All",orderLoop:"Repeat All",singleLoop:"Repeat Current",shufflePlay:"Shuffle"},openText:"Open",closeText:"Close",checkedText:"-",unCheckedText:"-",notContentText:"No Song",panelTitle:"Playlist",defaultPlayMode:"order",mode:"full",once:!0,autoPlay:!1,toggleMode:!0,showMiniModeCover:!0,showMiniProcessBar:!1,drag:!0,seeked:!0,controllerTitle:t.a.createElement(p.a,null),showProgressLoadBar:!0,showPlay:!0,showReload:!0,showDownload:!1,showPlayMode:!0,showThemeSwitch:!0,showLyric:!1,extendsContent:[],defaultVolume:100,playModeShowTime:600,loadAudioErrorPlayNext:!0,autoHiddenCover:!0,onAudioDownload:function(e){console.log("audio download",e)},onAudioPlay:function(e){console.log("audio playing",e)},onAudioPause:function(e){console.log("audio pause",e)},onAudioSeeked:function(e){console.log("audio seeked",e)},onAudioVolumeChange:function(e){console.log("audio volume change",e)},onAudioEnded:function(e){console.log("audio ended",e)},onAudioAbort:function(e){console.log("audio abort",e)},onAudioProgress:function(e){},onAudioReload:function(e){console.log("audio reload:",e)},onAudioLoadError:function(e){console.error("audio load err",e)},onThemeChange:function(e){console.log("theme change:",e)},onAudioListsChange:function(e,o,n){console.log("[currentPlayId] audio lists change:",e),console.log("[audioLists] audio lists change:",o),console.log("[audioInfo] audio lists change:",n)},onAudioPlayTrackChange:function(e,o,n){console.log("audio play track change:",e,o,n)},onPlayModeChange:function(e){console.log("play mode change:",e)},onModeChange:function(e){console.log("mode change:",e)},onAudioListsPanelChange:function(e){console.log("audio lists panel visible:",e)},onAudioListsDragEnd:function(e,o){console.log("audio lists drag end:",e,o)},onAudioLyricChange:function(e,o){console.log("audio lyric change:",e,o)},getContainer:function(){return document.body},getAudioInstance:function(e){console.log("audio instance",e)}},I=function(e){function o(){var e,n;Object(u.a)(this,o);for(var a=arguments.length,t=new Array(a),r=0;r<a;r++)t[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(g.a)(o)).call.apply(e,[this].concat(t)))).state={params:D,ITEMS:[],loading:!1},n.prevSearch="<#NONE#>",n.onAddAudio=function(e){var o=B({},n.state.params,{audioLists:[].concat(Object(s.a)(n.state.params.audioLists),[e])});n.setState({params:o})},n.onShowGlassBg=function(){n.onChangeKey("glassBg")},n.onDrag=function(){n.onChangeKey("drag")},n.onToggleMode=function(){n.onChangeKey("toggleMode")},n.onSeeked=function(){n.onChangeKey("seeked")},n.onChangeKey=function(e){var o=B({},n.state.params,Object(c.a)({},e,!n.state.params[e]));"light"!==e&&"dark"!==e||(o.theme=e),"full"!==e&&"mini"!==e||(o.mode=e),n.setState({params:o})},n.showMiniProcessBar=function(){n.onChangeKey("showMiniProcessBar")},n.showMiniModeCover=function(){n.onChangeKey("showMiniModeCover")},n}return Object(m.a)(o,e),Object(d.a)(o,[{key:"handleSearch",value:function(e){e.preventDefault(),this.setState({loading:!0}),this.makeSearch(e.target.value,0,[],10,0),this.prevSearch=e.target.value}},{key:"changeOptions",value:function(e){for(var o=0;o<e.length;o++)this.onAddAudio(e[o])}},{key:"makeSearch",value:function(e,o,n,a,t){var r=this;this.prevSearch=e;var l={method:"post",url:"https://gray-server.herokuapp.com/youtube",data:{search:e,items:a,more:o,prev:n}};j()(l).then((function(e){console.log(e.data);var o=e.data,n=[],a=[];for(var t in r.state.ITEMS){var l={name:t.name,singer:t.author,cover:t.imglnk,musicSrc:t.amrl};a.push(l)}for(var s=0,c=Object.entries(o.data);s<c.length;s++){var u=c[s],d=Object(i.a)(u,2),h=d[0],g=d[1],m={name:g.title,singer:g.author,cover:g.thumb.replace("default","mqdefault"),musicSrc:g.best_audio.url};a.push(m);var f={yturl:h,name:g.title,author:g.author,amrl:g.best_audio.url,imglnk:g.thumb.replace("default","mqdefault")};n.push(f)}r.changeOptions(a),r.setState({loading:!1})})).catch((function(e){console.log(e),r.setState({loading:!1}),alert("Error communicating with server")}))}},{key:"loadMore",value:function(e){if(e.preventDefault(),"<#NONE#>"!==this.prevSearch){for(var o=[],n=0;n<this.state.ITEMS.length;n++)o.push(this.state.ITEMS[n].yturl);this.makeSearch(this.prevSearch,1,o,5,0)}}},{key:"render",value:function(){var e=this,o=this.state.params;return console.log("params: ",o),t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"classes.root"},t.a.createElement(b.a,{position:"static",style:{background:"#1C1C1C"}},t.a.createElement(w.a,null,t.a.createElement(C.a,{className:"classes.title",variant:"h6",noWrap:!0},"GrayBot - Web"),t.a.createElement("div",{style:{marginLeft:"auto",marginRight:0,float:"right"}},t.a.createElement(S.a,{placeholder:"Search\u2026",onKeyDown:function(o){13===o.keyCode?e.handleSearch(o):console.log(0)},classes:{root:{color:"#FFFFFF"},input:{padding:7,width:"100%"}},inputProps:{style:{fontFamily:"Arial",color:"white","aria-label":"search"}}},t.a.createElement(O.a,{style:{height:"100%",pointerEvents:"none",marginTop:2}})))))),t.a.createElement("div",{className:"classesAB.root"},t.a.createElement(k.a,{variant:"extended",onClick:function(o){console.log("MORE CLICKED"),e.loadMore(o)}},t.a.createElement(P.a,{className:"classesAB.extendedIcon"}),"Load More"),t.a.createElement(L.a,{loading:this.state.loading,bgColor:"#f1f1f1",spinnerColor:"#9ee5f8",textColor:"#676767"})),t.a.createElement(v.a,o))}}]),o}(t.a.Component);function N(){return t.a.createElement("div",{style:{alignItems:"center"}},t.a.createElement(I,null))}var K=function(){return t.a.createElement("div",{className:"App"},t.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(t.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[121,1,2]]]);
//# sourceMappingURL=main.16bc3b2e.chunk.js.map