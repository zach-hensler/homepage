(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var Q,p,Te,E,pe,Ee,te,Le,D={},ae=[],We=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ce=Array.isArray;function T(e,t){for(var n in t)e[n]=t[n];return e}function Ue(e){var t=e.parentNode;t&&t.removeChild(e)}function Ge(e,t,n){var r,o,a,l={};for(a in t)a=="key"?r=t[a]:a=="ref"?o=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?Q.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)l[a]===void 0&&(l[a]=e.defaultProps[a]);return G(e,l,r,o,null)}function G(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Te,__i:-1,__u:0};return o==null&&p.vnode!=null&&p.vnode(a),a}function k(e){return e.children}function $(e,t){this.props=e,this.context=t}function B(e,t){if(t==null)return e.__?B(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?B(e):null}function $e(e,t,n){var r,o=e.__v,a=o.__e,l=e.__P;if(l)return(r=T({},o)).__v=o.__v+1,p.vnode&&p.vnode(r),le(l,r,o,e.__n,l.ownerSVGElement!==void 0,32&o.__u?[a]:null,t,a??B(o),!!(32&o.__u),n),r.__v=o.__v,r.__.__k[r.__i]=r,r.__d=void 0,r.__e!=a&&Be(r),r}function Be(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Be(e)}}function ne(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!Z.__r++||pe!==p.debounceRendering)&&((pe=p.debounceRendering)||Ee)(Z)}function Z(){var e,t,n,r=[],o=[];for(E.sort(te);e=E.shift();)e.__d&&(n=E.length,t=$e(e,r,o)||t,n===0||E.length>n?(oe(r,t,o),o.length=r.length=0,t=void 0,E.sort(te)):t&&p.__c&&p.__c(t,ae));t&&oe(r,t,o),Z.__r=0}function He(e,t,n,r,o,a,l,_,d,s,h){var c,f,u,y,C,b=r&&r.__k||ae,g=t.length;for(n.__d=d,Fe(n,t,b),d=n.__d,c=0;c<g;c++)(u=n.__k[c])!=null&&typeof u!="boolean"&&typeof u!="function"&&(f=u.__i===-1?D:b[u.__i]||D,u.__i=c,le(e,u,f,o,a,l,_,d,s,h),y=u.__e,u.ref&&f.ref!=u.ref&&(f.ref&&_e(f.ref,null,u),h.push(u.ref,u.__c||y,u)),C==null&&y!=null&&(C=y),65536&u.__u||f.__k===u.__k?d=Pe(u,d,e):typeof u.type=="function"&&u.__d!==void 0?d=u.__d:y&&(d=y.nextSibling),u.__d=void 0,u.__u&=-196609);n.__d=d,n.__e=C}function Fe(e,t,n){var r,o,a,l,_,d=t.length,s=n.length,h=s,c=0;for(e.__k=[],r=0;r<d;r++)l=r+c,(o=e.__k[r]=(o=t[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?G(null,o,null,null,null):ce(o)?G(k,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?G(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,_=ze(o,n,l,h),o.__i=_,a=null,_!==-1&&(h--,(a=n[_])&&(a.__u|=131072)),a==null||a.__v===null?(_==-1&&c--,typeof o.type!="function"&&(o.__u|=65536)):_!==l&&(_===l+1?c++:_>l?h>d-l?c+=_-l:c--:_<l?_==l-1&&(c=_-l):c=0,_!==r+c&&(o.__u|=65536))):(a=n[l])&&a.key==null&&a.__e&&!(131072&a.__u)&&(a.__e==e.__d&&(e.__d=B(a)),re(a,a,!1),n[l]=null,h--);if(h)for(r=0;r<s;r++)(a=n[r])!=null&&!(131072&a.__u)&&(a.__e==e.__d&&(e.__d=B(a)),re(a,a))}function Pe(e,t,n){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=Pe(r[o],t,n));return t}e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function ze(e,t,n,r){var o=e.key,a=e.type,l=n-1,_=n+1,d=t[n];if(d===null||d&&o==d.key&&a===d.type&&!(131072&d.__u))return n;if(r>(d!=null&&!(131072&d.__u)?1:0))for(;l>=0||_<t.length;){if(l>=0){if((d=t[l])&&!(131072&d.__u)&&o==d.key&&a===d.type)return l;l--}if(_<t.length){if((d=t[_])&&!(131072&d.__u)&&o==d.key&&a===d.type)return _;_++}}return-1}function fe(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||We.test(t)?n:n+"px"}function O(e,t,n,r,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||fe(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||fe(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,a?me:ge,a)):e.removeEventListener(t,a?me:ge,a);else{if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function ge(e){if(this.l){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(p.event?p.event(e):e)}}function me(e){if(this.l)return this.l[e.type+!0](p.event?p.event(e):e)}function le(e,t,n,r,o,a,l,_,d,s){var h,c,f,u,y,C,b,g,A,I,N,P,he,M,K,S=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(d=!!(32&n.__u),a=[_=t.__e=n.__e]),(h=p.__b)&&h(t);e:if(typeof S=="function")try{if(g=t.props,A=(h=S.contextType)&&r[h.__c],I=h?A?A.props.value:h.__:r,n.__c?b=(c=t.__c=n.__c).__=c.__E:("prototype"in S&&S.prototype.render?t.__c=c=new S(g,I):(t.__c=c=new $(g,I),c.constructor=S,c.render=je),A&&A.sub(c),c.props=g,c.state||(c.state={}),c.context=I,c.__n=r,f=c.__d=!0,c.__h=[],c._sb=[]),c.__s==null&&(c.__s=c.state),S.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=T({},c.__s)),T(c.__s,S.getDerivedStateFromProps(g,c.__s))),u=c.props,y=c.state,c.__v=t,f)S.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(S.getDerivedStateFromProps==null&&g!==u&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(g,I),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(g,c.__s,I)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(c.props=g,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(R){R&&(R.__=t)}),N=0;N<c._sb.length;N++)c.__h.push(c._sb[N]);c._sb=[],c.__h.length&&l.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(g,c.__s,I),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(u,y,C)})}if(c.context=I,c.props=g,c.__P=e,c.__e=!1,P=p.__r,he=0,"prototype"in S&&S.prototype.render){for(c.state=c.__s,c.__d=!1,P&&P(t),h=c.render(c.props,c.state,c.context),M=0;M<c._sb.length;M++)c.__h.push(c._sb[M]);c._sb=[]}else do c.__d=!1,P&&P(t),h=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++he<25);c.state=c.__s,c.getChildContext!=null&&(r=T(T({},r),c.getChildContext())),f||c.getSnapshotBeforeUpdate==null||(C=c.getSnapshotBeforeUpdate(u,y)),He(e,ce(K=h!=null&&h.type===k&&h.key==null?h.props.children:h)?K:[K],t,n,r,o,a,l,_,d,s),c.base=t.__e,t.__u&=-161,c.__h.length&&l.push(c),b&&(c.__E=c.__=null)}catch(R){t.__v=null,d||a!=null?(t.__e=_,t.__u|=d?160:32,a[a.indexOf(_)]=null):(t.__e=n.__e,t.__k=n.__k),p.__e(R,t,n)}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Ze(n.__e,t,n,r,o,a,l,d,s);(h=p.diffed)&&h(t)}function oe(e,t,n){for(var r=0;r<n.length;r++)_e(n[r],n[++r],n[++r]);p.__c&&p.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(a){a.call(o)})}catch(a){p.__e(a,o.__v)}})}function Ze(e,t,n,r,o,a,l,_,d){var s,h,c,f,u,y,C,b=n.props,g=t.props,A=t.type;if(A==="svg"&&(o=!0),a!=null){for(s=0;s<a.length;s++)if((u=a[s])&&"setAttribute"in u==!!A&&(A?u.localName===A:u.nodeType===3)){e=u,a[s]=null;break}}if(e==null){if(A===null)return document.createTextNode(g);e=o?document.createElementNS("http://www.w3.org/2000/svg",A):document.createElement(A,g.is&&g),a=null,_=!1}if(A===null)b===g||_&&e.data===g||(e.data=g);else{if(a=a&&Q.call(e.childNodes),b=n.props||D,!_&&a!=null)for(b={},s=0;s<e.attributes.length;s++)b[(u=e.attributes[s]).name]=u.value;for(s in b)u=b[s],s=="children"||(s=="dangerouslySetInnerHTML"?c=u:s==="key"||s in g||O(e,s,null,u,o));for(s in g)u=g[s],s=="children"?f=u:s=="dangerouslySetInnerHTML"?h=u:s=="value"?y=u:s=="checked"?C=u:s==="key"||_&&typeof u!="function"||b[s]===u||O(e,s,u,b[s],o);if(h)_||c&&(h.__html===c.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(c&&(e.innerHTML=""),He(e,ce(f)?f:[f],t,n,r,o&&A!=="foreignObject",a,l,a?a[0]:n.__k&&B(n,0),_,d),a!=null)for(s=a.length;s--;)a[s]!=null&&Ue(a[s]);_||(s="value",y!==void 0&&(y!==e[s]||A==="progress"&&!y||A==="option"&&y!==b[s])&&O(e,s,y,b[s],!1),s="checked",C!==void 0&&C!==e[s]&&O(e,s,C,b[s],!1))}return e}function _e(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){p.__e(r,n)}}function re(e,t,n){var r,o;if(p.unmount&&p.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||_e(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){p.__e(a,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&re(r[o],t,n||typeof e.type!="function");n||e.__e==null||Ue(e.__e),e.__=e.__e=e.__d=void 0}function je(e,t,n){return this.constructor(e,n)}function Ve(e,t,n){var r,o,a,l;p.__&&p.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,a=[],l=[],le(t,e=(!r&&n||t).__k=Ge(k,null,[e]),o||D,D,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?Q.call(t.childNodes):null,a,!r&&n?n:o?o.__e:t.firstChild,r,l),e.__d=void 0,oe(a,e,l)}function Qe(e,t){var n={__c:t="__cC"+Le++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,a;return this.getChildContext||(o=[],(a={})[t]=this,this.getChildContext=function(){return a},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&o.some(function(_){_.__e=!0,ne(_)})},this.sub=function(l){o.push(l);var _=l.componentWillUnmount;l.componentWillUnmount=function(){o.splice(o.indexOf(l),1),_&&_.call(l)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Q=ae.slice,p={__e:function(e,t,n,r){for(var o,a,l;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),l=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),l=o.__d),l)return o.__E=o}catch(_){e=_}throw e}},Te=0,$.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=T({},this.state),typeof e=="function"&&(e=e(T({},n),this.props)),e&&T(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ne(this))},$.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ne(this))},$.prototype.render=k,E=[],Ee=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,te=function(e,t){return e.__v.__b-t.__v.__b},Z.__r=0,Le=0;var Ye=0;function i(e,t,n,r,o,a){var l,_,d={};for(_ in t)_=="ref"?l=t[_]:d[_]=t[_];var s={type:e,props:d,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Ye,__i:-1,__u:0,__source:o,__self:a};if(typeof e=="function"&&(l=e.defaultProps))for(_ in l)d[_]===void 0&&(d[_]=l[_]);return p.vnode&&p.vnode(s),s}const L=({cardHeader:e,cardBody:t,buttonText:n,selected:r,onClick:o=()=>{}})=>{const a=n&&o?i("div",{class:"card-button-container",children:i("button",{class:"card-button",onClick:o,children:n})}):i(k,{}),l=e?i(k,{children:[i("h3",{children:e}),i("hr",{class:"card-divider"})]}):i(k,{});return i("div",{class:`card-container ${r?"selected":""}`,children:[l,i("div",{class:"card-body",children:t}),a]})},j=({Cards:e})=>{const t=e.map((n,r)=>i("div",{class:"card-row-child",children:n},`card-row-item-${r}`));return i("div",{class:"card-row",children:t})},x=({addImageBackground:e=!1,imageSource:t,imageAltText:n,imageSide:r,headerText:o,cardBody:a})=>{const l=i("img",{src:t,alt:n,class:`card-image ${e?"white":""}`}),_=i("div",{class:"card-body-container",children:[i("h3",{children:o}),i("hr",{}),a]}),d=r==="left"?i(k,{children:[l,_]}):i(k,{children:[_,l]});return i("div",{class:"image-card-container",children:d})};var H,m,J,ve,V=0,qe=[],F=[],v=p,ye=v.__b,be=v.__r,Ae=v.diffed,ke=v.__c,we=v.unmount,Se=v.__;function Y(e,t){v.__h&&v.__h(m,e,V||t),V=0;var n=m.__H||(m.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:F}),n.__[e]}function se(e){return V=1,Ke(Ne,e)}function Ke(e,t,n){var r=Y(H++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ne(void 0,t),function(_){var d=r.__N?r.__N[0]:r.__[0],s=r.t(d,_);d!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=m,!m.u)){var o=function(_,d,s){if(!r.__c.__H)return!0;var h=r.__c.__H.__.filter(function(f){return!!f.__c});if(h.every(function(f){return!f.__N}))return!a||a.call(this,_,d,s);var c=!1;return h.forEach(function(f){if(f.__N){var u=f.__[0];f.__=f.__N,f.__N=void 0,u!==f.__[0]&&(c=!0)}}),!(!c&&r.__c.props===_)&&(!a||a.call(this,_,d,s))};m.u=!0;var a=m.shouldComponentUpdate,l=m.componentWillUpdate;m.componentWillUpdate=function(_,d,s){if(this.__e){var h=a;a=void 0,o(_,d,s),a=h}l&&l.call(this,_,d,s)},m.shouldComponentUpdate=o}return r.__N||r.__}function de(e,t){var n=Y(H++,3);!v.__s&&De(n.__H,t)&&(n.__=e,n.i=t,m.__H.__h.push(n))}function Je(e){return V=5,Xe(function(){return{current:e}},[])}function Xe(e,t){var n=Y(H++,7);return De(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function et(e){var t=m.context[e.__c],n=Y(H++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(m)),t.props.value):e.__}function tt(){for(var e;e=qe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(z),e.__H.__h.forEach(ie),e.__H.__h=[]}catch(t){e.__H.__h=[],v.__e(t,e.__v)}}v.__b=function(e){m=null,ye&&ye(e)},v.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Se&&Se(e,t)},v.__r=function(e){be&&be(e),H=0;var t=(m=e.__c).__H;t&&(J===m?(t.__h=[],m.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=F,n.__N=n.i=void 0})):(t.__h.forEach(z),t.__h.forEach(ie),t.__h=[],H=0)),J=m},v.diffed=function(e){Ae&&Ae(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(qe.push(t)!==1&&ve===v.requestAnimationFrame||((ve=v.requestAnimationFrame)||nt)(tt)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==F&&(n.__=n.__V),n.i=void 0,n.__V=F})),J=m=null},v.__c=function(e,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(r){return!r.__||ie(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],v.__e(r,n.__v)}}),ke&&ke(e,t)},v.unmount=function(e){we&&we(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{z(r)}catch(o){t=o}}),n.__H=void 0,t&&v.__e(t,n.__v))};var Ce=typeof requestAnimationFrame=="function";function nt(e){var t,n=function(){clearTimeout(r),Ce&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Ce&&(t=requestAnimationFrame(n))}function z(e){var t=m,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),m=t}function ie(e){var t=m;e.__c=e.__(),m=t}function De(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ne(e,t){return typeof t=="function"?t(e):t}const Me="https://zach-hensler.github.io/homepage/assets/Ivy_and_Zeus-DZEKfiwy.jpg",Re=Qe({currentRoute:"Home",updateCurrentRoute:()=>{console.error("Initial Navigation Method not overridden...")}}),ot=({children:e})=>{const t=l=>!!(q!=null&&q[l]),n=()=>{const _=window.location.href.split("?")[1];return t(_)?_:"Home"},[r,o]=se(n());de(()=>{addEventListener("popstate",()=>o(n()))},[]);const a=l=>{if(!t(l)){console.error(`Attempted to navigate to invalid route: ${l}`);return}window.scrollTo(0,0),window.history.pushState({},l,`/homepage?${l}`),o(l)};return i(Re.Provider,{value:{currentRoute:r,updateCurrentRoute:a},children:e})},ue=()=>et(Re),X={default:{"--background-bg-color":"#f4fcfd","--background-bg-darker":"#d8e6e8","--background-font-color":"black","--primary-bg-color":"#5a7dc5","--primary-bg-darker":"#516ba1","--primary-font-color":"white","--accent-bg-color":"#625aa0","--accent-bg-darker":"#524c7f","--accent-font-color":"white"},dark:{"--background-bg-color":"#21212d","--background-bg-darker":"#000","--background-font-color":"white","--primary-bg-color":"#8fb3ff","--primary-bg-darker":"#5a7dc5","--primary-font-color":"black","--accent-bg-color":"#f199bf","--accent-bg-darker":"#c77196","--accent-font-color":"black"}},rt=(e,t)=>({getLocalStorage:()=>JSON.parse(window.localStorage.getItem(e)||JSON.stringify(t)),setLocalStorage:o=>window.localStorage.setItem(e,JSON.stringify(o))}),Ie=(e="default")=>Object.hasOwn(X,e)?X[e]:X.default,it=()=>{const{getLocalStorage:e,setLocalStorage:t}=rt("selectedTheme","default"),[n,r]=se(Ie(e())),o=l=>{r(Ie(l)),t(l)},a=()=>{if(e()==="default")return o("dark");o("default")};return de(()=>{const l=document.getElementsByTagName("body")[0];l.style.backgroundColor=n["--background-bg-color"],l.style.color=n["--background-font-color"]},[n]),{selectedTheme:n,toggleTheme:a}},ee="https://zach-hensler.github.io/",W="https://github.com/zach-hensler/",w={email:"zhensler12@gmail.com",linkedInUser:"zhensler",linkedInUrl:"https://www.linkedin.com/in/zhensler/",github:W,diceSimUrl:ee+"dice_simulator/",diceSimSource:W+"dice_simulator/",galleryUrl:ee+"gallery/",gallerySource:W+"gallery/",homepageUrl:ee+"homepage/",homepageSourcecode:W+"homepage/"},at=()=>{const{updateCurrentRoute:e}=ue();return i("div",{children:[i("h2",{children:"Home"}),i(x,{imageSource:Me,imageAltText:"My Cats: Ivy and Zeus",imageSide:"left",headerText:"Who Am I?",cardBody:i("div",{children:[i("p",{children:"My name is Zach Hensler, I am a professional web developer/software engineer.  I consider myself to be a seasoned frontend developer, and a budding backend developer.  On this website, I hope to communicate to you: my experience, my hobbies, and a little bit of my personality as well!"}),i("p",{children:["If you have any questions that I didn't cover here, feel free to reach out via email ",i("a",{href:`mailto:${w.email}`,children:w.email})," or on LinkedIn at ",i("a",{href:w.linkedInUrl,children:w.linkedInUser})]})]})}),i("hr",{style:{margin:"40px 0px"}}),i(j,{Cards:[i(L,{cardHeader:"About Me",cardBody:i("div",{style:{textAlign:"left"},children:[i("p",{children:"I am a:"}),i("ul",{children:[i("li",{children:"Seasoned frontend developer, with experience using React, Typescript, and Jest."}),i("li",{children:"Fledgling backend developer, learning C# and Python."}),i("li",{children:"Computer Engineering Graduate from Purdue University."})]}),i("p",{children:"I like:"}),i("ul",{children:[i("li",{children:"Cooking"}),i("li",{children:"Video/Card/Board Games"}),i("li",{children:"Drawing/Painting"})]})]}),buttonText:"Learn more about me",onClick:()=>e("About")},"about-me-home-card"),i(L,{cardHeader:"Programming Language/Tooling Experience",cardBody:i("ul",{children:[i("li",{children:"React"}),i("li",{children:"Typescript"}),i("li",{children:"Github"}),i("li",{children:"AWS Serverless"}),i("li",{children:"C#"}),i("li",{children:"Python"})]}),buttonText:"Learn more about my experience",onClick:()=>e("Experience")},"tech-experience-card")]})]})},ct="https://zach-hensler.github.io/homepage/assets/github_logo-DzGq4Dyy.png",lt="https://zach-hensler.github.io/homepage/assets/linkedin_logo-G5q5pvjW.webp",_t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACDElEQVRoQ+2ZgU3DMBBF2w1ggzIBjAATABMAEwATUCYAJiBsABPQDYAJKBPABnAP+ZDlxm0du3aCbOmkxo3j/+4u7tkdjwbexgPXP6oApSMYGoErEXwktpdZ+Fzma8Su3XlDAC5k8E1m4e50l9Jxa3eGALzLwElhgC+Zf7srwLc1MAQ8BbN37hAhFSAiFEER8N08mAhUgIhU8Q2tKYRn6jsQkVobTaFTEXZiiePXktqFuoXP/HrfO+Jf5frO3MdX1Fj71j0zM167Ngrgq5G0bgGAMsRtjXScmU4AcYQ2AA6s6ywACEYUleqz2KPYsZgCIIprmgJpXaMAiCY6NKKnLRsAlSIALx4A9eqnUdYGAKjbsgDgcby3JUZaNWKkyMR4HGGrABgzF/sw47NGwPYa4Uc8UCEA+gwblr4sEcB7T2KIJxKawyEAUxn3ZsYCkTUCC7slM3sIAClmC+8VALmte1q2pkRoxyi0V6HeAlgZ8fuRdFGgogAsm4cm/3UNt8WyKp076slzPK3vCScdu2IPYkTKbRt9iVvmS95VAXBpLacjEqumUE2hiPRZ6ry2k7l/e6wymMNdXwSoX6jzSzY2TBSNfy0khRjE5ntagICSoxHTg4LOAAW0L58yNAIVILUH2iLQh9UGzrX+fGm7qQ+rTRRAydVm1Qq5kIFrhSl13qZ8XgVI6c0uzxp8BH4AJMPGMfOD0ZgAAAAASUVORK5CYII=",st="https://zach-hensler.github.io/homepage/assets/gmail_icon-DpVSUgh0.webp",dt="https://zach-hensler.github.io/homepage/assets/Resume_2024_03-DhbTJUng.pdf",ut=()=>i("div",{children:[i("h2",{children:"About Me"}),i("div",{children:[i(j,{Cards:[i(L,{cardHeader:"Work",cardBody:i(k,{children:[i("p",{children:"I have been working full time as a front end developer since October 2020, using React, Typescript, Github, and AWS Serverless Services.  I am also somewhat familiar with C#, Python, and C."}),i("p",{children:"I am dedicated to continuously learning new skills, and improving my existing ones."})]})},"about-me-work-experience"),i(L,{cardHeader:"Purdue",cardBody:i(k,{children:[i("p",{children:"At Purdue, I studied computer engineering.  I was able to get experience with several languages from my classes, including: C, Python, C++, Java, and Scheme.  This variety gives me a well rounded approach to problem solving in any language."}),i("p",{children:"I was also given the opportunity to work part time with the college of science while studying. There I worked with professors to build their research pages, and setup a CMS for them to add their own content."})]})},"about-me-purdue-experience")]}),i(x,{imageSource:Me,imageSide:"left",imageAltText:"Picture of my cats",headerText:"Break Time",cardBody:i(k,{children:[i("p",{children:"Wow!  That was alot of text that you just read.  Take a break! Look at my cats! (Their names are Ivy and Zeus)"}),i("p",{children:"Go stretch, get some water, and relax!"})]})}),i(j,{Cards:[i(L,{cardHeader:"Hobbies",cardBody:i(k,{children:i("p",{children:["For fun, I enjoy playing games, cooking, and making art!  If you're interested in my art, you can check out ",i("a",{href:w.galleryUrl,target:"_blank",rel:"noreferrer",children:"my gallery website here"}),"."]})})},"about-me-for-fun"),i(L,{cardHeader:"External Links",cardBody:i(k,{children:[i("p",{children:"If you still want to know more about me, you can checkout out my profiles on these platforms! I'm not super active on social media, but hopefully you can find what you're looking for. Alternatively, you can reach out to me directly via email."}),i(Oe,{children:[i(U,{iconSource:ct,iconAltText:"Github Icon",linkText:"Github",linkUrl:w.github}),i(U,{iconSource:lt,iconAltText:"LinkedIn Icon",linkText:"LinkedIn",linkUrl:w.linkedInUrl}),i(U,{iconSource:_t,iconAltText:"PDF Icon",linkText:"Resume",linkUrl:"",onClick:()=>window.open(dt,"_blank")}),i(U,{iconSource:st,iconAltText:"Gmail Icon",linkText:"Email Me",linkUrl:`mailto:${w.email}`})]})]})},"about-me-external-links")]})]})]}),ht="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAzklEQVRIS2NkoDFgpLH5DHS3wADoo/lADKJxAZij/hOhBsMH+4GaHAgEG0UWwFxFStAJQH0dgOQwuH50g0i1ANnwC0hBSxUL0A0PBFpwH+oLii3AZvgDoOEYIUBOEOEyHOR4ii3AZzjWxEeKD0g2HGQjsRYQazhZQUSs4WTHQQI0I4HSOSgpglILLkCWD0CGNQDxAgKGk+0DAkUTijTZPiDWkoG3AFSWKBDrXBzqQInBECaHng8coCmGXEsOAPUvhCYIsB2klPtkeWzoWwAALeg9GRHCekYAAAAASUVORK5CYII=",pt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAw0lEQVRIS2NkoDFgpLH5DKMWEAzhAQ+iAqgTJ+BwKiF5vJEM0twPNVgRSD9As0QByL8PFSsE0lgdgSuIkA1PBGpegMMHDkDx/fgswWYBsYbD7MRrCboFpBpO0BJkC8g1HK8lyBaAIhSWKhyB7AMEEzmqggRoohCARjgo4jFSEbmWYDUcmwUgMVItwWk4LgtIsQSv4fgsQLfEEChwAS1ODKB5ACXM0eONUFkEy8ngCMMCCMmP1geEcwqhOCBsAgEVQ98CAOjVLBlY2pO4AAAAAElFTkSuQmCC",ft=()=>{const e=(t,n,r,o,a)=>i(L,{cardHeader:t,cardBody:i(k,{children:[i("div",{children:n}),i("br",{}),i(Oe,{children:[i(U,{usePrimaryColor:a,iconSource:ht,iconAltText:"Icon",linkText:"Website",linkUrl:r}),i(U,{usePrimaryColor:a,iconSource:pt,iconAltText:"Icon",linkText:"Source Code",linkUrl:o})]})]})});return i("div",{children:[i("h2",{children:"Projects"}),i(j,{Cards:[e("Homepage","A web app for telling people about me! (This is where you are now).",w.homepageUrl,w.homepageSourcecode),e("Gallery","An art gallery web app.  All pieces uploaded were made by me! Features sorting by created date, and filtering by medium and/or subject.",w.galleryUrl,w.gallerySource),e("Dice Simulator","A web app for simulating rolling dice of different quantities and side counts. It additionally allows you to apply modifiers to the rolling, and view a histogram of the results.",w.diceSimUrl,w.diceSimSource,!0)]})]})},gt=()=>i("div",{children:[i("h2",{children:"Experience"}),i(x,{imageSource:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",imageAltText:"React Logo",imageSide:"left",headerText:"React",cardBody:i("p",{children:"I have been using React professionally since 2020.  Building maintainable, readable, and testable large scale applications with it has been my focus since then.  I am quite familiar with it's strengths, weaknesses, and quirks."})}),i(x,{imageSource:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",imageAltText:"Typescript Logo",imageSide:"left",headerText:"Typescript",cardBody:i("p",{children:"On the same note of readability, maintainability, and testability; I have been using typescript since June 2021.  I have seen how powerful well written typescript can be, and how deceiving it can be when abused."})}),i(x,{imageSource:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",imageAltText:"Github Logo",imageSide:"left",headerText:"Github",cardBody:i(k,{children:[i("p",{children:"Whether it's at work or for my personal projects, I use Github almost every day.  While I am by no means a Github Wizard, I am familiar with branching strategies, creating pull requests, handling merge conflicts, and using it to manage multiple environments."}),i("p",{children:["You can check out my source code for this website (and my other projects) on ",i("a",{href:w.github,rel:"noreferrer noopener",target:"_blank",children:["my github: ",w.github]})]})]})}),i(x,{addImageBackground:!0,imageSource:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",imageAltText:"AWS Logo",imageSide:"left",headerText:"AWS Serverless",cardBody:i("p",{children:["I have experience working with ",i("b",{children:"Lambda"}),", ",i("b",{children:"S3"}),", and ",i("b",{children:"DynamoDB"})," professionally. While I don't use it in my day to day life, I am familiar with the services, how they work, and how serverless architecture fits together.  I have also dabbled in using ",i("b",{children:"Quicksight"}),",",i("b",{children:" DataBrew"}),", and ",i("b",{children:"S3"})," to build reporting features."]})}),i(x,{imageSource:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",imageAltText:"C# Logo",imageSide:"left",headerText:"C#",cardBody:i("p",{children:"I first dabbled in C# back in 2021.  And have been using it off an on since then.  But I really started to dig my heels in January 2024.  I'm beginning to feel quite comfortable with the language, and making sure that all of my code is testable with XUnit."})}),i(x,{imageSource:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",imageAltText:"Python Logo",imageSide:"left",headerText:"Python",cardBody:i("p",{children:"I started using Python for my classes in college (2016 - 2020), and have since used it professionally as a part of the backend for our web application."})})]}),q={Home:i(at,{}),About:i(ut,{}),Projects:i(ft,{}),Experience:i(gt,{})},mt=i("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",height:"48",viewBox:"0 -960 960 960",width:"48",children:i("path",{d:"M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-85 32-158t87.5-127q55.5-54 130-84.5T489-880q79 0 150 26.5T763.5-780q53.5 47 85 111.5T880-527q0 108-63 170.5T650-294h-75q-18 0-31 14t-13 31q0 27 14.5 46t14.5 44q0 38-21 58.5T480-80Zm0-400Zm-233 26q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm126-170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm214 0q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm131 170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15ZM480-140q11 0 15.5-4.5T500-159q0-14-14.5-26T471-238q0-46 30-81t76-35h73q76 0 123-44.5T820-527q0-132-100-212.5T489-820q-146 0-247.5 98.5T140-480q0 141 99.5 240.5T480-140Z"})}),vt=i("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",height:"48",viewBox:"0 -960 960 960",width:"48",children:i("path",{d:"M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"})}),yt=i("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",height:"48",viewBox:"0 -960 960 960",width:"48",children:i("path",{d:"M120-240v-60h520v60H120Zm678-52L609-481l188-188 43 43-145 145 146 146-43 43ZM120-452v-60h400v60H120Zm0-208v-60h520v60H120Z"})}),xe=({toggleTheme:e})=>i("button",{class:"header-item header-icon float",onClick:e,children:mt}),bt=({handleClick:e,children:t})=>{const n=Je(null);return de(()=>{function r(o){n.current&&o.target instanceof Node&&!n.current.contains(o.target)&&e()}return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[n]),i("div",{ref:n,children:t})},At=({toggleTheme:e})=>{const[t,n]=se(!1),{currentRoute:r,updateCurrentRoute:o}=ue(),a=Object.keys(q).map(l=>i("button",{class:`header-item ${r===l?"header-item-selected":""}`,onClick:()=>{o(l),n(!1)},children:l},l));return i(bt,{handleClick:()=>n(!1),children:i("div",{class:"header",children:[i("div",{class:"header-container-mobile",children:[i("button",{class:"header-item header-icon",onClick:()=>n(!t),children:t?yt:vt}),i(xe,{toggleTheme:e})]}),t?i("div",{class:"header-container-mobile links",children:a}):i(k,{}),i("div",{class:"header-container",children:[a,i(xe,{toggleTheme:e})]})]})})},U=({iconSource:e,iconAltText:t,linkText:n,linkUrl:r,usePrimaryColor:o,onClick:a})=>{const l=r?i("a",{href:r,rel:"noreferrer noopener",target:"_blank",children:n}):i("a",{href:"",children:n});return i("div",{class:"icon-link-container"+(o?" primary":""),children:[i("img",{class:"icon",src:e,alt:t}),i("p",{class:"text",onClick:a,children:l})]})},Oe=({children:e})=>i("div",{class:"icon-link-row",children:e}),kt=()=>{const{currentRoute:e}=ue();return i("div",{class:"workflow-container",children:q[e]})},wt=()=>{const{selectedTheme:e,toggleTheme:t}=it();return i("div",{class:"App",style:{...e},children:[i(At,{toggleTheme:t}),i(kt,{})]})},St=()=>i(ot,{children:i(wt,{})});Ve(i(St,{}),document.getElementById("app"));
