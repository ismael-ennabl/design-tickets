var tg=Object.defineProperty;var Tf=s=>{throw TypeError(s)};var ng=(s,l,i)=>l in s?tg(s,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[l]=i;var Ue=(s,l,i)=>ng(s,typeof l!="symbol"?l+"":l,i),ag=(s,l,i)=>l.has(s)||Tf("Cannot "+i);var Df=(s,l,i)=>l.has(s)?Tf("Cannot add the same private member more than once"):l instanceof WeakSet?l.add(s):l.set(s,i);var Ni=(s,l,i)=>(ag(s,l,"access private method"),i);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(u){if(u.ep)return;u.ep=!0;const d=i(u);fetch(u.href,d)}})();function lg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Vc={exports:{}},Ti={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function ig(){if(Mf)return Ti;Mf=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function i(r,u,d){var f=null;if(d!==void 0&&(f=""+d),u.key!==void 0&&(f=""+u.key),"key"in u){d={};for(var m in u)m!=="key"&&(d[m]=u[m])}else d=u;return u=d.ref,{$$typeof:s,type:r,key:f,ref:u!==void 0?u:null,props:d}}return Ti.Fragment=l,Ti.jsx=i,Ti.jsxs=i,Ti}var kf;function sg(){return kf||(kf=1,Vc.exports=ig()),Vc.exports}var b=sg(),Yc={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf;function rg(){if(Rf)return pe;Rf=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),T=Symbol.iterator;function A(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,Y={};function B(E,_,K){this.props=E,this.context=_,this.refs=Y,this.updater=K||O}B.prototype.isReactComponent={},B.prototype.setState=function(E,_){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,_,"setState")},B.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function Z(){}Z.prototype=B.prototype;function Q(E,_,K){this.props=E,this.context=_,this.refs=Y,this.updater=K||O}var X=Q.prototype=new Z;X.constructor=Q,D(X,B.prototype),X.isPureReactComponent=!0;var I=Array.isArray;function F(){}var q={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function oe(E,_,K){var J=K.ref;return{$$typeof:s,type:E,key:_,ref:J!==void 0?J:null,props:K}}function de(E,_){return oe(E.type,_,E.props)}function ue(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function ye(E){var _={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(K){return _[K]})}var Te=/\/+/g;function _e(E,_){return typeof E=="object"&&E!==null&&E.key!=null?ye(""+E.key):_.toString(36)}function ae(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(F,F):(E.status="pending",E.then(function(_){E.status==="pending"&&(E.status="fulfilled",E.value=_)},function(_){E.status==="pending"&&(E.status="rejected",E.reason=_)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function M(E,_,K,J,G){var $=typeof E;($==="undefined"||$==="boolean")&&(E=null);var ne=!1;if(E===null)ne=!0;else switch($){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(E.$$typeof){case s:case l:ne=!0;break;case x:return ne=E._init,M(ne(E._payload),_,K,J,G)}}if(ne)return G=G(E),ne=J===""?"."+_e(E,0):J,I(G)?(K="",ne!=null&&(K=ne.replace(Te,"$&/")+"/"),M(G,_,K,"",function(fe){return fe})):G!=null&&(ue(G)&&(G=de(G,K+(G.key==null||E&&E.key===G.key?"":(""+G.key).replace(Te,"$&/")+"/")+ne)),_.push(G)),1;ne=0;var re=J===""?".":J+":";if(I(E))for(var ie=0;ie<E.length;ie++)J=E[ie],$=re+_e(J,ie),ne+=M(J,_,K,$,G);else if(ie=A(E),typeof ie=="function")for(E=ie.call(E),ie=0;!(J=E.next()).done;)J=J.value,$=re+_e(J,ie++),ne+=M(J,_,K,$,G);else if($==="object"){if(typeof E.then=="function")return M(ae(E),_,K,J,G);throw _=String(E),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return ne}function V(E,_,K){if(E==null)return E;var J=[],G=0;return M(E,J,"","",function($){return _.call(K,$,G++)}),J}function W(E){if(E._status===-1){var _=E._result;_=_(),_.then(function(K){(E._status===0||E._status===-1)&&(E._status=1,E._result=K)},function(K){(E._status===0||E._status===-1)&&(E._status=2,E._result=K)}),E._status===-1&&(E._status=0,E._result=_)}if(E._status===1)return E._result.default;throw E._result}var ce=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},ge={map:V,forEach:function(E,_,K){V(E,function(){_.apply(this,arguments)},K)},count:function(E){var _=0;return V(E,function(){_++}),_},toArray:function(E){return V(E,function(_){return _})||[]},only:function(E){if(!ue(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return pe.Activity=S,pe.Children=ge,pe.Component=B,pe.Fragment=i,pe.Profiler=u,pe.PureComponent=Q,pe.StrictMode=r,pe.Suspense=g,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,pe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return q.H.useMemoCache(E)}},pe.cache=function(E){return function(){return E.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(E,_,K){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var J=D({},E.props),G=E.key;if(_!=null)for($ in _.key!==void 0&&(G=""+_.key),_)!P.call(_,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&_.ref===void 0||(J[$]=_[$]);var $=arguments.length-2;if($===1)J.children=K;else if(1<$){for(var ne=Array($),re=0;re<$;re++)ne[re]=arguments[re+2];J.children=ne}return oe(E.type,G,J)},pe.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},pe.createElement=function(E,_,K){var J,G={},$=null;if(_!=null)for(J in _.key!==void 0&&($=""+_.key),_)P.call(_,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(G[J]=_[J]);var ne=arguments.length-2;if(ne===1)G.children=K;else if(1<ne){for(var re=Array(ne),ie=0;ie<ne;ie++)re[ie]=arguments[ie+2];G.children=re}if(E&&E.defaultProps)for(J in ne=E.defaultProps,ne)G[J]===void 0&&(G[J]=ne[J]);return oe(E,$,G)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(E){return{$$typeof:m,render:E}},pe.isValidElement=ue,pe.lazy=function(E){return{$$typeof:x,_payload:{_status:-1,_result:E},_init:W}},pe.memo=function(E,_){return{$$typeof:v,type:E,compare:_===void 0?null:_}},pe.startTransition=function(E){var _=q.T,K={};q.T=K;try{var J=E(),G=q.S;G!==null&&G(K,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(F,ce)}catch($){ce($)}finally{_!==null&&K.types!==null&&(_.types=K.types),q.T=_}},pe.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},pe.use=function(E){return q.H.use(E)},pe.useActionState=function(E,_,K){return q.H.useActionState(E,_,K)},pe.useCallback=function(E,_){return q.H.useCallback(E,_)},pe.useContext=function(E){return q.H.useContext(E)},pe.useDebugValue=function(){},pe.useDeferredValue=function(E,_){return q.H.useDeferredValue(E,_)},pe.useEffect=function(E,_){return q.H.useEffect(E,_)},pe.useEffectEvent=function(E){return q.H.useEffectEvent(E)},pe.useId=function(){return q.H.useId()},pe.useImperativeHandle=function(E,_,K){return q.H.useImperativeHandle(E,_,K)},pe.useInsertionEffect=function(E,_){return q.H.useInsertionEffect(E,_)},pe.useLayoutEffect=function(E,_){return q.H.useLayoutEffect(E,_)},pe.useMemo=function(E,_){return q.H.useMemo(E,_)},pe.useOptimistic=function(E,_){return q.H.useOptimistic(E,_)},pe.useReducer=function(E,_,K){return q.H.useReducer(E,_,K)},pe.useRef=function(E){return q.H.useRef(E)},pe.useState=function(E){return q.H.useState(E)},pe.useSyncExternalStore=function(E,_,K){return q.H.useSyncExternalStore(E,_,K)},pe.useTransition=function(){return q.H.useTransition()},pe.version="19.2.6",pe}var jf;function pu(){return jf||(jf=1,Yc.exports=rg()),Yc.exports}var h=pu();const Ve=lg(h);var Ic={exports:{}},Di={},Gc={exports:{}},Xc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function og(){return Of||(Of=1,(function(s){function l(M,V){var W=M.length;M.push(V);e:for(;0<W;){var ce=W-1>>>1,ge=M[ce];if(0<u(ge,V))M[ce]=V,M[W]=ge,W=ce;else break e}}function i(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var V=M[0],W=M.pop();if(W!==V){M[0]=W;e:for(var ce=0,ge=M.length,E=ge>>>1;ce<E;){var _=2*(ce+1)-1,K=M[_],J=_+1,G=M[J];if(0>u(K,W))J<ge&&0>u(G,K)?(M[ce]=G,M[J]=W,ce=J):(M[ce]=K,M[_]=W,ce=_);else if(J<ge&&0>u(G,W))M[ce]=G,M[J]=W,ce=J;else break e}}return V}function u(M,V){var W=M.sortIndex-V.sortIndex;return W!==0?W:M.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;s.unstable_now=function(){return d.now()}}else{var f=Date,m=f.now();s.unstable_now=function(){return f.now()-m}}var g=[],v=[],x=1,S=null,T=3,A=!1,O=!1,D=!1,Y=!1,B=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function X(M){for(var V=i(v);V!==null;){if(V.callback===null)r(v);else if(V.startTime<=M)r(v),V.sortIndex=V.expirationTime,l(g,V);else break;V=i(v)}}function I(M){if(D=!1,X(M),!O)if(i(g)!==null)O=!0,F||(F=!0,ye());else{var V=i(v);V!==null&&ae(I,V.startTime-M)}}var F=!1,q=-1,P=5,oe=-1;function de(){return Y?!0:!(s.unstable_now()-oe<P)}function ue(){if(Y=!1,F){var M=s.unstable_now();oe=M;var V=!0;try{e:{O=!1,D&&(D=!1,Z(q),q=-1),A=!0;var W=T;try{t:{for(X(M),S=i(g);S!==null&&!(S.expirationTime>M&&de());){var ce=S.callback;if(typeof ce=="function"){S.callback=null,T=S.priorityLevel;var ge=ce(S.expirationTime<=M);if(M=s.unstable_now(),typeof ge=="function"){S.callback=ge,X(M),V=!0;break t}S===i(g)&&r(g),X(M)}else r(g);S=i(g)}if(S!==null)V=!0;else{var E=i(v);E!==null&&ae(I,E.startTime-M),V=!1}}break e}finally{S=null,T=W,A=!1}V=void 0}}finally{V?ye():F=!1}}}var ye;if(typeof Q=="function")ye=function(){Q(ue)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,_e=Te.port2;Te.port1.onmessage=ue,ye=function(){_e.postMessage(null)}}else ye=function(){B(ue,0)};function ae(M,V){q=B(function(){M(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(M){M.callback=null},s.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<M?Math.floor(1e3/M):5},s.unstable_getCurrentPriorityLevel=function(){return T},s.unstable_next=function(M){switch(T){case 1:case 2:case 3:var V=3;break;default:V=T}var W=T;T=V;try{return M()}finally{T=W}},s.unstable_requestPaint=function(){Y=!0},s.unstable_runWithPriority=function(M,V){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var W=T;T=M;try{return V()}finally{T=W}},s.unstable_scheduleCallback=function(M,V,W){var ce=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ce+W:ce):W=ce,M){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=W+ge,M={id:x++,callback:V,priorityLevel:M,startTime:W,expirationTime:ge,sortIndex:-1},W>ce?(M.sortIndex=W,l(v,M),i(g)===null&&M===i(v)&&(D?(Z(q),q=-1):D=!0,ae(I,W-ce))):(M.sortIndex=ge,l(g,M),O||A||(O=!0,F||(F=!0,ye()))),M},s.unstable_shouldYield=de,s.unstable_wrapCallback=function(M){var V=T;return function(){var W=T;T=V;try{return M.apply(this,arguments)}finally{T=W}}}})(Xc)),Xc}var zf;function cg(){return zf||(zf=1,Gc.exports=og()),Gc.exports}var Qc={exports:{}},mt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function ug(){if(_f)return mt;_f=1;var s=pu();function l(g){var v="https://react.dev/errors/"+g;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)v+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(l(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(g,v,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:S==null?null:""+S,children:g,containerInfo:v,implementation:x}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,v){if(g==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,mt.createPortal=function(g,v){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(l(299));return d(g,v,null,x)},mt.flushSync=function(g){var v=f.T,x=r.p;try{if(f.T=null,r.p=2,g)return g()}finally{f.T=v,r.p=x,r.d.f()}},mt.preconnect=function(g,v){typeof g=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,r.d.C(g,v))},mt.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},mt.preinit=function(g,v){if(typeof g=="string"&&v&&typeof v.as=="string"){var x=v.as,S=m(x,v.crossOrigin),T=typeof v.integrity=="string"?v.integrity:void 0,A=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;x==="style"?r.d.S(g,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:S,integrity:T,fetchPriority:A}):x==="script"&&r.d.X(g,{crossOrigin:S,integrity:T,fetchPriority:A,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},mt.preinitModule=function(g,v){if(typeof g=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var x=m(v.as,v.crossOrigin);r.d.M(g,{crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&r.d.M(g)},mt.preload=function(g,v){if(typeof g=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var x=v.as,S=m(x,v.crossOrigin);r.d.L(g,x,{crossOrigin:S,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},mt.preloadModule=function(g,v){if(typeof g=="string")if(v){var x=m(v.as,v.crossOrigin);r.d.m(g,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else r.d.m(g)},mt.requestFormReset=function(g){r.d.r(g)},mt.unstable_batchedUpdates=function(g,v){return g(v)},mt.useFormState=function(g,v,x){return f.H.useFormState(g,v,x)},mt.useFormStatus=function(){return f.H.useHostTransitionStatus()},mt.version="19.2.6",mt}var Lf;function vp(){if(Lf)return Qc.exports;Lf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),Qc.exports=ug(),Qc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf;function dg(){if(Uf)return Di;Uf=1;var s=cg(),l=pu(),i=vp();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(r(188))}function v(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(r(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var c=o.alternate;if(c===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===n)return g(o),e;if(c===a)return g(o),t;c=c.sibling}throw Error(r(188))}if(n.return!==a.return)n=o,a=c;else{for(var p=!1,y=o.child;y;){if(y===n){p=!0,n=o,a=c;break}if(y===a){p=!0,a=o,n=c;break}y=y.sibling}if(!p){for(y=c.child;y;){if(y===n){p=!0,n=c,a=o;break}if(y===a){p=!0,a=c,n=o;break}y=y.sibling}if(!p)throw Error(r(189))}}if(n.alternate!==a)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,T=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),oe=Symbol.for("react.activity"),de=Symbol.for("react.memo_cache_sentinel"),ue=Symbol.iterator;function ye(e){return e===null||typeof e!="object"?null:(e=ue&&e[ue]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Symbol.for("react.client.reference");function _e(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case B:return"Profiler";case Y:return"StrictMode";case I:return"Suspense";case F:return"SuspenseList";case oe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case Q:return e.displayName||"Context";case Z:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return t=e.displayName||null,t!==null?t:_e(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return _e(e(t))}catch{}}return null}var ae=Array.isArray,M=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ce=[],ge=-1;function E(e){return{current:e}}function _(e){0>ge||(e.current=ce[ge],ce[ge]=null,ge--)}function K(e,t){ge++,ce[ge]=e.current,e.current=t}var J=E(null),G=E(null),$=E(null),ne=E(null);function re(e,t){switch(K($,t),K(G,e),K(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?$1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=$1(t),e=F1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(J),K(J,e)}function ie(){_(J),_(G),_($)}function fe(e){e.memoizedState!==null&&K(ne,e);var t=J.current,n=F1(t,e.type);t!==n&&(K(G,e),K(J,n))}function St(e){G.current===e&&(_(J),_(G)),ne.current===e&&(_(ne),wi._currentValue=W)}var nt,qt;function qe(e){if(nt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);nt=t&&t[1]||"",qt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nt+e+qt}var pn=!1;function hn(e,t){if(!e||pn)return"";pn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(z){var j=z}Reflect.construct(e,[],H)}else{try{H.call()}catch(z){j=z}e.call(H.prototype)}}else{try{throw Error()}catch(z){j=z}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(z){if(z&&j&&typeof z.stack=="string")return[z.stack,j.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),p=c[0],y=c[1];if(p&&y){var w=p.split(`
`),R=y.split(`
`);for(o=a=0;a<w.length&&!w[a].includes("DetermineComponentFrameRoot");)a++;for(;o<R.length&&!R[o].includes("DetermineComponentFrameRoot");)o++;if(a===w.length||o===R.length)for(a=w.length-1,o=R.length-1;1<=a&&0<=o&&w[a]!==R[o];)o--;for(;1<=a&&0<=o;a--,o--)if(w[a]!==R[o]){if(a!==1||o!==1)do if(a--,o--,0>o||w[a]!==R[o]){var L=`
`+w[a].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=a&&0<=o);break}}}finally{pn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?qe(n):""}function Gi(e,t){switch(e.tag){case 26:case 27:case 5:return qe(e.type);case 16:return qe("Lazy");case 13:return e.child!==t&&t!==null?qe("Suspense Fallback"):qe("Suspense");case 19:return qe("SuspenseList");case 0:case 15:return hn(e.type,!1);case 11:return hn(e.type.render,!1);case 1:return hn(e.type,!0);case 31:return qe("Activity");default:return""}}function _l(e){try{var t="",n=null;do t+=Gi(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ya=Object.prototype.hasOwnProperty,Vt=s.unstable_scheduleCallback,Gn=s.unstable_cancelCallback,qa=s.unstable_shouldYield,Xi=s.unstable_requestPaint,ft=s.unstable_now,Mr=s.unstable_getCurrentPriorityLevel,Qi=s.unstable_ImmediatePriority,wn=s.unstable_UserBlockingPriority,ln=s.unstable_NormalPriority,xa=s.unstable_LowPriority,Ll=s.unstable_IdlePriority,mn=s.log,Ki=s.unstable_setDisableYieldValue,Sa=null,gt=null;function Yt(e){if(typeof mn=="function"&&Ki(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(Sa,e)}catch{}}var pt=Math.clz32?Math.clz32:Rr,kr=Math.log,$i=Math.LN2;function Rr(e){return e>>>=0,e===0?32:31-(kr(e)/$i|0)|0}var Va=256,Ya=262144,Ge=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function at(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var y=a&134217727;return y!==0?(a=y&~c,a!==0?o=Xe(a):(p&=y,p!==0?o=Xe(p):n||(n=y&~e,n!==0&&(o=Xe(n))))):(y=a&~c,y!==0?o=Xe(y):p!==0?o=Xe(p):n||(n=a&~e,n!==0&&(o=Xe(n)))),o===0?0:t!==0&&t!==o&&(t&c)===0&&(c=o&-o,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:o}function wt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ct(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ht(){var e=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),e}function Et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function It(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function We(e,t,n,a,o,c){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,w=e.expirationTimes,R=e.hiddenUpdates;for(n=p&~n;0<n;){var L=31-pt(n),H=1<<L;y[L]=0,w[L]=-1;var j=R[L];if(j!==null)for(R[L]=null,L=0;L<j.length;L++){var z=j[L];z!==null&&(z.lane&=-536870913)}n&=~H}a!==0&&sn(e,a,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~t))}function sn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-pt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function jt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-pt(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function Gt(e,t){var n=t&-t;return n=(n&42)!==0?1:Cn(n),(n&(e.suspendedLanes|t))!==0?0:n}function Cn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function En(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rn(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:xf(e.type))}function Xn(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var Xt=Math.random().toString(36).slice(2),rt="__reactFiber$"+Xt,At="__reactProps$"+Xt,Ia="__reactContainer$"+Xt,jr="__reactEvents$"+Xt,Ih="__reactListeners$"+Xt,Gh="__reactHandles$"+Xt,Lu="__reactResources$"+Xt,Ul="__reactMarker$"+Xt;function Or(e){delete e[rt],delete e[At],delete e[jr],delete e[Ih],delete e[Gh]}function Ga(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ia]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=af(e);e!==null;){if(n=e[rt])return n;e=af(e)}return t}e=n,n=e.parentNode}return null}function Xa(e){if(e=e[rt]||e[Ia]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Qa(e){var t=e[Lu];return t||(t=e[Lu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function lt(e){e[Ul]=!0}var Uu=new Set,Hu={};function wa(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Hu[e]=t,e=0;e<t.length;e++)Uu.add(t[e])}var Xh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zu={},Bu={};function Qh(e){return ya.call(Bu,e)?!0:ya.call(Zu,e)?!1:Xh.test(e)?Bu[e]=!0:(Zu[e]=!0,!1)}function Fi(e,t,n){if(Qh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ji(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function An(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kh(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,c=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(p){n=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zr(e){if(!e._valueTracker){var t=qu(e)?"checked":"value";e._valueTracker=Kh(e,t,""+e[t])}}function Vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=qu(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $h=/[\n"\\]/g;function Kt(e){return e.replace($h,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function _r(e,t,n,a,o,c,p,y){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Qt(t)):e.value!==""+Qt(t)&&(e.value=""+Qt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?Lr(e,p,Qt(t)):n!=null?Lr(e,p,Qt(n)):a!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Qt(y):e.removeAttribute("name")}function Yu(e,t,n,a,o,c,p,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){zr(e);return}n=n!=null?""+Qt(n):"",t=t!=null?""+Qt(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=y?e.checked:!!a,e.defaultChecked=!!a,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),zr(e)}function Lr(e,t,n){t==="number"&&Pi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function $a(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Qt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Iu(e,t,n){if(t!=null&&(t=""+Qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Qt(n):""}function Gu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(r(92));if(ae(a)){if(1<a.length)throw Error(r(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Qt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),zr(e)}function Fa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Fh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Qu(e,t,n){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&Xu(e,o,a)}else for(var c in t)t.hasOwnProperty(c)&&Xu(e,c,t[c])}function Ur(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ph=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wi(e){return Ph.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Nn(){}var Hr=null;function Zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,Pa=null;function Ku(e){var t=Xa(e);if(t&&(e=t.stateNode)){var n=e[At]||null;e:switch(e=t.stateNode,t.type){case"input":if(_r(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[At]||null;if(!o)throw Error(r(90));_r(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Vu(a)}break e;case"textarea":Iu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&$a(e,!!n.multiple,t,!1)}}}var Br=!1;function $u(e,t,n){if(Br)return e(t,n);Br=!0;try{var a=e(t);return a}finally{if(Br=!1,(Ja!==null||Pa!==null)&&(Bs(),Ja&&(t=Ja,e=Pa,Pa=Ja=null,Ku(t),e)))for(t=0;t<e.length;t++)Ku(e[t])}}function Zl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[At]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(r(231,t,typeof n));return n}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qr=!1;if(Tn)try{var Bl={};Object.defineProperty(Bl,"passive",{get:function(){qr=!0}}),window.addEventListener("test",Bl,Bl),window.removeEventListener("test",Bl,Bl)}catch{qr=!1}var Qn=null,Vr=null,es=null;function Fu(){if(es)return es;var e,t=Vr,n=t.length,a,o="value"in Qn?Qn.value:Qn.textContent,c=o.length;for(e=0;e<n&&t[e]===o[e];e++);var p=n-e;for(a=1;a<=p&&t[n-a]===o[c-a];a++);return es=o.slice(e,1<a?1-a:void 0)}function ts(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ns(){return!0}function Ju(){return!1}function Nt(e){function t(n,a,o,c,p){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ns:Ju,this.isPropagationStopped=Ju,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ns)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ns)},persist:function(){},isPersistent:ns}),t}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},as=Nt(Ca),ql=S({},Ca,{view:0,detail:0}),Wh=Nt(ql),Yr,Ir,Vl,ls=S({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vl&&(Vl&&e.type==="mousemove"?(Yr=e.screenX-Vl.screenX,Ir=e.screenY-Vl.screenY):Ir=Yr=0,Vl=e),Yr)},movementY:function(e){return"movementY"in e?e.movementY:Ir}}),Pu=Nt(ls),em=S({},ls,{dataTransfer:0}),tm=Nt(em),nm=S({},ql,{relatedTarget:0}),Gr=Nt(nm),am=S({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),lm=Nt(am),im=S({},Ca,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sm=Nt(im),rm=S({},Ca,{data:0}),Wu=Nt(rm),om={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},um={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=um[e])?!!t[e]:!1}function Xr(){return dm}var fm=S({},ql,{key:function(e){if(e.key){var t=om[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ts(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xr,charCode:function(e){return e.type==="keypress"?ts(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ts(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pm=Nt(fm),hm=S({},ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ed=Nt(hm),mm=S({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xr}),gm=Nt(mm),bm=S({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),vm=Nt(bm),ym=S({},ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xm=Nt(ym),Sm=S({},Ca,{newState:0,oldState:0}),wm=Nt(Sm),Cm=[9,13,27,32],Qr=Tn&&"CompositionEvent"in window,Yl=null;Tn&&"documentMode"in document&&(Yl=document.documentMode);var Em=Tn&&"TextEvent"in window&&!Yl,td=Tn&&(!Qr||Yl&&8<Yl&&11>=Yl),nd=" ",ad=!1;function ld(e,t){switch(e){case"keyup":return Cm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function Am(e,t){switch(e){case"compositionend":return id(t);case"keypress":return t.which!==32?null:(ad=!0,nd);case"textInput":return e=t.data,e===nd&&ad?null:e;default:return null}}function Nm(e,t){if(Wa)return e==="compositionend"||!Qr&&ld(e,t)?(e=Fu(),es=Vr=Qn=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return td&&t.locale!=="ko"?null:t.data;default:return null}}var Tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tm[e.type]:t==="textarea"}function rd(e,t,n,a){Ja?Pa?Pa.push(a):Pa=[a]:Ja=a,t=Qs(t,"onChange"),0<t.length&&(n=new as("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Il=null,Gl=null;function Dm(e){Y1(e,0)}function is(e){var t=Hl(e);if(Vu(t))return e}function od(e,t){if(e==="change")return t}var cd=!1;if(Tn){var Kr;if(Tn){var $r="oninput"in document;if(!$r){var ud=document.createElement("div");ud.setAttribute("oninput","return;"),$r=typeof ud.oninput=="function"}Kr=$r}else Kr=!1;cd=Kr&&(!document.documentMode||9<document.documentMode)}function dd(){Il&&(Il.detachEvent("onpropertychange",fd),Gl=Il=null)}function fd(e){if(e.propertyName==="value"&&is(Gl)){var t=[];rd(t,Gl,e,Zr(e)),$u(Dm,t)}}function Mm(e,t,n){e==="focusin"?(dd(),Il=t,Gl=n,Il.attachEvent("onpropertychange",fd)):e==="focusout"&&dd()}function km(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return is(Gl)}function Rm(e,t){if(e==="click")return is(t)}function jm(e,t){if(e==="input"||e==="change")return is(t)}function Om(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:Om;function Xl(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!ya.call(t,o)||!Ot(e[o],t[o]))return!1}return!0}function pd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hd(e,t){var n=pd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pd(n)}}function md(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?md(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Pi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pi(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zm=Tn&&"documentMode"in document&&11>=document.documentMode,el=null,Jr=null,Ql=null,Pr=!1;function bd(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pr||el==null||el!==Pi(a)||(a=el,"selectionStart"in a&&Fr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ql&&Xl(Ql,a)||(Ql=a,a=Qs(Jr,"onSelect"),0<a.length&&(t=new as("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=el)))}function Ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tl={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},Wr={},vd={};Tn&&(vd=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Aa(e){if(Wr[e])return Wr[e];if(!tl[e])return e;var t=tl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vd)return Wr[e]=t[n];return e}var yd=Aa("animationend"),xd=Aa("animationiteration"),Sd=Aa("animationstart"),_m=Aa("transitionrun"),Lm=Aa("transitionstart"),Um=Aa("transitioncancel"),wd=Aa("transitionend"),Cd=new Map,eo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eo.push("scrollEnd");function on(e,t){Cd.set(e,t),wa(t,[e])}var ss=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$t=[],nl=0,to=0;function rs(){for(var e=nl,t=to=nl=0;t<e;){var n=$t[t];$t[t++]=null;var a=$t[t];$t[t++]=null;var o=$t[t];$t[t++]=null;var c=$t[t];if($t[t++]=null,a!==null&&o!==null){var p=a.pending;p===null?o.next=o:(o.next=p.next,p.next=o),a.pending=o}c!==0&&Ed(n,o,c)}}function os(e,t,n,a){$t[nl++]=e,$t[nl++]=t,$t[nl++]=n,$t[nl++]=a,to|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function no(e,t,n,a){return os(e,t,n,a),cs(e)}function Na(e,t){return os(e,null,null,t),cs(e)}function Ed(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,c=e.return;c!==null;)c.childLanes|=n,a=c.alternate,a!==null&&(a.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&t!==null&&(o=31-pt(n),e=c.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=n|536870912),c):null}function cs(e){if(50<mi)throw mi=0,fc=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var al={};function Hm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,a){return new Hm(e,t,n,a)}function ao(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dn(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ad(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function us(e,t,n,a,o,c){var p=0;if(a=e,typeof e=="function")ao(e)&&(p=1);else if(typeof e=="string")p=Y2(e,n,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case oe:return e=zt(31,n,t,o),e.elementType=oe,e.lanes=c,e;case D:return Ta(n.children,o,c,t);case Y:p=8,o|=24;break;case B:return e=zt(12,n,t,o|2),e.elementType=B,e.lanes=c,e;case I:return e=zt(13,n,t,o),e.elementType=I,e.lanes=c,e;case F:return e=zt(19,n,t,o),e.elementType=F,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:p=10;break e;case Z:p=9;break e;case X:p=11;break e;case q:p=14;break e;case P:p=16,a=null;break e}p=29,n=Error(r(130,e===null?"null":typeof e,"")),a=null}return t=zt(p,n,t,o),t.elementType=e,t.type=a,t.lanes=c,t}function Ta(e,t,n,a){return e=zt(7,e,a,t),e.lanes=n,e}function lo(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function Nd(e){var t=zt(18,null,null,0);return t.stateNode=e,t}function io(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Td=new WeakMap;function Ft(e,t){if(typeof e=="object"&&e!==null){var n=Td.get(e);return n!==void 0?n:(t={value:e,source:t,stack:_l(t)},Td.set(e,t),t)}return{value:e,source:t,stack:_l(t)}}var ll=[],il=0,ds=null,Kl=0,Jt=[],Pt=0,Kn=null,gn=1,bn="";function Mn(e,t){ll[il++]=Kl,ll[il++]=ds,ds=e,Kl=t}function Dd(e,t,n){Jt[Pt++]=gn,Jt[Pt++]=bn,Jt[Pt++]=Kn,Kn=e;var a=gn;e=bn;var o=32-pt(a)-1;a&=~(1<<o),n+=1;var c=32-pt(t)+o;if(30<c){var p=o-o%5;c=(a&(1<<p)-1).toString(32),a>>=p,o-=p,gn=1<<32-pt(t)+o|n<<o|a,bn=c+e}else gn=1<<c|n<<o|a,bn=e}function so(e){e.return!==null&&(Mn(e,1),Dd(e,1,0))}function ro(e){for(;e===ds;)ds=ll[--il],ll[il]=null,Kl=ll[--il],ll[il]=null;for(;e===Kn;)Kn=Jt[--Pt],Jt[Pt]=null,bn=Jt[--Pt],Jt[Pt]=null,gn=Jt[--Pt],Jt[Pt]=null}function Md(e,t){Jt[Pt++]=gn,Jt[Pt++]=bn,Jt[Pt++]=Kn,gn=t.id,bn=t.overflow,Kn=e}var ot=null,He=null,we=!1,$n=null,Wt=!1,oo=Error(r(519));function Fn(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $l(Ft(t,e)),oo}function kd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[rt]=e,t[At]=a,n){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(n=0;n<bi.length;n++)ve(bi[n],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),Yu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),Gu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Q1(t.textContent,n)?(a.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),a.onScroll!=null&&ve("scroll",t),a.onScrollEnd!=null&&ve("scrollend",t),a.onClick!=null&&(t.onclick=Nn),t=!0):t=!1,t||Fn(e,!0)}function Rd(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 31:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:ot=ot.return}}function sl(e){if(e!==ot)return!1;if(!we)return Rd(e),we=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Tc(e.type,e.memoizedProps)),n=!n),n&&He&&Fn(e),Rd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));He=nf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));He=nf(e)}else t===27?(t=He,ua(e.type)?(e=jc,jc=null,He=e):He=t):He=ot?tn(e.stateNode.nextSibling):null;return!0}function Da(){He=ot=null,we=!1}function co(){var e=$n;return e!==null&&(kt===null?kt=e:kt.push.apply(kt,e),$n=null),e}function $l(e){$n===null?$n=[e]:$n.push(e)}var uo=E(null),Ma=null,kn=null;function Jn(e,t,n){K(uo,t._currentValue),t._currentValue=n}function Rn(e){e._currentValue=uo.current,_(uo)}function fo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function po(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var p=o.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=o;for(var w=0;w<t.length;w++)if(y.context===t[w]){c.lanes|=n,y=c.alternate,y!==null&&(y.lanes|=n),fo(c.return,n,e),a||(p=null);break e}c=y.next}}else if(o.tag===18){if(p=o.return,p===null)throw Error(r(341));p.lanes|=n,c=p.alternate,c!==null&&(c.lanes|=n),fo(p,n,e),p=null}else p=o.child;if(p!==null)p.return=o;else for(p=o;p!==null;){if(p===e){p=null;break}if(o=p.sibling,o!==null){o.return=p.return,p=o;break}p=p.return}o=p}}function rl(e,t,n,a){e=null;for(var o=t,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var p=o.alternate;if(p===null)throw Error(r(387));if(p=p.memoizedProps,p!==null){var y=o.type;Ot(o.pendingProps.value,p.value)||(e!==null?e.push(y):e=[y])}}else if(o===ne.current){if(p=o.alternate,p===null)throw Error(r(387));p.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(wi):e=[wi])}o=o.return}e!==null&&po(t,e,n,a),t.flags|=262144}function fs(e){for(e=e.firstContext;e!==null;){if(!Ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ka(e){Ma=e,kn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return jd(Ma,e)}function ps(e,t){return Ma===null&&ka(e),jd(e,t)}function jd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},kn===null){if(e===null)throw Error(r(308));kn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kn=kn.next=t;return n}var Zm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Bm=s.unstable_scheduleCallback,qm=s.unstable_NormalPriority,$e={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ho(){return{controller:new Zm,data:new Map,refCount:0}}function Fl(e){e.refCount--,e.refCount===0&&Bm(qm,function(){e.controller.abort()})}var Jl=null,mo=0,ol=0,cl=null;function Vm(e,t){if(Jl===null){var n=Jl=[];mo=0,ol=vc(),cl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return mo++,t.then(Od,Od),t}function Od(){if(--mo===0&&Jl!==null){cl!==null&&(cl.status="fulfilled");var e=Jl;Jl=null,ol=0,cl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ym(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var zd=M.S;M.S=function(e,t){b1=ft(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Vm(e,t),zd!==null&&zd(e,t)};var Ra=E(null);function go(){var e=Ra.current;return e!==null?e:Le.pooledCache}function hs(e,t){t===null?K(Ra,Ra.current):K(Ra,t.pool)}function _d(){var e=go();return e===null?null:{parent:$e._currentValue,pool:e}}var ul=Error(r(460)),bo=Error(r(474)),ms=Error(r(542)),gs={then:function(){}};function Ld(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ud(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Nn,Nn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zd(e),e;default:if(typeof t.status=="string")t.then(Nn,Nn);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zd(e),e}throw Oa=t,ul}}function ja(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Oa=n,ul):n}}var Oa=null;function Hd(){if(Oa===null)throw Error(r(459));var e=Oa;return Oa=null,e}function Zd(e){if(e===ul||e===ms)throw Error(r(483))}var dl=null,Pl=0;function bs(e){var t=Pl;return Pl+=1,dl===null&&(dl=[]),Ud(dl,e,t)}function Wl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vs(e,t){throw t.$$typeof===T?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Bd(e){function t(N,C){if(e){var k=N.deletions;k===null?(N.deletions=[C],N.flags|=16):k.push(C)}}function n(N,C){if(!e)return null;for(;C!==null;)t(N,C),C=C.sibling;return null}function a(N){for(var C=new Map;N!==null;)N.key!==null?C.set(N.key,N):C.set(N.index,N),N=N.sibling;return C}function o(N,C){return N=Dn(N,C),N.index=0,N.sibling=null,N}function c(N,C,k){return N.index=k,e?(k=N.alternate,k!==null?(k=k.index,k<C?(N.flags|=67108866,C):k):(N.flags|=67108866,C)):(N.flags|=1048576,C)}function p(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function y(N,C,k,U){return C===null||C.tag!==6?(C=lo(k,N.mode,U),C.return=N,C):(C=o(C,k),C.return=N,C)}function w(N,C,k,U){var le=k.type;return le===D?L(N,C,k.props.children,U,k.key):C!==null&&(C.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===P&&ja(le)===C.type)?(C=o(C,k.props),Wl(C,k),C.return=N,C):(C=us(k.type,k.key,k.props,null,N.mode,U),Wl(C,k),C.return=N,C)}function R(N,C,k,U){return C===null||C.tag!==4||C.stateNode.containerInfo!==k.containerInfo||C.stateNode.implementation!==k.implementation?(C=io(k,N.mode,U),C.return=N,C):(C=o(C,k.children||[]),C.return=N,C)}function L(N,C,k,U,le){return C===null||C.tag!==7?(C=Ta(k,N.mode,U,le),C.return=N,C):(C=o(C,k),C.return=N,C)}function H(N,C,k){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=lo(""+C,N.mode,k),C.return=N,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case A:return k=us(C.type,C.key,C.props,null,N.mode,k),Wl(k,C),k.return=N,k;case O:return C=io(C,N.mode,k),C.return=N,C;case P:return C=ja(C),H(N,C,k)}if(ae(C)||ye(C))return C=Ta(C,N.mode,k,null),C.return=N,C;if(typeof C.then=="function")return H(N,bs(C),k);if(C.$$typeof===Q)return H(N,ps(N,C),k);vs(N,C)}return null}function j(N,C,k,U){var le=C!==null?C.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return le!==null?null:y(N,C,""+k,U);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case A:return k.key===le?w(N,C,k,U):null;case O:return k.key===le?R(N,C,k,U):null;case P:return k=ja(k),j(N,C,k,U)}if(ae(k)||ye(k))return le!==null?null:L(N,C,k,U,null);if(typeof k.then=="function")return j(N,C,bs(k),U);if(k.$$typeof===Q)return j(N,C,ps(N,k),U);vs(N,k)}return null}function z(N,C,k,U,le){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return N=N.get(k)||null,y(C,N,""+U,le);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case A:return N=N.get(U.key===null?k:U.key)||null,w(C,N,U,le);case O:return N=N.get(U.key===null?k:U.key)||null,R(C,N,U,le);case P:return U=ja(U),z(N,C,k,U,le)}if(ae(U)||ye(U))return N=N.get(k)||null,L(C,N,U,le,null);if(typeof U.then=="function")return z(N,C,k,bs(U),le);if(U.$$typeof===Q)return z(N,C,k,ps(C,U),le);vs(C,U)}return null}function ee(N,C,k,U){for(var le=null,Ce=null,te=C,me=C=0,Se=null;te!==null&&me<k.length;me++){te.index>me?(Se=te,te=null):Se=te.sibling;var Ee=j(N,te,k[me],U);if(Ee===null){te===null&&(te=Se);break}e&&te&&Ee.alternate===null&&t(N,te),C=c(Ee,C,me),Ce===null?le=Ee:Ce.sibling=Ee,Ce=Ee,te=Se}if(me===k.length)return n(N,te),we&&Mn(N,me),le;if(te===null){for(;me<k.length;me++)te=H(N,k[me],U),te!==null&&(C=c(te,C,me),Ce===null?le=te:Ce.sibling=te,Ce=te);return we&&Mn(N,me),le}for(te=a(te);me<k.length;me++)Se=z(te,N,me,k[me],U),Se!==null&&(e&&Se.alternate!==null&&te.delete(Se.key===null?me:Se.key),C=c(Se,C,me),Ce===null?le=Se:Ce.sibling=Se,Ce=Se);return e&&te.forEach(function(ma){return t(N,ma)}),we&&Mn(N,me),le}function se(N,C,k,U){if(k==null)throw Error(r(151));for(var le=null,Ce=null,te=C,me=C=0,Se=null,Ee=k.next();te!==null&&!Ee.done;me++,Ee=k.next()){te.index>me?(Se=te,te=null):Se=te.sibling;var ma=j(N,te,Ee.value,U);if(ma===null){te===null&&(te=Se);break}e&&te&&ma.alternate===null&&t(N,te),C=c(ma,C,me),Ce===null?le=ma:Ce.sibling=ma,Ce=ma,te=Se}if(Ee.done)return n(N,te),we&&Mn(N,me),le;if(te===null){for(;!Ee.done;me++,Ee=k.next())Ee=H(N,Ee.value,U),Ee!==null&&(C=c(Ee,C,me),Ce===null?le=Ee:Ce.sibling=Ee,Ce=Ee);return we&&Mn(N,me),le}for(te=a(te);!Ee.done;me++,Ee=k.next())Ee=z(te,N,me,Ee.value,U),Ee!==null&&(e&&Ee.alternate!==null&&te.delete(Ee.key===null?me:Ee.key),C=c(Ee,C,me),Ce===null?le=Ee:Ce.sibling=Ee,Ce=Ee);return e&&te.forEach(function(eg){return t(N,eg)}),we&&Mn(N,me),le}function Oe(N,C,k,U){if(typeof k=="object"&&k!==null&&k.type===D&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case A:e:{for(var le=k.key;C!==null;){if(C.key===le){if(le=k.type,le===D){if(C.tag===7){n(N,C.sibling),U=o(C,k.props.children),U.return=N,N=U;break e}}else if(C.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===P&&ja(le)===C.type){n(N,C.sibling),U=o(C,k.props),Wl(U,k),U.return=N,N=U;break e}n(N,C);break}else t(N,C);C=C.sibling}k.type===D?(U=Ta(k.props.children,N.mode,U,k.key),U.return=N,N=U):(U=us(k.type,k.key,k.props,null,N.mode,U),Wl(U,k),U.return=N,N=U)}return p(N);case O:e:{for(le=k.key;C!==null;){if(C.key===le)if(C.tag===4&&C.stateNode.containerInfo===k.containerInfo&&C.stateNode.implementation===k.implementation){n(N,C.sibling),U=o(C,k.children||[]),U.return=N,N=U;break e}else{n(N,C);break}else t(N,C);C=C.sibling}U=io(k,N.mode,U),U.return=N,N=U}return p(N);case P:return k=ja(k),Oe(N,C,k,U)}if(ae(k))return ee(N,C,k,U);if(ye(k)){if(le=ye(k),typeof le!="function")throw Error(r(150));return k=le.call(k),se(N,C,k,U)}if(typeof k.then=="function")return Oe(N,C,bs(k),U);if(k.$$typeof===Q)return Oe(N,C,ps(N,k),U);vs(N,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,C!==null&&C.tag===6?(n(N,C.sibling),U=o(C,k),U.return=N,N=U):(n(N,C),U=lo(k,N.mode,U),U.return=N,N=U),p(N)):n(N,C)}return function(N,C,k,U){try{Pl=0;var le=Oe(N,C,k,U);return dl=null,le}catch(te){if(te===ul||te===ms)throw te;var Ce=zt(29,te,null,N.mode);return Ce.lanes=U,Ce.return=N,Ce}finally{}}}var za=Bd(!0),qd=Bd(!1),Pn=!1;function vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ea(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ae&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=cs(e),Ed(e,null,n),t}return os(e,a,t,n),cs(e)}function ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,jt(e,n)}}function xo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?o=c=p:c=c.next=p,n=n.next}while(n!==null);c===null?o=c=t:c=c.next=t}else o=c=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var So=!1;function ti(){if(So){var e=cl;if(e!==null)throw e}}function ni(e,t,n,a){So=!1;var o=e.updateQueue;Pn=!1;var c=o.firstBaseUpdate,p=o.lastBaseUpdate,y=o.shared.pending;if(y!==null){o.shared.pending=null;var w=y,R=w.next;w.next=null,p===null?c=R:p.next=R,p=w;var L=e.alternate;L!==null&&(L=L.updateQueue,y=L.lastBaseUpdate,y!==p&&(y===null?L.firstBaseUpdate=R:y.next=R,L.lastBaseUpdate=w))}if(c!==null){var H=o.baseState;p=0,L=R=w=null,y=c;do{var j=y.lane&-536870913,z=j!==y.lane;if(z?(xe&j)===j:(a&j)===j){j!==0&&j===ol&&(So=!0),L!==null&&(L=L.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var ee=e,se=y;j=t;var Oe=n;switch(se.tag){case 1:if(ee=se.payload,typeof ee=="function"){H=ee.call(Oe,H,j);break e}H=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=se.payload,j=typeof ee=="function"?ee.call(Oe,H,j):ee,j==null)break e;H=S({},H,j);break e;case 2:Pn=!0}}j=y.callback,j!==null&&(e.flags|=64,z&&(e.flags|=8192),z=o.callbacks,z===null?o.callbacks=[j]:z.push(j))}else z={lane:j,tag:y.tag,payload:y.payload,callback:y.callback,next:null},L===null?(R=L=z,w=H):L=L.next=z,p|=j;if(y=y.next,y===null){if(y=o.shared.pending,y===null)break;z=y,y=z.next,z.next=null,o.lastBaseUpdate=z,o.shared.pending=null}}while(!0);L===null&&(w=H),o.baseState=w,o.firstBaseUpdate=R,o.lastBaseUpdate=L,c===null&&(o.shared.lanes=0),ia|=p,e.lanes=p,e.memoizedState=H}}function Vd(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function Yd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Vd(n[e],t)}var fl=E(null),ys=E(0);function Id(e,t){e=Bn,K(ys,e),K(fl,t),Bn=e|t.baseLanes}function wo(){K(ys,Bn),K(fl,fl.current)}function Co(){Bn=ys.current,_(fl),_(ys)}var _t=E(null),en=null;function ta(e){var t=e.alternate;K(Qe,Qe.current&1),K(_t,e),en===null&&(t===null||fl.current!==null||t.memoizedState!==null)&&(en=e)}function Eo(e){K(Qe,Qe.current),K(_t,e),en===null&&(en=e)}function Gd(e){e.tag===22?(K(Qe,Qe.current),K(_t,e),en===null&&(en=e)):na()}function na(){K(Qe,Qe.current),K(_t,_t.current)}function Lt(e){_(_t),en===e&&(en=null),_(Qe)}var Qe=E(0);function xs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||kc(n)||Rc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jn=0,he=null,Re=null,Fe=null,Ss=!1,pl=!1,_a=!1,ws=0,ai=0,hl=null,Im=0;function Ye(){throw Error(r(321))}function Ao(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function No(e,t,n,a,o,c){return jn=c,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?D0:qo,_a=!1,c=n(a,o),_a=!1,pl&&(c=Qd(t,n,a,o)),Xd(e),c}function Xd(e){M.H=si;var t=Re!==null&&Re.next!==null;if(jn=0,Fe=Re=he=null,Ss=!1,ai=0,hl=null,t)throw Error(r(300));e===null||Je||(e=e.dependencies,e!==null&&fs(e)&&(Je=!0))}function Qd(e,t,n,a){he=e;var o=0;do{if(pl&&(hl=null),ai=0,pl=!1,25<=o)throw Error(r(301));if(o+=1,Fe=Re=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}M.H=M0,c=t(n,a)}while(pl);return c}function Gm(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?li(t):t,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(he.flags|=1024),t}function To(){var e=ws!==0;return ws=0,e}function Do(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(Ss){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ss=!1}jn=0,Fe=Re=he=null,pl=!1,ai=ws=0,hl=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?he.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ke(){if(Re===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Fe===null?he.memoizedState:Fe.next;if(t!==null)Fe=t,Re=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Fe===null?he.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Cs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function li(e){var t=ai;return ai+=1,hl===null&&(hl=[]),e=Ud(hl,e,t),t=he,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?D0:qo),e}function Es(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return li(e);if(e.$$typeof===Q)return ct(e)}throw Error(r(438,String(e)))}function ko(e){var t=null,n=he.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=he.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Cs(),he.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=de;return t.index++,n}function On(e,t){return typeof t=="function"?t(e):t}function As(e){var t=Ke();return Ro(t,Re,e)}function Ro(e,t,n){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var o=e.baseQueue,c=a.pending;if(c!==null){if(o!==null){var p=o.next;o.next=c.next,c.next=p}t.baseQueue=o=c,a.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{t=o.next;var y=p=null,w=null,R=t,L=!1;do{var H=R.lane&-536870913;if(H!==R.lane?(xe&H)===H:(jn&H)===H){var j=R.revertLane;if(j===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),H===ol&&(L=!0);else if((jn&j)===j){R=R.next,j===ol&&(L=!0);continue}else H={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},w===null?(y=w=H,p=c):w=w.next=H,he.lanes|=j,ia|=j;H=R.action,_a&&n(c,H),c=R.hasEagerState?R.eagerState:n(c,H)}else j={lane:H,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},w===null?(y=w=j,p=c):w=w.next=j,he.lanes|=H,ia|=H;R=R.next}while(R!==null&&R!==t);if(w===null?p=c:w.next=y,!Ot(c,e.memoizedState)&&(Je=!0,L&&(n=cl,n!==null)))throw n;e.memoizedState=c,e.baseState=p,e.baseQueue=w,a.lastRenderedState=c}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function jo(e){var t=Ke(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,c=t.memoizedState;if(o!==null){n.pending=null;var p=o=o.next;do c=e(c,p.action),p=p.next;while(p!==o);Ot(c,t.memoizedState)||(Je=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,a]}function Kd(e,t,n){var a=he,o=Ke(),c=we;if(c){if(n===void 0)throw Error(r(407));n=n()}else n=t();var p=!Ot((Re||o).memoizedState,n);if(p&&(o.memoizedState=n,Je=!0),o=o.queue,_o(Jd.bind(null,a,o,e),[e]),o.getSnapshot!==t||p||Fe!==null&&Fe.memoizedState.tag&1){if(a.flags|=2048,ml(9,{destroy:void 0},Fd.bind(null,a,o,n,t),null),Le===null)throw Error(r(349));c||(jn&127)!==0||$d(a,t,n)}return n}function $d(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t=Cs(),he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fd(e,t,n,a){t.value=n,t.getSnapshot=a,Pd(t)&&Wd(e)}function Jd(e,t,n){return n(function(){Pd(t)&&Wd(e)})}function Pd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function Wd(e){var t=Na(e,2);t!==null&&Rt(t,e,2)}function Oo(e){var t=bt();if(typeof e=="function"){var n=e;if(e=n(),_a){Yt(!0);try{n()}finally{Yt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:e},t}function e0(e,t,n,a){return e.baseState=n,Ro(e,Re,typeof a=="function"?a:On)}function Xm(e,t,n,a,o){if(Ds(e))throw Error(r(485));if(e=t.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};M.T!==null?n(!0):c.isTransition=!1,a(c),n=t.pending,n===null?(c.next=t.pending=c,t0(t,c)):(c.next=n.next,t.pending=n.next=c)}}function t0(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var c=M.T,p={};M.T=p;try{var y=n(o,a),w=M.S;w!==null&&w(p,y),n0(e,t,y)}catch(R){zo(e,t,R)}finally{c!==null&&p.types!==null&&(c.types=p.types),M.T=c}}else try{c=n(o,a),n0(e,t,c)}catch(R){zo(e,t,R)}}function n0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){a0(e,t,a)},function(a){return zo(e,t,a)}):a0(e,t,n)}function a0(e,t,n){t.status="fulfilled",t.value=n,l0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,t0(e,n)))}function zo(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,l0(t),t=t.next;while(t!==a)}e.action=null}function l0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function i0(e,t){return t}function s0(e,t){if(we){var n=Le.formState;if(n!==null){e:{var a=he;if(we){if(He){t:{for(var o=He,c=Wt;o.nodeType!==8;){if(!c){o=null;break t}if(o=tn(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){He=tn(o.nextSibling),a=o.data==="F!";break e}}Fn(a)}a=!1}a&&(t=n[0])}}return n=bt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i0,lastRenderedState:t},n.queue=a,n=A0.bind(null,he,a),a.dispatch=n,a=Oo(!1),c=Bo.bind(null,he,!1,a.queue),a=bt(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=Xm.bind(null,he,o,c,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function r0(e){var t=Ke();return o0(t,Re,e)}function o0(e,t,n){if(t=Ro(e,t,i0)[0],e=As(On)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=li(t)}catch(p){throw p===ul?ms:p}else a=t;t=Ke();var o=t.queue,c=o.dispatch;return n!==t.memoizedState&&(he.flags|=2048,ml(9,{destroy:void 0},Qm.bind(null,o,n),null)),[a,c,e]}function Qm(e,t){e.action=t}function c0(e){var t=Ke(),n=Re;if(n!==null)return o0(t,n,e);Ke(),t=t.memoizedState,n=Ke();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ml(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=he.updateQueue,t===null&&(t=Cs(),he.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function u0(){return Ke().memoizedState}function Ns(e,t,n,a){var o=bt();he.flags|=e,o.memoizedState=ml(1|t,{destroy:void 0},n,a===void 0?null:a)}function Ts(e,t,n,a){var o=Ke();a=a===void 0?null:a;var c=o.memoizedState.inst;Re!==null&&a!==null&&Ao(a,Re.memoizedState.deps)?o.memoizedState=ml(t,c,n,a):(he.flags|=e,o.memoizedState=ml(1|t,c,n,a))}function d0(e,t){Ns(8390656,8,e,t)}function _o(e,t){Ts(2048,8,e,t)}function Km(e){he.flags|=4;var t=he.updateQueue;if(t===null)t=Cs(),he.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function f0(e){var t=Ke().memoizedState;return Km({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function p0(e,t){return Ts(4,2,e,t)}function h0(e,t){return Ts(4,4,e,t)}function m0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function g0(e,t,n){n=n!=null?n.concat([e]):null,Ts(4,4,m0.bind(null,t,e),n)}function Lo(){}function b0(e,t){var n=Ke();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ao(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function v0(e,t){var n=Ke();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ao(t,a[1]))return a[0];if(a=e(),_a){Yt(!0);try{e()}finally{Yt(!1)}}return n.memoizedState=[a,t],a}function Uo(e,t,n){return n===void 0||(jn&1073741824)!==0&&(xe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=y1(),he.lanes|=e,ia|=e,n)}function y0(e,t,n,a){return Ot(n,t)?n:fl.current!==null?(e=Uo(e,n,a),Ot(e,t)||(Je=!0),e):(jn&42)===0||(jn&1073741824)!==0&&(xe&261930)===0?(Je=!0,e.memoizedState=n):(e=y1(),he.lanes|=e,ia|=e,t)}function x0(e,t,n,a,o){var c=V.p;V.p=c!==0&&8>c?c:8;var p=M.T,y={};M.T=y,Bo(e,!1,t,n);try{var w=o(),R=M.S;if(R!==null&&R(y,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var L=Ym(w,a);ii(e,t,L,Zt(e))}else ii(e,t,a,Zt(e))}catch(H){ii(e,t,{then:function(){},status:"rejected",reason:H},Zt())}finally{V.p=c,p!==null&&y.types!==null&&(p.types=y.types),M.T=p}}function $m(){}function Ho(e,t,n,a){if(e.tag!==5)throw Error(r(476));var o=S0(e).queue;x0(e,o,t,W,n===null?$m:function(){return w0(e),n(a)})}function S0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:W},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function w0(e){var t=S0(e);t.next===null&&(t=e.alternate.memoizedState),ii(e,t.next.queue,{},Zt())}function Zo(){return ct(wi)}function C0(){return Ke().memoizedState}function E0(){return Ke().memoizedState}function Fm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Zt();e=Wn(n);var a=ea(t,e,n);a!==null&&(Rt(a,t,n),ei(a,t,n)),t={cache:ho()},e.payload=t;return}t=t.return}}function Jm(e,t,n){var a=Zt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ds(e)?N0(t,n):(n=no(e,t,n,a),n!==null&&(Rt(n,e,a),T0(n,t,a)))}function A0(e,t,n){var a=Zt();ii(e,t,n,a)}function ii(e,t,n,a){var o={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ds(e))N0(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,y=c(p,n);if(o.hasEagerState=!0,o.eagerState=y,Ot(y,p))return os(e,t,o,0),Le===null&&rs(),!1}catch{}finally{}if(n=no(e,t,o,a),n!==null)return Rt(n,e,a),T0(n,t,a),!0}return!1}function Bo(e,t,n,a){if(a={lane:2,revertLane:vc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ds(e)){if(t)throw Error(r(479))}else t=no(e,n,a,2),t!==null&&Rt(t,e,2)}function Ds(e){var t=e.alternate;return e===he||t!==null&&t===he}function N0(e,t){pl=Ss=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function T0(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,jt(e,n)}}var si={readContext:ct,use:Es,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye};si.useEffectEvent=Ye;var D0={readContext:ct,use:Es,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:d0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ns(4194308,4,m0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ns(4194308,4,e,t)},useInsertionEffect:function(e,t){Ns(4,2,e,t)},useMemo:function(e,t){var n=bt();t=t===void 0?null:t;var a=e();if(_a){Yt(!0);try{e()}finally{Yt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=bt();if(n!==void 0){var o=n(t);if(_a){Yt(!0);try{n(t)}finally{Yt(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=Jm.bind(null,he,e),[a.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=Oo(e);var t=e.queue,n=A0.bind(null,he,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Lo,useDeferredValue:function(e,t){var n=bt();return Uo(n,e,t)},useTransition:function(){var e=Oo(!1);return e=x0.bind(null,he,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=he,o=bt();if(we){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Le===null)throw Error(r(349));(xe&127)!==0||$d(a,t,n)}o.memoizedState=n;var c={value:n,getSnapshot:t};return o.queue=c,d0(Jd.bind(null,a,c,e),[e]),a.flags|=2048,ml(9,{destroy:void 0},Fd.bind(null,a,c,n,t),null),n},useId:function(){var e=bt(),t=Le.identifierPrefix;if(we){var n=bn,a=gn;n=(a&~(1<<32-pt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ws++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Im++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zo,useFormState:s0,useActionState:s0,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Bo.bind(null,he,!0,n),n.dispatch=t,[e,t]},useMemoCache:ko,useCacheRefresh:function(){return bt().memoizedState=Fm.bind(null,he)},useEffectEvent:function(e){var t=bt(),n={impl:e};return t.memoizedState=n,function(){if((Ae&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}},qo={readContext:ct,use:Es,useCallback:b0,useContext:ct,useEffect:_o,useImperativeHandle:g0,useInsertionEffect:p0,useLayoutEffect:h0,useMemo:v0,useReducer:As,useRef:u0,useState:function(){return As(On)},useDebugValue:Lo,useDeferredValue:function(e,t){var n=Ke();return y0(n,Re.memoizedState,e,t)},useTransition:function(){var e=As(On)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:li(e),t]},useSyncExternalStore:Kd,useId:C0,useHostTransitionStatus:Zo,useFormState:r0,useActionState:r0,useOptimistic:function(e,t){var n=Ke();return e0(n,Re,e,t)},useMemoCache:ko,useCacheRefresh:E0};qo.useEffectEvent=f0;var M0={readContext:ct,use:Es,useCallback:b0,useContext:ct,useEffect:_o,useImperativeHandle:g0,useInsertionEffect:p0,useLayoutEffect:h0,useMemo:v0,useReducer:jo,useRef:u0,useState:function(){return jo(On)},useDebugValue:Lo,useDeferredValue:function(e,t){var n=Ke();return Re===null?Uo(n,e,t):y0(n,Re.memoizedState,e,t)},useTransition:function(){var e=jo(On)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:li(e),t]},useSyncExternalStore:Kd,useId:C0,useHostTransitionStatus:Zo,useFormState:c0,useActionState:c0,useOptimistic:function(e,t){var n=Ke();return Re!==null?e0(n,Re,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ko,useCacheRefresh:E0};M0.useEffectEvent=f0;function Vo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yo={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Zt(),o=Wn(a);o.payload=t,n!=null&&(o.callback=n),t=ea(e,o,a),t!==null&&(Rt(t,e,a),ei(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Zt(),o=Wn(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ea(e,o,a),t!==null&&(Rt(t,e,a),ei(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Zt(),a=Wn(n);a.tag=2,t!=null&&(a.callback=t),t=ea(e,a,n),t!==null&&(Rt(t,e,n),ei(t,e,n))}};function k0(e,t,n,a,o,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,p):t.prototype&&t.prototype.isPureReactComponent?!Xl(n,a)||!Xl(o,c):!0}function R0(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Yo.enqueueReplaceState(t,t.state,null)}function La(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function j0(e){ss(e)}function O0(e){console.error(e)}function z0(e){ss(e)}function Ms(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function _0(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Io(e,t,n){return n=Wn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ms(e,t)},n}function L0(e){return e=Wn(e),e.tag=3,e}function U0(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var c=a.value;e.payload=function(){return o(c)},e.callback=function(){_0(t,n,a)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){_0(t,n,a),typeof o!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var y=a.stack;this.componentDidCatch(a.value,{componentStack:y!==null?y:""})})}function Pm(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&rl(t,n,o,!0),n=_t.current,n!==null){switch(n.tag){case 31:case 13:return en===null?qs():n.alternate===null&&Ie===0&&(Ie=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===gs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),mc(e,a,o)),!1;case 22:return n.flags|=65536,a===gs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),mc(e,a,o)),!1}throw Error(r(435,n.tag))}return mc(e,a,o),qs(),!1}if(we)return t=_t.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==oo&&(e=Error(r(422),{cause:a}),$l(Ft(e,n)))):(a!==oo&&(t=Error(r(423),{cause:a}),$l(Ft(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=Ft(a,n),o=Io(e.stateNode,a,o),xo(e,o),Ie!==4&&(Ie=2)),!1;var c=Error(r(520),{cause:a});if(c=Ft(c,n),hi===null?hi=[c]:hi.push(c),Ie!==4&&(Ie=2),t===null)return!0;a=Ft(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Io(n.stateNode,a,e),xo(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(sa===null||!sa.has(c))))return n.flags|=65536,o&=-o,n.lanes|=o,o=L0(o),U0(o,e,n,a),xo(n,o),!1}n=n.return}while(n!==null);return!1}var Go=Error(r(461)),Je=!1;function ut(e,t,n,a){t.child=e===null?qd(t,null,n,a):za(t,e.child,n,a)}function H0(e,t,n,a,o){n=n.render;var c=t.ref;if("ref"in a){var p={};for(var y in a)y!=="ref"&&(p[y]=a[y])}else p=a;return ka(t),a=No(e,t,n,p,c,o),y=To(),e!==null&&!Je?(Do(e,t,o),zn(e,t,o)):(we&&y&&so(t),t.flags|=1,ut(e,t,a,o),t.child)}function Z0(e,t,n,a,o){if(e===null){var c=n.type;return typeof c=="function"&&!ao(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,B0(e,t,c,a,o)):(e=us(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Wo(e,o)){var p=c.memoizedProps;if(n=n.compare,n=n!==null?n:Xl,n(p,a)&&e.ref===t.ref)return zn(e,t,o)}return t.flags|=1,e=Dn(c,a),e.ref=t.ref,e.return=t,t.child=e}function B0(e,t,n,a,o){if(e!==null){var c=e.memoizedProps;if(Xl(c,a)&&e.ref===t.ref)if(Je=!1,t.pendingProps=a=c,Wo(e,o))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,zn(e,t,o)}return Xo(e,t,n,a,o)}function q0(e,t,n,a){var o=a.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~c}else a=0,t.child=null;return V0(e,t,c,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&hs(t,c!==null?c.cachePool:null),c!==null?Id(t,c):wo(),Gd(t);else return a=t.lanes=536870912,V0(e,t,c!==null?c.baseLanes|n:n,n,a)}else c!==null?(hs(t,c.cachePool),Id(t,c),na(),t.memoizedState=null):(e!==null&&hs(t,null),wo(),na());return ut(e,t,o,n),t.child}function ri(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function V0(e,t,n,a,o){var c=go();return c=c===null?null:{parent:$e._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&hs(t,null),wo(),Gd(t),e!==null&&rl(e,t,a,!0),t.childLanes=o,null}function ks(e,t){return t=js({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Y0(e,t,n){return za(t,e.child,null,n),e=ks(t,t.pendingProps),e.flags|=2,Lt(t),t.memoizedState=null,e}function Wm(e,t,n){var a=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(we){if(a.mode==="hidden")return e=ks(t,a),t.lanes=536870912,ri(null,e);if(Eo(t),(e=He)?(e=tf(e,Wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Kn!==null?{id:gn,overflow:bn}:null,retryLane:536870912,hydrationErrors:null},n=Nd(e),n.return=t,t.child=n,ot=t,He=null)):e=null,e===null)throw Fn(t);return t.lanes=536870912,null}return ks(t,a)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(Eo(t),o)if(t.flags&256)t.flags&=-257,t=Y0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Je||rl(e,t,n,!1),o=(n&e.childLanes)!==0,Je||o){if(a=Le,a!==null&&(p=Gt(a,n),p!==0&&p!==c.retryLane))throw c.retryLane=p,Na(e,p),Rt(a,e,p),Go;qs(),t=Y0(e,t,n)}else e=c.treeContext,He=tn(p.nextSibling),ot=t,we=!0,$n=null,Wt=!1,e!==null&&Md(t,e),t=ks(t,a),t.flags|=4096;return t}return e=Dn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Rs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Xo(e,t,n,a,o){return ka(t),n=No(e,t,n,a,void 0,o),a=To(),e!==null&&!Je?(Do(e,t,o),zn(e,t,o)):(we&&a&&so(t),t.flags|=1,ut(e,t,n,o),t.child)}function I0(e,t,n,a,o,c){return ka(t),t.updateQueue=null,n=Qd(t,a,n,o),Xd(e),a=To(),e!==null&&!Je?(Do(e,t,c),zn(e,t,c)):(we&&a&&so(t),t.flags|=1,ut(e,t,n,c),t.child)}function G0(e,t,n,a,o){if(ka(t),t.stateNode===null){var c=al,p=n.contextType;typeof p=="object"&&p!==null&&(c=ct(p)),c=new n(a,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Yo,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=a,c.state=t.memoizedState,c.refs={},vo(t),p=n.contextType,c.context=typeof p=="object"&&p!==null?ct(p):al,c.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Vo(t,n,p,a),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&Yo.enqueueReplaceState(c,c.state,null),ni(t,a,c,o),ti(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){c=t.stateNode;var y=t.memoizedProps,w=La(n,y);c.props=w;var R=c.context,L=n.contextType;p=al,typeof L=="object"&&L!==null&&(p=ct(L));var H=n.getDerivedStateFromProps;L=typeof H=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,L||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||R!==p)&&R0(t,c,a,p),Pn=!1;var j=t.memoizedState;c.state=j,ni(t,a,c,o),ti(),R=t.memoizedState,y||j!==R||Pn?(typeof H=="function"&&(Vo(t,n,H,a),R=t.memoizedState),(w=Pn||k0(t,n,w,a,j,R,p))?(L||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=R),c.props=a,c.state=R,c.context=p,a=w):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{c=t.stateNode,yo(e,t),p=t.memoizedProps,L=La(n,p),c.props=L,H=t.pendingProps,j=c.context,R=n.contextType,w=al,typeof R=="object"&&R!==null&&(w=ct(R)),y=n.getDerivedStateFromProps,(R=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==H||j!==w)&&R0(t,c,a,w),Pn=!1,j=t.memoizedState,c.state=j,ni(t,a,c,o),ti();var z=t.memoizedState;p!==H||j!==z||Pn||e!==null&&e.dependencies!==null&&fs(e.dependencies)?(typeof y=="function"&&(Vo(t,n,y,a),z=t.memoizedState),(L=Pn||k0(t,n,L,a,j,z,w)||e!==null&&e.dependencies!==null&&fs(e.dependencies))?(R||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,z,w),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,z,w)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=z),c.props=a,c.state=z,c.context=w,a=L):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),a=!1)}return c=a,Rs(e,t),a=(t.flags&128)!==0,c||a?(c=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&a?(t.child=za(t,e.child,null,o),t.child=za(t,null,n,o)):ut(e,t,n,o),t.memoizedState=c.state,e=t.child):e=zn(e,t,o),e}function X0(e,t,n,a){return Da(),t.flags|=256,ut(e,t,n,a),t.child}var Qo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ko(e){return{baseLanes:e,cachePool:_d()}}function $o(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ht),e}function Q0(e,t,n){var a=t.pendingProps,o=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),p&&(o=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(we){if(o?ta(t):na(),(e=He)?(e=tf(e,Wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Kn!==null?{id:gn,overflow:bn}:null,retryLane:536870912,hydrationErrors:null},n=Nd(e),n.return=t,t.child=n,ot=t,He=null)):e=null,e===null)throw Fn(t);return Rc(e)?t.lanes=32:t.lanes=536870912,null}var y=a.children;return a=a.fallback,o?(na(),o=t.mode,y=js({mode:"hidden",children:y},o),a=Ta(a,o,n,null),y.return=t,a.return=t,y.sibling=a,t.child=y,a=t.child,a.memoizedState=Ko(n),a.childLanes=$o(e,p,n),t.memoizedState=Qo,ri(null,a)):(ta(t),Fo(t,y))}var w=e.memoizedState;if(w!==null&&(y=w.dehydrated,y!==null)){if(c)t.flags&256?(ta(t),t.flags&=-257,t=Jo(e,t,n)):t.memoizedState!==null?(na(),t.child=e.child,t.flags|=128,t=null):(na(),y=a.fallback,o=t.mode,a=js({mode:"visible",children:a.children},o),y=Ta(y,o,n,null),y.flags|=2,a.return=t,y.return=t,a.sibling=y,t.child=a,za(t,e.child,null,n),a=t.child,a.memoizedState=Ko(n),a.childLanes=$o(e,p,n),t.memoizedState=Qo,t=ri(null,a));else if(ta(t),Rc(y)){if(p=y.nextSibling&&y.nextSibling.dataset,p)var R=p.dgst;p=R,a=Error(r(419)),a.stack="",a.digest=p,$l({value:a,source:null,stack:null}),t=Jo(e,t,n)}else if(Je||rl(e,t,n,!1),p=(n&e.childLanes)!==0,Je||p){if(p=Le,p!==null&&(a=Gt(p,n),a!==0&&a!==w.retryLane))throw w.retryLane=a,Na(e,a),Rt(p,e,a),Go;kc(y)||qs(),t=Jo(e,t,n)}else kc(y)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,He=tn(y.nextSibling),ot=t,we=!0,$n=null,Wt=!1,e!==null&&Md(t,e),t=Fo(t,a.children),t.flags|=4096);return t}return o?(na(),y=a.fallback,o=t.mode,w=e.child,R=w.sibling,a=Dn(w,{mode:"hidden",children:a.children}),a.subtreeFlags=w.subtreeFlags&65011712,R!==null?y=Dn(R,y):(y=Ta(y,o,n,null),y.flags|=2),y.return=t,a.return=t,a.sibling=y,t.child=a,ri(null,a),a=t.child,y=e.child.memoizedState,y===null?y=Ko(n):(o=y.cachePool,o!==null?(w=$e._currentValue,o=o.parent!==w?{parent:w,pool:w}:o):o=_d(),y={baseLanes:y.baseLanes|n,cachePool:o}),a.memoizedState=y,a.childLanes=$o(e,p,n),t.memoizedState=Qo,ri(e.child,a)):(ta(t),n=e.child,e=n.sibling,n=Dn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Fo(e,t){return t=js({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function js(e,t){return e=zt(22,e,null,t),e.lanes=0,e}function Jo(e,t,n){return za(t,e.child,null,n),e=Fo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function K0(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),fo(e.return,t,n)}function Po(e,t,n,a,o,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o,treeForkCount:c}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=a,p.tail=n,p.tailMode=o,p.treeForkCount=c)}function $0(e,t,n){var a=t.pendingProps,o=a.revealOrder,c=a.tail;a=a.children;var p=Qe.current,y=(p&2)!==0;if(y?(p=p&1|2,t.flags|=128):p&=1,K(Qe,p),ut(e,t,a,n),a=we?Kl:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&K0(e,n,t);else if(e.tag===19)K0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&xs(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Po(t,!1,o,n,c,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&xs(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Po(t,!0,n,null,c,a);break;case"together":Po(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ia|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(rl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fs(e)))}function e2(e,t,n){switch(t.tag){case 3:re(t,t.stateNode.containerInfo),Jn(t,$e,e.memoizedState.cache),Da();break;case 27:case 5:fe(t);break;case 4:re(t,t.stateNode.containerInfo);break;case 10:Jn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Eo(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ta(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Q0(e,t,n):(ta(t),e=zn(e,t,n),e!==null?e.sibling:null);ta(t);break;case 19:var o=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(rl(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return $0(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(Qe,Qe.current),a)break;return null;case 22:return t.lanes=0,q0(e,t,n,t.pendingProps);case 24:Jn(t,$e,e.memoizedState.cache)}return zn(e,t,n)}function F0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Wo(e,n)&&(t.flags&128)===0)return Je=!1,e2(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,we&&(t.flags&1048576)!==0&&Dd(t,Kl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e=="function")ao(e)?(a=La(e,a),t.tag=1,t=G0(null,t,e,a,n)):(t.tag=0,t=Xo(null,t,e,a,n));else{if(e!=null){var o=e.$$typeof;if(o===X){t.tag=11,t=H0(null,t,e,a,n);break e}else if(o===q){t.tag=14,t=Z0(null,t,e,a,n);break e}}throw t=_e(e)||e,Error(r(306,t,""))}}return t;case 0:return Xo(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=La(a,t.pendingProps),G0(e,t,a,o,n);case 3:e:{if(re(t,t.stateNode.containerInfo),e===null)throw Error(r(387));a=t.pendingProps;var c=t.memoizedState;o=c.element,yo(e,t),ni(t,a,null,n);var p=t.memoizedState;if(a=p.cache,Jn(t,$e,a),a!==c.cache&&po(t,[$e],n,!0),ti(),a=p.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=X0(e,t,a,n);break e}else if(a!==o){o=Ft(Error(r(424)),t),$l(o),t=X0(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=tn(e.firstChild),ot=t,we=!0,$n=null,Wt=!0,n=qd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Da(),a===o){t=zn(e,t,n);break e}ut(e,t,a,n)}t=t.child}return t;case 26:return Rs(e,t),e===null?(n=of(t.type,null,t.pendingProps,null))?t.memoizedState=n:we||(n=t.type,e=t.pendingProps,a=Ks($.current).createElement(n),a[rt]=t,a[At]=e,dt(a,n,e),lt(a),t.stateNode=a):t.memoizedState=of(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fe(t),e===null&&we&&(a=t.stateNode=lf(t.type,t.pendingProps,$.current),ot=t,Wt=!0,o=He,ua(t.type)?(jc=o,He=tn(a.firstChild)):He=o),ut(e,t,t.pendingProps.children,n),Rs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&we&&((o=a=He)&&(a=k2(a,t.type,t.pendingProps,Wt),a!==null?(t.stateNode=a,ot=t,He=tn(a.firstChild),Wt=!1,o=!0):o=!1),o||Fn(t)),fe(t),o=t.type,c=t.pendingProps,p=e!==null?e.memoizedProps:null,a=c.children,Tc(o,c)?a=null:p!==null&&Tc(o,p)&&(t.flags|=32),t.memoizedState!==null&&(o=No(e,t,Gm,null,null,n),wi._currentValue=o),Rs(e,t),ut(e,t,a,n),t.child;case 6:return e===null&&we&&((e=n=He)&&(n=R2(n,t.pendingProps,Wt),n!==null?(t.stateNode=n,ot=t,He=null,e=!0):e=!1),e||Fn(t)),null;case 13:return Q0(e,t,n);case 4:return re(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=za(t,null,a,n):ut(e,t,a,n),t.child;case 11:return H0(e,t,t.type,t.pendingProps,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Jn(t,t.type,a.value),ut(e,t,a.children,n),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,ka(t),o=ct(o),a=a(o),t.flags|=1,ut(e,t,a,n),t.child;case 14:return Z0(e,t,t.type,t.pendingProps,n);case 15:return B0(e,t,t.type,t.pendingProps,n);case 19:return $0(e,t,n);case 31:return Wm(e,t,n);case 22:return q0(e,t,n,t.pendingProps);case 24:return ka(t),a=ct($e),e===null?(o=go(),o===null&&(o=Le,c=ho(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=n),o=c),t.memoizedState={parent:a,cache:o},vo(t),Jn(t,$e,o)):((e.lanes&n)!==0&&(yo(e,t),ni(t,null,null,n),ti()),o=e.memoizedState,c=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Jn(t,$e,a)):(a=c.cache,Jn(t,$e,a),a!==o.cache&&po(t,[$e],n,!0))),ut(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function _n(e){e.flags|=4}function ec(e,t,n,a,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(C1())e.flags|=8192;else throw Oa=gs,bo}else e.flags&=-16777217}function J0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pf(t))if(C1())e.flags|=8192;else throw Oa=gs,bo}function Os(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ht():536870912,e.lanes|=t,yl|=t)}function oi(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&65011712,a|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function t2(e,t,n){var a=t.pendingProps;switch(ro(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return Ze(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Rn($e),ie(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(sl(t)?_n(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,co())),Ze(t),null;case 26:var o=t.type,c=t.memoizedState;return e===null?(_n(t),c!==null?(Ze(t),J0(t,c)):(Ze(t),ec(t,o,null,a,n))):c?c!==e.memoizedState?(_n(t),Ze(t),J0(t,c)):(Ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&_n(t),Ze(t),ec(t,o,e,a,n)),null;case 27:if(St(t),n=$.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&_n(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return Ze(t),null}e=J.current,sl(t)?kd(t):(e=lf(o,a,n),t.stateNode=e,_n(t))}return Ze(t),null;case 5:if(St(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&_n(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return Ze(t),null}if(c=J.current,sl(t))kd(t);else{var p=Ks($.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof a.is=="string"?p.createElement("select",{is:a.is}):p.createElement("select"),a.multiple?c.multiple=!0:a.size&&(c.size=a.size);break;default:c=typeof a.is=="string"?p.createElement(o,{is:a.is}):p.createElement(o)}}c[rt]=t,c[At]=a;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=c;e:switch(dt(c,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&_n(t)}}return Ze(t),ec(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&_n(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(r(166));if(e=$.current,sl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=ot,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[rt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Q1(e.nodeValue,n)),e||Fn(t,!0)}else e=Ks(e).createTextNode(a),e[rt]=t,t.stateNode=e}return Ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=sl(t),n!==null){if(e===null){if(!a)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[rt]=t}else Da(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),e=!1}else n=co(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Lt(t),t):(Lt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Ze(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=sl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(r(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[rt]=t}else Da(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else o=co(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Lt(t),t):(Lt(t),null)}return Lt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==o&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Os(t,t.updateQueue),Ze(t),null);case 4:return ie(),e===null&&wc(t.stateNode.containerInfo),Ze(t),null;case 10:return Rn(t.type),Ze(t),null;case 19:if(_(Qe),a=t.memoizedState,a===null)return Ze(t),null;if(o=(t.flags&128)!==0,c=a.rendering,c===null)if(o)oi(a,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=xs(e),c!==null){for(t.flags|=128,oi(a,!1),e=c.updateQueue,t.updateQueue=e,Os(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ad(n,e),n=n.sibling;return K(Qe,Qe.current&1|2),we&&Mn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&ft()>Hs&&(t.flags|=128,o=!0,oi(a,!1),t.lanes=4194304)}else{if(!o)if(e=xs(c),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Os(t,e),oi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!we)return Ze(t),null}else 2*ft()-a.renderingStartTime>Hs&&n!==536870912&&(t.flags|=128,o=!0,oi(a,!1),t.lanes=4194304);a.isBackwards?(c.sibling=t.child,t.child=c):(e=a.last,e!==null?e.sibling=c:t.child=c,a.last=c)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ft(),e.sibling=null,n=Qe.current,K(Qe,o?n&1|2:n&1),we&&Mn(t,a.treeForkCount),e):(Ze(t),null);case 22:case 23:return Lt(t),Co(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),n=t.updateQueue,n!==null&&Os(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&_(Ra),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Rn($e),Ze(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function n2(e,t){switch(ro(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn($e),ie(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return St(t),null;case 31:if(t.memoizedState!==null){if(Lt(t),t.alternate===null)throw Error(r(340));Da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Qe),null;case 4:return ie(),null;case 10:return Rn(t.type),null;case 22:case 23:return Lt(t),Co(),e!==null&&_(Ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Rn($e),null;case 25:return null;default:return null}}function P0(e,t){switch(ro(t),t.tag){case 3:Rn($e),ie();break;case 26:case 27:case 5:St(t);break;case 4:ie();break;case 31:t.memoizedState!==null&&Lt(t);break;case 13:Lt(t);break;case 19:_(Qe);break;case 10:Rn(t.type);break;case 22:case 23:Lt(t),Co(),e!==null&&_(Ra);break;case 24:Rn($e)}}function ci(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var c=n.create,p=n.inst;a=c(),p.destroy=a}n=n.next}while(n!==o)}}catch(y){Me(t,t.return,y)}}function aa(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){var p=a.inst,y=p.destroy;if(y!==void 0){p.destroy=void 0,o=t;var w=n,R=y;try{R()}catch(L){Me(o,w,L)}}}a=a.next}while(a!==c)}}catch(L){Me(t,t.return,L)}}function W0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Yd(t,n)}catch(a){Me(e,e.return,a)}}}function e1(e,t,n){n.props=La(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Me(e,t,a)}}function ui(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(o){Me(e,t,o)}}function vn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){Me(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Me(e,t,o)}else n.current=null}function t1(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){Me(e,e.return,o)}}function tc(e,t,n){try{var a=e.stateNode;E2(a,e.type,n,t),a[At]=t}catch(o){Me(e,e.return,o)}}function n1(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ua(e.type)||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||n1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ac(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nn));else if(a!==4&&(a===27&&ua(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ac(e,t,n),e=e.sibling;e!==null;)ac(e,t,n),e=e.sibling}function zs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ua(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(zs(e,t,n),e=e.sibling;e!==null;)zs(e,t,n),e=e.sibling}function a1(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);dt(t,a,n),t[rt]=e,t[At]=n}catch(c){Me(e,e.return,c)}}var Ln=!1,Pe=!1,lc=!1,l1=typeof WeakSet=="function"?WeakSet:Set,it=null;function a2(e,t){if(e=e.containerInfo,Ac=tr,e=gd(e),Fr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var p=0,y=-1,w=-1,R=0,L=0,H=e,j=null;t:for(;;){for(var z;H!==n||o!==0&&H.nodeType!==3||(y=p+o),H!==c||a!==0&&H.nodeType!==3||(w=p+a),H.nodeType===3&&(p+=H.nodeValue.length),(z=H.firstChild)!==null;)j=H,H=z;for(;;){if(H===e)break t;if(j===n&&++R===o&&(y=p),j===c&&++L===a&&(w=p),(z=H.nextSibling)!==null)break;H=j,j=H.parentNode}H=z}n=y===-1||w===-1?null:{start:y,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nc={focusedElem:e,selectionRange:n},tr=!1,it=t;it!==null;)if(t=it,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,it=e;else for(;it!==null;){switch(t=it,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,o=c.memoizedProps,c=c.memoizedState,a=n.stateNode;try{var ee=La(n.type,o);e=a.getSnapshotBeforeUpdate(ee,c),a.__reactInternalSnapshotBeforeUpdate=e}catch(se){Me(n,n.return,se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Mc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Mc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,it=e;break}it=t.return}}function i1(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Hn(e,n),a&4&&ci(5,n);break;case 1:if(Hn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){Me(n,n.return,p)}else{var o=La(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Me(n,n.return,p)}}a&64&&W0(n),a&512&&ui(n,n.return);break;case 3:if(Hn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Yd(e,t)}catch(p){Me(n,n.return,p)}}break;case 27:t===null&&a&4&&a1(n);case 26:case 5:Hn(e,n),t===null&&a&4&&t1(n),a&512&&ui(n,n.return);break;case 12:Hn(e,n);break;case 31:Hn(e,n),a&4&&o1(e,n);break;case 13:Hn(e,n),a&4&&c1(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=f2.bind(null,n),j2(e,n))));break;case 22:if(a=n.memoizedState!==null||Ln,!a){t=t!==null&&t.memoizedState!==null||Pe,o=Ln;var c=Pe;Ln=a,(Pe=t)&&!c?Zn(e,n,(n.subtreeFlags&8772)!==0):Hn(e,n),Ln=o,Pe=c}break;case 30:break;default:Hn(e,n)}}function s1(e){var t=e.alternate;t!==null&&(e.alternate=null,s1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Or(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,Tt=!1;function Un(e,t,n){for(n=n.child;n!==null;)r1(e,t,n),n=n.sibling}function r1(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Sa,n)}catch{}switch(n.tag){case 26:Pe||vn(n,t),Un(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Pe||vn(n,t);var a=Be,o=Tt;ua(n.type)&&(Be=n.stateNode,Tt=!1),Un(e,t,n),yi(n.stateNode),Be=a,Tt=o;break;case 5:Pe||vn(n,t);case 6:if(a=Be,o=Tt,Be=null,Un(e,t,n),Be=a,Tt=o,Be!==null)if(Tt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(n.stateNode)}catch(c){Me(n,t,c)}else try{Be.removeChild(n.stateNode)}catch(c){Me(n,t,c)}break;case 18:Be!==null&&(Tt?(e=Be,W1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Tl(e)):W1(Be,n.stateNode));break;case 4:a=Be,o=Tt,Be=n.stateNode.containerInfo,Tt=!0,Un(e,t,n),Be=a,Tt=o;break;case 0:case 11:case 14:case 15:aa(2,n,t),Pe||aa(4,n,t),Un(e,t,n);break;case 1:Pe||(vn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&e1(n,t,a)),Un(e,t,n);break;case 21:Un(e,t,n);break;case 22:Pe=(a=Pe)||n.memoizedState!==null,Un(e,t,n),Pe=a;break;default:Un(e,t,n)}}function o1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tl(e)}catch(n){Me(t,t.return,n)}}}function c1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tl(e)}catch(n){Me(t,t.return,n)}}function l2(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new l1),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new l1),t;default:throw Error(r(435,e.tag))}}function _s(e,t){var n=l2(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var o=p2.bind(null,e,a);a.then(o,o)}})}function Dt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a],c=e,p=t,y=p;e:for(;y!==null;){switch(y.tag){case 27:if(ua(y.type)){Be=y.stateNode,Tt=!1;break e}break;case 5:Be=y.stateNode,Tt=!1;break e;case 3:case 4:Be=y.stateNode.containerInfo,Tt=!0;break e}y=y.return}if(Be===null)throw Error(r(160));r1(c,p,o),Be=null,Tt=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)u1(t,e),t=t.sibling}var cn=null;function u1(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dt(t,e),Mt(e),a&4&&(aa(3,e,e.return),ci(3,e),aa(5,e,e.return));break;case 1:Dt(t,e),Mt(e),a&512&&(Pe||n===null||vn(n,n.return)),a&64&&Ln&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var o=cn;if(Dt(t,e),Mt(e),a&512&&(Pe||n===null||vn(n,n.return)),a&4){var c=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Ul]||c[rt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(a),o.head.insertBefore(c,o.querySelector("head > title"))),dt(c,a,n),c[rt]=e,lt(c),a=c;break e;case"link":var p=df("link","href",o).get(a+(n.href||""));if(p){for(var y=0;y<p.length;y++)if(c=p[y],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(y,1);break t}}c=o.createElement(a),dt(c,a,n),o.head.appendChild(c);break;case"meta":if(p=df("meta","content",o).get(a+(n.content||""))){for(y=0;y<p.length;y++)if(c=p[y],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(y,1);break t}}c=o.createElement(a),dt(c,a,n),o.head.appendChild(c);break;default:throw Error(r(468,a))}c[rt]=e,lt(c),a=c}e.stateNode=a}else ff(o,e.type,e.stateNode);else e.stateNode=uf(o,a,e.memoizedProps);else c!==a?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,a===null?ff(o,e.type,e.stateNode):uf(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&tc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Dt(t,e),Mt(e),a&512&&(Pe||n===null||vn(n,n.return)),n!==null&&a&4&&tc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Dt(t,e),Mt(e),a&512&&(Pe||n===null||vn(n,n.return)),e.flags&32){o=e.stateNode;try{Fa(o,"")}catch(ee){Me(e,e.return,ee)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,tc(e,o,n!==null?n.memoizedProps:o)),a&1024&&(lc=!0);break;case 6:if(Dt(t,e),Mt(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ee){Me(e,e.return,ee)}}break;case 3:if(Js=null,o=cn,cn=$s(t.containerInfo),Dt(t,e),cn=o,Mt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Tl(t.containerInfo)}catch(ee){Me(e,e.return,ee)}lc&&(lc=!1,d1(e));break;case 4:a=cn,cn=$s(e.stateNode.containerInfo),Dt(t,e),Mt(e),cn=a;break;case 12:Dt(t,e),Mt(e);break;case 31:Dt(t,e),Mt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,_s(e,a)));break;case 13:Dt(t,e),Mt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Us=ft()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,_s(e,a)));break;case 22:o=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,R=Ln,L=Pe;if(Ln=R||o,Pe=L||w,Dt(t,e),Pe=L,Ln=R,Mt(e),a&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||w||Ln||Pe||Ua(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(c=w.stateNode,o)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{y=w.stateNode;var H=w.memoizedProps.style,j=H!=null&&H.hasOwnProperty("display")?H.display:null;y.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(ee){Me(w,w.return,ee)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=o?"":w.memoizedProps}catch(ee){Me(w,w.return,ee)}}}else if(t.tag===18){if(n===null){w=t;try{var z=w.stateNode;o?ef(z,!0):ef(w.stateNode,!1)}catch(ee){Me(w,w.return,ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,_s(e,n))));break;case 19:Dt(t,e),Mt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,_s(e,a)));break;case 30:break;case 21:break;default:Dt(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(n1(a)){n=a;break}a=a.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var o=n.stateNode,c=nc(e);zs(e,c,o);break;case 5:var p=n.stateNode;n.flags&32&&(Fa(p,""),n.flags&=-33);var y=nc(e);zs(e,y,p);break;case 3:case 4:var w=n.stateNode.containerInfo,R=nc(e);ac(e,R,w);break;default:throw Error(r(161))}}catch(L){Me(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function d1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;d1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Hn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)i1(e,t.alternate,t),t=t.sibling}function Ua(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:aa(4,t,t.return),Ua(t);break;case 1:vn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&e1(t,t.return,n),Ua(t);break;case 27:yi(t.stateNode);case 26:case 5:vn(t,t.return),Ua(t);break;case 22:t.memoizedState===null&&Ua(t);break;case 30:Ua(t);break;default:Ua(t)}e=e.sibling}}function Zn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,o=e,c=t,p=c.flags;switch(c.tag){case 0:case 11:case 15:Zn(o,c,n),ci(4,c);break;case 1:if(Zn(o,c,n),a=c,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(R){Me(a,a.return,R)}if(a=c,o=a.updateQueue,o!==null){var y=a.stateNode;try{var w=o.shared.hiddenCallbacks;if(w!==null)for(o.shared.hiddenCallbacks=null,o=0;o<w.length;o++)Vd(w[o],y)}catch(R){Me(a,a.return,R)}}n&&p&64&&W0(c),ui(c,c.return);break;case 27:a1(c);case 26:case 5:Zn(o,c,n),n&&a===null&&p&4&&t1(c),ui(c,c.return);break;case 12:Zn(o,c,n);break;case 31:Zn(o,c,n),n&&p&4&&o1(o,c);break;case 13:Zn(o,c,n),n&&p&4&&c1(o,c);break;case 22:c.memoizedState===null&&Zn(o,c,n),ui(c,c.return);break;case 30:break;default:Zn(o,c,n)}t=t.sibling}}function ic(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fl(n))}function sc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fl(e))}function un(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)f1(e,t,n,a),t=t.sibling}function f1(e,t,n,a){var o=t.flags;switch(t.tag){case 0:case 11:case 15:un(e,t,n,a),o&2048&&ci(9,t);break;case 1:un(e,t,n,a);break;case 3:un(e,t,n,a),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fl(e)));break;case 12:if(o&2048){un(e,t,n,a),e=t.stateNode;try{var c=t.memoizedProps,p=c.id,y=c.onPostCommit;typeof y=="function"&&y(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Me(t,t.return,w)}}else un(e,t,n,a);break;case 31:un(e,t,n,a);break;case 13:un(e,t,n,a);break;case 23:break;case 22:c=t.stateNode,p=t.alternate,t.memoizedState!==null?c._visibility&2?un(e,t,n,a):di(e,t):c._visibility&2?un(e,t,n,a):(c._visibility|=2,gl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),o&2048&&ic(p,t);break;case 24:un(e,t,n,a),o&2048&&sc(t.alternate,t);break;default:un(e,t,n,a)}}function gl(e,t,n,a,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,p=t,y=n,w=a,R=p.flags;switch(p.tag){case 0:case 11:case 15:gl(c,p,y,w,o),ci(8,p);break;case 23:break;case 22:var L=p.stateNode;p.memoizedState!==null?L._visibility&2?gl(c,p,y,w,o):di(c,p):(L._visibility|=2,gl(c,p,y,w,o)),o&&R&2048&&ic(p.alternate,p);break;case 24:gl(c,p,y,w,o),o&&R&2048&&sc(p.alternate,p);break;default:gl(c,p,y,w,o)}t=t.sibling}}function di(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:di(n,a),o&2048&&ic(a.alternate,a);break;case 24:di(n,a),o&2048&&sc(a.alternate,a);break;default:di(n,a)}t=t.sibling}}var fi=8192;function bl(e,t,n){if(e.subtreeFlags&fi)for(e=e.child;e!==null;)p1(e,t,n),e=e.sibling}function p1(e,t,n){switch(e.tag){case 26:bl(e,t,n),e.flags&fi&&e.memoizedState!==null&&I2(n,cn,e.memoizedState,e.memoizedProps);break;case 5:bl(e,t,n);break;case 3:case 4:var a=cn;cn=$s(e.stateNode.containerInfo),bl(e,t,n),cn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=fi,fi=16777216,bl(e,t,n),fi=a):bl(e,t,n));break;default:bl(e,t,n)}}function h1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];it=a,g1(a,e)}h1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)m1(e),e=e.sibling}function m1(e){switch(e.tag){case 0:case 11:case 15:pi(e),e.flags&2048&&aa(9,e,e.return);break;case 3:pi(e);break;case 12:pi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ls(e)):pi(e);break;default:pi(e)}}function Ls(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];it=a,g1(a,e)}h1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:aa(8,t,t.return),Ls(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ls(t));break;default:Ls(t)}e=e.sibling}}function g1(e,t){for(;it!==null;){var n=it;switch(n.tag){case 0:case 11:case 15:aa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Fl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,it=a;else e:for(n=e;it!==null;){a=it;var o=a.sibling,c=a.return;if(s1(a),a===n){it=null;break e}if(o!==null){o.return=c,it=o;break e}it=c}}}var i2={getCacheForType:function(e){var t=ct($e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ct($e).controller.signal}},s2=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Le=null,be=null,xe=0,De=0,Ut=null,la=!1,vl=!1,rc=!1,Bn=0,Ie=0,ia=0,Ha=0,oc=0,Ht=0,yl=0,hi=null,kt=null,cc=!1,Us=0,b1=0,Hs=1/0,Zs=null,sa=null,et=0,ra=null,xl=null,qn=0,uc=0,dc=null,v1=null,mi=0,fc=null;function Zt(){return(Ae&2)!==0&&xe!==0?xe&-xe:M.T!==null?vc():rn()}function y1(){if(Ht===0)if((xe&536870912)===0||we){var e=Ya;Ya<<=1,(Ya&3932160)===0&&(Ya=262144),Ht=e}else Ht=536870912;return e=_t.current,e!==null&&(e.flags|=32),Ht}function Rt(e,t,n){(e===Le&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),oa(e,xe,Ht,!1)),It(e,n),((Ae&2)===0||e!==Le)&&(e===Le&&((Ae&2)===0&&(Ha|=n),Ie===4&&oa(e,xe,Ht,!1)),yn(e))}function x1(e,t,n){if((Ae&6)!==0)throw Error(r(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||wt(e,t),o=a?c2(e,t):hc(e,t,!0),c=a;do{if(o===0){vl&&!a&&oa(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!r2(n)){o=hc(e,t,!1),c=!1;continue}if(o===2){if(c=t,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var y=e;o=hi;var w=y.current.memoizedState.isDehydrated;if(w&&(Sl(y,p).flags|=256),p=hc(y,p,!1),p!==2){if(rc&&!w){y.errorRecoveryDisabledLanes|=c,Ha|=c,o=4;break e}c=kt,kt=o,c!==null&&(kt===null?kt=c:kt.push.apply(kt,c))}o=p}if(c=!1,o!==2)continue}}if(o===1){Sl(e,0),oa(e,t,0,!0);break}e:{switch(a=e,c=o,c){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:oa(a,t,Ht,!la);break e;case 2:kt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(o=Us+300-ft(),10<o)){if(oa(a,t,Ht,!la),at(a,0,!0)!==0)break e;qn=t,a.timeoutHandle=J1(S1.bind(null,a,n,kt,Zs,cc,t,Ht,Ha,yl,la,c,"Throttled",-0,0),o);break e}S1(a,n,kt,Zs,cc,t,Ht,Ha,yl,la,c,null,-0,0)}}break}while(!0);yn(e)}function S1(e,t,n,a,o,c,p,y,w,R,L,H,j,z){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nn},p1(t,c,H);var ee=(c&62914560)===c?Us-ft():(c&4194048)===c?b1-ft():0;if(ee=G2(H,ee),ee!==null){qn=c,e.cancelPendingCommit=ee(M1.bind(null,e,t,c,n,a,o,p,y,w,L,H,null,j,z)),oa(e,c,p,!R);return}}M1(e,t,c,n,a,o,p,y,w)}function r2(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],c=o.getSnapshot;o=o.value;try{if(!Ot(c(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function oa(e,t,n,a){t&=~oc,t&=~Ha,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var c=31-pt(o),p=1<<c;a[c]=-1,o&=~p}n!==0&&sn(e,n,t)}function Bs(){return(Ae&6)===0?(gi(0),!1):!0}function pc(){if(be!==null){if(De===0)var e=be.return;else e=be,kn=Ma=null,Mo(e),dl=null,Pl=0,e=be;for(;e!==null;)P0(e.alternate,e),e=e.return;be=null}}function Sl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,T2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),qn=0,pc(),Le=e,be=n=Dn(e.current,null),xe=t,De=0,Ut=null,la=!1,vl=wt(e,t),rc=!1,yl=Ht=oc=Ha=ia=Ie=0,kt=hi=null,cc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var o=31-pt(a),c=1<<o;t|=e[o],a&=~c}return Bn=t,rs(),n}function w1(e,t){he=null,M.H=si,t===ul||t===ms?(t=Hd(),De=3):t===bo?(t=Hd(),De=4):De=t===Go?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ut=t,be===null&&(Ie=1,Ms(e,Ft(t,e.current)))}function C1(){var e=_t.current;return e===null?!0:(xe&4194048)===xe?en===null:(xe&62914560)===xe||(xe&536870912)!==0?e===en:!1}function E1(){var e=M.H;return M.H=si,e===null?si:e}function A1(){var e=M.A;return M.A=i2,e}function qs(){Ie=4,la||(xe&4194048)!==xe&&_t.current!==null||(vl=!0),(ia&134217727)===0&&(Ha&134217727)===0||Le===null||oa(Le,xe,Ht,!1)}function hc(e,t,n){var a=Ae;Ae|=2;var o=E1(),c=A1();(Le!==e||xe!==t)&&(Zs=null,Sl(e,t)),t=!1;var p=Ie;e:do try{if(De!==0&&be!==null){var y=be,w=Ut;switch(De){case 8:pc(),p=6;break e;case 3:case 2:case 9:case 6:_t.current===null&&(t=!0);var R=De;if(De=0,Ut=null,wl(e,y,w,R),n&&vl){p=0;break e}break;default:R=De,De=0,Ut=null,wl(e,y,w,R)}}o2(),p=Ie;break}catch(L){w1(e,L)}while(!0);return t&&e.shellSuspendCounter++,kn=Ma=null,Ae=a,M.H=o,M.A=c,be===null&&(Le=null,xe=0,rs()),p}function o2(){for(;be!==null;)N1(be)}function c2(e,t){var n=Ae;Ae|=2;var a=E1(),o=A1();Le!==e||xe!==t?(Zs=null,Hs=ft()+500,Sl(e,t)):vl=wt(e,t);e:do try{if(De!==0&&be!==null){t=be;var c=Ut;t:switch(De){case 1:De=0,Ut=null,wl(e,t,c,1);break;case 2:case 9:if(Ld(c)){De=0,Ut=null,T1(t);break}t=function(){De!==2&&De!==9||Le!==e||(De=7),yn(e)},c.then(t,t);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:Ld(c)?(De=0,Ut=null,T1(t)):(De=0,Ut=null,wl(e,t,c,7));break;case 5:var p=null;switch(be.tag){case 26:p=be.memoizedState;case 5:case 27:var y=be;if(p?pf(p):y.stateNode.complete){De=0,Ut=null;var w=y.sibling;if(w!==null)be=w;else{var R=y.return;R!==null?(be=R,Vs(R)):be=null}break t}}De=0,Ut=null,wl(e,t,c,5);break;case 6:De=0,Ut=null,wl(e,t,c,6);break;case 8:pc(),Ie=6;break e;default:throw Error(r(462))}}u2();break}catch(L){w1(e,L)}while(!0);return kn=Ma=null,M.H=a,M.A=o,Ae=n,be!==null?0:(Le=null,xe=0,rs(),Ie)}function u2(){for(;be!==null&&!qa();)N1(be)}function N1(e){var t=F0(e.alternate,e,Bn);e.memoizedProps=e.pendingProps,t===null?Vs(e):be=t}function T1(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=I0(n,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=I0(n,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:Mo(t);default:P0(n,t),t=be=Ad(t,Bn),t=F0(n,t,Bn)}e.memoizedProps=e.pendingProps,t===null?Vs(e):be=t}function wl(e,t,n,a){kn=Ma=null,Mo(t),dl=null,Pl=0;var o=t.return;try{if(Pm(e,o,t,n,xe)){Ie=1,Ms(e,Ft(n,e.current)),be=null;return}}catch(c){if(o!==null)throw be=o,c;Ie=1,Ms(e,Ft(n,e.current)),be=null;return}t.flags&32768?(we||a===1?e=!0:vl||(xe&536870912)!==0?e=!1:(la=e=!0,(a===2||a===9||a===3||a===6)&&(a=_t.current,a!==null&&a.tag===13&&(a.flags|=16384))),D1(t,e)):Vs(t)}function Vs(e){var t=e;do{if((t.flags&32768)!==0){D1(t,la);return}e=t.return;var n=t2(t.alternate,t,Bn);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Ie===0&&(Ie=5)}function D1(e,t){do{var n=n2(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);Ie=6,be=null}function M1(e,t,n,a,o,c,p,y,w){e.cancelPendingCommit=null;do Ys();while(et!==0);if((Ae&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(c=t.lanes|t.childLanes,c|=to,We(e,n,c,p,y,w),e===Le&&(be=Le=null,xe=0),xl=t,ra=e,qn=n,uc=c,dc=o,v1=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,h2(ln,function(){return z1(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null,o=V.p,V.p=2,p=Ae,Ae|=4;try{a2(e,t,n)}finally{Ae=p,V.p=o,M.T=a}}et=1,k1(),R1(),j1()}}function k1(){if(et===1){et=0;var e=ra,t=xl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null;var a=V.p;V.p=2;var o=Ae;Ae|=4;try{u1(t,e);var c=Nc,p=gd(e.containerInfo),y=c.focusedElem,w=c.selectionRange;if(p!==y&&y&&y.ownerDocument&&md(y.ownerDocument.documentElement,y)){if(w!==null&&Fr(y)){var R=w.start,L=w.end;if(L===void 0&&(L=R),"selectionStart"in y)y.selectionStart=R,y.selectionEnd=Math.min(L,y.value.length);else{var H=y.ownerDocument||document,j=H&&H.defaultView||window;if(j.getSelection){var z=j.getSelection(),ee=y.textContent.length,se=Math.min(w.start,ee),Oe=w.end===void 0?se:Math.min(w.end,ee);!z.extend&&se>Oe&&(p=Oe,Oe=se,se=p);var N=hd(y,se),C=hd(y,Oe);if(N&&C&&(z.rangeCount!==1||z.anchorNode!==N.node||z.anchorOffset!==N.offset||z.focusNode!==C.node||z.focusOffset!==C.offset)){var k=H.createRange();k.setStart(N.node,N.offset),z.removeAllRanges(),se>Oe?(z.addRange(k),z.extend(C.node,C.offset)):(k.setEnd(C.node,C.offset),z.addRange(k))}}}}for(H=[],z=y;z=z.parentNode;)z.nodeType===1&&H.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<H.length;y++){var U=H[y];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}tr=!!Ac,Nc=Ac=null}finally{Ae=o,V.p=a,M.T=n}}e.current=t,et=2}}function R1(){if(et===2){et=0;var e=ra,t=xl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=M.T,M.T=null;var a=V.p;V.p=2;var o=Ae;Ae|=4;try{i1(e,t.alternate,t)}finally{Ae=o,V.p=a,M.T=n}}et=3}}function j1(){if(et===4||et===3){et=0,Xi();var e=ra,t=xl,n=qn,a=v1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,xl=ra=null,O1(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(sa=null),En(n),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Sa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=M.T,o=V.p,V.p=2,M.T=null;try{for(var c=e.onRecoverableError,p=0;p<a.length;p++){var y=a[p];c(y.value,{componentStack:y.stack})}}finally{M.T=t,V.p=o}}(qn&3)!==0&&Ys(),yn(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===fc?mi++:(mi=0,fc=e):mi=0,gi(0)}}function O1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fl(t)))}function Ys(){return k1(),R1(),j1(),z1()}function z1(){if(et!==5)return!1;var e=ra,t=uc;uc=0;var n=En(qn),a=M.T,o=V.p;try{V.p=32>n?32:n,M.T=null,n=dc,dc=null;var c=ra,p=qn;if(et=0,xl=ra=null,qn=0,(Ae&6)!==0)throw Error(r(331));var y=Ae;if(Ae|=4,m1(c.current),f1(c,c.current,p,n),Ae=y,gi(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Sa,c)}catch{}return!0}finally{V.p=o,M.T=a,O1(e,t)}}function _1(e,t,n){t=Ft(n,t),t=Io(e.stateNode,t,2),e=ea(e,t,2),e!==null&&(It(e,2),yn(e))}function Me(e,t,n){if(e.tag===3)_1(e,e,n);else for(;t!==null;){if(t.tag===3){_1(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(sa===null||!sa.has(a))){e=Ft(n,e),n=L0(2),a=ea(t,n,2),a!==null&&(U0(n,a,t,e),It(a,2),yn(a));break}}t=t.return}}function mc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new s2;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(rc=!0,o.add(n),e=d2.bind(null,e,t,n),t.then(e,e))}function d2(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(xe&n)===n&&(Ie===4||Ie===3&&(xe&62914560)===xe&&300>ft()-Us?(Ae&2)===0&&Sl(e,0):oc|=n,yl===xe&&(yl=0)),yn(e)}function L1(e,t){t===0&&(t=ht()),e=Na(e,t),e!==null&&(It(e,t),yn(e))}function f2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),L1(e,n)}function p2(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(t),L1(e,n)}function h2(e,t){return Vt(e,t)}var Is=null,Cl=null,gc=!1,Gs=!1,bc=!1,ca=0;function yn(e){e!==Cl&&e.next===null&&(Cl===null?Is=Cl=e:Cl=Cl.next=e),Gs=!0,gc||(gc=!0,g2())}function gi(e,t){if(!bc&&Gs){bc=!0;do for(var n=!1,a=Is;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var c=0;else{var p=a.suspendedLanes,y=a.pingedLanes;c=(1<<31-pt(42|e)+1)-1,c&=o&~(p&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,B1(a,c))}else c=xe,c=at(a,a===Le?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||wt(a,c)||(n=!0,B1(a,c));a=a.next}while(n);bc=!1}}function m2(){U1()}function U1(){Gs=gc=!1;var e=0;ca!==0&&N2()&&(e=ca);for(var t=ft(),n=null,a=Is;a!==null;){var o=a.next,c=H1(a,t);c===0?(a.next=null,n===null?Is=o:n.next=o,o===null&&(Cl=n)):(n=a,(e!==0||(c&3)!==0)&&(Gs=!0)),a=o}et!==0&&et!==5||gi(e),ca!==0&&(ca=0)}function H1(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-pt(c),y=1<<p,w=o[p];w===-1?((y&n)===0||(y&a)!==0)&&(o[p]=Ct(y,t)):w<=t&&(e.expiredLanes|=y),c&=~y}if(t=Le,n=xe,n=at(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(De===2||De===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Gn(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||wt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Gn(a),En(n)){case 2:case 8:n=wn;break;case 32:n=ln;break;case 268435456:n=Ll;break;default:n=ln}return a=Z1.bind(null,e),n=Vt(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Gn(a),e.callbackPriority=2,e.callbackNode=null,2}function Z1(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ys()&&e.callbackNode!==n)return null;var a=xe;return a=at(e,e===Le?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(x1(e,a,t),H1(e,ft()),e.callbackNode!=null&&e.callbackNode===n?Z1.bind(null,e):null)}function B1(e,t){if(Ys())return null;x1(e,t,!0)}function g2(){D2(function(){(Ae&6)!==0?Vt(Qi,m2):U1()})}function vc(){if(ca===0){var e=ol;e===0&&(e=Va,Va<<=1,(Va&261888)===0&&(Va=256)),ca=e}return ca}function q1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wi(""+e)}function V1(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function b2(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var c=q1((o[At]||null).action),p=a.submitter;p&&(t=(t=p[At]||null)?q1(t.formAction):p.getAttribute("formAction"),t!==null&&(c=t,p=null));var y=new as("action","action",null,a,o);e.push({event:y,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ca!==0){var w=p?V1(o,p):new FormData(o);Ho(n,{pending:!0,data:w,method:o.method,action:c},null,w)}}else typeof c=="function"&&(y.preventDefault(),w=p?V1(o,p):new FormData(o),Ho(n,{pending:!0,data:w,method:o.method,action:c},c,w))},currentTarget:o}]})}}for(var yc=0;yc<eo.length;yc++){var xc=eo[yc],v2=xc.toLowerCase(),y2=xc[0].toUpperCase()+xc.slice(1);on(v2,"on"+y2)}on(yd,"onAnimationEnd"),on(xd,"onAnimationIteration"),on(Sd,"onAnimationStart"),on("dblclick","onDoubleClick"),on("focusin","onFocus"),on("focusout","onBlur"),on(_m,"onTransitionRun"),on(Lm,"onTransitionStart"),on(Um,"onTransitionCancel"),on(wd,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bi));function Y1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var c=void 0;if(t)for(var p=a.length-1;0<=p;p--){var y=a[p],w=y.instance,R=y.currentTarget;if(y=y.listener,w!==c&&o.isPropagationStopped())break e;c=y,o.currentTarget=R;try{c(o)}catch(L){ss(L)}o.currentTarget=null,c=w}else for(p=0;p<a.length;p++){if(y=a[p],w=y.instance,R=y.currentTarget,y=y.listener,w!==c&&o.isPropagationStopped())break e;c=y,o.currentTarget=R;try{c(o)}catch(L){ss(L)}o.currentTarget=null,c=w}}}}function ve(e,t){var n=t[jr];n===void 0&&(n=t[jr]=new Set);var a=e+"__bubble";n.has(a)||(I1(t,e,2,!1),n.add(a))}function Sc(e,t,n){var a=0;t&&(a|=4),I1(n,e,a,t)}var Xs="_reactListening"+Math.random().toString(36).slice(2);function wc(e){if(!e[Xs]){e[Xs]=!0,Uu.forEach(function(n){n!=="selectionchange"&&(x2.has(n)||Sc(n,!1,e),Sc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xs]||(t[Xs]=!0,Sc("selectionchange",!1,t))}}function I1(e,t,n,a){switch(xf(t)){case 2:var o=K2;break;case 8:o=$2;break;default:o=Uc}n=o.bind(null,t,n,e),o=void 0,!qr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Cc(e,t,n,a,o){var c=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var y=a.stateNode.containerInfo;if(y===o)break;if(p===4)for(p=a.return;p!==null;){var w=p.tag;if((w===3||w===4)&&p.stateNode.containerInfo===o)return;p=p.return}for(;y!==null;){if(p=Ga(y),p===null)return;if(w=p.tag,w===5||w===6||w===26||w===27){a=c=p;continue e}y=y.parentNode}}a=a.return}$u(function(){var R=c,L=Zr(n),H=[];e:{var j=Cd.get(e);if(j!==void 0){var z=as,ee=e;switch(e){case"keypress":if(ts(n)===0)break e;case"keydown":case"keyup":z=pm;break;case"focusin":ee="focus",z=Gr;break;case"focusout":ee="blur",z=Gr;break;case"beforeblur":case"afterblur":z=Gr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=gm;break;case yd:case xd:case Sd:z=lm;break;case wd:z=vm;break;case"scroll":case"scrollend":z=Wh;break;case"wheel":z=xm;break;case"copy":case"cut":case"paste":z=sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=ed;break;case"toggle":case"beforetoggle":z=wm}var se=(t&4)!==0,Oe=!se&&(e==="scroll"||e==="scrollend"),N=se?j!==null?j+"Capture":null:j;se=[];for(var C=R,k;C!==null;){var U=C;if(k=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||k===null||N===null||(U=Zl(C,N),U!=null&&se.push(vi(C,U,k))),Oe)break;C=C.return}0<se.length&&(j=new z(j,ee,null,n,L),H.push({event:j,listeners:se}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",j&&n!==Hr&&(ee=n.relatedTarget||n.fromElement)&&(Ga(ee)||ee[Ia]))break e;if((z||j)&&(j=L.window===L?L:(j=L.ownerDocument)?j.defaultView||j.parentWindow:window,z?(ee=n.relatedTarget||n.toElement,z=R,ee=ee?Ga(ee):null,ee!==null&&(Oe=d(ee),se=ee.tag,ee!==Oe||se!==5&&se!==27&&se!==6)&&(ee=null)):(z=null,ee=R),z!==ee)){if(se=Pu,U="onMouseLeave",N="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(se=ed,U="onPointerLeave",N="onPointerEnter",C="pointer"),Oe=z==null?j:Hl(z),k=ee==null?j:Hl(ee),j=new se(U,C+"leave",z,n,L),j.target=Oe,j.relatedTarget=k,U=null,Ga(L)===R&&(se=new se(N,C+"enter",ee,n,L),se.target=k,se.relatedTarget=Oe,U=se),Oe=U,z&&ee)t:{for(se=S2,N=z,C=ee,k=0,U=N;U;U=se(U))k++;U=0;for(var le=C;le;le=se(le))U++;for(;0<k-U;)N=se(N),k--;for(;0<U-k;)C=se(C),U--;for(;k--;){if(N===C||C!==null&&N===C.alternate){se=N;break t}N=se(N),C=se(C)}se=null}else se=null;z!==null&&G1(H,j,z,se,!1),ee!==null&&Oe!==null&&G1(H,Oe,ee,se,!0)}}e:{if(j=R?Hl(R):window,z=j.nodeName&&j.nodeName.toLowerCase(),z==="select"||z==="input"&&j.type==="file")var Ce=od;else if(sd(j))if(cd)Ce=jm;else{Ce=km;var te=Mm}else z=j.nodeName,!z||z.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?R&&Ur(R.elementType)&&(Ce=od):Ce=Rm;if(Ce&&(Ce=Ce(e,R))){rd(H,Ce,n,L);break e}te&&te(e,j,R),e==="focusout"&&R&&j.type==="number"&&R.memoizedProps.value!=null&&Lr(j,"number",j.value)}switch(te=R?Hl(R):window,e){case"focusin":(sd(te)||te.contentEditable==="true")&&(el=te,Jr=R,Ql=null);break;case"focusout":Ql=Jr=el=null;break;case"mousedown":Pr=!0;break;case"contextmenu":case"mouseup":case"dragend":Pr=!1,bd(H,n,L);break;case"selectionchange":if(zm)break;case"keydown":case"keyup":bd(H,n,L)}var me;if(Qr)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Wa?ld(e,n)&&(Se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Se="onCompositionStart");Se&&(td&&n.locale!=="ko"&&(Wa||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Wa&&(me=Fu()):(Qn=L,Vr="value"in Qn?Qn.value:Qn.textContent,Wa=!0)),te=Qs(R,Se),0<te.length&&(Se=new Wu(Se,e,null,n,L),H.push({event:Se,listeners:te}),me?Se.data=me:(me=id(n),me!==null&&(Se.data=me)))),(me=Em?Am(e,n):Nm(e,n))&&(Se=Qs(R,"onBeforeInput"),0<Se.length&&(te=new Wu("onBeforeInput","beforeinput",null,n,L),H.push({event:te,listeners:Se}),te.data=me)),b2(H,e,R,n,L)}Y1(H,t)})}function vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qs(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Zl(e,n),o!=null&&a.unshift(vi(e,o,c)),o=Zl(e,t),o!=null&&a.push(vi(e,o,c))),e.tag===3)return a;e=e.return}return[]}function S2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function G1(e,t,n,a,o){for(var c=t._reactName,p=[];n!==null&&n!==a;){var y=n,w=y.alternate,R=y.stateNode;if(y=y.tag,w!==null&&w===a)break;y!==5&&y!==26&&y!==27||R===null||(w=R,o?(R=Zl(n,c),R!=null&&p.unshift(vi(n,R,w))):o||(R=Zl(n,c),R!=null&&p.push(vi(n,R,w)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var w2=/\r\n?/g,C2=/\u0000|\uFFFD/g;function X1(e){return(typeof e=="string"?e:""+e).replace(w2,`
`).replace(C2,"")}function Q1(e,t){return t=X1(t),X1(e)===t}function je(e,t,n,a,o,c){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Fa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Fa(e,""+a);break;case"className":Ji(e,"class",a);break;case"tabIndex":Ji(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ji(e,n,a);break;case"style":Qu(e,a,c);break;case"data":if(t!=="object"){Ji(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Wi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&je(e,t,"name",o.name,o,null),je(e,t,"formEncType",o.formEncType,o,null),je(e,t,"formMethod",o.formMethod,o,null),je(e,t,"formTarget",o.formTarget,o,null)):(je(e,t,"encType",o.encType,o,null),je(e,t,"method",o.method,o,null),je(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Wi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Nn);break;case"onScroll":a!=null&&ve("scroll",e);break;case"onScrollEnd":a!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Wi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Fi(e,"popover",a);break;case"xlinkActuate":An(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":An(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":An(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":An(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":An(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":An(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":An(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":An(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":An(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Fi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Jh.get(n)||n,Fi(e,n,a))}}function Ec(e,t,n,a,o,c){switch(n){case"style":Qu(e,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Fa(e,a):(typeof a=="number"||typeof a=="bigint")&&Fa(e,""+a);break;case"onScroll":a!=null&&ve("scroll",e);break;case"onScrollEnd":a!=null&&ve("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),c=e[At]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,o),typeof a=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,o);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Fi(e,n,a)}}}function dt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var a=!1,o=!1,c;for(c in n)if(n.hasOwnProperty(c)){var p=n[c];if(p!=null)switch(c){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:je(e,t,c,p,n,null)}}o&&je(e,t,"srcSet",n.srcSet,n,null),a&&je(e,t,"src",n.src,n,null);return;case"input":ve("invalid",e);var y=c=p=o=null,w=null,R=null;for(a in n)if(n.hasOwnProperty(a)){var L=n[a];if(L!=null)switch(a){case"name":o=L;break;case"type":p=L;break;case"checked":w=L;break;case"defaultChecked":R=L;break;case"value":c=L;break;case"defaultValue":y=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(r(137,t));break;default:je(e,t,a,L,n,null)}}Yu(e,c,y,w,R,p,o,!1);return;case"select":ve("invalid",e),a=p=c=null;for(o in n)if(n.hasOwnProperty(o)&&(y=n[o],y!=null))switch(o){case"value":c=y;break;case"defaultValue":p=y;break;case"multiple":a=y;default:je(e,t,o,y,n,null)}t=c,n=p,e.multiple=!!a,t!=null?$a(e,!!a,t,!1):n!=null&&$a(e,!!a,n,!0);return;case"textarea":ve("invalid",e),c=o=a=null;for(p in n)if(n.hasOwnProperty(p)&&(y=n[p],y!=null))switch(p){case"value":a=y;break;case"defaultValue":o=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(r(91));break;default:je(e,t,p,y,n,null)}Gu(e,a,o,c);return;case"option":for(w in n)if(n.hasOwnProperty(w)&&(a=n[w],a!=null))switch(w){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:je(e,t,w,a,n,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(a=0;a<bi.length;a++)ve(bi[a],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(a=n[R],a!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:je(e,t,R,a,n,null)}return;default:if(Ur(t)){for(L in n)n.hasOwnProperty(L)&&(a=n[L],a!==void 0&&Ec(e,t,L,a,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(a=n[y],a!=null&&je(e,t,y,a,n,null))}function E2(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,p=null,y=null,w=null,R=null,L=null;for(z in n){var H=n[z];if(n.hasOwnProperty(z)&&H!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":w=H;default:a.hasOwnProperty(z)||je(e,t,z,null,a,H)}}for(var j in a){var z=a[j];if(H=n[j],a.hasOwnProperty(j)&&(z!=null||H!=null))switch(j){case"type":c=z;break;case"name":o=z;break;case"checked":R=z;break;case"defaultChecked":L=z;break;case"value":p=z;break;case"defaultValue":y=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,t));break;default:z!==H&&je(e,t,j,z,a,H)}}_r(e,p,y,w,R,L,c,o);return;case"select":z=p=y=j=null;for(c in n)if(w=n[c],n.hasOwnProperty(c)&&w!=null)switch(c){case"value":break;case"multiple":z=w;default:a.hasOwnProperty(c)||je(e,t,c,null,a,w)}for(o in a)if(c=a[o],w=n[o],a.hasOwnProperty(o)&&(c!=null||w!=null))switch(o){case"value":j=c;break;case"defaultValue":y=c;break;case"multiple":p=c;default:c!==w&&je(e,t,o,c,a,w)}t=y,n=p,a=z,j!=null?$a(e,!!n,j,!1):!!a!=!!n&&(t!=null?$a(e,!!n,t,!0):$a(e,!!n,n?[]:"",!1));return;case"textarea":z=j=null;for(y in n)if(o=n[y],n.hasOwnProperty(y)&&o!=null&&!a.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:je(e,t,y,null,a,o)}for(p in a)if(o=a[p],c=n[p],a.hasOwnProperty(p)&&(o!=null||c!=null))switch(p){case"value":j=o;break;case"defaultValue":z=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==c&&je(e,t,p,o,a,c)}Iu(e,j,z);return;case"option":for(var ee in n)if(j=n[ee],n.hasOwnProperty(ee)&&j!=null&&!a.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:je(e,t,ee,null,a,j)}for(w in a)if(j=a[w],z=n[w],a.hasOwnProperty(w)&&j!==z&&(j!=null||z!=null))switch(w){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:je(e,t,w,j,a,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in n)j=n[se],n.hasOwnProperty(se)&&j!=null&&!a.hasOwnProperty(se)&&je(e,t,se,null,a,j);for(R in a)if(j=a[R],z=n[R],a.hasOwnProperty(R)&&j!==z&&(j!=null||z!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,t));break;default:je(e,t,R,j,a,z)}return;default:if(Ur(t)){for(var Oe in n)j=n[Oe],n.hasOwnProperty(Oe)&&j!==void 0&&!a.hasOwnProperty(Oe)&&Ec(e,t,Oe,void 0,a,j);for(L in a)j=a[L],z=n[L],!a.hasOwnProperty(L)||j===z||j===void 0&&z===void 0||Ec(e,t,L,j,a,z);return}}for(var N in n)j=n[N],n.hasOwnProperty(N)&&j!=null&&!a.hasOwnProperty(N)&&je(e,t,N,null,a,j);for(H in a)j=a[H],z=n[H],!a.hasOwnProperty(H)||j===z||j==null&&z==null||je(e,t,H,j,a,z)}function K1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function A2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var o=n[a],c=o.transferSize,p=o.initiatorType,y=o.duration;if(c&&y&&K1(p)){for(p=0,y=o.responseEnd,a+=1;a<n.length;a++){var w=n[a],R=w.startTime;if(R>y)break;var L=w.transferSize,H=w.initiatorType;L&&K1(H)&&(w=w.responseEnd,p+=L*(w<y?1:(y-R)/(w-R)))}if(--a,t+=8*(c+p)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ac=null,Nc=null;function Ks(e){return e.nodeType===9?e:e.ownerDocument}function $1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function F1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dc=null;function N2(){var e=window.event;return e&&e.type==="popstate"?e===Dc?!1:(Dc=e,!0):(Dc=null,!1)}var J1=typeof setTimeout=="function"?setTimeout:void 0,T2=typeof clearTimeout=="function"?clearTimeout:void 0,P1=typeof Promise=="function"?Promise:void 0,D2=typeof queueMicrotask=="function"?queueMicrotask:typeof P1<"u"?function(e){return P1.resolve(null).then(e).catch(M2)}:J1;function M2(e){setTimeout(function(){throw e})}function ua(e){return e==="head"}function W1(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(o),Tl(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")yi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,yi(n);for(var c=n.firstChild;c;){var p=c.nextSibling,y=c.nodeName;c[Ul]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=p}}else n==="body"&&yi(e.ownerDocument.body);n=o}while(n);Tl(t)}function ef(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Mc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Mc(n),Or(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function k2(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ul])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=tn(e.nextSibling),e===null)break}return null}function R2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=tn(e.nextSibling),e===null))return null;return e}function tf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=tn(e.nextSibling),e===null))return null;return e}function kc(e){return e.data==="$?"||e.data==="$~"}function Rc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function j2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var jc=null;function nf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return tn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function af(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function lf(e,t,n){switch(t=Ks(n),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function yi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Or(e)}var nn=new Map,sf=new Set;function $s(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vn=V.d;V.d={f:O2,r:z2,D:_2,C:L2,L:U2,m:H2,X:B2,S:Z2,M:q2};function O2(){var e=Vn.f(),t=Bs();return e||t}function z2(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?w0(t):Vn.r(e)}var El=typeof document>"u"?null:document;function rf(e,t,n){var a=El;if(a&&typeof t=="string"&&t){var o=Kt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),sf.has(o)||(sf.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),dt(t,"link",e),lt(t),a.head.appendChild(t)))}}function _2(e){Vn.D(e),rf("dns-prefetch",e,null)}function L2(e,t){Vn.C(e,t),rf("preconnect",e,t)}function U2(e,t,n){Vn.L(e,t,n);var a=El;if(a&&e&&t){var o='link[rel="preload"][as="'+Kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Kt(n.imageSizes)+'"]')):o+='[href="'+Kt(e)+'"]';var c=o;switch(t){case"style":c=Al(e);break;case"script":c=Nl(e)}nn.has(c)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),nn.set(c,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(xi(c))||t==="script"&&a.querySelector(Si(c))||(t=a.createElement("link"),dt(t,"link",e),lt(t),a.head.appendChild(t)))}}function H2(e,t){Vn.m(e,t);var n=El;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Kt(a)+'"][href="'+Kt(e)+'"]',c=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Nl(e)}if(!nn.has(c)&&(e=S({rel:"modulepreload",href:e},t),nn.set(c,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Si(c)))return}a=n.createElement("link"),dt(a,"link",e),lt(a),n.head.appendChild(a)}}}function Z2(e,t,n){Vn.S(e,t,n);var a=El;if(a&&e){var o=Qa(a).hoistableStyles,c=Al(e);t=t||"default";var p=o.get(c);if(!p){var y={loading:0,preload:null};if(p=a.querySelector(xi(c)))y.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=nn.get(c))&&Oc(e,n);var w=p=a.createElement("link");lt(w),dt(w,"link",e),w._p=new Promise(function(R,L){w.onload=R,w.onerror=L}),w.addEventListener("load",function(){y.loading|=1}),w.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Fs(p,t,a)}p={type:"stylesheet",instance:p,count:1,state:y},o.set(c,p)}}}function B2(e,t){Vn.X(e,t);var n=El;if(n&&e){var a=Qa(n).hoistableScripts,o=Nl(e),c=a.get(o);c||(c=n.querySelector(Si(o)),c||(e=S({src:e,async:!0},t),(t=nn.get(o))&&zc(e,t),c=n.createElement("script"),lt(c),dt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(o,c))}}function q2(e,t){Vn.M(e,t);var n=El;if(n&&e){var a=Qa(n).hoistableScripts,o=Nl(e),c=a.get(o);c||(c=n.querySelector(Si(o)),c||(e=S({src:e,async:!0,type:"module"},t),(t=nn.get(o))&&zc(e,t),c=n.createElement("script"),lt(c),dt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(o,c))}}function of(e,t,n,a){var o=(o=$.current)?$s(o):null;if(!o)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Al(n.href),n=Qa(o).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Al(n.href);var c=Qa(o).hoistableStyles,p=c.get(e);if(p||(o=o.ownerDocument||o,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=o.querySelector(xi(e)))&&!c._p&&(p.instance=c,p.state.loading=5),nn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},nn.set(e,n),c||V2(o,e,n,p.state))),t&&a===null)throw Error(r(528,""));return p}if(t&&a!==null)throw Error(r(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Nl(n),n=Qa(o).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Al(e){return'href="'+Kt(e)+'"'}function xi(e){return'link[rel="stylesheet"]['+e+"]"}function cf(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function V2(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),dt(t,"link",n),lt(t),e.head.appendChild(t))}function Nl(e){return'[src="'+Kt(e)+'"]'}function Si(e){return"script[async]"+e}function uf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Kt(n.href)+'"]');if(a)return t.instance=a,lt(a),a;var o=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),lt(a),dt(a,"style",o),Fs(a,n.precedence,e),t.instance=a;case"stylesheet":o=Al(n.href);var c=e.querySelector(xi(o));if(c)return t.state.loading|=4,t.instance=c,lt(c),c;a=cf(n),(o=nn.get(o))&&Oc(a,o),c=(e.ownerDocument||e).createElement("link"),lt(c);var p=c;return p._p=new Promise(function(y,w){p.onload=y,p.onerror=w}),dt(c,"link",a),t.state.loading|=4,Fs(c,n.precedence,e),t.instance=c;case"script":return c=Nl(n.src),(o=e.querySelector(Si(c)))?(t.instance=o,lt(o),o):(a=n,(o=nn.get(c))&&(a=S({},n),zc(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),lt(o),dt(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Fs(a,n.precedence,e));return t.instance}function Fs(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,c=o,p=0;p<a.length;p++){var y=a[p];if(y.dataset.precedence===t)c=y;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Js=null;function df(e,t,n){if(Js===null){var a=new Map,o=Js=new Map;o.set(n,a)}else o=Js,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var c=n[o];if(!(c[Ul]||c[rt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(t)||"";p=e+p;var y=a.get(p);y?y.push(c):a.set(p,[c])}}return a}function ff(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Y2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function I2(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=Al(a.href),c=t.querySelector(xi(o));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ps.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,lt(c);return}c=t.ownerDocument||t,a=cf(a),(o=nn.get(o))&&Oc(a,o),c=c.createElement("link"),lt(c);var p=c;p._p=new Promise(function(y,w){p.onload=y,p.onerror=w}),dt(c,"link",a),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ps.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var _c=0;function G2(e,t){return e.stylesheets&&e.count===0&&er(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&er(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&_c===0&&(_c=62500*A2());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&er(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>_c?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function Ps(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)er(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ws=null;function er(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ws=new Map,t.forEach(X2,e),Ws=null,Ps.call(e))}function X2(e,t){if(!(t.state.loading&4)){var n=Ws.get(e);if(n)var a=n.get(null);else{n=new Map,Ws.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var p=o[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),a=p)}a&&n.set(null,a)}o=t.instance,p=o.getAttribute("data-precedence"),c=n.get(p)||a,c===a&&n.set(null,o),n.set(p,o),this.count++,a=Ps.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var wi={$$typeof:Q,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Q2(e,t,n,a,o,c,p,y,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function hf(e,t,n,a,o,c,p,y,w,R,L,H){return e=new Q2(e,t,n,p,w,R,L,H,y),t=1,c===!0&&(t|=24),c=zt(3,null,null,t),e.current=c,c.stateNode=e,t=ho(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:a,isDehydrated:n,cache:t},vo(c),e}function mf(e){return e?(e=al,e):al}function gf(e,t,n,a,o,c){o=mf(o),a.context===null?a.context=o:a.pendingContext=o,a=Wn(t),a.payload={element:n},c=c===void 0?null:c,c!==null&&(a.callback=c),n=ea(e,a,t),n!==null&&(Rt(n,e,t),ei(n,e,t))}function bf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lc(e,t){bf(e,t),(e=e.alternate)&&bf(e,t)}function vf(e){if(e.tag===13||e.tag===31){var t=Na(e,67108864);t!==null&&Rt(t,e,67108864),Lc(e,67108864)}}function yf(e){if(e.tag===13||e.tag===31){var t=Zt();t=Cn(t);var n=Na(e,t);n!==null&&Rt(n,e,t),Lc(e,t)}}var tr=!0;function K2(e,t,n,a){var o=M.T;M.T=null;var c=V.p;try{V.p=2,Uc(e,t,n,a)}finally{V.p=c,M.T=o}}function $2(e,t,n,a){var o=M.T;M.T=null;var c=V.p;try{V.p=8,Uc(e,t,n,a)}finally{V.p=c,M.T=o}}function Uc(e,t,n,a){if(tr){var o=Hc(a);if(o===null)Cc(e,t,a,nr,n),Sf(e,a);else if(J2(o,e,t,n,a))a.stopPropagation();else if(Sf(e,a),t&4&&-1<F2.indexOf(e)){for(;o!==null;){var c=Xa(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=Xe(c.pendingLanes);if(p!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;p;){var w=1<<31-pt(p);y.entanglements[1]|=w,p&=~w}yn(c),(Ae&6)===0&&(Hs=ft()+500,gi(0))}}break;case 31:case 13:y=Na(c,2),y!==null&&Rt(y,c,2),Bs(),Lc(c,2)}if(c=Hc(a),c===null&&Cc(e,t,a,nr,n),c===o)break;o=c}o!==null&&a.stopPropagation()}else Cc(e,t,a,null,n)}}function Hc(e){return e=Zr(e),Zc(e)}var nr=null;function Zc(e){if(nr=null,e=Ga(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return nr=e,null}function xf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mr()){case Qi:return 2;case wn:return 8;case ln:case xa:return 32;case Ll:return 268435456;default:return 32}default:return 32}}var Bc=!1,da=null,fa=null,pa=null,Ci=new Map,Ei=new Map,ha=[],F2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sf(e,t){switch(e){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":fa=null;break;case"mouseover":case"mouseout":pa=null;break;case"pointerover":case"pointerout":Ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Ai(e,t,n,a,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Xa(t),t!==null&&vf(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function J2(e,t,n,a,o){switch(t){case"focusin":return da=Ai(da,e,t,n,a,o),!0;case"dragenter":return fa=Ai(fa,e,t,n,a,o),!0;case"mouseover":return pa=Ai(pa,e,t,n,a,o),!0;case"pointerover":var c=o.pointerId;return Ci.set(c,Ai(Ci.get(c)||null,e,t,n,a,o)),!0;case"gotpointercapture":return c=o.pointerId,Ei.set(c,Ai(Ei.get(c)||null,e,t,n,a,o)),!0}return!1}function wf(e){var t=Ga(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,Xn(e.priority,function(){yf(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,Xn(e.priority,function(){yf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Hr=a,n.target.dispatchEvent(a),Hr=null}else return t=Xa(n),t!==null&&vf(t),e.blockedOn=n,!1;t.shift()}return!0}function Cf(e,t,n){ar(e)&&n.delete(t)}function P2(){Bc=!1,da!==null&&ar(da)&&(da=null),fa!==null&&ar(fa)&&(fa=null),pa!==null&&ar(pa)&&(pa=null),Ci.forEach(Cf),Ei.forEach(Cf)}function lr(e,t){e.blockedOn===t&&(e.blockedOn=null,Bc||(Bc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,P2)))}var ir=null;function Ef(e){ir!==e&&(ir=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ir===e&&(ir=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(Zc(a||n)===null)continue;break}var c=Xa(n);c!==null&&(e.splice(t,3),t-=3,Ho(c,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function Tl(e){function t(w){return lr(w,e)}da!==null&&lr(da,e),fa!==null&&lr(fa,e),pa!==null&&lr(pa,e),Ci.forEach(t),Ei.forEach(t);for(var n=0;n<ha.length;n++){var a=ha[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ha.length&&(n=ha[0],n.blockedOn===null);)wf(n),n.blockedOn===null&&ha.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],c=n[a+1],p=o[At]||null;if(typeof c=="function")p||Ef(n);else if(p){var y=null;if(c&&c.hasAttribute("formAction")){if(o=c,p=c[At]||null)y=p.formAction;else if(Zc(o)!==null)continue}else y=p.action;typeof y=="function"?n[a+1]=y:(n.splice(a,3),a-=3),Ef(n)}}}function Af(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return o=p})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function qc(e){this._internalRoot=e}sr.prototype.render=qc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var n=t.current,a=Zt();gf(n,a,e,t,null,null)},sr.prototype.unmount=qc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gf(e.current,2,null,e,null,null),Bs(),t[Ia]=null}};function sr(e){this._internalRoot=e}sr.prototype.unstable_scheduleHydration=function(e){if(e){var t=rn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ha.length&&t!==0&&t<ha[n].priority;n++);ha.splice(n,0,e),n===0&&wf(e)}};var Nf=l.version;if(Nf!=="19.2.6")throw Error(r(527,Nf,"19.2.6"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=v(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var W2={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rr.isDisabled&&rr.supportsFiber)try{Sa=rr.inject(W2),gt=rr}catch{}}return Di.createRoot=function(e,t){if(!u(e))throw Error(r(299));var n=!1,a="",o=j0,c=O0,p=z0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=hf(e,1,!1,null,null,n,a,null,o,c,p,Af),e[Ia]=t.current,wc(e),new qc(t)},Di.hydrateRoot=function(e,t,n){if(!u(e))throw Error(r(299));var a=!1,o="",c=j0,p=O0,y=z0,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=hf(e,1,!0,t,n??null,a,o,w,c,p,y,Af),t.context=mf(null),n=t.current,a=Zt(),a=Cn(a),o=Wn(a),o.callback=null,ea(n,o,a),n=a,t.current.lanes=n,It(t,n),yn(t),e[Ia]=t.current,wc(e),new sr(t)},Di.version="19.2.6",Di}var Hf;function fg(){if(Hf)return Ic.exports;Hf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),Ic.exports=dg(),Ic.exports}var pg=fg();function hu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ba=hu();function yp(s){Ba=s}const xp=/[&<>"']/,hg=new RegExp(xp.source,"g"),Sp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,mg=new RegExp(Sp.source,"g"),gg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Zf=s=>gg[s];function Bt(s,l){if(l){if(xp.test(s))return s.replace(hg,Zf)}else if(Sp.test(s))return s.replace(mg,Zf);return s}const bg=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function vg(s){return s.replace(bg,(l,i)=>(i=i.toLowerCase(),i==="colon"?":":i.charAt(0)==="#"?i.charAt(1)==="x"?String.fromCharCode(parseInt(i.substring(2),16)):String.fromCharCode(+i.substring(1)):""))}const yg=/(^|[^\[])\^/g;function ze(s,l){let i=typeof s=="string"?s:s.source;l=l||"";const r={replace:(u,d)=>{let f=typeof d=="string"?d:d.source;return f=f.replace(yg,"$1"),i=i.replace(u,f),r},getRegex:()=>new RegExp(i,l)};return r}function Bf(s){try{s=encodeURI(s).replace(/%25/g,"%")}catch{return null}return s}const ji={exec:()=>null};function qf(s,l){const i=s.replace(/\|/g,(d,f,m)=>{let g=!1,v=f;for(;--v>=0&&m[v]==="\\";)g=!g;return g?"|":" |"}),r=i.split(/ \|/);let u=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),l)if(r.length>l)r.splice(l);else for(;r.length<l;)r.push("");for(;u<r.length;u++)r[u]=r[u].trim().replace(/\\\|/g,"|");return r}function Mi(s,l,i){const r=s.length;if(r===0)return"";let u=0;for(;u<r&&s.charAt(r-u-1)===l;)u++;return s.slice(0,r-u)}function xg(s,l){if(s.indexOf(l[1])===-1)return-1;let i=0;for(let r=0;r<s.length;r++)if(s[r]==="\\")r++;else if(s[r]===l[0])i++;else if(s[r]===l[1]&&(i--,i<0))return r;return-1}function Vf(s,l,i,r){const u=l.href,d=l.title?Bt(l.title):null,f=s[1].replace(/\\([\[\]])/g,"$1");if(s[0].charAt(0)!=="!"){r.state.inLink=!0;const m={type:"link",raw:i,href:u,title:d,text:f,tokens:r.inlineTokens(f)};return r.state.inLink=!1,m}return{type:"image",raw:i,href:u,title:d,text:Bt(f)}}function Sg(s,l){const i=s.match(/^(\s+)(?:```)/);if(i===null)return l;const r=i[1];return l.split(`
`).map(u=>{const d=u.match(/^\s+/);if(d===null)return u;const[f]=d;return f.length>=r.length?u.slice(r.length):u}).join(`
`)}class pr{constructor(l){Ue(this,"options");Ue(this,"rules");Ue(this,"lexer");this.options=l||Ba}space(l){const i=this.rules.block.newline.exec(l);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(l){const i=this.rules.block.code.exec(l);if(i){const r=i[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Mi(r,`
`)}}}fences(l){const i=this.rules.block.fences.exec(l);if(i){const r=i[0],u=Sg(r,i[3]||"");return{type:"code",raw:r,lang:i[2]?i[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):i[2],text:u}}}heading(l){const i=this.rules.block.heading.exec(l);if(i){let r=i[2].trim();if(/#$/.test(r)){const u=Mi(r,"#");(this.options.pedantic||!u||/ $/.test(u))&&(r=u.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(l){const i=this.rules.block.hr.exec(l);if(i)return{type:"hr",raw:Mi(i[0],`
`)}}blockquote(l){const i=this.rules.block.blockquote.exec(l);if(i){let r=Mi(i[0],`
`).split(`
`),u="",d="";const f=[];for(;r.length>0;){let m=!1;const g=[];let v;for(v=0;v<r.length;v++)if(/^ {0,3}>/.test(r[v]))g.push(r[v]),m=!0;else if(!m)g.push(r[v]);else break;r=r.slice(v);const x=g.join(`
`),S=x.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");u=u?`${u}
${x}`:x,d=d?`${d}
${S}`:S;const T=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(S,f,!0),this.lexer.state.top=T,r.length===0)break;const A=f[f.length-1];if((A==null?void 0:A.type)==="code")break;if((A==null?void 0:A.type)==="blockquote"){const O=A,D=O.raw+`
`+r.join(`
`),Y=this.blockquote(D);f[f.length-1]=Y,u=u.substring(0,u.length-O.raw.length)+Y.raw,d=d.substring(0,d.length-O.text.length)+Y.text;break}else if((A==null?void 0:A.type)==="list"){const O=A,D=O.raw+`
`+r.join(`
`),Y=this.list(D);f[f.length-1]=Y,u=u.substring(0,u.length-A.raw.length)+Y.raw,d=d.substring(0,d.length-O.raw.length)+Y.raw,r=D.substring(f[f.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:u,tokens:f,text:d}}}list(l){let i=this.rules.block.list.exec(l);if(i){let r=i[1].trim();const u=r.length>1,d={type:"list",raw:"",ordered:u,start:u?+r.slice(0,-1):"",loose:!1,items:[]};r=u?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=u?r:"[*+-]");const f=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let m=!1;for(;l;){let g=!1,v="",x="";if(!(i=f.exec(l))||this.rules.block.hr.test(l))break;v=i[0],l=l.substring(v.length);let S=i[2].split(`
`,1)[0].replace(/^\t+/,B=>" ".repeat(3*B.length)),T=l.split(`
`,1)[0],A=!S.trim(),O=0;if(this.options.pedantic?(O=2,x=S.trimStart()):A?O=i[1].length+1:(O=i[2].search(/[^ ]/),O=O>4?1:O,x=S.slice(O),O+=i[1].length),A&&/^ *$/.test(T)&&(v+=T+`
`,l=l.substring(T.length+1),g=!0),!g){const B=new RegExp(`^ {0,${Math.min(3,O-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Z=new RegExp(`^ {0,${Math.min(3,O-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Q=new RegExp(`^ {0,${Math.min(3,O-1)}}(?:\`\`\`|~~~)`),X=new RegExp(`^ {0,${Math.min(3,O-1)}}#`);for(;l;){const I=l.split(`
`,1)[0];if(T=I,this.options.pedantic&&(T=T.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Q.test(T)||X.test(T)||B.test(T)||Z.test(l))break;if(T.search(/[^ ]/)>=O||!T.trim())x+=`
`+T.slice(O);else{if(A||S.search(/[^ ]/)>=4||Q.test(S)||X.test(S)||Z.test(S))break;x+=`
`+T}!A&&!T.trim()&&(A=!0),v+=I+`
`,l=l.substring(I.length+1),S=T.slice(O)}}d.loose||(m?d.loose=!0:/\n *\n *$/.test(v)&&(m=!0));let D=null,Y;this.options.gfm&&(D=/^\[[ xX]\] /.exec(x),D&&(Y=D[0]!=="[ ] ",x=x.replace(/^\[[ xX]\] +/,""))),d.items.push({type:"list_item",raw:v,task:!!D,checked:Y,loose:!1,text:x,tokens:[]}),d.raw+=v}d.items[d.items.length-1].raw=d.items[d.items.length-1].raw.trimEnd(),d.items[d.items.length-1].text=d.items[d.items.length-1].text.trimEnd(),d.raw=d.raw.trimEnd();for(let g=0;g<d.items.length;g++)if(this.lexer.state.top=!1,d.items[g].tokens=this.lexer.blockTokens(d.items[g].text,[]),!d.loose){const v=d.items[g].tokens.filter(S=>S.type==="space"),x=v.length>0&&v.some(S=>/\n.*\n/.test(S.raw));d.loose=x}if(d.loose)for(let g=0;g<d.items.length;g++)d.items[g].loose=!0;return d}}html(l){const i=this.rules.block.html.exec(l);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(l){const i=this.rules.block.def.exec(l);if(i){const r=i[1].toLowerCase().replace(/\s+/g," "),u=i[2]?i[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",d=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):i[3];return{type:"def",tag:r,raw:i[0],href:u,title:d}}}table(l){const i=this.rules.block.table.exec(l);if(!i||!/[:|]/.test(i[2]))return;const r=qf(i[1]),u=i[2].replace(/^\||\| *$/g,"").split("|"),d=i[3]&&i[3].trim()?i[3].replace(/\n[ \t]*$/,"").split(`
`):[],f={type:"table",raw:i[0],header:[],align:[],rows:[]};if(r.length===u.length){for(const m of u)/^ *-+: *$/.test(m)?f.align.push("right"):/^ *:-+: *$/.test(m)?f.align.push("center"):/^ *:-+ *$/.test(m)?f.align.push("left"):f.align.push(null);for(let m=0;m<r.length;m++)f.header.push({text:r[m],tokens:this.lexer.inline(r[m]),header:!0,align:f.align[m]});for(const m of d)f.rows.push(qf(m,f.header.length).map((g,v)=>({text:g,tokens:this.lexer.inline(g),header:!1,align:f.align[v]})));return f}}lheading(l){const i=this.rules.block.lheading.exec(l);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(l){const i=this.rules.block.paragraph.exec(l);if(i){const r=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:r,tokens:this.lexer.inline(r)}}}text(l){const i=this.rules.block.text.exec(l);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(l){const i=this.rules.inline.escape.exec(l);if(i)return{type:"escape",raw:i[0],text:Bt(i[1])}}tag(l){const i=this.rules.inline.tag.exec(l);if(i)return!this.lexer.state.inLink&&/^<a /i.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(l){const i=this.rules.inline.link.exec(l);if(i){const r=i[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const f=Mi(r.slice(0,-1),"\\");if((r.length-f.length)%2===0)return}else{const f=xg(i[2],"()");if(f>-1){const g=(i[0].indexOf("!")===0?5:4)+i[1].length+f;i[2]=i[2].substring(0,f),i[0]=i[0].substring(0,g).trim(),i[3]=""}}let u=i[2],d="";if(this.options.pedantic){const f=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u);f&&(u=f[1],d=f[3])}else d=i[3]?i[3].slice(1,-1):"";return u=u.trim(),/^</.test(u)&&(this.options.pedantic&&!/>$/.test(r)?u=u.slice(1):u=u.slice(1,-1)),Vf(i,{href:u&&u.replace(this.rules.inline.anyPunctuation,"$1"),title:d&&d.replace(this.rules.inline.anyPunctuation,"$1")},i[0],this.lexer)}}reflink(l,i){let r;if((r=this.rules.inline.reflink.exec(l))||(r=this.rules.inline.nolink.exec(l))){const u=(r[2]||r[1]).replace(/\s+/g," "),d=i[u.toLowerCase()];if(!d){const f=r[0].charAt(0);return{type:"text",raw:f,text:f}}return Vf(r,d,r[0],this.lexer)}}emStrong(l,i,r=""){let u=this.rules.inline.emStrongLDelim.exec(l);if(!u||u[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(u[1]||u[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const f=[...u[0]].length-1;let m,g,v=f,x=0;const S=u[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(S.lastIndex=0,i=i.slice(-1*l.length+f);(u=S.exec(i))!=null;){if(m=u[1]||u[2]||u[3]||u[4]||u[5]||u[6],!m)continue;if(g=[...m].length,u[3]||u[4]){v+=g;continue}else if((u[5]||u[6])&&f%3&&!((f+g)%3)){x+=g;continue}if(v-=g,v>0)continue;g=Math.min(g,g+v+x);const T=[...u[0]][0].length,A=l.slice(0,f+u.index+T+g);if(Math.min(f,g)%2){const D=A.slice(1,-1);return{type:"em",raw:A,text:D,tokens:this.lexer.inlineTokens(D)}}const O=A.slice(2,-2);return{type:"strong",raw:A,text:O,tokens:this.lexer.inlineTokens(O)}}}}codespan(l){const i=this.rules.inline.code.exec(l);if(i){let r=i[2].replace(/\n/g," ");const u=/[^ ]/.test(r),d=/^ /.test(r)&&/ $/.test(r);return u&&d&&(r=r.substring(1,r.length-1)),r=Bt(r,!0),{type:"codespan",raw:i[0],text:r}}}br(l){const i=this.rules.inline.br.exec(l);if(i)return{type:"br",raw:i[0]}}del(l){const i=this.rules.inline.del.exec(l);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}}autolink(l){const i=this.rules.inline.autolink.exec(l);if(i){let r,u;return i[2]==="@"?(r=Bt(i[1]),u="mailto:"+r):(r=Bt(i[1]),u=r),{type:"link",raw:i[0],text:r,href:u,tokens:[{type:"text",raw:r,text:r}]}}}url(l){var r;let i;if(i=this.rules.inline.url.exec(l)){let u,d;if(i[2]==="@")u=Bt(i[0]),d="mailto:"+u;else{let f;do f=i[0],i[0]=((r=this.rules.inline._backpedal.exec(i[0]))==null?void 0:r[0])??"";while(f!==i[0]);u=Bt(i[0]),i[1]==="www."?d="http://"+i[0]:d=i[0]}return{type:"link",raw:i[0],text:u,href:d,tokens:[{type:"text",raw:u,text:u}]}}}inlineText(l){const i=this.rules.inline.text.exec(l);if(i){let r;return this.lexer.state.inRawBlock?r=i[0]:r=Bt(i[0]),{type:"text",raw:i[0],text:r}}}}const wg=/^(?: *(?:\n|$))+/,Cg=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Eg=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Zi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ag=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,wp=/(?:[*+-]|\d{1,9}[.)])/,Cp=ze(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,wp).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),mu=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ng=/^[^\n]+/,gu=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Tg=ze(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",gu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Dg=ze(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,wp).getRegex(),wr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",bu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Mg=ze("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",bu).replace("tag",wr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ep=ze(mu).replace("hr",Zi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wr).getRegex(),kg=ze(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ep).getRegex(),vu={blockquote:kg,code:Cg,def:Tg,fences:Eg,heading:Ag,hr:Zi,html:Mg,lheading:Cp,list:Dg,newline:wg,paragraph:Ep,table:ji,text:Ng},Yf=ze("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Zi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wr).getRegex(),Rg={...vu,table:Yf,paragraph:ze(mu).replace("hr",Zi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Yf).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wr).getRegex()},jg={...vu,html:ze(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",bu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ji,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ze(mu).replace("hr",Zi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Cp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ap=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Og=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Np=/^( {2,}|\\)\n(?!\s*$)/,zg=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Bi="\\p{P}\\p{S}",_g=ze(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Bi).getRegex(),Lg=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Ug=ze(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Bi).getRegex(),Hg=ze("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Bi).getRegex(),Zg=ze("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Bi).getRegex(),Bg=ze(/\\([punct])/,"gu").replace(/punct/g,Bi).getRegex(),qg=ze(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Vg=ze(bu).replace("(?:-->|$)","-->").getRegex(),Yg=ze("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Vg).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),hr=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ig=ze(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",hr).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Tp=ze(/^!?\[(label)\]\[(ref)\]/).replace("label",hr).replace("ref",gu).getRegex(),Dp=ze(/^!?\[(ref)\](?:\[\])?/).replace("ref",gu).getRegex(),Gg=ze("reflink|nolink(?!\\()","g").replace("reflink",Tp).replace("nolink",Dp).getRegex(),yu={_backpedal:ji,anyPunctuation:Bg,autolink:qg,blockSkip:Lg,br:Np,code:Og,del:ji,emStrongLDelim:Ug,emStrongRDelimAst:Hg,emStrongRDelimUnd:Zg,escape:Ap,link:Ig,nolink:Dp,punctuation:_g,reflink:Tp,reflinkSearch:Gg,tag:Yg,text:zg,url:ji},Xg={...yu,link:ze(/^!?\[(label)\]\((.*?)\)/).replace("label",hr).getRegex(),reflink:ze(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",hr).getRegex()},au={...yu,escape:ze(Ap).replace("])","~|])").getRegex(),url:ze(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Qg={...au,br:ze(Np).replace("{2,}","*").getRegex(),text:ze(au.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},or={normal:vu,gfm:Rg,pedantic:jg},ki={normal:yu,gfm:au,breaks:Qg,pedantic:Xg};class xn{constructor(l){Ue(this,"tokens");Ue(this,"options");Ue(this,"state");Ue(this,"tokenizer");Ue(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=l||Ba,this.options.tokenizer=this.options.tokenizer||new pr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const i={block:or.normal,inline:ki.normal};this.options.pedantic?(i.block=or.pedantic,i.inline=ki.pedantic):this.options.gfm&&(i.block=or.gfm,this.options.breaks?i.inline=ki.breaks:i.inline=ki.gfm),this.tokenizer.rules=i}static get rules(){return{block:or,inline:ki}}static lex(l,i){return new xn(i).lex(l)}static lexInline(l,i){return new xn(i).inlineTokens(l)}lex(l){l=l.replace(/\r\n|\r/g,`
`),this.blockTokens(l,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){const r=this.inlineQueue[i];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(l,i=[],r=!1){this.options.pedantic?l=l.replace(/\t/g,"    ").replace(/^ +$/gm,""):l=l.replace(/^( *)(\t+)/gm,(m,g,v)=>g+"    ".repeat(v.length));let u,d,f;for(;l;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(m=>(u=m.call({lexer:this},l,i))?(l=l.substring(u.raw.length),i.push(u),!0):!1))){if(u=this.tokenizer.space(l)){l=l.substring(u.raw.length),u.raw.length===1&&i.length>0?i[i.length-1].raw+=`
`:i.push(u);continue}if(u=this.tokenizer.code(l)){l=l.substring(u.raw.length),d=i[i.length-1],d&&(d.type==="paragraph"||d.type==="text")?(d.raw+=`
`+u.raw,d.text+=`
`+u.text,this.inlineQueue[this.inlineQueue.length-1].src=d.text):i.push(u);continue}if(u=this.tokenizer.fences(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.heading(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.hr(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.blockquote(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.list(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.html(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.def(l)){l=l.substring(u.raw.length),d=i[i.length-1],d&&(d.type==="paragraph"||d.type==="text")?(d.raw+=`
`+u.raw,d.text+=`
`+u.raw,this.inlineQueue[this.inlineQueue.length-1].src=d.text):this.tokens.links[u.tag]||(this.tokens.links[u.tag]={href:u.href,title:u.title});continue}if(u=this.tokenizer.table(l)){l=l.substring(u.raw.length),i.push(u);continue}if(u=this.tokenizer.lheading(l)){l=l.substring(u.raw.length),i.push(u);continue}if(f=l,this.options.extensions&&this.options.extensions.startBlock){let m=1/0;const g=l.slice(1);let v;this.options.extensions.startBlock.forEach(x=>{v=x.call({lexer:this},g),typeof v=="number"&&v>=0&&(m=Math.min(m,v))}),m<1/0&&m>=0&&(f=l.substring(0,m+1))}if(this.state.top&&(u=this.tokenizer.paragraph(f))){d=i[i.length-1],r&&(d==null?void 0:d.type)==="paragraph"?(d.raw+=`
`+u.raw,d.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):i.push(u),r=f.length!==l.length,l=l.substring(u.raw.length);continue}if(u=this.tokenizer.text(l)){l=l.substring(u.raw.length),d=i[i.length-1],d&&d.type==="text"?(d.raw+=`
`+u.raw,d.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):i.push(u);continue}if(l){const m="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return this.state.top=!0,i}inline(l,i=[]){return this.inlineQueue.push({src:l,tokens:i}),i}inlineTokens(l,i=[]){let r,u,d,f=l,m,g,v;if(this.tokens.links){const x=Object.keys(this.tokens.links);if(x.length>0)for(;(m=this.tokenizer.rules.inline.reflinkSearch.exec(f))!=null;)x.includes(m[0].slice(m[0].lastIndexOf("[")+1,-1))&&(f=f.slice(0,m.index)+"["+"a".repeat(m[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(m=this.tokenizer.rules.inline.blockSkip.exec(f))!=null;)f=f.slice(0,m.index)+"["+"a".repeat(m[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(m=this.tokenizer.rules.inline.anyPunctuation.exec(f))!=null;)f=f.slice(0,m.index)+"++"+f.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;l;)if(g||(v=""),g=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(x=>(r=x.call({lexer:this},l,i))?(l=l.substring(r.raw.length),i.push(r),!0):!1))){if(r=this.tokenizer.escape(l)){l=l.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.tag(l)){l=l.substring(r.raw.length),u=i[i.length-1],u&&r.type==="text"&&u.type==="text"?(u.raw+=r.raw,u.text+=r.text):i.push(r);continue}if(r=this.tokenizer.link(l)){l=l.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.reflink(l,this.tokens.links)){l=l.substring(r.raw.length),u=i[i.length-1],u&&r.type==="text"&&u.type==="text"?(u.raw+=r.raw,u.text+=r.text):i.push(r);continue}if(r=this.tokenizer.emStrong(l,f,v)){l=l.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.codespan(l)){l=l.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.br(l)){l=l.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.del(l)){l=l.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.autolink(l)){l=l.substring(r.raw.length),i.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(l))){l=l.substring(r.raw.length),i.push(r);continue}if(d=l,this.options.extensions&&this.options.extensions.startInline){let x=1/0;const S=l.slice(1);let T;this.options.extensions.startInline.forEach(A=>{T=A.call({lexer:this},S),typeof T=="number"&&T>=0&&(x=Math.min(x,T))}),x<1/0&&x>=0&&(d=l.substring(0,x+1))}if(r=this.tokenizer.inlineText(d)){l=l.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(v=r.raw.slice(-1)),g=!0,u=i[i.length-1],u&&u.type==="text"?(u.raw+=r.raw,u.text+=r.text):i.push(r);continue}if(l){const x="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(x);break}else throw new Error(x)}}return i}}class mr{constructor(l){Ue(this,"options");Ue(this,"parser");this.options=l||Ba}space(l){return""}code({text:l,lang:i,escaped:r}){var f;const u=(f=(i||"").match(/^\S*/))==null?void 0:f[0],d=l.replace(/\n$/,"")+`
`;return u?'<pre><code class="language-'+Bt(u)+'">'+(r?d:Bt(d,!0))+`</code></pre>
`:"<pre><code>"+(r?d:Bt(d,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}heading({tokens:l,depth:i}){return`<h${i}>${this.parser.parseInline(l)}</h${i}>
`}hr(l){return`<hr>
`}list(l){const i=l.ordered,r=l.start;let u="";for(let m=0;m<l.items.length;m++){const g=l.items[m];u+=this.listitem(g)}const d=i?"ol":"ul",f=i&&r!==1?' start="'+r+'"':"";return"<"+d+f+`>
`+u+"</"+d+`>
`}listitem(l){let i="";if(l.task){const r=this.checkbox({checked:!!l.checked});l.loose?l.tokens.length>0&&l.tokens[0].type==="paragraph"?(l.tokens[0].text=r+" "+l.tokens[0].text,l.tokens[0].tokens&&l.tokens[0].tokens.length>0&&l.tokens[0].tokens[0].type==="text"&&(l.tokens[0].tokens[0].text=r+" "+l.tokens[0].tokens[0].text)):l.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):i+=r+" "}return i+=this.parser.parse(l.tokens,!!l.loose),`<li>${i}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let i="",r="";for(let d=0;d<l.header.length;d++)r+=this.tablecell(l.header[d]);i+=this.tablerow({text:r});let u="";for(let d=0;d<l.rows.length;d++){const f=l.rows[d];r="";for(let m=0;m<f.length;m++)r+=this.tablecell(f[m]);u+=this.tablerow({text:r})}return u&&(u=`<tbody>${u}</tbody>`),`<table>
<thead>
`+i+`</thead>
`+u+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){const i=this.parser.parseInline(l.tokens),r=l.header?"th":"td";return(l.align?`<${r} align="${l.align}">`:`<${r}>`)+i+`</${r}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${l}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:i,tokens:r}){const u=this.parser.parseInline(r),d=Bf(l);if(d===null)return u;l=d;let f='<a href="'+l+'"';return i&&(f+=' title="'+i+'"'),f+=">"+u+"</a>",f}image({href:l,title:i,text:r}){const u=Bf(l);if(u===null)return r;l=u;let d=`<img src="${l}" alt="${r}"`;return i&&(d+=` title="${i}"`),d+=">",d}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):l.text}}class xu{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}}class Sn{constructor(l){Ue(this,"options");Ue(this,"renderer");Ue(this,"textRenderer");this.options=l||Ba,this.options.renderer=this.options.renderer||new mr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new xu}static parse(l,i){return new Sn(i).parse(l)}static parseInline(l,i){return new Sn(i).parseInline(l)}parse(l,i=!0){let r="";for(let u=0;u<l.length;u++){const d=l[u];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]){const m=d,g=this.options.extensions.renderers[m.type].call({parser:this},m);if(g!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(m.type)){r+=g||"";continue}}const f=d;switch(f.type){case"space":{r+=this.renderer.space(f);continue}case"hr":{r+=this.renderer.hr(f);continue}case"heading":{r+=this.renderer.heading(f);continue}case"code":{r+=this.renderer.code(f);continue}case"table":{r+=this.renderer.table(f);continue}case"blockquote":{r+=this.renderer.blockquote(f);continue}case"list":{r+=this.renderer.list(f);continue}case"html":{r+=this.renderer.html(f);continue}case"paragraph":{r+=this.renderer.paragraph(f);continue}case"text":{let m=f,g=this.renderer.text(m);for(;u+1<l.length&&l[u+1].type==="text";)m=l[++u],g+=`
`+this.renderer.text(m);i?r+=this.renderer.paragraph({type:"paragraph",raw:g,text:g,tokens:[{type:"text",raw:g,text:g}]}):r+=g;continue}default:{const m='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(m),"";throw new Error(m)}}}return r}parseInline(l,i){i=i||this.renderer;let r="";for(let u=0;u<l.length;u++){const d=l[u];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]){const m=this.options.extensions.renderers[d.type].call({parser:this},d);if(m!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(d.type)){r+=m||"";continue}}const f=d;switch(f.type){case"escape":{r+=i.text(f);break}case"html":{r+=i.html(f);break}case"link":{r+=i.link(f);break}case"image":{r+=i.image(f);break}case"strong":{r+=i.strong(f);break}case"em":{r+=i.em(f);break}case"codespan":{r+=i.codespan(f);break}case"br":{r+=i.br(f);break}case"del":{r+=i.del(f);break}case"text":{r+=i.text(f);break}default:{const m='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(m),"";throw new Error(m)}}}return r}}class Oi{constructor(l){Ue(this,"options");this.options=l||Ba}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}}Ue(Oi,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Yn,Mp,lu,kp;class Kg{constructor(...l){Df(this,Yn);Ue(this,"defaults",hu());Ue(this,"options",this.setOptions);Ue(this,"parse",Ni(this,Yn,lu).call(this,xn.lex,Sn.parse));Ue(this,"parseInline",Ni(this,Yn,lu).call(this,xn.lexInline,Sn.parseInline));Ue(this,"Parser",Sn);Ue(this,"Renderer",mr);Ue(this,"TextRenderer",xu);Ue(this,"Lexer",xn);Ue(this,"Tokenizer",pr);Ue(this,"Hooks",Oi);this.use(...l)}walkTokens(l,i){var u,d;let r=[];for(const f of l)switch(r=r.concat(i.call(this,f)),f.type){case"table":{const m=f;for(const g of m.header)r=r.concat(this.walkTokens(g.tokens,i));for(const g of m.rows)for(const v of g)r=r.concat(this.walkTokens(v.tokens,i));break}case"list":{const m=f;r=r.concat(this.walkTokens(m.items,i));break}default:{const m=f;(d=(u=this.defaults.extensions)==null?void 0:u.childTokens)!=null&&d[m.type]?this.defaults.extensions.childTokens[m.type].forEach(g=>{const v=m[g].flat(1/0);r=r.concat(this.walkTokens(v,i))}):m.tokens&&(r=r.concat(this.walkTokens(m.tokens,i)))}}return r}use(...l){const i=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(r=>{const u={...r};if(u.async=this.defaults.async||u.async||!1,r.extensions&&(r.extensions.forEach(d=>{if(!d.name)throw new Error("extension name required");if("renderer"in d){const f=i.renderers[d.name];f?i.renderers[d.name]=function(...m){let g=d.renderer.apply(this,m);return g===!1&&(g=f.apply(this,m)),g}:i.renderers[d.name]=d.renderer}if("tokenizer"in d){if(!d.level||d.level!=="block"&&d.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const f=i[d.level];f?f.unshift(d.tokenizer):i[d.level]=[d.tokenizer],d.start&&(d.level==="block"?i.startBlock?i.startBlock.push(d.start):i.startBlock=[d.start]:d.level==="inline"&&(i.startInline?i.startInline.push(d.start):i.startInline=[d.start]))}"childTokens"in d&&d.childTokens&&(i.childTokens[d.name]=d.childTokens)}),u.extensions=i),r.renderer){const d=this.defaults.renderer||new mr(this.defaults);for(const f in r.renderer){if(!(f in d))throw new Error(`renderer '${f}' does not exist`);if(["options","parser"].includes(f))continue;const m=f;let g=r.renderer[m];r.useNewRenderer||(g=Ni(this,Yn,Mp).call(this,g,m,d));const v=d[m];d[m]=(...x)=>{let S=g.apply(d,x);return S===!1&&(S=v.apply(d,x)),S||""}}u.renderer=d}if(r.tokenizer){const d=this.defaults.tokenizer||new pr(this.defaults);for(const f in r.tokenizer){if(!(f in d))throw new Error(`tokenizer '${f}' does not exist`);if(["options","rules","lexer"].includes(f))continue;const m=f,g=r.tokenizer[m],v=d[m];d[m]=(...x)=>{let S=g.apply(d,x);return S===!1&&(S=v.apply(d,x)),S}}u.tokenizer=d}if(r.hooks){const d=this.defaults.hooks||new Oi;for(const f in r.hooks){if(!(f in d))throw new Error(`hook '${f}' does not exist`);if(f==="options")continue;const m=f,g=r.hooks[m],v=d[m];Oi.passThroughHooks.has(f)?d[m]=x=>{if(this.defaults.async)return Promise.resolve(g.call(d,x)).then(T=>v.call(d,T));const S=g.call(d,x);return v.call(d,S)}:d[m]=(...x)=>{let S=g.apply(d,x);return S===!1&&(S=v.apply(d,x)),S}}u.hooks=d}if(r.walkTokens){const d=this.defaults.walkTokens,f=r.walkTokens;u.walkTokens=function(m){let g=[];return g.push(f.call(this,m)),d&&(g=g.concat(d.call(this,m))),g}}this.defaults={...this.defaults,...u}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,i){return xn.lex(l,i??this.defaults)}parser(l,i){return Sn.parse(l,i??this.defaults)}}Yn=new WeakSet,Mp=function(l,i,r){switch(i){case"heading":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,r.parser.parseInline(u.tokens),u.depth,vg(r.parser.parseInline(u.tokens,r.parser.textRenderer)))};case"code":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text,u.lang,!!u.escaped)};case"table":return function(u){if(!u.type||u.type!==i)return l.apply(this,arguments);let d="",f="";for(let g=0;g<u.header.length;g++)f+=this.tablecell({text:u.header[g].text,tokens:u.header[g].tokens,header:!0,align:u.align[g]});d+=this.tablerow({text:f});let m="";for(let g=0;g<u.rows.length;g++){const v=u.rows[g];f="";for(let x=0;x<v.length;x++)f+=this.tablecell({text:v[x].text,tokens:v[x].tokens,header:!1,align:u.align[x]});m+=this.tablerow({text:f})}return l.call(this,d,m)};case"blockquote":return function(u){if(!u.type||u.type!==i)return l.apply(this,arguments);const d=this.parser.parse(u.tokens);return l.call(this,d)};case"list":return function(u){if(!u.type||u.type!==i)return l.apply(this,arguments);const d=u.ordered,f=u.start,m=u.loose;let g="";for(let v=0;v<u.items.length;v++){const x=u.items[v],S=x.checked,T=x.task;let A="";if(x.task){const O=this.checkbox({checked:!!S});m?x.tokens.length>0&&x.tokens[0].type==="paragraph"?(x.tokens[0].text=O+" "+x.tokens[0].text,x.tokens[0].tokens&&x.tokens[0].tokens.length>0&&x.tokens[0].tokens[0].type==="text"&&(x.tokens[0].tokens[0].text=O+" "+x.tokens[0].tokens[0].text)):x.tokens.unshift({type:"text",text:O+" "}):A+=O+" "}A+=this.parser.parse(x.tokens,m),g+=this.listitem({type:"list_item",raw:A,text:A,task:T,checked:!!S,loose:m,tokens:x.tokens})}return l.call(this,g,d,f)};case"html":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text,u.block)};case"paragraph":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"escape":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text)};case"link":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.href,u.title,this.parser.parseInline(u.tokens))};case"image":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.href,u.title,u.text)};case"strong":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"em":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"codespan":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text)};case"del":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,this.parser.parseInline(u.tokens))};case"text":return function(u){return!u.type||u.type!==i?l.apply(this,arguments):l.call(this,u.text)}}return l},lu=function(l,i){return(r,u)=>{const d={...u},f={...this.defaults,...d};this.defaults.async===!0&&d.async===!1&&(f.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),f.async=!0);const m=Ni(this,Yn,kp).call(this,!!f.silent,!!f.async);if(typeof r>"u"||r===null)return m(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return m(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(f.hooks&&(f.hooks.options=f),f.async)return Promise.resolve(f.hooks?f.hooks.preprocess(r):r).then(g=>l(g,f)).then(g=>f.hooks?f.hooks.processAllTokens(g):g).then(g=>f.walkTokens?Promise.all(this.walkTokens(g,f.walkTokens)).then(()=>g):g).then(g=>i(g,f)).then(g=>f.hooks?f.hooks.postprocess(g):g).catch(m);try{f.hooks&&(r=f.hooks.preprocess(r));let g=l(r,f);f.hooks&&(g=f.hooks.processAllTokens(g)),f.walkTokens&&this.walkTokens(g,f.walkTokens);let v=i(g,f);return f.hooks&&(v=f.hooks.postprocess(v)),v}catch(g){return m(g)}}},kp=function(l,i){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const u="<p>An error occurred:</p><pre>"+Bt(r.message+"",!0)+"</pre>";return i?Promise.resolve(u):u}if(i)return Promise.reject(r);throw r}};const Za=new Kg;function ke(s,l){return Za.parse(s,l)}ke.options=ke.setOptions=function(s){return Za.setOptions(s),ke.defaults=Za.defaults,yp(ke.defaults),ke};ke.getDefaults=hu;ke.defaults=Ba;ke.use=function(...s){return Za.use(...s),ke.defaults=Za.defaults,yp(ke.defaults),ke};ke.walkTokens=function(s,l){return Za.walkTokens(s,l)};ke.parseInline=Za.parseInline;ke.Parser=Sn;ke.parser=Sn.parse;ke.Renderer=mr;ke.TextRenderer=xu;ke.Lexer=xn;ke.lexer=xn.lex;ke.Tokenizer=pr;ke.Hooks=Oi;ke.parse=ke;ke.options;ke.setOptions;ke.use;ke.walkTokens;ke.parseInline;Sn.parse;xn.lex;const $g=`/* ================================================================
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
`,Fg=`/* ============================================================
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
`,Jg=`// Icons — Phosphor Icons (phosphor-icons.com), Regular weight, 256×256 viewBox.
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
`,Pg=`// Template picker — trigger button + dropdown menu with search,
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
`,Wg=`// Modals — Save-as-template dialog, Save-changes confirm, Manage modal.

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
`,e8=`// Step 3 body — Producer Team table + Additional Information block.
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
`,t8=$g.replace(/@font-face\s*\{[^}]*\}/g,""),n8=`
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
<\/script>`;function a8(s){return`<!doctype html>
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
  <style>${t8}</style>
  <style>${Fg}</style>
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
  ${n8}
</head>
<body>
  <div id="root"></div>
  <div id="__err"></div>
  <script type="text/babel">
${Jg}
  <\/script>
  <script type="text/babel">
${Pg}
  <\/script>
  <script type="text/babel">
${Wg}
  <\/script>
  <script type="text/babel">
${e8}
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
</html>`}function l8({code:s,prd:l,onInitDesign:i}){const r=h.useRef(null),[u,d]=h.useState("preview"),[f,m]=h.useState("#/"),[g,v]=h.useState("#/"),[x,S]=h.useState(["#/"]),[T,A]=h.useState(0);h.useEffect(()=>{function Z(Q){var I;if(((I=Q.data)==null?void 0:I.type)!=="__route")return;const X=Q.data.path||"#/";m(X),v(X),S(F=>{const q=F.slice(0,T+1);return q[q.length-1]===X?q:[...q,X]}),A(F=>F+1)}return window.addEventListener("message",Z),()=>window.removeEventListener("message",Z)},[T]),h.useEffect(()=>{!r.current||!s||(m("#/"),v("#/"),S(["#/"]),A(0),r.current.srcdoc=a8(s))},[s]);function O(Z){var Q,X,I,F,q;(X=(Q=r.current)==null?void 0:Q.contentWindow)==null||X.postMessage({type:"__navigate",path:Z},"*");try{(I=r.current)!=null&&I.contentWindow&&((q=(F=r.current.contentWindow).__navigate)==null||q.call(F,Z))}catch{}}function D(){if(T<=0)return;const Z=x[T-1];A(Q=>Q-1),m(Z),v(Z),O(Z)}function Y(){if(T>=x.length-1)return;const Z=x[T+1];A(Q=>Q+1),m(Z),v(Z),O(Z)}function B(Z){Z.preventDefault(),O(g)}return s?b.jsxs("div",{className:"canvas canvas--live",children:[b.jsxs("div",{className:"canvas-toolbar",children:[b.jsxs("div",{className:"canvas-view-tabs",children:[b.jsx("button",{className:`canvas-view-tab ${u==="preview"?"active":""}`,onClick:()=>d("preview"),children:"Preview"}),b.jsx("button",{className:`canvas-view-tab ${u==="code"?"active":""}`,onClick:()=>d("code"),children:"Code"})]}),u==="preview"&&b.jsxs("div",{className:"canvas-urlbar",children:[b.jsx("button",{className:"canvas-nav-btn",onClick:D,disabled:T<=0,title:"Back",children:"←"}),b.jsx("button",{className:"canvas-nav-btn",onClick:Y,disabled:T>=x.length-1,title:"Forward",children:"→"}),b.jsx("form",{className:"canvas-url-form",onSubmit:B,children:b.jsx("input",{className:"canvas-url-input",value:g,onChange:Z=>v(Z.target.value),spellCheck:!1})})]}),b.jsx("button",{className:"canvas-copy-btn",onClick:()=>navigator.clipboard.writeText(s),children:"copy"})]}),b.jsxs("div",{className:"canvas-body",children:[b.jsx("iframe",{ref:r,className:"canvas-iframe",style:{display:u==="preview"?"block":"none"},title:"design preview",sandbox:"allow-scripts allow-same-origin"}),u==="code"&&b.jsx("pre",{className:"canvas-code",children:b.jsx("code",{children:s})})]})]}):b.jsx("div",{className:"canvas canvas--empty",children:l?b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"canvas-empty-icon",children:"✦"}),b.jsx("p",{className:"canvas-empty-title",children:l.name}),b.jsx("span",{className:"canvas-empty-sub",children:"PRD loaded — ready to generate"}),b.jsx("button",{className:"canvas-init-btn",onClick:i,children:"Init Design"})]}):b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"canvas-empty-icon",children:"◎"}),b.jsx("p",{className:"canvas-empty-title",children:"No PRD loaded"}),b.jsx("span",{className:"canvas-empty-sub",children:"Open a PRD from Projects to start"})]})})}const Rp="ennabl_builder_history",i8=50;function s8(){try{return JSON.parse(localStorage.getItem(Rp)||"[]")}catch{return[]}}function If(s){localStorage.setItem(Rp,JSON.stringify(s.slice(0,i8)))}function r8({prdName:s,code:l,iteration:i}){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,timestamp:new Date().toISOString(),prdName:s,code:l,iteration:i}}function o8(s){const i=`${s.prdName.replace(/\.md$/i,"").replace(/[^a-z0-9]/gi,"-").toLowerCase()}-v${s.iteration}.jsx`,r=`/**
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
`,u=new Blob([r],{type:"text/plain"}),d=URL.createObjectURL(u);Object.assign(document.createElement("a"),{href:d,download:i}).click(),URL.revokeObjectURL(d)}function c8(s){const l=Math.floor((Date.now()-new Date(s))/6e4);if(l<1)return"just now";if(l<60)return`${l}m ago`;const i=Math.floor(l/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}function u8(s){return s.split(`
`).slice(0,3).join(`
`).slice(0,140)}function d8({entries:s,onClear:l}){const[i,r]=h.useState(null);function u(d){navigator.clipboard.writeText(d.code),r(d.id),setTimeout(()=>r(null),2e3)}return s.length===0?b.jsxs("div",{className:"sb-empty",children:[b.jsx("p",{children:"No components yet"}),b.jsx("span",{children:"Each generated UI is logged here. Download or copy the JSX to use in your codebase."})]}):b.jsxs("div",{className:"sb-tab",children:[b.jsxs("div",{className:"sb-toolbar",children:[b.jsxs("span",{className:"sb-count",children:[s.length," snapshot",s.length!==1?"s":""]}),b.jsx("button",{className:"sb-clear",onClick:l,children:"clear all"})]}),b.jsx("div",{className:"sb-list",children:s.map(d=>b.jsxs("div",{className:"sb-entry",children:[b.jsxs("div",{className:"sb-entry-top",children:[b.jsx("span",{className:"sb-entry-name",children:d.prdName.replace(/\.md$/i,"")}),b.jsxs("span",{className:"sb-entry-badge",children:["v",d.iteration]}),b.jsx("span",{className:"sb-entry-time",children:c8(d.timestamp)})]}),b.jsx("pre",{className:"sb-entry-code",children:u8(d.code)}),b.jsxs("div",{className:"sb-entry-actions",children:[b.jsx("button",{className:"sb-btn",onClick:()=>u(d),children:i===d.id?"✓ copied":"copy"}),b.jsx("button",{className:"sb-btn sb-btn--primary",onClick:()=>o8(d),children:"↓ .jsx"})]})]},d.id))})]})}function f8({entries:s}){return b.jsx("div",{className:"figma-tab",children:b.jsxs("div",{className:"figma-coming",children:[b.jsx("div",{className:"figma-icon",children:"◈"}),b.jsx("p",{children:"Figma sync"}),b.jsx("span",{children:"Will push each generated component into your Figma file as a frame — auto-named by PRD and iteration, grouped in a dedicated page. Requires a Figma access token."}),b.jsx("div",{className:"figma-queue",children:s.length>0?b.jsxs(b.Fragment,{children:[b.jsxs("span",{className:"figma-queue-label",children:[s.length," snapshot",s.length!==1?"s":""," queued"]}),b.jsx("button",{className:"figma-btn",disabled:!0,children:"Connect Figma to push"})]}):b.jsx("span",{className:"figma-queue-label",children:"Generate a UI first"})})]})})}function p8({code:s,prd:l,history:i,onHistoryClear:r,onInitDesign:u}){const[d,f]=h.useState("design");return b.jsxs("div",{className:"left-panel",children:[b.jsxs("div",{className:"left-tabs",children:[b.jsx("button",{className:`left-tab ${d==="design"?"left-tab--active":""}`,onClick:()=>f("design"),children:"Design"}),b.jsx("button",{className:`left-tab ${d==="prd"?"left-tab--active":""} ${l?"":"left-tab--disabled"}`,onClick:()=>l&&f("prd"),children:l?l.name:"PRD"}),b.jsxs("button",{className:`left-tab ${d==="storybook"?"left-tab--active":""}`,onClick:()=>f("storybook"),children:["Storybook",i.length>0&&b.jsx("span",{className:"left-tab-count",children:i.length})]}),b.jsx("button",{className:`left-tab ${d==="figma"?"left-tab--active":""}`,onClick:()=>f("figma"),children:"Figma"})]}),b.jsxs("div",{className:"left-content",children:[b.jsx("div",{className:`left-canvas-wrap ${d!=="design"?"left-canvas-wrap--hidden":""}`,children:b.jsx(l8,{code:s,prd:l,onInitDesign:u})}),d==="prd"&&l&&b.jsx("div",{className:"prd-view",dangerouslySetInnerHTML:{__html:ke.parse(l.content)}}),d==="prd"&&!l&&b.jsx("div",{className:"prd-empty",children:"No PRD loaded"}),d==="storybook"&&b.jsx(d8,{entries:i,onClear:r}),d==="figma"&&b.jsx(f8,{entries:i})]})]})}const Su="ennabl_builder_api_key",jp=()=>localStorage.getItem(Su)||"",h8=s=>localStorage.setItem(Su,s.trim()),m8=()=>localStorage.removeItem(Su),Op="ennabl_builder_email",Kc=()=>localStorage.getItem(Op)||"",g8=s=>localStorage.setItem(Op,s),zp="ennabl_builder_theme",b8=()=>localStorage.getItem(zp)||"dark",v8=s=>localStorage.setItem(zp,s),_p="ennabl_builder_model",y8=[{id:"claude-haiku-4-5-20251001",label:"Haiku",note:"dev / fast"},{id:"claude-sonnet-4-6",label:"Sonnet",note:"balanced"},{id:"claude-opus-4-7",label:"Opus",note:"prod / best"}],x8="claude-haiku-4-5-20251001",Lp=()=>localStorage.getItem(_p)||x8,S8=s=>localStorage.setItem(_p,s),w8=`# ennabl Design Tokens

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
`,C8=`# ennabl Component Patterns

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
`,E8=`# ennabl Shared Components

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
`,A8=`You are an expert UI engineer for ennabl, an insurance analytics platform for insurance agencies and brokers.

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

${w8}

## Component patterns

${C8}

## Shared components (available as globals in the preview)

${E8}

## Context

The generated code runs inside a Vite + React app. The ennabl design system CSS (colors_and_type.css + styles.css) is already loaded globally — you can use all \`--en-*\` variables and \`.en-*\` classes directly without importing them.`,N8="https://api.anthropic.com/v1/messages";function T8(s){return s==="claude-opus-4-7"?{max_tokens:8192,thinking:{type:"enabled",budget_tokens:5e3}}:{max_tokens:8192}}async function D8({messages:s,onText:l,onDone:i}){var x,S,T,A,O,D,Y;const r=Lp(),u=await fetch(N8,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":jp(),"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:r,...T8(r),system:[{type:"text",text:A8,cache_control:{type:"ephemeral"}}],messages:s,stream:!0})});if(!u.ok){const B=await u.json().catch(()=>({}));throw new Error(((x=B.error)==null?void 0:x.message)||`API error ${u.status}`)}const d=u.body.getReader(),f=new TextDecoder;let m=0,g=0,v=0;for(;;){const{done:B,value:Z}=await d.read();if(B)break;const Q=f.decode(Z).split(`
`);for(const X of Q){if(!X.startsWith("data: "))continue;const I=X.slice(6).trim();if(!(!I||I==="[DONE]"))try{const F=JSON.parse(I);F.type==="message_start"&&(m=((T=(S=F.message)==null?void 0:S.usage)==null?void 0:T.input_tokens)??0,v=((O=(A=F.message)==null?void 0:A.usage)==null?void 0:O.cache_read_input_tokens)??0),F.type==="content_block_delta"&&((D=F.delta)==null?void 0:D.type)==="text_delta"&&l(F.delta.text),F.type==="message_delta"&&(g=((Y=F.usage)==null?void 0:Y.output_tokens)??0)}catch{}}}i({inputTokens:m,outputTokens:g,cacheReadTokens:v})}const Up="ennabl_builder_reports",$c={input:15/1e6,output:75/1e6,cacheRead:1.5/1e6};function M8({inputTokens:s=0,outputTokens:l=0,cacheReadTokens:i=0}){return Math.max(0,s-i)*$c.input+i*$c.cacheRead+l*$c.output}function k8(s){return{id:`s_${Date.now()}`,prdName:s,startedAt:new Date().toISOString(),iterations:0,inputTokens:0,outputTokens:0,cacheReadTokens:0,cost:0,componentsUsed:[],rating:null,accepted:!1}}function Hp(){try{return JSON.parse(localStorage.getItem(Up)||"{}")}catch{return{}}}function R8(s){localStorage.setItem(Up,JSON.stringify(s))}function iu(s){const l=Hp(),i=s.prdName;l[i]||(l[i]=[]);const r=l[i].findIndex(u=>u.id===s.id);r>=0?l[i][r]=s:l[i].unshift(s),R8(l)}function Fc(s){return Hp()[s]||[]}function j8(s){return s?["CollapsibleSection","EditableField","TemplatePicker","SaveTemplateDialog","UpdateTemplateDialog","ManageModal","DeleteConfirm","Step3Body","ProducerTable"].filter(i=>s.includes(i)):[]}function O8(s){if(!s.length)return null;const l=s.filter(i=>i.accepted&&i.iterations<=2).length;return Math.round(l/s.length*100)}const z8=new Set(["--en-primary","--en-primary-light","--en-primary-dark","--en-action-hover","--en-outlined-hover","--en-fg","--en-fg-secondary","--en-fg-disabled","--en-bg","--en-bg-grey","--en-bg-dark-grey","--en-bg-hover","--en-bg-active","--en-secondary","--en-secondary-dark","--en-border","--en-divider","--en-error","--en-error-dark","--en-success","--en-warning","--en-warning-dark","--en-icon","--en-icon-secondary","--en-sidebar","--en-logo-primary","--en-logo-accent","--en-radius-sm","--en-radius","--en-radius-regular","--en-radius-medium","--en-radius-large","--en-radius-xl","--en-shadow-menu","--en-shadow-tooltip","--en-shadow-card-hover","--en-duration-short","--en-easing","--en-font-sans"]),_8=new Set(["en-h3","en-h4","en-h5","en-body1","en-body1-bold","en-body2","en-body2-bold","en-body3","en-body3-bold","en-subtitle1","en-subtitle2","en-subtitle3","en-overline","en-caption","en-table-header","en-table-text"]),L8=new Set(["IconCheck","IconChevronDown","IconChevronUp","IconClose","IconCopy","IconDownload","IconEdit","IconEditFill","IconExternal","IconGear","IconInfo","IconMore","IconPlus","IconRevert","IconSearch","IconShare","IconStar","IconTrash","IconTrashFill","IconUpload","IconUsers"]);function U8(s){const l=[],i=[...s.matchAll(/var\((--en-[a-z0-9-]+)/g)].map(m=>m[1]);[...new Set(i)].filter(m=>!z8.has(m)).forEach(m=>l.push({type:"token",msg:`unknown token ${m}`}));const r=[...s.matchAll(/className="([^"]+)"/g)].flatMap(m=>m[1].split(/\s+/)).filter(m=>m.startsWith("en-"));[...new Set(r)].filter(m=>!_8.has(m)).forEach(m=>l.push({type:"class",msg:`unknown class .${m}`}));const u=[...s.matchAll(/<(Icon[A-Z][A-Za-z]*)/g)].map(m=>m[1]);[...new Set(u)].filter(m=>!L8.has(m)).forEach(m=>l.push({type:"icon",msg:`unknown icon <${m} />`}));const d=s.replace(/\/\/.*$/gm,"").replace(/\/\*[\s\S]*?\*\//g,"");return[...new Set([...d.matchAll(/#[0-9A-Fa-f]{6}\b/g)].map(m=>m[0]))].forEach(m=>l.push({type:"color",msg:`raw color ${m} — use --en-* var`})),{ok:l.length===0,issues:l}}function H8(s){const l=s.match(/```(?:jsx?|tsx?|javascript|typescript)?\n([\s\S]*?)```/);return l?l[1].trim():null}function Z8({prd:s,messages:l,setMessages:i,onCodeGenerated:r,onSwitchToPrd:u,onIterationComplete:d,initTrigger:f}){const[m,g]=h.useState(""),[v,x]=h.useState(!1),[S,T]=h.useState(Lp),A=h.useRef(null),O=h.useRef(null);h.useEffect(()=>{var B;(B=A.current)==null||B.scrollIntoView({behavior:"smooth"})},[l]),h.useEffect(()=>{f>0&&s&&!v&&l.length===0&&D("Build a complete UI from this PRD.")},[f]);async function D(B){const Z=(B??m).trim();if(!Z||v)return;const Q={role:"user",content:Z},X=s?`

---
PRD: ${s.name}

${s.content}
---
`:"",I=l.map(({role:q,content:P})=>({role:q,content:P})),F=[...s&&l.length===0?[{role:"user",content:`${X}
${Z}`}]:[...I,Q]];i(q=>[...q,Q]),B||g(""),x(!0),i(q=>[...q,{role:"assistant",content:""}]);try{let q="",P=null;await D8({messages:F,onText:de=>{q+=de,i(ue=>{const ye=[...ue];return ye[ye.length-1]={role:"assistant",content:q},ye})},onDone:de=>{P=de}});const oe=H8(q);if(oe){const de=q.replace(/```[\s\S]*?```/g,"").trim();r(oe,de);const ue=U8(oe);i(ye=>{const Te=[...ye];return Te[Te.length-1]={...Te[Te.length-1],validation:ue},Te})}if(d){const de=P||{};d({inputTokens:de.inputTokens||0,outputTokens:de.outputTokens||0,cacheReadTokens:de.cacheReadTokens||0,componentsUsed:j8(oe)})}}catch(q){i(P=>{const oe=[...P];return oe[oe.length-1]={role:"assistant",content:`Error: ${q.message}`},oe})}finally{x(!1)}}function Y(B){B.key==="Enter"&&!B.shiftKey&&(B.preventDefault(),D())}return b.jsxs("div",{className:"chat-panel",children:[b.jsxs("div",{className:"chat-messages",children:[l.length===0&&b.jsx("div",{className:"chat-empty",children:s?b.jsx(b.Fragment,{children:"PRD loaded. Describe the UI you want to build."}):b.jsx(b.Fragment,{children:"Load a PRD first, then describe what to build."})}),l.map((B,Z)=>{const Q=v&&B.role==="assistant"&&Z===l.length-1;return b.jsx("div",{className:`chat-msg chat-msg--${B.role}`,children:B.role==="assistant"?Q?b.jsx(B8,{}):b.jsx(q8,{content:B.content,validation:B.validation}):b.jsx("span",{children:B.content})},Z)}),b.jsx("div",{ref:A})]}),b.jsxs("div",{className:"chat-input-area",children:[b.jsx("div",{className:"chat-model-row",children:y8.map(B=>b.jsx("button",{className:`chat-model-btn ${S===B.id?"chat-model-btn--active":""}`,onClick:()=>{T(B.id),S8(B.id)},title:B.note,children:B.label},B.id))}),b.jsxs("div",{className:"chat-input-row",children:[b.jsx("textarea",{ref:O,className:"chat-input",placeholder:s?`Build from ${s.name}…`:"Load a PRD first…",value:m,onChange:B=>g(B.target.value),onKeyDown:Y,disabled:!s||v,rows:3}),b.jsx("button",{className:"chat-send-btn",onClick:D,disabled:!s||!m.trim()||v,children:v?b.jsx("span",{className:"chat-spinner"}):"↑"})]})]})]})}const Gf=[{icon:"✦",verb:"Reading PRD"},{icon:"◎",verb:"Mapping structure"},{icon:"⚡",verb:"Designing layout"},{icon:"⬡",verb:"Building components"},{icon:"↑",verb:"Writing code"},{icon:"✦",verb:"Polishing output"}];function B8(){const[s,l]=h.useState(0);h.useEffect(()=>{const u=setInterval(()=>l(d=>(d+1)%Gf.length),2e3);return()=>clearInterval(u)},[]);const{icon:i,verb:r}=Gf[s];return b.jsxs("div",{className:"thinking-bubble",children:[b.jsx("span",{className:"thinking-icon",children:i},s),b.jsx("span",{className:"thinking-verb",children:r},r),b.jsxs("span",{className:"thinking-dots",children:[b.jsx("span",{}),b.jsx("span",{}),b.jsx("span",{})]})]})}function q8({content:s,validation:l}){if(/```/.test(s)){const r=s.replace(/```[\s\S]*?```/g,"").trim();return b.jsxs("div",{className:"chat-done-card",children:[b.jsx("span",{className:"chat-done-icon",children:"✓"}),b.jsxs("div",{children:[b.jsx("div",{className:"chat-done-title",children:"Design ready"}),r&&b.jsx("div",{className:"chat-done-sub",children:r}),l&&b.jsxs("div",{className:`chat-done-validation ${l.ok?"chat-done-validation--ok":"chat-done-validation--warn"}`,children:[l.ok?"✓ tokens clean":l.issues.slice(0,4).map((u,d)=>b.jsxs("div",{children:["⚠ ",u.msg]},d)),l&&!l.ok&&l.issues.length>4&&b.jsxs("div",{children:["+",l.issues.length-4," more"]})]})]})]})}return b.jsx("div",{className:"chat-msg-content",children:s})}function V8({value:s,onChange:l}){const[i,r]=h.useState(null);return b.jsx("div",{className:"stars",children:[1,2,3,4,5].map(u=>b.jsx("button",{className:`star-btn ${u<=(i??s??0)?"star-btn--on":""}`,onMouseEnter:()=>r(u),onMouseLeave:()=>r(null),onClick:()=>l(u),"aria-label":`Rate ${u} star${u>1?"s":""}`,children:"★"},u))})}function Xf(s){return s>=1e3?`${(s/1e3).toFixed(1)}k`:String(s)}function Qf(s){return s<.01?"<$0.01":`$${s.toFixed(2)}`}function Y8(s){const l=new Date(s),i=new Date;if(l.toDateString()===i.toDateString())return"today";const r=Math.floor((i-l)/864e5);return r===1?"yesterday":r<7?`${r}d ago`:l.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function I8({session:s,prd:l,onSessionUpdate:i}){const[r,u]=h.useState([]);if(h.useEffect(()=>{l&&u(Fc(l.name))},[l,s]),!l)return b.jsx("div",{className:"report-empty",children:"Load a PRD to see reports."});const d=O8(r),f=r.length;r.some(x=>x.id===(s==null?void 0:s.id));function m(x){const S={...s,rating:x};i(S),iu(S),u(Fc(l.name))}function g(){const x={...s,accepted:!0};i(x),iu(x),u(Fc(l.name))}const v=r.filter(x=>x.id!==(s==null?void 0:s.id));return b.jsxs("div",{className:"report-tab",children:[s&&b.jsxs("section",{className:"report-section",children:[b.jsxs("div",{className:"report-section-label",children:["Current session",s.accepted&&b.jsx("span",{className:"report-badge report-badge--green",children:"Accepted"})]}),b.jsxs("div",{className:"report-metrics",children:[b.jsxs("div",{className:"report-metric",children:[b.jsx("span",{className:"report-metric-value",children:s.iterations}),b.jsx("span",{className:"report-metric-label",children:"iterations"}),s.iterations<=2&&s.iterations>0&&b.jsx("span",{className:"report-badge report-badge--green",children:"≤2 ✓"})]}),b.jsxs("div",{className:"report-metric",children:[b.jsx("span",{className:"report-metric-value",children:Xf(s.inputTokens+s.outputTokens)}),b.jsx("span",{className:"report-metric-label",children:"tokens"})]}),b.jsxs("div",{className:"report-metric",children:[b.jsx("span",{className:"report-metric-value",children:Qf(s.cost)}),b.jsx("span",{className:"report-metric-label",children:"cost"})]})]}),s.cacheReadTokens>0&&b.jsxs("div",{className:"report-cache-note",children:[Xf(s.cacheReadTokens)," tokens from cache"]}),s.componentsUsed.length>0&&b.jsxs("div",{className:"report-components",children:[b.jsx("span",{className:"report-components-label",children:"Components used"}),b.jsx("div",{className:"report-chips",children:s.componentsUsed.map(x=>b.jsx("span",{className:"report-chip",children:x},x))})]}),b.jsxs("div",{className:"report-rating-row",children:[b.jsx("span",{className:"report-rating-label",children:"Rate this design"}),b.jsx(V8,{value:s.rating,onChange:m})]}),!s.accepted&&b.jsx("button",{className:"report-accept-btn",onClick:g,disabled:s.iterations===0,children:"✓ Accept design"})]}),f>0&&b.jsxs("section",{className:"report-section",children:[b.jsxs("div",{className:"report-section-label",children:["This PRD · ",f," session",f>1?"s":""]}),b.jsx("div",{className:"report-summary",children:d!==null&&b.jsxs("div",{className:"report-metric",children:[b.jsxs("span",{className:"report-metric-value report-metric-value--lg",children:[d,"%"]}),b.jsx("span",{className:"report-metric-label",children:"accepted in ≤2 iterations"})]})})]}),v.length>0&&b.jsxs("section",{className:"report-section",children:[b.jsx("div",{className:"report-section-label",children:"History"}),b.jsx("div",{className:"report-history",children:v.map(x=>b.jsxs("div",{className:"report-history-row",children:[b.jsxs("div",{className:"report-history-left",children:[b.jsx("span",{className:"report-history-date",children:Y8(x.startedAt)}),b.jsxs("span",{className:"report-history-iter",children:[x.iterations," iter",x.iterations!==1?"s":""]}),x.accepted&&b.jsx("span",{className:"report-badge report-badge--green",children:"✓"}),x.iterations<=2&&x.accepted&&b.jsx("span",{className:"report-badge report-badge--blue",children:"≤2"})]}),b.jsxs("div",{className:"report-history-right",children:[x.rating&&b.jsxs("span",{className:"report-history-stars",children:["★".repeat(x.rating),"☆".repeat(5-x.rating)]}),b.jsx("span",{className:"report-history-cost",children:Qf(x.cost)})]})]},x.id))})]}),!s&&f===0&&b.jsx("div",{className:"report-empty",children:"Start a chat to begin tracking."})]})}function G8({prd:s,messages:l,setMessages:i,onCodeGenerated:r,onIterationComplete:u,session:d,onSessionUpdate:f,initTrigger:m}){const[g,v]=h.useState("chat");return b.jsxs("div",{className:"right-panel",children:[b.jsxs("div",{className:"right-tabs",children:[b.jsx("button",{className:`right-tab ${g==="chat"?"right-tab--active":""}`,onClick:()=>v("chat"),children:"Chat"}),b.jsxs("button",{className:`right-tab ${g==="report"?"right-tab--active":""}`,onClick:()=>v("report"),children:["Report",(d==null?void 0:d.accepted)&&b.jsx("span",{className:"right-tab-dot right-tab-dot--green"}),d&&!d.accepted&&d.iterations>0&&b.jsx("span",{className:"right-tab-dot"})]})]}),b.jsxs("div",{className:"right-content",children:[b.jsx("div",{className:g!=="chat"?"right-panel-hidden":"",children:b.jsx(Z8,{prd:s,messages:l,setMessages:i,onCodeGenerated:r,onIterationComplete:u,onSwitchToPrd:()=>v("prd"),initTrigger:m})}),g==="report"&&b.jsx(I8,{session:d,prd:s,onSessionUpdate:f})]})]})}function X8({onDone:s}){const[l,i]=h.useState(""),[r,u]=h.useState(null);function d(){const f=l.trim();if(!f.startsWith("sk-ant-")&&!f.startsWith("sk-")){u("Paste your Anthropic API key — it starts with sk-ant-");return}h8(f),s()}return b.jsx("div",{className:"setup-overlay",children:b.jsxs("div",{className:"setup-card",children:[b.jsxs("div",{className:"setup-logo",children:[b.jsx("span",{className:"setup-logo-name",children:"ennabl"}),b.jsx("span",{className:"setup-logo-suffix",children:"builder"})]}),b.jsxs("p",{className:"setup-desc",children:["Paste your Anthropic API key to get started.",b.jsx("br",{}),"It's stored only in your browser's local storage."]}),b.jsx("label",{className:"setup-label",children:"Anthropic API Key"}),b.jsx("input",{className:"setup-input",type:"password",value:l,onChange:f=>{i(f.target.value),u(null)},onKeyDown:f=>f.key==="Enter"&&d(),placeholder:"sk-ant-...",spellCheck:!1,autoFocus:!0}),r&&b.jsx("p",{className:"setup-error",children:r}),b.jsx("button",{className:"setup-btn",onClick:d,disabled:!l.trim(),children:"Save & continue"})]})})}class vt extends Error{constructor(l){var i,r,u,d;super("ClientResponseError"),this.url="",this.status=0,this.response={},this.isAbort=!1,this.originalError=null,Object.setPrototypeOf(this,vt.prototype),l!==null&&typeof l=="object"&&(this.originalError=l.originalError,this.url=typeof l.url=="string"?l.url:"",this.status=typeof l.status=="number"?l.status:0,this.isAbort=!!l.isAbort||l.name==="AbortError"||l.message==="Aborted",l.response!==null&&typeof l.response=="object"?this.response=l.response:l.data!==null&&typeof l.data=="object"?this.response=l.data:this.response={}),this.originalError||l instanceof vt||(this.originalError=l),this.name="ClientResponseError "+this.status,this.message=(i=this.response)==null?void 0:i.message,this.message||(this.isAbort?this.message="The request was aborted (most likely autocancelled; you can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation).":(d=(u=(r=this.originalError)==null?void 0:r.cause)==null?void 0:u.message)!=null&&d.includes("ECONNREFUSED ::1")?this.message="Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).":this.message="Something went wrong."),this.cause=this.originalError}get data(){return this.response}toJSON(){return{...this}}}const cr=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function Q8(s,l){const i={};if(typeof s!="string")return i;const r=Object.assign({},{}).decode||K8;let u=0;for(;u<s.length;){const d=s.indexOf("=",u);if(d===-1)break;let f=s.indexOf(";",u);if(f===-1)f=s.length;else if(f<d){u=s.lastIndexOf(";",d-1)+1;continue}const m=s.slice(u,d).trim();if(i[m]===void 0){let g=s.slice(d+1,f).trim();g.charCodeAt(0)===34&&(g=g.slice(1,-1));try{i[m]=r(g)}catch{i[m]=g}}u=f+1}return i}function Kf(s,l,i){const r=Object.assign({},i||{}),u=r.encode||$8;if(!cr.test(s))throw new TypeError("argument name is invalid");const d=u(l);if(d&&!cr.test(d))throw new TypeError("argument val is invalid");let f=s+"="+d;if(r.maxAge!=null){const m=r.maxAge-0;if(isNaN(m)||!isFinite(m))throw new TypeError("option maxAge is invalid");f+="; Max-Age="+Math.floor(m)}if(r.domain){if(!cr.test(r.domain))throw new TypeError("option domain is invalid");f+="; Domain="+r.domain}if(r.path){if(!cr.test(r.path))throw new TypeError("option path is invalid");f+="; Path="+r.path}if(r.expires){if(!(function(g){return Object.prototype.toString.call(g)==="[object Date]"||g instanceof Date})(r.expires)||isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");f+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(f+="; HttpOnly"),r.secure&&(f+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":f+="; Priority=Low";break;case"medium":f+="; Priority=Medium";break;case"high":f+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:f+="; SameSite=Strict";break;case"lax":f+="; SameSite=Lax";break;case"strict":f+="; SameSite=Strict";break;case"none":f+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return f}function K8(s){return s.indexOf("%")!==-1?decodeURIComponent(s):s}function $8(s){return encodeURIComponent(s)}const F8=typeof navigator<"u"&&navigator.product==="ReactNative"||typeof global<"u"&&global.HermesInternal;let Zp;function kl(s){if(s)try{const l=decodeURIComponent(Zp(s.split(".")[1]).split("").map((function(i){return"%"+("00"+i.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(l)||{}}catch{}return{}}function Bp(s,l=0){let i=kl(s);return!(Object.keys(i).length>0&&(!i.exp||i.exp-l>Date.now()/1e3))}Zp=typeof atob!="function"||F8?s=>{let l=String(s).replace(/=+$/,"");if(l.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var i,r,u=0,d=0,f="";r=l.charAt(d++);~r&&(i=u%4?64*i+r:r,u++%4)?f+=String.fromCharCode(255&i>>(-2*u&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return f}:atob;const $f="pb_auth";class wu{constructor(){this.baseToken="",this.baseModel=null,this._onChangeCallbacks=[]}get token(){return this.baseToken}get record(){return this.baseModel}get model(){return this.baseModel}get isValid(){return!Bp(this.token)}get isSuperuser(){var i,r;let l=kl(this.token);return l.type=="auth"&&(((i=this.record)==null?void 0:i.collectionName)=="_superusers"||!((r=this.record)!=null&&r.collectionName)&&l.collectionId=="pbc_3142635823")}get isAdmin(){return console.warn("Please replace pb.authStore.isAdmin with pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"),this.isSuperuser}get isAuthRecord(){return console.warn("Please replace pb.authStore.isAuthRecord with !pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"),kl(this.token).type=="auth"&&!this.isSuperuser}save(l,i){this.baseToken=l||"",this.baseModel=i||null,this.triggerChange()}clear(){this.baseToken="",this.baseModel=null,this.triggerChange()}loadFromCookie(l,i=$f){const r=Q8(l||"")[i]||"";let u={};try{u=JSON.parse(r),(typeof u===null||typeof u!="object"||Array.isArray(u))&&(u={})}catch{}this.save(u.token||"",u.record||u.model||null)}exportToCookie(l,i=$f){var g,v;const r={secure:!0,sameSite:!0,httpOnly:!0,path:"/"},u=kl(this.token);r.expires=u!=null&&u.exp?new Date(1e3*u.exp):new Date("1970-01-01"),l=Object.assign({},r,l);const d={token:this.token,record:this.record?JSON.parse(JSON.stringify(this.record)):null};let f=Kf(i,JSON.stringify(d),l);const m=typeof Blob<"u"?new Blob([f]).size:f.length;if(d.record&&m>4096){d.record={id:(g=d.record)==null?void 0:g.id,email:(v=d.record)==null?void 0:v.email};const x=["collectionId","collectionName","verified"];for(const S in this.record)x.includes(S)&&(d.record[S]=this.record[S]);f=Kf(i,JSON.stringify(d),l)}return f}onChange(l,i=!1){return this._onChangeCallbacks.push(l),i&&l(this.token,this.record),()=>{for(let r=this._onChangeCallbacks.length-1;r>=0;r--)if(this._onChangeCallbacks[r]==l)return delete this._onChangeCallbacks[r],void this._onChangeCallbacks.splice(r,1)}}triggerChange(){for(const l of this._onChangeCallbacks)l&&l(this.token,this.record)}}class J8 extends wu{constructor(l="pocketbase_auth"){super(),this.storageFallback={},this.storageKey=l,this._bindStorageEvent()}get token(){return(this._storageGet(this.storageKey)||{}).token||""}get record(){const l=this._storageGet(this.storageKey)||{};return l.record||l.model||null}get model(){return this.record}save(l,i){this._storageSet(this.storageKey,{token:l,record:i}),super.save(l,i)}clear(){this._storageRemove(this.storageKey),super.clear()}_storageGet(l){if(typeof window<"u"&&(window!=null&&window.localStorage)){const i=window.localStorage.getItem(l)||"";try{return JSON.parse(i)}catch{return i}}return this.storageFallback[l]}_storageSet(l,i){if(typeof window<"u"&&(window!=null&&window.localStorage)){let r=i;typeof i!="string"&&(r=JSON.stringify(i)),window.localStorage.setItem(l,r)}else this.storageFallback[l]=i}_storageRemove(l){var i;typeof window<"u"&&(window!=null&&window.localStorage)&&((i=window.localStorage)==null||i.removeItem(l)),delete this.storageFallback[l]}_bindStorageEvent(){typeof window<"u"&&(window!=null&&window.localStorage)&&window.addEventListener&&window.addEventListener("storage",(l=>{if(l.key!=this.storageKey)return;const i=this._storageGet(this.storageKey)||{};super.save(i.token||"",i.record||i.model||null)}))}}class In{constructor(l){this.client=l}}class P8 extends In{async getAll(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/settings",l)}async update(l,i){return i=Object.assign({method:"PATCH",body:l},i),this.client.send("/api/settings",i)}async testS3(l="storage",i){return i=Object.assign({method:"POST",body:{filesystem:l}},i),this.client.send("/api/settings/test/s3",i).then((()=>!0))}async testEmail(l,i,r,u){return u=Object.assign({method:"POST",body:{email:i,template:r,collection:l}},u),this.client.send("/api/settings/test/email",u).then((()=>!0))}async generateAppleClientSecret(l,i,r,u,d,f){return f=Object.assign({method:"POST",body:{clientId:l,teamId:i,keyId:r,privateKey:u,duration:d}},f),this.client.send("/api/settings/apple/generate-client-secret",f)}}const W8=["requestKey","$cancelKey","$autoCancel","fetch","headers","body","query","params","cache","credentials","headers","integrity","keepalive","method","mode","redirect","referrer","referrerPolicy","signal","window"];function Cu(s){if(s){s.query=s.query||{};for(let l in s)W8.includes(l)||(s.query[l]=s[l],delete s[l])}}function Eu(s){const l=[];for(const i in s){const r=encodeURIComponent(i),u=Array.isArray(s[i])?s[i]:[s[i]];for(let d of u)d=e6(d),d!==null&&l.push(r+"="+d)}return l.join("&")}function e6(s){return s==null?null:s instanceof Date?encodeURIComponent(s.toISOString().replace("T"," ")):encodeURIComponent(typeof s=="object"?JSON.stringify(s):s)}class qp extends In{constructor(){super(...arguments),this.clientId="",this.eventSource=null,this.subscriptions={},this.lastSentSubscriptions=[],this.maxConnectTimeout=15e3,this.reconnectAttempts=0,this.maxReconnectAttempts=1/0,this.predefinedReconnectIntervals=[200,300,500,1e3,1200,1500,2e3],this.pendingConnects=[],this.pendingSubmits=[],this.isProcessingPendingSubmits=!1}get isConnected(){return!!this.eventSource&&!!this.clientId&&!this.pendingConnects.length}async subscribe(l,i,r){var f;if(!l)throw new Error("topic must be set.");let u=l;if(r){Cu(r=Object.assign({},r));const m="options="+encodeURIComponent(JSON.stringify({query:r.query,headers:r.headers}));u+=(u.includes("?")?"&":"?")+m}const d=function(m){const g=m;let v;try{v=JSON.parse(g==null?void 0:g.data)}catch{}i(v||{})};return this.subscriptions[u]||(this.subscriptions[u]=[]),this.subscriptions[u].push(d),this.isConnected?this.subscriptions[u].length===1?await this.submitSubscriptions():(f=this.eventSource)==null||f.addEventListener(u,d):await this.connect(),async()=>this.unsubscribeByTopicAndListener(l,d)}async unsubscribe(l){var i;if(l){const r=this.getSubscriptionsByTopic(l);for(let u in r)if(this.hasSubscriptionListeners(u)){for(let d of this.subscriptions[u])(i=this.eventSource)==null||i.removeEventListener(u,d);delete this.subscriptions[u]}}else this.subscriptions={};await this.submitSubscriptions()}async unsubscribeByPrefix(l){var r;let i=!1;for(let u in this.subscriptions)if((u+"?").startsWith(l)){i=!0;for(let d of this.subscriptions[u])(r=this.eventSource)==null||r.removeEventListener(u,d);delete this.subscriptions[u]}i&&await this.submitSubscriptions()}async unsubscribeByTopicAndListener(l,i){var u;const r=this.getSubscriptionsByTopic(l);for(let d in r){if(!Array.isArray(this.subscriptions[d])||!this.subscriptions[d].length)continue;let f=!1;for(let m=this.subscriptions[d].length-1;m>=0;m--)this.subscriptions[d][m]===i&&(f=!0,delete this.subscriptions[d][m],this.subscriptions[d].splice(m,1),(u=this.eventSource)==null||u.removeEventListener(d,i));f&&(this.subscriptions[d].length||delete this.subscriptions[d])}await this.submitSubscriptions()}hasSubscriptionListeners(l){var i,r;if(this.subscriptions=this.subscriptions||{},l)return!!((i=this.subscriptions[l])!=null&&i.length);for(let u in this.subscriptions)if((r=this.subscriptions[u])!=null&&r.length)return!0;return!1}async submitSubscriptions(){return new Promise(((l,i)=>{this.pendingSubmits.push({resolve:l,reject:i}),this.pendingSubmits.length==1&&queueMicrotask((()=>this.finalizePendingSubscriptions()))}))}async finalizePendingSubscriptions(){if(this.isProcessingPendingSubmits||!this.pendingSubmits.length)return;const l=this.pendingSubmits.slice();this.pendingSubmits=[],this.isProcessingPendingSubmits=!0;try{await this.sendSubscriptions();for(let i of l)i.resolve()}catch(i){for(let r of l)i?r.reject(i):r.resolve()}finally{this.isProcessingPendingSubmits=!1,this.pendingSubmits.length>0&&await this.finalizePendingSubscriptions()}}getSubscriptionsCancelKey(){return"realtime_"+this.clientId}getSubscriptionsByTopic(l){const i={};l=l.includes("?")?l:l+"?";for(let r in this.subscriptions)(r+"?").startsWith(l)&&(i[r]=this.subscriptions[r]);return i}getNonEmptySubscriptionKeys(){const l=[];for(let i in this.subscriptions)this.subscriptions[i].length&&l.push(i);return l}hasUnsentSubscriptions(){const l=this.getNonEmptySubscriptionKeys();if(l.length!=this.lastSentSubscriptions.length)return!0;for(const i of l)if(!this.lastSentSubscriptions.includes(i))return!0;return!1}async sendSubscriptions(){if(this.clientId){if(!this.hasSubscriptionListeners())return this.disconnect();if(this.hasUnsentSubscriptions())return this.addAllSubscriptionListeners(),this.lastSentSubscriptions=this.getNonEmptySubscriptionKeys(),this.client.send("/api/realtime",{method:"POST",body:{clientId:this.clientId,subscriptions:this.lastSentSubscriptions},requestKey:this.getSubscriptionsCancelKey()}).catch((l=>{if(!(l!=null&&l.isAbort))throw l}))}}addAllSubscriptionListeners(){if(this.eventSource){this.removeAllSubscriptionListeners();for(let l in this.subscriptions)for(let i of this.subscriptions[l])this.eventSource.addEventListener(l,i)}}removeAllSubscriptionListeners(){if(this.eventSource)for(let l in this.subscriptions)for(let i of this.subscriptions[l])this.eventSource.removeEventListener(l,i)}async connect(){if(!(this.reconnectAttempts>0))return new Promise(((l,i)=>{this.pendingConnects.push({resolve:l,reject:i}),this.pendingConnects.length==1&&queueMicrotask((()=>this.initConnect()))}))}initConnect(){this.disconnect(!0),clearTimeout(this.connectTimeoutId),this.connectTimeoutId=setTimeout((()=>{this.connectErrorHandler(new Error("EventSource connect took too long."))}),this.maxConnectTimeout),this.eventSource=new EventSource(this.client.buildURL("/api/realtime")),this.eventSource.onerror=l=>{this.connectErrorHandler(new Error("Failed to establish realtime connection."))},this.eventSource.addEventListener("PB_CONNECT",(l=>{const i=l;this.clientId=i==null?void 0:i.lastEventId,this.lastSentSubscriptions=[],this.submitSubscriptions().then((()=>{for(let u of this.pendingConnects)u.resolve();this.pendingConnects=[],this.reconnectAttempts=0,clearTimeout(this.reconnectTimeoutId),clearTimeout(this.connectTimeoutId);const r=this.getSubscriptionsByTopic("PB_CONNECT");for(let u in r)for(let d of r[u])d(l)})).catch((r=>{this.clientId="",this.lastSentSubscriptions=[],this.connectErrorHandler(r)}))}))}connectErrorHandler(l){if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),!this.clientId&&!this.reconnectAttempts||this.reconnectAttempts>this.maxReconnectAttempts){for(let r of this.pendingConnects)r.reject(new vt(l));return this.pendingConnects=[],void this.disconnect()}this.disconnect(!0);const i=this.predefinedReconnectIntervals[this.reconnectAttempts]||this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length-1];this.reconnectAttempts++,this.reconnectTimeoutId=setTimeout((()=>{this.initConnect()}),i)}disconnect(l=!1){var i;if(this.clientId&&this.onDisconnect&&this.onDisconnect(Object.keys(this.subscriptions)),clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),this.removeAllSubscriptionListeners(),this.client.cancelRequest(this.getSubscriptionsCancelKey()),(i=this.eventSource)==null||i.close(),this.eventSource=null,this.clientId="",this.lastSentSubscriptions=[],!l){this.reconnectAttempts=0;for(let r of this.pendingConnects)r.resolve();this.pendingConnects=[]}}}class Vp extends In{decode(l){return l}async getFullList(l,i){if(typeof l=="number")return this._getFullList(l,i);let r=1e3;return(i=Object.assign({},l,i)).batch&&(r=i.batch,delete i.batch),this._getFullList(r,i)}async getList(l=1,i=30,r){return(r=Object.assign({method:"GET"},r)).query=Object.assign({page:l,perPage:i},r.query),this.client.send(this.baseCrudPath,r).then((u=>{var d;return u.items=((d=u.items)==null?void 0:d.map((f=>this.decode(f))))||[],u}))}async getFirstListItem(l,i){return(i=Object.assign({requestKey:"one_by_filter_"+this.baseCrudPath+"_"+l},i)).query=Object.assign({filter:l,skipTotal:1},i.query),this.getList(1,1,i).then((r=>{var u;if(!((u=r==null?void 0:r.items)!=null&&u.length))throw new vt({status:404,response:{code:404,message:"The requested resource wasn't found.",data:{}}});return r.items[0]}))}async getOne(l,i){if(!l)throw new vt({url:this.client.buildURL(this.baseCrudPath+"/"),status:404,response:{code:404,message:"Missing required record id.",data:{}}});return i=Object.assign({method:"GET"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l),i).then((r=>this.decode(r)))}async create(l,i){return i=Object.assign({method:"POST",body:l},i),this.client.send(this.baseCrudPath,i).then((r=>this.decode(r)))}async update(l,i,r){return r=Object.assign({method:"PATCH",body:i},r),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l),r).then((u=>this.decode(u)))}async delete(l,i){return i=Object.assign({method:"DELETE"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l),i).then((()=>!0))}_getFullList(l=1e3,i){(i=i||{}).query=Object.assign({skipTotal:1},i.query);let r=[],u=async d=>this.getList(d,l||1e3,i).then((f=>{const m=f.items;return r=r.concat(m),m.length==f.perPage?u(d+1):r}));return u(1)}}function ga(s,l,i,r){const u=r!==void 0;return u||i!==void 0?u?(console.warn(s),l.body=Object.assign({},l.body,i),l.query=Object.assign({},l.query,r),l):Object.assign(l,i):l}function Jc(s){var l;(l=s._resetAutoRefresh)==null||l.call(s)}class t6 extends Vp{constructor(l,i){super(l),this.collectionIdOrName=i}get baseCrudPath(){return this.baseCollectionPath+"/records"}get baseCollectionPath(){return"/api/collections/"+encodeURIComponent(this.collectionIdOrName)}get isSuperusers(){return this.collectionIdOrName=="_superusers"||this.collectionIdOrName=="_pbc_2773867675"}async subscribe(l,i,r){if(!l)throw new Error("Missing topic.");if(!i)throw new Error("Missing subscription callback.");return this.client.realtime.subscribe(this.collectionIdOrName+"/"+l,i,r)}async unsubscribe(l){return l?this.client.realtime.unsubscribe(this.collectionIdOrName+"/"+l):this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)}async getFullList(l,i){if(typeof l=="number")return super.getFullList(l,i);const r=Object.assign({},l,i);return super.getFullList(r)}async getList(l=1,i=30,r){return super.getList(l,i,r)}async getFirstListItem(l,i){return super.getFirstListItem(l,i)}async getOne(l,i){return super.getOne(l,i)}async create(l,i){return super.create(l,i)}async update(l,i,r){return super.update(l,i,r).then((u=>{var d,f,m;if(((d=this.client.authStore.record)==null?void 0:d.id)===(u==null?void 0:u.id)&&(((f=this.client.authStore.record)==null?void 0:f.collectionId)===this.collectionIdOrName||((m=this.client.authStore.record)==null?void 0:m.collectionName)===this.collectionIdOrName)){let g=Object.assign({},this.client.authStore.record.expand),v=Object.assign({},this.client.authStore.record,u);g&&(v.expand=Object.assign(g,u.expand)),this.client.authStore.save(this.client.authStore.token,v)}return u}))}async delete(l,i){return super.delete(l,i).then((r=>{var u,d,f;return!r||((u=this.client.authStore.record)==null?void 0:u.id)!==l||((d=this.client.authStore.record)==null?void 0:d.collectionId)!==this.collectionIdOrName&&((f=this.client.authStore.record)==null?void 0:f.collectionName)!==this.collectionIdOrName||this.client.authStore.clear(),r}))}authResponse(l){const i=this.decode((l==null?void 0:l.record)||{});return this.client.authStore.save(l==null?void 0:l.token,i),Object.assign({},l,{token:(l==null?void 0:l.token)||"",record:i})}async listAuthMethods(l){return l=Object.assign({method:"GET",fields:"mfa,otp,password,oauth2"},l),this.client.send(this.baseCollectionPath+"/auth-methods",l)}async authWithPassword(l,i,r){let u;r=Object.assign({method:"POST",body:{identity:l,password:i}},r),this.isSuperusers&&(u=r.autoRefreshThreshold,delete r.autoRefreshThreshold,r.autoRefresh||Jc(this.client));let d=await this.client.send(this.baseCollectionPath+"/auth-with-password",r);return d=this.authResponse(d),u&&this.isSuperusers&&(function(m,g,v,x){Jc(m);const S=m.beforeSend,T=m.authStore.record,A=m.authStore.onChange(((O,D)=>{(!O||(D==null?void 0:D.id)!=(T==null?void 0:T.id)||(D!=null&&D.collectionId||T!=null&&T.collectionId)&&(D==null?void 0:D.collectionId)!=(T==null?void 0:T.collectionId))&&Jc(m)}));m._resetAutoRefresh=function(){A(),m.beforeSend=S,delete m._resetAutoRefresh},m.beforeSend=async(O,D)=>{var Q;const Y=m.authStore.token;if((Q=D.query)!=null&&Q.autoRefresh)return S?S(O,D):{url:O,sendOptions:D};let B=m.authStore.isValid;if(B&&Bp(m.authStore.token,g))try{await v()}catch{B=!1}B||await x();const Z=D.headers||{};for(let X in Z)if(X.toLowerCase()=="authorization"&&Y==Z[X]&&m.authStore.token){Z[X]=m.authStore.token;break}return D.headers=Z,S?S(O,D):{url:O,sendOptions:D}}})(this.client,u,(()=>this.authRefresh({autoRefresh:!0})),(()=>this.authWithPassword(l,i,Object.assign({autoRefresh:!0},r)))),d}async authWithOAuth2Code(l,i,r,u,d,f,m){let g={method:"POST",body:{provider:l,code:i,codeVerifier:r,redirectURL:u,createData:d}};return g=ga("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, options?).",g,f,m),this.client.send(this.baseCollectionPath+"/auth-with-oauth2",g).then((v=>this.authResponse(v)))}authWithOAuth2(...l){if(l.length>1||typeof(l==null?void 0:l[0])=="string")return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."),this.authWithOAuth2Code((l==null?void 0:l[0])||"",(l==null?void 0:l[1])||"",(l==null?void 0:l[2])||"",(l==null?void 0:l[3])||"",(l==null?void 0:l[4])||{},(l==null?void 0:l[5])||{},(l==null?void 0:l[6])||{});const i=(l==null?void 0:l[0])||{};let r=null;i.urlCallback||(r=Ff(void 0));const u=new qp(this.client);function d(){r==null||r.close(),u.unsubscribe()}const f={},m=i.requestKey;return m&&(f.requestKey=m),this.listAuthMethods(f).then((g=>{const v=g.oauth2.providers.find((S=>S.name===i.provider));if(!v)throw new vt(new Error(`Missing or invalid provider "${i.provider}".`));const x=this.client.buildURL("/api/oauth2-redirect");return new Promise((async(S,T)=>{var O,D,Y;const A=m?(O=this.client.cancelControllers)==null?void 0:O[m]:void 0;A&&(A.signal.onabort=()=>{d(),T(new vt({isAbort:!0,message:"manually cancelled"}))}),u.onDisconnect=B=>{B.length&&T&&(d(),T(new vt(new Error("realtime connection interrupted"))))};try{await u.subscribe("@oauth2",(async X=>{var F;const I=u.clientId;try{if(!X.state||I!==X.state)throw new Error("State parameters don't match.");if(X.error||!X.code)throw new Error("OAuth2 redirect error or missing code: "+X.error);const q=Object.assign({},i);delete q.provider,delete q.scopes,delete q.createData,delete q.urlCallback,(F=A==null?void 0:A.signal)!=null&&F.onabort&&(A.signal.onabort=null);const P=await this.authWithOAuth2Code(v.name,X.code,v.codeVerifier,x,i.createData,q);S(P)}catch(q){T(new vt(q))}d()}));const B={state:u.clientId};(D=i.scopes)!=null&&D.length&&(B.scope=i.scopes.join(" "));const Z=this._replaceQueryParams(v.authURL+x,B);await(i.urlCallback||function(X){r?r.location.href=X:r=Ff(X)})(Z)}catch(B){(Y=A==null?void 0:A.signal)!=null&&Y.onabort&&(A.signal.onabort=null),d(),T(new vt(B))}}))})).catch((g=>{throw d(),g}))}async authRefresh(l,i){let r={method:"POST"};return r=ga("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).",r,l,i),this.client.send(this.baseCollectionPath+"/auth-refresh",r).then((u=>this.authResponse(u)))}async requestPasswordReset(l,i,r){let u={method:"POST",body:{email:l}};return u=ga("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).",u,i,r),this.client.send(this.baseCollectionPath+"/request-password-reset",u).then((()=>!0))}async confirmPasswordReset(l,i,r,u,d){let f={method:"POST",body:{token:l,password:i,passwordConfirm:r}};return f=ga("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).",f,u,d),this.client.send(this.baseCollectionPath+"/confirm-password-reset",f).then((()=>!0))}async requestVerification(l,i,r){let u={method:"POST",body:{email:l}};return u=ga("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).",u,i,r),this.client.send(this.baseCollectionPath+"/request-verification",u).then((()=>!0))}async confirmVerification(l,i,r){let u={method:"POST",body:{token:l}};return u=ga("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).",u,i,r),this.client.send(this.baseCollectionPath+"/confirm-verification",u).then((()=>{const d=kl(l),f=this.client.authStore.record;return f&&!f.verified&&f.id===d.id&&f.collectionId===d.collectionId&&(f.verified=!0,this.client.authStore.save(this.client.authStore.token,f)),!0}))}async requestEmailChange(l,i,r){let u={method:"POST",body:{newEmail:l}};return u=ga("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).",u,i,r),this.client.send(this.baseCollectionPath+"/request-email-change",u).then((()=>!0))}async confirmEmailChange(l,i,r,u){let d={method:"POST",body:{token:l,password:i}};return d=ga("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).",d,r,u),this.client.send(this.baseCollectionPath+"/confirm-email-change",d).then((()=>{const f=kl(l),m=this.client.authStore.record;return m&&m.id===f.id&&m.collectionId===f.collectionId&&this.client.authStore.clear(),!0}))}async listExternalAuths(l,i){return this.client.collection("_externalAuths").getFullList(Object.assign({},i,{filter:this.client.filter("recordRef = {:id}",{id:l})}))}async unlinkExternalAuth(l,i,r){const u=await this.client.collection("_externalAuths").getFirstListItem(this.client.filter("recordRef = {:recordId} && provider = {:provider}",{recordId:l,provider:i}));return this.client.collection("_externalAuths").delete(u.id,r).then((()=>!0))}async requestOTP(l,i){return i=Object.assign({method:"POST",body:{email:l}},i),this.client.send(this.baseCollectionPath+"/request-otp",i)}async authWithOTP(l,i,r){return r=Object.assign({method:"POST",body:{otpId:l,password:i}},r),this.client.send(this.baseCollectionPath+"/auth-with-otp",r).then((u=>this.authResponse(u)))}async impersonate(l,i,r){(r=Object.assign({method:"POST",body:{duration:i}},r)).headers=r.headers||{},r.headers.Authorization||(r.headers.Authorization=this.client.authStore.token);const u=new Au(this.client.baseURL,new wu,this.client.lang),d=await u.send(this.baseCollectionPath+"/impersonate/"+encodeURIComponent(l),r);return u.authStore.save(d==null?void 0:d.token,this.decode((d==null?void 0:d.record)||{})),u}_replaceQueryParams(l,i={}){let r=l,u="";l.indexOf("?")>=0&&(r=l.substring(0,l.indexOf("?")),u=l.substring(l.indexOf("?")+1));const d={},f=u.split("&");for(const m of f){if(m=="")continue;const g=m.split("=");d[decodeURIComponent(g[0].replace(/\+/g," "))]=decodeURIComponent((g[1]||"").replace(/\+/g," "))}for(let m in i)i.hasOwnProperty(m)&&(i[m]==null?delete d[m]:d[m]=i[m]);u="";for(let m in d)d.hasOwnProperty(m)&&(u!=""&&(u+="&"),u+=encodeURIComponent(m.replace(/%20/g,"+"))+"="+encodeURIComponent(d[m].replace(/%20/g,"+")));return u!=""?r+"?"+u:r}}function Ff(s){if(typeof window>"u"||!(window!=null&&window.open))throw new vt(new Error("Not in a browser context - please pass a custom urlCallback function."));let l=1024,i=768,r=window.innerWidth,u=window.innerHeight;l=l>r?r:l,i=i>u?u:i;let d=r/2-l/2,f=u/2-i/2;return window.open(s,"popup_window","width="+l+",height="+i+",top="+f+",left="+d+",resizable,menubar=no")}class n6 extends Vp{get baseCrudPath(){return"/api/collections"}async import(l,i=!1,r){return r=Object.assign({method:"PUT",body:{collections:l,deleteMissing:i}},r),this.client.send(this.baseCrudPath+"/import",r).then((()=>!0))}async getScaffolds(l){return l=Object.assign({method:"GET"},l),this.client.send(this.baseCrudPath+"/meta/scaffolds",l)}async truncate(l,i){return i=Object.assign({method:"DELETE"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(l)+"/truncate",i).then((()=>!0))}}class a6 extends In{async getList(l=1,i=30,r){return(r=Object.assign({method:"GET"},r)).query=Object.assign({page:l,perPage:i},r.query),this.client.send("/api/logs",r)}async getOne(l,i){if(!l)throw new vt({url:this.client.buildURL("/api/logs/"),status:404,response:{code:404,message:"Missing required log id.",data:{}}});return i=Object.assign({method:"GET"},i),this.client.send("/api/logs/"+encodeURIComponent(l),i)}async getStats(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/logs/stats",l)}}class l6 extends In{async check(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/health",l)}}class i6 extends In{getUrl(l,i,r={}){return console.warn("Please replace pb.files.getUrl() with pb.files.getURL()"),this.getURL(l,i,r)}getURL(l,i,r={}){if(!i||!(l!=null&&l.id)||!(l!=null&&l.collectionId)&&!(l!=null&&l.collectionName))return"";const u=[];u.push("api"),u.push("files"),u.push(encodeURIComponent(l.collectionId||l.collectionName)),u.push(encodeURIComponent(l.id)),u.push(encodeURIComponent(i));let d=this.client.buildURL(u.join("/"));r.download===!1&&delete r.download;const f=Eu(r);return f&&(d+=(d.includes("?")?"&":"?")+f),d}async getToken(l){return l=Object.assign({method:"POST"},l),this.client.send("/api/files/token",l).then((i=>(i==null?void 0:i.token)||""))}}class s6 extends In{async getFullList(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/backups",l)}async create(l,i){return i=Object.assign({method:"POST",body:{name:l}},i),this.client.send("/api/backups",i).then((()=>!0))}async upload(l,i){return i=Object.assign({method:"POST",body:l},i),this.client.send("/api/backups/upload",i).then((()=>!0))}async delete(l,i){return i=Object.assign({method:"DELETE"},i),this.client.send(`/api/backups/${encodeURIComponent(l)}`,i).then((()=>!0))}async restore(l,i){return i=Object.assign({method:"POST"},i),this.client.send(`/api/backups/${encodeURIComponent(l)}/restore`,i).then((()=>!0))}getDownloadUrl(l,i){return console.warn("Please replace pb.backups.getDownloadUrl() with pb.backups.getDownloadURL()"),this.getDownloadURL(l,i)}getDownloadURL(l,i){return this.client.buildURL(`/api/backups/${encodeURIComponent(i)}?token=${encodeURIComponent(l)}`)}}class r6 extends In{async getFullList(l){return l=Object.assign({method:"GET"},l),this.client.send("/api/crons",l)}async run(l,i){return i=Object.assign({method:"POST"},i),this.client.send(`/api/crons/${encodeURIComponent(l)}`,i).then((()=>!0))}}function su(s){return typeof Blob<"u"&&s instanceof Blob||typeof File<"u"&&s instanceof File||s!==null&&typeof s=="object"&&s.uri&&(typeof navigator<"u"&&navigator.product==="ReactNative"||typeof global<"u"&&global.HermesInternal)}function ru(s){var l;return s&&(((l=s.constructor)==null?void 0:l.name)==="FormData"||typeof FormData<"u"&&s instanceof FormData)}function Jf(s){for(const l in s){const i=Array.isArray(s[l])?s[l]:[s[l]];for(const r of i)if(su(r))return!0}return!1}const o6=/^[\-\.\d]+$/;function Pf(s){if(typeof s!="string")return s;if(s=="true")return!0;if(s=="false")return!1;if((s[0]==="-"||s[0]>="0"&&s[0]<="9")&&o6.test(s)){let l=+s;if(""+l===s)return l}return s}class c6 extends In{constructor(){super(...arguments),this.requests=[],this.subs={}}collection(l){return this.subs[l]||(this.subs[l]=new u6(this.requests,l)),this.subs[l]}async send(l){const i=new FormData,r=[];for(let u=0;u<this.requests.length;u++){const d=this.requests[u];if(r.push({method:d.method,url:d.url,headers:d.headers,body:d.json}),d.files)for(let f in d.files){const m=d.files[f]||[];for(let g of m)i.append("requests."+u+"."+f,g)}}return i.append("@jsonPayload",JSON.stringify({requests:r})),l=Object.assign({method:"POST",body:i},l),this.client.send("/api/batch",l)}}class u6{constructor(l,i){this.requests=[],this.requests=l,this.collectionIdOrName=i}upsert(l,i){i=Object.assign({body:l||{}},i);const r={method:"PUT",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records"};this.prepareRequest(r,i),this.requests.push(r)}create(l,i){i=Object.assign({body:l||{}},i);const r={method:"POST",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records"};this.prepareRequest(r,i),this.requests.push(r)}update(l,i,r){r=Object.assign({body:i||{}},r);const u={method:"PATCH",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records/"+encodeURIComponent(l)};this.prepareRequest(u,r),this.requests.push(u)}delete(l,i){i=Object.assign({},i);const r={method:"DELETE",url:"/api/collections/"+encodeURIComponent(this.collectionIdOrName)+"/records/"+encodeURIComponent(l)};this.prepareRequest(r,i),this.requests.push(r)}prepareRequest(l,i){if(Cu(i),l.headers=i.headers,l.json={},l.files={},i.query!==void 0){const u=Eu(i.query);u&&(l.url+=(l.url.includes("?")?"&":"?")+u)}let r=i.body;ru(r)&&(r=(function(d){let f={};return d.forEach(((m,g)=>{if(g==="@jsonPayload"&&typeof m=="string")try{let v=JSON.parse(m);Object.assign(f,v)}catch(v){console.warn("@jsonPayload error:",v)}else f[g]!==void 0?(Array.isArray(f[g])||(f[g]=[f[g]]),f[g].push(Pf(m))):f[g]=Pf(m)})),f})(r));for(const u in r){const d=r[u];if(su(d))l.files[u]=l.files[u]||[],l.files[u].push(d);else if(Array.isArray(d)){const f=[],m=[];for(const g of d)su(g)?f.push(g):m.push(g);if(f.length>0&&f.length==d.length){l.files[u]=l.files[u]||[];for(let g of f)l.files[u].push(g)}else if(l.json[u]=m,f.length>0){let g=u;u.startsWith("+")||u.endsWith("+")||(g+="+"),l.files[g]=l.files[g]||[];for(let v of f)l.files[g].push(v)}}else l.json[u]=d}}}class Au{get baseUrl(){return this.baseURL}set baseUrl(l){this.baseURL=l}constructor(l="/",i,r="en-US"){this.cancelControllers={},this.recordServices={},this.enableAutoCancellation=!0,this.baseURL=l,this.lang=r,i?this.authStore=i:typeof window<"u"&&window.Deno?this.authStore=new wu:this.authStore=new J8,this.collections=new n6(this),this.files=new i6(this),this.logs=new a6(this),this.settings=new P8(this),this.realtime=new qp(this),this.health=new l6(this),this.backups=new s6(this),this.crons=new r6(this)}get admins(){return this.collection("_superusers")}createBatch(){return new c6(this)}collection(l){return this.recordServices[l]||(this.recordServices[l]=new t6(this,l)),this.recordServices[l]}autoCancellation(l){return this.enableAutoCancellation=!!l,this}cancelRequest(l){return this.cancelControllers[l]&&(this.cancelControllers[l].abort(),delete this.cancelControllers[l]),this}cancelAllRequests(){for(let l in this.cancelControllers)this.cancelControllers[l].abort();return this.cancelControllers={},this}filter(l,i){if(!i)return l;for(let r in i){let u=i[r];switch(typeof u){case"boolean":case"number":u=""+u;break;case"string":u="'"+u.replace(/'/g,"\\'")+"'";break;default:u=u===null?"null":u instanceof Date?"'"+u.toISOString().replace("T"," ")+"'":"'"+JSON.stringify(u).replace(/'/g,"\\'")+"'"}l=l.replaceAll("{:"+r+"}",u)}return l}getFileUrl(l,i,r={}){return console.warn("Please replace pb.getFileUrl() with pb.files.getURL()"),this.files.getURL(l,i,r)}buildUrl(l){return console.warn("Please replace pb.buildUrl() with pb.buildURL()"),this.buildURL(l)}buildURL(l){var r;let i=this.baseURL;return typeof window>"u"||!window.location||i.startsWith("https://")||i.startsWith("http://")||(i=(r=window.location.origin)!=null&&r.endsWith("/")?window.location.origin.substring(0,window.location.origin.length-1):window.location.origin||"",this.baseURL.startsWith("/")||(i+=window.location.pathname||"/",i+=i.endsWith("/")?"":"/"),i+=this.baseURL),l&&(i+=i.endsWith("/")?"":"/",i+=l.startsWith("/")?l.substring(1):l),i}async send(l,i){i=this.initSendOptions(l,i);let r=this.buildURL(l);if(this.beforeSend){const u=Object.assign({},await this.beforeSend(r,i));u.url!==void 0||u.options!==void 0?(r=u.url||r,i=u.options||i):Object.keys(u).length&&(i=u,console!=null&&console.warn&&console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."))}if(i.query!==void 0){const u=Eu(i.query);u&&(r+=(r.includes("?")?"&":"?")+u),delete i.query}return this.getHeader(i.headers,"Content-Type")=="application/json"&&i.body&&typeof i.body!="string"&&(i.body=JSON.stringify(i.body)),(i.fetch||fetch)(r,i).then((async u=>{var f;let d={};try{d=await u.json()}catch(m){if((f=i.signal)!=null&&f.aborted||(m==null?void 0:m.name)=="AbortError"||(m==null?void 0:m.message)=="Aborted")throw m}if(this.afterSend&&(d=await this.afterSend(u,d,i)),u.status>=400)throw new vt({url:u.url,status:u.status,data:d});return d})).catch((u=>{throw new vt(u)}))}initSendOptions(l,i){if((i=Object.assign({method:"GET"},i)).body=(function(u){if(typeof FormData>"u"||u===void 0||typeof u!="object"||u===null||ru(u)||!Jf(u))return u;const d=new FormData;for(const f in u){const m=u[f];if(m!==void 0)if(typeof m!="object"||Jf({data:m})){const g=Array.isArray(m)?m:[m];for(let v of g)d.append(f,v)}else{let g={};g[f]=m,d.append("@jsonPayload",JSON.stringify(g))}}return d})(i.body),Cu(i),i.query=Object.assign({},i.params,i.query),i.requestKey===void 0&&(i.$autoCancel===!1||i.query.$autoCancel===!1?i.requestKey=null:(i.$cancelKey||i.query.$cancelKey)&&(i.requestKey=i.$cancelKey||i.query.$cancelKey)),delete i.$autoCancel,delete i.query.$autoCancel,delete i.$cancelKey,delete i.query.$cancelKey,this.getHeader(i.headers,"Content-Type")!==null||ru(i.body)||(i.headers=Object.assign({},i.headers,{"Content-Type":"application/json"})),this.getHeader(i.headers,"Accept-Language")===null&&(i.headers=Object.assign({},i.headers,{"Accept-Language":this.lang})),this.authStore.token&&this.getHeader(i.headers,"Authorization")===null&&(i.headers=Object.assign({},i.headers,{Authorization:this.authStore.token})),this.enableAutoCancellation&&i.requestKey!==null){const r=i.requestKey||(i.method||"GET")+l;delete i.requestKey,this.cancelRequest(r);const u=new AbortController;this.cancelControllers[r]=u,i.signal=u.signal}return i}getHeader(l,i){l=l||{},i=i.toLowerCase();for(let r in l)if(r.toLowerCase()==i)return l[r];return null}}const Yp="ennabl_pb_url";let Dl=null;function Ip(){return localStorage.getItem(Yp)||""}function Cr(){const s=Ip();return s?((!Dl||Dl.baseUrl!==s)&&(Dl=new Au(s)),Dl):null}function Wf(){return!!Ip()}async function d6(s){const l=s.trim().replace(/\/$/,"");localStorage.setItem(Yp,l),Dl=new Au(l),await Dl.collection("prds").getList(1,1)}async function f6(){return(await Cr().collection("prds").getFullList({sort:"-updated"})).map(Nu)}async function p6({projectId:s,title:l,content:i}){const r=await Cr().collection("prds").create({projectId:s,title:l.trim(),content:i||"",status:"backlog"});return Nu(r)}async function h6(s,l){const i=await Cr().collection("prds").update(s,l);return Nu(i)}async function m6(s){await Cr().collection("prds").delete(s)}function Nu(s){return{id:s.id,projectId:s.projectId,title:s.title,content:s.content||"",status:s.status||"backlog",createdAt:s.created,updatedAt:s.updated}}function g6({onDone:s}){const[l,i]=h.useState(""),[r,u]=h.useState(!1),[d,f]=h.useState("");async function m(g){var v,x;if(g.preventDefault(),!!l.trim()){u(!0),f("");try{await d6(l),s()}catch(S){f((v=S==null?void 0:S.message)!=null&&v.includes("Failed to fetch")?"Could not reach that URL. Check the Railway domain and make sure it's deployed.":(x=S==null?void 0:S.message)!=null&&x.includes("prds")?'Connected but the "prds" collection is missing. Check that the migration ran.':`Connection failed: ${(S==null?void 0:S.message)||"unknown error"}`)}finally{u(!1)}}}return b.jsx("div",{className:"pb-setup",children:b.jsxs("div",{className:"pb-setup-card",children:[b.jsxs("div",{className:"pb-setup-logo",children:[b.jsx("span",{className:"pb-setup-logo-name",children:"ennabl"}),b.jsx("span",{className:"pb-setup-logo-suffix",children:"builder"})]}),b.jsx("h2",{className:"pb-setup-title",children:"Connect to PocketBase"}),b.jsx("p",{className:"pb-setup-sub",children:"Paste your Railway deployment URL to sync PRDs across sessions."}),b.jsxs("form",{className:"pb-setup-form",onSubmit:m,children:[b.jsx("input",{className:"pb-setup-input",type:"url",placeholder:"https://your-app.up.railway.app",value:l,onChange:g=>i(g.target.value),autoFocus:!0,disabled:r}),d&&b.jsx("div",{className:"pb-setup-error",children:d}),b.jsx("button",{className:"pb-setup-btn",type:"submit",disabled:!l.trim()||r,children:r?"Connecting…":"Connect"})]}),b.jsxs("div",{className:"pb-setup-footer",children:[b.jsxs("span",{className:"pb-setup-hint",children:["Don't have a deployment yet?"," ",b.jsx("a",{href:"https://railway.app",target:"_blank",rel:"noreferrer",className:"pb-setup-link",children:"Deploy to Railway →"})]}),b.jsx("button",{className:"pb-setup-skip",onClick:s,children:"Skip — use local storage"})]})]})})}const Gp="ennabl_builder_prds",b6={ai:"AI",insights:"INS",workflows:"WFL",data:"DAT",growth:"GRW",updates:"UPD",settings:"SET"},Xp=[{id:"ai",name:"AI",phosphorIcon:"Sparkle"},{id:"insights",name:"Insights",phosphorIcon:"ChartBar"},{id:"workflows",name:"Workflows",phosphorIcon:"FlowArrow"},{id:"data",name:"Data",phosphorIcon:"Database"},{id:"growth",name:"Growth",phosphorIcon:"TrendUp"},{id:"updates",name:"Updates",phosphorIcon:"Bell"},{id:"settings",name:"Settings",phosphorIcon:"GearSix"}],ep=["backlog","todo","doing","done"],Qp={backlog:"Backlog",todo:"To Do",doing:"Doing",done:"Done"};function v6(s){const l={};let i=!1;const r=s.map(u=>{const d={};if(u.prdId)l[u.projectId]=(l[u.projectId]||0)+1;else{l[u.projectId]=(l[u.projectId]||0)+1;const f=b6[u.projectId]||u.projectId.slice(0,3).toUpperCase();d.prdId=`${f}-${String(l[u.projectId]).padStart(2,"0")}`,i=!0}return u.sprintIds||(d.sprintIds=[],i=!0),Object.keys(d).length?{...u,...d}:u});return i&&Ml(r),r}const y6=[{id:"prd-mock-1",projectId:"workflows",prdId:"WFL-01",sprintIds:[],title:"Producer Filter Modal",content:`# Producer Filter Modal

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
`,status:"doing",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),updatedAt:new Date(Date.now()-7200*1e3).toISOString()}];function ou(){try{return JSON.parse(localStorage.getItem(Gp)||"[]")}catch{return[]}}function Ml(s){localStorage.setItem(Gp,JSON.stringify(s))}function tp(){ou().length===0&&Ml(y6)}function Kp(s){return Xp.find(l=>l.id===s)||null}function x6({prds:s=[],onSelect:l}){const[i,r]=h.useState(""),[u,d]=h.useState([]),[f,m]=h.useState(!1),[g,v]=h.useState(0),x=h.useRef(),S=h.useRef();h.useEffect(()=>{if(!i.trim()){d([]),m(!1);return}const A=i.toLowerCase(),O=s.filter(D=>D.title.toLowerCase().includes(A)).slice(0,8);d(O),m(O.length>0),v(0)},[i,s]),h.useEffect(()=>{function A(O){f&&(O.key==="ArrowDown"&&(O.preventDefault(),v(D=>Math.min(D+1,u.length-1))),O.key==="ArrowUp"&&(O.preventDefault(),v(D=>Math.max(D-1,0))),O.key==="Enter"&&(O.preventDefault(),u[g]&&T(u[g])),O.key==="Escape"&&m(!1))}return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[f,u,g]),h.useEffect(()=>{function A(O){var D,Y;!((D=S.current)!=null&&D.contains(O.target))&&!((Y=x.current)!=null&&Y.contains(O.target))&&m(!1)}return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[]);function T(A){var O;l(A),r(""),m(!1),(O=x.current)==null||O.blur()}return b.jsxs("div",{className:"prd-search",children:[b.jsxs("div",{className:"prd-search-input-wrap",children:[b.jsx("span",{className:"prd-search-icon",children:"⌕"}),b.jsx("input",{ref:x,className:"prd-search-input",type:"text",placeholder:"Search PRDs…",value:i,onChange:A=>r(A.target.value),onFocus:()=>{u.length&&m(!0)}}),i&&b.jsx("button",{className:"prd-search-clear",onClick:()=>{r(""),m(!1)},children:"✕"})]}),f&&b.jsx("div",{ref:S,className:"prd-search-dropdown",children:u.map((A,O)=>{const D=Kp(A.projectId);return b.jsxs("button",{className:`prd-search-result ${O===g?"prd-search-result--active":""}`,onMouseEnter:()=>v(O),onClick:()=>T(A),children:[b.jsx("span",{className:"prd-search-result-title",children:A.title}),b.jsxs("span",{className:"prd-search-result-project",children:[D==null?void 0:D.icon," ",D==null?void 0:D.name]})]},A.id)})})]})}const S6=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M225.29,165.93C216.61,151,212,129.57,212,104a84,84,0,0,0-168,0c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.66,186,19.77,19.77,0,0,0,48,196H84.18a44,44,0,0,0,87.64,0H208a19.77,19.77,0,0,0,17.31-10A20.08,20.08,0,0,0,225.29,165.93ZM128,212a20,20,0,0,1-19.6-16h39.2A20,20,0,0,1,128,212ZM54.66,172C63.51,154,68,131.14,68,104a60,60,0,0,1,120,0c0,27.13,4.48,50,13.33,68Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192Z",opacity:"0.2"}),h.createElement("path",{d:"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M220.07,176.94C214.41,167.2,206,139.73,206,104a78,78,0,1,0-156,0c0,35.74-8.42,63.2-14.08,72.94A14,14,0,0,0,48,198H90.48a38,38,0,0,0,75,0H208a14,14,0,0,0,12.06-21.06ZM128,218a26,26,0,0,1-25.29-20h50.58A26,26,0,0,1,128,218Zm81.71-33a1.9,1.9,0,0,1-1.7,1H48a1.9,1.9,0,0,1-1.7-1,2,2,0,0,1,0-2C53.87,170,62,139.69,62,104a66,66,0,1,1,132,0c0,35.68,8.14,65.95,15.71,79A2,2,0,0,1,209.71,185Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M218.35,178C212.58,168,204,140.13,204,104a76,76,0,1,0-152,0c0,36.13-8.59,64-14.36,73.95A12,12,0,0,0,48,196H92.23a36,36,0,0,0,71.54,0H208A12,12,0,0,0,218.35,178ZM128,220a28,28,0,0,1-27.71-24h55.42A28,28,0,0,1,128,220Zm83.45-34a3.91,3.91,0,0,1-3.44,2H48a3.91,3.91,0,0,1-3.44-2,4,4,0,0,1,0-4C52,169.17,60,139.32,60,104a68,68,0,1,1,136,0c0,35.31,8,65.17,15.44,78A4,4,0,0,1,211.45,186Z"}))]]),w6=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),h.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),C6=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,196h-4V40a12,12,0,0,0-12-12H152a12,12,0,0,0-12,12V76H96A12,12,0,0,0,84,88v36H48a12,12,0,0,0-12,12v60H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24ZM164,52h32V196H164Zm-56,48h32v96H108ZM60,148H84v48H60Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,40V208H152V40Z",opacity:"0.2"}),h.createElement("path",{d:"M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,202H214V40a6,6,0,0,0-6-6H152a6,6,0,0,0-6,6V82H96a6,6,0,0,0-6,6v42H48a6,6,0,0,0-6,6v66H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12ZM158,46h44V202H158ZM102,94h44V202H102ZM54,142H90v60H54Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,204H212V40a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4V84H96a4,4,0,0,0-4,4v44H48a4,4,0,0,0-4,4v68H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8ZM156,44h48V204H156ZM100,92h48V204H100ZM52,140H92v64H52Z"}))]]),E6=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M196,35.52C177.62,25.51,153.48,20,128,20S78.38,25.51,60,35.52C39.37,46.79,28,62.58,28,80v96c0,17.42,11.37,33.21,32,44.48,18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52c20.66-11.27,32-27.06,32-44.48V80C228,62.58,216.63,46.79,196,35.52ZM204,128c0,17-31.21,36-76,36s-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94ZM128,44c44.79,0,76,19,76,36s-31.21,36-76,36S52,97,52,80,83.21,44,128,44Zm0,168c-44.79,0-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94V176C204,193,172.79,212,128,212Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,80c0,26.51-39.4,48-88,48S40,106.51,40,80s39.4-48,88-48S216,53.49,216,80Z",opacity:"0.2"}),h.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64Zm-21.61,74.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,26C75.29,26,34,49.72,34,80v96c0,30.28,41.29,54,94,54s94-23.72,94-54V80C222,49.72,180.71,26,128,26Zm0,12c44.45,0,82,19.23,82,42s-37.55,42-82,42S46,102.77,46,80,83.55,38,128,38Zm82,138c0,22.77-37.55,42-82,42s-82-19.23-82-42V154.79C62,171.16,92.37,182,128,182s66-10.84,82-27.21Zm0-48c0,22.77-37.55,42-82,42s-82-19.23-82-42V106.79C62,123.16,92.37,134,128,134s66-10.84,82-27.21Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M192.14,42.55C174.94,33.17,152.16,28,128,28S81.06,33.17,63.86,42.55C45.89,52.35,36,65.65,36,80v96c0,14.35,9.89,27.65,27.86,37.45,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c18-9.8,27.86-23.1,27.86-37.45V80C220,65.65,210.11,52.35,192.14,42.55ZM212,176c0,11.29-8.41,22.1-23.69,30.43C172.27,215.18,150.85,220,128,220s-44.27-4.82-60.31-13.57C52.41,198.1,44,187.29,44,176V149.48c4.69,5.93,11.37,11.34,19.86,16,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c8.49-4.63,15.17-10,19.86-16Zm0-48c0,11.29-8.41,22.1-23.69,30.43C172.27,167.18,150.85,172,128,172s-44.27-4.82-60.31-13.57C52.41,150.1,44,139.29,44,128V101.48c4.69,5.93,11.37,11.34,19.86,16,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c8.49-4.63,15.17-10,19.86-16Zm-23.69-17.57C172.27,119.18,150.85,124,128,124s-44.27-4.82-60.31-13.57C52.41,102.1,44,91.29,44,80s8.41-22.1,23.69-30.43C83.73,40.82,105.15,36,128,36s44.27,4.82,60.31,13.57C203.59,57.9,212,68.71,212,80S203.59,102.1,188.31,110.43Z"}))]]),A6=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M248.49,71.51l-32-32a12,12,0,0,0-17,17L211,68h-3c-52,0-64.8,30.71-75.08,55.38-8.82,21.17-15.45,37.05-42.75,40.09a44,44,0,1,0,.28,24.08c43.34-3.87,55.07-32,64.63-54.93C164.9,109,172,92,208,92h3l-11.52,11.51a12,12,0,0,0,17,17l32-32A12,12,0,0,0,248.49,71.51ZM48,196a20,20,0,1,1,20-20A20,20,0,0,1,48,196Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M80,176a32,32,0,1,1-32-32A32,32,0,0,1,80,176Z",opacity:"0.2"}),h.createElement("path",{d:"M245.66,74.34l-32-32a8,8,0,0,0-11.32,11.32L220.69,72H208c-49.33,0-61.05,28.12-71.38,52.92-9.38,22.51-16.92,40.59-49.48,42.84a40,40,0,1,0,.1,16c43.26-2.65,54.34-29.15,64.14-52.69C161.41,107,169.33,88,208,88h12.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,74.34ZM48,200a24,24,0,1,1,24-24A24,24,0,0,1,48,200Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M245.66,85.66l-32,32a8,8,0,0,1-11.32-11.32L220.69,88H208c-38.67,0-46.59,19-56.62,43.08C141.05,155.88,129.33,184,80,184H79a32,32,0,1,1,0-16h1c38.67,0,46.59-19,56.62-43.08C147,100.12,158.67,72,208,72h12.69L202.34,53.66a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,245.66,85.66Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M244.24,75.76l-32-32a6,6,0,0,0-8.48,8.48L225.51,74H208c-48,0-59.44,27.46-69.54,51.69-9.43,22.64-17.66,42.33-53,44.16a38,38,0,1,0,.06,12c43.34-2.06,54.29-28.29,64-51.55C159.44,106.53,168,86,208,86h17.51l-21.75,21.76a6,6,0,1,0,8.48,8.48l32-32A6,6,0,0,0,244.24,75.76ZM48,202a26,26,0,1,1,26-26A26,26,0,0,1,48,202Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M245.66,74.34l-32-32a8,8,0,0,0-11.32,11.32L220.69,72H208c-49.33,0-61.05,28.12-71.38,52.92-9.38,22.51-16.92,40.59-49.48,42.84a40,40,0,1,0,.1,16c43.26-2.65,54.34-29.15,64.14-52.69C161.41,107,169.33,88,208,88h12.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,74.34ZM48,200a24,24,0,1,1,24-24A24,24,0,0,1,48,200Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M242.83,77.17l-32-32a4,4,0,0,0-5.66,5.66L230.34,76H208c-46.67,0-57.84,26.81-67.69,50.46-9.46,22.69-18.4,44.16-56.55,45.48a36,36,0,1,0,0,8c43.49-1.42,54.33-27.39,63.91-50.39C157.45,106.12,166.67,84,208,84h22.34l-25.17,25.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,242.83,77.17ZM48,204a28,28,0,1,1,28-28A28,28,0,0,1,48,204Z"}))]]),N6=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm113.86-49.57A12,12,0,0,0,236,98.34L208.21,82.49l-.11-31.31a12,12,0,0,0-4.25-9.12,116,116,0,0,0-38-21.41,12,12,0,0,0-9.68.89L128,37.27,99.83,21.53a12,12,0,0,0-9.7-.9,116.06,116.06,0,0,0-38,21.47,12,12,0,0,0-4.24,9.1l-.14,31.34L20,98.35a12,12,0,0,0-5.85,8.11,110.7,110.7,0,0,0,0,43.11A12,12,0,0,0,20,157.66l27.82,15.85.11,31.31a12,12,0,0,0,4.25,9.12,116,116,0,0,0,38,21.41,12,12,0,0,0,9.68-.89L128,218.73l28.14,15.74a12,12,0,0,0,9.7.9,116.06,116.06,0,0,0,38-21.47,12,12,0,0,0,4.24-9.1l.14-31.34,27.81-15.81a12,12,0,0,0,5.85-8.11A110.7,110.7,0,0,0,241.86,106.43Zm-22.63,33.18-26.88,15.28a11.94,11.94,0,0,0-4.55,4.59c-.54,1-1.11,1.93-1.7,2.88a12,12,0,0,0-1.83,6.31L184.13,199a91.83,91.83,0,0,1-21.07,11.87l-27.15-15.19a12,12,0,0,0-5.86-1.53h-.29c-1.14,0-2.3,0-3.44,0a12.08,12.08,0,0,0-6.14,1.51L93,210.82A92.27,92.27,0,0,1,71.88,199l-.11-30.24a12,12,0,0,0-1.83-6.32c-.58-.94-1.16-1.91-1.7-2.88A11.92,11.92,0,0,0,63.7,155L36.8,139.63a86.53,86.53,0,0,1,0-23.24l26.88-15.28a12,12,0,0,0,4.55-4.58c.54-1,1.11-1.94,1.7-2.89a12,12,0,0,0,1.83-6.31L71.87,57A91.83,91.83,0,0,1,92.94,45.17l27.15,15.19a11.92,11.92,0,0,0,6.15,1.52c1.14,0,2.3,0,3.44,0a12.08,12.08,0,0,0,6.14-1.51L163,45.18A92.27,92.27,0,0,1,184.12,57l.11,30.24a12,12,0,0,0,1.83,6.32c.58.94,1.16,1.91,1.7,2.88A11.92,11.92,0,0,0,192.3,101l26.9,15.33A86.53,86.53,0,0,1,219.23,139.61Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),h.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Zm108-54.4a6,6,0,0,0-2.92-4L202.64,86.22l-.42-.71L202.1,51.2A6,6,0,0,0,200,46.64a110.12,110.12,0,0,0-36.07-20.31,6,6,0,0,0-4.84.45L128.46,43.86h-1L96.91,26.76a6,6,0,0,0-4.86-.44A109.92,109.92,0,0,0,56,46.68a6,6,0,0,0-2.12,4.55l-.16,34.34c-.14.23-.28.47-.41.71L22.91,103.57A6,6,0,0,0,20,107.62a104.81,104.81,0,0,0,0,40.78,6,6,0,0,0,2.92,4l30.42,17.33.42.71.12,34.31A6,6,0,0,0,56,209.36a110.12,110.12,0,0,0,36.07,20.31,6,6,0,0,0,4.84-.45l30.61-17.08h1l30.56,17.1A6.09,6.09,0,0,0,162,230a5.83,5.83,0,0,0,1.93-.32,109.92,109.92,0,0,0,36-20.36,6,6,0,0,0,2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6,6,0,0,0,2.92-4.05A104.81,104.81,0,0,0,236,107.6Zm-11.25,35.79L195.32,160.1a6.07,6.07,0,0,0-2.28,2.3c-.59,1-1.21,2.11-1.86,3.14a6,6,0,0,0-.91,3.16l-.16,33.21a98.15,98.15,0,0,1-27.52,15.53L133,200.88a6,6,0,0,0-2.93-.77h-.14c-1.24,0-2.5,0-3.74,0a6,6,0,0,0-3.07.76L93.45,217.43a98,98,0,0,1-27.56-15.49l-.12-33.17a6,6,0,0,0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6,6,0,0,0-2.27-2.3L31.3,143.4a93,93,0,0,1,0-30.79L60.68,95.9A6.07,6.07,0,0,0,63,93.6c.59-1,1.21-2.11,1.86-3.14a6,6,0,0,0,.91-3.16l.16-33.21A98.15,98.15,0,0,1,93.41,38.56L123,55.12a5.81,5.81,0,0,0,3.07.76c1.24,0,2.5,0,3.74,0a6,6,0,0,0,3.07-.76l29.65-16.56a98,98,0,0,1,27.56,15.49l.12,33.17a6,6,0,0,0,.91,3.16c.64,1,1.27,2.08,1.86,3.14a6,6,0,0,0,2.27,2.3L224.7,112.6A93,93,0,0,1,224.73,143.39Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm106-56a4,4,0,0,0-2-2.7l-30.89-17.6q-.47-.82-1-1.62L200.1,51.2a3.94,3.94,0,0,0-1.42-3,107.8,107.8,0,0,0-35.41-19.94,4,4,0,0,0-3.23.29L129,45.87h-2l-31-17.36a4,4,0,0,0-3.23-.3,108.05,108.05,0,0,0-35.39,20,4,4,0,0,0-1.41,3l-.16,34.9-1,1.62L23.9,105.3A4,4,0,0,0,22,108a102.76,102.76,0,0,0,0,40,4,4,0,0,0,1.95,2.7l30.89,17.6q.47.83,1,1.62l.12,34.87a3.94,3.94,0,0,0,1.42,3,107.8,107.8,0,0,0,35.41,19.94,4,4,0,0,0,3.23-.29L127,210.13h2l31,17.36a4,4,0,0,0,3.23.3,108.05,108.05,0,0,0,35.39-20,4,4,0,0,0,1.41-3l.16-34.9,1-1.62L232.1,150.7a4,4,0,0,0,2-2.71A102.76,102.76,0,0,0,234,108Zm-7.48,36.67L196.3,161.84a4,4,0,0,0-1.51,1.53c-.61,1.09-1.25,2.17-1.91,3.24a3.92,3.92,0,0,0-.61,2.1l-.16,34.15a99.8,99.8,0,0,1-29.7,16.77l-30.4-17a4.06,4.06,0,0,0-2-.51H130c-1.28,0-2.57,0-3.84,0a4.1,4.1,0,0,0-2.05.51l-30.45,17A100.23,100.23,0,0,1,63.89,202.9l-.12-34.12a3.93,3.93,0,0,0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4,4,0,0,0-1.51-1.53L29.49,144.68a94.78,94.78,0,0,1,0-33.34L59.7,94.16a4,4,0,0,0,1.51-1.53c.61-1.09,1.25-2.17,1.91-3.23a4,4,0,0,0,.61-2.11l.16-34.15a99.8,99.8,0,0,1,29.7-16.77l30.4,17a4.1,4.1,0,0,0,2.05.51c1.28,0,2.57,0,3.84,0a4,4,0,0,0,2.05-.51l30.45-17A100.23,100.23,0,0,1,192.11,53.1l.12,34.12a3.93,3.93,0,0,0,.61,2.11c.66,1,1.3,2.14,1.91,3.23a4,4,0,0,0,1.51,1.53l30.25,17.23A94.78,94.78,0,0,1,226.54,144.66Z"}))]]),T6=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M236.37,139.4a12,12,0,0,0-12-3A84.07,84.07,0,0,1,119.6,31.59a12,12,0,0,0-15-15A108.86,108.86,0,0,0,49.69,55.07,108,108,0,0,0,136,228a107.09,107.09,0,0,0,64.93-21.69,108.86,108.86,0,0,0,38.44-54.94A12,12,0,0,0,236.37,139.4Zm-49.88,47.74A84,84,0,0,1,68.86,69.51,84.93,84.93,0,0,1,92.27,48.29Q92,52.13,92,56A108.12,108.12,0,0,0,200,164q3.87,0,7.71-.27A84.79,84.79,0,0,1,186.49,187.14Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z",opacity:"0.2"}),h.createElement("path",{d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232.13,143.64a6,6,0,0,0-6-1.49A90.07,90.07,0,0,1,113.86,29.85a6,6,0,0,0-7.49-7.48A102.88,102.88,0,0,0,54.48,58.68,102,102,0,0,0,197.32,201.52a102.88,102.88,0,0,0,36.31-51.89A6,6,0,0,0,232.13,143.64Zm-42,48.29a90,90,0,0,1-126-126A90.9,90.9,0,0,1,99.65,37.66,102.06,102.06,0,0,0,218.34,156.35,90.9,90.9,0,0,1,190.1,191.93Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M230.72,145.06a4,4,0,0,0-4-1A92.08,92.08,0,0,1,111.94,29.27a4,4,0,0,0-5-5A100.78,100.78,0,0,0,56.08,59.88a100,100,0,0,0,140,140,100.78,100.78,0,0,0,35.59-50.87A4,4,0,0,0,230.72,145.06ZM191.3,193.53A92,92,0,0,1,62.47,64.7a93,93,0,0,1,39.88-30.35,100.09,100.09,0,0,0,119.3,119.3A93,93,0,0,1,191.3,193.53Z"}))]]),D6=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),h.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),M6=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,56V200a16,16,0,0,1-16,16H48V40H208A16,16,0,0,1,224,56Z",opacity:"0.2"}),h.createElement("path",{d:"M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40A8,8,0,0,0,176,88v32H112a8,8,0,0,0,0,16h64v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,229.66,122.34Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M118,216a6,6,0,0,1-6,6H48a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H54V210h58A6,6,0,0,1,118,216Zm110.24-92.24-40-40a6,6,0,0,0-8.48,8.48L209.51,122H112a6,6,0,0,0,0,12h97.51l-29.75,29.76a6,6,0,1,0,8.48,8.48l40-40A6,6,0,0,0,228.24,123.76Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M116,216a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H52V212h60A4,4,0,0,1,116,216Zm110.83-90.83-40-40a4,4,0,0,0-5.66,5.66L214.34,124H112a4,4,0,0,0,0,8H214.34l-33.17,33.17a4,4,0,0,0,5.66,5.66l40-40A4,4,0,0,0,226.83,125.17Z"}))]]),k6=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M199,125.31l-49.88-18.39L130.69,57a19.92,19.92,0,0,0-37.38,0L74.92,106.92,25,125.31a19.92,19.92,0,0,0,0,37.38l49.88,18.39L93.31,231a19.92,19.92,0,0,0,37.38,0l18.39-49.88L199,162.69a19.92,19.92,0,0,0,0-37.38Zm-63.38,35.16a12,12,0,0,0-7.11,7.11L112,212.28l-16.47-44.7a12,12,0,0,0-7.11-7.11L43.72,144l44.7-16.47a12,12,0,0,0,7.11-7.11L112,75.72l16.47,44.7a12,12,0,0,0,7.11,7.11L180.28,144ZM140,40a12,12,0,0,1,12-12h12V16a12,12,0,0,1,24,0V28h12a12,12,0,0,1,0,24H188V64a12,12,0,0,1-24,0V52H152A12,12,0,0,1,140,40ZM252,88a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12,12,0,0,1,252,88Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M194.82,151.43l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0l-20.3-55.09-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3A7.92,7.92,0,0,1,194.82,151.43Z",opacity:"0.2"}),h.createElement("path",{d:"M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M196.89,130.94,144.4,111.6,125.06,59.11a13.92,13.92,0,0,0-26.12,0L79.6,111.6,27.11,130.94a13.92,13.92,0,0,0,0,26.12L79.6,176.4l19.34,52.49a13.92,13.92,0,0,0,26.12,0L144.4,176.4l52.49-19.34a13.92,13.92,0,0,0,0-26.12Zm-4.15,14.86-55.08,20.3a6,6,0,0,0-3.56,3.56l-20.3,55.08a1.92,1.92,0,0,1-3.6,0L89.9,169.66a6,6,0,0,0-3.56-3.56L31.26,145.8a1.92,1.92,0,0,1,0-3.6l55.08-20.3a6,6,0,0,0,3.56-3.56l20.3-55.08a1.92,1.92,0,0,1,3.6,0l20.3,55.08a6,6,0,0,0,3.56,3.56l55.08,20.3a1.92,1.92,0,0,1,0,3.6ZM146,40a6,6,0,0,1,6-6h18V16a6,6,0,0,1,12,0V34h18a6,6,0,0,1,0,12H182V64a6,6,0,0,1-12,0V46H152A6,6,0,0,1,146,40ZM246,88a6,6,0,0,1-6,6H230v10a6,6,0,0,1-12,0V94H208a6,6,0,0,1,0-12h10V72a6,6,0,0,1,12,0V82h10A6,6,0,0,1,246,88Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M196.2,132.81l-53.36-19.65L123.19,59.8a11.93,11.93,0,0,0-22.38,0L81.16,113.16,27.8,132.81a11.93,11.93,0,0,0,0,22.38l53.36,19.65,19.65,53.36a11.93,11.93,0,0,0,22.38,0l19.65-53.36,53.36-19.65a11.93,11.93,0,0,0,0-22.38Zm-2.77,14.87L138.35,168a4,4,0,0,0-2.37,2.37l-20.3,55.08a3.92,3.92,0,0,1-7.36,0L88,170.35A4,4,0,0,0,85.65,168l-55.08-20.3a3.92,3.92,0,0,1,0-7.36L85.65,120A4,4,0,0,0,88,117.65l20.3-55.08a3.92,3.92,0,0,1,7.36,0L136,117.65a4,4,0,0,0,2.37,2.37l55.08,20.3a3.92,3.92,0,0,1,0,7.36ZM148,40a4,4,0,0,1,4-4h20V16a4,4,0,0,1,8,0V36h20a4,4,0,0,1,0,8H180V64a4,4,0,0,1-8,0V44H152A4,4,0,0,1,148,40Zm96,48a4,4,0,0,1-4,4H228v12a4,4,0,0,1-8,0V92H208a4,4,0,0,1,0-8h12V72a4,4,0,0,1,8,0V84h12A4,4,0,0,1,244,88Z"}))]]),R6=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M116,36V20a12,12,0,0,1,24,0V36a12,12,0,0,1-24,0Zm80,92a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM48,128a12,12,0,0,0-12-12H20a12,12,0,0,0,0,24H36A12,12,0,0,0,48,128Zm80,80a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V220A12,12,0,0,0,128,208Zm108-92H220a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z",opacity:"0.2"}),h.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M122,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-16-16a6,6,0,0,0-8.48,8.48Zm0,119.52-16,16a6,6,0,1,0,8.48,8.48l16-16a6,6,0,1,0-8.48-8.48ZM192,70a6,6,0,0,0,4.24-1.76l16-16a6,6,0,0,0-8.48-8.48l-16,16A6,6,0,0,0,192,70Zm4.24,117.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48-8.48ZM46,128a6,6,0,0,0-6-6H16a6,6,0,0,0,0,12H40A6,6,0,0,0,46,128Zm82,82a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V216A6,6,0,0,0,128,210Zm112-88H216a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M124,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-16-16a4,4,0,0,0-5.66,5.66Zm0,122.34-16,16a4,4,0,0,0,5.66,5.66l16-16a4,4,0,0,0-5.66-5.66ZM192,68a4,4,0,0,0,2.83-1.17l16-16a4,4,0,1,0-5.66-5.66l-16,16A4,4,0,0,0,192,68Zm2.83,121.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66-5.66ZM40,124H16a4,4,0,0,0,0,8H40a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V216A4,4,0,0,0,128,212Zm112-88H216a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Z"}))]]),j6=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M244,56v64a12,12,0,0,1-24,0V85l-75.51,75.52a12,12,0,0,1-17,0L96,129,32.49,192.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0L136,135l67-67H168a12,12,0,0,1,0-24h64A12,12,0,0,1,244,56Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232,56v64L168,56Z",opacity:"0.2"}),h.createElement("path",{d:"M232,48H168a8,8,0,0,0-5.66,13.66L188.69,88,136,140.69l-34.34-34.35a8,8,0,0,0-11.32,0l-72,72a8,8,0,0,0,11.32,11.32L96,123.31l34.34,34.35a8,8,0,0,0,11.32,0L200,99.31l26.34,26.35A8,8,0,0,0,240,120V56A8,8,0,0,0,232,48Zm-8,52.69L187.31,64H224Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M240,56v64a8,8,0,0,1-13.66,5.66L200,99.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,188.69,88,162.34,61.66A8,8,0,0,1,168,48h64A8,8,0,0,1,240,56Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M238,56v64a6,6,0,0,1-12,0V70.48l-85.76,85.76a6,6,0,0,1-8.48,0L96,120.49,28.24,188.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0L136,143.51,217.52,62H168a6,6,0,0,1,0-12h64A6,6,0,0,1,238,56Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M236,56v64a4,4,0,0,1-8,0V65.66l-89.17,89.17a4,4,0,0,1-5.66,0L96,117.66,26.83,186.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0L136,146.34,222.34,60H168a4,4,0,0,1,0-8h64A4,4,0,0,1,236,56Z"}))]]),O6=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20ZM79.57,196.57a60,60,0,0,1,96.86,0,83.72,83.72,0,0,1-96.86,0ZM100,120a28,28,0,1,1,28,28A28,28,0,0,1,100,120ZM194,179.94a83.48,83.48,0,0,0-29-23.42,52,52,0,1,0-74,0,83.48,83.48,0,0,0-29,23.42,84,84,0,1,1,131.9,0Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,128a95.76,95.76,0,0,1-31.8,71.37A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-64.2,39.37h0A96,96,0,1,1,224,128Z",opacity:"0.2"}),h.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26ZM71.44,198a66,66,0,0,1,113.12,0,89.8,89.8,0,0,1-113.12,0ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120Zm99.51,69.64a77.53,77.53,0,0,0-40-31.38,46,46,0,1,0-51,0,77.53,77.53,0,0,0-40,31.38,90,90,0,1,1,131,0Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28ZM68.87,198.42a68,68,0,0,1,118.26,0,91.8,91.8,0,0,1-118.26,0Zm124.3-5.55a75.61,75.61,0,0,0-44.51-34,44,44,0,1,0-41.32,0,75.61,75.61,0,0,0-44.51,34,92,92,0,1,1,130.34,0ZM128,156a36,36,0,1,1,36-36A36,36,0,0,1,128,156Z"}))]]),z6=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),h.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),_6=h.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),yt=h.forwardRef((s,l)=>{const{alt:i,color:r,size:u,weight:d,mirrored:f,children:m,weights:g,...v}=s,{color:x="currentColor",size:S,weight:T="regular",mirrored:A=!1,...O}=h.useContext(_6);return h.createElement("svg",{ref:l,xmlns:"http://www.w3.org/2000/svg",width:u??S,height:u??S,fill:r??x,viewBox:"0 0 256 256",transform:f||A?"scale(-1, 1)":void 0,...O,...v},!!i&&h.createElement("title",null,i),m,g.get(d??T))});yt.displayName="IconBase";const $p=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:S6}));$p.displayName="BellIcon";const Fp=$p,Jp=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:w6}));Jp.displayName="CaretDownIcon";const L6=Jp,Pp=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:C6}));Pp.displayName="ChartBarIcon";const Wp=Pp,eh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:E6}));eh.displayName="DatabaseIcon";const th=eh,nh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:A6}));nh.displayName="FlowArrowIcon";const ah=nh,lh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:N6}));lh.displayName="GearSixIcon";const Tu=lh,ih=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:T6}));ih.displayName="MoonIcon";const U6=ih,sh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:D6}));sh.displayName="PlusIcon";const H6=sh,rh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:M6}));rh.displayName="SignOutIcon";const Z6=rh,oh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:k6}));oh.displayName="SparkleIcon";const ch=oh,uh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:R6}));uh.displayName="SunIcon";const B6=uh,dh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:j6}));dh.displayName="TrendUpIcon";const fh=dh,ph=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:O6}));ph.displayName="UserCircleIcon";const np=ph,hh=h.forwardRef((s,l)=>h.createElement(yt,{ref:l,...s,weights:z6}));hh.displayName="XIcon";const q6=hh;function V6(s){return s?s.split("@")[0].slice(0,2).toUpperCase():null}function Du({theme:s,onThemeToggle:l,onSignOut:i}){const[r,u]=h.useState(!1),[d,f]=h.useState(!1),[m,g]=h.useState(Kc),v=h.useRef(null);h.useEffect(()=>{function A(O){v.current&&!v.current.contains(O.target)&&u(!1)}return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[]);function x(){g8(m.trim())}function S(){m8(),i()}const T=V6(Kc());return b.jsxs("div",{className:"user-menu",ref:v,children:[b.jsx("button",{className:"user-avatar-btn",onClick:()=>{u(A=>!A),f(!1)},"aria-label":"User menu",children:T?b.jsx("span",{className:"user-avatar-initials",children:T}):b.jsx(np,{size:20,weight:"fill"})}),r&&b.jsxs("div",{className:"user-dropdown",children:[b.jsxs("div",{className:"user-dropdown-identity",children:[b.jsx("div",{className:"user-avatar-lg",children:T||b.jsx(np,{size:22,weight:"fill"})}),b.jsx("div",{className:"user-dropdown-email",children:Kc()||"No email set"})]}),b.jsx("div",{className:"user-dropdown-divider"}),b.jsxs("button",{className:"user-dropdown-item",onClick:l,children:[s==="dark"?b.jsx(B6,{size:15,weight:"regular"}):b.jsx(U6,{size:15,weight:"regular"}),b.jsx("span",{children:s==="dark"?"Light mode":"Dark mode"})]}),b.jsx("div",{className:"user-dropdown-divider"}),b.jsxs("button",{className:"user-dropdown-item",onClick:()=>f(A=>!A),children:[b.jsx(Tu,{size:15,weight:"regular"}),b.jsx("span",{children:"Settings"})]}),d&&b.jsxs("div",{className:"user-settings-panel",children:[b.jsx("label",{className:"user-settings-label",children:"Email"}),b.jsx("input",{className:"user-settings-input",type:"email",value:m,onChange:A=>g(A.target.value),onBlur:x,placeholder:"you@ennabl.com"})]}),b.jsx("div",{className:"user-dropdown-divider"}),b.jsxs("button",{className:"user-dropdown-item user-dropdown-item--danger",onClick:S,children:[b.jsx(Z6,{size:15,weight:"regular"}),b.jsx("span",{children:"Sign out"})]})]})]})}const Y6={Sparkle:ch,ChartBar:Wp,FlowArrow:ah,Database:th,TrendUp:fh,Bell:Fp,GearSix:Tu};function I6({prds:s,onNavigate:l,theme:i,onThemeToggle:r,onSignOut:u}){return b.jsxs("div",{className:"projects-page",children:[b.jsxs("header",{className:"projects-header",children:[b.jsxs("div",{className:"projects-logo",children:[b.jsx("span",{className:"projects-logo-name",children:"ennabl"}),b.jsx("span",{className:"projects-logo-suffix",children:"builder"})]}),b.jsx(Du,{theme:i,onThemeToggle:r,onSignOut:u})]}),b.jsxs("main",{className:"projects-main",children:[b.jsx("h1",{className:"projects-title",children:"Projects"}),b.jsx("div",{className:"projects-grid",children:Xp.map(d=>{const f=s.filter(v=>v.projectId===d.id),m=f.filter(v=>v.status==="doing").length,g=Y6[d.phosphorIcon];return b.jsxs("button",{className:"project-card",onClick:()=>l({page:"project",projectId:d.id}),children:[b.jsx("div",{className:"project-card-icon",children:g&&b.jsx(g,{size:28,weight:"regular"})}),b.jsx("div",{className:"project-card-name",children:d.name}),b.jsx("div",{className:"project-card-meta",children:f.length>0?b.jsxs(b.Fragment,{children:[b.jsxs("span",{className:"project-card-count",children:[f.length," PRD",f.length!==1?"s":""]}),m>0&&b.jsxs("span",{className:"project-card-doing",children:[m," doing"]})]}):b.jsx("span",{className:"project-card-empty",children:"No PRDs yet"})})]},d.id)})})]})]})}var Ri=vp();function G6(){for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return h.useMemo(()=>r=>{l.forEach(u=>u(r))},l)}const Er=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function jl(s){const l=Object.prototype.toString.call(s);return l==="[object Window]"||l==="[object global]"}function Mu(s){return"nodeType"in s}function xt(s){var l,i;return s?jl(s)?s:Mu(s)&&(l=(i=s.ownerDocument)==null?void 0:i.defaultView)!=null?l:window:window}function ku(s){const{Document:l}=xt(s);return s instanceof l}function qi(s){return jl(s)?!1:s instanceof xt(s).HTMLElement}function mh(s){return s instanceof xt(s).SVGElement}function Ol(s){return s?jl(s)?s.document:Mu(s)?ku(s)?s:qi(s)||mh(s)?s.ownerDocument:document:document:document}const dn=Er?h.useLayoutEffect:h.useEffect;function Ar(s){const l=h.useRef(s);return dn(()=>{l.current=s}),h.useCallback(function(){for(var i=arguments.length,r=new Array(i),u=0;u<i;u++)r[u]=arguments[u];return l.current==null?void 0:l.current(...r)},[])}function X6(){const s=h.useRef(null),l=h.useCallback((r,u)=>{s.current=setInterval(r,u)},[]),i=h.useCallback(()=>{s.current!==null&&(clearInterval(s.current),s.current=null)},[]);return[l,i]}function Ui(s,l){l===void 0&&(l=[s]);const i=h.useRef(s);return dn(()=>{i.current!==s&&(i.current=s)},l),i}function Vi(s,l){const i=h.useRef();return h.useMemo(()=>{const r=s(i.current);return i.current=r,r},[...l])}function gr(s){const l=Ar(s),i=h.useRef(null),r=h.useCallback(u=>{u!==i.current&&(l==null||l(u,i.current)),i.current=u},[]);return[i,r]}function br(s){const l=h.useRef();return h.useEffect(()=>{l.current=s},[s]),l.current}let Pc={};function Yi(s,l){return h.useMemo(()=>{if(l)return l;const i=Pc[s]==null?0:Pc[s]+1;return Pc[s]=i,s+"-"+i},[s,l])}function gh(s){return function(l){for(var i=arguments.length,r=new Array(i>1?i-1:0),u=1;u<i;u++)r[u-1]=arguments[u];return r.reduce((d,f)=>{const m=Object.entries(f);for(const[g,v]of m){const x=d[g];x!=null&&(d[g]=x+s*v)}return d},{...l})}}const Rl=gh(1),vr=gh(-1);function Q6(s){return"clientX"in s&&"clientY"in s}function Nr(s){if(!s)return!1;const{KeyboardEvent:l}=xt(s.target);return l&&s instanceof l}function K6(s){if(!s)return!1;const{TouchEvent:l}=xt(s.target);return l&&s instanceof l}function yr(s){if(K6(s)){if(s.touches&&s.touches.length){const{clientX:l,clientY:i}=s.touches[0];return{x:l,y:i}}else if(s.changedTouches&&s.changedTouches.length){const{clientX:l,clientY:i}=s.changedTouches[0];return{x:l,y:i}}}return Q6(s)?{x:s.clientX,y:s.clientY}:null}const va=Object.freeze({Translate:{toString(s){if(!s)return;const{x:l,y:i}=s;return"translate3d("+(l?Math.round(l):0)+"px, "+(i?Math.round(i):0)+"px, 0)"}},Scale:{toString(s){if(!s)return;const{scaleX:l,scaleY:i}=s;return"scaleX("+l+") scaleY("+i+")"}},Transform:{toString(s){if(s)return[va.Translate.toString(s),va.Scale.toString(s)].join(" ")}},Transition:{toString(s){let{property:l,duration:i,easing:r}=s;return l+" "+i+"ms "+r}}}),ap="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function $6(s){return s.matches(ap)?s:s.querySelector(ap)}const F6={display:"none"};function J6(s){let{id:l,value:i}=s;return Ve.createElement("div",{id:l,style:F6},i)}function P6(s){let{id:l,announcement:i,ariaLiveType:r="assertive"}=s;const u={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return Ve.createElement("div",{id:l,style:u,role:"status","aria-live":r,"aria-atomic":!0},i)}function W6(){const[s,l]=h.useState("");return{announce:h.useCallback(r=>{r!=null&&l(r)},[]),announcement:s}}const bh=h.createContext(null);function eb(s){const l=h.useContext(bh);h.useEffect(()=>{if(!l)throw new Error("useDndMonitor must be used within a children of <DndContext>");return l(s)},[s,l])}function tb(){const[s]=h.useState(()=>new Set),l=h.useCallback(r=>(s.add(r),()=>s.delete(r)),[s]);return[h.useCallback(r=>{let{type:u,event:d}=r;s.forEach(f=>{var m;return(m=f[u])==null?void 0:m.call(f,d)})},[s]),l]}const nb={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},ab={onDragStart(s){let{active:l}=s;return"Picked up draggable item "+l.id+"."},onDragOver(s){let{active:l,over:i}=s;return i?"Draggable item "+l.id+" was moved over droppable area "+i.id+".":"Draggable item "+l.id+" is no longer over a droppable area."},onDragEnd(s){let{active:l,over:i}=s;return i?"Draggable item "+l.id+" was dropped over droppable area "+i.id:"Draggable item "+l.id+" was dropped."},onDragCancel(s){let{active:l}=s;return"Dragging was cancelled. Draggable item "+l.id+" was dropped."}};function lb(s){let{announcements:l=ab,container:i,hiddenTextDescribedById:r,screenReaderInstructions:u=nb}=s;const{announce:d,announcement:f}=W6(),m=Yi("DndLiveRegion"),[g,v]=h.useState(!1);if(h.useEffect(()=>{v(!0)},[]),eb(h.useMemo(()=>({onDragStart(S){let{active:T}=S;d(l.onDragStart({active:T}))},onDragMove(S){let{active:T,over:A}=S;l.onDragMove&&d(l.onDragMove({active:T,over:A}))},onDragOver(S){let{active:T,over:A}=S;d(l.onDragOver({active:T,over:A}))},onDragEnd(S){let{active:T,over:A}=S;d(l.onDragEnd({active:T,over:A}))},onDragCancel(S){let{active:T,over:A}=S;d(l.onDragCancel({active:T,over:A}))}}),[d,l])),!g)return null;const x=Ve.createElement(Ve.Fragment,null,Ve.createElement(J6,{id:r,value:u.draggable}),Ve.createElement(P6,{id:m,announcement:f}));return i?Ri.createPortal(x,i):x}var tt;(function(s){s.DragStart="dragStart",s.DragMove="dragMove",s.DragEnd="dragEnd",s.DragCancel="dragCancel",s.DragOver="dragOver",s.RegisterDroppable="registerDroppable",s.SetDroppableDisabled="setDroppableDisabled",s.UnregisterDroppable="unregisterDroppable"})(tt||(tt={}));function xr(){}function ib(s,l){return h.useMemo(()=>({sensor:s,options:l??{}}),[s,l])}function sb(){for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return h.useMemo(()=>[...l].filter(r=>r!=null),[...l])}const fn=Object.freeze({x:0,y:0});function rb(s,l){return Math.sqrt(Math.pow(s.x-l.x,2)+Math.pow(s.y-l.y,2))}function ob(s,l){const i=yr(s);if(!i)return"0 0";const r={x:(i.x-l.left)/l.width*100,y:(i.y-l.top)/l.height*100};return r.x+"% "+r.y+"%"}function cb(s,l){let{data:{value:i}}=s,{data:{value:r}}=l;return i-r}function ub(s,l){let{data:{value:i}}=s,{data:{value:r}}=l;return r-i}function lp(s){let{left:l,top:i,height:r,width:u}=s;return[{x:l,y:i},{x:l+u,y:i},{x:l,y:i+r},{x:l+u,y:i+r}]}function db(s,l){if(!s||s.length===0)return null;const[i]=s;return i[l]}const fb=s=>{let{collisionRect:l,droppableRects:i,droppableContainers:r}=s;const u=lp(l),d=[];for(const f of r){const{id:m}=f,g=i.get(m);if(g){const v=lp(g),x=u.reduce((T,A,O)=>T+rb(v[O],A),0),S=Number((x/4).toFixed(4));d.push({id:m,data:{droppableContainer:f,value:S}})}}return d.sort(cb)};function pb(s,l){const i=Math.max(l.top,s.top),r=Math.max(l.left,s.left),u=Math.min(l.left+l.width,s.left+s.width),d=Math.min(l.top+l.height,s.top+s.height),f=u-r,m=d-i;if(r<u&&i<d){const g=l.width*l.height,v=s.width*s.height,x=f*m,S=x/(g+v-x);return Number(S.toFixed(4))}return 0}const hb=s=>{let{collisionRect:l,droppableRects:i,droppableContainers:r}=s;const u=[];for(const d of r){const{id:f}=d,m=i.get(f);if(m){const g=pb(m,l);g>0&&u.push({id:f,data:{droppableContainer:d,value:g}})}}return u.sort(ub)};function mb(s,l,i){return{...s,scaleX:l&&i?l.width/i.width:1,scaleY:l&&i?l.height/i.height:1}}function vh(s,l){return s&&l?{x:s.left-l.left,y:s.top-l.top}:fn}function gb(s){return function(i){for(var r=arguments.length,u=new Array(r>1?r-1:0),d=1;d<r;d++)u[d-1]=arguments[d];return u.reduce((f,m)=>({...f,top:f.top+s*m.y,bottom:f.bottom+s*m.y,left:f.left+s*m.x,right:f.right+s*m.x}),{...i})}}const bb=gb(1);function yh(s){if(s.startsWith("matrix3d(")){const l=s.slice(9,-1).split(/, /);return{x:+l[12],y:+l[13],scaleX:+l[0],scaleY:+l[5]}}else if(s.startsWith("matrix(")){const l=s.slice(7,-1).split(/, /);return{x:+l[4],y:+l[5],scaleX:+l[0],scaleY:+l[3]}}return null}function vb(s,l,i){const r=yh(l);if(!r)return s;const{scaleX:u,scaleY:d,x:f,y:m}=r,g=s.left-f-(1-u)*parseFloat(i),v=s.top-m-(1-d)*parseFloat(i.slice(i.indexOf(" ")+1)),x=u?s.width/u:s.width,S=d?s.height/d:s.height;return{width:x,height:S,top:v,right:g+x,bottom:v+S,left:g}}const yb={ignoreTransform:!1};function zl(s,l){l===void 0&&(l=yb);let i=s.getBoundingClientRect();if(l.ignoreTransform){const{transform:v,transformOrigin:x}=xt(s).getComputedStyle(s);v&&(i=vb(i,v,x))}const{top:r,left:u,width:d,height:f,bottom:m,right:g}=i;return{top:r,left:u,width:d,height:f,bottom:m,right:g}}function ip(s){return zl(s,{ignoreTransform:!0})}function xb(s){const l=s.innerWidth,i=s.innerHeight;return{top:0,left:0,right:l,bottom:i,width:l,height:i}}function Sb(s,l){return l===void 0&&(l=xt(s).getComputedStyle(s)),l.position==="fixed"}function wb(s,l){l===void 0&&(l=xt(s).getComputedStyle(s));const i=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(u=>{const d=l[u];return typeof d=="string"?i.test(d):!1})}function Ru(s,l){const i=[];function r(u){if(l!=null&&i.length>=l||!u)return i;if(ku(u)&&u.scrollingElement!=null&&!i.includes(u.scrollingElement))return i.push(u.scrollingElement),i;if(!qi(u)||mh(u)||i.includes(u))return i;const d=xt(s).getComputedStyle(u);return u!==s&&wb(u,d)&&i.push(u),Sb(u,d)?i:r(u.parentNode)}return s?r(s):i}function xh(s){const[l]=Ru(s,1);return l??null}function Wc(s){return!Er||!s?null:jl(s)?s:Mu(s)?ku(s)||s===Ol(s).scrollingElement?window:qi(s)?s:null:null}function Sh(s){return jl(s)?s.scrollX:s.scrollLeft}function wh(s){return jl(s)?s.scrollY:s.scrollTop}function cu(s){return{x:Sh(s),y:wh(s)}}var st;(function(s){s[s.Forward=1]="Forward",s[s.Backward=-1]="Backward"})(st||(st={}));function Ch(s){return!Er||!s?!1:s===document.scrollingElement}function Eh(s){const l={x:0,y:0},i=Ch(s)?{height:window.innerHeight,width:window.innerWidth}:{height:s.clientHeight,width:s.clientWidth},r={x:s.scrollWidth-i.width,y:s.scrollHeight-i.height},u=s.scrollTop<=l.y,d=s.scrollLeft<=l.x,f=s.scrollTop>=r.y,m=s.scrollLeft>=r.x;return{isTop:u,isLeft:d,isBottom:f,isRight:m,maxScroll:r,minScroll:l}}const Cb={x:.2,y:.2};function Eb(s,l,i,r,u){let{top:d,left:f,right:m,bottom:g}=i;r===void 0&&(r=10),u===void 0&&(u=Cb);const{isTop:v,isBottom:x,isLeft:S,isRight:T}=Eh(s),A={x:0,y:0},O={x:0,y:0},D={height:l.height*u.y,width:l.width*u.x};return!v&&d<=l.top+D.height?(A.y=st.Backward,O.y=r*Math.abs((l.top+D.height-d)/D.height)):!x&&g>=l.bottom-D.height&&(A.y=st.Forward,O.y=r*Math.abs((l.bottom-D.height-g)/D.height)),!T&&m>=l.right-D.width?(A.x=st.Forward,O.x=r*Math.abs((l.right-D.width-m)/D.width)):!S&&f<=l.left+D.width&&(A.x=st.Backward,O.x=r*Math.abs((l.left+D.width-f)/D.width)),{direction:A,speed:O}}function Ab(s){if(s===document.scrollingElement){const{innerWidth:d,innerHeight:f}=window;return{top:0,left:0,right:d,bottom:f,width:d,height:f}}const{top:l,left:i,right:r,bottom:u}=s.getBoundingClientRect();return{top:l,left:i,right:r,bottom:u,width:s.clientWidth,height:s.clientHeight}}function Ah(s){return s.reduce((l,i)=>Rl(l,cu(i)),fn)}function Nb(s){return s.reduce((l,i)=>l+Sh(i),0)}function Tb(s){return s.reduce((l,i)=>l+wh(i),0)}function Nh(s,l){if(l===void 0&&(l=zl),!s)return;const{top:i,left:r,bottom:u,right:d}=l(s);xh(s)&&(u<=0||d<=0||i>=window.innerHeight||r>=window.innerWidth)&&s.scrollIntoView({block:"center",inline:"center"})}const Db=[["x",["left","right"],Nb],["y",["top","bottom"],Tb]];class ju{constructor(l,i){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Ru(i),u=Ah(r);this.rect={...l},this.width=l.width,this.height=l.height;for(const[d,f,m]of Db)for(const g of f)Object.defineProperty(this,g,{get:()=>{const v=m(r),x=u[d]-v;return this.rect[g]+x},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class zi{constructor(l){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(i=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...i)})},this.target=l}add(l,i,r){var u;(u=this.target)==null||u.addEventListener(l,i,r),this.listeners.push([l,i,r])}}function Mb(s){const{EventTarget:l}=xt(s);return s instanceof l?s:Ol(s)}function eu(s,l){const i=Math.abs(s.x),r=Math.abs(s.y);return typeof l=="number"?Math.sqrt(i**2+r**2)>l:"x"in l&&"y"in l?i>l.x&&r>l.y:"x"in l?i>l.x:"y"in l?r>l.y:!1}var an;(function(s){s.Click="click",s.DragStart="dragstart",s.Keydown="keydown",s.ContextMenu="contextmenu",s.Resize="resize",s.SelectionChange="selectionchange",s.VisibilityChange="visibilitychange"})(an||(an={}));function sp(s){s.preventDefault()}function kb(s){s.stopPropagation()}var Ne;(function(s){s.Space="Space",s.Down="ArrowDown",s.Right="ArrowRight",s.Left="ArrowLeft",s.Up="ArrowUp",s.Esc="Escape",s.Enter="Enter",s.Tab="Tab"})(Ne||(Ne={}));const Th={start:[Ne.Space,Ne.Enter],cancel:[Ne.Esc],end:[Ne.Space,Ne.Enter,Ne.Tab]},Rb=(s,l)=>{let{currentCoordinates:i}=l;switch(s.code){case Ne.Right:return{...i,x:i.x+25};case Ne.Left:return{...i,x:i.x-25};case Ne.Down:return{...i,y:i.y+25};case Ne.Up:return{...i,y:i.y-25}}};class Dh{constructor(l){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=l;const{event:{target:i}}=l;this.props=l,this.listeners=new zi(Ol(i)),this.windowListeners=new zi(xt(i)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(an.Resize,this.handleCancel),this.windowListeners.add(an.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(an.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:l,onStart:i}=this.props,r=l.node.current;r&&Nh(r),i(fn)}handleKeyDown(l){if(Nr(l)){const{active:i,context:r,options:u}=this.props,{keyboardCodes:d=Th,coordinateGetter:f=Rb,scrollBehavior:m="smooth"}=u,{code:g}=l;if(d.end.includes(g)){this.handleEnd(l);return}if(d.cancel.includes(g)){this.handleCancel(l);return}const{collisionRect:v}=r.current,x=v?{x:v.left,y:v.top}:fn;this.referenceCoordinates||(this.referenceCoordinates=x);const S=f(l,{active:i,context:r.current,currentCoordinates:x});if(S){const T=vr(S,x),A={x:0,y:0},{scrollableAncestors:O}=r.current;for(const D of O){const Y=l.code,{isTop:B,isRight:Z,isLeft:Q,isBottom:X,maxScroll:I,minScroll:F}=Eh(D),q=Ab(D),P={x:Math.min(Y===Ne.Right?q.right-q.width/2:q.right,Math.max(Y===Ne.Right?q.left:q.left+q.width/2,S.x)),y:Math.min(Y===Ne.Down?q.bottom-q.height/2:q.bottom,Math.max(Y===Ne.Down?q.top:q.top+q.height/2,S.y))},oe=Y===Ne.Right&&!Z||Y===Ne.Left&&!Q,de=Y===Ne.Down&&!X||Y===Ne.Up&&!B;if(oe&&P.x!==S.x){const ue=D.scrollLeft+T.x,ye=Y===Ne.Right&&ue<=I.x||Y===Ne.Left&&ue>=F.x;if(ye&&!T.y){D.scrollTo({left:ue,behavior:m});return}ye?A.x=D.scrollLeft-ue:A.x=Y===Ne.Right?D.scrollLeft-I.x:D.scrollLeft-F.x,A.x&&D.scrollBy({left:-A.x,behavior:m});break}else if(de&&P.y!==S.y){const ue=D.scrollTop+T.y,ye=Y===Ne.Down&&ue<=I.y||Y===Ne.Up&&ue>=F.y;if(ye&&!T.x){D.scrollTo({top:ue,behavior:m});return}ye?A.y=D.scrollTop-ue:A.y=Y===Ne.Down?D.scrollTop-I.y:D.scrollTop-F.y,A.y&&D.scrollBy({top:-A.y,behavior:m});break}}this.handleMove(l,Rl(vr(S,this.referenceCoordinates),A))}}}handleMove(l,i){const{onMove:r}=this.props;l.preventDefault(),r(i)}handleEnd(l){const{onEnd:i}=this.props;l.preventDefault(),this.detach(),i()}handleCancel(l){const{onCancel:i}=this.props;l.preventDefault(),this.detach(),i()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Dh.activators=[{eventName:"onKeyDown",handler:(s,l,i)=>{let{keyboardCodes:r=Th,onActivation:u}=l,{active:d}=i;const{code:f}=s.nativeEvent;if(r.start.includes(f)){const m=d.activatorNode.current;return m&&s.target!==m?!1:(s.preventDefault(),u==null||u({event:s.nativeEvent}),!0)}return!1}}];function rp(s){return!!(s&&"distance"in s)}function op(s){return!!(s&&"delay"in s)}class Ou{constructor(l,i,r){var u;r===void 0&&(r=Mb(l.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=l,this.events=i;const{event:d}=l,{target:f}=d;this.props=l,this.events=i,this.document=Ol(f),this.documentListeners=new zi(this.document),this.listeners=new zi(r),this.windowListeners=new zi(xt(f)),this.initialCoordinates=(u=yr(d))!=null?u:fn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:l,props:{options:{activationConstraint:i,bypassActivationConstraint:r}}}=this;if(this.listeners.add(l.move.name,this.handleMove,{passive:!1}),this.listeners.add(l.end.name,this.handleEnd),l.cancel&&this.listeners.add(l.cancel.name,this.handleCancel),this.windowListeners.add(an.Resize,this.handleCancel),this.windowListeners.add(an.DragStart,sp),this.windowListeners.add(an.VisibilityChange,this.handleCancel),this.windowListeners.add(an.ContextMenu,sp),this.documentListeners.add(an.Keydown,this.handleKeydown),i){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(op(i)){this.timeoutId=setTimeout(this.handleStart,i.delay),this.handlePending(i);return}if(rp(i)){this.handlePending(i);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(l,i){const{active:r,onPending:u}=this.props;u(r,l,this.initialCoordinates,i)}handleStart(){const{initialCoordinates:l}=this,{onStart:i}=this.props;l&&(this.activated=!0,this.documentListeners.add(an.Click,kb,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(an.SelectionChange,this.removeTextSelection),i(l))}handleMove(l){var i;const{activated:r,initialCoordinates:u,props:d}=this,{onMove:f,options:{activationConstraint:m}}=d;if(!u)return;const g=(i=yr(l))!=null?i:fn,v=vr(u,g);if(!r&&m){if(rp(m)){if(m.tolerance!=null&&eu(v,m.tolerance))return this.handleCancel();if(eu(v,m.distance))return this.handleStart()}if(op(m)&&eu(v,m.tolerance))return this.handleCancel();this.handlePending(m,v);return}l.cancelable&&l.preventDefault(),f(g)}handleEnd(){const{onAbort:l,onEnd:i}=this.props;this.detach(),this.activated||l(this.props.active),i()}handleCancel(){const{onAbort:l,onCancel:i}=this.props;this.detach(),this.activated||l(this.props.active),i()}handleKeydown(l){l.code===Ne.Esc&&this.handleCancel()}removeTextSelection(){var l;(l=this.document.getSelection())==null||l.removeAllRanges()}}const jb={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class zu extends Ou{constructor(l){const{event:i}=l,r=Ol(i.target);super(l,jb,r)}}zu.activators=[{eventName:"onPointerDown",handler:(s,l)=>{let{nativeEvent:i}=s,{onActivation:r}=l;return!i.isPrimary||i.button!==0?!1:(r==null||r({event:i}),!0)}}];const Ob={move:{name:"mousemove"},end:{name:"mouseup"}};var uu;(function(s){s[s.RightClick=2]="RightClick"})(uu||(uu={}));class zb extends Ou{constructor(l){super(l,Ob,Ol(l.event.target))}}zb.activators=[{eventName:"onMouseDown",handler:(s,l)=>{let{nativeEvent:i}=s,{onActivation:r}=l;return i.button===uu.RightClick?!1:(r==null||r({event:i}),!0)}}];const tu={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class _b extends Ou{constructor(l){super(l,tu)}static setup(){return window.addEventListener(tu.move.name,l,{capture:!1,passive:!1}),function(){window.removeEventListener(tu.move.name,l)};function l(){}}}_b.activators=[{eventName:"onTouchStart",handler:(s,l)=>{let{nativeEvent:i}=s,{onActivation:r}=l;const{touches:u}=i;return u.length>1?!1:(r==null||r({event:i}),!0)}}];var _i;(function(s){s[s.Pointer=0]="Pointer",s[s.DraggableRect=1]="DraggableRect"})(_i||(_i={}));var Sr;(function(s){s[s.TreeOrder=0]="TreeOrder",s[s.ReversedTreeOrder=1]="ReversedTreeOrder"})(Sr||(Sr={}));function Lb(s){let{acceleration:l,activator:i=_i.Pointer,canScroll:r,draggingRect:u,enabled:d,interval:f=5,order:m=Sr.TreeOrder,pointerCoordinates:g,scrollableAncestors:v,scrollableAncestorRects:x,delta:S,threshold:T}=s;const A=Hb({delta:S,disabled:!d}),[O,D]=X6(),Y=h.useRef({x:0,y:0}),B=h.useRef({x:0,y:0}),Z=h.useMemo(()=>{switch(i){case _i.Pointer:return g?{top:g.y,bottom:g.y,left:g.x,right:g.x}:null;case _i.DraggableRect:return u}},[i,u,g]),Q=h.useRef(null),X=h.useCallback(()=>{const F=Q.current;if(!F)return;const q=Y.current.x*B.current.x,P=Y.current.y*B.current.y;F.scrollBy(q,P)},[]),I=h.useMemo(()=>m===Sr.TreeOrder?[...v].reverse():v,[m,v]);h.useEffect(()=>{if(!d||!v.length||!Z){D();return}for(const F of I){if((r==null?void 0:r(F))===!1)continue;const q=v.indexOf(F),P=x[q];if(!P)continue;const{direction:oe,speed:de}=Eb(F,P,Z,l,T);for(const ue of["x","y"])A[ue][oe[ue]]||(de[ue]=0,oe[ue]=0);if(de.x>0||de.y>0){D(),Q.current=F,O(X,f),Y.current=de,B.current=oe;return}}Y.current={x:0,y:0},B.current={x:0,y:0},D()},[l,X,r,D,d,f,JSON.stringify(Z),JSON.stringify(A),O,v,I,x,JSON.stringify(T)])}const Ub={x:{[st.Backward]:!1,[st.Forward]:!1},y:{[st.Backward]:!1,[st.Forward]:!1}};function Hb(s){let{delta:l,disabled:i}=s;const r=br(l);return Vi(u=>{if(i||!r||!u)return Ub;const d={x:Math.sign(l.x-r.x),y:Math.sign(l.y-r.y)};return{x:{[st.Backward]:u.x[st.Backward]||d.x===-1,[st.Forward]:u.x[st.Forward]||d.x===1},y:{[st.Backward]:u.y[st.Backward]||d.y===-1,[st.Forward]:u.y[st.Forward]||d.y===1}}},[i,l,r])}function Zb(s,l){const i=l!=null?s.get(l):void 0,r=i?i.node.current:null;return Vi(u=>{var d;return l==null?null:(d=r??u)!=null?d:null},[r,l])}function Bb(s,l){return h.useMemo(()=>s.reduce((i,r)=>{const{sensor:u}=r,d=u.activators.map(f=>({eventName:f.eventName,handler:l(f.handler,r)}));return[...i,...d]},[]),[s,l])}var Hi;(function(s){s[s.Always=0]="Always",s[s.BeforeDragging=1]="BeforeDragging",s[s.WhileDragging=2]="WhileDragging"})(Hi||(Hi={}));var du;(function(s){s.Optimized="optimized"})(du||(du={}));const cp=new Map;function qb(s,l){let{dragging:i,dependencies:r,config:u}=l;const[d,f]=h.useState(null),{frequency:m,measure:g,strategy:v}=u,x=h.useRef(s),S=Y(),T=Ui(S),A=h.useCallback(function(B){B===void 0&&(B=[]),!T.current&&f(Z=>Z===null?B:Z.concat(B.filter(Q=>!Z.includes(Q))))},[T]),O=h.useRef(null),D=Vi(B=>{if(S&&!i)return cp;if(!B||B===cp||x.current!==s||d!=null){const Z=new Map;for(let Q of s){if(!Q)continue;if(d&&d.length>0&&!d.includes(Q.id)&&Q.rect.current){Z.set(Q.id,Q.rect.current);continue}const X=Q.node.current,I=X?new ju(g(X),X):null;Q.rect.current=I,I&&Z.set(Q.id,I)}return Z}return B},[s,d,i,S,g]);return h.useEffect(()=>{x.current=s},[s]),h.useEffect(()=>{S||A()},[i,S]),h.useEffect(()=>{d&&d.length>0&&f(null)},[JSON.stringify(d)]),h.useEffect(()=>{S||typeof m!="number"||O.current!==null||(O.current=setTimeout(()=>{A(),O.current=null},m))},[m,S,A,...r]),{droppableRects:D,measureDroppableContainers:A,measuringScheduled:d!=null};function Y(){switch(v){case Hi.Always:return!1;case Hi.BeforeDragging:return i;default:return!i}}}function _u(s,l){return Vi(i=>s?i||(typeof l=="function"?l(s):s):null,[l,s])}function Vb(s,l){return _u(s,l)}function Yb(s){let{callback:l,disabled:i}=s;const r=Ar(l),u=h.useMemo(()=>{if(i||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:d}=window;return new d(r)},[r,i]);return h.useEffect(()=>()=>u==null?void 0:u.disconnect(),[u]),u}function Tr(s){let{callback:l,disabled:i}=s;const r=Ar(l),u=h.useMemo(()=>{if(i||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:d}=window;return new d(r)},[i]);return h.useEffect(()=>()=>u==null?void 0:u.disconnect(),[u]),u}function Ib(s){return new ju(zl(s),s)}function up(s,l,i){l===void 0&&(l=Ib);const[r,u]=h.useState(null);function d(){u(g=>{if(!s)return null;if(s.isConnected===!1){var v;return(v=g??i)!=null?v:null}const x=l(s);return JSON.stringify(g)===JSON.stringify(x)?g:x})}const f=Yb({callback(g){if(s)for(const v of g){const{type:x,target:S}=v;if(x==="childList"&&S instanceof HTMLElement&&S.contains(s)){d();break}}}}),m=Tr({callback:d});return dn(()=>{d(),s?(m==null||m.observe(s),f==null||f.observe(document.body,{childList:!0,subtree:!0})):(m==null||m.disconnect(),f==null||f.disconnect())},[s]),r}function Gb(s){const l=_u(s);return vh(s,l)}const dp=[];function Xb(s){const l=h.useRef(s),i=Vi(r=>s?r&&r!==dp&&s&&l.current&&s.parentNode===l.current.parentNode?r:Ru(s):dp,[s]);return h.useEffect(()=>{l.current=s},[s]),i}function Qb(s){const[l,i]=h.useState(null),r=h.useRef(s),u=h.useCallback(d=>{const f=Wc(d.target);f&&i(m=>m?(m.set(f,cu(f)),new Map(m)):null)},[]);return h.useEffect(()=>{const d=r.current;if(s!==d){f(d);const m=s.map(g=>{const v=Wc(g);return v?(v.addEventListener("scroll",u,{passive:!0}),[v,cu(v)]):null}).filter(g=>g!=null);i(m.length?new Map(m):null),r.current=s}return()=>{f(s),f(d)};function f(m){m.forEach(g=>{const v=Wc(g);v==null||v.removeEventListener("scroll",u)})}},[u,s]),h.useMemo(()=>s.length?l?Array.from(l.values()).reduce((d,f)=>Rl(d,f),fn):Ah(s):fn,[s,l])}function fp(s,l){l===void 0&&(l=[]);const i=h.useRef(null);return h.useEffect(()=>{i.current=null},l),h.useEffect(()=>{const r=s!==fn;r&&!i.current&&(i.current=s),!r&&i.current&&(i.current=null)},[s]),i.current?vr(s,i.current):fn}function Kb(s){h.useEffect(()=>{if(!Er)return;const l=s.map(i=>{let{sensor:r}=i;return r.setup==null?void 0:r.setup()});return()=>{for(const i of l)i==null||i()}},s.map(l=>{let{sensor:i}=l;return i}))}function $b(s,l){return h.useMemo(()=>s.reduce((i,r)=>{let{eventName:u,handler:d}=r;return i[u]=f=>{d(f,l)},i},{}),[s,l])}function Mh(s){return h.useMemo(()=>s?xb(s):null,[s])}const pp=[];function Fb(s,l){l===void 0&&(l=zl);const[i]=s,r=Mh(i?xt(i):null),[u,d]=h.useState(pp);function f(){d(()=>s.length?s.map(g=>Ch(g)?r:new ju(l(g),g)):pp)}const m=Tr({callback:f});return dn(()=>{m==null||m.disconnect(),f(),s.forEach(g=>m==null?void 0:m.observe(g))},[s]),u}function kh(s){if(!s)return null;if(s.children.length>1)return s;const l=s.children[0];return qi(l)?l:s}function Jb(s){let{measure:l}=s;const[i,r]=h.useState(null),u=h.useCallback(v=>{for(const{target:x}of v)if(qi(x)){r(S=>{const T=l(x);return S?{...S,width:T.width,height:T.height}:T});break}},[l]),d=Tr({callback:u}),f=h.useCallback(v=>{const x=kh(v);d==null||d.disconnect(),x&&(d==null||d.observe(x)),r(x?l(x):null)},[l,d]),[m,g]=gr(f);return h.useMemo(()=>({nodeRef:m,rect:i,setRef:g}),[i,m,g])}const Pb=[{sensor:zu,options:{}},{sensor:Dh,options:{}}],Wb={current:{}},fr={draggable:{measure:ip},droppable:{measure:ip,strategy:Hi.WhileDragging,frequency:du.Optimized},dragOverlay:{measure:zl}};class Li extends Map{get(l){var i;return l!=null&&(i=super.get(l))!=null?i:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(l=>{let{disabled:i}=l;return!i})}getNodeFor(l){var i,r;return(i=(r=this.get(l))==null?void 0:r.node.current)!=null?i:void 0}}const e4={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Li,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:xr},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:fr,measureDroppableContainers:xr,windowRect:null,measuringScheduled:!1},Rh={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:xr,draggableNodes:new Map,over:null,measureDroppableContainers:xr},Ii=h.createContext(Rh),jh=h.createContext(e4);function t4(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Li}}}function n4(s,l){switch(l.type){case tt.DragStart:return{...s,draggable:{...s.draggable,initialCoordinates:l.initialCoordinates,active:l.active}};case tt.DragMove:return s.draggable.active==null?s:{...s,draggable:{...s.draggable,translate:{x:l.coordinates.x-s.draggable.initialCoordinates.x,y:l.coordinates.y-s.draggable.initialCoordinates.y}}};case tt.DragEnd:case tt.DragCancel:return{...s,draggable:{...s.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case tt.RegisterDroppable:{const{element:i}=l,{id:r}=i,u=new Li(s.droppable.containers);return u.set(r,i),{...s,droppable:{...s.droppable,containers:u}}}case tt.SetDroppableDisabled:{const{id:i,key:r,disabled:u}=l,d=s.droppable.containers.get(i);if(!d||r!==d.key)return s;const f=new Li(s.droppable.containers);return f.set(i,{...d,disabled:u}),{...s,droppable:{...s.droppable,containers:f}}}case tt.UnregisterDroppable:{const{id:i,key:r}=l,u=s.droppable.containers.get(i);if(!u||r!==u.key)return s;const d=new Li(s.droppable.containers);return d.delete(i),{...s,droppable:{...s.droppable,containers:d}}}default:return s}}function a4(s){let{disabled:l}=s;const{active:i,activatorEvent:r,draggableNodes:u}=h.useContext(Ii),d=br(r),f=br(i==null?void 0:i.id);return h.useEffect(()=>{if(!l&&!r&&d&&f!=null){if(!Nr(d)||document.activeElement===d.target)return;const m=u.get(f);if(!m)return;const{activatorNode:g,node:v}=m;if(!g.current&&!v.current)return;requestAnimationFrame(()=>{for(const x of[g.current,v.current]){if(!x)continue;const S=$6(x);if(S){S.focus();break}}})}},[r,l,u,f,d]),null}function Oh(s,l){let{transform:i,...r}=l;return s!=null&&s.length?s.reduce((u,d)=>d({transform:u,...r}),i):i}function l4(s){return h.useMemo(()=>({draggable:{...fr.draggable,...s==null?void 0:s.draggable},droppable:{...fr.droppable,...s==null?void 0:s.droppable},dragOverlay:{...fr.dragOverlay,...s==null?void 0:s.dragOverlay}}),[s==null?void 0:s.draggable,s==null?void 0:s.droppable,s==null?void 0:s.dragOverlay])}function i4(s){let{activeNode:l,measure:i,initialRect:r,config:u=!0}=s;const d=h.useRef(!1),{x:f,y:m}=typeof u=="boolean"?{x:u,y:u}:u;dn(()=>{if(!f&&!m||!l){d.current=!1;return}if(d.current||!r)return;const v=l==null?void 0:l.node.current;if(!v||v.isConnected===!1)return;const x=i(v),S=vh(x,r);if(f||(S.x=0),m||(S.y=0),d.current=!0,Math.abs(S.x)>0||Math.abs(S.y)>0){const T=xh(v);T&&T.scrollBy({top:S.y,left:S.x})}},[l,f,m,r,i])}const Dr=h.createContext({...fn,scaleX:1,scaleY:1});var ba;(function(s){s[s.Uninitialized=0]="Uninitialized",s[s.Initializing=1]="Initializing",s[s.Initialized=2]="Initialized"})(ba||(ba={}));const s4=h.memo(function(l){var i,r,u,d;let{id:f,accessibility:m,autoScroll:g=!0,children:v,sensors:x=Pb,collisionDetection:S=hb,measuring:T,modifiers:A,...O}=l;const D=h.useReducer(n4,void 0,t4),[Y,B]=D,[Z,Q]=tb(),[X,I]=h.useState(ba.Uninitialized),F=X===ba.Initialized,{draggable:{active:q,nodes:P,translate:oe},droppable:{containers:de}}=Y,ue=q!=null?P.get(q):null,ye=h.useRef({initial:null,translated:null}),Te=h.useMemo(()=>{var Ge;return q!=null?{id:q,data:(Ge=ue==null?void 0:ue.data)!=null?Ge:Wb,rect:ye}:null},[q,ue]),_e=h.useRef(null),[ae,M]=h.useState(null),[V,W]=h.useState(null),ce=Ui(O,Object.values(O)),ge=Yi("DndDescribedBy",f),E=h.useMemo(()=>de.getEnabled(),[de]),_=l4(T),{droppableRects:K,measureDroppableContainers:J,measuringScheduled:G}=qb(E,{dragging:F,dependencies:[oe.x,oe.y],config:_.droppable}),$=Zb(P,q),ne=h.useMemo(()=>V?yr(V):null,[V]),re=Ya(),ie=Vb($,_.draggable.measure);i4({activeNode:q!=null?P.get(q):null,config:re.layoutShiftCompensation,initialRect:ie,measure:_.draggable.measure});const fe=up($,_.draggable.measure,ie),St=up($?$.parentElement:null),nt=h.useRef({activatorEvent:null,active:null,activeNode:$,collisionRect:null,collisions:null,droppableRects:K,draggableNodes:P,draggingNode:null,draggingNodeRect:null,droppableContainers:de,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),qt=de.getNodeFor((i=nt.current.over)==null?void 0:i.id),qe=Jb({measure:_.dragOverlay.measure}),pn=(r=qe.nodeRef.current)!=null?r:$,hn=F?(u=qe.rect)!=null?u:fe:null,Gi=!!(qe.nodeRef.current&&qe.rect),_l=Gb(Gi?null:fe),ya=Mh(pn?xt(pn):null),Vt=Xb(F?qt??$:null),Gn=Fb(Vt),qa=Oh(A,{transform:{x:oe.x-_l.x,y:oe.y-_l.y,scaleX:1,scaleY:1},activatorEvent:V,active:Te,activeNodeRect:fe,containerNodeRect:St,draggingNodeRect:hn,over:nt.current.over,overlayNodeRect:qe.rect,scrollableAncestors:Vt,scrollableAncestorRects:Gn,windowRect:ya}),Xi=ne?Rl(ne,oe):null,ft=Qb(Vt),Mr=fp(ft),Qi=fp(ft,[fe]),wn=Rl(qa,Mr),ln=hn?bb(hn,qa):null,xa=Te&&ln?S({active:Te,collisionRect:ln,droppableRects:K,droppableContainers:E,pointerCoordinates:Xi}):null,Ll=db(xa,"id"),[mn,Ki]=h.useState(null),Sa=Gi?qa:Rl(qa,Qi),gt=mb(Sa,(d=mn==null?void 0:mn.rect)!=null?d:null,fe),Yt=h.useRef(null),pt=h.useCallback((Ge,Xe)=>{let{sensor:at,options:wt}=Xe;if(_e.current==null)return;const Ct=P.get(_e.current);if(!Ct)return;const ht=Ge.nativeEvent,Et=new at({active:_e.current,activeNode:Ct,event:ht,options:wt,context:nt,onAbort(We){if(!P.get(We))return;const{onDragAbort:jt}=ce.current,Gt={id:We};jt==null||jt(Gt),Z({type:"onDragAbort",event:Gt})},onPending(We,sn,jt,Gt){if(!P.get(We))return;const{onDragPending:En}=ce.current,rn={id:We,constraint:sn,initialCoordinates:jt,offset:Gt};En==null||En(rn),Z({type:"onDragPending",event:rn})},onStart(We){const sn=_e.current;if(sn==null)return;const jt=P.get(sn);if(!jt)return;const{onDragStart:Gt}=ce.current,Cn={activatorEvent:ht,active:{id:sn,data:jt.data,rect:ye}};Ri.unstable_batchedUpdates(()=>{Gt==null||Gt(Cn),I(ba.Initializing),B({type:tt.DragStart,initialCoordinates:We,active:sn}),Z({type:"onDragStart",event:Cn}),M(Yt.current),W(ht)})},onMove(We){B({type:tt.DragMove,coordinates:We})},onEnd:It(tt.DragEnd),onCancel:It(tt.DragCancel)});Yt.current=Et;function It(We){return async function(){const{active:jt,collisions:Gt,over:Cn,scrollAdjustedTranslate:En}=nt.current;let rn=null;if(jt&&En){const{cancelDrop:Xn}=ce.current;rn={activatorEvent:ht,active:jt,collisions:Gt,delta:En,over:Cn},We===tt.DragEnd&&typeof Xn=="function"&&await Promise.resolve(Xn(rn))&&(We=tt.DragCancel)}_e.current=null,Ri.unstable_batchedUpdates(()=>{B({type:We}),I(ba.Uninitialized),Ki(null),M(null),W(null),Yt.current=null;const Xn=We===tt.DragEnd?"onDragEnd":"onDragCancel";if(rn){const Xt=ce.current[Xn];Xt==null||Xt(rn),Z({type:Xn,event:rn})}})}}},[P]),kr=h.useCallback((Ge,Xe)=>(at,wt)=>{const Ct=at.nativeEvent,ht=P.get(wt);if(_e.current!==null||!ht||Ct.dndKit||Ct.defaultPrevented)return;const Et={active:ht};Ge(at,Xe.options,Et)===!0&&(Ct.dndKit={capturedBy:Xe.sensor},_e.current=wt,pt(at,Xe))},[P,pt]),$i=Bb(x,kr);Kb(x),dn(()=>{fe&&X===ba.Initializing&&I(ba.Initialized)},[fe,X]),h.useEffect(()=>{const{onDragMove:Ge}=ce.current,{active:Xe,activatorEvent:at,collisions:wt,over:Ct}=nt.current;if(!Xe||!at)return;const ht={active:Xe,activatorEvent:at,collisions:wt,delta:{x:wn.x,y:wn.y},over:Ct};Ri.unstable_batchedUpdates(()=>{Ge==null||Ge(ht),Z({type:"onDragMove",event:ht})})},[wn.x,wn.y]),h.useEffect(()=>{const{active:Ge,activatorEvent:Xe,collisions:at,droppableContainers:wt,scrollAdjustedTranslate:Ct}=nt.current;if(!Ge||_e.current==null||!Xe||!Ct)return;const{onDragOver:ht}=ce.current,Et=wt.get(Ll),It=Et&&Et.rect.current?{id:Et.id,rect:Et.rect.current,data:Et.data,disabled:Et.disabled}:null,We={active:Ge,activatorEvent:Xe,collisions:at,delta:{x:Ct.x,y:Ct.y},over:It};Ri.unstable_batchedUpdates(()=>{Ki(It),ht==null||ht(We),Z({type:"onDragOver",event:We})})},[Ll]),dn(()=>{nt.current={activatorEvent:V,active:Te,activeNode:$,collisionRect:ln,collisions:xa,droppableRects:K,draggableNodes:P,draggingNode:pn,draggingNodeRect:hn,droppableContainers:de,over:mn,scrollableAncestors:Vt,scrollAdjustedTranslate:wn},ye.current={initial:hn,translated:ln}},[Te,$,xa,ln,P,pn,hn,K,de,mn,Vt,wn]),Lb({...re,delta:oe,draggingRect:ln,pointerCoordinates:Xi,scrollableAncestors:Vt,scrollableAncestorRects:Gn});const Rr=h.useMemo(()=>({active:Te,activeNode:$,activeNodeRect:fe,activatorEvent:V,collisions:xa,containerNodeRect:St,dragOverlay:qe,draggableNodes:P,droppableContainers:de,droppableRects:K,over:mn,measureDroppableContainers:J,scrollableAncestors:Vt,scrollableAncestorRects:Gn,measuringConfiguration:_,measuringScheduled:G,windowRect:ya}),[Te,$,fe,V,xa,St,qe,P,de,K,mn,J,Vt,Gn,_,G,ya]),Va=h.useMemo(()=>({activatorEvent:V,activators:$i,active:Te,activeNodeRect:fe,ariaDescribedById:{draggable:ge},dispatch:B,draggableNodes:P,over:mn,measureDroppableContainers:J}),[V,$i,Te,fe,B,ge,P,mn,J]);return Ve.createElement(bh.Provider,{value:Q},Ve.createElement(Ii.Provider,{value:Va},Ve.createElement(jh.Provider,{value:Rr},Ve.createElement(Dr.Provider,{value:gt},v)),Ve.createElement(a4,{disabled:(m==null?void 0:m.restoreFocus)===!1})),Ve.createElement(lb,{...m,hiddenTextDescribedById:ge}));function Ya(){const Ge=(ae==null?void 0:ae.autoScrollEnabled)===!1,Xe=typeof g=="object"?g.enabled===!1:g===!1,at=F&&!Ge&&!Xe;return typeof g=="object"?{...g,enabled:at}:{enabled:at}}}),r4=h.createContext(null),hp="button",o4="Draggable";function c4(s){let{id:l,data:i,disabled:r=!1,attributes:u}=s;const d=Yi(o4),{activators:f,activatorEvent:m,active:g,activeNodeRect:v,ariaDescribedById:x,draggableNodes:S,over:T}=h.useContext(Ii),{role:A=hp,roleDescription:O="draggable",tabIndex:D=0}=u??{},Y=(g==null?void 0:g.id)===l,B=h.useContext(Y?Dr:r4),[Z,Q]=gr(),[X,I]=gr(),F=$b(f,l),q=Ui(i);dn(()=>(S.set(l,{id:l,key:d,node:Z,activatorNode:X,data:q}),()=>{const oe=S.get(l);oe&&oe.key===d&&S.delete(l)}),[S,l]);const P=h.useMemo(()=>({role:A,tabIndex:D,"aria-disabled":r,"aria-pressed":Y&&A===hp?!0:void 0,"aria-roledescription":O,"aria-describedby":x.draggable}),[r,A,D,Y,O,x.draggable]);return{active:g,activatorEvent:m,activeNodeRect:v,attributes:P,isDragging:Y,listeners:r?void 0:F,node:Z,over:T,setNodeRef:Q,setActivatorNodeRef:I,transform:B}}function zh(){return h.useContext(jh)}const u4="Droppable",d4={timeout:25};function f4(s){let{data:l,disabled:i=!1,id:r,resizeObserverConfig:u}=s;const d=Yi(u4),{active:f,dispatch:m,over:g,measureDroppableContainers:v}=h.useContext(Ii),x=h.useRef({disabled:i}),S=h.useRef(!1),T=h.useRef(null),A=h.useRef(null),{disabled:O,updateMeasurementsFor:D,timeout:Y}={...d4,...u},B=Ui(D??r),Z=h.useCallback(()=>{if(!S.current){S.current=!0;return}A.current!=null&&clearTimeout(A.current),A.current=setTimeout(()=>{v(Array.isArray(B.current)?B.current:[B.current]),A.current=null},Y)},[Y]),Q=Tr({callback:Z,disabled:O||!f}),X=h.useCallback((P,oe)=>{Q&&(oe&&(Q.unobserve(oe),S.current=!1),P&&Q.observe(P))},[Q]),[I,F]=gr(X),q=Ui(l);return h.useEffect(()=>{!Q||!I.current||(Q.disconnect(),S.current=!1,Q.observe(I.current))},[I,Q]),h.useEffect(()=>(m({type:tt.RegisterDroppable,element:{id:r,key:d,disabled:i,node:I,rect:T,data:q}}),()=>m({type:tt.UnregisterDroppable,key:d,id:r})),[r]),h.useEffect(()=>{i!==x.current.disabled&&(m({type:tt.SetDroppableDisabled,id:r,key:d,disabled:i}),x.current.disabled=i)},[r,d,i,m]),{active:f,rect:T,isOver:(g==null?void 0:g.id)===r,node:I,over:g,setNodeRef:F}}function p4(s){let{animation:l,children:i}=s;const[r,u]=h.useState(null),[d,f]=h.useState(null),m=br(i);return!i&&!r&&m&&u(m),dn(()=>{if(!d)return;const g=r==null?void 0:r.key,v=r==null?void 0:r.props.id;if(g==null||v==null){u(null);return}Promise.resolve(l(v,d)).then(()=>{u(null)})},[l,r,d]),Ve.createElement(Ve.Fragment,null,i,r?h.cloneElement(r,{ref:f}):null)}const h4={x:0,y:0,scaleX:1,scaleY:1};function m4(s){let{children:l}=s;return Ve.createElement(Ii.Provider,{value:Rh},Ve.createElement(Dr.Provider,{value:h4},l))}const g4={position:"fixed",touchAction:"none"},b4=s=>Nr(s)?"transform 250ms ease":void 0,v4=h.forwardRef((s,l)=>{let{as:i,activatorEvent:r,adjustScale:u,children:d,className:f,rect:m,style:g,transform:v,transition:x=b4}=s;if(!m)return null;const S=u?v:{...v,scaleX:1,scaleY:1},T={...g4,width:m.width,height:m.height,top:m.top,left:m.left,transform:va.Transform.toString(S),transformOrigin:u&&r?ob(r,m):void 0,transition:typeof x=="function"?x(r):x,...g};return Ve.createElement(i,{className:f,style:T,ref:l},d)}),y4=s=>l=>{let{active:i,dragOverlay:r}=l;const u={},{styles:d,className:f}=s;if(d!=null&&d.active)for(const[m,g]of Object.entries(d.active))g!==void 0&&(u[m]=i.node.style.getPropertyValue(m),i.node.style.setProperty(m,g));if(d!=null&&d.dragOverlay)for(const[m,g]of Object.entries(d.dragOverlay))g!==void 0&&r.node.style.setProperty(m,g);return f!=null&&f.active&&i.node.classList.add(f.active),f!=null&&f.dragOverlay&&r.node.classList.add(f.dragOverlay),function(){for(const[g,v]of Object.entries(u))i.node.style.setProperty(g,v);f!=null&&f.active&&i.node.classList.remove(f.active)}},x4=s=>{let{transform:{initial:l,final:i}}=s;return[{transform:va.Transform.toString(l)},{transform:va.Transform.toString(i)}]},S4={duration:250,easing:"ease",keyframes:x4,sideEffects:y4({styles:{active:{opacity:"0"}}})};function w4(s){let{config:l,draggableNodes:i,droppableContainers:r,measuringConfiguration:u}=s;return Ar((d,f)=>{if(l===null)return;const m=i.get(d);if(!m)return;const g=m.node.current;if(!g)return;const v=kh(f);if(!v)return;const{transform:x}=xt(f).getComputedStyle(f),S=yh(x);if(!S)return;const T=typeof l=="function"?l:C4(l);return Nh(g,u.draggable.measure),T({active:{id:d,data:m.data,node:g,rect:u.draggable.measure(g)},draggableNodes:i,dragOverlay:{node:f,rect:u.dragOverlay.measure(v)},droppableContainers:r,measuringConfiguration:u,transform:S})})}function C4(s){const{duration:l,easing:i,sideEffects:r,keyframes:u}={...S4,...s};return d=>{let{active:f,dragOverlay:m,transform:g,...v}=d;if(!l)return;const x={x:m.rect.left-f.rect.left,y:m.rect.top-f.rect.top},S={scaleX:g.scaleX!==1?f.rect.width*g.scaleX/m.rect.width:1,scaleY:g.scaleY!==1?f.rect.height*g.scaleY/m.rect.height:1},T={x:g.x-x.x,y:g.y-x.y,...S},A=u({...v,active:f,dragOverlay:m,transform:{initial:g,final:T}}),[O]=A,D=A[A.length-1];if(JSON.stringify(O)===JSON.stringify(D))return;const Y=r==null?void 0:r({active:f,dragOverlay:m,...v}),B=m.node.animate(A,{duration:l,easing:i,fill:"forwards"});return new Promise(Z=>{B.onfinish=()=>{Y==null||Y(),Z()}})}}let mp=0;function E4(s){return h.useMemo(()=>{if(s!=null)return mp++,mp},[s])}const A4=Ve.memo(s=>{let{adjustScale:l=!1,children:i,dropAnimation:r,style:u,transition:d,modifiers:f,wrapperElement:m="div",className:g,zIndex:v=999}=s;const{activatorEvent:x,active:S,activeNodeRect:T,containerNodeRect:A,draggableNodes:O,droppableContainers:D,dragOverlay:Y,over:B,measuringConfiguration:Z,scrollableAncestors:Q,scrollableAncestorRects:X,windowRect:I}=zh(),F=h.useContext(Dr),q=E4(S==null?void 0:S.id),P=Oh(f,{activatorEvent:x,active:S,activeNodeRect:T,containerNodeRect:A,draggingNodeRect:Y.rect,over:B,overlayNodeRect:Y.rect,scrollableAncestors:Q,scrollableAncestorRects:X,transform:F,windowRect:I}),oe=_u(T),de=w4({config:r,draggableNodes:O,droppableContainers:D,measuringConfiguration:Z}),ue=oe?Y.setRef:void 0;return Ve.createElement(m4,null,Ve.createElement(p4,{animation:de},S&&q?Ve.createElement(v4,{key:q,id:S.id,ref:ue,as:m,activatorEvent:x,adjustScale:l,className:g,transition:d,rect:oe,style:{zIndex:v,...u},transform:P},i):null))});function _h(s,l,i){const r=s.slice();return r.splice(i<0?r.length+i:i,0,r.splice(l,1)[0]),r}function N4(s,l){return s.reduce((i,r,u)=>{const d=l.get(r);return d&&(i[u]=d),i},Array(s.length))}function ur(s){return s!==null&&s>=0}function T4(s,l){if(s===l)return!0;if(s.length!==l.length)return!1;for(let i=0;i<s.length;i++)if(s[i]!==l[i])return!1;return!0}function D4(s){return typeof s=="boolean"?{draggable:s,droppable:s}:s}const Lh=s=>{let{rects:l,activeIndex:i,overIndex:r,index:u}=s;const d=_h(l,r,i),f=l[u],m=d[u];return!m||!f?null:{x:m.left-f.left,y:m.top-f.top,scaleX:m.width/f.width,scaleY:m.height/f.height}},dr={scaleX:1,scaleY:1},M4=s=>{var l;let{activeIndex:i,activeNodeRect:r,index:u,rects:d,overIndex:f}=s;const m=(l=d[i])!=null?l:r;if(!m)return null;if(u===i){const v=d[f];return v?{x:0,y:i<f?v.top+v.height-(m.top+m.height):v.top-m.top,...dr}:null}const g=k4(d,u,i);return u>i&&u<=f?{x:0,y:-m.height-g,...dr}:u<i&&u>=f?{x:0,y:m.height+g,...dr}:{x:0,y:0,...dr}};function k4(s,l,i){const r=s[l],u=s[l-1],d=s[l+1];return r?i<l?u?r.top-(u.top+u.height):d?d.top-(r.top+r.height):0:d?d.top-(r.top+r.height):u?r.top-(u.top+u.height):0:0}const Uh="Sortable",Hh=Ve.createContext({activeIndex:-1,containerId:Uh,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Lh,disabled:{draggable:!1,droppable:!1}});function R4(s){let{children:l,id:i,items:r,strategy:u=Lh,disabled:d=!1}=s;const{active:f,dragOverlay:m,droppableRects:g,over:v,measureDroppableContainers:x}=zh(),S=Yi(Uh,i),T=m.rect!==null,A=h.useMemo(()=>r.map(F=>typeof F=="object"&&"id"in F?F.id:F),[r]),O=f!=null,D=f?A.indexOf(f.id):-1,Y=v?A.indexOf(v.id):-1,B=h.useRef(A),Z=!T4(A,B.current),Q=Y!==-1&&D===-1||Z,X=D4(d);dn(()=>{Z&&O&&x(A)},[Z,A,O,x]),h.useEffect(()=>{B.current=A},[A]);const I=h.useMemo(()=>({activeIndex:D,containerId:S,disabled:X,disableTransforms:Q,items:A,overIndex:Y,useDragOverlay:T,sortedRects:N4(A,g),strategy:u}),[D,S,X.draggable,X.droppable,Q,A,Y,g,T,u]);return Ve.createElement(Hh.Provider,{value:I},l)}const j4=s=>{let{id:l,items:i,activeIndex:r,overIndex:u}=s;return _h(i,r,u).indexOf(l)},O4=s=>{let{containerId:l,isSorting:i,wasDragging:r,index:u,items:d,newIndex:f,previousItems:m,previousContainerId:g,transition:v}=s;return!v||!r||m!==d&&u===f?!1:i?!0:f!==u&&l===g},z4={duration:200,easing:"ease"},Zh="transform",_4=va.Transition.toString({property:Zh,duration:0,easing:"linear"}),L4={roleDescription:"sortable"};function U4(s){let{disabled:l,index:i,node:r,rect:u}=s;const[d,f]=h.useState(null),m=h.useRef(i);return dn(()=>{if(!l&&i!==m.current&&r.current){const g=u.current;if(g){const v=zl(r.current,{ignoreTransform:!0}),x={x:g.left-v.left,y:g.top-v.top,scaleX:g.width/v.width,scaleY:g.height/v.height};(x.x||x.y)&&f(x)}}i!==m.current&&(m.current=i)},[l,i,r,u]),h.useEffect(()=>{d&&f(null)},[d]),d}function H4(s){let{animateLayoutChanges:l=O4,attributes:i,disabled:r,data:u,getNewIndex:d=j4,id:f,strategy:m,resizeObserverConfig:g,transition:v=z4}=s;const{items:x,containerId:S,activeIndex:T,disabled:A,disableTransforms:O,sortedRects:D,overIndex:Y,useDragOverlay:B,strategy:Z}=h.useContext(Hh),Q=Z4(r,A),X=x.indexOf(f),I=h.useMemo(()=>({sortable:{containerId:S,index:X,items:x},...u}),[S,u,X,x]),F=h.useMemo(()=>x.slice(x.indexOf(f)),[x,f]),{rect:q,node:P,isOver:oe,setNodeRef:de}=f4({id:f,data:I,disabled:Q.droppable,resizeObserverConfig:{updateMeasurementsFor:F,...g}}),{active:ue,activatorEvent:ye,activeNodeRect:Te,attributes:_e,setNodeRef:ae,listeners:M,isDragging:V,over:W,setActivatorNodeRef:ce,transform:ge}=c4({id:f,data:I,attributes:{...L4,...i},disabled:Q.draggable}),E=G6(de,ae),_=!!ue,K=_&&!O&&ur(T)&&ur(Y),J=!B&&V,G=J&&K?ge:null,ne=K?G??(m??Z)({rects:D,activeNodeRect:Te,activeIndex:T,overIndex:Y,index:X}):null,re=ur(T)&&ur(Y)?d({id:f,items:x,activeIndex:T,overIndex:Y}):X,ie=ue==null?void 0:ue.id,fe=h.useRef({activeId:ie,items:x,newIndex:re,containerId:S}),St=x!==fe.current.items,nt=l({active:ue,containerId:S,isDragging:V,isSorting:_,id:f,index:X,items:x,newIndex:fe.current.newIndex,previousItems:fe.current.items,previousContainerId:fe.current.containerId,transition:v,wasDragging:fe.current.activeId!=null}),qt=U4({disabled:!nt,index:X,node:P,rect:q});return h.useEffect(()=>{_&&fe.current.newIndex!==re&&(fe.current.newIndex=re),S!==fe.current.containerId&&(fe.current.containerId=S),x!==fe.current.items&&(fe.current.items=x)},[_,re,S,x]),h.useEffect(()=>{if(ie===fe.current.activeId)return;if(ie!=null&&fe.current.activeId==null){fe.current.activeId=ie;return}const pn=setTimeout(()=>{fe.current.activeId=ie},50);return()=>clearTimeout(pn)},[ie]),{active:ue,activeIndex:T,attributes:_e,data:I,rect:q,index:X,newIndex:re,items:x,isOver:oe,isSorting:_,isDragging:V,listeners:M,node:P,overIndex:Y,over:W,setNodeRef:E,setActivatorNodeRef:ce,setDroppableNodeRef:de,setDraggableNodeRef:ae,transform:qt??ne,transition:qe()};function qe(){if(qt||St&&fe.current.newIndex===X)return _4;if(!(J&&!Nr(ye)||!v)&&(_||nt))return va.Transition.toString({...v,property:Zh})}}function Z4(s,l){var i,r;return typeof s=="boolean"?{draggable:s,droppable:!1}:{draggable:(i=s==null?void 0:s.draggable)!=null?i:l.draggable,droppable:(r=s==null?void 0:s.droppable)!=null?r:l.droppable}}Ne.Down,Ne.Right,Ne.Up,Ne.Left;const Bh="ennabl_builder_sprints";function B4(){try{return JSON.parse(localStorage.getItem(Bh))||[]}catch{return[]}}function gp(s){localStorage.setItem(Bh,JSON.stringify(s))}function q4({name:s,startDate:l,endDate:i}){return{id:`sprint-${Date.now()}`,name:s.trim(),startDate:l||"",endDate:i||"",createdAt:new Date().toISOString()}}const nu=s=>new Date(s+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"});function fu(s){return s.startDate&&s.endDate?`${s.name} · ${nu(s.startDate)} – ${nu(s.endDate)}`:s.startDate?`${s.name} · from ${nu(s.startDate)}`:s.name}function V4({prd:s,projectId:l,sprints:i=[],onClose:r,onSave:u}){const[d,f]=h.useState((s==null?void 0:s.title)??""),[m,g]=h.useState((s==null?void 0:s.content)??""),[v,x]=h.useState((s==null?void 0:s.sprintIds)??[]),S=h.useRef();function T(D){const Y=D.target.files[0];if(!Y)return;const B=Y.name.replace(/\.md$/i,"").replace(/[-_]/g," "),Z=new FileReader;Z.onload=Q=>{d||f(B),g(Q.target.result)},Z.readAsText(Y)}function A(D){x(Y=>Y.includes(D)?Y.filter(B=>B!==D):[...Y,D])}function O(){const D=d.trim();D&&u({title:D,content:m,sprintIds:v})}return b.jsx("div",{className:"prd-editor-scrim",onClick:D=>D.target===D.currentTarget&&r(),children:b.jsxs("div",{className:"prd-editor-modal",children:[b.jsxs("div",{className:"prd-editor-header",children:[b.jsxs("div",{className:"prd-editor-header-left",children:[b.jsx("span",{className:"prd-editor-title",children:s?"Edit PRD":"New PRD"}),(s==null?void 0:s.prdId)&&b.jsx("span",{className:"prd-editor-id",children:s.prdId})]}),b.jsx("button",{className:"prd-editor-close",onClick:r,children:"✕"})]}),b.jsxs("div",{className:"prd-editor-body",children:[b.jsxs("div",{className:"prd-editor-field",children:[b.jsx("label",{className:"prd-editor-label",children:"Title"}),b.jsx("input",{className:"prd-editor-input",type:"text",placeholder:"e.g. Producer Filter Modal",value:d,onChange:D=>f(D.target.value),autoFocus:!0})]}),i.length>0&&b.jsxs("div",{className:"prd-editor-field",children:[b.jsx("label",{className:"prd-editor-label",children:"Sprints"}),b.jsx("div",{className:"prd-sprint-list",children:i.map(D=>b.jsxs("label",{className:"prd-sprint-item",children:[b.jsx("input",{type:"checkbox",className:"prd-sprint-check",checked:v.includes(D.id),onChange:()=>A(D.id)}),b.jsx("span",{className:"prd-sprint-name",children:fu(D)})]},D.id))})]}),b.jsxs("div",{className:"prd-editor-field prd-editor-field--grow",children:[b.jsxs("div",{className:"prd-editor-label-row",children:[b.jsx("label",{className:"prd-editor-label",children:"Content"}),b.jsx("button",{className:"prd-editor-load-file",onClick:()=>S.current.click(),children:"Load from .md file"}),b.jsx("input",{ref:S,type:"file",accept:".md,.txt",style:{display:"none"},onChange:T})]}),b.jsx("textarea",{className:"prd-editor-textarea",placeholder:"Paste your PRD markdown here…",value:m,onChange:D=>g(D.target.value)})]})]}),b.jsxs("div",{className:"prd-editor-footer",children:[b.jsx("button",{className:"prd-editor-btn prd-editor-btn--cancel",onClick:r,children:"Cancel"}),b.jsx("button",{className:"prd-editor-btn prd-editor-btn--save",onClick:O,disabled:!d.trim(),children:s?"Save changes":"Create PRD"})]})]})})}function Y4({sprints:s,activeSprint:l,onSelectSprint:i,onCreateSprint:r,onDeleteSprint:u}){const[d,f]=h.useState(!1),[m,g]=h.useState(!1),[v,x]=h.useState(""),[S,T]=h.useState(""),[A,O]=h.useState(""),D=h.useRef(null),Y=h.useRef(null);h.useEffect(()=>{function I(F){D.current&&!D.current.contains(F.target)&&f(!1)}return document.addEventListener("mousedown",I),()=>document.removeEventListener("mousedown",I)},[]),h.useEffect(()=>{var I;m&&((I=Y.current)==null||I.focus())},[m]);function B(){v.trim()&&(r({name:v.trim(),startDate:S,endDate:A}),x(""),T(""),O(""),g(!1))}function Z(I){I.key==="Enter"&&B(),I.key==="Escape"&&(g(!1),x(""))}const Q=l&&l!=="__none__"?s.find(I=>I.id===l):null,X=l==="__none__"?"Unassigned":Q?fu(Q):"All sprints";return b.jsxs("div",{className:"sprint-bar",children:[b.jsxs("div",{className:"sprint-selector",ref:D,children:[b.jsxs("button",{className:`sprint-dropdown-btn ${l?"sprint-dropdown-btn--active":""}`,onClick:()=>f(I=>!I),children:[b.jsx("span",{className:"sprint-dropdown-label",children:X}),b.jsx(L6,{size:12,weight:"bold"})]}),d&&b.jsxs("div",{className:"sprint-dropdown",children:[[{id:null,label:"All sprints"},{id:"__none__",label:"Unassigned"}].map(I=>b.jsx("button",{className:`sprint-option ${l===I.id?"sprint-option--active":""}`,onClick:()=>{i(I.id),f(!1)},children:I.label},I.id??"all")),s.length>0&&b.jsx("div",{className:"sprint-option-divider"}),s.map(I=>b.jsxs("div",{className:"sprint-option-row",children:[b.jsx("button",{className:`sprint-option ${l===I.id?"sprint-option--active":""}`,onClick:()=>{i(I.id),f(!1)},children:fu(I)}),b.jsx("button",{className:"sprint-option-delete",title:"Delete sprint",onClick:F=>{F.stopPropagation(),u(I.id)},children:b.jsx(q6,{size:11,weight:"bold"})})]},I.id))]})]}),m?b.jsxs("div",{className:"sprint-create-form",children:[b.jsx("input",{ref:Y,className:"sprint-input",placeholder:"Sprint name",value:v,onChange:I=>x(I.target.value),onKeyDown:Z}),b.jsx("input",{className:"sprint-input sprint-input--date",type:"date",value:S,onChange:I=>T(I.target.value)}),b.jsx("span",{className:"sprint-range-sep",children:"–"}),b.jsx("input",{className:"sprint-input sprint-input--date",type:"date",value:A,onChange:I=>O(I.target.value)}),b.jsx("button",{className:"sprint-create-btn",onClick:B,disabled:!v.trim(),children:"Create"}),b.jsx("button",{className:"sprint-cancel-btn",onClick:()=>{g(!1),x("")},children:"Cancel"})]}):b.jsxs("button",{className:"sprint-new-btn",onClick:()=>g(!0),children:[b.jsx(H6,{size:13,weight:"bold"}),"New sprint"]})]})}const I4={Sparkle:ch,ChartBar:Wp,FlowArrow:ah,Database:th,TrendUp:fh,Bell:Fp,GearSix:Tu};function qh(s){const l=Math.floor((Date.now()-new Date(s))/6e4);if(l<1)return"just now";if(l<60)return`${l}m ago`;const i=Math.floor(l/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}function G4({status:s}){return b.jsx("span",{className:`prd-status prd-status--${s}`,children:Qp[s]})}function X4({prd:s,sprints:l,onEdit:i,onDelete:r,onOpen:u,isDragging:d}){const{attributes:f,listeners:m,setNodeRef:g,transform:v,transition:x}=H4({id:s.id}),S={transform:va.Transform.toString(v),transition:x,opacity:d?.4:1},T=l.filter(A=>{var O;return(O=s.sprintIds)==null?void 0:O.includes(A.id)});return b.jsxs("div",{ref:g,style:S,className:"kanban-card",...f,...m,children:[b.jsxs("div",{className:"kanban-card-top",children:[s.prdId&&b.jsx("span",{className:"kanban-prd-id",children:s.prdId}),b.jsx("span",{className:"kanban-card-time",children:qh(s.updatedAt)})]}),b.jsx("div",{className:"kanban-card-title",children:s.title}),T.length>0&&b.jsx("div",{className:"kanban-sprint-chips",children:T.map(A=>b.jsx("span",{className:"kanban-sprint-chip",children:A.name},A.id))}),b.jsxs("div",{className:"kanban-card-actions",onPointerDown:A=>A.stopPropagation(),children:[b.jsx("button",{className:"kanban-card-btn",onClick:()=>u(s),children:"Open →"}),b.jsx("button",{className:"kanban-card-btn",onClick:()=>i(s),children:"Edit"}),b.jsx("button",{className:"kanban-card-btn kanban-card-btn--danger",onClick:()=>r(s.id),children:"Delete"})]})]})}function Q4({status:s,prds:l,sprints:i,onEdit:r,onDelete:u,onOpen:d,activeId:f}){return b.jsxs("div",{className:"kanban-col",children:[b.jsxs("div",{className:"kanban-col-header",children:[b.jsx("span",{className:"kanban-col-title",children:Qp[s]}),b.jsx("span",{className:"kanban-col-count",children:l.length})]}),b.jsx(R4,{items:l.map(m=>m.id),strategy:M4,children:b.jsxs("div",{className:"kanban-col-cards",children:[l.map(m=>b.jsx(X4,{prd:m,sprints:i,onEdit:r,onDelete:u,onOpen:d,isDragging:f===m.id},m.id)),l.length===0&&b.jsx("div",{className:"kanban-col-empty",children:"Drop here"})]})})]})}function K4({projectId:s,prds:l,sprints:i=[],onNavigate:r,onCreatePrd:u,onUpdatePrd:d,onDeletePrd:f,onCreateSprint:m,onDeleteSprint:g,theme:v,onThemeToggle:x,onSignOut:S}){const T=Kp(s),A=T?I4[T.phosphorIcon]:null,O=l.filter(ae=>ae.projectId===s),[D,Y]=h.useState("kanban"),[B,Z]=h.useState(null),[Q,X]=h.useState(!1),[I,F]=h.useState(null),[q,P]=h.useState(null),oe=sb(ib(zu,{activationConstraint:{distance:6}})),de=B===null?O:B==="__none__"?O.filter(ae=>{var M;return!((M=ae.sprintIds)!=null&&M.length)}):O.filter(ae=>{var M;return(M=ae.sprintIds)==null?void 0:M.includes(B)});function ue({active:ae}){P(ae.id)}function ye({active:ae,over:M}){if(P(null),!M||ae.id===M.id)return;const V=O.find(ge=>ge.id===ae.id);if(!V)return;const W=O.find(ge=>ge.id===M.id),ce=W?W.status:M.id;ep.includes(ce)&&V.status!==ce&&d(ae.id,{status:ce})}function Te({active:ae,over:M}){if(!M)return;const V=O.find(ce=>ce.id===ae.id),W=O.find(ce=>ce.id===M.id);!V||!W||V.status!==W.status&&d(ae.id,{status:W.status})}const _e=q?O.find(ae=>ae.id===q):null;return b.jsxs("div",{className:"project-view",children:[b.jsxs("header",{className:"project-view-header",children:[b.jsx("button",{className:"project-back-btn",onClick:()=>r({page:"projects"}),children:"← Projects"}),b.jsxs("div",{className:"project-view-title",children:[A&&b.jsx(A,{size:20,weight:"fill",className:"project-view-icon"}),b.jsx("span",{className:"project-view-name",children:T==null?void 0:T.name})]}),b.jsxs("div",{className:"project-view-actions",children:[b.jsxs("div",{className:"view-toggle",children:[b.jsx("button",{className:`view-toggle-btn ${D==="list"?"active":""}`,onClick:()=>Y("list"),children:"List"}),b.jsx("button",{className:`view-toggle-btn ${D==="kanban"?"active":""}`,onClick:()=>Y("kanban"),children:"Kanban"})]}),b.jsx("button",{className:"new-prd-btn",onClick:()=>{F(null),X(!0)},children:"+ New PRD"}),b.jsx(Du,{theme:v,onThemeToggle:x,onSignOut:S})]})]}),b.jsx(Y4,{sprints:i,activeSprint:B,onSelectSprint:Z,onCreateSprint:m,onDeleteSprint:ae=>{B===ae&&Z(null),g(ae)}}),b.jsx("div",{className:"project-view-body",children:D==="list"?b.jsx("div",{className:"prd-list",children:de.length===0?b.jsx("div",{className:"prd-list-empty",children:"No PRDs yet — create one to get started."}):b.jsxs("table",{className:"prd-table",children:[b.jsx("thead",{children:b.jsxs("tr",{children:[b.jsx("th",{children:"ID"}),b.jsx("th",{children:"Title"}),b.jsx("th",{children:"Sprints"}),b.jsx("th",{children:"Status"}),b.jsx("th",{children:"Updated"}),b.jsx("th",{})]})}),b.jsx("tbody",{children:de.map(ae=>{const M=i.filter(V=>{var W;return(W=ae.sprintIds)==null?void 0:W.includes(V.id)});return b.jsxs("tr",{children:[b.jsx("td",{className:"prd-table-id",children:ae.prdId||"—"}),b.jsx("td",{className:"prd-table-title",children:ae.title}),b.jsx("td",{className:"prd-table-sprints",children:M.length>0?M.map(V=>b.jsx("span",{className:"list-sprint-chip",children:V.name},V.id)):b.jsx("span",{className:"prd-table-none",children:"—"})}),b.jsx("td",{children:b.jsx(G4,{status:ae.status})}),b.jsx("td",{className:"prd-table-date",children:qh(ae.updatedAt)}),b.jsxs("td",{className:"prd-table-actions",children:[b.jsx("button",{className:"prd-action-btn",onClick:()=>r({page:"builder",prdId:ae.id}),children:"Open →"}),b.jsx("button",{className:"prd-action-btn",onClick:()=>{F(ae),X(!0)},children:"Edit"}),b.jsx("button",{className:"prd-action-btn prd-action-btn--danger",onClick:()=>f(ae.id),children:"Delete"})]})]},ae.id)})})]})}):b.jsxs(s4,{sensors:oe,collisionDetection:fb,onDragStart:ue,onDragOver:Te,onDragEnd:ye,children:[b.jsx("div",{className:"kanban-board",children:ep.map(ae=>b.jsx(Q4,{status:ae,prds:de.filter(M=>M.status===ae),sprints:i,onEdit:M=>{F(M),X(!0)},onDelete:M=>f(M),onOpen:M=>r({page:"builder",prdId:M.id}),activeId:q},ae))}),b.jsx(A4,{children:_e?b.jsxs("div",{className:"kanban-card kanban-card--overlay",children:[_e.prdId&&b.jsx("span",{className:"kanban-prd-id",children:_e.prdId}),b.jsx("div",{className:"kanban-card-title",children:_e.title})]}):null})]})}),Q&&b.jsx(V4,{prd:I,projectId:s,sprints:i,onClose:()=>X(!1),onSave:ae=>{I?d(I.id,ae):u(s,ae),X(!1)}})]})}const Vh=s=>`ennabl_bs_${s}`;function Yh(s){try{return JSON.parse(localStorage.getItem(Vh(s)))||{}}catch{return{}}}function bp(s,l){try{const i=Yh(s);localStorage.setItem(Vh(s),JSON.stringify({...i,...l}))}catch{}}function $4(){const[s,l]=h.useState(()=>!!jp()),[i,r]=h.useState(()=>{const G=b8();return document.documentElement.setAttribute("data-theme",G),G});function u(){r(G=>{const $=G==="dark"?"light":"dark";return document.documentElement.setAttribute("data-theme",$),v8($),$})}function d(){l(!1)}function f(G){const $=q4(G);ae(ne=>{const re=[...ne,$];return gp(re),re})}function m(G){ae($=>{const ne=$.filter(re=>re.id!==G);return gp(ne),ne}),D($=>{const ne=$.map(re=>{var ie;return(ie=re.sprintIds)!=null&&ie.includes(G)?{...re,sprintIds:re.sprintIds.filter(fe=>fe!==G)}:re});return M||Ml(ne),ne})}const[g,v]=h.useState(Wf),[x,S]=h.useState(!1),[T,A]=h.useState({page:"projects"}),[O,D]=h.useState([]),[Y,B]=h.useState(!1),[Z,Q]=h.useState(null),[X,I]=h.useState(null),[F,q]=h.useState([]),[P,oe]=h.useState(null),[de,ue]=h.useState(s8),[ye,Te]=h.useState(0),[_e,ae]=h.useState(B4),M=g&&!x;h.useEffect(()=>{if(!s||!g&&!x)return;async function G(){let $;if(M)try{$=await f6()}catch{tp(),$=ou()}else tp(),$=ou();D(v6($)),B(!0)}G()},[s,g,x]);function V(G){if(G.page==="builder"&&G.prdId){const $=O.find(ne=>ne.id===G.prdId);$&&W($)}A(G)}function W(G){const $=Yh(G.id);Q({id:G.id,name:G.title,content:G.content}),q($.messages||[]),I($.code||null),oe(k8(G.title))}h.useEffect(()=>{Z!=null&&Z.id&&bp(Z.id,{messages:F})},[F,Z==null?void 0:Z.id]),h.useEffect(()=>{Z!=null&&Z.id&&X&&bp(Z.id,{code:X})},[X,Z==null?void 0:Z.id]);async function ce(G,$){if(M){const ne=await p6({projectId:G,...$});D(re=>[ne,...re])}else{const ne={id:`prd-${Date.now()}`,projectId:G,status:"backlog",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),...$};D(re=>{const ie=[ne,...re];return Ml(ie),ie})}}async function ge(G,$){if(M){const ne=await h6(G,{...$,updated:new Date().toISOString()});D(re=>re.map(ie=>ie.id===G?ne:ie))}else D(ne=>{const re=ne.map(ie=>ie.id===G?{...ie,...$,updatedAt:new Date().toISOString()}:ie);return Ml(re),re})}async function E(G){M&&await m6(G),D($=>{const ne=$.filter(re=>re.id!==G);return M||Ml(ne),ne})}function _(G,$){if(I(G),Z){const re=[r8({prdName:Z.name,code:G,iteration:((P==null?void 0:P.iterations)??0)+1}),...de].slice(0,50);if(ue(re),If(re),$){const fe=`**${new Date().toISOString().slice(0,10)} · iter ${((P==null?void 0:P.iterations)??0)+1}:** ${$}`,St=O.find(qe=>qe.id===Z.id),nt=(St==null?void 0:St.content)||Z.content||"",qt=nt.includes("## Build log")?nt+`
`+fe:nt+`

## Build log

`+fe;ge(Z.id,{content:qt}),Q(qe=>qe&&{...qe,content:qt})}}}function K({inputTokens:G,outputTokens:$,cacheReadTokens:ne,componentsUsed:re}){oe(ie=>{if(!ie)return ie;const fe={...ie,iterations:ie.iterations+1,inputTokens:ie.inputTokens+G,outputTokens:ie.outputTokens+$,cacheReadTokens:ie.cacheReadTokens+ne,componentsUsed:[...new Set([...ie.componentsUsed,...re])]};return fe.cost=M8(fe),iu(fe),fe})}function J(){ue([]),If([])}return s?!g&&!x?b.jsx(g6,{onDone:()=>{Wf()?v(!0):S(!0)}}):Y?T.page==="projects"?b.jsx(I6,{prds:O,onNavigate:V,theme:i,onThemeToggle:u,onSignOut:d}):T.page==="project"?b.jsx(K4,{projectId:T.projectId,prds:O,sprints:_e,onNavigate:V,onCreatePrd:ce,onUpdatePrd:ge,onDeletePrd:E,onCreateSprint:f,onDeleteSprint:m,theme:i,onThemeToggle:u,onSignOut:d}):b.jsxs("div",{className:"app",children:[b.jsxs("header",{className:"app-header",children:[b.jsxs("div",{className:"app-header-left",children:[b.jsx("button",{className:"app-back-btn",onClick:()=>V({page:"projects"}),children:"← Projects"}),b.jsx("span",{className:"app-header-sep"}),b.jsx("span",{className:"app-logo",children:"ennabl"}),b.jsx("span",{className:"app-logo-suffix",children:"builder"}),Z&&b.jsx("span",{className:"app-prd-badge",children:Z.name})]}),b.jsxs("div",{className:"app-header-right",children:[b.jsx(x6,{prds:O,onSelect:W}),b.jsx(Du,{theme:i,onThemeToggle:u,onSignOut:d})]})]}),b.jsxs("main",{className:"app-panels",children:[b.jsx(p8,{code:X,prd:Z,history:de,onHistoryClear:J,onInitDesign:()=>Te(G=>G+1)}),b.jsx("div",{className:"app-divider"}),b.jsx(G8,{prd:Z,messages:F,setMessages:q,onCodeGenerated:_,onIterationComplete:K,session:P,onSessionUpdate:oe,initTrigger:ye})]})]}):b.jsx("div",{style:{height:"100dvh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",color:"var(--text-muted)",fontSize:13},children:"Loading…"}):b.jsx(X8,{onDone:()=>l(!0)})}pg.createRoot(document.getElementById("root")).render(b.jsx(h.StrictMode,{children:b.jsx($4,{})}));
