// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t35544 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35544 = (function (f,fn_handler,meta35545){
this.f = f;
this.fn_handler = fn_handler;
this.meta35545 = meta35545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35544.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35544.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t35544.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t35544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35546){
var self__ = this;
var _35546__$1 = this;
return self__.meta35545;
});

cljs.core.async.t35544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35546,meta35545__$1){
var self__ = this;
var _35546__$1 = this;
return (new cljs.core.async.t35544(self__.f,self__.fn_handler,meta35545__$1));
});

cljs.core.async.t35544.cljs$lang$type = true;

cljs.core.async.t35544.cljs$lang$ctorStr = "cljs.core.async/t35544";

cljs.core.async.t35544.cljs$lang$ctorPrWriter = (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cljs.core.async/t35544");
});

cljs.core.async.__GT_t35544 = (function cljs$core$async$fn_handler_$___GT_t35544(f__$1,fn_handler__$1,meta35545){
return (new cljs.core.async.t35544(f__$1,fn_handler__$1,meta35545));
});

}

return (new cljs.core.async.t35544(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__35548 = buff;
if(G__35548){
var bit__26360__auto__ = null;
if(cljs.core.truth_((function (){var or__25686__auto__ = bit__26360__auto__;
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return G__35548.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__35548.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35548);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35548);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__35550 = arguments.length;
switch (G__35550) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__35553 = arguments.length;
switch (G__35553) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35555 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35555);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35555,ret){
return (function (){
return fn1.call(null,val_35555);
});})(val_35555,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__35557 = arguments.length;
switch (G__35557) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26571__auto___35559 = n;
var x_35560 = (0);
while(true){
if((x_35560 < n__26571__auto___35559)){
(a[x_35560] = (0));

var G__35561 = (x_35560 + (1));
x_35560 = G__35561;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35562 = (i + (1));
i = G__35562;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t35566 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35566 = (function (flag,alt_flag,meta35567){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta35567 = meta35567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35566.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t35566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t35566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35568){
var self__ = this;
var _35568__$1 = this;
return self__.meta35567;
});})(flag))
;

cljs.core.async.t35566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35568,meta35567__$1){
var self__ = this;
var _35568__$1 = this;
return (new cljs.core.async.t35566(self__.flag,self__.alt_flag,meta35567__$1));
});})(flag))
;

cljs.core.async.t35566.cljs$lang$type = true;

cljs.core.async.t35566.cljs$lang$ctorStr = "cljs.core.async/t35566";

cljs.core.async.t35566.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cljs.core.async/t35566");
});})(flag))
;

cljs.core.async.__GT_t35566 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t35566(flag__$1,alt_flag__$1,meta35567){
return (new cljs.core.async.t35566(flag__$1,alt_flag__$1,meta35567));
});})(flag))
;

}

return (new cljs.core.async.t35566(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t35572 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35572 = (function (cb,flag,alt_handler,meta35573){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta35573 = meta35573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35572.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t35572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t35572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35574){
var self__ = this;
var _35574__$1 = this;
return self__.meta35573;
});

cljs.core.async.t35572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35574,meta35573__$1){
var self__ = this;
var _35574__$1 = this;
return (new cljs.core.async.t35572(self__.cb,self__.flag,self__.alt_handler,meta35573__$1));
});

cljs.core.async.t35572.cljs$lang$type = true;

cljs.core.async.t35572.cljs$lang$ctorStr = "cljs.core.async/t35572";

cljs.core.async.t35572.cljs$lang$ctorPrWriter = (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cljs.core.async/t35572");
});

cljs.core.async.__GT_t35572 = (function cljs$core$async$alt_handler_$___GT_t35572(cb__$1,flag__$1,alt_handler__$1,meta35573){
return (new cljs.core.async.t35572(cb__$1,flag__$1,alt_handler__$1,meta35573));
});

}

return (new cljs.core.async.t35572(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35575_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35575_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35576_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35576_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25686__auto__ = wport;
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35577 = (i + (1));
i = G__35577;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25686__auto__ = ret;
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__25674__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25674__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25674__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__26726__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26726__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35580){
var map__35581 = p__35580;
var map__35581__$1 = ((cljs.core.seq_QMARK_.call(null,map__35581))?cljs.core.apply.call(null,cljs.core.hash_map,map__35581):map__35581);
var opts = map__35581__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35578){
var G__35579 = cljs.core.first.call(null,seq35578);
var seq35578__$1 = cljs.core.next.call(null,seq35578);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35579,seq35578__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__35583 = arguments.length;
switch (G__35583) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28954__auto___35632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___35632){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___35632){
return (function (state_35607){
var state_val_35608 = (state_35607[(1)]);
if((state_val_35608 === (7))){
var inst_35603 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35609_35633 = state_35607__$1;
(statearr_35609_35633[(2)] = inst_35603);

(statearr_35609_35633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (1))){
var state_35607__$1 = state_35607;
var statearr_35610_35634 = state_35607__$1;
(statearr_35610_35634[(2)] = null);

(statearr_35610_35634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (4))){
var inst_35586 = (state_35607[(7)]);
var inst_35586__$1 = (state_35607[(2)]);
var inst_35587 = (inst_35586__$1 == null);
var state_35607__$1 = (function (){var statearr_35611 = state_35607;
(statearr_35611[(7)] = inst_35586__$1);

return statearr_35611;
})();
if(cljs.core.truth_(inst_35587)){
var statearr_35612_35635 = state_35607__$1;
(statearr_35612_35635[(1)] = (5));

} else {
var statearr_35613_35636 = state_35607__$1;
(statearr_35613_35636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (13))){
var state_35607__$1 = state_35607;
var statearr_35614_35637 = state_35607__$1;
(statearr_35614_35637[(2)] = null);

(statearr_35614_35637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (6))){
var inst_35586 = (state_35607[(7)]);
var state_35607__$1 = state_35607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35607__$1,(11),to,inst_35586);
} else {
if((state_val_35608 === (3))){
var inst_35605 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35607__$1,inst_35605);
} else {
if((state_val_35608 === (12))){
var state_35607__$1 = state_35607;
var statearr_35615_35638 = state_35607__$1;
(statearr_35615_35638[(2)] = null);

(statearr_35615_35638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (2))){
var state_35607__$1 = state_35607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35607__$1,(4),from);
} else {
if((state_val_35608 === (11))){
var inst_35596 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
if(cljs.core.truth_(inst_35596)){
var statearr_35616_35639 = state_35607__$1;
(statearr_35616_35639[(1)] = (12));

} else {
var statearr_35617_35640 = state_35607__$1;
(statearr_35617_35640[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (9))){
var state_35607__$1 = state_35607;
var statearr_35618_35641 = state_35607__$1;
(statearr_35618_35641[(2)] = null);

(statearr_35618_35641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (5))){
var state_35607__$1 = state_35607;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35619_35642 = state_35607__$1;
(statearr_35619_35642[(1)] = (8));

} else {
var statearr_35620_35643 = state_35607__$1;
(statearr_35620_35643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (14))){
var inst_35601 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35621_35644 = state_35607__$1;
(statearr_35621_35644[(2)] = inst_35601);

(statearr_35621_35644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (10))){
var inst_35593 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35622_35645 = state_35607__$1;
(statearr_35622_35645[(2)] = inst_35593);

(statearr_35622_35645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (8))){
var inst_35590 = cljs.core.async.close_BANG_.call(null,to);
var state_35607__$1 = state_35607;
var statearr_35623_35646 = state_35607__$1;
(statearr_35623_35646[(2)] = inst_35590);

(statearr_35623_35646[(1)] = (10));


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
});})(c__28954__auto___35632))
;
return ((function (switch__28892__auto__,c__28954__auto___35632){
return (function() {
var cljs$core$async$state_machine__28893__auto__ = null;
var cljs$core$async$state_machine__28893__auto____0 = (function (){
var statearr_35627 = [null,null,null,null,null,null,null,null];
(statearr_35627[(0)] = cljs$core$async$state_machine__28893__auto__);

(statearr_35627[(1)] = (1));

return statearr_35627;
});
var cljs$core$async$state_machine__28893__auto____1 = (function (state_35607){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_35607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e35628){if((e35628 instanceof Object)){
var ex__28896__auto__ = e35628;
var statearr_35629_35647 = state_35607;
(statearr_35629_35647[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35648 = state_35607;
state_35607 = G__35648;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$state_machine__28893__auto__ = function(state_35607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28893__auto____1.call(this,state_35607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28893__auto____0;
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28893__auto____1;
return cljs$core$async$state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___35632))
})();
var state__28956__auto__ = (function (){var statearr_35630 = f__28955__auto__.call(null);
(statearr_35630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___35632);

return statearr_35630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___35632))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__35832){
var vec__35833 = p__35832;
var v = cljs.core.nth.call(null,vec__35833,(0),null);
var p = cljs.core.nth.call(null,vec__35833,(1),null);
var job = vec__35833;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28954__auto___36015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___36015,res,vec__35833,v,p,job,jobs,results){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___36015,res,vec__35833,v,p,job,jobs,results){
return (function (state_35838){
var state_val_35839 = (state_35838[(1)]);
if((state_val_35839 === (2))){
var inst_35835 = (state_35838[(2)]);
var inst_35836 = cljs.core.async.close_BANG_.call(null,res);
var state_35838__$1 = (function (){var statearr_35840 = state_35838;
(statearr_35840[(7)] = inst_35835);

return statearr_35840;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35838__$1,inst_35836);
} else {
if((state_val_35839 === (1))){
var state_35838__$1 = state_35838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35838__$1,(2),res,v);
} else {
return null;
}
}
});})(c__28954__auto___36015,res,vec__35833,v,p,job,jobs,results))
;
return ((function (switch__28892__auto__,c__28954__auto___36015,res,vec__35833,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____0 = (function (){
var statearr_35844 = [null,null,null,null,null,null,null,null];
(statearr_35844[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__);

(statearr_35844[(1)] = (1));

return statearr_35844;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____1 = (function (state_35838){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_35838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e35845){if((e35845 instanceof Object)){
var ex__28896__auto__ = e35845;
var statearr_35846_36016 = state_35838;
(statearr_35846_36016[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36017 = state_35838;
state_35838 = G__36017;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__ = function(state_35838){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____1.call(this,state_35838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___36015,res,vec__35833,v,p,job,jobs,results))
})();
var state__28956__auto__ = (function (){var statearr_35847 = f__28955__auto__.call(null);
(statearr_35847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___36015);

return statearr_35847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___36015,res,vec__35833,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35848){
var vec__35849 = p__35848;
var v = cljs.core.nth.call(null,vec__35849,(0),null);
var p = cljs.core.nth.call(null,vec__35849,(1),null);
var job = vec__35849;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26571__auto___36018 = n;
var __36019 = (0);
while(true){
if((__36019 < n__26571__auto___36018)){
var G__35850_36020 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35850_36020) {
case "async":
var c__28954__auto___36022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36019,c__28954__auto___36022,G__35850_36020,n__26571__auto___36018,jobs,results,process,async){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (__36019,c__28954__auto___36022,G__35850_36020,n__26571__auto___36018,jobs,results,process,async){
return (function (state_35863){
var state_val_35864 = (state_35863[(1)]);
if((state_val_35864 === (7))){
var inst_35859 = (state_35863[(2)]);
var state_35863__$1 = state_35863;
var statearr_35865_36023 = state_35863__$1;
(statearr_35865_36023[(2)] = inst_35859);

(statearr_35865_36023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35864 === (6))){
var state_35863__$1 = state_35863;
var statearr_35866_36024 = state_35863__$1;
(statearr_35866_36024[(2)] = null);

(statearr_35866_36024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35864 === (5))){
var state_35863__$1 = state_35863;
var statearr_35867_36025 = state_35863__$1;
(statearr_35867_36025[(2)] = null);

(statearr_35867_36025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35864 === (4))){
var inst_35853 = (state_35863[(2)]);
var inst_35854 = async.call(null,inst_35853);
var state_35863__$1 = state_35863;
if(cljs.core.truth_(inst_35854)){
var statearr_35868_36026 = state_35863__$1;
(statearr_35868_36026[(1)] = (5));

} else {
var statearr_35869_36027 = state_35863__$1;
(statearr_35869_36027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35864 === (3))){
var inst_35861 = (state_35863[(2)]);
var state_35863__$1 = state_35863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35863__$1,inst_35861);
} else {
if((state_val_35864 === (2))){
var state_35863__$1 = state_35863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35863__$1,(4),jobs);
} else {
if((state_val_35864 === (1))){
var state_35863__$1 = state_35863;
var statearr_35870_36028 = state_35863__$1;
(statearr_35870_36028[(2)] = null);

(statearr_35870_36028[(1)] = (2));


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
});})(__36019,c__28954__auto___36022,G__35850_36020,n__26571__auto___36018,jobs,results,process,async))
;
return ((function (__36019,switch__28892__auto__,c__28954__auto___36022,G__35850_36020,n__26571__auto___36018,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____0 = (function (){
var statearr_35874 = [null,null,null,null,null,null,null];
(statearr_35874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__);

(statearr_35874[(1)] = (1));

return statearr_35874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____1 = (function (state_35863){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_35863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e35875){if((e35875 instanceof Object)){
var ex__28896__auto__ = e35875;
var statearr_35876_36029 = state_35863;
(statearr_35876_36029[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36030 = state_35863;
state_35863 = G__36030;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__ = function(state_35863){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____1.call(this,state_35863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__;
})()
;})(__36019,switch__28892__auto__,c__28954__auto___36022,G__35850_36020,n__26571__auto___36018,jobs,results,process,async))
})();
var state__28956__auto__ = (function (){var statearr_35877 = f__28955__auto__.call(null);
(statearr_35877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___36022);

return statearr_35877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(__36019,c__28954__auto___36022,G__35850_36020,n__26571__auto___36018,jobs,results,process,async))
);


break;
case "compute":
var c__28954__auto___36031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36019,c__28954__auto___36031,G__35850_36020,n__26571__auto___36018,jobs,results,process,async){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (__36019,c__28954__auto___36031,G__35850_36020,n__26571__auto___36018,jobs,results,process,async){
return (function (state_35890){
var state_val_35891 = (state_35890[(1)]);
if((state_val_35891 === (7))){
var inst_35886 = (state_35890[(2)]);
var state_35890__$1 = state_35890;
var statearr_35892_36032 = state_35890__$1;
(statearr_35892_36032[(2)] = inst_35886);

(statearr_35892_36032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35891 === (6))){
var state_35890__$1 = state_35890;
var statearr_35893_36033 = state_35890__$1;
(statearr_35893_36033[(2)] = null);

(statearr_35893_36033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35891 === (5))){
var state_35890__$1 = state_35890;
var statearr_35894_36034 = state_35890__$1;
(statearr_35894_36034[(2)] = null);

(statearr_35894_36034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35891 === (4))){
var inst_35880 = (state_35890[(2)]);
var inst_35881 = process.call(null,inst_35880);
var state_35890__$1 = state_35890;
if(cljs.core.truth_(inst_35881)){
var statearr_35895_36035 = state_35890__$1;
(statearr_35895_36035[(1)] = (5));

} else {
var statearr_35896_36036 = state_35890__$1;
(statearr_35896_36036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35891 === (3))){
var inst_35888 = (state_35890[(2)]);
var state_35890__$1 = state_35890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35890__$1,inst_35888);
} else {
if((state_val_35891 === (2))){
var state_35890__$1 = state_35890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35890__$1,(4),jobs);
} else {
if((state_val_35891 === (1))){
var state_35890__$1 = state_35890;
var statearr_35897_36037 = state_35890__$1;
(statearr_35897_36037[(2)] = null);

(statearr_35897_36037[(1)] = (2));


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
});})(__36019,c__28954__auto___36031,G__35850_36020,n__26571__auto___36018,jobs,results,process,async))
;
return ((function (__36019,switch__28892__auto__,c__28954__auto___36031,G__35850_36020,n__26571__auto___36018,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____0 = (function (){
var statearr_35901 = [null,null,null,null,null,null,null];
(statearr_35901[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__);

(statearr_35901[(1)] = (1));

return statearr_35901;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____1 = (function (state_35890){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_35890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e35902){if((e35902 instanceof Object)){
var ex__28896__auto__ = e35902;
var statearr_35903_36038 = state_35890;
(statearr_35903_36038[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36039 = state_35890;
state_35890 = G__36039;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__ = function(state_35890){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____1.call(this,state_35890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__;
})()
;})(__36019,switch__28892__auto__,c__28954__auto___36031,G__35850_36020,n__26571__auto___36018,jobs,results,process,async))
})();
var state__28956__auto__ = (function (){var statearr_35904 = f__28955__auto__.call(null);
(statearr_35904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___36031);

return statearr_35904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(__36019,c__28954__auto___36031,G__35850_36020,n__26571__auto___36018,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36040 = (__36019 + (1));
__36019 = G__36040;
continue;
} else {
}
break;
}

var c__28954__auto___36041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___36041,jobs,results,process,async){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___36041,jobs,results,process,async){
return (function (state_35926){
var state_val_35927 = (state_35926[(1)]);
if((state_val_35927 === (9))){
var inst_35919 = (state_35926[(2)]);
var state_35926__$1 = (function (){var statearr_35928 = state_35926;
(statearr_35928[(7)] = inst_35919);

return statearr_35928;
})();
var statearr_35929_36042 = state_35926__$1;
(statearr_35929_36042[(2)] = null);

(statearr_35929_36042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35927 === (8))){
var inst_35912 = (state_35926[(8)]);
var inst_35917 = (state_35926[(2)]);
var state_35926__$1 = (function (){var statearr_35930 = state_35926;
(statearr_35930[(9)] = inst_35917);

return statearr_35930;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35926__$1,(9),results,inst_35912);
} else {
if((state_val_35927 === (7))){
var inst_35922 = (state_35926[(2)]);
var state_35926__$1 = state_35926;
var statearr_35931_36043 = state_35926__$1;
(statearr_35931_36043[(2)] = inst_35922);

(statearr_35931_36043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35927 === (6))){
var inst_35912 = (state_35926[(8)]);
var inst_35907 = (state_35926[(10)]);
var inst_35912__$1 = cljs.core.async.chan.call(null,(1));
var inst_35913 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35914 = [inst_35907,inst_35912__$1];
var inst_35915 = (new cljs.core.PersistentVector(null,2,(5),inst_35913,inst_35914,null));
var state_35926__$1 = (function (){var statearr_35932 = state_35926;
(statearr_35932[(8)] = inst_35912__$1);

return statearr_35932;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35926__$1,(8),jobs,inst_35915);
} else {
if((state_val_35927 === (5))){
var inst_35910 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35926__$1 = state_35926;
var statearr_35933_36044 = state_35926__$1;
(statearr_35933_36044[(2)] = inst_35910);

(statearr_35933_36044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35927 === (4))){
var inst_35907 = (state_35926[(10)]);
var inst_35907__$1 = (state_35926[(2)]);
var inst_35908 = (inst_35907__$1 == null);
var state_35926__$1 = (function (){var statearr_35934 = state_35926;
(statearr_35934[(10)] = inst_35907__$1);

return statearr_35934;
})();
if(cljs.core.truth_(inst_35908)){
var statearr_35935_36045 = state_35926__$1;
(statearr_35935_36045[(1)] = (5));

} else {
var statearr_35936_36046 = state_35926__$1;
(statearr_35936_36046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35927 === (3))){
var inst_35924 = (state_35926[(2)]);
var state_35926__$1 = state_35926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35926__$1,inst_35924);
} else {
if((state_val_35927 === (2))){
var state_35926__$1 = state_35926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35926__$1,(4),from);
} else {
if((state_val_35927 === (1))){
var state_35926__$1 = state_35926;
var statearr_35937_36047 = state_35926__$1;
(statearr_35937_36047[(2)] = null);

(statearr_35937_36047[(1)] = (2));


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
});})(c__28954__auto___36041,jobs,results,process,async))
;
return ((function (switch__28892__auto__,c__28954__auto___36041,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____0 = (function (){
var statearr_35941 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__);

(statearr_35941[(1)] = (1));

return statearr_35941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____1 = (function (state_35926){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_35926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e35942){if((e35942 instanceof Object)){
var ex__28896__auto__ = e35942;
var statearr_35943_36048 = state_35926;
(statearr_35943_36048[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36049 = state_35926;
state_35926 = G__36049;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__ = function(state_35926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____1.call(this,state_35926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___36041,jobs,results,process,async))
})();
var state__28956__auto__ = (function (){var statearr_35944 = f__28955__auto__.call(null);
(statearr_35944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___36041);

return statearr_35944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___36041,jobs,results,process,async))
);


var c__28954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto__,jobs,results,process,async){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto__,jobs,results,process,async){
return (function (state_35982){
var state_val_35983 = (state_35982[(1)]);
if((state_val_35983 === (7))){
var inst_35978 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
var statearr_35984_36050 = state_35982__$1;
(statearr_35984_36050[(2)] = inst_35978);

(statearr_35984_36050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (20))){
var state_35982__$1 = state_35982;
var statearr_35985_36051 = state_35982__$1;
(statearr_35985_36051[(2)] = null);

(statearr_35985_36051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (1))){
var state_35982__$1 = state_35982;
var statearr_35986_36052 = state_35982__$1;
(statearr_35986_36052[(2)] = null);

(statearr_35986_36052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (4))){
var inst_35947 = (state_35982[(7)]);
var inst_35947__$1 = (state_35982[(2)]);
var inst_35948 = (inst_35947__$1 == null);
var state_35982__$1 = (function (){var statearr_35987 = state_35982;
(statearr_35987[(7)] = inst_35947__$1);

return statearr_35987;
})();
if(cljs.core.truth_(inst_35948)){
var statearr_35988_36053 = state_35982__$1;
(statearr_35988_36053[(1)] = (5));

} else {
var statearr_35989_36054 = state_35982__$1;
(statearr_35989_36054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (15))){
var inst_35960 = (state_35982[(8)]);
var state_35982__$1 = state_35982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35982__$1,(18),to,inst_35960);
} else {
if((state_val_35983 === (21))){
var inst_35973 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
var statearr_35990_36055 = state_35982__$1;
(statearr_35990_36055[(2)] = inst_35973);

(statearr_35990_36055[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (13))){
var inst_35975 = (state_35982[(2)]);
var state_35982__$1 = (function (){var statearr_35991 = state_35982;
(statearr_35991[(9)] = inst_35975);

return statearr_35991;
})();
var statearr_35992_36056 = state_35982__$1;
(statearr_35992_36056[(2)] = null);

(statearr_35992_36056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (6))){
var inst_35947 = (state_35982[(7)]);
var state_35982__$1 = state_35982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35982__$1,(11),inst_35947);
} else {
if((state_val_35983 === (17))){
var inst_35968 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
if(cljs.core.truth_(inst_35968)){
var statearr_35993_36057 = state_35982__$1;
(statearr_35993_36057[(1)] = (19));

} else {
var statearr_35994_36058 = state_35982__$1;
(statearr_35994_36058[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (3))){
var inst_35980 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35982__$1,inst_35980);
} else {
if((state_val_35983 === (12))){
var inst_35957 = (state_35982[(10)]);
var state_35982__$1 = state_35982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35982__$1,(14),inst_35957);
} else {
if((state_val_35983 === (2))){
var state_35982__$1 = state_35982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35982__$1,(4),results);
} else {
if((state_val_35983 === (19))){
var state_35982__$1 = state_35982;
var statearr_35995_36059 = state_35982__$1;
(statearr_35995_36059[(2)] = null);

(statearr_35995_36059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (11))){
var inst_35957 = (state_35982[(2)]);
var state_35982__$1 = (function (){var statearr_35996 = state_35982;
(statearr_35996[(10)] = inst_35957);

return statearr_35996;
})();
var statearr_35997_36060 = state_35982__$1;
(statearr_35997_36060[(2)] = null);

(statearr_35997_36060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (9))){
var state_35982__$1 = state_35982;
var statearr_35998_36061 = state_35982__$1;
(statearr_35998_36061[(2)] = null);

(statearr_35998_36061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (5))){
var state_35982__$1 = state_35982;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35999_36062 = state_35982__$1;
(statearr_35999_36062[(1)] = (8));

} else {
var statearr_36000_36063 = state_35982__$1;
(statearr_36000_36063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (14))){
var inst_35960 = (state_35982[(8)]);
var inst_35962 = (state_35982[(11)]);
var inst_35960__$1 = (state_35982[(2)]);
var inst_35961 = (inst_35960__$1 == null);
var inst_35962__$1 = cljs.core.not.call(null,inst_35961);
var state_35982__$1 = (function (){var statearr_36001 = state_35982;
(statearr_36001[(8)] = inst_35960__$1);

(statearr_36001[(11)] = inst_35962__$1);

return statearr_36001;
})();
if(inst_35962__$1){
var statearr_36002_36064 = state_35982__$1;
(statearr_36002_36064[(1)] = (15));

} else {
var statearr_36003_36065 = state_35982__$1;
(statearr_36003_36065[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (16))){
var inst_35962 = (state_35982[(11)]);
var state_35982__$1 = state_35982;
var statearr_36004_36066 = state_35982__$1;
(statearr_36004_36066[(2)] = inst_35962);

(statearr_36004_36066[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (10))){
var inst_35954 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
var statearr_36005_36067 = state_35982__$1;
(statearr_36005_36067[(2)] = inst_35954);

(statearr_36005_36067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (18))){
var inst_35965 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
var statearr_36006_36068 = state_35982__$1;
(statearr_36006_36068[(2)] = inst_35965);

(statearr_36006_36068[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (8))){
var inst_35951 = cljs.core.async.close_BANG_.call(null,to);
var state_35982__$1 = state_35982;
var statearr_36007_36069 = state_35982__$1;
(statearr_36007_36069[(2)] = inst_35951);

(statearr_36007_36069[(1)] = (10));


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
});})(c__28954__auto__,jobs,results,process,async))
;
return ((function (switch__28892__auto__,c__28954__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____0 = (function (){
var statearr_36011 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36011[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__);

(statearr_36011[(1)] = (1));

return statearr_36011;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____1 = (function (state_35982){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_35982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e36012){if((e36012 instanceof Object)){
var ex__28896__auto__ = e36012;
var statearr_36013_36070 = state_35982;
(statearr_36013_36070[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36071 = state_35982;
state_35982 = G__36071;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__ = function(state_35982){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____1.call(this,state_35982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto__,jobs,results,process,async))
})();
var state__28956__auto__ = (function (){var statearr_36014 = f__28955__auto__.call(null);
(statearr_36014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto__);

return statearr_36014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto__,jobs,results,process,async))
);

return c__28954__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__36073 = arguments.length;
switch (G__36073) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__36076 = arguments.length;
switch (G__36076) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__36079 = arguments.length;
switch (G__36079) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28954__auto___36131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___36131,tc,fc){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___36131,tc,fc){
return (function (state_36105){
var state_val_36106 = (state_36105[(1)]);
if((state_val_36106 === (7))){
var inst_36101 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36107_36132 = state_36105__$1;
(statearr_36107_36132[(2)] = inst_36101);

(statearr_36107_36132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (1))){
var state_36105__$1 = state_36105;
var statearr_36108_36133 = state_36105__$1;
(statearr_36108_36133[(2)] = null);

(statearr_36108_36133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (4))){
var inst_36082 = (state_36105[(7)]);
var inst_36082__$1 = (state_36105[(2)]);
var inst_36083 = (inst_36082__$1 == null);
var state_36105__$1 = (function (){var statearr_36109 = state_36105;
(statearr_36109[(7)] = inst_36082__$1);

return statearr_36109;
})();
if(cljs.core.truth_(inst_36083)){
var statearr_36110_36134 = state_36105__$1;
(statearr_36110_36134[(1)] = (5));

} else {
var statearr_36111_36135 = state_36105__$1;
(statearr_36111_36135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (13))){
var state_36105__$1 = state_36105;
var statearr_36112_36136 = state_36105__$1;
(statearr_36112_36136[(2)] = null);

(statearr_36112_36136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (6))){
var inst_36082 = (state_36105[(7)]);
var inst_36088 = p.call(null,inst_36082);
var state_36105__$1 = state_36105;
if(cljs.core.truth_(inst_36088)){
var statearr_36113_36137 = state_36105__$1;
(statearr_36113_36137[(1)] = (9));

} else {
var statearr_36114_36138 = state_36105__$1;
(statearr_36114_36138[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (3))){
var inst_36103 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36105__$1,inst_36103);
} else {
if((state_val_36106 === (12))){
var state_36105__$1 = state_36105;
var statearr_36115_36139 = state_36105__$1;
(statearr_36115_36139[(2)] = null);

(statearr_36115_36139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (2))){
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36105__$1,(4),ch);
} else {
if((state_val_36106 === (11))){
var inst_36082 = (state_36105[(7)]);
var inst_36092 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36105__$1,(8),inst_36092,inst_36082);
} else {
if((state_val_36106 === (9))){
var state_36105__$1 = state_36105;
var statearr_36116_36140 = state_36105__$1;
(statearr_36116_36140[(2)] = tc);

(statearr_36116_36140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (5))){
var inst_36085 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36086 = cljs.core.async.close_BANG_.call(null,fc);
var state_36105__$1 = (function (){var statearr_36117 = state_36105;
(statearr_36117[(8)] = inst_36085);

return statearr_36117;
})();
var statearr_36118_36141 = state_36105__$1;
(statearr_36118_36141[(2)] = inst_36086);

(statearr_36118_36141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (14))){
var inst_36099 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36119_36142 = state_36105__$1;
(statearr_36119_36142[(2)] = inst_36099);

(statearr_36119_36142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (10))){
var state_36105__$1 = state_36105;
var statearr_36120_36143 = state_36105__$1;
(statearr_36120_36143[(2)] = fc);

(statearr_36120_36143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (8))){
var inst_36094 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
if(cljs.core.truth_(inst_36094)){
var statearr_36121_36144 = state_36105__$1;
(statearr_36121_36144[(1)] = (12));

} else {
var statearr_36122_36145 = state_36105__$1;
(statearr_36122_36145[(1)] = (13));

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
});})(c__28954__auto___36131,tc,fc))
;
return ((function (switch__28892__auto__,c__28954__auto___36131,tc,fc){
return (function() {
var cljs$core$async$state_machine__28893__auto__ = null;
var cljs$core$async$state_machine__28893__auto____0 = (function (){
var statearr_36126 = [null,null,null,null,null,null,null,null,null];
(statearr_36126[(0)] = cljs$core$async$state_machine__28893__auto__);

(statearr_36126[(1)] = (1));

return statearr_36126;
});
var cljs$core$async$state_machine__28893__auto____1 = (function (state_36105){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_36105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e36127){if((e36127 instanceof Object)){
var ex__28896__auto__ = e36127;
var statearr_36128_36146 = state_36105;
(statearr_36128_36146[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36147 = state_36105;
state_36105 = G__36147;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$state_machine__28893__auto__ = function(state_36105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28893__auto____1.call(this,state_36105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28893__auto____0;
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28893__auto____1;
return cljs$core$async$state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___36131,tc,fc))
})();
var state__28956__auto__ = (function (){var statearr_36129 = f__28955__auto__.call(null);
(statearr_36129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___36131);

return statearr_36129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___36131,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto__){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto__){
return (function (state_36194){
var state_val_36195 = (state_36194[(1)]);
if((state_val_36195 === (7))){
var inst_36190 = (state_36194[(2)]);
var state_36194__$1 = state_36194;
var statearr_36196_36212 = state_36194__$1;
(statearr_36196_36212[(2)] = inst_36190);

(statearr_36196_36212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (6))){
var inst_36180 = (state_36194[(7)]);
var inst_36183 = (state_36194[(8)]);
var inst_36187 = f.call(null,inst_36180,inst_36183);
var inst_36180__$1 = inst_36187;
var state_36194__$1 = (function (){var statearr_36197 = state_36194;
(statearr_36197[(7)] = inst_36180__$1);

return statearr_36197;
})();
var statearr_36198_36213 = state_36194__$1;
(statearr_36198_36213[(2)] = null);

(statearr_36198_36213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (5))){
var inst_36180 = (state_36194[(7)]);
var state_36194__$1 = state_36194;
var statearr_36199_36214 = state_36194__$1;
(statearr_36199_36214[(2)] = inst_36180);

(statearr_36199_36214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (4))){
var inst_36183 = (state_36194[(8)]);
var inst_36183__$1 = (state_36194[(2)]);
var inst_36184 = (inst_36183__$1 == null);
var state_36194__$1 = (function (){var statearr_36200 = state_36194;
(statearr_36200[(8)] = inst_36183__$1);

return statearr_36200;
})();
if(cljs.core.truth_(inst_36184)){
var statearr_36201_36215 = state_36194__$1;
(statearr_36201_36215[(1)] = (5));

} else {
var statearr_36202_36216 = state_36194__$1;
(statearr_36202_36216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (3))){
var inst_36192 = (state_36194[(2)]);
var state_36194__$1 = state_36194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36194__$1,inst_36192);
} else {
if((state_val_36195 === (2))){
var state_36194__$1 = state_36194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36194__$1,(4),ch);
} else {
if((state_val_36195 === (1))){
var inst_36180 = init;
var state_36194__$1 = (function (){var statearr_36203 = state_36194;
(statearr_36203[(7)] = inst_36180);

return statearr_36203;
})();
var statearr_36204_36217 = state_36194__$1;
(statearr_36204_36217[(2)] = null);

(statearr_36204_36217[(1)] = (2));


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
});})(c__28954__auto__))
;
return ((function (switch__28892__auto__,c__28954__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28893__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28893__auto____0 = (function (){
var statearr_36208 = [null,null,null,null,null,null,null,null,null];
(statearr_36208[(0)] = cljs$core$async$reduce_$_state_machine__28893__auto__);

(statearr_36208[(1)] = (1));

return statearr_36208;
});
var cljs$core$async$reduce_$_state_machine__28893__auto____1 = (function (state_36194){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_36194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e36209){if((e36209 instanceof Object)){
var ex__28896__auto__ = e36209;
var statearr_36210_36218 = state_36194;
(statearr_36210_36218[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36219 = state_36194;
state_36194 = G__36219;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28893__auto__ = function(state_36194){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28893__auto____1.call(this,state_36194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28893__auto____0;
cljs$core$async$reduce_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28893__auto____1;
return cljs$core$async$reduce_$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto__))
})();
var state__28956__auto__ = (function (){var statearr_36211 = f__28955__auto__.call(null);
(statearr_36211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto__);

return statearr_36211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto__))
);

return c__28954__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__36221 = arguments.length;
switch (G__36221) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto__){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto__){
return (function (state_36246){
var state_val_36247 = (state_36246[(1)]);
if((state_val_36247 === (7))){
var inst_36228 = (state_36246[(2)]);
var state_36246__$1 = state_36246;
var statearr_36248_36272 = state_36246__$1;
(statearr_36248_36272[(2)] = inst_36228);

(statearr_36248_36272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (1))){
var inst_36222 = cljs.core.seq.call(null,coll);
var inst_36223 = inst_36222;
var state_36246__$1 = (function (){var statearr_36249 = state_36246;
(statearr_36249[(7)] = inst_36223);

return statearr_36249;
})();
var statearr_36250_36273 = state_36246__$1;
(statearr_36250_36273[(2)] = null);

(statearr_36250_36273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (4))){
var inst_36223 = (state_36246[(7)]);
var inst_36226 = cljs.core.first.call(null,inst_36223);
var state_36246__$1 = state_36246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36246__$1,(7),ch,inst_36226);
} else {
if((state_val_36247 === (13))){
var inst_36240 = (state_36246[(2)]);
var state_36246__$1 = state_36246;
var statearr_36251_36274 = state_36246__$1;
(statearr_36251_36274[(2)] = inst_36240);

(statearr_36251_36274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (6))){
var inst_36231 = (state_36246[(2)]);
var state_36246__$1 = state_36246;
if(cljs.core.truth_(inst_36231)){
var statearr_36252_36275 = state_36246__$1;
(statearr_36252_36275[(1)] = (8));

} else {
var statearr_36253_36276 = state_36246__$1;
(statearr_36253_36276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (3))){
var inst_36244 = (state_36246[(2)]);
var state_36246__$1 = state_36246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36246__$1,inst_36244);
} else {
if((state_val_36247 === (12))){
var state_36246__$1 = state_36246;
var statearr_36254_36277 = state_36246__$1;
(statearr_36254_36277[(2)] = null);

(statearr_36254_36277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (2))){
var inst_36223 = (state_36246[(7)]);
var state_36246__$1 = state_36246;
if(cljs.core.truth_(inst_36223)){
var statearr_36255_36278 = state_36246__$1;
(statearr_36255_36278[(1)] = (4));

} else {
var statearr_36256_36279 = state_36246__$1;
(statearr_36256_36279[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (11))){
var inst_36237 = cljs.core.async.close_BANG_.call(null,ch);
var state_36246__$1 = state_36246;
var statearr_36257_36280 = state_36246__$1;
(statearr_36257_36280[(2)] = inst_36237);

(statearr_36257_36280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (9))){
var state_36246__$1 = state_36246;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36258_36281 = state_36246__$1;
(statearr_36258_36281[(1)] = (11));

} else {
var statearr_36259_36282 = state_36246__$1;
(statearr_36259_36282[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (5))){
var inst_36223 = (state_36246[(7)]);
var state_36246__$1 = state_36246;
var statearr_36260_36283 = state_36246__$1;
(statearr_36260_36283[(2)] = inst_36223);

(statearr_36260_36283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (10))){
var inst_36242 = (state_36246[(2)]);
var state_36246__$1 = state_36246;
var statearr_36261_36284 = state_36246__$1;
(statearr_36261_36284[(2)] = inst_36242);

(statearr_36261_36284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (8))){
var inst_36223 = (state_36246[(7)]);
var inst_36233 = cljs.core.next.call(null,inst_36223);
var inst_36223__$1 = inst_36233;
var state_36246__$1 = (function (){var statearr_36262 = state_36246;
(statearr_36262[(7)] = inst_36223__$1);

return statearr_36262;
})();
var statearr_36263_36285 = state_36246__$1;
(statearr_36263_36285[(2)] = null);

(statearr_36263_36285[(1)] = (2));


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
});})(c__28954__auto__))
;
return ((function (switch__28892__auto__,c__28954__auto__){
return (function() {
var cljs$core$async$state_machine__28893__auto__ = null;
var cljs$core$async$state_machine__28893__auto____0 = (function (){
var statearr_36267 = [null,null,null,null,null,null,null,null];
(statearr_36267[(0)] = cljs$core$async$state_machine__28893__auto__);

(statearr_36267[(1)] = (1));

return statearr_36267;
});
var cljs$core$async$state_machine__28893__auto____1 = (function (state_36246){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_36246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e36268){if((e36268 instanceof Object)){
var ex__28896__auto__ = e36268;
var statearr_36269_36286 = state_36246;
(statearr_36269_36286[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36287 = state_36246;
state_36246 = G__36287;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$state_machine__28893__auto__ = function(state_36246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28893__auto____1.call(this,state_36246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28893__auto____0;
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28893__auto____1;
return cljs$core$async$state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto__))
})();
var state__28956__auto__ = (function (){var statearr_36270 = f__28955__auto__.call(null);
(statearr_36270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto__);

return statearr_36270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto__))
);

return c__28954__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj36289 = {};
return obj36289;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__25674__auto__ = _;
if(and__25674__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__25674__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26322__auto__ = (((_ == null))?null:_);
return (function (){var or__25686__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26322__auto__)]);
if(or__25686__auto__){
return or__25686__auto__;
} else {
var or__25686__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__25686__auto____$1){
return or__25686__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj36291 = {};
return obj36291;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__25674__auto__ = m;
if(and__25674__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__25674__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26322__auto__ = (((m == null))?null:m);
return (function (){var or__25686__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26322__auto__)]);
if(or__25686__auto__){
return or__25686__auto__;
} else {
var or__25686__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__25686__auto____$1){
return or__25686__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__25674__auto__ = m;
if(and__25674__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__25674__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26322__auto__ = (((m == null))?null:m);
return (function (){var or__25686__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26322__auto__)]);
if(or__25686__auto__){
return or__25686__auto__;
} else {
var or__25686__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__25686__auto____$1){
return or__25686__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__25674__auto__ = m;
if(and__25674__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__25674__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26322__auto__ = (((m == null))?null:m);
return (function (){var or__25686__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26322__auto__)]);
if(or__25686__auto__){
return or__25686__auto__;
} else {
var or__25686__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__25686__auto____$1){
return or__25686__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t36513 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36513 = (function (cs,ch,mult,meta36514){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta36514 = meta36514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36513.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t36513.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t36513.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t36513.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t36513.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36513.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t36513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36515){
var self__ = this;
var _36515__$1 = this;
return self__.meta36514;
});})(cs))
;

cljs.core.async.t36513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36515,meta36514__$1){
var self__ = this;
var _36515__$1 = this;
return (new cljs.core.async.t36513(self__.cs,self__.ch,self__.mult,meta36514__$1));
});})(cs))
;

cljs.core.async.t36513.cljs$lang$type = true;

cljs.core.async.t36513.cljs$lang$ctorStr = "cljs.core.async/t36513";

cljs.core.async.t36513.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cljs.core.async/t36513");
});})(cs))
;

cljs.core.async.__GT_t36513 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t36513(cs__$1,ch__$1,mult__$1,meta36514){
return (new cljs.core.async.t36513(cs__$1,ch__$1,mult__$1,meta36514));
});})(cs))
;

}

return (new cljs.core.async.t36513(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28954__auto___36734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___36734,cs,m,dchan,dctr,done){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___36734,cs,m,dchan,dctr,done){
return (function (state_36646){
var state_val_36647 = (state_36646[(1)]);
if((state_val_36647 === (7))){
var inst_36642 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
var statearr_36648_36735 = state_36646__$1;
(statearr_36648_36735[(2)] = inst_36642);

(statearr_36648_36735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (20))){
var inst_36547 = (state_36646[(7)]);
var inst_36557 = cljs.core.first.call(null,inst_36547);
var inst_36558 = cljs.core.nth.call(null,inst_36557,(0),null);
var inst_36559 = cljs.core.nth.call(null,inst_36557,(1),null);
var state_36646__$1 = (function (){var statearr_36649 = state_36646;
(statearr_36649[(8)] = inst_36558);

return statearr_36649;
})();
if(cljs.core.truth_(inst_36559)){
var statearr_36650_36736 = state_36646__$1;
(statearr_36650_36736[(1)] = (22));

} else {
var statearr_36651_36737 = state_36646__$1;
(statearr_36651_36737[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (27))){
var inst_36518 = (state_36646[(9)]);
var inst_36594 = (state_36646[(10)]);
var inst_36589 = (state_36646[(11)]);
var inst_36587 = (state_36646[(12)]);
var inst_36594__$1 = cljs.core._nth.call(null,inst_36587,inst_36589);
var inst_36595 = cljs.core.async.put_BANG_.call(null,inst_36594__$1,inst_36518,done);
var state_36646__$1 = (function (){var statearr_36652 = state_36646;
(statearr_36652[(10)] = inst_36594__$1);

return statearr_36652;
})();
if(cljs.core.truth_(inst_36595)){
var statearr_36653_36738 = state_36646__$1;
(statearr_36653_36738[(1)] = (30));

} else {
var statearr_36654_36739 = state_36646__$1;
(statearr_36654_36739[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (1))){
var state_36646__$1 = state_36646;
var statearr_36655_36740 = state_36646__$1;
(statearr_36655_36740[(2)] = null);

(statearr_36655_36740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (24))){
var inst_36547 = (state_36646[(7)]);
var inst_36564 = (state_36646[(2)]);
var inst_36565 = cljs.core.next.call(null,inst_36547);
var inst_36527 = inst_36565;
var inst_36528 = null;
var inst_36529 = (0);
var inst_36530 = (0);
var state_36646__$1 = (function (){var statearr_36656 = state_36646;
(statearr_36656[(13)] = inst_36530);

(statearr_36656[(14)] = inst_36527);

(statearr_36656[(15)] = inst_36564);

(statearr_36656[(16)] = inst_36529);

(statearr_36656[(17)] = inst_36528);

return statearr_36656;
})();
var statearr_36657_36741 = state_36646__$1;
(statearr_36657_36741[(2)] = null);

(statearr_36657_36741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (39))){
var state_36646__$1 = state_36646;
var statearr_36661_36742 = state_36646__$1;
(statearr_36661_36742[(2)] = null);

(statearr_36661_36742[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (4))){
var inst_36518 = (state_36646[(9)]);
var inst_36518__$1 = (state_36646[(2)]);
var inst_36519 = (inst_36518__$1 == null);
var state_36646__$1 = (function (){var statearr_36662 = state_36646;
(statearr_36662[(9)] = inst_36518__$1);

return statearr_36662;
})();
if(cljs.core.truth_(inst_36519)){
var statearr_36663_36743 = state_36646__$1;
(statearr_36663_36743[(1)] = (5));

} else {
var statearr_36664_36744 = state_36646__$1;
(statearr_36664_36744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (15))){
var inst_36530 = (state_36646[(13)]);
var inst_36527 = (state_36646[(14)]);
var inst_36529 = (state_36646[(16)]);
var inst_36528 = (state_36646[(17)]);
var inst_36543 = (state_36646[(2)]);
var inst_36544 = (inst_36530 + (1));
var tmp36658 = inst_36527;
var tmp36659 = inst_36529;
var tmp36660 = inst_36528;
var inst_36527__$1 = tmp36658;
var inst_36528__$1 = tmp36660;
var inst_36529__$1 = tmp36659;
var inst_36530__$1 = inst_36544;
var state_36646__$1 = (function (){var statearr_36665 = state_36646;
(statearr_36665[(13)] = inst_36530__$1);

(statearr_36665[(18)] = inst_36543);

(statearr_36665[(14)] = inst_36527__$1);

(statearr_36665[(16)] = inst_36529__$1);

(statearr_36665[(17)] = inst_36528__$1);

return statearr_36665;
})();
var statearr_36666_36745 = state_36646__$1;
(statearr_36666_36745[(2)] = null);

(statearr_36666_36745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (21))){
var inst_36568 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
var statearr_36670_36746 = state_36646__$1;
(statearr_36670_36746[(2)] = inst_36568);

(statearr_36670_36746[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (31))){
var inst_36594 = (state_36646[(10)]);
var inst_36598 = done.call(null,null);
var inst_36599 = cljs.core.async.untap_STAR_.call(null,m,inst_36594);
var state_36646__$1 = (function (){var statearr_36671 = state_36646;
(statearr_36671[(19)] = inst_36598);

return statearr_36671;
})();
var statearr_36672_36747 = state_36646__$1;
(statearr_36672_36747[(2)] = inst_36599);

(statearr_36672_36747[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (32))){
var inst_36588 = (state_36646[(20)]);
var inst_36586 = (state_36646[(21)]);
var inst_36589 = (state_36646[(11)]);
var inst_36587 = (state_36646[(12)]);
var inst_36601 = (state_36646[(2)]);
var inst_36602 = (inst_36589 + (1));
var tmp36667 = inst_36588;
var tmp36668 = inst_36586;
var tmp36669 = inst_36587;
var inst_36586__$1 = tmp36668;
var inst_36587__$1 = tmp36669;
var inst_36588__$1 = tmp36667;
var inst_36589__$1 = inst_36602;
var state_36646__$1 = (function (){var statearr_36673 = state_36646;
(statearr_36673[(20)] = inst_36588__$1);

(statearr_36673[(21)] = inst_36586__$1);

(statearr_36673[(22)] = inst_36601);

(statearr_36673[(11)] = inst_36589__$1);

(statearr_36673[(12)] = inst_36587__$1);

return statearr_36673;
})();
var statearr_36674_36748 = state_36646__$1;
(statearr_36674_36748[(2)] = null);

(statearr_36674_36748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (40))){
var inst_36614 = (state_36646[(23)]);
var inst_36618 = done.call(null,null);
var inst_36619 = cljs.core.async.untap_STAR_.call(null,m,inst_36614);
var state_36646__$1 = (function (){var statearr_36675 = state_36646;
(statearr_36675[(24)] = inst_36618);

return statearr_36675;
})();
var statearr_36676_36749 = state_36646__$1;
(statearr_36676_36749[(2)] = inst_36619);

(statearr_36676_36749[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (33))){
var inst_36605 = (state_36646[(25)]);
var inst_36607 = cljs.core.chunked_seq_QMARK_.call(null,inst_36605);
var state_36646__$1 = state_36646;
if(inst_36607){
var statearr_36677_36750 = state_36646__$1;
(statearr_36677_36750[(1)] = (36));

} else {
var statearr_36678_36751 = state_36646__$1;
(statearr_36678_36751[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (13))){
var inst_36537 = (state_36646[(26)]);
var inst_36540 = cljs.core.async.close_BANG_.call(null,inst_36537);
var state_36646__$1 = state_36646;
var statearr_36679_36752 = state_36646__$1;
(statearr_36679_36752[(2)] = inst_36540);

(statearr_36679_36752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (22))){
var inst_36558 = (state_36646[(8)]);
var inst_36561 = cljs.core.async.close_BANG_.call(null,inst_36558);
var state_36646__$1 = state_36646;
var statearr_36680_36753 = state_36646__$1;
(statearr_36680_36753[(2)] = inst_36561);

(statearr_36680_36753[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (36))){
var inst_36605 = (state_36646[(25)]);
var inst_36609 = cljs.core.chunk_first.call(null,inst_36605);
var inst_36610 = cljs.core.chunk_rest.call(null,inst_36605);
var inst_36611 = cljs.core.count.call(null,inst_36609);
var inst_36586 = inst_36610;
var inst_36587 = inst_36609;
var inst_36588 = inst_36611;
var inst_36589 = (0);
var state_36646__$1 = (function (){var statearr_36681 = state_36646;
(statearr_36681[(20)] = inst_36588);

(statearr_36681[(21)] = inst_36586);

(statearr_36681[(11)] = inst_36589);

(statearr_36681[(12)] = inst_36587);

return statearr_36681;
})();
var statearr_36682_36754 = state_36646__$1;
(statearr_36682_36754[(2)] = null);

(statearr_36682_36754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (41))){
var inst_36605 = (state_36646[(25)]);
var inst_36621 = (state_36646[(2)]);
var inst_36622 = cljs.core.next.call(null,inst_36605);
var inst_36586 = inst_36622;
var inst_36587 = null;
var inst_36588 = (0);
var inst_36589 = (0);
var state_36646__$1 = (function (){var statearr_36683 = state_36646;
(statearr_36683[(20)] = inst_36588);

(statearr_36683[(21)] = inst_36586);

(statearr_36683[(27)] = inst_36621);

(statearr_36683[(11)] = inst_36589);

(statearr_36683[(12)] = inst_36587);

return statearr_36683;
})();
var statearr_36684_36755 = state_36646__$1;
(statearr_36684_36755[(2)] = null);

(statearr_36684_36755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (43))){
var state_36646__$1 = state_36646;
var statearr_36685_36756 = state_36646__$1;
(statearr_36685_36756[(2)] = null);

(statearr_36685_36756[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (29))){
var inst_36630 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
var statearr_36686_36757 = state_36646__$1;
(statearr_36686_36757[(2)] = inst_36630);

(statearr_36686_36757[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (44))){
var inst_36639 = (state_36646[(2)]);
var state_36646__$1 = (function (){var statearr_36687 = state_36646;
(statearr_36687[(28)] = inst_36639);

return statearr_36687;
})();
var statearr_36688_36758 = state_36646__$1;
(statearr_36688_36758[(2)] = null);

(statearr_36688_36758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (6))){
var inst_36578 = (state_36646[(29)]);
var inst_36577 = cljs.core.deref.call(null,cs);
var inst_36578__$1 = cljs.core.keys.call(null,inst_36577);
var inst_36579 = cljs.core.count.call(null,inst_36578__$1);
var inst_36580 = cljs.core.reset_BANG_.call(null,dctr,inst_36579);
var inst_36585 = cljs.core.seq.call(null,inst_36578__$1);
var inst_36586 = inst_36585;
var inst_36587 = null;
var inst_36588 = (0);
var inst_36589 = (0);
var state_36646__$1 = (function (){var statearr_36689 = state_36646;
(statearr_36689[(20)] = inst_36588);

(statearr_36689[(21)] = inst_36586);

(statearr_36689[(30)] = inst_36580);

(statearr_36689[(29)] = inst_36578__$1);

(statearr_36689[(11)] = inst_36589);

(statearr_36689[(12)] = inst_36587);

return statearr_36689;
})();
var statearr_36690_36759 = state_36646__$1;
(statearr_36690_36759[(2)] = null);

(statearr_36690_36759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (28))){
var inst_36605 = (state_36646[(25)]);
var inst_36586 = (state_36646[(21)]);
var inst_36605__$1 = cljs.core.seq.call(null,inst_36586);
var state_36646__$1 = (function (){var statearr_36691 = state_36646;
(statearr_36691[(25)] = inst_36605__$1);

return statearr_36691;
})();
if(inst_36605__$1){
var statearr_36692_36760 = state_36646__$1;
(statearr_36692_36760[(1)] = (33));

} else {
var statearr_36693_36761 = state_36646__$1;
(statearr_36693_36761[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (25))){
var inst_36588 = (state_36646[(20)]);
var inst_36589 = (state_36646[(11)]);
var inst_36591 = (inst_36589 < inst_36588);
var inst_36592 = inst_36591;
var state_36646__$1 = state_36646;
if(cljs.core.truth_(inst_36592)){
var statearr_36694_36762 = state_36646__$1;
(statearr_36694_36762[(1)] = (27));

} else {
var statearr_36695_36763 = state_36646__$1;
(statearr_36695_36763[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (34))){
var state_36646__$1 = state_36646;
var statearr_36696_36764 = state_36646__$1;
(statearr_36696_36764[(2)] = null);

(statearr_36696_36764[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (17))){
var state_36646__$1 = state_36646;
var statearr_36697_36765 = state_36646__$1;
(statearr_36697_36765[(2)] = null);

(statearr_36697_36765[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (3))){
var inst_36644 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36646__$1,inst_36644);
} else {
if((state_val_36647 === (12))){
var inst_36573 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
var statearr_36698_36766 = state_36646__$1;
(statearr_36698_36766[(2)] = inst_36573);

(statearr_36698_36766[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (2))){
var state_36646__$1 = state_36646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36646__$1,(4),ch);
} else {
if((state_val_36647 === (23))){
var state_36646__$1 = state_36646;
var statearr_36699_36767 = state_36646__$1;
(statearr_36699_36767[(2)] = null);

(statearr_36699_36767[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (35))){
var inst_36628 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
var statearr_36700_36768 = state_36646__$1;
(statearr_36700_36768[(2)] = inst_36628);

(statearr_36700_36768[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (19))){
var inst_36547 = (state_36646[(7)]);
var inst_36551 = cljs.core.chunk_first.call(null,inst_36547);
var inst_36552 = cljs.core.chunk_rest.call(null,inst_36547);
var inst_36553 = cljs.core.count.call(null,inst_36551);
var inst_36527 = inst_36552;
var inst_36528 = inst_36551;
var inst_36529 = inst_36553;
var inst_36530 = (0);
var state_36646__$1 = (function (){var statearr_36701 = state_36646;
(statearr_36701[(13)] = inst_36530);

(statearr_36701[(14)] = inst_36527);

(statearr_36701[(16)] = inst_36529);

(statearr_36701[(17)] = inst_36528);

return statearr_36701;
})();
var statearr_36702_36769 = state_36646__$1;
(statearr_36702_36769[(2)] = null);

(statearr_36702_36769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (11))){
var inst_36547 = (state_36646[(7)]);
var inst_36527 = (state_36646[(14)]);
var inst_36547__$1 = cljs.core.seq.call(null,inst_36527);
var state_36646__$1 = (function (){var statearr_36703 = state_36646;
(statearr_36703[(7)] = inst_36547__$1);

return statearr_36703;
})();
if(inst_36547__$1){
var statearr_36704_36770 = state_36646__$1;
(statearr_36704_36770[(1)] = (16));

} else {
var statearr_36705_36771 = state_36646__$1;
(statearr_36705_36771[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (9))){
var inst_36575 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
var statearr_36706_36772 = state_36646__$1;
(statearr_36706_36772[(2)] = inst_36575);

(statearr_36706_36772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (5))){
var inst_36525 = cljs.core.deref.call(null,cs);
var inst_36526 = cljs.core.seq.call(null,inst_36525);
var inst_36527 = inst_36526;
var inst_36528 = null;
var inst_36529 = (0);
var inst_36530 = (0);
var state_36646__$1 = (function (){var statearr_36707 = state_36646;
(statearr_36707[(13)] = inst_36530);

(statearr_36707[(14)] = inst_36527);

(statearr_36707[(16)] = inst_36529);

(statearr_36707[(17)] = inst_36528);

return statearr_36707;
})();
var statearr_36708_36773 = state_36646__$1;
(statearr_36708_36773[(2)] = null);

(statearr_36708_36773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (14))){
var state_36646__$1 = state_36646;
var statearr_36709_36774 = state_36646__$1;
(statearr_36709_36774[(2)] = null);

(statearr_36709_36774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (45))){
var inst_36636 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
var statearr_36710_36775 = state_36646__$1;
(statearr_36710_36775[(2)] = inst_36636);

(statearr_36710_36775[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (26))){
var inst_36578 = (state_36646[(29)]);
var inst_36632 = (state_36646[(2)]);
var inst_36633 = cljs.core.seq.call(null,inst_36578);
var state_36646__$1 = (function (){var statearr_36711 = state_36646;
(statearr_36711[(31)] = inst_36632);

return statearr_36711;
})();
if(inst_36633){
var statearr_36712_36776 = state_36646__$1;
(statearr_36712_36776[(1)] = (42));

} else {
var statearr_36713_36777 = state_36646__$1;
(statearr_36713_36777[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (16))){
var inst_36547 = (state_36646[(7)]);
var inst_36549 = cljs.core.chunked_seq_QMARK_.call(null,inst_36547);
var state_36646__$1 = state_36646;
if(inst_36549){
var statearr_36714_36778 = state_36646__$1;
(statearr_36714_36778[(1)] = (19));

} else {
var statearr_36715_36779 = state_36646__$1;
(statearr_36715_36779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (38))){
var inst_36625 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
var statearr_36716_36780 = state_36646__$1;
(statearr_36716_36780[(2)] = inst_36625);

(statearr_36716_36780[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (30))){
var state_36646__$1 = state_36646;
var statearr_36717_36781 = state_36646__$1;
(statearr_36717_36781[(2)] = null);

(statearr_36717_36781[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (10))){
var inst_36530 = (state_36646[(13)]);
var inst_36528 = (state_36646[(17)]);
var inst_36536 = cljs.core._nth.call(null,inst_36528,inst_36530);
var inst_36537 = cljs.core.nth.call(null,inst_36536,(0),null);
var inst_36538 = cljs.core.nth.call(null,inst_36536,(1),null);
var state_36646__$1 = (function (){var statearr_36718 = state_36646;
(statearr_36718[(26)] = inst_36537);

return statearr_36718;
})();
if(cljs.core.truth_(inst_36538)){
var statearr_36719_36782 = state_36646__$1;
(statearr_36719_36782[(1)] = (13));

} else {
var statearr_36720_36783 = state_36646__$1;
(statearr_36720_36783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (18))){
var inst_36571 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
var statearr_36721_36784 = state_36646__$1;
(statearr_36721_36784[(2)] = inst_36571);

(statearr_36721_36784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (42))){
var state_36646__$1 = state_36646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36646__$1,(45),dchan);
} else {
if((state_val_36647 === (37))){
var inst_36605 = (state_36646[(25)]);
var inst_36518 = (state_36646[(9)]);
var inst_36614 = (state_36646[(23)]);
var inst_36614__$1 = cljs.core.first.call(null,inst_36605);
var inst_36615 = cljs.core.async.put_BANG_.call(null,inst_36614__$1,inst_36518,done);
var state_36646__$1 = (function (){var statearr_36722 = state_36646;
(statearr_36722[(23)] = inst_36614__$1);

return statearr_36722;
})();
if(cljs.core.truth_(inst_36615)){
var statearr_36723_36785 = state_36646__$1;
(statearr_36723_36785[(1)] = (39));

} else {
var statearr_36724_36786 = state_36646__$1;
(statearr_36724_36786[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (8))){
var inst_36530 = (state_36646[(13)]);
var inst_36529 = (state_36646[(16)]);
var inst_36532 = (inst_36530 < inst_36529);
var inst_36533 = inst_36532;
var state_36646__$1 = state_36646;
if(cljs.core.truth_(inst_36533)){
var statearr_36725_36787 = state_36646__$1;
(statearr_36725_36787[(1)] = (10));

} else {
var statearr_36726_36788 = state_36646__$1;
(statearr_36726_36788[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__28954__auto___36734,cs,m,dchan,dctr,done))
;
return ((function (switch__28892__auto__,c__28954__auto___36734,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28893__auto__ = null;
var cljs$core$async$mult_$_state_machine__28893__auto____0 = (function (){
var statearr_36730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36730[(0)] = cljs$core$async$mult_$_state_machine__28893__auto__);

(statearr_36730[(1)] = (1));

return statearr_36730;
});
var cljs$core$async$mult_$_state_machine__28893__auto____1 = (function (state_36646){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_36646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e36731){if((e36731 instanceof Object)){
var ex__28896__auto__ = e36731;
var statearr_36732_36789 = state_36646;
(statearr_36732_36789[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36790 = state_36646;
state_36646 = G__36790;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28893__auto__ = function(state_36646){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28893__auto____1.call(this,state_36646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28893__auto____0;
cljs$core$async$mult_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28893__auto____1;
return cljs$core$async$mult_$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___36734,cs,m,dchan,dctr,done))
})();
var state__28956__auto__ = (function (){var statearr_36733 = f__28955__auto__.call(null);
(statearr_36733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___36734);

return statearr_36733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___36734,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__36792 = arguments.length;
switch (G__36792) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj36795 = {};
return obj36795;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__25674__auto__ = m;
if(and__25674__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__25674__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26322__auto__ = (((m == null))?null:m);
return (function (){var or__25686__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26322__auto__)]);
if(or__25686__auto__){
return or__25686__auto__;
} else {
var or__25686__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__25686__auto____$1){
return or__25686__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__25674__auto__ = m;
if(and__25674__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__25674__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26322__auto__ = (((m == null))?null:m);
return (function (){var or__25686__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26322__auto__)]);
if(or__25686__auto__){
return or__25686__auto__;
} else {
var or__25686__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__25686__auto____$1){
return or__25686__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__25674__auto__ = m;
if(and__25674__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__25674__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26322__auto__ = (((m == null))?null:m);
return (function (){var or__25686__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26322__auto__)]);
if(or__25686__auto__){
return or__25686__auto__;
} else {
var or__25686__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__25686__auto____$1){
return or__25686__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__25674__auto__ = m;
if(and__25674__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__25674__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26322__auto__ = (((m == null))?null:m);
return (function (){var or__25686__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26322__auto__)]);
if(or__25686__auto__){
return or__25686__auto__;
} else {
var or__25686__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__25686__auto____$1){
return or__25686__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__25674__auto__ = m;
if(and__25674__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__25674__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26322__auto__ = (((m == null))?null:m);
return (function (){var or__25686__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26322__auto__)]);
if(or__25686__auto__){
return or__25686__auto__;
} else {
var or__25686__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__25686__auto____$1){
return or__25686__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__26726__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26726__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36800){
var map__36801 = p__36800;
var map__36801__$1 = ((cljs.core.seq_QMARK_.call(null,map__36801))?cljs.core.apply.call(null,cljs.core.hash_map,map__36801):map__36801);
var opts = map__36801__$1;
var statearr_36802_36805 = state;
(statearr_36802_36805[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__36801,map__36801__$1,opts){
return (function (val){
var statearr_36803_36806 = state;
(statearr_36803_36806[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36801,map__36801__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_36804_36807 = state;
(statearr_36804_36807[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36796){
var G__36797 = cljs.core.first.call(null,seq36796);
var seq36796__$1 = cljs.core.next.call(null,seq36796);
var G__36798 = cljs.core.first.call(null,seq36796__$1);
var seq36796__$2 = cljs.core.next.call(null,seq36796__$1);
var G__36799 = cljs.core.first.call(null,seq36796__$2);
var seq36796__$3 = cljs.core.next.call(null,seq36796__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36797,G__36798,G__36799,seq36796__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t36927 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36927 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36928){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36928 = meta36928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36927.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t36927.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36927.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36927.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36927.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36927.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36927.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36927.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36929){
var self__ = this;
var _36929__$1 = this;
return self__.meta36928;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36929,meta36928__$1){
var self__ = this;
var _36929__$1 = this;
return (new cljs.core.async.t36927(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36928__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36927.cljs$lang$type = true;

cljs.core.async.t36927.cljs$lang$ctorStr = "cljs.core.async/t36927";

cljs.core.async.t36927.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cljs.core.async/t36927");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t36927 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t36927(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36928){
return (new cljs.core.async.t36927(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36928));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t36927(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28954__auto___37046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___37046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___37046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36999){
var state_val_37000 = (state_36999[(1)]);
if((state_val_37000 === (7))){
var inst_36943 = (state_36999[(7)]);
var inst_36948 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36943);
var state_36999__$1 = state_36999;
var statearr_37001_37047 = state_36999__$1;
(statearr_37001_37047[(2)] = inst_36948);

(statearr_37001_37047[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (20))){
var inst_36958 = (state_36999[(8)]);
var state_36999__$1 = state_36999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36999__$1,(23),out,inst_36958);
} else {
if((state_val_37000 === (1))){
var inst_36933 = (state_36999[(9)]);
var inst_36933__$1 = calc_state.call(null);
var inst_36934 = cljs.core.seq_QMARK_.call(null,inst_36933__$1);
var state_36999__$1 = (function (){var statearr_37002 = state_36999;
(statearr_37002[(9)] = inst_36933__$1);

return statearr_37002;
})();
if(inst_36934){
var statearr_37003_37048 = state_36999__$1;
(statearr_37003_37048[(1)] = (2));

} else {
var statearr_37004_37049 = state_36999__$1;
(statearr_37004_37049[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (24))){
var inst_36951 = (state_36999[(10)]);
var inst_36943 = inst_36951;
var state_36999__$1 = (function (){var statearr_37005 = state_36999;
(statearr_37005[(7)] = inst_36943);

return statearr_37005;
})();
var statearr_37006_37050 = state_36999__$1;
(statearr_37006_37050[(2)] = null);

(statearr_37006_37050[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (4))){
var inst_36933 = (state_36999[(9)]);
var inst_36939 = (state_36999[(2)]);
var inst_36940 = cljs.core.get.call(null,inst_36939,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36941 = cljs.core.get.call(null,inst_36939,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36942 = cljs.core.get.call(null,inst_36939,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36943 = inst_36933;
var state_36999__$1 = (function (){var statearr_37007 = state_36999;
(statearr_37007[(7)] = inst_36943);

(statearr_37007[(11)] = inst_36940);

(statearr_37007[(12)] = inst_36941);

(statearr_37007[(13)] = inst_36942);

return statearr_37007;
})();
var statearr_37008_37051 = state_36999__$1;
(statearr_37008_37051[(2)] = null);

(statearr_37008_37051[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (15))){
var state_36999__$1 = state_36999;
var statearr_37009_37052 = state_36999__$1;
(statearr_37009_37052[(2)] = null);

(statearr_37009_37052[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (21))){
var inst_36951 = (state_36999[(10)]);
var inst_36943 = inst_36951;
var state_36999__$1 = (function (){var statearr_37010 = state_36999;
(statearr_37010[(7)] = inst_36943);

return statearr_37010;
})();
var statearr_37011_37053 = state_36999__$1;
(statearr_37011_37053[(2)] = null);

(statearr_37011_37053[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (13))){
var inst_36995 = (state_36999[(2)]);
var state_36999__$1 = state_36999;
var statearr_37012_37054 = state_36999__$1;
(statearr_37012_37054[(2)] = inst_36995);

(statearr_37012_37054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (22))){
var inst_36993 = (state_36999[(2)]);
var state_36999__$1 = state_36999;
var statearr_37013_37055 = state_36999__$1;
(statearr_37013_37055[(2)] = inst_36993);

(statearr_37013_37055[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (6))){
var inst_36997 = (state_36999[(2)]);
var state_36999__$1 = state_36999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36999__$1,inst_36997);
} else {
if((state_val_37000 === (25))){
var state_36999__$1 = state_36999;
var statearr_37014_37056 = state_36999__$1;
(statearr_37014_37056[(2)] = null);

(statearr_37014_37056[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (17))){
var inst_36973 = (state_36999[(14)]);
var state_36999__$1 = state_36999;
var statearr_37015_37057 = state_36999__$1;
(statearr_37015_37057[(2)] = inst_36973);

(statearr_37015_37057[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (3))){
var inst_36933 = (state_36999[(9)]);
var state_36999__$1 = state_36999;
var statearr_37016_37058 = state_36999__$1;
(statearr_37016_37058[(2)] = inst_36933);

(statearr_37016_37058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (12))){
var inst_36954 = (state_36999[(15)]);
var inst_36959 = (state_36999[(16)]);
var inst_36973 = (state_36999[(14)]);
var inst_36973__$1 = inst_36954.call(null,inst_36959);
var state_36999__$1 = (function (){var statearr_37017 = state_36999;
(statearr_37017[(14)] = inst_36973__$1);

return statearr_37017;
})();
if(cljs.core.truth_(inst_36973__$1)){
var statearr_37018_37059 = state_36999__$1;
(statearr_37018_37059[(1)] = (17));

} else {
var statearr_37019_37060 = state_36999__$1;
(statearr_37019_37060[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (2))){
var inst_36933 = (state_36999[(9)]);
var inst_36936 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36933);
var state_36999__$1 = state_36999;
var statearr_37020_37061 = state_36999__$1;
(statearr_37020_37061[(2)] = inst_36936);

(statearr_37020_37061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (23))){
var inst_36984 = (state_36999[(2)]);
var state_36999__$1 = state_36999;
if(cljs.core.truth_(inst_36984)){
var statearr_37021_37062 = state_36999__$1;
(statearr_37021_37062[(1)] = (24));

} else {
var statearr_37022_37063 = state_36999__$1;
(statearr_37022_37063[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (19))){
var inst_36981 = (state_36999[(2)]);
var state_36999__$1 = state_36999;
if(cljs.core.truth_(inst_36981)){
var statearr_37023_37064 = state_36999__$1;
(statearr_37023_37064[(1)] = (20));

} else {
var statearr_37024_37065 = state_36999__$1;
(statearr_37024_37065[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (11))){
var inst_36958 = (state_36999[(8)]);
var inst_36964 = (inst_36958 == null);
var state_36999__$1 = state_36999;
if(cljs.core.truth_(inst_36964)){
var statearr_37025_37066 = state_36999__$1;
(statearr_37025_37066[(1)] = (14));

} else {
var statearr_37026_37067 = state_36999__$1;
(statearr_37026_37067[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (9))){
var inst_36951 = (state_36999[(10)]);
var inst_36951__$1 = (state_36999[(2)]);
var inst_36952 = cljs.core.get.call(null,inst_36951__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36953 = cljs.core.get.call(null,inst_36951__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36954 = cljs.core.get.call(null,inst_36951__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_36999__$1 = (function (){var statearr_37027 = state_36999;
(statearr_37027[(15)] = inst_36954);

(statearr_37027[(17)] = inst_36953);

(statearr_37027[(10)] = inst_36951__$1);

return statearr_37027;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36999__$1,(10),inst_36952);
} else {
if((state_val_37000 === (5))){
var inst_36943 = (state_36999[(7)]);
var inst_36946 = cljs.core.seq_QMARK_.call(null,inst_36943);
var state_36999__$1 = state_36999;
if(inst_36946){
var statearr_37028_37068 = state_36999__$1;
(statearr_37028_37068[(1)] = (7));

} else {
var statearr_37029_37069 = state_36999__$1;
(statearr_37029_37069[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (14))){
var inst_36959 = (state_36999[(16)]);
var inst_36966 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36959);
var state_36999__$1 = state_36999;
var statearr_37030_37070 = state_36999__$1;
(statearr_37030_37070[(2)] = inst_36966);

(statearr_37030_37070[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (26))){
var inst_36989 = (state_36999[(2)]);
var state_36999__$1 = state_36999;
var statearr_37031_37071 = state_36999__$1;
(statearr_37031_37071[(2)] = inst_36989);

(statearr_37031_37071[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (16))){
var inst_36969 = (state_36999[(2)]);
var inst_36970 = calc_state.call(null);
var inst_36943 = inst_36970;
var state_36999__$1 = (function (){var statearr_37032 = state_36999;
(statearr_37032[(7)] = inst_36943);

(statearr_37032[(18)] = inst_36969);

return statearr_37032;
})();
var statearr_37033_37072 = state_36999__$1;
(statearr_37033_37072[(2)] = null);

(statearr_37033_37072[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (10))){
var inst_36959 = (state_36999[(16)]);
var inst_36958 = (state_36999[(8)]);
var inst_36957 = (state_36999[(2)]);
var inst_36958__$1 = cljs.core.nth.call(null,inst_36957,(0),null);
var inst_36959__$1 = cljs.core.nth.call(null,inst_36957,(1),null);
var inst_36960 = (inst_36958__$1 == null);
var inst_36961 = cljs.core._EQ_.call(null,inst_36959__$1,change);
var inst_36962 = (inst_36960) || (inst_36961);
var state_36999__$1 = (function (){var statearr_37034 = state_36999;
(statearr_37034[(16)] = inst_36959__$1);

(statearr_37034[(8)] = inst_36958__$1);

return statearr_37034;
})();
if(cljs.core.truth_(inst_36962)){
var statearr_37035_37073 = state_36999__$1;
(statearr_37035_37073[(1)] = (11));

} else {
var statearr_37036_37074 = state_36999__$1;
(statearr_37036_37074[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (18))){
var inst_36954 = (state_36999[(15)]);
var inst_36959 = (state_36999[(16)]);
var inst_36953 = (state_36999[(17)]);
var inst_36976 = cljs.core.empty_QMARK_.call(null,inst_36954);
var inst_36977 = inst_36953.call(null,inst_36959);
var inst_36978 = cljs.core.not.call(null,inst_36977);
var inst_36979 = (inst_36976) && (inst_36978);
var state_36999__$1 = state_36999;
var statearr_37037_37075 = state_36999__$1;
(statearr_37037_37075[(2)] = inst_36979);

(statearr_37037_37075[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (8))){
var inst_36943 = (state_36999[(7)]);
var state_36999__$1 = state_36999;
var statearr_37038_37076 = state_36999__$1;
(statearr_37038_37076[(2)] = inst_36943);

(statearr_37038_37076[(1)] = (9));


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
});})(c__28954__auto___37046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28892__auto__,c__28954__auto___37046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28893__auto__ = null;
var cljs$core$async$mix_$_state_machine__28893__auto____0 = (function (){
var statearr_37042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37042[(0)] = cljs$core$async$mix_$_state_machine__28893__auto__);

(statearr_37042[(1)] = (1));

return statearr_37042;
});
var cljs$core$async$mix_$_state_machine__28893__auto____1 = (function (state_36999){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_36999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e37043){if((e37043 instanceof Object)){
var ex__28896__auto__ = e37043;
var statearr_37044_37077 = state_36999;
(statearr_37044_37077[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37078 = state_36999;
state_36999 = G__37078;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28893__auto__ = function(state_36999){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28893__auto____1.call(this,state_36999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28893__auto____0;
cljs$core$async$mix_$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28893__auto____1;
return cljs$core$async$mix_$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___37046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28956__auto__ = (function (){var statearr_37045 = f__28955__auto__.call(null);
(statearr_37045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___37046);

return statearr_37045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___37046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj37080 = {};
return obj37080;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__25674__auto__ = p;
if(and__25674__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__25674__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26322__auto__ = (((p == null))?null:p);
return (function (){var or__25686__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26322__auto__)]);
if(or__25686__auto__){
return or__25686__auto__;
} else {
var or__25686__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__25686__auto____$1){
return or__25686__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__25674__auto__ = p;
if(and__25674__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__25674__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26322__auto__ = (((p == null))?null:p);
return (function (){var or__25686__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26322__auto__)]);
if(or__25686__auto__){
return or__25686__auto__;
} else {
var or__25686__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__25686__auto____$1){
return or__25686__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__37082 = arguments.length;
switch (G__37082) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__25674__auto__ = p;
if(and__25674__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__25674__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26322__auto__ = (((p == null))?null:p);
return (function (){var or__25686__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26322__auto__)]);
if(or__25686__auto__){
return or__25686__auto__;
} else {
var or__25686__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__25686__auto____$1){
return or__25686__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__25674__auto__ = p;
if(and__25674__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__25674__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26322__auto__ = (((p == null))?null:p);
return (function (){var or__25686__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26322__auto__)]);
if(or__25686__auto__){
return or__25686__auto__;
} else {
var or__25686__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__25686__auto____$1){
return or__25686__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__37086 = arguments.length;
switch (G__37086) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25686__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25686__auto__)){
return or__25686__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25686__auto__,mults){
return (function (p1__37084_SHARP_){
if(cljs.core.truth_(p1__37084_SHARP_.call(null,topic))){
return p1__37084_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37084_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25686__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t37087 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37087 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta37088){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta37088 = meta37088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37087.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t37087.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t37087.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t37087.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t37087.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t37087.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t37087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37089){
var self__ = this;
var _37089__$1 = this;
return self__.meta37088;
});})(mults,ensure_mult))
;

cljs.core.async.t37087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37089,meta37088__$1){
var self__ = this;
var _37089__$1 = this;
return (new cljs.core.async.t37087(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta37088__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t37087.cljs$lang$type = true;

cljs.core.async.t37087.cljs$lang$ctorStr = "cljs.core.async/t37087";

cljs.core.async.t37087.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cljs.core.async/t37087");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t37087 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t37087(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta37088){
return (new cljs.core.async.t37087(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta37088));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t37087(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28954__auto___37210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___37210,mults,ensure_mult,p){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___37210,mults,ensure_mult,p){
return (function (state_37161){
var state_val_37162 = (state_37161[(1)]);
if((state_val_37162 === (7))){
var inst_37157 = (state_37161[(2)]);
var state_37161__$1 = state_37161;
var statearr_37163_37211 = state_37161__$1;
(statearr_37163_37211[(2)] = inst_37157);

(statearr_37163_37211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (20))){
var state_37161__$1 = state_37161;
var statearr_37164_37212 = state_37161__$1;
(statearr_37164_37212[(2)] = null);

(statearr_37164_37212[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (1))){
var state_37161__$1 = state_37161;
var statearr_37165_37213 = state_37161__$1;
(statearr_37165_37213[(2)] = null);

(statearr_37165_37213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (24))){
var inst_37140 = (state_37161[(7)]);
var inst_37149 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37140);
var state_37161__$1 = state_37161;
var statearr_37166_37214 = state_37161__$1;
(statearr_37166_37214[(2)] = inst_37149);

(statearr_37166_37214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (4))){
var inst_37092 = (state_37161[(8)]);
var inst_37092__$1 = (state_37161[(2)]);
var inst_37093 = (inst_37092__$1 == null);
var state_37161__$1 = (function (){var statearr_37167 = state_37161;
(statearr_37167[(8)] = inst_37092__$1);

return statearr_37167;
})();
if(cljs.core.truth_(inst_37093)){
var statearr_37168_37215 = state_37161__$1;
(statearr_37168_37215[(1)] = (5));

} else {
var statearr_37169_37216 = state_37161__$1;
(statearr_37169_37216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (15))){
var inst_37134 = (state_37161[(2)]);
var state_37161__$1 = state_37161;
var statearr_37170_37217 = state_37161__$1;
(statearr_37170_37217[(2)] = inst_37134);

(statearr_37170_37217[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (21))){
var inst_37154 = (state_37161[(2)]);
var state_37161__$1 = (function (){var statearr_37171 = state_37161;
(statearr_37171[(9)] = inst_37154);

return statearr_37171;
})();
var statearr_37172_37218 = state_37161__$1;
(statearr_37172_37218[(2)] = null);

(statearr_37172_37218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (13))){
var inst_37116 = (state_37161[(10)]);
var inst_37118 = cljs.core.chunked_seq_QMARK_.call(null,inst_37116);
var state_37161__$1 = state_37161;
if(inst_37118){
var statearr_37173_37219 = state_37161__$1;
(statearr_37173_37219[(1)] = (16));

} else {
var statearr_37174_37220 = state_37161__$1;
(statearr_37174_37220[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (22))){
var inst_37146 = (state_37161[(2)]);
var state_37161__$1 = state_37161;
if(cljs.core.truth_(inst_37146)){
var statearr_37175_37221 = state_37161__$1;
(statearr_37175_37221[(1)] = (23));

} else {
var statearr_37176_37222 = state_37161__$1;
(statearr_37176_37222[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (6))){
var inst_37142 = (state_37161[(11)]);
var inst_37140 = (state_37161[(7)]);
var inst_37092 = (state_37161[(8)]);
var inst_37140__$1 = topic_fn.call(null,inst_37092);
var inst_37141 = cljs.core.deref.call(null,mults);
var inst_37142__$1 = cljs.core.get.call(null,inst_37141,inst_37140__$1);
var state_37161__$1 = (function (){var statearr_37177 = state_37161;
(statearr_37177[(11)] = inst_37142__$1);

(statearr_37177[(7)] = inst_37140__$1);

return statearr_37177;
})();
if(cljs.core.truth_(inst_37142__$1)){
var statearr_37178_37223 = state_37161__$1;
(statearr_37178_37223[(1)] = (19));

} else {
var statearr_37179_37224 = state_37161__$1;
(statearr_37179_37224[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (25))){
var inst_37151 = (state_37161[(2)]);
var state_37161__$1 = state_37161;
var statearr_37180_37225 = state_37161__$1;
(statearr_37180_37225[(2)] = inst_37151);

(statearr_37180_37225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (17))){
var inst_37116 = (state_37161[(10)]);
var inst_37125 = cljs.core.first.call(null,inst_37116);
var inst_37126 = cljs.core.async.muxch_STAR_.call(null,inst_37125);
var inst_37127 = cljs.core.async.close_BANG_.call(null,inst_37126);
var inst_37128 = cljs.core.next.call(null,inst_37116);
var inst_37102 = inst_37128;
var inst_37103 = null;
var inst_37104 = (0);
var inst_37105 = (0);
var state_37161__$1 = (function (){var statearr_37181 = state_37161;
(statearr_37181[(12)] = inst_37104);

(statearr_37181[(13)] = inst_37105);

(statearr_37181[(14)] = inst_37103);

(statearr_37181[(15)] = inst_37102);

(statearr_37181[(16)] = inst_37127);

return statearr_37181;
})();
var statearr_37182_37226 = state_37161__$1;
(statearr_37182_37226[(2)] = null);

(statearr_37182_37226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (3))){
var inst_37159 = (state_37161[(2)]);
var state_37161__$1 = state_37161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37161__$1,inst_37159);
} else {
if((state_val_37162 === (12))){
var inst_37136 = (state_37161[(2)]);
var state_37161__$1 = state_37161;
var statearr_37183_37227 = state_37161__$1;
(statearr_37183_37227[(2)] = inst_37136);

(statearr_37183_37227[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (2))){
var state_37161__$1 = state_37161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37161__$1,(4),ch);
} else {
if((state_val_37162 === (23))){
var state_37161__$1 = state_37161;
var statearr_37184_37228 = state_37161__$1;
(statearr_37184_37228[(2)] = null);

(statearr_37184_37228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (19))){
var inst_37142 = (state_37161[(11)]);
var inst_37092 = (state_37161[(8)]);
var inst_37144 = cljs.core.async.muxch_STAR_.call(null,inst_37142);
var state_37161__$1 = state_37161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37161__$1,(22),inst_37144,inst_37092);
} else {
if((state_val_37162 === (11))){
var inst_37116 = (state_37161[(10)]);
var inst_37102 = (state_37161[(15)]);
var inst_37116__$1 = cljs.core.seq.call(null,inst_37102);
var state_37161__$1 = (function (){var statearr_37185 = state_37161;
(statearr_37185[(10)] = inst_37116__$1);

return statearr_37185;
})();
if(inst_37116__$1){
var statearr_37186_37229 = state_37161__$1;
(statearr_37186_37229[(1)] = (13));

} else {
var statearr_37187_37230 = state_37161__$1;
(statearr_37187_37230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (9))){
var inst_37138 = (state_37161[(2)]);
var state_37161__$1 = state_37161;
var statearr_37188_37231 = state_37161__$1;
(statearr_37188_37231[(2)] = inst_37138);

(statearr_37188_37231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (5))){
var inst_37099 = cljs.core.deref.call(null,mults);
var inst_37100 = cljs.core.vals.call(null,inst_37099);
var inst_37101 = cljs.core.seq.call(null,inst_37100);
var inst_37102 = inst_37101;
var inst_37103 = null;
var inst_37104 = (0);
var inst_37105 = (0);
var state_37161__$1 = (function (){var statearr_37189 = state_37161;
(statearr_37189[(12)] = inst_37104);

(statearr_37189[(13)] = inst_37105);

(statearr_37189[(14)] = inst_37103);

(statearr_37189[(15)] = inst_37102);

return statearr_37189;
})();
var statearr_37190_37232 = state_37161__$1;
(statearr_37190_37232[(2)] = null);

(statearr_37190_37232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (14))){
var state_37161__$1 = state_37161;
var statearr_37194_37233 = state_37161__$1;
(statearr_37194_37233[(2)] = null);

(statearr_37194_37233[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (16))){
var inst_37116 = (state_37161[(10)]);
var inst_37120 = cljs.core.chunk_first.call(null,inst_37116);
var inst_37121 = cljs.core.chunk_rest.call(null,inst_37116);
var inst_37122 = cljs.core.count.call(null,inst_37120);
var inst_37102 = inst_37121;
var inst_37103 = inst_37120;
var inst_37104 = inst_37122;
var inst_37105 = (0);
var state_37161__$1 = (function (){var statearr_37195 = state_37161;
(statearr_37195[(12)] = inst_37104);

(statearr_37195[(13)] = inst_37105);

(statearr_37195[(14)] = inst_37103);

(statearr_37195[(15)] = inst_37102);

return statearr_37195;
})();
var statearr_37196_37234 = state_37161__$1;
(statearr_37196_37234[(2)] = null);

(statearr_37196_37234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (10))){
var inst_37104 = (state_37161[(12)]);
var inst_37105 = (state_37161[(13)]);
var inst_37103 = (state_37161[(14)]);
var inst_37102 = (state_37161[(15)]);
var inst_37110 = cljs.core._nth.call(null,inst_37103,inst_37105);
var inst_37111 = cljs.core.async.muxch_STAR_.call(null,inst_37110);
var inst_37112 = cljs.core.async.close_BANG_.call(null,inst_37111);
var inst_37113 = (inst_37105 + (1));
var tmp37191 = inst_37104;
var tmp37192 = inst_37103;
var tmp37193 = inst_37102;
var inst_37102__$1 = tmp37193;
var inst_37103__$1 = tmp37192;
var inst_37104__$1 = tmp37191;
var inst_37105__$1 = inst_37113;
var state_37161__$1 = (function (){var statearr_37197 = state_37161;
(statearr_37197[(17)] = inst_37112);

(statearr_37197[(12)] = inst_37104__$1);

(statearr_37197[(13)] = inst_37105__$1);

(statearr_37197[(14)] = inst_37103__$1);

(statearr_37197[(15)] = inst_37102__$1);

return statearr_37197;
})();
var statearr_37198_37235 = state_37161__$1;
(statearr_37198_37235[(2)] = null);

(statearr_37198_37235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (18))){
var inst_37131 = (state_37161[(2)]);
var state_37161__$1 = state_37161;
var statearr_37199_37236 = state_37161__$1;
(statearr_37199_37236[(2)] = inst_37131);

(statearr_37199_37236[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37162 === (8))){
var inst_37104 = (state_37161[(12)]);
var inst_37105 = (state_37161[(13)]);
var inst_37107 = (inst_37105 < inst_37104);
var inst_37108 = inst_37107;
var state_37161__$1 = state_37161;
if(cljs.core.truth_(inst_37108)){
var statearr_37200_37237 = state_37161__$1;
(statearr_37200_37237[(1)] = (10));

} else {
var statearr_37201_37238 = state_37161__$1;
(statearr_37201_37238[(1)] = (11));

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
});})(c__28954__auto___37210,mults,ensure_mult,p))
;
return ((function (switch__28892__auto__,c__28954__auto___37210,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28893__auto__ = null;
var cljs$core$async$state_machine__28893__auto____0 = (function (){
var statearr_37205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37205[(0)] = cljs$core$async$state_machine__28893__auto__);

(statearr_37205[(1)] = (1));

return statearr_37205;
});
var cljs$core$async$state_machine__28893__auto____1 = (function (state_37161){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_37161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e37206){if((e37206 instanceof Object)){
var ex__28896__auto__ = e37206;
var statearr_37207_37239 = state_37161;
(statearr_37207_37239[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37240 = state_37161;
state_37161 = G__37240;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$state_machine__28893__auto__ = function(state_37161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28893__auto____1.call(this,state_37161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28893__auto____0;
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28893__auto____1;
return cljs$core$async$state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___37210,mults,ensure_mult,p))
})();
var state__28956__auto__ = (function (){var statearr_37208 = f__28955__auto__.call(null);
(statearr_37208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___37210);

return statearr_37208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___37210,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__37242 = arguments.length;
switch (G__37242) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__37245 = arguments.length;
switch (G__37245) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__37248 = arguments.length;
switch (G__37248) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28954__auto___37318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___37318,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___37318,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37287){
var state_val_37288 = (state_37287[(1)]);
if((state_val_37288 === (7))){
var state_37287__$1 = state_37287;
var statearr_37289_37319 = state_37287__$1;
(statearr_37289_37319[(2)] = null);

(statearr_37289_37319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (1))){
var state_37287__$1 = state_37287;
var statearr_37290_37320 = state_37287__$1;
(statearr_37290_37320[(2)] = null);

(statearr_37290_37320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (4))){
var inst_37251 = (state_37287[(7)]);
var inst_37253 = (inst_37251 < cnt);
var state_37287__$1 = state_37287;
if(cljs.core.truth_(inst_37253)){
var statearr_37291_37321 = state_37287__$1;
(statearr_37291_37321[(1)] = (6));

} else {
var statearr_37292_37322 = state_37287__$1;
(statearr_37292_37322[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (15))){
var inst_37283 = (state_37287[(2)]);
var state_37287__$1 = state_37287;
var statearr_37293_37323 = state_37287__$1;
(statearr_37293_37323[(2)] = inst_37283);

(statearr_37293_37323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (13))){
var inst_37276 = cljs.core.async.close_BANG_.call(null,out);
var state_37287__$1 = state_37287;
var statearr_37294_37324 = state_37287__$1;
(statearr_37294_37324[(2)] = inst_37276);

(statearr_37294_37324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (6))){
var state_37287__$1 = state_37287;
var statearr_37295_37325 = state_37287__$1;
(statearr_37295_37325[(2)] = null);

(statearr_37295_37325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (3))){
var inst_37285 = (state_37287[(2)]);
var state_37287__$1 = state_37287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37287__$1,inst_37285);
} else {
if((state_val_37288 === (12))){
var inst_37273 = (state_37287[(8)]);
var inst_37273__$1 = (state_37287[(2)]);
var inst_37274 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37273__$1);
var state_37287__$1 = (function (){var statearr_37296 = state_37287;
(statearr_37296[(8)] = inst_37273__$1);

return statearr_37296;
})();
if(cljs.core.truth_(inst_37274)){
var statearr_37297_37326 = state_37287__$1;
(statearr_37297_37326[(1)] = (13));

} else {
var statearr_37298_37327 = state_37287__$1;
(statearr_37298_37327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (2))){
var inst_37250 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37251 = (0);
var state_37287__$1 = (function (){var statearr_37299 = state_37287;
(statearr_37299[(7)] = inst_37251);

(statearr_37299[(9)] = inst_37250);

return statearr_37299;
})();
var statearr_37300_37328 = state_37287__$1;
(statearr_37300_37328[(2)] = null);

(statearr_37300_37328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (11))){
var inst_37251 = (state_37287[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37287,(10),Object,null,(9));
var inst_37260 = chs__$1.call(null,inst_37251);
var inst_37261 = done.call(null,inst_37251);
var inst_37262 = cljs.core.async.take_BANG_.call(null,inst_37260,inst_37261);
var state_37287__$1 = state_37287;
var statearr_37301_37329 = state_37287__$1;
(statearr_37301_37329[(2)] = inst_37262);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37287__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (9))){
var inst_37251 = (state_37287[(7)]);
var inst_37264 = (state_37287[(2)]);
var inst_37265 = (inst_37251 + (1));
var inst_37251__$1 = inst_37265;
var state_37287__$1 = (function (){var statearr_37302 = state_37287;
(statearr_37302[(7)] = inst_37251__$1);

(statearr_37302[(10)] = inst_37264);

return statearr_37302;
})();
var statearr_37303_37330 = state_37287__$1;
(statearr_37303_37330[(2)] = null);

(statearr_37303_37330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (5))){
var inst_37271 = (state_37287[(2)]);
var state_37287__$1 = (function (){var statearr_37304 = state_37287;
(statearr_37304[(11)] = inst_37271);

return statearr_37304;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37287__$1,(12),dchan);
} else {
if((state_val_37288 === (14))){
var inst_37273 = (state_37287[(8)]);
var inst_37278 = cljs.core.apply.call(null,f,inst_37273);
var state_37287__$1 = state_37287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37287__$1,(16),out,inst_37278);
} else {
if((state_val_37288 === (16))){
var inst_37280 = (state_37287[(2)]);
var state_37287__$1 = (function (){var statearr_37305 = state_37287;
(statearr_37305[(12)] = inst_37280);

return statearr_37305;
})();
var statearr_37306_37331 = state_37287__$1;
(statearr_37306_37331[(2)] = null);

(statearr_37306_37331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (10))){
var inst_37255 = (state_37287[(2)]);
var inst_37256 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37287__$1 = (function (){var statearr_37307 = state_37287;
(statearr_37307[(13)] = inst_37255);

return statearr_37307;
})();
var statearr_37308_37332 = state_37287__$1;
(statearr_37308_37332[(2)] = inst_37256);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37287__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37288 === (8))){
var inst_37269 = (state_37287[(2)]);
var state_37287__$1 = state_37287;
var statearr_37309_37333 = state_37287__$1;
(statearr_37309_37333[(2)] = inst_37269);

(statearr_37309_37333[(1)] = (5));


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
});})(c__28954__auto___37318,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28892__auto__,c__28954__auto___37318,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28893__auto__ = null;
var cljs$core$async$state_machine__28893__auto____0 = (function (){
var statearr_37313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37313[(0)] = cljs$core$async$state_machine__28893__auto__);

(statearr_37313[(1)] = (1));

return statearr_37313;
});
var cljs$core$async$state_machine__28893__auto____1 = (function (state_37287){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_37287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e37314){if((e37314 instanceof Object)){
var ex__28896__auto__ = e37314;
var statearr_37315_37334 = state_37287;
(statearr_37315_37334[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37335 = state_37287;
state_37287 = G__37335;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$state_machine__28893__auto__ = function(state_37287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28893__auto____1.call(this,state_37287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28893__auto____0;
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28893__auto____1;
return cljs$core$async$state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___37318,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28956__auto__ = (function (){var statearr_37316 = f__28955__auto__.call(null);
(statearr_37316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___37318);

return statearr_37316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___37318,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__37338 = arguments.length;
switch (G__37338) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28954__auto___37393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___37393,out){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___37393,out){
return (function (state_37368){
var state_val_37369 = (state_37368[(1)]);
if((state_val_37369 === (7))){
var inst_37348 = (state_37368[(7)]);
var inst_37347 = (state_37368[(8)]);
var inst_37347__$1 = (state_37368[(2)]);
var inst_37348__$1 = cljs.core.nth.call(null,inst_37347__$1,(0),null);
var inst_37349 = cljs.core.nth.call(null,inst_37347__$1,(1),null);
var inst_37350 = (inst_37348__$1 == null);
var state_37368__$1 = (function (){var statearr_37370 = state_37368;
(statearr_37370[(9)] = inst_37349);

(statearr_37370[(7)] = inst_37348__$1);

(statearr_37370[(8)] = inst_37347__$1);

return statearr_37370;
})();
if(cljs.core.truth_(inst_37350)){
var statearr_37371_37394 = state_37368__$1;
(statearr_37371_37394[(1)] = (8));

} else {
var statearr_37372_37395 = state_37368__$1;
(statearr_37372_37395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37369 === (1))){
var inst_37339 = cljs.core.vec.call(null,chs);
var inst_37340 = inst_37339;
var state_37368__$1 = (function (){var statearr_37373 = state_37368;
(statearr_37373[(10)] = inst_37340);

return statearr_37373;
})();
var statearr_37374_37396 = state_37368__$1;
(statearr_37374_37396[(2)] = null);

(statearr_37374_37396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37369 === (4))){
var inst_37340 = (state_37368[(10)]);
var state_37368__$1 = state_37368;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37368__$1,(7),inst_37340);
} else {
if((state_val_37369 === (6))){
var inst_37364 = (state_37368[(2)]);
var state_37368__$1 = state_37368;
var statearr_37375_37397 = state_37368__$1;
(statearr_37375_37397[(2)] = inst_37364);

(statearr_37375_37397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37369 === (3))){
var inst_37366 = (state_37368[(2)]);
var state_37368__$1 = state_37368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37368__$1,inst_37366);
} else {
if((state_val_37369 === (2))){
var inst_37340 = (state_37368[(10)]);
var inst_37342 = cljs.core.count.call(null,inst_37340);
var inst_37343 = (inst_37342 > (0));
var state_37368__$1 = state_37368;
if(cljs.core.truth_(inst_37343)){
var statearr_37377_37398 = state_37368__$1;
(statearr_37377_37398[(1)] = (4));

} else {
var statearr_37378_37399 = state_37368__$1;
(statearr_37378_37399[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37369 === (11))){
var inst_37340 = (state_37368[(10)]);
var inst_37357 = (state_37368[(2)]);
var tmp37376 = inst_37340;
var inst_37340__$1 = tmp37376;
var state_37368__$1 = (function (){var statearr_37379 = state_37368;
(statearr_37379[(11)] = inst_37357);

(statearr_37379[(10)] = inst_37340__$1);

return statearr_37379;
})();
var statearr_37380_37400 = state_37368__$1;
(statearr_37380_37400[(2)] = null);

(statearr_37380_37400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37369 === (9))){
var inst_37348 = (state_37368[(7)]);
var state_37368__$1 = state_37368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37368__$1,(11),out,inst_37348);
} else {
if((state_val_37369 === (5))){
var inst_37362 = cljs.core.async.close_BANG_.call(null,out);
var state_37368__$1 = state_37368;
var statearr_37381_37401 = state_37368__$1;
(statearr_37381_37401[(2)] = inst_37362);

(statearr_37381_37401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37369 === (10))){
var inst_37360 = (state_37368[(2)]);
var state_37368__$1 = state_37368;
var statearr_37382_37402 = state_37368__$1;
(statearr_37382_37402[(2)] = inst_37360);

(statearr_37382_37402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37369 === (8))){
var inst_37349 = (state_37368[(9)]);
var inst_37340 = (state_37368[(10)]);
var inst_37348 = (state_37368[(7)]);
var inst_37347 = (state_37368[(8)]);
var inst_37352 = (function (){var c = inst_37349;
var v = inst_37348;
var vec__37345 = inst_37347;
var cs = inst_37340;
return ((function (c,v,vec__37345,cs,inst_37349,inst_37340,inst_37348,inst_37347,state_val_37369,c__28954__auto___37393,out){
return (function (p1__37336_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37336_SHARP_);
});
;})(c,v,vec__37345,cs,inst_37349,inst_37340,inst_37348,inst_37347,state_val_37369,c__28954__auto___37393,out))
})();
var inst_37353 = cljs.core.filterv.call(null,inst_37352,inst_37340);
var inst_37340__$1 = inst_37353;
var state_37368__$1 = (function (){var statearr_37383 = state_37368;
(statearr_37383[(10)] = inst_37340__$1);

return statearr_37383;
})();
var statearr_37384_37403 = state_37368__$1;
(statearr_37384_37403[(2)] = null);

(statearr_37384_37403[(1)] = (2));


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
});})(c__28954__auto___37393,out))
;
return ((function (switch__28892__auto__,c__28954__auto___37393,out){
return (function() {
var cljs$core$async$state_machine__28893__auto__ = null;
var cljs$core$async$state_machine__28893__auto____0 = (function (){
var statearr_37388 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37388[(0)] = cljs$core$async$state_machine__28893__auto__);

(statearr_37388[(1)] = (1));

return statearr_37388;
});
var cljs$core$async$state_machine__28893__auto____1 = (function (state_37368){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_37368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e37389){if((e37389 instanceof Object)){
var ex__28896__auto__ = e37389;
var statearr_37390_37404 = state_37368;
(statearr_37390_37404[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37405 = state_37368;
state_37368 = G__37405;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$state_machine__28893__auto__ = function(state_37368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28893__auto____1.call(this,state_37368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28893__auto____0;
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28893__auto____1;
return cljs$core$async$state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___37393,out))
})();
var state__28956__auto__ = (function (){var statearr_37391 = f__28955__auto__.call(null);
(statearr_37391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___37393);

return statearr_37391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___37393,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__37407 = arguments.length;
switch (G__37407) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28954__auto___37455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___37455,out){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___37455,out){
return (function (state_37431){
var state_val_37432 = (state_37431[(1)]);
if((state_val_37432 === (7))){
var inst_37413 = (state_37431[(7)]);
var inst_37413__$1 = (state_37431[(2)]);
var inst_37414 = (inst_37413__$1 == null);
var inst_37415 = cljs.core.not.call(null,inst_37414);
var state_37431__$1 = (function (){var statearr_37433 = state_37431;
(statearr_37433[(7)] = inst_37413__$1);

return statearr_37433;
})();
if(inst_37415){
var statearr_37434_37456 = state_37431__$1;
(statearr_37434_37456[(1)] = (8));

} else {
var statearr_37435_37457 = state_37431__$1;
(statearr_37435_37457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37432 === (1))){
var inst_37408 = (0);
var state_37431__$1 = (function (){var statearr_37436 = state_37431;
(statearr_37436[(8)] = inst_37408);

return statearr_37436;
})();
var statearr_37437_37458 = state_37431__$1;
(statearr_37437_37458[(2)] = null);

(statearr_37437_37458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37432 === (4))){
var state_37431__$1 = state_37431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37431__$1,(7),ch);
} else {
if((state_val_37432 === (6))){
var inst_37426 = (state_37431[(2)]);
var state_37431__$1 = state_37431;
var statearr_37438_37459 = state_37431__$1;
(statearr_37438_37459[(2)] = inst_37426);

(statearr_37438_37459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37432 === (3))){
var inst_37428 = (state_37431[(2)]);
var inst_37429 = cljs.core.async.close_BANG_.call(null,out);
var state_37431__$1 = (function (){var statearr_37439 = state_37431;
(statearr_37439[(9)] = inst_37428);

return statearr_37439;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37431__$1,inst_37429);
} else {
if((state_val_37432 === (2))){
var inst_37408 = (state_37431[(8)]);
var inst_37410 = (inst_37408 < n);
var state_37431__$1 = state_37431;
if(cljs.core.truth_(inst_37410)){
var statearr_37440_37460 = state_37431__$1;
(statearr_37440_37460[(1)] = (4));

} else {
var statearr_37441_37461 = state_37431__$1;
(statearr_37441_37461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37432 === (11))){
var inst_37408 = (state_37431[(8)]);
var inst_37418 = (state_37431[(2)]);
var inst_37419 = (inst_37408 + (1));
var inst_37408__$1 = inst_37419;
var state_37431__$1 = (function (){var statearr_37442 = state_37431;
(statearr_37442[(8)] = inst_37408__$1);

(statearr_37442[(10)] = inst_37418);

return statearr_37442;
})();
var statearr_37443_37462 = state_37431__$1;
(statearr_37443_37462[(2)] = null);

(statearr_37443_37462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37432 === (9))){
var state_37431__$1 = state_37431;
var statearr_37444_37463 = state_37431__$1;
(statearr_37444_37463[(2)] = null);

(statearr_37444_37463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37432 === (5))){
var state_37431__$1 = state_37431;
var statearr_37445_37464 = state_37431__$1;
(statearr_37445_37464[(2)] = null);

(statearr_37445_37464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37432 === (10))){
var inst_37423 = (state_37431[(2)]);
var state_37431__$1 = state_37431;
var statearr_37446_37465 = state_37431__$1;
(statearr_37446_37465[(2)] = inst_37423);

(statearr_37446_37465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37432 === (8))){
var inst_37413 = (state_37431[(7)]);
var state_37431__$1 = state_37431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37431__$1,(11),out,inst_37413);
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
});})(c__28954__auto___37455,out))
;
return ((function (switch__28892__auto__,c__28954__auto___37455,out){
return (function() {
var cljs$core$async$state_machine__28893__auto__ = null;
var cljs$core$async$state_machine__28893__auto____0 = (function (){
var statearr_37450 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37450[(0)] = cljs$core$async$state_machine__28893__auto__);

(statearr_37450[(1)] = (1));

return statearr_37450;
});
var cljs$core$async$state_machine__28893__auto____1 = (function (state_37431){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_37431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e37451){if((e37451 instanceof Object)){
var ex__28896__auto__ = e37451;
var statearr_37452_37466 = state_37431;
(statearr_37452_37466[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37467 = state_37431;
state_37431 = G__37467;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$state_machine__28893__auto__ = function(state_37431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28893__auto____1.call(this,state_37431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28893__auto____0;
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28893__auto____1;
return cljs$core$async$state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___37455,out))
})();
var state__28956__auto__ = (function (){var statearr_37453 = f__28955__auto__.call(null);
(statearr_37453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___37455);

return statearr_37453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___37455,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t37475 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37475 = (function (ch,f,map_LT_,meta37476){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37476 = meta37476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37475.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t37475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t37475.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t37475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t37478 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37478 = (function (fn1,_,meta37476,map_LT_,f,ch,meta37479){
this.fn1 = fn1;
this._ = _;
this.meta37476 = meta37476;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37479 = meta37479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37478.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t37478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t37478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37468_SHARP_){
return f1.call(null,(((p1__37468_SHARP_ == null))?null:self__.f.call(null,p1__37468_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t37478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37480){
var self__ = this;
var _37480__$1 = this;
return self__.meta37479;
});})(___$1))
;

cljs.core.async.t37478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37480,meta37479__$1){
var self__ = this;
var _37480__$1 = this;
return (new cljs.core.async.t37478(self__.fn1,self__._,self__.meta37476,self__.map_LT_,self__.f,self__.ch,meta37479__$1));
});})(___$1))
;

cljs.core.async.t37478.cljs$lang$type = true;

cljs.core.async.t37478.cljs$lang$ctorStr = "cljs.core.async/t37478";

cljs.core.async.t37478.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cljs.core.async/t37478");
});})(___$1))
;

cljs.core.async.__GT_t37478 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t37478(fn1__$1,___$2,meta37476__$1,map_LT___$1,f__$1,ch__$1,meta37479){
return (new cljs.core.async.t37478(fn1__$1,___$2,meta37476__$1,map_LT___$1,f__$1,ch__$1,meta37479));
});})(___$1))
;

}

return (new cljs.core.async.t37478(fn1,___$1,self__.meta37476,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25674__auto__ = ret;
if(cljs.core.truth_(and__25674__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25674__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t37475.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t37475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t37475.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t37475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37477){
var self__ = this;
var _37477__$1 = this;
return self__.meta37476;
});

cljs.core.async.t37475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37477,meta37476__$1){
var self__ = this;
var _37477__$1 = this;
return (new cljs.core.async.t37475(self__.ch,self__.f,self__.map_LT_,meta37476__$1));
});

cljs.core.async.t37475.cljs$lang$type = true;

cljs.core.async.t37475.cljs$lang$ctorStr = "cljs.core.async/t37475";

cljs.core.async.t37475.cljs$lang$ctorPrWriter = (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cljs.core.async/t37475");
});

cljs.core.async.__GT_t37475 = (function cljs$core$async$map_LT__$___GT_t37475(ch__$1,f__$1,map_LT___$1,meta37476){
return (new cljs.core.async.t37475(ch__$1,f__$1,map_LT___$1,meta37476));
});

}

return (new cljs.core.async.t37475(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t37484 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37484 = (function (ch,f,map_GT_,meta37485){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta37485 = meta37485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37484.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t37484.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t37484.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t37484.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t37484.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t37484.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t37484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37486){
var self__ = this;
var _37486__$1 = this;
return self__.meta37485;
});

cljs.core.async.t37484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37486,meta37485__$1){
var self__ = this;
var _37486__$1 = this;
return (new cljs.core.async.t37484(self__.ch,self__.f,self__.map_GT_,meta37485__$1));
});

cljs.core.async.t37484.cljs$lang$type = true;

cljs.core.async.t37484.cljs$lang$ctorStr = "cljs.core.async/t37484";

cljs.core.async.t37484.cljs$lang$ctorPrWriter = (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cljs.core.async/t37484");
});

cljs.core.async.__GT_t37484 = (function cljs$core$async$map_GT__$___GT_t37484(ch__$1,f__$1,map_GT___$1,meta37485){
return (new cljs.core.async.t37484(ch__$1,f__$1,map_GT___$1,meta37485));
});

}

return (new cljs.core.async.t37484(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t37490 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37490 = (function (ch,p,filter_GT_,meta37491){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta37491 = meta37491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37490.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t37490.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t37490.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t37490.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t37490.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t37490.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t37490.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t37490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37492){
var self__ = this;
var _37492__$1 = this;
return self__.meta37491;
});

cljs.core.async.t37490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37492,meta37491__$1){
var self__ = this;
var _37492__$1 = this;
return (new cljs.core.async.t37490(self__.ch,self__.p,self__.filter_GT_,meta37491__$1));
});

cljs.core.async.t37490.cljs$lang$type = true;

cljs.core.async.t37490.cljs$lang$ctorStr = "cljs.core.async/t37490";

cljs.core.async.t37490.cljs$lang$ctorPrWriter = (function (this__26265__auto__,writer__26266__auto__,opt__26267__auto__){
return cljs.core._write.call(null,writer__26266__auto__,"cljs.core.async/t37490");
});

cljs.core.async.__GT_t37490 = (function cljs$core$async$filter_GT__$___GT_t37490(ch__$1,p__$1,filter_GT___$1,meta37491){
return (new cljs.core.async.t37490(ch__$1,p__$1,filter_GT___$1,meta37491));
});

}

return (new cljs.core.async.t37490(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__37494 = arguments.length;
switch (G__37494) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28954__auto___37537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___37537,out){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___37537,out){
return (function (state_37515){
var state_val_37516 = (state_37515[(1)]);
if((state_val_37516 === (7))){
var inst_37511 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
var statearr_37517_37538 = state_37515__$1;
(statearr_37517_37538[(2)] = inst_37511);

(statearr_37517_37538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (1))){
var state_37515__$1 = state_37515;
var statearr_37518_37539 = state_37515__$1;
(statearr_37518_37539[(2)] = null);

(statearr_37518_37539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (4))){
var inst_37497 = (state_37515[(7)]);
var inst_37497__$1 = (state_37515[(2)]);
var inst_37498 = (inst_37497__$1 == null);
var state_37515__$1 = (function (){var statearr_37519 = state_37515;
(statearr_37519[(7)] = inst_37497__$1);

return statearr_37519;
})();
if(cljs.core.truth_(inst_37498)){
var statearr_37520_37540 = state_37515__$1;
(statearr_37520_37540[(1)] = (5));

} else {
var statearr_37521_37541 = state_37515__$1;
(statearr_37521_37541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (6))){
var inst_37497 = (state_37515[(7)]);
var inst_37502 = p.call(null,inst_37497);
var state_37515__$1 = state_37515;
if(cljs.core.truth_(inst_37502)){
var statearr_37522_37542 = state_37515__$1;
(statearr_37522_37542[(1)] = (8));

} else {
var statearr_37523_37543 = state_37515__$1;
(statearr_37523_37543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (3))){
var inst_37513 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37515__$1,inst_37513);
} else {
if((state_val_37516 === (2))){
var state_37515__$1 = state_37515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37515__$1,(4),ch);
} else {
if((state_val_37516 === (11))){
var inst_37505 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
var statearr_37524_37544 = state_37515__$1;
(statearr_37524_37544[(2)] = inst_37505);

(statearr_37524_37544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (9))){
var state_37515__$1 = state_37515;
var statearr_37525_37545 = state_37515__$1;
(statearr_37525_37545[(2)] = null);

(statearr_37525_37545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (5))){
var inst_37500 = cljs.core.async.close_BANG_.call(null,out);
var state_37515__$1 = state_37515;
var statearr_37526_37546 = state_37515__$1;
(statearr_37526_37546[(2)] = inst_37500);

(statearr_37526_37546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (10))){
var inst_37508 = (state_37515[(2)]);
var state_37515__$1 = (function (){var statearr_37527 = state_37515;
(statearr_37527[(8)] = inst_37508);

return statearr_37527;
})();
var statearr_37528_37547 = state_37515__$1;
(statearr_37528_37547[(2)] = null);

(statearr_37528_37547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (8))){
var inst_37497 = (state_37515[(7)]);
var state_37515__$1 = state_37515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37515__$1,(11),out,inst_37497);
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
});})(c__28954__auto___37537,out))
;
return ((function (switch__28892__auto__,c__28954__auto___37537,out){
return (function() {
var cljs$core$async$state_machine__28893__auto__ = null;
var cljs$core$async$state_machine__28893__auto____0 = (function (){
var statearr_37532 = [null,null,null,null,null,null,null,null,null];
(statearr_37532[(0)] = cljs$core$async$state_machine__28893__auto__);

(statearr_37532[(1)] = (1));

return statearr_37532;
});
var cljs$core$async$state_machine__28893__auto____1 = (function (state_37515){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_37515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e37533){if((e37533 instanceof Object)){
var ex__28896__auto__ = e37533;
var statearr_37534_37548 = state_37515;
(statearr_37534_37548[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37549 = state_37515;
state_37515 = G__37549;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$state_machine__28893__auto__ = function(state_37515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28893__auto____1.call(this,state_37515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28893__auto____0;
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28893__auto____1;
return cljs$core$async$state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___37537,out))
})();
var state__28956__auto__ = (function (){var statearr_37535 = f__28955__auto__.call(null);
(statearr_37535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___37537);

return statearr_37535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___37537,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__37551 = arguments.length;
switch (G__37551) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28954__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto__){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto__){
return (function (state_37718){
var state_val_37719 = (state_37718[(1)]);
if((state_val_37719 === (7))){
var inst_37714 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
var statearr_37720_37761 = state_37718__$1;
(statearr_37720_37761[(2)] = inst_37714);

(statearr_37720_37761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (20))){
var inst_37684 = (state_37718[(7)]);
var inst_37695 = (state_37718[(2)]);
var inst_37696 = cljs.core.next.call(null,inst_37684);
var inst_37670 = inst_37696;
var inst_37671 = null;
var inst_37672 = (0);
var inst_37673 = (0);
var state_37718__$1 = (function (){var statearr_37721 = state_37718;
(statearr_37721[(8)] = inst_37670);

(statearr_37721[(9)] = inst_37672);

(statearr_37721[(10)] = inst_37671);

(statearr_37721[(11)] = inst_37695);

(statearr_37721[(12)] = inst_37673);

return statearr_37721;
})();
var statearr_37722_37762 = state_37718__$1;
(statearr_37722_37762[(2)] = null);

(statearr_37722_37762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (1))){
var state_37718__$1 = state_37718;
var statearr_37723_37763 = state_37718__$1;
(statearr_37723_37763[(2)] = null);

(statearr_37723_37763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (4))){
var inst_37659 = (state_37718[(13)]);
var inst_37659__$1 = (state_37718[(2)]);
var inst_37660 = (inst_37659__$1 == null);
var state_37718__$1 = (function (){var statearr_37724 = state_37718;
(statearr_37724[(13)] = inst_37659__$1);

return statearr_37724;
})();
if(cljs.core.truth_(inst_37660)){
var statearr_37725_37764 = state_37718__$1;
(statearr_37725_37764[(1)] = (5));

} else {
var statearr_37726_37765 = state_37718__$1;
(statearr_37726_37765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (15))){
var state_37718__$1 = state_37718;
var statearr_37730_37766 = state_37718__$1;
(statearr_37730_37766[(2)] = null);

(statearr_37730_37766[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (21))){
var state_37718__$1 = state_37718;
var statearr_37731_37767 = state_37718__$1;
(statearr_37731_37767[(2)] = null);

(statearr_37731_37767[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (13))){
var inst_37670 = (state_37718[(8)]);
var inst_37672 = (state_37718[(9)]);
var inst_37671 = (state_37718[(10)]);
var inst_37673 = (state_37718[(12)]);
var inst_37680 = (state_37718[(2)]);
var inst_37681 = (inst_37673 + (1));
var tmp37727 = inst_37670;
var tmp37728 = inst_37672;
var tmp37729 = inst_37671;
var inst_37670__$1 = tmp37727;
var inst_37671__$1 = tmp37729;
var inst_37672__$1 = tmp37728;
var inst_37673__$1 = inst_37681;
var state_37718__$1 = (function (){var statearr_37732 = state_37718;
(statearr_37732[(8)] = inst_37670__$1);

(statearr_37732[(9)] = inst_37672__$1);

(statearr_37732[(14)] = inst_37680);

(statearr_37732[(10)] = inst_37671__$1);

(statearr_37732[(12)] = inst_37673__$1);

return statearr_37732;
})();
var statearr_37733_37768 = state_37718__$1;
(statearr_37733_37768[(2)] = null);

(statearr_37733_37768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (22))){
var state_37718__$1 = state_37718;
var statearr_37734_37769 = state_37718__$1;
(statearr_37734_37769[(2)] = null);

(statearr_37734_37769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (6))){
var inst_37659 = (state_37718[(13)]);
var inst_37668 = f.call(null,inst_37659);
var inst_37669 = cljs.core.seq.call(null,inst_37668);
var inst_37670 = inst_37669;
var inst_37671 = null;
var inst_37672 = (0);
var inst_37673 = (0);
var state_37718__$1 = (function (){var statearr_37735 = state_37718;
(statearr_37735[(8)] = inst_37670);

(statearr_37735[(9)] = inst_37672);

(statearr_37735[(10)] = inst_37671);

(statearr_37735[(12)] = inst_37673);

return statearr_37735;
})();
var statearr_37736_37770 = state_37718__$1;
(statearr_37736_37770[(2)] = null);

(statearr_37736_37770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (17))){
var inst_37684 = (state_37718[(7)]);
var inst_37688 = cljs.core.chunk_first.call(null,inst_37684);
var inst_37689 = cljs.core.chunk_rest.call(null,inst_37684);
var inst_37690 = cljs.core.count.call(null,inst_37688);
var inst_37670 = inst_37689;
var inst_37671 = inst_37688;
var inst_37672 = inst_37690;
var inst_37673 = (0);
var state_37718__$1 = (function (){var statearr_37737 = state_37718;
(statearr_37737[(8)] = inst_37670);

(statearr_37737[(9)] = inst_37672);

(statearr_37737[(10)] = inst_37671);

(statearr_37737[(12)] = inst_37673);

return statearr_37737;
})();
var statearr_37738_37771 = state_37718__$1;
(statearr_37738_37771[(2)] = null);

(statearr_37738_37771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (3))){
var inst_37716 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37718__$1,inst_37716);
} else {
if((state_val_37719 === (12))){
var inst_37704 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
var statearr_37739_37772 = state_37718__$1;
(statearr_37739_37772[(2)] = inst_37704);

(statearr_37739_37772[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (2))){
var state_37718__$1 = state_37718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37718__$1,(4),in$);
} else {
if((state_val_37719 === (23))){
var inst_37712 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
var statearr_37740_37773 = state_37718__$1;
(statearr_37740_37773[(2)] = inst_37712);

(statearr_37740_37773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (19))){
var inst_37699 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
var statearr_37741_37774 = state_37718__$1;
(statearr_37741_37774[(2)] = inst_37699);

(statearr_37741_37774[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (11))){
var inst_37684 = (state_37718[(7)]);
var inst_37670 = (state_37718[(8)]);
var inst_37684__$1 = cljs.core.seq.call(null,inst_37670);
var state_37718__$1 = (function (){var statearr_37742 = state_37718;
(statearr_37742[(7)] = inst_37684__$1);

return statearr_37742;
})();
if(inst_37684__$1){
var statearr_37743_37775 = state_37718__$1;
(statearr_37743_37775[(1)] = (14));

} else {
var statearr_37744_37776 = state_37718__$1;
(statearr_37744_37776[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (9))){
var inst_37706 = (state_37718[(2)]);
var inst_37707 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37718__$1 = (function (){var statearr_37745 = state_37718;
(statearr_37745[(15)] = inst_37706);

return statearr_37745;
})();
if(cljs.core.truth_(inst_37707)){
var statearr_37746_37777 = state_37718__$1;
(statearr_37746_37777[(1)] = (21));

} else {
var statearr_37747_37778 = state_37718__$1;
(statearr_37747_37778[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (5))){
var inst_37662 = cljs.core.async.close_BANG_.call(null,out);
var state_37718__$1 = state_37718;
var statearr_37748_37779 = state_37718__$1;
(statearr_37748_37779[(2)] = inst_37662);

(statearr_37748_37779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (14))){
var inst_37684 = (state_37718[(7)]);
var inst_37686 = cljs.core.chunked_seq_QMARK_.call(null,inst_37684);
var state_37718__$1 = state_37718;
if(inst_37686){
var statearr_37749_37780 = state_37718__$1;
(statearr_37749_37780[(1)] = (17));

} else {
var statearr_37750_37781 = state_37718__$1;
(statearr_37750_37781[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (16))){
var inst_37702 = (state_37718[(2)]);
var state_37718__$1 = state_37718;
var statearr_37751_37782 = state_37718__$1;
(statearr_37751_37782[(2)] = inst_37702);

(statearr_37751_37782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37719 === (10))){
var inst_37671 = (state_37718[(10)]);
var inst_37673 = (state_37718[(12)]);
var inst_37678 = cljs.core._nth.call(null,inst_37671,inst_37673);
var state_37718__$1 = state_37718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37718__$1,(13),out,inst_37678);
} else {
if((state_val_37719 === (18))){
var inst_37684 = (state_37718[(7)]);
var inst_37693 = cljs.core.first.call(null,inst_37684);
var state_37718__$1 = state_37718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37718__$1,(20),out,inst_37693);
} else {
if((state_val_37719 === (8))){
var inst_37672 = (state_37718[(9)]);
var inst_37673 = (state_37718[(12)]);
var inst_37675 = (inst_37673 < inst_37672);
var inst_37676 = inst_37675;
var state_37718__$1 = state_37718;
if(cljs.core.truth_(inst_37676)){
var statearr_37752_37783 = state_37718__$1;
(statearr_37752_37783[(1)] = (10));

} else {
var statearr_37753_37784 = state_37718__$1;
(statearr_37753_37784[(1)] = (11));

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
});})(c__28954__auto__))
;
return ((function (switch__28892__auto__,c__28954__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28893__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28893__auto____0 = (function (){
var statearr_37757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37757[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28893__auto__);

(statearr_37757[(1)] = (1));

return statearr_37757;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28893__auto____1 = (function (state_37718){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_37718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e37758){if((e37758 instanceof Object)){
var ex__28896__auto__ = e37758;
var statearr_37759_37785 = state_37718;
(statearr_37759_37785[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37786 = state_37718;
state_37718 = G__37786;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28893__auto__ = function(state_37718){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28893__auto____1.call(this,state_37718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28893__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28893__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto__))
})();
var state__28956__auto__ = (function (){var statearr_37760 = f__28955__auto__.call(null);
(statearr_37760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto__);

return statearr_37760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto__))
);

return c__28954__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__37788 = arguments.length;
switch (G__37788) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__37791 = arguments.length;
switch (G__37791) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__37794 = arguments.length;
switch (G__37794) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28954__auto___37844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___37844,out){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___37844,out){
return (function (state_37818){
var state_val_37819 = (state_37818[(1)]);
if((state_val_37819 === (7))){
var inst_37813 = (state_37818[(2)]);
var state_37818__$1 = state_37818;
var statearr_37820_37845 = state_37818__$1;
(statearr_37820_37845[(2)] = inst_37813);

(statearr_37820_37845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37819 === (1))){
var inst_37795 = null;
var state_37818__$1 = (function (){var statearr_37821 = state_37818;
(statearr_37821[(7)] = inst_37795);

return statearr_37821;
})();
var statearr_37822_37846 = state_37818__$1;
(statearr_37822_37846[(2)] = null);

(statearr_37822_37846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37819 === (4))){
var inst_37798 = (state_37818[(8)]);
var inst_37798__$1 = (state_37818[(2)]);
var inst_37799 = (inst_37798__$1 == null);
var inst_37800 = cljs.core.not.call(null,inst_37799);
var state_37818__$1 = (function (){var statearr_37823 = state_37818;
(statearr_37823[(8)] = inst_37798__$1);

return statearr_37823;
})();
if(inst_37800){
var statearr_37824_37847 = state_37818__$1;
(statearr_37824_37847[(1)] = (5));

} else {
var statearr_37825_37848 = state_37818__$1;
(statearr_37825_37848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37819 === (6))){
var state_37818__$1 = state_37818;
var statearr_37826_37849 = state_37818__$1;
(statearr_37826_37849[(2)] = null);

(statearr_37826_37849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37819 === (3))){
var inst_37815 = (state_37818[(2)]);
var inst_37816 = cljs.core.async.close_BANG_.call(null,out);
var state_37818__$1 = (function (){var statearr_37827 = state_37818;
(statearr_37827[(9)] = inst_37815);

return statearr_37827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37818__$1,inst_37816);
} else {
if((state_val_37819 === (2))){
var state_37818__$1 = state_37818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37818__$1,(4),ch);
} else {
if((state_val_37819 === (11))){
var inst_37798 = (state_37818[(8)]);
var inst_37807 = (state_37818[(2)]);
var inst_37795 = inst_37798;
var state_37818__$1 = (function (){var statearr_37828 = state_37818;
(statearr_37828[(10)] = inst_37807);

(statearr_37828[(7)] = inst_37795);

return statearr_37828;
})();
var statearr_37829_37850 = state_37818__$1;
(statearr_37829_37850[(2)] = null);

(statearr_37829_37850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37819 === (9))){
var inst_37798 = (state_37818[(8)]);
var state_37818__$1 = state_37818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37818__$1,(11),out,inst_37798);
} else {
if((state_val_37819 === (5))){
var inst_37795 = (state_37818[(7)]);
var inst_37798 = (state_37818[(8)]);
var inst_37802 = cljs.core._EQ_.call(null,inst_37798,inst_37795);
var state_37818__$1 = state_37818;
if(inst_37802){
var statearr_37831_37851 = state_37818__$1;
(statearr_37831_37851[(1)] = (8));

} else {
var statearr_37832_37852 = state_37818__$1;
(statearr_37832_37852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37819 === (10))){
var inst_37810 = (state_37818[(2)]);
var state_37818__$1 = state_37818;
var statearr_37833_37853 = state_37818__$1;
(statearr_37833_37853[(2)] = inst_37810);

(statearr_37833_37853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37819 === (8))){
var inst_37795 = (state_37818[(7)]);
var tmp37830 = inst_37795;
var inst_37795__$1 = tmp37830;
var state_37818__$1 = (function (){var statearr_37834 = state_37818;
(statearr_37834[(7)] = inst_37795__$1);

return statearr_37834;
})();
var statearr_37835_37854 = state_37818__$1;
(statearr_37835_37854[(2)] = null);

(statearr_37835_37854[(1)] = (2));


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
});})(c__28954__auto___37844,out))
;
return ((function (switch__28892__auto__,c__28954__auto___37844,out){
return (function() {
var cljs$core$async$state_machine__28893__auto__ = null;
var cljs$core$async$state_machine__28893__auto____0 = (function (){
var statearr_37839 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37839[(0)] = cljs$core$async$state_machine__28893__auto__);

(statearr_37839[(1)] = (1));

return statearr_37839;
});
var cljs$core$async$state_machine__28893__auto____1 = (function (state_37818){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_37818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e37840){if((e37840 instanceof Object)){
var ex__28896__auto__ = e37840;
var statearr_37841_37855 = state_37818;
(statearr_37841_37855[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37856 = state_37818;
state_37818 = G__37856;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$state_machine__28893__auto__ = function(state_37818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28893__auto____1.call(this,state_37818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28893__auto____0;
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28893__auto____1;
return cljs$core$async$state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___37844,out))
})();
var state__28956__auto__ = (function (){var statearr_37842 = f__28955__auto__.call(null);
(statearr_37842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___37844);

return statearr_37842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___37844,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__37858 = arguments.length;
switch (G__37858) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28954__auto___37927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___37927,out){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___37927,out){
return (function (state_37896){
var state_val_37897 = (state_37896[(1)]);
if((state_val_37897 === (7))){
var inst_37892 = (state_37896[(2)]);
var state_37896__$1 = state_37896;
var statearr_37898_37928 = state_37896__$1;
(statearr_37898_37928[(2)] = inst_37892);

(statearr_37898_37928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (1))){
var inst_37859 = (new Array(n));
var inst_37860 = inst_37859;
var inst_37861 = (0);
var state_37896__$1 = (function (){var statearr_37899 = state_37896;
(statearr_37899[(7)] = inst_37861);

(statearr_37899[(8)] = inst_37860);

return statearr_37899;
})();
var statearr_37900_37929 = state_37896__$1;
(statearr_37900_37929[(2)] = null);

(statearr_37900_37929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (4))){
var inst_37864 = (state_37896[(9)]);
var inst_37864__$1 = (state_37896[(2)]);
var inst_37865 = (inst_37864__$1 == null);
var inst_37866 = cljs.core.not.call(null,inst_37865);
var state_37896__$1 = (function (){var statearr_37901 = state_37896;
(statearr_37901[(9)] = inst_37864__$1);

return statearr_37901;
})();
if(inst_37866){
var statearr_37902_37930 = state_37896__$1;
(statearr_37902_37930[(1)] = (5));

} else {
var statearr_37903_37931 = state_37896__$1;
(statearr_37903_37931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (15))){
var inst_37886 = (state_37896[(2)]);
var state_37896__$1 = state_37896;
var statearr_37904_37932 = state_37896__$1;
(statearr_37904_37932[(2)] = inst_37886);

(statearr_37904_37932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (13))){
var state_37896__$1 = state_37896;
var statearr_37905_37933 = state_37896__$1;
(statearr_37905_37933[(2)] = null);

(statearr_37905_37933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (6))){
var inst_37861 = (state_37896[(7)]);
var inst_37882 = (inst_37861 > (0));
var state_37896__$1 = state_37896;
if(cljs.core.truth_(inst_37882)){
var statearr_37906_37934 = state_37896__$1;
(statearr_37906_37934[(1)] = (12));

} else {
var statearr_37907_37935 = state_37896__$1;
(statearr_37907_37935[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (3))){
var inst_37894 = (state_37896[(2)]);
var state_37896__$1 = state_37896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37896__$1,inst_37894);
} else {
if((state_val_37897 === (12))){
var inst_37860 = (state_37896[(8)]);
var inst_37884 = cljs.core.vec.call(null,inst_37860);
var state_37896__$1 = state_37896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37896__$1,(15),out,inst_37884);
} else {
if((state_val_37897 === (2))){
var state_37896__$1 = state_37896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37896__$1,(4),ch);
} else {
if((state_val_37897 === (11))){
var inst_37876 = (state_37896[(2)]);
var inst_37877 = (new Array(n));
var inst_37860 = inst_37877;
var inst_37861 = (0);
var state_37896__$1 = (function (){var statearr_37908 = state_37896;
(statearr_37908[(7)] = inst_37861);

(statearr_37908[(8)] = inst_37860);

(statearr_37908[(10)] = inst_37876);

return statearr_37908;
})();
var statearr_37909_37936 = state_37896__$1;
(statearr_37909_37936[(2)] = null);

(statearr_37909_37936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (9))){
var inst_37860 = (state_37896[(8)]);
var inst_37874 = cljs.core.vec.call(null,inst_37860);
var state_37896__$1 = state_37896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37896__$1,(11),out,inst_37874);
} else {
if((state_val_37897 === (5))){
var inst_37869 = (state_37896[(11)]);
var inst_37861 = (state_37896[(7)]);
var inst_37860 = (state_37896[(8)]);
var inst_37864 = (state_37896[(9)]);
var inst_37868 = (inst_37860[inst_37861] = inst_37864);
var inst_37869__$1 = (inst_37861 + (1));
var inst_37870 = (inst_37869__$1 < n);
var state_37896__$1 = (function (){var statearr_37910 = state_37896;
(statearr_37910[(11)] = inst_37869__$1);

(statearr_37910[(12)] = inst_37868);

return statearr_37910;
})();
if(cljs.core.truth_(inst_37870)){
var statearr_37911_37937 = state_37896__$1;
(statearr_37911_37937[(1)] = (8));

} else {
var statearr_37912_37938 = state_37896__$1;
(statearr_37912_37938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (14))){
var inst_37889 = (state_37896[(2)]);
var inst_37890 = cljs.core.async.close_BANG_.call(null,out);
var state_37896__$1 = (function (){var statearr_37914 = state_37896;
(statearr_37914[(13)] = inst_37889);

return statearr_37914;
})();
var statearr_37915_37939 = state_37896__$1;
(statearr_37915_37939[(2)] = inst_37890);

(statearr_37915_37939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (10))){
var inst_37880 = (state_37896[(2)]);
var state_37896__$1 = state_37896;
var statearr_37916_37940 = state_37896__$1;
(statearr_37916_37940[(2)] = inst_37880);

(statearr_37916_37940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (8))){
var inst_37869 = (state_37896[(11)]);
var inst_37860 = (state_37896[(8)]);
var tmp37913 = inst_37860;
var inst_37860__$1 = tmp37913;
var inst_37861 = inst_37869;
var state_37896__$1 = (function (){var statearr_37917 = state_37896;
(statearr_37917[(7)] = inst_37861);

(statearr_37917[(8)] = inst_37860__$1);

return statearr_37917;
})();
var statearr_37918_37941 = state_37896__$1;
(statearr_37918_37941[(2)] = null);

(statearr_37918_37941[(1)] = (2));


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
});})(c__28954__auto___37927,out))
;
return ((function (switch__28892__auto__,c__28954__auto___37927,out){
return (function() {
var cljs$core$async$state_machine__28893__auto__ = null;
var cljs$core$async$state_machine__28893__auto____0 = (function (){
var statearr_37922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37922[(0)] = cljs$core$async$state_machine__28893__auto__);

(statearr_37922[(1)] = (1));

return statearr_37922;
});
var cljs$core$async$state_machine__28893__auto____1 = (function (state_37896){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_37896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e37923){if((e37923 instanceof Object)){
var ex__28896__auto__ = e37923;
var statearr_37924_37942 = state_37896;
(statearr_37924_37942[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37943 = state_37896;
state_37896 = G__37943;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$state_machine__28893__auto__ = function(state_37896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28893__auto____1.call(this,state_37896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28893__auto____0;
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28893__auto____1;
return cljs$core$async$state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___37927,out))
})();
var state__28956__auto__ = (function (){var statearr_37925 = f__28955__auto__.call(null);
(statearr_37925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___37927);

return statearr_37925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___37927,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__37945 = arguments.length;
switch (G__37945) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28954__auto___38018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28954__auto___38018,out){
return (function (){
var f__28955__auto__ = (function (){var switch__28892__auto__ = ((function (c__28954__auto___38018,out){
return (function (state_37987){
var state_val_37988 = (state_37987[(1)]);
if((state_val_37988 === (7))){
var inst_37983 = (state_37987[(2)]);
var state_37987__$1 = state_37987;
var statearr_37989_38019 = state_37987__$1;
(statearr_37989_38019[(2)] = inst_37983);

(statearr_37989_38019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (1))){
var inst_37946 = [];
var inst_37947 = inst_37946;
var inst_37948 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37987__$1 = (function (){var statearr_37990 = state_37987;
(statearr_37990[(7)] = inst_37947);

(statearr_37990[(8)] = inst_37948);

return statearr_37990;
})();
var statearr_37991_38020 = state_37987__$1;
(statearr_37991_38020[(2)] = null);

(statearr_37991_38020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (4))){
var inst_37951 = (state_37987[(9)]);
var inst_37951__$1 = (state_37987[(2)]);
var inst_37952 = (inst_37951__$1 == null);
var inst_37953 = cljs.core.not.call(null,inst_37952);
var state_37987__$1 = (function (){var statearr_37992 = state_37987;
(statearr_37992[(9)] = inst_37951__$1);

return statearr_37992;
})();
if(inst_37953){
var statearr_37993_38021 = state_37987__$1;
(statearr_37993_38021[(1)] = (5));

} else {
var statearr_37994_38022 = state_37987__$1;
(statearr_37994_38022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (15))){
var inst_37977 = (state_37987[(2)]);
var state_37987__$1 = state_37987;
var statearr_37995_38023 = state_37987__$1;
(statearr_37995_38023[(2)] = inst_37977);

(statearr_37995_38023[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (13))){
var state_37987__$1 = state_37987;
var statearr_37996_38024 = state_37987__$1;
(statearr_37996_38024[(2)] = null);

(statearr_37996_38024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (6))){
var inst_37947 = (state_37987[(7)]);
var inst_37972 = inst_37947.length;
var inst_37973 = (inst_37972 > (0));
var state_37987__$1 = state_37987;
if(cljs.core.truth_(inst_37973)){
var statearr_37997_38025 = state_37987__$1;
(statearr_37997_38025[(1)] = (12));

} else {
var statearr_37998_38026 = state_37987__$1;
(statearr_37998_38026[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (3))){
var inst_37985 = (state_37987[(2)]);
var state_37987__$1 = state_37987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37987__$1,inst_37985);
} else {
if((state_val_37988 === (12))){
var inst_37947 = (state_37987[(7)]);
var inst_37975 = cljs.core.vec.call(null,inst_37947);
var state_37987__$1 = state_37987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37987__$1,(15),out,inst_37975);
} else {
if((state_val_37988 === (2))){
var state_37987__$1 = state_37987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37987__$1,(4),ch);
} else {
if((state_val_37988 === (11))){
var inst_37955 = (state_37987[(10)]);
var inst_37951 = (state_37987[(9)]);
var inst_37965 = (state_37987[(2)]);
var inst_37966 = [];
var inst_37967 = inst_37966.push(inst_37951);
var inst_37947 = inst_37966;
var inst_37948 = inst_37955;
var state_37987__$1 = (function (){var statearr_37999 = state_37987;
(statearr_37999[(11)] = inst_37965);

(statearr_37999[(7)] = inst_37947);

(statearr_37999[(12)] = inst_37967);

(statearr_37999[(8)] = inst_37948);

return statearr_37999;
})();
var statearr_38000_38027 = state_37987__$1;
(statearr_38000_38027[(2)] = null);

(statearr_38000_38027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (9))){
var inst_37947 = (state_37987[(7)]);
var inst_37963 = cljs.core.vec.call(null,inst_37947);
var state_37987__$1 = state_37987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37987__$1,(11),out,inst_37963);
} else {
if((state_val_37988 === (5))){
var inst_37948 = (state_37987[(8)]);
var inst_37955 = (state_37987[(10)]);
var inst_37951 = (state_37987[(9)]);
var inst_37955__$1 = f.call(null,inst_37951);
var inst_37956 = cljs.core._EQ_.call(null,inst_37955__$1,inst_37948);
var inst_37957 = cljs.core.keyword_identical_QMARK_.call(null,inst_37948,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37958 = (inst_37956) || (inst_37957);
var state_37987__$1 = (function (){var statearr_38001 = state_37987;
(statearr_38001[(10)] = inst_37955__$1);

return statearr_38001;
})();
if(cljs.core.truth_(inst_37958)){
var statearr_38002_38028 = state_37987__$1;
(statearr_38002_38028[(1)] = (8));

} else {
var statearr_38003_38029 = state_37987__$1;
(statearr_38003_38029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (14))){
var inst_37980 = (state_37987[(2)]);
var inst_37981 = cljs.core.async.close_BANG_.call(null,out);
var state_37987__$1 = (function (){var statearr_38005 = state_37987;
(statearr_38005[(13)] = inst_37980);

return statearr_38005;
})();
var statearr_38006_38030 = state_37987__$1;
(statearr_38006_38030[(2)] = inst_37981);

(statearr_38006_38030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (10))){
var inst_37970 = (state_37987[(2)]);
var state_37987__$1 = state_37987;
var statearr_38007_38031 = state_37987__$1;
(statearr_38007_38031[(2)] = inst_37970);

(statearr_38007_38031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (8))){
var inst_37947 = (state_37987[(7)]);
var inst_37955 = (state_37987[(10)]);
var inst_37951 = (state_37987[(9)]);
var inst_37960 = inst_37947.push(inst_37951);
var tmp38004 = inst_37947;
var inst_37947__$1 = tmp38004;
var inst_37948 = inst_37955;
var state_37987__$1 = (function (){var statearr_38008 = state_37987;
(statearr_38008[(7)] = inst_37947__$1);

(statearr_38008[(14)] = inst_37960);

(statearr_38008[(8)] = inst_37948);

return statearr_38008;
})();
var statearr_38009_38032 = state_37987__$1;
(statearr_38009_38032[(2)] = null);

(statearr_38009_38032[(1)] = (2));


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
});})(c__28954__auto___38018,out))
;
return ((function (switch__28892__auto__,c__28954__auto___38018,out){
return (function() {
var cljs$core$async$state_machine__28893__auto__ = null;
var cljs$core$async$state_machine__28893__auto____0 = (function (){
var statearr_38013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38013[(0)] = cljs$core$async$state_machine__28893__auto__);

(statearr_38013[(1)] = (1));

return statearr_38013;
});
var cljs$core$async$state_machine__28893__auto____1 = (function (state_37987){
while(true){
var ret_value__28894__auto__ = (function (){try{while(true){
var result__28895__auto__ = switch__28892__auto__.call(null,state_37987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28895__auto__;
}
break;
}
}catch (e38014){if((e38014 instanceof Object)){
var ex__28896__auto__ = e38014;
var statearr_38015_38033 = state_37987;
(statearr_38015_38033[(5)] = ex__28896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38034 = state_37987;
state_37987 = G__38034;
continue;
} else {
return ret_value__28894__auto__;
}
break;
}
});
cljs$core$async$state_machine__28893__auto__ = function(state_37987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28893__auto____1.call(this,state_37987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28893__auto____0;
cljs$core$async$state_machine__28893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28893__auto____1;
return cljs$core$async$state_machine__28893__auto__;
})()
;})(switch__28892__auto__,c__28954__auto___38018,out))
})();
var state__28956__auto__ = (function (){var statearr_38016 = f__28955__auto__.call(null);
(statearr_38016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28954__auto___38018);

return statearr_38016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28956__auto__);
});})(c__28954__auto___38018,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map