var Kg=Object.defineProperty;var E1=s=>{throw TypeError(s)};var $g=(s,l,i)=>l in s?Kg(s,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[l]=i;var Le=(s,l,i)=>$g(s,typeof l!="symbol"?l+"":l,i),Jg=(s,l,i)=>l.has(s)||E1("Cannot "+i);var N1=(s,l,i)=>l.has(s)?E1("Cannot add the same private member more than once"):l instanceof WeakSet?l.add(s):l.set(s,i);var Ei=(s,l,i)=>(Jg(s,l,"access private method"),i);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(u){if(u.ep)return;u.ep=!0;const d=i(u);fetch(u.href,d)}})();function Fg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Vc={exports:{}},Ni={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T1;function Pg(){if(T1)return Ni;T1=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function i(r,u,d){var f=null;if(d!==void 0&&(f=""+d),u.key!==void 0&&(f=""+u.key),"key"in u){d={};for(var h in u)h!=="key"&&(d[h]=u[h])}else d=u;return u=d.ref,{$$typeof:s,type:r,key:f,ref:u!==void 0?u:null,props:d}}return Ni.Fragment=l,Ni.jsx=i,Ni.jsxs=i,Ni}var D1;function Wg(){return D1||(D1=1,Vc.exports=Pg()),Vc.exports}var y=Wg(),Yc={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1;function e2(){if(k1)return oe;k1=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),T=Symbol.iterator;function N(w){return w===null||typeof w!="object"?null:(w=T&&w[T]||w["@@iterator"],typeof w=="function"?w:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,Z={};function q(w,R,V){this.props=w,this.context=R,this.refs=Z,this.updater=V||_}q.prototype.isReactComponent={},q.prototype.setState=function(w,R){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,R,"setState")},q.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function Y(){}Y.prototype=q.prototype;function I(w,R,V){this.props=w,this.context=R,this.refs=Z,this.updater=V||_}var Q=I.prototype=new Y;Q.constructor=I,z(Q,q.prototype),Q.isPureReactComponent=!0;var F=Array.isArray;function K(){}var B={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function $(w,R,V){var X=V.ref;return{$$typeof:s,type:w,key:R,ref:X!==void 0?X:null,props:V}}function ne(w,R){return $(w.type,R,w.props)}function se(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function re(w){var R={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(V){return R[V]})}var he=/\/+/g;function je(w,R){return typeof w=="object"&&w!==null&&w.key!=null?re(""+w.key):R.toString(36)}function Fe(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(K,K):(w.status="pending",w.then(function(R){w.status==="pending"&&(w.status="fulfilled",w.value=R)},function(R){w.status==="pending"&&(w.status="rejected",w.reason=R)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function j(w,R,V,X,J){var te=typeof w;(te==="undefined"||te==="boolean")&&(w=null);var pe=!1;if(w===null)pe=!0;else switch(te){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(w.$$typeof){case s:case l:pe=!0;break;case x:return pe=w._init,j(pe(w._payload),R,V,X,J)}}if(pe)return J=J(w),pe=X===""?"."+je(w,0):X,F(J)?(V="",pe!=null&&(V=pe.replace(he,"$&/")+"/"),j(J,R,V,"",function(fe){return fe})):J!=null&&(se(J)&&(J=ne(J,V+(J.key==null||w&&w.key===J.key?"":(""+J.key).replace(he,"$&/")+"/")+pe)),R.push(J)),1;pe=0;var ke=X===""?".":X+":";if(F(w))for(var Se=0;Se<w.length;Se++)X=w[Se],te=ke+je(X,Se),pe+=j(X,R,V,te,J);else if(Se=N(w),typeof Se=="function")for(w=Se.call(w),Se=0;!(X=w.next()).done;)X=X.value,te=ke+je(X,Se++),pe+=j(X,R,V,te,J);else if(te==="object"){if(typeof w.then=="function")return j(Fe(w),R,V,X,J);throw R=String(w),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return pe}function G(w,R,V){if(w==null)return w;var X=[],J=0;return j(w,X,"","",function(te){return R.call(V,te,J++)}),X}function ae(w){if(w._status===-1){var R=w._result;R=R(),R.then(function(V){(w._status===0||w._status===-1)&&(w._status=1,w._result=V)},function(V){(w._status===0||w._status===-1)&&(w._status=2,w._result=V)}),w._status===-1&&(w._status=0,w._result=R)}if(w._status===1)return w._result.default;throw w._result}var de=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},ye={map:G,forEach:function(w,R,V){G(w,function(){R.apply(this,arguments)},V)},count:function(w){var R=0;return G(w,function(){R++}),R},toArray:function(w){return G(w,function(R){return R})||[]},only:function(w){if(!se(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return oe.Activity=S,oe.Children=ye,oe.Component=q,oe.Fragment=i,oe.Profiler=u,oe.PureComponent=I,oe.StrictMode=r,oe.Suspense=g,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,oe.__COMPILER_RUNTIME={__proto__:null,c:function(w){return B.H.useMemoCache(w)}},oe.cache=function(w){return function(){return w.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(w,R,V){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var X=z({},w.props),J=w.key;if(R!=null)for(te in R.key!==void 0&&(J=""+R.key),R)!P.call(R,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&R.ref===void 0||(X[te]=R[te]);var te=arguments.length-2;if(te===1)X.children=V;else if(1<te){for(var pe=Array(te),ke=0;ke<te;ke++)pe[ke]=arguments[ke+2];X.children=pe}return $(w.type,J,X)},oe.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:d,_context:w},w},oe.createElement=function(w,R,V){var X,J={},te=null;if(R!=null)for(X in R.key!==void 0&&(te=""+R.key),R)P.call(R,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(J[X]=R[X]);var pe=arguments.length-2;if(pe===1)J.children=V;else if(1<pe){for(var ke=Array(pe),Se=0;Se<pe;Se++)ke[Se]=arguments[Se+2];J.children=ke}if(w&&w.defaultProps)for(X in pe=w.defaultProps,pe)J[X]===void 0&&(J[X]=pe[X]);return $(w,te,J)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(w){return{$$typeof:h,render:w}},oe.isValidElement=se,oe.lazy=function(w){return{$$typeof:x,_payload:{_status:-1,_result:w},_init:ae}},oe.memo=function(w,R){return{$$typeof:v,type:w,compare:R===void 0?null:R}},oe.startTransition=function(w){var R=B.T,V={};B.T=V;try{var X=w(),J=B.S;J!==null&&J(V,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(K,de)}catch(te){de(te)}finally{R!==null&&V.types!==null&&(R.types=V.types),B.T=R}},oe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},oe.use=function(w){return B.H.use(w)},oe.useActionState=function(w,R,V){return B.H.useActionState(w,R,V)},oe.useCallback=function(w,R){return B.H.useCallback(w,R)},oe.useContext=function(w){return B.H.useContext(w)},oe.useDebugValue=function(){},oe.useDeferredValue=function(w,R){return B.H.useDeferredValue(w,R)},oe.useEffect=function(w,R){return B.H.useEffect(w,R)},oe.useEffectEvent=function(w){return B.H.useEffectEvent(w)},oe.useId=function(){return B.H.useId()},oe.useImperativeHandle=function(w,R,V){return B.H.useImperativeHandle(w,R,V)},oe.useInsertionEffect=function(w,R){return B.H.useInsertionEffect(w,R)},oe.useLayoutEffect=function(w,R){return B.H.useLayoutEffect(w,R)},oe.useMemo=function(w,R){return B.H.useMemo(w,R)},oe.useOptimistic=function(w,R){return B.H.useOptimistic(w,R)},oe.useReducer=function(w,R,V){return B.H.useReducer(w,R,V)},oe.useRef=function(w){return B.H.useRef(w)},oe.useState=function(w){return B.H.useState(w)},oe.useSyncExternalStore=function(w,R,V){return B.H.useSyncExternalStore(w,R,V)},oe.useTransition=function(){return B.H.useTransition()},oe.version="19.2.6",oe}var M1;function du(){return M1||(M1=1,Yc.exports=e2()),Yc.exports}var m=du();const Be=Fg(m);var Gc={exports:{}},Ti={},Xc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R1;function t2(){return R1||(R1=1,(function(s){function l(j,G){var ae=j.length;j.push(G);e:for(;0<ae;){var de=ae-1>>>1,ye=j[de];if(0<u(ye,G))j[de]=G,j[ae]=ye,ae=de;else break e}}function i(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var G=j[0],ae=j.pop();if(ae!==G){j[0]=ae;e:for(var de=0,ye=j.length,w=ye>>>1;de<w;){var R=2*(de+1)-1,V=j[R],X=R+1,J=j[X];if(0>u(V,ae))X<ye&&0>u(J,V)?(j[de]=J,j[X]=ae,de=X):(j[de]=V,j[R]=ae,de=R);else if(X<ye&&0>u(J,ae))j[de]=J,j[X]=ae,de=X;else break e}}return G}function u(j,G){var ae=j.sortIndex-G.sortIndex;return ae!==0?ae:j.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;s.unstable_now=function(){return d.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var g=[],v=[],x=1,S=null,T=3,N=!1,_=!1,z=!1,Z=!1,q=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function Q(j){for(var G=i(v);G!==null;){if(G.callback===null)r(v);else if(G.startTime<=j)r(v),G.sortIndex=G.expirationTime,l(g,G);else break;G=i(v)}}function F(j){if(z=!1,Q(j),!_)if(i(g)!==null)_=!0,K||(K=!0,re());else{var G=i(v);G!==null&&Fe(F,G.startTime-j)}}var K=!1,B=-1,P=5,$=-1;function ne(){return Z?!0:!(s.unstable_now()-$<P)}function se(){if(Z=!1,K){var j=s.unstable_now();$=j;var G=!0;try{e:{_=!1,z&&(z=!1,Y(B),B=-1),N=!0;var ae=T;try{t:{for(Q(j),S=i(g);S!==null&&!(S.expirationTime>j&&ne());){var de=S.callback;if(typeof de=="function"){S.callback=null,T=S.priorityLevel;var ye=de(S.expirationTime<=j);if(j=s.unstable_now(),typeof ye=="function"){S.callback=ye,Q(j),G=!0;break t}S===i(g)&&r(g),Q(j)}else r(g);S=i(g)}if(S!==null)G=!0;else{var w=i(v);w!==null&&Fe(F,w.startTime-j),G=!1}}break e}finally{S=null,T=ae,N=!1}G=void 0}}finally{G?re():K=!1}}}var re;if(typeof I=="function")re=function(){I(se)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,je=he.port2;he.port1.onmessage=se,re=function(){je.postMessage(null)}}else re=function(){q(se,0)};function Fe(j,G){B=q(function(){j(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return T},s.unstable_next=function(j){switch(T){case 1:case 2:case 3:var G=3;break;default:G=T}var ae=T;T=G;try{return j()}finally{T=ae}},s.unstable_requestPaint=function(){Z=!0},s.unstable_runWithPriority=function(j,G){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ae=T;T=j;try{return G()}finally{T=ae}},s.unstable_scheduleCallback=function(j,G,ae){var de=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?de+ae:de):ae=de,j){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=ae+ye,j={id:x++,callback:G,priorityLevel:j,startTime:ae,expirationTime:ye,sortIndex:-1},ae>de?(j.sortIndex=ae,l(v,j),i(g)===null&&j===i(v)&&(z?(Y(B),B=-1):z=!0,Fe(F,ae-de))):(j.sortIndex=ye,l(g,j),_||N||(_=!0,K||(K=!0,re()))),j},s.unstable_shouldYield=ne,s.unstable_wrapCallback=function(j){var G=T;return function(){var ae=T;T=G;try{return j.apply(this,arguments)}finally{T=ae}}}})(Ic)),Ic}var O1;function n2(){return O1||(O1=1,Xc.exports=t2()),Xc.exports}var Qc={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1;function a2(){if(z1)return ht;z1=1;var s=du();function l(g){var v="https://react.dev/errors/"+g;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)v+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(l(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(g,v,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:S==null?null:""+S,children:g,containerInfo:v,implementation:x}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(g,v){if(g==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ht.createPortal=function(g,v){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(l(299));return d(g,v,null,x)},ht.flushSync=function(g){var v=f.T,x=r.p;try{if(f.T=null,r.p=2,g)return g()}finally{f.T=v,r.p=x,r.d.f()}},ht.preconnect=function(g,v){typeof g=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,r.d.C(g,v))},ht.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},ht.preinit=function(g,v){if(typeof g=="string"&&v&&typeof v.as=="string"){var x=v.as,S=h(x,v.crossOrigin),T=typeof v.integrity=="string"?v.integrity:void 0,N=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;x==="style"?r.d.S(g,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:S,integrity:T,fetchPriority:N}):x==="script"&&r.d.X(g,{crossOrigin:S,integrity:T,fetchPriority:N,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},ht.preinitModule=function(g,v){if(typeof g=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var x=h(v.as,v.crossOrigin);r.d.M(g,{crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&r.d.M(g)},ht.preload=function(g,v){if(typeof g=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var x=v.as,S=h(x,v.crossOrigin);r.d.L(g,x,{crossOrigin:S,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},ht.preloadModule=function(g,v){if(typeof g=="string")if(v){var x=h(v.as,v.crossOrigin);r.d.m(g,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else r.d.m(g)},ht.requestFormReset=function(g){r.d.r(g)},ht.unstable_batchedUpdates=function(g,v){return g(v)},ht.useFormState=function(g,v,x){return f.H.useFormState(g,v,x)},ht.useFormStatus=function(){return f.H.useHostTransitionStatus()},ht.version="19.2.6",ht}var j1;function mp(){if(j1)return Qc.exports;j1=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),Qc.exports=a2(),Qc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _1;function l2(){if(_1)return Ti;_1=1;var s=n2(),l=du(),i=mp();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(r(188))}function v(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(r(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var c=o.alternate;if(c===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===n)return g(o),e;if(c===a)return g(o),t;c=c.sibling}throw Error(r(188))}if(n.return!==a.return)n=o,a=c;else{for(var p=!1,b=o.child;b;){if(b===n){p=!0,n=o,a=c;break}if(b===a){p=!0,a=o,n=c;break}b=b.sibling}if(!p){for(b=c.child;b;){if(b===n){p=!0,n=c,a=o;break}if(b===a){p=!0,a=c,n=o;break}b=b.sibling}if(!p)throw Error(r(189))}}if(n.alternate!==a)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,T=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),I=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),$=Symbol.for("react.activity"),ne=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var he=Symbol.for("react.client.reference");function je(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===he?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case q:return"Profiler";case Z:return"StrictMode";case F:return"Suspense";case K:return"SuspenseList";case $:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _:return"Portal";case I:return e.displayName||"Context";case Y:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return t=e.displayName||null,t!==null?t:je(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return je(e(t))}catch{}}return null}var Fe=Array.isArray,j=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},de=[],ye=-1;function w(e){return{current:e}}function R(e){0>ye||(e.current=de[ye],de[ye]=null,ye--)}function V(e,t){ye++,de[ye]=e.current,e.current=t}var X=w(null),J=w(null),te=w(null),pe=w(null);function ke(e,t){switch(V(te,t),V(J,e),V(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Kf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Kf(t),e=$f(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}R(X),V(X,e)}function Se(){R(X),R(J),R(te)}function fe(e){e.memoizedState!==null&&V(pe,e);var t=X.current,n=$f(t,e.type);t!==n&&(V(J,e),V(X,n))}function dn(e){J.current===e&&(R(X),R(J)),pe.current===e&&(R(pe),Si._currentValue=ae)}var yt,Sn;function it(e){if(yt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yt=t&&t[1]||"",Sn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+e+Sn}var fn=!1;function pn(e,t){if(!e||fn)return"";fn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(O){var M=O}Reflect.construct(e,[],H)}else{try{H.call()}catch(O){M=O}e.call(H.prototype)}}else{try{throw Error()}catch(O){M=O}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(O){if(O&&M&&typeof O.stack=="string")return[O.stack,M.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),p=c[0],b=c[1];if(p&&b){var C=p.split(`
`),k=b.split(`
`);for(o=a=0;a<C.length&&!C[a].includes("DetermineComponentFrameRoot");)a++;for(;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;if(a===C.length||o===k.length)for(a=C.length-1,o=k.length-1;1<=a&&0<=o&&C[a]!==k[o];)o--;for(;1<=a&&0<=o;a--,o--)if(C[a]!==k[o]){if(a!==1||o!==1)do if(a--,o--,0>o||C[a]!==k[o]){var L=`
`+C[a].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=a&&0<=o);break}}}finally{fn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?it(n):""}function Gi(e,t){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return e.child!==t&&t!==null?it("Suspense Fallback"):it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return pn(e.type,!1);case 11:return pn(e.type.render,!1);case 1:return pn(e.type,!0);case 31:return it("Activity");default:return""}}function jl(e){try{var t="",n=null;do t+=Gi(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ya=Object.prototype.hasOwnProperty,Zt=s.unstable_scheduleCallback,Xn=s.unstable_cancelCallback,qa=s.unstable_shouldYield,Xi=s.unstable_requestPaint,dt=s.unstable_now,kr=s.unstable_getCurrentPriorityLevel,Ii=s.unstable_ImmediatePriority,wn=s.unstable_UserBlockingPriority,nn=s.unstable_NormalPriority,xa=s.unstable_LowPriority,_l=s.unstable_IdlePriority,hn=s.log,Qi=s.unstable_setDisableYieldValue,Sa=null,mt=null;function Bt(e){if(typeof hn=="function"&&Qi(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Sa,e)}catch{}}var ft=Math.clz32?Math.clz32:Rr,Mr=Math.log,Ki=Math.LN2;function Rr(e){return e>>>=0,e===0?32:31-(Mr(e)/Ki|0)|0}var Va=256,Ya=262144,Ye=4194304;function Ge(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var b=a&134217727;return b!==0?(a=b&~c,a!==0?o=Ge(a):(p&=b,p!==0?o=Ge(p):n||(n=b&~e,n!==0&&(o=Ge(n))))):(b=a&~c,b!==0?o=Ge(b):p!==0?o=Ge(p):n||(n=a&~e,n!==0&&(o=Ge(n)))),o===0?0:t!==0&&t!==o&&(t&c)===0&&(c=o&-o,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:o}function xt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function St(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pt(){var e=Ye;return Ye<<=1,(Ye&62914560)===0&&(Ye=4194304),e}function wt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pe(e,t,n,a,o,c){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,C=e.expirationTimes,k=e.hiddenUpdates;for(n=p&~n;0<n;){var L=31-ft(n),H=1<<L;b[L]=0,C[L]=-1;var M=k[L];if(M!==null)for(k[L]=null,L=0;L<M.length;L++){var O=M[L];O!==null&&(O.lane&=-536870913)}n&=~H}a!==0&&an(e,a,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~t))}function an(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ft(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Mt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-ft(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function Vt(e,t){var n=t&-t;return n=(n&42)!==0?1:Cn(n),(n&(e.suspendedLanes|t))!==0?0:n}function Cn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function An(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ln(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:v1(e.type))}function In(e,t){var n=G.p;try{return G.p=e,t()}finally{G.p=n}}var Yt=Math.random().toString(36).slice(2),st="__reactFiber$"+Yt,Ct="__reactProps$"+Yt,Ga="__reactContainer$"+Yt,Or="__reactEvents$"+Yt,Uh="__reactListeners$"+Yt,Hh="__reactHandles$"+Yt,ju="__reactResources$"+Yt,Ll="__reactMarker$"+Yt;function zr(e){delete e[st],delete e[Ct],delete e[Or],delete e[Uh],delete e[Hh]}function Xa(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ga]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=n1(e);e!==null;){if(n=e[st])return n;e=n1(e)}return t}e=n,n=e.parentNode}return null}function Ia(e){if(e=e[st]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ul(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Qa(e){var t=e[ju];return t||(t=e[ju]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[Ll]=!0}var _u=new Set,Lu={};function wa(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Lu[e]=t,e=0;e<t.length;e++)_u.add(t[e])}var Zh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uu={},Hu={};function Bh(e){return ya.call(Hu,e)?!0:ya.call(Uu,e)?!1:Zh.test(e)?Hu[e]=!0:(Uu[e]=!0,!1)}function $i(e,t,n){if(Bh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ji(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function En(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qh(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,c=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(p){n=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){if(!e._valueTracker){var t=Zu(e)?"checked":"value";e._valueTracker=qh(e,t,""+e[t])}}function Bu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Zu(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vh=/[\n"\\]/g;function Xt(e){return e.replace(Vh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function _r(e,t,n,a,o,c,p,b){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Gt(t)):e.value!==""+Gt(t)&&(e.value=""+Gt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?Lr(e,p,Gt(t)):n!=null?Lr(e,p,Gt(n)):a!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Gt(b):e.removeAttribute("name")}function qu(e,t,n,a,o,c,p,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){jr(e);return}n=n!=null?""+Gt(n):"",t=t!=null?""+Gt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=b?e.checked:!!a,e.defaultChecked=!!a,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),jr(e)}function Lr(e,t,n){t==="number"&&Fi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function $a(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Vu(e,t,n){if(t!=null&&(t=""+Gt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Gt(n):""}function Yu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(r(92));if(Fe(a)){if(1<a.length)throw Error(r(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Gt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),jr(e)}function Ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Yh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Xu(e,t,n){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&Gu(e,o,a)}else for(var c in t)t.hasOwnProperty(c)&&Gu(e,c,t[c])}function Ur(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pi(e){return Xh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Nn(){}var Hr=null;function Zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,Pa=null;function Iu(e){var t=Ia(e);if(t&&(e=t.stateNode)){var n=e[Ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(_r(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Xt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[Ct]||null;if(!o)throw Error(r(90));_r(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Bu(a)}break e;case"textarea":Vu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&$a(e,!!n.multiple,t,!1)}}}var Br=!1;function Qu(e,t,n){if(Br)return e(t,n);Br=!0;try{var a=e(t);return a}finally{if(Br=!1,(Fa!==null||Pa!==null)&&(Zs(),Fa&&(t=Fa,e=Pa,Pa=Fa=null,Iu(t),e)))for(t=0;t<e.length;t++)Iu(e[t])}}function Hl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Ct]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(r(231,t,typeof n));return n}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qr=!1;if(Tn)try{var Zl={};Object.defineProperty(Zl,"passive",{get:function(){qr=!0}}),window.addEventListener("test",Zl,Zl),window.removeEventListener("test",Zl,Zl)}catch{qr=!1}var Qn=null,Vr=null,Wi=null;function Ku(){if(Wi)return Wi;var e,t=Vr,n=t.length,a,o="value"in Qn?Qn.value:Qn.textContent,c=o.length;for(e=0;e<n&&t[e]===o[e];e++);var p=n-e;for(a=1;a<=p&&t[n-a]===o[c-a];a++);return Wi=o.slice(e,1<a?1-a:void 0)}function es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ts(){return!0}function $u(){return!1}function At(e){function t(n,a,o,c,p){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ts:$u,this.isPropagationStopped=$u,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),t}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=At(Ca),Bl=S({},Ca,{view:0,detail:0}),Ih=At(Bl),Yr,Gr,ql,as=S({},Bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ql&&(ql&&e.type==="mousemove"?(Yr=e.screenX-ql.screenX,Gr=e.screenY-ql.screenY):Gr=Yr=0,ql=e),Yr)},movementY:function(e){return"movementY"in e?e.movementY:Gr}}),Ju=At(as),Qh=S({},as,{dataTransfer:0}),Kh=At(Qh),$h=S({},Bl,{relatedTarget:0}),Xr=At($h),Jh=S({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),Fh=At(Jh),Ph=S({},Ca,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wh=At(Ph),em=S({},Ca,{data:0}),Fu=At(em),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function Ir(){return lm}var im=S({},Bl,{key:function(e){if(e.key){var t=tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ir,charCode:function(e){return e.type==="keypress"?es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sm=At(im),rm=S({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=At(rm),om=S({},Bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ir}),cm=At(om),um=S({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),dm=At(um),fm=S({},as,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pm=At(fm),hm=S({},Ca,{newState:0,oldState:0}),mm=At(hm),gm=[9,13,27,32],Qr=Tn&&"CompositionEvent"in window,Vl=null;Tn&&"documentMode"in document&&(Vl=document.documentMode);var bm=Tn&&"TextEvent"in window&&!Vl,Wu=Tn&&(!Qr||Vl&&8<Vl&&11>=Vl),ed=" ",td=!1;function nd(e,t){switch(e){case"keyup":return gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ad(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function vm(e,t){switch(e){case"compositionend":return ad(t);case"keypress":return t.which!==32?null:(td=!0,ed);case"textInput":return e=t.data,e===ed&&td?null:e;default:return null}}function ym(e,t){if(Wa)return e==="compositionend"||!Qr&&nd(e,t)?(e=Ku(),Wi=Vr=Qn=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wu&&t.locale!=="ko"?null:t.data;default:return null}}var xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xm[e.type]:t==="textarea"}function id(e,t,n,a){Fa?Pa?Pa.push(a):Pa=[a]:Fa=a,t=Is(t,"onChange"),0<t.length&&(n=new ns("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Yl=null,Gl=null;function Sm(e){Vf(e,0)}function ls(e){var t=Ul(e);if(Bu(t))return e}function sd(e,t){if(e==="change")return t}var rd=!1;if(Tn){var Kr;if(Tn){var $r="oninput"in document;if(!$r){var od=document.createElement("div");od.setAttribute("oninput","return;"),$r=typeof od.oninput=="function"}Kr=$r}else Kr=!1;rd=Kr&&(!document.documentMode||9<document.documentMode)}function cd(){Yl&&(Yl.detachEvent("onpropertychange",ud),Gl=Yl=null)}function ud(e){if(e.propertyName==="value"&&ls(Gl)){var t=[];id(t,Gl,e,Zr(e)),Qu(Sm,t)}}function wm(e,t,n){e==="focusin"?(cd(),Yl=t,Gl=n,Yl.attachEvent("onpropertychange",ud)):e==="focusout"&&cd()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ls(Gl)}function Am(e,t){if(e==="click")return ls(t)}function Em(e,t){if(e==="input"||e==="change")return ls(t)}function Nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:Nm;function Xl(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!ya.call(t,o)||!Rt(e[o],t[o]))return!1}return!0}function dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fd(e,t){var n=dd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dd(n)}}function pd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fi(e.document)}return t}function Jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Tm=Tn&&"documentMode"in document&&11>=document.documentMode,el=null,Fr=null,Il=null,Pr=!1;function md(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pr||el==null||el!==Fi(a)||(a=el,"selectionStart"in a&&Jr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Il&&Xl(Il,a)||(Il=a,a=Is(Fr,"onSelect"),0<a.length&&(t=new ns("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=el)))}function Aa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tl={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionrun:Aa("Transition","TransitionRun"),transitionstart:Aa("Transition","TransitionStart"),transitioncancel:Aa("Transition","TransitionCancel"),transitionend:Aa("Transition","TransitionEnd")},Wr={},gd={};Tn&&(gd=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Ea(e){if(Wr[e])return Wr[e];if(!tl[e])return e;var t=tl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gd)return Wr[e]=t[n];return e}var bd=Ea("animationend"),vd=Ea("animationiteration"),yd=Ea("animationstart"),Dm=Ea("transitionrun"),km=Ea("transitionstart"),Mm=Ea("transitioncancel"),xd=Ea("transitionend"),Sd=new Map,eo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eo.push("scrollEnd");function sn(e,t){Sd.set(e,t),wa(t,[e])}var is=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},It=[],nl=0,to=0;function ss(){for(var e=nl,t=to=nl=0;t<e;){var n=It[t];It[t++]=null;var a=It[t];It[t++]=null;var o=It[t];It[t++]=null;var c=It[t];if(It[t++]=null,a!==null&&o!==null){var p=a.pending;p===null?o.next=o:(o.next=p.next,p.next=o),a.pending=o}c!==0&&wd(n,o,c)}}function rs(e,t,n,a){It[nl++]=e,It[nl++]=t,It[nl++]=n,It[nl++]=a,to|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function no(e,t,n,a){return rs(e,t,n,a),os(e)}function Na(e,t){return rs(e,null,null,t),os(e)}function wd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,c=e.return;c!==null;)c.childLanes|=n,a=c.alternate,a!==null&&(a.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&t!==null&&(o=31-ft(n),e=c.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=n|536870912),c):null}function os(e){if(50<hi)throw hi=0,fc=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var al={};function Rm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,a){return new Rm(e,t,n,a)}function ao(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Cd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cs(e,t,n,a,o,c){var p=0;if(a=e,typeof e=="function")ao(e)&&(p=1);else if(typeof e=="string")p=Lg(e,n,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case $:return e=Ot(31,n,t,o),e.elementType=$,e.lanes=c,e;case z:return Ta(n.children,o,c,t);case Z:p=8,o|=24;break;case q:return e=Ot(12,n,t,o|2),e.elementType=q,e.lanes=c,e;case F:return e=Ot(13,n,t,o),e.elementType=F,e.lanes=c,e;case K:return e=Ot(19,n,t,o),e.elementType=K,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:p=10;break e;case Y:p=9;break e;case Q:p=11;break e;case B:p=14;break e;case P:p=16,a=null;break e}p=29,n=Error(r(130,e===null?"null":typeof e,"")),a=null}return t=Ot(p,n,t,o),t.elementType=e,t.type=a,t.lanes=c,t}function Ta(e,t,n,a){return e=Ot(7,e,a,t),e.lanes=n,e}function lo(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function Ad(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function io(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ed=new WeakMap;function Qt(e,t){if(typeof e=="object"&&e!==null){var n=Ed.get(e);return n!==void 0?n:(t={value:e,source:t,stack:jl(t)},Ed.set(e,t),t)}return{value:e,source:t,stack:jl(t)}}var ll=[],il=0,us=null,Ql=0,Kt=[],$t=0,Kn=null,mn=1,gn="";function kn(e,t){ll[il++]=Ql,ll[il++]=us,us=e,Ql=t}function Nd(e,t,n){Kt[$t++]=mn,Kt[$t++]=gn,Kt[$t++]=Kn,Kn=e;var a=mn;e=gn;var o=32-ft(a)-1;a&=~(1<<o),n+=1;var c=32-ft(t)+o;if(30<c){var p=o-o%5;c=(a&(1<<p)-1).toString(32),a>>=p,o-=p,mn=1<<32-ft(t)+o|n<<o|a,gn=c+e}else mn=1<<c|n<<o|a,gn=e}function so(e){e.return!==null&&(kn(e,1),Nd(e,1,0))}function ro(e){for(;e===us;)us=ll[--il],ll[il]=null,Ql=ll[--il],ll[il]=null;for(;e===Kn;)Kn=Kt[--$t],Kt[$t]=null,gn=Kt[--$t],Kt[$t]=null,mn=Kt[--$t],Kt[$t]=null}function Td(e,t){Kt[$t++]=mn,Kt[$t++]=gn,Kt[$t++]=Kn,mn=t.id,gn=t.overflow,Kn=e}var rt=null,Ue=null,xe=!1,$n=null,Jt=!1,oo=Error(r(519));function Jn(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kl(Qt(t,e)),oo}function Dd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[st]=e,t[Ct]=a,n){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(n=0;n<gi.length;n++)ge(gi[n],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),qu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),Yu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||If(t.textContent,n)?(a.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),a.onScroll!=null&&ge("scroll",t),a.onScrollEnd!=null&&ge("scrollend",t),a.onClick!=null&&(t.onclick=Nn),t=!0):t=!1,t||Jn(e,!0)}function kd(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 31:case 13:Jt=!1;return;case 27:case 3:Jt=!0;return;default:rt=rt.return}}function sl(e){if(e!==rt)return!1;if(!xe)return kd(e),xe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Tc(e.type,e.memoizedProps)),n=!n),n&&Ue&&Jn(e),kd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ue=t1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ue=t1(e)}else t===27?(t=Ue,ua(e.type)?(e=Oc,Oc=null,Ue=e):Ue=t):Ue=rt?Pt(e.stateNode.nextSibling):null;return!0}function Da(){Ue=rt=null,xe=!1}function co(){var e=$n;return e!==null&&(Dt===null?Dt=e:Dt.push.apply(Dt,e),$n=null),e}function Kl(e){$n===null?$n=[e]:$n.push(e)}var uo=w(null),ka=null,Mn=null;function Fn(e,t,n){V(uo,t._currentValue),t._currentValue=n}function Rn(e){e._currentValue=uo.current,R(uo)}function fo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function po(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var p=o.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=o;for(var C=0;C<t.length;C++)if(b.context===t[C]){c.lanes|=n,b=c.alternate,b!==null&&(b.lanes|=n),fo(c.return,n,e),a||(p=null);break e}c=b.next}}else if(o.tag===18){if(p=o.return,p===null)throw Error(r(341));p.lanes|=n,c=p.alternate,c!==null&&(c.lanes|=n),fo(p,n,e),p=null}else p=o.child;if(p!==null)p.return=o;else for(p=o;p!==null;){if(p===e){p=null;break}if(o=p.sibling,o!==null){o.return=p.return,p=o;break}p=p.return}o=p}}function rl(e,t,n,a){e=null;for(var o=t,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var p=o.alternate;if(p===null)throw Error(r(387));if(p=p.memoizedProps,p!==null){var b=o.type;Rt(o.pendingProps.value,p.value)||(e!==null?e.push(b):e=[b])}}else if(o===pe.current){if(p=o.alternate,p===null)throw Error(r(387));p.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Si):e=[Si])}o=o.return}e!==null&&po(t,e,n,a),t.flags|=262144}function ds(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ma(e){ka=e,Mn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return Md(ka,e)}function fs(e,t){return ka===null&&Ma(e),Md(e,t)}function Md(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Mn===null){if(e===null)throw Error(r(308));Mn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Mn=Mn.next=t;return n}var Om=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},zm=s.unstable_scheduleCallback,jm=s.unstable_NormalPriority,Qe={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ho(){return{controller:new Om,data:new Map,refCount:0}}function $l(e){e.refCount--,e.refCount===0&&zm(jm,function(){e.controller.abort()})}var Jl=null,mo=0,ol=0,cl=null;function _m(e,t){if(Jl===null){var n=Jl=[];mo=0,ol=vc(),cl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return mo++,t.then(Rd,Rd),t}function Rd(){if(--mo===0&&Jl!==null){cl!==null&&(cl.status="fulfilled");var e=Jl;Jl=null,ol=0,cl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Lm(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var Od=j.S;j.S=function(e,t){gf=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&_m(e,t),Od!==null&&Od(e,t)};var Ra=w(null);function go(){var e=Ra.current;return e!==null?e:_e.pooledCache}function ps(e,t){t===null?V(Ra,Ra.current):V(Ra,t.pool)}function zd(){var e=go();return e===null?null:{parent:Qe._currentValue,pool:e}}var ul=Error(r(460)),bo=Error(r(474)),hs=Error(r(542)),ms={then:function(){}};function jd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _d(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Nn,Nn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ud(e),e;default:if(typeof t.status=="string")t.then(Nn,Nn);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ud(e),e}throw za=t,ul}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(za=n,ul):n}}var za=null;function Ld(){if(za===null)throw Error(r(459));var e=za;return za=null,e}function Ud(e){if(e===ul||e===hs)throw Error(r(483))}var dl=null,Fl=0;function gs(e){var t=Fl;return Fl+=1,dl===null&&(dl=[]),_d(dl,e,t)}function Pl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function bs(e,t){throw t.$$typeof===T?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hd(e){function t(E,A){if(e){var D=E.deletions;D===null?(E.deletions=[A],E.flags|=16):D.push(A)}}function n(E,A){if(!e)return null;for(;A!==null;)t(E,A),A=A.sibling;return null}function a(E){for(var A=new Map;E!==null;)E.key!==null?A.set(E.key,E):A.set(E.index,E),E=E.sibling;return A}function o(E,A){return E=Dn(E,A),E.index=0,E.sibling=null,E}function c(E,A,D){return E.index=D,e?(D=E.alternate,D!==null?(D=D.index,D<A?(E.flags|=67108866,A):D):(E.flags|=67108866,A)):(E.flags|=1048576,A)}function p(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function b(E,A,D,U){return A===null||A.tag!==6?(A=lo(D,E.mode,U),A.return=E,A):(A=o(A,D),A.return=E,A)}function C(E,A,D,U){var le=D.type;return le===z?L(E,A,D.props.children,U,D.key):A!==null&&(A.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===P&&Oa(le)===A.type)?(A=o(A,D.props),Pl(A,D),A.return=E,A):(A=cs(D.type,D.key,D.props,null,E.mode,U),Pl(A,D),A.return=E,A)}function k(E,A,D,U){return A===null||A.tag!==4||A.stateNode.containerInfo!==D.containerInfo||A.stateNode.implementation!==D.implementation?(A=io(D,E.mode,U),A.return=E,A):(A=o(A,D.children||[]),A.return=E,A)}function L(E,A,D,U,le){return A===null||A.tag!==7?(A=Ta(D,E.mode,U,le),A.return=E,A):(A=o(A,D),A.return=E,A)}function H(E,A,D){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=lo(""+A,E.mode,D),A.return=E,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case N:return D=cs(A.type,A.key,A.props,null,E.mode,D),Pl(D,A),D.return=E,D;case _:return A=io(A,E.mode,D),A.return=E,A;case P:return A=Oa(A),H(E,A,D)}if(Fe(A)||re(A))return A=Ta(A,E.mode,D,null),A.return=E,A;if(typeof A.then=="function")return H(E,gs(A),D);if(A.$$typeof===I)return H(E,fs(E,A),D);bs(E,A)}return null}function M(E,A,D,U){var le=A!==null?A.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return le!==null?null:b(E,A,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case N:return D.key===le?C(E,A,D,U):null;case _:return D.key===le?k(E,A,D,U):null;case P:return D=Oa(D),M(E,A,D,U)}if(Fe(D)||re(D))return le!==null?null:L(E,A,D,U,null);if(typeof D.then=="function")return M(E,A,gs(D),U);if(D.$$typeof===I)return M(E,A,fs(E,D),U);bs(E,D)}return null}function O(E,A,D,U,le){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return E=E.get(D)||null,b(A,E,""+U,le);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case N:return E=E.get(U.key===null?D:U.key)||null,C(A,E,U,le);case _:return E=E.get(U.key===null?D:U.key)||null,k(A,E,U,le);case P:return U=Oa(U),O(E,A,D,U,le)}if(Fe(U)||re(U))return E=E.get(D)||null,L(A,E,U,le,null);if(typeof U.then=="function")return O(E,A,D,gs(U),le);if(U.$$typeof===I)return O(E,A,D,fs(A,U),le);bs(A,U)}return null}function W(E,A,D,U){for(var le=null,we=null,ee=A,ue=A=0,ve=null;ee!==null&&ue<D.length;ue++){ee.index>ue?(ve=ee,ee=null):ve=ee.sibling;var Ce=M(E,ee,D[ue],U);if(Ce===null){ee===null&&(ee=ve);break}e&&ee&&Ce.alternate===null&&t(E,ee),A=c(Ce,A,ue),we===null?le=Ce:we.sibling=Ce,we=Ce,ee=ve}if(ue===D.length)return n(E,ee),xe&&kn(E,ue),le;if(ee===null){for(;ue<D.length;ue++)ee=H(E,D[ue],U),ee!==null&&(A=c(ee,A,ue),we===null?le=ee:we.sibling=ee,we=ee);return xe&&kn(E,ue),le}for(ee=a(ee);ue<D.length;ue++)ve=O(ee,E,ue,D[ue],U),ve!==null&&(e&&ve.alternate!==null&&ee.delete(ve.key===null?ue:ve.key),A=c(ve,A,ue),we===null?le=ve:we.sibling=ve,we=ve);return e&&ee.forEach(function(ma){return t(E,ma)}),xe&&kn(E,ue),le}function ie(E,A,D,U){if(D==null)throw Error(r(151));for(var le=null,we=null,ee=A,ue=A=0,ve=null,Ce=D.next();ee!==null&&!Ce.done;ue++,Ce=D.next()){ee.index>ue?(ve=ee,ee=null):ve=ee.sibling;var ma=M(E,ee,Ce.value,U);if(ma===null){ee===null&&(ee=ve);break}e&&ee&&ma.alternate===null&&t(E,ee),A=c(ma,A,ue),we===null?le=ma:we.sibling=ma,we=ma,ee=ve}if(Ce.done)return n(E,ee),xe&&kn(E,ue),le;if(ee===null){for(;!Ce.done;ue++,Ce=D.next())Ce=H(E,Ce.value,U),Ce!==null&&(A=c(Ce,A,ue),we===null?le=Ce:we.sibling=Ce,we=Ce);return xe&&kn(E,ue),le}for(ee=a(ee);!Ce.done;ue++,Ce=D.next())Ce=O(ee,E,ue,Ce.value,U),Ce!==null&&(e&&Ce.alternate!==null&&ee.delete(Ce.key===null?ue:Ce.key),A=c(Ce,A,ue),we===null?le=Ce:we.sibling=Ce,we=Ce);return e&&ee.forEach(function(Qg){return t(E,Qg)}),xe&&kn(E,ue),le}function Oe(E,A,D,U){if(typeof D=="object"&&D!==null&&D.type===z&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case N:e:{for(var le=D.key;A!==null;){if(A.key===le){if(le=D.type,le===z){if(A.tag===7){n(E,A.sibling),U=o(A,D.props.children),U.return=E,E=U;break e}}else if(A.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===P&&Oa(le)===A.type){n(E,A.sibling),U=o(A,D.props),Pl(U,D),U.return=E,E=U;break e}n(E,A);break}else t(E,A);A=A.sibling}D.type===z?(U=Ta(D.props.children,E.mode,U,D.key),U.return=E,E=U):(U=cs(D.type,D.key,D.props,null,E.mode,U),Pl(U,D),U.return=E,E=U)}return p(E);case _:e:{for(le=D.key;A!==null;){if(A.key===le)if(A.tag===4&&A.stateNode.containerInfo===D.containerInfo&&A.stateNode.implementation===D.implementation){n(E,A.sibling),U=o(A,D.children||[]),U.return=E,E=U;break e}else{n(E,A);break}else t(E,A);A=A.sibling}U=io(D,E.mode,U),U.return=E,E=U}return p(E);case P:return D=Oa(D),Oe(E,A,D,U)}if(Fe(D))return W(E,A,D,U);if(re(D)){if(le=re(D),typeof le!="function")throw Error(r(150));return D=le.call(D),ie(E,A,D,U)}if(typeof D.then=="function")return Oe(E,A,gs(D),U);if(D.$$typeof===I)return Oe(E,A,fs(E,D),U);bs(E,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,A!==null&&A.tag===6?(n(E,A.sibling),U=o(A,D),U.return=E,E=U):(n(E,A),U=lo(D,E.mode,U),U.return=E,E=U),p(E)):n(E,A)}return function(E,A,D,U){try{Fl=0;var le=Oe(E,A,D,U);return dl=null,le}catch(ee){if(ee===ul||ee===hs)throw ee;var we=Ot(29,ee,null,E.mode);return we.lanes=U,we.return=E,we}finally{}}}var ja=Hd(!0),Zd=Hd(!1),Pn=!1;function vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ea(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ae&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=os(e),wd(e,null,n),t}return rs(e,a,t,n),os(e)}function Wl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Mt(e,n)}}function xo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?o=c=p:c=c.next=p,n=n.next}while(n!==null);c===null?o=c=t:c=c.next=t}else o=c=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var So=!1;function ei(){if(So){var e=cl;if(e!==null)throw e}}function ti(e,t,n,a){So=!1;var o=e.updateQueue;Pn=!1;var c=o.firstBaseUpdate,p=o.lastBaseUpdate,b=o.shared.pending;if(b!==null){o.shared.pending=null;var C=b,k=C.next;C.next=null,p===null?c=k:p.next=k,p=C;var L=e.alternate;L!==null&&(L=L.updateQueue,b=L.lastBaseUpdate,b!==p&&(b===null?L.firstBaseUpdate=k:b.next=k,L.lastBaseUpdate=C))}if(c!==null){var H=o.baseState;p=0,L=k=C=null,b=c;do{var M=b.lane&-536870913,O=M!==b.lane;if(O?(be&M)===M:(a&M)===M){M!==0&&M===ol&&(So=!0),L!==null&&(L=L.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var W=e,ie=b;M=t;var Oe=n;switch(ie.tag){case 1:if(W=ie.payload,typeof W=="function"){H=W.call(Oe,H,M);break e}H=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=ie.payload,M=typeof W=="function"?W.call(Oe,H,M):W,M==null)break e;H=S({},H,M);break e;case 2:Pn=!0}}M=b.callback,M!==null&&(e.flags|=64,O&&(e.flags|=8192),O=o.callbacks,O===null?o.callbacks=[M]:O.push(M))}else O={lane:M,tag:b.tag,payload:b.payload,callback:b.callback,next:null},L===null?(k=L=O,C=H):L=L.next=O,p|=M;if(b=b.next,b===null){if(b=o.shared.pending,b===null)break;O=b,b=O.next,O.next=null,o.lastBaseUpdate=O,o.shared.pending=null}}while(!0);L===null&&(C=H),o.baseState=C,o.firstBaseUpdate=k,o.lastBaseUpdate=L,c===null&&(o.shared.lanes=0),ia|=p,e.lanes=p,e.memoizedState=H}}function Bd(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function qd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Bd(n[e],t)}var fl=w(null),vs=w(0);function Vd(e,t){e=Bn,V(vs,e),V(fl,t),Bn=e|t.baseLanes}function wo(){V(vs,Bn),V(fl,fl.current)}function Co(){Bn=vs.current,R(fl),R(vs)}var zt=w(null),Ft=null;function ta(e){var t=e.alternate;V(Xe,Xe.current&1),V(zt,e),Ft===null&&(t===null||fl.current!==null||t.memoizedState!==null)&&(Ft=e)}function Ao(e){V(Xe,Xe.current),V(zt,e),Ft===null&&(Ft=e)}function Yd(e){e.tag===22?(V(Xe,Xe.current),V(zt,e),Ft===null&&(Ft=e)):na()}function na(){V(Xe,Xe.current),V(zt,zt.current)}function jt(e){R(zt),Ft===e&&(Ft=null),R(Xe)}var Xe=w(0);function ys(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Mc(n)||Rc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var On=0,ce=null,Me=null,Ke=null,xs=!1,pl=!1,_a=!1,Ss=0,ni=0,hl=null,Um=0;function qe(){throw Error(r(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function No(e,t,n,a,o,c){return On=c,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?N0:qo,_a=!1,c=n(a,o),_a=!1,pl&&(c=Xd(t,n,a,o)),Gd(e),c}function Gd(e){j.H=ii;var t=Me!==null&&Me.next!==null;if(On=0,Ke=Me=ce=null,xs=!1,ni=0,hl=null,t)throw Error(r(300));e===null||$e||(e=e.dependencies,e!==null&&ds(e)&&($e=!0))}function Xd(e,t,n,a){ce=e;var o=0;do{if(pl&&(hl=null),ni=0,pl=!1,25<=o)throw Error(r(301));if(o+=1,Ke=Me=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}j.H=T0,c=t(n,a)}while(pl);return c}function Hm(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?ai(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(ce.flags|=1024),t}function To(){var e=Ss!==0;return Ss=0,e}function Do(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(xs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xs=!1}On=0,Ke=Me=ce=null,pl=!1,ni=Ss=0,hl=null}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?ce.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Ie(){if(Me===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Ke===null?ce.memoizedState:Ke.next;if(t!==null)Ke=t,Me=e;else{if(e===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ke===null?ce.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function ws(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ai(e){var t=ni;return ni+=1,hl===null&&(hl=[]),e=_d(hl,e,t),t=ce,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?N0:qo),e}function Cs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ai(e);if(e.$$typeof===I)return ot(e)}throw Error(r(438,String(e)))}function Mo(e){var t=null,n=ce.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ce.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ws(),ce.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ne;return t.index++,n}function zn(e,t){return typeof t=="function"?t(e):t}function As(e){var t=Ie();return Ro(t,Me,e)}function Ro(e,t,n){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var o=e.baseQueue,c=a.pending;if(c!==null){if(o!==null){var p=o.next;o.next=c.next,c.next=p}t.baseQueue=o=c,a.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{t=o.next;var b=p=null,C=null,k=t,L=!1;do{var H=k.lane&-536870913;if(H!==k.lane?(be&H)===H:(On&H)===H){var M=k.revertLane;if(M===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),H===ol&&(L=!0);else if((On&M)===M){k=k.next,M===ol&&(L=!0);continue}else H={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},C===null?(b=C=H,p=c):C=C.next=H,ce.lanes|=M,ia|=M;H=k.action,_a&&n(c,H),c=k.hasEagerState?k.eagerState:n(c,H)}else M={lane:H,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},C===null?(b=C=M,p=c):C=C.next=M,ce.lanes|=H,ia|=H;k=k.next}while(k!==null&&k!==t);if(C===null?p=c:C.next=b,!Rt(c,e.memoizedState)&&($e=!0,L&&(n=cl,n!==null)))throw n;e.memoizedState=c,e.baseState=p,e.baseQueue=C,a.lastRenderedState=c}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Oo(e){var t=Ie(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,c=t.memoizedState;if(o!==null){n.pending=null;var p=o=o.next;do c=e(c,p.action),p=p.next;while(p!==o);Rt(c,t.memoizedState)||($e=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,a]}function Id(e,t,n){var a=ce,o=Ie(),c=xe;if(c){if(n===void 0)throw Error(r(407));n=n()}else n=t();var p=!Rt((Me||o).memoizedState,n);if(p&&(o.memoizedState=n,$e=!0),o=o.queue,_o($d.bind(null,a,o,e),[e]),o.getSnapshot!==t||p||Ke!==null&&Ke.memoizedState.tag&1){if(a.flags|=2048,ml(9,{destroy:void 0},Kd.bind(null,a,o,n,t),null),_e===null)throw Error(r(349));c||(On&127)!==0||Qd(a,t,n)}return n}function Qd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t=ws(),ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kd(e,t,n,a){t.value=n,t.getSnapshot=a,Jd(t)&&Fd(e)}function $d(e,t,n){return n(function(){Jd(t)&&Fd(e)})}function Jd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function Fd(e){var t=Na(e,2);t!==null&&kt(t,e,2)}function zo(e){var t=gt();if(typeof e=="function"){var n=e;if(e=n(),_a){Bt(!0);try{n()}finally{Bt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:e},t}function Pd(e,t,n,a){return e.baseState=n,Ro(e,Me,typeof a=="function"?a:zn)}function Zm(e,t,n,a,o){if(Ts(e))throw Error(r(485));if(e=t.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};j.T!==null?n(!0):c.isTransition=!1,a(c),n=t.pending,n===null?(c.next=t.pending=c,Wd(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Wd(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var c=j.T,p={};j.T=p;try{var b=n(o,a),C=j.S;C!==null&&C(p,b),e0(e,t,b)}catch(k){jo(e,t,k)}finally{c!==null&&p.types!==null&&(c.types=p.types),j.T=c}}else try{c=n(o,a),e0(e,t,c)}catch(k){jo(e,t,k)}}function e0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){t0(e,t,a)},function(a){return jo(e,t,a)}):t0(e,t,n)}function t0(e,t,n){t.status="fulfilled",t.value=n,n0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Wd(e,n)))}function jo(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,n0(t),t=t.next;while(t!==a)}e.action=null}function n0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function a0(e,t){return t}function l0(e,t){if(xe){var n=_e.formState;if(n!==null){e:{var a=ce;if(xe){if(Ue){t:{for(var o=Ue,c=Jt;o.nodeType!==8;){if(!c){o=null;break t}if(o=Pt(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){Ue=Pt(o.nextSibling),a=o.data==="F!";break e}}Jn(a)}a=!1}a&&(t=n[0])}}return n=gt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a0,lastRenderedState:t},n.queue=a,n=C0.bind(null,ce,a),a.dispatch=n,a=zo(!1),c=Bo.bind(null,ce,!1,a.queue),a=gt(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=Zm.bind(null,ce,o,c,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function i0(e){var t=Ie();return s0(t,Me,e)}function s0(e,t,n){if(t=Ro(e,t,a0)[0],e=As(zn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ai(t)}catch(p){throw p===ul?hs:p}else a=t;t=Ie();var o=t.queue,c=o.dispatch;return n!==t.memoizedState&&(ce.flags|=2048,ml(9,{destroy:void 0},Bm.bind(null,o,n),null)),[a,c,e]}function Bm(e,t){e.action=t}function r0(e){var t=Ie(),n=Me;if(n!==null)return s0(t,n,e);Ie(),t=t.memoizedState,n=Ie();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ml(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ce.updateQueue,t===null&&(t=ws(),ce.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function o0(){return Ie().memoizedState}function Es(e,t,n,a){var o=gt();ce.flags|=e,o.memoizedState=ml(1|t,{destroy:void 0},n,a===void 0?null:a)}function Ns(e,t,n,a){var o=Ie();a=a===void 0?null:a;var c=o.memoizedState.inst;Me!==null&&a!==null&&Eo(a,Me.memoizedState.deps)?o.memoizedState=ml(t,c,n,a):(ce.flags|=e,o.memoizedState=ml(1|t,c,n,a))}function c0(e,t){Es(8390656,8,e,t)}function _o(e,t){Ns(2048,8,e,t)}function qm(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=ws(),ce.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function u0(e){var t=Ie().memoizedState;return qm({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function d0(e,t){return Ns(4,2,e,t)}function f0(e,t){return Ns(4,4,e,t)}function p0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function h0(e,t,n){n=n!=null?n.concat([e]):null,Ns(4,4,p0.bind(null,t,e),n)}function Lo(){}function m0(e,t){var n=Ie();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Eo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function g0(e,t){var n=Ie();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Eo(t,a[1]))return a[0];if(a=e(),_a){Bt(!0);try{e()}finally{Bt(!1)}}return n.memoizedState=[a,t],a}function Uo(e,t,n){return n===void 0||(On&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=vf(),ce.lanes|=e,ia|=e,n)}function b0(e,t,n,a){return Rt(n,t)?n:fl.current!==null?(e=Uo(e,n,a),Rt(e,t)||($e=!0),e):(On&42)===0||(On&1073741824)!==0&&(be&261930)===0?($e=!0,e.memoizedState=n):(e=vf(),ce.lanes|=e,ia|=e,t)}function v0(e,t,n,a,o){var c=G.p;G.p=c!==0&&8>c?c:8;var p=j.T,b={};j.T=b,Bo(e,!1,t,n);try{var C=o(),k=j.S;if(k!==null&&k(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var L=Lm(C,a);li(e,t,L,Ut(e))}else li(e,t,a,Ut(e))}catch(H){li(e,t,{then:function(){},status:"rejected",reason:H},Ut())}finally{G.p=c,p!==null&&b.types!==null&&(p.types=b.types),j.T=p}}function Vm(){}function Ho(e,t,n,a){if(e.tag!==5)throw Error(r(476));var o=y0(e).queue;v0(e,o,t,ae,n===null?Vm:function(){return x0(e),n(a)})}function y0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function x0(e){var t=y0(e);t.next===null&&(t=e.alternate.memoizedState),li(e,t.next.queue,{},Ut())}function Zo(){return ot(Si)}function S0(){return Ie().memoizedState}function w0(){return Ie().memoizedState}function Ym(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ut();e=Wn(n);var a=ea(t,e,n);a!==null&&(kt(a,t,n),Wl(a,t,n)),t={cache:ho()},e.payload=t;return}t=t.return}}function Gm(e,t,n){var a=Ut();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ts(e)?A0(t,n):(n=no(e,t,n,a),n!==null&&(kt(n,e,a),E0(n,t,a)))}function C0(e,t,n){var a=Ut();li(e,t,n,a)}function li(e,t,n,a){var o={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ts(e))A0(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,b=c(p,n);if(o.hasEagerState=!0,o.eagerState=b,Rt(b,p))return rs(e,t,o,0),_e===null&&ss(),!1}catch{}finally{}if(n=no(e,t,o,a),n!==null)return kt(n,e,a),E0(n,t,a),!0}return!1}function Bo(e,t,n,a){if(a={lane:2,revertLane:vc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ts(e)){if(t)throw Error(r(479))}else t=no(e,n,a,2),t!==null&&kt(t,e,2)}function Ts(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function A0(e,t){pl=xs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function E0(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Mt(e,n)}}var ii={readContext:ot,use:Cs,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};ii.useEffectEvent=qe;var N0={readContext:ot,use:Cs,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:c0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Es(4194308,4,p0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Es(4194308,4,e,t)},useInsertionEffect:function(e,t){Es(4,2,e,t)},useMemo:function(e,t){var n=gt();t=t===void 0?null:t;var a=e();if(_a){Bt(!0);try{e()}finally{Bt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=gt();if(n!==void 0){var o=n(t);if(_a){Bt(!0);try{n(t)}finally{Bt(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=Gm.bind(null,ce,e),[a.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:function(e){e=zo(e);var t=e.queue,n=C0.bind(null,ce,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Lo,useDeferredValue:function(e,t){var n=gt();return Uo(n,e,t)},useTransition:function(){var e=zo(!1);return e=v0.bind(null,ce,e.queue,!0,!1),gt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ce,o=gt();if(xe){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),_e===null)throw Error(r(349));(be&127)!==0||Qd(a,t,n)}o.memoizedState=n;var c={value:n,getSnapshot:t};return o.queue=c,c0($d.bind(null,a,c,e),[e]),a.flags|=2048,ml(9,{destroy:void 0},Kd.bind(null,a,c,n,t),null),n},useId:function(){var e=gt(),t=_e.identifierPrefix;if(xe){var n=gn,a=mn;n=(a&~(1<<32-ft(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ss++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Um++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zo,useFormState:l0,useActionState:l0,useOptimistic:function(e){var t=gt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Bo.bind(null,ce,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mo,useCacheRefresh:function(){return gt().memoizedState=Ym.bind(null,ce)},useEffectEvent:function(e){var t=gt(),n={impl:e};return t.memoizedState=n,function(){if((Ae&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}},qo={readContext:ot,use:Cs,useCallback:m0,useContext:ot,useEffect:_o,useImperativeHandle:h0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:g0,useReducer:As,useRef:o0,useState:function(){return As(zn)},useDebugValue:Lo,useDeferredValue:function(e,t){var n=Ie();return b0(n,Me.memoizedState,e,t)},useTransition:function(){var e=As(zn)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:ai(e),t]},useSyncExternalStore:Id,useId:S0,useHostTransitionStatus:Zo,useFormState:i0,useActionState:i0,useOptimistic:function(e,t){var n=Ie();return Pd(n,Me,e,t)},useMemoCache:Mo,useCacheRefresh:w0};qo.useEffectEvent=u0;var T0={readContext:ot,use:Cs,useCallback:m0,useContext:ot,useEffect:_o,useImperativeHandle:h0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:g0,useReducer:Oo,useRef:o0,useState:function(){return Oo(zn)},useDebugValue:Lo,useDeferredValue:function(e,t){var n=Ie();return Me===null?Uo(n,e,t):b0(n,Me.memoizedState,e,t)},useTransition:function(){var e=Oo(zn)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:ai(e),t]},useSyncExternalStore:Id,useId:S0,useHostTransitionStatus:Zo,useFormState:r0,useActionState:r0,useOptimistic:function(e,t){var n=Ie();return Me!==null?Pd(n,Me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Mo,useCacheRefresh:w0};T0.useEffectEvent=u0;function Vo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yo={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ut(),o=Wn(a);o.payload=t,n!=null&&(o.callback=n),t=ea(e,o,a),t!==null&&(kt(t,e,a),Wl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ut(),o=Wn(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ea(e,o,a),t!==null&&(kt(t,e,a),Wl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ut(),a=Wn(n);a.tag=2,t!=null&&(a.callback=t),t=ea(e,a,n),t!==null&&(kt(t,e,n),Wl(t,e,n))}};function D0(e,t,n,a,o,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,p):t.prototype&&t.prototype.isPureReactComponent?!Xl(n,a)||!Xl(o,c):!0}function k0(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Yo.enqueueReplaceState(t,t.state,null)}function La(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function M0(e){is(e)}function R0(e){console.error(e)}function O0(e){is(e)}function Ds(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function z0(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Go(e,t,n){return n=Wn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ds(e,t)},n}function j0(e){return e=Wn(e),e.tag=3,e}function _0(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var c=a.value;e.payload=function(){return o(c)},e.callback=function(){z0(t,n,a)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){z0(t,n,a),typeof o!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var b=a.stack;this.componentDidCatch(a.value,{componentStack:b!==null?b:""})})}function Xm(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&rl(t,n,o,!0),n=zt.current,n!==null){switch(n.tag){case 31:case 13:return Ft===null?Bs():n.alternate===null&&Ve===0&&(Ve=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===ms?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),mc(e,a,o)),!1;case 22:return n.flags|=65536,a===ms?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),mc(e,a,o)),!1}throw Error(r(435,n.tag))}return mc(e,a,o),Bs(),!1}if(xe)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==oo&&(e=Error(r(422),{cause:a}),Kl(Qt(e,n)))):(a!==oo&&(t=Error(r(423),{cause:a}),Kl(Qt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=Qt(a,n),o=Go(e.stateNode,a,o),xo(e,o),Ve!==4&&(Ve=2)),!1;var c=Error(r(520),{cause:a});if(c=Qt(c,n),pi===null?pi=[c]:pi.push(c),Ve!==4&&(Ve=2),t===null)return!0;a=Qt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Go(n.stateNode,a,e),xo(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(sa===null||!sa.has(c))))return n.flags|=65536,o&=-o,n.lanes|=o,o=j0(o),_0(o,e,n,a),xo(n,o),!1}n=n.return}while(n!==null);return!1}var Xo=Error(r(461)),$e=!1;function ct(e,t,n,a){t.child=e===null?Zd(t,null,n,a):ja(t,e.child,n,a)}function L0(e,t,n,a,o){n=n.render;var c=t.ref;if("ref"in a){var p={};for(var b in a)b!=="ref"&&(p[b]=a[b])}else p=a;return Ma(t),a=No(e,t,n,p,c,o),b=To(),e!==null&&!$e?(Do(e,t,o),jn(e,t,o)):(xe&&b&&so(t),t.flags|=1,ct(e,t,a,o),t.child)}function U0(e,t,n,a,o){if(e===null){var c=n.type;return typeof c=="function"&&!ao(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,H0(e,t,c,a,o)):(e=cs(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Wo(e,o)){var p=c.memoizedProps;if(n=n.compare,n=n!==null?n:Xl,n(p,a)&&e.ref===t.ref)return jn(e,t,o)}return t.flags|=1,e=Dn(c,a),e.ref=t.ref,e.return=t,t.child=e}function H0(e,t,n,a,o){if(e!==null){var c=e.memoizedProps;if(Xl(c,a)&&e.ref===t.ref)if($e=!1,t.pendingProps=a=c,Wo(e,o))(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,jn(e,t,o)}return Io(e,t,n,a,o)}function Z0(e,t,n,a){var o=a.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~c}else a=0,t.child=null;return B0(e,t,c,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ps(t,c!==null?c.cachePool:null),c!==null?Vd(t,c):wo(),Yd(t);else return a=t.lanes=536870912,B0(e,t,c!==null?c.baseLanes|n:n,n,a)}else c!==null?(ps(t,c.cachePool),Vd(t,c),na(),t.memoizedState=null):(e!==null&&ps(t,null),wo(),na());return ct(e,t,o,n),t.child}function si(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function B0(e,t,n,a,o){var c=go();return c=c===null?null:{parent:Qe._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&ps(t,null),wo(),Yd(t),e!==null&&rl(e,t,a,!0),t.childLanes=o,null}function ks(e,t){return t=Rs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function q0(e,t,n){return ja(t,e.child,null,n),e=ks(t,t.pendingProps),e.flags|=2,jt(t),t.memoizedState=null,e}function Im(e,t,n){var a=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(xe){if(a.mode==="hidden")return e=ks(t,a),t.lanes=536870912,si(null,e);if(Ao(t),(e=Ue)?(e=e1(e,Jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Kn!==null?{id:mn,overflow:gn}:null,retryLane:536870912,hydrationErrors:null},n=Ad(e),n.return=t,t.child=n,rt=t,Ue=null)):e=null,e===null)throw Jn(t);return t.lanes=536870912,null}return ks(t,a)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(Ao(t),o)if(t.flags&256)t.flags&=-257,t=q0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if($e||rl(e,t,n,!1),o=(n&e.childLanes)!==0,$e||o){if(a=_e,a!==null&&(p=Vt(a,n),p!==0&&p!==c.retryLane))throw c.retryLane=p,Na(e,p),kt(a,e,p),Xo;Bs(),t=q0(e,t,n)}else e=c.treeContext,Ue=Pt(p.nextSibling),rt=t,xe=!0,$n=null,Jt=!1,e!==null&&Td(t,e),t=ks(t,a),t.flags|=4096;return t}return e=Dn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ms(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Io(e,t,n,a,o){return Ma(t),n=No(e,t,n,a,void 0,o),a=To(),e!==null&&!$e?(Do(e,t,o),jn(e,t,o)):(xe&&a&&so(t),t.flags|=1,ct(e,t,n,o),t.child)}function V0(e,t,n,a,o,c){return Ma(t),t.updateQueue=null,n=Xd(t,a,n,o),Gd(e),a=To(),e!==null&&!$e?(Do(e,t,c),jn(e,t,c)):(xe&&a&&so(t),t.flags|=1,ct(e,t,n,c),t.child)}function Y0(e,t,n,a,o){if(Ma(t),t.stateNode===null){var c=al,p=n.contextType;typeof p=="object"&&p!==null&&(c=ot(p)),c=new n(a,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Yo,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=a,c.state=t.memoizedState,c.refs={},vo(t),p=n.contextType,c.context=typeof p=="object"&&p!==null?ot(p):al,c.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Vo(t,n,p,a),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&Yo.enqueueReplaceState(c,c.state,null),ti(t,a,c,o),ei(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){c=t.stateNode;var b=t.memoizedProps,C=La(n,b);c.props=C;var k=c.context,L=n.contextType;p=al,typeof L=="object"&&L!==null&&(p=ot(L));var H=n.getDerivedStateFromProps;L=typeof H=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,L||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||k!==p)&&k0(t,c,a,p),Pn=!1;var M=t.memoizedState;c.state=M,ti(t,a,c,o),ei(),k=t.memoizedState,b||M!==k||Pn?(typeof H=="function"&&(Vo(t,n,H,a),k=t.memoizedState),(C=Pn||D0(t,n,C,a,M,k,p))?(L||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=k),c.props=a,c.state=k,c.context=p,a=C):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{c=t.stateNode,yo(e,t),p=t.memoizedProps,L=La(n,p),c.props=L,H=t.pendingProps,M=c.context,k=n.contextType,C=al,typeof k=="object"&&k!==null&&(C=ot(k)),b=n.getDerivedStateFromProps,(k=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==H||M!==C)&&k0(t,c,a,C),Pn=!1,M=t.memoizedState,c.state=M,ti(t,a,c,o),ei();var O=t.memoizedState;p!==H||M!==O||Pn||e!==null&&e.dependencies!==null&&ds(e.dependencies)?(typeof b=="function"&&(Vo(t,n,b,a),O=t.memoizedState),(L=Pn||D0(t,n,L,a,M,O,C)||e!==null&&e.dependencies!==null&&ds(e.dependencies))?(k||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,O,C),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,O,C)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=O),c.props=a,c.state=O,c.context=C,a=L):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),a=!1)}return c=a,Ms(e,t),a=(t.flags&128)!==0,c||a?(c=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&a?(t.child=ja(t,e.child,null,o),t.child=ja(t,null,n,o)):ct(e,t,n,o),t.memoizedState=c.state,e=t.child):e=jn(e,t,o),e}function G0(e,t,n,a){return Da(),t.flags|=256,ct(e,t,n,a),t.child}var Qo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ko(e){return{baseLanes:e,cachePool:zd()}}function $o(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Lt),e}function X0(e,t,n){var a=t.pendingProps,o=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),p&&(o=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(o?ta(t):na(),(e=Ue)?(e=e1(e,Jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Kn!==null?{id:mn,overflow:gn}:null,retryLane:536870912,hydrationErrors:null},n=Ad(e),n.return=t,t.child=n,rt=t,Ue=null)):e=null,e===null)throw Jn(t);return Rc(e)?t.lanes=32:t.lanes=536870912,null}var b=a.children;return a=a.fallback,o?(na(),o=t.mode,b=Rs({mode:"hidden",children:b},o),a=Ta(a,o,n,null),b.return=t,a.return=t,b.sibling=a,t.child=b,a=t.child,a.memoizedState=Ko(n),a.childLanes=$o(e,p,n),t.memoizedState=Qo,si(null,a)):(ta(t),Jo(t,b))}var C=e.memoizedState;if(C!==null&&(b=C.dehydrated,b!==null)){if(c)t.flags&256?(ta(t),t.flags&=-257,t=Fo(e,t,n)):t.memoizedState!==null?(na(),t.child=e.child,t.flags|=128,t=null):(na(),b=a.fallback,o=t.mode,a=Rs({mode:"visible",children:a.children},o),b=Ta(b,o,n,null),b.flags|=2,a.return=t,b.return=t,a.sibling=b,t.child=a,ja(t,e.child,null,n),a=t.child,a.memoizedState=Ko(n),a.childLanes=$o(e,p,n),t.memoizedState=Qo,t=si(null,a));else if(ta(t),Rc(b)){if(p=b.nextSibling&&b.nextSibling.dataset,p)var k=p.dgst;p=k,a=Error(r(419)),a.stack="",a.digest=p,Kl({value:a,source:null,stack:null}),t=Fo(e,t,n)}else if($e||rl(e,t,n,!1),p=(n&e.childLanes)!==0,$e||p){if(p=_e,p!==null&&(a=Vt(p,n),a!==0&&a!==C.retryLane))throw C.retryLane=a,Na(e,a),kt(p,e,a),Xo;Mc(b)||Bs(),t=Fo(e,t,n)}else Mc(b)?(t.flags|=192,t.child=e.child,t=null):(e=C.treeContext,Ue=Pt(b.nextSibling),rt=t,xe=!0,$n=null,Jt=!1,e!==null&&Td(t,e),t=Jo(t,a.children),t.flags|=4096);return t}return o?(na(),b=a.fallback,o=t.mode,C=e.child,k=C.sibling,a=Dn(C,{mode:"hidden",children:a.children}),a.subtreeFlags=C.subtreeFlags&65011712,k!==null?b=Dn(k,b):(b=Ta(b,o,n,null),b.flags|=2),b.return=t,a.return=t,a.sibling=b,t.child=a,si(null,a),a=t.child,b=e.child.memoizedState,b===null?b=Ko(n):(o=b.cachePool,o!==null?(C=Qe._currentValue,o=o.parent!==C?{parent:C,pool:C}:o):o=zd(),b={baseLanes:b.baseLanes|n,cachePool:o}),a.memoizedState=b,a.childLanes=$o(e,p,n),t.memoizedState=Qo,si(e.child,a)):(ta(t),n=e.child,e=n.sibling,n=Dn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Jo(e,t){return t=Rs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Rs(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Fo(e,t,n){return ja(t,e.child,null,n),e=Jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function I0(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),fo(e.return,t,n)}function Po(e,t,n,a,o,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o,treeForkCount:c}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=a,p.tail=n,p.tailMode=o,p.treeForkCount=c)}function Q0(e,t,n){var a=t.pendingProps,o=a.revealOrder,c=a.tail;a=a.children;var p=Xe.current,b=(p&2)!==0;if(b?(p=p&1|2,t.flags|=128):p&=1,V(Xe,p),ct(e,t,a,n),a=xe?Ql:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&I0(e,n,t);else if(e.tag===19)I0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ys(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Po(t,!1,o,n,c,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ys(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Po(t,!0,n,null,c,a);break;case"together":Po(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function jn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ia|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(rl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ds(e)))}function Qm(e,t,n){switch(t.tag){case 3:ke(t,t.stateNode.containerInfo),Fn(t,Qe,e.memoizedState.cache),Da();break;case 27:case 5:fe(t);break;case 4:ke(t,t.stateNode.containerInfo);break;case 10:Fn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ao(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ta(t),t.flags|=128,null):(n&t.child.childLanes)!==0?X0(e,t,n):(ta(t),e=jn(e,t,n),e!==null?e.sibling:null);ta(t);break;case 19:var o=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(rl(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return Q0(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(Xe,Xe.current),a)break;return null;case 22:return t.lanes=0,Z0(e,t,n,t.pendingProps);case 24:Fn(t,Qe,e.memoizedState.cache)}return jn(e,t,n)}function K0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)$e=!0;else{if(!Wo(e,n)&&(t.flags&128)===0)return $e=!1,Qm(e,t,n);$e=(e.flags&131072)!==0}else $e=!1,xe&&(t.flags&1048576)!==0&&Nd(t,Ql,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e=="function")ao(e)?(a=La(e,a),t.tag=1,t=Y0(null,t,e,a,n)):(t.tag=0,t=Io(null,t,e,a,n));else{if(e!=null){var o=e.$$typeof;if(o===Q){t.tag=11,t=L0(null,t,e,a,n);break e}else if(o===B){t.tag=14,t=U0(null,t,e,a,n);break e}}throw t=je(e)||e,Error(r(306,t,""))}}return t;case 0:return Io(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=La(a,t.pendingProps),Y0(e,t,a,o,n);case 3:e:{if(ke(t,t.stateNode.containerInfo),e===null)throw Error(r(387));a=t.pendingProps;var c=t.memoizedState;o=c.element,yo(e,t),ti(t,a,null,n);var p=t.memoizedState;if(a=p.cache,Fn(t,Qe,a),a!==c.cache&&po(t,[Qe],n,!0),ei(),a=p.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=G0(e,t,a,n);break e}else if(a!==o){o=Qt(Error(r(424)),t),Kl(o),t=G0(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Pt(e.firstChild),rt=t,xe=!0,$n=null,Jt=!0,n=Zd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Da(),a===o){t=jn(e,t,n);break e}ct(e,t,a,n)}t=t.child}return t;case 26:return Ms(e,t),e===null?(n=s1(t.type,null,t.pendingProps,null))?t.memoizedState=n:xe||(n=t.type,e=t.pendingProps,a=Qs(te.current).createElement(n),a[st]=t,a[Ct]=e,ut(a,n,e),nt(a),t.stateNode=a):t.memoizedState=s1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fe(t),e===null&&xe&&(a=t.stateNode=a1(t.type,t.pendingProps,te.current),rt=t,Jt=!0,o=Ue,ua(t.type)?(Oc=o,Ue=Pt(a.firstChild)):Ue=o),ct(e,t,t.pendingProps.children,n),Ms(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((o=a=Ue)&&(a=Cg(a,t.type,t.pendingProps,Jt),a!==null?(t.stateNode=a,rt=t,Ue=Pt(a.firstChild),Jt=!1,o=!0):o=!1),o||Jn(t)),fe(t),o=t.type,c=t.pendingProps,p=e!==null?e.memoizedProps:null,a=c.children,Tc(o,c)?a=null:p!==null&&Tc(o,p)&&(t.flags|=32),t.memoizedState!==null&&(o=No(e,t,Hm,null,null,n),Si._currentValue=o),Ms(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&xe&&((e=n=Ue)&&(n=Ag(n,t.pendingProps,Jt),n!==null?(t.stateNode=n,rt=t,Ue=null,e=!0):e=!1),e||Jn(t)),null;case 13:return X0(e,t,n);case 4:return ke(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ja(t,null,a,n):ct(e,t,a,n),t.child;case 11:return L0(e,t,t.type,t.pendingProps,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Fn(t,t.type,a.value),ct(e,t,a.children,n),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,Ma(t),o=ot(o),a=a(o),t.flags|=1,ct(e,t,a,n),t.child;case 14:return U0(e,t,t.type,t.pendingProps,n);case 15:return H0(e,t,t.type,t.pendingProps,n);case 19:return Q0(e,t,n);case 31:return Im(e,t,n);case 22:return Z0(e,t,n,t.pendingProps);case 24:return Ma(t),a=ot(Qe),e===null?(o=go(),o===null&&(o=_e,c=ho(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=n),o=c),t.memoizedState={parent:a,cache:o},vo(t),Fn(t,Qe,o)):((e.lanes&n)!==0&&(yo(e,t),ti(t,null,null,n),ei()),o=e.memoizedState,c=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Fn(t,Qe,a)):(a=c.cache,Fn(t,Qe,a),a!==o.cache&&po(t,[Qe],n,!0))),ct(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function _n(e){e.flags|=4}function ec(e,t,n,a,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(wf())e.flags|=8192;else throw za=ms,bo}else e.flags&=-16777217}function $0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!d1(t))if(wf())e.flags|=8192;else throw za=ms,bo}function Os(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?pt():536870912,e.lanes|=t,yl|=t)}function ri(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&65011712,a|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Km(e,t,n){var a=t.pendingProps;switch(ro(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Rn(Qe),Se(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(sl(t)?_n(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,co())),He(t),null;case 26:var o=t.type,c=t.memoizedState;return e===null?(_n(t),c!==null?(He(t),$0(t,c)):(He(t),ec(t,o,null,a,n))):c?c!==e.memoizedState?(_n(t),He(t),$0(t,c)):(He(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&_n(t),He(t),ec(t,o,e,a,n)),null;case 27:if(dn(t),n=te.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&_n(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return He(t),null}e=X.current,sl(t)?Dd(t):(e=a1(o,a,n),t.stateNode=e,_n(t))}return He(t),null;case 5:if(dn(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&_n(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return He(t),null}if(c=X.current,sl(t))Dd(t);else{var p=Qs(te.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof a.is=="string"?p.createElement("select",{is:a.is}):p.createElement("select"),a.multiple?c.multiple=!0:a.size&&(c.size=a.size);break;default:c=typeof a.is=="string"?p.createElement(o,{is:a.is}):p.createElement(o)}}c[st]=t,c[Ct]=a;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=c;e:switch(ut(c,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&_n(t)}}return He(t),ec(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&_n(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(r(166));if(e=te.current,sl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=rt,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||If(e.nodeValue,n)),e||Jn(t,!0)}else e=Qs(e).createTextNode(a),e[st]=t,t.stateNode=e}return He(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=sl(t),n!==null){if(e===null){if(!a)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[st]=t}else Da(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),e=!1}else n=co(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(jt(t),t):(jt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return He(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=sl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(r(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[st]=t}else Da(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),o=!1}else o=co(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(jt(t),t):(jt(t),null)}return jt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==o&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Os(t,t.updateQueue),He(t),null);case 4:return Se(),e===null&&wc(t.stateNode.containerInfo),He(t),null;case 10:return Rn(t.type),He(t),null;case 19:if(R(Xe),a=t.memoizedState,a===null)return He(t),null;if(o=(t.flags&128)!==0,c=a.rendering,c===null)if(o)ri(a,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=ys(e),c!==null){for(t.flags|=128,ri(a,!1),e=c.updateQueue,t.updateQueue=e,Os(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Cd(n,e),n=n.sibling;return V(Xe,Xe.current&1|2),xe&&kn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&dt()>Us&&(t.flags|=128,o=!0,ri(a,!1),t.lanes=4194304)}else{if(!o)if(e=ys(c),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Os(t,e),ri(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!xe)return He(t),null}else 2*dt()-a.renderingStartTime>Us&&n!==536870912&&(t.flags|=128,o=!0,ri(a,!1),t.lanes=4194304);a.isBackwards?(c.sibling=t.child,t.child=c):(e=a.last,e!==null?e.sibling=c:t.child=c,a.last=c)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=dt(),e.sibling=null,n=Xe.current,V(Xe,o?n&1|2:n&1),xe&&kn(t,a.treeForkCount),e):(He(t),null);case 22:case 23:return jt(t),Co(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),n=t.updateQueue,n!==null&&Os(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&R(Ra),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Rn(Qe),He(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function $m(e,t){switch(ro(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(Qe),Se(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return dn(t),null;case 31:if(t.memoizedState!==null){if(jt(t),t.alternate===null)throw Error(r(340));Da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(jt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(Xe),null;case 4:return Se(),null;case 10:return Rn(t.type),null;case 22:case 23:return jt(t),Co(),e!==null&&R(Ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Rn(Qe),null;case 25:return null;default:return null}}function J0(e,t){switch(ro(t),t.tag){case 3:Rn(Qe),Se();break;case 26:case 27:case 5:dn(t);break;case 4:Se();break;case 31:t.memoizedState!==null&&jt(t);break;case 13:jt(t);break;case 19:R(Xe);break;case 10:Rn(t.type);break;case 22:case 23:jt(t),Co(),e!==null&&R(Ra);break;case 24:Rn(Qe)}}function oi(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var c=n.create,p=n.inst;a=c(),p.destroy=a}n=n.next}while(n!==o)}}catch(b){Te(t,t.return,b)}}function aa(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){var p=a.inst,b=p.destroy;if(b!==void 0){p.destroy=void 0,o=t;var C=n,k=b;try{k()}catch(L){Te(o,C,L)}}}a=a.next}while(a!==c)}}catch(L){Te(t,t.return,L)}}function F0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qd(t,n)}catch(a){Te(e,e.return,a)}}}function P0(e,t,n){n.props=La(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Te(e,t,a)}}function ci(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(o){Te(e,t,o)}}function bn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){Te(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Te(e,t,o)}else n.current=null}function W0(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){Te(e,e.return,o)}}function tc(e,t,n){try{var a=e.stateNode;bg(a,e.type,n,t),a[Ct]=t}catch(o){Te(e,e.return,o)}}function ef(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ua(e.type)||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ac(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nn));else if(a!==4&&(a===27&&ua(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ac(e,t,n),e=e.sibling;e!==null;)ac(e,t,n),e=e.sibling}function zs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ua(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(zs(e,t,n),e=e.sibling;e!==null;)zs(e,t,n),e=e.sibling}function tf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ut(t,a,n),t[st]=e,t[Ct]=n}catch(c){Te(e,e.return,c)}}var Ln=!1,Je=!1,lc=!1,nf=typeof WeakSet=="function"?WeakSet:Set,at=null;function Jm(e,t){if(e=e.containerInfo,Ec=er,e=hd(e),Jr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var p=0,b=-1,C=-1,k=0,L=0,H=e,M=null;t:for(;;){for(var O;H!==n||o!==0&&H.nodeType!==3||(b=p+o),H!==c||a!==0&&H.nodeType!==3||(C=p+a),H.nodeType===3&&(p+=H.nodeValue.length),(O=H.firstChild)!==null;)M=H,H=O;for(;;){if(H===e)break t;if(M===n&&++k===o&&(b=p),M===c&&++L===a&&(C=p),(O=H.nextSibling)!==null)break;H=M,M=H.parentNode}H=O}n=b===-1||C===-1?null:{start:b,end:C}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nc={focusedElem:e,selectionRange:n},er=!1,at=t;at!==null;)if(t=at,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,at=e;else for(;at!==null;){switch(t=at,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,o=c.memoizedProps,c=c.memoizedState,a=n.stateNode;try{var W=La(n.type,o);e=a.getSnapshotBeforeUpdate(W,c),a.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Te(n,n.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)kc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,at=e;break}at=t.return}}function af(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Hn(e,n),a&4&&oi(5,n);break;case 1:if(Hn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){Te(n,n.return,p)}else{var o=La(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Te(n,n.return,p)}}a&64&&F0(n),a&512&&ci(n,n.return);break;case 3:if(Hn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qd(e,t)}catch(p){Te(n,n.return,p)}}break;case 27:t===null&&a&4&&tf(n);case 26:case 5:Hn(e,n),t===null&&a&4&&W0(n),a&512&&ci(n,n.return);break;case 12:Hn(e,n);break;case 31:Hn(e,n),a&4&&rf(e,n);break;case 13:Hn(e,n),a&4&&of(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ig.bind(null,n),Eg(e,n))));break;case 22:if(a=n.memoizedState!==null||Ln,!a){t=t!==null&&t.memoizedState!==null||Je,o=Ln;var c=Je;Ln=a,(Je=t)&&!c?Zn(e,n,(n.subtreeFlags&8772)!==0):Hn(e,n),Ln=o,Je=c}break;case 30:break;default:Hn(e,n)}}function lf(e){var t=e.alternate;t!==null&&(e.alternate=null,lf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Et=!1;function Un(e,t,n){for(n=n.child;n!==null;)sf(e,t,n),n=n.sibling}function sf(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Sa,n)}catch{}switch(n.tag){case 26:Je||bn(n,t),Un(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Je||bn(n,t);var a=Ze,o=Et;ua(n.type)&&(Ze=n.stateNode,Et=!1),Un(e,t,n),vi(n.stateNode),Ze=a,Et=o;break;case 5:Je||bn(n,t);case 6:if(a=Ze,o=Et,Ze=null,Un(e,t,n),Ze=a,Et=o,Ze!==null)if(Et)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(n.stateNode)}catch(c){Te(n,t,c)}else try{Ze.removeChild(n.stateNode)}catch(c){Te(n,t,c)}break;case 18:Ze!==null&&(Et?(e=Ze,Pf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Tl(e)):Pf(Ze,n.stateNode));break;case 4:a=Ze,o=Et,Ze=n.stateNode.containerInfo,Et=!0,Un(e,t,n),Ze=a,Et=o;break;case 0:case 11:case 14:case 15:aa(2,n,t),Je||aa(4,n,t),Un(e,t,n);break;case 1:Je||(bn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&P0(n,t,a)),Un(e,t,n);break;case 21:Un(e,t,n);break;case 22:Je=(a=Je)||n.memoizedState!==null,Un(e,t,n),Je=a;break;default:Un(e,t,n)}}function rf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tl(e)}catch(n){Te(t,t.return,n)}}}function of(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tl(e)}catch(n){Te(t,t.return,n)}}function Fm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nf),t;default:throw Error(r(435,e.tag))}}function js(e,t){var n=Fm(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var o=sg.bind(null,e,a);a.then(o,o)}})}function Nt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a],c=e,p=t,b=p;e:for(;b!==null;){switch(b.tag){case 27:if(ua(b.type)){Ze=b.stateNode,Et=!1;break e}break;case 5:Ze=b.stateNode,Et=!1;break e;case 3:case 4:Ze=b.stateNode.containerInfo,Et=!0;break e}b=b.return}if(Ze===null)throw Error(r(160));sf(c,p,o),Ze=null,Et=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)cf(t,e),t=t.sibling}var rn=null;function cf(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nt(t,e),Tt(e),a&4&&(aa(3,e,e.return),oi(3,e),aa(5,e,e.return));break;case 1:Nt(t,e),Tt(e),a&512&&(Je||n===null||bn(n,n.return)),a&64&&Ln&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var o=rn;if(Nt(t,e),Tt(e),a&512&&(Je||n===null||bn(n,n.return)),a&4){var c=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Ll]||c[st]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(a),o.head.insertBefore(c,o.querySelector("head > title"))),ut(c,a,n),c[st]=e,nt(c),a=c;break e;case"link":var p=c1("link","href",o).get(a+(n.href||""));if(p){for(var b=0;b<p.length;b++)if(c=p[b],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(b,1);break t}}c=o.createElement(a),ut(c,a,n),o.head.appendChild(c);break;case"meta":if(p=c1("meta","content",o).get(a+(n.content||""))){for(b=0;b<p.length;b++)if(c=p[b],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(b,1);break t}}c=o.createElement(a),ut(c,a,n),o.head.appendChild(c);break;default:throw Error(r(468,a))}c[st]=e,nt(c),a=c}e.stateNode=a}else u1(o,e.type,e.stateNode);else e.stateNode=o1(o,a,e.memoizedProps);else c!==a?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,a===null?u1(o,e.type,e.stateNode):o1(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&tc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Nt(t,e),Tt(e),a&512&&(Je||n===null||bn(n,n.return)),n!==null&&a&4&&tc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Nt(t,e),Tt(e),a&512&&(Je||n===null||bn(n,n.return)),e.flags&32){o=e.stateNode;try{Ja(o,"")}catch(W){Te(e,e.return,W)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,tc(e,o,n!==null?n.memoizedProps:o)),a&1024&&(lc=!0);break;case 6:if(Nt(t,e),Tt(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(W){Te(e,e.return,W)}}break;case 3:if(Js=null,o=rn,rn=Ks(t.containerInfo),Nt(t,e),rn=o,Tt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Tl(t.containerInfo)}catch(W){Te(e,e.return,W)}lc&&(lc=!1,uf(e));break;case 4:a=rn,rn=Ks(e.stateNode.containerInfo),Nt(t,e),Tt(e),rn=a;break;case 12:Nt(t,e),Tt(e);break;case 31:Nt(t,e),Tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,js(e,a)));break;case 13:Nt(t,e),Tt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ls=dt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,js(e,a)));break;case 22:o=e.memoizedState!==null;var C=n!==null&&n.memoizedState!==null,k=Ln,L=Je;if(Ln=k||o,Je=L||C,Nt(t,e),Je=L,Ln=k,Tt(e),a&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||C||Ln||Je||Ua(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){C=n=t;try{if(c=C.stateNode,o)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{b=C.stateNode;var H=C.memoizedProps.style,M=H!=null&&H.hasOwnProperty("display")?H.display:null;b.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(W){Te(C,C.return,W)}}}else if(t.tag===6){if(n===null){C=t;try{C.stateNode.nodeValue=o?"":C.memoizedProps}catch(W){Te(C,C.return,W)}}}else if(t.tag===18){if(n===null){C=t;try{var O=C.stateNode;o?Wf(O,!0):Wf(C.stateNode,!1)}catch(W){Te(C,C.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,js(e,n))));break;case 19:Nt(t,e),Tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,js(e,a)));break;case 30:break;case 21:break;default:Nt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(ef(a)){n=a;break}a=a.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var o=n.stateNode,c=nc(e);zs(e,c,o);break;case 5:var p=n.stateNode;n.flags&32&&(Ja(p,""),n.flags&=-33);var b=nc(e);zs(e,b,p);break;case 3:case 4:var C=n.stateNode.containerInfo,k=nc(e);ac(e,k,C);break;default:throw Error(r(161))}}catch(L){Te(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;uf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Hn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)af(e,t.alternate,t),t=t.sibling}function Ua(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:aa(4,t,t.return),Ua(t);break;case 1:bn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&P0(t,t.return,n),Ua(t);break;case 27:vi(t.stateNode);case 26:case 5:bn(t,t.return),Ua(t);break;case 22:t.memoizedState===null&&Ua(t);break;case 30:Ua(t);break;default:Ua(t)}e=e.sibling}}function Zn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,o=e,c=t,p=c.flags;switch(c.tag){case 0:case 11:case 15:Zn(o,c,n),oi(4,c);break;case 1:if(Zn(o,c,n),a=c,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(k){Te(a,a.return,k)}if(a=c,o=a.updateQueue,o!==null){var b=a.stateNode;try{var C=o.shared.hiddenCallbacks;if(C!==null)for(o.shared.hiddenCallbacks=null,o=0;o<C.length;o++)Bd(C[o],b)}catch(k){Te(a,a.return,k)}}n&&p&64&&F0(c),ci(c,c.return);break;case 27:tf(c);case 26:case 5:Zn(o,c,n),n&&a===null&&p&4&&W0(c),ci(c,c.return);break;case 12:Zn(o,c,n);break;case 31:Zn(o,c,n),n&&p&4&&rf(o,c);break;case 13:Zn(o,c,n),n&&p&4&&of(o,c);break;case 22:c.memoizedState===null&&Zn(o,c,n),ci(c,c.return);break;case 30:break;default:Zn(o,c,n)}t=t.sibling}}function ic(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&$l(n))}function sc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e))}function on(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)df(e,t,n,a),t=t.sibling}function df(e,t,n,a){var o=t.flags;switch(t.tag){case 0:case 11:case 15:on(e,t,n,a),o&2048&&oi(9,t);break;case 1:on(e,t,n,a);break;case 3:on(e,t,n,a),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e)));break;case 12:if(o&2048){on(e,t,n,a),e=t.stateNode;try{var c=t.memoizedProps,p=c.id,b=c.onPostCommit;typeof b=="function"&&b(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){Te(t,t.return,C)}}else on(e,t,n,a);break;case 31:on(e,t,n,a);break;case 13:on(e,t,n,a);break;case 23:break;case 22:c=t.stateNode,p=t.alternate,t.memoizedState!==null?c._visibility&2?on(e,t,n,a):ui(e,t):c._visibility&2?on(e,t,n,a):(c._visibility|=2,gl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),o&2048&&ic(p,t);break;case 24:on(e,t,n,a),o&2048&&sc(t.alternate,t);break;default:on(e,t,n,a)}}function gl(e,t,n,a,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,p=t,b=n,C=a,k=p.flags;switch(p.tag){case 0:case 11:case 15:gl(c,p,b,C,o),oi(8,p);break;case 23:break;case 22:var L=p.stateNode;p.memoizedState!==null?L._visibility&2?gl(c,p,b,C,o):ui(c,p):(L._visibility|=2,gl(c,p,b,C,o)),o&&k&2048&&ic(p.alternate,p);break;case 24:gl(c,p,b,C,o),o&&k&2048&&sc(p.alternate,p);break;default:gl(c,p,b,C,o)}t=t.sibling}}function ui(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:ui(n,a),o&2048&&ic(a.alternate,a);break;case 24:ui(n,a),o&2048&&sc(a.alternate,a);break;default:ui(n,a)}t=t.sibling}}var di=8192;function bl(e,t,n){if(e.subtreeFlags&di)for(e=e.child;e!==null;)ff(e,t,n),e=e.sibling}function ff(e,t,n){switch(e.tag){case 26:bl(e,t,n),e.flags&di&&e.memoizedState!==null&&Ug(n,rn,e.memoizedState,e.memoizedProps);break;case 5:bl(e,t,n);break;case 3:case 4:var a=rn;rn=Ks(e.stateNode.containerInfo),bl(e,t,n),rn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=di,di=16777216,bl(e,t,n),di=a):bl(e,t,n));break;default:bl(e,t,n)}}function pf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];at=a,mf(a,e)}pf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hf(e),e=e.sibling}function hf(e){switch(e.tag){case 0:case 11:case 15:fi(e),e.flags&2048&&aa(9,e,e.return);break;case 3:fi(e);break;case 12:fi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_s(e)):fi(e);break;default:fi(e)}}function _s(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];at=a,mf(a,e)}pf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:aa(8,t,t.return),_s(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,_s(t));break;default:_s(t)}e=e.sibling}}function mf(e,t){for(;at!==null;){var n=at;switch(n.tag){case 0:case 11:case 15:aa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:$l(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,at=a;else e:for(n=e;at!==null;){a=at;var o=a.sibling,c=a.return;if(lf(a),a===n){at=null;break e}if(o!==null){o.return=c,at=o;break e}at=c}}}var Pm={getCacheForType:function(e){var t=ot(Qe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ot(Qe).controller.signal}},Wm=typeof WeakMap=="function"?WeakMap:Map,Ae=0,_e=null,me=null,be=0,Ne=0,_t=null,la=!1,vl=!1,rc=!1,Bn=0,Ve=0,ia=0,Ha=0,oc=0,Lt=0,yl=0,pi=null,Dt=null,cc=!1,Ls=0,gf=0,Us=1/0,Hs=null,sa=null,We=0,ra=null,xl=null,qn=0,uc=0,dc=null,bf=null,hi=0,fc=null;function Ut(){return(Ae&2)!==0&&be!==0?be&-be:j.T!==null?vc():ln()}function vf(){if(Lt===0)if((be&536870912)===0||xe){var e=Ya;Ya<<=1,(Ya&3932160)===0&&(Ya=262144),Lt=e}else Lt=536870912;return e=zt.current,e!==null&&(e.flags|=32),Lt}function kt(e,t,n){(e===_e&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),oa(e,be,Lt,!1)),qt(e,n),((Ae&2)===0||e!==_e)&&(e===_e&&((Ae&2)===0&&(Ha|=n),Ve===4&&oa(e,be,Lt,!1)),vn(e))}function yf(e,t,n){if((Ae&6)!==0)throw Error(r(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||xt(e,t),o=a?ng(e,t):hc(e,t,!0),c=a;do{if(o===0){vl&&!a&&oa(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!eg(n)){o=hc(e,t,!1),c=!1;continue}if(o===2){if(c=t,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var b=e;o=pi;var C=b.current.memoizedState.isDehydrated;if(C&&(Sl(b,p).flags|=256),p=hc(b,p,!1),p!==2){if(rc&&!C){b.errorRecoveryDisabledLanes|=c,Ha|=c,o=4;break e}c=Dt,Dt=o,c!==null&&(Dt===null?Dt=c:Dt.push.apply(Dt,c))}o=p}if(c=!1,o!==2)continue}}if(o===1){Sl(e,0),oa(e,t,0,!0);break}e:{switch(a=e,c=o,c){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:oa(a,t,Lt,!la);break e;case 2:Dt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(o=Ls+300-dt(),10<o)){if(oa(a,t,Lt,!la),tt(a,0,!0)!==0)break e;qn=t,a.timeoutHandle=Jf(xf.bind(null,a,n,Dt,Hs,cc,t,Lt,Ha,yl,la,c,"Throttled",-0,0),o);break e}xf(a,n,Dt,Hs,cc,t,Lt,Ha,yl,la,c,null,-0,0)}}break}while(!0);vn(e)}function xf(e,t,n,a,o,c,p,b,C,k,L,H,M,O){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nn},ff(t,c,H);var W=(c&62914560)===c?Ls-dt():(c&4194048)===c?gf-dt():0;if(W=Hg(H,W),W!==null){qn=c,e.cancelPendingCommit=W(Df.bind(null,e,t,c,n,a,o,p,b,C,L,H,null,M,O)),oa(e,c,p,!k);return}}Df(e,t,c,n,a,o,p,b,C)}function eg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],c=o.getSnapshot;o=o.value;try{if(!Rt(c(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function oa(e,t,n,a){t&=~oc,t&=~Ha,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var c=31-ft(o),p=1<<c;a[c]=-1,o&=~p}n!==0&&an(e,n,t)}function Zs(){return(Ae&6)===0?(mi(0),!1):!0}function pc(){if(me!==null){if(Ne===0)var e=me.return;else e=me,Mn=ka=null,ko(e),dl=null,Fl=0,e=me;for(;e!==null;)J0(e.alternate,e),e=e.return;me=null}}function Sl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,xg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),qn=0,pc(),_e=e,me=n=Dn(e.current,null),be=t,Ne=0,_t=null,la=!1,vl=xt(e,t),rc=!1,yl=Lt=oc=Ha=ia=Ve=0,Dt=pi=null,cc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var o=31-ft(a),c=1<<o;t|=e[o],a&=~c}return Bn=t,ss(),n}function Sf(e,t){ce=null,j.H=ii,t===ul||t===hs?(t=Ld(),Ne=3):t===bo?(t=Ld(),Ne=4):Ne=t===Xo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,me===null&&(Ve=1,Ds(e,Qt(t,e.current)))}function wf(){var e=zt.current;return e===null?!0:(be&4194048)===be?Ft===null:(be&62914560)===be||(be&536870912)!==0?e===Ft:!1}function Cf(){var e=j.H;return j.H=ii,e===null?ii:e}function Af(){var e=j.A;return j.A=Pm,e}function Bs(){Ve=4,la||(be&4194048)!==be&&zt.current!==null||(vl=!0),(ia&134217727)===0&&(Ha&134217727)===0||_e===null||oa(_e,be,Lt,!1)}function hc(e,t,n){var a=Ae;Ae|=2;var o=Cf(),c=Af();(_e!==e||be!==t)&&(Hs=null,Sl(e,t)),t=!1;var p=Ve;e:do try{if(Ne!==0&&me!==null){var b=me,C=_t;switch(Ne){case 8:pc(),p=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var k=Ne;if(Ne=0,_t=null,wl(e,b,C,k),n&&vl){p=0;break e}break;default:k=Ne,Ne=0,_t=null,wl(e,b,C,k)}}tg(),p=Ve;break}catch(L){Sf(e,L)}while(!0);return t&&e.shellSuspendCounter++,Mn=ka=null,Ae=a,j.H=o,j.A=c,me===null&&(_e=null,be=0,ss()),p}function tg(){for(;me!==null;)Ef(me)}function ng(e,t){var n=Ae;Ae|=2;var a=Cf(),o=Af();_e!==e||be!==t?(Hs=null,Us=dt()+500,Sl(e,t)):vl=xt(e,t);e:do try{if(Ne!==0&&me!==null){t=me;var c=_t;t:switch(Ne){case 1:Ne=0,_t=null,wl(e,t,c,1);break;case 2:case 9:if(jd(c)){Ne=0,_t=null,Nf(t);break}t=function(){Ne!==2&&Ne!==9||_e!==e||(Ne=7),vn(e)},c.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:jd(c)?(Ne=0,_t=null,Nf(t)):(Ne=0,_t=null,wl(e,t,c,7));break;case 5:var p=null;switch(me.tag){case 26:p=me.memoizedState;case 5:case 27:var b=me;if(p?d1(p):b.stateNode.complete){Ne=0,_t=null;var C=b.sibling;if(C!==null)me=C;else{var k=b.return;k!==null?(me=k,qs(k)):me=null}break t}}Ne=0,_t=null,wl(e,t,c,5);break;case 6:Ne=0,_t=null,wl(e,t,c,6);break;case 8:pc(),Ve=6;break e;default:throw Error(r(462))}}ag();break}catch(L){Sf(e,L)}while(!0);return Mn=ka=null,j.H=a,j.A=o,Ae=n,me!==null?0:(_e=null,be=0,ss(),Ve)}function ag(){for(;me!==null&&!qa();)Ef(me)}function Ef(e){var t=K0(e.alternate,e,Bn);e.memoizedProps=e.pendingProps,t===null?qs(e):me=t}function Nf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=V0(n,t,t.pendingProps,t.type,void 0,be);break;case 11:t=V0(n,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:ko(t);default:J0(n,t),t=me=Cd(t,Bn),t=K0(n,t,Bn)}e.memoizedProps=e.pendingProps,t===null?qs(e):me=t}function wl(e,t,n,a){Mn=ka=null,ko(t),dl=null,Fl=0;var o=t.return;try{if(Xm(e,o,t,n,be)){Ve=1,Ds(e,Qt(n,e.current)),me=null;return}}catch(c){if(o!==null)throw me=o,c;Ve=1,Ds(e,Qt(n,e.current)),me=null;return}t.flags&32768?(xe||a===1?e=!0:vl||(be&536870912)!==0?e=!1:(la=e=!0,(a===2||a===9||a===3||a===6)&&(a=zt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Tf(t,e)):qs(t)}function qs(e){var t=e;do{if((t.flags&32768)!==0){Tf(t,la);return}e=t.return;var n=Km(t.alternate,t,Bn);if(n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Ve===0&&(Ve=5)}function Tf(e,t){do{var n=$m(e.alternate,e);if(n!==null){n.flags&=32767,me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=n}while(e!==null);Ve=6,me=null}function Df(e,t,n,a,o,c,p,b,C){e.cancelPendingCommit=null;do Vs();while(We!==0);if((Ae&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(c=t.lanes|t.childLanes,c|=to,Pe(e,n,c,p,b,C),e===_e&&(me=_e=null,be=0),xl=t,ra=e,qn=n,uc=c,dc=o,bf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rg(nn,function(){return zf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=j.T,j.T=null,o=G.p,G.p=2,p=Ae,Ae|=4;try{Jm(e,t,n)}finally{Ae=p,G.p=o,j.T=a}}We=1,kf(),Mf(),Rf()}}function kf(){if(We===1){We=0;var e=ra,t=xl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=j.T,j.T=null;var a=G.p;G.p=2;var o=Ae;Ae|=4;try{cf(t,e);var c=Nc,p=hd(e.containerInfo),b=c.focusedElem,C=c.selectionRange;if(p!==b&&b&&b.ownerDocument&&pd(b.ownerDocument.documentElement,b)){if(C!==null&&Jr(b)){var k=C.start,L=C.end;if(L===void 0&&(L=k),"selectionStart"in b)b.selectionStart=k,b.selectionEnd=Math.min(L,b.value.length);else{var H=b.ownerDocument||document,M=H&&H.defaultView||window;if(M.getSelection){var O=M.getSelection(),W=b.textContent.length,ie=Math.min(C.start,W),Oe=C.end===void 0?ie:Math.min(C.end,W);!O.extend&&ie>Oe&&(p=Oe,Oe=ie,ie=p);var E=fd(b,ie),A=fd(b,Oe);if(E&&A&&(O.rangeCount!==1||O.anchorNode!==E.node||O.anchorOffset!==E.offset||O.focusNode!==A.node||O.focusOffset!==A.offset)){var D=H.createRange();D.setStart(E.node,E.offset),O.removeAllRanges(),ie>Oe?(O.addRange(D),O.extend(A.node,A.offset)):(D.setEnd(A.node,A.offset),O.addRange(D))}}}}for(H=[],O=b;O=O.parentNode;)O.nodeType===1&&H.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<H.length;b++){var U=H[b];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}er=!!Ec,Nc=Ec=null}finally{Ae=o,G.p=a,j.T=n}}e.current=t,We=2}}function Mf(){if(We===2){We=0;var e=ra,t=xl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=j.T,j.T=null;var a=G.p;G.p=2;var o=Ae;Ae|=4;try{af(e,t.alternate,t)}finally{Ae=o,G.p=a,j.T=n}}We=3}}function Rf(){if(We===4||We===3){We=0,Xi();var e=ra,t=xl,n=qn,a=bf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,xl=ra=null,Of(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(sa=null),An(n),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Sa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=j.T,o=G.p,G.p=2,j.T=null;try{for(var c=e.onRecoverableError,p=0;p<a.length;p++){var b=a[p];c(b.value,{componentStack:b.stack})}}finally{j.T=t,G.p=o}}(qn&3)!==0&&Vs(),vn(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===fc?hi++:(hi=0,fc=e):hi=0,mi(0)}}function Of(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$l(t)))}function Vs(){return kf(),Mf(),Rf(),zf()}function zf(){if(We!==5)return!1;var e=ra,t=uc;uc=0;var n=An(qn),a=j.T,o=G.p;try{G.p=32>n?32:n,j.T=null,n=dc,dc=null;var c=ra,p=qn;if(We=0,xl=ra=null,qn=0,(Ae&6)!==0)throw Error(r(331));var b=Ae;if(Ae|=4,hf(c.current),df(c,c.current,p,n),Ae=b,mi(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Sa,c)}catch{}return!0}finally{G.p=o,j.T=a,Of(e,t)}}function jf(e,t,n){t=Qt(n,t),t=Go(e.stateNode,t,2),e=ea(e,t,2),e!==null&&(qt(e,2),vn(e))}function Te(e,t,n){if(e.tag===3)jf(e,e,n);else for(;t!==null;){if(t.tag===3){jf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(sa===null||!sa.has(a))){e=Qt(n,e),n=j0(2),a=ea(t,n,2),a!==null&&(_0(n,a,t,e),qt(a,2),vn(a));break}}t=t.return}}function mc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Wm;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(rc=!0,o.add(n),e=lg.bind(null,e,t,n),t.then(e,e))}function lg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(be&n)===n&&(Ve===4||Ve===3&&(be&62914560)===be&&300>dt()-Ls?(Ae&2)===0&&Sl(e,0):oc|=n,yl===be&&(yl=0)),vn(e)}function _f(e,t){t===0&&(t=pt()),e=Na(e,t),e!==null&&(qt(e,t),vn(e))}function ig(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_f(e,n)}function sg(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(t),_f(e,n)}function rg(e,t){return Zt(e,t)}var Ys=null,Cl=null,gc=!1,Gs=!1,bc=!1,ca=0;function vn(e){e!==Cl&&e.next===null&&(Cl===null?Ys=Cl=e:Cl=Cl.next=e),Gs=!0,gc||(gc=!0,cg())}function mi(e,t){if(!bc&&Gs){bc=!0;do for(var n=!1,a=Ys;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var c=0;else{var p=a.suspendedLanes,b=a.pingedLanes;c=(1<<31-ft(42|e)+1)-1,c&=o&~(p&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Zf(a,c))}else c=be,c=tt(a,a===_e?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||xt(a,c)||(n=!0,Zf(a,c));a=a.next}while(n);bc=!1}}function og(){Lf()}function Lf(){Gs=gc=!1;var e=0;ca!==0&&yg()&&(e=ca);for(var t=dt(),n=null,a=Ys;a!==null;){var o=a.next,c=Uf(a,t);c===0?(a.next=null,n===null?Ys=o:n.next=o,o===null&&(Cl=n)):(n=a,(e!==0||(c&3)!==0)&&(Gs=!0)),a=o}We!==0&&We!==5||mi(e),ca!==0&&(ca=0)}function Uf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-ft(c),b=1<<p,C=o[p];C===-1?((b&n)===0||(b&a)!==0)&&(o[p]=St(b,t)):C<=t&&(e.expiredLanes|=b),c&=~b}if(t=_e,n=be,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Xn(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||xt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Xn(a),An(n)){case 2:case 8:n=wn;break;case 32:n=nn;break;case 268435456:n=_l;break;default:n=nn}return a=Hf.bind(null,e),n=Zt(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Xn(a),e.callbackPriority=2,e.callbackNode=null,2}function Hf(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vs()&&e.callbackNode!==n)return null;var a=be;return a=tt(e,e===_e?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(yf(e,a,t),Uf(e,dt()),e.callbackNode!=null&&e.callbackNode===n?Hf.bind(null,e):null)}function Zf(e,t){if(Vs())return null;yf(e,t,!0)}function cg(){Sg(function(){(Ae&6)!==0?Zt(Ii,og):Lf()})}function vc(){if(ca===0){var e=ol;e===0&&(e=Va,Va<<=1,(Va&261888)===0&&(Va=256)),ca=e}return ca}function Bf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pi(""+e)}function qf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function ug(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var c=Bf((o[Ct]||null).action),p=a.submitter;p&&(t=(t=p[Ct]||null)?Bf(t.formAction):p.getAttribute("formAction"),t!==null&&(c=t,p=null));var b=new ns("action","action",null,a,o);e.push({event:b,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ca!==0){var C=p?qf(o,p):new FormData(o);Ho(n,{pending:!0,data:C,method:o.method,action:c},null,C)}}else typeof c=="function"&&(b.preventDefault(),C=p?qf(o,p):new FormData(o),Ho(n,{pending:!0,data:C,method:o.method,action:c},c,C))},currentTarget:o}]})}}for(var yc=0;yc<eo.length;yc++){var xc=eo[yc],dg=xc.toLowerCase(),fg=xc[0].toUpperCase()+xc.slice(1);sn(dg,"on"+fg)}sn(bd,"onAnimationEnd"),sn(vd,"onAnimationIteration"),sn(yd,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(Dm,"onTransitionRun"),sn(km,"onTransitionStart"),sn(Mm,"onTransitionCancel"),sn(xd,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gi));function Vf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var c=void 0;if(t)for(var p=a.length-1;0<=p;p--){var b=a[p],C=b.instance,k=b.currentTarget;if(b=b.listener,C!==c&&o.isPropagationStopped())break e;c=b,o.currentTarget=k;try{c(o)}catch(L){is(L)}o.currentTarget=null,c=C}else for(p=0;p<a.length;p++){if(b=a[p],C=b.instance,k=b.currentTarget,b=b.listener,C!==c&&o.isPropagationStopped())break e;c=b,o.currentTarget=k;try{c(o)}catch(L){is(L)}o.currentTarget=null,c=C}}}}function ge(e,t){var n=t[Or];n===void 0&&(n=t[Or]=new Set);var a=e+"__bubble";n.has(a)||(Yf(t,e,2,!1),n.add(a))}function Sc(e,t,n){var a=0;t&&(a|=4),Yf(n,e,a,t)}var Xs="_reactListening"+Math.random().toString(36).slice(2);function wc(e){if(!e[Xs]){e[Xs]=!0,_u.forEach(function(n){n!=="selectionchange"&&(pg.has(n)||Sc(n,!1,e),Sc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xs]||(t[Xs]=!0,Sc("selectionchange",!1,t))}}function Yf(e,t,n,a){switch(v1(t)){case 2:var o=qg;break;case 8:o=Vg;break;default:o=Uc}n=o.bind(null,t,n,e),o=void 0,!qr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Cc(e,t,n,a,o){var c=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var b=a.stateNode.containerInfo;if(b===o)break;if(p===4)for(p=a.return;p!==null;){var C=p.tag;if((C===3||C===4)&&p.stateNode.containerInfo===o)return;p=p.return}for(;b!==null;){if(p=Xa(b),p===null)return;if(C=p.tag,C===5||C===6||C===26||C===27){a=c=p;continue e}b=b.parentNode}}a=a.return}Qu(function(){var k=c,L=Zr(n),H=[];e:{var M=Sd.get(e);if(M!==void 0){var O=ns,W=e;switch(e){case"keypress":if(es(n)===0)break e;case"keydown":case"keyup":O=sm;break;case"focusin":W="focus",O=Xr;break;case"focusout":W="blur",O=Xr;break;case"beforeblur":case"afterblur":O=Xr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=cm;break;case bd:case vd:case yd:O=Fh;break;case xd:O=dm;break;case"scroll":case"scrollend":O=Ih;break;case"wheel":O=pm;break;case"copy":case"cut":case"paste":O=Wh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Pu;break;case"toggle":case"beforetoggle":O=mm}var ie=(t&4)!==0,Oe=!ie&&(e==="scroll"||e==="scrollend"),E=ie?M!==null?M+"Capture":null:M;ie=[];for(var A=k,D;A!==null;){var U=A;if(D=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||D===null||E===null||(U=Hl(A,E),U!=null&&ie.push(bi(A,U,D))),Oe)break;A=A.return}0<ie.length&&(M=new O(M,W,null,n,L),H.push({event:M,listeners:ie}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",M&&n!==Hr&&(W=n.relatedTarget||n.fromElement)&&(Xa(W)||W[Ga]))break e;if((O||M)&&(M=L.window===L?L:(M=L.ownerDocument)?M.defaultView||M.parentWindow:window,O?(W=n.relatedTarget||n.toElement,O=k,W=W?Xa(W):null,W!==null&&(Oe=d(W),ie=W.tag,W!==Oe||ie!==5&&ie!==27&&ie!==6)&&(W=null)):(O=null,W=k),O!==W)){if(ie=Ju,U="onMouseLeave",E="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Pu,U="onPointerLeave",E="onPointerEnter",A="pointer"),Oe=O==null?M:Ul(O),D=W==null?M:Ul(W),M=new ie(U,A+"leave",O,n,L),M.target=Oe,M.relatedTarget=D,U=null,Xa(L)===k&&(ie=new ie(E,A+"enter",W,n,L),ie.target=D,ie.relatedTarget=Oe,U=ie),Oe=U,O&&W)t:{for(ie=hg,E=O,A=W,D=0,U=E;U;U=ie(U))D++;U=0;for(var le=A;le;le=ie(le))U++;for(;0<D-U;)E=ie(E),D--;for(;0<U-D;)A=ie(A),U--;for(;D--;){if(E===A||A!==null&&E===A.alternate){ie=E;break t}E=ie(E),A=ie(A)}ie=null}else ie=null;O!==null&&Gf(H,M,O,ie,!1),W!==null&&Oe!==null&&Gf(H,Oe,W,ie,!0)}}e:{if(M=k?Ul(k):window,O=M.nodeName&&M.nodeName.toLowerCase(),O==="select"||O==="input"&&M.type==="file")var we=sd;else if(ld(M))if(rd)we=Em;else{we=Cm;var ee=wm}else O=M.nodeName,!O||O.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?k&&Ur(k.elementType)&&(we=sd):we=Am;if(we&&(we=we(e,k))){id(H,we,n,L);break e}ee&&ee(e,M,k),e==="focusout"&&k&&M.type==="number"&&k.memoizedProps.value!=null&&Lr(M,"number",M.value)}switch(ee=k?Ul(k):window,e){case"focusin":(ld(ee)||ee.contentEditable==="true")&&(el=ee,Fr=k,Il=null);break;case"focusout":Il=Fr=el=null;break;case"mousedown":Pr=!0;break;case"contextmenu":case"mouseup":case"dragend":Pr=!1,md(H,n,L);break;case"selectionchange":if(Tm)break;case"keydown":case"keyup":md(H,n,L)}var ue;if(Qr)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Wa?nd(e,n)&&(ve="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ve="onCompositionStart");ve&&(Wu&&n.locale!=="ko"&&(Wa||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Wa&&(ue=Ku()):(Qn=L,Vr="value"in Qn?Qn.value:Qn.textContent,Wa=!0)),ee=Is(k,ve),0<ee.length&&(ve=new Fu(ve,e,null,n,L),H.push({event:ve,listeners:ee}),ue?ve.data=ue:(ue=ad(n),ue!==null&&(ve.data=ue)))),(ue=bm?vm(e,n):ym(e,n))&&(ve=Is(k,"onBeforeInput"),0<ve.length&&(ee=new Fu("onBeforeInput","beforeinput",null,n,L),H.push({event:ee,listeners:ve}),ee.data=ue)),ug(H,e,k,n,L)}Vf(H,t)})}function bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Is(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Hl(e,n),o!=null&&a.unshift(bi(e,o,c)),o=Hl(e,t),o!=null&&a.push(bi(e,o,c))),e.tag===3)return a;e=e.return}return[]}function hg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gf(e,t,n,a,o){for(var c=t._reactName,p=[];n!==null&&n!==a;){var b=n,C=b.alternate,k=b.stateNode;if(b=b.tag,C!==null&&C===a)break;b!==5&&b!==26&&b!==27||k===null||(C=k,o?(k=Hl(n,c),k!=null&&p.unshift(bi(n,k,C))):o||(k=Hl(n,c),k!=null&&p.push(bi(n,k,C)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var mg=/\r\n?/g,gg=/\u0000|\uFFFD/g;function Xf(e){return(typeof e=="string"?e:""+e).replace(mg,`
`).replace(gg,"")}function If(e,t){return t=Xf(t),Xf(e)===t}function Re(e,t,n,a,o,c){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ja(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ja(e,""+a);break;case"className":Ji(e,"class",a);break;case"tabIndex":Ji(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ji(e,n,a);break;case"style":Xu(e,a,c);break;case"data":if(t!=="object"){Ji(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Pi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Re(e,t,"name",o.name,o,null),Re(e,t,"formEncType",o.formEncType,o,null),Re(e,t,"formMethod",o.formMethod,o,null),Re(e,t,"formTarget",o.formTarget,o,null)):(Re(e,t,"encType",o.encType,o,null),Re(e,t,"method",o.method,o,null),Re(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Pi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Nn);break;case"onScroll":a!=null&&ge("scroll",e);break;case"onScrollEnd":a!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Pi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ge("beforetoggle",e),ge("toggle",e),$i(e,"popover",a);break;case"xlinkActuate":En(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":En(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":En(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":En(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":En(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":En(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":En(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":En(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":En(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":$i(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Gh.get(n)||n,$i(e,n,a))}}function Ac(e,t,n,a,o,c){switch(n){case"style":Xu(e,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ja(e,a):(typeof a=="number"||typeof a=="bigint")&&Ja(e,""+a);break;case"onScroll":a!=null&&ge("scroll",e);break;case"onScrollEnd":a!=null&&ge("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),c=e[Ct]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,o),typeof a=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,o);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):$i(e,n,a)}}}function ut(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var a=!1,o=!1,c;for(c in n)if(n.hasOwnProperty(c)){var p=n[c];if(p!=null)switch(c){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Re(e,t,c,p,n,null)}}o&&Re(e,t,"srcSet",n.srcSet,n,null),a&&Re(e,t,"src",n.src,n,null);return;case"input":ge("invalid",e);var b=c=p=o=null,C=null,k=null;for(a in n)if(n.hasOwnProperty(a)){var L=n[a];if(L!=null)switch(a){case"name":o=L;break;case"type":p=L;break;case"checked":C=L;break;case"defaultChecked":k=L;break;case"value":c=L;break;case"defaultValue":b=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(r(137,t));break;default:Re(e,t,a,L,n,null)}}qu(e,c,b,C,k,p,o,!1);return;case"select":ge("invalid",e),a=p=c=null;for(o in n)if(n.hasOwnProperty(o)&&(b=n[o],b!=null))switch(o){case"value":c=b;break;case"defaultValue":p=b;break;case"multiple":a=b;default:Re(e,t,o,b,n,null)}t=c,n=p,e.multiple=!!a,t!=null?$a(e,!!a,t,!1):n!=null&&$a(e,!!a,n,!0);return;case"textarea":ge("invalid",e),c=o=a=null;for(p in n)if(n.hasOwnProperty(p)&&(b=n[p],b!=null))switch(p){case"value":a=b;break;case"defaultValue":o=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Re(e,t,p,b,n,null)}Yu(e,a,o,c);return;case"option":for(C in n)if(n.hasOwnProperty(C)&&(a=n[C],a!=null))switch(C){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Re(e,t,C,a,n,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(a=0;a<gi.length;a++)ge(gi[a],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in n)if(n.hasOwnProperty(k)&&(a=n[k],a!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Re(e,t,k,a,n,null)}return;default:if(Ur(t)){for(L in n)n.hasOwnProperty(L)&&(a=n[L],a!==void 0&&Ac(e,t,L,a,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(a=n[b],a!=null&&Re(e,t,b,a,n,null))}function bg(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,p=null,b=null,C=null,k=null,L=null;for(O in n){var H=n[O];if(n.hasOwnProperty(O)&&H!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":C=H;default:a.hasOwnProperty(O)||Re(e,t,O,null,a,H)}}for(var M in a){var O=a[M];if(H=n[M],a.hasOwnProperty(M)&&(O!=null||H!=null))switch(M){case"type":c=O;break;case"name":o=O;break;case"checked":k=O;break;case"defaultChecked":L=O;break;case"value":p=O;break;case"defaultValue":b=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:O!==H&&Re(e,t,M,O,a,H)}}_r(e,p,b,C,k,L,c,o);return;case"select":O=p=b=M=null;for(c in n)if(C=n[c],n.hasOwnProperty(c)&&C!=null)switch(c){case"value":break;case"multiple":O=C;default:a.hasOwnProperty(c)||Re(e,t,c,null,a,C)}for(o in a)if(c=a[o],C=n[o],a.hasOwnProperty(o)&&(c!=null||C!=null))switch(o){case"value":M=c;break;case"defaultValue":b=c;break;case"multiple":p=c;default:c!==C&&Re(e,t,o,c,a,C)}t=b,n=p,a=O,M!=null?$a(e,!!n,M,!1):!!a!=!!n&&(t!=null?$a(e,!!n,t,!0):$a(e,!!n,n?[]:"",!1));return;case"textarea":O=M=null;for(b in n)if(o=n[b],n.hasOwnProperty(b)&&o!=null&&!a.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Re(e,t,b,null,a,o)}for(p in a)if(o=a[p],c=n[p],a.hasOwnProperty(p)&&(o!=null||c!=null))switch(p){case"value":M=o;break;case"defaultValue":O=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==c&&Re(e,t,p,o,a,c)}Vu(e,M,O);return;case"option":for(var W in n)if(M=n[W],n.hasOwnProperty(W)&&M!=null&&!a.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:Re(e,t,W,null,a,M)}for(C in a)if(M=a[C],O=n[C],a.hasOwnProperty(C)&&M!==O&&(M!=null||O!=null))switch(C){case"selected":e.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:Re(e,t,C,M,a,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in n)M=n[ie],n.hasOwnProperty(ie)&&M!=null&&!a.hasOwnProperty(ie)&&Re(e,t,ie,null,a,M);for(k in a)if(M=a[k],O=n[k],a.hasOwnProperty(k)&&M!==O&&(M!=null||O!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,t));break;default:Re(e,t,k,M,a,O)}return;default:if(Ur(t)){for(var Oe in n)M=n[Oe],n.hasOwnProperty(Oe)&&M!==void 0&&!a.hasOwnProperty(Oe)&&Ac(e,t,Oe,void 0,a,M);for(L in a)M=a[L],O=n[L],!a.hasOwnProperty(L)||M===O||M===void 0&&O===void 0||Ac(e,t,L,M,a,O);return}}for(var E in n)M=n[E],n.hasOwnProperty(E)&&M!=null&&!a.hasOwnProperty(E)&&Re(e,t,E,null,a,M);for(H in a)M=a[H],O=n[H],!a.hasOwnProperty(H)||M===O||M==null&&O==null||Re(e,t,H,M,a,O)}function Qf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var o=n[a],c=o.transferSize,p=o.initiatorType,b=o.duration;if(c&&b&&Qf(p)){for(p=0,b=o.responseEnd,a+=1;a<n.length;a++){var C=n[a],k=C.startTime;if(k>b)break;var L=C.transferSize,H=C.initiatorType;L&&Qf(H)&&(C=C.responseEnd,p+=L*(C<b?1:(b-k)/(C-k)))}if(--a,t+=8*(c+p)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ec=null,Nc=null;function Qs(e){return e.nodeType===9?e:e.ownerDocument}function Kf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $f(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dc=null;function yg(){var e=window.event;return e&&e.type==="popstate"?e===Dc?!1:(Dc=e,!0):(Dc=null,!1)}var Jf=typeof setTimeout=="function"?setTimeout:void 0,xg=typeof clearTimeout=="function"?clearTimeout:void 0,Ff=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ff<"u"?function(e){return Ff.resolve(null).then(e).catch(wg)}:Jf;function wg(e){setTimeout(function(){throw e})}function ua(e){return e==="head"}function Pf(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(o),Tl(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")vi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,vi(n);for(var c=n.firstChild;c;){var p=c.nextSibling,b=c.nodeName;c[Ll]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=p}}else n==="body"&&vi(e.ownerDocument.body);n=o}while(n);Tl(t)}function Wf(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function kc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":kc(n),zr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Cg(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ll])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function Ag(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Pt(e.nextSibling),e===null))return null;return e}function e1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pt(e.nextSibling),e===null))return null;return e}function Mc(e){return e.data==="$?"||e.data==="$~"}function Rc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Eg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Oc=null;function t1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Pt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function n1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function a1(e,t,n){switch(t=Qs(n),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function vi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zr(e)}var Wt=new Map,l1=new Set;function Ks(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vn=G.d;G.d={f:Ng,r:Tg,D:Dg,C:kg,L:Mg,m:Rg,X:zg,S:Og,M:jg};function Ng(){var e=Vn.f(),t=Zs();return e||t}function Tg(e){var t=Ia(e);t!==null&&t.tag===5&&t.type==="form"?x0(t):Vn.r(e)}var Al=typeof document>"u"?null:document;function i1(e,t,n){var a=Al;if(a&&typeof t=="string"&&t){var o=Xt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),l1.has(o)||(l1.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),ut(t,"link",e),nt(t),a.head.appendChild(t)))}}function Dg(e){Vn.D(e),i1("dns-prefetch",e,null)}function kg(e,t){Vn.C(e,t),i1("preconnect",e,t)}function Mg(e,t,n){Vn.L(e,t,n);var a=Al;if(a&&e&&t){var o='link[rel="preload"][as="'+Xt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Xt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Xt(n.imageSizes)+'"]')):o+='[href="'+Xt(e)+'"]';var c=o;switch(t){case"style":c=El(e);break;case"script":c=Nl(e)}Wt.has(c)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Wt.set(c,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(yi(c))||t==="script"&&a.querySelector(xi(c))||(t=a.createElement("link"),ut(t,"link",e),nt(t),a.head.appendChild(t)))}}function Rg(e,t){Vn.m(e,t);var n=Al;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Xt(a)+'"][href="'+Xt(e)+'"]',c=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Nl(e)}if(!Wt.has(c)&&(e=S({rel:"modulepreload",href:e},t),Wt.set(c,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(xi(c)))return}a=n.createElement("link"),ut(a,"link",e),nt(a),n.head.appendChild(a)}}}function Og(e,t,n){Vn.S(e,t,n);var a=Al;if(a&&e){var o=Qa(a).hoistableStyles,c=El(e);t=t||"default";var p=o.get(c);if(!p){var b={loading:0,preload:null};if(p=a.querySelector(yi(c)))b.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Wt.get(c))&&zc(e,n);var C=p=a.createElement("link");nt(C),ut(C,"link",e),C._p=new Promise(function(k,L){C.onload=k,C.onerror=L}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,$s(p,t,a)}p={type:"stylesheet",instance:p,count:1,state:b},o.set(c,p)}}}function zg(e,t){Vn.X(e,t);var n=Al;if(n&&e){var a=Qa(n).hoistableScripts,o=Nl(e),c=a.get(o);c||(c=n.querySelector(xi(o)),c||(e=S({src:e,async:!0},t),(t=Wt.get(o))&&jc(e,t),c=n.createElement("script"),nt(c),ut(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(o,c))}}function jg(e,t){Vn.M(e,t);var n=Al;if(n&&e){var a=Qa(n).hoistableScripts,o=Nl(e),c=a.get(o);c||(c=n.querySelector(xi(o)),c||(e=S({src:e,async:!0,type:"module"},t),(t=Wt.get(o))&&jc(e,t),c=n.createElement("script"),nt(c),ut(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(o,c))}}function s1(e,t,n,a){var o=(o=te.current)?Ks(o):null;if(!o)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=El(n.href),n=Qa(o).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=El(n.href);var c=Qa(o).hoistableStyles,p=c.get(e);if(p||(o=o.ownerDocument||o,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=o.querySelector(yi(e)))&&!c._p&&(p.instance=c,p.state.loading=5),Wt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wt.set(e,n),c||_g(o,e,n,p.state))),t&&a===null)throw Error(r(528,""));return p}if(t&&a!==null)throw Error(r(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Nl(n),n=Qa(o).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function El(e){return'href="'+Xt(e)+'"'}function yi(e){return'link[rel="stylesheet"]['+e+"]"}function r1(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function _g(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ut(t,"link",n),nt(t),e.head.appendChild(t))}function Nl(e){return'[src="'+Xt(e)+'"]'}function xi(e){return"script[async]"+e}function o1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Xt(n.href)+'"]');if(a)return t.instance=a,nt(a),a;var o=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),nt(a),ut(a,"style",o),$s(a,n.precedence,e),t.instance=a;case"stylesheet":o=El(n.href);var c=e.querySelector(yi(o));if(c)return t.state.loading|=4,t.instance=c,nt(c),c;a=r1(n),(o=Wt.get(o))&&zc(a,o),c=(e.ownerDocument||e).createElement("link"),nt(c);var p=c;return p._p=new Promise(function(b,C){p.onload=b,p.onerror=C}),ut(c,"link",a),t.state.loading|=4,$s(c,n.precedence,e),t.instance=c;case"script":return c=Nl(n.src),(o=e.querySelector(xi(c)))?(t.instance=o,nt(o),o):(a=n,(o=Wt.get(c))&&(a=S({},n),jc(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),nt(o),ut(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,$s(a,n.precedence,e));return t.instance}function $s(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,c=o,p=0;p<a.length;p++){var b=a[p];if(b.dataset.precedence===t)c=b;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Js=null;function c1(e,t,n){if(Js===null){var a=new Map,o=Js=new Map;o.set(n,a)}else o=Js,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var c=n[o];if(!(c[Ll]||c[st]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(t)||"";p=e+p;var b=a.get(p);b?b.push(c):a.set(p,[c])}}return a}function u1(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Lg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function d1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ug(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=El(a.href),c=t.querySelector(yi(o));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Fs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,nt(c);return}c=t.ownerDocument||t,a=r1(a),(o=Wt.get(o))&&zc(a,o),c=c.createElement("link"),nt(c);var p=c;p._p=new Promise(function(b,C){p.onload=b,p.onerror=C}),ut(c,"link",a),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Fs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var _c=0;function Hg(e,t){return e.stylesheets&&e.count===0&&Ws(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Ws(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&_c===0&&(_c=62500*vg());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ws(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>_c?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function Fs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ws(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ps=null;function Ws(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ps=new Map,t.forEach(Zg,e),Ps=null,Fs.call(e))}function Zg(e,t){if(!(t.state.loading&4)){var n=Ps.get(e);if(n)var a=n.get(null);else{n=new Map,Ps.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var p=o[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),a=p)}a&&n.set(null,a)}o=t.instance,p=o.getAttribute("data-precedence"),c=n.get(p)||a,c===a&&n.set(null,o),n.set(p,o),this.count++,a=Fs.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Si={$$typeof:I,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Bg(e,t,n,a,o,c,p,b,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function f1(e,t,n,a,o,c,p,b,C,k,L,H){return e=new Bg(e,t,n,p,C,k,L,H,b),t=1,c===!0&&(t|=24),c=Ot(3,null,null,t),e.current=c,c.stateNode=e,t=ho(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:a,isDehydrated:n,cache:t},vo(c),e}function p1(e){return e?(e=al,e):al}function h1(e,t,n,a,o,c){o=p1(o),a.context===null?a.context=o:a.pendingContext=o,a=Wn(t),a.payload={element:n},c=c===void 0?null:c,c!==null&&(a.callback=c),n=ea(e,a,t),n!==null&&(kt(n,e,t),Wl(n,e,t))}function m1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lc(e,t){m1(e,t),(e=e.alternate)&&m1(e,t)}function g1(e){if(e.tag===13||e.tag===31){var t=Na(e,67108864);t!==null&&kt(t,e,67108864),Lc(e,67108864)}}function b1(e){if(e.tag===13||e.tag===31){var t=Ut();t=Cn(t);var n=Na(e,t);n!==null&&kt(n,e,t),Lc(e,t)}}var er=!0;function qg(e,t,n,a){var o=j.T;j.T=null;var c=G.p;try{G.p=2,Uc(e,t,n,a)}finally{G.p=c,j.T=o}}function Vg(e,t,n,a){var o=j.T;j.T=null;var c=G.p;try{G.p=8,Uc(e,t,n,a)}finally{G.p=c,j.T=o}}function Uc(e,t,n,a){if(er){var o=Hc(a);if(o===null)Cc(e,t,a,tr,n),y1(e,a);else if(Gg(o,e,t,n,a))a.stopPropagation();else if(y1(e,a),t&4&&-1<Yg.indexOf(e)){for(;o!==null;){var c=Ia(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=Ge(c.pendingLanes);if(p!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;p;){var C=1<<31-ft(p);b.entanglements[1]|=C,p&=~C}vn(c),(Ae&6)===0&&(Us=dt()+500,mi(0))}}break;case 31:case 13:b=Na(c,2),b!==null&&kt(b,c,2),Zs(),Lc(c,2)}if(c=Hc(a),c===null&&Cc(e,t,a,tr,n),c===o)break;o=c}o!==null&&a.stopPropagation()}else Cc(e,t,a,null,n)}}function Hc(e){return e=Zr(e),Zc(e)}var tr=null;function Zc(e){if(tr=null,e=Xa(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tr=e,null}function v1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kr()){case Ii:return 2;case wn:return 8;case nn:case xa:return 32;case _l:return 268435456;default:return 32}default:return 32}}var Bc=!1,da=null,fa=null,pa=null,wi=new Map,Ci=new Map,ha=[],Yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y1(e,t){switch(e){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":fa=null;break;case"mouseover":case"mouseout":pa=null;break;case"pointerover":case"pointerout":wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ci.delete(t.pointerId)}}function Ai(e,t,n,a,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Ia(t),t!==null&&g1(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Gg(e,t,n,a,o){switch(t){case"focusin":return da=Ai(da,e,t,n,a,o),!0;case"dragenter":return fa=Ai(fa,e,t,n,a,o),!0;case"mouseover":return pa=Ai(pa,e,t,n,a,o),!0;case"pointerover":var c=o.pointerId;return wi.set(c,Ai(wi.get(c)||null,e,t,n,a,o)),!0;case"gotpointercapture":return c=o.pointerId,Ci.set(c,Ai(Ci.get(c)||null,e,t,n,a,o)),!0}return!1}function x1(e){var t=Xa(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,In(e.priority,function(){b1(n)});return}}else if(t===31){if(t=h(n),t!==null){e.blockedOn=t,In(e.priority,function(){b1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Hr=a,n.target.dispatchEvent(a),Hr=null}else return t=Ia(n),t!==null&&g1(t),e.blockedOn=n,!1;t.shift()}return!0}function S1(e,t,n){nr(e)&&n.delete(t)}function Xg(){Bc=!1,da!==null&&nr(da)&&(da=null),fa!==null&&nr(fa)&&(fa=null),pa!==null&&nr(pa)&&(pa=null),wi.forEach(S1),Ci.forEach(S1)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,Bc||(Bc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Xg)))}var lr=null;function w1(e){lr!==e&&(lr=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){lr===e&&(lr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(Zc(a||n)===null)continue;break}var c=Ia(n);c!==null&&(e.splice(t,3),t-=3,Ho(c,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function Tl(e){function t(C){return ar(C,e)}da!==null&&ar(da,e),fa!==null&&ar(fa,e),pa!==null&&ar(pa,e),wi.forEach(t),Ci.forEach(t);for(var n=0;n<ha.length;n++){var a=ha[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ha.length&&(n=ha[0],n.blockedOn===null);)x1(n),n.blockedOn===null&&ha.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],c=n[a+1],p=o[Ct]||null;if(typeof c=="function")p||w1(n);else if(p){var b=null;if(c&&c.hasAttribute("formAction")){if(o=c,p=c[Ct]||null)b=p.formAction;else if(Zc(o)!==null)continue}else b=p.action;typeof b=="function"?n[a+1]=b:(n.splice(a,3),a-=3),w1(n)}}}function C1(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return o=p})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function qc(e){this._internalRoot=e}ir.prototype.render=qc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var n=t.current,a=Ut();h1(n,a,e,t,null,null)},ir.prototype.unmount=qc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;h1(e.current,2,null,e,null,null),Zs(),t[Ga]=null}};function ir(e){this._internalRoot=e}ir.prototype.unstable_scheduleHydration=function(e){if(e){var t=ln();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ha.length&&t!==0&&t<ha[n].priority;n++);ha.splice(n,0,e),n===0&&x1(e)}};var A1=l.version;if(A1!=="19.2.6")throw Error(r(527,A1,"19.2.6"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=v(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Ig={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sr.isDisabled&&sr.supportsFiber)try{Sa=sr.inject(Ig),mt=sr}catch{}}return Ti.createRoot=function(e,t){if(!u(e))throw Error(r(299));var n=!1,a="",o=M0,c=R0,p=O0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=f1(e,1,!1,null,null,n,a,null,o,c,p,C1),e[Ga]=t.current,wc(e),new qc(t)},Ti.hydrateRoot=function(e,t,n){if(!u(e))throw Error(r(299));var a=!1,o="",c=M0,p=R0,b=O0,C=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(C=n.formState)),t=f1(e,1,!0,t,n??null,a,o,C,c,p,b,C1),t.context=p1(null),n=t.current,a=Ut(),a=Cn(a),o=Wn(a),o.callback=null,ea(n,o,a),n=a,t.current.lanes=n,qt(t,n),vn(t),e[Ga]=t.current,wc(e),new ir(t)},Ti.version="19.2.6",Ti}var L1;function i2(){if(L1)return Gc.exports;L1=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),Gc.exports=l2(),Gc.exports}var s2=i2();function fu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ba=fu();function gp(s){Ba=s}const bp=/[&<>"']/,r2=new RegExp(bp.source,"g"),vp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,o2=new RegExp(vp.source,"g"),c2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},U1=s=>c2[s];function Ht(s,l){if(l){if(bp.test(s))return s.replace(r2,U1)}else if(vp.test(s))return s.replace(o2,U1);return s}const u2=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function d2(s){return s.replace(u2,(l,i)=>(i=i.toLowerCase(),i==="colon"?":":i.charAt(0)==="#"?i.charAt(1)==="x"?String.fromCharCode(parseInt(i.substring(2),16)):String.fromCharCode(+i.substring(1)):""))}const f2=/(^|[^\[])\^/g;function ze(s,l){let i=typeof s=="string"?s:s.source;l=l||"";const r={replace:(u,d)=>{let f=typeof d=="string"?d:d.source;return f=f.replace(f2,"$1"),i=i.replace(u,f),r},getRegex:()=>new RegExp(i,l)};return r}function H1(s){try{s=encodeURI(s).replace(/%25/g,"%")}catch{return null}return s}const Ri={exec:()=>null};function Z1(s,l){const i=s.replace(/\|/g,(d,f,h)=>{let g=!1,v=f;for(;--v>=0&&h[v]==="\\";)g=!g;return g?"|":" |"}),r=i.split(/ \|/);let u=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),l)if(r.length>l)r.splice(l);else for(;r.length<l;)r.push("");for(;u<r.length;u++)r[u]=r[u].trim().replace(/\\\|/g,"|");return r}function Di(s,l,i){const r=s.length;if(r===0)return"";let u=0;for(;u<r&&s.charAt(r-u-1)===l;)u++;return s.slice(0,r-u)}function p2(s,l){if(s.indexOf(l[1])===-1)return-1;let i=0;for(let r=0;r<s.length;r++)if(s[r]==="\\")r++;else if(s[r]===l[0])i++;else if(s[r]===l[1]&&(i--,i<0))return r;return-1}function B1(s,l,i,r){const u=l.href,d=l.title?Ht(l.title):null,f=s[1].replace(/\\([\[\]])/g,"$1");if(s[0].charAt(0)!=="!"){r.state.inLink=!0;const h={type:"link",raw:i,href:u,title:d,text:f,tokens:r.inlineTokens(f)};return r.state.inLink=!1,h}return{type:"image",raw:i,href:u,title:d,text:Ht(f)}}function h2(s,l){const i=s.match(/^(\s+)(?:```)/);if(i===null)return l;const r=i[1];return l.split(`
`).map(u=>{const d=u.match(/^\s+/);if(d===null)return u;const[f]=d;return f.length>=r.length?u.slice(r.length):u}).join(`
`)}class pr{constructor(l){Le(this,"options");Le(this,"rules");Le(this,"lexer");this.options=l||Ba}space(l){const i=this.rules.block.newline.exec(l);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(l){const i=this.rules.block.code.exec(l);if(i){const r=i[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Di(r,`
`)}}}fences(l){const i=this.rules.block.fences.exec(l);if(i){const r=i[0],u=h2(r,i[3]||"");return{type:"code",raw:r,lang:i[2]?i[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):i[2],text:u}}}heading(l){const i=this.rules.block.heading.exec(l);if(i){let r=i[2].trim();if(/#$/.test(r)){const u=Di(r,"#");(this.options.pedantic||!u||/ $/.test(u))&&(r=u.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(l){const i=this.rules.block.hr.exec(l);if(i)return{type:"hr",raw:Di(i[0],`
`)}}blockquote(l){const i=this.rules.block.blockquote.exec(l);if(i){let r=Di(i[0],`
`).split(`
`),u="",d="";const f=[];for(;r.length>0;){let h=!1;const g=[];let v;for(v=0;v<r.length;v++)if(/^ {0,3}>/.test(r[v]))g.push(r[v]),h=!0;else if(!h)g.push(r[v]);else break;r=r.slice(v);const x=g.join(`
`),S=x.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");u=u?`${u}
${x}`:x,d=d?`${d}
${S}`:S;const T=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(S,f,!0),this.lexer.state.top=T,r.length===0)break;const N=f[f.length-1];if((N==null?void 0:N.type)==="code")break;if((N==null?void 0:N.type)==="blockquote"){const _=N,z=_.raw+`
`+r.join(`
`),Z=this.blockquote(z);f[f.length-1]=Z,u=u.substring(0,u.length-_.raw.length)+Z.raw,d=d.substring(0,d.length-_.text.length)+Z.text;break}else if((N==null?void 0:N.type)==="list"){const _=N,z=_.raw+`
`+r.join(`
`),Z=this.list(z);f[f.length-1]=Z,u=u.substring(0,u.length-N.raw.length)+Z.raw,d=d.substring(0,d.length-_.raw.length)+Z.raw,r=z.substring(f[f.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:u,tokens:f,text:d}}}list(l){let i=this.rules.block.list.exec(l);if(i){let r=i[1].trim();const u=r.length>1,d={type:"list",raw:"",ordered:u,start:u?+r.slice(0,-1):"",loose:!1,items:[]};r=u?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=u?r:"[*+-]");const f=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let h=!1;for(;l;){let g=!1,v="",x="";if(!(i=f.exec(l))||this.rules.block.hr.test(l))break;v=i[0],l=l.substring(v.length);let S=i[2].split(`
`,1)[0].replace(/^\t+/,q=>" ".repeat(3*q.length)),T=l.split(`
`,1)[0],N=!S.trim(),_=0;if(this.options.pedantic?(_=2,x=S.trimStart()):N?_=i[1].length+1:(_=i[2].search(/[^ ]/),_=_>4?1:_,x=S.slice(_),_+=i[1].length),N&&/^ *$/.test(T)&&(v+=T+`
`,l=l.substring(T.length+1),g=!0),!g){const q=new RegExp(`^ {0,${Math.min(3,_-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Y=new RegExp(`^ {0,${Math.min(3,_-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),I=new RegExp(`^ {0,${Math.min(3,_-1)}}(?:\`\`\`|~~~)`),Q=new RegExp(`^ {0,${Math.min(3,_-1)}}#`);for(;l;){const F=l.split(`
`,1)[0];if(T=F,this.options.pedantic&&(T=T.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),I.test(T)||Q.test(T)||q.test(T)||Y.test(l))break;if(T.search(/[^ ]/)>=_||!T.trim())x+=`
`+T.slice(_);else{if(N||S.search(/[^ ]/)>=4||I.test(S)||Q.test(S)||Y.test(S))break;x+=`
`+T}!N&&!T.trim()&&(N=!0),v+=F+`
`,l=l.substring(F.length+1),S=T.slice(_)}}d.loose||(h?d.loose=!0:/\n *\n *$/.test(v)&&(h=!0));let z=null,Z;this.options.gfm&&(z=/^\[[ xX]\] /.exec(x),z&&(Z=z[0]!=="[ ] ",x=x.replace(/^\[[ xX]\] +/,""))),d.items.push({type:"list_item",raw:v,task:!!z,checked:Z,loose:!1,text:x,tokens:[]}),d.raw+=v}d.items[d.items.length-1].raw=d.items[d.items.length-1].raw.trimEnd(),d.items[d.items.length-1].text=d.items[d.items.length-1].text.trimEnd(),d.raw=d.raw.trimEnd();for(let g=0;g<d.items.length;g++)if(this.lexer.state.top=!1,d.items[g].tokens=this.lexer.blockTokens(d.items[g].text,[]),!d.loose){const v=d.items[g].tokens.filter(S=>S.type==="space"),x=v.length>0&&v.some(S=>/\n.*\n/.test(S.raw));d.loose=x}if(d.loose)for(let g=0;g<d.items.length;g++)d.items[g].loose=!0;return d}}html(l){const i=this.rules.block.html.exec(l);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(l){const i=this.rules.block.def.exec(l);if(i){const r=i[1].toLowerCase().replace(/\s+/g," "),u=i[2]?i[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",d=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):i[3];return{type:"def",tag:r,raw:i[0],href:u,title:d}}}table(l){const i=this.rules.block.table.exec(l);if(!i||!/[:|]/.test(i[2]))return;const r=Z1(i[1]),u=i[2].replace(/^\||\| *$/g,"").split("|"),d=i[3]&&i[3].trim()?i[3].replace(/\n[ \t]*$/,"").split(`
`):[],f={type:"table",raw:i[0],header:[],align:[],rows:[]};if(r.length===u.length){for(const h of u)/^ *-+: *$/.test(h)?f.align.push("right"):/^ *:-+: *$/.test(h)?f.align.push("center"):/^ *:-+ *$/.test(h)?f.align.push("left"):f.align.push(null);for(let h=0;h<r.length;h++)f.header.push({text:r[h],tokens:this.lexer.inline(r[h]),header:!0,align:f.align[h]});for(const h of d)f.rows.push(Z1(h,f.header.length).map((g,v)=>({text:g,tokens:this.lexer.inline(g),header:!1,align:f.align[v]})));return f}}lheading(l){const i=this.rules.block.lheading.exec(l);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(l){const i=this.rules.block.paragraph.exec(l);if(i){const r=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:r,tokens:this.lexer.inline(r)}}}text(l){const i=this.rules.block.text.exec(l);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(l){const i=this.rules.inline.escape.exec(l);if(i)return{type:"escape",raw:i[0],text:Ht(i[1])}}tag(l){const i=this.rules.inline.tag.exec(l);if(i)return!this.lexer.state.inLink&&/^<a /i.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(l){const i=this.rules.inline.link.exec(l);if(i){const r=i[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const f=Di(r.slice(0,-1),"\\");if((r.length-f.length)%2===0)return}else{const f=p2(i[2],"()");if(f>-1){const g=(i[0].indexOf("!")===0?5:4)+i[1].length+f;i[2]=i[2].substring(0,f),i[0]=i[0].substring(0,g).trim(),i[3]=""}}let u=i[2],d="";if(this.options.pedantic){const f=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u);f&&(u=f[1],d=f[3])}else d=i[3]?i[3].slice(1,-1):"";return u=u.trim(),/^</.test(u)&&(this.options.pedantic&&!/>$/.test(r)?u=u.slice(1):u=u.slice(1,-1)),B1(i,{href:u&&u.replace(this.rules.inline.anyPunctuation,"$1"),title:d&&d.replace(this.rules.inline.anyPunctuation,"$1")},i[0],this.lexer)}}reflink(l,i){let r;if((r=this.rules.inline.reflink.exec(l))||(r=this.rules.inline.nolink.exec(l))){const u=(r[2]||r[1]).replace(/\s+/g," "),d=i[u.toLowerCase()];if(!d){const f=r[0].charAt(0);return{type:"text",raw:f,text:f}}return B1(r,d,r[0],this.lexer)}}emStrong(l,i,r=""){let u=this.rules.inline.emStrongLDelim.exec(l);if(!u||u[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(u[1]||u[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const f=[...u[0]].length-1;let h,g,v=f,x=0;const S=u[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(S.lastIndex=0,i=i.slice(-1*l.length+f);(u=S.exec(i))!=null;){if(h=u[1]||u[2]||u[3]||u[4]||u[5]||u[6],!h)continue;if(g=[...h].length,u[3]||u[4]){v+=g;continue}else if((u[5]||u[6])&&f%3&&!((f+g)%3)){x+=g;continue}if(v-=g,v>0)continue;g=Math.min(g,g+v+x);const T=[...u[0]][0].length,N=l.slice(0,f+u.index+T+g);if(Math.min(f,g)%2){const z=N.slice(1,-1);return{type:"em",raw:N,text:z,tokens:this.lexer.inlineTokens(z)}}const _=N.slice(2,-2);return{type:"strong",raw:N,text:_,tokens:this.lexer.inlineTokens(_)}}}}codespan(l){const i=this.rules.inline.code.exec(l);if(i){let r=i[2].replace(/\n/g," ");const u=/[^ ]/.test(r),d=/^ /.test(r)&&/ $/.test(r);return u&&d&&(r=r.substring(1,r.length-1)),r=Ht(r,!0),{type:"codespan",raw:i[0],text:r}}}br(l){const i=this.rules.inline.br.exec(l);if(i)return{type:"br",raw:i[0]}}del(l){const i=this.rules.inline.del.exec(l);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}}autolink(l){const i=this.rules.inline.autolink.exec(l);if(i){let r,u;return i[2]==="@"?(r=Ht(i[1]),u="mailto:"+r):(r=Ht(i[1]),u=r),{type:"link",raw:i[0],text:r,href:u,tokens:[{type:"text",raw:r,text:r}]}}}url(l){var r;let i;if(i=this.rules.inline.url.exec(l)){let u,d;if(i[2]==="@")u=Ht(i[0]),d="mailto:"+u;else{let f;do f=i[0],i[0]=((r=this.rules.inline._backpedal.exec(i[0]))==null?void 0:r[0])??"";while(f!==i[0]);u=Ht(i[0]),i[1]==="www."?d="http://"+i[0]:d=i[0]}return{type:"link",raw:i[0],text:u,href:d,tokens:[{type:"text",raw:u,text:u}]}}}inlineText(l){const i=this.rules.inline.text.exec(l);if(i){let r;return this.lexer.state.inRawBlock?r=i[0]:r=Ht(i[0]),{type:"text",raw:i[0],text:r}}}}const m2=/^(?: *(?:\n|$))+/,g2=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,b2=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Hi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,v2=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,yp=/(?:[*+-]|\d{1,9}[.)])/,xp=ze(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,yp).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),pu=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,y2=/^[^\n]+/,hu=/(?!\s*\])(?:\\.|[^\[\]\\])+/,x2=ze(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",hu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),S2=ze(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,yp).getRegex(),wr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",mu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,w2=ze("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",mu).replace("tag",wr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Sp=ze(pu).replace("hr",Hi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wr).getRegex(),C2=ze(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Sp).getRegex(),gu={blockquote:C2,code:g2,def:x2,fences:b2,heading:v2,hr:Hi,html:w2,lheading:xp,list:S2,newline:m2,paragraph:Sp,table:Ri,text:y2},q1=ze("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Hi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wr).getRegex(),A2={...gu,table:q1,paragraph:ze(pu).replace("hr",Hi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",q1).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wr).getRegex()},E2={...gu,html:ze(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",mu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ri,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ze(pu).replace("hr",Hi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",xp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},wp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,N2=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Cp=/^( {2,}|\\)\n(?!\s*$)/,T2=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Zi="\\p{P}\\p{S}",D2=ze(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Zi).getRegex(),k2=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,M2=ze(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Zi).getRegex(),R2=ze("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Zi).getRegex(),O2=ze("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Zi).getRegex(),z2=ze(/\\([punct])/,"gu").replace(/punct/g,Zi).getRegex(),j2=ze(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),_2=ze(mu).replace("(?:-->|$)","-->").getRegex(),L2=ze("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",_2).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),hr=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,U2=ze(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",hr).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ap=ze(/^!?\[(label)\]\[(ref)\]/).replace("label",hr).replace("ref",hu).getRegex(),Ep=ze(/^!?\[(ref)\](?:\[\])?/).replace("ref",hu).getRegex(),H2=ze("reflink|nolink(?!\\()","g").replace("reflink",Ap).replace("nolink",Ep).getRegex(),bu={_backpedal:Ri,anyPunctuation:z2,autolink:j2,blockSkip:k2,br:Cp,code:N2,del:Ri,emStrongLDelim:M2,emStrongRDelimAst:R2,emStrongRDelimUnd:O2,escape:wp,link:U2,nolink:Ep,punctuation:D2,reflink:Ap,reflinkSearch:H2,tag:L2,text:T2,url:Ri},Z2={...bu,link:ze(/^!?\[(label)\]\((.*?)\)/).replace("label",hr).getRegex(),reflink:ze(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",hr).getRegex()},nu={...bu,escape:ze(wp).replace("])","~|])").getRegex(),url:ze(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},B2={...nu,br:ze(Cp).replace("{2,}","*").getRegex(),text:ze(nu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},rr={normal:gu,gfm:A2,pedantic:E2},ki={normal:bu,gfm:nu,breaks:B2,pedantic:Z2};class yn{constructor(l){Le(this,"tokens");Le(this,"options");Le(this,"state");Le(this,"tokenizer");Le(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=l||Ba,this.options.tokenizer=this.options.tokenizer||new pr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const i={block:rr.normal,inline:ki.normal};this.options.pedantic?(i.block=rr.pedantic,i.inline=ki.pedantic):this.options.gfm&&(i.block=rr.gfm,this.options.breaks?i.inline=ki.breaks:i.inline=ki.gfm),this.tokenizer.rules=i}static get rules(){return{block:rr,inline:ki}}static lex(l,i){return new yn(i).lex(l)}static lexInline(l,i){return new yn(i).inlineTokens(l)}lex(l){l=l.replace(/\r\n|\r/g,`
`),this.blockTokens(l,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){const r=this.inlineQueue[i];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(l,i=[],r=!1){this.options.pedantic?l=l.replace(/\t/g,"    ").replace(/^ +$/gm,""):l=l.replace(/^( *)(\t+)/gm,(h,g,v)=>g+"    ".repeat(v.length));let u,d,f;for(;l;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(h=>(u=h.call({lexer:this},l,i))?(l=l.substring(u.raw.length),i.push(u),!0):!1))){if(u=this.tokenizer.space(l)){l=l.substring(u.raw.length),u.raw.length===1&&i.length>0?i[i.length-1].raw+=`
`:i.push(u);continue}if(u=this.tokenizer.code(l)){l=l.substring(u.raw.length),d=i[i.length-1],d&&(d.type==="paragraph"||d.type==="text")?(d.raw+=`
`+u.raw,d.text+=`
`+u.text,this.inlineQueue[this.inlineQueue.length-1].src=d.text):i.push(u);continue}if(u=this.tokenizer.fences(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.heading(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.hr(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.blockquote(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.list(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.html(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.def(l)){l=l.substring(u.raw.length),d=i[i.length-1],d&&(d.type==="paragraph"||d.type==="text")?(d.raw+=`
`+u.raw,d.text+=`
`+u.raw,this.inlineQueue[this.inlineQueue.length-1].src=d.text):this.tokens.links[u.tag]||(this.tokens.links[u.tag]={href:u.href,title:u.title});continue}if(u=this.tokenizer.table(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.lheading(l)){l=l.substring(u.raw.length),i.push(u);continue}if(f=l,this.options.extensions&&this.options.extensions.startBlock){let h=1/0;const g=l.slice(1);let v;this.options.extensions.startBlock.forEach(x=>{v=x.call({lexer:this},g),typeof v=="number"&&v>=0&&(h=Math.min(h,v))}),h<1/0&&h>=0&&(f=l.substring(0,h+1))}if(this.state.top&&(u=this.tokenizer.paragraph(f))){d=i[i.length-1],r&&(d==null?void 0:d.type)==="paragraph"?(d.raw+=`
`+u.raw,d.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):i.push(u),r=f.length!==l.length,l=l.substring(u.raw.length);continue}if(u=this.tokenizer.text(l)){l=l.substring(u.raw.length),d=i[i.length-1],d&&d.type==="text"?(d.raw+=`
`+u.raw,d.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):i.push(u);continue}if(l){const h="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return this.state.top=!0,i}inline(l,i=[]){return this.inlineQueue.push({src:l,tokens:i}),i}inlineTokens(l,i=[]){let r,u,d,f=l,h,g,v;if(this.tokens.links){const x=Object.keys(this.tokens.links);if(x.length>0)for(;(h=this.tokenizer.rules.inline.reflinkSearch.exec(f))!=null;)x.includes(h[0].slice(h[0].lastIndexOf("[")+1,-1))&&(f=f.slice(0,h.index)+"["+"a".repeat(h[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(h=this.tokenizer.rules.inline.blockSkip.exec(f))!=null;)f=f.slice(0,h.index)+"["+"a".repeat(h[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(h=this.tokenizer.rules.inline.anyPunctuation.exec(f))!=null;)f=f.slice(0,h.index)+"++"+f.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;l;)if(g||(v=""),g=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(x=>(r=x.call({lexer:this},l,i))?(l=l.substring(r.raw.length),i.push(r),!0):!1))){if(r=this.tokenizer.escape(l)){l=l.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.tag(l)){l=l.substring(r.raw.length),u=i[i.length-1],u&&r.type==="text"&&u.type==="text"?(u.raw+=r.raw,u.text+=r.text):i.push(r);continue}if(r=this.tokenizer.link(l)){l=l.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.reflink(l,this.tokens.links)){l=l.substring(r.raw.length),u=i[i.length-1],u&&r.type==="text"&&u.type==="text"?(u.raw+=r.raw,u.text+=r.text):i.push(r);continue}if(r=this.tokenizer.emStrong(l,f,v)){l=l.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.codespan(l)){l=l.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.br(l)){l=l.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.del(l)){l=l.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.autolink(l)){l=l.substring(r.raw.length),i.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(l))){l=l.substring(r.raw.length),i.push(r);continue}if(d=l,this.options.extensions&&this.options.extensions.startInline){let x=1/0;const S=l.slice(1);let T;this.options.extensions.startInline.forEach(N=>{T=N.call({lexer:this},S),typeof T=="number"&&T>=0&&(x=Math.min(x,T))}),x<1/0&&x>=0&&(d=l.substring(0,x+1))}if(r=this.tokenizer.inlineText(d)){l=l.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(v=r.raw.slice(-1)),g=!0,u=i[i.length-1],u&&u.type==="text"?(u.raw+=r.raw,u.text+=r.text):i.push(r);continue}if(l){const x="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(x);break}else throw new Error(x)}}return i}}class mr{constructor(l){Le(this,"options");Le(this,"parser");this.options=l||Ba}space(l){return""}code({text:l,lang:i,escaped:r}){var f;const u=(f=(i||"").match(/^\S*/))==null?void 0:f[0],d=l.replace(/\n$/,"")+`
`;return u?'<pre><code class="language-'+Ht(u)+'">'+(r?d:Ht(d,!0))+`</code></pre>
`:"<pre><code>"+(r?d:Ht(d,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}heading({tokens:l,depth:i}){return`<h${i}>${this.parser.parseInline(l)}</h${i}>
`}hr(l){return`<hr>
`}list(l){const i=l.ordered,r=l.start;let u="";for(let h=0;h<l.items.length;h++){const g=l.items[h];u+=this.listitem(g)}const d=i?"ol":"ul",f=i&&r!==1?' start="'+r+'"':"";return"<"+d+f+`>
`+u+"</"+d+`>
`}listitem(l){let i="";if(l.task){const r=this.checkbox({checked:!!l.checked});l.loose?l.tokens.length>0&&l.tokens[0].type==="paragraph"?(l.tokens[0].text=r+" "+l.tokens[0].text,l.tokens[0].tokens&&l.tokens[0].tokens.length>0&&l.tokens[0].tokens[0].type==="text"&&(l.tokens[0].tokens[0].text=r+" "+l.tokens[0].tokens[0].text)):l.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):i+=r+" "}return i+=this.parser.parse(l.tokens,!!l.loose),`<li>${i}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let i="",r="";for(let d=0;d<l.header.length;d++)r+=this.tablecell(l.header[d]);i+=this.tablerow({text:r});let u="";for(let d=0;d<l.rows.length;d++){const f=l.rows[d];r="";for(let h=0;h<f.length;h++)r+=this.tablecell(f[h]);u+=this.tablerow({text:r})}return u&&(u=`<tbody>${u}</tbody>`),`<table>
<thead>
`+i+`</thead>
`+u+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){const i=this.parser.parseInline(l.tokens),r=l.header?"th":"td";return(l.align?`<${r} align="${l.align}">`:`<${r}>`)+i+`</${r}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${l}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:i,tokens:r}){const u=this.parser.parseInline(r),d=H1(l);if(d===null)return u;l=d;let f='<a href="'+l+'"';return i&&(f+=' title="'+i+'"'),f+=">"+u+"</a>",f}image({href:l,title:i,text:r}){const u=H1(l);if(u===null)return r;l=u;let d=`<img src="${l}" alt="${r}"`;return i&&(d+=` title="${i}"`),d+=">",d}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):l.text}}class vu{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}}class xn{constructor(l){Le(this,"options");Le(this,"renderer");Le(this,"textRenderer");this.options=l||Ba,this.options.renderer=this.options.renderer||new mr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new vu}static parse(l,i){return new xn(i).parse(l)}static parseInline(l,i){return new xn(i).parseInline(l)}parse(l,i=!0){let r="";for(let u=0;u<l.length;u++){const d=l[u];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]){const h=d,g=this.options.extensions.renderers[h.type].call({parser:this},h);if(g!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type)){r+=g||"";continue}}const f=d;switch(f.type){case"space":{r+=this.renderer.space(f);continue}case"hr":{r+=this.renderer.hr(f);continue}case"heading":{r+=this.renderer.heading(f);continue}case"code":{r+=this.renderer.code(f);continue}case"table":{r+=this.renderer.table(f);continue}case"blockquote":{r+=this.renderer.blockquote(f);continue}case"list":{r+=this.renderer.list(f);continue}case"html":{r+=this.renderer.html(f);continue}case"paragraph":{r+=this.renderer.paragraph(f);continue}case"text":{let h=f,g=this.renderer.text(h);for(;u+1<l.length&&l[u+1].type==="text";)h=l[++u],g+=`
`+this.renderer.text(h);i?r+=this.renderer.paragraph({type:"paragraph",raw:g,text:g,tokens:[{type:"text",raw:g,text:g}]}):r+=g;continue}default:{const h='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(h),"";throw new Error(h)}}}return r}parseInline(l,i){i=i||this.renderer;let r="";for(let u=0;u<l.length;u++){const d=l[u];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]){const h=this.options.extensions.renderers[d.type].call({parser:this},d);if(h!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(d.type)){r+=h||"";continue}}const f=d;switch(f.type){case"escape":{r+=i.text(f);break}case"html":{r+=i.html(f);break}case"link":{r+=i.link(f);break}case"image":{r+=i.image(f);break}case"strong":{r+=i.strong(f);break}case"em":{r+=i.em(f);break}case"codespan":{r+=i.codespan(f);break}case"br":{r+=i.br(f);break}case"del":{r+=i.del(f);break}case"text":{r+=i.text(f);break}default:{const h='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(h),"";throw new Error(h)}}}return r}}class Oi{constructor(l){Le(this,"options");this.options=l||Ba}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}}Le(Oi,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Yn,Np,au,Tp;class q2{constructor(...l){N1(this,Yn);Le(this,"defaults",fu());Le(this,"options",this.setOptions);Le(this,"parse",Ei(this,Yn,au).call(this,yn.lex,xn.parse));Le(this,"parseInline",Ei(this,Yn,au).call(this,yn.lexInline,xn.parseInline));Le(this,"Parser",xn);Le(this,"Renderer",mr);Le(this,"TextRenderer",vu);Le(this,"Lexer",yn);Le(this,"Tokenizer",pr);Le(this,"Hooks",Oi);this.use(...l)}walkTokens(l,i){var u,d;let r=[];for(const f of l)switch(r=r.concat(i.call(this,f)),f.type){case"table":{const h=f;for(const g of h.header)r=r.concat(this.walkTokens(g.tokens,i));for(const g of h.rows)for(const v of g)r=r.concat(this.walkTokens(v.tokens,i));break}case"list":{const h=f;r=r.concat(this.walkTokens(h.items,i));break}default:{const h=f;(d=(u=this.defaults.extensions)==null?void 0:u.childTokens)!=null&&d[h.type]?this.defaults.extensions.childTokens[h.type].forEach(g=>{const v=h[g].flat(1/0);r=r.concat(this.walkTokens(v,i))}):h.tokens&&(r=r.concat(this.walkTokens(h.tokens,i)))}}return r}use(...l){const i=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(r=>{const u={...r};if(u.async=this.defaults.async||u.async||!1,r.extensions&&(r.extensions.forEach(d=>{if(!d.name)throw new Error("extension name required");if("renderer"in d){const f=i.renderers[d.name];f?i.renderers[d.name]=function(...h){let g=d.renderer.apply(this,h);return g===!1&&(g=f.apply(this,h)),g}:i.renderers[d.name]=d.renderer}if("tokenizer"in d){if(!d.level||d.level!=="block"&&d.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const f=i[d.level];f?f.unshift(d.tokenizer):i[d.level]=[d.tokenizer],d.start&&(d.level==="block"?i.startBlock?i.startBlock.push(d.start):i.startBlock=[d.start]:d.level==="inline"&&(i.startInline?i.startInline.push(d.start):i.startInline=[d.start]))}"childTokens"in d&&d.childTokens&&(i.childTokens[d.name]=d.childTokens)}),u.extensions=i),r.renderer){const d=this.defaults.renderer||new mr(this.defaults);for(const f in r.renderer){if(!(f in d))throw new Error(`renderer '${f}' does not exist`);if(["options","parser"].includes(f))continue;const h=f;let g=r.renderer[h];r.useNewRenderer||(g=Ei(this,Yn,Np).call(this,g,h,d));const v=d[h];d[h]=(...x)=>{let S=g.apply(d,x);return S===!1&&(S=v.apply(d,x)),S||""}}u.renderer=d}if(r.tokenizer){const d=this.defaults.tokenizer||new pr(this.defaults);for(const f in r.tokenizer){if(!(f in d))throw new Error(`tokenizer '${f}' does not exist`);if(["options","rules","lexer"].includes(f))continue;const h=f,g=r.tokenizer[h],v=d[h];d[h]=(...x)=>{let S=g.apply(d,x);return S===!1&&(S=v.apply(d,x)),S}}u.tokenizer=d}if(r.hooks){const d=this.defaults.hooks||new Oi;for(const f in r.hooks){if(!(f in d))throw new Error(`hook '${f}' does not exist`);if(f==="options")continue;const h=f,g=r.hooks[h],v=d[h];Oi.passThroughHooks.has(f)?d[h]=x=>{if(this.defaults.async)return Promise.resolve(g.call(d,x)).then(T=>v.call(d,T));const S=g.call(d,x);return v.call(d,S)}:d[h]=(...x)=>{let S=g.apply(d,x);return S===!1&&(S=v.apply(d,x)),S}}u.hooks=d}if(r.walkTokens){const d=this.defaults.walkTokens,f=r.walkTokens;u.walkTokens=function(h){let g=[];return g.push(f.call(this,h)),d&&(g=g.concat(d.call(this,h))),g}}this.defaults={...this.defaults,...u}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,i){return yn.lex(l,i??this.defaults)}parser(l,i){return xn.parse(l,i??this.defaults)}}Yn=new WeakSet,Np=function(l,i,r){switch(i){case"heading":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,r.parser.parseInline(u.tokens),u.depth,d2(r.parser.parseInline(u.tokens,r.parser.textRenderer)))};case"code":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text,u.lang,!!u.escaped)};case"table":return function(u){if(!u.type||u.type!==i)return l.apply(this,arguments);let d="",f="";for(let g=0;g<u.header.length;g++)f+=this.tablecell({text:u.header[g].text,tokens:u.header[g].tokens,header:!0,align:u.align[g]});d+=this.tablerow({text:f});let h="";for(let g=0;g<u.rows.length;g++){const v=u.rows[g];f="";for(let x=0;x<v.length;x++)f+=this.tablecell({text:v[x].text,tokens:v[x].tokens,header:!1,align:u.align[x]});h+=this.tablerow({text:f})}return l.call(this,d,h)};case"blockquote":return function(u){if(!u.type||u.type!==i)return l.apply(this,arguments);const d=this.parser.parse(u.tokens);return l.call(this,d)};case"list":return function(u){if(!u.type||u.type!==i)return l.apply(this,arguments);const d=u.ordered,f=u.start,h=u.loose;let g="";for(let v=0;v<u.items.length;v++){const x=u.items[v],S=x.checked,T=x.task;let N="";if(x.task){const _=this.checkbox({checked:!!S});h?x.tokens.length>0&&x.tokens[0].type==="paragraph"?(x.tokens[0].text=_+" "+x.tokens[0].text,x.tokens[0].tokens&&x.tokens[0].tokens.length>0&&x.tokens[0].tokens[0].type==="text"&&(x.tokens[0].tokens[0].text=_+" "+x.tokens[0].tokens[0].text)):x.tokens.unshift({type:"text",text:_+" "}):N+=_+" "}N+=this.parser.parse(x.tokens,h),g+=this.listitem({type:"list_item",raw:N,text:N,task:T,checked:!!S,loose:h,tokens:x.tokens})}return l.call(this,g,d,f)};case"html":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text,u.block)};case"paragraph":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"escape":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text)};case"link":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.href,u.title,this.parser.parseInline(u.tokens))};case"image":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.href,u.title,u.text)};case"strong":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"em":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"codespan":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text)};case"del":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"text":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text)}}return l},au=function(l,i){return(r,u)=>{const d={...u},f={...this.defaults,...d};this.defaults.async===!0&&d.async===!1&&(f.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),f.async=!0);const h=Ei(this,Yn,Tp).call(this,!!f.silent,!!f.async);if(typeof r>"u"||r===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(f.hooks&&(f.hooks.options=f),f.async)return Promise.resolve(f.hooks?f.hooks.preprocess(r):r).then(g=>l(g,f)).then(g=>f.hooks?f.hooks.processAllTokens(g):g).then(g=>f.walkTokens?Promise.all(this.walkTokens(g,f.walkTokens)).then(()=>g):g).then(g=>i(g,f)).then(g=>f.hooks?f.hooks.postprocess(g):g).catch(h);try{f.hooks&&(r=f.hooks.preprocess(r));let g=l(r,f);f.hooks&&(g=f.hooks.processAllTokens(g)),f.walkTokens&&this.walkTokens(g,f.walkTokens);let v=i(g,f);return f.hooks&&(v=f.hooks.postprocess(v)),v}catch(g){return h(g)}}},Tp=function(l,i){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const u="<p>An error occurred:</p><pre>"+Ht(r.message+"",!0)+"</pre>";return i?Promise.resolve(u):u}if(i)return Promise.reject(r);throw r}};const Za=new q2;function De(s,l){return Za.parse(s,l)}De.options=De.setOptions=function(s){return Za.setOptions(s),De.defaults=Za.defaults,gp(De.defaults),De};De.getDefaults=fu;De.defaults=Ba;De.use=function(...s){return Za.use(...s),De.defaults=Za.defaults,gp(De.defaults),De};De.walkTokens=function(s,l){return Za.walkTokens(s,l)};De.parseInline=Za.parseInline;De.Parser=xn;De.parser=xn.parse;De.Renderer=mr;De.TextRenderer=vu;De.Lexer=yn;De.lexer=yn.lex;De.Tokenizer=pr;De.Hooks=Oi;De.parse=De;De.options;De.setOptions;De.use;De.walkTokens;De.parseInline;xn.parse;yn.lex;const V2=`/* ================================================================
   Ennabl Design System — Colors, Type, Spacing, Radii, Motion
   Extracted from app-frontend/src/core/themes/themeDecisions
   ================================================================ */

@font-face {
  font-family: 'Inter';
  src: url('fonts/Inter-VariableFont_opsz_wght.ttf') format('truetype-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  src: url('fonts/Inter-Italic-VariableFont_opsz_wght.ttf') format('truetype-variations');
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}

:root {
  /* ---------- Core palette (from palette/index.ts) ---------- */
  --en-black: #1E1E1E;
  --en-white: #FFFFFF;

  /* Primary — deep indigo; Ennabl's action color */
  --en-primary-light: #6139F9;
  --en-primary: #0000C5;
  --en-primary-dark: #000093;

  /* Secondary — pale backgrounds used behind action pills */
  --en-secondary-light: #FFFFFF;
  --en-secondary: #F5F8FD;
  --en-secondary-dark: #EEF3FC;

  /* Semantic */
  --en-error-light: #FF8C6F;
  --en-error: #FC5943;
  --en-error-dark: #C22019;

  --en-success-light: #67EBAD;
  --en-success: #3DD598;
  --en-success-dark: #008751;

  --en-warning-light: #FFE751;
  --en-warning: #FFC542;
  --en-warning-dark: #C78600;

  /* Text */
  --en-fg: rgba(30, 30, 30, 0.87);
  --en-fg-secondary: rgba(130, 135, 176, 0.8);
  --en-fg-disabled: rgba(30, 30, 30, 0.38);

  /* Icon */
  --en-icon: rgb(59, 59, 59);
  --en-icon-secondary: #9B9FC0;
  --en-icon-disabled: rgb(169, 169, 169);

  /* Sidebar */
  --en-sidebar: #71748C;

  /* Backgrounds — three tiered neutrals */
  --en-bg: hsla(0, 0%, 100%, 1);            /* white surface */
  --en-bg-grey: hsla(218, 67%, 98%, 1);     /* canvas */
  --en-bg-dark-grey: hsla(218, 61%, 94%, 1); /* subtle fill / chip */
  --en-bg-black: hsla(186, 5%, 54%, 1);     /* Unknown.50 */

  /* Divider — faint blue-tinted neutral */
  --en-divider: hsla(217, 68%, 94%, 1);

  /* Logo */
  --en-logo-primary: #1B2337;   /* deep navy */
  --en-logo-accent: #FA5F0C;    /* ennabl orange — used in the mark only */

  /* Action states */
  --en-action-hover: rgba(0, 0, 197, 0.04);
  --en-outlined-hover: hsla(240, 100%, 95%, 1);
  --en-heading: hsla(227, 26%, 42%, 1);

  /* ---------- Global tokens (colorVariables.Global) ---------- */
  --en-bg-hover: hsla(226, 25%, 96%, 1);
  --en-bg-active: hsla(207, 100%, 96%, 1);
  --en-bg-empty: hsla(206, 25%, 92%, 1);
  --en-bg-primary: hsla(206, 100%, 50%, 1);    /* command blue — used as action highlight */
  --en-bg-primary-hover: hsla(206, 100%, 40%, 1);
  --en-bg-primary-active: hsla(206, 100%, 28%, 1);
  --en-border: hsla(228, 80%, 90%, 1);
  --en-border-danger: hsla(360, 96%, 66%, 1);
  --en-text-secondary: hsla(206, 100%, 50%, 1);
  --en-text-tertiary: hsla(206, 100%, 28%, 1);
  --en-text-success: hsla(165, 65%, 50%, 1);
  --en-text-warning: hsla(360, 96%, 66%, 1);

  /* ---------- Products ---------- */
  --en-product-commercial: hsla(196, 100%, 34%, 1);
  --en-product-personal: hsla(196, 95%, 64%, 1);
  --en-product-benefits: hsla(196, 95%, 22%, 1);

  /* ---------- Data types (50 = base) ---------- */
  --en-data-accounts: hsla(255, 72%, 54%, 1);
  --en-data-account-managers: hsla(313, 73%, 54%, 1);
  --en-data-benefits: hsla(288, 100%, 54%, 1);
  --en-data-book: hsla(209, 100%, 54%, 1);
  --en-data-carriers: hsla(47, 98%, 54%, 1);
  --en-data-clients: hsla(189, 100%, 54%, 1);
  --en-data-commercial: hsla(324, 100%, 54%, 1);
  --en-data-industries: hsla(340, 95%, 54%, 1);
  --en-data-intermediaries: hsla(25, 97%, 54%, 1);
  --en-data-personal: hsla(260, 73%, 54%, 1);
  --en-data-policies: hsla(176, 73%, 54%, 1);
  --en-data-premium: hsla(98, 32%, 54%, 1);
  --en-data-producers: hsla(254, 52%, 54%, 1);
  --en-data-revenue: hsla(156, 61%, 54%, 1);
  --en-data-unknown: hsla(186, 5%, 54%, 1);

  /* ---------- Graph ramps (from colorVariables.Graph) ---------- */
  --en-graph-client-10: hsla(206, 100%, 96%, 1);
  --en-graph-client-100: hsla(206, 100%, 72%, 1);
  --en-graph-client-600: hsla(206, 100%, 50%, 1);
  --en-graph-client-1200: hsla(206, 100%, 28%, 1);
  --en-graph-carrier-600: hsla(45, 86%, 62%, 1);
  --en-graph-industry-600: hsla(21, 96%, 51%, 1);
  --en-graph-producer-600: hsla(180, 92%, 34%, 1);
  --en-graph-revenue-600: hsla(165, 65%, 50%, 1);

  /* ---------- Type ---------- */
  --en-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --en-font-mono: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;

  /* base multiplier — spacing(N) = N * 4px */
  --en-space: 4px;

  /* Radii (from shape/index.ts) */
  --en-radius-sm: 2px;
  --en-radius: 4px;
  --en-radius-regular: 8px;   /* button / input */
  --en-radius-medium: 12px;
  --en-radius-large: 16px;    /* paper */
  --en-radius-xl: 24px;

  /* Container widths */
  --en-container-lg: 1200px;
  --en-container-sm: 864px;

  /* Elevation — Ennabl uses almost no shadow; elevation=0 papers dominate.
     These are the practical shadows present on menus/tooltips. */
  --en-shadow-none: none;
  --en-shadow-menu: 0 4px 12px rgba(30, 30, 30, 0.08), 0 0 1px rgba(30, 30, 30, 0.12);
  --en-shadow-tooltip: 0 2px 8px rgba(30, 30, 30, 0.16);
  --en-shadow-card-hover: 0 1px 2px rgba(0, 0, 197, 0.06);

  /* Motion — MUI defaults; transitions are subtle */
  --en-duration-shortest: 150ms;
  --en-duration-short: 200ms;
  --en-easing: cubic-bezier(0.4, 0, 0.2, 1);
}

/* ================================================================
   Typography scale — mirrors themeDecisions/typography/index.ts
   All values in px; line-height is the computed ratio × size.
   ================================================================ */

html, body {
  font-family: var(--en-font-sans);
  color: var(--en-fg);
  background: var(--en-bg-grey);
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.en-h1 { font: 400 48px/52px var(--en-font-sans); }
.en-h2 { font: 400 34px/40px var(--en-font-sans); letter-spacing: 0.25px; }
.en-h3 { font: 700 24px/32px var(--en-font-sans); letter-spacing: 0.25px; }
.en-h4 { font: 700 20px/28px var(--en-font-sans); letter-spacing: 0.15px; }
.en-h5 { font: 700 14px/16px var(--en-font-sans); letter-spacing: 0.15px; }

.en-body1       { font: 400 16px/24px var(--en-font-sans); letter-spacing: 0.15px; }
.en-body1-bold  { font: 700 16px/24px var(--en-font-sans); letter-spacing: 0.15px; }
.en-body2       { font: 400 14px/20px var(--en-font-sans); letter-spacing: 0.17px; }
.en-body2-bold  { font: 700 14px/20px var(--en-font-sans); letter-spacing: 0.17px; }
.en-body3       { font: 400 12px/16px var(--en-font-sans); letter-spacing: 0.17px; }
.en-body3-bold  { font: 700 12px/16px var(--en-font-sans); letter-spacing: 0.17px; }

.en-subtitle1   { font: 400 16px/24px var(--en-font-sans); letter-spacing: 0.15px; }
.en-subtitle2   { font: 500 14px/16px var(--en-font-sans); letter-spacing: 0.1px; }
.en-subtitle3   { font: 500 12px/16px var(--en-font-sans); letter-spacing: 0.1px; }

.en-caption        { font: 400 12px/16px var(--en-font-sans); letter-spacing: 0.4px; }
.en-caption-bold   { font: 700 12px/16px var(--en-font-sans); letter-spacing: 0.4px; }

.en-overline       { font: 400 12px/20px var(--en-font-sans); letter-spacing: 1px; text-transform: uppercase; }
.en-overline-bold  { font: 700 12px/20px var(--en-font-sans); letter-spacing: 1px; text-transform: uppercase; }

.en-code { font: 400 12px/16px var(--en-font-mono); letter-spacing: 0.17px; }

.en-btn-large   { font: 400 16px/24px var(--en-font-sans); letter-spacing: 0.15px; text-transform: none; }
.en-btn-medium  { font: 400 14px/20px var(--en-font-sans); letter-spacing: 0.15px; text-transform: none; }
.en-btn-small   { font: 400 12px/16px var(--en-font-sans); letter-spacing: 0.15px; text-transform: none; }

.en-tab-large   { font: 600 16px/20px var(--en-font-sans); letter-spacing: 0.15px; text-transform: none; }
.en-tab-medium  { font: 600 14px/16px var(--en-font-sans); letter-spacing: 0.15px; text-transform: none; }
.en-tab-small   { font: 600 12px/16px var(--en-font-sans); letter-spacing: 0.15px; text-transform: none; }

.en-table-header { font: 500 14px/24px var(--en-font-sans); letter-spacing: 0.1px; }
.en-table-text   { font: 400 14px/24px var(--en-font-sans); letter-spacing: 0.15px; }

/* Semantic element defaults (if you want base tags styled) */
h1 { font: 400 48px/52px var(--en-font-sans); margin: 0; }
h2 { font: 400 34px/40px var(--en-font-sans); letter-spacing: 0.25px; margin: 0; }
h3 { font: 700 24px/32px var(--en-font-sans); letter-spacing: 0.25px; margin: 0; }
h4 { font: 700 20px/28px var(--en-font-sans); letter-spacing: 0.15px; margin: 0; }
h5 { font: 700 14px/16px var(--en-font-sans); letter-spacing: 0.15px; margin: 0; }
p  { font: 400 14px/20px var(--en-font-sans); letter-spacing: 0.17px; margin: 0; }
code { font-family: var(--en-font-mono); font-size: 0.92em; }
`,Y2=`/* ============================================================
   Step 3 Templates — prototype styles
   ============================================================ */

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  background: var(--en-bg-grey);
  min-height: 100vh;
  padding: 56px 40px 96px;
}
.stage {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

button { font-family: inherit; cursor: pointer; }
input, textarea { font-family: inherit; }

/* ------------------------------------------------------------
   Button extras (used by Button shared component)
   ------------------------------------------------------------ */
.btn:disabled, .btn--loading { opacity: 0.55; cursor: not-allowed; pointer-events: none; }
.btn-sm { font-size: 12px; padding: 4px 10px; }
.btn-link {
  background: none; border: none; padding: 0;
  color: var(--en-primary); cursor: pointer;
  font: 400 14px/20px var(--en-font-sans);
  text-decoration: underline;
  transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-link:hover { color: var(--en-primary-dark); }
.btn-link:disabled { color: var(--en-fg-disabled); cursor: not-allowed; }
.btn-spinner {
  width: 12px;
  height: 12px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: en-spin 600ms linear infinite;
  flex-shrink: 0;
}
@keyframes en-spin { to { transform: rotate(360deg); } }

/* ------------------------------------------------------------
   Input extras (used by Input / FormField shared components)
   ------------------------------------------------------------ */
.input--error { border-color: var(--en-error); }
.input--error:focus { border-color: var(--en-error); box-shadow: 0 0 0 3px rgba(212, 52, 74, 0.12); }
.form-hint  { font: 400 12px/16px var(--en-font-sans); color: var(--en-fg-secondary); }
.form-error { font: 400 12px/16px var(--en-font-sans); color: var(--en-error); }

/* ------------------------------------------------------------
   Table extras (used by Table shared component)
   ------------------------------------------------------------ */
.table-compact tbody td { padding: 10px 16px; }
.table-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 48px 24px;
  font: 400 14px/20px var(--en-font-sans);
  color: var(--en-fg-secondary);
}

/* ------------------------------------------------------------
   Badge (used by Badge shared component)
   ------------------------------------------------------------ */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  font: 600 11px/16px var(--en-font-sans);
  letter-spacing: 0.4px;
  white-space: nowrap;
}
.badge-default { background: var(--en-bg-dark-grey); color: var(--en-fg-secondary); }
.badge-primary { background: var(--en-action-hover); color: var(--en-primary); }
.badge-success { background: rgba(61, 213, 152, 0.12); color: #1a7a4a; }
.badge-warning { background: rgba(255, 189, 0, 0.12); color: var(--en-warning-dark); }
.badge-error   { background: rgba(212, 52, 74, 0.08); color: var(--en-error-dark); }

/* ------------------------------------------------------------
   Active step card — matches the screenshot's blue outline
   ------------------------------------------------------------ */
.step-card {
  background: var(--en-bg);
  border-radius: 16px;
  border: 1px solid var(--en-primary);
  padding: 28px 32px 32px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.step-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 4px;
}
.step-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}
.step-check {
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: var(--en-success);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}
.step-title {
  font: 700 18px/26px var(--en-font-sans);
  letter-spacing: 0.15px;
  color: var(--en-fg);
}
.btn-hide {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--en-bg);
  border: 1px solid var(--en-border);
  border-radius: 8px;
  padding: 6px 12px;
  font: 500 13px/20px var(--en-font-sans);
  color: var(--en-fg);
}
.btn-hide:hover { background: var(--en-bg-hover); }

/* ------------------------------------------------------------
   Template bar
   ------------------------------------------------------------ */
.tpl-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: var(--en-secondary);
  border: 1px solid var(--en-border);
  border-radius: 12px;
  margin: 18px 0 24px;
  position: relative;
}
.tpl-bar.dirty {
  background: hsla(45, 100%, 96%, 1);
  border-color: hsla(45, 86%, 78%, 1);
}
.tpl-bar-label {
  font: 500 12px/16px var(--en-font-sans);
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: var(--en-fg-secondary);
  flex-shrink: 0;
}

/* picker trigger */
.tpl-trigger {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--en-bg);
  border: 1px solid var(--en-border);
  border-radius: 8px;
  padding: 7px 10px 7px 12px;
  font: 500 14px/20px var(--en-font-sans);
  color: var(--en-fg);
  min-width: 280px;
  justify-content: space-between;
}
.tpl-trigger:hover { border-color: var(--en-primary); }
.tpl-trigger[aria-expanded="true"] {
  border-color: var(--en-primary);
  box-shadow: 0 0 0 3px var(--en-action-hover);
}
.tpl-trigger-left {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.tpl-trigger-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 240px;
}
.star {
  color: var(--en-primary);
  display: inline-flex;
}

/* status text on right */
.tpl-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font: 400 13px/20px var(--en-font-sans);
  color: var(--en-fg-secondary);
  margin-left: 6px;
}
.tpl-status .dot {
  width: 6px; height: 6px; border-radius: 999px;
  background: var(--en-success);
}
.tpl-status.dirty .dot { background: var(--en-warning-dark); }

.tpl-bar-actions {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn {
  font: 500 13px/20px var(--en-font-sans);
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--en-fg);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}
.btn-primary {
  background: var(--en-primary);
  color: white;
}
.btn-primary:hover { background: var(--en-primary-dark); }
.btn-secondary {
  background: var(--en-bg);
  border-color: var(--en-border);
}
.btn-secondary:hover { background: var(--en-bg-hover); }
.btn-text {
  color: var(--en-primary);
}
.btn-text:hover { background: var(--en-action-hover); }
.btn-link {
  background: transparent;
  border: 0;
  color: var(--en-primary);
  padding: 0;
  font: 500 14px/20px var(--en-font-sans);
}
.btn-link:hover { text-decoration: underline; }
.btn-danger {
  color: var(--en-error-dark);
}
.btn-danger:hover { background: hsla(360, 96%, 96%, 1); }

.btn-icon {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  color: var(--en-icon);
}
.btn-icon:hover { background: var(--en-bg-hover); }

/* ------------------------------------------------------------
   Dropdown menu (template picker)
   ------------------------------------------------------------ */
.menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 96px; /* under the trigger */
  width: 420px;
  background: var(--en-bg);
  border-radius: 12px;
  box-shadow: var(--en-shadow-menu);
  border: 1px solid var(--en-divider);
  z-index: 50;
  overflow: hidden;
  animation: pop 120ms var(--en-easing);
}
@keyframes pop {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}
.menu-search {
  position: relative;
  padding: 10px 12px;
  border-bottom: 1px solid var(--en-divider);
}
.menu-search input {
  width: 100%;
  border: 1px solid var(--en-border);
  background: var(--en-bg-grey);
  border-radius: 8px;
  padding: 7px 10px 7px 32px;
  font: 400 13px/20px var(--en-font-sans);
  color: var(--en-fg);
  outline: none;
}
.menu-search input:focus { border-color: var(--en-primary); background: var(--en-bg); }
.menu-search svg { position: absolute; left: 22px; top: 18px; color: var(--en-icon-secondary); }

.menu-list {
  max-height: 360px;
  overflow-y: auto;
  padding: 6px 0;
}
.menu-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 12px;
  cursor: pointer;
}
.menu-item:hover { background: rgba(0, 0, 197, 0.04); }
.menu-item.active { background: rgba(0, 0, 197, 0.04); }
.menu-item-pin {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-top: 0;
  padding: 0;
  background: transparent;
  border: 0;
  border-radius: 4px;
  color: var(--en-icon-secondary);
  opacity: 0.35;
  transition: opacity 120ms, color 120ms, background 120ms;
}
.menu-item:hover .menu-item-pin { opacity: 1; }
.menu-item-pin:hover { background: var(--en-bg-hover); color: var(--en-fg); }
.menu-item-pin.is-default {
  opacity: 1;
  color: var(--en-primary);
}
.menu-item-body { flex: 1; min-width: 0; }
.menu-item-row1 {
  display: flex;
  align-items: center;
  gap: 6px;
  font: 500 14px/20px var(--en-font-sans);
  color: var(--en-fg);
  min-width: 0;
}
.menu-item-name {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.menu-item-desc {
  font: 400 12px/16px var(--en-font-sans);
  color: var(--en-fg-secondary);
  margin-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.menu-item-meta {
  font: 400 11px/14px var(--en-font-sans);
  color: var(--en-fg-secondary);
  margin-top: 4px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
.menu-item-meta > span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.menu-item-meta .sep {
  width: 3px; height: 3px; border-radius: 999px; background: var(--en-icon-secondary);
}
.menu-item-actions {
  display: flex;
  align-items: center;
  gap: 2px;
  opacity: 0;
  transition: opacity 120ms;
}
.menu-item:hover .menu-item-actions { opacity: 1; }

.menu-footer {
  border-top: 1px solid var(--en-divider);
  padding: 6px;
  display: flex;
  flex-direction: column;
}
.menu-footer button {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 10px;
  border-radius: 6px;
  background: transparent;
  border: 0;
  font: 500 13px/20px var(--en-font-sans);
  color: var(--en-fg);
  text-align: left;
}
.menu-footer button:hover { background: var(--en-bg-hover); }
.menu-footer button.primary-action { color: var(--en-primary); }

.menu-empty {
  padding: 32px 12px;
  text-align: center;
  font: 400 13px/20px var(--en-font-sans);
  color: var(--en-fg-secondary);
}

/* small badge inside dropdown for default star */
.tag-default {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 1px 6px;
  background: hsla(45, 100%, 92%, 1);
  color: hsla(35, 100%, 30%, 1);
  border-radius: 999px;
  font: 600 10px/14px var(--en-font-sans);
  letter-spacing: 0.4px;
  text-transform: uppercase;
}
.tag-shared {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 1px 6px;
  background: var(--en-bg-dark-grey);
  color: var(--en-fg-secondary);
  border-radius: 999px;
  font: 600 10px/14px var(--en-font-sans);
  letter-spacing: 0.4px;
  text-transform: uppercase;
}

/* ------------------------------------------------------------
   Step 3 body — Producer Team + Additional Information
   ------------------------------------------------------------ */
/* ------------------------------------------------------------
   Step 3 body — Producer Team + Additional Information
   ------------------------------------------------------------ */
.s3-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
}
.s3-section + .s3-section {
  margin-top: 4px;
}
.s3-section-head {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 0;
  padding: 6px 0;
  cursor: pointer;
  color: var(--en-fg);
  font: 600 15px/22px var(--en-font-sans);
}
.s3-section-head:hover { color: var(--en-primary); }
.s3-section-head--row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  cursor: default;
}
.s3-section-head--row:hover { color: inherit; }
.s3-section-toggle {
  flex: 1;
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 0;
  padding: 6px 0;
  cursor: pointer;
  color: var(--en-fg);
  font: 600 15px/22px var(--en-font-sans);
  text-align: left;
}
.s3-section-toggle:hover { color: var(--en-primary); }
.s3-section-toggle:hover .s3-chevron { color: var(--en-primary); }
.s3-section-title-input {
  flex: 1;
  min-width: 0;
  font: 600 15px/22px var(--en-font-sans);
  color: var(--en-fg);
  background: var(--en-bg);
  border: 1px solid var(--en-primary);
  border-radius: 6px;
  padding: 2px 8px;
  outline: none;
}
.s3-section-menu {
  position: relative;
  display: inline-flex;
}
.s3-section-menu .row-menu {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: var(--en-bg);
  border: 1px solid var(--en-divider);
  border-radius: 8px;
  box-shadow: var(--en-shadow-popover, 0 8px 24px rgba(20, 25, 45, 0.12));
  padding: 6px;
  z-index: 30;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.s3-section-menu .row-menu button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: 0;
  padding: 8px 10px;
  border-radius: 6px;
  color: var(--en-fg);
  font: 400 14px/20px var(--en-font-sans);
  text-align: left;
  cursor: pointer;
}
.s3-section-menu .row-menu button:hover { background: rgba(0, 0, 197, 0.04); }
.s3-section-menu .row-menu button.danger { color: #d4344a; }
.s3-section-menu .row-menu button.danger:hover { background: rgba(212, 52, 74, 0.06); }

.s3-table-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
}
.s3-empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  border: 1px dashed var(--en-divider);
  border-radius: 12px;
  background: var(--en-bg-grey);
}
.cell-input {
  width: 100%;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 6px 8px;
  font: 400 14px/20px var(--en-font-sans);
  color: var(--en-fg);
  outline: none;
  transition: border-color 120ms, background 120ms;
}
.cell-input::placeholder { color: var(--en-fg-secondary); }
.cell-input:hover { border-color: var(--en-divider); }
.cell-input:focus { border-color: var(--en-primary); background: var(--en-bg); }
.row-editing td { padding: 8px 12px; }
.add-producer--alt { margin-left: 0; }
.s3-chevron {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--en-icon-secondary);
  transition: transform 160ms var(--en-easing), color 120ms;
  transform: rotate(-90deg);
}
.s3-chevron.open { transform: rotate(0deg); }
.s3-section-head:hover .s3-chevron { color: var(--en-primary); }
.s3-section-title { letter-spacing: 0.1px; }
.s3-section-body { padding: 8px 0 16px; }

.section-label {
  font: 500 14px/20px var(--en-font-sans);
  color: var(--en-fg);
  margin: 8px 0 8px;
}
.section-label.major { font-weight: 600; margin-top: 24px; }

.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid var(--en-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--en-bg);
}
.table thead th {
  background: var(--en-bg-grey);
  border-bottom: 1px solid var(--en-divider);
  text-align: left;
  font: 500 13px/20px var(--en-font-sans);
  letter-spacing: 0.1px;
  color: var(--en-fg);
  padding: 12px 16px;
  position: relative;
  user-select: none;
  white-space: nowrap;
}
.table thead th .th-inner {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.table thead th .sort {
  color: var(--en-icon-secondary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  transition: background 120ms;
}
.table thead th .th-inner.sortable {
  cursor: pointer;
  user-select: none;
}
.table thead th .th-inner.sortable:hover .sort {
  background: rgba(0, 0, 197, 0.04);
}
.table tbody td {
  padding: 16px;
  border-bottom: 1px solid var(--en-divider);
  font: 400 14px/20px var(--en-font-sans);
  color: var(--en-fg);
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 0;
}
.table tbody tr:last-child td { border-bottom: 0; }
.table tbody tr:hover td { background: rgba(0, 0, 197, 0.04); }

/* per-column widths */
.col-first   { width: 12%; }
.col-last    { width: 12%; }
.col-email   { width: 22%; }
.col-bio     { width: 30%; }
.col-phone   { width: 16%; }
.col-actions { width: 88px; text-align: right; }
.cell-actions {
  display: inline-flex;
  gap: 4px;
  justify-content: flex-end;
  width: 100%;
}
.muted { color: var(--en-fg-secondary); }

.add-producer {
  margin-top: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 0;
  color: var(--en-primary);
  font: 500 14px/20px var(--en-font-sans);
  padding: 6px 0;
}
.add-producer:hover { text-decoration: underline; }

/* logo card */
.logo-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 14px;
  border: 1px solid var(--en-divider);
  border-radius: 10px;
  background: var(--en-bg);
  max-width: 520px;
}
.logo-card .logo-thumb {
  flex: 0 0 auto;
  width: 96px;
  height: 56px;
  background: var(--en-bg-grey);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}
.logo-meta { flex: 1; min-width: 0; }
.logo-filename {
  font: 500 14px/20px var(--en-font-sans);
  color: var(--en-fg);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.logo-hint {
  font: 400 12px/16px var(--en-font-sans);
  color: var(--en-fg-secondary);
  margin-top: 2px;
}
.logo-remove { flex: 0 0 auto; color: var(--en-icon-secondary); }
.logo-remove:hover { color: var(--en-danger, #d4344a); background: rgba(0, 0, 197, 0.04); }

.logo-dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 28px 24px;
  border: 1px dashed var(--en-divider);
  border-radius: 12px;
  background: var(--en-bg-grey);
  text-align: center;
}
.logo-dropzone-title {
  font: 400 14px/20px var(--en-font-sans);
  color: var(--en-fg);
}
.logo-upload-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 0;
  padding: 4px 8px;
  border-radius: 6px;
  color: var(--en-primary);
  font: 500 14px/20px var(--en-font-sans);
}
.logo-upload-btn:hover { background: rgba(0, 0, 197, 0.04); }
.logo-dropzone-hint {
  font: 400 13px/18px var(--en-font-sans);
  color: var(--en-fg-secondary);
}

/* legacy agency layout (kept in case referenced) */
.agency-section { margin-top: 24px; }
.agency-logo-wrap {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.logo-thumb {
  width: 140px;
  height: 72px;
  background: var(--en-bg);
  border: 1px dashed var(--en-border);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}
.logo-thumb img { max-width: 100%; max-height: 100%; }
.logo-file-row {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font: 400 13px/20px var(--en-font-sans);
  color: var(--en-primary);
}

.field {
  margin-top: 12px;
  background: var(--en-bg-grey);
  border: 1px solid var(--en-divider);
  border-radius: 8px;
  padding: 10px 14px 12px;
}
.field-label {
  font: 500 12px/16px var(--en-font-sans);
  letter-spacing: 0.4px;
  color: var(--en-primary);
}
.field-value {
  font: 400 14px/22px var(--en-font-sans);
  color: var(--en-fg);
  margin-top: 4px;
}

/* ------------------------------------------------------------
   Dialog & modal
   ------------------------------------------------------------ */
.scrim {
  position: fixed;
  inset: 0;
  background: rgba(20, 25, 45, 0.32);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: fade 140ms var(--en-easing);
}
@keyframes fade { from { opacity: 0; } to { opacity: 1; } }

.dialog {
  background: var(--en-bg);
  border-radius: 16px;
  box-shadow: 0 24px 64px rgba(20, 25, 45, 0.24);
  width: 100%;
  max-width: 480px;
  overflow: hidden;
  animation: dialog-in 160ms var(--en-easing);
}
@keyframes dialog-in {
  from { opacity: 0; transform: translateY(8px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.dialog.lg { max-width: 880px; }

.dialog-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 14px;
  border-bottom: 1px solid var(--en-divider);
}
.dialog-title {
  font: 700 18px/24px var(--en-font-sans);
  letter-spacing: 0.15px;
  color: var(--en-fg);
}
.dialog-sub {
  font: 400 13px/18px var(--en-font-sans);
  color: var(--en-fg-secondary);
  margin-top: 2px;
}
.dialog-body {
  padding: 18px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.dialog-foot {
  padding: 14px 24px 18px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  border-top: 1px solid var(--en-divider);
  background: var(--en-bg-grey);
}

.form-row { display: flex; flex-direction: column; gap: 6px; }
.form-row label {
  font: 500 13px/18px var(--en-font-sans);
  color: var(--en-fg);
}
.form-row .help {
  font: 400 12px/16px var(--en-font-sans);
  color: var(--en-fg-secondary);
}
.input, .textarea {
  border: 1px solid var(--en-border);
  border-radius: 8px;
  padding: 9px 12px;
  font: 400 14px/20px var(--en-font-sans);
  color: var(--en-fg);
  background: var(--en-bg);
  outline: none;
  width: 100%;
}
.input:focus, .textarea:focus {
  border-color: var(--en-primary);
  box-shadow: 0 0 0 3px var(--en-action-hover);
}
.textarea { resize: vertical; min-height: 72px; }

.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font: 400 13px/18px var(--en-font-sans);
  color: var(--en-fg);
  cursor: pointer;
}
.checkbox input {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1.5px solid var(--en-border);
  accent-color: var(--en-primary);
}

.toggle {
  position: relative;
  width: 36px;
  height: 20px;
  border-radius: 999px;
  background: var(--en-bg-dark-grey);
  cursor: pointer;
  flex-shrink: 0;
  transition: background 140ms var(--en-easing);
}
.toggle::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 999px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.12);
  transition: transform 140ms var(--en-easing);
}
.toggle.on { background: var(--en-primary); }
.toggle.on::after { transform: translateX(16px); }

.toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0 0;
}
.toggle-row .meta {
  font: 500 13px/18px var(--en-font-sans);
  color: var(--en-fg);
}
.toggle-row .meta .help {
  font: 400 12px/16px var(--en-font-sans);
  color: var(--en-fg-secondary);
  margin-top: 2px;
  display: block;
}

/* ------------------------------------------------------------
   Manage modal
   ------------------------------------------------------------ */
.manage-toolbar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px 12px;
  border-bottom: 1px solid var(--en-divider);
}
.manage-search {
  position: relative;
  flex: 1;
}
.manage-search input {
  width: 100%;
  border: 1px solid var(--en-border);
  border-radius: 8px;
  padding: 8px 10px 8px 34px;
  font: 400 13px/20px var(--en-font-sans);
  background: var(--en-bg);
  outline: none;
}
.manage-search input:focus { border-color: var(--en-primary); box-shadow: 0 0 0 3px var(--en-action-hover); }
.manage-search svg { position: absolute; left: 10px; top: 9px; color: var(--en-icon-secondary); }

.manage-table-wrap { max-height: 60vh; overflow-y: auto; }
.manage-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}
.manage-table thead th {
  background: var(--en-bg-grey);
  text-align: left;
  font: 500 12px/16px var(--en-font-sans);
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: var(--en-fg-secondary);
  padding: 12px 16px;
  position: sticky;
  top: 0;
  border-bottom: 1px solid var(--en-divider);
}
.manage-table tbody td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--en-divider);
  font: 400 14px/20px var(--en-font-sans);
  color: var(--en-fg);
  vertical-align: middle;
}
.manage-table tbody tr:hover td { background: rgba(0, 0, 197, 0.04); }
.manage-table tbody tr.applied td { background: rgba(0, 0, 197, 0.04); }
.manage-name { font-weight: 500; display: flex; align-items: center; gap: 6px; }
.manage-desc {
  font: 400 13px/18px var(--en-font-sans);
  color: var(--en-fg-secondary);
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* small avatar circles for owner */
.avatar {
  width: 22px; height: 22px;
  border-radius: 999px;
  background: var(--en-data-producers);
  color: white;
  font: 600 10px/22px var(--en-font-sans);
  text-align: center;
  letter-spacing: 0;
}

/* Row action menu */
.row-menu-wrap { position: relative; }
.row-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 4px);
  background: var(--en-bg);
  border-radius: 10px;
  box-shadow: var(--en-shadow-menu);
  border: 1px solid var(--en-divider);
  z-index: 110;
  min-width: 180px;
  padding: 4px;
  animation: pop 120ms var(--en-easing);
}
.row-menu button {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 10px;
  border-radius: 6px;
  background: transparent;
  border: 0;
  font: 400 13px/20px var(--en-font-sans);
  color: var(--en-fg);
  text-align: left;
}
.row-menu button:hover { background: var(--en-bg-hover); }
.row-menu button.danger { color: var(--en-error-dark); }
.row-menu button.danger:hover { background: hsla(360, 96%, 96%, 1); }
.row-menu .sep { height: 1px; background: var(--en-divider); margin: 4px 2px; }

/* toast */
.toast-wrap {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  pointer-events: none;
}
.toast {
  background: var(--en-logo-primary);
  color: white;
  padding: 10px 16px;
  border-radius: 10px;
  font: 500 13px/20px var(--en-font-sans);
  box-shadow: 0 10px 30px rgba(20,25,45,0.28);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  pointer-events: auto;
  animation: toast-in 200ms var(--en-easing);
}
@keyframes toast-in {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
.toast .toast-undo {
  background: transparent;
  border: 0;
  color: hsla(206, 100%, 78%, 1);
  font: 600 13px/20px var(--en-font-sans);
  padding: 0;
  cursor: pointer;
}
.toast .toast-undo:hover { color: white; }

/* inline first-cell preview swatch */
.team-cluster {
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
}
.team-cluster .avatar {
  margin-right: -6px;
  border: 2px solid var(--en-bg);
}

/* Form field state — modified */
.modified-mark {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--en-warning-dark);
  display: inline-block;
  margin-left: 6px;
}

/* cursor-follow tooltip for truncated cells */
.cell-tip {
  position: fixed;
  z-index: 80;
  background: var(--en-logo-primary);
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  font: 400 12px/16px var(--en-font-sans);
  letter-spacing: 0.17px;
  max-width: 360px;
  box-shadow: var(--en-shadow-tooltip);
  pointer-events: none;
  white-space: normal;
  word-break: break-word;
  animation: fade 100ms var(--en-easing);
}

/* tooltip — used by the info icon in the step header */
.info-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
  color: var(--en-icon-secondary);
}
.info-wrap:hover { color: var(--en-primary); }
.info-btn {
  background: transparent;
  border: 0;
  padding: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
  color: inherit;
  border-radius: 999px;
}
.info-btn:hover { background: var(--en-action-hover); }
.tooltip {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--en-logo-primary);
  color: white;
  padding: 10px 12px;
  border-radius: 8px;
  font: 400 12px/16px var(--en-font-sans);
  letter-spacing: 0.17px;
  width: 280px;
  z-index: 60;
  box-shadow: var(--en-shadow-tooltip);
  pointer-events: none;
  animation: pop 120ms var(--en-easing);
}
.tooltip::before {
  content: '';
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 10px;
  height: 10px;
  background: var(--en-logo-primary);
  border-radius: 1px;
}
.tooltip strong { color: white; font-weight: 600; }
`,G2=`// Icons — Phosphor Icons (phosphor-icons.com), Regular weight, 256×256 viewBox.
// API is unchanged: same global names, same size/style/className props.
// In Storybook / bundled contexts: import { Trash } from '@phosphor-icons/react'
// Figma source: Phosphor Icons community library (subscribe via Assets panel)

const PhIcon = ({ d, size = 16, style, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 256 256"
    fill="currentColor"
    aria-hidden="true"
    style={style}
    className={className}
  >
    <path d={d} />
  </svg>
);

// Phosphor: Check
const IconCheck = (p) => <PhIcon {...p} d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />;

// Phosphor: CaretDown
const IconChevronDown = (p) => <PhIcon {...p} d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />;

// Phosphor: CaretUp
const IconChevronUp = (p) => <PhIcon {...p} d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z" />;

// Phosphor: Plus
const IconPlus = (p) => <PhIcon {...p} d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" />;

// Phosphor: PencilSimple
const IconEdit = (p) => <PhIcon {...p} d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z" />;

// Phosphor: Trash (regular)
const IconTrash = (p) => <PhIcon {...p} d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" />;

// Phosphor: Gear
const IconGear = (p) => <PhIcon {...p} d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z" />;

// Phosphor: MagnifyingGlass
const IconSearch = (p) => <PhIcon {...p} d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />;

// Phosphor: Star (regular / fill toggled via \`filled\` prop)
const IconStar = ({ filled = false, size = 14, style }) => (
  <PhIcon
    size={size}
    style={style}
    d={filled
      ? "M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"
      : "M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"
    }
  />
);

// Phosphor: Copy
const IconCopy = (p) => <PhIcon {...p} d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z" />;

// Phosphor: X
const IconClose = (p) => <PhIcon {...p} d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />;

// Phosphor: DotsThreeVertical
const IconMore = (p) => <PhIcon {...p} d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,72a12,12,0,1,0-12-12A12,12,0,0,0,128,72Zm0,112a12,12,0,1,0,12,12A12,12,0,0,0,128,184Z" />;

// Phosphor: Share
const IconShare = (p) => <PhIcon {...p} d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H165a88,88,0,0,0-85.23,66,8,8,0,0,1-15.5-4A103.94,103.94,0,0,1,165,96h39.71L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66ZM192,208H40V88a8,8,0,0,0-16,0V216a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16Z" />;

// Phosphor: ArrowSquareOut
const IconExternal = (p) => <PhIcon {...p} d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z" />;

// Phosphor: ArrowCounterClockwise
const IconRevert = (p) => <PhIcon {...p} d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z" />;

// Phosphor: Users
const IconUsers = (p) => <PhIcon {...p} d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />;

// Phosphor: Info
const IconInfo = (p) => <PhIcon {...p} d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" />;

// Phosphor: UploadSimple
const IconUpload = (p) => <PhIcon {...p} d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z" />;

const IconDownload = (p) => <PhIcon {...p} d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM117.66,138.34a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,109.37V32a8,8,0,0,0-16,0v77.37L98.34,87a8,8,0,0,0-11.32,11.32Z" />;

// Phosphor: PencilSimple (fill weight)
const IconEditFill = ({ size = 16, style }) => (
  <PhIcon size={size} style={style} d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM192,108.68,147.31,64l24-24L216,84.68Z" />
);

// Phosphor: Trash (fill weight)
const IconTrashFill = ({ size = 16, style }) => (
  <PhIcon size={size} style={style} d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z" />
);

Object.assign(window, {
  IconCheck, IconChevronDown, IconChevronUp, IconPlus, IconEdit, IconTrash,
  IconGear, IconSearch, IconStar, IconCopy, IconClose, IconMore, IconShare,
  IconExternal, IconRevert, IconUsers, IconInfo, IconUpload, IconDownload,
  IconEditFill, IconTrashFill,
});
`,X2=`// Template picker — trigger button + dropdown menu with search,
// per-row gear (edit), star (set default), and footer actions.

const { useState, useRef, useEffect, useMemo } = React;

function useClickOutside(ref, handler, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) handler(e);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [enabled, handler]);
}

function TemplatePicker({
  templates, activeId, isDirty,
  onApply, onSaveAsNew, onManageOpen, onEdit, onSetDefault, onDuplicate, onDelete,
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const rootRef = useRef(null);
  const searchRef = useRef(null);
  useClickOutside(rootRef, () => setOpen(false), open);

  useEffect(() => {
    if (open && searchRef.current) {
      setTimeout(() => searchRef.current && searchRef.current.focus(), 30);
    } else { setQ(''); }
  }, [open]);

  const active = templates.find(t => t.id === activeId);
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return templates;
    return templates.filter(t =>
      t.name.toLowerCase().includes(s) ||
      (t.description || '').toLowerCase().includes(s) ||
      t.owner.name.toLowerCase().includes(s)
    );
  }, [q, templates]);

  return (
    <div ref={rootRef} style={{ position: 'relative', display: 'inline-flex' }}>
      <button
        className="tpl-trigger"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span className="tpl-trigger-left">
          {active && active.isDefault && (
            <span className="star" title="Default template">
              <IconStar filled size={18} />
            </span>
          )}
          <span className="tpl-trigger-name">
            {active ? active.name : 'No template applied'}
          </span>
        </span>
        <IconChevronDown size={16} />
      </button>

      {open && (
        <div className="menu" role="menu">
          <div className="menu-search">
            <IconSearch size={16} />
            <input
              ref={searchRef}
              placeholder="Search templates…"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          </div>

          <div className="menu-list">
            {filtered.length === 0 && (
              <div className="menu-empty">No templates match "{q}".</div>
            )}
            {filtered.map(t => (
              <TemplateRow
                key={t.id}
                tpl={t}
                isActive={t.id === activeId}
                onApply={() => { onApply(t.id); setOpen(false); }}
                onSetDefault={(e) => { e.stopPropagation(); onSetDefault(t.id); }}
                onEdit={(e) => { e.stopPropagation(); onEdit(t.id); setOpen(false); }}
                onDuplicate={(e) => { e.stopPropagation(); onDuplicate(t.id); }}
                onDelete={(e) => { e.stopPropagation(); onDelete(t.id); }}
              />
            ))}
          </div>

          <div className="menu-footer">
            <button className="primary-action" onClick={() => { setOpen(false); onSaveAsNew(); }}>
              <IconPlus size={16} />
              Save current as new template…
              {isDirty && <span className="tag-default" style={{ marginLeft: 'auto' }}>Unsaved</span>}
            </button>
            <button onClick={() => { setOpen(false); onManageOpen(); }}>
              <IconGear size={16} />
              Manage templates
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function TemplateRow({ tpl, isActive, onApply, onSetDefault, onEdit, onDuplicate, onDelete }) {
  return (
    <div
      className={\`menu-item \${isActive ? 'active' : ''}\`}
      role="menuitem"
      onClick={onApply}
    >
      <button
        className={\`menu-item-pin \${tpl.isDefault ? 'is-default' : ''}\`}
        title={tpl.isDefault ? 'Default template — click to unpin' : 'Set as default'}
        onClick={(e) => { e.stopPropagation(); onSetDefault(); }}
      >
        <IconStar filled={tpl.isDefault} size={18} />
      </button>
      <div className="menu-item-body">
        <div className="menu-item-row1">
          <span className="menu-item-name" title={tpl.name}>{tpl.name}</span>
          {isActive && <IconCheck size={16} style={{ color: 'var(--en-primary)' }} />}
        </div>
        <div className="menu-item-meta">
          <span title={tpl.shared ? \`Shared by \${tpl.owner.name}\` : \`Private · \${tpl.owner.name}\`}>{tpl.shared ? \`Shared by \${tpl.owner.name}\` : \`Private · \${tpl.owner.name}\`}</span>
        </div>
      </div>
      <div className="menu-item-actions">
        <button className="btn-icon" title="Edit" onClick={(e) => { e.stopPropagation(); onEdit(); }}>
          <IconEdit size={16} />
        </button>
        <button className="btn-icon" title="Duplicate" onClick={(e) => { e.stopPropagation(); onDuplicate(); }}>
          <IconCopy size={16} />
        </button>
        <button className="btn-icon" title="Delete" onClick={(e) => { e.stopPropagation(); onDelete(); }}>
          <IconTrash size={16} />
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { TemplatePicker });
`,I2=`// Modals — Save-as-template dialog, Save-changes confirm, Manage modal.

function Scrim({ onClose, children }) {
  return (
    <div className="scrim" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      {children}
    </div>
  );
}

/* ============================================================
   Save-as-new template dialog (also used in "Edit details")
   ============================================================ */
function SaveTemplateDialog({
  mode, // 'create' | 'edit' | 'fork'
  initial, // { name, description, isDefault, shared }
  templates, // for default-collision warning
  onClose, onSubmit,
}) {
  const [name, setName] = useState(initial?.name || '');
  const [description, setDescription] = useState(initial?.description || '');
  const [setDefault, setSetDefault] = useState(initial?.isDefault || false);
  const [shared, setShared] = useState(initial?.shared !== false);

  const title =
    mode === 'edit' ? 'Edit template details' :
    mode === 'fork' ? 'Save as new template' :
    'Save Step 3 as template';
  const submitLabel =
    mode === 'edit' ? 'Save changes' : 'Save template';

  const collidingDefault = setDefault && templates.find(t => t.isDefault && t.id !== initial?.id);

  return (
    <Scrim onClose={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-head">
          <div>
            <div className="dialog-title">{title}</div>
            <div className="dialog-sub">
              {mode === 'fork'
                ? 'Save the current Producer Team + Additional Information as a reusable template.'
                : mode === 'edit'
                ? 'Update the name, description, or sharing settings.'
                : 'Save the current Producer Team + Additional Information as a reusable template.'}
            </div>
          </div>
          <button className="btn-icon" onClick={onClose}><IconClose size={16} /></button>
        </div>

        <div className="dialog-body">
          <div className="form-row">
            <label htmlFor="t-name">Template name</label>
            <input
              id="t-name"
              className="input"
              autoFocus
              placeholder="e.g. Commercial Producers — Mid-Market"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="t-desc">Description <span className="muted" style={{ fontWeight: 400 }}>(optional)</span></label>
            <textarea
              id="t-desc"
              className="textarea"
              placeholder="Help teammates pick the right one."
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div className="toggle-row">
            <div className="meta">
              Share with everyone in your organization
              <span className="help">Everyone can apply this template. Only owners and admins can edit.</span>
            </div>
            <div
              className={\`toggle \${shared ? 'on' : ''}\`}
              role="switch"
              aria-checked={shared}
              onClick={() => setShared(s => !s)}
            />
          </div>

          <div className="toggle-row">
            <div className="meta">
              Set as default for new proposals
              <span className="help">Auto-applied to Step 3 whenever you create a new proposal.</span>
            </div>
            <div
              className={\`toggle \${setDefault ? 'on' : ''}\`}
              role="switch"
              aria-checked={setDefault}
              onClick={() => setSetDefault(s => !s)}
            />
          </div>

          {collidingDefault && (
            <div style={{
              background: 'var(--en-bg-active)',
              border: '1px solid hsla(206, 100%, 80%, 1)',
              borderRadius: 8,
              padding: '8px 12px',
              font: '400 12px/16px var(--en-font-sans)',
              color: 'var(--en-text-tertiary)',
            }}>
              <strong style={{ fontWeight: 600 }}>{collidingDefault.name}</strong> is currently the default. Saving will move the default to this template.
            </div>
          )}
        </div>

        <div className="dialog-foot">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button
            className="btn btn-primary"
            disabled={!name.trim()}
            style={{ opacity: name.trim() ? 1 : 0.5, cursor: name.trim() ? 'pointer' : 'not-allowed' }}
            onClick={() => onSubmit({
              name: name.trim(),
              description: description.trim(),
              isDefault: setDefault,
              shared,
            })}
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </Scrim>
  );
}

/* ============================================================
   Confirm overwrite — "Save changes to template?"
   ============================================================ */
function UpdateTemplateDialog({ template, summary, onClose, onConfirm, onSaveAsNew }) {
  return (
    <Scrim onClose={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 520 }}>
        <div className="dialog-head">
          <div>
            <div className="dialog-title">Save changes to "{template.name}"?</div>
            <ul className="dialog-sub" style={{ margin: '6px 0 0', paddingLeft: 18 }}>
              <li>This will be updated for everyone. Last updated {shortDate(template.updatedAt)} by {template.owner.name}.</li>
              {template.usageCount > 0 && (
                <li>Applied to {template.usageCount.toLocaleString()} proposal{template.usageCount === 1 ? '' : 's'}. Existing proposals won't be retroactively changed.</li>
              )}
            </ul>
          </div>
          <button className="btn-icon" onClick={onClose}><IconClose size={16} /></button>
        </div>

        <div className="dialog-body">
          <div style={{
            background: 'var(--en-bg-grey)',
            border: '1px solid var(--en-divider)',
            borderRadius: 8,
            padding: '10px 14px',
            font: '400 13px/20px var(--en-font-sans)',
            color: 'var(--en-fg)',
          }}>
            <div style={{ font: '500 12px/16px var(--en-font-sans)', letterSpacing: '0.4px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', marginBottom: 6 }}>
              Changes in this proposal
            </div>
            {summary.length === 0
              ? <div className="muted">No changes detected.</div>
              : (
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {summary.map((s, i) => <li key={i} style={{ marginBottom: 2 }}>{s}</li>)}
                </ul>
              )
            }
          </div>
        </div>

        <div className="dialog-foot">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-text" onClick={onSaveAsNew}>Save as new instead</button>
          <button className="btn btn-primary" onClick={onConfirm}>Update template</button>
        </div>
      </div>
    </Scrim>
  );
}

/* ============================================================
   Manage modal — full list table
   ============================================================ */
function ManageModal({
  templates, activeId,
  onClose, onApply, onEdit, onDuplicate, onDelete, onSetDefault, onCreate,
}) {
  const [q, setQ] = useState('');
  const [openMenu, setOpenMenu] = useState(null); // row id whose row-menu is open
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setOpenMenu(null), !!openMenu);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return templates;
    return templates.filter(t =>
      t.name.toLowerCase().includes(s) ||
      (t.description || '').toLowerCase().includes(s) ||
      t.owner.name.toLowerCase().includes(s)
    );
  }, [q, templates]);

  return (
    <Scrim onClose={onClose}>
      <div className="dialog lg" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-head">
          <div>
            <div className="dialog-title">Step 3 templates</div>
            <div className="dialog-sub">
              Manage saved Producer Team + Additional Information sets shared across your organization.
            </div>
          </div>
          <button className="btn-icon" onClick={onClose}><IconClose size={16} /></button>
        </div>

        <div className="manage-toolbar">
          <div className="manage-search">
            <IconSearch size={16} />
            <input
              placeholder="Search by name, description, or owner…"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={onCreate}>
            <IconPlus size={16} />
            New template
          </button>
        </div>

        <div className="manage-table-wrap">
          <table className="manage-table">
            <thead>
              <tr>
                <th style={{ width: '32%' }}>Template</th>
                <th style={{ width: 100 }}>Team</th>
                <th>Owner</th>
                <th style={{ width: 90 }}>Usage</th>
                <th style={{ width: 110 }}>Updated</th>
                <th style={{ width: 56 }}></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(t => (
                <tr key={t.id} className={t.id === activeId ? 'applied' : ''}>
                  <td>
                    <div className="manage-name">
                      {t.isDefault && <span className="star"><IconStar filled size={16} /></span>}
                      <span>{t.name}</span>
                      {t.id === activeId && <IconCheck size={16} style={{ color: 'var(--en-primary)' }} />}
                      {!t.shared && <span className="tag-shared">Private</span>}
                    </div>
                    {t.description && <div className="manage-desc">{t.description}</div>}
                  </td>
                  <td>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      <IconUsers size={16} />
                      {totalProducers(t.producerTables)}
                    </span>
                  </td>
                  <td>
                    {t.owner.name}{t.owner.isYou ? ' (you)' : ''}
                  </td>
                  <td className="muted">{t.usageCount.toLocaleString()}</td>
                  <td className="muted">{shortDate(t.updatedAt)}</td>
                  <td>
                    <div className="row-menu-wrap" ref={openMenu === t.id ? menuRef : null}>
                      <button
                        className="btn-icon"
                        onClick={(e) => { e.stopPropagation(); setOpenMenu(openMenu === t.id ? null : t.id); }}
                      >
                        <IconMore size={16} />
                      </button>
                      {openMenu === t.id && (
                        <div className="row-menu">
                          <button onClick={() => { onApply(t.id); setOpenMenu(null); onClose(); }}>
                            <IconCheck size={16} /> Apply to this proposal
                          </button>
                          <button onClick={() => { onEdit(t.id); setOpenMenu(null); }}>
                            <IconEdit size={16} /> Edit details
                          </button>
                          <button onClick={() => { onSetDefault(t.id); setOpenMenu(null); }}>
                            <IconStar size={16} /> {t.isDefault ? 'Default template' : 'Set as default'}
                          </button>
                          <button onClick={() => { onDuplicate(t.id); setOpenMenu(null); }}>
                            <IconCopy size={16} /> Duplicate
                          </button>
                          <div className="sep" />
                          <button className="danger" onClick={() => { onDelete(t.id); setOpenMenu(null); }}>
                            <IconTrash size={16} /> Delete…
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} style={{ textAlign: 'center', padding: 40, color: 'var(--en-fg-secondary)' }}>
                  No templates match "{q}".
                </td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="dialog-foot" style={{ justifyContent: 'space-between' }}>
          <div style={{ font: '400 12px/16px var(--en-font-sans)', color: 'var(--en-fg-secondary)' }}>
            {templates.length} template{templates.length === 1 ? '' : 's'} · {templates.filter(t => t.shared).length} shared with your organization
          </div>
          <button className="btn btn-secondary" onClick={onClose}>Done</button>
        </div>
      </div>
    </Scrim>
  );
}

/* ============================================================
   Delete confirm
   ============================================================ */
function DeleteConfirm({ template, onClose, onConfirm, confirmLabel = 'Delete template', title, message }) {
  const resolvedTitle = title || \`Delete "\${template.name}"?\`;
  const resolvedMessage = message || (
    <>
      This template will no longer be available to anyone in your organization.
      {template.usageCount > 0 && \` Existing proposals (\${template.usageCount.toLocaleString()}) that used it won't be affected.\`}
    </>
  );
  return (
    <Scrim onClose={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 440 }}>
        <div className="dialog-head">
          <div>
            <div className="dialog-title">{resolvedTitle}</div>
            <div className="dialog-sub">{resolvedMessage}</div>
          </div>
          <button className="btn-icon" onClick={onClose}><IconClose size={16} /></button>
        </div>
        <div className="dialog-foot">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" style={{ background: 'var(--en-error-dark)' }} onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </Scrim>
  );
}

Object.assign(window, { Scrim, SaveTemplateDialog, UpdateTemplateDialog, ManageModal, DeleteConfirm });
`,Q2=`// Step 3 body — Producer Team table + Additional Information block.
// Mirrors the screenshot. Edits flow up via props so the parent can detect dirty state.

function CollapsibleSection({ title, modified, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={\`s3-section \${open ? 'open' : 'closed'}\`}>
      <button className="s3-section-head" onClick={() => setOpen(o => !o)} type="button">
        <span className={\`s3-chevron \${open ? 'open' : ''}\`}>
          <IconChevronDown size={18} />
        </span>
        <span className="s3-section-title">{title}</span>
        {modified && <span className="modified-mark" title="Modified" />}
      </button>
      {open && <div className="s3-section-body">{children}</div>}
    </div>
  );
}

function ProducerTableSection({ table, index, modified, canAddTable, onRename, onDelete, onProducersChange, onAddTable }) {
  const [open, setOpen] = useState(true);
  const [editingName, setEditingName] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [nameDraft, setNameDraft] = useState(table.name);
  const menuRef = useRef(null);

  useEffect(() => setNameDraft(table.name), [table.name]);

  useEffect(() => {
    if (!menuOpen) return;
    const onDoc = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [menuOpen]);

  const commitName = () => {
    const v = nameDraft.trim() || \`Team \${index + 1}\`;
    if (v !== table.name) onRename(v);
    setEditingName(false);
  };

  return (
    <div className={\`s3-section \${open ? 'open' : 'closed'}\`}>
      <div className="s3-section-head s3-section-head--row">
        <button
          className="s3-section-toggle"
          onClick={() => !editingName && setOpen(o => !o)}
          type="button"
        >
          <span className={\`s3-chevron \${open ? 'open' : ''}\`}>
            <IconChevronDown size={18} />
          </span>
          {editingName ? (
            <input
              autoFocus
              className="s3-section-title-input"
              value={nameDraft}
              onChange={(e) => setNameDraft(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              onBlur={commitName}
              onKeyDown={(e) => {
                if (e.key === 'Enter') commitName();
                if (e.key === 'Escape') { setNameDraft(table.name); setEditingName(false); }
              }}
            />
          ) : (
            <span className="s3-section-title">{table.name}</span>
          )}
          {modified && !editingName && <span className="modified-mark" title="Modified" />}
        </button>

        <div className="s3-section-menu" ref={menuRef}>
          <button
            className="btn-icon"
            title="Table actions"
            onClick={(e) => { e.stopPropagation(); setMenuOpen(o => !o); }}
          >
            <IconMore size={16} />
          </button>
          {menuOpen && (
            <div className="row-menu">
              <button onClick={() => { setMenuOpen(false); setOpen(true); setEditingName(true); }}>
                <IconEditFill size={16} /> Rename table
              </button>
              <button className="danger" onClick={() => { setMenuOpen(false); onDelete(); }}>
                <IconTrashFill size={16} /> Delete table
              </button>
            </div>
          )}
        </div>
      </div>
      {open && (
        <div className="s3-section-body">
          {table.producers.length === 0 ? (
            <div className="s3-empty-state">
              <button
                className="add-producer"
                onClick={() => {
                  const id = 'np' + Date.now();
                  onProducersChange([{
                    id, first: '', last: '', email: '', bio: '', phone: '',
                  }]);
                }}
              >
                <IconPlus size={16} />
                Add Member
              </button>
            </div>
          ) : (
            <>
              <ProducerTable
                producers={table.producers}
                onChange={(next) => onProducersChange(next)}
              />
              <div className="s3-table-actions">
                <button
                  className="add-producer"
                  onClick={() => {
                    const id = 'np' + Date.now();
                    onProducersChange([...table.producers, {
                      id, first: '', last: '', email: '', bio: '', phone: '',
                    }]);
                  }}
                >
                  <IconPlus size={16} />
                  Add Member
                </button>
                {canAddTable && (
                  <button className="add-producer add-producer--alt" onClick={onAddTable}>
                    <IconPlus size={16} />
                    Add Table
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function Step3Body({
  producerTables, agency,
  onProducerTablesChange, onAgencyChange,
  modified,
}) {
  const updateTable = (idx, patch) => {
    onProducerTablesChange(producerTables.map((t, i) => i === idx ? { ...t, ...patch } : t));
  };
  const renameTable = (idx, name) => updateTable(idx, { name });
  const setTableProducers = (idx, producers) => updateTable(idx, { producers });
  const deleteTable = (idx) => {
    if (producerTables.length === 1) {
      // keep at least one table — clear its rows instead
      onProducerTablesChange([{ ...producerTables[0], producers: [] }]);
      return;
    }
    onProducerTablesChange(producerTables.filter((_, i) => i !== idx));
  };
  const addTable = () => {
    const n = producerTables.length + 1;
    onProducerTablesChange([...producerTables, {
      id: 'tab-' + Date.now(),
      name: \`Team \${n}\`,
      producers: [],
    }]);
  };

  const totalMembers = producerTables.reduce((n, t) => n + t.producers.length, 0);

  return (
    <div className="s3-body">
      {producerTables.map((table, idx) => (
        <ProducerTableSection
          key={table.id}
          table={table}
          index={idx}
          modified={modified.tables && modified.tables[table.id]}
          canAddTable={totalMembers > 0}
          onRename={(name) => renameTable(idx, name)}
          onDelete={() => deleteTable(idx)}
          onProducersChange={(producers) => setTableProducers(idx, producers)}
          onAddTable={addTable}
        />
      ))}

      <CollapsibleSection title="Logo" modified={modified.logoFile}>
        {agency.logoFile ? (
          <div className="logo-card">
            <div className="logo-thumb">
              <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
                <path d="M10 24 Q 28 6, 60 22 T 110 22 T 160 22 T 195 22" stroke="#FA5F0C" strokeWidth="9" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <div className="logo-meta">
              <div className="logo-filename">{agency.logoFile}</div>
              <div className="logo-hint">PNG or SVG · displayed on the proposal cover.</div>
            </div>
            <button
              className="btn-icon logo-remove"
              title="Remove logo"
              onClick={() => onAgencyChange({ ...agency, logoFile: '' })}
            >
              <IconTrash size={16} />
            </button>
          </div>
        ) : (
          <div className="logo-dropzone">
            <div className="logo-dropzone-title">Add your logo in png, jpg, or svg format</div>
            <button
              className="logo-upload-btn"
              type="button"
              onClick={() => onAgencyChange({ ...agency, logoFile: 'ennabl-icon-light (1).png' })}
            >
              <IconUpload size={16} />
              Upload from Computer
            </button>
            <div className="logo-dropzone-hint">or drag and drop here</div>
          </div>
        )}
      </CollapsibleSection>

      <CollapsibleSection
        title="Additional Information"
        modified={modified.agencyName || modified.aboutUs || modified.disclosures || modified.serviceSummary}
      >
        <EditableField
          label="Name"
          value={agency.agencyName}
          modified={modified.agencyName}
          onChange={v => onAgencyChange({ ...agency, agencyName: v })}
        />
        <EditableField
          label="About"
          value={agency.aboutUs}
          multiline
          modified={modified.aboutUs}
          onChange={v => onAgencyChange({ ...agency, aboutUs: v })}
        />
        <EditableField
          label="Disclosures"
          value={agency.disclosures}
          multiline
          modified={modified.disclosures}
          onChange={v => onAgencyChange({ ...agency, disclosures: v })}
        />
        <EditableField
          label="Service Summary"
          value={agency.serviceSummary || ''}
          multiline
          modified={modified.serviceSummary}
          onChange={v => onAgencyChange({ ...agency, serviceSummary: v })}
        />
      </CollapsibleSection>
    </div>
  );
}

function SortIcon({ dir }) {
  // dir: 'none' | 'asc' | 'desc'
  const gray = '#8287B0';
  const dark = '#1E1E1E';
  const upStroke = dir === 'asc' ? dark : gray;
  const downStroke = dir === 'desc' ? dark : gray;
  const upOp = dir === 'asc' ? 0.87 : 0.8;
  const downOp = dir === 'desc' ? 0.87 : 0.8;
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M16 10L12 6L8 10" stroke={upStroke} strokeOpacity={upOp} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 14L12 18L16 14" stroke={downStroke} strokeOpacity={downOp} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function ProducerTable({ producers, onChange }) {
  const [tip, setTip] = useState(null); // { text, x, y }
  const [sort, setSort] = useState({ key: null, dir: 'none' });
  const [editingId, setEditingId] = useState(() => {
    // If table mounts with a single blank row, drop straight into edit mode.
    if (producers.length === 1) {
      const p = producers[0];
      if (!p.first && !p.last && !p.email && !p.bio && !p.phone) return p.id;
    }
    return null;
  });
  const prevLenRef = useRef(producers.length);

  // Auto-edit a freshly added empty row
  useEffect(() => {
    if (producers.length > prevLenRef.current) {
      const last = producers[producers.length - 1];
      if (last && !last.first && !last.last && !last.email && !last.bio && !last.phone) {
        setEditingId(last.id);
      }
    }
    prevLenRef.current = producers.length;
  }, [producers]);

  const toggleSort = (key) => {
    setSort(s => {
      if (s.key !== key) return { key, dir: 'asc' };
      if (s.dir === 'asc') return { key, dir: 'desc' };
      if (s.dir === 'desc') return { key: null, dir: 'none' };
      return { key, dir: 'asc' };
    });
  };

  const dirFor = (key) => (sort.key === key ? sort.dir : 'none');

  const sortedProducers = useMemo(() => {
    if (!sort.key || sort.dir === 'none') return producers;
    const arr = [...producers];
    const k = sort.key;
    arr.sort((a, b) => {
      const av = (a[k] || '').toString().toLowerCase();
      const bv = (b[k] || '').toString().toLowerCase();
      if (av < bv) return sort.dir === 'asc' ? -1 : 1;
      if (av > bv) return sort.dir === 'asc' ? 1 : -1;
      return 0;
    });
    return arr;
  }, [producers, sort]);

  const updateRow = (id, patch) => {
    onChange(producers.map(p => p.id === id ? { ...p, ...patch } : p));
  };
  const removeRow = (id) => onChange(producers.filter(p => p.id !== id));

  const onCellEnter = (e, text) => {
    if (!text) return;
    const el = e.currentTarget;
    // measure: if not actually overflowing, skip
    if (el.scrollWidth <= el.clientWidth + 1) return;
    setTip({ text, x: e.clientX, y: e.clientY });
  };
  const onCellMove = (e) => {
    setTip(t => t ? { ...t, x: e.clientX, y: e.clientY } : t);
  };
  const onCellLeave = () => setTip(null);

  return (
    <>
    <table className="table">
      <thead>
        <tr>
          <th className="col-first" onClick={() => toggleSort('first')}><span className="th-inner sortable">First Name <span className="sort"><SortIcon dir={dirFor('first')} /></span></span></th>
          <th className="col-last" onClick={() => toggleSort('last')}><span className="th-inner sortable">Last Name <span className="sort"><SortIcon dir={dirFor('last')} /></span></span></th>
          <th className="col-email" onClick={() => toggleSort('email')}><span className="th-inner sortable">Email <span className="sort"><SortIcon dir={dirFor('email')} /></span></span></th>
          <th className="col-bio"><span className="th-inner">Bio</span></th>
          <th className="col-phone" onClick={() => toggleSort('phone')}><span className="th-inner sortable">Phone Number <span className="sort"><SortIcon dir={dirFor('phone')} /></span></span></th>
          <th className="col-actions"><span className="th-inner">Actions</span></th>
        </tr>
      </thead>
      <tbody>
        {sortedProducers.map(p => {
          const isEditing = editingId === p.id;
          if (isEditing) {
            return (
              <tr key={p.id} className="row-editing">
                <td><input className="cell-input" autoFocus placeholder="First Name" value={p.first} onChange={e => updateRow(p.id, { first: e.target.value })} /></td>
                <td><input className="cell-input" placeholder="Last Name" value={p.last} onChange={e => updateRow(p.id, { last: e.target.value })} /></td>
                <td><input className="cell-input" placeholder="Email" value={p.email} onChange={e => updateRow(p.id, { email: e.target.value })} /></td>
                <td><input className="cell-input" placeholder="Bio" value={p.bio} onChange={e => updateRow(p.id, { bio: e.target.value })} /></td>
                <td><input className="cell-input" placeholder="Phone Number" value={p.phone} onChange={e => updateRow(p.id, { phone: e.target.value })} /></td>
                <td className="col-actions">
                  <div className="cell-actions">
                    <button className="btn-icon" title="Done editing" onClick={() => setEditingId(null)}>
                      <IconCheck size={16} />
                    </button>
                    <button className="btn-icon" title="Remove" onClick={() => { setEditingId(null); removeRow(p.id); }}>
                      <IconTrashFill size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          }
          return (
            <tr key={p.id}>
              <td onMouseEnter={(e) => onCellEnter(e, p.first)} onMouseMove={onCellMove} onMouseLeave={onCellLeave}>{p.first}</td>
              <td onMouseEnter={(e) => onCellEnter(e, p.last)} onMouseMove={onCellMove} onMouseLeave={onCellLeave}>{p.last}</td>
              <td className="muted" onMouseEnter={(e) => onCellEnter(e, p.email)} onMouseMove={onCellMove} onMouseLeave={onCellLeave}>{p.email}</td>
              <td onMouseEnter={(e) => onCellEnter(e, p.bio)} onMouseMove={onCellMove} onMouseLeave={onCellLeave}>{p.bio}</td>
              <td className="muted" onMouseEnter={(e) => onCellEnter(e, p.phone)} onMouseMove={onCellMove} onMouseLeave={onCellLeave}>{p.phone}</td>
              <td className="col-actions">
                <div className="cell-actions">
                  <button className="btn-icon" title="Edit" onClick={() => setEditingId(p.id)}>
                    <IconEditFill size={16} />
                  </button>
                  <button className="btn-icon" title="Remove" onClick={() => removeRow(p.id)}>
                    <IconTrashFill size={16} />
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    {tip && (
      <div
        className="cell-tip"
        style={{ left: tip.x + 14, top: tip.y + 18 }}
      >
        {tip.text}
      </div>
    )}
    </>
  );
}

function EditableField({ label, value, multiline, modified, onChange }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  useEffect(() => setDraft(value), [value]);

  if (!editing) {
    return (
      <div
        className="field"
        onClick={() => setEditing(true)}
        style={{ cursor: 'text' }}
      >
        <div className="field-label">
          {label}
          {modified && <span className="modified-mark" />}
        </div>
        <div className="field-value">{value}</div>
      </div>
    );
  }
  return (
    <div className="field" style={{ background: 'var(--en-bg)' }}>
      <div className="field-label">
        {label}
        {modified && <span className="modified-mark" />}
      </div>
      {multiline ? (
        <textarea
          autoFocus
          className="textarea"
          style={{ marginTop: 4, minHeight: 96 }}
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onBlur={() => { onChange(draft); setEditing(false); }}
        />
      ) : (
        <input
          autoFocus
          className="input"
          style={{ marginTop: 4 }}
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onBlur={() => { onChange(draft); setEditing(false); }}
          onKeyDown={e => { if (e.key === 'Enter') { onChange(draft); setEditing(false); } }}
        />
      )}
    </div>
  );
}

Object.assign(window, { Step3Body });
`,K2=V2.replace(/@font-face\s*\{[^}]*\}/g,""),$2=`
<script>
  window.__navigate = function(path) {
    var hash = path.startsWith('#') ? path : '#' + path;
    window.location.hash = hash;
    window.parent.postMessage({ type: '__route', path: hash }, '*');
  };
  window.addEventListener('hashchange', function() {
    window.parent.postMessage({ type: '__route', path: window.location.hash || '#/' }, '*');
  });
  // report initial route after React mounts
  window.addEventListener('load', function() {
    setTimeout(function() {
      window.parent.postMessage({ type: '__route', path: window.location.hash || '#/' }, '*');
    }, 100);
  });
<\/script>`;function J2(s){return`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin><\/script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin><\/script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin><\/script>
  <script src="https://unpkg.com/recharts@2/umd/Recharts.min.js" crossorigin><\/script>
  <style>${K2}</style>
  <style>${Y2}</style>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; min-height: 100vh; background: var(--en-bg-grey, #f4f6fc); }
    #__err { display:none; position:fixed; inset:0; background:#1a1a1a; color:#f87171; font:13px/1.6 monospace; padding:24px; white-space:pre-wrap; z-index:9999; overflow:auto; }
    #__err.show { display:block; }
  </style>
  <script>
    window.onerror = function(msg, src, line, col, err) {
      var el = document.getElementById('__err');
      if (el) { el.textContent = (err ? err.stack : msg) || msg; el.className = 'show'; }
      return true;
    };
    window.addEventListener('unhandledrejection', function(e) {
      var el = document.getElementById('__err');
      if (el) { el.textContent = String(e.reason); el.className = 'show'; }
    });
  <\/script>
  ${$2}
</head>
<body>
  <div id="root"></div>
  <div id="__err"></div>
  <script type="text/babel">
${G2}
  <\/script>
  <script type="text/babel">
${X2}
  <\/script>
  <script type="text/babel">
${I2}
  <\/script>
  <script type="text/babel">
${Q2}
  <\/script>
  <script type="text/babel">
${s}

try {
  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
} catch(e) {
  var el = document.getElementById('__err');
  if (el) { el.textContent = e.stack || e.message; el.className = 'show'; }
}
  <\/script>
</body>
</html>`}function F2({code:s,prd:l,onInitDesign:i}){const r=m.useRef(null),[u,d]=m.useState("preview"),[f,h]=m.useState("#/"),[g,v]=m.useState("#/"),[x,S]=m.useState(["#/"]),[T,N]=m.useState(0);m.useEffect(()=>{function Y(I){var F;if(((F=I.data)==null?void 0:F.type)!=="__route")return;const Q=I.data.path||"#/";h(Q),v(Q),S(K=>{const B=K.slice(0,T+1);return B[B.length-1]===Q?B:[...B,Q]}),N(K=>K+1)}return window.addEventListener("message",Y),()=>window.removeEventListener("message",Y)},[T]),m.useEffect(()=>{!r.current||!s||(h("#/"),v("#/"),S(["#/"]),N(0),r.current.srcdoc=J2(s))},[s]);function _(Y){var I,Q,F,K,B;(Q=(I=r.current)==null?void 0:I.contentWindow)==null||Q.postMessage({type:"__navigate",path:Y},"*");try{(F=r.current)!=null&&F.contentWindow&&((B=(K=r.current.contentWindow).__navigate)==null||B.call(K,Y))}catch{}}function z(){if(T<=0)return;const Y=x[T-1];N(I=>I-1),h(Y),v(Y),_(Y)}function Z(){if(T>=x.length-1)return;const Y=x[T+1];N(I=>I+1),h(Y),v(Y),_(Y)}function q(Y){Y.preventDefault(),_(g)}return s?y.jsxs("div",{className:"canvas canvas--live",children:[y.jsxs("div",{className:"canvas-toolbar",children:[y.jsxs("div",{className:"canvas-view-tabs",children:[y.jsx("button",{className:`canvas-view-tab ${u==="preview"?"active":""}`,onClick:()=>d("preview"),children:"Preview"}),y.jsx("button",{className:`canvas-view-tab ${u==="code"?"active":""}`,onClick:()=>d("code"),children:"Code"})]}),u==="preview"&&y.jsxs("div",{className:"canvas-urlbar",children:[y.jsx("button",{className:"canvas-nav-btn",onClick:z,disabled:T<=0,title:"Back",children:"←"}),y.jsx("button",{className:"canvas-nav-btn",onClick:Z,disabled:T>=x.length-1,title:"Forward",children:"→"}),y.jsx("form",{className:"canvas-url-form",onSubmit:q,children:y.jsx("input",{className:"canvas-url-input",value:g,onChange:Y=>v(Y.target.value),spellCheck:!1})})]}),y.jsx("button",{className:"canvas-copy-btn",onClick:()=>navigator.clipboard.writeText(s),children:"copy"})]}),y.jsxs("div",{className:"canvas-body",children:[y.jsx("iframe",{ref:r,className:"canvas-iframe",style:{display:u==="preview"?"block":"none"},title:"design preview",sandbox:"allow-scripts allow-same-origin"}),u==="code"&&y.jsx("pre",{className:"canvas-code",children:y.jsx("code",{children:s})})]})]}):y.jsx("div",{className:"canvas canvas--empty",children:l?y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"canvas-empty-icon",children:"✦"}),y.jsx("p",{className:"canvas-empty-title",children:l.name}),y.jsx("span",{className:"canvas-empty-sub",children:"PRD loaded — ready to generate"}),y.jsx("button",{className:"canvas-init-btn",onClick:i,children:"Init Design"})]}):y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"canvas-empty-icon",children:"◎"}),y.jsx("p",{className:"canvas-empty-title",children:"No PRD loaded"}),y.jsx("span",{className:"canvas-empty-sub",children:"Open a PRD from Projects to start"})]})})}const Dp="ennabl_builder_history",P2=50;function W2(){try{return JSON.parse(localStorage.getItem(Dp)||"[]")}catch{return[]}}function V1(s){localStorage.setItem(Dp,JSON.stringify(s.slice(0,P2)))}function e8({prdName:s,code:l,iteration:i}){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,timestamp:new Date().toISOString(),prdName:s,code:l,iteration:i}}function t8(s){const i=`${s.prdName.replace(/\.md$/i,"").replace(/[^a-z0-9]/gi,"-").toLowerCase()}-v${s.iteration}.jsx`,r=`/**
 * ennabl builder — generated component
 * PRD: ${s.prdName}  |  iteration: ${s.iteration}
 * ${new Date(s.timestamp).toLocaleString()}
 *
 * Globals expected:
 *   - React 18 UMD (window.React, window.ReactDOM)
 *   - ennabl design system CSS (--en-* variables)
 *   - icons.jsx globals (IconCheck, IconClose, …)
 *   - shared globals (Scrim, CollapsibleSection, EditableField, …)
 */

${s.code}
`,u=new Blob([r],{type:"text/plain"}),d=URL.createObjectURL(u);Object.assign(document.createElement("a"),{href:d,download:i}).click(),URL.revokeObjectURL(d)}function n8(s){const l=Math.floor((Date.now()-new Date(s))/6e4);if(l<1)return"just now";if(l<60)return`${l}m ago`;const i=Math.floor(l/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}function a8(s){return s.split(`
`).slice(0,3).join(`
`).slice(0,140)}function l8({entries:s,onClear:l}){const[i,r]=m.useState(null);function u(d){navigator.clipboard.writeText(d.code),r(d.id),setTimeout(()=>r(null),2e3)}return s.length===0?y.jsxs("div",{className:"sb-empty",children:[y.jsx("p",{children:"No components yet"}),y.jsx("span",{children:"Each generated UI is logged here. Download or copy the JSX to use in your codebase."})]}):y.jsxs("div",{className:"sb-tab",children:[y.jsxs("div",{className:"sb-toolbar",children:[y.jsxs("span",{className:"sb-count",children:[s.length," snapshot",s.length!==1?"s":""]}),y.jsx("button",{className:"sb-clear",onClick:l,children:"clear all"})]}),y.jsx("div",{className:"sb-list",children:s.map(d=>y.jsxs("div",{className:"sb-entry",children:[y.jsxs("div",{className:"sb-entry-top",children:[y.jsx("span",{className:"sb-entry-name",children:d.prdName.replace(/\.md$/i,"")}),y.jsxs("span",{className:"sb-entry-badge",children:["v",d.iteration]}),y.jsx("span",{className:"sb-entry-time",children:n8(d.timestamp)})]}),y.jsx("pre",{className:"sb-entry-code",children:a8(d.code)}),y.jsxs("div",{className:"sb-entry-actions",children:[y.jsx("button",{className:"sb-btn",onClick:()=>u(d),children:i===d.id?"✓ copied":"copy"}),y.jsx("button",{className:"sb-btn sb-btn--primary",onClick:()=>t8(d),children:"↓ .jsx"})]})]},d.id))})]})}function i8({entries:s}){return y.jsx("div",{className:"figma-tab",children:y.jsxs("div",{className:"figma-coming",children:[y.jsx("div",{className:"figma-icon",children:"◈"}),y.jsx("p",{children:"Figma sync"}),y.jsx("span",{children:"Will push each generated component into your Figma file as a frame — auto-named by PRD and iteration, grouped in a dedicated page. Requires a Figma access token."}),y.jsx("div",{className:"figma-queue",children:s.length>0?y.jsxs(y.Fragment,{children:[y.jsxs("span",{className:"figma-queue-label",children:[s.length," snapshot",s.length!==1?"s":""," queued"]}),y.jsx("button",{className:"figma-btn",disabled:!0,children:"Connect Figma to push"})]}):y.jsx("span",{className:"figma-queue-label",children:"Generate a UI first"})})]})})}function s8({code:s,prd:l,history:i,onHistoryClear:r,onInitDesign:u}){const[d,f]=m.useState("design");return y.jsxs("div",{className:"left-panel",children:[y.jsxs("div",{className:"left-tabs",children:[y.jsx("button",{className:`left-tab ${d==="design"?"left-tab--active":""}`,onClick:()=>f("design"),children:"Design"}),y.jsx("button",{className:`left-tab ${d==="prd"?"left-tab--active":""} ${l?"":"left-tab--disabled"}`,onClick:()=>l&&f("prd"),children:l?l.name:"PRD"}),y.jsxs("button",{className:`left-tab ${d==="storybook"?"left-tab--active":""}`,onClick:()=>f("storybook"),children:["Storybook",i.length>0&&y.jsx("span",{className:"left-tab-count",children:i.length})]}),y.jsx("button",{className:`left-tab ${d==="figma"?"left-tab--active":""}`,onClick:()=>f("figma"),children:"Figma"})]}),y.jsxs("div",{className:"left-content",children:[y.jsx("div",{className:`left-canvas-wrap ${d!=="design"?"left-canvas-wrap--hidden":""}`,children:y.jsx(F2,{code:s,prd:l,onInitDesign:u})}),d==="prd"&&l&&y.jsx("div",{className:"prd-view",dangerouslySetInnerHTML:{__html:De.parse(l.content)}}),d==="prd"&&!l&&y.jsx("div",{className:"prd-empty",children:"No PRD loaded"}),d==="storybook"&&y.jsx(l8,{entries:i,onClear:r}),d==="figma"&&y.jsx(i8,{entries:i})]})]})}const yu="ennabl_builder_api_key",kp=()=>localStorage.getItem(yu)||"",r8=s=>localStorage.setItem(yu,s.trim()),o8=()=>localStorage.removeItem(yu),Mp="ennabl_builder_email",Kc=()=>localStorage.getItem(Mp)||"",c8=s=>localStorage.setItem(Mp,s),Rp="ennabl_builder_theme",u8=()=>localStorage.getItem(Rp)||"dark",d8=s=>localStorage.setItem(Rp,s),Op="ennabl_builder_model",f8=[{id:"claude-haiku-4-5-20251001",label:"Haiku",note:"dev / fast"},{id:"claude-sonnet-4-6",label:"Sonnet",note:"balanced"},{id:"claude-opus-4-7",label:"Opus",note:"prod / best"}],p8="claude-haiku-4-5-20251001",zp=()=>localStorage.getItem(Op)||p8,h8=s=>localStorage.setItem(Op,s),m8=`# ennabl Design Tokens

Always use \`--en-*\` CSS custom properties. Never hardcode hex or rgba values.

## Colors

\`\`\`css
/* Primary action */
--en-primary: #0000C5
--en-primary-light: #6139F9
--en-primary-dark: #000093
--en-action-hover: rgba(0, 0, 197, 0.04)
--en-outlined-hover: hsla(240, 100%, 95%, 1)

/* Text */
--en-fg: rgba(30, 30, 30, 0.87)           /* primary text */
--en-fg-secondary: rgba(130, 135, 176, 0.8) /* muted/secondary text */
--en-fg-disabled: rgba(30, 30, 30, 0.38)

/* Backgrounds */
--en-bg: #FFFFFF                           /* white card/surface */
--en-bg-grey: hsla(218, 67%, 98%, 1)       /* page canvas */
--en-bg-dark-grey: hsla(218, 61%, 94%, 1)  /* chip/subtle fill */
--en-bg-hover: hsla(226, 25%, 96%, 1)
--en-bg-active: hsla(207, 100%, 96%, 1)
--en-secondary: #F5F8FD
--en-secondary-dark: #EEF3FC

/* Borders & dividers */
--en-border: hsla(228, 80%, 90%, 1)
--en-divider: hsla(217, 68%, 94%, 1)

/* Semantic */
--en-error: #FC5943
--en-error-dark: #C22019
--en-success: #3DD598
--en-warning: #FFC542
--en-warning-dark: #C78600

/* Icons */
--en-icon: rgb(59, 59, 59)
--en-icon-secondary: #9B9FC0
--en-sidebar: #71748C

/* Logo */
--en-logo-primary: #1B2337   /* dark navy — used in toasts, tooltips */
--en-logo-accent: #FA5F0C    /* orange — mark only, never UI elements */
\`\`\`

## Typography classes

\`\`\`css
/* Headings */
.en-h3   /* 700 24px/32px */
.en-h4   /* 700 20px/28px */
.en-h5   /* 700 14px/16px */

/* Body */
.en-body1       /* 400 16px/24px */
.en-body1-bold  /* 700 16px/24px */
.en-body2       /* 400 14px/20px — default body */
.en-body2-bold  /* 700 14px/20px */
.en-body3       /* 400 12px/16px — small/helper */
.en-body3-bold  /* 700 12px/16px */

/* Subtitles */
.en-subtitle1   /* 400 16px/24px */
.en-subtitle2   /* 500 14px/16px — section labels */
.en-subtitle3   /* 500 12px/16px */

/* Special */
.en-overline      /* 400 12px/20px uppercase + 1px tracking */
.en-caption       /* 400 12px/16px + 0.4px tracking */
.en-table-header  /* 500 14px/24px */
.en-table-text    /* 400 14px/24px */
\`\`\`

## Spacing, radii, shadows

\`\`\`css
/* Radii */
--en-radius-sm: 2px
--en-radius: 4px
--en-radius-regular: 8px   /* buttons, inputs */
--en-radius-medium: 12px
--en-radius-large: 16px    /* cards, step cards */
--en-radius-xl: 24px

/* Shadows */
--en-shadow-menu: 0 4px 12px rgba(30,30,30,0.08), 0 0 1px rgba(30,30,30,0.12)
--en-shadow-tooltip: 0 2px 8px rgba(30,30,30,0.16)
--en-shadow-card-hover: 0 1px 2px rgba(0,0,197,0.06)

/* Motion */
--en-duration-short: 200ms
--en-easing: cubic-bezier(0.4, 0, 0.2, 1)

/* Font */
--en-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
\`\`\`
`,g8=`# ennabl Component Patterns

## Scope rule

Match the PRD's scope exactly — a filter modal is just a modal, a table section is just a table, a chart widget is just the chart. Only wrap in a full \`.stage\` page layout when the PRD describes a complete screen. Never pad a focused component into a page it doesn't need.

## Multi-view / drilldown navigation

The builder has a URL bar that tracks routes. Use \`useState\` for view switching **and** call \`window.__navigate('/path')\` whenever the view changes so the URL bar updates:

\`\`\`jsx
const [view, setView] = useState('list') // 'list' | 'detail' | 'create'

function goTo(v) {
  setView(v)
  window.__navigate?.('/' + v)
}

// Render current view
if (view === 'detail') return <DetailView item={selected} onBack={() => goTo('list')} />
if (view === 'create') return <CreateView onBack={() => goTo('list')} onSave={handleSave} />

// Default: list view
return (
  <div className="stage">
    {/* clicking a row: goTo('detail') and setSelected(row) */}
  </div>
)
\`\`\`

Rules:
- Always include a back button / breadcrumb that returns to the previous view
- Keep all views inside the single \`App\` function as inline functions or nested returns
- Use \`selected\` state to pass the drilled-into item to the detail view
- Call \`window.__navigate?.('/route-name')\` on every view transition — the builder URL bar tracks it

## Charts (Recharts)

Recharts is loaded globally. Destructure what you need:

\`\`\`jsx
const { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
        XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = Recharts

function App() {
  const data = [
    { month: 'Jan', premium: 420000, policies: 38 },
    { month: 'Feb', premium: 380000, policies: 32 },
    { month: 'Mar', premium: 510000, policies: 45 },
  ]
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--en-divider)" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'var(--en-fg-secondary)' }} />
        <YAxis tick={{ fontSize: 12, fill: 'var(--en-fg-secondary)' }} />
        <Tooltip />
        <Bar dataKey="premium" fill="var(--en-primary)" radius={[4,4,0,0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
\`\`\`

Color palette for charts: \`var(--en-primary)\`, \`var(--en-data-producers)\`, \`var(--en-data-accounts)\`, \`var(--en-data-premium)\`, \`var(--en-data-policies)\`.

## Page layout

\`\`\`jsx
<div className="stage">
  {/* max-width 1200px, centered, flex column, gap 16px */}
  {/* background: var(--en-bg-grey) */}
</div>
\`\`\`

## Step card (primary container)

\`\`\`jsx
<div className="step-card">
  <div className="step-header">
    <div className="step-header-left">
      <h3 className="step-title">Step N: Title</h3>
    </div>
    <button className="btn-hide">Hide</button>
  </div>
  {/* content */}
</div>
\`\`\`

CSS rules:
- \`background: var(--en-bg)\`, \`border-radius: 16px\`, \`border: 1px solid var(--en-primary)\`
- \`padding: 28px 32px 32px\`

## Buttons

\`\`\`jsx
<button className="btn btn-primary">Save changes</button>
<button className="btn btn-secondary">Save as new</button>
<button className="btn btn-text">Discard</button>
<button className="btn btn-hide">Hide</button>
\`\`\`

Button base: \`font-family: inherit; cursor: pointer; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px;\`

## Template / picker bar

\`\`\`jsx
<div className={\`tpl-bar \${dirty ? 'dirty' : ''}\`}>
  <span className="tpl-bar-label">Template</span>
  {/* picker trigger */}
  <button className="tpl-trigger">Name <IconChevronDown size={16} /></button>
  <div className="tpl-bar-actions">
    <button className="btn btn-primary">Save changes</button>
  </div>
</div>
\`\`\`

## Data table

\`\`\`jsx
<table className="manage-table">
  <thead>
    <tr><th>Name</th><th>Value</th></tr>
  </thead>
  <tbody>
    <tr><td>...</td><td>...</td></tr>
  </tbody>
</table>
\`\`\`

thead: \`background: var(--en-bg-grey)\`, th: \`500 12px uppercase\`, letter-spacing 0.4px, color \`--en-fg-secondary\`
tbody td: \`400 14px/20px\`, border-bottom \`--en-divider\`, hover \`rgba(0,0,197,0.04)\`

## Collapsible section

\`\`\`jsx
<div className="s3-body">
  <CollapsibleSection title="Section title" defaultOpen>
    {/* content */}
  </CollapsibleSection>
</div>
\`\`\`

## Modal / dialog

\`\`\`jsx
<div className="modal-backdrop">
  <div className="modal" role="dialog">
    <div className="modal-header">
      <h2 className="modal-title">Title</h2>
      <button className="modal-close"><IconX size={18} /></button>
    </div>
    <div className="modal-body">{/* content */}</div>
    <div className="modal-footer">
      <button className="btn btn-text">Cancel</button>
      <button className="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
\`\`\`

backdrop: \`position: fixed; inset: 0; background: rgba(30,30,30,0.4); z-index: 100\`
modal: \`background: var(--en-bg); border-radius: 16px; box-shadow: var(--en-shadow-menu); padding: 24px\`

## Toast

\`\`\`jsx
<div className="toast-wrap">
  <div className="toast">
    <IconCheck size={16} />
    <span>Action completed</span>
  </div>
</div>
\`\`\`

\`background: var(--en-logo-primary); color: white; border-radius: 10px; bottom: 24px; fixed\`

## Tooltip

\`\`\`jsx
<span className="info-wrap">
  <button className="info-btn"><IconInfo size={16} /></button>
  <div className="tooltip" role="tooltip">Explanation text</div>
</span>
\`\`\`

## Avatar

\`\`\`jsx
<div className="avatar">AC</div>
{/* 22px circle, background: var(--en-data-producers), white text, 600 10px */}
\`\`\`

## Available icons

\`\`\`jsx
<IconChevronDown size={16} />
<IconChevronUp size={16} />
<IconPlus size={16} />
<IconCheck size={16} />
<IconInfo size={16} />
<IconStar size={16} filled />
<IconRevert size={16} />
<IconX size={18} />
\`\`\`

Icons accept \`size\` (number) and optional \`style\` prop.

## Inline modified indicator

\`\`\`jsx
{modified.fieldName && <span className="modified-mark" />}
{/* 6px amber dot — shows unsaved changes */}
\`\`\`

## Row action menu

\`\`\`jsx
<div className="row-menu-wrap">
  <div className="row-menu">
    <button>Edit</button>
    <div className="sep" />
    <button className="danger">Delete</button>
  </div>
</div>
\`\`\`

## CSS output rules

1. All colors via \`--en-*\` variables. Never hardcode.
2. Typography via \`.en-body2\`, \`.en-subtitle2\`, etc. or inline \`font:\` shorthand matching the scale.
3. Spacing in multiples of 4px.
4. Transitions: \`var(--en-duration-short) var(--en-easing)\`.
5. Use \`box-sizing: border-box\` on all elements.
6. Cards always \`border-radius: var(--en-radius-large)\` (16px).
7. Inputs/buttons always \`border-radius: var(--en-radius-regular)\` (8px).
`,b8=`# ennabl Shared Components

These components are available as globals in the preview. Use them directly — no imports needed.

---

## Button

Canonical button. Use instead of bare \`<button className="btn ...">\` to get consistent loading + disabled states.

\`\`\`jsx
<Button variant="primary" onClick={save}>Save changes</Button>
<Button variant="secondary" icon={<IconPlus size={14} />}>Add row</Button>
<Button variant="text">Cancel</Button>
<Button variant="danger">Delete</Button>
<Button variant="primary" loading={saving}>Saving…</Button>
<Button variant="primary" disabled>Unavailable</Button>
<Button variant="icon" onClick={edit}><IconEdit size={16} /></Button>
<Button variant="secondary" size="sm">Small</Button>
\`\`\`

Props:
- \`variant\` \`'primary' | 'secondary' | 'text' | 'danger' | 'icon' | 'link'\` (default \`'primary'\`)
- \`size\` \`'sm'\` — smaller 12px padding variant
- \`loading\` boolean — shows spinner, disables click
- \`disabled\` boolean
- \`icon\` ReactNode — shown left of label (hidden when loading)
- \`className\` string — extra classes
- All standard \`<button>\` props (\`onClick\`, \`type\`, etc.)

---

## FormField

Label + input wrapper with hint and error states.

\`\`\`jsx
<FormField label="Agency name" hint="Shown on all proposals" htmlFor="agency">
  <Input id="agency" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Acme Insurance" />
</FormField>

<FormField label="Notes" error={errors.notes}>
  <Input multiline value={notes} onChange={e => setNotes(e.target.value)} rows={4} />
</FormField>
\`\`\`

Props:
- \`label\` string
- \`hint\` string — shown below input when no error
- \`error\` string — shown below input in red (takes priority over hint)
- \`htmlFor\` string — links label to input \`id\`

---

## Input

Styled text input or textarea that matches the design system.

\`\`\`jsx
<Input value={v} onChange={e => setV(e.target.value)} placeholder="Search…" />
<Input multiline value={v} onChange={e => setV(e.target.value)} rows={3} />
<Input error value={v} onChange={e => setV(e.target.value)} /> {/* red border */}
\`\`\`

Props:
- \`multiline\` boolean — renders \`<textarea>\` instead of \`<input>\`
- \`error\` boolean — applies red border + focus ring
- All standard \`<input>\` / \`<textarea>\` props

Use inside \`<FormField>\` for labels and error messages.

---

## Table

Data table with optional sorting, row actions, and empty state.

\`\`\`jsx
const columns = [
  { key: 'name',   label: 'Name',   sortable: true, width: '40%' },
  { key: 'status', label: 'Status', render: row => <Badge variant={row.active ? 'success' : 'default'}>{row.active ? 'Active' : 'Inactive'}</Badge> },
  { key: 'date',   label: 'Updated' },
]

<Table
  columns={columns}
  rows={data}
  sortKey={sortKey}
  sortDir={sortDir}
  onSort={(key, dir) => { setSortKey(key); setSortDir(dir) }}
  emptyState={<>No results — <button className="btn btn-text" onClick={clear}>clear filters</button></>}
  getRowActions={row => (
    <>
      <Button variant="icon" onClick={() => edit(row)}><IconEdit size={14} /></Button>
      <Button variant="icon" onClick={() => del(row)}><IconTrash size={14} /></Button>
    </>
  )}
/>
\`\`\`

Props:
- \`columns\` array of \`{ key, label, sortable?, width?, render?(row) => node }\`
- \`rows\` array of objects — use an \`id\` field for stable keys
- \`sortKey\` string — currently sorted column key
- \`sortDir\` \`'asc' | 'desc'\`
- \`onSort(key, dir)\` — called when a sortable header is clicked
- \`getRowActions(row)\` — renders action buttons in the last column
- \`emptyState\` ReactNode — shown when rows is empty (defaults to "No data")
- \`compact\` boolean — tighter row padding

---

## Badge

Small status label. Use for status, labels, and counts.

\`\`\`jsx
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Overdue</Badge>
<Badge variant="primary">New</Badge>
<Badge variant="default">Draft</Badge>
<Badge variant="success" icon={<IconCheck size={10} />}>Verified</Badge>
\`\`\`

Props:
- \`variant\` \`'default' | 'primary' | 'success' | 'warning' | 'error'\`
- \`icon\` ReactNode — shown left of text

---

---

## CollapsibleSection

Collapsible card section with an optional unsaved-changes dot.

\`\`\`jsx
<CollapsibleSection title="Accounts in proposal" defaultOpen modified={false}>
  {/* content */}
</CollapsibleSection>
\`\`\`

Props:
- \`title\` string — section heading
- \`defaultOpen\` boolean (default: true)
- \`modified\` boolean — shows amber dot when true
- \`children\` ReactNode

---

## EditableField

Inline-editable label/textarea with unsaved indicator.

\`\`\`jsx
<EditableField
  label="About Us"
  value={agency.aboutUs}
  multiline
  modified={modified.aboutUs}
  onChange={val => setAgency(a => ({ ...a, aboutUs: val }))}
/>
\`\`\`

Props:
- \`label\` string
- \`value\` string
- \`multiline\` boolean — textarea vs input
- \`modified\` boolean — shows amber dot
- \`onChange\` (value: string) => void

---

## TemplatePicker

Dropdown picker for selecting/managing named templates. Shows search, default-star, and per-row actions.

\`\`\`jsx
<TemplatePicker
  templates={templates}
  activeId={activeId}
  isDirty={dirty}
  onApply={id => applyTemplate(id)}
  onSaveAsNew={() => openSaveDialog()}
  onManageOpen={() => setManageOpen(true)}
  onEdit={id => openEditDialog(id)}
  onSetDefault={id => setDefault(id)}
  onDuplicate={id => duplicate(id)}
  onDelete={id => deleteTemplate(id)}
/>
\`\`\`

Template shape:
\`\`\`js
{
  id: string,
  name: string,
  description: string,
  isDefault: boolean,
  shared: boolean,
  owner: { name: string, initials: string, isYou: boolean },
  updatedAt: string (ISO),
  usageCount: number,
}
\`\`\`

---

## SaveTemplateDialog

Modal for creating or editing a named template.

\`\`\`jsx
<SaveTemplateDialog
  mode="fork"           // 'create' | 'edit' | 'fork'
  initial={{ name: '', description: '', isDefault: false, shared: true }}
  templates={templates} // for duplicate-name warning
  onClose={() => setDialog(null)}
  onSubmit={vals => handleSave(vals)}
/>
\`\`\`

\`onSubmit\` receives \`{ name, description, isDefault, shared }\`.

---

## UpdateTemplateDialog

Confirmation modal for saving changes to an existing template.

\`\`\`jsx
<UpdateTemplateDialog
  template={activeTpl}
  summary={['Producer team: 3 → 4 members', 'Agency name updated']}
  onClose={() => setDialog(false)}
  onConfirm={() => confirmUpdate()}
  onSaveAsNew={() => { closeDialog(); openSaveAsNew(); }}
/>
\`\`\`

---

## ManageModal

Full-screen modal for browsing, applying, editing, duplicating, and deleting templates.

\`\`\`jsx
<ManageModal
  templates={templates}
  activeId={activeId}
  onClose={() => setManageOpen(false)}
  onApply={id => applyTemplate(id)}
  onEdit={id => openEditDialog(id)}
  onDuplicate={id => duplicate(id)}
  onDelete={id => confirmDelete(id)}
  onSetDefault={id => setDefault(id)}
  onCreate={() => { setManageOpen(false); openSaveDialog(); }}
/>
\`\`\`

---

## DeleteConfirm

Destructive confirmation modal. CTA and copy are fully customisable.

\`\`\`jsx
// Default — "Delete template"
<DeleteConfirm
  template={templateToDelete}
  onClose={() => setDeleteTarget(null)}
  onConfirm={() => confirmDelete()}
/>

// Custom label + copy
<DeleteConfirm
  template={item}
  confirmLabel="Delete Forever"
  title={\`Permanently delete "\${item.name}"?\`}
  message="This cannot be undone."
  onClose={handleClose}
  onConfirm={handleConfirm}
/>
\`\`\`

Props:
- \`template\` \`{ name, usageCount }\` — used in default title/message
- \`confirmLabel\` string (default: \`'Delete template'\`) — CTA text
- \`title\` string — overrides the default title
- \`message\` string | ReactNode — overrides the default body copy
- \`onClose\` () => void
- \`onConfirm\` () => void

---

## Custom dialogs (build your own)

Use these CSS classes to build any dialog that matches the ennabl design:

\`\`\`jsx
function MyDialog({ onClose, onConfirm }) {
  return (
    <Scrim onClose={onClose}>
      <div className="dialog" onClick={e => e.stopPropagation()}>
        <div className="dialog-head">
          <div>
            <div className="dialog-title">Are you sure?</div>
            <div className="dialog-sub">This action cannot be undone.</div>
          </div>
          <button className="btn-icon" onClick={onClose}><IconClose size={16} /></button>
        </div>
        <div className="dialog-foot">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </Scrim>
  );
}
\`\`\`

Classes:
- \`.scrim\` — fixed full-screen backdrop (use \`<Scrim onClose={fn}>\` component instead)
- \`.dialog\` — white card, centered, \`max-width: 560px\` by default; override with \`style={{ maxWidth: 440 }}\`
- \`.dialog-head\` — flex row: left content + close button
- \`.dialog-title\` — bold heading
- \`.dialog-sub\` — muted subtitle / body copy
- \`.dialog-foot\` — right-aligned action buttons row
- For destructive CTAs add \`style={{ background: 'var(--en-error-dark)' }}\` to \`.btn-primary\`

\`Scrim\` is available as a global — use it directly.

---

## Step3Body

The full Step 3 form body — producer tables + agency fields.

\`\`\`jsx
<Step3Body
  producerTables={producerTables}
  agency={agency}
  onProducerTablesChange={setProducerTables}
  onAgencyChange={setAgency}
  modified={modified}
/>
\`\`\`

\`modified\` shape: \`{ producers, tables: { [id]: bool }, agencyName, aboutUs, disclosures, serviceSummary, logoFile }\`

Agency shape: \`{ agencyName, aboutUs, disclosures, serviceSummary, logoFile }\`

---

## Toggle

Animated on/off switch. Supports controlled and uncontrolled usage.

\`\`\`jsx
<Toggle label="Notifications" />
<Toggle defaultChecked label="Dark mode" />
<Toggle checked={on} onChange={setOn} label="Feature flag" />
<Toggle disabled label="Locked" />
\`\`\`

Props:
- \`checked\` boolean — controlled value
- \`defaultChecked\` boolean — initial uncontrolled value
- \`onChange(value: bool)\` — called on toggle
- \`label\` string — shown to the right of the switch
- \`disabled\` boolean

---

## Avatar

Initials circle with 3 sizes. Defaults to purple (\`--en-data-accounts\`).

\`\`\`jsx
<Avatar name="Ismael Viejo" size="md" />
<Avatar name="John" size="sm" />
<Avatar name="Alice" size="lg" color="var(--en-primary)" />
\`\`\`

Props:
- \`name\` string — split into initials (max 2 chars)
- \`size\` \`'sm'\` (24px) | \`'md'\` (32px) | \`'lg'\` (40px)
- \`color\` CSS color string — defaults to \`var(--en-data-accounts)\`

---

## Dialog

Modal overlay with title, subtitle, content slot, and optional footer row.

\`\`\`jsx
<Dialog
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm deletion"
  subtitle="This cannot be undone."
  footer={<>
    <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="danger" onClick={handleDelete}>Delete</Button>
  </>}
>
  <p className="en-body2">Are you sure you want to delete <strong>{item.name}</strong>?</p>
</Dialog>
\`\`\`

Props:
- \`open\` boolean
- \`onClose\` () => void — Escape key, X button, and backdrop click all call this
- \`title\` string
- \`subtitle\` string (optional)
- \`footer\` ReactNode (optional) — right-aligned action buttons
- \`width\` number (default 480)

---

## Chip

Dismissible pill tag with 5 color variants and 3 styles.

\`\`\`jsx
<Chip variant="primary">Producer</Chip>
<Chip variant="success" style="filled">Active</Chip>
<Chip variant="warning" dot>Pending</Chip>
<Chip variant="error" style="subtle" dismissible onDismiss={() => remove(id)}>Overdue</Chip>
\`\`\`

Props:
- \`variant\` \`'neutral' | 'primary' | 'success' | 'error' | 'warning'\`
- \`style\` \`'subtle'\` (outline tint) | \`'filled'\` (solid) | \`'dot'\` (tint + trailing dot)
- \`dot\` boolean — shorthand for \`style="dot"\`
- \`dismissible\` boolean — shows × button
- \`onDismiss\` () => void

---

## Select

Dropdown input with label, states, and option list.

\`\`\`jsx
<Select
  label="Policy type"
  options={['Commercial', 'Personal', 'Benefits']}
  placeholder="Select type..."
  onChange={val => setType(val)}
/>

// Object options with value/label
<Select
  label="Market"
  options={[{ value: 'wholesale', label: 'Wholesale' }, { value: 'retail', label: 'Retail' }]}
  value={market}
  onChange={setMarket}
/>
\`\`\`

Props:
- \`label\` string
- \`options\` \`string[]\` or \`{ value, label }[]\`
- \`placeholder\` string (default \`'Select option...'\`)
- \`value\` string — controlled value
- \`onChange(value)\` fn
- \`error\` string — shows red border + error text
- \`disabled\` boolean

---

## Stepper

Horizontal multi-step progress indicator. Connecting lines fill as steps complete.

\`\`\`jsx
<Stepper steps={[
  { label: 'Policy details', status: 'completed' },
  { label: 'Coverage',       status: 'active' },
  { label: 'Review',         status: 'upcoming' },
  { label: 'Confirm',        status: 'upcoming' },
]} />
\`\`\`

Props:
- \`steps\` array of \`{ label: string, status: 'completed' | 'active' | 'upcoming' }\`

---

## Tooltip

Dark tooltip shown on hover. Wraps any children — no position anchoring needed.

\`\`\`jsx
<Tooltip label="Download report" position="top">
  <Button variant="icon"><IconDownload size={16} /></Button>
</Tooltip>

<Tooltip label="GWP" description="Gross Written Premium for the policy year" position="bottom">
  <span className="en-body2">GWP</span>
</Tooltip>
\`\`\`

Props:
- \`label\` string — bold heading (required to show tooltip)
- \`description\` string (optional) — secondary line
- \`position\` \`'top'\` | \`'bottom'\` | \`'left'\` | \`'right'\` (default \`'top'\`)

---

## Usage notes

- All shared components use global React (\`const { useState } = React\` — no imports)
- All shared components use the ennabl CSS classes and \`--en-*\` variables
- Wrap dialogs/modals in a fragment after the main content — they render to fixed position overlays
- The \`Scrim\` component is the modal backdrop — used internally by dialogs, rarely needed directly
`,v8=`You are an expert UI engineer for ennabl, an insurance analytics platform for insurance agencies and brokers.

Your job: generate React JSX + CSS from PRD descriptions, strictly using the ennabl design system.

## Output format

Always respond with:
1. A \`\`\`jsx code block — the full, self-contained component
2. One sentence explaining key decisions

**Code must follow this exact structure:**
\`\`\`jsx
const { useState, useEffect, useMemo, useCallback, useRef } = React;

function App() {
  // state, handlers ...
  return (
    <>
      <style>{\`
        /* component-specific CSS only — reuse --en-* vars */
        .my-thing { color: var(--en-primary); }
      \`}</style>
      <div className="stage">
        {/* content */}
      </div>
    </>
  );
}
\`\`\`

Rules:
- Use \`const { useState, ... } = React;\` — NEVER \`import\` statements
- Name the root component \`App\`
- Do NOT include \`ReactDOM.createRoot\` — the preview handles rendering
- Put component-specific styles in the \`<style>\` tag inside the fragment
- Make the component fully self-contained — no external sub-component imports

## Hard rules

- NEVER hardcode hex/rgba — always use \`--en-*\` CSS variables
- NEVER use Tailwind unless the PRD explicitly requests it
- ALWAYS use \`.en-body2\`, \`.en-subtitle2\` etc. for typography
- Use \`box-sizing: border-box\` on all elements
- Cards: \`border-radius: 16px\` (var(--en-radius-large))
- Buttons/inputs: \`border-radius: 8px\` (var(--en-radius-regular))
- Spacing in multiples of 4px
- Transitions: \`200ms cubic-bezier(0.4, 0, 0.2, 1)\`
- NEVER use custom SVGs, \`<img>\`, or emoji as icons — only use the \`Icon*\` globals listed above. If no matching icon exists, use a short text label or initials badge instead.

## Available globals in the preview

React hooks: \`useState\`, \`useEffect\`, \`useMemo\`, \`useCallback\`, \`useRef\`
Icons — Phosphor Regular, all available as globals (use ONLY these):
\`IconCheck\` \`IconChevronDown\` \`IconChevronUp\` \`IconPlus\` \`IconEdit\` \`IconEditFill\`
\`IconTrash\` \`IconTrashFill\` \`IconGear\` \`IconSearch\` \`IconStar\` \`IconCopy\`
\`IconClose\` \`IconMore\` \`IconShare\` \`IconExternal\` \`IconRevert\` \`IconUsers\`
\`IconInfo\` \`IconUpload\` \`IconDownload\`
Props: \`size\` (number, default 16), \`style\`, \`className\`. \`IconStar\` also accepts \`filled\` (boolean).
Charts: \`Recharts\` global — destructure \`BarChart\`, \`LineChart\`, \`PieChart\`, \`ResponsiveContainer\`, etc.
Design system CSS (\`--en-*\` vars + \`.en-*\` classes): loaded globally, use freely

## Design tokens

${m8}

## Component patterns

${g8}

## Shared components (available as globals in the preview)

${b8}

## Context

The generated code runs inside a Vite + React app. The ennabl design system CSS (colors_and_type.css + styles.css) is already loaded globally — you can use all \`--en-*\` variables and \`.en-*\` classes directly without importing them.`,y8="https://api.anthropic.com/v1/messages";function x8(s){return s==="claude-opus-4-7"?{max_tokens:8192,thinking:{type:"enabled",budget_tokens:5e3}}:{max_tokens:8192}}async function S8({messages:s,onText:l,onDone:i}){var x,S,T,N,_,z,Z;const r=zp(),u=await fetch(y8,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":kp(),"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:r,...x8(r),system:[{type:"text",text:v8,cache_control:{type:"ephemeral"}}],messages:s,stream:!0})});if(!u.ok){const q=await u.json().catch(()=>({}));throw new Error(((x=q.error)==null?void 0:x.message)||`API error ${u.status}`)}const d=u.body.getReader(),f=new TextDecoder;let h=0,g=0,v=0;for(;;){const{done:q,value:Y}=await d.read();if(q)break;const I=f.decode(Y).split(`
`);for(const Q of I){if(!Q.startsWith("data: "))continue;const F=Q.slice(6).trim();if(!(!F||F==="[DONE]"))try{const K=JSON.parse(F);K.type==="message_start"&&(h=((T=(S=K.message)==null?void 0:S.usage)==null?void 0:T.input_tokens)??0,v=((_=(N=K.message)==null?void 0:N.usage)==null?void 0:_.cache_read_input_tokens)??0),K.type==="content_block_delta"&&((z=K.delta)==null?void 0:z.type)==="text_delta"&&l(K.delta.text),K.type==="message_delta"&&(g=((Z=K.usage)==null?void 0:Z.output_tokens)??0)}catch{}}}i({inputTokens:h,outputTokens:g,cacheReadTokens:v})}const jp="ennabl_builder_reports",$c={input:15/1e6,output:75/1e6,cacheRead:1.5/1e6};function w8({inputTokens:s=0,outputTokens:l=0,cacheReadTokens:i=0}){return Math.max(0,s-i)*$c.input+i*$c.cacheRead+l*$c.output}function C8(s){return{id:`s_${Date.now()}`,prdName:s,startedAt:new Date().toISOString(),iterations:0,inputTokens:0,outputTokens:0,cacheReadTokens:0,cost:0,componentsUsed:[],rating:null,accepted:!1}}function _p(){try{return JSON.parse(localStorage.getItem(jp)||"{}")}catch{return{}}}function A8(s){localStorage.setItem(jp,JSON.stringify(s))}function lu(s){const l=_p(),i=s.prdName;l[i]||(l[i]=[]);const r=l[i].findIndex(u=>u.id===s.id);r>=0?l[i][r]=s:l[i].unshift(s),A8(l)}function Jc(s){return _p()[s]||[]}function E8(s){return s?["CollapsibleSection","EditableField","TemplatePicker","SaveTemplateDialog","UpdateTemplateDialog","ManageModal","DeleteConfirm","Step3Body","ProducerTable"].filter(i=>s.includes(i)):[]}function N8(s){if(!s.length)return null;const l=s.filter(i=>i.accepted&&i.iterations<=2).length;return Math.round(l/s.length*100)}const T8=new Set(["--en-primary","--en-primary-light","--en-primary-dark","--en-action-hover","--en-outlined-hover","--en-fg","--en-fg-secondary","--en-fg-disabled","--en-bg","--en-bg-grey","--en-bg-dark-grey","--en-bg-hover","--en-bg-active","--en-secondary","--en-secondary-dark","--en-border","--en-divider","--en-error","--en-error-dark","--en-success","--en-warning","--en-warning-dark","--en-icon","--en-icon-secondary","--en-sidebar","--en-logo-primary","--en-logo-accent","--en-radius-sm","--en-radius","--en-radius-regular","--en-radius-medium","--en-radius-large","--en-radius-xl","--en-shadow-menu","--en-shadow-tooltip","--en-shadow-card-hover","--en-duration-short","--en-easing","--en-font-sans"]),D8=new Set(["en-h3","en-h4","en-h5","en-body1","en-body1-bold","en-body2","en-body2-bold","en-body3","en-body3-bold","en-subtitle1","en-subtitle2","en-subtitle3","en-overline","en-caption","en-table-header","en-table-text"]),k8=new Set(["IconCheck","IconChevronDown","IconChevronUp","IconClose","IconCopy","IconDownload","IconEdit","IconEditFill","IconExternal","IconGear","IconInfo","IconMore","IconPlus","IconRevert","IconSearch","IconShare","IconStar","IconTrash","IconTrashFill","IconUpload","IconUsers"]);function M8(s){const l=[],i=[...s.matchAll(/var\((--en-[a-z0-9-]+)/g)].map(h=>h[1]);[...new Set(i)].filter(h=>!T8.has(h)).forEach(h=>l.push({type:"token",msg:`unknown token ${h}`}));const r=[...s.matchAll(/className="([^"]+)"/g)].flatMap(h=>h[1].split(/\s+/)).filter(h=>h.startsWith("en-"));[...new Set(r)].filter(h=>!D8.has(h)).forEach(h=>l.push({type:"class",msg:`unknown class .${h}`}));const u=[...s.matchAll(/<(Icon[A-Z][A-Za-z]*)/g)].map(h=>h[1]);[...new Set(u)].filter(h=>!k8.has(h)).forEach(h=>l.push({type:"icon",msg:`unknown icon <${h} />`}));const d=s.replace(/\/\/.*$/gm,"").replace(/\/\*[\s\S]*?\*\//g,"");return[...new Set([...d.matchAll(/#[0-9A-Fa-f]{6}\b/g)].map(h=>h[0]))].forEach(h=>l.push({type:"color",msg:`raw color ${h} — use --en-* var`})),{ok:l.length===0,issues:l}}function R8(s){const l=s.match(/```(?:jsx?|tsx?|javascript|typescript)?\n([\s\S]*?)```/);return l?l[1].trim():null}function O8({prd:s,messages:l,setMessages:i,onCodeGenerated:r,onSwitchToPrd:u,onIterationComplete:d,initTrigger:f}){const[h,g]=m.useState(""),[v,x]=m.useState(!1),[S,T]=m.useState(zp),N=m.useRef(null),_=m.useRef(null);m.useEffect(()=>{var q;(q=N.current)==null||q.scrollIntoView({behavior:"smooth"})},[l]),m.useEffect(()=>{f>0&&s&&!v&&l.length===0&&z("Build a complete UI from this PRD.")},[f]);async function z(q){const Y=(q??h).trim();if(!Y||v)return;const I={role:"user",content:Y},Q=s?`

---
PRD: ${s.name}

${s.content}
---
`:"",F=l.map(({role:B,content:P})=>({role:B,content:P})),K=[...s&&l.length===0?[{role:"user",content:`${Q}
${Y}`}]:[...F,I]];i(B=>[...B,I]),q||g(""),x(!0),i(B=>[...B,{role:"assistant",content:""}]);try{let B="",P=null;await S8({messages:K,onText:ne=>{B+=ne,i(se=>{const re=[...se];return re[re.length-1]={role:"assistant",content:B},re})},onDone:ne=>{P=ne}});const $=R8(B);if($){const ne=B.replace(/```[\s\S]*?```/g,"").trim();r($,ne);const se=M8($);i(re=>{const he=[...re];return he[he.length-1]={...he[he.length-1],validation:se},he})}if(d){const ne=P||{};d({inputTokens:ne.inputTokens||0,outputTokens:ne.outputTokens||0,cacheReadTokens:ne.cacheReadTokens||0,componentsUsed:E8($)})}}catch(B){i(P=>{const $=[...P];return $[$.length-1]={role:"assistant",content:`Error: ${B.message}`},$})}finally{x(!1)}}function Z(q){q.key==="Enter"&&!q.shiftKey&&(q.preventDefault(),z())}return y.jsxs("div",{className:"chat-panel",children:[y.jsxs("div",{className:"chat-messages",children:[l.length===0&&y.jsx("div",{className:"chat-empty",children:s?y.jsx(y.Fragment,{children:"PRD loaded. Describe the UI you want to build."}):y.jsx(y.Fragment,{children:"Load a PRD first, then describe what to build."})}),l.map((q,Y)=>{const I=v&&q.role==="assistant"&&Y===l.length-1;return y.jsx("div",{className:`chat-msg chat-msg--${q.role}`,children:q.role==="assistant"?I?y.jsx(z8,{}):y.jsx(j8,{content:q.content,validation:q.validation}):y.jsx("span",{children:q.content})},Y)}),y.jsx("div",{ref:N})]}),y.jsxs("div",{className:"chat-input-area",children:[y.jsx("div",{className:"chat-model-row",children:f8.map(q=>y.jsx("button",{className:`chat-model-btn ${S===q.id?"chat-model-btn--active":""}`,onClick:()=>{T(q.id),h8(q.id)},title:q.note,children:q.label},q.id))}),y.jsxs("div",{className:"chat-input-row",children:[y.jsx("textarea",{ref:_,className:"chat-input",placeholder:s?`Build from ${s.name}…`:"Load a PRD first…",value:h,onChange:q=>g(q.target.value),onKeyDown:Z,disabled:!s||v,rows:3}),y.jsx("button",{className:"chat-send-btn",onClick:z,disabled:!s||!h.trim()||v,children:v?y.jsx("span",{className:"chat-spinner"}):"↑"})]})]})]})}const Y1=[{icon:"✦",verb:"Reading PRD"},{icon:"◎",verb:"Mapping structure"},{icon:"⚡",verb:"Designing layout"},{icon:"⬡",verb:"Building components"},{icon:"↑",verb:"Writing code"},{icon:"✦",verb:"Polishing output"}];function z8(){const[s,l]=m.useState(0);m.useEffect(()=>{const u=setInterval(()=>l(d=>(d+1)%Y1.length),2e3);return()=>clearInterval(u)},[]);const{icon:i,verb:r}=Y1[s];return y.jsxs("div",{className:"thinking-bubble",children:[y.jsx("span",{className:"thinking-icon",children:i},s),y.jsx("span",{className:"thinking-verb",children:r},r),y.jsxs("span",{className:"thinking-dots",children:[y.jsx("span",{}),y.jsx("span",{}),y.jsx("span",{})]})]})}function j8({content:s,validation:l}){if(/```/.test(s)){const r=s.replace(/```[\s\S]*?```/g,"").trim();return y.jsxs("div",{className:"chat-done-card",children:[y.jsx("span",{className:"chat-done-icon",children:"✓"}),y.jsxs("div",{children:[y.jsx("div",{className:"chat-done-title",children:"Design ready"}),r&&y.jsx("div",{className:"chat-done-sub",children:r}),l&&y.jsxs("div",{className:`chat-done-validation ${l.ok?"chat-done-validation--ok":"chat-done-validation--warn"}`,children:[l.ok?"✓ tokens clean":l.issues.slice(0,4).map((u,d)=>y.jsxs("div",{children:["⚠ ",u.msg]},d)),l&&!l.ok&&l.issues.length>4&&y.jsxs("div",{children:["+",l.issues.length-4," more"]})]})]})]})}return y.jsx("div",{className:"chat-msg-content",children:s})}function _8({value:s,onChange:l}){const[i,r]=m.useState(null);return y.jsx("div",{className:"stars",children:[1,2,3,4,5].map(u=>y.jsx("button",{className:`star-btn ${u<=(i??s??0)?"star-btn--on":""}`,onMouseEnter:()=>r(u),onMouseLeave:()=>r(null),onClick:()=>l(u),"aria-label":`Rate ${u} star${u>1?"s":""}`,children:"★"},u))})}function G1(s){return s>=1e3?`${(s/1e3).toFixed(1)}k`:String(s)}function X1(s){return s<.01?"<$0.01":`$${s.toFixed(2)}`}function L8(s){const l=new Date(s),i=new Date;if(l.toDateString()===i.toDateString())return"today";const r=Math.floor((i-l)/864e5);return r===1?"yesterday":r<7?`${r}d ago`:l.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function U8({session:s,prd:l,onSessionUpdate:i}){const[r,u]=m.useState([]);if(m.useEffect(()=>{l&&u(Jc(l.name))},[l,s]),!l)return y.jsx("div",{className:"report-empty",children:"Load a PRD to see reports."});const d=N8(r),f=r.length;r.some(x=>x.id===(s==null?void 0:s.id));function h(x){const S={...s,rating:x};i(S),lu(S),u(Jc(l.name))}function g(){const x={...s,accepted:!0};i(x),lu(x),u(Jc(l.name))}const v=r.filter(x=>x.id!==(s==null?void 0:s.id));return y.jsxs("div",{className:"report-tab",children:[s&&y.jsxs("section",{className:"report-section",children:[y.jsxs("div",{className:"report-section-label",children:["Current session",s.accepted&&y.jsx("span",{className:"report-badge report-badge--green",children:"Accepted"})]}),y.jsxs("div",{className:"report-metrics",children:[y.jsxs("div",{className:"report-metric",children:[y.jsx("span",{className:"report-metric-value",children:s.iterations}),y.jsx("span",{className:"report-metric-label",children:"iterations"}),s.iterations<=2&&s.iterations>0&&y.jsx("span",{className:"report-badge report-badge--green",children:"≤2 ✓"})]}),y.jsxs("div",{className:"report-metric",children:[y.jsx("span",{className:"report-metric-value",children:G1(s.inputTokens+s.outputTokens)}),y.jsx("span",{className:"report-metric-label",children:"tokens"})]}),y.jsxs("div",{className:"report-metric",children:[y.jsx("span",{className:"report-metric-value",children:X1(s.cost)}),y.jsx("span",{className:"report-metric-label",children:"cost"})]})]}),s.cacheReadTokens>0&&y.jsxs("div",{className:"report-cache-note",children:[G1(s.cacheReadTokens)," tokens from cache"]}),s.componentsUsed.length>0&&y.jsxs("div",{className:"report-components",children:[y.jsx("span",{className:"report-components-label",children:"Components used"}),y.jsx("div",{className:"report-chips",children:s.componentsUsed.map(x=>y.jsx("span",{className:"report-chip",children:x},x))})]}),y.jsxs("div",{className:"report-rating-row",children:[y.jsx("span",{className:"report-rating-label",children:"Rate this design"}),y.jsx(_8,{value:s.rating,onChange:h})]}),!s.accepted&&y.jsx("button",{className:"report-accept-btn",onClick:g,disabled:s.iterations===0,children:"✓ Accept design"})]}),f>0&&y.jsxs("section",{className:"report-section",children:[y.jsxs("div",{className:"report-section-label",children:["This PRD · ",f," session",f>1?"s":""]}),y.jsx("div",{className:"report-summary",children:d!==null&&y.jsxs("div",{className:"report-metric",children:[y.jsxs("span",{className:"report-metric-value report-metric-value--lg",children:[d,"%"]}),y.jsx("span",{className:"report-metric-label",children:"accepted in ≤2 iterations"})]})})]}),v.length>0&&y.jsxs("section",{className:"report-section",children:[y.jsx("div",{className:"report-section-label",children:"History"}),y.jsx("div",{className:"report-history",children:v.map(x=>y.jsxs("div",{className:"report-history-row",children:[y.jsxs("div",{className:"report-history-left",children:[y.jsx("span",{className:"report-history-date",children:L8(x.startedAt)}),y.jsxs("span",{className:"report-history-iter",children:[x.iterations," iter",x.iterations!==1?"s":""]}),x.accepted&&y.jsx("span",{className:"report-badge report-badge--green",children:"✓"}),x.iterations<=2&&x.accepted&&y.jsx("span",{className:"report-badge report-badge--blue",children:"≤2"})]}),y.jsxs("div",{className:"report-history-right",children:[x.rating&&y.jsxs("span",{className:"report-history-stars",children:["★".repeat(x.rating),"☆".repeat(5-x.rating)]}),y.jsx("span",{className:"report-history-cost",children:X1(x.cost)})]})]},x.id))})]}),!s&&f===0&&y.jsx("div",{className:"report-empty",children:"Start a chat to begin tracking."})]})}function H8({prd:s,messages:l,setMessages:i,onCodeGenerated:r,onIterationComplete:u,session:d,onSessionUpdate:f,initTrigger:h}){const[g,v]=m.useState("chat");return y.jsxs("div",{className:"right-panel",children:[y.jsxs("div",{className:"right-tabs",children:[y.jsx("button",{className:`right-tab ${g==="chat"?"right-tab--active":""}`,onClick:()=>v("chat"),children:"Chat"}),y.jsxs("button",{className:`right-tab ${g==="report"?"right-tab--active":""}`,onClick:()=>v("report"),children:["Report",(d==null?void 0:d.accepted)&&y.jsx("span",{className:"right-tab-dot right-tab-dot--green"}),d&&!d.accepted&&d.iterations>0&&y.jsx("span",{className:"right-tab-dot"})]})]}),y.jsxs("div",{className:"right-content",children:[y.jsx("div",{className:g!=="chat"?"right-panel-hidden":"",children:y.jsx(O8,{prd:s,messages:l,setMessages:i,onCodeGenerated:r,onIterationComplete:u,onSwitchToPrd:()=>v("prd"),initTrigger:h})}),g==="report"&&y.jsx(U8,{session:d,prd:s,onSessionUpdate:f})]})]})}function Z8({onDone:s}){const[l,i]=m.useState(""),[r,u]=m.useState(null);function d(){const f=l.trim();if(!f.startsWith("sk-ant-")&&!f.startsWith("sk-")){u("Paste your Anthropic API key — it starts with sk-ant-");return}r8(f),s()}return y.jsx("div",{className:"setup-overlay",children:y.jsxs("div",{className:"setup-card",children:[y.jsxs("div",{className:"setup-logo",children:[y.jsx("span",{className:"setup-logo-name",children:"ennabl"}),y.jsx("span",{className:"setup-logo-suffix",children:"builder"})]}),y.jsxs("p",{className:"setup-desc",children:["Paste your Anthropic API key to get started.",y.jsx("br",{}),"It's stored only in your browser's local storage."]}),y.jsx("label",{className:"setup-label",children:"Anthropic API Key"}),y.jsx("input",{className:"setup-input",type:"password",value:l,onChange:f=>{i(f.target.value),u(null)},onKeyDown:f=>f.key==="Enter"&&d(),placeholder:"sk-ant-...",spellCheck:!1,autoFocus:!0}),r&&y.jsx("p",{className:"setup-error",children:r}),y.jsx("button",{className:"setup-btn",onClick:d,disabled:!l.trim(),children:"Save & continue"})]})})}class bt extends Error{constructor(l){var i,r,u,d;super("ClientResponseError"),this.url="",this.status=0,this.response={},this.isAbort=!1,this.originalError=null,Object.setPrototypeOf(this,bt.prototype),l!==null&&typeof l=="object"&&(this.originalError=l.originalError,this.url=typeof l.url=="string"?l.url:"",this.status=typeof l.status=="number"?l.status:0,this.isAbort=!!l.isAbort||l.name==="AbortError"||l.message==="Aborted",l.response!==null&&typeof l.response=="object"?this.response=l.response:l.data!==null&&typeof l.data=="object"?this.response=l.data:this.response={}),this.originalError||l instanceof bt||(this.originalError=l),this.name="ClientResponseError "+this.status,this.message=(i=this.response)==null?void 0:i.message,this.message||(this.isAbort?this.message="The request was aborted (most likely autocancelled; you can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation).":(d=(u=(r=this.originalError)==null?void 0:r.cause)==null?void 0:u.message)!=null&&d.includes("ECONNREFUSED ::1")?this.message="Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).":this.message="Something went wrong."),this.cause=this.originalError}get data(){return this.response}toJSON(){return{...this}}}const or=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function B8(s,l){const i={};if(typeof s!="string")return i;const r=Object.assign({},{}).decode||q8;let u=0;for(;u<s.length;){const d=s.indexOf("=",u);if(d===-1)break;let f=s.indexOf(";",u);if(f===-1)f=s.length;else if(f<d){u=s.lastIndexOf(";",d-1)+1;continue}const h=s.slice(u,d).trim();if(i[h]===void 0){let g=s.slice(d+1,f).trim();g.charCodeAt(0)===34&&(g=g.slice(1,-1));try{i[h]=r(g)}catch{i[h]=g}}u=f+1}return i}function I1(s,l,i){const r=Object.assign({},i||{}),u=r.encode||V8;if(!or.test(s))throw new TypeError("argument name is invalid");const d=u(l);if(d&&!or.test(d))throw new TypeError("argument val is invalid");let f=s+"="+d;if(r.maxAge!=null){const h=r.maxAge-0;if(isNaN(h)||!isFinite(h))throw new TypeError("option maxAge is invalid");f+="; Max-Age="+Math.floor(h)}if(r.domain){if(!or.test(r.domain))throw new TypeError("option domain is invalid");f+="; Domain="+r.domain}if(r.path){if(!or.test(r.path))throw new TypeError("option path is invalid");f+="; Path="+r.path}if(r.expires){if(!(function(g){return Object.prototype.toString.call(g)==="[object Date]"||g instanceof Date})(r.expires)||isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");f+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(f+="; HttpOnly"),r.secure&&(f+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":f+="; Priority=Low";break;case"medium":f+="; Priority=Medium";break;case"high":f+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:f+="; SameSite=Strict";break;case"lax":f+="; SameSite=Lax";break;case"strict":f+="; SameSite=Strict";break;case"none":f+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return f}function q8(s){return s.indexOf("%")!==-1?decodeURIComponent(s):s}function V8(s){return encodeURIComponent(s)}const Y8=typeof navigator<"u"&&navigator.product==="ReactNative"||typeof global<"u"&&global.HermesInternal;let Lp;function kl(s){if(s)try{const l=decodeURIComponent(Lp(s.split(".")[1]).split("").map((function(i){return"%"+("00"+i.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(l)||{}}catch{}return{}}function Up(s,l=0){let i=kl(s);return!(Object.keys(i).length>0&&(!i.exp||i.exp-l>Date.now()/1e3))}Lp=typeof atob!="function"||Y8?s=>{let l=String(s).replace(/=+$/,"");if(l.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var i,r,u=0,d=0,f="";r=l.charAt(d++);~r&&(i=u%4?64*i+r:r,u++%4)?f+=String.fromCharCode(255&i>>(-2*u&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return f}:atob;const Q1="pb_auth";class xu{constructor(){this.baseToken="",this.baseModel=null,this._onChangeCallbacks=[]}get token(){return this.baseToken}get record(){return this.baseModel}get model(){return this.baseModel}get isValid(){return!Up(this.token)}get isSuperuser(){var i,r;let l=kl(this.token);return l.type=="auth"&&(((i=this.record)==null?void 0:i.collectionName)=="_superusers"||!((r=this.record)!=null&&r.collectionName)&&l.collectionId=="pbc_3142635823")}get isAdmin(){return console.warn("Please replace pb.authStore.isAdmin with pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"),this.isSuperuser}get isAuthRecord(){return console.warn("Please replace pb.authStore.isAuthRecord with !pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"),kl(this.token).type=="auth"&&!this.isSuperuser}save(l,i){this.baseToken=l||"",this.baseModel=i||null,this.triggerChange()}clear(){this.baseToken="",this.baseModel=null,this.triggerChange()}loadFromCookie(l,i=Q1){const r=B8(l||"")[i]||"";let u={};try{u=JSON.parse(r),(typeof u===null||typeof u!="object"||Array.isArray(u))&&(u={})}catch{}this.save(u.token||"",u.record||u.model||null)}exportToCookie(l,i=Q1){var g,v;const r={secure:!0,sameSite:!0,httpOnly:!0,path:"/"},u=kl(this.token);r.expires=u!=null&&u.exp?new Date(1e3*u.exp):new Date("1970-01-01"),l=Object.assign({},r,l);const d={token:this.token,record:this.record?JSON.parse(JSON.stringify(this.record)):null};let f=I1(i,JSON.stringify(d),l);const h=typeof Blob<"u"?new Blob([f]).size:f.length;if(d.record&&h>4096){d.record={id:(g=d.record)==null?void 0:g.id,email:(v=d.record)==null?void 0:v.email};const x=["collectionId","collectionName","verified"];for(const S in this.record)x.includes(S)&&(d.record[S]=this.record[S]);f=I1(i,JSON.stringify(d),l)}return f}onChange(l,i=!1){return this._onChangeCallbacks.push(l),i&&l(this.token,this.record),()=>{for(let r=this._onChangeCallbacks.length-1;r>=0;r--)if(this._onChangeCallbacks[r]==l)return delete this._onChangeCallbacks[r],void this._onChangeCallbacks.splice(r,1)}}triggerChange(){for(const l of this._onChangeCallbacks)l&&l(this.token,this.record)}}class G8 extends xu{constructor(l="pocketbase_auth"){super(),this.storageFallback={},this.storageKey=l,this._bindStorageEvent()}get token(){return(this._storageGet(this.storageKey)||{}).token||""}get record(){const l=this._storageGet(this.storageKey)||{};return l.record||l.model||null}get model(){return this.record}save(l,i){this._storageSet(this.storageKey,{token:l,record:i}),super.save(l,i)}clear(){this._storageRemove(this.storageKey),super.clear()}_storageGet(l){if(typeof window<"u"&&(window!=null&&window.localStorage)){const i=window.localStorage.getItem(l)||"";try{return JSON.parse(i)}catch{return i}}return this.storageFallback[l]}_storageSet(l,i){if(typeof window<"u"&&(window!=null&&window.localStorage)){let r=i;typeof i!="string"&&(r=JSON.stringify(i)),window.localStorage.setItem(l,r)}else this.storageFallback[l]=i}_storageRemove(l){var i;typeof window<"u"&&(window!=null&&window.localStorage)&&((i=window.localStorage)==null||i.removeItem(l)),delete this.storageFallback[l]}_bindStorageEvent(){typeof window<"u"&&(window!=null&&window.localStorage)&&window.addEventListener&&window.addEventListener("storage",(l=>{if(l.key!=this.storageKey)return;const i=this._storageGet(this.storageKey)||{};super.save(i.token||"",i.record||i.model||null)}))}}class Gn{constructor(l){this.client=l}}class X8 extends Gn{async getAll(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/settings",l)}async update(l,i){return i=Object.assign({method:"PATCH",body:l},i),this.client.send("/api/settings",i)}async testS3(l="storage",i){return i=Object.assign({method:"POST",body:{filesystem:l}},i),this.client.send("/api/settings/test/s3",i).then((()=>!0))}async testEmail(l,i,r,u){return u=Object.assign({method:"POST",body:{email:i,template:r,collection:l}},u),this.client.send("/api/settings/test/email",u).then((()=>!0))}async generateAppleClientSecret(l,i,r,u,d,f){return f=Object.assign({method:"POST",body:{clientId:l,teamId:i,keyId:r,privateKey:u,duration:d}},f),this.client.send("/api/settings/apple/generate-client-secret",f)}}const I8=["requestKey","$cancelKey","$autoCancel","fetch","headers","body","query","params","cache","credentials","headers","integrity","keepalive","method","mode","redirect","referrer","referrerPolicy","signal","window"];function Su(s){if(s){s.query=s.query||{};for(let l in s)I8.includes(l)||(s.query[l]=s[l],delete s[l])}}function wu(s){const l=[];for(const i in s){const r=encodeURIComponent(i),u=Array.isArray(s[i])?s[i]:[s[i]];for(let d of u)d=Q8(d),d!==null&&l.push(r+"="+d)}return l.join("&")}function Q8(s){return s==null?null:s instanceof Date?encodeURIComponent(s.toISOString().replace("T"," ")):encodeURIComponent(typeof s=="object"?JSON.stringify(s):s)}class Hp extends Gn{constructor(){super(...arguments),this.clientId="",this.eventSource=null,this.subscriptions={},this.lastSentSubscriptions=[],this.maxConnectTimeout=15e3,this.reconnectAttempts=0,this.maxReconnectAttempts=1/0,this.predefinedReconnectIntervals=[200,300,500,1e3,1200,1500,2e3],this.pendingConnects=[],this.pendingSubmits=[],this.isProcessingPendingSubmits=!1}get isConnected(){return!!this.eventSource&&!!this.clientId&&!this.pendingConnects.length}async subscribe(l,i,r){var f;if(!l)throw new Error("topic must be set.");let u=l;if(r){Su(r=Object.assign({},r));const h="options="+encodeURIComponent(JSON.stringify({query:r.query,headers:r.headers}));u+=(u.includes("?")?"&":"?")+h}const d=function(h){const g=h;let v;try{v=JSON.parse(g==null?void 0:g.data)}catch{}i(v||{})};return this.subscriptions[u]||(this.subscriptions[u]=[]),this.subscriptions[u].push(d),this.isConnected?this.subscriptions[u].length===1?await this.submitSubscriptions():(f=this.eventSource)==null||f.addEventListener(u,d):await this.connect(),async()=>this.unsubscribeByTopicAndListener(l,d)}async unsubscribe(l){var i;if(l){const r=this.getSubscriptionsByTopic(l);for(let u in r)if(this.hasSubscriptionListeners(u)){for(let d of this.subscriptions[u])(i=this.eventSource)==null||i.removeEventListener(u,d);delete this.subscriptions[u]}}else this.subscriptions={};await this.submitSubscriptions()}async unsubscribeByPrefix(l){var r;let i=!1;for(let u in this.subscriptions)if((u+"?").startsWith(l)){i=!0;for(let d of this.subscriptions[u])(r=this.eventSource)==null||r.removeEventListener(u,d);delete this.subscriptions[u]}i&&await this.submitSubscriptions()}async unsubscribeByTopicAndListener(l,i){var u;const r=this.getSubscriptionsByTopic(l);for(let d in r){if(!Array.isArray(this.subscriptions[d])||!this.subscriptions[d].length)continue;let f=!1;for(let h=this.subscriptions[d].length-1;h>=0;h--)this.subscriptions[d][h]===i&&(f=!0,delete this.subscriptions[d][h],this.subscriptions[d].splice(h,1),(u=this.eventSource)==null||u.removeEventListener(d,i));f&&(this.subscriptions[d].length||delete this.subscriptions[d])}await this.submitSubscriptions()}hasSubscriptionListeners(l){var i,r;if(this.subscriptions=this.subscriptions||{},l)return!!((i=this.subscriptions[l])!=null&&i.length);for(let u in this.subscriptions)if((r=this.subscriptions[u])!=null&&r.length)return!0;return!1}async submitSubscriptions(){return new Promise(((l,i)=>{this.pendingSubmits.push({resolve:l,reject:i}),this.pendingSubmits.length==1&&queueMicrotask((()=>this.finalizePendingSubscriptions()))}))}async finalizePendingSubscriptions(){if(this.isProcessingPendingSubmits||!this.pendingSubmits.length)return;const l=this.pendingSubmits.slice();this.pendingSubmits=[],this.isProcessingPendingSubmits=!0;try{await this.sendSubscriptions();for(let i of l)i.resolve()}catch(i){for(let r of l)i?r.reject(i):r.resolve()}finally{this.isProcessingPendingSubmits=!1,this.pendingSubmits.length>0&&await this.finalizePendingSubscriptions()}}getSubscriptionsCancelKey(){return"realtime_"+this.clientId}getSubscriptionsByTopic(l){const i={};l=l.includes("?")?l:l+"?";for(let r in this.subscriptions)(r+"?").startsWith(l)&&(i[r]=this.subscriptions[r]);return i}getNonEmptySubscriptionKeys(){const l=[];for(let i in this.subscriptions)this.subscriptions[i].length&&l.push(i);return l}hasUnsentSubscriptions(){const l=this.getNonEmptySubscriptionKeys();if(l.length!=this.lastSentSubscriptions.length)return!0;for(const i of l)if(!this.lastSentSubscriptions.includes(i))return!0;return!1}async sendSubscriptions(){if(this.clientId){if(!this.hasSubscriptionListeners())return this.disconnect();if(this.hasUnsentSubscriptions())return this.addAllSubscriptionListeners(),this.lastSentSubscriptions=this.getNonEmptySubscriptionKeys(),this.client.send("/api/realtime",{method:"POST",body:{clientId:this.clientId,subscriptions:this.lastSentSubscriptions},requestKey:this.getSubscriptionsCancelKey()}).catch((l=>{if(!(l!=null&&l.isAbort))throw l}))}}addAllSubscriptionListeners(){if(this.eventSource){this.removeAllSubscriptionListeners();for(let l in this.subscriptions)for(let i of this.subscriptions[l])this.eventSource.addEventListener(l,i)}}removeAllSubscriptionListeners(){if(this.eventSource)for(let l in this.subscriptions)for(let i of this.subscriptions[l])this.eventSource.removeEventListener(l,i)}async connect(){if(!(this.reconnectAttempts>0))return new Promise(((l,i)=>{this.pendingConnects.push({resolve:l,reject:i}),this.pendingConnects.length==1&&queueMicrotask((()=>this.initConnect()))}))}initConnect(){this.disconnect(!0),clearTimeout(this.connectTimeoutId),this.connectTimeoutId=setTimeout((()=>{this.connectErrorHandler(new Error("EventSource connect took too long."))}),this.maxConnectTimeout),this.eventSource=new EventSource(this.client.buildURL("/api/realtime")),this.eventSource.onerror=l=>{this.connectErrorHandler(new Error("Failed to establish realtime connection."))},this.eventSource.addEventListener("PB_CONNECT",(l=>{const i=l;this.clientId=i==null?void 0:i.lastEventId,this.lastSentSubscriptions=[],this.submitSubscriptions().then((()=>{for(let u of this.pendingConnects)u.resolve();this.pendingConnects=[],this.reconnectAttempts=0,clearTimeout(this.reconnectTimeoutId),clearTimeout(this.connectTimeoutId);const r=this.getSubscriptionsByTopic("PB_CONNECT");for(let u in r)for(let d of r[u])d(l)})).catch((r=>{this.clientId="",this.lastSentSubscriptions=[],this.connectErrorHandler(r)}))}))}connectErrorHandler(l){if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),!this.clientId&&!this.reconnectAttempts||this.reconnectAttempts>this.maxReconnectAttempts){for(let r of this.pendingConnects)r.reject(new bt(l));return this.pendingConnects=[],void this.disconnect()}this.disconnect(!0);const i=this.predefinedReconnectIntervals[this.reconnectAttempts]||this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length-1];this.reconnectAttempts++,this.reconnectTimeoutId=setTimeout((()=>{this.initConnect()}),i)}disconnect(l=!1){var i;if(this.clientId&&this.onDisconnect&&this.onDisconnect(Object.keys(this.subscriptions)),clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),this.removeAllSubscriptionListeners(),this.client.cancelRequest(this.getSubscriptionsCancelKey()),(i=this.eventSource)==null||i.close(),this.eventSource=null,this.clientId="",this.lastSentSubscriptions=[],!l){this.reconnectAttempts=0;for(let r of this.pendingConnects)r.resolve();this.pendingConnects=[]}}}class Zp extends Gn{decode(l){return l}async getFullList(l,i){if(typeof l=="number")return this._getFullList(l,i);let r=1e3;return(i=Object.assign({},l,i)).batch&&(r=i.batch,delete i.batch),this._getFullList(r,i)}async getList(l=1,i=30,r){return(r=Object.assign({method:"GET"},r)).query=Object.assign({page:l,perPage:i},r.query),this.client.send(this.baseCrudPath,r).then((u=>{var d;return u.items=((d=u.items)==null?void 0:d.map((f=>this.decode(f))))||[],u}))}async getFirstListItem(l,i){return(i=Object.assign({requestKey:"one_by_filter_"+this.baseCrudPath+"_"+l},i)).query=Object.assign({filter:l,skipTotal:1},i.query),this.getList(1,1,i).then((r=>{var u;if(!((u=r==null?void 0:r.items)!=null&&u.length))throw new bt({status:404,response:{code:404,message:"The requested resource wasn't found.",data:{}}});return r.items[0]}))}async getOne(l,i){if(!l)throw new bt({url:this.client.buildURL(this.baseCrudPath+"/"),status:404,response:{code:404,message:"Missing required record id.",data:{}}});return i=Object.assign({method:"GET"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l),i).then((r=>this.decode(r)))}async create(l,i){return i=Object.assign({method:"POST",body:l},i),this.client.send(this.baseCrudPath,i).then((r=>this.decode(r)))}async update(l,i,r){return r=Object.assign({method:"PATCH",body:i},r),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l),r).then((u=>this.decode(u)))}async delete(l,i){return i=Object.assign({method:"DELETE"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l),i).then((()=>!0))}_getFullList(l=1e3,i){(i=i||{}).query=Object.assign({skipTotal:1},i.query);let r=[],u=async d=>this.getList(d,l||1e3,i).then((f=>{const h=f.items;return r=r.concat(h),h.length==f.perPage?u(d+1):r}));return u(1)}}function ga(s,l,i,r){const u=r!==void 0;return u||i!==void 0?u?(console.warn(s),l.body=Object.assign({},l.body,i),l.query=Object.assign({},l.query,r),l):Object.assign(l,i):l}function Fc(s){var l;(l=s._resetAutoRefresh)==null||l.call(s)}class K8 extends Zp{constructor(l,i){super(l),this.collectionIdOrName=i}get baseCrudPath(){return this.baseCollectionPath+"/records"}get baseCollectionPath(){return"/api/collections/"+encodeURIComponent(this.collectionIdOrName)}get isSuperusers(){return this.collectionIdOrName=="_superusers"||this.collectionIdOrName=="_pbc_2773867675"}async subscribe(l,i,r){if(!l)throw new Error("Missing topic.");if(!i)throw new Error("Missing subscription callback.");return this.client.realtime.subscribe(this.collectionIdOrName+"/"+l,i,r)}async unsubscribe(l){return l?this.client.realtime.unsubscribe(this.collectionIdOrName+"/"+l):this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)}async getFullList(l,i){if(typeof l=="number")return super.getFullList(l,i);const r=Object.assign({},l,i);return super.getFullList(r)}async getList(l=1,i=30,r){return super.getList(l,i,r)}async getFirstListItem(l,i){return super.getFirstListItem(l,i)}async getOne(l,i){return super.getOne(l,i)}async create(l,i){return super.create(l,i)}async update(l,i,r){return super.update(l,i,r).then((u=>{var d,f,h;if(((d=this.client.authStore.record)==null?void 0:d.id)===(u==null?void 0:u.id)&&(((f=this.client.authStore.record)==null?void 0:f.collectionId)===this.collectionIdOrName||((h=this.client.authStore.record)==null?void 0:h.collectionName)===this.collectionIdOrName)){let g=Object.assign({},this.client.authStore.record.expand),v=Object.assign({},this.client.authStore.record,u);g&&(v.expand=Object.assign(g,u.expand)),this.client.authStore.save(this.client.authStore.token,v)}return u}))}async delete(l,i){return super.delete(l,i).then((r=>{var u,d,f;return!r||((u=this.client.authStore.record)==null?void 0:u.id)!==l||((d=this.client.authStore.record)==null?void 0:d.collectionId)!==this.collectionIdOrName&&((f=this.client.authStore.record)==null?void 0:f.collectionName)!==this.collectionIdOrName||this.client.authStore.clear(),r}))}authResponse(l){const i=this.decode((l==null?void 0:l.record)||{});return this.client.authStore.save(l==null?void 0:l.token,i),Object.assign({},l,{token:(l==null?void 0:l.token)||"",record:i})}async listAuthMethods(l){return l=Object.assign({method:"GET",fields:"mfa,otp,password,oauth2"},l),this.client.send(this.baseCollectionPath+"/auth-methods",l)}async authWithPassword(l,i,r){let u;r=Object.assign({method:"POST",body:{identity:l,password:i}},r),this.isSuperusers&&(u=r.autoRefreshThreshold,delete r.autoRefreshThreshold,r.autoRefresh||Fc(this.client));let d=await this.client.send(this.baseCollectionPath+"/auth-with-password",r);return d=this.authResponse(d),u&&this.isSuperusers&&(function(h,g,v,x){Fc(h);const S=h.beforeSend,T=h.authStore.record,N=h.authStore.onChange(((_,z)=>{(!_||(z==null?void 0:z.id)!=(T==null?void 0:T.id)||(z!=null&&z.collectionId||T!=null&&T.collectionId)&&(z==null?void 0:z.collectionId)!=(T==null?void 0:T.collectionId))&&Fc(h)}));h._resetAutoRefresh=function(){N(),h.beforeSend=S,delete h._resetAutoRefresh},h.beforeSend=async(_,z)=>{var I;const Z=h.authStore.token;if((I=z.query)!=null&&I.autoRefresh)return S?S(_,z):{url:_,sendOptions:z};let q=h.authStore.isValid;if(q&&Up(h.authStore.token,g))try{await v()}catch{q=!1}q||await x();const Y=z.headers||{};for(let Q in Y)if(Q.toLowerCase()=="authorization"&&Z==Y[Q]&&h.authStore.token){Y[Q]=h.authStore.token;break}return z.headers=Y,S?S(_,z):{url:_,sendOptions:z}}})(this.client,u,(()=>this.authRefresh({autoRefresh:!0})),(()=>this.authWithPassword(l,i,Object.assign({autoRefresh:!0},r)))),d}async authWithOAuth2Code(l,i,r,u,d,f,h){let g={method:"POST",body:{provider:l,code:i,codeVerifier:r,redirectURL:u,createData:d}};return g=ga("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, options?).",g,f,h),this.client.send(this.baseCollectionPath+"/auth-with-oauth2",g).then((v=>this.authResponse(v)))}authWithOAuth2(...l){if(l.length>1||typeof(l==null?void 0:l[0])=="string")return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."),this.authWithOAuth2Code((l==null?void 0:l[0])||"",(l==null?void 0:l[1])||"",(l==null?void 0:l[2])||"",(l==null?void 0:l[3])||"",(l==null?void 0:l[4])||{},(l==null?void 0:l[5])||{},(l==null?void 0:l[6])||{});const i=(l==null?void 0:l[0])||{};let r=null;i.urlCallback||(r=K1(void 0));const u=new Hp(this.client);function d(){r==null||r.close(),u.unsubscribe()}const f={},h=i.requestKey;return h&&(f.requestKey=h),this.listAuthMethods(f).then((g=>{const v=g.oauth2.providers.find((S=>S.name===i.provider));if(!v)throw new bt(new Error(`Missing or invalid provider "${i.provider}".`));const x=this.client.buildURL("/api/oauth2-redirect");return new Promise((async(S,T)=>{var _,z,Z;const N=h?(_=this.client.cancelControllers)==null?void 0:_[h]:void 0;N&&(N.signal.onabort=()=>{d(),T(new bt({isAbort:!0,message:"manually cancelled"}))}),u.onDisconnect=q=>{q.length&&T&&(d(),T(new bt(new Error("realtime connection interrupted"))))};try{await u.subscribe("@oauth2",(async Q=>{var K;const F=u.clientId;try{if(!Q.state||F!==Q.state)throw new Error("State parameters don't match.");if(Q.error||!Q.code)throw new Error("OAuth2 redirect error or missing code: "+Q.error);const B=Object.assign({},i);delete B.provider,delete B.scopes,delete B.createData,delete B.urlCallback,(K=N==null?void 0:N.signal)!=null&&K.onabort&&(N.signal.onabort=null);const P=await this.authWithOAuth2Code(v.name,Q.code,v.codeVerifier,x,i.createData,B);S(P)}catch(B){T(new bt(B))}d()}));const q={state:u.clientId};(z=i.scopes)!=null&&z.length&&(q.scope=i.scopes.join(" "));const Y=this._replaceQueryParams(v.authURL+x,q);await(i.urlCallback||function(Q){r?r.location.href=Q:r=K1(Q)})(Y)}catch(q){(Z=N==null?void 0:N.signal)!=null&&Z.onabort&&(N.signal.onabort=null),d(),T(new bt(q))}}))})).catch((g=>{throw d(),g}))}async authRefresh(l,i){let r={method:"POST"};return r=ga("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).",r,l,i),this.client.send(this.baseCollectionPath+"/auth-refresh",r).then((u=>this.authResponse(u)))}async requestPasswordReset(l,i,r){let u={method:"POST",body:{email:l}};return u=ga("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).",u,i,r),this.client.send(this.baseCollectionPath+"/request-password-reset",u).then((()=>!0))}async confirmPasswordReset(l,i,r,u,d){let f={method:"POST",body:{token:l,password:i,passwordConfirm:r}};return f=ga("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).",f,u,d),this.client.send(this.baseCollectionPath+"/confirm-password-reset",f).then((()=>!0))}async requestVerification(l,i,r){let u={method:"POST",body:{email:l}};return u=ga("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).",u,i,r),this.client.send(this.baseCollectionPath+"/request-verification",u).then((()=>!0))}async confirmVerification(l,i,r){let u={method:"POST",body:{token:l}};return u=ga("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).",u,i,r),this.client.send(this.baseCollectionPath+"/confirm-verification",u).then((()=>{const d=kl(l),f=this.client.authStore.record;return f&&!f.verified&&f.id===d.id&&f.collectionId===d.collectionId&&(f.verified=!0,this.client.authStore.save(this.client.authStore.token,f)),!0}))}async requestEmailChange(l,i,r){let u={method:"POST",body:{newEmail:l}};return u=ga("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).",u,i,r),this.client.send(this.baseCollectionPath+"/request-email-change",u).then((()=>!0))}async confirmEmailChange(l,i,r,u){let d={method:"POST",body:{token:l,password:i}};return d=ga("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).",d,r,u),this.client.send(this.baseCollectionPath+"/confirm-email-change",d).then((()=>{const f=kl(l),h=this.client.authStore.record;return h&&h.id===f.id&&h.collectionId===f.collectionId&&this.client.authStore.clear(),!0}))}async listExternalAuths(l,i){return this.client.collection("_externalAuths").getFullList(Object.assign({},i,{filter:this.client.filter("recordRef = {:id}",{id:l})}))}async unlinkExternalAuth(l,i,r){const u=await this.client.collection("_externalAuths").getFirstListItem(this.client.filter("recordRef = {:recordId} && provider = {:provider}",{recordId:l,provider:i}));return this.client.collection("_externalAuths").delete(u.id,r).then((()=>!0))}async requestOTP(l,i){return i=Object.assign({method:"POST",body:{email:l}},i),this.client.send(this.baseCollectionPath+"/request-otp",i)}async authWithOTP(l,i,r){return r=Object.assign({method:"POST",body:{otpId:l,password:i}},r),this.client.send(this.baseCollectionPath+"/auth-with-otp",r).then((u=>this.authResponse(u)))}async impersonate(l,i,r){(r=Object.assign({method:"POST",body:{duration:i}},r)).headers=r.headers||{},r.headers.Authorization||(r.headers.Authorization=this.client.authStore.token);const u=new Cu(this.client.baseURL,new xu,this.client.lang),d=await u.send(this.baseCollectionPath+"/impersonate/"+encodeURIComponent(l),r);return u.authStore.save(d==null?void 0:d.token,this.decode((d==null?void 0:d.record)||{})),u}_replaceQueryParams(l,i={}){let r=l,u="";l.indexOf("?")>=0&&(r=l.substring(0,l.indexOf("?")),u=l.substring(l.indexOf("?")+1));const d={},f=u.split("&");for(const h of f){if(h=="")continue;const g=h.split("=");d[decodeURIComponent(g[0].replace(/\+/g," "))]=decodeURIComponent((g[1]||"").replace(/\+/g," "))}for(let h in i)i.hasOwnProperty(h)&&(i[h]==null?delete d[h]:d[h]=i[h]);u="";for(let h in d)d.hasOwnProperty(h)&&(u!=""&&(u+="&"),u+=encodeURIComponent(h.replace(/%20/g,"+"))+"="+encodeURIComponent(d[h].replace(/%20/g,"+")));return u!=""?r+"?"+u:r}}function K1(s){if(typeof window>"u"||!(window!=null&&window.open))throw new bt(new Error("Not in a browser context - please pass a custom urlCallback function."));let l=1024,i=768,r=window.innerWidth,u=window.innerHeight;l=l>r?r:l,i=i>u?u:i;let d=r/2-l/2,f=u/2-i/2;return window.open(s,"popup_window","width="+l+",height="+i+",top="+f+",left="+d+",resizable,menubar=no")}class $8 extends Zp{get baseCrudPath(){return"/api/collections"}async import(l,i=!1,r){return r=Object.assign({method:"PUT",body:{collections:l,deleteMissing:i}},r),this.client.send(this.baseCrudPath+"/import",r).then((()=>!0))}async getScaffolds(l){return l=Object.assign({method:"GET"},l),this.client.send(this.baseCrudPath+"/meta/scaffolds",l)}async truncate(l,i){return i=Object.assign({method:"DELETE"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l)+"/truncate",i).then((()=>!0))}}class J8 extends Gn{async getList(l=1,i=30,r){return(r=Object.assign({method:"GET"},r)).query=Object.assign({page:l,perPage:i},r.query),this.client.send("/api/logs",r)}async getOne(l,i){if(!l)throw new bt({url:this.client.buildURL("/api/logs/"),status:404,response:{code:404,message:"Missing required log id.",data:{}}});return i=Object.assign({method:"GET"},i),this.client.send("/api/logs/"+encodeURIComponent(l),i)}async getStats(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/logs/stats",l)}}class F8 extends Gn{async check(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/health",l)}}class P8 extends Gn{getUrl(l,i,r={}){return console.warn("Please replace pb.files.getUrl() with pb.files.getURL()"),this.getURL(l,i,r)}getURL(l,i,r={}){if(!i||!(l!=null&&l.id)||!(l!=null&&l.collectionId)&&!(l!=null&&l.collectionName))return"";const u=[];u.push("api"),u.push("files"),u.push(encodeURIComponent(l.collectionId||l.collectionName)),u.push(encodeURIComponent(l.id)),u.push(encodeURIComponent(i));let d=this.client.buildURL(u.join("/"));r.download===!1&&delete r.download;const f=wu(r);return f&&(d+=(d.includes("?")?"&":"?")+f),d}async getToken(l){return l=Object.assign({method:"POST"},l),this.client.send("/api/files/token",l).then((i=>(i==null?void 0:i.token)||""))}}class W8 extends Gn{async getFullList(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/backups",l)}async create(l,i){return i=Object.assign({method:"POST",body:{name:l}},i),this.client.send("/api/backups",i).then((()=>!0))}async upload(l,i){return i=Object.assign({method:"POST",body:l},i),this.client.send("/api/backups/upload",i).then((()=>!0))}async delete(l,i){return i=Object.assign({method:"DELETE"},i),this.client.send(`/api/backups/${encodeURIComponent(l)}`,i).then((()=>!0))}async restore(l,i){return i=Object.assign({method:"POST"},i),this.client.send(`/api/backups/${encodeURIComponent(l)}/restore`,i).then((()=>!0))}getDownloadUrl(l,i){return console.warn("Please replace pb.backups.getDownloadUrl() with pb.backups.getDownloadURL()"),this.getDownloadURL(l,i)}getDownloadURL(l,i){return this.client.buildURL(`/api/backups/${encodeURIComponent(i)}?token=${encodeURIComponent(l)}`)}}class eb extends Gn{async getFullList(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/crons",l)}async run(l,i){return i=Object.assign({method:"POST"},i),this.client.send(`/api/crons/${encodeURIComponent(l)}`,i).then((()=>!0))}}function iu(s){return typeof Blob<"u"&&s instanceof Blob||typeof File<"u"&&s instanceof File||s!==null&&typeof s=="object"&&s.uri&&(typeof navigator<"u"&&navigator.product==="ReactNative"||typeof global<"u"&&global.HermesInternal)}function su(s){var l;return s&&(((l=s.constructor)==null?void 0:l.name)==="FormData"||typeof FormData<"u"&&s instanceof FormData)}function $1(s){for(const l in s){const i=Array.isArray(s[l])?s[l]:[s[l]];for(const r of i)if(iu(r))return!0}return!1}const tb=/^[\-\.\d]+$/;function J1(s){if(typeof s!="string")return s;if(s=="true")return!0;if(s=="false")return!1;if((s[0]==="-"||s[0]>="0"&&s[0]<="9")&&tb.test(s)){let l=+s;if(""+l===s)return l}return s}class nb extends Gn{constructor(){super(...arguments),this.requests=[],this.subs={}}collection(l){return this.subs[l]||(this.subs[l]=new ab(this.requests,l)),this.subs[l]}async send(l){const i=new FormData,r=[];for(let u=0;u<this.requests.length;u++){const d=this.requests[u];if(r.push({method:d.method,url:d.url,headers:d.headers,body:d.json}),d.files)for(let f in d.files){const h=d.files[f]||[];for(let g of h)i.append("requests."+u+"."+f,g)}}return i.append("@jsonPayload",JSON.stringify({requests:r})),l=Object.assign({method:"POST",body:i},l),this.client.send("/api/batch",l)}}class ab{constructor(l,i){this.requests=[],this.requests=l,this.collectionIdOrName=i}upsert(l,i){i=Object.assign({body:l||{}},i);const r={method:"PUT",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records"};this.prepareRequest(r,i),this.requests.push(r)}create(l,i){i=Object.assign({body:l||{}},i);const r={method:"POST",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records"};this.prepareRequest(r,i),this.requests.push(r)}update(l,i,r){r=Object.assign({body:i||{}},r);const u={method:"PATCH",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records/"+encodeURIComponent(l)};this.prepareRequest(u,r),this.requests.push(u)}delete(l,i){i=Object.assign({},i);const r={method:"DELETE",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records/"+encodeURIComponent(l)};this.prepareRequest(r,i),this.requests.push(r)}prepareRequest(l,i){if(Su(i),l.headers=i.headers,l.json={},l.files={},i.query!==void 0){const u=wu(i.query);u&&(l.url+=(l.url.includes("?")?"&":"?")+u)}let r=i.body;su(r)&&(r=(function(d){let f={};return d.forEach(((h,g)=>{if(g==="@jsonPayload"&&typeof h=="string")try{let v=JSON.parse(h);Object.assign(f,v)}catch(v){console.warn("@jsonPayload error:",v)}else f[g]!==void 0?(Array.isArray(f[g])||(f[g]=[f[g]]),f[g].push(J1(h))):f[g]=J1(h)})),f})(r));for(const u in r){const d=r[u];if(iu(d))l.files[u]=l.files[u]||[],l.files[u].push(d);else if(Array.isArray(d)){const f=[],h=[];for(const g of d)iu(g)?f.push(g):h.push(g);if(f.length>0&&f.length==d.length){l.files[u]=l.files[u]||[];for(let g of f)l.files[u].push(g)}else if(l.json[u]=h,f.length>0){let g=u;u.startsWith("+")||u.endsWith("+")||(g+="+"),l.files[g]=l.files[g]||[];for(let v of f)l.files[g].push(v)}}else l.json[u]=d}}}class Cu{get baseUrl(){return this.baseURL}set baseUrl(l){this.baseURL=l}constructor(l="/",i,r="en-US"){this.cancelControllers={},this.recordServices={},this.enableAutoCancellation=!0,this.baseURL=l,this.lang=r,i?this.authStore=i:typeof window<"u"&&window.Deno?this.authStore=new xu:this.authStore=new G8,this.collections=new $8(this),this.files=new P8(this),this.logs=new J8(this),this.settings=new X8(this),this.realtime=new Hp(this),this.health=new F8(this),this.backups=new W8(this),this.crons=new eb(this)}get admins(){return this.collection("_superusers")}createBatch(){return new nb(this)}collection(l){return this.recordServices[l]||(this.recordServices[l]=new K8(this,l)),this.recordServices[l]}autoCancellation(l){return this.enableAutoCancellation=!!l,this}cancelRequest(l){return this.cancelControllers[l]&&(this.cancelControllers[l].abort(),delete this.cancelControllers[l]),this}cancelAllRequests(){for(let l in this.cancelControllers)this.cancelControllers[l].abort();return this.cancelControllers={},this}filter(l,i){if(!i)return l;for(let r in i){let u=i[r];switch(typeof u){case"boolean":case"number":u=""+u;break;case"string":u="'"+u.replace(/'/g,"\\'")+"'";break;default:u=u===null?"null":u instanceof Date?"'"+u.toISOString().replace("T"," ")+"'":"'"+JSON.stringify(u).replace(/'/g,"\\'")+"'"}l=l.replaceAll("{:"+r+"}",u)}return l}getFileUrl(l,i,r={}){return console.warn("Please replace pb.getFileUrl() with pb.files.getURL()"),this.files.getURL(l,i,r)}buildUrl(l){return console.warn("Please replace pb.buildUrl() with pb.buildURL()"),this.buildURL(l)}buildURL(l){var r;let i=this.baseURL;return typeof window>"u"||!window.location||i.startsWith("https://")||i.startsWith("http://")||(i=(r=window.location.origin)!=null&&r.endsWith("/")?window.location.origin.substring(0,window.location.origin.length-1):window.location.origin||"",this.baseURL.startsWith("/")||(i+=window.location.pathname||"/",i+=i.endsWith("/")?"":"/"),i+=this.baseURL),l&&(i+=i.endsWith("/")?"":"/",i+=l.startsWith("/")?l.substring(1):l),i}async send(l,i){i=this.initSendOptions(l,i);let r=this.buildURL(l);if(this.beforeSend){const u=Object.assign({},await this.beforeSend(r,i));u.url!==void 0||u.options!==void 0?(r=u.url||r,i=u.options||i):Object.keys(u).length&&(i=u,console!=null&&console.warn&&console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."))}if(i.query!==void 0){const u=wu(i.query);u&&(r+=(r.includes("?")?"&":"?")+u),delete i.query}return this.getHeader(i.headers,"Content-Type")=="application/json"&&i.body&&typeof i.body!="string"&&(i.body=JSON.stringify(i.body)),(i.fetch||fetch)(r,i).then((async u=>{var f;let d={};try{d=await u.json()}catch(h){if((f=i.signal)!=null&&f.aborted||(h==null?void 0:h.name)=="AbortError"||(h==null?void 0:h.message)=="Aborted")throw h}if(this.afterSend&&(d=await this.afterSend(u,d,i)),u.status>=400)throw new bt({url:u.url,status:u.status,data:d});return d})).catch((u=>{throw new bt(u)}))}initSendOptions(l,i){if((i=Object.assign({method:"GET"},i)).body=(function(u){if(typeof FormData>"u"||u===void 0||typeof u!="object"||u===null||su(u)||!$1(u))return u;const d=new FormData;for(const f in u){const h=u[f];if(h!==void 0)if(typeof h!="object"||$1({data:h})){const g=Array.isArray(h)?h:[h];for(let v of g)d.append(f,v)}else{let g={};g[f]=h,d.append("@jsonPayload",JSON.stringify(g))}}return d})(i.body),Su(i),i.query=Object.assign({},i.params,i.query),i.requestKey===void 0&&(i.$autoCancel===!1||i.query.$autoCancel===!1?i.requestKey=null:(i.$cancelKey||i.query.$cancelKey)&&(i.requestKey=i.$cancelKey||i.query.$cancelKey)),delete i.$autoCancel,delete i.query.$autoCancel,delete i.$cancelKey,delete i.query.$cancelKey,this.getHeader(i.headers,"Content-Type")!==null||su(i.body)||(i.headers=Object.assign({},i.headers,{"Content-Type":"application/json"})),this.getHeader(i.headers,"Accept-Language")===null&&(i.headers=Object.assign({},i.headers,{"Accept-Language":this.lang})),this.authStore.token&&this.getHeader(i.headers,"Authorization")===null&&(i.headers=Object.assign({},i.headers,{Authorization:this.authStore.token})),this.enableAutoCancellation&&i.requestKey!==null){const r=i.requestKey||(i.method||"GET")+l;delete i.requestKey,this.cancelRequest(r);const u=new AbortController;this.cancelControllers[r]=u,i.signal=u.signal}return i}getHeader(l,i){l=l||{},i=i.toLowerCase();for(let r in l)if(r.toLowerCase()==i)return l[r];return null}}const Bp="ennabl_pb_url";let Dl=null;function qp(){return localStorage.getItem(Bp)||""}function Cr(){const s=qp();return s?((!Dl||Dl.baseUrl!==s)&&(Dl=new Cu(s)),Dl):null}function F1(){return!!qp()}async function lb(s){const l=s.trim().replace(/\/$/,"");localStorage.setItem(Bp,l),Dl=new Cu(l),await Dl.collection("prds").getList(1,1)}async function ib(){return(await Cr().collection("prds").getFullList({sort:"-updated"})).map(Au)}async function sb({projectId:s,title:l,content:i}){const r=await Cr().collection("prds").create({projectId:s,title:l.trim(),content:i||"",status:"backlog"});return Au(r)}async function rb(s,l){const i=await Cr().collection("prds").update(s,l);return Au(i)}async function ob(s){await Cr().collection("prds").delete(s)}function Au(s){return{id:s.id,projectId:s.projectId,title:s.title,content:s.content||"",status:s.status||"backlog",createdAt:s.created,updatedAt:s.updated}}function cb({onDone:s}){const[l,i]=m.useState(""),[r,u]=m.useState(!1),[d,f]=m.useState("");async function h(g){var v,x;if(g.preventDefault(),!!l.trim()){u(!0),f("");try{await lb(l),s()}catch(S){f((v=S==null?void 0:S.message)!=null&&v.includes("Failed to fetch")?"Could not reach that URL. Check the Railway domain and make sure it's deployed.":(x=S==null?void 0:S.message)!=null&&x.includes("prds")?'Connected but the "prds" collection is missing. Check that the migration ran.':`Connection failed: ${(S==null?void 0:S.message)||"unknown error"}`)}finally{u(!1)}}}return y.jsx("div",{className:"pb-setup",children:y.jsxs("div",{className:"pb-setup-card",children:[y.jsxs("div",{className:"pb-setup-logo",children:[y.jsx("span",{className:"pb-setup-logo-name",children:"ennabl"}),y.jsx("span",{className:"pb-setup-logo-suffix",children:"builder"})]}),y.jsx("h2",{className:"pb-setup-title",children:"Connect to PocketBase"}),y.jsx("p",{className:"pb-setup-sub",children:"Paste your Railway deployment URL to sync PRDs across sessions."}),y.jsxs("form",{className:"pb-setup-form",onSubmit:h,children:[y.jsx("input",{className:"pb-setup-input",type:"url",placeholder:"https://your-app.up.railway.app",value:l,onChange:g=>i(g.target.value),autoFocus:!0,disabled:r}),d&&y.jsx("div",{className:"pb-setup-error",children:d}),y.jsx("button",{className:"pb-setup-btn",type:"submit",disabled:!l.trim()||r,children:r?"Connecting…":"Connect"})]}),y.jsxs("div",{className:"pb-setup-footer",children:[y.jsxs("span",{className:"pb-setup-hint",children:["Don't have a deployment yet?"," ",y.jsx("a",{href:"https://railway.app",target:"_blank",rel:"noreferrer",className:"pb-setup-link",children:"Deploy to Railway →"})]}),y.jsx("button",{className:"pb-setup-skip",onClick:s,children:"Skip — use local storage"})]})]})})}const Vp="ennabl_builder_prds",Yp=[{id:"ai",name:"AI",phosphorIcon:"Sparkle"},{id:"insights",name:"Insights",phosphorIcon:"ChartBar"},{id:"workflows",name:"Workflows",phosphorIcon:"FlowArrow"},{id:"data",name:"Data",phosphorIcon:"Database"},{id:"growth",name:"Growth",phosphorIcon:"TrendUp"},{id:"updates",name:"Updates",phosphorIcon:"Bell"},{id:"settings",name:"Settings",phosphorIcon:"GearSix"}],P1=["backlog","todo","doing","done"],Gp={backlog:"Backlog",todo:"To Do",doing:"Doing",done:"Done"},ub=[{id:"prd-mock-1",projectId:"workflows",title:"Producer Filter Modal",content:`# Producer Filter Modal

## Overview
Redesign the filter panel for the Producer Team step to support multi-select filters with a clear visual hierarchy.

## Goals
- Allow filtering by producer type, status, and region
- Show active filter count in the trigger button
- Support "clear all" action

## Key Screens
1. Filter trigger button (shows count badge when filters active)
2. Filter modal with grouped checkboxes
3. Applied state — table reflects filtered results

## Acceptance Criteria
- Filters persist across page navigation
- At most 3 filter groups visible without scroll
- Mobile-friendly layout
`,status:"backlog",createdAt:new Date(Date.now()-4320*60*1e3).toISOString(),updatedAt:new Date(Date.now()-4320*60*1e3).toISOString()},{id:"prd-mock-2",projectId:"workflows",title:"Template Save Flow",content:`# Template Save Flow

## Overview
Streamline the process of saving a completed Step 3 as a reusable template.

## Goals
- Reduce save flow from 4 steps to 2
- Add optional description and default-template toggle
- Show a success toast with "View templates" CTA

## Key Screens
1. Save trigger (button in tpl-bar when dirty)
2. Save dialog — name + description + sharing options
3. Success state

## Acceptance Criteria
- Template name is required, max 60 chars
- Duplicate name shows inline warning
- Default toggle shows collision warning if another default exists
`,status:"doing",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),updatedAt:new Date(Date.now()-7200*1e3).toISOString()}];function ru(){try{return JSON.parse(localStorage.getItem(Vp)||"[]")}catch{return[]}}function dr(s){localStorage.setItem(Vp,JSON.stringify(s))}function W1(){ru().length===0&&dr(ub)}function Xp(s){return Yp.find(l=>l.id===s)||null}function db({prds:s=[],onSelect:l}){const[i,r]=m.useState(""),[u,d]=m.useState([]),[f,h]=m.useState(!1),[g,v]=m.useState(0),x=m.useRef(),S=m.useRef();m.useEffect(()=>{if(!i.trim()){d([]),h(!1);return}const N=i.toLowerCase(),_=s.filter(z=>z.title.toLowerCase().includes(N)).slice(0,8);d(_),h(_.length>0),v(0)},[i,s]),m.useEffect(()=>{function N(_){f&&(_.key==="ArrowDown"&&(_.preventDefault(),v(z=>Math.min(z+1,u.length-1))),_.key==="ArrowUp"&&(_.preventDefault(),v(z=>Math.max(z-1,0))),_.key==="Enter"&&(_.preventDefault(),u[g]&&T(u[g])),_.key==="Escape"&&h(!1))}return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[f,u,g]),m.useEffect(()=>{function N(_){var z,Z;!((z=S.current)!=null&&z.contains(_.target))&&!((Z=x.current)!=null&&Z.contains(_.target))&&h(!1)}return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[]);function T(N){var _;l(N),r(""),h(!1),(_=x.current)==null||_.blur()}return y.jsxs("div",{className:"prd-search",children:[y.jsxs("div",{className:"prd-search-input-wrap",children:[y.jsx("span",{className:"prd-search-icon",children:"⌕"}),y.jsx("input",{ref:x,className:"prd-search-input",type:"text",placeholder:"Search PRDs…",value:i,onChange:N=>r(N.target.value),onFocus:()=>{u.length&&h(!0)}}),i&&y.jsx("button",{className:"prd-search-clear",onClick:()=>{r(""),h(!1)},children:"✕"})]}),f&&y.jsx("div",{ref:S,className:"prd-search-dropdown",children:u.map((N,_)=>{const z=Xp(N.projectId);return y.jsxs("button",{className:`prd-search-result ${_===g?"prd-search-result--active":""}`,onMouseEnter:()=>v(_),onClick:()=>T(N),children:[y.jsx("span",{className:"prd-search-result-title",children:N.title}),y.jsxs("span",{className:"prd-search-result-project",children:[z==null?void 0:z.icon," ",z==null?void 0:z.name]})]},N.id)})})]})}const fb=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M225.29,165.93C216.61,151,212,129.57,212,104a84,84,0,0,0-168,0c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.66,186,19.77,19.77,0,0,0,48,196H84.18a44,44,0,0,0,87.64,0H208a19.77,19.77,0,0,0,17.31-10A20.08,20.08,0,0,0,225.29,165.93ZM128,212a20,20,0,0,1-19.6-16h39.2A20,20,0,0,1,128,212ZM54.66,172C63.51,154,68,131.14,68,104a60,60,0,0,1,120,0c0,27.13,4.48,50,13.33,68Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192Z",opacity:"0.2"}),m.createElement("path",{d:"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M220.07,176.94C214.41,167.2,206,139.73,206,104a78,78,0,1,0-156,0c0,35.74-8.42,63.2-14.08,72.94A14,14,0,0,0,48,198H90.48a38,38,0,0,0,75,0H208a14,14,0,0,0,12.06-21.06ZM128,218a26,26,0,0,1-25.29-20h50.58A26,26,0,0,1,128,218Zm81.71-33a1.9,1.9,0,0,1-1.7,1H48a1.9,1.9,0,0,1-1.7-1,2,2,0,0,1,0-2C53.87,170,62,139.69,62,104a66,66,0,1,1,132,0c0,35.68,8.14,65.95,15.71,79A2,2,0,0,1,209.71,185Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M218.35,178C212.58,168,204,140.13,204,104a76,76,0,1,0-152,0c0,36.13-8.59,64-14.36,73.95A12,12,0,0,0,48,196H92.23a36,36,0,0,0,71.54,0H208A12,12,0,0,0,218.35,178ZM128,220a28,28,0,0,1-27.71-24h55.42A28,28,0,0,1,128,220Zm83.45-34a3.91,3.91,0,0,1-3.44,2H48a3.91,3.91,0,0,1-3.44-2,4,4,0,0,1,0-4C52,169.17,60,139.32,60,104a68,68,0,1,1,136,0c0,35.31,8,65.17,15.44,78A4,4,0,0,1,211.45,186Z"}))]]),pb=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M224,196h-4V40a12,12,0,0,0-12-12H152a12,12,0,0,0-12,12V76H96A12,12,0,0,0,84,88v36H48a12,12,0,0,0-12,12v60H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24ZM164,52h32V196H164Zm-56,48h32v96H108ZM60,148H84v48H60Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M208,40V208H152V40Z",opacity:"0.2"}),m.createElement("path",{d:"M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M224,202H214V40a6,6,0,0,0-6-6H152a6,6,0,0,0-6,6V82H96a6,6,0,0,0-6,6v42H48a6,6,0,0,0-6,6v66H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12ZM158,46h44V202H158ZM102,94h44V202H102ZM54,142H90v60H54Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M224,204H212V40a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4V84H96a4,4,0,0,0-4,4v44H48a4,4,0,0,0-4,4v68H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8ZM156,44h48V204H156ZM100,92h48V204H100ZM52,140H92v64H52Z"}))]]),hb=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M196,35.52C177.62,25.51,153.48,20,128,20S78.38,25.51,60,35.52C39.37,46.79,28,62.58,28,80v96c0,17.42,11.37,33.21,32,44.48,18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52c20.66-11.27,32-27.06,32-44.48V80C228,62.58,216.63,46.79,196,35.52ZM204,128c0,17-31.21,36-76,36s-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94ZM128,44c44.79,0,76,19,76,36s-31.21,36-76,36S52,97,52,80,83.21,44,128,44Zm0,168c-44.79,0-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94V176C204,193,172.79,212,128,212Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M216,80c0,26.51-39.4,48-88,48S40,106.51,40,80s39.4-48,88-48S216,53.49,216,80Z",opacity:"0.2"}),m.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64Zm-21.61,74.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,26C75.29,26,34,49.72,34,80v96c0,30.28,41.29,54,94,54s94-23.72,94-54V80C222,49.72,180.71,26,128,26Zm0,12c44.45,0,82,19.23,82,42s-37.55,42-82,42S46,102.77,46,80,83.55,38,128,38Zm82,138c0,22.77-37.55,42-82,42s-82-19.23-82-42V154.79C62,171.16,92.37,182,128,182s66-10.84,82-27.21Zm0-48c0,22.77-37.55,42-82,42s-82-19.23-82-42V106.79C62,123.16,92.37,134,128,134s66-10.84,82-27.21Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M192.14,42.55C174.94,33.17,152.16,28,128,28S81.06,33.17,63.86,42.55C45.89,52.35,36,65.65,36,80v96c0,14.35,9.89,27.65,27.86,37.45,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c18-9.8,27.86-23.1,27.86-37.45V80C220,65.65,210.11,52.35,192.14,42.55ZM212,176c0,11.29-8.41,22.1-23.69,30.43C172.27,215.18,150.85,220,128,220s-44.27-4.82-60.31-13.57C52.41,198.1,44,187.29,44,176V149.48c4.69,5.93,11.37,11.34,19.86,16,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c8.49-4.63,15.17-10,19.86-16Zm0-48c0,11.29-8.41,22.1-23.69,30.43C172.27,167.18,150.85,172,128,172s-44.27-4.82-60.31-13.57C52.41,150.1,44,139.29,44,128V101.48c4.69,5.93,11.37,11.34,19.86,16,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c8.49-4.63,15.17-10,19.86-16Zm-23.69-17.57C172.27,119.18,150.85,124,128,124s-44.27-4.82-60.31-13.57C52.41,102.1,44,91.29,44,80s8.41-22.1,23.69-30.43C83.73,40.82,105.15,36,128,36s44.27,4.82,60.31,13.57C203.59,57.9,212,68.71,212,80S203.59,102.1,188.31,110.43Z"}))]]),mb=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M248.49,71.51l-32-32a12,12,0,0,0-17,17L211,68h-3c-52,0-64.8,30.71-75.08,55.38-8.82,21.17-15.45,37.05-42.75,40.09a44,44,0,1,0,.28,24.08c43.34-3.87,55.07-32,64.63-54.93C164.9,109,172,92,208,92h3l-11.52,11.51a12,12,0,0,0,17,17l32-32A12,12,0,0,0,248.49,71.51ZM48,196a20,20,0,1,1,20-20A20,20,0,0,1,48,196Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M80,176a32,32,0,1,1-32-32A32,32,0,0,1,80,176Z",opacity:"0.2"}),m.createElement("path",{d:"M245.66,74.34l-32-32a8,8,0,0,0-11.32,11.32L220.69,72H208c-49.33,0-61.05,28.12-71.38,52.92-9.38,22.51-16.92,40.59-49.48,42.84a40,40,0,1,0,.1,16c43.26-2.65,54.34-29.15,64.14-52.69C161.41,107,169.33,88,208,88h12.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,74.34ZM48,200a24,24,0,1,1,24-24A24,24,0,0,1,48,200Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M245.66,85.66l-32,32a8,8,0,0,1-11.32-11.32L220.69,88H208c-38.67,0-46.59,19-56.62,43.08C141.05,155.88,129.33,184,80,184H79a32,32,0,1,1,0-16h1c38.67,0,46.59-19,56.62-43.08C147,100.12,158.67,72,208,72h12.69L202.34,53.66a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,245.66,85.66Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M244.24,75.76l-32-32a6,6,0,0,0-8.48,8.48L225.51,74H208c-48,0-59.44,27.46-69.54,51.69-9.43,22.64-17.66,42.33-53,44.16a38,38,0,1,0,.06,12c43.34-2.06,54.29-28.29,64-51.55C159.44,106.53,168,86,208,86h17.51l-21.75,21.76a6,6,0,1,0,8.48,8.48l32-32A6,6,0,0,0,244.24,75.76ZM48,202a26,26,0,1,1,26-26A26,26,0,0,1,48,202Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M245.66,74.34l-32-32a8,8,0,0,0-11.32,11.32L220.69,72H208c-49.33,0-61.05,28.12-71.38,52.92-9.38,22.51-16.92,40.59-49.48,42.84a40,40,0,1,0,.1,16c43.26-2.65,54.34-29.15,64.14-52.69C161.41,107,169.33,88,208,88h12.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,74.34ZM48,200a24,24,0,1,1,24-24A24,24,0,0,1,48,200Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M242.83,77.17l-32-32a4,4,0,0,0-5.66,5.66L230.34,76H208c-46.67,0-57.84,26.81-67.69,50.46-9.46,22.69-18.4,44.16-56.55,45.48a36,36,0,1,0,0,8c43.49-1.42,54.33-27.39,63.91-50.39C157.45,106.12,166.67,84,208,84h22.34l-25.17,25.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,242.83,77.17ZM48,204a28,28,0,1,1,28-28A28,28,0,0,1,48,204Z"}))]]),gb=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm113.86-49.57A12,12,0,0,0,236,98.34L208.21,82.49l-.11-31.31a12,12,0,0,0-4.25-9.12,116,116,0,0,0-38-21.41,12,12,0,0,0-9.68.89L128,37.27,99.83,21.53a12,12,0,0,0-9.7-.9,116.06,116.06,0,0,0-38,21.47,12,12,0,0,0-4.24,9.1l-.14,31.34L20,98.35a12,12,0,0,0-5.85,8.11,110.7,110.7,0,0,0,0,43.11A12,12,0,0,0,20,157.66l27.82,15.85.11,31.31a12,12,0,0,0,4.25,9.12,116,116,0,0,0,38,21.41,12,12,0,0,0,9.68-.89L128,218.73l28.14,15.74a12,12,0,0,0,9.7.9,116.06,116.06,0,0,0,38-21.47,12,12,0,0,0,4.24-9.1l.14-31.34,27.81-15.81a12,12,0,0,0,5.85-8.11A110.7,110.7,0,0,0,241.86,106.43Zm-22.63,33.18-26.88,15.28a11.94,11.94,0,0,0-4.55,4.59c-.54,1-1.11,1.93-1.7,2.88a12,12,0,0,0-1.83,6.31L184.13,199a91.83,91.83,0,0,1-21.07,11.87l-27.15-15.19a12,12,0,0,0-5.86-1.53h-.29c-1.14,0-2.3,0-3.44,0a12.08,12.08,0,0,0-6.14,1.51L93,210.82A92.27,92.27,0,0,1,71.88,199l-.11-30.24a12,12,0,0,0-1.83-6.32c-.58-.94-1.16-1.91-1.7-2.88A11.92,11.92,0,0,0,63.7,155L36.8,139.63a86.53,86.53,0,0,1,0-23.24l26.88-15.28a12,12,0,0,0,4.55-4.58c.54-1,1.11-1.94,1.7-2.89a12,12,0,0,0,1.83-6.31L71.87,57A91.83,91.83,0,0,1,92.94,45.17l27.15,15.19a11.92,11.92,0,0,0,6.15,1.52c1.14,0,2.3,0,3.44,0a12.08,12.08,0,0,0,6.14-1.51L163,45.18A92.27,92.27,0,0,1,184.12,57l.11,30.24a12,12,0,0,0,1.83,6.32c.58.94,1.16,1.91,1.7,2.88A11.92,11.92,0,0,0,192.3,101l26.9,15.33A86.53,86.53,0,0,1,219.23,139.61Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),m.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Zm108-54.4a6,6,0,0,0-2.92-4L202.64,86.22l-.42-.71L202.1,51.2A6,6,0,0,0,200,46.64a110.12,110.12,0,0,0-36.07-20.31,6,6,0,0,0-4.84.45L128.46,43.86h-1L96.91,26.76a6,6,0,0,0-4.86-.44A109.92,109.92,0,0,0,56,46.68a6,6,0,0,0-2.12,4.55l-.16,34.34c-.14.23-.28.47-.41.71L22.91,103.57A6,6,0,0,0,20,107.62a104.81,104.81,0,0,0,0,40.78,6,6,0,0,0,2.92,4l30.42,17.33.42.71.12,34.31A6,6,0,0,0,56,209.36a110.12,110.12,0,0,0,36.07,20.31,6,6,0,0,0,4.84-.45l30.61-17.08h1l30.56,17.1A6.09,6.09,0,0,0,162,230a5.83,5.83,0,0,0,1.93-.32,109.92,109.92,0,0,0,36-20.36,6,6,0,0,0,2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6,6,0,0,0,2.92-4.05A104.81,104.81,0,0,0,236,107.6Zm-11.25,35.79L195.32,160.1a6.07,6.07,0,0,0-2.28,2.3c-.59,1-1.21,2.11-1.86,3.14a6,6,0,0,0-.91,3.16l-.16,33.21a98.15,98.15,0,0,1-27.52,15.53L133,200.88a6,6,0,0,0-2.93-.77h-.14c-1.24,0-2.5,0-3.74,0a6,6,0,0,0-3.07.76L93.45,217.43a98,98,0,0,1-27.56-15.49l-.12-33.17a6,6,0,0,0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6,6,0,0,0-2.27-2.3L31.3,143.4a93,93,0,0,1,0-30.79L60.68,95.9A6.07,6.07,0,0,0,63,93.6c.59-1,1.21-2.11,1.86-3.14a6,6,0,0,0,.91-3.16l.16-33.21A98.15,98.15,0,0,1,93.41,38.56L123,55.12a5.81,5.81,0,0,0,3.07.76c1.24,0,2.5,0,3.74,0a6,6,0,0,0,3.07-.76l29.65-16.56a98,98,0,0,1,27.56,15.49l.12,33.17a6,6,0,0,0,.91,3.16c.64,1,1.27,2.08,1.86,3.14a6,6,0,0,0,2.27,2.3L224.7,112.6A93,93,0,0,1,224.73,143.39Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm106-56a4,4,0,0,0-2-2.7l-30.89-17.6q-.47-.82-1-1.62L200.1,51.2a3.94,3.94,0,0,0-1.42-3,107.8,107.8,0,0,0-35.41-19.94,4,4,0,0,0-3.23.29L129,45.87h-2l-31-17.36a4,4,0,0,0-3.23-.3,108.05,108.05,0,0,0-35.39,20,4,4,0,0,0-1.41,3l-.16,34.9-1,1.62L23.9,105.3A4,4,0,0,0,22,108a102.76,102.76,0,0,0,0,40,4,4,0,0,0,1.95,2.7l30.89,17.6q.47.83,1,1.62l.12,34.87a3.94,3.94,0,0,0,1.42,3,107.8,107.8,0,0,0,35.41,19.94,4,4,0,0,0,3.23-.29L127,210.13h2l31,17.36a4,4,0,0,0,3.23.3,108.05,108.05,0,0,0,35.39-20,4,4,0,0,0,1.41-3l.16-34.9,1-1.62L232.1,150.7a4,4,0,0,0,2-2.71A102.76,102.76,0,0,0,234,108Zm-7.48,36.67L196.3,161.84a4,4,0,0,0-1.51,1.53c-.61,1.09-1.25,2.17-1.91,3.24a3.92,3.92,0,0,0-.61,2.1l-.16,34.15a99.8,99.8,0,0,1-29.7,16.77l-30.4-17a4.06,4.06,0,0,0-2-.51H130c-1.28,0-2.57,0-3.84,0a4.1,4.1,0,0,0-2.05.51l-30.45,17A100.23,100.23,0,0,1,63.89,202.9l-.12-34.12a3.93,3.93,0,0,0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4,4,0,0,0-1.51-1.53L29.49,144.68a94.78,94.78,0,0,1,0-33.34L59.7,94.16a4,4,0,0,0,1.51-1.53c.61-1.09,1.25-2.17,1.91-3.23a4,4,0,0,0,.61-2.11l.16-34.15a99.8,99.8,0,0,1,29.7-16.77l30.4,17a4.1,4.1,0,0,0,2.05.51c1.28,0,2.57,0,3.84,0a4,4,0,0,0,2.05-.51l30.45-17A100.23,100.23,0,0,1,192.11,53.1l.12,34.12a3.93,3.93,0,0,0,.61,2.11c.66,1,1.3,2.14,1.91,3.23a4,4,0,0,0,1.51,1.53l30.25,17.23A94.78,94.78,0,0,1,226.54,144.66Z"}))]]),bb=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M236.37,139.4a12,12,0,0,0-12-3A84.07,84.07,0,0,1,119.6,31.59a12,12,0,0,0-15-15A108.86,108.86,0,0,0,49.69,55.07,108,108,0,0,0,136,228a107.09,107.09,0,0,0,64.93-21.69,108.86,108.86,0,0,0,38.44-54.94A12,12,0,0,0,236.37,139.4Zm-49.88,47.74A84,84,0,0,1,68.86,69.51,84.93,84.93,0,0,1,92.27,48.29Q92,52.13,92,56A108.12,108.12,0,0,0,200,164q3.87,0,7.71-.27A84.79,84.79,0,0,1,186.49,187.14Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z",opacity:"0.2"}),m.createElement("path",{d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M232.13,143.64a6,6,0,0,0-6-1.49A90.07,90.07,0,0,1,113.86,29.85a6,6,0,0,0-7.49-7.48A102.88,102.88,0,0,0,54.48,58.68,102,102,0,0,0,197.32,201.52a102.88,102.88,0,0,0,36.31-51.89A6,6,0,0,0,232.13,143.64Zm-42,48.29a90,90,0,0,1-126-126A90.9,90.9,0,0,1,99.65,37.66,102.06,102.06,0,0,0,218.34,156.35,90.9,90.9,0,0,1,190.1,191.93Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M230.72,145.06a4,4,0,0,0-4-1A92.08,92.08,0,0,1,111.94,29.27a4,4,0,0,0-5-5A100.78,100.78,0,0,0,56.08,59.88a100,100,0,0,0,140,140,100.78,100.78,0,0,0,35.59-50.87A4,4,0,0,0,230.72,145.06ZM191.3,193.53A92,92,0,0,1,62.47,64.7a93,93,0,0,1,39.88-30.35,100.09,100.09,0,0,0,119.3,119.3A93,93,0,0,1,191.3,193.53Z"}))]]),vb=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M224,56V200a16,16,0,0,1-16,16H48V40H208A16,16,0,0,1,224,56Z",opacity:"0.2"}),m.createElement("path",{d:"M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40A8,8,0,0,0,176,88v32H112a8,8,0,0,0,0,16h64v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,229.66,122.34Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M118,216a6,6,0,0,1-6,6H48a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H54V210h58A6,6,0,0,1,118,216Zm110.24-92.24-40-40a6,6,0,0,0-8.48,8.48L209.51,122H112a6,6,0,0,0,0,12h97.51l-29.75,29.76a6,6,0,1,0,8.48,8.48l40-40A6,6,0,0,0,228.24,123.76Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M116,216a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H52V212h60A4,4,0,0,1,116,216Zm110.83-90.83-40-40a4,4,0,0,0-5.66,5.66L214.34,124H112a4,4,0,0,0,0,8H214.34l-33.17,33.17a4,4,0,0,0,5.66,5.66l40-40A4,4,0,0,0,226.83,125.17Z"}))]]),yb=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M199,125.31l-49.88-18.39L130.69,57a19.92,19.92,0,0,0-37.38,0L74.92,106.92,25,125.31a19.92,19.92,0,0,0,0,37.38l49.88,18.39L93.31,231a19.92,19.92,0,0,0,37.38,0l18.39-49.88L199,162.69a19.92,19.92,0,0,0,0-37.38Zm-63.38,35.16a12,12,0,0,0-7.11,7.11L112,212.28l-16.47-44.7a12,12,0,0,0-7.11-7.11L43.72,144l44.7-16.47a12,12,0,0,0,7.11-7.11L112,75.72l16.47,44.7a12,12,0,0,0,7.11,7.11L180.28,144ZM140,40a12,12,0,0,1,12-12h12V16a12,12,0,0,1,24,0V28h12a12,12,0,0,1,0,24H188V64a12,12,0,0,1-24,0V52H152A12,12,0,0,1,140,40ZM252,88a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12,12,0,0,1,252,88Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M194.82,151.43l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0l-20.3-55.09-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3A7.92,7.92,0,0,1,194.82,151.43Z",opacity:"0.2"}),m.createElement("path",{d:"M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M196.89,130.94,144.4,111.6,125.06,59.11a13.92,13.92,0,0,0-26.12,0L79.6,111.6,27.11,130.94a13.92,13.92,0,0,0,0,26.12L79.6,176.4l19.34,52.49a13.92,13.92,0,0,0,26.12,0L144.4,176.4l52.49-19.34a13.92,13.92,0,0,0,0-26.12Zm-4.15,14.86-55.08,20.3a6,6,0,0,0-3.56,3.56l-20.3,55.08a1.92,1.92,0,0,1-3.6,0L89.9,169.66a6,6,0,0,0-3.56-3.56L31.26,145.8a1.92,1.92,0,0,1,0-3.6l55.08-20.3a6,6,0,0,0,3.56-3.56l20.3-55.08a1.92,1.92,0,0,1,3.6,0l20.3,55.08a6,6,0,0,0,3.56,3.56l55.08,20.3a1.92,1.92,0,0,1,0,3.6ZM146,40a6,6,0,0,1,6-6h18V16a6,6,0,0,1,12,0V34h18a6,6,0,0,1,0,12H182V64a6,6,0,0,1-12,0V46H152A6,6,0,0,1,146,40ZM246,88a6,6,0,0,1-6,6H230v10a6,6,0,0,1-12,0V94H208a6,6,0,0,1,0-12h10V72a6,6,0,0,1,12,0V82h10A6,6,0,0,1,246,88Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M196.2,132.81l-53.36-19.65L123.19,59.8a11.93,11.93,0,0,0-22.38,0L81.16,113.16,27.8,132.81a11.93,11.93,0,0,0,0,22.38l53.36,19.65,19.65,53.36a11.93,11.93,0,0,0,22.38,0l19.65-53.36,53.36-19.65a11.93,11.93,0,0,0,0-22.38Zm-2.77,14.87L138.35,168a4,4,0,0,0-2.37,2.37l-20.3,55.08a3.92,3.92,0,0,1-7.36,0L88,170.35A4,4,0,0,0,85.65,168l-55.08-20.3a3.92,3.92,0,0,1,0-7.36L85.65,120A4,4,0,0,0,88,117.65l20.3-55.08a3.92,3.92,0,0,1,7.36,0L136,117.65a4,4,0,0,0,2.37,2.37l55.08,20.3a3.92,3.92,0,0,1,0,7.36ZM148,40a4,4,0,0,1,4-4h20V16a4,4,0,0,1,8,0V36h20a4,4,0,0,1,0,8H180V64a4,4,0,0,1-8,0V44H152A4,4,0,0,1,148,40Zm96,48a4,4,0,0,1-4,4H228v12a4,4,0,0,1-8,0V92H208a4,4,0,0,1,0-8h12V72a4,4,0,0,1,8,0V84h12A4,4,0,0,1,244,88Z"}))]]),xb=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M116,36V20a12,12,0,0,1,24,0V36a12,12,0,0,1-24,0Zm80,92a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM48,128a12,12,0,0,0-12-12H20a12,12,0,0,0,0,24H36A12,12,0,0,0,48,128Zm80,80a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V220A12,12,0,0,0,128,208Zm108-92H220a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z",opacity:"0.2"}),m.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M122,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-16-16a6,6,0,0,0-8.48,8.48Zm0,119.52-16,16a6,6,0,1,0,8.48,8.48l16-16a6,6,0,1,0-8.48-8.48ZM192,70a6,6,0,0,0,4.24-1.76l16-16a6,6,0,0,0-8.48-8.48l-16,16A6,6,0,0,0,192,70Zm4.24,117.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48-8.48ZM46,128a6,6,0,0,0-6-6H16a6,6,0,0,0,0,12H40A6,6,0,0,0,46,128Zm82,82a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V216A6,6,0,0,0,128,210Zm112-88H216a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M124,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-16-16a4,4,0,0,0-5.66,5.66Zm0,122.34-16,16a4,4,0,0,0,5.66,5.66l16-16a4,4,0,0,0-5.66-5.66ZM192,68a4,4,0,0,0,2.83-1.17l16-16a4,4,0,1,0-5.66-5.66l-16,16A4,4,0,0,0,192,68Zm2.83,121.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66-5.66ZM40,124H16a4,4,0,0,0,0,8H40a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V216A4,4,0,0,0,128,212Zm112-88H216a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Z"}))]]),Sb=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M244,56v64a12,12,0,0,1-24,0V85l-75.51,75.52a12,12,0,0,1-17,0L96,129,32.49,192.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0L136,135l67-67H168a12,12,0,0,1,0-24h64A12,12,0,0,1,244,56Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M232,56v64L168,56Z",opacity:"0.2"}),m.createElement("path",{d:"M232,48H168a8,8,0,0,0-5.66,13.66L188.69,88,136,140.69l-34.34-34.35a8,8,0,0,0-11.32,0l-72,72a8,8,0,0,0,11.32,11.32L96,123.31l34.34,34.35a8,8,0,0,0,11.32,0L200,99.31l26.34,26.35A8,8,0,0,0,240,120V56A8,8,0,0,0,232,48Zm-8,52.69L187.31,64H224Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M240,56v64a8,8,0,0,1-13.66,5.66L200,99.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,188.69,88,162.34,61.66A8,8,0,0,1,168,48h64A8,8,0,0,1,240,56Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M238,56v64a6,6,0,0,1-12,0V70.48l-85.76,85.76a6,6,0,0,1-8.48,0L96,120.49,28.24,188.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0L136,143.51,217.52,62H168a6,6,0,0,1,0-12h64A6,6,0,0,1,238,56Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M236,56v64a4,4,0,0,1-8,0V65.66l-89.17,89.17a4,4,0,0,1-5.66,0L96,117.66,26.83,186.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0L136,146.34,222.34,60H168a4,4,0,0,1,0-8h64A4,4,0,0,1,236,56Z"}))]]),wb=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20ZM79.57,196.57a60,60,0,0,1,96.86,0,83.72,83.72,0,0,1-96.86,0ZM100,120a28,28,0,1,1,28,28A28,28,0,0,1,100,120ZM194,179.94a83.48,83.48,0,0,0-29-23.42,52,52,0,1,0-74,0,83.48,83.48,0,0,0-29,23.42,84,84,0,1,1,131.9,0Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M224,128a95.76,95.76,0,0,1-31.8,71.37A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-64.2,39.37h0A96,96,0,1,1,224,128Z",opacity:"0.2"}),m.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26ZM71.44,198a66,66,0,0,1,113.12,0,89.8,89.8,0,0,1-113.12,0ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120Zm99.51,69.64a77.53,77.53,0,0,0-40-31.38,46,46,0,1,0-51,0,77.53,77.53,0,0,0-40,31.38,90,90,0,1,1,131,0Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28ZM68.87,198.42a68,68,0,0,1,118.26,0,91.8,91.8,0,0,1-118.26,0Zm124.3-5.55a75.61,75.61,0,0,0-44.51-34,44,44,0,1,0-41.32,0,75.61,75.61,0,0,0-44.51,34,92,92,0,1,1,130.34,0ZM128,156a36,36,0,1,1,36-36A36,36,0,0,1,128,156Z"}))]]),Cb=m.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),tn=m.forwardRef((s,l)=>{const{alt:i,color:r,size:u,weight:d,mirrored:f,children:h,weights:g,...v}=s,{color:x="currentColor",size:S,weight:T="regular",mirrored:N=!1,..._}=m.useContext(Cb);return m.createElement("svg",{ref:l,xmlns:"http://www.w3.org/2000/svg",width:u??S,height:u??S,fill:r??x,viewBox:"0 0 256 256",transform:f||N?"scale(-1, 1)":void 0,..._,...v},!!i&&m.createElement("title",null,i),h,g.get(d??T))});tn.displayName="IconBase";const Ip=m.forwardRef((s,l)=>m.createElement(tn,{ref:l,...s,weights:fb}));Ip.displayName="BellIcon";const Qp=Ip,Kp=m.forwardRef((s,l)=>m.createElement(tn,{ref:l,...s,weights:pb}));Kp.displayName="ChartBarIcon";const $p=Kp,Jp=m.forwardRef((s,l)=>m.createElement(tn,{ref:l,...s,weights:hb}));Jp.displayName="DatabaseIcon";const Fp=Jp,Pp=m.forwardRef((s,l)=>m.createElement(tn,{ref:l,...s,weights:mb}));Pp.displayName="FlowArrowIcon";const Wp=Pp,eh=m.forwardRef((s,l)=>m.createElement(tn,{ref:l,...s,weights:gb}));eh.displayName="GearSixIcon";const Eu=eh,th=m.forwardRef((s,l)=>m.createElement(tn,{ref:l,...s,weights:bb}));th.displayName="MoonIcon";const Ab=th,nh=m.forwardRef((s,l)=>m.createElement(tn,{ref:l,...s,weights:vb}));nh.displayName="SignOutIcon";const Eb=nh,ah=m.forwardRef((s,l)=>m.createElement(tn,{ref:l,...s,weights:yb}));ah.displayName="SparkleIcon";const lh=ah,ih=m.forwardRef((s,l)=>m.createElement(tn,{ref:l,...s,weights:xb}));ih.displayName="SunIcon";const Nb=ih,sh=m.forwardRef((s,l)=>m.createElement(tn,{ref:l,...s,weights:Sb}));sh.displayName="TrendUpIcon";const rh=sh,oh=m.forwardRef((s,l)=>m.createElement(tn,{ref:l,...s,weights:wb}));oh.displayName="UserCircleIcon";const ep=oh;function Tb(s){return s?s.split("@")[0].slice(0,2).toUpperCase():null}function Nu({theme:s,onThemeToggle:l,onSignOut:i}){const[r,u]=m.useState(!1),[d,f]=m.useState(!1),[h,g]=m.useState(Kc),v=m.useRef(null);m.useEffect(()=>{function N(_){v.current&&!v.current.contains(_.target)&&u(!1)}return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[]);function x(){c8(h.trim())}function S(){o8(),i()}const T=Tb(Kc());return y.jsxs("div",{className:"user-menu",ref:v,children:[y.jsx("button",{className:"user-avatar-btn",onClick:()=>{u(N=>!N),f(!1)},"aria-label":"User menu",children:T?y.jsx("span",{className:"user-avatar-initials",children:T}):y.jsx(ep,{size:20,weight:"fill"})}),r&&y.jsxs("div",{className:"user-dropdown",children:[y.jsxs("div",{className:"user-dropdown-identity",children:[y.jsx("div",{className:"user-avatar-lg",children:T||y.jsx(ep,{size:22,weight:"fill"})}),y.jsx("div",{className:"user-dropdown-email",children:Kc()||"No email set"})]}),y.jsx("div",{className:"user-dropdown-divider"}),y.jsxs("button",{className:"user-dropdown-item",onClick:l,children:[s==="dark"?y.jsx(Nb,{size:15,weight:"regular"}):y.jsx(Ab,{size:15,weight:"regular"}),y.jsx("span",{children:s==="dark"?"Light mode":"Dark mode"})]}),y.jsx("div",{className:"user-dropdown-divider"}),y.jsxs("button",{className:"user-dropdown-item",onClick:()=>f(N=>!N),children:[y.jsx(Eu,{size:15,weight:"regular"}),y.jsx("span",{children:"Settings"})]}),d&&y.jsxs("div",{className:"user-settings-panel",children:[y.jsx("label",{className:"user-settings-label",children:"Email"}),y.jsx("input",{className:"user-settings-input",type:"email",value:h,onChange:N=>g(N.target.value),onBlur:x,placeholder:"you@ennabl.com"})]}),y.jsx("div",{className:"user-dropdown-divider"}),y.jsxs("button",{className:"user-dropdown-item user-dropdown-item--danger",onClick:S,children:[y.jsx(Eb,{size:15,weight:"regular"}),y.jsx("span",{children:"Sign out"})]})]})]})}const Db={Sparkle:lh,ChartBar:$p,FlowArrow:Wp,Database:Fp,TrendUp:rh,Bell:Qp,GearSix:Eu};function kb({prds:s,onNavigate:l,theme:i,onThemeToggle:r,onSignOut:u}){return y.jsxs("div",{className:"projects-page",children:[y.jsxs("header",{className:"projects-header",children:[y.jsxs("div",{className:"projects-logo",children:[y.jsx("span",{className:"projects-logo-name",children:"ennabl"}),y.jsx("span",{className:"projects-logo-suffix",children:"builder"})]}),y.jsx(Nu,{theme:i,onThemeToggle:r,onSignOut:u})]}),y.jsxs("main",{className:"projects-main",children:[y.jsx("h1",{className:"projects-title",children:"Projects"}),y.jsx("div",{className:"projects-grid",children:Yp.map(d=>{const f=s.filter(v=>v.projectId===d.id),h=f.filter(v=>v.status==="doing").length,g=Db[d.phosphorIcon];return y.jsxs("button",{className:"project-card",onClick:()=>l({page:"project",projectId:d.id}),children:[y.jsx("div",{className:"project-card-icon",children:g&&y.jsx(g,{size:28,weight:"regular"})}),y.jsx("div",{className:"project-card-name",children:d.name}),y.jsx("div",{className:"project-card-meta",children:f.length>0?y.jsxs(y.Fragment,{children:[y.jsxs("span",{className:"project-card-count",children:[f.length," PRD",f.length!==1?"s":""]}),h>0&&y.jsxs("span",{className:"project-card-doing",children:[h," doing"]})]}):y.jsx("span",{className:"project-card-empty",children:"No PRDs yet"})})]},d.id)})})]})]})}var Mi=mp();function Mb(){for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return m.useMemo(()=>r=>{l.forEach(u=>u(r))},l)}const Ar=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Rl(s){const l=Object.prototype.toString.call(s);return l==="[object Window]"||l==="[object global]"}function Tu(s){return"nodeType"in s}function vt(s){var l,i;return s?Rl(s)?s:Tu(s)&&(l=(i=s.ownerDocument)==null?void 0:i.defaultView)!=null?l:window:window}function Du(s){const{Document:l}=vt(s);return s instanceof l}function Bi(s){return Rl(s)?!1:s instanceof vt(s).HTMLElement}function ch(s){return s instanceof vt(s).SVGElement}function Ol(s){return s?Rl(s)?s.document:Tu(s)?Du(s)?s:Bi(s)||ch(s)?s.ownerDocument:document:document:document}const cn=Ar?m.useLayoutEffect:m.useEffect;function Er(s){const l=m.useRef(s);return cn(()=>{l.current=s}),m.useCallback(function(){for(var i=arguments.length,r=new Array(i),u=0;u<i;u++)r[u]=arguments[u];return l.current==null?void 0:l.current(...r)},[])}function Rb(){const s=m.useRef(null),l=m.useCallback((r,u)=>{s.current=setInterval(r,u)},[]),i=m.useCallback(()=>{s.current!==null&&(clearInterval(s.current),s.current=null)},[]);return[l,i]}function Li(s,l){l===void 0&&(l=[s]);const i=m.useRef(s);return cn(()=>{i.current!==s&&(i.current=s)},l),i}function qi(s,l){const i=m.useRef();return m.useMemo(()=>{const r=s(i.current);return i.current=r,r},[...l])}function gr(s){const l=Er(s),i=m.useRef(null),r=m.useCallback(u=>{u!==i.current&&(l==null||l(u,i.current)),i.current=u},[]);return[i,r]}function br(s){const l=m.useRef();return m.useEffect(()=>{l.current=s},[s]),l.current}let Pc={};function Vi(s,l){return m.useMemo(()=>{if(l)return l;const i=Pc[s]==null?0:Pc[s]+1;return Pc[s]=i,s+"-"+i},[s,l])}function uh(s){return function(l){for(var i=arguments.length,r=new Array(i>1?i-1:0),u=1;u<i;u++)r[u-1]=arguments[u];return r.reduce((d,f)=>{const h=Object.entries(f);for(const[g,v]of h){const x=d[g];x!=null&&(d[g]=x+s*v)}return d},{...l})}}const Ml=uh(1),vr=uh(-1);function Ob(s){return"clientX"in s&&"clientY"in s}function Nr(s){if(!s)return!1;const{KeyboardEvent:l}=vt(s.target);return l&&s instanceof l}function zb(s){if(!s)return!1;const{TouchEvent:l}=vt(s.target);return l&&s instanceof l}function yr(s){if(zb(s)){if(s.touches&&s.touches.length){const{clientX:l,clientY:i}=s.touches[0];return{x:l,y:i}}else if(s.changedTouches&&s.changedTouches.length){const{clientX:l,clientY:i}=s.changedTouches[0];return{x:l,y:i}}}return Ob(s)?{x:s.clientX,y:s.clientY}:null}const va=Object.freeze({Translate:{toString(s){if(!s)return;const{x:l,y:i}=s;return"translate3d("+(l?Math.round(l):0)+"px, "+(i?Math.round(i):0)+"px, 0)"}},Scale:{toString(s){if(!s)return;const{scaleX:l,scaleY:i}=s;return"scaleX("+l+") scaleY("+i+")"}},Transform:{toString(s){if(s)return[va.Translate.toString(s),va.Scale.toString(s)].join(" ")}},Transition:{toString(s){let{property:l,duration:i,easing:r}=s;return l+" "+i+"ms "+r}}}),tp="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function jb(s){return s.matches(tp)?s:s.querySelector(tp)}const _b={display:"none"};function Lb(s){let{id:l,value:i}=s;return Be.createElement("div",{id:l,style:_b},i)}function Ub(s){let{id:l,announcement:i,ariaLiveType:r="assertive"}=s;const u={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return Be.createElement("div",{id:l,style:u,role:"status","aria-live":r,"aria-atomic":!0},i)}function Hb(){const[s,l]=m.useState("");return{announce:m.useCallback(r=>{r!=null&&l(r)},[]),announcement:s}}const dh=m.createContext(null);function Zb(s){const l=m.useContext(dh);m.useEffect(()=>{if(!l)throw new Error("useDndMonitor must be used within a children of <DndContext>");return l(s)},[s,l])}function Bb(){const[s]=m.useState(()=>new Set),l=m.useCallback(r=>(s.add(r),()=>s.delete(r)),[s]);return[m.useCallback(r=>{let{type:u,event:d}=r;s.forEach(f=>{var h;return(h=f[u])==null?void 0:h.call(f,d)})},[s]),l]}const qb={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Vb={onDragStart(s){let{active:l}=s;return"Picked up draggable item "+l.id+"."},onDragOver(s){let{active:l,over:i}=s;return i?"Draggable item "+l.id+" was moved over droppable area "+i.id+".":"Draggable item "+l.id+" is no longer over a droppable area."},onDragEnd(s){let{active:l,over:i}=s;return i?"Draggable item "+l.id+" was dropped over droppable area "+i.id:"Draggable item "+l.id+" was dropped."},onDragCancel(s){let{active:l}=s;return"Dragging was cancelled. Draggable item "+l.id+" was dropped."}};function Yb(s){let{announcements:l=Vb,container:i,hiddenTextDescribedById:r,screenReaderInstructions:u=qb}=s;const{announce:d,announcement:f}=Hb(),h=Vi("DndLiveRegion"),[g,v]=m.useState(!1);if(m.useEffect(()=>{v(!0)},[]),Zb(m.useMemo(()=>({onDragStart(S){let{active:T}=S;d(l.onDragStart({active:T}))},onDragMove(S){let{active:T,over:N}=S;l.onDragMove&&d(l.onDragMove({active:T,over:N}))},onDragOver(S){let{active:T,over:N}=S;d(l.onDragOver({active:T,over:N}))},onDragEnd(S){let{active:T,over:N}=S;d(l.onDragEnd({active:T,over:N}))},onDragCancel(S){let{active:T,over:N}=S;d(l.onDragCancel({active:T,over:N}))}}),[d,l])),!g)return null;const x=Be.createElement(Be.Fragment,null,Be.createElement(Lb,{id:r,value:u.draggable}),Be.createElement(Ub,{id:h,announcement:f}));return i?Mi.createPortal(x,i):x}var et;(function(s){s.DragStart="dragStart",s.DragMove="dragMove",s.DragEnd="dragEnd",s.DragCancel="dragCancel",s.DragOver="dragOver",s.RegisterDroppable="registerDroppable",s.SetDroppableDisabled="setDroppableDisabled",s.UnregisterDroppable="unregisterDroppable"})(et||(et={}));function xr(){}function Gb(s,l){return m.useMemo(()=>({sensor:s,options:l??{}}),[s,l])}function Xb(){for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return m.useMemo(()=>[...l].filter(r=>r!=null),[...l])}const un=Object.freeze({x:0,y:0});function Ib(s,l){return Math.sqrt(Math.pow(s.x-l.x,2)+Math.pow(s.y-l.y,2))}function Qb(s,l){const i=yr(s);if(!i)return"0 0";const r={x:(i.x-l.left)/l.width*100,y:(i.y-l.top)/l.height*100};return r.x+"% "+r.y+"%"}function Kb(s,l){let{data:{value:i}}=s,{data:{value:r}}=l;return i-r}function $b(s,l){let{data:{value:i}}=s,{data:{value:r}}=l;return r-i}function np(s){let{left:l,top:i,height:r,width:u}=s;return[{x:l,y:i},{x:l+u,y:i},{x:l,y:i+r},{x:l+u,y:i+r}]}function Jb(s,l){if(!s||s.length===0)return null;const[i]=s;return i[l]}const Fb=s=>{let{collisionRect:l,droppableRects:i,droppableContainers:r}=s;const u=np(l),d=[];for(const f of r){const{id:h}=f,g=i.get(h);if(g){const v=np(g),x=u.reduce((T,N,_)=>T+Ib(v[_],N),0),S=Number((x/4).toFixed(4));d.push({id:h,data:{droppableContainer:f,value:S}})}}return d.sort(Kb)};function Pb(s,l){const i=Math.max(l.top,s.top),r=Math.max(l.left,s.left),u=Math.min(l.left+l.width,s.left+s.width),d=Math.min(l.top+l.height,s.top+s.height),f=u-r,h=d-i;if(r<u&&i<d){const g=l.width*l.height,v=s.width*s.height,x=f*h,S=x/(g+v-x);return Number(S.toFixed(4))}return 0}const Wb=s=>{let{collisionRect:l,droppableRects:i,droppableContainers:r}=s;const u=[];for(const d of r){const{id:f}=d,h=i.get(f);if(h){const g=Pb(h,l);g>0&&u.push({id:f,data:{droppableContainer:d,value:g}})}}return u.sort($b)};function ev(s,l,i){return{...s,scaleX:l&&i?l.width/i.width:1,scaleY:l&&i?l.height/i.height:1}}function fh(s,l){return s&&l?{x:s.left-l.left,y:s.top-l.top}:un}function tv(s){return function(i){for(var r=arguments.length,u=new Array(r>1?r-1:0),d=1;d<r;d++)u[d-1]=arguments[d];return u.reduce((f,h)=>({...f,top:f.top+s*h.y,bottom:f.bottom+s*h.y,left:f.left+s*h.x,right:f.right+s*h.x}),{...i})}}const nv=tv(1);function ph(s){if(s.startsWith("matrix3d(")){const l=s.slice(9,-1).split(/, /);return{x:+l[12],y:+l[13],scaleX:+l[0],scaleY:+l[5]}}else if(s.startsWith("matrix(")){const l=s.slice(7,-1).split(/, /);return{x:+l[4],y:+l[5],scaleX:+l[0],scaleY:+l[3]}}return null}function av(s,l,i){const r=ph(l);if(!r)return s;const{scaleX:u,scaleY:d,x:f,y:h}=r,g=s.left-f-(1-u)*parseFloat(i),v=s.top-h-(1-d)*parseFloat(i.slice(i.indexOf(" ")+1)),x=u?s.width/u:s.width,S=d?s.height/d:s.height;return{width:x,height:S,top:v,right:g+x,bottom:v+S,left:g}}const lv={ignoreTransform:!1};function zl(s,l){l===void 0&&(l=lv);let i=s.getBoundingClientRect();if(l.ignoreTransform){const{transform:v,transformOrigin:x}=vt(s).getComputedStyle(s);v&&(i=av(i,v,x))}const{top:r,left:u,width:d,height:f,bottom:h,right:g}=i;return{top:r,left:u,width:d,height:f,bottom:h,right:g}}function ap(s){return zl(s,{ignoreTransform:!0})}function iv(s){const l=s.innerWidth,i=s.innerHeight;return{top:0,left:0,right:l,bottom:i,width:l,height:i}}function sv(s,l){return l===void 0&&(l=vt(s).getComputedStyle(s)),l.position==="fixed"}function rv(s,l){l===void 0&&(l=vt(s).getComputedStyle(s));const i=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(u=>{const d=l[u];return typeof d=="string"?i.test(d):!1})}function ku(s,l){const i=[];function r(u){if(l!=null&&i.length>=l||!u)return i;if(Du(u)&&u.scrollingElement!=null&&!i.includes(u.scrollingElement))return i.push(u.scrollingElement),i;if(!Bi(u)||ch(u)||i.includes(u))return i;const d=vt(s).getComputedStyle(u);return u!==s&&rv(u,d)&&i.push(u),sv(u,d)?i:r(u.parentNode)}return s?r(s):i}function hh(s){const[l]=ku(s,1);return l??null}function Wc(s){return!Ar||!s?null:Rl(s)?s:Tu(s)?Du(s)||s===Ol(s).scrollingElement?window:Bi(s)?s:null:null}function mh(s){return Rl(s)?s.scrollX:s.scrollLeft}function gh(s){return Rl(s)?s.scrollY:s.scrollTop}function ou(s){return{x:mh(s),y:gh(s)}}var lt;(function(s){s[s.Forward=1]="Forward",s[s.Backward=-1]="Backward"})(lt||(lt={}));function bh(s){return!Ar||!s?!1:s===document.scrollingElement}function vh(s){const l={x:0,y:0},i=bh(s)?{height:window.innerHeight,width:window.innerWidth}:{height:s.clientHeight,width:s.clientWidth},r={x:s.scrollWidth-i.width,y:s.scrollHeight-i.height},u=s.scrollTop<=l.y,d=s.scrollLeft<=l.x,f=s.scrollTop>=r.y,h=s.scrollLeft>=r.x;return{isTop:u,isLeft:d,isBottom:f,isRight:h,maxScroll:r,minScroll:l}}const ov={x:.2,y:.2};function cv(s,l,i,r,u){let{top:d,left:f,right:h,bottom:g}=i;r===void 0&&(r=10),u===void 0&&(u=ov);const{isTop:v,isBottom:x,isLeft:S,isRight:T}=vh(s),N={x:0,y:0},_={x:0,y:0},z={height:l.height*u.y,width:l.width*u.x};return!v&&d<=l.top+z.height?(N.y=lt.Backward,_.y=r*Math.abs((l.top+z.height-d)/z.height)):!x&&g>=l.bottom-z.height&&(N.y=lt.Forward,_.y=r*Math.abs((l.bottom-z.height-g)/z.height)),!T&&h>=l.right-z.width?(N.x=lt.Forward,_.x=r*Math.abs((l.right-z.width-h)/z.width)):!S&&f<=l.left+z.width&&(N.x=lt.Backward,_.x=r*Math.abs((l.left+z.width-f)/z.width)),{direction:N,speed:_}}function uv(s){if(s===document.scrollingElement){const{innerWidth:d,innerHeight:f}=window;return{top:0,left:0,right:d,bottom:f,width:d,height:f}}const{top:l,left:i,right:r,bottom:u}=s.getBoundingClientRect();return{top:l,left:i,right:r,bottom:u,width:s.clientWidth,height:s.clientHeight}}function yh(s){return s.reduce((l,i)=>Ml(l,ou(i)),un)}function dv(s){return s.reduce((l,i)=>l+mh(i),0)}function fv(s){return s.reduce((l,i)=>l+gh(i),0)}function xh(s,l){if(l===void 0&&(l=zl),!s)return;const{top:i,left:r,bottom:u,right:d}=l(s);hh(s)&&(u<=0||d<=0||i>=window.innerHeight||r>=window.innerWidth)&&s.scrollIntoView({block:"center",inline:"center"})}const pv=[["x",["left","right"],dv],["y",["top","bottom"],fv]];class Mu{constructor(l,i){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=ku(i),u=yh(r);this.rect={...l},this.width=l.width,this.height=l.height;for(const[d,f,h]of pv)for(const g of f)Object.defineProperty(this,g,{get:()=>{const v=h(r),x=u[d]-v;return this.rect[g]+x},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class zi{constructor(l){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(i=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...i)})},this.target=l}add(l,i,r){var u;(u=this.target)==null||u.addEventListener(l,i,r),this.listeners.push([l,i,r])}}function hv(s){const{EventTarget:l}=vt(s);return s instanceof l?s:Ol(s)}function eu(s,l){const i=Math.abs(s.x),r=Math.abs(s.y);return typeof l=="number"?Math.sqrt(i**2+r**2)>l:"x"in l&&"y"in l?i>l.x&&r>l.y:"x"in l?i>l.x:"y"in l?r>l.y:!1}var en;(function(s){s.Click="click",s.DragStart="dragstart",s.Keydown="keydown",s.ContextMenu="contextmenu",s.Resize="resize",s.SelectionChange="selectionchange",s.VisibilityChange="visibilitychange"})(en||(en={}));function lp(s){s.preventDefault()}function mv(s){s.stopPropagation()}var Ee;(function(s){s.Space="Space",s.Down="ArrowDown",s.Right="ArrowRight",s.Left="ArrowLeft",s.Up="ArrowUp",s.Esc="Escape",s.Enter="Enter",s.Tab="Tab"})(Ee||(Ee={}));const Sh={start:[Ee.Space,Ee.Enter],cancel:[Ee.Esc],end:[Ee.Space,Ee.Enter,Ee.Tab]},gv=(s,l)=>{let{currentCoordinates:i}=l;switch(s.code){case Ee.Right:return{...i,x:i.x+25};case Ee.Left:return{...i,x:i.x-25};case Ee.Down:return{...i,y:i.y+25};case Ee.Up:return{...i,y:i.y-25}}};class wh{constructor(l){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=l;const{event:{target:i}}=l;this.props=l,this.listeners=new zi(Ol(i)),this.windowListeners=new zi(vt(i)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(en.Resize,this.handleCancel),this.windowListeners.add(en.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(en.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:l,onStart:i}=this.props,r=l.node.current;r&&xh(r),i(un)}handleKeyDown(l){if(Nr(l)){const{active:i,context:r,options:u}=this.props,{keyboardCodes:d=Sh,coordinateGetter:f=gv,scrollBehavior:h="smooth"}=u,{code:g}=l;if(d.end.includes(g)){this.handleEnd(l);return}if(d.cancel.includes(g)){this.handleCancel(l);return}const{collisionRect:v}=r.current,x=v?{x:v.left,y:v.top}:un;this.referenceCoordinates||(this.referenceCoordinates=x);const S=f(l,{active:i,context:r.current,currentCoordinates:x});if(S){const T=vr(S,x),N={x:0,y:0},{scrollableAncestors:_}=r.current;for(const z of _){const Z=l.code,{isTop:q,isRight:Y,isLeft:I,isBottom:Q,maxScroll:F,minScroll:K}=vh(z),B=uv(z),P={x:Math.min(Z===Ee.Right?B.right-B.width/2:B.right,Math.max(Z===Ee.Right?B.left:B.left+B.width/2,S.x)),y:Math.min(Z===Ee.Down?B.bottom-B.height/2:B.bottom,Math.max(Z===Ee.Down?B.top:B.top+B.height/2,S.y))},$=Z===Ee.Right&&!Y||Z===Ee.Left&&!I,ne=Z===Ee.Down&&!Q||Z===Ee.Up&&!q;if($&&P.x!==S.x){const se=z.scrollLeft+T.x,re=Z===Ee.Right&&se<=F.x||Z===Ee.Left&&se>=K.x;if(re&&!T.y){z.scrollTo({left:se,behavior:h});return}re?N.x=z.scrollLeft-se:N.x=Z===Ee.Right?z.scrollLeft-F.x:z.scrollLeft-K.x,N.x&&z.scrollBy({left:-N.x,behavior:h});break}else if(ne&&P.y!==S.y){const se=z.scrollTop+T.y,re=Z===Ee.Down&&se<=F.y||Z===Ee.Up&&se>=K.y;if(re&&!T.x){z.scrollTo({top:se,behavior:h});return}re?N.y=z.scrollTop-se:N.y=Z===Ee.Down?z.scrollTop-F.y:z.scrollTop-K.y,N.y&&z.scrollBy({top:-N.y,behavior:h});break}}this.handleMove(l,Ml(vr(S,this.referenceCoordinates),N))}}}handleMove(l,i){const{onMove:r}=this.props;l.preventDefault(),r(i)}handleEnd(l){const{onEnd:i}=this.props;l.preventDefault(),this.detach(),i()}handleCancel(l){const{onCancel:i}=this.props;l.preventDefault(),this.detach(),i()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}wh.activators=[{eventName:"onKeyDown",handler:(s,l,i)=>{let{keyboardCodes:r=Sh,onActivation:u}=l,{active:d}=i;const{code:f}=s.nativeEvent;if(r.start.includes(f)){const h=d.activatorNode.current;return h&&s.target!==h?!1:(s.preventDefault(),u==null||u({event:s.nativeEvent}),!0)}return!1}}];function ip(s){return!!(s&&"distance"in s)}function sp(s){return!!(s&&"delay"in s)}class Ru{constructor(l,i,r){var u;r===void 0&&(r=hv(l.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=l,this.events=i;const{event:d}=l,{target:f}=d;this.props=l,this.events=i,this.document=Ol(f),this.documentListeners=new zi(this.document),this.listeners=new zi(r),this.windowListeners=new zi(vt(f)),this.initialCoordinates=(u=yr(d))!=null?u:un,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:l,props:{options:{activationConstraint:i,bypassActivationConstraint:r}}}=this;if(this.listeners.add(l.move.name,this.handleMove,{passive:!1}),this.listeners.add(l.end.name,this.handleEnd),l.cancel&&this.listeners.add(l.cancel.name,this.handleCancel),this.windowListeners.add(en.Resize,this.handleCancel),this.windowListeners.add(en.DragStart,lp),this.windowListeners.add(en.VisibilityChange,this.handleCancel),this.windowListeners.add(en.ContextMenu,lp),this.documentListeners.add(en.Keydown,this.handleKeydown),i){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(sp(i)){this.timeoutId=setTimeout(this.handleStart,i.delay),this.handlePending(i);return}if(ip(i)){this.handlePending(i);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(l,i){const{active:r,onPending:u}=this.props;u(r,l,this.initialCoordinates,i)}handleStart(){const{initialCoordinates:l}=this,{onStart:i}=this.props;l&&(this.activated=!0,this.documentListeners.add(en.Click,mv,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(en.SelectionChange,this.removeTextSelection),i(l))}handleMove(l){var i;const{activated:r,initialCoordinates:u,props:d}=this,{onMove:f,options:{activationConstraint:h}}=d;if(!u)return;const g=(i=yr(l))!=null?i:un,v=vr(u,g);if(!r&&h){if(ip(h)){if(h.tolerance!=null&&eu(v,h.tolerance))return this.handleCancel();if(eu(v,h.distance))return this.handleStart()}if(sp(h)&&eu(v,h.tolerance))return this.handleCancel();this.handlePending(h,v);return}l.cancelable&&l.preventDefault(),f(g)}handleEnd(){const{onAbort:l,onEnd:i}=this.props;this.detach(),this.activated||l(this.props.active),i()}handleCancel(){const{onAbort:l,onCancel:i}=this.props;this.detach(),this.activated||l(this.props.active),i()}handleKeydown(l){l.code===Ee.Esc&&this.handleCancel()}removeTextSelection(){var l;(l=this.document.getSelection())==null||l.removeAllRanges()}}const bv={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Ou extends Ru{constructor(l){const{event:i}=l,r=Ol(i.target);super(l,bv,r)}}Ou.activators=[{eventName:"onPointerDown",handler:(s,l)=>{let{nativeEvent:i}=s,{onActivation:r}=l;return!i.isPrimary||i.button!==0?!1:(r==null||r({event:i}),!0)}}];const vv={move:{name:"mousemove"},end:{name:"mouseup"}};var cu;(function(s){s[s.RightClick=2]="RightClick"})(cu||(cu={}));class yv extends Ru{constructor(l){super(l,vv,Ol(l.event.target))}}yv.activators=[{eventName:"onMouseDown",handler:(s,l)=>{let{nativeEvent:i}=s,{onActivation:r}=l;return i.button===cu.RightClick?!1:(r==null||r({event:i}),!0)}}];const tu={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class xv extends Ru{constructor(l){super(l,tu)}static setup(){return window.addEventListener(tu.move.name,l,{capture:!1,passive:!1}),function(){window.removeEventListener(tu.move.name,l)};function l(){}}}xv.activators=[{eventName:"onTouchStart",handler:(s,l)=>{let{nativeEvent:i}=s,{onActivation:r}=l;const{touches:u}=i;return u.length>1?!1:(r==null||r({event:i}),!0)}}];var ji;(function(s){s[s.Pointer=0]="Pointer",s[s.DraggableRect=1]="DraggableRect"})(ji||(ji={}));var Sr;(function(s){s[s.TreeOrder=0]="TreeOrder",s[s.ReversedTreeOrder=1]="ReversedTreeOrder"})(Sr||(Sr={}));function Sv(s){let{acceleration:l,activator:i=ji.Pointer,canScroll:r,draggingRect:u,enabled:d,interval:f=5,order:h=Sr.TreeOrder,pointerCoordinates:g,scrollableAncestors:v,scrollableAncestorRects:x,delta:S,threshold:T}=s;const N=Cv({delta:S,disabled:!d}),[_,z]=Rb(),Z=m.useRef({x:0,y:0}),q=m.useRef({x:0,y:0}),Y=m.useMemo(()=>{switch(i){case ji.Pointer:return g?{top:g.y,bottom:g.y,left:g.x,right:g.x}:null;case ji.DraggableRect:return u}},[i,u,g]),I=m.useRef(null),Q=m.useCallback(()=>{const K=I.current;if(!K)return;const B=Z.current.x*q.current.x,P=Z.current.y*q.current.y;K.scrollBy(B,P)},[]),F=m.useMemo(()=>h===Sr.TreeOrder?[...v].reverse():v,[h,v]);m.useEffect(()=>{if(!d||!v.length||!Y){z();return}for(const K of F){if((r==null?void 0:r(K))===!1)continue;const B=v.indexOf(K),P=x[B];if(!P)continue;const{direction:$,speed:ne}=cv(K,P,Y,l,T);for(const se of["x","y"])N[se][$[se]]||(ne[se]=0,$[se]=0);if(ne.x>0||ne.y>0){z(),I.current=K,_(Q,f),Z.current=ne,q.current=$;return}}Z.current={x:0,y:0},q.current={x:0,y:0},z()},[l,Q,r,z,d,f,JSON.stringify(Y),JSON.stringify(N),_,v,F,x,JSON.stringify(T)])}const wv={x:{[lt.Backward]:!1,[lt.Forward]:!1},y:{[lt.Backward]:!1,[lt.Forward]:!1}};function Cv(s){let{delta:l,disabled:i}=s;const r=br(l);return qi(u=>{if(i||!r||!u)return wv;const d={x:Math.sign(l.x-r.x),y:Math.sign(l.y-r.y)};return{x:{[lt.Backward]:u.x[lt.Backward]||d.x===-1,[lt.Forward]:u.x[lt.Forward]||d.x===1},y:{[lt.Backward]:u.y[lt.Backward]||d.y===-1,[lt.Forward]:u.y[lt.Forward]||d.y===1}}},[i,l,r])}function Av(s,l){const i=l!=null?s.get(l):void 0,r=i?i.node.current:null;return qi(u=>{var d;return l==null?null:(d=r??u)!=null?d:null},[r,l])}function Ev(s,l){return m.useMemo(()=>s.reduce((i,r)=>{const{sensor:u}=r,d=u.activators.map(f=>({eventName:f.eventName,handler:l(f.handler,r)}));return[...i,...d]},[]),[s,l])}var Ui;(function(s){s[s.Always=0]="Always",s[s.BeforeDragging=1]="BeforeDragging",s[s.WhileDragging=2]="WhileDragging"})(Ui||(Ui={}));var uu;(function(s){s.Optimized="optimized"})(uu||(uu={}));const rp=new Map;function Nv(s,l){let{dragging:i,dependencies:r,config:u}=l;const[d,f]=m.useState(null),{frequency:h,measure:g,strategy:v}=u,x=m.useRef(s),S=Z(),T=Li(S),N=m.useCallback(function(q){q===void 0&&(q=[]),!T.current&&f(Y=>Y===null?q:Y.concat(q.filter(I=>!Y.includes(I))))},[T]),_=m.useRef(null),z=qi(q=>{if(S&&!i)return rp;if(!q||q===rp||x.current!==s||d!=null){const Y=new Map;for(let I of s){if(!I)continue;if(d&&d.length>0&&!d.includes(I.id)&&I.rect.current){Y.set(I.id,I.rect.current);continue}const Q=I.node.current,F=Q?new Mu(g(Q),Q):null;I.rect.current=F,F&&Y.set(I.id,F)}return Y}return q},[s,d,i,S,g]);return m.useEffect(()=>{x.current=s},[s]),m.useEffect(()=>{S||N()},[i,S]),m.useEffect(()=>{d&&d.length>0&&f(null)},[JSON.stringify(d)]),m.useEffect(()=>{S||typeof h!="number"||_.current!==null||(_.current=setTimeout(()=>{N(),_.current=null},h))},[h,S,N,...r]),{droppableRects:z,measureDroppableContainers:N,measuringScheduled:d!=null};function Z(){switch(v){case Ui.Always:return!1;case Ui.BeforeDragging:return i;default:return!i}}}function zu(s,l){return qi(i=>s?i||(typeof l=="function"?l(s):s):null,[l,s])}function Tv(s,l){return zu(s,l)}function Dv(s){let{callback:l,disabled:i}=s;const r=Er(l),u=m.useMemo(()=>{if(i||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:d}=window;return new d(r)},[r,i]);return m.useEffect(()=>()=>u==null?void 0:u.disconnect(),[u]),u}function Tr(s){let{callback:l,disabled:i}=s;const r=Er(l),u=m.useMemo(()=>{if(i||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:d}=window;return new d(r)},[i]);return m.useEffect(()=>()=>u==null?void 0:u.disconnect(),[u]),u}function kv(s){return new Mu(zl(s),s)}function op(s,l,i){l===void 0&&(l=kv);const[r,u]=m.useState(null);function d(){u(g=>{if(!s)return null;if(s.isConnected===!1){var v;return(v=g??i)!=null?v:null}const x=l(s);return JSON.stringify(g)===JSON.stringify(x)?g:x})}const f=Dv({callback(g){if(s)for(const v of g){const{type:x,target:S}=v;if(x==="childList"&&S instanceof HTMLElement&&S.contains(s)){d();break}}}}),h=Tr({callback:d});return cn(()=>{d(),s?(h==null||h.observe(s),f==null||f.observe(document.body,{childList:!0,subtree:!0})):(h==null||h.disconnect(),f==null||f.disconnect())},[s]),r}function Mv(s){const l=zu(s);return fh(s,l)}const cp=[];function Rv(s){const l=m.useRef(s),i=qi(r=>s?r&&r!==cp&&s&&l.current&&s.parentNode===l.current.parentNode?r:ku(s):cp,[s]);return m.useEffect(()=>{l.current=s},[s]),i}function Ov(s){const[l,i]=m.useState(null),r=m.useRef(s),u=m.useCallback(d=>{const f=Wc(d.target);f&&i(h=>h?(h.set(f,ou(f)),new Map(h)):null)},[]);return m.useEffect(()=>{const d=r.current;if(s!==d){f(d);const h=s.map(g=>{const v=Wc(g);return v?(v.addEventListener("scroll",u,{passive:!0}),[v,ou(v)]):null}).filter(g=>g!=null);i(h.length?new Map(h):null),r.current=s}return()=>{f(s),f(d)};function f(h){h.forEach(g=>{const v=Wc(g);v==null||v.removeEventListener("scroll",u)})}},[u,s]),m.useMemo(()=>s.length?l?Array.from(l.values()).reduce((d,f)=>Ml(d,f),un):yh(s):un,[s,l])}function up(s,l){l===void 0&&(l=[]);const i=m.useRef(null);return m.useEffect(()=>{i.current=null},l),m.useEffect(()=>{const r=s!==un;r&&!i.current&&(i.current=s),!r&&i.current&&(i.current=null)},[s]),i.current?vr(s,i.current):un}function zv(s){m.useEffect(()=>{if(!Ar)return;const l=s.map(i=>{let{sensor:r}=i;return r.setup==null?void 0:r.setup()});return()=>{for(const i of l)i==null||i()}},s.map(l=>{let{sensor:i}=l;return i}))}function jv(s,l){return m.useMemo(()=>s.reduce((i,r)=>{let{eventName:u,handler:d}=r;return i[u]=f=>{d(f,l)},i},{}),[s,l])}function Ch(s){return m.useMemo(()=>s?iv(s):null,[s])}const dp=[];function _v(s,l){l===void 0&&(l=zl);const[i]=s,r=Ch(i?vt(i):null),[u,d]=m.useState(dp);function f(){d(()=>s.length?s.map(g=>bh(g)?r:new Mu(l(g),g)):dp)}const h=Tr({callback:f});return cn(()=>{h==null||h.disconnect(),f(),s.forEach(g=>h==null?void 0:h.observe(g))},[s]),u}function Ah(s){if(!s)return null;if(s.children.length>1)return s;const l=s.children[0];return Bi(l)?l:s}function Lv(s){let{measure:l}=s;const[i,r]=m.useState(null),u=m.useCallback(v=>{for(const{target:x}of v)if(Bi(x)){r(S=>{const T=l(x);return S?{...S,width:T.width,height:T.height}:T});break}},[l]),d=Tr({callback:u}),f=m.useCallback(v=>{const x=Ah(v);d==null||d.disconnect(),x&&(d==null||d.observe(x)),r(x?l(x):null)},[l,d]),[h,g]=gr(f);return m.useMemo(()=>({nodeRef:h,rect:i,setRef:g}),[i,h,g])}const Uv=[{sensor:Ou,options:{}},{sensor:wh,options:{}}],Hv={current:{}},fr={draggable:{measure:ap},droppable:{measure:ap,strategy:Ui.WhileDragging,frequency:uu.Optimized},dragOverlay:{measure:zl}};class _i extends Map{get(l){var i;return l!=null&&(i=super.get(l))!=null?i:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(l=>{let{disabled:i}=l;return!i})}getNodeFor(l){var i,r;return(i=(r=this.get(l))==null?void 0:r.node.current)!=null?i:void 0}}const Zv={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new _i,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:xr},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:fr,measureDroppableContainers:xr,windowRect:null,measuringScheduled:!1},Eh={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:xr,draggableNodes:new Map,over:null,measureDroppableContainers:xr},Yi=m.createContext(Eh),Nh=m.createContext(Zv);function Bv(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new _i}}}function qv(s,l){switch(l.type){case et.DragStart:return{...s,draggable:{...s.draggable,initialCoordinates:l.initialCoordinates,active:l.active}};case et.DragMove:return s.draggable.active==null?s:{...s,draggable:{...s.draggable,translate:{x:l.coordinates.x-s.draggable.initialCoordinates.x,y:l.coordinates.y-s.draggable.initialCoordinates.y}}};case et.DragEnd:case et.DragCancel:return{...s,draggable:{...s.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case et.RegisterDroppable:{const{element:i}=l,{id:r}=i,u=new _i(s.droppable.containers);return u.set(r,i),{...s,droppable:{...s.droppable,containers:u}}}case et.SetDroppableDisabled:{const{id:i,key:r,disabled:u}=l,d=s.droppable.containers.get(i);if(!d||r!==d.key)return s;const f=new _i(s.droppable.containers);return f.set(i,{...d,disabled:u}),{...s,droppable:{...s.droppable,containers:f}}}case et.UnregisterDroppable:{const{id:i,key:r}=l,u=s.droppable.containers.get(i);if(!u||r!==u.key)return s;const d=new _i(s.droppable.containers);return d.delete(i),{...s,droppable:{...s.droppable,containers:d}}}default:return s}}function Vv(s){let{disabled:l}=s;const{active:i,activatorEvent:r,draggableNodes:u}=m.useContext(Yi),d=br(r),f=br(i==null?void 0:i.id);return m.useEffect(()=>{if(!l&&!r&&d&&f!=null){if(!Nr(d)||document.activeElement===d.target)return;const h=u.get(f);if(!h)return;const{activatorNode:g,node:v}=h;if(!g.current&&!v.current)return;requestAnimationFrame(()=>{for(const x of[g.current,v.current]){if(!x)continue;const S=jb(x);if(S){S.focus();break}}})}},[r,l,u,f,d]),null}function Th(s,l){let{transform:i,...r}=l;return s!=null&&s.length?s.reduce((u,d)=>d({transform:u,...r}),i):i}function Yv(s){return m.useMemo(()=>({draggable:{...fr.draggable,...s==null?void 0:s.draggable},droppable:{...fr.droppable,...s==null?void 0:s.droppable},dragOverlay:{...fr.dragOverlay,...s==null?void 0:s.dragOverlay}}),[s==null?void 0:s.draggable,s==null?void 0:s.droppable,s==null?void 0:s.dragOverlay])}function Gv(s){let{activeNode:l,measure:i,initialRect:r,config:u=!0}=s;const d=m.useRef(!1),{x:f,y:h}=typeof u=="boolean"?{x:u,y:u}:u;cn(()=>{if(!f&&!h||!l){d.current=!1;return}if(d.current||!r)return;const v=l==null?void 0:l.node.current;if(!v||v.isConnected===!1)return;const x=i(v),S=fh(x,r);if(f||(S.x=0),h||(S.y=0),d.current=!0,Math.abs(S.x)>0||Math.abs(S.y)>0){const T=hh(v);T&&T.scrollBy({top:S.y,left:S.x})}},[l,f,h,r,i])}const Dr=m.createContext({...un,scaleX:1,scaleY:1});var ba;(function(s){s[s.Uninitialized=0]="Uninitialized",s[s.Initializing=1]="Initializing",s[s.Initialized=2]="Initialized"})(ba||(ba={}));const Xv=m.memo(function(l){var i,r,u,d;let{id:f,accessibility:h,autoScroll:g=!0,children:v,sensors:x=Uv,collisionDetection:S=Wb,measuring:T,modifiers:N,..._}=l;const z=m.useReducer(qv,void 0,Bv),[Z,q]=z,[Y,I]=Bb(),[Q,F]=m.useState(ba.Uninitialized),K=Q===ba.Initialized,{draggable:{active:B,nodes:P,translate:$},droppable:{containers:ne}}=Z,se=B!=null?P.get(B):null,re=m.useRef({initial:null,translated:null}),he=m.useMemo(()=>{var Ye;return B!=null?{id:B,data:(Ye=se==null?void 0:se.data)!=null?Ye:Hv,rect:re}:null},[B,se]),je=m.useRef(null),[Fe,j]=m.useState(null),[G,ae]=m.useState(null),de=Li(_,Object.values(_)),ye=Vi("DndDescribedBy",f),w=m.useMemo(()=>ne.getEnabled(),[ne]),R=Yv(T),{droppableRects:V,measureDroppableContainers:X,measuringScheduled:J}=Nv(w,{dragging:K,dependencies:[$.x,$.y],config:R.droppable}),te=Av(P,B),pe=m.useMemo(()=>G?yr(G):null,[G]),ke=Ya(),Se=Tv(te,R.draggable.measure);Gv({activeNode:B!=null?P.get(B):null,config:ke.layoutShiftCompensation,initialRect:Se,measure:R.draggable.measure});const fe=op(te,R.draggable.measure,Se),dn=op(te?te.parentElement:null),yt=m.useRef({activatorEvent:null,active:null,activeNode:te,collisionRect:null,collisions:null,droppableRects:V,draggableNodes:P,draggingNode:null,draggingNodeRect:null,droppableContainers:ne,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Sn=ne.getNodeFor((i=yt.current.over)==null?void 0:i.id),it=Lv({measure:R.dragOverlay.measure}),fn=(r=it.nodeRef.current)!=null?r:te,pn=K?(u=it.rect)!=null?u:fe:null,Gi=!!(it.nodeRef.current&&it.rect),jl=Mv(Gi?null:fe),ya=Ch(fn?vt(fn):null),Zt=Rv(K?Sn??te:null),Xn=_v(Zt),qa=Th(N,{transform:{x:$.x-jl.x,y:$.y-jl.y,scaleX:1,scaleY:1},activatorEvent:G,active:he,activeNodeRect:fe,containerNodeRect:dn,draggingNodeRect:pn,over:yt.current.over,overlayNodeRect:it.rect,scrollableAncestors:Zt,scrollableAncestorRects:Xn,windowRect:ya}),Xi=pe?Ml(pe,$):null,dt=Ov(Zt),kr=up(dt),Ii=up(dt,[fe]),wn=Ml(qa,kr),nn=pn?nv(pn,qa):null,xa=he&&nn?S({active:he,collisionRect:nn,droppableRects:V,droppableContainers:w,pointerCoordinates:Xi}):null,_l=Jb(xa,"id"),[hn,Qi]=m.useState(null),Sa=Gi?qa:Ml(qa,Ii),mt=ev(Sa,(d=hn==null?void 0:hn.rect)!=null?d:null,fe),Bt=m.useRef(null),ft=m.useCallback((Ye,Ge)=>{let{sensor:tt,options:xt}=Ge;if(je.current==null)return;const St=P.get(je.current);if(!St)return;const pt=Ye.nativeEvent,wt=new tt({active:je.current,activeNode:St,event:pt,options:xt,context:yt,onAbort(Pe){if(!P.get(Pe))return;const{onDragAbort:Mt}=de.current,Vt={id:Pe};Mt==null||Mt(Vt),Y({type:"onDragAbort",event:Vt})},onPending(Pe,an,Mt,Vt){if(!P.get(Pe))return;const{onDragPending:An}=de.current,ln={id:Pe,constraint:an,initialCoordinates:Mt,offset:Vt};An==null||An(ln),Y({type:"onDragPending",event:ln})},onStart(Pe){const an=je.current;if(an==null)return;const Mt=P.get(an);if(!Mt)return;const{onDragStart:Vt}=de.current,Cn={activatorEvent:pt,active:{id:an,data:Mt.data,rect:re}};Mi.unstable_batchedUpdates(()=>{Vt==null||Vt(Cn),F(ba.Initializing),q({type:et.DragStart,initialCoordinates:Pe,active:an}),Y({type:"onDragStart",event:Cn}),j(Bt.current),ae(pt)})},onMove(Pe){q({type:et.DragMove,coordinates:Pe})},onEnd:qt(et.DragEnd),onCancel:qt(et.DragCancel)});Bt.current=wt;function qt(Pe){return async function(){const{active:Mt,collisions:Vt,over:Cn,scrollAdjustedTranslate:An}=yt.current;let ln=null;if(Mt&&An){const{cancelDrop:In}=de.current;ln={activatorEvent:pt,active:Mt,collisions:Vt,delta:An,over:Cn},Pe===et.DragEnd&&typeof In=="function"&&await Promise.resolve(In(ln))&&(Pe=et.DragCancel)}je.current=null,Mi.unstable_batchedUpdates(()=>{q({type:Pe}),F(ba.Uninitialized),Qi(null),j(null),ae(null),Bt.current=null;const In=Pe===et.DragEnd?"onDragEnd":"onDragCancel";if(ln){const Yt=de.current[In];Yt==null||Yt(ln),Y({type:In,event:ln})}})}}},[P]),Mr=m.useCallback((Ye,Ge)=>(tt,xt)=>{const St=tt.nativeEvent,pt=P.get(xt);if(je.current!==null||!pt||St.dndKit||St.defaultPrevented)return;const wt={active:pt};Ye(tt,Ge.options,wt)===!0&&(St.dndKit={capturedBy:Ge.sensor},je.current=xt,ft(tt,Ge))},[P,ft]),Ki=Ev(x,Mr);zv(x),cn(()=>{fe&&Q===ba.Initializing&&F(ba.Initialized)},[fe,Q]),m.useEffect(()=>{const{onDragMove:Ye}=de.current,{active:Ge,activatorEvent:tt,collisions:xt,over:St}=yt.current;if(!Ge||!tt)return;const pt={active:Ge,activatorEvent:tt,collisions:xt,delta:{x:wn.x,y:wn.y},over:St};Mi.unstable_batchedUpdates(()=>{Ye==null||Ye(pt),Y({type:"onDragMove",event:pt})})},[wn.x,wn.y]),m.useEffect(()=>{const{active:Ye,activatorEvent:Ge,collisions:tt,droppableContainers:xt,scrollAdjustedTranslate:St}=yt.current;if(!Ye||je.current==null||!Ge||!St)return;const{onDragOver:pt}=de.current,wt=xt.get(_l),qt=wt&&wt.rect.current?{id:wt.id,rect:wt.rect.current,data:wt.data,disabled:wt.disabled}:null,Pe={active:Ye,activatorEvent:Ge,collisions:tt,delta:{x:St.x,y:St.y},over:qt};Mi.unstable_batchedUpdates(()=>{Qi(qt),pt==null||pt(Pe),Y({type:"onDragOver",event:Pe})})},[_l]),cn(()=>{yt.current={activatorEvent:G,active:he,activeNode:te,collisionRect:nn,collisions:xa,droppableRects:V,draggableNodes:P,draggingNode:fn,draggingNodeRect:pn,droppableContainers:ne,over:hn,scrollableAncestors:Zt,scrollAdjustedTranslate:wn},re.current={initial:pn,translated:nn}},[he,te,xa,nn,P,fn,pn,V,ne,hn,Zt,wn]),Sv({...ke,delta:$,draggingRect:nn,pointerCoordinates:Xi,scrollableAncestors:Zt,scrollableAncestorRects:Xn});const Rr=m.useMemo(()=>({active:he,activeNode:te,activeNodeRect:fe,activatorEvent:G,collisions:xa,containerNodeRect:dn,dragOverlay:it,draggableNodes:P,droppableContainers:ne,droppableRects:V,over:hn,measureDroppableContainers:X,scrollableAncestors:Zt,scrollableAncestorRects:Xn,measuringConfiguration:R,measuringScheduled:J,windowRect:ya}),[he,te,fe,G,xa,dn,it,P,ne,V,hn,X,Zt,Xn,R,J,ya]),Va=m.useMemo(()=>({activatorEvent:G,activators:Ki,active:he,activeNodeRect:fe,ariaDescribedById:{draggable:ye},dispatch:q,draggableNodes:P,over:hn,measureDroppableContainers:X}),[G,Ki,he,fe,q,ye,P,hn,X]);return Be.createElement(dh.Provider,{value:I},Be.createElement(Yi.Provider,{value:Va},Be.createElement(Nh.Provider,{value:Rr},Be.createElement(Dr.Provider,{value:mt},v)),Be.createElement(Vv,{disabled:(h==null?void 0:h.restoreFocus)===!1})),Be.createElement(Yb,{...h,hiddenTextDescribedById:ye}));function Ya(){const Ye=(Fe==null?void 0:Fe.autoScrollEnabled)===!1,Ge=typeof g=="object"?g.enabled===!1:g===!1,tt=K&&!Ye&&!Ge;return typeof g=="object"?{...g,enabled:tt}:{enabled:tt}}}),Iv=m.createContext(null),fp="button",Qv="Draggable";function Kv(s){let{id:l,data:i,disabled:r=!1,attributes:u}=s;const d=Vi(Qv),{activators:f,activatorEvent:h,active:g,activeNodeRect:v,ariaDescribedById:x,draggableNodes:S,over:T}=m.useContext(Yi),{role:N=fp,roleDescription:_="draggable",tabIndex:z=0}=u??{},Z=(g==null?void 0:g.id)===l,q=m.useContext(Z?Dr:Iv),[Y,I]=gr(),[Q,F]=gr(),K=jv(f,l),B=Li(i);cn(()=>(S.set(l,{id:l,key:d,node:Y,activatorNode:Q,data:B}),()=>{const $=S.get(l);$&&$.key===d&&S.delete(l)}),[S,l]);const P=m.useMemo(()=>({role:N,tabIndex:z,"aria-disabled":r,"aria-pressed":Z&&N===fp?!0:void 0,"aria-roledescription":_,"aria-describedby":x.draggable}),[r,N,z,Z,_,x.draggable]);return{active:g,activatorEvent:h,activeNodeRect:v,attributes:P,isDragging:Z,listeners:r?void 0:K,node:Y,over:T,setNodeRef:I,setActivatorNodeRef:F,transform:q}}function Dh(){return m.useContext(Nh)}const $v="Droppable",Jv={timeout:25};function Fv(s){let{data:l,disabled:i=!1,id:r,resizeObserverConfig:u}=s;const d=Vi($v),{active:f,dispatch:h,over:g,measureDroppableContainers:v}=m.useContext(Yi),x=m.useRef({disabled:i}),S=m.useRef(!1),T=m.useRef(null),N=m.useRef(null),{disabled:_,updateMeasurementsFor:z,timeout:Z}={...Jv,...u},q=Li(z??r),Y=m.useCallback(()=>{if(!S.current){S.current=!0;return}N.current!=null&&clearTimeout(N.current),N.current=setTimeout(()=>{v(Array.isArray(q.current)?q.current:[q.current]),N.current=null},Z)},[Z]),I=Tr({callback:Y,disabled:_||!f}),Q=m.useCallback((P,$)=>{I&&($&&(I.unobserve($),S.current=!1),P&&I.observe(P))},[I]),[F,K]=gr(Q),B=Li(l);return m.useEffect(()=>{!I||!F.current||(I.disconnect(),S.current=!1,I.observe(F.current))},[F,I]),m.useEffect(()=>(h({type:et.RegisterDroppable,element:{id:r,key:d,disabled:i,node:F,rect:T,data:B}}),()=>h({type:et.UnregisterDroppable,key:d,id:r})),[r]),m.useEffect(()=>{i!==x.current.disabled&&(h({type:et.SetDroppableDisabled,id:r,key:d,disabled:i}),x.current.disabled=i)},[r,d,i,h]),{active:f,rect:T,isOver:(g==null?void 0:g.id)===r,node:F,over:g,setNodeRef:K}}function Pv(s){let{animation:l,children:i}=s;const[r,u]=m.useState(null),[d,f]=m.useState(null),h=br(i);return!i&&!r&&h&&u(h),cn(()=>{if(!d)return;const g=r==null?void 0:r.key,v=r==null?void 0:r.props.id;if(g==null||v==null){u(null);return}Promise.resolve(l(v,d)).then(()=>{u(null)})},[l,r,d]),Be.createElement(Be.Fragment,null,i,r?m.cloneElement(r,{ref:f}):null)}const Wv={x:0,y:0,scaleX:1,scaleY:1};function e6(s){let{children:l}=s;return Be.createElement(Yi.Provider,{value:Eh},Be.createElement(Dr.Provider,{value:Wv},l))}const t6={position:"fixed",touchAction:"none"},n6=s=>Nr(s)?"transform 250ms ease":void 0,a6=m.forwardRef((s,l)=>{let{as:i,activatorEvent:r,adjustScale:u,children:d,className:f,rect:h,style:g,transform:v,transition:x=n6}=s;if(!h)return null;const S=u?v:{...v,scaleX:1,scaleY:1},T={...t6,width:h.width,height:h.height,top:h.top,left:h.left,transform:va.Transform.toString(S),transformOrigin:u&&r?Qb(r,h):void 0,transition:typeof x=="function"?x(r):x,...g};return Be.createElement(i,{className:f,style:T,ref:l},d)}),l6=s=>l=>{let{active:i,dragOverlay:r}=l;const u={},{styles:d,className:f}=s;if(d!=null&&d.active)for(const[h,g]of Object.entries(d.active))g!==void 0&&(u[h]=i.node.style.getPropertyValue(h),i.node.style.setProperty(h,g));if(d!=null&&d.dragOverlay)for(const[h,g]of Object.entries(d.dragOverlay))g!==void 0&&r.node.style.setProperty(h,g);return f!=null&&f.active&&i.node.classList.add(f.active),f!=null&&f.dragOverlay&&r.node.classList.add(f.dragOverlay),function(){for(const[g,v]of Object.entries(u))i.node.style.setProperty(g,v);f!=null&&f.active&&i.node.classList.remove(f.active)}},i6=s=>{let{transform:{initial:l,final:i}}=s;return[{transform:va.Transform.toString(l)},{transform:va.Transform.toString(i)}]},s6={duration:250,easing:"ease",keyframes:i6,sideEffects:l6({styles:{active:{opacity:"0"}}})};function r6(s){let{config:l,draggableNodes:i,droppableContainers:r,measuringConfiguration:u}=s;return Er((d,f)=>{if(l===null)return;const h=i.get(d);if(!h)return;const g=h.node.current;if(!g)return;const v=Ah(f);if(!v)return;const{transform:x}=vt(f).getComputedStyle(f),S=ph(x);if(!S)return;const T=typeof l=="function"?l:o6(l);return xh(g,u.draggable.measure),T({active:{id:d,data:h.data,node:g,rect:u.draggable.measure(g)},draggableNodes:i,dragOverlay:{node:f,rect:u.dragOverlay.measure(v)},droppableContainers:r,measuringConfiguration:u,transform:S})})}function o6(s){const{duration:l,easing:i,sideEffects:r,keyframes:u}={...s6,...s};return d=>{let{active:f,dragOverlay:h,transform:g,...v}=d;if(!l)return;const x={x:h.rect.left-f.rect.left,y:h.rect.top-f.rect.top},S={scaleX:g.scaleX!==1?f.rect.width*g.scaleX/h.rect.width:1,scaleY:g.scaleY!==1?f.rect.height*g.scaleY/h.rect.height:1},T={x:g.x-x.x,y:g.y-x.y,...S},N=u({...v,active:f,dragOverlay:h,transform:{initial:g,final:T}}),[_]=N,z=N[N.length-1];if(JSON.stringify(_)===JSON.stringify(z))return;const Z=r==null?void 0:r({active:f,dragOverlay:h,...v}),q=h.node.animate(N,{duration:l,easing:i,fill:"forwards"});return new Promise(Y=>{q.onfinish=()=>{Z==null||Z(),Y()}})}}let pp=0;function c6(s){return m.useMemo(()=>{if(s!=null)return pp++,pp},[s])}const u6=Be.memo(s=>{let{adjustScale:l=!1,children:i,dropAnimation:r,style:u,transition:d,modifiers:f,wrapperElement:h="div",className:g,zIndex:v=999}=s;const{activatorEvent:x,active:S,activeNodeRect:T,containerNodeRect:N,draggableNodes:_,droppableContainers:z,dragOverlay:Z,over:q,measuringConfiguration:Y,scrollableAncestors:I,scrollableAncestorRects:Q,windowRect:F}=Dh(),K=m.useContext(Dr),B=c6(S==null?void 0:S.id),P=Th(f,{activatorEvent:x,active:S,activeNodeRect:T,containerNodeRect:N,draggingNodeRect:Z.rect,over:q,overlayNodeRect:Z.rect,scrollableAncestors:I,scrollableAncestorRects:Q,transform:K,windowRect:F}),$=zu(T),ne=r6({config:r,draggableNodes:_,droppableContainers:z,measuringConfiguration:Y}),se=$?Z.setRef:void 0;return Be.createElement(e6,null,Be.createElement(Pv,{animation:ne},S&&B?Be.createElement(a6,{key:B,id:S.id,ref:se,as:h,activatorEvent:x,adjustScale:l,className:g,transition:d,rect:$,style:{zIndex:v,...u},transform:P},i):null))});function kh(s,l,i){const r=s.slice();return r.splice(i<0?r.length+i:i,0,r.splice(l,1)[0]),r}function d6(s,l){return s.reduce((i,r,u)=>{const d=l.get(r);return d&&(i[u]=d),i},Array(s.length))}function cr(s){return s!==null&&s>=0}function f6(s,l){if(s===l)return!0;if(s.length!==l.length)return!1;for(let i=0;i<s.length;i++)if(s[i]!==l[i])return!1;return!0}function p6(s){return typeof s=="boolean"?{draggable:s,droppable:s}:s}const Mh=s=>{let{rects:l,activeIndex:i,overIndex:r,index:u}=s;const d=kh(l,r,i),f=l[u],h=d[u];return!h||!f?null:{x:h.left-f.left,y:h.top-f.top,scaleX:h.width/f.width,scaleY:h.height/f.height}},ur={scaleX:1,scaleY:1},h6=s=>{var l;let{activeIndex:i,activeNodeRect:r,index:u,rects:d,overIndex:f}=s;const h=(l=d[i])!=null?l:r;if(!h)return null;if(u===i){const v=d[f];return v?{x:0,y:i<f?v.top+v.height-(h.top+h.height):v.top-h.top,...ur}:null}const g=m6(d,u,i);return u>i&&u<=f?{x:0,y:-h.height-g,...ur}:u<i&&u>=f?{x:0,y:h.height+g,...ur}:{x:0,y:0,...ur}};function m6(s,l,i){const r=s[l],u=s[l-1],d=s[l+1];return r?i<l?u?r.top-(u.top+u.height):d?d.top-(r.top+r.height):0:d?d.top-(r.top+r.height):u?r.top-(u.top+u.height):0:0}const Rh="Sortable",Oh=Be.createContext({activeIndex:-1,containerId:Rh,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Mh,disabled:{draggable:!1,droppable:!1}});function g6(s){let{children:l,id:i,items:r,strategy:u=Mh,disabled:d=!1}=s;const{active:f,dragOverlay:h,droppableRects:g,over:v,measureDroppableContainers:x}=Dh(),S=Vi(Rh,i),T=h.rect!==null,N=m.useMemo(()=>r.map(K=>typeof K=="object"&&"id"in K?K.id:K),[r]),_=f!=null,z=f?N.indexOf(f.id):-1,Z=v?N.indexOf(v.id):-1,q=m.useRef(N),Y=!f6(N,q.current),I=Z!==-1&&z===-1||Y,Q=p6(d);cn(()=>{Y&&_&&x(N)},[Y,N,_,x]),m.useEffect(()=>{q.current=N},[N]);const F=m.useMemo(()=>({activeIndex:z,containerId:S,disabled:Q,disableTransforms:I,items:N,overIndex:Z,useDragOverlay:T,sortedRects:d6(N,g),strategy:u}),[z,S,Q.draggable,Q.droppable,I,N,Z,g,T,u]);return Be.createElement(Oh.Provider,{value:F},l)}const b6=s=>{let{id:l,items:i,activeIndex:r,overIndex:u}=s;return kh(i,r,u).indexOf(l)},v6=s=>{let{containerId:l,isSorting:i,wasDragging:r,index:u,items:d,newIndex:f,previousItems:h,previousContainerId:g,transition:v}=s;return!v||!r||h!==d&&u===f?!1:i?!0:f!==u&&l===g},y6={duration:200,easing:"ease"},zh="transform",x6=va.Transition.toString({property:zh,duration:0,easing:"linear"}),S6={roleDescription:"sortable"};function w6(s){let{disabled:l,index:i,node:r,rect:u}=s;const[d,f]=m.useState(null),h=m.useRef(i);return cn(()=>{if(!l&&i!==h.current&&r.current){const g=u.current;if(g){const v=zl(r.current,{ignoreTransform:!0}),x={x:g.left-v.left,y:g.top-v.top,scaleX:g.width/v.width,scaleY:g.height/v.height};(x.x||x.y)&&f(x)}}i!==h.current&&(h.current=i)},[l,i,r,u]),m.useEffect(()=>{d&&f(null)},[d]),d}function C6(s){let{animateLayoutChanges:l=v6,attributes:i,disabled:r,data:u,getNewIndex:d=b6,id:f,strategy:h,resizeObserverConfig:g,transition:v=y6}=s;const{items:x,containerId:S,activeIndex:T,disabled:N,disableTransforms:_,sortedRects:z,overIndex:Z,useDragOverlay:q,strategy:Y}=m.useContext(Oh),I=A6(r,N),Q=x.indexOf(f),F=m.useMemo(()=>({sortable:{containerId:S,index:Q,items:x},...u}),[S,u,Q,x]),K=m.useMemo(()=>x.slice(x.indexOf(f)),[x,f]),{rect:B,node:P,isOver:$,setNodeRef:ne}=Fv({id:f,data:F,disabled:I.droppable,resizeObserverConfig:{updateMeasurementsFor:K,...g}}),{active:se,activatorEvent:re,activeNodeRect:he,attributes:je,setNodeRef:Fe,listeners:j,isDragging:G,over:ae,setActivatorNodeRef:de,transform:ye}=Kv({id:f,data:F,attributes:{...S6,...i},disabled:I.draggable}),w=Mb(ne,Fe),R=!!se,V=R&&!_&&cr(T)&&cr(Z),X=!q&&G,J=X&&V?ye:null,pe=V?J??(h??Y)({rects:z,activeNodeRect:he,activeIndex:T,overIndex:Z,index:Q}):null,ke=cr(T)&&cr(Z)?d({id:f,items:x,activeIndex:T,overIndex:Z}):Q,Se=se==null?void 0:se.id,fe=m.useRef({activeId:Se,items:x,newIndex:ke,containerId:S}),dn=x!==fe.current.items,yt=l({active:se,containerId:S,isDragging:G,isSorting:R,id:f,index:Q,items:x,newIndex:fe.current.newIndex,previousItems:fe.current.items,previousContainerId:fe.current.containerId,transition:v,wasDragging:fe.current.activeId!=null}),Sn=w6({disabled:!yt,index:Q,node:P,rect:B});return m.useEffect(()=>{R&&fe.current.newIndex!==ke&&(fe.current.newIndex=ke),S!==fe.current.containerId&&(fe.current.containerId=S),x!==fe.current.items&&(fe.current.items=x)},[R,ke,S,x]),m.useEffect(()=>{if(Se===fe.current.activeId)return;if(Se!=null&&fe.current.activeId==null){fe.current.activeId=Se;return}const fn=setTimeout(()=>{fe.current.activeId=Se},50);return()=>clearTimeout(fn)},[Se]),{active:se,activeIndex:T,attributes:je,data:F,rect:B,index:Q,newIndex:ke,items:x,isOver:$,isSorting:R,isDragging:G,listeners:j,node:P,overIndex:Z,over:ae,setNodeRef:w,setActivatorNodeRef:de,setDroppableNodeRef:ne,setDraggableNodeRef:Fe,transform:Sn??pe,transition:it()};function it(){if(Sn||dn&&fe.current.newIndex===Q)return x6;if(!(X&&!Nr(re)||!v)&&(R||yt))return va.Transition.toString({...v,property:zh})}}function A6(s,l){var i,r;return typeof s=="boolean"?{draggable:s,droppable:!1}:{draggable:(i=s==null?void 0:s.draggable)!=null?i:l.draggable,droppable:(r=s==null?void 0:s.droppable)!=null?r:l.droppable}}Ee.Down,Ee.Right,Ee.Up,Ee.Left;function E6({prd:s,projectId:l,onClose:i,onSave:r}){const[u,d]=m.useState((s==null?void 0:s.title)??""),[f,h]=m.useState((s==null?void 0:s.content)??""),g=m.useRef();function v(S){const T=S.target.files[0];if(!T)return;const N=T.name.replace(/\.md$/i,"").replace(/[-_]/g," "),_=new FileReader;_.onload=z=>{u||d(N),h(z.target.result)},_.readAsText(T)}function x(){const S=u.trim();S&&r({title:S,content:f})}return y.jsx("div",{className:"prd-editor-scrim",onClick:S=>S.target===S.currentTarget&&i(),children:y.jsxs("div",{className:"prd-editor-modal",children:[y.jsxs("div",{className:"prd-editor-header",children:[y.jsx("span",{className:"prd-editor-title",children:s?"Edit PRD":"New PRD"}),y.jsx("button",{className:"prd-editor-close",onClick:i,children:"✕"})]}),y.jsxs("div",{className:"prd-editor-body",children:[y.jsxs("div",{className:"prd-editor-field",children:[y.jsx("label",{className:"prd-editor-label",children:"Title"}),y.jsx("input",{className:"prd-editor-input",type:"text",placeholder:"e.g. Producer Filter Modal",value:u,onChange:S=>d(S.target.value),autoFocus:!0})]}),y.jsxs("div",{className:"prd-editor-field prd-editor-field--grow",children:[y.jsxs("div",{className:"prd-editor-label-row",children:[y.jsx("label",{className:"prd-editor-label",children:"Content"}),y.jsx("button",{className:"prd-editor-load-file",onClick:()=>g.current.click(),children:"Load from .md file"}),y.jsx("input",{ref:g,type:"file",accept:".md,.txt",style:{display:"none"},onChange:v})]}),y.jsx("textarea",{className:"prd-editor-textarea",placeholder:"Paste your PRD markdown here…",value:f,onChange:S=>h(S.target.value)})]})]}),y.jsxs("div",{className:"prd-editor-footer",children:[y.jsx("button",{className:"prd-editor-btn prd-editor-btn--cancel",onClick:i,children:"Cancel"}),y.jsx("button",{className:"prd-editor-btn prd-editor-btn--save",onClick:x,disabled:!u.trim(),children:s?"Save changes":"Create PRD"})]})]})})}const N6={Sparkle:lh,ChartBar:$p,FlowArrow:Wp,Database:Fp,TrendUp:rh,Bell:Qp,GearSix:Eu};function jh(s){const l=Math.floor((Date.now()-new Date(s))/6e4);if(l<1)return"just now";if(l<60)return`${l}m ago`;const i=Math.floor(l/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}function T6({status:s}){return y.jsx("span",{className:`prd-status prd-status--${s}`,children:Gp[s]})}function D6({prd:s,onEdit:l,onDelete:i,onOpen:r,isDragging:u}){const{attributes:d,listeners:f,setNodeRef:h,transform:g,transition:v}=C6({id:s.id}),x={transform:va.Transform.toString(g),transition:v,opacity:u?.4:1};return y.jsxs("div",{ref:h,style:x,className:"kanban-card",...d,...f,children:[y.jsx("div",{className:"kanban-card-title",children:s.title}),y.jsx("div",{className:"kanban-card-meta",children:jh(s.updatedAt)}),y.jsxs("div",{className:"kanban-card-actions",onPointerDown:S=>S.stopPropagation(),children:[y.jsx("button",{className:"kanban-card-btn",onClick:()=>r(s),children:"Open →"}),y.jsx("button",{className:"kanban-card-btn",onClick:()=>l(s),children:"Edit"}),y.jsx("button",{className:"kanban-card-btn kanban-card-btn--danger",onClick:()=>i(s.id),children:"Delete"})]})]})}function k6({status:s,prds:l,onEdit:i,onDelete:r,onOpen:u,activeId:d}){return y.jsxs("div",{className:"kanban-col",children:[y.jsxs("div",{className:"kanban-col-header",children:[y.jsx("span",{className:"kanban-col-title",children:Gp[s]}),y.jsx("span",{className:"kanban-col-count",children:l.length})]}),y.jsx(g6,{items:l.map(f=>f.id),strategy:h6,children:y.jsxs("div",{className:"kanban-col-cards",children:[l.map(f=>y.jsx(D6,{prd:f,onEdit:i,onDelete:r,onOpen:u,isDragging:d===f.id},f.id)),l.length===0&&y.jsx("div",{className:"kanban-col-empty",children:"Drop here"})]})})]})}function M6({projectId:s,prds:l,onNavigate:i,onCreatePrd:r,onUpdatePrd:u,onDeletePrd:d,theme:f,onThemeToggle:h,onSignOut:g}){const v=Xp(s),x=v?N6[v.phosphorIcon]:null,S=l.filter($=>$.projectId===s),[T,N]=m.useState("kanban"),[_,z]=m.useState(!1),[Z,q]=m.useState(null),[Y,I]=m.useState(null),Q=Xb(Gb(Ou,{activationConstraint:{distance:6}}));function F({active:$}){I($.id)}function K({active:$,over:ne}){if(I(null),!ne||$.id===ne.id)return;const se=S.find(je=>je.id===$.id);if(!se)return;const re=S.find(je=>je.id===ne.id),he=re?re.status:ne.id;P1.includes(he)&&se.status!==he&&u($.id,{status:he})}function B({active:$,over:ne}){if(!ne)return;const se=S.find(he=>he.id===$.id),re=S.find(he=>he.id===ne.id);!se||!re||se.status!==re.status&&u($.id,{status:re.status})}const P=Y?S.find($=>$.id===Y):null;return y.jsxs("div",{className:"project-view",children:[y.jsxs("header",{className:"project-view-header",children:[y.jsx("button",{className:"project-back-btn",onClick:()=>i({page:"projects"}),children:"← Projects"}),y.jsxs("div",{className:"project-view-title",children:[x&&y.jsx(x,{size:20,weight:"fill",className:"project-view-icon"}),y.jsx("span",{className:"project-view-name",children:v==null?void 0:v.name})]}),y.jsxs("div",{className:"project-view-actions",children:[y.jsxs("div",{className:"view-toggle",children:[y.jsx("button",{className:`view-toggle-btn ${T==="list"?"active":""}`,onClick:()=>N("list"),children:"List"}),y.jsx("button",{className:`view-toggle-btn ${T==="kanban"?"active":""}`,onClick:()=>N("kanban"),children:"Kanban"})]}),y.jsx("button",{className:"new-prd-btn",onClick:()=>{q(null),z(!0)},children:"+ New PRD"}),y.jsx(Nu,{theme:f,onThemeToggle:h,onSignOut:g})]})]}),y.jsx("div",{className:"project-view-body",children:T==="list"?y.jsx("div",{className:"prd-list",children:S.length===0?y.jsx("div",{className:"prd-list-empty",children:"No PRDs yet — create one to get started."}):y.jsxs("table",{className:"prd-table",children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{children:"Title"}),y.jsx("th",{children:"Status"}),y.jsx("th",{children:"Updated"}),y.jsx("th",{})]})}),y.jsx("tbody",{children:S.map($=>y.jsxs("tr",{children:[y.jsx("td",{className:"prd-table-title",children:$.title}),y.jsx("td",{children:y.jsx(T6,{status:$.status})}),y.jsx("td",{className:"prd-table-date",children:jh($.updatedAt)}),y.jsxs("td",{className:"prd-table-actions",children:[y.jsx("button",{className:"prd-action-btn",onClick:()=>i({page:"builder",prdId:$.id}),children:"Open →"}),y.jsx("button",{className:"prd-action-btn",onClick:()=>{q($),z(!0)},children:"Edit"}),y.jsx("button",{className:"prd-action-btn prd-action-btn--danger",onClick:()=>d($.id),children:"Delete"})]})]},$.id))})]})}):y.jsxs(Xv,{sensors:Q,collisionDetection:Fb,onDragStart:F,onDragOver:B,onDragEnd:K,children:[y.jsx("div",{className:"kanban-board",children:P1.map($=>y.jsx(k6,{status:$,prds:S.filter(ne=>ne.status===$),onEdit:ne=>{q(ne),z(!0)},onDelete:ne=>d(ne),onOpen:ne=>i({page:"builder",prdId:ne.id}),activeId:Y},$))}),y.jsx(u6,{children:P?y.jsx("div",{className:"kanban-card kanban-card--overlay",children:y.jsx("div",{className:"kanban-card-title",children:P.title})}):null})]})}),_&&y.jsx(E6,{prd:Z,projectId:s,onClose:()=>z(!1),onSave:$=>{Z?u(Z.id,$):r(s,$),z(!1)}})]})}const _h=s=>`ennabl_bs_${s}`;function Lh(s){try{return JSON.parse(localStorage.getItem(_h(s)))||{}}catch{return{}}}function hp(s,l){try{const i=Lh(s);localStorage.setItem(_h(s),JSON.stringify({...i,...l}))}catch{}}function R6(){const[s,l]=m.useState(()=>!!kp()),[i,r]=m.useState(()=>{const w=u8();return document.documentElement.setAttribute("data-theme",w),w});function u(){r(w=>{const R=w==="dark"?"light":"dark";return document.documentElement.setAttribute("data-theme",R),d8(R),R})}function d(){l(!1)}const[f,h]=m.useState(F1),[g,v]=m.useState(!1),[x,S]=m.useState({page:"projects"}),[T,N]=m.useState([]),[_,z]=m.useState(!1),[Z,q]=m.useState(null),[Y,I]=m.useState(null),[Q,F]=m.useState([]),[K,B]=m.useState(null),[P,$]=m.useState(W2),[ne,se]=m.useState(0),re=f&&!g;m.useEffect(()=>{if(!s||!f&&!g)return;async function w(){if(re)try{const R=await ib();N(R)}catch{W1(),N(ru())}else W1(),N(ru());z(!0)}w()},[s,f,g]);function he(w){if(w.page==="builder"&&w.prdId){const R=T.find(V=>V.id===w.prdId);R&&je(R)}S(w)}function je(w){const R=Lh(w.id);q({id:w.id,name:w.title,content:w.content}),F(R.messages||[]),I(R.code||null),B(C8(w.title))}m.useEffect(()=>{Z!=null&&Z.id&&hp(Z.id,{messages:Q})},[Q,Z==null?void 0:Z.id]),m.useEffect(()=>{Z!=null&&Z.id&&Y&&hp(Z.id,{code:Y})},[Y,Z==null?void 0:Z.id]);async function Fe(w,R){if(re){const V=await sb({projectId:w,...R});N(X=>[V,...X])}else{const V={id:`prd-${Date.now()}`,projectId:w,status:"backlog",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),...R};N(X=>{const J=[V,...X];return dr(J),J})}}async function j(w,R){if(re){const V=await rb(w,{...R,updated:new Date().toISOString()});N(X=>X.map(J=>J.id===w?V:J))}else N(V=>{const X=V.map(J=>J.id===w?{...J,...R,updatedAt:new Date().toISOString()}:J);return dr(X),X})}async function G(w){re&&await ob(w),N(R=>{const V=R.filter(X=>X.id!==w);return re||dr(V),V})}function ae(w,R){if(I(w),Z){const X=[e8({prdName:Z.name,code:w,iteration:((K==null?void 0:K.iterations)??0)+1}),...P].slice(0,50);if($(X),V1(X),R){const te=`**${new Date().toISOString().slice(0,10)} · iter ${((K==null?void 0:K.iterations)??0)+1}:** ${R}`,pe=T.find(fe=>fe.id===Z.id),ke=(pe==null?void 0:pe.content)||Z.content||"",Se=ke.includes("## Build log")?ke+`
`+te:ke+`

## Build log

`+te;j(Z.id,{content:Se}),q(fe=>fe&&{...fe,content:Se})}}}function de({inputTokens:w,outputTokens:R,cacheReadTokens:V,componentsUsed:X}){B(J=>{if(!J)return J;const te={...J,iterations:J.iterations+1,inputTokens:J.inputTokens+w,outputTokens:J.outputTokens+R,cacheReadTokens:J.cacheReadTokens+V,componentsUsed:[...new Set([...J.componentsUsed,...X])]};return te.cost=w8(te),lu(te),te})}function ye(){$([]),V1([])}return s?!f&&!g?y.jsx(cb,{onDone:()=>{F1()?h(!0):v(!0)}}):_?x.page==="projects"?y.jsx(kb,{prds:T,onNavigate:he,theme:i,onThemeToggle:u,onSignOut:d}):x.page==="project"?y.jsx(M6,{projectId:x.projectId,prds:T,onNavigate:he,onCreatePrd:Fe,onUpdatePrd:j,onDeletePrd:G,theme:i,onThemeToggle:u,onSignOut:d}):y.jsxs("div",{className:"app",children:[y.jsxs("header",{className:"app-header",children:[y.jsxs("div",{className:"app-header-left",children:[y.jsx("button",{className:"app-back-btn",onClick:()=>he({page:"projects"}),children:"← Projects"}),y.jsx("span",{className:"app-header-sep"}),y.jsx("span",{className:"app-logo",children:"ennabl"}),y.jsx("span",{className:"app-logo-suffix",children:"builder"}),Z&&y.jsx("span",{className:"app-prd-badge",children:Z.name})]}),y.jsxs("div",{className:"app-header-right",children:[y.jsx(db,{prds:T,onSelect:je}),y.jsx(Nu,{theme:i,onThemeToggle:u,onSignOut:d})]})]}),y.jsxs("main",{className:"app-panels",children:[y.jsx(s8,{code:Y,prd:Z,history:P,onHistoryClear:ye,onInitDesign:()=>se(w=>w+1)}),y.jsx("div",{className:"app-divider"}),y.jsx(H8,{prd:Z,messages:Q,setMessages:F,onCodeGenerated:ae,onIterationComplete:de,session:K,onSessionUpdate:B,initTrigger:ne})]})]}):y.jsx("div",{style:{height:"100dvh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",color:"var(--text-muted)",fontSize:13},children:"Loading…"}):y.jsx(Z8,{onDone:()=>l(!0)})}s2.createRoot(document.getElementById("root")).render(y.jsx(m.StrictMode,{children:y.jsx(R6,{})}));
