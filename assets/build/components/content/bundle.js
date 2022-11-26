var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function a(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode&&t.parentNode.removeChild(t)}function s(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function h(t,e,n){t.classList[n?"add":"remove"](e)}let $;function k(t){$=t}const y=[],w=[],_=[],x=[],v=Promise.resolve();let E=!1;function A(t){_.push(t)}const P=new Set;let S=0;function j(){const t=$;do{for(;S<y.length;){const t=y[S];S++,k(t),C(t.$$)}for(k(null),y.length=0,S=0;w.length;)w.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];P.has(e)||(P.add(e),e())}_.length=0}while(y.length);for(;x.length;)x.pop()();E=!1,P.clear(),k(t)}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const L=new Set;function M(t,e){-1===t.$$.dirty[0]&&(y.push(t),E||(E=!0,v.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(r,l,c,s,u,f,d,p=[-1]){const m=$;k(r);const g=r.$$={fragment:null,ctx:[],props:f,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(m?m.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:l.target||m.$$.root};d&&d(g.root);let b=!1;if(g.ctx=c?c(r,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&u(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&M(r,t)),e})):[],g.update(),b=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);g.fragment&&g.fragment.l(t),t.forEach(i)}else g.fragment&&g.fragment.c();l.intro&&((h=r.$$.fragment)&&h.i&&(L.delete(h),h.i(y))),function(t,n,r,l){const{fragment:c,after_update:i}=t.$$;c&&c.m(n,r),l||A((()=>{const n=t.$$.on_mount.map(e).filter(a);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(A)}(r,l.target,l.anchor,l.customElement),j()}var h,y;k(m)}class q{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(e,n){if(!a(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function N(t,e,n){const o=t.slice();return o[3]=e[n],o}function O(t,e,n){const o=t.slice();return o[6]=e[n],o[7]=e,o[8]=n,o}function W(t){let e,n,a,r,s,$,k,y,w,_,x,v,E,A,P,S=t[6].label+"",j=t[6].caption+"";function C(){return t[1](t[6],t[7],t[8])}function L(){return t[2](t[6],t[7],t[8])}return{c(){e=u("div"),n=u("a"),a=u("i"),s=d(),$=u("div"),k=u("h5"),y=f(S),w=d(),_=u("p"),x=f(j),E=d(),m(a,"class",r=t[6].icon+" text-white"),m(k,"class","text-white font-bold"),m(_,"class","whitespace-nowrap text-xs text-gray-100"),m($,"class","ml-4"),m(n,"href",v=t[6].link),m(n,"class","animate__animated flex items-center py-2 px-4 rounded"),m(n,"target","_blank"),m(n,"rel","noreferrer"),b(n,"background-color",t[6].color),h(n,"animate__tada",t[6].animate)},m(t,o){c(t,e,o),l(e,n),l(n,a),l(n,s),l(n,$),l($,k),l(k,y),l($,w),l($,_),l(_,x),l(e,E),A||(P=[p(e,"mouseenter",C),p(e,"mouseleave",L)],A=!0)},p(e,o){t=e,1&o&&r!==(r=t[6].icon+" text-white")&&m(a,"class",r),1&o&&S!==(S=t[6].label+"")&&g(y,S),1&o&&j!==(j=t[6].caption+"")&&g(x,j),1&o&&v!==(v=t[6].link)&&m(n,"href",v),1&o&&b(n,"background-color",t[6].color),1&o&&h(n,"animate__tada",t[6].animate)},d(t){t&&i(e),A=!1,o(P)}}}function B(t){let e,n,o,a,r,p,b=t[3].label+"",h=t[3].buttons,$=[];for(let e=0;e<h.length;e+=1)$[e]=W(O(t,h,e));return{c(){e=u("div"),n=u("h2"),o=f(b),a=d(),r=u("div");for(let t=0;t<$.length;t+=1)$[t].c();p=d(),m(n,"class","mb-2 text-lg border-b border-gray-200"),m(r,"class","grid sm:grid-rows-1 md:grid-cols-3 gap-2"),m(e,"class","mb-4")},m(t,i){c(t,e,i),l(e,n),l(n,o),l(e,a),l(e,r);for(let t=0;t<$.length;t+=1)$[t].m(r,null);l(e,p)},p(t,e){if(1&e&&b!==(b=t[3].label+"")&&g(o,b),1&e){let n;for(h=t[3].buttons,n=0;n<h.length;n+=1){const o=O(t,h,n);$[n]?$[n].p(o,e):($[n]=W(o),$[n].c(),$[n].m(r,null))}for(;n<$.length;n+=1)$[n].d(1);$.length=h.length}},d(t){t&&i(e),s($,t)}}}function I(e){let n,o=e[0],a=[];for(let t=0;t<o.length;t+=1)a[t]=B(N(e,o,t));return{c(){n=u("div");for(let t=0;t<a.length;t+=1)a[t].c();m(n,"class","p-6")},m(t,e){c(t,n,e);for(let t=0;t<a.length;t+=1)a[t].m(n,null)},p(t,[e]){if(1&e){let r;for(o=t[0],r=0;r<o.length;r+=1){const l=N(t,o,r);a[r]?a[r].p(l,e):(a[r]=B(l),a[r].c(),a[r].m(n,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=o.length}},i:t,o:t,d(t){t&&i(n),s(a,t)}}}function D(t,e,n){let o=[{label:"Contact",buttons:[{label:"WhatsApp",caption:"Share your latest meme",link:"https://wa.me/6287738846518",icon:"fab fa-whatsapp",color:"#56d263",animate:!1},{label:"Telegram",caption:"Share a story about your ex",link:"https://t.me/agungsundoro",icon:"fab fa-telegram",color:"#1b89d4",animate:!1},{label:"Skype",caption:"Inquiry and Professional Work",link:"https://join.skype.com/invite/cZ64qk7eAZfK",icon:"fab fa-skype",color:"#00aff0",animate:!1}]},{label:"Social",buttons:[{label:"Goodreads",caption:"Reading a book together",link:"https://goodreads.com/agungsundoro",icon:"fas fa-book",color:"#7d5024",animate:!1},{label:"Instagram",caption:"Become an each other fans",link:"https://instagram.com/agung2001",icon:"fab fa-instagram",color:"#ff008c",animate:!1},{label:"Twitter",caption:"Any new tweet from elon musk?",link:"https://twitter.com/agung2001",icon:"fab fa-twitter",color:"#1d9bf0",animate:!1},{label:"WordPress",caption:"Just another WordPress Profile",link:"https://profiles.wordpress.org/agung2001/",icon:"fab fa-wordpress",color:"#23282d",animate:!1},{label:"Linkedin",caption:"Find a job, Make Money, Repeat",link:"https://www.linkedin.com/in/agungsundoro",icon:"fab fa-linkedin",color:"#0a66c2",animate:!1},{label:"YouTube",caption:"Having fun doing music and research",link:"https://www.youtube.com/channel/UCI1uulkvet06Mm3wfpQvpLg",icon:"fab fa-youtube",color:"#fe0000",animate:!1},{label:"Blogspot",caption:"Old collection of articles",link:"https://agungsundoro.blogspot.com/",icon:"fab fa-blogger",color:"#f06a35",animate:!1},{label:"Dribbble",caption:"Design work",link:"https://dribbble.com/agung2001",icon:"fab fa-dribbble",color:"#ea4c89",animate:!1},{label:"Github",caption:"Contribute to open source",link:"https://github.com/agung2001",icon:"fab fa-github",color:"#24292f",animate:!1},{label:"Facebook",caption:"Meet the community",link:"https://www.facebook.com/cotothepong/",icon:"fab fa-facebook",color:"#1977f3",animate:!1}]}];return[o,(t,e,a)=>{n(0,e[a].animate=!0,o)},(t,e,a)=>{n(0,e[a].animate=!1,o)}]}return new class extends q{constructor(t){super(),T(this,t,D,I,r,{})}}({target:document.querySelector("#content")})}();
//# sourceMappingURL=bundle.js.map
