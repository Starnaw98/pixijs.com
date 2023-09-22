"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[6103],{5289:(e,t,s)=>{s.d(t,{Z:()=>a});s(7294);var n=s(4996),i=s(9460),r=s(5893);function a(e){let{children:t,className:s}=e;const{frontMatter:a,assets:o}=(0,i.C)(),{withBaseUrl:l}=(0,n.C)(),c=o.image??a.image;return(0,r.jsxs)("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[c&&(0,r.jsx)("meta",{itemProp:"image",content:l(c,{absolute:!0})}),t]})}},9714:(e,t,s)=>{s.d(t,{Z:()=>l});s(7294);var n=s(6010),i=s(8780),r=s(9460),a=s(3140),o=s(5893);function l(e){let{children:t,className:s}=e;const{isBlogPostPage:l}=(0,r.C)();return(0,o.jsx)("div",{id:l?i.blogPostContainerID:void 0,className:(0,n.Z)("markdown",s),itemProp:"articleBody",children:(0,o.jsx)(a.Z,{children:t})})}},2046:(e,t,s)=>{s.d(t,{Z:()=>p});s(7294);var n=s(6010),i=s(9460),r=s(4881),a=s(1526),o=s(5999),l=s(9960),c=s(5893);function d(){return(0,c.jsx)("b",{children:(0,c.jsx)(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function m(e){const{blogPostTitle:t,...s}=e;return(0,c.jsx)(l.Z,{"aria-label":(0,o.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,c.jsx)(d,{})})}const u="blogPostFooterDetailsFull_mRVl";function p(){const{metadata:e,isBlogPostPage:t}=(0,i.C)(),{tags:s,title:o,editUrl:l,hasTruncateMarker:d}=e,p=!t&&d,h=s.length>0;return h||p||l?(0,c.jsxs)("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&u),children:[h&&(0,c.jsx)("div",{className:(0,n.Z)("col",{"col--9":p}),children:(0,c.jsx)(a.Z,{tags:s})}),t&&l&&(0,c.jsx)("div",{className:"col margin-top--sm",children:(0,c.jsx)(r.Z,{editUrl:l})}),p&&(0,c.jsx)("div",{className:(0,n.Z)("col text--right",{"col--3":h}),children:(0,c.jsx)(m,{blogPostTitle:o,to:e.permalink})})]}):null}},9224:(e,t,s)=>{s.d(t,{Z:()=>L});s(7294);var n=s(6010),i=s(9960),r=s(9460);const a="title_f1Hy";var o=s(5893);function l(e){let{className:t}=e;const{metadata:s,isBlogPostPage:l}=(0,r.C)(),{permalink:c,title:d}=s,m=l?"h1":"h2";return(0,o.jsx)(m,{className:(0,n.Z)(a,t),itemProp:"headline",children:l?d:(0,o.jsx)(i.Z,{itemProp:"url",to:c,children:d})})}var c=s(5999),d=s(8824);const m="container_mt6G";function u(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,d.c)();return t=>{const s=Math.ceil(t);return e(s,(0,c.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,o.jsx)(o.Fragment,{children:s(t)})}function p(e){let{date:t,formattedDate:s}=e;return(0,o.jsx)("time",{dateTime:t,itemProp:"datePublished",children:s})}function h(){return(0,o.jsx)(o.Fragment,{children:" \xb7 "})}function x(e){let{className:t}=e;const{metadata:s}=(0,r.C)(),{date:i,formattedDate:a,readingTime:l}=s;return(0,o.jsxs)("div",{className:(0,n.Z)(m,"margin-vert--md",t),children:[(0,o.jsx)(p,{date:i,formattedDate:a}),void 0!==l&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h,{}),(0,o.jsx)(u,{readingTime:l})]})]})}function v(e){return e.href?(0,o.jsx)(i.Z,{...e}):(0,o.jsx)(o.Fragment,{children:e.children})}function g(e){let{author:t,className:s}=e;const{name:i,title:r,url:a,imageURL:l,email:c}=t,d=a||c&&`mailto:${c}`||void 0;return(0,o.jsxs)("div",{className:(0,n.Z)("avatar margin-bottom--sm",s),children:[l&&(0,o.jsx)(v,{href:d,className:"avatar__photo-link",children:(0,o.jsx)("img",{className:"avatar__photo",src:l,alt:i})}),i&&(0,o.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,o.jsx)("div",{className:"avatar__name",children:(0,o.jsx)(v,{href:d,itemProp:"url",children:(0,o.jsx)("span",{itemProp:"name",children:i})})}),r&&(0,o.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:r})]})]})}const j="authorCol_Hf19",b="imageOnlyAuthorRow_pa_O",f="imageOnlyAuthorCol_G86a";function N(e){let{className:t}=e;const{metadata:{authors:s},assets:i}=(0,r.C)();if(0===s.length)return null;const a=s.every((e=>{let{name:t}=e;return!t}));return(0,o.jsx)("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",a?b:"row",t),children:s.map(((e,t)=>(0,o.jsx)("div",{className:(0,n.Z)(!a&&"col col--6",a?f:j),children:(0,o.jsx)(g,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function L(){return(0,o.jsxs)("header",{children:[(0,o.jsx)(l,{}),(0,o.jsx)(x,{}),(0,o.jsx)(N,{})]})}},5203:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});s(7294);var n=s(6010),i=s(1944),r=s(5281),a=s(9460),o=s(245),l=s(9972),c=s(5999),d=s(2244),m=s(5893);function u(e){const{nextItem:t,prevItem:s}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[s&&(0,m.jsx)(d.Z,{...s,subLabel:(0,m.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,m.jsx)(d.Z,{...t,subLabel:(0,m.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function p(){const{assets:e,metadata:t}=(0,a.C)(),{title:s,description:n,date:r,tags:o,authors:l,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(i.d,{title:s,description:n,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:r}),l.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var h=s(9407);function x(e){let{sidebar:t,children:s}=e;const{metadata:n,toc:i}=(0,a.C)(),{nextItem:r,prevItem:c,frontMatter:d}=n,{hide_table_of_contents:p,toc_min_heading_level:x,toc_max_heading_level:v}=d;return(0,m.jsxs)(o.Z,{sidebar:t,toc:!p&&i.length>0?(0,m.jsx)(h.Z,{toc:i,minHeadingLevel:x,maxHeadingLevel:v}):void 0,children:[(0,m.jsx)(l.Z,{children:s}),(r||c)&&(0,m.jsx)(u,{nextItem:r,prevItem:c})]})}function v(e){const t=e.content;return(0,m.jsx)(a.n,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(i.FG,{className:(0,n.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage),children:[(0,m.jsx)(p,{}),(0,m.jsx)(x,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},6624:(e,t,s)=>{s.d(t,{Z:()=>j});s(7294);var n=s(7524),i=s(6010),r=s(9960),a=s(5999);const o="sidebar_re4s",l="sidebarItemTitle_pO2u",c="sidebarItemList_Yudw",d="sidebarItem__DBe",m="sidebarItemLink_mo7H",u="sidebarItemLinkActive_I1ZP";var p=s(5893);function h(e){let{sidebar:t}=e;return(0,p.jsx)("aside",{className:"col col--3",children:(0,p.jsxs)("nav",{className:(0,i.Z)(o,"thin-scrollbar"),"aria-label":(0,a.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,p.jsx)("div",{className:(0,i.Z)(l,"margin-bottom--md"),children:t.title}),(0,p.jsx)("ul",{className:(0,i.Z)(c,"clean-list"),children:t.items.map((e=>(0,p.jsx)("li",{className:d,children:(0,p.jsx)(r.Z,{isNavLink:!0,to:e.permalink,className:m,activeClassName:u,children:e.title})},e.permalink)))})]})})}var x=s(3102);function v(e){let{sidebar:t}=e;return(0,p.jsx)("ul",{className:"menu__list",children:t.items.map((e=>(0,p.jsx)("li",{className:"menu__list-item",children:(0,p.jsx)(r.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function g(e){return(0,p.jsx)(x.Zo,{component:v,props:e})}function j(e){let{sidebar:t}=e;const s=(0,n.i)();return t?.items.length?"mobile"===s?(0,p.jsx)(g,{sidebar:t}):(0,p.jsx)(h,{sidebar:t}):null}},9407:(e,t,s)=>{s.d(t,{Z:()=>o});s(7294);var n=s(6010),i=s(3743);const r="tableOfContents_bqdL";var a=s(5893);function o(e){let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,n.Z)(r,"thin-scrollbar",t),children:(0,a.jsx)(i.Z,{...s,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},3743:(e,t,s)=>{s.d(t,{Z:()=>h});var n=s(7294),i=s(6668);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),s=Array(7).fill(-1);t.forEach(((e,t)=>{const n=s.slice(2,e.level);e.parentIndex=Math.max(...n),s[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:s,...i}=e;s>=0?t[s].children.push(i):n.push(i)})),n}function a(e){let{toc:t,minHeadingLevel:s,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:s,maxHeadingLevel:n});return function(e){return e.level>=s&&e.level<=n}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function l(e,t){let{anchorTopOffset:s}=t;const n=e.find((e=>o(e).top>=s));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function c(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,n.useRef)(void 0),s=c();(0,n.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:i,minHeadingLevel:r,maxHeadingLevel:a}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:s}=e;const n=[];for(let i=t;i<=s;i+=1)n.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:a}),c=l(o,{anchorTopOffset:s.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,s){s?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,s])}var m=s(5893);function u(e){let{toc:t,className:s,linkClassName:n,isChild:i}=e;return t.length?(0,m.jsx)("ul",{className:i?void 0:s,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(u,{isChild:!0,toc:e.children,className:s,linkClassName:n})]},e.id)))}):null}const p=n.memo(u);function h(e){let{toc:t,className:s="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const x=(0,i.L)(),v=c??x.tableOfContents.minHeadingLevel,g=u??x.tableOfContents.maxHeadingLevel,j=function(e){let{toc:t,minHeadingLevel:s,maxHeadingLevel:i}=e;return(0,n.useMemo)((()=>a({toc:r(t),minHeadingLevel:s,maxHeadingLevel:i})),[t,s,i])}({toc:t,minHeadingLevel:v,maxHeadingLevel:g});return d((0,n.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:v,maxHeadingLevel:g}}),[o,l,v,g])),(0,m.jsx)(p,{toc:j,className:s,linkClassName:o,...h})}},9460:(e,t,s)=>{s.d(t,{C:()=>l,n:()=>o});var n=s(7294),i=s(1013),r=s(5893);const a=n.createContext(null);function o(e){let{children:t,content:s,isBlogPostPage:i=!1}=e;const o=function(e){let{content:t,isBlogPostPage:s}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:i});return(0,r.jsx)(a.Provider,{value:o,children:t})}function l(){const e=(0,n.useContext)(a);if(null===e)throw new i.i6("BlogPostProvider");return e}},8824:(e,t,s)=>{s.d(t,{c:()=>c});var n=s(7294),i=s(2263);const r=["zero","one","two","few","many","other"];function a(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=l();return{selectMessage:(t,s)=>function(e,t,s){const n=e.split("|");if(1===n.length)return n[0];n.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const i=s.select(t),r=s.pluralForms.indexOf(i);return n[Math.min(r,n.length-1)]}(s,t,e)}}},7754:(e,t,s)=>{s.d(t,{Z:()=>x});var n=s(2949),i=s(7294),r=s(4184),a=s.n(r),o=s(2695);var l=s(2215),c=s(9604),d=s(5893);function m(e){let{code:t,onChange:s}=e;const r=(0,i.useRef)(null),a=(0,i.useCallback)((e=>{r.current=e}),[]);(0,i.useEffect)((()=>{const e=()=>{null!==r.current&&r.current.layout({})};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const{colorMode:o}=(0,n.I)();return(0,d.jsx)(c.ZP,{defaultLanguage:"javascript",value:t,defaultPath:"inmemory://model//src/index.ts",onChange:s,options:{lineNumbers:"off",padding:{top:24},minimap:{enabled:!1},fontSize:14,scrollBeyondLastLine:!1,scrollbar:{alwaysConsumeMouseWheel:!1}},onMount:a,theme:"dark"===o?"vs-dark":"light"})}const u=e=>{let{code:t,isPixiWebWorkerVersion:s,isPixiDevVersion:n,pixiVersion:r}=e;const a=(e=>(0,i.useMemo)((()=>({".babelrc":{code:JSON.stringify({presets:[["@babel/preset-env",{useBuiltIns:"entry",corejs:"3.29",targets:"last 2 chrome versions"}]]},null,2)},"src/styles.css":"body { margin: 0; overflow: hidden; }","src/index.js":e,"index.html":'\n<!DOCTYPE html>\n  <html>\n  <head>\n  <title>PixiJS Playground</title>\n  <meta charset="UTF-8" />\n  <link rel="stylesheet" href="src/styles.css">\n</head>\n<body>\n  <script src="src/index.js"><\/script>\n</body>\n</html>',"package.json":{code:JSON.stringify({scripts:{start:"parcel index.html --open",build:"parcel build index.html"}},null,2)}})),[e]))(t),{dependenciesKey:o,dependencies:l}=(e=>{let{isPixiWebWorkerVersion:t,isPixiDevVersion:s,pixiVersion:n}=e;return(0,i.useMemo)((()=>{const e=t?"@pixi/webworker":"pixi.js",i=e=>s?`${n}/${e}`:n,r=[e,"@pixi/graphics-extras","@pixi/math-extras"].reduce(((e,t)=>({...e,[t]:i(t)})),{});return{dependenciesKey:`${e}-${n}`,dependencies:r}}),[s,t,n])})({isPixiWebWorkerVersion:s,isPixiDevVersion:n,pixiVersion:r});return{files:a,key:`${o}-${t}`,customSetup:{entry:"index.html",dependencies:l,devDependencies:{"@babel/core":"^7.21.3","parcel-bundler":"^1.6.1"}}}},p={spWrapper:"spWrapper_XZV1",spLayout:"spLayout_lAOU",tutorial:"tutorial_bUbR",editorWrapper:"editorWrapper_YBAz",previewWrapper:"previewWrapper_AZey",showOutput:"showOutput_G2Cm",fullscreen:"fullscreen_QlZ5",example:"example_nyOC",sandpackLoadingOverlay:"sandpackLoadingOverlay_nYYO",loadingPulse:"loadingPulse_IxQv"};function h(e){let{mode:t,onCodeChanged:s}=e;const{code:n,updateCode:r}=(0,o.m4)(),{sandpack:l}=(0,o.X3)(),[c,u]=(0,i.useState)(!1),{activeFile:h,bundlerState:x}=l,v=(0,i.useCallback)((e=>{const t=e??"";r(t),s?.(t)}),[s,r]),g=(0,i.useCallback)((()=>{u((e=>!e))}),[]);return(0,d.jsxs)(o.sp,{className:a()(p[t],c&&p.showOutput),children:[(0,d.jsx)("div",{className:p.editorWrapper,children:(0,d.jsx)(m,{code:n,onChange:v},h)}),(0,d.jsxs)("div",{className:p.previewWrapper,children:[(0,d.jsx)(o.Gj,{showOpenInCodeSandbox:!0}),!x&&(0,d.jsx)("div",{className:p.sandpackLoadingOverlay})]}),(0,d.jsx)("button",{onClick:g,children:c?"Show Code":"Show Output"})]})}function x(e){let{code:t,onCodeChanged:s,isPixiWebWorkerVersion:r=!1,isPixiDevVersion:a=!1,pixiVersion:c=l.$,mode:m="example"}=e;const{colorMode:x}=(0,n.I)(),{key:v,files:g,customSetup:j}=u({code:t,isPixiDevVersion:a,isPixiWebWorkerVersion:r,pixiVersion:c});var b,f;return b="example",void 0===(f="example"===m)&&(f=!0),(0,i.useEffect)((()=>{const e=document.querySelector("main > .container");if(null!==e&&f)return e.classList.add(b),()=>{e.classList.remove(b)}}),[b,f]),(0,d.jsx)(o.oT,{template:"vanilla",theme:x,files:g,customSetup:j,options:{classes:{"sp-wrapper":p.spWrapper,"sp-layout":p.spLayout}},children:(0,d.jsx)(h,{mode:m,onCodeChanged:s})},v)}},2215:(e,t,s)=>{s.d(t,{$:()=>o,_:()=>l});var n=s(7294),i=s(1825);const r=i.map((e=>{let{versionLabel:t,version:s}=e;return{label:t,value:s}})),a=(e,t)=>s=>s[e]===t,o=i.find(a("latest",!0)).version,l=e=>{let{selectedVersionId:t,setURLState:s}=e;const o=(0,n.useCallback)((e=>s({pixiVersion:e},!0,!0)),[s]);return{selectedVersion:(0,n.useMemo)((()=>i.find(a("version",t))),[t]),handleVersionChanged:o,versionOptions:r}}},245:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(6010),i=s(902),r=s(6624),a=s(5893);function o(e){const{sidebar:t,toc:s,children:o,...l}=e,c=t&&t.items.length>0;return(0,a.jsx)(i.Z,{...l,children:(0,a.jsx)("div",{className:"container margin-vert--lg",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)(r.Z,{sidebar:t}),(0,a.jsx)("main",{className:(0,n.Z)("col",{"col--7":c&&s,"col--9":c&&!s,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog",children:o}),s&&(0,a.jsx)("div",{className:"col col--2",children:s})]})})})}},9972:(e,t,s)=>{s.d(t,{Z:()=>m});var n=s(6010),i=s(9460),r=s(5289),a=s(9224),o=s(9714),l=s(2046);const c="card_Yae6";var d=s(5893);function m(e){let{children:t,className:s}=e;const m=function(){const{isBlogPostPage:e}=(0,i.C)();return e?void 0:"margin-bottom--md"}();return(0,d.jsxs)(r.Z,{className:(0,n.Z)(m,s,c),children:[(0,d.jsx)(a.Z,{}),(0,d.jsx)(o.Z,{children:t}),(0,d.jsx)(l.Z,{})]})}},5889:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(2389),i=s(814),r=s(7754);const a="playgroundCodeBlock_UB3Y";var o=s(5893);function l(e){let{children:t,playground:s=!1,usesWebWorkerLibrary:l=!1,...c}=e;const d=(0,n.Z)();return s&&d?(0,o.jsx)("div",{className:a,children:(0,o.jsx)(r.Z,{code:t,isPixiWebWorkerVersion:l})}):(0,o.jsx)(i.Z,{...c,children:t})}},1825:e=>{e.exports=JSON.parse('[{"versionLabel":"dev","version":"dev","releaseNotes":"https://github.com/pixijs/pixijs/releases","build":"https://pixijs.download/dev/pixi.min.js","docs":"https://pixijs.download/release/docs","dev":true,"npm":"https://pkg.csb.dev/pixijs/pixijs/commit/99c68c2a"},{"versionLabel":"v7.3.x","version":"7.3.1","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.3.1","build":"https://pixijs.download/v7.3.1/pixi.min.js","docs":"https://pixijs.download/v7.3.1/docs/index.html","npm":"7.3.1","latest":true},{"versionLabel":"v7.2.x","version":"7.2.4","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.2.4","build":"https://pixijs.download/v7.2.4/pixi.min.js","docs":"https://pixijs.download/v7.2.4/docs/index.html","npm":"7.2.4"},{"versionLabel":"v7.1.x","version":"7.1.4","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.1.4","build":"https://pixijs.download/v7.1.4/pixi.min.js","docs":"https://pixijs.download/v7.1.4/docs/index.html","npm":"7.1.4"},{"versionLabel":"v7.0.x","version":"7.0.5","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.0.5","build":"https://pixijs.download/v7.0.5/pixi.min.js","docs":"https://pixijs.download/v7.0.5/docs/index.html","npm":"7.0.5"},{"versionLabel":"v6.x","version":"6.5.10","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v6.5.10","build":"https://pixijs.download/v6.5.10/pixi.min.js","docs":"https://pixijs.download/v6.5.10/docs/index.html","npm":"6.5.10"},{"versionLabel":"v5.x","version":"5.3.12","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v5.3.12","build":"https://pixijs.download/v5.3.12/pixi.min.js","docs":"https://pixijs.download/v5.3.12/docs/index.html","npm":"5.3.12"},{"versionLabel":"v4.x","version":"4.8.9","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v4.8.9","build":"https://pixijs.download/v4.8.9/pixi.min.js","docs":"https://pixijs.download/v4.8.9/docs/index.html","npm":"4.8.9"}]')}}]);