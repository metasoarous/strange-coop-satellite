// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__34833_SHARP_,p2__34834_SHARP_){
var and__25674__auto__ = p1__34833_SHARP_;
if(cljs.core.truth_(and__25674__auto__)){
return p2__34834_SHARP_;
} else {
return and__25674__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25686__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25686__auto__){
return or__25686__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__25686__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__25686__auto__){
return or__25686__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__25686__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__26581__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26582__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26583__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26585__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26585__auto__,method_table__26581__auto__,prefer_table__26582__auto__,method_cache__26583__auto__,cached_hierarchy__26584__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34835){
var map__34836 = p__34835;
var map__34836__$1 = ((cljs.core.seq_QMARK_.call(null,map__34836))?cljs.core.apply.call(null,cljs.core.hash_map,map__34836):map__34836);
var file = cljs.core.get.call(null,map__34836__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__34837){
var map__34838 = p__34837;
var map__34838__$1 = ((cljs.core.seq_QMARK_.call(null,map__34838))?cljs.core.apply.call(null,cljs.core.hash_map,map__34838):map__34838);
var namespace = cljs.core.get.call(null,map__34838__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__26581__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26582__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26583__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26585__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26585__auto__,method_table__26581__auto__,prefer_table__26582__auto__,method_cache__26583__auto__,cached_hierarchy__26584__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e34839){if((e34839 instanceof Error)){
var e = e34839;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34839;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__34841 = arguments.length;
switch (G__34841) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34843,callback){
var map__34845 = p__34843;
var map__34845__$1 = ((cljs.core.seq_QMARK_.call(null,map__34845))?cljs.core.apply.call(null,cljs.core.hash_map,map__34845):map__34845);
var file_msg = map__34845__$1;
var request_url = cljs.core.get.call(null,map__34845__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34845,map__34845__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34845,map__34845__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34846){
var map__34848 = p__34846;
var map__34848__$1 = ((cljs.core.seq_QMARK_.call(null,map__34848))?cljs.core.apply.call(null,cljs.core.hash_map,map__34848):map__34848);
var file_msg = map__34848__$1;
var meta_data = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__25686__auto__ = meta_data;
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__25674__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__25674__auto__){
var or__25686__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
var or__25686__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__25686__auto____$1)){
return or__25686__auto____$1;
} else {
var and__25674__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__25674__auto____$1){
var or__25686__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__25686__auto____$2){
return or__25686__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__25674__auto____$1;
}
}
}
} else {
return and__25674__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34849,callback){
var map__34851 = p__34849;
var map__34851__$1 = ((cljs.core.seq_QMARK_.call(null,map__34851))?cljs.core.apply.call(null,cljs.core.hash_map,map__34851):map__34851);
var file_msg = map__34851__$1;
var namespace = cljs.core.get.call(null,map__34851__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__34851__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28954__auto___34938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___34938,out){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___34938,out){
return (function (state_34920){
var state_val_34921 = (state_34920[(1)]);
if((state_val_34921 === (7))){
var inst_34904 = (state_34920[(7)]);
var inst_34910 = (state_34920[(2)]);
var inst_34911 = cljs.core.async.put_BANG_.call(null,out,inst_34910);
var inst_34900 = inst_34904;
var state_34920__$1 = (function (){var statearr_34922 = state_34920;
(statearr_34922[(8)] = inst_34900);

(statearr_34922[(9)] = inst_34911);

return statearr_34922;
})();
var statearr_34923_34939 = state_34920__$1;
(statearr_34923_34939[(2)] = null);

(statearr_34923_34939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (6))){
var inst_34916 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34924_34940 = state_34920__$1;
(statearr_34924_34940[(2)] = inst_34916);

(statearr_34924_34940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (5))){
var inst_34914 = cljs.core.async.close_BANG_.call(null,out);
var state_34920__$1 = state_34920;
var statearr_34925_34941 = state_34920__$1;
(statearr_34925_34941[(2)] = inst_34914);

(statearr_34925_34941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (4))){
var inst_34903 = (state_34920[(10)]);
var inst_34908 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34903);
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34920__$1,(7),inst_34908);
} else {
if((state_val_34921 === (3))){
var inst_34918 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34920__$1,inst_34918);
} else {
if((state_val_34921 === (2))){
var inst_34900 = (state_34920[(8)]);
var inst_34903 = (state_34920[(10)]);
var inst_34903__$1 = cljs.core.nth.call(null,inst_34900,(0),null);
var inst_34904 = cljs.core.nthnext.call(null,inst_34900,(1));
var inst_34905 = (inst_34903__$1 == null);
var inst_34906 = cljs.core.not.call(null,inst_34905);
var state_34920__$1 = (function (){var statearr_34926 = state_34920;
(statearr_34926[(10)] = inst_34903__$1);

(statearr_34926[(7)] = inst_34904);

return statearr_34926;
})();
if(inst_34906){
var statearr_34927_34942 = state_34920__$1;
(statearr_34927_34942[(1)] = (4));

} else {
var statearr_34928_34943 = state_34920__$1;
(statearr_34928_34943[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (1))){
var inst_34898 = cljs.core.nth.call(null,files,(0),null);
var inst_34899 = cljs.core.nthnext.call(null,files,(1));
var inst_34900 = files;
var state_34920__$1 = (function (){var statearr_34929 = state_34920;
(statearr_34929[(11)] = inst_34898);

(statearr_34929[(12)] = inst_34899);

(statearr_34929[(8)] = inst_34900);

return statearr_34929;
})();
var statearr_34930_34944 = state_34920__$1;
(statearr_34930_34944[(2)] = null);

(statearr_34930_34944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28954__auto___34938,out))
;
return ((function (switch__28892__auto__,c__28954__auto___34938,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28893__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28893__auto____0 = (function (){
var statearr_34934 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34934[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28893__auto__);

(statearr_34934[(1)] = (1));

return statearr_34934;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28893__auto____1 = (function (state_34920){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_34920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e34935){if((e34935 instanceof Object)){
var ex__28896__auto__ = e34935;
var statearr_34936_34945 = state_34920;
(statearr_34936_34945[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34946 = state_34920;
state_34920 = G__34946;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28893__auto__ = function(state_34920){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28893__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28893__auto____1.call(this,state_34920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28893__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28893__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___34938,out))
})();
var state__28956__auto__ = (function (){var statearr_34937 = f__28955__auto__.call(null);
(statearr_34937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___34938);

return statearr_34937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___34938,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__34947,p__34948){
var map__34951 = p__34947;
var map__34951__$1 = ((cljs.core.seq_QMARK_.call(null,map__34951))?cljs.core.apply.call(null,cljs.core.hash_map,map__34951):map__34951);
var opts = map__34951__$1;
var url_rewriter = cljs.core.get.call(null,map__34951__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__34952 = p__34948;
var map__34952__$1 = ((cljs.core.seq_QMARK_.call(null,map__34952))?cljs.core.apply.call(null,cljs.core.hash_map,map__34952):map__34952);
var file_msg = map__34952__$1;
var file = cljs.core.get.call(null,map__34952__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34953){
var map__34956 = p__34953;
var map__34956__$1 = ((cljs.core.seq_QMARK_.call(null,map__34956))?cljs.core.apply.call(null,cljs.core.hash_map,map__34956):map__34956);
var file = cljs.core.get.call(null,map__34956__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__34956__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__25674__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25674__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25674__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e34957){var e = e34957;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34962,p__34963){
var map__35164 = p__34962;
var map__35164__$1 = ((cljs.core.seq_QMARK_.call(null,map__35164))?cljs.core.apply.call(null,cljs.core.hash_map,map__35164):map__35164);
var opts = map__35164__$1;
var load_unchanged_files = cljs.core.get.call(null,map__35164__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__35164__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__35164__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__35165 = p__34963;
var map__35165__$1 = ((cljs.core.seq_QMARK_.call(null,map__35165))?cljs.core.apply.call(null,cljs.core.hash_map,map__35165):map__35165);
var msg = map__35165__$1;
var files = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__28954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files){
return (function (state_35289){
var state_val_35290 = (state_35289[(1)]);
if((state_val_35290 === (7))){
var inst_35177 = (state_35289[(7)]);
var inst_35179 = (state_35289[(8)]);
var inst_35178 = (state_35289[(9)]);
var inst_35176 = (state_35289[(10)]);
var inst_35184 = cljs.core._nth.call(null,inst_35177,inst_35179);
var inst_35185 = figwheel.client.file_reloading.eval_body.call(null,inst_35184);
var inst_35186 = (inst_35179 + (1));
var tmp35291 = inst_35177;
var tmp35292 = inst_35178;
var tmp35293 = inst_35176;
var inst_35176__$1 = tmp35293;
var inst_35177__$1 = tmp35291;
var inst_35178__$1 = tmp35292;
var inst_35179__$1 = inst_35186;
var state_35289__$1 = (function (){var statearr_35294 = state_35289;
(statearr_35294[(7)] = inst_35177__$1);

(statearr_35294[(8)] = inst_35179__$1);

(statearr_35294[(11)] = inst_35185);

(statearr_35294[(9)] = inst_35178__$1);

(statearr_35294[(10)] = inst_35176__$1);

return statearr_35294;
})();
var statearr_35295_35364 = state_35289__$1;
(statearr_35295_35364[(2)] = null);

(statearr_35295_35364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (20))){
var inst_35221 = (state_35289[(12)]);
var inst_35225 = (state_35289[(13)]);
var inst_35226 = (state_35289[(14)]);
var inst_35228 = (state_35289[(15)]);
var inst_35222 = (state_35289[(16)]);
var inst_35231 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35233 = (function (){var files_not_loaded = inst_35228;
var res = inst_35226;
var res_SINGLEQUOTE_ = inst_35225;
var files_SINGLEQUOTE_ = inst_35222;
var all_files = inst_35221;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35221,inst_35225,inst_35226,inst_35228,inst_35222,inst_35231,state_val_35290,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files){
return (function (p__35232){
var map__35296 = p__35232;
var map__35296__$1 = ((cljs.core.seq_QMARK_.call(null,map__35296))?cljs.core.apply.call(null,cljs.core.hash_map,map__35296):map__35296);
var file = cljs.core.get.call(null,map__35296__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__35296__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35221,inst_35225,inst_35226,inst_35228,inst_35222,inst_35231,state_val_35290,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files))
})();
var inst_35234 = cljs.core.map.call(null,inst_35233,inst_35226);
var inst_35235 = cljs.core.pr_str.call(null,inst_35234);
var inst_35236 = figwheel.client.utils.log.call(null,inst_35235);
var inst_35237 = (function (){var files_not_loaded = inst_35228;
var res = inst_35226;
var res_SINGLEQUOTE_ = inst_35225;
var files_SINGLEQUOTE_ = inst_35222;
var all_files = inst_35221;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35221,inst_35225,inst_35226,inst_35228,inst_35222,inst_35231,inst_35233,inst_35234,inst_35235,inst_35236,state_val_35290,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35221,inst_35225,inst_35226,inst_35228,inst_35222,inst_35231,inst_35233,inst_35234,inst_35235,inst_35236,state_val_35290,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files))
})();
var inst_35238 = setTimeout(inst_35237,(10));
var state_35289__$1 = (function (){var statearr_35297 = state_35289;
(statearr_35297[(17)] = inst_35231);

(statearr_35297[(18)] = inst_35236);

return statearr_35297;
})();
var statearr_35298_35365 = state_35289__$1;
(statearr_35298_35365[(2)] = inst_35238);

(statearr_35298_35365[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (27))){
var inst_35248 = (state_35289[(19)]);
var state_35289__$1 = state_35289;
var statearr_35299_35366 = state_35289__$1;
(statearr_35299_35366[(2)] = inst_35248);

(statearr_35299_35366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (1))){
var inst_35168 = (state_35289[(20)]);
var inst_35166 = before_jsload.call(null,files);
var inst_35167 = (function (){return ((function (inst_35168,inst_35166,state_val_35290,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files){
return (function (p1__34958_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34958_SHARP_);
});
;})(inst_35168,inst_35166,state_val_35290,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files))
})();
var inst_35168__$1 = cljs.core.filter.call(null,inst_35167,files);
var inst_35169 = cljs.core.not_empty.call(null,inst_35168__$1);
var state_35289__$1 = (function (){var statearr_35300 = state_35289;
(statearr_35300[(20)] = inst_35168__$1);

(statearr_35300[(21)] = inst_35166);

return statearr_35300;
})();
if(cljs.core.truth_(inst_35169)){
var statearr_35301_35367 = state_35289__$1;
(statearr_35301_35367[(1)] = (2));

} else {
var statearr_35302_35368 = state_35289__$1;
(statearr_35302_35368[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (24))){
var state_35289__$1 = state_35289;
var statearr_35303_35369 = state_35289__$1;
(statearr_35303_35369[(2)] = null);

(statearr_35303_35369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (4))){
var inst_35213 = (state_35289[(2)]);
var inst_35214 = (function (){return ((function (inst_35213,state_val_35290,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files){
return (function (p1__34959_SHARP_){
var and__25674__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34959_SHARP_);
if(cljs.core.truth_(and__25674__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34959_SHARP_));
} else {
return and__25674__auto__;
}
});
;})(inst_35213,state_val_35290,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files))
})();
var inst_35215 = cljs.core.filter.call(null,inst_35214,files);
var state_35289__$1 = (function (){var statearr_35304 = state_35289;
(statearr_35304[(22)] = inst_35215);

(statearr_35304[(23)] = inst_35213);

return statearr_35304;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35305_35370 = state_35289__$1;
(statearr_35305_35370[(1)] = (16));

} else {
var statearr_35306_35371 = state_35289__$1;
(statearr_35306_35371[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (15))){
var inst_35203 = (state_35289[(2)]);
var state_35289__$1 = state_35289;
var statearr_35307_35372 = state_35289__$1;
(statearr_35307_35372[(2)] = inst_35203);

(statearr_35307_35372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (21))){
var state_35289__$1 = state_35289;
var statearr_35308_35373 = state_35289__$1;
(statearr_35308_35373[(2)] = null);

(statearr_35308_35373[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (31))){
var inst_35256 = (state_35289[(24)]);
var inst_35266 = (state_35289[(2)]);
var inst_35267 = cljs.core.not_empty.call(null,inst_35256);
var state_35289__$1 = (function (){var statearr_35309 = state_35289;
(statearr_35309[(25)] = inst_35266);

return statearr_35309;
})();
if(cljs.core.truth_(inst_35267)){
var statearr_35310_35374 = state_35289__$1;
(statearr_35310_35374[(1)] = (32));

} else {
var statearr_35311_35375 = state_35289__$1;
(statearr_35311_35375[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (32))){
var inst_35256 = (state_35289[(24)]);
var inst_35269 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35256);
var inst_35270 = cljs.core.pr_str.call(null,inst_35269);
var inst_35271 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_35270)].join('');
var inst_35272 = figwheel.client.utils.log.call(null,inst_35271);
var state_35289__$1 = state_35289;
var statearr_35312_35376 = state_35289__$1;
(statearr_35312_35376[(2)] = inst_35272);

(statearr_35312_35376[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (33))){
var state_35289__$1 = state_35289;
var statearr_35313_35377 = state_35289__$1;
(statearr_35313_35377[(2)] = null);

(statearr_35313_35377[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (13))){
var inst_35189 = (state_35289[(26)]);
var inst_35193 = cljs.core.chunk_first.call(null,inst_35189);
var inst_35194 = cljs.core.chunk_rest.call(null,inst_35189);
var inst_35195 = cljs.core.count.call(null,inst_35193);
var inst_35176 = inst_35194;
var inst_35177 = inst_35193;
var inst_35178 = inst_35195;
var inst_35179 = (0);
var state_35289__$1 = (function (){var statearr_35314 = state_35289;
(statearr_35314[(7)] = inst_35177);

(statearr_35314[(8)] = inst_35179);

(statearr_35314[(9)] = inst_35178);

(statearr_35314[(10)] = inst_35176);

return statearr_35314;
})();
var statearr_35315_35378 = state_35289__$1;
(statearr_35315_35378[(2)] = null);

(statearr_35315_35378[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (22))){
var inst_35228 = (state_35289[(15)]);
var inst_35241 = (state_35289[(2)]);
var inst_35242 = cljs.core.not_empty.call(null,inst_35228);
var state_35289__$1 = (function (){var statearr_35316 = state_35289;
(statearr_35316[(27)] = inst_35241);

return statearr_35316;
})();
if(cljs.core.truth_(inst_35242)){
var statearr_35317_35379 = state_35289__$1;
(statearr_35317_35379[(1)] = (23));

} else {
var statearr_35318_35380 = state_35289__$1;
(statearr_35318_35380[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (36))){
var state_35289__$1 = state_35289;
var statearr_35319_35381 = state_35289__$1;
(statearr_35319_35381[(2)] = null);

(statearr_35319_35381[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (29))){
var inst_35257 = (state_35289[(28)]);
var inst_35260 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35257);
var inst_35261 = cljs.core.pr_str.call(null,inst_35260);
var inst_35262 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35261)].join('');
var inst_35263 = figwheel.client.utils.log.call(null,inst_35262);
var state_35289__$1 = state_35289;
var statearr_35320_35382 = state_35289__$1;
(statearr_35320_35382[(2)] = inst_35263);

(statearr_35320_35382[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (6))){
var inst_35210 = (state_35289[(2)]);
var state_35289__$1 = state_35289;
var statearr_35321_35383 = state_35289__$1;
(statearr_35321_35383[(2)] = inst_35210);

(statearr_35321_35383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (28))){
var inst_35257 = (state_35289[(28)]);
var inst_35254 = (state_35289[(2)]);
var inst_35255 = cljs.core.get.call(null,inst_35254,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35256 = cljs.core.get.call(null,inst_35254,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_35257__$1 = cljs.core.get.call(null,inst_35254,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35258 = cljs.core.not_empty.call(null,inst_35257__$1);
var state_35289__$1 = (function (){var statearr_35322 = state_35289;
(statearr_35322[(28)] = inst_35257__$1);

(statearr_35322[(29)] = inst_35255);

(statearr_35322[(24)] = inst_35256);

return statearr_35322;
})();
if(cljs.core.truth_(inst_35258)){
var statearr_35323_35384 = state_35289__$1;
(statearr_35323_35384[(1)] = (29));

} else {
var statearr_35324_35385 = state_35289__$1;
(statearr_35324_35385[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (25))){
var inst_35287 = (state_35289[(2)]);
var state_35289__$1 = state_35289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35289__$1,inst_35287);
} else {
if((state_val_35290 === (34))){
var inst_35255 = (state_35289[(29)]);
var inst_35275 = (state_35289[(2)]);
var inst_35276 = cljs.core.not_empty.call(null,inst_35255);
var state_35289__$1 = (function (){var statearr_35325 = state_35289;
(statearr_35325[(30)] = inst_35275);

return statearr_35325;
})();
if(cljs.core.truth_(inst_35276)){
var statearr_35326_35386 = state_35289__$1;
(statearr_35326_35386[(1)] = (35));

} else {
var statearr_35327_35387 = state_35289__$1;
(statearr_35327_35387[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (17))){
var inst_35215 = (state_35289[(22)]);
var state_35289__$1 = state_35289;
var statearr_35328_35388 = state_35289__$1;
(statearr_35328_35388[(2)] = inst_35215);

(statearr_35328_35388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (3))){
var state_35289__$1 = state_35289;
var statearr_35329_35389 = state_35289__$1;
(statearr_35329_35389[(2)] = null);

(statearr_35329_35389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (12))){
var inst_35206 = (state_35289[(2)]);
var state_35289__$1 = state_35289;
var statearr_35330_35390 = state_35289__$1;
(statearr_35330_35390[(2)] = inst_35206);

(statearr_35330_35390[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (2))){
var inst_35168 = (state_35289[(20)]);
var inst_35175 = cljs.core.seq.call(null,inst_35168);
var inst_35176 = inst_35175;
var inst_35177 = null;
var inst_35178 = (0);
var inst_35179 = (0);
var state_35289__$1 = (function (){var statearr_35331 = state_35289;
(statearr_35331[(7)] = inst_35177);

(statearr_35331[(8)] = inst_35179);

(statearr_35331[(9)] = inst_35178);

(statearr_35331[(10)] = inst_35176);

return statearr_35331;
})();
var statearr_35332_35391 = state_35289__$1;
(statearr_35332_35391[(2)] = null);

(statearr_35332_35391[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (23))){
var inst_35221 = (state_35289[(12)]);
var inst_35225 = (state_35289[(13)]);
var inst_35226 = (state_35289[(14)]);
var inst_35228 = (state_35289[(15)]);
var inst_35248 = (state_35289[(19)]);
var inst_35222 = (state_35289[(16)]);
var inst_35244 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35247 = (function (){var files_not_loaded = inst_35228;
var res = inst_35226;
var res_SINGLEQUOTE_ = inst_35225;
var files_SINGLEQUOTE_ = inst_35222;
var all_files = inst_35221;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35221,inst_35225,inst_35226,inst_35228,inst_35248,inst_35222,inst_35244,state_val_35290,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files){
return (function (p__35246){
var map__35333 = p__35246;
var map__35333__$1 = ((cljs.core.seq_QMARK_.call(null,map__35333))?cljs.core.apply.call(null,cljs.core.hash_map,map__35333):map__35333);
var meta_data = cljs.core.get.call(null,map__35333__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35221,inst_35225,inst_35226,inst_35228,inst_35248,inst_35222,inst_35244,state_val_35290,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files))
})();
var inst_35248__$1 = cljs.core.group_by.call(null,inst_35247,inst_35228);
var inst_35249 = cljs.core.seq_QMARK_.call(null,inst_35248__$1);
var state_35289__$1 = (function (){var statearr_35334 = state_35289;
(statearr_35334[(31)] = inst_35244);

(statearr_35334[(19)] = inst_35248__$1);

return statearr_35334;
})();
if(inst_35249){
var statearr_35335_35392 = state_35289__$1;
(statearr_35335_35392[(1)] = (26));

} else {
var statearr_35336_35393 = state_35289__$1;
(statearr_35336_35393[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (35))){
var inst_35255 = (state_35289[(29)]);
var inst_35278 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35255);
var inst_35279 = cljs.core.pr_str.call(null,inst_35278);
var inst_35280 = [cljs.core.str("not required: "),cljs.core.str(inst_35279)].join('');
var inst_35281 = figwheel.client.utils.log.call(null,inst_35280);
var state_35289__$1 = state_35289;
var statearr_35337_35394 = state_35289__$1;
(statearr_35337_35394[(2)] = inst_35281);

(statearr_35337_35394[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (19))){
var inst_35221 = (state_35289[(12)]);
var inst_35225 = (state_35289[(13)]);
var inst_35226 = (state_35289[(14)]);
var inst_35222 = (state_35289[(16)]);
var inst_35225__$1 = (state_35289[(2)]);
var inst_35226__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35225__$1);
var inst_35227 = (function (){var res = inst_35226__$1;
var res_SINGLEQUOTE_ = inst_35225__$1;
var files_SINGLEQUOTE_ = inst_35222;
var all_files = inst_35221;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35221,inst_35225,inst_35226,inst_35222,inst_35225__$1,inst_35226__$1,state_val_35290,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files){
return (function (p1__34961_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34961_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35221,inst_35225,inst_35226,inst_35222,inst_35225__$1,inst_35226__$1,state_val_35290,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files))
})();
var inst_35228 = cljs.core.filter.call(null,inst_35227,inst_35225__$1);
var inst_35229 = cljs.core.not_empty.call(null,inst_35226__$1);
var state_35289__$1 = (function (){var statearr_35338 = state_35289;
(statearr_35338[(13)] = inst_35225__$1);

(statearr_35338[(14)] = inst_35226__$1);

(statearr_35338[(15)] = inst_35228);

return statearr_35338;
})();
if(cljs.core.truth_(inst_35229)){
var statearr_35339_35395 = state_35289__$1;
(statearr_35339_35395[(1)] = (20));

} else {
var statearr_35340_35396 = state_35289__$1;
(statearr_35340_35396[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (11))){
var state_35289__$1 = state_35289;
var statearr_35341_35397 = state_35289__$1;
(statearr_35341_35397[(2)] = null);

(statearr_35341_35397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (9))){
var inst_35208 = (state_35289[(2)]);
var state_35289__$1 = state_35289;
var statearr_35342_35398 = state_35289__$1;
(statearr_35342_35398[(2)] = inst_35208);

(statearr_35342_35398[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (5))){
var inst_35179 = (state_35289[(8)]);
var inst_35178 = (state_35289[(9)]);
var inst_35181 = (inst_35179 < inst_35178);
var inst_35182 = inst_35181;
var state_35289__$1 = state_35289;
if(cljs.core.truth_(inst_35182)){
var statearr_35343_35399 = state_35289__$1;
(statearr_35343_35399[(1)] = (7));

} else {
var statearr_35344_35400 = state_35289__$1;
(statearr_35344_35400[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (14))){
var inst_35189 = (state_35289[(26)]);
var inst_35198 = cljs.core.first.call(null,inst_35189);
var inst_35199 = figwheel.client.file_reloading.eval_body.call(null,inst_35198);
var inst_35200 = cljs.core.next.call(null,inst_35189);
var inst_35176 = inst_35200;
var inst_35177 = null;
var inst_35178 = (0);
var inst_35179 = (0);
var state_35289__$1 = (function (){var statearr_35345 = state_35289;
(statearr_35345[(7)] = inst_35177);

(statearr_35345[(8)] = inst_35179);

(statearr_35345[(32)] = inst_35199);

(statearr_35345[(9)] = inst_35178);

(statearr_35345[(10)] = inst_35176);

return statearr_35345;
})();
var statearr_35346_35401 = state_35289__$1;
(statearr_35346_35401[(2)] = null);

(statearr_35346_35401[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (26))){
var inst_35248 = (state_35289[(19)]);
var inst_35251 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35248);
var state_35289__$1 = state_35289;
var statearr_35347_35402 = state_35289__$1;
(statearr_35347_35402[(2)] = inst_35251);

(statearr_35347_35402[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (16))){
var inst_35215 = (state_35289[(22)]);
var inst_35217 = (function (){var all_files = inst_35215;
return ((function (all_files,inst_35215,state_val_35290,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files){
return (function (p1__34960_SHARP_){
return cljs.core.update_in.call(null,p1__34960_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_35215,state_val_35290,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files))
})();
var inst_35218 = cljs.core.map.call(null,inst_35217,inst_35215);
var state_35289__$1 = state_35289;
var statearr_35348_35403 = state_35289__$1;
(statearr_35348_35403[(2)] = inst_35218);

(statearr_35348_35403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (30))){
var state_35289__$1 = state_35289;
var statearr_35349_35404 = state_35289__$1;
(statearr_35349_35404[(2)] = null);

(statearr_35349_35404[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (10))){
var inst_35189 = (state_35289[(26)]);
var inst_35191 = cljs.core.chunked_seq_QMARK_.call(null,inst_35189);
var state_35289__$1 = state_35289;
if(inst_35191){
var statearr_35350_35405 = state_35289__$1;
(statearr_35350_35405[(1)] = (13));

} else {
var statearr_35351_35406 = state_35289__$1;
(statearr_35351_35406[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (18))){
var inst_35221 = (state_35289[(12)]);
var inst_35222 = (state_35289[(16)]);
var inst_35221__$1 = (state_35289[(2)]);
var inst_35222__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_35221__$1);
var inst_35223 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35222__$1);
var state_35289__$1 = (function (){var statearr_35352 = state_35289;
(statearr_35352[(12)] = inst_35221__$1);

(statearr_35352[(16)] = inst_35222__$1);

return statearr_35352;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35289__$1,(19),inst_35223);
} else {
if((state_val_35290 === (37))){
var inst_35284 = (state_35289[(2)]);
var state_35289__$1 = state_35289;
var statearr_35353_35407 = state_35289__$1;
(statearr_35353_35407[(2)] = inst_35284);

(statearr_35353_35407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35290 === (8))){
var inst_35189 = (state_35289[(26)]);
var inst_35176 = (state_35289[(10)]);
var inst_35189__$1 = cljs.core.seq.call(null,inst_35176);
var state_35289__$1 = (function (){var statearr_35354 = state_35289;
(statearr_35354[(26)] = inst_35189__$1);

return statearr_35354;
})();
if(inst_35189__$1){
var statearr_35355_35408 = state_35289__$1;
(statearr_35355_35408[(1)] = (10));

} else {
var statearr_35356_35409 = state_35289__$1;
(statearr_35356_35409[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files))
;
return ((function (switch__28892__auto__,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28893__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28893__auto____0 = (function (){
var statearr_35360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35360[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28893__auto__);

(statearr_35360[(1)] = (1));

return statearr_35360;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28893__auto____1 = (function (state_35289){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_35289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e35361){if((e35361 instanceof Object)){
var ex__28896__auto__ = e35361;
var statearr_35362_35410 = state_35289;
(statearr_35362_35410[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35411 = state_35289;
state_35289 = G__35411;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28893__auto__ = function(state_35289){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28893__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28893__auto____1.call(this,state_35289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28893__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28893__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files))
})();
var state__28956__auto__ = (function (){var statearr_35363 = f__28955__auto__.call(null);
(statearr_35363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto__);

return statearr_35363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto__,map__35164,map__35164__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35165,map__35165__$1,msg,files))
);

return c__28954__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35414,link){
var map__35416 = p__35414;
var map__35416__$1 = ((cljs.core.seq_QMARK_.call(null,map__35416))?cljs.core.apply.call(null,cljs.core.hash_map,map__35416):map__35416);
var file = cljs.core.get.call(null,map__35416__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__35416,map__35416__$1,file){
return (function (p1__35412_SHARP_,p2__35413_SHARP_){
if(cljs.core._EQ_.call(null,p1__35412_SHARP_,p2__35413_SHARP_)){
return p1__35412_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__35416,map__35416__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35420){
var map__35421 = p__35420;
var map__35421__$1 = ((cljs.core.seq_QMARK_.call(null,map__35421))?cljs.core.apply.call(null,cljs.core.hash_map,map__35421):map__35421);
var current_url_length = cljs.core.get.call(null,map__35421__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__35421__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35417_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35417_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__35423 = arguments.length;
switch (G__35423) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35425){
var map__35427 = p__35425;
var map__35427__$1 = ((cljs.core.seq_QMARK_.call(null,map__35427))?cljs.core.apply.call(null,cljs.core.hash_map,map__35427):map__35427);
var f_data = map__35427__$1;
var request_url = cljs.core.get.call(null,map__35427__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__35427__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__25686__auto__ = request_url;
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35428,files_msg){
var map__35450 = p__35428;
var map__35450__$1 = ((cljs.core.seq_QMARK_.call(null,map__35450))?cljs.core.apply.call(null,cljs.core.hash_map,map__35450):map__35450);
var opts = map__35450__$1;
var on_cssload = cljs.core.get.call(null,map__35450__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35451_35471 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35452_35472 = null;
var count__35453_35473 = (0);
var i__35454_35474 = (0);
while(true){
if((i__35454_35474 < count__35453_35473)){
var f_35475 = cljs.core._nth.call(null,chunk__35452_35472,i__35454_35474);
figwheel.client.file_reloading.reload_css_file.call(null,f_35475);

var G__35476 = seq__35451_35471;
var G__35477 = chunk__35452_35472;
var G__35478 = count__35453_35473;
var G__35479 = (i__35454_35474 + (1));
seq__35451_35471 = G__35476;
chunk__35452_35472 = G__35477;
count__35453_35473 = G__35478;
i__35454_35474 = G__35479;
continue;
} else {
var temp__4126__auto___35480 = cljs.core.seq.call(null,seq__35451_35471);
if(temp__4126__auto___35480){
var seq__35451_35481__$1 = temp__4126__auto___35480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35451_35481__$1)){
var c__26471__auto___35482 = cljs.core.chunk_first.call(null,seq__35451_35481__$1);
var G__35483 = cljs.core.chunk_rest.call(null,seq__35451_35481__$1);
var G__35484 = c__26471__auto___35482;
var G__35485 = cljs.core.count.call(null,c__26471__auto___35482);
var G__35486 = (0);
seq__35451_35471 = G__35483;
chunk__35452_35472 = G__35484;
count__35453_35473 = G__35485;
i__35454_35474 = G__35486;
continue;
} else {
var f_35487 = cljs.core.first.call(null,seq__35451_35481__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35487);

var G__35488 = cljs.core.next.call(null,seq__35451_35481__$1);
var G__35489 = null;
var G__35490 = (0);
var G__35491 = (0);
seq__35451_35471 = G__35488;
chunk__35452_35472 = G__35489;
count__35453_35473 = G__35490;
i__35454_35474 = G__35491;
continue;
}
} else {
}
}
break;
}

var c__28954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto__,map__35450,map__35450__$1,opts,on_cssload){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto__,map__35450,map__35450__$1,opts,on_cssload){
return (function (state_35461){
var state_val_35462 = (state_35461[(1)]);
if((state_val_35462 === (2))){
var inst_35457 = (state_35461[(2)]);
var inst_35458 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35459 = on_cssload.call(null,inst_35458);
var state_35461__$1 = (function (){var statearr_35463 = state_35461;
(statearr_35463[(7)] = inst_35457);

return statearr_35463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35461__$1,inst_35459);
} else {
if((state_val_35462 === (1))){
var inst_35455 = cljs.core.async.timeout.call(null,(100));
var state_35461__$1 = state_35461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35461__$1,(2),inst_35455);
} else {
return null;
}
}
});})(c__28954__auto__,map__35450,map__35450__$1,opts,on_cssload))
;
return ((function (switch__28892__auto__,c__28954__auto__,map__35450,map__35450__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28893__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28893__auto____0 = (function (){
var statearr_35467 = [null,null,null,null,null,null,null,null];
(statearr_35467[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__28893__auto__);

(statearr_35467[(1)] = (1));

return statearr_35467;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28893__auto____1 = (function (state_35461){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_35461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e35468){if((e35468 instanceof Object)){
var ex__28896__auto__ = e35468;
var statearr_35469_35492 = state_35461;
(statearr_35469_35492[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35493 = state_35461;
state_35461 = G__35493;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__28893__auto__ = function(state_35461){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28893__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28893__auto____1.call(this,state_35461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28893__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28893__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto__,map__35450,map__35450__$1,opts,on_cssload))
})();
var state__28956__auto__ = (function (){var statearr_35470 = f__28955__auto__.call(null);
(statearr_35470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto__);

return statearr_35470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto__,map__35450,map__35450__$1,opts,on_cssload))
);

return c__28954__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map