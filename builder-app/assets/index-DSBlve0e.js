var t0=Object.defineProperty;var Kd=p=>{throw TypeError(p)};var n0=(p,c,o)=>c in p?t0(p,c,{enumerable:!0,configurable:!0,writable:!0,value:o}):p[c]=o;var Te=(p,c,o)=>n0(p,typeof c!="symbol"?c+"":c,o),a0=(p,c,o)=>c.has(p)||Kd("Cannot "+o);var Jd=(p,c,o)=>c.has(p)?Kd("Cannot add the same private member more than once"):c instanceof WeakSet?c.add(p):c.set(p,o);var Dl=(p,c,o)=>(a0(p,c,"access private method"),o);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function o(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(r){if(r.ep)return;r.ep=!0;const d=o(r);fetch(r.href,d)}})();var zc={exports:{}},Ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d;function l0(){if($d)return Ml;$d=1;var p=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function o(s,r,d){var h=null;if(d!==void 0&&(h=""+d),r.key!==void 0&&(h=""+r.key),"key"in r){d={};for(var z in r)z!=="key"&&(d[z]=r[z])}else d=r;return r=d.ref,{$$typeof:p,type:s,key:h,ref:r!==void 0?r:null,props:d}}return Ml.Fragment=c,Ml.jsx=o,Ml.jsxs=o,Ml}var Fd;function i0(){return Fd||(Fd=1,zc.exports=l0()),zc.exports}var T=i0(),Ec={exports:{}},V={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd;function u0(){if(Wd)return V;Wd=1;var p=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),B=Symbol.iterator;function Q(v){return v===null||typeof v!="object"?null:(v=B&&v[B]||v["@@iterator"],typeof v=="function"?v:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ae=Object.assign,L={};function ie(v,_,j){this.props=v,this.context=_,this.refs=L,this.updater=j||G}ie.prototype.isReactComponent={},ie.prototype.setState=function(v,_){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,_,"setState")},ie.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function Ae(){}Ae.prototype=ie.prototype;function Ce(v,_,j){this.props=v,this.context=_,this.refs=L,this.updater=j||G}var W=Ce.prototype=new Ae;W.constructor=Ce,ae(W,ie.prototype),W.isPureReactComponent=!0;var he=Array.isArray;function ce(){}var K={H:null,A:null,T:null,S:null},Ve=Object.prototype.hasOwnProperty;function Fe(v,_,j){var H=j.ref;return{$$typeof:p,type:v,key:_,ref:H!==void 0?H:null,props:j}}function Wn(v,_){return Fe(v.type,_,v.props)}function Mt(v){return typeof v=="object"&&v!==null&&v.$$typeof===p}function We(v){var _={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(j){return _[j]})}var Dn=/\/+/g;function Ht(v,_){return typeof v=="object"&&v!==null&&v.key!=null?We(""+v.key):_.toString(36)}function Et(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(ce,ce):(v.status="pending",v.then(function(_){v.status==="pending"&&(v.status="fulfilled",v.value=_)},function(_){v.status==="pending"&&(v.status="rejected",v.reason=_)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function D(v,_,j,H,J){var I=typeof v;(I==="undefined"||I==="boolean")&&(v=null);var re=!1;if(v===null)re=!0;else switch(I){case"bigint":case"string":case"number":re=!0;break;case"object":switch(v.$$typeof){case p:case c:re=!0;break;case w:return re=v._init,D(re(v._payload),_,j,H,J)}}if(re)return J=J(v),re=H===""?"."+Ht(v,0):H,he(J)?(j="",re!=null&&(j=re.replace(Dn,"$&/")+"/"),D(J,_,j,"",function(Ua){return Ua})):J!=null&&(Mt(J)&&(J=Wn(J,j+(J.key==null||v&&v.key===J.key?"":(""+J.key).replace(Dn,"$&/")+"/")+re)),_.push(J)),1;re=0;var Je=H===""?".":H+":";if(he(v))for(var ke=0;ke<v.length;ke++)H=v[ke],I=Je+Ht(H,ke),re+=D(H,_,j,I,J);else if(ke=Q(v),typeof ke=="function")for(v=ke.call(v),ke=0;!(H=v.next()).done;)H=H.value,I=Je+Ht(H,ke++),re+=D(H,_,j,I,J);else if(I==="object"){if(typeof v.then=="function")return D(Et(v),_,j,H,J);throw _=String(v),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return re}function O(v,_,j){if(v==null)return v;var H=[],J=0;return D(v,H,"","",function(I){return _.call(j,I,J++)}),H}function X(v){if(v._status===-1){var _=v._result;_=_(),_.then(function(j){(v._status===0||v._status===-1)&&(v._status=1,v._result=j)},function(j){(v._status===0||v._status===-1)&&(v._status=2,v._result=j)}),v._status===-1&&(v._status=0,v._result=_)}if(v._status===1)return v._result.default;throw v._result}var me=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},xe={map:O,forEach:function(v,_,j){O(v,function(){_.apply(this,arguments)},j)},count:function(v){var _=0;return O(v,function(){_++}),_},toArray:function(v){return O(v,function(_){return _})||[]},only:function(v){if(!Mt(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return V.Activity=R,V.Children=xe,V.Component=ie,V.Fragment=o,V.Profiler=r,V.PureComponent=Ce,V.StrictMode=s,V.Suspense=b,V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,V.__COMPILER_RUNTIME={__proto__:null,c:function(v){return K.H.useMemoCache(v)}},V.cache=function(v){return function(){return v.apply(null,arguments)}},V.cacheSignal=function(){return null},V.cloneElement=function(v,_,j){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var H=ae({},v.props),J=v.key;if(_!=null)for(I in _.key!==void 0&&(J=""+_.key),_)!Ve.call(_,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&_.ref===void 0||(H[I]=_[I]);var I=arguments.length-2;if(I===1)H.children=j;else if(1<I){for(var re=Array(I),Je=0;Je<I;Je++)re[Je]=arguments[Je+2];H.children=re}return Fe(v.type,J,H)},V.createContext=function(v){return v={$$typeof:h,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:d,_context:v},v},V.createElement=function(v,_,j){var H,J={},I=null;if(_!=null)for(H in _.key!==void 0&&(I=""+_.key),_)Ve.call(_,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(J[H]=_[H]);var re=arguments.length-2;if(re===1)J.children=j;else if(1<re){for(var Je=Array(re),ke=0;ke<re;ke++)Je[ke]=arguments[ke+2];J.children=Je}if(v&&v.defaultProps)for(H in re=v.defaultProps,re)J[H]===void 0&&(J[H]=re[H]);return Fe(v,I,J)},V.createRef=function(){return{current:null}},V.forwardRef=function(v){return{$$typeof:z,render:v}},V.isValidElement=Mt,V.lazy=function(v){return{$$typeof:w,_payload:{_status:-1,_result:v},_init:X}},V.memo=function(v,_){return{$$typeof:x,type:v,compare:_===void 0?null:_}},V.startTransition=function(v){var _=K.T,j={};K.T=j;try{var H=v(),J=K.S;J!==null&&J(j,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(ce,me)}catch(I){me(I)}finally{_!==null&&j.types!==null&&(_.types=j.types),K.T=_}},V.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},V.use=function(v){return K.H.use(v)},V.useActionState=function(v,_,j){return K.H.useActionState(v,_,j)},V.useCallback=function(v,_){return K.H.useCallback(v,_)},V.useContext=function(v){return K.H.useContext(v)},V.useDebugValue=function(){},V.useDeferredValue=function(v,_){return K.H.useDeferredValue(v,_)},V.useEffect=function(v,_){return K.H.useEffect(v,_)},V.useEffectEvent=function(v){return K.H.useEffectEvent(v)},V.useId=function(){return K.H.useId()},V.useImperativeHandle=function(v,_,j){return K.H.useImperativeHandle(v,_,j)},V.useInsertionEffect=function(v,_){return K.H.useInsertionEffect(v,_)},V.useLayoutEffect=function(v,_){return K.H.useLayoutEffect(v,_)},V.useMemo=function(v,_){return K.H.useMemo(v,_)},V.useOptimistic=function(v,_){return K.H.useOptimistic(v,_)},V.useReducer=function(v,_,j){return K.H.useReducer(v,_,j)},V.useRef=function(v){return K.H.useRef(v)},V.useState=function(v){return K.H.useState(v)},V.useSyncExternalStore=function(v,_,j){return K.H.useSyncExternalStore(v,_,j)},V.useTransition=function(){return K.H.useTransition()},V.version="19.2.6",V}var Id;function Uc(){return Id||(Id=1,Ec.exports=u0()),Ec.exports}var we=Uc(),wc={exports:{}},kl={},Ac={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd;function s0(){return Pd||(Pd=1,(function(p){function c(D,O){var X=D.length;D.push(O);e:for(;0<X;){var me=X-1>>>1,xe=D[me];if(0<r(xe,O))D[me]=O,D[X]=xe,X=me;else break e}}function o(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var O=D[0],X=D.pop();if(X!==O){D[0]=X;e:for(var me=0,xe=D.length,v=xe>>>1;me<v;){var _=2*(me+1)-1,j=D[_],H=_+1,J=D[H];if(0>r(j,X))H<xe&&0>r(J,j)?(D[me]=J,D[H]=X,me=H):(D[me]=j,D[_]=X,me=_);else if(H<xe&&0>r(J,X))D[me]=J,D[H]=X,me=H;else break e}}return O}function r(D,O){var X=D.sortIndex-O.sortIndex;return X!==0?X:D.id-O.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;p.unstable_now=function(){return d.now()}}else{var h=Date,z=h.now();p.unstable_now=function(){return h.now()-z}}var b=[],x=[],w=1,R=null,B=3,Q=!1,G=!1,ae=!1,L=!1,ie=typeof setTimeout=="function"?setTimeout:null,Ae=typeof clearTimeout=="function"?clearTimeout:null,Ce=typeof setImmediate<"u"?setImmediate:null;function W(D){for(var O=o(x);O!==null;){if(O.callback===null)s(x);else if(O.startTime<=D)s(x),O.sortIndex=O.expirationTime,c(b,O);else break;O=o(x)}}function he(D){if(ae=!1,W(D),!G)if(o(b)!==null)G=!0,ce||(ce=!0,We());else{var O=o(x);O!==null&&Et(he,O.startTime-D)}}var ce=!1,K=-1,Ve=5,Fe=-1;function Wn(){return L?!0:!(p.unstable_now()-Fe<Ve)}function Mt(){if(L=!1,ce){var D=p.unstable_now();Fe=D;var O=!0;try{e:{G=!1,ae&&(ae=!1,Ae(K),K=-1),Q=!0;var X=B;try{t:{for(W(D),R=o(b);R!==null&&!(R.expirationTime>D&&Wn());){var me=R.callback;if(typeof me=="function"){R.callback=null,B=R.priorityLevel;var xe=me(R.expirationTime<=D);if(D=p.unstable_now(),typeof xe=="function"){R.callback=xe,W(D),O=!0;break t}R===o(b)&&s(b),W(D)}else s(b);R=o(b)}if(R!==null)O=!0;else{var v=o(x);v!==null&&Et(he,v.startTime-D),O=!1}}break e}finally{R=null,B=X,Q=!1}O=void 0}}finally{O?We():ce=!1}}}var We;if(typeof Ce=="function")We=function(){Ce(Mt)};else if(typeof MessageChannel<"u"){var Dn=new MessageChannel,Ht=Dn.port2;Dn.port1.onmessage=Mt,We=function(){Ht.postMessage(null)}}else We=function(){ie(Mt,0)};function Et(D,O){K=ie(function(){D(p.unstable_now())},O)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(D){D.callback=null},p.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ve=0<D?Math.floor(1e3/D):5},p.unstable_getCurrentPriorityLevel=function(){return B},p.unstable_next=function(D){switch(B){case 1:case 2:case 3:var O=3;break;default:O=B}var X=B;B=O;try{return D()}finally{B=X}},p.unstable_requestPaint=function(){L=!0},p.unstable_runWithPriority=function(D,O){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var X=B;B=D;try{return O()}finally{B=X}},p.unstable_scheduleCallback=function(D,O,X){var me=p.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?me+X:me):X=me,D){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=X+xe,D={id:w++,callback:O,priorityLevel:D,startTime:X,expirationTime:xe,sortIndex:-1},X>me?(D.sortIndex=X,c(x,D),o(b)===null&&D===o(x)&&(ae?(Ae(K),K=-1):ae=!0,Et(he,X-me))):(D.sortIndex=xe,c(b,D),G||Q||(G=!0,ce||(ce=!0,We()))),D},p.unstable_shouldYield=Wn,p.unstable_wrapCallback=function(D){var O=B;return function(){var X=B;B=O;try{return D.apply(this,arguments)}finally{B=X}}}})(Dc)),Dc}var ep;function c0(){return ep||(ep=1,Ac.exports=s0()),Ac.exports}var Mc={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function o0(){if(tp)return Ke;tp=1;var p=Uc();function c(b){var x="https://react.dev/errors/"+b;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)x+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+b+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(c(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},r=Symbol.for("react.portal");function d(b,x,w){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:R==null?null:""+R,children:b,containerInfo:x,implementation:w}}var h=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(b,x){if(b==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ke.createPortal=function(b,x){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(c(299));return d(b,x,null,w)},Ke.flushSync=function(b){var x=h.T,w=s.p;try{if(h.T=null,s.p=2,b)return b()}finally{h.T=x,s.p=w,s.d.f()}},Ke.preconnect=function(b,x){typeof b=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,s.d.C(b,x))},Ke.prefetchDNS=function(b){typeof b=="string"&&s.d.D(b)},Ke.preinit=function(b,x){if(typeof b=="string"&&x&&typeof x.as=="string"){var w=x.as,R=z(w,x.crossOrigin),B=typeof x.integrity=="string"?x.integrity:void 0,Q=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;w==="style"?s.d.S(b,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:R,integrity:B,fetchPriority:Q}):w==="script"&&s.d.X(b,{crossOrigin:R,integrity:B,fetchPriority:Q,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Ke.preinitModule=function(b,x){if(typeof b=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var w=z(x.as,x.crossOrigin);s.d.M(b,{crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&s.d.M(b)},Ke.preload=function(b,x){if(typeof b=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var w=x.as,R=z(w,x.crossOrigin);s.d.L(b,w,{crossOrigin:R,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Ke.preloadModule=function(b,x){if(typeof b=="string")if(x){var w=z(x.as,x.crossOrigin);s.d.m(b,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else s.d.m(b)},Ke.requestFormReset=function(b){s.d.r(b)},Ke.unstable_batchedUpdates=function(b,x){return b(x)},Ke.useFormState=function(b,x,w){return h.H.useFormState(b,x,w)},Ke.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ke.version="19.2.6",Ke}var np;function r0(){if(np)return Mc.exports;np=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(c){console.error(c)}}return p(),Mc.exports=o0(),Mc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function f0(){if(ap)return kl;ap=1;var p=c0(),c=Uc(),o=r0();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(d(e)!==e)throw Error(s(188))}function x(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return b(l),e;if(i===a)return b(l),t;i=i.sibling}throw Error(s(188))}if(n.return!==a.return)n=l,a=i;else{for(var u=!1,f=l.child;f;){if(f===n){u=!0,n=l,a=i;break}if(f===a){u=!0,a=l,n=i;break}f=f.sibling}if(!u){for(f=i.child;f;){if(f===n){u=!0,n=i,a=l;break}if(f===a){u=!0,a=i,n=l;break}f=f.sibling}if(!u)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,B=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),ae=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),Ae=Symbol.for("react.consumer"),Ce=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),Fe=Symbol.for("react.activity"),Wn=Symbol.for("react.memo_cache_sentinel"),Mt=Symbol.iterator;function We(e){return e===null||typeof e!="object"?null:(e=Mt&&e[Mt]||e["@@iterator"],typeof e=="function"?e:null)}var Dn=Symbol.for("react.client.reference");function Ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Dn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ae:return"Fragment";case ie:return"Profiler";case L:return"StrictMode";case he:return"Suspense";case ce:return"SuspenseList";case Fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case Ce:return e.displayName||"Context";case Ae:return(e._context.displayName||"Context")+".Consumer";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:Ht(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return Ht(e(t))}catch{}}return null}var Et=Array.isArray,D=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},me=[],xe=-1;function v(e){return{current:e}}function _(e){0>xe||(e.current=me[xe],me[xe]=null,xe--)}function j(e,t){xe++,me[xe]=e.current,e.current=t}var H=v(null),J=v(null),I=v(null),re=v(null);function Je(e,t){switch(j(I,t),j(J,e),j(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gd(t),e=vd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(H),j(H,e)}function ke(){_(H),_(J),_(I)}function Ua(e){e.memoizedState!==null&&j(re,e);var t=H.current,n=vd(t,e.type);t!==n&&(j(J,e),j(H,n))}function Bl(e){J.current===e&&(_(H),_(J)),re.current===e&&(_(re),zl._currentValue=X)}var su,Zc;function Mn(e){if(su===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);su=t&&t[1]||"",Zc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+su+e+Zc}var cu=!1;function ou(e,t){if(!e||cu)return"";cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(E){var N=E}Reflect.construct(e,[],k)}else{try{k.call()}catch(E){N=E}e.call(k.prototype)}}else{try{throw Error()}catch(E){N=E}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(E){if(E&&N&&typeof E.stack=="string")return[E.stack,N.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],f=i[1];if(u&&f){var m=u.split(`
`),C=f.split(`
`);for(l=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(a===m.length||l===C.length)for(a=m.length-1,l=C.length-1;1<=a&&0<=l&&m[a]!==C[l];)l--;for(;1<=a&&0<=l;a--,l--)if(m[a]!==C[l]){if(a!==1||l!==1)do if(a--,l--,0>l||m[a]!==C[l]){var A=`
`+m[a].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=a&&0<=l);break}}}finally{cu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Mn(n):""}function _p(e,t){switch(e.tag){case 26:case 27:case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return e.child!==t&&t!==null?Mn("Suspense Fallback"):Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 15:return ou(e.type,!1);case 11:return ou(e.type.render,!1);case 1:return ou(e.type,!0);case 31:return Mn("Activity");default:return""}}function Xc(e){try{var t="",n=null;do t+=_p(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ru=Object.prototype.hasOwnProperty,fu=p.unstable_scheduleCallback,du=p.unstable_cancelCallback,Rp=p.unstable_shouldYield,Op=p.unstable_requestPaint,it=p.unstable_now,jp=p.unstable_getCurrentPriorityLevel,Vc=p.unstable_ImmediatePriority,Kc=p.unstable_UserBlockingPriority,ql=p.unstable_NormalPriority,Up=p.unstable_LowPriority,Jc=p.unstable_IdlePriority,Hp=p.log,Bp=p.unstable_setDisableYieldValue,Ha=null,ut=null;function an(e){if(typeof Hp=="function"&&Bp(e),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(Ha,e)}catch{}}var st=Math.clz32?Math.clz32:Yp,qp=Math.log,Lp=Math.LN2;function Yp(e){return e>>>=0,e===0?32:31-(qp(e)/Lp|0)|0}var Ll=256,Yl=262144,Gl=4194304;function kn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ql(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?l=kn(a):(u&=f,u!==0?l=kn(u):n||(n=f&~e,n!==0&&(l=kn(n))))):(f=a&~i,f!==0?l=kn(f):u!==0?l=kn(u):n||(n=a&~e,n!==0&&(l=kn(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Ba(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $c(){var e=Gl;return Gl<<=1,(Gl&62914560)===0&&(Gl=4194304),e}function pu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qp(e,t,n,a,l,i){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var f=e.entanglements,m=e.expirationTimes,C=e.hiddenUpdates;for(n=u&~n;0<n;){var A=31-st(n),k=1<<A;f[A]=0,m[A]=-1;var N=C[A];if(N!==null)for(C[A]=null,A=0;A<N.length;A++){var E=N[A];E!==null&&(E.lane&=-536870913)}n&=~k}a!==0&&Fc(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Fc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-st(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Wc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-st(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Ic(e,t){var n=t&-t;return n=(n&42)!==0?1:hu(n),(n&(e.suspendedLanes|t))!==0?0:n}function hu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pc(){var e=O.p;return e!==0?e:(e=window.event,e===void 0?32:Ld(e.type))}function eo(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var ln=Math.random().toString(36).slice(2),Ye="__reactFiber$"+ln,Ie="__reactProps$"+ln,In="__reactContainer$"+ln,gu="__reactEvents$"+ln,Zp="__reactListeners$"+ln,Xp="__reactHandles$"+ln,to="__reactResources$"+ln,La="__reactMarker$"+ln;function vu(e){delete e[Ye],delete e[Ie],delete e[gu],delete e[Zp],delete e[Xp]}function Pn(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[In]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nd(e);e!==null;){if(n=e[Ye])return n;e=Nd(e)}return t}e=n,n=e.parentNode}return null}function ea(e){if(e=e[Ye]||e[In]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ya(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function ta(e){var t=e[to];return t||(t=e[to]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[La]=!0}var no=new Set,ao={};function _n(e,t){na(e,t),na(e+"Capture",t)}function na(e,t){for(ao[e]=t,e=0;e<t.length;e++)no.add(t[e])}var Vp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lo={},io={};function Kp(e){return ru.call(io,e)?!0:ru.call(lo,e)?!1:Vp.test(e)?io[e]=!0:(lo[e]=!0,!1)}function Zl(e,t,n){if(Kp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Xl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Bt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jp(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){n=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bu(e){if(!e._valueTracker){var t=uo(e)?"checked":"value";e._valueTracker=Jp(e,t,""+e[t])}}function so(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=uo(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Vl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $p=/[\n"\\]/g;function vt(e){return e.replace($p,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yu(e,t,n,a,l,i,u,f){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?xu(e,u,gt(t)):n!=null?xu(e,u,gt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+gt(f):e.removeAttribute("name")}function co(e,t,n,a,l,i,u,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){bu(e);return}n=n!=null?""+gt(n):"",t=t!=null?""+gt(t):n,f||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),bu(e)}function xu(e,t,n){t==="number"&&Vl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function aa(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function oo(e,t,n){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+gt(n):""}function ro(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(Et(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=gt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),bu(e)}function la(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fo(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Fp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function po(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&fo(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&fo(e,i,t[i])}function Su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ip=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kl(e){return Ip.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var Tu=null;function Cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ia=null,ua=null;function ho(e){var t=ea(e);if(t&&(e=t.stateNode)){var n=e[Ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(yu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[Ie]||null;if(!l)throw Error(s(90));yu(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&so(a)}break e;case"textarea":oo(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&aa(e,!!n.multiple,t,!1)}}}var Nu=!1;function mo(e,t,n){if(Nu)return e(t,n);Nu=!0;try{var a=e(t);return a}finally{if(Nu=!1,(ia!==null||ua!==null)&&(Oi(),ia&&(t=ia,e=ua,ua=ia=null,ho(t),e)))for(t=0;t<e.length;t++)ho(e[t])}}function Ga(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Ie]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=!1;if(Lt)try{var Qa={};Object.defineProperty(Qa,"passive",{get:function(){zu=!0}}),window.addEventListener("test",Qa,Qa),window.removeEventListener("test",Qa,Qa)}catch{zu=!1}var un=null,Eu=null,Jl=null;function go(){if(Jl)return Jl;var e,t=Eu,n=t.length,a,l="value"in un?un.value:un.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var u=n-e;for(a=1;a<=u&&t[n-a]===l[i-a];a++);return Jl=l.slice(e,1<a?1-a:void 0)}function $l(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fl(){return!0}function vo(){return!1}function Pe(e){function t(n,a,l,i,u){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Fl:vo,this.isPropagationStopped=vo,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),t}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=Pe(Rn),Za=R({},Rn,{view:0,detail:0}),Pp=Pe(Za),wu,Au,Xa,Il=R({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xa&&(Xa&&e.type==="mousemove"?(wu=e.screenX-Xa.screenX,Au=e.screenY-Xa.screenY):Au=wu=0,Xa=e),wu)},movementY:function(e){return"movementY"in e?e.movementY:Au}}),bo=Pe(Il),eh=R({},Il,{dataTransfer:0}),th=Pe(eh),nh=R({},Za,{relatedTarget:0}),Du=Pe(nh),ah=R({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),lh=Pe(ah),ih=R({},Rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uh=Pe(ih),sh=R({},Rn,{data:0}),yo=Pe(sh),ch={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rh[e])?!!t[e]:!1}function Mu(){return fh}var dh=R({},Za,{key:function(e){if(e.key){var t=ch[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(e){return e.type==="keypress"?$l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ph=Pe(dh),hh=R({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xo=Pe(hh),mh=R({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),gh=Pe(mh),vh=R({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),bh=Pe(vh),yh=R({},Il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xh=Pe(yh),Sh=R({},Rn,{newState:0,oldState:0}),Th=Pe(Sh),Ch=[9,13,27,32],ku=Lt&&"CompositionEvent"in window,Va=null;Lt&&"documentMode"in document&&(Va=document.documentMode);var Nh=Lt&&"TextEvent"in window&&!Va,So=Lt&&(!ku||Va&&8<Va&&11>=Va),To=" ",Co=!1;function No(e,t){switch(e){case"keyup":return Ch.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sa=!1;function zh(e,t){switch(e){case"compositionend":return zo(t);case"keypress":return t.which!==32?null:(Co=!0,To);case"textInput":return e=t.data,e===To&&Co?null:e;default:return null}}function Eh(e,t){if(sa)return e==="compositionend"||!ku&&No(e,t)?(e=go(),Jl=Eu=un=null,sa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return So&&t.locale!=="ko"?null:t.data;default:return null}}var wh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wh[e.type]:t==="textarea"}function wo(e,t,n,a){ia?ua?ua.push(a):ua=[a]:ia=a,t=Yi(t,"onChange"),0<t.length&&(n=new Wl("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ka=null,Ja=null;function Ah(e){rd(e,0)}function Pl(e){var t=Ya(e);if(so(t))return e}function Ao(e,t){if(e==="change")return t}var Do=!1;if(Lt){var _u;if(Lt){var Ru="oninput"in document;if(!Ru){var Mo=document.createElement("div");Mo.setAttribute("oninput","return;"),Ru=typeof Mo.oninput=="function"}_u=Ru}else _u=!1;Do=_u&&(!document.documentMode||9<document.documentMode)}function ko(){Ka&&(Ka.detachEvent("onpropertychange",_o),Ja=Ka=null)}function _o(e){if(e.propertyName==="value"&&Pl(Ja)){var t=[];wo(t,Ja,e,Cu(e)),mo(Ah,t)}}function Dh(e,t,n){e==="focusin"?(ko(),Ka=t,Ja=n,Ka.attachEvent("onpropertychange",_o)):e==="focusout"&&ko()}function Mh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(Ja)}function kh(e,t){if(e==="click")return Pl(t)}function _h(e,t){if(e==="input"||e==="change")return Pl(t)}function Rh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Rh;function $a(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!ru.call(t,l)||!ct(e[l],t[l]))return!1}return!0}function Ro(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oo(e,t){var n=Ro(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ro(n)}}function jo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vl(e.document)}return t}function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Oh=Lt&&"documentMode"in document&&11>=document.documentMode,ca=null,ju=null,Fa=null,Uu=!1;function Ho(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uu||ca==null||ca!==Vl(a)||(a=ca,"selectionStart"in a&&Ou(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Fa&&$a(Fa,a)||(Fa=a,a=Yi(ju,"onSelect"),0<a.length&&(t=new Wl("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ca)))}function On(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var oa={animationend:On("Animation","AnimationEnd"),animationiteration:On("Animation","AnimationIteration"),animationstart:On("Animation","AnimationStart"),transitionrun:On("Transition","TransitionRun"),transitionstart:On("Transition","TransitionStart"),transitioncancel:On("Transition","TransitionCancel"),transitionend:On("Transition","TransitionEnd")},Hu={},Bo={};Lt&&(Bo=document.createElement("div").style,"AnimationEvent"in window||(delete oa.animationend.animation,delete oa.animationiteration.animation,delete oa.animationstart.animation),"TransitionEvent"in window||delete oa.transitionend.transition);function jn(e){if(Hu[e])return Hu[e];if(!oa[e])return e;var t=oa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bo)return Hu[e]=t[n];return e}var qo=jn("animationend"),Lo=jn("animationiteration"),Yo=jn("animationstart"),jh=jn("transitionrun"),Uh=jn("transitionstart"),Hh=jn("transitioncancel"),Go=jn("transitionend"),Qo=new Map,Bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bu.push("scrollEnd");function wt(e,t){Qo.set(e,t),_n(t,[e])}var ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bt=[],ra=0,qu=0;function ti(){for(var e=ra,t=qu=ra=0;t<e;){var n=bt[t];bt[t++]=null;var a=bt[t];bt[t++]=null;var l=bt[t];bt[t++]=null;var i=bt[t];if(bt[t++]=null,a!==null&&l!==null){var u=a.pending;u===null?l.next=l:(l.next=u.next,u.next=l),a.pending=l}i!==0&&Zo(n,l,i)}}function ni(e,t,n,a){bt[ra++]=e,bt[ra++]=t,bt[ra++]=n,bt[ra++]=a,qu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Lu(e,t,n,a){return ni(e,t,n,a),ai(e)}function Un(e,t){return ni(e,null,null,t),ai(e)}function Zo(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-st(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function ai(e){if(50<bl)throw bl=0,$s=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fa={};function Bh(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,a){return new Bh(e,t,n,a)}function Yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yt(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Xo(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function li(e,t,n,a,l,i){var u=0;if(a=e,typeof e=="function")Yu(e)&&(u=1);else if(typeof e=="string")u=Qm(e,n,H.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Fe:return e=ot(31,n,t,l),e.elementType=Fe,e.lanes=i,e;case ae:return Hn(n.children,l,i,t);case L:u=8,l|=24;break;case ie:return e=ot(12,n,t,l|2),e.elementType=ie,e.lanes=i,e;case he:return e=ot(13,n,t,l),e.elementType=he,e.lanes=i,e;case ce:return e=ot(19,n,t,l),e.elementType=ce,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ce:u=10;break e;case Ae:u=9;break e;case W:u=11;break e;case K:u=14;break e;case Ve:u=16,a=null;break e}u=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=ot(u,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function Hn(e,t,n,a){return e=ot(7,e,a,t),e.lanes=n,e}function Gu(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function Vo(e){var t=ot(18,null,null,0);return t.stateNode=e,t}function Qu(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ko=new WeakMap;function yt(e,t){if(typeof e=="object"&&e!==null){var n=Ko.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Xc(t)},Ko.set(e,t),t)}return{value:e,source:t,stack:Xc(t)}}var da=[],pa=0,ii=null,Wa=0,xt=[],St=0,sn=null,kt=1,_t="";function Gt(e,t){da[pa++]=Wa,da[pa++]=ii,ii=e,Wa=t}function Jo(e,t,n){xt[St++]=kt,xt[St++]=_t,xt[St++]=sn,sn=e;var a=kt;e=_t;var l=32-st(a)-1;a&=~(1<<l),n+=1;var i=32-st(t)+l;if(30<i){var u=l-l%5;i=(a&(1<<u)-1).toString(32),a>>=u,l-=u,kt=1<<32-st(t)+l|n<<l|a,_t=i+e}else kt=1<<i|n<<l|a,_t=e}function Zu(e){e.return!==null&&(Gt(e,1),Jo(e,1,0))}function Xu(e){for(;e===ii;)ii=da[--pa],da[pa]=null,Wa=da[--pa],da[pa]=null;for(;e===sn;)sn=xt[--St],xt[St]=null,_t=xt[--St],xt[St]=null,kt=xt[--St],xt[St]=null}function $o(e,t){xt[St++]=kt,xt[St++]=_t,xt[St++]=sn,kt=t.id,_t=t.overflow,sn=e}var Ge=null,Ne=null,le=!1,cn=null,Tt=!1,Vu=Error(s(519));function on(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ia(yt(t,e)),Vu}function Fo(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ye]=e,t[Ie]=a,n){case"dialog":ee("cancel",t),ee("close",t);break;case"iframe":case"object":case"embed":ee("load",t);break;case"video":case"audio":for(n=0;n<xl.length;n++)ee(xl[n],t);break;case"source":ee("error",t);break;case"img":case"image":case"link":ee("error",t),ee("load",t);break;case"details":ee("toggle",t);break;case"input":ee("invalid",t),co(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ee("invalid",t);break;case"textarea":ee("invalid",t),ro(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||hd(t.textContent,n)?(a.popover!=null&&(ee("beforetoggle",t),ee("toggle",t)),a.onScroll!=null&&ee("scroll",t),a.onScrollEnd!=null&&ee("scrollend",t),a.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||on(e,!0)}function Wo(e){for(Ge=e.return;Ge;)switch(Ge.tag){case 5:case 31:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Ge=Ge.return}}function ha(e){if(e!==Ge)return!1;if(!le)return Wo(e),le=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||rc(e.type,e.memoizedProps)),n=!n),n&&Ne&&on(e),Wo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ne=Cd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ne=Cd(e)}else t===27?(t=Ne,Cn(e.type)?(e=mc,mc=null,Ne=e):Ne=t):Ne=Ge?Nt(e.stateNode.nextSibling):null;return!0}function Bn(){Ne=Ge=null,le=!1}function Ku(){var e=cn;return e!==null&&(at===null?at=e:at.push.apply(at,e),cn=null),e}function Ia(e){cn===null?cn=[e]:cn.push(e)}var Ju=v(null),qn=null,Qt=null;function rn(e,t,n){j(Ju,t._currentValue),t._currentValue=n}function Zt(e){e._currentValue=Ju.current,_(Ju)}function $u(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Fu(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var u=l.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=l;for(var m=0;m<t.length;m++)if(f.context===t[m]){i.lanes|=n,f=i.alternate,f!==null&&(f.lanes|=n),$u(i.return,n,e),a||(u=null);break e}i=f.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(s(341));u.lanes|=n,i=u.alternate,i!==null&&(i.lanes|=n),$u(u,n,e),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===e){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function ma(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(s(387));if(u=u.memoizedProps,u!==null){var f=l.type;ct(l.pendingProps.value,u.value)||(e!==null?e.push(f):e=[f])}}else if(l===re.current){if(u=l.alternate,u===null)throw Error(s(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(zl):e=[zl])}l=l.return}e!==null&&Fu(t,e,n,a),t.flags|=262144}function ui(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ln(e){qn=e,Qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return Io(qn,e)}function si(e,t){return qn===null&&Ln(e),Io(e,t)}function Io(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qt===null){if(e===null)throw Error(s(308));Qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qt=Qt.next=t;return n}var qh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Lh=p.unstable_scheduleCallback,Yh=p.unstable_NormalPriority,Oe={$$typeof:Ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new qh,data:new Map,refCount:0}}function Pa(e){e.refCount--,e.refCount===0&&Lh(Yh,function(){e.controller.abort()})}var el=null,Iu=0,ga=0,va=null;function Gh(e,t){if(el===null){var n=el=[];Iu=0,ga=tc(),va={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Iu++,t.then(Po,Po),t}function Po(){if(--Iu===0&&el!==null){va!==null&&(va.status="fulfilled");var e=el;el=null,ga=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qh(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var er=D.S;D.S=function(e,t){Bf=it(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gh(e,t),er!==null&&er(e,t)};var Yn=v(null);function Pu(){var e=Yn.current;return e!==null?e:Se.pooledCache}function ci(e,t){t===null?j(Yn,Yn.current):j(Yn,t.pool)}function tr(){var e=Pu();return e===null?null:{parent:Oe._currentValue,pool:e}}var ba=Error(s(460)),es=Error(s(474)),oi=Error(s(542)),ri={then:function(){}};function nr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ar(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(qt,qt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ir(e),e;default:if(typeof t.status=="string")t.then(qt,qt);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ir(e),e}throw Qn=t,ba}}function Gn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Qn=n,ba):n}}var Qn=null;function lr(){if(Qn===null)throw Error(s(459));var e=Qn;return Qn=null,e}function ir(e){if(e===ba||e===oi)throw Error(s(483))}var ya=null,tl=0;function fi(e){var t=tl;return tl+=1,ya===null&&(ya=[]),ar(ya,e,t)}function nl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function di(e,t){throw t.$$typeof===B?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ur(e){function t(y,g){if(e){var S=y.deletions;S===null?(y.deletions=[g],y.flags|=16):S.push(g)}}function n(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function a(y){for(var g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function l(y,g){return y=Yt(y,g),y.index=0,y.sibling=null,y}function i(y,g,S){return y.index=S,e?(S=y.alternate,S!==null?(S=S.index,S<g?(y.flags|=67108866,g):S):(y.flags|=67108866,g)):(y.flags|=1048576,g)}function u(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function f(y,g,S,M){return g===null||g.tag!==6?(g=Gu(S,y.mode,M),g.return=y,g):(g=l(g,S),g.return=y,g)}function m(y,g,S,M){var Y=S.type;return Y===ae?A(y,g,S.props.children,M,S.key):g!==null&&(g.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ve&&Gn(Y)===g.type)?(g=l(g,S.props),nl(g,S),g.return=y,g):(g=li(S.type,S.key,S.props,null,y.mode,M),nl(g,S),g.return=y,g)}function C(y,g,S,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=Qu(S,y.mode,M),g.return=y,g):(g=l(g,S.children||[]),g.return=y,g)}function A(y,g,S,M,Y){return g===null||g.tag!==7?(g=Hn(S,y.mode,M,Y),g.return=y,g):(g=l(g,S),g.return=y,g)}function k(y,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Gu(""+g,y.mode,S),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Q:return S=li(g.type,g.key,g.props,null,y.mode,S),nl(S,g),S.return=y,S;case G:return g=Qu(g,y.mode,S),g.return=y,g;case Ve:return g=Gn(g),k(y,g,S)}if(Et(g)||We(g))return g=Hn(g,y.mode,S,null),g.return=y,g;if(typeof g.then=="function")return k(y,fi(g),S);if(g.$$typeof===Ce)return k(y,si(y,g),S);di(y,g)}return null}function N(y,g,S,M){var Y=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return Y!==null?null:f(y,g,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Q:return S.key===Y?m(y,g,S,M):null;case G:return S.key===Y?C(y,g,S,M):null;case Ve:return S=Gn(S),N(y,g,S,M)}if(Et(S)||We(S))return Y!==null?null:A(y,g,S,M,null);if(typeof S.then=="function")return N(y,g,fi(S),M);if(S.$$typeof===Ce)return N(y,g,si(y,S),M);di(y,S)}return null}function E(y,g,S,M,Y){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return y=y.get(S)||null,f(g,y,""+M,Y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Q:return y=y.get(M.key===null?S:M.key)||null,m(g,y,M,Y);case G:return y=y.get(M.key===null?S:M.key)||null,C(g,y,M,Y);case Ve:return M=Gn(M),E(y,g,S,M,Y)}if(Et(M)||We(M))return y=y.get(S)||null,A(g,y,M,Y,null);if(typeof M.then=="function")return E(y,g,S,fi(M),Y);if(M.$$typeof===Ce)return E(y,g,S,si(g,M),Y);di(g,M)}return null}function U(y,g,S,M){for(var Y=null,ue=null,q=g,F=g=0,ne=null;q!==null&&F<S.length;F++){q.index>F?(ne=q,q=null):ne=q.sibling;var se=N(y,q,S[F],M);if(se===null){q===null&&(q=ne);break}e&&q&&se.alternate===null&&t(y,q),g=i(se,g,F),ue===null?Y=se:ue.sibling=se,ue=se,q=ne}if(F===S.length)return n(y,q),le&&Gt(y,F),Y;if(q===null){for(;F<S.length;F++)q=k(y,S[F],M),q!==null&&(g=i(q,g,F),ue===null?Y=q:ue.sibling=q,ue=q);return le&&Gt(y,F),Y}for(q=a(q);F<S.length;F++)ne=E(q,y,F,S[F],M),ne!==null&&(e&&ne.alternate!==null&&q.delete(ne.key===null?F:ne.key),g=i(ne,g,F),ue===null?Y=ne:ue.sibling=ne,ue=ne);return e&&q.forEach(function(An){return t(y,An)}),le&&Gt(y,F),Y}function Z(y,g,S,M){if(S==null)throw Error(s(151));for(var Y=null,ue=null,q=g,F=g=0,ne=null,se=S.next();q!==null&&!se.done;F++,se=S.next()){q.index>F?(ne=q,q=null):ne=q.sibling;var An=N(y,q,se.value,M);if(An===null){q===null&&(q=ne);break}e&&q&&An.alternate===null&&t(y,q),g=i(An,g,F),ue===null?Y=An:ue.sibling=An,ue=An,q=ne}if(se.done)return n(y,q),le&&Gt(y,F),Y;if(q===null){for(;!se.done;F++,se=S.next())se=k(y,se.value,M),se!==null&&(g=i(se,g,F),ue===null?Y=se:ue.sibling=se,ue=se);return le&&Gt(y,F),Y}for(q=a(q);!se.done;F++,se=S.next())se=E(q,y,F,se.value,M),se!==null&&(e&&se.alternate!==null&&q.delete(se.key===null?F:se.key),g=i(se,g,F),ue===null?Y=se:ue.sibling=se,ue=se);return e&&q.forEach(function(e0){return t(y,e0)}),le&&Gt(y,F),Y}function be(y,g,S,M){if(typeof S=="object"&&S!==null&&S.type===ae&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Q:e:{for(var Y=S.key;g!==null;){if(g.key===Y){if(Y=S.type,Y===ae){if(g.tag===7){n(y,g.sibling),M=l(g,S.props.children),M.return=y,y=M;break e}}else if(g.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ve&&Gn(Y)===g.type){n(y,g.sibling),M=l(g,S.props),nl(M,S),M.return=y,y=M;break e}n(y,g);break}else t(y,g);g=g.sibling}S.type===ae?(M=Hn(S.props.children,y.mode,M,S.key),M.return=y,y=M):(M=li(S.type,S.key,S.props,null,y.mode,M),nl(M,S),M.return=y,y=M)}return u(y);case G:e:{for(Y=S.key;g!==null;){if(g.key===Y)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){n(y,g.sibling),M=l(g,S.children||[]),M.return=y,y=M;break e}else{n(y,g);break}else t(y,g);g=g.sibling}M=Qu(S,y.mode,M),M.return=y,y=M}return u(y);case Ve:return S=Gn(S),be(y,g,S,M)}if(Et(S))return U(y,g,S,M);if(We(S)){if(Y=We(S),typeof Y!="function")throw Error(s(150));return S=Y.call(S),Z(y,g,S,M)}if(typeof S.then=="function")return be(y,g,fi(S),M);if(S.$$typeof===Ce)return be(y,g,si(y,S),M);di(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(n(y,g.sibling),M=l(g,S),M.return=y,y=M):(n(y,g),M=Gu(S,y.mode,M),M.return=y,y=M),u(y)):n(y,g)}return function(y,g,S,M){try{tl=0;var Y=be(y,g,S,M);return ya=null,Y}catch(q){if(q===ba||q===oi)throw q;var ue=ot(29,q,null,y.mode);return ue.lanes=M,ue.return=y,ue}finally{}}}var Zn=ur(!0),sr=ur(!1),fn=!1;function ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ns(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function dn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(oe&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=ai(e),Zo(e,null,n),t}return ni(e,a,t,n),ai(e)}function al(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Wc(e,n)}}function as(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=u:i=i.next=u,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ls=!1;function ll(){if(ls){var e=va;if(e!==null)throw e}}function il(e,t,n,a){ls=!1;var l=e.updateQueue;fn=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var m=f,C=m.next;m.next=null,u===null?i=C:u.next=C,u=m;var A=e.alternate;A!==null&&(A=A.updateQueue,f=A.lastBaseUpdate,f!==u&&(f===null?A.firstBaseUpdate=C:f.next=C,A.lastBaseUpdate=m))}if(i!==null){var k=l.baseState;u=0,A=C=m=null,f=i;do{var N=f.lane&-536870913,E=N!==f.lane;if(E?(te&N)===N:(a&N)===N){N!==0&&N===ga&&(ls=!0),A!==null&&(A=A.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var U=e,Z=f;N=t;var be=n;switch(Z.tag){case 1:if(U=Z.payload,typeof U=="function"){k=U.call(be,k,N);break e}k=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=Z.payload,N=typeof U=="function"?U.call(be,k,N):U,N==null)break e;k=R({},k,N);break e;case 2:fn=!0}}N=f.callback,N!==null&&(e.flags|=64,E&&(e.flags|=8192),E=l.callbacks,E===null?l.callbacks=[N]:E.push(N))}else E={lane:N,tag:f.tag,payload:f.payload,callback:f.callback,next:null},A===null?(C=A=E,m=k):A=A.next=E,u|=N;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;E=f,f=E.next,E.next=null,l.lastBaseUpdate=E,l.shared.pending=null}}while(!0);A===null&&(m=k),l.baseState=m,l.firstBaseUpdate=C,l.lastBaseUpdate=A,i===null&&(l.shared.lanes=0),bn|=u,e.lanes=u,e.memoizedState=k}}function cr(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function or(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)cr(n[e],t)}var xa=v(null),pi=v(0);function rr(e,t){e=Pt,j(pi,e),j(xa,t),Pt=e|t.baseLanes}function is(){j(pi,Pt),j(xa,xa.current)}function us(){Pt=pi.current,_(xa),_(pi)}var rt=v(null),Ct=null;function hn(e){var t=e.alternate;j(_e,_e.current&1),j(rt,e),Ct===null&&(t===null||xa.current!==null||t.memoizedState!==null)&&(Ct=e)}function ss(e){j(_e,_e.current),j(rt,e),Ct===null&&(Ct=e)}function fr(e){e.tag===22?(j(_e,_e.current),j(rt,e),Ct===null&&(Ct=e)):mn()}function mn(){j(_e,_e.current),j(rt,rt.current)}function ft(e){_(rt),Ct===e&&(Ct=null),_(_e)}var _e=v(0);function hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||pc(n)||hc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,$=null,ge=null,je=null,mi=!1,Sa=!1,Xn=!1,gi=0,ul=0,Ta=null,Zh=0;function De(){throw Error(s(321))}function cs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function os(e,t,n,a,l,i){return Xt=i,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Jr:Ns,Xn=!1,i=n(a,l),Xn=!1,Sa&&(i=pr(t,n,a,l)),dr(e),i}function dr(e){D.H=ol;var t=ge!==null&&ge.next!==null;if(Xt=0,je=ge=$=null,mi=!1,ul=0,Ta=null,t)throw Error(s(300));e===null||Ue||(e=e.dependencies,e!==null&&ui(e)&&(Ue=!0))}function pr(e,t,n,a){$=e;var l=0;do{if(Sa&&(Ta=null),ul=0,Sa=!1,25<=l)throw Error(s(301));if(l+=1,je=ge=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=$r,i=t(n,a)}while(Sa);return i}function Xh(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?sl(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&($.flags|=1024),t}function rs(){var e=gi!==0;return gi=0,e}function fs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ds(e){if(mi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mi=!1}Xt=0,je=ge=$=null,Sa=!1,ul=gi=0,Ta=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?$.memoizedState=je=e:je=je.next=e,je}function Re(){if(ge===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=je===null?$.memoizedState:je.next;if(t!==null)je=t,ge=e;else{if(e===null)throw $.alternate===null?Error(s(467)):Error(s(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},je===null?$.memoizedState=je=e:je=je.next=e}return je}function vi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(e){var t=ul;return ul+=1,Ta===null&&(Ta=[]),e=ar(Ta,e,t),t=$,(je===null?t.memoizedState:je.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Jr:Ns),e}function bi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sl(e);if(e.$$typeof===Ce)return Qe(e)}throw Error(s(438,String(e)))}function ps(e){var t=null,n=$.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=$.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=vi(),$.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Wn;return t.index++,n}function Vt(e,t){return typeof t=="function"?t(e):t}function yi(e){var t=Re();return hs(t,ge,e)}function hs(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var f=u=null,m=null,C=t,A=!1;do{var k=C.lane&-536870913;if(k!==C.lane?(te&k)===k:(Xt&k)===k){var N=C.revertLane;if(N===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),k===ga&&(A=!0);else if((Xt&N)===N){C=C.next,N===ga&&(A=!0);continue}else k={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},m===null?(f=m=k,u=i):m=m.next=k,$.lanes|=N,bn|=N;k=C.action,Xn&&n(i,k),i=C.hasEagerState?C.eagerState:n(i,k)}else N={lane:k,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},m===null?(f=m=N,u=i):m=m.next=N,$.lanes|=k,bn|=k;C=C.next}while(C!==null&&C!==t);if(m===null?u=i:m.next=f,!ct(i,e.memoizedState)&&(Ue=!0,A&&(n=va,n!==null)))throw n;e.memoizedState=i,e.baseState=u,e.baseQueue=m,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ms(e){var t=Re(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var u=l=l.next;do i=e(i,u.action),u=u.next;while(u!==l);ct(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function hr(e,t,n){var a=$,l=Re(),i=le;if(i){if(n===void 0)throw Error(s(407));n=n()}else n=t();var u=!ct((ge||l).memoizedState,n);if(u&&(l.memoizedState=n,Ue=!0),l=l.queue,bs(vr.bind(null,a,l,e),[e]),l.getSnapshot!==t||u||je!==null&&je.memoizedState.tag&1){if(a.flags|=2048,Ca(9,{destroy:void 0},gr.bind(null,a,l,n,t),null),Se===null)throw Error(s(349));i||(Xt&127)!==0||mr(a,t,n)}return n}function mr(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t=vi(),$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gr(e,t,n,a){t.value=n,t.getSnapshot=a,br(t)&&yr(e)}function vr(e,t,n){return n(function(){br(t)&&yr(e)})}function br(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function yr(e){var t=Un(e,2);t!==null&&lt(t,e,2)}function gs(e){var t=$e();if(typeof e=="function"){var n=e;if(e=n(),Xn){an(!0);try{n()}finally{an(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:e},t}function xr(e,t,n,a){return e.baseState=n,hs(e,ge,typeof a=="function"?a:Vt)}function Vh(e,t,n,a,l){if(Ti(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};D.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Sr(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Sr(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=D.T,u={};D.T=u;try{var f=n(l,a),m=D.S;m!==null&&m(u,f),Tr(e,t,f)}catch(C){vs(e,t,C)}finally{i!==null&&u.types!==null&&(i.types=u.types),D.T=i}}else try{i=n(l,a),Tr(e,t,i)}catch(C){vs(e,t,C)}}function Tr(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Cr(e,t,a)},function(a){return vs(e,t,a)}):Cr(e,t,n)}function Cr(e,t,n){t.status="fulfilled",t.value=n,Nr(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Sr(e,n)))}function vs(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Nr(t),t=t.next;while(t!==a)}e.action=null}function Nr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zr(e,t){return t}function Er(e,t){if(le){var n=Se.formState;if(n!==null){e:{var a=$;if(le){if(Ne){t:{for(var l=Ne,i=Tt;l.nodeType!==8;){if(!i){l=null;break t}if(l=Nt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Ne=Nt(l.nextSibling),a=l.data==="F!";break e}}on(a)}a=!1}a&&(t=n[0])}}return n=$e(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:t},n.queue=a,n=Xr.bind(null,$,a),a.dispatch=n,a=gs(!1),i=Cs.bind(null,$,!1,a.queue),a=$e(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=Vh.bind(null,$,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function wr(e){var t=Re();return Ar(t,ge,e)}function Ar(e,t,n){if(t=hs(e,t,zr)[0],e=yi(Vt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=sl(t)}catch(u){throw u===ba?oi:u}else a=t;t=Re();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&($.flags|=2048,Ca(9,{destroy:void 0},Kh.bind(null,l,n),null)),[a,i,e]}function Kh(e,t){e.action=t}function Dr(e){var t=Re(),n=ge;if(n!==null)return Ar(t,n,e);Re(),t=t.memoizedState,n=Re();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ca(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=$.updateQueue,t===null&&(t=vi(),$.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Mr(){return Re().memoizedState}function xi(e,t,n,a){var l=$e();$.flags|=e,l.memoizedState=Ca(1|t,{destroy:void 0},n,a===void 0?null:a)}function Si(e,t,n,a){var l=Re();a=a===void 0?null:a;var i=l.memoizedState.inst;ge!==null&&a!==null&&cs(a,ge.memoizedState.deps)?l.memoizedState=Ca(t,i,n,a):($.flags|=e,l.memoizedState=Ca(1|t,i,n,a))}function kr(e,t){xi(8390656,8,e,t)}function bs(e,t){Si(2048,8,e,t)}function Jh(e){$.flags|=4;var t=$.updateQueue;if(t===null)t=vi(),$.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _r(e){var t=Re().memoizedState;return Jh({ref:t,nextImpl:e}),function(){if((oe&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Rr(e,t){return Si(4,2,e,t)}function Or(e,t){return Si(4,4,e,t)}function jr(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ur(e,t,n){n=n!=null?n.concat([e]):null,Si(4,4,jr.bind(null,t,e),n)}function ys(){}function Hr(e,t){var n=Re();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&cs(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Br(e,t){var n=Re();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&cs(t,a[1]))return a[0];if(a=e(),Xn){an(!0);try{e()}finally{an(!1)}}return n.memoizedState=[a,t],a}function xs(e,t,n){return n===void 0||(Xt&1073741824)!==0&&(te&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Lf(),$.lanes|=e,bn|=e,n)}function qr(e,t,n,a){return ct(n,t)?n:xa.current!==null?(e=xs(e,n,a),ct(e,t)||(Ue=!0),e):(Xt&42)===0||(Xt&1073741824)!==0&&(te&261930)===0?(Ue=!0,e.memoizedState=n):(e=Lf(),$.lanes|=e,bn|=e,t)}function Lr(e,t,n,a,l){var i=O.p;O.p=i!==0&&8>i?i:8;var u=D.T,f={};D.T=f,Cs(e,!1,t,n);try{var m=l(),C=D.S;if(C!==null&&C(f,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var A=Qh(m,a);cl(e,t,A,ht(e))}else cl(e,t,a,ht(e))}catch(k){cl(e,t,{then:function(){},status:"rejected",reason:k},ht())}finally{O.p=i,u!==null&&f.types!==null&&(u.types=f.types),D.T=u}}function $h(){}function Ss(e,t,n,a){if(e.tag!==5)throw Error(s(476));var l=Yr(e).queue;Lr(e,l,t,X,n===null?$h:function(){return Gr(e),n(a)})}function Yr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:X},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Gr(e){var t=Yr(e);t.next===null&&(t=e.alternate.memoizedState),cl(e,t.next.queue,{},ht())}function Ts(){return Qe(zl)}function Qr(){return Re().memoizedState}function Zr(){return Re().memoizedState}function Fh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ht();e=dn(n);var a=pn(t,e,n);a!==null&&(lt(a,t,n),al(a,t,n)),t={cache:Wu()},e.payload=t;return}t=t.return}}function Wh(e,t,n){var a=ht();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ti(e)?Vr(t,n):(n=Lu(e,t,n,a),n!==null&&(lt(n,e,a),Kr(n,t,a)))}function Xr(e,t,n){var a=ht();cl(e,t,n,a)}function cl(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ti(e))Vr(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,f=i(u,n);if(l.hasEagerState=!0,l.eagerState=f,ct(f,u))return ni(e,t,l,0),Se===null&&ti(),!1}catch{}finally{}if(n=Lu(e,t,l,a),n!==null)return lt(n,e,a),Kr(n,t,a),!0}return!1}function Cs(e,t,n,a){if(a={lane:2,revertLane:tc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ti(e)){if(t)throw Error(s(479))}else t=Lu(e,n,a,2),t!==null&&lt(t,e,2)}function Ti(e){var t=e.alternate;return e===$||t!==null&&t===$}function Vr(e,t){Sa=mi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kr(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Wc(e,n)}}var ol={readContext:Qe,use:bi,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};ol.useEffectEvent=De;var Jr={readContext:Qe,use:bi,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:kr,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,xi(4194308,4,jr.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xi(4194308,4,e,t)},useInsertionEffect:function(e,t){xi(4,2,e,t)},useMemo:function(e,t){var n=$e();t=t===void 0?null:t;var a=e();if(Xn){an(!0);try{e()}finally{an(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=$e();if(n!==void 0){var l=n(t);if(Xn){an(!0);try{n(t)}finally{an(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Wh.bind(null,$,e),[a.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=gs(e);var t=e.queue,n=Xr.bind(null,$,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ys,useDeferredValue:function(e,t){var n=$e();return xs(n,e,t)},useTransition:function(){var e=gs(!1);return e=Lr.bind(null,$,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=$,l=$e();if(le){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Se===null)throw Error(s(349));(te&127)!==0||mr(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,kr(vr.bind(null,a,i,e),[e]),a.flags|=2048,Ca(9,{destroy:void 0},gr.bind(null,a,i,n,t),null),n},useId:function(){var e=$e(),t=Se.identifierPrefix;if(le){var n=_t,a=kt;n=(a&~(1<<32-st(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=gi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Zh++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Er,useActionState:Er,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Cs.bind(null,$,!0,n),n.dispatch=t,[e,t]},useMemoCache:ps,useCacheRefresh:function(){return $e().memoizedState=Fh.bind(null,$)},useEffectEvent:function(e){var t=$e(),n={impl:e};return t.memoizedState=n,function(){if((oe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Ns={readContext:Qe,use:bi,useCallback:Hr,useContext:Qe,useEffect:bs,useImperativeHandle:Ur,useInsertionEffect:Rr,useLayoutEffect:Or,useMemo:Br,useReducer:yi,useRef:Mr,useState:function(){return yi(Vt)},useDebugValue:ys,useDeferredValue:function(e,t){var n=Re();return qr(n,ge.memoizedState,e,t)},useTransition:function(){var e=yi(Vt)[0],t=Re().memoizedState;return[typeof e=="boolean"?e:sl(e),t]},useSyncExternalStore:hr,useId:Qr,useHostTransitionStatus:Ts,useFormState:wr,useActionState:wr,useOptimistic:function(e,t){var n=Re();return xr(n,ge,e,t)},useMemoCache:ps,useCacheRefresh:Zr};Ns.useEffectEvent=_r;var $r={readContext:Qe,use:bi,useCallback:Hr,useContext:Qe,useEffect:bs,useImperativeHandle:Ur,useInsertionEffect:Rr,useLayoutEffect:Or,useMemo:Br,useReducer:ms,useRef:Mr,useState:function(){return ms(Vt)},useDebugValue:ys,useDeferredValue:function(e,t){var n=Re();return ge===null?xs(n,e,t):qr(n,ge.memoizedState,e,t)},useTransition:function(){var e=ms(Vt)[0],t=Re().memoizedState;return[typeof e=="boolean"?e:sl(e),t]},useSyncExternalStore:hr,useId:Qr,useHostTransitionStatus:Ts,useFormState:Dr,useActionState:Dr,useOptimistic:function(e,t){var n=Re();return ge!==null?xr(n,ge,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ps,useCacheRefresh:Zr};$r.useEffectEvent=_r;function zs(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:R({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Es={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=ht(),l=dn(a);l.payload=t,n!=null&&(l.callback=n),t=pn(e,l,a),t!==null&&(lt(t,e,a),al(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=ht(),l=dn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=pn(e,l,a),t!==null&&(lt(t,e,a),al(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ht(),a=dn(n);a.tag=2,t!=null&&(a.callback=t),t=pn(e,a,n),t!==null&&(lt(t,e,n),al(t,e,n))}};function Fr(e,t,n,a,l,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!$a(n,a)||!$a(l,i):!0}function Wr(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Es.enqueueReplaceState(t,t.state,null)}function Vn(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=R({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Ir(e){ei(e)}function Pr(e){console.error(e)}function ef(e){ei(e)}function Ci(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function tf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ws(e,t,n){return n=dn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ci(e,t)},n}function nf(e){return e=dn(e),e.tag=3,e}function af(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){tf(t,n,a)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){tf(t,n,a),typeof l!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function Ih(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ma(t,n,l,!0),n=rt.current,n!==null){switch(n.tag){case 31:case 13:return Ct===null?ji():n.alternate===null&&Me===0&&(Me=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===ri?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Is(e,a,l)),!1;case 22:return n.flags|=65536,a===ri?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Is(e,a,l)),!1}throw Error(s(435,n.tag))}return Is(e,a,l),ji(),!1}if(le)return t=rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Vu&&(e=Error(s(422),{cause:a}),Ia(yt(e,n)))):(a!==Vu&&(t=Error(s(423),{cause:a}),Ia(yt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=yt(a,n),l=ws(e.stateNode,a,l),as(e,l),Me!==4&&(Me=2)),!1;var i=Error(s(520),{cause:a});if(i=yt(i,n),vl===null?vl=[i]:vl.push(i),Me!==4&&(Me=2),t===null)return!0;a=yt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=ws(n.stateNode,a,e),as(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(yn===null||!yn.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=nf(l),af(l,e,n,a),as(n,l),!1}n=n.return}while(n!==null);return!1}var As=Error(s(461)),Ue=!1;function Ze(e,t,n,a){t.child=e===null?sr(t,null,n,a):Zn(t,e.child,n,a)}function lf(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var u={};for(var f in a)f!=="ref"&&(u[f]=a[f])}else u=a;return Ln(t),a=os(e,t,n,u,i,l),f=rs(),e!==null&&!Ue?(fs(e,t,l),Kt(e,t,l)):(le&&f&&Zu(t),t.flags|=1,Ze(e,t,a,l),t.child)}function uf(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!Yu(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,sf(e,t,i,a,l)):(e=li(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Us(e,l)){var u=i.memoizedProps;if(n=n.compare,n=n!==null?n:$a,n(u,a)&&e.ref===t.ref)return Kt(e,t,l)}return t.flags|=1,e=Yt(i,a),e.ref=t.ref,e.return=t,t.child=e}function sf(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if($a(i,a)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=a=i,Us(e,l))(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,Kt(e,t,l)}return Ds(e,t,n,a,l)}function cf(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return of(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ci(t,i!==null?i.cachePool:null),i!==null?rr(t,i):is(),fr(t);else return a=t.lanes=536870912,of(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(ci(t,i.cachePool),rr(t,i),mn(),t.memoizedState=null):(e!==null&&ci(t,null),is(),mn());return Ze(e,t,l,n),t.child}function rl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function of(e,t,n,a,l){var i=Pu();return i=i===null?null:{parent:Oe._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&ci(t,null),is(),fr(t),e!==null&&ma(e,t,a,!0),t.childLanes=l,null}function Ni(e,t){return t=Ei({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function rf(e,t,n){return Zn(t,e.child,null,n),e=Ni(t,t.pendingProps),e.flags|=2,ft(t),t.memoizedState=null,e}function Ph(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(le){if(a.mode==="hidden")return e=Ni(t,a),t.lanes=536870912,rl(null,e);if(ss(t),(e=Ne)?(e=Td(e,Tt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sn!==null?{id:kt,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},n=Vo(e),n.return=t,t.child=n,Ge=t,Ne=null)):e=null,e===null)throw on(t);return t.lanes=536870912,null}return Ni(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(ss(t),l)if(t.flags&256)t.flags&=-257,t=rf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Ue||ma(e,t,n,!1),l=(n&e.childLanes)!==0,Ue||l){if(a=Se,a!==null&&(u=Ic(a,n),u!==0&&u!==i.retryLane))throw i.retryLane=u,Un(e,u),lt(a,e,u),As;ji(),t=rf(e,t,n)}else e=i.treeContext,Ne=Nt(u.nextSibling),Ge=t,le=!0,cn=null,Tt=!1,e!==null&&$o(t,e),t=Ni(t,a),t.flags|=4096;return t}return e=Yt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function zi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ds(e,t,n,a,l){return Ln(t),n=os(e,t,n,a,void 0,l),a=rs(),e!==null&&!Ue?(fs(e,t,l),Kt(e,t,l)):(le&&a&&Zu(t),t.flags|=1,Ze(e,t,n,l),t.child)}function ff(e,t,n,a,l,i){return Ln(t),t.updateQueue=null,n=pr(t,a,n,l),dr(e),a=rs(),e!==null&&!Ue?(fs(e,t,i),Kt(e,t,i)):(le&&a&&Zu(t),t.flags|=1,Ze(e,t,n,i),t.child)}function df(e,t,n,a,l){if(Ln(t),t.stateNode===null){var i=fa,u=n.contextType;typeof u=="object"&&u!==null&&(i=Qe(u)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Es,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},ts(t),u=n.contextType,i.context=typeof u=="object"&&u!==null?Qe(u):fa,i.state=t.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(zs(t,n,u,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Es.enqueueReplaceState(i,i.state,null),il(t,a,i,l),ll(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,m=Vn(n,f);i.props=m;var C=i.context,A=n.contextType;u=fa,typeof A=="object"&&A!==null&&(u=Qe(A));var k=n.getDerivedStateFromProps;A=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,A||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||C!==u)&&Wr(t,i,a,u),fn=!1;var N=t.memoizedState;i.state=N,il(t,a,i,l),ll(),C=t.memoizedState,f||N!==C||fn?(typeof k=="function"&&(zs(t,n,k,a),C=t.memoizedState),(m=fn||Fr(t,n,m,a,N,C,u))?(A||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=C),i.props=a,i.state=C,i.context=u,a=m):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,ns(e,t),u=t.memoizedProps,A=Vn(n,u),i.props=A,k=t.pendingProps,N=i.context,C=n.contextType,m=fa,typeof C=="object"&&C!==null&&(m=Qe(C)),f=n.getDerivedStateFromProps,(C=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==k||N!==m)&&Wr(t,i,a,m),fn=!1,N=t.memoizedState,i.state=N,il(t,a,i,l),ll();var E=t.memoizedState;u!==k||N!==E||fn||e!==null&&e.dependencies!==null&&ui(e.dependencies)?(typeof f=="function"&&(zs(t,n,f,a),E=t.memoizedState),(A=fn||Fr(t,n,A,a,N,E,m)||e!==null&&e.dependencies!==null&&ui(e.dependencies))?(C||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,E,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,E,m)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=E),i.props=a,i.state=E,i.context=m,a=A):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,zi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Zn(t,e.child,null,l),t.child=Zn(t,null,n,l)):Ze(e,t,n,l),t.memoizedState=i.state,e=t.child):e=Kt(e,t,l),e}function pf(e,t,n,a){return Bn(),t.flags|=256,Ze(e,t,n,a),t.child}var Ms={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ks(e){return{baseLanes:e,cachePool:tr()}}function _s(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=pt),e}function hf(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),u&&(l=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(le){if(l?hn(t):mn(),(e=Ne)?(e=Td(e,Tt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sn!==null?{id:kt,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},n=Vo(e),n.return=t,t.child=n,Ge=t,Ne=null)):e=null,e===null)throw on(t);return hc(e)?t.lanes=32:t.lanes=536870912,null}var f=a.children;return a=a.fallback,l?(mn(),l=t.mode,f=Ei({mode:"hidden",children:f},l),a=Hn(a,l,n,null),f.return=t,a.return=t,f.sibling=a,t.child=f,a=t.child,a.memoizedState=ks(n),a.childLanes=_s(e,u,n),t.memoizedState=Ms,rl(null,a)):(hn(t),Rs(t,f))}var m=e.memoizedState;if(m!==null&&(f=m.dehydrated,f!==null)){if(i)t.flags&256?(hn(t),t.flags&=-257,t=Os(e,t,n)):t.memoizedState!==null?(mn(),t.child=e.child,t.flags|=128,t=null):(mn(),f=a.fallback,l=t.mode,a=Ei({mode:"visible",children:a.children},l),f=Hn(f,l,n,null),f.flags|=2,a.return=t,f.return=t,a.sibling=f,t.child=a,Zn(t,e.child,null,n),a=t.child,a.memoizedState=ks(n),a.childLanes=_s(e,u,n),t.memoizedState=Ms,t=rl(null,a));else if(hn(t),hc(f)){if(u=f.nextSibling&&f.nextSibling.dataset,u)var C=u.dgst;u=C,a=Error(s(419)),a.stack="",a.digest=u,Ia({value:a,source:null,stack:null}),t=Os(e,t,n)}else if(Ue||ma(e,t,n,!1),u=(n&e.childLanes)!==0,Ue||u){if(u=Se,u!==null&&(a=Ic(u,n),a!==0&&a!==m.retryLane))throw m.retryLane=a,Un(e,a),lt(u,e,a),As;pc(f)||ji(),t=Os(e,t,n)}else pc(f)?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,Ne=Nt(f.nextSibling),Ge=t,le=!0,cn=null,Tt=!1,e!==null&&$o(t,e),t=Rs(t,a.children),t.flags|=4096);return t}return l?(mn(),f=a.fallback,l=t.mode,m=e.child,C=m.sibling,a=Yt(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,C!==null?f=Yt(C,f):(f=Hn(f,l,n,null),f.flags|=2),f.return=t,a.return=t,a.sibling=f,t.child=a,rl(null,a),a=t.child,f=e.child.memoizedState,f===null?f=ks(n):(l=f.cachePool,l!==null?(m=Oe._currentValue,l=l.parent!==m?{parent:m,pool:m}:l):l=tr(),f={baseLanes:f.baseLanes|n,cachePool:l}),a.memoizedState=f,a.childLanes=_s(e,u,n),t.memoizedState=Ms,rl(e.child,a)):(hn(t),n=e.child,e=n.sibling,n=Yt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=n,t.memoizedState=null,n)}function Rs(e,t){return t=Ei({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ei(e,t){return e=ot(22,e,null,t),e.lanes=0,e}function Os(e,t,n){return Zn(t,e.child,null,n),e=Rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),$u(e.return,t,n)}function js(e,t,n,a,l,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=n,u.tailMode=l,u.treeForkCount=i)}function gf(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var u=_e.current,f=(u&2)!==0;if(f?(u=u&1|2,t.flags|=128):u&=1,j(_e,u),Ze(e,t,a,n),a=le?Wa:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mf(e,n,t);else if(e.tag===19)mf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&hi(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),js(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&hi(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}js(t,!0,n,null,i,a);break;case"together":js(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ma(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Us(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ui(e)))}function em(e,t,n){switch(t.tag){case 3:Je(t,t.stateNode.containerInfo),rn(t,Oe,e.memoizedState.cache),Bn();break;case 27:case 5:Ua(t);break;case 4:Je(t,t.stateNode.containerInfo);break;case 10:rn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ss(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(hn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?hf(e,t,n):(hn(t),e=Kt(e,t,n),e!==null?e.sibling:null);hn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(ma(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return gf(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),j(_e,_e.current),a)break;return null;case 22:return t.lanes=0,cf(e,t,n,t.pendingProps);case 24:rn(t,Oe,e.memoizedState.cache)}return Kt(e,t,n)}function vf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ue=!0;else{if(!Us(e,n)&&(t.flags&128)===0)return Ue=!1,em(e,t,n);Ue=(e.flags&131072)!==0}else Ue=!1,le&&(t.flags&1048576)!==0&&Jo(t,Wa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Gn(t.elementType),t.type=e,typeof e=="function")Yu(e)?(a=Vn(e,a),t.tag=1,t=df(null,t,e,a,n)):(t.tag=0,t=Ds(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===W){t.tag=11,t=lf(null,t,e,a,n);break e}else if(l===K){t.tag=14,t=uf(null,t,e,a,n);break e}}throw t=Ht(e)||e,Error(s(306,t,""))}}return t;case 0:return Ds(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Vn(a,t.pendingProps),df(e,t,a,l,n);case 3:e:{if(Je(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,ns(e,t),il(t,a,null,n);var u=t.memoizedState;if(a=u.cache,rn(t,Oe,a),a!==i.cache&&Fu(t,[Oe],n,!0),ll(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=pf(e,t,a,n);break e}else if(a!==l){l=yt(Error(s(424)),t),Ia(l),t=pf(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=Nt(e.firstChild),Ge=t,le=!0,cn=null,Tt=!0,n=sr(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Bn(),a===l){t=Kt(e,t,n);break e}Ze(e,t,a,n)}t=t.child}return t;case 26:return zi(e,t),e===null?(n=Ad(t.type,null,t.pendingProps,null))?t.memoizedState=n:le||(n=t.type,e=t.pendingProps,a=Gi(I.current).createElement(n),a[Ye]=t,a[Ie]=e,Xe(a,n,e),qe(a),t.stateNode=a):t.memoizedState=Ad(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ua(t),e===null&&le&&(a=t.stateNode=zd(t.type,t.pendingProps,I.current),Ge=t,Tt=!0,l=Ne,Cn(t.type)?(mc=l,Ne=Nt(a.firstChild)):Ne=l),Ze(e,t,t.pendingProps.children,n),zi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&le&&((l=a=Ne)&&(a=Mm(a,t.type,t.pendingProps,Tt),a!==null?(t.stateNode=a,Ge=t,Ne=Nt(a.firstChild),Tt=!1,l=!0):l=!1),l||on(t)),Ua(t),l=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,rc(l,i)?a=null:u!==null&&rc(l,u)&&(t.flags|=32),t.memoizedState!==null&&(l=os(e,t,Xh,null,null,n),zl._currentValue=l),zi(e,t),Ze(e,t,a,n),t.child;case 6:return e===null&&le&&((e=n=Ne)&&(n=km(n,t.pendingProps,Tt),n!==null?(t.stateNode=n,Ge=t,Ne=null,e=!0):e=!1),e||on(t)),null;case 13:return hf(e,t,n);case 4:return Je(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Zn(t,null,a,n):Ze(e,t,a,n),t.child;case 11:return lf(e,t,t.type,t.pendingProps,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,rn(t,t.type,a.value),Ze(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Ln(t),l=Qe(l),a=a(l),t.flags|=1,Ze(e,t,a,n),t.child;case 14:return uf(e,t,t.type,t.pendingProps,n);case 15:return sf(e,t,t.type,t.pendingProps,n);case 19:return gf(e,t,n);case 31:return Ph(e,t,n);case 22:return cf(e,t,n,t.pendingProps);case 24:return Ln(t),a=Qe(Oe),e===null?(l=Pu(),l===null&&(l=Se,i=Wu(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},ts(t),rn(t,Oe,l)):((e.lanes&n)!==0&&(ns(e,t),il(t,null,null,n),ll()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),rn(t,Oe,a)):(a=i.cache,rn(t,Oe,a),a!==l.cache&&Fu(t,[Oe],n,!0))),Ze(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Jt(e){e.flags|=4}function Hs(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Zf())e.flags|=8192;else throw Qn=ri,es}else e.flags&=-16777217}function bf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rd(t))if(Zf())e.flags|=8192;else throw Qn=ri,es}function wi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$c():536870912,e.lanes|=t,wa|=t)}function fl(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function tm(e,t,n){var a=t.pendingProps;switch(Xu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Zt(Oe),ke(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ha(t)?Jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ku())),ze(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Jt(t),i!==null?(ze(t),bf(t,i)):(ze(t),Hs(t,l,null,a,n))):i?i!==e.memoizedState?(Jt(t),ze(t),bf(t,i)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Jt(t),ze(t),Hs(t,l,e,a,n)),null;case 27:if(Bl(t),n=I.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Jt(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return ze(t),null}e=H.current,ha(t)?Fo(t):(e=zd(l,a,n),t.stateNode=e,Jt(t))}return ze(t),null;case 5:if(Bl(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Jt(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return ze(t),null}if(i=H.current,ha(t))Fo(t);else{var u=Gi(I.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(l,{is:a.is}):u.createElement(l)}}i[Ye]=t,i[Ie]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Xe(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Jt(t)}}return ze(t),Hs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Jt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=I.current,ha(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=Ge,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Ye]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||hd(e.nodeValue,n)),e||on(t,!0)}else e=Gi(e).createTextNode(a),e[Ye]=t,t.stateNode=e}return ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=ha(t),n!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ye]=t}else Bn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else n=Ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ft(t),t):(ft(t),null);if((t.flags&128)!==0)throw Error(s(558))}return ze(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ha(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Ye]=t}else Bn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),l=!1}else l=Ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(ft(t),t):(ft(t),null)}return ft(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),wi(t,t.updateQueue),ze(t),null);case 4:return ke(),e===null&&ic(t.stateNode.containerInfo),ze(t),null;case 10:return Zt(t.type),ze(t),null;case 19:if(_(_e),a=t.memoizedState,a===null)return ze(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)fl(a,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=hi(e),i!==null){for(t.flags|=128,fl(a,!1),e=i.updateQueue,t.updateQueue=e,wi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Xo(n,e),n=n.sibling;return j(_e,_e.current&1|2),le&&Gt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&it()>_i&&(t.flags|=128,l=!0,fl(a,!1),t.lanes=4194304)}else{if(!l)if(e=hi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,wi(t,e),fl(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!le)return ze(t),null}else 2*it()-a.renderingStartTime>_i&&n!==536870912&&(t.flags|=128,l=!0,fl(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=it(),e.sibling=null,n=_e.current,j(_e,l?n&1|2:n&1),le&&Gt(t,a.treeForkCount),e):(ze(t),null);case 22:case 23:return ft(t),us(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),n=t.updateQueue,n!==null&&wi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&_(Yn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zt(Oe),ze(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function nm(e,t){switch(Xu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(Oe),ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Bl(t),null;case 31:if(t.memoizedState!==null){if(ft(t),t.alternate===null)throw Error(s(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(_e),null;case 4:return ke(),null;case 10:return Zt(t.type),null;case 22:case 23:return ft(t),us(),e!==null&&_(Yn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zt(Oe),null;case 25:return null;default:return null}}function yf(e,t){switch(Xu(t),t.tag){case 3:Zt(Oe),ke();break;case 26:case 27:case 5:Bl(t);break;case 4:ke();break;case 31:t.memoizedState!==null&&ft(t);break;case 13:ft(t);break;case 19:_(_e);break;case 10:Zt(t.type);break;case 22:case 23:ft(t),us(),e!==null&&_(Yn);break;case 24:Zt(Oe)}}function dl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,u=n.inst;a=i(),u.destroy=a}n=n.next}while(n!==l)}}catch(f){de(t,t.return,f)}}function gn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var u=a.inst,f=u.destroy;if(f!==void 0){u.destroy=void 0,l=t;var m=n,C=f;try{C()}catch(A){de(l,m,A)}}}a=a.next}while(a!==i)}}catch(A){de(t,t.return,A)}}function xf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{or(t,n)}catch(a){de(e,e.return,a)}}}function Sf(e,t,n){n.props=Vn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){de(e,t,a)}}function pl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){de(e,t,l)}}function Rt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){de(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){de(e,t,l)}else n.current=null}function Tf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){de(e,e.return,l)}}function Bs(e,t,n){try{var a=e.stateNode;Nm(a,e.type,n,t),a[Ie]=t}catch(l){de(e,e.return,l)}}function Cf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cn(e.type)||e.tag===4}function qs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ls(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qt));else if(a!==4&&(a===27&&Cn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ls(e,t,n),e=e.sibling;e!==null;)Ls(e,t,n),e=e.sibling}function Ai(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Cn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ai(e,t,n),e=e.sibling;e!==null;)Ai(e,t,n),e=e.sibling}function Nf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Xe(t,a,n),t[Ye]=e,t[Ie]=n}catch(i){de(e,e.return,i)}}var $t=!1,He=!1,Ys=!1,zf=typeof WeakSet=="function"?WeakSet:Set,Le=null;function am(e,t){if(e=e.containerInfo,cc=$i,e=Uo(e),Ou(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var u=0,f=-1,m=-1,C=0,A=0,k=e,N=null;t:for(;;){for(var E;k!==n||l!==0&&k.nodeType!==3||(f=u+l),k!==i||a!==0&&k.nodeType!==3||(m=u+a),k.nodeType===3&&(u+=k.nodeValue.length),(E=k.firstChild)!==null;)N=k,k=E;for(;;){if(k===e)break t;if(N===n&&++C===l&&(f=u),N===i&&++A===a&&(m=u),(E=k.nextSibling)!==null)break;k=N,N=k.parentNode}k=E}n=f===-1||m===-1?null:{start:f,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(oc={focusedElem:e,selectionRange:n},$i=!1,Le=t;Le!==null;)if(t=Le,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Le=e;else for(;Le!==null;){switch(t=Le,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var U=Vn(n.type,l);e=a.getSnapshotBeforeUpdate(U,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(Z){de(n,n.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)dc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":dc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Le=e;break}Le=t.return}}function Ef(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Wt(e,n),a&4&&dl(5,n);break;case 1:if(Wt(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(u){de(n,n.return,u)}else{var l=Vn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){de(n,n.return,u)}}a&64&&xf(n),a&512&&pl(n,n.return);break;case 3:if(Wt(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{or(e,t)}catch(u){de(n,n.return,u)}}break;case 27:t===null&&a&4&&Nf(n);case 26:case 5:Wt(e,n),t===null&&a&4&&Tf(n),a&512&&pl(n,n.return);break;case 12:Wt(e,n);break;case 31:Wt(e,n),a&4&&Df(e,n);break;case 13:Wt(e,n),a&4&&Mf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=dm.bind(null,n),_m(e,n))));break;case 22:if(a=n.memoizedState!==null||$t,!a){t=t!==null&&t.memoizedState!==null||He,l=$t;var i=He;$t=a,(He=t)&&!i?It(e,n,(n.subtreeFlags&8772)!==0):Wt(e,n),$t=l,He=i}break;case 30:break;default:Wt(e,n)}}function wf(e){var t=e.alternate;t!==null&&(e.alternate=null,wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,et=!1;function Ft(e,t,n){for(n=n.child;n!==null;)Af(e,t,n),n=n.sibling}function Af(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Ha,n)}catch{}switch(n.tag){case 26:He||Rt(n,t),Ft(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:He||Rt(n,t);var a=Ee,l=et;Cn(n.type)&&(Ee=n.stateNode,et=!1),Ft(e,t,n),Tl(n.stateNode),Ee=a,et=l;break;case 5:He||Rt(n,t);case 6:if(a=Ee,l=et,Ee=null,Ft(e,t,n),Ee=a,et=l,Ee!==null)if(et)try{(Ee.nodeType===9?Ee.body:Ee.nodeName==="HTML"?Ee.ownerDocument.body:Ee).removeChild(n.stateNode)}catch(i){de(n,t,i)}else try{Ee.removeChild(n.stateNode)}catch(i){de(n,t,i)}break;case 18:Ee!==null&&(et?(e=Ee,xd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ja(e)):xd(Ee,n.stateNode));break;case 4:a=Ee,l=et,Ee=n.stateNode.containerInfo,et=!0,Ft(e,t,n),Ee=a,et=l;break;case 0:case 11:case 14:case 15:gn(2,n,t),He||gn(4,n,t),Ft(e,t,n);break;case 1:He||(Rt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Sf(n,t,a)),Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:He=(a=He)||n.memoizedState!==null,Ft(e,t,n),He=a;break;default:Ft(e,t,n)}}function Df(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ja(e)}catch(n){de(t,t.return,n)}}}function Mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ja(e)}catch(n){de(t,t.return,n)}}function lm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zf),t;default:throw Error(s(435,e.tag))}}function Di(e,t){var n=lm(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=pm.bind(null,e,a);a.then(l,l)}})}function tt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,u=t,f=u;e:for(;f!==null;){switch(f.tag){case 27:if(Cn(f.type)){Ee=f.stateNode,et=!1;break e}break;case 5:Ee=f.stateNode,et=!1;break e;case 3:case 4:Ee=f.stateNode.containerInfo,et=!0;break e}f=f.return}if(Ee===null)throw Error(s(160));Af(i,u,l),Ee=null,et=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)kf(t,e),t=t.sibling}var At=null;function kf(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),nt(e),a&4&&(gn(3,e,e.return),dl(3,e),gn(5,e,e.return));break;case 1:tt(t,e),nt(e),a&512&&(He||n===null||Rt(n,n.return)),a&64&&$t&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=At;if(tt(t,e),nt(e),a&512&&(He||n===null||Rt(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[La]||i[Ye]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Xe(i,a,n),i[Ye]=e,qe(i),a=i;break e;case"link":var u=kd("link","href",l).get(a+(n.href||""));if(u){for(var f=0;f<u.length;f++)if(i=u[f],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(f,1);break t}}i=l.createElement(a),Xe(i,a,n),l.head.appendChild(i);break;case"meta":if(u=kd("meta","content",l).get(a+(n.content||""))){for(f=0;f<u.length;f++)if(i=u[f],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(f,1);break t}}i=l.createElement(a),Xe(i,a,n),l.head.appendChild(i);break;default:throw Error(s(468,a))}i[Ye]=e,qe(i),a=i}e.stateNode=a}else _d(l,e.type,e.stateNode);else e.stateNode=Md(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?_d(l,e.type,e.stateNode):Md(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Bs(e,e.memoizedProps,n.memoizedProps)}break;case 27:tt(t,e),nt(e),a&512&&(He||n===null||Rt(n,n.return)),n!==null&&a&4&&Bs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(tt(t,e),nt(e),a&512&&(He||n===null||Rt(n,n.return)),e.flags&32){l=e.stateNode;try{la(l,"")}catch(U){de(e,e.return,U)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Bs(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Ys=!0);break;case 6:if(tt(t,e),nt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(U){de(e,e.return,U)}}break;case 3:if(Xi=null,l=At,At=Qi(t.containerInfo),tt(t,e),At=l,nt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ja(t.containerInfo)}catch(U){de(e,e.return,U)}Ys&&(Ys=!1,_f(e));break;case 4:a=At,At=Qi(e.stateNode.containerInfo),tt(t,e),nt(e),At=a;break;case 12:tt(t,e),nt(e);break;case 31:tt(t,e),nt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Di(e,a)));break;case 13:tt(t,e),nt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ki=it()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Di(e,a)));break;case 22:l=e.memoizedState!==null;var m=n!==null&&n.memoizedState!==null,C=$t,A=He;if($t=C||l,He=A||m,tt(t,e),He=A,$t=C,nt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||m||$t||He||Kn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){m=n=t;try{if(i=m.stateNode,l)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{f=m.stateNode;var k=m.memoizedProps.style,N=k!=null&&k.hasOwnProperty("display")?k.display:null;f.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(U){de(m,m.return,U)}}}else if(t.tag===6){if(n===null){m=t;try{m.stateNode.nodeValue=l?"":m.memoizedProps}catch(U){de(m,m.return,U)}}}else if(t.tag===18){if(n===null){m=t;try{var E=m.stateNode;l?Sd(E,!0):Sd(m.stateNode,!1)}catch(U){de(m,m.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Di(e,n))));break;case 19:tt(t,e),nt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Di(e,a)));break;case 30:break;case 21:break;default:tt(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Cf(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,i=qs(e);Ai(e,i,l);break;case 5:var u=n.stateNode;n.flags&32&&(la(u,""),n.flags&=-33);var f=qs(e);Ai(e,f,u);break;case 3:case 4:var m=n.stateNode.containerInfo,C=qs(e);Ls(e,C,m);break;default:throw Error(s(161))}}catch(A){de(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _f(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_f(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ef(e,t.alternate,t),t=t.sibling}function Kn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:gn(4,t,t.return),Kn(t);break;case 1:Rt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Sf(t,t.return,n),Kn(t);break;case 27:Tl(t.stateNode);case 26:case 5:Rt(t,t.return),Kn(t);break;case 22:t.memoizedState===null&&Kn(t);break;case 30:Kn(t);break;default:Kn(t)}e=e.sibling}}function It(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:It(l,i,n),dl(4,i);break;case 1:if(It(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(C){de(a,a.return,C)}if(a=i,l=a.updateQueue,l!==null){var f=a.stateNode;try{var m=l.shared.hiddenCallbacks;if(m!==null)for(l.shared.hiddenCallbacks=null,l=0;l<m.length;l++)cr(m[l],f)}catch(C){de(a,a.return,C)}}n&&u&64&&xf(i),pl(i,i.return);break;case 27:Nf(i);case 26:case 5:It(l,i,n),n&&a===null&&u&4&&Tf(i),pl(i,i.return);break;case 12:It(l,i,n);break;case 31:It(l,i,n),n&&u&4&&Df(l,i);break;case 13:It(l,i,n),n&&u&4&&Mf(l,i);break;case 22:i.memoizedState===null&&It(l,i,n),pl(i,i.return);break;case 30:break;default:It(l,i,n)}t=t.sibling}}function Gs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Pa(n))}function Qs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pa(e))}function Dt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rf(e,t,n,a),t=t.sibling}function Rf(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,n,a),l&2048&&dl(9,t);break;case 1:Dt(e,t,n,a);break;case 3:Dt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pa(e)));break;case 12:if(l&2048){Dt(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,f=i.onPostCommit;typeof f=="function"&&f(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){de(t,t.return,m)}}else Dt(e,t,n,a);break;case 31:Dt(e,t,n,a);break;case 13:Dt(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Dt(e,t,n,a):hl(e,t):i._visibility&2?Dt(e,t,n,a):(i._visibility|=2,Na(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Gs(u,t);break;case 24:Dt(e,t,n,a),l&2048&&Qs(t.alternate,t);break;default:Dt(e,t,n,a)}}function Na(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,f=n,m=a,C=u.flags;switch(u.tag){case 0:case 11:case 15:Na(i,u,f,m,l),dl(8,u);break;case 23:break;case 22:var A=u.stateNode;u.memoizedState!==null?A._visibility&2?Na(i,u,f,m,l):hl(i,u):(A._visibility|=2,Na(i,u,f,m,l)),l&&C&2048&&Gs(u.alternate,u);break;case 24:Na(i,u,f,m,l),l&&C&2048&&Qs(u.alternate,u);break;default:Na(i,u,f,m,l)}t=t.sibling}}function hl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:hl(n,a),l&2048&&Gs(a.alternate,a);break;case 24:hl(n,a),l&2048&&Qs(a.alternate,a);break;default:hl(n,a)}t=t.sibling}}var ml=8192;function za(e,t,n){if(e.subtreeFlags&ml)for(e=e.child;e!==null;)Of(e,t,n),e=e.sibling}function Of(e,t,n){switch(e.tag){case 26:za(e,t,n),e.flags&ml&&e.memoizedState!==null&&Zm(n,At,e.memoizedState,e.memoizedProps);break;case 5:za(e,t,n);break;case 3:case 4:var a=At;At=Qi(e.stateNode.containerInfo),za(e,t,n),At=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ml,ml=16777216,za(e,t,n),ml=a):za(e,t,n));break;default:za(e,t,n)}}function jf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function gl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Le=a,Hf(a,e)}jf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Uf(e),e=e.sibling}function Uf(e){switch(e.tag){case 0:case 11:case 15:gl(e),e.flags&2048&&gn(9,e,e.return);break;case 3:gl(e);break;case 12:gl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Mi(e)):gl(e);break;default:gl(e)}}function Mi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Le=a,Hf(a,e)}jf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:gn(8,t,t.return),Mi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Mi(t));break;default:Mi(t)}e=e.sibling}}function Hf(e,t){for(;Le!==null;){var n=Le;switch(n.tag){case 0:case 11:case 15:gn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Pa(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Le=a;else e:for(n=e;Le!==null;){a=Le;var l=a.sibling,i=a.return;if(wf(a),a===n){Le=null;break e}if(l!==null){l.return=i,Le=l;break e}Le=i}}}var im={getCacheForType:function(e){var t=Qe(Oe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Qe(Oe).controller.signal}},um=typeof WeakMap=="function"?WeakMap:Map,oe=0,Se=null,P=null,te=0,fe=0,dt=null,vn=!1,Ea=!1,Zs=!1,Pt=0,Me=0,bn=0,Jn=0,Xs=0,pt=0,wa=0,vl=null,at=null,Vs=!1,ki=0,Bf=0,_i=1/0,Ri=null,yn=null,Be=0,xn=null,Aa=null,en=0,Ks=0,Js=null,qf=null,bl=0,$s=null;function ht(){return(oe&2)!==0&&te!==0?te&-te:D.T!==null?tc():Pc()}function Lf(){if(pt===0)if((te&536870912)===0||le){var e=Yl;Yl<<=1,(Yl&3932160)===0&&(Yl=262144),pt=e}else pt=536870912;return e=rt.current,e!==null&&(e.flags|=32),pt}function lt(e,t,n){(e===Se&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Da(e,0),Sn(e,te,pt,!1)),qa(e,n),((oe&2)===0||e!==Se)&&(e===Se&&((oe&2)===0&&(Jn|=n),Me===4&&Sn(e,te,pt,!1)),Ot(e))}function Yf(e,t,n){if((oe&6)!==0)throw Error(s(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ba(e,t),l=a?om(e,t):Ws(e,t,!0),i=a;do{if(l===0){Ea&&!a&&Sn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!sm(n)){l=Ws(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var f=e;l=vl;var m=f.current.memoizedState.isDehydrated;if(m&&(Da(f,u).flags|=256),u=Ws(f,u,!1),u!==2){if(Zs&&!m){f.errorRecoveryDisabledLanes|=i,Jn|=i,l=4;break e}i=at,at=l,i!==null&&(at===null?at=i:at.push.apply(at,i))}l=u}if(i=!1,l!==2)continue}}if(l===1){Da(e,0),Sn(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Sn(a,t,pt,!vn);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=ki+300-it(),10<l)){if(Sn(a,t,pt,!vn),Ql(a,0,!0)!==0)break e;en=t,a.timeoutHandle=bd(Gf.bind(null,a,n,at,Ri,Vs,t,pt,Jn,wa,vn,i,"Throttled",-0,0),l);break e}Gf(a,n,at,Ri,Vs,t,pt,Jn,wa,vn,i,null,-0,0)}}break}while(!0);Ot(e)}function Gf(e,t,n,a,l,i,u,f,m,C,A,k,N,E){if(e.timeoutHandle=-1,k=t.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},Of(t,i,k);var U=(i&62914560)===i?ki-it():(i&4194048)===i?Bf-it():0;if(U=Xm(k,U),U!==null){en=i,e.cancelPendingCommit=U(Ff.bind(null,e,t,i,n,a,l,u,f,m,A,k,null,N,E)),Sn(e,i,u,!C);return}}Ff(e,t,i,n,a,l,u,f,m)}function sm(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!ct(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t,n,a){t&=~Xs,t&=~Jn,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-st(l),u=1<<i;a[i]=-1,l&=~u}n!==0&&Fc(e,n,t)}function Oi(){return(oe&6)===0?(yl(0),!1):!0}function Fs(){if(P!==null){if(fe===0)var e=P.return;else e=P,Qt=qn=null,ds(e),ya=null,tl=0,e=P;for(;e!==null;)yf(e.alternate,e),e=e.return;P=null}}function Da(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,wm(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),en=0,Fs(),Se=e,P=n=Yt(e.current,null),te=t,fe=0,dt=null,vn=!1,Ea=Ba(e,t),Zs=!1,wa=pt=Xs=Jn=bn=Me=0,at=vl=null,Vs=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-st(a),i=1<<l;t|=e[l],a&=~i}return Pt=t,ti(),n}function Qf(e,t){$=null,D.H=ol,t===ba||t===oi?(t=lr(),fe=3):t===es?(t=lr(),fe=4):fe=t===As?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,dt=t,P===null&&(Me=1,Ci(e,yt(t,e.current)))}function Zf(){var e=rt.current;return e===null?!0:(te&4194048)===te?Ct===null:(te&62914560)===te||(te&536870912)!==0?e===Ct:!1}function Xf(){var e=D.H;return D.H=ol,e===null?ol:e}function Vf(){var e=D.A;return D.A=im,e}function ji(){Me=4,vn||(te&4194048)!==te&&rt.current!==null||(Ea=!0),(bn&134217727)===0&&(Jn&134217727)===0||Se===null||Sn(Se,te,pt,!1)}function Ws(e,t,n){var a=oe;oe|=2;var l=Xf(),i=Vf();(Se!==e||te!==t)&&(Ri=null,Da(e,t)),t=!1;var u=Me;e:do try{if(fe!==0&&P!==null){var f=P,m=dt;switch(fe){case 8:Fs(),u=6;break e;case 3:case 2:case 9:case 6:rt.current===null&&(t=!0);var C=fe;if(fe=0,dt=null,Ma(e,f,m,C),n&&Ea){u=0;break e}break;default:C=fe,fe=0,dt=null,Ma(e,f,m,C)}}cm(),u=Me;break}catch(A){Qf(e,A)}while(!0);return t&&e.shellSuspendCounter++,Qt=qn=null,oe=a,D.H=l,D.A=i,P===null&&(Se=null,te=0,ti()),u}function cm(){for(;P!==null;)Kf(P)}function om(e,t){var n=oe;oe|=2;var a=Xf(),l=Vf();Se!==e||te!==t?(Ri=null,_i=it()+500,Da(e,t)):Ea=Ba(e,t);e:do try{if(fe!==0&&P!==null){t=P;var i=dt;t:switch(fe){case 1:fe=0,dt=null,Ma(e,t,i,1);break;case 2:case 9:if(nr(i)){fe=0,dt=null,Jf(t);break}t=function(){fe!==2&&fe!==9||Se!==e||(fe=7),Ot(e)},i.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:nr(i)?(fe=0,dt=null,Jf(t)):(fe=0,dt=null,Ma(e,t,i,7));break;case 5:var u=null;switch(P.tag){case 26:u=P.memoizedState;case 5:case 27:var f=P;if(u?Rd(u):f.stateNode.complete){fe=0,dt=null;var m=f.sibling;if(m!==null)P=m;else{var C=f.return;C!==null?(P=C,Ui(C)):P=null}break t}}fe=0,dt=null,Ma(e,t,i,5);break;case 6:fe=0,dt=null,Ma(e,t,i,6);break;case 8:Fs(),Me=6;break e;default:throw Error(s(462))}}rm();break}catch(A){Qf(e,A)}while(!0);return Qt=qn=null,D.H=a,D.A=l,oe=n,P!==null?0:(Se=null,te=0,ti(),Me)}function rm(){for(;P!==null&&!Rp();)Kf(P)}function Kf(e){var t=vf(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,t===null?Ui(e):P=t}function Jf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ff(n,t,t.pendingProps,t.type,void 0,te);break;case 11:t=ff(n,t,t.pendingProps,t.type.render,t.ref,te);break;case 5:ds(t);default:yf(n,t),t=P=Xo(t,Pt),t=vf(n,t,Pt)}e.memoizedProps=e.pendingProps,t===null?Ui(e):P=t}function Ma(e,t,n,a){Qt=qn=null,ds(t),ya=null,tl=0;var l=t.return;try{if(Ih(e,l,t,n,te)){Me=1,Ci(e,yt(n,e.current)),P=null;return}}catch(i){if(l!==null)throw P=l,i;Me=1,Ci(e,yt(n,e.current)),P=null;return}t.flags&32768?(le||a===1?e=!0:Ea||(te&536870912)!==0?e=!1:(vn=e=!0,(a===2||a===9||a===3||a===6)&&(a=rt.current,a!==null&&a.tag===13&&(a.flags|=16384))),$f(t,e)):Ui(t)}function Ui(e){var t=e;do{if((t.flags&32768)!==0){$f(t,vn);return}e=t.return;var n=tm(t.alternate,t,Pt);if(n!==null){P=n;return}if(t=t.sibling,t!==null){P=t;return}P=t=e}while(t!==null);Me===0&&(Me=5)}function $f(e,t){do{var n=nm(e.alternate,e);if(n!==null){n.flags&=32767,P=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){P=e;return}P=e=n}while(e!==null);Me=6,P=null}function Ff(e,t,n,a,l,i,u,f,m){e.cancelPendingCommit=null;do Hi();while(Be!==0);if((oe&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=qu,Qp(e,n,i,u,f,m),e===Se&&(P=Se=null,te=0),Aa=t,xn=e,en=n,Ks=i,Js=l,qf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hm(ql,function(){return td(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null,l=O.p,O.p=2,u=oe,oe|=4;try{am(e,t,n)}finally{oe=u,O.p=l,D.T=a}}Be=1,Wf(),If(),Pf()}}function Wf(){if(Be===1){Be=0;var e=xn,t=Aa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var a=O.p;O.p=2;var l=oe;oe|=4;try{kf(t,e);var i=oc,u=Uo(e.containerInfo),f=i.focusedElem,m=i.selectionRange;if(u!==f&&f&&f.ownerDocument&&jo(f.ownerDocument.documentElement,f)){if(m!==null&&Ou(f)){var C=m.start,A=m.end;if(A===void 0&&(A=C),"selectionStart"in f)f.selectionStart=C,f.selectionEnd=Math.min(A,f.value.length);else{var k=f.ownerDocument||document,N=k&&k.defaultView||window;if(N.getSelection){var E=N.getSelection(),U=f.textContent.length,Z=Math.min(m.start,U),be=m.end===void 0?Z:Math.min(m.end,U);!E.extend&&Z>be&&(u=be,be=Z,Z=u);var y=Oo(f,Z),g=Oo(f,be);if(y&&g&&(E.rangeCount!==1||E.anchorNode!==y.node||E.anchorOffset!==y.offset||E.focusNode!==g.node||E.focusOffset!==g.offset)){var S=k.createRange();S.setStart(y.node,y.offset),E.removeAllRanges(),Z>be?(E.addRange(S),E.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),E.addRange(S))}}}}for(k=[],E=f;E=E.parentNode;)E.nodeType===1&&k.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<k.length;f++){var M=k[f];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}$i=!!cc,oc=cc=null}finally{oe=l,O.p=a,D.T=n}}e.current=t,Be=2}}function If(){if(Be===2){Be=0;var e=xn,t=Aa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var a=O.p;O.p=2;var l=oe;oe|=4;try{Ef(e,t.alternate,t)}finally{oe=l,O.p=a,D.T=n}}Be=3}}function Pf(){if(Be===4||Be===3){Be=0,Op();var e=xn,t=Aa,n=en,a=qf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Be=5:(Be=0,Aa=xn=null,ed(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(yn=null),mu(n),t=t.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Ha,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=D.T,l=O.p,O.p=2,D.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var f=a[u];i(f.value,{componentStack:f.stack})}}finally{D.T=t,O.p=l}}(en&3)!==0&&Hi(),Ot(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===$s?bl++:(bl=0,$s=e):bl=0,yl(0)}}function ed(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pa(t)))}function Hi(){return Wf(),If(),Pf(),td()}function td(){if(Be!==5)return!1;var e=xn,t=Ks;Ks=0;var n=mu(en),a=D.T,l=O.p;try{O.p=32>n?32:n,D.T=null,n=Js,Js=null;var i=xn,u=en;if(Be=0,Aa=xn=null,en=0,(oe&6)!==0)throw Error(s(331));var f=oe;if(oe|=4,Uf(i.current),Rf(i,i.current,u,n),oe=f,yl(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Ha,i)}catch{}return!0}finally{O.p=l,D.T=a,ed(e,t)}}function nd(e,t,n){t=yt(n,t),t=ws(e.stateNode,t,2),e=pn(e,t,2),e!==null&&(qa(e,2),Ot(e))}function de(e,t,n){if(e.tag===3)nd(e,e,n);else for(;t!==null;){if(t.tag===3){nd(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(yn===null||!yn.has(a))){e=yt(n,e),n=nf(2),a=pn(t,n,2),a!==null&&(af(n,a,t,e),qa(a,2),Ot(a));break}}t=t.return}}function Is(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new um;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Zs=!0,l.add(n),e=fm.bind(null,e,t,n),t.then(e,e))}function fm(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Se===e&&(te&n)===n&&(Me===4||Me===3&&(te&62914560)===te&&300>it()-ki?(oe&2)===0&&Da(e,0):Xs|=n,wa===te&&(wa=0)),Ot(e)}function ad(e,t){t===0&&(t=$c()),e=Un(e,t),e!==null&&(qa(e,t),Ot(e))}function dm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ad(e,n)}function pm(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),ad(e,n)}function hm(e,t){return fu(e,t)}var Bi=null,ka=null,Ps=!1,qi=!1,ec=!1,Tn=0;function Ot(e){e!==ka&&e.next===null&&(ka===null?Bi=ka=e:ka=ka.next=e),qi=!0,Ps||(Ps=!0,gm())}function yl(e,t){if(!ec&&qi){ec=!0;do for(var n=!1,a=Bi;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var u=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-st(42|e)+1)-1,i&=l&~(u&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,sd(a,i))}else i=te,i=Ql(a,a===Se?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ba(a,i)||(n=!0,sd(a,i));a=a.next}while(n);ec=!1}}function mm(){ld()}function ld(){qi=Ps=!1;var e=0;Tn!==0&&Em()&&(e=Tn);for(var t=it(),n=null,a=Bi;a!==null;){var l=a.next,i=id(a,t);i===0?(a.next=null,n===null?Bi=l:n.next=l,l===null&&(ka=n)):(n=a,(e!==0||(i&3)!==0)&&(qi=!0)),a=l}Be!==0&&Be!==5||yl(e),Tn!==0&&(Tn=0)}function id(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-st(i),f=1<<u,m=l[u];m===-1?((f&n)===0||(f&a)!==0)&&(l[u]=Gp(f,t)):m<=t&&(e.expiredLanes|=f),i&=~f}if(t=Se,n=te,n=Ql(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&du(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ba(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&du(a),mu(n)){case 2:case 8:n=Kc;break;case 32:n=ql;break;case 268435456:n=Jc;break;default:n=ql}return a=ud.bind(null,e),n=fu(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&du(a),e.callbackPriority=2,e.callbackNode=null,2}function ud(e,t){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hi()&&e.callbackNode!==n)return null;var a=te;return a=Ql(e,e===Se?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Yf(e,a,t),id(e,it()),e.callbackNode!=null&&e.callbackNode===n?ud.bind(null,e):null)}function sd(e,t){if(Hi())return null;Yf(e,t,!0)}function gm(){Am(function(){(oe&6)!==0?fu(Vc,mm):ld()})}function tc(){if(Tn===0){var e=ga;e===0&&(e=Ll,Ll<<=1,(Ll&261888)===0&&(Ll=256)),Tn=e}return Tn}function cd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kl(""+e)}function od(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function vm(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=cd((l[Ie]||null).action),u=a.submitter;u&&(t=(t=u[Ie]||null)?cd(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var f=new Wl("action","action",null,a,l);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Tn!==0){var m=u?od(l,u):new FormData(l);Ss(n,{pending:!0,data:m,method:l.method,action:i},null,m)}}else typeof i=="function"&&(f.preventDefault(),m=u?od(l,u):new FormData(l),Ss(n,{pending:!0,data:m,method:l.method,action:i},i,m))},currentTarget:l}]})}}for(var nc=0;nc<Bu.length;nc++){var ac=Bu[nc],bm=ac.toLowerCase(),ym=ac[0].toUpperCase()+ac.slice(1);wt(bm,"on"+ym)}wt(qo,"onAnimationEnd"),wt(Lo,"onAnimationIteration"),wt(Yo,"onAnimationStart"),wt("dblclick","onDoubleClick"),wt("focusin","onFocus"),wt("focusout","onBlur"),wt(jh,"onTransitionRun"),wt(Uh,"onTransitionStart"),wt(Hh,"onTransitionCancel"),wt(Go,"onTransitionEnd"),na("onMouseEnter",["mouseout","mouseover"]),na("onMouseLeave",["mouseout","mouseover"]),na("onPointerEnter",["pointerout","pointerover"]),na("onPointerLeave",["pointerout","pointerover"]),_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_n("onBeforeInput",["compositionend","keypress","textInput","paste"]),_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl));function rd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var f=a[u],m=f.instance,C=f.currentTarget;if(f=f.listener,m!==i&&l.isPropagationStopped())break e;i=f,l.currentTarget=C;try{i(l)}catch(A){ei(A)}l.currentTarget=null,i=m}else for(u=0;u<a.length;u++){if(f=a[u],m=f.instance,C=f.currentTarget,f=f.listener,m!==i&&l.isPropagationStopped())break e;i=f,l.currentTarget=C;try{i(l)}catch(A){ei(A)}l.currentTarget=null,i=m}}}}function ee(e,t){var n=t[gu];n===void 0&&(n=t[gu]=new Set);var a=e+"__bubble";n.has(a)||(fd(t,e,2,!1),n.add(a))}function lc(e,t,n){var a=0;t&&(a|=4),fd(n,e,a,t)}var Li="_reactListening"+Math.random().toString(36).slice(2);function ic(e){if(!e[Li]){e[Li]=!0,no.forEach(function(n){n!=="selectionchange"&&(xm.has(n)||lc(n,!1,e),lc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Li]||(t[Li]=!0,lc("selectionchange",!1,t))}}function fd(e,t,n,a){switch(Ld(t)){case 2:var l=Jm;break;case 8:l=$m;break;default:l=xc}n=l.bind(null,t,n,e),l=void 0,!zu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function uc(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var f=a.stateNode.containerInfo;if(f===l)break;if(u===4)for(u=a.return;u!==null;){var m=u.tag;if((m===3||m===4)&&u.stateNode.containerInfo===l)return;u=u.return}for(;f!==null;){if(u=Pn(f),u===null)return;if(m=u.tag,m===5||m===6||m===26||m===27){a=i=u;continue e}f=f.parentNode}}a=a.return}mo(function(){var C=i,A=Cu(n),k=[];e:{var N=Qo.get(e);if(N!==void 0){var E=Wl,U=e;switch(e){case"keypress":if($l(n)===0)break e;case"keydown":case"keyup":E=ph;break;case"focusin":U="focus",E=Du;break;case"focusout":U="blur",E=Du;break;case"beforeblur":case"afterblur":E=Du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=gh;break;case qo:case Lo:case Yo:E=lh;break;case Go:E=bh;break;case"scroll":case"scrollend":E=Pp;break;case"wheel":E=xh;break;case"copy":case"cut":case"paste":E=uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=xo;break;case"toggle":case"beforetoggle":E=Th}var Z=(t&4)!==0,be=!Z&&(e==="scroll"||e==="scrollend"),y=Z?N!==null?N+"Capture":null:N;Z=[];for(var g=C,S;g!==null;){var M=g;if(S=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||S===null||y===null||(M=Ga(g,y),M!=null&&Z.push(Sl(g,M,S))),be)break;g=g.return}0<Z.length&&(N=new E(N,U,null,n,A),k.push({event:N,listeners:Z}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",N&&n!==Tu&&(U=n.relatedTarget||n.fromElement)&&(Pn(U)||U[In]))break e;if((E||N)&&(N=A.window===A?A:(N=A.ownerDocument)?N.defaultView||N.parentWindow:window,E?(U=n.relatedTarget||n.toElement,E=C,U=U?Pn(U):null,U!==null&&(be=d(U),Z=U.tag,U!==be||Z!==5&&Z!==27&&Z!==6)&&(U=null)):(E=null,U=C),E!==U)){if(Z=bo,M="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(Z=xo,M="onPointerLeave",y="onPointerEnter",g="pointer"),be=E==null?N:Ya(E),S=U==null?N:Ya(U),N=new Z(M,g+"leave",E,n,A),N.target=be,N.relatedTarget=S,M=null,Pn(A)===C&&(Z=new Z(y,g+"enter",U,n,A),Z.target=S,Z.relatedTarget=be,M=Z),be=M,E&&U)t:{for(Z=Sm,y=E,g=U,S=0,M=y;M;M=Z(M))S++;M=0;for(var Y=g;Y;Y=Z(Y))M++;for(;0<S-M;)y=Z(y),S--;for(;0<M-S;)g=Z(g),M--;for(;S--;){if(y===g||g!==null&&y===g.alternate){Z=y;break t}y=Z(y),g=Z(g)}Z=null}else Z=null;E!==null&&dd(k,N,E,Z,!1),U!==null&&be!==null&&dd(k,be,U,Z,!0)}}e:{if(N=C?Ya(C):window,E=N.nodeName&&N.nodeName.toLowerCase(),E==="select"||E==="input"&&N.type==="file")var ue=Ao;else if(Eo(N))if(Do)ue=_h;else{ue=Mh;var q=Dh}else E=N.nodeName,!E||E.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?C&&Su(C.elementType)&&(ue=Ao):ue=kh;if(ue&&(ue=ue(e,C))){wo(k,ue,n,A);break e}q&&q(e,N,C),e==="focusout"&&C&&N.type==="number"&&C.memoizedProps.value!=null&&xu(N,"number",N.value)}switch(q=C?Ya(C):window,e){case"focusin":(Eo(q)||q.contentEditable==="true")&&(ca=q,ju=C,Fa=null);break;case"focusout":Fa=ju=ca=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Ho(k,n,A);break;case"selectionchange":if(Oh)break;case"keydown":case"keyup":Ho(k,n,A)}var F;if(ku)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else sa?No(e,n)&&(ne="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ne="onCompositionStart");ne&&(So&&n.locale!=="ko"&&(sa||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&sa&&(F=go()):(un=A,Eu="value"in un?un.value:un.textContent,sa=!0)),q=Yi(C,ne),0<q.length&&(ne=new yo(ne,e,null,n,A),k.push({event:ne,listeners:q}),F?ne.data=F:(F=zo(n),F!==null&&(ne.data=F)))),(F=Nh?zh(e,n):Eh(e,n))&&(ne=Yi(C,"onBeforeInput"),0<ne.length&&(q=new yo("onBeforeInput","beforeinput",null,n,A),k.push({event:q,listeners:ne}),q.data=F)),vm(k,e,C,n,A)}rd(k,t)})}function Sl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yi(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Ga(e,n),l!=null&&a.unshift(Sl(e,l,i)),l=Ga(e,t),l!=null&&a.push(Sl(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Sm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dd(e,t,n,a,l){for(var i=t._reactName,u=[];n!==null&&n!==a;){var f=n,m=f.alternate,C=f.stateNode;if(f=f.tag,m!==null&&m===a)break;f!==5&&f!==26&&f!==27||C===null||(m=C,l?(C=Ga(n,i),C!=null&&u.unshift(Sl(n,C,m))):l||(C=Ga(n,i),C!=null&&u.push(Sl(n,C,m)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Tm=/\r\n?/g,Cm=/\u0000|\uFFFD/g;function pd(e){return(typeof e=="string"?e:""+e).replace(Tm,`
`).replace(Cm,"")}function hd(e,t){return t=pd(t),pd(e)===t}function ve(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||la(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&la(e,""+a);break;case"className":Xl(e,"class",a);break;case"tabIndex":Xl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Xl(e,n,a);break;case"style":po(e,a,i);break;case"data":if(t!=="object"){Xl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Kl(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&ve(e,t,"name",l.name,l,null),ve(e,t,"formEncType",l.formEncType,l,null),ve(e,t,"formMethod",l.formMethod,l,null),ve(e,t,"formTarget",l.formTarget,l,null)):(ve(e,t,"encType",l.encType,l,null),ve(e,t,"method",l.method,l,null),ve(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Kl(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=qt);break;case"onScroll":a!=null&&ee("scroll",e);break;case"onScrollEnd":a!=null&&ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Kl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ee("beforetoggle",e),ee("toggle",e),Zl(e,"popover",a);break;case"xlinkActuate":Bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Bt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Bt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Bt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Bt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Zl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Wp.get(n)||n,Zl(e,n,a))}}function sc(e,t,n,a,l,i){switch(n){case"style":po(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?la(e,a):(typeof a=="number"||typeof a=="bigint")&&la(e,""+a);break;case"onScroll":a!=null&&ee("scroll",e);break;case"onScrollEnd":a!=null&&ee("scrollend",e);break;case"onClick":a!=null&&(e.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ao.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[Ie]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Zl(e,n,a)}}}function Xe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ee("error",e),ee("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ve(e,t,i,u,n,null)}}l&&ve(e,t,"srcSet",n.srcSet,n,null),a&&ve(e,t,"src",n.src,n,null);return;case"input":ee("invalid",e);var f=i=u=l=null,m=null,C=null;for(a in n)if(n.hasOwnProperty(a)){var A=n[a];if(A!=null)switch(a){case"name":l=A;break;case"type":u=A;break;case"checked":m=A;break;case"defaultChecked":C=A;break;case"value":i=A;break;case"defaultValue":f=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,t));break;default:ve(e,t,a,A,n,null)}}co(e,i,f,m,C,u,l,!1);return;case"select":ee("invalid",e),a=u=i=null;for(l in n)if(n.hasOwnProperty(l)&&(f=n[l],f!=null))switch(l){case"value":i=f;break;case"defaultValue":u=f;break;case"multiple":a=f;default:ve(e,t,l,f,n,null)}t=i,n=u,e.multiple=!!a,t!=null?aa(e,!!a,t,!1):n!=null&&aa(e,!!a,n,!0);return;case"textarea":ee("invalid",e),i=l=a=null;for(u in n)if(n.hasOwnProperty(u)&&(f=n[u],f!=null))switch(u){case"value":a=f;break;case"defaultValue":l=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:ve(e,t,u,f,n,null)}ro(e,a,l,i);return;case"option":for(m in n)if(n.hasOwnProperty(m)&&(a=n[m],a!=null))switch(m){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ve(e,t,m,a,n,null)}return;case"dialog":ee("beforetoggle",e),ee("toggle",e),ee("cancel",e),ee("close",e);break;case"iframe":case"object":ee("load",e);break;case"video":case"audio":for(a=0;a<xl.length;a++)ee(xl[a],e);break;case"image":ee("error",e),ee("load",e);break;case"details":ee("toggle",e);break;case"embed":case"source":case"link":ee("error",e),ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(a=n[C],a!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ve(e,t,C,a,n,null)}return;default:if(Su(t)){for(A in n)n.hasOwnProperty(A)&&(a=n[A],a!==void 0&&sc(e,t,A,a,n,void 0));return}}for(f in n)n.hasOwnProperty(f)&&(a=n[f],a!=null&&ve(e,t,f,a,n,null))}function Nm(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,u=null,f=null,m=null,C=null,A=null;for(E in n){var k=n[E];if(n.hasOwnProperty(E)&&k!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":m=k;default:a.hasOwnProperty(E)||ve(e,t,E,null,a,k)}}for(var N in a){var E=a[N];if(k=n[N],a.hasOwnProperty(N)&&(E!=null||k!=null))switch(N){case"type":i=E;break;case"name":l=E;break;case"checked":C=E;break;case"defaultChecked":A=E;break;case"value":u=E;break;case"defaultValue":f=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(137,t));break;default:E!==k&&ve(e,t,N,E,a,k)}}yu(e,u,f,m,C,A,i,l);return;case"select":E=u=f=N=null;for(i in n)if(m=n[i],n.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":E=m;default:a.hasOwnProperty(i)||ve(e,t,i,null,a,m)}for(l in a)if(i=a[l],m=n[l],a.hasOwnProperty(l)&&(i!=null||m!=null))switch(l){case"value":N=i;break;case"defaultValue":f=i;break;case"multiple":u=i;default:i!==m&&ve(e,t,l,i,a,m)}t=f,n=u,a=E,N!=null?aa(e,!!n,N,!1):!!a!=!!n&&(t!=null?aa(e,!!n,t,!0):aa(e,!!n,n?[]:"",!1));return;case"textarea":E=N=null;for(f in n)if(l=n[f],n.hasOwnProperty(f)&&l!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:ve(e,t,f,null,a,l)}for(u in a)if(l=a[u],i=n[u],a.hasOwnProperty(u)&&(l!=null||i!=null))switch(u){case"value":N=l;break;case"defaultValue":E=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==i&&ve(e,t,u,l,a,i)}oo(e,N,E);return;case"option":for(var U in n)if(N=n[U],n.hasOwnProperty(U)&&N!=null&&!a.hasOwnProperty(U))switch(U){case"selected":e.selected=!1;break;default:ve(e,t,U,null,a,N)}for(m in a)if(N=a[m],E=n[m],a.hasOwnProperty(m)&&N!==E&&(N!=null||E!=null))switch(m){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:ve(e,t,m,N,a,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in n)N=n[Z],n.hasOwnProperty(Z)&&N!=null&&!a.hasOwnProperty(Z)&&ve(e,t,Z,null,a,N);for(C in a)if(N=a[C],E=n[C],a.hasOwnProperty(C)&&N!==E&&(N!=null||E!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,t));break;default:ve(e,t,C,N,a,E)}return;default:if(Su(t)){for(var be in n)N=n[be],n.hasOwnProperty(be)&&N!==void 0&&!a.hasOwnProperty(be)&&sc(e,t,be,void 0,a,N);for(A in a)N=a[A],E=n[A],!a.hasOwnProperty(A)||N===E||N===void 0&&E===void 0||sc(e,t,A,N,a,E);return}}for(var y in n)N=n[y],n.hasOwnProperty(y)&&N!=null&&!a.hasOwnProperty(y)&&ve(e,t,y,null,a,N);for(k in a)N=a[k],E=n[k],!a.hasOwnProperty(k)||N===E||N==null&&E==null||ve(e,t,k,N,a,E)}function md(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,u=l.initiatorType,f=l.duration;if(i&&f&&md(u)){for(u=0,f=l.responseEnd,a+=1;a<n.length;a++){var m=n[a],C=m.startTime;if(C>f)break;var A=m.transferSize,k=m.initiatorType;A&&md(k)&&(m=m.responseEnd,u+=A*(m<f?1:(f-C)/(m-C)))}if(--a,t+=8*(i+u)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cc=null,oc=null;function Gi(e){return e.nodeType===9?e:e.ownerDocument}function gd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function rc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fc=null;function Em(){var e=window.event;return e&&e.type==="popstate"?e===fc?!1:(fc=e,!0):(fc=null,!1)}var bd=typeof setTimeout=="function"?setTimeout:void 0,wm=typeof clearTimeout=="function"?clearTimeout:void 0,yd=typeof Promise=="function"?Promise:void 0,Am=typeof queueMicrotask=="function"?queueMicrotask:typeof yd<"u"?function(e){return yd.resolve(null).then(e).catch(Dm)}:bd;function Dm(e){setTimeout(function(){throw e})}function Cn(e){return e==="head"}function xd(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),ja(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Tl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Tl(n);for(var i=n.firstChild;i;){var u=i.nextSibling,f=i.nodeName;i[La]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=u}}else n==="body"&&Tl(e.ownerDocument.body);n=l}while(n);ja(t)}function Sd(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function dc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":dc(n),vu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Mm(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[La])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Nt(e.nextSibling),e===null)break}return null}function km(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Nt(e.nextSibling),e===null))return null;return e}function Td(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Nt(e.nextSibling),e===null))return null;return e}function pc(e){return e.data==="$?"||e.data==="$~"}function hc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _m(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var mc=null;function Cd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Nt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Nd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function zd(e,t,n){switch(t=Gi(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Tl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vu(e)}var zt=new Map,Ed=new Set;function Qi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var tn=O.d;O.d={f:Rm,r:Om,D:jm,C:Um,L:Hm,m:Bm,X:Lm,S:qm,M:Ym};function Rm(){var e=tn.f(),t=Oi();return e||t}function Om(e){var t=ea(e);t!==null&&t.tag===5&&t.type==="form"?Gr(t):tn.r(e)}var _a=typeof document>"u"?null:document;function wd(e,t,n){var a=_a;if(a&&typeof t=="string"&&t){var l=vt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Ed.has(l)||(Ed.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Xe(t,"link",e),qe(t),a.head.appendChild(t)))}}function jm(e){tn.D(e),wd("dns-prefetch",e,null)}function Um(e,t){tn.C(e,t),wd("preconnect",e,t)}function Hm(e,t,n){tn.L(e,t,n);var a=_a;if(a&&e&&t){var l='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+vt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+vt(n.imageSizes)+'"]')):l+='[href="'+vt(e)+'"]';var i=l;switch(t){case"style":i=Ra(e);break;case"script":i=Oa(e)}zt.has(i)||(e=R({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),zt.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Cl(i))||t==="script"&&a.querySelector(Nl(i))||(t=a.createElement("link"),Xe(t,"link",e),qe(t),a.head.appendChild(t)))}}function Bm(e,t){tn.m(e,t);var n=_a;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+vt(a)+'"][href="'+vt(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Oa(e)}if(!zt.has(i)&&(e=R({rel:"modulepreload",href:e},t),zt.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Nl(i)))return}a=n.createElement("link"),Xe(a,"link",e),qe(a),n.head.appendChild(a)}}}function qm(e,t,n){tn.S(e,t,n);var a=_a;if(a&&e){var l=ta(a).hoistableStyles,i=Ra(e);t=t||"default";var u=l.get(i);if(!u){var f={loading:0,preload:null};if(u=a.querySelector(Cl(i)))f.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},n),(n=zt.get(i))&&gc(e,n);var m=u=a.createElement("link");qe(m),Xe(m,"link",e),m._p=new Promise(function(C,A){m.onload=C,m.onerror=A}),m.addEventListener("load",function(){f.loading|=1}),m.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Zi(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:f},l.set(i,u)}}}function Lm(e,t){tn.X(e,t);var n=_a;if(n&&e){var a=ta(n).hoistableScripts,l=Oa(e),i=a.get(l);i||(i=n.querySelector(Nl(l)),i||(e=R({src:e,async:!0},t),(t=zt.get(l))&&vc(e,t),i=n.createElement("script"),qe(i),Xe(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Ym(e,t){tn.M(e,t);var n=_a;if(n&&e){var a=ta(n).hoistableScripts,l=Oa(e),i=a.get(l);i||(i=n.querySelector(Nl(l)),i||(e=R({src:e,async:!0,type:"module"},t),(t=zt.get(l))&&vc(e,t),i=n.createElement("script"),qe(i),Xe(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Ad(e,t,n,a){var l=(l=I.current)?Qi(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ra(n.href),n=ta(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ra(n.href);var i=ta(l).hoistableStyles,u=i.get(e);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=l.querySelector(Cl(e)))&&!i._p&&(u.instance=i,u.state.loading=5),zt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},zt.set(e,n),i||Gm(l,e,n,u.state))),t&&a===null)throw Error(s(528,""));return u}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Oa(n),n=ta(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ra(e){return'href="'+vt(e)+'"'}function Cl(e){return'link[rel="stylesheet"]['+e+"]"}function Dd(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function Gm(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Xe(t,"link",n),qe(t),e.head.appendChild(t))}function Oa(e){return'[src="'+vt(e)+'"]'}function Nl(e){return"script[async]"+e}function Md(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+vt(n.href)+'"]');if(a)return t.instance=a,qe(a),a;var l=R({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),qe(a),Xe(a,"style",l),Zi(a,n.precedence,e),t.instance=a;case"stylesheet":l=Ra(n.href);var i=e.querySelector(Cl(l));if(i)return t.state.loading|=4,t.instance=i,qe(i),i;a=Dd(n),(l=zt.get(l))&&gc(a,l),i=(e.ownerDocument||e).createElement("link"),qe(i);var u=i;return u._p=new Promise(function(f,m){u.onload=f,u.onerror=m}),Xe(i,"link",a),t.state.loading|=4,Zi(i,n.precedence,e),t.instance=i;case"script":return i=Oa(n.src),(l=e.querySelector(Nl(i)))?(t.instance=l,qe(l),l):(a=n,(l=zt.get(i))&&(a=R({},n),vc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),qe(l),Xe(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Zi(a,n.precedence,e));return t.instance}function Zi(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,u=0;u<a.length;u++){var f=a[u];if(f.dataset.precedence===t)i=f;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function gc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function vc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xi=null;function kd(e,t,n){if(Xi===null){var a=new Map,l=Xi=new Map;l.set(n,a)}else l=Xi,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[La]||i[Ye]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var f=a.get(u);f?f.push(i):a.set(u,[i])}}return a}function _d(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Zm(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Ra(a.href),i=t.querySelector(Cl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Vi.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,qe(i);return}i=t.ownerDocument||t,a=Dd(a),(l=zt.get(l))&&gc(a,l),i=i.createElement("link"),qe(i);var u=i;u._p=new Promise(function(f,m){u.onload=f,u.onerror=m}),Xe(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Vi.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var bc=0;function Xm(e,t){return e.stylesheets&&e.count===0&&Ji(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&bc===0&&(bc=62500*zm());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>bc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Vi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ji(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ki=null;function Ji(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ki=new Map,t.forEach(Vm,e),Ki=null,Vi.call(e))}function Vm(e,t){if(!(t.state.loading&4)){var n=Ki.get(e);if(n)var a=n.get(null);else{n=new Map,Ki.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var u=l[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),a=u)}a&&n.set(null,a)}l=t.instance,u=l.getAttribute("data-precedence"),i=n.get(u)||a,i===a&&n.set(null,l),n.set(u,l),this.count++,a=Vi.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var zl={$$typeof:Ce,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Km(e,t,n,a,l,i,u,f,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pu(0),this.hiddenUpdates=pu(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Od(e,t,n,a,l,i,u,f,m,C,A,k){return e=new Km(e,t,n,u,m,C,A,k,f),t=1,i===!0&&(t|=24),i=ot(3,null,null,t),e.current=i,i.stateNode=e,t=Wu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},ts(i),e}function jd(e){return e?(e=fa,e):fa}function Ud(e,t,n,a,l,i){l=jd(l),a.context===null?a.context=l:a.pendingContext=l,a=dn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=pn(e,a,t),n!==null&&(lt(n,e,t),al(n,e,t))}function Hd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yc(e,t){Hd(e,t),(e=e.alternate)&&Hd(e,t)}function Bd(e){if(e.tag===13||e.tag===31){var t=Un(e,67108864);t!==null&&lt(t,e,67108864),yc(e,67108864)}}function qd(e){if(e.tag===13||e.tag===31){var t=ht();t=hu(t);var n=Un(e,t);n!==null&&lt(n,e,t),yc(e,t)}}var $i=!0;function Jm(e,t,n,a){var l=D.T;D.T=null;var i=O.p;try{O.p=2,xc(e,t,n,a)}finally{O.p=i,D.T=l}}function $m(e,t,n,a){var l=D.T;D.T=null;var i=O.p;try{O.p=8,xc(e,t,n,a)}finally{O.p=i,D.T=l}}function xc(e,t,n,a){if($i){var l=Sc(a);if(l===null)uc(e,t,a,Fi,n),Yd(e,a);else if(Wm(l,e,t,n,a))a.stopPropagation();else if(Yd(e,a),t&4&&-1<Fm.indexOf(e)){for(;l!==null;){var i=ea(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=kn(i.pendingLanes);if(u!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;u;){var m=1<<31-st(u);f.entanglements[1]|=m,u&=~m}Ot(i),(oe&6)===0&&(_i=it()+500,yl(0))}}break;case 31:case 13:f=Un(i,2),f!==null&&lt(f,i,2),Oi(),yc(i,2)}if(i=Sc(a),i===null&&uc(e,t,a,Fi,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else uc(e,t,a,null,n)}}function Sc(e){return e=Cu(e),Tc(e)}var Fi=null;function Tc(e){if(Fi=null,e=Pn(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=z(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Fi=e,null}function Ld(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jp()){case Vc:return 2;case Kc:return 8;case ql:case Up:return 32;case Jc:return 268435456;default:return 32}default:return 32}}var Cc=!1,Nn=null,zn=null,En=null,El=new Map,wl=new Map,wn=[],Fm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yd(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":El.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(t.pointerId)}}function Al(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ea(t),t!==null&&Bd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Wm(e,t,n,a,l){switch(t){case"focusin":return Nn=Al(Nn,e,t,n,a,l),!0;case"dragenter":return zn=Al(zn,e,t,n,a,l),!0;case"mouseover":return En=Al(En,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return El.set(i,Al(El.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,wl.set(i,Al(wl.get(i)||null,e,t,n,a,l)),!0}return!1}function Gd(e){var t=Pn(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,eo(e.priority,function(){qd(n)});return}}else if(t===31){if(t=z(n),t!==null){e.blockedOn=t,eo(e.priority,function(){qd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Tu=a,n.target.dispatchEvent(a),Tu=null}else return t=ea(n),t!==null&&Bd(t),e.blockedOn=n,!1;t.shift()}return!0}function Qd(e,t,n){Wi(e)&&n.delete(t)}function Im(){Cc=!1,Nn!==null&&Wi(Nn)&&(Nn=null),zn!==null&&Wi(zn)&&(zn=null),En!==null&&Wi(En)&&(En=null),El.forEach(Qd),wl.forEach(Qd)}function Ii(e,t){e.blockedOn===t&&(e.blockedOn=null,Cc||(Cc=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Im)))}var Pi=null;function Zd(e){Pi!==e&&(Pi=e,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){Pi===e&&(Pi=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Tc(a||n)===null)continue;break}var i=ea(n);i!==null&&(e.splice(t,3),t-=3,Ss(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function ja(e){function t(m){return Ii(m,e)}Nn!==null&&Ii(Nn,e),zn!==null&&Ii(zn,e),En!==null&&Ii(En,e),El.forEach(t),wl.forEach(t);for(var n=0;n<wn.length;n++){var a=wn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<wn.length&&(n=wn[0],n.blockedOn===null);)Gd(n),n.blockedOn===null&&wn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],u=l[Ie]||null;if(typeof i=="function")u||Zd(n);else if(u){var f=null;if(i&&i.hasAttribute("formAction")){if(l=i,u=i[Ie]||null)f=u.formAction;else if(Tc(l)!==null)continue}else f=u.action;typeof f=="function"?n[a+1]=f:(n.splice(a,3),a-=3),Zd(n)}}}function Xd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return l=u})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Nc(e){this._internalRoot=e}eu.prototype.render=Nc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=ht();Ud(n,a,e,t,null,null)},eu.prototype.unmount=Nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ud(e.current,2,null,e,null,null),Oi(),t[In]=null}};function eu(e){this._internalRoot=e}eu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wn.length&&t!==0&&t<wn[n].priority;n++);wn.splice(n,0,e),n===0&&Gd(e)}};var Vd=c.version;if(Vd!=="19.2.6")throw Error(s(527,Vd,"19.2.6"));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=x(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var Pm={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{Ha=tu.inject(Pm),ut=tu}catch{}}return kl.createRoot=function(e,t){if(!r(e))throw Error(s(299));var n=!1,a="",l=Ir,i=Pr,u=ef;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Od(e,1,!1,null,null,n,a,null,l,i,u,Xd),e[In]=t.current,ic(e),new Nc(t)},kl.hydrateRoot=function(e,t,n){if(!r(e))throw Error(s(299));var a=!1,l="",i=Ir,u=Pr,f=ef,m=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(f=n.onRecoverableError),n.formState!==void 0&&(m=n.formState)),t=Od(e,1,!0,t,n??null,a,l,m,i,u,f,Xd),t.context=jd(null),n=t.current,a=ht(),a=hu(a),l=dn(a),l.callback=null,pn(n,l,a),n=a,t.current.lanes=n,qa(t,n),Ot(t),e[In]=t.current,ic(e),new eu(t)},kl.version="19.2.6",kl}var lp;function d0(){if(lp)return wc.exports;lp=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(c){console.error(c)}}return p(),wc.exports=f0(),wc.exports}var p0=d0();function Hc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Fn=Hc();function pp(p){Fn=p}const hp=/[&<>"']/,h0=new RegExp(hp.source,"g"),mp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,m0=new RegExp(mp.source,"g"),g0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ip=p=>g0[p];function mt(p,c){if(c){if(hp.test(p))return p.replace(h0,ip)}else if(mp.test(p))return p.replace(m0,ip);return p}const v0=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function b0(p){return p.replace(v0,(c,o)=>(o=o.toLowerCase(),o==="colon"?":":o.charAt(0)==="#"?o.charAt(1)==="x"?String.fromCharCode(parseInt(o.substring(2),16)):String.fromCharCode(+o.substring(1)):""))}const y0=/(^|[^\[])\^/g;function ye(p,c){let o=typeof p=="string"?p:p.source;c=c||"";const s={replace:(r,d)=>{let h=typeof d=="string"?d:d.source;return h=h.replace(y0,"$1"),o=o.replace(r,h),s},getRegex:()=>new RegExp(o,c)};return s}function up(p){try{p=encodeURI(p).replace(/%25/g,"%")}catch{return null}return p}const Ol={exec:()=>null};function sp(p,c){const o=p.replace(/\|/g,(d,h,z)=>{let b=!1,x=h;for(;--x>=0&&z[x]==="\\";)b=!b;return b?"|":" |"}),s=o.split(/ \|/);let r=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),c)if(s.length>c)s.splice(c);else for(;s.length<c;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(/\\\|/g,"|");return s}function _l(p,c,o){const s=p.length;if(s===0)return"";let r=0;for(;r<s&&p.charAt(s-r-1)===c;)r++;return p.slice(0,s-r)}function x0(p,c){if(p.indexOf(c[1])===-1)return-1;let o=0;for(let s=0;s<p.length;s++)if(p[s]==="\\")s++;else if(p[s]===c[0])o++;else if(p[s]===c[1]&&(o--,o<0))return s;return-1}function cp(p,c,o,s){const r=c.href,d=c.title?mt(c.title):null,h=p[1].replace(/\\([\[\]])/g,"$1");if(p[0].charAt(0)!=="!"){s.state.inLink=!0;const z={type:"link",raw:o,href:r,title:d,text:h,tokens:s.inlineTokens(h)};return s.state.inLink=!1,z}return{type:"image",raw:o,href:r,title:d,text:mt(h)}}function S0(p,c){const o=p.match(/^(\s+)(?:```)/);if(o===null)return c;const s=o[1];return c.split(`
`).map(r=>{const d=r.match(/^\s+/);if(d===null)return r;const[h]=d;return h.length>=s.length?r.slice(s.length):r}).join(`
`)}class au{constructor(c){Te(this,"options");Te(this,"rules");Te(this,"lexer");this.options=c||Fn}space(c){const o=this.rules.block.newline.exec(c);if(o&&o[0].length>0)return{type:"space",raw:o[0]}}code(c){const o=this.rules.block.code.exec(c);if(o){const s=o[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:o[0],codeBlockStyle:"indented",text:this.options.pedantic?s:_l(s,`
`)}}}fences(c){const o=this.rules.block.fences.exec(c);if(o){const s=o[0],r=S0(s,o[3]||"");return{type:"code",raw:s,lang:o[2]?o[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):o[2],text:r}}}heading(c){const o=this.rules.block.heading.exec(c);if(o){let s=o[2].trim();if(/#$/.test(s)){const r=_l(s,"#");(this.options.pedantic||!r||/ $/.test(r))&&(s=r.trim())}return{type:"heading",raw:o[0],depth:o[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(c){const o=this.rules.block.hr.exec(c);if(o)return{type:"hr",raw:_l(o[0],`
`)}}blockquote(c){const o=this.rules.block.blockquote.exec(c);if(o){let s=_l(o[0],`
`).split(`
`),r="",d="";const h=[];for(;s.length>0;){let z=!1;const b=[];let x;for(x=0;x<s.length;x++)if(/^ {0,3}>/.test(s[x]))b.push(s[x]),z=!0;else if(!z)b.push(s[x]);else break;s=s.slice(x);const w=b.join(`
`),R=w.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");r=r?`${r}
${w}`:w,d=d?`${d}
${R}`:R;const B=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(R,h,!0),this.lexer.state.top=B,s.length===0)break;const Q=h[h.length-1];if((Q==null?void 0:Q.type)==="code")break;if((Q==null?void 0:Q.type)==="blockquote"){const G=Q,ae=G.raw+`
`+s.join(`
`),L=this.blockquote(ae);h[h.length-1]=L,r=r.substring(0,r.length-G.raw.length)+L.raw,d=d.substring(0,d.length-G.text.length)+L.text;break}else if((Q==null?void 0:Q.type)==="list"){const G=Q,ae=G.raw+`
`+s.join(`
`),L=this.list(ae);h[h.length-1]=L,r=r.substring(0,r.length-Q.raw.length)+L.raw,d=d.substring(0,d.length-G.raw.length)+L.raw,s=ae.substring(h[h.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:h,text:d}}}list(c){let o=this.rules.block.list.exec(c);if(o){let s=o[1].trim();const r=s.length>1,d={type:"list",raw:"",ordered:r,start:r?+s.slice(0,-1):"",loose:!1,items:[]};s=r?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=r?s:"[*+-]");const h=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let z=!1;for(;c;){let b=!1,x="",w="";if(!(o=h.exec(c))||this.rules.block.hr.test(c))break;x=o[0],c=c.substring(x.length);let R=o[2].split(`
`,1)[0].replace(/^\t+/,ie=>" ".repeat(3*ie.length)),B=c.split(`
`,1)[0],Q=!R.trim(),G=0;if(this.options.pedantic?(G=2,w=R.trimStart()):Q?G=o[1].length+1:(G=o[2].search(/[^ ]/),G=G>4?1:G,w=R.slice(G),G+=o[1].length),Q&&/^ *$/.test(B)&&(x+=B+`
`,c=c.substring(B.length+1),b=!0),!b){const ie=new RegExp(`^ {0,${Math.min(3,G-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Ae=new RegExp(`^ {0,${Math.min(3,G-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Ce=new RegExp(`^ {0,${Math.min(3,G-1)}}(?:\`\`\`|~~~)`),W=new RegExp(`^ {0,${Math.min(3,G-1)}}#`);for(;c;){const he=c.split(`
`,1)[0];if(B=he,this.options.pedantic&&(B=B.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Ce.test(B)||W.test(B)||ie.test(B)||Ae.test(c))break;if(B.search(/[^ ]/)>=G||!B.trim())w+=`
`+B.slice(G);else{if(Q||R.search(/[^ ]/)>=4||Ce.test(R)||W.test(R)||Ae.test(R))break;w+=`
`+B}!Q&&!B.trim()&&(Q=!0),x+=he+`
`,c=c.substring(he.length+1),R=B.slice(G)}}d.loose||(z?d.loose=!0:/\n *\n *$/.test(x)&&(z=!0));let ae=null,L;this.options.gfm&&(ae=/^\[[ xX]\] /.exec(w),ae&&(L=ae[0]!=="[ ] ",w=w.replace(/^\[[ xX]\] +/,""))),d.items.push({type:"list_item",raw:x,task:!!ae,checked:L,loose:!1,text:w,tokens:[]}),d.raw+=x}d.items[d.items.length-1].raw=d.items[d.items.length-1].raw.trimEnd(),d.items[d.items.length-1].text=d.items[d.items.length-1].text.trimEnd(),d.raw=d.raw.trimEnd();for(let b=0;b<d.items.length;b++)if(this.lexer.state.top=!1,d.items[b].tokens=this.lexer.blockTokens(d.items[b].text,[]),!d.loose){const x=d.items[b].tokens.filter(R=>R.type==="space"),w=x.length>0&&x.some(R=>/\n.*\n/.test(R.raw));d.loose=w}if(d.loose)for(let b=0;b<d.items.length;b++)d.items[b].loose=!0;return d}}html(c){const o=this.rules.block.html.exec(c);if(o)return{type:"html",block:!0,raw:o[0],pre:o[1]==="pre"||o[1]==="script"||o[1]==="style",text:o[0]}}def(c){const o=this.rules.block.def.exec(c);if(o){const s=o[1].toLowerCase().replace(/\s+/g," "),r=o[2]?o[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",d=o[3]?o[3].substring(1,o[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):o[3];return{type:"def",tag:s,raw:o[0],href:r,title:d}}}table(c){const o=this.rules.block.table.exec(c);if(!o||!/[:|]/.test(o[2]))return;const s=sp(o[1]),r=o[2].replace(/^\||\| *$/g,"").split("|"),d=o[3]&&o[3].trim()?o[3].replace(/\n[ \t]*$/,"").split(`
`):[],h={type:"table",raw:o[0],header:[],align:[],rows:[]};if(s.length===r.length){for(const z of r)/^ *-+: *$/.test(z)?h.align.push("right"):/^ *:-+: *$/.test(z)?h.align.push("center"):/^ *:-+ *$/.test(z)?h.align.push("left"):h.align.push(null);for(let z=0;z<s.length;z++)h.header.push({text:s[z],tokens:this.lexer.inline(s[z]),header:!0,align:h.align[z]});for(const z of d)h.rows.push(sp(z,h.header.length).map((b,x)=>({text:b,tokens:this.lexer.inline(b),header:!1,align:h.align[x]})));return h}}lheading(c){const o=this.rules.block.lheading.exec(c);if(o)return{type:"heading",raw:o[0],depth:o[2].charAt(0)==="="?1:2,text:o[1],tokens:this.lexer.inline(o[1])}}paragraph(c){const o=this.rules.block.paragraph.exec(c);if(o){const s=o[1].charAt(o[1].length-1)===`
`?o[1].slice(0,-1):o[1];return{type:"paragraph",raw:o[0],text:s,tokens:this.lexer.inline(s)}}}text(c){const o=this.rules.block.text.exec(c);if(o)return{type:"text",raw:o[0],text:o[0],tokens:this.lexer.inline(o[0])}}escape(c){const o=this.rules.inline.escape.exec(c);if(o)return{type:"escape",raw:o[0],text:mt(o[1])}}tag(c){const o=this.rules.inline.tag.exec(c);if(o)return!this.lexer.state.inLink&&/^<a /i.test(o[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(o[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(o[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(o[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:o[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:o[0]}}link(c){const o=this.rules.inline.link.exec(c);if(o){const s=o[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const h=_l(s.slice(0,-1),"\\");if((s.length-h.length)%2===0)return}else{const h=x0(o[2],"()");if(h>-1){const b=(o[0].indexOf("!")===0?5:4)+o[1].length+h;o[2]=o[2].substring(0,h),o[0]=o[0].substring(0,b).trim(),o[3]=""}}let r=o[2],d="";if(this.options.pedantic){const h=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);h&&(r=h[1],d=h[3])}else d=o[3]?o[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(s)?r=r.slice(1):r=r.slice(1,-1)),cp(o,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:d&&d.replace(this.rules.inline.anyPunctuation,"$1")},o[0],this.lexer)}}reflink(c,o){let s;if((s=this.rules.inline.reflink.exec(c))||(s=this.rules.inline.nolink.exec(c))){const r=(s[2]||s[1]).replace(/\s+/g," "),d=o[r.toLowerCase()];if(!d){const h=s[0].charAt(0);return{type:"text",raw:h,text:h}}return cp(s,d,s[0],this.lexer)}}emStrong(c,o,s=""){let r=this.rules.inline.emStrongLDelim.exec(c);if(!r||r[3]&&s.match(/[\p{L}\p{N}]/u))return;if(!(r[1]||r[2]||"")||!s||this.rules.inline.punctuation.exec(s)){const h=[...r[0]].length-1;let z,b,x=h,w=0;const R=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(R.lastIndex=0,o=o.slice(-1*c.length+h);(r=R.exec(o))!=null;){if(z=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!z)continue;if(b=[...z].length,r[3]||r[4]){x+=b;continue}else if((r[5]||r[6])&&h%3&&!((h+b)%3)){w+=b;continue}if(x-=b,x>0)continue;b=Math.min(b,b+x+w);const B=[...r[0]][0].length,Q=c.slice(0,h+r.index+B+b);if(Math.min(h,b)%2){const ae=Q.slice(1,-1);return{type:"em",raw:Q,text:ae,tokens:this.lexer.inlineTokens(ae)}}const G=Q.slice(2,-2);return{type:"strong",raw:Q,text:G,tokens:this.lexer.inlineTokens(G)}}}}codespan(c){const o=this.rules.inline.code.exec(c);if(o){let s=o[2].replace(/\n/g," ");const r=/[^ ]/.test(s),d=/^ /.test(s)&&/ $/.test(s);return r&&d&&(s=s.substring(1,s.length-1)),s=mt(s,!0),{type:"codespan",raw:o[0],text:s}}}br(c){const o=this.rules.inline.br.exec(c);if(o)return{type:"br",raw:o[0]}}del(c){const o=this.rules.inline.del.exec(c);if(o)return{type:"del",raw:o[0],text:o[2],tokens:this.lexer.inlineTokens(o[2])}}autolink(c){const o=this.rules.inline.autolink.exec(c);if(o){let s,r;return o[2]==="@"?(s=mt(o[1]),r="mailto:"+s):(s=mt(o[1]),r=s),{type:"link",raw:o[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}url(c){var s;let o;if(o=this.rules.inline.url.exec(c)){let r,d;if(o[2]==="@")r=mt(o[0]),d="mailto:"+r;else{let h;do h=o[0],o[0]=((s=this.rules.inline._backpedal.exec(o[0]))==null?void 0:s[0])??"";while(h!==o[0]);r=mt(o[0]),o[1]==="www."?d="http://"+o[0]:d=o[0]}return{type:"link",raw:o[0],text:r,href:d,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(c){const o=this.rules.inline.text.exec(c);if(o){let s;return this.lexer.state.inRawBlock?s=o[0]:s=mt(o[0]),{type:"text",raw:o[0],text:s}}}}const T0=/^(?: *(?:\n|$))+/,C0=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,N0=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ul=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,z0=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,gp=/(?:[*+-]|\d{1,9}[.)])/,vp=ye(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,gp).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Bc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,E0=/^[^\n]+/,qc=/(?!\s*\])(?:\\.|[^\[\]\\])+/,w0=ye(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",qc).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),A0=ye(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,gp).getRegex(),uu="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Lc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,D0=ye("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Lc).replace("tag",uu).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),bp=ye(Bc).replace("hr",Ul).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",uu).getRegex(),M0=ye(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",bp).getRegex(),Yc={blockquote:M0,code:C0,def:w0,fences:N0,heading:z0,hr:Ul,html:D0,lheading:vp,list:A0,newline:T0,paragraph:bp,table:Ol,text:E0},op=ye("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ul).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",uu).getRegex(),k0={...Yc,table:op,paragraph:ye(Bc).replace("hr",Ul).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",op).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",uu).getRegex()},_0={...Yc,html:ye(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Lc).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ol,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ye(Bc).replace("hr",Ul).replace("heading",` *#{1,6} *[^
]`).replace("lheading",vp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},yp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,R0=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,xp=/^( {2,}|\\)\n(?!\s*$)/,O0=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Hl="\\p{P}\\p{S}",j0=ye(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Hl).getRegex(),U0=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,H0=ye(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Hl).getRegex(),B0=ye("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Hl).getRegex(),q0=ye("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Hl).getRegex(),L0=ye(/\\([punct])/,"gu").replace(/punct/g,Hl).getRegex(),Y0=ye(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),G0=ye(Lc).replace("(?:-->|$)","-->").getRegex(),Q0=ye("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",G0).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),lu=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Z0=ye(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",lu).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Sp=ye(/^!?\[(label)\]\[(ref)\]/).replace("label",lu).replace("ref",qc).getRegex(),Tp=ye(/^!?\[(ref)\](?:\[\])?/).replace("ref",qc).getRegex(),X0=ye("reflink|nolink(?!\\()","g").replace("reflink",Sp).replace("nolink",Tp).getRegex(),Gc={_backpedal:Ol,anyPunctuation:L0,autolink:Y0,blockSkip:U0,br:xp,code:R0,del:Ol,emStrongLDelim:H0,emStrongRDelimAst:B0,emStrongRDelimUnd:q0,escape:yp,link:Z0,nolink:Tp,punctuation:j0,reflink:Sp,reflinkSearch:X0,tag:Q0,text:O0,url:Ol},V0={...Gc,link:ye(/^!?\[(label)\]\((.*?)\)/).replace("label",lu).getRegex(),reflink:ye(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",lu).getRegex()},Rc={...Gc,escape:ye(yp).replace("])","~|])").getRegex(),url:ye(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},K0={...Rc,br:ye(xp).replace("{2,}","*").getRegex(),text:ye(Rc.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},nu={normal:Yc,gfm:k0,pedantic:_0},Rl={normal:Gc,gfm:Rc,breaks:K0,pedantic:V0};class jt{constructor(c){Te(this,"tokens");Te(this,"options");Te(this,"state");Te(this,"tokenizer");Te(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=c||Fn,this.options.tokenizer=this.options.tokenizer||new au,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const o={block:nu.normal,inline:Rl.normal};this.options.pedantic?(o.block=nu.pedantic,o.inline=Rl.pedantic):this.options.gfm&&(o.block=nu.gfm,this.options.breaks?o.inline=Rl.breaks:o.inline=Rl.gfm),this.tokenizer.rules=o}static get rules(){return{block:nu,inline:Rl}}static lex(c,o){return new jt(o).lex(c)}static lexInline(c,o){return new jt(o).inlineTokens(c)}lex(c){c=c.replace(/\r\n|\r/g,`
`),this.blockTokens(c,this.tokens);for(let o=0;o<this.inlineQueue.length;o++){const s=this.inlineQueue[o];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(c,o=[],s=!1){this.options.pedantic?c=c.replace(/\t/g,"    ").replace(/^ +$/gm,""):c=c.replace(/^( *)(\t+)/gm,(z,b,x)=>b+"    ".repeat(x.length));let r,d,h;for(;c;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(z=>(r=z.call({lexer:this},c,o))?(c=c.substring(r.raw.length),o.push(r),!0):!1))){if(r=this.tokenizer.space(c)){c=c.substring(r.raw.length),r.raw.length===1&&o.length>0?o[o.length-1].raw+=`
`:o.push(r);continue}if(r=this.tokenizer.code(c)){c=c.substring(r.raw.length),d=o[o.length-1],d&&(d.type==="paragraph"||d.type==="text")?(d.raw+=`
`+r.raw,d.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=d.text):o.push(r);continue}if(r=this.tokenizer.fences(c)){c=c.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.heading(c)){c=c.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.hr(c)){c=c.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.blockquote(c)){c=c.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.list(c)){c=c.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.html(c)){c=c.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.def(c)){c=c.substring(r.raw.length),d=o[o.length-1],d&&(d.type==="paragraph"||d.type==="text")?(d.raw+=`
`+r.raw,d.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=d.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(c)){c=c.substring(r.raw.length),o.push(r);continue}if(r=this.tokenizer.lheading(c)){c=c.substring(r.raw.length),o.push(r);continue}if(h=c,this.options.extensions&&this.options.extensions.startBlock){let z=1/0;const b=c.slice(1);let x;this.options.extensions.startBlock.forEach(w=>{x=w.call({lexer:this},b),typeof x=="number"&&x>=0&&(z=Math.min(z,x))}),z<1/0&&z>=0&&(h=c.substring(0,z+1))}if(this.state.top&&(r=this.tokenizer.paragraph(h))){d=o[o.length-1],s&&(d==null?void 0:d.type)==="paragraph"?(d.raw+=`
`+r.raw,d.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):o.push(r),s=h.length!==c.length,c=c.substring(r.raw.length);continue}if(r=this.tokenizer.text(c)){c=c.substring(r.raw.length),d=o[o.length-1],d&&d.type==="text"?(d.raw+=`
`+r.raw,d.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):o.push(r);continue}if(c){const z="Infinite loop on byte: "+c.charCodeAt(0);if(this.options.silent){console.error(z);break}else throw new Error(z)}}return this.state.top=!0,o}inline(c,o=[]){return this.inlineQueue.push({src:c,tokens:o}),o}inlineTokens(c,o=[]){let s,r,d,h=c,z,b,x;if(this.tokens.links){const w=Object.keys(this.tokens.links);if(w.length>0)for(;(z=this.tokenizer.rules.inline.reflinkSearch.exec(h))!=null;)w.includes(z[0].slice(z[0].lastIndexOf("[")+1,-1))&&(h=h.slice(0,z.index)+"["+"a".repeat(z[0].length-2)+"]"+h.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(z=this.tokenizer.rules.inline.blockSkip.exec(h))!=null;)h=h.slice(0,z.index)+"["+"a".repeat(z[0].length-2)+"]"+h.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(z=this.tokenizer.rules.inline.anyPunctuation.exec(h))!=null;)h=h.slice(0,z.index)+"++"+h.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;c;)if(b||(x=""),b=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(w=>(s=w.call({lexer:this},c,o))?(c=c.substring(s.raw.length),o.push(s),!0):!1))){if(s=this.tokenizer.escape(c)){c=c.substring(s.raw.length),o.push(s);continue}if(s=this.tokenizer.tag(c)){c=c.substring(s.raw.length),r=o[o.length-1],r&&s.type==="text"&&r.type==="text"?(r.raw+=s.raw,r.text+=s.text):o.push(s);continue}if(s=this.tokenizer.link(c)){c=c.substring(s.raw.length),o.push(s);continue}if(s=this.tokenizer.reflink(c,this.tokens.links)){c=c.substring(s.raw.length),r=o[o.length-1],r&&s.type==="text"&&r.type==="text"?(r.raw+=s.raw,r.text+=s.text):o.push(s);continue}if(s=this.tokenizer.emStrong(c,h,x)){c=c.substring(s.raw.length),o.push(s);continue}if(s=this.tokenizer.codespan(c)){c=c.substring(s.raw.length),o.push(s);continue}if(s=this.tokenizer.br(c)){c=c.substring(s.raw.length),o.push(s);continue}if(s=this.tokenizer.del(c)){c=c.substring(s.raw.length),o.push(s);continue}if(s=this.tokenizer.autolink(c)){c=c.substring(s.raw.length),o.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(c))){c=c.substring(s.raw.length),o.push(s);continue}if(d=c,this.options.extensions&&this.options.extensions.startInline){let w=1/0;const R=c.slice(1);let B;this.options.extensions.startInline.forEach(Q=>{B=Q.call({lexer:this},R),typeof B=="number"&&B>=0&&(w=Math.min(w,B))}),w<1/0&&w>=0&&(d=c.substring(0,w+1))}if(s=this.tokenizer.inlineText(d)){c=c.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(x=s.raw.slice(-1)),b=!0,r=o[o.length-1],r&&r.type==="text"?(r.raw+=s.raw,r.text+=s.text):o.push(s);continue}if(c){const w="Infinite loop on byte: "+c.charCodeAt(0);if(this.options.silent){console.error(w);break}else throw new Error(w)}}return o}}class iu{constructor(c){Te(this,"options");Te(this,"parser");this.options=c||Fn}space(c){return""}code({text:c,lang:o,escaped:s}){var h;const r=(h=(o||"").match(/^\S*/))==null?void 0:h[0],d=c.replace(/\n$/,"")+`
`;return r?'<pre><code class="language-'+mt(r)+'">'+(s?d:mt(d,!0))+`</code></pre>
`:"<pre><code>"+(s?d:mt(d,!0))+`</code></pre>
`}blockquote({tokens:c}){return`<blockquote>
${this.parser.parse(c)}</blockquote>
`}html({text:c}){return c}heading({tokens:c,depth:o}){return`<h${o}>${this.parser.parseInline(c)}</h${o}>
`}hr(c){return`<hr>
`}list(c){const o=c.ordered,s=c.start;let r="";for(let z=0;z<c.items.length;z++){const b=c.items[z];r+=this.listitem(b)}const d=o?"ol":"ul",h=o&&s!==1?' start="'+s+'"':"";return"<"+d+h+`>
`+r+"</"+d+`>
`}listitem(c){let o="";if(c.task){const s=this.checkbox({checked:!!c.checked});c.loose?c.tokens.length>0&&c.tokens[0].type==="paragraph"?(c.tokens[0].text=s+" "+c.tokens[0].text,c.tokens[0].tokens&&c.tokens[0].tokens.length>0&&c.tokens[0].tokens[0].type==="text"&&(c.tokens[0].tokens[0].text=s+" "+c.tokens[0].tokens[0].text)):c.tokens.unshift({type:"text",raw:s+" ",text:s+" "}):o+=s+" "}return o+=this.parser.parse(c.tokens,!!c.loose),`<li>${o}</li>
`}checkbox({checked:c}){return"<input "+(c?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:c}){return`<p>${this.parser.parseInline(c)}</p>
`}table(c){let o="",s="";for(let d=0;d<c.header.length;d++)s+=this.tablecell(c.header[d]);o+=this.tablerow({text:s});let r="";for(let d=0;d<c.rows.length;d++){const h=c.rows[d];s="";for(let z=0;z<h.length;z++)s+=this.tablecell(h[z]);r+=this.tablerow({text:s})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+o+`</thead>
`+r+`</table>
`}tablerow({text:c}){return`<tr>
${c}</tr>
`}tablecell(c){const o=this.parser.parseInline(c.tokens),s=c.header?"th":"td";return(c.align?`<${s} align="${c.align}">`:`<${s}>`)+o+`</${s}>
`}strong({tokens:c}){return`<strong>${this.parser.parseInline(c)}</strong>`}em({tokens:c}){return`<em>${this.parser.parseInline(c)}</em>`}codespan({text:c}){return`<code>${c}</code>`}br(c){return"<br>"}del({tokens:c}){return`<del>${this.parser.parseInline(c)}</del>`}link({href:c,title:o,tokens:s}){const r=this.parser.parseInline(s),d=up(c);if(d===null)return r;c=d;let h='<a href="'+c+'"';return o&&(h+=' title="'+o+'"'),h+=">"+r+"</a>",h}image({href:c,title:o,text:s}){const r=up(c);if(r===null)return s;c=r;let d=`<img src="${c}" alt="${s}"`;return o&&(d+=` title="${o}"`),d+=">",d}text(c){return"tokens"in c&&c.tokens?this.parser.parseInline(c.tokens):c.text}}class Qc{strong({text:c}){return c}em({text:c}){return c}codespan({text:c}){return c}del({text:c}){return c}html({text:c}){return c}text({text:c}){return c}link({text:c}){return""+c}image({text:c}){return""+c}br(){return""}}class Ut{constructor(c){Te(this,"options");Te(this,"renderer");Te(this,"textRenderer");this.options=c||Fn,this.options.renderer=this.options.renderer||new iu,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Qc}static parse(c,o){return new Ut(o).parse(c)}static parseInline(c,o){return new Ut(o).parseInline(c)}parse(c,o=!0){let s="";for(let r=0;r<c.length;r++){const d=c[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]){const z=d,b=this.options.extensions.renderers[z.type].call({parser:this},z);if(b!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(z.type)){s+=b||"";continue}}const h=d;switch(h.type){case"space":{s+=this.renderer.space(h);continue}case"hr":{s+=this.renderer.hr(h);continue}case"heading":{s+=this.renderer.heading(h);continue}case"code":{s+=this.renderer.code(h);continue}case"table":{s+=this.renderer.table(h);continue}case"blockquote":{s+=this.renderer.blockquote(h);continue}case"list":{s+=this.renderer.list(h);continue}case"html":{s+=this.renderer.html(h);continue}case"paragraph":{s+=this.renderer.paragraph(h);continue}case"text":{let z=h,b=this.renderer.text(z);for(;r+1<c.length&&c[r+1].type==="text";)z=c[++r],b+=`
`+this.renderer.text(z);o?s+=this.renderer.paragraph({type:"paragraph",raw:b,text:b,tokens:[{type:"text",raw:b,text:b}]}):s+=b;continue}default:{const z='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(z),"";throw new Error(z)}}}return s}parseInline(c,o){o=o||this.renderer;let s="";for(let r=0;r<c.length;r++){const d=c[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]){const z=this.options.extensions.renderers[d.type].call({parser:this},d);if(z!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(d.type)){s+=z||"";continue}}const h=d;switch(h.type){case"escape":{s+=o.text(h);break}case"html":{s+=o.html(h);break}case"link":{s+=o.link(h);break}case"image":{s+=o.image(h);break}case"strong":{s+=o.strong(h);break}case"em":{s+=o.em(h);break}case"codespan":{s+=o.codespan(h);break}case"br":{s+=o.br(h);break}case"del":{s+=o.del(h);break}case"text":{s+=o.text(h);break}default:{const z='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(z),"";throw new Error(z)}}}return s}}class jl{constructor(c){Te(this,"options");this.options=c||Fn}preprocess(c){return c}postprocess(c){return c}processAllTokens(c){return c}}Te(jl,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var nn,Cp,Oc,Np;class J0{constructor(...c){Jd(this,nn);Te(this,"defaults",Hc());Te(this,"options",this.setOptions);Te(this,"parse",Dl(this,nn,Oc).call(this,jt.lex,Ut.parse));Te(this,"parseInline",Dl(this,nn,Oc).call(this,jt.lexInline,Ut.parseInline));Te(this,"Parser",Ut);Te(this,"Renderer",iu);Te(this,"TextRenderer",Qc);Te(this,"Lexer",jt);Te(this,"Tokenizer",au);Te(this,"Hooks",jl);this.use(...c)}walkTokens(c,o){var r,d;let s=[];for(const h of c)switch(s=s.concat(o.call(this,h)),h.type){case"table":{const z=h;for(const b of z.header)s=s.concat(this.walkTokens(b.tokens,o));for(const b of z.rows)for(const x of b)s=s.concat(this.walkTokens(x.tokens,o));break}case"list":{const z=h;s=s.concat(this.walkTokens(z.items,o));break}default:{const z=h;(d=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&d[z.type]?this.defaults.extensions.childTokens[z.type].forEach(b=>{const x=z[b].flat(1/0);s=s.concat(this.walkTokens(x,o))}):z.tokens&&(s=s.concat(this.walkTokens(z.tokens,o)))}}return s}use(...c){const o=this.defaults.extensions||{renderers:{},childTokens:{}};return c.forEach(s=>{const r={...s};if(r.async=this.defaults.async||r.async||!1,s.extensions&&(s.extensions.forEach(d=>{if(!d.name)throw new Error("extension name required");if("renderer"in d){const h=o.renderers[d.name];h?o.renderers[d.name]=function(...z){let b=d.renderer.apply(this,z);return b===!1&&(b=h.apply(this,z)),b}:o.renderers[d.name]=d.renderer}if("tokenizer"in d){if(!d.level||d.level!=="block"&&d.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const h=o[d.level];h?h.unshift(d.tokenizer):o[d.level]=[d.tokenizer],d.start&&(d.level==="block"?o.startBlock?o.startBlock.push(d.start):o.startBlock=[d.start]:d.level==="inline"&&(o.startInline?o.startInline.push(d.start):o.startInline=[d.start]))}"childTokens"in d&&d.childTokens&&(o.childTokens[d.name]=d.childTokens)}),r.extensions=o),s.renderer){const d=this.defaults.renderer||new iu(this.defaults);for(const h in s.renderer){if(!(h in d))throw new Error(`renderer '${h}' does not exist`);if(["options","parser"].includes(h))continue;const z=h;let b=s.renderer[z];s.useNewRenderer||(b=Dl(this,nn,Cp).call(this,b,z,d));const x=d[z];d[z]=(...w)=>{let R=b.apply(d,w);return R===!1&&(R=x.apply(d,w)),R||""}}r.renderer=d}if(s.tokenizer){const d=this.defaults.tokenizer||new au(this.defaults);for(const h in s.tokenizer){if(!(h in d))throw new Error(`tokenizer '${h}' does not exist`);if(["options","rules","lexer"].includes(h))continue;const z=h,b=s.tokenizer[z],x=d[z];d[z]=(...w)=>{let R=b.apply(d,w);return R===!1&&(R=x.apply(d,w)),R}}r.tokenizer=d}if(s.hooks){const d=this.defaults.hooks||new jl;for(const h in s.hooks){if(!(h in d))throw new Error(`hook '${h}' does not exist`);if(h==="options")continue;const z=h,b=s.hooks[z],x=d[z];jl.passThroughHooks.has(h)?d[z]=w=>{if(this.defaults.async)return Promise.resolve(b.call(d,w)).then(B=>x.call(d,B));const R=b.call(d,w);return x.call(d,R)}:d[z]=(...w)=>{let R=b.apply(d,w);return R===!1&&(R=x.apply(d,w)),R}}r.hooks=d}if(s.walkTokens){const d=this.defaults.walkTokens,h=s.walkTokens;r.walkTokens=function(z){let b=[];return b.push(h.call(this,z)),d&&(b=b.concat(d.call(this,z))),b}}this.defaults={...this.defaults,...r}}),this}setOptions(c){return this.defaults={...this.defaults,...c},this}lexer(c,o){return jt.lex(c,o??this.defaults)}parser(c,o){return Ut.parse(c,o??this.defaults)}}nn=new WeakSet,Cp=function(c,o,s){switch(o){case"heading":return function(r){return!r.type||r.type!==o?c.apply(this,arguments):c.call(this,s.parser.parseInline(r.tokens),r.depth,b0(s.parser.parseInline(r.tokens,s.parser.textRenderer)))};case"code":return function(r){return!r.type||r.type!==o?c.apply(this,arguments):c.call(this,r.text,r.lang,!!r.escaped)};case"table":return function(r){if(!r.type||r.type!==o)return c.apply(this,arguments);let d="",h="";for(let b=0;b<r.header.length;b++)h+=this.tablecell({text:r.header[b].text,tokens:r.header[b].tokens,header:!0,align:r.align[b]});d+=this.tablerow({text:h});let z="";for(let b=0;b<r.rows.length;b++){const x=r.rows[b];h="";for(let w=0;w<x.length;w++)h+=this.tablecell({text:x[w].text,tokens:x[w].tokens,header:!1,align:r.align[w]});z+=this.tablerow({text:h})}return c.call(this,d,z)};case"blockquote":return function(r){if(!r.type||r.type!==o)return c.apply(this,arguments);const d=this.parser.parse(r.tokens);return c.call(this,d)};case"list":return function(r){if(!r.type||r.type!==o)return c.apply(this,arguments);const d=r.ordered,h=r.start,z=r.loose;let b="";for(let x=0;x<r.items.length;x++){const w=r.items[x],R=w.checked,B=w.task;let Q="";if(w.task){const G=this.checkbox({checked:!!R});z?w.tokens.length>0&&w.tokens[0].type==="paragraph"?(w.tokens[0].text=G+" "+w.tokens[0].text,w.tokens[0].tokens&&w.tokens[0].tokens.length>0&&w.tokens[0].tokens[0].type==="text"&&(w.tokens[0].tokens[0].text=G+" "+w.tokens[0].tokens[0].text)):w.tokens.unshift({type:"text",text:G+" "}):Q+=G+" "}Q+=this.parser.parse(w.tokens,z),b+=this.listitem({type:"list_item",raw:Q,text:Q,task:B,checked:!!R,loose:z,tokens:w.tokens})}return c.call(this,b,d,h)};case"html":return function(r){return!r.type||r.type!==o?c.apply(this,arguments):c.call(this,r.text,r.block)};case"paragraph":return function(r){return!r.type||r.type!==o?c.apply(this,arguments):c.call(this,this.parser.parseInline(r.tokens))};case"escape":return function(r){return!r.type||r.type!==o?c.apply(this,arguments):c.call(this,r.text)};case"link":return function(r){return!r.type||r.type!==o?c.apply(this,arguments):c.call(this,r.href,r.title,this.parser.parseInline(r.tokens))};case"image":return function(r){return!r.type||r.type!==o?c.apply(this,arguments):c.call(this,r.href,r.title,r.text)};case"strong":return function(r){return!r.type||r.type!==o?c.apply(this,arguments):c.call(this,this.parser.parseInline(r.tokens))};case"em":return function(r){return!r.type||r.type!==o?c.apply(this,arguments):c.call(this,this.parser.parseInline(r.tokens))};case"codespan":return function(r){return!r.type||r.type!==o?c.apply(this,arguments):c.call(this,r.text)};case"del":return function(r){return!r.type||r.type!==o?c.apply(this,arguments):c.call(this,this.parser.parseInline(r.tokens))};case"text":return function(r){return!r.type||r.type!==o?c.apply(this,arguments):c.call(this,r.text)}}return c},Oc=function(c,o){return(s,r)=>{const d={...r},h={...this.defaults,...d};this.defaults.async===!0&&d.async===!1&&(h.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),h.async=!0);const z=Dl(this,nn,Np).call(this,!!h.silent,!!h.async);if(typeof s>"u"||s===null)return z(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return z(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(h.hooks&&(h.hooks.options=h),h.async)return Promise.resolve(h.hooks?h.hooks.preprocess(s):s).then(b=>c(b,h)).then(b=>h.hooks?h.hooks.processAllTokens(b):b).then(b=>h.walkTokens?Promise.all(this.walkTokens(b,h.walkTokens)).then(()=>b):b).then(b=>o(b,h)).then(b=>h.hooks?h.hooks.postprocess(b):b).catch(z);try{h.hooks&&(s=h.hooks.preprocess(s));let b=c(s,h);h.hooks&&(b=h.hooks.processAllTokens(b)),h.walkTokens&&this.walkTokens(b,h.walkTokens);let x=o(b,h);return h.hooks&&(x=h.hooks.postprocess(x)),x}catch(b){return z(b)}}},Np=function(c,o){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,c){const r="<p>An error occurred:</p><pre>"+mt(s.message+"",!0)+"</pre>";return o?Promise.resolve(r):r}if(o)return Promise.reject(s);throw s}};const $n=new J0;function pe(p,c){return $n.parse(p,c)}pe.options=pe.setOptions=function(p){return $n.setOptions(p),pe.defaults=$n.defaults,pp(pe.defaults),pe};pe.getDefaults=Hc;pe.defaults=Fn;pe.use=function(...p){return $n.use(...p),pe.defaults=$n.defaults,pp(pe.defaults),pe};pe.walkTokens=function(p,c){return $n.walkTokens(p,c)};pe.parseInline=$n.parseInline;pe.Parser=Ut;pe.parser=Ut.parse;pe.Renderer=iu;pe.TextRenderer=Qc;pe.Lexer=jt;pe.lexer=jt.lex;pe.Tokenizer=au;pe.Hooks=jl;pe.parse=pe;pe.options;pe.setOptions;pe.use;pe.walkTokens;pe.parseInline;Ut.parse;jt.lex;const $0=`/* ================================================================
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
`,F0=`/* ============================================================
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
`,W0=`// Icons used across the prototype — small inline SVGs matching Ennabl's icon style
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
`,I0=`// Template picker — trigger button + dropdown menu with search,
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
              <div className="menu-empty">No templates match “{q}”.</div>
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
`,P0=`// Modals — Save-as-template dialog, Save-changes confirm, Manage modal.

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
            <div className="dialog-title">Save changes to “{template.name}”?</div>
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
                  No templates match “{q}”.
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
  const resolvedTitle = title || \`Delete “\${template.name}”?\`;
  const resolvedMessage = message || (
    <>
      This template will no longer be available to anyone in your organization.
      {template.usageCount > 0 && \` Existing proposals (\${template.usageCount.toLocaleString()}) that used it won't be affected.\`}
    </>
  );
  return (
    <Scrim onClose={onClose}>
      <div className=”dialog” onClick={(e) => e.stopPropagation()} style={{ maxWidth: 440 }}>
        <div className=”dialog-head”>
          <div>
            <div className=”dialog-title”>{resolvedTitle}</div>
            <div className=”dialog-sub”>{resolvedMessage}</div>
          </div>
          <button className=”btn-icon” onClick={onClose}><IconClose size={16} /></button>
        </div>
        <div className=”dialog-foot”>
          <button className=”btn btn-secondary” onClick={onClose}>Cancel</button>
          <button className=”btn btn-primary” style={{ background: 'var(--en-error-dark)' }} onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </Scrim>
  );
}

Object.assign(window, { Scrim, SaveTemplateDialog, UpdateTemplateDialog, ManageModal, DeleteConfirm });
`,eg=`// Step 3 body — Producer Team table + Additional Information block.
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
`,tg=$0.replace(/@font-face\s*\{[^}]*\}/g,""),ng=[I0,P0,eg].join(`

`);function ag(p){return`<!doctype html>
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
  <style>${tg}</style>
  <style>${F0}</style>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; min-height: 100vh; background: var(--en-bg-grey, #f4f6fc); }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
${W0}
  <\/script>
  <script type="text/babel">
${ng}
  <\/script>
  <script type="text/babel">
${p}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
  <\/script>
</body>
</html>`}function lg({code:p}){const c=we.useRef(null),[o,s]=we.useState("preview");return we.useEffect(()=>{!c.current||!p||(c.current.srcdoc=ag(p))},[p]),p?T.jsxs("div",{className:"canvas canvas--live",children:[T.jsxs("div",{className:"canvas-toolbar",children:[T.jsxs("div",{className:"canvas-view-tabs",children:[T.jsx("button",{className:`canvas-view-tab ${o==="preview"?"active":""}`,onClick:()=>s("preview"),children:"Preview"}),T.jsx("button",{className:`canvas-view-tab ${o==="code"?"active":""}`,onClick:()=>s("code"),children:"Code"})]}),T.jsx("button",{className:"canvas-copy-btn",onClick:()=>navigator.clipboard.writeText(p),children:"copy"})]}),T.jsxs("div",{className:"canvas-body",children:[T.jsx("iframe",{ref:c,className:"canvas-iframe",style:{display:o==="preview"?"block":"none"},title:"design preview",sandbox:"allow-scripts allow-same-origin"}),o==="code"&&T.jsx("pre",{className:"canvas-code",children:T.jsx("code",{children:p})})]})]}):T.jsx("div",{className:"canvas canvas--empty",children:T.jsxs("div",{className:"canvas-empty-inner",children:[T.jsx("div",{className:"canvas-empty-icon",children:"◻"}),T.jsx("p",{children:"Your design will appear here"}),T.jsx("span",{children:"Load a PRD and describe the UI in the chat"})]})})}const zp="ennabl_builder_history",ig=50;function ug(){try{return JSON.parse(localStorage.getItem(zp)||"[]")}catch{return[]}}function rp(p){localStorage.setItem(zp,JSON.stringify(p.slice(0,ig)))}function sg({prdName:p,code:c,iteration:o}){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,timestamp:new Date().toISOString(),prdName:p,code:c,iteration:o}}function cg(p){const o=`${p.prdName.replace(/\.md$/i,"").replace(/[^a-z0-9]/gi,"-").toLowerCase()}-v${p.iteration}.jsx`,s=`/**
 * ennabl builder — generated component
 * PRD: ${p.prdName}  |  iteration: ${p.iteration}
 * ${new Date(p.timestamp).toLocaleString()}
 *
 * Globals expected:
 *   - React 18 UMD (window.React, window.ReactDOM)
 *   - ennabl design system CSS (--en-* variables)
 *   - icons.jsx globals (IconCheck, IconClose, …)
 *   - shared globals (Scrim, CollapsibleSection, EditableField, …)
 */

${p.code}
`,r=new Blob([s],{type:"text/plain"}),d=URL.createObjectURL(r);Object.assign(document.createElement("a"),{href:d,download:o}).click(),URL.revokeObjectURL(d)}function og(p){const c=Math.floor((Date.now()-new Date(p))/6e4);if(c<1)return"just now";if(c<60)return`${c}m ago`;const o=Math.floor(c/60);return o<24?`${o}h ago`:`${Math.floor(o/24)}d ago`}function rg(p){return p.split(`
`).slice(0,3).join(`
`).slice(0,140)}function fg({entries:p,onClear:c}){const[o,s]=we.useState(null);function r(d){navigator.clipboard.writeText(d.code),s(d.id),setTimeout(()=>s(null),2e3)}return p.length===0?T.jsxs("div",{className:"sb-empty",children:[T.jsx("p",{children:"No components yet"}),T.jsx("span",{children:"Each generated UI is logged here. Download or copy the JSX to use in your codebase."})]}):T.jsxs("div",{className:"sb-tab",children:[T.jsxs("div",{className:"sb-toolbar",children:[T.jsxs("span",{className:"sb-count",children:[p.length," snapshot",p.length!==1?"s":""]}),T.jsx("button",{className:"sb-clear",onClick:c,children:"clear all"})]}),T.jsx("div",{className:"sb-list",children:p.map(d=>T.jsxs("div",{className:"sb-entry",children:[T.jsxs("div",{className:"sb-entry-top",children:[T.jsx("span",{className:"sb-entry-name",children:d.prdName.replace(/\.md$/i,"")}),T.jsxs("span",{className:"sb-entry-badge",children:["v",d.iteration]}),T.jsx("span",{className:"sb-entry-time",children:og(d.timestamp)})]}),T.jsx("pre",{className:"sb-entry-code",children:rg(d.code)}),T.jsxs("div",{className:"sb-entry-actions",children:[T.jsx("button",{className:"sb-btn",onClick:()=>r(d),children:o===d.id?"✓ copied":"copy"}),T.jsx("button",{className:"sb-btn sb-btn--primary",onClick:()=>cg(d),children:"↓ .jsx"})]})]},d.id))})]})}function dg({entries:p}){return T.jsx("div",{className:"figma-tab",children:T.jsxs("div",{className:"figma-coming",children:[T.jsx("div",{className:"figma-icon",children:"◈"}),T.jsx("p",{children:"Figma sync"}),T.jsx("span",{children:"Will push each generated component into your Figma file as a frame — auto-named by PRD and iteration, grouped in a dedicated page. Requires a Figma access token."}),T.jsx("div",{className:"figma-queue",children:p.length>0?T.jsxs(T.Fragment,{children:[T.jsxs("span",{className:"figma-queue-label",children:[p.length," snapshot",p.length!==1?"s":""," queued"]}),T.jsx("button",{className:"figma-btn",disabled:!0,children:"Connect Figma to push"})]}):T.jsx("span",{className:"figma-queue-label",children:"Generate a UI first"})})]})})}function pg({code:p,prd:c,history:o,onHistoryClear:s}){const[r,d]=we.useState("design");return T.jsxs("div",{className:"left-panel",children:[T.jsxs("div",{className:"left-tabs",children:[T.jsx("button",{className:`left-tab ${r==="design"?"left-tab--active":""}`,onClick:()=>d("design"),children:"Design"}),T.jsx("button",{className:`left-tab ${r==="prd"?"left-tab--active":""} ${c?"":"left-tab--disabled"}`,onClick:()=>c&&d("prd"),children:c?c.name:"PRD"}),T.jsxs("button",{className:`left-tab ${r==="storybook"?"left-tab--active":""}`,onClick:()=>d("storybook"),children:["Storybook",o.length>0&&T.jsx("span",{className:"left-tab-count",children:o.length})]}),T.jsx("button",{className:`left-tab ${r==="figma"?"left-tab--active":""}`,onClick:()=>d("figma"),children:"Figma"})]}),T.jsxs("div",{className:"left-content",children:[T.jsx("div",{className:`left-canvas-wrap ${r!=="design"?"left-canvas-wrap--hidden":""}`,children:T.jsx(lg,{code:p})}),r==="prd"&&c&&T.jsx("div",{className:"prd-view",dangerouslySetInnerHTML:{__html:pe.parse(c.content)}}),r==="prd"&&!c&&T.jsx("div",{className:"prd-empty",children:"No PRD loaded"}),r==="storybook"&&T.jsx(fg,{entries:o,onClear:s}),r==="figma"&&T.jsx(dg,{entries:o})]})]})}const Ep="ennabl_builder_api_key",wp=()=>localStorage.getItem(Ep)||"",hg=p=>localStorage.setItem(Ep,p.trim()),Ap="ennabl_builder_model",mg=[{id:"claude-haiku-4-5-20251001",label:"Haiku",note:"dev / fast"},{id:"claude-sonnet-4-6",label:"Sonnet",note:"balanced"},{id:"claude-opus-4-7",label:"Opus",note:"prod / best"}],gg="claude-haiku-4-5-20251001",Dp=()=>localStorage.getItem(Ap)||gg,vg=p=>localStorage.setItem(Ap,p),bg=`# ennabl Design Tokens

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
`,yg=`# ennabl Component Patterns

## Scope rule

Match the PRD's scope exactly — a filter modal is just a modal, a table section is just a table, a chart widget is just the chart. Only wrap in a full \`.stage\` page layout when the PRD describes a complete screen. Never pad a focused component into a page it doesn't need.

## Multi-view / drilldown navigation

The preview has no router. Use \`useState\` to switch views:

\`\`\`jsx
const [view, setView] = useState('list') // 'list' | 'detail' | 'create'

// Render current view
if (view === 'detail') return <DetailView item={selected} onBack={() => setView('list')} />
if (view === 'create') return <CreateView onBack={() => setView('list')} onSave={handleSave} />

// Default: list view
return (
  <div className="stage">
    {/* list content — clicking a row calls setView('detail') */}
  </div>
)
\`\`\`

Rules:
- Always include a back button / breadcrumb that returns to the previous view
- Keep all views inside the single \`App\` function as inline functions or nested returns
- Use \`selected\` state to pass the drilled-into item to the detail view

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
`,xg=`# ennabl Shared Components

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
`,Sg=`You are an expert UI engineer for ennabl, an insurance analytics platform for insurance agencies and brokers.

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

${bg}

## Component patterns

${yg}

## Shared components (available as globals in the preview)

${xg}

## Context

The generated code runs inside a Vite + React app. The ennabl design system CSS (colors_and_type.css + styles.css) is already loaded globally — you can use all \`--en-*\` variables and \`.en-*\` classes directly without importing them.`,Tg="https://api.anthropic.com/v1/messages";function Cg(p){return p==="claude-opus-4-7"?{max_tokens:8192,thinking:{type:"enabled",budget_tokens:5e3}}:{max_tokens:8192}}async function Ng({messages:p,onText:c,onDone:o}){var w,R,B,Q,G,ae,L;const s=Dp(),r=await fetch(Tg,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":wp(),"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:s,...Cg(s),system:[{type:"text",text:Sg,cache_control:{type:"ephemeral"}}],messages:p,stream:!0})});if(!r.ok){const ie=await r.json().catch(()=>({}));throw new Error(((w=ie.error)==null?void 0:w.message)||`API error ${r.status}`)}const d=r.body.getReader(),h=new TextDecoder;let z=0,b=0,x=0;for(;;){const{done:ie,value:Ae}=await d.read();if(ie)break;const Ce=h.decode(Ae).split(`
`);for(const W of Ce){if(!W.startsWith("data: "))continue;const he=W.slice(6).trim();if(!(!he||he==="[DONE]"))try{const ce=JSON.parse(he);ce.type==="message_start"&&(z=((B=(R=ce.message)==null?void 0:R.usage)==null?void 0:B.input_tokens)??0,x=((G=(Q=ce.message)==null?void 0:Q.usage)==null?void 0:G.cache_read_input_tokens)??0),ce.type==="content_block_delta"&&((ae=ce.delta)==null?void 0:ae.type)==="text_delta"&&c(ce.delta.text),ce.type==="message_delta"&&(b=((L=ce.usage)==null?void 0:L.output_tokens)??0)}catch{}}}o({inputTokens:z,outputTokens:b,cacheReadTokens:x})}const Mp="ennabl_builder_reports",kc={input:15/1e6,output:75/1e6,cacheRead:1.5/1e6};function zg({inputTokens:p=0,outputTokens:c=0,cacheReadTokens:o=0}){return Math.max(0,p-o)*kc.input+o*kc.cacheRead+c*kc.output}function Eg(p){return{id:`s_${Date.now()}`,prdName:p,startedAt:new Date().toISOString(),iterations:0,inputTokens:0,outputTokens:0,cacheReadTokens:0,cost:0,componentsUsed:[],rating:null,accepted:!1}}function kp(){try{return JSON.parse(localStorage.getItem(Mp)||"{}")}catch{return{}}}function wg(p){localStorage.setItem(Mp,JSON.stringify(p))}function jc(p){const c=kp(),o=p.prdName;c[o]||(c[o]=[]);const s=c[o].findIndex(r=>r.id===p.id);s>=0?c[o][s]=p:c[o].unshift(p),wg(c)}function _c(p){return kp()[p]||[]}function Ag(p){return p?["CollapsibleSection","EditableField","TemplatePicker","SaveTemplateDialog","UpdateTemplateDialog","ManageModal","DeleteConfirm","Step3Body","ProducerTable"].filter(o=>p.includes(o)):[]}function Dg(p){if(!p.length)return null;const c=p.filter(o=>o.accepted&&o.iterations<=2).length;return Math.round(c/p.length*100)}function Mg(p){const c=p.match(/```(?:jsx?|tsx?|javascript|typescript)?\n([\s\S]*?)```/);return c?c[1].trim():null}function kg({prd:p,messages:c,setMessages:o,onCodeGenerated:s,onSwitchToPrd:r,onIterationComplete:d}){const[h,z]=we.useState(""),[b,x]=we.useState(!1),[w,R]=we.useState(Dp),B=we.useRef(null),Q=we.useRef(null);we.useEffect(()=>{var L;(L=B.current)==null||L.scrollIntoView({behavior:"smooth"})},[c]);async function G(){const L=h.trim();if(!L||b)return;const ie={role:"user",content:L},Ae=p?`

---
PRD: ${p.name}

${p.content}
---
`:"",Ce=[...p&&c.length===0?[{role:"user",content:`${Ae}
${L}`}]:[...c,ie]];o(W=>[...W,ie]),z(""),x(!0),o(W=>[...W,{role:"assistant",content:""}]);try{let W="",he=null;await Ng({messages:Ce,onText:K=>{W+=K,o(Ve=>{const Fe=[...Ve];return Fe[Fe.length-1]={role:"assistant",content:W},Fe})},onDone:K=>{he=K}});const ce=Mg(W);if(ce&&s(ce),d){const K=he||{};d({inputTokens:K.inputTokens||0,outputTokens:K.outputTokens||0,cacheReadTokens:K.cacheReadTokens||0,componentsUsed:Ag(ce)})}}catch(W){o(he=>{const ce=[...he];return ce[ce.length-1]={role:"assistant",content:`Error: ${W.message}`},ce})}finally{x(!1)}}function ae(L){L.key==="Enter"&&!L.shiftKey&&(L.preventDefault(),G())}return T.jsxs("div",{className:"chat-panel",children:[T.jsxs("div",{className:"chat-messages",children:[c.length===0&&T.jsx("div",{className:"chat-empty",children:p?T.jsx(T.Fragment,{children:"PRD loaded. Describe the UI you want to build."}):T.jsx(T.Fragment,{children:"Load a PRD first, then describe what to build."})}),c.map((L,ie)=>T.jsx("div",{className:`chat-msg chat-msg--${L.role}`,children:L.role==="assistant"?T.jsx(_g,{content:L.content}):T.jsx("span",{children:L.content})},ie)),T.jsx("div",{ref:B})]}),T.jsxs("div",{className:"chat-input-area",children:[T.jsx("div",{className:"chat-model-row",children:mg.map(L=>T.jsx("button",{className:`chat-model-btn ${w===L.id?"chat-model-btn--active":""}`,onClick:()=>{R(L.id),vg(L.id)},title:L.note,children:L.label},L.id))}),T.jsxs("div",{className:"chat-input-row",children:[T.jsx("textarea",{ref:Q,className:"chat-input",placeholder:p?`Build from ${p.name}…`:"Load a PRD first…",value:h,onChange:L=>z(L.target.value),onKeyDown:ae,disabled:!p||b,rows:3}),T.jsx("button",{className:"chat-send-btn",onClick:G,disabled:!p||!h.trim()||b,children:b?T.jsx("span",{className:"chat-spinner"}):"↑"})]})]})]})}function _g({content:p}){const c=p.split(/(```[\s\S]*?```)/g);return T.jsx("div",{className:"chat-msg-content",children:c.map((o,s)=>{if(o.startsWith("```")){const r=o.replace(/^```[^\n]*\n?/,"").replace(/```$/,"");return T.jsx("pre",{className:"chat-code-block",children:T.jsx("code",{children:r})},s)}return T.jsx("span",{children:o},s)})})}function Rg({value:p,onChange:c}){const[o,s]=we.useState(null);return T.jsx("div",{className:"stars",children:[1,2,3,4,5].map(r=>T.jsx("button",{className:`star-btn ${r<=(o??p??0)?"star-btn--on":""}`,onMouseEnter:()=>s(r),onMouseLeave:()=>s(null),onClick:()=>c(r),"aria-label":`Rate ${r} star${r>1?"s":""}`,children:"★"},r))})}function fp(p){return p>=1e3?`${(p/1e3).toFixed(1)}k`:String(p)}function dp(p){return p<.01?"<$0.01":`$${p.toFixed(2)}`}function Og(p){const c=new Date(p),o=new Date;if(c.toDateString()===o.toDateString())return"today";const s=Math.floor((o-c)/864e5);return s===1?"yesterday":s<7?`${s}d ago`:c.toLocaleDateString("en-US",{month:"short",day:"numeric"})}function jg({session:p,prd:c,onSessionUpdate:o}){const[s,r]=we.useState([]);if(we.useEffect(()=>{c&&r(_c(c.name))},[c,p]),!c)return T.jsx("div",{className:"report-empty",children:"Load a PRD to see reports."});const d=Dg(s),h=s.length;s.some(w=>w.id===(p==null?void 0:p.id));function z(w){const R={...p,rating:w};o(R),jc(R),r(_c(c.name))}function b(){const w={...p,accepted:!0};o(w),jc(w),r(_c(c.name))}const x=s.filter(w=>w.id!==(p==null?void 0:p.id));return T.jsxs("div",{className:"report-tab",children:[p&&T.jsxs("section",{className:"report-section",children:[T.jsxs("div",{className:"report-section-label",children:["Current session",p.accepted&&T.jsx("span",{className:"report-badge report-badge--green",children:"Accepted"})]}),T.jsxs("div",{className:"report-metrics",children:[T.jsxs("div",{className:"report-metric",children:[T.jsx("span",{className:"report-metric-value",children:p.iterations}),T.jsx("span",{className:"report-metric-label",children:"iterations"}),p.iterations<=2&&p.iterations>0&&T.jsx("span",{className:"report-badge report-badge--green",children:"≤2 ✓"})]}),T.jsxs("div",{className:"report-metric",children:[T.jsx("span",{className:"report-metric-value",children:fp(p.inputTokens+p.outputTokens)}),T.jsx("span",{className:"report-metric-label",children:"tokens"})]}),T.jsxs("div",{className:"report-metric",children:[T.jsx("span",{className:"report-metric-value",children:dp(p.cost)}),T.jsx("span",{className:"report-metric-label",children:"cost"})]})]}),p.cacheReadTokens>0&&T.jsxs("div",{className:"report-cache-note",children:[fp(p.cacheReadTokens)," tokens from cache"]}),p.componentsUsed.length>0&&T.jsxs("div",{className:"report-components",children:[T.jsx("span",{className:"report-components-label",children:"Components used"}),T.jsx("div",{className:"report-chips",children:p.componentsUsed.map(w=>T.jsx("span",{className:"report-chip",children:w},w))})]}),T.jsxs("div",{className:"report-rating-row",children:[T.jsx("span",{className:"report-rating-label",children:"Rate this design"}),T.jsx(Rg,{value:p.rating,onChange:z})]}),!p.accepted&&T.jsx("button",{className:"report-accept-btn",onClick:b,disabled:p.iterations===0,children:"✓ Accept design"})]}),h>0&&T.jsxs("section",{className:"report-section",children:[T.jsxs("div",{className:"report-section-label",children:["This PRD · ",h," session",h>1?"s":""]}),T.jsx("div",{className:"report-summary",children:d!==null&&T.jsxs("div",{className:"report-metric",children:[T.jsxs("span",{className:"report-metric-value report-metric-value--lg",children:[d,"%"]}),T.jsx("span",{className:"report-metric-label",children:"accepted in ≤2 iterations"})]})})]}),x.length>0&&T.jsxs("section",{className:"report-section",children:[T.jsx("div",{className:"report-section-label",children:"History"}),T.jsx("div",{className:"report-history",children:x.map(w=>T.jsxs("div",{className:"report-history-row",children:[T.jsxs("div",{className:"report-history-left",children:[T.jsx("span",{className:"report-history-date",children:Og(w.startedAt)}),T.jsxs("span",{className:"report-history-iter",children:[w.iterations," iter",w.iterations!==1?"s":""]}),w.accepted&&T.jsx("span",{className:"report-badge report-badge--green",children:"✓"}),w.iterations<=2&&w.accepted&&T.jsx("span",{className:"report-badge report-badge--blue",children:"≤2"})]}),T.jsxs("div",{className:"report-history-right",children:[w.rating&&T.jsxs("span",{className:"report-history-stars",children:["★".repeat(w.rating),"☆".repeat(5-w.rating)]}),T.jsx("span",{className:"report-history-cost",children:dp(w.cost)})]})]},w.id))})]}),!p&&h===0&&T.jsx("div",{className:"report-empty",children:"Start a chat to begin tracking."})]})}function Ug({prd:p,messages:c,setMessages:o,onCodeGenerated:s,onIterationComplete:r,session:d,onSessionUpdate:h}){const[z,b]=we.useState("chat");return T.jsxs("div",{className:"right-panel",children:[T.jsxs("div",{className:"right-tabs",children:[T.jsx("button",{className:`right-tab ${z==="chat"?"right-tab--active":""}`,onClick:()=>b("chat"),children:"Chat"}),T.jsxs("button",{className:`right-tab ${z==="report"?"right-tab--active":""}`,onClick:()=>b("report"),children:["Report",(d==null?void 0:d.accepted)&&T.jsx("span",{className:"right-tab-dot right-tab-dot--green"}),d&&!d.accepted&&d.iterations>0&&T.jsx("span",{className:"right-tab-dot"})]})]}),T.jsxs("div",{className:"right-content",children:[z==="chat"&&T.jsx(kg,{prd:p,messages:c,setMessages:o,onCodeGenerated:s,onIterationComplete:r,onSwitchToPrd:()=>b("prd")}),z==="report"&&T.jsx(jg,{session:d,prd:p,onSessionUpdate:h})]})]})}function Hg({onDone:p}){const[c,o]=we.useState(""),[s,r]=we.useState(null);function d(){const h=c.trim();if(!h.startsWith("sk-ant-")&&!h.startsWith("sk-")){r("Paste your Anthropic API key — it starts with sk-ant-");return}hg(h),p()}return T.jsx("div",{className:"setup-overlay",children:T.jsxs("div",{className:"setup-card",children:[T.jsxs("div",{className:"setup-logo",children:[T.jsx("span",{className:"setup-logo-name",children:"ennabl"}),T.jsx("span",{className:"setup-logo-suffix",children:"builder"})]}),T.jsxs("p",{className:"setup-desc",children:["Paste your Anthropic API key to get started.",T.jsx("br",{}),"It's stored only in your browser's local storage."]}),T.jsx("label",{className:"setup-label",children:"Anthropic API Key"}),T.jsx("input",{className:"setup-input",type:"password",value:c,onChange:h=>{o(h.target.value),r(null)},onKeyDown:h=>h.key==="Enter"&&d(),placeholder:"sk-ant-...",spellCheck:!1,autoFocus:!0}),s&&T.jsx("p",{className:"setup-error",children:s}),T.jsx("button",{className:"setup-btn",onClick:d,disabled:!c.trim(),children:"Save & continue"})]})})}function Bg(){const[p,c]=we.useState(null),[o,s]=we.useState(null),[r,d]=we.useState([]),[h,z]=we.useState(()=>!!wp()),[b,x]=we.useState(null),[w,R]=we.useState(ug);function B(L){if(s(L),p){const Ae=[sg({prdName:p.name,code:L,iteration:((b==null?void 0:b.iterations)??0)+1}),...w].slice(0,50);R(Ae),rp(Ae)}}function Q({inputTokens:L,outputTokens:ie,cacheReadTokens:Ae,componentsUsed:Ce}){x(W=>{if(!W)return W;const he={...W,iterations:W.iterations+1,inputTokens:W.inputTokens+L,outputTokens:W.outputTokens+ie,cacheReadTokens:W.cacheReadTokens+Ae,componentsUsed:[...new Set([...W.componentsUsed,...Ce])]};return he.cost=zg(he),jc(he),he})}function G(L){const ie=new FileReader;ie.onload=Ae=>{c({name:L.name,content:Ae.target.result}),d([]),s(null),x(Eg(L.name))},ie.readAsText(L)}function ae(){R([]),rp([])}return h?T.jsxs("div",{className:"app",children:[T.jsxs("header",{className:"app-header",children:[T.jsxs("div",{className:"app-header-left",children:[T.jsx("span",{className:"app-logo",children:"ennabl"}),T.jsx("span",{className:"app-logo-suffix",children:"builder"})]}),T.jsxs("label",{className:"prd-pick-btn",children:[p?"swap PRD":"load PRD",T.jsx("input",{type:"file",accept:".md,.txt",style:{display:"none"},onChange:L=>{L.target.files[0]&&G(L.target.files[0])}})]})]}),T.jsxs("main",{className:"app-panels",children:[T.jsx(pg,{code:o,prd:p,history:w,onHistoryClear:ae}),T.jsx("div",{className:"app-divider"}),T.jsx(Ug,{prd:p,messages:r,setMessages:d,onCodeGenerated:B,onIterationComplete:Q,session:b,onSessionUpdate:x})]})]}):T.jsx(Hg,{onDone:()=>z(!0)})}p0.createRoot(document.getElementById("root")).render(T.jsx(we.StrictMode,{children:T.jsx(Bg,{})}));
