"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[7312],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(r),g=a,m=l["".concat(c,".").concat(g)]||l[g]||d[g]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={hide_table_of_contents:!0,sidebar_position:4},s="Gradient Resource",i={unversionedId:"examples/textures/gradient-resource",id:"examples/textures/gradient-resource",title:"Gradient Resource",description:"",source:"@site/docs/examples/textures/gradient-resource.md",sourceDirName:"examples/textures",slug:"/examples/textures/gradient-resource",permalink:"/examples/textures/gradient-resource",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/textures/gradient-resource.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{hide_table_of_contents:!0,sidebar_position:4},sidebar:"examplesSidebar",previous:{title:"Gradient Basic",permalink:"/examples/textures/gradient-basic"},next:{title:"Promise",permalink:"/examples/assets/promise"}},c={},u=[],p={toc:u};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gradient-resource"},"Gradient Resource"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\n// PixiJS V5 Texture-Resource API + canvas2d gradient API + WebGL texImage2D\n// Look here for advanced upload function:\n// https://github.com/pixijs/pixi.js/blob/dev/packages/core/src/textures/resources/BaseImageResource.js#L54\n\nclass GradientResource extends PIXI.Resource\n{\n    constructor()\n    {\n    // pass width and height. (0,0) if we dont know yet\n    // gradient needs only 1 pixel height\n        super(256, 1);\n    }\n\n    upload(renderer, baseTexture, glTexture)\n    {\n        const { width } = this; // default size or from baseTexture?\n        const { height } = this; // your choice.\n\n        // temporary canvas, we dont need it after texture is uploaded to GPU\n        const canvas = document.createElement('canvas');\n\n        canvas.width = width;\n        canvas.height = height;\n\n        const ctx = canvas.getContext('2d');\n\n        const grd = ctx.createLinearGradient(0, 0, width, 0);\n\n        grd.addColorStop(0, 'rgba(255, 255, 255, 0.0)');\n        grd.addColorStop(0.3, 'cyan');\n        grd.addColorStop(0.7, 'red');\n        grd.addColorStop(1, 'green');\n\n        ctx.fillStyle = grd;\n        ctx.fillRect(0, 0, width, height);\n\n        // This info ios usseful if upload happens second time\n        // Some people use that to track used memory\n        glTexture.width = width;\n        glTexture.height = height;\n\n        // PURE WEBGL CALLS - that's what its all about.\n        // PixiJS cant wrap all that API, we give you acceess to it!\n        const { gl } = renderer;\n\n        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.premultiplyAlpha);\n        gl.texImage2D(baseTexture.target, 0, baseTexture.format, baseTexture.format, baseTexture.type, canvas);\n\n        return true;\n    }\n}\n\nconst app = new PIXI.Application({ antialias: true, resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\nconst gradBaseTexture = new PIXI.BaseTexture(new GradientResource());\n// Here you can fake baseTexture size to avoid resizing all sprites\n// There can be multiple baseTextures per gradient, but be careful:\n// resource will spawn more glTextures!\n\ngradBaseTexture.setSize(500, 50);\n\nconst gradTexture = new PIXI.Texture(gradBaseTexture);\n\nconst sprite = new PIXI.Sprite(gradTexture);\n\nsprite.position.set(100, 100);\nsprite.rotation = Math.PI / 8;\napp.stage.addChild(sprite);\n")))}l.isMDXComponent=!0}}]);