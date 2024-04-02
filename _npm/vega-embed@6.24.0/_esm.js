/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/vega-embed@6.24.0/build/vega-embed.module.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{applyPatch as e}from"../fast-json-patch@3.1.1/_esm.js";import t from"../json-stringify-pretty-compact@3.0.0/_esm.js";import*as r from"../vega@5.28.0/_esm.js";import{isString as n,mergeConfig as i,isBoolean as s,isObject as o,writeConfig as a}from"../vega@5.28.0/_esm.js";import{expressionInterpreter as l}from"../vega-interpreter@1.0.5/_esm.js";import*as h from"../vega-lite@5.17.0/_esm.js";import c from"../vega-schema-url-parser@2.2.0/_esm.js";import*as p from"../vega-themes@2.14.0/_esm.js";import{Handler as u}from"../vega-tooltip@0.34.0/_esm.js";var f="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function m(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}var E=m,v=d;function g(e){if(E===setTimeout)return setTimeout(e,0);if((E===m||!E)&&setTimeout)return E=setTimeout,setTimeout(e,0);try{return E(e,0)}catch(t){try{return E.call(null,e,0)}catch(t){return E.call(this,e,0)}}}"function"==typeof f.setTimeout&&(E=setTimeout),"function"==typeof f.clearTimeout&&(v=clearTimeout);var $,I=[],w=!1,R=-1;function y(){w&&$&&(w=!1,$.length?I=$.concat(I):R=-1,I.length&&L())}function L(){if(!w){var e=g(y);w=!0;for(var t=I.length;t;){for($=I,I=[];++R<t;)$&&$[R].run();R=-1,t=I.length}$=null,w=!1,function(e){if(v===clearTimeout)return clearTimeout(e);if((v===d||!v)&&clearTimeout)return v=clearTimeout,clearTimeout(e);try{return v(e)}catch(t){try{return v.call(null,e)}catch(t){return v.call(this,e)}}}(e)}}function N(e,t){this.fun=e,this.array=t}N.prototype.run=function(){this.fun.apply(null,this.array)};function T(){}var A=T,O=T,b=T,x=T,S=T,C=T,D=T;var P=f.performance||{},F=P.now||P.mozNow||P.msNow||P.oNow||P.webkitNow||function(){return(new Date).getTime()};var G=new Date;var M,_,k={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];I.push(new N(e,t)),1!==I.length||w||g(L)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:A,addListener:O,once:b,off:x,removeListener:S,removeAllListeners:C,emit:D,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*F.call(P),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-G)/1e3}};function j(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var U=X;function X(e){var t=this;if(t instanceof X||(t=new X),t.tail=null,t.head=null,t.length=0,e&&"function"==typeof e.forEach)e.forEach((function(e){t.push(e)}));else if(arguments.length>0)for(var r=0,n=arguments.length;r<n;r++)t.push(arguments[r]);return t}function V(e,t,r){var n=t===e.head?new B(r,null,t,e):new B(r,t,t.next,e);return null===n.next&&(e.tail=n),null===n.prev&&(e.head=n),e.length++,n}function H(e,t){e.tail=new B(t,e.tail,null,e),e.head||(e.head=e.tail),e.length++}function z(e,t){e.head=new B(t,null,e.head,e),e.tail||(e.tail=e.head),e.length++}function B(e,t,r,n){if(!(this instanceof B))return new B(e,t,r,n);this.list=n,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,r?(r.prev=this,this.next=r):this.next=null}X.Node=B,X.create=X,X.prototype.removeNode=function(e){if(e.list!==this)throw new Error("removing node which does not belong to this list");var t=e.next,r=e.prev;return t&&(t.prev=r),r&&(r.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=r),e.list.length--,e.next=null,e.prev=null,e.list=null,t},X.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e);var t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++}},X.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e);var t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++}},X.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++)H(this,arguments[e]);return this.length},X.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++)z(this,arguments[e]);return this.length},X.prototype.pop=function(){if(this.tail){var e=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}},X.prototype.shift=function(){if(this.head){var e=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}},X.prototype.forEach=function(e,t){t=t||this;for(var r=this.head,n=0;null!==r;n++)e.call(t,r.value,n,this),r=r.next},X.prototype.forEachReverse=function(e,t){t=t||this;for(var r=this.tail,n=this.length-1;null!==r;n--)e.call(t,r.value,n,this),r=r.prev},X.prototype.get=function(e){for(var t=0,r=this.head;null!==r&&t<e;t++)r=r.next;if(t===e&&null!==r)return r.value},X.prototype.getReverse=function(e){for(var t=0,r=this.tail;null!==r&&t<e;t++)r=r.prev;if(t===e&&null!==r)return r.value},X.prototype.map=function(e,t){t=t||this;for(var r=new X,n=this.head;null!==n;)r.push(e.call(t,n.value,this)),n=n.next;return r},X.prototype.mapReverse=function(e,t){t=t||this;for(var r=new X,n=this.tail;null!==n;)r.push(e.call(t,n.value,this)),n=n.prev;return r},X.prototype.reduce=function(e,t){var r,n=this.head;if(arguments.length>1)r=t;else{if(!this.head)throw new TypeError("Reduce of empty list with no initial value");n=this.head.next,r=this.head.value}for(var i=0;null!==n;i++)r=e(r,n.value,i),n=n.next;return r},X.prototype.reduceReverse=function(e,t){var r,n=this.tail;if(arguments.length>1)r=t;else{if(!this.tail)throw new TypeError("Reduce of empty list with no initial value");n=this.tail.prev,r=this.tail.value}for(var i=this.length-1;null!==n;i--)r=e(r,n.value,i),n=n.prev;return r},X.prototype.toArray=function(){for(var e=new Array(this.length),t=0,r=this.head;null!==r;t++)e[t]=r.value,r=r.next;return e},X.prototype.toArrayReverse=function(){for(var e=new Array(this.length),t=0,r=this.tail;null!==r;t++)e[t]=r.value,r=r.prev;return e},X.prototype.slice=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var r=new X;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var n=0,i=this.head;null!==i&&n<e;n++)i=i.next;for(;null!==i&&n<t;n++,i=i.next)r.push(i.value);return r},X.prototype.sliceReverse=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var r=new X;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var n=this.length,i=this.tail;null!==i&&n>t;n--)i=i.prev;for(;null!==i&&n>e;n--,i=i.prev)r.push(i.value);return r},X.prototype.splice=function(e,t,...r){e>this.length&&(e=this.length-1),e<0&&(e=this.length+e);for(var n=0,i=this.head;null!==i&&n<e;n++)i=i.next;var s=[];for(n=0;i&&n<t;n++)s.push(i.value),i=this.removeNode(i);null===i&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev);for(n=0;n<r.length;n++)i=V(this,i,r[n]);return s},X.prototype.reverse=function(){for(var e=this.head,t=this.tail,r=e;null!==r;r=r.prev){var n=r.prev;r.prev=r.next,r.next=n}return this.head=t,this.tail=e,this};try{(_||(_=1,M=function(e){e.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value}}),M)(X)}catch(e){}const W=U,Y=Symbol("max"),J=Symbol("length"),q=Symbol("lengthCalculator"),K=Symbol("allowStale"),Z=Symbol("maxAge"),Q=Symbol("dispose"),ee=Symbol("noDisposeOnSet"),te=Symbol("lruList"),re=Symbol("cache"),ne=Symbol("updateAgeOnGet"),ie=()=>1;const se=(e,t,r)=>{const n=e[re].get(t);if(n){const t=n.value;if(oe(e,t)){if(le(e,n),!e[K])return}else r&&(e[ne]&&(n.value.now=Date.now()),e[te].unshiftNode(n));return t.value}},oe=(e,t)=>{if(!t||!t.maxAge&&!e[Z])return!1;const r=Date.now()-t.now;return t.maxAge?r>t.maxAge:e[Z]&&r>e[Z]},ae=e=>{if(e[J]>e[Y])for(let t=e[te].tail;e[J]>e[Y]&&null!==t;){const r=t.prev;le(e,t),t=r}},le=(e,t)=>{if(t){const r=t.value;e[Q]&&e[Q](r.key,r.value),e[J]-=r.length,e[re].delete(r.key),e[te].removeNode(t)}};class he{constructor(e,t,r,n,i){this.key=e,this.value=t,this.length=r,this.now=n,this.maxAge=i||0}}const ce=(e,t,r,n)=>{let i=r.value;oe(e,i)&&(le(e,r),e[K]||(i=void 0)),i&&t.call(n,i.value,i.key,e)};var pe=class{constructor(e){if("number"==typeof e&&(e={max:e}),e||(e={}),e.max&&("number"!=typeof e.max||e.max<0))throw new TypeError("max must be a non-negative number");this[Y]=e.max||1/0;const t=e.length||ie;if(this[q]="function"!=typeof t?ie:t,this[K]=e.stale||!1,e.maxAge&&"number"!=typeof e.maxAge)throw new TypeError("maxAge must be a number");this[Z]=e.maxAge||0,this[Q]=e.dispose,this[ee]=e.noDisposeOnSet||!1,this[ne]=e.updateAgeOnGet||!1,this.reset()}set max(e){if("number"!=typeof e||e<0)throw new TypeError("max must be a non-negative number");this[Y]=e||1/0,ae(this)}get max(){return this[Y]}set allowStale(e){this[K]=!!e}get allowStale(){return this[K]}set maxAge(e){if("number"!=typeof e)throw new TypeError("maxAge must be a non-negative number");this[Z]=e,ae(this)}get maxAge(){return this[Z]}set lengthCalculator(e){"function"!=typeof e&&(e=ie),e!==this[q]&&(this[q]=e,this[J]=0,this[te].forEach((e=>{e.length=this[q](e.value,e.key),this[J]+=e.length}))),ae(this)}get lengthCalculator(){return this[q]}get length(){return this[J]}get itemCount(){return this[te].length}rforEach(e,t){t=t||this;for(let r=this[te].tail;null!==r;){const n=r.prev;ce(this,e,r,t),r=n}}forEach(e,t){t=t||this;for(let r=this[te].head;null!==r;){const n=r.next;ce(this,e,r,t),r=n}}keys(){return this[te].toArray().map((e=>e.key))}values(){return this[te].toArray().map((e=>e.value))}reset(){this[Q]&&this[te]&&this[te].length&&this[te].forEach((e=>this[Q](e.key,e.value))),this[re]=new Map,this[te]=new W,this[J]=0}dump(){return this[te].map((e=>!oe(this,e)&&{k:e.key,v:e.value,e:e.now+(e.maxAge||0)})).toArray().filter((e=>e))}dumpLru(){return this[te]}set(e,t,r){if((r=r||this[Z])&&"number"!=typeof r)throw new TypeError("maxAge must be a number");const n=r?Date.now():0,i=this[q](t,e);if(this[re].has(e)){if(i>this[Y])return le(this,this[re].get(e)),!1;const s=this[re].get(e).value;return this[Q]&&(this[ee]||this[Q](e,s.value)),s.now=n,s.maxAge=r,s.value=t,this[J]+=i-s.length,s.length=i,this.get(e),ae(this),!0}const s=new he(e,t,i,n,r);return s.length>this[Y]?(this[Q]&&this[Q](e,t),!1):(this[J]+=s.length,this[te].unshift(s),this[re].set(e,this[te].head),ae(this),!0)}has(e){if(!this[re].has(e))return!1;const t=this[re].get(e).value;return!oe(this,t)}get(e){return se(this,e,!0)}peek(e){return se(this,e,!1)}pop(){const e=this[te].tail;return e?(le(this,e),e.value):null}del(e){le(this,this[re].get(e))}load(e){this.reset();const t=Date.now();for(let r=e.length-1;r>=0;r--){const n=e[r],i=n.e||0;if(0===i)this.set(n.k,n.v);else{const e=i-t;e>0&&this.set(n.k,n.v,e)}}}prune(){this[re].forEach(((e,t)=>se(this,t,!1)))}};const ue=Object.freeze({loose:!0}),fe=Object.freeze({});var me=e=>e?"object"!=typeof e?ue:e:fe,de={exports:{}};var Ee={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2};var ve="object"==typeof k&&k.env&&k.env.NODE_DEBUG&&/\bsemver\b/i.test(k.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};!function(e,t){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:n,MAX_LENGTH:i}=Ee,s=ve,o=(t=e.exports={}).re=[],a=t.safeRe=[],l=t.src=[],h=t.t={};let c=0;const p="[a-zA-Z0-9-]",u=[["\\s",1],["\\d",i],[p,n]],f=(e,t,r)=>{const n=(e=>{for(const[t,r]of u)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e})(t),i=c++;s(e,i,t),h[e]=i,l[i]=t,o[i]=new RegExp(t,r?"g":void 0),a[i]=new RegExp(n,r?"g":void 0)};f("NUMERICIDENTIFIER","0|[1-9]\\d*"),f("NUMERICIDENTIFIERLOOSE","\\d+"),f("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${p}*`),f("MAINVERSION",`(${l[h.NUMERICIDENTIFIER]})\\.(${l[h.NUMERICIDENTIFIER]})\\.(${l[h.NUMERICIDENTIFIER]})`),f("MAINVERSIONLOOSE",`(${l[h.NUMERICIDENTIFIERLOOSE]})\\.(${l[h.NUMERICIDENTIFIERLOOSE]})\\.(${l[h.NUMERICIDENTIFIERLOOSE]})`),f("PRERELEASEIDENTIFIER",`(?:${l[h.NUMERICIDENTIFIER]}|${l[h.NONNUMERICIDENTIFIER]})`),f("PRERELEASEIDENTIFIERLOOSE",`(?:${l[h.NUMERICIDENTIFIERLOOSE]}|${l[h.NONNUMERICIDENTIFIER]})`),f("PRERELEASE",`(?:-(${l[h.PRERELEASEIDENTIFIER]}(?:\\.${l[h.PRERELEASEIDENTIFIER]})*))`),f("PRERELEASELOOSE",`(?:-?(${l[h.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[h.PRERELEASEIDENTIFIERLOOSE]})*))`),f("BUILDIDENTIFIER",`${p}+`),f("BUILD",`(?:\\+(${l[h.BUILDIDENTIFIER]}(?:\\.${l[h.BUILDIDENTIFIER]})*))`),f("FULLPLAIN",`v?${l[h.MAINVERSION]}${l[h.PRERELEASE]}?${l[h.BUILD]}?`),f("FULL",`^${l[h.FULLPLAIN]}$`),f("LOOSEPLAIN",`[v=\\s]*${l[h.MAINVERSIONLOOSE]}${l[h.PRERELEASELOOSE]}?${l[h.BUILD]}?`),f("LOOSE",`^${l[h.LOOSEPLAIN]}$`),f("GTLT","((?:<|>)?=?)"),f("XRANGEIDENTIFIERLOOSE",`${l[h.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),f("XRANGEIDENTIFIER",`${l[h.NUMERICIDENTIFIER]}|x|X|\\*`),f("XRANGEPLAIN",`[v=\\s]*(${l[h.XRANGEIDENTIFIER]})(?:\\.(${l[h.XRANGEIDENTIFIER]})(?:\\.(${l[h.XRANGEIDENTIFIER]})(?:${l[h.PRERELEASE]})?${l[h.BUILD]}?)?)?`),f("XRANGEPLAINLOOSE",`[v=\\s]*(${l[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[h.XRANGEIDENTIFIERLOOSE]})(?:${l[h.PRERELEASELOOSE]})?${l[h.BUILD]}?)?)?`),f("XRANGE",`^${l[h.GTLT]}\\s*${l[h.XRANGEPLAIN]}$`),f("XRANGELOOSE",`^${l[h.GTLT]}\\s*${l[h.XRANGEPLAINLOOSE]}$`),f("COERCE",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`),f("COERCERTL",l[h.COERCE],!0),f("LONETILDE","(?:~>?)"),f("TILDETRIM",`(\\s*)${l[h.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",f("TILDE",`^${l[h.LONETILDE]}${l[h.XRANGEPLAIN]}$`),f("TILDELOOSE",`^${l[h.LONETILDE]}${l[h.XRANGEPLAINLOOSE]}$`),f("LONECARET","(?:\\^)"),f("CARETTRIM",`(\\s*)${l[h.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",f("CARET",`^${l[h.LONECARET]}${l[h.XRANGEPLAIN]}$`),f("CARETLOOSE",`^${l[h.LONECARET]}${l[h.XRANGEPLAINLOOSE]}$`),f("COMPARATORLOOSE",`^${l[h.GTLT]}\\s*(${l[h.LOOSEPLAIN]})$|^$`),f("COMPARATOR",`^${l[h.GTLT]}\\s*(${l[h.FULLPLAIN]})$|^$`),f("COMPARATORTRIM",`(\\s*)${l[h.GTLT]}\\s*(${l[h.LOOSEPLAIN]}|${l[h.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",f("HYPHENRANGE",`^\\s*(${l[h.XRANGEPLAIN]})\\s+-\\s+(${l[h.XRANGEPLAIN]})\\s*$`),f("HYPHENRANGELOOSE",`^\\s*(${l[h.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[h.XRANGEPLAINLOOSE]})\\s*$`),f("STAR","(<|>)?=?\\s*\\*"),f("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),f("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")}(de,de.exports);var ge=de.exports;const $e=/^[0-9]+$/,Ie=(e,t)=>{const r=$e.test(e),n=$e.test(t);return r&&n&&(e=+e,t=+t),e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1};var we={compareIdentifiers:Ie,rcompareIdentifiers:(e,t)=>Ie(t,e)};const Re=ve,{MAX_LENGTH:ye,MAX_SAFE_INTEGER:Le}=Ee,{safeRe:Ne,t:Te}=ge,Ae=me,{compareIdentifiers:Oe}=we;var be=class e{constructor(t,r){if(r=Ae(r),t instanceof e){if(t.loose===!!r.loose&&t.includePrerelease===!!r.includePrerelease)return t;t=t.version}else if("string"!=typeof t)throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>ye)throw new TypeError(`version is longer than ${ye} characters`);Re("SemVer",t,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const n=t.trim().match(r.loose?Ne[Te.LOOSE]:Ne[Te.FULL]);if(!n)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>Le||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Le||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Le||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<Le)return t}return e})):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(Re("SemVer.compare",this.version,this.options,t),!(t instanceof e)){if("string"==typeof t&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),Oe(this.major,t.major)||Oe(this.minor,t.minor)||Oe(this.patch,t.patch)}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let r=0;do{const e=this.prerelease[r],n=t.prerelease[r];if(Re("prerelease compare",r,e,n),void 0===e&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===e)return-1;if(e!==n)return Oe(e,n)}while(++r)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let r=0;do{const e=this.build[r],n=t.build[r];if(Re("prerelease compare",r,e,n),void 0===e&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===e)return-1;if(e!==n)return Oe(e,n)}while(++r)}inc(e,t,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,r),this.inc("pre",t,r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t,r),this.inc("pre",t,r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":{const e=Number(r)?1:0;if(!t&&!1===r)throw new Error("invalid increment argument: identifier is empty");if(0===this.prerelease.length)this.prerelease=[e];else{let n=this.prerelease.length;for(;--n>=0;)"number"==typeof this.prerelease[n]&&(this.prerelease[n]++,n=-2);if(-1===n){if(t===this.prerelease.join(".")&&!1===r)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(t){let n=[t,e];!1===r&&(n=[t]),0===Oe(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=n):this.prerelease=n}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};const xe=be;var Se=(e,t,r)=>new xe(e,r).compare(new xe(t,r));const Ce=Se;const De=Se;const Pe=Se;const Fe=Se;const Ge=Se;const Me=Se;const _e=(e,t,r)=>0===Ce(e,t,r),ke=(e,t,r)=>0!==De(e,t,r),je=(e,t,r)=>Pe(e,t,r)>0,Ue=(e,t,r)=>Fe(e,t,r)>=0,Xe=(e,t,r)=>Ge(e,t,r)<0,Ve=(e,t,r)=>Me(e,t,r)<=0;var He,ze,Be,We,Ye=(e,t,r,n)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return _e(e,r,n);case"!=":return ke(e,r,n);case">":return je(e,r,n);case">=":return Ue(e,r,n);case"<":return Xe(e,r,n);case"<=":return Ve(e,r,n);default:throw new TypeError(`Invalid operator: ${t}`)}};function Je(){if(We)return Be;We=1;class e{constructor(t,i){if(i=r(i),t instanceof e)return t.loose===!!i.loose&&t.includePrerelease===!!i.includePrerelease?t:new e(t.raw,i);if(t instanceof n)return this.raw=t.value,this.set=[[t]],this.format(),this;if(this.options=i,this.loose=!!i.loose,this.includePrerelease=!!i.includePrerelease,this.raw=t.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map((e=>this.parseRange(e.trim()))).filter((e=>e.length)),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const e=this.set[0];if(this.set=this.set.filter((e=>!f(e[0]))),0===this.set.length)this.set=[e];else if(this.set.length>1)for(const e of this.set)if(1===e.length&&m(e[0])){this.set=[e];break}}this.format()}format(){return this.range=this.set.map((e=>e.join(" ").trim())).join("||").trim(),this.range}toString(){return this.range}parseRange(e){const r=((this.options.includePrerelease&&p)|(this.options.loose&&u))+":"+e,s=t.get(r);if(s)return s;const m=this.options.loose,d=m?o[a.HYPHENRANGELOOSE]:o[a.HYPHENRANGE];e=e.replace(d,T(this.options.includePrerelease)),i("hyphen replace",e),e=e.replace(o[a.COMPARATORTRIM],l),i("comparator trim",e),e=e.replace(o[a.TILDETRIM],h),i("tilde trim",e),e=e.replace(o[a.CARETTRIM],c),i("caret trim",e);let v=e.split(" ").map((e=>E(e,this.options))).join(" ").split(/\s+/).map((e=>N(e,this.options)));m&&(v=v.filter((e=>(i("loose invalid filter",e,this.options),!!e.match(o[a.COMPARATORLOOSE]))))),i("range list",v);const g=new Map,$=v.map((e=>new n(e,this.options)));for(const e of $){if(f(e))return[e];g.set(e.value,e)}g.size>1&&g.has("")&&g.delete("");const I=[...g.values()];return t.set(r,I),I}intersects(t,r){if(!(t instanceof e))throw new TypeError("a Range is required");return this.set.some((e=>d(e,r)&&t.set.some((t=>d(t,r)&&e.every((e=>t.every((t=>e.intersects(t,r)))))))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new s(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(A(this.set[t],e,this.options))return!0;return!1}}Be=e;const t=new pe({max:1e3}),r=me,n=function(){if(ze)return He;ze=1;const e=Symbol("SemVer ANY");class t{static get ANY(){return e}constructor(n,i){if(i=r(i),n instanceof t){if(n.loose===!!i.loose)return n;n=n.value}n=n.trim().split(/\s+/).join(" "),o("comparator",n,i),this.options=i,this.loose=!!i.loose,this.parse(n),this.semver===e?this.value="":this.value=this.operator+this.semver.version,o("comp",this)}parse(t){const r=this.options.loose?n[i.COMPARATORLOOSE]:n[i.COMPARATOR],s=t.match(r);if(!s)throw new TypeError(`Invalid comparator: ${t}`);this.operator=void 0!==s[1]?s[1]:"","="===this.operator&&(this.operator=""),s[2]?this.semver=new a(s[2],this.options.loose):this.semver=e}toString(){return this.value}test(t){if(o("Comparator.test",t,this.options.loose),this.semver===e||t===e)return!0;if("string"==typeof t)try{t=new a(t,this.options)}catch(e){return!1}return s(t,this.operator,this.semver,this.options)}intersects(e,n){if(!(e instanceof t))throw new TypeError("a Comparator is required");return""===this.operator?""===this.value||new l(e.value,n).test(this.value):""===e.operator?""===e.value||new l(this.value,n).test(e.semver):!((n=r(n)).includePrerelease&&("<0.0.0-0"===this.value||"<0.0.0-0"===e.value)||!n.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0"))||(!this.operator.startsWith(">")||!e.operator.startsWith(">"))&&(!this.operator.startsWith("<")||!e.operator.startsWith("<"))&&(this.semver.version!==e.semver.version||!this.operator.includes("=")||!e.operator.includes("="))&&!(s(this.semver,"<",e.semver,n)&&this.operator.startsWith(">")&&e.operator.startsWith("<"))&&!(s(this.semver,">",e.semver,n)&&this.operator.startsWith("<")&&e.operator.startsWith(">")))}}He=t;const r=me,{safeRe:n,t:i}=ge,s=Ye,o=ve,a=be,l=Je();return He}(),i=ve,s=be,{safeRe:o,t:a,comparatorTrimReplace:l,tildeTrimReplace:h,caretTrimReplace:c}=ge,{FLAG_INCLUDE_PRERELEASE:p,FLAG_LOOSE:u}=Ee,f=e=>"<0.0.0-0"===e.value,m=e=>""===e.value,d=(e,t)=>{let r=!0;const n=e.slice();let i=n.pop();for(;r&&n.length;)r=n.every((e=>i.intersects(e,t))),i=n.pop();return r},E=(e,t)=>(i("comp",e,t),e=I(e,t),i("caret",e),e=g(e,t),i("tildes",e),e=R(e,t),i("xrange",e),e=L(e,t),i("stars",e),e),v=e=>!e||"x"===e.toLowerCase()||"*"===e,g=(e,t)=>e.trim().split(/\s+/).map((e=>$(e,t))).join(" "),$=(e,t)=>{const r=t.loose?o[a.TILDELOOSE]:o[a.TILDE];return e.replace(r,((t,r,n,s,o)=>{let a;return i("tilde",e,t,r,n,s,o),v(r)?a="":v(n)?a=`>=${r}.0.0 <${+r+1}.0.0-0`:v(s)?a=`>=${r}.${n}.0 <${r}.${+n+1}.0-0`:o?(i("replaceTilde pr",o),a=`>=${r}.${n}.${s}-${o} <${r}.${+n+1}.0-0`):a=`>=${r}.${n}.${s} <${r}.${+n+1}.0-0`,i("tilde return",a),a}))},I=(e,t)=>e.trim().split(/\s+/).map((e=>w(e,t))).join(" "),w=(e,t)=>{i("caret",e,t);const r=t.loose?o[a.CARETLOOSE]:o[a.CARET],n=t.includePrerelease?"-0":"";return e.replace(r,((t,r,s,o,a)=>{let l;return i("caret",e,t,r,s,o,a),v(r)?l="":v(s)?l=`>=${r}.0.0${n} <${+r+1}.0.0-0`:v(o)?l="0"===r?`>=${r}.${s}.0${n} <${r}.${+s+1}.0-0`:`>=${r}.${s}.0${n} <${+r+1}.0.0-0`:a?(i("replaceCaret pr",a),l="0"===r?"0"===s?`>=${r}.${s}.${o}-${a} <${r}.${s}.${+o+1}-0`:`>=${r}.${s}.${o}-${a} <${r}.${+s+1}.0-0`:`>=${r}.${s}.${o}-${a} <${+r+1}.0.0-0`):(i("no pr"),l="0"===r?"0"===s?`>=${r}.${s}.${o}${n} <${r}.${s}.${+o+1}-0`:`>=${r}.${s}.${o}${n} <${r}.${+s+1}.0-0`:`>=${r}.${s}.${o} <${+r+1}.0.0-0`),i("caret return",l),l}))},R=(e,t)=>(i("replaceXRanges",e,t),e.split(/\s+/).map((e=>y(e,t))).join(" ")),y=(e,t)=>{e=e.trim();const r=t.loose?o[a.XRANGELOOSE]:o[a.XRANGE];return e.replace(r,((r,n,s,o,a,l)=>{i("xRange",e,r,n,s,o,a,l);const h=v(s),c=h||v(o),p=c||v(a),u=p;return"="===n&&u&&(n=""),l=t.includePrerelease?"-0":"",h?r=">"===n||"<"===n?"<0.0.0-0":"*":n&&u?(c&&(o=0),a=0,">"===n?(n=">=",c?(s=+s+1,o=0,a=0):(o=+o+1,a=0)):"<="===n&&(n="<",c?s=+s+1:o=+o+1),"<"===n&&(l="-0"),r=`${n+s}.${o}.${a}${l}`):c?r=`>=${s}.0.0${l} <${+s+1}.0.0-0`:p&&(r=`>=${s}.${o}.0${l} <${s}.${+o+1}.0-0`),i("xRange return",r),r}))},L=(e,t)=>(i("replaceStars",e,t),e.trim().replace(o[a.STAR],"")),N=(e,t)=>(i("replaceGTE0",e,t),e.trim().replace(o[t.includePrerelease?a.GTE0PRE:a.GTE0],"")),T=e=>(t,r,n,i,s,o,a,l,h,c,p,u,f)=>`${r=v(n)?"":v(i)?`>=${n}.0.0${e?"-0":""}`:v(s)?`>=${n}.${i}.0${e?"-0":""}`:o?`>=${r}`:`>=${r}${e?"-0":""}`} ${l=v(h)?"":v(c)?`<${+h+1}.0.0-0`:v(p)?`<${h}.${+c+1}.0-0`:u?`<=${h}.${c}.${p}-${u}`:e?`<${h}.${c}.${+p+1}-0`:`<=${l}`}`.trim(),A=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(i(e[r].semver),e[r].semver!==n.ANY&&e[r].semver.prerelease.length>0){const n=e[r].semver;if(n.major===t.major&&n.minor===t.minor&&n.patch===t.patch)return!0}return!1}return!0};return Be}const qe=Je();var Ke=(e,t,r)=>{try{t=new qe(t,r)}catch(e){return!1}return t.test(e)},Ze=j(Ke);var Qe='.vega-embed {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n}\n.vega-embed.has-actions {\n  padding-right: 38px;\n}\n.vega-embed details:not([open]) > :not(summary) {\n  display: none !important;\n}\n.vega-embed summary {\n  list-style: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 6px;\n  z-index: 1000;\n  background: white;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n  color: #1b1e23;\n  border: 1px solid #aaa;\n  border-radius: 999px;\n  opacity: 0.2;\n  transition: opacity 0.4s ease-in;\n  cursor: pointer;\n  line-height: 0px;\n}\n.vega-embed summary::-webkit-details-marker {\n  display: none;\n}\n.vega-embed summary:active {\n  box-shadow: #aaa 0px 0px 0px 1px inset;\n}\n.vega-embed summary svg {\n  width: 14px;\n  height: 14px;\n}\n.vega-embed details[open] summary {\n  opacity: 0.7;\n}\n.vega-embed:hover summary, .vega-embed:focus-within summary {\n  opacity: 1 !important;\n  transition: opacity 0.2s ease;\n}\n.vega-embed .vega-actions {\n  position: absolute;\n  z-index: 1001;\n  top: 35px;\n  right: -9px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 8px;\n  padding-top: 8px;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n  border: 1px solid #d9d9d9;\n  background: white;\n  animation-duration: 0.15s;\n  animation-name: scale-in;\n  animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5);\n  text-align: left;\n}\n.vega-embed .vega-actions a {\n  padding: 8px 16px;\n  font-family: sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  white-space: nowrap;\n  color: #434a56;\n  text-decoration: none;\n}\n.vega-embed .vega-actions a:hover, .vega-embed .vega-actions a:focus {\n  background-color: #f7f7f9;\n  color: black;\n}\n.vega-embed .vega-actions::before, .vega-embed .vega-actions::after {\n  content: "";\n  display: inline-block;\n  position: absolute;\n}\n.vega-embed .vega-actions::before {\n  left: auto;\n  right: 14px;\n  top: -16px;\n  border: 8px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #d9d9d9;\n}\n.vega-embed .vega-actions::after {\n  left: auto;\n  right: 15px;\n  top: -14px;\n  border: 7px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #fff;\n}\n.vega-embed .chart-wrapper.fit-x {\n  width: 100%;\n}\n.vega-embed .chart-wrapper.fit-y {\n  height: 100%;\n}\n\n.vega-embed-wrapper {\n  max-width: 100%;\n  overflow: auto;\n  padding-right: 14px;\n}\n\n@keyframes scale-in {\n  from {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n';function et(e,...t){for(const r of t)tt(e,r);return e}function tt(e,t){for(const r of Object.keys(t))a(e,r,t[r],!0)}const rt="6.24.0",nt=r;let it=h;const st="undefined"!=typeof window?window:void 0;void 0===it&&st?.vl?.compile&&(it=st.vl);const ot={export:{svg:!0,png:!0},source:!0,compiled:!0,editor:!0},at={CLICK_TO_VIEW_ACTIONS:"Click to view actions",COMPILED_ACTION:"View Compiled Vega",EDITOR_ACTION:"Open in Vega Editor",PNG_ACTION:"Save as PNG",SOURCE_ACTION:"View Source",SVG_ACTION:"Save as SVG"},lt={vega:"Vega","vega-lite":"Vega-Lite"},ht={vega:nt.version,"vega-lite":it?it.version:"not available"},ct={vega:e=>e,"vega-lite":(e,t)=>it.compile(e,{config:t}).spec},pt='\n<svg viewBox="0 0 16 16" fill="currentColor" stroke="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">\n  <circle r="2" cy="8" cx="2"></circle>\n  <circle r="2" cy="8" cx="8"></circle>\n  <circle r="2" cy="8" cx="14"></circle>\n</svg>',ut="chart-wrapper";function ft(e,t,r,n){const i=`<html><head>${t}</head><body><pre><code class="json">`,s=`</code></pre>${r}</body></html>`,o=window.open("");o.document.write(i+e+s),o.document.title=`${lt[n]} JSON Source`}function mt(e,t){if(e.$schema){const r=c(e.$schema);t&&t!==r.library&&console.warn(`The given visualization spec is written in ${lt[r.library]}, but mode argument sets ${lt[t]??t}.`);const n=r.library;return Ze(ht[n],`^${r.version.slice(1)}`)||console.warn(`The input spec uses ${lt[n]} ${r.version}, but the current version of ${lt[n]} is v${ht[n]}.`),n}return"mark"in e||"encoding"in e||"layer"in e||"hconcat"in e||"vconcat"in e||"facet"in e||"repeat"in e?"vega-lite":"marks"in e||"signals"in e||"scales"in e||"axes"in e?"vega":t??"vega"}function dt(e){return!(!e||!("load"in e))}function Et(e){return dt(e)?e:nt.loader(e)}async function vt(r,a,h={}){let f,m;n(a)?(m=Et(h.loader),f=JSON.parse(await m.load(a))):f=a;const d=function(e){const t=e.usermeta?.embedOptions??{};return n(t.defaultStyle)&&(t.defaultStyle=!1),t}(f),E=d.loader;m&&!E||(m=Et(h.loader??E));const v=await gt(d,m),g=await gt(h,m),$={...et(g,v),config:i(g.config??{},v.config??{})};return await async function(r,n,a={},h){const f=a.theme?i(p[a.theme],a.config??{}):a.config,m=s(a.actions)?a.actions:et({},ot,a.actions??{}),d={...at,...a.i18n},E=a.renderer??"canvas",v=a.logLevel??nt.Warn,g=a.downloadFileName??"visualization",$="string"==typeof r?document.querySelector(r):r;if(!$)throw new Error(`${r} does not exist`);if(!1!==a.defaultStyle){const e="vega-embed-style",{root:t,rootContainer:r}=function(e){const t=e.getRootNode?e.getRootNode():document;return t instanceof ShadowRoot?{root:t,rootContainer:t}:{root:document,rootContainer:document.head??document.body}}($);if(!t.getElementById(e)){const t=document.createElement("style");t.id=e,t.innerHTML=void 0===a.defaultStyle||!0===a.defaultStyle?Qe.toString():a.defaultStyle,r.appendChild(t)}}const I=mt(n,a.mode);let w=ct[I](n,f);if("vega-lite"===I&&w.$schema){const e=c(w.$schema);Ze(ht.vega,`^${e.version.slice(1)}`)||console.warn(`The compiled spec uses Vega ${e.version}, but current version is v${ht.vega}.`)}$.classList.add("vega-embed"),m&&$.classList.add("has-actions");$.innerHTML="";let R=$;if(m){const e=document.createElement("div");e.classList.add(ut),$.appendChild(e),R=e}const y=a.patch;y&&(w=y instanceof Function?y(w):e(w,y,!0,!1).newDocument);a.formatLocale&&nt.formatLocale(a.formatLocale);a.timeFormatLocale&&nt.timeFormatLocale(a.timeFormatLocale);if(a.expressionFunctions)for(const e in a.expressionFunctions){const t=a.expressionFunctions[e];"fn"in t?nt.expressionFunction(e,t.fn,t.visitor):t instanceof Function&&nt.expressionFunction(e,t)}const{ast:L}=a,N=nt.parse(w,"vega-lite"===I?{}:f,{ast:L}),T=new(a.viewClass||nt.View)(N,{loader:h,logLevel:v,renderer:E,...L?{expr:nt.expressionInterpreter??a.expr??l}:{}});if(T.addSignalListener("autosize",((e,t)=>{const{type:r}=t;"fit-x"==r?(R.classList.add("fit-x"),R.classList.remove("fit-y")):"fit-y"==r?(R.classList.remove("fit-x"),R.classList.add("fit-y")):"fit"==r?R.classList.add("fit-x","fit-y"):R.classList.remove("fit-x","fit-y")})),!1!==a.tooltip){const{loader:e,tooltip:t}=a,r=e&&!dt(e)?e?.baseURL:void 0,n="function"==typeof t?t:new u({baseURL:r,...!0===t?{}:t}).call;T.tooltip(n)}let A,{hover:O}=a;void 0===O&&(O="vega"===I);if(O){const{hoverSet:e,updateSet:t}="boolean"==typeof O?{}:O;T.hover(e,t)}a&&(null!=a.width&&T.width(a.width),null!=a.height&&T.height(a.height),null!=a.padding&&T.padding(a.padding));if(await T.initialize(R,a.bind).runAsync(),!1!==m){let e=$;if(!1!==a.defaultStyle||a.forceActionsMenu){const t=document.createElement("details");t.title=d.CLICK_TO_VIEW_ACTIONS,$.append(t),e=t;const r=document.createElement("summary");r.innerHTML=pt,t.append(r),A=e=>{t.contains(e.target)||t.removeAttribute("open")},document.addEventListener("click",A)}const r=document.createElement("div");if(e.append(r),r.classList.add("vega-actions"),!0===m||!1!==m.export)for(const e of["svg","png"])if(!0===m||!0===m.export||m.export[e]){const t=d[`${e.toUpperCase()}_ACTION`],n=document.createElement("a"),i=o(a.scaleFactor)?a.scaleFactor[e]:a.scaleFactor;n.text=t,n.href="#",n.target="_blank",n.download=`${g}.${e}`,n.addEventListener("mousedown",(async function(t){t.preventDefault();const r=await T.toImageURL(e,i);this.href=r})),r.append(n)}if(!0===m||!1!==m.source){const e=document.createElement("a");e.text=d.SOURCE_ACTION,e.href="#",e.addEventListener("click",(function(e){ft(t(n),a.sourceHeader??"",a.sourceFooter??"",I),e.preventDefault()})),r.append(e)}if("vega-lite"===I&&(!0===m||!1!==m.compiled)){const e=document.createElement("a");e.text=d.COMPILED_ACTION,e.href="#",e.addEventListener("click",(function(e){ft(t(w),a.sourceHeader??"",a.sourceFooter??"","vega"),e.preventDefault()})),r.append(e)}if(!0===m||!1!==m.editor){const e=a.editorUrl??"https://vega.github.io/editor/",i=document.createElement("a");i.text=d.EDITOR_ACTION,i.href="#",i.addEventListener("click",(function(r){!function(e,t,r){const n=e.open(t),{origin:i}=new URL(t);let s=40;e.addEventListener("message",(function t(r){r.source===n&&(s=0,e.removeEventListener("message",t,!1))}),!1),setTimeout((function e(){s<=0||(n.postMessage(r,i),setTimeout(e,250),s-=1)}),250)}(window,e,{config:f,mode:I,renderer:E,spec:t(n)}),r.preventDefault()})),r.append(i)}}function b(){A&&document.removeEventListener("click",A),T.finalize()}return{view:T,spec:n,vgSpec:w,finalize:b,embedOptions:a}}(r,f,$,m)}async function gt(e,t){const r=n(e.config)?JSON.parse(await t.load(e.config)):e.config??{},i=n(e.patch)?JSON.parse(await t.load(e.patch)):e.patch;return{...e,...i?{patch:i}:{},...r?{config:r}:{}}}export{ot as DEFAULT_ACTIONS,vt as default,mt as guessMode,nt as vega,it as vegaLite,rt as version};