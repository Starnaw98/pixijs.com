"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[2622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={id:"PIXI.UniformGroup.pixi_core",title:"Class: PIXI.UniformGroup",sidebar_label:"PIXI.UniformGroup",custom_edit_url:null},o=void 0,i={unversionedId:"api/classes/PIXI.UniformGroup.pixi_core",id:"api/classes/PIXI.UniformGroup.pixi_core",title:"Class: PIXI.UniformGroup",description:"@pixi/core.UniformGroup",source:"@site/docs/api/classes/PIXI.UniformGroup.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.UniformGroup.pixi_core",permalink:"/api/classes/PIXI.UniformGroup.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.UniformGroup.pixi_core",title:"Class: PIXI.UniformGroup",sidebar_label:"PIXI.UniformGroup",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.TransformFeedbackSystem",permalink:"/api/classes/PIXI.TransformFeedbackSystem.pixi_core"},next:{title:"PIXI.VideoResource",permalink:"/api/classes/PIXI.VideoResource.pixi_core"}},u={},s=[{value:"new PIXI.UniformGroup: <span><code>(uniforms: object | Buffer, isStatic: boolean, isUbo: boolean) </code></span>",id:"new-pixiuniformgroup-uniforms-object--buffer-isstatic-boolean-isubo-boolean-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"group: <span><code>boolean</code></span>",id:"group-boolean",level:3},{value:"static: <span><code>boolean</code></span>",id:"static-boolean",level:3},{value:"ubo: <span><code>boolean</code></span>",id:"ubo-boolean",level:3},{value:"uniforms: <span><code>object</code></span>",id:"uniforms-object",level:3},{value:"dirtyId: <span><code>number</code></span>",id:"dirtyid-number",level:3},{value:"id: <span><code>number</code></span>",id:"id-number",level:3},{value:"Methods",id:"methods",level:2},{value:"uboFrom: <span><code>(uniforms: Dict&lt;any&gt; | Buffer, _static: boolean) -&gt; UniformGroup</code></span>",id:"ubofrom-uniforms-dictany--buffer-_static-boolean---uniformgroup",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".UniformGroup"),(0,a.kt)("p",null,"Uniform group holds uniform map and some ID's for work\n",(0,a.kt)("inlineCode",{parentName:"p"},"UniformGroup")," has two modes",":"),(0,a.kt)("p",null,"1",":"," Normal mode Normal mode will upload the uniforms with individual function calls as required"),(0,a.kt)("p",null,"2",":"," Uniform buffer mode This mode will treat the uniforms as a uniform buffer. You can pass in either a buffer that you manually handle, or or a generic object that PixiJS will automatically map to a buffer for you. For maximum benefits, make Ubo UniformGroups static, and only update them each frame."),(0,a.kt)("p",null,"Rules of UBOs",":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UBOs only work with WebGL2, so make sure you have a fallback!"),(0,a.kt)("li",{parentName:"ul"},"Only floats are supported (including vec","[2,3,4]",", mat","[2,3,4]",")"),(0,a.kt)("li",{parentName:"ul"},"Samplers cannot be used in ubo's (a GPU limitation)"),(0,a.kt)("li",{parentName:"ul"},"You must ensure that the object you pass in exactly matches in the shader ubo structure. Otherwise, weirdness will ensue!"),(0,a.kt)("li",{parentName:"ul"},"The name of the ubo object added to the group must match exactly the name of the ubo in the shader.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// UBO in shader:\nuniform myCoolData { // Declaring a UBO...\n    mat4 uCoolMatrix;\n    float uFloatyMcFloatFace;\n};\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// A new Uniform Buffer Object...\nconst myCoolData = new UniformBufferGroup({\n    uCoolMatrix: new Matrix(),\n    uFloatyMcFloatFace: 23,\n}}\n\n// Build a shader...\nconst shader = Shader.from(srcVert, srcFrag, {\n    myCoolData // Name matches the UBO name in the shader. Will be processed accordingly.\n})\n\n\n")),(0,a.kt)("p",null,"// TODO: @see"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"new-pixiuniformgroup-uniforms-object--buffer-isstatic-boolean-isubo-boolean-"},"new PIXI.UniformGroup: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"(uniforms",":"," object ","|"," Buffer, isStatic",":"," boolean, isUbo",":"," boolean) "))),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"uniforms"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"object ","|"," Buffer")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:null},"Custom uniforms to use to augment the built-in ones. Or a pixi buffer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isStatic"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:null},"Uniforms wont be changed after creation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isUbo"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:null},"If true, will treat this uniform group as a uniform buffer object."))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"group-boolean"},"group: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"boolean"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"true"))),(0,a.kt)("p",null,"Its a group and not a single uniforms.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"static-boolean"},"static: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"boolean"))),(0,a.kt)("p",null,"Flag for if uniforms wont be changed after creation.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"ubo-boolean"},"ubo: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"boolean"))),(0,a.kt)("p",null,"Flags whether this group is treated like a uniform buffer object.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"uniforms-object"},"uniforms: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"object"))),(0,a.kt)("p",null,"Uniform values")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"dirtyid-number"},"dirtyId: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("p",null,"Dirty version")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"id-number"},"id: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("p",null,"unique id")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"ubofrom-uniforms-dictany--buffer-_static-boolean---uniformgroup"},"uboFrom: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"(uniforms",":"," Dict","<","any",">"," ","|"," Buffer, _static",":"," boolean) -",">"," UniformGroup"))),(0,a.kt)("p",null,"A short hand function for creating a static UBO UniformGroup."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"uniforms"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Dict","<","any",">"," ","|"," Buffer")),(0,a.kt)("td",{parentName:"tr",align:null},"the ubo item")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_static"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"should this be updated each time it is used? defaults to true here!")))),(0,a.kt)("h4",{id:"returns"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"UniformGroup")),(0,a.kt)("td",{parentName:"tr",align:null}))))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);