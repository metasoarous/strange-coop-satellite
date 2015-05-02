// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__26726__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26726__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__34529_34537 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34530_34538 = null;
var count__34531_34539 = (0);
var i__34532_34540 = (0);
while(true){
if((i__34532_34540 < count__34531_34539)){
var k_34541 = cljs.core._nth.call(null,chunk__34530_34538,i__34532_34540);
e.setAttribute(cljs.core.name.call(null,k_34541),cljs.core.get.call(null,attrs,k_34541));

var G__34542 = seq__34529_34537;
var G__34543 = chunk__34530_34538;
var G__34544 = count__34531_34539;
var G__34545 = (i__34532_34540 + (1));
seq__34529_34537 = G__34542;
chunk__34530_34538 = G__34543;
count__34531_34539 = G__34544;
i__34532_34540 = G__34545;
continue;
} else {
var temp__4126__auto___34546 = cljs.core.seq.call(null,seq__34529_34537);
if(temp__4126__auto___34546){
var seq__34529_34547__$1 = temp__4126__auto___34546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34529_34547__$1)){
var c__26471__auto___34548 = cljs.core.chunk_first.call(null,seq__34529_34547__$1);
var G__34549 = cljs.core.chunk_rest.call(null,seq__34529_34547__$1);
var G__34550 = c__26471__auto___34548;
var G__34551 = cljs.core.count.call(null,c__26471__auto___34548);
var G__34552 = (0);
seq__34529_34537 = G__34549;
chunk__34530_34538 = G__34550;
count__34531_34539 = G__34551;
i__34532_34540 = G__34552;
continue;
} else {
var k_34553 = cljs.core.first.call(null,seq__34529_34547__$1);
e.setAttribute(cljs.core.name.call(null,k_34553),cljs.core.get.call(null,attrs,k_34553));

var G__34554 = cljs.core.next.call(null,seq__34529_34547__$1);
var G__34555 = null;
var G__34556 = (0);
var G__34557 = (0);
seq__34529_34537 = G__34554;
chunk__34530_34538 = G__34555;
count__34531_34539 = G__34556;
i__34532_34540 = G__34557;
continue;
}
} else {
}
}
break;
}

var seq__34533_34558 = cljs.core.seq.call(null,children);
var chunk__34534_34559 = null;
var count__34535_34560 = (0);
var i__34536_34561 = (0);
while(true){
if((i__34536_34561 < count__34535_34560)){
var ch_34562 = cljs.core._nth.call(null,chunk__34534_34559,i__34536_34561);
e.appendChild(ch_34562);

var G__34563 = seq__34533_34558;
var G__34564 = chunk__34534_34559;
var G__34565 = count__34535_34560;
var G__34566 = (i__34536_34561 + (1));
seq__34533_34558 = G__34563;
chunk__34534_34559 = G__34564;
count__34535_34560 = G__34565;
i__34536_34561 = G__34566;
continue;
} else {
var temp__4126__auto___34567 = cljs.core.seq.call(null,seq__34533_34558);
if(temp__4126__auto___34567){
var seq__34533_34568__$1 = temp__4126__auto___34567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34533_34568__$1)){
var c__26471__auto___34569 = cljs.core.chunk_first.call(null,seq__34533_34568__$1);
var G__34570 = cljs.core.chunk_rest.call(null,seq__34533_34568__$1);
var G__34571 = c__26471__auto___34569;
var G__34572 = cljs.core.count.call(null,c__26471__auto___34569);
var G__34573 = (0);
seq__34533_34558 = G__34570;
chunk__34534_34559 = G__34571;
count__34535_34560 = G__34572;
i__34536_34561 = G__34573;
continue;
} else {
var ch_34574 = cljs.core.first.call(null,seq__34533_34568__$1);
e.appendChild(ch_34574);

var G__34575 = cljs.core.next.call(null,seq__34533_34568__$1);
var G__34576 = null;
var G__34577 = (0);
var G__34578 = (0);
seq__34533_34558 = G__34575;
chunk__34534_34559 = G__34576;
count__34535_34560 = G__34577;
i__34536_34561 = G__34578;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq34526){
var G__34527 = cljs.core.first.call(null,seq34526);
var seq34526__$1 = cljs.core.next.call(null,seq34526);
var G__34528 = cljs.core.first.call(null,seq34526__$1);
var seq34526__$2 = cljs.core.next.call(null,seq34526__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__34527,G__34528,seq34526__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__26581__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26582__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26583__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26585__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__26581__auto__,prefer_table__26582__auto__,method_cache__26583__auto__,cached_hierarchy__26584__auto__,hierarchy__26585__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__26581__auto__,prefer_table__26582__auto__,method_cache__26583__auto__,cached_hierarchy__26584__auto__,hierarchy__26585__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26585__auto__,method_table__26581__auto__,prefer_table__26582__auto__,method_cache__26583__auto__,cached_hierarchy__26584__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_34579 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_34579.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34579.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_34579.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34579);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__34580,st_map){
var map__34584 = p__34580;
var map__34584__$1 = ((cljs.core.seq_QMARK_.call(null,map__34584))?cljs.core.apply.call(null,cljs.core.hash_map,map__34584):map__34584);
var container_el = cljs.core.get.call(null,map__34584__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34584,map__34584__$1,container_el){
return (function (p__34585){
var vec__34586 = p__34585;
var k = cljs.core.nth.call(null,vec__34586,(0),null);
var v = cljs.core.nth.call(null,vec__34586,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34584,map__34584__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__34587,dom_str){
var map__34589 = p__34587;
var map__34589__$1 = ((cljs.core.seq_QMARK_.call(null,map__34589))?cljs.core.apply.call(null,cljs.core.hash_map,map__34589):map__34589);
var c = map__34589__$1;
var content_area_el = cljs.core.get.call(null,map__34589__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__34590){
var map__34592 = p__34590;
var map__34592__$1 = ((cljs.core.seq_QMARK_.call(null,map__34592))?cljs.core.apply.call(null,cljs.core.hash_map,map__34592):map__34592);
var content_area_el = cljs.core.get.call(null,map__34592__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__28954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto__){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto__){
return (function (state_34634){
var state_val_34635 = (state_34634[(1)]);
if((state_val_34635 === (2))){
var inst_34619 = (state_34634[(7)]);
var inst_34628 = (state_34634[(2)]);
var inst_34629 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34630 = ["auto"];
var inst_34631 = cljs.core.PersistentHashMap.fromArrays(inst_34629,inst_34630);
var inst_34632 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34619,inst_34631);
var state_34634__$1 = (function (){var statearr_34636 = state_34634;
(statearr_34636[(8)] = inst_34628);

return statearr_34636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34634__$1,inst_34632);
} else {
if((state_val_34635 === (1))){
var inst_34619 = (state_34634[(7)]);
var inst_34619__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34620 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34621 = ["10px","10px","100%","68px","1.0"];
var inst_34622 = cljs.core.PersistentHashMap.fromArrays(inst_34620,inst_34621);
var inst_34623 = cljs.core.merge.call(null,inst_34622,style);
var inst_34624 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34619__$1,inst_34623);
var inst_34625 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34619__$1,msg);
var inst_34626 = cljs.core.async.timeout.call(null,(300));
var state_34634__$1 = (function (){var statearr_34637 = state_34634;
(statearr_34637[(9)] = inst_34624);

(statearr_34637[(10)] = inst_34625);

(statearr_34637[(7)] = inst_34619__$1);

return statearr_34637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34634__$1,(2),inst_34626);
} else {
return null;
}
}
});})(c__28954__auto__))
;
return ((function (switch__28892__auto__,c__28954__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__28893__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__28893__auto____0 = (function (){
var statearr_34641 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34641[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__28893__auto__);

(statearr_34641[(1)] = (1));

return statearr_34641;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__28893__auto____1 = (function (state_34634){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_34634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e34642){if((e34642 instanceof Object)){
var ex__28896__auto__ = e34642;
var statearr_34643_34645 = state_34634;
(statearr_34643_34645[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34646 = state_34634;
state_34634 = G__34646;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__28893__auto__ = function(state_34634){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28893__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28893__auto____1.call(this,state_34634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__28893__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__28893__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto__))
})();
var state__28956__auto__ = (function (){var statearr_34644 = f__28955__auto__.call(null);
(statearr_34644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto__);

return statearr_34644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto__))
);

return c__28954__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__34648 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__34648,(0),null);
var ln = cljs.core.nth.call(null,vec__34648,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__34651 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__34651,(0),null);
var file_line = cljs.core.nth.call(null,vec__34651,(1),null);
var file_column = cljs.core.nth.call(null,vec__34651,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34651,file_name,file_line,file_column){
return (function (p1__34649_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__34649_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__34651,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__25686__auto__ = file_line;
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
var and__25674__auto__ = cause;
if(cljs.core.truth_(and__25674__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__25674__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__34653 = figwheel.client.heads_up.ensure_container.call(null);
var map__34653__$1 = ((cljs.core.seq_QMARK_.call(null,map__34653))?cljs.core.apply.call(null,cljs.core.hash_map,map__34653):map__34653);
var content_area_el = cljs.core.get.call(null,map__34653__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__28954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto__){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto__){
return (function (state_34700){
var state_val_34701 = (state_34700[(1)]);
if((state_val_34701 === (3))){
var inst_34683 = (state_34700[(7)]);
var inst_34697 = (state_34700[(2)]);
var inst_34698 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34683,"");
var state_34700__$1 = (function (){var statearr_34702 = state_34700;
(statearr_34702[(8)] = inst_34697);

return statearr_34702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34700__$1,inst_34698);
} else {
if((state_val_34701 === (2))){
var inst_34683 = (state_34700[(7)]);
var inst_34690 = (state_34700[(2)]);
var inst_34691 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_34692 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_34693 = cljs.core.PersistentHashMap.fromArrays(inst_34691,inst_34692);
var inst_34694 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34683,inst_34693);
var inst_34695 = cljs.core.async.timeout.call(null,(200));
var state_34700__$1 = (function (){var statearr_34703 = state_34700;
(statearr_34703[(9)] = inst_34690);

(statearr_34703[(10)] = inst_34694);

return statearr_34703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34700__$1,(3),inst_34695);
} else {
if((state_val_34701 === (1))){
var inst_34683 = (state_34700[(7)]);
var inst_34683__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34684 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34685 = ["0.0"];
var inst_34686 = cljs.core.PersistentHashMap.fromArrays(inst_34684,inst_34685);
var inst_34687 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34683__$1,inst_34686);
var inst_34688 = cljs.core.async.timeout.call(null,(300));
var state_34700__$1 = (function (){var statearr_34704 = state_34700;
(statearr_34704[(7)] = inst_34683__$1);

(statearr_34704[(11)] = inst_34687);

return statearr_34704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34700__$1,(2),inst_34688);
} else {
return null;
}
}
}
});})(c__28954__auto__))
;
return ((function (switch__28892__auto__,c__28954__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__28893__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__28893__auto____0 = (function (){
var statearr_34708 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34708[(0)] = figwheel$client$heads_up$clear_$_state_machine__28893__auto__);

(statearr_34708[(1)] = (1));

return statearr_34708;
});
var figwheel$client$heads_up$clear_$_state_machine__28893__auto____1 = (function (state_34700){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_34700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e34709){if((e34709 instanceof Object)){
var ex__28896__auto__ = e34709;
var statearr_34710_34712 = state_34700;
(statearr_34710_34712[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34713 = state_34700;
state_34700 = G__34713;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__28893__auto__ = function(state_34700){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__28893__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__28893__auto____1.call(this,state_34700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__28893__auto____0;
figwheel$client$heads_up$clear_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__28893__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto__))
})();
var state__28956__auto__ = (function (){var statearr_34711 = f__28955__auto__.call(null);
(statearr_34711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto__);

return statearr_34711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto__))
);

return c__28954__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__28954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto__){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto__){
return (function (state_34745){
var state_val_34746 = (state_34745[(1)]);
if((state_val_34746 === (4))){
var inst_34743 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34745__$1,inst_34743);
} else {
if((state_val_34746 === (3))){
var inst_34740 = (state_34745[(2)]);
var inst_34741 = figwheel.client.heads_up.clear.call(null);
var state_34745__$1 = (function (){var statearr_34747 = state_34745;
(statearr_34747[(7)] = inst_34740);

return statearr_34747;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34745__$1,(4),inst_34741);
} else {
if((state_val_34746 === (2))){
var inst_34737 = (state_34745[(2)]);
var inst_34738 = cljs.core.async.timeout.call(null,(400));
var state_34745__$1 = (function (){var statearr_34748 = state_34745;
(statearr_34748[(8)] = inst_34737);

return statearr_34748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34745__$1,(3),inst_34738);
} else {
if((state_val_34746 === (1))){
var inst_34735 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_34745__$1 = state_34745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34745__$1,(2),inst_34735);
} else {
return null;
}
}
}
}
});})(c__28954__auto__))
;
return ((function (switch__28892__auto__,c__28954__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__28893__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__28893__auto____0 = (function (){
var statearr_34752 = [null,null,null,null,null,null,null,null,null];
(statearr_34752[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__28893__auto__);

(statearr_34752[(1)] = (1));

return statearr_34752;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__28893__auto____1 = (function (state_34745){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_34745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e34753){if((e34753 instanceof Object)){
var ex__28896__auto__ = e34753;
var statearr_34754_34756 = state_34745;
(statearr_34754_34756[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34757 = state_34745;
state_34745 = G__34757;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__28893__auto__ = function(state_34745){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28893__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28893__auto____1.call(this,state_34745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__28893__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__28893__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto__))
})();
var state__28956__auto__ = (function (){var statearr_34755 = f__28955__auto__.call(null);
(statearr_34755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto__);

return statearr_34755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto__))
);

return c__28954__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map