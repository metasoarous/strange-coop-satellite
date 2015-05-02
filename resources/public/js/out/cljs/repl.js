// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34772_34784 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34773_34785 = null;
var count__34774_34786 = (0);
var i__34775_34787 = (0);
while(true){
if((i__34775_34787 < count__34774_34786)){
var f_34788 = cljs.core._nth.call(null,chunk__34773_34785,i__34775_34787);
cljs.core.println.call(null,"  ",f_34788);

var G__34789 = seq__34772_34784;
var G__34790 = chunk__34773_34785;
var G__34791 = count__34774_34786;
var G__34792 = (i__34775_34787 + (1));
seq__34772_34784 = G__34789;
chunk__34773_34785 = G__34790;
count__34774_34786 = G__34791;
i__34775_34787 = G__34792;
continue;
} else {
var temp__4126__auto___34793 = cljs.core.seq.call(null,seq__34772_34784);
if(temp__4126__auto___34793){
var seq__34772_34794__$1 = temp__4126__auto___34793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34772_34794__$1)){
var c__26471__auto___34795 = cljs.core.chunk_first.call(null,seq__34772_34794__$1);
var G__34796 = cljs.core.chunk_rest.call(null,seq__34772_34794__$1);
var G__34797 = c__26471__auto___34795;
var G__34798 = cljs.core.count.call(null,c__26471__auto___34795);
var G__34799 = (0);
seq__34772_34784 = G__34796;
chunk__34773_34785 = G__34797;
count__34774_34786 = G__34798;
i__34775_34787 = G__34799;
continue;
} else {
var f_34800 = cljs.core.first.call(null,seq__34772_34794__$1);
cljs.core.println.call(null,"  ",f_34800);

var G__34801 = cljs.core.next.call(null,seq__34772_34794__$1);
var G__34802 = null;
var G__34803 = (0);
var G__34804 = (0);
seq__34772_34784 = G__34801;
chunk__34773_34785 = G__34802;
count__34774_34786 = G__34803;
i__34775_34787 = G__34804;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__25686__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34776 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34777 = null;
var count__34778 = (0);
var i__34779 = (0);
while(true){
if((i__34779 < count__34778)){
var vec__34780 = cljs.core._nth.call(null,chunk__34777,i__34779);
var name = cljs.core.nth.call(null,vec__34780,(0),null);
var map__34781 = cljs.core.nth.call(null,vec__34780,(1),null);
var map__34781__$1 = ((cljs.core.seq_QMARK_.call(null,map__34781))?cljs.core.apply.call(null,cljs.core.hash_map,map__34781):map__34781);
var arglists = cljs.core.get.call(null,map__34781__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__34781__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34805 = seq__34776;
var G__34806 = chunk__34777;
var G__34807 = count__34778;
var G__34808 = (i__34779 + (1));
seq__34776 = G__34805;
chunk__34777 = G__34806;
count__34778 = G__34807;
i__34779 = G__34808;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34776);
if(temp__4126__auto__){
var seq__34776__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34776__$1)){
var c__26471__auto__ = cljs.core.chunk_first.call(null,seq__34776__$1);
var G__34809 = cljs.core.chunk_rest.call(null,seq__34776__$1);
var G__34810 = c__26471__auto__;
var G__34811 = cljs.core.count.call(null,c__26471__auto__);
var G__34812 = (0);
seq__34776 = G__34809;
chunk__34777 = G__34810;
count__34778 = G__34811;
i__34779 = G__34812;
continue;
} else {
var vec__34782 = cljs.core.first.call(null,seq__34776__$1);
var name = cljs.core.nth.call(null,vec__34782,(0),null);
var map__34783 = cljs.core.nth.call(null,vec__34782,(1),null);
var map__34783__$1 = ((cljs.core.seq_QMARK_.call(null,map__34783))?cljs.core.apply.call(null,cljs.core.hash_map,map__34783):map__34783);
var arglists = cljs.core.get.call(null,map__34783__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__34783__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34813 = cljs.core.next.call(null,seq__34776__$1);
var G__34814 = null;
var G__34815 = (0);
var G__34816 = (0);
seq__34776 = G__34813;
chunk__34777 = G__34814;
count__34778 = G__34815;
i__34779 = G__34816;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map