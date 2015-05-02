// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33875__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33875 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33876__i = 0, G__33876__a = new Array(arguments.length -  0);
while (G__33876__i < G__33876__a.length) {G__33876__a[G__33876__i] = arguments[G__33876__i + 0]; ++G__33876__i;}
  args = new cljs.core.IndexedSeq(G__33876__a,0);
} 
return G__33875__delegate.call(this,args);};
G__33875.cljs$lang$maxFixedArity = 0;
G__33875.cljs$lang$applyTo = (function (arglist__33877){
var args = cljs.core.seq(arglist__33877);
return G__33875__delegate(args);
});
G__33875.cljs$core$IFn$_invoke$arity$variadic = G__33875__delegate;
return G__33875;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33878){
var map__33880 = p__33878;
var map__33880__$1 = ((cljs.core.seq_QMARK_.call(null,map__33880))?cljs.core.apply.call(null,cljs.core.hash_map,map__33880):map__33880);
var class$ = cljs.core.get.call(null,map__33880__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__33880__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25686__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25674__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25674__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25674__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28954__auto___34009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___34009,ch){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___34009,ch){
return (function (state_33983){
var state_val_33984 = (state_33983[(1)]);
if((state_val_33984 === (7))){
var inst_33979 = (state_33983[(2)]);
var state_33983__$1 = state_33983;
var statearr_33985_34010 = state_33983__$1;
(statearr_33985_34010[(2)] = inst_33979);

(statearr_33985_34010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (1))){
var state_33983__$1 = state_33983;
var statearr_33986_34011 = state_33983__$1;
(statearr_33986_34011[(2)] = null);

(statearr_33986_34011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (4))){
var inst_33947 = (state_33983[(7)]);
var inst_33947__$1 = (state_33983[(2)]);
var state_33983__$1 = (function (){var statearr_33987 = state_33983;
(statearr_33987[(7)] = inst_33947__$1);

return statearr_33987;
})();
if(cljs.core.truth_(inst_33947__$1)){
var statearr_33988_34012 = state_33983__$1;
(statearr_33988_34012[(1)] = (5));

} else {
var statearr_33989_34013 = state_33983__$1;
(statearr_33989_34013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (13))){
var state_33983__$1 = state_33983;
var statearr_33990_34014 = state_33983__$1;
(statearr_33990_34014[(2)] = null);

(statearr_33990_34014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (6))){
var state_33983__$1 = state_33983;
var statearr_33991_34015 = state_33983__$1;
(statearr_33991_34015[(2)] = null);

(statearr_33991_34015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (3))){
var inst_33981 = (state_33983[(2)]);
var state_33983__$1 = state_33983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33983__$1,inst_33981);
} else {
if((state_val_33984 === (12))){
var inst_33954 = (state_33983[(8)]);
var inst_33967 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33954);
var inst_33968 = cljs.core.first.call(null,inst_33967);
var inst_33969 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33968);
var inst_33970 = console.warn("Figwheel: Not loading code with warnings - ",inst_33969);
var state_33983__$1 = state_33983;
var statearr_33992_34016 = state_33983__$1;
(statearr_33992_34016[(2)] = inst_33970);

(statearr_33992_34016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (2))){
var state_33983__$1 = state_33983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33983__$1,(4),ch);
} else {
if((state_val_33984 === (11))){
var inst_33963 = (state_33983[(2)]);
var state_33983__$1 = state_33983;
var statearr_33993_34017 = state_33983__$1;
(statearr_33993_34017[(2)] = inst_33963);

(statearr_33993_34017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (9))){
var inst_33953 = (state_33983[(9)]);
var inst_33965 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33953,opts);
var state_33983__$1 = state_33983;
if(cljs.core.truth_(inst_33965)){
var statearr_33994_34018 = state_33983__$1;
(statearr_33994_34018[(1)] = (12));

} else {
var statearr_33995_34019 = state_33983__$1;
(statearr_33995_34019[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (5))){
var inst_33953 = (state_33983[(9)]);
var inst_33947 = (state_33983[(7)]);
var inst_33949 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33950 = (new cljs.core.PersistentArrayMap(null,2,inst_33949,null));
var inst_33951 = (new cljs.core.PersistentHashSet(null,inst_33950,null));
var inst_33952 = figwheel.client.focus_msgs.call(null,inst_33951,inst_33947);
var inst_33953__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33952);
var inst_33954 = cljs.core.first.call(null,inst_33952);
var inst_33955 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33953__$1,opts);
var state_33983__$1 = (function (){var statearr_33996 = state_33983;
(statearr_33996[(8)] = inst_33954);

(statearr_33996[(9)] = inst_33953__$1);

return statearr_33996;
})();
if(cljs.core.truth_(inst_33955)){
var statearr_33997_34020 = state_33983__$1;
(statearr_33997_34020[(1)] = (8));

} else {
var statearr_33998_34021 = state_33983__$1;
(statearr_33998_34021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (14))){
var inst_33973 = (state_33983[(2)]);
var state_33983__$1 = state_33983;
var statearr_33999_34022 = state_33983__$1;
(statearr_33999_34022[(2)] = inst_33973);

(statearr_33999_34022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (10))){
var inst_33975 = (state_33983[(2)]);
var state_33983__$1 = (function (){var statearr_34000 = state_33983;
(statearr_34000[(10)] = inst_33975);

return statearr_34000;
})();
var statearr_34001_34023 = state_33983__$1;
(statearr_34001_34023[(2)] = null);

(statearr_34001_34023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (8))){
var inst_33954 = (state_33983[(8)]);
var inst_33957 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33958 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33954);
var inst_33959 = cljs.core.async.timeout.call(null,(1000));
var inst_33960 = [inst_33958,inst_33959];
var inst_33961 = (new cljs.core.PersistentVector(null,2,(5),inst_33957,inst_33960,null));
var state_33983__$1 = state_33983;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33983__$1,(11),inst_33961);
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
});})(c__28954__auto___34009,ch))
;
return ((function (switch__28892__auto__,c__28954__auto___34009,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28893__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28893__auto____0 = (function (){
var statearr_34005 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34005[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28893__auto__);

(statearr_34005[(1)] = (1));

return statearr_34005;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28893__auto____1 = (function (state_33983){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_33983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e34006){if((e34006 instanceof Object)){
var ex__28896__auto__ = e34006;
var statearr_34007_34024 = state_33983;
(statearr_34007_34024[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34025 = state_33983;
state_33983 = G__34025;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28893__auto__ = function(state_33983){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28893__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28893__auto____1.call(this,state_33983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28893__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28893__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___34009,ch))
})();
var state__28956__auto__ = (function (){var statearr_34008 = f__28955__auto__.call(null);
(statearr_34008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___34009);

return statearr_34008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___34009,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34026_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34026_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_34033 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34033){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_34031 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_34032 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34031,_STAR_print_newline_STAR_34032,base_path_34033){
return (function() { 
var G__34034__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34035__i = 0, G__34035__a = new Array(arguments.length -  0);
while (G__34035__i < G__34035__a.length) {G__34035__a[G__34035__i] = arguments[G__34035__i + 0]; ++G__34035__i;}
  args = new cljs.core.IndexedSeq(G__34035__a,0);
} 
return G__34034__delegate.call(this,args);};
G__34034.cljs$lang$maxFixedArity = 0;
G__34034.cljs$lang$applyTo = (function (arglist__34036){
var args = cljs.core.seq(arglist__34036);
return G__34034__delegate(args);
});
G__34034.cljs$core$IFn$_invoke$arity$variadic = G__34034__delegate;
return G__34034;
})()
;})(_STAR_print_fn_STAR_34031,_STAR_print_newline_STAR_34032,base_path_34033))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34032;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34031;
}}catch (e34030){if((e34030 instanceof Error)){
var e = e34030;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34033], null));
} else {
var e = e34030;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34033))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34037){
var map__34042 = p__34037;
var map__34042__$1 = ((cljs.core.seq_QMARK_.call(null,map__34042))?cljs.core.apply.call(null,cljs.core.hash_map,map__34042):map__34042);
var opts = map__34042__$1;
var build_id = cljs.core.get.call(null,map__34042__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34042,map__34042__$1,opts,build_id){
return (function (p__34043){
var vec__34044 = p__34043;
var map__34045 = cljs.core.nth.call(null,vec__34044,(0),null);
var map__34045__$1 = ((cljs.core.seq_QMARK_.call(null,map__34045))?cljs.core.apply.call(null,cljs.core.hash_map,map__34045):map__34045);
var msg = map__34045__$1;
var msg_name = cljs.core.get.call(null,map__34045__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34044,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__34044,map__34045,map__34045__$1,msg,msg_name,_,map__34042,map__34042__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34044,map__34045,map__34045__$1,msg,msg_name,_,map__34042,map__34042__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34042,map__34042__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34049){
var vec__34050 = p__34049;
var map__34051 = cljs.core.nth.call(null,vec__34050,(0),null);
var map__34051__$1 = ((cljs.core.seq_QMARK_.call(null,map__34051))?cljs.core.apply.call(null,cljs.core.hash_map,map__34051):map__34051);
var msg = map__34051__$1;
var msg_name = cljs.core.get.call(null,map__34051__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34050,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34052){
var map__34060 = p__34052;
var map__34060__$1 = ((cljs.core.seq_QMARK_.call(null,map__34060))?cljs.core.apply.call(null,cljs.core.hash_map,map__34060):map__34060);
var on_compile_fail = cljs.core.get.call(null,map__34060__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__34060__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__34060,map__34060__$1,on_compile_fail,on_compile_warning){
return (function (p__34061){
var vec__34062 = p__34061;
var map__34063 = cljs.core.nth.call(null,vec__34062,(0),null);
var map__34063__$1 = ((cljs.core.seq_QMARK_.call(null,map__34063))?cljs.core.apply.call(null,cljs.core.hash_map,map__34063):map__34063);
var msg = map__34063__$1;
var msg_name = cljs.core.get.call(null,map__34063__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34062,(1));
var pred__34064 = cljs.core._EQ_;
var expr__34065 = msg_name;
if(cljs.core.truth_(pred__34064.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34065))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34064.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34065))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34060,map__34060__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto__,msg_hist,msg_names,msg){
return (function (state_34266){
var state_val_34267 = (state_34266[(1)]);
if((state_val_34267 === (7))){
var inst_34200 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34268_34309 = state_34266__$1;
(statearr_34268_34309[(2)] = inst_34200);

(statearr_34268_34309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (20))){
var inst_34228 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34266__$1 = state_34266;
if(cljs.core.truth_(inst_34228)){
var statearr_34269_34310 = state_34266__$1;
(statearr_34269_34310[(1)] = (22));

} else {
var statearr_34270_34311 = state_34266__$1;
(statearr_34270_34311[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (27))){
var inst_34240 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34241 = figwheel.client.heads_up.display_warning.call(null,inst_34240);
var state_34266__$1 = state_34266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34266__$1,(30),inst_34241);
} else {
if((state_val_34267 === (1))){
var inst_34188 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34266__$1 = state_34266;
if(cljs.core.truth_(inst_34188)){
var statearr_34271_34312 = state_34266__$1;
(statearr_34271_34312[(1)] = (2));

} else {
var statearr_34272_34313 = state_34266__$1;
(statearr_34272_34313[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (24))){
var inst_34256 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34273_34314 = state_34266__$1;
(statearr_34273_34314[(2)] = inst_34256);

(statearr_34273_34314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (4))){
var inst_34264 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34266__$1,inst_34264);
} else {
if((state_val_34267 === (15))){
var inst_34216 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34217 = figwheel.client.format_messages.call(null,inst_34216);
var inst_34218 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34219 = figwheel.client.heads_up.display_error.call(null,inst_34217,inst_34218);
var state_34266__$1 = state_34266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34266__$1,(18),inst_34219);
} else {
if((state_val_34267 === (21))){
var inst_34258 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34274_34315 = state_34266__$1;
(statearr_34274_34315[(2)] = inst_34258);

(statearr_34274_34315[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (31))){
var inst_34247 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34266__$1 = state_34266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34266__$1,(34),inst_34247);
} else {
if((state_val_34267 === (32))){
var state_34266__$1 = state_34266;
var statearr_34275_34316 = state_34266__$1;
(statearr_34275_34316[(2)] = null);

(statearr_34275_34316[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (33))){
var inst_34252 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34276_34317 = state_34266__$1;
(statearr_34276_34317[(2)] = inst_34252);

(statearr_34276_34317[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (13))){
var inst_34206 = (state_34266[(2)]);
var inst_34207 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34208 = figwheel.client.format_messages.call(null,inst_34207);
var inst_34209 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34210 = figwheel.client.heads_up.display_error.call(null,inst_34208,inst_34209);
var state_34266__$1 = (function (){var statearr_34277 = state_34266;
(statearr_34277[(7)] = inst_34206);

return statearr_34277;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34266__$1,(14),inst_34210);
} else {
if((state_val_34267 === (22))){
var inst_34230 = figwheel.client.heads_up.clear.call(null);
var state_34266__$1 = state_34266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34266__$1,(25),inst_34230);
} else {
if((state_val_34267 === (29))){
var inst_34254 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34278_34318 = state_34266__$1;
(statearr_34278_34318[(2)] = inst_34254);

(statearr_34278_34318[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (6))){
var inst_34196 = figwheel.client.heads_up.clear.call(null);
var state_34266__$1 = state_34266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34266__$1,(9),inst_34196);
} else {
if((state_val_34267 === (28))){
var inst_34245 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34266__$1 = state_34266;
if(cljs.core.truth_(inst_34245)){
var statearr_34279_34319 = state_34266__$1;
(statearr_34279_34319[(1)] = (31));

} else {
var statearr_34280_34320 = state_34266__$1;
(statearr_34280_34320[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (25))){
var inst_34232 = (state_34266[(2)]);
var inst_34233 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34234 = figwheel.client.heads_up.display_warning.call(null,inst_34233);
var state_34266__$1 = (function (){var statearr_34281 = state_34266;
(statearr_34281[(8)] = inst_34232);

return statearr_34281;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34266__$1,(26),inst_34234);
} else {
if((state_val_34267 === (34))){
var inst_34249 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34282_34321 = state_34266__$1;
(statearr_34282_34321[(2)] = inst_34249);

(statearr_34282_34321[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (17))){
var inst_34260 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34283_34322 = state_34266__$1;
(statearr_34283_34322[(2)] = inst_34260);

(statearr_34283_34322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (3))){
var inst_34202 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34266__$1 = state_34266;
if(cljs.core.truth_(inst_34202)){
var statearr_34284_34323 = state_34266__$1;
(statearr_34284_34323[(1)] = (10));

} else {
var statearr_34285_34324 = state_34266__$1;
(statearr_34285_34324[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (12))){
var inst_34262 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34286_34325 = state_34266__$1;
(statearr_34286_34325[(2)] = inst_34262);

(statearr_34286_34325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (2))){
var inst_34190 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34266__$1 = state_34266;
if(cljs.core.truth_(inst_34190)){
var statearr_34287_34326 = state_34266__$1;
(statearr_34287_34326[(1)] = (5));

} else {
var statearr_34288_34327 = state_34266__$1;
(statearr_34288_34327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (23))){
var inst_34238 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34266__$1 = state_34266;
if(cljs.core.truth_(inst_34238)){
var statearr_34289_34328 = state_34266__$1;
(statearr_34289_34328[(1)] = (27));

} else {
var statearr_34290_34329 = state_34266__$1;
(statearr_34290_34329[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (19))){
var inst_34225 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34226 = figwheel.client.heads_up.append_message.call(null,inst_34225);
var state_34266__$1 = state_34266;
var statearr_34291_34330 = state_34266__$1;
(statearr_34291_34330[(2)] = inst_34226);

(statearr_34291_34330[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (11))){
var inst_34214 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34266__$1 = state_34266;
if(cljs.core.truth_(inst_34214)){
var statearr_34292_34331 = state_34266__$1;
(statearr_34292_34331[(1)] = (15));

} else {
var statearr_34293_34332 = state_34266__$1;
(statearr_34293_34332[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (9))){
var inst_34198 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34294_34333 = state_34266__$1;
(statearr_34294_34333[(2)] = inst_34198);

(statearr_34294_34333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (5))){
var inst_34192 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34266__$1 = state_34266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34266__$1,(8),inst_34192);
} else {
if((state_val_34267 === (14))){
var inst_34212 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34295_34334 = state_34266__$1;
(statearr_34295_34334[(2)] = inst_34212);

(statearr_34295_34334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (26))){
var inst_34236 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34296_34335 = state_34266__$1;
(statearr_34296_34335[(2)] = inst_34236);

(statearr_34296_34335[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (16))){
var inst_34223 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34266__$1 = state_34266;
if(cljs.core.truth_(inst_34223)){
var statearr_34297_34336 = state_34266__$1;
(statearr_34297_34336[(1)] = (19));

} else {
var statearr_34298_34337 = state_34266__$1;
(statearr_34298_34337[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (30))){
var inst_34243 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34299_34338 = state_34266__$1;
(statearr_34299_34338[(2)] = inst_34243);

(statearr_34299_34338[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (10))){
var inst_34204 = figwheel.client.heads_up.clear.call(null);
var state_34266__$1 = state_34266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34266__$1,(13),inst_34204);
} else {
if((state_val_34267 === (18))){
var inst_34221 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34300_34339 = state_34266__$1;
(statearr_34300_34339[(2)] = inst_34221);

(statearr_34300_34339[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (8))){
var inst_34194 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34301_34340 = state_34266__$1;
(statearr_34301_34340[(2)] = inst_34194);

(statearr_34301_34340[(1)] = (7));


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
});})(c__28954__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28892__auto__,c__28954__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28893__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28893__auto____0 = (function (){
var statearr_34305 = [null,null,null,null,null,null,null,null,null];
(statearr_34305[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28893__auto__);

(statearr_34305[(1)] = (1));

return statearr_34305;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28893__auto____1 = (function (state_34266){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_34266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e34306){if((e34306 instanceof Object)){
var ex__28896__auto__ = e34306;
var statearr_34307_34341 = state_34266;
(statearr_34307_34341[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34342 = state_34266;
state_34266 = G__34342;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28893__auto__ = function(state_34266){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28893__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28893__auto____1.call(this,state_34266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28893__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28893__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto__,msg_hist,msg_names,msg))
})();
var state__28956__auto__ = (function (){var statearr_34308 = f__28955__auto__.call(null);
(statearr_34308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto__);

return statearr_34308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto__,msg_hist,msg_names,msg))
);

return c__28954__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28954__auto___34405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___34405,ch){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___34405,ch){
return (function (state_34388){
var state_val_34389 = (state_34388[(1)]);
if((state_val_34389 === (8))){
var inst_34380 = (state_34388[(2)]);
var state_34388__$1 = (function (){var statearr_34390 = state_34388;
(statearr_34390[(7)] = inst_34380);

return statearr_34390;
})();
var statearr_34391_34406 = state_34388__$1;
(statearr_34391_34406[(2)] = null);

(statearr_34391_34406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (7))){
var inst_34384 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34392_34407 = state_34388__$1;
(statearr_34392_34407[(2)] = inst_34384);

(statearr_34392_34407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (6))){
var state_34388__$1 = state_34388;
var statearr_34393_34408 = state_34388__$1;
(statearr_34393_34408[(2)] = null);

(statearr_34393_34408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (5))){
var inst_34376 = (state_34388[(8)]);
var inst_34378 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34376);
var state_34388__$1 = state_34388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34388__$1,(8),inst_34378);
} else {
if((state_val_34389 === (4))){
var inst_34376 = (state_34388[(8)]);
var inst_34376__$1 = (state_34388[(2)]);
var state_34388__$1 = (function (){var statearr_34394 = state_34388;
(statearr_34394[(8)] = inst_34376__$1);

return statearr_34394;
})();
if(cljs.core.truth_(inst_34376__$1)){
var statearr_34395_34409 = state_34388__$1;
(statearr_34395_34409[(1)] = (5));

} else {
var statearr_34396_34410 = state_34388__$1;
(statearr_34396_34410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (3))){
var inst_34386 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34388__$1,inst_34386);
} else {
if((state_val_34389 === (2))){
var state_34388__$1 = state_34388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34388__$1,(4),ch);
} else {
if((state_val_34389 === (1))){
var state_34388__$1 = state_34388;
var statearr_34397_34411 = state_34388__$1;
(statearr_34397_34411[(2)] = null);

(statearr_34397_34411[(1)] = (2));


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
});})(c__28954__auto___34405,ch))
;
return ((function (switch__28892__auto__,c__28954__auto___34405,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28893__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28893__auto____0 = (function (){
var statearr_34401 = [null,null,null,null,null,null,null,null,null];
(statearr_34401[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28893__auto__);

(statearr_34401[(1)] = (1));

return statearr_34401;
});
var figwheel$client$heads_up_plugin_$_state_machine__28893__auto____1 = (function (state_34388){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_34388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e34402){if((e34402 instanceof Object)){
var ex__28896__auto__ = e34402;
var statearr_34403_34412 = state_34388;
(statearr_34403_34412[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34413 = state_34388;
state_34388 = G__34413;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28893__auto__ = function(state_34388){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28893__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28893__auto____1.call(this,state_34388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28893__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28893__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___34405,ch))
})();
var state__28956__auto__ = (function (){var statearr_34404 = f__28955__auto__.call(null);
(statearr_34404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___34405);

return statearr_34404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___34405,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto__){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto__){
return (function (state_34434){
var state_val_34435 = (state_34434[(1)]);
if((state_val_34435 === (2))){
var inst_34431 = (state_34434[(2)]);
var inst_34432 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34434__$1 = (function (){var statearr_34436 = state_34434;
(statearr_34436[(7)] = inst_34431);

return statearr_34436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34434__$1,inst_34432);
} else {
if((state_val_34435 === (1))){
var inst_34429 = cljs.core.async.timeout.call(null,(3000));
var state_34434__$1 = state_34434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34434__$1,(2),inst_34429);
} else {
return null;
}
}
});})(c__28954__auto__))
;
return ((function (switch__28892__auto__,c__28954__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28893__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28893__auto____0 = (function (){
var statearr_34440 = [null,null,null,null,null,null,null,null];
(statearr_34440[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28893__auto__);

(statearr_34440[(1)] = (1));

return statearr_34440;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28893__auto____1 = (function (state_34434){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_34434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e34441){if((e34441 instanceof Object)){
var ex__28896__auto__ = e34441;
var statearr_34442_34444 = state_34434;
(statearr_34442_34444[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34445 = state_34434;
state_34434 = G__34445;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28893__auto__ = function(state_34434){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28893__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28893__auto____1.call(this,state_34434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28893__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28893__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto__))
})();
var state__28956__auto__ = (function (){var statearr_34443 = f__28955__auto__.call(null);
(statearr_34443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto__);

return statearr_34443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto__))
);

return c__28954__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__25674__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__25674__auto__)){
return ("CustomEvent" in window);
} else {
return and__25674__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj34449 = {"detail":url};
return obj34449;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34450){
var map__34456 = p__34450;
var map__34456__$1 = ((cljs.core.seq_QMARK_.call(null,map__34456))?cljs.core.apply.call(null,cljs.core.hash_map,map__34456):map__34456);
var ed = map__34456__$1;
var cause = cljs.core.get.call(null,map__34456__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__34456__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__34456__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34457_34461 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34458_34462 = null;
var count__34459_34463 = (0);
var i__34460_34464 = (0);
while(true){
if((i__34460_34464 < count__34459_34463)){
var msg_34465 = cljs.core._nth.call(null,chunk__34458_34462,i__34460_34464);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34465);

var G__34466 = seq__34457_34461;
var G__34467 = chunk__34458_34462;
var G__34468 = count__34459_34463;
var G__34469 = (i__34460_34464 + (1));
seq__34457_34461 = G__34466;
chunk__34458_34462 = G__34467;
count__34459_34463 = G__34468;
i__34460_34464 = G__34469;
continue;
} else {
var temp__4126__auto___34470 = cljs.core.seq.call(null,seq__34457_34461);
if(temp__4126__auto___34470){
var seq__34457_34471__$1 = temp__4126__auto___34470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34457_34471__$1)){
var c__26471__auto___34472 = cljs.core.chunk_first.call(null,seq__34457_34471__$1);
var G__34473 = cljs.core.chunk_rest.call(null,seq__34457_34471__$1);
var G__34474 = c__26471__auto___34472;
var G__34475 = cljs.core.count.call(null,c__26471__auto___34472);
var G__34476 = (0);
seq__34457_34461 = G__34473;
chunk__34458_34462 = G__34474;
count__34459_34463 = G__34475;
i__34460_34464 = G__34476;
continue;
} else {
var msg_34477 = cljs.core.first.call(null,seq__34457_34471__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34477);

var G__34478 = cljs.core.next.call(null,seq__34457_34471__$1);
var G__34479 = null;
var G__34480 = (0);
var G__34481 = (0);
seq__34457_34461 = G__34478;
chunk__34458_34462 = G__34479;
count__34459_34463 = G__34480;
i__34460_34464 = G__34481;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34482){
var map__34484 = p__34482;
var map__34484__$1 = ((cljs.core.seq_QMARK_.call(null,map__34484))?cljs.core.apply.call(null,cljs.core.hash_map,map__34484):map__34484);
var w = map__34484__$1;
var message = cljs.core.get.call(null,map__34484__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25674__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25674__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25674__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34491 = cljs.core.seq.call(null,plugins);
var chunk__34492 = null;
var count__34493 = (0);
var i__34494 = (0);
while(true){
if((i__34494 < count__34493)){
var vec__34495 = cljs.core._nth.call(null,chunk__34492,i__34494);
var k = cljs.core.nth.call(null,vec__34495,(0),null);
var plugin = cljs.core.nth.call(null,vec__34495,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34497 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34491,chunk__34492,count__34493,i__34494,pl_34497,vec__34495,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34497.call(null,msg_hist);
});})(seq__34491,chunk__34492,count__34493,i__34494,pl_34497,vec__34495,k,plugin))
);
} else {
}

var G__34498 = seq__34491;
var G__34499 = chunk__34492;
var G__34500 = count__34493;
var G__34501 = (i__34494 + (1));
seq__34491 = G__34498;
chunk__34492 = G__34499;
count__34493 = G__34500;
i__34494 = G__34501;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34491);
if(temp__4126__auto__){
var seq__34491__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34491__$1)){
var c__26471__auto__ = cljs.core.chunk_first.call(null,seq__34491__$1);
var G__34502 = cljs.core.chunk_rest.call(null,seq__34491__$1);
var G__34503 = c__26471__auto__;
var G__34504 = cljs.core.count.call(null,c__26471__auto__);
var G__34505 = (0);
seq__34491 = G__34502;
chunk__34492 = G__34503;
count__34493 = G__34504;
i__34494 = G__34505;
continue;
} else {
var vec__34496 = cljs.core.first.call(null,seq__34491__$1);
var k = cljs.core.nth.call(null,vec__34496,(0),null);
var plugin = cljs.core.nth.call(null,vec__34496,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34506 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34491,chunk__34492,count__34493,i__34494,pl_34506,vec__34496,k,plugin,seq__34491__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34506.call(null,msg_hist);
});})(seq__34491,chunk__34492,count__34493,i__34494,pl_34506,vec__34496,k,plugin,seq__34491__$1,temp__4126__auto__))
);
} else {
}

var G__34507 = cljs.core.next.call(null,seq__34491__$1);
var G__34508 = null;
var G__34509 = (0);
var G__34510 = (0);
seq__34491 = G__34507;
chunk__34492 = G__34508;
count__34493 = G__34509;
i__34494 = G__34510;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__34512 = arguments.length;
switch (G__34512) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__26726__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26726__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34515){
var map__34516 = p__34515;
var map__34516__$1 = ((cljs.core.seq_QMARK_.call(null,map__34516))?cljs.core.apply.call(null,cljs.core.hash_map,map__34516):map__34516);
var opts = map__34516__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34514){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34514));
});

//# sourceMappingURL=client.js.map