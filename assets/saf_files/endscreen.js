(function(g){var window=this;'use strict';var EWa=function(a,b){a.La("onAutonavCoundownStarted",b)},m3=function(a,b,c){g.N(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Se(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.sD&&(b.lengthText?(e=b.lengthText||null,f=b.Pq||null):b.lengthSeconds&&(e=g.hJ(b.lengthSeconds),f=g.hJ(b.lengthSeconds,!0)));var k=!!d;d=k&&"RD"===g.oD(d).type;var l=b instanceof g.sD?b.isLivePlayback:null,m=b instanceof g.sD?b.isUpcoming:null;c={title:b.title,author:b.author,author_and_views:b.shortViewCount?b.author+" \u2022 "+b.shortViewCount:b.author,aria_label:b.ariaLabel||g.MF("Watch $TITLE",{TITLE:b.title}),duration:e,
timestamp:f,url:b.ll(),is_live:l,is_upcoming:m,is_list:k,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:b.shortViewCount?b.shortViewCount+" \u2022 "+b.publishedTimeText:b.publishedTimeText,autoplayAlternativeHeader:b.In};b instanceof g.rD&&(c.playlist_length=b.playlistLength);a.update(c)},n3=function(a){var b=a.V(),c=b.j;
g.V.call(this,{G:"a",L:"ytp-autonav-suggestion-card",W:{href:"{{url}}",target:c?b.K:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},U:[{G:"div",Fa:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],W:{style:"{{background}}"},U:[{G:"div",W:{"aria-label":"{{timestamp}}"},Fa:["ytp-autonav-timestamp"],oa:"{{duration}}"},{G:"div",Fa:["ytp-autonav-live-stamp"],oa:"Live"},{G:"div",
Fa:["ytp-autonav-upcoming-stamp"],oa:"Upcoming"},{G:"div",L:"ytp-autonav-list-overlay",U:[{G:"div",L:"ytp-autonav-mix-text",oa:"Mix"},{G:"div",L:"ytp-autonav-mix-icon"}]}]},{G:"div",Fa:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],oa:"{{title}}"},{G:"div",Fa:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],oa:"{{author}}"},{G:"div",Fa:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],oa:"{{views_and_publish_time}}"}]});this.I=a;this.suggestion=
null;this.j=c;this.Oa("click",this.onClick);this.Oa("keypress",this.onKeyPress)},p3=function(a,b){b=void 0===b?!1:b;
g.V.call(this,{G:"div",L:"ytp-autonav-endscreen-countdown-container"});var c=this;this.J=b;this.D=void 0;this.u=0;b=a.V();var d=b.j;this.I=a;this.suggestion=null;this.onVideoDataChange("newdata",this.I.getVideoData());this.T(a,"videodatachange",this.onVideoDataChange);this.j=new g.V({G:"div",L:"ytp-autonav-endscreen-upnext-container",W:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},U:[{G:"div",
L:"ytp-autonav-endscreen-upnext-header"},{G:"div",L:"ytp-autonav-endscreen-upnext-alternative-header",oa:"{{autoplayAlternativeHeader}}"},{G:"a",L:"ytp-autonav-endscreen-link-container",W:{href:"{{url}}",target:d?b.K:""},U:[{G:"div",L:"ytp-autonav-endscreen-upnext-thumbnail",W:{style:"{{background}}"},U:[{G:"div",W:{"aria-label":"{{timestamp}}"},Fa:["ytp-autonav-timestamp"],oa:"{{duration}}"},{G:"div",Fa:["ytp-autonav-live-stamp"],oa:"Live"},{G:"div",Fa:["ytp-autonav-upcoming-stamp"],oa:"Upcoming"}]},
{G:"div",L:"ytp-autonav-endscreen-video-info",U:[{G:"div",L:"ytp-autonav-endscreen-premium-badge"},{G:"div",L:"ytp-autonav-endscreen-upnext-title",oa:"{{title}}"},{G:"div",L:"ytp-autonav-endscreen-upnext-author",oa:"{{author}}"},{G:"div",L:"ytp-autonav-view-and-date",oa:"{{views_and_publish_time}}"},{G:"div",L:"ytp-autonav-author-and-view",oa:"{{author_and_views}}"}]}]}]});g.H(this,this.j);this.j.Ba(this.element);d||this.T(this.j.Ca("ytp-autonav-endscreen-link-container"),"click",this.iK);this.I.Ab(this.element,
this,115127);this.I.Ab(this.j.Ca("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.V({G:"div",L:"ytp-autonav-overlay"});g.H(this,this.overlay);this.overlay.Ba(this.element);this.B=new g.V({G:"div",L:"ytp-autonav-endscreen-button-container"});g.H(this,this.B);this.B.Ba(this.element);this.cancelButton=new g.V({G:"button",Fa:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],W:{"aria-label":"Cancel autoplay"},oa:"Cancel"});g.H(this,this.cancelButton);
this.cancelButton.Ba(this.B.element);this.cancelButton.Oa("click",this.US,this);this.I.Ab(this.cancelButton.element,this,115129);this.playButton=new g.V({G:"a",Fa:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],W:{href:"{{url}}",role:"button","aria-label":"Play next video"},oa:"Play Now"});g.H(this,this.playButton);this.playButton.Ba(this.B.element);this.playButton.Oa("click",this.iK,this);this.I.Ab(this.playButton.element,this,115130);this.C=new g.L(function(){o3(c)},
500);
g.H(this,this.C);this.hK();this.T(a,"autonavvisibility",this.hK)},s3=function(a){var b=a.I.Mj(!0,a.I.isFullscreen());
g.N(a.element,"ytp-autonav-endscreen-small-mode",a.Ef(b));g.N(a.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.pC);g.N(a.I.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.I.Be());g.N(a.I.getRootNode(),"countdown-running",a.Th());g.N(a.element,"ytp-player-content",a.I.Be());g.Lm(a.overlay.element,{width:b.width+"px"});if(!a.Th()){a.I.Be()?q3(a,Math.round(r3(a)/1E3)):q3(a);b=!!a.suggestion&&!!a.suggestion.In;var c=a.I.Be()||!b;g.N(a.element,"ytp-autonav-endscreen-upnext-alternative-header-only",
!c&&b);g.N(a.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.iI(a.B,a.I.Be())}},o3=function(a){var b=r3(a),c=Math,d=c.min;
var e=a.u?Date.now()-a.u:0;c=d.call(c,e,b);q3(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Th()?a.select(!0):a.Th()&&a.C.start()},r3=function(a){var b=a.I.oq();
return 0<=b?b:g.cB(a.I.V().experiments,"autoplay_time")||1E4},q3=function(a,b){b=void 0===b?-1:b;
a=a.j.Ca("ytp-autonav-endscreen-upnext-header");g.fi(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.ei("Up next in $SECONDS".slice(0,d)));var e=g.di("span");g.Bp(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.ki(e,b);a.appendChild(e);a.appendChild(g.ei("Up next in $SECONDS".slice(d+c.length)));return}}g.ki(a,"Up next")},t3=function(a,b){g.V.call(this,{G:"div",
Fa:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},u3=function(a){g.V.call(this,{G:"div",
Fa:["ytp-upnext","ytp-player-content"],W:{"aria-label":"{{aria_label}}"},U:[{G:"div",L:"ytp-cued-thumbnail-overlay-image",W:{style:"{{background}}"}},{G:"span",L:"ytp-upnext-top",U:[{G:"span",L:"ytp-upnext-header",oa:"Up Next"},{G:"span",L:"ytp-upnext-title",oa:"{{title}}"},{G:"span",L:"ytp-upnext-author",oa:"{{author}}"}]},{G:"a",L:"ytp-upnext-autoplay-icon",W:{role:"button",href:"{{url}}","aria-label":"Play next video"},U:[{G:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
U:[{G:"circle",L:"ytp-svg-autoplay-circle",W:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{G:"circle",L:"ytp-svg-autoplay-ring",W:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{G:"path",L:"ytp-svg-fill",W:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{G:"span",L:"ytp-upnext-bottom",U:[{G:"span",L:"ytp-upnext-cancel"},{G:"span",L:"ytp-upnext-paused",
oa:"Autoplay is paused"}]}]});this.api=a;this.cancelButton=null;this.D=this.Ca("ytp-svg-autoplay-ring");this.B=this.notification=this.j=this.suggestion=null;this.C=new g.L(this.Wz,5E3,this);this.u=0;var b=this.Ca("ytp-upnext-cancel");this.cancelButton=new g.V({G:"button",Fa:["ytp-upnext-cancel-button","ytp-button"],W:{tabindex:"0","aria-label":"Cancel autoplay"},oa:"Cancel"});g.H(this,this.cancelButton);this.cancelButton.Oa("click",this.VS,this);this.cancelButton.Ba(b);this.cancelButton&&this.api.Ab(this.cancelButton.element,
this,115129);g.H(this,this.C);this.api.Ab(this.element,this,18788);b=this.Ca("ytp-upnext-autoplay-icon");this.T(b,"click",this.WS);this.api.Ab(b,this,115130);this.jK();this.T(a,"autonavvisibility",this.jK);this.T(a,"mdxnowautoplaying",this.BX);this.T(a,"mdxautoplaycanceled",this.CX);g.N(this.element,"ytp-upnext-mobile",this.api.V().isMobile)},FWa=function(a,b){return b?b:0<=a.api.oq()?a.api.oq():g.cB(a.api.V().experiments,"autoplay_time")||1E4},v3=function(a,b){b=FWa(a,b);
var c=Math,d=c.min;var e=(0,g.R)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.D.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Th()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Th()&&a.j.start()},w3=function(a){t3.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.V({G:"div",L:"ytp-suggestion-panel",U:[{G:"div",Fa:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],oa:"More videos"}]});this.K=new g.V({G:"div",L:"ytp-suggestions-container"});this.videos=[];this.B=null;this.D=this.J=!1;this.u=new p3(this.player);g.H(this,this.u);this.u.Ba(this.element);a.getVideoData().Xb?this.j=this.u:(this.j=new u3(a),g.ZK(this.player,this.j.element,4),g.H(this,this.j));this.overlay=new g.V({G:"div",
L:"ytp-autonav-overlay-cancelled-state"});g.H(this,this.overlay);this.overlay.Ba(this.element);this.C=new g.iA(this);g.H(this,this.C);g.H(this,this.table);this.table.Ba(this.element);this.table.show();g.H(this,this.K);this.K.Ba(this.table.element);this.hide()},x3=function(a){var b=a.Be();
b!==a.D&&(a.D=b,a.player.ea("autonavvisibility"),a.D?(a.u!==a.j&&a.u.hide(),a.table.hide()):(a.u!==a.j&&a.u.show(),a.table.show()))},y3=function(a){t3.call(this,a,"subscribecard-endscreen");
this.j=new g.V({G:"div",L:"ytp-subscribe-card",U:[{G:"img",L:"ytp-author-image",W:{src:"{{profilePicture}}"}},{G:"div",L:"ytp-subscribe-card-right",U:[{G:"div",L:"ytp-author-name",oa:"{{author}}"},{G:"div",L:"html5-subscribe-button-container"}]}]});g.H(this,this.j);this.j.Ba(this.element);var b=a.getVideoData();this.subscribeButton=new g.qM("Subscribe",null,"Unsubscribe",null,!0,!1,b.sj,b.subscribed,"trailer-endscreen",null,null,a);g.H(this,this.subscribeButton);this.subscribeButton.Ba(this.j.Ca("html5-subscribe-button-container"));
this.T(a,"videodatachange",this.Ja);this.Ja();this.hide()},z3=function(a){var b=a.V(),c=g.mA||g.oC?{style:"will-change: opacity"}:void 0,d=b.j,e=["ytp-videowall-still"];
b.isMobile&&e.push("ytp-videowall-show-text");g.V.call(this,{G:"a",Fa:e,W:{href:"{{url}}",target:d?b.K:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},U:[{G:"div",L:"ytp-videowall-still-image",W:{style:"{{background}}"}},{G:"span",L:"ytp-videowall-still-info",U:[{G:"span",L:"ytp-videowall-still-info-bg",U:[{G:"span",L:"ytp-videowall-still-info-content",W:c,U:[{G:"span",L:"ytp-videowall-still-info-title",oa:"{{title}}"},{G:"span",
L:"ytp-videowall-still-info-author",oa:"{{author_and_views}}"},{G:"span",L:"ytp-videowall-still-info-live",oa:"Live"},{G:"span",L:"ytp-videowall-still-info-duration",oa:"{{duration}}"}]}]}]},{G:"span",Fa:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],U:[{G:"span",L:"ytp-videowall-still-listlabel-icon"},"Playlist",{G:"span",L:"ytp-videowall-still-listlabel-length",U:[" (",{G:"span",oa:"{{playlist_length}}"},")"]}]},{G:"span",Fa:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
U:[{G:"span",L:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{G:"span",L:"ytp-videowall-still-listlabel-length",oa:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.j=new g.iA(this);g.H(this,this.j);this.Oa("click",this.onClick);this.Oa("keypress",this.onKeyPress);this.j.T(a,"videodatachange",this.onVideoDataChange);a.eh(this.element,this);this.onVideoDataChange()},A3=function(a){t3.call(this,a,"videowall-endscreen");
var b=this;this.I=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.D=this.K=!1;this.S=null;this.u=new g.iA(this);g.H(this,this.u);this.J=new g.L(function(){g.M(b.element,"ytp-show-tiles")},0);
g.H(this,this.J);var c=new g.V({G:"button",Fa:["ytp-button","ytp-endscreen-previous"],W:{"aria-label":"Previous"},U:[g.nI()]});g.H(this,c);c.Ba(this.element);c.Oa("click",this.aT,this);this.table=new g.fI({G:"div",L:"ytp-endscreen-content"});g.H(this,this.table);this.table.Ba(this.element);c=new g.V({G:"button",Fa:["ytp-button","ytp-endscreen-next"],W:{"aria-label":"Next"},U:[g.oI()]});g.H(this,c);c.Ba(this.element);c.Oa("click",this.ZS,this);a.getVideoData().Xb?this.j=new p3(a,!0):this.j=new u3(a);
g.H(this,this.j);g.ZK(this.player,this.j.element,4);this.hide()},B3=function(a){return g.$K(a.player)&&a.hw()&&!a.C},C3=function(a){var b=a.Be();
b!==a.K&&(a.K=b,a.player.ea("autonavvisibility"))},D3=function(a){g.lL.call(this,a);
var b=this;this.endScreen=null;this.j=this.u=this.B=!1;this.listeners=new g.iA(this);g.H(this,this.listeners);this.env=a.V();GWa(a)?(this.B=!0,HWa(this),this.j?this.endScreen=new w3(a):this.endScreen=new A3(this.player)):this.env.Rd?this.endScreen=new y3(this.player):this.endScreen=new t3(this.player);g.H(this,this.endScreen);g.ZK(this.player,this.endScreen.element,4);IWa(this);this.listeners.T(a,"videodatachange",this.onVideoDataChange,this);this.listeners.T(a,g.Kw("endscreen"),function(c){b.onCueRangeEnter(c)});
this.listeners.T(a,g.Lw("endscreen"),function(c){b.onCueRangeExit(c)})},HWa=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Uh&&a.u===b.Xb)return!1;a.j=b.Uh;a.u=b.Xb;return!0},GWa=function(a){a=a.V();
return!a.C&&a.Hb&&!a.Rd},IWa=function(a){a.player.kf("endscreen");
var b=a.player.getVideoData();b=new g.Iw(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.Iw(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.Sd([b,c])};
g.SK.prototype.oq=g.ca(4,function(){return this.app.oq()});
g.PU.prototype.oq=g.ca(3,function(){return this.getVideoData().qP});g.v(n3,g.V);n3.prototype.select=function(){(this.I.vk(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.Fw||void 0)||this.I.N("web_player_endscreen_double_log_fix_killswitch"))&&this.I.wb(this.element)};
n3.prototype.onClick=function(a){g.KL(a,this.I,this.j,this.suggestion.sessionData||void 0)&&this.select()};
n3.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.vu(a)||(this.select(),g.uu(a))}};g.v(p3,g.V);g.h=p3.prototype;g.h.Cz=function(a){this.suggestion!==a&&(this.suggestion=a,m3(this.j,a),this.playButton.Ka("url",this.suggestion.ll()),s3(this))};
g.h.Th=function(){return 0<this.u};
g.h.Ku=function(){this.Th()||(this.u=Date.now(),o3(this),EWa(this.I,r3(this)),g.N(this.I.getRootNode(),"countdown-running",this.Th()))};
g.h.er=function(){this.jn();o3(this);var a=this.j.Ca("ytp-autonav-endscreen-upnext-header");a&&g.ki(a,"Up next")};
g.h.jn=function(){this.Th()&&(this.C.stop(),this.u=0)};
g.h.select=function(a){this.I.nextVideo(!1,void 0===a?!1:a);this.jn()};
g.h.iK=function(a){g.KL(a,this.I)&&(a.currentTarget===this.playButton.element?this.I.wb(this.playButton.element):a.currentTarget===this.j.Ca("ytp-autonav-endscreen-link-container")&&(a=this.j.Ca("ytp-autonav-endscreen-link-container"),this.I.Za(a,!0),this.I.wb(a)),this.select())};
g.h.US=function(){this.I.wb(this.cancelButton.element);g.UK(this.I,!0);this.D&&this.I.La("innertubeCommand",this.D)};
g.h.onVideoDataChange=function(a,b){var c;this.D=null==(c=b.YQ)?void 0:c.command};
g.h.hK=function(){var a=this.I.Be();this.J&&this.tb!==a&&g.iI(this,a);s3(this);this.I.Za(this.element,a);this.I.Za(this.cancelButton.element,a);this.I.Za(this.j.Ca("ytp-autonav-endscreen-link-container"),a);this.I.Za(this.playButton.element,a)};
g.h.Ef=function(a){return 400>a.width||459>a.height};g.v(t3,g.V);g.h=t3.prototype;g.h.create=function(){this.created=!0};
g.h.destroy=function(){this.created=!1};
g.h.hw=function(){return!1};
g.h.Be=function(){return!1};
g.h.pN=function(){return!1};g.v(u3,g.V);g.h=u3.prototype;g.h.Wz=function(){this.notification&&(this.C.stop(),this.wc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.h.Cz=function(a){this.suggestion=a;m3(this,a,"hqdefault.jpg")};
g.h.jK=function(){g.iI(this,this.api.Be());this.api.Za(this.element,this.api.Be());this.api.Za(this.Ca("ytp-upnext-autoplay-icon"),this.api.Be());this.cancelButton&&this.api.Za(this.cancelButton.element,this.api.Be())};
g.h.KX=function(){window.focus();this.Wz()};
g.h.Ku=function(a){var b=this;this.Th()||(g.Ju("a11y-announce","Up Next "+this.suggestion.title),this.u=(0,g.R)(),this.j=new g.L(function(){v3(b,a)},25),v3(this,a),EWa(this.api,FWa(this,a)));
g.Ep(this.element,"ytp-upnext-autoplay-paused")};
g.h.hide=function(){g.V.prototype.hide.call(this)};
g.h.Th=function(){return!!this.j};
g.h.er=function(){this.jn();this.u=(0,g.R)();v3(this);g.M(this.element,"ytp-upnext-autoplay-paused")};
g.h.jn=function(){this.Th()&&(this.j.dispose(),this.j=null)};
g.h.select=function(a){a=void 0===a?!1:a;if(this.api.V().N("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.Wz(),this.notification=new Notification("Up Next",{body:this.suggestion.title,icon:this.suggestion.Se()}),this.B=this.T(this.notification,"click",this.KX),this.C.start())}this.jn();this.api.nextVideo(!1,a)};
g.h.WS=function(a){!g.ji(this.cancelButton.element,g.pu(a))&&g.KL(a,this.api)&&(this.api.Be()&&this.api.wb(this.Ca("ytp-upnext-autoplay-icon")),this.select())};
g.h.VS=function(){this.api.Be()&&this.cancelButton&&this.api.wb(this.cancelButton.element);g.UK(this.api,!0)};
g.h.BX=function(a){this.api.getPresentingPlayerType();this.show();this.Ku(a)};
g.h.CX=function(){this.api.getPresentingPlayerType();this.jn();this.hide()};
g.h.qa=function(){this.jn();this.Wz();g.V.prototype.qa.call(this)};g.v(w3,t3);g.h=w3.prototype;g.h.create=function(){t3.prototype.create.call(this);this.C.T(this.player,"appresize",this.Kv);this.C.T(this.player,"onVideoAreaChange",this.Kv);this.C.T(this.player,"videodatachange",this.onVideoDataChange);this.C.T(this.player,"autonavchange",this.kK);this.C.T(this.player,"autonavcancel",this.XS);this.onVideoDataChange()};
g.h.show=function(){t3.prototype.show.call(this);(this.J||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.UK(this.player,!1);g.$K(this.player)&&this.hw()&&!this.B?(x3(this),2===this.videoData.autonavState?this.player.V().N("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Ku():3===this.videoData.autonavState&&this.j.er()):(g.UK(this.player,!0),x3(this));this.Kv()};
g.h.hide=function(){t3.prototype.hide.call(this);this.j.er();x3(this)};
g.h.Kv=function(){var a=this.player.Mj(!0,this.player.isFullscreen());x3(this);s3(this.u);g.N(this.element,"ytp-autonav-cancelled-small-mode",this.Ef(a));g.N(this.element,"ytp-autonav-cancelled-tiny-mode",this.ZA(a));g.N(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Lm(this.overlay.element,{width:a.width+"px"});if(!this.D){a=g.r(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.r(b.value);b=c.next().value;c=c.next().value;g.N(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.h.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){this.j.Cz(a[0]);this.j!==this.u&&this.u.Cz(a[0]);for(var b=0;b<JWa.length;++b){var c=JWa[b];if(a&&a[c]){this.videos[b]=new n3(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,m3(d,c));g.H(this,this.videos[b]);this.videos[b].Ba(this.K.element)}}}this.Kv()}};
g.h.kK=function(a){1===a?(this.J=!1,this.B=this.videoData.clientPlaybackNonce,this.j.jn(),this.tb&&this.Kv()):(this.J=!0,this.Be()&&(2===a?this.j.Ku():3===a&&this.j.er()))};
g.h.XS=function(a){a?this.kK(1):(this.B=null,this.J=!1)};
g.h.hw=function(){return 1!==this.videoData.autonavState};
g.h.Ef=function(a){return(910>a.width||459>a.height)&&!this.ZA(a)&&!(400>=a.width||360>=a.height)};
g.h.ZA=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.h.Be=function(){return this.tb&&g.$K(this.player)&&this.hw()&&!this.B};
var JWa=[1,3,2,4];g.v(y3,t3);y3.prototype.Ja=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.sj;var b=this.subscribeButton;a.subscribed?b.u():b.B()};g.v(z3,g.V);z3.prototype.select=function(){(this.api.vk(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.Fw||void 0)||this.api.N("web_player_endscreen_double_log_fix_killswitch"))&&this.api.wb(this.element)};
z3.prototype.onClick=function(a){g.KL(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
z3.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.vu(a)||(this.select(),g.uu(a))}};
z3.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.V();this.u=a.D?!1:b.j};g.v(A3,t3);g.h=A3.prototype;g.h.create=function(){t3.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Ul();this.u.T(this.player,"appresize",this.Ul);this.u.T(this.player,"onVideoAreaChange",this.Ul);this.u.T(this.player,"videodatachange",this.onVideoDataChange);this.u.T(this.player,"autonavchange",this.GD);this.u.T(this.player,"autonavcancel",this.YS);a=this.videoData.autonavState;a!==this.S&&this.GD(a);this.u.T(this.element,"transitionend",this.ZY)};
g.h.destroy=function(){g.gv(this.u);g.qf(this.stills);this.stills=[];t3.prototype.destroy.call(this);g.Ep(this.element,"ytp-show-tiles");this.J.stop();this.S=this.videoData.autonavState};
g.h.hw=function(){return 1!==this.videoData.autonavState};
g.h.show=function(){t3.prototype.show.call(this);g.Ep(this.element,"ytp-show-tiles");this.player.V().isMobile?g.xp(this.J):this.J.start();(this.D||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.UK(this.player,!1);B3(this)?(C3(this),2===this.videoData.autonavState?this.player.V().N("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Ku():3===this.videoData.autonavState&&this.j.er()):(g.UK(this.player,!0),C3(this))};
g.h.hide=function(){t3.prototype.hide.call(this);this.j.er();C3(this)};
g.h.ZY=function(a){g.pu(a)===this.element&&this.Ul()};
g.h.Ul=function(){if(this.videoData&&this.videoData.suggestions&&this.videoData.suggestions.length){g.M(this.element,"ytp-endscreen-paginate");var a=this.I.Mj(!0,this.I.isFullscreen()),b=g.PK(this.I);b&&(b=b.cf()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.videoData.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var p=b/2,q=e/2,t=b<=f-2&&n>=q*m,w=e<=k-2&&n>=p*m;if((p+
1)/q*d/c>c/(p/(q+1)*d)&&w)n-=p*m,e+=2;else if(t)n-=q*m,b+=2;else if(w)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Vm(a,m,n);g.Lm(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.j.Cz(this.videoData.suggestions[0]);this.j instanceof p3&&s3(this.j);g.N(this.element,"ytp-endscreen-takeover",B3(this));C3(this);m+=4;n+=4;for(f=
c=0;f<b;f++)for(k=0;k<e;k++)if(q=c,p=0,d&&f>=b-2&&k>=e-2?p=1:0===k%2&&0===f%2&&(2>k&&2>f?0===k&&0===f&&(p=2):p=2),q=g.xh(q+this.B,l),0!==p){t=this.stills[c];t||(t=new z3(this.player),this.stills[c]=t,a.appendChild(t.element));w=Math.floor(n*k/e);var x=Math.floor(m*f/b),y=Math.floor(n*(k+p)/e)-w-4,z=Math.floor(m*(f+p)/b)-x-4;g.Rm(t.element,x,w);g.Vm(t.element,z,y);g.Lm(t.element,"transitionDelay",(k+f)/20+"s");g.N(t.element,"ytp-videowall-still-mini",1===p);g.N(t.element,"ytp-videowall-still-large",
2<p);p=t;q=this.videoData.suggestions[q];p.suggestion!==q&&(p.suggestion=q,t=p.api.V(),w=g.Cp(p.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",m3(p,q,w),g.qC(t)&&(w=q.ll(),x={},t.ra&&g.mK(x,t.loaderUrl),w=g.vj(w,g.lK(x,"emb_rel_end")),p.Ka("url",w)),(q=(q=q.sessionData)&&q.itct)&&p.api.jk(p.element,q));c++}g.N(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.hi(e.element),g.pf(e);this.stills.length=c}};
g.h.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.Ul())};
g.h.ZS=function(){this.B+=this.stills.length;this.Ul()};
g.h.aT=function(){this.B-=this.stills.length;this.Ul()};
g.h.pN=function(){return this.j.Th()};
g.h.GD=function(a){1===a?(this.D=!1,this.C=this.videoData.clientPlaybackNonce,this.j.jn(),this.tb&&this.Ul()):(this.D=!0,this.tb&&B3(this)&&(2===a?this.j.Ku():3===a&&this.j.er()))};
g.h.YS=function(a){if(a){for(a=0;a<this.stills.length;a++)this.I.Za(this.stills[a].element,!0);this.GD(1)}else this.C=null,this.D=!1;this.Ul()};
g.h.Be=function(){return this.tb&&B3(this)};g.v(D3,g.lL);g.h=D3.prototype;g.h.Dr=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!GWa(this.player)||b;var c=a.ye||g.BC(a.B),d=this.player.Lw();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.h.Be=function(){return this.endScreen.Be()};
g.h.zV=function(){return this.Be()?this.endScreen.pN():!1};
g.h.qa=function(){this.player.kf("endscreen");g.lL.prototype.qa.call(this)};
g.h.load=function(){var a=this.player.getVideoData();var b=a.rP;if(b&&b.videoId){var c=this.player.sb().Od.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].videoId&&!a.LK?a=!1:(this.player.vk(b.videoId,void 0,void 0,!0,!0,b),c&&c.hB("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.lL.prototype.load.call(this),this.endScreen.show())};
g.h.unload=function(){g.lL.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.h.onCueRangeEnter=function(a){this.Dr()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.h.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.h.onVideoDataChange=function(){IWa(this);this.B&&HWa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new w3(this.player):this.endScreen=new A3(this.player),g.H(this,this.endScreen),g.ZK(this.player,this.endScreen.element,4))};g.kL("endscreen",D3);})(_yt_player);
