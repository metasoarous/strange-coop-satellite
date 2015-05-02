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
coop_monitor.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY], null));
}
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.events-monitor","div.events-monitor",-680441778),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Events"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__26440__auto__ = (function coop_monitor$core$events_monitor_$_iter__32882(s__32883){
return (new cljs.core.LazySeq(null,(function (){
var s__32883__$1 = s__32883;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32883__$1);
if(temp__4126__auto__){
var s__32883__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32883__$2)){
var c__26438__auto__ = cljs.core.chunk_first.call(null,s__32883__$2);
var size__26439__auto__ = cljs.core.count.call(null,c__26438__auto__);
var b__32885 = cljs.core.chunk_buffer.call(null,size__26439__auto__);
if((function (){var i__32884 = (0);
while(true){
if((i__32884 < size__26439__auto__)){
var event = cljs.core._nth.call(null,c__26438__auto__,i__32884);
cljs.core.chunk_append.call(null,b__32885,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(event))].join('')], null));

var G__32886 = (i__32884 + (1));
i__32884 = G__32886;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32885),coop_monitor$core$events_monitor_$_iter__32882.call(null,cljs.core.chunk_rest.call(null,s__32883__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32885),null);
}
} else {
var event = cljs.core.first.call(null,s__32883__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(event))].join('')], null),coop_monitor$core$events_monitor_$_iter__32882.call(null,cljs.core.rest.call(null,s__32883__$2)));
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
coop_monitor.core.home_page = (function coop_monitor$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),coop_monitor.core.events_monitor.call(null)], null);
});
coop_monitor.core.pages = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return coop_monitor.core.home_page;},new cljs.core.Symbol("coop-monitor.core","home-page","coop-monitor.core/home-page",629529884,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"coop-monitor.core","coop-monitor.core",-427251291,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/csmall/code/coop-monitor/src-cljs/coop_monitor/core.cljs",16,7,39,39,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(coop_monitor.core.home_page)?coop_monitor.core.home_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Var(function(){return coop_monitor.core.about_page;},new cljs.core.Symbol("coop-monitor.core","about-page","coop-monitor.core/about-page",1501016348,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"coop-monitor.core","coop-monitor.core",-427251291,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/home/csmall/code/coop-monitor/src-cljs/coop_monitor/core.cljs",17,7,26,26,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(coop_monitor.core.about_page)?coop_monitor.core.about_page.cljs$lang$test:null)]))], null);
coop_monitor.core.page = (function coop_monitor$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coop_monitor.core.pages.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null);
});
var action__27818__auto___32889 = (function (params__27819__auto__){
if(cljs.core.map_QMARK_.call(null,params__27819__auto__)){
var map__32887 = params__27819__auto__;
var map__32887__$1 = ((cljs.core.seq_QMARK_.call(null,map__32887))?cljs.core.apply.call(null,cljs.core.hash_map,map__32887):map__32887);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27819__auto__)){
var vec__32888 = params__27819__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__27818__auto___32889);

var action__27818__auto___32892 = (function (params__27819__auto__){
if(cljs.core.map_QMARK_.call(null,params__27819__auto__)){
var map__32890 = params__27819__auto__;
var map__32890__$1 = ((cljs.core.seq_QMARK_.call(null,map__32890))?cljs.core.apply.call(null,cljs.core.hash_map,map__32890):map__32890);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27819__auto__)){
var vec__32891 = params__27819__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__27818__auto___32892);

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