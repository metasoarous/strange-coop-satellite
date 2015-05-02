// Compiled by ClojureScript 0.0-3211 {}
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('reagent_forms.datepicker');
goog.require('reagent.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.walk');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
var segments = clojure.string.split.call(null,cljs.core.subs.call(null,[cljs.core.str(id)].join(''),(1)),/\./);
return cljs.core.map.call(null,cljs.core.keyword,segments);
}));
reagent_forms.core.set_doc_value = (function reagent_forms$core$set_doc_value(doc,id,value,events){
var path = reagent_forms.core.id__GT_path.call(null,id);
return cljs.core.reduce.call(null,((function (path){
return (function (p1__32968_SHARP_,p2__32967_SHARP_){
var or__25686__auto__ = p2__32967_SHARP_.call(null,path,value,p1__32968_SHARP_);
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return p1__32968_SHARP_;
}
});})(path))
,cljs.core.assoc_in.call(null,doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.set_doc_value,id,value,events);
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
return wrapper.call(null,get.call(null,id));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
return save_BANG_.call(null,id,wrapper.call(null,value));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"get","get",1683182755),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4124__auto__)){
var in_fn = temp__4124__auto__;
return reagent_forms.core.wrap_get_fn.call(null,new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts);
}
})(),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4124__auto__)){
var out_fn = temp__4124__auto__;
return reagent_forms.core.wrap_save_fn.call(null,new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
});
if(typeof reagent_forms.core.format_type !== 'undefined'){
} else {
reagent_forms.core.format_type = (function (){var method_table__26581__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26582__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26583__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26585__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__26581__auto__,prefer_table__26582__auto__,method_cache__26583__auto__,cached_hierarchy__26584__auto__,hierarchy__26585__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null)))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
});})(method_table__26581__auto__,prefer_table__26582__auto__,method_cache__26583__auto__,cached_hierarchy__26584__auto__,hierarchy__26585__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26585__auto__,method_table__26581__auto__,prefer_table__26582__auto__,method_cache__26583__auto__,cached_hierarchy__26584__auto__));
})();
}
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__25674__auto__ = cljs.core.not.call(null,isNaN(parseFloat(value)));
if(and__25674__auto__){
return fmt;
} else {
return and__25674__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
if(cljs.core.truth_(reagent_forms.core.valid_number_ending_QMARK_.call(null,n))){
return n;
} else {
return parsed;
}
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
if(typeof reagent_forms.core.bind !== 'undefined'){
} else {
reagent_forms.core.bind = (function (){var method_table__26581__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26582__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26583__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26585__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__26581__auto__,prefer_table__26582__auto__,method_cache__26583__auto__,cached_hierarchy__26584__auto__,hierarchy__26585__auto__){
return (function (p__32969,_){
var map__32970 = p__32969;
var map__32970__$1 = ((cljs.core.seq_QMARK_.call(null,map__32970))?cljs.core.apply.call(null,cljs.core.hash_map,map__32970):map__32970);
var field = cljs.core.get.call(null,map__32970__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__26581__auto__,prefer_table__26582__auto__,method_cache__26583__auto__,cached_hierarchy__26584__auto__,hierarchy__26585__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26585__auto__,method_table__26581__auto__,prefer_table__26582__auto__,method_cache__26583__auto__,cached_hierarchy__26584__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__32972,p__32973){
var map__32974 = p__32972;
var map__32974__$1 = ((cljs.core.seq_QMARK_.call(null,map__32974))?cljs.core.apply.call(null,cljs.core.hash_map,map__32974):map__32974);
var fmt = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var map__32975 = p__32973;
var map__32975__$1 = ((cljs.core.seq_QMARK_.call(null,map__32975))?cljs.core.apply.call(null,cljs.core.hash_map,map__32975):map__32975);
var doc = cljs.core.get.call(null,map__32975__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__32975__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__32975__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__25686__auto__ = get.call(null,id);
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__32974,map__32974__$1,fmt,id,field,map__32975,map__32975__$1,doc,save_BANG_,get){
return (function (p1__32971_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__32971_SHARP_)));
});})(map__32974,map__32974__$1,fmt,id,field,map__32975,map__32975__$1,doc,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__32976,p__32977){
var map__32978 = p__32976;
var map__32978__$1 = ((cljs.core.seq_QMARK_.call(null,map__32978))?cljs.core.apply.call(null,cljs.core.hash_map,map__32978):map__32978);
var id = cljs.core.get.call(null,map__32978__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__32979 = p__32977;
var map__32979__$1 = ((cljs.core.seq_QMARK_.call(null,map__32979))?cljs.core.apply.call(null,cljs.core.hash_map,map__32979):map__32979);
var save_BANG_ = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),get.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__32978,map__32978__$1,id,map__32979,map__32979__$1,save_BANG_,get){
return (function (){
return save_BANG_.call(null,id,cljs.core.not.call(null,get.call(null,id)));
});})(map__32978,map__32978__$1,id,map__32979,map__32979__$1,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(){
var argseq__26726__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26726__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__32983,opts,p__32984){
var vec__32985 = p__32983;
var type = cljs.core.nth.call(null,vec__32985,(0),null);
var attrs = cljs.core.nth.call(null,vec__32985,(1),null);
var body = cljs.core.nthnext.call(null,vec__32985,(2));
var vec__32986 = p__32984;
var default_attrs = cljs.core.nth.call(null,vec__32986,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq32980){
var G__32981 = cljs.core.first.call(null,seq32980);
var seq32980__$1 = cljs.core.next.call(null,seq32980);
var G__32982 = cljs.core.first.call(null,seq32980__$1);
var seq32980__$2 = cljs.core.next.call(null,seq32980__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__32981,G__32982,seq32980__$2);
});
if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__26581__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26582__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26583__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26585__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__26581__auto__,prefer_table__26582__auto__,method_cache__26583__auto__,cached_hierarchy__26584__auto__,hierarchy__26585__auto__){
return (function (p__32987,_){
var vec__32988 = p__32987;
var ___$1 = cljs.core.nth.call(null,vec__32988,(0),null);
var map__32989 = cljs.core.nth.call(null,vec__32988,(1),null);
var map__32989__$1 = ((cljs.core.seq_QMARK_.call(null,map__32989))?cljs.core.apply.call(null,cljs.core.hash_map,map__32989):map__32989);
var field = cljs.core.get.call(null,map__32989__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
});})(method_table__26581__auto__,prefer_table__26582__auto__,method_cache__26583__auto__,cached_hierarchy__26584__auto__,hierarchy__26585__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26585__auto__,method_table__26581__auto__,prefer_table__26582__auto__,method_cache__26583__auto__,cached_hierarchy__26584__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__32990,p__32991){
var vec__32992 = p__32990;
var _ = cljs.core.nth.call(null,vec__32992,(0),null);
var attrs = cljs.core.nth.call(null,vec__32992,(1),null);
var component = vec__32992;
var map__32993 = p__32991;
var map__32993__$1 = ((cljs.core.seq_QMARK_.call(null,map__32993))?cljs.core.apply.call(null,cljs.core.hash_map,map__32993):map__32993);
var doc = cljs.core.get.call(null,map__32993__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__32992,_,attrs,component,map__32993,map__32993__$1,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__27651__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__27651__auto__.call(null,cljs.core.deref.call(null,doc)))){
return component;
} else {
return null;
}
} else {
return component;
}
});
;})(vec__32992,_,attrs,component,map__32993,map__32993__$1,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__32994,p__32995){
var vec__32996 = p__32994;
var _ = cljs.core.nth.call(null,vec__32996,(0),null);
var map__32997 = cljs.core.nth.call(null,vec__32996,(1),null);
var map__32997__$1 = ((cljs.core.seq_QMARK_.call(null,map__32997))?cljs.core.apply.call(null,cljs.core.hash_map,map__32997):map__32997);
var attrs = map__32997__$1;
var field = cljs.core.get.call(null,map__32997__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__32996;
var map__32998 = p__32995;
var map__32998__$1 = ((cljs.core.seq_QMARK_.call(null,map__32998))?cljs.core.apply.call(null,cljs.core.hash_map,map__32998):map__32998);
var opts = map__32998__$1;
var doc = cljs.core.get.call(null,map__32998__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__32996,_,map__32997,map__32997__$1,attrs,field,component,map__32998,map__32998__$1,opts,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__27651__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__27651__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__32996,_,map__32997,map__32997__$1,attrs,field,component,map__32998,map__32998__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__33000,p__33001){
var vec__33002 = p__33000;
var type = cljs.core.nth.call(null,vec__33002,(0),null);
var map__33003 = cljs.core.nth.call(null,vec__33002,(1),null);
var map__33003__$1 = ((cljs.core.seq_QMARK_.call(null,map__33003))?cljs.core.apply.call(null,cljs.core.hash_map,map__33003):map__33003);
var attrs = map__33003__$1;
var fmt = cljs.core.get.call(null,map__33003__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__33003__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__33004 = p__33001;
var map__33004__$1 = ((cljs.core.seq_QMARK_.call(null,map__33004))?cljs.core.apply.call(null,cljs.core.hash_map,map__33004):map__33004);
var save_BANG_ = cljs.core.get.call(null,map__33004__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__33004__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__33004__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var display_value = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),false,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id)], null));
return ((function (display_value,vec__33002,type,map__33003,map__33003__$1,attrs,fmt,id,map__33004,map__33004__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__27651__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__27651__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var doc_value = (function (){var or__25686__auto__ = get.call(null,id);
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return "";
}
})();
var map__33005 = cljs.core.deref.call(null,display_value);
var map__33005__$1 = ((cljs.core.seq_QMARK_.call(null,map__33005))?cljs.core.apply.call(null,cljs.core.hash_map,map__33005):map__33005);
var value = cljs.core.get.call(null,map__33005__$1,new cljs.core.Keyword(null,"value","value",305978217));
var changed_self_QMARK_ = cljs.core.get.call(null,map__33005__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));

return reagent_forms.core.format_value.call(null,fmt,value__$1);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__27651__auto__,temp__4124__auto__,display_value,vec__33002,type,map__33003,map__33003__$1,attrs,fmt,id,map__33004,map__33004__$1,save_BANG_,get,doc){
return (function (p1__32999_SHARP_){
var temp__4124__auto____$1 = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.value_of.call(null,p1__32999_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),true,new cljs.core.Keyword(null,"value","value",305978217),value], null));

return save_BANG_.call(null,id,parseFloat(value));
} else {
return save_BANG_.call(null,id,null);
}
});})(visible__27651__auto__,temp__4124__auto__,display_value,vec__33002,type,map__33003,map__33003__$1,attrs,fmt,id,map__33004,map__33004__$1,save_BANG_,get,doc))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var doc_value = (function (){var or__25686__auto__ = get.call(null,id);
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return "";
}
})();
var map__33006 = cljs.core.deref.call(null,display_value);
var map__33006__$1 = ((cljs.core.seq_QMARK_.call(null,map__33006))?cljs.core.apply.call(null,cljs.core.hash_map,map__33006):map__33006);
var value = cljs.core.get.call(null,map__33006__$1,new cljs.core.Keyword(null,"value","value",305978217));
var changed_self_QMARK_ = cljs.core.get.call(null,map__33006__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));

return reagent_forms.core.format_value.call(null,fmt,value__$1);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,display_value,vec__33002,type,map__33003,map__33003__$1,attrs,fmt,id,map__33004,map__33004__$1,save_BANG_,get,doc){
return (function (p1__32999_SHARP_){
var temp__4124__auto____$1 = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.value_of.call(null,p1__32999_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),true,new cljs.core.Keyword(null,"value","value",305978217),value], null));

return save_BANG_.call(null,id,parseFloat(value));
} else {
return save_BANG_.call(null,id,null);
}
});})(temp__4124__auto__,display_value,vec__33002,type,map__33003,map__33003__$1,attrs,fmt,id,map__33004,map__33004__$1,save_BANG_,get,doc))
], null),attrs)], null);
}
});
;})(display_value,vec__33002,type,map__33003,map__33003__$1,attrs,fmt,id,map__33004,map__33004__$1,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__33008,p__33009){
var vec__33010 = p__33008;
var _ = cljs.core.nth.call(null,vec__33010,(0),null);
var map__33011 = cljs.core.nth.call(null,vec__33010,(1),null);
var map__33011__$1 = ((cljs.core.seq_QMARK_.call(null,map__33011))?cljs.core.apply.call(null,cljs.core.hash_map,map__33011):map__33011);
var attrs = map__33011__$1;
var auto_close_QMARK_ = cljs.core.get.call(null,map__33011__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var inline = cljs.core.get.call(null,map__33011__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var date_format = cljs.core.get.call(null,map__33011__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var id = cljs.core.get.call(null,map__33011__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__33012 = p__33009;
var map__33012__$1 = ((cljs.core.seq_QMARK_.call(null,map__33012))?cljs.core.apply.call(null,cljs.core.hash_map,map__33012):map__33012);
var save_BANG_ = cljs.core.get.call(null,map__33012__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__33012__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__33012__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var fmt = reagent_forms.datepicker.parse_format.call(null,date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__27651__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__27651__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__27651__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__27651__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__27651__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__27651__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (visible__27651__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc){
return (function (){
return get.call(null,id);
});})(visible__27651__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc))
,((function (visible__27651__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc){
return (function (p1__33007_SHARP_){
return save_BANG_.call(null,id,p1__33007_SHARP_);
});})(visible__27651__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc))
,inline], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc){
return (function (){
return get.call(null,id);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc))
,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc){
return (function (p1__33007_SHARP_){
return save_BANG_.call(null,id,p1__33007_SHARP_);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc))
,inline], null)], null);
}
});
;})(fmt,today,expanded_QMARK_,vec__33010,_,map__33011,map__33011__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__33012,map__33012__$1,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__33013,p__33014){
var vec__33015 = p__33013;
var _ = cljs.core.nth.call(null,vec__33015,(0),null);
var map__33016 = cljs.core.nth.call(null,vec__33015,(1),null);
var map__33016__$1 = ((cljs.core.seq_QMARK_.call(null,map__33016))?cljs.core.apply.call(null,cljs.core.hash_map,map__33016):map__33016);
var attrs = map__33016__$1;
var field = cljs.core.get.call(null,map__33016__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__33016__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var component = vec__33015;
var map__33017 = p__33014;
var map__33017__$1 = ((cljs.core.seq_QMARK_.call(null,map__33017))?cljs.core.apply.call(null,cljs.core.hash_map,map__33017):map__33017);
var opts = map__33017__$1;
var get = cljs.core.get.call(null,map__33017__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__33017__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__33015,_,map__33016,map__33016__$1,attrs,field,id,component,map__33017,map__33017__$1,opts,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__27651__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__27651__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__33015,_,map__33016,map__33016__$1,attrs,field,id,component,map__33017,map__33017__$1,opts,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__33018,p__33019){
var vec__33020 = p__33018;
var type = cljs.core.nth.call(null,vec__33020,(0),null);
var map__33021 = cljs.core.nth.call(null,vec__33020,(1),null);
var map__33021__$1 = ((cljs.core.seq_QMARK_.call(null,map__33021))?cljs.core.apply.call(null,cljs.core.hash_map,map__33021):map__33021);
var attrs = map__33021__$1;
var placeholder = cljs.core.get.call(null,map__33021__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var postamble = cljs.core.get.call(null,map__33021__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var preamble = cljs.core.get.call(null,map__33021__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var id = cljs.core.get.call(null,map__33021__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__33022 = p__33019;
var map__33022__$1 = ((cljs.core.seq_QMARK_.call(null,map__33022))?cljs.core.apply.call(null,cljs.core.hash_map,map__33022):map__33022);
var get = cljs.core.get.call(null,map__33022__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__33022__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__33020,type,map__33021,map__33021__$1,attrs,placeholder,postamble,preamble,id,map__33022,map__33022__$1,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__27651__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__27651__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__33020,type,map__33021,map__33021__$1,attrs,placeholder,postamble,preamble,id,map__33022,map__33022__$1,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__33023,p__33024){
var vec__33025 = p__33023;
var type = cljs.core.nth.call(null,vec__33025,(0),null);
var map__33026 = cljs.core.nth.call(null,vec__33025,(1),null);
var map__33026__$1 = ((cljs.core.seq_QMARK_.call(null,map__33026))?cljs.core.apply.call(null,cljs.core.hash_map,map__33026):map__33026);
var attrs = map__33026__$1;
var touch_event = cljs.core.get.call(null,map__33026__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var event = cljs.core.get.call(null,map__33026__$1,new cljs.core.Keyword(null,"event","event",301435442));
var id = cljs.core.get.call(null,map__33026__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var body = cljs.core.nthnext.call(null,vec__33025,(2));
var map__33027 = p__33024;
var map__33027__$1 = ((cljs.core.seq_QMARK_.call(null,map__33027))?cljs.core.apply.call(null,cljs.core.hash_map,map__33027):map__33027);
var opts = map__33027__$1;
var save_BANG_ = cljs.core.get.call(null,map__33027__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__33027__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__33027__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__33025,type,map__33026,map__33026__$1,attrs,touch_event,event,id,body,map__33027,map__33027__$1,opts,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__27651__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__27651__auto__.call(null,cljs.core.deref.call(null,doc)))){
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__25686__auto__ = touch_event;
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4124__auto____$1,visible__27651__auto__,temp__4124__auto__,vec__33025,type,map__33026,map__33026__$1,attrs,touch_event,event,id,body,map__33027,map__33027__$1,opts,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4124__auto____$1,visible__27651__auto__,temp__4124__auto__,vec__33025,type,map__33026,map__33026__$1,attrs,touch_event,event,id,body,map__33027,map__33027__$1,opts,save_BANG_,get,doc))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__25686__auto__ = touch_event;
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4124__auto____$1,temp__4124__auto__,vec__33025,type,map__33026,map__33026__$1,attrs,touch_event,event,id,body,map__33027,map__33027__$1,opts,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4124__auto____$1,temp__4124__auto__,vec__33025,type,map__33026,map__33026__$1,attrs,touch_event,event,id,body,map__33027,map__33027__$1,opts,save_BANG_,get,doc))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
}
});
;})(vec__33025,type,map__33026,map__33026__$1,attrs,touch_event,event,id,body,map__33027,map__33027__$1,opts,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__33028,p__33029){
var vec__33030 = p__33028;
var type = cljs.core.nth.call(null,vec__33030,(0),null);
var map__33031 = cljs.core.nth.call(null,vec__33030,(1),null);
var map__33031__$1 = ((cljs.core.seq_QMARK_.call(null,map__33031))?cljs.core.apply.call(null,cljs.core.hash_map,map__33031):map__33031);
var attrs = map__33031__$1;
var value = cljs.core.get.call(null,map__33031__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__33031__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var field = cljs.core.get.call(null,map__33031__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var body = cljs.core.nthnext.call(null,vec__33030,(2));
var map__33032 = p__33029;
var map__33032__$1 = ((cljs.core.seq_QMARK_.call(null,map__33032))?cljs.core.apply.call(null,cljs.core.hash_map,map__33032):map__33032);
var save_BANG_ = cljs.core.get.call(null,map__33032__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__33032__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__33032__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__33030,type,map__33031,map__33031__$1,attrs,value,name,field,body,map__33032,map__33032__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__27651__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__27651__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__27651__auto__,temp__4124__auto__,vec__33030,type,map__33031,map__33031__$1,attrs,value,name,field,body,map__33032,map__33032__$1,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,name,value);
});})(visible__27651__auto__,temp__4124__auto__,vec__33030,type,map__33031,map__33031__$1,attrs,value,name,field,body,map__33032,map__33032__$1,save_BANG_,get,doc))
], null),attrs)], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,vec__33030,type,map__33031,map__33031__$1,attrs,value,name,field,body,map__33032,map__33032__$1,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,name,value);
});})(temp__4124__auto__,vec__33030,type,map__33031,map__33031__$1,attrs,value,name,field,body,map__33032,map__33032__$1,save_BANG_,get,doc))
], null),attrs)], null),body);
}
});
;})(vec__33030,type,map__33031,map__33031__$1,attrs,value,name,field,body,map__33032,map__33032__$1,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__33036,p__33037){
var vec__33038 = p__33036;
var type = cljs.core.nth.call(null,vec__33038,(0),null);
var map__33039 = cljs.core.nth.call(null,vec__33038,(1),null);
var map__33039__$1 = ((cljs.core.seq_QMARK_.call(null,map__33039))?cljs.core.apply.call(null,cljs.core.hash_map,map__33039):map__33039);
var attrs = map__33039__$1;
var highlight_class = cljs.core.get.call(null,map__33039__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var item_class = cljs.core.get.call(null,map__33039__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var list_class = cljs.core.get.call(null,map__33039__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var input_class = cljs.core.get.call(null,map__33039__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var data_source = cljs.core.get.call(null,map__33039__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var id = cljs.core.get.call(null,map__33039__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__33040 = p__33037;
var map__33040__$1 = ((cljs.core.seq_QMARK_.call(null,map__33040))?cljs.core.apply.call(null,cljs.core.hash_map,map__33040):map__33040);
var save_BANG_ = cljs.core.get.call(null,map__33040__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__33040__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__33040__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
var selected_index = reagent.core.atom.call(null,(0));
var selections = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__27651__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__27651__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));
}
});})(visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (p1__33033_SHARP_){
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,reagent_forms.core.value_of.call(null,p1__33033_SHARP_).toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__33033_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(0));
});})(visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (p1__33034_SHARP_){
var G__33041 = p1__33034_SHARP_.which;
switch (G__33041) {
case (38):
p1__33034_SHARP_.preventDefault();

if(!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0)))){
return cljs.core.reset_BANG_.call(null,selected_index,(cljs.core.deref.call(null,selected_index) - (1)));
} else {
return null;
}

break;
case (40):
p1__33034_SHARP_.preventDefault();

if(!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1))))){
return cljs.core.reset_BANG_.call(null,selected_index,(cljs.core.deref.call(null,selected_index) + (1)));
} else {
return null;
}

break;
case (13):
save_BANG_.call(null,id,cljs.core.nth.call(null,cljs.core.deref.call(null,selections),cljs.core.deref.call(null,selected_index)));

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),(function (){var or__25686__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__25686__auto__){
return or__25686__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (p1__33035_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__33035_SHARP_.target.getAttribute("tabIndex")));
});})(visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
], null),result], null);
});})(visible__27651__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
,cljs.core.deref.call(null,selections)))], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));
}
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (p1__33033_SHARP_){
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,reagent_forms.core.value_of.call(null,p1__33033_SHARP_).toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__33033_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(0));
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (p1__33034_SHARP_){
var G__33042 = p1__33034_SHARP_.which;
switch (G__33042) {
case (38):
p1__33034_SHARP_.preventDefault();

if(!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0)))){
return cljs.core.reset_BANG_.call(null,selected_index,(cljs.core.deref.call(null,selected_index) - (1)));
} else {
return null;
}

break;
case (40):
p1__33034_SHARP_.preventDefault();

if(!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1))))){
return cljs.core.reset_BANG_.call(null,selected_index,(cljs.core.deref.call(null,selected_index) + (1)));
} else {
return null;
}

break;
case (13):
save_BANG_.call(null,id,cljs.core.nth.call(null,cljs.core.deref.call(null,selections),cljs.core.deref.call(null,selected_index)));

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),(function (){var or__25686__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__25686__auto__){
return or__25686__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (p1__33035_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__33035_SHARP_.target.getAttribute("tabIndex")));
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
], null),result], null);
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
,cljs.core.deref.call(null,selections)))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__33038,type,map__33039,map__33039__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__33040,map__33040__$1,save_BANG_,get,doc))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__33045,p__33046,selections,field,id){
var vec__33050 = p__33045;
var type = cljs.core.nth.call(null,vec__33050,(0),null);
var map__33051 = cljs.core.nth.call(null,vec__33050,(1),null);
var map__33051__$1 = ((cljs.core.seq_QMARK_.call(null,map__33051))?cljs.core.apply.call(null,cljs.core.hash_map,map__33051):map__33051);
var attrs = map__33051__$1;
var touch_event = cljs.core.get.call(null,map__33051__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var key = cljs.core.get.call(null,map__33051__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var body = cljs.core.nthnext.call(null,vec__33050,(2));
var map__33052 = p__33046;
var map__33052__$1 = ((cljs.core.seq_QMARK_.call(null,map__33052))?cljs.core.apply.call(null,cljs.core.hash_map,map__33052):map__33052);
var multi_select = cljs.core.get.call(null,map__33052__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var save_BANG_ = cljs.core.get.call(null,map__33052__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var handle_click_BANG_ = ((function (vec__33050,type,map__33051,map__33051__$1,attrs,touch_event,key,body,map__33052,map__33052__$1,multi_select,save_BANG_){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = cljs.core.get.call(null,cljs.core.deref.call(null,selections),key);
cljs.core.reset_BANG_.call(null,selections,new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));

return save_BANG_.call(null,id,(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?key:null));
}
});})(vec__33050,type,map__33051,map__33051__$1,attrs,touch_event,key,body,map__33052,map__33052__$1,multi_select,save_BANG_))
;
return ((function (vec__33050,type,map__33051,map__33051__$1,attrs,touch_event,key,body,map__33052,map__33052__$1,multi_select,save_BANG_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?"active":null),(function (){var or__25686__auto__ = touch_event;
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__33050,type,map__33051,map__33051__$1,attrs,touch_event,key,body,map__33052,map__33052__$1,multi_select,save_BANG_))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__33053){
var map__33058 = p__33053;
var map__33058__$1 = ((cljs.core.seq_QMARK_.call(null,map__33058))?cljs.core.apply.call(null,cljs.core.hash_map,map__33058):map__33058);
var multi_select = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var get = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__33058,map__33058__$1,multi_select,get){
return (function (m,p__33059){
var vec__33060 = p__33059;
var _ = cljs.core.nth.call(null,vec__33060,(0),null);
var map__33061 = cljs.core.nth.call(null,vec__33060,(1),null);
var map__33061__$1 = ((cljs.core.seq_QMARK_.call(null,map__33061))?cljs.core.apply.call(null,cljs.core.hash_map,map__33061):map__33061);
var key = cljs.core.get.call(null,map__33061__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__33058,map__33058__$1,multi_select,get))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first.call(null,selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__33064,p__33065){
var vec__33071 = p__33064;
var type = cljs.core.nth.call(null,vec__33071,(0),null);
var map__33072 = cljs.core.nth.call(null,vec__33071,(1),null);
var map__33072__$1 = ((cljs.core.seq_QMARK_.call(null,map__33072))?cljs.core.apply.call(null,cljs.core.hash_map,map__33072):map__33072);
var attrs = map__33072__$1;
var id = cljs.core.get.call(null,map__33072__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__33072__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var selection_items = cljs.core.nthnext.call(null,vec__33071,(2));
var map__33073 = p__33065;
var map__33073__$1 = ((cljs.core.seq_QMARK_.call(null,map__33073))?cljs.core.apply.call(null,cljs.core.hash_map,map__33073):map__33073);
var opts = map__33073__$1;
var get = cljs.core.get.call(null,map__33073__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__33071,type,map__33072,map__33072__$1,attrs,id,field,selection_items,map__33073,map__33073__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__33071,type,map__33072,map__33072__$1,attrs,id,field,selection_items,map__33073,map__33073__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__33071,type,map__33072,map__33072__$1,attrs,id,field,selection_items,map__33073,map__33073__$1,opts,get){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__33071,type,map__33072,map__33072__$1,attrs,id,field,selection_items,map__33073,map__33073__$1,opts,get){
return (function (p1__33062_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__33071,type,map__33072,map__33072__$1,attrs,id,field,selection_items,map__33073,map__33073__$1,opts,get){
return (function (p__33074){
var vec__33075 = p__33074;
var k = cljs.core.nth.call(null,vec__33075,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__33071,type,map__33072,map__33072__$1,attrs,id,field,selection_items,map__33073,map__33073__$1,opts,get))
,p1__33062_SHARP_));
});})(selection_items__$1,selections,selectors,vec__33071,type,map__33072,map__33072__$1,attrs,id,field,selection_items,map__33073,map__33073__$1,opts,get))
);
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,cljs.core.doall.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__33071,type,map__33072,map__33072__$1,attrs,id,field,selection_items,map__33073,map__33073__$1,opts,get){
return (function (p1__33063_SHARP_){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__33063_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var visible_QMARK_ = temp__4124__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__33071,type,map__33072,map__33072__$1,attrs,id,field,selection_items,map__33073,map__33073__$1,opts,get))
,selectors)))], null);
});
;})(selection_items__$1,selections,selectors,vec__33071,type,map__33072,map__33072__$1,attrs,id,field,selection_items,map__33073,map__33073__$1,opts,get))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__33076,p__33077){
var vec__33078 = p__33076;
var _ = cljs.core.nth.call(null,vec__33078,(0),null);
var attrs = cljs.core.nth.call(null,vec__33078,(1),null);
var field = vec__33078;
var map__33079 = p__33077;
var map__33079__$1 = ((cljs.core.seq_QMARK_.call(null,map__33079))?cljs.core.apply.call(null,cljs.core.hash_map,map__33079):map__33079);
var opts = map__33079__$1;
var doc = cljs.core.get.call(null,map__33079__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__33078,_,attrs,field,map__33079,map__33079__$1,opts,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__27651__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__27651__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__33078,_,attrs,field,map__33079,map__33079__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__33080,p__33081){
var vec__33082 = p__33080;
var _ = cljs.core.nth.call(null,vec__33082,(0),null);
var attrs = cljs.core.nth.call(null,vec__33082,(1),null);
var field = vec__33082;
var map__33083 = p__33081;
var map__33083__$1 = ((cljs.core.seq_QMARK_.call(null,map__33083))?cljs.core.apply.call(null,cljs.core.hash_map,map__33083):map__33083);
var opts = map__33083__$1;
var doc = cljs.core.get.call(null,map__33083__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__33082,_,attrs,field,map__33083,map__33083__$1,opts,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__27651__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__27651__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
}
});
;})(vec__33082,_,attrs,field,map__33083,map__33083__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__26440__auto__ = (function reagent_forms$core$map_options_$_iter__33096(s__33097){
return (new cljs.core.LazySeq(null,(function (){
var s__33097__$1 = s__33097;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33097__$1);
if(temp__4126__auto__){
var s__33097__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33097__$2)){
var c__26438__auto__ = cljs.core.chunk_first.call(null,s__33097__$2);
var size__26439__auto__ = cljs.core.count.call(null,c__26438__auto__);
var b__33099 = cljs.core.chunk_buffer.call(null,size__26439__auto__);
if((function (){var i__33098 = (0);
while(true){
if((i__33098 < size__26439__auto__)){
var vec__33104 = cljs.core._nth.call(null,c__26438__auto__,i__33098);
var _ = cljs.core.nth.call(null,vec__33104,(0),null);
var map__33105 = cljs.core.nth.call(null,vec__33104,(1),null);
var map__33105__$1 = ((cljs.core.seq_QMARK_.call(null,map__33105))?cljs.core.apply.call(null,cljs.core.hash_map,map__33105):map__33105);
var key = cljs.core.get.call(null,map__33105__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__33104,(2),null);
cljs.core.chunk_append.call(null,b__33099,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__33108 = (i__33098 + (1));
i__33098 = G__33108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33099),reagent_forms$core$map_options_$_iter__33096.call(null,cljs.core.chunk_rest.call(null,s__33097__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33099),null);
}
} else {
var vec__33106 = cljs.core.first.call(null,s__33097__$2);
var _ = cljs.core.nth.call(null,vec__33106,(0),null);
var map__33107 = cljs.core.nth.call(null,vec__33106,(1),null);
var map__33107__$1 = ((cljs.core.seq_QMARK_.call(null,map__33107))?cljs.core.apply.call(null,cljs.core.hash_map,map__33107):map__33107);
var key = cljs.core.get.call(null,map__33107__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__33106,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__33096.call(null,cljs.core.rest.call(null,s__33097__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26440__auto__.call(null,options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__33109_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__33109_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__33112,p__33113){
var vec__33114 = p__33112;
var type = cljs.core.nth.call(null,vec__33114,(0),null);
var map__33115 = cljs.core.nth.call(null,vec__33114,(1),null);
var map__33115__$1 = ((cljs.core.seq_QMARK_.call(null,map__33115))?cljs.core.apply.call(null,cljs.core.hash_map,map__33115):map__33115);
var attrs = map__33115__$1;
var id = cljs.core.get.call(null,map__33115__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__33115__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var options = cljs.core.nthnext.call(null,vec__33114,(2));
var map__33116 = p__33113;
var map__33116__$1 = ((cljs.core.seq_QMARK_.call(null,map__33116))?cljs.core.apply.call(null,cljs.core.hash_map,map__33116):map__33116);
var save_BANG_ = cljs.core.get.call(null,map__33116__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__33116__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__33116__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var options__$1 = reagent_forms.core.extract_selectors.call(null,options);
var options_lookup = reagent_forms.core.map_options.call(null,options__$1);
var selection = reagent.core.atom.call(null,(function (){var or__25686__auto__ = get.call(null,id);
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (options__$1,options_lookup,selection,vec__33114,type,map__33115,map__33115__$1,attrs,id,field,options,map__33116,map__33116__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__27651__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__27651__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__27651__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__33114,type,map__33115,map__33115__$1,attrs,id,field,options,map__33116,map__33116__$1,save_BANG_,get,doc){
return (function (p1__33110_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__33110_SHARP_)));
});})(visible__27651__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__33114,type,map__33115,map__33115__$1,attrs,id,field,options,map__33116,map__33116__$1,save_BANG_,get,doc))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (visible__27651__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__33114,type,map__33115,map__33115__$1,attrs,id,field,options,map__33116,map__33116__$1,save_BANG_,get,doc){
return (function (p1__33111_SHARP_){
var temp__4124__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__33111_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(visible__27651__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__33114,type,map__33115,map__33115__$1,attrs,id,field,options,map__33116,map__33116__$1,save_BANG_,get,doc))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__33114,type,map__33115,map__33115__$1,attrs,id,field,options,map__33116,map__33116__$1,save_BANG_,get,doc){
return (function (p1__33110_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__33110_SHARP_)));
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__33114,type,map__33115,map__33115__$1,attrs,id,field,options,map__33116,map__33116__$1,save_BANG_,get,doc))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__33114,type,map__33115,map__33115__$1,attrs,id,field,options,map__33116,map__33116__$1,save_BANG_,get,doc){
return (function (p1__33111_SHARP_){
var temp__4124__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__33111_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__33114,type,map__33115,map__33115__$1,attrs,id,field,options,map__33116,map__33116__$1,save_BANG_,get,doc))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__33114,type,map__33115,map__33115__$1,attrs,id,field,options,map__33116,map__33116__$1,save_BANG_,get,doc))
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500)));
});
/**
 * creates data bindings between the form fields and the supplied atom
 * form - the form template with the fields
 * doc - the document that the fields will be bound to
 * events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function reagent_forms$core$bind_fields(){
var argseq__26726__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26726__auto__);
});

reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__33117_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__33117_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);
var form__$1 = clojure.walk.postwalk.call(null,((function (opts){
return (function (node){
if(cljs.core.truth_(reagent_forms.core.field_QMARK_.call(null,node))){
var opts__$1 = reagent_forms.core.wrap_fns.call(null,opts,node);
var field = reagent_forms.core.init_field.call(null,node,opts__$1);
if(cljs.core.fn_QMARK_.call(null,field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
});

reagent_forms.core.bind_fields.cljs$lang$maxFixedArity = (2);

reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq33118){
var G__33119 = cljs.core.first.call(null,seq33118);
var seq33118__$1 = cljs.core.next.call(null,seq33118);
var G__33120 = cljs.core.first.call(null,seq33118__$1);
var seq33118__$2 = cljs.core.next.call(null,seq33118__$1);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic(G__33119,G__33120,seq33118__$2);
});

//# sourceMappingURL=core.js.map