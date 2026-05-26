var l2=Object.defineProperty;var k1=s=>{throw TypeError(s)};var i2=(s,l,i)=>l in s?l2(s,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[l]=i;var Ue=(s,l,i)=>i2(s,typeof l!="symbol"?l+"":l,i),s2=(s,l,i)=>l.has(s)||k1("Cannot "+i);var D1=(s,l,i)=>l.has(s)?k1("Cannot add the same private member more than once"):l instanceof WeakSet?l.add(s):l.set(s,i);var Ni=(s,l,i)=>(s2(s,l,"access private method"),i);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function i(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(u){if(u.ep)return;u.ep=!0;const d=i(u);fetch(u.href,d)}})();function o2(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Vc={exports:{}},Ti={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M1;function r2(){if(M1)return Ti;M1=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function i(o,u,d){var f=null;if(d!==void 0&&(f=""+d),u.key!==void 0&&(f=""+u.key),"key"in u){d={};for(var m in u)m!=="key"&&(d[m]=u[m])}else d=u;return u=d.ref,{$$typeof:s,type:o,key:f,ref:u!==void 0?u:null,props:d}}return Ti.Fragment=l,Ti.jsx=i,Ti.jsxs=i,Ti}var R1;function c2(){return R1||(R1=1,Vc.exports=r2()),Vc.exports}var b=c2(),Ic={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j1;function u2(){if(j1)return fe;j1=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),T=Symbol.iterator;function A(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,B={};function Z(E,L,K){this.props=E,this.context=L,this.refs=B,this.updater=K||k}Z.prototype.isReactComponent={},Z.prototype.setState=function(E,L){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,L,"setState")},Z.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function G(){}G.prototype=Z.prototype;function $(E,L,K){this.props=E,this.context=L,this.refs=B,this.updater=K||k}var X=$.prototype=new G;X.constructor=$,M(X,Z.prototype),X.isPureReactComponent=!0;var I=Array.isArray;function F(){}var q={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ue(E,L,K){var J=K.ref;return{$$typeof:s,type:E,key:L,ref:J!==void 0?J:null,props:K}}function pe(E,L){return ue(E.type,L,E.props)}function de(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function me(E){var L={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(K){return L[K]})}var Ae=/\/+/g;function ke(E,L){return typeof E=="object"&&E!==null&&E.key!=null?me(""+E.key):L.toString(36)}function ae(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(F,F):(E.status="pending",E.then(function(L){E.status==="pending"&&(E.status="fulfilled",E.value=L)},function(L){E.status==="pending"&&(E.status="rejected",E.reason=L)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function j(E,L,K,J,Y){var Q=typeof E;(Q==="undefined"||Q==="boolean")&&(E=null);var P=!1;if(E===null)P=!0;else switch(Q){case"bigint":case"string":case"number":P=!0;break;case"object":switch(E.$$typeof){case s:case l:P=!0;break;case x:return P=E._init,j(P(E._payload),L,K,J,Y)}}if(P)return Y=Y(E),P=J===""?"."+ke(E,0):J,I(Y)?(K="",P!=null&&(K=P.replace(Ae,"$&/")+"/"),j(Y,L,K,"",function(re){return re})):Y!=null&&(de(Y)&&(Y=pe(Y,K+(Y.key==null||E&&E.key===Y.key?"":(""+Y.key).replace(Ae,"$&/")+"/")+P)),L.push(Y)),1;P=0;var ie=J===""?".":J+":";if(I(E))for(var le=0;le<E.length;le++)J=E[le],Q=ie+ke(J,le),P+=j(J,L,K,Q,Y);else if(le=A(E),typeof le=="function")for(E=le.call(E),le=0;!(J=E.next()).done;)J=J.value,Q=ie+ke(J,le++),P+=j(J,L,K,Q,Y);else if(Q==="object"){if(typeof E.then=="function")return j(ae(E),L,K,J,Y);throw L=String(E),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return P}function V(E,L,K){if(E==null)return E;var J=[],Y=0;return j(E,J,"","",function(Q){return L.call(K,Q,Y++)}),J}function W(E){if(E._status===-1){var L=E._result;L=L(),L.then(function(K){(E._status===0||E._status===-1)&&(E._status=1,E._result=K)},function(K){(E._status===0||E._status===-1)&&(E._status=2,E._result=K)}),E._status===-1&&(E._status=0,E._result=L)}if(E._status===1)return E._result.default;throw E._result}var ce=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},be={map:V,forEach:function(E,L,K){V(E,function(){L.apply(this,arguments)},K)},count:function(E){var L=0;return V(E,function(){L++}),L},toArray:function(E){return V(E,function(L){return L})||[]},only:function(E){if(!de(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return fe.Activity=S,fe.Children=be,fe.Component=Z,fe.Fragment=i,fe.Profiler=u,fe.PureComponent=$,fe.StrictMode=o,fe.Suspense=g,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,fe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return q.H.useMemoCache(E)}},fe.cache=function(E){return function(){return E.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(E,L,K){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var J=M({},E.props),Y=E.key;if(L!=null)for(Q in L.key!==void 0&&(Y=""+L.key),L)!te.call(L,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&L.ref===void 0||(J[Q]=L[Q]);var Q=arguments.length-2;if(Q===1)J.children=K;else if(1<Q){for(var P=Array(Q),ie=0;ie<Q;ie++)P[ie]=arguments[ie+2];J.children=P}return ue(E.type,Y,J)},fe.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},fe.createElement=function(E,L,K){var J,Y={},Q=null;if(L!=null)for(J in L.key!==void 0&&(Q=""+L.key),L)te.call(L,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(Y[J]=L[J]);var P=arguments.length-2;if(P===1)Y.children=K;else if(1<P){for(var ie=Array(P),le=0;le<P;le++)ie[le]=arguments[le+2];Y.children=ie}if(E&&E.defaultProps)for(J in P=E.defaultProps,P)Y[J]===void 0&&(Y[J]=P[J]);return ue(E,Q,Y)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(E){return{$$typeof:m,render:E}},fe.isValidElement=de,fe.lazy=function(E){return{$$typeof:x,_payload:{_status:-1,_result:E},_init:W}},fe.memo=function(E,L){return{$$typeof:v,type:E,compare:L===void 0?null:L}},fe.startTransition=function(E){var L=q.T,K={};q.T=K;try{var J=E(),Y=q.S;Y!==null&&Y(K,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(F,ce)}catch(Q){ce(Q)}finally{L!==null&&K.types!==null&&(L.types=K.types),q.T=L}},fe.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},fe.use=function(E){return q.H.use(E)},fe.useActionState=function(E,L,K){return q.H.useActionState(E,L,K)},fe.useCallback=function(E,L){return q.H.useCallback(E,L)},fe.useContext=function(E){return q.H.useContext(E)},fe.useDebugValue=function(){},fe.useDeferredValue=function(E,L){return q.H.useDeferredValue(E,L)},fe.useEffect=function(E,L){return q.H.useEffect(E,L)},fe.useEffectEvent=function(E){return q.H.useEffectEvent(E)},fe.useId=function(){return q.H.useId()},fe.useImperativeHandle=function(E,L,K){return q.H.useImperativeHandle(E,L,K)},fe.useInsertionEffect=function(E,L){return q.H.useInsertionEffect(E,L)},fe.useLayoutEffect=function(E,L){return q.H.useLayoutEffect(E,L)},fe.useMemo=function(E,L){return q.H.useMemo(E,L)},fe.useOptimistic=function(E,L){return q.H.useOptimistic(E,L)},fe.useReducer=function(E,L,K){return q.H.useReducer(E,L,K)},fe.useRef=function(E){return q.H.useRef(E)},fe.useState=function(E){return q.H.useState(E)},fe.useSyncExternalStore=function(E,L,K){return q.H.useSyncExternalStore(E,L,K)},fe.useTransition=function(){return q.H.useTransition()},fe.version="19.2.6",fe}var O1;function hu(){return O1||(O1=1,Ic.exports=u2()),Ic.exports}var h=hu();const Ve=o2(h);var Yc={exports:{}},ki={},Gc={exports:{}},Xc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1;function d2(){return z1||(z1=1,(function(s){function l(j,V){var W=j.length;j.push(V);e:for(;0<W;){var ce=W-1>>>1,be=j[ce];if(0<u(be,V))j[ce]=V,j[W]=be,W=ce;else break e}}function i(j){return j.length===0?null:j[0]}function o(j){if(j.length===0)return null;var V=j[0],W=j.pop();if(W!==V){j[0]=W;e:for(var ce=0,be=j.length,E=be>>>1;ce<E;){var L=2*(ce+1)-1,K=j[L],J=L+1,Y=j[J];if(0>u(K,W))J<be&&0>u(Y,K)?(j[ce]=Y,j[J]=W,ce=J):(j[ce]=K,j[L]=W,ce=L);else if(J<be&&0>u(Y,W))j[ce]=Y,j[J]=W,ce=J;else break e}}return V}function u(j,V){var W=j.sortIndex-V.sortIndex;return W!==0?W:j.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;s.unstable_now=function(){return d.now()}}else{var f=Date,m=f.now();s.unstable_now=function(){return f.now()-m}}var g=[],v=[],x=1,S=null,T=3,A=!1,k=!1,M=!1,B=!1,Z=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function X(j){for(var V=i(v);V!==null;){if(V.callback===null)o(v);else if(V.startTime<=j)o(v),V.sortIndex=V.expirationTime,l(g,V);else break;V=i(v)}}function I(j){if(M=!1,X(j),!k)if(i(g)!==null)k=!0,F||(F=!0,me());else{var V=i(v);V!==null&&ae(I,V.startTime-j)}}var F=!1,q=-1,te=5,ue=-1;function pe(){return B?!0:!(s.unstable_now()-ue<te)}function de(){if(B=!1,F){var j=s.unstable_now();ue=j;var V=!0;try{e:{k=!1,M&&(M=!1,G(q),q=-1),A=!0;var W=T;try{t:{for(X(j),S=i(g);S!==null&&!(S.expirationTime>j&&pe());){var ce=S.callback;if(typeof ce=="function"){S.callback=null,T=S.priorityLevel;var be=ce(S.expirationTime<=j);if(j=s.unstable_now(),typeof be=="function"){S.callback=be,X(j),V=!0;break t}S===i(g)&&o(g),X(j)}else o(g);S=i(g)}if(S!==null)V=!0;else{var E=i(v);E!==null&&ae(I,E.startTime-j),V=!1}}break e}finally{S=null,T=W,A=!1}V=void 0}}finally{V?me():F=!1}}}var me;if(typeof $=="function")me=function(){$(de)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,ke=Ae.port2;Ae.port1.onmessage=de,me=function(){ke.postMessage(null)}}else me=function(){Z(de,0)};function ae(j,V){q=Z(function(){j(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return T},s.unstable_next=function(j){switch(T){case 1:case 2:case 3:var V=3;break;default:V=T}var W=T;T=V;try{return j()}finally{T=W}},s.unstable_requestPaint=function(){B=!0},s.unstable_runWithPriority=function(j,V){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var W=T;T=j;try{return V()}finally{T=W}},s.unstable_scheduleCallback=function(j,V,W){var ce=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ce+W:ce):W=ce,j){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=W+be,j={id:x++,callback:V,priorityLevel:j,startTime:W,expirationTime:be,sortIndex:-1},W>ce?(j.sortIndex=W,l(v,j),i(g)===null&&j===i(v)&&(M?(G(q),q=-1):M=!0,ae(I,W-ce))):(j.sortIndex=be,l(g,j),k||A||(k=!0,F||(F=!0,me()))),j},s.unstable_shouldYield=pe,s.unstable_wrapCallback=function(j){var V=T;return function(){var W=T;T=V;try{return j.apply(this,arguments)}finally{T=W}}}})(Xc)),Xc}var L1;function f2(){return L1||(L1=1,Gc.exports=d2()),Gc.exports}var Qc={exports:{}},mt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _1;function p2(){if(_1)return mt;_1=1;var s=hu();function l(g){var v="https://react.dev/errors/"+g;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)v+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(l(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(g,v,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:S==null?null:""+S,children:g,containerInfo:v,implementation:x}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,v){if(g==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,mt.createPortal=function(g,v){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(l(299));return d(g,v,null,x)},mt.flushSync=function(g){var v=f.T,x=o.p;try{if(f.T=null,o.p=2,g)return g()}finally{f.T=v,o.p=x,o.d.f()}},mt.preconnect=function(g,v){typeof g=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,o.d.C(g,v))},mt.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},mt.preinit=function(g,v){if(typeof g=="string"&&v&&typeof v.as=="string"){var x=v.as,S=m(x,v.crossOrigin),T=typeof v.integrity=="string"?v.integrity:void 0,A=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;x==="style"?o.d.S(g,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:S,integrity:T,fetchPriority:A}):x==="script"&&o.d.X(g,{crossOrigin:S,integrity:T,fetchPriority:A,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},mt.preinitModule=function(g,v){if(typeof g=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var x=m(v.as,v.crossOrigin);o.d.M(g,{crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&o.d.M(g)},mt.preload=function(g,v){if(typeof g=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var x=v.as,S=m(x,v.crossOrigin);o.d.L(g,x,{crossOrigin:S,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},mt.preloadModule=function(g,v){if(typeof g=="string")if(v){var x=m(v.as,v.crossOrigin);o.d.m(g,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else o.d.m(g)},mt.requestFormReset=function(g){o.d.r(g)},mt.unstable_batchedUpdates=function(g,v){return g(v)},mt.useFormState=function(g,v,x){return f.H.useFormState(g,v,x)},mt.useFormStatus=function(){return f.H.useHostTransitionStatus()},mt.version="19.2.6",mt}var U1;function xp(){if(U1)return Qc.exports;U1=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),Qc.exports=p2(),Qc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H1;function h2(){if(H1)return ki;H1=1;var s=f2(),l=hu(),i=xp();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(o(188))}function v(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var c=r.alternate;if(c===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===n)return g(r),e;if(c===a)return g(r),t;c=c.sibling}throw Error(o(188))}if(n.return!==a.return)n=r,a=c;else{for(var p=!1,y=r.child;y;){if(y===n){p=!0,n=r,a=c;break}if(y===a){p=!0,a=r,n=c;break}y=y.sibling}if(!p){for(y=c.child;y;){if(y===n){p=!0,n=c,a=r;break}if(y===a){p=!0,a=c,n=r;break}y=y.sibling}if(!p)throw Error(o(189))}}if(n.alternate!==a)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,T=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),$=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),pe=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function me(e){return e===null||typeof e!="object"?null:(e=de&&e[de]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case Z:return"Profiler";case B:return"StrictMode";case I:return"Suspense";case F:return"SuspenseList";case ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case $:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case te:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}var ae=Array.isArray,j=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ce=[],be=-1;function E(e){return{current:e}}function L(e){0>be||(e.current=ce[be],ce[be]=null,be--)}function K(e,t){be++,ce[be]=e.current,e.current=t}var J=E(null),Y=E(null),Q=E(null),P=E(null);function ie(e,t){switch(K(Q,t),K(Y,e),K(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Jf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Jf(t),e=Pf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(J),K(J,e)}function le(){L(J),L(Y),L(Q)}function re(e){e.memoizedState!==null&&K(P,e);var t=J.current,n=Pf(t,e.type);t!==n&&(K(Y,e),K(J,n))}function St(e){Y.current===e&&(L(J),L(Y)),P.current===e&&(L(P),wi._currentValue=W)}var nt,qt;function qe(e){if(nt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);nt=t&&t[1]||"",qt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nt+e+qt}var pn=!1;function hn(e,t){if(!e||pn)return"";pn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(z){var O=z}Reflect.construct(e,[],H)}else{try{H.call()}catch(z){O=z}e.call(H.prototype)}}else{try{throw Error()}catch(z){O=z}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(z){if(z&&O&&typeof z.stack=="string")return[z.stack,O.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),p=c[0],y=c[1];if(p&&y){var w=p.split(`
`),R=y.split(`
`);for(r=a=0;a<w.length&&!w[a].includes("DetermineComponentFrameRoot");)a++;for(;r<R.length&&!R[r].includes("DetermineComponentFrameRoot");)r++;if(a===w.length||r===R.length)for(a=w.length-1,r=R.length-1;1<=a&&0<=r&&w[a]!==R[r];)r--;for(;1<=a&&0<=r;a--,r--)if(w[a]!==R[r]){if(a!==1||r!==1)do if(a--,r--,0>r||w[a]!==R[r]){var _=`
`+w[a].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=a&&0<=r);break}}}finally{pn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?qe(n):""}function Gi(e,t){switch(e.tag){case 26:case 27:case 5:return qe(e.type);case 16:return qe("Lazy");case 13:return e.child!==t&&t!==null?qe("Suspense Fallback"):qe("Suspense");case 19:return qe("SuspenseList");case 0:case 15:return hn(e.type,!1);case 11:return hn(e.type.render,!1);case 1:return hn(e.type,!0);case 31:return qe("Activity");default:return""}}function Ll(e){try{var t="",n=null;do t+=Gi(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ya=Object.prototype.hasOwnProperty,Vt=s.unstable_scheduleCallback,Gn=s.unstable_cancelCallback,qa=s.unstable_shouldYield,Xi=s.unstable_requestPaint,ft=s.unstable_now,Mo=s.unstable_getCurrentPriorityLevel,Qi=s.unstable_ImmediatePriority,wn=s.unstable_UserBlockingPriority,ln=s.unstable_NormalPriority,xa=s.unstable_LowPriority,_l=s.unstable_IdlePriority,mn=s.log,$i=s.unstable_setDisableYieldValue,Sa=null,gt=null;function It(e){if(typeof mn=="function"&&$i(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(Sa,e)}catch{}}var pt=Math.clz32?Math.clz32:jo,Ro=Math.log,Ki=Math.LN2;function jo(e){return e>>>=0,e===0?32:31-(Ro(e)/Ki|0)|0}var Va=256,Ia=262144,Ge=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function at(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var y=a&134217727;return y!==0?(a=y&~c,a!==0?r=Xe(a):(p&=y,p!==0?r=Xe(p):n||(n=y&~e,n!==0&&(r=Xe(n))))):(y=a&~c,y!==0?r=Xe(y):p!==0?r=Xe(p):n||(n=a&~e,n!==0&&(r=Xe(n)))),r===0?0:t!==0&&t!==r&&(t&c)===0&&(c=r&-r,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:r}function wt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ct(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ht(){var e=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),e}function Et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function We(e,t,n,a,r,c){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,w=e.expirationTimes,R=e.hiddenUpdates;for(n=p&~n;0<n;){var _=31-pt(n),H=1<<_;y[_]=0,w[_]=-1;var O=R[_];if(O!==null)for(R[_]=null,_=0;_<O.length;_++){var z=O[_];z!==null&&(z.lane&=-536870913)}n&=~H}a!==0&&sn(e,a,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~t))}function sn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-pt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function jt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-pt(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Gt(e,t){var n=t&-t;return n=(n&42)!==0?1:Cn(n),(n&(e.suspendedLanes|t))!==0?0:n}function Cn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function En(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function on(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:S1(e.type))}function Xn(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var Xt=Math.random().toString(36).slice(2),ot="__reactFiber$"+Xt,At="__reactProps$"+Xt,Ya="__reactContainer$"+Xt,Oo="__reactEvents$"+Xt,Qh="__reactListeners$"+Xt,$h="__reactHandles$"+Xt,Uu="__reactResources$"+Xt,Ul="__reactMarker$"+Xt;function zo(e){delete e[ot],delete e[At],delete e[Oo],delete e[Qh],delete e[$h]}function Ga(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ya]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=i1(e);e!==null;){if(n=e[ot])return n;e=i1(e)}return t}e=n,n=e.parentNode}return null}function Xa(e){if(e=e[ot]||e[Ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Qa(e){var t=e[Uu];return t||(t=e[Uu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function lt(e){e[Ul]=!0}var Hu=new Set,Zu={};function wa(e,t){$a(e,t),$a(e+"Capture",t)}function $a(e,t){for(Zu[e]=t,e=0;e<t.length;e++)Hu.add(t[e])}var Kh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bu={},qu={};function Fh(e){return ya.call(qu,e)?!0:ya.call(Bu,e)?!1:Kh.test(e)?qu[e]=!0:(Bu[e]=!0,!1)}function Fi(e,t,n){if(Fh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ji(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function An(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jh(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,c=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(p){n=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lo(e){if(!e._valueTracker){var t=Vu(e)?"checked":"value";e._valueTracker=Jh(e,t,""+e[t])}}function Iu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Vu(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ph=/[\n"\\]/g;function $t(e){return e.replace(Ph,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function _o(e,t,n,a,r,c,p,y){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Qt(t)):e.value!==""+Qt(t)&&(e.value=""+Qt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?Uo(e,p,Qt(t)):n!=null?Uo(e,p,Qt(n)):a!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Qt(y):e.removeAttribute("name")}function Yu(e,t,n,a,r,c,p,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Lo(e);return}n=n!=null?""+Qt(n):"",t=t!=null?""+Qt(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=y?e.checked:!!a,e.defaultChecked=!!a,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Lo(e)}function Uo(e,t,n){t==="number"&&Pi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ka(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Qt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Gu(e,t,n){if(t!=null&&(t=""+Qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Qt(n):""}function Xu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(o(92));if(ae(a)){if(1<a.length)throw Error(o(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Qt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Lo(e)}function Fa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Wh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function $u(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&Qu(e,r,a)}else for(var c in t)t.hasOwnProperty(c)&&Qu(e,c,t[c])}function Ho(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var em=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wi(e){return tm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Nn(){}var Zo=null;function Bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,Pa=null;function Ku(e){var t=Xa(e);if(t&&(e=t.stateNode)){var n=e[At]||null;e:switch(e=t.stateNode,t.type){case"input":if(_o(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+$t(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[At]||null;if(!r)throw Error(o(90));_o(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Iu(a)}break e;case"textarea":Gu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ka(e,!!n.multiple,t,!1)}}}var qo=!1;function Fu(e,t,n){if(qo)return e(t,n);qo=!0;try{var a=e(t);return a}finally{if(qo=!1,(Ja!==null||Pa!==null)&&(Bs(),Ja&&(t=Ja,e=Pa,Pa=Ja=null,Ku(t),e)))for(t=0;t<e.length;t++)Ku(e[t])}}function Zl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[At]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vo=!1;if(Tn)try{var Bl={};Object.defineProperty(Bl,"passive",{get:function(){Vo=!0}}),window.addEventListener("test",Bl,Bl),window.removeEventListener("test",Bl,Bl)}catch{Vo=!1}var Qn=null,Io=null,es=null;function Ju(){if(es)return es;var e,t=Io,n=t.length,a,r="value"in Qn?Qn.value:Qn.textContent,c=r.length;for(e=0;e<n&&t[e]===r[e];e++);var p=n-e;for(a=1;a<=p&&t[n-a]===r[c-a];a++);return es=r.slice(e,1<a?1-a:void 0)}function ts(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ns(){return!0}function Pu(){return!1}function Nt(e){function t(n,a,r,c,p){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ns:Pu,this.isPropagationStopped=Pu,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ns)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ns)},persist:function(){},isPersistent:ns}),t}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},as=Nt(Ca),ql=S({},Ca,{view:0,detail:0}),nm=Nt(ql),Yo,Go,Vl,ls=S({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vl&&(Vl&&e.type==="mousemove"?(Yo=e.screenX-Vl.screenX,Go=e.screenY-Vl.screenY):Go=Yo=0,Vl=e),Yo)},movementY:function(e){return"movementY"in e?e.movementY:Go}}),Wu=Nt(ls),am=S({},ls,{dataTransfer:0}),lm=Nt(am),im=S({},ql,{relatedTarget:0}),Xo=Nt(im),sm=S({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),om=Nt(sm),rm=S({},Ca,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cm=Nt(rm),um=S({},Ca,{data:0}),ed=Nt(um),dm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pm[e])?!!t[e]:!1}function Qo(){return hm}var mm=S({},ql,{key:function(e){if(e.key){var t=dm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ts(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qo,charCode:function(e){return e.type==="keypress"?ts(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ts(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gm=Nt(mm),bm=S({},ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),td=Nt(bm),vm=S({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qo}),ym=Nt(vm),xm=S({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sm=Nt(xm),wm=S({},ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cm=Nt(wm),Em=S({},Ca,{newState:0,oldState:0}),Am=Nt(Em),Nm=[9,13,27,32],$o=Tn&&"CompositionEvent"in window,Il=null;Tn&&"documentMode"in document&&(Il=document.documentMode);var Tm=Tn&&"TextEvent"in window&&!Il,nd=Tn&&(!$o||Il&&8<Il&&11>=Il),ad=" ",ld=!1;function id(e,t){switch(e){case"keyup":return Nm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function km(e,t){switch(e){case"compositionend":return sd(t);case"keypress":return t.which!==32?null:(ld=!0,ad);case"textInput":return e=t.data,e===ad&&ld?null:e;default:return null}}function Dm(e,t){if(Wa)return e==="compositionend"||!$o&&id(e,t)?(e=Ju(),es=Io=Qn=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nd&&t.locale!=="ko"?null:t.data;default:return null}}var Mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mm[e.type]:t==="textarea"}function rd(e,t,n,a){Ja?Pa?Pa.push(a):Pa=[a]:Ja=a,t=Qs(t,"onChange"),0<t.length&&(n=new as("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Yl=null,Gl=null;function Rm(e){Gf(e,0)}function is(e){var t=Hl(e);if(Iu(t))return e}function cd(e,t){if(e==="change")return t}var ud=!1;if(Tn){var Ko;if(Tn){var Fo="oninput"in document;if(!Fo){var dd=document.createElement("div");dd.setAttribute("oninput","return;"),Fo=typeof dd.oninput=="function"}Ko=Fo}else Ko=!1;ud=Ko&&(!document.documentMode||9<document.documentMode)}function fd(){Yl&&(Yl.detachEvent("onpropertychange",pd),Gl=Yl=null)}function pd(e){if(e.propertyName==="value"&&is(Gl)){var t=[];rd(t,Gl,e,Bo(e)),Fu(Rm,t)}}function jm(e,t,n){e==="focusin"?(fd(),Yl=t,Gl=n,Yl.attachEvent("onpropertychange",pd)):e==="focusout"&&fd()}function Om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return is(Gl)}function zm(e,t){if(e==="click")return is(t)}function Lm(e,t){if(e==="input"||e==="change")return is(t)}function _m(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:_m;function Xl(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!ya.call(t,r)||!Ot(e[r],t[r]))return!1}return!0}function hd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function md(e,t){var n=hd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hd(n)}}function gd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Pi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pi(e.document)}return t}function Jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Um=Tn&&"documentMode"in document&&11>=document.documentMode,el=null,Po=null,Ql=null,Wo=!1;function vd(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wo||el==null||el!==Pi(a)||(a=el,"selectionStart"in a&&Jo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ql&&Xl(Ql,a)||(Ql=a,a=Qs(Po,"onSelect"),0<a.length&&(t=new as("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=el)))}function Ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tl={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},er={},yd={};Tn&&(yd=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Aa(e){if(er[e])return er[e];if(!tl[e])return e;var t=tl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yd)return er[e]=t[n];return e}var xd=Aa("animationend"),Sd=Aa("animationiteration"),wd=Aa("animationstart"),Hm=Aa("transitionrun"),Zm=Aa("transitionstart"),Bm=Aa("transitioncancel"),Cd=Aa("transitionend"),Ed=new Map,tr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tr.push("scrollEnd");function rn(e,t){Ed.set(e,t),wa(t,[e])}var ss=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Kt=[],nl=0,nr=0;function os(){for(var e=nl,t=nr=nl=0;t<e;){var n=Kt[t];Kt[t++]=null;var a=Kt[t];Kt[t++]=null;var r=Kt[t];Kt[t++]=null;var c=Kt[t];if(Kt[t++]=null,a!==null&&r!==null){var p=a.pending;p===null?r.next=r:(r.next=p.next,p.next=r),a.pending=r}c!==0&&Ad(n,r,c)}}function rs(e,t,n,a){Kt[nl++]=e,Kt[nl++]=t,Kt[nl++]=n,Kt[nl++]=a,nr|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ar(e,t,n,a){return rs(e,t,n,a),cs(e)}function Na(e,t){return rs(e,null,null,t),cs(e)}function Ad(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,c=e.return;c!==null;)c.childLanes|=n,a=c.alternate,a!==null&&(a.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&t!==null&&(r=31-pt(n),e=c.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),c):null}function cs(e){if(50<mi)throw mi=0,fc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var al={};function qm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,a){return new qm(e,t,n,a)}function lr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kn(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Nd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function us(e,t,n,a,r,c){var p=0;if(a=e,typeof e=="function")lr(e)&&(p=1);else if(typeof e=="string")p=Xg(e,n,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ue:return e=zt(31,n,t,r),e.elementType=ue,e.lanes=c,e;case M:return Ta(n.children,r,c,t);case B:p=8,r|=24;break;case Z:return e=zt(12,n,t,r|2),e.elementType=Z,e.lanes=c,e;case I:return e=zt(13,n,t,r),e.elementType=I,e.lanes=c,e;case F:return e=zt(19,n,t,r),e.elementType=F,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $:p=10;break e;case G:p=9;break e;case X:p=11;break e;case q:p=14;break e;case te:p=16,a=null;break e}p=29,n=Error(o(130,e===null?"null":typeof e,"")),a=null}return t=zt(p,n,t,r),t.elementType=e,t.type=a,t.lanes=c,t}function Ta(e,t,n,a){return e=zt(7,e,a,t),e.lanes=n,e}function ir(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function Td(e){var t=zt(18,null,null,0);return t.stateNode=e,t}function sr(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var kd=new WeakMap;function Ft(e,t){if(typeof e=="object"&&e!==null){var n=kd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ll(t)},kd.set(e,t),t)}return{value:e,source:t,stack:Ll(t)}}var ll=[],il=0,ds=null,$l=0,Jt=[],Pt=0,$n=null,gn=1,bn="";function Dn(e,t){ll[il++]=$l,ll[il++]=ds,ds=e,$l=t}function Dd(e,t,n){Jt[Pt++]=gn,Jt[Pt++]=bn,Jt[Pt++]=$n,$n=e;var a=gn;e=bn;var r=32-pt(a)-1;a&=~(1<<r),n+=1;var c=32-pt(t)+r;if(30<c){var p=r-r%5;c=(a&(1<<p)-1).toString(32),a>>=p,r-=p,gn=1<<32-pt(t)+r|n<<r|a,bn=c+e}else gn=1<<c|n<<r|a,bn=e}function or(e){e.return!==null&&(Dn(e,1),Dd(e,1,0))}function rr(e){for(;e===ds;)ds=ll[--il],ll[il]=null,$l=ll[--il],ll[il]=null;for(;e===$n;)$n=Jt[--Pt],Jt[Pt]=null,bn=Jt[--Pt],Jt[Pt]=null,gn=Jt[--Pt],Jt[Pt]=null}function Md(e,t){Jt[Pt++]=gn,Jt[Pt++]=bn,Jt[Pt++]=$n,gn=t.id,bn=t.overflow,$n=e}var rt=null,He=null,we=!1,Kn=null,Wt=!1,cr=Error(o(519));function Fn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kl(Ft(t,e)),cr}function Rd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ot]=e,t[At]=a,n){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(n=0;n<bi.length;n++)ye(bi[n],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),Yu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),Xu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Kf(t.textContent,n)?(a.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),a.onScroll!=null&&ye("scroll",t),a.onScrollEnd!=null&&ye("scrollend",t),a.onClick!=null&&(t.onclick=Nn),t=!0):t=!1,t||Fn(e,!0)}function jd(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 31:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:rt=rt.return}}function sl(e){if(e!==rt)return!1;if(!we)return jd(e),we=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Tc(e.type,e.memoizedProps)),n=!n),n&&He&&Fn(e),jd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));He=l1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));He=l1(e)}else t===27?(t=He,ua(e.type)?(e=jc,jc=null,He=e):He=t):He=rt?tn(e.stateNode.nextSibling):null;return!0}function ka(){He=rt=null,we=!1}function ur(){var e=Kn;return e!==null&&(Mt===null?Mt=e:Mt.push.apply(Mt,e),Kn=null),e}function Kl(e){Kn===null?Kn=[e]:Kn.push(e)}var dr=E(null),Da=null,Mn=null;function Jn(e,t,n){K(dr,t._currentValue),t._currentValue=n}function Rn(e){e._currentValue=dr.current,L(dr)}function fr(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function pr(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var p=r.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=r;for(var w=0;w<t.length;w++)if(y.context===t[w]){c.lanes|=n,y=c.alternate,y!==null&&(y.lanes|=n),fr(c.return,n,e),a||(p=null);break e}c=y.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(o(341));p.lanes|=n,c=p.alternate,c!==null&&(c.lanes|=n),fr(p,n,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function ol(e,t,n,a){e=null;for(var r=t,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(o(387));if(p=p.memoizedProps,p!==null){var y=r.type;Ot(r.pendingProps.value,p.value)||(e!==null?e.push(y):e=[y])}}else if(r===P.current){if(p=r.alternate,p===null)throw Error(o(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(wi):e=[wi])}r=r.return}e!==null&&pr(t,e,n,a),t.flags|=262144}function fs(e){for(e=e.firstContext;e!==null;){if(!Ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ma(e){Da=e,Mn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return Od(Da,e)}function ps(e,t){return Da===null&&Ma(e),Od(e,t)}function Od(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Mn===null){if(e===null)throw Error(o(308));Mn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Mn=Mn.next=t;return n}var Vm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Im=s.unstable_scheduleCallback,Ym=s.unstable_NormalPriority,Ke={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hr(){return{controller:new Vm,data:new Map,refCount:0}}function Fl(e){e.refCount--,e.refCount===0&&Im(Ym,function(){e.controller.abort()})}var Jl=null,mr=0,rl=0,cl=null;function Gm(e,t){if(Jl===null){var n=Jl=[];mr=0,rl=vc(),cl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return mr++,t.then(zd,zd),t}function zd(){if(--mr===0&&Jl!==null){cl!==null&&(cl.status="fulfilled");var e=Jl;Jl=null,rl=0,cl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xm(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var Ld=j.S;j.S=function(e,t){yf=ft(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gm(e,t),Ld!==null&&Ld(e,t)};var Ra=E(null);function gr(){var e=Ra.current;return e!==null?e:_e.pooledCache}function hs(e,t){t===null?K(Ra,Ra.current):K(Ra,t.pool)}function _d(){var e=gr();return e===null?null:{parent:Ke._currentValue,pool:e}}var ul=Error(o(460)),br=Error(o(474)),ms=Error(o(542)),gs={then:function(){}};function Ud(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Nn,Nn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bd(e),e;default:if(typeof t.status=="string")t.then(Nn,Nn);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bd(e),e}throw Oa=t,ul}}function ja(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Oa=n,ul):n}}var Oa=null;function Zd(){if(Oa===null)throw Error(o(459));var e=Oa;return Oa=null,e}function Bd(e){if(e===ul||e===ms)throw Error(o(483))}var dl=null,Pl=0;function bs(e){var t=Pl;return Pl+=1,dl===null&&(dl=[]),Hd(dl,e,t)}function Wl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vs(e,t){throw t.$$typeof===T?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qd(e){function t(N,C){if(e){var D=N.deletions;D===null?(N.deletions=[C],N.flags|=16):D.push(C)}}function n(N,C){if(!e)return null;for(;C!==null;)t(N,C),C=C.sibling;return null}function a(N){for(var C=new Map;N!==null;)N.key!==null?C.set(N.key,N):C.set(N.index,N),N=N.sibling;return C}function r(N,C){return N=kn(N,C),N.index=0,N.sibling=null,N}function c(N,C,D){return N.index=D,e?(D=N.alternate,D!==null?(D=D.index,D<C?(N.flags|=67108866,C):D):(N.flags|=67108866,C)):(N.flags|=1048576,C)}function p(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function y(N,C,D,U){return C===null||C.tag!==6?(C=ir(D,N.mode,U),C.return=N,C):(C=r(C,D),C.return=N,C)}function w(N,C,D,U){var se=D.type;return se===M?_(N,C,D.props.children,U,D.key):C!==null&&(C.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===te&&ja(se)===C.type)?(C=r(C,D.props),Wl(C,D),C.return=N,C):(C=us(D.type,D.key,D.props,null,N.mode,U),Wl(C,D),C.return=N,C)}function R(N,C,D,U){return C===null||C.tag!==4||C.stateNode.containerInfo!==D.containerInfo||C.stateNode.implementation!==D.implementation?(C=sr(D,N.mode,U),C.return=N,C):(C=r(C,D.children||[]),C.return=N,C)}function _(N,C,D,U,se){return C===null||C.tag!==7?(C=Ta(D,N.mode,U,se),C.return=N,C):(C=r(C,D),C.return=N,C)}function H(N,C,D){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=ir(""+C,N.mode,D),C.return=N,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case A:return D=us(C.type,C.key,C.props,null,N.mode,D),Wl(D,C),D.return=N,D;case k:return C=sr(C,N.mode,D),C.return=N,C;case te:return C=ja(C),H(N,C,D)}if(ae(C)||me(C))return C=Ta(C,N.mode,D,null),C.return=N,C;if(typeof C.then=="function")return H(N,bs(C),D);if(C.$$typeof===$)return H(N,ps(N,C),D);vs(N,C)}return null}function O(N,C,D,U){var se=C!==null?C.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return se!==null?null:y(N,C,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case A:return D.key===se?w(N,C,D,U):null;case k:return D.key===se?R(N,C,D,U):null;case te:return D=ja(D),O(N,C,D,U)}if(ae(D)||me(D))return se!==null?null:_(N,C,D,U,null);if(typeof D.then=="function")return O(N,C,bs(D),U);if(D.$$typeof===$)return O(N,C,ps(N,D),U);vs(N,D)}return null}function z(N,C,D,U,se){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return N=N.get(D)||null,y(C,N,""+U,se);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case A:return N=N.get(U.key===null?D:U.key)||null,w(C,N,U,se);case k:return N=N.get(U.key===null?D:U.key)||null,R(C,N,U,se);case te:return U=ja(U),z(N,C,D,U,se)}if(ae(U)||me(U))return N=N.get(D)||null,_(C,N,U,se,null);if(typeof U.then=="function")return z(N,C,D,bs(U),se);if(U.$$typeof===$)return z(N,C,D,ps(C,U),se);vs(C,U)}return null}function ee(N,C,D,U){for(var se=null,Ce=null,ne=C,ge=C=0,Se=null;ne!==null&&ge<D.length;ge++){ne.index>ge?(Se=ne,ne=null):Se=ne.sibling;var Ee=O(N,ne,D[ge],U);if(Ee===null){ne===null&&(ne=Se);break}e&&ne&&Ee.alternate===null&&t(N,ne),C=c(Ee,C,ge),Ce===null?se=Ee:Ce.sibling=Ee,Ce=Ee,ne=Se}if(ge===D.length)return n(N,ne),we&&Dn(N,ge),se;if(ne===null){for(;ge<D.length;ge++)ne=H(N,D[ge],U),ne!==null&&(C=c(ne,C,ge),Ce===null?se=ne:Ce.sibling=ne,Ce=ne);return we&&Dn(N,ge),se}for(ne=a(ne);ge<D.length;ge++)Se=z(ne,N,ge,D[ge],U),Se!==null&&(e&&Se.alternate!==null&&ne.delete(Se.key===null?ge:Se.key),C=c(Se,C,ge),Ce===null?se=Se:Ce.sibling=Se,Ce=Se);return e&&ne.forEach(function(ma){return t(N,ma)}),we&&Dn(N,ge),se}function oe(N,C,D,U){if(D==null)throw Error(o(151));for(var se=null,Ce=null,ne=C,ge=C=0,Se=null,Ee=D.next();ne!==null&&!Ee.done;ge++,Ee=D.next()){ne.index>ge?(Se=ne,ne=null):Se=ne.sibling;var ma=O(N,ne,Ee.value,U);if(ma===null){ne===null&&(ne=Se);break}e&&ne&&ma.alternate===null&&t(N,ne),C=c(ma,C,ge),Ce===null?se=ma:Ce.sibling=ma,Ce=ma,ne=Se}if(Ee.done)return n(N,ne),we&&Dn(N,ge),se;if(ne===null){for(;!Ee.done;ge++,Ee=D.next())Ee=H(N,Ee.value,U),Ee!==null&&(C=c(Ee,C,ge),Ce===null?se=Ee:Ce.sibling=Ee,Ce=Ee);return we&&Dn(N,ge),se}for(ne=a(ne);!Ee.done;ge++,Ee=D.next())Ee=z(ne,N,ge,Ee.value,U),Ee!==null&&(e&&Ee.alternate!==null&&ne.delete(Ee.key===null?ge:Ee.key),C=c(Ee,C,ge),Ce===null?se=Ee:Ce.sibling=Ee,Ce=Ee);return e&&ne.forEach(function(a2){return t(N,a2)}),we&&Dn(N,ge),se}function ze(N,C,D,U){if(typeof D=="object"&&D!==null&&D.type===M&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case A:e:{for(var se=D.key;C!==null;){if(C.key===se){if(se=D.type,se===M){if(C.tag===7){n(N,C.sibling),U=r(C,D.props.children),U.return=N,N=U;break e}}else if(C.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===te&&ja(se)===C.type){n(N,C.sibling),U=r(C,D.props),Wl(U,D),U.return=N,N=U;break e}n(N,C);break}else t(N,C);C=C.sibling}D.type===M?(U=Ta(D.props.children,N.mode,U,D.key),U.return=N,N=U):(U=us(D.type,D.key,D.props,null,N.mode,U),Wl(U,D),U.return=N,N=U)}return p(N);case k:e:{for(se=D.key;C!==null;){if(C.key===se)if(C.tag===4&&C.stateNode.containerInfo===D.containerInfo&&C.stateNode.implementation===D.implementation){n(N,C.sibling),U=r(C,D.children||[]),U.return=N,N=U;break e}else{n(N,C);break}else t(N,C);C=C.sibling}U=sr(D,N.mode,U),U.return=N,N=U}return p(N);case te:return D=ja(D),ze(N,C,D,U)}if(ae(D))return ee(N,C,D,U);if(me(D)){if(se=me(D),typeof se!="function")throw Error(o(150));return D=se.call(D),oe(N,C,D,U)}if(typeof D.then=="function")return ze(N,C,bs(D),U);if(D.$$typeof===$)return ze(N,C,ps(N,D),U);vs(N,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,C!==null&&C.tag===6?(n(N,C.sibling),U=r(C,D),U.return=N,N=U):(n(N,C),U=ir(D,N.mode,U),U.return=N,N=U),p(N)):n(N,C)}return function(N,C,D,U){try{Pl=0;var se=ze(N,C,D,U);return dl=null,se}catch(ne){if(ne===ul||ne===ms)throw ne;var Ce=zt(29,ne,null,N.mode);return Ce.lanes=U,Ce.return=N,Ce}finally{}}}var za=qd(!0),Vd=qd(!1),Pn=!1;function vr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ea(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ne&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=cs(e),Ad(e,null,n),t}return rs(e,a,t,n),cs(e)}function ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,jt(e,n)}}function xr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?r=c=p:c=c.next=p,n=n.next}while(n!==null);c===null?r=c=t:c=c.next=t}else r=c=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Sr=!1;function ti(){if(Sr){var e=cl;if(e!==null)throw e}}function ni(e,t,n,a){Sr=!1;var r=e.updateQueue;Pn=!1;var c=r.firstBaseUpdate,p=r.lastBaseUpdate,y=r.shared.pending;if(y!==null){r.shared.pending=null;var w=y,R=w.next;w.next=null,p===null?c=R:p.next=R,p=w;var _=e.alternate;_!==null&&(_=_.updateQueue,y=_.lastBaseUpdate,y!==p&&(y===null?_.firstBaseUpdate=R:y.next=R,_.lastBaseUpdate=w))}if(c!==null){var H=r.baseState;p=0,_=R=w=null,y=c;do{var O=y.lane&-536870913,z=O!==y.lane;if(z?(xe&O)===O:(a&O)===O){O!==0&&O===rl&&(Sr=!0),_!==null&&(_=_.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var ee=e,oe=y;O=t;var ze=n;switch(oe.tag){case 1:if(ee=oe.payload,typeof ee=="function"){H=ee.call(ze,H,O);break e}H=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=oe.payload,O=typeof ee=="function"?ee.call(ze,H,O):ee,O==null)break e;H=S({},H,O);break e;case 2:Pn=!0}}O=y.callback,O!==null&&(e.flags|=64,z&&(e.flags|=8192),z=r.callbacks,z===null?r.callbacks=[O]:z.push(O))}else z={lane:O,tag:y.tag,payload:y.payload,callback:y.callback,next:null},_===null?(R=_=z,w=H):_=_.next=z,p|=O;if(y=y.next,y===null){if(y=r.shared.pending,y===null)break;z=y,y=z.next,z.next=null,r.lastBaseUpdate=z,r.shared.pending=null}}while(!0);_===null&&(w=H),r.baseState=w,r.firstBaseUpdate=R,r.lastBaseUpdate=_,c===null&&(r.shared.lanes=0),ia|=p,e.lanes=p,e.memoizedState=H}}function Id(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Yd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Id(n[e],t)}var fl=E(null),ys=E(0);function Gd(e,t){e=Bn,K(ys,e),K(fl,t),Bn=e|t.baseLanes}function wr(){K(ys,Bn),K(fl,fl.current)}function Cr(){Bn=ys.current,L(fl),L(ys)}var Lt=E(null),en=null;function ta(e){var t=e.alternate;K(Qe,Qe.current&1),K(Lt,e),en===null&&(t===null||fl.current!==null||t.memoizedState!==null)&&(en=e)}function Er(e){K(Qe,Qe.current),K(Lt,e),en===null&&(en=e)}function Xd(e){e.tag===22?(K(Qe,Qe.current),K(Lt,e),en===null&&(en=e)):na()}function na(){K(Qe,Qe.current),K(Lt,Lt.current)}function _t(e){L(Lt),en===e&&(en=null),L(Qe)}var Qe=E(0);function xs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Mc(n)||Rc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jn=0,he=null,je=null,Fe=null,Ss=!1,pl=!1,La=!1,ws=0,ai=0,hl=null,Qm=0;function Ie(){throw Error(o(321))}function Ar(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function Nr(e,t,n,a,r,c){return jn=c,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?D0:qr,La=!1,c=n(a,r),La=!1,pl&&(c=$d(t,n,a,r)),Qd(e),c}function Qd(e){j.H=si;var t=je!==null&&je.next!==null;if(jn=0,Fe=je=he=null,Ss=!1,ai=0,hl=null,t)throw Error(o(300));e===null||Je||(e=e.dependencies,e!==null&&fs(e)&&(Je=!0))}function $d(e,t,n,a){he=e;var r=0;do{if(pl&&(hl=null),ai=0,pl=!1,25<=r)throw Error(o(301));if(r+=1,Fe=je=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}j.H=M0,c=t(n,a)}while(pl);return c}function $m(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?li(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(he.flags|=1024),t}function Tr(){var e=ws!==0;return ws=0,e}function kr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Dr(e){if(Ss){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ss=!1}jn=0,Fe=je=he=null,pl=!1,ai=ws=0,hl=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?he.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function $e(){if(je===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Fe===null?he.memoizedState:Fe.next;if(t!==null)Fe=t,je=e;else{if(e===null)throw he.alternate===null?Error(o(467)):Error(o(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Fe===null?he.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Cs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function li(e){var t=ai;return ai+=1,hl===null&&(hl=[]),e=Hd(hl,e,t),t=he,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?D0:qr),e}function Es(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return li(e);if(e.$$typeof===$)return ct(e)}throw Error(o(438,String(e)))}function Mr(e){var t=null,n=he.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=he.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Cs(),he.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=pe;return t.index++,n}function On(e,t){return typeof t=="function"?t(e):t}function As(e){var t=$e();return Rr(t,je,e)}function Rr(e,t,n){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var r=e.baseQueue,c=a.pending;if(c!==null){if(r!==null){var p=r.next;r.next=c.next,c.next=p}t.baseQueue=r=c,a.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{t=r.next;var y=p=null,w=null,R=t,_=!1;do{var H=R.lane&-536870913;if(H!==R.lane?(xe&H)===H:(jn&H)===H){var O=R.revertLane;if(O===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),H===rl&&(_=!0);else if((jn&O)===O){R=R.next,O===rl&&(_=!0);continue}else H={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},w===null?(y=w=H,p=c):w=w.next=H,he.lanes|=O,ia|=O;H=R.action,La&&n(c,H),c=R.hasEagerState?R.eagerState:n(c,H)}else O={lane:H,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},w===null?(y=w=O,p=c):w=w.next=O,he.lanes|=H,ia|=H;R=R.next}while(R!==null&&R!==t);if(w===null?p=c:w.next=y,!Ot(c,e.memoizedState)&&(Je=!0,_&&(n=cl,n!==null)))throw n;e.memoizedState=c,e.baseState=p,e.baseQueue=w,a.lastRenderedState=c}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function jr(e){var t=$e(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,c=t.memoizedState;if(r!==null){n.pending=null;var p=r=r.next;do c=e(c,p.action),p=p.next;while(p!==r);Ot(c,t.memoizedState)||(Je=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,a]}function Kd(e,t,n){var a=he,r=$e(),c=we;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var p=!Ot((je||r).memoizedState,n);if(p&&(r.memoizedState=n,Je=!0),r=r.queue,Lr(Pd.bind(null,a,r,e),[e]),r.getSnapshot!==t||p||Fe!==null&&Fe.memoizedState.tag&1){if(a.flags|=2048,ml(9,{destroy:void 0},Jd.bind(null,a,r,n,t),null),_e===null)throw Error(o(349));c||(jn&127)!==0||Fd(a,t,n)}return n}function Fd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t=Cs(),he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jd(e,t,n,a){t.value=n,t.getSnapshot=a,Wd(t)&&e0(e)}function Pd(e,t,n){return n(function(){Wd(t)&&e0(e)})}function Wd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function e0(e){var t=Na(e,2);t!==null&&Rt(t,e,2)}function Or(e){var t=bt();if(typeof e=="function"){var n=e;if(e=n(),La){It(!0);try{n()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:e},t}function t0(e,t,n,a){return e.baseState=n,Rr(e,je,typeof a=="function"?a:On)}function Km(e,t,n,a,r){if(ks(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};j.T!==null?n(!0):c.isTransition=!1,a(c),n=t.pending,n===null?(c.next=t.pending=c,n0(t,c)):(c.next=n.next,t.pending=n.next=c)}}function n0(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var c=j.T,p={};j.T=p;try{var y=n(r,a),w=j.S;w!==null&&w(p,y),a0(e,t,y)}catch(R){zr(e,t,R)}finally{c!==null&&p.types!==null&&(c.types=p.types),j.T=c}}else try{c=n(r,a),a0(e,t,c)}catch(R){zr(e,t,R)}}function a0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){l0(e,t,a)},function(a){return zr(e,t,a)}):l0(e,t,n)}function l0(e,t,n){t.status="fulfilled",t.value=n,i0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,n0(e,n)))}function zr(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,i0(t),t=t.next;while(t!==a)}e.action=null}function i0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function s0(e,t){return t}function o0(e,t){if(we){var n=_e.formState;if(n!==null){e:{var a=he;if(we){if(He){t:{for(var r=He,c=Wt;r.nodeType!==8;){if(!c){r=null;break t}if(r=tn(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){He=tn(r.nextSibling),a=r.data==="F!";break e}}Fn(a)}a=!1}a&&(t=n[0])}}return n=bt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:s0,lastRenderedState:t},n.queue=a,n=N0.bind(null,he,a),a.dispatch=n,a=Or(!1),c=Br.bind(null,he,!1,a.queue),a=bt(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=Km.bind(null,he,r,c,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function r0(e){var t=$e();return c0(t,je,e)}function c0(e,t,n){if(t=Rr(e,t,s0)[0],e=As(On)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=li(t)}catch(p){throw p===ul?ms:p}else a=t;t=$e();var r=t.queue,c=r.dispatch;return n!==t.memoizedState&&(he.flags|=2048,ml(9,{destroy:void 0},Fm.bind(null,r,n),null)),[a,c,e]}function Fm(e,t){e.action=t}function u0(e){var t=$e(),n=je;if(n!==null)return c0(t,n,e);$e(),t=t.memoizedState,n=$e();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ml(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=he.updateQueue,t===null&&(t=Cs(),he.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function d0(){return $e().memoizedState}function Ns(e,t,n,a){var r=bt();he.flags|=e,r.memoizedState=ml(1|t,{destroy:void 0},n,a===void 0?null:a)}function Ts(e,t,n,a){var r=$e();a=a===void 0?null:a;var c=r.memoizedState.inst;je!==null&&a!==null&&Ar(a,je.memoizedState.deps)?r.memoizedState=ml(t,c,n,a):(he.flags|=e,r.memoizedState=ml(1|t,c,n,a))}function f0(e,t){Ns(8390656,8,e,t)}function Lr(e,t){Ts(2048,8,e,t)}function Jm(e){he.flags|=4;var t=he.updateQueue;if(t===null)t=Cs(),he.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function p0(e){var t=$e().memoizedState;return Jm({ref:t,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function h0(e,t){return Ts(4,2,e,t)}function m0(e,t){return Ts(4,4,e,t)}function g0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function b0(e,t,n){n=n!=null?n.concat([e]):null,Ts(4,4,g0.bind(null,t,e),n)}function _r(){}function v0(e,t){var n=$e();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ar(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function y0(e,t){var n=$e();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ar(t,a[1]))return a[0];if(a=e(),La){It(!0);try{e()}finally{It(!1)}}return n.memoizedState=[a,t],a}function Ur(e,t,n){return n===void 0||(jn&1073741824)!==0&&(xe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Sf(),he.lanes|=e,ia|=e,n)}function x0(e,t,n,a){return Ot(n,t)?n:fl.current!==null?(e=Ur(e,n,a),Ot(e,t)||(Je=!0),e):(jn&42)===0||(jn&1073741824)!==0&&(xe&261930)===0?(Je=!0,e.memoizedState=n):(e=Sf(),he.lanes|=e,ia|=e,t)}function S0(e,t,n,a,r){var c=V.p;V.p=c!==0&&8>c?c:8;var p=j.T,y={};j.T=y,Br(e,!1,t,n);try{var w=r(),R=j.S;if(R!==null&&R(y,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var _=Xm(w,a);ii(e,t,_,Zt(e))}else ii(e,t,a,Zt(e))}catch(H){ii(e,t,{then:function(){},status:"rejected",reason:H},Zt())}finally{V.p=c,p!==null&&y.types!==null&&(p.types=y.types),j.T=p}}function Pm(){}function Hr(e,t,n,a){if(e.tag!==5)throw Error(o(476));var r=w0(e).queue;S0(e,r,t,W,n===null?Pm:function(){return C0(e),n(a)})}function w0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:W},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function C0(e){var t=w0(e);t.next===null&&(t=e.alternate.memoizedState),ii(e,t.next.queue,{},Zt())}function Zr(){return ct(wi)}function E0(){return $e().memoizedState}function A0(){return $e().memoizedState}function Wm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Zt();e=Wn(n);var a=ea(t,e,n);a!==null&&(Rt(a,t,n),ei(a,t,n)),t={cache:hr()},e.payload=t;return}t=t.return}}function eg(e,t,n){var a=Zt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ks(e)?T0(t,n):(n=ar(e,t,n,a),n!==null&&(Rt(n,e,a),k0(n,t,a)))}function N0(e,t,n){var a=Zt();ii(e,t,n,a)}function ii(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ks(e))T0(t,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,y=c(p,n);if(r.hasEagerState=!0,r.eagerState=y,Ot(y,p))return rs(e,t,r,0),_e===null&&os(),!1}catch{}finally{}if(n=ar(e,t,r,a),n!==null)return Rt(n,e,a),k0(n,t,a),!0}return!1}function Br(e,t,n,a){if(a={lane:2,revertLane:vc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ks(e)){if(t)throw Error(o(479))}else t=ar(e,n,a,2),t!==null&&Rt(t,e,2)}function ks(e){var t=e.alternate;return e===he||t!==null&&t===he}function T0(e,t){pl=Ss=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function k0(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,jt(e,n)}}var si={readContext:ct,use:Es,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie};si.useEffectEvent=Ie;var D0={readContext:ct,use:Es,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:f0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ns(4194308,4,g0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ns(4194308,4,e,t)},useInsertionEffect:function(e,t){Ns(4,2,e,t)},useMemo:function(e,t){var n=bt();t=t===void 0?null:t;var a=e();if(La){It(!0);try{e()}finally{It(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=bt();if(n!==void 0){var r=n(t);if(La){It(!0);try{n(t)}finally{It(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=eg.bind(null,he,e),[a.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=Or(e);var t=e.queue,n=N0.bind(null,he,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_r,useDeferredValue:function(e,t){var n=bt();return Ur(n,e,t)},useTransition:function(){var e=Or(!1);return e=S0.bind(null,he,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=he,r=bt();if(we){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),_e===null)throw Error(o(349));(xe&127)!==0||Fd(a,t,n)}r.memoizedState=n;var c={value:n,getSnapshot:t};return r.queue=c,f0(Pd.bind(null,a,c,e),[e]),a.flags|=2048,ml(9,{destroy:void 0},Jd.bind(null,a,c,n,t),null),n},useId:function(){var e=bt(),t=_e.identifierPrefix;if(we){var n=bn,a=gn;n=(a&~(1<<32-pt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ws++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Qm++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zr,useFormState:o0,useActionState:o0,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Br.bind(null,he,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mr,useCacheRefresh:function(){return bt().memoizedState=Wm.bind(null,he)},useEffectEvent:function(e){var t=bt(),n={impl:e};return t.memoizedState=n,function(){if((Ne&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},qr={readContext:ct,use:Es,useCallback:v0,useContext:ct,useEffect:Lr,useImperativeHandle:b0,useInsertionEffect:h0,useLayoutEffect:m0,useMemo:y0,useReducer:As,useRef:d0,useState:function(){return As(On)},useDebugValue:_r,useDeferredValue:function(e,t){var n=$e();return x0(n,je.memoizedState,e,t)},useTransition:function(){var e=As(On)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:li(e),t]},useSyncExternalStore:Kd,useId:E0,useHostTransitionStatus:Zr,useFormState:r0,useActionState:r0,useOptimistic:function(e,t){var n=$e();return t0(n,je,e,t)},useMemoCache:Mr,useCacheRefresh:A0};qr.useEffectEvent=p0;var M0={readContext:ct,use:Es,useCallback:v0,useContext:ct,useEffect:Lr,useImperativeHandle:b0,useInsertionEffect:h0,useLayoutEffect:m0,useMemo:y0,useReducer:jr,useRef:d0,useState:function(){return jr(On)},useDebugValue:_r,useDeferredValue:function(e,t){var n=$e();return je===null?Ur(n,e,t):x0(n,je.memoizedState,e,t)},useTransition:function(){var e=jr(On)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:li(e),t]},useSyncExternalStore:Kd,useId:E0,useHostTransitionStatus:Zr,useFormState:u0,useActionState:u0,useOptimistic:function(e,t){var n=$e();return je!==null?t0(n,je,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Mr,useCacheRefresh:A0};M0.useEffectEvent=p0;function Vr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ir={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Zt(),r=Wn(a);r.payload=t,n!=null&&(r.callback=n),t=ea(e,r,a),t!==null&&(Rt(t,e,a),ei(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Zt(),r=Wn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=ea(e,r,a),t!==null&&(Rt(t,e,a),ei(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Zt(),a=Wn(n);a.tag=2,t!=null&&(a.callback=t),t=ea(e,a,n),t!==null&&(Rt(t,e,n),ei(t,e,n))}};function R0(e,t,n,a,r,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,p):t.prototype&&t.prototype.isPureReactComponent?!Xl(n,a)||!Xl(r,c):!0}function j0(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ir.enqueueReplaceState(t,t.state,null)}function _a(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function O0(e){ss(e)}function z0(e){console.error(e)}function L0(e){ss(e)}function Ds(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function _0(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Yr(e,t,n){return n=Wn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ds(e,t)},n}function U0(e){return e=Wn(e),e.tag=3,e}function H0(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var c=a.value;e.payload=function(){return r(c)},e.callback=function(){_0(t,n,a)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){_0(t,n,a),typeof r!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var y=a.stack;this.componentDidCatch(a.value,{componentStack:y!==null?y:""})})}function tg(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ol(t,n,r,!0),n=Lt.current,n!==null){switch(n.tag){case 31:case 13:return en===null?qs():n.alternate===null&&Ye===0&&(Ye=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===gs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),mc(e,a,r)),!1;case 22:return n.flags|=65536,a===gs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),mc(e,a,r)),!1}throw Error(o(435,n.tag))}return mc(e,a,r),qs(),!1}if(we)return t=Lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==cr&&(e=Error(o(422),{cause:a}),Kl(Ft(e,n)))):(a!==cr&&(t=Error(o(423),{cause:a}),Kl(Ft(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Ft(a,n),r=Yr(e.stateNode,a,r),xr(e,r),Ye!==4&&(Ye=2)),!1;var c=Error(o(520),{cause:a});if(c=Ft(c,n),hi===null?hi=[c]:hi.push(c),Ye!==4&&(Ye=2),t===null)return!0;a=Ft(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Yr(n.stateNode,a,e),xr(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(sa===null||!sa.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=U0(r),H0(r,e,n,a),xr(n,r),!1}n=n.return}while(n!==null);return!1}var Gr=Error(o(461)),Je=!1;function ut(e,t,n,a){t.child=e===null?Vd(t,null,n,a):za(t,e.child,n,a)}function Z0(e,t,n,a,r){n=n.render;var c=t.ref;if("ref"in a){var p={};for(var y in a)y!=="ref"&&(p[y]=a[y])}else p=a;return Ma(t),a=Nr(e,t,n,p,c,r),y=Tr(),e!==null&&!Je?(kr(e,t,r),zn(e,t,r)):(we&&y&&or(t),t.flags|=1,ut(e,t,a,r),t.child)}function B0(e,t,n,a,r){if(e===null){var c=n.type;return typeof c=="function"&&!lr(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,q0(e,t,c,a,r)):(e=us(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Wr(e,r)){var p=c.memoizedProps;if(n=n.compare,n=n!==null?n:Xl,n(p,a)&&e.ref===t.ref)return zn(e,t,r)}return t.flags|=1,e=kn(c,a),e.ref=t.ref,e.return=t,t.child=e}function q0(e,t,n,a,r){if(e!==null){var c=e.memoizedProps;if(Xl(c,a)&&e.ref===t.ref)if(Je=!1,t.pendingProps=a=c,Wr(e,r))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,zn(e,t,r)}return Xr(e,t,n,a,r)}function V0(e,t,n,a){var r=a.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~c}else a=0,t.child=null;return I0(e,t,c,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&hs(t,c!==null?c.cachePool:null),c!==null?Gd(t,c):wr(),Xd(t);else return a=t.lanes=536870912,I0(e,t,c!==null?c.baseLanes|n:n,n,a)}else c!==null?(hs(t,c.cachePool),Gd(t,c),na(),t.memoizedState=null):(e!==null&&hs(t,null),wr(),na());return ut(e,t,r,n),t.child}function oi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function I0(e,t,n,a,r){var c=gr();return c=c===null?null:{parent:Ke._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&hs(t,null),wr(),Xd(t),e!==null&&ol(e,t,a,!0),t.childLanes=r,null}function Ms(e,t){return t=js({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Y0(e,t,n){return za(t,e.child,null,n),e=Ms(t,t.pendingProps),e.flags|=2,_t(t),t.memoizedState=null,e}function ng(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(we){if(a.mode==="hidden")return e=Ms(t,a),t.lanes=536870912,oi(null,e);if(Er(t),(e=He)?(e=a1(e,Wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$n!==null?{id:gn,overflow:bn}:null,retryLane:536870912,hydrationErrors:null},n=Td(e),n.return=t,t.child=n,rt=t,He=null)):e=null,e===null)throw Fn(t);return t.lanes=536870912,null}return Ms(t,a)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(Er(t),r)if(t.flags&256)t.flags&=-257,t=Y0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Je||ol(e,t,n,!1),r=(n&e.childLanes)!==0,Je||r){if(a=_e,a!==null&&(p=Gt(a,n),p!==0&&p!==c.retryLane))throw c.retryLane=p,Na(e,p),Rt(a,e,p),Gr;qs(),t=Y0(e,t,n)}else e=c.treeContext,He=tn(p.nextSibling),rt=t,we=!0,Kn=null,Wt=!1,e!==null&&Md(t,e),t=Ms(t,a),t.flags|=4096;return t}return e=kn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Rs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Xr(e,t,n,a,r){return Ma(t),n=Nr(e,t,n,a,void 0,r),a=Tr(),e!==null&&!Je?(kr(e,t,r),zn(e,t,r)):(we&&a&&or(t),t.flags|=1,ut(e,t,n,r),t.child)}function G0(e,t,n,a,r,c){return Ma(t),t.updateQueue=null,n=$d(t,a,n,r),Qd(e),a=Tr(),e!==null&&!Je?(kr(e,t,c),zn(e,t,c)):(we&&a&&or(t),t.flags|=1,ut(e,t,n,c),t.child)}function X0(e,t,n,a,r){if(Ma(t),t.stateNode===null){var c=al,p=n.contextType;typeof p=="object"&&p!==null&&(c=ct(p)),c=new n(a,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Ir,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=a,c.state=t.memoizedState,c.refs={},vr(t),p=n.contextType,c.context=typeof p=="object"&&p!==null?ct(p):al,c.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Vr(t,n,p,a),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&Ir.enqueueReplaceState(c,c.state,null),ni(t,a,c,r),ti(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){c=t.stateNode;var y=t.memoizedProps,w=_a(n,y);c.props=w;var R=c.context,_=n.contextType;p=al,typeof _=="object"&&_!==null&&(p=ct(_));var H=n.getDerivedStateFromProps;_=typeof H=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,_||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||R!==p)&&j0(t,c,a,p),Pn=!1;var O=t.memoizedState;c.state=O,ni(t,a,c,r),ti(),R=t.memoizedState,y||O!==R||Pn?(typeof H=="function"&&(Vr(t,n,H,a),R=t.memoizedState),(w=Pn||R0(t,n,w,a,O,R,p))?(_||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=R),c.props=a,c.state=R,c.context=p,a=w):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{c=t.stateNode,yr(e,t),p=t.memoizedProps,_=_a(n,p),c.props=_,H=t.pendingProps,O=c.context,R=n.contextType,w=al,typeof R=="object"&&R!==null&&(w=ct(R)),y=n.getDerivedStateFromProps,(R=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==H||O!==w)&&j0(t,c,a,w),Pn=!1,O=t.memoizedState,c.state=O,ni(t,a,c,r),ti();var z=t.memoizedState;p!==H||O!==z||Pn||e!==null&&e.dependencies!==null&&fs(e.dependencies)?(typeof y=="function"&&(Vr(t,n,y,a),z=t.memoizedState),(_=Pn||R0(t,n,_,a,O,z,w)||e!==null&&e.dependencies!==null&&fs(e.dependencies))?(R||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,z,w),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,z,w)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=z),c.props=a,c.state=z,c.context=w,a=_):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),a=!1)}return c=a,Rs(e,t),a=(t.flags&128)!==0,c||a?(c=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&a?(t.child=za(t,e.child,null,r),t.child=za(t,null,n,r)):ut(e,t,n,r),t.memoizedState=c.state,e=t.child):e=zn(e,t,r),e}function Q0(e,t,n,a){return ka(),t.flags|=256,ut(e,t,n,a),t.child}var Qr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $r(e){return{baseLanes:e,cachePool:_d()}}function Kr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ht),e}function $0(e,t,n){var a=t.pendingProps,r=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),p&&(r=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(we){if(r?ta(t):na(),(e=He)?(e=a1(e,Wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$n!==null?{id:gn,overflow:bn}:null,retryLane:536870912,hydrationErrors:null},n=Td(e),n.return=t,t.child=n,rt=t,He=null)):e=null,e===null)throw Fn(t);return Rc(e)?t.lanes=32:t.lanes=536870912,null}var y=a.children;return a=a.fallback,r?(na(),r=t.mode,y=js({mode:"hidden",children:y},r),a=Ta(a,r,n,null),y.return=t,a.return=t,y.sibling=a,t.child=y,a=t.child,a.memoizedState=$r(n),a.childLanes=Kr(e,p,n),t.memoizedState=Qr,oi(null,a)):(ta(t),Fr(t,y))}var w=e.memoizedState;if(w!==null&&(y=w.dehydrated,y!==null)){if(c)t.flags&256?(ta(t),t.flags&=-257,t=Jr(e,t,n)):t.memoizedState!==null?(na(),t.child=e.child,t.flags|=128,t=null):(na(),y=a.fallback,r=t.mode,a=js({mode:"visible",children:a.children},r),y=Ta(y,r,n,null),y.flags|=2,a.return=t,y.return=t,a.sibling=y,t.child=a,za(t,e.child,null,n),a=t.child,a.memoizedState=$r(n),a.childLanes=Kr(e,p,n),t.memoizedState=Qr,t=oi(null,a));else if(ta(t),Rc(y)){if(p=y.nextSibling&&y.nextSibling.dataset,p)var R=p.dgst;p=R,a=Error(o(419)),a.stack="",a.digest=p,Kl({value:a,source:null,stack:null}),t=Jr(e,t,n)}else if(Je||ol(e,t,n,!1),p=(n&e.childLanes)!==0,Je||p){if(p=_e,p!==null&&(a=Gt(p,n),a!==0&&a!==w.retryLane))throw w.retryLane=a,Na(e,a),Rt(p,e,a),Gr;Mc(y)||qs(),t=Jr(e,t,n)}else Mc(y)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,He=tn(y.nextSibling),rt=t,we=!0,Kn=null,Wt=!1,e!==null&&Md(t,e),t=Fr(t,a.children),t.flags|=4096);return t}return r?(na(),y=a.fallback,r=t.mode,w=e.child,R=w.sibling,a=kn(w,{mode:"hidden",children:a.children}),a.subtreeFlags=w.subtreeFlags&65011712,R!==null?y=kn(R,y):(y=Ta(y,r,n,null),y.flags|=2),y.return=t,a.return=t,a.sibling=y,t.child=a,oi(null,a),a=t.child,y=e.child.memoizedState,y===null?y=$r(n):(r=y.cachePool,r!==null?(w=Ke._currentValue,r=r.parent!==w?{parent:w,pool:w}:r):r=_d(),y={baseLanes:y.baseLanes|n,cachePool:r}),a.memoizedState=y,a.childLanes=Kr(e,p,n),t.memoizedState=Qr,oi(e.child,a)):(ta(t),n=e.child,e=n.sibling,n=kn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Fr(e,t){return t=js({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function js(e,t){return e=zt(22,e,null,t),e.lanes=0,e}function Jr(e,t,n){return za(t,e.child,null,n),e=Fr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function K0(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),fr(e.return,t,n)}function Pr(e,t,n,a,r,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:c}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=a,p.tail=n,p.tailMode=r,p.treeForkCount=c)}function F0(e,t,n){var a=t.pendingProps,r=a.revealOrder,c=a.tail;a=a.children;var p=Qe.current,y=(p&2)!==0;if(y?(p=p&1|2,t.flags|=128):p&=1,K(Qe,p),ut(e,t,a,n),a=we?$l:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&K0(e,n,t);else if(e.tag===19)K0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&xs(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Pr(t,!1,r,n,c,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&xs(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Pr(t,!0,n,null,c,a);break;case"together":Pr(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ia|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ol(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fs(e)))}function ag(e,t,n){switch(t.tag){case 3:ie(t,t.stateNode.containerInfo),Jn(t,Ke,e.memoizedState.cache),ka();break;case 27:case 5:re(t);break;case 4:ie(t,t.stateNode.containerInfo);break;case 10:Jn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Er(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ta(t),t.flags|=128,null):(n&t.child.childLanes)!==0?$0(e,t,n):(ta(t),e=zn(e,t,n),e!==null?e.sibling:null);ta(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(ol(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return F0(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),K(Qe,Qe.current),a)break;return null;case 22:return t.lanes=0,V0(e,t,n,t.pendingProps);case 24:Jn(t,Ke,e.memoizedState.cache)}return zn(e,t,n)}function J0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Wr(e,n)&&(t.flags&128)===0)return Je=!1,ag(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,we&&(t.flags&1048576)!==0&&Dd(t,$l,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e=="function")lr(e)?(a=_a(e,a),t.tag=1,t=X0(null,t,e,a,n)):(t.tag=0,t=Xr(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===X){t.tag=11,t=Z0(null,t,e,a,n);break e}else if(r===q){t.tag=14,t=B0(null,t,e,a,n);break e}}throw t=ke(e)||e,Error(o(306,t,""))}}return t;case 0:return Xr(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=_a(a,t.pendingProps),X0(e,t,a,r,n);case 3:e:{if(ie(t,t.stateNode.containerInfo),e===null)throw Error(o(387));a=t.pendingProps;var c=t.memoizedState;r=c.element,yr(e,t),ni(t,a,null,n);var p=t.memoizedState;if(a=p.cache,Jn(t,Ke,a),a!==c.cache&&pr(t,[Ke],n,!0),ti(),a=p.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Q0(e,t,a,n);break e}else if(a!==r){r=Ft(Error(o(424)),t),Kl(r),t=Q0(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=tn(e.firstChild),rt=t,we=!0,Kn=null,Wt=!0,n=Vd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ka(),a===r){t=zn(e,t,n);break e}ut(e,t,a,n)}t=t.child}return t;case 26:return Rs(e,t),e===null?(n=c1(t.type,null,t.pendingProps,null))?t.memoizedState=n:we||(n=t.type,e=t.pendingProps,a=$s(Q.current).createElement(n),a[ot]=t,a[At]=e,dt(a,n,e),lt(a),t.stateNode=a):t.memoizedState=c1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return re(t),e===null&&we&&(a=t.stateNode=s1(t.type,t.pendingProps,Q.current),rt=t,Wt=!0,r=He,ua(t.type)?(jc=r,He=tn(a.firstChild)):He=r),ut(e,t,t.pendingProps.children,n),Rs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&we&&((r=a=He)&&(a=Og(a,t.type,t.pendingProps,Wt),a!==null?(t.stateNode=a,rt=t,He=tn(a.firstChild),Wt=!1,r=!0):r=!1),r||Fn(t)),re(t),r=t.type,c=t.pendingProps,p=e!==null?e.memoizedProps:null,a=c.children,Tc(r,c)?a=null:p!==null&&Tc(r,p)&&(t.flags|=32),t.memoizedState!==null&&(r=Nr(e,t,$m,null,null,n),wi._currentValue=r),Rs(e,t),ut(e,t,a,n),t.child;case 6:return e===null&&we&&((e=n=He)&&(n=zg(n,t.pendingProps,Wt),n!==null?(t.stateNode=n,rt=t,He=null,e=!0):e=!1),e||Fn(t)),null;case 13:return $0(e,t,n);case 4:return ie(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=za(t,null,a,n):ut(e,t,a,n),t.child;case 11:return Z0(e,t,t.type,t.pendingProps,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Jn(t,t.type,a.value),ut(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,Ma(t),r=ct(r),a=a(r),t.flags|=1,ut(e,t,a,n),t.child;case 14:return B0(e,t,t.type,t.pendingProps,n);case 15:return q0(e,t,t.type,t.pendingProps,n);case 19:return F0(e,t,n);case 31:return ng(e,t,n);case 22:return V0(e,t,n,t.pendingProps);case 24:return Ma(t),a=ct(Ke),e===null?(r=gr(),r===null&&(r=_e,c=hr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),t.memoizedState={parent:a,cache:r},vr(t),Jn(t,Ke,r)):((e.lanes&n)!==0&&(yr(e,t),ni(t,null,null,n),ti()),r=e.memoizedState,c=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Jn(t,Ke,a)):(a=c.cache,Jn(t,Ke,a),a!==r.cache&&pr(t,[Ke],n,!0))),ut(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Ln(e){e.flags|=4}function ec(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Af())e.flags|=8192;else throw Oa=gs,br}else e.flags&=-16777217}function P0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!h1(t))if(Af())e.flags|=8192;else throw Oa=gs,br}function Os(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ht():536870912,e.lanes|=t,yl|=t)}function ri(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function lg(e,t,n){var a=t.pendingProps;switch(rr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return Ze(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Rn(Ke),le(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(sl(t)?Ln(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ur())),Ze(t),null;case 26:var r=t.type,c=t.memoizedState;return e===null?(Ln(t),c!==null?(Ze(t),P0(t,c)):(Ze(t),ec(t,r,null,a,n))):c?c!==e.memoizedState?(Ln(t),Ze(t),P0(t,c)):(Ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Ln(t),Ze(t),ec(t,r,e,a,n)),null;case 27:if(St(t),n=Q.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Ln(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return Ze(t),null}e=J.current,sl(t)?Rd(t):(e=s1(r,a,n),t.stateNode=e,Ln(t))}return Ze(t),null;case 5:if(St(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Ln(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return Ze(t),null}if(c=J.current,sl(t))Rd(t);else{var p=$s(Q.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof a.is=="string"?p.createElement("select",{is:a.is}):p.createElement("select"),a.multiple?c.multiple=!0:a.size&&(c.size=a.size);break;default:c=typeof a.is=="string"?p.createElement(r,{is:a.is}):p.createElement(r)}}c[ot]=t,c[At]=a;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=c;e:switch(dt(c,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Ln(t)}}return Ze(t),ec(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Ln(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(e=Q.current,sl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=rt,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Kf(e.nodeValue,n)),e||Fn(t,!0)}else e=$s(e).createTextNode(a),e[ot]=t,t.stateNode=e}return Ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=sl(t),n!==null){if(e===null){if(!a)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[ot]=t}else ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),e=!1}else n=ur(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_t(t),t):(_t(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ze(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=sl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[ot]=t}else ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),r=!1}else r=ur(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(_t(t),t):(_t(t),null)}return _t(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Os(t,t.updateQueue),Ze(t),null);case 4:return le(),e===null&&wc(t.stateNode.containerInfo),Ze(t),null;case 10:return Rn(t.type),Ze(t),null;case 19:if(L(Qe),a=t.memoizedState,a===null)return Ze(t),null;if(r=(t.flags&128)!==0,c=a.rendering,c===null)if(r)ri(a,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=xs(e),c!==null){for(t.flags|=128,ri(a,!1),e=c.updateQueue,t.updateQueue=e,Os(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Nd(n,e),n=n.sibling;return K(Qe,Qe.current&1|2),we&&Dn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&ft()>Hs&&(t.flags|=128,r=!0,ri(a,!1),t.lanes=4194304)}else{if(!r)if(e=xs(c),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Os(t,e),ri(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!we)return Ze(t),null}else 2*ft()-a.renderingStartTime>Hs&&n!==536870912&&(t.flags|=128,r=!0,ri(a,!1),t.lanes=4194304);a.isBackwards?(c.sibling=t.child,t.child=c):(e=a.last,e!==null?e.sibling=c:t.child=c,a.last=c)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ft(),e.sibling=null,n=Qe.current,K(Qe,r?n&1|2:n&1),we&&Dn(t,a.treeForkCount),e):(Ze(t),null);case 22:case 23:return _t(t),Cr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),n=t.updateQueue,n!==null&&Os(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&L(Ra),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Rn(Ke),Ze(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function ig(e,t){switch(rr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(Ke),le(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return St(t),null;case 31:if(t.memoizedState!==null){if(_t(t),t.alternate===null)throw Error(o(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_t(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Qe),null;case 4:return le(),null;case 10:return Rn(t.type),null;case 22:case 23:return _t(t),Cr(),e!==null&&L(Ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Rn(Ke),null;case 25:return null;default:return null}}function W0(e,t){switch(rr(t),t.tag){case 3:Rn(Ke),le();break;case 26:case 27:case 5:St(t);break;case 4:le();break;case 31:t.memoizedState!==null&&_t(t);break;case 13:_t(t);break;case 19:L(Qe);break;case 10:Rn(t.type);break;case 22:case 23:_t(t),Cr(),e!==null&&L(Ra);break;case 24:Rn(Ke)}}function ci(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var c=n.create,p=n.inst;a=c(),p.destroy=a}n=n.next}while(n!==r)}}catch(y){Me(t,t.return,y)}}function aa(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){var p=a.inst,y=p.destroy;if(y!==void 0){p.destroy=void 0,r=t;var w=n,R=y;try{R()}catch(_){Me(r,w,_)}}}a=a.next}while(a!==c)}}catch(_){Me(t,t.return,_)}}function ef(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Yd(t,n)}catch(a){Me(e,e.return,a)}}}function tf(e,t,n){n.props=_a(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Me(e,t,a)}}function ui(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){Me(e,t,r)}}function vn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Me(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Me(e,t,r)}else n.current=null}function nf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Me(e,e.return,r)}}function tc(e,t,n){try{var a=e.stateNode;Tg(a,e.type,n,t),a[At]=t}catch(r){Me(e,e.return,r)}}function af(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ua(e.type)||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||af(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ac(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nn));else if(a!==4&&(a===27&&ua(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ac(e,t,n),e=e.sibling;e!==null;)ac(e,t,n),e=e.sibling}function zs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ua(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(zs(e,t,n),e=e.sibling;e!==null;)zs(e,t,n),e=e.sibling}function lf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);dt(t,a,n),t[ot]=e,t[At]=n}catch(c){Me(e,e.return,c)}}var _n=!1,Pe=!1,lc=!1,sf=typeof WeakSet=="function"?WeakSet:Set,it=null;function sg(e,t){if(e=e.containerInfo,Ac=to,e=bd(e),Jo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var p=0,y=-1,w=-1,R=0,_=0,H=e,O=null;t:for(;;){for(var z;H!==n||r!==0&&H.nodeType!==3||(y=p+r),H!==c||a!==0&&H.nodeType!==3||(w=p+a),H.nodeType===3&&(p+=H.nodeValue.length),(z=H.firstChild)!==null;)O=H,H=z;for(;;){if(H===e)break t;if(O===n&&++R===r&&(y=p),O===c&&++_===a&&(w=p),(z=H.nextSibling)!==null)break;H=O,O=H.parentNode}H=z}n=y===-1||w===-1?null:{start:y,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nc={focusedElem:e,selectionRange:n},to=!1,it=t;it!==null;)if(t=it,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,it=e;else for(;it!==null;){switch(t=it,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,r=c.memoizedProps,c=c.memoizedState,a=n.stateNode;try{var ee=_a(n.type,r);e=a.getSnapshotBeforeUpdate(ee,c),a.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Me(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Dc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Dc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,it=e;break}it=t.return}}function of(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Hn(e,n),a&4&&ci(5,n);break;case 1:if(Hn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){Me(n,n.return,p)}else{var r=_a(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Me(n,n.return,p)}}a&64&&ef(n),a&512&&ui(n,n.return);break;case 3:if(Hn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Yd(e,t)}catch(p){Me(n,n.return,p)}}break;case 27:t===null&&a&4&&lf(n);case 26:case 5:Hn(e,n),t===null&&a&4&&nf(n),a&512&&ui(n,n.return);break;case 12:Hn(e,n);break;case 31:Hn(e,n),a&4&&uf(e,n);break;case 13:Hn(e,n),a&4&&df(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=mg.bind(null,n),Lg(e,n))));break;case 22:if(a=n.memoizedState!==null||_n,!a){t=t!==null&&t.memoizedState!==null||Pe,r=_n;var c=Pe;_n=a,(Pe=t)&&!c?Zn(e,n,(n.subtreeFlags&8772)!==0):Hn(e,n),_n=r,Pe=c}break;case 30:break;default:Hn(e,n)}}function rf(e){var t=e.alternate;t!==null&&(e.alternate=null,rf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,Tt=!1;function Un(e,t,n){for(n=n.child;n!==null;)cf(e,t,n),n=n.sibling}function cf(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Sa,n)}catch{}switch(n.tag){case 26:Pe||vn(n,t),Un(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Pe||vn(n,t);var a=Be,r=Tt;ua(n.type)&&(Be=n.stateNode,Tt=!1),Un(e,t,n),yi(n.stateNode),Be=a,Tt=r;break;case 5:Pe||vn(n,t);case 6:if(a=Be,r=Tt,Be=null,Un(e,t,n),Be=a,Tt=r,Be!==null)if(Tt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(n.stateNode)}catch(c){Me(n,t,c)}else try{Be.removeChild(n.stateNode)}catch(c){Me(n,t,c)}break;case 18:Be!==null&&(Tt?(e=Be,t1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Tl(e)):t1(Be,n.stateNode));break;case 4:a=Be,r=Tt,Be=n.stateNode.containerInfo,Tt=!0,Un(e,t,n),Be=a,Tt=r;break;case 0:case 11:case 14:case 15:aa(2,n,t),Pe||aa(4,n,t),Un(e,t,n);break;case 1:Pe||(vn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&tf(n,t,a)),Un(e,t,n);break;case 21:Un(e,t,n);break;case 22:Pe=(a=Pe)||n.memoizedState!==null,Un(e,t,n),Pe=a;break;default:Un(e,t,n)}}function uf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tl(e)}catch(n){Me(t,t.return,n)}}}function df(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tl(e)}catch(n){Me(t,t.return,n)}}function og(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sf),t;default:throw Error(o(435,e.tag))}}function Ls(e,t){var n=og(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=gg.bind(null,e,a);a.then(r,r)}})}function kt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],c=e,p=t,y=p;e:for(;y!==null;){switch(y.tag){case 27:if(ua(y.type)){Be=y.stateNode,Tt=!1;break e}break;case 5:Be=y.stateNode,Tt=!1;break e;case 3:case 4:Be=y.stateNode.containerInfo,Tt=!0;break e}y=y.return}if(Be===null)throw Error(o(160));cf(c,p,r),Be=null,Tt=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ff(t,e),t=t.sibling}var cn=null;function ff(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kt(t,e),Dt(e),a&4&&(aa(3,e,e.return),ci(3,e),aa(5,e,e.return));break;case 1:kt(t,e),Dt(e),a&512&&(Pe||n===null||vn(n,n.return)),a&64&&_n&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=cn;if(kt(t,e),Dt(e),a&512&&(Pe||n===null||vn(n,n.return)),a&4){var c=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":c=r.getElementsByTagName("title")[0],(!c||c[Ul]||c[ot]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(a),r.head.insertBefore(c,r.querySelector("head > title"))),dt(c,a,n),c[ot]=e,lt(c),a=c;break e;case"link":var p=f1("link","href",r).get(a+(n.href||""));if(p){for(var y=0;y<p.length;y++)if(c=p[y],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(y,1);break t}}c=r.createElement(a),dt(c,a,n),r.head.appendChild(c);break;case"meta":if(p=f1("meta","content",r).get(a+(n.content||""))){for(y=0;y<p.length;y++)if(c=p[y],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(y,1);break t}}c=r.createElement(a),dt(c,a,n),r.head.appendChild(c);break;default:throw Error(o(468,a))}c[ot]=e,lt(c),a=c}e.stateNode=a}else p1(r,e.type,e.stateNode);else e.stateNode=d1(r,a,e.memoizedProps);else c!==a?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,a===null?p1(r,e.type,e.stateNode):d1(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&tc(e,e.memoizedProps,n.memoizedProps)}break;case 27:kt(t,e),Dt(e),a&512&&(Pe||n===null||vn(n,n.return)),n!==null&&a&4&&tc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(kt(t,e),Dt(e),a&512&&(Pe||n===null||vn(n,n.return)),e.flags&32){r=e.stateNode;try{Fa(r,"")}catch(ee){Me(e,e.return,ee)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,tc(e,r,n!==null?n.memoizedProps:r)),a&1024&&(lc=!0);break;case 6:if(kt(t,e),Dt(e),a&4){if(e.stateNode===null)throw Error(o(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ee){Me(e,e.return,ee)}}break;case 3:if(Js=null,r=cn,cn=Ks(t.containerInfo),kt(t,e),cn=r,Dt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Tl(t.containerInfo)}catch(ee){Me(e,e.return,ee)}lc&&(lc=!1,pf(e));break;case 4:a=cn,cn=Ks(e.stateNode.containerInfo),kt(t,e),Dt(e),cn=a;break;case 12:kt(t,e),Dt(e);break;case 31:kt(t,e),Dt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ls(e,a)));break;case 13:kt(t,e),Dt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Us=ft()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ls(e,a)));break;case 22:r=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,R=_n,_=Pe;if(_n=R||r,Pe=_||w,kt(t,e),Pe=_,_n=R,Dt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||w||_n||Pe||Ua(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(c=w.stateNode,r)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{y=w.stateNode;var H=w.memoizedProps.style,O=H!=null&&H.hasOwnProperty("display")?H.display:null;y.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(ee){Me(w,w.return,ee)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=r?"":w.memoizedProps}catch(ee){Me(w,w.return,ee)}}}else if(t.tag===18){if(n===null){w=t;try{var z=w.stateNode;r?n1(z,!0):n1(w.stateNode,!1)}catch(ee){Me(w,w.return,ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ls(e,n))));break;case 19:kt(t,e),Dt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ls(e,a)));break;case 30:break;case 21:break;default:kt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(af(a)){n=a;break}a=a.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,c=nc(e);zs(e,c,r);break;case 5:var p=n.stateNode;n.flags&32&&(Fa(p,""),n.flags&=-33);var y=nc(e);zs(e,y,p);break;case 3:case 4:var w=n.stateNode.containerInfo,R=nc(e);ac(e,R,w);break;default:throw Error(o(161))}}catch(_){Me(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;pf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Hn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)of(e,t.alternate,t),t=t.sibling}function Ua(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:aa(4,t,t.return),Ua(t);break;case 1:vn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&tf(t,t.return,n),Ua(t);break;case 27:yi(t.stateNode);case 26:case 5:vn(t,t.return),Ua(t);break;case 22:t.memoizedState===null&&Ua(t);break;case 30:Ua(t);break;default:Ua(t)}e=e.sibling}}function Zn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,c=t,p=c.flags;switch(c.tag){case 0:case 11:case 15:Zn(r,c,n),ci(4,c);break;case 1:if(Zn(r,c,n),a=c,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(R){Me(a,a.return,R)}if(a=c,r=a.updateQueue,r!==null){var y=a.stateNode;try{var w=r.shared.hiddenCallbacks;if(w!==null)for(r.shared.hiddenCallbacks=null,r=0;r<w.length;r++)Id(w[r],y)}catch(R){Me(a,a.return,R)}}n&&p&64&&ef(c),ui(c,c.return);break;case 27:lf(c);case 26:case 5:Zn(r,c,n),n&&a===null&&p&4&&nf(c),ui(c,c.return);break;case 12:Zn(r,c,n);break;case 31:Zn(r,c,n),n&&p&4&&uf(r,c);break;case 13:Zn(r,c,n),n&&p&4&&df(r,c);break;case 22:c.memoizedState===null&&Zn(r,c,n),ui(c,c.return);break;case 30:break;default:Zn(r,c,n)}t=t.sibling}}function ic(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fl(n))}function sc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fl(e))}function un(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hf(e,t,n,a),t=t.sibling}function hf(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:un(e,t,n,a),r&2048&&ci(9,t);break;case 1:un(e,t,n,a);break;case 3:un(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fl(e)));break;case 12:if(r&2048){un(e,t,n,a),e=t.stateNode;try{var c=t.memoizedProps,p=c.id,y=c.onPostCommit;typeof y=="function"&&y(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Me(t,t.return,w)}}else un(e,t,n,a);break;case 31:un(e,t,n,a);break;case 13:un(e,t,n,a);break;case 23:break;case 22:c=t.stateNode,p=t.alternate,t.memoizedState!==null?c._visibility&2?un(e,t,n,a):di(e,t):c._visibility&2?un(e,t,n,a):(c._visibility|=2,gl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&ic(p,t);break;case 24:un(e,t,n,a),r&2048&&sc(t.alternate,t);break;default:un(e,t,n,a)}}function gl(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,p=t,y=n,w=a,R=p.flags;switch(p.tag){case 0:case 11:case 15:gl(c,p,y,w,r),ci(8,p);break;case 23:break;case 22:var _=p.stateNode;p.memoizedState!==null?_._visibility&2?gl(c,p,y,w,r):di(c,p):(_._visibility|=2,gl(c,p,y,w,r)),r&&R&2048&&ic(p.alternate,p);break;case 24:gl(c,p,y,w,r),r&&R&2048&&sc(p.alternate,p);break;default:gl(c,p,y,w,r)}t=t.sibling}}function di(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:di(n,a),r&2048&&ic(a.alternate,a);break;case 24:di(n,a),r&2048&&sc(a.alternate,a);break;default:di(n,a)}t=t.sibling}}var fi=8192;function bl(e,t,n){if(e.subtreeFlags&fi)for(e=e.child;e!==null;)mf(e,t,n),e=e.sibling}function mf(e,t,n){switch(e.tag){case 26:bl(e,t,n),e.flags&fi&&e.memoizedState!==null&&Qg(n,cn,e.memoizedState,e.memoizedProps);break;case 5:bl(e,t,n);break;case 3:case 4:var a=cn;cn=Ks(e.stateNode.containerInfo),bl(e,t,n),cn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=fi,fi=16777216,bl(e,t,n),fi=a):bl(e,t,n));break;default:bl(e,t,n)}}function gf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];it=a,vf(a,e)}gf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bf(e),e=e.sibling}function bf(e){switch(e.tag){case 0:case 11:case 15:pi(e),e.flags&2048&&aa(9,e,e.return);break;case 3:pi(e);break;case 12:pi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_s(e)):pi(e);break;default:pi(e)}}function _s(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];it=a,vf(a,e)}gf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:aa(8,t,t.return),_s(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,_s(t));break;default:_s(t)}e=e.sibling}}function vf(e,t){for(;it!==null;){var n=it;switch(n.tag){case 0:case 11:case 15:aa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Fl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,it=a;else e:for(n=e;it!==null;){a=it;var r=a.sibling,c=a.return;if(rf(a),a===n){it=null;break e}if(r!==null){r.return=c,it=r;break e}it=c}}}var rg={getCacheForType:function(e){var t=ct(Ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ct(Ke).controller.signal}},cg=typeof WeakMap=="function"?WeakMap:Map,Ne=0,_e=null,ve=null,xe=0,De=0,Ut=null,la=!1,vl=!1,oc=!1,Bn=0,Ye=0,ia=0,Ha=0,rc=0,Ht=0,yl=0,hi=null,Mt=null,cc=!1,Us=0,yf=0,Hs=1/0,Zs=null,sa=null,et=0,oa=null,xl=null,qn=0,uc=0,dc=null,xf=null,mi=0,fc=null;function Zt(){return(Ne&2)!==0&&xe!==0?xe&-xe:j.T!==null?vc():on()}function Sf(){if(Ht===0)if((xe&536870912)===0||we){var e=Ia;Ia<<=1,(Ia&3932160)===0&&(Ia=262144),Ht=e}else Ht=536870912;return e=Lt.current,e!==null&&(e.flags|=32),Ht}function Rt(e,t,n){(e===_e&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),ra(e,xe,Ht,!1)),Yt(e,n),((Ne&2)===0||e!==_e)&&(e===_e&&((Ne&2)===0&&(Ha|=n),Ye===4&&ra(e,xe,Ht,!1)),yn(e))}function wf(e,t,n){if((Ne&6)!==0)throw Error(o(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||wt(e,t),r=a?fg(e,t):hc(e,t,!0),c=a;do{if(r===0){vl&&!a&&ra(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!ug(n)){r=hc(e,t,!1),c=!1;continue}if(r===2){if(c=t,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var y=e;r=hi;var w=y.current.memoizedState.isDehydrated;if(w&&(Sl(y,p).flags|=256),p=hc(y,p,!1),p!==2){if(oc&&!w){y.errorRecoveryDisabledLanes|=c,Ha|=c,r=4;break e}c=Mt,Mt=r,c!==null&&(Mt===null?Mt=c:Mt.push.apply(Mt,c))}r=p}if(c=!1,r!==2)continue}}if(r===1){Sl(e,0),ra(e,t,0,!0);break}e:{switch(a=e,c=r,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ra(a,t,Ht,!la);break e;case 2:Mt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=Us+300-ft(),10<r)){if(ra(a,t,Ht,!la),at(a,0,!0)!==0)break e;qn=t,a.timeoutHandle=Wf(Cf.bind(null,a,n,Mt,Zs,cc,t,Ht,Ha,yl,la,c,"Throttled",-0,0),r);break e}Cf(a,n,Mt,Zs,cc,t,Ht,Ha,yl,la,c,null,-0,0)}}break}while(!0);yn(e)}function Cf(e,t,n,a,r,c,p,y,w,R,_,H,O,z){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nn},mf(t,c,H);var ee=(c&62914560)===c?Us-ft():(c&4194048)===c?yf-ft():0;if(ee=$g(H,ee),ee!==null){qn=c,e.cancelPendingCommit=ee(Rf.bind(null,e,t,c,n,a,r,p,y,w,_,H,null,O,z)),ra(e,c,p,!R);return}}Rf(e,t,c,n,a,r,p,y,w)}function ug(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],c=r.getSnapshot;r=r.value;try{if(!Ot(c(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ra(e,t,n,a){t&=~rc,t&=~Ha,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var c=31-pt(r),p=1<<c;a[c]=-1,r&=~p}n!==0&&sn(e,n,t)}function Bs(){return(Ne&6)===0?(gi(0),!1):!0}function pc(){if(ve!==null){if(De===0)var e=ve.return;else e=ve,Mn=Da=null,Dr(e),dl=null,Pl=0,e=ve;for(;e!==null;)W0(e.alternate,e),e=e.return;ve=null}}function Sl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Mg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),qn=0,pc(),_e=e,ve=n=kn(e.current,null),xe=t,De=0,Ut=null,la=!1,vl=wt(e,t),oc=!1,yl=Ht=rc=Ha=ia=Ye=0,Mt=hi=null,cc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-pt(a),c=1<<r;t|=e[r],a&=~c}return Bn=t,os(),n}function Ef(e,t){he=null,j.H=si,t===ul||t===ms?(t=Zd(),De=3):t===br?(t=Zd(),De=4):De=t===Gr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ut=t,ve===null&&(Ye=1,Ds(e,Ft(t,e.current)))}function Af(){var e=Lt.current;return e===null?!0:(xe&4194048)===xe?en===null:(xe&62914560)===xe||(xe&536870912)!==0?e===en:!1}function Nf(){var e=j.H;return j.H=si,e===null?si:e}function Tf(){var e=j.A;return j.A=rg,e}function qs(){Ye=4,la||(xe&4194048)!==xe&&Lt.current!==null||(vl=!0),(ia&134217727)===0&&(Ha&134217727)===0||_e===null||ra(_e,xe,Ht,!1)}function hc(e,t,n){var a=Ne;Ne|=2;var r=Nf(),c=Tf();(_e!==e||xe!==t)&&(Zs=null,Sl(e,t)),t=!1;var p=Ye;e:do try{if(De!==0&&ve!==null){var y=ve,w=Ut;switch(De){case 8:pc(),p=6;break e;case 3:case 2:case 9:case 6:Lt.current===null&&(t=!0);var R=De;if(De=0,Ut=null,wl(e,y,w,R),n&&vl){p=0;break e}break;default:R=De,De=0,Ut=null,wl(e,y,w,R)}}dg(),p=Ye;break}catch(_){Ef(e,_)}while(!0);return t&&e.shellSuspendCounter++,Mn=Da=null,Ne=a,j.H=r,j.A=c,ve===null&&(_e=null,xe=0,os()),p}function dg(){for(;ve!==null;)kf(ve)}function fg(e,t){var n=Ne;Ne|=2;var a=Nf(),r=Tf();_e!==e||xe!==t?(Zs=null,Hs=ft()+500,Sl(e,t)):vl=wt(e,t);e:do try{if(De!==0&&ve!==null){t=ve;var c=Ut;t:switch(De){case 1:De=0,Ut=null,wl(e,t,c,1);break;case 2:case 9:if(Ud(c)){De=0,Ut=null,Df(t);break}t=function(){De!==2&&De!==9||_e!==e||(De=7),yn(e)},c.then(t,t);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:Ud(c)?(De=0,Ut=null,Df(t)):(De=0,Ut=null,wl(e,t,c,7));break;case 5:var p=null;switch(ve.tag){case 26:p=ve.memoizedState;case 5:case 27:var y=ve;if(p?h1(p):y.stateNode.complete){De=0,Ut=null;var w=y.sibling;if(w!==null)ve=w;else{var R=y.return;R!==null?(ve=R,Vs(R)):ve=null}break t}}De=0,Ut=null,wl(e,t,c,5);break;case 6:De=0,Ut=null,wl(e,t,c,6);break;case 8:pc(),Ye=6;break e;default:throw Error(o(462))}}pg();break}catch(_){Ef(e,_)}while(!0);return Mn=Da=null,j.H=a,j.A=r,Ne=n,ve!==null?0:(_e=null,xe=0,os(),Ye)}function pg(){for(;ve!==null&&!qa();)kf(ve)}function kf(e){var t=J0(e.alternate,e,Bn);e.memoizedProps=e.pendingProps,t===null?Vs(e):ve=t}function Df(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=G0(n,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=G0(n,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:Dr(t);default:W0(n,t),t=ve=Nd(t,Bn),t=J0(n,t,Bn)}e.memoizedProps=e.pendingProps,t===null?Vs(e):ve=t}function wl(e,t,n,a){Mn=Da=null,Dr(t),dl=null,Pl=0;var r=t.return;try{if(tg(e,r,t,n,xe)){Ye=1,Ds(e,Ft(n,e.current)),ve=null;return}}catch(c){if(r!==null)throw ve=r,c;Ye=1,Ds(e,Ft(n,e.current)),ve=null;return}t.flags&32768?(we||a===1?e=!0:vl||(xe&536870912)!==0?e=!1:(la=e=!0,(a===2||a===9||a===3||a===6)&&(a=Lt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Mf(t,e)):Vs(t)}function Vs(e){var t=e;do{if((t.flags&32768)!==0){Mf(t,la);return}e=t.return;var n=lg(t.alternate,t,Bn);if(n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);Ye===0&&(Ye=5)}function Mf(e,t){do{var n=ig(e.alternate,e);if(n!==null){n.flags&=32767,ve=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ve=e;return}ve=e=n}while(e!==null);Ye=6,ve=null}function Rf(e,t,n,a,r,c,p,y,w){e.cancelPendingCommit=null;do Is();while(et!==0);if((Ne&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=nr,We(e,n,c,p,y,w),e===_e&&(ve=_e=null,xe=0),xl=t,oa=e,qn=n,uc=c,dc=r,xf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bg(ln,function(){return _f(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=j.T,j.T=null,r=V.p,V.p=2,p=Ne,Ne|=4;try{sg(e,t,n)}finally{Ne=p,V.p=r,j.T=a}}et=1,jf(),Of(),zf()}}function jf(){if(et===1){et=0;var e=oa,t=xl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=j.T,j.T=null;var a=V.p;V.p=2;var r=Ne;Ne|=4;try{ff(t,e);var c=Nc,p=bd(e.containerInfo),y=c.focusedElem,w=c.selectionRange;if(p!==y&&y&&y.ownerDocument&&gd(y.ownerDocument.documentElement,y)){if(w!==null&&Jo(y)){var R=w.start,_=w.end;if(_===void 0&&(_=R),"selectionStart"in y)y.selectionStart=R,y.selectionEnd=Math.min(_,y.value.length);else{var H=y.ownerDocument||document,O=H&&H.defaultView||window;if(O.getSelection){var z=O.getSelection(),ee=y.textContent.length,oe=Math.min(w.start,ee),ze=w.end===void 0?oe:Math.min(w.end,ee);!z.extend&&oe>ze&&(p=ze,ze=oe,oe=p);var N=md(y,oe),C=md(y,ze);if(N&&C&&(z.rangeCount!==1||z.anchorNode!==N.node||z.anchorOffset!==N.offset||z.focusNode!==C.node||z.focusOffset!==C.offset)){var D=H.createRange();D.setStart(N.node,N.offset),z.removeAllRanges(),oe>ze?(z.addRange(D),z.extend(C.node,C.offset)):(D.setEnd(C.node,C.offset),z.addRange(D))}}}}for(H=[],z=y;z=z.parentNode;)z.nodeType===1&&H.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<H.length;y++){var U=H[y];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}to=!!Ac,Nc=Ac=null}finally{Ne=r,V.p=a,j.T=n}}e.current=t,et=2}}function Of(){if(et===2){et=0;var e=oa,t=xl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=j.T,j.T=null;var a=V.p;V.p=2;var r=Ne;Ne|=4;try{of(e,t.alternate,t)}finally{Ne=r,V.p=a,j.T=n}}et=3}}function zf(){if(et===4||et===3){et=0,Xi();var e=oa,t=xl,n=qn,a=xf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,xl=oa=null,Lf(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(sa=null),En(n),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Sa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=j.T,r=V.p,V.p=2,j.T=null;try{for(var c=e.onRecoverableError,p=0;p<a.length;p++){var y=a[p];c(y.value,{componentStack:y.stack})}}finally{j.T=t,V.p=r}}(qn&3)!==0&&Is(),yn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===fc?mi++:(mi=0,fc=e):mi=0,gi(0)}}function Lf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fl(t)))}function Is(){return jf(),Of(),zf(),_f()}function _f(){if(et!==5)return!1;var e=oa,t=uc;uc=0;var n=En(qn),a=j.T,r=V.p;try{V.p=32>n?32:n,j.T=null,n=dc,dc=null;var c=oa,p=qn;if(et=0,xl=oa=null,qn=0,(Ne&6)!==0)throw Error(o(331));var y=Ne;if(Ne|=4,bf(c.current),hf(c,c.current,p,n),Ne=y,gi(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Sa,c)}catch{}return!0}finally{V.p=r,j.T=a,Lf(e,t)}}function Uf(e,t,n){t=Ft(n,t),t=Yr(e.stateNode,t,2),e=ea(e,t,2),e!==null&&(Yt(e,2),yn(e))}function Me(e,t,n){if(e.tag===3)Uf(e,e,n);else for(;t!==null;){if(t.tag===3){Uf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(sa===null||!sa.has(a))){e=Ft(n,e),n=U0(2),a=ea(t,n,2),a!==null&&(H0(n,a,t,e),Yt(a,2),yn(a));break}}t=t.return}}function mc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new cg;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(oc=!0,r.add(n),e=hg.bind(null,e,t,n),t.then(e,e))}function hg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(xe&n)===n&&(Ye===4||Ye===3&&(xe&62914560)===xe&&300>ft()-Us?(Ne&2)===0&&Sl(e,0):rc|=n,yl===xe&&(yl=0)),yn(e)}function Hf(e,t){t===0&&(t=ht()),e=Na(e,t),e!==null&&(Yt(e,t),yn(e))}function mg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hf(e,n)}function gg(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(t),Hf(e,n)}function bg(e,t){return Vt(e,t)}var Ys=null,Cl=null,gc=!1,Gs=!1,bc=!1,ca=0;function yn(e){e!==Cl&&e.next===null&&(Cl===null?Ys=Cl=e:Cl=Cl.next=e),Gs=!0,gc||(gc=!0,yg())}function gi(e,t){if(!bc&&Gs){bc=!0;do for(var n=!1,a=Ys;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var c=0;else{var p=a.suspendedLanes,y=a.pingedLanes;c=(1<<31-pt(42|e)+1)-1,c&=r&~(p&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Vf(a,c))}else c=xe,c=at(a,a===_e?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||wt(a,c)||(n=!0,Vf(a,c));a=a.next}while(n);bc=!1}}function vg(){Zf()}function Zf(){Gs=gc=!1;var e=0;ca!==0&&Dg()&&(e=ca);for(var t=ft(),n=null,a=Ys;a!==null;){var r=a.next,c=Bf(a,t);c===0?(a.next=null,n===null?Ys=r:n.next=r,r===null&&(Cl=n)):(n=a,(e!==0||(c&3)!==0)&&(Gs=!0)),a=r}et!==0&&et!==5||gi(e),ca!==0&&(ca=0)}function Bf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-pt(c),y=1<<p,w=r[p];w===-1?((y&n)===0||(y&a)!==0)&&(r[p]=Ct(y,t)):w<=t&&(e.expiredLanes|=y),c&=~y}if(t=_e,n=xe,n=at(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(De===2||De===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Gn(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||wt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Gn(a),En(n)){case 2:case 8:n=wn;break;case 32:n=ln;break;case 268435456:n=_l;break;default:n=ln}return a=qf.bind(null,e),n=Vt(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Gn(a),e.callbackPriority=2,e.callbackNode=null,2}function qf(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Is()&&e.callbackNode!==n)return null;var a=xe;return a=at(e,e===_e?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(wf(e,a,t),Bf(e,ft()),e.callbackNode!=null&&e.callbackNode===n?qf.bind(null,e):null)}function Vf(e,t){if(Is())return null;wf(e,t,!0)}function yg(){Rg(function(){(Ne&6)!==0?Vt(Qi,vg):Zf()})}function vc(){if(ca===0){var e=rl;e===0&&(e=Va,Va<<=1,(Va&261888)===0&&(Va=256)),ca=e}return ca}function If(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wi(""+e)}function Yf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function xg(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var c=If((r[At]||null).action),p=a.submitter;p&&(t=(t=p[At]||null)?If(t.formAction):p.getAttribute("formAction"),t!==null&&(c=t,p=null));var y=new as("action","action",null,a,r);e.push({event:y,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ca!==0){var w=p?Yf(r,p):new FormData(r);Hr(n,{pending:!0,data:w,method:r.method,action:c},null,w)}}else typeof c=="function"&&(y.preventDefault(),w=p?Yf(r,p):new FormData(r),Hr(n,{pending:!0,data:w,method:r.method,action:c},c,w))},currentTarget:r}]})}}for(var yc=0;yc<tr.length;yc++){var xc=tr[yc],Sg=xc.toLowerCase(),wg=xc[0].toUpperCase()+xc.slice(1);rn(Sg,"on"+wg)}rn(xd,"onAnimationEnd"),rn(Sd,"onAnimationIteration"),rn(wd,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(Hm,"onTransitionRun"),rn(Zm,"onTransitionStart"),rn(Bm,"onTransitionCancel"),rn(Cd,"onTransitionEnd"),$a("onMouseEnter",["mouseout","mouseover"]),$a("onMouseLeave",["mouseout","mouseover"]),$a("onPointerEnter",["pointerout","pointerover"]),$a("onPointerLeave",["pointerout","pointerover"]),wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bi));function Gf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var c=void 0;if(t)for(var p=a.length-1;0<=p;p--){var y=a[p],w=y.instance,R=y.currentTarget;if(y=y.listener,w!==c&&r.isPropagationStopped())break e;c=y,r.currentTarget=R;try{c(r)}catch(_){ss(_)}r.currentTarget=null,c=w}else for(p=0;p<a.length;p++){if(y=a[p],w=y.instance,R=y.currentTarget,y=y.listener,w!==c&&r.isPropagationStopped())break e;c=y,r.currentTarget=R;try{c(r)}catch(_){ss(_)}r.currentTarget=null,c=w}}}}function ye(e,t){var n=t[Oo];n===void 0&&(n=t[Oo]=new Set);var a=e+"__bubble";n.has(a)||(Xf(t,e,2,!1),n.add(a))}function Sc(e,t,n){var a=0;t&&(a|=4),Xf(n,e,a,t)}var Xs="_reactListening"+Math.random().toString(36).slice(2);function wc(e){if(!e[Xs]){e[Xs]=!0,Hu.forEach(function(n){n!=="selectionchange"&&(Cg.has(n)||Sc(n,!1,e),Sc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xs]||(t[Xs]=!0,Sc("selectionchange",!1,t))}}function Xf(e,t,n,a){switch(S1(t)){case 2:var r=Jg;break;case 8:r=Pg;break;default:r=Uc}n=r.bind(null,t,n,e),r=void 0,!Vo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Cc(e,t,n,a,r){var c=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var y=a.stateNode.containerInfo;if(y===r)break;if(p===4)for(p=a.return;p!==null;){var w=p.tag;if((w===3||w===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;y!==null;){if(p=Ga(y),p===null)return;if(w=p.tag,w===5||w===6||w===26||w===27){a=c=p;continue e}y=y.parentNode}}a=a.return}Fu(function(){var R=c,_=Bo(n),H=[];e:{var O=Ed.get(e);if(O!==void 0){var z=as,ee=e;switch(e){case"keypress":if(ts(n)===0)break e;case"keydown":case"keyup":z=gm;break;case"focusin":ee="focus",z=Xo;break;case"focusout":ee="blur",z=Xo;break;case"beforeblur":case"afterblur":z=Xo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=lm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=ym;break;case xd:case Sd:case wd:z=om;break;case Cd:z=Sm;break;case"scroll":case"scrollend":z=nm;break;case"wheel":z=Cm;break;case"copy":case"cut":case"paste":z=cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=td;break;case"toggle":case"beforetoggle":z=Am}var oe=(t&4)!==0,ze=!oe&&(e==="scroll"||e==="scrollend"),N=oe?O!==null?O+"Capture":null:O;oe=[];for(var C=R,D;C!==null;){var U=C;if(D=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||D===null||N===null||(U=Zl(C,N),U!=null&&oe.push(vi(C,U,D))),ze)break;C=C.return}0<oe.length&&(O=new z(O,ee,null,n,_),H.push({event:O,listeners:oe}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",O&&n!==Zo&&(ee=n.relatedTarget||n.fromElement)&&(Ga(ee)||ee[Ya]))break e;if((z||O)&&(O=_.window===_?_:(O=_.ownerDocument)?O.defaultView||O.parentWindow:window,z?(ee=n.relatedTarget||n.toElement,z=R,ee=ee?Ga(ee):null,ee!==null&&(ze=d(ee),oe=ee.tag,ee!==ze||oe!==5&&oe!==27&&oe!==6)&&(ee=null)):(z=null,ee=R),z!==ee)){if(oe=Wu,U="onMouseLeave",N="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(oe=td,U="onPointerLeave",N="onPointerEnter",C="pointer"),ze=z==null?O:Hl(z),D=ee==null?O:Hl(ee),O=new oe(U,C+"leave",z,n,_),O.target=ze,O.relatedTarget=D,U=null,Ga(_)===R&&(oe=new oe(N,C+"enter",ee,n,_),oe.target=D,oe.relatedTarget=ze,U=oe),ze=U,z&&ee)t:{for(oe=Eg,N=z,C=ee,D=0,U=N;U;U=oe(U))D++;U=0;for(var se=C;se;se=oe(se))U++;for(;0<D-U;)N=oe(N),D--;for(;0<U-D;)C=oe(C),U--;for(;D--;){if(N===C||C!==null&&N===C.alternate){oe=N;break t}N=oe(N),C=oe(C)}oe=null}else oe=null;z!==null&&Qf(H,O,z,oe,!1),ee!==null&&ze!==null&&Qf(H,ze,ee,oe,!0)}}e:{if(O=R?Hl(R):window,z=O.nodeName&&O.nodeName.toLowerCase(),z==="select"||z==="input"&&O.type==="file")var Ce=cd;else if(od(O))if(ud)Ce=Lm;else{Ce=Om;var ne=jm}else z=O.nodeName,!z||z.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?R&&Ho(R.elementType)&&(Ce=cd):Ce=zm;if(Ce&&(Ce=Ce(e,R))){rd(H,Ce,n,_);break e}ne&&ne(e,O,R),e==="focusout"&&R&&O.type==="number"&&R.memoizedProps.value!=null&&Uo(O,"number",O.value)}switch(ne=R?Hl(R):window,e){case"focusin":(od(ne)||ne.contentEditable==="true")&&(el=ne,Po=R,Ql=null);break;case"focusout":Ql=Po=el=null;break;case"mousedown":Wo=!0;break;case"contextmenu":case"mouseup":case"dragend":Wo=!1,vd(H,n,_);break;case"selectionchange":if(Um)break;case"keydown":case"keyup":vd(H,n,_)}var ge;if($o)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Wa?id(e,n)&&(Se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Se="onCompositionStart");Se&&(nd&&n.locale!=="ko"&&(Wa||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Wa&&(ge=Ju()):(Qn=_,Io="value"in Qn?Qn.value:Qn.textContent,Wa=!0)),ne=Qs(R,Se),0<ne.length&&(Se=new ed(Se,e,null,n,_),H.push({event:Se,listeners:ne}),ge?Se.data=ge:(ge=sd(n),ge!==null&&(Se.data=ge)))),(ge=Tm?km(e,n):Dm(e,n))&&(Se=Qs(R,"onBeforeInput"),0<Se.length&&(ne=new ed("onBeforeInput","beforeinput",null,n,_),H.push({event:ne,listeners:Se}),ne.data=ge)),xg(H,e,R,n,_)}Gf(H,t)})}function vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qs(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=Zl(e,n),r!=null&&a.unshift(vi(e,r,c)),r=Zl(e,t),r!=null&&a.push(vi(e,r,c))),e.tag===3)return a;e=e.return}return[]}function Eg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qf(e,t,n,a,r){for(var c=t._reactName,p=[];n!==null&&n!==a;){var y=n,w=y.alternate,R=y.stateNode;if(y=y.tag,w!==null&&w===a)break;y!==5&&y!==26&&y!==27||R===null||(w=R,r?(R=Zl(n,c),R!=null&&p.unshift(vi(n,R,w))):r||(R=Zl(n,c),R!=null&&p.push(vi(n,R,w)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var Ag=/\r\n?/g,Ng=/\u0000|\uFFFD/g;function $f(e){return(typeof e=="string"?e:""+e).replace(Ag,`
`).replace(Ng,"")}function Kf(e,t){return t=$f(t),$f(e)===t}function Oe(e,t,n,a,r,c){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Fa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Fa(e,""+a);break;case"className":Ji(e,"class",a);break;case"tabIndex":Ji(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ji(e,n,a);break;case"style":$u(e,a,c);break;case"data":if(t!=="object"){Ji(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Wi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Oe(e,t,"name",r.name,r,null),Oe(e,t,"formEncType",r.formEncType,r,null),Oe(e,t,"formMethod",r.formMethod,r,null),Oe(e,t,"formTarget",r.formTarget,r,null)):(Oe(e,t,"encType",r.encType,r,null),Oe(e,t,"method",r.method,r,null),Oe(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Wi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Nn);break;case"onScroll":a!=null&&ye("scroll",e);break;case"onScrollEnd":a!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Wi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Fi(e,"popover",a);break;case"xlinkActuate":An(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":An(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":An(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":An(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":An(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":An(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":An(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":An(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":An(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Fi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=em.get(n)||n,Fi(e,n,a))}}function Ec(e,t,n,a,r,c){switch(n){case"style":$u(e,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Fa(e,a):(typeof a=="number"||typeof a=="bigint")&&Fa(e,""+a);break;case"onScroll":a!=null&&ye("scroll",e);break;case"onScrollEnd":a!=null&&ye("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),c=e[At]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,r),typeof a=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Fi(e,n,a)}}}function dt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var a=!1,r=!1,c;for(c in n)if(n.hasOwnProperty(c)){var p=n[c];if(p!=null)switch(c){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Oe(e,t,c,p,n,null)}}r&&Oe(e,t,"srcSet",n.srcSet,n,null),a&&Oe(e,t,"src",n.src,n,null);return;case"input":ye("invalid",e);var y=c=p=r=null,w=null,R=null;for(a in n)if(n.hasOwnProperty(a)){var _=n[a];if(_!=null)switch(a){case"name":r=_;break;case"type":p=_;break;case"checked":w=_;break;case"defaultChecked":R=_;break;case"value":c=_;break;case"defaultValue":y=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,t));break;default:Oe(e,t,a,_,n,null)}}Yu(e,c,y,w,R,p,r,!1);return;case"select":ye("invalid",e),a=p=c=null;for(r in n)if(n.hasOwnProperty(r)&&(y=n[r],y!=null))switch(r){case"value":c=y;break;case"defaultValue":p=y;break;case"multiple":a=y;default:Oe(e,t,r,y,n,null)}t=c,n=p,e.multiple=!!a,t!=null?Ka(e,!!a,t,!1):n!=null&&Ka(e,!!a,n,!0);return;case"textarea":ye("invalid",e),c=r=a=null;for(p in n)if(n.hasOwnProperty(p)&&(y=n[p],y!=null))switch(p){case"value":a=y;break;case"defaultValue":r=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(91));break;default:Oe(e,t,p,y,n,null)}Xu(e,a,r,c);return;case"option":for(w in n)if(n.hasOwnProperty(w)&&(a=n[w],a!=null))switch(w){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Oe(e,t,w,a,n,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(a=0;a<bi.length;a++)ye(bi[a],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(a=n[R],a!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Oe(e,t,R,a,n,null)}return;default:if(Ho(t)){for(_ in n)n.hasOwnProperty(_)&&(a=n[_],a!==void 0&&Ec(e,t,_,a,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(a=n[y],a!=null&&Oe(e,t,y,a,n,null))}function Tg(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,p=null,y=null,w=null,R=null,_=null;for(z in n){var H=n[z];if(n.hasOwnProperty(z)&&H!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":w=H;default:a.hasOwnProperty(z)||Oe(e,t,z,null,a,H)}}for(var O in a){var z=a[O];if(H=n[O],a.hasOwnProperty(O)&&(z!=null||H!=null))switch(O){case"type":c=z;break;case"name":r=z;break;case"checked":R=z;break;case"defaultChecked":_=z;break;case"value":p=z;break;case"defaultValue":y=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:z!==H&&Oe(e,t,O,z,a,H)}}_o(e,p,y,w,R,_,c,r);return;case"select":z=p=y=O=null;for(c in n)if(w=n[c],n.hasOwnProperty(c)&&w!=null)switch(c){case"value":break;case"multiple":z=w;default:a.hasOwnProperty(c)||Oe(e,t,c,null,a,w)}for(r in a)if(c=a[r],w=n[r],a.hasOwnProperty(r)&&(c!=null||w!=null))switch(r){case"value":O=c;break;case"defaultValue":y=c;break;case"multiple":p=c;default:c!==w&&Oe(e,t,r,c,a,w)}t=y,n=p,a=z,O!=null?Ka(e,!!n,O,!1):!!a!=!!n&&(t!=null?Ka(e,!!n,t,!0):Ka(e,!!n,n?[]:"",!1));return;case"textarea":z=O=null;for(y in n)if(r=n[y],n.hasOwnProperty(y)&&r!=null&&!a.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Oe(e,t,y,null,a,r)}for(p in a)if(r=a[p],c=n[p],a.hasOwnProperty(p)&&(r!=null||c!=null))switch(p){case"value":O=r;break;case"defaultValue":z=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==c&&Oe(e,t,p,r,a,c)}Gu(e,O,z);return;case"option":for(var ee in n)if(O=n[ee],n.hasOwnProperty(ee)&&O!=null&&!a.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Oe(e,t,ee,null,a,O)}for(w in a)if(O=a[w],z=n[w],a.hasOwnProperty(w)&&O!==z&&(O!=null||z!=null))switch(w){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:Oe(e,t,w,O,a,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)O=n[oe],n.hasOwnProperty(oe)&&O!=null&&!a.hasOwnProperty(oe)&&Oe(e,t,oe,null,a,O);for(R in a)if(O=a[R],z=n[R],a.hasOwnProperty(R)&&O!==z&&(O!=null||z!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:Oe(e,t,R,O,a,z)}return;default:if(Ho(t)){for(var ze in n)O=n[ze],n.hasOwnProperty(ze)&&O!==void 0&&!a.hasOwnProperty(ze)&&Ec(e,t,ze,void 0,a,O);for(_ in a)O=a[_],z=n[_],!a.hasOwnProperty(_)||O===z||O===void 0&&z===void 0||Ec(e,t,_,O,a,z);return}}for(var N in n)O=n[N],n.hasOwnProperty(N)&&O!=null&&!a.hasOwnProperty(N)&&Oe(e,t,N,null,a,O);for(H in a)O=a[H],z=n[H],!a.hasOwnProperty(H)||O===z||O==null&&z==null||Oe(e,t,H,O,a,z)}function Ff(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],c=r.transferSize,p=r.initiatorType,y=r.duration;if(c&&y&&Ff(p)){for(p=0,y=r.responseEnd,a+=1;a<n.length;a++){var w=n[a],R=w.startTime;if(R>y)break;var _=w.transferSize,H=w.initiatorType;_&&Ff(H)&&(w=w.responseEnd,p+=_*(w<y?1:(y-R)/(w-R)))}if(--a,t+=8*(c+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ac=null,Nc=null;function $s(e){return e.nodeType===9?e:e.ownerDocument}function Jf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kc=null;function Dg(){var e=window.event;return e&&e.type==="popstate"?e===kc?!1:(kc=e,!0):(kc=null,!1)}var Wf=typeof setTimeout=="function"?setTimeout:void 0,Mg=typeof clearTimeout=="function"?clearTimeout:void 0,e1=typeof Promise=="function"?Promise:void 0,Rg=typeof queueMicrotask=="function"?queueMicrotask:typeof e1<"u"?function(e){return e1.resolve(null).then(e).catch(jg)}:Wf;function jg(e){setTimeout(function(){throw e})}function ua(e){return e==="head"}function t1(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),Tl(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")yi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,yi(n);for(var c=n.firstChild;c;){var p=c.nextSibling,y=c.nodeName;c[Ul]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=p}}else n==="body"&&yi(e.ownerDocument.body);n=r}while(n);Tl(t)}function n1(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Dc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Dc(n),zo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Og(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ul])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=tn(e.nextSibling),e===null)break}return null}function zg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=tn(e.nextSibling),e===null))return null;return e}function a1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=tn(e.nextSibling),e===null))return null;return e}function Mc(e){return e.data==="$?"||e.data==="$~"}function Rc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Lg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var jc=null;function l1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return tn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function i1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function s1(e,t,n){switch(t=$s(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function yi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zo(e)}var nn=new Map,o1=new Set;function Ks(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vn=V.d;V.d={f:_g,r:Ug,D:Hg,C:Zg,L:Bg,m:qg,X:Ig,S:Vg,M:Yg};function _g(){var e=Vn.f(),t=Bs();return e||t}function Ug(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?C0(t):Vn.r(e)}var El=typeof document>"u"?null:document;function r1(e,t,n){var a=El;if(a&&typeof t=="string"&&t){var r=$t(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),o1.has(r)||(o1.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),dt(t,"link",e),lt(t),a.head.appendChild(t)))}}function Hg(e){Vn.D(e),r1("dns-prefetch",e,null)}function Zg(e,t){Vn.C(e,t),r1("preconnect",e,t)}function Bg(e,t,n){Vn.L(e,t,n);var a=El;if(a&&e&&t){var r='link[rel="preload"][as="'+$t(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+$t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+$t(n.imageSizes)+'"]')):r+='[href="'+$t(e)+'"]';var c=r;switch(t){case"style":c=Al(e);break;case"script":c=Nl(e)}nn.has(c)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),nn.set(c,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(xi(c))||t==="script"&&a.querySelector(Si(c))||(t=a.createElement("link"),dt(t,"link",e),lt(t),a.head.appendChild(t)))}}function qg(e,t){Vn.m(e,t);var n=El;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+$t(a)+'"][href="'+$t(e)+'"]',c=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Nl(e)}if(!nn.has(c)&&(e=S({rel:"modulepreload",href:e},t),nn.set(c,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Si(c)))return}a=n.createElement("link"),dt(a,"link",e),lt(a),n.head.appendChild(a)}}}function Vg(e,t,n){Vn.S(e,t,n);var a=El;if(a&&e){var r=Qa(a).hoistableStyles,c=Al(e);t=t||"default";var p=r.get(c);if(!p){var y={loading:0,preload:null};if(p=a.querySelector(xi(c)))y.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=nn.get(c))&&Oc(e,n);var w=p=a.createElement("link");lt(w),dt(w,"link",e),w._p=new Promise(function(R,_){w.onload=R,w.onerror=_}),w.addEventListener("load",function(){y.loading|=1}),w.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Fs(p,t,a)}p={type:"stylesheet",instance:p,count:1,state:y},r.set(c,p)}}}function Ig(e,t){Vn.X(e,t);var n=El;if(n&&e){var a=Qa(n).hoistableScripts,r=Nl(e),c=a.get(r);c||(c=n.querySelector(Si(r)),c||(e=S({src:e,async:!0},t),(t=nn.get(r))&&zc(e,t),c=n.createElement("script"),lt(c),dt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(r,c))}}function Yg(e,t){Vn.M(e,t);var n=El;if(n&&e){var a=Qa(n).hoistableScripts,r=Nl(e),c=a.get(r);c||(c=n.querySelector(Si(r)),c||(e=S({src:e,async:!0,type:"module"},t),(t=nn.get(r))&&zc(e,t),c=n.createElement("script"),lt(c),dt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(r,c))}}function c1(e,t,n,a){var r=(r=Q.current)?Ks(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Al(n.href),n=Qa(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Al(n.href);var c=Qa(r).hoistableStyles,p=c.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=r.querySelector(xi(e)))&&!c._p&&(p.instance=c,p.state.loading=5),nn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},nn.set(e,n),c||Gg(r,e,n,p.state))),t&&a===null)throw Error(o(528,""));return p}if(t&&a!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Nl(n),n=Qa(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Al(e){return'href="'+$t(e)+'"'}function xi(e){return'link[rel="stylesheet"]['+e+"]"}function u1(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Gg(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),dt(t,"link",n),lt(t),e.head.appendChild(t))}function Nl(e){return'[src="'+$t(e)+'"]'}function Si(e){return"script[async]"+e}function d1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+$t(n.href)+'"]');if(a)return t.instance=a,lt(a),a;var r=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),lt(a),dt(a,"style",r),Fs(a,n.precedence,e),t.instance=a;case"stylesheet":r=Al(n.href);var c=e.querySelector(xi(r));if(c)return t.state.loading|=4,t.instance=c,lt(c),c;a=u1(n),(r=nn.get(r))&&Oc(a,r),c=(e.ownerDocument||e).createElement("link"),lt(c);var p=c;return p._p=new Promise(function(y,w){p.onload=y,p.onerror=w}),dt(c,"link",a),t.state.loading|=4,Fs(c,n.precedence,e),t.instance=c;case"script":return c=Nl(n.src),(r=e.querySelector(Si(c)))?(t.instance=r,lt(r),r):(a=n,(r=nn.get(c))&&(a=S({},n),zc(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),lt(r),dt(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Fs(a,n.precedence,e));return t.instance}function Fs(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,c=r,p=0;p<a.length;p++){var y=a[p];if(y.dataset.precedence===t)c=y;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Js=null;function f1(e,t,n){if(Js===null){var a=new Map,r=Js=new Map;r.set(n,a)}else r=Js,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var c=n[r];if(!(c[Ul]||c[ot]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(t)||"";p=e+p;var y=a.get(p);y?y.push(c):a.set(p,[c])}}return a}function p1(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Xg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function h1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qg(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Al(a.href),c=t.querySelector(xi(r));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ps.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,lt(c);return}c=t.ownerDocument||t,a=u1(a),(r=nn.get(r))&&Oc(a,r),c=c.createElement("link"),lt(c);var p=c;p._p=new Promise(function(y,w){p.onload=y,p.onerror=w}),dt(c,"link",a),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ps.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Lc=0;function $g(e,t){return e.stylesheets&&e.count===0&&eo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&eo(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Lc===0&&(Lc=62500*kg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&eo(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Lc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function Ps(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)eo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ws=null;function eo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ws=new Map,t.forEach(Kg,e),Ws=null,Ps.call(e))}function Kg(e,t){if(!(t.state.loading&4)){var n=Ws.get(e);if(n)var a=n.get(null);else{n=new Map,Ws.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var p=r[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),a=p)}a&&n.set(null,a)}r=t.instance,p=r.getAttribute("data-precedence"),c=n.get(p)||a,c===a&&n.set(null,r),n.set(p,r),this.count++,a=Ps.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var wi={$$typeof:$,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Fg(e,t,n,a,r,c,p,y,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function m1(e,t,n,a,r,c,p,y,w,R,_,H){return e=new Fg(e,t,n,p,w,R,_,H,y),t=1,c===!0&&(t|=24),c=zt(3,null,null,t),e.current=c,c.stateNode=e,t=hr(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:a,isDehydrated:n,cache:t},vr(c),e}function g1(e){return e?(e=al,e):al}function b1(e,t,n,a,r,c){r=g1(r),a.context===null?a.context=r:a.pendingContext=r,a=Wn(t),a.payload={element:n},c=c===void 0?null:c,c!==null&&(a.callback=c),n=ea(e,a,t),n!==null&&(Rt(n,e,t),ei(n,e,t))}function v1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _c(e,t){v1(e,t),(e=e.alternate)&&v1(e,t)}function y1(e){if(e.tag===13||e.tag===31){var t=Na(e,67108864);t!==null&&Rt(t,e,67108864),_c(e,67108864)}}function x1(e){if(e.tag===13||e.tag===31){var t=Zt();t=Cn(t);var n=Na(e,t);n!==null&&Rt(n,e,t),_c(e,t)}}var to=!0;function Jg(e,t,n,a){var r=j.T;j.T=null;var c=V.p;try{V.p=2,Uc(e,t,n,a)}finally{V.p=c,j.T=r}}function Pg(e,t,n,a){var r=j.T;j.T=null;var c=V.p;try{V.p=8,Uc(e,t,n,a)}finally{V.p=c,j.T=r}}function Uc(e,t,n,a){if(to){var r=Hc(a);if(r===null)Cc(e,t,a,no,n),w1(e,a);else if(e2(r,e,t,n,a))a.stopPropagation();else if(w1(e,a),t&4&&-1<Wg.indexOf(e)){for(;r!==null;){var c=Xa(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=Xe(c.pendingLanes);if(p!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;p;){var w=1<<31-pt(p);y.entanglements[1]|=w,p&=~w}yn(c),(Ne&6)===0&&(Hs=ft()+500,gi(0))}}break;case 31:case 13:y=Na(c,2),y!==null&&Rt(y,c,2),Bs(),_c(c,2)}if(c=Hc(a),c===null&&Cc(e,t,a,no,n),c===r)break;r=c}r!==null&&a.stopPropagation()}else Cc(e,t,a,null,n)}}function Hc(e){return e=Bo(e),Zc(e)}var no=null;function Zc(e){if(no=null,e=Ga(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return no=e,null}function S1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mo()){case Qi:return 2;case wn:return 8;case ln:case xa:return 32;case _l:return 268435456;default:return 32}default:return 32}}var Bc=!1,da=null,fa=null,pa=null,Ci=new Map,Ei=new Map,ha=[],Wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w1(e,t){switch(e){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":fa=null;break;case"mouseover":case"mouseout":pa=null;break;case"pointerover":case"pointerout":Ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Ai(e,t,n,a,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:c,targetContainers:[r]},t!==null&&(t=Xa(t),t!==null&&y1(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function e2(e,t,n,a,r){switch(t){case"focusin":return da=Ai(da,e,t,n,a,r),!0;case"dragenter":return fa=Ai(fa,e,t,n,a,r),!0;case"mouseover":return pa=Ai(pa,e,t,n,a,r),!0;case"pointerover":var c=r.pointerId;return Ci.set(c,Ai(Ci.get(c)||null,e,t,n,a,r)),!0;case"gotpointercapture":return c=r.pointerId,Ei.set(c,Ai(Ei.get(c)||null,e,t,n,a,r)),!0}return!1}function C1(e){var t=Ga(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,Xn(e.priority,function(){x1(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,Xn(e.priority,function(){x1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Zo=a,n.target.dispatchEvent(a),Zo=null}else return t=Xa(n),t!==null&&y1(t),e.blockedOn=n,!1;t.shift()}return!0}function E1(e,t,n){ao(e)&&n.delete(t)}function t2(){Bc=!1,da!==null&&ao(da)&&(da=null),fa!==null&&ao(fa)&&(fa=null),pa!==null&&ao(pa)&&(pa=null),Ci.forEach(E1),Ei.forEach(E1)}function lo(e,t){e.blockedOn===t&&(e.blockedOn=null,Bc||(Bc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,t2)))}var io=null;function A1(e){io!==e&&(io=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){io===e&&(io=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(Zc(a||n)===null)continue;break}var c=Xa(n);c!==null&&(e.splice(t,3),t-=3,Hr(c,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function Tl(e){function t(w){return lo(w,e)}da!==null&&lo(da,e),fa!==null&&lo(fa,e),pa!==null&&lo(pa,e),Ci.forEach(t),Ei.forEach(t);for(var n=0;n<ha.length;n++){var a=ha[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ha.length&&(n=ha[0],n.blockedOn===null);)C1(n),n.blockedOn===null&&ha.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],c=n[a+1],p=r[At]||null;if(typeof c=="function")p||A1(n);else if(p){var y=null;if(c&&c.hasAttribute("formAction")){if(r=c,p=c[At]||null)y=p.formAction;else if(Zc(r)!==null)continue}else y=p.action;typeof y=="function"?n[a+1]=y:(n.splice(a,3),a-=3),A1(n)}}}function N1(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function qc(e){this._internalRoot=e}so.prototype.render=qc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,a=Zt();b1(n,a,e,t,null,null)},so.prototype.unmount=qc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;b1(e.current,2,null,e,null,null),Bs(),t[Ya]=null}};function so(e){this._internalRoot=e}so.prototype.unstable_scheduleHydration=function(e){if(e){var t=on();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ha.length&&t!==0&&t<ha[n].priority;n++);ha.splice(n,0,e),n===0&&C1(e)}};var T1=l.version;if(T1!=="19.2.6")throw Error(o(527,T1,"19.2.6"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=v(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var n2={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{Sa=oo.inject(n2),gt=oo}catch{}}return ki.createRoot=function(e,t){if(!u(e))throw Error(o(299));var n=!1,a="",r=O0,c=z0,p=L0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=m1(e,1,!1,null,null,n,a,null,r,c,p,N1),e[Ya]=t.current,wc(e),new qc(t)},ki.hydrateRoot=function(e,t,n){if(!u(e))throw Error(o(299));var a=!1,r="",c=O0,p=z0,y=L0,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=m1(e,1,!0,t,n??null,a,r,w,c,p,y,N1),t.context=g1(null),n=t.current,a=Zt(),a=Cn(a),r=Wn(a),r.callback=null,ea(n,r,a),n=a,t.current.lanes=n,Yt(t,n),yn(t),e[Ya]=t.current,wc(e),new so(t)},ki.version="19.2.6",ki}var Z1;function m2(){if(Z1)return Yc.exports;Z1=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),Yc.exports=h2(),Yc.exports}var g2=m2();function mu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ba=mu();function Sp(s){Ba=s}const wp=/[&<>"']/,b2=new RegExp(wp.source,"g"),Cp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,v2=new RegExp(Cp.source,"g"),y2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},B1=s=>y2[s];function Bt(s,l){if(l){if(wp.test(s))return s.replace(b2,B1)}else if(Cp.test(s))return s.replace(v2,B1);return s}const x2=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function S2(s){return s.replace(x2,(l,i)=>(i=i.toLowerCase(),i==="colon"?":":i.charAt(0)==="#"?i.charAt(1)==="x"?String.fromCharCode(parseInt(i.substring(2),16)):String.fromCharCode(+i.substring(1)):""))}const w2=/(^|[^\[])\^/g;function Le(s,l){let i=typeof s=="string"?s:s.source;l=l||"";const o={replace:(u,d)=>{let f=typeof d=="string"?d:d.source;return f=f.replace(w2,"$1"),i=i.replace(u,f),o},getRegex:()=>new RegExp(i,l)};return o}function q1(s){try{s=encodeURI(s).replace(/%25/g,"%")}catch{return null}return s}const ji={exec:()=>null};function V1(s,l){const i=s.replace(/\|/g,(d,f,m)=>{let g=!1,v=f;for(;--v>=0&&m[v]==="\\";)g=!g;return g?"|":" |"}),o=i.split(/ \|/);let u=0;if(o[0].trim()||o.shift(),o.length>0&&!o[o.length-1].trim()&&o.pop(),l)if(o.length>l)o.splice(l);else for(;o.length<l;)o.push("");for(;u<o.length;u++)o[u]=o[u].trim().replace(/\\\|/g,"|");return o}function Di(s,l,i){const o=s.length;if(o===0)return"";let u=0;for(;u<o&&s.charAt(o-u-1)===l;)u++;return s.slice(0,o-u)}function C2(s,l){if(s.indexOf(l[1])===-1)return-1;let i=0;for(let o=0;o<s.length;o++)if(s[o]==="\\")o++;else if(s[o]===l[0])i++;else if(s[o]===l[1]&&(i--,i<0))return o;return-1}function I1(s,l,i,o){const u=l.href,d=l.title?Bt(l.title):null,f=s[1].replace(/\\([\[\]])/g,"$1");if(s[0].charAt(0)!=="!"){o.state.inLink=!0;const m={type:"link",raw:i,href:u,title:d,text:f,tokens:o.inlineTokens(f)};return o.state.inLink=!1,m}return{type:"image",raw:i,href:u,title:d,text:Bt(f)}}function E2(s,l){const i=s.match(/^(\s+)(?:```)/);if(i===null)return l;const o=i[1];return l.split(`
`).map(u=>{const d=u.match(/^\s+/);if(d===null)return u;const[f]=d;return f.length>=o.length?u.slice(o.length):u}).join(`
`)}class ho{constructor(l){Ue(this,"options");Ue(this,"rules");Ue(this,"lexer");this.options=l||Ba}space(l){const i=this.rules.block.newline.exec(l);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(l){const i=this.rules.block.code.exec(l);if(i){const o=i[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?o:Di(o,`
`)}}}fences(l){const i=this.rules.block.fences.exec(l);if(i){const o=i[0],u=E2(o,i[3]||"");return{type:"code",raw:o,lang:i[2]?i[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):i[2],text:u}}}heading(l){const i=this.rules.block.heading.exec(l);if(i){let o=i[2].trim();if(/#$/.test(o)){const u=Di(o,"#");(this.options.pedantic||!u||/ $/.test(u))&&(o=u.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:o,tokens:this.lexer.inline(o)}}}hr(l){const i=this.rules.block.hr.exec(l);if(i)return{type:"hr",raw:Di(i[0],`
`)}}blockquote(l){const i=this.rules.block.blockquote.exec(l);if(i){let o=Di(i[0],`
`).split(`
`),u="",d="";const f=[];for(;o.length>0;){let m=!1;const g=[];let v;for(v=0;v<o.length;v++)if(/^ {0,3}>/.test(o[v]))g.push(o[v]),m=!0;else if(!m)g.push(o[v]);else break;o=o.slice(v);const x=g.join(`
`),S=x.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");u=u?`${u}
${x}`:x,d=d?`${d}
${S}`:S;const T=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(S,f,!0),this.lexer.state.top=T,o.length===0)break;const A=f[f.length-1];if((A==null?void 0:A.type)==="code")break;if((A==null?void 0:A.type)==="blockquote"){const k=A,M=k.raw+`
`+o.join(`
`),B=this.blockquote(M);f[f.length-1]=B,u=u.substring(0,u.length-k.raw.length)+B.raw,d=d.substring(0,d.length-k.text.length)+B.text;break}else if((A==null?void 0:A.type)==="list"){const k=A,M=k.raw+`
`+o.join(`
`),B=this.list(M);f[f.length-1]=B,u=u.substring(0,u.length-A.raw.length)+B.raw,d=d.substring(0,d.length-k.raw.length)+B.raw,o=M.substring(f[f.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:u,tokens:f,text:d}}}list(l){let i=this.rules.block.list.exec(l);if(i){let o=i[1].trim();const u=o.length>1,d={type:"list",raw:"",ordered:u,start:u?+o.slice(0,-1):"",loose:!1,items:[]};o=u?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=u?o:"[*+-]");const f=new RegExp(`^( {0,3}${o})((?:[	 ][^\\n]*)?(?:\\n|$))`);let m=!1;for(;l;){let g=!1,v="",x="";if(!(i=f.exec(l))||this.rules.block.hr.test(l))break;v=i[0],l=l.substring(v.length);let S=i[2].split(`
`,1)[0].replace(/^\t+/,Z=>" ".repeat(3*Z.length)),T=l.split(`
`,1)[0],A=!S.trim(),k=0;if(this.options.pedantic?(k=2,x=S.trimStart()):A?k=i[1].length+1:(k=i[2].search(/[^ ]/),k=k>4?1:k,x=S.slice(k),k+=i[1].length),A&&/^ *$/.test(T)&&(v+=T+`
`,l=l.substring(T.length+1),g=!0),!g){const Z=new RegExp(`^ {0,${Math.min(3,k-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),G=new RegExp(`^ {0,${Math.min(3,k-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),$=new RegExp(`^ {0,${Math.min(3,k-1)}}(?:\`\`\`|~~~)`),X=new RegExp(`^ {0,${Math.min(3,k-1)}}#`);for(;l;){const I=l.split(`
`,1)[0];if(T=I,this.options.pedantic&&(T=T.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),$.test(T)||X.test(T)||Z.test(T)||G.test(l))break;if(T.search(/[^ ]/)>=k||!T.trim())x+=`
`+T.slice(k);else{if(A||S.search(/[^ ]/)>=4||$.test(S)||X.test(S)||G.test(S))break;x+=`
`+T}!A&&!T.trim()&&(A=!0),v+=I+`
`,l=l.substring(I.length+1),S=T.slice(k)}}d.loose||(m?d.loose=!0:/\n *\n *$/.test(v)&&(m=!0));let M=null,B;this.options.gfm&&(M=/^\[[ xX]\] /.exec(x),M&&(B=M[0]!=="[ ] ",x=x.replace(/^\[[ xX]\] +/,""))),d.items.push({type:"list_item",raw:v,task:!!M,checked:B,loose:!1,text:x,tokens:[]}),d.raw+=v}d.items[d.items.length-1].raw=d.items[d.items.length-1].raw.trimEnd(),d.items[d.items.length-1].text=d.items[d.items.length-1].text.trimEnd(),d.raw=d.raw.trimEnd();for(let g=0;g<d.items.length;g++)if(this.lexer.state.top=!1,d.items[g].tokens=this.lexer.blockTokens(d.items[g].text,[]),!d.loose){const v=d.items[g].tokens.filter(S=>S.type==="space"),x=v.length>0&&v.some(S=>/\n.*\n/.test(S.raw));d.loose=x}if(d.loose)for(let g=0;g<d.items.length;g++)d.items[g].loose=!0;return d}}html(l){const i=this.rules.block.html.exec(l);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(l){const i=this.rules.block.def.exec(l);if(i){const o=i[1].toLowerCase().replace(/\s+/g," "),u=i[2]?i[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",d=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):i[3];return{type:"def",tag:o,raw:i[0],href:u,title:d}}}table(l){const i=this.rules.block.table.exec(l);if(!i||!/[:|]/.test(i[2]))return;const o=V1(i[1]),u=i[2].replace(/^\||\| *$/g,"").split("|"),d=i[3]&&i[3].trim()?i[3].replace(/\n[ \t]*$/,"").split(`
`):[],f={type:"table",raw:i[0],header:[],align:[],rows:[]};if(o.length===u.length){for(const m of u)/^ *-+: *$/.test(m)?f.align.push("right"):/^ *:-+: *$/.test(m)?f.align.push("center"):/^ *:-+ *$/.test(m)?f.align.push("left"):f.align.push(null);for(let m=0;m<o.length;m++)f.header.push({text:o[m],tokens:this.lexer.inline(o[m]),header:!0,align:f.align[m]});for(const m of d)f.rows.push(V1(m,f.header.length).map((g,v)=>({text:g,tokens:this.lexer.inline(g),header:!1,align:f.align[v]})));return f}}lheading(l){const i=this.rules.block.lheading.exec(l);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(l){const i=this.rules.block.paragraph.exec(l);if(i){const o=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:o,tokens:this.lexer.inline(o)}}}text(l){const i=this.rules.block.text.exec(l);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(l){const i=this.rules.inline.escape.exec(l);if(i)return{type:"escape",raw:i[0],text:Bt(i[1])}}tag(l){const i=this.rules.inline.tag.exec(l);if(i)return!this.lexer.state.inLink&&/^<a /i.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(l){const i=this.rules.inline.link.exec(l);if(i){const o=i[2].trim();if(!this.options.pedantic&&/^</.test(o)){if(!/>$/.test(o))return;const f=Di(o.slice(0,-1),"\\");if((o.length-f.length)%2===0)return}else{const f=C2(i[2],"()");if(f>-1){const g=(i[0].indexOf("!")===0?5:4)+i[1].length+f;i[2]=i[2].substring(0,f),i[0]=i[0].substring(0,g).trim(),i[3]=""}}let u=i[2],d="";if(this.options.pedantic){const f=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u);f&&(u=f[1],d=f[3])}else d=i[3]?i[3].slice(1,-1):"";return u=u.trim(),/^</.test(u)&&(this.options.pedantic&&!/>$/.test(o)?u=u.slice(1):u=u.slice(1,-1)),I1(i,{href:u&&u.replace(this.rules.inline.anyPunctuation,"$1"),title:d&&d.replace(this.rules.inline.anyPunctuation,"$1")},i[0],this.lexer)}}reflink(l,i){let o;if((o=this.rules.inline.reflink.exec(l))||(o=this.rules.inline.nolink.exec(l))){const u=(o[2]||o[1]).replace(/\s+/g," "),d=i[u.toLowerCase()];if(!d){const f=o[0].charAt(0);return{type:"text",raw:f,text:f}}return I1(o,d,o[0],this.lexer)}}emStrong(l,i,o=""){let u=this.rules.inline.emStrongLDelim.exec(l);if(!u||u[3]&&o.match(/[\p{L}\p{N}]/u))return;if(!(u[1]||u[2]||"")||!o||this.rules.inline.punctuation.exec(o)){const f=[...u[0]].length-1;let m,g,v=f,x=0;const S=u[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(S.lastIndex=0,i=i.slice(-1*l.length+f);(u=S.exec(i))!=null;){if(m=u[1]||u[2]||u[3]||u[4]||u[5]||u[6],!m)continue;if(g=[...m].length,u[3]||u[4]){v+=g;continue}else if((u[5]||u[6])&&f%3&&!((f+g)%3)){x+=g;continue}if(v-=g,v>0)continue;g=Math.min(g,g+v+x);const T=[...u[0]][0].length,A=l.slice(0,f+u.index+T+g);if(Math.min(f,g)%2){const M=A.slice(1,-1);return{type:"em",raw:A,text:M,tokens:this.lexer.inlineTokens(M)}}const k=A.slice(2,-2);return{type:"strong",raw:A,text:k,tokens:this.lexer.inlineTokens(k)}}}}codespan(l){const i=this.rules.inline.code.exec(l);if(i){let o=i[2].replace(/\n/g," ");const u=/[^ ]/.test(o),d=/^ /.test(o)&&/ $/.test(o);return u&&d&&(o=o.substring(1,o.length-1)),o=Bt(o,!0),{type:"codespan",raw:i[0],text:o}}}br(l){const i=this.rules.inline.br.exec(l);if(i)return{type:"br",raw:i[0]}}del(l){const i=this.rules.inline.del.exec(l);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}}autolink(l){const i=this.rules.inline.autolink.exec(l);if(i){let o,u;return i[2]==="@"?(o=Bt(i[1]),u="mailto:"+o):(o=Bt(i[1]),u=o),{type:"link",raw:i[0],text:o,href:u,tokens:[{type:"text",raw:o,text:o}]}}}url(l){var o;let i;if(i=this.rules.inline.url.exec(l)){let u,d;if(i[2]==="@")u=Bt(i[0]),d="mailto:"+u;else{let f;do f=i[0],i[0]=((o=this.rules.inline._backpedal.exec(i[0]))==null?void 0:o[0])??"";while(f!==i[0]);u=Bt(i[0]),i[1]==="www."?d="http://"+i[0]:d=i[0]}return{type:"link",raw:i[0],text:u,href:d,tokens:[{type:"text",raw:u,text:u}]}}}inlineText(l){const i=this.rules.inline.text.exec(l);if(i){let o;return this.lexer.state.inRawBlock?o=i[0]:o=Bt(i[0]),{type:"text",raw:i[0],text:o}}}}const A2=/^(?: *(?:\n|$))+/,N2=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,T2=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Zi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,k2=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ep=/(?:[*+-]|\d{1,9}[.)])/,Ap=Le(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Ep).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),gu=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,D2=/^[^\n]+/,bu=/(?!\s*\])(?:\\.|[^\[\]\\])+/,M2=Le(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",bu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),R2=Le(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ep).getRegex(),Co="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",vu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,j2=Le("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",vu).replace("tag",Co).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Np=Le(gu).replace("hr",Zi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Co).getRegex(),O2=Le(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Np).getRegex(),yu={blockquote:O2,code:N2,def:M2,fences:T2,heading:k2,hr:Zi,html:j2,lheading:Ap,list:R2,newline:A2,paragraph:Np,table:ji,text:D2},Y1=Le("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Zi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Co).getRegex(),z2={...yu,table:Y1,paragraph:Le(gu).replace("hr",Zi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Y1).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Co).getRegex()},L2={...yu,html:Le(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",vu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ji,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Le(gu).replace("hr",Zi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ap).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Tp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,_2=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,kp=/^( {2,}|\\)\n(?!\s*$)/,U2=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Bi="\\p{P}\\p{S}",H2=Le(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Bi).getRegex(),Z2=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,B2=Le(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Bi).getRegex(),q2=Le("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Bi).getRegex(),V2=Le("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Bi).getRegex(),I2=Le(/\\([punct])/,"gu").replace(/punct/g,Bi).getRegex(),Y2=Le(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),G2=Le(vu).replace("(?:-->|$)","-->").getRegex(),X2=Le("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",G2).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),mo=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Q2=Le(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",mo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Dp=Le(/^!?\[(label)\]\[(ref)\]/).replace("label",mo).replace("ref",bu).getRegex(),Mp=Le(/^!?\[(ref)\](?:\[\])?/).replace("ref",bu).getRegex(),$2=Le("reflink|nolink(?!\\()","g").replace("reflink",Dp).replace("nolink",Mp).getRegex(),xu={_backpedal:ji,anyPunctuation:I2,autolink:Y2,blockSkip:Z2,br:kp,code:_2,del:ji,emStrongLDelim:B2,emStrongRDelimAst:q2,emStrongRDelimUnd:V2,escape:Tp,link:Q2,nolink:Mp,punctuation:H2,reflink:Dp,reflinkSearch:$2,tag:X2,text:U2,url:ji},K2={...xu,link:Le(/^!?\[(label)\]\((.*?)\)/).replace("label",mo).getRegex(),reflink:Le(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",mo).getRegex()},lu={...xu,escape:Le(Tp).replace("])","~|])").getRegex(),url:Le(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},F2={...lu,br:Le(kp).replace("{2,}","*").getRegex(),text:Le(lu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ro={normal:yu,gfm:z2,pedantic:L2},Mi={normal:xu,gfm:lu,breaks:F2,pedantic:K2};class xn{constructor(l){Ue(this,"tokens");Ue(this,"options");Ue(this,"state");Ue(this,"tokenizer");Ue(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=l||Ba,this.options.tokenizer=this.options.tokenizer||new ho,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const i={block:ro.normal,inline:Mi.normal};this.options.pedantic?(i.block=ro.pedantic,i.inline=Mi.pedantic):this.options.gfm&&(i.block=ro.gfm,this.options.breaks?i.inline=Mi.breaks:i.inline=Mi.gfm),this.tokenizer.rules=i}static get rules(){return{block:ro,inline:Mi}}static lex(l,i){return new xn(i).lex(l)}static lexInline(l,i){return new xn(i).inlineTokens(l)}lex(l){l=l.replace(/\r\n|\r/g,`
`),this.blockTokens(l,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){const o=this.inlineQueue[i];this.inlineTokens(o.src,o.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(l,i=[],o=!1){this.options.pedantic?l=l.replace(/\t/g,"    ").replace(/^ +$/gm,""):l=l.replace(/^( *)(\t+)/gm,(m,g,v)=>g+"    ".repeat(v.length));let u,d,f;for(;l;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(m=>(u=m.call({lexer:this},l,i))?(l=l.substring(u.raw.length),i.push(u),!0):!1))){if(u=this.tokenizer.space(l)){l=l.substring(u.raw.length),u.raw.length===1&&i.length>0?i[i.length-1].raw+=`
`:i.push(u);continue}if(u=this.tokenizer.code(l)){l=l.substring(u.raw.length),d=i[i.length-1],d&&(d.type==="paragraph"||d.type==="text")?(d.raw+=`
`+u.raw,d.text+=`
`+u.text,this.inlineQueue[this.inlineQueue.length-1].src=d.text):i.push(u);continue}if(u=this.tokenizer.fences(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.heading(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.hr(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.blockquote(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.list(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.html(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.def(l)){l=l.substring(u.raw.length),d=i[i.length-1],d&&(d.type==="paragraph"||d.type==="text")?(d.raw+=`
`+u.raw,d.text+=`
`+u.raw,this.inlineQueue[this.inlineQueue.length-1].src=d.text):this.tokens.links[u.tag]||(this.tokens.links[u.tag]={href:u.href,title:u.title});continue}if(u=this.tokenizer.table(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.lheading(l)){l=l.substring(u.raw.length),i.push(u);continue}if(f=l,this.options.extensions&&this.options.extensions.startBlock){let m=1/0;const g=l.slice(1);let v;this.options.extensions.startBlock.forEach(x=>{v=x.call({lexer:this},g),typeof v=="number"&&v>=0&&(m=Math.min(m,v))}),m<1/0&&m>=0&&(f=l.substring(0,m+1))}if(this.state.top&&(u=this.tokenizer.paragraph(f))){d=i[i.length-1],o&&(d==null?void 0:d.type)==="paragraph"?(d.raw+=`
`+u.raw,d.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):i.push(u),o=f.length!==l.length,l=l.substring(u.raw.length);continue}if(u=this.tokenizer.text(l)){l=l.substring(u.raw.length),d=i[i.length-1],d&&d.type==="text"?(d.raw+=`
`+u.raw,d.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):i.push(u);continue}if(l){const m="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return this.state.top=!0,i}inline(l,i=[]){return this.inlineQueue.push({src:l,tokens:i}),i}inlineTokens(l,i=[]){let o,u,d,f=l,m,g,v;if(this.tokens.links){const x=Object.keys(this.tokens.links);if(x.length>0)for(;(m=this.tokenizer.rules.inline.reflinkSearch.exec(f))!=null;)x.includes(m[0].slice(m[0].lastIndexOf("[")+1,-1))&&(f=f.slice(0,m.index)+"["+"a".repeat(m[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(m=this.tokenizer.rules.inline.blockSkip.exec(f))!=null;)f=f.slice(0,m.index)+"["+"a".repeat(m[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(m=this.tokenizer.rules.inline.anyPunctuation.exec(f))!=null;)f=f.slice(0,m.index)+"++"+f.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;l;)if(g||(v=""),g=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(x=>(o=x.call({lexer:this},l,i))?(l=l.substring(o.raw.length),i.push(o),!0):!1))){if(o=this.tokenizer.escape(l)){l=l.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.tag(l)){l=l.substring(o.raw.length),u=i[i.length-1],u&&o.type==="text"&&u.type==="text"?(u.raw+=o.raw,u.text+=o.text):i.push(o);continue}if(o=this.tokenizer.link(l)){l=l.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.reflink(l,this.tokens.links)){l=l.substring(o.raw.length),u=i[i.length-1],u&&o.type==="text"&&u.type==="text"?(u.raw+=o.raw,u.text+=o.text):i.push(o);continue}if(o=this.tokenizer.emStrong(l,f,v)){l=l.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.codespan(l)){l=l.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.br(l)){l=l.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.del(l)){l=l.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.autolink(l)){l=l.substring(o.raw.length),i.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(l))){l=l.substring(o.raw.length),i.push(o);continue}if(d=l,this.options.extensions&&this.options.extensions.startInline){let x=1/0;const S=l.slice(1);let T;this.options.extensions.startInline.forEach(A=>{T=A.call({lexer:this},S),typeof T=="number"&&T>=0&&(x=Math.min(x,T))}),x<1/0&&x>=0&&(d=l.substring(0,x+1))}if(o=this.tokenizer.inlineText(d)){l=l.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(v=o.raw.slice(-1)),g=!0,u=i[i.length-1],u&&u.type==="text"?(u.raw+=o.raw,u.text+=o.text):i.push(o);continue}if(l){const x="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(x);break}else throw new Error(x)}}return i}}class go{constructor(l){Ue(this,"options");Ue(this,"parser");this.options=l||Ba}space(l){return""}code({text:l,lang:i,escaped:o}){var f;const u=(f=(i||"").match(/^\S*/))==null?void 0:f[0],d=l.replace(/\n$/,"")+`
`;return u?'<pre><code class="language-'+Bt(u)+'">'+(o?d:Bt(d,!0))+`</code></pre>
`:"<pre><code>"+(o?d:Bt(d,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}heading({tokens:l,depth:i}){return`<h${i}>${this.parser.parseInline(l)}</h${i}>
`}hr(l){return`<hr>
`}list(l){const i=l.ordered,o=l.start;let u="";for(let m=0;m<l.items.length;m++){const g=l.items[m];u+=this.listitem(g)}const d=i?"ol":"ul",f=i&&o!==1?' start="'+o+'"':"";return"<"+d+f+`>
`+u+"</"+d+`>
`}listitem(l){let i="";if(l.task){const o=this.checkbox({checked:!!l.checked});l.loose?l.tokens.length>0&&l.tokens[0].type==="paragraph"?(l.tokens[0].text=o+" "+l.tokens[0].text,l.tokens[0].tokens&&l.tokens[0].tokens.length>0&&l.tokens[0].tokens[0].type==="text"&&(l.tokens[0].tokens[0].text=o+" "+l.tokens[0].tokens[0].text)):l.tokens.unshift({type:"text",raw:o+" ",text:o+" "}):i+=o+" "}return i+=this.parser.parse(l.tokens,!!l.loose),`<li>${i}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let i="",o="";for(let d=0;d<l.header.length;d++)o+=this.tablecell(l.header[d]);i+=this.tablerow({text:o});let u="";for(let d=0;d<l.rows.length;d++){const f=l.rows[d];o="";for(let m=0;m<f.length;m++)o+=this.tablecell(f[m]);u+=this.tablerow({text:o})}return u&&(u=`<tbody>${u}</tbody>`),`<table>
<thead>
`+i+`</thead>
`+u+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){const i=this.parser.parseInline(l.tokens),o=l.header?"th":"td";return(l.align?`<${o} align="${l.align}">`:`<${o}>`)+i+`</${o}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${l}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:i,tokens:o}){const u=this.parser.parseInline(o),d=q1(l);if(d===null)return u;l=d;let f='<a href="'+l+'"';return i&&(f+=' title="'+i+'"'),f+=">"+u+"</a>",f}image({href:l,title:i,text:o}){const u=q1(l);if(u===null)return o;l=u;let d=`<img src="${l}" alt="${o}"`;return i&&(d+=` title="${i}"`),d+=">",d}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):l.text}}class Su{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}}class Sn{constructor(l){Ue(this,"options");Ue(this,"renderer");Ue(this,"textRenderer");this.options=l||Ba,this.options.renderer=this.options.renderer||new go,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Su}static parse(l,i){return new Sn(i).parse(l)}static parseInline(l,i){return new Sn(i).parseInline(l)}parse(l,i=!0){let o="";for(let u=0;u<l.length;u++){const d=l[u];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]){const m=d,g=this.options.extensions.renderers[m.type].call({parser:this},m);if(g!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(m.type)){o+=g||"";continue}}const f=d;switch(f.type){case"space":{o+=this.renderer.space(f);continue}case"hr":{o+=this.renderer.hr(f);continue}case"heading":{o+=this.renderer.heading(f);continue}case"code":{o+=this.renderer.code(f);continue}case"table":{o+=this.renderer.table(f);continue}case"blockquote":{o+=this.renderer.blockquote(f);continue}case"list":{o+=this.renderer.list(f);continue}case"html":{o+=this.renderer.html(f);continue}case"paragraph":{o+=this.renderer.paragraph(f);continue}case"text":{let m=f,g=this.renderer.text(m);for(;u+1<l.length&&l[u+1].type==="text";)m=l[++u],g+=`
`+this.renderer.text(m);i?o+=this.renderer.paragraph({type:"paragraph",raw:g,text:g,tokens:[{type:"text",raw:g,text:g}]}):o+=g;continue}default:{const m='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(m),"";throw new Error(m)}}}return o}parseInline(l,i){i=i||this.renderer;let o="";for(let u=0;u<l.length;u++){const d=l[u];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]){const m=this.options.extensions.renderers[d.type].call({parser:this},d);if(m!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(d.type)){o+=m||"";continue}}const f=d;switch(f.type){case"escape":{o+=i.text(f);break}case"html":{o+=i.html(f);break}case"link":{o+=i.link(f);break}case"image":{o+=i.image(f);break}case"strong":{o+=i.strong(f);break}case"em":{o+=i.em(f);break}case"codespan":{o+=i.codespan(f);break}case"br":{o+=i.br(f);break}case"del":{o+=i.del(f);break}case"text":{o+=i.text(f);break}default:{const m='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(m),"";throw new Error(m)}}}return o}}class Oi{constructor(l){Ue(this,"options");this.options=l||Ba}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}}Ue(Oi,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var In,Rp,iu,jp;class J2{constructor(...l){D1(this,In);Ue(this,"defaults",mu());Ue(this,"options",this.setOptions);Ue(this,"parse",Ni(this,In,iu).call(this,xn.lex,Sn.parse));Ue(this,"parseInline",Ni(this,In,iu).call(this,xn.lexInline,Sn.parseInline));Ue(this,"Parser",Sn);Ue(this,"Renderer",go);Ue(this,"TextRenderer",Su);Ue(this,"Lexer",xn);Ue(this,"Tokenizer",ho);Ue(this,"Hooks",Oi);this.use(...l)}walkTokens(l,i){var u,d;let o=[];for(const f of l)switch(o=o.concat(i.call(this,f)),f.type){case"table":{const m=f;for(const g of m.header)o=o.concat(this.walkTokens(g.tokens,i));for(const g of m.rows)for(const v of g)o=o.concat(this.walkTokens(v.tokens,i));break}case"list":{const m=f;o=o.concat(this.walkTokens(m.items,i));break}default:{const m=f;(d=(u=this.defaults.extensions)==null?void 0:u.childTokens)!=null&&d[m.type]?this.defaults.extensions.childTokens[m.type].forEach(g=>{const v=m[g].flat(1/0);o=o.concat(this.walkTokens(v,i))}):m.tokens&&(o=o.concat(this.walkTokens(m.tokens,i)))}}return o}use(...l){const i=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(o=>{const u={...o};if(u.async=this.defaults.async||u.async||!1,o.extensions&&(o.extensions.forEach(d=>{if(!d.name)throw new Error("extension name required");if("renderer"in d){const f=i.renderers[d.name];f?i.renderers[d.name]=function(...m){let g=d.renderer.apply(this,m);return g===!1&&(g=f.apply(this,m)),g}:i.renderers[d.name]=d.renderer}if("tokenizer"in d){if(!d.level||d.level!=="block"&&d.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const f=i[d.level];f?f.unshift(d.tokenizer):i[d.level]=[d.tokenizer],d.start&&(d.level==="block"?i.startBlock?i.startBlock.push(d.start):i.startBlock=[d.start]:d.level==="inline"&&(i.startInline?i.startInline.push(d.start):i.startInline=[d.start]))}"childTokens"in d&&d.childTokens&&(i.childTokens[d.name]=d.childTokens)}),u.extensions=i),o.renderer){const d=this.defaults.renderer||new go(this.defaults);for(const f in o.renderer){if(!(f in d))throw new Error(`renderer '${f}' does not exist`);if(["options","parser"].includes(f))continue;const m=f;let g=o.renderer[m];o.useNewRenderer||(g=Ni(this,In,Rp).call(this,g,m,d));const v=d[m];d[m]=(...x)=>{let S=g.apply(d,x);return S===!1&&(S=v.apply(d,x)),S||""}}u.renderer=d}if(o.tokenizer){const d=this.defaults.tokenizer||new ho(this.defaults);for(const f in o.tokenizer){if(!(f in d))throw new Error(`tokenizer '${f}' does not exist`);if(["options","rules","lexer"].includes(f))continue;const m=f,g=o.tokenizer[m],v=d[m];d[m]=(...x)=>{let S=g.apply(d,x);return S===!1&&(S=v.apply(d,x)),S}}u.tokenizer=d}if(o.hooks){const d=this.defaults.hooks||new Oi;for(const f in o.hooks){if(!(f in d))throw new Error(`hook '${f}' does not exist`);if(f==="options")continue;const m=f,g=o.hooks[m],v=d[m];Oi.passThroughHooks.has(f)?d[m]=x=>{if(this.defaults.async)return Promise.resolve(g.call(d,x)).then(T=>v.call(d,T));const S=g.call(d,x);return v.call(d,S)}:d[m]=(...x)=>{let S=g.apply(d,x);return S===!1&&(S=v.apply(d,x)),S}}u.hooks=d}if(o.walkTokens){const d=this.defaults.walkTokens,f=o.walkTokens;u.walkTokens=function(m){let g=[];return g.push(f.call(this,m)),d&&(g=g.concat(d.call(this,m))),g}}this.defaults={...this.defaults,...u}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,i){return xn.lex(l,i??this.defaults)}parser(l,i){return Sn.parse(l,i??this.defaults)}}In=new WeakSet,Rp=function(l,i,o){switch(i){case"heading":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,o.parser.parseInline(u.tokens),u.depth,S2(o.parser.parseInline(u.tokens,o.parser.textRenderer)))};case"code":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text,u.lang,!!u.escaped)};case"table":return function(u){if(!u.type||u.type!==i)return l.apply(this,arguments);let d="",f="";for(let g=0;g<u.header.length;g++)f+=this.tablecell({text:u.header[g].text,tokens:u.header[g].tokens,header:!0,align:u.align[g]});d+=this.tablerow({text:f});let m="";for(let g=0;g<u.rows.length;g++){const v=u.rows[g];f="";for(let x=0;x<v.length;x++)f+=this.tablecell({text:v[x].text,tokens:v[x].tokens,header:!1,align:u.align[x]});m+=this.tablerow({text:f})}return l.call(this,d,m)};case"blockquote":return function(u){if(!u.type||u.type!==i)return l.apply(this,arguments);const d=this.parser.parse(u.tokens);return l.call(this,d)};case"list":return function(u){if(!u.type||u.type!==i)return l.apply(this,arguments);const d=u.ordered,f=u.start,m=u.loose;let g="";for(let v=0;v<u.items.length;v++){const x=u.items[v],S=x.checked,T=x.task;let A="";if(x.task){const k=this.checkbox({checked:!!S});m?x.tokens.length>0&&x.tokens[0].type==="paragraph"?(x.tokens[0].text=k+" "+x.tokens[0].text,x.tokens[0].tokens&&x.tokens[0].tokens.length>0&&x.tokens[0].tokens[0].type==="text"&&(x.tokens[0].tokens[0].text=k+" "+x.tokens[0].tokens[0].text)):x.tokens.unshift({type:"text",text:k+" "}):A+=k+" "}A+=this.parser.parse(x.tokens,m),g+=this.listitem({type:"list_item",raw:A,text:A,task:T,checked:!!S,loose:m,tokens:x.tokens})}return l.call(this,g,d,f)};case"html":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text,u.block)};case"paragraph":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"escape":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text)};case"link":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.href,u.title,this.parser.parseInline(u.tokens))};case"image":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.href,u.title,u.text)};case"strong":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"em":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"codespan":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text)};case"del":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"text":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text)}}return l},iu=function(l,i){return(o,u)=>{const d={...u},f={...this.defaults,...d};this.defaults.async===!0&&d.async===!1&&(f.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),f.async=!0);const m=Ni(this,In,jp).call(this,!!f.silent,!!f.async);if(typeof o>"u"||o===null)return m(new Error("marked(): input parameter is undefined or null"));if(typeof o!="string")return m(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected"));if(f.hooks&&(f.hooks.options=f),f.async)return Promise.resolve(f.hooks?f.hooks.preprocess(o):o).then(g=>l(g,f)).then(g=>f.hooks?f.hooks.processAllTokens(g):g).then(g=>f.walkTokens?Promise.all(this.walkTokens(g,f.walkTokens)).then(()=>g):g).then(g=>i(g,f)).then(g=>f.hooks?f.hooks.postprocess(g):g).catch(m);try{f.hooks&&(o=f.hooks.preprocess(o));let g=l(o,f);f.hooks&&(g=f.hooks.processAllTokens(g)),f.walkTokens&&this.walkTokens(g,f.walkTokens);let v=i(g,f);return f.hooks&&(v=f.hooks.postprocess(v)),v}catch(g){return m(g)}}},jp=function(l,i){return o=>{if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const u="<p>An error occurred:</p><pre>"+Bt(o.message+"",!0)+"</pre>";return i?Promise.resolve(u):u}if(i)return Promise.reject(o);throw o}};const Za=new J2;function Re(s,l){return Za.parse(s,l)}Re.options=Re.setOptions=function(s){return Za.setOptions(s),Re.defaults=Za.defaults,Sp(Re.defaults),Re};Re.getDefaults=mu;Re.defaults=Ba;Re.use=function(...s){return Za.use(...s),Re.defaults=Za.defaults,Sp(Re.defaults),Re};Re.walkTokens=function(s,l){return Za.walkTokens(s,l)};Re.parseInline=Za.parseInline;Re.Parser=Sn;Re.parser=Sn.parse;Re.Renderer=go;Re.TextRenderer=Su;Re.Lexer=xn;Re.lexer=xn.lex;Re.Tokenizer=ho;Re.Hooks=Oi;Re.parse=Re;Re.options;Re.setOptions;Re.use;Re.walkTokens;Re.parseInline;Sn.parse;xn.lex;const P2=`/* ================================================================
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
`,W2=`/* ============================================================
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
`,eb=`// Icons — Phosphor Icons (phosphor-icons.com), Regular weight, 256×256 viewBox.
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
`,tb=`// Core UI primitives — Button, Input, FormField, Table, Badge
// All use existing .btn / .input / .table / .badge CSS classes from styles.css

/* ============================================================
   Button
   ============================================================ */
// @component Button
// @description Canonical button. Use instead of bare <button className="btn ..."> for consistent loading + disabled states.
// @example
// <Button variant="primary" onClick={save}>Save changes</Button>
// <Button variant="secondary" icon={<IconPlus size={14} />}>Add row</Button>
// <Button variant="text">Cancel</Button>
// <Button variant="danger">Delete</Button>
// <Button variant="primary" loading={saving}>Saving…</Button>
// <Button variant="icon" onClick={edit}><IconEdit size={16} /></Button>
// <Button variant="secondary" size="sm">Small</Button>
// @props
// variant   'primary'|'secondary'|'text'|'danger'|'icon'|'link' — default 'primary'
// size      'sm' — smaller padding variant
// loading   boolean — shows spinner, disables interaction
// disabled  boolean
// icon      ReactNode — shown left of label (hidden when loading)
// className  string — extra classes appended to the button
// ...also accepts all standard <button> props (onClick, type, form, etc.)
// @end
function Button({ variant = 'primary', size, loading, disabled, icon, children, className = '', ...props }) {
  if (variant === 'link') {
    return (
      <button className={\`btn-link \${className}\`} disabled={disabled || loading} {...props}>
        {children}
      </button>
    )
  }
  if (variant === 'icon') {
    return (
      <button className={\`btn-icon \${className}\`} disabled={disabled || loading} {...props}>
        {loading ? <span className="btn-spinner" /> : (icon || children)}
      </button>
    )
  }
  return (
    <button
      className={\`btn btn-\${variant}\${size === 'sm' ? ' btn-sm' : ''}\${loading ? ' btn--loading' : ''} \${className}\`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="btn-spinner" />}
      {!loading && icon}
      {children}
    </button>
  )
}

/* ============================================================
   FormField — wraps any input with label, hint, and error
   ============================================================ */
// @component FormField
// @description Label + input wrapper with hint and error states. Always wrap Input inside FormField.
// @example
// <FormField label="Agency name" hint="Shown on all proposals" htmlFor="agency">
//   <Input id="agency" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Acme Insurance" />
// </FormField>
//
// <FormField label="Notes" error={errors.notes}>
//   <Input multiline value={notes} onChange={e => setNotes(e.target.value)} rows={4} />
// </FormField>
// @props
// label    string
// hint     string — shown below input when there is no error
// error    string — shown in red below input (takes priority over hint)
// htmlFor  string — links the label to an input id
// @end
function FormField({ label, hint, error, htmlFor, children }) {
  return (
    <div className="form-row">
      {label && <label htmlFor={htmlFor}>{label}</label>}
      {children}
      {error  && <span className="form-error">{error}</span>}
      {!error && hint && <span className="form-hint">{hint}</span>}
    </div>
  )
}

/* ============================================================
   Input / Textarea
   ============================================================ */
// @component Input
// @description Styled text input or textarea. Use inside FormField for label and error display.
// @example
// <Input value={v} onChange={e => setV(e.target.value)} placeholder="Search…" />
// <Input multiline value={v} onChange={e => setV(e.target.value)} rows={3} />
// <Input error value={v} onChange={e => setV(e.target.value)} />
// @props
// multiline  boolean — renders <textarea> instead of <input>
// error      boolean — applies red border and focus ring
// ...accepts all standard <input> / <textarea> props (value, onChange, placeholder, rows, etc.)
// @end
// multiline=true renders a <textarea>
function Input({ multiline, error, className = '', ...props }) {
  const cls = \`\${multiline ? 'textarea' : 'input'}\${error ? ' input--error' : ''} \${className}\`
  return multiline
    ? <textarea className={cls} {...props} />
    : <input    className={cls} {...props} />
}

/* ============================================================
   Table
   ============================================================ */
// @component Table
// @description Data table with optional sorting, row actions, and empty state. Always use this instead of raw <table> HTML.
// @example
// const columns = [
//   { key: 'name',   label: 'Account', sortable: true, width: '40%' },
//   { key: 'status', label: 'Status',  render: row => <Badge variant={row.active ? 'success' : 'default'}>{row.active ? 'Active' : 'Inactive'}</Badge> },
//   { key: 'date',   label: 'Updated' },
// ]
//
// <Table
//   columns={columns}
//   rows={data}
//   sortKey={sortKey}
//   sortDir={sortDir}
//   onSort={(key, dir) => { setSortKey(key); setSortDir(dir) }}
//   emptyState={<span>No results</span>}
//   getRowActions={row => (
//     <>
//       <Button variant="icon" onClick={() => edit(row)}><IconEdit size={14} /></Button>
//       <Button variant="icon" onClick={() => del(row)}><IconTrash size={14} /></Button>
//     </>
//   )}
// />
// @props
// columns        array of { key, label, sortable?, width?, render?(row)=>node }
// rows           array of objects — include an \`id\` field for stable React keys
// sortKey        string — key of the currently sorted column
// sortDir        'asc' | 'desc' — current sort direction
// onSort         (key, dir) => void — called when a sortable header is clicked
// getRowActions  (row) => ReactNode — renders right-aligned action buttons per row
// emptyState     ReactNode — shown when rows is empty (default: "No data")
// compact        boolean — tighter row padding
// @end
// columns: [{ key, label, sortable?, width?, render?(row) => node }]
// rows:    array of objects — each row needs a stable \`id\` field or index is used
// sortKey / sortDir / onSort — optional, for controlled sorting
// getRowActions(row) => ReactNode — renders right-aligned action cell per row
// emptyState — ReactNode shown when rows is empty
// compact — reduces row padding
function Table({ columns, rows = [], sortKey, sortDir = 'asc', onSort, getRowActions, emptyState, compact }) {
  const hasActions = Boolean(getRowActions)
  const colspan = columns.length + (hasActions ? 1 : 0)

  function handleSort(col) {
    if (!col.sortable || !onSort) return
    onSort(col.key, col.key === sortKey && sortDir === 'asc' ? 'desc' : 'asc')
  }

  return (
    <table className={\`table\${compact ? ' table-compact' : ''}\`}>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.key} style={col.width ? { width: col.width } : undefined}>
              <div
                className={\`th-inner\${col.sortable ? ' sortable' : ''}\`}
                onClick={() => handleSort(col)}
              >
                {col.label}
                {col.sortable && (
                  <span className="sort">
                    {sortKey === col.key
                      ? sortDir === 'asc'
                        ? <IconChevronUp size={12} />
                        : <IconChevronDown size={12} />
                      : <IconChevronDown size={12} style={{ opacity: 0.3 }} />}
                  </span>
                )}
              </div>
            </th>
          ))}
          {hasActions && <th style={{ width: 80 }} />}
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <td colSpan={colspan} style={{ padding: 0, borderBottom: 0 }}>
              <div className="table-empty">
                {emptyState || <span>No data</span>}
              </div>
            </td>
          </tr>
        ) : rows.map((row, i) => (
          <tr key={row.id ?? i}>
            {columns.map(col => (
              <td key={col.key}>
                {col.render ? col.render(row) : row[col.key]}
              </td>
            ))}
            {hasActions && (
              <td className="col-actions">
                <div className="cell-actions">{getRowActions(row)}</div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

/* ============================================================
   Badge
   ============================================================ */
// @component Badge
// @description Small status label. Use for status, labels, and counts.
// @example
// <Badge variant="success">Active</Badge>
// <Badge variant="warning">Pending</Badge>
// <Badge variant="error">Overdue</Badge>
// <Badge variant="primary">New</Badge>
// <Badge variant="default">Draft</Badge>
// <Badge variant="success" icon={<IconCheck size={10} />}>Verified</Badge>
// @props
// variant  'default'|'primary'|'success'|'warning'|'error' — default 'default'
// icon     ReactNode — shown left of the text label
// @end
// variant: 'default' | 'primary' | 'success' | 'warning' | 'error'
function Badge({ variant = 'default', icon, children }) {
  return (
    <span className={\`badge badge-\${variant}\`}>
      {icon}
      {children}
    </span>
  )
}
`,nb=`// Toggle — animated on/off switch with label

// @component Toggle
// @description Animated on/off switch. Supports controlled and uncontrolled usage.
// @example
// <Toggle label="Notifications" />
// <Toggle defaultChecked label="Dark mode" />
// <Toggle checked={on} onChange={setOn} label="Feature flag" />
// <Toggle disabled label="Locked" />
// @props
// checked         boolean — controlled value
// defaultChecked  boolean — initial value when uncontrolled
// onChange        (value: boolean) => void
// label           string — shown to the right of the switch
// disabled        boolean
// @end
function Toggle({ checked, defaultChecked = false, onChange, disabled, label, id }) {
  const { useState } = React
  const [internalOn, setInternalOn] = useState(defaultChecked)
  const isControlled = checked !== undefined
  const isOn = isControlled ? checked : internalOn

  function handleToggle() {
    if (disabled) return
    const next = !isOn
    if (!isControlled) setInternalOn(next)
    onChange && onChange(next)
  }

  return (
    <>
      <style>{\`
        .tgl-root {
          display: inline-flex; align-items: center; gap: 8px;
          cursor: pointer; user-select: none; box-sizing: border-box;
        }
        .tgl-root.tgl-disabled { cursor: not-allowed; opacity: 0.38; }
        .tgl-track {
          position: relative; width: 40px; height: 22px; border-radius: 11px;
          background: var(--en-bg-empty);
          transition: background 200ms cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
        }
        .tgl-root:not(.tgl-disabled):hover .tgl-track { background: var(--en-bg-dark-grey); }
        .tgl-root.tgl-on .tgl-track { background: var(--en-primary); }
        .tgl-root.tgl-on:not(.tgl-disabled):hover .tgl-track { background: var(--en-primary-light); }
        .tgl-thumb {
          position: absolute; top: 3px; left: 3px; width: 16px; height: 16px;
          border-radius: 50%; background: var(--en-white);
          box-shadow: 0 1px 3px rgba(0,0,0,0.25);
          transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tgl-root.tgl-on .tgl-thumb { transform: translateX(18px); }
        .tgl-label { font: 400 14px/20px var(--en-font-sans); color: var(--en-fg); }
      \`}</style>
      <div
        className={\`tgl-root\${isOn ? ' tgl-on' : ''}\${disabled ? ' tgl-disabled' : ''}\`}
        onClick={handleToggle}
        role="switch"
        aria-checked={isOn}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && (e.preventDefault(), handleToggle())}
        id={id}
      >
        <div className="tgl-track">
          <div className="tgl-thumb" />
        </div>
        {label && <span className="tgl-label">{label}</span>}
      </div>
    </>
  )
}
`,ab=`// Avatar — initials circle with sm / md / lg sizes

// @component Avatar
// @description Initials circle with 3 sizes. Defaults to purple (--en-data-accounts).
// @example
// <Avatar name="Ismael Viejo" size="md" />
// <Avatar name="John" size="sm" />
// <Avatar name="Alice" size="lg" color="var(--en-primary)" />
// @props
// name   string — split into initials (max 2 chars)
// size   'sm' (24px) | 'md' (32px) | 'lg' (40px) — default 'md'
// color  CSS color string — defaults to var(--en-data-accounts)
// @end
// size: 'sm' (24px) | 'md' (32px) | 'lg' (40px)
// color: optional CSS color string; defaults to --en-data-accounts (purple)
function Avatar({ name = '', size = 'md', color, className = '', style: extraStyle = {} }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('') || '?'

  const dim   = { sm: 24, md: 32, lg: 40 }[size] || 32
  const fs    = { sm: 9,  md: 12, lg: 14 }[size] || 12
  const bg    = color || 'var(--en-data-accounts)'

  return (
    <>
      <style>{\`
        .av-root {
          display: inline-flex; align-items: center; justify-content: center;
          border-radius: 50%; flex-shrink: 0;
          font-family: var(--en-font-sans); font-weight: 700;
          color: var(--en-white); user-select: none; box-sizing: border-box;
        }
      \`}</style>
      <div
        className={\`av-root \${className}\`}
        style={{ width: dim, height: dim, background: bg, fontSize: fs, ...extraStyle }}
        title={name}
      >
        {initials}
      </div>
    </>
  )
}
`,lb=`// Dialog — modal overlay with title, subtitle, body slot, and optional footer

// @component Dialog
// @description Modal overlay with title, subtitle, content slot, and optional footer row. Handles Escape key, X button, and backdrop click automatically.
// @example
// <Dialog
//   open={open}
//   onClose={() => setOpen(false)}
//   title="Confirm deletion"
//   subtitle="This cannot be undone."
//   footer={<>
//     <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
//     <Button variant="danger" onClick={handleDelete}>Delete</Button>
//   </>}
// >
//   <p className="en-body2">Are you sure you want to delete <strong>{item.name}</strong>?</p>
// </Dialog>
// @props
// open      boolean — controls visibility
// onClose   () => void — called on Escape, X button, and backdrop click
// title     string
// subtitle  string (optional)
// footer    ReactNode (optional) — right-aligned action buttons
// width     number — dialog width in px (default 480)
// @end
// open: bool — controls visibility
// onClose: fn — called on backdrop click, Escape key, or X button
// title: string
// subtitle: string (optional)
// footer: ReactNode (optional) — renders right-aligned action row
// width: number (default 480)
function Dialog({ open, onClose, title, subtitle, children, footer, width = 480 }) {
  const { useEffect } = React

  useEffect(() => {
    if (!open) return
    function onKey(e) { if (e.key === 'Escape') onClose && onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  return (
    <>
      <style>{\`
        .dlg-backdrop {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(30, 30, 30, 0.4);
          display: flex; align-items: center; justify-content: center; padding: 24px;
        }
        .dlg-card {
          background: var(--en-bg); border-radius: var(--en-radius-large);
          box-shadow: 0 8px 32px rgba(30,30,30,0.16), 0 0 1px rgba(30,30,30,0.12);
          display: flex; flex-direction: column;
          max-height: calc(100vh - 48px); overflow: hidden; box-sizing: border-box;
        }
        .dlg-header {
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: 16px; padding: 24px 24px 16px;
        }
        .dlg-titles { display: flex; flex-direction: column; gap: 4px; flex: 1; min-width: 0; }
        .dlg-title { font: 700 16px/24px var(--en-font-sans); color: var(--en-fg); margin: 0; }
        .dlg-subtitle { font: 400 14px/20px var(--en-font-sans); color: var(--en-fg-secondary); margin: 0; }
        .dlg-close {
          width: 28px; height: 28px; border-radius: var(--en-radius-regular);
          border: none; background: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: var(--en-icon); flex-shrink: 0;
          transition: background 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .dlg-close:hover { background: var(--en-bg-hover); }
        .dlg-divider { height: 1px; background: var(--en-divider); margin: 0; border: none; flex-shrink: 0; }
        .dlg-body { padding: 20px 24px; overflow-y: auto; flex: 1; }
        .dlg-footer {
          display: flex; align-items: center; justify-content: flex-end; gap: 8px;
          padding: 16px 24px; border-top: 1px solid var(--en-divider); flex-shrink: 0;
        }
      \`}</style>
      <div
        className="dlg-backdrop"
        onClick={e => e.target === e.currentTarget && onClose && onClose()}
      >
        <div className="dlg-card" style={{ width }}>
          <div className="dlg-header">
            <div className="dlg-titles">
              {title    && <h2 className="dlg-title">{title}</h2>}
              {subtitle && <p  className="dlg-subtitle">{subtitle}</p>}
            </div>
            {onClose && (
              <button className="dlg-close" onClick={onClose} aria-label="Close">
                <IconClose size={16} />
              </button>
            )}
          </div>
          <hr className="dlg-divider" />
          <div className="dlg-body">{children}</div>
          {footer && <div className="dlg-footer">{footer}</div>}
        </div>
      </div>
    </>
  )
}
`,ib=`// Chip — dismissible pill tag with 5 color variants and 3 styles

// @component Chip
// @description Dismissible pill tag with 5 color variants and 3 styles.
// @example
// <Chip variant="primary">Producer</Chip>
// <Chip variant="success" style="filled">Active</Chip>
// <Chip variant="warning" dot>Pending</Chip>
// <Chip variant="error" style="subtle" dismissible onDismiss={() => remove(id)}>Overdue</Chip>
// @props
// variant     'neutral'|'primary'|'success'|'error'|'warning' — default 'neutral'
// style       'subtle' (outline tint) | 'filled' (solid) | 'dot' (tint + trailing dot) — default 'subtle'
// dot         boolean — shorthand for style="dot"
// dismissible  boolean — shows × button
// onDismiss   () => void — called when × is clicked
// @end
// variant: 'neutral' | 'primary' | 'success' | 'error' | 'warning'
// style:   'subtle' (outline tint) | 'filled' (solid) | 'dot' (tint + trailing dot)
// dismissible: bool — shows × button
// onDismiss: fn
function Chip({ variant = 'neutral', style: chipStyle = 'subtle', dot, dismissible, onDismiss, children, className = '' }) {
  const effectiveStyle = dot ? 'dot' : chipStyle

  return (
    <>
      <style>{\`
        .ch-root {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 3px 10px; border-radius: 100px;
          font: 400 12px/16px var(--en-font-sans); letter-spacing: 0.17px;
          border: 1.5px solid transparent;
          box-sizing: border-box; white-space: nowrap; vertical-align: middle;
        }
        .ch-dot-indicator { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
        .ch-dismiss {
          display: inline-flex; align-items: center; justify-content: center;
          width: 14px; height: 14px; border-radius: 50%;
          border: none; background: none; cursor: pointer; padding: 0; margin-left: 1px;
          opacity: 0.6; transition: opacity 150ms; flex-shrink: 0;
        }
        .ch-dismiss:hover { opacity: 1; }

        /* neutral */
        .ch-neutral.ch-subtle { color: var(--en-fg); background: var(--en-bg-dark-grey); border-color: var(--en-border); }
        .ch-neutral.ch-filled { color: var(--en-white); background: var(--en-fg-secondary); }
        .ch-neutral.ch-dot    { color: var(--en-fg); background: var(--en-bg-dark-grey); border-color: var(--en-border); }
        .ch-neutral.ch-dot .ch-dot-indicator { background: var(--en-fg-secondary); }

        /* primary */
        .ch-primary.ch-subtle { color: var(--en-primary); background: hsla(240,100%,95%,1); border-color: var(--en-primary); }
        .ch-primary.ch-filled { color: var(--en-white); background: var(--en-primary); }
        .ch-primary.ch-dot    { color: var(--en-primary); background: hsla(240,100%,95%,1); border-color: var(--en-primary); }
        .ch-primary.ch-dot .ch-dot-indicator { background: var(--en-primary); }

        /* success */
        .ch-success.ch-subtle { color: var(--en-success-dark); background: hsla(160,56%,92%,1); border-color: var(--en-success); }
        .ch-success.ch-filled { color: var(--en-white); background: var(--en-success-dark); }
        .ch-success.ch-dot    { color: var(--en-success-dark); background: hsla(160,56%,92%,1); border-color: var(--en-success); }
        .ch-success.ch-dot .ch-dot-indicator { background: var(--en-success); }

        /* error */
        .ch-error.ch-subtle { color: var(--en-error-dark); background: hsla(2,100%,96%,1); border-color: var(--en-error); }
        .ch-error.ch-filled { color: var(--en-white); background: var(--en-error); }
        .ch-error.ch-dot    { color: var(--en-error-dark); background: hsla(2,100%,96%,1); border-color: var(--en-error); }
        .ch-error.ch-dot .ch-dot-indicator { background: var(--en-error); }

        /* warning */
        .ch-warning.ch-subtle { color: var(--en-warning-dark); background: hsla(43,100%,93%,1); border-color: var(--en-warning); }
        .ch-warning.ch-filled { color: var(--en-black); background: var(--en-warning); }
        .ch-warning.ch-dot    { color: var(--en-warning-dark); background: hsla(43,100%,93%,1); border-color: var(--en-warning); }
        .ch-warning.ch-dot .ch-dot-indicator { background: var(--en-warning); }
      \`}</style>
      <span className={\`ch-root ch-\${variant} ch-\${effectiveStyle} \${className}\`}>
        {children}
        {effectiveStyle === 'dot' && <span className="ch-dot-indicator" />}
        {dismissible && (
          <button className="ch-dismiss" onClick={onDismiss} aria-label="Remove">
            <IconClose size={10} />
          </button>
        )}
      </span>
    </>
  )
}
`,sb=`// Select — dropdown field with label, states, and option list

// @component Select
// @description Dropdown input with label, error state, and option list. Supports string arrays or value/label objects.
// @example
// <Select
//   label="Policy type"
//   options={['Commercial', 'Personal', 'Benefits']}
//   placeholder="Select type..."
//   onChange={val => setType(val)}
// />
//
// <Select
//   label="Market"
//   options={[{ value: 'wholesale', label: 'Wholesale' }, { value: 'retail', label: 'Retail' }]}
//   value={market}
//   onChange={setMarket}
// />
// @props
// label        string
// options      string[] or { value, label }[]
// placeholder  string — default 'Select option...'
// value        string — controlled value
// onChange     (value) => void
// error        string — shows red border and error text below
// disabled     boolean
// @end
// options: string[] | { value, label }[]
// value / onChange — controlled; omit for uncontrolled
function Select({ label, options = [], error, disabled, placeholder = 'Select option...', value, onChange, className = '' }) {
  const { useState, useRef, useEffect } = React
  const [open,     setOpen]     = useState(false)
  const [internal, setInternal] = useState('')
  const ref = useRef(null)

  const isControlled  = value !== undefined
  const currentValue  = isControlled ? value : internal

  const currentOption = options.find(o => (typeof o === 'object' ? o.value : o) === currentValue)
  const displayLabel  = currentValue
    ? (typeof currentOption === 'object' ? currentOption?.label : currentOption) || currentValue
    : placeholder

  useEffect(() => {
    function onClick(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  function handleSelect(opt) {
    const val = typeof opt === 'object' ? opt.value : opt
    if (!isControlled) setInternal(val)
    setOpen(false)
    onChange && onChange(val)
  }

  return (
    <>
      <style>{\`
        .sel-wrapper { position: relative; display: flex; flex-direction: column; gap: 4px; box-sizing: border-box; }
        .sel-label { font: 400 12px/16px var(--en-font-sans); color: var(--en-fg-secondary); }
        .sel-label--focused { color: var(--en-primary); }
        .sel-trigger {
          display: flex; align-items: center; gap: 8px; padding: 0 12px; height: 36px;
          background: var(--en-bg); border: 1.5px solid var(--en-border);
          border-radius: var(--en-radius-regular); cursor: pointer;
          box-sizing: border-box; user-select: none;
          transition: border-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .sel-trigger:hover:not(.sel-trigger--disabled) { border-color: var(--en-primary); }
        .sel-trigger:focus { outline: none; border-color: var(--en-primary); }
        .sel-trigger--open { border-color: var(--en-primary); }
        .sel-trigger--error { border-color: var(--en-error); }
        .sel-trigger--disabled { background: var(--en-bg-dark-grey); cursor: not-allowed; opacity: 0.55; }
        .sel-value { flex: 1; font: 400 14px/20px var(--en-font-sans); color: var(--en-fg); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .sel-value--placeholder { color: var(--en-fg-disabled); }
        .sel-chevron { flex-shrink: 0; color: var(--en-icon-secondary); transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1); }
        .sel-chevron--open { transform: rotate(180deg); }
        .sel-dropdown {
          position: absolute; top: calc(100% + 4px); left: 0; right: 0; z-index: 200;
          background: var(--en-bg); border-radius: var(--en-radius-regular);
          box-shadow: var(--en-shadow-menu); overflow-y: auto; max-height: 240px; padding: 4px 0;
        }
        .sel-option {
          padding: 8px 12px; font: 400 14px/20px var(--en-font-sans); color: var(--en-fg);
          cursor: pointer; transition: background 150ms;
        }
        .sel-option:hover { background: var(--en-bg-hover); }
        .sel-option--active { color: var(--en-primary); background: var(--en-outlined-hover); }
      \`}</style>
      <div className={\`sel-wrapper \${className}\`} ref={ref}>
        {label && (
          <label className={\`sel-label\${open ? ' sel-label--focused' : ''}\`}>{label}</label>
        )}
        <div
          className={\`sel-trigger\${open ? ' sel-trigger--open' : ''}\${error ? ' sel-trigger--error' : ''}\${disabled ? ' sel-trigger--disabled' : ''}\`}
          onClick={() => !disabled && setOpen(o => !o)}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={e => {
            if (disabled) return
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(o => !o) }
            if (e.key === 'Escape') setOpen(false)
          }}
        >
          <span className={\`sel-value\${!currentValue ? ' sel-value--placeholder' : ''}\`}>{displayLabel}</span>
          <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" className={\`sel-chevron\${open ? ' sel-chevron--open' : ''}\`}>
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/>
          </svg>
        </div>
        {error && <span className="form-error">{error}</span>}
        {open && !disabled && (
          <div className="sel-dropdown">
            {options.map((opt, i) => {
              const val = typeof opt === 'object' ? opt.value : opt
              const lbl = typeof opt === 'object' ? opt.label : opt
              return (
                <div
                  key={i}
                  className={\`sel-option\${val === currentValue ? ' sel-option--active' : ''}\`}
                  onMouseDown={e => { e.preventDefault(); handleSelect(opt) }}
                >
                  {lbl}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
`,ob=`// Stepper — horizontal multi-step progress indicator

// @component Stepper
// @description Horizontal multi-step progress indicator. Connecting lines fill as steps complete.
// @example
// <Stepper steps={[
//   { label: 'Policy details', status: 'completed' },
//   { label: 'Coverage',       status: 'active' },
//   { label: 'Review',         status: 'upcoming' },
//   { label: 'Confirm',        status: 'upcoming' },
// ]} />
// @props
// steps  array of { label: string, status: 'completed'|'active'|'upcoming' }
// @end
// steps: [{ label: string, status: 'completed' | 'active' | 'upcoming' }]
function Stepper({ steps = [], className = '' }) {
  return (
    <>
      <style>{\`
        .stp-root { display: flex; align-items: flex-start; box-sizing: border-box; }
        .stp-step {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          flex: 1; position: relative; min-width: 0;
        }
        .stp-step:not(:last-child)::after {
          content: ''; position: absolute;
          top: 14px; left: calc(50% + 16px);
          width: calc(100% - 32px); height: 1.5px;
          background: var(--en-divider);
        }
        .stp-step.stp-completed:not(:last-child)::after { background: var(--en-primary); }
        .stp-icon {
          width: 28px; height: 28px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; box-sizing: border-box;
          font: 700 12px/1 var(--en-font-sans); z-index: 1;
          background: var(--en-bg);
        }
        .stp-completed .stp-icon { background: var(--en-primary); color: var(--en-white); }
        .stp-active    .stp-icon { background: var(--en-primary); color: var(--en-white); }
        .stp-upcoming  .stp-icon { border: 1.5px solid var(--en-border); color: var(--en-fg-disabled); }
        .stp-label {
          font: 400 12px/16px var(--en-font-sans); color: var(--en-fg-secondary);
          text-align: center; white-space: nowrap;
        }
        .stp-active .stp-label { font-weight: 700; color: var(--en-fg); }
      \`}</style>
      <div className={\`stp-root \${className}\`}>
        {steps.map((step, i) => (
          <div key={i} className={\`stp-step stp-\${step.status || 'upcoming'}\`}>
            <div className="stp-icon">
              {step.status === 'completed'
                ? <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z"/></svg>
                : i + 1}
            </div>
            <span className="stp-label">{step.label}</span>
          </div>
        ))}
      </div>
    </>
  )
}
`,rb=`// Tooltip — dark contextual tooltip shown on hover

// @component Tooltip
// @description Dark tooltip shown on hover. Wrap any element — no positioning needed.
// @example
// <Tooltip label="Download report" position="top">
//   <Button variant="icon"><IconDownload size={16} /></Button>
// </Tooltip>
//
// <Tooltip label="GWP" description="Gross Written Premium for the policy year" position="bottom">
//   <span className="en-body2">GWP</span>
// </Tooltip>
// @props
// label        string — bold heading (required to show tooltip)
// description  string (optional) — secondary line below the label
// position     'top'|'bottom'|'left'|'right' — default 'top'
// @end
// label:       string — bold heading (required)
// description: string — secondary text (optional)
// position:    'top' | 'bottom' | 'left' | 'right' (default 'top')
function Tooltip({ label, description, position = 'top', children, className = '' }) {
  const { useState } = React
  const [visible, setVisible] = useState(false)

  return (
    <>
      <style>{\`
        .tt-root { position: relative; display: inline-flex; align-items: center; }
        .tt-box {
          position: absolute; z-index: 300;
          background: var(--en-black); color: var(--en-white);
          border-radius: var(--en-radius-regular); padding: 6px 10px;
          box-shadow: var(--en-shadow-tooltip); pointer-events: none;
          white-space: nowrap; box-sizing: border-box;
          animation: tt-in 120ms ease forwards;
        }
        @keyframes tt-in { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: translateY(0); } }
        .tt-top    { bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
        .tt-bottom { top: calc(100% + 8px);    left: 50%; transform: translateX(-50%); }
        .tt-left   { right: calc(100% + 8px);  top: 50%;  transform: translateY(-50%); }
        .tt-right  { left: calc(100% + 8px);   top: 50%;  transform: translateY(-50%); }
        .tt-arrow {
          position: absolute; width: 8px; height: 8px;
          background: var(--en-black); transform: rotate(45deg);
        }
        .tt-top    .tt-arrow { bottom: -4px; left: 50%; margin-left: -4px; }
        .tt-bottom .tt-arrow { top: -4px;    left: 50%; margin-left: -4px; }
        .tt-left   .tt-arrow { right: -4px;  top: 50%;  margin-top: -4px; }
        .tt-right  .tt-arrow { left: -4px;   top: 50%;  margin-top: -4px; }
        .tt-label { font: 700 12px/16px var(--en-font-sans); display: block; }
        .tt-desc  { font: 400 12px/16px var(--en-font-sans); display: block; margin-top: 2px; opacity: 0.75; }
      \`}</style>
      <div
        className={\`tt-root \${className}\`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
      >
        {children}
        {visible && label && (
          <div className={\`tt-box tt-\${position}\`}>
            <span className="tt-arrow" />
            <span className="tt-label">{label}</span>
            {description && <span className="tt-desc">{description}</span>}
          </div>
        )}
      </div>
    </>
  )
}
`,cb=`// Template picker — trigger button + dropdown menu with search,
// per-row gear (edit), star (set default), and footer actions.

// @component TemplatePicker
// @description Dropdown picker for selecting and managing named templates. Includes search, default-star, and per-row actions.
// @example
// <TemplatePicker
//   templates={templates}
//   activeId={activeId}
//   isDirty={dirty}
//   onApply={id => applyTemplate(id)}
//   onSaveAsNew={() => openSaveDialog()}
//   onManageOpen={() => setManageOpen(true)}
//   onEdit={id => openEditDialog(id)}
//   onSetDefault={id => setDefault(id)}
//   onDuplicate={id => duplicate(id)}
//   onDelete={id => deleteTemplate(id)}
// />
// @props
// templates    array of { id, name, description, isDefault, shared, owner: { name, initials, isYou }, updatedAt, usageCount }
// activeId     string — id of the currently applied template
// isDirty      boolean — shows unsaved-changes indicator on the trigger
// onApply      (id) => void
// onSaveAsNew  () => void — opens save-as-new dialog
// onManageOpen () => void — opens ManageModal
// onEdit       (id) => void
// onSetDefault (id) => void
// onDuplicate  (id) => void
// onDelete     (id) => void
// @end
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
`,ub=`// Modals — Save-as-template dialog, Save-changes confirm, Manage modal.

// @component SaveTemplateDialog
// @description Modal for creating, editing, or forking a named template.
// @example
// <SaveTemplateDialog
//   mode="create"
//   initial={{ name: '', description: '', isDefault: false, shared: true }}
//   templates={templates}
//   onClose={() => setDialog(null)}
//   onSubmit={vals => handleSave(vals)}
// />
// @props
// mode     'create'|'edit'|'fork'
// initial  { name, description, isDefault, shared }
// templates  array — used for duplicate-name warning
// onClose  () => void
// onSubmit ({ name, description, isDefault, shared }) => void
// @end

// @component UpdateTemplateDialog
// @description Confirmation modal for saving changes to an existing template.
// @example
// <UpdateTemplateDialog
//   template={activeTpl}
//   summary={['Producer team: 3 → 4 members', 'Agency name updated']}
//   onClose={() => setDialog(false)}
//   onConfirm={() => confirmUpdate()}
//   onSaveAsNew={() => { closeDialog(); openSaveAsNew(); }}
// />
// @props
// template   { name } — the template being updated
// summary    string[] — bullet list of changes shown in the dialog
// onClose    () => void
// onConfirm  () => void
// onSaveAsNew  () => void
// @end

// @component ManageModal
// @description Full-screen modal for browsing, applying, editing, duplicating, and deleting templates.
// @example
// <ManageModal
//   templates={templates}
//   activeId={activeId}
//   onClose={() => setManageOpen(false)}
//   onApply={id => applyTemplate(id)}
//   onEdit={id => openEditDialog(id)}
//   onDuplicate={id => duplicate(id)}
//   onDelete={id => confirmDelete(id)}
//   onSetDefault={id => setDefault(id)}
//   onCreate={() => { setManageOpen(false); openSaveDialog(); }}
// />
// @props
// templates  array of template objects
// activeId   string — currently applied template id
// onClose    () => void
// onApply    (id) => void
// onEdit     (id) => void
// onDuplicate  (id) => void
// onDelete   (id) => void
// onSetDefault  (id) => void
// onCreate   () => void — opens the save-as-new flow
// @end

// @component DeleteConfirm
// @description Destructive confirmation modal. CTA and copy are fully customisable.
// @example
// <DeleteConfirm
//   template={templateToDelete}
//   onClose={() => setDeleteTarget(null)}
//   onConfirm={() => confirmDelete()}
// />
//
// <DeleteConfirm
//   template={item}
//   confirmLabel="Remove forever"
//   title={\`Delete "\${item.name}"?\`}
//   message="This cannot be undone."
//   onClose={handleClose}
//   onConfirm={handleConfirm}
// />
// @props
// template      { name, usageCount } — used in default title / message copy
// confirmLabel  string — CTA button text (default 'Delete template')
// title         string — overrides the default title
// message       string|ReactNode — overrides the default body copy
// onClose       () => void
// onConfirm     () => void
// @end

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
`,db=`// Step 3 body — Producer Team table + Additional Information block.
// Mirrors the screenshot. Edits flow up via props so the parent can detect dirty state.

// @component CollapsibleSection
// @description Collapsible card section with an optional unsaved-changes amber dot.
// @example
// <CollapsibleSection title="Accounts in proposal" defaultOpen modified={false}>
//   {/* content */}
// </CollapsibleSection>
// @props
// title        string — section heading
// defaultOpen  boolean — initial open state (default true)
// modified     boolean — shows amber dot when true
// children     ReactNode
// @end

// @component EditableField
// @description Inline-editable label/textarea with unsaved-changes indicator.
// @example
// <EditableField
//   label="About Us"
//   value={agency.aboutUs}
//   multiline
//   modified={modified.aboutUs}
//   onChange={val => setAgency(a => ({ ...a, aboutUs: val }))}
// />
// @props
// label     string
// value     string
// multiline  boolean — textarea vs single-line input
// modified  boolean — shows amber dot when true
// onChange  (value: string) => void
// @end

// @component Step3Body
// @description The full Step 3 form body — producer tables + agency information fields.
// @example
// <Step3Body
//   producerTables={producerTables}
//   agency={agency}
//   onProducerTablesChange={setProducerTables}
//   onAgencyChange={setAgency}
//   modified={modified}
// />
// @props
// producerTables           array of producer table objects
// agency                   { agencyName, aboutUs, disclosures, serviceSummary, logoFile }
// onProducerTablesChange   (tables) => void
// onAgencyChange           (agency) => void
// modified                 { producers, tables: { [id]: bool }, agencyName, aboutUs, disclosures, serviceSummary, logoFile }
// @end

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
`,fb=P2.replace(/@font-face\s*\{[^}]*\}/g,""),pb=`
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
<\/script>`;function hb(s){return`<!doctype html>
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
  <style>${fb}</style>
  <style>${W2}</style>
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
  ${pb}
</head>
<body>
  <div id="root"></div>
  <div id="__err"></div>
  <script type="text/babel">
${eb}
  <\/script>
  <script type="text/babel">
${tb}
  <\/script>
  <script type="text/babel">
${nb}
  <\/script>
  <script type="text/babel">
${ab}
  <\/script>
  <script type="text/babel">
${lb}
  <\/script>
  <script type="text/babel">
${ib}
  <\/script>
  <script type="text/babel">
${sb}
  <\/script>
  <script type="text/babel">
${ob}
  <\/script>
  <script type="text/babel">
${rb}
  <\/script>
  <script type="text/babel">
${cb}
  <\/script>
  <script type="text/babel">
${ub}
  <\/script>
  <script type="text/babel">
${db}
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
</html>`}function mb({code:s,prd:l,onInitDesign:i}){const o=h.useRef(null),[u,d]=h.useState("preview"),[f,m]=h.useState("#/"),[g,v]=h.useState("#/"),[x,S]=h.useState(["#/"]),[T,A]=h.useState(0);h.useEffect(()=>{function G($){var I;if(((I=$.data)==null?void 0:I.type)!=="__route")return;const X=$.data.path||"#/";m(X),v(X),S(F=>{const q=F.slice(0,T+1);return q[q.length-1]===X?q:[...q,X]}),A(F=>F+1)}return window.addEventListener("message",G),()=>window.removeEventListener("message",G)},[T]),h.useEffect(()=>{!o.current||!s||(m("#/"),v("#/"),S(["#/"]),A(0),o.current.srcdoc=hb(s))},[s]);function k(G){var $,X,I,F,q;(X=($=o.current)==null?void 0:$.contentWindow)==null||X.postMessage({type:"__navigate",path:G},"*");try{(I=o.current)!=null&&I.contentWindow&&((q=(F=o.current.contentWindow).__navigate)==null||q.call(F,G))}catch{}}function M(){if(T<=0)return;const G=x[T-1];A($=>$-1),m(G),v(G),k(G)}function B(){if(T>=x.length-1)return;const G=x[T+1];A($=>$+1),m(G),v(G),k(G)}function Z(G){G.preventDefault(),k(g)}return s?b.jsxs("div",{className:"canvas canvas--live",children:[b.jsxs("div",{className:"canvas-toolbar",children:[b.jsxs("div",{className:"canvas-view-tabs",children:[b.jsx("button",{className:`canvas-view-tab ${u==="preview"?"active":""}`,onClick:()=>d("preview"),children:"Preview"}),b.jsx("button",{className:`canvas-view-tab ${u==="code"?"active":""}`,onClick:()=>d("code"),children:"Code"})]}),u==="preview"&&b.jsxs("div",{className:"canvas-urlbar",children:[b.jsx("button",{className:"canvas-nav-btn",onClick:M,disabled:T<=0,title:"Back",children:"←"}),b.jsx("button",{className:"canvas-nav-btn",onClick:B,disabled:T>=x.length-1,title:"Forward",children:"→"}),b.jsx("form",{className:"canvas-url-form",onSubmit:Z,children:b.jsx("input",{className:"canvas-url-input",value:g,onChange:G=>v(G.target.value),spellCheck:!1})})]}),b.jsx("button",{className:"canvas-copy-btn",onClick:()=>navigator.clipboard.writeText(s),children:"copy"})]}),b.jsxs("div",{className:"canvas-body",children:[b.jsx("iframe",{ref:o,className:"canvas-iframe",style:{display:u==="preview"?"block":"none"},title:"design preview",sandbox:"allow-scripts allow-same-origin"}),u==="code"&&b.jsx("pre",{className:"canvas-code",children:b.jsx("code",{children:s})})]})]}):b.jsx("div",{className:"canvas canvas--empty",children:l?b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"canvas-empty-icon",children:"✦"}),b.jsx("p",{className:"canvas-empty-title",children:l.name}),b.jsx("span",{className:"canvas-empty-sub",children:"PRD loaded — ready to generate"}),b.jsx("button",{className:"canvas-init-btn",onClick:i,children:"Init Design"})]}):b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"canvas-empty-icon",children:"◎"}),b.jsx("p",{className:"canvas-empty-title",children:"No PRD loaded"}),b.jsx("span",{className:"canvas-empty-sub",children:"Open a PRD from Projects to start"})]})})}const Op="ennabl_builder_history",gb=50;function bb(){try{return JSON.parse(localStorage.getItem(Op)||"[]")}catch{return[]}}function G1(s){localStorage.setItem(Op,JSON.stringify(s.slice(0,gb)))}function vb({prdName:s,code:l,iteration:i}){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,timestamp:new Date().toISOString(),prdName:s,code:l,iteration:i}}function yb(s){const i=`${s.prdName.replace(/\.md$/i,"").replace(/[^a-z0-9]/gi,"-").toLowerCase()}-v${s.iteration}.jsx`,o=`/**
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
`,u=new Blob([o],{type:"text/plain"}),d=URL.createObjectURL(u);Object.assign(document.createElement("a"),{href:d,download:i}).click(),URL.revokeObjectURL(d)}function xb(s){const l=Math.floor((Date.now()-new Date(s))/6e4);if(l<1)return"just now";if(l<60)return`${l}m ago`;const i=Math.floor(l/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}function Sb(s){return s.split(`
`).slice(0,3).join(`
`).slice(0,140)}function wb({entries:s,onClear:l}){const[i,o]=h.useState(null);function u(d){navigator.clipboard.writeText(d.code),o(d.id),setTimeout(()=>o(null),2e3)}return s.length===0?b.jsxs("div",{className:"sb-empty",children:[b.jsx("p",{children:"No components yet"}),b.jsx("span",{children:"Each generated UI is logged here. Download or copy the JSX to use in your codebase."})]}):b.jsxs("div",{className:"sb-tab",children:[b.jsxs("div",{className:"sb-toolbar",children:[b.jsxs("span",{className:"sb-count",children:[s.length," snapshot",s.length!==1?"s":""]}),b.jsx("button",{className:"sb-clear",onClick:l,children:"clear all"})]}),b.jsx("div",{className:"sb-list",children:s.map(d=>b.jsxs("div",{className:"sb-entry",children:[b.jsxs("div",{className:"sb-entry-top",children:[b.jsx("span",{className:"sb-entry-name",children:d.prdName.replace(/\.md$/i,"")}),b.jsxs("span",{className:"sb-entry-badge",children:["v",d.iteration]}),b.jsx("span",{className:"sb-entry-time",children:xb(d.timestamp)})]}),b.jsx("pre",{className:"sb-entry-code",children:Sb(d.code)}),b.jsxs("div",{className:"sb-entry-actions",children:[b.jsx("button",{className:"sb-btn",onClick:()=>u(d),children:i===d.id?"✓ copied":"copy"}),b.jsx("button",{className:"sb-btn sb-btn--primary",onClick:()=>yb(d),children:"↓ .jsx"})]})]},d.id))})]})}function Cb({entries:s}){return b.jsx("div",{className:"figma-tab",children:b.jsxs("div",{className:"figma-coming",children:[b.jsx("div",{className:"figma-icon",children:"◈"}),b.jsx("p",{children:"Figma sync"}),b.jsx("span",{children:"Will push each generated component into your Figma file as a frame — auto-named by PRD and iteration, grouped in a dedicated page. Requires a Figma access token."}),b.jsx("div",{className:"figma-queue",children:s.length>0?b.jsxs(b.Fragment,{children:[b.jsxs("span",{className:"figma-queue-label",children:[s.length," snapshot",s.length!==1?"s":""," queued"]}),b.jsx("button",{className:"figma-btn",disabled:!0,children:"Connect Figma to push"})]}):b.jsx("span",{className:"figma-queue-label",children:"Generate a UI first"})})]})})}function Eb({code:s,prd:l,history:i,onHistoryClear:o,onInitDesign:u}){const[d,f]=h.useState("design");return b.jsxs("div",{className:"left-panel",children:[b.jsxs("div",{className:"left-tabs",children:[b.jsx("button",{className:`left-tab ${d==="design"?"left-tab--active":""}`,onClick:()=>f("design"),children:"Design"}),b.jsx("button",{className:`left-tab ${d==="prd"?"left-tab--active":""} ${l?"":"left-tab--disabled"}`,onClick:()=>l&&f("prd"),children:l?l.name:"PRD"}),b.jsxs("button",{className:`left-tab ${d==="storybook"?"left-tab--active":""}`,onClick:()=>f("storybook"),children:["Storybook",i.length>0&&b.jsx("span",{className:"left-tab-count",children:i.length})]}),b.jsx("button",{className:`left-tab ${d==="figma"?"left-tab--active":""}`,onClick:()=>f("figma"),children:"Figma"})]}),b.jsxs("div",{className:"left-content",children:[b.jsx("div",{className:`left-canvas-wrap ${d!=="design"?"left-canvas-wrap--hidden":""}`,children:b.jsx(mb,{code:s,prd:l,onInitDesign:u})}),d==="prd"&&l&&b.jsx("div",{className:"prd-view",dangerouslySetInnerHTML:{__html:Re.parse(l.content)}}),d==="prd"&&!l&&b.jsx("div",{className:"prd-empty",children:"No PRD loaded"}),d==="storybook"&&b.jsx(wb,{entries:i,onClear:o}),d==="figma"&&b.jsx(Cb,{entries:i})]})]})}const wu="ennabl_builder_api_key",zp=()=>localStorage.getItem(wu)||"",Ab=s=>localStorage.setItem(wu,s.trim()),Nb=()=>localStorage.removeItem(wu),Lp="ennabl_builder_email",$c=()=>localStorage.getItem(Lp)||"",Tb=s=>localStorage.setItem(Lp,s),_p="ennabl_builder_theme",kb=()=>localStorage.getItem(_p)||"dark",Db=s=>localStorage.setItem(_p,s),Up="ennabl_builder_model",Mb=[{id:"claude-haiku-4-5-20251001",label:"Haiku",note:"dev / fast"},{id:"claude-sonnet-4-6",label:"Sonnet",note:"balanced"},{id:"claude-opus-4-7",label:"Opus",note:"prod / best"}],Rb="claude-haiku-4-5-20251001",Hp=()=>localStorage.getItem(Up)||Rb,jb=s=>localStorage.setItem(Up,s),Ob=`# ennabl Design Tokens

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
`,zb=`# ennabl Component Patterns

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
`,Lb=`<!-- AUTO-GENERATED — do not edit by hand -->
<!-- Edit @component blocks in design-system/_shared/*.jsx, then: npm run build (in builder/) -->
<!-- source-hash: a53acb61ba411da8 -->
<!-- file:Avatar.jsx:b417bed930e6 -->
<!-- file:Chip.jsx:72c8bb1c7f41 -->
<!-- file:Dialog.jsx:7b10e587e006 -->
<!-- file:Select.jsx:875f1d92a9e3 -->
<!-- file:Stepper.jsx:e41eaa47276a -->
<!-- file:Toggle.jsx:a93069dd6111 -->
<!-- file:Tooltip.jsx:82d5bb2a192f -->
<!-- file:dialogs.jsx:492a0d6fdecc -->
<!-- file:icons.jsx:1cd927681c04 -->
<!-- file:picker.jsx:49b432325ef5 -->
<!-- file:step3.jsx:aff25accb872 -->
<!-- file:ui.jsx:3a9eef5ceffc -->

# ennabl Shared Components

These components are available as globals in the preview. Use them directly — no imports needed.

---

## Avatar

Initials circle with 3 sizes. Defaults to purple (--en-data-accounts).

\`\`\`jsx
<Avatar name="Ismael Viejo" size="md" />
<Avatar name="John" size="sm" />
<Avatar name="Alice" size="lg" color="var(--en-primary)" />
\`\`\`

Props:
- \`name\` string — split into initials (max 2 chars)
- \`size\` 'sm' (24px) | 'md' (32px) | 'lg' (40px) — default 'md'
- \`color\` CSS color string — defaults to var(--en-data-accounts)

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
- \`variant\` 'neutral'|'primary'|'success'|'error'|'warning' — default 'neutral'
- \`style\` 'subtle' (outline tint) | 'filled' (solid) | 'dot' (tint + trailing dot) — default 'subtle'
- \`dot\` boolean — shorthand for style="dot"
- \`dismissible\` boolean — shows × button
- \`onDismiss\` () => void — called when × is clicked

---

## Dialog

Modal overlay with title, subtitle, content slot, and optional footer row. Handles Escape key, X button, and backdrop click automatically.

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
- \`open\` boolean — controls visibility
- \`onClose\` () => void — called on Escape, X button, and backdrop click
- \`title\` string
- \`subtitle\` string (optional)
- \`footer\` ReactNode (optional) — right-aligned action buttons
- \`width\` number — dialog width in px (default 480)

---

## Select

Dropdown input with label, error state, and option list. Supports string arrays or value/label objects.

\`\`\`jsx
<Select
  label="Policy type"
  options={['Commercial', 'Personal', 'Benefits']}
  placeholder="Select type..."
  onChange={val => setType(val)}
/>

<Select
  label="Market"
  options={[{ value: 'wholesale', label: 'Wholesale' }, { value: 'retail', label: 'Retail' }]}
  value={market}
  onChange={setMarket}
/>
\`\`\`

Props:
- \`label\` string
- \`options\` string[] or { value, label }[]
- \`placeholder\` string — default 'Select option...'
- \`value\` string — controlled value
- \`onChange\` (value) => void
- \`error\` string — shows red border and error text below
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
- \`steps\` array of { label: string, status: 'completed'|'active'|'upcoming' }

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
- \`defaultChecked\` boolean — initial value when uncontrolled
- \`onChange\` (value: boolean) => void
- \`label\` string — shown to the right of the switch
- \`disabled\` boolean

---

## Tooltip

Dark tooltip shown on hover. Wrap any element — no positioning needed.

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
- \`description\` string (optional) — secondary line below the label
- \`position\` 'top'|'bottom'|'left'|'right' — default 'top'

---

## SaveTemplateDialog

Modal for creating, editing, or forking a named template.

\`\`\`jsx
<SaveTemplateDialog
  mode="create"
  initial={{ name: '', description: '', isDefault: false, shared: true }}
  templates={templates}
  onClose={() => setDialog(null)}
  onSubmit={vals => handleSave(vals)}
/>
\`\`\`

Props:
- \`mode\` 'create'|'edit'|'fork'
- \`initial\` { name, description, isDefault, shared }
- \`templates\` array — used for duplicate-name warning
- \`onClose\` () => void
- onSubmit ({ name, description, isDefault, shared }) => void

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

Props:
- \`template\` { name } — the template being updated
- \`summary\` string[] — bullet list of changes shown in the dialog
- \`onClose\` () => void
- \`onConfirm\` () => void
- \`onSaveAsNew\` () => void

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

Props:
- \`templates\` array of template objects
- \`activeId\` string — currently applied template id
- \`onClose\` () => void
- \`onApply\` (id) => void
- \`onEdit\` (id) => void
- \`onDuplicate\` (id) => void
- \`onDelete\` (id) => void
- \`onSetDefault\` (id) => void
- \`onCreate\` () => void — opens the save-as-new flow

---

## DeleteConfirm

Destructive confirmation modal. CTA and copy are fully customisable.

\`\`\`jsx
<DeleteConfirm
  template={templateToDelete}
  onClose={() => setDeleteTarget(null)}
  onConfirm={() => confirmDelete()}
/>

<DeleteConfirm
  template={item}
  confirmLabel="Remove forever"
  title={\`Delete "\${item.name}"?\`}
  message="This cannot be undone."
  onClose={handleClose}
  onConfirm={handleConfirm}
/>
\`\`\`

Props:
- \`template\` { name, usageCount } — used in default title / message copy
- \`confirmLabel\` string — CTA button text (default 'Delete template')
- \`title\` string — overrides the default title
- \`message\` string|ReactNode — overrides the default body copy
- \`onClose\` () => void
- \`onConfirm\` () => void

---

## TemplatePicker

Dropdown picker for selecting and managing named templates. Includes search, default-star, and per-row actions.

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

Props:
- \`templates\` array of { id, name, description, isDefault, shared, owner: { name, initials, isYou }, updatedAt, usageCount }
- \`activeId\` string — id of the currently applied template
- \`isDirty\` boolean — shows unsaved-changes indicator on the trigger
- \`onApply\` (id) => void
- \`onSaveAsNew\` () => void — opens save-as-new dialog
- onManageOpen () => void — opens ManageModal
- \`onEdit\` (id) => void
- onSetDefault (id) => void
- \`onDuplicate\` (id) => void
- \`onDelete\` (id) => void

---

## CollapsibleSection

Collapsible card section with an optional unsaved-changes amber dot.

\`\`\`jsx
<CollapsibleSection title="Accounts in proposal" defaultOpen modified={false}>
  {/* content */}
</CollapsibleSection>
\`\`\`

Props:
- \`title\` string — section heading
- \`defaultOpen\` boolean — initial open state (default true)
- \`modified\` boolean — shows amber dot when true
- \`children\` ReactNode

---

## EditableField

Inline-editable label/textarea with unsaved-changes indicator.

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
- \`multiline\` boolean — textarea vs single-line input
- \`modified\` boolean — shows amber dot when true
- \`onChange\` (value: string) => void

---

## Step3Body

The full Step 3 form body — producer tables + agency information fields.

\`\`\`jsx
<Step3Body
  producerTables={producerTables}
  agency={agency}
  onProducerTablesChange={setProducerTables}
  onAgencyChange={setAgency}
  modified={modified}
/>
\`\`\`

Props:
- \`producerTables\` array of producer table objects
- \`agency\` { agencyName, aboutUs, disclosures, serviceSummary, logoFile }
- \`onProducerTablesChange\` (tables) => void
- \`onAgencyChange\` (agency) => void
- \`modified\` { producers, tables: { [id]: bool }, agencyName, aboutUs, disclosures, serviceSummary, logoFile }

---

## Button

Canonical button. Use instead of bare <button className="btn ..."> for consistent loading + disabled states.

\`\`\`jsx
<Button variant="primary" onClick={save}>Save changes</Button>
<Button variant="secondary" icon={<IconPlus size={14} />}>Add row</Button>
<Button variant="text">Cancel</Button>
<Button variant="danger">Delete</Button>
<Button variant="primary" loading={saving}>Saving…</Button>
<Button variant="icon" onClick={edit}><IconEdit size={16} /></Button>
<Button variant="secondary" size="sm">Small</Button>
\`\`\`

Props:
- \`variant\` 'primary'|'secondary'|'text'|'danger'|'icon'|'link' — default 'primary'
- \`size\` 'sm' — smaller padding variant
- \`loading\` boolean — shows spinner, disables interaction
- \`disabled\` boolean
- \`icon\` ReactNode — shown left of label (hidden when loading)
- \`className\` string — extra classes appended to the button
- ...also accepts all standard <button> props (onClick, type, form, etc.)

---

## FormField

Label + input wrapper with hint and error states. Always wrap Input inside FormField.

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
- \`hint\` string — shown below input when there is no error
- \`error\` string — shown in red below input (takes priority over hint)
- \`htmlFor\` string — links the label to an input id

---

## Input

Styled text input or textarea. Use inside FormField for label and error display.

\`\`\`jsx
<Input value={v} onChange={e => setV(e.target.value)} placeholder="Search…" />
<Input multiline value={v} onChange={e => setV(e.target.value)} rows={3} />
<Input error value={v} onChange={e => setV(e.target.value)} />
\`\`\`

Props:
- \`multiline\` boolean — renders <textarea> instead of <input>
- \`error\` boolean — applies red border and focus ring
- ...accepts all standard <input> / <textarea> props (value, onChange, placeholder, rows, etc.)

---

## Table

Data table with optional sorting, row actions, and empty state. Always use this instead of raw <table> HTML.

\`\`\`jsx
const columns = [
  { key: 'name',   label: 'Account', sortable: true, width: '40%' },
  { key: 'status', label: 'Status',  render: row => <Badge variant={row.active ? 'success' : 'default'}>{row.active ? 'Active' : 'Inactive'}</Badge> },
  { key: 'date',   label: 'Updated' },
]

<Table
  columns={columns}
  rows={data}
  sortKey={sortKey}
  sortDir={sortDir}
  onSort={(key, dir) => { setSortKey(key); setSortDir(dir) }}
  emptyState={<span>No results</span>}
  getRowActions={row => (
    <>
      <Button variant="icon" onClick={() => edit(row)}><IconEdit size={14} /></Button>
      <Button variant="icon" onClick={() => del(row)}><IconTrash size={14} /></Button>
    </>
  )}
/>
\`\`\`

Props:
- \`columns\` array of { key, label, sortable?, width?, render?(row)=>node }
- \`rows\` array of objects — include an \`id\` field for stable React keys
- \`sortKey\` string — key of the currently sorted column
- \`sortDir\` 'asc' | 'desc' — current sort direction
- \`onSort\` (key, dir) => void — called when a sortable header is clicked
- \`getRowActions\` (row) => ReactNode — renders right-aligned action buttons per row
- \`emptyState\` ReactNode — shown when rows is empty (default: "No data")
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
- \`variant\` 'default'|'primary'|'success'|'warning'|'error' — default 'default'
- \`icon\` ReactNode — shown left of the text label

---

## Usage notes

- All shared components use global React (\`const { useState } = React\` — no imports)
- All shared components use the ennabl CSS classes and \`--en-*\` variables
- Wrap dialogs/modals in a fragment after the main content — they render to fixed position overlays
- The \`Scrim\` component is the modal backdrop — used internally by dialogs, rarely needed directly
`,_b=`You are an expert UI engineer for ennabl, an insurance analytics platform for insurance agencies and brokers.

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

${Ob}

## Component patterns

${zb}

## Shared components (available as globals in the preview)

${Lb}

## Context

The generated code runs inside a Vite + React app. The ennabl design system CSS (colors_and_type.css + styles.css) is already loaded globally — you can use all \`--en-*\` variables and \`.en-*\` classes directly without importing them.`,Ub="https://api.anthropic.com/v1/messages";function Hb(s){return s==="claude-opus-4-7"?{max_tokens:8192,thinking:{type:"enabled",budget_tokens:5e3}}:{max_tokens:8192}}async function Zb({messages:s,onText:l,onDone:i}){var x,S,T,A,k,M,B;const o=Hp(),u=await fetch(Ub,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":zp(),"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:o,...Hb(o),system:[{type:"text",text:_b,cache_control:{type:"ephemeral"}}],messages:s,stream:!0})});if(!u.ok){const Z=await u.json().catch(()=>({}));throw new Error(((x=Z.error)==null?void 0:x.message)||`API error ${u.status}`)}const d=u.body.getReader(),f=new TextDecoder;let m=0,g=0,v=0;for(;;){const{done:Z,value:G}=await d.read();if(Z)break;const $=f.decode(G).split(`
`);for(const X of $){if(!X.startsWith("data: "))continue;const I=X.slice(6).trim();if(!(!I||I==="[DONE]"))try{const F=JSON.parse(I);F.type==="message_start"&&(m=((T=(S=F.message)==null?void 0:S.usage)==null?void 0:T.input_tokens)??0,v=((k=(A=F.message)==null?void 0:A.usage)==null?void 0:k.cache_read_input_tokens)??0),F.type==="content_block_delta"&&((M=F.delta)==null?void 0:M.type)==="text_delta"&&l(F.delta.text),F.type==="message_delta"&&(g=((B=F.usage)==null?void 0:B.output_tokens)??0)}catch{}}}i({inputTokens:m,outputTokens:g,cacheReadTokens:v})}const Zp="ennabl_builder_reports",Kc={input:15/1e6,output:75/1e6,cacheRead:1.5/1e6};function Bb({inputTokens:s=0,outputTokens:l=0,cacheReadTokens:i=0}){return Math.max(0,s-i)*Kc.input+i*Kc.cacheRead+l*Kc.output}function qb(s){return{id:`s_${Date.now()}`,prdName:s,startedAt:new Date().toISOString(),iterations:0,inputTokens:0,outputTokens:0,cacheReadTokens:0,cost:0,componentsUsed:[],rating:null,accepted:!1}}function Bp(){try{return JSON.parse(localStorage.getItem(Zp)||"{}")}catch{return{}}}function Vb(s){localStorage.setItem(Zp,JSON.stringify(s))}function su(s){const l=Bp(),i=s.prdName;l[i]||(l[i]=[]);const o=l[i].findIndex(u=>u.id===s.id);o>=0?l[i][o]=s:l[i].unshift(s),Vb(l)}function Fc(s){return Bp()[s]||[]}function Ib(s){return s?["CollapsibleSection","EditableField","TemplatePicker","SaveTemplateDialog","UpdateTemplateDialog","ManageModal","DeleteConfirm","Step3Body","ProducerTable"].filter(i=>s.includes(i)):[]}function Yb(s){if(!s.length)return null;const l=s.filter(i=>i.accepted&&i.iterations<=2).length;return Math.round(l/s.length*100)}const Gb=new Set(["--en-primary","--en-primary-light","--en-primary-dark","--en-action-hover","--en-outlined-hover","--en-fg","--en-fg-secondary","--en-fg-disabled","--en-bg","--en-bg-grey","--en-bg-dark-grey","--en-bg-hover","--en-bg-active","--en-secondary","--en-secondary-dark","--en-border","--en-divider","--en-error","--en-error-dark","--en-success","--en-warning","--en-warning-dark","--en-icon","--en-icon-secondary","--en-sidebar","--en-logo-primary","--en-logo-accent","--en-radius-sm","--en-radius","--en-radius-regular","--en-radius-medium","--en-radius-large","--en-radius-xl","--en-shadow-menu","--en-shadow-tooltip","--en-shadow-card-hover","--en-duration-short","--en-easing","--en-font-sans"]),Xb=new Set(["en-h3","en-h4","en-h5","en-body1","en-body1-bold","en-body2","en-body2-bold","en-body3","en-body3-bold","en-subtitle1","en-subtitle2","en-subtitle3","en-overline","en-caption","en-table-header","en-table-text"]),Qb=new Set(["IconCheck","IconChevronDown","IconChevronUp","IconClose","IconCopy","IconDownload","IconEdit","IconEditFill","IconExternal","IconGear","IconInfo","IconMore","IconPlus","IconRevert","IconSearch","IconShare","IconStar","IconTrash","IconTrashFill","IconUpload","IconUsers"]);function $b(s){const l=[],i=[...s.matchAll(/var\((--en-[a-z0-9-]+)/g)].map(m=>m[1]);[...new Set(i)].filter(m=>!Gb.has(m)).forEach(m=>l.push({type:"token",msg:`unknown token ${m}`}));const o=[...s.matchAll(/className="([^"]+)"/g)].flatMap(m=>m[1].split(/\s+/)).filter(m=>m.startsWith("en-"));[...new Set(o)].filter(m=>!Xb.has(m)).forEach(m=>l.push({type:"class",msg:`unknown class .${m}`}));const u=[...s.matchAll(/<(Icon[A-Z][A-Za-z]*)/g)].map(m=>m[1]);[...new Set(u)].filter(m=>!Qb.has(m)).forEach(m=>l.push({type:"icon",msg:`unknown icon <${m} />`}));const d=s.replace(/\/\/.*$/gm,"").replace(/\/\*[\s\S]*?\*\//g,"");return[...new Set([...d.matchAll(/#[0-9A-Fa-f]{6}\b/g)].map(m=>m[0]))].forEach(m=>l.push({type:"color",msg:`raw color ${m} — use --en-* var`})),{ok:l.length===0,issues:l}}function Kb(s){const l=s.match(/```(?:jsx?|tsx?|javascript|typescript)?\n([\s\S]*?)```/);return l?l[1].trim():null}function Fb({prd:s,messages:l,setMessages:i,onCodeGenerated:o,onSwitchToPrd:u,onIterationComplete:d,initTrigger:f}){const[m,g]=h.useState(""),[v,x]=h.useState(!1),[S,T]=h.useState(Hp),A=h.useRef(null),k=h.useRef(null);h.useEffect(()=>{var Z;(Z=A.current)==null||Z.scrollIntoView({behavior:"smooth"})},[l]),h.useEffect(()=>{f>0&&s&&!v&&l.length===0&&M("Build a complete UI from this PRD.")},[f]);async function M(Z){const G=(Z??m).trim();if(!G||v)return;const $={role:"user",content:G},X=s?`

---
PRD: ${s.name}

${s.content}
---
`:"",I=l.map(({role:q,content:te})=>({role:q,content:te})),F=[...s&&l.length===0?[{role:"user",content:`${X}
${G}`}]:[...I,$]];i(q=>[...q,$]),Z||g(""),x(!0),i(q=>[...q,{role:"assistant",content:""}]);try{let q="",te=null;await Zb({messages:F,onText:pe=>{q+=pe,i(de=>{const me=[...de];return me[me.length-1]={role:"assistant",content:q},me})},onDone:pe=>{te=pe}});const ue=Kb(q);if(ue){const pe=q.replace(/```[\s\S]*?```/g,"").trim();o(ue,pe);const de=$b(ue);i(me=>{const Ae=[...me];return Ae[Ae.length-1]={...Ae[Ae.length-1],validation:de},Ae})}if(d){const pe=te||{};d({inputTokens:pe.inputTokens||0,outputTokens:pe.outputTokens||0,cacheReadTokens:pe.cacheReadTokens||0,componentsUsed:Ib(ue)})}}catch(q){i(te=>{const ue=[...te];return ue[ue.length-1]={role:"assistant",content:`Error: ${q.message}`},ue})}finally{x(!1)}}function B(Z){Z.key==="Enter"&&!Z.shiftKey&&(Z.preventDefault(),M())}return b.jsxs("div",{className:"chat-panel",children:[b.jsxs("div",{className:"chat-messages",children:[l.length===0&&b.jsx("div",{className:"chat-empty",children:s?b.jsx(b.Fragment,{children:"PRD loaded. Describe the UI you want to build."}):b.jsx(b.Fragment,{children:"Load a PRD first, then describe what to build."})}),l.map((Z,G)=>{const $=v&&Z.role==="assistant"&&G===l.length-1;return b.jsx("div",{className:`chat-msg chat-msg--${Z.role}`,children:Z.role==="assistant"?$?b.jsx(Jb,{}):b.jsx(Pb,{content:Z.content,validation:Z.validation}):b.jsx("span",{children:Z.content})},G)}),b.jsx("div",{ref:A})]}),b.jsxs("div",{className:"chat-input-area",children:[b.jsx("div",{className:"chat-model-row",children:Mb.map(Z=>b.jsx("button",{className:`chat-model-btn ${S===Z.id?"chat-model-btn--active":""}`,onClick:()=>{T(Z.id),jb(Z.id)},title:Z.note,children:Z.label},Z.id))}),b.jsxs("div",{className:"chat-input-row",children:[b.jsx("textarea",{ref:k,className:"chat-input",placeholder:s?`Build from ${s.name}…`:"Load a PRD first…",value:m,onChange:Z=>g(Z.target.value),onKeyDown:B,disabled:!s||v,rows:3}),b.jsx("button",{className:"chat-send-btn",onClick:M,disabled:!s||!m.trim()||v,children:v?b.jsx("span",{className:"chat-spinner"}):"↑"})]})]})]})}const X1=[{icon:"✦",verb:"Reading PRD"},{icon:"◎",verb:"Mapping structure"},{icon:"⚡",verb:"Designing layout"},{icon:"⬡",verb:"Building components"},{icon:"↑",verb:"Writing code"},{icon:"✦",verb:"Polishing output"}];function Jb(){const[s,l]=h.useState(0);h.useEffect(()=>{const u=setInterval(()=>l(d=>(d+1)%X1.length),2e3);return()=>clearInterval(u)},[]);const{icon:i,verb:o}=X1[s];return b.jsxs("div",{className:"thinking-bubble",children:[b.jsx("span",{className:"thinking-icon",children:i},s),b.jsx("span",{className:"thinking-verb",children:o},o),b.jsxs("span",{className:"thinking-dots",children:[b.jsx("span",{}),b.jsx("span",{}),b.jsx("span",{})]})]})}function Pb({content:s,validation:l}){if(/```/.test(s)){const o=s.replace(/```[\s\S]*?```/g,"").trim();return b.jsxs("div",{className:"chat-done-card",children:[b.jsx("span",{className:"chat-done-icon",children:"✓"}),b.jsxs("div",{children:[b.jsx("div",{className:"chat-done-title",children:"Design ready"}),o&&b.jsx("div",{className:"chat-done-sub",children:o}),l&&b.jsxs("div",{className:`chat-done-validation ${l.ok?"chat-done-validation--ok":"chat-done-validation--warn"}`,children:[l.ok?"✓ tokens clean":l.issues.slice(0,4).map((u,d)=>b.jsxs("div",{children:["⚠ ",u.msg]},d)),l&&!l.ok&&l.issues.length>4&&b.jsxs("div",{children:["+",l.issues.length-4," more"]})]})]})]})}return b.jsx("div",{className:"chat-msg-content",children:s})}function Wb({value:s,onChange:l}){const[i,o]=h.useState(null);return b.jsx("div",{className:"stars",children:[1,2,3,4,5].map(u=>b.jsx("button",{className:`star-btn ${u<=(i??s??0)?"star-btn--on":""}`,onMouseEnter:()=>o(u),onMouseLeave:()=>o(null),onClick:()=>l(u),"aria-label":`Rate ${u} star${u>1?"s":""}`,children:"★"},u))})}function Q1(s){return s>=1e3?`${(s/1e3).toFixed(1)}k`:String(s)}function $1(s){return s<.01?"<$0.01":`$${s.toFixed(2)}`}function e8(s){const l=new Date(s),i=new Date;if(l.toDateString()===i.toDateString())return"today";const o=Math.floor((i-l)/864e5);return o===1?"yesterday":o<7?`${o}d ago`:l.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function t8({session:s,prd:l,onSessionUpdate:i}){const[o,u]=h.useState([]);if(h.useEffect(()=>{l&&u(Fc(l.name))},[l,s]),!l)return b.jsx("div",{className:"report-empty",children:"Load a PRD to see reports."});const d=Yb(o),f=o.length;o.some(x=>x.id===(s==null?void 0:s.id));function m(x){const S={...s,rating:x};i(S),su(S),u(Fc(l.name))}function g(){const x={...s,accepted:!0};i(x),su(x),u(Fc(l.name))}const v=o.filter(x=>x.id!==(s==null?void 0:s.id));return b.jsxs("div",{className:"report-tab",children:[s&&b.jsxs("section",{className:"report-section",children:[b.jsxs("div",{className:"report-section-label",children:["Current session",s.accepted&&b.jsx("span",{className:"report-badge report-badge--green",children:"Accepted"})]}),b.jsxs("div",{className:"report-metrics",children:[b.jsxs("div",{className:"report-metric",children:[b.jsx("span",{className:"report-metric-value",children:s.iterations}),b.jsx("span",{className:"report-metric-label",children:"iterations"}),s.iterations<=2&&s.iterations>0&&b.jsx("span",{className:"report-badge report-badge--green",children:"≤2 ✓"})]}),b.jsxs("div",{className:"report-metric",children:[b.jsx("span",{className:"report-metric-value",children:Q1(s.inputTokens+s.outputTokens)}),b.jsx("span",{className:"report-metric-label",children:"tokens"})]}),b.jsxs("div",{className:"report-metric",children:[b.jsx("span",{className:"report-metric-value",children:$1(s.cost)}),b.jsx("span",{className:"report-metric-label",children:"cost"})]})]}),s.cacheReadTokens>0&&b.jsxs("div",{className:"report-cache-note",children:[Q1(s.cacheReadTokens)," tokens from cache"]}),s.componentsUsed.length>0&&b.jsxs("div",{className:"report-components",children:[b.jsx("span",{className:"report-components-label",children:"Components used"}),b.jsx("div",{className:"report-chips",children:s.componentsUsed.map(x=>b.jsx("span",{className:"report-chip",children:x},x))})]}),b.jsxs("div",{className:"report-rating-row",children:[b.jsx("span",{className:"report-rating-label",children:"Rate this design"}),b.jsx(Wb,{value:s.rating,onChange:m})]}),!s.accepted&&b.jsx("button",{className:"report-accept-btn",onClick:g,disabled:s.iterations===0,children:"✓ Accept design"})]}),f>0&&b.jsxs("section",{className:"report-section",children:[b.jsxs("div",{className:"report-section-label",children:["This PRD · ",f," session",f>1?"s":""]}),b.jsx("div",{className:"report-summary",children:d!==null&&b.jsxs("div",{className:"report-metric",children:[b.jsxs("span",{className:"report-metric-value report-metric-value--lg",children:[d,"%"]}),b.jsx("span",{className:"report-metric-label",children:"accepted in ≤2 iterations"})]})})]}),v.length>0&&b.jsxs("section",{className:"report-section",children:[b.jsx("div",{className:"report-section-label",children:"History"}),b.jsx("div",{className:"report-history",children:v.map(x=>b.jsxs("div",{className:"report-history-row",children:[b.jsxs("div",{className:"report-history-left",children:[b.jsx("span",{className:"report-history-date",children:e8(x.startedAt)}),b.jsxs("span",{className:"report-history-iter",children:[x.iterations," iter",x.iterations!==1?"s":""]}),x.accepted&&b.jsx("span",{className:"report-badge report-badge--green",children:"✓"}),x.iterations<=2&&x.accepted&&b.jsx("span",{className:"report-badge report-badge--blue",children:"≤2"})]}),b.jsxs("div",{className:"report-history-right",children:[x.rating&&b.jsxs("span",{className:"report-history-stars",children:["★".repeat(x.rating),"☆".repeat(5-x.rating)]}),b.jsx("span",{className:"report-history-cost",children:$1(x.cost)})]})]},x.id))})]}),!s&&f===0&&b.jsx("div",{className:"report-empty",children:"Start a chat to begin tracking."})]})}function n8({prd:s,messages:l,setMessages:i,onCodeGenerated:o,onIterationComplete:u,session:d,onSessionUpdate:f,initTrigger:m}){const[g,v]=h.useState("chat");return b.jsxs("div",{className:"right-panel",children:[b.jsxs("div",{className:"right-tabs",children:[b.jsx("button",{className:`right-tab ${g==="chat"?"right-tab--active":""}`,onClick:()=>v("chat"),children:"Chat"}),b.jsxs("button",{className:`right-tab ${g==="report"?"right-tab--active":""}`,onClick:()=>v("report"),children:["Report",(d==null?void 0:d.accepted)&&b.jsx("span",{className:"right-tab-dot right-tab-dot--green"}),d&&!d.accepted&&d.iterations>0&&b.jsx("span",{className:"right-tab-dot"})]})]}),b.jsxs("div",{className:"right-content",children:[b.jsx("div",{className:g!=="chat"?"right-panel-hidden":"",children:b.jsx(Fb,{prd:s,messages:l,setMessages:i,onCodeGenerated:o,onIterationComplete:u,onSwitchToPrd:()=>v("prd"),initTrigger:m})}),g==="report"&&b.jsx(t8,{session:d,prd:s,onSessionUpdate:f})]})]})}function a8({onDone:s}){const[l,i]=h.useState(""),[o,u]=h.useState(null);function d(){const f=l.trim();if(!f.startsWith("sk-ant-")&&!f.startsWith("sk-")){u("Paste your Anthropic API key — it starts with sk-ant-");return}Ab(f),s()}return b.jsx("div",{className:"setup-overlay",children:b.jsxs("div",{className:"setup-card",children:[b.jsxs("div",{className:"setup-logo",children:[b.jsx("span",{className:"setup-logo-name",children:"ennabl"}),b.jsx("span",{className:"setup-logo-suffix",children:"builder"})]}),b.jsxs("p",{className:"setup-desc",children:["Paste your Anthropic API key to get started.",b.jsx("br",{}),"It's stored only in your browser's local storage."]}),b.jsx("label",{className:"setup-label",children:"Anthropic API Key"}),b.jsx("input",{className:"setup-input",type:"password",value:l,onChange:f=>{i(f.target.value),u(null)},onKeyDown:f=>f.key==="Enter"&&d(),placeholder:"sk-ant-...",spellCheck:!1,autoFocus:!0}),o&&b.jsx("p",{className:"setup-error",children:o}),b.jsx("button",{className:"setup-btn",onClick:d,disabled:!l.trim(),children:"Save & continue"})]})})}class vt extends Error{constructor(l){var i,o,u,d;super("ClientResponseError"),this.url="",this.status=0,this.response={},this.isAbort=!1,this.originalError=null,Object.setPrototypeOf(this,vt.prototype),l!==null&&typeof l=="object"&&(this.originalError=l.originalError,this.url=typeof l.url=="string"?l.url:"",this.status=typeof l.status=="number"?l.status:0,this.isAbort=!!l.isAbort||l.name==="AbortError"||l.message==="Aborted",l.response!==null&&typeof l.response=="object"?this.response=l.response:l.data!==null&&typeof l.data=="object"?this.response=l.data:this.response={}),this.originalError||l instanceof vt||(this.originalError=l),this.name="ClientResponseError "+this.status,this.message=(i=this.response)==null?void 0:i.message,this.message||(this.isAbort?this.message="The request was aborted (most likely autocancelled; you can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation).":(d=(u=(o=this.originalError)==null?void 0:o.cause)==null?void 0:u.message)!=null&&d.includes("ECONNREFUSED ::1")?this.message="Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).":this.message="Something went wrong."),this.cause=this.originalError}get data(){return this.response}toJSON(){return{...this}}}const co=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function l8(s,l){const i={};if(typeof s!="string")return i;const o=Object.assign({},{}).decode||i8;let u=0;for(;u<s.length;){const d=s.indexOf("=",u);if(d===-1)break;let f=s.indexOf(";",u);if(f===-1)f=s.length;else if(f<d){u=s.lastIndexOf(";",d-1)+1;continue}const m=s.slice(u,d).trim();if(i[m]===void 0){let g=s.slice(d+1,f).trim();g.charCodeAt(0)===34&&(g=g.slice(1,-1));try{i[m]=o(g)}catch{i[m]=g}}u=f+1}return i}function K1(s,l,i){const o=Object.assign({},i||{}),u=o.encode||s8;if(!co.test(s))throw new TypeError("argument name is invalid");const d=u(l);if(d&&!co.test(d))throw new TypeError("argument val is invalid");let f=s+"="+d;if(o.maxAge!=null){const m=o.maxAge-0;if(isNaN(m)||!isFinite(m))throw new TypeError("option maxAge is invalid");f+="; Max-Age="+Math.floor(m)}if(o.domain){if(!co.test(o.domain))throw new TypeError("option domain is invalid");f+="; Domain="+o.domain}if(o.path){if(!co.test(o.path))throw new TypeError("option path is invalid");f+="; Path="+o.path}if(o.expires){if(!(function(g){return Object.prototype.toString.call(g)==="[object Date]"||g instanceof Date})(o.expires)||isNaN(o.expires.valueOf()))throw new TypeError("option expires is invalid");f+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(f+="; HttpOnly"),o.secure&&(f+="; Secure"),o.priority)switch(typeof o.priority=="string"?o.priority.toLowerCase():o.priority){case"low":f+="; Priority=Low";break;case"medium":f+="; Priority=Medium";break;case"high":f+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(o.sameSite)switch(typeof o.sameSite=="string"?o.sameSite.toLowerCase():o.sameSite){case!0:f+="; SameSite=Strict";break;case"lax":f+="; SameSite=Lax";break;case"strict":f+="; SameSite=Strict";break;case"none":f+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return f}function i8(s){return s.indexOf("%")!==-1?decodeURIComponent(s):s}function s8(s){return encodeURIComponent(s)}const o8=typeof navigator<"u"&&navigator.product==="ReactNative"||typeof global<"u"&&global.HermesInternal;let qp;function Ml(s){if(s)try{const l=decodeURIComponent(qp(s.split(".")[1]).split("").map((function(i){return"%"+("00"+i.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(l)||{}}catch{}return{}}function Vp(s,l=0){let i=Ml(s);return!(Object.keys(i).length>0&&(!i.exp||i.exp-l>Date.now()/1e3))}qp=typeof atob!="function"||o8?s=>{let l=String(s).replace(/=+$/,"");if(l.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var i,o,u=0,d=0,f="";o=l.charAt(d++);~o&&(i=u%4?64*i+o:o,u++%4)?f+=String.fromCharCode(255&i>>(-2*u&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return f}:atob;const F1="pb_auth";class Cu{constructor(){this.baseToken="",this.baseModel=null,this._onChangeCallbacks=[]}get token(){return this.baseToken}get record(){return this.baseModel}get model(){return this.baseModel}get isValid(){return!Vp(this.token)}get isSuperuser(){var i,o;let l=Ml(this.token);return l.type=="auth"&&(((i=this.record)==null?void 0:i.collectionName)=="_superusers"||!((o=this.record)!=null&&o.collectionName)&&l.collectionId=="pbc_3142635823")}get isAdmin(){return console.warn("Please replace pb.authStore.isAdmin with pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"),this.isSuperuser}get isAuthRecord(){return console.warn("Please replace pb.authStore.isAuthRecord with !pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"),Ml(this.token).type=="auth"&&!this.isSuperuser}save(l,i){this.baseToken=l||"",this.baseModel=i||null,this.triggerChange()}clear(){this.baseToken="",this.baseModel=null,this.triggerChange()}loadFromCookie(l,i=F1){const o=l8(l||"")[i]||"";let u={};try{u=JSON.parse(o),(typeof u===null||typeof u!="object"||Array.isArray(u))&&(u={})}catch{}this.save(u.token||"",u.record||u.model||null)}exportToCookie(l,i=F1){var g,v;const o={secure:!0,sameSite:!0,httpOnly:!0,path:"/"},u=Ml(this.token);o.expires=u!=null&&u.exp?new Date(1e3*u.exp):new Date("1970-01-01"),l=Object.assign({},o,l);const d={token:this.token,record:this.record?JSON.parse(JSON.stringify(this.record)):null};let f=K1(i,JSON.stringify(d),l);const m=typeof Blob<"u"?new Blob([f]).size:f.length;if(d.record&&m>4096){d.record={id:(g=d.record)==null?void 0:g.id,email:(v=d.record)==null?void 0:v.email};const x=["collectionId","collectionName","verified"];for(const S in this.record)x.includes(S)&&(d.record[S]=this.record[S]);f=K1(i,JSON.stringify(d),l)}return f}onChange(l,i=!1){return this._onChangeCallbacks.push(l),i&&l(this.token,this.record),()=>{for(let o=this._onChangeCallbacks.length-1;o>=0;o--)if(this._onChangeCallbacks[o]==l)return delete this._onChangeCallbacks[o],void this._onChangeCallbacks.splice(o,1)}}triggerChange(){for(const l of this._onChangeCallbacks)l&&l(this.token,this.record)}}class r8 extends Cu{constructor(l="pocketbase_auth"){super(),this.storageFallback={},this.storageKey=l,this._bindStorageEvent()}get token(){return(this._storageGet(this.storageKey)||{}).token||""}get record(){const l=this._storageGet(this.storageKey)||{};return l.record||l.model||null}get model(){return this.record}save(l,i){this._storageSet(this.storageKey,{token:l,record:i}),super.save(l,i)}clear(){this._storageRemove(this.storageKey),super.clear()}_storageGet(l){if(typeof window<"u"&&(window!=null&&window.localStorage)){const i=window.localStorage.getItem(l)||"";try{return JSON.parse(i)}catch{return i}}return this.storageFallback[l]}_storageSet(l,i){if(typeof window<"u"&&(window!=null&&window.localStorage)){let o=i;typeof i!="string"&&(o=JSON.stringify(i)),window.localStorage.setItem(l,o)}else this.storageFallback[l]=i}_storageRemove(l){var i;typeof window<"u"&&(window!=null&&window.localStorage)&&((i=window.localStorage)==null||i.removeItem(l)),delete this.storageFallback[l]}_bindStorageEvent(){typeof window<"u"&&(window!=null&&window.localStorage)&&window.addEventListener&&window.addEventListener("storage",(l=>{if(l.key!=this.storageKey)return;const i=this._storageGet(this.storageKey)||{};super.save(i.token||"",i.record||i.model||null)}))}}class Yn{constructor(l){this.client=l}}class c8 extends Yn{async getAll(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/settings",l)}async update(l,i){return i=Object.assign({method:"PATCH",body:l},i),this.client.send("/api/settings",i)}async testS3(l="storage",i){return i=Object.assign({method:"POST",body:{filesystem:l}},i),this.client.send("/api/settings/test/s3",i).then((()=>!0))}async testEmail(l,i,o,u){return u=Object.assign({method:"POST",body:{email:i,template:o,collection:l}},u),this.client.send("/api/settings/test/email",u).then((()=>!0))}async generateAppleClientSecret(l,i,o,u,d,f){return f=Object.assign({method:"POST",body:{clientId:l,teamId:i,keyId:o,privateKey:u,duration:d}},f),this.client.send("/api/settings/apple/generate-client-secret",f)}}const u8=["requestKey","$cancelKey","$autoCancel","fetch","headers","body","query","params","cache","credentials","headers","integrity","keepalive","method","mode","redirect","referrer","referrerPolicy","signal","window"];function Eu(s){if(s){s.query=s.query||{};for(let l in s)u8.includes(l)||(s.query[l]=s[l],delete s[l])}}function Au(s){const l=[];for(const i in s){const o=encodeURIComponent(i),u=Array.isArray(s[i])?s[i]:[s[i]];for(let d of u)d=d8(d),d!==null&&l.push(o+"="+d)}return l.join("&")}function d8(s){return s==null?null:s instanceof Date?encodeURIComponent(s.toISOString().replace("T"," ")):encodeURIComponent(typeof s=="object"?JSON.stringify(s):s)}class Ip extends Yn{constructor(){super(...arguments),this.clientId="",this.eventSource=null,this.subscriptions={},this.lastSentSubscriptions=[],this.maxConnectTimeout=15e3,this.reconnectAttempts=0,this.maxReconnectAttempts=1/0,this.predefinedReconnectIntervals=[200,300,500,1e3,1200,1500,2e3],this.pendingConnects=[],this.pendingSubmits=[],this.isProcessingPendingSubmits=!1}get isConnected(){return!!this.eventSource&&!!this.clientId&&!this.pendingConnects.length}async subscribe(l,i,o){var f;if(!l)throw new Error("topic must be set.");let u=l;if(o){Eu(o=Object.assign({},o));const m="options="+encodeURIComponent(JSON.stringify({query:o.query,headers:o.headers}));u+=(u.includes("?")?"&":"?")+m}const d=function(m){const g=m;let v;try{v=JSON.parse(g==null?void 0:g.data)}catch{}i(v||{})};return this.subscriptions[u]||(this.subscriptions[u]=[]),this.subscriptions[u].push(d),this.isConnected?this.subscriptions[u].length===1?await this.submitSubscriptions():(f=this.eventSource)==null||f.addEventListener(u,d):await this.connect(),async()=>this.unsubscribeByTopicAndListener(l,d)}async unsubscribe(l){var i;if(l){const o=this.getSubscriptionsByTopic(l);for(let u in o)if(this.hasSubscriptionListeners(u)){for(let d of this.subscriptions[u])(i=this.eventSource)==null||i.removeEventListener(u,d);delete this.subscriptions[u]}}else this.subscriptions={};await this.submitSubscriptions()}async unsubscribeByPrefix(l){var o;let i=!1;for(let u in this.subscriptions)if((u+"?").startsWith(l)){i=!0;for(let d of this.subscriptions[u])(o=this.eventSource)==null||o.removeEventListener(u,d);delete this.subscriptions[u]}i&&await this.submitSubscriptions()}async unsubscribeByTopicAndListener(l,i){var u;const o=this.getSubscriptionsByTopic(l);for(let d in o){if(!Array.isArray(this.subscriptions[d])||!this.subscriptions[d].length)continue;let f=!1;for(let m=this.subscriptions[d].length-1;m>=0;m--)this.subscriptions[d][m]===i&&(f=!0,delete this.subscriptions[d][m],this.subscriptions[d].splice(m,1),(u=this.eventSource)==null||u.removeEventListener(d,i));f&&(this.subscriptions[d].length||delete this.subscriptions[d])}await this.submitSubscriptions()}hasSubscriptionListeners(l){var i,o;if(this.subscriptions=this.subscriptions||{},l)return!!((i=this.subscriptions[l])!=null&&i.length);for(let u in this.subscriptions)if((o=this.subscriptions[u])!=null&&o.length)return!0;return!1}async submitSubscriptions(){return new Promise(((l,i)=>{this.pendingSubmits.push({resolve:l,reject:i}),this.pendingSubmits.length==1&&queueMicrotask((()=>this.finalizePendingSubscriptions()))}))}async finalizePendingSubscriptions(){if(this.isProcessingPendingSubmits||!this.pendingSubmits.length)return;const l=this.pendingSubmits.slice();this.pendingSubmits=[],this.isProcessingPendingSubmits=!0;try{await this.sendSubscriptions();for(let i of l)i.resolve()}catch(i){for(let o of l)i?o.reject(i):o.resolve()}finally{this.isProcessingPendingSubmits=!1,this.pendingSubmits.length>0&&await this.finalizePendingSubscriptions()}}getSubscriptionsCancelKey(){return"realtime_"+this.clientId}getSubscriptionsByTopic(l){const i={};l=l.includes("?")?l:l+"?";for(let o in this.subscriptions)(o+"?").startsWith(l)&&(i[o]=this.subscriptions[o]);return i}getNonEmptySubscriptionKeys(){const l=[];for(let i in this.subscriptions)this.subscriptions[i].length&&l.push(i);return l}hasUnsentSubscriptions(){const l=this.getNonEmptySubscriptionKeys();if(l.length!=this.lastSentSubscriptions.length)return!0;for(const i of l)if(!this.lastSentSubscriptions.includes(i))return!0;return!1}async sendSubscriptions(){if(this.clientId){if(!this.hasSubscriptionListeners())return this.disconnect();if(this.hasUnsentSubscriptions())return this.addAllSubscriptionListeners(),this.lastSentSubscriptions=this.getNonEmptySubscriptionKeys(),this.client.send("/api/realtime",{method:"POST",body:{clientId:this.clientId,subscriptions:this.lastSentSubscriptions},requestKey:this.getSubscriptionsCancelKey()}).catch((l=>{if(!(l!=null&&l.isAbort))throw l}))}}addAllSubscriptionListeners(){if(this.eventSource){this.removeAllSubscriptionListeners();for(let l in this.subscriptions)for(let i of this.subscriptions[l])this.eventSource.addEventListener(l,i)}}removeAllSubscriptionListeners(){if(this.eventSource)for(let l in this.subscriptions)for(let i of this.subscriptions[l])this.eventSource.removeEventListener(l,i)}async connect(){if(!(this.reconnectAttempts>0))return new Promise(((l,i)=>{this.pendingConnects.push({resolve:l,reject:i}),this.pendingConnects.length==1&&queueMicrotask((()=>this.initConnect()))}))}initConnect(){this.disconnect(!0),clearTimeout(this.connectTimeoutId),this.connectTimeoutId=setTimeout((()=>{this.connectErrorHandler(new Error("EventSource connect took too long."))}),this.maxConnectTimeout),this.eventSource=new EventSource(this.client.buildURL("/api/realtime")),this.eventSource.onerror=l=>{this.connectErrorHandler(new Error("Failed to establish realtime connection."))},this.eventSource.addEventListener("PB_CONNECT",(l=>{const i=l;this.clientId=i==null?void 0:i.lastEventId,this.lastSentSubscriptions=[],this.submitSubscriptions().then((()=>{for(let u of this.pendingConnects)u.resolve();this.pendingConnects=[],this.reconnectAttempts=0,clearTimeout(this.reconnectTimeoutId),clearTimeout(this.connectTimeoutId);const o=this.getSubscriptionsByTopic("PB_CONNECT");for(let u in o)for(let d of o[u])d(l)})).catch((o=>{this.clientId="",this.lastSentSubscriptions=[],this.connectErrorHandler(o)}))}))}connectErrorHandler(l){if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),!this.clientId&&!this.reconnectAttempts||this.reconnectAttempts>this.maxReconnectAttempts){for(let o of this.pendingConnects)o.reject(new vt(l));return this.pendingConnects=[],void this.disconnect()}this.disconnect(!0);const i=this.predefinedReconnectIntervals[this.reconnectAttempts]||this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length-1];this.reconnectAttempts++,this.reconnectTimeoutId=setTimeout((()=>{this.initConnect()}),i)}disconnect(l=!1){var i;if(this.clientId&&this.onDisconnect&&this.onDisconnect(Object.keys(this.subscriptions)),clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),this.removeAllSubscriptionListeners(),this.client.cancelRequest(this.getSubscriptionsCancelKey()),(i=this.eventSource)==null||i.close(),this.eventSource=null,this.clientId="",this.lastSentSubscriptions=[],!l){this.reconnectAttempts=0;for(let o of this.pendingConnects)o.resolve();this.pendingConnects=[]}}}class Yp extends Yn{decode(l){return l}async getFullList(l,i){if(typeof l=="number")return this._getFullList(l,i);let o=1e3;return(i=Object.assign({},l,i)).batch&&(o=i.batch,delete i.batch),this._getFullList(o,i)}async getList(l=1,i=30,o){return(o=Object.assign({method:"GET"},o)).query=Object.assign({page:l,perPage:i},o.query),this.client.send(this.baseCrudPath,o).then((u=>{var d;return u.items=((d=u.items)==null?void 0:d.map((f=>this.decode(f))))||[],u}))}async getFirstListItem(l,i){return(i=Object.assign({requestKey:"one_by_filter_"+this.baseCrudPath+"_"+l},i)).query=Object.assign({filter:l,skipTotal:1},i.query),this.getList(1,1,i).then((o=>{var u;if(!((u=o==null?void 0:o.items)!=null&&u.length))throw new vt({status:404,response:{code:404,message:"The requested resource wasn't found.",data:{}}});return o.items[0]}))}async getOne(l,i){if(!l)throw new vt({url:this.client.buildURL(this.baseCrudPath+"/"),status:404,response:{code:404,message:"Missing required record id.",data:{}}});return i=Object.assign({method:"GET"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l),i).then((o=>this.decode(o)))}async create(l,i){return i=Object.assign({method:"POST",body:l},i),this.client.send(this.baseCrudPath,i).then((o=>this.decode(o)))}async update(l,i,o){return o=Object.assign({method:"PATCH",body:i},o),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l),o).then((u=>this.decode(u)))}async delete(l,i){return i=Object.assign({method:"DELETE"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l),i).then((()=>!0))}_getFullList(l=1e3,i){(i=i||{}).query=Object.assign({skipTotal:1},i.query);let o=[],u=async d=>this.getList(d,l||1e3,i).then((f=>{const m=f.items;return o=o.concat(m),m.length==f.perPage?u(d+1):o}));return u(1)}}function ga(s,l,i,o){const u=o!==void 0;return u||i!==void 0?u?(console.warn(s),l.body=Object.assign({},l.body,i),l.query=Object.assign({},l.query,o),l):Object.assign(l,i):l}function Jc(s){var l;(l=s._resetAutoRefresh)==null||l.call(s)}class f8 extends Yp{constructor(l,i){super(l),this.collectionIdOrName=i}get baseCrudPath(){return this.baseCollectionPath+"/records"}get baseCollectionPath(){return"/api/collections/"+encodeURIComponent(this.collectionIdOrName)}get isSuperusers(){return this.collectionIdOrName=="_superusers"||this.collectionIdOrName=="_pbc_2773867675"}async subscribe(l,i,o){if(!l)throw new Error("Missing topic.");if(!i)throw new Error("Missing subscription callback.");return this.client.realtime.subscribe(this.collectionIdOrName+"/"+l,i,o)}async unsubscribe(l){return l?this.client.realtime.unsubscribe(this.collectionIdOrName+"/"+l):this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)}async getFullList(l,i){if(typeof l=="number")return super.getFullList(l,i);const o=Object.assign({},l,i);return super.getFullList(o)}async getList(l=1,i=30,o){return super.getList(l,i,o)}async getFirstListItem(l,i){return super.getFirstListItem(l,i)}async getOne(l,i){return super.getOne(l,i)}async create(l,i){return super.create(l,i)}async update(l,i,o){return super.update(l,i,o).then((u=>{var d,f,m;if(((d=this.client.authStore.record)==null?void 0:d.id)===(u==null?void 0:u.id)&&(((f=this.client.authStore.record)==null?void 0:f.collectionId)===this.collectionIdOrName||((m=this.client.authStore.record)==null?void 0:m.collectionName)===this.collectionIdOrName)){let g=Object.assign({},this.client.authStore.record.expand),v=Object.assign({},this.client.authStore.record,u);g&&(v.expand=Object.assign(g,u.expand)),this.client.authStore.save(this.client.authStore.token,v)}return u}))}async delete(l,i){return super.delete(l,i).then((o=>{var u,d,f;return!o||((u=this.client.authStore.record)==null?void 0:u.id)!==l||((d=this.client.authStore.record)==null?void 0:d.collectionId)!==this.collectionIdOrName&&((f=this.client.authStore.record)==null?void 0:f.collectionName)!==this.collectionIdOrName||this.client.authStore.clear(),o}))}authResponse(l){const i=this.decode((l==null?void 0:l.record)||{});return this.client.authStore.save(l==null?void 0:l.token,i),Object.assign({},l,{token:(l==null?void 0:l.token)||"",record:i})}async listAuthMethods(l){return l=Object.assign({method:"GET",fields:"mfa,otp,password,oauth2"},l),this.client.send(this.baseCollectionPath+"/auth-methods",l)}async authWithPassword(l,i,o){let u;o=Object.assign({method:"POST",body:{identity:l,password:i}},o),this.isSuperusers&&(u=o.autoRefreshThreshold,delete o.autoRefreshThreshold,o.autoRefresh||Jc(this.client));let d=await this.client.send(this.baseCollectionPath+"/auth-with-password",o);return d=this.authResponse(d),u&&this.isSuperusers&&(function(m,g,v,x){Jc(m);const S=m.beforeSend,T=m.authStore.record,A=m.authStore.onChange(((k,M)=>{(!k||(M==null?void 0:M.id)!=(T==null?void 0:T.id)||(M!=null&&M.collectionId||T!=null&&T.collectionId)&&(M==null?void 0:M.collectionId)!=(T==null?void 0:T.collectionId))&&Jc(m)}));m._resetAutoRefresh=function(){A(),m.beforeSend=S,delete m._resetAutoRefresh},m.beforeSend=async(k,M)=>{var $;const B=m.authStore.token;if(($=M.query)!=null&&$.autoRefresh)return S?S(k,M):{url:k,sendOptions:M};let Z=m.authStore.isValid;if(Z&&Vp(m.authStore.token,g))try{await v()}catch{Z=!1}Z||await x();const G=M.headers||{};for(let X in G)if(X.toLowerCase()=="authorization"&&B==G[X]&&m.authStore.token){G[X]=m.authStore.token;break}return M.headers=G,S?S(k,M):{url:k,sendOptions:M}}})(this.client,u,(()=>this.authRefresh({autoRefresh:!0})),(()=>this.authWithPassword(l,i,Object.assign({autoRefresh:!0},o)))),d}async authWithOAuth2Code(l,i,o,u,d,f,m){let g={method:"POST",body:{provider:l,code:i,codeVerifier:o,redirectURL:u,createData:d}};return g=ga("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, options?).",g,f,m),this.client.send(this.baseCollectionPath+"/auth-with-oauth2",g).then((v=>this.authResponse(v)))}authWithOAuth2(...l){if(l.length>1||typeof(l==null?void 0:l[0])=="string")return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."),this.authWithOAuth2Code((l==null?void 0:l[0])||"",(l==null?void 0:l[1])||"",(l==null?void 0:l[2])||"",(l==null?void 0:l[3])||"",(l==null?void 0:l[4])||{},(l==null?void 0:l[5])||{},(l==null?void 0:l[6])||{});const i=(l==null?void 0:l[0])||{};let o=null;i.urlCallback||(o=J1(void 0));const u=new Ip(this.client);function d(){o==null||o.close(),u.unsubscribe()}const f={},m=i.requestKey;return m&&(f.requestKey=m),this.listAuthMethods(f).then((g=>{const v=g.oauth2.providers.find((S=>S.name===i.provider));if(!v)throw new vt(new Error(`Missing or invalid provider "${i.provider}".`));const x=this.client.buildURL("/api/oauth2-redirect");return new Promise((async(S,T)=>{var k,M,B;const A=m?(k=this.client.cancelControllers)==null?void 0:k[m]:void 0;A&&(A.signal.onabort=()=>{d(),T(new vt({isAbort:!0,message:"manually cancelled"}))}),u.onDisconnect=Z=>{Z.length&&T&&(d(),T(new vt(new Error("realtime connection interrupted"))))};try{await u.subscribe("@oauth2",(async X=>{var F;const I=u.clientId;try{if(!X.state||I!==X.state)throw new Error("State parameters don't match.");if(X.error||!X.code)throw new Error("OAuth2 redirect error or missing code: "+X.error);const q=Object.assign({},i);delete q.provider,delete q.scopes,delete q.createData,delete q.urlCallback,(F=A==null?void 0:A.signal)!=null&&F.onabort&&(A.signal.onabort=null);const te=await this.authWithOAuth2Code(v.name,X.code,v.codeVerifier,x,i.createData,q);S(te)}catch(q){T(new vt(q))}d()}));const Z={state:u.clientId};(M=i.scopes)!=null&&M.length&&(Z.scope=i.scopes.join(" "));const G=this._replaceQueryParams(v.authURL+x,Z);await(i.urlCallback||function(X){o?o.location.href=X:o=J1(X)})(G)}catch(Z){(B=A==null?void 0:A.signal)!=null&&B.onabort&&(A.signal.onabort=null),d(),T(new vt(Z))}}))})).catch((g=>{throw d(),g}))}async authRefresh(l,i){let o={method:"POST"};return o=ga("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).",o,l,i),this.client.send(this.baseCollectionPath+"/auth-refresh",o).then((u=>this.authResponse(u)))}async requestPasswordReset(l,i,o){let u={method:"POST",body:{email:l}};return u=ga("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).",u,i,o),this.client.send(this.baseCollectionPath+"/request-password-reset",u).then((()=>!0))}async confirmPasswordReset(l,i,o,u,d){let f={method:"POST",body:{token:l,password:i,passwordConfirm:o}};return f=ga("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).",f,u,d),this.client.send(this.baseCollectionPath+"/confirm-password-reset",f).then((()=>!0))}async requestVerification(l,i,o){let u={method:"POST",body:{email:l}};return u=ga("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).",u,i,o),this.client.send(this.baseCollectionPath+"/request-verification",u).then((()=>!0))}async confirmVerification(l,i,o){let u={method:"POST",body:{token:l}};return u=ga("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).",u,i,o),this.client.send(this.baseCollectionPath+"/confirm-verification",u).then((()=>{const d=Ml(l),f=this.client.authStore.record;return f&&!f.verified&&f.id===d.id&&f.collectionId===d.collectionId&&(f.verified=!0,this.client.authStore.save(this.client.authStore.token,f)),!0}))}async requestEmailChange(l,i,o){let u={method:"POST",body:{newEmail:l}};return u=ga("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).",u,i,o),this.client.send(this.baseCollectionPath+"/request-email-change",u).then((()=>!0))}async confirmEmailChange(l,i,o,u){let d={method:"POST",body:{token:l,password:i}};return d=ga("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).",d,o,u),this.client.send(this.baseCollectionPath+"/confirm-email-change",d).then((()=>{const f=Ml(l),m=this.client.authStore.record;return m&&m.id===f.id&&m.collectionId===f.collectionId&&this.client.authStore.clear(),!0}))}async listExternalAuths(l,i){return this.client.collection("_externalAuths").getFullList(Object.assign({},i,{filter:this.client.filter("recordRef = {:id}",{id:l})}))}async unlinkExternalAuth(l,i,o){const u=await this.client.collection("_externalAuths").getFirstListItem(this.client.filter("recordRef = {:recordId} && provider = {:provider}",{recordId:l,provider:i}));return this.client.collection("_externalAuths").delete(u.id,o).then((()=>!0))}async requestOTP(l,i){return i=Object.assign({method:"POST",body:{email:l}},i),this.client.send(this.baseCollectionPath+"/request-otp",i)}async authWithOTP(l,i,o){return o=Object.assign({method:"POST",body:{otpId:l,password:i}},o),this.client.send(this.baseCollectionPath+"/auth-with-otp",o).then((u=>this.authResponse(u)))}async impersonate(l,i,o){(o=Object.assign({method:"POST",body:{duration:i}},o)).headers=o.headers||{},o.headers.Authorization||(o.headers.Authorization=this.client.authStore.token);const u=new Nu(this.client.baseURL,new Cu,this.client.lang),d=await u.send(this.baseCollectionPath+"/impersonate/"+encodeURIComponent(l),o);return u.authStore.save(d==null?void 0:d.token,this.decode((d==null?void 0:d.record)||{})),u}_replaceQueryParams(l,i={}){let o=l,u="";l.indexOf("?")>=0&&(o=l.substring(0,l.indexOf("?")),u=l.substring(l.indexOf("?")+1));const d={},f=u.split("&");for(const m of f){if(m=="")continue;const g=m.split("=");d[decodeURIComponent(g[0].replace(/\+/g," "))]=decodeURIComponent((g[1]||"").replace(/\+/g," "))}for(let m in i)i.hasOwnProperty(m)&&(i[m]==null?delete d[m]:d[m]=i[m]);u="";for(let m in d)d.hasOwnProperty(m)&&(u!=""&&(u+="&"),u+=encodeURIComponent(m.replace(/%20/g,"+"))+"="+encodeURIComponent(d[m].replace(/%20/g,"+")));return u!=""?o+"?"+u:o}}function J1(s){if(typeof window>"u"||!(window!=null&&window.open))throw new vt(new Error("Not in a browser context - please pass a custom urlCallback function."));let l=1024,i=768,o=window.innerWidth,u=window.innerHeight;l=l>o?o:l,i=i>u?u:i;let d=o/2-l/2,f=u/2-i/2;return window.open(s,"popup_window","width="+l+",height="+i+",top="+f+",left="+d+",resizable,menubar=no")}class p8 extends Yp{get baseCrudPath(){return"/api/collections"}async import(l,i=!1,o){return o=Object.assign({method:"PUT",body:{collections:l,deleteMissing:i}},o),this.client.send(this.baseCrudPath+"/import",o).then((()=>!0))}async getScaffolds(l){return l=Object.assign({method:"GET"},l),this.client.send(this.baseCrudPath+"/meta/scaffolds",l)}async truncate(l,i){return i=Object.assign({method:"DELETE"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l)+"/truncate",i).then((()=>!0))}}class h8 extends Yn{async getList(l=1,i=30,o){return(o=Object.assign({method:"GET"},o)).query=Object.assign({page:l,perPage:i},o.query),this.client.send("/api/logs",o)}async getOne(l,i){if(!l)throw new vt({url:this.client.buildURL("/api/logs/"),status:404,response:{code:404,message:"Missing required log id.",data:{}}});return i=Object.assign({method:"GET"},i),this.client.send("/api/logs/"+encodeURIComponent(l),i)}async getStats(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/logs/stats",l)}}class m8 extends Yn{async check(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/health",l)}}class g8 extends Yn{getUrl(l,i,o={}){return console.warn("Please replace pb.files.getUrl() with pb.files.getURL()"),this.getURL(l,i,o)}getURL(l,i,o={}){if(!i||!(l!=null&&l.id)||!(l!=null&&l.collectionId)&&!(l!=null&&l.collectionName))return"";const u=[];u.push("api"),u.push("files"),u.push(encodeURIComponent(l.collectionId||l.collectionName)),u.push(encodeURIComponent(l.id)),u.push(encodeURIComponent(i));let d=this.client.buildURL(u.join("/"));o.download===!1&&delete o.download;const f=Au(o);return f&&(d+=(d.includes("?")?"&":"?")+f),d}async getToken(l){return l=Object.assign({method:"POST"},l),this.client.send("/api/files/token",l).then((i=>(i==null?void 0:i.token)||""))}}class b8 extends Yn{async getFullList(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/backups",l)}async create(l,i){return i=Object.assign({method:"POST",body:{name:l}},i),this.client.send("/api/backups",i).then((()=>!0))}async upload(l,i){return i=Object.assign({method:"POST",body:l},i),this.client.send("/api/backups/upload",i).then((()=>!0))}async delete(l,i){return i=Object.assign({method:"DELETE"},i),this.client.send(`/api/backups/${encodeURIComponent(l)}`,i).then((()=>!0))}async restore(l,i){return i=Object.assign({method:"POST"},i),this.client.send(`/api/backups/${encodeURIComponent(l)}/restore`,i).then((()=>!0))}getDownloadUrl(l,i){return console.warn("Please replace pb.backups.getDownloadUrl() with pb.backups.getDownloadURL()"),this.getDownloadURL(l,i)}getDownloadURL(l,i){return this.client.buildURL(`/api/backups/${encodeURIComponent(i)}?token=${encodeURIComponent(l)}`)}}class v8 extends Yn{async getFullList(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/crons",l)}async run(l,i){return i=Object.assign({method:"POST"},i),this.client.send(`/api/crons/${encodeURIComponent(l)}`,i).then((()=>!0))}}function ou(s){return typeof Blob<"u"&&s instanceof Blob||typeof File<"u"&&s instanceof File||s!==null&&typeof s=="object"&&s.uri&&(typeof navigator<"u"&&navigator.product==="ReactNative"||typeof global<"u"&&global.HermesInternal)}function ru(s){var l;return s&&(((l=s.constructor)==null?void 0:l.name)==="FormData"||typeof FormData<"u"&&s instanceof FormData)}function P1(s){for(const l in s){const i=Array.isArray(s[l])?s[l]:[s[l]];for(const o of i)if(ou(o))return!0}return!1}const y8=/^[\-\.\d]+$/;function W1(s){if(typeof s!="string")return s;if(s=="true")return!0;if(s=="false")return!1;if((s[0]==="-"||s[0]>="0"&&s[0]<="9")&&y8.test(s)){let l=+s;if(""+l===s)return l}return s}class x8 extends Yn{constructor(){super(...arguments),this.requests=[],this.subs={}}collection(l){return this.subs[l]||(this.subs[l]=new S8(this.requests,l)),this.subs[l]}async send(l){const i=new FormData,o=[];for(let u=0;u<this.requests.length;u++){const d=this.requests[u];if(o.push({method:d.method,url:d.url,headers:d.headers,body:d.json}),d.files)for(let f in d.files){const m=d.files[f]||[];for(let g of m)i.append("requests."+u+"."+f,g)}}return i.append("@jsonPayload",JSON.stringify({requests:o})),l=Object.assign({method:"POST",body:i},l),this.client.send("/api/batch",l)}}class S8{constructor(l,i){this.requests=[],this.requests=l,this.collectionIdOrName=i}upsert(l,i){i=Object.assign({body:l||{}},i);const o={method:"PUT",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records"};this.prepareRequest(o,i),this.requests.push(o)}create(l,i){i=Object.assign({body:l||{}},i);const o={method:"POST",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records"};this.prepareRequest(o,i),this.requests.push(o)}update(l,i,o){o=Object.assign({body:i||{}},o);const u={method:"PATCH",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records/"+encodeURIComponent(l)};this.prepareRequest(u,o),this.requests.push(u)}delete(l,i){i=Object.assign({},i);const o={method:"DELETE",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records/"+encodeURIComponent(l)};this.prepareRequest(o,i),this.requests.push(o)}prepareRequest(l,i){if(Eu(i),l.headers=i.headers,l.json={},l.files={},i.query!==void 0){const u=Au(i.query);u&&(l.url+=(l.url.includes("?")?"&":"?")+u)}let o=i.body;ru(o)&&(o=(function(d){let f={};return d.forEach(((m,g)=>{if(g==="@jsonPayload"&&typeof m=="string")try{let v=JSON.parse(m);Object.assign(f,v)}catch(v){console.warn("@jsonPayload error:",v)}else f[g]!==void 0?(Array.isArray(f[g])||(f[g]=[f[g]]),f[g].push(W1(m))):f[g]=W1(m)})),f})(o));for(const u in o){const d=o[u];if(ou(d))l.files[u]=l.files[u]||[],l.files[u].push(d);else if(Array.isArray(d)){const f=[],m=[];for(const g of d)ou(g)?f.push(g):m.push(g);if(f.length>0&&f.length==d.length){l.files[u]=l.files[u]||[];for(let g of f)l.files[u].push(g)}else if(l.json[u]=m,f.length>0){let g=u;u.startsWith("+")||u.endsWith("+")||(g+="+"),l.files[g]=l.files[g]||[];for(let v of f)l.files[g].push(v)}}else l.json[u]=d}}}class Nu{get baseUrl(){return this.baseURL}set baseUrl(l){this.baseURL=l}constructor(l="/",i,o="en-US"){this.cancelControllers={},this.recordServices={},this.enableAutoCancellation=!0,this.baseURL=l,this.lang=o,i?this.authStore=i:typeof window<"u"&&window.Deno?this.authStore=new Cu:this.authStore=new r8,this.collections=new p8(this),this.files=new g8(this),this.logs=new h8(this),this.settings=new c8(this),this.realtime=new Ip(this),this.health=new m8(this),this.backups=new b8(this),this.crons=new v8(this)}get admins(){return this.collection("_superusers")}createBatch(){return new x8(this)}collection(l){return this.recordServices[l]||(this.recordServices[l]=new f8(this,l)),this.recordServices[l]}autoCancellation(l){return this.enableAutoCancellation=!!l,this}cancelRequest(l){return this.cancelControllers[l]&&(this.cancelControllers[l].abort(),delete this.cancelControllers[l]),this}cancelAllRequests(){for(let l in this.cancelControllers)this.cancelControllers[l].abort();return this.cancelControllers={},this}filter(l,i){if(!i)return l;for(let o in i){let u=i[o];switch(typeof u){case"boolean":case"number":u=""+u;break;case"string":u="'"+u.replace(/'/g,"\\'")+"'";break;default:u=u===null?"null":u instanceof Date?"'"+u.toISOString().replace("T"," ")+"'":"'"+JSON.stringify(u).replace(/'/g,"\\'")+"'"}l=l.replaceAll("{:"+o+"}",u)}return l}getFileUrl(l,i,o={}){return console.warn("Please replace pb.getFileUrl() with pb.files.getURL()"),this.files.getURL(l,i,o)}buildUrl(l){return console.warn("Please replace pb.buildUrl() with pb.buildURL()"),this.buildURL(l)}buildURL(l){var o;let i=this.baseURL;return typeof window>"u"||!window.location||i.startsWith("https://")||i.startsWith("http://")||(i=(o=window.location.origin)!=null&&o.endsWith("/")?window.location.origin.substring(0,window.location.origin.length-1):window.location.origin||"",this.baseURL.startsWith("/")||(i+=window.location.pathname||"/",i+=i.endsWith("/")?"":"/"),i+=this.baseURL),l&&(i+=i.endsWith("/")?"":"/",i+=l.startsWith("/")?l.substring(1):l),i}async send(l,i){i=this.initSendOptions(l,i);let o=this.buildURL(l);if(this.beforeSend){const u=Object.assign({},await this.beforeSend(o,i));u.url!==void 0||u.options!==void 0?(o=u.url||o,i=u.options||i):Object.keys(u).length&&(i=u,console!=null&&console.warn&&console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."))}if(i.query!==void 0){const u=Au(i.query);u&&(o+=(o.includes("?")?"&":"?")+u),delete i.query}return this.getHeader(i.headers,"Content-Type")=="application/json"&&i.body&&typeof i.body!="string"&&(i.body=JSON.stringify(i.body)),(i.fetch||fetch)(o,i).then((async u=>{var f;let d={};try{d=await u.json()}catch(m){if((f=i.signal)!=null&&f.aborted||(m==null?void 0:m.name)=="AbortError"||(m==null?void 0:m.message)=="Aborted")throw m}if(this.afterSend&&(d=await this.afterSend(u,d,i)),u.status>=400)throw new vt({url:u.url,status:u.status,data:d});return d})).catch((u=>{throw new vt(u)}))}initSendOptions(l,i){if((i=Object.assign({method:"GET"},i)).body=(function(u){if(typeof FormData>"u"||u===void 0||typeof u!="object"||u===null||ru(u)||!P1(u))return u;const d=new FormData;for(const f in u){const m=u[f];if(m!==void 0)if(typeof m!="object"||P1({data:m})){const g=Array.isArray(m)?m:[m];for(let v of g)d.append(f,v)}else{let g={};g[f]=m,d.append("@jsonPayload",JSON.stringify(g))}}return d})(i.body),Eu(i),i.query=Object.assign({},i.params,i.query),i.requestKey===void 0&&(i.$autoCancel===!1||i.query.$autoCancel===!1?i.requestKey=null:(i.$cancelKey||i.query.$cancelKey)&&(i.requestKey=i.$cancelKey||i.query.$cancelKey)),delete i.$autoCancel,delete i.query.$autoCancel,delete i.$cancelKey,delete i.query.$cancelKey,this.getHeader(i.headers,"Content-Type")!==null||ru(i.body)||(i.headers=Object.assign({},i.headers,{"Content-Type":"application/json"})),this.getHeader(i.headers,"Accept-Language")===null&&(i.headers=Object.assign({},i.headers,{"Accept-Language":this.lang})),this.authStore.token&&this.getHeader(i.headers,"Authorization")===null&&(i.headers=Object.assign({},i.headers,{Authorization:this.authStore.token})),this.enableAutoCancellation&&i.requestKey!==null){const o=i.requestKey||(i.method||"GET")+l;delete i.requestKey,this.cancelRequest(o);const u=new AbortController;this.cancelControllers[o]=u,i.signal=u.signal}return i}getHeader(l,i){l=l||{},i=i.toLowerCase();for(let o in l)if(o.toLowerCase()==i)return l[o];return null}}const Gp="ennabl_pb_url";let kl=null;function Xp(){return localStorage.getItem(Gp)||""}function Eo(){const s=Xp();return s?((!kl||kl.baseUrl!==s)&&(kl=new Nu(s)),kl):null}function ep(){return!!Xp()}async function w8(s){const l=s.trim().replace(/\/$/,"");localStorage.setItem(Gp,l),kl=new Nu(l),await kl.collection("prds").getList(1,1)}async function C8(){return(await Eo().collection("prds").getFullList({sort:"-updated"})).map(Tu)}async function E8({projectId:s,prdId:l,title:i,content:o,sprintIds:u=[]}){const d=await Eo().collection("prds").create({projectId:s,prdId:l||"",title:i.trim(),content:o||"",status:"backlog",sprintIds:u});return Tu(d)}async function A8(s,l){const i=await Eo().collection("prds").update(s,l);return Tu(i)}async function N8(s){await Eo().collection("prds").delete(s)}function Tu(s){return{id:s.id,projectId:s.projectId,prdId:s.prdId||"",title:s.title,content:s.content||"",status:s.status||"backlog",sprintIds:s.sprintIds||[],createdAt:s.created,updatedAt:s.updated}}function T8({onDone:s}){const[l,i]=h.useState(""),[o,u]=h.useState(!1),[d,f]=h.useState("");async function m(g){var v,x;if(g.preventDefault(),!!l.trim()){u(!0),f("");try{await w8(l),s()}catch(S){f((v=S==null?void 0:S.message)!=null&&v.includes("Failed to fetch")?"Could not reach that URL. Check the Railway domain and make sure it's deployed.":(x=S==null?void 0:S.message)!=null&&x.includes("prds")?'Connected but the "prds" collection is missing. Check that the migration ran.':`Connection failed: ${(S==null?void 0:S.message)||"unknown error"}`)}finally{u(!1)}}}return b.jsx("div",{className:"pb-setup",children:b.jsxs("div",{className:"pb-setup-card",children:[b.jsxs("div",{className:"pb-setup-logo",children:[b.jsx("span",{className:"pb-setup-logo-name",children:"ennabl"}),b.jsx("span",{className:"pb-setup-logo-suffix",children:"builder"})]}),b.jsx("h2",{className:"pb-setup-title",children:"Connect to PocketBase"}),b.jsx("p",{className:"pb-setup-sub",children:"Paste your Railway deployment URL to sync PRDs across sessions."}),b.jsxs("form",{className:"pb-setup-form",onSubmit:m,children:[b.jsx("input",{className:"pb-setup-input",type:"url",placeholder:"https://your-app.up.railway.app",value:l,onChange:g=>i(g.target.value),autoFocus:!0,disabled:o}),d&&b.jsx("div",{className:"pb-setup-error",children:d}),b.jsx("button",{className:"pb-setup-btn",type:"submit",disabled:!l.trim()||o,children:o?"Connecting…":"Connect"})]}),b.jsxs("div",{className:"pb-setup-footer",children:[b.jsxs("span",{className:"pb-setup-hint",children:["Don't have a deployment yet?"," ",b.jsx("a",{href:"https://railway.app",target:"_blank",rel:"noreferrer",className:"pb-setup-link",children:"Deploy to Railway →"})]}),b.jsx("button",{className:"pb-setup-skip",onClick:s,children:"Skip — use local storage"})]})]})})}const Qp="ennabl_builder_prds",$p={ai:"AI",insights:"INS",workflows:"WFL",data:"DAT",growth:"GRW",updates:"UPD",settings:"SET"},Kp=[{id:"ai",name:"AI",phosphorIcon:"Sparkle"},{id:"insights",name:"Insights",phosphorIcon:"ChartBar"},{id:"workflows",name:"Workflows",phosphorIcon:"FlowArrow"},{id:"data",name:"Data",phosphorIcon:"Database"},{id:"growth",name:"Growth",phosphorIcon:"TrendUp"},{id:"updates",name:"Updates",phosphorIcon:"Bell"},{id:"settings",name:"Settings",phosphorIcon:"GearSix"}],tp=["backlog","todo","doing","done"],Fp={backlog:"Backlog",todo:"To Do",doing:"Doing",done:"Done"};function np(s,l){const i=$p[s]||s.slice(0,3).toUpperCase(),o=l.filter(u=>u.projectId===s).length+1;return`${i}-${String(o).padStart(2,"0")}`}function k8(s){const l={};let i=!1;const o=s.map(u=>{const d={};if(u.prdId)l[u.projectId]=(l[u.projectId]||0)+1;else{l[u.projectId]=(l[u.projectId]||0)+1;const f=$p[u.projectId]||u.projectId.slice(0,3).toUpperCase();d.prdId=`${f}-${String(l[u.projectId]).padStart(2,"0")}`,i=!0}return u.sprintIds||(d.sprintIds=[],i=!0),Object.keys(d).length?{...u,...d}:u});return i&&Dl(o),o}const D8=[{id:"prd-mock-1",projectId:"workflows",prdId:"WFL-01",sprintIds:[],title:"Producer Filter Modal",content:`# Producer Filter Modal

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
`,status:"backlog",createdAt:new Date(Date.now()-4320*60*1e3).toISOString(),updatedAt:new Date(Date.now()-4320*60*1e3).toISOString()},{id:"prd-mock-2",projectId:"workflows",prdId:"WFL-02",sprintIds:[],title:"Template Save Flow",content:`# Template Save Flow

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
`,status:"doing",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),updatedAt:new Date(Date.now()-7200*1e3).toISOString()}];function cu(){try{return JSON.parse(localStorage.getItem(Qp)||"[]")}catch{return[]}}function Dl(s){localStorage.setItem(Qp,JSON.stringify(s))}function ap(){cu().length===0&&Dl(D8)}function Jp(s){return Kp.find(l=>l.id===s)||null}function M8({prds:s=[],onSelect:l}){const[i,o]=h.useState(""),[u,d]=h.useState([]),[f,m]=h.useState(!1),[g,v]=h.useState(0),x=h.useRef(),S=h.useRef();h.useEffect(()=>{if(!i.trim()){d([]),m(!1);return}const A=i.toLowerCase(),k=s.filter(M=>M.title.toLowerCase().includes(A)).slice(0,8);d(k),m(k.length>0),v(0)},[i,s]),h.useEffect(()=>{function A(k){f&&(k.key==="ArrowDown"&&(k.preventDefault(),v(M=>Math.min(M+1,u.length-1))),k.key==="ArrowUp"&&(k.preventDefault(),v(M=>Math.max(M-1,0))),k.key==="Enter"&&(k.preventDefault(),u[g]&&T(u[g])),k.key==="Escape"&&m(!1))}return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[f,u,g]),h.useEffect(()=>{function A(k){var M,B;!((M=S.current)!=null&&M.contains(k.target))&&!((B=x.current)!=null&&B.contains(k.target))&&m(!1)}return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[]);function T(A){var k;l(A),o(""),m(!1),(k=x.current)==null||k.blur()}return b.jsxs("div",{className:"prd-search",children:[b.jsxs("div",{className:"prd-search-input-wrap",children:[b.jsx("span",{className:"prd-search-icon",children:"⌕"}),b.jsx("input",{ref:x,className:"prd-search-input",type:"text",placeholder:"Search PRDs…",value:i,onChange:A=>o(A.target.value),onFocus:()=>{u.length&&m(!0)}}),i&&b.jsx("button",{className:"prd-search-clear",onClick:()=>{o(""),m(!1)},children:"✕"})]}),f&&b.jsx("div",{ref:S,className:"prd-search-dropdown",children:u.map((A,k)=>{const M=Jp(A.projectId);return b.jsxs("button",{className:`prd-search-result ${k===g?"prd-search-result--active":""}`,onMouseEnter:()=>v(k),onClick:()=>T(A),children:[b.jsx("span",{className:"prd-search-result-title",children:A.title}),b.jsxs("span",{className:"prd-search-result-project",children:[M==null?void 0:M.icon," ",M==null?void 0:M.name]})]},A.id)})})]})}const R8=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M225.29,165.93C216.61,151,212,129.57,212,104a84,84,0,0,0-168,0c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.66,186,19.77,19.77,0,0,0,48,196H84.18a44,44,0,0,0,87.64,0H208a19.77,19.77,0,0,0,17.31-10A20.08,20.08,0,0,0,225.29,165.93ZM128,212a20,20,0,0,1-19.6-16h39.2A20,20,0,0,1,128,212ZM54.66,172C63.51,154,68,131.14,68,104a60,60,0,0,1,120,0c0,27.13,4.48,50,13.33,68Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192Z",opacity:"0.2"}),h.createElement("path",{d:"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M220.07,176.94C214.41,167.2,206,139.73,206,104a78,78,0,1,0-156,0c0,35.74-8.42,63.2-14.08,72.94A14,14,0,0,0,48,198H90.48a38,38,0,0,0,75,0H208a14,14,0,0,0,12.06-21.06ZM128,218a26,26,0,0,1-25.29-20h50.58A26,26,0,0,1,128,218Zm81.71-33a1.9,1.9,0,0,1-1.7,1H48a1.9,1.9,0,0,1-1.7-1,2,2,0,0,1,0-2C53.87,170,62,139.69,62,104a66,66,0,1,1,132,0c0,35.68,8.14,65.95,15.71,79A2,2,0,0,1,209.71,185Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M218.35,178C212.58,168,204,140.13,204,104a76,76,0,1,0-152,0c0,36.13-8.59,64-14.36,73.95A12,12,0,0,0,48,196H92.23a36,36,0,0,0,71.54,0H208A12,12,0,0,0,218.35,178ZM128,220a28,28,0,0,1-27.71-24h55.42A28,28,0,0,1,128,220Zm83.45-34a3.91,3.91,0,0,1-3.44,2H48a3.91,3.91,0,0,1-3.44-2,4,4,0,0,1,0-4C52,169.17,60,139.32,60,104a68,68,0,1,1,136,0c0,35.31,8,65.17,15.44,78A4,4,0,0,1,211.45,186Z"}))]]),j8=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),h.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),O8=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,196h-4V40a12,12,0,0,0-12-12H152a12,12,0,0,0-12,12V76H96A12,12,0,0,0,84,88v36H48a12,12,0,0,0-12,12v60H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24ZM164,52h32V196H164Zm-56,48h32v96H108ZM60,148H84v48H60Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,40V208H152V40Z",opacity:"0.2"}),h.createElement("path",{d:"M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,202H214V40a6,6,0,0,0-6-6H152a6,6,0,0,0-6,6V82H96a6,6,0,0,0-6,6v42H48a6,6,0,0,0-6,6v66H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12ZM158,46h44V202H158ZM102,94h44V202H102ZM54,142H90v60H54Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,204H212V40a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4V84H96a4,4,0,0,0-4,4v44H48a4,4,0,0,0-4,4v68H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8ZM156,44h48V204H156ZM100,92h48V204H100ZM52,140H92v64H52Z"}))]]),z8=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M196,35.52C177.62,25.51,153.48,20,128,20S78.38,25.51,60,35.52C39.37,46.79,28,62.58,28,80v96c0,17.42,11.37,33.21,32,44.48,18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52c20.66-11.27,32-27.06,32-44.48V80C228,62.58,216.63,46.79,196,35.52ZM204,128c0,17-31.21,36-76,36s-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94ZM128,44c44.79,0,76,19,76,36s-31.21,36-76,36S52,97,52,80,83.21,44,128,44Zm0,168c-44.79,0-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94V176C204,193,172.79,212,128,212Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,80c0,26.51-39.4,48-88,48S40,106.51,40,80s39.4-48,88-48S216,53.49,216,80Z",opacity:"0.2"}),h.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64Zm-21.61,74.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,26C75.29,26,34,49.72,34,80v96c0,30.28,41.29,54,94,54s94-23.72,94-54V80C222,49.72,180.71,26,128,26Zm0,12c44.45,0,82,19.23,82,42s-37.55,42-82,42S46,102.77,46,80,83.55,38,128,38Zm82,138c0,22.77-37.55,42-82,42s-82-19.23-82-42V154.79C62,171.16,92.37,182,128,182s66-10.84,82-27.21Zm0-48c0,22.77-37.55,42-82,42s-82-19.23-82-42V106.79C62,123.16,92.37,134,128,134s66-10.84,82-27.21Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M192.14,42.55C174.94,33.17,152.16,28,128,28S81.06,33.17,63.86,42.55C45.89,52.35,36,65.65,36,80v96c0,14.35,9.89,27.65,27.86,37.45,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c18-9.8,27.86-23.1,27.86-37.45V80C220,65.65,210.11,52.35,192.14,42.55ZM212,176c0,11.29-8.41,22.1-23.69,30.43C172.27,215.18,150.85,220,128,220s-44.27-4.82-60.31-13.57C52.41,198.1,44,187.29,44,176V149.48c4.69,5.93,11.37,11.34,19.86,16,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c8.49-4.63,15.17-10,19.86-16Zm0-48c0,11.29-8.41,22.1-23.69,30.43C172.27,167.18,150.85,172,128,172s-44.27-4.82-60.31-13.57C52.41,150.1,44,139.29,44,128V101.48c4.69,5.93,11.37,11.34,19.86,16,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c8.49-4.63,15.17-10,19.86-16Zm-23.69-17.57C172.27,119.18,150.85,124,128,124s-44.27-4.82-60.31-13.57C52.41,102.1,44,91.29,44,80s8.41-22.1,23.69-30.43C83.73,40.82,105.15,36,128,36s44.27,4.82,60.31,13.57C203.59,57.9,212,68.71,212,80S203.59,102.1,188.31,110.43Z"}))]]),L8=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M248.49,71.51l-32-32a12,12,0,0,0-17,17L211,68h-3c-52,0-64.8,30.71-75.08,55.38-8.82,21.17-15.45,37.05-42.75,40.09a44,44,0,1,0,.28,24.08c43.34-3.87,55.07-32,64.63-54.93C164.9,109,172,92,208,92h3l-11.52,11.51a12,12,0,0,0,17,17l32-32A12,12,0,0,0,248.49,71.51ZM48,196a20,20,0,1,1,20-20A20,20,0,0,1,48,196Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M80,176a32,32,0,1,1-32-32A32,32,0,0,1,80,176Z",opacity:"0.2"}),h.createElement("path",{d:"M245.66,74.34l-32-32a8,8,0,0,0-11.32,11.32L220.69,72H208c-49.33,0-61.05,28.12-71.38,52.92-9.38,22.51-16.92,40.59-49.48,42.84a40,40,0,1,0,.1,16c43.26-2.65,54.34-29.15,64.14-52.69C161.41,107,169.33,88,208,88h12.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,74.34ZM48,200a24,24,0,1,1,24-24A24,24,0,0,1,48,200Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M245.66,85.66l-32,32a8,8,0,0,1-11.32-11.32L220.69,88H208c-38.67,0-46.59,19-56.62,43.08C141.05,155.88,129.33,184,80,184H79a32,32,0,1,1,0-16h1c38.67,0,46.59-19,56.62-43.08C147,100.12,158.67,72,208,72h12.69L202.34,53.66a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,245.66,85.66Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M244.24,75.76l-32-32a6,6,0,0,0-8.48,8.48L225.51,74H208c-48,0-59.44,27.46-69.54,51.69-9.43,22.64-17.66,42.33-53,44.16a38,38,0,1,0,.06,12c43.34-2.06,54.29-28.29,64-51.55C159.44,106.53,168,86,208,86h17.51l-21.75,21.76a6,6,0,1,0,8.48,8.48l32-32A6,6,0,0,0,244.24,75.76ZM48,202a26,26,0,1,1,26-26A26,26,0,0,1,48,202Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M245.66,74.34l-32-32a8,8,0,0,0-11.32,11.32L220.69,72H208c-49.33,0-61.05,28.12-71.38,52.92-9.38,22.51-16.92,40.59-49.48,42.84a40,40,0,1,0,.1,16c43.26-2.65,54.34-29.15,64.14-52.69C161.41,107,169.33,88,208,88h12.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,74.34ZM48,200a24,24,0,1,1,24-24A24,24,0,0,1,48,200Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M242.83,77.17l-32-32a4,4,0,0,0-5.66,5.66L230.34,76H208c-46.67,0-57.84,26.81-67.69,50.46-9.46,22.69-18.4,44.16-56.55,45.48a36,36,0,1,0,0,8c43.49-1.42,54.33-27.39,63.91-50.39C157.45,106.12,166.67,84,208,84h22.34l-25.17,25.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,242.83,77.17ZM48,204a28,28,0,1,1,28-28A28,28,0,0,1,48,204Z"}))]]),_8=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm113.86-49.57A12,12,0,0,0,236,98.34L208.21,82.49l-.11-31.31a12,12,0,0,0-4.25-9.12,116,116,0,0,0-38-21.41,12,12,0,0,0-9.68.89L128,37.27,99.83,21.53a12,12,0,0,0-9.7-.9,116.06,116.06,0,0,0-38,21.47,12,12,0,0,0-4.24,9.1l-.14,31.34L20,98.35a12,12,0,0,0-5.85,8.11,110.7,110.7,0,0,0,0,43.11A12,12,0,0,0,20,157.66l27.82,15.85.11,31.31a12,12,0,0,0,4.25,9.12,116,116,0,0,0,38,21.41,12,12,0,0,0,9.68-.89L128,218.73l28.14,15.74a12,12,0,0,0,9.7.9,116.06,116.06,0,0,0,38-21.47,12,12,0,0,0,4.24-9.1l.14-31.34,27.81-15.81a12,12,0,0,0,5.85-8.11A110.7,110.7,0,0,0,241.86,106.43Zm-22.63,33.18-26.88,15.28a11.94,11.94,0,0,0-4.55,4.59c-.54,1-1.11,1.93-1.7,2.88a12,12,0,0,0-1.83,6.31L184.13,199a91.83,91.83,0,0,1-21.07,11.87l-27.15-15.19a12,12,0,0,0-5.86-1.53h-.29c-1.14,0-2.3,0-3.44,0a12.08,12.08,0,0,0-6.14,1.51L93,210.82A92.27,92.27,0,0,1,71.88,199l-.11-30.24a12,12,0,0,0-1.83-6.32c-.58-.94-1.16-1.91-1.7-2.88A11.92,11.92,0,0,0,63.7,155L36.8,139.63a86.53,86.53,0,0,1,0-23.24l26.88-15.28a12,12,0,0,0,4.55-4.58c.54-1,1.11-1.94,1.7-2.89a12,12,0,0,0,1.83-6.31L71.87,57A91.83,91.83,0,0,1,92.94,45.17l27.15,15.19a11.92,11.92,0,0,0,6.15,1.52c1.14,0,2.3,0,3.44,0a12.08,12.08,0,0,0,6.14-1.51L163,45.18A92.27,92.27,0,0,1,184.12,57l.11,30.24a12,12,0,0,0,1.83,6.32c.58.94,1.16,1.91,1.7,2.88A11.92,11.92,0,0,0,192.3,101l26.9,15.33A86.53,86.53,0,0,1,219.23,139.61Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),h.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Zm108-54.4a6,6,0,0,0-2.92-4L202.64,86.22l-.42-.71L202.1,51.2A6,6,0,0,0,200,46.64a110.12,110.12,0,0,0-36.07-20.31,6,6,0,0,0-4.84.45L128.46,43.86h-1L96.91,26.76a6,6,0,0,0-4.86-.44A109.92,109.92,0,0,0,56,46.68a6,6,0,0,0-2.12,4.55l-.16,34.34c-.14.23-.28.47-.41.71L22.91,103.57A6,6,0,0,0,20,107.62a104.81,104.81,0,0,0,0,40.78,6,6,0,0,0,2.92,4l30.42,17.33.42.71.12,34.31A6,6,0,0,0,56,209.36a110.12,110.12,0,0,0,36.07,20.31,6,6,0,0,0,4.84-.45l30.61-17.08h1l30.56,17.1A6.09,6.09,0,0,0,162,230a5.83,5.83,0,0,0,1.93-.32,109.92,109.92,0,0,0,36-20.36,6,6,0,0,0,2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6,6,0,0,0,2.92-4.05A104.81,104.81,0,0,0,236,107.6Zm-11.25,35.79L195.32,160.1a6.07,6.07,0,0,0-2.28,2.3c-.59,1-1.21,2.11-1.86,3.14a6,6,0,0,0-.91,3.16l-.16,33.21a98.15,98.15,0,0,1-27.52,15.53L133,200.88a6,6,0,0,0-2.93-.77h-.14c-1.24,0-2.5,0-3.74,0a6,6,0,0,0-3.07.76L93.45,217.43a98,98,0,0,1-27.56-15.49l-.12-33.17a6,6,0,0,0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6,6,0,0,0-2.27-2.3L31.3,143.4a93,93,0,0,1,0-30.79L60.68,95.9A6.07,6.07,0,0,0,63,93.6c.59-1,1.21-2.11,1.86-3.14a6,6,0,0,0,.91-3.16l.16-33.21A98.15,98.15,0,0,1,93.41,38.56L123,55.12a5.81,5.81,0,0,0,3.07.76c1.24,0,2.5,0,3.74,0a6,6,0,0,0,3.07-.76l29.65-16.56a98,98,0,0,1,27.56,15.49l.12,33.17a6,6,0,0,0,.91,3.16c.64,1,1.27,2.08,1.86,3.14a6,6,0,0,0,2.27,2.3L224.7,112.6A93,93,0,0,1,224.73,143.39Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm106-56a4,4,0,0,0-2-2.7l-30.89-17.6q-.47-.82-1-1.62L200.1,51.2a3.94,3.94,0,0,0-1.42-3,107.8,107.8,0,0,0-35.41-19.94,4,4,0,0,0-3.23.29L129,45.87h-2l-31-17.36a4,4,0,0,0-3.23-.3,108.05,108.05,0,0,0-35.39,20,4,4,0,0,0-1.41,3l-.16,34.9-1,1.62L23.9,105.3A4,4,0,0,0,22,108a102.76,102.76,0,0,0,0,40,4,4,0,0,0,1.95,2.7l30.89,17.6q.47.83,1,1.62l.12,34.87a3.94,3.94,0,0,0,1.42,3,107.8,107.8,0,0,0,35.41,19.94,4,4,0,0,0,3.23-.29L127,210.13h2l31,17.36a4,4,0,0,0,3.23.3,108.05,108.05,0,0,0,35.39-20,4,4,0,0,0,1.41-3l.16-34.9,1-1.62L232.1,150.7a4,4,0,0,0,2-2.71A102.76,102.76,0,0,0,234,108Zm-7.48,36.67L196.3,161.84a4,4,0,0,0-1.51,1.53c-.61,1.09-1.25,2.17-1.91,3.24a3.92,3.92,0,0,0-.61,2.1l-.16,34.15a99.8,99.8,0,0,1-29.7,16.77l-30.4-17a4.06,4.06,0,0,0-2-.51H130c-1.28,0-2.57,0-3.84,0a4.1,4.1,0,0,0-2.05.51l-30.45,17A100.23,100.23,0,0,1,63.89,202.9l-.12-34.12a3.93,3.93,0,0,0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4,4,0,0,0-1.51-1.53L29.49,144.68a94.78,94.78,0,0,1,0-33.34L59.7,94.16a4,4,0,0,0,1.51-1.53c.61-1.09,1.25-2.17,1.91-3.23a4,4,0,0,0,.61-2.11l.16-34.15a99.8,99.8,0,0,1,29.7-16.77l30.4,17a4.1,4.1,0,0,0,2.05.51c1.28,0,2.57,0,3.84,0a4,4,0,0,0,2.05-.51l30.45-17A100.23,100.23,0,0,1,192.11,53.1l.12,34.12a3.93,3.93,0,0,0,.61,2.11c.66,1,1.3,2.14,1.91,3.23a4,4,0,0,0,1.51,1.53l30.25,17.23A94.78,94.78,0,0,1,226.54,144.66Z"}))]]),U8=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M236.37,139.4a12,12,0,0,0-12-3A84.07,84.07,0,0,1,119.6,31.59a12,12,0,0,0-15-15A108.86,108.86,0,0,0,49.69,55.07,108,108,0,0,0,136,228a107.09,107.09,0,0,0,64.93-21.69,108.86,108.86,0,0,0,38.44-54.94A12,12,0,0,0,236.37,139.4Zm-49.88,47.74A84,84,0,0,1,68.86,69.51,84.93,84.93,0,0,1,92.27,48.29Q92,52.13,92,56A108.12,108.12,0,0,0,200,164q3.87,0,7.71-.27A84.79,84.79,0,0,1,186.49,187.14Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z",opacity:"0.2"}),h.createElement("path",{d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232.13,143.64a6,6,0,0,0-6-1.49A90.07,90.07,0,0,1,113.86,29.85a6,6,0,0,0-7.49-7.48A102.88,102.88,0,0,0,54.48,58.68,102,102,0,0,0,197.32,201.52a102.88,102.88,0,0,0,36.31-51.89A6,6,0,0,0,232.13,143.64Zm-42,48.29a90,90,0,0,1-126-126A90.9,90.9,0,0,1,99.65,37.66,102.06,102.06,0,0,0,218.34,156.35,90.9,90.9,0,0,1,190.1,191.93Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M230.72,145.06a4,4,0,0,0-4-1A92.08,92.08,0,0,1,111.94,29.27a4,4,0,0,0-5-5A100.78,100.78,0,0,0,56.08,59.88a100,100,0,0,0,140,140,100.78,100.78,0,0,0,35.59-50.87A4,4,0,0,0,230.72,145.06ZM191.3,193.53A92,92,0,0,1,62.47,64.7a93,93,0,0,1,39.88-30.35,100.09,100.09,0,0,0,119.3,119.3A93,93,0,0,1,191.3,193.53Z"}))]]),H8=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),h.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),Z8=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,56V200a16,16,0,0,1-16,16H48V40H208A16,16,0,0,1,224,56Z",opacity:"0.2"}),h.createElement("path",{d:"M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40A8,8,0,0,0,176,88v32H112a8,8,0,0,0,0,16h64v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,229.66,122.34Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M118,216a6,6,0,0,1-6,6H48a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H54V210h58A6,6,0,0,1,118,216Zm110.24-92.24-40-40a6,6,0,0,0-8.48,8.48L209.51,122H112a6,6,0,0,0,0,12h97.51l-29.75,29.76a6,6,0,1,0,8.48,8.48l40-40A6,6,0,0,0,228.24,123.76Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M116,216a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H52V212h60A4,4,0,0,1,116,216Zm110.83-90.83-40-40a4,4,0,0,0-5.66,5.66L214.34,124H112a4,4,0,0,0,0,8H214.34l-33.17,33.17a4,4,0,0,0,5.66,5.66l40-40A4,4,0,0,0,226.83,125.17Z"}))]]),B8=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M199,125.31l-49.88-18.39L130.69,57a19.92,19.92,0,0,0-37.38,0L74.92,106.92,25,125.31a19.92,19.92,0,0,0,0,37.38l49.88,18.39L93.31,231a19.92,19.92,0,0,0,37.38,0l18.39-49.88L199,162.69a19.92,19.92,0,0,0,0-37.38Zm-63.38,35.16a12,12,0,0,0-7.11,7.11L112,212.28l-16.47-44.7a12,12,0,0,0-7.11-7.11L43.72,144l44.7-16.47a12,12,0,0,0,7.11-7.11L112,75.72l16.47,44.7a12,12,0,0,0,7.11,7.11L180.28,144ZM140,40a12,12,0,0,1,12-12h12V16a12,12,0,0,1,24,0V28h12a12,12,0,0,1,0,24H188V64a12,12,0,0,1-24,0V52H152A12,12,0,0,1,140,40ZM252,88a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12,12,0,0,1,252,88Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M194.82,151.43l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0l-20.3-55.09-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3A7.92,7.92,0,0,1,194.82,151.43Z",opacity:"0.2"}),h.createElement("path",{d:"M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M196.89,130.94,144.4,111.6,125.06,59.11a13.92,13.92,0,0,0-26.12,0L79.6,111.6,27.11,130.94a13.92,13.92,0,0,0,0,26.12L79.6,176.4l19.34,52.49a13.92,13.92,0,0,0,26.12,0L144.4,176.4l52.49-19.34a13.92,13.92,0,0,0,0-26.12Zm-4.15,14.86-55.08,20.3a6,6,0,0,0-3.56,3.56l-20.3,55.08a1.92,1.92,0,0,1-3.6,0L89.9,169.66a6,6,0,0,0-3.56-3.56L31.26,145.8a1.92,1.92,0,0,1,0-3.6l55.08-20.3a6,6,0,0,0,3.56-3.56l20.3-55.08a1.92,1.92,0,0,1,3.6,0l20.3,55.08a6,6,0,0,0,3.56,3.56l55.08,20.3a1.92,1.92,0,0,1,0,3.6ZM146,40a6,6,0,0,1,6-6h18V16a6,6,0,0,1,12,0V34h18a6,6,0,0,1,0,12H182V64a6,6,0,0,1-12,0V46H152A6,6,0,0,1,146,40ZM246,88a6,6,0,0,1-6,6H230v10a6,6,0,0,1-12,0V94H208a6,6,0,0,1,0-12h10V72a6,6,0,0,1,12,0V82h10A6,6,0,0,1,246,88Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M196.2,132.81l-53.36-19.65L123.19,59.8a11.93,11.93,0,0,0-22.38,0L81.16,113.16,27.8,132.81a11.93,11.93,0,0,0,0,22.38l53.36,19.65,19.65,53.36a11.93,11.93,0,0,0,22.38,0l19.65-53.36,53.36-19.65a11.93,11.93,0,0,0,0-22.38Zm-2.77,14.87L138.35,168a4,4,0,0,0-2.37,2.37l-20.3,55.08a3.92,3.92,0,0,1-7.36,0L88,170.35A4,4,0,0,0,85.65,168l-55.08-20.3a3.92,3.92,0,0,1,0-7.36L85.65,120A4,4,0,0,0,88,117.65l20.3-55.08a3.92,3.92,0,0,1,7.36,0L136,117.65a4,4,0,0,0,2.37,2.37l55.08,20.3a3.92,3.92,0,0,1,0,7.36ZM148,40a4,4,0,0,1,4-4h20V16a4,4,0,0,1,8,0V36h20a4,4,0,0,1,0,8H180V64a4,4,0,0,1-8,0V44H152A4,4,0,0,1,148,40Zm96,48a4,4,0,0,1-4,4H228v12a4,4,0,0,1-8,0V92H208a4,4,0,0,1,0-8h12V72a4,4,0,0,1,8,0V84h12A4,4,0,0,1,244,88Z"}))]]),q8=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M116,36V20a12,12,0,0,1,24,0V36a12,12,0,0,1-24,0Zm80,92a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM48,128a12,12,0,0,0-12-12H20a12,12,0,0,0,0,24H36A12,12,0,0,0,48,128Zm80,80a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V220A12,12,0,0,0,128,208Zm108-92H220a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z",opacity:"0.2"}),h.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M122,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-16-16a6,6,0,0,0-8.48,8.48Zm0,119.52-16,16a6,6,0,1,0,8.48,8.48l16-16a6,6,0,1,0-8.48-8.48ZM192,70a6,6,0,0,0,4.24-1.76l16-16a6,6,0,0,0-8.48-8.48l-16,16A6,6,0,0,0,192,70Zm4.24,117.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48-8.48ZM46,128a6,6,0,0,0-6-6H16a6,6,0,0,0,0,12H40A6,6,0,0,0,46,128Zm82,82a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V216A6,6,0,0,0,128,210Zm112-88H216a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M124,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-16-16a4,4,0,0,0-5.66,5.66Zm0,122.34-16,16a4,4,0,0,0,5.66,5.66l16-16a4,4,0,0,0-5.66-5.66ZM192,68a4,4,0,0,0,2.83-1.17l16-16a4,4,0,1,0-5.66-5.66l-16,16A4,4,0,0,0,192,68Zm2.83,121.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66-5.66ZM40,124H16a4,4,0,0,0,0,8H40a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V216A4,4,0,0,0,128,212Zm112-88H216a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Z"}))]]),V8=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M244,56v64a12,12,0,0,1-24,0V85l-75.51,75.52a12,12,0,0,1-17,0L96,129,32.49,192.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0L136,135l67-67H168a12,12,0,0,1,0-24h64A12,12,0,0,1,244,56Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232,56v64L168,56Z",opacity:"0.2"}),h.createElement("path",{d:"M232,48H168a8,8,0,0,0-5.66,13.66L188.69,88,136,140.69l-34.34-34.35a8,8,0,0,0-11.32,0l-72,72a8,8,0,0,0,11.32,11.32L96,123.31l34.34,34.35a8,8,0,0,0,11.32,0L200,99.31l26.34,26.35A8,8,0,0,0,240,120V56A8,8,0,0,0,232,48Zm-8,52.69L187.31,64H224Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M240,56v64a8,8,0,0,1-13.66,5.66L200,99.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,188.69,88,162.34,61.66A8,8,0,0,1,168,48h64A8,8,0,0,1,240,56Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M238,56v64a6,6,0,0,1-12,0V70.48l-85.76,85.76a6,6,0,0,1-8.48,0L96,120.49,28.24,188.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0L136,143.51,217.52,62H168a6,6,0,0,1,0-12h64A6,6,0,0,1,238,56Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M236,56v64a4,4,0,0,1-8,0V65.66l-89.17,89.17a4,4,0,0,1-5.66,0L96,117.66,26.83,186.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0L136,146.34,222.34,60H168a4,4,0,0,1,0-8h64A4,4,0,0,1,236,56Z"}))]]),I8=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20ZM79.57,196.57a60,60,0,0,1,96.86,0,83.72,83.72,0,0,1-96.86,0ZM100,120a28,28,0,1,1,28,28A28,28,0,0,1,100,120ZM194,179.94a83.48,83.48,0,0,0-29-23.42,52,52,0,1,0-74,0,83.48,83.48,0,0,0-29,23.42,84,84,0,1,1,131.9,0Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,128a95.76,95.76,0,0,1-31.8,71.37A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-64.2,39.37h0A96,96,0,1,1,224,128Z",opacity:"0.2"}),h.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26ZM71.44,198a66,66,0,0,1,113.12,0,89.8,89.8,0,0,1-113.12,0ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120Zm99.51,69.64a77.53,77.53,0,0,0-40-31.38,46,46,0,1,0-51,0,77.53,77.53,0,0,0-40,31.38,90,90,0,1,1,131,0Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28ZM68.87,198.42a68,68,0,0,1,118.26,0,91.8,91.8,0,0,1-118.26,0Zm124.3-5.55a75.61,75.61,0,0,0-44.51-34,44,44,0,1,0-41.32,0,75.61,75.61,0,0,0-44.51,34,92,92,0,1,1,130.34,0ZM128,156a36,36,0,1,1,36-36A36,36,0,0,1,128,156Z"}))]]),Y8=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),h.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),G8=h.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),yt=h.forwardRef((s,l)=>{const{alt:i,color:o,size:u,weight:d,mirrored:f,children:m,weights:g,...v}=s,{color:x="currentColor",size:S,weight:T="regular",mirrored:A=!1,...k}=h.useContext(G8);return h.createElement("svg",{ref:l,xmlns:"http://www.w3.org/2000/svg",width:u??S,height:u??S,fill:o??x,viewBox:"0 0 256 256",transform:f||A?"scale(-1, 1)":void 0,...k,...v},!!i&&h.createElement("title",null,i),m,g.get(d??T))});yt.displayName="IconBase";const Pp=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:R8}));Pp.displayName="BellIcon";const Wp=Pp,eh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:j8}));eh.displayName="CaretDownIcon";const X8=eh,th=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:O8}));th.displayName="ChartBarIcon";const nh=th,ah=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:z8}));ah.displayName="DatabaseIcon";const lh=ah,ih=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:L8}));ih.displayName="FlowArrowIcon";const sh=ih,oh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:_8}));oh.displayName="GearSixIcon";const ku=oh,rh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:U8}));rh.displayName="MoonIcon";const Q8=rh,ch=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:H8}));ch.displayName="PlusIcon";const $8=ch,uh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:Z8}));uh.displayName="SignOutIcon";const K8=uh,dh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:B8}));dh.displayName="SparkleIcon";const fh=dh,ph=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:q8}));ph.displayName="SunIcon";const F8=ph,hh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:V8}));hh.displayName="TrendUpIcon";const mh=hh,gh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:I8}));gh.displayName="UserCircleIcon";const lp=gh,bh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:Y8}));bh.displayName="XIcon";const J8=bh;function P8(s){return s?s.split("@")[0].slice(0,2).toUpperCase():null}function Du({theme:s,onThemeToggle:l,onSignOut:i}){const[o,u]=h.useState(!1),[d,f]=h.useState(!1),[m,g]=h.useState($c),v=h.useRef(null);h.useEffect(()=>{function A(k){v.current&&!v.current.contains(k.target)&&u(!1)}return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[]);function x(){Tb(m.trim())}function S(){Nb(),i()}const T=P8($c());return b.jsxs("div",{className:"user-menu",ref:v,children:[b.jsx("button",{className:"user-avatar-btn",onClick:()=>{u(A=>!A),f(!1)},"aria-label":"User menu",children:T?b.jsx("span",{className:"user-avatar-initials",children:T}):b.jsx(lp,{size:20,weight:"fill"})}),o&&b.jsxs("div",{className:"user-dropdown",children:[b.jsxs("div",{className:"user-dropdown-identity",children:[b.jsx("div",{className:"user-avatar-lg",children:T||b.jsx(lp,{size:22,weight:"fill"})}),b.jsx("div",{className:"user-dropdown-email",children:$c()||"No email set"})]}),b.jsx("div",{className:"user-dropdown-divider"}),b.jsxs("button",{className:"user-dropdown-item",onClick:l,children:[s==="dark"?b.jsx(F8,{size:15,weight:"regular"}):b.jsx(Q8,{size:15,weight:"regular"}),b.jsx("span",{children:s==="dark"?"Light mode":"Dark mode"})]}),b.jsx("div",{className:"user-dropdown-divider"}),b.jsxs("button",{className:"user-dropdown-item",onClick:()=>f(A=>!A),children:[b.jsx(ku,{size:15,weight:"regular"}),b.jsx("span",{children:"Settings"})]}),d&&b.jsxs("div",{className:"user-settings-panel",children:[b.jsx("label",{className:"user-settings-label",children:"Email"}),b.jsx("input",{className:"user-settings-input",type:"email",value:m,onChange:A=>g(A.target.value),onBlur:x,placeholder:"you@ennabl.com"})]}),b.jsx("div",{className:"user-dropdown-divider"}),b.jsxs("button",{className:"user-dropdown-item user-dropdown-item--danger",onClick:S,children:[b.jsx(K8,{size:15,weight:"regular"}),b.jsx("span",{children:"Sign out"})]})]})]})}const W8={Sparkle:fh,ChartBar:nh,FlowArrow:sh,Database:lh,TrendUp:mh,Bell:Wp,GearSix:ku};function ev({prds:s,onNavigate:l,theme:i,onThemeToggle:o,onSignOut:u}){return b.jsxs("div",{className:"projects-page",children:[b.jsxs("header",{className:"projects-header",children:[b.jsxs("div",{className:"projects-logo",children:[b.jsx("span",{className:"projects-logo-name",children:"ennabl"}),b.jsx("span",{className:"projects-logo-suffix",children:"builder"})]}),b.jsx(Du,{theme:i,onThemeToggle:o,onSignOut:u})]}),b.jsxs("main",{className:"projects-main",children:[b.jsx("h1",{className:"projects-title",children:"Projects"}),b.jsx("div",{className:"projects-grid",children:Kp.map(d=>{const f=s.filter(v=>v.projectId===d.id),m=f.filter(v=>v.status==="doing").length,g=W8[d.phosphorIcon];return b.jsxs("button",{className:"project-card",onClick:()=>l({page:"project",projectId:d.id}),children:[b.jsx("div",{className:"project-card-icon",children:g&&b.jsx(g,{size:28,weight:"regular"})}),b.jsx("div",{className:"project-card-name",children:d.name}),b.jsx("div",{className:"project-card-meta",children:f.length>0?b.jsxs(b.Fragment,{children:[b.jsxs("span",{className:"project-card-count",children:[f.length," PRD",f.length!==1?"s":""]}),m>0&&b.jsxs("span",{className:"project-card-doing",children:[m," doing"]})]}):b.jsx("span",{className:"project-card-empty",children:"No PRDs yet"})})]},d.id)})})]})]})}var Ri=xp();function tv(){for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return h.useMemo(()=>o=>{l.forEach(u=>u(o))},l)}const Ao=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function jl(s){const l=Object.prototype.toString.call(s);return l==="[object Window]"||l==="[object global]"}function Mu(s){return"nodeType"in s}function xt(s){var l,i;return s?jl(s)?s:Mu(s)&&(l=(i=s.ownerDocument)==null?void 0:i.defaultView)!=null?l:window:window}function Ru(s){const{Document:l}=xt(s);return s instanceof l}function qi(s){return jl(s)?!1:s instanceof xt(s).HTMLElement}function vh(s){return s instanceof xt(s).SVGElement}function Ol(s){return s?jl(s)?s.document:Mu(s)?Ru(s)?s:qi(s)||vh(s)?s.ownerDocument:document:document:document}const dn=Ao?h.useLayoutEffect:h.useEffect;function No(s){const l=h.useRef(s);return dn(()=>{l.current=s}),h.useCallback(function(){for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return l.current==null?void 0:l.current(...o)},[])}function nv(){const s=h.useRef(null),l=h.useCallback((o,u)=>{s.current=setInterval(o,u)},[]),i=h.useCallback(()=>{s.current!==null&&(clearInterval(s.current),s.current=null)},[]);return[l,i]}function Ui(s,l){l===void 0&&(l=[s]);const i=h.useRef(s);return dn(()=>{i.current!==s&&(i.current=s)},l),i}function Vi(s,l){const i=h.useRef();return h.useMemo(()=>{const o=s(i.current);return i.current=o,o},[...l])}function bo(s){const l=No(s),i=h.useRef(null),o=h.useCallback(u=>{u!==i.current&&(l==null||l(u,i.current)),i.current=u},[]);return[i,o]}function vo(s){const l=h.useRef();return h.useEffect(()=>{l.current=s},[s]),l.current}let Pc={};function Ii(s,l){return h.useMemo(()=>{if(l)return l;const i=Pc[s]==null?0:Pc[s]+1;return Pc[s]=i,s+"-"+i},[s,l])}function yh(s){return function(l){for(var i=arguments.length,o=new Array(i>1?i-1:0),u=1;u<i;u++)o[u-1]=arguments[u];return o.reduce((d,f)=>{const m=Object.entries(f);for(const[g,v]of m){const x=d[g];x!=null&&(d[g]=x+s*v)}return d},{...l})}}const Rl=yh(1),yo=yh(-1);function av(s){return"clientX"in s&&"clientY"in s}function To(s){if(!s)return!1;const{KeyboardEvent:l}=xt(s.target);return l&&s instanceof l}function lv(s){if(!s)return!1;const{TouchEvent:l}=xt(s.target);return l&&s instanceof l}function xo(s){if(lv(s)){if(s.touches&&s.touches.length){const{clientX:l,clientY:i}=s.touches[0];return{x:l,y:i}}else if(s.changedTouches&&s.changedTouches.length){const{clientX:l,clientY:i}=s.changedTouches[0];return{x:l,y:i}}}return av(s)?{x:s.clientX,y:s.clientY}:null}const va=Object.freeze({Translate:{toString(s){if(!s)return;const{x:l,y:i}=s;return"translate3d("+(l?Math.round(l):0)+"px, "+(i?Math.round(i):0)+"px, 0)"}},Scale:{toString(s){if(!s)return;const{scaleX:l,scaleY:i}=s;return"scaleX("+l+") scaleY("+i+")"}},Transform:{toString(s){if(s)return[va.Translate.toString(s),va.Scale.toString(s)].join(" ")}},Transition:{toString(s){let{property:l,duration:i,easing:o}=s;return l+" "+i+"ms "+o}}}),ip="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function iv(s){return s.matches(ip)?s:s.querySelector(ip)}const sv={display:"none"};function ov(s){let{id:l,value:i}=s;return Ve.createElement("div",{id:l,style:sv},i)}function rv(s){let{id:l,announcement:i,ariaLiveType:o="assertive"}=s;const u={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return Ve.createElement("div",{id:l,style:u,role:"status","aria-live":o,"aria-atomic":!0},i)}function cv(){const[s,l]=h.useState("");return{announce:h.useCallback(o=>{o!=null&&l(o)},[]),announcement:s}}const xh=h.createContext(null);function uv(s){const l=h.useContext(xh);h.useEffect(()=>{if(!l)throw new Error("useDndMonitor must be used within a children of <DndContext>");return l(s)},[s,l])}function dv(){const[s]=h.useState(()=>new Set),l=h.useCallback(o=>(s.add(o),()=>s.delete(o)),[s]);return[h.useCallback(o=>{let{type:u,event:d}=o;s.forEach(f=>{var m;return(m=f[u])==null?void 0:m.call(f,d)})},[s]),l]}const fv={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},pv={onDragStart(s){let{active:l}=s;return"Picked up draggable item "+l.id+"."},onDragOver(s){let{active:l,over:i}=s;return i?"Draggable item "+l.id+" was moved over droppable area "+i.id+".":"Draggable item "+l.id+" is no longer over a droppable area."},onDragEnd(s){let{active:l,over:i}=s;return i?"Draggable item "+l.id+" was dropped over droppable area "+i.id:"Draggable item "+l.id+" was dropped."},onDragCancel(s){let{active:l}=s;return"Dragging was cancelled. Draggable item "+l.id+" was dropped."}};function hv(s){let{announcements:l=pv,container:i,hiddenTextDescribedById:o,screenReaderInstructions:u=fv}=s;const{announce:d,announcement:f}=cv(),m=Ii("DndLiveRegion"),[g,v]=h.useState(!1);if(h.useEffect(()=>{v(!0)},[]),uv(h.useMemo(()=>({onDragStart(S){let{active:T}=S;d(l.onDragStart({active:T}))},onDragMove(S){let{active:T,over:A}=S;l.onDragMove&&d(l.onDragMove({active:T,over:A}))},onDragOver(S){let{active:T,over:A}=S;d(l.onDragOver({active:T,over:A}))},onDragEnd(S){let{active:T,over:A}=S;d(l.onDragEnd({active:T,over:A}))},onDragCancel(S){let{active:T,over:A}=S;d(l.onDragCancel({active:T,over:A}))}}),[d,l])),!g)return null;const x=Ve.createElement(Ve.Fragment,null,Ve.createElement(ov,{id:o,value:u.draggable}),Ve.createElement(rv,{id:m,announcement:f}));return i?Ri.createPortal(x,i):x}var tt;(function(s){s.DragStart="dragStart",s.DragMove="dragMove",s.DragEnd="dragEnd",s.DragCancel="dragCancel",s.DragOver="dragOver",s.RegisterDroppable="registerDroppable",s.SetDroppableDisabled="setDroppableDisabled",s.UnregisterDroppable="unregisterDroppable"})(tt||(tt={}));function So(){}function mv(s,l){return h.useMemo(()=>({sensor:s,options:l??{}}),[s,l])}function gv(){for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return h.useMemo(()=>[...l].filter(o=>o!=null),[...l])}const fn=Object.freeze({x:0,y:0});function bv(s,l){return Math.sqrt(Math.pow(s.x-l.x,2)+Math.pow(s.y-l.y,2))}function vv(s,l){const i=xo(s);if(!i)return"0 0";const o={x:(i.x-l.left)/l.width*100,y:(i.y-l.top)/l.height*100};return o.x+"% "+o.y+"%"}function yv(s,l){let{data:{value:i}}=s,{data:{value:o}}=l;return i-o}function xv(s,l){let{data:{value:i}}=s,{data:{value:o}}=l;return o-i}function sp(s){let{left:l,top:i,height:o,width:u}=s;return[{x:l,y:i},{x:l+u,y:i},{x:l,y:i+o},{x:l+u,y:i+o}]}function Sv(s,l){if(!s||s.length===0)return null;const[i]=s;return i[l]}const wv=s=>{let{collisionRect:l,droppableRects:i,droppableContainers:o}=s;const u=sp(l),d=[];for(const f of o){const{id:m}=f,g=i.get(m);if(g){const v=sp(g),x=u.reduce((T,A,k)=>T+bv(v[k],A),0),S=Number((x/4).toFixed(4));d.push({id:m,data:{droppableContainer:f,value:S}})}}return d.sort(yv)};function Cv(s,l){const i=Math.max(l.top,s.top),o=Math.max(l.left,s.left),u=Math.min(l.left+l.width,s.left+s.width),d=Math.min(l.top+l.height,s.top+s.height),f=u-o,m=d-i;if(o<u&&i<d){const g=l.width*l.height,v=s.width*s.height,x=f*m,S=x/(g+v-x);return Number(S.toFixed(4))}return 0}const Ev=s=>{let{collisionRect:l,droppableRects:i,droppableContainers:o}=s;const u=[];for(const d of o){const{id:f}=d,m=i.get(f);if(m){const g=Cv(m,l);g>0&&u.push({id:f,data:{droppableContainer:d,value:g}})}}return u.sort(xv)};function Av(s,l,i){return{...s,scaleX:l&&i?l.width/i.width:1,scaleY:l&&i?l.height/i.height:1}}function Sh(s,l){return s&&l?{x:s.left-l.left,y:s.top-l.top}:fn}function Nv(s){return function(i){for(var o=arguments.length,u=new Array(o>1?o-1:0),d=1;d<o;d++)u[d-1]=arguments[d];return u.reduce((f,m)=>({...f,top:f.top+s*m.y,bottom:f.bottom+s*m.y,left:f.left+s*m.x,right:f.right+s*m.x}),{...i})}}const Tv=Nv(1);function wh(s){if(s.startsWith("matrix3d(")){const l=s.slice(9,-1).split(/, /);return{x:+l[12],y:+l[13],scaleX:+l[0],scaleY:+l[5]}}else if(s.startsWith("matrix(")){const l=s.slice(7,-1).split(/, /);return{x:+l[4],y:+l[5],scaleX:+l[0],scaleY:+l[3]}}return null}function kv(s,l,i){const o=wh(l);if(!o)return s;const{scaleX:u,scaleY:d,x:f,y:m}=o,g=s.left-f-(1-u)*parseFloat(i),v=s.top-m-(1-d)*parseFloat(i.slice(i.indexOf(" ")+1)),x=u?s.width/u:s.width,S=d?s.height/d:s.height;return{width:x,height:S,top:v,right:g+x,bottom:v+S,left:g}}const Dv={ignoreTransform:!1};function zl(s,l){l===void 0&&(l=Dv);let i=s.getBoundingClientRect();if(l.ignoreTransform){const{transform:v,transformOrigin:x}=xt(s).getComputedStyle(s);v&&(i=kv(i,v,x))}const{top:o,left:u,width:d,height:f,bottom:m,right:g}=i;return{top:o,left:u,width:d,height:f,bottom:m,right:g}}function op(s){return zl(s,{ignoreTransform:!0})}function Mv(s){const l=s.innerWidth,i=s.innerHeight;return{top:0,left:0,right:l,bottom:i,width:l,height:i}}function Rv(s,l){return l===void 0&&(l=xt(s).getComputedStyle(s)),l.position==="fixed"}function jv(s,l){l===void 0&&(l=xt(s).getComputedStyle(s));const i=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(u=>{const d=l[u];return typeof d=="string"?i.test(d):!1})}function ju(s,l){const i=[];function o(u){if(l!=null&&i.length>=l||!u)return i;if(Ru(u)&&u.scrollingElement!=null&&!i.includes(u.scrollingElement))return i.push(u.scrollingElement),i;if(!qi(u)||vh(u)||i.includes(u))return i;const d=xt(s).getComputedStyle(u);return u!==s&&jv(u,d)&&i.push(u),Rv(u,d)?i:o(u.parentNode)}return s?o(s):i}function Ch(s){const[l]=ju(s,1);return l??null}function Wc(s){return!Ao||!s?null:jl(s)?s:Mu(s)?Ru(s)||s===Ol(s).scrollingElement?window:qi(s)?s:null:null}function Eh(s){return jl(s)?s.scrollX:s.scrollLeft}function Ah(s){return jl(s)?s.scrollY:s.scrollTop}function uu(s){return{x:Eh(s),y:Ah(s)}}var st;(function(s){s[s.Forward=1]="Forward",s[s.Backward=-1]="Backward"})(st||(st={}));function Nh(s){return!Ao||!s?!1:s===document.scrollingElement}function Th(s){const l={x:0,y:0},i=Nh(s)?{height:window.innerHeight,width:window.innerWidth}:{height:s.clientHeight,width:s.clientWidth},o={x:s.scrollWidth-i.width,y:s.scrollHeight-i.height},u=s.scrollTop<=l.y,d=s.scrollLeft<=l.x,f=s.scrollTop>=o.y,m=s.scrollLeft>=o.x;return{isTop:u,isLeft:d,isBottom:f,isRight:m,maxScroll:o,minScroll:l}}const Ov={x:.2,y:.2};function zv(s,l,i,o,u){let{top:d,left:f,right:m,bottom:g}=i;o===void 0&&(o=10),u===void 0&&(u=Ov);const{isTop:v,isBottom:x,isLeft:S,isRight:T}=Th(s),A={x:0,y:0},k={x:0,y:0},M={height:l.height*u.y,width:l.width*u.x};return!v&&d<=l.top+M.height?(A.y=st.Backward,k.y=o*Math.abs((l.top+M.height-d)/M.height)):!x&&g>=l.bottom-M.height&&(A.y=st.Forward,k.y=o*Math.abs((l.bottom-M.height-g)/M.height)),!T&&m>=l.right-M.width?(A.x=st.Forward,k.x=o*Math.abs((l.right-M.width-m)/M.width)):!S&&f<=l.left+M.width&&(A.x=st.Backward,k.x=o*Math.abs((l.left+M.width-f)/M.width)),{direction:A,speed:k}}function Lv(s){if(s===document.scrollingElement){const{innerWidth:d,innerHeight:f}=window;return{top:0,left:0,right:d,bottom:f,width:d,height:f}}const{top:l,left:i,right:o,bottom:u}=s.getBoundingClientRect();return{top:l,left:i,right:o,bottom:u,width:s.clientWidth,height:s.clientHeight}}function kh(s){return s.reduce((l,i)=>Rl(l,uu(i)),fn)}function _v(s){return s.reduce((l,i)=>l+Eh(i),0)}function Uv(s){return s.reduce((l,i)=>l+Ah(i),0)}function Dh(s,l){if(l===void 0&&(l=zl),!s)return;const{top:i,left:o,bottom:u,right:d}=l(s);Ch(s)&&(u<=0||d<=0||i>=window.innerHeight||o>=window.innerWidth)&&s.scrollIntoView({block:"center",inline:"center"})}const Hv=[["x",["left","right"],_v],["y",["top","bottom"],Uv]];class Ou{constructor(l,i){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const o=ju(i),u=kh(o);this.rect={...l},this.width=l.width,this.height=l.height;for(const[d,f,m]of Hv)for(const g of f)Object.defineProperty(this,g,{get:()=>{const v=m(o),x=u[d]-v;return this.rect[g]+x},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class zi{constructor(l){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(i=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...i)})},this.target=l}add(l,i,o){var u;(u=this.target)==null||u.addEventListener(l,i,o),this.listeners.push([l,i,o])}}function Zv(s){const{EventTarget:l}=xt(s);return s instanceof l?s:Ol(s)}function eu(s,l){const i=Math.abs(s.x),o=Math.abs(s.y);return typeof l=="number"?Math.sqrt(i**2+o**2)>l:"x"in l&&"y"in l?i>l.x&&o>l.y:"x"in l?i>l.x:"y"in l?o>l.y:!1}var an;(function(s){s.Click="click",s.DragStart="dragstart",s.Keydown="keydown",s.ContextMenu="contextmenu",s.Resize="resize",s.SelectionChange="selectionchange",s.VisibilityChange="visibilitychange"})(an||(an={}));function rp(s){s.preventDefault()}function Bv(s){s.stopPropagation()}var Te;(function(s){s.Space="Space",s.Down="ArrowDown",s.Right="ArrowRight",s.Left="ArrowLeft",s.Up="ArrowUp",s.Esc="Escape",s.Enter="Enter",s.Tab="Tab"})(Te||(Te={}));const Mh={start:[Te.Space,Te.Enter],cancel:[Te.Esc],end:[Te.Space,Te.Enter,Te.Tab]},qv=(s,l)=>{let{currentCoordinates:i}=l;switch(s.code){case Te.Right:return{...i,x:i.x+25};case Te.Left:return{...i,x:i.x-25};case Te.Down:return{...i,y:i.y+25};case Te.Up:return{...i,y:i.y-25}}};class Rh{constructor(l){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=l;const{event:{target:i}}=l;this.props=l,this.listeners=new zi(Ol(i)),this.windowListeners=new zi(xt(i)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(an.Resize,this.handleCancel),this.windowListeners.add(an.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(an.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:l,onStart:i}=this.props,o=l.node.current;o&&Dh(o),i(fn)}handleKeyDown(l){if(To(l)){const{active:i,context:o,options:u}=this.props,{keyboardCodes:d=Mh,coordinateGetter:f=qv,scrollBehavior:m="smooth"}=u,{code:g}=l;if(d.end.includes(g)){this.handleEnd(l);return}if(d.cancel.includes(g)){this.handleCancel(l);return}const{collisionRect:v}=o.current,x=v?{x:v.left,y:v.top}:fn;this.referenceCoordinates||(this.referenceCoordinates=x);const S=f(l,{active:i,context:o.current,currentCoordinates:x});if(S){const T=yo(S,x),A={x:0,y:0},{scrollableAncestors:k}=o.current;for(const M of k){const B=l.code,{isTop:Z,isRight:G,isLeft:$,isBottom:X,maxScroll:I,minScroll:F}=Th(M),q=Lv(M),te={x:Math.min(B===Te.Right?q.right-q.width/2:q.right,Math.max(B===Te.Right?q.left:q.left+q.width/2,S.x)),y:Math.min(B===Te.Down?q.bottom-q.height/2:q.bottom,Math.max(B===Te.Down?q.top:q.top+q.height/2,S.y))},ue=B===Te.Right&&!G||B===Te.Left&&!$,pe=B===Te.Down&&!X||B===Te.Up&&!Z;if(ue&&te.x!==S.x){const de=M.scrollLeft+T.x,me=B===Te.Right&&de<=I.x||B===Te.Left&&de>=F.x;if(me&&!T.y){M.scrollTo({left:de,behavior:m});return}me?A.x=M.scrollLeft-de:A.x=B===Te.Right?M.scrollLeft-I.x:M.scrollLeft-F.x,A.x&&M.scrollBy({left:-A.x,behavior:m});break}else if(pe&&te.y!==S.y){const de=M.scrollTop+T.y,me=B===Te.Down&&de<=I.y||B===Te.Up&&de>=F.y;if(me&&!T.x){M.scrollTo({top:de,behavior:m});return}me?A.y=M.scrollTop-de:A.y=B===Te.Down?M.scrollTop-I.y:M.scrollTop-F.y,A.y&&M.scrollBy({top:-A.y,behavior:m});break}}this.handleMove(l,Rl(yo(S,this.referenceCoordinates),A))}}}handleMove(l,i){const{onMove:o}=this.props;l.preventDefault(),o(i)}handleEnd(l){const{onEnd:i}=this.props;l.preventDefault(),this.detach(),i()}handleCancel(l){const{onCancel:i}=this.props;l.preventDefault(),this.detach(),i()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Rh.activators=[{eventName:"onKeyDown",handler:(s,l,i)=>{let{keyboardCodes:o=Mh,onActivation:u}=l,{active:d}=i;const{code:f}=s.nativeEvent;if(o.start.includes(f)){const m=d.activatorNode.current;return m&&s.target!==m?!1:(s.preventDefault(),u==null||u({event:s.nativeEvent}),!0)}return!1}}];function cp(s){return!!(s&&"distance"in s)}function up(s){return!!(s&&"delay"in s)}class zu{constructor(l,i,o){var u;o===void 0&&(o=Zv(l.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=l,this.events=i;const{event:d}=l,{target:f}=d;this.props=l,this.events=i,this.document=Ol(f),this.documentListeners=new zi(this.document),this.listeners=new zi(o),this.windowListeners=new zi(xt(f)),this.initialCoordinates=(u=xo(d))!=null?u:fn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:l,props:{options:{activationConstraint:i,bypassActivationConstraint:o}}}=this;if(this.listeners.add(l.move.name,this.handleMove,{passive:!1}),this.listeners.add(l.end.name,this.handleEnd),l.cancel&&this.listeners.add(l.cancel.name,this.handleCancel),this.windowListeners.add(an.Resize,this.handleCancel),this.windowListeners.add(an.DragStart,rp),this.windowListeners.add(an.VisibilityChange,this.handleCancel),this.windowListeners.add(an.ContextMenu,rp),this.documentListeners.add(an.Keydown,this.handleKeydown),i){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(up(i)){this.timeoutId=setTimeout(this.handleStart,i.delay),this.handlePending(i);return}if(cp(i)){this.handlePending(i);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(l,i){const{active:o,onPending:u}=this.props;u(o,l,this.initialCoordinates,i)}handleStart(){const{initialCoordinates:l}=this,{onStart:i}=this.props;l&&(this.activated=!0,this.documentListeners.add(an.Click,Bv,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(an.SelectionChange,this.removeTextSelection),i(l))}handleMove(l){var i;const{activated:o,initialCoordinates:u,props:d}=this,{onMove:f,options:{activationConstraint:m}}=d;if(!u)return;const g=(i=xo(l))!=null?i:fn,v=yo(u,g);if(!o&&m){if(cp(m)){if(m.tolerance!=null&&eu(v,m.tolerance))return this.handleCancel();if(eu(v,m.distance))return this.handleStart()}if(up(m)&&eu(v,m.tolerance))return this.handleCancel();this.handlePending(m,v);return}l.cancelable&&l.preventDefault(),f(g)}handleEnd(){const{onAbort:l,onEnd:i}=this.props;this.detach(),this.activated||l(this.props.active),i()}handleCancel(){const{onAbort:l,onCancel:i}=this.props;this.detach(),this.activated||l(this.props.active),i()}handleKeydown(l){l.code===Te.Esc&&this.handleCancel()}removeTextSelection(){var l;(l=this.document.getSelection())==null||l.removeAllRanges()}}const Vv={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Lu extends zu{constructor(l){const{event:i}=l,o=Ol(i.target);super(l,Vv,o)}}Lu.activators=[{eventName:"onPointerDown",handler:(s,l)=>{let{nativeEvent:i}=s,{onActivation:o}=l;return!i.isPrimary||i.button!==0?!1:(o==null||o({event:i}),!0)}}];const Iv={move:{name:"mousemove"},end:{name:"mouseup"}};var du;(function(s){s[s.RightClick=2]="RightClick"})(du||(du={}));class Yv extends zu{constructor(l){super(l,Iv,Ol(l.event.target))}}Yv.activators=[{eventName:"onMouseDown",handler:(s,l)=>{let{nativeEvent:i}=s,{onActivation:o}=l;return i.button===du.RightClick?!1:(o==null||o({event:i}),!0)}}];const tu={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class Gv extends zu{constructor(l){super(l,tu)}static setup(){return window.addEventListener(tu.move.name,l,{capture:!1,passive:!1}),function(){window.removeEventListener(tu.move.name,l)};function l(){}}}Gv.activators=[{eventName:"onTouchStart",handler:(s,l)=>{let{nativeEvent:i}=s,{onActivation:o}=l;const{touches:u}=i;return u.length>1?!1:(o==null||o({event:i}),!0)}}];var Li;(function(s){s[s.Pointer=0]="Pointer",s[s.DraggableRect=1]="DraggableRect"})(Li||(Li={}));var wo;(function(s){s[s.TreeOrder=0]="TreeOrder",s[s.ReversedTreeOrder=1]="ReversedTreeOrder"})(wo||(wo={}));function Xv(s){let{acceleration:l,activator:i=Li.Pointer,canScroll:o,draggingRect:u,enabled:d,interval:f=5,order:m=wo.TreeOrder,pointerCoordinates:g,scrollableAncestors:v,scrollableAncestorRects:x,delta:S,threshold:T}=s;const A=$v({delta:S,disabled:!d}),[k,M]=nv(),B=h.useRef({x:0,y:0}),Z=h.useRef({x:0,y:0}),G=h.useMemo(()=>{switch(i){case Li.Pointer:return g?{top:g.y,bottom:g.y,left:g.x,right:g.x}:null;case Li.DraggableRect:return u}},[i,u,g]),$=h.useRef(null),X=h.useCallback(()=>{const F=$.current;if(!F)return;const q=B.current.x*Z.current.x,te=B.current.y*Z.current.y;F.scrollBy(q,te)},[]),I=h.useMemo(()=>m===wo.TreeOrder?[...v].reverse():v,[m,v]);h.useEffect(()=>{if(!d||!v.length||!G){M();return}for(const F of I){if((o==null?void 0:o(F))===!1)continue;const q=v.indexOf(F),te=x[q];if(!te)continue;const{direction:ue,speed:pe}=zv(F,te,G,l,T);for(const de of["x","y"])A[de][ue[de]]||(pe[de]=0,ue[de]=0);if(pe.x>0||pe.y>0){M(),$.current=F,k(X,f),B.current=pe,Z.current=ue;return}}B.current={x:0,y:0},Z.current={x:0,y:0},M()},[l,X,o,M,d,f,JSON.stringify(G),JSON.stringify(A),k,v,I,x,JSON.stringify(T)])}const Qv={x:{[st.Backward]:!1,[st.Forward]:!1},y:{[st.Backward]:!1,[st.Forward]:!1}};function $v(s){let{delta:l,disabled:i}=s;const o=vo(l);return Vi(u=>{if(i||!o||!u)return Qv;const d={x:Math.sign(l.x-o.x),y:Math.sign(l.y-o.y)};return{x:{[st.Backward]:u.x[st.Backward]||d.x===-1,[st.Forward]:u.x[st.Forward]||d.x===1},y:{[st.Backward]:u.y[st.Backward]||d.y===-1,[st.Forward]:u.y[st.Forward]||d.y===1}}},[i,l,o])}function Kv(s,l){const i=l!=null?s.get(l):void 0,o=i?i.node.current:null;return Vi(u=>{var d;return l==null?null:(d=o??u)!=null?d:null},[o,l])}function Fv(s,l){return h.useMemo(()=>s.reduce((i,o)=>{const{sensor:u}=o,d=u.activators.map(f=>({eventName:f.eventName,handler:l(f.handler,o)}));return[...i,...d]},[]),[s,l])}var Hi;(function(s){s[s.Always=0]="Always",s[s.BeforeDragging=1]="BeforeDragging",s[s.WhileDragging=2]="WhileDragging"})(Hi||(Hi={}));var fu;(function(s){s.Optimized="optimized"})(fu||(fu={}));const dp=new Map;function Jv(s,l){let{dragging:i,dependencies:o,config:u}=l;const[d,f]=h.useState(null),{frequency:m,measure:g,strategy:v}=u,x=h.useRef(s),S=B(),T=Ui(S),A=h.useCallback(function(Z){Z===void 0&&(Z=[]),!T.current&&f(G=>G===null?Z:G.concat(Z.filter($=>!G.includes($))))},[T]),k=h.useRef(null),M=Vi(Z=>{if(S&&!i)return dp;if(!Z||Z===dp||x.current!==s||d!=null){const G=new Map;for(let $ of s){if(!$)continue;if(d&&d.length>0&&!d.includes($.id)&&$.rect.current){G.set($.id,$.rect.current);continue}const X=$.node.current,I=X?new Ou(g(X),X):null;$.rect.current=I,I&&G.set($.id,I)}return G}return Z},[s,d,i,S,g]);return h.useEffect(()=>{x.current=s},[s]),h.useEffect(()=>{S||A()},[i,S]),h.useEffect(()=>{d&&d.length>0&&f(null)},[JSON.stringify(d)]),h.useEffect(()=>{S||typeof m!="number"||k.current!==null||(k.current=setTimeout(()=>{A(),k.current=null},m))},[m,S,A,...o]),{droppableRects:M,measureDroppableContainers:A,measuringScheduled:d!=null};function B(){switch(v){case Hi.Always:return!1;case Hi.BeforeDragging:return i;default:return!i}}}function _u(s,l){return Vi(i=>s?i||(typeof l=="function"?l(s):s):null,[l,s])}function Pv(s,l){return _u(s,l)}function Wv(s){let{callback:l,disabled:i}=s;const o=No(l),u=h.useMemo(()=>{if(i||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:d}=window;return new d(o)},[o,i]);return h.useEffect(()=>()=>u==null?void 0:u.disconnect(),[u]),u}function ko(s){let{callback:l,disabled:i}=s;const o=No(l),u=h.useMemo(()=>{if(i||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:d}=window;return new d(o)},[i]);return h.useEffect(()=>()=>u==null?void 0:u.disconnect(),[u]),u}function e6(s){return new Ou(zl(s),s)}function fp(s,l,i){l===void 0&&(l=e6);const[o,u]=h.useState(null);function d(){u(g=>{if(!s)return null;if(s.isConnected===!1){var v;return(v=g??i)!=null?v:null}const x=l(s);return JSON.stringify(g)===JSON.stringify(x)?g:x})}const f=Wv({callback(g){if(s)for(const v of g){const{type:x,target:S}=v;if(x==="childList"&&S instanceof HTMLElement&&S.contains(s)){d();break}}}}),m=ko({callback:d});return dn(()=>{d(),s?(m==null||m.observe(s),f==null||f.observe(document.body,{childList:!0,subtree:!0})):(m==null||m.disconnect(),f==null||f.disconnect())},[s]),o}function t6(s){const l=_u(s);return Sh(s,l)}const pp=[];function n6(s){const l=h.useRef(s),i=Vi(o=>s?o&&o!==pp&&s&&l.current&&s.parentNode===l.current.parentNode?o:ju(s):pp,[s]);return h.useEffect(()=>{l.current=s},[s]),i}function a6(s){const[l,i]=h.useState(null),o=h.useRef(s),u=h.useCallback(d=>{const f=Wc(d.target);f&&i(m=>m?(m.set(f,uu(f)),new Map(m)):null)},[]);return h.useEffect(()=>{const d=o.current;if(s!==d){f(d);const m=s.map(g=>{const v=Wc(g);return v?(v.addEventListener("scroll",u,{passive:!0}),[v,uu(v)]):null}).filter(g=>g!=null);i(m.length?new Map(m):null),o.current=s}return()=>{f(s),f(d)};function f(m){m.forEach(g=>{const v=Wc(g);v==null||v.removeEventListener("scroll",u)})}},[u,s]),h.useMemo(()=>s.length?l?Array.from(l.values()).reduce((d,f)=>Rl(d,f),fn):kh(s):fn,[s,l])}function hp(s,l){l===void 0&&(l=[]);const i=h.useRef(null);return h.useEffect(()=>{i.current=null},l),h.useEffect(()=>{const o=s!==fn;o&&!i.current&&(i.current=s),!o&&i.current&&(i.current=null)},[s]),i.current?yo(s,i.current):fn}function l6(s){h.useEffect(()=>{if(!Ao)return;const l=s.map(i=>{let{sensor:o}=i;return o.setup==null?void 0:o.setup()});return()=>{for(const i of l)i==null||i()}},s.map(l=>{let{sensor:i}=l;return i}))}function i6(s,l){return h.useMemo(()=>s.reduce((i,o)=>{let{eventName:u,handler:d}=o;return i[u]=f=>{d(f,l)},i},{}),[s,l])}function jh(s){return h.useMemo(()=>s?Mv(s):null,[s])}const mp=[];function s6(s,l){l===void 0&&(l=zl);const[i]=s,o=jh(i?xt(i):null),[u,d]=h.useState(mp);function f(){d(()=>s.length?s.map(g=>Nh(g)?o:new Ou(l(g),g)):mp)}const m=ko({callback:f});return dn(()=>{m==null||m.disconnect(),f(),s.forEach(g=>m==null?void 0:m.observe(g))},[s]),u}function Oh(s){if(!s)return null;if(s.children.length>1)return s;const l=s.children[0];return qi(l)?l:s}function o6(s){let{measure:l}=s;const[i,o]=h.useState(null),u=h.useCallback(v=>{for(const{target:x}of v)if(qi(x)){o(S=>{const T=l(x);return S?{...S,width:T.width,height:T.height}:T});break}},[l]),d=ko({callback:u}),f=h.useCallback(v=>{const x=Oh(v);d==null||d.disconnect(),x&&(d==null||d.observe(x)),o(x?l(x):null)},[l,d]),[m,g]=bo(f);return h.useMemo(()=>({nodeRef:m,rect:i,setRef:g}),[i,m,g])}const r6=[{sensor:Lu,options:{}},{sensor:Rh,options:{}}],c6={current:{}},po={draggable:{measure:op},droppable:{measure:op,strategy:Hi.WhileDragging,frequency:fu.Optimized},dragOverlay:{measure:zl}};class _i extends Map{get(l){var i;return l!=null&&(i=super.get(l))!=null?i:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(l=>{let{disabled:i}=l;return!i})}getNodeFor(l){var i,o;return(i=(o=this.get(l))==null?void 0:o.node.current)!=null?i:void 0}}const u6={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new _i,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:So},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:po,measureDroppableContainers:So,windowRect:null,measuringScheduled:!1},zh={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:So,draggableNodes:new Map,over:null,measureDroppableContainers:So},Yi=h.createContext(zh),Lh=h.createContext(u6);function d6(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new _i}}}function f6(s,l){switch(l.type){case tt.DragStart:return{...s,draggable:{...s.draggable,initialCoordinates:l.initialCoordinates,active:l.active}};case tt.DragMove:return s.draggable.active==null?s:{...s,draggable:{...s.draggable,translate:{x:l.coordinates.x-s.draggable.initialCoordinates.x,y:l.coordinates.y-s.draggable.initialCoordinates.y}}};case tt.DragEnd:case tt.DragCancel:return{...s,draggable:{...s.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case tt.RegisterDroppable:{const{element:i}=l,{id:o}=i,u=new _i(s.droppable.containers);return u.set(o,i),{...s,droppable:{...s.droppable,containers:u}}}case tt.SetDroppableDisabled:{const{id:i,key:o,disabled:u}=l,d=s.droppable.containers.get(i);if(!d||o!==d.key)return s;const f=new _i(s.droppable.containers);return f.set(i,{...d,disabled:u}),{...s,droppable:{...s.droppable,containers:f}}}case tt.UnregisterDroppable:{const{id:i,key:o}=l,u=s.droppable.containers.get(i);if(!u||o!==u.key)return s;const d=new _i(s.droppable.containers);return d.delete(i),{...s,droppable:{...s.droppable,containers:d}}}default:return s}}function p6(s){let{disabled:l}=s;const{active:i,activatorEvent:o,draggableNodes:u}=h.useContext(Yi),d=vo(o),f=vo(i==null?void 0:i.id);return h.useEffect(()=>{if(!l&&!o&&d&&f!=null){if(!To(d)||document.activeElement===d.target)return;const m=u.get(f);if(!m)return;const{activatorNode:g,node:v}=m;if(!g.current&&!v.current)return;requestAnimationFrame(()=>{for(const x of[g.current,v.current]){if(!x)continue;const S=iv(x);if(S){S.focus();break}}})}},[o,l,u,f,d]),null}function _h(s,l){let{transform:i,...o}=l;return s!=null&&s.length?s.reduce((u,d)=>d({transform:u,...o}),i):i}function h6(s){return h.useMemo(()=>({draggable:{...po.draggable,...s==null?void 0:s.draggable},droppable:{...po.droppable,...s==null?void 0:s.droppable},dragOverlay:{...po.dragOverlay,...s==null?void 0:s.dragOverlay}}),[s==null?void 0:s.draggable,s==null?void 0:s.droppable,s==null?void 0:s.dragOverlay])}function m6(s){let{activeNode:l,measure:i,initialRect:o,config:u=!0}=s;const d=h.useRef(!1),{x:f,y:m}=typeof u=="boolean"?{x:u,y:u}:u;dn(()=>{if(!f&&!m||!l){d.current=!1;return}if(d.current||!o)return;const v=l==null?void 0:l.node.current;if(!v||v.isConnected===!1)return;const x=i(v),S=Sh(x,o);if(f||(S.x=0),m||(S.y=0),d.current=!0,Math.abs(S.x)>0||Math.abs(S.y)>0){const T=Ch(v);T&&T.scrollBy({top:S.y,left:S.x})}},[l,f,m,o,i])}const Do=h.createContext({...fn,scaleX:1,scaleY:1});var ba;(function(s){s[s.Uninitialized=0]="Uninitialized",s[s.Initializing=1]="Initializing",s[s.Initialized=2]="Initialized"})(ba||(ba={}));const g6=h.memo(function(l){var i,o,u,d;let{id:f,accessibility:m,autoScroll:g=!0,children:v,sensors:x=r6,collisionDetection:S=Ev,measuring:T,modifiers:A,...k}=l;const M=h.useReducer(f6,void 0,d6),[B,Z]=M,[G,$]=dv(),[X,I]=h.useState(ba.Uninitialized),F=X===ba.Initialized,{draggable:{active:q,nodes:te,translate:ue},droppable:{containers:pe}}=B,de=q!=null?te.get(q):null,me=h.useRef({initial:null,translated:null}),Ae=h.useMemo(()=>{var Ge;return q!=null?{id:q,data:(Ge=de==null?void 0:de.data)!=null?Ge:c6,rect:me}:null},[q,de]),ke=h.useRef(null),[ae,j]=h.useState(null),[V,W]=h.useState(null),ce=Ui(k,Object.values(k)),be=Ii("DndDescribedBy",f),E=h.useMemo(()=>pe.getEnabled(),[pe]),L=h6(T),{droppableRects:K,measureDroppableContainers:J,measuringScheduled:Y}=Jv(E,{dragging:F,dependencies:[ue.x,ue.y],config:L.droppable}),Q=Kv(te,q),P=h.useMemo(()=>V?xo(V):null,[V]),ie=Ia(),le=Pv(Q,L.draggable.measure);m6({activeNode:q!=null?te.get(q):null,config:ie.layoutShiftCompensation,initialRect:le,measure:L.draggable.measure});const re=fp(Q,L.draggable.measure,le),St=fp(Q?Q.parentElement:null),nt=h.useRef({activatorEvent:null,active:null,activeNode:Q,collisionRect:null,collisions:null,droppableRects:K,draggableNodes:te,draggingNode:null,draggingNodeRect:null,droppableContainers:pe,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),qt=pe.getNodeFor((i=nt.current.over)==null?void 0:i.id),qe=o6({measure:L.dragOverlay.measure}),pn=(o=qe.nodeRef.current)!=null?o:Q,hn=F?(u=qe.rect)!=null?u:re:null,Gi=!!(qe.nodeRef.current&&qe.rect),Ll=t6(Gi?null:re),ya=jh(pn?xt(pn):null),Vt=n6(F?qt??Q:null),Gn=s6(Vt),qa=_h(A,{transform:{x:ue.x-Ll.x,y:ue.y-Ll.y,scaleX:1,scaleY:1},activatorEvent:V,active:Ae,activeNodeRect:re,containerNodeRect:St,draggingNodeRect:hn,over:nt.current.over,overlayNodeRect:qe.rect,scrollableAncestors:Vt,scrollableAncestorRects:Gn,windowRect:ya}),Xi=P?Rl(P,ue):null,ft=a6(Vt),Mo=hp(ft),Qi=hp(ft,[re]),wn=Rl(qa,Mo),ln=hn?Tv(hn,qa):null,xa=Ae&&ln?S({active:Ae,collisionRect:ln,droppableRects:K,droppableContainers:E,pointerCoordinates:Xi}):null,_l=Sv(xa,"id"),[mn,$i]=h.useState(null),Sa=Gi?qa:Rl(qa,Qi),gt=Av(Sa,(d=mn==null?void 0:mn.rect)!=null?d:null,re),It=h.useRef(null),pt=h.useCallback((Ge,Xe)=>{let{sensor:at,options:wt}=Xe;if(ke.current==null)return;const Ct=te.get(ke.current);if(!Ct)return;const ht=Ge.nativeEvent,Et=new at({active:ke.current,activeNode:Ct,event:ht,options:wt,context:nt,onAbort(We){if(!te.get(We))return;const{onDragAbort:jt}=ce.current,Gt={id:We};jt==null||jt(Gt),G({type:"onDragAbort",event:Gt})},onPending(We,sn,jt,Gt){if(!te.get(We))return;const{onDragPending:En}=ce.current,on={id:We,constraint:sn,initialCoordinates:jt,offset:Gt};En==null||En(on),G({type:"onDragPending",event:on})},onStart(We){const sn=ke.current;if(sn==null)return;const jt=te.get(sn);if(!jt)return;const{onDragStart:Gt}=ce.current,Cn={activatorEvent:ht,active:{id:sn,data:jt.data,rect:me}};Ri.unstable_batchedUpdates(()=>{Gt==null||Gt(Cn),I(ba.Initializing),Z({type:tt.DragStart,initialCoordinates:We,active:sn}),G({type:"onDragStart",event:Cn}),j(It.current),W(ht)})},onMove(We){Z({type:tt.DragMove,coordinates:We})},onEnd:Yt(tt.DragEnd),onCancel:Yt(tt.DragCancel)});It.current=Et;function Yt(We){return async function(){const{active:jt,collisions:Gt,over:Cn,scrollAdjustedTranslate:En}=nt.current;let on=null;if(jt&&En){const{cancelDrop:Xn}=ce.current;on={activatorEvent:ht,active:jt,collisions:Gt,delta:En,over:Cn},We===tt.DragEnd&&typeof Xn=="function"&&await Promise.resolve(Xn(on))&&(We=tt.DragCancel)}ke.current=null,Ri.unstable_batchedUpdates(()=>{Z({type:We}),I(ba.Uninitialized),$i(null),j(null),W(null),It.current=null;const Xn=We===tt.DragEnd?"onDragEnd":"onDragCancel";if(on){const Xt=ce.current[Xn];Xt==null||Xt(on),G({type:Xn,event:on})}})}}},[te]),Ro=h.useCallback((Ge,Xe)=>(at,wt)=>{const Ct=at.nativeEvent,ht=te.get(wt);if(ke.current!==null||!ht||Ct.dndKit||Ct.defaultPrevented)return;const Et={active:ht};Ge(at,Xe.options,Et)===!0&&(Ct.dndKit={capturedBy:Xe.sensor},ke.current=wt,pt(at,Xe))},[te,pt]),Ki=Fv(x,Ro);l6(x),dn(()=>{re&&X===ba.Initializing&&I(ba.Initialized)},[re,X]),h.useEffect(()=>{const{onDragMove:Ge}=ce.current,{active:Xe,activatorEvent:at,collisions:wt,over:Ct}=nt.current;if(!Xe||!at)return;const ht={active:Xe,activatorEvent:at,collisions:wt,delta:{x:wn.x,y:wn.y},over:Ct};Ri.unstable_batchedUpdates(()=>{Ge==null||Ge(ht),G({type:"onDragMove",event:ht})})},[wn.x,wn.y]),h.useEffect(()=>{const{active:Ge,activatorEvent:Xe,collisions:at,droppableContainers:wt,scrollAdjustedTranslate:Ct}=nt.current;if(!Ge||ke.current==null||!Xe||!Ct)return;const{onDragOver:ht}=ce.current,Et=wt.get(_l),Yt=Et&&Et.rect.current?{id:Et.id,rect:Et.rect.current,data:Et.data,disabled:Et.disabled}:null,We={active:Ge,activatorEvent:Xe,collisions:at,delta:{x:Ct.x,y:Ct.y},over:Yt};Ri.unstable_batchedUpdates(()=>{$i(Yt),ht==null||ht(We),G({type:"onDragOver",event:We})})},[_l]),dn(()=>{nt.current={activatorEvent:V,active:Ae,activeNode:Q,collisionRect:ln,collisions:xa,droppableRects:K,draggableNodes:te,draggingNode:pn,draggingNodeRect:hn,droppableContainers:pe,over:mn,scrollableAncestors:Vt,scrollAdjustedTranslate:wn},me.current={initial:hn,translated:ln}},[Ae,Q,xa,ln,te,pn,hn,K,pe,mn,Vt,wn]),Xv({...ie,delta:ue,draggingRect:ln,pointerCoordinates:Xi,scrollableAncestors:Vt,scrollableAncestorRects:Gn});const jo=h.useMemo(()=>({active:Ae,activeNode:Q,activeNodeRect:re,activatorEvent:V,collisions:xa,containerNodeRect:St,dragOverlay:qe,draggableNodes:te,droppableContainers:pe,droppableRects:K,over:mn,measureDroppableContainers:J,scrollableAncestors:Vt,scrollableAncestorRects:Gn,measuringConfiguration:L,measuringScheduled:Y,windowRect:ya}),[Ae,Q,re,V,xa,St,qe,te,pe,K,mn,J,Vt,Gn,L,Y,ya]),Va=h.useMemo(()=>({activatorEvent:V,activators:Ki,active:Ae,activeNodeRect:re,ariaDescribedById:{draggable:be},dispatch:Z,draggableNodes:te,over:mn,measureDroppableContainers:J}),[V,Ki,Ae,re,Z,be,te,mn,J]);return Ve.createElement(xh.Provider,{value:$},Ve.createElement(Yi.Provider,{value:Va},Ve.createElement(Lh.Provider,{value:jo},Ve.createElement(Do.Provider,{value:gt},v)),Ve.createElement(p6,{disabled:(m==null?void 0:m.restoreFocus)===!1})),Ve.createElement(hv,{...m,hiddenTextDescribedById:be}));function Ia(){const Ge=(ae==null?void 0:ae.autoScrollEnabled)===!1,Xe=typeof g=="object"?g.enabled===!1:g===!1,at=F&&!Ge&&!Xe;return typeof g=="object"?{...g,enabled:at}:{enabled:at}}}),b6=h.createContext(null),gp="button",v6="Draggable";function y6(s){let{id:l,data:i,disabled:o=!1,attributes:u}=s;const d=Ii(v6),{activators:f,activatorEvent:m,active:g,activeNodeRect:v,ariaDescribedById:x,draggableNodes:S,over:T}=h.useContext(Yi),{role:A=gp,roleDescription:k="draggable",tabIndex:M=0}=u??{},B=(g==null?void 0:g.id)===l,Z=h.useContext(B?Do:b6),[G,$]=bo(),[X,I]=bo(),F=i6(f,l),q=Ui(i);dn(()=>(S.set(l,{id:l,key:d,node:G,activatorNode:X,data:q}),()=>{const ue=S.get(l);ue&&ue.key===d&&S.delete(l)}),[S,l]);const te=h.useMemo(()=>({role:A,tabIndex:M,"aria-disabled":o,"aria-pressed":B&&A===gp?!0:void 0,"aria-roledescription":k,"aria-describedby":x.draggable}),[o,A,M,B,k,x.draggable]);return{active:g,activatorEvent:m,activeNodeRect:v,attributes:te,isDragging:B,listeners:o?void 0:F,node:G,over:T,setNodeRef:$,setActivatorNodeRef:I,transform:Z}}function Uh(){return h.useContext(Lh)}const x6="Droppable",S6={timeout:25};function w6(s){let{data:l,disabled:i=!1,id:o,resizeObserverConfig:u}=s;const d=Ii(x6),{active:f,dispatch:m,over:g,measureDroppableContainers:v}=h.useContext(Yi),x=h.useRef({disabled:i}),S=h.useRef(!1),T=h.useRef(null),A=h.useRef(null),{disabled:k,updateMeasurementsFor:M,timeout:B}={...S6,...u},Z=Ui(M??o),G=h.useCallback(()=>{if(!S.current){S.current=!0;return}A.current!=null&&clearTimeout(A.current),A.current=setTimeout(()=>{v(Array.isArray(Z.current)?Z.current:[Z.current]),A.current=null},B)},[B]),$=ko({callback:G,disabled:k||!f}),X=h.useCallback((te,ue)=>{$&&(ue&&($.unobserve(ue),S.current=!1),te&&$.observe(te))},[$]),[I,F]=bo(X),q=Ui(l);return h.useEffect(()=>{!$||!I.current||($.disconnect(),S.current=!1,$.observe(I.current))},[I,$]),h.useEffect(()=>(m({type:tt.RegisterDroppable,element:{id:o,key:d,disabled:i,node:I,rect:T,data:q}}),()=>m({type:tt.UnregisterDroppable,key:d,id:o})),[o]),h.useEffect(()=>{i!==x.current.disabled&&(m({type:tt.SetDroppableDisabled,id:o,key:d,disabled:i}),x.current.disabled=i)},[o,d,i,m]),{active:f,rect:T,isOver:(g==null?void 0:g.id)===o,node:I,over:g,setNodeRef:F}}function C6(s){let{animation:l,children:i}=s;const[o,u]=h.useState(null),[d,f]=h.useState(null),m=vo(i);return!i&&!o&&m&&u(m),dn(()=>{if(!d)return;const g=o==null?void 0:o.key,v=o==null?void 0:o.props.id;if(g==null||v==null){u(null);return}Promise.resolve(l(v,d)).then(()=>{u(null)})},[l,o,d]),Ve.createElement(Ve.Fragment,null,i,o?h.cloneElement(o,{ref:f}):null)}const E6={x:0,y:0,scaleX:1,scaleY:1};function A6(s){let{children:l}=s;return Ve.createElement(Yi.Provider,{value:zh},Ve.createElement(Do.Provider,{value:E6},l))}const N6={position:"fixed",touchAction:"none"},T6=s=>To(s)?"transform 250ms ease":void 0,k6=h.forwardRef((s,l)=>{let{as:i,activatorEvent:o,adjustScale:u,children:d,className:f,rect:m,style:g,transform:v,transition:x=T6}=s;if(!m)return null;const S=u?v:{...v,scaleX:1,scaleY:1},T={...N6,width:m.width,height:m.height,top:m.top,left:m.left,transform:va.Transform.toString(S),transformOrigin:u&&o?vv(o,m):void 0,transition:typeof x=="function"?x(o):x,...g};return Ve.createElement(i,{className:f,style:T,ref:l},d)}),D6=s=>l=>{let{active:i,dragOverlay:o}=l;const u={},{styles:d,className:f}=s;if(d!=null&&d.active)for(const[m,g]of Object.entries(d.active))g!==void 0&&(u[m]=i.node.style.getPropertyValue(m),i.node.style.setProperty(m,g));if(d!=null&&d.dragOverlay)for(const[m,g]of Object.entries(d.dragOverlay))g!==void 0&&o.node.style.setProperty(m,g);return f!=null&&f.active&&i.node.classList.add(f.active),f!=null&&f.dragOverlay&&o.node.classList.add(f.dragOverlay),function(){for(const[g,v]of Object.entries(u))i.node.style.setProperty(g,v);f!=null&&f.active&&i.node.classList.remove(f.active)}},M6=s=>{let{transform:{initial:l,final:i}}=s;return[{transform:va.Transform.toString(l)},{transform:va.Transform.toString(i)}]},R6={duration:250,easing:"ease",keyframes:M6,sideEffects:D6({styles:{active:{opacity:"0"}}})};function j6(s){let{config:l,draggableNodes:i,droppableContainers:o,measuringConfiguration:u}=s;return No((d,f)=>{if(l===null)return;const m=i.get(d);if(!m)return;const g=m.node.current;if(!g)return;const v=Oh(f);if(!v)return;const{transform:x}=xt(f).getComputedStyle(f),S=wh(x);if(!S)return;const T=typeof l=="function"?l:O6(l);return Dh(g,u.draggable.measure),T({active:{id:d,data:m.data,node:g,rect:u.draggable.measure(g)},draggableNodes:i,dragOverlay:{node:f,rect:u.dragOverlay.measure(v)},droppableContainers:o,measuringConfiguration:u,transform:S})})}function O6(s){const{duration:l,easing:i,sideEffects:o,keyframes:u}={...R6,...s};return d=>{let{active:f,dragOverlay:m,transform:g,...v}=d;if(!l)return;const x={x:m.rect.left-f.rect.left,y:m.rect.top-f.rect.top},S={scaleX:g.scaleX!==1?f.rect.width*g.scaleX/m.rect.width:1,scaleY:g.scaleY!==1?f.rect.height*g.scaleY/m.rect.height:1},T={x:g.x-x.x,y:g.y-x.y,...S},A=u({...v,active:f,dragOverlay:m,transform:{initial:g,final:T}}),[k]=A,M=A[A.length-1];if(JSON.stringify(k)===JSON.stringify(M))return;const B=o==null?void 0:o({active:f,dragOverlay:m,...v}),Z=m.node.animate(A,{duration:l,easing:i,fill:"forwards"});return new Promise(G=>{Z.onfinish=()=>{B==null||B(),G()}})}}let bp=0;function z6(s){return h.useMemo(()=>{if(s!=null)return bp++,bp},[s])}const L6=Ve.memo(s=>{let{adjustScale:l=!1,children:i,dropAnimation:o,style:u,transition:d,modifiers:f,wrapperElement:m="div",className:g,zIndex:v=999}=s;const{activatorEvent:x,active:S,activeNodeRect:T,containerNodeRect:A,draggableNodes:k,droppableContainers:M,dragOverlay:B,over:Z,measuringConfiguration:G,scrollableAncestors:$,scrollableAncestorRects:X,windowRect:I}=Uh(),F=h.useContext(Do),q=z6(S==null?void 0:S.id),te=_h(f,{activatorEvent:x,active:S,activeNodeRect:T,containerNodeRect:A,draggingNodeRect:B.rect,over:Z,overlayNodeRect:B.rect,scrollableAncestors:$,scrollableAncestorRects:X,transform:F,windowRect:I}),ue=_u(T),pe=j6({config:o,draggableNodes:k,droppableContainers:M,measuringConfiguration:G}),de=ue?B.setRef:void 0;return Ve.createElement(A6,null,Ve.createElement(C6,{animation:pe},S&&q?Ve.createElement(k6,{key:q,id:S.id,ref:de,as:m,activatorEvent:x,adjustScale:l,className:g,transition:d,rect:ue,style:{zIndex:v,...u},transform:te},i):null))});function Hh(s,l,i){const o=s.slice();return o.splice(i<0?o.length+i:i,0,o.splice(l,1)[0]),o}function _6(s,l){return s.reduce((i,o,u)=>{const d=l.get(o);return d&&(i[u]=d),i},Array(s.length))}function uo(s){return s!==null&&s>=0}function U6(s,l){if(s===l)return!0;if(s.length!==l.length)return!1;for(let i=0;i<s.length;i++)if(s[i]!==l[i])return!1;return!0}function H6(s){return typeof s=="boolean"?{draggable:s,droppable:s}:s}const Zh=s=>{let{rects:l,activeIndex:i,overIndex:o,index:u}=s;const d=Hh(l,o,i),f=l[u],m=d[u];return!m||!f?null:{x:m.left-f.left,y:m.top-f.top,scaleX:m.width/f.width,scaleY:m.height/f.height}},fo={scaleX:1,scaleY:1},Z6=s=>{var l;let{activeIndex:i,activeNodeRect:o,index:u,rects:d,overIndex:f}=s;const m=(l=d[i])!=null?l:o;if(!m)return null;if(u===i){const v=d[f];return v?{x:0,y:i<f?v.top+v.height-(m.top+m.height):v.top-m.top,...fo}:null}const g=B6(d,u,i);return u>i&&u<=f?{x:0,y:-m.height-g,...fo}:u<i&&u>=f?{x:0,y:m.height+g,...fo}:{x:0,y:0,...fo}};function B6(s,l,i){const o=s[l],u=s[l-1],d=s[l+1];return o?i<l?u?o.top-(u.top+u.height):d?d.top-(o.top+o.height):0:d?d.top-(o.top+o.height):u?o.top-(u.top+u.height):0:0}const Bh="Sortable",qh=Ve.createContext({activeIndex:-1,containerId:Bh,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Zh,disabled:{draggable:!1,droppable:!1}});function q6(s){let{children:l,id:i,items:o,strategy:u=Zh,disabled:d=!1}=s;const{active:f,dragOverlay:m,droppableRects:g,over:v,measureDroppableContainers:x}=Uh(),S=Ii(Bh,i),T=m.rect!==null,A=h.useMemo(()=>o.map(F=>typeof F=="object"&&"id"in F?F.id:F),[o]),k=f!=null,M=f?A.indexOf(f.id):-1,B=v?A.indexOf(v.id):-1,Z=h.useRef(A),G=!U6(A,Z.current),$=B!==-1&&M===-1||G,X=H6(d);dn(()=>{G&&k&&x(A)},[G,A,k,x]),h.useEffect(()=>{Z.current=A},[A]);const I=h.useMemo(()=>({activeIndex:M,containerId:S,disabled:X,disableTransforms:$,items:A,overIndex:B,useDragOverlay:T,sortedRects:_6(A,g),strategy:u}),[M,S,X.draggable,X.droppable,$,A,B,g,T,u]);return Ve.createElement(qh.Provider,{value:I},l)}const V6=s=>{let{id:l,items:i,activeIndex:o,overIndex:u}=s;return Hh(i,o,u).indexOf(l)},I6=s=>{let{containerId:l,isSorting:i,wasDragging:o,index:u,items:d,newIndex:f,previousItems:m,previousContainerId:g,transition:v}=s;return!v||!o||m!==d&&u===f?!1:i?!0:f!==u&&l===g},Y6={duration:200,easing:"ease"},Vh="transform",G6=va.Transition.toString({property:Vh,duration:0,easing:"linear"}),X6={roleDescription:"sortable"};function Q6(s){let{disabled:l,index:i,node:o,rect:u}=s;const[d,f]=h.useState(null),m=h.useRef(i);return dn(()=>{if(!l&&i!==m.current&&o.current){const g=u.current;if(g){const v=zl(o.current,{ignoreTransform:!0}),x={x:g.left-v.left,y:g.top-v.top,scaleX:g.width/v.width,scaleY:g.height/v.height};(x.x||x.y)&&f(x)}}i!==m.current&&(m.current=i)},[l,i,o,u]),h.useEffect(()=>{d&&f(null)},[d]),d}function $6(s){let{animateLayoutChanges:l=I6,attributes:i,disabled:o,data:u,getNewIndex:d=V6,id:f,strategy:m,resizeObserverConfig:g,transition:v=Y6}=s;const{items:x,containerId:S,activeIndex:T,disabled:A,disableTransforms:k,sortedRects:M,overIndex:B,useDragOverlay:Z,strategy:G}=h.useContext(qh),$=K6(o,A),X=x.indexOf(f),I=h.useMemo(()=>({sortable:{containerId:S,index:X,items:x},...u}),[S,u,X,x]),F=h.useMemo(()=>x.slice(x.indexOf(f)),[x,f]),{rect:q,node:te,isOver:ue,setNodeRef:pe}=w6({id:f,data:I,disabled:$.droppable,resizeObserverConfig:{updateMeasurementsFor:F,...g}}),{active:de,activatorEvent:me,activeNodeRect:Ae,attributes:ke,setNodeRef:ae,listeners:j,isDragging:V,over:W,setActivatorNodeRef:ce,transform:be}=y6({id:f,data:I,attributes:{...X6,...i},disabled:$.draggable}),E=tv(pe,ae),L=!!de,K=L&&!k&&uo(T)&&uo(B),J=!Z&&V,Y=J&&K?be:null,P=K?Y??(m??G)({rects:M,activeNodeRect:Ae,activeIndex:T,overIndex:B,index:X}):null,ie=uo(T)&&uo(B)?d({id:f,items:x,activeIndex:T,overIndex:B}):X,le=de==null?void 0:de.id,re=h.useRef({activeId:le,items:x,newIndex:ie,containerId:S}),St=x!==re.current.items,nt=l({active:de,containerId:S,isDragging:V,isSorting:L,id:f,index:X,items:x,newIndex:re.current.newIndex,previousItems:re.current.items,previousContainerId:re.current.containerId,transition:v,wasDragging:re.current.activeId!=null}),qt=Q6({disabled:!nt,index:X,node:te,rect:q});return h.useEffect(()=>{L&&re.current.newIndex!==ie&&(re.current.newIndex=ie),S!==re.current.containerId&&(re.current.containerId=S),x!==re.current.items&&(re.current.items=x)},[L,ie,S,x]),h.useEffect(()=>{if(le===re.current.activeId)return;if(le!=null&&re.current.activeId==null){re.current.activeId=le;return}const pn=setTimeout(()=>{re.current.activeId=le},50);return()=>clearTimeout(pn)},[le]),{active:de,activeIndex:T,attributes:ke,data:I,rect:q,index:X,newIndex:ie,items:x,isOver:ue,isSorting:L,isDragging:V,listeners:j,node:te,overIndex:B,over:W,setNodeRef:E,setActivatorNodeRef:ce,setDroppableNodeRef:pe,setDraggableNodeRef:ae,transform:qt??P,transition:qe()};function qe(){if(qt||St&&re.current.newIndex===X)return G6;if(!(J&&!To(me)||!v)&&(L||nt))return va.Transition.toString({...v,property:Vh})}}function K6(s,l){var i,o;return typeof s=="boolean"?{draggable:s,droppable:!1}:{draggable:(i=s==null?void 0:s.draggable)!=null?i:l.draggable,droppable:(o=s==null?void 0:s.droppable)!=null?o:l.droppable}}Te.Down,Te.Right,Te.Up,Te.Left;const Ih="ennabl_builder_sprints";function F6(){try{return JSON.parse(localStorage.getItem(Ih))||[]}catch{return[]}}function vp(s){localStorage.setItem(Ih,JSON.stringify(s))}function J6({name:s,startDate:l,endDate:i}){return{id:`sprint-${Date.now()}`,name:s.trim(),startDate:l||"",endDate:i||"",createdAt:new Date().toISOString()}}const nu=s=>new Date(s+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"});function pu(s){return s.startDate&&s.endDate?`${s.name} · ${nu(s.startDate)} – ${nu(s.endDate)}`:s.startDate?`${s.name} · from ${nu(s.startDate)}`:s.name}function P6({prd:s,projectId:l,sprints:i=[],onClose:o,onSave:u}){const[d,f]=h.useState((s==null?void 0:s.title)??""),[m,g]=h.useState((s==null?void 0:s.content)??""),[v,x]=h.useState((s==null?void 0:s.sprintIds)??[]),S=h.useRef();function T(M){const B=M.target.files[0];if(!B)return;const Z=B.name.replace(/\.md$/i,"").replace(/[-_]/g," "),G=new FileReader;G.onload=$=>{d||f(Z),g($.target.result)},G.readAsText(B)}function A(M){x(B=>B.includes(M)?B.filter(Z=>Z!==M):[...B,M])}function k(){const M=d.trim();M&&u({title:M,content:m,sprintIds:v})}return b.jsx("div",{className:"prd-editor-scrim",onClick:M=>M.target===M.currentTarget&&o(),children:b.jsxs("div",{className:"prd-editor-modal",children:[b.jsxs("div",{className:"prd-editor-header",children:[b.jsxs("div",{className:"prd-editor-header-left",children:[b.jsx("span",{className:"prd-editor-title",children:s?"Edit PRD":"New PRD"}),(s==null?void 0:s.prdId)&&b.jsx("span",{className:"prd-editor-id",children:s.prdId})]}),b.jsx("button",{className:"prd-editor-close",onClick:o,children:"✕"})]}),b.jsxs("div",{className:"prd-editor-body",children:[b.jsxs("div",{className:"prd-editor-field",children:[b.jsx("label",{className:"prd-editor-label",children:"Title"}),b.jsx("input",{className:"prd-editor-input",type:"text",placeholder:"e.g. Producer Filter Modal",value:d,onChange:M=>f(M.target.value),autoFocus:!0})]}),i.length>0&&b.jsxs("div",{className:"prd-editor-field",children:[b.jsx("label",{className:"prd-editor-label",children:"Sprints"}),b.jsx("div",{className:"prd-sprint-list",children:i.map(M=>b.jsxs("label",{className:"prd-sprint-item",children:[b.jsx("input",{type:"checkbox",className:"prd-sprint-check",checked:v.includes(M.id),onChange:()=>A(M.id)}),b.jsx("span",{className:"prd-sprint-name",children:pu(M)})]},M.id))})]}),b.jsxs("div",{className:"prd-editor-field prd-editor-field--grow",children:[b.jsxs("div",{className:"prd-editor-label-row",children:[b.jsx("label",{className:"prd-editor-label",children:"Content"}),b.jsx("button",{className:"prd-editor-load-file",onClick:()=>S.current.click(),children:"Load from .md file"}),b.jsx("input",{ref:S,type:"file",accept:".md,.txt",style:{display:"none"},onChange:T})]}),b.jsx("textarea",{className:"prd-editor-textarea",placeholder:"Paste your PRD markdown here…",value:m,onChange:M=>g(M.target.value)})]})]}),b.jsxs("div",{className:"prd-editor-footer",children:[b.jsx("button",{className:"prd-editor-btn prd-editor-btn--cancel",onClick:o,children:"Cancel"}),b.jsx("button",{className:"prd-editor-btn prd-editor-btn--save",onClick:k,disabled:!d.trim(),children:s?"Save changes":"Create PRD"})]})]})})}function W6({sprints:s,activeSprint:l,onSelectSprint:i,onCreateSprint:o,onDeleteSprint:u}){const[d,f]=h.useState(!1),[m,g]=h.useState(!1),[v,x]=h.useState(""),[S,T]=h.useState(""),[A,k]=h.useState(""),M=h.useRef(null),B=h.useRef(null);h.useEffect(()=>{function I(F){M.current&&!M.current.contains(F.target)&&f(!1)}return document.addEventListener("mousedown",I),()=>document.removeEventListener("mousedown",I)},[]),h.useEffect(()=>{var I;m&&((I=B.current)==null||I.focus())},[m]);function Z(){v.trim()&&(o({name:v.trim(),startDate:S,endDate:A}),x(""),T(""),k(""),g(!1))}function G(I){I.key==="Enter"&&Z(),I.key==="Escape"&&(g(!1),x(""))}const $=l&&l!=="__none__"?s.find(I=>I.id===l):null,X=l==="__none__"?"Unassigned":$?pu($):"All sprints";return b.jsxs("div",{className:"sprint-bar",children:[b.jsxs("div",{className:"sprint-selector",ref:M,children:[b.jsxs("button",{className:`sprint-dropdown-btn ${l?"sprint-dropdown-btn--active":""}`,onClick:()=>f(I=>!I),children:[b.jsx("span",{className:"sprint-dropdown-label",children:X}),b.jsx(X8,{size:12,weight:"bold"})]}),d&&b.jsxs("div",{className:"sprint-dropdown",children:[[{id:null,label:"All sprints"},{id:"__none__",label:"Unassigned"}].map(I=>b.jsx("button",{className:`sprint-option ${l===I.id?"sprint-option--active":""}`,onClick:()=>{i(I.id),f(!1)},children:I.label},I.id??"all")),s.length>0&&b.jsx("div",{className:"sprint-option-divider"}),s.map(I=>b.jsxs("div",{className:"sprint-option-row",children:[b.jsx("button",{className:`sprint-option ${l===I.id?"sprint-option--active":""}`,onClick:()=>{i(I.id),f(!1)},children:pu(I)}),b.jsx("button",{className:"sprint-option-delete",title:"Delete sprint",onClick:F=>{F.stopPropagation(),u(I.id)},children:b.jsx(J8,{size:11,weight:"bold"})})]},I.id))]})]}),m?b.jsxs("div",{className:"sprint-create-form",children:[b.jsx("input",{ref:B,className:"sprint-input",placeholder:"Sprint name",value:v,onChange:I=>x(I.target.value),onKeyDown:G}),b.jsx("input",{className:"sprint-input sprint-input--date",type:"date",value:S,onChange:I=>T(I.target.value)}),b.jsx("span",{className:"sprint-range-sep",children:"–"}),b.jsx("input",{className:"sprint-input sprint-input--date",type:"date",value:A,onChange:I=>k(I.target.value)}),b.jsx("button",{className:"sprint-create-btn",onClick:Z,disabled:!v.trim(),children:"Create"}),b.jsx("button",{className:"sprint-cancel-btn",onClick:()=>{g(!1),x("")},children:"Cancel"})]}):b.jsxs("button",{className:"sprint-new-btn",onClick:()=>g(!0),children:[b.jsx($8,{size:13,weight:"bold"}),"New sprint"]})]})}const e4={Sparkle:fh,ChartBar:nh,FlowArrow:sh,Database:lh,TrendUp:mh,Bell:Wp,GearSix:ku};function Yh(s){const l=Math.floor((Date.now()-new Date(s))/6e4);if(l<1)return"just now";if(l<60)return`${l}m ago`;const i=Math.floor(l/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}function t4({status:s}){return b.jsx("span",{className:`prd-status prd-status--${s}`,children:Fp[s]})}function n4({prd:s,sprints:l,onEdit:i,onDelete:o,onOpen:u,isDragging:d}){const{attributes:f,listeners:m,setNodeRef:g,transform:v,transition:x}=$6({id:s.id}),S={transform:va.Transform.toString(v),transition:x,opacity:d?.4:1},T=l.filter(A=>{var k;return(k=s.sprintIds)==null?void 0:k.includes(A.id)});return b.jsxs("div",{ref:g,style:S,className:"kanban-card",...f,...m,children:[b.jsxs("div",{className:"kanban-card-top",children:[s.prdId&&b.jsx("span",{className:"kanban-prd-id",children:s.prdId}),b.jsx("span",{className:"kanban-card-time",children:Yh(s.updatedAt)})]}),b.jsx("div",{className:"kanban-card-title",children:s.title}),T.length>0&&b.jsx("div",{className:"kanban-sprint-chips",children:T.map(A=>b.jsx("span",{className:"kanban-sprint-chip",children:A.name},A.id))}),b.jsxs("div",{className:"kanban-card-actions",onPointerDown:A=>A.stopPropagation(),children:[b.jsx("button",{className:"kanban-card-btn",onClick:()=>u(s),children:"Open →"}),b.jsx("button",{className:"kanban-card-btn",onClick:()=>i(s),children:"Edit"}),b.jsx("button",{className:"kanban-card-btn kanban-card-btn--danger",onClick:()=>o(s.id),children:"Delete"})]})]})}function a4({status:s,prds:l,sprints:i,onEdit:o,onDelete:u,onOpen:d,activeId:f}){return b.jsxs("div",{className:"kanban-col",children:[b.jsxs("div",{className:"kanban-col-header",children:[b.jsx("span",{className:"kanban-col-title",children:Fp[s]}),b.jsx("span",{className:"kanban-col-count",children:l.length})]}),b.jsx(q6,{items:l.map(m=>m.id),strategy:Z6,children:b.jsxs("div",{className:"kanban-col-cards",children:[l.map(m=>b.jsx(n4,{prd:m,sprints:i,onEdit:o,onDelete:u,onOpen:d,isDragging:f===m.id},m.id)),l.length===0&&b.jsx("div",{className:"kanban-col-empty",children:"Drop here"})]})})]})}function l4({projectId:s,prds:l,sprints:i=[],activeSprint:o,onSelectSprint:u,onNavigate:d,onCreatePrd:f,onUpdatePrd:m,onDeletePrd:g,onCreateSprint:v,onDeleteSprint:x,theme:S,onThemeToggle:T,onSignOut:A}){const k=Jp(s),M=k?e4[k.phosphorIcon]:null,B=l.filter(ae=>ae.projectId===s),[Z,G]=h.useState("kanban"),[$,X]=h.useState(!1),[I,F]=h.useState(null),[q,te]=h.useState(null),ue=gv(mv(Lu,{activationConstraint:{distance:6}})),pe=o===null?B:o==="__none__"?B.filter(ae=>{var j;return!((j=ae.sprintIds)!=null&&j.length)}):B.filter(ae=>{var j;return(j=ae.sprintIds)==null?void 0:j.includes(o)});function de({active:ae}){te(ae.id)}function me({active:ae,over:j}){if(te(null),!j||ae.id===j.id)return;const V=B.find(be=>be.id===ae.id);if(!V)return;const W=B.find(be=>be.id===j.id),ce=W?W.status:j.id;tp.includes(ce)&&V.status!==ce&&m(ae.id,{status:ce})}function Ae({active:ae,over:j}){if(!j)return;const V=B.find(ce=>ce.id===ae.id),W=B.find(ce=>ce.id===j.id);!V||!W||V.status!==W.status&&m(ae.id,{status:W.status})}const ke=q?B.find(ae=>ae.id===q):null;return b.jsxs("div",{className:"project-view",children:[b.jsxs("header",{className:"project-view-header",children:[b.jsx("button",{className:"project-back-btn",onClick:()=>d({page:"projects"}),children:"← Projects"}),b.jsxs("div",{className:"project-view-title",children:[M&&b.jsx(M,{size:20,weight:"fill",className:"project-view-icon"}),b.jsx("span",{className:"project-view-name",children:k==null?void 0:k.name})]}),b.jsxs("div",{className:"project-view-actions",children:[b.jsxs("div",{className:"view-toggle",children:[b.jsx("button",{className:`view-toggle-btn ${Z==="list"?"active":""}`,onClick:()=>G("list"),children:"List"}),b.jsx("button",{className:`view-toggle-btn ${Z==="kanban"?"active":""}`,onClick:()=>G("kanban"),children:"Kanban"})]}),b.jsx("button",{className:"new-prd-btn",onClick:()=>{F(null),X(!0)},children:"+ New PRD"}),b.jsx(Du,{theme:S,onThemeToggle:T,onSignOut:A})]})]}),b.jsx(W6,{sprints:i,activeSprint:o,onSelectSprint:u,onCreateSprint:v,onDeleteSprint:ae=>{o===ae&&u(null),x(ae)}}),b.jsx("div",{className:"project-view-body",children:Z==="list"?b.jsx("div",{className:"prd-list",children:pe.length===0?b.jsx("div",{className:"prd-list-empty",children:"No PRDs yet — create one to get started."}):b.jsxs("table",{className:"prd-table",children:[b.jsx("thead",{children:b.jsxs("tr",{children:[b.jsx("th",{children:"ID"}),b.jsx("th",{children:"Title"}),b.jsx("th",{children:"Sprints"}),b.jsx("th",{children:"Status"}),b.jsx("th",{children:"Updated"}),b.jsx("th",{})]})}),b.jsx("tbody",{children:pe.map(ae=>{const j=i.filter(V=>{var W;return(W=ae.sprintIds)==null?void 0:W.includes(V.id)});return b.jsxs("tr",{children:[b.jsx("td",{className:"prd-table-id",children:ae.prdId||"—"}),b.jsx("td",{className:"prd-table-title",children:ae.title}),b.jsx("td",{className:"prd-table-sprints",children:j.length>0?j.map(V=>b.jsx("span",{className:"list-sprint-chip",children:V.name},V.id)):b.jsx("span",{className:"prd-table-none",children:"—"})}),b.jsx("td",{children:b.jsx(t4,{status:ae.status})}),b.jsx("td",{className:"prd-table-date",children:Yh(ae.updatedAt)}),b.jsxs("td",{className:"prd-table-actions",children:[b.jsx("button",{className:"prd-action-btn",onClick:()=>d({page:"builder",prdId:ae.id}),children:"Open →"}),b.jsx("button",{className:"prd-action-btn",onClick:()=>{F(ae),X(!0)},children:"Edit"}),b.jsx("button",{className:"prd-action-btn prd-action-btn--danger",onClick:()=>g(ae.id),children:"Delete"})]})]},ae.id)})})]})}):b.jsxs(g6,{sensors:ue,collisionDetection:wv,onDragStart:de,onDragOver:Ae,onDragEnd:me,children:[b.jsx("div",{className:"kanban-board",children:tp.map(ae=>b.jsx(a4,{status:ae,prds:pe.filter(j=>j.status===ae),sprints:i,onEdit:j=>{F(j),X(!0)},onDelete:j=>g(j),onOpen:j=>d({page:"builder",prdId:j.id}),activeId:q},ae))}),b.jsx(L6,{children:ke?b.jsxs("div",{className:"kanban-card kanban-card--overlay",children:[ke.prdId&&b.jsx("span",{className:"kanban-prd-id",children:ke.prdId}),b.jsx("div",{className:"kanban-card-title",children:ke.title})]}):null})]})}),$&&b.jsx(P6,{prd:I,projectId:s,sprints:i,onClose:()=>X(!1),onSave:ae=>{I?m(I.id,ae):f(s,ae),X(!1)}})]})}const Gh=s=>`ennabl_bs_${s}`;function Xh(s){try{return JSON.parse(localStorage.getItem(Gh(s)))||{}}catch{return{}}}function yp(s,l){try{const i=Xh(s);localStorage.setItem(Gh(s),JSON.stringify({...i,...l}))}catch{}}function au(){const s=window.location.hash.slice(1)||"/",[l,i]=s.split("?"),o=new URLSearchParams(i||""),u=l.split("/").filter(Boolean);return u[0]==="projects"&&u[1]?{page:"project",projectId:u[1],sprint:o.get("sprint")||null}:u[0]==="builder"&&u[1]?{page:"builder",prdId:u[1]}:{page:"projects"}}function i4(s){if(s.page==="project"){const l=new URLSearchParams;s.sprint&&l.set("sprint",s.sprint);const i=l.toString();return`#/projects/${s.projectId}${i?"?"+i:""}`}return s.page==="builder"?`#/builder/${s.prdId}`:"#/"}function s4(){const[s,l]=h.useState(()=>!!zp()),[i,o]=h.useState(()=>{const Y=kb();return document.documentElement.setAttribute("data-theme",Y),Y}),[u,d]=h.useState(ep),[f,m]=h.useState(!1),[g,v]=h.useState(au),[x,S]=h.useState([]),[T,A]=h.useState(!1),[k,M]=h.useState(null),[B,Z]=h.useState(null),[G,$]=h.useState([]),[X,I]=h.useState(null),[F,q]=h.useState(bb),[te,ue]=h.useState(0),[pe,de]=h.useState(F6),me=u&&!f;function Ae(){o(Y=>{const Q=Y==="dark"?"light":"dark";return document.documentElement.setAttribute("data-theme",Q),Db(Q),Q})}function ke(){l(!1)}function ae(Y){if(Y.page==="builder"&&Y.prdId){const Q=x.find(P=>P.id===Y.prdId);Q&&j(Q)}v(Y),window.location.hash=i4(Y)}h.useEffect(()=>{function Y(){const Q=au();if(Q.page==="builder"&&Q.prdId){const P=x.find(ie=>ie.id===Q.prdId);P&&j(P)}v(Q)}return window.addEventListener("hashchange",Y),()=>window.removeEventListener("hashchange",Y)},[x]),h.useEffect(()=>{if(!s||!u&&!f)return;async function Y(){let Q;if(me)try{Q=await C8()}catch{ap(),Q=cu()}else ap(),Q=cu();const P=k8(Q);S(P),A(!0);const ie=au();if(ie.page==="builder"&&ie.prdId){const le=P.find(re=>re.id===ie.prdId);le&&j(le)}}Y()},[s,u,f]);function j(Y){const Q=Xh(Y.id);M({id:Y.id,name:Y.title,content:Y.content}),$(Q.messages||[]),Z(Q.code||null),I(qb(Y.title))}h.useEffect(()=>{k!=null&&k.id&&yp(k.id,{messages:G})},[G,k==null?void 0:k.id]),h.useEffect(()=>{k!=null&&k.id&&B&&yp(k.id,{code:B})},[B,k==null?void 0:k.id]);function V(Y){const Q=J6(Y);de(P=>{const ie=[...P,Q];return vp(ie),ie})}function W(Y){de(Q=>{const P=Q.filter(ie=>ie.id!==Y);return vp(P),P}),S(Q=>{const P=Q.map(ie=>{var le;return(le=ie.sprintIds)!=null&&le.includes(Y)?{...ie,sprintIds:ie.sprintIds.filter(re=>re!==Y)}:ie});return me||Dl(P),P})}async function ce(Y,Q){if(me){const P=np(Y,x),ie=await E8({projectId:Y,prdId:P,...Q});S(le=>[ie,...le])}else S(P=>{const ie=np(Y,P),re=[{id:`prd-${Date.now()}`,projectId:Y,prdId:ie,status:"backlog",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),...Q},...P];return Dl(re),re})}async function be(Y,Q){if(me){const P=await A8(Y,{...Q,updated:new Date().toISOString()});S(ie=>ie.map(le=>le.id===Y?P:le))}else S(P=>{const ie=P.map(le=>le.id===Y?{...le,...Q,updatedAt:new Date().toISOString()}:le);return Dl(ie),ie})}async function E(Y){me&&await N8(Y),S(Q=>{const P=Q.filter(ie=>ie.id!==Y);return me||Dl(P),P})}function L(Y,Q){if(Z(Y),k){const ie=[vb({prdName:k.name,code:Y,iteration:((X==null?void 0:X.iterations)??0)+1}),...F].slice(0,50);if(q(ie),G1(ie),Q){const re=`**${new Date().toISOString().slice(0,10)} · iter ${((X==null?void 0:X.iterations)??0)+1}:** ${Q}`,St=x.find(qe=>qe.id===k.id),nt=(St==null?void 0:St.content)||k.content||"",qt=nt.includes("## Build log")?nt+`
`+re:nt+`

## Build log

`+re;be(k.id,{content:qt}),M(qe=>qe&&{...qe,content:qt})}}}function K({inputTokens:Y,outputTokens:Q,cacheReadTokens:P,componentsUsed:ie}){I(le=>{if(!le)return le;const re={...le,iterations:le.iterations+1,inputTokens:le.inputTokens+Y,outputTokens:le.outputTokens+Q,cacheReadTokens:le.cacheReadTokens+P,componentsUsed:[...new Set([...le.componentsUsed,...ie])]};return re.cost=Bb(re),su(re),re})}function J(){q([]),G1([])}return s?!u&&!f?b.jsx(T8,{onDone:()=>{ep()?d(!0):m(!0)}}):T?g.page==="projects"?b.jsx(ev,{prds:x,onNavigate:ae,theme:i,onThemeToggle:Ae,onSignOut:ke}):g.page==="project"?b.jsx(l4,{projectId:g.projectId,prds:x,sprints:pe,activeSprint:g.sprint??null,onSelectSprint:Y=>ae({...g,sprint:Y}),onNavigate:ae,onCreatePrd:ce,onUpdatePrd:be,onDeletePrd:E,onCreateSprint:V,onDeleteSprint:W,theme:i,onThemeToggle:Ae,onSignOut:ke}):b.jsxs("div",{className:"app",children:[b.jsxs("header",{className:"app-header",children:[b.jsxs("div",{className:"app-header-left",children:[b.jsx("button",{className:"app-back-btn",onClick:()=>ae({page:"projects"}),children:"← Projects"}),b.jsx("span",{className:"app-header-sep"}),b.jsx("span",{className:"app-logo",children:"ennabl"}),b.jsx("span",{className:"app-logo-suffix",children:"builder"}),k&&b.jsx("span",{className:"app-prd-badge",children:k.name})]}),b.jsxs("div",{className:"app-header-right",children:[b.jsx(M8,{prds:x,onSelect:j}),b.jsx(Du,{theme:i,onThemeToggle:Ae,onSignOut:ke})]})]}),b.jsxs("main",{className:"app-panels",children:[b.jsx(Eb,{code:B,prd:k,history:F,onHistoryClear:J,onInitDesign:()=>ue(Y=>Y+1)}),b.jsx("div",{className:"app-divider"}),b.jsx(n8,{prd:k,messages:G,setMessages:$,onCodeGenerated:L,onIterationComplete:K,session:X,onSessionUpdate:I,initTrigger:te})]})]}):b.jsx("div",{style:{height:"100dvh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",color:"var(--text-muted)",fontSize:13},children:"Loading…"}):b.jsx(a8,{onDone:()=>l(!0)})}g2.createRoot(document.getElementById("root")).render(b.jsx(h.StrictMode,{children:b.jsx(s4,{})}));
