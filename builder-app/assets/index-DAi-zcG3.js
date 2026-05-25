var Bg=Object.defineProperty;var S1=r=>{throw TypeError(r)};var qg=(r,l,i)=>l in r?Bg(r,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[l]=i;var je=(r,l,i)=>qg(r,typeof l!="symbol"?l+"":l,i),Zg=(r,l,i)=>l.has(r)||S1("Cannot "+i);var w1=(r,l,i)=>l.has(r)?S1("Cannot add the same private member more than once"):l instanceof WeakSet?l.add(r):l.set(r,i);var Ai=(r,l,i)=>(Zg(r,l,"access private method"),i);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(u){if(u.ep)return;u.ep=!0;const d=i(u);fetch(u.href,d)}})();function Vg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Vc={exports:{}},Ni={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C1;function Yg(){if(C1)return Ni;C1=1;var r=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function i(s,u,d){var f=null;if(d!==void 0&&(f=""+d),u.key!==void 0&&(f=""+u.key),"key"in u){d={};for(var h in u)h!=="key"&&(d[h]=u[h])}else d=u;return u=d.ref,{$$typeof:r,type:s,key:f,ref:u!==void 0?u:null,props:d}}return Ni.Fragment=l,Ni.jsx=i,Ni.jsxs=i,Ni}var E1;function Gg(){return E1||(E1=1,Vc.exports=Yg()),Vc.exports}var y=Gg(),Yc={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A1;function Xg(){if(A1)return ce;A1=1;var r=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),A=Symbol.iterator;function T(C){return C===null||typeof C!="object"?null:(C=A&&C[A]||C["@@iterator"],typeof C=="function"?C:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,Y={};function Z(C,z,X){this.props=C,this.context=z,this.refs=Y,this.updater=X||j}Z.prototype.isReactComponent={},Z.prototype.setState=function(C,z){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,z,"setState")},Z.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function G(){}G.prototype=Z.prototype;function Q(C,z,X){this.props=C,this.context=z,this.refs=Y,this.updater=X||j}var I=Q.prototype=new G;I.constructor=Q,O(I,Z.prototype),I.isPureReactComponent=!0;var F=Array.isArray;function V(){}var H={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function ne(C,z,X){var $=X.ref;return{$$typeof:r,type:C,key:z,ref:$!==void 0?$:null,props:X}}function re(C,z){return ne(C.type,z,C.props)}function oe(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function ge(C){var z={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(X){return z[X]})}var Oe=/\/+/g;function qe(C,z){return typeof C=="object"&&C!==null&&C.key!=null?ge(""+C.key):z.toString(36)}function Fe(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(V,V):(C.status="pending",C.then(function(z){C.status==="pending"&&(C.status="fulfilled",C.value=z)},function(z){C.status==="pending"&&(C.status="rejected",C.reason=z)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function _(C,z,X,$,le){var ee=typeof C;(ee==="undefined"||ee==="boolean")&&(C=null);var be=!1;if(C===null)be=!0;else switch(ee){case"bigint":case"string":case"number":be=!0;break;case"object":switch(C.$$typeof){case r:case l:be=!0;break;case x:return be=C._init,_(be(C._payload),z,X,$,le)}}if(be)return le=le(C),be=$===""?"."+qe(C,0):$,F(le)?(X="",be!=null&&(X=be.replace(Oe,"$&/")+"/"),_(le,z,X,"",function(ye){return ye})):le!=null&&(oe(le)&&(le=re(le,X+(le.key==null||C&&C.key===le.key?"":(""+le.key).replace(Oe,"$&/")+"/")+be)),z.push(le)),1;be=0;var Ue=$===""?".":$+":";if(F(C))for(var we=0;we<C.length;we++)$=C[we],ee=Ue+qe($,we),be+=_($,z,X,ee,le);else if(we=T(C),typeof we=="function")for(C=we.call(C),we=0;!($=C.next()).done;)$=$.value,ee=Ue+qe($,we++),be+=_($,z,X,ee,le);else if(ee==="object"){if(typeof C.then=="function")return _(Fe(C),z,X,$,le);throw z=String(C),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return be}function B(C,z,X){if(C==null)return C;var $=[],le=0;return _(C,$,"","",function(ee){return z.call(X,ee,le++)}),$}function K(C){if(C._status===-1){var z=C._result;z=z(),z.then(function(X){(C._status===0||C._status===-1)&&(C._status=1,C._result=X)},function(X){(C._status===0||C._status===-1)&&(C._status=2,C._result=X)}),C._status===-1&&(C._status=0,C._result=z)}if(C._status===1)return C._result.default;throw C._result}var ae=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},se={map:B,forEach:function(C,z,X){B(C,function(){z.apply(this,arguments)},X)},count:function(C){var z=0;return B(C,function(){z++}),z},toArray:function(C){return B(C,function(z){return z})||[]},only:function(C){if(!oe(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return ce.Activity=S,ce.Children=se,ce.Component=Z,ce.Fragment=i,ce.Profiler=u,ce.PureComponent=Q,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ce.__COMPILER_RUNTIME={__proto__:null,c:function(C){return H.H.useMemoCache(C)}},ce.cache=function(C){return function(){return C.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(C,z,X){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var $=O({},C.props),le=C.key;if(z!=null)for(ee in z.key!==void 0&&(le=""+z.key),z)!J.call(z,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&z.ref===void 0||($[ee]=z[ee]);var ee=arguments.length-2;if(ee===1)$.children=X;else if(1<ee){for(var be=Array(ee),Ue=0;Ue<ee;Ue++)be[Ue]=arguments[Ue+2];$.children=be}return ne(C.type,le,$)},ce.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:d,_context:C},C},ce.createElement=function(C,z,X){var $,le={},ee=null;if(z!=null)for($ in z.key!==void 0&&(ee=""+z.key),z)J.call(z,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(le[$]=z[$]);var be=arguments.length-2;if(be===1)le.children=X;else if(1<be){for(var Ue=Array(be),we=0;we<be;we++)Ue[we]=arguments[we+2];le.children=Ue}if(C&&C.defaultProps)for($ in be=C.defaultProps,be)le[$]===void 0&&(le[$]=be[$]);return ne(C,ee,le)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(C){return{$$typeof:h,render:C}},ce.isValidElement=oe,ce.lazy=function(C){return{$$typeof:x,_payload:{_status:-1,_result:C},_init:K}},ce.memo=function(C,z){return{$$typeof:b,type:C,compare:z===void 0?null:z}},ce.startTransition=function(C){var z=H.T,X={};H.T=X;try{var $=C(),le=H.S;le!==null&&le(X,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(V,ae)}catch(ee){ae(ee)}finally{z!==null&&X.types!==null&&(z.types=X.types),H.T=z}},ce.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ce.use=function(C){return H.H.use(C)},ce.useActionState=function(C,z,X){return H.H.useActionState(C,z,X)},ce.useCallback=function(C,z){return H.H.useCallback(C,z)},ce.useContext=function(C){return H.H.useContext(C)},ce.useDebugValue=function(){},ce.useDeferredValue=function(C,z){return H.H.useDeferredValue(C,z)},ce.useEffect=function(C,z){return H.H.useEffect(C,z)},ce.useEffectEvent=function(C){return H.H.useEffectEvent(C)},ce.useId=function(){return H.H.useId()},ce.useImperativeHandle=function(C,z,X){return H.H.useImperativeHandle(C,z,X)},ce.useInsertionEffect=function(C,z){return H.H.useInsertionEffect(C,z)},ce.useLayoutEffect=function(C,z){return H.H.useLayoutEffect(C,z)},ce.useMemo=function(C,z){return H.H.useMemo(C,z)},ce.useOptimistic=function(C,z){return H.H.useOptimistic(C,z)},ce.useReducer=function(C,z,X){return H.H.useReducer(C,z,X)},ce.useRef=function(C){return H.H.useRef(C)},ce.useState=function(C){return H.H.useState(C)},ce.useSyncExternalStore=function(C,z,X){return H.H.useSyncExternalStore(C,z,X)},ce.useTransition=function(){return H.H.useTransition()},ce.version="19.2.6",ce}var N1;function uu(){return N1||(N1=1,Yc.exports=Xg()),Yc.exports}var v=uu();const Be=Vg(v);var Gc={exports:{}},Ti={},Xc={exports:{}},Qc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T1;function Qg(){return T1||(T1=1,(function(r){function l(_,B){var K=_.length;_.push(B);e:for(;0<K;){var ae=K-1>>>1,se=_[ae];if(0<u(se,B))_[ae]=B,_[K]=se,K=ae;else break e}}function i(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var B=_[0],K=_.pop();if(K!==B){_[0]=K;e:for(var ae=0,se=_.length,C=se>>>1;ae<C;){var z=2*(ae+1)-1,X=_[z],$=z+1,le=_[$];if(0>u(X,K))$<se&&0>u(le,X)?(_[ae]=le,_[$]=K,ae=$):(_[ae]=X,_[z]=K,ae=z);else if($<se&&0>u(le,K))_[ae]=le,_[$]=K,ae=$;else break e}}return B}function u(_,B){var K=_.sortIndex-B.sortIndex;return K!==0?K:_.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;r.unstable_now=function(){return d.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],b=[],x=1,S=null,A=3,T=!1,j=!1,O=!1,Y=!1,Z=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function I(_){for(var B=i(b);B!==null;){if(B.callback===null)s(b);else if(B.startTime<=_)s(b),B.sortIndex=B.expirationTime,l(m,B);else break;B=i(b)}}function F(_){if(O=!1,I(_),!j)if(i(m)!==null)j=!0,V||(V=!0,ge());else{var B=i(b);B!==null&&Fe(F,B.startTime-_)}}var V=!1,H=-1,J=5,ne=-1;function re(){return Y?!0:!(r.unstable_now()-ne<J)}function oe(){if(Y=!1,V){var _=r.unstable_now();ne=_;var B=!0;try{e:{j=!1,O&&(O=!1,G(H),H=-1),T=!0;var K=A;try{t:{for(I(_),S=i(m);S!==null&&!(S.expirationTime>_&&re());){var ae=S.callback;if(typeof ae=="function"){S.callback=null,A=S.priorityLevel;var se=ae(S.expirationTime<=_);if(_=r.unstable_now(),typeof se=="function"){S.callback=se,I(_),B=!0;break t}S===i(m)&&s(m),I(_)}else s(m);S=i(m)}if(S!==null)B=!0;else{var C=i(b);C!==null&&Fe(F,C.startTime-_),B=!1}}break e}finally{S=null,A=K,T=!1}B=void 0}}finally{B?ge():V=!1}}}var ge;if(typeof Q=="function")ge=function(){Q(oe)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,qe=Oe.port2;Oe.port1.onmessage=oe,ge=function(){qe.postMessage(null)}}else ge=function(){Z(oe,0)};function Fe(_,B){H=Z(function(){_(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(_){_.callback=null},r.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<_?Math.floor(1e3/_):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_next=function(_){switch(A){case 1:case 2:case 3:var B=3;break;default:B=A}var K=A;A=B;try{return _()}finally{A=K}},r.unstable_requestPaint=function(){Y=!0},r.unstable_runWithPriority=function(_,B){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var K=A;A=_;try{return B()}finally{A=K}},r.unstable_scheduleCallback=function(_,B,K){var ae=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ae+K:ae):K=ae,_){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=K+se,_={id:x++,callback:B,priorityLevel:_,startTime:K,expirationTime:se,sortIndex:-1},K>ae?(_.sortIndex=K,l(b,_),i(m)===null&&_===i(b)&&(O?(G(H),H=-1):O=!0,Fe(F,K-ae))):(_.sortIndex=se,l(m,_),j||T||(j=!0,V||(V=!0,ge()))),_},r.unstable_shouldYield=re,r.unstable_wrapCallback=function(_){var B=A;return function(){var K=A;A=B;try{return _.apply(this,arguments)}finally{A=K}}}})(Qc)),Qc}var D1;function Ig(){return D1||(D1=1,Xc.exports=Qg()),Xc.exports}var Ic={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1;function Kg(){if(k1)return ht;k1=1;var r=uu();function l(m){var b="https://react.dev/errors/"+m;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)b+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(l(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(m,b,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:S==null?null:""+S,children:m,containerInfo:b,implementation:x}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,b){if(m==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ht.createPortal=function(m,b){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(l(299));return d(m,b,null,x)},ht.flushSync=function(m){var b=f.T,x=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=b,s.p=x,s.d.f()}},ht.preconnect=function(m,b){typeof m=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,s.d.C(m,b))},ht.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},ht.preinit=function(m,b){if(typeof m=="string"&&b&&typeof b.as=="string"){var x=b.as,S=h(x,b.crossOrigin),A=typeof b.integrity=="string"?b.integrity:void 0,T=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;x==="style"?s.d.S(m,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:S,integrity:A,fetchPriority:T}):x==="script"&&s.d.X(m,{crossOrigin:S,integrity:A,fetchPriority:T,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},ht.preinitModule=function(m,b){if(typeof m=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var x=h(b.as,b.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&s.d.M(m)},ht.preload=function(m,b){if(typeof m=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var x=b.as,S=h(x,b.crossOrigin);s.d.L(m,x,{crossOrigin:S,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},ht.preloadModule=function(m,b){if(typeof m=="string")if(b){var x=h(b.as,b.crossOrigin);s.d.m(m,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else s.d.m(m)},ht.requestFormReset=function(m){s.d.r(m)},ht.unstable_batchedUpdates=function(m,b){return m(b)},ht.useFormState=function(m,b,x){return f.H.useFormState(m,b,x)},ht.useFormStatus=function(){return f.H.useHostTransitionStatus()},ht.version="19.2.6",ht}var R1;function up(){if(R1)return Ic.exports;R1=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(l){console.error(l)}}return r(),Ic.exports=Kg(),Ic.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M1;function $g(){if(M1)return Ti;M1=1;var r=Ig(),l=uu(),i=up();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(d(e)!==e)throw Error(s(188))}function b(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var c=o.alternate;if(c===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===n)return m(o),e;if(c===a)return m(o),t;c=c.sibling}throw Error(s(188))}if(n.return!==a.return)n=o,a=c;else{for(var p=!1,g=o.child;g;){if(g===n){p=!0,n=o,a=c;break}if(g===a){p=!0,a=o,n=c;break}g=g.sibling}if(!p){for(g=c.child;g;){if(g===n){p=!0,n=c,a=o;break}if(g===a){p=!0,a=c,n=o;break}g=g.sibling}if(!p)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,A=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Symbol.for("react.client.reference");function qe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case Z:return"Profiler";case Y:return"StrictMode";case F:return"Suspense";case V:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case Q:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:qe(e.type)||"Memo";case J:t=e._payload,e=e._init;try{return qe(e(t))}catch{}}return null}var Fe=Array.isArray,_=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},ae=[],se=-1;function C(e){return{current:e}}function z(e){0>se||(e.current=ae[se],ae[se]=null,se--)}function X(e,t){se++,ae[se]=e.current,e.current=t}var $=C(null),le=C(null),ee=C(null),be=C(null);function Ue(e,t){switch(X(ee,t),X(le,e),X($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?G0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=G0(t),e=X0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z($),X($,e)}function we(){z($),z(le),z(ee)}function ye(e){e.memoizedState!==null&&X(be,e);var t=$.current,n=X0(t,e.type);t!==n&&(X(le,e),X($,n))}function un(e){le.current===e&&(z($),z(le)),be.current===e&&(z(be),Si._currentValue=K)}var yt,xn;function it(e){if(yt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yt=t&&t[1]||"",xn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+e+xn}var dn=!1;function fn(e,t){if(!e||dn)return"";dn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(M){var R=M}Reflect.construct(e,[],q)}else{try{q.call()}catch(M){R=M}e.call(q.prototype)}}else{try{throw Error()}catch(M){R=M}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(M){if(M&&R&&typeof M.stack=="string")return[M.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),p=c[0],g=c[1];if(p&&g){var w=p.split(`
`),k=g.split(`
`);for(o=a=0;a<w.length&&!w[a].includes("DetermineComponentFrameRoot");)a++;for(;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;if(a===w.length||o===k.length)for(a=w.length-1,o=k.length-1;1<=a&&0<=o&&w[a]!==k[o];)o--;for(;1<=a&&0<=o;a--,o--)if(w[a]!==k[o]){if(a!==1||o!==1)do if(a--,o--,0>o||w[a]!==k[o]){var L=`
`+w[a].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=a&&0<=o);break}}}finally{dn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?it(n):""}function Gi(e,t){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return e.child!==t&&t!==null?it("Suspense Fallback"):it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return fn(e.type,!1);case 11:return fn(e.type.render,!1);case 1:return fn(e.type,!0);case 31:return it("Activity");default:return""}}function jl(e){try{var t="",n=null;do t+=Gi(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ya=Object.prototype.hasOwnProperty,Bt=r.unstable_scheduleCallback,Gn=r.unstable_cancelCallback,Za=r.unstable_shouldYield,Xi=r.unstable_requestPaint,dt=r.unstable_now,kr=r.unstable_getCurrentPriorityLevel,Qi=r.unstable_ImmediatePriority,Sn=r.unstable_UserBlockingPriority,tn=r.unstable_NormalPriority,xa=r.unstable_LowPriority,_l=r.unstable_IdlePriority,pn=r.log,Ii=r.unstable_setDisableYieldValue,Sa=null,mt=null;function qt(e){if(typeof pn=="function"&&Ii(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Sa,e)}catch{}}var ft=Math.clz32?Math.clz32:Mr,Rr=Math.log,Ki=Math.LN2;function Mr(e){return e>>>=0,e===0?32:31-(Rr(e)/Ki|0)|0}var Va=256,Ya=262144,Ye=4194304;function Ge(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var g=a&134217727;return g!==0?(a=g&~c,a!==0?o=Ge(a):(p&=g,p!==0?o=Ge(p):n||(n=g&~e,n!==0&&(o=Ge(n))))):(g=a&~c,g!==0?o=Ge(g):p!==0?o=Ge(p):n||(n=a&~e,n!==0&&(o=Ge(n)))),o===0?0:t!==0&&t!==o&&(t&c)===0&&(c=o&-o,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:o}function xt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function St(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pt(){var e=Ye;return Ye<<=1,(Ye&62914560)===0&&(Ye=4194304),e}function wt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pe(e,t,n,a,o,c){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,w=e.expirationTimes,k=e.hiddenUpdates;for(n=p&~n;0<n;){var L=31-ft(n),q=1<<L;g[L]=0,w[L]=-1;var R=k[L];if(R!==null)for(k[L]=null,L=0;L<R.length;L++){var M=R[L];M!==null&&(M.lane&=-536870913)}n&=~q}a!==0&&nn(e,a,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~t))}function nn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ft(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-ft(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function Vt(e,t){var n=t&-t;return n=(n&42)!==0?1:wn(n),(n&(e.suspendedLanes|t))!==0?0:n}function wn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Cn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function an(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:h1(e.type))}function Xn(e,t){var n=B.p;try{return B.p=e,t()}finally{B.p=n}}var Yt=Math.random().toString(36).slice(2),st="__reactFiber$"+Yt,Ct="__reactProps$"+Yt,Ga="__reactContainer$"+Yt,Or="__reactEvents$"+Yt,Dh="__reactListeners$"+Yt,kh="__reactHandles$"+Yt,Ru="__reactResources$"+Yt,Ll="__reactMarker$"+Yt;function zr(e){delete e[st],delete e[Ct],delete e[Or],delete e[Dh],delete e[kh]}function Xa(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ga]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=P0(e);e!==null;){if(n=e[st])return n;e=P0(e)}return t}e=n,n=e.parentNode}return null}function Qa(e){if(e=e[st]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ul(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ia(e){var t=e[Ru];return t||(t=e[Ru]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[Ll]=!0}var Mu=new Set,Ou={};function wa(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Ou[e]=t,e=0;e<t.length;e++)Mu.add(t[e])}var Rh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zu={},ju={};function Mh(e){return ya.call(ju,e)?!0:ya.call(zu,e)?!1:Rh.test(e)?ju[e]=!0:(zu[e]=!0,!1)}function $i(e,t,n){if(Mh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ji(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function En(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _u(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oh(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,c=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(p){n=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){if(!e._valueTracker){var t=_u(e)?"checked":"value";e._valueTracker=Oh(e,t,""+e[t])}}function Lu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=_u(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zh=/[\n"\\]/g;function Xt(e){return e.replace(zh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function _r(e,t,n,a,o,c,p,g){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Gt(t)):e.value!==""+Gt(t)&&(e.value=""+Gt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?Lr(e,p,Gt(t)):n!=null?Lr(e,p,Gt(n)):a!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Gt(g):e.removeAttribute("name")}function Uu(e,t,n,a,o,c,p,g){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){jr(e);return}n=n!=null?""+Gt(n):"",t=t!=null?""+Gt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=g?e.checked:!!a,e.defaultChecked=!!a,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),jr(e)}function Lr(e,t,n){t==="number"&&Fi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function $a(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Hu(e,t,n){if(t!=null&&(t=""+Gt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Gt(n):""}function Bu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(Fe(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Gt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),jr(e)}function Ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||jh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Zu(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&qu(e,o,a)}else for(var c in t)t.hasOwnProperty(c)&&qu(e,c,t[c])}function Ur(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _h=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pi(e){return Lh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function An(){}var Hr=null;function Br(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,Pa=null;function Vu(e){var t=Qa(e);if(t&&(e=t.stateNode)){var n=e[Ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(_r(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Xt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[Ct]||null;if(!o)throw Error(s(90));_r(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Lu(a)}break e;case"textarea":Hu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&$a(e,!!n.multiple,t,!1)}}}var qr=!1;function Yu(e,t,n){if(qr)return e(t,n);qr=!0;try{var a=e(t);return a}finally{if(qr=!1,(Fa!==null||Pa!==null)&&(Bs(),Fa&&(t=Fa,e=Pa,Pa=Fa=null,Vu(t),e)))for(t=0;t<e.length;t++)Vu(e[t])}}function Hl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Ct]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zr=!1;if(Nn)try{var Bl={};Object.defineProperty(Bl,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",Bl,Bl),window.removeEventListener("test",Bl,Bl)}catch{Zr=!1}var Qn=null,Vr=null,Wi=null;function Gu(){if(Wi)return Wi;var e,t=Vr,n=t.length,a,o="value"in Qn?Qn.value:Qn.textContent,c=o.length;for(e=0;e<n&&t[e]===o[e];e++);var p=n-e;for(a=1;a<=p&&t[n-a]===o[c-a];a++);return Wi=o.slice(e,1<a?1-a:void 0)}function es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ts(){return!0}function Xu(){return!1}function Et(e){function t(n,a,o,c,p){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(c):c[g]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ts:Xu,this.isPropagationStopped=Xu,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),t}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=Et(Ca),ql=S({},Ca,{view:0,detail:0}),Uh=Et(ql),Yr,Gr,Zl,as=S({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zl&&(Zl&&e.type==="mousemove"?(Yr=e.screenX-Zl.screenX,Gr=e.screenY-Zl.screenY):Gr=Yr=0,Zl=e),Yr)},movementY:function(e){return"movementY"in e?e.movementY:Gr}}),Qu=Et(as),Hh=S({},as,{dataTransfer:0}),Bh=Et(Hh),qh=S({},ql,{relatedTarget:0}),Xr=Et(qh),Zh=S({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),Vh=Et(Zh),Yh=S({},Ca,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gh=Et(Yh),Xh=S({},Ca,{data:0}),Iu=Et(Xh),Qh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $h(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kh[e])?!!t[e]:!1}function Qr(){return $h}var Jh=S({},ql,{key:function(e){if(e.key){var t=Qh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ih[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qr,charCode:function(e){return e.type==="keypress"?es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fh=Et(Jh),Ph=S({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ku=Et(Ph),Wh=S({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qr}),em=Et(Wh),tm=S({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),nm=Et(tm),am=S({},as,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lm=Et(am),im=S({},Ca,{newState:0,oldState:0}),sm=Et(im),rm=[9,13,27,32],Ir=Nn&&"CompositionEvent"in window,Vl=null;Nn&&"documentMode"in document&&(Vl=document.documentMode);var om=Nn&&"TextEvent"in window&&!Vl,$u=Nn&&(!Ir||Vl&&8<Vl&&11>=Vl),Ju=" ",Fu=!1;function Pu(e,t){switch(e){case"keyup":return rm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function cm(e,t){switch(e){case"compositionend":return Wu(t);case"keypress":return t.which!==32?null:(Fu=!0,Ju);case"textInput":return e=t.data,e===Ju&&Fu?null:e;default:return null}}function um(e,t){if(Wa)return e==="compositionend"||!Ir&&Pu(e,t)?(e=Gu(),Wi=Vr=Qn=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $u&&t.locale!=="ko"?null:t.data;default:return null}}var dm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dm[e.type]:t==="textarea"}function td(e,t,n,a){Fa?Pa?Pa.push(a):Pa=[a]:Fa=a,t=Qs(t,"onChange"),0<t.length&&(n=new ns("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Yl=null,Gl=null;function fm(e){H0(e,0)}function ls(e){var t=Ul(e);if(Lu(t))return e}function nd(e,t){if(e==="change")return t}var ad=!1;if(Nn){var Kr;if(Nn){var $r="oninput"in document;if(!$r){var ld=document.createElement("div");ld.setAttribute("oninput","return;"),$r=typeof ld.oninput=="function"}Kr=$r}else Kr=!1;ad=Kr&&(!document.documentMode||9<document.documentMode)}function id(){Yl&&(Yl.detachEvent("onpropertychange",sd),Gl=Yl=null)}function sd(e){if(e.propertyName==="value"&&ls(Gl)){var t=[];td(t,Gl,e,Br(e)),Yu(fm,t)}}function pm(e,t,n){e==="focusin"?(id(),Yl=t,Gl=n,Yl.attachEvent("onpropertychange",sd)):e==="focusout"&&id()}function hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ls(Gl)}function mm(e,t){if(e==="click")return ls(t)}function gm(e,t){if(e==="input"||e==="change")return ls(t)}function bm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:bm;function Xl(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!ya.call(t,o)||!Mt(e[o],t[o]))return!1}return!0}function rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function od(e,t){var n=rd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rd(n)}}function cd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ud(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fi(e.document)}return t}function Jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var vm=Nn&&"documentMode"in document&&11>=document.documentMode,el=null,Fr=null,Ql=null,Pr=!1;function dd(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pr||el==null||el!==Fi(a)||(a=el,"selectionStart"in a&&Jr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ql&&Xl(Ql,a)||(Ql=a,a=Qs(Fr,"onSelect"),0<a.length&&(t=new ns("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=el)))}function Ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tl={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},Wr={},fd={};Nn&&(fd=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Aa(e){if(Wr[e])return Wr[e];if(!tl[e])return e;var t=tl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fd)return Wr[e]=t[n];return e}var pd=Aa("animationend"),hd=Aa("animationiteration"),md=Aa("animationstart"),ym=Aa("transitionrun"),xm=Aa("transitionstart"),Sm=Aa("transitioncancel"),gd=Aa("transitionend"),bd=new Map,eo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eo.push("scrollEnd");function ln(e,t){bd.set(e,t),wa(t,[e])}var is=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Qt=[],nl=0,to=0;function ss(){for(var e=nl,t=to=nl=0;t<e;){var n=Qt[t];Qt[t++]=null;var a=Qt[t];Qt[t++]=null;var o=Qt[t];Qt[t++]=null;var c=Qt[t];if(Qt[t++]=null,a!==null&&o!==null){var p=a.pending;p===null?o.next=o:(o.next=p.next,p.next=o),a.pending=o}c!==0&&vd(n,o,c)}}function rs(e,t,n,a){Qt[nl++]=e,Qt[nl++]=t,Qt[nl++]=n,Qt[nl++]=a,to|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function no(e,t,n,a){return rs(e,t,n,a),os(e)}function Na(e,t){return rs(e,null,null,t),os(e)}function vd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,c=e.return;c!==null;)c.childLanes|=n,a=c.alternate,a!==null&&(a.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&t!==null&&(o=31-ft(n),e=c.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=n|536870912),c):null}function os(e){if(50<hi)throw hi=0,fc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var al={};function wm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,a){return new wm(e,t,n,a)}function ao(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cs(e,t,n,a,o,c){var p=0;if(a=e,typeof e=="function")ao(e)&&(p=1);else if(typeof e=="string")p=Tg(e,n,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=Ot(31,n,t,o),e.elementType=ne,e.lanes=c,e;case O:return Ta(n.children,o,c,t);case Y:p=8,o|=24;break;case Z:return e=Ot(12,n,t,o|2),e.elementType=Z,e.lanes=c,e;case F:return e=Ot(13,n,t,o),e.elementType=F,e.lanes=c,e;case V:return e=Ot(19,n,t,o),e.elementType=V,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:p=10;break e;case G:p=9;break e;case I:p=11;break e;case H:p=14;break e;case J:p=16,a=null;break e}p=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=Ot(p,n,t,o),t.elementType=e,t.type=a,t.lanes=c,t}function Ta(e,t,n,a){return e=Ot(7,e,a,t),e.lanes=n,e}function lo(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function xd(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function io(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Sd=new WeakMap;function It(e,t){if(typeof e=="object"&&e!==null){var n=Sd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:jl(t)},Sd.set(e,t),t)}return{value:e,source:t,stack:jl(t)}}var ll=[],il=0,us=null,Il=0,Kt=[],$t=0,In=null,hn=1,mn="";function Dn(e,t){ll[il++]=Il,ll[il++]=us,us=e,Il=t}function wd(e,t,n){Kt[$t++]=hn,Kt[$t++]=mn,Kt[$t++]=In,In=e;var a=hn;e=mn;var o=32-ft(a)-1;a&=~(1<<o),n+=1;var c=32-ft(t)+o;if(30<c){var p=o-o%5;c=(a&(1<<p)-1).toString(32),a>>=p,o-=p,hn=1<<32-ft(t)+o|n<<o|a,mn=c+e}else hn=1<<c|n<<o|a,mn=e}function so(e){e.return!==null&&(Dn(e,1),wd(e,1,0))}function ro(e){for(;e===us;)us=ll[--il],ll[il]=null,Il=ll[--il],ll[il]=null;for(;e===In;)In=Kt[--$t],Kt[$t]=null,mn=Kt[--$t],Kt[$t]=null,hn=Kt[--$t],Kt[$t]=null}function Cd(e,t){Kt[$t++]=hn,Kt[$t++]=mn,Kt[$t++]=In,hn=t.id,mn=t.overflow,In=e}var rt=null,_e=null,ve=!1,Kn=null,Jt=!1,oo=Error(s(519));function $n(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kl(It(t,e)),oo}function Ed(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[st]=e,t[Ct]=a,n){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(n=0;n<gi.length;n++)pe(gi[n],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),Uu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),Bu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||V0(t.textContent,n)?(a.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),a.onScroll!=null&&pe("scroll",t),a.onScrollEnd!=null&&pe("scrollend",t),a.onClick!=null&&(t.onclick=An),t=!0):t=!1,t||$n(e,!0)}function Ad(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 31:case 13:Jt=!1;return;case 27:case 3:Jt=!0;return;default:rt=rt.return}}function sl(e){if(e!==rt)return!1;if(!ve)return Ad(e),ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Tc(e.type,e.memoizedProps)),n=!n),n&&_e&&$n(e),Ad(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_e=F0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_e=F0(e)}else t===27?(t=_e,ca(e.type)?(e=Oc,Oc=null,_e=e):_e=t):_e=rt?Pt(e.stateNode.nextSibling):null;return!0}function Da(){_e=rt=null,ve=!1}function co(){var e=Kn;return e!==null&&(Dt===null?Dt=e:Dt.push.apply(Dt,e),Kn=null),e}function Kl(e){Kn===null?Kn=[e]:Kn.push(e)}var uo=C(null),ka=null,kn=null;function Jn(e,t,n){X(uo,t._currentValue),t._currentValue=n}function Rn(e){e._currentValue=uo.current,z(uo)}function fo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function po(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var p=o.child;c=c.firstContext;e:for(;c!==null;){var g=c;c=o;for(var w=0;w<t.length;w++)if(g.context===t[w]){c.lanes|=n,g=c.alternate,g!==null&&(g.lanes|=n),fo(c.return,n,e),a||(p=null);break e}c=g.next}}else if(o.tag===18){if(p=o.return,p===null)throw Error(s(341));p.lanes|=n,c=p.alternate,c!==null&&(c.lanes|=n),fo(p,n,e),p=null}else p=o.child;if(p!==null)p.return=o;else for(p=o;p!==null;){if(p===e){p=null;break}if(o=p.sibling,o!==null){o.return=p.return,p=o;break}p=p.return}o=p}}function rl(e,t,n,a){e=null;for(var o=t,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var p=o.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var g=o.type;Mt(o.pendingProps.value,p.value)||(e!==null?e.push(g):e=[g])}}else if(o===be.current){if(p=o.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Si):e=[Si])}o=o.return}e!==null&&po(t,e,n,a),t.flags|=262144}function ds(e){for(e=e.firstContext;e!==null;){if(!Mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ra(e){ka=e,kn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return Nd(ka,e)}function fs(e,t){return ka===null&&Ra(e),Nd(e,t)}function Nd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},kn===null){if(e===null)throw Error(s(308));kn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kn=kn.next=t;return n}var Cm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Em=r.unstable_scheduleCallback,Am=r.unstable_NormalPriority,Ie={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ho(){return{controller:new Cm,data:new Map,refCount:0}}function $l(e){e.refCount--,e.refCount===0&&Em(Am,function(){e.controller.abort()})}var Jl=null,mo=0,ol=0,cl=null;function Nm(e,t){if(Jl===null){var n=Jl=[];mo=0,ol=vc(),cl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return mo++,t.then(Td,Td),t}function Td(){if(--mo===0&&Jl!==null){cl!==null&&(cl.status="fulfilled");var e=Jl;Jl=null,ol=0,cl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tm(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var Dd=_.S;_.S=function(e,t){f0=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Nm(e,t),Dd!==null&&Dd(e,t)};var Ma=C(null);function go(){var e=Ma.current;return e!==null?e:ze.pooledCache}function ps(e,t){t===null?X(Ma,Ma.current):X(Ma,t.pool)}function kd(){var e=go();return e===null?null:{parent:Ie._currentValue,pool:e}}var ul=Error(s(460)),bo=Error(s(474)),hs=Error(s(542)),ms={then:function(){}};function Rd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Md(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(An,An),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zd(e),e;default:if(typeof t.status=="string")t.then(An,An);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zd(e),e}throw za=t,ul}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(za=n,ul):n}}var za=null;function Od(){if(za===null)throw Error(s(459));var e=za;return za=null,e}function zd(e){if(e===ul||e===hs)throw Error(s(483))}var dl=null,Fl=0;function gs(e){var t=Fl;return Fl+=1,dl===null&&(dl=[]),Md(dl,e,t)}function Pl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function bs(e,t){throw t.$$typeof===A?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jd(e){function t(N,E){if(e){var D=N.deletions;D===null?(N.deletions=[E],N.flags|=16):D.push(E)}}function n(N,E){if(!e)return null;for(;E!==null;)t(N,E),E=E.sibling;return null}function a(N){for(var E=new Map;N!==null;)N.key!==null?E.set(N.key,N):E.set(N.index,N),N=N.sibling;return E}function o(N,E){return N=Tn(N,E),N.index=0,N.sibling=null,N}function c(N,E,D){return N.index=D,e?(D=N.alternate,D!==null?(D=D.index,D<E?(N.flags|=67108866,E):D):(N.flags|=67108866,E)):(N.flags|=1048576,E)}function p(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function g(N,E,D,U){return E===null||E.tag!==6?(E=lo(D,N.mode,U),E.return=N,E):(E=o(E,D),E.return=N,E)}function w(N,E,D,U){var te=D.type;return te===O?L(N,E,D.props.children,U,D.key):E!==null&&(E.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===J&&Oa(te)===E.type)?(E=o(E,D.props),Pl(E,D),E.return=N,E):(E=cs(D.type,D.key,D.props,null,N.mode,U),Pl(E,D),E.return=N,E)}function k(N,E,D,U){return E===null||E.tag!==4||E.stateNode.containerInfo!==D.containerInfo||E.stateNode.implementation!==D.implementation?(E=io(D,N.mode,U),E.return=N,E):(E=o(E,D.children||[]),E.return=N,E)}function L(N,E,D,U,te){return E===null||E.tag!==7?(E=Ta(D,N.mode,U,te),E.return=N,E):(E=o(E,D),E.return=N,E)}function q(N,E,D){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=lo(""+E,N.mode,D),E.return=N,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case T:return D=cs(E.type,E.key,E.props,null,N.mode,D),Pl(D,E),D.return=N,D;case j:return E=io(E,N.mode,D),E.return=N,E;case J:return E=Oa(E),q(N,E,D)}if(Fe(E)||ge(E))return E=Ta(E,N.mode,D,null),E.return=N,E;if(typeof E.then=="function")return q(N,gs(E),D);if(E.$$typeof===Q)return q(N,fs(N,E),D);bs(N,E)}return null}function R(N,E,D,U){var te=E!==null?E.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return te!==null?null:g(N,E,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case T:return D.key===te?w(N,E,D,U):null;case j:return D.key===te?k(N,E,D,U):null;case J:return D=Oa(D),R(N,E,D,U)}if(Fe(D)||ge(D))return te!==null?null:L(N,E,D,U,null);if(typeof D.then=="function")return R(N,E,gs(D),U);if(D.$$typeof===Q)return R(N,E,fs(N,D),U);bs(N,D)}return null}function M(N,E,D,U,te){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return N=N.get(D)||null,g(E,N,""+U,te);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case T:return N=N.get(U.key===null?D:U.key)||null,w(E,N,U,te);case j:return N=N.get(U.key===null?D:U.key)||null,k(E,N,U,te);case J:return U=Oa(U),M(N,E,D,U,te)}if(Fe(U)||ge(U))return N=N.get(D)||null,L(E,N,U,te,null);if(typeof U.then=="function")return M(N,E,D,gs(U),te);if(U.$$typeof===Q)return M(N,E,D,fs(E,U),te);bs(E,U)}return null}function P(N,E,D,U){for(var te=null,xe=null,W=E,de=E=0,me=null;W!==null&&de<D.length;de++){W.index>de?(me=W,W=null):me=W.sibling;var Se=R(N,W,D[de],U);if(Se===null){W===null&&(W=me);break}e&&W&&Se.alternate===null&&t(N,W),E=c(Se,E,de),xe===null?te=Se:xe.sibling=Se,xe=Se,W=me}if(de===D.length)return n(N,W),ve&&Dn(N,de),te;if(W===null){for(;de<D.length;de++)W=q(N,D[de],U),W!==null&&(E=c(W,E,de),xe===null?te=W:xe.sibling=W,xe=W);return ve&&Dn(N,de),te}for(W=a(W);de<D.length;de++)me=M(W,N,de,D[de],U),me!==null&&(e&&me.alternate!==null&&W.delete(me.key===null?de:me.key),E=c(me,E,de),xe===null?te=me:xe.sibling=me,xe=me);return e&&W.forEach(function(ha){return t(N,ha)}),ve&&Dn(N,de),te}function ie(N,E,D,U){if(D==null)throw Error(s(151));for(var te=null,xe=null,W=E,de=E=0,me=null,Se=D.next();W!==null&&!Se.done;de++,Se=D.next()){W.index>de?(me=W,W=null):me=W.sibling;var ha=R(N,W,Se.value,U);if(ha===null){W===null&&(W=me);break}e&&W&&ha.alternate===null&&t(N,W),E=c(ha,E,de),xe===null?te=ha:xe.sibling=ha,xe=ha,W=me}if(Se.done)return n(N,W),ve&&Dn(N,de),te;if(W===null){for(;!Se.done;de++,Se=D.next())Se=q(N,Se.value,U),Se!==null&&(E=c(Se,E,de),xe===null?te=Se:xe.sibling=Se,xe=Se);return ve&&Dn(N,de),te}for(W=a(W);!Se.done;de++,Se=D.next())Se=M(W,N,de,Se.value,U),Se!==null&&(e&&Se.alternate!==null&&W.delete(Se.key===null?de:Se.key),E=c(Se,E,de),xe===null?te=Se:xe.sibling=Se,xe=Se);return e&&W.forEach(function(Hg){return t(N,Hg)}),ve&&Dn(N,de),te}function Re(N,E,D,U){if(typeof D=="object"&&D!==null&&D.type===O&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case T:e:{for(var te=D.key;E!==null;){if(E.key===te){if(te=D.type,te===O){if(E.tag===7){n(N,E.sibling),U=o(E,D.props.children),U.return=N,N=U;break e}}else if(E.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===J&&Oa(te)===E.type){n(N,E.sibling),U=o(E,D.props),Pl(U,D),U.return=N,N=U;break e}n(N,E);break}else t(N,E);E=E.sibling}D.type===O?(U=Ta(D.props.children,N.mode,U,D.key),U.return=N,N=U):(U=cs(D.type,D.key,D.props,null,N.mode,U),Pl(U,D),U.return=N,N=U)}return p(N);case j:e:{for(te=D.key;E!==null;){if(E.key===te)if(E.tag===4&&E.stateNode.containerInfo===D.containerInfo&&E.stateNode.implementation===D.implementation){n(N,E.sibling),U=o(E,D.children||[]),U.return=N,N=U;break e}else{n(N,E);break}else t(N,E);E=E.sibling}U=io(D,N.mode,U),U.return=N,N=U}return p(N);case J:return D=Oa(D),Re(N,E,D,U)}if(Fe(D))return P(N,E,D,U);if(ge(D)){if(te=ge(D),typeof te!="function")throw Error(s(150));return D=te.call(D),ie(N,E,D,U)}if(typeof D.then=="function")return Re(N,E,gs(D),U);if(D.$$typeof===Q)return Re(N,E,fs(N,D),U);bs(N,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,E!==null&&E.tag===6?(n(N,E.sibling),U=o(E,D),U.return=N,N=U):(n(N,E),U=lo(D,N.mode,U),U.return=N,N=U),p(N)):n(N,E)}return function(N,E,D,U){try{Fl=0;var te=Re(N,E,D,U);return dl=null,te}catch(W){if(W===ul||W===hs)throw W;var xe=Ot(29,W,null,N.mode);return xe.lanes=U,xe.return=N,xe}finally{}}}var ja=jd(!0),_d=jd(!1),Fn=!1;function vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ce&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=os(e),vd(e,null,n),t}return rs(e,a,t,n),os(e)}function Wl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Rt(e,n)}}function xo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?o=c=p:c=c.next=p,n=n.next}while(n!==null);c===null?o=c=t:c=c.next=t}else o=c=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var So=!1;function ei(){if(So){var e=cl;if(e!==null)throw e}}function ti(e,t,n,a){So=!1;var o=e.updateQueue;Fn=!1;var c=o.firstBaseUpdate,p=o.lastBaseUpdate,g=o.shared.pending;if(g!==null){o.shared.pending=null;var w=g,k=w.next;w.next=null,p===null?c=k:p.next=k,p=w;var L=e.alternate;L!==null&&(L=L.updateQueue,g=L.lastBaseUpdate,g!==p&&(g===null?L.firstBaseUpdate=k:g.next=k,L.lastBaseUpdate=w))}if(c!==null){var q=o.baseState;p=0,L=k=w=null,g=c;do{var R=g.lane&-536870913,M=R!==g.lane;if(M?(he&R)===R:(a&R)===R){R!==0&&R===ol&&(So=!0),L!==null&&(L=L.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var P=e,ie=g;R=t;var Re=n;switch(ie.tag){case 1:if(P=ie.payload,typeof P=="function"){q=P.call(Re,q,R);break e}q=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=ie.payload,R=typeof P=="function"?P.call(Re,q,R):P,R==null)break e;q=S({},q,R);break e;case 2:Fn=!0}}R=g.callback,R!==null&&(e.flags|=64,M&&(e.flags|=8192),M=o.callbacks,M===null?o.callbacks=[R]:M.push(R))}else M={lane:R,tag:g.tag,payload:g.payload,callback:g.callback,next:null},L===null?(k=L=M,w=q):L=L.next=M,p|=R;if(g=g.next,g===null){if(g=o.shared.pending,g===null)break;M=g,g=M.next,M.next=null,o.lastBaseUpdate=M,o.shared.pending=null}}while(!0);L===null&&(w=q),o.baseState=w,o.firstBaseUpdate=k,o.lastBaseUpdate=L,c===null&&(o.shared.lanes=0),la|=p,e.lanes=p,e.memoizedState=q}}function Ld(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Ud(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ld(n[e],t)}var fl=C(null),vs=C(0);function Hd(e,t){e=Bn,X(vs,e),X(fl,t),Bn=e|t.baseLanes}function wo(){X(vs,Bn),X(fl,fl.current)}function Co(){Bn=vs.current,z(fl),z(vs)}var zt=C(null),Ft=null;function ea(e){var t=e.alternate;X(Xe,Xe.current&1),X(zt,e),Ft===null&&(t===null||fl.current!==null||t.memoizedState!==null)&&(Ft=e)}function Eo(e){X(Xe,Xe.current),X(zt,e),Ft===null&&(Ft=e)}function Bd(e){e.tag===22?(X(Xe,Xe.current),X(zt,e),Ft===null&&(Ft=e)):ta()}function ta(){X(Xe,Xe.current),X(zt,zt.current)}function jt(e){z(zt),Ft===e&&(Ft=null),z(Xe)}var Xe=C(0);function ys(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Rc(n)||Mc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mn=0,ue=null,De=null,Ke=null,xs=!1,pl=!1,_a=!1,Ss=0,ni=0,hl=null,Dm=0;function Ze(){throw Error(s(321))}function Ao(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function No(e,t,n,a,o,c){return Mn=c,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?Cf:Zo,_a=!1,c=n(a,o),_a=!1,pl&&(c=Zd(t,n,a,o)),qd(e),c}function qd(e){_.H=ii;var t=De!==null&&De.next!==null;if(Mn=0,Ke=De=ue=null,xs=!1,ni=0,hl=null,t)throw Error(s(300));e===null||$e||(e=e.dependencies,e!==null&&ds(e)&&($e=!0))}function Zd(e,t,n,a){ue=e;var o=0;do{if(pl&&(hl=null),ni=0,pl=!1,25<=o)throw Error(s(301));if(o+=1,Ke=De=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}_.H=Ef,c=t(n,a)}while(pl);return c}function km(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?ai(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ue.flags|=1024),t}function To(){var e=Ss!==0;return Ss=0,e}function Do(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(xs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xs=!1}Mn=0,Ke=De=ue=null,pl=!1,ni=Ss=0,hl=null}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?ue.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Qe(){if(De===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Ke===null?ue.memoizedState:Ke.next;if(t!==null)Ke=t,De=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ke===null?ue.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function ws(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ai(e){var t=ni;return ni+=1,hl===null&&(hl=[]),e=Md(hl,e,t),t=ue,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Cf:Zo),e}function Cs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ai(e);if(e.$$typeof===Q)return ot(e)}throw Error(s(438,String(e)))}function Ro(e){var t=null,n=ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ue.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ws(),ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=re;return t.index++,n}function On(e,t){return typeof t=="function"?t(e):t}function Es(e){var t=Qe();return Mo(t,De,e)}function Mo(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var o=e.baseQueue,c=a.pending;if(c!==null){if(o!==null){var p=o.next;o.next=c.next,c.next=p}t.baseQueue=o=c,a.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{t=o.next;var g=p=null,w=null,k=t,L=!1;do{var q=k.lane&-536870913;if(q!==k.lane?(he&q)===q:(Mn&q)===q){var R=k.revertLane;if(R===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),q===ol&&(L=!0);else if((Mn&R)===R){k=k.next,R===ol&&(L=!0);continue}else q={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},w===null?(g=w=q,p=c):w=w.next=q,ue.lanes|=R,la|=R;q=k.action,_a&&n(c,q),c=k.hasEagerState?k.eagerState:n(c,q)}else R={lane:q,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},w===null?(g=w=R,p=c):w=w.next=R,ue.lanes|=q,la|=q;k=k.next}while(k!==null&&k!==t);if(w===null?p=c:w.next=g,!Mt(c,e.memoizedState)&&($e=!0,L&&(n=cl,n!==null)))throw n;e.memoizedState=c,e.baseState=p,e.baseQueue=w,a.lastRenderedState=c}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Oo(e){var t=Qe(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,c=t.memoizedState;if(o!==null){n.pending=null;var p=o=o.next;do c=e(c,p.action),p=p.next;while(p!==o);Mt(c,t.memoizedState)||($e=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,a]}function Vd(e,t,n){var a=ue,o=Qe(),c=ve;if(c){if(n===void 0)throw Error(s(407));n=n()}else n=t();var p=!Mt((De||o).memoizedState,n);if(p&&(o.memoizedState=n,$e=!0),o=o.queue,_o(Xd.bind(null,a,o,e),[e]),o.getSnapshot!==t||p||Ke!==null&&Ke.memoizedState.tag&1){if(a.flags|=2048,ml(9,{destroy:void 0},Gd.bind(null,a,o,n,t),null),ze===null)throw Error(s(349));c||(Mn&127)!==0||Yd(a,t,n)}return n}function Yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t=ws(),ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gd(e,t,n,a){t.value=n,t.getSnapshot=a,Qd(t)&&Id(e)}function Xd(e,t,n){return n(function(){Qd(t)&&Id(e)})}function Qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function Id(e){var t=Na(e,2);t!==null&&kt(t,e,2)}function zo(e){var t=gt();if(typeof e=="function"){var n=e;if(e=n(),_a){qt(!0);try{n()}finally{qt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:e},t}function Kd(e,t,n,a){return e.baseState=n,Mo(e,De,typeof a=="function"?a:On)}function Rm(e,t,n,a,o){if(Ts(e))throw Error(s(485));if(e=t.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};_.T!==null?n(!0):c.isTransition=!1,a(c),n=t.pending,n===null?(c.next=t.pending=c,$d(t,c)):(c.next=n.next,t.pending=n.next=c)}}function $d(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var c=_.T,p={};_.T=p;try{var g=n(o,a),w=_.S;w!==null&&w(p,g),Jd(e,t,g)}catch(k){jo(e,t,k)}finally{c!==null&&p.types!==null&&(c.types=p.types),_.T=c}}else try{c=n(o,a),Jd(e,t,c)}catch(k){jo(e,t,k)}}function Jd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Fd(e,t,a)},function(a){return jo(e,t,a)}):Fd(e,t,n)}function Fd(e,t,n){t.status="fulfilled",t.value=n,Pd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$d(e,n)))}function jo(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Pd(t),t=t.next;while(t!==a)}e.action=null}function Pd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Wd(e,t){return t}function ef(e,t){if(ve){var n=ze.formState;if(n!==null){e:{var a=ue;if(ve){if(_e){t:{for(var o=_e,c=Jt;o.nodeType!==8;){if(!c){o=null;break t}if(o=Pt(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){_e=Pt(o.nextSibling),a=o.data==="F!";break e}}$n(a)}a=!1}a&&(t=n[0])}}return n=gt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wd,lastRenderedState:t},n.queue=a,n=xf.bind(null,ue,a),a.dispatch=n,a=zo(!1),c=qo.bind(null,ue,!1,a.queue),a=gt(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=Rm.bind(null,ue,o,c,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function tf(e){var t=Qe();return nf(t,De,e)}function nf(e,t,n){if(t=Mo(e,t,Wd)[0],e=Es(On)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ai(t)}catch(p){throw p===ul?hs:p}else a=t;t=Qe();var o=t.queue,c=o.dispatch;return n!==t.memoizedState&&(ue.flags|=2048,ml(9,{destroy:void 0},Mm.bind(null,o,n),null)),[a,c,e]}function Mm(e,t){e.action=t}function af(e){var t=Qe(),n=De;if(n!==null)return nf(t,n,e);Qe(),t=t.memoizedState,n=Qe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ml(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ue.updateQueue,t===null&&(t=ws(),ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function lf(){return Qe().memoizedState}function As(e,t,n,a){var o=gt();ue.flags|=e,o.memoizedState=ml(1|t,{destroy:void 0},n,a===void 0?null:a)}function Ns(e,t,n,a){var o=Qe();a=a===void 0?null:a;var c=o.memoizedState.inst;De!==null&&a!==null&&Ao(a,De.memoizedState.deps)?o.memoizedState=ml(t,c,n,a):(ue.flags|=e,o.memoizedState=ml(1|t,c,n,a))}function sf(e,t){As(8390656,8,e,t)}function _o(e,t){Ns(2048,8,e,t)}function Om(e){ue.flags|=4;var t=ue.updateQueue;if(t===null)t=ws(),ue.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function rf(e){var t=Qe().memoizedState;return Om({ref:t,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function of(e,t){return Ns(4,2,e,t)}function cf(e,t){return Ns(4,4,e,t)}function uf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function df(e,t,n){n=n!=null?n.concat([e]):null,Ns(4,4,uf.bind(null,t,e),n)}function Lo(){}function ff(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ao(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function pf(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ao(t,a[1]))return a[0];if(a=e(),_a){qt(!0);try{e()}finally{qt(!1)}}return n.memoizedState=[a,t],a}function Uo(e,t,n){return n===void 0||(Mn&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=h0(),ue.lanes|=e,la|=e,n)}function hf(e,t,n,a){return Mt(n,t)?n:fl.current!==null?(e=Uo(e,n,a),Mt(e,t)||($e=!0),e):(Mn&42)===0||(Mn&1073741824)!==0&&(he&261930)===0?($e=!0,e.memoizedState=n):(e=h0(),ue.lanes|=e,la|=e,t)}function mf(e,t,n,a,o){var c=B.p;B.p=c!==0&&8>c?c:8;var p=_.T,g={};_.T=g,qo(e,!1,t,n);try{var w=o(),k=_.S;if(k!==null&&k(g,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var L=Tm(w,a);li(e,t,L,Ut(e))}else li(e,t,a,Ut(e))}catch(q){li(e,t,{then:function(){},status:"rejected",reason:q},Ut())}finally{B.p=c,p!==null&&g.types!==null&&(p.types=g.types),_.T=p}}function zm(){}function Ho(e,t,n,a){if(e.tag!==5)throw Error(s(476));var o=gf(e).queue;mf(e,o,t,K,n===null?zm:function(){return bf(e),n(a)})}function gf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:K},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bf(e){var t=gf(e);t.next===null&&(t=e.alternate.memoizedState),li(e,t.next.queue,{},Ut())}function Bo(){return ot(Si)}function vf(){return Qe().memoizedState}function yf(){return Qe().memoizedState}function jm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ut();e=Pn(n);var a=Wn(t,e,n);a!==null&&(kt(a,t,n),Wl(a,t,n)),t={cache:ho()},e.payload=t;return}t=t.return}}function _m(e,t,n){var a=Ut();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ts(e)?Sf(t,n):(n=no(e,t,n,a),n!==null&&(kt(n,e,a),wf(n,t,a)))}function xf(e,t,n){var a=Ut();li(e,t,n,a)}function li(e,t,n,a){var o={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ts(e))Sf(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,g=c(p,n);if(o.hasEagerState=!0,o.eagerState=g,Mt(g,p))return rs(e,t,o,0),ze===null&&ss(),!1}catch{}finally{}if(n=no(e,t,o,a),n!==null)return kt(n,e,a),wf(n,t,a),!0}return!1}function qo(e,t,n,a){if(a={lane:2,revertLane:vc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ts(e)){if(t)throw Error(s(479))}else t=no(e,n,a,2),t!==null&&kt(t,e,2)}function Ts(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Sf(e,t){pl=xs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wf(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Rt(e,n)}}var ii={readContext:ot,use:Cs,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};ii.useEffectEvent=Ze;var Cf={readContext:ot,use:Cs,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:sf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,As(4194308,4,uf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return As(4194308,4,e,t)},useInsertionEffect:function(e,t){As(4,2,e,t)},useMemo:function(e,t){var n=gt();t=t===void 0?null:t;var a=e();if(_a){qt(!0);try{e()}finally{qt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=gt();if(n!==void 0){var o=n(t);if(_a){qt(!0);try{n(t)}finally{qt(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=_m.bind(null,ue,e),[a.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:function(e){e=zo(e);var t=e.queue,n=xf.bind(null,ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Lo,useDeferredValue:function(e,t){var n=gt();return Uo(n,e,t)},useTransition:function(){var e=zo(!1);return e=mf.bind(null,ue,e.queue,!0,!1),gt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ue,o=gt();if(ve){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),ze===null)throw Error(s(349));(he&127)!==0||Yd(a,t,n)}o.memoizedState=n;var c={value:n,getSnapshot:t};return o.queue=c,sf(Xd.bind(null,a,c,e),[e]),a.flags|=2048,ml(9,{destroy:void 0},Gd.bind(null,a,c,n,t),null),n},useId:function(){var e=gt(),t=ze.identifierPrefix;if(ve){var n=mn,a=hn;n=(a&~(1<<32-ft(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ss++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Dm++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Bo,useFormState:ef,useActionState:ef,useOptimistic:function(e){var t=gt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=qo.bind(null,ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return gt().memoizedState=jm.bind(null,ue)},useEffectEvent:function(e){var t=gt(),n={impl:e};return t.memoizedState=n,function(){if((Ce&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Zo={readContext:ot,use:Cs,useCallback:ff,useContext:ot,useEffect:_o,useImperativeHandle:df,useInsertionEffect:of,useLayoutEffect:cf,useMemo:pf,useReducer:Es,useRef:lf,useState:function(){return Es(On)},useDebugValue:Lo,useDeferredValue:function(e,t){var n=Qe();return hf(n,De.memoizedState,e,t)},useTransition:function(){var e=Es(On)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:ai(e),t]},useSyncExternalStore:Vd,useId:vf,useHostTransitionStatus:Bo,useFormState:tf,useActionState:tf,useOptimistic:function(e,t){var n=Qe();return Kd(n,De,e,t)},useMemoCache:Ro,useCacheRefresh:yf};Zo.useEffectEvent=rf;var Ef={readContext:ot,use:Cs,useCallback:ff,useContext:ot,useEffect:_o,useImperativeHandle:df,useInsertionEffect:of,useLayoutEffect:cf,useMemo:pf,useReducer:Oo,useRef:lf,useState:function(){return Oo(On)},useDebugValue:Lo,useDeferredValue:function(e,t){var n=Qe();return De===null?Uo(n,e,t):hf(n,De.memoizedState,e,t)},useTransition:function(){var e=Oo(On)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:ai(e),t]},useSyncExternalStore:Vd,useId:vf,useHostTransitionStatus:Bo,useFormState:af,useActionState:af,useOptimistic:function(e,t){var n=Qe();return De!==null?Kd(n,De,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ro,useCacheRefresh:yf};Ef.useEffectEvent=rf;function Vo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yo={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ut(),o=Pn(a);o.payload=t,n!=null&&(o.callback=n),t=Wn(e,o,a),t!==null&&(kt(t,e,a),Wl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ut(),o=Pn(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Wn(e,o,a),t!==null&&(kt(t,e,a),Wl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ut(),a=Pn(n);a.tag=2,t!=null&&(a.callback=t),t=Wn(e,a,n),t!==null&&(kt(t,e,n),Wl(t,e,n))}};function Af(e,t,n,a,o,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,p):t.prototype&&t.prototype.isPureReactComponent?!Xl(n,a)||!Xl(o,c):!0}function Nf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Yo.enqueueReplaceState(t,t.state,null)}function La(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function Tf(e){is(e)}function Df(e){console.error(e)}function kf(e){is(e)}function Ds(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Rf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Go(e,t,n){return n=Pn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ds(e,t)},n}function Mf(e){return e=Pn(e),e.tag=3,e}function Of(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var c=a.value;e.payload=function(){return o(c)},e.callback=function(){Rf(t,n,a)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){Rf(t,n,a),typeof o!="function"&&(ia===null?ia=new Set([this]):ia.add(this));var g=a.stack;this.componentDidCatch(a.value,{componentStack:g!==null?g:""})})}function Lm(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&rl(t,n,o,!0),n=zt.current,n!==null){switch(n.tag){case 31:case 13:return Ft===null?qs():n.alternate===null&&Ve===0&&(Ve=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===ms?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),mc(e,a,o)),!1;case 22:return n.flags|=65536,a===ms?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),mc(e,a,o)),!1}throw Error(s(435,n.tag))}return mc(e,a,o),qs(),!1}if(ve)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==oo&&(e=Error(s(422),{cause:a}),Kl(It(e,n)))):(a!==oo&&(t=Error(s(423),{cause:a}),Kl(It(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=It(a,n),o=Go(e.stateNode,a,o),xo(e,o),Ve!==4&&(Ve=2)),!1;var c=Error(s(520),{cause:a});if(c=It(c,n),pi===null?pi=[c]:pi.push(c),Ve!==4&&(Ve=2),t===null)return!0;a=It(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Go(n.stateNode,a,e),xo(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ia===null||!ia.has(c))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Mf(o),Of(o,e,n,a),xo(n,o),!1}n=n.return}while(n!==null);return!1}var Xo=Error(s(461)),$e=!1;function ct(e,t,n,a){t.child=e===null?_d(t,null,n,a):ja(t,e.child,n,a)}function zf(e,t,n,a,o){n=n.render;var c=t.ref;if("ref"in a){var p={};for(var g in a)g!=="ref"&&(p[g]=a[g])}else p=a;return Ra(t),a=No(e,t,n,p,c,o),g=To(),e!==null&&!$e?(Do(e,t,o),zn(e,t,o)):(ve&&g&&so(t),t.flags|=1,ct(e,t,a,o),t.child)}function jf(e,t,n,a,o){if(e===null){var c=n.type;return typeof c=="function"&&!ao(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,_f(e,t,c,a,o)):(e=cs(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Wo(e,o)){var p=c.memoizedProps;if(n=n.compare,n=n!==null?n:Xl,n(p,a)&&e.ref===t.ref)return zn(e,t,o)}return t.flags|=1,e=Tn(c,a),e.ref=t.ref,e.return=t,t.child=e}function _f(e,t,n,a,o){if(e!==null){var c=e.memoizedProps;if(Xl(c,a)&&e.ref===t.ref)if($e=!1,t.pendingProps=a=c,Wo(e,o))(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,zn(e,t,o)}return Qo(e,t,n,a,o)}function Lf(e,t,n,a){var o=a.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~c}else a=0,t.child=null;return Uf(e,t,c,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ps(t,c!==null?c.cachePool:null),c!==null?Hd(t,c):wo(),Bd(t);else return a=t.lanes=536870912,Uf(e,t,c!==null?c.baseLanes|n:n,n,a)}else c!==null?(ps(t,c.cachePool),Hd(t,c),ta(),t.memoizedState=null):(e!==null&&ps(t,null),wo(),ta());return ct(e,t,o,n),t.child}function si(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uf(e,t,n,a,o){var c=go();return c=c===null?null:{parent:Ie._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&ps(t,null),wo(),Bd(t),e!==null&&rl(e,t,a,!0),t.childLanes=o,null}function ks(e,t){return t=Ms({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hf(e,t,n){return ja(t,e.child,null,n),e=ks(t,t.pendingProps),e.flags|=2,jt(t),t.memoizedState=null,e}function Um(e,t,n){var a=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(a.mode==="hidden")return e=ks(t,a),t.lanes=536870912,si(null,e);if(Eo(t),(e=_e)?(e=J0(e,Jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:In!==null?{id:hn,overflow:mn}:null,retryLane:536870912,hydrationErrors:null},n=xd(e),n.return=t,t.child=n,rt=t,_e=null)):e=null,e===null)throw $n(t);return t.lanes=536870912,null}return ks(t,a)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(Eo(t),o)if(t.flags&256)t.flags&=-257,t=Hf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if($e||rl(e,t,n,!1),o=(n&e.childLanes)!==0,$e||o){if(a=ze,a!==null&&(p=Vt(a,n),p!==0&&p!==c.retryLane))throw c.retryLane=p,Na(e,p),kt(a,e,p),Xo;qs(),t=Hf(e,t,n)}else e=c.treeContext,_e=Pt(p.nextSibling),rt=t,ve=!0,Kn=null,Jt=!1,e!==null&&Cd(t,e),t=ks(t,a),t.flags|=4096;return t}return e=Tn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Rs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Qo(e,t,n,a,o){return Ra(t),n=No(e,t,n,a,void 0,o),a=To(),e!==null&&!$e?(Do(e,t,o),zn(e,t,o)):(ve&&a&&so(t),t.flags|=1,ct(e,t,n,o),t.child)}function Bf(e,t,n,a,o,c){return Ra(t),t.updateQueue=null,n=Zd(t,a,n,o),qd(e),a=To(),e!==null&&!$e?(Do(e,t,c),zn(e,t,c)):(ve&&a&&so(t),t.flags|=1,ct(e,t,n,c),t.child)}function qf(e,t,n,a,o){if(Ra(t),t.stateNode===null){var c=al,p=n.contextType;typeof p=="object"&&p!==null&&(c=ot(p)),c=new n(a,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Yo,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=a,c.state=t.memoizedState,c.refs={},vo(t),p=n.contextType,c.context=typeof p=="object"&&p!==null?ot(p):al,c.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Vo(t,n,p,a),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&Yo.enqueueReplaceState(c,c.state,null),ti(t,a,c,o),ei(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){c=t.stateNode;var g=t.memoizedProps,w=La(n,g);c.props=w;var k=c.context,L=n.contextType;p=al,typeof L=="object"&&L!==null&&(p=ot(L));var q=n.getDerivedStateFromProps;L=typeof q=="function"||typeof c.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,L||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g||k!==p)&&Nf(t,c,a,p),Fn=!1;var R=t.memoizedState;c.state=R,ti(t,a,c,o),ei(),k=t.memoizedState,g||R!==k||Fn?(typeof q=="function"&&(Vo(t,n,q,a),k=t.memoizedState),(w=Fn||Af(t,n,w,a,R,k,p))?(L||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=k),c.props=a,c.state=k,c.context=p,a=w):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{c=t.stateNode,yo(e,t),p=t.memoizedProps,L=La(n,p),c.props=L,q=t.pendingProps,R=c.context,k=n.contextType,w=al,typeof k=="object"&&k!==null&&(w=ot(k)),g=n.getDerivedStateFromProps,(k=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==q||R!==w)&&Nf(t,c,a,w),Fn=!1,R=t.memoizedState,c.state=R,ti(t,a,c,o),ei();var M=t.memoizedState;p!==q||R!==M||Fn||e!==null&&e.dependencies!==null&&ds(e.dependencies)?(typeof g=="function"&&(Vo(t,n,g,a),M=t.memoizedState),(L=Fn||Af(t,n,L,a,R,M,w)||e!==null&&e.dependencies!==null&&ds(e.dependencies))?(k||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,M,w),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,M,w)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=M),c.props=a,c.state=M,c.context=w,a=L):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),a=!1)}return c=a,Rs(e,t),a=(t.flags&128)!==0,c||a?(c=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&a?(t.child=ja(t,e.child,null,o),t.child=ja(t,null,n,o)):ct(e,t,n,o),t.memoizedState=c.state,e=t.child):e=zn(e,t,o),e}function Zf(e,t,n,a){return Da(),t.flags|=256,ct(e,t,n,a),t.child}var Io={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ko(e){return{baseLanes:e,cachePool:kd()}}function $o(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Lt),e}function Vf(e,t,n){var a=t.pendingProps,o=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),p&&(o=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(o?ea(t):ta(),(e=_e)?(e=J0(e,Jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:In!==null?{id:hn,overflow:mn}:null,retryLane:536870912,hydrationErrors:null},n=xd(e),n.return=t,t.child=n,rt=t,_e=null)):e=null,e===null)throw $n(t);return Mc(e)?t.lanes=32:t.lanes=536870912,null}var g=a.children;return a=a.fallback,o?(ta(),o=t.mode,g=Ms({mode:"hidden",children:g},o),a=Ta(a,o,n,null),g.return=t,a.return=t,g.sibling=a,t.child=g,a=t.child,a.memoizedState=Ko(n),a.childLanes=$o(e,p,n),t.memoizedState=Io,si(null,a)):(ea(t),Jo(t,g))}var w=e.memoizedState;if(w!==null&&(g=w.dehydrated,g!==null)){if(c)t.flags&256?(ea(t),t.flags&=-257,t=Fo(e,t,n)):t.memoizedState!==null?(ta(),t.child=e.child,t.flags|=128,t=null):(ta(),g=a.fallback,o=t.mode,a=Ms({mode:"visible",children:a.children},o),g=Ta(g,o,n,null),g.flags|=2,a.return=t,g.return=t,a.sibling=g,t.child=a,ja(t,e.child,null,n),a=t.child,a.memoizedState=Ko(n),a.childLanes=$o(e,p,n),t.memoizedState=Io,t=si(null,a));else if(ea(t),Mc(g)){if(p=g.nextSibling&&g.nextSibling.dataset,p)var k=p.dgst;p=k,a=Error(s(419)),a.stack="",a.digest=p,Kl({value:a,source:null,stack:null}),t=Fo(e,t,n)}else if($e||rl(e,t,n,!1),p=(n&e.childLanes)!==0,$e||p){if(p=ze,p!==null&&(a=Vt(p,n),a!==0&&a!==w.retryLane))throw w.retryLane=a,Na(e,a),kt(p,e,a),Xo;Rc(g)||qs(),t=Fo(e,t,n)}else Rc(g)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,_e=Pt(g.nextSibling),rt=t,ve=!0,Kn=null,Jt=!1,e!==null&&Cd(t,e),t=Jo(t,a.children),t.flags|=4096);return t}return o?(ta(),g=a.fallback,o=t.mode,w=e.child,k=w.sibling,a=Tn(w,{mode:"hidden",children:a.children}),a.subtreeFlags=w.subtreeFlags&65011712,k!==null?g=Tn(k,g):(g=Ta(g,o,n,null),g.flags|=2),g.return=t,a.return=t,a.sibling=g,t.child=a,si(null,a),a=t.child,g=e.child.memoizedState,g===null?g=Ko(n):(o=g.cachePool,o!==null?(w=Ie._currentValue,o=o.parent!==w?{parent:w,pool:w}:o):o=kd(),g={baseLanes:g.baseLanes|n,cachePool:o}),a.memoizedState=g,a.childLanes=$o(e,p,n),t.memoizedState=Io,si(e.child,a)):(ea(t),n=e.child,e=n.sibling,n=Tn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Jo(e,t){return t=Ms({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ms(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Fo(e,t,n){return ja(t,e.child,null,n),e=Jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),fo(e.return,t,n)}function Po(e,t,n,a,o,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o,treeForkCount:c}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=a,p.tail=n,p.tailMode=o,p.treeForkCount=c)}function Gf(e,t,n){var a=t.pendingProps,o=a.revealOrder,c=a.tail;a=a.children;var p=Xe.current,g=(p&2)!==0;if(g?(p=p&1|2,t.flags|=128):p&=1,X(Xe,p),ct(e,t,a,n),a=ve?Il:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yf(e,n,t);else if(e.tag===19)Yf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ys(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Po(t,!1,o,n,c,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ys(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Po(t,!0,n,null,c,a);break;case"together":Po(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),la|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(rl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ds(e)))}function Hm(e,t,n){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),Jn(t,Ie,e.memoizedState.cache),Da();break;case 27:case 5:ye(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:Jn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Eo(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ea(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Vf(e,t,n):(ea(t),e=zn(e,t,n),e!==null?e.sibling:null);ea(t);break;case 19:var o=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(rl(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return Gf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(Xe,Xe.current),a)break;return null;case 22:return t.lanes=0,Lf(e,t,n,t.pendingProps);case 24:Jn(t,Ie,e.memoizedState.cache)}return zn(e,t,n)}function Xf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)$e=!0;else{if(!Wo(e,n)&&(t.flags&128)===0)return $e=!1,Hm(e,t,n);$e=(e.flags&131072)!==0}else $e=!1,ve&&(t.flags&1048576)!==0&&wd(t,Il,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e=="function")ao(e)?(a=La(e,a),t.tag=1,t=qf(null,t,e,a,n)):(t.tag=0,t=Qo(null,t,e,a,n));else{if(e!=null){var o=e.$$typeof;if(o===I){t.tag=11,t=zf(null,t,e,a,n);break e}else if(o===H){t.tag=14,t=jf(null,t,e,a,n);break e}}throw t=qe(e)||e,Error(s(306,t,""))}}return t;case 0:return Qo(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=La(a,t.pendingProps),qf(e,t,a,o,n);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var c=t.memoizedState;o=c.element,yo(e,t),ti(t,a,null,n);var p=t.memoizedState;if(a=p.cache,Jn(t,Ie,a),a!==c.cache&&po(t,[Ie],n,!0),ei(),a=p.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Zf(e,t,a,n);break e}else if(a!==o){o=It(Error(s(424)),t),Kl(o),t=Zf(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=Pt(e.firstChild),rt=t,ve=!0,Kn=null,Jt=!0,n=_d(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Da(),a===o){t=zn(e,t,n);break e}ct(e,t,a,n)}t=t.child}return t;case 26:return Rs(e,t),e===null?(n=n1(t.type,null,t.pendingProps,null))?t.memoizedState=n:ve||(n=t.type,e=t.pendingProps,a=Is(ee.current).createElement(n),a[st]=t,a[Ct]=e,ut(a,n,e),nt(a),t.stateNode=a):t.memoizedState=n1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&ve&&(a=t.stateNode=W0(t.type,t.pendingProps,ee.current),rt=t,Jt=!0,o=_e,ca(t.type)?(Oc=o,_e=Pt(a.firstChild)):_e=o),ct(e,t,t.pendingProps.children,n),Rs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((o=a=_e)&&(a=hg(a,t.type,t.pendingProps,Jt),a!==null?(t.stateNode=a,rt=t,_e=Pt(a.firstChild),Jt=!1,o=!0):o=!1),o||$n(t)),ye(t),o=t.type,c=t.pendingProps,p=e!==null?e.memoizedProps:null,a=c.children,Tc(o,c)?a=null:p!==null&&Tc(o,p)&&(t.flags|=32),t.memoizedState!==null&&(o=No(e,t,km,null,null,n),Si._currentValue=o),Rs(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&ve&&((e=n=_e)&&(n=mg(n,t.pendingProps,Jt),n!==null?(t.stateNode=n,rt=t,_e=null,e=!0):e=!1),e||$n(t)),null;case 13:return Vf(e,t,n);case 4:return Ue(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ja(t,null,a,n):ct(e,t,a,n),t.child;case 11:return zf(e,t,t.type,t.pendingProps,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Jn(t,t.type,a.value),ct(e,t,a.children,n),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,Ra(t),o=ot(o),a=a(o),t.flags|=1,ct(e,t,a,n),t.child;case 14:return jf(e,t,t.type,t.pendingProps,n);case 15:return _f(e,t,t.type,t.pendingProps,n);case 19:return Gf(e,t,n);case 31:return Um(e,t,n);case 22:return Lf(e,t,n,t.pendingProps);case 24:return Ra(t),a=ot(Ie),e===null?(o=go(),o===null&&(o=ze,c=ho(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=n),o=c),t.memoizedState={parent:a,cache:o},vo(t),Jn(t,Ie,o)):((e.lanes&n)!==0&&(yo(e,t),ti(t,null,null,n),ei()),o=e.memoizedState,c=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Jn(t,Ie,a)):(a=c.cache,Jn(t,Ie,a),a!==o.cache&&po(t,[Ie],n,!0))),ct(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function jn(e){e.flags|=4}function ec(e,t,n,a,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(v0())e.flags|=8192;else throw za=ms,bo}else e.flags&=-16777217}function Qf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!r1(t))if(v0())e.flags|=8192;else throw za=ms,bo}function Os(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?pt():536870912,e.lanes|=t,yl|=t)}function ri(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&65011712,a|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Bm(e,t,n){var a=t.pendingProps;switch(ro(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Rn(Ie),we(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(sl(t)?jn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,co())),Le(t),null;case 26:var o=t.type,c=t.memoizedState;return e===null?(jn(t),c!==null?(Le(t),Qf(t,c)):(Le(t),ec(t,o,null,a,n))):c?c!==e.memoizedState?(jn(t),Le(t),Qf(t,c)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&jn(t),Le(t),ec(t,o,e,a,n)),null;case 27:if(un(t),n=ee.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&jn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Le(t),null}e=$.current,sl(t)?Ed(t):(e=W0(o,a,n),t.stateNode=e,jn(t))}return Le(t),null;case 5:if(un(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&jn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Le(t),null}if(c=$.current,sl(t))Ed(t);else{var p=Is(ee.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof a.is=="string"?p.createElement("select",{is:a.is}):p.createElement("select"),a.multiple?c.multiple=!0:a.size&&(c.size=a.size);break;default:c=typeof a.is=="string"?p.createElement(o,{is:a.is}):p.createElement(o)}}c[st]=t,c[Ct]=a;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=c;e:switch(ut(c,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&jn(t)}}return Le(t),ec(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&jn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=ee.current,sl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=rt,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||V0(e.nodeValue,n)),e||$n(t,!0)}else e=Is(e).createTextNode(a),e[st]=t,t.stateNode=e}return Le(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=sl(t),n!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[st]=t}else Da(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else n=co(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(jt(t),t):(jt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Le(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=sl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(s(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[st]=t}else Da(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),o=!1}else o=co(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(jt(t),t):(jt(t),null)}return jt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==o&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Os(t,t.updateQueue),Le(t),null);case 4:return we(),e===null&&wc(t.stateNode.containerInfo),Le(t),null;case 10:return Rn(t.type),Le(t),null;case 19:if(z(Xe),a=t.memoizedState,a===null)return Le(t),null;if(o=(t.flags&128)!==0,c=a.rendering,c===null)if(o)ri(a,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=ys(e),c!==null){for(t.flags|=128,ri(a,!1),e=c.updateQueue,t.updateQueue=e,Os(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yd(n,e),n=n.sibling;return X(Xe,Xe.current&1|2),ve&&Dn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&dt()>Us&&(t.flags|=128,o=!0,ri(a,!1),t.lanes=4194304)}else{if(!o)if(e=ys(c),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Os(t,e),ri(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!ve)return Le(t),null}else 2*dt()-a.renderingStartTime>Us&&n!==536870912&&(t.flags|=128,o=!0,ri(a,!1),t.lanes=4194304);a.isBackwards?(c.sibling=t.child,t.child=c):(e=a.last,e!==null?e.sibling=c:t.child=c,a.last=c)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=dt(),e.sibling=null,n=Xe.current,X(Xe,o?n&1|2:n&1),ve&&Dn(t,a.treeForkCount),e):(Le(t),null);case 22:case 23:return jt(t),Co(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&Os(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&z(Ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Rn(Ie),Le(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function qm(e,t){switch(ro(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(Ie),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return un(t),null;case 31:if(t.memoizedState!==null){if(jt(t),t.alternate===null)throw Error(s(340));Da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(jt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(Xe),null;case 4:return we(),null;case 10:return Rn(t.type),null;case 22:case 23:return jt(t),Co(),e!==null&&z(Ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Rn(Ie),null;case 25:return null;default:return null}}function If(e,t){switch(ro(t),t.tag){case 3:Rn(Ie),we();break;case 26:case 27:case 5:un(t);break;case 4:we();break;case 31:t.memoizedState!==null&&jt(t);break;case 13:jt(t);break;case 19:z(Xe);break;case 10:Rn(t.type);break;case 22:case 23:jt(t),Co(),e!==null&&z(Ma);break;case 24:Rn(Ie)}}function oi(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var c=n.create,p=n.inst;a=c(),p.destroy=a}n=n.next}while(n!==o)}}catch(g){Ne(t,t.return,g)}}function na(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){var p=a.inst,g=p.destroy;if(g!==void 0){p.destroy=void 0,o=t;var w=n,k=g;try{k()}catch(L){Ne(o,w,L)}}}a=a.next}while(a!==c)}}catch(L){Ne(t,t.return,L)}}function Kf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ud(t,n)}catch(a){Ne(e,e.return,a)}}}function $f(e,t,n){n.props=La(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ne(e,t,a)}}function ci(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(o){Ne(e,t,o)}}function gn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){Ne(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Ne(e,t,o)}else n.current=null}function Jf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){Ne(e,e.return,o)}}function tc(e,t,n){try{var a=e.stateNode;og(a,e.type,n,t),a[Ct]=t}catch(o){Ne(e,e.return,o)}}function Ff(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ca(e.type)||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ac(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=An));else if(a!==4&&(a===27&&ca(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ac(e,t,n),e=e.sibling;e!==null;)ac(e,t,n),e=e.sibling}function zs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ca(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(zs(e,t,n),e=e.sibling;e!==null;)zs(e,t,n),e=e.sibling}function Pf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ut(t,a,n),t[st]=e,t[Ct]=n}catch(c){Ne(e,e.return,c)}}var _n=!1,Je=!1,lc=!1,Wf=typeof WeakSet=="function"?WeakSet:Set,at=null;function Zm(e,t){if(e=e.containerInfo,Ac=er,e=ud(e),Jr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var p=0,g=-1,w=-1,k=0,L=0,q=e,R=null;t:for(;;){for(var M;q!==n||o!==0&&q.nodeType!==3||(g=p+o),q!==c||a!==0&&q.nodeType!==3||(w=p+a),q.nodeType===3&&(p+=q.nodeValue.length),(M=q.firstChild)!==null;)R=q,q=M;for(;;){if(q===e)break t;if(R===n&&++k===o&&(g=p),R===c&&++L===a&&(w=p),(M=q.nextSibling)!==null)break;q=R,R=q.parentNode}q=M}n=g===-1||w===-1?null:{start:g,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nc={focusedElem:e,selectionRange:n},er=!1,at=t;at!==null;)if(t=at,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,at=e;else for(;at!==null;){switch(t=at,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,o=c.memoizedProps,c=c.memoizedState,a=n.stateNode;try{var P=La(n.type,o);e=a.getSnapshotBeforeUpdate(P,c),a.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ne(n,n.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)kc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,at=e;break}at=t.return}}function e0(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Un(e,n),a&4&&oi(5,n);break;case 1:if(Un(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){Ne(n,n.return,p)}else{var o=La(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Ne(n,n.return,p)}}a&64&&Kf(n),a&512&&ci(n,n.return);break;case 3:if(Un(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ud(e,t)}catch(p){Ne(n,n.return,p)}}break;case 27:t===null&&a&4&&Pf(n);case 26:case 5:Un(e,n),t===null&&a&4&&Jf(n),a&512&&ci(n,n.return);break;case 12:Un(e,n);break;case 31:Un(e,n),a&4&&a0(e,n);break;case 13:Un(e,n),a&4&&l0(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Jm.bind(null,n),gg(e,n))));break;case 22:if(a=n.memoizedState!==null||_n,!a){t=t!==null&&t.memoizedState!==null||Je,o=_n;var c=Je;_n=a,(Je=t)&&!c?Hn(e,n,(n.subtreeFlags&8772)!==0):Un(e,n),_n=o,Je=c}break;case 30:break;default:Un(e,n)}}function t0(e){var t=e.alternate;t!==null&&(e.alternate=null,t0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,At=!1;function Ln(e,t,n){for(n=n.child;n!==null;)n0(e,t,n),n=n.sibling}function n0(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Sa,n)}catch{}switch(n.tag){case 26:Je||gn(n,t),Ln(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Je||gn(n,t);var a=He,o=At;ca(n.type)&&(He=n.stateNode,At=!1),Ln(e,t,n),vi(n.stateNode),He=a,At=o;break;case 5:Je||gn(n,t);case 6:if(a=He,o=At,He=null,Ln(e,t,n),He=a,At=o,He!==null)if(At)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(n.stateNode)}catch(c){Ne(n,t,c)}else try{He.removeChild(n.stateNode)}catch(c){Ne(n,t,c)}break;case 18:He!==null&&(At?(e=He,K0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Tl(e)):K0(He,n.stateNode));break;case 4:a=He,o=At,He=n.stateNode.containerInfo,At=!0,Ln(e,t,n),He=a,At=o;break;case 0:case 11:case 14:case 15:na(2,n,t),Je||na(4,n,t),Ln(e,t,n);break;case 1:Je||(gn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&$f(n,t,a)),Ln(e,t,n);break;case 21:Ln(e,t,n);break;case 22:Je=(a=Je)||n.memoizedState!==null,Ln(e,t,n),Je=a;break;default:Ln(e,t,n)}}function a0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tl(e)}catch(n){Ne(t,t.return,n)}}}function l0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tl(e)}catch(n){Ne(t,t.return,n)}}function Vm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Wf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Wf),t;default:throw Error(s(435,e.tag))}}function js(e,t){var n=Vm(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var o=Fm.bind(null,e,a);a.then(o,o)}})}function Nt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a],c=e,p=t,g=p;e:for(;g!==null;){switch(g.tag){case 27:if(ca(g.type)){He=g.stateNode,At=!1;break e}break;case 5:He=g.stateNode,At=!1;break e;case 3:case 4:He=g.stateNode.containerInfo,At=!0;break e}g=g.return}if(He===null)throw Error(s(160));n0(c,p,o),He=null,At=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)i0(t,e),t=t.sibling}var sn=null;function i0(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nt(t,e),Tt(e),a&4&&(na(3,e,e.return),oi(3,e),na(5,e,e.return));break;case 1:Nt(t,e),Tt(e),a&512&&(Je||n===null||gn(n,n.return)),a&64&&_n&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var o=sn;if(Nt(t,e),Tt(e),a&512&&(Je||n===null||gn(n,n.return)),a&4){var c=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Ll]||c[st]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(a),o.head.insertBefore(c,o.querySelector("head > title"))),ut(c,a,n),c[st]=e,nt(c),a=c;break e;case"link":var p=i1("link","href",o).get(a+(n.href||""));if(p){for(var g=0;g<p.length;g++)if(c=p[g],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(g,1);break t}}c=o.createElement(a),ut(c,a,n),o.head.appendChild(c);break;case"meta":if(p=i1("meta","content",o).get(a+(n.content||""))){for(g=0;g<p.length;g++)if(c=p[g],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(g,1);break t}}c=o.createElement(a),ut(c,a,n),o.head.appendChild(c);break;default:throw Error(s(468,a))}c[st]=e,nt(c),a=c}e.stateNode=a}else s1(o,e.type,e.stateNode);else e.stateNode=l1(o,a,e.memoizedProps);else c!==a?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,a===null?s1(o,e.type,e.stateNode):l1(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&tc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Nt(t,e),Tt(e),a&512&&(Je||n===null||gn(n,n.return)),n!==null&&a&4&&tc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Nt(t,e),Tt(e),a&512&&(Je||n===null||gn(n,n.return)),e.flags&32){o=e.stateNode;try{Ja(o,"")}catch(P){Ne(e,e.return,P)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,tc(e,o,n!==null?n.memoizedProps:o)),a&1024&&(lc=!0);break;case 6:if(Nt(t,e),Tt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(P){Ne(e,e.return,P)}}break;case 3:if(Js=null,o=sn,sn=Ks(t.containerInfo),Nt(t,e),sn=o,Tt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Tl(t.containerInfo)}catch(P){Ne(e,e.return,P)}lc&&(lc=!1,s0(e));break;case 4:a=sn,sn=Ks(e.stateNode.containerInfo),Nt(t,e),Tt(e),sn=a;break;case 12:Nt(t,e),Tt(e);break;case 31:Nt(t,e),Tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,js(e,a)));break;case 13:Nt(t,e),Tt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ls=dt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,js(e,a)));break;case 22:o=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,k=_n,L=Je;if(_n=k||o,Je=L||w,Nt(t,e),Je=L,_n=k,Tt(e),a&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||w||_n||Je||Ua(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(c=w.stateNode,o)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{g=w.stateNode;var q=w.memoizedProps.style,R=q!=null&&q.hasOwnProperty("display")?q.display:null;g.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(P){Ne(w,w.return,P)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=o?"":w.memoizedProps}catch(P){Ne(w,w.return,P)}}}else if(t.tag===18){if(n===null){w=t;try{var M=w.stateNode;o?$0(M,!0):$0(w.stateNode,!1)}catch(P){Ne(w,w.return,P)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,js(e,n))));break;case 19:Nt(t,e),Tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,js(e,a)));break;case 30:break;case 21:break;default:Nt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Ff(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var o=n.stateNode,c=nc(e);zs(e,c,o);break;case 5:var p=n.stateNode;n.flags&32&&(Ja(p,""),n.flags&=-33);var g=nc(e);zs(e,g,p);break;case 3:case 4:var w=n.stateNode.containerInfo,k=nc(e);ac(e,k,w);break;default:throw Error(s(161))}}catch(L){Ne(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function s0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;s0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Un(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)e0(e,t.alternate,t),t=t.sibling}function Ua(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:na(4,t,t.return),Ua(t);break;case 1:gn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&$f(t,t.return,n),Ua(t);break;case 27:vi(t.stateNode);case 26:case 5:gn(t,t.return),Ua(t);break;case 22:t.memoizedState===null&&Ua(t);break;case 30:Ua(t);break;default:Ua(t)}e=e.sibling}}function Hn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,o=e,c=t,p=c.flags;switch(c.tag){case 0:case 11:case 15:Hn(o,c,n),oi(4,c);break;case 1:if(Hn(o,c,n),a=c,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(k){Ne(a,a.return,k)}if(a=c,o=a.updateQueue,o!==null){var g=a.stateNode;try{var w=o.shared.hiddenCallbacks;if(w!==null)for(o.shared.hiddenCallbacks=null,o=0;o<w.length;o++)Ld(w[o],g)}catch(k){Ne(a,a.return,k)}}n&&p&64&&Kf(c),ci(c,c.return);break;case 27:Pf(c);case 26:case 5:Hn(o,c,n),n&&a===null&&p&4&&Jf(c),ci(c,c.return);break;case 12:Hn(o,c,n);break;case 31:Hn(o,c,n),n&&p&4&&a0(o,c);break;case 13:Hn(o,c,n),n&&p&4&&l0(o,c);break;case 22:c.memoizedState===null&&Hn(o,c,n),ci(c,c.return);break;case 30:break;default:Hn(o,c,n)}t=t.sibling}}function ic(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&$l(n))}function sc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e))}function rn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)r0(e,t,n,a),t=t.sibling}function r0(e,t,n,a){var o=t.flags;switch(t.tag){case 0:case 11:case 15:rn(e,t,n,a),o&2048&&oi(9,t);break;case 1:rn(e,t,n,a);break;case 3:rn(e,t,n,a),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e)));break;case 12:if(o&2048){rn(e,t,n,a),e=t.stateNode;try{var c=t.memoizedProps,p=c.id,g=c.onPostCommit;typeof g=="function"&&g(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Ne(t,t.return,w)}}else rn(e,t,n,a);break;case 31:rn(e,t,n,a);break;case 13:rn(e,t,n,a);break;case 23:break;case 22:c=t.stateNode,p=t.alternate,t.memoizedState!==null?c._visibility&2?rn(e,t,n,a):ui(e,t):c._visibility&2?rn(e,t,n,a):(c._visibility|=2,gl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),o&2048&&ic(p,t);break;case 24:rn(e,t,n,a),o&2048&&sc(t.alternate,t);break;default:rn(e,t,n,a)}}function gl(e,t,n,a,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,p=t,g=n,w=a,k=p.flags;switch(p.tag){case 0:case 11:case 15:gl(c,p,g,w,o),oi(8,p);break;case 23:break;case 22:var L=p.stateNode;p.memoizedState!==null?L._visibility&2?gl(c,p,g,w,o):ui(c,p):(L._visibility|=2,gl(c,p,g,w,o)),o&&k&2048&&ic(p.alternate,p);break;case 24:gl(c,p,g,w,o),o&&k&2048&&sc(p.alternate,p);break;default:gl(c,p,g,w,o)}t=t.sibling}}function ui(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:ui(n,a),o&2048&&ic(a.alternate,a);break;case 24:ui(n,a),o&2048&&sc(a.alternate,a);break;default:ui(n,a)}t=t.sibling}}var di=8192;function bl(e,t,n){if(e.subtreeFlags&di)for(e=e.child;e!==null;)o0(e,t,n),e=e.sibling}function o0(e,t,n){switch(e.tag){case 26:bl(e,t,n),e.flags&di&&e.memoizedState!==null&&Dg(n,sn,e.memoizedState,e.memoizedProps);break;case 5:bl(e,t,n);break;case 3:case 4:var a=sn;sn=Ks(e.stateNode.containerInfo),bl(e,t,n),sn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=di,di=16777216,bl(e,t,n),di=a):bl(e,t,n));break;default:bl(e,t,n)}}function c0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];at=a,d0(a,e)}c0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)u0(e),e=e.sibling}function u0(e){switch(e.tag){case 0:case 11:case 15:fi(e),e.flags&2048&&na(9,e,e.return);break;case 3:fi(e);break;case 12:fi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_s(e)):fi(e);break;default:fi(e)}}function _s(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];at=a,d0(a,e)}c0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:na(8,t,t.return),_s(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,_s(t));break;default:_s(t)}e=e.sibling}}function d0(e,t){for(;at!==null;){var n=at;switch(n.tag){case 0:case 11:case 15:na(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:$l(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,at=a;else e:for(n=e;at!==null;){a=at;var o=a.sibling,c=a.return;if(t0(a),a===n){at=null;break e}if(o!==null){o.return=c,at=o;break e}at=c}}}var Ym={getCacheForType:function(e){var t=ot(Ie),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ot(Ie).controller.signal}},Gm=typeof WeakMap=="function"?WeakMap:Map,Ce=0,ze=null,fe=null,he=0,Ae=0,_t=null,aa=!1,vl=!1,rc=!1,Bn=0,Ve=0,la=0,Ha=0,oc=0,Lt=0,yl=0,pi=null,Dt=null,cc=!1,Ls=0,f0=0,Us=1/0,Hs=null,ia=null,We=0,sa=null,xl=null,qn=0,uc=0,dc=null,p0=null,hi=0,fc=null;function Ut(){return(Ce&2)!==0&&he!==0?he&-he:_.T!==null?vc():an()}function h0(){if(Lt===0)if((he&536870912)===0||ve){var e=Ya;Ya<<=1,(Ya&3932160)===0&&(Ya=262144),Lt=e}else Lt=536870912;return e=zt.current,e!==null&&(e.flags|=32),Lt}function kt(e,t,n){(e===ze&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),ra(e,he,Lt,!1)),Zt(e,n),((Ce&2)===0||e!==ze)&&(e===ze&&((Ce&2)===0&&(Ha|=n),Ve===4&&ra(e,he,Lt,!1)),bn(e))}function m0(e,t,n){if((Ce&6)!==0)throw Error(s(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||xt(e,t),o=a?Im(e,t):hc(e,t,!0),c=a;do{if(o===0){vl&&!a&&ra(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!Xm(n)){o=hc(e,t,!1),c=!1;continue}if(o===2){if(c=t,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var g=e;o=pi;var w=g.current.memoizedState.isDehydrated;if(w&&(Sl(g,p).flags|=256),p=hc(g,p,!1),p!==2){if(rc&&!w){g.errorRecoveryDisabledLanes|=c,Ha|=c,o=4;break e}c=Dt,Dt=o,c!==null&&(Dt===null?Dt=c:Dt.push.apply(Dt,c))}o=p}if(c=!1,o!==2)continue}}if(o===1){Sl(e,0),ra(e,t,0,!0);break}e:{switch(a=e,c=o,c){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ra(a,t,Lt,!aa);break e;case 2:Dt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(o=Ls+300-dt(),10<o)){if(ra(a,t,Lt,!aa),tt(a,0,!0)!==0)break e;qn=t,a.timeoutHandle=Q0(g0.bind(null,a,n,Dt,Hs,cc,t,Lt,Ha,yl,aa,c,"Throttled",-0,0),o);break e}g0(a,n,Dt,Hs,cc,t,Lt,Ha,yl,aa,c,null,-0,0)}}break}while(!0);bn(e)}function g0(e,t,n,a,o,c,p,g,w,k,L,q,R,M){if(e.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:An},o0(t,c,q);var P=(c&62914560)===c?Ls-dt():(c&4194048)===c?f0-dt():0;if(P=kg(q,P),P!==null){qn=c,e.cancelPendingCommit=P(E0.bind(null,e,t,c,n,a,o,p,g,w,L,q,null,R,M)),ra(e,c,p,!k);return}}E0(e,t,c,n,a,o,p,g,w)}function Xm(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],c=o.getSnapshot;o=o.value;try{if(!Mt(c(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ra(e,t,n,a){t&=~oc,t&=~Ha,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var c=31-ft(o),p=1<<c;a[c]=-1,o&=~p}n!==0&&nn(e,n,t)}function Bs(){return(Ce&6)===0?(mi(0),!1):!0}function pc(){if(fe!==null){if(Ae===0)var e=fe.return;else e=fe,kn=ka=null,ko(e),dl=null,Fl=0,e=fe;for(;e!==null;)If(e.alternate,e),e=e.return;fe=null}}function Sl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,dg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),qn=0,pc(),ze=e,fe=n=Tn(e.current,null),he=t,Ae=0,_t=null,aa=!1,vl=xt(e,t),rc=!1,yl=Lt=oc=Ha=la=Ve=0,Dt=pi=null,cc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var o=31-ft(a),c=1<<o;t|=e[o],a&=~c}return Bn=t,ss(),n}function b0(e,t){ue=null,_.H=ii,t===ul||t===hs?(t=Od(),Ae=3):t===bo?(t=Od(),Ae=4):Ae=t===Xo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,fe===null&&(Ve=1,Ds(e,It(t,e.current)))}function v0(){var e=zt.current;return e===null?!0:(he&4194048)===he?Ft===null:(he&62914560)===he||(he&536870912)!==0?e===Ft:!1}function y0(){var e=_.H;return _.H=ii,e===null?ii:e}function x0(){var e=_.A;return _.A=Ym,e}function qs(){Ve=4,aa||(he&4194048)!==he&&zt.current!==null||(vl=!0),(la&134217727)===0&&(Ha&134217727)===0||ze===null||ra(ze,he,Lt,!1)}function hc(e,t,n){var a=Ce;Ce|=2;var o=y0(),c=x0();(ze!==e||he!==t)&&(Hs=null,Sl(e,t)),t=!1;var p=Ve;e:do try{if(Ae!==0&&fe!==null){var g=fe,w=_t;switch(Ae){case 8:pc(),p=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var k=Ae;if(Ae=0,_t=null,wl(e,g,w,k),n&&vl){p=0;break e}break;default:k=Ae,Ae=0,_t=null,wl(e,g,w,k)}}Qm(),p=Ve;break}catch(L){b0(e,L)}while(!0);return t&&e.shellSuspendCounter++,kn=ka=null,Ce=a,_.H=o,_.A=c,fe===null&&(ze=null,he=0,ss()),p}function Qm(){for(;fe!==null;)S0(fe)}function Im(e,t){var n=Ce;Ce|=2;var a=y0(),o=x0();ze!==e||he!==t?(Hs=null,Us=dt()+500,Sl(e,t)):vl=xt(e,t);e:do try{if(Ae!==0&&fe!==null){t=fe;var c=_t;t:switch(Ae){case 1:Ae=0,_t=null,wl(e,t,c,1);break;case 2:case 9:if(Rd(c)){Ae=0,_t=null,w0(t);break}t=function(){Ae!==2&&Ae!==9||ze!==e||(Ae=7),bn(e)},c.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:Rd(c)?(Ae=0,_t=null,w0(t)):(Ae=0,_t=null,wl(e,t,c,7));break;case 5:var p=null;switch(fe.tag){case 26:p=fe.memoizedState;case 5:case 27:var g=fe;if(p?r1(p):g.stateNode.complete){Ae=0,_t=null;var w=g.sibling;if(w!==null)fe=w;else{var k=g.return;k!==null?(fe=k,Zs(k)):fe=null}break t}}Ae=0,_t=null,wl(e,t,c,5);break;case 6:Ae=0,_t=null,wl(e,t,c,6);break;case 8:pc(),Ve=6;break e;default:throw Error(s(462))}}Km();break}catch(L){b0(e,L)}while(!0);return kn=ka=null,_.H=a,_.A=o,Ce=n,fe!==null?0:(ze=null,he=0,ss(),Ve)}function Km(){for(;fe!==null&&!Za();)S0(fe)}function S0(e){var t=Xf(e.alternate,e,Bn);e.memoizedProps=e.pendingProps,t===null?Zs(e):fe=t}function w0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Bf(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Bf(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:ko(t);default:If(n,t),t=fe=yd(t,Bn),t=Xf(n,t,Bn)}e.memoizedProps=e.pendingProps,t===null?Zs(e):fe=t}function wl(e,t,n,a){kn=ka=null,ko(t),dl=null,Fl=0;var o=t.return;try{if(Lm(e,o,t,n,he)){Ve=1,Ds(e,It(n,e.current)),fe=null;return}}catch(c){if(o!==null)throw fe=o,c;Ve=1,Ds(e,It(n,e.current)),fe=null;return}t.flags&32768?(ve||a===1?e=!0:vl||(he&536870912)!==0?e=!1:(aa=e=!0,(a===2||a===9||a===3||a===6)&&(a=zt.current,a!==null&&a.tag===13&&(a.flags|=16384))),C0(t,e)):Zs(t)}function Zs(e){var t=e;do{if((t.flags&32768)!==0){C0(t,aa);return}e=t.return;var n=Bm(t.alternate,t,Bn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ve===0&&(Ve=5)}function C0(e,t){do{var n=qm(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Ve=6,fe=null}function E0(e,t,n,a,o,c,p,g,w){e.cancelPendingCommit=null;do Vs();while(We!==0);if((Ce&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(c=t.lanes|t.childLanes,c|=to,Pe(e,n,c,p,g,w),e===ze&&(fe=ze=null,he=0),xl=t,sa=e,qn=n,uc=c,dc=o,p0=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Pm(tn,function(){return k0(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null,o=B.p,B.p=2,p=Ce,Ce|=4;try{Zm(e,t,n)}finally{Ce=p,B.p=o,_.T=a}}We=1,A0(),N0(),T0()}}function A0(){if(We===1){We=0;var e=sa,t=xl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var a=B.p;B.p=2;var o=Ce;Ce|=4;try{i0(t,e);var c=Nc,p=ud(e.containerInfo),g=c.focusedElem,w=c.selectionRange;if(p!==g&&g&&g.ownerDocument&&cd(g.ownerDocument.documentElement,g)){if(w!==null&&Jr(g)){var k=w.start,L=w.end;if(L===void 0&&(L=k),"selectionStart"in g)g.selectionStart=k,g.selectionEnd=Math.min(L,g.value.length);else{var q=g.ownerDocument||document,R=q&&q.defaultView||window;if(R.getSelection){var M=R.getSelection(),P=g.textContent.length,ie=Math.min(w.start,P),Re=w.end===void 0?ie:Math.min(w.end,P);!M.extend&&ie>Re&&(p=Re,Re=ie,ie=p);var N=od(g,ie),E=od(g,Re);if(N&&E&&(M.rangeCount!==1||M.anchorNode!==N.node||M.anchorOffset!==N.offset||M.focusNode!==E.node||M.focusOffset!==E.offset)){var D=q.createRange();D.setStart(N.node,N.offset),M.removeAllRanges(),ie>Re?(M.addRange(D),M.extend(E.node,E.offset)):(D.setEnd(E.node,E.offset),M.addRange(D))}}}}for(q=[],M=g;M=M.parentNode;)M.nodeType===1&&q.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<q.length;g++){var U=q[g];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}er=!!Ac,Nc=Ac=null}finally{Ce=o,B.p=a,_.T=n}}e.current=t,We=2}}function N0(){if(We===2){We=0;var e=sa,t=xl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var a=B.p;B.p=2;var o=Ce;Ce|=4;try{e0(e,t.alternate,t)}finally{Ce=o,B.p=a,_.T=n}}We=3}}function T0(){if(We===4||We===3){We=0,Xi();var e=sa,t=xl,n=qn,a=p0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,xl=sa=null,D0(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(ia=null),Cn(n),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Sa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=_.T,o=B.p,B.p=2,_.T=null;try{for(var c=e.onRecoverableError,p=0;p<a.length;p++){var g=a[p];c(g.value,{componentStack:g.stack})}}finally{_.T=t,B.p=o}}(qn&3)!==0&&Vs(),bn(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===fc?hi++:(hi=0,fc=e):hi=0,mi(0)}}function D0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$l(t)))}function Vs(){return A0(),N0(),T0(),k0()}function k0(){if(We!==5)return!1;var e=sa,t=uc;uc=0;var n=Cn(qn),a=_.T,o=B.p;try{B.p=32>n?32:n,_.T=null,n=dc,dc=null;var c=sa,p=qn;if(We=0,xl=sa=null,qn=0,(Ce&6)!==0)throw Error(s(331));var g=Ce;if(Ce|=4,u0(c.current),r0(c,c.current,p,n),Ce=g,mi(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Sa,c)}catch{}return!0}finally{B.p=o,_.T=a,D0(e,t)}}function R0(e,t,n){t=It(n,t),t=Go(e.stateNode,t,2),e=Wn(e,t,2),e!==null&&(Zt(e,2),bn(e))}function Ne(e,t,n){if(e.tag===3)R0(e,e,n);else for(;t!==null;){if(t.tag===3){R0(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ia===null||!ia.has(a))){e=It(n,e),n=Mf(2),a=Wn(t,n,2),a!==null&&(Of(n,a,t,e),Zt(a,2),bn(a));break}}t=t.return}}function mc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Gm;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(rc=!0,o.add(n),e=$m.bind(null,e,t,n),t.then(e,e))}function $m(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ze===e&&(he&n)===n&&(Ve===4||Ve===3&&(he&62914560)===he&&300>dt()-Ls?(Ce&2)===0&&Sl(e,0):oc|=n,yl===he&&(yl=0)),bn(e)}function M0(e,t){t===0&&(t=pt()),e=Na(e,t),e!==null&&(Zt(e,t),bn(e))}function Jm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),M0(e,n)}function Fm(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),M0(e,n)}function Pm(e,t){return Bt(e,t)}var Ys=null,Cl=null,gc=!1,Gs=!1,bc=!1,oa=0;function bn(e){e!==Cl&&e.next===null&&(Cl===null?Ys=Cl=e:Cl=Cl.next=e),Gs=!0,gc||(gc=!0,eg())}function mi(e,t){if(!bc&&Gs){bc=!0;do for(var n=!1,a=Ys;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var c=0;else{var p=a.suspendedLanes,g=a.pingedLanes;c=(1<<31-ft(42|e)+1)-1,c&=o&~(p&~g),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,_0(a,c))}else c=he,c=tt(a,a===ze?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||xt(a,c)||(n=!0,_0(a,c));a=a.next}while(n);bc=!1}}function Wm(){O0()}function O0(){Gs=gc=!1;var e=0;oa!==0&&ug()&&(e=oa);for(var t=dt(),n=null,a=Ys;a!==null;){var o=a.next,c=z0(a,t);c===0?(a.next=null,n===null?Ys=o:n.next=o,o===null&&(Cl=n)):(n=a,(e!==0||(c&3)!==0)&&(Gs=!0)),a=o}We!==0&&We!==5||mi(e),oa!==0&&(oa=0)}function z0(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-ft(c),g=1<<p,w=o[p];w===-1?((g&n)===0||(g&a)!==0)&&(o[p]=St(g,t)):w<=t&&(e.expiredLanes|=g),c&=~g}if(t=ze,n=he,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Gn(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||xt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Gn(a),Cn(n)){case 2:case 8:n=Sn;break;case 32:n=tn;break;case 268435456:n=_l;break;default:n=tn}return a=j0.bind(null,e),n=Bt(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Gn(a),e.callbackPriority=2,e.callbackNode=null,2}function j0(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vs()&&e.callbackNode!==n)return null;var a=he;return a=tt(e,e===ze?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(m0(e,a,t),z0(e,dt()),e.callbackNode!=null&&e.callbackNode===n?j0.bind(null,e):null)}function _0(e,t){if(Vs())return null;m0(e,t,!0)}function eg(){fg(function(){(Ce&6)!==0?Bt(Qi,Wm):O0()})}function vc(){if(oa===0){var e=ol;e===0&&(e=Va,Va<<=1,(Va&261888)===0&&(Va=256)),oa=e}return oa}function L0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pi(""+e)}function U0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function tg(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var c=L0((o[Ct]||null).action),p=a.submitter;p&&(t=(t=p[Ct]||null)?L0(t.formAction):p.getAttribute("formAction"),t!==null&&(c=t,p=null));var g=new ns("action","action",null,a,o);e.push({event:g,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(oa!==0){var w=p?U0(o,p):new FormData(o);Ho(n,{pending:!0,data:w,method:o.method,action:c},null,w)}}else typeof c=="function"&&(g.preventDefault(),w=p?U0(o,p):new FormData(o),Ho(n,{pending:!0,data:w,method:o.method,action:c},c,w))},currentTarget:o}]})}}for(var yc=0;yc<eo.length;yc++){var xc=eo[yc],ng=xc.toLowerCase(),ag=xc[0].toUpperCase()+xc.slice(1);ln(ng,"on"+ag)}ln(pd,"onAnimationEnd"),ln(hd,"onAnimationIteration"),ln(md,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln(ym,"onTransitionRun"),ln(xm,"onTransitionStart"),ln(Sm,"onTransitionCancel"),ln(gd,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gi));function H0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var c=void 0;if(t)for(var p=a.length-1;0<=p;p--){var g=a[p],w=g.instance,k=g.currentTarget;if(g=g.listener,w!==c&&o.isPropagationStopped())break e;c=g,o.currentTarget=k;try{c(o)}catch(L){is(L)}o.currentTarget=null,c=w}else for(p=0;p<a.length;p++){if(g=a[p],w=g.instance,k=g.currentTarget,g=g.listener,w!==c&&o.isPropagationStopped())break e;c=g,o.currentTarget=k;try{c(o)}catch(L){is(L)}o.currentTarget=null,c=w}}}}function pe(e,t){var n=t[Or];n===void 0&&(n=t[Or]=new Set);var a=e+"__bubble";n.has(a)||(B0(t,e,2,!1),n.add(a))}function Sc(e,t,n){var a=0;t&&(a|=4),B0(n,e,a,t)}var Xs="_reactListening"+Math.random().toString(36).slice(2);function wc(e){if(!e[Xs]){e[Xs]=!0,Mu.forEach(function(n){n!=="selectionchange"&&(lg.has(n)||Sc(n,!1,e),Sc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xs]||(t[Xs]=!0,Sc("selectionchange",!1,t))}}function B0(e,t,n,a){switch(h1(t)){case 2:var o=Og;break;case 8:o=zg;break;default:o=Uc}n=o.bind(null,t,n,e),o=void 0,!Zr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Cc(e,t,n,a,o){var c=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var g=a.stateNode.containerInfo;if(g===o)break;if(p===4)for(p=a.return;p!==null;){var w=p.tag;if((w===3||w===4)&&p.stateNode.containerInfo===o)return;p=p.return}for(;g!==null;){if(p=Xa(g),p===null)return;if(w=p.tag,w===5||w===6||w===26||w===27){a=c=p;continue e}g=g.parentNode}}a=a.return}Yu(function(){var k=c,L=Br(n),q=[];e:{var R=bd.get(e);if(R!==void 0){var M=ns,P=e;switch(e){case"keypress":if(es(n)===0)break e;case"keydown":case"keyup":M=Fh;break;case"focusin":P="focus",M=Xr;break;case"focusout":P="blur",M=Xr;break;case"beforeblur":case"afterblur":M=Xr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=em;break;case pd:case hd:case md:M=Vh;break;case gd:M=nm;break;case"scroll":case"scrollend":M=Uh;break;case"wheel":M=lm;break;case"copy":case"cut":case"paste":M=Gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Ku;break;case"toggle":case"beforetoggle":M=sm}var ie=(t&4)!==0,Re=!ie&&(e==="scroll"||e==="scrollend"),N=ie?R!==null?R+"Capture":null:R;ie=[];for(var E=k,D;E!==null;){var U=E;if(D=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||D===null||N===null||(U=Hl(E,N),U!=null&&ie.push(bi(E,U,D))),Re)break;E=E.return}0<ie.length&&(R=new M(R,P,null,n,L),q.push({event:R,listeners:ie}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",R&&n!==Hr&&(P=n.relatedTarget||n.fromElement)&&(Xa(P)||P[Ga]))break e;if((M||R)&&(R=L.window===L?L:(R=L.ownerDocument)?R.defaultView||R.parentWindow:window,M?(P=n.relatedTarget||n.toElement,M=k,P=P?Xa(P):null,P!==null&&(Re=d(P),ie=P.tag,P!==Re||ie!==5&&ie!==27&&ie!==6)&&(P=null)):(M=null,P=k),M!==P)){if(ie=Qu,U="onMouseLeave",N="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Ku,U="onPointerLeave",N="onPointerEnter",E="pointer"),Re=M==null?R:Ul(M),D=P==null?R:Ul(P),R=new ie(U,E+"leave",M,n,L),R.target=Re,R.relatedTarget=D,U=null,Xa(L)===k&&(ie=new ie(N,E+"enter",P,n,L),ie.target=D,ie.relatedTarget=Re,U=ie),Re=U,M&&P)t:{for(ie=ig,N=M,E=P,D=0,U=N;U;U=ie(U))D++;U=0;for(var te=E;te;te=ie(te))U++;for(;0<D-U;)N=ie(N),D--;for(;0<U-D;)E=ie(E),U--;for(;D--;){if(N===E||E!==null&&N===E.alternate){ie=N;break t}N=ie(N),E=ie(E)}ie=null}else ie=null;M!==null&&q0(q,R,M,ie,!1),P!==null&&Re!==null&&q0(q,Re,P,ie,!0)}}e:{if(R=k?Ul(k):window,M=R.nodeName&&R.nodeName.toLowerCase(),M==="select"||M==="input"&&R.type==="file")var xe=nd;else if(ed(R))if(ad)xe=gm;else{xe=hm;var W=pm}else M=R.nodeName,!M||M.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?k&&Ur(k.elementType)&&(xe=nd):xe=mm;if(xe&&(xe=xe(e,k))){td(q,xe,n,L);break e}W&&W(e,R,k),e==="focusout"&&k&&R.type==="number"&&k.memoizedProps.value!=null&&Lr(R,"number",R.value)}switch(W=k?Ul(k):window,e){case"focusin":(ed(W)||W.contentEditable==="true")&&(el=W,Fr=k,Ql=null);break;case"focusout":Ql=Fr=el=null;break;case"mousedown":Pr=!0;break;case"contextmenu":case"mouseup":case"dragend":Pr=!1,dd(q,n,L);break;case"selectionchange":if(vm)break;case"keydown":case"keyup":dd(q,n,L)}var de;if(Ir)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Wa?Pu(e,n)&&(me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(me="onCompositionStart");me&&($u&&n.locale!=="ko"&&(Wa||me!=="onCompositionStart"?me==="onCompositionEnd"&&Wa&&(de=Gu()):(Qn=L,Vr="value"in Qn?Qn.value:Qn.textContent,Wa=!0)),W=Qs(k,me),0<W.length&&(me=new Iu(me,e,null,n,L),q.push({event:me,listeners:W}),de?me.data=de:(de=Wu(n),de!==null&&(me.data=de)))),(de=om?cm(e,n):um(e,n))&&(me=Qs(k,"onBeforeInput"),0<me.length&&(W=new Iu("onBeforeInput","beforeinput",null,n,L),q.push({event:W,listeners:me}),W.data=de)),tg(q,e,k,n,L)}H0(q,t)})}function bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qs(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Hl(e,n),o!=null&&a.unshift(bi(e,o,c)),o=Hl(e,t),o!=null&&a.push(bi(e,o,c))),e.tag===3)return a;e=e.return}return[]}function ig(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function q0(e,t,n,a,o){for(var c=t._reactName,p=[];n!==null&&n!==a;){var g=n,w=g.alternate,k=g.stateNode;if(g=g.tag,w!==null&&w===a)break;g!==5&&g!==26&&g!==27||k===null||(w=k,o?(k=Hl(n,c),k!=null&&p.unshift(bi(n,k,w))):o||(k=Hl(n,c),k!=null&&p.push(bi(n,k,w)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var sg=/\r\n?/g,rg=/\u0000|\uFFFD/g;function Z0(e){return(typeof e=="string"?e:""+e).replace(sg,`
`).replace(rg,"")}function V0(e,t){return t=Z0(t),Z0(e)===t}function ke(e,t,n,a,o,c){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ja(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ja(e,""+a);break;case"className":Ji(e,"class",a);break;case"tabIndex":Ji(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ji(e,n,a);break;case"style":Zu(e,a,c);break;case"data":if(t!=="object"){Ji(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Pi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&ke(e,t,"name",o.name,o,null),ke(e,t,"formEncType",o.formEncType,o,null),ke(e,t,"formMethod",o.formMethod,o,null),ke(e,t,"formTarget",o.formTarget,o,null)):(ke(e,t,"encType",o.encType,o,null),ke(e,t,"method",o.method,o,null),ke(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Pi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=An);break;case"onScroll":a!=null&&pe("scroll",e);break;case"onScrollEnd":a!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Pi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":pe("beforetoggle",e),pe("toggle",e),$i(e,"popover",a);break;case"xlinkActuate":En(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":En(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":En(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":En(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":En(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":En(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":En(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":En(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":En(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":$i(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=_h.get(n)||n,$i(e,n,a))}}function Ec(e,t,n,a,o,c){switch(n){case"style":Zu(e,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ja(e,a):(typeof a=="number"||typeof a=="bigint")&&Ja(e,""+a);break;case"onScroll":a!=null&&pe("scroll",e);break;case"onScrollEnd":a!=null&&pe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=An);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ou.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),c=e[Ct]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,o),typeof a=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,o);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):$i(e,n,a)}}}function ut(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var a=!1,o=!1,c;for(c in n)if(n.hasOwnProperty(c)){var p=n[c];if(p!=null)switch(c){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ke(e,t,c,p,n,null)}}o&&ke(e,t,"srcSet",n.srcSet,n,null),a&&ke(e,t,"src",n.src,n,null);return;case"input":pe("invalid",e);var g=c=p=o=null,w=null,k=null;for(a in n)if(n.hasOwnProperty(a)){var L=n[a];if(L!=null)switch(a){case"name":o=L;break;case"type":p=L;break;case"checked":w=L;break;case"defaultChecked":k=L;break;case"value":c=L;break;case"defaultValue":g=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(137,t));break;default:ke(e,t,a,L,n,null)}}Uu(e,c,g,w,k,p,o,!1);return;case"select":pe("invalid",e),a=p=c=null;for(o in n)if(n.hasOwnProperty(o)&&(g=n[o],g!=null))switch(o){case"value":c=g;break;case"defaultValue":p=g;break;case"multiple":a=g;default:ke(e,t,o,g,n,null)}t=c,n=p,e.multiple=!!a,t!=null?$a(e,!!a,t,!1):n!=null&&$a(e,!!a,n,!0);return;case"textarea":pe("invalid",e),c=o=a=null;for(p in n)if(n.hasOwnProperty(p)&&(g=n[p],g!=null))switch(p){case"value":a=g;break;case"defaultValue":o=g;break;case"children":c=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(s(91));break;default:ke(e,t,p,g,n,null)}Bu(e,a,o,c);return;case"option":for(w in n)if(n.hasOwnProperty(w)&&(a=n[w],a!=null))switch(w){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ke(e,t,w,a,n,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(a=0;a<gi.length;a++)pe(gi[a],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in n)if(n.hasOwnProperty(k)&&(a=n[k],a!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ke(e,t,k,a,n,null)}return;default:if(Ur(t)){for(L in n)n.hasOwnProperty(L)&&(a=n[L],a!==void 0&&Ec(e,t,L,a,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(a=n[g],a!=null&&ke(e,t,g,a,n,null))}function og(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,p=null,g=null,w=null,k=null,L=null;for(M in n){var q=n[M];if(n.hasOwnProperty(M)&&q!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":w=q;default:a.hasOwnProperty(M)||ke(e,t,M,null,a,q)}}for(var R in a){var M=a[R];if(q=n[R],a.hasOwnProperty(R)&&(M!=null||q!=null))switch(R){case"type":c=M;break;case"name":o=M;break;case"checked":k=M;break;case"defaultChecked":L=M;break;case"value":p=M;break;case"defaultValue":g=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,t));break;default:M!==q&&ke(e,t,R,M,a,q)}}_r(e,p,g,w,k,L,c,o);return;case"select":M=p=g=R=null;for(c in n)if(w=n[c],n.hasOwnProperty(c)&&w!=null)switch(c){case"value":break;case"multiple":M=w;default:a.hasOwnProperty(c)||ke(e,t,c,null,a,w)}for(o in a)if(c=a[o],w=n[o],a.hasOwnProperty(o)&&(c!=null||w!=null))switch(o){case"value":R=c;break;case"defaultValue":g=c;break;case"multiple":p=c;default:c!==w&&ke(e,t,o,c,a,w)}t=g,n=p,a=M,R!=null?$a(e,!!n,R,!1):!!a!=!!n&&(t!=null?$a(e,!!n,t,!0):$a(e,!!n,n?[]:"",!1));return;case"textarea":M=R=null;for(g in n)if(o=n[g],n.hasOwnProperty(g)&&o!=null&&!a.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:ke(e,t,g,null,a,o)}for(p in a)if(o=a[p],c=n[p],a.hasOwnProperty(p)&&(o!=null||c!=null))switch(p){case"value":R=o;break;case"defaultValue":M=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==c&&ke(e,t,p,o,a,c)}Hu(e,R,M);return;case"option":for(var P in n)if(R=n[P],n.hasOwnProperty(P)&&R!=null&&!a.hasOwnProperty(P))switch(P){case"selected":e.selected=!1;break;default:ke(e,t,P,null,a,R)}for(w in a)if(R=a[w],M=n[w],a.hasOwnProperty(w)&&R!==M&&(R!=null||M!=null))switch(w){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:ke(e,t,w,R,a,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in n)R=n[ie],n.hasOwnProperty(ie)&&R!=null&&!a.hasOwnProperty(ie)&&ke(e,t,ie,null,a,R);for(k in a)if(R=a[k],M=n[k],a.hasOwnProperty(k)&&R!==M&&(R!=null||M!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,t));break;default:ke(e,t,k,R,a,M)}return;default:if(Ur(t)){for(var Re in n)R=n[Re],n.hasOwnProperty(Re)&&R!==void 0&&!a.hasOwnProperty(Re)&&Ec(e,t,Re,void 0,a,R);for(L in a)R=a[L],M=n[L],!a.hasOwnProperty(L)||R===M||R===void 0&&M===void 0||Ec(e,t,L,R,a,M);return}}for(var N in n)R=n[N],n.hasOwnProperty(N)&&R!=null&&!a.hasOwnProperty(N)&&ke(e,t,N,null,a,R);for(q in a)R=a[q],M=n[q],!a.hasOwnProperty(q)||R===M||R==null&&M==null||ke(e,t,q,R,a,M)}function Y0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var o=n[a],c=o.transferSize,p=o.initiatorType,g=o.duration;if(c&&g&&Y0(p)){for(p=0,g=o.responseEnd,a+=1;a<n.length;a++){var w=n[a],k=w.startTime;if(k>g)break;var L=w.transferSize,q=w.initiatorType;L&&Y0(q)&&(w=w.responseEnd,p+=L*(w<g?1:(g-k)/(w-k)))}if(--a,t+=8*(c+p)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ac=null,Nc=null;function Is(e){return e.nodeType===9?e:e.ownerDocument}function G0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dc=null;function ug(){var e=window.event;return e&&e.type==="popstate"?e===Dc?!1:(Dc=e,!0):(Dc=null,!1)}var Q0=typeof setTimeout=="function"?setTimeout:void 0,dg=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,fg=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(e){return I0.resolve(null).then(e).catch(pg)}:Q0;function pg(e){setTimeout(function(){throw e})}function ca(e){return e==="head"}function K0(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(o),Tl(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")vi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,vi(n);for(var c=n.firstChild;c;){var p=c.nextSibling,g=c.nodeName;c[Ll]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=p}}else n==="body"&&vi(e.ownerDocument.body);n=o}while(n);Tl(t)}function $0(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function kc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":kc(n),zr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function hg(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ll])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function mg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Pt(e.nextSibling),e===null))return null;return e}function J0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pt(e.nextSibling),e===null))return null;return e}function Rc(e){return e.data==="$?"||e.data==="$~"}function Mc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function gg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Oc=null;function F0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Pt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function P0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function W0(e,t,n){switch(t=Is(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function vi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zr(e)}var Wt=new Map,e1=new Set;function Ks(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zn=B.d;B.d={f:bg,r:vg,D:yg,C:xg,L:Sg,m:wg,X:Eg,S:Cg,M:Ag};function bg(){var e=Zn.f(),t=Bs();return e||t}function vg(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?bf(t):Zn.r(e)}var El=typeof document>"u"?null:document;function t1(e,t,n){var a=El;if(a&&typeof t=="string"&&t){var o=Xt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),e1.has(o)||(e1.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),ut(t,"link",e),nt(t),a.head.appendChild(t)))}}function yg(e){Zn.D(e),t1("dns-prefetch",e,null)}function xg(e,t){Zn.C(e,t),t1("preconnect",e,t)}function Sg(e,t,n){Zn.L(e,t,n);var a=El;if(a&&e&&t){var o='link[rel="preload"][as="'+Xt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Xt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Xt(n.imageSizes)+'"]')):o+='[href="'+Xt(e)+'"]';var c=o;switch(t){case"style":c=Al(e);break;case"script":c=Nl(e)}Wt.has(c)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Wt.set(c,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(yi(c))||t==="script"&&a.querySelector(xi(c))||(t=a.createElement("link"),ut(t,"link",e),nt(t),a.head.appendChild(t)))}}function wg(e,t){Zn.m(e,t);var n=El;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Xt(a)+'"][href="'+Xt(e)+'"]',c=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Nl(e)}if(!Wt.has(c)&&(e=S({rel:"modulepreload",href:e},t),Wt.set(c,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(xi(c)))return}a=n.createElement("link"),ut(a,"link",e),nt(a),n.head.appendChild(a)}}}function Cg(e,t,n){Zn.S(e,t,n);var a=El;if(a&&e){var o=Ia(a).hoistableStyles,c=Al(e);t=t||"default";var p=o.get(c);if(!p){var g={loading:0,preload:null};if(p=a.querySelector(yi(c)))g.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Wt.get(c))&&zc(e,n);var w=p=a.createElement("link");nt(w),ut(w,"link",e),w._p=new Promise(function(k,L){w.onload=k,w.onerror=L}),w.addEventListener("load",function(){g.loading|=1}),w.addEventListener("error",function(){g.loading|=2}),g.loading|=4,$s(p,t,a)}p={type:"stylesheet",instance:p,count:1,state:g},o.set(c,p)}}}function Eg(e,t){Zn.X(e,t);var n=El;if(n&&e){var a=Ia(n).hoistableScripts,o=Nl(e),c=a.get(o);c||(c=n.querySelector(xi(o)),c||(e=S({src:e,async:!0},t),(t=Wt.get(o))&&jc(e,t),c=n.createElement("script"),nt(c),ut(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(o,c))}}function Ag(e,t){Zn.M(e,t);var n=El;if(n&&e){var a=Ia(n).hoistableScripts,o=Nl(e),c=a.get(o);c||(c=n.querySelector(xi(o)),c||(e=S({src:e,async:!0,type:"module"},t),(t=Wt.get(o))&&jc(e,t),c=n.createElement("script"),nt(c),ut(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(o,c))}}function n1(e,t,n,a){var o=(o=ee.current)?Ks(o):null;if(!o)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Al(n.href),n=Ia(o).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Al(n.href);var c=Ia(o).hoistableStyles,p=c.get(e);if(p||(o=o.ownerDocument||o,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=o.querySelector(yi(e)))&&!c._p&&(p.instance=c,p.state.loading=5),Wt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wt.set(e,n),c||Ng(o,e,n,p.state))),t&&a===null)throw Error(s(528,""));return p}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Nl(n),n=Ia(o).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Al(e){return'href="'+Xt(e)+'"'}function yi(e){return'link[rel="stylesheet"]['+e+"]"}function a1(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Ng(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ut(t,"link",n),nt(t),e.head.appendChild(t))}function Nl(e){return'[src="'+Xt(e)+'"]'}function xi(e){return"script[async]"+e}function l1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Xt(n.href)+'"]');if(a)return t.instance=a,nt(a),a;var o=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),nt(a),ut(a,"style",o),$s(a,n.precedence,e),t.instance=a;case"stylesheet":o=Al(n.href);var c=e.querySelector(yi(o));if(c)return t.state.loading|=4,t.instance=c,nt(c),c;a=a1(n),(o=Wt.get(o))&&zc(a,o),c=(e.ownerDocument||e).createElement("link"),nt(c);var p=c;return p._p=new Promise(function(g,w){p.onload=g,p.onerror=w}),ut(c,"link",a),t.state.loading|=4,$s(c,n.precedence,e),t.instance=c;case"script":return c=Nl(n.src),(o=e.querySelector(xi(c)))?(t.instance=o,nt(o),o):(a=n,(o=Wt.get(c))&&(a=S({},n),jc(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),nt(o),ut(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,$s(a,n.precedence,e));return t.instance}function $s(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,c=o,p=0;p<a.length;p++){var g=a[p];if(g.dataset.precedence===t)c=g;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Js=null;function i1(e,t,n){if(Js===null){var a=new Map,o=Js=new Map;o.set(n,a)}else o=Js,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var c=n[o];if(!(c[Ll]||c[st]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(t)||"";p=e+p;var g=a.get(p);g?g.push(c):a.set(p,[c])}}return a}function s1(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Tg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function r1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Dg(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=Al(a.href),c=t.querySelector(yi(o));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Fs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,nt(c);return}c=t.ownerDocument||t,a=a1(a),(o=Wt.get(o))&&zc(a,o),c=c.createElement("link"),nt(c);var p=c;p._p=new Promise(function(g,w){p.onload=g,p.onerror=w}),ut(c,"link",a),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Fs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var _c=0;function kg(e,t){return e.stylesheets&&e.count===0&&Ws(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Ws(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&_c===0&&(_c=62500*cg());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ws(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>_c?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function Fs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ws(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ps=null;function Ws(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ps=new Map,t.forEach(Rg,e),Ps=null,Fs.call(e))}function Rg(e,t){if(!(t.state.loading&4)){var n=Ps.get(e);if(n)var a=n.get(null);else{n=new Map,Ps.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var p=o[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),a=p)}a&&n.set(null,a)}o=t.instance,p=o.getAttribute("data-precedence"),c=n.get(p)||a,c===a&&n.set(null,o),n.set(p,o),this.count++,a=Fs.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Si={$$typeof:Q,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function Mg(e,t,n,a,o,c,p,g,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function o1(e,t,n,a,o,c,p,g,w,k,L,q){return e=new Mg(e,t,n,p,w,k,L,q,g),t=1,c===!0&&(t|=24),c=Ot(3,null,null,t),e.current=c,c.stateNode=e,t=ho(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:a,isDehydrated:n,cache:t},vo(c),e}function c1(e){return e?(e=al,e):al}function u1(e,t,n,a,o,c){o=c1(o),a.context===null?a.context=o:a.pendingContext=o,a=Pn(t),a.payload={element:n},c=c===void 0?null:c,c!==null&&(a.callback=c),n=Wn(e,a,t),n!==null&&(kt(n,e,t),Wl(n,e,t))}function d1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lc(e,t){d1(e,t),(e=e.alternate)&&d1(e,t)}function f1(e){if(e.tag===13||e.tag===31){var t=Na(e,67108864);t!==null&&kt(t,e,67108864),Lc(e,67108864)}}function p1(e){if(e.tag===13||e.tag===31){var t=Ut();t=wn(t);var n=Na(e,t);n!==null&&kt(n,e,t),Lc(e,t)}}var er=!0;function Og(e,t,n,a){var o=_.T;_.T=null;var c=B.p;try{B.p=2,Uc(e,t,n,a)}finally{B.p=c,_.T=o}}function zg(e,t,n,a){var o=_.T;_.T=null;var c=B.p;try{B.p=8,Uc(e,t,n,a)}finally{B.p=c,_.T=o}}function Uc(e,t,n,a){if(er){var o=Hc(a);if(o===null)Cc(e,t,a,tr,n),m1(e,a);else if(_g(o,e,t,n,a))a.stopPropagation();else if(m1(e,a),t&4&&-1<jg.indexOf(e)){for(;o!==null;){var c=Qa(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=Ge(c.pendingLanes);if(p!==0){var g=c;for(g.pendingLanes|=2,g.entangledLanes|=2;p;){var w=1<<31-ft(p);g.entanglements[1]|=w,p&=~w}bn(c),(Ce&6)===0&&(Us=dt()+500,mi(0))}}break;case 31:case 13:g=Na(c,2),g!==null&&kt(g,c,2),Bs(),Lc(c,2)}if(c=Hc(a),c===null&&Cc(e,t,a,tr,n),c===o)break;o=c}o!==null&&a.stopPropagation()}else Cc(e,t,a,null,n)}}function Hc(e){return e=Br(e),Bc(e)}var tr=null;function Bc(e){if(tr=null,e=Xa(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tr=e,null}function h1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kr()){case Qi:return 2;case Sn:return 8;case tn:case xa:return 32;case _l:return 268435456;default:return 32}default:return 32}}var qc=!1,ua=null,da=null,fa=null,wi=new Map,Ci=new Map,pa=[],jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m1(e,t){switch(e){case"focusin":case"focusout":ua=null;break;case"dragenter":case"dragleave":da=null;break;case"mouseover":case"mouseout":fa=null;break;case"pointerover":case"pointerout":wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ci.delete(t.pointerId)}}function Ei(e,t,n,a,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Qa(t),t!==null&&f1(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function _g(e,t,n,a,o){switch(t){case"focusin":return ua=Ei(ua,e,t,n,a,o),!0;case"dragenter":return da=Ei(da,e,t,n,a,o),!0;case"mouseover":return fa=Ei(fa,e,t,n,a,o),!0;case"pointerover":var c=o.pointerId;return wi.set(c,Ei(wi.get(c)||null,e,t,n,a,o)),!0;case"gotpointercapture":return c=o.pointerId,Ci.set(c,Ei(Ci.get(c)||null,e,t,n,a,o)),!0}return!1}function g1(e){var t=Xa(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,Xn(e.priority,function(){p1(n)});return}}else if(t===31){if(t=h(n),t!==null){e.blockedOn=t,Xn(e.priority,function(){p1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Hr=a,n.target.dispatchEvent(a),Hr=null}else return t=Qa(n),t!==null&&f1(t),e.blockedOn=n,!1;t.shift()}return!0}function b1(e,t,n){nr(e)&&n.delete(t)}function Lg(){qc=!1,ua!==null&&nr(ua)&&(ua=null),da!==null&&nr(da)&&(da=null),fa!==null&&nr(fa)&&(fa=null),wi.forEach(b1),Ci.forEach(b1)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,qc||(qc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Lg)))}var lr=null;function v1(e){lr!==e&&(lr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){lr===e&&(lr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(Bc(a||n)===null)continue;break}var c=Qa(n);c!==null&&(e.splice(t,3),t-=3,Ho(c,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function Tl(e){function t(w){return ar(w,e)}ua!==null&&ar(ua,e),da!==null&&ar(da,e),fa!==null&&ar(fa,e),wi.forEach(t),Ci.forEach(t);for(var n=0;n<pa.length;n++){var a=pa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<pa.length&&(n=pa[0],n.blockedOn===null);)g1(n),n.blockedOn===null&&pa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],c=n[a+1],p=o[Ct]||null;if(typeof c=="function")p||v1(n);else if(p){var g=null;if(c&&c.hasAttribute("formAction")){if(o=c,p=c[Ct]||null)g=p.formAction;else if(Bc(o)!==null)continue}else g=p.action;typeof g=="function"?n[a+1]=g:(n.splice(a,3),a-=3),v1(n)}}}function y1(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return o=p})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Zc(e){this._internalRoot=e}ir.prototype.render=Zc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=Ut();u1(n,a,e,t,null,null)},ir.prototype.unmount=Zc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;u1(e.current,2,null,e,null,null),Bs(),t[Ga]=null}};function ir(e){this._internalRoot=e}ir.prototype.unstable_scheduleHydration=function(e){if(e){var t=an();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pa.length&&t!==0&&t<pa[n].priority;n++);pa.splice(n,0,e),n===0&&g1(e)}};var x1=l.version;if(x1!=="19.2.6")throw Error(s(527,x1,"19.2.6"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=b(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Ug={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sr.isDisabled&&sr.supportsFiber)try{Sa=sr.inject(Ug),mt=sr}catch{}}return Ti.createRoot=function(e,t){if(!u(e))throw Error(s(299));var n=!1,a="",o=Tf,c=Df,p=kf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=o1(e,1,!1,null,null,n,a,null,o,c,p,y1),e[Ga]=t.current,wc(e),new Zc(t)},Ti.hydrateRoot=function(e,t,n){if(!u(e))throw Error(s(299));var a=!1,o="",c=Tf,p=Df,g=kf,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=o1(e,1,!0,t,n??null,a,o,w,c,p,g,y1),t.context=c1(null),n=t.current,a=Ut(),a=wn(a),o=Pn(a),o.callback=null,Wn(n,o,a),n=a,t.current.lanes=n,Zt(t,n),bn(t),e[Ga]=t.current,wc(e),new ir(t)},Ti.version="19.2.6",Ti}var O1;function Jg(){if(O1)return Gc.exports;O1=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(l){console.error(l)}}return r(),Gc.exports=$g(),Gc.exports}var Fg=Jg();function du(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let qa=du();function dp(r){qa=r}const fp=/[&<>"']/,Pg=new RegExp(fp.source,"g"),pp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Wg=new RegExp(pp.source,"g"),e2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},z1=r=>e2[r];function Ht(r,l){if(l){if(fp.test(r))return r.replace(Pg,z1)}else if(pp.test(r))return r.replace(Wg,z1);return r}const t2=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function n2(r){return r.replace(t2,(l,i)=>(i=i.toLowerCase(),i==="colon"?":":i.charAt(0)==="#"?i.charAt(1)==="x"?String.fromCharCode(parseInt(i.substring(2),16)):String.fromCharCode(+i.substring(1)):""))}const a2=/(^|[^\[])\^/g;function Me(r,l){let i=typeof r=="string"?r:r.source;l=l||"";const s={replace:(u,d)=>{let f=typeof d=="string"?d:d.source;return f=f.replace(a2,"$1"),i=i.replace(u,f),s},getRegex:()=>new RegExp(i,l)};return s}function j1(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const Mi={exec:()=>null};function _1(r,l){const i=r.replace(/\|/g,(d,f,h)=>{let m=!1,b=f;for(;--b>=0&&h[b]==="\\";)m=!m;return m?"|":" |"}),s=i.split(/ \|/);let u=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),l)if(s.length>l)s.splice(l);else for(;s.length<l;)s.push("");for(;u<s.length;u++)s[u]=s[u].trim().replace(/\\\|/g,"|");return s}function Di(r,l,i){const s=r.length;if(s===0)return"";let u=0;for(;u<s&&r.charAt(s-u-1)===l;)u++;return r.slice(0,s-u)}function l2(r,l){if(r.indexOf(l[1])===-1)return-1;let i=0;for(let s=0;s<r.length;s++)if(r[s]==="\\")s++;else if(r[s]===l[0])i++;else if(r[s]===l[1]&&(i--,i<0))return s;return-1}function L1(r,l,i,s){const u=l.href,d=l.title?Ht(l.title):null,f=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){s.state.inLink=!0;const h={type:"link",raw:i,href:u,title:d,text:f,tokens:s.inlineTokens(f)};return s.state.inLink=!1,h}return{type:"image",raw:i,href:u,title:d,text:Ht(f)}}function i2(r,l){const i=r.match(/^(\s+)(?:```)/);if(i===null)return l;const s=i[1];return l.split(`
`).map(u=>{const d=u.match(/^\s+/);if(d===null)return u;const[f]=d;return f.length>=s.length?u.slice(s.length):u}).join(`
`)}class pr{constructor(l){je(this,"options");je(this,"rules");je(this,"lexer");this.options=l||qa}space(l){const i=this.rules.block.newline.exec(l);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(l){const i=this.rules.block.code.exec(l);if(i){const s=i[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?s:Di(s,`
`)}}}fences(l){const i=this.rules.block.fences.exec(l);if(i){const s=i[0],u=i2(s,i[3]||"");return{type:"code",raw:s,lang:i[2]?i[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):i[2],text:u}}}heading(l){const i=this.rules.block.heading.exec(l);if(i){let s=i[2].trim();if(/#$/.test(s)){const u=Di(s,"#");(this.options.pedantic||!u||/ $/.test(u))&&(s=u.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(l){const i=this.rules.block.hr.exec(l);if(i)return{type:"hr",raw:Di(i[0],`
`)}}blockquote(l){const i=this.rules.block.blockquote.exec(l);if(i){let s=Di(i[0],`
`).split(`
`),u="",d="";const f=[];for(;s.length>0;){let h=!1;const m=[];let b;for(b=0;b<s.length;b++)if(/^ {0,3}>/.test(s[b]))m.push(s[b]),h=!0;else if(!h)m.push(s[b]);else break;s=s.slice(b);const x=m.join(`
`),S=x.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");u=u?`${u}
${x}`:x,d=d?`${d}
${S}`:S;const A=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(S,f,!0),this.lexer.state.top=A,s.length===0)break;const T=f[f.length-1];if((T==null?void 0:T.type)==="code")break;if((T==null?void 0:T.type)==="blockquote"){const j=T,O=j.raw+`
`+s.join(`
`),Y=this.blockquote(O);f[f.length-1]=Y,u=u.substring(0,u.length-j.raw.length)+Y.raw,d=d.substring(0,d.length-j.text.length)+Y.text;break}else if((T==null?void 0:T.type)==="list"){const j=T,O=j.raw+`
`+s.join(`
`),Y=this.list(O);f[f.length-1]=Y,u=u.substring(0,u.length-T.raw.length)+Y.raw,d=d.substring(0,d.length-j.raw.length)+Y.raw,s=O.substring(f[f.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:u,tokens:f,text:d}}}list(l){let i=this.rules.block.list.exec(l);if(i){let s=i[1].trim();const u=s.length>1,d={type:"list",raw:"",ordered:u,start:u?+s.slice(0,-1):"",loose:!1,items:[]};s=u?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=u?s:"[*+-]");const f=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let h=!1;for(;l;){let m=!1,b="",x="";if(!(i=f.exec(l))||this.rules.block.hr.test(l))break;b=i[0],l=l.substring(b.length);let S=i[2].split(`
`,1)[0].replace(/^\t+/,Z=>" ".repeat(3*Z.length)),A=l.split(`
`,1)[0],T=!S.trim(),j=0;if(this.options.pedantic?(j=2,x=S.trimStart()):T?j=i[1].length+1:(j=i[2].search(/[^ ]/),j=j>4?1:j,x=S.slice(j),j+=i[1].length),T&&/^ *$/.test(A)&&(b+=A+`
`,l=l.substring(A.length+1),m=!0),!m){const Z=new RegExp(`^ {0,${Math.min(3,j-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),G=new RegExp(`^ {0,${Math.min(3,j-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Q=new RegExp(`^ {0,${Math.min(3,j-1)}}(?:\`\`\`|~~~)`),I=new RegExp(`^ {0,${Math.min(3,j-1)}}#`);for(;l;){const F=l.split(`
`,1)[0];if(A=F,this.options.pedantic&&(A=A.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Q.test(A)||I.test(A)||Z.test(A)||G.test(l))break;if(A.search(/[^ ]/)>=j||!A.trim())x+=`
`+A.slice(j);else{if(T||S.search(/[^ ]/)>=4||Q.test(S)||I.test(S)||G.test(S))break;x+=`
`+A}!T&&!A.trim()&&(T=!0),b+=F+`
`,l=l.substring(F.length+1),S=A.slice(j)}}d.loose||(h?d.loose=!0:/\n *\n *$/.test(b)&&(h=!0));let O=null,Y;this.options.gfm&&(O=/^\[[ xX]\] /.exec(x),O&&(Y=O[0]!=="[ ] ",x=x.replace(/^\[[ xX]\] +/,""))),d.items.push({type:"list_item",raw:b,task:!!O,checked:Y,loose:!1,text:x,tokens:[]}),d.raw+=b}d.items[d.items.length-1].raw=d.items[d.items.length-1].raw.trimEnd(),d.items[d.items.length-1].text=d.items[d.items.length-1].text.trimEnd(),d.raw=d.raw.trimEnd();for(let m=0;m<d.items.length;m++)if(this.lexer.state.top=!1,d.items[m].tokens=this.lexer.blockTokens(d.items[m].text,[]),!d.loose){const b=d.items[m].tokens.filter(S=>S.type==="space"),x=b.length>0&&b.some(S=>/\n.*\n/.test(S.raw));d.loose=x}if(d.loose)for(let m=0;m<d.items.length;m++)d.items[m].loose=!0;return d}}html(l){const i=this.rules.block.html.exec(l);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(l){const i=this.rules.block.def.exec(l);if(i){const s=i[1].toLowerCase().replace(/\s+/g," "),u=i[2]?i[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",d=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):i[3];return{type:"def",tag:s,raw:i[0],href:u,title:d}}}table(l){const i=this.rules.block.table.exec(l);if(!i||!/[:|]/.test(i[2]))return;const s=_1(i[1]),u=i[2].replace(/^\||\| *$/g,"").split("|"),d=i[3]&&i[3].trim()?i[3].replace(/\n[ \t]*$/,"").split(`
`):[],f={type:"table",raw:i[0],header:[],align:[],rows:[]};if(s.length===u.length){for(const h of u)/^ *-+: *$/.test(h)?f.align.push("right"):/^ *:-+: *$/.test(h)?f.align.push("center"):/^ *:-+ *$/.test(h)?f.align.push("left"):f.align.push(null);for(let h=0;h<s.length;h++)f.header.push({text:s[h],tokens:this.lexer.inline(s[h]),header:!0,align:f.align[h]});for(const h of d)f.rows.push(_1(h,f.header.length).map((m,b)=>({text:m,tokens:this.lexer.inline(m),header:!1,align:f.align[b]})));return f}}lheading(l){const i=this.rules.block.lheading.exec(l);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(l){const i=this.rules.block.paragraph.exec(l);if(i){const s=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:s,tokens:this.lexer.inline(s)}}}text(l){const i=this.rules.block.text.exec(l);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(l){const i=this.rules.inline.escape.exec(l);if(i)return{type:"escape",raw:i[0],text:Ht(i[1])}}tag(l){const i=this.rules.inline.tag.exec(l);if(i)return!this.lexer.state.inLink&&/^<a /i.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(l){const i=this.rules.inline.link.exec(l);if(i){const s=i[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const f=Di(s.slice(0,-1),"\\");if((s.length-f.length)%2===0)return}else{const f=l2(i[2],"()");if(f>-1){const m=(i[0].indexOf("!")===0?5:4)+i[1].length+f;i[2]=i[2].substring(0,f),i[0]=i[0].substring(0,m).trim(),i[3]=""}}let u=i[2],d="";if(this.options.pedantic){const f=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u);f&&(u=f[1],d=f[3])}else d=i[3]?i[3].slice(1,-1):"";return u=u.trim(),/^</.test(u)&&(this.options.pedantic&&!/>$/.test(s)?u=u.slice(1):u=u.slice(1,-1)),L1(i,{href:u&&u.replace(this.rules.inline.anyPunctuation,"$1"),title:d&&d.replace(this.rules.inline.anyPunctuation,"$1")},i[0],this.lexer)}}reflink(l,i){let s;if((s=this.rules.inline.reflink.exec(l))||(s=this.rules.inline.nolink.exec(l))){const u=(s[2]||s[1]).replace(/\s+/g," "),d=i[u.toLowerCase()];if(!d){const f=s[0].charAt(0);return{type:"text",raw:f,text:f}}return L1(s,d,s[0],this.lexer)}}emStrong(l,i,s=""){let u=this.rules.inline.emStrongLDelim.exec(l);if(!u||u[3]&&s.match(/[\p{L}\p{N}]/u))return;if(!(u[1]||u[2]||"")||!s||this.rules.inline.punctuation.exec(s)){const f=[...u[0]].length-1;let h,m,b=f,x=0;const S=u[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(S.lastIndex=0,i=i.slice(-1*l.length+f);(u=S.exec(i))!=null;){if(h=u[1]||u[2]||u[3]||u[4]||u[5]||u[6],!h)continue;if(m=[...h].length,u[3]||u[4]){b+=m;continue}else if((u[5]||u[6])&&f%3&&!((f+m)%3)){x+=m;continue}if(b-=m,b>0)continue;m=Math.min(m,m+b+x);const A=[...u[0]][0].length,T=l.slice(0,f+u.index+A+m);if(Math.min(f,m)%2){const O=T.slice(1,-1);return{type:"em",raw:T,text:O,tokens:this.lexer.inlineTokens(O)}}const j=T.slice(2,-2);return{type:"strong",raw:T,text:j,tokens:this.lexer.inlineTokens(j)}}}}codespan(l){const i=this.rules.inline.code.exec(l);if(i){let s=i[2].replace(/\n/g," ");const u=/[^ ]/.test(s),d=/^ /.test(s)&&/ $/.test(s);return u&&d&&(s=s.substring(1,s.length-1)),s=Ht(s,!0),{type:"codespan",raw:i[0],text:s}}}br(l){const i=this.rules.inline.br.exec(l);if(i)return{type:"br",raw:i[0]}}del(l){const i=this.rules.inline.del.exec(l);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}}autolink(l){const i=this.rules.inline.autolink.exec(l);if(i){let s,u;return i[2]==="@"?(s=Ht(i[1]),u="mailto:"+s):(s=Ht(i[1]),u=s),{type:"link",raw:i[0],text:s,href:u,tokens:[{type:"text",raw:s,text:s}]}}}url(l){var s;let i;if(i=this.rules.inline.url.exec(l)){let u,d;if(i[2]==="@")u=Ht(i[0]),d="mailto:"+u;else{let f;do f=i[0],i[0]=((s=this.rules.inline._backpedal.exec(i[0]))==null?void 0:s[0])??"";while(f!==i[0]);u=Ht(i[0]),i[1]==="www."?d="http://"+i[0]:d=i[0]}return{type:"link",raw:i[0],text:u,href:d,tokens:[{type:"text",raw:u,text:u}]}}}inlineText(l){const i=this.rules.inline.text.exec(l);if(i){let s;return this.lexer.state.inRawBlock?s=i[0]:s=Ht(i[0]),{type:"text",raw:i[0],text:s}}}}const s2=/^(?: *(?:\n|$))+/,r2=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,o2=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Hi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,c2=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hp=/(?:[*+-]|\d{1,9}[.)])/,mp=Me(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,hp).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),fu=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,u2=/^[^\n]+/,pu=/(?!\s*\])(?:\\.|[^\[\]\\])+/,d2=Me(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",pu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),f2=Me(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,hp).getRegex(),wr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",hu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,p2=Me("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",hu).replace("tag",wr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),gp=Me(fu).replace("hr",Hi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wr).getRegex(),h2=Me(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",gp).getRegex(),mu={blockquote:h2,code:r2,def:d2,fences:o2,heading:c2,hr:Hi,html:p2,lheading:mp,list:f2,newline:s2,paragraph:gp,table:Mi,text:u2},U1=Me("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Hi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wr).getRegex(),m2={...mu,table:U1,paragraph:Me(fu).replace("hr",Hi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",U1).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wr).getRegex()},g2={...mu,html:Me(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",hu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Mi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Me(fu).replace("hr",Hi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",mp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},bp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,b2=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,vp=/^( {2,}|\\)\n(?!\s*$)/,v2=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Bi="\\p{P}\\p{S}",y2=Me(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Bi).getRegex(),x2=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,S2=Me(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Bi).getRegex(),w2=Me("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Bi).getRegex(),C2=Me("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Bi).getRegex(),E2=Me(/\\([punct])/,"gu").replace(/punct/g,Bi).getRegex(),A2=Me(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),N2=Me(hu).replace("(?:-->|$)","-->").getRegex(),T2=Me("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",N2).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),hr=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,D2=Me(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",hr).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),yp=Me(/^!?\[(label)\]\[(ref)\]/).replace("label",hr).replace("ref",pu).getRegex(),xp=Me(/^!?\[(ref)\](?:\[\])?/).replace("ref",pu).getRegex(),k2=Me("reflink|nolink(?!\\()","g").replace("reflink",yp).replace("nolink",xp).getRegex(),gu={_backpedal:Mi,anyPunctuation:E2,autolink:A2,blockSkip:x2,br:vp,code:b2,del:Mi,emStrongLDelim:S2,emStrongRDelimAst:w2,emStrongRDelimUnd:C2,escape:bp,link:D2,nolink:xp,punctuation:y2,reflink:yp,reflinkSearch:k2,tag:T2,text:v2,url:Mi},R2={...gu,link:Me(/^!?\[(label)\]\((.*?)\)/).replace("label",hr).getRegex(),reflink:Me(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",hr).getRegex()},tu={...gu,escape:Me(bp).replace("])","~|])").getRegex(),url:Me(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},M2={...tu,br:Me(vp).replace("{2,}","*").getRegex(),text:Me(tu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},rr={normal:mu,gfm:m2,pedantic:g2},ki={normal:gu,gfm:tu,breaks:M2,pedantic:R2};class vn{constructor(l){je(this,"tokens");je(this,"options");je(this,"state");je(this,"tokenizer");je(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=l||qa,this.options.tokenizer=this.options.tokenizer||new pr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const i={block:rr.normal,inline:ki.normal};this.options.pedantic?(i.block=rr.pedantic,i.inline=ki.pedantic):this.options.gfm&&(i.block=rr.gfm,this.options.breaks?i.inline=ki.breaks:i.inline=ki.gfm),this.tokenizer.rules=i}static get rules(){return{block:rr,inline:ki}}static lex(l,i){return new vn(i).lex(l)}static lexInline(l,i){return new vn(i).inlineTokens(l)}lex(l){l=l.replace(/\r\n|\r/g,`
`),this.blockTokens(l,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){const s=this.inlineQueue[i];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(l,i=[],s=!1){this.options.pedantic?l=l.replace(/\t/g,"    ").replace(/^ +$/gm,""):l=l.replace(/^( *)(\t+)/gm,(h,m,b)=>m+"    ".repeat(b.length));let u,d,f;for(;l;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(h=>(u=h.call({lexer:this},l,i))?(l=l.substring(u.raw.length),i.push(u),!0):!1))){if(u=this.tokenizer.space(l)){l=l.substring(u.raw.length),u.raw.length===1&&i.length>0?i[i.length-1].raw+=`
`:i.push(u);continue}if(u=this.tokenizer.code(l)){l=l.substring(u.raw.length),d=i[i.length-1],d&&(d.type==="paragraph"||d.type==="text")?(d.raw+=`
`+u.raw,d.text+=`
`+u.text,this.inlineQueue[this.inlineQueue.length-1].src=d.text):i.push(u);continue}if(u=this.tokenizer.fences(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.heading(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.hr(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.blockquote(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.list(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.html(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.def(l)){l=l.substring(u.raw.length),d=i[i.length-1],d&&(d.type==="paragraph"||d.type==="text")?(d.raw+=`
`+u.raw,d.text+=`
`+u.raw,this.inlineQueue[this.inlineQueue.length-1].src=d.text):this.tokens.links[u.tag]||(this.tokens.links[u.tag]={href:u.href,title:u.title});continue}if(u=this.tokenizer.table(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.lheading(l)){l=l.substring(u.raw.length),i.push(u);continue}if(f=l,this.options.extensions&&this.options.extensions.startBlock){let h=1/0;const m=l.slice(1);let b;this.options.extensions.startBlock.forEach(x=>{b=x.call({lexer:this},m),typeof b=="number"&&b>=0&&(h=Math.min(h,b))}),h<1/0&&h>=0&&(f=l.substring(0,h+1))}if(this.state.top&&(u=this.tokenizer.paragraph(f))){d=i[i.length-1],s&&(d==null?void 0:d.type)==="paragraph"?(d.raw+=`
`+u.raw,d.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):i.push(u),s=f.length!==l.length,l=l.substring(u.raw.length);continue}if(u=this.tokenizer.text(l)){l=l.substring(u.raw.length),d=i[i.length-1],d&&d.type==="text"?(d.raw+=`
`+u.raw,d.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):i.push(u);continue}if(l){const h="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return this.state.top=!0,i}inline(l,i=[]){return this.inlineQueue.push({src:l,tokens:i}),i}inlineTokens(l,i=[]){let s,u,d,f=l,h,m,b;if(this.tokens.links){const x=Object.keys(this.tokens.links);if(x.length>0)for(;(h=this.tokenizer.rules.inline.reflinkSearch.exec(f))!=null;)x.includes(h[0].slice(h[0].lastIndexOf("[")+1,-1))&&(f=f.slice(0,h.index)+"["+"a".repeat(h[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(h=this.tokenizer.rules.inline.blockSkip.exec(f))!=null;)f=f.slice(0,h.index)+"["+"a".repeat(h[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(h=this.tokenizer.rules.inline.anyPunctuation.exec(f))!=null;)f=f.slice(0,h.index)+"++"+f.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;l;)if(m||(b=""),m=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(x=>(s=x.call({lexer:this},l,i))?(l=l.substring(s.raw.length),i.push(s),!0):!1))){if(s=this.tokenizer.escape(l)){l=l.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.tag(l)){l=l.substring(s.raw.length),u=i[i.length-1],u&&s.type==="text"&&u.type==="text"?(u.raw+=s.raw,u.text+=s.text):i.push(s);continue}if(s=this.tokenizer.link(l)){l=l.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.reflink(l,this.tokens.links)){l=l.substring(s.raw.length),u=i[i.length-1],u&&s.type==="text"&&u.type==="text"?(u.raw+=s.raw,u.text+=s.text):i.push(s);continue}if(s=this.tokenizer.emStrong(l,f,b)){l=l.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.codespan(l)){l=l.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.br(l)){l=l.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.del(l)){l=l.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.autolink(l)){l=l.substring(s.raw.length),i.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(l))){l=l.substring(s.raw.length),i.push(s);continue}if(d=l,this.options.extensions&&this.options.extensions.startInline){let x=1/0;const S=l.slice(1);let A;this.options.extensions.startInline.forEach(T=>{A=T.call({lexer:this},S),typeof A=="number"&&A>=0&&(x=Math.min(x,A))}),x<1/0&&x>=0&&(d=l.substring(0,x+1))}if(s=this.tokenizer.inlineText(d)){l=l.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(b=s.raw.slice(-1)),m=!0,u=i[i.length-1],u&&u.type==="text"?(u.raw+=s.raw,u.text+=s.text):i.push(s);continue}if(l){const x="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(x);break}else throw new Error(x)}}return i}}class mr{constructor(l){je(this,"options");je(this,"parser");this.options=l||qa}space(l){return""}code({text:l,lang:i,escaped:s}){var f;const u=(f=(i||"").match(/^\S*/))==null?void 0:f[0],d=l.replace(/\n$/,"")+`
`;return u?'<pre><code class="language-'+Ht(u)+'">'+(s?d:Ht(d,!0))+`</code></pre>
`:"<pre><code>"+(s?d:Ht(d,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}heading({tokens:l,depth:i}){return`<h${i}>${this.parser.parseInline(l)}</h${i}>
`}hr(l){return`<hr>
`}list(l){const i=l.ordered,s=l.start;let u="";for(let h=0;h<l.items.length;h++){const m=l.items[h];u+=this.listitem(m)}const d=i?"ol":"ul",f=i&&s!==1?' start="'+s+'"':"";return"<"+d+f+`>
`+u+"</"+d+`>
`}listitem(l){let i="";if(l.task){const s=this.checkbox({checked:!!l.checked});l.loose?l.tokens.length>0&&l.tokens[0].type==="paragraph"?(l.tokens[0].text=s+" "+l.tokens[0].text,l.tokens[0].tokens&&l.tokens[0].tokens.length>0&&l.tokens[0].tokens[0].type==="text"&&(l.tokens[0].tokens[0].text=s+" "+l.tokens[0].tokens[0].text)):l.tokens.unshift({type:"text",raw:s+" ",text:s+" "}):i+=s+" "}return i+=this.parser.parse(l.tokens,!!l.loose),`<li>${i}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let i="",s="";for(let d=0;d<l.header.length;d++)s+=this.tablecell(l.header[d]);i+=this.tablerow({text:s});let u="";for(let d=0;d<l.rows.length;d++){const f=l.rows[d];s="";for(let h=0;h<f.length;h++)s+=this.tablecell(f[h]);u+=this.tablerow({text:s})}return u&&(u=`<tbody>${u}</tbody>`),`<table>
<thead>
`+i+`</thead>
`+u+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){const i=this.parser.parseInline(l.tokens),s=l.header?"th":"td";return(l.align?`<${s} align="${l.align}">`:`<${s}>`)+i+`</${s}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${l}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:i,tokens:s}){const u=this.parser.parseInline(s),d=j1(l);if(d===null)return u;l=d;let f='<a href="'+l+'"';return i&&(f+=' title="'+i+'"'),f+=">"+u+"</a>",f}image({href:l,title:i,text:s}){const u=j1(l);if(u===null)return s;l=u;let d=`<img src="${l}" alt="${s}"`;return i&&(d+=` title="${i}"`),d+=">",d}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):l.text}}class bu{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}}class yn{constructor(l){je(this,"options");je(this,"renderer");je(this,"textRenderer");this.options=l||qa,this.options.renderer=this.options.renderer||new mr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new bu}static parse(l,i){return new yn(i).parse(l)}static parseInline(l,i){return new yn(i).parseInline(l)}parse(l,i=!0){let s="";for(let u=0;u<l.length;u++){const d=l[u];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]){const h=d,m=this.options.extensions.renderers[h.type].call({parser:this},h);if(m!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type)){s+=m||"";continue}}const f=d;switch(f.type){case"space":{s+=this.renderer.space(f);continue}case"hr":{s+=this.renderer.hr(f);continue}case"heading":{s+=this.renderer.heading(f);continue}case"code":{s+=this.renderer.code(f);continue}case"table":{s+=this.renderer.table(f);continue}case"blockquote":{s+=this.renderer.blockquote(f);continue}case"list":{s+=this.renderer.list(f);continue}case"html":{s+=this.renderer.html(f);continue}case"paragraph":{s+=this.renderer.paragraph(f);continue}case"text":{let h=f,m=this.renderer.text(h);for(;u+1<l.length&&l[u+1].type==="text";)h=l[++u],m+=`
`+this.renderer.text(h);i?s+=this.renderer.paragraph({type:"paragraph",raw:m,text:m,tokens:[{type:"text",raw:m,text:m}]}):s+=m;continue}default:{const h='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(h),"";throw new Error(h)}}}return s}parseInline(l,i){i=i||this.renderer;let s="";for(let u=0;u<l.length;u++){const d=l[u];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]){const h=this.options.extensions.renderers[d.type].call({parser:this},d);if(h!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(d.type)){s+=h||"";continue}}const f=d;switch(f.type){case"escape":{s+=i.text(f);break}case"html":{s+=i.html(f);break}case"link":{s+=i.link(f);break}case"image":{s+=i.image(f);break}case"strong":{s+=i.strong(f);break}case"em":{s+=i.em(f);break}case"codespan":{s+=i.codespan(f);break}case"br":{s+=i.br(f);break}case"del":{s+=i.del(f);break}case"text":{s+=i.text(f);break}default:{const h='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(h),"";throw new Error(h)}}}return s}}class Oi{constructor(l){je(this,"options");this.options=l||qa}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}}je(Oi,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Vn,Sp,nu,wp;class O2{constructor(...l){w1(this,Vn);je(this,"defaults",du());je(this,"options",this.setOptions);je(this,"parse",Ai(this,Vn,nu).call(this,vn.lex,yn.parse));je(this,"parseInline",Ai(this,Vn,nu).call(this,vn.lexInline,yn.parseInline));je(this,"Parser",yn);je(this,"Renderer",mr);je(this,"TextRenderer",bu);je(this,"Lexer",vn);je(this,"Tokenizer",pr);je(this,"Hooks",Oi);this.use(...l)}walkTokens(l,i){var u,d;let s=[];for(const f of l)switch(s=s.concat(i.call(this,f)),f.type){case"table":{const h=f;for(const m of h.header)s=s.concat(this.walkTokens(m.tokens,i));for(const m of h.rows)for(const b of m)s=s.concat(this.walkTokens(b.tokens,i));break}case"list":{const h=f;s=s.concat(this.walkTokens(h.items,i));break}default:{const h=f;(d=(u=this.defaults.extensions)==null?void 0:u.childTokens)!=null&&d[h.type]?this.defaults.extensions.childTokens[h.type].forEach(m=>{const b=h[m].flat(1/0);s=s.concat(this.walkTokens(b,i))}):h.tokens&&(s=s.concat(this.walkTokens(h.tokens,i)))}}return s}use(...l){const i=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(s=>{const u={...s};if(u.async=this.defaults.async||u.async||!1,s.extensions&&(s.extensions.forEach(d=>{if(!d.name)throw new Error("extension name required");if("renderer"in d){const f=i.renderers[d.name];f?i.renderers[d.name]=function(...h){let m=d.renderer.apply(this,h);return m===!1&&(m=f.apply(this,h)),m}:i.renderers[d.name]=d.renderer}if("tokenizer"in d){if(!d.level||d.level!=="block"&&d.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const f=i[d.level];f?f.unshift(d.tokenizer):i[d.level]=[d.tokenizer],d.start&&(d.level==="block"?i.startBlock?i.startBlock.push(d.start):i.startBlock=[d.start]:d.level==="inline"&&(i.startInline?i.startInline.push(d.start):i.startInline=[d.start]))}"childTokens"in d&&d.childTokens&&(i.childTokens[d.name]=d.childTokens)}),u.extensions=i),s.renderer){const d=this.defaults.renderer||new mr(this.defaults);for(const f in s.renderer){if(!(f in d))throw new Error(`renderer '${f}' does not exist`);if(["options","parser"].includes(f))continue;const h=f;let m=s.renderer[h];s.useNewRenderer||(m=Ai(this,Vn,Sp).call(this,m,h,d));const b=d[h];d[h]=(...x)=>{let S=m.apply(d,x);return S===!1&&(S=b.apply(d,x)),S||""}}u.renderer=d}if(s.tokenizer){const d=this.defaults.tokenizer||new pr(this.defaults);for(const f in s.tokenizer){if(!(f in d))throw new Error(`tokenizer '${f}' does not exist`);if(["options","rules","lexer"].includes(f))continue;const h=f,m=s.tokenizer[h],b=d[h];d[h]=(...x)=>{let S=m.apply(d,x);return S===!1&&(S=b.apply(d,x)),S}}u.tokenizer=d}if(s.hooks){const d=this.defaults.hooks||new Oi;for(const f in s.hooks){if(!(f in d))throw new Error(`hook '${f}' does not exist`);if(f==="options")continue;const h=f,m=s.hooks[h],b=d[h];Oi.passThroughHooks.has(f)?d[h]=x=>{if(this.defaults.async)return Promise.resolve(m.call(d,x)).then(A=>b.call(d,A));const S=m.call(d,x);return b.call(d,S)}:d[h]=(...x)=>{let S=m.apply(d,x);return S===!1&&(S=b.apply(d,x)),S}}u.hooks=d}if(s.walkTokens){const d=this.defaults.walkTokens,f=s.walkTokens;u.walkTokens=function(h){let m=[];return m.push(f.call(this,h)),d&&(m=m.concat(d.call(this,h))),m}}this.defaults={...this.defaults,...u}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,i){return vn.lex(l,i??this.defaults)}parser(l,i){return yn.parse(l,i??this.defaults)}}Vn=new WeakSet,Sp=function(l,i,s){switch(i){case"heading":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,s.parser.parseInline(u.tokens),u.depth,n2(s.parser.parseInline(u.tokens,s.parser.textRenderer)))};case"code":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text,u.lang,!!u.escaped)};case"table":return function(u){if(!u.type||u.type!==i)return l.apply(this,arguments);let d="",f="";for(let m=0;m<u.header.length;m++)f+=this.tablecell({text:u.header[m].text,tokens:u.header[m].tokens,header:!0,align:u.align[m]});d+=this.tablerow({text:f});let h="";for(let m=0;m<u.rows.length;m++){const b=u.rows[m];f="";for(let x=0;x<b.length;x++)f+=this.tablecell({text:b[x].text,tokens:b[x].tokens,header:!1,align:u.align[x]});h+=this.tablerow({text:f})}return l.call(this,d,h)};case"blockquote":return function(u){if(!u.type||u.type!==i)return l.apply(this,arguments);const d=this.parser.parse(u.tokens);return l.call(this,d)};case"list":return function(u){if(!u.type||u.type!==i)return l.apply(this,arguments);const d=u.ordered,f=u.start,h=u.loose;let m="";for(let b=0;b<u.items.length;b++){const x=u.items[b],S=x.checked,A=x.task;let T="";if(x.task){const j=this.checkbox({checked:!!S});h?x.tokens.length>0&&x.tokens[0].type==="paragraph"?(x.tokens[0].text=j+" "+x.tokens[0].text,x.tokens[0].tokens&&x.tokens[0].tokens.length>0&&x.tokens[0].tokens[0].type==="text"&&(x.tokens[0].tokens[0].text=j+" "+x.tokens[0].tokens[0].text)):x.tokens.unshift({type:"text",text:j+" "}):T+=j+" "}T+=this.parser.parse(x.tokens,h),m+=this.listitem({type:"list_item",raw:T,text:T,task:A,checked:!!S,loose:h,tokens:x.tokens})}return l.call(this,m,d,f)};case"html":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text,u.block)};case"paragraph":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"escape":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text)};case"link":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.href,u.title,this.parser.parseInline(u.tokens))};case"image":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.href,u.title,u.text)};case"strong":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"em":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"codespan":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text)};case"del":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"text":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text)}}return l},nu=function(l,i){return(s,u)=>{const d={...u},f={...this.defaults,...d};this.defaults.async===!0&&d.async===!1&&(f.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),f.async=!0);const h=Ai(this,Vn,wp).call(this,!!f.silent,!!f.async);if(typeof s>"u"||s===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(f.hooks&&(f.hooks.options=f),f.async)return Promise.resolve(f.hooks?f.hooks.preprocess(s):s).then(m=>l(m,f)).then(m=>f.hooks?f.hooks.processAllTokens(m):m).then(m=>f.walkTokens?Promise.all(this.walkTokens(m,f.walkTokens)).then(()=>m):m).then(m=>i(m,f)).then(m=>f.hooks?f.hooks.postprocess(m):m).catch(h);try{f.hooks&&(s=f.hooks.preprocess(s));let m=l(s,f);f.hooks&&(m=f.hooks.processAllTokens(m)),f.walkTokens&&this.walkTokens(m,f.walkTokens);let b=i(m,f);return f.hooks&&(b=f.hooks.postprocess(b)),b}catch(m){return h(m)}}},wp=function(l,i){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const u="<p>An error occurred:</p><pre>"+Ht(s.message+"",!0)+"</pre>";return i?Promise.resolve(u):u}if(i)return Promise.reject(s);throw s}};const Ba=new O2;function Te(r,l){return Ba.parse(r,l)}Te.options=Te.setOptions=function(r){return Ba.setOptions(r),Te.defaults=Ba.defaults,dp(Te.defaults),Te};Te.getDefaults=du;Te.defaults=qa;Te.use=function(...r){return Ba.use(...r),Te.defaults=Ba.defaults,dp(Te.defaults),Te};Te.walkTokens=function(r,l){return Ba.walkTokens(r,l)};Te.parseInline=Ba.parseInline;Te.Parser=yn;Te.parser=yn.parse;Te.Renderer=mr;Te.TextRenderer=bu;Te.Lexer=vn;Te.lexer=vn.lex;Te.Tokenizer=pr;Te.Hooks=Oi;Te.parse=Te;Te.options;Te.setOptions;Te.use;Te.walkTokens;Te.parseInline;yn.parse;vn.lex;const z2=`/* ================================================================
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
`,j2=`/* ============================================================
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
`,_2=`// Icons — Phosphor Icons (phosphor-icons.com), Regular weight, 256×256 viewBox.
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
`,L2=`// Template picker — trigger button + dropdown menu with search,
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
`,U2=`// Modals — Save-as-template dialog, Save-changes confirm, Manage modal.

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
`,H2=`// Step 3 body — Producer Team table + Additional Information block.
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
`,B2=z2.replace(/@font-face\s*\{[^}]*\}/g,""),q2=`
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
<\/script>`;function Z2(r){return`<!doctype html>
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
  <style>${B2}</style>
  <style>${j2}</style>
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
  ${q2}
</head>
<body>
  <div id="root"></div>
  <div id="__err"></div>
  <script type="text/babel">
${_2}
  <\/script>
  <script type="text/babel">
${L2}
  <\/script>
  <script type="text/babel">
${U2}
  <\/script>
  <script type="text/babel">
${H2}
  <\/script>
  <script type="text/babel">
${r}

try {
  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
} catch(e) {
  var el = document.getElementById('__err');
  if (el) { el.textContent = e.stack || e.message; el.className = 'show'; }
}
  <\/script>
</body>
</html>`}function V2({code:r,prd:l,onInitDesign:i}){const s=v.useRef(null),[u,d]=v.useState("preview"),[f,h]=v.useState("#/"),[m,b]=v.useState("#/"),[x,S]=v.useState(["#/"]),[A,T]=v.useState(0);v.useEffect(()=>{function G(Q){var F;if(((F=Q.data)==null?void 0:F.type)!=="__route")return;const I=Q.data.path||"#/";h(I),b(I),S(V=>{const H=V.slice(0,A+1);return H[H.length-1]===I?H:[...H,I]}),T(V=>V+1)}return window.addEventListener("message",G),()=>window.removeEventListener("message",G)},[A]),v.useEffect(()=>{!s.current||!r||(h("#/"),b("#/"),S(["#/"]),T(0),s.current.srcdoc=Z2(r))},[r]);function j(G){var Q,I,F,V,H;(I=(Q=s.current)==null?void 0:Q.contentWindow)==null||I.postMessage({type:"__navigate",path:G},"*");try{(F=s.current)!=null&&F.contentWindow&&((H=(V=s.current.contentWindow).__navigate)==null||H.call(V,G))}catch{}}function O(){if(A<=0)return;const G=x[A-1];T(Q=>Q-1),h(G),b(G),j(G)}function Y(){if(A>=x.length-1)return;const G=x[A+1];T(Q=>Q+1),h(G),b(G),j(G)}function Z(G){G.preventDefault(),j(m)}return r?y.jsxs("div",{className:"canvas canvas--live",children:[y.jsxs("div",{className:"canvas-toolbar",children:[y.jsxs("div",{className:"canvas-view-tabs",children:[y.jsx("button",{className:`canvas-view-tab ${u==="preview"?"active":""}`,onClick:()=>d("preview"),children:"Preview"}),y.jsx("button",{className:`canvas-view-tab ${u==="code"?"active":""}`,onClick:()=>d("code"),children:"Code"})]}),u==="preview"&&y.jsxs("div",{className:"canvas-urlbar",children:[y.jsx("button",{className:"canvas-nav-btn",onClick:O,disabled:A<=0,title:"Back",children:"←"}),y.jsx("button",{className:"canvas-nav-btn",onClick:Y,disabled:A>=x.length-1,title:"Forward",children:"→"}),y.jsx("form",{className:"canvas-url-form",onSubmit:Z,children:y.jsx("input",{className:"canvas-url-input",value:m,onChange:G=>b(G.target.value),spellCheck:!1})})]}),y.jsx("button",{className:"canvas-copy-btn",onClick:()=>navigator.clipboard.writeText(r),children:"copy"})]}),y.jsxs("div",{className:"canvas-body",children:[y.jsx("iframe",{ref:s,className:"canvas-iframe",style:{display:u==="preview"?"block":"none"},title:"design preview",sandbox:"allow-scripts allow-same-origin"}),u==="code"&&y.jsx("pre",{className:"canvas-code",children:y.jsx("code",{children:r})})]})]}):y.jsx("div",{className:"canvas canvas--empty",children:l?y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"canvas-empty-icon",children:"✦"}),y.jsx("p",{className:"canvas-empty-title",children:l.name}),y.jsx("span",{className:"canvas-empty-sub",children:"PRD loaded — ready to generate"}),y.jsx("button",{className:"canvas-init-btn",onClick:i,children:"Init Design"})]}):y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"canvas-empty-icon",children:"◎"}),y.jsx("p",{className:"canvas-empty-title",children:"No PRD loaded"}),y.jsx("span",{className:"canvas-empty-sub",children:"Open a PRD from Projects to start"})]})})}const Cp="ennabl_builder_history",Y2=50;function G2(){try{return JSON.parse(localStorage.getItem(Cp)||"[]")}catch{return[]}}function H1(r){localStorage.setItem(Cp,JSON.stringify(r.slice(0,Y2)))}function X2({prdName:r,code:l,iteration:i}){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,timestamp:new Date().toISOString(),prdName:r,code:l,iteration:i}}function Q2(r){const i=`${r.prdName.replace(/\.md$/i,"").replace(/[^a-z0-9]/gi,"-").toLowerCase()}-v${r.iteration}.jsx`,s=`/**
 * ennabl builder — generated component
 * PRD: ${r.prdName}  |  iteration: ${r.iteration}
 * ${new Date(r.timestamp).toLocaleString()}
 *
 * Globals expected:
 *   - React 18 UMD (window.React, window.ReactDOM)
 *   - ennabl design system CSS (--en-* variables)
 *   - icons.jsx globals (IconCheck, IconClose, …)
 *   - shared globals (Scrim, CollapsibleSection, EditableField, …)
 */

${r.code}
`,u=new Blob([s],{type:"text/plain"}),d=URL.createObjectURL(u);Object.assign(document.createElement("a"),{href:d,download:i}).click(),URL.revokeObjectURL(d)}function I2(r){const l=Math.floor((Date.now()-new Date(r))/6e4);if(l<1)return"just now";if(l<60)return`${l}m ago`;const i=Math.floor(l/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}function K2(r){return r.split(`
`).slice(0,3).join(`
`).slice(0,140)}function $2({entries:r,onClear:l}){const[i,s]=v.useState(null);function u(d){navigator.clipboard.writeText(d.code),s(d.id),setTimeout(()=>s(null),2e3)}return r.length===0?y.jsxs("div",{className:"sb-empty",children:[y.jsx("p",{children:"No components yet"}),y.jsx("span",{children:"Each generated UI is logged here. Download or copy the JSX to use in your codebase."})]}):y.jsxs("div",{className:"sb-tab",children:[y.jsxs("div",{className:"sb-toolbar",children:[y.jsxs("span",{className:"sb-count",children:[r.length," snapshot",r.length!==1?"s":""]}),y.jsx("button",{className:"sb-clear",onClick:l,children:"clear all"})]}),y.jsx("div",{className:"sb-list",children:r.map(d=>y.jsxs("div",{className:"sb-entry",children:[y.jsxs("div",{className:"sb-entry-top",children:[y.jsx("span",{className:"sb-entry-name",children:d.prdName.replace(/\.md$/i,"")}),y.jsxs("span",{className:"sb-entry-badge",children:["v",d.iteration]}),y.jsx("span",{className:"sb-entry-time",children:I2(d.timestamp)})]}),y.jsx("pre",{className:"sb-entry-code",children:K2(d.code)}),y.jsxs("div",{className:"sb-entry-actions",children:[y.jsx("button",{className:"sb-btn",onClick:()=>u(d),children:i===d.id?"✓ copied":"copy"}),y.jsx("button",{className:"sb-btn sb-btn--primary",onClick:()=>Q2(d),children:"↓ .jsx"})]})]},d.id))})]})}function J2({entries:r}){return y.jsx("div",{className:"figma-tab",children:y.jsxs("div",{className:"figma-coming",children:[y.jsx("div",{className:"figma-icon",children:"◈"}),y.jsx("p",{children:"Figma sync"}),y.jsx("span",{children:"Will push each generated component into your Figma file as a frame — auto-named by PRD and iteration, grouped in a dedicated page. Requires a Figma access token."}),y.jsx("div",{className:"figma-queue",children:r.length>0?y.jsxs(y.Fragment,{children:[y.jsxs("span",{className:"figma-queue-label",children:[r.length," snapshot",r.length!==1?"s":""," queued"]}),y.jsx("button",{className:"figma-btn",disabled:!0,children:"Connect Figma to push"})]}):y.jsx("span",{className:"figma-queue-label",children:"Generate a UI first"})})]})})}function F2({code:r,prd:l,history:i,onHistoryClear:s,onInitDesign:u}){const[d,f]=v.useState("design");return y.jsxs("div",{className:"left-panel",children:[y.jsxs("div",{className:"left-tabs",children:[y.jsx("button",{className:`left-tab ${d==="design"?"left-tab--active":""}`,onClick:()=>f("design"),children:"Design"}),y.jsx("button",{className:`left-tab ${d==="prd"?"left-tab--active":""} ${l?"":"left-tab--disabled"}`,onClick:()=>l&&f("prd"),children:l?l.name:"PRD"}),y.jsxs("button",{className:`left-tab ${d==="storybook"?"left-tab--active":""}`,onClick:()=>f("storybook"),children:["Storybook",i.length>0&&y.jsx("span",{className:"left-tab-count",children:i.length})]}),y.jsx("button",{className:`left-tab ${d==="figma"?"left-tab--active":""}`,onClick:()=>f("figma"),children:"Figma"})]}),y.jsxs("div",{className:"left-content",children:[y.jsx("div",{className:`left-canvas-wrap ${d!=="design"?"left-canvas-wrap--hidden":""}`,children:y.jsx(V2,{code:r,prd:l,onInitDesign:u})}),d==="prd"&&l&&y.jsx("div",{className:"prd-view",dangerouslySetInnerHTML:{__html:Te.parse(l.content)}}),d==="prd"&&!l&&y.jsx("div",{className:"prd-empty",children:"No PRD loaded"}),d==="storybook"&&y.jsx($2,{entries:i,onClear:s}),d==="figma"&&y.jsx(J2,{entries:i})]})]})}const Ep="ennabl_builder_api_key",Ap=()=>localStorage.getItem(Ep)||"",P2=r=>localStorage.setItem(Ep,r.trim()),Np="ennabl_builder_model",W2=[{id:"claude-haiku-4-5-20251001",label:"Haiku",note:"dev / fast"},{id:"claude-sonnet-4-6",label:"Sonnet",note:"balanced"},{id:"claude-opus-4-7",label:"Opus",note:"prod / best"}],eb="claude-haiku-4-5-20251001",Tp=()=>localStorage.getItem(Np)||eb,tb=r=>localStorage.setItem(Np,r),nb=`# ennabl Design Tokens

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
`,ab=`# ennabl Component Patterns

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
`,lb=`# ennabl Shared Components

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
`,ib=`You are an expert UI engineer for ennabl, an insurance analytics platform for insurance agencies and brokers.

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

${nb}

## Component patterns

${ab}

## Shared components (available as globals in the preview)

${lb}

## Context

The generated code runs inside a Vite + React app. The ennabl design system CSS (colors_and_type.css + styles.css) is already loaded globally — you can use all \`--en-*\` variables and \`.en-*\` classes directly without importing them.`,sb="https://api.anthropic.com/v1/messages";function rb(r){return r==="claude-opus-4-7"?{max_tokens:8192,thinking:{type:"enabled",budget_tokens:5e3}}:{max_tokens:8192}}async function ob({messages:r,onText:l,onDone:i}){var x,S,A,T,j,O,Y;const s=Tp(),u=await fetch(sb,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":Ap(),"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:s,...rb(s),system:[{type:"text",text:ib,cache_control:{type:"ephemeral"}}],messages:r,stream:!0})});if(!u.ok){const Z=await u.json().catch(()=>({}));throw new Error(((x=Z.error)==null?void 0:x.message)||`API error ${u.status}`)}const d=u.body.getReader(),f=new TextDecoder;let h=0,m=0,b=0;for(;;){const{done:Z,value:G}=await d.read();if(Z)break;const Q=f.decode(G).split(`
`);for(const I of Q){if(!I.startsWith("data: "))continue;const F=I.slice(6).trim();if(!(!F||F==="[DONE]"))try{const V=JSON.parse(F);V.type==="message_start"&&(h=((A=(S=V.message)==null?void 0:S.usage)==null?void 0:A.input_tokens)??0,b=((j=(T=V.message)==null?void 0:T.usage)==null?void 0:j.cache_read_input_tokens)??0),V.type==="content_block_delta"&&((O=V.delta)==null?void 0:O.type)==="text_delta"&&l(V.delta.text),V.type==="message_delta"&&(m=((Y=V.usage)==null?void 0:Y.output_tokens)??0)}catch{}}}i({inputTokens:h,outputTokens:m,cacheReadTokens:b})}const Dp="ennabl_builder_reports",Kc={input:15/1e6,output:75/1e6,cacheRead:1.5/1e6};function cb({inputTokens:r=0,outputTokens:l=0,cacheReadTokens:i=0}){return Math.max(0,r-i)*Kc.input+i*Kc.cacheRead+l*Kc.output}function ub(r){return{id:`s_${Date.now()}`,prdName:r,startedAt:new Date().toISOString(),iterations:0,inputTokens:0,outputTokens:0,cacheReadTokens:0,cost:0,componentsUsed:[],rating:null,accepted:!1}}function kp(){try{return JSON.parse(localStorage.getItem(Dp)||"{}")}catch{return{}}}function db(r){localStorage.setItem(Dp,JSON.stringify(r))}function au(r){const l=kp(),i=r.prdName;l[i]||(l[i]=[]);const s=l[i].findIndex(u=>u.id===r.id);s>=0?l[i][s]=r:l[i].unshift(r),db(l)}function $c(r){return kp()[r]||[]}function fb(r){return r?["CollapsibleSection","EditableField","TemplatePicker","SaveTemplateDialog","UpdateTemplateDialog","ManageModal","DeleteConfirm","Step3Body","ProducerTable"].filter(i=>r.includes(i)):[]}function pb(r){if(!r.length)return null;const l=r.filter(i=>i.accepted&&i.iterations<=2).length;return Math.round(l/r.length*100)}const hb=new Set(["--en-primary","--en-primary-light","--en-primary-dark","--en-action-hover","--en-outlined-hover","--en-fg","--en-fg-secondary","--en-fg-disabled","--en-bg","--en-bg-grey","--en-bg-dark-grey","--en-bg-hover","--en-bg-active","--en-secondary","--en-secondary-dark","--en-border","--en-divider","--en-error","--en-error-dark","--en-success","--en-warning","--en-warning-dark","--en-icon","--en-icon-secondary","--en-sidebar","--en-logo-primary","--en-logo-accent","--en-radius-sm","--en-radius","--en-radius-regular","--en-radius-medium","--en-radius-large","--en-radius-xl","--en-shadow-menu","--en-shadow-tooltip","--en-shadow-card-hover","--en-duration-short","--en-easing","--en-font-sans"]),mb=new Set(["en-h3","en-h4","en-h5","en-body1","en-body1-bold","en-body2","en-body2-bold","en-body3","en-body3-bold","en-subtitle1","en-subtitle2","en-subtitle3","en-overline","en-caption","en-table-header","en-table-text"]),gb=new Set(["IconCheck","IconChevronDown","IconChevronUp","IconClose","IconCopy","IconDownload","IconEdit","IconEditFill","IconExternal","IconGear","IconInfo","IconMore","IconPlus","IconRevert","IconSearch","IconShare","IconStar","IconTrash","IconTrashFill","IconUpload","IconUsers"]);function bb(r){const l=[],i=[...r.matchAll(/var\((--en-[a-z0-9-]+)/g)].map(h=>h[1]);[...new Set(i)].filter(h=>!hb.has(h)).forEach(h=>l.push({type:"token",msg:`unknown token ${h}`}));const s=[...r.matchAll(/className="([^"]+)"/g)].flatMap(h=>h[1].split(/\s+/)).filter(h=>h.startsWith("en-"));[...new Set(s)].filter(h=>!mb.has(h)).forEach(h=>l.push({type:"class",msg:`unknown class .${h}`}));const u=[...r.matchAll(/<(Icon[A-Z][A-Za-z]*)/g)].map(h=>h[1]);[...new Set(u)].filter(h=>!gb.has(h)).forEach(h=>l.push({type:"icon",msg:`unknown icon <${h} />`}));const d=r.replace(/\/\/.*$/gm,"").replace(/\/\*[\s\S]*?\*\//g,"");return[...new Set([...d.matchAll(/#[0-9A-Fa-f]{6}\b/g)].map(h=>h[0]))].forEach(h=>l.push({type:"color",msg:`raw color ${h} — use --en-* var`})),{ok:l.length===0,issues:l}}function vb(r){const l=r.match(/```(?:jsx?|tsx?|javascript|typescript)?\n([\s\S]*?)```/);return l?l[1].trim():null}function yb({prd:r,messages:l,setMessages:i,onCodeGenerated:s,onSwitchToPrd:u,onIterationComplete:d,initTrigger:f}){const[h,m]=v.useState(""),[b,x]=v.useState(!1),[S,A]=v.useState(Tp),T=v.useRef(null),j=v.useRef(null);v.useEffect(()=>{var Z;(Z=T.current)==null||Z.scrollIntoView({behavior:"smooth"})},[l]),v.useEffect(()=>{f>0&&r&&!b&&l.length===0&&O("Build a complete UI from this PRD.")},[f]);async function O(Z){const G=(Z??h).trim();if(!G||b)return;const Q={role:"user",content:G},I=r?`

---
PRD: ${r.name}

${r.content}
---
`:"",F=l.map(({role:H,content:J})=>({role:H,content:J})),V=[...r&&l.length===0?[{role:"user",content:`${I}
${G}`}]:[...F,Q]];i(H=>[...H,Q]),Z||m(""),x(!0),i(H=>[...H,{role:"assistant",content:""}]);try{let H="",J=null;await ob({messages:V,onText:re=>{H+=re,i(oe=>{const ge=[...oe];return ge[ge.length-1]={role:"assistant",content:H},ge})},onDone:re=>{J=re}});const ne=vb(H);if(ne){const re=H.replace(/```[\s\S]*?```/g,"").trim();s(ne,re);const oe=bb(ne);i(ge=>{const Oe=[...ge];return Oe[Oe.length-1]={...Oe[Oe.length-1],validation:oe},Oe})}if(d){const re=J||{};d({inputTokens:re.inputTokens||0,outputTokens:re.outputTokens||0,cacheReadTokens:re.cacheReadTokens||0,componentsUsed:fb(ne)})}}catch(H){i(J=>{const ne=[...J];return ne[ne.length-1]={role:"assistant",content:`Error: ${H.message}`},ne})}finally{x(!1)}}function Y(Z){Z.key==="Enter"&&!Z.shiftKey&&(Z.preventDefault(),O())}return y.jsxs("div",{className:"chat-panel",children:[y.jsxs("div",{className:"chat-messages",children:[l.length===0&&y.jsx("div",{className:"chat-empty",children:r?y.jsx(y.Fragment,{children:"PRD loaded. Describe the UI you want to build."}):y.jsx(y.Fragment,{children:"Load a PRD first, then describe what to build."})}),l.map((Z,G)=>{const Q=b&&Z.role==="assistant"&&G===l.length-1;return y.jsx("div",{className:`chat-msg chat-msg--${Z.role}`,children:Z.role==="assistant"?Q?y.jsx(xb,{}):y.jsx(Sb,{content:Z.content,validation:Z.validation}):y.jsx("span",{children:Z.content})},G)}),y.jsx("div",{ref:T})]}),y.jsxs("div",{className:"chat-input-area",children:[y.jsx("div",{className:"chat-model-row",children:W2.map(Z=>y.jsx("button",{className:`chat-model-btn ${S===Z.id?"chat-model-btn--active":""}`,onClick:()=>{A(Z.id),tb(Z.id)},title:Z.note,children:Z.label},Z.id))}),y.jsxs("div",{className:"chat-input-row",children:[y.jsx("textarea",{ref:j,className:"chat-input",placeholder:r?`Build from ${r.name}…`:"Load a PRD first…",value:h,onChange:Z=>m(Z.target.value),onKeyDown:Y,disabled:!r||b,rows:3}),y.jsx("button",{className:"chat-send-btn",onClick:O,disabled:!r||!h.trim()||b,children:b?y.jsx("span",{className:"chat-spinner"}):"↑"})]})]})]})}const B1=[{icon:"✦",verb:"Reading PRD"},{icon:"◎",verb:"Mapping structure"},{icon:"⚡",verb:"Designing layout"},{icon:"⬡",verb:"Building components"},{icon:"↑",verb:"Writing code"},{icon:"✦",verb:"Polishing output"}];function xb(){const[r,l]=v.useState(0);v.useEffect(()=>{const u=setInterval(()=>l(d=>(d+1)%B1.length),2e3);return()=>clearInterval(u)},[]);const{icon:i,verb:s}=B1[r];return y.jsxs("div",{className:"thinking-bubble",children:[y.jsx("span",{className:"thinking-icon",children:i},r),y.jsx("span",{className:"thinking-verb",children:s},s),y.jsxs("span",{className:"thinking-dots",children:[y.jsx("span",{}),y.jsx("span",{}),y.jsx("span",{})]})]})}function Sb({content:r,validation:l}){if(/```/.test(r)){const s=r.replace(/```[\s\S]*?```/g,"").trim();return y.jsxs("div",{className:"chat-done-card",children:[y.jsx("span",{className:"chat-done-icon",children:"✓"}),y.jsxs("div",{children:[y.jsx("div",{className:"chat-done-title",children:"Design ready"}),s&&y.jsx("div",{className:"chat-done-sub",children:s}),l&&y.jsxs("div",{className:`chat-done-validation ${l.ok?"chat-done-validation--ok":"chat-done-validation--warn"}`,children:[l.ok?"✓ tokens clean":l.issues.slice(0,4).map((u,d)=>y.jsxs("div",{children:["⚠ ",u.msg]},d)),l&&!l.ok&&l.issues.length>4&&y.jsxs("div",{children:["+",l.issues.length-4," more"]})]})]})]})}return y.jsx("div",{className:"chat-msg-content",children:r})}function wb({value:r,onChange:l}){const[i,s]=v.useState(null);return y.jsx("div",{className:"stars",children:[1,2,3,4,5].map(u=>y.jsx("button",{className:`star-btn ${u<=(i??r??0)?"star-btn--on":""}`,onMouseEnter:()=>s(u),onMouseLeave:()=>s(null),onClick:()=>l(u),"aria-label":`Rate ${u} star${u>1?"s":""}`,children:"★"},u))})}function q1(r){return r>=1e3?`${(r/1e3).toFixed(1)}k`:String(r)}function Z1(r){return r<.01?"<$0.01":`$${r.toFixed(2)}`}function Cb(r){const l=new Date(r),i=new Date;if(l.toDateString()===i.toDateString())return"today";const s=Math.floor((i-l)/864e5);return s===1?"yesterday":s<7?`${s}d ago`:l.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function Eb({session:r,prd:l,onSessionUpdate:i}){const[s,u]=v.useState([]);if(v.useEffect(()=>{l&&u($c(l.name))},[l,r]),!l)return y.jsx("div",{className:"report-empty",children:"Load a PRD to see reports."});const d=pb(s),f=s.length;s.some(x=>x.id===(r==null?void 0:r.id));function h(x){const S={...r,rating:x};i(S),au(S),u($c(l.name))}function m(){const x={...r,accepted:!0};i(x),au(x),u($c(l.name))}const b=s.filter(x=>x.id!==(r==null?void 0:r.id));return y.jsxs("div",{className:"report-tab",children:[r&&y.jsxs("section",{className:"report-section",children:[y.jsxs("div",{className:"report-section-label",children:["Current session",r.accepted&&y.jsx("span",{className:"report-badge report-badge--green",children:"Accepted"})]}),y.jsxs("div",{className:"report-metrics",children:[y.jsxs("div",{className:"report-metric",children:[y.jsx("span",{className:"report-metric-value",children:r.iterations}),y.jsx("span",{className:"report-metric-label",children:"iterations"}),r.iterations<=2&&r.iterations>0&&y.jsx("span",{className:"report-badge report-badge--green",children:"≤2 ✓"})]}),y.jsxs("div",{className:"report-metric",children:[y.jsx("span",{className:"report-metric-value",children:q1(r.inputTokens+r.outputTokens)}),y.jsx("span",{className:"report-metric-label",children:"tokens"})]}),y.jsxs("div",{className:"report-metric",children:[y.jsx("span",{className:"report-metric-value",children:Z1(r.cost)}),y.jsx("span",{className:"report-metric-label",children:"cost"})]})]}),r.cacheReadTokens>0&&y.jsxs("div",{className:"report-cache-note",children:[q1(r.cacheReadTokens)," tokens from cache"]}),r.componentsUsed.length>0&&y.jsxs("div",{className:"report-components",children:[y.jsx("span",{className:"report-components-label",children:"Components used"}),y.jsx("div",{className:"report-chips",children:r.componentsUsed.map(x=>y.jsx("span",{className:"report-chip",children:x},x))})]}),y.jsxs("div",{className:"report-rating-row",children:[y.jsx("span",{className:"report-rating-label",children:"Rate this design"}),y.jsx(wb,{value:r.rating,onChange:h})]}),!r.accepted&&y.jsx("button",{className:"report-accept-btn",onClick:m,disabled:r.iterations===0,children:"✓ Accept design"})]}),f>0&&y.jsxs("section",{className:"report-section",children:[y.jsxs("div",{className:"report-section-label",children:["This PRD · ",f," session",f>1?"s":""]}),y.jsx("div",{className:"report-summary",children:d!==null&&y.jsxs("div",{className:"report-metric",children:[y.jsxs("span",{className:"report-metric-value report-metric-value--lg",children:[d,"%"]}),y.jsx("span",{className:"report-metric-label",children:"accepted in ≤2 iterations"})]})})]}),b.length>0&&y.jsxs("section",{className:"report-section",children:[y.jsx("div",{className:"report-section-label",children:"History"}),y.jsx("div",{className:"report-history",children:b.map(x=>y.jsxs("div",{className:"report-history-row",children:[y.jsxs("div",{className:"report-history-left",children:[y.jsx("span",{className:"report-history-date",children:Cb(x.startedAt)}),y.jsxs("span",{className:"report-history-iter",children:[x.iterations," iter",x.iterations!==1?"s":""]}),x.accepted&&y.jsx("span",{className:"report-badge report-badge--green",children:"✓"}),x.iterations<=2&&x.accepted&&y.jsx("span",{className:"report-badge report-badge--blue",children:"≤2"})]}),y.jsxs("div",{className:"report-history-right",children:[x.rating&&y.jsxs("span",{className:"report-history-stars",children:["★".repeat(x.rating),"☆".repeat(5-x.rating)]}),y.jsx("span",{className:"report-history-cost",children:Z1(x.cost)})]})]},x.id))})]}),!r&&f===0&&y.jsx("div",{className:"report-empty",children:"Start a chat to begin tracking."})]})}function Ab({prd:r,messages:l,setMessages:i,onCodeGenerated:s,onIterationComplete:u,session:d,onSessionUpdate:f,initTrigger:h}){const[m,b]=v.useState("chat");return y.jsxs("div",{className:"right-panel",children:[y.jsxs("div",{className:"right-tabs",children:[y.jsx("button",{className:`right-tab ${m==="chat"?"right-tab--active":""}`,onClick:()=>b("chat"),children:"Chat"}),y.jsxs("button",{className:`right-tab ${m==="report"?"right-tab--active":""}`,onClick:()=>b("report"),children:["Report",(d==null?void 0:d.accepted)&&y.jsx("span",{className:"right-tab-dot right-tab-dot--green"}),d&&!d.accepted&&d.iterations>0&&y.jsx("span",{className:"right-tab-dot"})]})]}),y.jsxs("div",{className:"right-content",children:[y.jsx("div",{className:m!=="chat"?"right-panel-hidden":"",children:y.jsx(yb,{prd:r,messages:l,setMessages:i,onCodeGenerated:s,onIterationComplete:u,onSwitchToPrd:()=>b("prd"),initTrigger:h})}),m==="report"&&y.jsx(Eb,{session:d,prd:r,onSessionUpdate:f})]})]})}function Nb({onDone:r}){const[l,i]=v.useState(""),[s,u]=v.useState(null);function d(){const f=l.trim();if(!f.startsWith("sk-ant-")&&!f.startsWith("sk-")){u("Paste your Anthropic API key — it starts with sk-ant-");return}P2(f),r()}return y.jsx("div",{className:"setup-overlay",children:y.jsxs("div",{className:"setup-card",children:[y.jsxs("div",{className:"setup-logo",children:[y.jsx("span",{className:"setup-logo-name",children:"ennabl"}),y.jsx("span",{className:"setup-logo-suffix",children:"builder"})]}),y.jsxs("p",{className:"setup-desc",children:["Paste your Anthropic API key to get started.",y.jsx("br",{}),"It's stored only in your browser's local storage."]}),y.jsx("label",{className:"setup-label",children:"Anthropic API Key"}),y.jsx("input",{className:"setup-input",type:"password",value:l,onChange:f=>{i(f.target.value),u(null)},onKeyDown:f=>f.key==="Enter"&&d(),placeholder:"sk-ant-...",spellCheck:!1,autoFocus:!0}),s&&y.jsx("p",{className:"setup-error",children:s}),y.jsx("button",{className:"setup-btn",onClick:d,disabled:!l.trim(),children:"Save & continue"})]})})}class bt extends Error{constructor(l){var i,s,u,d;super("ClientResponseError"),this.url="",this.status=0,this.response={},this.isAbort=!1,this.originalError=null,Object.setPrototypeOf(this,bt.prototype),l!==null&&typeof l=="object"&&(this.originalError=l.originalError,this.url=typeof l.url=="string"?l.url:"",this.status=typeof l.status=="number"?l.status:0,this.isAbort=!!l.isAbort||l.name==="AbortError"||l.message==="Aborted",l.response!==null&&typeof l.response=="object"?this.response=l.response:l.data!==null&&typeof l.data=="object"?this.response=l.data:this.response={}),this.originalError||l instanceof bt||(this.originalError=l),this.name="ClientResponseError "+this.status,this.message=(i=this.response)==null?void 0:i.message,this.message||(this.isAbort?this.message="The request was aborted (most likely autocancelled; you can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation).":(d=(u=(s=this.originalError)==null?void 0:s.cause)==null?void 0:u.message)!=null&&d.includes("ECONNREFUSED ::1")?this.message="Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).":this.message="Something went wrong."),this.cause=this.originalError}get data(){return this.response}toJSON(){return{...this}}}const or=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function Tb(r,l){const i={};if(typeof r!="string")return i;const s=Object.assign({},{}).decode||Db;let u=0;for(;u<r.length;){const d=r.indexOf("=",u);if(d===-1)break;let f=r.indexOf(";",u);if(f===-1)f=r.length;else if(f<d){u=r.lastIndexOf(";",d-1)+1;continue}const h=r.slice(u,d).trim();if(i[h]===void 0){let m=r.slice(d+1,f).trim();m.charCodeAt(0)===34&&(m=m.slice(1,-1));try{i[h]=s(m)}catch{i[h]=m}}u=f+1}return i}function V1(r,l,i){const s=Object.assign({},i||{}),u=s.encode||kb;if(!or.test(r))throw new TypeError("argument name is invalid");const d=u(l);if(d&&!or.test(d))throw new TypeError("argument val is invalid");let f=r+"="+d;if(s.maxAge!=null){const h=s.maxAge-0;if(isNaN(h)||!isFinite(h))throw new TypeError("option maxAge is invalid");f+="; Max-Age="+Math.floor(h)}if(s.domain){if(!or.test(s.domain))throw new TypeError("option domain is invalid");f+="; Domain="+s.domain}if(s.path){if(!or.test(s.path))throw new TypeError("option path is invalid");f+="; Path="+s.path}if(s.expires){if(!(function(m){return Object.prototype.toString.call(m)==="[object Date]"||m instanceof Date})(s.expires)||isNaN(s.expires.valueOf()))throw new TypeError("option expires is invalid");f+="; Expires="+s.expires.toUTCString()}if(s.httpOnly&&(f+="; HttpOnly"),s.secure&&(f+="; Secure"),s.priority)switch(typeof s.priority=="string"?s.priority.toLowerCase():s.priority){case"low":f+="; Priority=Low";break;case"medium":f+="; Priority=Medium";break;case"high":f+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(s.sameSite)switch(typeof s.sameSite=="string"?s.sameSite.toLowerCase():s.sameSite){case!0:f+="; SameSite=Strict";break;case"lax":f+="; SameSite=Lax";break;case"strict":f+="; SameSite=Strict";break;case"none":f+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return f}function Db(r){return r.indexOf("%")!==-1?decodeURIComponent(r):r}function kb(r){return encodeURIComponent(r)}const Rb=typeof navigator<"u"&&navigator.product==="ReactNative"||typeof global<"u"&&global.HermesInternal;let Rp;function kl(r){if(r)try{const l=decodeURIComponent(Rp(r.split(".")[1]).split("").map((function(i){return"%"+("00"+i.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(l)||{}}catch{}return{}}function Mp(r,l=0){let i=kl(r);return!(Object.keys(i).length>0&&(!i.exp||i.exp-l>Date.now()/1e3))}Rp=typeof atob!="function"||Rb?r=>{let l=String(r).replace(/=+$/,"");if(l.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var i,s,u=0,d=0,f="";s=l.charAt(d++);~s&&(i=u%4?64*i+s:s,u++%4)?f+=String.fromCharCode(255&i>>(-2*u&6)):0)s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(s);return f}:atob;const Y1="pb_auth";class vu{constructor(){this.baseToken="",this.baseModel=null,this._onChangeCallbacks=[]}get token(){return this.baseToken}get record(){return this.baseModel}get model(){return this.baseModel}get isValid(){return!Mp(this.token)}get isSuperuser(){var i,s;let l=kl(this.token);return l.type=="auth"&&(((i=this.record)==null?void 0:i.collectionName)=="_superusers"||!((s=this.record)!=null&&s.collectionName)&&l.collectionId=="pbc_3142635823")}get isAdmin(){return console.warn("Please replace pb.authStore.isAdmin with pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"),this.isSuperuser}get isAuthRecord(){return console.warn("Please replace pb.authStore.isAuthRecord with !pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"),kl(this.token).type=="auth"&&!this.isSuperuser}save(l,i){this.baseToken=l||"",this.baseModel=i||null,this.triggerChange()}clear(){this.baseToken="",this.baseModel=null,this.triggerChange()}loadFromCookie(l,i=Y1){const s=Tb(l||"")[i]||"";let u={};try{u=JSON.parse(s),(typeof u===null||typeof u!="object"||Array.isArray(u))&&(u={})}catch{}this.save(u.token||"",u.record||u.model||null)}exportToCookie(l,i=Y1){var m,b;const s={secure:!0,sameSite:!0,httpOnly:!0,path:"/"},u=kl(this.token);s.expires=u!=null&&u.exp?new Date(1e3*u.exp):new Date("1970-01-01"),l=Object.assign({},s,l);const d={token:this.token,record:this.record?JSON.parse(JSON.stringify(this.record)):null};let f=V1(i,JSON.stringify(d),l);const h=typeof Blob<"u"?new Blob([f]).size:f.length;if(d.record&&h>4096){d.record={id:(m=d.record)==null?void 0:m.id,email:(b=d.record)==null?void 0:b.email};const x=["collectionId","collectionName","verified"];for(const S in this.record)x.includes(S)&&(d.record[S]=this.record[S]);f=V1(i,JSON.stringify(d),l)}return f}onChange(l,i=!1){return this._onChangeCallbacks.push(l),i&&l(this.token,this.record),()=>{for(let s=this._onChangeCallbacks.length-1;s>=0;s--)if(this._onChangeCallbacks[s]==l)return delete this._onChangeCallbacks[s],void this._onChangeCallbacks.splice(s,1)}}triggerChange(){for(const l of this._onChangeCallbacks)l&&l(this.token,this.record)}}class Mb extends vu{constructor(l="pocketbase_auth"){super(),this.storageFallback={},this.storageKey=l,this._bindStorageEvent()}get token(){return(this._storageGet(this.storageKey)||{}).token||""}get record(){const l=this._storageGet(this.storageKey)||{};return l.record||l.model||null}get model(){return this.record}save(l,i){this._storageSet(this.storageKey,{token:l,record:i}),super.save(l,i)}clear(){this._storageRemove(this.storageKey),super.clear()}_storageGet(l){if(typeof window<"u"&&(window!=null&&window.localStorage)){const i=window.localStorage.getItem(l)||"";try{return JSON.parse(i)}catch{return i}}return this.storageFallback[l]}_storageSet(l,i){if(typeof window<"u"&&(window!=null&&window.localStorage)){let s=i;typeof i!="string"&&(s=JSON.stringify(i)),window.localStorage.setItem(l,s)}else this.storageFallback[l]=i}_storageRemove(l){var i;typeof window<"u"&&(window!=null&&window.localStorage)&&((i=window.localStorage)==null||i.removeItem(l)),delete this.storageFallback[l]}_bindStorageEvent(){typeof window<"u"&&(window!=null&&window.localStorage)&&window.addEventListener&&window.addEventListener("storage",(l=>{if(l.key!=this.storageKey)return;const i=this._storageGet(this.storageKey)||{};super.save(i.token||"",i.record||i.model||null)}))}}class Yn{constructor(l){this.client=l}}class Ob extends Yn{async getAll(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/settings",l)}async update(l,i){return i=Object.assign({method:"PATCH",body:l},i),this.client.send("/api/settings",i)}async testS3(l="storage",i){return i=Object.assign({method:"POST",body:{filesystem:l}},i),this.client.send("/api/settings/test/s3",i).then((()=>!0))}async testEmail(l,i,s,u){return u=Object.assign({method:"POST",body:{email:i,template:s,collection:l}},u),this.client.send("/api/settings/test/email",u).then((()=>!0))}async generateAppleClientSecret(l,i,s,u,d,f){return f=Object.assign({method:"POST",body:{clientId:l,teamId:i,keyId:s,privateKey:u,duration:d}},f),this.client.send("/api/settings/apple/generate-client-secret",f)}}const zb=["requestKey","$cancelKey","$autoCancel","fetch","headers","body","query","params","cache","credentials","headers","integrity","keepalive","method","mode","redirect","referrer","referrerPolicy","signal","window"];function yu(r){if(r){r.query=r.query||{};for(let l in r)zb.includes(l)||(r.query[l]=r[l],delete r[l])}}function xu(r){const l=[];for(const i in r){const s=encodeURIComponent(i),u=Array.isArray(r[i])?r[i]:[r[i]];for(let d of u)d=jb(d),d!==null&&l.push(s+"="+d)}return l.join("&")}function jb(r){return r==null?null:r instanceof Date?encodeURIComponent(r.toISOString().replace("T"," ")):encodeURIComponent(typeof r=="object"?JSON.stringify(r):r)}class Op extends Yn{constructor(){super(...arguments),this.clientId="",this.eventSource=null,this.subscriptions={},this.lastSentSubscriptions=[],this.maxConnectTimeout=15e3,this.reconnectAttempts=0,this.maxReconnectAttempts=1/0,this.predefinedReconnectIntervals=[200,300,500,1e3,1200,1500,2e3],this.pendingConnects=[],this.pendingSubmits=[],this.isProcessingPendingSubmits=!1}get isConnected(){return!!this.eventSource&&!!this.clientId&&!this.pendingConnects.length}async subscribe(l,i,s){var f;if(!l)throw new Error("topic must be set.");let u=l;if(s){yu(s=Object.assign({},s));const h="options="+encodeURIComponent(JSON.stringify({query:s.query,headers:s.headers}));u+=(u.includes("?")?"&":"?")+h}const d=function(h){const m=h;let b;try{b=JSON.parse(m==null?void 0:m.data)}catch{}i(b||{})};return this.subscriptions[u]||(this.subscriptions[u]=[]),this.subscriptions[u].push(d),this.isConnected?this.subscriptions[u].length===1?await this.submitSubscriptions():(f=this.eventSource)==null||f.addEventListener(u,d):await this.connect(),async()=>this.unsubscribeByTopicAndListener(l,d)}async unsubscribe(l){var i;if(l){const s=this.getSubscriptionsByTopic(l);for(let u in s)if(this.hasSubscriptionListeners(u)){for(let d of this.subscriptions[u])(i=this.eventSource)==null||i.removeEventListener(u,d);delete this.subscriptions[u]}}else this.subscriptions={};await this.submitSubscriptions()}async unsubscribeByPrefix(l){var s;let i=!1;for(let u in this.subscriptions)if((u+"?").startsWith(l)){i=!0;for(let d of this.subscriptions[u])(s=this.eventSource)==null||s.removeEventListener(u,d);delete this.subscriptions[u]}i&&await this.submitSubscriptions()}async unsubscribeByTopicAndListener(l,i){var u;const s=this.getSubscriptionsByTopic(l);for(let d in s){if(!Array.isArray(this.subscriptions[d])||!this.subscriptions[d].length)continue;let f=!1;for(let h=this.subscriptions[d].length-1;h>=0;h--)this.subscriptions[d][h]===i&&(f=!0,delete this.subscriptions[d][h],this.subscriptions[d].splice(h,1),(u=this.eventSource)==null||u.removeEventListener(d,i));f&&(this.subscriptions[d].length||delete this.subscriptions[d])}await this.submitSubscriptions()}hasSubscriptionListeners(l){var i,s;if(this.subscriptions=this.subscriptions||{},l)return!!((i=this.subscriptions[l])!=null&&i.length);for(let u in this.subscriptions)if((s=this.subscriptions[u])!=null&&s.length)return!0;return!1}async submitSubscriptions(){return new Promise(((l,i)=>{this.pendingSubmits.push({resolve:l,reject:i}),this.pendingSubmits.length==1&&queueMicrotask((()=>this.finalizePendingSubscriptions()))}))}async finalizePendingSubscriptions(){if(this.isProcessingPendingSubmits||!this.pendingSubmits.length)return;const l=this.pendingSubmits.slice();this.pendingSubmits=[],this.isProcessingPendingSubmits=!0;try{await this.sendSubscriptions();for(let i of l)i.resolve()}catch(i){for(let s of l)i?s.reject(i):s.resolve()}finally{this.isProcessingPendingSubmits=!1,this.pendingSubmits.length>0&&await this.finalizePendingSubscriptions()}}getSubscriptionsCancelKey(){return"realtime_"+this.clientId}getSubscriptionsByTopic(l){const i={};l=l.includes("?")?l:l+"?";for(let s in this.subscriptions)(s+"?").startsWith(l)&&(i[s]=this.subscriptions[s]);return i}getNonEmptySubscriptionKeys(){const l=[];for(let i in this.subscriptions)this.subscriptions[i].length&&l.push(i);return l}hasUnsentSubscriptions(){const l=this.getNonEmptySubscriptionKeys();if(l.length!=this.lastSentSubscriptions.length)return!0;for(const i of l)if(!this.lastSentSubscriptions.includes(i))return!0;return!1}async sendSubscriptions(){if(this.clientId){if(!this.hasSubscriptionListeners())return this.disconnect();if(this.hasUnsentSubscriptions())return this.addAllSubscriptionListeners(),this.lastSentSubscriptions=this.getNonEmptySubscriptionKeys(),this.client.send("/api/realtime",{method:"POST",body:{clientId:this.clientId,subscriptions:this.lastSentSubscriptions},requestKey:this.getSubscriptionsCancelKey()}).catch((l=>{if(!(l!=null&&l.isAbort))throw l}))}}addAllSubscriptionListeners(){if(this.eventSource){this.removeAllSubscriptionListeners();for(let l in this.subscriptions)for(let i of this.subscriptions[l])this.eventSource.addEventListener(l,i)}}removeAllSubscriptionListeners(){if(this.eventSource)for(let l in this.subscriptions)for(let i of this.subscriptions[l])this.eventSource.removeEventListener(l,i)}async connect(){if(!(this.reconnectAttempts>0))return new Promise(((l,i)=>{this.pendingConnects.push({resolve:l,reject:i}),this.pendingConnects.length==1&&queueMicrotask((()=>this.initConnect()))}))}initConnect(){this.disconnect(!0),clearTimeout(this.connectTimeoutId),this.connectTimeoutId=setTimeout((()=>{this.connectErrorHandler(new Error("EventSource connect took too long."))}),this.maxConnectTimeout),this.eventSource=new EventSource(this.client.buildURL("/api/realtime")),this.eventSource.onerror=l=>{this.connectErrorHandler(new Error("Failed to establish realtime connection."))},this.eventSource.addEventListener("PB_CONNECT",(l=>{const i=l;this.clientId=i==null?void 0:i.lastEventId,this.lastSentSubscriptions=[],this.submitSubscriptions().then((()=>{for(let u of this.pendingConnects)u.resolve();this.pendingConnects=[],this.reconnectAttempts=0,clearTimeout(this.reconnectTimeoutId),clearTimeout(this.connectTimeoutId);const s=this.getSubscriptionsByTopic("PB_CONNECT");for(let u in s)for(let d of s[u])d(l)})).catch((s=>{this.clientId="",this.lastSentSubscriptions=[],this.connectErrorHandler(s)}))}))}connectErrorHandler(l){if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),!this.clientId&&!this.reconnectAttempts||this.reconnectAttempts>this.maxReconnectAttempts){for(let s of this.pendingConnects)s.reject(new bt(l));return this.pendingConnects=[],void this.disconnect()}this.disconnect(!0);const i=this.predefinedReconnectIntervals[this.reconnectAttempts]||this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length-1];this.reconnectAttempts++,this.reconnectTimeoutId=setTimeout((()=>{this.initConnect()}),i)}disconnect(l=!1){var i;if(this.clientId&&this.onDisconnect&&this.onDisconnect(Object.keys(this.subscriptions)),clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),this.removeAllSubscriptionListeners(),this.client.cancelRequest(this.getSubscriptionsCancelKey()),(i=this.eventSource)==null||i.close(),this.eventSource=null,this.clientId="",this.lastSentSubscriptions=[],!l){this.reconnectAttempts=0;for(let s of this.pendingConnects)s.resolve();this.pendingConnects=[]}}}class zp extends Yn{decode(l){return l}async getFullList(l,i){if(typeof l=="number")return this._getFullList(l,i);let s=1e3;return(i=Object.assign({},l,i)).batch&&(s=i.batch,delete i.batch),this._getFullList(s,i)}async getList(l=1,i=30,s){return(s=Object.assign({method:"GET"},s)).query=Object.assign({page:l,perPage:i},s.query),this.client.send(this.baseCrudPath,s).then((u=>{var d;return u.items=((d=u.items)==null?void 0:d.map((f=>this.decode(f))))||[],u}))}async getFirstListItem(l,i){return(i=Object.assign({requestKey:"one_by_filter_"+this.baseCrudPath+"_"+l},i)).query=Object.assign({filter:l,skipTotal:1},i.query),this.getList(1,1,i).then((s=>{var u;if(!((u=s==null?void 0:s.items)!=null&&u.length))throw new bt({status:404,response:{code:404,message:"The requested resource wasn't found.",data:{}}});return s.items[0]}))}async getOne(l,i){if(!l)throw new bt({url:this.client.buildURL(this.baseCrudPath+"/"),status:404,response:{code:404,message:"Missing required record id.",data:{}}});return i=Object.assign({method:"GET"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l),i).then((s=>this.decode(s)))}async create(l,i){return i=Object.assign({method:"POST",body:l},i),this.client.send(this.baseCrudPath,i).then((s=>this.decode(s)))}async update(l,i,s){return s=Object.assign({method:"PATCH",body:i},s),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l),s).then((u=>this.decode(u)))}async delete(l,i){return i=Object.assign({method:"DELETE"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l),i).then((()=>!0))}_getFullList(l=1e3,i){(i=i||{}).query=Object.assign({skipTotal:1},i.query);let s=[],u=async d=>this.getList(d,l||1e3,i).then((f=>{const h=f.items;return s=s.concat(h),h.length==f.perPage?u(d+1):s}));return u(1)}}function ma(r,l,i,s){const u=s!==void 0;return u||i!==void 0?u?(console.warn(r),l.body=Object.assign({},l.body,i),l.query=Object.assign({},l.query,s),l):Object.assign(l,i):l}function Jc(r){var l;(l=r._resetAutoRefresh)==null||l.call(r)}class _b extends zp{constructor(l,i){super(l),this.collectionIdOrName=i}get baseCrudPath(){return this.baseCollectionPath+"/records"}get baseCollectionPath(){return"/api/collections/"+encodeURIComponent(this.collectionIdOrName)}get isSuperusers(){return this.collectionIdOrName=="_superusers"||this.collectionIdOrName=="_pbc_2773867675"}async subscribe(l,i,s){if(!l)throw new Error("Missing topic.");if(!i)throw new Error("Missing subscription callback.");return this.client.realtime.subscribe(this.collectionIdOrName+"/"+l,i,s)}async unsubscribe(l){return l?this.client.realtime.unsubscribe(this.collectionIdOrName+"/"+l):this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)}async getFullList(l,i){if(typeof l=="number")return super.getFullList(l,i);const s=Object.assign({},l,i);return super.getFullList(s)}async getList(l=1,i=30,s){return super.getList(l,i,s)}async getFirstListItem(l,i){return super.getFirstListItem(l,i)}async getOne(l,i){return super.getOne(l,i)}async create(l,i){return super.create(l,i)}async update(l,i,s){return super.update(l,i,s).then((u=>{var d,f,h;if(((d=this.client.authStore.record)==null?void 0:d.id)===(u==null?void 0:u.id)&&(((f=this.client.authStore.record)==null?void 0:f.collectionId)===this.collectionIdOrName||((h=this.client.authStore.record)==null?void 0:h.collectionName)===this.collectionIdOrName)){let m=Object.assign({},this.client.authStore.record.expand),b=Object.assign({},this.client.authStore.record,u);m&&(b.expand=Object.assign(m,u.expand)),this.client.authStore.save(this.client.authStore.token,b)}return u}))}async delete(l,i){return super.delete(l,i).then((s=>{var u,d,f;return!s||((u=this.client.authStore.record)==null?void 0:u.id)!==l||((d=this.client.authStore.record)==null?void 0:d.collectionId)!==this.collectionIdOrName&&((f=this.client.authStore.record)==null?void 0:f.collectionName)!==this.collectionIdOrName||this.client.authStore.clear(),s}))}authResponse(l){const i=this.decode((l==null?void 0:l.record)||{});return this.client.authStore.save(l==null?void 0:l.token,i),Object.assign({},l,{token:(l==null?void 0:l.token)||"",record:i})}async listAuthMethods(l){return l=Object.assign({method:"GET",fields:"mfa,otp,password,oauth2"},l),this.client.send(this.baseCollectionPath+"/auth-methods",l)}async authWithPassword(l,i,s){let u;s=Object.assign({method:"POST",body:{identity:l,password:i}},s),this.isSuperusers&&(u=s.autoRefreshThreshold,delete s.autoRefreshThreshold,s.autoRefresh||Jc(this.client));let d=await this.client.send(this.baseCollectionPath+"/auth-with-password",s);return d=this.authResponse(d),u&&this.isSuperusers&&(function(h,m,b,x){Jc(h);const S=h.beforeSend,A=h.authStore.record,T=h.authStore.onChange(((j,O)=>{(!j||(O==null?void 0:O.id)!=(A==null?void 0:A.id)||(O!=null&&O.collectionId||A!=null&&A.collectionId)&&(O==null?void 0:O.collectionId)!=(A==null?void 0:A.collectionId))&&Jc(h)}));h._resetAutoRefresh=function(){T(),h.beforeSend=S,delete h._resetAutoRefresh},h.beforeSend=async(j,O)=>{var Q;const Y=h.authStore.token;if((Q=O.query)!=null&&Q.autoRefresh)return S?S(j,O):{url:j,sendOptions:O};let Z=h.authStore.isValid;if(Z&&Mp(h.authStore.token,m))try{await b()}catch{Z=!1}Z||await x();const G=O.headers||{};for(let I in G)if(I.toLowerCase()=="authorization"&&Y==G[I]&&h.authStore.token){G[I]=h.authStore.token;break}return O.headers=G,S?S(j,O):{url:j,sendOptions:O}}})(this.client,u,(()=>this.authRefresh({autoRefresh:!0})),(()=>this.authWithPassword(l,i,Object.assign({autoRefresh:!0},s)))),d}async authWithOAuth2Code(l,i,s,u,d,f,h){let m={method:"POST",body:{provider:l,code:i,codeVerifier:s,redirectURL:u,createData:d}};return m=ma("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, options?).",m,f,h),this.client.send(this.baseCollectionPath+"/auth-with-oauth2",m).then((b=>this.authResponse(b)))}authWithOAuth2(...l){if(l.length>1||typeof(l==null?void 0:l[0])=="string")return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."),this.authWithOAuth2Code((l==null?void 0:l[0])||"",(l==null?void 0:l[1])||"",(l==null?void 0:l[2])||"",(l==null?void 0:l[3])||"",(l==null?void 0:l[4])||{},(l==null?void 0:l[5])||{},(l==null?void 0:l[6])||{});const i=(l==null?void 0:l[0])||{};let s=null;i.urlCallback||(s=G1(void 0));const u=new Op(this.client);function d(){s==null||s.close(),u.unsubscribe()}const f={},h=i.requestKey;return h&&(f.requestKey=h),this.listAuthMethods(f).then((m=>{const b=m.oauth2.providers.find((S=>S.name===i.provider));if(!b)throw new bt(new Error(`Missing or invalid provider "${i.provider}".`));const x=this.client.buildURL("/api/oauth2-redirect");return new Promise((async(S,A)=>{var j,O,Y;const T=h?(j=this.client.cancelControllers)==null?void 0:j[h]:void 0;T&&(T.signal.onabort=()=>{d(),A(new bt({isAbort:!0,message:"manually cancelled"}))}),u.onDisconnect=Z=>{Z.length&&A&&(d(),A(new bt(new Error("realtime connection interrupted"))))};try{await u.subscribe("@oauth2",(async I=>{var V;const F=u.clientId;try{if(!I.state||F!==I.state)throw new Error("State parameters don't match.");if(I.error||!I.code)throw new Error("OAuth2 redirect error or missing code: "+I.error);const H=Object.assign({},i);delete H.provider,delete H.scopes,delete H.createData,delete H.urlCallback,(V=T==null?void 0:T.signal)!=null&&V.onabort&&(T.signal.onabort=null);const J=await this.authWithOAuth2Code(b.name,I.code,b.codeVerifier,x,i.createData,H);S(J)}catch(H){A(new bt(H))}d()}));const Z={state:u.clientId};(O=i.scopes)!=null&&O.length&&(Z.scope=i.scopes.join(" "));const G=this._replaceQueryParams(b.authURL+x,Z);await(i.urlCallback||function(I){s?s.location.href=I:s=G1(I)})(G)}catch(Z){(Y=T==null?void 0:T.signal)!=null&&Y.onabort&&(T.signal.onabort=null),d(),A(new bt(Z))}}))})).catch((m=>{throw d(),m}))}async authRefresh(l,i){let s={method:"POST"};return s=ma("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).",s,l,i),this.client.send(this.baseCollectionPath+"/auth-refresh",s).then((u=>this.authResponse(u)))}async requestPasswordReset(l,i,s){let u={method:"POST",body:{email:l}};return u=ma("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).",u,i,s),this.client.send(this.baseCollectionPath+"/request-password-reset",u).then((()=>!0))}async confirmPasswordReset(l,i,s,u,d){let f={method:"POST",body:{token:l,password:i,passwordConfirm:s}};return f=ma("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).",f,u,d),this.client.send(this.baseCollectionPath+"/confirm-password-reset",f).then((()=>!0))}async requestVerification(l,i,s){let u={method:"POST",body:{email:l}};return u=ma("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).",u,i,s),this.client.send(this.baseCollectionPath+"/request-verification",u).then((()=>!0))}async confirmVerification(l,i,s){let u={method:"POST",body:{token:l}};return u=ma("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).",u,i,s),this.client.send(this.baseCollectionPath+"/confirm-verification",u).then((()=>{const d=kl(l),f=this.client.authStore.record;return f&&!f.verified&&f.id===d.id&&f.collectionId===d.collectionId&&(f.verified=!0,this.client.authStore.save(this.client.authStore.token,f)),!0}))}async requestEmailChange(l,i,s){let u={method:"POST",body:{newEmail:l}};return u=ma("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).",u,i,s),this.client.send(this.baseCollectionPath+"/request-email-change",u).then((()=>!0))}async confirmEmailChange(l,i,s,u){let d={method:"POST",body:{token:l,password:i}};return d=ma("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).",d,s,u),this.client.send(this.baseCollectionPath+"/confirm-email-change",d).then((()=>{const f=kl(l),h=this.client.authStore.record;return h&&h.id===f.id&&h.collectionId===f.collectionId&&this.client.authStore.clear(),!0}))}async listExternalAuths(l,i){return this.client.collection("_externalAuths").getFullList(Object.assign({},i,{filter:this.client.filter("recordRef = {:id}",{id:l})}))}async unlinkExternalAuth(l,i,s){const u=await this.client.collection("_externalAuths").getFirstListItem(this.client.filter("recordRef = {:recordId} && provider = {:provider}",{recordId:l,provider:i}));return this.client.collection("_externalAuths").delete(u.id,s).then((()=>!0))}async requestOTP(l,i){return i=Object.assign({method:"POST",body:{email:l}},i),this.client.send(this.baseCollectionPath+"/request-otp",i)}async authWithOTP(l,i,s){return s=Object.assign({method:"POST",body:{otpId:l,password:i}},s),this.client.send(this.baseCollectionPath+"/auth-with-otp",s).then((u=>this.authResponse(u)))}async impersonate(l,i,s){(s=Object.assign({method:"POST",body:{duration:i}},s)).headers=s.headers||{},s.headers.Authorization||(s.headers.Authorization=this.client.authStore.token);const u=new Su(this.client.baseURL,new vu,this.client.lang),d=await u.send(this.baseCollectionPath+"/impersonate/"+encodeURIComponent(l),s);return u.authStore.save(d==null?void 0:d.token,this.decode((d==null?void 0:d.record)||{})),u}_replaceQueryParams(l,i={}){let s=l,u="";l.indexOf("?")>=0&&(s=l.substring(0,l.indexOf("?")),u=l.substring(l.indexOf("?")+1));const d={},f=u.split("&");for(const h of f){if(h=="")continue;const m=h.split("=");d[decodeURIComponent(m[0].replace(/\+/g," "))]=decodeURIComponent((m[1]||"").replace(/\+/g," "))}for(let h in i)i.hasOwnProperty(h)&&(i[h]==null?delete d[h]:d[h]=i[h]);u="";for(let h in d)d.hasOwnProperty(h)&&(u!=""&&(u+="&"),u+=encodeURIComponent(h.replace(/%20/g,"+"))+"="+encodeURIComponent(d[h].replace(/%20/g,"+")));return u!=""?s+"?"+u:s}}function G1(r){if(typeof window>"u"||!(window!=null&&window.open))throw new bt(new Error("Not in a browser context - please pass a custom urlCallback function."));let l=1024,i=768,s=window.innerWidth,u=window.innerHeight;l=l>s?s:l,i=i>u?u:i;let d=s/2-l/2,f=u/2-i/2;return window.open(r,"popup_window","width="+l+",height="+i+",top="+f+",left="+d+",resizable,menubar=no")}class Lb extends zp{get baseCrudPath(){return"/api/collections"}async import(l,i=!1,s){return s=Object.assign({method:"PUT",body:{collections:l,deleteMissing:i}},s),this.client.send(this.baseCrudPath+"/import",s).then((()=>!0))}async getScaffolds(l){return l=Object.assign({method:"GET"},l),this.client.send(this.baseCrudPath+"/meta/scaffolds",l)}async truncate(l,i){return i=Object.assign({method:"DELETE"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l)+"/truncate",i).then((()=>!0))}}class Ub extends Yn{async getList(l=1,i=30,s){return(s=Object.assign({method:"GET"},s)).query=Object.assign({page:l,perPage:i},s.query),this.client.send("/api/logs",s)}async getOne(l,i){if(!l)throw new bt({url:this.client.buildURL("/api/logs/"),status:404,response:{code:404,message:"Missing required log id.",data:{}}});return i=Object.assign({method:"GET"},i),this.client.send("/api/logs/"+encodeURIComponent(l),i)}async getStats(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/logs/stats",l)}}class Hb extends Yn{async check(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/health",l)}}class Bb extends Yn{getUrl(l,i,s={}){return console.warn("Please replace pb.files.getUrl() with pb.files.getURL()"),this.getURL(l,i,s)}getURL(l,i,s={}){if(!i||!(l!=null&&l.id)||!(l!=null&&l.collectionId)&&!(l!=null&&l.collectionName))return"";const u=[];u.push("api"),u.push("files"),u.push(encodeURIComponent(l.collectionId||l.collectionName)),u.push(encodeURIComponent(l.id)),u.push(encodeURIComponent(i));let d=this.client.buildURL(u.join("/"));s.download===!1&&delete s.download;const f=xu(s);return f&&(d+=(d.includes("?")?"&":"?")+f),d}async getToken(l){return l=Object.assign({method:"POST"},l),this.client.send("/api/files/token",l).then((i=>(i==null?void 0:i.token)||""))}}class qb extends Yn{async getFullList(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/backups",l)}async create(l,i){return i=Object.assign({method:"POST",body:{name:l}},i),this.client.send("/api/backups",i).then((()=>!0))}async upload(l,i){return i=Object.assign({method:"POST",body:l},i),this.client.send("/api/backups/upload",i).then((()=>!0))}async delete(l,i){return i=Object.assign({method:"DELETE"},i),this.client.send(`/api/backups/${encodeURIComponent(l)}`,i).then((()=>!0))}async restore(l,i){return i=Object.assign({method:"POST"},i),this.client.send(`/api/backups/${encodeURIComponent(l)}/restore`,i).then((()=>!0))}getDownloadUrl(l,i){return console.warn("Please replace pb.backups.getDownloadUrl() with pb.backups.getDownloadURL()"),this.getDownloadURL(l,i)}getDownloadURL(l,i){return this.client.buildURL(`/api/backups/${encodeURIComponent(i)}?token=${encodeURIComponent(l)}`)}}class Zb extends Yn{async getFullList(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/crons",l)}async run(l,i){return i=Object.assign({method:"POST"},i),this.client.send(`/api/crons/${encodeURIComponent(l)}`,i).then((()=>!0))}}function lu(r){return typeof Blob<"u"&&r instanceof Blob||typeof File<"u"&&r instanceof File||r!==null&&typeof r=="object"&&r.uri&&(typeof navigator<"u"&&navigator.product==="ReactNative"||typeof global<"u"&&global.HermesInternal)}function iu(r){var l;return r&&(((l=r.constructor)==null?void 0:l.name)==="FormData"||typeof FormData<"u"&&r instanceof FormData)}function X1(r){for(const l in r){const i=Array.isArray(r[l])?r[l]:[r[l]];for(const s of i)if(lu(s))return!0}return!1}const Vb=/^[\-\.\d]+$/;function Q1(r){if(typeof r!="string")return r;if(r=="true")return!0;if(r=="false")return!1;if((r[0]==="-"||r[0]>="0"&&r[0]<="9")&&Vb.test(r)){let l=+r;if(""+l===r)return l}return r}class Yb extends Yn{constructor(){super(...arguments),this.requests=[],this.subs={}}collection(l){return this.subs[l]||(this.subs[l]=new Gb(this.requests,l)),this.subs[l]}async send(l){const i=new FormData,s=[];for(let u=0;u<this.requests.length;u++){const d=this.requests[u];if(s.push({method:d.method,url:d.url,headers:d.headers,body:d.json}),d.files)for(let f in d.files){const h=d.files[f]||[];for(let m of h)i.append("requests."+u+"."+f,m)}}return i.append("@jsonPayload",JSON.stringify({requests:s})),l=Object.assign({method:"POST",body:i},l),this.client.send("/api/batch",l)}}class Gb{constructor(l,i){this.requests=[],this.requests=l,this.collectionIdOrName=i}upsert(l,i){i=Object.assign({body:l||{}},i);const s={method:"PUT",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records"};this.prepareRequest(s,i),this.requests.push(s)}create(l,i){i=Object.assign({body:l||{}},i);const s={method:"POST",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records"};this.prepareRequest(s,i),this.requests.push(s)}update(l,i,s){s=Object.assign({body:i||{}},s);const u={method:"PATCH",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records/"+encodeURIComponent(l)};this.prepareRequest(u,s),this.requests.push(u)}delete(l,i){i=Object.assign({},i);const s={method:"DELETE",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records/"+encodeURIComponent(l)};this.prepareRequest(s,i),this.requests.push(s)}prepareRequest(l,i){if(yu(i),l.headers=i.headers,l.json={},l.files={},i.query!==void 0){const u=xu(i.query);u&&(l.url+=(l.url.includes("?")?"&":"?")+u)}let s=i.body;iu(s)&&(s=(function(d){let f={};return d.forEach(((h,m)=>{if(m==="@jsonPayload"&&typeof h=="string")try{let b=JSON.parse(h);Object.assign(f,b)}catch(b){console.warn("@jsonPayload error:",b)}else f[m]!==void 0?(Array.isArray(f[m])||(f[m]=[f[m]]),f[m].push(Q1(h))):f[m]=Q1(h)})),f})(s));for(const u in s){const d=s[u];if(lu(d))l.files[u]=l.files[u]||[],l.files[u].push(d);else if(Array.isArray(d)){const f=[],h=[];for(const m of d)lu(m)?f.push(m):h.push(m);if(f.length>0&&f.length==d.length){l.files[u]=l.files[u]||[];for(let m of f)l.files[u].push(m)}else if(l.json[u]=h,f.length>0){let m=u;u.startsWith("+")||u.endsWith("+")||(m+="+"),l.files[m]=l.files[m]||[];for(let b of f)l.files[m].push(b)}}else l.json[u]=d}}}class Su{get baseUrl(){return this.baseURL}set baseUrl(l){this.baseURL=l}constructor(l="/",i,s="en-US"){this.cancelControllers={},this.recordServices={},this.enableAutoCancellation=!0,this.baseURL=l,this.lang=s,i?this.authStore=i:typeof window<"u"&&window.Deno?this.authStore=new vu:this.authStore=new Mb,this.collections=new Lb(this),this.files=new Bb(this),this.logs=new Ub(this),this.settings=new Ob(this),this.realtime=new Op(this),this.health=new Hb(this),this.backups=new qb(this),this.crons=new Zb(this)}get admins(){return this.collection("_superusers")}createBatch(){return new Yb(this)}collection(l){return this.recordServices[l]||(this.recordServices[l]=new _b(this,l)),this.recordServices[l]}autoCancellation(l){return this.enableAutoCancellation=!!l,this}cancelRequest(l){return this.cancelControllers[l]&&(this.cancelControllers[l].abort(),delete this.cancelControllers[l]),this}cancelAllRequests(){for(let l in this.cancelControllers)this.cancelControllers[l].abort();return this.cancelControllers={},this}filter(l,i){if(!i)return l;for(let s in i){let u=i[s];switch(typeof u){case"boolean":case"number":u=""+u;break;case"string":u="'"+u.replace(/'/g,"\\'")+"'";break;default:u=u===null?"null":u instanceof Date?"'"+u.toISOString().replace("T"," ")+"'":"'"+JSON.stringify(u).replace(/'/g,"\\'")+"'"}l=l.replaceAll("{:"+s+"}",u)}return l}getFileUrl(l,i,s={}){return console.warn("Please replace pb.getFileUrl() with pb.files.getURL()"),this.files.getURL(l,i,s)}buildUrl(l){return console.warn("Please replace pb.buildUrl() with pb.buildURL()"),this.buildURL(l)}buildURL(l){var s;let i=this.baseURL;return typeof window>"u"||!window.location||i.startsWith("https://")||i.startsWith("http://")||(i=(s=window.location.origin)!=null&&s.endsWith("/")?window.location.origin.substring(0,window.location.origin.length-1):window.location.origin||"",this.baseURL.startsWith("/")||(i+=window.location.pathname||"/",i+=i.endsWith("/")?"":"/"),i+=this.baseURL),l&&(i+=i.endsWith("/")?"":"/",i+=l.startsWith("/")?l.substring(1):l),i}async send(l,i){i=this.initSendOptions(l,i);let s=this.buildURL(l);if(this.beforeSend){const u=Object.assign({},await this.beforeSend(s,i));u.url!==void 0||u.options!==void 0?(s=u.url||s,i=u.options||i):Object.keys(u).length&&(i=u,console!=null&&console.warn&&console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."))}if(i.query!==void 0){const u=xu(i.query);u&&(s+=(s.includes("?")?"&":"?")+u),delete i.query}return this.getHeader(i.headers,"Content-Type")=="application/json"&&i.body&&typeof i.body!="string"&&(i.body=JSON.stringify(i.body)),(i.fetch||fetch)(s,i).then((async u=>{var f;let d={};try{d=await u.json()}catch(h){if((f=i.signal)!=null&&f.aborted||(h==null?void 0:h.name)=="AbortError"||(h==null?void 0:h.message)=="Aborted")throw h}if(this.afterSend&&(d=await this.afterSend(u,d,i)),u.status>=400)throw new bt({url:u.url,status:u.status,data:d});return d})).catch((u=>{throw new bt(u)}))}initSendOptions(l,i){if((i=Object.assign({method:"GET"},i)).body=(function(u){if(typeof FormData>"u"||u===void 0||typeof u!="object"||u===null||iu(u)||!X1(u))return u;const d=new FormData;for(const f in u){const h=u[f];if(h!==void 0)if(typeof h!="object"||X1({data:h})){const m=Array.isArray(h)?h:[h];for(let b of m)d.append(f,b)}else{let m={};m[f]=h,d.append("@jsonPayload",JSON.stringify(m))}}return d})(i.body),yu(i),i.query=Object.assign({},i.params,i.query),i.requestKey===void 0&&(i.$autoCancel===!1||i.query.$autoCancel===!1?i.requestKey=null:(i.$cancelKey||i.query.$cancelKey)&&(i.requestKey=i.$cancelKey||i.query.$cancelKey)),delete i.$autoCancel,delete i.query.$autoCancel,delete i.$cancelKey,delete i.query.$cancelKey,this.getHeader(i.headers,"Content-Type")!==null||iu(i.body)||(i.headers=Object.assign({},i.headers,{"Content-Type":"application/json"})),this.getHeader(i.headers,"Accept-Language")===null&&(i.headers=Object.assign({},i.headers,{"Accept-Language":this.lang})),this.authStore.token&&this.getHeader(i.headers,"Authorization")===null&&(i.headers=Object.assign({},i.headers,{Authorization:this.authStore.token})),this.enableAutoCancellation&&i.requestKey!==null){const s=i.requestKey||(i.method||"GET")+l;delete i.requestKey,this.cancelRequest(s);const u=new AbortController;this.cancelControllers[s]=u,i.signal=u.signal}return i}getHeader(l,i){l=l||{},i=i.toLowerCase();for(let s in l)if(s.toLowerCase()==i)return l[s];return null}}const jp="ennabl_pb_url";let Dl=null;function _p(){return localStorage.getItem(jp)||""}function Cr(){const r=_p();return r?((!Dl||Dl.baseUrl!==r)&&(Dl=new Su(r)),Dl):null}function I1(){return!!_p()}async function Xb(r){const l=r.trim().replace(/\/$/,"");localStorage.setItem(jp,l),Dl=new Su(l),await Dl.collection("prds").getList(1,1)}async function Qb(){return(await Cr().collection("prds").getFullList({sort:"-updated"})).map(wu)}async function Ib({projectId:r,title:l,content:i}){const s=await Cr().collection("prds").create({projectId:r,title:l.trim(),content:i||"",status:"backlog"});return wu(s)}async function Kb(r,l){const i=await Cr().collection("prds").update(r,l);return wu(i)}async function $b(r){await Cr().collection("prds").delete(r)}function wu(r){return{id:r.id,projectId:r.projectId,title:r.title,content:r.content||"",status:r.status||"backlog",createdAt:r.created,updatedAt:r.updated}}function Jb({onDone:r}){const[l,i]=v.useState(""),[s,u]=v.useState(!1),[d,f]=v.useState("");async function h(m){var b,x;if(m.preventDefault(),!!l.trim()){u(!0),f("");try{await Xb(l),r()}catch(S){f((b=S==null?void 0:S.message)!=null&&b.includes("Failed to fetch")?"Could not reach that URL. Check the Railway domain and make sure it's deployed.":(x=S==null?void 0:S.message)!=null&&x.includes("prds")?'Connected but the "prds" collection is missing. Check that the migration ran.':`Connection failed: ${(S==null?void 0:S.message)||"unknown error"}`)}finally{u(!1)}}}return y.jsx("div",{className:"pb-setup",children:y.jsxs("div",{className:"pb-setup-card",children:[y.jsxs("div",{className:"pb-setup-logo",children:[y.jsx("span",{className:"pb-setup-logo-name",children:"ennabl"}),y.jsx("span",{className:"pb-setup-logo-suffix",children:"builder"})]}),y.jsx("h2",{className:"pb-setup-title",children:"Connect to PocketBase"}),y.jsx("p",{className:"pb-setup-sub",children:"Paste your Railway deployment URL to sync PRDs across sessions."}),y.jsxs("form",{className:"pb-setup-form",onSubmit:h,children:[y.jsx("input",{className:"pb-setup-input",type:"url",placeholder:"https://your-app.up.railway.app",value:l,onChange:m=>i(m.target.value),autoFocus:!0,disabled:s}),d&&y.jsx("div",{className:"pb-setup-error",children:d}),y.jsx("button",{className:"pb-setup-btn",type:"submit",disabled:!l.trim()||s,children:s?"Connecting…":"Connect"})]}),y.jsxs("div",{className:"pb-setup-footer",children:[y.jsxs("span",{className:"pb-setup-hint",children:["Don't have a deployment yet?"," ",y.jsx("a",{href:"https://railway.app",target:"_blank",rel:"noreferrer",className:"pb-setup-link",children:"Deploy to Railway →"})]}),y.jsx("button",{className:"pb-setup-skip",onClick:r,children:"Skip — use local storage"})]})]})})}const Lp="ennabl_builder_prds",Up=[{id:"ai",name:"AI",phosphorIcon:"Sparkle"},{id:"insights",name:"Insights",phosphorIcon:"ChartBar"},{id:"workflows",name:"Workflows",phosphorIcon:"FlowArrow"},{id:"data",name:"Data",phosphorIcon:"Database"},{id:"growth",name:"Growth",phosphorIcon:"TrendUp"},{id:"updates",name:"Updates",phosphorIcon:"Bell"},{id:"settings",name:"Settings",phosphorIcon:"GearSix"}],K1=["backlog","todo","doing","done"],Hp={backlog:"Backlog",todo:"To Do",doing:"Doing",done:"Done"},Fb=[{id:"prd-mock-1",projectId:"workflows",title:"Producer Filter Modal",content:`# Producer Filter Modal

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
`,status:"doing",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),updatedAt:new Date(Date.now()-7200*1e3).toISOString()}];function su(){try{return JSON.parse(localStorage.getItem(Lp)||"[]")}catch{return[]}}function dr(r){localStorage.setItem(Lp,JSON.stringify(r))}function $1(){su().length===0&&dr(Fb)}function Bp(r){return Up.find(l=>l.id===r)||null}function Pb({prds:r=[],onSelect:l}){const[i,s]=v.useState(""),[u,d]=v.useState([]),[f,h]=v.useState(!1),[m,b]=v.useState(0),x=v.useRef(),S=v.useRef();v.useEffect(()=>{if(!i.trim()){d([]),h(!1);return}const T=i.toLowerCase(),j=r.filter(O=>O.title.toLowerCase().includes(T)).slice(0,8);d(j),h(j.length>0),b(0)},[i,r]),v.useEffect(()=>{function T(j){f&&(j.key==="ArrowDown"&&(j.preventDefault(),b(O=>Math.min(O+1,u.length-1))),j.key==="ArrowUp"&&(j.preventDefault(),b(O=>Math.max(O-1,0))),j.key==="Enter"&&(j.preventDefault(),u[m]&&A(u[m])),j.key==="Escape"&&h(!1))}return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[f,u,m]),v.useEffect(()=>{function T(j){var O,Y;!((O=S.current)!=null&&O.contains(j.target))&&!((Y=x.current)!=null&&Y.contains(j.target))&&h(!1)}return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);function A(T){var j;l(T),s(""),h(!1),(j=x.current)==null||j.blur()}return y.jsxs("div",{className:"prd-search",children:[y.jsxs("div",{className:"prd-search-input-wrap",children:[y.jsx("span",{className:"prd-search-icon",children:"⌕"}),y.jsx("input",{ref:x,className:"prd-search-input",type:"text",placeholder:"Search PRDs…",value:i,onChange:T=>s(T.target.value),onFocus:()=>{u.length&&h(!0)}}),i&&y.jsx("button",{className:"prd-search-clear",onClick:()=>{s(""),h(!1)},children:"✕"})]}),f&&y.jsx("div",{ref:S,className:"prd-search-dropdown",children:u.map((T,j)=>{const O=Bp(T.projectId);return y.jsxs("button",{className:`prd-search-result ${j===m?"prd-search-result--active":""}`,onMouseEnter:()=>b(j),onClick:()=>A(T),children:[y.jsx("span",{className:"prd-search-result-title",children:T.title}),y.jsxs("span",{className:"prd-search-result-project",children:[O==null?void 0:O.icon," ",O==null?void 0:O.name]})]},T.id)})})]})}const Wb=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M225.29,165.93C216.61,151,212,129.57,212,104a84,84,0,0,0-168,0c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.66,186,19.77,19.77,0,0,0,48,196H84.18a44,44,0,0,0,87.64,0H208a19.77,19.77,0,0,0,17.31-10A20.08,20.08,0,0,0,225.29,165.93ZM128,212a20,20,0,0,1-19.6-16h39.2A20,20,0,0,1,128,212ZM54.66,172C63.51,154,68,131.14,68,104a60,60,0,0,1,120,0c0,27.13,4.48,50,13.33,68Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192Z",opacity:"0.2"}),v.createElement("path",{d:"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M220.07,176.94C214.41,167.2,206,139.73,206,104a78,78,0,1,0-156,0c0,35.74-8.42,63.2-14.08,72.94A14,14,0,0,0,48,198H90.48a38,38,0,0,0,75,0H208a14,14,0,0,0,12.06-21.06ZM128,218a26,26,0,0,1-25.29-20h50.58A26,26,0,0,1,128,218Zm81.71-33a1.9,1.9,0,0,1-1.7,1H48a1.9,1.9,0,0,1-1.7-1,2,2,0,0,1,0-2C53.87,170,62,139.69,62,104a66,66,0,1,1,132,0c0,35.68,8.14,65.95,15.71,79A2,2,0,0,1,209.71,185Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M218.35,178C212.58,168,204,140.13,204,104a76,76,0,1,0-152,0c0,36.13-8.59,64-14.36,73.95A12,12,0,0,0,48,196H92.23a36,36,0,0,0,71.54,0H208A12,12,0,0,0,218.35,178ZM128,220a28,28,0,0,1-27.71-24h55.42A28,28,0,0,1,128,220Zm83.45-34a3.91,3.91,0,0,1-3.44,2H48a3.91,3.91,0,0,1-3.44-2,4,4,0,0,1,0-4C52,169.17,60,139.32,60,104a68,68,0,1,1,136,0c0,35.31,8,65.17,15.44,78A4,4,0,0,1,211.45,186Z"}))]]),ev=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224,196h-4V40a12,12,0,0,0-12-12H152a12,12,0,0,0-12,12V76H96A12,12,0,0,0,84,88v36H48a12,12,0,0,0-12,12v60H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24ZM164,52h32V196H164Zm-56,48h32v96H108ZM60,148H84v48H60Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,40V208H152V40Z",opacity:"0.2"}),v.createElement("path",{d:"M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224,202H214V40a6,6,0,0,0-6-6H152a6,6,0,0,0-6,6V82H96a6,6,0,0,0-6,6v42H48a6,6,0,0,0-6,6v66H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12ZM158,46h44V202H158ZM102,94h44V202H102ZM54,142H90v60H54Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224,204H212V40a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4V84H96a4,4,0,0,0-4,4v44H48a4,4,0,0,0-4,4v68H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8ZM156,44h48V204H156ZM100,92h48V204H100ZM52,140H92v64H52Z"}))]]),tv=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M196,35.52C177.62,25.51,153.48,20,128,20S78.38,25.51,60,35.52C39.37,46.79,28,62.58,28,80v96c0,17.42,11.37,33.21,32,44.48,18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52c20.66-11.27,32-27.06,32-44.48V80C228,62.58,216.63,46.79,196,35.52ZM204,128c0,17-31.21,36-76,36s-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94ZM128,44c44.79,0,76,19,76,36s-31.21,36-76,36S52,97,52,80,83.21,44,128,44Zm0,168c-44.79,0-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94V176C204,193,172.79,212,128,212Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,80c0,26.51-39.4,48-88,48S40,106.51,40,80s39.4-48,88-48S216,53.49,216,80Z",opacity:"0.2"}),v.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64Zm-21.61,74.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,26C75.29,26,34,49.72,34,80v96c0,30.28,41.29,54,94,54s94-23.72,94-54V80C222,49.72,180.71,26,128,26Zm0,12c44.45,0,82,19.23,82,42s-37.55,42-82,42S46,102.77,46,80,83.55,38,128,38Zm82,138c0,22.77-37.55,42-82,42s-82-19.23-82-42V154.79C62,171.16,92.37,182,128,182s66-10.84,82-27.21Zm0-48c0,22.77-37.55,42-82,42s-82-19.23-82-42V106.79C62,123.16,92.37,134,128,134s66-10.84,82-27.21Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M192.14,42.55C174.94,33.17,152.16,28,128,28S81.06,33.17,63.86,42.55C45.89,52.35,36,65.65,36,80v96c0,14.35,9.89,27.65,27.86,37.45,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c18-9.8,27.86-23.1,27.86-37.45V80C220,65.65,210.11,52.35,192.14,42.55ZM212,176c0,11.29-8.41,22.1-23.69,30.43C172.27,215.18,150.85,220,128,220s-44.27-4.82-60.31-13.57C52.41,198.1,44,187.29,44,176V149.48c4.69,5.93,11.37,11.34,19.86,16,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c8.49-4.63,15.17-10,19.86-16Zm0-48c0,11.29-8.41,22.1-23.69,30.43C172.27,167.18,150.85,172,128,172s-44.27-4.82-60.31-13.57C52.41,150.1,44,139.29,44,128V101.48c4.69,5.93,11.37,11.34,19.86,16,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c8.49-4.63,15.17-10,19.86-16Zm-23.69-17.57C172.27,119.18,150.85,124,128,124s-44.27-4.82-60.31-13.57C52.41,102.1,44,91.29,44,80s8.41-22.1,23.69-30.43C83.73,40.82,105.15,36,128,36s44.27,4.82,60.31,13.57C203.59,57.9,212,68.71,212,80S203.59,102.1,188.31,110.43Z"}))]]),nv=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M248.49,71.51l-32-32a12,12,0,0,0-17,17L211,68h-3c-52,0-64.8,30.71-75.08,55.38-8.82,21.17-15.45,37.05-42.75,40.09a44,44,0,1,0,.28,24.08c43.34-3.87,55.07-32,64.63-54.93C164.9,109,172,92,208,92h3l-11.52,11.51a12,12,0,0,0,17,17l32-32A12,12,0,0,0,248.49,71.51ZM48,196a20,20,0,1,1,20-20A20,20,0,0,1,48,196Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M80,176a32,32,0,1,1-32-32A32,32,0,0,1,80,176Z",opacity:"0.2"}),v.createElement("path",{d:"M245.66,74.34l-32-32a8,8,0,0,0-11.32,11.32L220.69,72H208c-49.33,0-61.05,28.12-71.38,52.92-9.38,22.51-16.92,40.59-49.48,42.84a40,40,0,1,0,.1,16c43.26-2.65,54.34-29.15,64.14-52.69C161.41,107,169.33,88,208,88h12.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,74.34ZM48,200a24,24,0,1,1,24-24A24,24,0,0,1,48,200Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M245.66,85.66l-32,32a8,8,0,0,1-11.32-11.32L220.69,88H208c-38.67,0-46.59,19-56.62,43.08C141.05,155.88,129.33,184,80,184H79a32,32,0,1,1,0-16h1c38.67,0,46.59-19,56.62-43.08C147,100.12,158.67,72,208,72h12.69L202.34,53.66a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,245.66,85.66Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M244.24,75.76l-32-32a6,6,0,0,0-8.48,8.48L225.51,74H208c-48,0-59.44,27.46-69.54,51.69-9.43,22.64-17.66,42.33-53,44.16a38,38,0,1,0,.06,12c43.34-2.06,54.29-28.29,64-51.55C159.44,106.53,168,86,208,86h17.51l-21.75,21.76a6,6,0,1,0,8.48,8.48l32-32A6,6,0,0,0,244.24,75.76ZM48,202a26,26,0,1,1,26-26A26,26,0,0,1,48,202Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M245.66,74.34l-32-32a8,8,0,0,0-11.32,11.32L220.69,72H208c-49.33,0-61.05,28.12-71.38,52.92-9.38,22.51-16.92,40.59-49.48,42.84a40,40,0,1,0,.1,16c43.26-2.65,54.34-29.15,64.14-52.69C161.41,107,169.33,88,208,88h12.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,74.34ZM48,200a24,24,0,1,1,24-24A24,24,0,0,1,48,200Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M242.83,77.17l-32-32a4,4,0,0,0-5.66,5.66L230.34,76H208c-46.67,0-57.84,26.81-67.69,50.46-9.46,22.69-18.4,44.16-56.55,45.48a36,36,0,1,0,0,8c43.49-1.42,54.33-27.39,63.91-50.39C157.45,106.12,166.67,84,208,84h22.34l-25.17,25.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,242.83,77.17ZM48,204a28,28,0,1,1,28-28A28,28,0,0,1,48,204Z"}))]]),av=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm113.86-49.57A12,12,0,0,0,236,98.34L208.21,82.49l-.11-31.31a12,12,0,0,0-4.25-9.12,116,116,0,0,0-38-21.41,12,12,0,0,0-9.68.89L128,37.27,99.83,21.53a12,12,0,0,0-9.7-.9,116.06,116.06,0,0,0-38,21.47,12,12,0,0,0-4.24,9.1l-.14,31.34L20,98.35a12,12,0,0,0-5.85,8.11,110.7,110.7,0,0,0,0,43.11A12,12,0,0,0,20,157.66l27.82,15.85.11,31.31a12,12,0,0,0,4.25,9.12,116,116,0,0,0,38,21.41,12,12,0,0,0,9.68-.89L128,218.73l28.14,15.74a12,12,0,0,0,9.7.9,116.06,116.06,0,0,0,38-21.47,12,12,0,0,0,4.24-9.1l.14-31.34,27.81-15.81a12,12,0,0,0,5.85-8.11A110.7,110.7,0,0,0,241.86,106.43Zm-22.63,33.18-26.88,15.28a11.94,11.94,0,0,0-4.55,4.59c-.54,1-1.11,1.93-1.7,2.88a12,12,0,0,0-1.83,6.31L184.13,199a91.83,91.83,0,0,1-21.07,11.87l-27.15-15.19a12,12,0,0,0-5.86-1.53h-.29c-1.14,0-2.3,0-3.44,0a12.08,12.08,0,0,0-6.14,1.51L93,210.82A92.27,92.27,0,0,1,71.88,199l-.11-30.24a12,12,0,0,0-1.83-6.32c-.58-.94-1.16-1.91-1.7-2.88A11.92,11.92,0,0,0,63.7,155L36.8,139.63a86.53,86.53,0,0,1,0-23.24l26.88-15.28a12,12,0,0,0,4.55-4.58c.54-1,1.11-1.94,1.7-2.89a12,12,0,0,0,1.83-6.31L71.87,57A91.83,91.83,0,0,1,92.94,45.17l27.15,15.19a11.92,11.92,0,0,0,6.15,1.52c1.14,0,2.3,0,3.44,0a12.08,12.08,0,0,0,6.14-1.51L163,45.18A92.27,92.27,0,0,1,184.12,57l.11,30.24a12,12,0,0,0,1.83,6.32c.58.94,1.16,1.91,1.7,2.88A11.92,11.92,0,0,0,192.3,101l26.9,15.33A86.53,86.53,0,0,1,219.23,139.61Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),v.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Zm108-54.4a6,6,0,0,0-2.92-4L202.64,86.22l-.42-.71L202.1,51.2A6,6,0,0,0,200,46.64a110.12,110.12,0,0,0-36.07-20.31,6,6,0,0,0-4.84.45L128.46,43.86h-1L96.91,26.76a6,6,0,0,0-4.86-.44A109.92,109.92,0,0,0,56,46.68a6,6,0,0,0-2.12,4.55l-.16,34.34c-.14.23-.28.47-.41.71L22.91,103.57A6,6,0,0,0,20,107.62a104.81,104.81,0,0,0,0,40.78,6,6,0,0,0,2.92,4l30.42,17.33.42.71.12,34.31A6,6,0,0,0,56,209.36a110.12,110.12,0,0,0,36.07,20.31,6,6,0,0,0,4.84-.45l30.61-17.08h1l30.56,17.1A6.09,6.09,0,0,0,162,230a5.83,5.83,0,0,0,1.93-.32,109.92,109.92,0,0,0,36-20.36,6,6,0,0,0,2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6,6,0,0,0,2.92-4.05A104.81,104.81,0,0,0,236,107.6Zm-11.25,35.79L195.32,160.1a6.07,6.07,0,0,0-2.28,2.3c-.59,1-1.21,2.11-1.86,3.14a6,6,0,0,0-.91,3.16l-.16,33.21a98.15,98.15,0,0,1-27.52,15.53L133,200.88a6,6,0,0,0-2.93-.77h-.14c-1.24,0-2.5,0-3.74,0a6,6,0,0,0-3.07.76L93.45,217.43a98,98,0,0,1-27.56-15.49l-.12-33.17a6,6,0,0,0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6,6,0,0,0-2.27-2.3L31.3,143.4a93,93,0,0,1,0-30.79L60.68,95.9A6.07,6.07,0,0,0,63,93.6c.59-1,1.21-2.11,1.86-3.14a6,6,0,0,0,.91-3.16l.16-33.21A98.15,98.15,0,0,1,93.41,38.56L123,55.12a5.81,5.81,0,0,0,3.07.76c1.24,0,2.5,0,3.74,0a6,6,0,0,0,3.07-.76l29.65-16.56a98,98,0,0,1,27.56,15.49l.12,33.17a6,6,0,0,0,.91,3.16c.64,1,1.27,2.08,1.86,3.14a6,6,0,0,0,2.27,2.3L224.7,112.6A93,93,0,0,1,224.73,143.39Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm106-56a4,4,0,0,0-2-2.7l-30.89-17.6q-.47-.82-1-1.62L200.1,51.2a3.94,3.94,0,0,0-1.42-3,107.8,107.8,0,0,0-35.41-19.94,4,4,0,0,0-3.23.29L129,45.87h-2l-31-17.36a4,4,0,0,0-3.23-.3,108.05,108.05,0,0,0-35.39,20,4,4,0,0,0-1.41,3l-.16,34.9-1,1.62L23.9,105.3A4,4,0,0,0,22,108a102.76,102.76,0,0,0,0,40,4,4,0,0,0,1.95,2.7l30.89,17.6q.47.83,1,1.62l.12,34.87a3.94,3.94,0,0,0,1.42,3,107.8,107.8,0,0,0,35.41,19.94,4,4,0,0,0,3.23-.29L127,210.13h2l31,17.36a4,4,0,0,0,3.23.3,108.05,108.05,0,0,0,35.39-20,4,4,0,0,0,1.41-3l.16-34.9,1-1.62L232.1,150.7a4,4,0,0,0,2-2.71A102.76,102.76,0,0,0,234,108Zm-7.48,36.67L196.3,161.84a4,4,0,0,0-1.51,1.53c-.61,1.09-1.25,2.17-1.91,3.24a3.92,3.92,0,0,0-.61,2.1l-.16,34.15a99.8,99.8,0,0,1-29.7,16.77l-30.4-17a4.06,4.06,0,0,0-2-.51H130c-1.28,0-2.57,0-3.84,0a4.1,4.1,0,0,0-2.05.51l-30.45,17A100.23,100.23,0,0,1,63.89,202.9l-.12-34.12a3.93,3.93,0,0,0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4,4,0,0,0-1.51-1.53L29.49,144.68a94.78,94.78,0,0,1,0-33.34L59.7,94.16a4,4,0,0,0,1.51-1.53c.61-1.09,1.25-2.17,1.91-3.23a4,4,0,0,0,.61-2.11l.16-34.15a99.8,99.8,0,0,1,29.7-16.77l30.4,17a4.1,4.1,0,0,0,2.05.51c1.28,0,2.57,0,3.84,0a4,4,0,0,0,2.05-.51l30.45-17A100.23,100.23,0,0,1,192.11,53.1l.12,34.12a3.93,3.93,0,0,0,.61,2.11c.66,1,1.3,2.14,1.91,3.23a4,4,0,0,0,1.51,1.53l30.25,17.23A94.78,94.78,0,0,1,226.54,144.66Z"}))]]),lv=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M199,125.31l-49.88-18.39L130.69,57a19.92,19.92,0,0,0-37.38,0L74.92,106.92,25,125.31a19.92,19.92,0,0,0,0,37.38l49.88,18.39L93.31,231a19.92,19.92,0,0,0,37.38,0l18.39-49.88L199,162.69a19.92,19.92,0,0,0,0-37.38Zm-63.38,35.16a12,12,0,0,0-7.11,7.11L112,212.28l-16.47-44.7a12,12,0,0,0-7.11-7.11L43.72,144l44.7-16.47a12,12,0,0,0,7.11-7.11L112,75.72l16.47,44.7a12,12,0,0,0,7.11,7.11L180.28,144ZM140,40a12,12,0,0,1,12-12h12V16a12,12,0,0,1,24,0V28h12a12,12,0,0,1,0,24H188V64a12,12,0,0,1-24,0V52H152A12,12,0,0,1,140,40ZM252,88a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12,12,0,0,1,252,88Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M194.82,151.43l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0l-20.3-55.09-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3A7.92,7.92,0,0,1,194.82,151.43Z",opacity:"0.2"}),v.createElement("path",{d:"M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M196.89,130.94,144.4,111.6,125.06,59.11a13.92,13.92,0,0,0-26.12,0L79.6,111.6,27.11,130.94a13.92,13.92,0,0,0,0,26.12L79.6,176.4l19.34,52.49a13.92,13.92,0,0,0,26.12,0L144.4,176.4l52.49-19.34a13.92,13.92,0,0,0,0-26.12Zm-4.15,14.86-55.08,20.3a6,6,0,0,0-3.56,3.56l-20.3,55.08a1.92,1.92,0,0,1-3.6,0L89.9,169.66a6,6,0,0,0-3.56-3.56L31.26,145.8a1.92,1.92,0,0,1,0-3.6l55.08-20.3a6,6,0,0,0,3.56-3.56l20.3-55.08a1.92,1.92,0,0,1,3.6,0l20.3,55.08a6,6,0,0,0,3.56,3.56l55.08,20.3a1.92,1.92,0,0,1,0,3.6ZM146,40a6,6,0,0,1,6-6h18V16a6,6,0,0,1,12,0V34h18a6,6,0,0,1,0,12H182V64a6,6,0,0,1-12,0V46H152A6,6,0,0,1,146,40ZM246,88a6,6,0,0,1-6,6H230v10a6,6,0,0,1-12,0V94H208a6,6,0,0,1,0-12h10V72a6,6,0,0,1,12,0V82h10A6,6,0,0,1,246,88Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M196.2,132.81l-53.36-19.65L123.19,59.8a11.93,11.93,0,0,0-22.38,0L81.16,113.16,27.8,132.81a11.93,11.93,0,0,0,0,22.38l53.36,19.65,19.65,53.36a11.93,11.93,0,0,0,22.38,0l19.65-53.36,53.36-19.65a11.93,11.93,0,0,0,0-22.38Zm-2.77,14.87L138.35,168a4,4,0,0,0-2.37,2.37l-20.3,55.08a3.92,3.92,0,0,1-7.36,0L88,170.35A4,4,0,0,0,85.65,168l-55.08-20.3a3.92,3.92,0,0,1,0-7.36L85.65,120A4,4,0,0,0,88,117.65l20.3-55.08a3.92,3.92,0,0,1,7.36,0L136,117.65a4,4,0,0,0,2.37,2.37l55.08,20.3a3.92,3.92,0,0,1,0,7.36ZM148,40a4,4,0,0,1,4-4h20V16a4,4,0,0,1,8,0V36h20a4,4,0,0,1,0,8H180V64a4,4,0,0,1-8,0V44H152A4,4,0,0,1,148,40Zm96,48a4,4,0,0,1-4,4H228v12a4,4,0,0,1-8,0V92H208a4,4,0,0,1,0-8h12V72a4,4,0,0,1,8,0V84h12A4,4,0,0,1,244,88Z"}))]]),iv=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M244,56v64a12,12,0,0,1-24,0V85l-75.51,75.52a12,12,0,0,1-17,0L96,129,32.49,192.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0L136,135l67-67H168a12,12,0,0,1,0-24h64A12,12,0,0,1,244,56Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M232,56v64L168,56Z",opacity:"0.2"}),v.createElement("path",{d:"M232,48H168a8,8,0,0,0-5.66,13.66L188.69,88,136,140.69l-34.34-34.35a8,8,0,0,0-11.32,0l-72,72a8,8,0,0,0,11.32,11.32L96,123.31l34.34,34.35a8,8,0,0,0,11.32,0L200,99.31l26.34,26.35A8,8,0,0,0,240,120V56A8,8,0,0,0,232,48Zm-8,52.69L187.31,64H224Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M240,56v64a8,8,0,0,1-13.66,5.66L200,99.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,188.69,88,162.34,61.66A8,8,0,0,1,168,48h64A8,8,0,0,1,240,56Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M238,56v64a6,6,0,0,1-12,0V70.48l-85.76,85.76a6,6,0,0,1-8.48,0L96,120.49,28.24,188.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0L136,143.51,217.52,62H168a6,6,0,0,1,0-12h64A6,6,0,0,1,238,56Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M236,56v64a4,4,0,0,1-8,0V65.66l-89.17,89.17a4,4,0,0,1-5.66,0L96,117.66,26.83,186.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0L136,146.34,222.34,60H168a4,4,0,0,1,0-8h64A4,4,0,0,1,236,56Z"}))]]),sv=v.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),va=v.forwardRef((r,l)=>{const{alt:i,color:s,size:u,weight:d,mirrored:f,children:h,weights:m,...b}=r,{color:x="currentColor",size:S,weight:A="regular",mirrored:T=!1,...j}=v.useContext(sv);return v.createElement("svg",{ref:l,xmlns:"http://www.w3.org/2000/svg",width:u??S,height:u??S,fill:s??x,viewBox:"0 0 256 256",transform:f||T?"scale(-1, 1)":void 0,...j,...b},!!i&&v.createElement("title",null,i),h,m.get(d??A))});va.displayName="IconBase";const qp=v.forwardRef((r,l)=>v.createElement(va,{ref:l,...r,weights:Wb}));qp.displayName="BellIcon";const Zp=qp,Vp=v.forwardRef((r,l)=>v.createElement(va,{ref:l,...r,weights:ev}));Vp.displayName="ChartBarIcon";const Yp=Vp,Gp=v.forwardRef((r,l)=>v.createElement(va,{ref:l,...r,weights:tv}));Gp.displayName="DatabaseIcon";const Xp=Gp,Qp=v.forwardRef((r,l)=>v.createElement(va,{ref:l,...r,weights:nv}));Qp.displayName="FlowArrowIcon";const Ip=Qp,Kp=v.forwardRef((r,l)=>v.createElement(va,{ref:l,...r,weights:av}));Kp.displayName="GearSixIcon";const $p=Kp,Jp=v.forwardRef((r,l)=>v.createElement(va,{ref:l,...r,weights:lv}));Jp.displayName="SparkleIcon";const Fp=Jp,Pp=v.forwardRef((r,l)=>v.createElement(va,{ref:l,...r,weights:iv}));Pp.displayName="TrendUpIcon";const Wp=Pp,rv={Sparkle:Fp,ChartBar:Yp,FlowArrow:Ip,Database:Xp,TrendUp:Wp,Bell:Zp,GearSix:$p};function ov({prds:r,onNavigate:l}){return y.jsxs("div",{className:"projects-page",children:[y.jsx("header",{className:"projects-header",children:y.jsxs("div",{className:"projects-logo",children:[y.jsx("span",{className:"projects-logo-name",children:"ennabl"}),y.jsx("span",{className:"projects-logo-suffix",children:"builder"})]})}),y.jsxs("main",{className:"projects-main",children:[y.jsx("h1",{className:"projects-title",children:"Projects"}),y.jsx("div",{className:"projects-grid",children:Up.map(i=>{const s=r.filter(f=>f.projectId===i.id),u=s.filter(f=>f.status==="doing").length,d=rv[i.phosphorIcon];return y.jsxs("button",{className:"project-card",onClick:()=>l({page:"project",projectId:i.id}),children:[y.jsx("div",{className:"project-card-icon",children:d&&y.jsx(d,{size:24,weight:"regular"})}),y.jsx("div",{className:"project-card-name",children:i.name}),y.jsx("div",{className:"project-card-meta",children:s.length>0?y.jsxs(y.Fragment,{children:[y.jsxs("span",{className:"project-card-count",children:[s.length," PRD",s.length!==1?"s":""]}),u>0&&y.jsxs("span",{className:"project-card-doing",children:[u," doing"]})]}):y.jsx("span",{className:"project-card-empty",children:"No PRDs yet"})})]},i.id)})})]})]})}var Ri=up();function cv(){for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return v.useMemo(()=>s=>{l.forEach(u=>u(s))},l)}const Er=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ml(r){const l=Object.prototype.toString.call(r);return l==="[object Window]"||l==="[object global]"}function Cu(r){return"nodeType"in r}function vt(r){var l,i;return r?Ml(r)?r:Cu(r)&&(l=(i=r.ownerDocument)==null?void 0:i.defaultView)!=null?l:window:window}function Eu(r){const{Document:l}=vt(r);return r instanceof l}function qi(r){return Ml(r)?!1:r instanceof vt(r).HTMLElement}function eh(r){return r instanceof vt(r).SVGElement}function Ol(r){return r?Ml(r)?r.document:Cu(r)?Eu(r)?r:qi(r)||eh(r)?r.ownerDocument:document:document:document}const on=Er?v.useLayoutEffect:v.useEffect;function Ar(r){const l=v.useRef(r);return on(()=>{l.current=r}),v.useCallback(function(){for(var i=arguments.length,s=new Array(i),u=0;u<i;u++)s[u]=arguments[u];return l.current==null?void 0:l.current(...s)},[])}function uv(){const r=v.useRef(null),l=v.useCallback((s,u)=>{r.current=setInterval(s,u)},[]),i=v.useCallback(()=>{r.current!==null&&(clearInterval(r.current),r.current=null)},[]);return[l,i]}function Li(r,l){l===void 0&&(l=[r]);const i=v.useRef(r);return on(()=>{i.current!==r&&(i.current=r)},l),i}function Zi(r,l){const i=v.useRef();return v.useMemo(()=>{const s=r(i.current);return i.current=s,s},[...l])}function gr(r){const l=Ar(r),i=v.useRef(null),s=v.useCallback(u=>{u!==i.current&&(l==null||l(u,i.current)),i.current=u},[]);return[i,s]}function br(r){const l=v.useRef();return v.useEffect(()=>{l.current=r},[r]),l.current}let Fc={};function Vi(r,l){return v.useMemo(()=>{if(l)return l;const i=Fc[r]==null?0:Fc[r]+1;return Fc[r]=i,r+"-"+i},[r,l])}function th(r){return function(l){for(var i=arguments.length,s=new Array(i>1?i-1:0),u=1;u<i;u++)s[u-1]=arguments[u];return s.reduce((d,f)=>{const h=Object.entries(f);for(const[m,b]of h){const x=d[m];x!=null&&(d[m]=x+r*b)}return d},{...l})}}const Rl=th(1),vr=th(-1);function dv(r){return"clientX"in r&&"clientY"in r}function Nr(r){if(!r)return!1;const{KeyboardEvent:l}=vt(r.target);return l&&r instanceof l}function fv(r){if(!r)return!1;const{TouchEvent:l}=vt(r.target);return l&&r instanceof l}function yr(r){if(fv(r)){if(r.touches&&r.touches.length){const{clientX:l,clientY:i}=r.touches[0];return{x:l,y:i}}else if(r.changedTouches&&r.changedTouches.length){const{clientX:l,clientY:i}=r.changedTouches[0];return{x:l,y:i}}}return dv(r)?{x:r.clientX,y:r.clientY}:null}const ba=Object.freeze({Translate:{toString(r){if(!r)return;const{x:l,y:i}=r;return"translate3d("+(l?Math.round(l):0)+"px, "+(i?Math.round(i):0)+"px, 0)"}},Scale:{toString(r){if(!r)return;const{scaleX:l,scaleY:i}=r;return"scaleX("+l+") scaleY("+i+")"}},Transform:{toString(r){if(r)return[ba.Translate.toString(r),ba.Scale.toString(r)].join(" ")}},Transition:{toString(r){let{property:l,duration:i,easing:s}=r;return l+" "+i+"ms "+s}}}),J1="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function pv(r){return r.matches(J1)?r:r.querySelector(J1)}const hv={display:"none"};function mv(r){let{id:l,value:i}=r;return Be.createElement("div",{id:l,style:hv},i)}function gv(r){let{id:l,announcement:i,ariaLiveType:s="assertive"}=r;const u={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return Be.createElement("div",{id:l,style:u,role:"status","aria-live":s,"aria-atomic":!0},i)}function bv(){const[r,l]=v.useState("");return{announce:v.useCallback(s=>{s!=null&&l(s)},[]),announcement:r}}const nh=v.createContext(null);function vv(r){const l=v.useContext(nh);v.useEffect(()=>{if(!l)throw new Error("useDndMonitor must be used within a children of <DndContext>");return l(r)},[r,l])}function yv(){const[r]=v.useState(()=>new Set),l=v.useCallback(s=>(r.add(s),()=>r.delete(s)),[r]);return[v.useCallback(s=>{let{type:u,event:d}=s;r.forEach(f=>{var h;return(h=f[u])==null?void 0:h.call(f,d)})},[r]),l]}const xv={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Sv={onDragStart(r){let{active:l}=r;return"Picked up draggable item "+l.id+"."},onDragOver(r){let{active:l,over:i}=r;return i?"Draggable item "+l.id+" was moved over droppable area "+i.id+".":"Draggable item "+l.id+" is no longer over a droppable area."},onDragEnd(r){let{active:l,over:i}=r;return i?"Draggable item "+l.id+" was dropped over droppable area "+i.id:"Draggable item "+l.id+" was dropped."},onDragCancel(r){let{active:l}=r;return"Dragging was cancelled. Draggable item "+l.id+" was dropped."}};function wv(r){let{announcements:l=Sv,container:i,hiddenTextDescribedById:s,screenReaderInstructions:u=xv}=r;const{announce:d,announcement:f}=bv(),h=Vi("DndLiveRegion"),[m,b]=v.useState(!1);if(v.useEffect(()=>{b(!0)},[]),vv(v.useMemo(()=>({onDragStart(S){let{active:A}=S;d(l.onDragStart({active:A}))},onDragMove(S){let{active:A,over:T}=S;l.onDragMove&&d(l.onDragMove({active:A,over:T}))},onDragOver(S){let{active:A,over:T}=S;d(l.onDragOver({active:A,over:T}))},onDragEnd(S){let{active:A,over:T}=S;d(l.onDragEnd({active:A,over:T}))},onDragCancel(S){let{active:A,over:T}=S;d(l.onDragCancel({active:A,over:T}))}}),[d,l])),!m)return null;const x=Be.createElement(Be.Fragment,null,Be.createElement(mv,{id:s,value:u.draggable}),Be.createElement(gv,{id:h,announcement:f}));return i?Ri.createPortal(x,i):x}var et;(function(r){r.DragStart="dragStart",r.DragMove="dragMove",r.DragEnd="dragEnd",r.DragCancel="dragCancel",r.DragOver="dragOver",r.RegisterDroppable="registerDroppable",r.SetDroppableDisabled="setDroppableDisabled",r.UnregisterDroppable="unregisterDroppable"})(et||(et={}));function xr(){}function Cv(r,l){return v.useMemo(()=>({sensor:r,options:l??{}}),[r,l])}function Ev(){for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return v.useMemo(()=>[...l].filter(s=>s!=null),[...l])}const cn=Object.freeze({x:0,y:0});function Av(r,l){return Math.sqrt(Math.pow(r.x-l.x,2)+Math.pow(r.y-l.y,2))}function Nv(r,l){const i=yr(r);if(!i)return"0 0";const s={x:(i.x-l.left)/l.width*100,y:(i.y-l.top)/l.height*100};return s.x+"% "+s.y+"%"}function Tv(r,l){let{data:{value:i}}=r,{data:{value:s}}=l;return i-s}function Dv(r,l){let{data:{value:i}}=r,{data:{value:s}}=l;return s-i}function F1(r){let{left:l,top:i,height:s,width:u}=r;return[{x:l,y:i},{x:l+u,y:i},{x:l,y:i+s},{x:l+u,y:i+s}]}function kv(r,l){if(!r||r.length===0)return null;const[i]=r;return i[l]}const Rv=r=>{let{collisionRect:l,droppableRects:i,droppableContainers:s}=r;const u=F1(l),d=[];for(const f of s){const{id:h}=f,m=i.get(h);if(m){const b=F1(m),x=u.reduce((A,T,j)=>A+Av(b[j],T),0),S=Number((x/4).toFixed(4));d.push({id:h,data:{droppableContainer:f,value:S}})}}return d.sort(Tv)};function Mv(r,l){const i=Math.max(l.top,r.top),s=Math.max(l.left,r.left),u=Math.min(l.left+l.width,r.left+r.width),d=Math.min(l.top+l.height,r.top+r.height),f=u-s,h=d-i;if(s<u&&i<d){const m=l.width*l.height,b=r.width*r.height,x=f*h,S=x/(m+b-x);return Number(S.toFixed(4))}return 0}const Ov=r=>{let{collisionRect:l,droppableRects:i,droppableContainers:s}=r;const u=[];for(const d of s){const{id:f}=d,h=i.get(f);if(h){const m=Mv(h,l);m>0&&u.push({id:f,data:{droppableContainer:d,value:m}})}}return u.sort(Dv)};function zv(r,l,i){return{...r,scaleX:l&&i?l.width/i.width:1,scaleY:l&&i?l.height/i.height:1}}function ah(r,l){return r&&l?{x:r.left-l.left,y:r.top-l.top}:cn}function jv(r){return function(i){for(var s=arguments.length,u=new Array(s>1?s-1:0),d=1;d<s;d++)u[d-1]=arguments[d];return u.reduce((f,h)=>({...f,top:f.top+r*h.y,bottom:f.bottom+r*h.y,left:f.left+r*h.x,right:f.right+r*h.x}),{...i})}}const _v=jv(1);function lh(r){if(r.startsWith("matrix3d(")){const l=r.slice(9,-1).split(/, /);return{x:+l[12],y:+l[13],scaleX:+l[0],scaleY:+l[5]}}else if(r.startsWith("matrix(")){const l=r.slice(7,-1).split(/, /);return{x:+l[4],y:+l[5],scaleX:+l[0],scaleY:+l[3]}}return null}function Lv(r,l,i){const s=lh(l);if(!s)return r;const{scaleX:u,scaleY:d,x:f,y:h}=s,m=r.left-f-(1-u)*parseFloat(i),b=r.top-h-(1-d)*parseFloat(i.slice(i.indexOf(" ")+1)),x=u?r.width/u:r.width,S=d?r.height/d:r.height;return{width:x,height:S,top:b,right:m+x,bottom:b+S,left:m}}const Uv={ignoreTransform:!1};function zl(r,l){l===void 0&&(l=Uv);let i=r.getBoundingClientRect();if(l.ignoreTransform){const{transform:b,transformOrigin:x}=vt(r).getComputedStyle(r);b&&(i=Lv(i,b,x))}const{top:s,left:u,width:d,height:f,bottom:h,right:m}=i;return{top:s,left:u,width:d,height:f,bottom:h,right:m}}function P1(r){return zl(r,{ignoreTransform:!0})}function Hv(r){const l=r.innerWidth,i=r.innerHeight;return{top:0,left:0,right:l,bottom:i,width:l,height:i}}function Bv(r,l){return l===void 0&&(l=vt(r).getComputedStyle(r)),l.position==="fixed"}function qv(r,l){l===void 0&&(l=vt(r).getComputedStyle(r));const i=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(u=>{const d=l[u];return typeof d=="string"?i.test(d):!1})}function Au(r,l){const i=[];function s(u){if(l!=null&&i.length>=l||!u)return i;if(Eu(u)&&u.scrollingElement!=null&&!i.includes(u.scrollingElement))return i.push(u.scrollingElement),i;if(!qi(u)||eh(u)||i.includes(u))return i;const d=vt(r).getComputedStyle(u);return u!==r&&qv(u,d)&&i.push(u),Bv(u,d)?i:s(u.parentNode)}return r?s(r):i}function ih(r){const[l]=Au(r,1);return l??null}function Pc(r){return!Er||!r?null:Ml(r)?r:Cu(r)?Eu(r)||r===Ol(r).scrollingElement?window:qi(r)?r:null:null}function sh(r){return Ml(r)?r.scrollX:r.scrollLeft}function rh(r){return Ml(r)?r.scrollY:r.scrollTop}function ru(r){return{x:sh(r),y:rh(r)}}var lt;(function(r){r[r.Forward=1]="Forward",r[r.Backward=-1]="Backward"})(lt||(lt={}));function oh(r){return!Er||!r?!1:r===document.scrollingElement}function ch(r){const l={x:0,y:0},i=oh(r)?{height:window.innerHeight,width:window.innerWidth}:{height:r.clientHeight,width:r.clientWidth},s={x:r.scrollWidth-i.width,y:r.scrollHeight-i.height},u=r.scrollTop<=l.y,d=r.scrollLeft<=l.x,f=r.scrollTop>=s.y,h=r.scrollLeft>=s.x;return{isTop:u,isLeft:d,isBottom:f,isRight:h,maxScroll:s,minScroll:l}}const Zv={x:.2,y:.2};function Vv(r,l,i,s,u){let{top:d,left:f,right:h,bottom:m}=i;s===void 0&&(s=10),u===void 0&&(u=Zv);const{isTop:b,isBottom:x,isLeft:S,isRight:A}=ch(r),T={x:0,y:0},j={x:0,y:0},O={height:l.height*u.y,width:l.width*u.x};return!b&&d<=l.top+O.height?(T.y=lt.Backward,j.y=s*Math.abs((l.top+O.height-d)/O.height)):!x&&m>=l.bottom-O.height&&(T.y=lt.Forward,j.y=s*Math.abs((l.bottom-O.height-m)/O.height)),!A&&h>=l.right-O.width?(T.x=lt.Forward,j.x=s*Math.abs((l.right-O.width-h)/O.width)):!S&&f<=l.left+O.width&&(T.x=lt.Backward,j.x=s*Math.abs((l.left+O.width-f)/O.width)),{direction:T,speed:j}}function Yv(r){if(r===document.scrollingElement){const{innerWidth:d,innerHeight:f}=window;return{top:0,left:0,right:d,bottom:f,width:d,height:f}}const{top:l,left:i,right:s,bottom:u}=r.getBoundingClientRect();return{top:l,left:i,right:s,bottom:u,width:r.clientWidth,height:r.clientHeight}}function uh(r){return r.reduce((l,i)=>Rl(l,ru(i)),cn)}function Gv(r){return r.reduce((l,i)=>l+sh(i),0)}function Xv(r){return r.reduce((l,i)=>l+rh(i),0)}function dh(r,l){if(l===void 0&&(l=zl),!r)return;const{top:i,left:s,bottom:u,right:d}=l(r);ih(r)&&(u<=0||d<=0||i>=window.innerHeight||s>=window.innerWidth)&&r.scrollIntoView({block:"center",inline:"center"})}const Qv=[["x",["left","right"],Gv],["y",["top","bottom"],Xv]];class Nu{constructor(l,i){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const s=Au(i),u=uh(s);this.rect={...l},this.width=l.width,this.height=l.height;for(const[d,f,h]of Qv)for(const m of f)Object.defineProperty(this,m,{get:()=>{const b=h(s),x=u[d]-b;return this.rect[m]+x},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class zi{constructor(l){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(i=>{var s;return(s=this.target)==null?void 0:s.removeEventListener(...i)})},this.target=l}add(l,i,s){var u;(u=this.target)==null||u.addEventListener(l,i,s),this.listeners.push([l,i,s])}}function Iv(r){const{EventTarget:l}=vt(r);return r instanceof l?r:Ol(r)}function Wc(r,l){const i=Math.abs(r.x),s=Math.abs(r.y);return typeof l=="number"?Math.sqrt(i**2+s**2)>l:"x"in l&&"y"in l?i>l.x&&s>l.y:"x"in l?i>l.x:"y"in l?s>l.y:!1}var en;(function(r){r.Click="click",r.DragStart="dragstart",r.Keydown="keydown",r.ContextMenu="contextmenu",r.Resize="resize",r.SelectionChange="selectionchange",r.VisibilityChange="visibilitychange"})(en||(en={}));function W1(r){r.preventDefault()}function Kv(r){r.stopPropagation()}var Ee;(function(r){r.Space="Space",r.Down="ArrowDown",r.Right="ArrowRight",r.Left="ArrowLeft",r.Up="ArrowUp",r.Esc="Escape",r.Enter="Enter",r.Tab="Tab"})(Ee||(Ee={}));const fh={start:[Ee.Space,Ee.Enter],cancel:[Ee.Esc],end:[Ee.Space,Ee.Enter,Ee.Tab]},$v=(r,l)=>{let{currentCoordinates:i}=l;switch(r.code){case Ee.Right:return{...i,x:i.x+25};case Ee.Left:return{...i,x:i.x-25};case Ee.Down:return{...i,y:i.y+25};case Ee.Up:return{...i,y:i.y-25}}};class ph{constructor(l){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=l;const{event:{target:i}}=l;this.props=l,this.listeners=new zi(Ol(i)),this.windowListeners=new zi(vt(i)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(en.Resize,this.handleCancel),this.windowListeners.add(en.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(en.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:l,onStart:i}=this.props,s=l.node.current;s&&dh(s),i(cn)}handleKeyDown(l){if(Nr(l)){const{active:i,context:s,options:u}=this.props,{keyboardCodes:d=fh,coordinateGetter:f=$v,scrollBehavior:h="smooth"}=u,{code:m}=l;if(d.end.includes(m)){this.handleEnd(l);return}if(d.cancel.includes(m)){this.handleCancel(l);return}const{collisionRect:b}=s.current,x=b?{x:b.left,y:b.top}:cn;this.referenceCoordinates||(this.referenceCoordinates=x);const S=f(l,{active:i,context:s.current,currentCoordinates:x});if(S){const A=vr(S,x),T={x:0,y:0},{scrollableAncestors:j}=s.current;for(const O of j){const Y=l.code,{isTop:Z,isRight:G,isLeft:Q,isBottom:I,maxScroll:F,minScroll:V}=ch(O),H=Yv(O),J={x:Math.min(Y===Ee.Right?H.right-H.width/2:H.right,Math.max(Y===Ee.Right?H.left:H.left+H.width/2,S.x)),y:Math.min(Y===Ee.Down?H.bottom-H.height/2:H.bottom,Math.max(Y===Ee.Down?H.top:H.top+H.height/2,S.y))},ne=Y===Ee.Right&&!G||Y===Ee.Left&&!Q,re=Y===Ee.Down&&!I||Y===Ee.Up&&!Z;if(ne&&J.x!==S.x){const oe=O.scrollLeft+A.x,ge=Y===Ee.Right&&oe<=F.x||Y===Ee.Left&&oe>=V.x;if(ge&&!A.y){O.scrollTo({left:oe,behavior:h});return}ge?T.x=O.scrollLeft-oe:T.x=Y===Ee.Right?O.scrollLeft-F.x:O.scrollLeft-V.x,T.x&&O.scrollBy({left:-T.x,behavior:h});break}else if(re&&J.y!==S.y){const oe=O.scrollTop+A.y,ge=Y===Ee.Down&&oe<=F.y||Y===Ee.Up&&oe>=V.y;if(ge&&!A.x){O.scrollTo({top:oe,behavior:h});return}ge?T.y=O.scrollTop-oe:T.y=Y===Ee.Down?O.scrollTop-F.y:O.scrollTop-V.y,T.y&&O.scrollBy({top:-T.y,behavior:h});break}}this.handleMove(l,Rl(vr(S,this.referenceCoordinates),T))}}}handleMove(l,i){const{onMove:s}=this.props;l.preventDefault(),s(i)}handleEnd(l){const{onEnd:i}=this.props;l.preventDefault(),this.detach(),i()}handleCancel(l){const{onCancel:i}=this.props;l.preventDefault(),this.detach(),i()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}ph.activators=[{eventName:"onKeyDown",handler:(r,l,i)=>{let{keyboardCodes:s=fh,onActivation:u}=l,{active:d}=i;const{code:f}=r.nativeEvent;if(s.start.includes(f)){const h=d.activatorNode.current;return h&&r.target!==h?!1:(r.preventDefault(),u==null||u({event:r.nativeEvent}),!0)}return!1}}];function ep(r){return!!(r&&"distance"in r)}function tp(r){return!!(r&&"delay"in r)}class Tu{constructor(l,i,s){var u;s===void 0&&(s=Iv(l.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=l,this.events=i;const{event:d}=l,{target:f}=d;this.props=l,this.events=i,this.document=Ol(f),this.documentListeners=new zi(this.document),this.listeners=new zi(s),this.windowListeners=new zi(vt(f)),this.initialCoordinates=(u=yr(d))!=null?u:cn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:l,props:{options:{activationConstraint:i,bypassActivationConstraint:s}}}=this;if(this.listeners.add(l.move.name,this.handleMove,{passive:!1}),this.listeners.add(l.end.name,this.handleEnd),l.cancel&&this.listeners.add(l.cancel.name,this.handleCancel),this.windowListeners.add(en.Resize,this.handleCancel),this.windowListeners.add(en.DragStart,W1),this.windowListeners.add(en.VisibilityChange,this.handleCancel),this.windowListeners.add(en.ContextMenu,W1),this.documentListeners.add(en.Keydown,this.handleKeydown),i){if(s!=null&&s({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(tp(i)){this.timeoutId=setTimeout(this.handleStart,i.delay),this.handlePending(i);return}if(ep(i)){this.handlePending(i);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(l,i){const{active:s,onPending:u}=this.props;u(s,l,this.initialCoordinates,i)}handleStart(){const{initialCoordinates:l}=this,{onStart:i}=this.props;l&&(this.activated=!0,this.documentListeners.add(en.Click,Kv,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(en.SelectionChange,this.removeTextSelection),i(l))}handleMove(l){var i;const{activated:s,initialCoordinates:u,props:d}=this,{onMove:f,options:{activationConstraint:h}}=d;if(!u)return;const m=(i=yr(l))!=null?i:cn,b=vr(u,m);if(!s&&h){if(ep(h)){if(h.tolerance!=null&&Wc(b,h.tolerance))return this.handleCancel();if(Wc(b,h.distance))return this.handleStart()}if(tp(h)&&Wc(b,h.tolerance))return this.handleCancel();this.handlePending(h,b);return}l.cancelable&&l.preventDefault(),f(m)}handleEnd(){const{onAbort:l,onEnd:i}=this.props;this.detach(),this.activated||l(this.props.active),i()}handleCancel(){const{onAbort:l,onCancel:i}=this.props;this.detach(),this.activated||l(this.props.active),i()}handleKeydown(l){l.code===Ee.Esc&&this.handleCancel()}removeTextSelection(){var l;(l=this.document.getSelection())==null||l.removeAllRanges()}}const Jv={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Du extends Tu{constructor(l){const{event:i}=l,s=Ol(i.target);super(l,Jv,s)}}Du.activators=[{eventName:"onPointerDown",handler:(r,l)=>{let{nativeEvent:i}=r,{onActivation:s}=l;return!i.isPrimary||i.button!==0?!1:(s==null||s({event:i}),!0)}}];const Fv={move:{name:"mousemove"},end:{name:"mouseup"}};var ou;(function(r){r[r.RightClick=2]="RightClick"})(ou||(ou={}));class Pv extends Tu{constructor(l){super(l,Fv,Ol(l.event.target))}}Pv.activators=[{eventName:"onMouseDown",handler:(r,l)=>{let{nativeEvent:i}=r,{onActivation:s}=l;return i.button===ou.RightClick?!1:(s==null||s({event:i}),!0)}}];const eu={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class Wv extends Tu{constructor(l){super(l,eu)}static setup(){return window.addEventListener(eu.move.name,l,{capture:!1,passive:!1}),function(){window.removeEventListener(eu.move.name,l)};function l(){}}}Wv.activators=[{eventName:"onTouchStart",handler:(r,l)=>{let{nativeEvent:i}=r,{onActivation:s}=l;const{touches:u}=i;return u.length>1?!1:(s==null||s({event:i}),!0)}}];var ji;(function(r){r[r.Pointer=0]="Pointer",r[r.DraggableRect=1]="DraggableRect"})(ji||(ji={}));var Sr;(function(r){r[r.TreeOrder=0]="TreeOrder",r[r.ReversedTreeOrder=1]="ReversedTreeOrder"})(Sr||(Sr={}));function ey(r){let{acceleration:l,activator:i=ji.Pointer,canScroll:s,draggingRect:u,enabled:d,interval:f=5,order:h=Sr.TreeOrder,pointerCoordinates:m,scrollableAncestors:b,scrollableAncestorRects:x,delta:S,threshold:A}=r;const T=ny({delta:S,disabled:!d}),[j,O]=uv(),Y=v.useRef({x:0,y:0}),Z=v.useRef({x:0,y:0}),G=v.useMemo(()=>{switch(i){case ji.Pointer:return m?{top:m.y,bottom:m.y,left:m.x,right:m.x}:null;case ji.DraggableRect:return u}},[i,u,m]),Q=v.useRef(null),I=v.useCallback(()=>{const V=Q.current;if(!V)return;const H=Y.current.x*Z.current.x,J=Y.current.y*Z.current.y;V.scrollBy(H,J)},[]),F=v.useMemo(()=>h===Sr.TreeOrder?[...b].reverse():b,[h,b]);v.useEffect(()=>{if(!d||!b.length||!G){O();return}for(const V of F){if((s==null?void 0:s(V))===!1)continue;const H=b.indexOf(V),J=x[H];if(!J)continue;const{direction:ne,speed:re}=Vv(V,J,G,l,A);for(const oe of["x","y"])T[oe][ne[oe]]||(re[oe]=0,ne[oe]=0);if(re.x>0||re.y>0){O(),Q.current=V,j(I,f),Y.current=re,Z.current=ne;return}}Y.current={x:0,y:0},Z.current={x:0,y:0},O()},[l,I,s,O,d,f,JSON.stringify(G),JSON.stringify(T),j,b,F,x,JSON.stringify(A)])}const ty={x:{[lt.Backward]:!1,[lt.Forward]:!1},y:{[lt.Backward]:!1,[lt.Forward]:!1}};function ny(r){let{delta:l,disabled:i}=r;const s=br(l);return Zi(u=>{if(i||!s||!u)return ty;const d={x:Math.sign(l.x-s.x),y:Math.sign(l.y-s.y)};return{x:{[lt.Backward]:u.x[lt.Backward]||d.x===-1,[lt.Forward]:u.x[lt.Forward]||d.x===1},y:{[lt.Backward]:u.y[lt.Backward]||d.y===-1,[lt.Forward]:u.y[lt.Forward]||d.y===1}}},[i,l,s])}function ay(r,l){const i=l!=null?r.get(l):void 0,s=i?i.node.current:null;return Zi(u=>{var d;return l==null?null:(d=s??u)!=null?d:null},[s,l])}function ly(r,l){return v.useMemo(()=>r.reduce((i,s)=>{const{sensor:u}=s,d=u.activators.map(f=>({eventName:f.eventName,handler:l(f.handler,s)}));return[...i,...d]},[]),[r,l])}var Ui;(function(r){r[r.Always=0]="Always",r[r.BeforeDragging=1]="BeforeDragging",r[r.WhileDragging=2]="WhileDragging"})(Ui||(Ui={}));var cu;(function(r){r.Optimized="optimized"})(cu||(cu={}));const np=new Map;function iy(r,l){let{dragging:i,dependencies:s,config:u}=l;const[d,f]=v.useState(null),{frequency:h,measure:m,strategy:b}=u,x=v.useRef(r),S=Y(),A=Li(S),T=v.useCallback(function(Z){Z===void 0&&(Z=[]),!A.current&&f(G=>G===null?Z:G.concat(Z.filter(Q=>!G.includes(Q))))},[A]),j=v.useRef(null),O=Zi(Z=>{if(S&&!i)return np;if(!Z||Z===np||x.current!==r||d!=null){const G=new Map;for(let Q of r){if(!Q)continue;if(d&&d.length>0&&!d.includes(Q.id)&&Q.rect.current){G.set(Q.id,Q.rect.current);continue}const I=Q.node.current,F=I?new Nu(m(I),I):null;Q.rect.current=F,F&&G.set(Q.id,F)}return G}return Z},[r,d,i,S,m]);return v.useEffect(()=>{x.current=r},[r]),v.useEffect(()=>{S||T()},[i,S]),v.useEffect(()=>{d&&d.length>0&&f(null)},[JSON.stringify(d)]),v.useEffect(()=>{S||typeof h!="number"||j.current!==null||(j.current=setTimeout(()=>{T(),j.current=null},h))},[h,S,T,...s]),{droppableRects:O,measureDroppableContainers:T,measuringScheduled:d!=null};function Y(){switch(b){case Ui.Always:return!1;case Ui.BeforeDragging:return i;default:return!i}}}function ku(r,l){return Zi(i=>r?i||(typeof l=="function"?l(r):r):null,[l,r])}function sy(r,l){return ku(r,l)}function ry(r){let{callback:l,disabled:i}=r;const s=Ar(l),u=v.useMemo(()=>{if(i||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:d}=window;return new d(s)},[s,i]);return v.useEffect(()=>()=>u==null?void 0:u.disconnect(),[u]),u}function Tr(r){let{callback:l,disabled:i}=r;const s=Ar(l),u=v.useMemo(()=>{if(i||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:d}=window;return new d(s)},[i]);return v.useEffect(()=>()=>u==null?void 0:u.disconnect(),[u]),u}function oy(r){return new Nu(zl(r),r)}function ap(r,l,i){l===void 0&&(l=oy);const[s,u]=v.useState(null);function d(){u(m=>{if(!r)return null;if(r.isConnected===!1){var b;return(b=m??i)!=null?b:null}const x=l(r);return JSON.stringify(m)===JSON.stringify(x)?m:x})}const f=ry({callback(m){if(r)for(const b of m){const{type:x,target:S}=b;if(x==="childList"&&S instanceof HTMLElement&&S.contains(r)){d();break}}}}),h=Tr({callback:d});return on(()=>{d(),r?(h==null||h.observe(r),f==null||f.observe(document.body,{childList:!0,subtree:!0})):(h==null||h.disconnect(),f==null||f.disconnect())},[r]),s}function cy(r){const l=ku(r);return ah(r,l)}const lp=[];function uy(r){const l=v.useRef(r),i=Zi(s=>r?s&&s!==lp&&r&&l.current&&r.parentNode===l.current.parentNode?s:Au(r):lp,[r]);return v.useEffect(()=>{l.current=r},[r]),i}function dy(r){const[l,i]=v.useState(null),s=v.useRef(r),u=v.useCallback(d=>{const f=Pc(d.target);f&&i(h=>h?(h.set(f,ru(f)),new Map(h)):null)},[]);return v.useEffect(()=>{const d=s.current;if(r!==d){f(d);const h=r.map(m=>{const b=Pc(m);return b?(b.addEventListener("scroll",u,{passive:!0}),[b,ru(b)]):null}).filter(m=>m!=null);i(h.length?new Map(h):null),s.current=r}return()=>{f(r),f(d)};function f(h){h.forEach(m=>{const b=Pc(m);b==null||b.removeEventListener("scroll",u)})}},[u,r]),v.useMemo(()=>r.length?l?Array.from(l.values()).reduce((d,f)=>Rl(d,f),cn):uh(r):cn,[r,l])}function ip(r,l){l===void 0&&(l=[]);const i=v.useRef(null);return v.useEffect(()=>{i.current=null},l),v.useEffect(()=>{const s=r!==cn;s&&!i.current&&(i.current=r),!s&&i.current&&(i.current=null)},[r]),i.current?vr(r,i.current):cn}function fy(r){v.useEffect(()=>{if(!Er)return;const l=r.map(i=>{let{sensor:s}=i;return s.setup==null?void 0:s.setup()});return()=>{for(const i of l)i==null||i()}},r.map(l=>{let{sensor:i}=l;return i}))}function py(r,l){return v.useMemo(()=>r.reduce((i,s)=>{let{eventName:u,handler:d}=s;return i[u]=f=>{d(f,l)},i},{}),[r,l])}function hh(r){return v.useMemo(()=>r?Hv(r):null,[r])}const sp=[];function hy(r,l){l===void 0&&(l=zl);const[i]=r,s=hh(i?vt(i):null),[u,d]=v.useState(sp);function f(){d(()=>r.length?r.map(m=>oh(m)?s:new Nu(l(m),m)):sp)}const h=Tr({callback:f});return on(()=>{h==null||h.disconnect(),f(),r.forEach(m=>h==null?void 0:h.observe(m))},[r]),u}function mh(r){if(!r)return null;if(r.children.length>1)return r;const l=r.children[0];return qi(l)?l:r}function my(r){let{measure:l}=r;const[i,s]=v.useState(null),u=v.useCallback(b=>{for(const{target:x}of b)if(qi(x)){s(S=>{const A=l(x);return S?{...S,width:A.width,height:A.height}:A});break}},[l]),d=Tr({callback:u}),f=v.useCallback(b=>{const x=mh(b);d==null||d.disconnect(),x&&(d==null||d.observe(x)),s(x?l(x):null)},[l,d]),[h,m]=gr(f);return v.useMemo(()=>({nodeRef:h,rect:i,setRef:m}),[i,h,m])}const gy=[{sensor:Du,options:{}},{sensor:ph,options:{}}],by={current:{}},fr={draggable:{measure:P1},droppable:{measure:P1,strategy:Ui.WhileDragging,frequency:cu.Optimized},dragOverlay:{measure:zl}};class _i extends Map{get(l){var i;return l!=null&&(i=super.get(l))!=null?i:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(l=>{let{disabled:i}=l;return!i})}getNodeFor(l){var i,s;return(i=(s=this.get(l))==null?void 0:s.node.current)!=null?i:void 0}}const vy={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new _i,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:xr},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:fr,measureDroppableContainers:xr,windowRect:null,measuringScheduled:!1},gh={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:xr,draggableNodes:new Map,over:null,measureDroppableContainers:xr},Yi=v.createContext(gh),bh=v.createContext(vy);function yy(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new _i}}}function xy(r,l){switch(l.type){case et.DragStart:return{...r,draggable:{...r.draggable,initialCoordinates:l.initialCoordinates,active:l.active}};case et.DragMove:return r.draggable.active==null?r:{...r,draggable:{...r.draggable,translate:{x:l.coordinates.x-r.draggable.initialCoordinates.x,y:l.coordinates.y-r.draggable.initialCoordinates.y}}};case et.DragEnd:case et.DragCancel:return{...r,draggable:{...r.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case et.RegisterDroppable:{const{element:i}=l,{id:s}=i,u=new _i(r.droppable.containers);return u.set(s,i),{...r,droppable:{...r.droppable,containers:u}}}case et.SetDroppableDisabled:{const{id:i,key:s,disabled:u}=l,d=r.droppable.containers.get(i);if(!d||s!==d.key)return r;const f=new _i(r.droppable.containers);return f.set(i,{...d,disabled:u}),{...r,droppable:{...r.droppable,containers:f}}}case et.UnregisterDroppable:{const{id:i,key:s}=l,u=r.droppable.containers.get(i);if(!u||s!==u.key)return r;const d=new _i(r.droppable.containers);return d.delete(i),{...r,droppable:{...r.droppable,containers:d}}}default:return r}}function Sy(r){let{disabled:l}=r;const{active:i,activatorEvent:s,draggableNodes:u}=v.useContext(Yi),d=br(s),f=br(i==null?void 0:i.id);return v.useEffect(()=>{if(!l&&!s&&d&&f!=null){if(!Nr(d)||document.activeElement===d.target)return;const h=u.get(f);if(!h)return;const{activatorNode:m,node:b}=h;if(!m.current&&!b.current)return;requestAnimationFrame(()=>{for(const x of[m.current,b.current]){if(!x)continue;const S=pv(x);if(S){S.focus();break}}})}},[s,l,u,f,d]),null}function vh(r,l){let{transform:i,...s}=l;return r!=null&&r.length?r.reduce((u,d)=>d({transform:u,...s}),i):i}function wy(r){return v.useMemo(()=>({draggable:{...fr.draggable,...r==null?void 0:r.draggable},droppable:{...fr.droppable,...r==null?void 0:r.droppable},dragOverlay:{...fr.dragOverlay,...r==null?void 0:r.dragOverlay}}),[r==null?void 0:r.draggable,r==null?void 0:r.droppable,r==null?void 0:r.dragOverlay])}function Cy(r){let{activeNode:l,measure:i,initialRect:s,config:u=!0}=r;const d=v.useRef(!1),{x:f,y:h}=typeof u=="boolean"?{x:u,y:u}:u;on(()=>{if(!f&&!h||!l){d.current=!1;return}if(d.current||!s)return;const b=l==null?void 0:l.node.current;if(!b||b.isConnected===!1)return;const x=i(b),S=ah(x,s);if(f||(S.x=0),h||(S.y=0),d.current=!0,Math.abs(S.x)>0||Math.abs(S.y)>0){const A=ih(b);A&&A.scrollBy({top:S.y,left:S.x})}},[l,f,h,s,i])}const Dr=v.createContext({...cn,scaleX:1,scaleY:1});var ga;(function(r){r[r.Uninitialized=0]="Uninitialized",r[r.Initializing=1]="Initializing",r[r.Initialized=2]="Initialized"})(ga||(ga={}));const Ey=v.memo(function(l){var i,s,u,d;let{id:f,accessibility:h,autoScroll:m=!0,children:b,sensors:x=gy,collisionDetection:S=Ov,measuring:A,modifiers:T,...j}=l;const O=v.useReducer(xy,void 0,yy),[Y,Z]=O,[G,Q]=yv(),[I,F]=v.useState(ga.Uninitialized),V=I===ga.Initialized,{draggable:{active:H,nodes:J,translate:ne},droppable:{containers:re}}=Y,oe=H!=null?J.get(H):null,ge=v.useRef({initial:null,translated:null}),Oe=v.useMemo(()=>{var Ye;return H!=null?{id:H,data:(Ye=oe==null?void 0:oe.data)!=null?Ye:by,rect:ge}:null},[H,oe]),qe=v.useRef(null),[Fe,_]=v.useState(null),[B,K]=v.useState(null),ae=Li(j,Object.values(j)),se=Vi("DndDescribedBy",f),C=v.useMemo(()=>re.getEnabled(),[re]),z=wy(A),{droppableRects:X,measureDroppableContainers:$,measuringScheduled:le}=iy(C,{dragging:V,dependencies:[ne.x,ne.y],config:z.droppable}),ee=ay(J,H),be=v.useMemo(()=>B?yr(B):null,[B]),Ue=Ya(),we=sy(ee,z.draggable.measure);Cy({activeNode:H!=null?J.get(H):null,config:Ue.layoutShiftCompensation,initialRect:we,measure:z.draggable.measure});const ye=ap(ee,z.draggable.measure,we),un=ap(ee?ee.parentElement:null),yt=v.useRef({activatorEvent:null,active:null,activeNode:ee,collisionRect:null,collisions:null,droppableRects:X,draggableNodes:J,draggingNode:null,draggingNodeRect:null,droppableContainers:re,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),xn=re.getNodeFor((i=yt.current.over)==null?void 0:i.id),it=my({measure:z.dragOverlay.measure}),dn=(s=it.nodeRef.current)!=null?s:ee,fn=V?(u=it.rect)!=null?u:ye:null,Gi=!!(it.nodeRef.current&&it.rect),jl=cy(Gi?null:ye),ya=hh(dn?vt(dn):null),Bt=uy(V?xn??ee:null),Gn=hy(Bt),Za=vh(T,{transform:{x:ne.x-jl.x,y:ne.y-jl.y,scaleX:1,scaleY:1},activatorEvent:B,active:Oe,activeNodeRect:ye,containerNodeRect:un,draggingNodeRect:fn,over:yt.current.over,overlayNodeRect:it.rect,scrollableAncestors:Bt,scrollableAncestorRects:Gn,windowRect:ya}),Xi=be?Rl(be,ne):null,dt=dy(Bt),kr=ip(dt),Qi=ip(dt,[ye]),Sn=Rl(Za,kr),tn=fn?_v(fn,Za):null,xa=Oe&&tn?S({active:Oe,collisionRect:tn,droppableRects:X,droppableContainers:C,pointerCoordinates:Xi}):null,_l=kv(xa,"id"),[pn,Ii]=v.useState(null),Sa=Gi?Za:Rl(Za,Qi),mt=zv(Sa,(d=pn==null?void 0:pn.rect)!=null?d:null,ye),qt=v.useRef(null),ft=v.useCallback((Ye,Ge)=>{let{sensor:tt,options:xt}=Ge;if(qe.current==null)return;const St=J.get(qe.current);if(!St)return;const pt=Ye.nativeEvent,wt=new tt({active:qe.current,activeNode:St,event:pt,options:xt,context:yt,onAbort(Pe){if(!J.get(Pe))return;const{onDragAbort:Rt}=ae.current,Vt={id:Pe};Rt==null||Rt(Vt),G({type:"onDragAbort",event:Vt})},onPending(Pe,nn,Rt,Vt){if(!J.get(Pe))return;const{onDragPending:Cn}=ae.current,an={id:Pe,constraint:nn,initialCoordinates:Rt,offset:Vt};Cn==null||Cn(an),G({type:"onDragPending",event:an})},onStart(Pe){const nn=qe.current;if(nn==null)return;const Rt=J.get(nn);if(!Rt)return;const{onDragStart:Vt}=ae.current,wn={activatorEvent:pt,active:{id:nn,data:Rt.data,rect:ge}};Ri.unstable_batchedUpdates(()=>{Vt==null||Vt(wn),F(ga.Initializing),Z({type:et.DragStart,initialCoordinates:Pe,active:nn}),G({type:"onDragStart",event:wn}),_(qt.current),K(pt)})},onMove(Pe){Z({type:et.DragMove,coordinates:Pe})},onEnd:Zt(et.DragEnd),onCancel:Zt(et.DragCancel)});qt.current=wt;function Zt(Pe){return async function(){const{active:Rt,collisions:Vt,over:wn,scrollAdjustedTranslate:Cn}=yt.current;let an=null;if(Rt&&Cn){const{cancelDrop:Xn}=ae.current;an={activatorEvent:pt,active:Rt,collisions:Vt,delta:Cn,over:wn},Pe===et.DragEnd&&typeof Xn=="function"&&await Promise.resolve(Xn(an))&&(Pe=et.DragCancel)}qe.current=null,Ri.unstable_batchedUpdates(()=>{Z({type:Pe}),F(ga.Uninitialized),Ii(null),_(null),K(null),qt.current=null;const Xn=Pe===et.DragEnd?"onDragEnd":"onDragCancel";if(an){const Yt=ae.current[Xn];Yt==null||Yt(an),G({type:Xn,event:an})}})}}},[J]),Rr=v.useCallback((Ye,Ge)=>(tt,xt)=>{const St=tt.nativeEvent,pt=J.get(xt);if(qe.current!==null||!pt||St.dndKit||St.defaultPrevented)return;const wt={active:pt};Ye(tt,Ge.options,wt)===!0&&(St.dndKit={capturedBy:Ge.sensor},qe.current=xt,ft(tt,Ge))},[J,ft]),Ki=ly(x,Rr);fy(x),on(()=>{ye&&I===ga.Initializing&&F(ga.Initialized)},[ye,I]),v.useEffect(()=>{const{onDragMove:Ye}=ae.current,{active:Ge,activatorEvent:tt,collisions:xt,over:St}=yt.current;if(!Ge||!tt)return;const pt={active:Ge,activatorEvent:tt,collisions:xt,delta:{x:Sn.x,y:Sn.y},over:St};Ri.unstable_batchedUpdates(()=>{Ye==null||Ye(pt),G({type:"onDragMove",event:pt})})},[Sn.x,Sn.y]),v.useEffect(()=>{const{active:Ye,activatorEvent:Ge,collisions:tt,droppableContainers:xt,scrollAdjustedTranslate:St}=yt.current;if(!Ye||qe.current==null||!Ge||!St)return;const{onDragOver:pt}=ae.current,wt=xt.get(_l),Zt=wt&&wt.rect.current?{id:wt.id,rect:wt.rect.current,data:wt.data,disabled:wt.disabled}:null,Pe={active:Ye,activatorEvent:Ge,collisions:tt,delta:{x:St.x,y:St.y},over:Zt};Ri.unstable_batchedUpdates(()=>{Ii(Zt),pt==null||pt(Pe),G({type:"onDragOver",event:Pe})})},[_l]),on(()=>{yt.current={activatorEvent:B,active:Oe,activeNode:ee,collisionRect:tn,collisions:xa,droppableRects:X,draggableNodes:J,draggingNode:dn,draggingNodeRect:fn,droppableContainers:re,over:pn,scrollableAncestors:Bt,scrollAdjustedTranslate:Sn},ge.current={initial:fn,translated:tn}},[Oe,ee,xa,tn,J,dn,fn,X,re,pn,Bt,Sn]),ey({...Ue,delta:ne,draggingRect:tn,pointerCoordinates:Xi,scrollableAncestors:Bt,scrollableAncestorRects:Gn});const Mr=v.useMemo(()=>({active:Oe,activeNode:ee,activeNodeRect:ye,activatorEvent:B,collisions:xa,containerNodeRect:un,dragOverlay:it,draggableNodes:J,droppableContainers:re,droppableRects:X,over:pn,measureDroppableContainers:$,scrollableAncestors:Bt,scrollableAncestorRects:Gn,measuringConfiguration:z,measuringScheduled:le,windowRect:ya}),[Oe,ee,ye,B,xa,un,it,J,re,X,pn,$,Bt,Gn,z,le,ya]),Va=v.useMemo(()=>({activatorEvent:B,activators:Ki,active:Oe,activeNodeRect:ye,ariaDescribedById:{draggable:se},dispatch:Z,draggableNodes:J,over:pn,measureDroppableContainers:$}),[B,Ki,Oe,ye,Z,se,J,pn,$]);return Be.createElement(nh.Provider,{value:Q},Be.createElement(Yi.Provider,{value:Va},Be.createElement(bh.Provider,{value:Mr},Be.createElement(Dr.Provider,{value:mt},b)),Be.createElement(Sy,{disabled:(h==null?void 0:h.restoreFocus)===!1})),Be.createElement(wv,{...h,hiddenTextDescribedById:se}));function Ya(){const Ye=(Fe==null?void 0:Fe.autoScrollEnabled)===!1,Ge=typeof m=="object"?m.enabled===!1:m===!1,tt=V&&!Ye&&!Ge;return typeof m=="object"?{...m,enabled:tt}:{enabled:tt}}}),Ay=v.createContext(null),rp="button",Ny="Draggable";function Ty(r){let{id:l,data:i,disabled:s=!1,attributes:u}=r;const d=Vi(Ny),{activators:f,activatorEvent:h,active:m,activeNodeRect:b,ariaDescribedById:x,draggableNodes:S,over:A}=v.useContext(Yi),{role:T=rp,roleDescription:j="draggable",tabIndex:O=0}=u??{},Y=(m==null?void 0:m.id)===l,Z=v.useContext(Y?Dr:Ay),[G,Q]=gr(),[I,F]=gr(),V=py(f,l),H=Li(i);on(()=>(S.set(l,{id:l,key:d,node:G,activatorNode:I,data:H}),()=>{const ne=S.get(l);ne&&ne.key===d&&S.delete(l)}),[S,l]);const J=v.useMemo(()=>({role:T,tabIndex:O,"aria-disabled":s,"aria-pressed":Y&&T===rp?!0:void 0,"aria-roledescription":j,"aria-describedby":x.draggable}),[s,T,O,Y,j,x.draggable]);return{active:m,activatorEvent:h,activeNodeRect:b,attributes:J,isDragging:Y,listeners:s?void 0:V,node:G,over:A,setNodeRef:Q,setActivatorNodeRef:F,transform:Z}}function yh(){return v.useContext(bh)}const Dy="Droppable",ky={timeout:25};function Ry(r){let{data:l,disabled:i=!1,id:s,resizeObserverConfig:u}=r;const d=Vi(Dy),{active:f,dispatch:h,over:m,measureDroppableContainers:b}=v.useContext(Yi),x=v.useRef({disabled:i}),S=v.useRef(!1),A=v.useRef(null),T=v.useRef(null),{disabled:j,updateMeasurementsFor:O,timeout:Y}={...ky,...u},Z=Li(O??s),G=v.useCallback(()=>{if(!S.current){S.current=!0;return}T.current!=null&&clearTimeout(T.current),T.current=setTimeout(()=>{b(Array.isArray(Z.current)?Z.current:[Z.current]),T.current=null},Y)},[Y]),Q=Tr({callback:G,disabled:j||!f}),I=v.useCallback((J,ne)=>{Q&&(ne&&(Q.unobserve(ne),S.current=!1),J&&Q.observe(J))},[Q]),[F,V]=gr(I),H=Li(l);return v.useEffect(()=>{!Q||!F.current||(Q.disconnect(),S.current=!1,Q.observe(F.current))},[F,Q]),v.useEffect(()=>(h({type:et.RegisterDroppable,element:{id:s,key:d,disabled:i,node:F,rect:A,data:H}}),()=>h({type:et.UnregisterDroppable,key:d,id:s})),[s]),v.useEffect(()=>{i!==x.current.disabled&&(h({type:et.SetDroppableDisabled,id:s,key:d,disabled:i}),x.current.disabled=i)},[s,d,i,h]),{active:f,rect:A,isOver:(m==null?void 0:m.id)===s,node:F,over:m,setNodeRef:V}}function My(r){let{animation:l,children:i}=r;const[s,u]=v.useState(null),[d,f]=v.useState(null),h=br(i);return!i&&!s&&h&&u(h),on(()=>{if(!d)return;const m=s==null?void 0:s.key,b=s==null?void 0:s.props.id;if(m==null||b==null){u(null);return}Promise.resolve(l(b,d)).then(()=>{u(null)})},[l,s,d]),Be.createElement(Be.Fragment,null,i,s?v.cloneElement(s,{ref:f}):null)}const Oy={x:0,y:0,scaleX:1,scaleY:1};function zy(r){let{children:l}=r;return Be.createElement(Yi.Provider,{value:gh},Be.createElement(Dr.Provider,{value:Oy},l))}const jy={position:"fixed",touchAction:"none"},_y=r=>Nr(r)?"transform 250ms ease":void 0,Ly=v.forwardRef((r,l)=>{let{as:i,activatorEvent:s,adjustScale:u,children:d,className:f,rect:h,style:m,transform:b,transition:x=_y}=r;if(!h)return null;const S=u?b:{...b,scaleX:1,scaleY:1},A={...jy,width:h.width,height:h.height,top:h.top,left:h.left,transform:ba.Transform.toString(S),transformOrigin:u&&s?Nv(s,h):void 0,transition:typeof x=="function"?x(s):x,...m};return Be.createElement(i,{className:f,style:A,ref:l},d)}),Uy=r=>l=>{let{active:i,dragOverlay:s}=l;const u={},{styles:d,className:f}=r;if(d!=null&&d.active)for(const[h,m]of Object.entries(d.active))m!==void 0&&(u[h]=i.node.style.getPropertyValue(h),i.node.style.setProperty(h,m));if(d!=null&&d.dragOverlay)for(const[h,m]of Object.entries(d.dragOverlay))m!==void 0&&s.node.style.setProperty(h,m);return f!=null&&f.active&&i.node.classList.add(f.active),f!=null&&f.dragOverlay&&s.node.classList.add(f.dragOverlay),function(){for(const[m,b]of Object.entries(u))i.node.style.setProperty(m,b);f!=null&&f.active&&i.node.classList.remove(f.active)}},Hy=r=>{let{transform:{initial:l,final:i}}=r;return[{transform:ba.Transform.toString(l)},{transform:ba.Transform.toString(i)}]},By={duration:250,easing:"ease",keyframes:Hy,sideEffects:Uy({styles:{active:{opacity:"0"}}})};function qy(r){let{config:l,draggableNodes:i,droppableContainers:s,measuringConfiguration:u}=r;return Ar((d,f)=>{if(l===null)return;const h=i.get(d);if(!h)return;const m=h.node.current;if(!m)return;const b=mh(f);if(!b)return;const{transform:x}=vt(f).getComputedStyle(f),S=lh(x);if(!S)return;const A=typeof l=="function"?l:Zy(l);return dh(m,u.draggable.measure),A({active:{id:d,data:h.data,node:m,rect:u.draggable.measure(m)},draggableNodes:i,dragOverlay:{node:f,rect:u.dragOverlay.measure(b)},droppableContainers:s,measuringConfiguration:u,transform:S})})}function Zy(r){const{duration:l,easing:i,sideEffects:s,keyframes:u}={...By,...r};return d=>{let{active:f,dragOverlay:h,transform:m,...b}=d;if(!l)return;const x={x:h.rect.left-f.rect.left,y:h.rect.top-f.rect.top},S={scaleX:m.scaleX!==1?f.rect.width*m.scaleX/h.rect.width:1,scaleY:m.scaleY!==1?f.rect.height*m.scaleY/h.rect.height:1},A={x:m.x-x.x,y:m.y-x.y,...S},T=u({...b,active:f,dragOverlay:h,transform:{initial:m,final:A}}),[j]=T,O=T[T.length-1];if(JSON.stringify(j)===JSON.stringify(O))return;const Y=s==null?void 0:s({active:f,dragOverlay:h,...b}),Z=h.node.animate(T,{duration:l,easing:i,fill:"forwards"});return new Promise(G=>{Z.onfinish=()=>{Y==null||Y(),G()}})}}let op=0;function Vy(r){return v.useMemo(()=>{if(r!=null)return op++,op},[r])}const Yy=Be.memo(r=>{let{adjustScale:l=!1,children:i,dropAnimation:s,style:u,transition:d,modifiers:f,wrapperElement:h="div",className:m,zIndex:b=999}=r;const{activatorEvent:x,active:S,activeNodeRect:A,containerNodeRect:T,draggableNodes:j,droppableContainers:O,dragOverlay:Y,over:Z,measuringConfiguration:G,scrollableAncestors:Q,scrollableAncestorRects:I,windowRect:F}=yh(),V=v.useContext(Dr),H=Vy(S==null?void 0:S.id),J=vh(f,{activatorEvent:x,active:S,activeNodeRect:A,containerNodeRect:T,draggingNodeRect:Y.rect,over:Z,overlayNodeRect:Y.rect,scrollableAncestors:Q,scrollableAncestorRects:I,transform:V,windowRect:F}),ne=ku(A),re=qy({config:s,draggableNodes:j,droppableContainers:O,measuringConfiguration:G}),oe=ne?Y.setRef:void 0;return Be.createElement(zy,null,Be.createElement(My,{animation:re},S&&H?Be.createElement(Ly,{key:H,id:S.id,ref:oe,as:h,activatorEvent:x,adjustScale:l,className:m,transition:d,rect:ne,style:{zIndex:b,...u},transform:J},i):null))});function xh(r,l,i){const s=r.slice();return s.splice(i<0?s.length+i:i,0,s.splice(l,1)[0]),s}function Gy(r,l){return r.reduce((i,s,u)=>{const d=l.get(s);return d&&(i[u]=d),i},Array(r.length))}function cr(r){return r!==null&&r>=0}function Xy(r,l){if(r===l)return!0;if(r.length!==l.length)return!1;for(let i=0;i<r.length;i++)if(r[i]!==l[i])return!1;return!0}function Qy(r){return typeof r=="boolean"?{draggable:r,droppable:r}:r}const Sh=r=>{let{rects:l,activeIndex:i,overIndex:s,index:u}=r;const d=xh(l,s,i),f=l[u],h=d[u];return!h||!f?null:{x:h.left-f.left,y:h.top-f.top,scaleX:h.width/f.width,scaleY:h.height/f.height}},ur={scaleX:1,scaleY:1},Iy=r=>{var l;let{activeIndex:i,activeNodeRect:s,index:u,rects:d,overIndex:f}=r;const h=(l=d[i])!=null?l:s;if(!h)return null;if(u===i){const b=d[f];return b?{x:0,y:i<f?b.top+b.height-(h.top+h.height):b.top-h.top,...ur}:null}const m=Ky(d,u,i);return u>i&&u<=f?{x:0,y:-h.height-m,...ur}:u<i&&u>=f?{x:0,y:h.height+m,...ur}:{x:0,y:0,...ur}};function Ky(r,l,i){const s=r[l],u=r[l-1],d=r[l+1];return s?i<l?u?s.top-(u.top+u.height):d?d.top-(s.top+s.height):0:d?d.top-(s.top+s.height):u?s.top-(u.top+u.height):0:0}const wh="Sortable",Ch=Be.createContext({activeIndex:-1,containerId:wh,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Sh,disabled:{draggable:!1,droppable:!1}});function $y(r){let{children:l,id:i,items:s,strategy:u=Sh,disabled:d=!1}=r;const{active:f,dragOverlay:h,droppableRects:m,over:b,measureDroppableContainers:x}=yh(),S=Vi(wh,i),A=h.rect!==null,T=v.useMemo(()=>s.map(V=>typeof V=="object"&&"id"in V?V.id:V),[s]),j=f!=null,O=f?T.indexOf(f.id):-1,Y=b?T.indexOf(b.id):-1,Z=v.useRef(T),G=!Xy(T,Z.current),Q=Y!==-1&&O===-1||G,I=Qy(d);on(()=>{G&&j&&x(T)},[G,T,j,x]),v.useEffect(()=>{Z.current=T},[T]);const F=v.useMemo(()=>({activeIndex:O,containerId:S,disabled:I,disableTransforms:Q,items:T,overIndex:Y,useDragOverlay:A,sortedRects:Gy(T,m),strategy:u}),[O,S,I.draggable,I.droppable,Q,T,Y,m,A,u]);return Be.createElement(Ch.Provider,{value:F},l)}const Jy=r=>{let{id:l,items:i,activeIndex:s,overIndex:u}=r;return xh(i,s,u).indexOf(l)},Fy=r=>{let{containerId:l,isSorting:i,wasDragging:s,index:u,items:d,newIndex:f,previousItems:h,previousContainerId:m,transition:b}=r;return!b||!s||h!==d&&u===f?!1:i?!0:f!==u&&l===m},Py={duration:200,easing:"ease"},Eh="transform",Wy=ba.Transition.toString({property:Eh,duration:0,easing:"linear"}),e8={roleDescription:"sortable"};function t8(r){let{disabled:l,index:i,node:s,rect:u}=r;const[d,f]=v.useState(null),h=v.useRef(i);return on(()=>{if(!l&&i!==h.current&&s.current){const m=u.current;if(m){const b=zl(s.current,{ignoreTransform:!0}),x={x:m.left-b.left,y:m.top-b.top,scaleX:m.width/b.width,scaleY:m.height/b.height};(x.x||x.y)&&f(x)}}i!==h.current&&(h.current=i)},[l,i,s,u]),v.useEffect(()=>{d&&f(null)},[d]),d}function n8(r){let{animateLayoutChanges:l=Fy,attributes:i,disabled:s,data:u,getNewIndex:d=Jy,id:f,strategy:h,resizeObserverConfig:m,transition:b=Py}=r;const{items:x,containerId:S,activeIndex:A,disabled:T,disableTransforms:j,sortedRects:O,overIndex:Y,useDragOverlay:Z,strategy:G}=v.useContext(Ch),Q=a8(s,T),I=x.indexOf(f),F=v.useMemo(()=>({sortable:{containerId:S,index:I,items:x},...u}),[S,u,I,x]),V=v.useMemo(()=>x.slice(x.indexOf(f)),[x,f]),{rect:H,node:J,isOver:ne,setNodeRef:re}=Ry({id:f,data:F,disabled:Q.droppable,resizeObserverConfig:{updateMeasurementsFor:V,...m}}),{active:oe,activatorEvent:ge,activeNodeRect:Oe,attributes:qe,setNodeRef:Fe,listeners:_,isDragging:B,over:K,setActivatorNodeRef:ae,transform:se}=Ty({id:f,data:F,attributes:{...e8,...i},disabled:Q.draggable}),C=cv(re,Fe),z=!!oe,X=z&&!j&&cr(A)&&cr(Y),$=!Z&&B,le=$&&X?se:null,be=X?le??(h??G)({rects:O,activeNodeRect:Oe,activeIndex:A,overIndex:Y,index:I}):null,Ue=cr(A)&&cr(Y)?d({id:f,items:x,activeIndex:A,overIndex:Y}):I,we=oe==null?void 0:oe.id,ye=v.useRef({activeId:we,items:x,newIndex:Ue,containerId:S}),un=x!==ye.current.items,yt=l({active:oe,containerId:S,isDragging:B,isSorting:z,id:f,index:I,items:x,newIndex:ye.current.newIndex,previousItems:ye.current.items,previousContainerId:ye.current.containerId,transition:b,wasDragging:ye.current.activeId!=null}),xn=t8({disabled:!yt,index:I,node:J,rect:H});return v.useEffect(()=>{z&&ye.current.newIndex!==Ue&&(ye.current.newIndex=Ue),S!==ye.current.containerId&&(ye.current.containerId=S),x!==ye.current.items&&(ye.current.items=x)},[z,Ue,S,x]),v.useEffect(()=>{if(we===ye.current.activeId)return;if(we!=null&&ye.current.activeId==null){ye.current.activeId=we;return}const dn=setTimeout(()=>{ye.current.activeId=we},50);return()=>clearTimeout(dn)},[we]),{active:oe,activeIndex:A,attributes:qe,data:F,rect:H,index:I,newIndex:Ue,items:x,isOver:ne,isSorting:z,isDragging:B,listeners:_,node:J,overIndex:Y,over:K,setNodeRef:C,setActivatorNodeRef:ae,setDroppableNodeRef:re,setDraggableNodeRef:Fe,transform:xn??be,transition:it()};function it(){if(xn||un&&ye.current.newIndex===I)return Wy;if(!($&&!Nr(ge)||!b)&&(z||yt))return ba.Transition.toString({...b,property:Eh})}}function a8(r,l){var i,s;return typeof r=="boolean"?{draggable:r,droppable:!1}:{draggable:(i=r==null?void 0:r.draggable)!=null?i:l.draggable,droppable:(s=r==null?void 0:r.droppable)!=null?s:l.droppable}}Ee.Down,Ee.Right,Ee.Up,Ee.Left;function l8({prd:r,projectId:l,onClose:i,onSave:s}){const[u,d]=v.useState((r==null?void 0:r.title)??""),[f,h]=v.useState((r==null?void 0:r.content)??""),m=v.useRef();function b(S){const A=S.target.files[0];if(!A)return;const T=A.name.replace(/\.md$/i,"").replace(/[-_]/g," "),j=new FileReader;j.onload=O=>{u||d(T),h(O.target.result)},j.readAsText(A)}function x(){const S=u.trim();S&&s({title:S,content:f})}return y.jsx("div",{className:"prd-editor-scrim",onClick:S=>S.target===S.currentTarget&&i(),children:y.jsxs("div",{className:"prd-editor-modal",children:[y.jsxs("div",{className:"prd-editor-header",children:[y.jsx("span",{className:"prd-editor-title",children:r?"Edit PRD":"New PRD"}),y.jsx("button",{className:"prd-editor-close",onClick:i,children:"✕"})]}),y.jsxs("div",{className:"prd-editor-body",children:[y.jsxs("div",{className:"prd-editor-field",children:[y.jsx("label",{className:"prd-editor-label",children:"Title"}),y.jsx("input",{className:"prd-editor-input",type:"text",placeholder:"e.g. Producer Filter Modal",value:u,onChange:S=>d(S.target.value),autoFocus:!0})]}),y.jsxs("div",{className:"prd-editor-field prd-editor-field--grow",children:[y.jsxs("div",{className:"prd-editor-label-row",children:[y.jsx("label",{className:"prd-editor-label",children:"Content"}),y.jsx("button",{className:"prd-editor-load-file",onClick:()=>m.current.click(),children:"Load from .md file"}),y.jsx("input",{ref:m,type:"file",accept:".md,.txt",style:{display:"none"},onChange:b})]}),y.jsx("textarea",{className:"prd-editor-textarea",placeholder:"Paste your PRD markdown here…",value:f,onChange:S=>h(S.target.value)})]})]}),y.jsxs("div",{className:"prd-editor-footer",children:[y.jsx("button",{className:"prd-editor-btn prd-editor-btn--cancel",onClick:i,children:"Cancel"}),y.jsx("button",{className:"prd-editor-btn prd-editor-btn--save",onClick:x,disabled:!u.trim(),children:r?"Save changes":"Create PRD"})]})]})})}const i8={Sparkle:Fp,ChartBar:Yp,FlowArrow:Ip,Database:Xp,TrendUp:Wp,Bell:Zp,GearSix:$p};function Ah(r){const l=Math.floor((Date.now()-new Date(r))/6e4);if(l<1)return"just now";if(l<60)return`${l}m ago`;const i=Math.floor(l/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}function s8({status:r}){return y.jsx("span",{className:`prd-status prd-status--${r}`,children:Hp[r]})}function r8({prd:r,onEdit:l,onDelete:i,onOpen:s,isDragging:u}){const{attributes:d,listeners:f,setNodeRef:h,transform:m,transition:b}=n8({id:r.id}),x={transform:ba.Transform.toString(m),transition:b,opacity:u?.4:1};return y.jsxs("div",{ref:h,style:x,className:"kanban-card",...d,...f,children:[y.jsx("div",{className:"kanban-card-title",children:r.title}),y.jsx("div",{className:"kanban-card-meta",children:Ah(r.updatedAt)}),y.jsxs("div",{className:"kanban-card-actions",onPointerDown:S=>S.stopPropagation(),children:[y.jsx("button",{className:"kanban-card-btn",onClick:()=>s(r),children:"Open →"}),y.jsx("button",{className:"kanban-card-btn",onClick:()=>l(r),children:"Edit"}),y.jsx("button",{className:"kanban-card-btn kanban-card-btn--danger",onClick:()=>i(r.id),children:"Delete"})]})]})}function o8({status:r,prds:l,onEdit:i,onDelete:s,onOpen:u,activeId:d}){return y.jsxs("div",{className:"kanban-col",children:[y.jsxs("div",{className:"kanban-col-header",children:[y.jsx("span",{className:"kanban-col-title",children:Hp[r]}),y.jsx("span",{className:"kanban-col-count",children:l.length})]}),y.jsx($y,{items:l.map(f=>f.id),strategy:Iy,children:y.jsxs("div",{className:"kanban-col-cards",children:[l.map(f=>y.jsx(r8,{prd:f,onEdit:i,onDelete:s,onOpen:u,isDragging:d===f.id},f.id)),l.length===0&&y.jsx("div",{className:"kanban-col-empty",children:"Drop here"})]})})]})}function c8({projectId:r,prds:l,onNavigate:i,onCreatePrd:s,onUpdatePrd:u,onDeletePrd:d}){const f=Bp(r),h=f?i8[f.phosphorIcon]:null,m=l.filter(V=>V.projectId===r),[b,x]=v.useState("kanban"),[S,A]=v.useState(!1),[T,j]=v.useState(null),[O,Y]=v.useState(null),Z=Ev(Cv(Du,{activationConstraint:{distance:6}}));function G({active:V}){Y(V.id)}function Q({active:V,over:H}){if(Y(null),!H||V.id===H.id)return;const J=m.find(oe=>oe.id===V.id);if(!J)return;const ne=m.find(oe=>oe.id===H.id),re=ne?ne.status:H.id;K1.includes(re)&&J.status!==re&&u(V.id,{status:re})}function I({active:V,over:H}){if(!H)return;const J=m.find(re=>re.id===V.id),ne=m.find(re=>re.id===H.id);!J||!ne||J.status!==ne.status&&u(V.id,{status:ne.status})}const F=O?m.find(V=>V.id===O):null;return y.jsxs("div",{className:"project-view",children:[y.jsxs("header",{className:"project-view-header",children:[y.jsx("button",{className:"project-back-btn",onClick:()=>i({page:"projects"}),children:"← Projects"}),y.jsxs("div",{className:"project-view-title",children:[h&&y.jsx(h,{size:20,weight:"fill",className:"project-view-icon"}),y.jsx("span",{className:"project-view-name",children:f==null?void 0:f.name})]}),y.jsxs("div",{className:"project-view-actions",children:[y.jsxs("div",{className:"view-toggle",children:[y.jsx("button",{className:`view-toggle-btn ${b==="list"?"active":""}`,onClick:()=>x("list"),children:"List"}),y.jsx("button",{className:`view-toggle-btn ${b==="kanban"?"active":""}`,onClick:()=>x("kanban"),children:"Kanban"})]}),y.jsx("button",{className:"new-prd-btn",onClick:()=>{j(null),A(!0)},children:"+ New PRD"})]})]}),y.jsx("div",{className:"project-view-body",children:b==="list"?y.jsx("div",{className:"prd-list",children:m.length===0?y.jsx("div",{className:"prd-list-empty",children:"No PRDs yet — create one to get started."}):y.jsxs("table",{className:"prd-table",children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{children:"Title"}),y.jsx("th",{children:"Status"}),y.jsx("th",{children:"Updated"}),y.jsx("th",{})]})}),y.jsx("tbody",{children:m.map(V=>y.jsxs("tr",{children:[y.jsx("td",{className:"prd-table-title",children:V.title}),y.jsx("td",{children:y.jsx(s8,{status:V.status})}),y.jsx("td",{className:"prd-table-date",children:Ah(V.updatedAt)}),y.jsxs("td",{className:"prd-table-actions",children:[y.jsx("button",{className:"prd-action-btn",onClick:()=>i({page:"builder",prdId:V.id}),children:"Open →"}),y.jsx("button",{className:"prd-action-btn",onClick:()=>{j(V),A(!0)},children:"Edit"}),y.jsx("button",{className:"prd-action-btn prd-action-btn--danger",onClick:()=>d(V.id),children:"Delete"})]})]},V.id))})]})}):y.jsxs(Ey,{sensors:Z,collisionDetection:Rv,onDragStart:G,onDragOver:I,onDragEnd:Q,children:[y.jsx("div",{className:"kanban-board",children:K1.map(V=>y.jsx(o8,{status:V,prds:m.filter(H=>H.status===V),onEdit:H=>{j(H),A(!0)},onDelete:H=>d(H),onOpen:H=>i({page:"builder",prdId:H.id}),activeId:O},V))}),y.jsx(Yy,{children:F?y.jsx("div",{className:"kanban-card kanban-card--overlay",children:y.jsx("div",{className:"kanban-card-title",children:F.title})}):null})]})}),S&&y.jsx(l8,{prd:T,projectId:r,onClose:()=>A(!1),onSave:V=>{T?u(T.id,V):s(r,V),A(!1)}})]})}const Nh=r=>`ennabl_bs_${r}`;function Th(r){try{return JSON.parse(localStorage.getItem(Nh(r)))||{}}catch{return{}}}function cp(r,l){try{const i=Th(r);localStorage.setItem(Nh(r),JSON.stringify({...i,...l}))}catch{}}function u8(){const[r,l]=v.useState(()=>!!Ap()),[i,s]=v.useState(I1),[u,d]=v.useState(!1),[f,h]=v.useState({page:"projects"}),[m,b]=v.useState([]),[x,S]=v.useState(!1),[A,T]=v.useState(null),[j,O]=v.useState(null),[Y,Z]=v.useState([]),[G,Q]=v.useState(null),[I,F]=v.useState(G2),[V,H]=v.useState(0),J=i&&!u;v.useEffect(()=>{if(!r||!i&&!u)return;async function B(){if(J)try{const K=await Qb();b(K)}catch{$1(),b(su())}else $1(),b(su());S(!0)}B()},[r,i,u]);function ne(B){if(B.page==="builder"&&B.prdId){const K=m.find(ae=>ae.id===B.prdId);K&&re(K)}h(B)}function re(B){const K=Th(B.id);T({id:B.id,name:B.title,content:B.content}),Z(K.messages||[]),O(K.code||null),Q(ub(B.title))}v.useEffect(()=>{A!=null&&A.id&&cp(A.id,{messages:Y})},[Y,A==null?void 0:A.id]),v.useEffect(()=>{A!=null&&A.id&&j&&cp(A.id,{code:j})},[j,A==null?void 0:A.id]);async function oe(B,K){if(J){const ae=await Ib({projectId:B,...K});b(se=>[ae,...se])}else{const ae={id:`prd-${Date.now()}`,projectId:B,status:"backlog",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),...K};b(se=>{const C=[ae,...se];return dr(C),C})}}async function ge(B,K){if(J){const ae=await Kb(B,{...K,updated:new Date().toISOString()});b(se=>se.map(C=>C.id===B?ae:C))}else b(ae=>{const se=ae.map(C=>C.id===B?{...C,...K,updatedAt:new Date().toISOString()}:C);return dr(se),se})}async function Oe(B){J&&await $b(B),b(K=>{const ae=K.filter(se=>se.id!==B);return J||dr(ae),ae})}function qe(B,K){if(O(B),A){const se=[X2({prdName:A.name,code:B,iteration:((G==null?void 0:G.iterations)??0)+1}),...I].slice(0,50);if(F(se),H1(se),K){const z=`**${new Date().toISOString().slice(0,10)} · iter ${((G==null?void 0:G.iterations)??0)+1}:** ${K}`,X=m.find(ee=>ee.id===A.id),$=(X==null?void 0:X.content)||A.content||"",le=$.includes("## Build log")?$+`
`+z:$+`

## Build log

`+z;ge(A.id,{content:le}),T(ee=>ee&&{...ee,content:le})}}}function Fe({inputTokens:B,outputTokens:K,cacheReadTokens:ae,componentsUsed:se}){Q(C=>{if(!C)return C;const z={...C,iterations:C.iterations+1,inputTokens:C.inputTokens+B,outputTokens:C.outputTokens+K,cacheReadTokens:C.cacheReadTokens+ae,componentsUsed:[...new Set([...C.componentsUsed,...se])]};return z.cost=cb(z),au(z),z})}function _(){F([]),H1([])}return r?!i&&!u?y.jsx(Jb,{onDone:()=>{I1()?s(!0):d(!0)}}):x?f.page==="projects"?y.jsx(ov,{prds:m,onNavigate:ne}):f.page==="project"?y.jsx(c8,{projectId:f.projectId,prds:m,onNavigate:ne,onCreatePrd:oe,onUpdatePrd:ge,onDeletePrd:Oe}):y.jsxs("div",{className:"app",children:[y.jsxs("header",{className:"app-header",children:[y.jsxs("div",{className:"app-header-left",children:[y.jsx("button",{className:"app-back-btn",onClick:()=>ne({page:"projects"}),children:"← Projects"}),y.jsx("span",{className:"app-header-sep"}),y.jsx("span",{className:"app-logo",children:"ennabl"}),y.jsx("span",{className:"app-logo-suffix",children:"builder"}),A&&y.jsx("span",{className:"app-prd-badge",children:A.name})]}),y.jsx(Pb,{prds:m,onSelect:re})]}),y.jsxs("main",{className:"app-panels",children:[y.jsx(F2,{code:j,prd:A,history:I,onHistoryClear:_,onInitDesign:()=>H(B=>B+1)}),y.jsx("div",{className:"app-divider"}),y.jsx(Ab,{prd:A,messages:Y,setMessages:Z,onCodeGenerated:qe,onIterationComplete:Fe,session:G,onSessionUpdate:Q,initTrigger:V})]})]}):y.jsx("div",{style:{height:"100dvh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",color:"var(--text-muted)",fontSize:13},children:"Loading…"}):y.jsx(Nb,{onDone:()=>l(!0)})}Fg.createRoot(document.getElementById("root")).render(y.jsx(v.StrictMode,{children:y.jsx(u8,{})}));
