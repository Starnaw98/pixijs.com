"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9492],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=i.createContext({}),l=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(t),h=o,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||a;return t?i.createElement(m,r(r({ref:n},d),{},{components:t})):i.createElement(m,r({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=h;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1262:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var i=t(2389),o=t(5893);function a(e){let{children:n,fallback:t}=e;return(0,i.Z)()?(0,o.jsx)(o.Fragment,{children:n?.()}):t??null}},7754:(e,n,t)=>{t.d(n,{Z:()=>b});var i=t(2949),o=t(7294),a=t(4184),r=t.n(a),s=t(2695);var p=t(2215),l=t(9604),d=t(5893);function c(e){let{code:n,onChange:t}=e;const a=(0,o.useRef)(null),r=(0,o.useCallback)((e=>{a.current=e}),[]);(0,o.useEffect)((()=>{const e=()=>{null!==a.current&&a.current.layout({})};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const{colorMode:s}=(0,i.I)();return(0,d.jsx)(l.ZP,{defaultLanguage:"javascript",value:n,defaultPath:"inmemory://model//src/index.ts",onChange:t,options:{lineNumbers:"off",padding:{top:24},minimap:{enabled:!1},fontSize:14,scrollBeyondLastLine:!1,scrollbar:{alwaysConsumeMouseWheel:!1}},onMount:r,theme:"dark"===s?"vs-dark":"light"})}const u=e=>{let{code:n,isPixiWebWorkerVersion:t,isPixiDevVersion:i,pixiVersion:a}=e;const r=(e=>(0,o.useMemo)((()=>({".babelrc":{code:JSON.stringify({presets:[["@babel/preset-env",{useBuiltIns:"entry",corejs:"3.29",targets:"last 2 chrome versions"}]]},null,2)},"src/styles.css":"body { margin: 0; overflow: hidden; }","src/index.js":e,"index.html":'\n<!DOCTYPE html>\n  <html>\n  <head>\n  <title>PixiJS Playground</title>\n  <meta charset="UTF-8" />\n  <link rel="stylesheet" href="src/styles.css">\n</head>\n<body>\n  <script src="src/index.js"><\/script>\n</body>\n</html>',"package.json":{code:JSON.stringify({scripts:{start:"parcel index.html --open",build:"parcel build index.html"}},null,2)}})),[e]))(n),{dependenciesKey:s,dependencies:p}=(e=>{let{isPixiWebWorkerVersion:n,isPixiDevVersion:t,pixiVersion:i}=e;return(0,o.useMemo)((()=>{const e=n?"@pixi/webworker":"pixi.js",o=e=>t?`${i}/${e}`:i,a=[e,"@pixi/graphics-extras","@pixi/math-extras"].reduce(((e,n)=>({...e,[n]:o(n)})),{});return{dependenciesKey:`${e}-${i}`,dependencies:a}}),[t,n,i])})({isPixiWebWorkerVersion:t,isPixiDevVersion:i,pixiVersion:a});return{files:r,key:`${s}-${n}`,customSetup:{entry:"index.html",dependencies:p,devDependencies:{"@babel/core":"^7.21.3","parcel-bundler":"^1.6.1"}}}},h={spWrapper:"spWrapper_XZV1",spLayout:"spLayout_lAOU",tutorial:"tutorial_bUbR",editorWrapper:"editorWrapper_YBAz",previewWrapper:"previewWrapper_AZey",showOutput:"showOutput_G2Cm",fullscreen:"fullscreen_QlZ5",example:"example_nyOC",sandpackLoadingOverlay:"sandpackLoadingOverlay_nYYO",loadingPulse:"loadingPulse_IxQv"};function m(e){let{mode:n,onCodeChanged:t}=e;const{code:i,updateCode:a}=(0,s.m4)(),{sandpack:p}=(0,s.X3)(),[l,u]=(0,o.useState)(!1),{activeFile:m,bundlerState:b}=p,g=(0,o.useCallback)((e=>{const n=e??"";a(n),t?.(n)}),[t,a]),x=(0,o.useCallback)((()=>{u((e=>!e))}),[]);return(0,d.jsxs)(s.sp,{className:r()(h[n],l&&h.showOutput),children:[(0,d.jsx)("div",{className:h.editorWrapper,children:(0,d.jsx)(c,{code:i,onChange:g},m)}),(0,d.jsxs)("div",{className:h.previewWrapper,children:[(0,d.jsx)(s.Gj,{showOpenInCodeSandbox:!0}),!b&&(0,d.jsx)("div",{className:h.sandpackLoadingOverlay})]}),(0,d.jsx)("button",{onClick:x,children:l?"Show Code":"Show Output"})]})}function b(e){let{code:n,onCodeChanged:t,isPixiWebWorkerVersion:a=!1,isPixiDevVersion:r=!1,pixiVersion:l=p.$,mode:c="example"}=e;const{colorMode:b}=(0,i.I)(),{key:g,files:x,customSetup:y}=u({code:n,isPixiDevVersion:r,isPixiWebWorkerVersion:a,pixiVersion:l});var f,v;return f="example",void 0===(v="example"===c)&&(v=!0),(0,o.useEffect)((()=>{const e=document.querySelector("main > .container");if(null!==e&&v)return e.classList.add(f),()=>{e.classList.remove(f)}}),[f,v]),(0,d.jsx)(s.oT,{template:"vanilla",theme:b,files:x,customSetup:y,options:{classes:{"sp-wrapper":h.spWrapper,"sp-layout":h.spLayout}},children:(0,d.jsx)(m,{mode:c,onCodeChanged:t})},g)}},2215:(e,n,t)=>{t.d(n,{$:()=>s,_:()=>p});var i=t(7294),o=t(1825);const a=o.map((e=>{let{versionLabel:n,version:t}=e;return{label:n,value:t}})),r=(e,n)=>t=>t[e]===n,s=o.find(r("latest",!0)).version,p=e=>{let{selectedVersionId:n,setURLState:t}=e;const s=(0,i.useCallback)((e=>t({pixiVersion:e},!0,!0)),[t]);return{selectedVersion:(0,i.useMemo)((()=>o.find(r("version",n))),[n]),handleVersionChanged:s,versionOptions:a}}},4173:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var i=t(902);var o=t(7462),a=t(7294),r=t(3905);const s={toc:[]};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Welcome to the PixiJS tutorial!"),(0,r.kt)("p",null,"Please go through the tutorial steps at your own pace and challenge yourself using the editor on the right hand side. Here PixiJS has already been included as guided under the ",(0,r.kt)("a",{parentName:"p",href:"/guides/basics/getting-started#loading-pixijs"},"Getting Started")," section. Let's start with the creation of a PixiJS canvas application and add its view to the DOM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create a PixiJS application of type cavas with specify background color and make it resizes to the iframe window\nconst app = new PIXI.Application() < HTMLCanvasElement > { background: '#1099bb', resizeTo: window };\n\n// Adding the application's view to the DOM\ndocument.body.appendChild(app.view);\n")),(0,r.kt)("p",null,"When you are ready, proceed to the next exercise using the ",(0,r.kt)("em",{parentName:"p"},"Next >")," button below or feel free to skip to any exercise using the drop-down menu on the top right hand corner of the card."))}p.isMDXComponent=!0;const l={toc:[]};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-sprite"},"Creating a Sprite"),(0,r.kt)("p",null,"So far all we've been doing is prep work. We haven't actually told PixiJS to draw anything. Let's fix that by adding an image to be displayed."),(0,r.kt)("p",null,"There are a number of ways to draw images in PixiJS, but the simplest is by using a ",(0,r.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/PIXI.Sprite.html"},"Sprite"),". We'll get into the details of how the scene graph works in a later guide, but for now all you need to know is that PixiJS renders a hierarchy of ",(0,r.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/PIXI.DisplayObject.html"},"DisplayObjects"),". A Sprite is a type of DisplayObject that wraps a loaded image resource to allow drawing it, scaling it, rotating it, and so forth."),(0,r.kt)("p",null,"Before PixiJS can render an image, it needs to be loaded. Just like in any web page, image loading happens asynchronously. We'll talk a lot more about resource loading in later guides. For now, we can use a helper method on the PIXI.Sprite class to handle the image loading for us:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JavaScript"},"// Magically load the PNG asynchronously\nconst bunny = PIXI.Sprite.from('https://pixijs.com/assets/bunny.png')\n")),(0,r.kt)("p",null,"Then we need to add our new sprite to the stage. The stage is simply a ",(0,r.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/PIXI.Container.html"},"Container")," that is the root of the scene graph. Every child of the stage container will be rendered every frame. By adding our sprite to the stage, we tell PixiJS's renderer we want to draw it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JavaScript"},"app.stage.addChild(bunny)\n")),(0,r.kt)("p",null,"Now let's set the Sprite's anchor and position it so that it's bang on at the center."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JavaScript"},"// center the sprite's anchor point\nbunny.anchor.set(0.5)\n\n// move the sprite to the center of the screen\nbunny.x = app.screen.width / 2\nbunny.y = app.screen.height / 2\n")))}d.isMDXComponent=!0;const c={toc:[]};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-an-update-loop"},"Writing an Update Loop"),(0,r.kt)("p",null,"While you ",(0,r.kt)("em",{parentName:"p"},"can")," use PixiJS for static content, for most projects you'll want to add animation. Our sample app is actually cranking away, rendering the same sprite in the same place multiple times a second. All we have to do to make the image move is to update its attributes once per frame. To do this, we want to hook into the application's ",(0,r.kt)("em",{parentName:"p"},"ticker"),". A ticker is a PixiJS object that runs one or more callbacks each frame. Doing so is surprisingly easy. Add the following to the end of your script block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Listen for animate update\napp.ticker.add((delta) => {\n    // just for fun, let's rotate mr rabbit a little\n    // delta is 1 if running at 100% performance\n    // creates frame-independent transformation\n    bunny.rotation += 0.1 * delta;\n});\n")),(0,r.kt)("p",null,"All you need to do is to call ",(0,r.kt)("inlineCode",{parentName:"p"},"app.ticker.add(...)"),", pass it a callback function, and then update your scene in that function. It will get called every frame, and you can move, rotate etc. whatever you'd like to drive your project's animations."))}u.isMDXComponent=!0;const h={toc:[]};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"you-did-it"},"You did it!"),(0,r.kt)("p",null,"Congratulations! Now you are ready for the real world ~"))}m.isMDXComponent=!0;const b={gettingStarted:[{title:"Getting Started",Content:p,code:"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({\n    background: '#1099bb',\n    resizeTo: window,\n});\n\ndocument.body.appendChild(app.view);\n"},{title:"Set up something",Content:d,code:"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({\n    background: '#1099bb',\n    resizeTo: window,\n});\n\ndocument.body.appendChild(app.view);\n",completedCode:"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({\n    background: '#1099bb',\n    resizeTo: window,\n});\n\ndocument.body.appendChild(app.view);\n\n// create a new Sprite from an image path\nconst bunny = PIXI.Sprite.from('https://pixijs.com/assets/bunny.png');\n\n// add to stage\napp.stage.addChild(bunny);\n\n// center the sprite's anchor point\nbunny.anchor.set(0.5);\n\n// move the sprite to the center of the screen\nbunny.x = app.screen.width / 2;\nbunny.y = app.screen.height / 2;\n"},{title:"Do something",Content:u,code:"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({\n    background: '#1099bb',\n    resizeTo: window,\n});\n\ndocument.body.appendChild(app.view);\n\n// create a new Sprite from an image path\nconst bunny = PIXI.Sprite.from('https://pixijs.com/assets/bunny.png');\n\n// center the sprite's anchor point\nbunny.anchor.set(0.5);\n\n// move the sprite to the center of the screen\nbunny.x = app.screen.width / 2;\nbunny.y = app.screen.height / 2;\n\napp.stage.addChild(bunny);\n",completedCode:"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({\n    background: '#1099bb',\n    resizeTo: window,\n});\n\ndocument.body.appendChild(app.view);\n\n// create a new Sprite from an image path\nconst bunny = PIXI.Sprite.from('https://pixijs.com/assets/bunny.png');\n\n// center the sprite's anchor point\nbunny.anchor.set(0.5);\n\n// move the sprite to the center of the screen\nbunny.x = app.screen.width / 2;\nbunny.y = app.screen.height / 2;\n\napp.stage.addChild(bunny);\n\n// Listen for animate update\napp.ticker.add((delta) =>\n{\n    // just for fun, let's rotate mr rabbit a little\n    // delta is 1 if running at 100% performance\n    // creates frame-independent transformation\n    bunny.rotation += 0.1 * delta;\n});\n"},{title:"You did it!",Content:m,code:"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({\n    background: '#1099bb',\n    resizeTo: window,\n});\n\ndocument.body.appendChild(app.view);\n\n// create a new Sprite from an image path\nconst bunny = PIXI.Sprite.from('https://pixijs.com/assets/bunny.png');\n\n// center the sprite's anchor point\nbunny.anchor.set(0.5);\n\n// move the sprite to the center of the screen\nbunny.x = app.screen.width / 2;\nbunny.y = app.screen.height / 2;\n\napp.stage.addChild(bunny);\n\n// Listen for animate update\napp.ticker.add((delta) =>\n{\n    // just for fun, let's rotate mr rabbit a little\n    // delta is 1 if running at 100% performance\n    // creates frame-independent transformation\n    bunny.rotation += 0.1 * delta;\n});\n"}]},g={wrapper:"wrapper_IMn0",content:"content_gcvh",card:"card_FbVX",navigator:"navigator_LnKI",interactionArea:"interactionArea_WAqO",dropdown:"dropdown_jD6X",selected:"selected_dCXs",footer:"footer_HOIY",next:"next_dXvJ",editorToggle:"editorToggle_OOG5",showEditor:"showEditor_d5qi",loader:"loader_bTGi"};var x=t(9960),y=t(1262),f=t(7754),v=t(5893);function w(e){let{data:n}=e,t=Number(window.location.hash.replace("#",""));(!t||t<=0||t>n.length)&&(t=1),(0,a.useEffect)((()=>{window.location.hash=t.toString()}),[t]);const{Content:i,code:o,completedCode:r}=n[t-1],[s,p]=(0,a.useState)(!1),l=()=>{p(!1)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:g.content,children:(0,v.jsxs)("div",{className:g.card,children:[(0,v.jsxs)("div",{className:g.navigator,children:[(0,v.jsx)("div",{className:g.interactionArea}),(0,v.jsx)("span",{children:`${t} / ${n.length}`}),(0,v.jsx)("ul",{className:g.dropdown,children:n.map(((e,n)=>(0,v.jsx)(x.Z,{onClick:l,to:`#${n+1}`,children:(0,v.jsx)("div",{className:`${n===t-1?g.selected:""}`,children:`${n+1}.  ${e.title}`})},n)))})]}),(0,v.jsx)(i,{}),r&&(0,v.jsx)("button",{onClick:()=>{p(!s)},children:s?"Reset":"Solution"}),(0,v.jsxs)("div",{className:g.footer,children:[t>1&&(0,v.jsx)(x.Z,{onClick:l,className:g.prev,to:"#"+(t-1),children:"<  Prev"}),t<n.length&&(0,v.jsx)(x.Z,{onClick:l,className:g.next,to:`#${t+1}`,children:"Next  >"})]})]})}),(0,v.jsx)(f.Z,{mode:"tutorial",code:r&&s?r:o})]})}function j(e){let{data:n}=e;const[t,i]=(0,a.useState)(!1);return(0,v.jsxs)("div",{className:`${g.wrapper} ${t?g.showEditor:""}`,children:[(0,v.jsx)("button",{onClick:()=>{i(!t)},className:g.editorToggle,children:t?"<  To Instructions":"To Editor >"}),(0,v.jsx)(y.Z,{fallback:(0,v.jsx)("h1",{className:g.loader,children:"LOADING..."}),children:()=>(0,v.jsx)(w,{data:n})})]})}function k(){return(0,v.jsx)(i.Z,{title:"Tutorial",description:"Description will go into a meta tag in <head />",noFooter:!0,children:(0,v.jsx)(j,{data:b.gettingStarted})})}},1825:e=>{e.exports=JSON.parse('[{"versionLabel":"dev","version":"dev","releaseNotes":"https://github.com/pixijs/pixijs/releases","build":"https://pixijs.download/dev/pixi.min.js","docs":"https://pixijs.download/release/docs","dev":true,"npm":"https://pkg.csb.dev/pixijs/pixijs/commit/557b53ba"},{"versionLabel":"v7.3.0-rc","version":"7.3.0-rc","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v7.3.0-rc","build":"https://pixijs.download/v7.3.0-rc/pixi.min.js","docs":"https://pixijs.download/v7.3.0-rc/docs/index.html","npm":"7.3.0-rc","prerelease":true},{"versionLabel":"v7.2.x","version":"7.2.4","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.2.4","build":"https://pixijs.download/v7.2.4/pixi.min.js","docs":"https://pixijs.download/v7.2.4/docs/index.html","npm":"7.2.4","latest":true},{"versionLabel":"v7.1.x","version":"7.1.4","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.1.4","build":"https://pixijs.download/v7.1.4/pixi.min.js","docs":"https://pixijs.download/v7.1.4/docs/index.html","npm":"7.1.4"},{"versionLabel":"v7.0.x","version":"7.0.5","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.0.5","build":"https://pixijs.download/v7.0.5/pixi.min.js","docs":"https://pixijs.download/v7.0.5/docs/index.html","npm":"7.0.5"},{"versionLabel":"v6.x","version":"6.5.10","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v6.5.10","build":"https://pixijs.download/v6.5.10/pixi.min.js","docs":"https://pixijs.download/v6.5.10/docs/index.html","npm":"6.5.10"},{"versionLabel":"v5.x","version":"5.3.12","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v5.3.12","build":"https://pixijs.download/v5.3.12/pixi.min.js","docs":"https://pixijs.download/v5.3.12/docs/index.html","npm":"5.3.12"},{"versionLabel":"v4.x","version":"4.8.9","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v4.8.9","build":"https://pixijs.download/v4.8.9/pixi.min.js","docs":"https://pixijs.download/v4.8.9/docs/index.html","npm":"4.8.9"}]')}}]);