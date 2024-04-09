"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"pixi-v8-launches","metadata":{"permalink":"/blog/pixi-v8-launches","source":"@site/blog/2024-03-05-pixi-v8-launches.md","title":"PixiJS v8 Launches! \ud83c\udf89","description":"PixiJS v8 The Future of 2D Web Graphics is Here!","date":"2024-03-05T00:00:00.000Z","formattedDate":"March 5, 2024","tags":[{"label":"PixiJS","permalink":"/blog/tags/pixi-js"},{"label":"WebGPU","permalink":"/blog/tags/web-gpu"},{"label":"WebGL","permalink":"/blog/tags/web-gl"}],"readingTime":9.86,"hasTruncateMarker":false,"authors":[{"name":"GoodBoyDigital","title":"PixiJS Creator","url":"https://github.com/GoodBoyDigital","image_url":"https://github.com/GoodBoyDigital.png","imageURL":"https://github.com/GoodBoyDigital.png"}],"frontMatter":{"title":"PixiJS v8 Launches! \ud83c\udf89","description":"PixiJS v8 The Future of 2D Web Graphics is Here!","slug":"pixi-v8-launches","authors":[{"name":"GoodBoyDigital","title":"PixiJS Creator","url":"https://github.com/GoodBoyDigital","image_url":"https://github.com/GoodBoyDigital.png","imageURL":"https://github.com/GoodBoyDigital.png"}],"tags":["PixiJS","WebGPU","WebGL"],"hide_table_of_contents":true,"keywords":["PixiJS","pixi.js","webGL","webGPU","performance","2d rendering","2d webGL","javascript graphics","game development"]},"nextItem":{"title":"PixiJS v8 Beta! \ud83c\udf89","permalink":"/blog/pixi-v8-beta"}},"content":"Get ready to push the boundaries of what\'s possible on the web! PixiJS v8 has landed, and it\'s a game-changer. Celebrating a decade of driving innovation, we\'ve supercharged PixiJS with the latest technological advancements, making it faster, more robust, and ridiculously powerful. From the seamless integration of WebGPU to leveraging modern JavaScript for smoother development, PixiJS v8 is all about empowering you to create jaw-dropping web experiences with ease. It\'s not just an update; it\'s the future of 2D web graphics, today. Dive in and let PixiJS v8 elevate your projects to unseen heights. Let\'s make the web a more beautiful place, one pixi(el) at a time.\\n\\n\x3c!--truncated--\x3e\\n\\n## \ud83d\ude80 Revolutionizing Web Graphics: Welcome to PixiJS v8\\n\\n![PixiJS logo](pixi.svg)\\n\\nIt\'s hard to believe that PixiJS has been part of the open-source community for a whopping ten years. In that time, the digital landscape has evolved tremendously, and so has PixiJS. We\'ve seen significant updates, like the transition to TypeScript, and we\'ve overhauled major parts of the engine, such as asset loading and WebGL integration.\\n\\nNow, we\'re thrilled to unveil PixiJS v8, arguably our most substantial update ever. This release is not just a reflection on the shortcomings of v7, which has served us well, but an acknowledgment that there\'s always room for improvement. Over time, we\'ve all encountered aspects of our code we wished we could refine. Often, the best solutions and insights emerge only after we\'ve stepped back from the problem, allowing us to see the bigger picture.\\n\\nWith PixiJS v8, our aim was to revisit and enhance the foundation of PixiJS, streamlining its core rather than just adding layers of code.\\n\\nOur vision for v8 was clear:\\n- **Longevity:** We designed v8 to stand the test of time, anticipating it will remain relevant and robust for another decade.\\n- **Innovation with WebGPU:** Embracing the latest in rendering technology, we\'ve seamlessly integrated WebGPU, not as an add-on to our existing WebGL renderer but as a core paradigm, ensuring PixiJS remains at the cutting edge as WebGL phases out.\\n- **Leveraging Modern JavaScript:** The advancements in JavaScript have significantly simplified development. We\'ve utilized features like object destructuring and options to make v8 cleaner and more powerful.\\n- **Correcting Past Oversights:** Every project has its lessons. With v8, we\'ve addressed and rearchitected certain aspects of PixiJS, reducing complexity and enhancing functionality, particularly in areas we felt were overengineered in the past (looking at you, textures!).\\n- **Boosting Performance:** PixiJS is already renowned for its speed. With v8, we\'ve unlocked even greater performance, making it faster across the board compared to v7.\\n\\nWe\'re incredibly proud of PixiJS v8 and eager to share the improvements and new features with you. While there are some breaking API changes, we\'ve provided a migration guide and ensured compatibility with v7 wherever possible. Get ready to experience the next level of 2D rendering with PixiJS v8!\\n\\n---\\n\\n## \ud83d\udd17 Quick links\\n- The new Docs for v8 can be found [here](https://pixijs.download/v8.0.0/docs/index.html)\\n- [Migration](8.x/guides/migrations/v8)\\n- [Examples](8.x/examples)\\n- [Open Games](https://github.com/pixijs/open-games)\\n\\n---\\n\\n## \ud83c\udf81 Whats New?\\nThere are numerous updates to discuss, more than can be covered in a single post! Below are the key highlights. For a more detailed exploration of these changes, be sure to follow the links provided above.\\n\\n#### \ud83d\udcc8 New Performance Bar\\n\\n![bunnies](image.png)\\n\\nThe performance of v8 is faster for **both** renderers. This means by using v8 and the WebGL renderer, all the speed improvements apply! This is mainly as we have taken great care to make a more reactive render loop that only updates what it needs to. Check out the numbers here:\\n\\n- **CPU** = time spent by the CPU rendering a single frame\\n- **GPU** = time spent by the GPU rendering a single frame\\n\\n| Bunny Situation | V7 CPU  | V8 CPU |CPU Dif | V7 GPU | V8 GPU | GPU dif |\\n|-----------------|------------|------------|--------------------|------------|------------|--------------------|\\n| 100k sprites all moving | ~50ms | ~15ms | <div style={{backgroundColor:\'lightgreen\', color:\'black\'}}>233%</div> | ~9ms | ~2ms | <div style={{backgroundColor:\'lightgreen\', color:\'black\'}}>350%</div> |\\n| 100k sprites not moving | ~21ms | ~0.12ms | <div style={{backgroundColor:\'lightgreen\', color:\'black\'}}>17417%</div> | ~9ms | ~0.5ms | <div style={{backgroundColor:\'lightgreen\', color:\'black\'}}>1700%</div> |\\n| 100k sprites (changing scene structure) | ~50ms | ~24ms | <div style={{backgroundColor:\'lightgreen\', color:\'black\'}}>108%</div> | ~9ms | ~2ms | <div style={{backgroundColor:\'lightgreen\', color:\'black\'}}>350%</div> |\\n\\nThese benchmark numbers are based on the Bunnymark test that you can try yourself.\\n\\n- [v7 Bunnymark](https://goodboydigital.github.io/pixi-bunnymark/dist/?version=v7&count=100000&renderer=webgpu)\\n- [v8 Bunnymark - WebGPU](https://goodboydigital.github.io/pixi-bunnymark/dist/?version=v8&count=100000&renderer=webgpu)\\n- [v8 Bunnymark - WebGL](https://goodboydigital.github.io/pixi-bunnymark/dist/?version=v8&count=100000&renderer=webgl)\\n- [Repo](https://github.com/GoodBoyDigital/pixi-bunnymark)\\n\\n#### \ud83d\udda5\ufe0f WebGPU Renderer\\n\\n![PixiJS + webGPU = love](image-1.png)\\n\\nWe\'ve implemented a WebGPU backend for rendering. Whilst this has created a better graphics paradigm under the hood and set us up for the future of rich web content, it\'s important to note that WebGPU does not automatically guarantee improved performance over WebGL in all scenarios, as PixiJS often encounters more limitations on the CPU side than the GPU. However, for scenes with numerous batch breaks, such as filters, masks, and blend modes, WebGPU may offer better performance due to its more modern to rendering. As WebGPU is relatively new, it\'s expected to enhance in speed over time, similar to the development of WebGL. It serves as a solid foundation for future advancements.\\n\\n\\n#### \ud83d\udce6 New Package Structure\\n\\nNo more \\"lerna.\\" PixiJS is now just one package with one import root: `import {stuff} from \u2018pixi.js\u2019`. This change means we now have much better tree shaking during app compilation, reducing bundle size if not imported.\\n\\nOld:\\n\\n```ts\\nimport { Sprite } from \\"@pixi/sprite\\";\\nimport { Graphic } from \\"@pixi/graphics\\";\\n```\\n\\nNew:\\n\\n```ts\\nimport { Sprite, Graphic } from \\"pixi.js\\";\\n```\\n\\n### \u2728 We *promise* the Renderer will work\\n\\nWhen initializing a renderer, this process is now asynchronous. This serves two purposes: firstly, identifying and loading the necessary renderer code to minimize what is loaded for your users. We only load the one backend that your user is using. There\'s no point in loading all the WebGL stuff if they are using WebGPU. Secondly, the initialization of WebGPU itself is an asynchronous process, so we need to have a promise in there somewhere!\\n\\n```ts\\nimport { Application, autoDetectRenderer } from \\"pixi.js\\";\\n\\nconst app = new Application();\\n\\n(async () => {\\n  await app.init({\\n    // application options\\n  });\\n\\n  // or\\n  const renderer = await autoDetectRenderer({}); // WebGL or WebGPU\\n\\n  // do pixi things\\n})();\\n```\\n\\n\\n#### \ud83c\udf1f Scene Upgrades\\n\\n![PixiJS logo](blend-modes.png)\\n\\n- The concept of render groups has been introduced, enabling containers to utilize GPU for their transformations. This facilitates a true 2D hardware-accelerated camera, ideal for navigating large static worlds through panning and zooming, similar to how a camera moves in a 3D environment rather than moving the world itself. This approach can significantly enhance performance.\\n\\n```ts\\nconst container = new Container({\\n  isRenderGroup:true // this containers transform is now handled on the GPU!\\n})\\n```\\n\\n- Another cool new change is that now blend modes and tints are inherited, much like transforms and alpha. This means you can now easily tint a container, and all its children will have the tint applied - same for blend modes, its as easy as:\\n\\n```\\n// will make all the children tinted red\\ncontainer.tint = \'red\'\\n// will make all the children have the add blend mode\\ncontainer.blendMode = \'add\'\\n```\\n\\nRendering to a texture with antialiasing has been simplified; you only need to enable the new antialiasing property by setting it to true during the creation of a render texture or when applying a filter, similar to the process used for creating your renderer.\\n\\n```\\nconst texture = RenderTexture.create({\\n    width:100,\\n    height:100,\\n    antialias:true // easy as that\\n})\\n```\\n\\n- We have also added support for a wide range of Photoshop-like filters, This allows you to take your rendering to the next level! We have including all the classics:\\n  - ColorBlend, ColorBurnBlend, ColorDodgeBlend, DarkenBlend, DifferenceBlend, DivideBlend, ExclusionBlend, HardLightBlend, HardMixBlend, LightenBlend, LinearBurnBlend, LinearDodgeBlend, LinearLightBlend, LuminosityBlend, NegationBlend, OverlayBlend, PinLightBlend, SaturationBlend, SoftLightBlend, SubtractBlend, VividLightBlend.\\n - It\'s important to mention that these are essentially filters at the core, so it\'s advisable not to overuse them to avoid potential slowdowns.\\n\\n```ts\\nimport `pixi.js/advanced-blend-modes` // make sure to include them in you lib! (or cherry pick one!)\\n\\nmyContainer.blendMode = \'color-burn` // easy!\\n```\\n\\n#### \ud83c\udfa8 Graphics Upgrades\\n\\n![alt text](image-4.png)\\n\\n- The Graphics API has undergone changes to become more intuitive and user-friendly, closely resembling the HTML Canvas 2D context API. For instance, drawing and filling a rectangle is simplified as follows:\\n\\n  ```ts\\n  graphics\\n      .rect(50, 50, 100, 100)\\n      .fill(\'blue\');\\n  ```\\n\\n- A `GraphicsContext` has been introduced, powering all graphics operations. Similar to how one texture can be used across many sprites, a single GraphicsContext can now be utilized by multiple Graphics objects, enhancing efficiency and flexibility.\\n\\n- Support for SVG drawing has been added. For example:\\n\\n  ```ts\\n  graphics.svg(\'M 100 350 q 150 -300 300 0\');\\n  ```\\n\\n- Gradient fill support has been introduced, currently limited to linear gradients, allowing for more visually engaging designs.\\n\\n- The new `GraphicsPath` class enables the drawing and sharing of shapes. This feature is particularly useful as it allows for the creation of paths that can then be transformed into Mesh geometry using the `buildGeometryFromPath` function, opening up new possibilities for intricate and detailed graphic designs.\\n\\n```\\n  const path = new GraphicsPath()\\n      .rect(-50, -50, 100, 100)\\n\\n  // create geometry from the path:\\n  const geometry = buildGeometryFromPath({\\n      path,\\n  });\\n\\n  const mesh = new Mesh({\\n      geometry,\\n      texture: Texture.WHITE,\\n  });\\n\\n```\\n\\nFor more information on these graphics upgrades and guidance on how to adapt to the enhanced Graphics API, please refer to the [migration guide](/8.x/guides/migrations/v8), or why not jump in and play with some [examples](8.x/examples/graphics/simple).\\n\\n#### \ud83d\udcdd Text Upgrades\\n\\nText has been upgraded to allow for better performance and usability! We have also integrated HTMLText into v8 as standard.\\n\\nBitmapFonts can now be generated on the fly or installed upfront as you prefer. They dynamically add characters as the font\'s glyphs are required, saving on memory. The layout of bitmap text is almost identical to the layout of the default text now, making it easier to switch between the two depending on your needs.\\n\\n```ts\\n\\nconst myText = new BitmapText({\\n  text: \'hello im a bitmap font!\',\\n  // font will be dynamically created\\n  style:{\\n    fontFamily: \'Outfit\',\\n    fontSize: 12,\\n    fill: \'red\',\\n  }\\n})\\n```\\nText fills and strokes now conform to the same fills and strokes as graphics. This means Gradients, textures, and all the fun ways you can fill and stroke graphics can now be applied to Text.\\n\\n```ts\\nconst myText = new Text({\\n  text: \'hello im some fancy text\',\\n  // font will be dynamically created!\\n  style:{\\n    fontFamily: \'Outfit\',\\n    fontSize: 12,\\n    fill: { texture, color:\'red\'} // same as graphics api fills\\n    stroke: { width:3, color:\'blue\' } // same as graphics api strokes\\n  }\\n})\\n```\\n\\n\\n## \ud83e\udd1d What now? Get involved!\\n\\nAs PixiJS v8 takes its first steps into the world, we\'re eager to see it grow with your feedback and contributions. Now we know things won\'t be perfect, but we\'re committed to quick responses on [GitHub](https://github.com/pixijs/pixijs) and [Discord](https://discord.gg/nrnDP9wtyX) to any issues that arise, valuing your input to make PixiJS even better.\\n\\nA heartfelt thanks to our early adopters (everyone in [here](https://discord.com/channels/734147990985375826/1143191340230914068)) for testing the limits of v8, to our dedicated contributors and team for their hard work. Your efforts and insights are invaluable to us. We could not have gotten here without you!\\n\\nA final big shout-out to PlayCo for their support in making this release a reality!\\n\\nLet\'s continue to innovate and push the boundaries of web graphics together. Your engagement is key to PixiJS\'s evolution, and we\'re excited to see where we can go with your help.\\n\\n## \ud83d\udcf2 Keep in touch\\n\\nTo stay in the loop, we invite you to follow [Doormat23](https://twitter.com/Doormat23) and [PixiJS](https://twitter.com/PixiJS) on social media, where we\'ll be unveiling more exciting updates shortly. Alternatively, you can join our vibrant community on [Discord](https://discord.gg/nrnDP9wtyX) for direct engagement and real-time chit-chats."},{"id":"pixi-v8-beta","metadata":{"permalink":"/blog/pixi-v8-beta","source":"@site/blog/2023-10-03-pixi-v8-beta.md","title":"PixiJS v8 Beta! \ud83c\udf89","description":"PixiJS v8 The Future of 2D Web Graphics Is (almost!) Here!","date":"2023-10-03T00:00:00.000Z","formattedDate":"October 3, 2023","tags":[{"label":"PixiJS","permalink":"/blog/tags/pixi-js"},{"label":"WebGPU","permalink":"/blog/tags/web-gpu"},{"label":"WebGL","permalink":"/blog/tags/web-gl"}],"readingTime":5.255,"hasTruncateMarker":true,"authors":[{"name":"GoodBoyDigital","title":"PixiJS Creator","url":"https://github.com/GoodBoyDigital","image_url":"https://github.com/GoodBoyDigital.png","imageURL":"https://github.com/GoodBoyDigital.png"}],"frontMatter":{"title":"PixiJS v8 Beta! \ud83c\udf89","description":"PixiJS v8 The Future of 2D Web Graphics Is (almost!) Here!","slug":"pixi-v8-beta","authors":[{"name":"GoodBoyDigital","title":"PixiJS Creator","url":"https://github.com/GoodBoyDigital","image_url":"https://github.com/GoodBoyDigital.png","imageURL":"https://github.com/GoodBoyDigital.png"}],"tags":["PixiJS","WebGPU","WebGL"],"hide_table_of_contents":true,"keywords":["PixiJS","pixi.js","webGL","webGPU","performance","2d rendering","2d webGL","javascript graphics","game development"]},"prevItem":{"title":"PixiJS v8 Launches! \ud83c\udf89","permalink":"/blog/pixi-v8-launches"},"nextItem":{"title":"Introducing the PixiJS Universe!","permalink":"/blog/pixi-universe"}},"content":"We\'re thrilled to offer an exclusive preview of the future of 2D web graphics with the Beta release of PixiJS v8. Although not yet finalized, this Beta iteration is packed with killer performance improvements and features we\'re eager for you to start playing with!\\n\\nOver the course of a decade\u2014yes, you read that right, ten years!\u2014we\'ve implemented significant changes to the PixiJS engine. But the advancements in this new release are among the most monumental we\'ve ever made!\\n\\n\x3c!--truncate--\x3e\\n\\nTwo driving factors catalysed our approach to re-engineering the codebase and rendering pipeline in v8:\\n\\n### 1. \ud83d\ude0d Embracing WebGPU\\n\\n![PixiJS + webGPU = love](image-1.png)\\n\\nThe newcomer WebGPU offers a substantial performance improvement over its predecessor, WebGL. It propels web computations and graphics into a new era, providing a more efficient and robust API. Soon, it will be the go-to method for rendering most GPU-powered content on the web.\\n\\nThis shift is reminiscent of PixiJS\'s initial launch. At that time, WebGL was new and only available in a handful of desktop browsers, while Canvas was ubiquitous. PixiJS\'s standout feature was its ability to first attempt rendering with WebGL and then fall back to Canvas as a Plan B. This approach allowed PixiJS content to immediately benefit as WebGL gained traction. Fast forward to today, and WebGL is now [available on 95% of browsers](https://caniuse.com/webgl).\\n\\nHistory is repeating itself with WebGPU, currently supported in only a few desktop browsers and roughly [27% of the market](https://caniuse.com/webgpu). However, it\'s only a matter of time before it becomes universally supported. PixiJS aims to execute the same fallback strategy, allowing you to always leverage the best technology available without needing to rewrite your code. This is precisely what version 8 achieves and will future proof everything we make for another ten years :D\\n\\n### 2. \ud83d\ude80 Turbocharging Performance\\n\\n![bunnies](image.png)\\n\\nPixiJS has always been synonymous with speed and high-performance graphics. With v8, we\'ve revisited our architecture to optimize both static and dynamic rendering. While v7 is fast, it operates as a somewhat \u2018na\xefve\u2019 renderer.\\n\\n#### v7 approach:\\n\\n1. Traverse the scene graph and make sure all the transforms are correct\\n2. Traverse the scene graph a second time and do the following\\n   - Build batches to render\\n   - Upload the data to the GPU\\n   - Draw the batch to the screen.\\n\\n#### v8 approach\\n\\n1. Update the transform of *only things that changed*\\n2. Traverse the scene graph and construct a set of instructions.\\n3. Upload all scene data to GPU in one go.\\n4. Execute rendering based on the instructions.\\n\\nThere are three key changes to this loop that give us a performance bump.\\n\\n- First, we update only the elements that have changed. If nothing has moved, no code is executed, optimizing computational overhead.\\n- Second, if the scene graph remains unchanged in subsequent frames, we reuse the existing rendering instructions. This avoids the overhead of reconstructing these instructions for each frame.\\n- Third, if no elements in the scene change position, the data upload step (Step 3) is entirely skipped, thereby saving bandwidth and further reducing computational work.\\n\\nThe net effect of these improvements? A decent performance leap across varying use-cases:\\n\\n**CPU** = time spent by the cpu rendering a single frame\\n**GPU** = time spend by the gpu rendering a single frame\\n\\n| Bunny Situation | V7 CPU  | V8 CPU |CPU Dif | V7 GPU | V8 GPU | GPU dif |\\n|-----------------|------------|------------|--------------------|------------|------------|--------------------|\\n| 100k sprites all moving | ~50ms | ~15ms | <div style={{backgroundColor:\'lightgreen\', color:\'black\'}}>233%</div> | ~9ms | ~2ms | <div style={{backgroundColor:\'lightgreen\', color:\'black\'}}>350%</div> |\\n| 100k sprites not moving | ~21ms | ~0.12ms | <div style={{backgroundColor:\'lightgreen\', color:\'black\'}}>17417%</div> | ~9ms | ~0.5ms | <div style={{backgroundColor:\'lightgreen\', color:\'black\'}}>1700%</div> |\\n| 100k sprites (changing scene structure) | ~50ms | ~24ms | <div style={{backgroundColor:\'lightgreen\', color:\'black\'}}>108%</div> | ~9ms | ~2ms | <div style={{backgroundColor:\'lightgreen\', color:\'black\'}}>350%</div> |\\n\\nThese benchmark numbers are based on this Bunnymark test that you can try yourself!\\n\\n- [v7 Bunnymark](https://goodboydigital.github.io/pixi-bunnymark/dist/?version=v7&count=100000&renderer=webgpu)\\n- [v8 Bunnymark - WebGPU](https://goodboydigital.github.io/pixi-bunnymark/dist/?version=v8&count=100000&renderer=webgpu)\\n- [v8 Bunnymark - WebGL](https://goodboydigital.github.io/pixi-bunnymark/dist/?version=v8&count=100000&renderer=webgl)\\n- [Repo](https://github.com/GoodBoyDigital/pixi-bunnymark)\\n\\n\\nPlease have a play, you can fiddle with the parameters in the url to change the number of bunnies. Curious to see what numbers all of you get!\\n\\nBest of all, these improvements apply to WebGPU *and* the WebGL renderer. As with all of PixiJs\u2019s party tricks, this all happens automatically :D\\n\\n### But Wait, There\'s More!\\n\\nWhile the two key drivers behind this overhaul were performance and usability, we didn\'t stop there. We\'ve seized this opportunity to enhance the API and introduce a plethora of new features to the engine\u2014far too many to encapsulate in a single post!\\n\\nStay tuned for upcoming blog posts where we\'ll delve deeper into these additional improvements and API refinements, empowering you to create even more remarkable projects. For a comprehensive overview of what\'s new, don\'t miss the [**release notes**](https://github.com/pixijs/pixijs/releases/tag/v8.0.0-beta.0).\\n\\nAs a crucial note, PixiJS v8 retains much of the familiar API despite undergoing significant internal updates. Our changes are geared toward making PixiJS more robust and user-friendly. When you encounter modifications, rest assured that the v7 methodology will continue to work\u2014you\'ll simply see a deprecation warning, guiding you towards optimal practices.\\n\\n### Over to you!\\n\\nAs we progress toward the release candidate, now is the perfect time for you to dive in and explore v8. Your feedback at this stage is invaluable for fine-tuning our engine. We invite you to share your thoughts\u2014the good, the bad, and the ugly\u2014report bugs, and even contribute code. Together, we can elevate PixiJS to unprecedented heights.\\n\\n\ud83d\udc47 Don\'t wait\u2014dive right in!\\n[Explore the PixiJS v8 Codebase on GitHub](https://github.com/pixijs/pixijs/tree/dev)\\n\\n### Steps to install:\\n\\nvia npm you can install the beta version like so:\\n\\n```\\nnpm install pixi.js@prerelease-v8\\n```\\n\\nthen you can create the most appropriate renderer using the new `autoDetectRenderer` function:\\n\\n```\\nimport { autoDetectRenderer } from \\"pixi.js\\";\\n\\nasync function init()\\n{\\n  const renderer = await autoDetectRenderer({\\n    // any settings\\n  }); // will return a WebGL or WebGPU renderer\\n}\\n```\\n\\nStart experimenting with PixiJS v8 Beta today and join us in shaping the future of 2D web graphics! \ud83c\udf89\\n\\n### Keep in touch!\\n\\n\\"To stay in the loop, we invite you to follow [Doormat23](https://twitter.com/Doormat23) and [PixiJS](https://twitter.com/PixiJS) on social media, where we\'ll be unveiling more exciting updates shortly. Alternatively, you can join our vibrant community on [Discord](https://discord.gg/nrnDP9wtyX) for direct engagement and real-time conversations."},{"id":"pixi-universe","metadata":{"permalink":"/blog/pixi-universe","source":"@site/blog/2023-02-17-pixi-universe.md","title":"Introducing the PixiJS Universe!","description":"PixiJS v2 Website Brief Description","date":"2023-02-17T00:00:00.000Z","formattedDate":"February 17, 2023","tags":[{"label":"PixiJS","permalink":"/blog/tags/pixi-js"},{"label":"PixiJS Universe","permalink":"/blog/tags/pixi-js-universe"}],"readingTime":10.315,"hasTruncateMarker":true,"authors":[{"name":"Zyie","title":"PixiJS Maintainer","url":"https://github.com/zyie","image_url":"https://github.com/zyie.png","imageURL":"https://github.com/zyie.png"}],"frontMatter":{"title":"Introducing the PixiJS Universe!","description":"PixiJS v2 Website Brief Description","slug":"pixi-universe","authors":[{"name":"Zyie","title":"PixiJS Maintainer","url":"https://github.com/zyie","image_url":"https://github.com/zyie.png","imageURL":"https://github.com/zyie.png"}],"tags":["PixiJS","PixiJS Universe"],"hide_table_of_contents":true,"keywords":["keyword","for","search","engines"]},"prevItem":{"title":"PixiJS v8 Beta! \ud83c\udf89","permalink":"/blog/pixi-v8-beta"}},"content":"We are excited to announce the launch of the PixiJS Universe, an initiative to further enhance the capabilities of PixiJS and make it even easier for developers to create amazing games and apps.\\n\\n\x3c!--truncate--\x3e\\n\\nFor years, PixiJS has been the most popular 2D renderer for the web, but it was always \\"just a rendering engine.\\" The community has created many great tools to help developers build games and applications with PixiJS, but we lacked the manpower to maintain and improve these tools, causing fragmentation in the community.\\nTo address this, Playco has assembled a dedicated team of developers who will work on PixiJS full-time. Over the next 12 months, we have more than ten projects planned, and in this announcement, we would like to introduce some of them.\\n\\n## Phase 1\u200b\\nWe have several new projects in the works, and we are releasing them in four phases over the year. We are currently nearing the end of phase 1, which has seen the release of several exciting new tools and libraries for PixiJS:\\n\\n### PixiJS Website\u200b\\nFirst up we are excited to announce that we will be releasing a beta version of our new website for PixiJS.\\n\\nThe current documentation has suffered from long-term organic growth over the years with little structure and as such much of the PixiJS documentation is fragmented across multiple sites. This new website will put everything you need in one place and be easily searchable.\\n\\nWe are also planning on improving the documentation and adding more guides and examples, as well as considering translating the documentation into other languages.\\n\\nIf you have any ideas on how to improve the site please let us know!\\n- [Github Repo](https://github.com/pixijs/pixijs.com)\\n\\n### PixiJS React\u200b\\nNext up is PixiJS React. A library that provides a way to use PixiJS in React applications. PixiJS React is a continuation of the `react-pixi` library created by Patrick Brouwer, which has been widely used by the PixiJS community in React projects. PixiJS has taken over maintenance of the library and is dedicated to improving the library\'s performance, documentation, and support for new features.\\n\\nThe library provides an easy-to-use interface that makes it easy for developers to create React applications with PixiJS. The library integrates all the core features of PixiJS and allows you to create custom components for 3rd party libraries.\\n\\n- [Github Repo](https://github.com/pixijs/pixi-react)\\n\\n### PixiJS Open Games\u200b\\nWe have now released a new repository called \\"PixiJS Open Games\\". This is a collection of open-source games that showcases how to use PixiJS to create games and is released under the MIT license. The purpose of these games is to provide professional examples of how to use PixiJS for game development.\\n\\nThe first two games released are a match-3 game and a bubble shooter game. These games not only demonstrate how to use PixiJS for game development but also how to use other libraries such as PixiJS UI and AssetPack. We also have more games planned for release, which will demonstrate how to use PixiJS with other libraries such as PixiJS Layout and PixiJS React.\\n\\nPixiJS Open Games will hopefully be a valuable resource for game developers who want to learn how to use PixiJS for game development and will also be a great source of inspiration for developers looking to create their own games using PixiJS. The project is available on GitHub for anyone who wants to explore the code or contribute to the project.\\n\\n- [Github Repo](https://github.com/pixijs/open-games)\\n- [Play Puzzling Potions](https://puzzling-potions.netlify.app/)\\n- [Play Bubbo Bubbo](https://bubbo-bubbo.netlify.app/)\\n\\n### PixiJS UI & PixiJS Layout\u200b\\nPixiJS UI is a new library for developers who want to create beautiful and functional user interfaces with PixiJS. The library includes a range of components such as buttons, checkboxes, sliders, text inputs, scroll views, lists, radio buttons, and progress bars, which can be easily integrated into your game. These components are highly customizable, allowing you to tweak the appearance and behaviour of each element to fit your game\'s specific needs.\\n\\nPixiJS UI has been used in all of the open-source games, so feel free to check these out for real-world examples.\\n\\n- [PixiJS UI Github Repo](https://github.com/pixijs/ui)\\n\\nPixiJS Layout is another library that can make your life as a developer easier. This library enables you to create responsive layouts using PixiJS, which means you can design interfaces that adapt to different screen sizes and aspect ratios. PixiJS Layout works well with PixiJS UI, allowing you to combine both libraries to create complex, dynamic interfaces that respond to user input and screen changes.\\n\\nWith PixiJS Layout, you have the flexibility to create resizable layouts that can be adjusted to fit any screen size or device. This means that your game\'s interface can look great on everything from small mobile devices to large desktop displays.\\n\\nPixiJS Layout is still under development but will be ready in the next few weeks\\n\\n- [PixiJS Layout Github Repo](https://github.com/pixijs/layout)\\n\\n### AssetPack\u200b\\nFinally, for phase 1 we are announcing AssetPack.\\n\\nAsset management is an important part of developing applications, and the new AssetPack library aims to make this process easier. AssetPack is a framework-agnostic library that can be used with any framework, including PixiJS, ThreeJS, and Phaser. It provides a range of features that help developers manage their assets efficiently.\\nThe key feature of AssetPack is the ability to automatically generate new assets on the fly. For example, you can provide it with a folder of individual images and it will generate sprite sheets, which can significantly improve the performance of your application. It also provides plugins to generate mipmaps, convert fonts to different formats, convert audio to different formats, compress images, and minify JSON. These features help developers optimize their assets for faster loading times, better performance, and improved user experience.\\n\\nWe will soon be releasing a new blog post that provides more details on how to use it. With its many useful features and framework-agnostic design. However, if you want to get stuck in today then check out the GitHub repo\\n\\n- [Github Repo](https://github.com/pixijs/assetpack)\\n\\n## Phase 2\u200b\\nPhase 2 will begin shortly and aims to make it easier to work with PixiJS applications.\\n\\n### PixiJS JumpStart\u200b\\nJumpstart is a new CLI tool being developed by the PixiJS team to simplify the process of creating new PixiJS applications. With this tool, developers will no longer need to set up complicated tooling or worry about setting up different bundlers and frameworks. The tool will handle all the setup for you, allowing you to focus on building your application.\\n\\nJumpstart will be similar to other CLI tools such as Create-React-App or Create-Vue, which have become popular in the front-end development community. The tool will provide templates for different bundlers and frameworks, including webpack, parcel, rollup, and more. This will make it easy for developers to get started with PixiJS regardless of their preferred tools and workflows. With Jumpstart, you\'ll be able to create a new PixiJS application in just a few minutes and start building right away.\\n\\n### PixiJS Dev Tools\u200b\\nPixiJS dev tools will be a browser extension that is planned to be released soon to help developers debug their PixiJS applications. This tool aims to make it easier for developers to understand the inner workings of PixiJS, optimize their code, and follow best practices. It is designed to help developers diagnose performance issues and visualize the resources that their applications are consuming.\\n\\nOne of the key features of the PixiJS Dev Tools is its ability to help developers understand the complex process of batching in PixiJS. Batching is a technique used to optimize the rendering of multiple objects in the same draw call. This process can be complicated to understand, especially for new developers. PixiJS Dev Tools aims to make it easier to debug and optimize the rendering of objects.\\n\\nOverall, PixiJS Dev Tools will be a powerful tool that will make it easier for developers to build high-performance, visually stunning applications with PixiJS. By providing developers with a deeper understanding of the inner workings of PixiJS, this toolset will help developers optimize their code and create more efficient and engaging applications.\\n\\n## Phase 3\u200b\\nPhase 3 is where our long-term projects start to be revealed. These are major changes to the PixiJS ecosystem that we are incredibly excited about\\n\\n### Comet\u200b\\nComet will be a new editor that aims to make it easier than ever to design and create games and applications with PixiJS. With its intuitive and user-friendly interface, the editor is designed to appeal to both designers and developers, allowing both groups to collaborate and work more efficiently.\\n\\nOne of the standout features of Comet is the visual interface it provides for creating and editing scenes, sprites, animations, and more. This means that designers can create and edit complex scenes without ever having to write a single line of code. The editor provides a range of tools and options for creating sprites, animations, and other game elements, making it easy to get started with creating a game or application.\\n\\nIn addition, developers will appreciate the runtime player feature, which allows them to easily recreate scenes in their own applications. This makes it easy to test and iterate on designs, ensuring that the final product is both functional and visually appealing. And with multi-user, real-time collaboration, Comet makes it easy for teams to work together, sharing assets and ideas and creating high-quality games and applications in record time.\\n\\n### PixiJS v8\u200b\\nPixiJS v8 will be the next major release that represents a complete rewrite of PixiJS from the ground up. The development team has leveraged their extensive experience over many years to make improvements and optimizations to the core PixiJS engine. The new version of PixiJS is designed to be faster and more efficient, providing a significant improvement in rendering performance compared to v7 (currently sitting at x2)\\n\\nOne of the most exciting features of PixiJS v8 is the inclusion of first-class support for WebGPU, which is a new graphics API that is being developed by major browser vendors. This will enable developers to take advantage of advanced GPU capabilities, which can significantly improve the performance of graphics-intensive applications. In addition to WebGPU support, the PixiJS team has also made a significant effort to optimize the engine for the canvas renderer, which will be available as a first-class option for developers looking to reduce bundle size.\\n\\nOverall, PixiJS v8 represents a major leap forward for us, developers can expect a much faster and more efficient engine that is better suited for building complex, graphics-intensive applications.\\n\\n## Phase 4\u200b\\nPhase 4 represents a leap into new territory for PixiJS as we look to delve deeper into areas outside of strictly 2D rendering.\\n\\n### PixiJS 3D\u200b\\nFor years, Goodboy (now Playco) has had an internal 3D engine called Odie that was built on top of PixiJS. We are now planning to open-source it, which is exciting for those of you who want to seamlessly mix 2D and 3D content in your games or applications. With PixiJS 3D, you will no longer need to switch between engines or frameworks to incorporate 3D elements in your project.\\n\\nAlthough this is a long-term project, the team is making progress and plans to share more information later in the year. This release will greatly expand PixiJS\'s capabilities and give developers even more flexibility when building their applications.\\n\\n### PixiJS Game Engine\u200b\\nFinally, we are thrilled to announce that we will be working on a new library called PixiJS Game Engine. This game engine aims to provide everything you would expect from a 2D/3D game engine and will offer many features and tools to make game development easier and more efficient.\\n\\nSome of the features of PixiJS Game Engine will include support for physics engines, audio, input handling, asset loading and management, state management, animation and tweening, and more.\\n\\n## Conclusion\\nWe\'ve shared a lot of exciting news about new projects and updates coming to the PixiJS community. There\'s a lot to look forward to in the upcoming months.\\n\\nWe want to extend our sincere thanks to the PixiJS community, its contributors, and Playco for making all of this possible. We\'re excited to see what you\'ll create with these new tools and resources, and we look forward to continuing to support and grow the PixiJS ecosystem. Be sure to check out the GitHub links mentioned above and stay tuned for more updates on the PixiJS Universe!"}]}')}}]);