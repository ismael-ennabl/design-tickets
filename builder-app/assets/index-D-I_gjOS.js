var Nb=Object.defineProperty;var xh=o=>{throw TypeError(o)};var Tb=(o,l,i)=>l in o?Nb(o,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[l]=i;var Me=(o,l,i)=>Tb(o,typeof l!="symbol"?l+"":l,i),Eb=(o,l,i)=>l.has(o)||xh("Cannot "+i);var Sh=(o,l,i)=>l.has(o)?xh("Cannot add the same private member more than once"):l instanceof WeakSet?l.add(o):l.set(o,i);var Ni=(o,l,i)=>(Eb(o,l,"access private method"),i);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(u){if(u.ep)return;u.ep=!0;const d=i(u);fetch(u.href,d)}})();function Ab(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Yc={exports:{}},Ti={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wh;function Db(){if(wh)return Ti;wh=1;var o=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function i(s,u,d){var f=null;if(d!==void 0&&(f=""+d),u.key!==void 0&&(f=""+u.key),"key"in u){d={};for(var h in u)h!=="key"&&(d[h]=u[h])}else d=u;return u=d.ref,{$$typeof:o,type:s,key:f,ref:u!==void 0?u:null,props:d}}return Ti.Fragment=l,Ti.jsx=i,Ti.jsxs=i,Ti}var Ch;function kb(){return Ch||(Ch=1,Yc.exports=Db()),Yc.exports}var v=kb(),Gc={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh;function Rb(){if(Nh)return oe;Nh=1;var o=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),E=Symbol.iterator;function A(w){return w===null||typeof w!="object"?null:(w=E&&w[E]||w["@@iterator"],typeof w=="function"?w:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,X={};function Y(w,j,V){this.props=w,this.context=j,this.refs=X,this.updater=V||M}Y.prototype.isReactComponent={},Y.prototype.setState=function(w,j){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,j,"setState")},Y.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function G(){}G.prototype=Y.prototype;function K(w,j,V){this.props=w,this.context=j,this.refs=X,this.updater=V||M}var I=K.prototype=new G;I.constructor=K,z(I,Y.prototype),I.isPureReactComponent=!0;var Z=Array.isArray;function Q(){}var H={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function te(w,j,V){var $=V.ref;return{$$typeof:o,type:w,key:j,ref:$!==void 0?$:null,props:V}}function re(w,j){return te(w.type,j,w.props)}function ce(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function me(w){var j={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(V){return j[V]})}var ze=/\/+/g;function He(w,j){return typeof w=="object"&&w!==null&&w.key!=null?me(""+w.key):j.toString(36)}function Fe(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(Q,Q):(w.status="pending",w.then(function(j){w.status==="pending"&&(w.status="fulfilled",w.value=j)},function(j){w.status==="pending"&&(w.status="rejected",w.reason=j)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function _(w,j,V,$,le){var ee=typeof w;(ee==="undefined"||ee==="boolean")&&(w=null);var be=!1;if(w===null)be=!0;else switch(ee){case"bigint":case"string":case"number":be=!0;break;case"object":switch(w.$$typeof){case o:case l:be=!0;break;case y:return be=w._init,_(be(w._payload),j,V,$,le)}}if(be)return le=le(w),be=$===""?"."+He(w,0):$,Z(le)?(V="",be!=null&&(V=be.replace(ze,"$&/")+"/"),_(le,j,V,"",function(ye){return ye})):le!=null&&(ce(le)&&(le=re(le,V+(le.key==null||w&&w.key===le.key?"":(""+le.key).replace(ze,"$&/")+"/")+be)),j.push(le)),1;be=0;var Le=$===""?".":$+":";if(Z(w))for(var we=0;we<w.length;we++)$=w[we],ee=Le+He($,we),be+=_($,j,V,ee,le);else if(we=A(w),typeof we=="function")for(w=we.call(w),we=0;!($=w.next()).done;)$=$.value,ee=Le+He($,we++),be+=_($,j,V,ee,le);else if(ee==="object"){if(typeof w.then=="function")return _(Fe(w),j,V,$,le);throw j=String(w),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return be}function B(w,j,V){if(w==null)return w;var $=[],le=0;return _(w,$,"","",function(ee){return j.call(V,ee,le++)}),$}function J(w){if(w._status===-1){var j=w._result;j=j(),j.then(function(V){(w._status===0||w._status===-1)&&(w._status=1,w._result=V)},function(V){(w._status===0||w._status===-1)&&(w._status=2,w._result=V)}),w._status===-1&&(w._status=0,w._result=j)}if(w._status===1)return w._result.default;throw w._result}var ae=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},se={map:B,forEach:function(w,j,V){B(w,function(){j.apply(this,arguments)},V)},count:function(w){var j=0;return B(w,function(){j++}),j},toArray:function(w){return B(w,function(j){return j})||[]},only:function(w){if(!ce(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return oe.Activity=x,oe.Children=se,oe.Component=Y,oe.Fragment=i,oe.Profiler=u,oe.PureComponent=K,oe.StrictMode=s,oe.Suspense=g,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,oe.__COMPILER_RUNTIME={__proto__:null,c:function(w){return H.H.useMemoCache(w)}},oe.cache=function(w){return function(){return w.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(w,j,V){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var $=z({},w.props),le=w.key;if(j!=null)for(ee in j.key!==void 0&&(le=""+j.key),j)!F.call(j,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&j.ref===void 0||($[ee]=j[ee]);var ee=arguments.length-2;if(ee===1)$.children=V;else if(1<ee){for(var be=Array(ee),Le=0;Le<ee;Le++)be[Le]=arguments[Le+2];$.children=be}return te(w.type,le,$)},oe.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:d,_context:w},w},oe.createElement=function(w,j,V){var $,le={},ee=null;if(j!=null)for($ in j.key!==void 0&&(ee=""+j.key),j)F.call(j,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(le[$]=j[$]);var be=arguments.length-2;if(be===1)le.children=V;else if(1<be){for(var Le=Array(be),we=0;we<be;we++)Le[we]=arguments[we+2];le.children=Le}if(w&&w.defaultProps)for($ in be=w.defaultProps,be)le[$]===void 0&&(le[$]=be[$]);return te(w,ee,le)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(w){return{$$typeof:h,render:w}},oe.isValidElement=ce,oe.lazy=function(w){return{$$typeof:y,_payload:{_status:-1,_result:w},_init:J}},oe.memo=function(w,j){return{$$typeof:b,type:w,compare:j===void 0?null:j}},oe.startTransition=function(w){var j=H.T,V={};H.T=V;try{var $=w(),le=H.S;le!==null&&le(V,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(Q,ae)}catch(ee){ae(ee)}finally{j!==null&&V.types!==null&&(j.types=V.types),H.T=j}},oe.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},oe.use=function(w){return H.H.use(w)},oe.useActionState=function(w,j,V){return H.H.useActionState(w,j,V)},oe.useCallback=function(w,j){return H.H.useCallback(w,j)},oe.useContext=function(w){return H.H.useContext(w)},oe.useDebugValue=function(){},oe.useDeferredValue=function(w,j){return H.H.useDeferredValue(w,j)},oe.useEffect=function(w,j){return H.H.useEffect(w,j)},oe.useEffectEvent=function(w){return H.H.useEffectEvent(w)},oe.useId=function(){return H.H.useId()},oe.useImperativeHandle=function(w,j,V){return H.H.useImperativeHandle(w,j,V)},oe.useInsertionEffect=function(w,j){return H.H.useInsertionEffect(w,j)},oe.useLayoutEffect=function(w,j){return H.H.useLayoutEffect(w,j)},oe.useMemo=function(w,j){return H.H.useMemo(w,j)},oe.useOptimistic=function(w,j){return H.H.useOptimistic(w,j)},oe.useReducer=function(w,j,V){return H.H.useReducer(w,j,V)},oe.useRef=function(w){return H.H.useRef(w)},oe.useState=function(w){return H.H.useState(w)},oe.useSyncExternalStore=function(w,j,V){return H.H.useSyncExternalStore(w,j,V)},oe.useTransition=function(){return H.H.useTransition()},oe.version="19.2.6",oe}var Th;function cu(){return Th||(Th=1,Gc.exports=Rb()),Gc.exports}var N=cu();const qe=Ab(N);var Zc={exports:{}},Ei={},Xc={exports:{}},Vc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh;function Ob(){return Eh||(Eh=1,(function(o){function l(_,B){var J=_.length;_.push(B);e:for(;0<J;){var ae=J-1>>>1,se=_[ae];if(0<u(se,B))_[ae]=B,_[J]=se,J=ae;else break e}}function i(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var B=_[0],J=_.pop();if(J!==B){_[0]=J;e:for(var ae=0,se=_.length,w=se>>>1;ae<w;){var j=2*(ae+1)-1,V=_[j],$=j+1,le=_[$];if(0>u(V,J))$<se&&0>u(le,V)?(_[ae]=le,_[$]=J,ae=$):(_[ae]=V,_[j]=J,ae=j);else if($<se&&0>u(le,J))_[ae]=le,_[$]=J,ae=$;else break e}}return B}function u(_,B){var J=_.sortIndex-B.sortIndex;return J!==0?J:_.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var f=Date,h=f.now();o.unstable_now=function(){return f.now()-h}}var g=[],b=[],y=1,x=null,E=3,A=!1,M=!1,z=!1,X=!1,Y=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function I(_){for(var B=i(b);B!==null;){if(B.callback===null)s(b);else if(B.startTime<=_)s(b),B.sortIndex=B.expirationTime,l(g,B);else break;B=i(b)}}function Z(_){if(z=!1,I(_),!M)if(i(g)!==null)M=!0,Q||(Q=!0,me());else{var B=i(b);B!==null&&Fe(Z,B.startTime-_)}}var Q=!1,H=-1,F=5,te=-1;function re(){return X?!0:!(o.unstable_now()-te<F)}function ce(){if(X=!1,Q){var _=o.unstable_now();te=_;var B=!0;try{e:{M=!1,z&&(z=!1,G(H),H=-1),A=!0;var J=E;try{t:{for(I(_),x=i(g);x!==null&&!(x.expirationTime>_&&re());){var ae=x.callback;if(typeof ae=="function"){x.callback=null,E=x.priorityLevel;var se=ae(x.expirationTime<=_);if(_=o.unstable_now(),typeof se=="function"){x.callback=se,I(_),B=!0;break t}x===i(g)&&s(g),I(_)}else s(g);x=i(g)}if(x!==null)B=!0;else{var w=i(b);w!==null&&Fe(Z,w.startTime-_),B=!1}}break e}finally{x=null,E=J,A=!1}B=void 0}}finally{B?me():Q=!1}}}var me;if(typeof K=="function")me=function(){K(ce)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,He=ze.port2;ze.port1.onmessage=ce,me=function(){He.postMessage(null)}}else me=function(){Y(ce,0)};function Fe(_,B){H=Y(function(){_(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(_){_.callback=null},o.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<_?Math.floor(1e3/_):5},o.unstable_getCurrentPriorityLevel=function(){return E},o.unstable_next=function(_){switch(E){case 1:case 2:case 3:var B=3;break;default:B=E}var J=E;E=B;try{return _()}finally{E=J}},o.unstable_requestPaint=function(){X=!0},o.unstable_runWithPriority=function(_,B){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var J=E;E=_;try{return B()}finally{E=J}},o.unstable_scheduleCallback=function(_,B,J){var ae=o.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,_){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=J+se,_={id:y++,callback:B,priorityLevel:_,startTime:J,expirationTime:se,sortIndex:-1},J>ae?(_.sortIndex=J,l(b,_),i(g)===null&&_===i(b)&&(z?(G(H),H=-1):z=!0,Fe(Z,J-ae))):(_.sortIndex=se,l(g,_),M||A||(M=!0,Q||(Q=!0,me()))),_},o.unstable_shouldYield=re,o.unstable_wrapCallback=function(_){var B=E;return function(){var J=E;E=B;try{return _.apply(this,arguments)}finally{E=J}}}})(Vc)),Vc}var Ah;function zb(){return Ah||(Ah=1,Xc.exports=Ob()),Xc.exports}var Qc={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function jb(){if(Dh)return ht;Dh=1;var o=cu();function l(g){var b="https://react.dev/errors/"+g;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)b+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(l(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(g,b,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:x==null?null:""+x,children:g,containerInfo:b,implementation:y}}var f=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(g,b){if(g==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ht.createPortal=function(g,b){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(l(299));return d(g,b,null,y)},ht.flushSync=function(g){var b=f.T,y=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=b,s.p=y,s.d.f()}},ht.preconnect=function(g,b){typeof g=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,s.d.C(g,b))},ht.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},ht.preinit=function(g,b){if(typeof g=="string"&&b&&typeof b.as=="string"){var y=b.as,x=h(y,b.crossOrigin),E=typeof b.integrity=="string"?b.integrity:void 0,A=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;y==="style"?s.d.S(g,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:x,integrity:E,fetchPriority:A}):y==="script"&&s.d.X(g,{crossOrigin:x,integrity:E,fetchPriority:A,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},ht.preinitModule=function(g,b){if(typeof g=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var y=h(b.as,b.crossOrigin);s.d.M(g,{crossOrigin:y,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&s.d.M(g)},ht.preload=function(g,b){if(typeof g=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var y=b.as,x=h(y,b.crossOrigin);s.d.L(g,y,{crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},ht.preloadModule=function(g,b){if(typeof g=="string")if(b){var y=h(b.as,b.crossOrigin);s.d.m(g,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:y,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else s.d.m(g)},ht.requestFormReset=function(g){s.d.r(g)},ht.unstable_batchedUpdates=function(g,b){return g(b)},ht.useFormState=function(g,b,y){return f.H.useFormState(g,b,y)},ht.useFormStatus=function(){return f.H.useHostTransitionStatus()},ht.version="19.2.6",ht}var kh;function cg(){if(kh)return Qc.exports;kh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(l){console.error(l)}}return o(),Qc.exports=jb(),Qc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rh;function Mb(){if(Rh)return Ei;Rh=1;var o=zb(),l=cu(),i=cg();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(s(188))}function b(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var c=r.alternate;if(c===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===n)return g(r),e;if(c===a)return g(r),t;c=c.sibling}throw Error(s(188))}if(n.return!==a.return)n=r,a=c;else{for(var p=!1,m=r.child;m;){if(m===n){p=!0,n=r,a=c;break}if(m===a){p=!0,a=r,n=c;break}m=m.sibling}if(!p){for(m=c.child;m;){if(m===n){p=!0,n=c,a=r;break}if(m===a){p=!0,a=c,n=r;break}m=m.sibling}if(!p)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,E=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),K=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),ce=Symbol.iterator;function me(e){return e===null||typeof e!="object"?null:(e=ce&&e[ce]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Symbol.for("react.client.reference");function He(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ze?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case Y:return"Profiler";case X:return"StrictMode";case Z:return"Suspense";case Q:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case K:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:He(e.type)||"Memo";case F:t=e._payload,e=e._init;try{return He(e(t))}catch{}}return null}var Fe=Array.isArray,_=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ae=[],se=-1;function w(e){return{current:e}}function j(e){0>se||(e.current=ae[se],ae[se]=null,se--)}function V(e,t){se++,ae[se]=e.current,e.current=t}var $=w(null),le=w(null),ee=w(null),be=w(null);function Le(e,t){switch(V(ee,t),V(le,e),V($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zp(t),e=Xp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j($),V($,e)}function we(){j($),j(le),j(ee)}function ye(e){e.memoizedState!==null&&V(be,e);var t=$.current,n=Xp(t,e.type);t!==n&&(V(le,e),V($,n))}function un(e){le.current===e&&(j($),j(le)),be.current===e&&(j(be),xi._currentValue=J)}var yt,xn;function it(e){if(yt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yt=t&&t[1]||"",xn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+e+xn}var dn=!1;function fn(e,t){if(!e||dn)return"";dn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(O){var R=O}Reflect.construct(e,[],q)}else{try{q.call()}catch(O){R=O}e.call(q.prototype)}}else{try{throw Error()}catch(O){R=O}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(O){if(O&&R&&typeof O.stack=="string")return[O.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),p=c[0],m=c[1];if(p&&m){var S=p.split(`
`),k=m.split(`
`);for(r=a=0;a<S.length&&!S[a].includes("DetermineComponentFrameRoot");)a++;for(;r<k.length&&!k[r].includes("DetermineComponentFrameRoot");)r++;if(a===S.length||r===k.length)for(a=S.length-1,r=k.length-1;1<=a&&0<=r&&S[a]!==k[r];)r--;for(;1<=a&&0<=r;a--,r--)if(S[a]!==k[r]){if(a!==1||r!==1)do if(a--,r--,0>r||S[a]!==k[r]){var U=`
`+S[a].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=a&&0<=r);break}}}finally{dn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?it(n):""}function Zi(e,t){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return e.child!==t&&t!==null?it("Suspense Fallback"):it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return fn(e.type,!1);case 11:return fn(e.type.render,!1);case 1:return fn(e.type,!0);case 31:return it("Activity");default:return""}}function jl(e){try{var t="",n=null;do t+=Zi(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var va=Object.prototype.hasOwnProperty,qt=o.unstable_scheduleCallback,Xn=o.unstable_cancelCallback,Ha=o.unstable_shouldYield,Xi=o.unstable_requestPaint,dt=o.unstable_now,Dr=o.unstable_getCurrentPriorityLevel,Vi=o.unstable_ImmediatePriority,Sn=o.unstable_UserBlockingPriority,tn=o.unstable_NormalPriority,ya=o.unstable_LowPriority,Ml=o.unstable_IdlePriority,pn=o.log,Qi=o.unstable_setDisableYieldValue,xa=null,gt=null;function Ht(e){if(typeof pn=="function"&&Qi(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(xa,e)}catch{}}var ft=Math.clz32?Math.clz32:Rr,kr=Math.log,Ki=Math.LN2;function Rr(e){return e>>>=0,e===0?32:31-(kr(e)/Ki|0)|0}var Ya=256,Ga=262144,Ze=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var m=a&134217727;return m!==0?(a=m&~c,a!==0?r=Xe(a):(p&=m,p!==0?r=Xe(p):n||(n=m&~e,n!==0&&(r=Xe(n))))):(m=a&~c,m!==0?r=Xe(m):p!==0?r=Xe(p):n||(n=a&~e,n!==0&&(r=Xe(n)))),r===0?0:t!==0&&t!==r&&(t&c)===0&&(c=r&-r,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:r}function xt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function St(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pt(){var e=Ze;return Ze<<=1,(Ze&62914560)===0&&(Ze=4194304),e}function wt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function We(e,t,n,a,r,c){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,S=e.expirationTimes,k=e.hiddenUpdates;for(n=p&~n;0<n;){var U=31-ft(n),q=1<<U;m[U]=0,S[U]=-1;var R=k[U];if(R!==null)for(k[U]=null,U=0;U<R.length;U++){var O=R[U];O!==null&&(O.lane&=-536870913)}n&=~q}a!==0&&nn(e,a,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~t))}function nn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ft(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-ft(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Gt(e,t){var n=t&-t;return n=(n&42)!==0?1:wn(n),(n&(e.suspendedLanes|t))!==0?0:n}function wn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Cn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function an(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:ph(e.type))}function Vn(e,t){var n=B.p;try{return B.p=e,t()}finally{B.p=n}}var Zt=Math.random().toString(36).slice(2),st="__reactFiber$"+Zt,Ct="__reactProps$"+Zt,Za="__reactContainer$"+Zt,Or="__reactEvents$"+Zt,pm="__reactListeners$"+Zt,hm="__reactHandles$"+Zt,ku="__reactResources$"+Zt,_l="__reactMarker$"+Zt;function zr(e){delete e[st],delete e[Ct],delete e[Or],delete e[pm],delete e[hm]}function Xa(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Za]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fp(e);e!==null;){if(n=e[st])return n;e=Fp(e)}return t}e=n,n=e.parentNode}return null}function Va(e){if(e=e[st]||e[Za]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ul(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Qa(e){var t=e[ku];return t||(t=e[ku]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[_l]=!0}var Ru=new Set,Ou={};function Sa(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Ou[e]=t,e=0;e<t.length;e++)Ru.add(t[e])}var gm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zu={},ju={};function mm(e){return va.call(ju,e)?!0:va.call(zu,e)?!1:gm.test(e)?ju[e]=!0:(zu[e]=!0,!1)}function Ii(e,t,n){if(mm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ji(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Nn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bm(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,c=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(p){n=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){if(!e._valueTracker){var t=Mu(e)?"checked":"value";e._valueTracker=bm(e,t,""+e[t])}}function _u(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Mu(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var vm=/[\n"\\]/g;function Vt(e){return e.replace(vm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Mr(e,t,n,a,r,c,p,m){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Xt(t)):e.value!==""+Xt(t)&&(e.value=""+Xt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?_r(e,p,Xt(t)):n!=null?_r(e,p,Xt(n)):a!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Xt(m):e.removeAttribute("name")}function Uu(e,t,n,a,r,c,p,m){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){jr(e);return}n=n!=null?""+Xt(n):"",t=t!=null?""+Xt(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=m?e.checked:!!a,e.defaultChecked=!!a,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),jr(e)}function _r(e,t,n){t==="number"&&$i(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ia(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Lu(e,t,n){if(t!=null&&(t=""+Xt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Xt(n):""}function Bu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(Fe(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Xt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),jr(e)}function Ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ym=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||ym.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Hu(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&qu(e,r,a)}else for(var c in t)t.hasOwnProperty(c)&&qu(e,c,t[c])}function Ur(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fi(e){return Sm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Tn(){}var Lr=null;function Br(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,Fa=null;function Yu(e){var t=Va(e);if(t&&(e=t.stateNode)){var n=e[Ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Mr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Vt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[Ct]||null;if(!r)throw Error(s(90));Mr(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&_u(a)}break e;case"textarea":Lu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ia(e,!!n.multiple,t,!1)}}}var qr=!1;function Gu(e,t,n){if(qr)return e(t,n);qr=!0;try{var a=e(t);return a}finally{if(qr=!1,($a!==null||Fa!==null)&&(Bs(),$a&&(t=$a,e=Fa,Fa=$a=null,Yu(t),e)))for(t=0;t<e.length;t++)Yu(e[t])}}function Ll(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Ct]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hr=!1;if(En)try{var Bl={};Object.defineProperty(Bl,"passive",{get:function(){Hr=!0}}),window.addEventListener("test",Bl,Bl),window.removeEventListener("test",Bl,Bl)}catch{Hr=!1}var Qn=null,Yr=null,Wi=null;function Zu(){if(Wi)return Wi;var e,t=Yr,n=t.length,a,r="value"in Qn?Qn.value:Qn.textContent,c=r.length;for(e=0;e<n&&t[e]===r[e];e++);var p=n-e;for(a=1;a<=p&&t[n-a]===r[c-a];a++);return Wi=r.slice(e,1<a?1-a:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function es(){return!0}function Xu(){return!1}function Nt(e){function t(n,a,r,c,p){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(c):c[m]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?es:Xu,this.isPropagationStopped=Xu,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=es)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=es)},persist:function(){},isPersistent:es}),t}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ts=Nt(wa),ql=x({},wa,{view:0,detail:0}),wm=Nt(ql),Gr,Zr,Hl,ns=x({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hl&&(Hl&&e.type==="mousemove"?(Gr=e.screenX-Hl.screenX,Zr=e.screenY-Hl.screenY):Zr=Gr=0,Hl=e),Gr)},movementY:function(e){return"movementY"in e?e.movementY:Zr}}),Vu=Nt(ns),Cm=x({},ns,{dataTransfer:0}),Nm=Nt(Cm),Tm=x({},ql,{relatedTarget:0}),Xr=Nt(Tm),Em=x({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Am=Nt(Em),Dm=x({},wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),km=Nt(Dm),Rm=x({},wa,{data:0}),Qu=Nt(Rm),Om={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jm[e])?!!t[e]:!1}function Vr(){return Mm}var _m=x({},ql,{key:function(e){if(e.key){var t=Om[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vr,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Um=Nt(_m),Lm=x({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ku=Nt(Lm),Bm=x({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vr}),qm=Nt(Bm),Hm=x({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ym=Nt(Hm),Gm=x({},ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zm=Nt(Gm),Xm=x({},wa,{newState:0,oldState:0}),Vm=Nt(Xm),Qm=[9,13,27,32],Qr=En&&"CompositionEvent"in window,Yl=null;En&&"documentMode"in document&&(Yl=document.documentMode);var Km=En&&"TextEvent"in window&&!Yl,Iu=En&&(!Qr||Yl&&8<Yl&&11>=Yl),Ju=" ",$u=!1;function Fu(e,t){switch(e){case"keyup":return Qm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function Im(e,t){switch(e){case"compositionend":return Wu(t);case"keypress":return t.which!==32?null:($u=!0,Ju);case"textInput":return e=t.data,e===Ju&&$u?null:e;default:return null}}function Jm(e,t){if(Wa)return e==="compositionend"||!Qr&&Fu(e,t)?(e=Zu(),Wi=Yr=Qn=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Iu&&t.locale!=="ko"?null:t.data;default:return null}}var $m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$m[e.type]:t==="textarea"}function ed(e,t,n,a){$a?Fa?Fa.push(a):Fa=[a]:$a=a,t=Vs(t,"onChange"),0<t.length&&(n=new ts("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Gl=null,Zl=null;function Fm(e){Lp(e,0)}function as(e){var t=Ul(e);if(_u(t))return e}function td(e,t){if(e==="change")return t}var nd=!1;if(En){var Kr;if(En){var Ir="oninput"in document;if(!Ir){var ad=document.createElement("div");ad.setAttribute("oninput","return;"),Ir=typeof ad.oninput=="function"}Kr=Ir}else Kr=!1;nd=Kr&&(!document.documentMode||9<document.documentMode)}function ld(){Gl&&(Gl.detachEvent("onpropertychange",id),Zl=Gl=null)}function id(e){if(e.propertyName==="value"&&as(Zl)){var t=[];ed(t,Zl,e,Br(e)),Gu(Fm,t)}}function Wm(e,t,n){e==="focusin"?(ld(),Gl=t,Zl=n,Gl.attachEvent("onpropertychange",id)):e==="focusout"&&ld()}function Pm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return as(Zl)}function e0(e,t){if(e==="click")return as(t)}function t0(e,t){if(e==="input"||e==="change")return as(t)}function n0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:n0;function Xl(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!va.call(t,r)||!Ot(e[r],t[r]))return!1}return!0}function sd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rd(e,t){var n=sd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sd(n)}}function od(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?od(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$i(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function Jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var a0=En&&"documentMode"in document&&11>=document.documentMode,Pa=null,$r=null,Vl=null,Fr=!1;function ud(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fr||Pa==null||Pa!==$i(a)||(a=Pa,"selectionStart"in a&&Jr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Vl&&Xl(Vl,a)||(Vl=a,a=Vs($r,"onSelect"),0<a.length&&(t=new ts("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Pa)))}function Ca(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var el={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},Wr={},dd={};En&&(dd=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function Na(e){if(Wr[e])return Wr[e];if(!el[e])return e;var t=el[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dd)return Wr[e]=t[n];return e}var fd=Na("animationend"),pd=Na("animationiteration"),hd=Na("animationstart"),l0=Na("transitionrun"),i0=Na("transitionstart"),s0=Na("transitioncancel"),gd=Na("transitionend"),md=new Map,Pr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pr.push("scrollEnd");function ln(e,t){md.set(e,t),Sa(t,[e])}var ls=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Qt=[],tl=0,eo=0;function is(){for(var e=tl,t=eo=tl=0;t<e;){var n=Qt[t];Qt[t++]=null;var a=Qt[t];Qt[t++]=null;var r=Qt[t];Qt[t++]=null;var c=Qt[t];if(Qt[t++]=null,a!==null&&r!==null){var p=a.pending;p===null?r.next=r:(r.next=p.next,p.next=r),a.pending=r}c!==0&&bd(n,r,c)}}function ss(e,t,n,a){Qt[tl++]=e,Qt[tl++]=t,Qt[tl++]=n,Qt[tl++]=a,eo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function to(e,t,n,a){return ss(e,t,n,a),rs(e)}function Ta(e,t){return ss(e,null,null,t),rs(e)}function bd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,c=e.return;c!==null;)c.childLanes|=n,a=c.alternate,a!==null&&(a.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&t!==null&&(r=31-ft(n),e=c.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),c):null}function rs(e){if(50<pi)throw pi=0,dc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nl={};function r0(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,a){return new r0(e,t,n,a)}function no(e){return e=e.prototype,!(!e||!e.isReactComponent)}function An(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function os(e,t,n,a,r,c){var p=0;if(a=e,typeof e=="function")no(e)&&(p=1);else if(typeof e=="string")p=fb(e,n,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case te:return e=zt(31,n,t,r),e.elementType=te,e.lanes=c,e;case z:return Ea(n.children,r,c,t);case X:p=8,r|=24;break;case Y:return e=zt(12,n,t,r|2),e.elementType=Y,e.lanes=c,e;case Z:return e=zt(13,n,t,r),e.elementType=Z,e.lanes=c,e;case Q:return e=zt(19,n,t,r),e.elementType=Q,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:p=10;break e;case G:p=9;break e;case I:p=11;break e;case H:p=14;break e;case F:p=16,a=null;break e}p=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=zt(p,n,t,r),t.elementType=e,t.type=a,t.lanes=c,t}function Ea(e,t,n,a){return e=zt(7,e,a,t),e.lanes=n,e}function ao(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function yd(e){var t=zt(18,null,null,0);return t.stateNode=e,t}function lo(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xd=new WeakMap;function Kt(e,t){if(typeof e=="object"&&e!==null){var n=xd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:jl(t)},xd.set(e,t),t)}return{value:e,source:t,stack:jl(t)}}var al=[],ll=0,cs=null,Ql=0,It=[],Jt=0,Kn=null,hn=1,gn="";function Dn(e,t){al[ll++]=Ql,al[ll++]=cs,cs=e,Ql=t}function Sd(e,t,n){It[Jt++]=hn,It[Jt++]=gn,It[Jt++]=Kn,Kn=e;var a=hn;e=gn;var r=32-ft(a)-1;a&=~(1<<r),n+=1;var c=32-ft(t)+r;if(30<c){var p=r-r%5;c=(a&(1<<p)-1).toString(32),a>>=p,r-=p,hn=1<<32-ft(t)+r|n<<r|a,gn=c+e}else hn=1<<c|n<<r|a,gn=e}function io(e){e.return!==null&&(Dn(e,1),Sd(e,1,0))}function so(e){for(;e===cs;)cs=al[--ll],al[ll]=null,Ql=al[--ll],al[ll]=null;for(;e===Kn;)Kn=It[--Jt],It[Jt]=null,gn=It[--Jt],It[Jt]=null,hn=It[--Jt],It[Jt]=null}function wd(e,t){It[Jt++]=hn,It[Jt++]=gn,It[Jt++]=Kn,hn=t.id,gn=t.overflow,Kn=e}var rt=null,_e=null,ve=!1,In=null,$t=!1,ro=Error(s(519));function Jn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kl(Kt(t,e)),ro}function Cd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[st]=e,t[Ct]=a,n){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(n=0;n<gi.length;n++)pe(gi[n],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),Uu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),Bu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Yp(t.textContent,n)?(a.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),a.onScroll!=null&&pe("scroll",t),a.onScrollEnd!=null&&pe("scrollend",t),a.onClick!=null&&(t.onclick=Tn),t=!0):t=!1,t||Jn(e,!0)}function Nd(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 31:case 13:$t=!1;return;case 27:case 3:$t=!0;return;default:rt=rt.return}}function il(e){if(e!==rt)return!1;if(!ve)return Nd(e),ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ec(e.type,e.memoizedProps)),n=!n),n&&_e&&Jn(e),Nd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_e=$p(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_e=$p(e)}else t===27?(t=_e,ca(e.type)?(e=Oc,Oc=null,_e=e):_e=t):_e=rt?Wt(e.stateNode.nextSibling):null;return!0}function Aa(){_e=rt=null,ve=!1}function oo(){var e=In;return e!==null&&(Dt===null?Dt=e:Dt.push.apply(Dt,e),In=null),e}function Kl(e){In===null?In=[e]:In.push(e)}var co=w(null),Da=null,kn=null;function $n(e,t,n){V(co,t._currentValue),t._currentValue=n}function Rn(e){e._currentValue=co.current,j(co)}function uo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function fo(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var p=r.child;c=c.firstContext;e:for(;c!==null;){var m=c;c=r;for(var S=0;S<t.length;S++)if(m.context===t[S]){c.lanes|=n,m=c.alternate,m!==null&&(m.lanes|=n),uo(c.return,n,e),a||(p=null);break e}c=m.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(s(341));p.lanes|=n,c=p.alternate,c!==null&&(c.lanes|=n),uo(p,n,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function sl(e,t,n,a){e=null;for(var r=t,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var m=r.type;Ot(r.pendingProps.value,p.value)||(e!==null?e.push(m):e=[m])}}else if(r===be.current){if(p=r.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(xi):e=[xi])}r=r.return}e!==null&&fo(t,e,n,a),t.flags|=262144}function us(e){for(e=e.firstContext;e!==null;){if(!Ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ka(e){Da=e,kn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return Td(Da,e)}function ds(e,t){return Da===null&&ka(e),Td(e,t)}function Td(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},kn===null){if(e===null)throw Error(s(308));kn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kn=kn.next=t;return n}var o0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},c0=o.unstable_scheduleCallback,u0=o.unstable_NormalPriority,Ke={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function po(){return{controller:new o0,data:new Map,refCount:0}}function Il(e){e.refCount--,e.refCount===0&&c0(u0,function(){e.controller.abort()})}var Jl=null,ho=0,rl=0,ol=null;function d0(e,t){if(Jl===null){var n=Jl=[];ho=0,rl=bc(),ol={status:"pending",value:void 0,then:function(a){n.push(a)}}}return ho++,t.then(Ed,Ed),t}function Ed(){if(--ho===0&&Jl!==null){ol!==null&&(ol.status="fulfilled");var e=Jl;Jl=null,rl=0,ol=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function f0(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var Ad=_.S;_.S=function(e,t){dp=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&d0(e,t),Ad!==null&&Ad(e,t)};var Ra=w(null);function go(){var e=Ra.current;return e!==null?e:je.pooledCache}function fs(e,t){t===null?V(Ra,Ra.current):V(Ra,t.pool)}function Dd(){var e=go();return e===null?null:{parent:Ke._currentValue,pool:e}}var cl=Error(s(460)),mo=Error(s(474)),ps=Error(s(542)),hs={then:function(){}};function kd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Tn,Tn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zd(e),e;default:if(typeof t.status=="string")t.then(Tn,Tn);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zd(e),e}throw za=t,cl}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(za=n,cl):n}}var za=null;function Od(){if(za===null)throw Error(s(459));var e=za;return za=null,e}function zd(e){if(e===cl||e===ps)throw Error(s(483))}var ul=null,$l=0;function gs(e){var t=$l;return $l+=1,ul===null&&(ul=[]),Rd(ul,e,t)}function Fl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ms(e,t){throw t.$$typeof===E?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jd(e){function t(T,C){if(e){var D=T.deletions;D===null?(T.deletions=[C],T.flags|=16):D.push(C)}}function n(T,C){if(!e)return null;for(;C!==null;)t(T,C),C=C.sibling;return null}function a(T){for(var C=new Map;T!==null;)T.key!==null?C.set(T.key,T):C.set(T.index,T),T=T.sibling;return C}function r(T,C){return T=An(T,C),T.index=0,T.sibling=null,T}function c(T,C,D){return T.index=D,e?(D=T.alternate,D!==null?(D=D.index,D<C?(T.flags|=67108866,C):D):(T.flags|=67108866,C)):(T.flags|=1048576,C)}function p(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function m(T,C,D,L){return C===null||C.tag!==6?(C=ao(D,T.mode,L),C.return=T,C):(C=r(C,D),C.return=T,C)}function S(T,C,D,L){var ne=D.type;return ne===z?U(T,C,D.props.children,L,D.key):C!==null&&(C.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===F&&Oa(ne)===C.type)?(C=r(C,D.props),Fl(C,D),C.return=T,C):(C=os(D.type,D.key,D.props,null,T.mode,L),Fl(C,D),C.return=T,C)}function k(T,C,D,L){return C===null||C.tag!==4||C.stateNode.containerInfo!==D.containerInfo||C.stateNode.implementation!==D.implementation?(C=lo(D,T.mode,L),C.return=T,C):(C=r(C,D.children||[]),C.return=T,C)}function U(T,C,D,L,ne){return C===null||C.tag!==7?(C=Ea(D,T.mode,L,ne),C.return=T,C):(C=r(C,D),C.return=T,C)}function q(T,C,D){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=ao(""+C,T.mode,D),C.return=T,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case A:return D=os(C.type,C.key,C.props,null,T.mode,D),Fl(D,C),D.return=T,D;case M:return C=lo(C,T.mode,D),C.return=T,C;case F:return C=Oa(C),q(T,C,D)}if(Fe(C)||me(C))return C=Ea(C,T.mode,D,null),C.return=T,C;if(typeof C.then=="function")return q(T,gs(C),D);if(C.$$typeof===K)return q(T,ds(T,C),D);ms(T,C)}return null}function R(T,C,D,L){var ne=C!==null?C.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return ne!==null?null:m(T,C,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case A:return D.key===ne?S(T,C,D,L):null;case M:return D.key===ne?k(T,C,D,L):null;case F:return D=Oa(D),R(T,C,D,L)}if(Fe(D)||me(D))return ne!==null?null:U(T,C,D,L,null);if(typeof D.then=="function")return R(T,C,gs(D),L);if(D.$$typeof===K)return R(T,C,ds(T,D),L);ms(T,D)}return null}function O(T,C,D,L,ne){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return T=T.get(D)||null,m(C,T,""+L,ne);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case A:return T=T.get(L.key===null?D:L.key)||null,S(C,T,L,ne);case M:return T=T.get(L.key===null?D:L.key)||null,k(C,T,L,ne);case F:return L=Oa(L),O(T,C,D,L,ne)}if(Fe(L)||me(L))return T=T.get(D)||null,U(C,T,L,ne,null);if(typeof L.then=="function")return O(T,C,D,gs(L),ne);if(L.$$typeof===K)return O(T,C,D,ds(C,L),ne);ms(C,L)}return null}function W(T,C,D,L){for(var ne=null,xe=null,P=C,de=C=0,ge=null;P!==null&&de<D.length;de++){P.index>de?(ge=P,P=null):ge=P.sibling;var Se=R(T,P,D[de],L);if(Se===null){P===null&&(P=ge);break}e&&P&&Se.alternate===null&&t(T,P),C=c(Se,C,de),xe===null?ne=Se:xe.sibling=Se,xe=Se,P=ge}if(de===D.length)return n(T,P),ve&&Dn(T,de),ne;if(P===null){for(;de<D.length;de++)P=q(T,D[de],L),P!==null&&(C=c(P,C,de),xe===null?ne=P:xe.sibling=P,xe=P);return ve&&Dn(T,de),ne}for(P=a(P);de<D.length;de++)ge=O(P,T,de,D[de],L),ge!==null&&(e&&ge.alternate!==null&&P.delete(ge.key===null?de:ge.key),C=c(ge,C,de),xe===null?ne=ge:xe.sibling=ge,xe=ge);return e&&P.forEach(function(ha){return t(T,ha)}),ve&&Dn(T,de),ne}function ie(T,C,D,L){if(D==null)throw Error(s(151));for(var ne=null,xe=null,P=C,de=C=0,ge=null,Se=D.next();P!==null&&!Se.done;de++,Se=D.next()){P.index>de?(ge=P,P=null):ge=P.sibling;var ha=R(T,P,Se.value,L);if(ha===null){P===null&&(P=ge);break}e&&P&&ha.alternate===null&&t(T,P),C=c(ha,C,de),xe===null?ne=ha:xe.sibling=ha,xe=ha,P=ge}if(Se.done)return n(T,P),ve&&Dn(T,de),ne;if(P===null){for(;!Se.done;de++,Se=D.next())Se=q(T,Se.value,L),Se!==null&&(C=c(Se,C,de),xe===null?ne=Se:xe.sibling=Se,xe=Se);return ve&&Dn(T,de),ne}for(P=a(P);!Se.done;de++,Se=D.next())Se=O(P,T,de,Se.value,L),Se!==null&&(e&&Se.alternate!==null&&P.delete(Se.key===null?de:Se.key),C=c(Se,C,de),xe===null?ne=Se:xe.sibling=Se,xe=Se);return e&&P.forEach(function(Cb){return t(T,Cb)}),ve&&Dn(T,de),ne}function Re(T,C,D,L){if(typeof D=="object"&&D!==null&&D.type===z&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case A:e:{for(var ne=D.key;C!==null;){if(C.key===ne){if(ne=D.type,ne===z){if(C.tag===7){n(T,C.sibling),L=r(C,D.props.children),L.return=T,T=L;break e}}else if(C.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===F&&Oa(ne)===C.type){n(T,C.sibling),L=r(C,D.props),Fl(L,D),L.return=T,T=L;break e}n(T,C);break}else t(T,C);C=C.sibling}D.type===z?(L=Ea(D.props.children,T.mode,L,D.key),L.return=T,T=L):(L=os(D.type,D.key,D.props,null,T.mode,L),Fl(L,D),L.return=T,T=L)}return p(T);case M:e:{for(ne=D.key;C!==null;){if(C.key===ne)if(C.tag===4&&C.stateNode.containerInfo===D.containerInfo&&C.stateNode.implementation===D.implementation){n(T,C.sibling),L=r(C,D.children||[]),L.return=T,T=L;break e}else{n(T,C);break}else t(T,C);C=C.sibling}L=lo(D,T.mode,L),L.return=T,T=L}return p(T);case F:return D=Oa(D),Re(T,C,D,L)}if(Fe(D))return W(T,C,D,L);if(me(D)){if(ne=me(D),typeof ne!="function")throw Error(s(150));return D=ne.call(D),ie(T,C,D,L)}if(typeof D.then=="function")return Re(T,C,gs(D),L);if(D.$$typeof===K)return Re(T,C,ds(T,D),L);ms(T,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,C!==null&&C.tag===6?(n(T,C.sibling),L=r(C,D),L.return=T,T=L):(n(T,C),L=ao(D,T.mode,L),L.return=T,T=L),p(T)):n(T,C)}return function(T,C,D,L){try{$l=0;var ne=Re(T,C,D,L);return ul=null,ne}catch(P){if(P===cl||P===ps)throw P;var xe=zt(29,P,null,T.mode);return xe.lanes=L,xe.return=T,xe}finally{}}}var ja=jd(!0),Md=jd(!1),Fn=!1;function bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ce&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=rs(e),bd(e,null,n),t}return ss(e,a,t,n),rs(e)}function Wl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Rt(e,n)}}function yo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?r=c=p:c=c.next=p,n=n.next}while(n!==null);c===null?r=c=t:c=c.next=t}else r=c=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var xo=!1;function Pl(){if(xo){var e=ol;if(e!==null)throw e}}function ei(e,t,n,a){xo=!1;var r=e.updateQueue;Fn=!1;var c=r.firstBaseUpdate,p=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var S=m,k=S.next;S.next=null,p===null?c=k:p.next=k,p=S;var U=e.alternate;U!==null&&(U=U.updateQueue,m=U.lastBaseUpdate,m!==p&&(m===null?U.firstBaseUpdate=k:m.next=k,U.lastBaseUpdate=S))}if(c!==null){var q=r.baseState;p=0,U=k=S=null,m=c;do{var R=m.lane&-536870913,O=R!==m.lane;if(O?(he&R)===R:(a&R)===R){R!==0&&R===rl&&(xo=!0),U!==null&&(U=U.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var W=e,ie=m;R=t;var Re=n;switch(ie.tag){case 1:if(W=ie.payload,typeof W=="function"){q=W.call(Re,q,R);break e}q=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=ie.payload,R=typeof W=="function"?W.call(Re,q,R):W,R==null)break e;q=x({},q,R);break e;case 2:Fn=!0}}R=m.callback,R!==null&&(e.flags|=64,O&&(e.flags|=8192),O=r.callbacks,O===null?r.callbacks=[R]:O.push(R))}else O={lane:R,tag:m.tag,payload:m.payload,callback:m.callback,next:null},U===null?(k=U=O,S=q):U=U.next=O,p|=R;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;O=m,m=O.next,O.next=null,r.lastBaseUpdate=O,r.shared.pending=null}}while(!0);U===null&&(S=q),r.baseState=S,r.firstBaseUpdate=k,r.lastBaseUpdate=U,c===null&&(r.shared.lanes=0),la|=p,e.lanes=p,e.memoizedState=q}}function _d(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Ud(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)_d(n[e],t)}var dl=w(null),bs=w(0);function Ld(e,t){e=qn,V(bs,e),V(dl,t),qn=e|t.baseLanes}function So(){V(bs,qn),V(dl,dl.current)}function wo(){qn=bs.current,j(dl),j(bs)}var jt=w(null),Ft=null;function ea(e){var t=e.alternate;V(Ve,Ve.current&1),V(jt,e),Ft===null&&(t===null||dl.current!==null||t.memoizedState!==null)&&(Ft=e)}function Co(e){V(Ve,Ve.current),V(jt,e),Ft===null&&(Ft=e)}function Bd(e){e.tag===22?(V(Ve,Ve.current),V(jt,e),Ft===null&&(Ft=e)):ta()}function ta(){V(Ve,Ve.current),V(jt,jt.current)}function Mt(e){j(jt),Ft===e&&(Ft=null),j(Ve)}var Ve=w(0);function vs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||kc(n)||Rc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var On=0,ue=null,De=null,Ie=null,ys=!1,fl=!1,Ma=!1,xs=0,ti=0,pl=null,p0=0;function Ye(){throw Error(s(321))}function No(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function To(e,t,n,a,r,c){return On=c,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?wf:Ho,Ma=!1,c=n(a,r),Ma=!1,fl&&(c=Hd(t,n,a,r)),qd(e),c}function qd(e){_.H=li;var t=De!==null&&De.next!==null;if(On=0,Ie=De=ue=null,ys=!1,ti=0,pl=null,t)throw Error(s(300));e===null||Je||(e=e.dependencies,e!==null&&us(e)&&(Je=!0))}function Hd(e,t,n,a){ue=e;var r=0;do{if(fl&&(pl=null),ti=0,fl=!1,25<=r)throw Error(s(301));if(r+=1,Ie=De=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}_.H=Cf,c=t(n,a)}while(fl);return c}function h0(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?ni(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ue.flags|=1024),t}function Eo(){var e=xs!==0;return xs=0,e}function Ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Do(e){if(ys){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ys=!1}On=0,Ie=De=ue=null,fl=!1,ti=xs=0,pl=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?ue.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Qe(){if(De===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Ie===null?ue.memoizedState:Ie.next;if(t!==null)Ie=t,De=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ie===null?ue.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function Ss(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ni(e){var t=ti;return ti+=1,pl===null&&(pl=[]),e=Rd(pl,e,t),t=ue,(Ie===null?t.memoizedState:Ie.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?wf:Ho),e}function ws(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ni(e);if(e.$$typeof===K)return ot(e)}throw Error(s(438,String(e)))}function ko(e){var t=null,n=ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ue.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ss(),ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=re;return t.index++,n}function zn(e,t){return typeof t=="function"?t(e):t}function Cs(e){var t=Qe();return Ro(t,De,e)}function Ro(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var r=e.baseQueue,c=a.pending;if(c!==null){if(r!==null){var p=r.next;r.next=c.next,c.next=p}t.baseQueue=r=c,a.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{t=r.next;var m=p=null,S=null,k=t,U=!1;do{var q=k.lane&-536870913;if(q!==k.lane?(he&q)===q:(On&q)===q){var R=k.revertLane;if(R===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),q===rl&&(U=!0);else if((On&R)===R){k=k.next,R===rl&&(U=!0);continue}else q={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},S===null?(m=S=q,p=c):S=S.next=q,ue.lanes|=R,la|=R;q=k.action,Ma&&n(c,q),c=k.hasEagerState?k.eagerState:n(c,q)}else R={lane:q,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},S===null?(m=S=R,p=c):S=S.next=R,ue.lanes|=q,la|=q;k=k.next}while(k!==null&&k!==t);if(S===null?p=c:S.next=m,!Ot(c,e.memoizedState)&&(Je=!0,U&&(n=ol,n!==null)))throw n;e.memoizedState=c,e.baseState=p,e.baseQueue=S,a.lastRenderedState=c}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Oo(e){var t=Qe(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,c=t.memoizedState;if(r!==null){n.pending=null;var p=r=r.next;do c=e(c,p.action),p=p.next;while(p!==r);Ot(c,t.memoizedState)||(Je=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,a]}function Yd(e,t,n){var a=ue,r=Qe(),c=ve;if(c){if(n===void 0)throw Error(s(407));n=n()}else n=t();var p=!Ot((De||r).memoizedState,n);if(p&&(r.memoizedState=n,Je=!0),r=r.queue,Mo(Xd.bind(null,a,r,e),[e]),r.getSnapshot!==t||p||Ie!==null&&Ie.memoizedState.tag&1){if(a.flags|=2048,hl(9,{destroy:void 0},Zd.bind(null,a,r,n,t),null),je===null)throw Error(s(349));c||(On&127)!==0||Gd(a,t,n)}return n}function Gd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t=Ss(),ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zd(e,t,n,a){t.value=n,t.getSnapshot=a,Vd(t)&&Qd(e)}function Xd(e,t,n){return n(function(){Vd(t)&&Qd(e)})}function Vd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function Qd(e){var t=Ta(e,2);t!==null&&kt(t,e,2)}function zo(e){var t=mt();if(typeof e=="function"){var n=e;if(e=n(),Ma){Ht(!0);try{n()}finally{Ht(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:e},t}function Kd(e,t,n,a){return e.baseState=n,Ro(e,De,typeof a=="function"?a:zn)}function g0(e,t,n,a,r){if(Es(e))throw Error(s(485));if(e=t.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};_.T!==null?n(!0):c.isTransition=!1,a(c),n=t.pending,n===null?(c.next=t.pending=c,Id(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Id(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var c=_.T,p={};_.T=p;try{var m=n(r,a),S=_.S;S!==null&&S(p,m),Jd(e,t,m)}catch(k){jo(e,t,k)}finally{c!==null&&p.types!==null&&(c.types=p.types),_.T=c}}else try{c=n(r,a),Jd(e,t,c)}catch(k){jo(e,t,k)}}function Jd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){$d(e,t,a)},function(a){return jo(e,t,a)}):$d(e,t,n)}function $d(e,t,n){t.status="fulfilled",t.value=n,Fd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Id(e,n)))}function jo(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Fd(t),t=t.next;while(t!==a)}e.action=null}function Fd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Wd(e,t){return t}function Pd(e,t){if(ve){var n=je.formState;if(n!==null){e:{var a=ue;if(ve){if(_e){t:{for(var r=_e,c=$t;r.nodeType!==8;){if(!c){r=null;break t}if(r=Wt(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){_e=Wt(r.nextSibling),a=r.data==="F!";break e}}Jn(a)}a=!1}a&&(t=n[0])}}return n=mt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wd,lastRenderedState:t},n.queue=a,n=yf.bind(null,ue,a),a.dispatch=n,a=zo(!1),c=qo.bind(null,ue,!1,a.queue),a=mt(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=g0.bind(null,ue,r,c,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function ef(e){var t=Qe();return tf(t,De,e)}function tf(e,t,n){if(t=Ro(e,t,Wd)[0],e=Cs(zn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ni(t)}catch(p){throw p===cl?ps:p}else a=t;t=Qe();var r=t.queue,c=r.dispatch;return n!==t.memoizedState&&(ue.flags|=2048,hl(9,{destroy:void 0},m0.bind(null,r,n),null)),[a,c,e]}function m0(e,t){e.action=t}function nf(e){var t=Qe(),n=De;if(n!==null)return tf(t,n,e);Qe(),t=t.memoizedState,n=Qe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function hl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ue.updateQueue,t===null&&(t=Ss(),ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function af(){return Qe().memoizedState}function Ns(e,t,n,a){var r=mt();ue.flags|=e,r.memoizedState=hl(1|t,{destroy:void 0},n,a===void 0?null:a)}function Ts(e,t,n,a){var r=Qe();a=a===void 0?null:a;var c=r.memoizedState.inst;De!==null&&a!==null&&No(a,De.memoizedState.deps)?r.memoizedState=hl(t,c,n,a):(ue.flags|=e,r.memoizedState=hl(1|t,c,n,a))}function lf(e,t){Ns(8390656,8,e,t)}function Mo(e,t){Ts(2048,8,e,t)}function b0(e){ue.flags|=4;var t=ue.updateQueue;if(t===null)t=Ss(),ue.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function sf(e){var t=Qe().memoizedState;return b0({ref:t,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function rf(e,t){return Ts(4,2,e,t)}function of(e,t){return Ts(4,4,e,t)}function cf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function uf(e,t,n){n=n!=null?n.concat([e]):null,Ts(4,4,cf.bind(null,t,e),n)}function _o(){}function df(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&No(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function ff(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&No(t,a[1]))return a[0];if(a=e(),Ma){Ht(!0);try{e()}finally{Ht(!1)}}return n.memoizedState=[a,t],a}function Uo(e,t,n){return n===void 0||(On&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=pp(),ue.lanes|=e,la|=e,n)}function pf(e,t,n,a){return Ot(n,t)?n:dl.current!==null?(e=Uo(e,n,a),Ot(e,t)||(Je=!0),e):(On&42)===0||(On&1073741824)!==0&&(he&261930)===0?(Je=!0,e.memoizedState=n):(e=pp(),ue.lanes|=e,la|=e,t)}function hf(e,t,n,a,r){var c=B.p;B.p=c!==0&&8>c?c:8;var p=_.T,m={};_.T=m,qo(e,!1,t,n);try{var S=r(),k=_.S;if(k!==null&&k(m,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var U=f0(S,a);ai(e,t,U,Lt(e))}else ai(e,t,a,Lt(e))}catch(q){ai(e,t,{then:function(){},status:"rejected",reason:q},Lt())}finally{B.p=c,p!==null&&m.types!==null&&(p.types=m.types),_.T=p}}function v0(){}function Lo(e,t,n,a){if(e.tag!==5)throw Error(s(476));var r=gf(e).queue;hf(e,r,t,J,n===null?v0:function(){return mf(e),n(a)})}function gf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:J},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function mf(e){var t=gf(e);t.next===null&&(t=e.alternate.memoizedState),ai(e,t.next.queue,{},Lt())}function Bo(){return ot(xi)}function bf(){return Qe().memoizedState}function vf(){return Qe().memoizedState}function y0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Lt();e=Wn(n);var a=Pn(t,e,n);a!==null&&(kt(a,t,n),Wl(a,t,n)),t={cache:po()},e.payload=t;return}t=t.return}}function x0(e,t,n){var a=Lt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Es(e)?xf(t,n):(n=to(e,t,n,a),n!==null&&(kt(n,e,a),Sf(n,t,a)))}function yf(e,t,n){var a=Lt();ai(e,t,n,a)}function ai(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Es(e))xf(t,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,m=c(p,n);if(r.hasEagerState=!0,r.eagerState=m,Ot(m,p))return ss(e,t,r,0),je===null&&is(),!1}catch{}finally{}if(n=to(e,t,r,a),n!==null)return kt(n,e,a),Sf(n,t,a),!0}return!1}function qo(e,t,n,a){if(a={lane:2,revertLane:bc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Es(e)){if(t)throw Error(s(479))}else t=to(e,n,a,2),t!==null&&kt(t,e,2)}function Es(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function xf(e,t){fl=ys=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sf(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Rt(e,n)}}var li={readContext:ot,use:ws,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye};li.useEffectEvent=Ye;var wf={readContext:ot,use:ws,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:lf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ns(4194308,4,cf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ns(4194308,4,e,t)},useInsertionEffect:function(e,t){Ns(4,2,e,t)},useMemo:function(e,t){var n=mt();t=t===void 0?null:t;var a=e();if(Ma){Ht(!0);try{e()}finally{Ht(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=mt();if(n!==void 0){var r=n(t);if(Ma){Ht(!0);try{n(t)}finally{Ht(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=x0.bind(null,ue,e),[a.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=zo(e);var t=e.queue,n=yf.bind(null,ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_o,useDeferredValue:function(e,t){var n=mt();return Uo(n,e,t)},useTransition:function(){var e=zo(!1);return e=hf.bind(null,ue,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ue,r=mt();if(ve){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),je===null)throw Error(s(349));(he&127)!==0||Gd(a,t,n)}r.memoizedState=n;var c={value:n,getSnapshot:t};return r.queue=c,lf(Xd.bind(null,a,c,e),[e]),a.flags|=2048,hl(9,{destroy:void 0},Zd.bind(null,a,c,n,t),null),n},useId:function(){var e=mt(),t=je.identifierPrefix;if(ve){var n=gn,a=hn;n=(a&~(1<<32-ft(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=xs++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=p0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Bo,useFormState:Pd,useActionState:Pd,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=qo.bind(null,ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:ko,useCacheRefresh:function(){return mt().memoizedState=y0.bind(null,ue)},useEffectEvent:function(e){var t=mt(),n={impl:e};return t.memoizedState=n,function(){if((Ce&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Ho={readContext:ot,use:ws,useCallback:df,useContext:ot,useEffect:Mo,useImperativeHandle:uf,useInsertionEffect:rf,useLayoutEffect:of,useMemo:ff,useReducer:Cs,useRef:af,useState:function(){return Cs(zn)},useDebugValue:_o,useDeferredValue:function(e,t){var n=Qe();return pf(n,De.memoizedState,e,t)},useTransition:function(){var e=Cs(zn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:ni(e),t]},useSyncExternalStore:Yd,useId:bf,useHostTransitionStatus:Bo,useFormState:ef,useActionState:ef,useOptimistic:function(e,t){var n=Qe();return Kd(n,De,e,t)},useMemoCache:ko,useCacheRefresh:vf};Ho.useEffectEvent=sf;var Cf={readContext:ot,use:ws,useCallback:df,useContext:ot,useEffect:Mo,useImperativeHandle:uf,useInsertionEffect:rf,useLayoutEffect:of,useMemo:ff,useReducer:Oo,useRef:af,useState:function(){return Oo(zn)},useDebugValue:_o,useDeferredValue:function(e,t){var n=Qe();return De===null?Uo(n,e,t):pf(n,De.memoizedState,e,t)},useTransition:function(){var e=Oo(zn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:ni(e),t]},useSyncExternalStore:Yd,useId:bf,useHostTransitionStatus:Bo,useFormState:nf,useActionState:nf,useOptimistic:function(e,t){var n=Qe();return De!==null?Kd(n,De,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ko,useCacheRefresh:vf};Cf.useEffectEvent=sf;function Yo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Go={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Lt(),r=Wn(a);r.payload=t,n!=null&&(r.callback=n),t=Pn(e,r,a),t!==null&&(kt(t,e,a),Wl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Lt(),r=Wn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Pn(e,r,a),t!==null&&(kt(t,e,a),Wl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Lt(),a=Wn(n);a.tag=2,t!=null&&(a.callback=t),t=Pn(e,a,n),t!==null&&(kt(t,e,n),Wl(t,e,n))}};function Nf(e,t,n,a,r,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,p):t.prototype&&t.prototype.isPureReactComponent?!Xl(n,a)||!Xl(r,c):!0}function Tf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Go.enqueueReplaceState(t,t.state,null)}function _a(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Ef(e){ls(e)}function Af(e){console.error(e)}function Df(e){ls(e)}function As(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function kf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Zo(e,t,n){return n=Wn(n),n.tag=3,n.payload={element:null},n.callback=function(){As(e,t)},n}function Rf(e){return e=Wn(e),e.tag=3,e}function Of(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var c=a.value;e.payload=function(){return r(c)},e.callback=function(){kf(t,n,a)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){kf(t,n,a),typeof r!="function"&&(ia===null?ia=new Set([this]):ia.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function S0(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&sl(t,n,r,!0),n=jt.current,n!==null){switch(n.tag){case 31:case 13:return Ft===null?qs():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===hs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),hc(e,a,r)),!1;case 22:return n.flags|=65536,a===hs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),hc(e,a,r)),!1}throw Error(s(435,n.tag))}return hc(e,a,r),qs(),!1}if(ve)return t=jt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==ro&&(e=Error(s(422),{cause:a}),Kl(Kt(e,n)))):(a!==ro&&(t=Error(s(423),{cause:a}),Kl(Kt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Kt(a,n),r=Zo(e.stateNode,a,r),yo(e,r),Ge!==4&&(Ge=2)),!1;var c=Error(s(520),{cause:a});if(c=Kt(c,n),fi===null?fi=[c]:fi.push(c),Ge!==4&&(Ge=2),t===null)return!0;a=Kt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Zo(n.stateNode,a,e),yo(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ia===null||!ia.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Rf(r),Of(r,e,n,a),yo(n,r),!1}n=n.return}while(n!==null);return!1}var Xo=Error(s(461)),Je=!1;function ct(e,t,n,a){t.child=e===null?Md(t,null,n,a):ja(t,e.child,n,a)}function zf(e,t,n,a,r){n=n.render;var c=t.ref;if("ref"in a){var p={};for(var m in a)m!=="ref"&&(p[m]=a[m])}else p=a;return ka(t),a=To(e,t,n,p,c,r),m=Eo(),e!==null&&!Je?(Ao(e,t,r),jn(e,t,r)):(ve&&m&&io(t),t.flags|=1,ct(e,t,a,r),t.child)}function jf(e,t,n,a,r){if(e===null){var c=n.type;return typeof c=="function"&&!no(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,Mf(e,t,c,a,r)):(e=os(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Wo(e,r)){var p=c.memoizedProps;if(n=n.compare,n=n!==null?n:Xl,n(p,a)&&e.ref===t.ref)return jn(e,t,r)}return t.flags|=1,e=An(c,a),e.ref=t.ref,e.return=t,t.child=e}function Mf(e,t,n,a,r){if(e!==null){var c=e.memoizedProps;if(Xl(c,a)&&e.ref===t.ref)if(Je=!1,t.pendingProps=a=c,Wo(e,r))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,jn(e,t,r)}return Vo(e,t,n,a,r)}function _f(e,t,n,a){var r=a.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~c}else a=0,t.child=null;return Uf(e,t,c,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fs(t,c!==null?c.cachePool:null),c!==null?Ld(t,c):So(),Bd(t);else return a=t.lanes=536870912,Uf(e,t,c!==null?c.baseLanes|n:n,n,a)}else c!==null?(fs(t,c.cachePool),Ld(t,c),ta(),t.memoizedState=null):(e!==null&&fs(t,null),So(),ta());return ct(e,t,r,n),t.child}function ii(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uf(e,t,n,a,r){var c=go();return c=c===null?null:{parent:Ke._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&fs(t,null),So(),Bd(t),e!==null&&sl(e,t,a,!0),t.childLanes=r,null}function Ds(e,t){return t=Rs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Lf(e,t,n){return ja(t,e.child,null,n),e=Ds(t,t.pendingProps),e.flags|=2,Mt(t),t.memoizedState=null,e}function w0(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(a.mode==="hidden")return e=Ds(t,a),t.lanes=536870912,ii(null,e);if(Co(t),(e=_e)?(e=Jp(e,$t),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Kn!==null?{id:hn,overflow:gn}:null,retryLane:536870912,hydrationErrors:null},n=yd(e),n.return=t,t.child=n,rt=t,_e=null)):e=null,e===null)throw Jn(t);return t.lanes=536870912,null}return Ds(t,a)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(Co(t),r)if(t.flags&256)t.flags&=-257,t=Lf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Je||sl(e,t,n,!1),r=(n&e.childLanes)!==0,Je||r){if(a=je,a!==null&&(p=Gt(a,n),p!==0&&p!==c.retryLane))throw c.retryLane=p,Ta(e,p),kt(a,e,p),Xo;qs(),t=Lf(e,t,n)}else e=c.treeContext,_e=Wt(p.nextSibling),rt=t,ve=!0,In=null,$t=!1,e!==null&&wd(t,e),t=Ds(t,a),t.flags|=4096;return t}return e=An(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ks(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Vo(e,t,n,a,r){return ka(t),n=To(e,t,n,a,void 0,r),a=Eo(),e!==null&&!Je?(Ao(e,t,r),jn(e,t,r)):(ve&&a&&io(t),t.flags|=1,ct(e,t,n,r),t.child)}function Bf(e,t,n,a,r,c){return ka(t),t.updateQueue=null,n=Hd(t,a,n,r),qd(e),a=Eo(),e!==null&&!Je?(Ao(e,t,c),jn(e,t,c)):(ve&&a&&io(t),t.flags|=1,ct(e,t,n,c),t.child)}function qf(e,t,n,a,r){if(ka(t),t.stateNode===null){var c=nl,p=n.contextType;typeof p=="object"&&p!==null&&(c=ot(p)),c=new n(a,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Go,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=a,c.state=t.memoizedState,c.refs={},bo(t),p=n.contextType,c.context=typeof p=="object"&&p!==null?ot(p):nl,c.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Yo(t,n,p,a),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&Go.enqueueReplaceState(c,c.state,null),ei(t,a,c,r),Pl(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){c=t.stateNode;var m=t.memoizedProps,S=_a(n,m);c.props=S;var k=c.context,U=n.contextType;p=nl,typeof U=="object"&&U!==null&&(p=ot(U));var q=n.getDerivedStateFromProps;U=typeof q=="function"||typeof c.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,U||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m||k!==p)&&Tf(t,c,a,p),Fn=!1;var R=t.memoizedState;c.state=R,ei(t,a,c,r),Pl(),k=t.memoizedState,m||R!==k||Fn?(typeof q=="function"&&(Yo(t,n,q,a),k=t.memoizedState),(S=Fn||Nf(t,n,S,a,R,k,p))?(U||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=k),c.props=a,c.state=k,c.context=p,a=S):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{c=t.stateNode,vo(e,t),p=t.memoizedProps,U=_a(n,p),c.props=U,q=t.pendingProps,R=c.context,k=n.contextType,S=nl,typeof k=="object"&&k!==null&&(S=ot(k)),m=n.getDerivedStateFromProps,(k=typeof m=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==q||R!==S)&&Tf(t,c,a,S),Fn=!1,R=t.memoizedState,c.state=R,ei(t,a,c,r),Pl();var O=t.memoizedState;p!==q||R!==O||Fn||e!==null&&e.dependencies!==null&&us(e.dependencies)?(typeof m=="function"&&(Yo(t,n,m,a),O=t.memoizedState),(U=Fn||Nf(t,n,U,a,R,O,S)||e!==null&&e.dependencies!==null&&us(e.dependencies))?(k||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,O,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,O,S)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=O),c.props=a,c.state=O,c.context=S,a=U):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),a=!1)}return c=a,ks(e,t),a=(t.flags&128)!==0,c||a?(c=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&a?(t.child=ja(t,e.child,null,r),t.child=ja(t,null,n,r)):ct(e,t,n,r),t.memoizedState=c.state,e=t.child):e=jn(e,t,r),e}function Hf(e,t,n,a){return Aa(),t.flags|=256,ct(e,t,n,a),t.child}var Qo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ko(e){return{baseLanes:e,cachePool:Dd()}}function Io(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ut),e}function Yf(e,t,n){var a=t.pendingProps,r=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),p&&(r=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(r?ea(t):ta(),(e=_e)?(e=Jp(e,$t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Kn!==null?{id:hn,overflow:gn}:null,retryLane:536870912,hydrationErrors:null},n=yd(e),n.return=t,t.child=n,rt=t,_e=null)):e=null,e===null)throw Jn(t);return Rc(e)?t.lanes=32:t.lanes=536870912,null}var m=a.children;return a=a.fallback,r?(ta(),r=t.mode,m=Rs({mode:"hidden",children:m},r),a=Ea(a,r,n,null),m.return=t,a.return=t,m.sibling=a,t.child=m,a=t.child,a.memoizedState=Ko(n),a.childLanes=Io(e,p,n),t.memoizedState=Qo,ii(null,a)):(ea(t),Jo(t,m))}var S=e.memoizedState;if(S!==null&&(m=S.dehydrated,m!==null)){if(c)t.flags&256?(ea(t),t.flags&=-257,t=$o(e,t,n)):t.memoizedState!==null?(ta(),t.child=e.child,t.flags|=128,t=null):(ta(),m=a.fallback,r=t.mode,a=Rs({mode:"visible",children:a.children},r),m=Ea(m,r,n,null),m.flags|=2,a.return=t,m.return=t,a.sibling=m,t.child=a,ja(t,e.child,null,n),a=t.child,a.memoizedState=Ko(n),a.childLanes=Io(e,p,n),t.memoizedState=Qo,t=ii(null,a));else if(ea(t),Rc(m)){if(p=m.nextSibling&&m.nextSibling.dataset,p)var k=p.dgst;p=k,a=Error(s(419)),a.stack="",a.digest=p,Kl({value:a,source:null,stack:null}),t=$o(e,t,n)}else if(Je||sl(e,t,n,!1),p=(n&e.childLanes)!==0,Je||p){if(p=je,p!==null&&(a=Gt(p,n),a!==0&&a!==S.retryLane))throw S.retryLane=a,Ta(e,a),kt(p,e,a),Xo;kc(m)||qs(),t=$o(e,t,n)}else kc(m)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,_e=Wt(m.nextSibling),rt=t,ve=!0,In=null,$t=!1,e!==null&&wd(t,e),t=Jo(t,a.children),t.flags|=4096);return t}return r?(ta(),m=a.fallback,r=t.mode,S=e.child,k=S.sibling,a=An(S,{mode:"hidden",children:a.children}),a.subtreeFlags=S.subtreeFlags&65011712,k!==null?m=An(k,m):(m=Ea(m,r,n,null),m.flags|=2),m.return=t,a.return=t,a.sibling=m,t.child=a,ii(null,a),a=t.child,m=e.child.memoizedState,m===null?m=Ko(n):(r=m.cachePool,r!==null?(S=Ke._currentValue,r=r.parent!==S?{parent:S,pool:S}:r):r=Dd(),m={baseLanes:m.baseLanes|n,cachePool:r}),a.memoizedState=m,a.childLanes=Io(e,p,n),t.memoizedState=Qo,ii(e.child,a)):(ea(t),n=e.child,e=n.sibling,n=An(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Jo(e,t){return t=Rs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Rs(e,t){return e=zt(22,e,null,t),e.lanes=0,e}function $o(e,t,n){return ja(t,e.child,null,n),e=Jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),uo(e.return,t,n)}function Fo(e,t,n,a,r,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:c}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=a,p.tail=n,p.tailMode=r,p.treeForkCount=c)}function Zf(e,t,n){var a=t.pendingProps,r=a.revealOrder,c=a.tail;a=a.children;var p=Ve.current,m=(p&2)!==0;if(m?(p=p&1|2,t.flags|=128):p&=1,V(Ve,p),ct(e,t,a,n),a=ve?Ql:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gf(e,n,t);else if(e.tag===19)Gf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&vs(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Fo(t,!1,r,n,c,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&vs(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Fo(t,!0,n,null,c,a);break;case"together":Fo(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function jn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),la|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(sl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=An(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=An(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&us(e)))}function C0(e,t,n){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),$n(t,Ke,e.memoizedState.cache),Aa();break;case 27:case 5:ye(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:$n(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Co(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ea(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Yf(e,t,n):(ea(t),e=jn(e,t,n),e!==null?e.sibling:null);ea(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(sl(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return Zf(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),V(Ve,Ve.current),a)break;return null;case 22:return t.lanes=0,_f(e,t,n,t.pendingProps);case 24:$n(t,Ke,e.memoizedState.cache)}return jn(e,t,n)}function Xf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Wo(e,n)&&(t.flags&128)===0)return Je=!1,C0(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,ve&&(t.flags&1048576)!==0&&Sd(t,Ql,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e=="function")no(e)?(a=_a(e,a),t.tag=1,t=qf(null,t,e,a,n)):(t.tag=0,t=Vo(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===I){t.tag=11,t=zf(null,t,e,a,n);break e}else if(r===H){t.tag=14,t=jf(null,t,e,a,n);break e}}throw t=He(e)||e,Error(s(306,t,""))}}return t;case 0:return Vo(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=_a(a,t.pendingProps),qf(e,t,a,r,n);case 3:e:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var c=t.memoizedState;r=c.element,vo(e,t),ei(t,a,null,n);var p=t.memoizedState;if(a=p.cache,$n(t,Ke,a),a!==c.cache&&fo(t,[Ke],n,!0),Pl(),a=p.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Hf(e,t,a,n);break e}else if(a!==r){r=Kt(Error(s(424)),t),Kl(r),t=Hf(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=Wt(e.firstChild),rt=t,ve=!0,In=null,$t=!0,n=Md(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Aa(),a===r){t=jn(e,t,n);break e}ct(e,t,a,n)}t=t.child}return t;case 26:return ks(e,t),e===null?(n=th(t.type,null,t.pendingProps,null))?t.memoizedState=n:ve||(n=t.type,e=t.pendingProps,a=Qs(ee.current).createElement(n),a[st]=t,a[Ct]=e,ut(a,n,e),nt(a),t.stateNode=a):t.memoizedState=th(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&ve&&(a=t.stateNode=Wp(t.type,t.pendingProps,ee.current),rt=t,$t=!0,r=_e,ca(t.type)?(Oc=r,_e=Wt(a.firstChild)):_e=r),ct(e,t,t.pendingProps.children,n),ks(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((r=a=_e)&&(a=P0(a,t.type,t.pendingProps,$t),a!==null?(t.stateNode=a,rt=t,_e=Wt(a.firstChild),$t=!1,r=!0):r=!1),r||Jn(t)),ye(t),r=t.type,c=t.pendingProps,p=e!==null?e.memoizedProps:null,a=c.children,Ec(r,c)?a=null:p!==null&&Ec(r,p)&&(t.flags|=32),t.memoizedState!==null&&(r=To(e,t,h0,null,null,n),xi._currentValue=r),ks(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&ve&&((e=n=_e)&&(n=eb(n,t.pendingProps,$t),n!==null?(t.stateNode=n,rt=t,_e=null,e=!0):e=!1),e||Jn(t)),null;case 13:return Yf(e,t,n);case 4:return Le(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ja(t,null,a,n):ct(e,t,a,n),t.child;case 11:return zf(e,t,t.type,t.pendingProps,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,$n(t,t.type,a.value),ct(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,ka(t),r=ot(r),a=a(r),t.flags|=1,ct(e,t,a,n),t.child;case 14:return jf(e,t,t.type,t.pendingProps,n);case 15:return Mf(e,t,t.type,t.pendingProps,n);case 19:return Zf(e,t,n);case 31:return w0(e,t,n);case 22:return _f(e,t,n,t.pendingProps);case 24:return ka(t),a=ot(Ke),e===null?(r=go(),r===null&&(r=je,c=po(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),t.memoizedState={parent:a,cache:r},bo(t),$n(t,Ke,r)):((e.lanes&n)!==0&&(vo(e,t),ei(t,null,null,n),Pl()),r=e.memoizedState,c=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),$n(t,Ke,a)):(a=c.cache,$n(t,Ke,a),a!==r.cache&&fo(t,[Ke],n,!0))),ct(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Mn(e){e.flags|=4}function Po(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(bp())e.flags|=8192;else throw za=hs,mo}else e.flags&=-16777217}function Vf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sh(t))if(bp())e.flags|=8192;else throw za=hs,mo}function Os(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?pt():536870912,e.lanes|=t,vl|=t)}function si(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function N0(e,t,n){var a=t.pendingProps;switch(so(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Rn(Ke),we(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(il(t)?Mn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,oo())),Ue(t),null;case 26:var r=t.type,c=t.memoizedState;return e===null?(Mn(t),c!==null?(Ue(t),Vf(t,c)):(Ue(t),Po(t,r,null,a,n))):c?c!==e.memoizedState?(Mn(t),Ue(t),Vf(t,c)):(Ue(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Mn(t),Ue(t),Po(t,r,e,a,n)),null;case 27:if(un(t),n=ee.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Mn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Ue(t),null}e=$.current,il(t)?Cd(t):(e=Wp(r,a,n),t.stateNode=e,Mn(t))}return Ue(t),null;case 5:if(un(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Mn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Ue(t),null}if(c=$.current,il(t))Cd(t);else{var p=Qs(ee.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof a.is=="string"?p.createElement("select",{is:a.is}):p.createElement("select"),a.multiple?c.multiple=!0:a.size&&(c.size=a.size);break;default:c=typeof a.is=="string"?p.createElement(r,{is:a.is}):p.createElement(r)}}c[st]=t,c[Ct]=a;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=c;e:switch(ut(c,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Mn(t)}}return Ue(t),Po(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Mn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=ee.current,il(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=rt,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Yp(e.nodeValue,n)),e||Jn(t,!0)}else e=Qs(e).createTextNode(a),e[st]=t,t.stateNode=e}return Ue(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=il(t),n!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[st]=t}else Aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),e=!1}else n=oo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Mt(t),t):(Mt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Ue(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=il(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(s(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[st]=t}else Aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),r=!1}else r=oo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Mt(t),t):(Mt(t),null)}return Mt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Os(t,t.updateQueue),Ue(t),null);case 4:return we(),e===null&&Sc(t.stateNode.containerInfo),Ue(t),null;case 10:return Rn(t.type),Ue(t),null;case 19:if(j(Ve),a=t.memoizedState,a===null)return Ue(t),null;if(r=(t.flags&128)!==0,c=a.rendering,c===null)if(r)si(a,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=vs(e),c!==null){for(t.flags|=128,si(a,!1),e=c.updateQueue,t.updateQueue=e,Os(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vd(n,e),n=n.sibling;return V(Ve,Ve.current&1|2),ve&&Dn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&dt()>Us&&(t.flags|=128,r=!0,si(a,!1),t.lanes=4194304)}else{if(!r)if(e=vs(c),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Os(t,e),si(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!ve)return Ue(t),null}else 2*dt()-a.renderingStartTime>Us&&n!==536870912&&(t.flags|=128,r=!0,si(a,!1),t.lanes=4194304);a.isBackwards?(c.sibling=t.child,t.child=c):(e=a.last,e!==null?e.sibling=c:t.child=c,a.last=c)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=dt(),e.sibling=null,n=Ve.current,V(Ve,r?n&1|2:n&1),ve&&Dn(t,a.treeForkCount),e):(Ue(t),null);case 22:case 23:return Mt(t),wo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),n=t.updateQueue,n!==null&&Os(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&j(Ra),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Rn(Ke),Ue(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function T0(e,t){switch(so(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(Ke),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return un(t),null;case 31:if(t.memoizedState!==null){if(Mt(t),t.alternate===null)throw Error(s(340));Aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(Ve),null;case 4:return we(),null;case 10:return Rn(t.type),null;case 22:case 23:return Mt(t),wo(),e!==null&&j(Ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Rn(Ke),null;case 25:return null;default:return null}}function Qf(e,t){switch(so(t),t.tag){case 3:Rn(Ke),we();break;case 26:case 27:case 5:un(t);break;case 4:we();break;case 31:t.memoizedState!==null&&Mt(t);break;case 13:Mt(t);break;case 19:j(Ve);break;case 10:Rn(t.type);break;case 22:case 23:Mt(t),wo(),e!==null&&j(Ra);break;case 24:Rn(Ke)}}function ri(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var c=n.create,p=n.inst;a=c(),p.destroy=a}n=n.next}while(n!==r)}}catch(m){Ee(t,t.return,m)}}function na(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){var p=a.inst,m=p.destroy;if(m!==void 0){p.destroy=void 0,r=t;var S=n,k=m;try{k()}catch(U){Ee(r,S,U)}}}a=a.next}while(a!==c)}}catch(U){Ee(t,t.return,U)}}function Kf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ud(t,n)}catch(a){Ee(e,e.return,a)}}}function If(e,t,n){n.props=_a(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ee(e,t,a)}}function oi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){Ee(e,t,r)}}function mn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Ee(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function Jf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Ee(e,e.return,r)}}function ec(e,t,n){try{var a=e.stateNode;K0(a,e.type,n,t),a[Ct]=t}catch(r){Ee(e,e.return,r)}}function $f(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ca(e.type)||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tn));else if(a!==4&&(a===27&&ca(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(nc(e,t,n),e=e.sibling;e!==null;)nc(e,t,n),e=e.sibling}function zs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ca(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(zs(e,t,n),e=e.sibling;e!==null;)zs(e,t,n),e=e.sibling}function Ff(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ut(t,a,n),t[st]=e,t[Ct]=n}catch(c){Ee(e,e.return,c)}}var _n=!1,$e=!1,ac=!1,Wf=typeof WeakSet=="function"?WeakSet:Set,at=null;function E0(e,t){if(e=e.containerInfo,Nc=Ps,e=cd(e),Jr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var p=0,m=-1,S=-1,k=0,U=0,q=e,R=null;t:for(;;){for(var O;q!==n||r!==0&&q.nodeType!==3||(m=p+r),q!==c||a!==0&&q.nodeType!==3||(S=p+a),q.nodeType===3&&(p+=q.nodeValue.length),(O=q.firstChild)!==null;)R=q,q=O;for(;;){if(q===e)break t;if(R===n&&++k===r&&(m=p),R===c&&++U===a&&(S=p),(O=q.nextSibling)!==null)break;q=R,R=q.parentNode}q=O}n=m===-1||S===-1?null:{start:m,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tc={focusedElem:e,selectionRange:n},Ps=!1,at=t;at!==null;)if(t=at,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,at=e;else for(;at!==null;){switch(t=at,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,r=c.memoizedProps,c=c.memoizedState,a=n.stateNode;try{var W=_a(n.type,r);e=a.getSnapshotBeforeUpdate(W,c),a.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ee(n,n.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Dc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Dc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,at=e;break}at=t.return}}function Pf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Ln(e,n),a&4&&ri(5,n);break;case 1:if(Ln(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){Ee(n,n.return,p)}else{var r=_a(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Ee(n,n.return,p)}}a&64&&Kf(n),a&512&&oi(n,n.return);break;case 3:if(Ln(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ud(e,t)}catch(p){Ee(n,n.return,p)}}break;case 27:t===null&&a&4&&Ff(n);case 26:case 5:Ln(e,n),t===null&&a&4&&Jf(n),a&512&&oi(n,n.return);break;case 12:Ln(e,n);break;case 31:Ln(e,n),a&4&&np(e,n);break;case 13:Ln(e,n),a&4&&ap(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_0.bind(null,n),tb(e,n))));break;case 22:if(a=n.memoizedState!==null||_n,!a){t=t!==null&&t.memoizedState!==null||$e,r=_n;var c=$e;_n=a,($e=t)&&!c?Bn(e,n,(n.subtreeFlags&8772)!==0):Ln(e,n),_n=r,$e=c}break;case 30:break;default:Ln(e,n)}}function ep(e){var t=e.alternate;t!==null&&(e.alternate=null,ep(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,Tt=!1;function Un(e,t,n){for(n=n.child;n!==null;)tp(e,t,n),n=n.sibling}function tp(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(xa,n)}catch{}switch(n.tag){case 26:$e||mn(n,t),Un(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$e||mn(n,t);var a=Be,r=Tt;ca(n.type)&&(Be=n.stateNode,Tt=!1),Un(e,t,n),bi(n.stateNode),Be=a,Tt=r;break;case 5:$e||mn(n,t);case 6:if(a=Be,r=Tt,Be=null,Un(e,t,n),Be=a,Tt=r,Be!==null)if(Tt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(n.stateNode)}catch(c){Ee(n,t,c)}else try{Be.removeChild(n.stateNode)}catch(c){Ee(n,t,c)}break;case 18:Be!==null&&(Tt?(e=Be,Kp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),El(e)):Kp(Be,n.stateNode));break;case 4:a=Be,r=Tt,Be=n.stateNode.containerInfo,Tt=!0,Un(e,t,n),Be=a,Tt=r;break;case 0:case 11:case 14:case 15:na(2,n,t),$e||na(4,n,t),Un(e,t,n);break;case 1:$e||(mn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&If(n,t,a)),Un(e,t,n);break;case 21:Un(e,t,n);break;case 22:$e=(a=$e)||n.memoizedState!==null,Un(e,t,n),$e=a;break;default:Un(e,t,n)}}function np(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{El(e)}catch(n){Ee(t,t.return,n)}}}function ap(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{El(e)}catch(n){Ee(t,t.return,n)}}function A0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Wf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Wf),t;default:throw Error(s(435,e.tag))}}function js(e,t){var n=A0(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=U0.bind(null,e,a);a.then(r,r)}})}function Et(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],c=e,p=t,m=p;e:for(;m!==null;){switch(m.tag){case 27:if(ca(m.type)){Be=m.stateNode,Tt=!1;break e}break;case 5:Be=m.stateNode,Tt=!1;break e;case 3:case 4:Be=m.stateNode.containerInfo,Tt=!0;break e}m=m.return}if(Be===null)throw Error(s(160));tp(c,p,r),Be=null,Tt=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)lp(t,e),t=t.sibling}var sn=null;function lp(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Et(t,e),At(e),a&4&&(na(3,e,e.return),ri(3,e),na(5,e,e.return));break;case 1:Et(t,e),At(e),a&512&&($e||n===null||mn(n,n.return)),a&64&&_n&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=sn;if(Et(t,e),At(e),a&512&&($e||n===null||mn(n,n.return)),a&4){var c=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":c=r.getElementsByTagName("title")[0],(!c||c[_l]||c[st]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(a),r.head.insertBefore(c,r.querySelector("head > title"))),ut(c,a,n),c[st]=e,nt(c),a=c;break e;case"link":var p=lh("link","href",r).get(a+(n.href||""));if(p){for(var m=0;m<p.length;m++)if(c=p[m],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(m,1);break t}}c=r.createElement(a),ut(c,a,n),r.head.appendChild(c);break;case"meta":if(p=lh("meta","content",r).get(a+(n.content||""))){for(m=0;m<p.length;m++)if(c=p[m],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(m,1);break t}}c=r.createElement(a),ut(c,a,n),r.head.appendChild(c);break;default:throw Error(s(468,a))}c[st]=e,nt(c),a=c}e.stateNode=a}else ih(r,e.type,e.stateNode);else e.stateNode=ah(r,a,e.memoizedProps);else c!==a?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,a===null?ih(r,e.type,e.stateNode):ah(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ec(e,e.memoizedProps,n.memoizedProps)}break;case 27:Et(t,e),At(e),a&512&&($e||n===null||mn(n,n.return)),n!==null&&a&4&&ec(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Et(t,e),At(e),a&512&&($e||n===null||mn(n,n.return)),e.flags&32){r=e.stateNode;try{Ja(r,"")}catch(W){Ee(e,e.return,W)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,ec(e,r,n!==null?n.memoizedProps:r)),a&1024&&(ac=!0);break;case 6:if(Et(t,e),At(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(W){Ee(e,e.return,W)}}break;case 3:if(Js=null,r=sn,sn=Ks(t.containerInfo),Et(t,e),sn=r,At(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{El(t.containerInfo)}catch(W){Ee(e,e.return,W)}ac&&(ac=!1,ip(e));break;case 4:a=sn,sn=Ks(e.stateNode.containerInfo),Et(t,e),At(e),sn=a;break;case 12:Et(t,e),At(e);break;case 31:Et(t,e),At(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,js(e,a)));break;case 13:Et(t,e),At(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(_s=dt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,js(e,a)));break;case 22:r=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,k=_n,U=$e;if(_n=k||r,$e=U||S,Et(t,e),$e=U,_n=k,At(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||S||_n||$e||Ua(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(c=S.stateNode,r)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{m=S.stateNode;var q=S.memoizedProps.style,R=q!=null&&q.hasOwnProperty("display")?q.display:null;m.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(W){Ee(S,S.return,W)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=r?"":S.memoizedProps}catch(W){Ee(S,S.return,W)}}}else if(t.tag===18){if(n===null){S=t;try{var O=S.stateNode;r?Ip(O,!0):Ip(S.stateNode,!1)}catch(W){Ee(S,S.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,js(e,n))));break;case 19:Et(t,e),At(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,js(e,a)));break;case 30:break;case 21:break;default:Et(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if($f(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,c=tc(e);zs(e,c,r);break;case 5:var p=n.stateNode;n.flags&32&&(Ja(p,""),n.flags&=-33);var m=tc(e);zs(e,m,p);break;case 3:case 4:var S=n.stateNode.containerInfo,k=tc(e);nc(e,k,S);break;default:throw Error(s(161))}}catch(U){Ee(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ip(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ip(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ln(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Pf(e,t.alternate,t),t=t.sibling}function Ua(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:na(4,t,t.return),Ua(t);break;case 1:mn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&If(t,t.return,n),Ua(t);break;case 27:bi(t.stateNode);case 26:case 5:mn(t,t.return),Ua(t);break;case 22:t.memoizedState===null&&Ua(t);break;case 30:Ua(t);break;default:Ua(t)}e=e.sibling}}function Bn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,c=t,p=c.flags;switch(c.tag){case 0:case 11:case 15:Bn(r,c,n),ri(4,c);break;case 1:if(Bn(r,c,n),a=c,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(k){Ee(a,a.return,k)}if(a=c,r=a.updateQueue,r!==null){var m=a.stateNode;try{var S=r.shared.hiddenCallbacks;if(S!==null)for(r.shared.hiddenCallbacks=null,r=0;r<S.length;r++)_d(S[r],m)}catch(k){Ee(a,a.return,k)}}n&&p&64&&Kf(c),oi(c,c.return);break;case 27:Ff(c);case 26:case 5:Bn(r,c,n),n&&a===null&&p&4&&Jf(c),oi(c,c.return);break;case 12:Bn(r,c,n);break;case 31:Bn(r,c,n),n&&p&4&&np(r,c);break;case 13:Bn(r,c,n),n&&p&4&&ap(r,c);break;case 22:c.memoizedState===null&&Bn(r,c,n),oi(c,c.return);break;case 30:break;default:Bn(r,c,n)}t=t.sibling}}function lc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Il(n))}function ic(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Il(e))}function rn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sp(e,t,n,a),t=t.sibling}function sp(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:rn(e,t,n,a),r&2048&&ri(9,t);break;case 1:rn(e,t,n,a);break;case 3:rn(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Il(e)));break;case 12:if(r&2048){rn(e,t,n,a),e=t.stateNode;try{var c=t.memoizedProps,p=c.id,m=c.onPostCommit;typeof m=="function"&&m(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Ee(t,t.return,S)}}else rn(e,t,n,a);break;case 31:rn(e,t,n,a);break;case 13:rn(e,t,n,a);break;case 23:break;case 22:c=t.stateNode,p=t.alternate,t.memoizedState!==null?c._visibility&2?rn(e,t,n,a):ci(e,t):c._visibility&2?rn(e,t,n,a):(c._visibility|=2,gl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&lc(p,t);break;case 24:rn(e,t,n,a),r&2048&&ic(t.alternate,t);break;default:rn(e,t,n,a)}}function gl(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,p=t,m=n,S=a,k=p.flags;switch(p.tag){case 0:case 11:case 15:gl(c,p,m,S,r),ri(8,p);break;case 23:break;case 22:var U=p.stateNode;p.memoizedState!==null?U._visibility&2?gl(c,p,m,S,r):ci(c,p):(U._visibility|=2,gl(c,p,m,S,r)),r&&k&2048&&lc(p.alternate,p);break;case 24:gl(c,p,m,S,r),r&&k&2048&&ic(p.alternate,p);break;default:gl(c,p,m,S,r)}t=t.sibling}}function ci(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:ci(n,a),r&2048&&lc(a.alternate,a);break;case 24:ci(n,a),r&2048&&ic(a.alternate,a);break;default:ci(n,a)}t=t.sibling}}var ui=8192;function ml(e,t,n){if(e.subtreeFlags&ui)for(e=e.child;e!==null;)rp(e,t,n),e=e.sibling}function rp(e,t,n){switch(e.tag){case 26:ml(e,t,n),e.flags&ui&&e.memoizedState!==null&&pb(n,sn,e.memoizedState,e.memoizedProps);break;case 5:ml(e,t,n);break;case 3:case 4:var a=sn;sn=Ks(e.stateNode.containerInfo),ml(e,t,n),sn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ui,ui=16777216,ml(e,t,n),ui=a):ml(e,t,n));break;default:ml(e,t,n)}}function op(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];at=a,up(a,e)}op(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cp(e),e=e.sibling}function cp(e){switch(e.tag){case 0:case 11:case 15:di(e),e.flags&2048&&na(9,e,e.return);break;case 3:di(e);break;case 12:di(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ms(e)):di(e);break;default:di(e)}}function Ms(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];at=a,up(a,e)}op(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:na(8,t,t.return),Ms(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ms(t));break;default:Ms(t)}e=e.sibling}}function up(e,t){for(;at!==null;){var n=at;switch(n.tag){case 0:case 11:case 15:na(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Il(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,at=a;else e:for(n=e;at!==null;){a=at;var r=a.sibling,c=a.return;if(ep(a),a===n){at=null;break e}if(r!==null){r.return=c,at=r;break e}at=c}}}var D0={getCacheForType:function(e){var t=ot(Ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ot(Ke).controller.signal}},k0=typeof WeakMap=="function"?WeakMap:Map,Ce=0,je=null,fe=null,he=0,Te=0,_t=null,aa=!1,bl=!1,sc=!1,qn=0,Ge=0,la=0,La=0,rc=0,Ut=0,vl=0,fi=null,Dt=null,oc=!1,_s=0,dp=0,Us=1/0,Ls=null,ia=null,Pe=0,sa=null,yl=null,Hn=0,cc=0,uc=null,fp=null,pi=0,dc=null;function Lt(){return(Ce&2)!==0&&he!==0?he&-he:_.T!==null?bc():an()}function pp(){if(Ut===0)if((he&536870912)===0||ve){var e=Ga;Ga<<=1,(Ga&3932160)===0&&(Ga=262144),Ut=e}else Ut=536870912;return e=jt.current,e!==null&&(e.flags|=32),Ut}function kt(e,t,n){(e===je&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(xl(e,0),ra(e,he,Ut,!1)),Yt(e,n),((Ce&2)===0||e!==je)&&(e===je&&((Ce&2)===0&&(La|=n),Ge===4&&ra(e,he,Ut,!1)),bn(e))}function hp(e,t,n){if((Ce&6)!==0)throw Error(s(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||xt(e,t),r=a?z0(e,t):pc(e,t,!0),c=a;do{if(r===0){bl&&!a&&ra(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!R0(n)){r=pc(e,t,!1),c=!1;continue}if(r===2){if(c=t,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var m=e;r=fi;var S=m.current.memoizedState.isDehydrated;if(S&&(xl(m,p).flags|=256),p=pc(m,p,!1),p!==2){if(sc&&!S){m.errorRecoveryDisabledLanes|=c,La|=c,r=4;break e}c=Dt,Dt=r,c!==null&&(Dt===null?Dt=c:Dt.push.apply(Dt,c))}r=p}if(c=!1,r!==2)continue}}if(r===1){xl(e,0),ra(e,t,0,!0);break}e:{switch(a=e,c=r,c){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ra(a,t,Ut,!aa);break e;case 2:Dt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(r=_s+300-dt(),10<r)){if(ra(a,t,Ut,!aa),tt(a,0,!0)!==0)break e;Hn=t,a.timeoutHandle=Vp(gp.bind(null,a,n,Dt,Ls,oc,t,Ut,La,vl,aa,c,"Throttled",-0,0),r);break e}gp(a,n,Dt,Ls,oc,t,Ut,La,vl,aa,c,null,-0,0)}}break}while(!0);bn(e)}function gp(e,t,n,a,r,c,p,m,S,k,U,q,R,O){if(e.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Tn},rp(t,c,q);var W=(c&62914560)===c?_s-dt():(c&4194048)===c?dp-dt():0;if(W=hb(q,W),W!==null){Hn=c,e.cancelPendingCommit=W(Cp.bind(null,e,t,c,n,a,r,p,m,S,U,q,null,R,O)),ra(e,c,p,!k);return}}Cp(e,t,c,n,a,r,p,m,S)}function R0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],c=r.getSnapshot;r=r.value;try{if(!Ot(c(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ra(e,t,n,a){t&=~rc,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var c=31-ft(r),p=1<<c;a[c]=-1,r&=~p}n!==0&&nn(e,n,t)}function Bs(){return(Ce&6)===0?(hi(0),!1):!0}function fc(){if(fe!==null){if(Te===0)var e=fe.return;else e=fe,kn=Da=null,Do(e),ul=null,$l=0,e=fe;for(;e!==null;)Qf(e.alternate,e),e=e.return;fe=null}}function xl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,$0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Hn=0,fc(),je=e,fe=n=An(e.current,null),he=t,Te=0,_t=null,aa=!1,bl=xt(e,t),sc=!1,vl=Ut=rc=La=la=Ge=0,Dt=fi=null,oc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-ft(a),c=1<<r;t|=e[r],a&=~c}return qn=t,is(),n}function mp(e,t){ue=null,_.H=li,t===cl||t===ps?(t=Od(),Te=3):t===mo?(t=Od(),Te=4):Te=t===Xo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,fe===null&&(Ge=1,As(e,Kt(t,e.current)))}function bp(){var e=jt.current;return e===null?!0:(he&4194048)===he?Ft===null:(he&62914560)===he||(he&536870912)!==0?e===Ft:!1}function vp(){var e=_.H;return _.H=li,e===null?li:e}function yp(){var e=_.A;return _.A=D0,e}function qs(){Ge=4,aa||(he&4194048)!==he&&jt.current!==null||(bl=!0),(la&134217727)===0&&(La&134217727)===0||je===null||ra(je,he,Ut,!1)}function pc(e,t,n){var a=Ce;Ce|=2;var r=vp(),c=yp();(je!==e||he!==t)&&(Ls=null,xl(e,t)),t=!1;var p=Ge;e:do try{if(Te!==0&&fe!==null){var m=fe,S=_t;switch(Te){case 8:fc(),p=6;break e;case 3:case 2:case 9:case 6:jt.current===null&&(t=!0);var k=Te;if(Te=0,_t=null,Sl(e,m,S,k),n&&bl){p=0;break e}break;default:k=Te,Te=0,_t=null,Sl(e,m,S,k)}}O0(),p=Ge;break}catch(U){mp(e,U)}while(!0);return t&&e.shellSuspendCounter++,kn=Da=null,Ce=a,_.H=r,_.A=c,fe===null&&(je=null,he=0,is()),p}function O0(){for(;fe!==null;)xp(fe)}function z0(e,t){var n=Ce;Ce|=2;var a=vp(),r=yp();je!==e||he!==t?(Ls=null,Us=dt()+500,xl(e,t)):bl=xt(e,t);e:do try{if(Te!==0&&fe!==null){t=fe;var c=_t;t:switch(Te){case 1:Te=0,_t=null,Sl(e,t,c,1);break;case 2:case 9:if(kd(c)){Te=0,_t=null,Sp(t);break}t=function(){Te!==2&&Te!==9||je!==e||(Te=7),bn(e)},c.then(t,t);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:kd(c)?(Te=0,_t=null,Sp(t)):(Te=0,_t=null,Sl(e,t,c,7));break;case 5:var p=null;switch(fe.tag){case 26:p=fe.memoizedState;case 5:case 27:var m=fe;if(p?sh(p):m.stateNode.complete){Te=0,_t=null;var S=m.sibling;if(S!==null)fe=S;else{var k=m.return;k!==null?(fe=k,Hs(k)):fe=null}break t}}Te=0,_t=null,Sl(e,t,c,5);break;case 6:Te=0,_t=null,Sl(e,t,c,6);break;case 8:fc(),Ge=6;break e;default:throw Error(s(462))}}j0();break}catch(U){mp(e,U)}while(!0);return kn=Da=null,_.H=a,_.A=r,Ce=n,fe!==null?0:(je=null,he=0,is(),Ge)}function j0(){for(;fe!==null&&!Ha();)xp(fe)}function xp(e){var t=Xf(e.alternate,e,qn);e.memoizedProps=e.pendingProps,t===null?Hs(e):fe=t}function Sp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Bf(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Bf(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Do(t);default:Qf(n,t),t=fe=vd(t,qn),t=Xf(n,t,qn)}e.memoizedProps=e.pendingProps,t===null?Hs(e):fe=t}function Sl(e,t,n,a){kn=Da=null,Do(t),ul=null,$l=0;var r=t.return;try{if(S0(e,r,t,n,he)){Ge=1,As(e,Kt(n,e.current)),fe=null;return}}catch(c){if(r!==null)throw fe=r,c;Ge=1,As(e,Kt(n,e.current)),fe=null;return}t.flags&32768?(ve||a===1?e=!0:bl||(he&536870912)!==0?e=!1:(aa=e=!0,(a===2||a===9||a===3||a===6)&&(a=jt.current,a!==null&&a.tag===13&&(a.flags|=16384))),wp(t,e)):Hs(t)}function Hs(e){var t=e;do{if((t.flags&32768)!==0){wp(t,aa);return}e=t.return;var n=N0(t.alternate,t,qn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ge===0&&(Ge=5)}function wp(e,t){do{var n=T0(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Ge=6,fe=null}function Cp(e,t,n,a,r,c,p,m,S){e.cancelPendingCommit=null;do Ys();while(Pe!==0);if((Ce&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(c=t.lanes|t.childLanes,c|=eo,We(e,n,c,p,m,S),e===je&&(fe=je=null,he=0),yl=t,sa=e,Hn=n,cc=c,uc=r,fp=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,L0(tn,function(){return Dp(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null,r=B.p,B.p=2,p=Ce,Ce|=4;try{E0(e,t,n)}finally{Ce=p,B.p=r,_.T=a}}Pe=1,Np(),Tp(),Ep()}}function Np(){if(Pe===1){Pe=0;var e=sa,t=yl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var a=B.p;B.p=2;var r=Ce;Ce|=4;try{lp(t,e);var c=Tc,p=cd(e.containerInfo),m=c.focusedElem,S=c.selectionRange;if(p!==m&&m&&m.ownerDocument&&od(m.ownerDocument.documentElement,m)){if(S!==null&&Jr(m)){var k=S.start,U=S.end;if(U===void 0&&(U=k),"selectionStart"in m)m.selectionStart=k,m.selectionEnd=Math.min(U,m.value.length);else{var q=m.ownerDocument||document,R=q&&q.defaultView||window;if(R.getSelection){var O=R.getSelection(),W=m.textContent.length,ie=Math.min(S.start,W),Re=S.end===void 0?ie:Math.min(S.end,W);!O.extend&&ie>Re&&(p=Re,Re=ie,ie=p);var T=rd(m,ie),C=rd(m,Re);if(T&&C&&(O.rangeCount!==1||O.anchorNode!==T.node||O.anchorOffset!==T.offset||O.focusNode!==C.node||O.focusOffset!==C.offset)){var D=q.createRange();D.setStart(T.node,T.offset),O.removeAllRanges(),ie>Re?(O.addRange(D),O.extend(C.node,C.offset)):(D.setEnd(C.node,C.offset),O.addRange(D))}}}}for(q=[],O=m;O=O.parentNode;)O.nodeType===1&&q.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<q.length;m++){var L=q[m];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Ps=!!Nc,Tc=Nc=null}finally{Ce=r,B.p=a,_.T=n}}e.current=t,Pe=2}}function Tp(){if(Pe===2){Pe=0;var e=sa,t=yl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var a=B.p;B.p=2;var r=Ce;Ce|=4;try{Pf(e,t.alternate,t)}finally{Ce=r,B.p=a,_.T=n}}Pe=3}}function Ep(){if(Pe===4||Pe===3){Pe=0,Xi();var e=sa,t=yl,n=Hn,a=fp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pe=5:(Pe=0,yl=sa=null,Ap(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ia=null),Cn(n),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(xa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=_.T,r=B.p,B.p=2,_.T=null;try{for(var c=e.onRecoverableError,p=0;p<a.length;p++){var m=a[p];c(m.value,{componentStack:m.stack})}}finally{_.T=t,B.p=r}}(Hn&3)!==0&&Ys(),bn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===dc?pi++:(pi=0,dc=e):pi=0,hi(0)}}function Ap(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Il(t)))}function Ys(){return Np(),Tp(),Ep(),Dp()}function Dp(){if(Pe!==5)return!1;var e=sa,t=cc;cc=0;var n=Cn(Hn),a=_.T,r=B.p;try{B.p=32>n?32:n,_.T=null,n=uc,uc=null;var c=sa,p=Hn;if(Pe=0,yl=sa=null,Hn=0,(Ce&6)!==0)throw Error(s(331));var m=Ce;if(Ce|=4,cp(c.current),sp(c,c.current,p,n),Ce=m,hi(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(xa,c)}catch{}return!0}finally{B.p=r,_.T=a,Ap(e,t)}}function kp(e,t,n){t=Kt(n,t),t=Zo(e.stateNode,t,2),e=Pn(e,t,2),e!==null&&(Yt(e,2),bn(e))}function Ee(e,t,n){if(e.tag===3)kp(e,e,n);else for(;t!==null;){if(t.tag===3){kp(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ia===null||!ia.has(a))){e=Kt(n,e),n=Rf(2),a=Pn(t,n,2),a!==null&&(Of(n,a,t,e),Yt(a,2),bn(a));break}}t=t.return}}function hc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new k0;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(sc=!0,r.add(n),e=M0.bind(null,e,t,n),t.then(e,e))}function M0(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,je===e&&(he&n)===n&&(Ge===4||Ge===3&&(he&62914560)===he&&300>dt()-_s?(Ce&2)===0&&xl(e,0):rc|=n,vl===he&&(vl=0)),bn(e)}function Rp(e,t){t===0&&(t=pt()),e=Ta(e,t),e!==null&&(Yt(e,t),bn(e))}function _0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rp(e,n)}function U0(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Rp(e,n)}function L0(e,t){return qt(e,t)}var Gs=null,wl=null,gc=!1,Zs=!1,mc=!1,oa=0;function bn(e){e!==wl&&e.next===null&&(wl===null?Gs=wl=e:wl=wl.next=e),Zs=!0,gc||(gc=!0,q0())}function hi(e,t){if(!mc&&Zs){mc=!0;do for(var n=!1,a=Gs;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var c=0;else{var p=a.suspendedLanes,m=a.pingedLanes;c=(1<<31-ft(42|e)+1)-1,c&=r&~(p&~m),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Mp(a,c))}else c=he,c=tt(a,a===je?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||xt(a,c)||(n=!0,Mp(a,c));a=a.next}while(n);mc=!1}}function B0(){Op()}function Op(){Zs=gc=!1;var e=0;oa!==0&&J0()&&(e=oa);for(var t=dt(),n=null,a=Gs;a!==null;){var r=a.next,c=zp(a,t);c===0?(a.next=null,n===null?Gs=r:n.next=r,r===null&&(wl=n)):(n=a,(e!==0||(c&3)!==0)&&(Zs=!0)),a=r}Pe!==0&&Pe!==5||hi(e),oa!==0&&(oa=0)}function zp(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-ft(c),m=1<<p,S=r[p];S===-1?((m&n)===0||(m&a)!==0)&&(r[p]=St(m,t)):S<=t&&(e.expiredLanes|=m),c&=~m}if(t=je,n=he,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Xn(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||xt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Xn(a),Cn(n)){case 2:case 8:n=Sn;break;case 32:n=tn;break;case 268435456:n=Ml;break;default:n=tn}return a=jp.bind(null,e),n=qt(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Xn(a),e.callbackPriority=2,e.callbackNode=null,2}function jp(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ys()&&e.callbackNode!==n)return null;var a=he;return a=tt(e,e===je?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(hp(e,a,t),zp(e,dt()),e.callbackNode!=null&&e.callbackNode===n?jp.bind(null,e):null)}function Mp(e,t){if(Ys())return null;hp(e,t,!0)}function q0(){F0(function(){(Ce&6)!==0?qt(Vi,B0):Op()})}function bc(){if(oa===0){var e=rl;e===0&&(e=Ya,Ya<<=1,(Ya&261888)===0&&(Ya=256)),oa=e}return oa}function _p(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fi(""+e)}function Up(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function H0(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var c=_p((r[Ct]||null).action),p=a.submitter;p&&(t=(t=p[Ct]||null)?_p(t.formAction):p.getAttribute("formAction"),t!==null&&(c=t,p=null));var m=new ts("action","action",null,a,r);e.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(oa!==0){var S=p?Up(r,p):new FormData(r);Lo(n,{pending:!0,data:S,method:r.method,action:c},null,S)}}else typeof c=="function"&&(m.preventDefault(),S=p?Up(r,p):new FormData(r),Lo(n,{pending:!0,data:S,method:r.method,action:c},c,S))},currentTarget:r}]})}}for(var vc=0;vc<Pr.length;vc++){var yc=Pr[vc],Y0=yc.toLowerCase(),G0=yc[0].toUpperCase()+yc.slice(1);ln(Y0,"on"+G0)}ln(fd,"onAnimationEnd"),ln(pd,"onAnimationIteration"),ln(hd,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln(l0,"onTransitionRun"),ln(i0,"onTransitionStart"),ln(s0,"onTransitionCancel"),ln(gd,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),Sa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Sa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Sa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Sa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Sa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Sa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gi));function Lp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var c=void 0;if(t)for(var p=a.length-1;0<=p;p--){var m=a[p],S=m.instance,k=m.currentTarget;if(m=m.listener,S!==c&&r.isPropagationStopped())break e;c=m,r.currentTarget=k;try{c(r)}catch(U){ls(U)}r.currentTarget=null,c=S}else for(p=0;p<a.length;p++){if(m=a[p],S=m.instance,k=m.currentTarget,m=m.listener,S!==c&&r.isPropagationStopped())break e;c=m,r.currentTarget=k;try{c(r)}catch(U){ls(U)}r.currentTarget=null,c=S}}}}function pe(e,t){var n=t[Or];n===void 0&&(n=t[Or]=new Set);var a=e+"__bubble";n.has(a)||(Bp(t,e,2,!1),n.add(a))}function xc(e,t,n){var a=0;t&&(a|=4),Bp(n,e,a,t)}var Xs="_reactListening"+Math.random().toString(36).slice(2);function Sc(e){if(!e[Xs]){e[Xs]=!0,Ru.forEach(function(n){n!=="selectionchange"&&(Z0.has(n)||xc(n,!1,e),xc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xs]||(t[Xs]=!0,xc("selectionchange",!1,t))}}function Bp(e,t,n,a){switch(ph(t)){case 2:var r=bb;break;case 8:r=vb;break;default:r=Uc}n=r.bind(null,t,n,e),r=void 0,!Hr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function wc(e,t,n,a,r){var c=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var m=a.stateNode.containerInfo;if(m===r)break;if(p===4)for(p=a.return;p!==null;){var S=p.tag;if((S===3||S===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;m!==null;){if(p=Xa(m),p===null)return;if(S=p.tag,S===5||S===6||S===26||S===27){a=c=p;continue e}m=m.parentNode}}a=a.return}Gu(function(){var k=c,U=Br(n),q=[];e:{var R=md.get(e);if(R!==void 0){var O=ts,W=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":O=Um;break;case"focusin":W="focus",O=Xr;break;case"focusout":W="blur",O=Xr;break;case"beforeblur":case"afterblur":O=Xr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Nm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=qm;break;case fd:case pd:case hd:O=Am;break;case gd:O=Ym;break;case"scroll":case"scrollend":O=wm;break;case"wheel":O=Zm;break;case"copy":case"cut":case"paste":O=km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Ku;break;case"toggle":case"beforetoggle":O=Vm}var ie=(t&4)!==0,Re=!ie&&(e==="scroll"||e==="scrollend"),T=ie?R!==null?R+"Capture":null:R;ie=[];for(var C=k,D;C!==null;){var L=C;if(D=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||D===null||T===null||(L=Ll(C,T),L!=null&&ie.push(mi(C,L,D))),Re)break;C=C.return}0<ie.length&&(R=new O(R,W,null,n,U),q.push({event:R,listeners:ie}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",R&&n!==Lr&&(W=n.relatedTarget||n.fromElement)&&(Xa(W)||W[Za]))break e;if((O||R)&&(R=U.window===U?U:(R=U.ownerDocument)?R.defaultView||R.parentWindow:window,O?(W=n.relatedTarget||n.toElement,O=k,W=W?Xa(W):null,W!==null&&(Re=d(W),ie=W.tag,W!==Re||ie!==5&&ie!==27&&ie!==6)&&(W=null)):(O=null,W=k),O!==W)){if(ie=Vu,L="onMouseLeave",T="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Ku,L="onPointerLeave",T="onPointerEnter",C="pointer"),Re=O==null?R:Ul(O),D=W==null?R:Ul(W),R=new ie(L,C+"leave",O,n,U),R.target=Re,R.relatedTarget=D,L=null,Xa(U)===k&&(ie=new ie(T,C+"enter",W,n,U),ie.target=D,ie.relatedTarget=Re,L=ie),Re=L,O&&W)t:{for(ie=X0,T=O,C=W,D=0,L=T;L;L=ie(L))D++;L=0;for(var ne=C;ne;ne=ie(ne))L++;for(;0<D-L;)T=ie(T),D--;for(;0<L-D;)C=ie(C),L--;for(;D--;){if(T===C||C!==null&&T===C.alternate){ie=T;break t}T=ie(T),C=ie(C)}ie=null}else ie=null;O!==null&&qp(q,R,O,ie,!1),W!==null&&Re!==null&&qp(q,Re,W,ie,!0)}}e:{if(R=k?Ul(k):window,O=R.nodeName&&R.nodeName.toLowerCase(),O==="select"||O==="input"&&R.type==="file")var xe=td;else if(Pu(R))if(nd)xe=t0;else{xe=Pm;var P=Wm}else O=R.nodeName,!O||O.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?k&&Ur(k.elementType)&&(xe=td):xe=e0;if(xe&&(xe=xe(e,k))){ed(q,xe,n,U);break e}P&&P(e,R,k),e==="focusout"&&k&&R.type==="number"&&k.memoizedProps.value!=null&&_r(R,"number",R.value)}switch(P=k?Ul(k):window,e){case"focusin":(Pu(P)||P.contentEditable==="true")&&(Pa=P,$r=k,Vl=null);break;case"focusout":Vl=$r=Pa=null;break;case"mousedown":Fr=!0;break;case"contextmenu":case"mouseup":case"dragend":Fr=!1,ud(q,n,U);break;case"selectionchange":if(a0)break;case"keydown":case"keyup":ud(q,n,U)}var de;if(Qr)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Wa?Fu(e,n)&&(ge="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ge="onCompositionStart");ge&&(Iu&&n.locale!=="ko"&&(Wa||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Wa&&(de=Zu()):(Qn=U,Yr="value"in Qn?Qn.value:Qn.textContent,Wa=!0)),P=Vs(k,ge),0<P.length&&(ge=new Qu(ge,e,null,n,U),q.push({event:ge,listeners:P}),de?ge.data=de:(de=Wu(n),de!==null&&(ge.data=de)))),(de=Km?Im(e,n):Jm(e,n))&&(ge=Vs(k,"onBeforeInput"),0<ge.length&&(P=new Qu("onBeforeInput","beforeinput",null,n,U),q.push({event:P,listeners:ge}),P.data=de)),H0(q,e,k,n,U)}Lp(q,t)})}function mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vs(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=Ll(e,n),r!=null&&a.unshift(mi(e,r,c)),r=Ll(e,t),r!=null&&a.push(mi(e,r,c))),e.tag===3)return a;e=e.return}return[]}function X0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qp(e,t,n,a,r){for(var c=t._reactName,p=[];n!==null&&n!==a;){var m=n,S=m.alternate,k=m.stateNode;if(m=m.tag,S!==null&&S===a)break;m!==5&&m!==26&&m!==27||k===null||(S=k,r?(k=Ll(n,c),k!=null&&p.unshift(mi(n,k,S))):r||(k=Ll(n,c),k!=null&&p.push(mi(n,k,S)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var V0=/\r\n?/g,Q0=/\u0000|\uFFFD/g;function Hp(e){return(typeof e=="string"?e:""+e).replace(V0,`
`).replace(Q0,"")}function Yp(e,t){return t=Hp(t),Hp(e)===t}function ke(e,t,n,a,r,c){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ja(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ja(e,""+a);break;case"className":Ji(e,"class",a);break;case"tabIndex":Ji(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ji(e,n,a);break;case"style":Hu(e,a,c);break;case"data":if(t!=="object"){Ji(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Fi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&ke(e,t,"name",r.name,r,null),ke(e,t,"formEncType",r.formEncType,r,null),ke(e,t,"formMethod",r.formMethod,r,null),ke(e,t,"formTarget",r.formTarget,r,null)):(ke(e,t,"encType",r.encType,r,null),ke(e,t,"method",r.method,r,null),ke(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Fi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Tn);break;case"onScroll":a!=null&&pe("scroll",e);break;case"onScrollEnd":a!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Fi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Ii(e,"popover",a);break;case"xlinkActuate":Nn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Nn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Nn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Nn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Nn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Nn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ii(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=xm.get(n)||n,Ii(e,n,a))}}function Cc(e,t,n,a,r,c){switch(n){case"style":Hu(e,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ja(e,a):(typeof a=="number"||typeof a=="bigint")&&Ja(e,""+a);break;case"onScroll":a!=null&&pe("scroll",e);break;case"onScrollEnd":a!=null&&pe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Tn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ou.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),c=e[Ct]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,r),typeof a=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ii(e,n,a)}}}function ut(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var a=!1,r=!1,c;for(c in n)if(n.hasOwnProperty(c)){var p=n[c];if(p!=null)switch(c){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ke(e,t,c,p,n,null)}}r&&ke(e,t,"srcSet",n.srcSet,n,null),a&&ke(e,t,"src",n.src,n,null);return;case"input":pe("invalid",e);var m=c=p=r=null,S=null,k=null;for(a in n)if(n.hasOwnProperty(a)){var U=n[a];if(U!=null)switch(a){case"name":r=U;break;case"type":p=U;break;case"checked":S=U;break;case"defaultChecked":k=U;break;case"value":c=U;break;case"defaultValue":m=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,t));break;default:ke(e,t,a,U,n,null)}}Uu(e,c,m,S,k,p,r,!1);return;case"select":pe("invalid",e),a=p=c=null;for(r in n)if(n.hasOwnProperty(r)&&(m=n[r],m!=null))switch(r){case"value":c=m;break;case"defaultValue":p=m;break;case"multiple":a=m;default:ke(e,t,r,m,n,null)}t=c,n=p,e.multiple=!!a,t!=null?Ia(e,!!a,t,!1):n!=null&&Ia(e,!!a,n,!0);return;case"textarea":pe("invalid",e),c=r=a=null;for(p in n)if(n.hasOwnProperty(p)&&(m=n[p],m!=null))switch(p){case"value":a=m;break;case"defaultValue":r=m;break;case"children":c=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(s(91));break;default:ke(e,t,p,m,n,null)}Bu(e,a,r,c);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(a=n[S],a!=null))switch(S){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ke(e,t,S,a,n,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(a=0;a<gi.length;a++)pe(gi[a],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in n)if(n.hasOwnProperty(k)&&(a=n[k],a!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ke(e,t,k,a,n,null)}return;default:if(Ur(t)){for(U in n)n.hasOwnProperty(U)&&(a=n[U],a!==void 0&&Cc(e,t,U,a,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(a=n[m],a!=null&&ke(e,t,m,a,n,null))}function K0(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,p=null,m=null,S=null,k=null,U=null;for(O in n){var q=n[O];if(n.hasOwnProperty(O)&&q!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":S=q;default:a.hasOwnProperty(O)||ke(e,t,O,null,a,q)}}for(var R in a){var O=a[R];if(q=n[R],a.hasOwnProperty(R)&&(O!=null||q!=null))switch(R){case"type":c=O;break;case"name":r=O;break;case"checked":k=O;break;case"defaultChecked":U=O;break;case"value":p=O;break;case"defaultValue":m=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:O!==q&&ke(e,t,R,O,a,q)}}Mr(e,p,m,S,k,U,c,r);return;case"select":O=p=m=R=null;for(c in n)if(S=n[c],n.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":O=S;default:a.hasOwnProperty(c)||ke(e,t,c,null,a,S)}for(r in a)if(c=a[r],S=n[r],a.hasOwnProperty(r)&&(c!=null||S!=null))switch(r){case"value":R=c;break;case"defaultValue":m=c;break;case"multiple":p=c;default:c!==S&&ke(e,t,r,c,a,S)}t=m,n=p,a=O,R!=null?Ia(e,!!n,R,!1):!!a!=!!n&&(t!=null?Ia(e,!!n,t,!0):Ia(e,!!n,n?[]:"",!1));return;case"textarea":O=R=null;for(m in n)if(r=n[m],n.hasOwnProperty(m)&&r!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:ke(e,t,m,null,a,r)}for(p in a)if(r=a[p],c=n[p],a.hasOwnProperty(p)&&(r!=null||c!=null))switch(p){case"value":R=r;break;case"defaultValue":O=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==c&&ke(e,t,p,r,a,c)}Lu(e,R,O);return;case"option":for(var W in n)if(R=n[W],n.hasOwnProperty(W)&&R!=null&&!a.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:ke(e,t,W,null,a,R)}for(S in a)if(R=a[S],O=n[S],a.hasOwnProperty(S)&&R!==O&&(R!=null||O!=null))switch(S){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:ke(e,t,S,R,a,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in n)R=n[ie],n.hasOwnProperty(ie)&&R!=null&&!a.hasOwnProperty(ie)&&ke(e,t,ie,null,a,R);for(k in a)if(R=a[k],O=n[k],a.hasOwnProperty(k)&&R!==O&&(R!=null||O!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,t));break;default:ke(e,t,k,R,a,O)}return;default:if(Ur(t)){for(var Re in n)R=n[Re],n.hasOwnProperty(Re)&&R!==void 0&&!a.hasOwnProperty(Re)&&Cc(e,t,Re,void 0,a,R);for(U in a)R=a[U],O=n[U],!a.hasOwnProperty(U)||R===O||R===void 0&&O===void 0||Cc(e,t,U,R,a,O);return}}for(var T in n)R=n[T],n.hasOwnProperty(T)&&R!=null&&!a.hasOwnProperty(T)&&ke(e,t,T,null,a,R);for(q in a)R=a[q],O=n[q],!a.hasOwnProperty(q)||R===O||R==null&&O==null||ke(e,t,q,R,a,O)}function Gp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function I0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],c=r.transferSize,p=r.initiatorType,m=r.duration;if(c&&m&&Gp(p)){for(p=0,m=r.responseEnd,a+=1;a<n.length;a++){var S=n[a],k=S.startTime;if(k>m)break;var U=S.transferSize,q=S.initiatorType;U&&Gp(q)&&(S=S.responseEnd,p+=U*(S<m?1:(m-k)/(S-k)))}if(--a,t+=8*(c+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nc=null,Tc=null;function Qs(e){return e.nodeType===9?e:e.ownerDocument}function Zp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ec(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ac=null;function J0(){var e=window.event;return e&&e.type==="popstate"?e===Ac?!1:(Ac=e,!0):(Ac=null,!1)}var Vp=typeof setTimeout=="function"?setTimeout:void 0,$0=typeof clearTimeout=="function"?clearTimeout:void 0,Qp=typeof Promise=="function"?Promise:void 0,F0=typeof queueMicrotask=="function"?queueMicrotask:typeof Qp<"u"?function(e){return Qp.resolve(null).then(e).catch(W0)}:Vp;function W0(e){setTimeout(function(){throw e})}function ca(e){return e==="head"}function Kp(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),El(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")bi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,bi(n);for(var c=n.firstChild;c;){var p=c.nextSibling,m=c.nodeName;c[_l]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=p}}else n==="body"&&bi(e.ownerDocument.body);n=r}while(n);El(t)}function Ip(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Dc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Dc(n),zr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function P0(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[_l])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Wt(e.nextSibling),e===null)break}return null}function eb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Wt(e.nextSibling),e===null))return null;return e}function Jp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Wt(e.nextSibling),e===null))return null;return e}function kc(e){return e.data==="$?"||e.data==="$~"}function Rc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function tb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Oc=null;function $p(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Wt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Fp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Wp(e,t,n){switch(t=Qs(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function bi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zr(e)}var Pt=new Map,Pp=new Set;function Ks(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yn=B.d;B.d={f:nb,r:ab,D:lb,C:ib,L:sb,m:rb,X:cb,S:ob,M:ub};function nb(){var e=Yn.f(),t=Bs();return e||t}function ab(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?mf(t):Yn.r(e)}var Cl=typeof document>"u"?null:document;function eh(e,t,n){var a=Cl;if(a&&typeof t=="string"&&t){var r=Vt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Pp.has(r)||(Pp.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),ut(t,"link",e),nt(t),a.head.appendChild(t)))}}function lb(e){Yn.D(e),eh("dns-prefetch",e,null)}function ib(e,t){Yn.C(e,t),eh("preconnect",e,t)}function sb(e,t,n){Yn.L(e,t,n);var a=Cl;if(a&&e&&t){var r='link[rel="preload"][as="'+Vt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Vt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Vt(n.imageSizes)+'"]')):r+='[href="'+Vt(e)+'"]';var c=r;switch(t){case"style":c=Nl(e);break;case"script":c=Tl(e)}Pt.has(c)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Pt.set(c,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(vi(c))||t==="script"&&a.querySelector(yi(c))||(t=a.createElement("link"),ut(t,"link",e),nt(t),a.head.appendChild(t)))}}function rb(e,t){Yn.m(e,t);var n=Cl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Vt(a)+'"][href="'+Vt(e)+'"]',c=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Tl(e)}if(!Pt.has(c)&&(e=x({rel:"modulepreload",href:e},t),Pt.set(c,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(yi(c)))return}a=n.createElement("link"),ut(a,"link",e),nt(a),n.head.appendChild(a)}}}function ob(e,t,n){Yn.S(e,t,n);var a=Cl;if(a&&e){var r=Qa(a).hoistableStyles,c=Nl(e);t=t||"default";var p=r.get(c);if(!p){var m={loading:0,preload:null};if(p=a.querySelector(vi(c)))m.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Pt.get(c))&&zc(e,n);var S=p=a.createElement("link");nt(S),ut(S,"link",e),S._p=new Promise(function(k,U){S.onload=k,S.onerror=U}),S.addEventListener("load",function(){m.loading|=1}),S.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Is(p,t,a)}p={type:"stylesheet",instance:p,count:1,state:m},r.set(c,p)}}}function cb(e,t){Yn.X(e,t);var n=Cl;if(n&&e){var a=Qa(n).hoistableScripts,r=Tl(e),c=a.get(r);c||(c=n.querySelector(yi(r)),c||(e=x({src:e,async:!0},t),(t=Pt.get(r))&&jc(e,t),c=n.createElement("script"),nt(c),ut(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(r,c))}}function ub(e,t){Yn.M(e,t);var n=Cl;if(n&&e){var a=Qa(n).hoistableScripts,r=Tl(e),c=a.get(r);c||(c=n.querySelector(yi(r)),c||(e=x({src:e,async:!0,type:"module"},t),(t=Pt.get(r))&&jc(e,t),c=n.createElement("script"),nt(c),ut(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(r,c))}}function th(e,t,n,a){var r=(r=ee.current)?Ks(r):null;if(!r)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Nl(n.href),n=Qa(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Nl(n.href);var c=Qa(r).hoistableStyles,p=c.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=r.querySelector(vi(e)))&&!c._p&&(p.instance=c,p.state.loading=5),Pt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Pt.set(e,n),c||db(r,e,n,p.state))),t&&a===null)throw Error(s(528,""));return p}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Tl(n),n=Qa(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Nl(e){return'href="'+Vt(e)+'"'}function vi(e){return'link[rel="stylesheet"]['+e+"]"}function nh(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function db(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ut(t,"link",n),nt(t),e.head.appendChild(t))}function Tl(e){return'[src="'+Vt(e)+'"]'}function yi(e){return"script[async]"+e}function ah(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Vt(n.href)+'"]');if(a)return t.instance=a,nt(a),a;var r=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),nt(a),ut(a,"style",r),Is(a,n.precedence,e),t.instance=a;case"stylesheet":r=Nl(n.href);var c=e.querySelector(vi(r));if(c)return t.state.loading|=4,t.instance=c,nt(c),c;a=nh(n),(r=Pt.get(r))&&zc(a,r),c=(e.ownerDocument||e).createElement("link"),nt(c);var p=c;return p._p=new Promise(function(m,S){p.onload=m,p.onerror=S}),ut(c,"link",a),t.state.loading|=4,Is(c,n.precedence,e),t.instance=c;case"script":return c=Tl(n.src),(r=e.querySelector(yi(c)))?(t.instance=r,nt(r),r):(a=n,(r=Pt.get(c))&&(a=x({},n),jc(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),nt(r),ut(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Is(a,n.precedence,e));return t.instance}function Is(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,c=r,p=0;p<a.length;p++){var m=a[p];if(m.dataset.precedence===t)c=m;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Js=null;function lh(e,t,n){if(Js===null){var a=new Map,r=Js=new Map;r.set(n,a)}else r=Js,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var c=n[r];if(!(c[_l]||c[st]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(t)||"";p=e+p;var m=a.get(p);m?m.push(c):a.set(p,[c])}}return a}function ih(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function fb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function sh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function pb(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Nl(a.href),c=t.querySelector(vi(r));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=$s.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,nt(c);return}c=t.ownerDocument||t,a=nh(a),(r=Pt.get(r))&&zc(a,r),c=c.createElement("link"),nt(c);var p=c;p._p=new Promise(function(m,S){p.onload=m,p.onerror=S}),ut(c,"link",a),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=$s.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Mc=0;function hb(e,t){return e.stylesheets&&e.count===0&&Ws(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Ws(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Mc===0&&(Mc=62500*I0());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ws(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Mc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function $s(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ws(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fs=null;function Ws(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fs=new Map,t.forEach(gb,e),Fs=null,$s.call(e))}function gb(e,t){if(!(t.state.loading&4)){var n=Fs.get(e);if(n)var a=n.get(null);else{n=new Map,Fs.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var p=r[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),a=p)}a&&n.set(null,a)}r=t.instance,p=r.getAttribute("data-precedence"),c=n.get(p)||a,c===a&&n.set(null,r),n.set(p,r),this.count++,a=$s.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var xi={$$typeof:K,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function mb(e,t,n,a,r,c,p,m,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function rh(e,t,n,a,r,c,p,m,S,k,U,q){return e=new mb(e,t,n,p,S,k,U,q,m),t=1,c===!0&&(t|=24),c=zt(3,null,null,t),e.current=c,c.stateNode=e,t=po(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:a,isDehydrated:n,cache:t},bo(c),e}function oh(e){return e?(e=nl,e):nl}function ch(e,t,n,a,r,c){r=oh(r),a.context===null?a.context=r:a.pendingContext=r,a=Wn(t),a.payload={element:n},c=c===void 0?null:c,c!==null&&(a.callback=c),n=Pn(e,a,t),n!==null&&(kt(n,e,t),Wl(n,e,t))}function uh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _c(e,t){uh(e,t),(e=e.alternate)&&uh(e,t)}function dh(e){if(e.tag===13||e.tag===31){var t=Ta(e,67108864);t!==null&&kt(t,e,67108864),_c(e,67108864)}}function fh(e){if(e.tag===13||e.tag===31){var t=Lt();t=wn(t);var n=Ta(e,t);n!==null&&kt(n,e,t),_c(e,t)}}var Ps=!0;function bb(e,t,n,a){var r=_.T;_.T=null;var c=B.p;try{B.p=2,Uc(e,t,n,a)}finally{B.p=c,_.T=r}}function vb(e,t,n,a){var r=_.T;_.T=null;var c=B.p;try{B.p=8,Uc(e,t,n,a)}finally{B.p=c,_.T=r}}function Uc(e,t,n,a){if(Ps){var r=Lc(a);if(r===null)wc(e,t,a,er,n),hh(e,a);else if(xb(r,e,t,n,a))a.stopPropagation();else if(hh(e,a),t&4&&-1<yb.indexOf(e)){for(;r!==null;){var c=Va(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=Xe(c.pendingLanes);if(p!==0){var m=c;for(m.pendingLanes|=2,m.entangledLanes|=2;p;){var S=1<<31-ft(p);m.entanglements[1]|=S,p&=~S}bn(c),(Ce&6)===0&&(Us=dt()+500,hi(0))}}break;case 31:case 13:m=Ta(c,2),m!==null&&kt(m,c,2),Bs(),_c(c,2)}if(c=Lc(a),c===null&&wc(e,t,a,er,n),c===r)break;r=c}r!==null&&a.stopPropagation()}else wc(e,t,a,null,n)}}function Lc(e){return e=Br(e),Bc(e)}var er=null;function Bc(e){if(er=null,e=Xa(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return er=e,null}function ph(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dr()){case Vi:return 2;case Sn:return 8;case tn:case ya:return 32;case Ml:return 268435456;default:return 32}default:return 32}}var qc=!1,ua=null,da=null,fa=null,Si=new Map,wi=new Map,pa=[],yb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hh(e,t){switch(e){case"focusin":case"focusout":ua=null;break;case"dragenter":case"dragleave":da=null;break;case"mouseover":case"mouseout":fa=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(t.pointerId)}}function Ci(e,t,n,a,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:c,targetContainers:[r]},t!==null&&(t=Va(t),t!==null&&dh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function xb(e,t,n,a,r){switch(t){case"focusin":return ua=Ci(ua,e,t,n,a,r),!0;case"dragenter":return da=Ci(da,e,t,n,a,r),!0;case"mouseover":return fa=Ci(fa,e,t,n,a,r),!0;case"pointerover":var c=r.pointerId;return Si.set(c,Ci(Si.get(c)||null,e,t,n,a,r)),!0;case"gotpointercapture":return c=r.pointerId,wi.set(c,Ci(wi.get(c)||null,e,t,n,a,r)),!0}return!1}function gh(e){var t=Xa(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,Vn(e.priority,function(){fh(n)});return}}else if(t===31){if(t=h(n),t!==null){e.blockedOn=t,Vn(e.priority,function(){fh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Lc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Lr=a,n.target.dispatchEvent(a),Lr=null}else return t=Va(n),t!==null&&dh(t),e.blockedOn=n,!1;t.shift()}return!0}function mh(e,t,n){tr(e)&&n.delete(t)}function Sb(){qc=!1,ua!==null&&tr(ua)&&(ua=null),da!==null&&tr(da)&&(da=null),fa!==null&&tr(fa)&&(fa=null),Si.forEach(mh),wi.forEach(mh)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,qc||(qc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Sb)))}var ar=null;function bh(e){ar!==e&&(ar=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ar===e&&(ar=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(Bc(a||n)===null)continue;break}var c=Va(n);c!==null&&(e.splice(t,3),t-=3,Lo(c,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function El(e){function t(S){return nr(S,e)}ua!==null&&nr(ua,e),da!==null&&nr(da,e),fa!==null&&nr(fa,e),Si.forEach(t),wi.forEach(t);for(var n=0;n<pa.length;n++){var a=pa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<pa.length&&(n=pa[0],n.blockedOn===null);)gh(n),n.blockedOn===null&&pa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],c=n[a+1],p=r[Ct]||null;if(typeof c=="function")p||bh(n);else if(p){var m=null;if(c&&c.hasAttribute("formAction")){if(r=c,p=c[Ct]||null)m=p.formAction;else if(Bc(r)!==null)continue}else m=p.action;typeof m=="function"?n[a+1]=m:(n.splice(a,3),a-=3),bh(n)}}}function vh(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Hc(e){this._internalRoot=e}lr.prototype.render=Hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=Lt();ch(n,a,e,t,null,null)},lr.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ch(e.current,2,null,e,null,null),Bs(),t[Za]=null}};function lr(e){this._internalRoot=e}lr.prototype.unstable_scheduleHydration=function(e){if(e){var t=an();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pa.length&&t!==0&&t<pa[n].priority;n++);pa.splice(n,0,e),n===0&&gh(e)}};var yh=l.version;if(yh!=="19.2.6")throw Error(s(527,yh,"19.2.6"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=b(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var wb={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ir.isDisabled&&ir.supportsFiber)try{xa=ir.inject(wb),gt=ir}catch{}}return Ei.createRoot=function(e,t){if(!u(e))throw Error(s(299));var n=!1,a="",r=Ef,c=Af,p=Df;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=rh(e,1,!1,null,null,n,a,null,r,c,p,vh),e[Za]=t.current,Sc(e),new Hc(t)},Ei.hydrateRoot=function(e,t,n){if(!u(e))throw Error(s(299));var a=!1,r="",c=Ef,p=Af,m=Df,S=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=rh(e,1,!0,t,n??null,a,r,S,c,p,m,vh),t.context=oh(null),n=t.current,a=Lt(),a=wn(a),r=Wn(a),r.callback=null,Pn(n,r,a),n=a,t.current.lanes=n,Yt(t,n),bn(t),e[Za]=t.current,Sc(e),new lr(t)},Ei.version="19.2.6",Ei}var Oh;function _b(){if(Oh)return Zc.exports;Oh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(l){console.error(l)}}return o(),Zc.exports=Mb(),Zc.exports}var Ub=_b();function uu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let qa=uu();function ug(o){qa=o}const dg=/[&<>"']/,Lb=new RegExp(dg.source,"g"),fg=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Bb=new RegExp(fg.source,"g"),qb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},zh=o=>qb[o];function Bt(o,l){if(l){if(dg.test(o))return o.replace(Lb,zh)}else if(fg.test(o))return o.replace(Bb,zh);return o}const Hb=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Yb(o){return o.replace(Hb,(l,i)=>(i=i.toLowerCase(),i==="colon"?":":i.charAt(0)==="#"?i.charAt(1)==="x"?String.fromCharCode(parseInt(i.substring(2),16)):String.fromCharCode(+i.substring(1)):""))}const Gb=/(^|[^\[])\^/g;function Oe(o,l){let i=typeof o=="string"?o:o.source;l=l||"";const s={replace:(u,d)=>{let f=typeof d=="string"?d:d.source;return f=f.replace(Gb,"$1"),i=i.replace(u,f),s},getRegex:()=>new RegExp(i,l)};return s}function jh(o){try{o=encodeURI(o).replace(/%25/g,"%")}catch{return null}return o}const Ri={exec:()=>null};function Mh(o,l){const i=o.replace(/\|/g,(d,f,h)=>{let g=!1,b=f;for(;--b>=0&&h[b]==="\\";)g=!g;return g?"|":" |"}),s=i.split(/ \|/);let u=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),l)if(s.length>l)s.splice(l);else for(;s.length<l;)s.push("");for(;u<s.length;u++)s[u]=s[u].trim().replace(/\\\|/g,"|");return s}function Ai(o,l,i){const s=o.length;if(s===0)return"";let u=0;for(;u<s&&o.charAt(s-u-1)===l;)u++;return o.slice(0,s-u)}function Zb(o,l){if(o.indexOf(l[1])===-1)return-1;let i=0;for(let s=0;s<o.length;s++)if(o[s]==="\\")s++;else if(o[s]===l[0])i++;else if(o[s]===l[1]&&(i--,i<0))return s;return-1}function _h(o,l,i,s){const u=l.href,d=l.title?Bt(l.title):null,f=o[1].replace(/\\([\[\]])/g,"$1");if(o[0].charAt(0)!=="!"){s.state.inLink=!0;const h={type:"link",raw:i,href:u,title:d,text:f,tokens:s.inlineTokens(f)};return s.state.inLink=!1,h}return{type:"image",raw:i,href:u,title:d,text:Bt(f)}}function Xb(o,l){const i=o.match(/^(\s+)(?:```)/);if(i===null)return l;const s=i[1];return l.split(`
`).map(u=>{const d=u.match(/^\s+/);if(d===null)return u;const[f]=d;return f.length>=s.length?u.slice(s.length):u}).join(`
`)}class fr{constructor(l){Me(this,"options");Me(this,"rules");Me(this,"lexer");this.options=l||qa}space(l){const i=this.rules.block.newline.exec(l);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(l){const i=this.rules.block.code.exec(l);if(i){const s=i[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?s:Ai(s,`
`)}}}fences(l){const i=this.rules.block.fences.exec(l);if(i){const s=i[0],u=Xb(s,i[3]||"");return{type:"code",raw:s,lang:i[2]?i[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):i[2],text:u}}}heading(l){const i=this.rules.block.heading.exec(l);if(i){let s=i[2].trim();if(/#$/.test(s)){const u=Ai(s,"#");(this.options.pedantic||!u||/ $/.test(u))&&(s=u.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(l){const i=this.rules.block.hr.exec(l);if(i)return{type:"hr",raw:Ai(i[0],`
`)}}blockquote(l){const i=this.rules.block.blockquote.exec(l);if(i){let s=Ai(i[0],`
`).split(`
`),u="",d="";const f=[];for(;s.length>0;){let h=!1;const g=[];let b;for(b=0;b<s.length;b++)if(/^ {0,3}>/.test(s[b]))g.push(s[b]),h=!0;else if(!h)g.push(s[b]);else break;s=s.slice(b);const y=g.join(`
`),x=y.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");u=u?`${u}
${y}`:y,d=d?`${d}
${x}`:x;const E=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(x,f,!0),this.lexer.state.top=E,s.length===0)break;const A=f[f.length-1];if((A==null?void 0:A.type)==="code")break;if((A==null?void 0:A.type)==="blockquote"){const M=A,z=M.raw+`
`+s.join(`
`),X=this.blockquote(z);f[f.length-1]=X,u=u.substring(0,u.length-M.raw.length)+X.raw,d=d.substring(0,d.length-M.text.length)+X.text;break}else if((A==null?void 0:A.type)==="list"){const M=A,z=M.raw+`
`+s.join(`
`),X=this.list(z);f[f.length-1]=X,u=u.substring(0,u.length-A.raw.length)+X.raw,d=d.substring(0,d.length-M.raw.length)+X.raw,s=z.substring(f[f.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:u,tokens:f,text:d}}}list(l){let i=this.rules.block.list.exec(l);if(i){let s=i[1].trim();const u=s.length>1,d={type:"list",raw:"",ordered:u,start:u?+s.slice(0,-1):"",loose:!1,items:[]};s=u?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=u?s:"[*+-]");const f=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let h=!1;for(;l;){let g=!1,b="",y="";if(!(i=f.exec(l))||this.rules.block.hr.test(l))break;b=i[0],l=l.substring(b.length);let x=i[2].split(`
`,1)[0].replace(/^\t+/,Y=>" ".repeat(3*Y.length)),E=l.split(`
`,1)[0],A=!x.trim(),M=0;if(this.options.pedantic?(M=2,y=x.trimStart()):A?M=i[1].length+1:(M=i[2].search(/[^ ]/),M=M>4?1:M,y=x.slice(M),M+=i[1].length),A&&/^ *$/.test(E)&&(b+=E+`
`,l=l.substring(E.length+1),g=!0),!g){const Y=new RegExp(`^ {0,${Math.min(3,M-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),G=new RegExp(`^ {0,${Math.min(3,M-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),K=new RegExp(`^ {0,${Math.min(3,M-1)}}(?:\`\`\`|~~~)`),I=new RegExp(`^ {0,${Math.min(3,M-1)}}#`);for(;l;){const Z=l.split(`
`,1)[0];if(E=Z,this.options.pedantic&&(E=E.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),K.test(E)||I.test(E)||Y.test(E)||G.test(l))break;if(E.search(/[^ ]/)>=M||!E.trim())y+=`
`+E.slice(M);else{if(A||x.search(/[^ ]/)>=4||K.test(x)||I.test(x)||G.test(x))break;y+=`
`+E}!A&&!E.trim()&&(A=!0),b+=Z+`
`,l=l.substring(Z.length+1),x=E.slice(M)}}d.loose||(h?d.loose=!0:/\n *\n *$/.test(b)&&(h=!0));let z=null,X;this.options.gfm&&(z=/^\[[ xX]\] /.exec(y),z&&(X=z[0]!=="[ ] ",y=y.replace(/^\[[ xX]\] +/,""))),d.items.push({type:"list_item",raw:b,task:!!z,checked:X,loose:!1,text:y,tokens:[]}),d.raw+=b}d.items[d.items.length-1].raw=d.items[d.items.length-1].raw.trimEnd(),d.items[d.items.length-1].text=d.items[d.items.length-1].text.trimEnd(),d.raw=d.raw.trimEnd();for(let g=0;g<d.items.length;g++)if(this.lexer.state.top=!1,d.items[g].tokens=this.lexer.blockTokens(d.items[g].text,[]),!d.loose){const b=d.items[g].tokens.filter(x=>x.type==="space"),y=b.length>0&&b.some(x=>/\n.*\n/.test(x.raw));d.loose=y}if(d.loose)for(let g=0;g<d.items.length;g++)d.items[g].loose=!0;return d}}html(l){const i=this.rules.block.html.exec(l);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(l){const i=this.rules.block.def.exec(l);if(i){const s=i[1].toLowerCase().replace(/\s+/g," "),u=i[2]?i[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",d=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):i[3];return{type:"def",tag:s,raw:i[0],href:u,title:d}}}table(l){const i=this.rules.block.table.exec(l);if(!i||!/[:|]/.test(i[2]))return;const s=Mh(i[1]),u=i[2].replace(/^\||\| *$/g,"").split("|"),d=i[3]&&i[3].trim()?i[3].replace(/\n[ \t]*$/,"").split(`
`):[],f={type:"table",raw:i[0],header:[],align:[],rows:[]};if(s.length===u.length){for(const h of u)/^ *-+: *$/.test(h)?f.align.push("right"):/^ *:-+: *$/.test(h)?f.align.push("center"):/^ *:-+ *$/.test(h)?f.align.push("left"):f.align.push(null);for(let h=0;h<s.length;h++)f.header.push({text:s[h],tokens:this.lexer.inline(s[h]),header:!0,align:f.align[h]});for(const h of d)f.rows.push(Mh(h,f.header.length).map((g,b)=>({text:g,tokens:this.lexer.inline(g),header:!1,align:f.align[b]})));return f}}lheading(l){const i=this.rules.block.lheading.exec(l);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(l){const i=this.rules.block.paragraph.exec(l);if(i){const s=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:s,tokens:this.lexer.inline(s)}}}text(l){const i=this.rules.block.text.exec(l);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(l){const i=this.rules.inline.escape.exec(l);if(i)return{type:"escape",raw:i[0],text:Bt(i[1])}}tag(l){const i=this.rules.inline.tag.exec(l);if(i)return!this.lexer.state.inLink&&/^<a /i.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(l){const i=this.rules.inline.link.exec(l);if(i){const s=i[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const f=Ai(s.slice(0,-1),"\\");if((s.length-f.length)%2===0)return}else{const f=Zb(i[2],"()");if(f>-1){const g=(i[0].indexOf("!")===0?5:4)+i[1].length+f;i[2]=i[2].substring(0,f),i[0]=i[0].substring(0,g).trim(),i[3]=""}}let u=i[2],d="";if(this.options.pedantic){const f=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u);f&&(u=f[1],d=f[3])}else d=i[3]?i[3].slice(1,-1):"";return u=u.trim(),/^</.test(u)&&(this.options.pedantic&&!/>$/.test(s)?u=u.slice(1):u=u.slice(1,-1)),_h(i,{href:u&&u.replace(this.rules.inline.anyPunctuation,"$1"),title:d&&d.replace(this.rules.inline.anyPunctuation,"$1")},i[0],this.lexer)}}reflink(l,i){let s;if((s=this.rules.inline.reflink.exec(l))||(s=this.rules.inline.nolink.exec(l))){const u=(s[2]||s[1]).replace(/\s+/g," "),d=i[u.toLowerCase()];if(!d){const f=s[0].charAt(0);return{type:"text",raw:f,text:f}}return _h(s,d,s[0],this.lexer)}}emStrong(l,i,s=""){let u=this.rules.inline.emStrongLDelim.exec(l);if(!u||u[3]&&s.match(/[\p{L}\p{N}]/u))return;if(!(u[1]||u[2]||"")||!s||this.rules.inline.punctuation.exec(s)){const f=[...u[0]].length-1;let h,g,b=f,y=0;const x=u[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(x.lastIndex=0,i=i.slice(-1*l.length+f);(u=x.exec(i))!=null;){if(h=u[1]||u[2]||u[3]||u[4]||u[5]||u[6],!h)continue;if(g=[...h].length,u[3]||u[4]){b+=g;continue}else if((u[5]||u[6])&&f%3&&!((f+g)%3)){y+=g;continue}if(b-=g,b>0)continue;g=Math.min(g,g+b+y);const E=[...u[0]][0].length,A=l.slice(0,f+u.index+E+g);if(Math.min(f,g)%2){const z=A.slice(1,-1);return{type:"em",raw:A,text:z,tokens:this.lexer.inlineTokens(z)}}const M=A.slice(2,-2);return{type:"strong",raw:A,text:M,tokens:this.lexer.inlineTokens(M)}}}}codespan(l){const i=this.rules.inline.code.exec(l);if(i){let s=i[2].replace(/\n/g," ");const u=/[^ ]/.test(s),d=/^ /.test(s)&&/ $/.test(s);return u&&d&&(s=s.substring(1,s.length-1)),s=Bt(s,!0),{type:"codespan",raw:i[0],text:s}}}br(l){const i=this.rules.inline.br.exec(l);if(i)return{type:"br",raw:i[0]}}del(l){const i=this.rules.inline.del.exec(l);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}}autolink(l){const i=this.rules.inline.autolink.exec(l);if(i){let s,u;return i[2]==="@"?(s=Bt(i[1]),u="mailto:"+s):(s=Bt(i[1]),u=s),{type:"link",raw:i[0],text:s,href:u,tokens:[{type:"text",raw:s,text:s}]}}}url(l){var s;let i;if(i=this.rules.inline.url.exec(l)){let u,d;if(i[2]==="@")u=Bt(i[0]),d="mailto:"+u;else{let f;do f=i[0],i[0]=((s=this.rules.inline._backpedal.exec(i[0]))==null?void 0:s[0])??"";while(f!==i[0]);u=Bt(i[0]),i[1]==="www."?d="http://"+i[0]:d=i[0]}return{type:"link",raw:i[0],text:u,href:d,tokens:[{type:"text",raw:u,text:u}]}}}inlineText(l){const i=this.rules.inline.text.exec(l);if(i){let s;return this.lexer.state.inRawBlock?s=i[0]:s=Bt(i[0]),{type:"text",raw:i[0],text:s}}}}const Vb=/^(?: *(?:\n|$))+/,Qb=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Kb=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Li=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ib=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,pg=/(?:[*+-]|\d{1,9}[.)])/,hg=Oe(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,pg).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),du=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Jb=/^[^\n]+/,fu=/(?!\s*\])(?:\\.|[^\[\]\\])+/,$b=Oe(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",fu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Fb=Oe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,pg).getRegex(),Sr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",pu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Wb=Oe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",pu).replace("tag",Sr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),gg=Oe(du).replace("hr",Li).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Sr).getRegex(),Pb=Oe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",gg).getRegex(),hu={blockquote:Pb,code:Qb,def:$b,fences:Kb,heading:Ib,hr:Li,html:Wb,lheading:hg,list:Fb,newline:Vb,paragraph:gg,table:Ri,text:Jb},Uh=Oe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Li).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Sr).getRegex(),ev={...hu,table:Uh,paragraph:Oe(du).replace("hr",Li).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Uh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Sr).getRegex()},tv={...hu,html:Oe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",pu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ri,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Oe(du).replace("hr",Li).replace("heading",` *#{1,6} *[^
]`).replace("lheading",hg).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},mg=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,nv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,bg=/^( {2,}|\\)\n(?!\s*$)/,av=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Bi="\\p{P}\\p{S}",lv=Oe(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Bi).getRegex(),iv=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,sv=Oe(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Bi).getRegex(),rv=Oe("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Bi).getRegex(),ov=Oe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Bi).getRegex(),cv=Oe(/\\([punct])/,"gu").replace(/punct/g,Bi).getRegex(),uv=Oe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),dv=Oe(pu).replace("(?:-->|$)","-->").getRegex(),fv=Oe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",dv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),pr=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,pv=Oe(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",pr).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),vg=Oe(/^!?\[(label)\]\[(ref)\]/).replace("label",pr).replace("ref",fu).getRegex(),yg=Oe(/^!?\[(ref)\](?:\[\])?/).replace("ref",fu).getRegex(),hv=Oe("reflink|nolink(?!\\()","g").replace("reflink",vg).replace("nolink",yg).getRegex(),gu={_backpedal:Ri,anyPunctuation:cv,autolink:uv,blockSkip:iv,br:bg,code:nv,del:Ri,emStrongLDelim:sv,emStrongRDelimAst:rv,emStrongRDelimUnd:ov,escape:mg,link:pv,nolink:yg,punctuation:lv,reflink:vg,reflinkSearch:hv,tag:fv,text:av,url:Ri},gv={...gu,link:Oe(/^!?\[(label)\]\((.*?)\)/).replace("label",pr).getRegex(),reflink:Oe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",pr).getRegex()},eu={...gu,escape:Oe(mg).replace("])","~|])").getRegex(),url:Oe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},mv={...eu,br:Oe(bg).replace("{2,}","*").getRegex(),text:Oe(eu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},sr={normal:hu,gfm:ev,pedantic:tv},Di={normal:gu,gfm:eu,breaks:mv,pedantic:gv};class vn{constructor(l){Me(this,"tokens");Me(this,"options");Me(this,"state");Me(this,"tokenizer");Me(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=l||qa,this.options.tokenizer=this.options.tokenizer||new fr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const i={block:sr.normal,inline:Di.normal};this.options.pedantic?(i.block=sr.pedantic,i.inline=Di.pedantic):this.options.gfm&&(i.block=sr.gfm,this.options.breaks?i.inline=Di.breaks:i.inline=Di.gfm),this.tokenizer.rules=i}static get rules(){return{block:sr,inline:Di}}static lex(l,i){return new vn(i).lex(l)}static lexInline(l,i){return new vn(i).inlineTokens(l)}lex(l){l=l.replace(/\r\n|\r/g,`
`),this.blockTokens(l,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){const s=this.inlineQueue[i];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(l,i=[],s=!1){this.options.pedantic?l=l.replace(/\t/g,"    ").replace(/^ +$/gm,""):l=l.replace(/^( *)(\t+)/gm,(h,g,b)=>g+"    ".repeat(b.length));let u,d,f;for(;l;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(h=>(u=h.call({lexer:this},l,i))?(l=l.substring(u.raw.length),i.push(u),!0):!1))){if(u=this.tokenizer.space(l)){l=l.substring(u.raw.length),u.raw.length===1&&i.length>0?i[i.length-1].raw+=`
`:i.push(u);continue}if(u=this.tokenizer.code(l)){l=l.substring(u.raw.length),d=i[i.length-1],d&&(d.type==="paragraph"||d.type==="text")?(d.raw+=`
`+u.raw,d.text+=`
`+u.text,this.inlineQueue[this.inlineQueue.length-1].src=d.text):i.push(u);continue}if(u=this.tokenizer.fences(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.heading(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.hr(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.blockquote(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.list(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.html(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.def(l)){l=l.substring(u.raw.length),d=i[i.length-1],d&&(d.type==="paragraph"||d.type==="text")?(d.raw+=`
`+u.raw,d.text+=`
`+u.raw,this.inlineQueue[this.inlineQueue.length-1].src=d.text):this.tokens.links[u.tag]||(this.tokens.links[u.tag]={href:u.href,title:u.title});continue}if(u=this.tokenizer.table(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.lheading(l)){l=l.substring(u.raw.length),i.push(u);continue}if(f=l,this.options.extensions&&this.options.extensions.startBlock){let h=1/0;const g=l.slice(1);let b;this.options.extensions.startBlock.forEach(y=>{b=y.call({lexer:this},g),typeof b=="number"&&b>=0&&(h=Math.min(h,b))}),h<1/0&&h>=0&&(f=l.substring(0,h+1))}if(this.state.top&&(u=this.tokenizer.paragraph(f))){d=i[i.length-1],s&&(d==null?void 0:d.type)==="paragraph"?(d.raw+=`
`+u.raw,d.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):i.push(u),s=f.length!==l.length,l=l.substring(u.raw.length);continue}if(u=this.tokenizer.text(l)){l=l.substring(u.raw.length),d=i[i.length-1],d&&d.type==="text"?(d.raw+=`
`+u.raw,d.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):i.push(u);continue}if(l){const h="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return this.state.top=!0,i}inline(l,i=[]){return this.inlineQueue.push({src:l,tokens:i}),i}inlineTokens(l,i=[]){let s,u,d,f=l,h,g,b;if(this.tokens.links){const y=Object.keys(this.tokens.links);if(y.length>0)for(;(h=this.tokenizer.rules.inline.reflinkSearch.exec(f))!=null;)y.includes(h[0].slice(h[0].lastIndexOf("[")+1,-1))&&(f=f.slice(0,h.index)+"["+"a".repeat(h[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(h=this.tokenizer.rules.inline.blockSkip.exec(f))!=null;)f=f.slice(0,h.index)+"["+"a".repeat(h[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(h=this.tokenizer.rules.inline.anyPunctuation.exec(f))!=null;)f=f.slice(0,h.index)+"++"+f.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;l;)if(g||(b=""),g=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(y=>(s=y.call({lexer:this},l,i))?(l=l.substring(s.raw.length),i.push(s),!0):!1))){if(s=this.tokenizer.escape(l)){l=l.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.tag(l)){l=l.substring(s.raw.length),u=i[i.length-1],u&&s.type==="text"&&u.type==="text"?(u.raw+=s.raw,u.text+=s.text):i.push(s);continue}if(s=this.tokenizer.link(l)){l=l.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.reflink(l,this.tokens.links)){l=l.substring(s.raw.length),u=i[i.length-1],u&&s.type==="text"&&u.type==="text"?(u.raw+=s.raw,u.text+=s.text):i.push(s);continue}if(s=this.tokenizer.emStrong(l,f,b)){l=l.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.codespan(l)){l=l.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.br(l)){l=l.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.del(l)){l=l.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.autolink(l)){l=l.substring(s.raw.length),i.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(l))){l=l.substring(s.raw.length),i.push(s);continue}if(d=l,this.options.extensions&&this.options.extensions.startInline){let y=1/0;const x=l.slice(1);let E;this.options.extensions.startInline.forEach(A=>{E=A.call({lexer:this},x),typeof E=="number"&&E>=0&&(y=Math.min(y,E))}),y<1/0&&y>=0&&(d=l.substring(0,y+1))}if(s=this.tokenizer.inlineText(d)){l=l.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(b=s.raw.slice(-1)),g=!0,u=i[i.length-1],u&&u.type==="text"?(u.raw+=s.raw,u.text+=s.text):i.push(s);continue}if(l){const y="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return i}}class hr{constructor(l){Me(this,"options");Me(this,"parser");this.options=l||qa}space(l){return""}code({text:l,lang:i,escaped:s}){var f;const u=(f=(i||"").match(/^\S*/))==null?void 0:f[0],d=l.replace(/\n$/,"")+`
`;return u?'<pre><code class="language-'+Bt(u)+'">'+(s?d:Bt(d,!0))+`</code></pre>
`:"<pre><code>"+(s?d:Bt(d,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}heading({tokens:l,depth:i}){return`<h${i}>${this.parser.parseInline(l)}</h${i}>
`}hr(l){return`<hr>
`}list(l){const i=l.ordered,s=l.start;let u="";for(let h=0;h<l.items.length;h++){const g=l.items[h];u+=this.listitem(g)}const d=i?"ol":"ul",f=i&&s!==1?' start="'+s+'"':"";return"<"+d+f+`>
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
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${l}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:i,tokens:s}){const u=this.parser.parseInline(s),d=jh(l);if(d===null)return u;l=d;let f='<a href="'+l+'"';return i&&(f+=' title="'+i+'"'),f+=">"+u+"</a>",f}image({href:l,title:i,text:s}){const u=jh(l);if(u===null)return s;l=u;let d=`<img src="${l}" alt="${s}"`;return i&&(d+=` title="${i}"`),d+=">",d}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):l.text}}class mu{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}}class yn{constructor(l){Me(this,"options");Me(this,"renderer");Me(this,"textRenderer");this.options=l||qa,this.options.renderer=this.options.renderer||new hr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new mu}static parse(l,i){return new yn(i).parse(l)}static parseInline(l,i){return new yn(i).parseInline(l)}parse(l,i=!0){let s="";for(let u=0;u<l.length;u++){const d=l[u];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]){const h=d,g=this.options.extensions.renderers[h.type].call({parser:this},h);if(g!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type)){s+=g||"";continue}}const f=d;switch(f.type){case"space":{s+=this.renderer.space(f);continue}case"hr":{s+=this.renderer.hr(f);continue}case"heading":{s+=this.renderer.heading(f);continue}case"code":{s+=this.renderer.code(f);continue}case"table":{s+=this.renderer.table(f);continue}case"blockquote":{s+=this.renderer.blockquote(f);continue}case"list":{s+=this.renderer.list(f);continue}case"html":{s+=this.renderer.html(f);continue}case"paragraph":{s+=this.renderer.paragraph(f);continue}case"text":{let h=f,g=this.renderer.text(h);for(;u+1<l.length&&l[u+1].type==="text";)h=l[++u],g+=`
`+this.renderer.text(h);i?s+=this.renderer.paragraph({type:"paragraph",raw:g,text:g,tokens:[{type:"text",raw:g,text:g}]}):s+=g;continue}default:{const h='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(h),"";throw new Error(h)}}}return s}parseInline(l,i){i=i||this.renderer;let s="";for(let u=0;u<l.length;u++){const d=l[u];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]){const h=this.options.extensions.renderers[d.type].call({parser:this},d);if(h!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(d.type)){s+=h||"";continue}}const f=d;switch(f.type){case"escape":{s+=i.text(f);break}case"html":{s+=i.html(f);break}case"link":{s+=i.link(f);break}case"image":{s+=i.image(f);break}case"strong":{s+=i.strong(f);break}case"em":{s+=i.em(f);break}case"codespan":{s+=i.codespan(f);break}case"br":{s+=i.br(f);break}case"del":{s+=i.del(f);break}case"text":{s+=i.text(f);break}default:{const h='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(h),"";throw new Error(h)}}}return s}}class Oi{constructor(l){Me(this,"options");this.options=l||qa}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}}Me(Oi,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Gn,xg,tu,Sg;class bv{constructor(...l){Sh(this,Gn);Me(this,"defaults",uu());Me(this,"options",this.setOptions);Me(this,"parse",Ni(this,Gn,tu).call(this,vn.lex,yn.parse));Me(this,"parseInline",Ni(this,Gn,tu).call(this,vn.lexInline,yn.parseInline));Me(this,"Parser",yn);Me(this,"Renderer",hr);Me(this,"TextRenderer",mu);Me(this,"Lexer",vn);Me(this,"Tokenizer",fr);Me(this,"Hooks",Oi);this.use(...l)}walkTokens(l,i){var u,d;let s=[];for(const f of l)switch(s=s.concat(i.call(this,f)),f.type){case"table":{const h=f;for(const g of h.header)s=s.concat(this.walkTokens(g.tokens,i));for(const g of h.rows)for(const b of g)s=s.concat(this.walkTokens(b.tokens,i));break}case"list":{const h=f;s=s.concat(this.walkTokens(h.items,i));break}default:{const h=f;(d=(u=this.defaults.extensions)==null?void 0:u.childTokens)!=null&&d[h.type]?this.defaults.extensions.childTokens[h.type].forEach(g=>{const b=h[g].flat(1/0);s=s.concat(this.walkTokens(b,i))}):h.tokens&&(s=s.concat(this.walkTokens(h.tokens,i)))}}return s}use(...l){const i=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(s=>{const u={...s};if(u.async=this.defaults.async||u.async||!1,s.extensions&&(s.extensions.forEach(d=>{if(!d.name)throw new Error("extension name required");if("renderer"in d){const f=i.renderers[d.name];f?i.renderers[d.name]=function(...h){let g=d.renderer.apply(this,h);return g===!1&&(g=f.apply(this,h)),g}:i.renderers[d.name]=d.renderer}if("tokenizer"in d){if(!d.level||d.level!=="block"&&d.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const f=i[d.level];f?f.unshift(d.tokenizer):i[d.level]=[d.tokenizer],d.start&&(d.level==="block"?i.startBlock?i.startBlock.push(d.start):i.startBlock=[d.start]:d.level==="inline"&&(i.startInline?i.startInline.push(d.start):i.startInline=[d.start]))}"childTokens"in d&&d.childTokens&&(i.childTokens[d.name]=d.childTokens)}),u.extensions=i),s.renderer){const d=this.defaults.renderer||new hr(this.defaults);for(const f in s.renderer){if(!(f in d))throw new Error(`renderer '${f}' does not exist`);if(["options","parser"].includes(f))continue;const h=f;let g=s.renderer[h];s.useNewRenderer||(g=Ni(this,Gn,xg).call(this,g,h,d));const b=d[h];d[h]=(...y)=>{let x=g.apply(d,y);return x===!1&&(x=b.apply(d,y)),x||""}}u.renderer=d}if(s.tokenizer){const d=this.defaults.tokenizer||new fr(this.defaults);for(const f in s.tokenizer){if(!(f in d))throw new Error(`tokenizer '${f}' does not exist`);if(["options","rules","lexer"].includes(f))continue;const h=f,g=s.tokenizer[h],b=d[h];d[h]=(...y)=>{let x=g.apply(d,y);return x===!1&&(x=b.apply(d,y)),x}}u.tokenizer=d}if(s.hooks){const d=this.defaults.hooks||new Oi;for(const f in s.hooks){if(!(f in d))throw new Error(`hook '${f}' does not exist`);if(f==="options")continue;const h=f,g=s.hooks[h],b=d[h];Oi.passThroughHooks.has(f)?d[h]=y=>{if(this.defaults.async)return Promise.resolve(g.call(d,y)).then(E=>b.call(d,E));const x=g.call(d,y);return b.call(d,x)}:d[h]=(...y)=>{let x=g.apply(d,y);return x===!1&&(x=b.apply(d,y)),x}}u.hooks=d}if(s.walkTokens){const d=this.defaults.walkTokens,f=s.walkTokens;u.walkTokens=function(h){let g=[];return g.push(f.call(this,h)),d&&(g=g.concat(d.call(this,h))),g}}this.defaults={...this.defaults,...u}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,i){return vn.lex(l,i??this.defaults)}parser(l,i){return yn.parse(l,i??this.defaults)}}Gn=new WeakSet,xg=function(l,i,s){switch(i){case"heading":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,s.parser.parseInline(u.tokens),u.depth,Yb(s.parser.parseInline(u.tokens,s.parser.textRenderer)))};case"code":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text,u.lang,!!u.escaped)};case"table":return function(u){if(!u.type||u.type!==i)return l.apply(this,arguments);let d="",f="";for(let g=0;g<u.header.length;g++)f+=this.tablecell({text:u.header[g].text,tokens:u.header[g].tokens,header:!0,align:u.align[g]});d+=this.tablerow({text:f});let h="";for(let g=0;g<u.rows.length;g++){const b=u.rows[g];f="";for(let y=0;y<b.length;y++)f+=this.tablecell({text:b[y].text,tokens:b[y].tokens,header:!1,align:u.align[y]});h+=this.tablerow({text:f})}return l.call(this,d,h)};case"blockquote":return function(u){if(!u.type||u.type!==i)return l.apply(this,arguments);const d=this.parser.parse(u.tokens);return l.call(this,d)};case"list":return function(u){if(!u.type||u.type!==i)return l.apply(this,arguments);const d=u.ordered,f=u.start,h=u.loose;let g="";for(let b=0;b<u.items.length;b++){const y=u.items[b],x=y.checked,E=y.task;let A="";if(y.task){const M=this.checkbox({checked:!!x});h?y.tokens.length>0&&y.tokens[0].type==="paragraph"?(y.tokens[0].text=M+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&y.tokens[0].tokens[0].type==="text"&&(y.tokens[0].tokens[0].text=M+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:M+" "}):A+=M+" "}A+=this.parser.parse(y.tokens,h),g+=this.listitem({type:"list_item",raw:A,text:A,task:E,checked:!!x,loose:h,tokens:y.tokens})}return l.call(this,g,d,f)};case"html":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text,u.block)};case"paragraph":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"escape":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text)};case"link":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.href,u.title,this.parser.parseInline(u.tokens))};case"image":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.href,u.title,u.text)};case"strong":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"em":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"codespan":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text)};case"del":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"text":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text)}}return l},tu=function(l,i){return(s,u)=>{const d={...u},f={...this.defaults,...d};this.defaults.async===!0&&d.async===!1&&(f.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),f.async=!0);const h=Ni(this,Gn,Sg).call(this,!!f.silent,!!f.async);if(typeof s>"u"||s===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(f.hooks&&(f.hooks.options=f),f.async)return Promise.resolve(f.hooks?f.hooks.preprocess(s):s).then(g=>l(g,f)).then(g=>f.hooks?f.hooks.processAllTokens(g):g).then(g=>f.walkTokens?Promise.all(this.walkTokens(g,f.walkTokens)).then(()=>g):g).then(g=>i(g,f)).then(g=>f.hooks?f.hooks.postprocess(g):g).catch(h);try{f.hooks&&(s=f.hooks.preprocess(s));let g=l(s,f);f.hooks&&(g=f.hooks.processAllTokens(g)),f.walkTokens&&this.walkTokens(g,f.walkTokens);let b=i(g,f);return f.hooks&&(b=f.hooks.postprocess(b)),b}catch(g){return h(g)}}},Sg=function(l,i){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const u="<p>An error occurred:</p><pre>"+Bt(s.message+"",!0)+"</pre>";return i?Promise.resolve(u):u}if(i)return Promise.reject(s);throw s}};const Ba=new bv;function Ae(o,l){return Ba.parse(o,l)}Ae.options=Ae.setOptions=function(o){return Ba.setOptions(o),Ae.defaults=Ba.defaults,ug(Ae.defaults),Ae};Ae.getDefaults=uu;Ae.defaults=qa;Ae.use=function(...o){return Ba.use(...o),Ae.defaults=Ba.defaults,ug(Ae.defaults),Ae};Ae.walkTokens=function(o,l){return Ba.walkTokens(o,l)};Ae.parseInline=Ba.parseInline;Ae.Parser=yn;Ae.parser=yn.parse;Ae.Renderer=hr;Ae.TextRenderer=mu;Ae.Lexer=vn;Ae.lexer=vn.lex;Ae.Tokenizer=fr;Ae.Hooks=Oi;Ae.parse=Ae;Ae.options;Ae.setOptions;Ae.use;Ae.walkTokens;Ae.parseInline;yn.parse;vn.lex;const vv=`/* ================================================================
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
`,yv=`/* ============================================================
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
`,xv=`// Icons — Phosphor Icons (phosphor-icons.com), Regular weight, 256×256 viewBox.
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
  IconExternal, IconRevert, IconUsers, IconInfo, IconUpload,
  IconEditFill, IconTrashFill,
});
`,Sv=`// Template picker — trigger button + dropdown menu with search,
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
`,wv=`// Modals — Save-as-template dialog, Save-changes confirm, Manage modal.

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
`,Cv=`// Step 3 body — Producer Team table + Additional Information block.
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
`,Nv=vv.replace(/@font-face\s*\{[^}]*\}/g,""),Tv=`
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
<\/script>`;function Ev(o){return`<!doctype html>
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
  <style>${Nv}</style>
  <style>${yv}</style>
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
  ${Tv}
</head>
<body>
  <div id="root"></div>
  <div id="__err"></div>
  <script type="text/babel">
${xv}
  <\/script>
  <script type="text/babel">
${Sv}
  <\/script>
  <script type="text/babel">
${wv}
  <\/script>
  <script type="text/babel">
${Cv}
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
</html>`}function Av({code:o,prd:l,onInitDesign:i}){const s=N.useRef(null),[u,d]=N.useState("preview"),[f,h]=N.useState("#/"),[g,b]=N.useState("#/"),[y,x]=N.useState(["#/"]),[E,A]=N.useState(0);N.useEffect(()=>{function G(K){var Z;if(((Z=K.data)==null?void 0:Z.type)!=="__route")return;const I=K.data.path||"#/";h(I),b(I),x(Q=>{const H=Q.slice(0,E+1);return H[H.length-1]===I?H:[...H,I]}),A(Q=>Q+1)}return window.addEventListener("message",G),()=>window.removeEventListener("message",G)},[E]),N.useEffect(()=>{!s.current||!o||(h("#/"),b("#/"),x(["#/"]),A(0),s.current.srcdoc=Ev(o))},[o]);function M(G){var K,I,Z,Q,H;(I=(K=s.current)==null?void 0:K.contentWindow)==null||I.postMessage({type:"__navigate",path:G},"*");try{(Z=s.current)!=null&&Z.contentWindow&&((H=(Q=s.current.contentWindow).__navigate)==null||H.call(Q,G))}catch{}}function z(){if(E<=0)return;const G=y[E-1];A(K=>K-1),h(G),b(G),M(G)}function X(){if(E>=y.length-1)return;const G=y[E+1];A(K=>K+1),h(G),b(G),M(G)}function Y(G){G.preventDefault(),M(g)}return o?v.jsxs("div",{className:"canvas canvas--live",children:[v.jsxs("div",{className:"canvas-toolbar",children:[v.jsxs("div",{className:"canvas-view-tabs",children:[v.jsx("button",{className:`canvas-view-tab ${u==="preview"?"active":""}`,onClick:()=>d("preview"),children:"Preview"}),v.jsx("button",{className:`canvas-view-tab ${u==="code"?"active":""}`,onClick:()=>d("code"),children:"Code"})]}),u==="preview"&&v.jsxs("div",{className:"canvas-urlbar",children:[v.jsx("button",{className:"canvas-nav-btn",onClick:z,disabled:E<=0,title:"Back",children:"←"}),v.jsx("button",{className:"canvas-nav-btn",onClick:X,disabled:E>=y.length-1,title:"Forward",children:"→"}),v.jsx("form",{className:"canvas-url-form",onSubmit:Y,children:v.jsx("input",{className:"canvas-url-input",value:g,onChange:G=>b(G.target.value),spellCheck:!1})})]}),v.jsx("button",{className:"canvas-copy-btn",onClick:()=>navigator.clipboard.writeText(o),children:"copy"})]}),v.jsxs("div",{className:"canvas-body",children:[v.jsx("iframe",{ref:s,className:"canvas-iframe",style:{display:u==="preview"?"block":"none"},title:"design preview",sandbox:"allow-scripts allow-same-origin"}),u==="code"&&v.jsx("pre",{className:"canvas-code",children:v.jsx("code",{children:o})})]})]}):v.jsx("div",{className:"canvas canvas--empty",children:l?v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"canvas-empty-icon",children:"✦"}),v.jsx("p",{className:"canvas-empty-title",children:l.name}),v.jsx("span",{className:"canvas-empty-sub",children:"PRD loaded — ready to generate"}),v.jsx("button",{className:"canvas-init-btn",onClick:i,children:"Init Design"})]}):v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"canvas-empty-icon",children:"◎"}),v.jsx("p",{className:"canvas-empty-title",children:"No PRD loaded"}),v.jsx("span",{className:"canvas-empty-sub",children:"Open a PRD from Projects to start"})]})})}const wg="ennabl_builder_history",Dv=50;function kv(){try{return JSON.parse(localStorage.getItem(wg)||"[]")}catch{return[]}}function Lh(o){localStorage.setItem(wg,JSON.stringify(o.slice(0,Dv)))}function Rv({prdName:o,code:l,iteration:i}){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,timestamp:new Date().toISOString(),prdName:o,code:l,iteration:i}}function Ov(o){const i=`${o.prdName.replace(/\.md$/i,"").replace(/[^a-z0-9]/gi,"-").toLowerCase()}-v${o.iteration}.jsx`,s=`/**
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
`,u=new Blob([s],{type:"text/plain"}),d=URL.createObjectURL(u);Object.assign(document.createElement("a"),{href:d,download:i}).click(),URL.revokeObjectURL(d)}function zv(o){const l=Math.floor((Date.now()-new Date(o))/6e4);if(l<1)return"just now";if(l<60)return`${l}m ago`;const i=Math.floor(l/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}function jv(o){return o.split(`
`).slice(0,3).join(`
`).slice(0,140)}function Mv({entries:o,onClear:l}){const[i,s]=N.useState(null);function u(d){navigator.clipboard.writeText(d.code),s(d.id),setTimeout(()=>s(null),2e3)}return o.length===0?v.jsxs("div",{className:"sb-empty",children:[v.jsx("p",{children:"No components yet"}),v.jsx("span",{children:"Each generated UI is logged here. Download or copy the JSX to use in your codebase."})]}):v.jsxs("div",{className:"sb-tab",children:[v.jsxs("div",{className:"sb-toolbar",children:[v.jsxs("span",{className:"sb-count",children:[o.length," snapshot",o.length!==1?"s":""]}),v.jsx("button",{className:"sb-clear",onClick:l,children:"clear all"})]}),v.jsx("div",{className:"sb-list",children:o.map(d=>v.jsxs("div",{className:"sb-entry",children:[v.jsxs("div",{className:"sb-entry-top",children:[v.jsx("span",{className:"sb-entry-name",children:d.prdName.replace(/\.md$/i,"")}),v.jsxs("span",{className:"sb-entry-badge",children:["v",d.iteration]}),v.jsx("span",{className:"sb-entry-time",children:zv(d.timestamp)})]}),v.jsx("pre",{className:"sb-entry-code",children:jv(d.code)}),v.jsxs("div",{className:"sb-entry-actions",children:[v.jsx("button",{className:"sb-btn",onClick:()=>u(d),children:i===d.id?"✓ copied":"copy"}),v.jsx("button",{className:"sb-btn sb-btn--primary",onClick:()=>Ov(d),children:"↓ .jsx"})]})]},d.id))})]})}function _v({entries:o}){return v.jsx("div",{className:"figma-tab",children:v.jsxs("div",{className:"figma-coming",children:[v.jsx("div",{className:"figma-icon",children:"◈"}),v.jsx("p",{children:"Figma sync"}),v.jsx("span",{children:"Will push each generated component into your Figma file as a frame — auto-named by PRD and iteration, grouped in a dedicated page. Requires a Figma access token."}),v.jsx("div",{className:"figma-queue",children:o.length>0?v.jsxs(v.Fragment,{children:[v.jsxs("span",{className:"figma-queue-label",children:[o.length," snapshot",o.length!==1?"s":""," queued"]}),v.jsx("button",{className:"figma-btn",disabled:!0,children:"Connect Figma to push"})]}):v.jsx("span",{className:"figma-queue-label",children:"Generate a UI first"})})]})})}function Uv({code:o,prd:l,history:i,onHistoryClear:s,onInitDesign:u}){const[d,f]=N.useState("design");return v.jsxs("div",{className:"left-panel",children:[v.jsxs("div",{className:"left-tabs",children:[v.jsx("button",{className:`left-tab ${d==="design"?"left-tab--active":""}`,onClick:()=>f("design"),children:"Design"}),v.jsx("button",{className:`left-tab ${d==="prd"?"left-tab--active":""} ${l?"":"left-tab--disabled"}`,onClick:()=>l&&f("prd"),children:l?l.name:"PRD"}),v.jsxs("button",{className:`left-tab ${d==="storybook"?"left-tab--active":""}`,onClick:()=>f("storybook"),children:["Storybook",i.length>0&&v.jsx("span",{className:"left-tab-count",children:i.length})]}),v.jsx("button",{className:`left-tab ${d==="figma"?"left-tab--active":""}`,onClick:()=>f("figma"),children:"Figma"})]}),v.jsxs("div",{className:"left-content",children:[v.jsx("div",{className:`left-canvas-wrap ${d!=="design"?"left-canvas-wrap--hidden":""}`,children:v.jsx(Av,{code:o,prd:l,onInitDesign:u})}),d==="prd"&&l&&v.jsx("div",{className:"prd-view",dangerouslySetInnerHTML:{__html:Ae.parse(l.content)}}),d==="prd"&&!l&&v.jsx("div",{className:"prd-empty",children:"No PRD loaded"}),d==="storybook"&&v.jsx(Mv,{entries:i,onClear:s}),d==="figma"&&v.jsx(_v,{entries:i})]})]})}const Cg="ennabl_builder_api_key",Ng=()=>localStorage.getItem(Cg)||"",Lv=o=>localStorage.setItem(Cg,o.trim()),Tg="ennabl_builder_model",Bv=[{id:"claude-haiku-4-5-20251001",label:"Haiku",note:"dev / fast"},{id:"claude-sonnet-4-6",label:"Sonnet",note:"balanced"},{id:"claude-opus-4-7",label:"Opus",note:"prod / best"}],qv="claude-haiku-4-5-20251001",Eg=()=>localStorage.getItem(Tg)||qv,Hv=o=>localStorage.setItem(Tg,o),Yv=`# ennabl Design Tokens

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
`,Gv=`# ennabl Component Patterns

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
`,Zv=`# ennabl Shared Components

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
- \`variant\` \`'primary' | 'secondary' | 'text' | 'danger' | 'icon'\` (default \`'primary'\`)
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

## Usage notes

- All shared components use global React (\`const { useState } = React\` — no imports)
- All shared components use the ennabl CSS classes and \`--en-*\` variables
- Wrap dialogs/modals in a fragment after the main content — they render to fixed position overlays
- The \`Scrim\` component is the modal backdrop — used internally by dialogs, rarely needed directly
`,Xv=`You are an expert UI engineer for ennabl, an insurance analytics platform for insurance agencies and brokers.

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
\`IconInfo\` \`IconUpload\`
Props: \`size\` (number, default 16), \`style\`, \`className\`. \`IconStar\` also accepts \`filled\` (boolean).
Charts: \`Recharts\` global — destructure \`BarChart\`, \`LineChart\`, \`PieChart\`, \`ResponsiveContainer\`, etc.
Design system CSS (\`--en-*\` vars + \`.en-*\` classes): loaded globally, use freely

## Design tokens

${Yv}

## Component patterns

${Gv}

## Shared components (available as globals in the preview)

${Zv}

## Context

The generated code runs inside a Vite + React app. The ennabl design system CSS (colors_and_type.css + styles.css) is already loaded globally — you can use all \`--en-*\` variables and \`.en-*\` classes directly without importing them.`,Vv="https://api.anthropic.com/v1/messages";function Qv(o){return o==="claude-opus-4-7"?{max_tokens:8192,thinking:{type:"enabled",budget_tokens:5e3}}:{max_tokens:8192}}async function Kv({messages:o,onText:l,onDone:i}){var y,x,E,A,M,z,X;const s=Eg(),u=await fetch(Vv,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":Ng(),"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:s,...Qv(s),system:[{type:"text",text:Xv,cache_control:{type:"ephemeral"}}],messages:o,stream:!0})});if(!u.ok){const Y=await u.json().catch(()=>({}));throw new Error(((y=Y.error)==null?void 0:y.message)||`API error ${u.status}`)}const d=u.body.getReader(),f=new TextDecoder;let h=0,g=0,b=0;for(;;){const{done:Y,value:G}=await d.read();if(Y)break;const K=f.decode(G).split(`
`);for(const I of K){if(!I.startsWith("data: "))continue;const Z=I.slice(6).trim();if(!(!Z||Z==="[DONE]"))try{const Q=JSON.parse(Z);Q.type==="message_start"&&(h=((E=(x=Q.message)==null?void 0:x.usage)==null?void 0:E.input_tokens)??0,b=((M=(A=Q.message)==null?void 0:A.usage)==null?void 0:M.cache_read_input_tokens)??0),Q.type==="content_block_delta"&&((z=Q.delta)==null?void 0:z.type)==="text_delta"&&l(Q.delta.text),Q.type==="message_delta"&&(g=((X=Q.usage)==null?void 0:X.output_tokens)??0)}catch{}}}i({inputTokens:h,outputTokens:g,cacheReadTokens:b})}const Ag="ennabl_builder_reports",Kc={input:15/1e6,output:75/1e6,cacheRead:1.5/1e6};function Iv({inputTokens:o=0,outputTokens:l=0,cacheReadTokens:i=0}){return Math.max(0,o-i)*Kc.input+i*Kc.cacheRead+l*Kc.output}function Jv(o){return{id:`s_${Date.now()}`,prdName:o,startedAt:new Date().toISOString(),iterations:0,inputTokens:0,outputTokens:0,cacheReadTokens:0,cost:0,componentsUsed:[],rating:null,accepted:!1}}function Dg(){try{return JSON.parse(localStorage.getItem(Ag)||"{}")}catch{return{}}}function $v(o){localStorage.setItem(Ag,JSON.stringify(o))}function nu(o){const l=Dg(),i=o.prdName;l[i]||(l[i]=[]);const s=l[i].findIndex(u=>u.id===o.id);s>=0?l[i][s]=o:l[i].unshift(o),$v(l)}function Ic(o){return Dg()[o]||[]}function Fv(o){return o?["CollapsibleSection","EditableField","TemplatePicker","SaveTemplateDialog","UpdateTemplateDialog","ManageModal","DeleteConfirm","Step3Body","ProducerTable"].filter(i=>o.includes(i)):[]}function Wv(o){if(!o.length)return null;const l=o.filter(i=>i.accepted&&i.iterations<=2).length;return Math.round(l/o.length*100)}const Pv=new Set(["--en-primary","--en-primary-light","--en-primary-dark","--en-action-hover","--en-outlined-hover","--en-fg","--en-fg-secondary","--en-fg-disabled","--en-bg","--en-bg-grey","--en-bg-dark-grey","--en-bg-hover","--en-bg-active","--en-secondary","--en-secondary-dark","--en-border","--en-divider","--en-error","--en-error-dark","--en-success","--en-warning","--en-warning-dark","--en-icon","--en-icon-secondary","--en-sidebar","--en-logo-primary","--en-logo-accent","--en-radius-sm","--en-radius","--en-radius-regular","--en-radius-medium","--en-radius-large","--en-radius-xl","--en-shadow-menu","--en-shadow-tooltip","--en-shadow-card-hover","--en-duration-short","--en-easing","--en-font-sans"]),e1=new Set(["en-h3","en-h4","en-h5","en-body1","en-body1-bold","en-body2","en-body2-bold","en-body3","en-body3-bold","en-subtitle1","en-subtitle2","en-subtitle3","en-overline","en-caption","en-table-header","en-table-text"]),t1=new Set(["IconCheck","IconChevronDown","IconChevronUp","IconClose","IconCopy","IconEdit","IconEditFill","IconExternal","IconGear","IconInfo","IconMore","IconPlus","IconRevert","IconSearch","IconShare","IconStar","IconTrash","IconTrashFill","IconUpload","IconUsers"]);function n1(o){const l=[],i=[...o.matchAll(/var\((--en-[a-z0-9-]+)/g)].map(h=>h[1]);[...new Set(i)].filter(h=>!Pv.has(h)).forEach(h=>l.push({type:"token",msg:`unknown token ${h}`}));const s=[...o.matchAll(/className="([^"]+)"/g)].flatMap(h=>h[1].split(/\s+/)).filter(h=>h.startsWith("en-"));[...new Set(s)].filter(h=>!e1.has(h)).forEach(h=>l.push({type:"class",msg:`unknown class .${h}`}));const u=[...o.matchAll(/<(Icon[A-Z][A-Za-z]*)/g)].map(h=>h[1]);[...new Set(u)].filter(h=>!t1.has(h)).forEach(h=>l.push({type:"icon",msg:`unknown icon <${h} />`}));const d=o.replace(/\/\/.*$/gm,"").replace(/\/\*[\s\S]*?\*\//g,"");return[...new Set([...d.matchAll(/#[0-9A-Fa-f]{6}\b/g)].map(h=>h[0]))].forEach(h=>l.push({type:"color",msg:`raw color ${h} — use --en-* var`})),{ok:l.length===0,issues:l}}function a1(o){const l=o.match(/```(?:jsx?|tsx?|javascript|typescript)?\n([\s\S]*?)```/);return l?l[1].trim():null}function l1({prd:o,messages:l,setMessages:i,onCodeGenerated:s,onSwitchToPrd:u,onIterationComplete:d,initTrigger:f}){const[h,g]=N.useState(""),[b,y]=N.useState(!1),[x,E]=N.useState(Eg),A=N.useRef(null),M=N.useRef(null);N.useEffect(()=>{var Y;(Y=A.current)==null||Y.scrollIntoView({behavior:"smooth"})},[l]),N.useEffect(()=>{f>0&&o&&!b&&l.length===0&&z("Build a complete UI from this PRD.")},[f]);async function z(Y){const G=(Y??h).trim();if(!G||b)return;const K={role:"user",content:G},I=o?`

---
PRD: ${o.name}

${o.content}
---
`:"",Z=l.map(({role:H,content:F})=>({role:H,content:F})),Q=[...o&&l.length===0?[{role:"user",content:`${I}
${G}`}]:[...Z,K]];i(H=>[...H,K]),Y||g(""),y(!0),i(H=>[...H,{role:"assistant",content:""}]);try{let H="",F=null;await Kv({messages:Q,onText:re=>{H+=re,i(ce=>{const me=[...ce];return me[me.length-1]={role:"assistant",content:H},me})},onDone:re=>{F=re}});const te=a1(H);if(te){const re=H.replace(/```[\s\S]*?```/g,"").trim();s(te,re);const ce=n1(te);i(me=>{const ze=[...me];return ze[ze.length-1]={...ze[ze.length-1],validation:ce},ze})}if(d){const re=F||{};d({inputTokens:re.inputTokens||0,outputTokens:re.outputTokens||0,cacheReadTokens:re.cacheReadTokens||0,componentsUsed:Fv(te)})}}catch(H){i(F=>{const te=[...F];return te[te.length-1]={role:"assistant",content:`Error: ${H.message}`},te})}finally{y(!1)}}function X(Y){Y.key==="Enter"&&!Y.shiftKey&&(Y.preventDefault(),z())}return v.jsxs("div",{className:"chat-panel",children:[v.jsxs("div",{className:"chat-messages",children:[l.length===0&&v.jsx("div",{className:"chat-empty",children:o?v.jsx(v.Fragment,{children:"PRD loaded. Describe the UI you want to build."}):v.jsx(v.Fragment,{children:"Load a PRD first, then describe what to build."})}),l.map((Y,G)=>{const K=b&&Y.role==="assistant"&&G===l.length-1;return v.jsx("div",{className:`chat-msg chat-msg--${Y.role}`,children:Y.role==="assistant"?K?v.jsx(i1,{}):v.jsx(s1,{content:Y.content,validation:Y.validation}):v.jsx("span",{children:Y.content})},G)}),v.jsx("div",{ref:A})]}),v.jsxs("div",{className:"chat-input-area",children:[v.jsx("div",{className:"chat-model-row",children:Bv.map(Y=>v.jsx("button",{className:`chat-model-btn ${x===Y.id?"chat-model-btn--active":""}`,onClick:()=>{E(Y.id),Hv(Y.id)},title:Y.note,children:Y.label},Y.id))}),v.jsxs("div",{className:"chat-input-row",children:[v.jsx("textarea",{ref:M,className:"chat-input",placeholder:o?`Build from ${o.name}…`:"Load a PRD first…",value:h,onChange:Y=>g(Y.target.value),onKeyDown:X,disabled:!o||b,rows:3}),v.jsx("button",{className:"chat-send-btn",onClick:z,disabled:!o||!h.trim()||b,children:b?v.jsx("span",{className:"chat-spinner"}):"↑"})]})]})]})}const Bh=[{icon:"✦",verb:"Reading PRD"},{icon:"◎",verb:"Mapping structure"},{icon:"⚡",verb:"Designing layout"},{icon:"⬡",verb:"Building components"},{icon:"↑",verb:"Writing code"},{icon:"✦",verb:"Polishing output"}];function i1(){const[o,l]=N.useState(0);N.useEffect(()=>{const u=setInterval(()=>l(d=>(d+1)%Bh.length),2e3);return()=>clearInterval(u)},[]);const{icon:i,verb:s}=Bh[o];return v.jsxs("div",{className:"thinking-bubble",children:[v.jsx("span",{className:"thinking-icon",children:i},o),v.jsx("span",{className:"thinking-verb",children:s},s),v.jsxs("span",{className:"thinking-dots",children:[v.jsx("span",{}),v.jsx("span",{}),v.jsx("span",{})]})]})}function s1({content:o,validation:l}){if(/```/.test(o)){const s=o.replace(/```[\s\S]*?```/g,"").trim();return v.jsxs("div",{className:"chat-done-card",children:[v.jsx("span",{className:"chat-done-icon",children:"✓"}),v.jsxs("div",{children:[v.jsx("div",{className:"chat-done-title",children:"Design ready"}),s&&v.jsx("div",{className:"chat-done-sub",children:s}),l&&v.jsxs("div",{className:`chat-done-validation ${l.ok?"chat-done-validation--ok":"chat-done-validation--warn"}`,children:[l.ok?"✓ tokens clean":l.issues.slice(0,4).map((u,d)=>v.jsxs("div",{children:["⚠ ",u.msg]},d)),l&&!l.ok&&l.issues.length>4&&v.jsxs("div",{children:["+",l.issues.length-4," more"]})]})]})]})}return v.jsx("div",{className:"chat-msg-content",children:o})}function r1({value:o,onChange:l}){const[i,s]=N.useState(null);return v.jsx("div",{className:"stars",children:[1,2,3,4,5].map(u=>v.jsx("button",{className:`star-btn ${u<=(i??o??0)?"star-btn--on":""}`,onMouseEnter:()=>s(u),onMouseLeave:()=>s(null),onClick:()=>l(u),"aria-label":`Rate ${u} star${u>1?"s":""}`,children:"★"},u))})}function qh(o){return o>=1e3?`${(o/1e3).toFixed(1)}k`:String(o)}function Hh(o){return o<.01?"<$0.01":`$${o.toFixed(2)}`}function o1(o){const l=new Date(o),i=new Date;if(l.toDateString()===i.toDateString())return"today";const s=Math.floor((i-l)/864e5);return s===1?"yesterday":s<7?`${s}d ago`:l.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function c1({session:o,prd:l,onSessionUpdate:i}){const[s,u]=N.useState([]);if(N.useEffect(()=>{l&&u(Ic(l.name))},[l,o]),!l)return v.jsx("div",{className:"report-empty",children:"Load a PRD to see reports."});const d=Wv(s),f=s.length;s.some(y=>y.id===(o==null?void 0:o.id));function h(y){const x={...o,rating:y};i(x),nu(x),u(Ic(l.name))}function g(){const y={...o,accepted:!0};i(y),nu(y),u(Ic(l.name))}const b=s.filter(y=>y.id!==(o==null?void 0:o.id));return v.jsxs("div",{className:"report-tab",children:[o&&v.jsxs("section",{className:"report-section",children:[v.jsxs("div",{className:"report-section-label",children:["Current session",o.accepted&&v.jsx("span",{className:"report-badge report-badge--green",children:"Accepted"})]}),v.jsxs("div",{className:"report-metrics",children:[v.jsxs("div",{className:"report-metric",children:[v.jsx("span",{className:"report-metric-value",children:o.iterations}),v.jsx("span",{className:"report-metric-label",children:"iterations"}),o.iterations<=2&&o.iterations>0&&v.jsx("span",{className:"report-badge report-badge--green",children:"≤2 ✓"})]}),v.jsxs("div",{className:"report-metric",children:[v.jsx("span",{className:"report-metric-value",children:qh(o.inputTokens+o.outputTokens)}),v.jsx("span",{className:"report-metric-label",children:"tokens"})]}),v.jsxs("div",{className:"report-metric",children:[v.jsx("span",{className:"report-metric-value",children:Hh(o.cost)}),v.jsx("span",{className:"report-metric-label",children:"cost"})]})]}),o.cacheReadTokens>0&&v.jsxs("div",{className:"report-cache-note",children:[qh(o.cacheReadTokens)," tokens from cache"]}),o.componentsUsed.length>0&&v.jsxs("div",{className:"report-components",children:[v.jsx("span",{className:"report-components-label",children:"Components used"}),v.jsx("div",{className:"report-chips",children:o.componentsUsed.map(y=>v.jsx("span",{className:"report-chip",children:y},y))})]}),v.jsxs("div",{className:"report-rating-row",children:[v.jsx("span",{className:"report-rating-label",children:"Rate this design"}),v.jsx(r1,{value:o.rating,onChange:h})]}),!o.accepted&&v.jsx("button",{className:"report-accept-btn",onClick:g,disabled:o.iterations===0,children:"✓ Accept design"})]}),f>0&&v.jsxs("section",{className:"report-section",children:[v.jsxs("div",{className:"report-section-label",children:["This PRD · ",f," session",f>1?"s":""]}),v.jsx("div",{className:"report-summary",children:d!==null&&v.jsxs("div",{className:"report-metric",children:[v.jsxs("span",{className:"report-metric-value report-metric-value--lg",children:[d,"%"]}),v.jsx("span",{className:"report-metric-label",children:"accepted in ≤2 iterations"})]})})]}),b.length>0&&v.jsxs("section",{className:"report-section",children:[v.jsx("div",{className:"report-section-label",children:"History"}),v.jsx("div",{className:"report-history",children:b.map(y=>v.jsxs("div",{className:"report-history-row",children:[v.jsxs("div",{className:"report-history-left",children:[v.jsx("span",{className:"report-history-date",children:o1(y.startedAt)}),v.jsxs("span",{className:"report-history-iter",children:[y.iterations," iter",y.iterations!==1?"s":""]}),y.accepted&&v.jsx("span",{className:"report-badge report-badge--green",children:"✓"}),y.iterations<=2&&y.accepted&&v.jsx("span",{className:"report-badge report-badge--blue",children:"≤2"})]}),v.jsxs("div",{className:"report-history-right",children:[y.rating&&v.jsxs("span",{className:"report-history-stars",children:["★".repeat(y.rating),"☆".repeat(5-y.rating)]}),v.jsx("span",{className:"report-history-cost",children:Hh(y.cost)})]})]},y.id))})]}),!o&&f===0&&v.jsx("div",{className:"report-empty",children:"Start a chat to begin tracking."})]})}function u1({prd:o,messages:l,setMessages:i,onCodeGenerated:s,onIterationComplete:u,session:d,onSessionUpdate:f,initTrigger:h}){const[g,b]=N.useState("chat");return v.jsxs("div",{className:"right-panel",children:[v.jsxs("div",{className:"right-tabs",children:[v.jsx("button",{className:`right-tab ${g==="chat"?"right-tab--active":""}`,onClick:()=>b("chat"),children:"Chat"}),v.jsxs("button",{className:`right-tab ${g==="report"?"right-tab--active":""}`,onClick:()=>b("report"),children:["Report",(d==null?void 0:d.accepted)&&v.jsx("span",{className:"right-tab-dot right-tab-dot--green"}),d&&!d.accepted&&d.iterations>0&&v.jsx("span",{className:"right-tab-dot"})]})]}),v.jsxs("div",{className:"right-content",children:[v.jsx("div",{className:g!=="chat"?"right-panel-hidden":"",children:v.jsx(l1,{prd:o,messages:l,setMessages:i,onCodeGenerated:s,onIterationComplete:u,onSwitchToPrd:()=>b("prd"),initTrigger:h})}),g==="report"&&v.jsx(c1,{session:d,prd:o,onSessionUpdate:f})]})]})}function d1({onDone:o}){const[l,i]=N.useState(""),[s,u]=N.useState(null);function d(){const f=l.trim();if(!f.startsWith("sk-ant-")&&!f.startsWith("sk-")){u("Paste your Anthropic API key — it starts with sk-ant-");return}Lv(f),o()}return v.jsx("div",{className:"setup-overlay",children:v.jsxs("div",{className:"setup-card",children:[v.jsxs("div",{className:"setup-logo",children:[v.jsx("span",{className:"setup-logo-name",children:"ennabl"}),v.jsx("span",{className:"setup-logo-suffix",children:"builder"})]}),v.jsxs("p",{className:"setup-desc",children:["Paste your Anthropic API key to get started.",v.jsx("br",{}),"It's stored only in your browser's local storage."]}),v.jsx("label",{className:"setup-label",children:"Anthropic API Key"}),v.jsx("input",{className:"setup-input",type:"password",value:l,onChange:f=>{i(f.target.value),u(null)},onKeyDown:f=>f.key==="Enter"&&d(),placeholder:"sk-ant-...",spellCheck:!1,autoFocus:!0}),s&&v.jsx("p",{className:"setup-error",children:s}),v.jsx("button",{className:"setup-btn",onClick:d,disabled:!l.trim(),children:"Save & continue"})]})})}class bt extends Error{constructor(l){var i,s,u,d;super("ClientResponseError"),this.url="",this.status=0,this.response={},this.isAbort=!1,this.originalError=null,Object.setPrototypeOf(this,bt.prototype),l!==null&&typeof l=="object"&&(this.originalError=l.originalError,this.url=typeof l.url=="string"?l.url:"",this.status=typeof l.status=="number"?l.status:0,this.isAbort=!!l.isAbort||l.name==="AbortError"||l.message==="Aborted",l.response!==null&&typeof l.response=="object"?this.response=l.response:l.data!==null&&typeof l.data=="object"?this.response=l.data:this.response={}),this.originalError||l instanceof bt||(this.originalError=l),this.name="ClientResponseError "+this.status,this.message=(i=this.response)==null?void 0:i.message,this.message||(this.isAbort?this.message="The request was aborted (most likely autocancelled; you can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation).":(d=(u=(s=this.originalError)==null?void 0:s.cause)==null?void 0:u.message)!=null&&d.includes("ECONNREFUSED ::1")?this.message="Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).":this.message="Something went wrong."),this.cause=this.originalError}get data(){return this.response}toJSON(){return{...this}}}const rr=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function f1(o,l){const i={};if(typeof o!="string")return i;const s=Object.assign({},{}).decode||p1;let u=0;for(;u<o.length;){const d=o.indexOf("=",u);if(d===-1)break;let f=o.indexOf(";",u);if(f===-1)f=o.length;else if(f<d){u=o.lastIndexOf(";",d-1)+1;continue}const h=o.slice(u,d).trim();if(i[h]===void 0){let g=o.slice(d+1,f).trim();g.charCodeAt(0)===34&&(g=g.slice(1,-1));try{i[h]=s(g)}catch{i[h]=g}}u=f+1}return i}function Yh(o,l,i){const s=Object.assign({},i||{}),u=s.encode||h1;if(!rr.test(o))throw new TypeError("argument name is invalid");const d=u(l);if(d&&!rr.test(d))throw new TypeError("argument val is invalid");let f=o+"="+d;if(s.maxAge!=null){const h=s.maxAge-0;if(isNaN(h)||!isFinite(h))throw new TypeError("option maxAge is invalid");f+="; Max-Age="+Math.floor(h)}if(s.domain){if(!rr.test(s.domain))throw new TypeError("option domain is invalid");f+="; Domain="+s.domain}if(s.path){if(!rr.test(s.path))throw new TypeError("option path is invalid");f+="; Path="+s.path}if(s.expires){if(!(function(g){return Object.prototype.toString.call(g)==="[object Date]"||g instanceof Date})(s.expires)||isNaN(s.expires.valueOf()))throw new TypeError("option expires is invalid");f+="; Expires="+s.expires.toUTCString()}if(s.httpOnly&&(f+="; HttpOnly"),s.secure&&(f+="; Secure"),s.priority)switch(typeof s.priority=="string"?s.priority.toLowerCase():s.priority){case"low":f+="; Priority=Low";break;case"medium":f+="; Priority=Medium";break;case"high":f+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(s.sameSite)switch(typeof s.sameSite=="string"?s.sameSite.toLowerCase():s.sameSite){case!0:f+="; SameSite=Strict";break;case"lax":f+="; SameSite=Lax";break;case"strict":f+="; SameSite=Strict";break;case"none":f+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return f}function p1(o){return o.indexOf("%")!==-1?decodeURIComponent(o):o}function h1(o){return encodeURIComponent(o)}const g1=typeof navigator<"u"&&navigator.product==="ReactNative"||typeof global<"u"&&global.HermesInternal;let kg;function Dl(o){if(o)try{const l=decodeURIComponent(kg(o.split(".")[1]).split("").map((function(i){return"%"+("00"+i.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(l)||{}}catch{}return{}}function Rg(o,l=0){let i=Dl(o);return!(Object.keys(i).length>0&&(!i.exp||i.exp-l>Date.now()/1e3))}kg=typeof atob!="function"||g1?o=>{let l=String(o).replace(/=+$/,"");if(l.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var i,s,u=0,d=0,f="";s=l.charAt(d++);~s&&(i=u%4?64*i+s:s,u++%4)?f+=String.fromCharCode(255&i>>(-2*u&6)):0)s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(s);return f}:atob;const Gh="pb_auth";class bu{constructor(){this.baseToken="",this.baseModel=null,this._onChangeCallbacks=[]}get token(){return this.baseToken}get record(){return this.baseModel}get model(){return this.baseModel}get isValid(){return!Rg(this.token)}get isSuperuser(){var i,s;let l=Dl(this.token);return l.type=="auth"&&(((i=this.record)==null?void 0:i.collectionName)=="_superusers"||!((s=this.record)!=null&&s.collectionName)&&l.collectionId=="pbc_3142635823")}get isAdmin(){return console.warn("Please replace pb.authStore.isAdmin with pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"),this.isSuperuser}get isAuthRecord(){return console.warn("Please replace pb.authStore.isAuthRecord with !pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"),Dl(this.token).type=="auth"&&!this.isSuperuser}save(l,i){this.baseToken=l||"",this.baseModel=i||null,this.triggerChange()}clear(){this.baseToken="",this.baseModel=null,this.triggerChange()}loadFromCookie(l,i=Gh){const s=f1(l||"")[i]||"";let u={};try{u=JSON.parse(s),(typeof u===null||typeof u!="object"||Array.isArray(u))&&(u={})}catch{}this.save(u.token||"",u.record||u.model||null)}exportToCookie(l,i=Gh){var g,b;const s={secure:!0,sameSite:!0,httpOnly:!0,path:"/"},u=Dl(this.token);s.expires=u!=null&&u.exp?new Date(1e3*u.exp):new Date("1970-01-01"),l=Object.assign({},s,l);const d={token:this.token,record:this.record?JSON.parse(JSON.stringify(this.record)):null};let f=Yh(i,JSON.stringify(d),l);const h=typeof Blob<"u"?new Blob([f]).size:f.length;if(d.record&&h>4096){d.record={id:(g=d.record)==null?void 0:g.id,email:(b=d.record)==null?void 0:b.email};const y=["collectionId","collectionName","verified"];for(const x in this.record)y.includes(x)&&(d.record[x]=this.record[x]);f=Yh(i,JSON.stringify(d),l)}return f}onChange(l,i=!1){return this._onChangeCallbacks.push(l),i&&l(this.token,this.record),()=>{for(let s=this._onChangeCallbacks.length-1;s>=0;s--)if(this._onChangeCallbacks[s]==l)return delete this._onChangeCallbacks[s],void this._onChangeCallbacks.splice(s,1)}}triggerChange(){for(const l of this._onChangeCallbacks)l&&l(this.token,this.record)}}class m1 extends bu{constructor(l="pocketbase_auth"){super(),this.storageFallback={},this.storageKey=l,this._bindStorageEvent()}get token(){return(this._storageGet(this.storageKey)||{}).token||""}get record(){const l=this._storageGet(this.storageKey)||{};return l.record||l.model||null}get model(){return this.record}save(l,i){this._storageSet(this.storageKey,{token:l,record:i}),super.save(l,i)}clear(){this._storageRemove(this.storageKey),super.clear()}_storageGet(l){if(typeof window<"u"&&(window!=null&&window.localStorage)){const i=window.localStorage.getItem(l)||"";try{return JSON.parse(i)}catch{return i}}return this.storageFallback[l]}_storageSet(l,i){if(typeof window<"u"&&(window!=null&&window.localStorage)){let s=i;typeof i!="string"&&(s=JSON.stringify(i)),window.localStorage.setItem(l,s)}else this.storageFallback[l]=i}_storageRemove(l){var i;typeof window<"u"&&(window!=null&&window.localStorage)&&((i=window.localStorage)==null||i.removeItem(l)),delete this.storageFallback[l]}_bindStorageEvent(){typeof window<"u"&&(window!=null&&window.localStorage)&&window.addEventListener&&window.addEventListener("storage",(l=>{if(l.key!=this.storageKey)return;const i=this._storageGet(this.storageKey)||{};super.save(i.token||"",i.record||i.model||null)}))}}class Zn{constructor(l){this.client=l}}class b1 extends Zn{async getAll(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/settings",l)}async update(l,i){return i=Object.assign({method:"PATCH",body:l},i),this.client.send("/api/settings",i)}async testS3(l="storage",i){return i=Object.assign({method:"POST",body:{filesystem:l}},i),this.client.send("/api/settings/test/s3",i).then((()=>!0))}async testEmail(l,i,s,u){return u=Object.assign({method:"POST",body:{email:i,template:s,collection:l}},u),this.client.send("/api/settings/test/email",u).then((()=>!0))}async generateAppleClientSecret(l,i,s,u,d,f){return f=Object.assign({method:"POST",body:{clientId:l,teamId:i,keyId:s,privateKey:u,duration:d}},f),this.client.send("/api/settings/apple/generate-client-secret",f)}}const v1=["requestKey","$cancelKey","$autoCancel","fetch","headers","body","query","params","cache","credentials","headers","integrity","keepalive","method","mode","redirect","referrer","referrerPolicy","signal","window"];function vu(o){if(o){o.query=o.query||{};for(let l in o)v1.includes(l)||(o.query[l]=o[l],delete o[l])}}function yu(o){const l=[];for(const i in o){const s=encodeURIComponent(i),u=Array.isArray(o[i])?o[i]:[o[i]];for(let d of u)d=y1(d),d!==null&&l.push(s+"="+d)}return l.join("&")}function y1(o){return o==null?null:o instanceof Date?encodeURIComponent(o.toISOString().replace("T"," ")):encodeURIComponent(typeof o=="object"?JSON.stringify(o):o)}class Og extends Zn{constructor(){super(...arguments),this.clientId="",this.eventSource=null,this.subscriptions={},this.lastSentSubscriptions=[],this.maxConnectTimeout=15e3,this.reconnectAttempts=0,this.maxReconnectAttempts=1/0,this.predefinedReconnectIntervals=[200,300,500,1e3,1200,1500,2e3],this.pendingConnects=[],this.pendingSubmits=[],this.isProcessingPendingSubmits=!1}get isConnected(){return!!this.eventSource&&!!this.clientId&&!this.pendingConnects.length}async subscribe(l,i,s){var f;if(!l)throw new Error("topic must be set.");let u=l;if(s){vu(s=Object.assign({},s));const h="options="+encodeURIComponent(JSON.stringify({query:s.query,headers:s.headers}));u+=(u.includes("?")?"&":"?")+h}const d=function(h){const g=h;let b;try{b=JSON.parse(g==null?void 0:g.data)}catch{}i(b||{})};return this.subscriptions[u]||(this.subscriptions[u]=[]),this.subscriptions[u].push(d),this.isConnected?this.subscriptions[u].length===1?await this.submitSubscriptions():(f=this.eventSource)==null||f.addEventListener(u,d):await this.connect(),async()=>this.unsubscribeByTopicAndListener(l,d)}async unsubscribe(l){var i;if(l){const s=this.getSubscriptionsByTopic(l);for(let u in s)if(this.hasSubscriptionListeners(u)){for(let d of this.subscriptions[u])(i=this.eventSource)==null||i.removeEventListener(u,d);delete this.subscriptions[u]}}else this.subscriptions={};await this.submitSubscriptions()}async unsubscribeByPrefix(l){var s;let i=!1;for(let u in this.subscriptions)if((u+"?").startsWith(l)){i=!0;for(let d of this.subscriptions[u])(s=this.eventSource)==null||s.removeEventListener(u,d);delete this.subscriptions[u]}i&&await this.submitSubscriptions()}async unsubscribeByTopicAndListener(l,i){var u;const s=this.getSubscriptionsByTopic(l);for(let d in s){if(!Array.isArray(this.subscriptions[d])||!this.subscriptions[d].length)continue;let f=!1;for(let h=this.subscriptions[d].length-1;h>=0;h--)this.subscriptions[d][h]===i&&(f=!0,delete this.subscriptions[d][h],this.subscriptions[d].splice(h,1),(u=this.eventSource)==null||u.removeEventListener(d,i));f&&(this.subscriptions[d].length||delete this.subscriptions[d])}await this.submitSubscriptions()}hasSubscriptionListeners(l){var i,s;if(this.subscriptions=this.subscriptions||{},l)return!!((i=this.subscriptions[l])!=null&&i.length);for(let u in this.subscriptions)if((s=this.subscriptions[u])!=null&&s.length)return!0;return!1}async submitSubscriptions(){return new Promise(((l,i)=>{this.pendingSubmits.push({resolve:l,reject:i}),this.pendingSubmits.length==1&&queueMicrotask((()=>this.finalizePendingSubscriptions()))}))}async finalizePendingSubscriptions(){if(this.isProcessingPendingSubmits||!this.pendingSubmits.length)return;const l=this.pendingSubmits.slice();this.pendingSubmits=[],this.isProcessingPendingSubmits=!0;try{await this.sendSubscriptions();for(let i of l)i.resolve()}catch(i){for(let s of l)i?s.reject(i):s.resolve()}finally{this.isProcessingPendingSubmits=!1,this.pendingSubmits.length>0&&await this.finalizePendingSubscriptions()}}getSubscriptionsCancelKey(){return"realtime_"+this.clientId}getSubscriptionsByTopic(l){const i={};l=l.includes("?")?l:l+"?";for(let s in this.subscriptions)(s+"?").startsWith(l)&&(i[s]=this.subscriptions[s]);return i}getNonEmptySubscriptionKeys(){const l=[];for(let i in this.subscriptions)this.subscriptions[i].length&&l.push(i);return l}hasUnsentSubscriptions(){const l=this.getNonEmptySubscriptionKeys();if(l.length!=this.lastSentSubscriptions.length)return!0;for(const i of l)if(!this.lastSentSubscriptions.includes(i))return!0;return!1}async sendSubscriptions(){if(this.clientId){if(!this.hasSubscriptionListeners())return this.disconnect();if(this.hasUnsentSubscriptions())return this.addAllSubscriptionListeners(),this.lastSentSubscriptions=this.getNonEmptySubscriptionKeys(),this.client.send("/api/realtime",{method:"POST",body:{clientId:this.clientId,subscriptions:this.lastSentSubscriptions},requestKey:this.getSubscriptionsCancelKey()}).catch((l=>{if(!(l!=null&&l.isAbort))throw l}))}}addAllSubscriptionListeners(){if(this.eventSource){this.removeAllSubscriptionListeners();for(let l in this.subscriptions)for(let i of this.subscriptions[l])this.eventSource.addEventListener(l,i)}}removeAllSubscriptionListeners(){if(this.eventSource)for(let l in this.subscriptions)for(let i of this.subscriptions[l])this.eventSource.removeEventListener(l,i)}async connect(){if(!(this.reconnectAttempts>0))return new Promise(((l,i)=>{this.pendingConnects.push({resolve:l,reject:i}),this.pendingConnects.length==1&&queueMicrotask((()=>this.initConnect()))}))}initConnect(){this.disconnect(!0),clearTimeout(this.connectTimeoutId),this.connectTimeoutId=setTimeout((()=>{this.connectErrorHandler(new Error("EventSource connect took too long."))}),this.maxConnectTimeout),this.eventSource=new EventSource(this.client.buildURL("/api/realtime")),this.eventSource.onerror=l=>{this.connectErrorHandler(new Error("Failed to establish realtime connection."))},this.eventSource.addEventListener("PB_CONNECT",(l=>{const i=l;this.clientId=i==null?void 0:i.lastEventId,this.lastSentSubscriptions=[],this.submitSubscriptions().then((()=>{for(let u of this.pendingConnects)u.resolve();this.pendingConnects=[],this.reconnectAttempts=0,clearTimeout(this.reconnectTimeoutId),clearTimeout(this.connectTimeoutId);const s=this.getSubscriptionsByTopic("PB_CONNECT");for(let u in s)for(let d of s[u])d(l)})).catch((s=>{this.clientId="",this.lastSentSubscriptions=[],this.connectErrorHandler(s)}))}))}connectErrorHandler(l){if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),!this.clientId&&!this.reconnectAttempts||this.reconnectAttempts>this.maxReconnectAttempts){for(let s of this.pendingConnects)s.reject(new bt(l));return this.pendingConnects=[],void this.disconnect()}this.disconnect(!0);const i=this.predefinedReconnectIntervals[this.reconnectAttempts]||this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length-1];this.reconnectAttempts++,this.reconnectTimeoutId=setTimeout((()=>{this.initConnect()}),i)}disconnect(l=!1){var i;if(this.clientId&&this.onDisconnect&&this.onDisconnect(Object.keys(this.subscriptions)),clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),this.removeAllSubscriptionListeners(),this.client.cancelRequest(this.getSubscriptionsCancelKey()),(i=this.eventSource)==null||i.close(),this.eventSource=null,this.clientId="",this.lastSentSubscriptions=[],!l){this.reconnectAttempts=0;for(let s of this.pendingConnects)s.resolve();this.pendingConnects=[]}}}class zg extends Zn{decode(l){return l}async getFullList(l,i){if(typeof l=="number")return this._getFullList(l,i);let s=1e3;return(i=Object.assign({},l,i)).batch&&(s=i.batch,delete i.batch),this._getFullList(s,i)}async getList(l=1,i=30,s){return(s=Object.assign({method:"GET"},s)).query=Object.assign({page:l,perPage:i},s.query),this.client.send(this.baseCrudPath,s).then((u=>{var d;return u.items=((d=u.items)==null?void 0:d.map((f=>this.decode(f))))||[],u}))}async getFirstListItem(l,i){return(i=Object.assign({requestKey:"one_by_filter_"+this.baseCrudPath+"_"+l},i)).query=Object.assign({filter:l,skipTotal:1},i.query),this.getList(1,1,i).then((s=>{var u;if(!((u=s==null?void 0:s.items)!=null&&u.length))throw new bt({status:404,response:{code:404,message:"The requested resource wasn't found.",data:{}}});return s.items[0]}))}async getOne(l,i){if(!l)throw new bt({url:this.client.buildURL(this.baseCrudPath+"/"),status:404,response:{code:404,message:"Missing required record id.",data:{}}});return i=Object.assign({method:"GET"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l),i).then((s=>this.decode(s)))}async create(l,i){return i=Object.assign({method:"POST",body:l},i),this.client.send(this.baseCrudPath,i).then((s=>this.decode(s)))}async update(l,i,s){return s=Object.assign({method:"PATCH",body:i},s),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l),s).then((u=>this.decode(u)))}async delete(l,i){return i=Object.assign({method:"DELETE"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l),i).then((()=>!0))}_getFullList(l=1e3,i){(i=i||{}).query=Object.assign({skipTotal:1},i.query);let s=[],u=async d=>this.getList(d,l||1e3,i).then((f=>{const h=f.items;return s=s.concat(h),h.length==f.perPage?u(d+1):s}));return u(1)}}function ga(o,l,i,s){const u=s!==void 0;return u||i!==void 0?u?(console.warn(o),l.body=Object.assign({},l.body,i),l.query=Object.assign({},l.query,s),l):Object.assign(l,i):l}function Jc(o){var l;(l=o._resetAutoRefresh)==null||l.call(o)}class x1 extends zg{constructor(l,i){super(l),this.collectionIdOrName=i}get baseCrudPath(){return this.baseCollectionPath+"/records"}get baseCollectionPath(){return"/api/collections/"+encodeURIComponent(this.collectionIdOrName)}get isSuperusers(){return this.collectionIdOrName=="_superusers"||this.collectionIdOrName=="_pbc_2773867675"}async subscribe(l,i,s){if(!l)throw new Error("Missing topic.");if(!i)throw new Error("Missing subscription callback.");return this.client.realtime.subscribe(this.collectionIdOrName+"/"+l,i,s)}async unsubscribe(l){return l?this.client.realtime.unsubscribe(this.collectionIdOrName+"/"+l):this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)}async getFullList(l,i){if(typeof l=="number")return super.getFullList(l,i);const s=Object.assign({},l,i);return super.getFullList(s)}async getList(l=1,i=30,s){return super.getList(l,i,s)}async getFirstListItem(l,i){return super.getFirstListItem(l,i)}async getOne(l,i){return super.getOne(l,i)}async create(l,i){return super.create(l,i)}async update(l,i,s){return super.update(l,i,s).then((u=>{var d,f,h;if(((d=this.client.authStore.record)==null?void 0:d.id)===(u==null?void 0:u.id)&&(((f=this.client.authStore.record)==null?void 0:f.collectionId)===this.collectionIdOrName||((h=this.client.authStore.record)==null?void 0:h.collectionName)===this.collectionIdOrName)){let g=Object.assign({},this.client.authStore.record.expand),b=Object.assign({},this.client.authStore.record,u);g&&(b.expand=Object.assign(g,u.expand)),this.client.authStore.save(this.client.authStore.token,b)}return u}))}async delete(l,i){return super.delete(l,i).then((s=>{var u,d,f;return!s||((u=this.client.authStore.record)==null?void 0:u.id)!==l||((d=this.client.authStore.record)==null?void 0:d.collectionId)!==this.collectionIdOrName&&((f=this.client.authStore.record)==null?void 0:f.collectionName)!==this.collectionIdOrName||this.client.authStore.clear(),s}))}authResponse(l){const i=this.decode((l==null?void 0:l.record)||{});return this.client.authStore.save(l==null?void 0:l.token,i),Object.assign({},l,{token:(l==null?void 0:l.token)||"",record:i})}async listAuthMethods(l){return l=Object.assign({method:"GET",fields:"mfa,otp,password,oauth2"},l),this.client.send(this.baseCollectionPath+"/auth-methods",l)}async authWithPassword(l,i,s){let u;s=Object.assign({method:"POST",body:{identity:l,password:i}},s),this.isSuperusers&&(u=s.autoRefreshThreshold,delete s.autoRefreshThreshold,s.autoRefresh||Jc(this.client));let d=await this.client.send(this.baseCollectionPath+"/auth-with-password",s);return d=this.authResponse(d),u&&this.isSuperusers&&(function(h,g,b,y){Jc(h);const x=h.beforeSend,E=h.authStore.record,A=h.authStore.onChange(((M,z)=>{(!M||(z==null?void 0:z.id)!=(E==null?void 0:E.id)||(z!=null&&z.collectionId||E!=null&&E.collectionId)&&(z==null?void 0:z.collectionId)!=(E==null?void 0:E.collectionId))&&Jc(h)}));h._resetAutoRefresh=function(){A(),h.beforeSend=x,delete h._resetAutoRefresh},h.beforeSend=async(M,z)=>{var K;const X=h.authStore.token;if((K=z.query)!=null&&K.autoRefresh)return x?x(M,z):{url:M,sendOptions:z};let Y=h.authStore.isValid;if(Y&&Rg(h.authStore.token,g))try{await b()}catch{Y=!1}Y||await y();const G=z.headers||{};for(let I in G)if(I.toLowerCase()=="authorization"&&X==G[I]&&h.authStore.token){G[I]=h.authStore.token;break}return z.headers=G,x?x(M,z):{url:M,sendOptions:z}}})(this.client,u,(()=>this.authRefresh({autoRefresh:!0})),(()=>this.authWithPassword(l,i,Object.assign({autoRefresh:!0},s)))),d}async authWithOAuth2Code(l,i,s,u,d,f,h){let g={method:"POST",body:{provider:l,code:i,codeVerifier:s,redirectURL:u,createData:d}};return g=ga("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, options?).",g,f,h),this.client.send(this.baseCollectionPath+"/auth-with-oauth2",g).then((b=>this.authResponse(b)))}authWithOAuth2(...l){if(l.length>1||typeof(l==null?void 0:l[0])=="string")return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."),this.authWithOAuth2Code((l==null?void 0:l[0])||"",(l==null?void 0:l[1])||"",(l==null?void 0:l[2])||"",(l==null?void 0:l[3])||"",(l==null?void 0:l[4])||{},(l==null?void 0:l[5])||{},(l==null?void 0:l[6])||{});const i=(l==null?void 0:l[0])||{};let s=null;i.urlCallback||(s=Zh(void 0));const u=new Og(this.client);function d(){s==null||s.close(),u.unsubscribe()}const f={},h=i.requestKey;return h&&(f.requestKey=h),this.listAuthMethods(f).then((g=>{const b=g.oauth2.providers.find((x=>x.name===i.provider));if(!b)throw new bt(new Error(`Missing or invalid provider "${i.provider}".`));const y=this.client.buildURL("/api/oauth2-redirect");return new Promise((async(x,E)=>{var M,z,X;const A=h?(M=this.client.cancelControllers)==null?void 0:M[h]:void 0;A&&(A.signal.onabort=()=>{d(),E(new bt({isAbort:!0,message:"manually cancelled"}))}),u.onDisconnect=Y=>{Y.length&&E&&(d(),E(new bt(new Error("realtime connection interrupted"))))};try{await u.subscribe("@oauth2",(async I=>{var Q;const Z=u.clientId;try{if(!I.state||Z!==I.state)throw new Error("State parameters don't match.");if(I.error||!I.code)throw new Error("OAuth2 redirect error or missing code: "+I.error);const H=Object.assign({},i);delete H.provider,delete H.scopes,delete H.createData,delete H.urlCallback,(Q=A==null?void 0:A.signal)!=null&&Q.onabort&&(A.signal.onabort=null);const F=await this.authWithOAuth2Code(b.name,I.code,b.codeVerifier,y,i.createData,H);x(F)}catch(H){E(new bt(H))}d()}));const Y={state:u.clientId};(z=i.scopes)!=null&&z.length&&(Y.scope=i.scopes.join(" "));const G=this._replaceQueryParams(b.authURL+y,Y);await(i.urlCallback||function(I){s?s.location.href=I:s=Zh(I)})(G)}catch(Y){(X=A==null?void 0:A.signal)!=null&&X.onabort&&(A.signal.onabort=null),d(),E(new bt(Y))}}))})).catch((g=>{throw d(),g}))}async authRefresh(l,i){let s={method:"POST"};return s=ga("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).",s,l,i),this.client.send(this.baseCollectionPath+"/auth-refresh",s).then((u=>this.authResponse(u)))}async requestPasswordReset(l,i,s){let u={method:"POST",body:{email:l}};return u=ga("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).",u,i,s),this.client.send(this.baseCollectionPath+"/request-password-reset",u).then((()=>!0))}async confirmPasswordReset(l,i,s,u,d){let f={method:"POST",body:{token:l,password:i,passwordConfirm:s}};return f=ga("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).",f,u,d),this.client.send(this.baseCollectionPath+"/confirm-password-reset",f).then((()=>!0))}async requestVerification(l,i,s){let u={method:"POST",body:{email:l}};return u=ga("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).",u,i,s),this.client.send(this.baseCollectionPath+"/request-verification",u).then((()=>!0))}async confirmVerification(l,i,s){let u={method:"POST",body:{token:l}};return u=ga("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).",u,i,s),this.client.send(this.baseCollectionPath+"/confirm-verification",u).then((()=>{const d=Dl(l),f=this.client.authStore.record;return f&&!f.verified&&f.id===d.id&&f.collectionId===d.collectionId&&(f.verified=!0,this.client.authStore.save(this.client.authStore.token,f)),!0}))}async requestEmailChange(l,i,s){let u={method:"POST",body:{newEmail:l}};return u=ga("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).",u,i,s),this.client.send(this.baseCollectionPath+"/request-email-change",u).then((()=>!0))}async confirmEmailChange(l,i,s,u){let d={method:"POST",body:{token:l,password:i}};return d=ga("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).",d,s,u),this.client.send(this.baseCollectionPath+"/confirm-email-change",d).then((()=>{const f=Dl(l),h=this.client.authStore.record;return h&&h.id===f.id&&h.collectionId===f.collectionId&&this.client.authStore.clear(),!0}))}async listExternalAuths(l,i){return this.client.collection("_externalAuths").getFullList(Object.assign({},i,{filter:this.client.filter("recordRef = {:id}",{id:l})}))}async unlinkExternalAuth(l,i,s){const u=await this.client.collection("_externalAuths").getFirstListItem(this.client.filter("recordRef = {:recordId} && provider = {:provider}",{recordId:l,provider:i}));return this.client.collection("_externalAuths").delete(u.id,s).then((()=>!0))}async requestOTP(l,i){return i=Object.assign({method:"POST",body:{email:l}},i),this.client.send(this.baseCollectionPath+"/request-otp",i)}async authWithOTP(l,i,s){return s=Object.assign({method:"POST",body:{otpId:l,password:i}},s),this.client.send(this.baseCollectionPath+"/auth-with-otp",s).then((u=>this.authResponse(u)))}async impersonate(l,i,s){(s=Object.assign({method:"POST",body:{duration:i}},s)).headers=s.headers||{},s.headers.Authorization||(s.headers.Authorization=this.client.authStore.token);const u=new xu(this.client.baseURL,new bu,this.client.lang),d=await u.send(this.baseCollectionPath+"/impersonate/"+encodeURIComponent(l),s);return u.authStore.save(d==null?void 0:d.token,this.decode((d==null?void 0:d.record)||{})),u}_replaceQueryParams(l,i={}){let s=l,u="";l.indexOf("?")>=0&&(s=l.substring(0,l.indexOf("?")),u=l.substring(l.indexOf("?")+1));const d={},f=u.split("&");for(const h of f){if(h=="")continue;const g=h.split("=");d[decodeURIComponent(g[0].replace(/\+/g," "))]=decodeURIComponent((g[1]||"").replace(/\+/g," "))}for(let h in i)i.hasOwnProperty(h)&&(i[h]==null?delete d[h]:d[h]=i[h]);u="";for(let h in d)d.hasOwnProperty(h)&&(u!=""&&(u+="&"),u+=encodeURIComponent(h.replace(/%20/g,"+"))+"="+encodeURIComponent(d[h].replace(/%20/g,"+")));return u!=""?s+"?"+u:s}}function Zh(o){if(typeof window>"u"||!(window!=null&&window.open))throw new bt(new Error("Not in a browser context - please pass a custom urlCallback function."));let l=1024,i=768,s=window.innerWidth,u=window.innerHeight;l=l>s?s:l,i=i>u?u:i;let d=s/2-l/2,f=u/2-i/2;return window.open(o,"popup_window","width="+l+",height="+i+",top="+f+",left="+d+",resizable,menubar=no")}class S1 extends zg{get baseCrudPath(){return"/api/collections"}async import(l,i=!1,s){return s=Object.assign({method:"PUT",body:{collections:l,deleteMissing:i}},s),this.client.send(this.baseCrudPath+"/import",s).then((()=>!0))}async getScaffolds(l){return l=Object.assign({method:"GET"},l),this.client.send(this.baseCrudPath+"/meta/scaffolds",l)}async truncate(l,i){return i=Object.assign({method:"DELETE"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l)+"/truncate",i).then((()=>!0))}}class w1 extends Zn{async getList(l=1,i=30,s){return(s=Object.assign({method:"GET"},s)).query=Object.assign({page:l,perPage:i},s.query),this.client.send("/api/logs",s)}async getOne(l,i){if(!l)throw new bt({url:this.client.buildURL("/api/logs/"),status:404,response:{code:404,message:"Missing required log id.",data:{}}});return i=Object.assign({method:"GET"},i),this.client.send("/api/logs/"+encodeURIComponent(l),i)}async getStats(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/logs/stats",l)}}class C1 extends Zn{async check(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/health",l)}}class N1 extends Zn{getUrl(l,i,s={}){return console.warn("Please replace pb.files.getUrl() with pb.files.getURL()"),this.getURL(l,i,s)}getURL(l,i,s={}){if(!i||!(l!=null&&l.id)||!(l!=null&&l.collectionId)&&!(l!=null&&l.collectionName))return"";const u=[];u.push("api"),u.push("files"),u.push(encodeURIComponent(l.collectionId||l.collectionName)),u.push(encodeURIComponent(l.id)),u.push(encodeURIComponent(i));let d=this.client.buildURL(u.join("/"));s.download===!1&&delete s.download;const f=yu(s);return f&&(d+=(d.includes("?")?"&":"?")+f),d}async getToken(l){return l=Object.assign({method:"POST"},l),this.client.send("/api/files/token",l).then((i=>(i==null?void 0:i.token)||""))}}class T1 extends Zn{async getFullList(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/backups",l)}async create(l,i){return i=Object.assign({method:"POST",body:{name:l}},i),this.client.send("/api/backups",i).then((()=>!0))}async upload(l,i){return i=Object.assign({method:"POST",body:l},i),this.client.send("/api/backups/upload",i).then((()=>!0))}async delete(l,i){return i=Object.assign({method:"DELETE"},i),this.client.send(`/api/backups/${encodeURIComponent(l)}`,i).then((()=>!0))}async restore(l,i){return i=Object.assign({method:"POST"},i),this.client.send(`/api/backups/${encodeURIComponent(l)}/restore`,i).then((()=>!0))}getDownloadUrl(l,i){return console.warn("Please replace pb.backups.getDownloadUrl() with pb.backups.getDownloadURL()"),this.getDownloadURL(l,i)}getDownloadURL(l,i){return this.client.buildURL(`/api/backups/${encodeURIComponent(i)}?token=${encodeURIComponent(l)}`)}}class E1 extends Zn{async getFullList(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/crons",l)}async run(l,i){return i=Object.assign({method:"POST"},i),this.client.send(`/api/crons/${encodeURIComponent(l)}`,i).then((()=>!0))}}function au(o){return typeof Blob<"u"&&o instanceof Blob||typeof File<"u"&&o instanceof File||o!==null&&typeof o=="object"&&o.uri&&(typeof navigator<"u"&&navigator.product==="ReactNative"||typeof global<"u"&&global.HermesInternal)}function lu(o){var l;return o&&(((l=o.constructor)==null?void 0:l.name)==="FormData"||typeof FormData<"u"&&o instanceof FormData)}function Xh(o){for(const l in o){const i=Array.isArray(o[l])?o[l]:[o[l]];for(const s of i)if(au(s))return!0}return!1}const A1=/^[\-\.\d]+$/;function Vh(o){if(typeof o!="string")return o;if(o=="true")return!0;if(o=="false")return!1;if((o[0]==="-"||o[0]>="0"&&o[0]<="9")&&A1.test(o)){let l=+o;if(""+l===o)return l}return o}class D1 extends Zn{constructor(){super(...arguments),this.requests=[],this.subs={}}collection(l){return this.subs[l]||(this.subs[l]=new k1(this.requests,l)),this.subs[l]}async send(l){const i=new FormData,s=[];for(let u=0;u<this.requests.length;u++){const d=this.requests[u];if(s.push({method:d.method,url:d.url,headers:d.headers,body:d.json}),d.files)for(let f in d.files){const h=d.files[f]||[];for(let g of h)i.append("requests."+u+"."+f,g)}}return i.append("@jsonPayload",JSON.stringify({requests:s})),l=Object.assign({method:"POST",body:i},l),this.client.send("/api/batch",l)}}class k1{constructor(l,i){this.requests=[],this.requests=l,this.collectionIdOrName=i}upsert(l,i){i=Object.assign({body:l||{}},i);const s={method:"PUT",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records"};this.prepareRequest(s,i),this.requests.push(s)}create(l,i){i=Object.assign({body:l||{}},i);const s={method:"POST",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records"};this.prepareRequest(s,i),this.requests.push(s)}update(l,i,s){s=Object.assign({body:i||{}},s);const u={method:"PATCH",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records/"+encodeURIComponent(l)};this.prepareRequest(u,s),this.requests.push(u)}delete(l,i){i=Object.assign({},i);const s={method:"DELETE",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records/"+encodeURIComponent(l)};this.prepareRequest(s,i),this.requests.push(s)}prepareRequest(l,i){if(vu(i),l.headers=i.headers,l.json={},l.files={},i.query!==void 0){const u=yu(i.query);u&&(l.url+=(l.url.includes("?")?"&":"?")+u)}let s=i.body;lu(s)&&(s=(function(d){let f={};return d.forEach(((h,g)=>{if(g==="@jsonPayload"&&typeof h=="string")try{let b=JSON.parse(h);Object.assign(f,b)}catch(b){console.warn("@jsonPayload error:",b)}else f[g]!==void 0?(Array.isArray(f[g])||(f[g]=[f[g]]),f[g].push(Vh(h))):f[g]=Vh(h)})),f})(s));for(const u in s){const d=s[u];if(au(d))l.files[u]=l.files[u]||[],l.files[u].push(d);else if(Array.isArray(d)){const f=[],h=[];for(const g of d)au(g)?f.push(g):h.push(g);if(f.length>0&&f.length==d.length){l.files[u]=l.files[u]||[];for(let g of f)l.files[u].push(g)}else if(l.json[u]=h,f.length>0){let g=u;u.startsWith("+")||u.endsWith("+")||(g+="+"),l.files[g]=l.files[g]||[];for(let b of f)l.files[g].push(b)}}else l.json[u]=d}}}class xu{get baseUrl(){return this.baseURL}set baseUrl(l){this.baseURL=l}constructor(l="/",i,s="en-US"){this.cancelControllers={},this.recordServices={},this.enableAutoCancellation=!0,this.baseURL=l,this.lang=s,i?this.authStore=i:typeof window<"u"&&window.Deno?this.authStore=new bu:this.authStore=new m1,this.collections=new S1(this),this.files=new N1(this),this.logs=new w1(this),this.settings=new b1(this),this.realtime=new Og(this),this.health=new C1(this),this.backups=new T1(this),this.crons=new E1(this)}get admins(){return this.collection("_superusers")}createBatch(){return new D1(this)}collection(l){return this.recordServices[l]||(this.recordServices[l]=new x1(this,l)),this.recordServices[l]}autoCancellation(l){return this.enableAutoCancellation=!!l,this}cancelRequest(l){return this.cancelControllers[l]&&(this.cancelControllers[l].abort(),delete this.cancelControllers[l]),this}cancelAllRequests(){for(let l in this.cancelControllers)this.cancelControllers[l].abort();return this.cancelControllers={},this}filter(l,i){if(!i)return l;for(let s in i){let u=i[s];switch(typeof u){case"boolean":case"number":u=""+u;break;case"string":u="'"+u.replace(/'/g,"\\'")+"'";break;default:u=u===null?"null":u instanceof Date?"'"+u.toISOString().replace("T"," ")+"'":"'"+JSON.stringify(u).replace(/'/g,"\\'")+"'"}l=l.replaceAll("{:"+s+"}",u)}return l}getFileUrl(l,i,s={}){return console.warn("Please replace pb.getFileUrl() with pb.files.getURL()"),this.files.getURL(l,i,s)}buildUrl(l){return console.warn("Please replace pb.buildUrl() with pb.buildURL()"),this.buildURL(l)}buildURL(l){var s;let i=this.baseURL;return typeof window>"u"||!window.location||i.startsWith("https://")||i.startsWith("http://")||(i=(s=window.location.origin)!=null&&s.endsWith("/")?window.location.origin.substring(0,window.location.origin.length-1):window.location.origin||"",this.baseURL.startsWith("/")||(i+=window.location.pathname||"/",i+=i.endsWith("/")?"":"/"),i+=this.baseURL),l&&(i+=i.endsWith("/")?"":"/",i+=l.startsWith("/")?l.substring(1):l),i}async send(l,i){i=this.initSendOptions(l,i);let s=this.buildURL(l);if(this.beforeSend){const u=Object.assign({},await this.beforeSend(s,i));u.url!==void 0||u.options!==void 0?(s=u.url||s,i=u.options||i):Object.keys(u).length&&(i=u,console!=null&&console.warn&&console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."))}if(i.query!==void 0){const u=yu(i.query);u&&(s+=(s.includes("?")?"&":"?")+u),delete i.query}return this.getHeader(i.headers,"Content-Type")=="application/json"&&i.body&&typeof i.body!="string"&&(i.body=JSON.stringify(i.body)),(i.fetch||fetch)(s,i).then((async u=>{var f;let d={};try{d=await u.json()}catch(h){if((f=i.signal)!=null&&f.aborted||(h==null?void 0:h.name)=="AbortError"||(h==null?void 0:h.message)=="Aborted")throw h}if(this.afterSend&&(d=await this.afterSend(u,d,i)),u.status>=400)throw new bt({url:u.url,status:u.status,data:d});return d})).catch((u=>{throw new bt(u)}))}initSendOptions(l,i){if((i=Object.assign({method:"GET"},i)).body=(function(u){if(typeof FormData>"u"||u===void 0||typeof u!="object"||u===null||lu(u)||!Xh(u))return u;const d=new FormData;for(const f in u){const h=u[f];if(h!==void 0)if(typeof h!="object"||Xh({data:h})){const g=Array.isArray(h)?h:[h];for(let b of g)d.append(f,b)}else{let g={};g[f]=h,d.append("@jsonPayload",JSON.stringify(g))}}return d})(i.body),vu(i),i.query=Object.assign({},i.params,i.query),i.requestKey===void 0&&(i.$autoCancel===!1||i.query.$autoCancel===!1?i.requestKey=null:(i.$cancelKey||i.query.$cancelKey)&&(i.requestKey=i.$cancelKey||i.query.$cancelKey)),delete i.$autoCancel,delete i.query.$autoCancel,delete i.$cancelKey,delete i.query.$cancelKey,this.getHeader(i.headers,"Content-Type")!==null||lu(i.body)||(i.headers=Object.assign({},i.headers,{"Content-Type":"application/json"})),this.getHeader(i.headers,"Accept-Language")===null&&(i.headers=Object.assign({},i.headers,{"Accept-Language":this.lang})),this.authStore.token&&this.getHeader(i.headers,"Authorization")===null&&(i.headers=Object.assign({},i.headers,{Authorization:this.authStore.token})),this.enableAutoCancellation&&i.requestKey!==null){const s=i.requestKey||(i.method||"GET")+l;delete i.requestKey,this.cancelRequest(s);const u=new AbortController;this.cancelControllers[s]=u,i.signal=u.signal}return i}getHeader(l,i){l=l||{},i=i.toLowerCase();for(let s in l)if(s.toLowerCase()==i)return l[s];return null}}const jg="ennabl_pb_url";let Al=null;function Mg(){return localStorage.getItem(jg)||""}function wr(){const o=Mg();return o?((!Al||Al.baseUrl!==o)&&(Al=new xu(o)),Al):null}function Qh(){return!!Mg()}async function R1(o){const l=o.trim().replace(/\/$/,"");localStorage.setItem(jg,l),Al=new xu(l),await Al.collection("prds").getList(1,1)}async function O1(){return(await wr().collection("prds").getFullList({sort:"-updated"})).map(Su)}async function z1({projectId:o,title:l,content:i}){const s=await wr().collection("prds").create({projectId:o,title:l.trim(),content:i||"",status:"backlog"});return Su(s)}async function j1(o,l){const i=await wr().collection("prds").update(o,l);return Su(i)}async function M1(o){await wr().collection("prds").delete(o)}function Su(o){return{id:o.id,projectId:o.projectId,title:o.title,content:o.content||"",status:o.status||"backlog",createdAt:o.created,updatedAt:o.updated}}function _1({onDone:o}){const[l,i]=N.useState(""),[s,u]=N.useState(!1),[d,f]=N.useState("");async function h(g){var b,y;if(g.preventDefault(),!!l.trim()){u(!0),f("");try{await R1(l),o()}catch(x){f((b=x==null?void 0:x.message)!=null&&b.includes("Failed to fetch")?"Could not reach that URL. Check the Railway domain and make sure it's deployed.":(y=x==null?void 0:x.message)!=null&&y.includes("prds")?'Connected but the "prds" collection is missing. Check that the migration ran.':`Connection failed: ${(x==null?void 0:x.message)||"unknown error"}`)}finally{u(!1)}}}return v.jsx("div",{className:"pb-setup",children:v.jsxs("div",{className:"pb-setup-card",children:[v.jsxs("div",{className:"pb-setup-logo",children:[v.jsx("span",{className:"pb-setup-logo-name",children:"ennabl"}),v.jsx("span",{className:"pb-setup-logo-suffix",children:"builder"})]}),v.jsx("h2",{className:"pb-setup-title",children:"Connect to PocketBase"}),v.jsx("p",{className:"pb-setup-sub",children:"Paste your Railway deployment URL to sync PRDs across sessions."}),v.jsxs("form",{className:"pb-setup-form",onSubmit:h,children:[v.jsx("input",{className:"pb-setup-input",type:"url",placeholder:"https://your-app.up.railway.app",value:l,onChange:g=>i(g.target.value),autoFocus:!0,disabled:s}),d&&v.jsx("div",{className:"pb-setup-error",children:d}),v.jsx("button",{className:"pb-setup-btn",type:"submit",disabled:!l.trim()||s,children:s?"Connecting…":"Connect"})]}),v.jsxs("div",{className:"pb-setup-footer",children:[v.jsxs("span",{className:"pb-setup-hint",children:["Don't have a deployment yet?"," ",v.jsx("a",{href:"https://railway.app",target:"_blank",rel:"noreferrer",className:"pb-setup-link",children:"Deploy to Railway →"})]}),v.jsx("button",{className:"pb-setup-skip",onClick:o,children:"Skip — use local storage"})]})]})})}const _g="ennabl_builder_prds",Ug=[{id:"ai",name:"AI",icon:"✦"},{id:"insights",name:"Insights",icon:"◎"},{id:"workflows",name:"Workflows",icon:"⚡"},{id:"data",name:"Data",icon:"⬡"},{id:"growth",name:"Growth",icon:"↑"},{id:"updates",name:"Updates",icon:"◉"},{id:"settings",name:"Settings",icon:"⚙"}],Kh=["backlog","todo","doing","done"],Lg={backlog:"Backlog",todo:"To Do",doing:"Doing",done:"Done"},U1=[{id:"prd-mock-1",projectId:"workflows",title:"Producer Filter Modal",content:`# Producer Filter Modal

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
`,status:"doing",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),updatedAt:new Date(Date.now()-7200*1e3).toISOString()}];function iu(){try{return JSON.parse(localStorage.getItem(_g)||"[]")}catch{return[]}}function ur(o){localStorage.setItem(_g,JSON.stringify(o))}function Ih(){iu().length===0&&ur(U1)}function Bg(o){return Ug.find(l=>l.id===o)||null}function L1({prds:o=[],onSelect:l}){const[i,s]=N.useState(""),[u,d]=N.useState([]),[f,h]=N.useState(!1),[g,b]=N.useState(0),y=N.useRef(),x=N.useRef();N.useEffect(()=>{if(!i.trim()){d([]),h(!1);return}const A=i.toLowerCase(),M=o.filter(z=>z.title.toLowerCase().includes(A)).slice(0,8);d(M),h(M.length>0),b(0)},[i,o]),N.useEffect(()=>{function A(M){f&&(M.key==="ArrowDown"&&(M.preventDefault(),b(z=>Math.min(z+1,u.length-1))),M.key==="ArrowUp"&&(M.preventDefault(),b(z=>Math.max(z-1,0))),M.key==="Enter"&&(M.preventDefault(),u[g]&&E(u[g])),M.key==="Escape"&&h(!1))}return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[f,u,g]),N.useEffect(()=>{function A(M){var z,X;!((z=x.current)!=null&&z.contains(M.target))&&!((X=y.current)!=null&&X.contains(M.target))&&h(!1)}return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[]);function E(A){var M;l(A),s(""),h(!1),(M=y.current)==null||M.blur()}return v.jsxs("div",{className:"prd-search",children:[v.jsxs("div",{className:"prd-search-input-wrap",children:[v.jsx("span",{className:"prd-search-icon",children:"⌕"}),v.jsx("input",{ref:y,className:"prd-search-input",type:"text",placeholder:"Search PRDs…",value:i,onChange:A=>s(A.target.value),onFocus:()=>{u.length&&h(!0)}}),i&&v.jsx("button",{className:"prd-search-clear",onClick:()=>{s(""),h(!1)},children:"✕"})]}),f&&v.jsx("div",{ref:x,className:"prd-search-dropdown",children:u.map((A,M)=>{const z=Bg(A.projectId);return v.jsxs("button",{className:`prd-search-result ${M===g?"prd-search-result--active":""}`,onMouseEnter:()=>b(M),onClick:()=>E(A),children:[v.jsx("span",{className:"prd-search-result-title",children:A.title}),v.jsxs("span",{className:"prd-search-result-project",children:[z==null?void 0:z.icon," ",z==null?void 0:z.name]})]},A.id)})})]})}function B1({prds:o,onNavigate:l}){return v.jsxs("div",{className:"projects-page",children:[v.jsx("header",{className:"projects-header",children:v.jsxs("div",{className:"projects-logo",children:[v.jsx("span",{className:"projects-logo-name",children:"ennabl"}),v.jsx("span",{className:"projects-logo-suffix",children:"builder"})]})}),v.jsxs("main",{className:"projects-main",children:[v.jsx("h1",{className:"projects-title",children:"Projects"}),v.jsx("div",{className:"projects-grid",children:Ug.map(i=>{const s=o.filter(d=>d.projectId===i.id),u=s.filter(d=>d.status==="doing").length;return v.jsxs("button",{className:"project-card",onClick:()=>l({page:"project",projectId:i.id}),children:[v.jsx("div",{className:"project-card-icon",children:i.icon}),v.jsx("div",{className:"project-card-name",children:i.name}),v.jsx("div",{className:"project-card-meta",children:s.length>0?v.jsxs(v.Fragment,{children:[v.jsxs("span",{className:"project-card-count",children:[s.length," PRD",s.length!==1?"s":""]}),u>0&&v.jsxs("span",{className:"project-card-doing",children:[u," doing"]})]}):v.jsx("span",{className:"project-card-empty",children:"No PRDs yet"})})]},i.id)})})]})]})}var ki=cg();function q1(){for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return N.useMemo(()=>s=>{l.forEach(u=>u(s))},l)}const Cr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Rl(o){const l=Object.prototype.toString.call(o);return l==="[object Window]"||l==="[object global]"}function wu(o){return"nodeType"in o}function vt(o){var l,i;return o?Rl(o)?o:wu(o)&&(l=(i=o.ownerDocument)==null?void 0:i.defaultView)!=null?l:window:window}function Cu(o){const{Document:l}=vt(o);return o instanceof l}function qi(o){return Rl(o)?!1:o instanceof vt(o).HTMLElement}function qg(o){return o instanceof vt(o).SVGElement}function Ol(o){return o?Rl(o)?o.document:wu(o)?Cu(o)?o:qi(o)||qg(o)?o.ownerDocument:document:document:document}const on=Cr?N.useLayoutEffect:N.useEffect;function Nr(o){const l=N.useRef(o);return on(()=>{l.current=o}),N.useCallback(function(){for(var i=arguments.length,s=new Array(i),u=0;u<i;u++)s[u]=arguments[u];return l.current==null?void 0:l.current(...s)},[])}function H1(){const o=N.useRef(null),l=N.useCallback((s,u)=>{o.current=setInterval(s,u)},[]),i=N.useCallback(()=>{o.current!==null&&(clearInterval(o.current),o.current=null)},[]);return[l,i]}function _i(o,l){l===void 0&&(l=[o]);const i=N.useRef(o);return on(()=>{i.current!==o&&(i.current=o)},l),i}function Hi(o,l){const i=N.useRef();return N.useMemo(()=>{const s=o(i.current);return i.current=s,s},[...l])}function gr(o){const l=Nr(o),i=N.useRef(null),s=N.useCallback(u=>{u!==i.current&&(l==null||l(u,i.current)),i.current=u},[]);return[i,s]}function mr(o){const l=N.useRef();return N.useEffect(()=>{l.current=o},[o]),l.current}let $c={};function Yi(o,l){return N.useMemo(()=>{if(l)return l;const i=$c[o]==null?0:$c[o]+1;return $c[o]=i,o+"-"+i},[o,l])}function Hg(o){return function(l){for(var i=arguments.length,s=new Array(i>1?i-1:0),u=1;u<i;u++)s[u-1]=arguments[u];return s.reduce((d,f)=>{const h=Object.entries(f);for(const[g,b]of h){const y=d[g];y!=null&&(d[g]=y+o*b)}return d},{...l})}}const kl=Hg(1),br=Hg(-1);function Y1(o){return"clientX"in o&&"clientY"in o}function Tr(o){if(!o)return!1;const{KeyboardEvent:l}=vt(o.target);return l&&o instanceof l}function G1(o){if(!o)return!1;const{TouchEvent:l}=vt(o.target);return l&&o instanceof l}function vr(o){if(G1(o)){if(o.touches&&o.touches.length){const{clientX:l,clientY:i}=o.touches[0];return{x:l,y:i}}else if(o.changedTouches&&o.changedTouches.length){const{clientX:l,clientY:i}=o.changedTouches[0];return{x:l,y:i}}}return Y1(o)?{x:o.clientX,y:o.clientY}:null}const ba=Object.freeze({Translate:{toString(o){if(!o)return;const{x:l,y:i}=o;return"translate3d("+(l?Math.round(l):0)+"px, "+(i?Math.round(i):0)+"px, 0)"}},Scale:{toString(o){if(!o)return;const{scaleX:l,scaleY:i}=o;return"scaleX("+l+") scaleY("+i+")"}},Transform:{toString(o){if(o)return[ba.Translate.toString(o),ba.Scale.toString(o)].join(" ")}},Transition:{toString(o){let{property:l,duration:i,easing:s}=o;return l+" "+i+"ms "+s}}}),Jh="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Z1(o){return o.matches(Jh)?o:o.querySelector(Jh)}const X1={display:"none"};function V1(o){let{id:l,value:i}=o;return qe.createElement("div",{id:l,style:X1},i)}function Q1(o){let{id:l,announcement:i,ariaLiveType:s="assertive"}=o;const u={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return qe.createElement("div",{id:l,style:u,role:"status","aria-live":s,"aria-atomic":!0},i)}function K1(){const[o,l]=N.useState("");return{announce:N.useCallback(s=>{s!=null&&l(s)},[]),announcement:o}}const Yg=N.createContext(null);function I1(o){const l=N.useContext(Yg);N.useEffect(()=>{if(!l)throw new Error("useDndMonitor must be used within a children of <DndContext>");return l(o)},[o,l])}function J1(){const[o]=N.useState(()=>new Set),l=N.useCallback(s=>(o.add(s),()=>o.delete(s)),[o]);return[N.useCallback(s=>{let{type:u,event:d}=s;o.forEach(f=>{var h;return(h=f[u])==null?void 0:h.call(f,d)})},[o]),l]}const $1={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},F1={onDragStart(o){let{active:l}=o;return"Picked up draggable item "+l.id+"."},onDragOver(o){let{active:l,over:i}=o;return i?"Draggable item "+l.id+" was moved over droppable area "+i.id+".":"Draggable item "+l.id+" is no longer over a droppable area."},onDragEnd(o){let{active:l,over:i}=o;return i?"Draggable item "+l.id+" was dropped over droppable area "+i.id:"Draggable item "+l.id+" was dropped."},onDragCancel(o){let{active:l}=o;return"Dragging was cancelled. Draggable item "+l.id+" was dropped."}};function W1(o){let{announcements:l=F1,container:i,hiddenTextDescribedById:s,screenReaderInstructions:u=$1}=o;const{announce:d,announcement:f}=K1(),h=Yi("DndLiveRegion"),[g,b]=N.useState(!1);if(N.useEffect(()=>{b(!0)},[]),I1(N.useMemo(()=>({onDragStart(x){let{active:E}=x;d(l.onDragStart({active:E}))},onDragMove(x){let{active:E,over:A}=x;l.onDragMove&&d(l.onDragMove({active:E,over:A}))},onDragOver(x){let{active:E,over:A}=x;d(l.onDragOver({active:E,over:A}))},onDragEnd(x){let{active:E,over:A}=x;d(l.onDragEnd({active:E,over:A}))},onDragCancel(x){let{active:E,over:A}=x;d(l.onDragCancel({active:E,over:A}))}}),[d,l])),!g)return null;const y=qe.createElement(qe.Fragment,null,qe.createElement(V1,{id:s,value:u.draggable}),qe.createElement(Q1,{id:h,announcement:f}));return i?ki.createPortal(y,i):y}var et;(function(o){o.DragStart="dragStart",o.DragMove="dragMove",o.DragEnd="dragEnd",o.DragCancel="dragCancel",o.DragOver="dragOver",o.RegisterDroppable="registerDroppable",o.SetDroppableDisabled="setDroppableDisabled",o.UnregisterDroppable="unregisterDroppable"})(et||(et={}));function yr(){}function P1(o,l){return N.useMemo(()=>({sensor:o,options:l??{}}),[o,l])}function ey(){for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return N.useMemo(()=>[...l].filter(s=>s!=null),[...l])}const cn=Object.freeze({x:0,y:0});function ty(o,l){return Math.sqrt(Math.pow(o.x-l.x,2)+Math.pow(o.y-l.y,2))}function ny(o,l){const i=vr(o);if(!i)return"0 0";const s={x:(i.x-l.left)/l.width*100,y:(i.y-l.top)/l.height*100};return s.x+"% "+s.y+"%"}function ay(o,l){let{data:{value:i}}=o,{data:{value:s}}=l;return i-s}function ly(o,l){let{data:{value:i}}=o,{data:{value:s}}=l;return s-i}function $h(o){let{left:l,top:i,height:s,width:u}=o;return[{x:l,y:i},{x:l+u,y:i},{x:l,y:i+s},{x:l+u,y:i+s}]}function iy(o,l){if(!o||o.length===0)return null;const[i]=o;return i[l]}const sy=o=>{let{collisionRect:l,droppableRects:i,droppableContainers:s}=o;const u=$h(l),d=[];for(const f of s){const{id:h}=f,g=i.get(h);if(g){const b=$h(g),y=u.reduce((E,A,M)=>E+ty(b[M],A),0),x=Number((y/4).toFixed(4));d.push({id:h,data:{droppableContainer:f,value:x}})}}return d.sort(ay)};function ry(o,l){const i=Math.max(l.top,o.top),s=Math.max(l.left,o.left),u=Math.min(l.left+l.width,o.left+o.width),d=Math.min(l.top+l.height,o.top+o.height),f=u-s,h=d-i;if(s<u&&i<d){const g=l.width*l.height,b=o.width*o.height,y=f*h,x=y/(g+b-y);return Number(x.toFixed(4))}return 0}const oy=o=>{let{collisionRect:l,droppableRects:i,droppableContainers:s}=o;const u=[];for(const d of s){const{id:f}=d,h=i.get(f);if(h){const g=ry(h,l);g>0&&u.push({id:f,data:{droppableContainer:d,value:g}})}}return u.sort(ly)};function cy(o,l,i){return{...o,scaleX:l&&i?l.width/i.width:1,scaleY:l&&i?l.height/i.height:1}}function Gg(o,l){return o&&l?{x:o.left-l.left,y:o.top-l.top}:cn}function uy(o){return function(i){for(var s=arguments.length,u=new Array(s>1?s-1:0),d=1;d<s;d++)u[d-1]=arguments[d];return u.reduce((f,h)=>({...f,top:f.top+o*h.y,bottom:f.bottom+o*h.y,left:f.left+o*h.x,right:f.right+o*h.x}),{...i})}}const dy=uy(1);function Zg(o){if(o.startsWith("matrix3d(")){const l=o.slice(9,-1).split(/, /);return{x:+l[12],y:+l[13],scaleX:+l[0],scaleY:+l[5]}}else if(o.startsWith("matrix(")){const l=o.slice(7,-1).split(/, /);return{x:+l[4],y:+l[5],scaleX:+l[0],scaleY:+l[3]}}return null}function fy(o,l,i){const s=Zg(l);if(!s)return o;const{scaleX:u,scaleY:d,x:f,y:h}=s,g=o.left-f-(1-u)*parseFloat(i),b=o.top-h-(1-d)*parseFloat(i.slice(i.indexOf(" ")+1)),y=u?o.width/u:o.width,x=d?o.height/d:o.height;return{width:y,height:x,top:b,right:g+y,bottom:b+x,left:g}}const py={ignoreTransform:!1};function zl(o,l){l===void 0&&(l=py);let i=o.getBoundingClientRect();if(l.ignoreTransform){const{transform:b,transformOrigin:y}=vt(o).getComputedStyle(o);b&&(i=fy(i,b,y))}const{top:s,left:u,width:d,height:f,bottom:h,right:g}=i;return{top:s,left:u,width:d,height:f,bottom:h,right:g}}function Fh(o){return zl(o,{ignoreTransform:!0})}function hy(o){const l=o.innerWidth,i=o.innerHeight;return{top:0,left:0,right:l,bottom:i,width:l,height:i}}function gy(o,l){return l===void 0&&(l=vt(o).getComputedStyle(o)),l.position==="fixed"}function my(o,l){l===void 0&&(l=vt(o).getComputedStyle(o));const i=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(u=>{const d=l[u];return typeof d=="string"?i.test(d):!1})}function Nu(o,l){const i=[];function s(u){if(l!=null&&i.length>=l||!u)return i;if(Cu(u)&&u.scrollingElement!=null&&!i.includes(u.scrollingElement))return i.push(u.scrollingElement),i;if(!qi(u)||qg(u)||i.includes(u))return i;const d=vt(o).getComputedStyle(u);return u!==o&&my(u,d)&&i.push(u),gy(u,d)?i:s(u.parentNode)}return o?s(o):i}function Xg(o){const[l]=Nu(o,1);return l??null}function Fc(o){return!Cr||!o?null:Rl(o)?o:wu(o)?Cu(o)||o===Ol(o).scrollingElement?window:qi(o)?o:null:null}function Vg(o){return Rl(o)?o.scrollX:o.scrollLeft}function Qg(o){return Rl(o)?o.scrollY:o.scrollTop}function su(o){return{x:Vg(o),y:Qg(o)}}var lt;(function(o){o[o.Forward=1]="Forward",o[o.Backward=-1]="Backward"})(lt||(lt={}));function Kg(o){return!Cr||!o?!1:o===document.scrollingElement}function Ig(o){const l={x:0,y:0},i=Kg(o)?{height:window.innerHeight,width:window.innerWidth}:{height:o.clientHeight,width:o.clientWidth},s={x:o.scrollWidth-i.width,y:o.scrollHeight-i.height},u=o.scrollTop<=l.y,d=o.scrollLeft<=l.x,f=o.scrollTop>=s.y,h=o.scrollLeft>=s.x;return{isTop:u,isLeft:d,isBottom:f,isRight:h,maxScroll:s,minScroll:l}}const by={x:.2,y:.2};function vy(o,l,i,s,u){let{top:d,left:f,right:h,bottom:g}=i;s===void 0&&(s=10),u===void 0&&(u=by);const{isTop:b,isBottom:y,isLeft:x,isRight:E}=Ig(o),A={x:0,y:0},M={x:0,y:0},z={height:l.height*u.y,width:l.width*u.x};return!b&&d<=l.top+z.height?(A.y=lt.Backward,M.y=s*Math.abs((l.top+z.height-d)/z.height)):!y&&g>=l.bottom-z.height&&(A.y=lt.Forward,M.y=s*Math.abs((l.bottom-z.height-g)/z.height)),!E&&h>=l.right-z.width?(A.x=lt.Forward,M.x=s*Math.abs((l.right-z.width-h)/z.width)):!x&&f<=l.left+z.width&&(A.x=lt.Backward,M.x=s*Math.abs((l.left+z.width-f)/z.width)),{direction:A,speed:M}}function yy(o){if(o===document.scrollingElement){const{innerWidth:d,innerHeight:f}=window;return{top:0,left:0,right:d,bottom:f,width:d,height:f}}const{top:l,left:i,right:s,bottom:u}=o.getBoundingClientRect();return{top:l,left:i,right:s,bottom:u,width:o.clientWidth,height:o.clientHeight}}function Jg(o){return o.reduce((l,i)=>kl(l,su(i)),cn)}function xy(o){return o.reduce((l,i)=>l+Vg(i),0)}function Sy(o){return o.reduce((l,i)=>l+Qg(i),0)}function $g(o,l){if(l===void 0&&(l=zl),!o)return;const{top:i,left:s,bottom:u,right:d}=l(o);Xg(o)&&(u<=0||d<=0||i>=window.innerHeight||s>=window.innerWidth)&&o.scrollIntoView({block:"center",inline:"center"})}const wy=[["x",["left","right"],xy],["y",["top","bottom"],Sy]];class Tu{constructor(l,i){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const s=Nu(i),u=Jg(s);this.rect={...l},this.width=l.width,this.height=l.height;for(const[d,f,h]of wy)for(const g of f)Object.defineProperty(this,g,{get:()=>{const b=h(s),y=u[d]-b;return this.rect[g]+y},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class zi{constructor(l){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(i=>{var s;return(s=this.target)==null?void 0:s.removeEventListener(...i)})},this.target=l}add(l,i,s){var u;(u=this.target)==null||u.addEventListener(l,i,s),this.listeners.push([l,i,s])}}function Cy(o){const{EventTarget:l}=vt(o);return o instanceof l?o:Ol(o)}function Wc(o,l){const i=Math.abs(o.x),s=Math.abs(o.y);return typeof l=="number"?Math.sqrt(i**2+s**2)>l:"x"in l&&"y"in l?i>l.x&&s>l.y:"x"in l?i>l.x:"y"in l?s>l.y:!1}var en;(function(o){o.Click="click",o.DragStart="dragstart",o.Keydown="keydown",o.ContextMenu="contextmenu",o.Resize="resize",o.SelectionChange="selectionchange",o.VisibilityChange="visibilitychange"})(en||(en={}));function Wh(o){o.preventDefault()}function Ny(o){o.stopPropagation()}var Ne;(function(o){o.Space="Space",o.Down="ArrowDown",o.Right="ArrowRight",o.Left="ArrowLeft",o.Up="ArrowUp",o.Esc="Escape",o.Enter="Enter",o.Tab="Tab"})(Ne||(Ne={}));const Fg={start:[Ne.Space,Ne.Enter],cancel:[Ne.Esc],end:[Ne.Space,Ne.Enter,Ne.Tab]},Ty=(o,l)=>{let{currentCoordinates:i}=l;switch(o.code){case Ne.Right:return{...i,x:i.x+25};case Ne.Left:return{...i,x:i.x-25};case Ne.Down:return{...i,y:i.y+25};case Ne.Up:return{...i,y:i.y-25}}};class Wg{constructor(l){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=l;const{event:{target:i}}=l;this.props=l,this.listeners=new zi(Ol(i)),this.windowListeners=new zi(vt(i)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(en.Resize,this.handleCancel),this.windowListeners.add(en.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(en.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:l,onStart:i}=this.props,s=l.node.current;s&&$g(s),i(cn)}handleKeyDown(l){if(Tr(l)){const{active:i,context:s,options:u}=this.props,{keyboardCodes:d=Fg,coordinateGetter:f=Ty,scrollBehavior:h="smooth"}=u,{code:g}=l;if(d.end.includes(g)){this.handleEnd(l);return}if(d.cancel.includes(g)){this.handleCancel(l);return}const{collisionRect:b}=s.current,y=b?{x:b.left,y:b.top}:cn;this.referenceCoordinates||(this.referenceCoordinates=y);const x=f(l,{active:i,context:s.current,currentCoordinates:y});if(x){const E=br(x,y),A={x:0,y:0},{scrollableAncestors:M}=s.current;for(const z of M){const X=l.code,{isTop:Y,isRight:G,isLeft:K,isBottom:I,maxScroll:Z,minScroll:Q}=Ig(z),H=yy(z),F={x:Math.min(X===Ne.Right?H.right-H.width/2:H.right,Math.max(X===Ne.Right?H.left:H.left+H.width/2,x.x)),y:Math.min(X===Ne.Down?H.bottom-H.height/2:H.bottom,Math.max(X===Ne.Down?H.top:H.top+H.height/2,x.y))},te=X===Ne.Right&&!G||X===Ne.Left&&!K,re=X===Ne.Down&&!I||X===Ne.Up&&!Y;if(te&&F.x!==x.x){const ce=z.scrollLeft+E.x,me=X===Ne.Right&&ce<=Z.x||X===Ne.Left&&ce>=Q.x;if(me&&!E.y){z.scrollTo({left:ce,behavior:h});return}me?A.x=z.scrollLeft-ce:A.x=X===Ne.Right?z.scrollLeft-Z.x:z.scrollLeft-Q.x,A.x&&z.scrollBy({left:-A.x,behavior:h});break}else if(re&&F.y!==x.y){const ce=z.scrollTop+E.y,me=X===Ne.Down&&ce<=Z.y||X===Ne.Up&&ce>=Q.y;if(me&&!E.x){z.scrollTo({top:ce,behavior:h});return}me?A.y=z.scrollTop-ce:A.y=X===Ne.Down?z.scrollTop-Z.y:z.scrollTop-Q.y,A.y&&z.scrollBy({top:-A.y,behavior:h});break}}this.handleMove(l,kl(br(x,this.referenceCoordinates),A))}}}handleMove(l,i){const{onMove:s}=this.props;l.preventDefault(),s(i)}handleEnd(l){const{onEnd:i}=this.props;l.preventDefault(),this.detach(),i()}handleCancel(l){const{onCancel:i}=this.props;l.preventDefault(),this.detach(),i()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Wg.activators=[{eventName:"onKeyDown",handler:(o,l,i)=>{let{keyboardCodes:s=Fg,onActivation:u}=l,{active:d}=i;const{code:f}=o.nativeEvent;if(s.start.includes(f)){const h=d.activatorNode.current;return h&&o.target!==h?!1:(o.preventDefault(),u==null||u({event:o.nativeEvent}),!0)}return!1}}];function Ph(o){return!!(o&&"distance"in o)}function eg(o){return!!(o&&"delay"in o)}class Eu{constructor(l,i,s){var u;s===void 0&&(s=Cy(l.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=l,this.events=i;const{event:d}=l,{target:f}=d;this.props=l,this.events=i,this.document=Ol(f),this.documentListeners=new zi(this.document),this.listeners=new zi(s),this.windowListeners=new zi(vt(f)),this.initialCoordinates=(u=vr(d))!=null?u:cn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:l,props:{options:{activationConstraint:i,bypassActivationConstraint:s}}}=this;if(this.listeners.add(l.move.name,this.handleMove,{passive:!1}),this.listeners.add(l.end.name,this.handleEnd),l.cancel&&this.listeners.add(l.cancel.name,this.handleCancel),this.windowListeners.add(en.Resize,this.handleCancel),this.windowListeners.add(en.DragStart,Wh),this.windowListeners.add(en.VisibilityChange,this.handleCancel),this.windowListeners.add(en.ContextMenu,Wh),this.documentListeners.add(en.Keydown,this.handleKeydown),i){if(s!=null&&s({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(eg(i)){this.timeoutId=setTimeout(this.handleStart,i.delay),this.handlePending(i);return}if(Ph(i)){this.handlePending(i);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(l,i){const{active:s,onPending:u}=this.props;u(s,l,this.initialCoordinates,i)}handleStart(){const{initialCoordinates:l}=this,{onStart:i}=this.props;l&&(this.activated=!0,this.documentListeners.add(en.Click,Ny,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(en.SelectionChange,this.removeTextSelection),i(l))}handleMove(l){var i;const{activated:s,initialCoordinates:u,props:d}=this,{onMove:f,options:{activationConstraint:h}}=d;if(!u)return;const g=(i=vr(l))!=null?i:cn,b=br(u,g);if(!s&&h){if(Ph(h)){if(h.tolerance!=null&&Wc(b,h.tolerance))return this.handleCancel();if(Wc(b,h.distance))return this.handleStart()}if(eg(h)&&Wc(b,h.tolerance))return this.handleCancel();this.handlePending(h,b);return}l.cancelable&&l.preventDefault(),f(g)}handleEnd(){const{onAbort:l,onEnd:i}=this.props;this.detach(),this.activated||l(this.props.active),i()}handleCancel(){const{onAbort:l,onCancel:i}=this.props;this.detach(),this.activated||l(this.props.active),i()}handleKeydown(l){l.code===Ne.Esc&&this.handleCancel()}removeTextSelection(){var l;(l=this.document.getSelection())==null||l.removeAllRanges()}}const Ey={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Au extends Eu{constructor(l){const{event:i}=l,s=Ol(i.target);super(l,Ey,s)}}Au.activators=[{eventName:"onPointerDown",handler:(o,l)=>{let{nativeEvent:i}=o,{onActivation:s}=l;return!i.isPrimary||i.button!==0?!1:(s==null||s({event:i}),!0)}}];const Ay={move:{name:"mousemove"},end:{name:"mouseup"}};var ru;(function(o){o[o.RightClick=2]="RightClick"})(ru||(ru={}));class Dy extends Eu{constructor(l){super(l,Ay,Ol(l.event.target))}}Dy.activators=[{eventName:"onMouseDown",handler:(o,l)=>{let{nativeEvent:i}=o,{onActivation:s}=l;return i.button===ru.RightClick?!1:(s==null||s({event:i}),!0)}}];const Pc={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class ky extends Eu{constructor(l){super(l,Pc)}static setup(){return window.addEventListener(Pc.move.name,l,{capture:!1,passive:!1}),function(){window.removeEventListener(Pc.move.name,l)};function l(){}}}ky.activators=[{eventName:"onTouchStart",handler:(o,l)=>{let{nativeEvent:i}=o,{onActivation:s}=l;const{touches:u}=i;return u.length>1?!1:(s==null||s({event:i}),!0)}}];var ji;(function(o){o[o.Pointer=0]="Pointer",o[o.DraggableRect=1]="DraggableRect"})(ji||(ji={}));var xr;(function(o){o[o.TreeOrder=0]="TreeOrder",o[o.ReversedTreeOrder=1]="ReversedTreeOrder"})(xr||(xr={}));function Ry(o){let{acceleration:l,activator:i=ji.Pointer,canScroll:s,draggingRect:u,enabled:d,interval:f=5,order:h=xr.TreeOrder,pointerCoordinates:g,scrollableAncestors:b,scrollableAncestorRects:y,delta:x,threshold:E}=o;const A=zy({delta:x,disabled:!d}),[M,z]=H1(),X=N.useRef({x:0,y:0}),Y=N.useRef({x:0,y:0}),G=N.useMemo(()=>{switch(i){case ji.Pointer:return g?{top:g.y,bottom:g.y,left:g.x,right:g.x}:null;case ji.DraggableRect:return u}},[i,u,g]),K=N.useRef(null),I=N.useCallback(()=>{const Q=K.current;if(!Q)return;const H=X.current.x*Y.current.x,F=X.current.y*Y.current.y;Q.scrollBy(H,F)},[]),Z=N.useMemo(()=>h===xr.TreeOrder?[...b].reverse():b,[h,b]);N.useEffect(()=>{if(!d||!b.length||!G){z();return}for(const Q of Z){if((s==null?void 0:s(Q))===!1)continue;const H=b.indexOf(Q),F=y[H];if(!F)continue;const{direction:te,speed:re}=vy(Q,F,G,l,E);for(const ce of["x","y"])A[ce][te[ce]]||(re[ce]=0,te[ce]=0);if(re.x>0||re.y>0){z(),K.current=Q,M(I,f),X.current=re,Y.current=te;return}}X.current={x:0,y:0},Y.current={x:0,y:0},z()},[l,I,s,z,d,f,JSON.stringify(G),JSON.stringify(A),M,b,Z,y,JSON.stringify(E)])}const Oy={x:{[lt.Backward]:!1,[lt.Forward]:!1},y:{[lt.Backward]:!1,[lt.Forward]:!1}};function zy(o){let{delta:l,disabled:i}=o;const s=mr(l);return Hi(u=>{if(i||!s||!u)return Oy;const d={x:Math.sign(l.x-s.x),y:Math.sign(l.y-s.y)};return{x:{[lt.Backward]:u.x[lt.Backward]||d.x===-1,[lt.Forward]:u.x[lt.Forward]||d.x===1},y:{[lt.Backward]:u.y[lt.Backward]||d.y===-1,[lt.Forward]:u.y[lt.Forward]||d.y===1}}},[i,l,s])}function jy(o,l){const i=l!=null?o.get(l):void 0,s=i?i.node.current:null;return Hi(u=>{var d;return l==null?null:(d=s??u)!=null?d:null},[s,l])}function My(o,l){return N.useMemo(()=>o.reduce((i,s)=>{const{sensor:u}=s,d=u.activators.map(f=>({eventName:f.eventName,handler:l(f.handler,s)}));return[...i,...d]},[]),[o,l])}var Ui;(function(o){o[o.Always=0]="Always",o[o.BeforeDragging=1]="BeforeDragging",o[o.WhileDragging=2]="WhileDragging"})(Ui||(Ui={}));var ou;(function(o){o.Optimized="optimized"})(ou||(ou={}));const tg=new Map;function _y(o,l){let{dragging:i,dependencies:s,config:u}=l;const[d,f]=N.useState(null),{frequency:h,measure:g,strategy:b}=u,y=N.useRef(o),x=X(),E=_i(x),A=N.useCallback(function(Y){Y===void 0&&(Y=[]),!E.current&&f(G=>G===null?Y:G.concat(Y.filter(K=>!G.includes(K))))},[E]),M=N.useRef(null),z=Hi(Y=>{if(x&&!i)return tg;if(!Y||Y===tg||y.current!==o||d!=null){const G=new Map;for(let K of o){if(!K)continue;if(d&&d.length>0&&!d.includes(K.id)&&K.rect.current){G.set(K.id,K.rect.current);continue}const I=K.node.current,Z=I?new Tu(g(I),I):null;K.rect.current=Z,Z&&G.set(K.id,Z)}return G}return Y},[o,d,i,x,g]);return N.useEffect(()=>{y.current=o},[o]),N.useEffect(()=>{x||A()},[i,x]),N.useEffect(()=>{d&&d.length>0&&f(null)},[JSON.stringify(d)]),N.useEffect(()=>{x||typeof h!="number"||M.current!==null||(M.current=setTimeout(()=>{A(),M.current=null},h))},[h,x,A,...s]),{droppableRects:z,measureDroppableContainers:A,measuringScheduled:d!=null};function X(){switch(b){case Ui.Always:return!1;case Ui.BeforeDragging:return i;default:return!i}}}function Du(o,l){return Hi(i=>o?i||(typeof l=="function"?l(o):o):null,[l,o])}function Uy(o,l){return Du(o,l)}function Ly(o){let{callback:l,disabled:i}=o;const s=Nr(l),u=N.useMemo(()=>{if(i||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:d}=window;return new d(s)},[s,i]);return N.useEffect(()=>()=>u==null?void 0:u.disconnect(),[u]),u}function Er(o){let{callback:l,disabled:i}=o;const s=Nr(l),u=N.useMemo(()=>{if(i||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:d}=window;return new d(s)},[i]);return N.useEffect(()=>()=>u==null?void 0:u.disconnect(),[u]),u}function By(o){return new Tu(zl(o),o)}function ng(o,l,i){l===void 0&&(l=By);const[s,u]=N.useState(null);function d(){u(g=>{if(!o)return null;if(o.isConnected===!1){var b;return(b=g??i)!=null?b:null}const y=l(o);return JSON.stringify(g)===JSON.stringify(y)?g:y})}const f=Ly({callback(g){if(o)for(const b of g){const{type:y,target:x}=b;if(y==="childList"&&x instanceof HTMLElement&&x.contains(o)){d();break}}}}),h=Er({callback:d});return on(()=>{d(),o?(h==null||h.observe(o),f==null||f.observe(document.body,{childList:!0,subtree:!0})):(h==null||h.disconnect(),f==null||f.disconnect())},[o]),s}function qy(o){const l=Du(o);return Gg(o,l)}const ag=[];function Hy(o){const l=N.useRef(o),i=Hi(s=>o?s&&s!==ag&&o&&l.current&&o.parentNode===l.current.parentNode?s:Nu(o):ag,[o]);return N.useEffect(()=>{l.current=o},[o]),i}function Yy(o){const[l,i]=N.useState(null),s=N.useRef(o),u=N.useCallback(d=>{const f=Fc(d.target);f&&i(h=>h?(h.set(f,su(f)),new Map(h)):null)},[]);return N.useEffect(()=>{const d=s.current;if(o!==d){f(d);const h=o.map(g=>{const b=Fc(g);return b?(b.addEventListener("scroll",u,{passive:!0}),[b,su(b)]):null}).filter(g=>g!=null);i(h.length?new Map(h):null),s.current=o}return()=>{f(o),f(d)};function f(h){h.forEach(g=>{const b=Fc(g);b==null||b.removeEventListener("scroll",u)})}},[u,o]),N.useMemo(()=>o.length?l?Array.from(l.values()).reduce((d,f)=>kl(d,f),cn):Jg(o):cn,[o,l])}function lg(o,l){l===void 0&&(l=[]);const i=N.useRef(null);return N.useEffect(()=>{i.current=null},l),N.useEffect(()=>{const s=o!==cn;s&&!i.current&&(i.current=o),!s&&i.current&&(i.current=null)},[o]),i.current?br(o,i.current):cn}function Gy(o){N.useEffect(()=>{if(!Cr)return;const l=o.map(i=>{let{sensor:s}=i;return s.setup==null?void 0:s.setup()});return()=>{for(const i of l)i==null||i()}},o.map(l=>{let{sensor:i}=l;return i}))}function Zy(o,l){return N.useMemo(()=>o.reduce((i,s)=>{let{eventName:u,handler:d}=s;return i[u]=f=>{d(f,l)},i},{}),[o,l])}function Pg(o){return N.useMemo(()=>o?hy(o):null,[o])}const ig=[];function Xy(o,l){l===void 0&&(l=zl);const[i]=o,s=Pg(i?vt(i):null),[u,d]=N.useState(ig);function f(){d(()=>o.length?o.map(g=>Kg(g)?s:new Tu(l(g),g)):ig)}const h=Er({callback:f});return on(()=>{h==null||h.disconnect(),f(),o.forEach(g=>h==null?void 0:h.observe(g))},[o]),u}function em(o){if(!o)return null;if(o.children.length>1)return o;const l=o.children[0];return qi(l)?l:o}function Vy(o){let{measure:l}=o;const[i,s]=N.useState(null),u=N.useCallback(b=>{for(const{target:y}of b)if(qi(y)){s(x=>{const E=l(y);return x?{...x,width:E.width,height:E.height}:E});break}},[l]),d=Er({callback:u}),f=N.useCallback(b=>{const y=em(b);d==null||d.disconnect(),y&&(d==null||d.observe(y)),s(y?l(y):null)},[l,d]),[h,g]=gr(f);return N.useMemo(()=>({nodeRef:h,rect:i,setRef:g}),[i,h,g])}const Qy=[{sensor:Au,options:{}},{sensor:Wg,options:{}}],Ky={current:{}},dr={draggable:{measure:Fh},droppable:{measure:Fh,strategy:Ui.WhileDragging,frequency:ou.Optimized},dragOverlay:{measure:zl}};class Mi extends Map{get(l){var i;return l!=null&&(i=super.get(l))!=null?i:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(l=>{let{disabled:i}=l;return!i})}getNodeFor(l){var i,s;return(i=(s=this.get(l))==null?void 0:s.node.current)!=null?i:void 0}}const Iy={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Mi,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:yr},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:dr,measureDroppableContainers:yr,windowRect:null,measuringScheduled:!1},tm={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:yr,draggableNodes:new Map,over:null,measureDroppableContainers:yr},Gi=N.createContext(tm),nm=N.createContext(Iy);function Jy(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Mi}}}function $y(o,l){switch(l.type){case et.DragStart:return{...o,draggable:{...o.draggable,initialCoordinates:l.initialCoordinates,active:l.active}};case et.DragMove:return o.draggable.active==null?o:{...o,draggable:{...o.draggable,translate:{x:l.coordinates.x-o.draggable.initialCoordinates.x,y:l.coordinates.y-o.draggable.initialCoordinates.y}}};case et.DragEnd:case et.DragCancel:return{...o,draggable:{...o.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case et.RegisterDroppable:{const{element:i}=l,{id:s}=i,u=new Mi(o.droppable.containers);return u.set(s,i),{...o,droppable:{...o.droppable,containers:u}}}case et.SetDroppableDisabled:{const{id:i,key:s,disabled:u}=l,d=o.droppable.containers.get(i);if(!d||s!==d.key)return o;const f=new Mi(o.droppable.containers);return f.set(i,{...d,disabled:u}),{...o,droppable:{...o.droppable,containers:f}}}case et.UnregisterDroppable:{const{id:i,key:s}=l,u=o.droppable.containers.get(i);if(!u||s!==u.key)return o;const d=new Mi(o.droppable.containers);return d.delete(i),{...o,droppable:{...o.droppable,containers:d}}}default:return o}}function Fy(o){let{disabled:l}=o;const{active:i,activatorEvent:s,draggableNodes:u}=N.useContext(Gi),d=mr(s),f=mr(i==null?void 0:i.id);return N.useEffect(()=>{if(!l&&!s&&d&&f!=null){if(!Tr(d)||document.activeElement===d.target)return;const h=u.get(f);if(!h)return;const{activatorNode:g,node:b}=h;if(!g.current&&!b.current)return;requestAnimationFrame(()=>{for(const y of[g.current,b.current]){if(!y)continue;const x=Z1(y);if(x){x.focus();break}}})}},[s,l,u,f,d]),null}function am(o,l){let{transform:i,...s}=l;return o!=null&&o.length?o.reduce((u,d)=>d({transform:u,...s}),i):i}function Wy(o){return N.useMemo(()=>({draggable:{...dr.draggable,...o==null?void 0:o.draggable},droppable:{...dr.droppable,...o==null?void 0:o.droppable},dragOverlay:{...dr.dragOverlay,...o==null?void 0:o.dragOverlay}}),[o==null?void 0:o.draggable,o==null?void 0:o.droppable,o==null?void 0:o.dragOverlay])}function Py(o){let{activeNode:l,measure:i,initialRect:s,config:u=!0}=o;const d=N.useRef(!1),{x:f,y:h}=typeof u=="boolean"?{x:u,y:u}:u;on(()=>{if(!f&&!h||!l){d.current=!1;return}if(d.current||!s)return;const b=l==null?void 0:l.node.current;if(!b||b.isConnected===!1)return;const y=i(b),x=Gg(y,s);if(f||(x.x=0),h||(x.y=0),d.current=!0,Math.abs(x.x)>0||Math.abs(x.y)>0){const E=Xg(b);E&&E.scrollBy({top:x.y,left:x.x})}},[l,f,h,s,i])}const Ar=N.createContext({...cn,scaleX:1,scaleY:1});var ma;(function(o){o[o.Uninitialized=0]="Uninitialized",o[o.Initializing=1]="Initializing",o[o.Initialized=2]="Initialized"})(ma||(ma={}));const ex=N.memo(function(l){var i,s,u,d;let{id:f,accessibility:h,autoScroll:g=!0,children:b,sensors:y=Qy,collisionDetection:x=oy,measuring:E,modifiers:A,...M}=l;const z=N.useReducer($y,void 0,Jy),[X,Y]=z,[G,K]=J1(),[I,Z]=N.useState(ma.Uninitialized),Q=I===ma.Initialized,{draggable:{active:H,nodes:F,translate:te},droppable:{containers:re}}=X,ce=H!=null?F.get(H):null,me=N.useRef({initial:null,translated:null}),ze=N.useMemo(()=>{var Ze;return H!=null?{id:H,data:(Ze=ce==null?void 0:ce.data)!=null?Ze:Ky,rect:me}:null},[H,ce]),He=N.useRef(null),[Fe,_]=N.useState(null),[B,J]=N.useState(null),ae=_i(M,Object.values(M)),se=Yi("DndDescribedBy",f),w=N.useMemo(()=>re.getEnabled(),[re]),j=Wy(E),{droppableRects:V,measureDroppableContainers:$,measuringScheduled:le}=_y(w,{dragging:Q,dependencies:[te.x,te.y],config:j.droppable}),ee=jy(F,H),be=N.useMemo(()=>B?vr(B):null,[B]),Le=Ga(),we=Uy(ee,j.draggable.measure);Py({activeNode:H!=null?F.get(H):null,config:Le.layoutShiftCompensation,initialRect:we,measure:j.draggable.measure});const ye=ng(ee,j.draggable.measure,we),un=ng(ee?ee.parentElement:null),yt=N.useRef({activatorEvent:null,active:null,activeNode:ee,collisionRect:null,collisions:null,droppableRects:V,draggableNodes:F,draggingNode:null,draggingNodeRect:null,droppableContainers:re,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),xn=re.getNodeFor((i=yt.current.over)==null?void 0:i.id),it=Vy({measure:j.dragOverlay.measure}),dn=(s=it.nodeRef.current)!=null?s:ee,fn=Q?(u=it.rect)!=null?u:ye:null,Zi=!!(it.nodeRef.current&&it.rect),jl=qy(Zi?null:ye),va=Pg(dn?vt(dn):null),qt=Hy(Q?xn??ee:null),Xn=Xy(qt),Ha=am(A,{transform:{x:te.x-jl.x,y:te.y-jl.y,scaleX:1,scaleY:1},activatorEvent:B,active:ze,activeNodeRect:ye,containerNodeRect:un,draggingNodeRect:fn,over:yt.current.over,overlayNodeRect:it.rect,scrollableAncestors:qt,scrollableAncestorRects:Xn,windowRect:va}),Xi=be?kl(be,te):null,dt=Yy(qt),Dr=lg(dt),Vi=lg(dt,[ye]),Sn=kl(Ha,Dr),tn=fn?dy(fn,Ha):null,ya=ze&&tn?x({active:ze,collisionRect:tn,droppableRects:V,droppableContainers:w,pointerCoordinates:Xi}):null,Ml=iy(ya,"id"),[pn,Qi]=N.useState(null),xa=Zi?Ha:kl(Ha,Vi),gt=cy(xa,(d=pn==null?void 0:pn.rect)!=null?d:null,ye),Ht=N.useRef(null),ft=N.useCallback((Ze,Xe)=>{let{sensor:tt,options:xt}=Xe;if(He.current==null)return;const St=F.get(He.current);if(!St)return;const pt=Ze.nativeEvent,wt=new tt({active:He.current,activeNode:St,event:pt,options:xt,context:yt,onAbort(We){if(!F.get(We))return;const{onDragAbort:Rt}=ae.current,Gt={id:We};Rt==null||Rt(Gt),G({type:"onDragAbort",event:Gt})},onPending(We,nn,Rt,Gt){if(!F.get(We))return;const{onDragPending:Cn}=ae.current,an={id:We,constraint:nn,initialCoordinates:Rt,offset:Gt};Cn==null||Cn(an),G({type:"onDragPending",event:an})},onStart(We){const nn=He.current;if(nn==null)return;const Rt=F.get(nn);if(!Rt)return;const{onDragStart:Gt}=ae.current,wn={activatorEvent:pt,active:{id:nn,data:Rt.data,rect:me}};ki.unstable_batchedUpdates(()=>{Gt==null||Gt(wn),Z(ma.Initializing),Y({type:et.DragStart,initialCoordinates:We,active:nn}),G({type:"onDragStart",event:wn}),_(Ht.current),J(pt)})},onMove(We){Y({type:et.DragMove,coordinates:We})},onEnd:Yt(et.DragEnd),onCancel:Yt(et.DragCancel)});Ht.current=wt;function Yt(We){return async function(){const{active:Rt,collisions:Gt,over:wn,scrollAdjustedTranslate:Cn}=yt.current;let an=null;if(Rt&&Cn){const{cancelDrop:Vn}=ae.current;an={activatorEvent:pt,active:Rt,collisions:Gt,delta:Cn,over:wn},We===et.DragEnd&&typeof Vn=="function"&&await Promise.resolve(Vn(an))&&(We=et.DragCancel)}He.current=null,ki.unstable_batchedUpdates(()=>{Y({type:We}),Z(ma.Uninitialized),Qi(null),_(null),J(null),Ht.current=null;const Vn=We===et.DragEnd?"onDragEnd":"onDragCancel";if(an){const Zt=ae.current[Vn];Zt==null||Zt(an),G({type:Vn,event:an})}})}}},[F]),kr=N.useCallback((Ze,Xe)=>(tt,xt)=>{const St=tt.nativeEvent,pt=F.get(xt);if(He.current!==null||!pt||St.dndKit||St.defaultPrevented)return;const wt={active:pt};Ze(tt,Xe.options,wt)===!0&&(St.dndKit={capturedBy:Xe.sensor},He.current=xt,ft(tt,Xe))},[F,ft]),Ki=My(y,kr);Gy(y),on(()=>{ye&&I===ma.Initializing&&Z(ma.Initialized)},[ye,I]),N.useEffect(()=>{const{onDragMove:Ze}=ae.current,{active:Xe,activatorEvent:tt,collisions:xt,over:St}=yt.current;if(!Xe||!tt)return;const pt={active:Xe,activatorEvent:tt,collisions:xt,delta:{x:Sn.x,y:Sn.y},over:St};ki.unstable_batchedUpdates(()=>{Ze==null||Ze(pt),G({type:"onDragMove",event:pt})})},[Sn.x,Sn.y]),N.useEffect(()=>{const{active:Ze,activatorEvent:Xe,collisions:tt,droppableContainers:xt,scrollAdjustedTranslate:St}=yt.current;if(!Ze||He.current==null||!Xe||!St)return;const{onDragOver:pt}=ae.current,wt=xt.get(Ml),Yt=wt&&wt.rect.current?{id:wt.id,rect:wt.rect.current,data:wt.data,disabled:wt.disabled}:null,We={active:Ze,activatorEvent:Xe,collisions:tt,delta:{x:St.x,y:St.y},over:Yt};ki.unstable_batchedUpdates(()=>{Qi(Yt),pt==null||pt(We),G({type:"onDragOver",event:We})})},[Ml]),on(()=>{yt.current={activatorEvent:B,active:ze,activeNode:ee,collisionRect:tn,collisions:ya,droppableRects:V,draggableNodes:F,draggingNode:dn,draggingNodeRect:fn,droppableContainers:re,over:pn,scrollableAncestors:qt,scrollAdjustedTranslate:Sn},me.current={initial:fn,translated:tn}},[ze,ee,ya,tn,F,dn,fn,V,re,pn,qt,Sn]),Ry({...Le,delta:te,draggingRect:tn,pointerCoordinates:Xi,scrollableAncestors:qt,scrollableAncestorRects:Xn});const Rr=N.useMemo(()=>({active:ze,activeNode:ee,activeNodeRect:ye,activatorEvent:B,collisions:ya,containerNodeRect:un,dragOverlay:it,draggableNodes:F,droppableContainers:re,droppableRects:V,over:pn,measureDroppableContainers:$,scrollableAncestors:qt,scrollableAncestorRects:Xn,measuringConfiguration:j,measuringScheduled:le,windowRect:va}),[ze,ee,ye,B,ya,un,it,F,re,V,pn,$,qt,Xn,j,le,va]),Ya=N.useMemo(()=>({activatorEvent:B,activators:Ki,active:ze,activeNodeRect:ye,ariaDescribedById:{draggable:se},dispatch:Y,draggableNodes:F,over:pn,measureDroppableContainers:$}),[B,Ki,ze,ye,Y,se,F,pn,$]);return qe.createElement(Yg.Provider,{value:K},qe.createElement(Gi.Provider,{value:Ya},qe.createElement(nm.Provider,{value:Rr},qe.createElement(Ar.Provider,{value:gt},b)),qe.createElement(Fy,{disabled:(h==null?void 0:h.restoreFocus)===!1})),qe.createElement(W1,{...h,hiddenTextDescribedById:se}));function Ga(){const Ze=(Fe==null?void 0:Fe.autoScrollEnabled)===!1,Xe=typeof g=="object"?g.enabled===!1:g===!1,tt=Q&&!Ze&&!Xe;return typeof g=="object"?{...g,enabled:tt}:{enabled:tt}}}),tx=N.createContext(null),sg="button",nx="Draggable";function ax(o){let{id:l,data:i,disabled:s=!1,attributes:u}=o;const d=Yi(nx),{activators:f,activatorEvent:h,active:g,activeNodeRect:b,ariaDescribedById:y,draggableNodes:x,over:E}=N.useContext(Gi),{role:A=sg,roleDescription:M="draggable",tabIndex:z=0}=u??{},X=(g==null?void 0:g.id)===l,Y=N.useContext(X?Ar:tx),[G,K]=gr(),[I,Z]=gr(),Q=Zy(f,l),H=_i(i);on(()=>(x.set(l,{id:l,key:d,node:G,activatorNode:I,data:H}),()=>{const te=x.get(l);te&&te.key===d&&x.delete(l)}),[x,l]);const F=N.useMemo(()=>({role:A,tabIndex:z,"aria-disabled":s,"aria-pressed":X&&A===sg?!0:void 0,"aria-roledescription":M,"aria-describedby":y.draggable}),[s,A,z,X,M,y.draggable]);return{active:g,activatorEvent:h,activeNodeRect:b,attributes:F,isDragging:X,listeners:s?void 0:Q,node:G,over:E,setNodeRef:K,setActivatorNodeRef:Z,transform:Y}}function lm(){return N.useContext(nm)}const lx="Droppable",ix={timeout:25};function sx(o){let{data:l,disabled:i=!1,id:s,resizeObserverConfig:u}=o;const d=Yi(lx),{active:f,dispatch:h,over:g,measureDroppableContainers:b}=N.useContext(Gi),y=N.useRef({disabled:i}),x=N.useRef(!1),E=N.useRef(null),A=N.useRef(null),{disabled:M,updateMeasurementsFor:z,timeout:X}={...ix,...u},Y=_i(z??s),G=N.useCallback(()=>{if(!x.current){x.current=!0;return}A.current!=null&&clearTimeout(A.current),A.current=setTimeout(()=>{b(Array.isArray(Y.current)?Y.current:[Y.current]),A.current=null},X)},[X]),K=Er({callback:G,disabled:M||!f}),I=N.useCallback((F,te)=>{K&&(te&&(K.unobserve(te),x.current=!1),F&&K.observe(F))},[K]),[Z,Q]=gr(I),H=_i(l);return N.useEffect(()=>{!K||!Z.current||(K.disconnect(),x.current=!1,K.observe(Z.current))},[Z,K]),N.useEffect(()=>(h({type:et.RegisterDroppable,element:{id:s,key:d,disabled:i,node:Z,rect:E,data:H}}),()=>h({type:et.UnregisterDroppable,key:d,id:s})),[s]),N.useEffect(()=>{i!==y.current.disabled&&(h({type:et.SetDroppableDisabled,id:s,key:d,disabled:i}),y.current.disabled=i)},[s,d,i,h]),{active:f,rect:E,isOver:(g==null?void 0:g.id)===s,node:Z,over:g,setNodeRef:Q}}function rx(o){let{animation:l,children:i}=o;const[s,u]=N.useState(null),[d,f]=N.useState(null),h=mr(i);return!i&&!s&&h&&u(h),on(()=>{if(!d)return;const g=s==null?void 0:s.key,b=s==null?void 0:s.props.id;if(g==null||b==null){u(null);return}Promise.resolve(l(b,d)).then(()=>{u(null)})},[l,s,d]),qe.createElement(qe.Fragment,null,i,s?N.cloneElement(s,{ref:f}):null)}const ox={x:0,y:0,scaleX:1,scaleY:1};function cx(o){let{children:l}=o;return qe.createElement(Gi.Provider,{value:tm},qe.createElement(Ar.Provider,{value:ox},l))}const ux={position:"fixed",touchAction:"none"},dx=o=>Tr(o)?"transform 250ms ease":void 0,fx=N.forwardRef((o,l)=>{let{as:i,activatorEvent:s,adjustScale:u,children:d,className:f,rect:h,style:g,transform:b,transition:y=dx}=o;if(!h)return null;const x=u?b:{...b,scaleX:1,scaleY:1},E={...ux,width:h.width,height:h.height,top:h.top,left:h.left,transform:ba.Transform.toString(x),transformOrigin:u&&s?ny(s,h):void 0,transition:typeof y=="function"?y(s):y,...g};return qe.createElement(i,{className:f,style:E,ref:l},d)}),px=o=>l=>{let{active:i,dragOverlay:s}=l;const u={},{styles:d,className:f}=o;if(d!=null&&d.active)for(const[h,g]of Object.entries(d.active))g!==void 0&&(u[h]=i.node.style.getPropertyValue(h),i.node.style.setProperty(h,g));if(d!=null&&d.dragOverlay)for(const[h,g]of Object.entries(d.dragOverlay))g!==void 0&&s.node.style.setProperty(h,g);return f!=null&&f.active&&i.node.classList.add(f.active),f!=null&&f.dragOverlay&&s.node.classList.add(f.dragOverlay),function(){for(const[g,b]of Object.entries(u))i.node.style.setProperty(g,b);f!=null&&f.active&&i.node.classList.remove(f.active)}},hx=o=>{let{transform:{initial:l,final:i}}=o;return[{transform:ba.Transform.toString(l)},{transform:ba.Transform.toString(i)}]},gx={duration:250,easing:"ease",keyframes:hx,sideEffects:px({styles:{active:{opacity:"0"}}})};function mx(o){let{config:l,draggableNodes:i,droppableContainers:s,measuringConfiguration:u}=o;return Nr((d,f)=>{if(l===null)return;const h=i.get(d);if(!h)return;const g=h.node.current;if(!g)return;const b=em(f);if(!b)return;const{transform:y}=vt(f).getComputedStyle(f),x=Zg(y);if(!x)return;const E=typeof l=="function"?l:bx(l);return $g(g,u.draggable.measure),E({active:{id:d,data:h.data,node:g,rect:u.draggable.measure(g)},draggableNodes:i,dragOverlay:{node:f,rect:u.dragOverlay.measure(b)},droppableContainers:s,measuringConfiguration:u,transform:x})})}function bx(o){const{duration:l,easing:i,sideEffects:s,keyframes:u}={...gx,...o};return d=>{let{active:f,dragOverlay:h,transform:g,...b}=d;if(!l)return;const y={x:h.rect.left-f.rect.left,y:h.rect.top-f.rect.top},x={scaleX:g.scaleX!==1?f.rect.width*g.scaleX/h.rect.width:1,scaleY:g.scaleY!==1?f.rect.height*g.scaleY/h.rect.height:1},E={x:g.x-y.x,y:g.y-y.y,...x},A=u({...b,active:f,dragOverlay:h,transform:{initial:g,final:E}}),[M]=A,z=A[A.length-1];if(JSON.stringify(M)===JSON.stringify(z))return;const X=s==null?void 0:s({active:f,dragOverlay:h,...b}),Y=h.node.animate(A,{duration:l,easing:i,fill:"forwards"});return new Promise(G=>{Y.onfinish=()=>{X==null||X(),G()}})}}let rg=0;function vx(o){return N.useMemo(()=>{if(o!=null)return rg++,rg},[o])}const yx=qe.memo(o=>{let{adjustScale:l=!1,children:i,dropAnimation:s,style:u,transition:d,modifiers:f,wrapperElement:h="div",className:g,zIndex:b=999}=o;const{activatorEvent:y,active:x,activeNodeRect:E,containerNodeRect:A,draggableNodes:M,droppableContainers:z,dragOverlay:X,over:Y,measuringConfiguration:G,scrollableAncestors:K,scrollableAncestorRects:I,windowRect:Z}=lm(),Q=N.useContext(Ar),H=vx(x==null?void 0:x.id),F=am(f,{activatorEvent:y,active:x,activeNodeRect:E,containerNodeRect:A,draggingNodeRect:X.rect,over:Y,overlayNodeRect:X.rect,scrollableAncestors:K,scrollableAncestorRects:I,transform:Q,windowRect:Z}),te=Du(E),re=mx({config:s,draggableNodes:M,droppableContainers:z,measuringConfiguration:G}),ce=te?X.setRef:void 0;return qe.createElement(cx,null,qe.createElement(rx,{animation:re},x&&H?qe.createElement(fx,{key:H,id:x.id,ref:ce,as:h,activatorEvent:y,adjustScale:l,className:g,transition:d,rect:te,style:{zIndex:b,...u},transform:F},i):null))});function im(o,l,i){const s=o.slice();return s.splice(i<0?s.length+i:i,0,s.splice(l,1)[0]),s}function xx(o,l){return o.reduce((i,s,u)=>{const d=l.get(s);return d&&(i[u]=d),i},Array(o.length))}function or(o){return o!==null&&o>=0}function Sx(o,l){if(o===l)return!0;if(o.length!==l.length)return!1;for(let i=0;i<o.length;i++)if(o[i]!==l[i])return!1;return!0}function wx(o){return typeof o=="boolean"?{draggable:o,droppable:o}:o}const sm=o=>{let{rects:l,activeIndex:i,overIndex:s,index:u}=o;const d=im(l,s,i),f=l[u],h=d[u];return!h||!f?null:{x:h.left-f.left,y:h.top-f.top,scaleX:h.width/f.width,scaleY:h.height/f.height}},cr={scaleX:1,scaleY:1},Cx=o=>{var l;let{activeIndex:i,activeNodeRect:s,index:u,rects:d,overIndex:f}=o;const h=(l=d[i])!=null?l:s;if(!h)return null;if(u===i){const b=d[f];return b?{x:0,y:i<f?b.top+b.height-(h.top+h.height):b.top-h.top,...cr}:null}const g=Nx(d,u,i);return u>i&&u<=f?{x:0,y:-h.height-g,...cr}:u<i&&u>=f?{x:0,y:h.height+g,...cr}:{x:0,y:0,...cr}};function Nx(o,l,i){const s=o[l],u=o[l-1],d=o[l+1];return s?i<l?u?s.top-(u.top+u.height):d?d.top-(s.top+s.height):0:d?d.top-(s.top+s.height):u?s.top-(u.top+u.height):0:0}const rm="Sortable",om=qe.createContext({activeIndex:-1,containerId:rm,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:sm,disabled:{draggable:!1,droppable:!1}});function Tx(o){let{children:l,id:i,items:s,strategy:u=sm,disabled:d=!1}=o;const{active:f,dragOverlay:h,droppableRects:g,over:b,measureDroppableContainers:y}=lm(),x=Yi(rm,i),E=h.rect!==null,A=N.useMemo(()=>s.map(Q=>typeof Q=="object"&&"id"in Q?Q.id:Q),[s]),M=f!=null,z=f?A.indexOf(f.id):-1,X=b?A.indexOf(b.id):-1,Y=N.useRef(A),G=!Sx(A,Y.current),K=X!==-1&&z===-1||G,I=wx(d);on(()=>{G&&M&&y(A)},[G,A,M,y]),N.useEffect(()=>{Y.current=A},[A]);const Z=N.useMemo(()=>({activeIndex:z,containerId:x,disabled:I,disableTransforms:K,items:A,overIndex:X,useDragOverlay:E,sortedRects:xx(A,g),strategy:u}),[z,x,I.draggable,I.droppable,K,A,X,g,E,u]);return qe.createElement(om.Provider,{value:Z},l)}const Ex=o=>{let{id:l,items:i,activeIndex:s,overIndex:u}=o;return im(i,s,u).indexOf(l)},Ax=o=>{let{containerId:l,isSorting:i,wasDragging:s,index:u,items:d,newIndex:f,previousItems:h,previousContainerId:g,transition:b}=o;return!b||!s||h!==d&&u===f?!1:i?!0:f!==u&&l===g},Dx={duration:200,easing:"ease"},cm="transform",kx=ba.Transition.toString({property:cm,duration:0,easing:"linear"}),Rx={roleDescription:"sortable"};function Ox(o){let{disabled:l,index:i,node:s,rect:u}=o;const[d,f]=N.useState(null),h=N.useRef(i);return on(()=>{if(!l&&i!==h.current&&s.current){const g=u.current;if(g){const b=zl(s.current,{ignoreTransform:!0}),y={x:g.left-b.left,y:g.top-b.top,scaleX:g.width/b.width,scaleY:g.height/b.height};(y.x||y.y)&&f(y)}}i!==h.current&&(h.current=i)},[l,i,s,u]),N.useEffect(()=>{d&&f(null)},[d]),d}function zx(o){let{animateLayoutChanges:l=Ax,attributes:i,disabled:s,data:u,getNewIndex:d=Ex,id:f,strategy:h,resizeObserverConfig:g,transition:b=Dx}=o;const{items:y,containerId:x,activeIndex:E,disabled:A,disableTransforms:M,sortedRects:z,overIndex:X,useDragOverlay:Y,strategy:G}=N.useContext(om),K=jx(s,A),I=y.indexOf(f),Z=N.useMemo(()=>({sortable:{containerId:x,index:I,items:y},...u}),[x,u,I,y]),Q=N.useMemo(()=>y.slice(y.indexOf(f)),[y,f]),{rect:H,node:F,isOver:te,setNodeRef:re}=sx({id:f,data:Z,disabled:K.droppable,resizeObserverConfig:{updateMeasurementsFor:Q,...g}}),{active:ce,activatorEvent:me,activeNodeRect:ze,attributes:He,setNodeRef:Fe,listeners:_,isDragging:B,over:J,setActivatorNodeRef:ae,transform:se}=ax({id:f,data:Z,attributes:{...Rx,...i},disabled:K.draggable}),w=q1(re,Fe),j=!!ce,V=j&&!M&&or(E)&&or(X),$=!Y&&B,le=$&&V?se:null,be=V?le??(h??G)({rects:z,activeNodeRect:ze,activeIndex:E,overIndex:X,index:I}):null,Le=or(E)&&or(X)?d({id:f,items:y,activeIndex:E,overIndex:X}):I,we=ce==null?void 0:ce.id,ye=N.useRef({activeId:we,items:y,newIndex:Le,containerId:x}),un=y!==ye.current.items,yt=l({active:ce,containerId:x,isDragging:B,isSorting:j,id:f,index:I,items:y,newIndex:ye.current.newIndex,previousItems:ye.current.items,previousContainerId:ye.current.containerId,transition:b,wasDragging:ye.current.activeId!=null}),xn=Ox({disabled:!yt,index:I,node:F,rect:H});return N.useEffect(()=>{j&&ye.current.newIndex!==Le&&(ye.current.newIndex=Le),x!==ye.current.containerId&&(ye.current.containerId=x),y!==ye.current.items&&(ye.current.items=y)},[j,Le,x,y]),N.useEffect(()=>{if(we===ye.current.activeId)return;if(we!=null&&ye.current.activeId==null){ye.current.activeId=we;return}const dn=setTimeout(()=>{ye.current.activeId=we},50);return()=>clearTimeout(dn)},[we]),{active:ce,activeIndex:E,attributes:He,data:Z,rect:H,index:I,newIndex:Le,items:y,isOver:te,isSorting:j,isDragging:B,listeners:_,node:F,overIndex:X,over:J,setNodeRef:w,setActivatorNodeRef:ae,setDroppableNodeRef:re,setDraggableNodeRef:Fe,transform:xn??be,transition:it()};function it(){if(xn||un&&ye.current.newIndex===I)return kx;if(!($&&!Tr(me)||!b)&&(j||yt))return ba.Transition.toString({...b,property:cm})}}function jx(o,l){var i,s;return typeof o=="boolean"?{draggable:o,droppable:!1}:{draggable:(i=o==null?void 0:o.draggable)!=null?i:l.draggable,droppable:(s=o==null?void 0:o.droppable)!=null?s:l.droppable}}Ne.Down,Ne.Right,Ne.Up,Ne.Left;function Mx({prd:o,projectId:l,onClose:i,onSave:s}){const[u,d]=N.useState((o==null?void 0:o.title)??""),[f,h]=N.useState((o==null?void 0:o.content)??""),g=N.useRef();function b(x){const E=x.target.files[0];if(!E)return;const A=E.name.replace(/\.md$/i,"").replace(/[-_]/g," "),M=new FileReader;M.onload=z=>{u||d(A),h(z.target.result)},M.readAsText(E)}function y(){const x=u.trim();x&&s({title:x,content:f})}return v.jsx("div",{className:"prd-editor-scrim",onClick:x=>x.target===x.currentTarget&&i(),children:v.jsxs("div",{className:"prd-editor-modal",children:[v.jsxs("div",{className:"prd-editor-header",children:[v.jsx("span",{className:"prd-editor-title",children:o?"Edit PRD":"New PRD"}),v.jsx("button",{className:"prd-editor-close",onClick:i,children:"✕"})]}),v.jsxs("div",{className:"prd-editor-body",children:[v.jsxs("div",{className:"prd-editor-field",children:[v.jsx("label",{className:"prd-editor-label",children:"Title"}),v.jsx("input",{className:"prd-editor-input",type:"text",placeholder:"e.g. Producer Filter Modal",value:u,onChange:x=>d(x.target.value),autoFocus:!0})]}),v.jsxs("div",{className:"prd-editor-field prd-editor-field--grow",children:[v.jsxs("div",{className:"prd-editor-label-row",children:[v.jsx("label",{className:"prd-editor-label",children:"Content"}),v.jsx("button",{className:"prd-editor-load-file",onClick:()=>g.current.click(),children:"Load from .md file"}),v.jsx("input",{ref:g,type:"file",accept:".md,.txt",style:{display:"none"},onChange:b})]}),v.jsx("textarea",{className:"prd-editor-textarea",placeholder:"Paste your PRD markdown here…",value:f,onChange:x=>h(x.target.value)})]})]}),v.jsxs("div",{className:"prd-editor-footer",children:[v.jsx("button",{className:"prd-editor-btn prd-editor-btn--cancel",onClick:i,children:"Cancel"}),v.jsx("button",{className:"prd-editor-btn prd-editor-btn--save",onClick:y,disabled:!u.trim(),children:o?"Save changes":"Create PRD"})]})]})})}function um(o){const l=Math.floor((Date.now()-new Date(o))/6e4);if(l<1)return"just now";if(l<60)return`${l}m ago`;const i=Math.floor(l/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}function _x({status:o}){return v.jsx("span",{className:`prd-status prd-status--${o}`,children:Lg[o]})}function Ux({prd:o,onEdit:l,onDelete:i,onOpen:s,isDragging:u}){const{attributes:d,listeners:f,setNodeRef:h,transform:g,transition:b}=zx({id:o.id}),y={transform:ba.Transform.toString(g),transition:b,opacity:u?.4:1};return v.jsxs("div",{ref:h,style:y,className:"kanban-card",...d,...f,children:[v.jsx("div",{className:"kanban-card-title",children:o.title}),v.jsx("div",{className:"kanban-card-meta",children:um(o.updatedAt)}),v.jsxs("div",{className:"kanban-card-actions",onPointerDown:x=>x.stopPropagation(),children:[v.jsx("button",{className:"kanban-card-btn",onClick:()=>s(o),children:"Open →"}),v.jsx("button",{className:"kanban-card-btn",onClick:()=>l(o),children:"Edit"}),v.jsx("button",{className:"kanban-card-btn kanban-card-btn--danger",onClick:()=>i(o.id),children:"Delete"})]})]})}function Lx({status:o,prds:l,onEdit:i,onDelete:s,onOpen:u,activeId:d}){return v.jsxs("div",{className:"kanban-col",children:[v.jsxs("div",{className:"kanban-col-header",children:[v.jsx("span",{className:"kanban-col-title",children:Lg[o]}),v.jsx("span",{className:"kanban-col-count",children:l.length})]}),v.jsx(Tx,{items:l.map(f=>f.id),strategy:Cx,children:v.jsxs("div",{className:"kanban-col-cards",children:[l.map(f=>v.jsx(Ux,{prd:f,onEdit:i,onDelete:s,onOpen:u,isDragging:d===f.id},f.id)),l.length===0&&v.jsx("div",{className:"kanban-col-empty",children:"Drop here"})]})})]})}function Bx({projectId:o,prds:l,onNavigate:i,onCreatePrd:s,onUpdatePrd:u,onDeletePrd:d}){const f=Bg(o),h=l.filter(Z=>Z.projectId===o),[g,b]=N.useState("kanban"),[y,x]=N.useState(!1),[E,A]=N.useState(null),[M,z]=N.useState(null),X=ey(P1(Au,{activationConstraint:{distance:6}}));function Y({active:Z}){z(Z.id)}function G({active:Z,over:Q}){if(z(null),!Q||Z.id===Q.id)return;const H=h.find(re=>re.id===Z.id);if(!H)return;const F=h.find(re=>re.id===Q.id),te=F?F.status:Q.id;Kh.includes(te)&&H.status!==te&&u(Z.id,{status:te})}function K({active:Z,over:Q}){if(!Q)return;const H=h.find(te=>te.id===Z.id),F=h.find(te=>te.id===Q.id);!H||!F||H.status!==F.status&&u(Z.id,{status:F.status})}const I=M?h.find(Z=>Z.id===M):null;return v.jsxs("div",{className:"project-view",children:[v.jsxs("header",{className:"project-view-header",children:[v.jsx("button",{className:"project-back-btn",onClick:()=>i({page:"projects"}),children:"← Projects"}),v.jsxs("div",{className:"project-view-title",children:[v.jsx("span",{className:"project-view-icon",children:f==null?void 0:f.icon}),v.jsx("span",{className:"project-view-name",children:f==null?void 0:f.name})]}),v.jsxs("div",{className:"project-view-actions",children:[v.jsxs("div",{className:"view-toggle",children:[v.jsx("button",{className:`view-toggle-btn ${g==="list"?"active":""}`,onClick:()=>b("list"),children:"List"}),v.jsx("button",{className:`view-toggle-btn ${g==="kanban"?"active":""}`,onClick:()=>b("kanban"),children:"Kanban"})]}),v.jsx("button",{className:"new-prd-btn",onClick:()=>{A(null),x(!0)},children:"+ New PRD"})]})]}),v.jsx("div",{className:"project-view-body",children:g==="list"?v.jsx("div",{className:"prd-list",children:h.length===0?v.jsx("div",{className:"prd-list-empty",children:"No PRDs yet — create one to get started."}):v.jsxs("table",{className:"prd-table",children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{children:"Title"}),v.jsx("th",{children:"Status"}),v.jsx("th",{children:"Updated"}),v.jsx("th",{})]})}),v.jsx("tbody",{children:h.map(Z=>v.jsxs("tr",{children:[v.jsx("td",{className:"prd-table-title",children:Z.title}),v.jsx("td",{children:v.jsx(_x,{status:Z.status})}),v.jsx("td",{className:"prd-table-date",children:um(Z.updatedAt)}),v.jsxs("td",{className:"prd-table-actions",children:[v.jsx("button",{className:"prd-action-btn",onClick:()=>i({page:"builder",prdId:Z.id}),children:"Open →"}),v.jsx("button",{className:"prd-action-btn",onClick:()=>{A(Z),x(!0)},children:"Edit"}),v.jsx("button",{className:"prd-action-btn prd-action-btn--danger",onClick:()=>d(Z.id),children:"Delete"})]})]},Z.id))})]})}):v.jsxs(ex,{sensors:X,collisionDetection:sy,onDragStart:Y,onDragOver:K,onDragEnd:G,children:[v.jsx("div",{className:"kanban-board",children:Kh.map(Z=>v.jsx(Lx,{status:Z,prds:h.filter(Q=>Q.status===Z),onEdit:Q=>{A(Q),x(!0)},onDelete:Q=>d(Q),onOpen:Q=>i({page:"builder",prdId:Q.id}),activeId:M},Z))}),v.jsx(yx,{children:I?v.jsx("div",{className:"kanban-card kanban-card--overlay",children:v.jsx("div",{className:"kanban-card-title",children:I.title})}):null})]})}),y&&v.jsx(Mx,{prd:E,projectId:o,onClose:()=>x(!1),onSave:Z=>{E?u(E.id,Z):s(o,Z),x(!1)}})]})}const dm=o=>`ennabl_bs_${o}`;function fm(o){try{return JSON.parse(localStorage.getItem(dm(o)))||{}}catch{return{}}}function og(o,l){try{const i=fm(o);localStorage.setItem(dm(o),JSON.stringify({...i,...l}))}catch{}}function qx(){const[o,l]=N.useState(()=>!!Ng()),[i,s]=N.useState(Qh),[u,d]=N.useState(!1),[f,h]=N.useState({page:"projects"}),[g,b]=N.useState([]),[y,x]=N.useState(!1),[E,A]=N.useState(null),[M,z]=N.useState(null),[X,Y]=N.useState([]),[G,K]=N.useState(null),[I,Z]=N.useState(kv),[Q,H]=N.useState(0),F=i&&!u;N.useEffect(()=>{if(!o||!i&&!u)return;async function B(){if(F)try{const J=await O1();b(J)}catch{Ih(),b(iu())}else Ih(),b(iu());x(!0)}B()},[o,i,u]);function te(B){if(B.page==="builder"&&B.prdId){const J=g.find(ae=>ae.id===B.prdId);J&&re(J)}h(B)}function re(B){const J=fm(B.id);A({id:B.id,name:B.title,content:B.content}),Y(J.messages||[]),z(J.code||null),K(Jv(B.title))}N.useEffect(()=>{E!=null&&E.id&&og(E.id,{messages:X})},[X,E==null?void 0:E.id]),N.useEffect(()=>{E!=null&&E.id&&M&&og(E.id,{code:M})},[M,E==null?void 0:E.id]);async function ce(B,J){if(F){const ae=await z1({projectId:B,...J});b(se=>[ae,...se])}else{const ae={id:`prd-${Date.now()}`,projectId:B,status:"backlog",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),...J};b(se=>{const w=[ae,...se];return ur(w),w})}}async function me(B,J){if(F){const ae=await j1(B,{...J,updated:new Date().toISOString()});b(se=>se.map(w=>w.id===B?ae:w))}else b(ae=>{const se=ae.map(w=>w.id===B?{...w,...J,updatedAt:new Date().toISOString()}:w);return ur(se),se})}async function ze(B){F&&await M1(B),b(J=>{const ae=J.filter(se=>se.id!==B);return F||ur(ae),ae})}function He(B,J){if(z(B),E){const se=[Rv({prdName:E.name,code:B,iteration:((G==null?void 0:G.iterations)??0)+1}),...I].slice(0,50);if(Z(se),Lh(se),J){const j=`**${new Date().toISOString().slice(0,10)} · iter ${((G==null?void 0:G.iterations)??0)+1}:** ${J}`,V=g.find(ee=>ee.id===E.id),$=(V==null?void 0:V.content)||E.content||"",le=$.includes("## Build log")?$+`
`+j:$+`

## Build log

`+j;me(E.id,{content:le}),A(ee=>ee&&{...ee,content:le})}}}function Fe({inputTokens:B,outputTokens:J,cacheReadTokens:ae,componentsUsed:se}){K(w=>{if(!w)return w;const j={...w,iterations:w.iterations+1,inputTokens:w.inputTokens+B,outputTokens:w.outputTokens+J,cacheReadTokens:w.cacheReadTokens+ae,componentsUsed:[...new Set([...w.componentsUsed,...se])]};return j.cost=Iv(j),nu(j),j})}function _(){Z([]),Lh([])}return o?!i&&!u?v.jsx(_1,{onDone:()=>{Qh()?s(!0):d(!0)}}):y?f.page==="projects"?v.jsx(B1,{prds:g,onNavigate:te}):f.page==="project"?v.jsx(Bx,{projectId:f.projectId,prds:g,onNavigate:te,onCreatePrd:ce,onUpdatePrd:me,onDeletePrd:ze}):v.jsxs("div",{className:"app",children:[v.jsxs("header",{className:"app-header",children:[v.jsxs("div",{className:"app-header-left",children:[v.jsx("button",{className:"app-back-btn",onClick:()=>te({page:"projects"}),children:"← Projects"}),v.jsx("span",{className:"app-header-sep"}),v.jsx("span",{className:"app-logo",children:"ennabl"}),v.jsx("span",{className:"app-logo-suffix",children:"builder"}),E&&v.jsx("span",{className:"app-prd-badge",children:E.name})]}),v.jsx(L1,{prds:g,onSelect:re})]}),v.jsxs("main",{className:"app-panels",children:[v.jsx(Uv,{code:M,prd:E,history:I,onHistoryClear:_,onInitDesign:()=>H(B=>B+1)}),v.jsx("div",{className:"app-divider"}),v.jsx(u1,{prd:E,messages:X,setMessages:Y,onCodeGenerated:He,onIterationComplete:Fe,session:G,onSessionUpdate:K,initTrigger:Q})]})]}):v.jsx("div",{style:{height:"100dvh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",color:"var(--text-muted)",fontSize:13},children:"Loading…"}):v.jsx(d1,{onDone:()=>l(!0)})}Ub.createRoot(document.getElementById("root")).render(v.jsx(N.StrictMode,{children:v.jsx(qx,{})}));
