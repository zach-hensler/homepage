(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var K,g,Le,H,ge,He,ne,le,oe,re,Ue,M={},Ee=[],$e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,se=Array.isArray;function L(t,e){for(var n in e)t[n]=e[n];return t}function Pe(t){var e=t.parentNode;e&&e.removeChild(t)}function ze(t,e,n){var i,o,c,l={};for(c in e)c=="key"?i=e[c]:c=="ref"?o=e[c]:l[c]=e[c];if(arguments.length>2&&(l.children=arguments.length>3?K.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(c in t.defaultProps)l[c]===void 0&&(l[c]=t.defaultProps[c]);return $(t,l,i,o,null)}function $(t,e,n,i,o){var c={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Le,__i:-1,__u:0};return o==null&&g.vnode!=null&&g.vnode(c),c}function w(t){return t.children}function z(t,e){this.props=t,this.context=e}function E(t,e){if(e==null)return t.__?E(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?E(t):null}function Be(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Be(t)}}function ie(t){(!t.__d&&(t.__d=!0)&&H.push(t)&&!j.__r++||ge!==g.debounceRendering)&&((ge=g.debounceRendering)||He)(j)}function j(){var t,e,n,i,o,c,l,s;for(H.sort(ne);t=H.shift();)t.__d&&(e=H.length,i=void 0,c=(o=(n=t).__v).__e,l=[],s=[],n.__P&&((i=L({},o)).__v=o.__v+1,g.vnode&&g.vnode(i),_e(n.__P,i,o,n.__n,n.__P.namespaceURI,32&o.__u?[c]:null,l,c??E(o),!!(32&o.__u),s),i.__v=o.__v,i.__.__k[i.__i]=i,Re(l,i,s),i.__e!=c&&Be(i)),H.length>e&&H.sort(ne));j.__r=0}function qe(t,e,n,i,o,c,l,s,d,_,h){var a,p,u,A,C,k=i&&i.__k||Ee,f=e.length;for(n.__d=d,Ze(n,e,k),d=n.__d,a=0;a<f;a++)(u=n.__k[a])!=null&&typeof u!="boolean"&&typeof u!="function"&&(p=u.__i===-1?M:k[u.__i]||M,u.__i=a,_e(t,u,p,o,c,l,s,d,_,h),A=u.__e,u.ref&&p.ref!=u.ref&&(p.ref&&de(p.ref,null,u),h.push(u.ref,u.__c||A,u)),C==null&&A!=null&&(C=A),65536&u.__u||p.__k===u.__k?d=Ne(u,d,t):typeof u.type=="function"&&u.__d!==void 0?d=u.__d:A&&(d=A.nextSibling),u.__d=void 0,u.__u&=-196609);n.__d=d,n.__e=C}function Ze(t,e,n){var i,o,c,l,s,d=e.length,_=n.length,h=_,a=0;for(t.__k=[],i=0;i<d;i++)l=i+a,(o=t.__k[i]=(o=e[i])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?$(null,o,null,null,null):se(o)?$(w,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?$(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,s=je(o,n,l,h),o.__i=s,c=null,s!==-1&&(h--,(c=n[s])&&(c.__u|=131072)),c==null||c.__v===null?(s==-1&&a--,typeof o.type!="function"&&(o.__u|=65536)):s!==l&&(s==l-1?a--:s==l+1?a++:s>l?h>d-l?a+=s-l:a--:s<l&&(s==l-a?a-=s-l:a++),s!==i+a&&(o.__u|=65536))):(c=n[l])&&c.key==null&&c.__e&&!(131072&c.__u)&&(c.__e==t.__d&&(t.__d=E(c)),ce(c,c,!1),n[l]=null,h--);if(h)for(i=0;i<_;i++)(c=n[i])!=null&&!(131072&c.__u)&&(c.__e==t.__d&&(t.__d=E(c)),ce(c,c))}function Ne(t,e,n){var i,o;if(typeof t.type=="function"){for(i=t.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=t,e=Ne(i[o],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=E(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function je(t,e,n,i){var o=t.key,c=t.type,l=n-1,s=n+1,d=e[n];if(d===null||d&&o==d.key&&c===d.type&&!(131072&d.__u))return n;if(i>(d!=null&&!(131072&d.__u)?1:0))for(;l>=0||s<e.length;){if(l>=0){if((d=e[l])&&!(131072&d.__u)&&o==d.key&&c===d.type)return l;l--}if(s<e.length){if((d=e[s])&&!(131072&d.__u)&&o==d.key&&c===d.type)return s;s++}}return-1}function me(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||$e.test(e)?n:n+"px"}function W(t,e,n,i,o){var c;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||me(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||me(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")c=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+c]=n,n?i?n.u=i.u:(n.u=le,t.addEventListener(e,c?re:oe,c)):t.removeEventListener(e,c?re:oe,c);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function ve(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=le++;else if(e.t<n.u)return;return n(g.event?g.event(e):e)}}}function _e(t,e,n,i,o,c,l,s,d,_){var h,a,p,u,A,C,k,f,v,q,I,D,N,fe,F,J,x=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(d=!!(32&n.__u),c=[s=e.__e=n.__e]),(h=g.__b)&&h(e);e:if(typeof x=="function")try{if(f=e.props,v="prototype"in x&&x.prototype.render,q=(h=x.contextType)&&i[h.__c],I=h?q?q.props.value:h.__:i,n.__c?k=(a=e.__c=n.__c).__=a.__E:(v?e.__c=a=new x(f,I):(e.__c=a=new z(f,I),a.constructor=x,a.render=Ye),q&&q.sub(a),a.props=f,a.state||(a.state={}),a.context=I,a.__n=i,p=a.__d=!0,a.__h=[],a._sb=[]),v&&a.__s==null&&(a.__s=a.state),v&&x.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=L({},a.__s)),L(a.__s,x.getDerivedStateFromProps(f,a.__s))),u=a.props,A=a.state,a.__v=e,p)v&&x.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),v&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(v&&x.getDerivedStateFromProps==null&&f!==u&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(f,I),!a.__e&&(a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(f,a.__s,I)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(a.props=f,a.state=a.__s,a.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(O){O&&(O.__=e)}),D=0;D<a._sb.length;D++)a.__h.push(a._sb[D]);a._sb=[],a.__h.length&&l.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(f,a.__s,I),v&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(u,A,C)})}if(a.context=I,a.props=f,a.__P=t,a.__e=!1,N=g.__r,fe=0,v){for(a.state=a.__s,a.__d=!1,N&&N(e),h=a.render(a.props,a.state,a.context),F=0;F<a._sb.length;F++)a.__h.push(a._sb[F]);a._sb=[]}else do a.__d=!1,N&&N(e),h=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++fe<25);a.state=a.__s,a.getChildContext!=null&&(i=L(L({},i),a.getChildContext())),v&&!p&&a.getSnapshotBeforeUpdate!=null&&(C=a.getSnapshotBeforeUpdate(u,A)),qe(t,se(J=h!=null&&h.type===w&&h.key==null?h.props.children:h)?J:[J],e,n,i,o,c,l,s,d,_),a.base=e.__e,e.__u&=-161,a.__h.length&&l.push(a),k&&(a.__E=a.__=null)}catch(O){if(e.__v=null,d||c!=null){for(e.__u|=d?160:32;s&&s.nodeType===8&&s.nextSibling;)s=s.nextSibling;c[c.indexOf(s)]=null,e.__e=s}else e.__e=n.__e,e.__k=n.__k;g.__e(O,e,n)}else c==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Qe(n.__e,e,n,i,o,c,l,d,_);(h=g.diffed)&&h(e)}function Re(t,e,n){e.__d=void 0;for(var i=0;i<n.length;i++)de(n[i],n[++i],n[++i]);g.__c&&g.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(c){c.call(o)})}catch(c){g.__e(c,o.__v)}})}function Qe(t,e,n,i,o,c,l,s,d){var _,h,a,p,u,A,C,k=n.props,f=e.props,v=e.type;if(v==="svg"?o="http://www.w3.org/2000/svg":v==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),c!=null){for(_=0;_<c.length;_++)if((u=c[_])&&"setAttribute"in u==!!v&&(v?u.localName===v:u.nodeType===3)){t=u,c[_]=null;break}}if(t==null){if(v===null)return document.createTextNode(f);t=document.createElementNS(o,v,f.is&&f),c=null,s=!1}if(v===null)k===f||s&&t.data===f||(t.data=f);else{if(c=c&&K.call(t.childNodes),k=n.props||M,!s&&c!=null)for(k={},_=0;_<t.attributes.length;_++)k[(u=t.attributes[_]).name]=u.value;for(_ in k)if(u=k[_],_!="children"){if(_=="dangerouslySetInnerHTML")a=u;else if(_!=="key"&&!(_ in f)){if(_=="value"&&"defaultValue"in f||_=="checked"&&"defaultChecked"in f)continue;W(t,_,null,u,o)}}for(_ in f)u=f[_],_=="children"?p=u:_=="dangerouslySetInnerHTML"?h=u:_=="value"?A=u:_=="checked"?C=u:_==="key"||s&&typeof u!="function"||k[_]===u||W(t,_,u,k[_],o);if(h)s||a&&(h.__html===a.__html||h.__html===t.innerHTML)||(t.innerHTML=h.__html),e.__k=[];else if(a&&(t.innerHTML=""),qe(t,se(p)?p:[p],e,n,i,v==="foreignObject"?"http://www.w3.org/1999/xhtml":o,c,l,c?c[0]:n.__k&&E(n,0),s,d),c!=null)for(_=c.length;_--;)c[_]!=null&&Pe(c[_]);s||(_="value",A!==void 0&&(A!==t[_]||v==="progress"&&!A||v==="option"&&A!==k[_])&&W(t,_,A,k[_],o),_="checked",C!==void 0&&C!==t[_]&&W(t,_,C,k[_],o))}return t}function de(t,e,n){try{if(typeof t=="function"){var i=typeof t.__u=="function";i&&t.__u(),i&&e==null||(t.__u=t(e))}else t.current=e}catch(o){g.__e(o,n)}}function ce(t,e,n){var i,o;if(g.unmount&&g.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||de(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(c){g.__e(c,e)}i.base=i.__P=null}if(i=t.__k)for(o=0;o<i.length;o++)i[o]&&ce(i[o],e,n||typeof t.type!="function");n||t.__e==null||Pe(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function Ye(t,e,n){return this.constructor(t,n)}function Ke(t,e,n){var i,o,c,l;g.__&&g.__(t,e),o=(i=typeof n=="function")?null:e.__k,c=[],l=[],_e(e,t=(!i&&n||e).__k=ze(w,null,[t]),o||M,M,e.namespaceURI,!i&&n?[n]:o?null:e.firstChild?K.call(e.childNodes):null,c,!i&&n?n:o?o.__e:e.firstChild,i,l),Re(c,t,l)}function Ve(t,e){var n={__c:e="__cC"+Ue++,__:t,Consumer:function(i,o){return i.children(o)},Provider:function(i){var o,c;return this.getChildContext||(o=[],(c={})[e]=this,this.getChildContext=function(){return c},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&o.some(function(s){s.__e=!0,ie(s)})},this.sub=function(l){o.push(l);var s=l.componentWillUnmount;l.componentWillUnmount=function(){o&&o.splice(o.indexOf(l),1),s&&s.call(l)}}),i.children}};return n.Provider.__=n.Consumer.contextType=n}K=Ee.slice,g={__e:function(t,e,n,i){for(var o,c,l;e=e.__;)if((o=e.__c)&&!o.__)try{if((c=o.constructor)&&c.getDerivedStateFromError!=null&&(o.setState(c.getDerivedStateFromError(t)),l=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,i||{}),l=o.__d),l)return o.__E=o}catch(s){t=s}throw t}},Le=0,z.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=L({},this.state),typeof t=="function"&&(t=t(L({},n),this.props)),t&&L(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),ie(this))},z.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ie(this))},z.prototype.render=w,H=[],He=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ne=function(t,e){return t.__v.__b-e.__v.__b},j.__r=0,le=0,oe=ve(!1),re=ve(!0),Ue=0;var Je=0;function r(t,e,n,i,o,c){e||(e={});var l,s,d=e;if("ref"in d)for(s in d={},e)s=="ref"?l=e[s]:d[s]=e[s];var _={type:t,props:d,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Je,__i:-1,__u:0,__source:o,__self:c};if(typeof t=="function"&&(l=t.defaultProps))for(s in l)d[s]===void 0&&(d[s]=l[s]);return g.vnode&&g.vnode(_),_}const U=({cardHeader:t,cardBody:e,buttonText:n,selected:i,onClick:o=()=>{}})=>r("div",{class:`card-container ${i?"selected":""}`,children:[t?r(w,{children:[r("h3",{children:t}),r("hr",{class:"card-divider"})]}):r(w,{}),r("div",{class:"card-body",children:e}),n&&o?r("div",{class:"card-button-container",children:r("button",{class:"card-button",onClick:o,children:n})}):r(w,{})]}),Q=({Cards:t})=>{const e=t.map((n,i)=>r("div",{class:"card-row-child",children:n},`card-row-item-${i}`));return r("div",{class:"card-row",children:e})},T=({addImageBackground:t=!1,imageSource:e,imageAltText:n,imageSide:i,headerText:o,cardBody:c,maxImageWidth:l=300})=>{const s=r("img",{src:e,alt:n,class:`card-image ${t?"white":""}`,style:{maxWidth:`${l}px`,maxHeight:`${l}px`}}),d=r("div",{class:"card-body-container",children:[r("h3",{children:o}),r("hr",{}),c]});return r("div",{class:"image-card-container",children:i==="left"?r(w,{children:[s,d]}):r(w,{children:[d,s]})})};var B,m,X,ye,Y=0,Me=[],y=g,be=y.__b,Ae=y.__r,ke=y.diffed,we=y.__c,Se=y.unmount,Ce=y.__;function V(t,e){y.__h&&y.__h(m,t,Y||e),Y=0;var n=m.__H||(m.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function ue(t){return Y=1,Xe(Fe,t)}function Xe(t,e,n){var i=V(B++,2);if(i.t=t,!i.__c&&(i.__=[Fe(void 0,e),function(s){var d=i.__N?i.__N[0]:i.__[0],_=i.t(d,s);d!==_&&(i.__N=[_,i.__[1]],i.__c.setState({}))}],i.__c=m,!m.u)){var o=function(s,d,_){if(!i.__c.__H)return!0;var h=i.__c.__H.__.filter(function(p){return!!p.__c});if(h.every(function(p){return!p.__N}))return!c||c.call(this,s,d,_);var a=!1;return h.forEach(function(p){if(p.__N){var u=p.__[0];p.__=p.__N,p.__N=void 0,u!==p.__[0]&&(a=!0)}}),!(!a&&i.__c.props===s)&&(!c||c.call(this,s,d,_))};m.u=!0;var c=m.shouldComponentUpdate,l=m.componentWillUpdate;m.componentWillUpdate=function(s,d,_){if(this.__e){var h=c;c=void 0,o(s,d,_),c=h}l&&l.call(this,s,d,_)},m.shouldComponentUpdate=o}return i.__N||i.__}function he(t,e){var n=V(B++,3);!y.__s&&De(n.__H,e)&&(n.__=t,n.i=e,m.__H.__h.push(n))}function et(t){return Y=5,tt(function(){return{current:t}},[])}function tt(t,e){var n=V(B++,7);return De(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function nt(t){var e=m.context[t.__c],n=V(B++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(m)),e.props.value):t.__}function ot(){for(var t;t=Me.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Z),t.__H.__h.forEach(ae),t.__H.__h=[]}catch(e){t.__H.__h=[],y.__e(e,t.__v)}}y.__b=function(t){m=null,be&&be(t)},y.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Ce&&Ce(t,e)},y.__r=function(t){Ae&&Ae(t),B=0;var e=(m=t.__c).__H;e&&(X===m?(e.__h=[],m.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(e.__h.forEach(Z),e.__h.forEach(ae),e.__h=[],B=0)),X=m},y.diffed=function(t){ke&&ke(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Me.push(e)!==1&&ye===y.requestAnimationFrame||((ye=y.requestAnimationFrame)||rt)(ot)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),X=m=null},y.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Z),n.__h=n.__h.filter(function(i){return!i.__||ae(i)})}catch(i){e.some(function(o){o.__h&&(o.__h=[])}),e=[],y.__e(i,n.__v)}}),we&&we(t,e)},y.unmount=function(t){Se&&Se(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Z(i)}catch(o){e=o}}),n.__H=void 0,e&&y.__e(e,n.__v))};var xe=typeof requestAnimationFrame=="function";function rt(t){var e,n=function(){clearTimeout(i),xe&&cancelAnimationFrame(e),setTimeout(t)},i=setTimeout(n,100);xe&&(e=requestAnimationFrame(n))}function Z(t){var e=m,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),m=e}function ae(t){var e=m;t.__c=t.__(),m=e}function De(t,e){return!t||t.length!==e.length||e.some(function(n,i){return n!==t[i]})}function Fe(t,e){return typeof e=="function"?e(t):e}const Oe="https://zach-hensler.com/assets/Ivy_and_Zeus-DZEKfiwy.jpg",S=typeof window>"u"?void 0:window,We=Ve({currentRoute:"Home",updateCurrentRoute:()=>{console.error("Initial Navigation Method not overridden...")}}),it=({children:t})=>{const e=l=>!!(R!=null&&R[l]),n=()=>{const l="Home";if(!S)return l;const d=window.location.href.split("?")[1];return e(d)?d:l},[i,o]=ue(n());he(()=>{addEventListener("popstate",()=>o(n()))},[]);const c=l=>{if(S){if(!e(l)){console.error(`Attempted to navigate to invalid route: ${l}`);return}window.scrollTo(0,0),window.history.pushState({},l,`/?${l}`),o(l)}};return r(We.Provider,{value:{currentRoute:i,updateCurrentRoute:c},children:t})},pe=()=>nt(We),ee={default:{"--background-bg-color":"#f4fcfd","--background-bg-darker":"#d8e6e8","--background-font-color":"black","--primary-bg-color":"#5a7dc5","--primary-bg-darker":"#516ba1","--primary-font-color":"white","--accent-bg-color":"#625aa0","--accent-bg-darker":"#524c7f","--accent-font-color":"white"},dark:{"--background-bg-color":"#21212d","--background-bg-darker":"#130d22","--background-font-color":"white","--primary-bg-color":"#8fb3ff","--primary-bg-darker":"#5a7dc5","--primary-font-color":"black","--accent-bg-color":"#f199bf","--accent-bg-darker":"#c77196","--accent-font-color":"black"}},ct=(t,e)=>S?{getLocalStorage:()=>JSON.parse(window.localStorage.getItem(t)||JSON.stringify(e)),setLocalStorage:o=>window.localStorage.setItem(t,JSON.stringify(o))}:{getLocalStorage:()=>e,setLocalStorage:()=>{}},Ie=(t="default")=>Object.hasOwn(ee,t)?ee[t]:ee.default,at=()=>{const{getLocalStorage:t,setLocalStorage:e}=ct("selectedTheme","default"),[n,i]=ue(Ie(t())),o=l=>{i(Ie(l)),e(l)},c=()=>{if(t()==="default")return o("dark");o("default")};return he(()=>{const l=document.getElementsByTagName("body")[0];l.style.backgroundColor=n["--background-bg-color"],l.style.color=n["--background-font-color"]},[n]),{selectedTheme:n,toggleTheme:c}},lt="https://zach-hensler.com/assets/resume_2024_08_08-CYyglVGF.pdf",te="https://zach-hensler.github.io/",G="https://github.com/zach-hensler/",b={email:"zhensler12@gmail.com",linkedInUser:"zhensler",linkedInUrl:"https://www.linkedin.com/in/zhensler/",github:G,diceSimUrl:te+"dice_simulator/",diceSimSource:G+"dice_simulator/",galleryUrl:te+"gallery/",gallerySource:G+"gallery/",homepageUrl:te+"homepage/",homepageSourcecode:G+"homepage/",resume:lt},st=()=>{const{updateCurrentRoute:t}=pe();return r("div",{children:[r("h2",{children:"Home"}),r(T,{imageSource:Oe,imageAltText:"My Cats: Ivy and Zeus",imageSide:"left",headerText:"Who Am I?",cardBody:r("div",{children:[r("p",{children:"I am Zach Hensler, a fullstack web developer/software engineer. I have experience building responsive Front End applications using React and Typescript.  As well as updating RESTful APIs using C# and F#."}),r("p",{children:["If you have any questions that I don't cover here, feel free to:",r("ul",{children:[r("li",{children:["check out my ",r("a",{href:"#",onClick:()=>{var e;return(e=S==null?void 0:S.open)==null?void 0:e.call(S,b.resume,"_blank")},children:"resume"})]}),r("li",{children:["reach out via email ",r("a",{href:`mailto:${b.email}`,children:b.email})]}),r("li",{children:["find me on LinkedIn at ",r("a",{href:b.linkedInUrl,children:b.linkedInUser})]})]})]})]})}),r("hr",{style:{margin:"40px 0px"}}),r(Q,{Cards:[r(U,{cardHeader:"Technical Experience",cardBody:r("ul",{children:[r("li",{children:"C#"}),r("li",{children:"F#"}),r("li",{children:"React"}),r("li",{children:"Typescript"}),r("li",{children:"HTML/CSS"}),r("li",{children:"Github"}),r("li",{children:"AWS"}),r("li",{children:"Python"})]}),buttonText:"Learn more",onClick:()=>t("Technical")},"tech-experience-card"),r(U,{cardHeader:"About Me",cardBody:r("div",{style:{textAlign:"left"},children:[r("p",{children:"I am a:"}),r("ul",{children:[r("li",{children:"Fullstack developer"}),r("li",{children:"Computer Engineering Graduate from Purdue University"}),r("li",{children:"Art hobbyist"}),r("li",{children:"Home cook"})]})]}),buttonText:"Learn more",onClick:()=>t("About")},"about-me-home-card")]})]})},_t="https://zach-hensler.com/assets/github_logo-DzGq4Dyy.png",dt="https://zach-hensler.com/assets/linkedin_logo-G5q5pvjW.webp",ut="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACDElEQVRoQ+2ZgU3DMBBF2w1ggzIBjAATABMAEwATUCYAJiBsABPQDYAJKBPABnAP+ZDlxm0du3aCbOmkxo3j/+4u7tkdjwbexgPXP6oApSMYGoErEXwktpdZ+Fzma8Su3XlDAC5k8E1m4e50l9Jxa3eGALzLwElhgC+Zf7srwLc1MAQ8BbN37hAhFSAiFEER8N08mAhUgIhU8Q2tKYRn6jsQkVobTaFTEXZiiePXktqFuoXP/HrfO+Jf5frO3MdX1Fj71j0zM167Ngrgq5G0bgGAMsRtjXScmU4AcYQ2AA6s6ywACEYUleqz2KPYsZgCIIprmgJpXaMAiCY6NKKnLRsAlSIALx4A9eqnUdYGAKjbsgDgcby3JUZaNWKkyMR4HGGrABgzF/sw47NGwPYa4Uc8UCEA+gwblr4sEcB7T2KIJxKawyEAUxn3ZsYCkTUCC7slM3sIAClmC+8VALmte1q2pkRoxyi0V6HeAlgZ8fuRdFGgogAsm4cm/3UNt8WyKp076slzPK3vCScdu2IPYkTKbRt9iVvmS95VAXBpLacjEqumUE2hiPRZ6ry2k7l/e6wymMNdXwSoX6jzSzY2TBSNfy0khRjE5ntagICSoxHTg4LOAAW0L58yNAIVILUH2iLQh9UGzrX+fGm7qQ+rTRRAydVm1Qq5kIFrhSl13qZ8XgVI6c0uzxp8BH4AJMPGMfOD0ZgAAAAASUVORK5CYII=",ht="https://zach-hensler.com/assets/gmail_icon-DpVSUgh0.webp",pt=()=>r("div",{children:[r("h2",{children:"About Me"}),r("div",{children:[r(Q,{Cards:[r(U,{cardHeader:"Work",cardBody:r(w,{children:[r("p",{children:"I have been working full time as a front end developer since October 2020, using React, Typescript, Github, and AWS Serverless Services.  I am also somewhat familiar with C#, Python, and C."}),r("p",{children:"I am dedicated to continuously learning new skills, and improving my existing ones."})]})},"about-me-work-experience"),r(U,{cardHeader:"Purdue",cardBody:r(w,{children:[r("p",{children:"At Purdue, I studied computer engineering.  I was able to get experience with several languages from my classes, including: C, Python, C++, Java, and Scheme.  This variety gives me a well rounded approach to problem solving in any language."}),r("p",{children:"I was also given the opportunity to work part time with the college of science while studying. There I worked with professors to build their research pages, and setup a CMS for them to add their own content."})]})},"about-me-purdue-experience")]}),r(T,{imageSource:Oe,imageSide:"left",imageAltText:"Picture of my cats",headerText:"Break Time",cardBody:r(w,{children:[r("p",{children:"Wow!  That was alot of text that you just read.  Take a break! Look at my cats! (Their names are Ivy and Zeus)"}),r("p",{children:"Go stretch, get some water, and relax!"})]})}),r(Q,{Cards:[r(U,{cardHeader:"Hobbies",cardBody:r(w,{children:r("p",{children:["For fun, I enjoy playing games, cooking, and making art!  If you're interested in my art, you can check out ",r("a",{href:b.galleryUrl,target:"_blank",rel:"noreferrer",children:"my gallery website here"}),"."]})})},"about-me-for-fun"),r(U,{cardHeader:"External Links",cardBody:r(w,{children:[r("p",{children:"If you still want to know more about me, you can checkout out my profiles on these platforms! I'm not super active on social media, but hopefully you can find what you're looking for. Alternatively, you can reach out to me directly via email."}),r(Ge,{children:[r(P,{iconSource:_t,iconAltText:"Github Icon",linkText:"Github",linkUrl:b.github}),r(P,{iconSource:dt,iconAltText:"LinkedIn Icon",linkText:"LinkedIn",linkUrl:b.linkedInUrl}),r(P,{iconSource:ut,iconAltText:"PDF Icon",linkText:"Resume",linkUrl:"",onClick:()=>{var t;return(t=S==null?void 0:S.open)==null?void 0:t.call(S,b.resume,"_blank")}}),r(P,{iconSource:ht,iconAltText:"Gmail Icon",linkText:"Email Me",linkUrl:`mailto:${b.email}`})]})]})},"about-me-external-links")]})]})]}),ft="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAzklEQVRIS2NkoDFgpLH5DHS3wADoo/lADKJxAZij/hOhBsMH+4GaHAgEG0UWwFxFStAJQH0dgOQwuH50g0i1ANnwC0hBSxUL0A0PBFpwH+oLii3AZvgDoOEYIUBOEOEyHOR4ii3AZzjWxEeKD0g2HGQjsRYQazhZQUSs4WTHQQI0I4HSOSgpglILLkCWD0CGNQDxAgKGk+0DAkUTijTZPiDWkoG3AFSWKBDrXBzqQInBECaHng8coCmGXEsOAPUvhCYIsB2klPtkeWzoWwAALeg9GRHCekYAAAAASUVORK5CYII=",gt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAw0lEQVRIS2NkoDFgpLH5DKMWEAzhAQ+iAqgTJ+BwKiF5vJEM0twPNVgRSD9As0QByL8PFSsE0lgdgSuIkA1PBGpegMMHDkDx/fgswWYBsYbD7MRrCboFpBpO0BJkC8g1HK8lyBaAIhSWKhyB7AMEEzmqggRoohCARjgo4jFSEbmWYDUcmwUgMVItwWk4LgtIsQSv4fgsQLfEEChwAS1ODKB5ACXM0eONUFkEy8ngCMMCCMmP1geEcwqhOCBsAgEVQ98CAOjVLBlY2pO4AAAAAElFTkSuQmCC",mt=()=>{const t=(e,n,i,o,c)=>r(U,{cardHeader:e,cardBody:r(w,{children:[r("div",{children:n}),r("br",{}),r(Ge,{children:[r(P,{usePrimaryColor:c,iconSource:ft,iconAltText:"Icon",linkText:"Website",linkUrl:i}),r(P,{usePrimaryColor:c,iconSource:gt,iconAltText:"Icon",linkText:"Source Code",linkUrl:o})]})]})});return r("div",{children:[r("h2",{children:"Projects"}),r(Q,{Cards:[t("Homepage","A web app for telling people about me! (This is where you are now).",b.homepageUrl,b.homepageSourcecode),t("Gallery","An art gallery web app.  All pieces uploaded were made by me! Features sorting by created date, and filtering by medium and/or subject.",b.galleryUrl,b.gallerySource),t("Dice Simulator","A web app for simulating rolling dice of different quantities and side counts. It additionally allows you to apply modifiers to the rolling, and view a histogram of the results.",b.diceSimUrl,b.diceSimSource,!0)]})]})},vt="https://zach-hensler.com/assets/dotnet_logo-Daij9eqZ.png",yt=()=>r("div",{children:[r("h2",{children:"Experience"}),r(T,{maxImageWidth:150,imageSource:vt,imageAltText:"Dotnet Logo",imageSide:"left",headerText:"C# / F#",cardBody:r("p",{children:"I have been using both C# and F# to update existing RESTful APIs, and to create plugins for handling business logic."})}),r(T,{maxImageWidth:150,imageSource:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",imageAltText:"React Logo",imageSide:"left",headerText:"React",cardBody:r("p",{children:"I have been using React professionally since 2020.  Building maintainable, readable, and testable large scale applications with it has been my focus since then.  I am quite familiar with it's strengths, weaknesses, and quirks."})}),r(T,{maxImageWidth:150,imageSource:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",imageAltText:"Typescript Logo",imageSide:"left",headerText:"Typescript",cardBody:r("p",{children:"On the same note of readability, maintainability, and testability; I have been using typescript since June 2021.  I have seen how powerful well written typescript can be, and how deceiving it can be when abused."})}),r(T,{maxImageWidth:150,imageSource:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",imageAltText:"Github Logo",imageSide:"left",headerText:"Github",cardBody:r(w,{children:[r("p",{children:"Whether it's at work or for my personal projects, I use Github almost every day.  While I am by no means a Github Wizard, I am familiar with branching strategies, creating pull requests, handling merge conflicts, and using it to manage multiple environments."}),r("p",{children:["You can check out my source code for this website (and my other projects) on ",r("a",{href:b.github,rel:"noreferrer noopener",target:"_blank",children:["my github: ",b.github]})]})]})}),r(T,{maxImageWidth:150,addImageBackground:!0,imageSource:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",imageAltText:"AWS Logo",imageSide:"left",headerText:"AWS Serverless",cardBody:r("p",{children:["I have experience working with ",r("b",{children:"Lambda"}),", ",r("b",{children:"S3"}),", and ",r("b",{children:"DynamoDB"})," professionally. While I don't use it in my day to day life, I am familiar with the services, how they work, and how serverless architecture fits together.  I have also dabbled in using ",r("b",{children:"Quicksight"}),",",r("b",{children:" DataBrew"}),", and ",r("b",{children:"S3"})," to build reporting features."]})}),r(T,{maxImageWidth:150,imageSource:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",imageAltText:"Python Logo",imageSide:"left",headerText:"Python",cardBody:r("p",{children:"I started using Python for my classes in college (2016 - 2020), and have since used it professionally as a part of the backend for our web application."})})]}),R={Home:r(st,{}),About:r(pt,{}),Technical:r(yt,{}),Projects:r(mt,{})},bt=r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",height:"48",viewBox:"0 -960 960 960",width:"48",children:r("path",{d:"M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-85 32-158t87.5-127q55.5-54 130-84.5T489-880q79 0 150 26.5T763.5-780q53.5 47 85 111.5T880-527q0 108-63 170.5T650-294h-75q-18 0-31 14t-13 31q0 27 14.5 46t14.5 44q0 38-21 58.5T480-80Zm0-400Zm-233 26q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm126-170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm214 0q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm131 170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15ZM480-140q11 0 15.5-4.5T500-159q0-14-14.5-26T471-238q0-46 30-81t76-35h73q76 0 123-44.5T820-527q0-132-100-212.5T489-820q-146 0-247.5 98.5T140-480q0 141 99.5 240.5T480-140Z"})}),At=r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",height:"48",viewBox:"0 -960 960 960",width:"48",children:r("path",{d:"M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"})}),kt=r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",height:"48",viewBox:"0 -960 960 960",width:"48",children:r("path",{d:"M120-240v-60h520v60H120Zm678-52L609-481l188-188 43 43-145 145 146 146-43 43ZM120-452v-60h400v60H120Zm0-208v-60h520v60H120Z"})}),Te=({toggleTheme:t})=>r("button",{class:"header-item header-icon float",onClick:t,children:bt}),wt=({handleClick:t,children:e})=>{const n=et(null);return he(()=>{function i(o){n.current&&o.target instanceof Node&&!n.current.contains(o.target)&&t()}return document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i)},[n]),r("div",{ref:n,children:e})},St=({toggleTheme:t})=>{const[e,n]=ue(!1),{currentRoute:i,updateCurrentRoute:o}=pe(),c=Object.keys(R).map(l=>r("button",{class:`header-item ${i===l?"header-item-selected":""}`,onClick:()=>{o(l),n(!1)},children:l},l));return r(wt,{handleClick:()=>n(!1),children:r("div",{class:"header",children:[r("div",{class:"header-container-mobile",children:[r("button",{class:"header-item header-icon",onClick:()=>n(!e),children:e?kt:At}),r(Te,{toggleTheme:t})]}),e?r("div",{class:"header-container-mobile links",children:c}):r(w,{}),r("div",{class:"header-container",children:[c,r(Te,{toggleTheme:t})]})]})})},P=({iconSource:t,iconAltText:e,linkText:n,linkUrl:i,usePrimaryColor:o,onClick:c})=>{const l=i?r("a",{href:i,rel:"noreferrer noopener",target:"_blank",children:n}):r("a",{href:"",children:n});return r("div",{class:"icon-link-container"+(o?" primary":""),children:[r("img",{class:"icon",src:t,alt:e}),r("p",{class:"text",onClick:c,children:l})]})},Ge=({children:t})=>r("div",{class:"icon-link-row",children:t}),Ct=()=>{const{currentRoute:t}=pe();return r("div",{class:"workflow-container",children:R[t]})},xt=()=>{const{selectedTheme:t,toggleTheme:e}=at();return r(it,{children:r("div",{class:"App",style:{...t},children:[r(St,{toggleTheme:e}),r(Ct,{})]})})};Ke(r(xt,{}),document.getElementById("app"));
