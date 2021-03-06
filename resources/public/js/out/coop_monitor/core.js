// Compiled by ClojureScript 0.0-3211 {}
goog.provide('coop_monitor.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent_forms.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('reagent.core');
if(typeof coop_monitor.core.app_state !== 'undefined'){
} else {
coop_monitor.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"egg-data","egg-data",-1203105688),cljs.core.PersistentVector.EMPTY], null));
}
cljs.core.swap_BANG_.call(null,coop_monitor.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),"Today",new cljs.core.Keyword(null,"time","time",1385887882),"4:30 AM",new cljs.core.Keyword(null,"event","event",301435442),"Door opened",new cljs.core.Keyword(null,"info","info",-317069002),"2 retries"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),"Today",new cljs.core.Keyword(null,"time","time",1385887882),"8:30 PM",new cljs.core.Keyword(null,"event","event",301435442),"Door closed",new cljs.core.Keyword(null,"info","info",-317069002),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),"Yesterday",new cljs.core.Keyword(null,"time","time",1385887882),"8:24 PM",new cljs.core.Keyword(null,"event","event",301435442),"Door closed",new cljs.core.Keyword(null,"info","info",-317069002),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),"Yesterday",new cljs.core.Keyword(null,"time","time",1385887882),"4:36 AM",new cljs.core.Keyword(null,"event","event",301435442),"Door opened",new cljs.core.Keyword(null,"info","info",-317069002),"1 retry"], null)], null));
cljs.core.swap_BANG_.call(null,coop_monitor.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"egg-data","egg-data",-1203105688),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),"Today",new cljs.core.Keyword(null,"chicken","chicken",1192778878),"Black chicken",new cljs.core.Keyword(null,"eggs","eggs",1167935743),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),"Today",new cljs.core.Keyword(null,"chicken","chicken",1192778878),"Gold chicken",new cljs.core.Keyword(null,"eggs","eggs",1167935743),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),"Yesterday",new cljs.core.Keyword(null,"chicken","chicken",1192778878),"Java chicken",new cljs.core.Keyword(null,"eggs","eggs",1167935743),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),"Yesterday",new cljs.core.Keyword(null,"chicken","chicken",1192778878),"New chicken",new cljs.core.Keyword(null,"eggs","eggs",1167935743),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),"04/30/2015",new cljs.core.Keyword(null,"chicken","chicken",1192778878),"Black chicken",new cljs.core.Keyword(null,"eggs","eggs",1167935743),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),"04/30/2015",new cljs.core.Keyword(null,"chicken","chicken",1192778878),"Gold chicken",new cljs.core.Keyword(null,"eggs","eggs",1167935743),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),"04/30/2015",new cljs.core.Keyword(null,"chicken","chicken",1192778878),"Java chicken",new cljs.core.Keyword(null,"eggs","eggs",1167935743),(1)], null)], null));
coop_monitor.core.navbar = (function coop_monitor$core$navbar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-inverse.navbar-fixed-top","div.navbar.navbar-inverse.navbar-fixed-top",-279800444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"coop-monitor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-collapse.collapse","div.navbar-collapse.collapse",-1723910318),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"home","home",-74557309),reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return secretary.core.dispatch_BANG_.call(null,"#/");
})], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"about","about",1423892543),reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return secretary.core.dispatch_BANG_.call(null,"#/about");
})], null),"About"], null)], null)], null)], null)], null)], null);
});
coop_monitor.core.about_page = (function coop_monitor$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is the harrowing tale of the coop monitor.\n        It came about in the fall of 2014, when I moved to a new house.\n        It is epic in every sense of the word."], null);
});
coop_monitor.core.events_monitor = (function coop_monitor$core$events_monitor(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.events-monitor","div.events-monitor",-680441778),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Events"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Time"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Event"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Info"], null)], null),(function (){var iter__26440__auto__ = (function coop_monitor$core$events_monitor_$_iter__38279(s__38280){
return (new cljs.core.LazySeq(null,(function (){
var s__38280__$1 = s__38280;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38280__$1);
if(temp__4126__auto__){
var s__38280__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38280__$2)){
var c__26438__auto__ = cljs.core.chunk_first.call(null,s__38280__$2);
var size__26439__auto__ = cljs.core.count.call(null,c__26438__auto__);
var b__38282 = cljs.core.chunk_buffer.call(null,size__26439__auto__);
if((function (){var i__38281 = (0);
while(true){
if((i__38281 < size__26439__auto__)){
var map__38285 = cljs.core._nth.call(null,c__26438__auto__,i__38281);
var map__38285__$1 = ((cljs.core.seq_QMARK_.call(null,map__38285))?cljs.core.apply.call(null,cljs.core.hash_map,map__38285):map__38285);
var info = cljs.core.get.call(null,map__38285__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var event = cljs.core.get.call(null,map__38285__$1,new cljs.core.Keyword(null,"event","event",301435442));
var time = cljs.core.get.call(null,map__38285__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var date = cljs.core.get.call(null,map__38285__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
cljs.core.chunk_append.call(null,b__38282,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),info], null)], null));

var G__38287 = (i__38281 + (1));
i__38281 = G__38287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38282),coop_monitor$core$events_monitor_$_iter__38279.call(null,cljs.core.chunk_rest.call(null,s__38280__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38282),null);
}
} else {
var map__38286 = cljs.core.first.call(null,s__38280__$2);
var map__38286__$1 = ((cljs.core.seq_QMARK_.call(null,map__38286))?cljs.core.apply.call(null,cljs.core.hash_map,map__38286):map__38286);
var info = cljs.core.get.call(null,map__38286__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var event = cljs.core.get.call(null,map__38286__$1,new cljs.core.Keyword(null,"event","event",301435442));
var time = cljs.core.get.call(null,map__38286__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var date = cljs.core.get.call(null,map__38286__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),info], null)], null),coop_monitor$core$events_monitor_$_iter__38279.call(null,cljs.core.rest.call(null,s__38280__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26440__auto__.call(null,cljs.core.take.call(null,(5),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,coop_monitor.core.app_state))));
})()], null)], null);
});
coop_monitor.core.egg_summary = (function coop_monitor$core$egg_summary(chickens,egg_data){
var chicken_egg_data = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"chicken","chicken",1192778878),egg_data);
var chicken_to_counts = cljs.core.reduce.call(null,((function (chicken_egg_data){
return (function (ctc,p__38294){
var vec__38295 = p__38294;
var c = cljs.core.nth.call(null,vec__38295,(0),null);
var eds = cljs.core.nth.call(null,vec__38295,(1),null);
return cljs.core.assoc.call(null,ctc,c,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"eggs","eggs",1167935743),eds)));
});})(chicken_egg_data))
,cljs.core.PersistentArrayMap.EMPTY,chicken_egg_data);
cljs.core.println.call(null,"XXX",chicken_to_counts);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"AVG"], null),(function (){var iter__26440__auto__ = ((function (chicken_egg_data,chicken_to_counts){
return (function coop_monitor$core$egg_summary_$_iter__38296(s__38297){
return (new cljs.core.LazySeq(null,((function (chicken_egg_data,chicken_to_counts){
return (function (){
var s__38297__$1 = s__38297;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38297__$1);
if(temp__4126__auto__){
var s__38297__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38297__$2)){
var c__26438__auto__ = cljs.core.chunk_first.call(null,s__38297__$2);
var size__26439__auto__ = cljs.core.count.call(null,c__26438__auto__);
var b__38299 = cljs.core.chunk_buffer.call(null,size__26439__auto__);
if((function (){var i__38298 = (0);
while(true){
if((i__38298 < size__26439__auto__)){
var c = cljs.core._nth.call(null,c__26438__auto__,i__38298);
cljs.core.chunk_append.call(null,b__38299,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),chicken_to_counts.call(null,c)], null));

var G__38300 = (i__38298 + (1));
i__38298 = G__38300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38299),coop_monitor$core$egg_summary_$_iter__38296.call(null,cljs.core.chunk_rest.call(null,s__38297__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38299),null);
}
} else {
var c = cljs.core.first.call(null,s__38297__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),chicken_to_counts.call(null,c)], null),coop_monitor$core$egg_summary_$_iter__38296.call(null,cljs.core.rest.call(null,s__38297__$2)));
}
} else {
return null;
}
break;
}
});})(chicken_egg_data,chicken_to_counts))
,null,null));
});})(chicken_egg_data,chicken_to_counts))
;
return iter__26440__auto__.call(null,chickens);
})()], null);
});
coop_monitor.core.egg_monitor = (function coop_monitor$core$egg_monitor(){
var egg_data = new cljs.core.Keyword(null,"egg-data","egg-data",-1203105688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,coop_monitor.core.app_state));
var chickens = cljs.core.sort.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"chicken","chicken",1192778878),egg_data)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.egg-monitor","div.egg-monitor",-1897842734),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Eggs"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Date"], null),(function (){var iter__26440__auto__ = ((function (egg_data,chickens){
return (function coop_monitor$core$egg_monitor_$_iter__38329(s__38330){
return (new cljs.core.LazySeq(null,((function (egg_data,chickens){
return (function (){
var s__38330__$1 = s__38330;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38330__$1);
if(temp__4126__auto__){
var s__38330__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38330__$2)){
var c__26438__auto__ = cljs.core.chunk_first.call(null,s__38330__$2);
var size__26439__auto__ = cljs.core.count.call(null,c__26438__auto__);
var b__38332 = cljs.core.chunk_buffer.call(null,size__26439__auto__);
if((function (){var i__38331 = (0);
while(true){
if((i__38331 < size__26439__auto__)){
var c = cljs.core._nth.call(null,c__26438__auto__,i__38331);
cljs.core.chunk_append.call(null,b__38332,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),c], null));

var G__38357 = (i__38331 + (1));
i__38331 = G__38357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38332),coop_monitor$core$egg_monitor_$_iter__38329.call(null,cljs.core.chunk_rest.call(null,s__38330__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38332),null);
}
} else {
var c = cljs.core.first.call(null,s__38330__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),c], null),coop_monitor$core$egg_monitor_$_iter__38329.call(null,cljs.core.rest.call(null,s__38330__$2)));
}
} else {
return null;
}
break;
}
});})(egg_data,chickens))
,null,null));
});})(egg_data,chickens))
;
return iter__26440__auto__.call(null,chickens);
})()], null),(function (){var iter__26440__auto__ = ((function (egg_data,chickens){
return (function coop_monitor$core$egg_monitor_$_iter__38333(s__38334){
return (new cljs.core.LazySeq(null,((function (egg_data,chickens){
return (function (){
var s__38334__$1 = s__38334;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38334__$1);
if(temp__4126__auto__){
var s__38334__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38334__$2)){
var c__26438__auto__ = cljs.core.chunk_first.call(null,s__38334__$2);
var size__26439__auto__ = cljs.core.count.call(null,c__26438__auto__);
var b__38336 = cljs.core.chunk_buffer.call(null,size__26439__auto__);
if((function (){var i__38335 = (0);
while(true){
if((i__38335 < size__26439__auto__)){
var vec__38347 = cljs.core._nth.call(null,c__26438__auto__,i__38335);
var date = cljs.core.nth.call(null,vec__38347,(0),null);
var date_data = cljs.core.nth.call(null,vec__38347,(1),null);
cljs.core.chunk_append.call(null,b__38336,(function (){var date_data__$1 = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"chicken","chicken",1192778878),date_data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),date], null),(function (){var iter__26440__auto__ = ((function (i__38335,date_data__$1,vec__38347,date,date_data,c__26438__auto__,size__26439__auto__,b__38336,s__38334__$2,temp__4126__auto__,egg_data,chickens){
return (function coop_monitor$core$egg_monitor_$_iter__38333_$_iter__38348(s__38349){
return (new cljs.core.LazySeq(null,((function (i__38335,date_data__$1,vec__38347,date,date_data,c__26438__auto__,size__26439__auto__,b__38336,s__38334__$2,temp__4126__auto__,egg_data,chickens){
return (function (){
var s__38349__$1 = s__38349;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__38349__$1);
if(temp__4126__auto____$1){
var s__38349__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38349__$2)){
var c__26438__auto____$1 = cljs.core.chunk_first.call(null,s__38349__$2);
var size__26439__auto____$1 = cljs.core.count.call(null,c__26438__auto____$1);
var b__38351 = cljs.core.chunk_buffer.call(null,size__26439__auto____$1);
if((function (){var i__38350 = (0);
while(true){
if((i__38350 < size__26439__auto____$1)){
var chicken = cljs.core._nth.call(null,c__26438__auto____$1,i__38350);
cljs.core.chunk_append.call(null,b__38351,(function (){var egg_count = (function (){var or__25686__auto__ = new cljs.core.Keyword(null,"eggs","eggs",1167935743).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.get.call(null,date_data__$1,chicken)));
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return (0);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),egg_count], null);
})());

var G__38358 = (i__38350 + (1));
i__38350 = G__38358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38351),coop_monitor$core$egg_monitor_$_iter__38333_$_iter__38348.call(null,cljs.core.chunk_rest.call(null,s__38349__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38351),null);
}
} else {
var chicken = cljs.core.first.call(null,s__38349__$2);
return cljs.core.cons.call(null,(function (){var egg_count = (function (){var or__25686__auto__ = new cljs.core.Keyword(null,"eggs","eggs",1167935743).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.get.call(null,date_data__$1,chicken)));
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return (0);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),egg_count], null);
})(),coop_monitor$core$egg_monitor_$_iter__38333_$_iter__38348.call(null,cljs.core.rest.call(null,s__38349__$2)));
}
} else {
return null;
}
break;
}
});})(i__38335,date_data__$1,vec__38347,date,date_data,c__26438__auto__,size__26439__auto__,b__38336,s__38334__$2,temp__4126__auto__,egg_data,chickens))
,null,null));
});})(i__38335,date_data__$1,vec__38347,date,date_data,c__26438__auto__,size__26439__auto__,b__38336,s__38334__$2,temp__4126__auto__,egg_data,chickens))
;
return iter__26440__auto__.call(null,chickens);
})()], null);
})());

var G__38359 = (i__38335 + (1));
i__38335 = G__38359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38336),coop_monitor$core$egg_monitor_$_iter__38333.call(null,cljs.core.chunk_rest.call(null,s__38334__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38336),null);
}
} else {
var vec__38352 = cljs.core.first.call(null,s__38334__$2);
var date = cljs.core.nth.call(null,vec__38352,(0),null);
var date_data = cljs.core.nth.call(null,vec__38352,(1),null);
return cljs.core.cons.call(null,(function (){var date_data__$1 = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"chicken","chicken",1192778878),date_data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),date], null),(function (){var iter__26440__auto__ = ((function (date_data__$1,vec__38352,date,date_data,s__38334__$2,temp__4126__auto__,egg_data,chickens){
return (function coop_monitor$core$egg_monitor_$_iter__38333_$_iter__38353(s__38354){
return (new cljs.core.LazySeq(null,((function (date_data__$1,vec__38352,date,date_data,s__38334__$2,temp__4126__auto__,egg_data,chickens){
return (function (){
var s__38354__$1 = s__38354;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__38354__$1);
if(temp__4126__auto____$1){
var s__38354__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38354__$2)){
var c__26438__auto__ = cljs.core.chunk_first.call(null,s__38354__$2);
var size__26439__auto__ = cljs.core.count.call(null,c__26438__auto__);
var b__38356 = cljs.core.chunk_buffer.call(null,size__26439__auto__);
if((function (){var i__38355 = (0);
while(true){
if((i__38355 < size__26439__auto__)){
var chicken = cljs.core._nth.call(null,c__26438__auto__,i__38355);
cljs.core.chunk_append.call(null,b__38356,(function (){var egg_count = (function (){var or__25686__auto__ = new cljs.core.Keyword(null,"eggs","eggs",1167935743).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.get.call(null,date_data__$1,chicken)));
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return (0);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),egg_count], null);
})());

var G__38360 = (i__38355 + (1));
i__38355 = G__38360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38356),coop_monitor$core$egg_monitor_$_iter__38333_$_iter__38353.call(null,cljs.core.chunk_rest.call(null,s__38354__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38356),null);
}
} else {
var chicken = cljs.core.first.call(null,s__38354__$2);
return cljs.core.cons.call(null,(function (){var egg_count = (function (){var or__25686__auto__ = new cljs.core.Keyword(null,"eggs","eggs",1167935743).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.get.call(null,date_data__$1,chicken)));
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return (0);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),egg_count], null);
})(),coop_monitor$core$egg_monitor_$_iter__38333_$_iter__38353.call(null,cljs.core.rest.call(null,s__38354__$2)));
}
} else {
return null;
}
break;
}
});})(date_data__$1,vec__38352,date,date_data,s__38334__$2,temp__4126__auto__,egg_data,chickens))
,null,null));
});})(date_data__$1,vec__38352,date,date_data,s__38334__$2,temp__4126__auto__,egg_data,chickens))
;
return iter__26440__auto__.call(null,chickens);
})()], null);
})(),coop_monitor$core$egg_monitor_$_iter__38333.call(null,cljs.core.rest.call(null,s__38334__$2)));
}
} else {
return null;
}
break;
}
});})(egg_data,chickens))
,null,null));
});})(egg_data,chickens))
;
return iter__26440__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),egg_data));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [coop_monitor.core.egg_summary,chickens,egg_data], null)], null)], null);
});
coop_monitor.core.home_page = (function coop_monitor$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coop_monitor.core.events_monitor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coop_monitor.core.egg_monitor], null)], null);
});
coop_monitor.core.pages = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return coop_monitor.core.home_page;},new cljs.core.Symbol("coop-monitor.core","home-page","coop-monitor.core/home-page",629529884,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"coop-monitor.core","coop-monitor.core",-427251291,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/csmall/code/coop-monitor/src-cljs/coop_monitor/core.cljs",16,7,81,81,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(coop_monitor.core.home_page)?coop_monitor.core.home_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Var(function(){return coop_monitor.core.about_page;},new cljs.core.Symbol("coop-monitor.core","about-page","coop-monitor.core/about-page",1501016348,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"coop-monitor.core","coop-monitor.core",-427251291,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/home/csmall/code/coop-monitor/src-cljs/coop_monitor/core.cljs",17,7,39,39,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(coop_monitor.core.about_page)?coop_monitor.core.about_page.cljs$lang$test:null)]))], null);
coop_monitor.core.page = (function coop_monitor$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coop_monitor.core.pages.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null);
});
var action__27818__auto___38363 = (function (params__27819__auto__){
if(cljs.core.map_QMARK_.call(null,params__27819__auto__)){
var map__38361 = params__27819__auto__;
var map__38361__$1 = ((cljs.core.seq_QMARK_.call(null,map__38361))?cljs.core.apply.call(null,cljs.core.hash_map,map__38361):map__38361);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27819__auto__)){
var vec__38362 = params__27819__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__27818__auto___38363);

var action__27818__auto___38366 = (function (params__27819__auto__){
if(cljs.core.map_QMARK_.call(null,params__27819__auto__)){
var map__38364 = params__27819__auto__;
var map__38364__$1 = ((cljs.core.seq_QMARK_.call(null,map__38364))?cljs.core.apply.call(null,cljs.core.hash_map,map__38364):map__38364);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27819__auto__)){
var vec__38365 = params__27819__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__27818__auto___38366);

coop_monitor.core.mount_components = (function coop_monitor$core$mount_components(){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coop_monitor.core.navbar], null),document.getElementById("navbar"));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coop_monitor.core.page], null),document.getElementById("app"));
});
coop_monitor.core.init_BANG_ = (function coop_monitor$core$init_BANG_(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));

return coop_monitor.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map