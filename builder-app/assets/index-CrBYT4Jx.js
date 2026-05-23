var V0=Object.defineProperty;var lh=o=>{throw TypeError(o)};var K0=(o,i,r)=>i in o?V0(o,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[i]=r;var Oe=(o,i,r)=>K0(o,typeof i!="symbol"?i+"":i,r),J0=(o,i,r)=>i.has(o)||lh("Cannot "+r);var ih=(o,i,r)=>i.has(o)?lh("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(o):i.set(o,r);var yi=(o,i,r)=>(J0(o,i,"access private method"),r);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function r(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(u){if(u.ep)return;u.ep=!0;const f=r(u);fetch(u.href,f)}})();function $0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var jc={exports:{}},xi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh;function I0(){if(sh)return xi;sh=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(c,u,f){var p=null;if(f!==void 0&&(p=""+f),u.key!==void 0&&(p=""+u.key),"key"in u){f={};for(var m in u)m!=="key"&&(f[m]=u[m])}else f=u;return u=f.ref,{$$typeof:o,type:c,key:p,ref:u!==void 0?u:null,props:f}}return xi.Fragment=i,xi.jsx=r,xi.jsxs=r,xi}var oh;function F0(){return oh||(oh=1,jc.exports=I0()),jc.exports}var b=F0(),_c={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh;function W0(){if(rh)return ie;rh=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),A=Symbol.iterator;function R(C){return C===null||typeof C!="object"?null:(C=A&&C[A]||C["@@iterator"],typeof C=="function"?C:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,K={};function X(C,O,Z){this.props=C,this.context=O,this.refs=K,this.updater=Z||H}X.prototype.isReactComponent={},X.prototype.setState=function(C,O){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,O,"setState")},X.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function J(){}J.prototype=X.prototype;function L(C,O,Z){this.props=C,this.context=O,this.refs=K,this.updater=Z||H}var Q=L.prototype=new J;Q.constructor=L,B(Q,X.prototype),Q.isPureReactComponent=!0;var $=Array.isArray;function V(){}var q={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function ee(C,O,Z){var I=Z.ref;return{$$typeof:o,type:C,key:O,ref:I!==void 0?I:null,props:Z}}function ue(C,O){return ee(C.type,O,C.props)}function se(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function ge(C){var O={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(Z){return O[Z]})}var Ue=/\/+/g;function Ve(C,O){return typeof C=="object"&&C!==null&&C.key!=null?ge(""+C.key):O.toString(36)}function lt(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(V,V):(C.status="pending",C.then(function(O){C.status==="pending"&&(C.status="fulfilled",C.value=O)},function(O){C.status==="pending"&&(C.status="rejected",C.reason=O)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function k(C,O,Z,I,le){var ae=typeof C;(ae==="undefined"||ae==="boolean")&&(C=null);var me=!1;if(C===null)me=!0;else switch(ae){case"bigint":case"string":case"number":me=!0;break;case"object":switch(C.$$typeof){case o:case i:me=!0;break;case y:return me=C._init,k(me(C._payload),O,Z,I,le)}}if(me)return le=le(C),me=I===""?"."+Ve(C,0):I,$(le)?(Z="",me!=null&&(Z=me.replace(Ue,"$&/")+"/"),k(le,O,Z,"",function(be){return be})):le!=null&&(se(le)&&(le=ue(le,Z+(le.key==null||C&&C.key===le.key?"":(""+le.key).replace(Ue,"$&/")+"/")+me)),O.push(le)),1;me=0;var He=I===""?".":I+":";if($(C))for(var we=0;we<C.length;we++)I=C[we],ae=He+Ve(I,we),me+=k(I,O,Z,ae,le);else if(we=R(C),typeof we=="function")for(C=we.call(C),we=0;!(I=C.next()).done;)I=I.value,ae=He+Ve(I,we++),me+=k(I,O,Z,ae,le);else if(ae==="object"){if(typeof C.then=="function")return k(lt(C),O,Z,I,le);throw O=String(C),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return me}function G(C,O,Z){if(C==null)return C;var I=[],le=0;return k(C,I,"","",function(ae){return O.call(Z,ae,le++)}),I}function te(C){if(C._status===-1){var O=C._result;O=O(),O.then(function(Z){(C._status===0||C._status===-1)&&(C._status=1,C._result=Z)},function(Z){(C._status===0||C._status===-1)&&(C._status=2,C._result=Z)}),C._status===-1&&(C._status=0,C._result=O)}if(C._status===1)return C._result.default;throw C._result}var ce=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},ye={map:G,forEach:function(C,O,Z){G(C,function(){O.apply(this,arguments)},Z)},count:function(C){var O=0;return G(C,function(){O++}),O},toArray:function(C){return G(C,function(O){return O})||[]},only:function(C){if(!se(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return ie.Activity=S,ie.Children=ye,ie.Component=X,ie.Fragment=r,ie.Profiler=u,ie.PureComponent=L,ie.StrictMode=c,ie.Suspense=g,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,ie.__COMPILER_RUNTIME={__proto__:null,c:function(C){return q.H.useMemoCache(C)}},ie.cache=function(C){return function(){return C.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(C,O,Z){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var I=B({},C.props),le=C.key;if(O!=null)for(ae in O.key!==void 0&&(le=""+O.key),O)!Y.call(O,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&O.ref===void 0||(I[ae]=O[ae]);var ae=arguments.length-2;if(ae===1)I.children=Z;else if(1<ae){for(var me=Array(ae),He=0;He<ae;He++)me[He]=arguments[He+2];I.children=me}return ee(C.type,le,I)},ie.createContext=function(C){return C={$$typeof:p,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},ie.createElement=function(C,O,Z){var I,le={},ae=null;if(O!=null)for(I in O.key!==void 0&&(ae=""+O.key),O)Y.call(O,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(le[I]=O[I]);var me=arguments.length-2;if(me===1)le.children=Z;else if(1<me){for(var He=Array(me),we=0;we<me;we++)He[we]=arguments[we+2];le.children=He}if(C&&C.defaultProps)for(I in me=C.defaultProps,me)le[I]===void 0&&(le[I]=me[I]);return ee(C,ae,le)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(C){return{$$typeof:m,render:C}},ie.isValidElement=se,ie.lazy=function(C){return{$$typeof:y,_payload:{_status:-1,_result:C},_init:te}},ie.memo=function(C,O){return{$$typeof:v,type:C,compare:O===void 0?null:O}},ie.startTransition=function(C){var O=q.T,Z={};q.T=Z;try{var I=C(),le=q.S;le!==null&&le(Z,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(V,ce)}catch(ae){ce(ae)}finally{O!==null&&Z.types!==null&&(O.types=Z.types),q.T=O}},ie.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},ie.use=function(C){return q.H.use(C)},ie.useActionState=function(C,O,Z){return q.H.useActionState(C,O,Z)},ie.useCallback=function(C,O){return q.H.useCallback(C,O)},ie.useContext=function(C){return q.H.useContext(C)},ie.useDebugValue=function(){},ie.useDeferredValue=function(C,O){return q.H.useDeferredValue(C,O)},ie.useEffect=function(C,O){return q.H.useEffect(C,O)},ie.useEffectEvent=function(C){return q.H.useEffectEvent(C)},ie.useId=function(){return q.H.useId()},ie.useImperativeHandle=function(C,O,Z){return q.H.useImperativeHandle(C,O,Z)},ie.useInsertionEffect=function(C,O){return q.H.useInsertionEffect(C,O)},ie.useLayoutEffect=function(C,O){return q.H.useLayoutEffect(C,O)},ie.useMemo=function(C,O){return q.H.useMemo(C,O)},ie.useOptimistic=function(C,O){return q.H.useOptimistic(C,O)},ie.useReducer=function(C,O,Z){return q.H.useReducer(C,O,Z)},ie.useRef=function(C){return q.H.useRef(C)},ie.useState=function(C){return q.H.useState(C)},ie.useSyncExternalStore=function(C,O,Z){return q.H.useSyncExternalStore(C,O,Z)},ie.useTransition=function(){return q.H.useTransition()},ie.version="19.2.6",ie}var ch;function Wc(){return ch||(ch=1,_c.exports=W0()),_c.exports}var T=Wc();const Be=$0(T);var Uc={exports:{}},Si={},Hc={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function P0(){return uh||(uh=1,(function(o){function i(k,G){var te=k.length;k.push(G);e:for(;0<te;){var ce=te-1>>>1,ye=k[ce];if(0<u(ye,G))k[ce]=G,k[te]=ye,te=ce;else break e}}function r(k){return k.length===0?null:k[0]}function c(k){if(k.length===0)return null;var G=k[0],te=k.pop();if(te!==G){k[0]=te;e:for(var ce=0,ye=k.length,C=ye>>>1;ce<C;){var O=2*(ce+1)-1,Z=k[O],I=O+1,le=k[I];if(0>u(Z,te))I<ye&&0>u(le,Z)?(k[ce]=le,k[I]=te,ce=I):(k[ce]=Z,k[O]=te,ce=O);else if(I<ye&&0>u(le,te))k[ce]=le,k[I]=te,ce=I;else break e}}return G}function u(k,G){var te=k.sortIndex-G.sortIndex;return te!==0?te:k.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var p=Date,m=p.now();o.unstable_now=function(){return p.now()-m}}var g=[],v=[],y=1,S=null,A=3,R=!1,H=!1,B=!1,K=!1,X=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function Q(k){for(var G=r(v);G!==null;){if(G.callback===null)c(v);else if(G.startTime<=k)c(v),G.sortIndex=G.expirationTime,i(g,G);else break;G=r(v)}}function $(k){if(B=!1,Q(k),!H)if(r(g)!==null)H=!0,V||(V=!0,ge());else{var G=r(v);G!==null&&lt($,G.startTime-k)}}var V=!1,q=-1,Y=5,ee=-1;function ue(){return K?!0:!(o.unstable_now()-ee<Y)}function se(){if(K=!1,V){var k=o.unstable_now();ee=k;var G=!0;try{e:{H=!1,B&&(B=!1,J(q),q=-1),R=!0;var te=A;try{t:{for(Q(k),S=r(g);S!==null&&!(S.expirationTime>k&&ue());){var ce=S.callback;if(typeof ce=="function"){S.callback=null,A=S.priorityLevel;var ye=ce(S.expirationTime<=k);if(k=o.unstable_now(),typeof ye=="function"){S.callback=ye,Q(k),G=!0;break t}S===r(g)&&c(g),Q(k)}else c(g);S=r(g)}if(S!==null)G=!0;else{var C=r(v);C!==null&&lt($,C.startTime-k),G=!1}}break e}finally{S=null,A=te,R=!1}G=void 0}}finally{G?ge():V=!1}}}var ge;if(typeof L=="function")ge=function(){L(se)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,Ve=Ue.port2;Ue.port1.onmessage=se,ge=function(){Ve.postMessage(null)}}else ge=function(){X(se,0)};function lt(k,G){q=X(function(){k(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return A},o.unstable_next=function(k){switch(A){case 1:case 2:case 3:var G=3;break;default:G=A}var te=A;A=G;try{return k()}finally{A=te}},o.unstable_requestPaint=function(){K=!0},o.unstable_runWithPriority=function(k,G){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var te=A;A=k;try{return G()}finally{A=te}},o.unstable_scheduleCallback=function(k,G,te){var ce=o.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ce+te:ce):te=ce,k){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=te+ye,k={id:y++,callback:G,priorityLevel:k,startTime:te,expirationTime:ye,sortIndex:-1},te>ce?(k.sortIndex=te,i(v,k),r(g)===null&&k===r(v)&&(B?(J(q),q=-1):B=!0,lt($,te-ce))):(k.sortIndex=ye,i(g,k),H||R||(H=!0,V||(V=!0,ge()))),k},o.unstable_shouldYield=ue,o.unstable_wrapCallback=function(k){var G=A;return function(){var te=A;A=G;try{return k.apply(this,arguments)}finally{A=te}}}})(Lc)),Lc}var dh;function ev(){return dh||(dh=1,Hc.exports=P0()),Hc.exports}var Bc={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function tv(){if(fh)return ht;fh=1;var o=Wc();function i(g){var v="https://react.dev/errors/"+g;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)v+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var c={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(g,v,y){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:S==null?null:""+S,children:g,containerInfo:v,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,v){if(g==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ht.createPortal=function(g,v){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(i(299));return f(g,v,null,y)},ht.flushSync=function(g){var v=p.T,y=c.p;try{if(p.T=null,c.p=2,g)return g()}finally{p.T=v,c.p=y,c.d.f()}},ht.preconnect=function(g,v){typeof g=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,c.d.C(g,v))},ht.prefetchDNS=function(g){typeof g=="string"&&c.d.D(g)},ht.preinit=function(g,v){if(typeof g=="string"&&v&&typeof v.as=="string"){var y=v.as,S=m(y,v.crossOrigin),A=typeof v.integrity=="string"?v.integrity:void 0,R=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;y==="style"?c.d.S(g,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:S,integrity:A,fetchPriority:R}):y==="script"&&c.d.X(g,{crossOrigin:S,integrity:A,fetchPriority:R,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},ht.preinitModule=function(g,v){if(typeof g=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var y=m(v.as,v.crossOrigin);c.d.M(g,{crossOrigin:y,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&c.d.M(g)},ht.preload=function(g,v){if(typeof g=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var y=v.as,S=m(y,v.crossOrigin);c.d.L(g,y,{crossOrigin:S,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},ht.preloadModule=function(g,v){if(typeof g=="string")if(v){var y=m(v.as,v.crossOrigin);c.d.m(g,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:y,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else c.d.m(g)},ht.requestFormReset=function(g){c.d.r(g)},ht.unstable_batchedUpdates=function(g,v){return g(v)},ht.useFormState=function(g,v,y){return p.H.useFormState(g,v,y)},ht.useFormStatus=function(){return p.H.useHostTransitionStatus()},ht.version="19.2.6",ht}var ph;function Lh(){if(ph)return Bc.exports;ph=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),Bc.exports=tv(),Bc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function nv(){if(hh)return Si;hh=1;var o=ev(),i=Wc(),r=Lh();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return g(l),e;if(s===a)return g(l),t;s=s.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=s;else{for(var d=!1,h=l.child;h;){if(h===n){d=!0,n=l,a=s;break}if(h===a){d=!0,a=l,n=s;break}h=h.sibling}if(!d){for(h=s.child;h;){if(h===n){d=!0,n=s,a=l;break}if(h===a){d=!0,a=s,n=l;break}h=h.sibling}if(!d)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,A=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),L=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),ee=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Symbol.for("react.client.reference");function Ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case X:return"Profiler";case K:return"StrictMode";case $:return"Suspense";case V:return"SuspenseList";case ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case L:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return t=e.displayName||null,t!==null?t:Ve(e.type)||"Memo";case Y:t=e._payload,e=e._init;try{return Ve(e(t))}catch{}}return null}var lt=Array.isArray,k=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ce=[],ye=-1;function C(e){return{current:e}}function O(e){0>ye||(e.current=ce[ye],ce[ye]=null,ye--)}function Z(e,t){ye++,ce[ye]=e.current,e.current=t}var I=C(null),le=C(null),ae=C(null),me=C(null);function He(e,t){switch(Z(ae,t),Z(le,e),Z(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ep(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ep(t),e=Ap(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(I),Z(I,e)}function we(){O(I),O(le),O(ae)}function be(e){e.memoizedState!==null&&Z(me,e);var t=I.current,n=Ap(t,e.type);t!==n&&(Z(le,e),Z(I,n))}function cn(e){le.current===e&&(O(I),O(le)),me.current===e&&(O(me),gi._currentValue=te)}var bt,yn;function it(e){if(bt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bt=t&&t[1]||"",yn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bt+e+yn}var un=!1;function dn(e,t){if(!e||un)return"";un=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(M){var z=M}Reflect.construct(e,[],U)}else{try{U.call()}catch(M){z=M}e.call(U.prototype)}}else{try{throw Error()}catch(M){z=M}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(M){if(M&&z&&typeof M.stack=="string")return[M.stack,z.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),d=s[0],h=s[1];if(d&&h){var x=d.split(`
`),E=h.split(`
`);for(l=a=0;a<x.length&&!x[a].includes("DetermineComponentFrameRoot");)a++;for(;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;if(a===x.length||l===E.length)for(a=x.length-1,l=E.length-1;1<=a&&0<=l&&x[a]!==E[l];)l--;for(;1<=a&&0<=l;a--,l--)if(x[a]!==E[l]){if(a!==1||l!==1)do if(a--,l--,0>l||x[a]!==E[l]){var j=`
`+x[a].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=a&&0<=l);break}}}finally{un=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?it(n):""}function Li(e,t){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return e.child!==t&&t!==null?it("Suspense Fallback"):it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return dn(e.type,!1);case 11:return dn(e.type.render,!1);case 1:return dn(e.type,!0);case 31:return it("Activity");default:return""}}function Al(e){try{var t="",n=null;do t+=Li(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ga=Object.prototype.hasOwnProperty,Lt=o.unstable_scheduleCallback,Xn=o.unstable_cancelCallback,Ha=o.unstable_shouldYield,Bi=o.unstable_requestPaint,dt=o.unstable_now,wo=o.unstable_getCurrentPriorityLevel,qi=o.unstable_ImmediatePriority,xn=o.unstable_UserBlockingPriority,en=o.unstable_NormalPriority,ma=o.unstable_LowPriority,zl=o.unstable_IdlePriority,fn=o.log,Yi=o.unstable_setDisableYieldValue,va=null,gt=null;function Bt(e){if(typeof fn=="function"&&Yi(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(va,e)}catch{}}var ft=Math.clz32?Math.clz32:No,Co=Math.log,Xi=Math.LN2;function No(e){return e>>>=0,e===0?32:31-(Co(e)/Xi|0)|0}var La=256,Ba=262144,Xe=4194304;function Ge(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~s,a!==0?l=Ge(a):(d&=h,d!==0?l=Ge(d):n||(n=h&~e,n!==0&&(l=Ge(n))))):(h=a&~s,h!==0?l=Ge(h):d!==0?l=Ge(d):n||(n=a&~e,n!==0&&(l=Ge(n)))),l===0?0:t!==0&&t!==l&&(t&s)===0&&(s=l&-l,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:l}function yt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pt(){var e=Xe;return Xe<<=1,(Xe&62914560)===0&&(Xe=4194304),e}function St(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fe(e,t,n,a,l,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,x=e.expirationTimes,E=e.hiddenUpdates;for(n=d&~n;0<n;){var j=31-ft(n),U=1<<j;h[j]=0,x[j]=-1;var z=E[j];if(z!==null)for(E[j]=null,j=0;j<z.length;j++){var M=z[j];M!==null&&(M.lane&=-536870913)}n&=~U}a!==0&&tn(e,a,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function tn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ft(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function zt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-ft(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Yt(e,t){var n=t&-t;return n=(n&42)!==0?1:Sn(n),(n&(e.suspendedLanes|t))!==0?0:n}function Sn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nn(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Fp(e.type))}function Gn(e,t){var n=G.p;try{return G.p=e,t()}finally{G.p=n}}var Xt=Math.random().toString(36).slice(2),st="__reactFiber$"+Xt,wt="__reactProps$"+Xt,qa="__reactContainer$"+Xt,To="__reactEvents$"+Xt,_g="__reactListeners$"+Xt,Ug="__reactHandles$"+Xt,pu="__reactResources$"+Xt,Rl="__reactMarker$"+Xt;function Do(e){delete e[st],delete e[wt],delete e[To],delete e[_g],delete e[Ug]}function Ya(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qa]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_p(e);e!==null;){if(n=e[st])return n;e=_p(e)}return t}e=n,n=e.parentNode}return null}function Xa(e){if(e=e[st]||e[qa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ml(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Ga(e){var t=e[pu];return t||(t=e[pu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[Rl]=!0}var hu=new Set,gu={};function ba(e,t){Qa(e,t),Qa(e+"Capture",t)}function Qa(e,t){for(gu[e]=t,e=0;e<t.length;e++)hu.add(t[e])}var Hg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mu={},vu={};function Lg(e){return ga.call(vu,e)?!0:ga.call(mu,e)?!1:Hg.test(e)?vu[e]=!0:(mu[e]=!0,!1)}function Gi(e,t,n){if(Lg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Qi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Cn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bg(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eo(e){if(!e._valueTracker){var t=bu(e)?"checked":"value";e._valueTracker=Bg(e,t,""+e[t])}}function yu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=bu(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qg=/[\n"\\]/g;function Qt(e){return e.replace(qg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ao(e,t,n,a,l,s,d,h){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Gt(t)):e.value!==""+Gt(t)&&(e.value=""+Gt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?zo(e,d,Gt(t)):n!=null?zo(e,d,Gt(n)):a!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Gt(h):e.removeAttribute("name")}function xu(e,t,n,a,l,s,d,h){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Eo(e);return}n=n!=null?""+Gt(n):"",t=t!=null?""+Gt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Eo(e)}function zo(e,t,n){t==="number"&&Zi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Za(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Su(e,t,n){if(t!=null&&(t=""+Gt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Gt(n):""}function wu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(lt(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Gt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Eo(e)}function Va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Yg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Nu(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&Cu(e,l,a)}else for(var s in t)t.hasOwnProperty(s)&&Cu(e,s,t[s])}function Ro(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vi(e){return Gg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Nn(){}var Mo=null;function ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Ja=null;function Tu(e){var t=Xa(e);if(t&&(e=t.stateNode)){var n=e[wt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ao(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Qt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[wt]||null;if(!l)throw Error(c(90));Ao(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&yu(a)}break e;case"textarea":Su(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Za(e,!!n.multiple,t,!1)}}}var Oo=!1;function Du(e,t,n){if(Oo)return e(t,n);Oo=!0;try{var a=e(t);return a}finally{if(Oo=!1,(Ka!==null||Ja!==null)&&(Os(),Ka&&(t=Ka,e=Ja,Ja=Ka=null,Tu(t),e)))for(t=0;t<e.length;t++)Tu(e[t])}}function kl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[wt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jo=!1;if(Tn)try{var Ol={};Object.defineProperty(Ol,"passive",{get:function(){jo=!0}}),window.addEventListener("test",Ol,Ol),window.removeEventListener("test",Ol,Ol)}catch{jo=!1}var Qn=null,_o=null,Ki=null;function Eu(){if(Ki)return Ki;var e,t=_o,n=t.length,a,l="value"in Qn?Qn.value:Qn.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===l[s-a];a++);return Ki=l.slice(e,1<a?1-a:void 0)}function Ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $i(){return!0}function Au(){return!1}function Ct(e){function t(n,a,l,s,d){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(s):s[h]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$i:Au,this.isPropagationStopped=Au,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$i)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$i)},persist:function(){},isPersistent:$i}),t}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ii=Ct(ya),jl=S({},ya,{view:0,detail:0}),Qg=Ct(jl),Uo,Ho,_l,Fi=S({},jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_l&&(_l&&e.type==="mousemove"?(Uo=e.screenX-_l.screenX,Ho=e.screenY-_l.screenY):Ho=Uo=0,_l=e),Uo)},movementY:function(e){return"movementY"in e?e.movementY:Ho}}),zu=Ct(Fi),Zg=S({},Fi,{dataTransfer:0}),Vg=Ct(Zg),Kg=S({},jl,{relatedTarget:0}),Lo=Ct(Kg),Jg=S({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),$g=Ct(Jg),Ig=S({},ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fg=Ct(Ig),Wg=S({},ya,{data:0}),Ru=Ct(Wg),Pg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},em={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tm[e])?!!t[e]:!1}function Bo(){return nm}var am=S({},jl,{key:function(e){if(e.key){var t=Pg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?em[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bo,charCode:function(e){return e.type==="keypress"?Ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lm=Ct(am),im=S({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=Ct(im),sm=S({},jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bo}),om=Ct(sm),rm=S({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),cm=Ct(rm),um=S({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=Ct(um),fm=S({},ya,{newState:0,oldState:0}),pm=Ct(fm),hm=[9,13,27,32],qo=Tn&&"CompositionEvent"in window,Ul=null;Tn&&"documentMode"in document&&(Ul=document.documentMode);var gm=Tn&&"TextEvent"in window&&!Ul,ku=Tn&&(!qo||Ul&&8<Ul&&11>=Ul),Ou=" ",ju=!1;function _u(e,t){switch(e){case"keyup":return hm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $a=!1;function mm(e,t){switch(e){case"compositionend":return Uu(t);case"keypress":return t.which!==32?null:(ju=!0,Ou);case"textInput":return e=t.data,e===Ou&&ju?null:e;default:return null}}function vm(e,t){if($a)return e==="compositionend"||!qo&&_u(e,t)?(e=Eu(),Ki=_o=Qn=null,$a=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ku&&t.locale!=="ko"?null:t.data;default:return null}}var bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bm[e.type]:t==="textarea"}function Lu(e,t,n,a){Ka?Ja?Ja.push(a):Ja=[a]:Ka=a,t=qs(t,"onChange"),0<t.length&&(n=new Ii("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Hl=null,Ll=null;function ym(e){Sp(e,0)}function Wi(e){var t=Ml(e);if(yu(t))return e}function Bu(e,t){if(e==="change")return t}var qu=!1;if(Tn){var Yo;if(Tn){var Xo="oninput"in document;if(!Xo){var Yu=document.createElement("div");Yu.setAttribute("oninput","return;"),Xo=typeof Yu.oninput=="function"}Yo=Xo}else Yo=!1;qu=Yo&&(!document.documentMode||9<document.documentMode)}function Xu(){Hl&&(Hl.detachEvent("onpropertychange",Gu),Ll=Hl=null)}function Gu(e){if(e.propertyName==="value"&&Wi(Ll)){var t=[];Lu(t,Ll,e,ko(e)),Du(ym,t)}}function xm(e,t,n){e==="focusin"?(Xu(),Hl=t,Ll=n,Hl.attachEvent("onpropertychange",Gu)):e==="focusout"&&Xu()}function Sm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wi(Ll)}function wm(e,t){if(e==="click")return Wi(t)}function Cm(e,t){if(e==="input"||e==="change")return Wi(t)}function Nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:Nm;function Bl(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!ga.call(t,l)||!Rt(e[l],t[l]))return!1}return!0}function Qu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zu(e,t){var n=Qu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qu(n)}}function Vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ku(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zi(e.document)}return t}function Go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Tm=Tn&&"documentMode"in document&&11>=document.documentMode,Ia=null,Qo=null,ql=null,Zo=!1;function Ju(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zo||Ia==null||Ia!==Zi(a)||(a=Ia,"selectionStart"in a&&Go(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ql&&Bl(ql,a)||(ql=a,a=qs(Qo,"onSelect"),0<a.length&&(t=new Ii("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ia)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fa={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},Vo={},$u={};Tn&&($u=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function Sa(e){if(Vo[e])return Vo[e];if(!Fa[e])return e;var t=Fa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $u)return Vo[e]=t[n];return e}var Iu=Sa("animationend"),Fu=Sa("animationiteration"),Wu=Sa("animationstart"),Dm=Sa("transitionrun"),Em=Sa("transitionstart"),Am=Sa("transitioncancel"),Pu=Sa("transitionend"),ed=new Map,Ko="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ko.push("scrollEnd");function an(e,t){ed.set(e,t),ba(t,[e])}var Pi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zt=[],Wa=0,Jo=0;function es(){for(var e=Wa,t=Jo=Wa=0;t<e;){var n=Zt[t];Zt[t++]=null;var a=Zt[t];Zt[t++]=null;var l=Zt[t];Zt[t++]=null;var s=Zt[t];if(Zt[t++]=null,a!==null&&l!==null){var d=a.pending;d===null?l.next=l:(l.next=d.next,d.next=l),a.pending=l}s!==0&&td(n,l,s)}}function ts(e,t,n,a){Zt[Wa++]=e,Zt[Wa++]=t,Zt[Wa++]=n,Zt[Wa++]=a,Jo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function $o(e,t,n,a){return ts(e,t,n,a),ns(e)}function wa(e,t){return ts(e,null,null,t),ns(e)}function td(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&t!==null&&(l=31-ft(n),e=s.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),s):null}function ns(e){if(50<ri)throw ri=0,lc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pa={};function zm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,a){return new zm(e,t,n,a)}function Io(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dn(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function nd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function as(e,t,n,a,l,s){var d=0;if(a=e,typeof e=="function")Io(e)&&(d=1);else if(typeof e=="string")d=j0(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ee:return e=Mt(31,n,t,l),e.elementType=ee,e.lanes=s,e;case B:return Ca(n.children,l,s,t);case K:d=8,l|=24;break;case X:return e=Mt(12,n,t,l|2),e.elementType=X,e.lanes=s,e;case $:return e=Mt(13,n,t,l),e.elementType=$,e.lanes=s,e;case V:return e=Mt(19,n,t,l),e.elementType=V,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:d=10;break e;case J:d=9;break e;case Q:d=11;break e;case q:d=14;break e;case Y:d=16,a=null;break e}d=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=Mt(d,n,t,l),t.elementType=e,t.type=a,t.lanes=s,t}function Ca(e,t,n,a){return e=Mt(7,e,a,t),e.lanes=n,e}function Fo(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function ad(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function Wo(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ld=new WeakMap;function Vt(e,t){if(typeof e=="object"&&e!==null){var n=ld.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Al(t)},ld.set(e,t),t)}return{value:e,source:t,stack:Al(t)}}var el=[],tl=0,ls=null,Yl=0,Kt=[],Jt=0,Zn=null,pn=1,hn="";function En(e,t){el[tl++]=Yl,el[tl++]=ls,ls=e,Yl=t}function id(e,t,n){Kt[Jt++]=pn,Kt[Jt++]=hn,Kt[Jt++]=Zn,Zn=e;var a=pn;e=hn;var l=32-ft(a)-1;a&=~(1<<l),n+=1;var s=32-ft(t)+l;if(30<s){var d=l-l%5;s=(a&(1<<d)-1).toString(32),a>>=d,l-=d,pn=1<<32-ft(t)+l|n<<l|a,hn=s+e}else pn=1<<s|n<<l|a,hn=e}function Po(e){e.return!==null&&(En(e,1),id(e,1,0))}function er(e){for(;e===ls;)ls=el[--tl],el[tl]=null,Yl=el[--tl],el[tl]=null;for(;e===Zn;)Zn=Kt[--Jt],Kt[Jt]=null,hn=Kt[--Jt],Kt[Jt]=null,pn=Kt[--Jt],Kt[Jt]=null}function sd(e,t){Kt[Jt++]=pn,Kt[Jt++]=hn,Kt[Jt++]=Zn,pn=t.id,hn=t.overflow,Zn=e}var ot=null,je=null,ve=!1,Vn=null,$t=!1,tr=Error(c(519));function Kn(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xl(Vt(t,e)),tr}function od(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[st]=e,t[wt]=a,n){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(n=0;n<ui.length;n++)fe(ui[n],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),xu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),wu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Tp(t.textContent,n)?(a.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),a.onScroll!=null&&fe("scroll",t),a.onScrollEnd!=null&&fe("scrollend",t),a.onClick!=null&&(t.onclick=Nn),t=!0):t=!1,t||Kn(e,!0)}function rd(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 31:case 13:$t=!1;return;case 27:case 3:$t=!0;return;default:ot=ot.return}}function nl(e){if(e!==ot)return!1;if(!ve)return rd(e),ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||yc(e.type,e.memoizedProps)),n=!n),n&&je&&Kn(e),rd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));je=jp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));je=jp(e)}else t===27?(t=je,oa(e.type)?(e=Nc,Nc=null,je=e):je=t):je=ot?Ft(e.stateNode.nextSibling):null;return!0}function Na(){je=ot=null,ve=!1}function nr(){var e=Vn;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),Vn=null),e}function Xl(e){Vn===null?Vn=[e]:Vn.push(e)}var ar=C(null),Ta=null,An=null;function Jn(e,t,n){Z(ar,t._currentValue),t._currentValue=n}function zn(e){e._currentValue=ar.current,O(ar)}function lr(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function ir(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var d=l.child;s=s.firstContext;e:for(;s!==null;){var h=s;s=l;for(var x=0;x<t.length;x++)if(h.context===t[x]){s.lanes|=n,h=s.alternate,h!==null&&(h.lanes|=n),lr(s.return,n,e),a||(d=null);break e}s=h.next}}else if(l.tag===18){if(d=l.return,d===null)throw Error(c(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),lr(d,n,e),d=null}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===e){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}}function al(e,t,n,a){e=null;for(var l=t,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var d=l.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var h=l.type;Rt(l.pendingProps.value,d.value)||(e!==null?e.push(h):e=[h])}}else if(l===me.current){if(d=l.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(gi):e=[gi])}l=l.return}e!==null&&ir(t,e,n,a),t.flags|=262144}function is(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Da(e){Ta=e,An=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return cd(Ta,e)}function ss(e,t){return Ta===null&&Da(e),cd(e,t)}function cd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},An===null){if(e===null)throw Error(c(308));An=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else An=An.next=t;return n}var Rm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Mm=o.unstable_scheduleCallback,km=o.unstable_NormalPriority,Ke={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sr(){return{controller:new Rm,data:new Map,refCount:0}}function Gl(e){e.refCount--,e.refCount===0&&Mm(km,function(){e.controller.abort()})}var Ql=null,or=0,ll=0,il=null;function Om(e,t){if(Ql===null){var n=Ql=[];or=0,ll=uc(),il={status:"pending",value:void 0,then:function(a){n.push(a)}}}return or++,t.then(ud,ud),t}function ud(){if(--or===0&&Ql!==null){il!==null&&(il.status="fulfilled");var e=Ql;Ql=null,ll=0,il=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jm(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var dd=k.S;k.S=function(e,t){$f=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Om(e,t),dd!==null&&dd(e,t)};var Ea=C(null);function rr(){var e=Ea.current;return e!==null?e:ke.pooledCache}function os(e,t){t===null?Z(Ea,Ea.current):Z(Ea,t.pool)}function fd(){var e=rr();return e===null?null:{parent:Ke._currentValue,pool:e}}var sl=Error(c(460)),cr=Error(c(474)),rs=Error(c(542)),cs={then:function(){}};function pd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Nn,Nn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,md(e),e;default:if(typeof t.status=="string")t.then(Nn,Nn);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,md(e),e}throw za=t,sl}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(za=n,sl):n}}var za=null;function gd(){if(za===null)throw Error(c(459));var e=za;return za=null,e}function md(e){if(e===sl||e===rs)throw Error(c(483))}var ol=null,Zl=0;function us(e){var t=Zl;return Zl+=1,ol===null&&(ol=[]),hd(ol,e,t)}function Vl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ds(e,t){throw t.$$typeof===A?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function vd(e){function t(N,w){if(e){var D=N.deletions;D===null?(N.deletions=[w],N.flags|=16):D.push(w)}}function n(N,w){if(!e)return null;for(;w!==null;)t(N,w),w=w.sibling;return null}function a(N){for(var w=new Map;N!==null;)N.key!==null?w.set(N.key,N):w.set(N.index,N),N=N.sibling;return w}function l(N,w){return N=Dn(N,w),N.index=0,N.sibling=null,N}function s(N,w,D){return N.index=D,e?(D=N.alternate,D!==null?(D=D.index,D<w?(N.flags|=67108866,w):D):(N.flags|=67108866,w)):(N.flags|=1048576,w)}function d(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function h(N,w,D,_){return w===null||w.tag!==6?(w=Fo(D,N.mode,_),w.return=N,w):(w=l(w,D),w.return=N,w)}function x(N,w,D,_){var P=D.type;return P===B?j(N,w,D.props.children,_,D.key):w!==null&&(w.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Y&&Aa(P)===w.type)?(w=l(w,D.props),Vl(w,D),w.return=N,w):(w=as(D.type,D.key,D.props,null,N.mode,_),Vl(w,D),w.return=N,w)}function E(N,w,D,_){return w===null||w.tag!==4||w.stateNode.containerInfo!==D.containerInfo||w.stateNode.implementation!==D.implementation?(w=Wo(D,N.mode,_),w.return=N,w):(w=l(w,D.children||[]),w.return=N,w)}function j(N,w,D,_,P){return w===null||w.tag!==7?(w=Ca(D,N.mode,_,P),w.return=N,w):(w=l(w,D),w.return=N,w)}function U(N,w,D){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=Fo(""+w,N.mode,D),w.return=N,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case R:return D=as(w.type,w.key,w.props,null,N.mode,D),Vl(D,w),D.return=N,D;case H:return w=Wo(w,N.mode,D),w.return=N,w;case Y:return w=Aa(w),U(N,w,D)}if(lt(w)||ge(w))return w=Ca(w,N.mode,D,null),w.return=N,w;if(typeof w.then=="function")return U(N,us(w),D);if(w.$$typeof===L)return U(N,ss(N,w),D);ds(N,w)}return null}function z(N,w,D,_){var P=w!==null?w.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return P!==null?null:h(N,w,""+D,_);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case R:return D.key===P?x(N,w,D,_):null;case H:return D.key===P?E(N,w,D,_):null;case Y:return D=Aa(D),z(N,w,D,_)}if(lt(D)||ge(D))return P!==null?null:j(N,w,D,_,null);if(typeof D.then=="function")return z(N,w,us(D),_);if(D.$$typeof===L)return z(N,w,ss(N,D),_);ds(N,D)}return null}function M(N,w,D,_,P){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return N=N.get(D)||null,h(w,N,""+_,P);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case R:return N=N.get(_.key===null?D:_.key)||null,x(w,N,_,P);case H:return N=N.get(_.key===null?D:_.key)||null,E(w,N,_,P);case Y:return _=Aa(_),M(N,w,D,_,P)}if(lt(_)||ge(_))return N=N.get(D)||null,j(w,N,_,P,null);if(typeof _.then=="function")return M(N,w,D,us(_),P);if(_.$$typeof===L)return M(N,w,D,ss(w,_),P);ds(w,_)}return null}function F(N,w,D,_){for(var P=null,xe=null,W=w,re=w=0,he=null;W!==null&&re<D.length;re++){W.index>re?(he=W,W=null):he=W.sibling;var Se=z(N,W,D[re],_);if(Se===null){W===null&&(W=he);break}e&&W&&Se.alternate===null&&t(N,W),w=s(Se,w,re),xe===null?P=Se:xe.sibling=Se,xe=Se,W=he}if(re===D.length)return n(N,W),ve&&En(N,re),P;if(W===null){for(;re<D.length;re++)W=U(N,D[re],_),W!==null&&(w=s(W,w,re),xe===null?P=W:xe.sibling=W,xe=W);return ve&&En(N,re),P}for(W=a(W);re<D.length;re++)he=M(W,N,re,D[re],_),he!==null&&(e&&he.alternate!==null&&W.delete(he.key===null?re:he.key),w=s(he,w,re),xe===null?P=he:xe.sibling=he,xe=he);return e&&W.forEach(function(fa){return t(N,fa)}),ve&&En(N,re),P}function ne(N,w,D,_){if(D==null)throw Error(c(151));for(var P=null,xe=null,W=w,re=w=0,he=null,Se=D.next();W!==null&&!Se.done;re++,Se=D.next()){W.index>re?(he=W,W=null):he=W.sibling;var fa=z(N,W,Se.value,_);if(fa===null){W===null&&(W=he);break}e&&W&&fa.alternate===null&&t(N,W),w=s(fa,w,re),xe===null?P=fa:xe.sibling=fa,xe=fa,W=he}if(Se.done)return n(N,W),ve&&En(N,re),P;if(W===null){for(;!Se.done;re++,Se=D.next())Se=U(N,Se.value,_),Se!==null&&(w=s(Se,w,re),xe===null?P=Se:xe.sibling=Se,xe=Se);return ve&&En(N,re),P}for(W=a(W);!Se.done;re++,Se=D.next())Se=M(W,N,re,Se.value,_),Se!==null&&(e&&Se.alternate!==null&&W.delete(Se.key===null?re:Se.key),w=s(Se,w,re),xe===null?P=Se:xe.sibling=Se,xe=Se);return e&&W.forEach(function(Z0){return t(N,Z0)}),ve&&En(N,re),P}function Re(N,w,D,_){if(typeof D=="object"&&D!==null&&D.type===B&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case R:e:{for(var P=D.key;w!==null;){if(w.key===P){if(P=D.type,P===B){if(w.tag===7){n(N,w.sibling),_=l(w,D.props.children),_.return=N,N=_;break e}}else if(w.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Y&&Aa(P)===w.type){n(N,w.sibling),_=l(w,D.props),Vl(_,D),_.return=N,N=_;break e}n(N,w);break}else t(N,w);w=w.sibling}D.type===B?(_=Ca(D.props.children,N.mode,_,D.key),_.return=N,N=_):(_=as(D.type,D.key,D.props,null,N.mode,_),Vl(_,D),_.return=N,N=_)}return d(N);case H:e:{for(P=D.key;w!==null;){if(w.key===P)if(w.tag===4&&w.stateNode.containerInfo===D.containerInfo&&w.stateNode.implementation===D.implementation){n(N,w.sibling),_=l(w,D.children||[]),_.return=N,N=_;break e}else{n(N,w);break}else t(N,w);w=w.sibling}_=Wo(D,N.mode,_),_.return=N,N=_}return d(N);case Y:return D=Aa(D),Re(N,w,D,_)}if(lt(D))return F(N,w,D,_);if(ge(D)){if(P=ge(D),typeof P!="function")throw Error(c(150));return D=P.call(D),ne(N,w,D,_)}if(typeof D.then=="function")return Re(N,w,us(D),_);if(D.$$typeof===L)return Re(N,w,ss(N,D),_);ds(N,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,w!==null&&w.tag===6?(n(N,w.sibling),_=l(w,D),_.return=N,N=_):(n(N,w),_=Fo(D,N.mode,_),_.return=N,N=_),d(N)):n(N,w)}return function(N,w,D,_){try{Zl=0;var P=Re(N,w,D,_);return ol=null,P}catch(W){if(W===sl||W===rs)throw W;var xe=Mt(29,W,null,N.mode);return xe.lanes=_,xe.return=N,xe}finally{}}}var Ra=vd(!0),bd=vd(!1),$n=!1;function ur(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function In(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ce&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=ns(e),td(e,null,n),t}return ts(e,a,t,n),ns(e)}function Kl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,zt(e,n)}}function fr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?l=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var pr=!1;function Jl(){if(pr){var e=il;if(e!==null)throw e}}function $l(e,t,n,a){pr=!1;var l=e.updateQueue;$n=!1;var s=l.firstBaseUpdate,d=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var x=h,E=x.next;x.next=null,d===null?s=E:d.next=E,d=x;var j=e.alternate;j!==null&&(j=j.updateQueue,h=j.lastBaseUpdate,h!==d&&(h===null?j.firstBaseUpdate=E:h.next=E,j.lastBaseUpdate=x))}if(s!==null){var U=l.baseState;d=0,j=E=x=null,h=s;do{var z=h.lane&-536870913,M=z!==h.lane;if(M?(pe&z)===z:(a&z)===z){z!==0&&z===ll&&(pr=!0),j!==null&&(j=j.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var F=e,ne=h;z=t;var Re=n;switch(ne.tag){case 1:if(F=ne.payload,typeof F=="function"){U=F.call(Re,U,z);break e}U=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=ne.payload,z=typeof F=="function"?F.call(Re,U,z):F,z==null)break e;U=S({},U,z);break e;case 2:$n=!0}}z=h.callback,z!==null&&(e.flags|=64,M&&(e.flags|=8192),M=l.callbacks,M===null?l.callbacks=[z]:M.push(z))}else M={lane:z,tag:h.tag,payload:h.payload,callback:h.callback,next:null},j===null?(E=j=M,x=U):j=j.next=M,d|=z;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;M=h,h=M.next,M.next=null,l.lastBaseUpdate=M,l.shared.pending=null}}while(!0);j===null&&(x=U),l.baseState=x,l.firstBaseUpdate=E,l.lastBaseUpdate=j,s===null&&(l.shared.lanes=0),na|=d,e.lanes=d,e.memoizedState=U}}function yd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function xd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)yd(n[e],t)}var rl=C(null),fs=C(0);function Sd(e,t){e=Ln,Z(fs,e),Z(rl,t),Ln=e|t.baseLanes}function hr(){Z(fs,Ln),Z(rl,rl.current)}function gr(){Ln=fs.current,O(rl),O(fs)}var kt=C(null),It=null;function Wn(e){var t=e.alternate;Z(Qe,Qe.current&1),Z(kt,e),It===null&&(t===null||rl.current!==null||t.memoizedState!==null)&&(It=e)}function mr(e){Z(Qe,Qe.current),Z(kt,e),It===null&&(It=e)}function wd(e){e.tag===22?(Z(Qe,Qe.current),Z(kt,e),It===null&&(It=e)):Pn()}function Pn(){Z(Qe,Qe.current),Z(kt,kt.current)}function Ot(e){O(kt),It===e&&(It=null),O(Qe)}var Qe=C(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||wc(n)||Cc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rn=0,oe=null,Ae=null,Je=null,hs=!1,cl=!1,Ma=!1,gs=0,Il=0,ul=null,_m=0;function qe(){throw Error(c(321))}function vr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function br(e,t,n,a,l,s){return Rn=s,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?sf:Or,Ma=!1,s=n(a,l),Ma=!1,cl&&(s=Nd(t,n,a,l)),Cd(e),s}function Cd(e){k.H=Pl;var t=Ae!==null&&Ae.next!==null;if(Rn=0,Je=Ae=oe=null,hs=!1,Il=0,ul=null,t)throw Error(c(300));e===null||$e||(e=e.dependencies,e!==null&&is(e)&&($e=!0))}function Nd(e,t,n,a){oe=e;var l=0;do{if(cl&&(ul=null),Il=0,cl=!1,25<=l)throw Error(c(301));if(l+=1,Je=Ae=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}k.H=of,s=t(n,a)}while(cl);return s}function Um(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?Fl(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(oe.flags|=1024),t}function yr(){var e=gs!==0;return gs=0,e}function xr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Sr(e){if(hs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hs=!1}Rn=0,Je=Ae=oe=null,cl=!1,Il=gs=0,ul=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?oe.memoizedState=Je=e:Je=Je.next=e,Je}function Ze(){if(Ae===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Je===null?oe.memoizedState:Je.next;if(t!==null)Je=t,Ae=e;else{if(e===null)throw oe.alternate===null?Error(c(467)):Error(c(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Je===null?oe.memoizedState=Je=e:Je=Je.next=e}return Je}function ms(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fl(e){var t=Il;return Il+=1,ul===null&&(ul=[]),e=hd(ul,e,t),t=oe,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?sf:Or),e}function vs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fl(e);if(e.$$typeof===L)return rt(e)}throw Error(c(438,String(e)))}function wr(e){var t=null,n=oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=oe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ms(),oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ue;return t.index++,n}function Mn(e,t){return typeof t=="function"?t(e):t}function bs(e){var t=Ze();return Cr(t,Ae,e)}function Cr(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,s=a.pending;if(s!==null){if(l!==null){var d=l.next;l.next=s.next,s.next=d}t.baseQueue=l=s,a.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{t=l.next;var h=d=null,x=null,E=t,j=!1;do{var U=E.lane&-536870913;if(U!==E.lane?(pe&U)===U:(Rn&U)===U){var z=E.revertLane;if(z===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),U===ll&&(j=!0);else if((Rn&z)===z){E=E.next,z===ll&&(j=!0);continue}else U={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(h=x=U,d=s):x=x.next=U,oe.lanes|=z,na|=z;U=E.action,Ma&&n(s,U),s=E.hasEagerState?E.eagerState:n(s,U)}else z={lane:U,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(h=x=z,d=s):x=x.next=z,oe.lanes|=U,na|=U;E=E.next}while(E!==null&&E!==t);if(x===null?d=s:x.next=h,!Rt(s,e.memoizedState)&&($e=!0,j&&(n=il,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=x,a.lastRenderedState=s}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Nr(e){var t=Ze(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var d=l=l.next;do s=e(s,d.action),d=d.next;while(d!==l);Rt(s,t.memoizedState)||($e=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function Td(e,t,n){var a=oe,l=Ze(),s=ve;if(s){if(n===void 0)throw Error(c(407));n=n()}else n=t();var d=!Rt((Ae||l).memoizedState,n);if(d&&(l.memoizedState=n,$e=!0),l=l.queue,Er(Ad.bind(null,a,l,e),[e]),l.getSnapshot!==t||d||Je!==null&&Je.memoizedState.tag&1){if(a.flags|=2048,dl(9,{destroy:void 0},Ed.bind(null,a,l,n,t),null),ke===null)throw Error(c(349));s||(Rn&127)!==0||Dd(a,t,n)}return n}function Dd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t=ms(),oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ed(e,t,n,a){t.value=n,t.getSnapshot=a,zd(t)&&Rd(e)}function Ad(e,t,n){return n(function(){zd(t)&&Rd(e)})}function zd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function Rd(e){var t=wa(e,2);t!==null&&At(t,e,2)}function Tr(e){var t=mt();if(typeof e=="function"){var n=e;if(e=n(),Ma){Bt(!0);try{n()}finally{Bt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:e},t}function Md(e,t,n,a){return e.baseState=n,Cr(e,Ae,typeof a=="function"?a:Mn)}function Hm(e,t,n,a,l){if(Ss(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};k.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,kd(t,s)):(s.next=n.next,t.pending=n.next=s)}}function kd(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var s=k.T,d={};k.T=d;try{var h=n(l,a),x=k.S;x!==null&&x(d,h),Od(e,t,h)}catch(E){Dr(e,t,E)}finally{s!==null&&d.types!==null&&(s.types=d.types),k.T=s}}else try{s=n(l,a),Od(e,t,s)}catch(E){Dr(e,t,E)}}function Od(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){jd(e,t,a)},function(a){return Dr(e,t,a)}):jd(e,t,n)}function jd(e,t,n){t.status="fulfilled",t.value=n,_d(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,kd(e,n)))}function Dr(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,_d(t),t=t.next;while(t!==a)}e.action=null}function _d(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ud(e,t){return t}function Hd(e,t){if(ve){var n=ke.formState;if(n!==null){e:{var a=oe;if(ve){if(je){t:{for(var l=je,s=$t;l.nodeType!==8;){if(!s){l=null;break t}if(l=Ft(l.nextSibling),l===null){l=null;break t}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){je=Ft(l.nextSibling),a=l.data==="F!";break e}}Kn(a)}a=!1}a&&(t=n[0])}}return n=mt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ud,lastRenderedState:t},n.queue=a,n=nf.bind(null,oe,a),a.dispatch=n,a=Tr(!1),s=kr.bind(null,oe,!1,a.queue),a=mt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=Hm.bind(null,oe,l,s,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Ld(e){var t=Ze();return Bd(t,Ae,e)}function Bd(e,t,n){if(t=Cr(e,t,Ud)[0],e=bs(Mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Fl(t)}catch(d){throw d===sl?rs:d}else a=t;t=Ze();var l=t.queue,s=l.dispatch;return n!==t.memoizedState&&(oe.flags|=2048,dl(9,{destroy:void 0},Lm.bind(null,l,n),null)),[a,s,e]}function Lm(e,t){e.action=t}function qd(e){var t=Ze(),n=Ae;if(n!==null)return Bd(t,n,e);Ze(),t=t.memoizedState,n=Ze();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function dl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=oe.updateQueue,t===null&&(t=ms(),oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Yd(){return Ze().memoizedState}function ys(e,t,n,a){var l=mt();oe.flags|=e,l.memoizedState=dl(1|t,{destroy:void 0},n,a===void 0?null:a)}function xs(e,t,n,a){var l=Ze();a=a===void 0?null:a;var s=l.memoizedState.inst;Ae!==null&&a!==null&&vr(a,Ae.memoizedState.deps)?l.memoizedState=dl(t,s,n,a):(oe.flags|=e,l.memoizedState=dl(1|t,s,n,a))}function Xd(e,t){ys(8390656,8,e,t)}function Er(e,t){xs(2048,8,e,t)}function Bm(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=ms(),oe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Gd(e){var t=Ze().memoizedState;return Bm({ref:t,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Qd(e,t){return xs(4,2,e,t)}function Zd(e,t){return xs(4,4,e,t)}function Vd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kd(e,t,n){n=n!=null?n.concat([e]):null,xs(4,4,Vd.bind(null,t,e),n)}function Ar(){}function Jd(e,t){var n=Ze();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&vr(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function $d(e,t){var n=Ze();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&vr(t,a[1]))return a[0];if(a=e(),Ma){Bt(!0);try{e()}finally{Bt(!1)}}return n.memoizedState=[a,t],a}function zr(e,t,n){return n===void 0||(Rn&1073741824)!==0&&(pe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Ff(),oe.lanes|=e,na|=e,n)}function Id(e,t,n,a){return Rt(n,t)?n:rl.current!==null?(e=zr(e,n,a),Rt(e,t)||($e=!0),e):(Rn&42)===0||(Rn&1073741824)!==0&&(pe&261930)===0?($e=!0,e.memoizedState=n):(e=Ff(),oe.lanes|=e,na|=e,t)}function Fd(e,t,n,a,l){var s=G.p;G.p=s!==0&&8>s?s:8;var d=k.T,h={};k.T=h,kr(e,!1,t,n);try{var x=l(),E=k.S;if(E!==null&&E(h,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var j=jm(x,a);Wl(e,t,j,Ut(e))}else Wl(e,t,a,Ut(e))}catch(U){Wl(e,t,{then:function(){},status:"rejected",reason:U},Ut())}finally{G.p=s,d!==null&&h.types!==null&&(d.types=h.types),k.T=d}}function qm(){}function Rr(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=Wd(e).queue;Fd(e,l,t,te,n===null?qm:function(){return Pd(e),n(a)})}function Wd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Pd(e){var t=Wd(e);t.next===null&&(t=e.alternate.memoizedState),Wl(e,t.next.queue,{},Ut())}function Mr(){return rt(gi)}function ef(){return Ze().memoizedState}function tf(){return Ze().memoizedState}function Ym(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ut();e=In(n);var a=Fn(t,e,n);a!==null&&(At(a,t,n),Kl(a,t,n)),t={cache:sr()},e.payload=t;return}t=t.return}}function Xm(e,t,n){var a=Ut();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ss(e)?af(t,n):(n=$o(e,t,n,a),n!==null&&(At(n,e,a),lf(n,t,a)))}function nf(e,t,n){var a=Ut();Wl(e,t,n,a)}function Wl(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ss(e))af(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,h=s(d,n);if(l.hasEagerState=!0,l.eagerState=h,Rt(h,d))return ts(e,t,l,0),ke===null&&es(),!1}catch{}finally{}if(n=$o(e,t,l,a),n!==null)return At(n,e,a),lf(n,t,a),!0}return!1}function kr(e,t,n,a){if(a={lane:2,revertLane:uc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ss(e)){if(t)throw Error(c(479))}else t=$o(e,n,a,2),t!==null&&At(t,e,2)}function Ss(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function af(e,t){cl=hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lf(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,zt(e,n)}}var Pl={readContext:rt,use:vs,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};Pl.useEffectEvent=qe;var sf={readContext:rt,use:vs,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Xd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ys(4194308,4,Vd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ys(4194308,4,e,t)},useInsertionEffect:function(e,t){ys(4,2,e,t)},useMemo:function(e,t){var n=mt();t=t===void 0?null:t;var a=e();if(Ma){Bt(!0);try{e()}finally{Bt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=mt();if(n!==void 0){var l=n(t);if(Ma){Bt(!0);try{n(t)}finally{Bt(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Xm.bind(null,oe,e),[a.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=Tr(e);var t=e.queue,n=nf.bind(null,oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ar,useDeferredValue:function(e,t){var n=mt();return zr(n,e,t)},useTransition:function(){var e=Tr(!1);return e=Fd.bind(null,oe,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=oe,l=mt();if(ve){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),ke===null)throw Error(c(349));(pe&127)!==0||Dd(a,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,Xd(Ad.bind(null,a,s,e),[e]),a.flags|=2048,dl(9,{destroy:void 0},Ed.bind(null,a,s,n,t),null),n},useId:function(){var e=mt(),t=ke.identifierPrefix;if(ve){var n=hn,a=pn;n=(a&~(1<<32-ft(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=gs++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=_m++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Mr,useFormState:Hd,useActionState:Hd,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=kr.bind(null,oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:wr,useCacheRefresh:function(){return mt().memoizedState=Ym.bind(null,oe)},useEffectEvent:function(e){var t=mt(),n={impl:e};return t.memoizedState=n,function(){if((Ce&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Or={readContext:rt,use:vs,useCallback:Jd,useContext:rt,useEffect:Er,useImperativeHandle:Kd,useInsertionEffect:Qd,useLayoutEffect:Zd,useMemo:$d,useReducer:bs,useRef:Yd,useState:function(){return bs(Mn)},useDebugValue:Ar,useDeferredValue:function(e,t){var n=Ze();return Id(n,Ae.memoizedState,e,t)},useTransition:function(){var e=bs(Mn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Td,useId:ef,useHostTransitionStatus:Mr,useFormState:Ld,useActionState:Ld,useOptimistic:function(e,t){var n=Ze();return Md(n,Ae,e,t)},useMemoCache:wr,useCacheRefresh:tf};Or.useEffectEvent=Gd;var of={readContext:rt,use:vs,useCallback:Jd,useContext:rt,useEffect:Er,useImperativeHandle:Kd,useInsertionEffect:Qd,useLayoutEffect:Zd,useMemo:$d,useReducer:Nr,useRef:Yd,useState:function(){return Nr(Mn)},useDebugValue:Ar,useDeferredValue:function(e,t){var n=Ze();return Ae===null?zr(n,e,t):Id(n,Ae.memoizedState,e,t)},useTransition:function(){var e=Nr(Mn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Td,useId:ef,useHostTransitionStatus:Mr,useFormState:qd,useActionState:qd,useOptimistic:function(e,t){var n=Ze();return Ae!==null?Md(n,Ae,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:wr,useCacheRefresh:tf};of.useEffectEvent=Gd;function jr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _r={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ut(),l=In(a);l.payload=t,n!=null&&(l.callback=n),t=Fn(e,l,a),t!==null&&(At(t,e,a),Kl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ut(),l=In(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Fn(e,l,a),t!==null&&(At(t,e,a),Kl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ut(),a=In(n);a.tag=2,t!=null&&(a.callback=t),t=Fn(e,a,n),t!==null&&(At(t,e,n),Kl(t,e,n))}};function rf(e,t,n,a,l,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,d):t.prototype&&t.prototype.isPureReactComponent?!Bl(n,a)||!Bl(l,s):!0}function cf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&_r.enqueueReplaceState(t,t.state,null)}function ka(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function uf(e){Pi(e)}function df(e){console.error(e)}function ff(e){Pi(e)}function ws(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function pf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ur(e,t,n){return n=In(n),n.tag=3,n.payload={element:null},n.callback=function(){ws(e,t)},n}function hf(e){return e=In(e),e.tag=3,e}function gf(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var s=a.value;e.payload=function(){return l(s)},e.callback=function(){pf(t,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){pf(t,n,a),typeof l!="function"&&(aa===null?aa=new Set([this]):aa.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function Gm(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&al(t,n,l,!0),n=kt.current,n!==null){switch(n.tag){case 31:case 13:return It===null?js():n.alternate===null&&Ye===0&&(Ye=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===cs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),oc(e,a,l)),!1;case 22:return n.flags|=65536,a===cs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),oc(e,a,l)),!1}throw Error(c(435,n.tag))}return oc(e,a,l),js(),!1}if(ve)return t=kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==tr&&(e=Error(c(422),{cause:a}),Xl(Vt(e,n)))):(a!==tr&&(t=Error(c(423),{cause:a}),Xl(Vt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Vt(a,n),l=Ur(e.stateNode,a,l),fr(e,l),Ye!==4&&(Ye=2)),!1;var s=Error(c(520),{cause:a});if(s=Vt(s,n),oi===null?oi=[s]:oi.push(s),Ye!==4&&(Ye=2),t===null)return!0;a=Vt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ur(n.stateNode,a,e),fr(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(aa===null||!aa.has(s))))return n.flags|=65536,l&=-l,n.lanes|=l,l=hf(l),gf(l,e,n,a),fr(n,l),!1}n=n.return}while(n!==null);return!1}var Hr=Error(c(461)),$e=!1;function ct(e,t,n,a){t.child=e===null?bd(t,null,n,a):Ra(t,e.child,n,a)}function mf(e,t,n,a,l){n=n.render;var s=t.ref;if("ref"in a){var d={};for(var h in a)h!=="ref"&&(d[h]=a[h])}else d=a;return Da(t),a=br(e,t,n,d,s,l),h=yr(),e!==null&&!$e?(xr(e,t,l),kn(e,t,l)):(ve&&h&&Po(t),t.flags|=1,ct(e,t,a,l),t.child)}function vf(e,t,n,a,l){if(e===null){var s=n.type;return typeof s=="function"&&!Io(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,bf(e,t,s,a,l)):(e=as(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Zr(e,l)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bl,n(d,a)&&e.ref===t.ref)return kn(e,t,l)}return t.flags|=1,e=Dn(s,a),e.ref=t.ref,e.return=t,t.child=e}function bf(e,t,n,a,l){if(e!==null){var s=e.memoizedProps;if(Bl(s,a)&&e.ref===t.ref)if($e=!1,t.pendingProps=a=s,Zr(e,l))(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,kn(e,t,l)}return Lr(e,t,n,a,l)}function yf(e,t,n,a){var l=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~s}else a=0,t.child=null;return xf(e,t,s,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&os(t,s!==null?s.cachePool:null),s!==null?Sd(t,s):hr(),wd(t);else return a=t.lanes=536870912,xf(e,t,s!==null?s.baseLanes|n:n,n,a)}else s!==null?(os(t,s.cachePool),Sd(t,s),Pn(),t.memoizedState=null):(e!==null&&os(t,null),hr(),Pn());return ct(e,t,l,n),t.child}function ei(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function xf(e,t,n,a,l){var s=rr();return s=s===null?null:{parent:Ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&os(t,null),hr(),wd(t),e!==null&&al(e,t,a,!0),t.childLanes=l,null}function Cs(e,t){return t=Ts({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Sf(e,t,n){return Ra(t,e.child,null,n),e=Cs(t,t.pendingProps),e.flags|=2,Ot(t),t.memoizedState=null,e}function Qm(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(a.mode==="hidden")return e=Cs(t,a),t.lanes=536870912,ei(null,e);if(mr(t),(e=je)?(e=Op(e,$t),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Zn!==null?{id:pn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},n=ad(e),n.return=t,t.child=n,ot=t,je=null)):e=null,e===null)throw Kn(t);return t.lanes=536870912,null}return Cs(t,a)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(mr(t),l)if(t.flags&256)t.flags&=-257,t=Sf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if($e||al(e,t,n,!1),l=(n&e.childLanes)!==0,$e||l){if(a=ke,a!==null&&(d=Yt(a,n),d!==0&&d!==s.retryLane))throw s.retryLane=d,wa(e,d),At(a,e,d),Hr;js(),t=Sf(e,t,n)}else e=s.treeContext,je=Ft(d.nextSibling),ot=t,ve=!0,Vn=null,$t=!1,e!==null&&sd(t,e),t=Cs(t,a),t.flags|=4096;return t}return e=Dn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ns(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Lr(e,t,n,a,l){return Da(t),n=br(e,t,n,a,void 0,l),a=yr(),e!==null&&!$e?(xr(e,t,l),kn(e,t,l)):(ve&&a&&Po(t),t.flags|=1,ct(e,t,n,l),t.child)}function wf(e,t,n,a,l,s){return Da(t),t.updateQueue=null,n=Nd(t,a,n,l),Cd(e),a=yr(),e!==null&&!$e?(xr(e,t,s),kn(e,t,s)):(ve&&a&&Po(t),t.flags|=1,ct(e,t,n,s),t.child)}function Cf(e,t,n,a,l){if(Da(t),t.stateNode===null){var s=Pa,d=n.contextType;typeof d=="object"&&d!==null&&(s=rt(d)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=_r,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},ur(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?rt(d):Pa,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(jr(t,n,d,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&_r.enqueueReplaceState(s,s.state,null),$l(t,a,s,l),Jl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var h=t.memoizedProps,x=ka(n,h);s.props=x;var E=s.context,j=n.contextType;d=Pa,typeof j=="object"&&j!==null&&(d=rt(j));var U=n.getDerivedStateFromProps;j=typeof U=="function"||typeof s.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,j||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h||E!==d)&&cf(t,s,a,d),$n=!1;var z=t.memoizedState;s.state=z,$l(t,a,s,l),Jl(),E=t.memoizedState,h||z!==E||$n?(typeof U=="function"&&(jr(t,n,U,a),E=t.memoizedState),(x=$n||rf(t,n,x,a,z,E,d))?(j||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=E),s.props=a,s.state=E,s.context=d,a=x):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,dr(e,t),d=t.memoizedProps,j=ka(n,d),s.props=j,U=t.pendingProps,z=s.context,E=n.contextType,x=Pa,typeof E=="object"&&E!==null&&(x=rt(E)),h=n.getDerivedStateFromProps,(E=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==U||z!==x)&&cf(t,s,a,x),$n=!1,z=t.memoizedState,s.state=z,$l(t,a,s,l),Jl();var M=t.memoizedState;d!==U||z!==M||$n||e!==null&&e.dependencies!==null&&is(e.dependencies)?(typeof h=="function"&&(jr(t,n,h,a),M=t.memoizedState),(j=$n||rf(t,n,j,a,z,M,x)||e!==null&&e.dependencies!==null&&is(e.dependencies))?(E||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,M,x),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,M,x)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=M),s.props=a,s.state=M,s.context=x,a=j):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,Ns(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=Ra(t,e.child,null,l),t.child=Ra(t,null,n,l)):ct(e,t,n,l),t.memoizedState=s.state,e=t.child):e=kn(e,t,l),e}function Nf(e,t,n,a){return Na(),t.flags|=256,ct(e,t,n,a),t.child}var Br={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qr(e){return{baseLanes:e,cachePool:fd()}}function Yr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=_t),e}function Tf(e,t,n){var a=t.pendingProps,l=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),d&&(l=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(l?Wn(t):Pn(),(e=je)?(e=Op(e,$t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Zn!==null?{id:pn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},n=ad(e),n.return=t,t.child=n,ot=t,je=null)):e=null,e===null)throw Kn(t);return Cc(e)?t.lanes=32:t.lanes=536870912,null}var h=a.children;return a=a.fallback,l?(Pn(),l=t.mode,h=Ts({mode:"hidden",children:h},l),a=Ca(a,l,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,a=t.child,a.memoizedState=qr(n),a.childLanes=Yr(e,d,n),t.memoizedState=Br,ei(null,a)):(Wn(t),Xr(t,h))}var x=e.memoizedState;if(x!==null&&(h=x.dehydrated,h!==null)){if(s)t.flags&256?(Wn(t),t.flags&=-257,t=Gr(e,t,n)):t.memoizedState!==null?(Pn(),t.child=e.child,t.flags|=128,t=null):(Pn(),h=a.fallback,l=t.mode,a=Ts({mode:"visible",children:a.children},l),h=Ca(h,l,n,null),h.flags|=2,a.return=t,h.return=t,a.sibling=h,t.child=a,Ra(t,e.child,null,n),a=t.child,a.memoizedState=qr(n),a.childLanes=Yr(e,d,n),t.memoizedState=Br,t=ei(null,a));else if(Wn(t),Cc(h)){if(d=h.nextSibling&&h.nextSibling.dataset,d)var E=d.dgst;d=E,a=Error(c(419)),a.stack="",a.digest=d,Xl({value:a,source:null,stack:null}),t=Gr(e,t,n)}else if($e||al(e,t,n,!1),d=(n&e.childLanes)!==0,$e||d){if(d=ke,d!==null&&(a=Yt(d,n),a!==0&&a!==x.retryLane))throw x.retryLane=a,wa(e,a),At(d,e,a),Hr;wc(h)||js(),t=Gr(e,t,n)}else wc(h)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,je=Ft(h.nextSibling),ot=t,ve=!0,Vn=null,$t=!1,e!==null&&sd(t,e),t=Xr(t,a.children),t.flags|=4096);return t}return l?(Pn(),h=a.fallback,l=t.mode,x=e.child,E=x.sibling,a=Dn(x,{mode:"hidden",children:a.children}),a.subtreeFlags=x.subtreeFlags&65011712,E!==null?h=Dn(E,h):(h=Ca(h,l,n,null),h.flags|=2),h.return=t,a.return=t,a.sibling=h,t.child=a,ei(null,a),a=t.child,h=e.child.memoizedState,h===null?h=qr(n):(l=h.cachePool,l!==null?(x=Ke._currentValue,l=l.parent!==x?{parent:x,pool:x}:l):l=fd(),h={baseLanes:h.baseLanes|n,cachePool:l}),a.memoizedState=h,a.childLanes=Yr(e,d,n),t.memoizedState=Br,ei(e.child,a)):(Wn(t),n=e.child,e=n.sibling,n=Dn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Xr(e,t){return t=Ts({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ts(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function Gr(e,t,n){return Ra(t,e.child,null,n),e=Xr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Df(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),lr(e.return,t,n)}function Qr(e,t,n,a,l,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=n,d.tailMode=l,d.treeForkCount=s)}function Ef(e,t,n){var a=t.pendingProps,l=a.revealOrder,s=a.tail;a=a.children;var d=Qe.current,h=(d&2)!==0;if(h?(d=d&1|2,t.flags|=128):d&=1,Z(Qe,d),ct(e,t,a,n),a=ve?Yl:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Df(e,n,t);else if(e.tag===19)Df(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ps(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Qr(t,!1,l,n,s,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ps(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Qr(t,!0,n,null,s,a);break;case"together":Qr(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function kn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),na|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(al(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&is(e)))}function Zm(e,t,n){switch(t.tag){case 3:He(t,t.stateNode.containerInfo),Jn(t,Ke,e.memoizedState.cache),Na();break;case 27:case 5:be(t);break;case 4:He(t,t.stateNode.containerInfo);break;case 10:Jn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mr(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Wn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Tf(e,t,n):(Wn(t),e=kn(e,t,n),e!==null?e.sibling:null);Wn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(al(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Ef(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Z(Qe,Qe.current),a)break;return null;case 22:return t.lanes=0,yf(e,t,n,t.pendingProps);case 24:Jn(t,Ke,e.memoizedState.cache)}return kn(e,t,n)}function Af(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)$e=!0;else{if(!Zr(e,n)&&(t.flags&128)===0)return $e=!1,Zm(e,t,n);$e=(e.flags&131072)!==0}else $e=!1,ve&&(t.flags&1048576)!==0&&id(t,Yl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e=="function")Io(e)?(a=ka(e,a),t.tag=1,t=Cf(null,t,e,a,n)):(t.tag=0,t=Lr(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===Q){t.tag=11,t=mf(null,t,e,a,n);break e}else if(l===q){t.tag=14,t=vf(null,t,e,a,n);break e}}throw t=Ve(e)||e,Error(c(306,t,""))}}return t;case 0:return Lr(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=ka(a,t.pendingProps),Cf(e,t,a,l,n);case 3:e:{if(He(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var s=t.memoizedState;l=s.element,dr(e,t),$l(t,a,null,n);var d=t.memoizedState;if(a=d.cache,Jn(t,Ke,a),a!==s.cache&&ir(t,[Ke],n,!0),Jl(),a=d.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Nf(e,t,a,n);break e}else if(a!==l){l=Vt(Error(c(424)),t),Xl(l),t=Nf(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=Ft(e.firstChild),ot=t,ve=!0,Vn=null,$t=!0,n=bd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Na(),a===l){t=kn(e,t,n);break e}ct(e,t,a,n)}t=t.child}return t;case 26:return Ns(e,t),e===null?(n=Bp(t.type,null,t.pendingProps,null))?t.memoizedState=n:ve||(n=t.type,e=t.pendingProps,a=Ys(ae.current).createElement(n),a[st]=t,a[wt]=e,ut(a,n,e),tt(a),t.stateNode=a):t.memoizedState=Bp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&ve&&(a=t.stateNode=Up(t.type,t.pendingProps,ae.current),ot=t,$t=!0,l=je,oa(t.type)?(Nc=l,je=Ft(a.firstChild)):je=l),ct(e,t,t.pendingProps.children,n),Ns(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((l=a=je)&&(a=S0(a,t.type,t.pendingProps,$t),a!==null?(t.stateNode=a,ot=t,je=Ft(a.firstChild),$t=!1,l=!0):l=!1),l||Kn(t)),be(t),l=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,a=s.children,yc(l,s)?a=null:d!==null&&yc(l,d)&&(t.flags|=32),t.memoizedState!==null&&(l=br(e,t,Um,null,null,n),gi._currentValue=l),Ns(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&ve&&((e=n=je)&&(n=w0(n,t.pendingProps,$t),n!==null?(t.stateNode=n,ot=t,je=null,e=!0):e=!1),e||Kn(t)),null;case 13:return Tf(e,t,n);case 4:return He(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ra(t,null,a,n):ct(e,t,a,n),t.child;case 11:return mf(e,t,t.type,t.pendingProps,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Jn(t,t.type,a.value),ct(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Da(t),l=rt(l),a=a(l),t.flags|=1,ct(e,t,a,n),t.child;case 14:return vf(e,t,t.type,t.pendingProps,n);case 15:return bf(e,t,t.type,t.pendingProps,n);case 19:return Ef(e,t,n);case 31:return Qm(e,t,n);case 22:return yf(e,t,n,t.pendingProps);case 24:return Da(t),a=rt(Ke),e===null?(l=rr(),l===null&&(l=ke,s=sr(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=n),l=s),t.memoizedState={parent:a,cache:l},ur(t),Jn(t,Ke,l)):((e.lanes&n)!==0&&(dr(e,t),$l(t,null,null,n),Jl()),l=e.memoizedState,s=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Jn(t,Ke,a)):(a=s.cache,Jn(t,Ke,a),a!==l.cache&&ir(t,[Ke],n,!0))),ct(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function On(e){e.flags|=4}function Vr(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(tp())e.flags|=8192;else throw za=cs,cr}else e.flags&=-16777217}function zf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qp(t))if(tp())e.flags|=8192;else throw za=cs,cr}function Ds(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?pt():536870912,e.lanes|=t,gl|=t)}function ti(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Vm(e,t,n){var a=t.pendingProps;switch(er(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),zn(Ke),we(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(nl(t)?On(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,nr())),_e(t),null;case 26:var l=t.type,s=t.memoizedState;return e===null?(On(t),s!==null?(_e(t),zf(t,s)):(_e(t),Vr(t,l,null,a,n))):s?s!==e.memoizedState?(On(t),_e(t),zf(t,s)):(_e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&On(t),_e(t),Vr(t,l,e,a,n)),null;case 27:if(cn(t),n=ae.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&On(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return _e(t),null}e=I.current,nl(t)?od(t):(e=Up(l,a,n),t.stateNode=e,On(t))}return _e(t),null;case 5:if(cn(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&On(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return _e(t),null}if(s=I.current,nl(t))od(t);else{var d=Ys(ae.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?d.createElement("select",{is:a.is}):d.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?d.createElement(l,{is:a.is}):d.createElement(l)}}s[st]=t,s[wt]=a;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(ut(s,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&On(t)}}return _e(t),Vr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&On(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=ae.current,nl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=ot,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Tp(e.nodeValue,n)),e||Kn(t,!0)}else e=Ys(e).createTextNode(a),e[st]=t,t.stateNode=e}return _e(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=nl(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[st]=t}else Na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),e=!1}else n=nr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ot(t),t):(Ot(t),null);if((t.flags&128)!==0)throw Error(c(558))}return _e(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=nl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[st]=t}else Na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),l=!1}else l=nr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Ot(t),t):(Ot(t),null)}return Ot(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ds(t,t.updateQueue),_e(t),null);case 4:return we(),e===null&&hc(t.stateNode.containerInfo),_e(t),null;case 10:return zn(t.type),_e(t),null;case 19:if(O(Qe),a=t.memoizedState,a===null)return _e(t),null;if(l=(t.flags&128)!==0,s=a.rendering,s===null)if(l)ti(a,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ps(e),s!==null){for(t.flags|=128,ti(a,!1),e=s.updateQueue,t.updateQueue=e,Ds(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)nd(n,e),n=n.sibling;return Z(Qe,Qe.current&1|2),ve&&En(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&dt()>Ms&&(t.flags|=128,l=!0,ti(a,!1),t.lanes=4194304)}else{if(!l)if(e=ps(s),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ds(t,e),ti(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!ve)return _e(t),null}else 2*dt()-a.renderingStartTime>Ms&&n!==536870912&&(t.flags|=128,l=!0,ti(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=dt(),e.sibling=null,n=Qe.current,Z(Qe,l?n&1|2:n&1),ve&&En(t,a.treeForkCount),e):(_e(t),null);case 22:case 23:return Ot(t),gr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),n=t.updateQueue,n!==null&&Ds(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&O(Ea),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),zn(Ke),_e(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Km(e,t){switch(er(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(Ke),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return cn(t),null;case 31:if(t.memoizedState!==null){if(Ot(t),t.alternate===null)throw Error(c(340));Na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Qe),null;case 4:return we(),null;case 10:return zn(t.type),null;case 22:case 23:return Ot(t),gr(),e!==null&&O(Ea),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return zn(Ke),null;case 25:return null;default:return null}}function Rf(e,t){switch(er(t),t.tag){case 3:zn(Ke),we();break;case 26:case 27:case 5:cn(t);break;case 4:we();break;case 31:t.memoizedState!==null&&Ot(t);break;case 13:Ot(t);break;case 19:O(Qe);break;case 10:zn(t.type);break;case 22:case 23:Ot(t),gr(),e!==null&&O(Ea);break;case 24:zn(Ke)}}function ni(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var s=n.create,d=n.inst;a=s(),d.destroy=a}n=n.next}while(n!==l)}}catch(h){De(t,t.return,h)}}function ea(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var s=l.next;a=s;do{if((a.tag&e)===e){var d=a.inst,h=d.destroy;if(h!==void 0){d.destroy=void 0,l=t;var x=n,E=h;try{E()}catch(j){De(l,x,j)}}}a=a.next}while(a!==s)}}catch(j){De(t,t.return,j)}}function Mf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{xd(t,n)}catch(a){De(e,e.return,a)}}}function kf(e,t,n){n.props=ka(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){De(e,t,a)}}function ai(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){De(e,t,l)}}function gn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){De(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){De(e,t,l)}else n.current=null}function Of(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){De(e,e.return,l)}}function Kr(e,t,n){try{var a=e.stateNode;g0(a,e.type,n,t),a[wt]=t}catch(l){De(e,e.return,l)}}function jf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&oa(e.type)||e.tag===4}function Jr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $r(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nn));else if(a!==4&&(a===27&&oa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($r(e,t,n),e=e.sibling;e!==null;)$r(e,t,n),e=e.sibling}function Es(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&oa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}function _f(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ut(t,a,n),t[st]=e,t[wt]=n}catch(s){De(e,e.return,s)}}var jn=!1,Ie=!1,Ir=!1,Uf=typeof WeakSet=="function"?WeakSet:Set,nt=null;function Jm(e,t){if(e=e.containerInfo,vc=Js,e=Ku(e),Go(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,h=-1,x=-1,E=0,j=0,U=e,z=null;t:for(;;){for(var M;U!==n||l!==0&&U.nodeType!==3||(h=d+l),U!==s||a!==0&&U.nodeType!==3||(x=d+a),U.nodeType===3&&(d+=U.nodeValue.length),(M=U.firstChild)!==null;)z=U,U=M;for(;;){if(U===e)break t;if(z===n&&++E===l&&(h=d),z===s&&++j===a&&(x=d),(M=U.nextSibling)!==null)break;U=z,z=U.parentNode}U=M}n=h===-1||x===-1?null:{start:h,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(bc={focusedElem:e,selectionRange:n},Js=!1,nt=t;nt!==null;)if(t=nt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,nt=e;else for(;nt!==null;){switch(t=nt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,l=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var F=ka(n.type,l);e=a.getSnapshotBeforeUpdate(F,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(ne){De(n,n.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Sc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,nt=e;break}nt=t.return}}function Hf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Un(e,n),a&4&&ni(5,n);break;case 1:if(Un(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){De(n,n.return,d)}else{var l=ka(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){De(n,n.return,d)}}a&64&&Mf(n),a&512&&ai(n,n.return);break;case 3:if(Un(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{xd(e,t)}catch(d){De(n,n.return,d)}}break;case 27:t===null&&a&4&&_f(n);case 26:case 5:Un(e,n),t===null&&a&4&&Of(n),a&512&&ai(n,n.return);break;case 12:Un(e,n);break;case 31:Un(e,n),a&4&&qf(e,n);break;case 13:Un(e,n),a&4&&Yf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=a0.bind(null,n),C0(e,n))));break;case 22:if(a=n.memoizedState!==null||jn,!a){t=t!==null&&t.memoizedState!==null||Ie,l=jn;var s=Ie;jn=a,(Ie=t)&&!s?Hn(e,n,(n.subtreeFlags&8772)!==0):Un(e,n),jn=l,Ie=s}break;case 30:break;default:Un(e,n)}}function Lf(e){var t=e.alternate;t!==null&&(e.alternate=null,Lf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Do(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,Nt=!1;function _n(e,t,n){for(n=n.child;n!==null;)Bf(e,t,n),n=n.sibling}function Bf(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(va,n)}catch{}switch(n.tag){case 26:Ie||gn(n,t),_n(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ie||gn(n,t);var a=Le,l=Nt;oa(n.type)&&(Le=n.stateNode,Nt=!1),_n(e,t,n),fi(n.stateNode),Le=a,Nt=l;break;case 5:Ie||gn(n,t);case 6:if(a=Le,l=Nt,Le=null,_n(e,t,n),Le=a,Nt=l,Le!==null)if(Nt)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(n.stateNode)}catch(s){De(n,t,s)}else try{Le.removeChild(n.stateNode)}catch(s){De(n,t,s)}break;case 18:Le!==null&&(Nt?(e=Le,Mp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Cl(e)):Mp(Le,n.stateNode));break;case 4:a=Le,l=Nt,Le=n.stateNode.containerInfo,Nt=!0,_n(e,t,n),Le=a,Nt=l;break;case 0:case 11:case 14:case 15:ea(2,n,t),Ie||ea(4,n,t),_n(e,t,n);break;case 1:Ie||(gn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&kf(n,t,a)),_n(e,t,n);break;case 21:_n(e,t,n);break;case 22:Ie=(a=Ie)||n.memoizedState!==null,_n(e,t,n),Ie=a;break;default:_n(e,t,n)}}function qf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cl(e)}catch(n){De(t,t.return,n)}}}function Yf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(n){De(t,t.return,n)}}function $m(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Uf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Uf),t;default:throw Error(c(435,e.tag))}}function As(e,t){var n=$m(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=l0.bind(null,e,a);a.then(l,l)}})}function Tt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],s=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 27:if(oa(h.type)){Le=h.stateNode,Nt=!1;break e}break;case 5:Le=h.stateNode,Nt=!1;break e;case 3:case 4:Le=h.stateNode.containerInfo,Nt=!0;break e}h=h.return}if(Le===null)throw Error(c(160));Bf(s,d,l),Le=null,Nt=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Xf(t,e),t=t.sibling}var ln=null;function Xf(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tt(t,e),Dt(e),a&4&&(ea(3,e,e.return),ni(3,e),ea(5,e,e.return));break;case 1:Tt(t,e),Dt(e),a&512&&(Ie||n===null||gn(n,n.return)),a&64&&jn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=ln;if(Tt(t,e),Dt(e),a&512&&(Ie||n===null||gn(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Rl]||s[st]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(a),l.head.insertBefore(s,l.querySelector("head > title"))),ut(s,a,n),s[st]=e,tt(s),a=s;break e;case"link":var d=Xp("link","href",l).get(a+(n.href||""));if(d){for(var h=0;h<d.length;h++)if(s=d[h],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(h,1);break t}}s=l.createElement(a),ut(s,a,n),l.head.appendChild(s);break;case"meta":if(d=Xp("meta","content",l).get(a+(n.content||""))){for(h=0;h<d.length;h++)if(s=d[h],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(h,1);break t}}s=l.createElement(a),ut(s,a,n),l.head.appendChild(s);break;default:throw Error(c(468,a))}s[st]=e,tt(s),a=s}e.stateNode=a}else Gp(l,e.type,e.stateNode);else e.stateNode=Yp(l,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?Gp(l,e.type,e.stateNode):Yp(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Kr(e,e.memoizedProps,n.memoizedProps)}break;case 27:Tt(t,e),Dt(e),a&512&&(Ie||n===null||gn(n,n.return)),n!==null&&a&4&&Kr(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Tt(t,e),Dt(e),a&512&&(Ie||n===null||gn(n,n.return)),e.flags&32){l=e.stateNode;try{Va(l,"")}catch(F){De(e,e.return,F)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Kr(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Ir=!0);break;case 6:if(Tt(t,e),Dt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(F){De(e,e.return,F)}}break;case 3:if(Qs=null,l=ln,ln=Xs(t.containerInfo),Tt(t,e),ln=l,Dt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Cl(t.containerInfo)}catch(F){De(e,e.return,F)}Ir&&(Ir=!1,Gf(e));break;case 4:a=ln,ln=Xs(e.stateNode.containerInfo),Tt(t,e),Dt(e),ln=a;break;case 12:Tt(t,e),Dt(e);break;case 31:Tt(t,e),Dt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,As(e,a)));break;case 13:Tt(t,e),Dt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Rs=dt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,As(e,a)));break;case 22:l=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,E=jn,j=Ie;if(jn=E||l,Ie=j||x,Tt(t,e),Ie=j,jn=E,Dt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||x||jn||Ie||Oa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){x=n=t;try{if(s=x.stateNode,l)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{h=x.stateNode;var U=x.memoizedProps.style,z=U!=null&&U.hasOwnProperty("display")?U.display:null;h.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(F){De(x,x.return,F)}}}else if(t.tag===6){if(n===null){x=t;try{x.stateNode.nodeValue=l?"":x.memoizedProps}catch(F){De(x,x.return,F)}}}else if(t.tag===18){if(n===null){x=t;try{var M=x.stateNode;l?kp(M,!0):kp(x.stateNode,!1)}catch(F){De(x,x.return,F)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,As(e,n))));break;case 19:Tt(t,e),Dt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,As(e,a)));break;case 30:break;case 21:break;default:Tt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(jf(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,s=Jr(e);Es(e,s,l);break;case 5:var d=n.stateNode;n.flags&32&&(Va(d,""),n.flags&=-33);var h=Jr(e);Es(e,h,d);break;case 3:case 4:var x=n.stateNode.containerInfo,E=Jr(e);$r(e,E,x);break;default:throw Error(c(161))}}catch(j){De(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Gf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Un(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Hf(e,t.alternate,t),t=t.sibling}function Oa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ea(4,t,t.return),Oa(t);break;case 1:gn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&kf(t,t.return,n),Oa(t);break;case 27:fi(t.stateNode);case 26:case 5:gn(t,t.return),Oa(t);break;case 22:t.memoizedState===null&&Oa(t);break;case 30:Oa(t);break;default:Oa(t)}e=e.sibling}}function Hn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:Hn(l,s,n),ni(4,s);break;case 1:if(Hn(l,s,n),a=s,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(E){De(a,a.return,E)}if(a=s,l=a.updateQueue,l!==null){var h=a.stateNode;try{var x=l.shared.hiddenCallbacks;if(x!==null)for(l.shared.hiddenCallbacks=null,l=0;l<x.length;l++)yd(x[l],h)}catch(E){De(a,a.return,E)}}n&&d&64&&Mf(s),ai(s,s.return);break;case 27:_f(s);case 26:case 5:Hn(l,s,n),n&&a===null&&d&4&&Of(s),ai(s,s.return);break;case 12:Hn(l,s,n);break;case 31:Hn(l,s,n),n&&d&4&&qf(l,s);break;case 13:Hn(l,s,n),n&&d&4&&Yf(l,s);break;case 22:s.memoizedState===null&&Hn(l,s,n),ai(s,s.return);break;case 30:break;default:Hn(l,s,n)}t=t.sibling}}function Fr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Gl(n))}function Wr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gl(e))}function sn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qf(e,t,n,a),t=t.sibling}function Qf(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:sn(e,t,n,a),l&2048&&ni(9,t);break;case 1:sn(e,t,n,a);break;case 3:sn(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gl(e)));break;case 12:if(l&2048){sn(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,h=s.onPostCommit;typeof h=="function"&&h(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){De(t,t.return,x)}}else sn(e,t,n,a);break;case 31:sn(e,t,n,a);break;case 13:sn(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?sn(e,t,n,a):li(e,t):s._visibility&2?sn(e,t,n,a):(s._visibility|=2,fl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Fr(d,t);break;case 24:sn(e,t,n,a),l&2048&&Wr(t.alternate,t);break;default:sn(e,t,n,a)}}function fl(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,h=n,x=a,E=d.flags;switch(d.tag){case 0:case 11:case 15:fl(s,d,h,x,l),ni(8,d);break;case 23:break;case 22:var j=d.stateNode;d.memoizedState!==null?j._visibility&2?fl(s,d,h,x,l):li(s,d):(j._visibility|=2,fl(s,d,h,x,l)),l&&E&2048&&Fr(d.alternate,d);break;case 24:fl(s,d,h,x,l),l&&E&2048&&Wr(d.alternate,d);break;default:fl(s,d,h,x,l)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:li(n,a),l&2048&&Fr(a.alternate,a);break;case 24:li(n,a),l&2048&&Wr(a.alternate,a);break;default:li(n,a)}t=t.sibling}}var ii=8192;function pl(e,t,n){if(e.subtreeFlags&ii)for(e=e.child;e!==null;)Zf(e,t,n),e=e.sibling}function Zf(e,t,n){switch(e.tag){case 26:pl(e,t,n),e.flags&ii&&e.memoizedState!==null&&_0(n,ln,e.memoizedState,e.memoizedProps);break;case 5:pl(e,t,n);break;case 3:case 4:var a=ln;ln=Xs(e.stateNode.containerInfo),pl(e,t,n),ln=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ii,ii=16777216,pl(e,t,n),ii=a):pl(e,t,n));break;default:pl(e,t,n)}}function Vf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function si(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];nt=a,Jf(a,e)}Vf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kf(e),e=e.sibling}function Kf(e){switch(e.tag){case 0:case 11:case 15:si(e),e.flags&2048&&ea(9,e,e.return);break;case 3:si(e);break;case 12:si(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zs(e)):si(e);break;default:si(e)}}function zs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];nt=a,Jf(a,e)}Vf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ea(8,t,t.return),zs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zs(t));break;default:zs(t)}e=e.sibling}}function Jf(e,t){for(;nt!==null;){var n=nt;switch(n.tag){case 0:case 11:case 15:ea(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Gl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,nt=a;else e:for(n=e;nt!==null;){a=nt;var l=a.sibling,s=a.return;if(Lf(a),a===n){nt=null;break e}if(l!==null){l.return=s,nt=l;break e}nt=s}}}var Im={getCacheForType:function(e){var t=rt(Ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rt(Ke).controller.signal}},Fm=typeof WeakMap=="function"?WeakMap:Map,Ce=0,ke=null,de=null,pe=0,Te=0,jt=null,ta=!1,hl=!1,Pr=!1,Ln=0,Ye=0,na=0,ja=0,ec=0,_t=0,gl=0,oi=null,Et=null,tc=!1,Rs=0,$f=0,Ms=1/0,ks=null,aa=null,We=0,la=null,ml=null,Bn=0,nc=0,ac=null,If=null,ri=0,lc=null;function Ut(){return(Ce&2)!==0&&pe!==0?pe&-pe:k.T!==null?uc():nn()}function Ff(){if(_t===0)if((pe&536870912)===0||ve){var e=Ba;Ba<<=1,(Ba&3932160)===0&&(Ba=262144),_t=e}else _t=536870912;return e=kt.current,e!==null&&(e.flags|=32),_t}function At(e,t,n){(e===ke&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(vl(e,0),ia(e,pe,_t,!1)),qt(e,n),((Ce&2)===0||e!==ke)&&(e===ke&&((Ce&2)===0&&(ja|=n),Ye===4&&ia(e,pe,_t,!1)),mn(e))}function Wf(e,t,n){if((Ce&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||yt(e,t),l=a?e0(e,t):sc(e,t,!0),s=a;do{if(l===0){hl&&!a&&ia(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Wm(n)){l=sc(e,t,!1),s=!1;continue}if(l===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var h=e;l=oi;var x=h.current.memoizedState.isDehydrated;if(x&&(vl(h,d).flags|=256),d=sc(h,d,!1),d!==2){if(Pr&&!x){h.errorRecoveryDisabledLanes|=s,ja|=s,l=4;break e}s=Et,Et=l,s!==null&&(Et===null?Et=s:Et.push.apply(Et,s))}l=d}if(s=!1,l!==2)continue}}if(l===1){vl(e,0),ia(e,t,0,!0);break}e:{switch(a=e,s=l,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ia(a,t,_t,!ta);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Rs+300-dt(),10<l)){if(ia(a,t,_t,!ta),et(a,0,!0)!==0)break e;Bn=t,a.timeoutHandle=zp(Pf.bind(null,a,n,Et,ks,tc,t,_t,ja,gl,ta,s,"Throttled",-0,0),l);break e}Pf(a,n,Et,ks,tc,t,_t,ja,gl,ta,s,null,-0,0)}}break}while(!0);mn(e)}function Pf(e,t,n,a,l,s,d,h,x,E,j,U,z,M){if(e.timeoutHandle=-1,U=t.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nn},Zf(t,s,U);var F=(s&62914560)===s?Rs-dt():(s&4194048)===s?$f-dt():0;if(F=U0(U,F),F!==null){Bn=s,e.cancelPendingCommit=F(op.bind(null,e,t,s,n,a,l,d,h,x,j,U,null,z,M)),ia(e,s,d,!E);return}}op(e,t,s,n,a,l,d,h,x)}function Wm(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],s=l.getSnapshot;l=l.value;try{if(!Rt(s(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ia(e,t,n,a){t&=~ec,t&=~ja,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var s=31-ft(l),d=1<<s;a[s]=-1,l&=~d}n!==0&&tn(e,n,t)}function Os(){return(Ce&6)===0?(ci(0),!1):!0}function ic(){if(de!==null){if(Te===0)var e=de.return;else e=de,An=Ta=null,Sr(e),ol=null,Zl=0,e=de;for(;e!==null;)Rf(e.alternate,e),e=e.return;de=null}}function vl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,b0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Bn=0,ic(),ke=e,de=n=Dn(e.current,null),pe=t,Te=0,jt=null,ta=!1,hl=yt(e,t),Pr=!1,gl=_t=ec=ja=na=Ye=0,Et=oi=null,tc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-ft(a),s=1<<l;t|=e[l],a&=~s}return Ln=t,es(),n}function ep(e,t){oe=null,k.H=Pl,t===sl||t===rs?(t=gd(),Te=3):t===cr?(t=gd(),Te=4):Te=t===Hr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,de===null&&(Ye=1,ws(e,Vt(t,e.current)))}function tp(){var e=kt.current;return e===null?!0:(pe&4194048)===pe?It===null:(pe&62914560)===pe||(pe&536870912)!==0?e===It:!1}function np(){var e=k.H;return k.H=Pl,e===null?Pl:e}function ap(){var e=k.A;return k.A=Im,e}function js(){Ye=4,ta||(pe&4194048)!==pe&&kt.current!==null||(hl=!0),(na&134217727)===0&&(ja&134217727)===0||ke===null||ia(ke,pe,_t,!1)}function sc(e,t,n){var a=Ce;Ce|=2;var l=np(),s=ap();(ke!==e||pe!==t)&&(ks=null,vl(e,t)),t=!1;var d=Ye;e:do try{if(Te!==0&&de!==null){var h=de,x=jt;switch(Te){case 8:ic(),d=6;break e;case 3:case 2:case 9:case 6:kt.current===null&&(t=!0);var E=Te;if(Te=0,jt=null,bl(e,h,x,E),n&&hl){d=0;break e}break;default:E=Te,Te=0,jt=null,bl(e,h,x,E)}}Pm(),d=Ye;break}catch(j){ep(e,j)}while(!0);return t&&e.shellSuspendCounter++,An=Ta=null,Ce=a,k.H=l,k.A=s,de===null&&(ke=null,pe=0,es()),d}function Pm(){for(;de!==null;)lp(de)}function e0(e,t){var n=Ce;Ce|=2;var a=np(),l=ap();ke!==e||pe!==t?(ks=null,Ms=dt()+500,vl(e,t)):hl=yt(e,t);e:do try{if(Te!==0&&de!==null){t=de;var s=jt;t:switch(Te){case 1:Te=0,jt=null,bl(e,t,s,1);break;case 2:case 9:if(pd(s)){Te=0,jt=null,ip(t);break}t=function(){Te!==2&&Te!==9||ke!==e||(Te=7),mn(e)},s.then(t,t);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:pd(s)?(Te=0,jt=null,ip(t)):(Te=0,jt=null,bl(e,t,s,7));break;case 5:var d=null;switch(de.tag){case 26:d=de.memoizedState;case 5:case 27:var h=de;if(d?Qp(d):h.stateNode.complete){Te=0,jt=null;var x=h.sibling;if(x!==null)de=x;else{var E=h.return;E!==null?(de=E,_s(E)):de=null}break t}}Te=0,jt=null,bl(e,t,s,5);break;case 6:Te=0,jt=null,bl(e,t,s,6);break;case 8:ic(),Ye=6;break e;default:throw Error(c(462))}}t0();break}catch(j){ep(e,j)}while(!0);return An=Ta=null,k.H=a,k.A=l,Ce=n,de!==null?0:(ke=null,pe=0,es(),Ye)}function t0(){for(;de!==null&&!Ha();)lp(de)}function lp(e){var t=Af(e.alternate,e,Ln);e.memoizedProps=e.pendingProps,t===null?_s(e):de=t}function ip(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=wf(n,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=wf(n,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:Sr(t);default:Rf(n,t),t=de=nd(t,Ln),t=Af(n,t,Ln)}e.memoizedProps=e.pendingProps,t===null?_s(e):de=t}function bl(e,t,n,a){An=Ta=null,Sr(t),ol=null,Zl=0;var l=t.return;try{if(Gm(e,l,t,n,pe)){Ye=1,ws(e,Vt(n,e.current)),de=null;return}}catch(s){if(l!==null)throw de=l,s;Ye=1,ws(e,Vt(n,e.current)),de=null;return}t.flags&32768?(ve||a===1?e=!0:hl||(pe&536870912)!==0?e=!1:(ta=e=!0,(a===2||a===9||a===3||a===6)&&(a=kt.current,a!==null&&a.tag===13&&(a.flags|=16384))),sp(t,e)):_s(t)}function _s(e){var t=e;do{if((t.flags&32768)!==0){sp(t,ta);return}e=t.return;var n=Vm(t.alternate,t,Ln);if(n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Ye===0&&(Ye=5)}function sp(e,t){do{var n=Km(e.alternate,e);if(n!==null){n.flags&=32767,de=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=n}while(e!==null);Ye=6,de=null}function op(e,t,n,a,l,s,d,h,x){e.cancelPendingCommit=null;do Us();while(We!==0);if((Ce&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=Jo,Fe(e,n,s,d,h,x),e===ke&&(de=ke=null,pe=0),ml=t,la=e,Bn=n,nc=s,ac=l,If=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,i0(en,function(){return fp(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=k.T,k.T=null,l=G.p,G.p=2,d=Ce,Ce|=4;try{Jm(e,t,n)}finally{Ce=d,G.p=l,k.T=a}}We=1,rp(),cp(),up()}}function rp(){if(We===1){We=0;var e=la,t=ml,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var a=G.p;G.p=2;var l=Ce;Ce|=4;try{Xf(t,e);var s=bc,d=Ku(e.containerInfo),h=s.focusedElem,x=s.selectionRange;if(d!==h&&h&&h.ownerDocument&&Vu(h.ownerDocument.documentElement,h)){if(x!==null&&Go(h)){var E=x.start,j=x.end;if(j===void 0&&(j=E),"selectionStart"in h)h.selectionStart=E,h.selectionEnd=Math.min(j,h.value.length);else{var U=h.ownerDocument||document,z=U&&U.defaultView||window;if(z.getSelection){var M=z.getSelection(),F=h.textContent.length,ne=Math.min(x.start,F),Re=x.end===void 0?ne:Math.min(x.end,F);!M.extend&&ne>Re&&(d=Re,Re=ne,ne=d);var N=Zu(h,ne),w=Zu(h,Re);if(N&&w&&(M.rangeCount!==1||M.anchorNode!==N.node||M.anchorOffset!==N.offset||M.focusNode!==w.node||M.focusOffset!==w.offset)){var D=U.createRange();D.setStart(N.node,N.offset),M.removeAllRanges(),ne>Re?(M.addRange(D),M.extend(w.node,w.offset)):(D.setEnd(w.node,w.offset),M.addRange(D))}}}}for(U=[],M=h;M=M.parentNode;)M.nodeType===1&&U.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<U.length;h++){var _=U[h];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Js=!!vc,bc=vc=null}finally{Ce=l,G.p=a,k.T=n}}e.current=t,We=2}}function cp(){if(We===2){We=0;var e=la,t=ml,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var a=G.p;G.p=2;var l=Ce;Ce|=4;try{Hf(e,t.alternate,t)}finally{Ce=l,G.p=a,k.T=n}}We=3}}function up(){if(We===4||We===3){We=0,Bi();var e=la,t=ml,n=Bn,a=If;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,ml=la=null,dp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(aa=null),wn(n),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(va,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=k.T,l=G.p,G.p=2,k.T=null;try{for(var s=e.onRecoverableError,d=0;d<a.length;d++){var h=a[d];s(h.value,{componentStack:h.stack})}}finally{k.T=t,G.p=l}}(Bn&3)!==0&&Us(),mn(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===lc?ri++:(ri=0,lc=e):ri=0,ci(0)}}function dp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Gl(t)))}function Us(){return rp(),cp(),up(),fp()}function fp(){if(We!==5)return!1;var e=la,t=nc;nc=0;var n=wn(Bn),a=k.T,l=G.p;try{G.p=32>n?32:n,k.T=null,n=ac,ac=null;var s=la,d=Bn;if(We=0,ml=la=null,Bn=0,(Ce&6)!==0)throw Error(c(331));var h=Ce;if(Ce|=4,Kf(s.current),Qf(s,s.current,d,n),Ce=h,ci(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(va,s)}catch{}return!0}finally{G.p=l,k.T=a,dp(e,t)}}function pp(e,t,n){t=Vt(n,t),t=Ur(e.stateNode,t,2),e=Fn(e,t,2),e!==null&&(qt(e,2),mn(e))}function De(e,t,n){if(e.tag===3)pp(e,e,n);else for(;t!==null;){if(t.tag===3){pp(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(aa===null||!aa.has(a))){e=Vt(n,e),n=hf(2),a=Fn(t,n,2),a!==null&&(gf(n,a,t,e),qt(a,2),mn(a));break}}t=t.return}}function oc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Fm;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Pr=!0,l.add(n),e=n0.bind(null,e,t,n),t.then(e,e))}function n0(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ke===e&&(pe&n)===n&&(Ye===4||Ye===3&&(pe&62914560)===pe&&300>dt()-Rs?(Ce&2)===0&&vl(e,0):ec|=n,gl===pe&&(gl=0)),mn(e)}function hp(e,t){t===0&&(t=pt()),e=wa(e,t),e!==null&&(qt(e,t),mn(e))}function a0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hp(e,n)}function l0(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),hp(e,n)}function i0(e,t){return Lt(e,t)}var Hs=null,yl=null,rc=!1,Ls=!1,cc=!1,sa=0;function mn(e){e!==yl&&e.next===null&&(yl===null?Hs=yl=e:yl=yl.next=e),Ls=!0,rc||(rc=!0,o0())}function ci(e,t){if(!cc&&Ls){cc=!0;do for(var n=!1,a=Hs;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var s=0;else{var d=a.suspendedLanes,h=a.pingedLanes;s=(1<<31-ft(42|e)+1)-1,s&=l&~(d&~h),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,bp(a,s))}else s=pe,s=et(a,a===ke?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||yt(a,s)||(n=!0,bp(a,s));a=a.next}while(n);cc=!1}}function s0(){gp()}function gp(){Ls=rc=!1;var e=0;sa!==0&&v0()&&(e=sa);for(var t=dt(),n=null,a=Hs;a!==null;){var l=a.next,s=mp(a,t);s===0?(a.next=null,n===null?Hs=l:n.next=l,l===null&&(yl=n)):(n=a,(e!==0||(s&3)!==0)&&(Ls=!0)),a=l}We!==0&&We!==5||ci(e),sa!==0&&(sa=0)}function mp(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-ft(s),h=1<<d,x=l[d];x===-1?((h&n)===0||(h&a)!==0)&&(l[d]=xt(h,t)):x<=t&&(e.expiredLanes|=h),s&=~h}if(t=ke,n=pe,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Xn(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||yt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Xn(a),wn(n)){case 2:case 8:n=xn;break;case 32:n=en;break;case 268435456:n=zl;break;default:n=en}return a=vp.bind(null,e),n=Lt(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Xn(a),e.callbackPriority=2,e.callbackNode=null,2}function vp(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Us()&&e.callbackNode!==n)return null;var a=pe;return a=et(e,e===ke?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Wf(e,a,t),mp(e,dt()),e.callbackNode!=null&&e.callbackNode===n?vp.bind(null,e):null)}function bp(e,t){if(Us())return null;Wf(e,t,!0)}function o0(){y0(function(){(Ce&6)!==0?Lt(qi,s0):gp()})}function uc(){if(sa===0){var e=ll;e===0&&(e=La,La<<=1,(La&261888)===0&&(La=256)),sa=e}return sa}function yp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vi(""+e)}function xp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function r0(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var s=yp((l[wt]||null).action),d=a.submitter;d&&(t=(t=d[wt]||null)?yp(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var h=new Ii("action","action",null,a,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(sa!==0){var x=d?xp(l,d):new FormData(l);Rr(n,{pending:!0,data:x,method:l.method,action:s},null,x)}}else typeof s=="function"&&(h.preventDefault(),x=d?xp(l,d):new FormData(l),Rr(n,{pending:!0,data:x,method:l.method,action:s},s,x))},currentTarget:l}]})}}for(var dc=0;dc<Ko.length;dc++){var fc=Ko[dc],c0=fc.toLowerCase(),u0=fc[0].toUpperCase()+fc.slice(1);an(c0,"on"+u0)}an(Iu,"onAnimationEnd"),an(Fu,"onAnimationIteration"),an(Wu,"onAnimationStart"),an("dblclick","onDoubleClick"),an("focusin","onFocus"),an("focusout","onBlur"),an(Dm,"onTransitionRun"),an(Em,"onTransitionStart"),an(Am,"onTransitionCancel"),an(Pu,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ui));function Sp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var d=a.length-1;0<=d;d--){var h=a[d],x=h.instance,E=h.currentTarget;if(h=h.listener,x!==s&&l.isPropagationStopped())break e;s=h,l.currentTarget=E;try{s(l)}catch(j){Pi(j)}l.currentTarget=null,s=x}else for(d=0;d<a.length;d++){if(h=a[d],x=h.instance,E=h.currentTarget,h=h.listener,x!==s&&l.isPropagationStopped())break e;s=h,l.currentTarget=E;try{s(l)}catch(j){Pi(j)}l.currentTarget=null,s=x}}}}function fe(e,t){var n=t[To];n===void 0&&(n=t[To]=new Set);var a=e+"__bubble";n.has(a)||(wp(t,e,2,!1),n.add(a))}function pc(e,t,n){var a=0;t&&(a|=4),wp(n,e,a,t)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function hc(e){if(!e[Bs]){e[Bs]=!0,hu.forEach(function(n){n!=="selectionchange"&&(d0.has(n)||pc(n,!1,e),pc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bs]||(t[Bs]=!0,pc("selectionchange",!1,t))}}function wp(e,t,n,a){switch(Fp(t)){case 2:var l=B0;break;case 8:l=q0;break;default:l=zc}n=l.bind(null,t,n,e),l=void 0,!jo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function gc(e,t,n,a,l){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var h=a.stateNode.containerInfo;if(h===l)break;if(d===4)for(d=a.return;d!==null;){var x=d.tag;if((x===3||x===4)&&d.stateNode.containerInfo===l)return;d=d.return}for(;h!==null;){if(d=Ya(h),d===null)return;if(x=d.tag,x===5||x===6||x===26||x===27){a=s=d;continue e}h=h.parentNode}}a=a.return}Du(function(){var E=s,j=ko(n),U=[];e:{var z=ed.get(e);if(z!==void 0){var M=Ii,F=e;switch(e){case"keypress":if(Ji(n)===0)break e;case"keydown":case"keyup":M=lm;break;case"focusin":F="focus",M=Lo;break;case"focusout":F="blur",M=Lo;break;case"beforeblur":case"afterblur":M=Lo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=om;break;case Iu:case Fu:case Wu:M=$g;break;case Pu:M=cm;break;case"scroll":case"scrollend":M=Qg;break;case"wheel":M=dm;break;case"copy":case"cut":case"paste":M=Fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Mu;break;case"toggle":case"beforetoggle":M=pm}var ne=(t&4)!==0,Re=!ne&&(e==="scroll"||e==="scrollend"),N=ne?z!==null?z+"Capture":null:z;ne=[];for(var w=E,D;w!==null;){var _=w;if(D=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||D===null||N===null||(_=kl(w,N),_!=null&&ne.push(di(w,_,D))),Re)break;w=w.return}0<ne.length&&(z=new M(z,F,null,n,j),U.push({event:z,listeners:ne}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",z&&n!==Mo&&(F=n.relatedTarget||n.fromElement)&&(Ya(F)||F[qa]))break e;if((M||z)&&(z=j.window===j?j:(z=j.ownerDocument)?z.defaultView||z.parentWindow:window,M?(F=n.relatedTarget||n.toElement,M=E,F=F?Ya(F):null,F!==null&&(Re=f(F),ne=F.tag,F!==Re||ne!==5&&ne!==27&&ne!==6)&&(F=null)):(M=null,F=E),M!==F)){if(ne=zu,_="onMouseLeave",N="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Mu,_="onPointerLeave",N="onPointerEnter",w="pointer"),Re=M==null?z:Ml(M),D=F==null?z:Ml(F),z=new ne(_,w+"leave",M,n,j),z.target=Re,z.relatedTarget=D,_=null,Ya(j)===E&&(ne=new ne(N,w+"enter",F,n,j),ne.target=D,ne.relatedTarget=Re,_=ne),Re=_,M&&F)t:{for(ne=f0,N=M,w=F,D=0,_=N;_;_=ne(_))D++;_=0;for(var P=w;P;P=ne(P))_++;for(;0<D-_;)N=ne(N),D--;for(;0<_-D;)w=ne(w),_--;for(;D--;){if(N===w||w!==null&&N===w.alternate){ne=N;break t}N=ne(N),w=ne(w)}ne=null}else ne=null;M!==null&&Cp(U,z,M,ne,!1),F!==null&&Re!==null&&Cp(U,Re,F,ne,!0)}}e:{if(z=E?Ml(E):window,M=z.nodeName&&z.nodeName.toLowerCase(),M==="select"||M==="input"&&z.type==="file")var xe=Bu;else if(Hu(z))if(qu)xe=Cm;else{xe=Sm;var W=xm}else M=z.nodeName,!M||M.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?E&&Ro(E.elementType)&&(xe=Bu):xe=wm;if(xe&&(xe=xe(e,E))){Lu(U,xe,n,j);break e}W&&W(e,z,E),e==="focusout"&&E&&z.type==="number"&&E.memoizedProps.value!=null&&zo(z,"number",z.value)}switch(W=E?Ml(E):window,e){case"focusin":(Hu(W)||W.contentEditable==="true")&&(Ia=W,Qo=E,ql=null);break;case"focusout":ql=Qo=Ia=null;break;case"mousedown":Zo=!0;break;case"contextmenu":case"mouseup":case"dragend":Zo=!1,Ju(U,n,j);break;case"selectionchange":if(Tm)break;case"keydown":case"keyup":Ju(U,n,j)}var re;if(qo)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else $a?_u(e,n)&&(he="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(he="onCompositionStart");he&&(ku&&n.locale!=="ko"&&($a||he!=="onCompositionStart"?he==="onCompositionEnd"&&$a&&(re=Eu()):(Qn=j,_o="value"in Qn?Qn.value:Qn.textContent,$a=!0)),W=qs(E,he),0<W.length&&(he=new Ru(he,e,null,n,j),U.push({event:he,listeners:W}),re?he.data=re:(re=Uu(n),re!==null&&(he.data=re)))),(re=gm?mm(e,n):vm(e,n))&&(he=qs(E,"onBeforeInput"),0<he.length&&(W=new Ru("onBeforeInput","beforeinput",null,n,j),U.push({event:W,listeners:he}),W.data=re)),r0(U,e,E,n,j)}Sp(U,t)})}function di(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qs(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=kl(e,n),l!=null&&a.unshift(di(e,l,s)),l=kl(e,t),l!=null&&a.push(di(e,l,s))),e.tag===3)return a;e=e.return}return[]}function f0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cp(e,t,n,a,l){for(var s=t._reactName,d=[];n!==null&&n!==a;){var h=n,x=h.alternate,E=h.stateNode;if(h=h.tag,x!==null&&x===a)break;h!==5&&h!==26&&h!==27||E===null||(x=E,l?(E=kl(n,s),E!=null&&d.unshift(di(n,E,x))):l||(E=kl(n,s),E!=null&&d.push(di(n,E,x)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var p0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function Np(e){return(typeof e=="string"?e:""+e).replace(p0,`
`).replace(h0,"")}function Tp(e,t){return t=Np(t),Np(e)===t}function ze(e,t,n,a,l,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Va(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Va(e,""+a);break;case"className":Qi(e,"class",a);break;case"tabIndex":Qi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Qi(e,n,a);break;case"style":Nu(e,a,s);break;case"data":if(t!=="object"){Qi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Vi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&ze(e,t,"name",l.name,l,null),ze(e,t,"formEncType",l.formEncType,l,null),ze(e,t,"formMethod",l.formMethod,l,null),ze(e,t,"formTarget",l.formTarget,l,null)):(ze(e,t,"encType",l.encType,l,null),ze(e,t,"method",l.method,l,null),ze(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Vi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Nn);break;case"onScroll":a!=null&&fe("scroll",e);break;case"onScrollEnd":a!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Vi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":fe("beforetoggle",e),fe("toggle",e),Gi(e,"popover",a);break;case"xlinkActuate":Cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Cn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Cn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Cn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Cn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Gi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Xg.get(n)||n,Gi(e,n,a))}}function mc(e,t,n,a,l,s){switch(n){case"style":Nu(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Va(e,a):(typeof a=="number"||typeof a=="bigint")&&Va(e,""+a);break;case"onScroll":a!=null&&fe("scroll",e);break;case"onScrollEnd":a!=null&&fe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),s=e[wt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,l),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Gi(e,n,a)}}}function ut(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var a=!1,l=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ze(e,t,s,d,n,null)}}l&&ze(e,t,"srcSet",n.srcSet,n,null),a&&ze(e,t,"src",n.src,n,null);return;case"input":fe("invalid",e);var h=s=d=l=null,x=null,E=null;for(a in n)if(n.hasOwnProperty(a)){var j=n[a];if(j!=null)switch(a){case"name":l=j;break;case"type":d=j;break;case"checked":x=j;break;case"defaultChecked":E=j;break;case"value":s=j;break;case"defaultValue":h=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(c(137,t));break;default:ze(e,t,a,j,n,null)}}xu(e,s,h,x,E,d,l,!1);return;case"select":fe("invalid",e),a=d=s=null;for(l in n)if(n.hasOwnProperty(l)&&(h=n[l],h!=null))switch(l){case"value":s=h;break;case"defaultValue":d=h;break;case"multiple":a=h;default:ze(e,t,l,h,n,null)}t=s,n=d,e.multiple=!!a,t!=null?Za(e,!!a,t,!1):n!=null&&Za(e,!!a,n,!0);return;case"textarea":fe("invalid",e),s=l=a=null;for(d in n)if(n.hasOwnProperty(d)&&(h=n[d],h!=null))switch(d){case"value":a=h;break;case"defaultValue":l=h;break;case"children":s=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(c(91));break;default:ze(e,t,d,h,n,null)}wu(e,a,l,s);return;case"option":for(x in n)if(n.hasOwnProperty(x)&&(a=n[x],a!=null))switch(x){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ze(e,t,x,a,n,null)}return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(a=0;a<ui.length;a++)fe(ui[a],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(a=n[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ze(e,t,E,a,n,null)}return;default:if(Ro(t)){for(j in n)n.hasOwnProperty(j)&&(a=n[j],a!==void 0&&mc(e,t,j,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&ze(e,t,h,a,n,null))}function g0(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,d=null,h=null,x=null,E=null,j=null;for(M in n){var U=n[M];if(n.hasOwnProperty(M)&&U!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":x=U;default:a.hasOwnProperty(M)||ze(e,t,M,null,a,U)}}for(var z in a){var M=a[z];if(U=n[z],a.hasOwnProperty(z)&&(M!=null||U!=null))switch(z){case"type":s=M;break;case"name":l=M;break;case"checked":E=M;break;case"defaultChecked":j=M;break;case"value":d=M;break;case"defaultValue":h=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:M!==U&&ze(e,t,z,M,a,U)}}Ao(e,d,h,x,E,j,s,l);return;case"select":M=d=h=z=null;for(s in n)if(x=n[s],n.hasOwnProperty(s)&&x!=null)switch(s){case"value":break;case"multiple":M=x;default:a.hasOwnProperty(s)||ze(e,t,s,null,a,x)}for(l in a)if(s=a[l],x=n[l],a.hasOwnProperty(l)&&(s!=null||x!=null))switch(l){case"value":z=s;break;case"defaultValue":h=s;break;case"multiple":d=s;default:s!==x&&ze(e,t,l,s,a,x)}t=h,n=d,a=M,z!=null?Za(e,!!n,z,!1):!!a!=!!n&&(t!=null?Za(e,!!n,t,!0):Za(e,!!n,n?[]:"",!1));return;case"textarea":M=z=null;for(h in n)if(l=n[h],n.hasOwnProperty(h)&&l!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:ze(e,t,h,null,a,l)}for(d in a)if(l=a[d],s=n[d],a.hasOwnProperty(d)&&(l!=null||s!=null))switch(d){case"value":z=l;break;case"defaultValue":M=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==s&&ze(e,t,d,l,a,s)}Su(e,z,M);return;case"option":for(var F in n)if(z=n[F],n.hasOwnProperty(F)&&z!=null&&!a.hasOwnProperty(F))switch(F){case"selected":e.selected=!1;break;default:ze(e,t,F,null,a,z)}for(x in a)if(z=a[x],M=n[x],a.hasOwnProperty(x)&&z!==M&&(z!=null||M!=null))switch(x){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:ze(e,t,x,z,a,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in n)z=n[ne],n.hasOwnProperty(ne)&&z!=null&&!a.hasOwnProperty(ne)&&ze(e,t,ne,null,a,z);for(E in a)if(z=a[E],M=n[E],a.hasOwnProperty(E)&&z!==M&&(z!=null||M!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:ze(e,t,E,z,a,M)}return;default:if(Ro(t)){for(var Re in n)z=n[Re],n.hasOwnProperty(Re)&&z!==void 0&&!a.hasOwnProperty(Re)&&mc(e,t,Re,void 0,a,z);for(j in a)z=a[j],M=n[j],!a.hasOwnProperty(j)||z===M||z===void 0&&M===void 0||mc(e,t,j,z,a,M);return}}for(var N in n)z=n[N],n.hasOwnProperty(N)&&z!=null&&!a.hasOwnProperty(N)&&ze(e,t,N,null,a,z);for(U in a)z=a[U],M=n[U],!a.hasOwnProperty(U)||z===M||z==null&&M==null||ze(e,t,U,z,a,M)}function Dp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function m0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],s=l.transferSize,d=l.initiatorType,h=l.duration;if(s&&h&&Dp(d)){for(d=0,h=l.responseEnd,a+=1;a<n.length;a++){var x=n[a],E=x.startTime;if(E>h)break;var j=x.transferSize,U=x.initiatorType;j&&Dp(U)&&(x=x.responseEnd,d+=j*(x<h?1:(h-E)/(x-E)))}if(--a,t+=8*(s+d)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vc=null,bc=null;function Ys(e){return e.nodeType===9?e:e.ownerDocument}function Ep(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ap(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xc=null;function v0(){var e=window.event;return e&&e.type==="popstate"?e===xc?!1:(xc=e,!0):(xc=null,!1)}var zp=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,y0=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(e){return Rp.resolve(null).then(e).catch(x0)}:zp;function x0(e){setTimeout(function(){throw e})}function oa(e){return e==="head"}function Mp(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),Cl(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")fi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,fi(n);for(var s=n.firstChild;s;){var d=s.nextSibling,h=s.nodeName;s[Rl]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=d}}else n==="body"&&fi(e.ownerDocument.body);n=l}while(n);Cl(t)}function kp(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Sc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Sc(n),Do(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function S0(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Rl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Ft(e.nextSibling),e===null)break}return null}function w0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ft(e.nextSibling),e===null))return null;return e}function Op(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ft(e.nextSibling),e===null))return null;return e}function wc(e){return e.data==="$?"||e.data==="$~"}function Cc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function C0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Nc=null;function jp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ft(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function _p(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Up(e,t,n){switch(t=Ys(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function fi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Do(e)}var Wt=new Map,Hp=new Set;function Xs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qn=G.d;G.d={f:N0,r:T0,D:D0,C:E0,L:A0,m:z0,X:M0,S:R0,M:k0};function N0(){var e=qn.f(),t=Os();return e||t}function T0(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?Pd(t):qn.r(e)}var xl=typeof document>"u"?null:document;function Lp(e,t,n){var a=xl;if(a&&typeof t=="string"&&t){var l=Qt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Hp.has(l)||(Hp.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),ut(t,"link",e),tt(t),a.head.appendChild(t)))}}function D0(e){qn.D(e),Lp("dns-prefetch",e,null)}function E0(e,t){qn.C(e,t),Lp("preconnect",e,t)}function A0(e,t,n){qn.L(e,t,n);var a=xl;if(a&&e&&t){var l='link[rel="preload"][as="'+Qt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Qt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Qt(n.imageSizes)+'"]')):l+='[href="'+Qt(e)+'"]';var s=l;switch(t){case"style":s=Sl(e);break;case"script":s=wl(e)}Wt.has(s)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Wt.set(s,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(pi(s))||t==="script"&&a.querySelector(hi(s))||(t=a.createElement("link"),ut(t,"link",e),tt(t),a.head.appendChild(t)))}}function z0(e,t){qn.m(e,t);var n=xl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Qt(a)+'"][href="'+Qt(e)+'"]',s=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=wl(e)}if(!Wt.has(s)&&(e=S({rel:"modulepreload",href:e},t),Wt.set(s,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(hi(s)))return}a=n.createElement("link"),ut(a,"link",e),tt(a),n.head.appendChild(a)}}}function R0(e,t,n){qn.S(e,t,n);var a=xl;if(a&&e){var l=Ga(a).hoistableStyles,s=Sl(e);t=t||"default";var d=l.get(s);if(!d){var h={loading:0,preload:null};if(d=a.querySelector(pi(s)))h.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Wt.get(s))&&Tc(e,n);var x=d=a.createElement("link");tt(x),ut(x,"link",e),x._p=new Promise(function(E,j){x.onload=E,x.onerror=j}),x.addEventListener("load",function(){h.loading|=1}),x.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Gs(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:h},l.set(s,d)}}}function M0(e,t){qn.X(e,t);var n=xl;if(n&&e){var a=Ga(n).hoistableScripts,l=wl(e),s=a.get(l);s||(s=n.querySelector(hi(l)),s||(e=S({src:e,async:!0},t),(t=Wt.get(l))&&Dc(e,t),s=n.createElement("script"),tt(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(l,s))}}function k0(e,t){qn.M(e,t);var n=xl;if(n&&e){var a=Ga(n).hoistableScripts,l=wl(e),s=a.get(l);s||(s=n.querySelector(hi(l)),s||(e=S({src:e,async:!0,type:"module"},t),(t=Wt.get(l))&&Dc(e,t),s=n.createElement("script"),tt(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(l,s))}}function Bp(e,t,n,a){var l=(l=ae.current)?Xs(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Sl(n.href),n=Ga(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Sl(n.href);var s=Ga(l).hoistableStyles,d=s.get(e);if(d||(l=l.ownerDocument||l,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=l.querySelector(pi(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Wt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wt.set(e,n),s||O0(l,e,n,d.state))),t&&a===null)throw Error(c(528,""));return d}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=wl(n),n=Ga(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Sl(e){return'href="'+Qt(e)+'"'}function pi(e){return'link[rel="stylesheet"]['+e+"]"}function qp(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function O0(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ut(t,"link",n),tt(t),e.head.appendChild(t))}function wl(e){return'[src="'+Qt(e)+'"]'}function hi(e){return"script[async]"+e}function Yp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Qt(n.href)+'"]');if(a)return t.instance=a,tt(a),a;var l=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),tt(a),ut(a,"style",l),Gs(a,n.precedence,e),t.instance=a;case"stylesheet":l=Sl(n.href);var s=e.querySelector(pi(l));if(s)return t.state.loading|=4,t.instance=s,tt(s),s;a=qp(n),(l=Wt.get(l))&&Tc(a,l),s=(e.ownerDocument||e).createElement("link"),tt(s);var d=s;return d._p=new Promise(function(h,x){d.onload=h,d.onerror=x}),ut(s,"link",a),t.state.loading|=4,Gs(s,n.precedence,e),t.instance=s;case"script":return s=wl(n.src),(l=e.querySelector(hi(s)))?(t.instance=l,tt(l),l):(a=n,(l=Wt.get(s))&&(a=S({},n),Dc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),tt(l),ut(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Gs(a,n.precedence,e));return t.instance}function Gs(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,s=l,d=0;d<a.length;d++){var h=a[d];if(h.dataset.precedence===t)s=h;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Tc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qs=null;function Xp(e,t,n){if(Qs===null){var a=new Map,l=Qs=new Map;l.set(n,a)}else l=Qs,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var s=n[l];if(!(s[Rl]||s[st]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var h=a.get(d);h?h.push(s):a.set(d,[s])}}return a}function Gp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function j0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Qp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _0(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Sl(a.href),s=t.querySelector(pi(l));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,tt(s);return}s=t.ownerDocument||t,a=qp(a),(l=Wt.get(l))&&Tc(a,l),s=s.createElement("link"),tt(s);var d=s;d._p=new Promise(function(h,x){d.onload=h,d.onerror=x}),ut(s,"link",a),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Zs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ec=0;function U0(e,t){return e.stylesheets&&e.count===0&&Ks(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Ks(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Ec===0&&(Ec=62500*m0());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ks(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Ec?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Zs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ks(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vs=null;function Ks(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vs=new Map,t.forEach(H0,e),Vs=null,Zs.call(e))}function H0(e,t){if(!(t.state.loading&4)){var n=Vs.get(e);if(n)var a=n.get(null);else{n=new Map,Vs.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var d=l[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}l=t.instance,d=l.getAttribute("data-precedence"),s=n.get(d)||a,s===a&&n.set(null,l),n.set(d,l),this.count++,a=Zs.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var gi={$$typeof:L,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function L0(e,t,n,a,l,s,d,h,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=St(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=St(0),this.hiddenUpdates=St(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function Zp(e,t,n,a,l,s,d,h,x,E,j,U){return e=new L0(e,t,n,d,x,E,j,U,h),t=1,s===!0&&(t|=24),s=Mt(3,null,null,t),e.current=s,s.stateNode=e,t=sr(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},ur(s),e}function Vp(e){return e?(e=Pa,e):Pa}function Kp(e,t,n,a,l,s){l=Vp(l),a.context===null?a.context=l:a.pendingContext=l,a=In(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=Fn(e,a,t),n!==null&&(At(n,e,t),Kl(n,e,t))}function Jp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ac(e,t){Jp(e,t),(e=e.alternate)&&Jp(e,t)}function $p(e){if(e.tag===13||e.tag===31){var t=wa(e,67108864);t!==null&&At(t,e,67108864),Ac(e,67108864)}}function Ip(e){if(e.tag===13||e.tag===31){var t=Ut();t=Sn(t);var n=wa(e,t);n!==null&&At(n,e,t),Ac(e,t)}}var Js=!0;function B0(e,t,n,a){var l=k.T;k.T=null;var s=G.p;try{G.p=2,zc(e,t,n,a)}finally{G.p=s,k.T=l}}function q0(e,t,n,a){var l=k.T;k.T=null;var s=G.p;try{G.p=8,zc(e,t,n,a)}finally{G.p=s,k.T=l}}function zc(e,t,n,a){if(Js){var l=Rc(a);if(l===null)gc(e,t,a,$s,n),Wp(e,a);else if(X0(l,e,t,n,a))a.stopPropagation();else if(Wp(e,a),t&4&&-1<Y0.indexOf(e)){for(;l!==null;){var s=Xa(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=Ge(s.pendingLanes);if(d!==0){var h=s;for(h.pendingLanes|=2,h.entangledLanes|=2;d;){var x=1<<31-ft(d);h.entanglements[1]|=x,d&=~x}mn(s),(Ce&6)===0&&(Ms=dt()+500,ci(0))}}break;case 31:case 13:h=wa(s,2),h!==null&&At(h,s,2),Os(),Ac(s,2)}if(s=Rc(a),s===null&&gc(e,t,a,$s,n),s===l)break;l=s}l!==null&&a.stopPropagation()}else gc(e,t,a,null,n)}}function Rc(e){return e=ko(e),Mc(e)}var $s=null;function Mc(e){if($s=null,e=Ya(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return $s=e,null}function Fp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wo()){case qi:return 2;case xn:return 8;case en:case ma:return 32;case zl:return 268435456;default:return 32}default:return 32}}var kc=!1,ra=null,ca=null,ua=null,mi=new Map,vi=new Map,da=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wp(e,t){switch(e){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":ua=null;break;case"pointerover":case"pointerout":mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function bi(e,t,n,a,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[l]},t!==null&&(t=Xa(t),t!==null&&$p(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function X0(e,t,n,a,l){switch(t){case"focusin":return ra=bi(ra,e,t,n,a,l),!0;case"dragenter":return ca=bi(ca,e,t,n,a,l),!0;case"mouseover":return ua=bi(ua,e,t,n,a,l),!0;case"pointerover":var s=l.pointerId;return mi.set(s,bi(mi.get(s)||null,e,t,n,a,l)),!0;case"gotpointercapture":return s=l.pointerId,vi.set(s,bi(vi.get(s)||null,e,t,n,a,l)),!0}return!1}function Pp(e){var t=Ya(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Gn(e.priority,function(){Ip(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,Gn(e.priority,function(){Ip(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Is(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Mo=a,n.target.dispatchEvent(a),Mo=null}else return t=Xa(n),t!==null&&$p(t),e.blockedOn=n,!1;t.shift()}return!0}function eh(e,t,n){Is(e)&&n.delete(t)}function G0(){kc=!1,ra!==null&&Is(ra)&&(ra=null),ca!==null&&Is(ca)&&(ca=null),ua!==null&&Is(ua)&&(ua=null),mi.forEach(eh),vi.forEach(eh)}function Fs(e,t){e.blockedOn===t&&(e.blockedOn=null,kc||(kc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,G0)))}var Ws=null;function th(e){Ws!==e&&(Ws=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ws===e&&(Ws=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Mc(a||n)===null)continue;break}var s=Xa(n);s!==null&&(e.splice(t,3),t-=3,Rr(s,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Cl(e){function t(x){return Fs(x,e)}ra!==null&&Fs(ra,e),ca!==null&&Fs(ca,e),ua!==null&&Fs(ua,e),mi.forEach(t),vi.forEach(t);for(var n=0;n<da.length;n++){var a=da[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<da.length&&(n=da[0],n.blockedOn===null);)Pp(n),n.blockedOn===null&&da.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],s=n[a+1],d=l[wt]||null;if(typeof s=="function")d||th(n);else if(d){var h=null;if(s&&s.hasAttribute("formAction")){if(l=s,d=s[wt]||null)h=d.formAction;else if(Mc(l)!==null)continue}else h=d.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),th(n)}}}function nh(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return l=d})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Oc(e){this._internalRoot=e}Ps.prototype.render=Oc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=Ut();Kp(n,a,e,t,null,null)},Ps.prototype.unmount=Oc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kp(e.current,2,null,e,null,null),Os(),t[qa]=null}};function Ps(e){this._internalRoot=e}Ps.prototype.unstable_scheduleHydration=function(e){if(e){var t=nn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<da.length&&t!==0&&t<da[n].priority;n++);da.splice(n,0,e),n===0&&Pp(e)}};var ah=i.version;if(ah!=="19.2.6")throw Error(c(527,ah,"19.2.6"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Q0={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eo.isDisabled&&eo.supportsFiber)try{va=eo.inject(Q0),gt=eo}catch{}}return Si.createRoot=function(e,t){if(!u(e))throw Error(c(299));var n=!1,a="",l=uf,s=df,d=ff;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Zp(e,1,!1,null,null,n,a,null,l,s,d,nh),e[qa]=t.current,hc(e),new Oc(t)},Si.hydrateRoot=function(e,t,n){if(!u(e))throw Error(c(299));var a=!1,l="",s=uf,d=df,h=ff,x=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.formState!==void 0&&(x=n.formState)),t=Zp(e,1,!0,t,n??null,a,l,x,s,d,h,nh),t.context=Vp(null),n=t.current,a=Ut(),a=Sn(a),l=In(a),l.callback=null,Fn(n,l,a),n=a,t.current.lanes=n,qt(t,n),mn(t),e[qa]=t.current,hc(e),new Ps(t)},Si.version="19.2.6",Si}var gh;function av(){if(gh)return Uc.exports;gh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),Uc.exports=nv(),Uc.exports}var lv=av();function Pc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ua=Pc();function Bh(o){Ua=o}const qh=/[&<>"']/,iv=new RegExp(qh.source,"g"),Yh=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,sv=new RegExp(Yh.source,"g"),ov={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},mh=o=>ov[o];function Ht(o,i){if(i){if(qh.test(o))return o.replace(iv,mh)}else if(Yh.test(o))return o.replace(sv,mh);return o}const rv=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function cv(o){return o.replace(rv,(i,r)=>(r=r.toLowerCase(),r==="colon"?":":r.charAt(0)==="#"?r.charAt(1)==="x"?String.fromCharCode(parseInt(r.substring(2),16)):String.fromCharCode(+r.substring(1)):""))}const uv=/(^|[^\[])\^/g;function Me(o,i){let r=typeof o=="string"?o:o.source;i=i||"";const c={replace:(u,f)=>{let p=typeof f=="string"?f:f.source;return p=p.replace(uv,"$1"),r=r.replace(u,p),c},getRegex:()=>new RegExp(r,i)};return c}function vh(o){try{o=encodeURI(o).replace(/%25/g,"%")}catch{return null}return o}const Ti={exec:()=>null};function bh(o,i){const r=o.replace(/\|/g,(f,p,m)=>{let g=!1,v=p;for(;--v>=0&&m[v]==="\\";)g=!g;return g?"|":" |"}),c=r.split(/ \|/);let u=0;if(c[0].trim()||c.shift(),c.length>0&&!c[c.length-1].trim()&&c.pop(),i)if(c.length>i)c.splice(i);else for(;c.length<i;)c.push("");for(;u<c.length;u++)c[u]=c[u].trim().replace(/\\\|/g,"|");return c}function wi(o,i,r){const c=o.length;if(c===0)return"";let u=0;for(;u<c&&o.charAt(c-u-1)===i;)u++;return o.slice(0,c-u)}function dv(o,i){if(o.indexOf(i[1])===-1)return-1;let r=0;for(let c=0;c<o.length;c++)if(o[c]==="\\")c++;else if(o[c]===i[0])r++;else if(o[c]===i[1]&&(r--,r<0))return c;return-1}function yh(o,i,r,c){const u=i.href,f=i.title?Ht(i.title):null,p=o[1].replace(/\\([\[\]])/g,"$1");if(o[0].charAt(0)!=="!"){c.state.inLink=!0;const m={type:"link",raw:r,href:u,title:f,text:p,tokens:c.inlineTokens(p)};return c.state.inLink=!1,m}return{type:"image",raw:r,href:u,title:f,text:Ht(p)}}function fv(o,i){const r=o.match(/^(\s+)(?:```)/);if(r===null)return i;const c=r[1];return i.split(`
`).map(u=>{const f=u.match(/^\s+/);if(f===null)return u;const[p]=f;return p.length>=c.length?u.slice(c.length):u}).join(`
`)}class io{constructor(i){Oe(this,"options");Oe(this,"rules");Oe(this,"lexer");this.options=i||Ua}space(i){const r=this.rules.block.newline.exec(i);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(i){const r=this.rules.block.code.exec(i);if(r){const c=r[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:r[0],codeBlockStyle:"indented",text:this.options.pedantic?c:wi(c,`
`)}}}fences(i){const r=this.rules.block.fences.exec(i);if(r){const c=r[0],u=fv(c,r[3]||"");return{type:"code",raw:c,lang:r[2]?r[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):r[2],text:u}}}heading(i){const r=this.rules.block.heading.exec(i);if(r){let c=r[2].trim();if(/#$/.test(c)){const u=wi(c,"#");(this.options.pedantic||!u||/ $/.test(u))&&(c=u.trim())}return{type:"heading",raw:r[0],depth:r[1].length,text:c,tokens:this.lexer.inline(c)}}}hr(i){const r=this.rules.block.hr.exec(i);if(r)return{type:"hr",raw:wi(r[0],`
`)}}blockquote(i){const r=this.rules.block.blockquote.exec(i);if(r){let c=wi(r[0],`
`).split(`
`),u="",f="";const p=[];for(;c.length>0;){let m=!1;const g=[];let v;for(v=0;v<c.length;v++)if(/^ {0,3}>/.test(c[v]))g.push(c[v]),m=!0;else if(!m)g.push(c[v]);else break;c=c.slice(v);const y=g.join(`
`),S=y.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");u=u?`${u}
${y}`:y,f=f?`${f}
${S}`:S;const A=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(S,p,!0),this.lexer.state.top=A,c.length===0)break;const R=p[p.length-1];if((R==null?void 0:R.type)==="code")break;if((R==null?void 0:R.type)==="blockquote"){const H=R,B=H.raw+`
`+c.join(`
`),K=this.blockquote(B);p[p.length-1]=K,u=u.substring(0,u.length-H.raw.length)+K.raw,f=f.substring(0,f.length-H.text.length)+K.text;break}else if((R==null?void 0:R.type)==="list"){const H=R,B=H.raw+`
`+c.join(`
`),K=this.list(B);p[p.length-1]=K,u=u.substring(0,u.length-R.raw.length)+K.raw,f=f.substring(0,f.length-H.raw.length)+K.raw,c=B.substring(p[p.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:u,tokens:p,text:f}}}list(i){let r=this.rules.block.list.exec(i);if(r){let c=r[1].trim();const u=c.length>1,f={type:"list",raw:"",ordered:u,start:u?+c.slice(0,-1):"",loose:!1,items:[]};c=u?`\\d{1,9}\\${c.slice(-1)}`:`\\${c}`,this.options.pedantic&&(c=u?c:"[*+-]");const p=new RegExp(`^( {0,3}${c})((?:[	 ][^\\n]*)?(?:\\n|$))`);let m=!1;for(;i;){let g=!1,v="",y="";if(!(r=p.exec(i))||this.rules.block.hr.test(i))break;v=r[0],i=i.substring(v.length);let S=r[2].split(`
`,1)[0].replace(/^\t+/,X=>" ".repeat(3*X.length)),A=i.split(`
`,1)[0],R=!S.trim(),H=0;if(this.options.pedantic?(H=2,y=S.trimStart()):R?H=r[1].length+1:(H=r[2].search(/[^ ]/),H=H>4?1:H,y=S.slice(H),H+=r[1].length),R&&/^ *$/.test(A)&&(v+=A+`
`,i=i.substring(A.length+1),g=!0),!g){const X=new RegExp(`^ {0,${Math.min(3,H-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),J=new RegExp(`^ {0,${Math.min(3,H-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),L=new RegExp(`^ {0,${Math.min(3,H-1)}}(?:\`\`\`|~~~)`),Q=new RegExp(`^ {0,${Math.min(3,H-1)}}#`);for(;i;){const $=i.split(`
`,1)[0];if(A=$,this.options.pedantic&&(A=A.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),L.test(A)||Q.test(A)||X.test(A)||J.test(i))break;if(A.search(/[^ ]/)>=H||!A.trim())y+=`
`+A.slice(H);else{if(R||S.search(/[^ ]/)>=4||L.test(S)||Q.test(S)||J.test(S))break;y+=`
`+A}!R&&!A.trim()&&(R=!0),v+=$+`
`,i=i.substring($.length+1),S=A.slice(H)}}f.loose||(m?f.loose=!0:/\n *\n *$/.test(v)&&(m=!0));let B=null,K;this.options.gfm&&(B=/^\[[ xX]\] /.exec(y),B&&(K=B[0]!=="[ ] ",y=y.replace(/^\[[ xX]\] +/,""))),f.items.push({type:"list_item",raw:v,task:!!B,checked:K,loose:!1,text:y,tokens:[]}),f.raw+=v}f.items[f.items.length-1].raw=f.items[f.items.length-1].raw.trimEnd(),f.items[f.items.length-1].text=f.items[f.items.length-1].text.trimEnd(),f.raw=f.raw.trimEnd();for(let g=0;g<f.items.length;g++)if(this.lexer.state.top=!1,f.items[g].tokens=this.lexer.blockTokens(f.items[g].text,[]),!f.loose){const v=f.items[g].tokens.filter(S=>S.type==="space"),y=v.length>0&&v.some(S=>/\n.*\n/.test(S.raw));f.loose=y}if(f.loose)for(let g=0;g<f.items.length;g++)f.items[g].loose=!0;return f}}html(i){const r=this.rules.block.html.exec(i);if(r)return{type:"html",block:!0,raw:r[0],pre:r[1]==="pre"||r[1]==="script"||r[1]==="style",text:r[0]}}def(i){const r=this.rules.block.def.exec(i);if(r){const c=r[1].toLowerCase().replace(/\s+/g," "),u=r[2]?r[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",f=r[3]?r[3].substring(1,r[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):r[3];return{type:"def",tag:c,raw:r[0],href:u,title:f}}}table(i){const r=this.rules.block.table.exec(i);if(!r||!/[:|]/.test(r[2]))return;const c=bh(r[1]),u=r[2].replace(/^\||\| *$/g,"").split("|"),f=r[3]&&r[3].trim()?r[3].replace(/\n[ \t]*$/,"").split(`
`):[],p={type:"table",raw:r[0],header:[],align:[],rows:[]};if(c.length===u.length){for(const m of u)/^ *-+: *$/.test(m)?p.align.push("right"):/^ *:-+: *$/.test(m)?p.align.push("center"):/^ *:-+ *$/.test(m)?p.align.push("left"):p.align.push(null);for(let m=0;m<c.length;m++)p.header.push({text:c[m],tokens:this.lexer.inline(c[m]),header:!0,align:p.align[m]});for(const m of f)p.rows.push(bh(m,p.header.length).map((g,v)=>({text:g,tokens:this.lexer.inline(g),header:!1,align:p.align[v]})));return p}}lheading(i){const r=this.rules.block.lheading.exec(i);if(r)return{type:"heading",raw:r[0],depth:r[2].charAt(0)==="="?1:2,text:r[1],tokens:this.lexer.inline(r[1])}}paragraph(i){const r=this.rules.block.paragraph.exec(i);if(r){const c=r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1];return{type:"paragraph",raw:r[0],text:c,tokens:this.lexer.inline(c)}}}text(i){const r=this.rules.block.text.exec(i);if(r)return{type:"text",raw:r[0],text:r[0],tokens:this.lexer.inline(r[0])}}escape(i){const r=this.rules.inline.escape.exec(i);if(r)return{type:"escape",raw:r[0],text:Ht(r[1])}}tag(i){const r=this.rules.inline.tag.exec(i);if(r)return!this.lexer.state.inLink&&/^<a /i.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:r[0]}}link(i){const r=this.rules.inline.link.exec(i);if(r){const c=r[2].trim();if(!this.options.pedantic&&/^</.test(c)){if(!/>$/.test(c))return;const p=wi(c.slice(0,-1),"\\");if((c.length-p.length)%2===0)return}else{const p=dv(r[2],"()");if(p>-1){const g=(r[0].indexOf("!")===0?5:4)+r[1].length+p;r[2]=r[2].substring(0,p),r[0]=r[0].substring(0,g).trim(),r[3]=""}}let u=r[2],f="";if(this.options.pedantic){const p=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u);p&&(u=p[1],f=p[3])}else f=r[3]?r[3].slice(1,-1):"";return u=u.trim(),/^</.test(u)&&(this.options.pedantic&&!/>$/.test(c)?u=u.slice(1):u=u.slice(1,-1)),yh(r,{href:u&&u.replace(this.rules.inline.anyPunctuation,"$1"),title:f&&f.replace(this.rules.inline.anyPunctuation,"$1")},r[0],this.lexer)}}reflink(i,r){let c;if((c=this.rules.inline.reflink.exec(i))||(c=this.rules.inline.nolink.exec(i))){const u=(c[2]||c[1]).replace(/\s+/g," "),f=r[u.toLowerCase()];if(!f){const p=c[0].charAt(0);return{type:"text",raw:p,text:p}}return yh(c,f,c[0],this.lexer)}}emStrong(i,r,c=""){let u=this.rules.inline.emStrongLDelim.exec(i);if(!u||u[3]&&c.match(/[\p{L}\p{N}]/u))return;if(!(u[1]||u[2]||"")||!c||this.rules.inline.punctuation.exec(c)){const p=[...u[0]].length-1;let m,g,v=p,y=0;const S=u[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(S.lastIndex=0,r=r.slice(-1*i.length+p);(u=S.exec(r))!=null;){if(m=u[1]||u[2]||u[3]||u[4]||u[5]||u[6],!m)continue;if(g=[...m].length,u[3]||u[4]){v+=g;continue}else if((u[5]||u[6])&&p%3&&!((p+g)%3)){y+=g;continue}if(v-=g,v>0)continue;g=Math.min(g,g+v+y);const A=[...u[0]][0].length,R=i.slice(0,p+u.index+A+g);if(Math.min(p,g)%2){const B=R.slice(1,-1);return{type:"em",raw:R,text:B,tokens:this.lexer.inlineTokens(B)}}const H=R.slice(2,-2);return{type:"strong",raw:R,text:H,tokens:this.lexer.inlineTokens(H)}}}}codespan(i){const r=this.rules.inline.code.exec(i);if(r){let c=r[2].replace(/\n/g," ");const u=/[^ ]/.test(c),f=/^ /.test(c)&&/ $/.test(c);return u&&f&&(c=c.substring(1,c.length-1)),c=Ht(c,!0),{type:"codespan",raw:r[0],text:c}}}br(i){const r=this.rules.inline.br.exec(i);if(r)return{type:"br",raw:r[0]}}del(i){const r=this.rules.inline.del.exec(i);if(r)return{type:"del",raw:r[0],text:r[2],tokens:this.lexer.inlineTokens(r[2])}}autolink(i){const r=this.rules.inline.autolink.exec(i);if(r){let c,u;return r[2]==="@"?(c=Ht(r[1]),u="mailto:"+c):(c=Ht(r[1]),u=c),{type:"link",raw:r[0],text:c,href:u,tokens:[{type:"text",raw:c,text:c}]}}}url(i){var c;let r;if(r=this.rules.inline.url.exec(i)){let u,f;if(r[2]==="@")u=Ht(r[0]),f="mailto:"+u;else{let p;do p=r[0],r[0]=((c=this.rules.inline._backpedal.exec(r[0]))==null?void 0:c[0])??"";while(p!==r[0]);u=Ht(r[0]),r[1]==="www."?f="http://"+r[0]:f=r[0]}return{type:"link",raw:r[0],text:u,href:f,tokens:[{type:"text",raw:u,text:u}]}}}inlineText(i){const r=this.rules.inline.text.exec(i);if(r){let c;return this.lexer.state.inRawBlock?c=r[0]:c=Ht(r[0]),{type:"text",raw:r[0],text:c}}}}const pv=/^(?: *(?:\n|$))+/,hv=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,gv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ki=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,mv=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Xh=/(?:[*+-]|\d{1,9}[.)])/,Gh=Me(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Xh).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),eu=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,vv=/^[^\n]+/,tu=/(?!\s*\])(?:\\.|[^\[\]\\])+/,bv=Me(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",tu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),yv=Me(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Xh).getRegex(),go="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",nu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,xv=Me("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",nu).replace("tag",go).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Qh=Me(eu).replace("hr",ki).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",go).getRegex(),Sv=Me(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Qh).getRegex(),au={blockquote:Sv,code:hv,def:bv,fences:gv,heading:mv,hr:ki,html:xv,lheading:Gh,list:yv,newline:pv,paragraph:Qh,table:Ti,text:vv},xh=Me("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ki).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",go).getRegex(),wv={...au,table:xh,paragraph:Me(eu).replace("hr",ki).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",xh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",go).getRegex()},Cv={...au,html:Me(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",nu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ti,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Me(eu).replace("hr",ki).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Gh).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Zh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Nv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Vh=/^( {2,}|\\)\n(?!\s*$)/,Tv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Oi="\\p{P}\\p{S}",Dv=Me(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Oi).getRegex(),Ev=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Av=Me(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Oi).getRegex(),zv=Me("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Oi).getRegex(),Rv=Me("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Oi).getRegex(),Mv=Me(/\\([punct])/,"gu").replace(/punct/g,Oi).getRegex(),kv=Me(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ov=Me(nu).replace("(?:-->|$)","-->").getRegex(),jv=Me("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ov).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),so=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,_v=Me(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",so).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Kh=Me(/^!?\[(label)\]\[(ref)\]/).replace("label",so).replace("ref",tu).getRegex(),Jh=Me(/^!?\[(ref)\](?:\[\])?/).replace("ref",tu).getRegex(),Uv=Me("reflink|nolink(?!\\()","g").replace("reflink",Kh).replace("nolink",Jh).getRegex(),lu={_backpedal:Ti,anyPunctuation:Mv,autolink:kv,blockSkip:Ev,br:Vh,code:Nv,del:Ti,emStrongLDelim:Av,emStrongRDelimAst:zv,emStrongRDelimUnd:Rv,escape:Zh,link:_v,nolink:Jh,punctuation:Dv,reflink:Kh,reflinkSearch:Uv,tag:jv,text:Tv,url:Ti},Hv={...lu,link:Me(/^!?\[(label)\]\((.*?)\)/).replace("label",so).getRegex(),reflink:Me(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",so).getRegex()},Vc={...lu,escape:Me(Zh).replace("])","~|])").getRegex(),url:Me(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Lv={...Vc,br:Me(Vh).replace("{2,}","*").getRegex(),text:Me(Vc.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},to={normal:au,gfm:wv,pedantic:Cv},Ci={normal:lu,gfm:Vc,breaks:Lv,pedantic:Hv};class vn{constructor(i){Oe(this,"tokens");Oe(this,"options");Oe(this,"state");Oe(this,"tokenizer");Oe(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=i||Ua,this.options.tokenizer=this.options.tokenizer||new io,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const r={block:to.normal,inline:Ci.normal};this.options.pedantic?(r.block=to.pedantic,r.inline=Ci.pedantic):this.options.gfm&&(r.block=to.gfm,this.options.breaks?r.inline=Ci.breaks:r.inline=Ci.gfm),this.tokenizer.rules=r}static get rules(){return{block:to,inline:Ci}}static lex(i,r){return new vn(r).lex(i)}static lexInline(i,r){return new vn(r).inlineTokens(i)}lex(i){i=i.replace(/\r\n|\r/g,`
`),this.blockTokens(i,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){const c=this.inlineQueue[r];this.inlineTokens(c.src,c.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(i,r=[],c=!1){this.options.pedantic?i=i.replace(/\t/g,"    ").replace(/^ +$/gm,""):i=i.replace(/^( *)(\t+)/gm,(m,g,v)=>g+"    ".repeat(v.length));let u,f,p;for(;i;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(m=>(u=m.call({lexer:this},i,r))?(i=i.substring(u.raw.length),r.push(u),!0):!1))){if(u=this.tokenizer.space(i)){i=i.substring(u.raw.length),u.raw.length===1&&r.length>0?r[r.length-1].raw+=`
`:r.push(u);continue}if(u=this.tokenizer.code(i)){i=i.substring(u.raw.length),f=r[r.length-1],f&&(f.type==="paragraph"||f.type==="text")?(f.raw+=`
`+u.raw,f.text+=`
`+u.text,this.inlineQueue[this.inlineQueue.length-1].src=f.text):r.push(u);continue}if(u=this.tokenizer.fences(i)){i=i.substring(u.raw.length),r.push(u);continue}if(u=this.tokenizer.heading(i)){i=i.substring(u.raw.length),r.push(u);continue}if(u=this.tokenizer.hr(i)){i=i.substring(u.raw.length),r.push(u);continue}if(u=this.tokenizer.blockquote(i)){i=i.substring(u.raw.length),r.push(u);continue}if(u=this.tokenizer.list(i)){i=i.substring(u.raw.length),r.push(u);continue}if(u=this.tokenizer.html(i)){i=i.substring(u.raw.length),r.push(u);continue}if(u=this.tokenizer.def(i)){i=i.substring(u.raw.length),f=r[r.length-1],f&&(f.type==="paragraph"||f.type==="text")?(f.raw+=`
`+u.raw,f.text+=`
`+u.raw,this.inlineQueue[this.inlineQueue.length-1].src=f.text):this.tokens.links[u.tag]||(this.tokens.links[u.tag]={href:u.href,title:u.title});continue}if(u=this.tokenizer.table(i)){i=i.substring(u.raw.length),r.push(u);continue}if(u=this.tokenizer.lheading(i)){i=i.substring(u.raw.length),r.push(u);continue}if(p=i,this.options.extensions&&this.options.extensions.startBlock){let m=1/0;const g=i.slice(1);let v;this.options.extensions.startBlock.forEach(y=>{v=y.call({lexer:this},g),typeof v=="number"&&v>=0&&(m=Math.min(m,v))}),m<1/0&&m>=0&&(p=i.substring(0,m+1))}if(this.state.top&&(u=this.tokenizer.paragraph(p))){f=r[r.length-1],c&&(f==null?void 0:f.type)==="paragraph"?(f.raw+=`
`+u.raw,f.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=f.text):r.push(u),c=p.length!==i.length,i=i.substring(u.raw.length);continue}if(u=this.tokenizer.text(i)){i=i.substring(u.raw.length),f=r[r.length-1],f&&f.type==="text"?(f.raw+=`
`+u.raw,f.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=f.text):r.push(u);continue}if(i){const m="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return this.state.top=!0,r}inline(i,r=[]){return this.inlineQueue.push({src:i,tokens:r}),r}inlineTokens(i,r=[]){let c,u,f,p=i,m,g,v;if(this.tokens.links){const y=Object.keys(this.tokens.links);if(y.length>0)for(;(m=this.tokenizer.rules.inline.reflinkSearch.exec(p))!=null;)y.includes(m[0].slice(m[0].lastIndexOf("[")+1,-1))&&(p=p.slice(0,m.index)+"["+"a".repeat(m[0].length-2)+"]"+p.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(m=this.tokenizer.rules.inline.blockSkip.exec(p))!=null;)p=p.slice(0,m.index)+"["+"a".repeat(m[0].length-2)+"]"+p.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(m=this.tokenizer.rules.inline.anyPunctuation.exec(p))!=null;)p=p.slice(0,m.index)+"++"+p.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;i;)if(g||(v=""),g=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(y=>(c=y.call({lexer:this},i,r))?(i=i.substring(c.raw.length),r.push(c),!0):!1))){if(c=this.tokenizer.escape(i)){i=i.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.tag(i)){i=i.substring(c.raw.length),u=r[r.length-1],u&&c.type==="text"&&u.type==="text"?(u.raw+=c.raw,u.text+=c.text):r.push(c);continue}if(c=this.tokenizer.link(i)){i=i.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.reflink(i,this.tokens.links)){i=i.substring(c.raw.length),u=r[r.length-1],u&&c.type==="text"&&u.type==="text"?(u.raw+=c.raw,u.text+=c.text):r.push(c);continue}if(c=this.tokenizer.emStrong(i,p,v)){i=i.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.codespan(i)){i=i.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.br(i)){i=i.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.del(i)){i=i.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.autolink(i)){i=i.substring(c.raw.length),r.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(i))){i=i.substring(c.raw.length),r.push(c);continue}if(f=i,this.options.extensions&&this.options.extensions.startInline){let y=1/0;const S=i.slice(1);let A;this.options.extensions.startInline.forEach(R=>{A=R.call({lexer:this},S),typeof A=="number"&&A>=0&&(y=Math.min(y,A))}),y<1/0&&y>=0&&(f=i.substring(0,y+1))}if(c=this.tokenizer.inlineText(f)){i=i.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(v=c.raw.slice(-1)),g=!0,u=r[r.length-1],u&&u.type==="text"?(u.raw+=c.raw,u.text+=c.text):r.push(c);continue}if(i){const y="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return r}}class oo{constructor(i){Oe(this,"options");Oe(this,"parser");this.options=i||Ua}space(i){return""}code({text:i,lang:r,escaped:c}){var p;const u=(p=(r||"").match(/^\S*/))==null?void 0:p[0],f=i.replace(/\n$/,"")+`
`;return u?'<pre><code class="language-'+Ht(u)+'">'+(c?f:Ht(f,!0))+`</code></pre>
`:"<pre><code>"+(c?f:Ht(f,!0))+`</code></pre>
`}blockquote({tokens:i}){return`<blockquote>
${this.parser.parse(i)}</blockquote>
`}html({text:i}){return i}heading({tokens:i,depth:r}){return`<h${r}>${this.parser.parseInline(i)}</h${r}>
`}hr(i){return`<hr>
`}list(i){const r=i.ordered,c=i.start;let u="";for(let m=0;m<i.items.length;m++){const g=i.items[m];u+=this.listitem(g)}const f=r?"ol":"ul",p=r&&c!==1?' start="'+c+'"':"";return"<"+f+p+`>
`+u+"</"+f+`>
`}listitem(i){let r="";if(i.task){const c=this.checkbox({checked:!!i.checked});i.loose?i.tokens.length>0&&i.tokens[0].type==="paragraph"?(i.tokens[0].text=c+" "+i.tokens[0].text,i.tokens[0].tokens&&i.tokens[0].tokens.length>0&&i.tokens[0].tokens[0].type==="text"&&(i.tokens[0].tokens[0].text=c+" "+i.tokens[0].tokens[0].text)):i.tokens.unshift({type:"text",raw:c+" ",text:c+" "}):r+=c+" "}return r+=this.parser.parse(i.tokens,!!i.loose),`<li>${r}</li>
`}checkbox({checked:i}){return"<input "+(i?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:i}){return`<p>${this.parser.parseInline(i)}</p>
`}table(i){let r="",c="";for(let f=0;f<i.header.length;f++)c+=this.tablecell(i.header[f]);r+=this.tablerow({text:c});let u="";for(let f=0;f<i.rows.length;f++){const p=i.rows[f];c="";for(let m=0;m<p.length;m++)c+=this.tablecell(p[m]);u+=this.tablerow({text:c})}return u&&(u=`<tbody>${u}</tbody>`),`<table>
<thead>
`+r+`</thead>
`+u+`</table>
`}tablerow({text:i}){return`<tr>
${i}</tr>
`}tablecell(i){const r=this.parser.parseInline(i.tokens),c=i.header?"th":"td";return(i.align?`<${c} align="${i.align}">`:`<${c}>`)+r+`</${c}>
`}strong({tokens:i}){return`<strong>${this.parser.parseInline(i)}</strong>`}em({tokens:i}){return`<em>${this.parser.parseInline(i)}</em>`}codespan({text:i}){return`<code>${i}</code>`}br(i){return"<br>"}del({tokens:i}){return`<del>${this.parser.parseInline(i)}</del>`}link({href:i,title:r,tokens:c}){const u=this.parser.parseInline(c),f=vh(i);if(f===null)return u;i=f;let p='<a href="'+i+'"';return r&&(p+=' title="'+r+'"'),p+=">"+u+"</a>",p}image({href:i,title:r,text:c}){const u=vh(i);if(u===null)return c;i=u;let f=`<img src="${i}" alt="${c}"`;return r&&(f+=` title="${r}"`),f+=">",f}text(i){return"tokens"in i&&i.tokens?this.parser.parseInline(i.tokens):i.text}}class iu{strong({text:i}){return i}em({text:i}){return i}codespan({text:i}){return i}del({text:i}){return i}html({text:i}){return i}text({text:i}){return i}link({text:i}){return""+i}image({text:i}){return""+i}br(){return""}}class bn{constructor(i){Oe(this,"options");Oe(this,"renderer");Oe(this,"textRenderer");this.options=i||Ua,this.options.renderer=this.options.renderer||new oo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new iu}static parse(i,r){return new bn(r).parse(i)}static parseInline(i,r){return new bn(r).parseInline(i)}parse(i,r=!0){let c="";for(let u=0;u<i.length;u++){const f=i[u];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]){const m=f,g=this.options.extensions.renderers[m.type].call({parser:this},m);if(g!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(m.type)){c+=g||"";continue}}const p=f;switch(p.type){case"space":{c+=this.renderer.space(p);continue}case"hr":{c+=this.renderer.hr(p);continue}case"heading":{c+=this.renderer.heading(p);continue}case"code":{c+=this.renderer.code(p);continue}case"table":{c+=this.renderer.table(p);continue}case"blockquote":{c+=this.renderer.blockquote(p);continue}case"list":{c+=this.renderer.list(p);continue}case"html":{c+=this.renderer.html(p);continue}case"paragraph":{c+=this.renderer.paragraph(p);continue}case"text":{let m=p,g=this.renderer.text(m);for(;u+1<i.length&&i[u+1].type==="text";)m=i[++u],g+=`
`+this.renderer.text(m);r?c+=this.renderer.paragraph({type:"paragraph",raw:g,text:g,tokens:[{type:"text",raw:g,text:g}]}):c+=g;continue}default:{const m='Token with "'+p.type+'" type was not found.';if(this.options.silent)return console.error(m),"";throw new Error(m)}}}return c}parseInline(i,r){r=r||this.renderer;let c="";for(let u=0;u<i.length;u++){const f=i[u];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]){const m=this.options.extensions.renderers[f.type].call({parser:this},f);if(m!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(f.type)){c+=m||"";continue}}const p=f;switch(p.type){case"escape":{c+=r.text(p);break}case"html":{c+=r.html(p);break}case"link":{c+=r.link(p);break}case"image":{c+=r.image(p);break}case"strong":{c+=r.strong(p);break}case"em":{c+=r.em(p);break}case"codespan":{c+=r.codespan(p);break}case"br":{c+=r.br(p);break}case"del":{c+=r.del(p);break}case"text":{c+=r.text(p);break}default:{const m='Token with "'+p.type+'" type was not found.';if(this.options.silent)return console.error(m),"";throw new Error(m)}}}return c}}class Di{constructor(i){Oe(this,"options");this.options=i||Ua}preprocess(i){return i}postprocess(i){return i}processAllTokens(i){return i}}Oe(Di,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Yn,$h,Kc,Ih;class Bv{constructor(...i){ih(this,Yn);Oe(this,"defaults",Pc());Oe(this,"options",this.setOptions);Oe(this,"parse",yi(this,Yn,Kc).call(this,vn.lex,bn.parse));Oe(this,"parseInline",yi(this,Yn,Kc).call(this,vn.lexInline,bn.parseInline));Oe(this,"Parser",bn);Oe(this,"Renderer",oo);Oe(this,"TextRenderer",iu);Oe(this,"Lexer",vn);Oe(this,"Tokenizer",io);Oe(this,"Hooks",Di);this.use(...i)}walkTokens(i,r){var u,f;let c=[];for(const p of i)switch(c=c.concat(r.call(this,p)),p.type){case"table":{const m=p;for(const g of m.header)c=c.concat(this.walkTokens(g.tokens,r));for(const g of m.rows)for(const v of g)c=c.concat(this.walkTokens(v.tokens,r));break}case"list":{const m=p;c=c.concat(this.walkTokens(m.items,r));break}default:{const m=p;(f=(u=this.defaults.extensions)==null?void 0:u.childTokens)!=null&&f[m.type]?this.defaults.extensions.childTokens[m.type].forEach(g=>{const v=m[g].flat(1/0);c=c.concat(this.walkTokens(v,r))}):m.tokens&&(c=c.concat(this.walkTokens(m.tokens,r)))}}return c}use(...i){const r=this.defaults.extensions||{renderers:{},childTokens:{}};return i.forEach(c=>{const u={...c};if(u.async=this.defaults.async||u.async||!1,c.extensions&&(c.extensions.forEach(f=>{if(!f.name)throw new Error("extension name required");if("renderer"in f){const p=r.renderers[f.name];p?r.renderers[f.name]=function(...m){let g=f.renderer.apply(this,m);return g===!1&&(g=p.apply(this,m)),g}:r.renderers[f.name]=f.renderer}if("tokenizer"in f){if(!f.level||f.level!=="block"&&f.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const p=r[f.level];p?p.unshift(f.tokenizer):r[f.level]=[f.tokenizer],f.start&&(f.level==="block"?r.startBlock?r.startBlock.push(f.start):r.startBlock=[f.start]:f.level==="inline"&&(r.startInline?r.startInline.push(f.start):r.startInline=[f.start]))}"childTokens"in f&&f.childTokens&&(r.childTokens[f.name]=f.childTokens)}),u.extensions=r),c.renderer){const f=this.defaults.renderer||new oo(this.defaults);for(const p in c.renderer){if(!(p in f))throw new Error(`renderer '${p}' does not exist`);if(["options","parser"].includes(p))continue;const m=p;let g=c.renderer[m];c.useNewRenderer||(g=yi(this,Yn,$h).call(this,g,m,f));const v=f[m];f[m]=(...y)=>{let S=g.apply(f,y);return S===!1&&(S=v.apply(f,y)),S||""}}u.renderer=f}if(c.tokenizer){const f=this.defaults.tokenizer||new io(this.defaults);for(const p in c.tokenizer){if(!(p in f))throw new Error(`tokenizer '${p}' does not exist`);if(["options","rules","lexer"].includes(p))continue;const m=p,g=c.tokenizer[m],v=f[m];f[m]=(...y)=>{let S=g.apply(f,y);return S===!1&&(S=v.apply(f,y)),S}}u.tokenizer=f}if(c.hooks){const f=this.defaults.hooks||new Di;for(const p in c.hooks){if(!(p in f))throw new Error(`hook '${p}' does not exist`);if(p==="options")continue;const m=p,g=c.hooks[m],v=f[m];Di.passThroughHooks.has(p)?f[m]=y=>{if(this.defaults.async)return Promise.resolve(g.call(f,y)).then(A=>v.call(f,A));const S=g.call(f,y);return v.call(f,S)}:f[m]=(...y)=>{let S=g.apply(f,y);return S===!1&&(S=v.apply(f,y)),S}}u.hooks=f}if(c.walkTokens){const f=this.defaults.walkTokens,p=c.walkTokens;u.walkTokens=function(m){let g=[];return g.push(p.call(this,m)),f&&(g=g.concat(f.call(this,m))),g}}this.defaults={...this.defaults,...u}}),this}setOptions(i){return this.defaults={...this.defaults,...i},this}lexer(i,r){return vn.lex(i,r??this.defaults)}parser(i,r){return bn.parse(i,r??this.defaults)}}Yn=new WeakSet,$h=function(i,r,c){switch(r){case"heading":return function(u){return!u.type||u.type!==r?i.apply(this,arguments):i.call(this,c.parser.parseInline(u.tokens),u.depth,cv(c.parser.parseInline(u.tokens,c.parser.textRenderer)))};case"code":return function(u){return!u.type||u.type!==r?i.apply(this,arguments):i.call(this,u.text,u.lang,!!u.escaped)};case"table":return function(u){if(!u.type||u.type!==r)return i.apply(this,arguments);let f="",p="";for(let g=0;g<u.header.length;g++)p+=this.tablecell({text:u.header[g].text,tokens:u.header[g].tokens,header:!0,align:u.align[g]});f+=this.tablerow({text:p});let m="";for(let g=0;g<u.rows.length;g++){const v=u.rows[g];p="";for(let y=0;y<v.length;y++)p+=this.tablecell({text:v[y].text,tokens:v[y].tokens,header:!1,align:u.align[y]});m+=this.tablerow({text:p})}return i.call(this,f,m)};case"blockquote":return function(u){if(!u.type||u.type!==r)return i.apply(this,arguments);const f=this.parser.parse(u.tokens);return i.call(this,f)};case"list":return function(u){if(!u.type||u.type!==r)return i.apply(this,arguments);const f=u.ordered,p=u.start,m=u.loose;let g="";for(let v=0;v<u.items.length;v++){const y=u.items[v],S=y.checked,A=y.task;let R="";if(y.task){const H=this.checkbox({checked:!!S});m?y.tokens.length>0&&y.tokens[0].type==="paragraph"?(y.tokens[0].text=H+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&y.tokens[0].tokens[0].type==="text"&&(y.tokens[0].tokens[0].text=H+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:H+" "}):R+=H+" "}R+=this.parser.parse(y.tokens,m),g+=this.listitem({type:"list_item",raw:R,text:R,task:A,checked:!!S,loose:m,tokens:y.tokens})}return i.call(this,g,f,p)};case"html":return function(u){return!u.type||u.type!==r?i.apply(this,arguments):i.call(this,u.text,u.block)};case"paragraph":return function(u){return!u.type||u.type!==r?i.apply(this,arguments):i.call(this,this.parser.parseInline(u.tokens))};case"escape":return function(u){return!u.type||u.type!==r?i.apply(this,arguments):i.call(this,u.text)};case"link":return function(u){return!u.type||u.type!==r?i.apply(this,arguments):i.call(this,u.href,u.title,this.parser.parseInline(u.tokens))};case"image":return function(u){return!u.type||u.type!==r?i.apply(this,arguments):i.call(this,u.href,u.title,u.text)};case"strong":return function(u){return!u.type||u.type!==r?i.apply(this,arguments):i.call(this,this.parser.parseInline(u.tokens))};case"em":return function(u){return!u.type||u.type!==r?i.apply(this,arguments):i.call(this,this.parser.parseInline(u.tokens))};case"codespan":return function(u){return!u.type||u.type!==r?i.apply(this,arguments):i.call(this,u.text)};case"del":return function(u){return!u.type||u.type!==r?i.apply(this,arguments):i.call(this,this.parser.parseInline(u.tokens))};case"text":return function(u){return!u.type||u.type!==r?i.apply(this,arguments):i.call(this,u.text)}}return i},Kc=function(i,r){return(c,u)=>{const f={...u},p={...this.defaults,...f};this.defaults.async===!0&&f.async===!1&&(p.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),p.async=!0);const m=yi(this,Yn,Ih).call(this,!!p.silent,!!p.async);if(typeof c>"u"||c===null)return m(new Error("marked(): input parameter is undefined or null"));if(typeof c!="string")return m(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(c)+", string expected"));if(p.hooks&&(p.hooks.options=p),p.async)return Promise.resolve(p.hooks?p.hooks.preprocess(c):c).then(g=>i(g,p)).then(g=>p.hooks?p.hooks.processAllTokens(g):g).then(g=>p.walkTokens?Promise.all(this.walkTokens(g,p.walkTokens)).then(()=>g):g).then(g=>r(g,p)).then(g=>p.hooks?p.hooks.postprocess(g):g).catch(m);try{p.hooks&&(c=p.hooks.preprocess(c));let g=i(c,p);p.hooks&&(g=p.hooks.processAllTokens(g)),p.walkTokens&&this.walkTokens(g,p.walkTokens);let v=r(g,p);return p.hooks&&(v=p.hooks.postprocess(v)),v}catch(g){return m(g)}}},Ih=function(i,r){return c=>{if(c.message+=`
Please report this to https://github.com/markedjs/marked.`,i){const u="<p>An error occurred:</p><pre>"+Ht(c.message+"",!0)+"</pre>";return r?Promise.resolve(u):u}if(r)return Promise.reject(c);throw c}};const _a=new Bv;function Ee(o,i){return _a.parse(o,i)}Ee.options=Ee.setOptions=function(o){return _a.setOptions(o),Ee.defaults=_a.defaults,Bh(Ee.defaults),Ee};Ee.getDefaults=Pc;Ee.defaults=Ua;Ee.use=function(...o){return _a.use(...o),Ee.defaults=_a.defaults,Bh(Ee.defaults),Ee};Ee.walkTokens=function(o,i){return _a.walkTokens(o,i)};Ee.parseInline=_a.parseInline;Ee.Parser=bn;Ee.parser=bn.parse;Ee.Renderer=oo;Ee.TextRenderer=iu;Ee.Lexer=vn;Ee.lexer=vn.lex;Ee.Tokenizer=io;Ee.Hooks=Di;Ee.parse=Ee;Ee.options;Ee.setOptions;Ee.use;Ee.walkTokens;Ee.parseInline;bn.parse;vn.lex;const qv=`/* ================================================================
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
`,Yv=`/* ============================================================
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
`,Xv=`// Icons used across the prototype — small inline SVGs matching Ennabl's icon style
// (24×24 monochrome, currentColor, 2px stroke or filled).

const Icon = ({ children, size = 16, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const IconCheck = (p) => <Icon {...p}><path d="M5 12.5l4 4L19 7" /></Icon>;
const IconChevronDown = (p) => <Icon {...p}><path d="M6 9l6 6 6-6" /></Icon>;
const IconChevronUp = (p) => <Icon {...p}><path d="M6 15l6-6 6 6" /></Icon>;
const IconPlus = (p) => <Icon {...p}><path d="M12 5v14M5 12h14" /></Icon>;
const IconEdit = (p) => <Icon {...p}><path d="M4 20h4l10.5-10.5a2.121 2.121 0 0 0-3-3L5 17v3z" /><path d="M13.5 6.5l4 4" /></Icon>;
const IconTrash = ({ size = 16, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={style}>
    <path d="M10.631 3C9.51243 3 8.59091 3.9357 8.59091 5.07151V5.76923H4.5V7.15385H5.86364V18.9231C5.86364 20.0643 6.78516 21 7.90909 21H16.0909C17.2148 21 18.1364 20.0643 18.1364 18.9231V7.15385H19.5V5.76923H15.4091V5.07151C15.4091 3.9357 14.4876 3 13.369 3H10.631ZM10.631 4.38462H13.369C13.7525 4.38462 14.0455 4.68209 14.0455 5.07151V5.76923H9.95455V5.07151C9.95455 4.68209 10.2475 4.38462 10.631 4.38462ZM7.22727 7.15385H16.7727V18.9231C16.7727 19.3125 16.4744 19.6154 16.0909 19.6154H7.90909C7.52557 19.6154 7.22727 19.3125 7.22727 18.9231V7.15385ZM8.59091 8.53846V18.2308H9.95455V8.53846H8.59091ZM11.3182 8.53846V18.2308H12.6818V8.53846H11.3182ZM14.0455 8.53846V18.2308H15.4091V8.53846H14.0455Z" />
  </svg>
);
const IconGear = (p) => <Icon {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></Icon>;
const IconSearch = (p) => <Icon {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Icon>;
const IconStar = ({ filled = false, size = 14, style }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none"
    stroke="currentColor" strokeWidth={filled ? 0.5 : 1.2}
    strokeLinecap="round" aria-hidden="true" style={style}>
    {filled && (
      <path
        d="M8.94297 4.83396L8.87169 2.99187C8.8589 2.66133 9.25828 2.48678 9.49218 2.72068L13.2706 6.49908C13.5045 6.73298 13.3299 7.13236 12.9994 7.11957L11.1573 7.04829C11.0445 7.04392 10.936 7.09223 10.8637 7.17902L9.41102 8.92437C9.36055 8.985 9.33117 9.06041 9.32731 9.1392L9.23269 11.0704C9.21725 11.3854 8.83542 11.5328 8.61236 11.3097L4.68155 7.3789C4.45849 7.15584 4.60581 6.774 4.92088 6.75857L6.85205 6.66395C6.93085 6.66008 7.00625 6.6307 7.06689 6.58024L8.81224 5.12751C8.89903 5.05527 8.94734 4.9468 8.94297 4.83396Z"
        fill="currentColor"
      />
    )}
    <path
      d="M6.52393 9.39399L2.61328 13.378M8.87169 2.99187L8.94297 4.83396C8.94734 4.9468 8.89903 5.05527 8.81224 5.12751L7.06689 6.58024C7.00625 6.6307 6.93085 6.66008 6.85205 6.66395L4.92088 6.75857C4.60581 6.774 4.45849 7.15584 4.68155 7.3789L8.61236 11.3097C8.83542 11.5328 9.21725 11.3854 9.23269 11.0704L9.32731 9.1392C9.33117 9.06041 9.36055 8.985 9.41102 8.92437L10.8637 7.17902C10.936 7.09223 11.0445 7.04392 11.1573 7.04829L12.9994 7.11957C13.3299 7.13236 13.5045 6.73298 13.2706 6.49908L9.49218 2.72068C9.25828 2.48678 8.8589 2.66133 8.87169 2.99187Z"
    />
  </svg>
);
const IconCopy = (p) => <Icon {...p}><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></Icon>;
const IconClose = (p) => <Icon {...p}><path d="M6 6l12 12M18 6L6 18" /></Icon>;
const IconMore = (p) => <Icon {...p}><circle cx="12" cy="5" r="1.4" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /><circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none" /></Icon>;
const IconShare = (p) => <Icon {...p}><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="M8.2 10.7l7.6-4.4M8.2 13.3l7.6 4.4" /></Icon>;
const IconExternal = (p) => <Icon {...p}><path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" /><path d="M14 4h6v6" /><path d="M10 14L20 4" /></Icon>;
const IconRevert = (p) => <Icon {...p}><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></Icon>;
const IconUsers = (p) => <Icon {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2 20c.5-3.5 3.5-6 7-6s6.5 2.5 7 6" /><path d="M17 11a3 3 0 1 0 0-6" /><path d="M22 20c-.3-2.4-1.9-4.4-4-5.4" /></Icon>;
const IconInfo = (p) => <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><circle cx="12" cy="8" r="0.6" fill="currentColor" stroke="none" /></Icon>;
const IconUpload = (p) => <Icon {...p}><path d="M12 16V4" /><path d="M7 9l5-5 5 5" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /></Icon>;

// Filled variants for menu items (match the supplied SVGs)
const IconEditFill = ({ size = 16, style }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" style={style}>
    <path d="M12.2031 1.004C11.8789 1.0079 11.5547 1.1329 11.3125 1.3829L6.64844 6.12509L5.95312 9.04697L8.875 8.35166L8.97656 8.25791L13.6211 3.68759C14.1172 3.20322 14.125 2.38681 13.6289 1.89462L13.1055 1.36728C12.8594 1.12119 12.5312 1.00009 12.2031 1.004ZM12.2109 1.99619C12.2773 1.99619 12.3438 2.02353 12.3984 2.07822L12.9219 2.60165C13.0312 2.70712 13.0312 2.86728 12.9219 2.97665L8.375 7.4454L7.29688 7.70322L7.55469 6.62509L12.0273 2.07822C12.0781 2.02353 12.1445 1.99619 12.2109 1.99619ZM3 2.00009C1.89453 2.00009 1 2.89462 1 4.00009V12.0001C1 13.1056 1.89453 14.0001 3 14.0001H11C12.1055 14.0001 13 13.1056 13 12.0001V5.70322L12 6.68759V12.0001C12 12.5509 11.5508 13.0001 11 13.0001H3C2.44922 13.0001 2 12.5509 2 12.0001V4.00009C2 3.44931 2.44922 3.00009 3 3.00009H8.32031L9.30469 2.00009H3Z" fill="currentColor" />
  </svg>
);
const IconTrashFill = ({ size = 16, style }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" style={style}>
    <path d="M7.08736 2C6.34162 2 5.72727 2.6238 5.72727 3.38101V3.84615H3V4.76923H3.90909V12.6154C3.90909 13.3762 4.52344 14 5.27273 14H10.7273C11.4766 14 12.0909 13.3762 12.0909 12.6154V4.76923H13V3.84615H10.2727V3.38101C10.2727 2.6238 9.65838 2 8.91264 2H7.08736ZM7.08736 2.92308H8.91264C9.16832 2.92308 9.36364 3.12139 9.36364 3.38101V3.84615H6.63636V3.38101C6.63636 3.12139 6.83168 2.92308 7.08736 2.92308ZM4.81818 4.76923H11.1818V12.6154C11.1818 12.875 10.983 13.0769 10.7273 13.0769H5.27273C5.01705 13.0769 4.81818 12.875 4.81818 12.6154V4.76923ZM5.72727 5.69231V12.1538H6.63636V5.69231H5.72727ZM7.54545 5.69231V12.1538H8.45455V5.69231H7.54545ZM9.36364 5.69231V12.1538H10.2727V5.69231H9.36364Z" fill="currentColor" />
  </svg>
);

Object.assign(window, {
  IconCheck, IconChevronDown, IconChevronUp, IconPlus, IconEdit, IconTrash,
  IconGear, IconSearch, IconStar, IconCopy, IconClose, IconMore, IconShare,
  IconExternal, IconRevert, IconUsers, IconInfo, IconUpload,
  IconEditFill, IconTrashFill,
});
`,Gv=`// Template picker — trigger button + dropdown menu with search,
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
`,Qv=`// Modals — Save-as-template dialog, Save-changes confirm, Manage modal.

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
`,Zv=`// Step 3 body — Producer Team table + Additional Information block.
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
`,Vv=qv.replace(/@font-face\s*\{[^}]*\}/g,""),Kv=`
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
<\/script>`;function Jv(o){return`<!doctype html>
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
  <style>${Vv}</style>
  <style>${Yv}</style>
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
  ${Kv}
</head>
<body>
  <div id="root"></div>
  <div id="__err"></div>
  <script type="text/babel">
${Xv}
  <\/script>
  <script type="text/babel">
${Gv}
  <\/script>
  <script type="text/babel">
${Qv}
  <\/script>
  <script type="text/babel">
${Zv}
  <\/script>
  <script type="text/babel">
${o}

try {
  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
} catch(e) {
  var el = document.getElementById('__err');
  if (el) { el.textContent = e.stack || e.message; el.className = 'show'; }
}
  <\/script>
</body>
</html>`}function $v({code:o,prd:i,onInitDesign:r}){const c=T.useRef(null),[u,f]=T.useState("preview"),[p,m]=T.useState("#/"),[g,v]=T.useState("#/"),[y,S]=T.useState(["#/"]),[A,R]=T.useState(0);T.useEffect(()=>{function J(L){var $;if((($=L.data)==null?void 0:$.type)!=="__route")return;const Q=L.data.path||"#/";m(Q),v(Q),S(V=>{const q=V.slice(0,A+1);return q[q.length-1]===Q?q:[...q,Q]}),R(V=>V+1)}return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[A]),T.useEffect(()=>{!c.current||!o||(m("#/"),v("#/"),S(["#/"]),R(0),c.current.srcdoc=Jv(o))},[o]);function H(J){var L,Q,$,V,q;(Q=(L=c.current)==null?void 0:L.contentWindow)==null||Q.postMessage({type:"__navigate",path:J},"*");try{($=c.current)!=null&&$.contentWindow&&((q=(V=c.current.contentWindow).__navigate)==null||q.call(V,J))}catch{}}function B(){if(A<=0)return;const J=y[A-1];R(L=>L-1),m(J),v(J),H(J)}function K(){if(A>=y.length-1)return;const J=y[A+1];R(L=>L+1),m(J),v(J),H(J)}function X(J){J.preventDefault(),H(g)}return o?b.jsxs("div",{className:"canvas canvas--live",children:[b.jsxs("div",{className:"canvas-toolbar",children:[b.jsxs("div",{className:"canvas-view-tabs",children:[b.jsx("button",{className:`canvas-view-tab ${u==="preview"?"active":""}`,onClick:()=>f("preview"),children:"Preview"}),b.jsx("button",{className:`canvas-view-tab ${u==="code"?"active":""}`,onClick:()=>f("code"),children:"Code"})]}),u==="preview"&&b.jsxs("div",{className:"canvas-urlbar",children:[b.jsx("button",{className:"canvas-nav-btn",onClick:B,disabled:A<=0,title:"Back",children:"←"}),b.jsx("button",{className:"canvas-nav-btn",onClick:K,disabled:A>=y.length-1,title:"Forward",children:"→"}),b.jsx("form",{className:"canvas-url-form",onSubmit:X,children:b.jsx("input",{className:"canvas-url-input",value:g,onChange:J=>v(J.target.value),spellCheck:!1})})]}),b.jsx("button",{className:"canvas-copy-btn",onClick:()=>navigator.clipboard.writeText(o),children:"copy"})]}),b.jsxs("div",{className:"canvas-body",children:[b.jsx("iframe",{ref:c,className:"canvas-iframe",style:{display:u==="preview"?"block":"none"},title:"design preview",sandbox:"allow-scripts allow-same-origin"}),u==="code"&&b.jsx("pre",{className:"canvas-code",children:b.jsx("code",{children:o})})]})]}):b.jsx("div",{className:"canvas canvas--empty",children:i?b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"canvas-empty-icon",children:"✦"}),b.jsx("p",{className:"canvas-empty-title",children:i.name}),b.jsx("span",{className:"canvas-empty-sub",children:"PRD loaded — ready to generate"}),b.jsx("button",{className:"canvas-init-btn",onClick:r,children:"Init Design"})]}):b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"canvas-empty-icon",children:"◎"}),b.jsx("p",{className:"canvas-empty-title",children:"No PRD loaded"}),b.jsx("span",{className:"canvas-empty-sub",children:"Open a PRD from Projects to start"})]})})}const Fh="ennabl_builder_history",Iv=50;function Fv(){try{return JSON.parse(localStorage.getItem(Fh)||"[]")}catch{return[]}}function Sh(o){localStorage.setItem(Fh,JSON.stringify(o.slice(0,Iv)))}function Wv({prdName:o,code:i,iteration:r}){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,timestamp:new Date().toISOString(),prdName:o,code:i,iteration:r}}function Pv(o){const r=`${o.prdName.replace(/\.md$/i,"").replace(/[^a-z0-9]/gi,"-").toLowerCase()}-v${o.iteration}.jsx`,c=`/**
 * ennabl builder — generated component
 * PRD: ${o.prdName}  |  iteration: ${o.iteration}
 * ${new Date(o.timestamp).toLocaleString()}
 *
 * Globals expected:
 *   - React 18 UMD (window.React, window.ReactDOM)
 *   - ennabl design system CSS (--en-* variables)
 *   - icons.jsx globals (IconCheck, IconClose, …)
 *   - shared globals (Scrim, CollapsibleSection, EditableField, …)
 */

${o.code}
`,u=new Blob([c],{type:"text/plain"}),f=URL.createObjectURL(u);Object.assign(document.createElement("a"),{href:f,download:r}).click(),URL.revokeObjectURL(f)}function eb(o){const i=Math.floor((Date.now()-new Date(o))/6e4);if(i<1)return"just now";if(i<60)return`${i}m ago`;const r=Math.floor(i/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}function tb(o){return o.split(`
`).slice(0,3).join(`
`).slice(0,140)}function nb({entries:o,onClear:i}){const[r,c]=T.useState(null);function u(f){navigator.clipboard.writeText(f.code),c(f.id),setTimeout(()=>c(null),2e3)}return o.length===0?b.jsxs("div",{className:"sb-empty",children:[b.jsx("p",{children:"No components yet"}),b.jsx("span",{children:"Each generated UI is logged here. Download or copy the JSX to use in your codebase."})]}):b.jsxs("div",{className:"sb-tab",children:[b.jsxs("div",{className:"sb-toolbar",children:[b.jsxs("span",{className:"sb-count",children:[o.length," snapshot",o.length!==1?"s":""]}),b.jsx("button",{className:"sb-clear",onClick:i,children:"clear all"})]}),b.jsx("div",{className:"sb-list",children:o.map(f=>b.jsxs("div",{className:"sb-entry",children:[b.jsxs("div",{className:"sb-entry-top",children:[b.jsx("span",{className:"sb-entry-name",children:f.prdName.replace(/\.md$/i,"")}),b.jsxs("span",{className:"sb-entry-badge",children:["v",f.iteration]}),b.jsx("span",{className:"sb-entry-time",children:eb(f.timestamp)})]}),b.jsx("pre",{className:"sb-entry-code",children:tb(f.code)}),b.jsxs("div",{className:"sb-entry-actions",children:[b.jsx("button",{className:"sb-btn",onClick:()=>u(f),children:r===f.id?"✓ copied":"copy"}),b.jsx("button",{className:"sb-btn sb-btn--primary",onClick:()=>Pv(f),children:"↓ .jsx"})]})]},f.id))})]})}function ab({entries:o}){return b.jsx("div",{className:"figma-tab",children:b.jsxs("div",{className:"figma-coming",children:[b.jsx("div",{className:"figma-icon",children:"◈"}),b.jsx("p",{children:"Figma sync"}),b.jsx("span",{children:"Will push each generated component into your Figma file as a frame — auto-named by PRD and iteration, grouped in a dedicated page. Requires a Figma access token."}),b.jsx("div",{className:"figma-queue",children:o.length>0?b.jsxs(b.Fragment,{children:[b.jsxs("span",{className:"figma-queue-label",children:[o.length," snapshot",o.length!==1?"s":""," queued"]}),b.jsx("button",{className:"figma-btn",disabled:!0,children:"Connect Figma to push"})]}):b.jsx("span",{className:"figma-queue-label",children:"Generate a UI first"})})]})})}function lb({code:o,prd:i,history:r,onHistoryClear:c,onInitDesign:u}){const[f,p]=T.useState("design");return b.jsxs("div",{className:"left-panel",children:[b.jsxs("div",{className:"left-tabs",children:[b.jsx("button",{className:`left-tab ${f==="design"?"left-tab--active":""}`,onClick:()=>p("design"),children:"Design"}),b.jsx("button",{className:`left-tab ${f==="prd"?"left-tab--active":""} ${i?"":"left-tab--disabled"}`,onClick:()=>i&&p("prd"),children:i?i.name:"PRD"}),b.jsxs("button",{className:`left-tab ${f==="storybook"?"left-tab--active":""}`,onClick:()=>p("storybook"),children:["Storybook",r.length>0&&b.jsx("span",{className:"left-tab-count",children:r.length})]}),b.jsx("button",{className:`left-tab ${f==="figma"?"left-tab--active":""}`,onClick:()=>p("figma"),children:"Figma"})]}),b.jsxs("div",{className:"left-content",children:[b.jsx("div",{className:`left-canvas-wrap ${f!=="design"?"left-canvas-wrap--hidden":""}`,children:b.jsx($v,{code:o,prd:i,onInitDesign:u})}),f==="prd"&&i&&b.jsx("div",{className:"prd-view",dangerouslySetInnerHTML:{__html:Ee.parse(i.content)}}),f==="prd"&&!i&&b.jsx("div",{className:"prd-empty",children:"No PRD loaded"}),f==="storybook"&&b.jsx(nb,{entries:r,onClear:c}),f==="figma"&&b.jsx(ab,{entries:r})]})]})}const Wh="ennabl_builder_api_key",Ph=()=>localStorage.getItem(Wh)||"",ib=o=>localStorage.setItem(Wh,o.trim()),eg="ennabl_builder_model",sb=[{id:"claude-haiku-4-5-20251001",label:"Haiku",note:"dev / fast"},{id:"claude-sonnet-4-6",label:"Sonnet",note:"balanced"},{id:"claude-opus-4-7",label:"Opus",note:"prod / best"}],ob="claude-haiku-4-5-20251001",tg=()=>localStorage.getItem(eg)||ob,rb=o=>localStorage.setItem(eg,o),cb=`# ennabl Design Tokens

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
`,ub=`# ennabl Component Patterns

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
`,db=`# ennabl Shared Components

These components are available as globals in the preview. Use them directly — no imports needed.

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

## Usage notes

- All shared components use global React (\`const { useState } = React\` — no imports)
- All shared components use the ennabl CSS classes and \`--en-*\` variables
- Wrap dialogs/modals in a fragment after the main content — they render to fixed position overlays
- The \`Scrim\` component is the modal backdrop — used internally by dialogs, rarely needed directly
`,fb=`You are an expert UI engineer for ennabl, an insurance analytics platform for insurance agencies and brokers.

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

## Available globals in the preview

React hooks: \`useState\`, \`useEffect\`, \`useMemo\`, \`useCallback\`, \`useRef\`
Icons (all global): \`IconCheck\`, \`IconChevronDown\`, \`IconChevronUp\`, \`IconPlus\`, \`IconEdit\`, \`IconTrash\`, \`IconGear\`, \`IconSearch\`, \`IconStar\`, \`IconCopy\`, \`IconClose\`, \`IconMore\`, \`IconShare\`, \`IconRevert\`, \`IconUsers\`, \`IconInfo\`, \`IconUpload\`
Charts: \`Recharts\` global — destructure \`BarChart\`, \`LineChart\`, \`PieChart\`, \`ResponsiveContainer\`, etc.
Design system CSS (\`--en-*\` vars + \`.en-*\` classes): loaded globally, use freely

## Design tokens

${cb}

## Component patterns

${ub}

## Shared components (available as globals in the preview)

${db}

## Context

The generated code runs inside a Vite + React app. The ennabl design system CSS (colors_and_type.css + styles.css) is already loaded globally — you can use all \`--en-*\` variables and \`.en-*\` classes directly without importing them.`,pb="https://api.anthropic.com/v1/messages";function hb(o){return o==="claude-opus-4-7"?{max_tokens:8192,thinking:{type:"enabled",budget_tokens:5e3}}:{max_tokens:8192}}async function gb({messages:o,onText:i,onDone:r}){var y,S,A,R,H,B,K;const c=tg(),u=await fetch(pb,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":Ph(),"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:c,...hb(c),system:[{type:"text",text:fb,cache_control:{type:"ephemeral"}}],messages:o,stream:!0})});if(!u.ok){const X=await u.json().catch(()=>({}));throw new Error(((y=X.error)==null?void 0:y.message)||`API error ${u.status}`)}const f=u.body.getReader(),p=new TextDecoder;let m=0,g=0,v=0;for(;;){const{done:X,value:J}=await f.read();if(X)break;const L=p.decode(J).split(`
`);for(const Q of L){if(!Q.startsWith("data: "))continue;const $=Q.slice(6).trim();if(!(!$||$==="[DONE]"))try{const V=JSON.parse($);V.type==="message_start"&&(m=((A=(S=V.message)==null?void 0:S.usage)==null?void 0:A.input_tokens)??0,v=((H=(R=V.message)==null?void 0:R.usage)==null?void 0:H.cache_read_input_tokens)??0),V.type==="content_block_delta"&&((B=V.delta)==null?void 0:B.type)==="text_delta"&&i(V.delta.text),V.type==="message_delta"&&(g=((K=V.usage)==null?void 0:K.output_tokens)??0)}catch{}}}r({inputTokens:m,outputTokens:g,cacheReadTokens:v})}const ng="ennabl_builder_reports",qc={input:15/1e6,output:75/1e6,cacheRead:1.5/1e6};function mb({inputTokens:o=0,outputTokens:i=0,cacheReadTokens:r=0}){return Math.max(0,o-r)*qc.input+r*qc.cacheRead+i*qc.output}function vb(o){return{id:`s_${Date.now()}`,prdName:o,startedAt:new Date().toISOString(),iterations:0,inputTokens:0,outputTokens:0,cacheReadTokens:0,cost:0,componentsUsed:[],rating:null,accepted:!1}}function ag(){try{return JSON.parse(localStorage.getItem(ng)||"{}")}catch{return{}}}function bb(o){localStorage.setItem(ng,JSON.stringify(o))}function Jc(o){const i=ag(),r=o.prdName;i[r]||(i[r]=[]);const c=i[r].findIndex(u=>u.id===o.id);c>=0?i[r][c]=o:i[r].unshift(o),bb(i)}function Yc(o){return ag()[o]||[]}function yb(o){return o?["CollapsibleSection","EditableField","TemplatePicker","SaveTemplateDialog","UpdateTemplateDialog","ManageModal","DeleteConfirm","Step3Body","ProducerTable"].filter(r=>o.includes(r)):[]}function xb(o){if(!o.length)return null;const i=o.filter(r=>r.accepted&&r.iterations<=2).length;return Math.round(i/o.length*100)}function Sb(o){const i=o.match(/```(?:jsx?|tsx?|javascript|typescript)?\n([\s\S]*?)```/);return i?i[1].trim():null}function wb({prd:o,messages:i,setMessages:r,onCodeGenerated:c,onSwitchToPrd:u,onIterationComplete:f,initTrigger:p}){const[m,g]=T.useState(""),[v,y]=T.useState(!1),[S,A]=T.useState(tg),R=T.useRef(null),H=T.useRef(null);T.useEffect(()=>{var X;(X=R.current)==null||X.scrollIntoView({behavior:"smooth"})},[i]),T.useEffect(()=>{p>0&&o&&!v&&B("Build a complete UI from this PRD.")},[p]);async function B(X){const J=(X??m).trim();if(!J||v)return;const L={role:"user",content:J},Q=o?`

---
PRD: ${o.name}

${o.content}
---
`:"",$=[...o&&i.length===0?[{role:"user",content:`${Q}
${J}`}]:[...i,L]];r(V=>[...V,L]),X||g(""),y(!0),r(V=>[...V,{role:"assistant",content:""}]);try{let V="",q=null;await gb({messages:$,onText:ee=>{V+=ee,r(ue=>{const se=[...ue];return se[se.length-1]={role:"assistant",content:V},se})},onDone:ee=>{q=ee}});const Y=Sb(V);if(Y&&c(Y),f){const ee=q||{};f({inputTokens:ee.inputTokens||0,outputTokens:ee.outputTokens||0,cacheReadTokens:ee.cacheReadTokens||0,componentsUsed:yb(Y)})}}catch(V){r(q=>{const Y=[...q];return Y[Y.length-1]={role:"assistant",content:`Error: ${V.message}`},Y})}finally{y(!1)}}function K(X){X.key==="Enter"&&!X.shiftKey&&(X.preventDefault(),B())}return b.jsxs("div",{className:"chat-panel",children:[b.jsxs("div",{className:"chat-messages",children:[i.length===0&&b.jsx("div",{className:"chat-empty",children:o?b.jsx(b.Fragment,{children:"PRD loaded. Describe the UI you want to build."}):b.jsx(b.Fragment,{children:"Load a PRD first, then describe what to build."})}),i.map((X,J)=>b.jsx("div",{className:`chat-msg chat-msg--${X.role}`,children:X.role==="assistant"?b.jsx(Cb,{content:X.content}):b.jsx("span",{children:X.content})},J)),b.jsx("div",{ref:R})]}),b.jsxs("div",{className:"chat-input-area",children:[b.jsx("div",{className:"chat-model-row",children:sb.map(X=>b.jsx("button",{className:`chat-model-btn ${S===X.id?"chat-model-btn--active":""}`,onClick:()=>{A(X.id),rb(X.id)},title:X.note,children:X.label},X.id))}),b.jsxs("div",{className:"chat-input-row",children:[b.jsx("textarea",{ref:H,className:"chat-input",placeholder:o?`Build from ${o.name}…`:"Load a PRD first…",value:m,onChange:X=>g(X.target.value),onKeyDown:K,disabled:!o||v,rows:3}),b.jsx("button",{className:"chat-send-btn",onClick:B,disabled:!o||!m.trim()||v,children:v?b.jsx("span",{className:"chat-spinner"}):"↑"})]})]})]})}function Cb({content:o}){const i=o.split(/(```[\s\S]*?```)/g);return b.jsx("div",{className:"chat-msg-content",children:i.map((r,c)=>{if(r.startsWith("```")){const u=r.replace(/^```[^\n]*\n?/,"").replace(/```$/,"");return b.jsx("pre",{className:"chat-code-block",children:b.jsx("code",{children:u})},c)}return b.jsx("span",{children:r},c)})})}function Nb({value:o,onChange:i}){const[r,c]=T.useState(null);return b.jsx("div",{className:"stars",children:[1,2,3,4,5].map(u=>b.jsx("button",{className:`star-btn ${u<=(r??o??0)?"star-btn--on":""}`,onMouseEnter:()=>c(u),onMouseLeave:()=>c(null),onClick:()=>i(u),"aria-label":`Rate ${u} star${u>1?"s":""}`,children:"★"},u))})}function wh(o){return o>=1e3?`${(o/1e3).toFixed(1)}k`:String(o)}function Ch(o){return o<.01?"<$0.01":`$${o.toFixed(2)}`}function Tb(o){const i=new Date(o),r=new Date;if(i.toDateString()===r.toDateString())return"today";const c=Math.floor((r-i)/864e5);return c===1?"yesterday":c<7?`${c}d ago`:i.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function Db({session:o,prd:i,onSessionUpdate:r}){const[c,u]=T.useState([]);if(T.useEffect(()=>{i&&u(Yc(i.name))},[i,o]),!i)return b.jsx("div",{className:"report-empty",children:"Load a PRD to see reports."});const f=xb(c),p=c.length;c.some(y=>y.id===(o==null?void 0:o.id));function m(y){const S={...o,rating:y};r(S),Jc(S),u(Yc(i.name))}function g(){const y={...o,accepted:!0};r(y),Jc(y),u(Yc(i.name))}const v=c.filter(y=>y.id!==(o==null?void 0:o.id));return b.jsxs("div",{className:"report-tab",children:[o&&b.jsxs("section",{className:"report-section",children:[b.jsxs("div",{className:"report-section-label",children:["Current session",o.accepted&&b.jsx("span",{className:"report-badge report-badge--green",children:"Accepted"})]}),b.jsxs("div",{className:"report-metrics",children:[b.jsxs("div",{className:"report-metric",children:[b.jsx("span",{className:"report-metric-value",children:o.iterations}),b.jsx("span",{className:"report-metric-label",children:"iterations"}),o.iterations<=2&&o.iterations>0&&b.jsx("span",{className:"report-badge report-badge--green",children:"≤2 ✓"})]}),b.jsxs("div",{className:"report-metric",children:[b.jsx("span",{className:"report-metric-value",children:wh(o.inputTokens+o.outputTokens)}),b.jsx("span",{className:"report-metric-label",children:"tokens"})]}),b.jsxs("div",{className:"report-metric",children:[b.jsx("span",{className:"report-metric-value",children:Ch(o.cost)}),b.jsx("span",{className:"report-metric-label",children:"cost"})]})]}),o.cacheReadTokens>0&&b.jsxs("div",{className:"report-cache-note",children:[wh(o.cacheReadTokens)," tokens from cache"]}),o.componentsUsed.length>0&&b.jsxs("div",{className:"report-components",children:[b.jsx("span",{className:"report-components-label",children:"Components used"}),b.jsx("div",{className:"report-chips",children:o.componentsUsed.map(y=>b.jsx("span",{className:"report-chip",children:y},y))})]}),b.jsxs("div",{className:"report-rating-row",children:[b.jsx("span",{className:"report-rating-label",children:"Rate this design"}),b.jsx(Nb,{value:o.rating,onChange:m})]}),!o.accepted&&b.jsx("button",{className:"report-accept-btn",onClick:g,disabled:o.iterations===0,children:"✓ Accept design"})]}),p>0&&b.jsxs("section",{className:"report-section",children:[b.jsxs("div",{className:"report-section-label",children:["This PRD · ",p," session",p>1?"s":""]}),b.jsx("div",{className:"report-summary",children:f!==null&&b.jsxs("div",{className:"report-metric",children:[b.jsxs("span",{className:"report-metric-value report-metric-value--lg",children:[f,"%"]}),b.jsx("span",{className:"report-metric-label",children:"accepted in ≤2 iterations"})]})})]}),v.length>0&&b.jsxs("section",{className:"report-section",children:[b.jsx("div",{className:"report-section-label",children:"History"}),b.jsx("div",{className:"report-history",children:v.map(y=>b.jsxs("div",{className:"report-history-row",children:[b.jsxs("div",{className:"report-history-left",children:[b.jsx("span",{className:"report-history-date",children:Tb(y.startedAt)}),b.jsxs("span",{className:"report-history-iter",children:[y.iterations," iter",y.iterations!==1?"s":""]}),y.accepted&&b.jsx("span",{className:"report-badge report-badge--green",children:"✓"}),y.iterations<=2&&y.accepted&&b.jsx("span",{className:"report-badge report-badge--blue",children:"≤2"})]}),b.jsxs("div",{className:"report-history-right",children:[y.rating&&b.jsxs("span",{className:"report-history-stars",children:["★".repeat(y.rating),"☆".repeat(5-y.rating)]}),b.jsx("span",{className:"report-history-cost",children:Ch(y.cost)})]})]},y.id))})]}),!o&&p===0&&b.jsx("div",{className:"report-empty",children:"Start a chat to begin tracking."})]})}function Eb({prd:o,messages:i,setMessages:r,onCodeGenerated:c,onIterationComplete:u,session:f,onSessionUpdate:p,initTrigger:m}){const[g,v]=T.useState("chat");return b.jsxs("div",{className:"right-panel",children:[b.jsxs("div",{className:"right-tabs",children:[b.jsx("button",{className:`right-tab ${g==="chat"?"right-tab--active":""}`,onClick:()=>v("chat"),children:"Chat"}),b.jsxs("button",{className:`right-tab ${g==="report"?"right-tab--active":""}`,onClick:()=>v("report"),children:["Report",(f==null?void 0:f.accepted)&&b.jsx("span",{className:"right-tab-dot right-tab-dot--green"}),f&&!f.accepted&&f.iterations>0&&b.jsx("span",{className:"right-tab-dot"})]})]}),b.jsxs("div",{className:"right-content",children:[g==="chat"&&b.jsx(wb,{prd:o,messages:i,setMessages:r,onCodeGenerated:c,onIterationComplete:u,onSwitchToPrd:()=>v("prd"),initTrigger:m}),g==="report"&&b.jsx(Db,{session:f,prd:o,onSessionUpdate:p})]})]})}function Ab({onDone:o}){const[i,r]=T.useState(""),[c,u]=T.useState(null);function f(){const p=i.trim();if(!p.startsWith("sk-ant-")&&!p.startsWith("sk-")){u("Paste your Anthropic API key — it starts with sk-ant-");return}ib(p),o()}return b.jsx("div",{className:"setup-overlay",children:b.jsxs("div",{className:"setup-card",children:[b.jsxs("div",{className:"setup-logo",children:[b.jsx("span",{className:"setup-logo-name",children:"ennabl"}),b.jsx("span",{className:"setup-logo-suffix",children:"builder"})]}),b.jsxs("p",{className:"setup-desc",children:["Paste your Anthropic API key to get started.",b.jsx("br",{}),"It's stored only in your browser's local storage."]}),b.jsx("label",{className:"setup-label",children:"Anthropic API Key"}),b.jsx("input",{className:"setup-input",type:"password",value:i,onChange:p=>{r(p.target.value),u(null)},onKeyDown:p=>p.key==="Enter"&&f(),placeholder:"sk-ant-...",spellCheck:!1,autoFocus:!0}),c&&b.jsx("p",{className:"setup-error",children:c}),b.jsx("button",{className:"setup-btn",onClick:f,disabled:!i.trim(),children:"Save & continue"})]})})}const lg="ennabl_builder_prds",ig=[{id:"ai",name:"AI",icon:"✦"},{id:"insights",name:"Insights",icon:"◎"},{id:"workflows",name:"Workflows",icon:"⚡"},{id:"data",name:"Data",icon:"⬡"},{id:"growth",name:"Growth",icon:"↑"},{id:"updates",name:"Updates",icon:"◉"},{id:"settings",name:"Settings",icon:"⚙"}],Nh=["backlog","todo","doing","done"],sg={backlog:"Backlog",todo:"To Do",doing:"Doing",done:"Done"},zb=[{id:"prd-mock-1",projectId:"workflows",title:"Producer Filter Modal",content:`# Producer Filter Modal

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
`,status:"doing",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),updatedAt:new Date(Date.now()-7200*1e3).toISOString()}];function mo(){try{return JSON.parse(localStorage.getItem(lg)||"[]")}catch{return[]}}function og(o){localStorage.setItem(lg,JSON.stringify(o))}function Rb(){mo().length===0&&og(zb)}function Mb(o){return mo().find(i=>i.id===o)||null}function kb(o){if(!o.trim())return[];const i=o.toLowerCase();return mo().filter(r=>r.title.toLowerCase().includes(i)).slice(0,8)}function rg(o){return ig.find(i=>i.id===o)||null}function Ob({onSelect:o}){const[i,r]=T.useState(""),[c,u]=T.useState([]),[f,p]=T.useState(!1),[m,g]=T.useState(0),v=T.useRef(),y=T.useRef();T.useEffect(()=>{if(!i.trim()){u([]),p(!1);return}const A=kb(i);u(A),p(A.length>0),g(0)},[i]),T.useEffect(()=>{function A(R){f&&(R.key==="ArrowDown"&&(R.preventDefault(),g(H=>Math.min(H+1,c.length-1))),R.key==="ArrowUp"&&(R.preventDefault(),g(H=>Math.max(H-1,0))),R.key==="Enter"&&(R.preventDefault(),c[m]&&S(c[m])),R.key==="Escape"&&p(!1))}return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[f,c,m]),T.useEffect(()=>{function A(R){var H,B;!((H=y.current)!=null&&H.contains(R.target))&&!((B=v.current)!=null&&B.contains(R.target))&&p(!1)}return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[]);function S(A){var R;o(A),r(""),p(!1),(R=v.current)==null||R.blur()}return b.jsxs("div",{className:"prd-search",children:[b.jsxs("div",{className:"prd-search-input-wrap",children:[b.jsx("span",{className:"prd-search-icon",children:"⌕"}),b.jsx("input",{ref:v,className:"prd-search-input",type:"text",placeholder:"Search PRDs…",value:i,onChange:A=>r(A.target.value),onFocus:()=>{c.length&&p(!0)}}),i&&b.jsx("button",{className:"prd-search-clear",onClick:()=>{r(""),p(!1)},children:"✕"})]}),f&&b.jsx("div",{ref:y,className:"prd-search-dropdown",children:c.map((A,R)=>{const H=rg(A.projectId);return b.jsxs("button",{className:`prd-search-result ${R===m?"prd-search-result--active":""}`,onMouseEnter:()=>g(R),onClick:()=>S(A),children:[b.jsx("span",{className:"prd-search-result-title",children:A.title}),b.jsxs("span",{className:"prd-search-result-project",children:[H==null?void 0:H.icon," ",H==null?void 0:H.name]})]},A.id)})})]})}function jb({prds:o,onNavigate:i}){return b.jsxs("div",{className:"projects-page",children:[b.jsx("header",{className:"projects-header",children:b.jsxs("div",{className:"projects-logo",children:[b.jsx("span",{className:"projects-logo-name",children:"ennabl"}),b.jsx("span",{className:"projects-logo-suffix",children:"builder"})]})}),b.jsxs("main",{className:"projects-main",children:[b.jsx("h1",{className:"projects-title",children:"Projects"}),b.jsx("div",{className:"projects-grid",children:ig.map(r=>{const c=o.filter(f=>f.projectId===r.id),u=c.filter(f=>f.status==="doing").length;return b.jsxs("button",{className:"project-card",onClick:()=>i({page:"project",projectId:r.id}),children:[b.jsx("div",{className:"project-card-icon",children:r.icon}),b.jsx("div",{className:"project-card-name",children:r.name}),b.jsx("div",{className:"project-card-meta",children:c.length>0?b.jsxs(b.Fragment,{children:[b.jsxs("span",{className:"project-card-count",children:[c.length," PRD",c.length!==1?"s":""]}),u>0&&b.jsxs("span",{className:"project-card-doing",children:[u," doing"]})]}):b.jsx("span",{className:"project-card-empty",children:"No PRDs yet"})})]},r.id)})})]})]})}var Ni=Lh();function _b(){for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return T.useMemo(()=>c=>{i.forEach(u=>u(c))},i)}const vo=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Tl(o){const i=Object.prototype.toString.call(o);return i==="[object Window]"||i==="[object global]"}function su(o){return"nodeType"in o}function vt(o){var i,r;return o?Tl(o)?o:su(o)&&(i=(r=o.ownerDocument)==null?void 0:r.defaultView)!=null?i:window:window}function ou(o){const{Document:i}=vt(o);return o instanceof i}function ji(o){return Tl(o)?!1:o instanceof vt(o).HTMLElement}function cg(o){return o instanceof vt(o).SVGElement}function Dl(o){return o?Tl(o)?o.document:su(o)?ou(o)?o:ji(o)||cg(o)?o.ownerDocument:document:document:document}const on=vo?T.useLayoutEffect:T.useEffect;function bo(o){const i=T.useRef(o);return on(()=>{i.current=o}),T.useCallback(function(){for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return i.current==null?void 0:i.current(...c)},[])}function Ub(){const o=T.useRef(null),i=T.useCallback((c,u)=>{o.current=setInterval(c,u)},[]),r=T.useCallback(()=>{o.current!==null&&(clearInterval(o.current),o.current=null)},[]);return[i,r]}function Ri(o,i){i===void 0&&(i=[o]);const r=T.useRef(o);return on(()=>{r.current!==o&&(r.current=o)},i),r}function _i(o,i){const r=T.useRef();return T.useMemo(()=>{const c=o(r.current);return r.current=c,c},[...i])}function ro(o){const i=bo(o),r=T.useRef(null),c=T.useCallback(u=>{u!==r.current&&(i==null||i(u,r.current)),r.current=u},[]);return[r,c]}function co(o){const i=T.useRef();return T.useEffect(()=>{i.current=o},[o]),i.current}let Xc={};function Ui(o,i){return T.useMemo(()=>{if(i)return i;const r=Xc[o]==null?0:Xc[o]+1;return Xc[o]=r,o+"-"+r},[o,i])}function ug(o){return function(i){for(var r=arguments.length,c=new Array(r>1?r-1:0),u=1;u<r;u++)c[u-1]=arguments[u];return c.reduce((f,p)=>{const m=Object.entries(p);for(const[g,v]of m){const y=f[g];y!=null&&(f[g]=y+o*v)}return f},{...i})}}const Nl=ug(1),uo=ug(-1);function Hb(o){return"clientX"in o&&"clientY"in o}function yo(o){if(!o)return!1;const{KeyboardEvent:i}=vt(o.target);return i&&o instanceof i}function Lb(o){if(!o)return!1;const{TouchEvent:i}=vt(o.target);return i&&o instanceof i}function fo(o){if(Lb(o)){if(o.touches&&o.touches.length){const{clientX:i,clientY:r}=o.touches[0];return{x:i,y:r}}else if(o.changedTouches&&o.changedTouches.length){const{clientX:i,clientY:r}=o.changedTouches[0];return{x:i,y:r}}}return Hb(o)?{x:o.clientX,y:o.clientY}:null}const ha=Object.freeze({Translate:{toString(o){if(!o)return;const{x:i,y:r}=o;return"translate3d("+(i?Math.round(i):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(o){if(!o)return;const{scaleX:i,scaleY:r}=o;return"scaleX("+i+") scaleY("+r+")"}},Transform:{toString(o){if(o)return[ha.Translate.toString(o),ha.Scale.toString(o)].join(" ")}},Transition:{toString(o){let{property:i,duration:r,easing:c}=o;return i+" "+r+"ms "+c}}}),Th="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Bb(o){return o.matches(Th)?o:o.querySelector(Th)}const qb={display:"none"};function Yb(o){let{id:i,value:r}=o;return Be.createElement("div",{id:i,style:qb},r)}function Xb(o){let{id:i,announcement:r,ariaLiveType:c="assertive"}=o;const u={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return Be.createElement("div",{id:i,style:u,role:"status","aria-live":c,"aria-atomic":!0},r)}function Gb(){const[o,i]=T.useState("");return{announce:T.useCallback(c=>{c!=null&&i(c)},[]),announcement:o}}const dg=T.createContext(null);function Qb(o){const i=T.useContext(dg);T.useEffect(()=>{if(!i)throw new Error("useDndMonitor must be used within a children of <DndContext>");return i(o)},[o,i])}function Zb(){const[o]=T.useState(()=>new Set),i=T.useCallback(c=>(o.add(c),()=>o.delete(c)),[o]);return[T.useCallback(c=>{let{type:u,event:f}=c;o.forEach(p=>{var m;return(m=p[u])==null?void 0:m.call(p,f)})},[o]),i]}const Vb={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Kb={onDragStart(o){let{active:i}=o;return"Picked up draggable item "+i.id+"."},onDragOver(o){let{active:i,over:r}=o;return r?"Draggable item "+i.id+" was moved over droppable area "+r.id+".":"Draggable item "+i.id+" is no longer over a droppable area."},onDragEnd(o){let{active:i,over:r}=o;return r?"Draggable item "+i.id+" was dropped over droppable area "+r.id:"Draggable item "+i.id+" was dropped."},onDragCancel(o){let{active:i}=o;return"Dragging was cancelled. Draggable item "+i.id+" was dropped."}};function Jb(o){let{announcements:i=Kb,container:r,hiddenTextDescribedById:c,screenReaderInstructions:u=Vb}=o;const{announce:f,announcement:p}=Gb(),m=Ui("DndLiveRegion"),[g,v]=T.useState(!1);if(T.useEffect(()=>{v(!0)},[]),Qb(T.useMemo(()=>({onDragStart(S){let{active:A}=S;f(i.onDragStart({active:A}))},onDragMove(S){let{active:A,over:R}=S;i.onDragMove&&f(i.onDragMove({active:A,over:R}))},onDragOver(S){let{active:A,over:R}=S;f(i.onDragOver({active:A,over:R}))},onDragEnd(S){let{active:A,over:R}=S;f(i.onDragEnd({active:A,over:R}))},onDragCancel(S){let{active:A,over:R}=S;f(i.onDragCancel({active:A,over:R}))}}),[f,i])),!g)return null;const y=Be.createElement(Be.Fragment,null,Be.createElement(Yb,{id:c,value:u.draggable}),Be.createElement(Xb,{id:m,announcement:p}));return r?Ni.createPortal(y,r):y}var Pe;(function(o){o.DragStart="dragStart",o.DragMove="dragMove",o.DragEnd="dragEnd",o.DragCancel="dragCancel",o.DragOver="dragOver",o.RegisterDroppable="registerDroppable",o.SetDroppableDisabled="setDroppableDisabled",o.UnregisterDroppable="unregisterDroppable"})(Pe||(Pe={}));function po(){}function $b(o,i){return T.useMemo(()=>({sensor:o,options:i??{}}),[o,i])}function Ib(){for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return T.useMemo(()=>[...i].filter(c=>c!=null),[...i])}const rn=Object.freeze({x:0,y:0});function Fb(o,i){return Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2))}function Wb(o,i){const r=fo(o);if(!r)return"0 0";const c={x:(r.x-i.left)/i.width*100,y:(r.y-i.top)/i.height*100};return c.x+"% "+c.y+"%"}function Pb(o,i){let{data:{value:r}}=o,{data:{value:c}}=i;return r-c}function e1(o,i){let{data:{value:r}}=o,{data:{value:c}}=i;return c-r}function Dh(o){let{left:i,top:r,height:c,width:u}=o;return[{x:i,y:r},{x:i+u,y:r},{x:i,y:r+c},{x:i+u,y:r+c}]}function t1(o,i){if(!o||o.length===0)return null;const[r]=o;return r[i]}const n1=o=>{let{collisionRect:i,droppableRects:r,droppableContainers:c}=o;const u=Dh(i),f=[];for(const p of c){const{id:m}=p,g=r.get(m);if(g){const v=Dh(g),y=u.reduce((A,R,H)=>A+Fb(v[H],R),0),S=Number((y/4).toFixed(4));f.push({id:m,data:{droppableContainer:p,value:S}})}}return f.sort(Pb)};function a1(o,i){const r=Math.max(i.top,o.top),c=Math.max(i.left,o.left),u=Math.min(i.left+i.width,o.left+o.width),f=Math.min(i.top+i.height,o.top+o.height),p=u-c,m=f-r;if(c<u&&r<f){const g=i.width*i.height,v=o.width*o.height,y=p*m,S=y/(g+v-y);return Number(S.toFixed(4))}return 0}const l1=o=>{let{collisionRect:i,droppableRects:r,droppableContainers:c}=o;const u=[];for(const f of c){const{id:p}=f,m=r.get(p);if(m){const g=a1(m,i);g>0&&u.push({id:p,data:{droppableContainer:f,value:g}})}}return u.sort(e1)};function i1(o,i,r){return{...o,scaleX:i&&r?i.width/r.width:1,scaleY:i&&r?i.height/r.height:1}}function fg(o,i){return o&&i?{x:o.left-i.left,y:o.top-i.top}:rn}function s1(o){return function(r){for(var c=arguments.length,u=new Array(c>1?c-1:0),f=1;f<c;f++)u[f-1]=arguments[f];return u.reduce((p,m)=>({...p,top:p.top+o*m.y,bottom:p.bottom+o*m.y,left:p.left+o*m.x,right:p.right+o*m.x}),{...r})}}const o1=s1(1);function pg(o){if(o.startsWith("matrix3d(")){const i=o.slice(9,-1).split(/, /);return{x:+i[12],y:+i[13],scaleX:+i[0],scaleY:+i[5]}}else if(o.startsWith("matrix(")){const i=o.slice(7,-1).split(/, /);return{x:+i[4],y:+i[5],scaleX:+i[0],scaleY:+i[3]}}return null}function r1(o,i,r){const c=pg(i);if(!c)return o;const{scaleX:u,scaleY:f,x:p,y:m}=c,g=o.left-p-(1-u)*parseFloat(r),v=o.top-m-(1-f)*parseFloat(r.slice(r.indexOf(" ")+1)),y=u?o.width/u:o.width,S=f?o.height/f:o.height;return{width:y,height:S,top:v,right:g+y,bottom:v+S,left:g}}const c1={ignoreTransform:!1};function El(o,i){i===void 0&&(i=c1);let r=o.getBoundingClientRect();if(i.ignoreTransform){const{transform:v,transformOrigin:y}=vt(o).getComputedStyle(o);v&&(r=r1(r,v,y))}const{top:c,left:u,width:f,height:p,bottom:m,right:g}=r;return{top:c,left:u,width:f,height:p,bottom:m,right:g}}function Eh(o){return El(o,{ignoreTransform:!0})}function u1(o){const i=o.innerWidth,r=o.innerHeight;return{top:0,left:0,right:i,bottom:r,width:i,height:r}}function d1(o,i){return i===void 0&&(i=vt(o).getComputedStyle(o)),i.position==="fixed"}function f1(o,i){i===void 0&&(i=vt(o).getComputedStyle(o));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(u=>{const f=i[u];return typeof f=="string"?r.test(f):!1})}function ru(o,i){const r=[];function c(u){if(i!=null&&r.length>=i||!u)return r;if(ou(u)&&u.scrollingElement!=null&&!r.includes(u.scrollingElement))return r.push(u.scrollingElement),r;if(!ji(u)||cg(u)||r.includes(u))return r;const f=vt(o).getComputedStyle(u);return u!==o&&f1(u,f)&&r.push(u),d1(u,f)?r:c(u.parentNode)}return o?c(o):r}function hg(o){const[i]=ru(o,1);return i??null}function Gc(o){return!vo||!o?null:Tl(o)?o:su(o)?ou(o)||o===Dl(o).scrollingElement?window:ji(o)?o:null:null}function gg(o){return Tl(o)?o.scrollX:o.scrollLeft}function mg(o){return Tl(o)?o.scrollY:o.scrollTop}function $c(o){return{x:gg(o),y:mg(o)}}var at;(function(o){o[o.Forward=1]="Forward",o[o.Backward=-1]="Backward"})(at||(at={}));function vg(o){return!vo||!o?!1:o===document.scrollingElement}function bg(o){const i={x:0,y:0},r=vg(o)?{height:window.innerHeight,width:window.innerWidth}:{height:o.clientHeight,width:o.clientWidth},c={x:o.scrollWidth-r.width,y:o.scrollHeight-r.height},u=o.scrollTop<=i.y,f=o.scrollLeft<=i.x,p=o.scrollTop>=c.y,m=o.scrollLeft>=c.x;return{isTop:u,isLeft:f,isBottom:p,isRight:m,maxScroll:c,minScroll:i}}const p1={x:.2,y:.2};function h1(o,i,r,c,u){let{top:f,left:p,right:m,bottom:g}=r;c===void 0&&(c=10),u===void 0&&(u=p1);const{isTop:v,isBottom:y,isLeft:S,isRight:A}=bg(o),R={x:0,y:0},H={x:0,y:0},B={height:i.height*u.y,width:i.width*u.x};return!v&&f<=i.top+B.height?(R.y=at.Backward,H.y=c*Math.abs((i.top+B.height-f)/B.height)):!y&&g>=i.bottom-B.height&&(R.y=at.Forward,H.y=c*Math.abs((i.bottom-B.height-g)/B.height)),!A&&m>=i.right-B.width?(R.x=at.Forward,H.x=c*Math.abs((i.right-B.width-m)/B.width)):!S&&p<=i.left+B.width&&(R.x=at.Backward,H.x=c*Math.abs((i.left+B.width-p)/B.width)),{direction:R,speed:H}}function g1(o){if(o===document.scrollingElement){const{innerWidth:f,innerHeight:p}=window;return{top:0,left:0,right:f,bottom:p,width:f,height:p}}const{top:i,left:r,right:c,bottom:u}=o.getBoundingClientRect();return{top:i,left:r,right:c,bottom:u,width:o.clientWidth,height:o.clientHeight}}function yg(o){return o.reduce((i,r)=>Nl(i,$c(r)),rn)}function m1(o){return o.reduce((i,r)=>i+gg(r),0)}function v1(o){return o.reduce((i,r)=>i+mg(r),0)}function xg(o,i){if(i===void 0&&(i=El),!o)return;const{top:r,left:c,bottom:u,right:f}=i(o);hg(o)&&(u<=0||f<=0||r>=window.innerHeight||c>=window.innerWidth)&&o.scrollIntoView({block:"center",inline:"center"})}const b1=[["x",["left","right"],m1],["y",["top","bottom"],v1]];class cu{constructor(i,r){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const c=ru(r),u=yg(c);this.rect={...i},this.width=i.width,this.height=i.height;for(const[f,p,m]of b1)for(const g of p)Object.defineProperty(this,g,{get:()=>{const v=m(c),y=u[f]-v;return this.rect[g]+y},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Ei{constructor(i){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(r=>{var c;return(c=this.target)==null?void 0:c.removeEventListener(...r)})},this.target=i}add(i,r,c){var u;(u=this.target)==null||u.addEventListener(i,r,c),this.listeners.push([i,r,c])}}function y1(o){const{EventTarget:i}=vt(o);return o instanceof i?o:Dl(o)}function Qc(o,i){const r=Math.abs(o.x),c=Math.abs(o.y);return typeof i=="number"?Math.sqrt(r**2+c**2)>i:"x"in i&&"y"in i?r>i.x&&c>i.y:"x"in i?r>i.x:"y"in i?c>i.y:!1}var Pt;(function(o){o.Click="click",o.DragStart="dragstart",o.Keydown="keydown",o.ContextMenu="contextmenu",o.Resize="resize",o.SelectionChange="selectionchange",o.VisibilityChange="visibilitychange"})(Pt||(Pt={}));function Ah(o){o.preventDefault()}function x1(o){o.stopPropagation()}var Ne;(function(o){o.Space="Space",o.Down="ArrowDown",o.Right="ArrowRight",o.Left="ArrowLeft",o.Up="ArrowUp",o.Esc="Escape",o.Enter="Enter",o.Tab="Tab"})(Ne||(Ne={}));const Sg={start:[Ne.Space,Ne.Enter],cancel:[Ne.Esc],end:[Ne.Space,Ne.Enter,Ne.Tab]},S1=(o,i)=>{let{currentCoordinates:r}=i;switch(o.code){case Ne.Right:return{...r,x:r.x+25};case Ne.Left:return{...r,x:r.x-25};case Ne.Down:return{...r,y:r.y+25};case Ne.Up:return{...r,y:r.y-25}}};class wg{constructor(i){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=i;const{event:{target:r}}=i;this.props=i,this.listeners=new Ei(Dl(r)),this.windowListeners=new Ei(vt(r)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Pt.Resize,this.handleCancel),this.windowListeners.add(Pt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Pt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:i,onStart:r}=this.props,c=i.node.current;c&&xg(c),r(rn)}handleKeyDown(i){if(yo(i)){const{active:r,context:c,options:u}=this.props,{keyboardCodes:f=Sg,coordinateGetter:p=S1,scrollBehavior:m="smooth"}=u,{code:g}=i;if(f.end.includes(g)){this.handleEnd(i);return}if(f.cancel.includes(g)){this.handleCancel(i);return}const{collisionRect:v}=c.current,y=v?{x:v.left,y:v.top}:rn;this.referenceCoordinates||(this.referenceCoordinates=y);const S=p(i,{active:r,context:c.current,currentCoordinates:y});if(S){const A=uo(S,y),R={x:0,y:0},{scrollableAncestors:H}=c.current;for(const B of H){const K=i.code,{isTop:X,isRight:J,isLeft:L,isBottom:Q,maxScroll:$,minScroll:V}=bg(B),q=g1(B),Y={x:Math.min(K===Ne.Right?q.right-q.width/2:q.right,Math.max(K===Ne.Right?q.left:q.left+q.width/2,S.x)),y:Math.min(K===Ne.Down?q.bottom-q.height/2:q.bottom,Math.max(K===Ne.Down?q.top:q.top+q.height/2,S.y))},ee=K===Ne.Right&&!J||K===Ne.Left&&!L,ue=K===Ne.Down&&!Q||K===Ne.Up&&!X;if(ee&&Y.x!==S.x){const se=B.scrollLeft+A.x,ge=K===Ne.Right&&se<=$.x||K===Ne.Left&&se>=V.x;if(ge&&!A.y){B.scrollTo({left:se,behavior:m});return}ge?R.x=B.scrollLeft-se:R.x=K===Ne.Right?B.scrollLeft-$.x:B.scrollLeft-V.x,R.x&&B.scrollBy({left:-R.x,behavior:m});break}else if(ue&&Y.y!==S.y){const se=B.scrollTop+A.y,ge=K===Ne.Down&&se<=$.y||K===Ne.Up&&se>=V.y;if(ge&&!A.x){B.scrollTo({top:se,behavior:m});return}ge?R.y=B.scrollTop-se:R.y=K===Ne.Down?B.scrollTop-$.y:B.scrollTop-V.y,R.y&&B.scrollBy({top:-R.y,behavior:m});break}}this.handleMove(i,Nl(uo(S,this.referenceCoordinates),R))}}}handleMove(i,r){const{onMove:c}=this.props;i.preventDefault(),c(r)}handleEnd(i){const{onEnd:r}=this.props;i.preventDefault(),this.detach(),r()}handleCancel(i){const{onCancel:r}=this.props;i.preventDefault(),this.detach(),r()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}wg.activators=[{eventName:"onKeyDown",handler:(o,i,r)=>{let{keyboardCodes:c=Sg,onActivation:u}=i,{active:f}=r;const{code:p}=o.nativeEvent;if(c.start.includes(p)){const m=f.activatorNode.current;return m&&o.target!==m?!1:(o.preventDefault(),u==null||u({event:o.nativeEvent}),!0)}return!1}}];function zh(o){return!!(o&&"distance"in o)}function Rh(o){return!!(o&&"delay"in o)}class uu{constructor(i,r,c){var u;c===void 0&&(c=y1(i.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=i,this.events=r;const{event:f}=i,{target:p}=f;this.props=i,this.events=r,this.document=Dl(p),this.documentListeners=new Ei(this.document),this.listeners=new Ei(c),this.windowListeners=new Ei(vt(p)),this.initialCoordinates=(u=fo(f))!=null?u:rn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:i,props:{options:{activationConstraint:r,bypassActivationConstraint:c}}}=this;if(this.listeners.add(i.move.name,this.handleMove,{passive:!1}),this.listeners.add(i.end.name,this.handleEnd),i.cancel&&this.listeners.add(i.cancel.name,this.handleCancel),this.windowListeners.add(Pt.Resize,this.handleCancel),this.windowListeners.add(Pt.DragStart,Ah),this.windowListeners.add(Pt.VisibilityChange,this.handleCancel),this.windowListeners.add(Pt.ContextMenu,Ah),this.documentListeners.add(Pt.Keydown,this.handleKeydown),r){if(c!=null&&c({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Rh(r)){this.timeoutId=setTimeout(this.handleStart,r.delay),this.handlePending(r);return}if(zh(r)){this.handlePending(r);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(i,r){const{active:c,onPending:u}=this.props;u(c,i,this.initialCoordinates,r)}handleStart(){const{initialCoordinates:i}=this,{onStart:r}=this.props;i&&(this.activated=!0,this.documentListeners.add(Pt.Click,x1,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Pt.SelectionChange,this.removeTextSelection),r(i))}handleMove(i){var r;const{activated:c,initialCoordinates:u,props:f}=this,{onMove:p,options:{activationConstraint:m}}=f;if(!u)return;const g=(r=fo(i))!=null?r:rn,v=uo(u,g);if(!c&&m){if(zh(m)){if(m.tolerance!=null&&Qc(v,m.tolerance))return this.handleCancel();if(Qc(v,m.distance))return this.handleStart()}if(Rh(m)&&Qc(v,m.tolerance))return this.handleCancel();this.handlePending(m,v);return}i.cancelable&&i.preventDefault(),p(g)}handleEnd(){const{onAbort:i,onEnd:r}=this.props;this.detach(),this.activated||i(this.props.active),r()}handleCancel(){const{onAbort:i,onCancel:r}=this.props;this.detach(),this.activated||i(this.props.active),r()}handleKeydown(i){i.code===Ne.Esc&&this.handleCancel()}removeTextSelection(){var i;(i=this.document.getSelection())==null||i.removeAllRanges()}}const w1={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class du extends uu{constructor(i){const{event:r}=i,c=Dl(r.target);super(i,w1,c)}}du.activators=[{eventName:"onPointerDown",handler:(o,i)=>{let{nativeEvent:r}=o,{onActivation:c}=i;return!r.isPrimary||r.button!==0?!1:(c==null||c({event:r}),!0)}}];const C1={move:{name:"mousemove"},end:{name:"mouseup"}};var Ic;(function(o){o[o.RightClick=2]="RightClick"})(Ic||(Ic={}));class N1 extends uu{constructor(i){super(i,C1,Dl(i.event.target))}}N1.activators=[{eventName:"onMouseDown",handler:(o,i)=>{let{nativeEvent:r}=o,{onActivation:c}=i;return r.button===Ic.RightClick?!1:(c==null||c({event:r}),!0)}}];const Zc={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class T1 extends uu{constructor(i){super(i,Zc)}static setup(){return window.addEventListener(Zc.move.name,i,{capture:!1,passive:!1}),function(){window.removeEventListener(Zc.move.name,i)};function i(){}}}T1.activators=[{eventName:"onTouchStart",handler:(o,i)=>{let{nativeEvent:r}=o,{onActivation:c}=i;const{touches:u}=r;return u.length>1?!1:(c==null||c({event:r}),!0)}}];var Ai;(function(o){o[o.Pointer=0]="Pointer",o[o.DraggableRect=1]="DraggableRect"})(Ai||(Ai={}));var ho;(function(o){o[o.TreeOrder=0]="TreeOrder",o[o.ReversedTreeOrder=1]="ReversedTreeOrder"})(ho||(ho={}));function D1(o){let{acceleration:i,activator:r=Ai.Pointer,canScroll:c,draggingRect:u,enabled:f,interval:p=5,order:m=ho.TreeOrder,pointerCoordinates:g,scrollableAncestors:v,scrollableAncestorRects:y,delta:S,threshold:A}=o;const R=A1({delta:S,disabled:!f}),[H,B]=Ub(),K=T.useRef({x:0,y:0}),X=T.useRef({x:0,y:0}),J=T.useMemo(()=>{switch(r){case Ai.Pointer:return g?{top:g.y,bottom:g.y,left:g.x,right:g.x}:null;case Ai.DraggableRect:return u}},[r,u,g]),L=T.useRef(null),Q=T.useCallback(()=>{const V=L.current;if(!V)return;const q=K.current.x*X.current.x,Y=K.current.y*X.current.y;V.scrollBy(q,Y)},[]),$=T.useMemo(()=>m===ho.TreeOrder?[...v].reverse():v,[m,v]);T.useEffect(()=>{if(!f||!v.length||!J){B();return}for(const V of $){if((c==null?void 0:c(V))===!1)continue;const q=v.indexOf(V),Y=y[q];if(!Y)continue;const{direction:ee,speed:ue}=h1(V,Y,J,i,A);for(const se of["x","y"])R[se][ee[se]]||(ue[se]=0,ee[se]=0);if(ue.x>0||ue.y>0){B(),L.current=V,H(Q,p),K.current=ue,X.current=ee;return}}K.current={x:0,y:0},X.current={x:0,y:0},B()},[i,Q,c,B,f,p,JSON.stringify(J),JSON.stringify(R),H,v,$,y,JSON.stringify(A)])}const E1={x:{[at.Backward]:!1,[at.Forward]:!1},y:{[at.Backward]:!1,[at.Forward]:!1}};function A1(o){let{delta:i,disabled:r}=o;const c=co(i);return _i(u=>{if(r||!c||!u)return E1;const f={x:Math.sign(i.x-c.x),y:Math.sign(i.y-c.y)};return{x:{[at.Backward]:u.x[at.Backward]||f.x===-1,[at.Forward]:u.x[at.Forward]||f.x===1},y:{[at.Backward]:u.y[at.Backward]||f.y===-1,[at.Forward]:u.y[at.Forward]||f.y===1}}},[r,i,c])}function z1(o,i){const r=i!=null?o.get(i):void 0,c=r?r.node.current:null;return _i(u=>{var f;return i==null?null:(f=c??u)!=null?f:null},[c,i])}function R1(o,i){return T.useMemo(()=>o.reduce((r,c)=>{const{sensor:u}=c,f=u.activators.map(p=>({eventName:p.eventName,handler:i(p.handler,c)}));return[...r,...f]},[]),[o,i])}var Mi;(function(o){o[o.Always=0]="Always",o[o.BeforeDragging=1]="BeforeDragging",o[o.WhileDragging=2]="WhileDragging"})(Mi||(Mi={}));var Fc;(function(o){o.Optimized="optimized"})(Fc||(Fc={}));const Mh=new Map;function M1(o,i){let{dragging:r,dependencies:c,config:u}=i;const[f,p]=T.useState(null),{frequency:m,measure:g,strategy:v}=u,y=T.useRef(o),S=K(),A=Ri(S),R=T.useCallback(function(X){X===void 0&&(X=[]),!A.current&&p(J=>J===null?X:J.concat(X.filter(L=>!J.includes(L))))},[A]),H=T.useRef(null),B=_i(X=>{if(S&&!r)return Mh;if(!X||X===Mh||y.current!==o||f!=null){const J=new Map;for(let L of o){if(!L)continue;if(f&&f.length>0&&!f.includes(L.id)&&L.rect.current){J.set(L.id,L.rect.current);continue}const Q=L.node.current,$=Q?new cu(g(Q),Q):null;L.rect.current=$,$&&J.set(L.id,$)}return J}return X},[o,f,r,S,g]);return T.useEffect(()=>{y.current=o},[o]),T.useEffect(()=>{S||R()},[r,S]),T.useEffect(()=>{f&&f.length>0&&p(null)},[JSON.stringify(f)]),T.useEffect(()=>{S||typeof m!="number"||H.current!==null||(H.current=setTimeout(()=>{R(),H.current=null},m))},[m,S,R,...c]),{droppableRects:B,measureDroppableContainers:R,measuringScheduled:f!=null};function K(){switch(v){case Mi.Always:return!1;case Mi.BeforeDragging:return r;default:return!r}}}function fu(o,i){return _i(r=>o?r||(typeof i=="function"?i(o):o):null,[i,o])}function k1(o,i){return fu(o,i)}function O1(o){let{callback:i,disabled:r}=o;const c=bo(i),u=T.useMemo(()=>{if(r||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:f}=window;return new f(c)},[c,r]);return T.useEffect(()=>()=>u==null?void 0:u.disconnect(),[u]),u}function xo(o){let{callback:i,disabled:r}=o;const c=bo(i),u=T.useMemo(()=>{if(r||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:f}=window;return new f(c)},[r]);return T.useEffect(()=>()=>u==null?void 0:u.disconnect(),[u]),u}function j1(o){return new cu(El(o),o)}function kh(o,i,r){i===void 0&&(i=j1);const[c,u]=T.useState(null);function f(){u(g=>{if(!o)return null;if(o.isConnected===!1){var v;return(v=g??r)!=null?v:null}const y=i(o);return JSON.stringify(g)===JSON.stringify(y)?g:y})}const p=O1({callback(g){if(o)for(const v of g){const{type:y,target:S}=v;if(y==="childList"&&S instanceof HTMLElement&&S.contains(o)){f();break}}}}),m=xo({callback:f});return on(()=>{f(),o?(m==null||m.observe(o),p==null||p.observe(document.body,{childList:!0,subtree:!0})):(m==null||m.disconnect(),p==null||p.disconnect())},[o]),c}function _1(o){const i=fu(o);return fg(o,i)}const Oh=[];function U1(o){const i=T.useRef(o),r=_i(c=>o?c&&c!==Oh&&o&&i.current&&o.parentNode===i.current.parentNode?c:ru(o):Oh,[o]);return T.useEffect(()=>{i.current=o},[o]),r}function H1(o){const[i,r]=T.useState(null),c=T.useRef(o),u=T.useCallback(f=>{const p=Gc(f.target);p&&r(m=>m?(m.set(p,$c(p)),new Map(m)):null)},[]);return T.useEffect(()=>{const f=c.current;if(o!==f){p(f);const m=o.map(g=>{const v=Gc(g);return v?(v.addEventListener("scroll",u,{passive:!0}),[v,$c(v)]):null}).filter(g=>g!=null);r(m.length?new Map(m):null),c.current=o}return()=>{p(o),p(f)};function p(m){m.forEach(g=>{const v=Gc(g);v==null||v.removeEventListener("scroll",u)})}},[u,o]),T.useMemo(()=>o.length?i?Array.from(i.values()).reduce((f,p)=>Nl(f,p),rn):yg(o):rn,[o,i])}function jh(o,i){i===void 0&&(i=[]);const r=T.useRef(null);return T.useEffect(()=>{r.current=null},i),T.useEffect(()=>{const c=o!==rn;c&&!r.current&&(r.current=o),!c&&r.current&&(r.current=null)},[o]),r.current?uo(o,r.current):rn}function L1(o){T.useEffect(()=>{if(!vo)return;const i=o.map(r=>{let{sensor:c}=r;return c.setup==null?void 0:c.setup()});return()=>{for(const r of i)r==null||r()}},o.map(i=>{let{sensor:r}=i;return r}))}function B1(o,i){return T.useMemo(()=>o.reduce((r,c)=>{let{eventName:u,handler:f}=c;return r[u]=p=>{f(p,i)},r},{}),[o,i])}function Cg(o){return T.useMemo(()=>o?u1(o):null,[o])}const _h=[];function q1(o,i){i===void 0&&(i=El);const[r]=o,c=Cg(r?vt(r):null),[u,f]=T.useState(_h);function p(){f(()=>o.length?o.map(g=>vg(g)?c:new cu(i(g),g)):_h)}const m=xo({callback:p});return on(()=>{m==null||m.disconnect(),p(),o.forEach(g=>m==null?void 0:m.observe(g))},[o]),u}function Ng(o){if(!o)return null;if(o.children.length>1)return o;const i=o.children[0];return ji(i)?i:o}function Y1(o){let{measure:i}=o;const[r,c]=T.useState(null),u=T.useCallback(v=>{for(const{target:y}of v)if(ji(y)){c(S=>{const A=i(y);return S?{...S,width:A.width,height:A.height}:A});break}},[i]),f=xo({callback:u}),p=T.useCallback(v=>{const y=Ng(v);f==null||f.disconnect(),y&&(f==null||f.observe(y)),c(y?i(y):null)},[i,f]),[m,g]=ro(p);return T.useMemo(()=>({nodeRef:m,rect:r,setRef:g}),[r,m,g])}const X1=[{sensor:du,options:{}},{sensor:wg,options:{}}],G1={current:{}},lo={draggable:{measure:Eh},droppable:{measure:Eh,strategy:Mi.WhileDragging,frequency:Fc.Optimized},dragOverlay:{measure:El}};class zi extends Map{get(i){var r;return i!=null&&(r=super.get(i))!=null?r:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(i=>{let{disabled:r}=i;return!r})}getNodeFor(i){var r,c;return(r=(c=this.get(i))==null?void 0:c.node.current)!=null?r:void 0}}const Q1={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new zi,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:po},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:lo,measureDroppableContainers:po,windowRect:null,measuringScheduled:!1},Tg={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:po,draggableNodes:new Map,over:null,measureDroppableContainers:po},Hi=T.createContext(Tg),Dg=T.createContext(Q1);function Z1(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new zi}}}function V1(o,i){switch(i.type){case Pe.DragStart:return{...o,draggable:{...o.draggable,initialCoordinates:i.initialCoordinates,active:i.active}};case Pe.DragMove:return o.draggable.active==null?o:{...o,draggable:{...o.draggable,translate:{x:i.coordinates.x-o.draggable.initialCoordinates.x,y:i.coordinates.y-o.draggable.initialCoordinates.y}}};case Pe.DragEnd:case Pe.DragCancel:return{...o,draggable:{...o.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Pe.RegisterDroppable:{const{element:r}=i,{id:c}=r,u=new zi(o.droppable.containers);return u.set(c,r),{...o,droppable:{...o.droppable,containers:u}}}case Pe.SetDroppableDisabled:{const{id:r,key:c,disabled:u}=i,f=o.droppable.containers.get(r);if(!f||c!==f.key)return o;const p=new zi(o.droppable.containers);return p.set(r,{...f,disabled:u}),{...o,droppable:{...o.droppable,containers:p}}}case Pe.UnregisterDroppable:{const{id:r,key:c}=i,u=o.droppable.containers.get(r);if(!u||c!==u.key)return o;const f=new zi(o.droppable.containers);return f.delete(r),{...o,droppable:{...o.droppable,containers:f}}}default:return o}}function K1(o){let{disabled:i}=o;const{active:r,activatorEvent:c,draggableNodes:u}=T.useContext(Hi),f=co(c),p=co(r==null?void 0:r.id);return T.useEffect(()=>{if(!i&&!c&&f&&p!=null){if(!yo(f)||document.activeElement===f.target)return;const m=u.get(p);if(!m)return;const{activatorNode:g,node:v}=m;if(!g.current&&!v.current)return;requestAnimationFrame(()=>{for(const y of[g.current,v.current]){if(!y)continue;const S=Bb(y);if(S){S.focus();break}}})}},[c,i,u,p,f]),null}function Eg(o,i){let{transform:r,...c}=i;return o!=null&&o.length?o.reduce((u,f)=>f({transform:u,...c}),r):r}function J1(o){return T.useMemo(()=>({draggable:{...lo.draggable,...o==null?void 0:o.draggable},droppable:{...lo.droppable,...o==null?void 0:o.droppable},dragOverlay:{...lo.dragOverlay,...o==null?void 0:o.dragOverlay}}),[o==null?void 0:o.draggable,o==null?void 0:o.droppable,o==null?void 0:o.dragOverlay])}function $1(o){let{activeNode:i,measure:r,initialRect:c,config:u=!0}=o;const f=T.useRef(!1),{x:p,y:m}=typeof u=="boolean"?{x:u,y:u}:u;on(()=>{if(!p&&!m||!i){f.current=!1;return}if(f.current||!c)return;const v=i==null?void 0:i.node.current;if(!v||v.isConnected===!1)return;const y=r(v),S=fg(y,c);if(p||(S.x=0),m||(S.y=0),f.current=!0,Math.abs(S.x)>0||Math.abs(S.y)>0){const A=hg(v);A&&A.scrollBy({top:S.y,left:S.x})}},[i,p,m,c,r])}const So=T.createContext({...rn,scaleX:1,scaleY:1});var pa;(function(o){o[o.Uninitialized=0]="Uninitialized",o[o.Initializing=1]="Initializing",o[o.Initialized=2]="Initialized"})(pa||(pa={}));const I1=T.memo(function(i){var r,c,u,f;let{id:p,accessibility:m,autoScroll:g=!0,children:v,sensors:y=X1,collisionDetection:S=l1,measuring:A,modifiers:R,...H}=i;const B=T.useReducer(V1,void 0,Z1),[K,X]=B,[J,L]=Zb(),[Q,$]=T.useState(pa.Uninitialized),V=Q===pa.Initialized,{draggable:{active:q,nodes:Y,translate:ee},droppable:{containers:ue}}=K,se=q!=null?Y.get(q):null,ge=T.useRef({initial:null,translated:null}),Ue=T.useMemo(()=>{var Xe;return q!=null?{id:q,data:(Xe=se==null?void 0:se.data)!=null?Xe:G1,rect:ge}:null},[q,se]),Ve=T.useRef(null),[lt,k]=T.useState(null),[G,te]=T.useState(null),ce=Ri(H,Object.values(H)),ye=Ui("DndDescribedBy",p),C=T.useMemo(()=>ue.getEnabled(),[ue]),O=J1(A),{droppableRects:Z,measureDroppableContainers:I,measuringScheduled:le}=M1(C,{dragging:V,dependencies:[ee.x,ee.y],config:O.droppable}),ae=z1(Y,q),me=T.useMemo(()=>G?fo(G):null,[G]),He=Ba(),we=k1(ae,O.draggable.measure);$1({activeNode:q!=null?Y.get(q):null,config:He.layoutShiftCompensation,initialRect:we,measure:O.draggable.measure});const be=kh(ae,O.draggable.measure,we),cn=kh(ae?ae.parentElement:null),bt=T.useRef({activatorEvent:null,active:null,activeNode:ae,collisionRect:null,collisions:null,droppableRects:Z,draggableNodes:Y,draggingNode:null,draggingNodeRect:null,droppableContainers:ue,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),yn=ue.getNodeFor((r=bt.current.over)==null?void 0:r.id),it=Y1({measure:O.dragOverlay.measure}),un=(c=it.nodeRef.current)!=null?c:ae,dn=V?(u=it.rect)!=null?u:be:null,Li=!!(it.nodeRef.current&&it.rect),Al=_1(Li?null:be),ga=Cg(un?vt(un):null),Lt=U1(V?yn??ae:null),Xn=q1(Lt),Ha=Eg(R,{transform:{x:ee.x-Al.x,y:ee.y-Al.y,scaleX:1,scaleY:1},activatorEvent:G,active:Ue,activeNodeRect:be,containerNodeRect:cn,draggingNodeRect:dn,over:bt.current.over,overlayNodeRect:it.rect,scrollableAncestors:Lt,scrollableAncestorRects:Xn,windowRect:ga}),Bi=me?Nl(me,ee):null,dt=H1(Lt),wo=jh(dt),qi=jh(dt,[be]),xn=Nl(Ha,wo),en=dn?o1(dn,Ha):null,ma=Ue&&en?S({active:Ue,collisionRect:en,droppableRects:Z,droppableContainers:C,pointerCoordinates:Bi}):null,zl=t1(ma,"id"),[fn,Yi]=T.useState(null),va=Li?Ha:Nl(Ha,qi),gt=i1(va,(f=fn==null?void 0:fn.rect)!=null?f:null,be),Bt=T.useRef(null),ft=T.useCallback((Xe,Ge)=>{let{sensor:et,options:yt}=Ge;if(Ve.current==null)return;const xt=Y.get(Ve.current);if(!xt)return;const pt=Xe.nativeEvent,St=new et({active:Ve.current,activeNode:xt,event:pt,options:yt,context:bt,onAbort(Fe){if(!Y.get(Fe))return;const{onDragAbort:zt}=ce.current,Yt={id:Fe};zt==null||zt(Yt),J({type:"onDragAbort",event:Yt})},onPending(Fe,tn,zt,Yt){if(!Y.get(Fe))return;const{onDragPending:wn}=ce.current,nn={id:Fe,constraint:tn,initialCoordinates:zt,offset:Yt};wn==null||wn(nn),J({type:"onDragPending",event:nn})},onStart(Fe){const tn=Ve.current;if(tn==null)return;const zt=Y.get(tn);if(!zt)return;const{onDragStart:Yt}=ce.current,Sn={activatorEvent:pt,active:{id:tn,data:zt.data,rect:ge}};Ni.unstable_batchedUpdates(()=>{Yt==null||Yt(Sn),$(pa.Initializing),X({type:Pe.DragStart,initialCoordinates:Fe,active:tn}),J({type:"onDragStart",event:Sn}),k(Bt.current),te(pt)})},onMove(Fe){X({type:Pe.DragMove,coordinates:Fe})},onEnd:qt(Pe.DragEnd),onCancel:qt(Pe.DragCancel)});Bt.current=St;function qt(Fe){return async function(){const{active:zt,collisions:Yt,over:Sn,scrollAdjustedTranslate:wn}=bt.current;let nn=null;if(zt&&wn){const{cancelDrop:Gn}=ce.current;nn={activatorEvent:pt,active:zt,collisions:Yt,delta:wn,over:Sn},Fe===Pe.DragEnd&&typeof Gn=="function"&&await Promise.resolve(Gn(nn))&&(Fe=Pe.DragCancel)}Ve.current=null,Ni.unstable_batchedUpdates(()=>{X({type:Fe}),$(pa.Uninitialized),Yi(null),k(null),te(null),Bt.current=null;const Gn=Fe===Pe.DragEnd?"onDragEnd":"onDragCancel";if(nn){const Xt=ce.current[Gn];Xt==null||Xt(nn),J({type:Gn,event:nn})}})}}},[Y]),Co=T.useCallback((Xe,Ge)=>(et,yt)=>{const xt=et.nativeEvent,pt=Y.get(yt);if(Ve.current!==null||!pt||xt.dndKit||xt.defaultPrevented)return;const St={active:pt};Xe(et,Ge.options,St)===!0&&(xt.dndKit={capturedBy:Ge.sensor},Ve.current=yt,ft(et,Ge))},[Y,ft]),Xi=R1(y,Co);L1(y),on(()=>{be&&Q===pa.Initializing&&$(pa.Initialized)},[be,Q]),T.useEffect(()=>{const{onDragMove:Xe}=ce.current,{active:Ge,activatorEvent:et,collisions:yt,over:xt}=bt.current;if(!Ge||!et)return;const pt={active:Ge,activatorEvent:et,collisions:yt,delta:{x:xn.x,y:xn.y},over:xt};Ni.unstable_batchedUpdates(()=>{Xe==null||Xe(pt),J({type:"onDragMove",event:pt})})},[xn.x,xn.y]),T.useEffect(()=>{const{active:Xe,activatorEvent:Ge,collisions:et,droppableContainers:yt,scrollAdjustedTranslate:xt}=bt.current;if(!Xe||Ve.current==null||!Ge||!xt)return;const{onDragOver:pt}=ce.current,St=yt.get(zl),qt=St&&St.rect.current?{id:St.id,rect:St.rect.current,data:St.data,disabled:St.disabled}:null,Fe={active:Xe,activatorEvent:Ge,collisions:et,delta:{x:xt.x,y:xt.y},over:qt};Ni.unstable_batchedUpdates(()=>{Yi(qt),pt==null||pt(Fe),J({type:"onDragOver",event:Fe})})},[zl]),on(()=>{bt.current={activatorEvent:G,active:Ue,activeNode:ae,collisionRect:en,collisions:ma,droppableRects:Z,draggableNodes:Y,draggingNode:un,draggingNodeRect:dn,droppableContainers:ue,over:fn,scrollableAncestors:Lt,scrollAdjustedTranslate:xn},ge.current={initial:dn,translated:en}},[Ue,ae,ma,en,Y,un,dn,Z,ue,fn,Lt,xn]),D1({...He,delta:ee,draggingRect:en,pointerCoordinates:Bi,scrollableAncestors:Lt,scrollableAncestorRects:Xn});const No=T.useMemo(()=>({active:Ue,activeNode:ae,activeNodeRect:be,activatorEvent:G,collisions:ma,containerNodeRect:cn,dragOverlay:it,draggableNodes:Y,droppableContainers:ue,droppableRects:Z,over:fn,measureDroppableContainers:I,scrollableAncestors:Lt,scrollableAncestorRects:Xn,measuringConfiguration:O,measuringScheduled:le,windowRect:ga}),[Ue,ae,be,G,ma,cn,it,Y,ue,Z,fn,I,Lt,Xn,O,le,ga]),La=T.useMemo(()=>({activatorEvent:G,activators:Xi,active:Ue,activeNodeRect:be,ariaDescribedById:{draggable:ye},dispatch:X,draggableNodes:Y,over:fn,measureDroppableContainers:I}),[G,Xi,Ue,be,X,ye,Y,fn,I]);return Be.createElement(dg.Provider,{value:L},Be.createElement(Hi.Provider,{value:La},Be.createElement(Dg.Provider,{value:No},Be.createElement(So.Provider,{value:gt},v)),Be.createElement(K1,{disabled:(m==null?void 0:m.restoreFocus)===!1})),Be.createElement(Jb,{...m,hiddenTextDescribedById:ye}));function Ba(){const Xe=(lt==null?void 0:lt.autoScrollEnabled)===!1,Ge=typeof g=="object"?g.enabled===!1:g===!1,et=V&&!Xe&&!Ge;return typeof g=="object"?{...g,enabled:et}:{enabled:et}}}),F1=T.createContext(null),Uh="button",W1="Draggable";function P1(o){let{id:i,data:r,disabled:c=!1,attributes:u}=o;const f=Ui(W1),{activators:p,activatorEvent:m,active:g,activeNodeRect:v,ariaDescribedById:y,draggableNodes:S,over:A}=T.useContext(Hi),{role:R=Uh,roleDescription:H="draggable",tabIndex:B=0}=u??{},K=(g==null?void 0:g.id)===i,X=T.useContext(K?So:F1),[J,L]=ro(),[Q,$]=ro(),V=B1(p,i),q=Ri(r);on(()=>(S.set(i,{id:i,key:f,node:J,activatorNode:Q,data:q}),()=>{const ee=S.get(i);ee&&ee.key===f&&S.delete(i)}),[S,i]);const Y=T.useMemo(()=>({role:R,tabIndex:B,"aria-disabled":c,"aria-pressed":K&&R===Uh?!0:void 0,"aria-roledescription":H,"aria-describedby":y.draggable}),[c,R,B,K,H,y.draggable]);return{active:g,activatorEvent:m,activeNodeRect:v,attributes:Y,isDragging:K,listeners:c?void 0:V,node:J,over:A,setNodeRef:L,setActivatorNodeRef:$,transform:X}}function Ag(){return T.useContext(Dg)}const ey="Droppable",ty={timeout:25};function ny(o){let{data:i,disabled:r=!1,id:c,resizeObserverConfig:u}=o;const f=Ui(ey),{active:p,dispatch:m,over:g,measureDroppableContainers:v}=T.useContext(Hi),y=T.useRef({disabled:r}),S=T.useRef(!1),A=T.useRef(null),R=T.useRef(null),{disabled:H,updateMeasurementsFor:B,timeout:K}={...ty,...u},X=Ri(B??c),J=T.useCallback(()=>{if(!S.current){S.current=!0;return}R.current!=null&&clearTimeout(R.current),R.current=setTimeout(()=>{v(Array.isArray(X.current)?X.current:[X.current]),R.current=null},K)},[K]),L=xo({callback:J,disabled:H||!p}),Q=T.useCallback((Y,ee)=>{L&&(ee&&(L.unobserve(ee),S.current=!1),Y&&L.observe(Y))},[L]),[$,V]=ro(Q),q=Ri(i);return T.useEffect(()=>{!L||!$.current||(L.disconnect(),S.current=!1,L.observe($.current))},[$,L]),T.useEffect(()=>(m({type:Pe.RegisterDroppable,element:{id:c,key:f,disabled:r,node:$,rect:A,data:q}}),()=>m({type:Pe.UnregisterDroppable,key:f,id:c})),[c]),T.useEffect(()=>{r!==y.current.disabled&&(m({type:Pe.SetDroppableDisabled,id:c,key:f,disabled:r}),y.current.disabled=r)},[c,f,r,m]),{active:p,rect:A,isOver:(g==null?void 0:g.id)===c,node:$,over:g,setNodeRef:V}}function ay(o){let{animation:i,children:r}=o;const[c,u]=T.useState(null),[f,p]=T.useState(null),m=co(r);return!r&&!c&&m&&u(m),on(()=>{if(!f)return;const g=c==null?void 0:c.key,v=c==null?void 0:c.props.id;if(g==null||v==null){u(null);return}Promise.resolve(i(v,f)).then(()=>{u(null)})},[i,c,f]),Be.createElement(Be.Fragment,null,r,c?T.cloneElement(c,{ref:p}):null)}const ly={x:0,y:0,scaleX:1,scaleY:1};function iy(o){let{children:i}=o;return Be.createElement(Hi.Provider,{value:Tg},Be.createElement(So.Provider,{value:ly},i))}const sy={position:"fixed",touchAction:"none"},oy=o=>yo(o)?"transform 250ms ease":void 0,ry=T.forwardRef((o,i)=>{let{as:r,activatorEvent:c,adjustScale:u,children:f,className:p,rect:m,style:g,transform:v,transition:y=oy}=o;if(!m)return null;const S=u?v:{...v,scaleX:1,scaleY:1},A={...sy,width:m.width,height:m.height,top:m.top,left:m.left,transform:ha.Transform.toString(S),transformOrigin:u&&c?Wb(c,m):void 0,transition:typeof y=="function"?y(c):y,...g};return Be.createElement(r,{className:p,style:A,ref:i},f)}),cy=o=>i=>{let{active:r,dragOverlay:c}=i;const u={},{styles:f,className:p}=o;if(f!=null&&f.active)for(const[m,g]of Object.entries(f.active))g!==void 0&&(u[m]=r.node.style.getPropertyValue(m),r.node.style.setProperty(m,g));if(f!=null&&f.dragOverlay)for(const[m,g]of Object.entries(f.dragOverlay))g!==void 0&&c.node.style.setProperty(m,g);return p!=null&&p.active&&r.node.classList.add(p.active),p!=null&&p.dragOverlay&&c.node.classList.add(p.dragOverlay),function(){for(const[g,v]of Object.entries(u))r.node.style.setProperty(g,v);p!=null&&p.active&&r.node.classList.remove(p.active)}},uy=o=>{let{transform:{initial:i,final:r}}=o;return[{transform:ha.Transform.toString(i)},{transform:ha.Transform.toString(r)}]},dy={duration:250,easing:"ease",keyframes:uy,sideEffects:cy({styles:{active:{opacity:"0"}}})};function fy(o){let{config:i,draggableNodes:r,droppableContainers:c,measuringConfiguration:u}=o;return bo((f,p)=>{if(i===null)return;const m=r.get(f);if(!m)return;const g=m.node.current;if(!g)return;const v=Ng(p);if(!v)return;const{transform:y}=vt(p).getComputedStyle(p),S=pg(y);if(!S)return;const A=typeof i=="function"?i:py(i);return xg(g,u.draggable.measure),A({active:{id:f,data:m.data,node:g,rect:u.draggable.measure(g)},draggableNodes:r,dragOverlay:{node:p,rect:u.dragOverlay.measure(v)},droppableContainers:c,measuringConfiguration:u,transform:S})})}function py(o){const{duration:i,easing:r,sideEffects:c,keyframes:u}={...dy,...o};return f=>{let{active:p,dragOverlay:m,transform:g,...v}=f;if(!i)return;const y={x:m.rect.left-p.rect.left,y:m.rect.top-p.rect.top},S={scaleX:g.scaleX!==1?p.rect.width*g.scaleX/m.rect.width:1,scaleY:g.scaleY!==1?p.rect.height*g.scaleY/m.rect.height:1},A={x:g.x-y.x,y:g.y-y.y,...S},R=u({...v,active:p,dragOverlay:m,transform:{initial:g,final:A}}),[H]=R,B=R[R.length-1];if(JSON.stringify(H)===JSON.stringify(B))return;const K=c==null?void 0:c({active:p,dragOverlay:m,...v}),X=m.node.animate(R,{duration:i,easing:r,fill:"forwards"});return new Promise(J=>{X.onfinish=()=>{K==null||K(),J()}})}}let Hh=0;function hy(o){return T.useMemo(()=>{if(o!=null)return Hh++,Hh},[o])}const gy=Be.memo(o=>{let{adjustScale:i=!1,children:r,dropAnimation:c,style:u,transition:f,modifiers:p,wrapperElement:m="div",className:g,zIndex:v=999}=o;const{activatorEvent:y,active:S,activeNodeRect:A,containerNodeRect:R,draggableNodes:H,droppableContainers:B,dragOverlay:K,over:X,measuringConfiguration:J,scrollableAncestors:L,scrollableAncestorRects:Q,windowRect:$}=Ag(),V=T.useContext(So),q=hy(S==null?void 0:S.id),Y=Eg(p,{activatorEvent:y,active:S,activeNodeRect:A,containerNodeRect:R,draggingNodeRect:K.rect,over:X,overlayNodeRect:K.rect,scrollableAncestors:L,scrollableAncestorRects:Q,transform:V,windowRect:$}),ee=fu(A),ue=fy({config:c,draggableNodes:H,droppableContainers:B,measuringConfiguration:J}),se=ee?K.setRef:void 0;return Be.createElement(iy,null,Be.createElement(ay,{animation:ue},S&&q?Be.createElement(ry,{key:q,id:S.id,ref:se,as:m,activatorEvent:y,adjustScale:i,className:g,transition:f,rect:ee,style:{zIndex:v,...u},transform:Y},r):null))});function zg(o,i,r){const c=o.slice();return c.splice(r<0?c.length+r:r,0,c.splice(i,1)[0]),c}function my(o,i){return o.reduce((r,c,u)=>{const f=i.get(c);return f&&(r[u]=f),r},Array(o.length))}function no(o){return o!==null&&o>=0}function vy(o,i){if(o===i)return!0;if(o.length!==i.length)return!1;for(let r=0;r<o.length;r++)if(o[r]!==i[r])return!1;return!0}function by(o){return typeof o=="boolean"?{draggable:o,droppable:o}:o}const Rg=o=>{let{rects:i,activeIndex:r,overIndex:c,index:u}=o;const f=zg(i,c,r),p=i[u],m=f[u];return!m||!p?null:{x:m.left-p.left,y:m.top-p.top,scaleX:m.width/p.width,scaleY:m.height/p.height}},ao={scaleX:1,scaleY:1},yy=o=>{var i;let{activeIndex:r,activeNodeRect:c,index:u,rects:f,overIndex:p}=o;const m=(i=f[r])!=null?i:c;if(!m)return null;if(u===r){const v=f[p];return v?{x:0,y:r<p?v.top+v.height-(m.top+m.height):v.top-m.top,...ao}:null}const g=xy(f,u,r);return u>r&&u<=p?{x:0,y:-m.height-g,...ao}:u<r&&u>=p?{x:0,y:m.height+g,...ao}:{x:0,y:0,...ao}};function xy(o,i,r){const c=o[i],u=o[i-1],f=o[i+1];return c?r<i?u?c.top-(u.top+u.height):f?f.top-(c.top+c.height):0:f?f.top-(c.top+c.height):u?c.top-(u.top+u.height):0:0}const Mg="Sortable",kg=Be.createContext({activeIndex:-1,containerId:Mg,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Rg,disabled:{draggable:!1,droppable:!1}});function Sy(o){let{children:i,id:r,items:c,strategy:u=Rg,disabled:f=!1}=o;const{active:p,dragOverlay:m,droppableRects:g,over:v,measureDroppableContainers:y}=Ag(),S=Ui(Mg,r),A=m.rect!==null,R=T.useMemo(()=>c.map(V=>typeof V=="object"&&"id"in V?V.id:V),[c]),H=p!=null,B=p?R.indexOf(p.id):-1,K=v?R.indexOf(v.id):-1,X=T.useRef(R),J=!vy(R,X.current),L=K!==-1&&B===-1||J,Q=by(f);on(()=>{J&&H&&y(R)},[J,R,H,y]),T.useEffect(()=>{X.current=R},[R]);const $=T.useMemo(()=>({activeIndex:B,containerId:S,disabled:Q,disableTransforms:L,items:R,overIndex:K,useDragOverlay:A,sortedRects:my(R,g),strategy:u}),[B,S,Q.draggable,Q.droppable,L,R,K,g,A,u]);return Be.createElement(kg.Provider,{value:$},i)}const wy=o=>{let{id:i,items:r,activeIndex:c,overIndex:u}=o;return zg(r,c,u).indexOf(i)},Cy=o=>{let{containerId:i,isSorting:r,wasDragging:c,index:u,items:f,newIndex:p,previousItems:m,previousContainerId:g,transition:v}=o;return!v||!c||m!==f&&u===p?!1:r?!0:p!==u&&i===g},Ny={duration:200,easing:"ease"},Og="transform",Ty=ha.Transition.toString({property:Og,duration:0,easing:"linear"}),Dy={roleDescription:"sortable"};function Ey(o){let{disabled:i,index:r,node:c,rect:u}=o;const[f,p]=T.useState(null),m=T.useRef(r);return on(()=>{if(!i&&r!==m.current&&c.current){const g=u.current;if(g){const v=El(c.current,{ignoreTransform:!0}),y={x:g.left-v.left,y:g.top-v.top,scaleX:g.width/v.width,scaleY:g.height/v.height};(y.x||y.y)&&p(y)}}r!==m.current&&(m.current=r)},[i,r,c,u]),T.useEffect(()=>{f&&p(null)},[f]),f}function Ay(o){let{animateLayoutChanges:i=Cy,attributes:r,disabled:c,data:u,getNewIndex:f=wy,id:p,strategy:m,resizeObserverConfig:g,transition:v=Ny}=o;const{items:y,containerId:S,activeIndex:A,disabled:R,disableTransforms:H,sortedRects:B,overIndex:K,useDragOverlay:X,strategy:J}=T.useContext(kg),L=zy(c,R),Q=y.indexOf(p),$=T.useMemo(()=>({sortable:{containerId:S,index:Q,items:y},...u}),[S,u,Q,y]),V=T.useMemo(()=>y.slice(y.indexOf(p)),[y,p]),{rect:q,node:Y,isOver:ee,setNodeRef:ue}=ny({id:p,data:$,disabled:L.droppable,resizeObserverConfig:{updateMeasurementsFor:V,...g}}),{active:se,activatorEvent:ge,activeNodeRect:Ue,attributes:Ve,setNodeRef:lt,listeners:k,isDragging:G,over:te,setActivatorNodeRef:ce,transform:ye}=P1({id:p,data:$,attributes:{...Dy,...r},disabled:L.draggable}),C=_b(ue,lt),O=!!se,Z=O&&!H&&no(A)&&no(K),I=!X&&G,le=I&&Z?ye:null,me=Z?le??(m??J)({rects:B,activeNodeRect:Ue,activeIndex:A,overIndex:K,index:Q}):null,He=no(A)&&no(K)?f({id:p,items:y,activeIndex:A,overIndex:K}):Q,we=se==null?void 0:se.id,be=T.useRef({activeId:we,items:y,newIndex:He,containerId:S}),cn=y!==be.current.items,bt=i({active:se,containerId:S,isDragging:G,isSorting:O,id:p,index:Q,items:y,newIndex:be.current.newIndex,previousItems:be.current.items,previousContainerId:be.current.containerId,transition:v,wasDragging:be.current.activeId!=null}),yn=Ey({disabled:!bt,index:Q,node:Y,rect:q});return T.useEffect(()=>{O&&be.current.newIndex!==He&&(be.current.newIndex=He),S!==be.current.containerId&&(be.current.containerId=S),y!==be.current.items&&(be.current.items=y)},[O,He,S,y]),T.useEffect(()=>{if(we===be.current.activeId)return;if(we!=null&&be.current.activeId==null){be.current.activeId=we;return}const un=setTimeout(()=>{be.current.activeId=we},50);return()=>clearTimeout(un)},[we]),{active:se,activeIndex:A,attributes:Ve,data:$,rect:q,index:Q,newIndex:He,items:y,isOver:ee,isSorting:O,isDragging:G,listeners:k,node:Y,overIndex:K,over:te,setNodeRef:C,setActivatorNodeRef:ce,setDroppableNodeRef:ue,setDraggableNodeRef:lt,transform:yn??me,transition:it()};function it(){if(yn||cn&&be.current.newIndex===Q)return Ty;if(!(I&&!yo(ge)||!v)&&(O||bt))return ha.Transition.toString({...v,property:Og})}}function zy(o,i){var r,c;return typeof o=="boolean"?{draggable:o,droppable:!1}:{draggable:(r=o==null?void 0:o.draggable)!=null?r:i.draggable,droppable:(c=o==null?void 0:o.droppable)!=null?c:i.droppable}}Ne.Down,Ne.Right,Ne.Up,Ne.Left;function Ry({prd:o,projectId:i,onClose:r,onSave:c}){const[u,f]=T.useState((o==null?void 0:o.title)??""),[p,m]=T.useState((o==null?void 0:o.content)??""),g=T.useRef();function v(S){const A=S.target.files[0];if(!A)return;const R=A.name.replace(/\.md$/i,"").replace(/[-_]/g," "),H=new FileReader;H.onload=B=>{u||f(R),m(B.target.result)},H.readAsText(A)}function y(){const S=u.trim();S&&c({title:S,content:p})}return b.jsx("div",{className:"prd-editor-scrim",onClick:S=>S.target===S.currentTarget&&r(),children:b.jsxs("div",{className:"prd-editor-modal",children:[b.jsxs("div",{className:"prd-editor-header",children:[b.jsx("span",{className:"prd-editor-title",children:o?"Edit PRD":"New PRD"}),b.jsx("button",{className:"prd-editor-close",onClick:r,children:"✕"})]}),b.jsxs("div",{className:"prd-editor-body",children:[b.jsxs("div",{className:"prd-editor-field",children:[b.jsx("label",{className:"prd-editor-label",children:"Title"}),b.jsx("input",{className:"prd-editor-input",type:"text",placeholder:"e.g. Producer Filter Modal",value:u,onChange:S=>f(S.target.value),autoFocus:!0})]}),b.jsxs("div",{className:"prd-editor-field prd-editor-field--grow",children:[b.jsxs("div",{className:"prd-editor-label-row",children:[b.jsx("label",{className:"prd-editor-label",children:"Content"}),b.jsx("button",{className:"prd-editor-load-file",onClick:()=>g.current.click(),children:"Load from .md file"}),b.jsx("input",{ref:g,type:"file",accept:".md,.txt",style:{display:"none"},onChange:v})]}),b.jsx("textarea",{className:"prd-editor-textarea",placeholder:"Paste your PRD markdown here…",value:p,onChange:S=>m(S.target.value)})]})]}),b.jsxs("div",{className:"prd-editor-footer",children:[b.jsx("button",{className:"prd-editor-btn prd-editor-btn--cancel",onClick:r,children:"Cancel"}),b.jsx("button",{className:"prd-editor-btn prd-editor-btn--save",onClick:y,disabled:!u.trim(),children:o?"Save changes":"Create PRD"})]})]})})}function jg(o){const i=Math.floor((Date.now()-new Date(o))/6e4);if(i<1)return"just now";if(i<60)return`${i}m ago`;const r=Math.floor(i/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}function My({status:o}){return b.jsx("span",{className:`prd-status prd-status--${o}`,children:sg[o]})}function ky({prd:o,onEdit:i,onDelete:r,onOpen:c,isDragging:u}){const{attributes:f,listeners:p,setNodeRef:m,transform:g,transition:v}=Ay({id:o.id}),y={transform:ha.Transform.toString(g),transition:v,opacity:u?.4:1};return b.jsxs("div",{ref:m,style:y,className:"kanban-card",...f,...p,children:[b.jsx("div",{className:"kanban-card-title",children:o.title}),b.jsx("div",{className:"kanban-card-meta",children:jg(o.updatedAt)}),b.jsxs("div",{className:"kanban-card-actions",onPointerDown:S=>S.stopPropagation(),children:[b.jsx("button",{className:"kanban-card-btn",onClick:()=>c(o),children:"Open →"}),b.jsx("button",{className:"kanban-card-btn",onClick:()=>i(o),children:"Edit"}),b.jsx("button",{className:"kanban-card-btn kanban-card-btn--danger",onClick:()=>r(o.id),children:"Delete"})]})]})}function Oy({status:o,prds:i,onEdit:r,onDelete:c,onOpen:u,activeId:f}){return b.jsxs("div",{className:"kanban-col",children:[b.jsxs("div",{className:"kanban-col-header",children:[b.jsx("span",{className:"kanban-col-title",children:sg[o]}),b.jsx("span",{className:"kanban-col-count",children:i.length})]}),b.jsx(Sy,{items:i.map(p=>p.id),strategy:yy,children:b.jsxs("div",{className:"kanban-col-cards",children:[i.map(p=>b.jsx(ky,{prd:p,onEdit:r,onDelete:c,onOpen:u,isDragging:f===p.id},p.id)),i.length===0&&b.jsx("div",{className:"kanban-col-empty",children:"Drop here"})]})})]})}function jy({projectId:o,prds:i,onNavigate:r,onPrdsChange:c}){const u=rg(o),f=i.filter(L=>L.projectId===o),[p,m]=T.useState("kanban"),[g,v]=T.useState(!1),[y,S]=T.useState(null),[A,R]=T.useState(null),H=Ib($b(du,{activationConstraint:{distance:6}}));function B({active:L}){R(L.id)}function K({active:L,over:Q}){if(R(null),!Q||L.id===Q.id)return;const $=f.find(Y=>Y.id===L.id);if(!$)return;const V=f.find(Y=>Y.id===Q.id),q=V?V.status:Q.id;Nh.includes(q)&&$.status!==q&&c(Y=>Y.map(ee=>ee.id===L.id?{...ee,status:q,updatedAt:new Date().toISOString()}:ee))}function X({active:L,over:Q}){if(!Q)return;const $=f.find(q=>q.id===L.id),V=f.find(q=>q.id===Q.id);!$||!V||$.status!==V.status&&c(q=>q.map(Y=>Y.id===L.id?{...Y,status:V.status,updatedAt:new Date().toISOString()}:Y))}const J=A?f.find(L=>L.id===A):null;return b.jsxs("div",{className:"project-view",children:[b.jsxs("header",{className:"project-view-header",children:[b.jsx("button",{className:"project-back-btn",onClick:()=>r({page:"projects"}),children:"← Projects"}),b.jsxs("div",{className:"project-view-title",children:[b.jsx("span",{className:"project-view-icon",children:u==null?void 0:u.icon}),b.jsx("span",{className:"project-view-name",children:u==null?void 0:u.name})]}),b.jsxs("div",{className:"project-view-actions",children:[b.jsxs("div",{className:"view-toggle",children:[b.jsx("button",{className:`view-toggle-btn ${p==="list"?"active":""}`,onClick:()=>m("list"),children:"List"}),b.jsx("button",{className:`view-toggle-btn ${p==="kanban"?"active":""}`,onClick:()=>m("kanban"),children:"Kanban"})]}),b.jsx("button",{className:"new-prd-btn",onClick:()=>{S(null),v(!0)},children:"+ New PRD"})]})]}),b.jsx("div",{className:"project-view-body",children:p==="list"?b.jsx("div",{className:"prd-list",children:f.length===0?b.jsx("div",{className:"prd-list-empty",children:"No PRDs yet — create one to get started."}):b.jsxs("table",{className:"prd-table",children:[b.jsx("thead",{children:b.jsxs("tr",{children:[b.jsx("th",{children:"Title"}),b.jsx("th",{children:"Status"}),b.jsx("th",{children:"Updated"}),b.jsx("th",{})]})}),b.jsx("tbody",{children:f.map(L=>b.jsxs("tr",{children:[b.jsx("td",{className:"prd-table-title",children:L.title}),b.jsx("td",{children:b.jsx(My,{status:L.status})}),b.jsx("td",{className:"prd-table-date",children:jg(L.updatedAt)}),b.jsxs("td",{className:"prd-table-actions",children:[b.jsx("button",{className:"prd-action-btn",onClick:()=>r({page:"builder",prdId:L.id}),children:"Open →"}),b.jsx("button",{className:"prd-action-btn",onClick:()=>{S(L),v(!0)},children:"Edit"}),b.jsx("button",{className:"prd-action-btn prd-action-btn--danger",onClick:()=>c(Q=>Q.filter($=>$.id!==L.id)),children:"Delete"})]})]},L.id))})]})}):b.jsxs(I1,{sensors:H,collisionDetection:n1,onDragStart:B,onDragOver:X,onDragEnd:K,children:[b.jsx("div",{className:"kanban-board",children:Nh.map(L=>b.jsx(Oy,{status:L,prds:f.filter(Q=>Q.status===L),onEdit:Q=>{S(Q),v(!0)},onDelete:Q=>c($=>$.filter(V=>V.id!==Q)),onOpen:Q=>r({page:"builder",prdId:Q.id}),activeId:A},L))}),b.jsx(gy,{children:J?b.jsx("div",{className:"kanban-card kanban-card--overlay",children:b.jsx("div",{className:"kanban-card-title",children:J.title})}):null})]})}),g&&b.jsx(Ry,{prd:y,projectId:o,onClose:()=>v(!1),onSave:L=>{if(y)c(Q=>Q.map($=>$.id===y.id?{...$,...L,updatedAt:new Date().toISOString()}:$));else{const Q={id:`prd-${Date.now()}`,projectId:o,status:"backlog",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),...L};c($=>[...$,Q])}v(!1)}})]})}function _y(){const[o,i]=T.useState(()=>!!Ph()),[r,c]=T.useState({page:"projects"}),[u,f]=T.useState(()=>(Rb(),mo())),[p,m]=T.useState(null),[g,v]=T.useState(null),[y,S]=T.useState([]),[A,R]=T.useState(null),[H,B]=T.useState(Fv),[K,X]=T.useState(0);function J(Y){if(Y.page==="builder"&&Y.prdId){const ee=Mb(Y.prdId);ee&&Q(ee)}c(Y)}function L(Y){f(ee=>{const ue=typeof Y=="function"?Y(ee):Y;return og(ue),ue})}function Q(Y){m({id:Y.id,name:Y.title,content:Y.content}),S([]),v(null),R(vb(Y.title))}function $(Y){if(v(Y),p){const ue=[Wv({prdName:p.name,code:Y,iteration:((A==null?void 0:A.iterations)??0)+1}),...H].slice(0,50);B(ue),Sh(ue)}}function V({inputTokens:Y,outputTokens:ee,cacheReadTokens:ue,componentsUsed:se}){R(ge=>{if(!ge)return ge;const Ue={...ge,iterations:ge.iterations+1,inputTokens:ge.inputTokens+Y,outputTokens:ge.outputTokens+ee,cacheReadTokens:ge.cacheReadTokens+ue,componentsUsed:[...new Set([...ge.componentsUsed,...se])]};return Ue.cost=mb(Ue),Jc(Ue),Ue})}function q(){B([]),Sh([])}return o?r.page==="projects"?b.jsx(jb,{prds:u,onNavigate:J}):r.page==="project"?b.jsx(jy,{projectId:r.projectId,prds:u,onNavigate:J,onPrdsChange:L}):b.jsxs("div",{className:"app",children:[b.jsxs("header",{className:"app-header",children:[b.jsxs("div",{className:"app-header-left",children:[b.jsx("button",{className:"app-back-btn",onClick:()=>J({page:"projects"}),children:"← Projects"}),b.jsx("span",{className:"app-header-sep"}),b.jsx("span",{className:"app-logo",children:"ennabl"}),b.jsx("span",{className:"app-logo-suffix",children:"builder"}),p&&b.jsx("span",{className:"app-prd-badge",children:p.name})]}),b.jsx(Ob,{onSelect:Y=>{Q(Y)}})]}),b.jsxs("main",{className:"app-panels",children:[b.jsx(lb,{code:g,prd:p,history:H,onHistoryClear:q,onInitDesign:()=>X(Y=>Y+1)}),b.jsx("div",{className:"app-divider"}),b.jsx(Eb,{prd:p,messages:y,setMessages:S,onCodeGenerated:$,onIterationComplete:V,session:A,onSessionUpdate:R,initTrigger:K})]})]}):b.jsx(Ab,{onDone:()=>i(!0)})}lv.createRoot(document.getElementById("root")).render(b.jsx(T.StrictMode,{children:b.jsx(_y,{})}));
