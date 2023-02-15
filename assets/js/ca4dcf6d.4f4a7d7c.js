"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[6790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,m=c["".concat(u,".").concat(k)]||c[k]||s[k]||a;return n?l.createElement(m,o(o({ref:t},d),{},{components:n})):l.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},53122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const a={id:"PIXI.IRendererOptions.pixi_core",title:"Interface: PIXI.IRendererOptions",sidebar_label:"PIXI.IRendererOptions",custom_edit_url:null},o=void 0,i={unversionedId:"api/interfaces/PIXI.IRendererOptions.pixi_core",id:"api/interfaces/PIXI.IRendererOptions.pixi_core",title:"Interface: PIXI.IRendererOptions",description:"@pixi/core.IRendererOptions",source:"@site/docs/api/interfaces/PIXI.IRendererOptions.pixi_core.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/PIXI.IRendererOptions.pixi_core",permalink:"/api/interfaces/PIXI.IRendererOptions.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.IRendererOptions.pixi_core",title:"Interface: PIXI.IRendererOptions",sidebar_label:"PIXI.IRendererOptions",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.IRenderer",permalink:"/api/interfaces/PIXI.IRenderer.pixi_core"},next:{title:"PIXI.IRendererOptionsAuto",permalink:"/api/interfaces/PIXI.IRendererOptionsAuto.pixi_core"}},u={},p=[{value:"Summary",id:"summary",level:2},{value:"Extends",id:"extends",level:2},{value:"Members",id:"members",level:2},{value:"antialias: <span><code>boolean</code></span>",id:"antialias-boolean",level:3},{value:"autoDensity: <span><code>boolean</code></span>",id:"autodensity-boolean",level:3},{value:"background: <span><code>ColorSource</code></span>",id:"background-colorsource",level:3},{value:"backgroundAlpha: <span><code>number</code></span>",id:"backgroundalpha-number",level:3},{value:"backgroundColor: <span><code>ColorSource</code></span>",id:"backgroundcolor-colorsource",level:3},{value:"clearBeforeRender: <span><code>boolean</code></span>",id:"clearbeforerender-boolean",level:3},{value:"context: <span><code>IRenderingContext</code></span>",id:"context-irenderingcontext",level:3},{value:"height: <span><code>number</code></span>",id:"height-number",level:3},{value:"hello: <span><code>boolean</code></span>",id:"hello-boolean",level:3},{value:"powerPreference: <span><code>WebGLPowerPreference</code></span>",id:"powerpreference-webglpowerpreference",level:3},{value:"premultipliedAlpha: <span><code>boolean</code></span>",id:"premultipliedalpha-boolean",level:3},{value:"preserveDrawingBuffer: <span><code>boolean</code></span>",id:"preservedrawingbuffer-boolean",level:3},{value:"resolution: <span><code>number</code></span>",id:"resolution-number",level:3},{value:'useContextAlpha: <span><code>boolean | &quot;notMultiplied&quot;</code></span><span class="deprecated-tag"> Deprecated: since 7.0.0</span>',id:"usecontextalpha-boolean--notmultiplied-deprecated-since-700",level:3},{value:"view: <span><code>ICanvas</code></span>",id:"view-icanvas",level:3},{value:"width: <span><code>number</code></span>",id:"width-number",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".IRendererOptions"),(0,r.kt)("p",null,"Renderer options supplied to constructor."),(0,r.kt)("p",null,"// TODO: @see"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Properties"),(0,r.kt)("p",null,(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"antialias"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"WebGL Only.")," Whether to enable anti-aliasing. This may affect performance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoDensity"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the CSS dimensions of the renderer's view should be resized automatically.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"background"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"ColorSource")),(0,r.kt)("td",{parentName:"tr",align:null},"Alias for ",(0,r.kt)("inlineCode",{parentName:"td"},"backgroundColor"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"backgroundAlpha"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Transparency of the background color, value from ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," (fully transparent) to ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," (fully opaque).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"ColorSource")),(0,r.kt)("td",{parentName:"tr",align:null},"The background color used to clear the canvas. See PIXI.ColorSource for accepted color values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clearBeforeRender"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to clear the canvas before new render passes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"IRenderingContext")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"WebGL Only.")," User-provided WebGL rendering context object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The height of the renderer's view.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hello"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to log the version and type information of renderer to console.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"powerPreference"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"WebGLPowerPreference")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"WebGL Only.")," A hint indicating what configuration of GPU is suitable for the WebGL context, can be ",(0,r.kt)("inlineCode",{parentName:"td"},"'default'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'high-performance'")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"'low-power'"),". Setting to ",(0,r.kt)("inlineCode",{parentName:"td"},"'high-performance'")," will prioritize rendering performance over power consumption, while setting to ",(0,r.kt)("inlineCode",{parentName:"td"},"'low-power'")," will prioritize power saving over rendering performance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"premultipliedAlpha"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"WebGL Only.")," Whether the compositor will assume the drawing buffer contains colors with premultiplied alpha.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"preserveDrawingBuffer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"WebGL Only.")," Whether to enable drawing buffer preservation. If enabled, the drawing buffer will preserve its value until cleared or overwritten. Enable this if you need to call ",(0,r.kt)("inlineCode",{parentName:"td"},"toDataUrl")," on the WebGL context.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resolution"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The resolution / device pixel ratio of the renderer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useContextAlpha"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean ","|",' "notMultiplied"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Deprecated since 7.0.0, use ",(0,r.kt)("inlineCode",{parentName:"strong"},"premultipliedAlpha")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"backgroundAlpha")," instead."),(0,r.kt)("br",null),(0,r.kt)("br",null),"Pass-through value for canvas' context attribute ",(0,r.kt)("inlineCode",{parentName:"td"},"alpha"),". This option is for cases where the canvas needs to be opaque, possibly for performance reasons on some older devices. If you want to set transparency, please use ",(0,r.kt)("inlineCode",{parentName:"td"},"backgroundAlpha"),".","<","br /",">","<","br /",">",(0,r.kt)("strong",{parentName:"td"},"WebGL Only",":")," When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"'notMultiplied'"),", the canvas' context attribute ",(0,r.kt)("inlineCode",{parentName:"td"},"alpha")," will be set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"premultipliedAlpha")," will be to ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"view"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"ICanvas")),(0,r.kt)("td",{parentName:"tr",align:null},"The canvas to use as the view. If omitted, a new canvas will be created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The width of the renderer's view.")))))),(0,r.kt)("h2",{id:"extends"},"Extends"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GlobalMixins.IRendererOptions")),(0,r.kt)("h2",{id:"members"},"Members"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"antialias-boolean"},"antialias: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"boolean"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"false"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WebGL Only.")," Whether to enable anti-aliasing. This may affect performance.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"autodensity-boolean"},"autoDensity: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"boolean"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"false"))),(0,r.kt)("p",null,"Whether the CSS dimensions of the renderer's view should be resized automatically.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"background-colorsource"},"background: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"ColorSource"))),(0,r.kt)("p",null,"Alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundColor"),".")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"backgroundalpha-number"},"backgroundAlpha: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"1"))),(0,r.kt)("p",null,"Transparency of the background color, value from ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," (fully transparent) to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," (fully opaque).")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"backgroundcolor-colorsource"},"backgroundColor: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"ColorSource"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"0x000000"))),(0,r.kt)("p",null,"The background color used to clear the canvas. See PIXI.ColorSource for accepted color values.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"clearbeforerender-boolean"},"clearBeforeRender: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"boolean"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"true"))),(0,r.kt)("p",null,"Whether to clear the canvas before new render passes.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"context-irenderingcontext"},"context: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"IRenderingContext"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WebGL Only.")," User-provided WebGL rendering context object.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"height-number"},"height: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"600"))),(0,r.kt)("p",null,"The height of the renderer's view.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"hello-boolean"},"hello: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"boolean"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"false"))),(0,r.kt)("p",null,"Whether to log the version and type information of renderer to console.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"powerpreference-webglpowerpreference"},"powerPreference: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"WebGLPowerPreference"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WebGL Only.")," A hint indicating what configuration of GPU is suitable for the WebGL context, can be ",(0,r.kt)("inlineCode",{parentName:"p"},"'default'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'high-performance'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"'low-power'"),". Setting to ",(0,r.kt)("inlineCode",{parentName:"p"},"'high-performance'")," will prioritize rendering performance over power consumption, while setting to ",(0,r.kt)("inlineCode",{parentName:"p"},"'low-power'")," will prioritize power saving over rendering performance.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"premultipliedalpha-boolean"},"premultipliedAlpha: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"boolean"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"true"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WebGL Only.")," Whether the compositor will assume the drawing buffer contains colors with premultiplied alpha.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"preservedrawingbuffer-boolean"},"preserveDrawingBuffer: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"boolean"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"false"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WebGL Only.")," Whether to enable drawing buffer preservation. If enabled, the drawing buffer will preserve its value until cleared or overwritten. Enable this if you need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"toDataUrl")," on the WebGL context.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"resolution-number"},"resolution: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"PIXI.settings.RESOLUTION"))),(0,r.kt)("p",null,"The resolution / device pixel ratio of the renderer.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"usecontextalpha-boolean--notmultiplied-deprecated-since-700"},"useContextAlpha: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"boolean ","|",' "notMultiplied"')),(0,r.kt)("span",{class:"deprecated-tag"}," Deprecated: since 7.0.0")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"true"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Deprecated since 7.0.0, use ",(0,r.kt)("inlineCode",{parentName:"strong"},"premultipliedAlpha")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"backgroundAlpha")," instead."),"\nPass-through value for canvas' context attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha"),". This option is for cases where the canvas needs to be opaque, possibly for performance reasons on some older devices. If you want to set transparency, please use ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundAlpha"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WebGL Only",":")," When set to ",(0,r.kt)("inlineCode",{parentName:"p"},"'notMultiplied'"),", the canvas' context attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha")," will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"premultipliedAlpha")," will be to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"view-icanvas"},"view: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"ICanvas"))),(0,r.kt)("p",null,"The canvas to use as the view. If omitted, a new canvas will be created.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"width-number"},"width: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"800"))),(0,r.kt)("p",null,"The width of the renderer's view.")),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);