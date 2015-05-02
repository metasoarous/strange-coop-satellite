// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__32829_32833 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__32830_32834 = null;
var count__32831_32835 = (0);
var i__32832_32836 = (0);
while(true){
if((i__32832_32836 < count__32831_32835)){
var k_32837 = cljs.core._nth.call(null,chunk__32830_32834,i__32832_32836);
var v_32838 = (b[k_32837]);
(a[k_32837] = v_32838);

var G__32839 = seq__32829_32833;
var G__32840 = chunk__32830_32834;
var G__32841 = count__32831_32835;
var G__32842 = (i__32832_32836 + (1));
seq__32829_32833 = G__32839;
chunk__32830_32834 = G__32840;
count__32831_32835 = G__32841;
i__32832_32836 = G__32842;
continue;
} else {
var temp__4126__auto___32843 = cljs.core.seq.call(null,seq__32829_32833);
if(temp__4126__auto___32843){
var seq__32829_32844__$1 = temp__4126__auto___32843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32829_32844__$1)){
var c__26471__auto___32845 = cljs.core.chunk_first.call(null,seq__32829_32844__$1);
var G__32846 = cljs.core.chunk_rest.call(null,seq__32829_32844__$1);
var G__32847 = c__26471__auto___32845;
var G__32848 = cljs.core.count.call(null,c__26471__auto___32845);
var G__32849 = (0);
seq__32829_32833 = G__32846;
chunk__32830_32834 = G__32847;
count__32831_32835 = G__32848;
i__32832_32836 = G__32849;
continue;
} else {
var k_32850 = cljs.core.first.call(null,seq__32829_32844__$1);
var v_32851 = (b[k_32850]);
(a[k_32850] = v_32851);

var G__32852 = cljs.core.next.call(null,seq__32829_32844__$1);
var G__32853 = null;
var G__32854 = (0);
var G__32855 = (0);
seq__32829_32833 = G__32852;
chunk__32830_32834 = G__32853;
count__32831_32835 = G__32854;
i__32832_32836 = G__32855;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var G__32857 = arguments.length;
switch (G__32857) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__32859 = (i + (2));
var G__32860 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__32859;
ret = G__32860;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__32861_32865 = cljs.core.seq.call(null,v);
var chunk__32862_32866 = null;
var count__32863_32867 = (0);
var i__32864_32868 = (0);
while(true){
if((i__32864_32868 < count__32863_32867)){
var x_32869 = cljs.core._nth.call(null,chunk__32862_32866,i__32864_32868);
ret.push(x_32869);

var G__32870 = seq__32861_32865;
var G__32871 = chunk__32862_32866;
var G__32872 = count__32863_32867;
var G__32873 = (i__32864_32868 + (1));
seq__32861_32865 = G__32870;
chunk__32862_32866 = G__32871;
count__32863_32867 = G__32872;
i__32864_32868 = G__32873;
continue;
} else {
var temp__4126__auto___32874 = cljs.core.seq.call(null,seq__32861_32865);
if(temp__4126__auto___32874){
var seq__32861_32875__$1 = temp__4126__auto___32874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32861_32875__$1)){
var c__26471__auto___32876 = cljs.core.chunk_first.call(null,seq__32861_32875__$1);
var G__32877 = cljs.core.chunk_rest.call(null,seq__32861_32875__$1);
var G__32878 = c__26471__auto___32876;
var G__32879 = cljs.core.count.call(null,c__26471__auto___32876);
var G__32880 = (0);
seq__32861_32865 = G__32877;
chunk__32862_32866 = G__32878;
count__32863_32867 = G__32879;
i__32864_32868 = G__32880;
continue;
} else {
var x_32881 = cljs.core.first.call(null,seq__32861_32875__$1);
ret.push(x_32881);

var G__32882 = cljs.core.next.call(null,seq__32861_32875__$1);
var G__32883 = null;
var G__32884 = (0);
var G__32885 = (0);
seq__32861_32865 = G__32882;
chunk__32862_32866 = G__32883;
count__32863_32867 = G__32884;
i__32864_32868 = G__32885;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__32886_32890 = cljs.core.seq.call(null,v);
var chunk__32887_32891 = null;
var count__32888_32892 = (0);
var i__32889_32893 = (0);
while(true){
if((i__32889_32893 < count__32888_32892)){
var x_32894 = cljs.core._nth.call(null,chunk__32887_32891,i__32889_32893);
ret.push(x_32894);

var G__32895 = seq__32886_32890;
var G__32896 = chunk__32887_32891;
var G__32897 = count__32888_32892;
var G__32898 = (i__32889_32893 + (1));
seq__32886_32890 = G__32895;
chunk__32887_32891 = G__32896;
count__32888_32892 = G__32897;
i__32889_32893 = G__32898;
continue;
} else {
var temp__4126__auto___32899 = cljs.core.seq.call(null,seq__32886_32890);
if(temp__4126__auto___32899){
var seq__32886_32900__$1 = temp__4126__auto___32899;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32886_32900__$1)){
var c__26471__auto___32901 = cljs.core.chunk_first.call(null,seq__32886_32900__$1);
var G__32902 = cljs.core.chunk_rest.call(null,seq__32886_32900__$1);
var G__32903 = c__26471__auto___32901;
var G__32904 = cljs.core.count.call(null,c__26471__auto___32901);
var G__32905 = (0);
seq__32886_32890 = G__32902;
chunk__32887_32891 = G__32903;
count__32888_32892 = G__32904;
i__32889_32893 = G__32905;
continue;
} else {
var x_32906 = cljs.core.first.call(null,seq__32886_32900__$1);
ret.push(x_32906);

var G__32907 = cljs.core.next.call(null,seq__32886_32900__$1);
var G__32908 = null;
var G__32909 = (0);
var G__32910 = (0);
seq__32886_32890 = G__32907;
chunk__32887_32891 = G__32908;
count__32888_32892 = G__32909;
i__32889_32893 = G__32910;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__32911_32915 = cljs.core.seq.call(null,v);
var chunk__32912_32916 = null;
var count__32913_32917 = (0);
var i__32914_32918 = (0);
while(true){
if((i__32914_32918 < count__32913_32917)){
var x_32919 = cljs.core._nth.call(null,chunk__32912_32916,i__32914_32918);
ret.push(x_32919);

var G__32920 = seq__32911_32915;
var G__32921 = chunk__32912_32916;
var G__32922 = count__32913_32917;
var G__32923 = (i__32914_32918 + (1));
seq__32911_32915 = G__32920;
chunk__32912_32916 = G__32921;
count__32913_32917 = G__32922;
i__32914_32918 = G__32923;
continue;
} else {
var temp__4126__auto___32924 = cljs.core.seq.call(null,seq__32911_32915);
if(temp__4126__auto___32924){
var seq__32911_32925__$1 = temp__4126__auto___32924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32911_32925__$1)){
var c__26471__auto___32926 = cljs.core.chunk_first.call(null,seq__32911_32925__$1);
var G__32927 = cljs.core.chunk_rest.call(null,seq__32911_32925__$1);
var G__32928 = c__26471__auto___32926;
var G__32929 = cljs.core.count.call(null,c__26471__auto___32926);
var G__32930 = (0);
seq__32911_32915 = G__32927;
chunk__32912_32916 = G__32928;
count__32913_32917 = G__32929;
i__32914_32918 = G__32930;
continue;
} else {
var x_32931 = cljs.core.first.call(null,seq__32911_32925__$1);
ret.push(x_32931);

var G__32932 = cljs.core.next.call(null,seq__32911_32925__$1);
var G__32933 = null;
var G__32934 = (0);
var G__32935 = (0);
seq__32911_32915 = G__32932;
chunk__32912_32916 = G__32933;
count__32913_32917 = G__32934;
i__32914_32918 = G__32935;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var G__32937 = arguments.length;
switch (G__32937) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x32939 = cljs.core.clone.call(null,handlers);
x32939.forEach = ((function (x32939,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__32940 = cljs.core.seq.call(null,coll);
var chunk__32941 = null;
var count__32942 = (0);
var i__32943 = (0);
while(true){
if((i__32943 < count__32942)){
var vec__32944 = cljs.core._nth.call(null,chunk__32941,i__32943);
var k = cljs.core.nth.call(null,vec__32944,(0),null);
var v = cljs.core.nth.call(null,vec__32944,(1),null);
f.call(null,v,k);

var G__32947 = seq__32940;
var G__32948 = chunk__32941;
var G__32949 = count__32942;
var G__32950 = (i__32943 + (1));
seq__32940 = G__32947;
chunk__32941 = G__32948;
count__32942 = G__32949;
i__32943 = G__32950;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__32940);
if(temp__4126__auto__){
var seq__32940__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32940__$1)){
var c__26471__auto__ = cljs.core.chunk_first.call(null,seq__32940__$1);
var G__32951 = cljs.core.chunk_rest.call(null,seq__32940__$1);
var G__32952 = c__26471__auto__;
var G__32953 = cljs.core.count.call(null,c__26471__auto__);
var G__32954 = (0);
seq__32940 = G__32951;
chunk__32941 = G__32952;
count__32942 = G__32953;
i__32943 = G__32954;
continue;
} else {
var vec__32945 = cljs.core.first.call(null,seq__32940__$1);
var k = cljs.core.nth.call(null,vec__32945,(0),null);
var v = cljs.core.nth.call(null,vec__32945,(1),null);
f.call(null,v,k);

var G__32955 = cljs.core.next.call(null,seq__32940__$1);
var G__32956 = null;
var G__32957 = (0);
var G__32958 = (0);
seq__32940 = G__32955;
chunk__32941 = G__32956;
count__32942 = G__32957;
i__32943 = G__32958;
continue;
}
} else {
return null;
}
}
break;
}
});})(x32939,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x32939;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__32938 = obj;
G__32938.push(kfn.call(null,k),vfn.call(null,v));

return G__32938;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var G__32960 = arguments.length;
switch (G__32960) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t32961 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t32961 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,meta32962){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.meta32962 = meta32962;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t32961.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t32961.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t32961.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t32961.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t32961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32963){
var self__ = this;
var _32963__$1 = this;
return self__.meta32962;
});

cognitect.transit.t32961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32963,meta32962__$1){
var self__ = this;
var _32963__$1 = this;
return (new cognitect.transit.t32961(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,meta32962__$1));
});

cognitect.transit.t32961.cljs$lang$type = true;

cognitect.transit.t32961.cljs$lang$ctorStr = "cognitect.transit/t32961";

cognitect.transit.t32961.cljs$lang$ctorPrWriter = (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cognitect.transit/t32961");
});

cognitect.transit.__GT_t32961 = (function cognitect$transit$__GT_t32961(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta32962){
return (new cognitect.transit.t32961(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta32962));
});

}

return (new cognitect.transit.t32961(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map