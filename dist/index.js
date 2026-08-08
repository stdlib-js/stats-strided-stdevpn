"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var n=s(function(h,i){
var o=require('@stdlib/stats-strided-variancepn/dist').ndarray,y=require('@stdlib/math-base-special-sqrt/dist');function f(e,r,t,a,c){return y(o(e,r,t,a,c))}i.exports=f
});var v=s(function(j,u){
var x=require('@stdlib/strided-base-stride2offset/dist'),l=n();function m(e,r,t,a){return l(e,r,t,a,x(e,a))}u.exports=m
});var p=s(function(k,d){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),R=n();O(q,"ndarray",R);d.exports=q
});var b=p();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
