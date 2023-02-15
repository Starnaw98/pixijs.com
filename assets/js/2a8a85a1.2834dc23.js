"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5409],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>m});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},o=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(a),c=l,m=p["".concat(s,".").concat(c)]||p[c]||k[c]||n;return a?r.createElement(m,u(u({ref:t},o),{},{components:a})):r.createElement(m,u({ref:t},o))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,u=new Array(n);u[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,u[1]=i;for(var d=2;d<n;d++)u[d]=a[d];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85272:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var r=a(87462),l=(a(67294),a(3905));const n={id:"PIXI.AbstractMultiResource.pixi_core",title:"Class: PIXI.AbstractMultiResource",sidebar_label:"PIXI.AbstractMultiResource",custom_edit_url:null},u=void 0,i={unversionedId:"api/classes/PIXI.AbstractMultiResource.pixi_core",id:"api/classes/PIXI.AbstractMultiResource.pixi_core",title:"Class: PIXI.AbstractMultiResource",description:"@pixi/core.AbstractMultiResource",source:"@site/docs/api/classes/PIXI.AbstractMultiResource.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.AbstractMultiResource.pixi_core",permalink:"/api/classes/PIXI.AbstractMultiResource.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.AbstractMultiResource.pixi_core",title:"Class: PIXI.AbstractMultiResource",sidebar_label:"PIXI.AbstractMultiResource",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.AbstractMaskSystem",permalink:"/api/classes/PIXI.AbstractMaskSystem.pixi_core"},next:{title:"PIXI.AccessibilityManager",permalink:"/api/classes/PIXI.AccessibilityManager.pixi_accessibility"}},s={},d=[{value:"new PIXI.AbstractMultiResource: <span><code>(length: number, options: ISize) </code></span>",id:"new-pixiabstractmultiresource-length-number-options-isize-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Extends",id:"extends",level:2},{value:"Members",id:"members",level:2},{value:"baseTexture: <span><code>BaseTexture</code></span>",id:"basetexture-basetexture",level:3},{value:"destroyed: <span><code>boolean</code></span>",id:"destroyed-boolean",level:3},{value:"height: <span><code>number</code></span>",id:"height-number",level:3},{value:"internal: <span><code>boolean</code></span>",id:"internal-boolean",level:3},{value:"itemDirtyIds: <span><code>Array&lt;number&gt;</code></span>",id:"itemdirtyids-arraynumber",level:3},{value:"items: <span><code>Array&lt;BaseTexture&gt;</code></span>",id:"items-arraybasetexture",level:3},{value:"length: <span><code>number</code></span>",id:"length-number",level:3},{value:"src: <span><code>string</code></span>",id:"src-string",level:3},{value:"valid: <span><code>boolean</code></span>",id:"valid-boolean",level:3},{value:"width: <span><code>number</code></span>",id:"width-number",level:3},{value:"_height: <span><code>number</code></span>",id:"_height-number",level:3},{value:"_width: <span><code>number</code></span>",id:"_width-number",level:3},{value:"Methods",id:"methods",level:2},{value:"addBaseTextureAt: <span><code>(baseTexture: BaseTexture, index: number) -&gt; this</code></span>",id:"addbasetextureat-basetexture-basetexture-index-number---this",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"addResourceAt: <span><code>(resource: Resource, index: number) -&gt; this</code></span>",id:"addresourceat-resource-resource-index-number---this",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"bind: <span><code>(baseTexture: BaseTexture) -&gt; void</code></span>",id:"bind-basetexture-basetexture---void",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"destroy: <span><code>() -&gt; void</code></span>",id:"destroy----void",level:3},{value:"dispose: <span><code>() -&gt; void</code></span>",id:"dispose----void",level:3},{value:"load: <span><code>() -&gt; Promise&lt;this&gt;</code></span>",id:"load----promisethis",level:3},{value:"Returns:",id:"returns-2",level:4},{value:"resize: <span><code>(width: number, height: number) -&gt; void</code></span>",id:"resize-width-number-height-number---void",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"style: <span><code>(_renderer: Renderer, _baseTexture: BaseTexture, _glTexture: GLTexture) -&gt; boolean</code></span>",id:"style-_renderer-renderer-_basetexture-basetexture-_gltexture-gltexture---boolean",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"Returns:",id:"returns-3",level:4},{value:"unbind: <span><code>(baseTexture: BaseTexture) -&gt; void</code></span>",id:"unbind-basetexture-basetexture---void",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"update: <span><code>() -&gt; void</code></span>",id:"update----void",level:3},{value:"upload: <span><code>(renderer: Renderer, baseTexture: BaseTexture, glTexture: GLTexture) -&gt; boolean</code></span>",id:"upload-renderer-renderer-basetexture-basetexture-gltexture-gltexture---boolean",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"Returns:",id:"returns-4",level:4},{value:"initFromArray: <span><code>(resources: Array&lt;any&gt;, options: IAutoDetectOptions) -&gt; void</code></span>",id:"initfromarray-resources-arrayany-options-iautodetectoptions---void",level:3},{value:"Parameters:",id:"parameters-8",level:4}],o={toc:d};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".AbstractMultiResource"),(0,l.kt)("p",null,"Resource that can manage several resource (items) inside. All resources need to have the same pixel size. Parent class for CubeResource and ArrayResource"),(0,l.kt)("p",null,"// TODO: @see"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"new-pixiabstractmultiresource-length-number-options-isize-"},"new PIXI.AbstractMultiResource: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(length",":"," number, options",":"," ISize) "))),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"length"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"ISize")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Options to for Resource constructor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Width of the resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Height of the resource"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"extends"},"Extends"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../classes/PIXI.Resource.pixi_core"},"PIXI.Resource"))),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"basetexture-basetexture"},"baseTexture: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"BaseTexture"))),(0,l.kt)("p",null,"Bound baseTexture, there can only be one.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"destroyed-boolean"},"destroyed: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"false"))),(0,l.kt)("p",null,"If resource has been destroyed.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"height-number"},"height: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"The height of the resource.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"internal-boolean"},"internal: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")," if resource is created by BaseTexture useful for doing cleanup with BaseTexture destroy and not cleaning up resources that were created externally.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"itemdirtyids-arraynumber"},"itemDirtyIds: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"Array","<","number",">"))),(0,l.kt)("p",null,"Dirty IDs for each part.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"items-arraybasetexture"},"items: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"Array","<","BaseTexture",">"))),(0,l.kt)("p",null,"Collection of partial baseTextures that correspond to resources.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"length-number"},"length: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"Number of elements in array.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"src-string"},"src: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"string"))),(0,l.kt)("p",null,"The url of the resource")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"valid-boolean"},"valid: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("p",null,"Has been validated")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"width-number"},"width: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"The width of the resource.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"_height-number"},"_height: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"Internal height of the resource.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"_width-number"},"_width: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"Internal width of the resource.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addbasetextureat-basetexture-basetexture-index-number---this"},"addBaseTextureAt: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(baseTexture",":"," BaseTexture, index",":"," number) -",">"," this"))),(0,l.kt)("p",null,"Set a baseTexture by ID"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Zero-based index of resource to set")))),(0,l.kt)("h4",{id:"returns"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"this")),(0,l.kt)("td",{parentName:"tr",align:null},"* Instance for chaining"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addresourceat-resource-resource-index-number---this"},"addResourceAt: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(resource",":"," Resource, index",":"," number) -",">"," this"))),(0,l.kt)("p",null,"Set a resource by ID"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Resource")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Zero-based index of resource to set")))),(0,l.kt)("h4",{id:"returns-1"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"this")),(0,l.kt)("td",{parentName:"tr",align:null},"* Instance for chaining"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"bind-basetexture-basetexture---void"},"bind: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(baseTexture",":"," BaseTexture) -",">"," void"))),(0,l.kt)("p",null,"Set the parent base texture."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"destroy----void"},"destroy: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"() -",">"," void"))),(0,l.kt)("p",null,"Call when destroying resource, unbind any BaseTexture object before calling this method, as reference counts are maintained internally.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"dispose----void"},"dispose: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"() -",">"," void"))),(0,l.kt)("p",null,"Destroy this BaseImageResource.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"load----promisethis"},"load: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"() -",">"," Promise","<","this",">"))),(0,l.kt)("p",null,"Load all the resources simultaneously"),(0,l.kt)("h4",{id:"returns-2"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Promise","<","this",">")),(0,l.kt)("td",{parentName:"tr",align:null},"* When load is resolved"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"resize-width-number-height-number---void"},"resize: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(width",":"," number, height",":"," number) -",">"," void"))),(0,l.kt)("p",null,"Trigger a resize event"),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"X dimension")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Y dimension"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"style-_renderer-renderer-_basetexture-basetexture-_gltexture-gltexture---boolean"},"style: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(_renderer",":"," Renderer, _baseTexture",":"," BaseTexture, _glTexture",":"," GLTexture) -",">"," boolean"))),(0,l.kt)("p",null,"Set the style, optional to override"),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_renderer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Renderer")),(0,l.kt)("td",{parentName:"tr",align:null},"yeah, renderer!")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("td",{parentName:"tr",align:null},"the texture")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_glTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"GLTexture")),(0,l.kt)("td",{parentName:"tr",align:null},"texture instance for this webgl context")))),(0,l.kt)("h4",{id:"returns-3"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"* ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," is success"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"unbind-basetexture-basetexture---void"},"unbind: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(baseTexture",":"," BaseTexture) -",">"," void"))),(0,l.kt)("p",null,"Unset the parent base texture."),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"update----void"},"update: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"() -",">"," void"))),(0,l.kt)("p",null,"Has been updated trigger event.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"upload-renderer-renderer-basetexture-basetexture-gltexture-gltexture---boolean"},"upload: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(renderer",":"," Renderer, baseTexture",":"," BaseTexture, glTexture",":"," GLTexture) -",">"," boolean"))),(0,l.kt)("p",null,"Uploads the texture or returns false if it cant for some reason. Override this."),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"renderer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Renderer")),(0,l.kt)("td",{parentName:"tr",align:null},"yeah, renderer!")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("td",{parentName:"tr",align:null},"the texture")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"glTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"GLTexture")),(0,l.kt)("td",{parentName:"tr",align:null},"texture instance for this webgl context")))),(0,l.kt)("h4",{id:"returns-4"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"* true is success"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"initfromarray-resources-arrayany-options-iautodetectoptions---void"},"initFromArray: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(resources",":"," Array","<","any",">",", options",":"," IAutoDetectOptions) -",">"," void"))),(0,l.kt)("p",null,"Used from ArrayResource and CubeResource constructors."),(0,l.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resources"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Array","<","any",">")),(0,l.kt)("td",{parentName:"tr",align:null},"Can be resources, image elements, canvas, etc. , length should be same as constructor length")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IAutoDetectOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"Detect options for resources"))))),(0,l.kt)("hr",null))}p.isMDXComponent=!0}}]);