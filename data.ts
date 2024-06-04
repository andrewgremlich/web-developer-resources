export type Resource = {
	title: string;
	urls: string[];
};

export type Resources = {
	title: string;
	description: string;
	other: Resource[];
};

export type ResourceDisplay = {
	title: string;
	url: string;
	description?: string;
};

export const data: Resources = {
	title: "Web Developer Resources",
	description: "A collection of resources for a web developer",
	other: [
		{
			title: "Other Resource Collection sites",
			urls: [
				"https://web-dev-resources.com/#/",
				"https://www.dev-box.app/",
				"https://free-for.dev/#/",
			],
		},
		{
			title: "AI tools",
			urls: [
				"https://www.jasper.ai/",
				"https://contentbot.ai/hemingway-ai",
				"https://www.copy.ai/",
				"https://github.com/amusi/awesome-ai-awesomeness",
				"https://get.mem.ai/",
				"https://chat.openai.com/",
				"https://openai.com/dall-e-2/",
				"https://liner.ai/",
				"https://www.restorephotos.io/",
				"https://platform.openai.com/docs/api-reference",
				"https://docs.privategpt.dev/",
				"https://huggingface.co/",
				"https://huggingface.co/TheBloke/guanaco-65B-GPTQ",
				"https://huggingface.co/codellama/CodeLlama-70b-hf",
				"https://lmstudio.ai/",
				"https://www.deepai.org/",
				"https://faraday.dev/",
				"https://replicate.com/",
				"https://elevenlabs.io/",
				"https://www.toolify.ai/",
				"https://aistudio.google.com/",
				"https://openwebui.com/",
				"https://ollama.com/",
				"https://github.com/ultralytics/yolov5",
				"https://github.com/hailo-ai/hailo_model_zoo?tab=readme-ov-file",
			],
		},
		{
			title: "Analytics",
			urls: [
				"https://posthog.com/",
				"https://www.goatcounter.com/",
				"https://www.heap.io/lp/ppc-free-trial",
			],
		},
		{
			title: "APIs",
			urls: ["https://pirateweather.net/", "https://miragejs.com/"],
		},
		{
			title: "Authentication",
			urls: [
				"https://auth0.com/",
				"https://next-auth.js.org/",
				"https://stytch.com/",
			],
		},
		{
			title: "Books",
			urls: [
				"http://eloquentjavascript.net/3rd_edition/",
				"https://github.com/vinodotdev/node-to-rust/",
				"https://github.com/getify/You-Dont-Know-JS",
				"https://doc.rust-lang.org/book/",
				"https://google.github.io/comprehensive-rust/",
				"https://rust-exercises.com/",
				"https://github.com/EbookFoundation/free-programming-books",
				"https://github.com/mdn/content",
				"https://github.com/trekhleb/javascript-algorithms",
				"https://github.com/ossu/computer-science",
				"https://github.com/jwasham/coding-interview-university",
				"https://github.com/papers-we-love/papers-we-love",
				"https://exploringjs.com/deep-js/",
				"https://exploringjs.com/impatient-js/",
				"https://github.com/ryanmcdermott/clean-code-javascript",
			],
		},
		{
			title: "CMS",
			urls: ["https://tina.io/", "https://forestry.io/", "https://strapi.io/"],
		},
		{
			title: "Code Tools",
			urls: [
				"https://sourcegraph.com/search",
				"https://natto.dev/",
				"https://github.com/HaikuTeam/animator",
				"https://quokkajs.com/",
				"https://indiepen.tech/",
				"https://codepen.io/",
				"https://jsfiddle.net/",
				"https://codesandbox.io",
				"https://stackblitz.com/",
				"https://vscode.dev/",
				"https://glitch.com/",
				"https://replit.com/",
				"https://ascii-tree-generator.com/",
			],
		},
		{
			title: "CSS",
			urls: [
				"https://a.singlediv.com/",
				"https://speckyboy.com/replicate-bootstrap-grid-using-css-grid/",
				"https://css-tricks.com/the-shapes-of-css/",
				"https://simplecss.eu/",
				"https://css-tricks.com/the-css-box-model/",
				"https://csstriggers.com/",
				"https://cssdb.org/",
				"https://cssdb.co/",
				"https://www.jonathan-harrell.com/blog/what%E2%80%99s-the-deal-with-margin-collapse/",
				"https://cssreference.io/",
				"https://speckyboy.com/css-cheatsheets-resources-guides/",
				"https://gridcritters.com/",
				"https://gridbyexample.com/",
				"https://css-tricks.com/snippets/css/complete-guide-grid/",
				"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
				"https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/",
				"https://css-tricks.com/snippets/css/complete-guide-grid/",
				"https://css-tricks.com/re-pleasing-color-palettes/",
				"https://philipwalton.com/articles/what-no-one-told-you-about-z-index/",
				"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index",
				"https://loading.io/css/",
				"https://www.transition.style/",
				"https://boxshadows.com/",
				"https://cubic-bezier.com/#.17,.67,.83,.67",
				"https://cssgenerator.org/",
			],
		},
		{
			title: "Backend Resources/Database",
			urls: [
				"https://fauna.com/",
				"https://supabase.com/",
				"https://firebase.google.com/",
				"https://appwrite.io/",
				"https://www.crunchydata.com/developers/tutorials",
				"https://boot.dev/",
				"https://bit.io/",
				"https://neon.tech",
				"https://turso.tech",
				"https://planetscale.com/",
				"https://upstash.com/about",
				"https://www.learnpython.org/",
				"https://fly.io/",
				"https://www.convex.dev/",
				"https://www.prisma.io/",
			],
		},
		{
			title: "Design",
			urls: [
				"https://colorpicker.me/",
				"https://colorffy.com/color-scheme-generator",
				"https://color.adobe.com/create/color-wheel",
				"https://css-tricks.com/design-resource-sites/",
				"https://lawsofux.com/en/",
				"https://www.checklist.design/",
				"https://app.diagrams.net/",
				"https://thenounproject.com/",
				"https://canvas.apps.chrome/",
				"https://www.fotor.com/",
				"https://www.gimp.org/",
				"https://meshgradient.com/",
				"https://www.joshwcomeau.com/gradient-generator/",
				"https://www.stockio.com/",
				"https://phosphoricons.com/",
				"https://www.svgrepo.com/",
				"https://svgl.app/",
				"https://worldvectorlogo.com/",
				"https://www.curatorx.io/inspiration",
				"https://www.designsystems.com/",
				"https://www.ffonts.net/",
				"https://realfavicongenerator.net/",
				"https://www.piskelapp.com/",
				"https://allthefreestock.com/",
				"https://unsplash.com/",
				"https://feathericons.com/",
				"https://iconoir.com/",
				"http://fontawesome.io/icons/",
				"https://www.npmjs.com/package/react-icons",
				"https://react-demo.hugeicons.com/",
				"https://penpot.app/",
				"https://www.canva.com/",
				"https://paint.js.org/",
				"https://jspaint.app/#local:d0610fe432fb8",
				"https://express.adobe.com/",
			],
		},
		{
			title: "Email Services",
			urls: [
				"https://resend.com/",
				"https://www.mailgun.com/",
				"https://postmarkapp.com/",
				"https://mailchimp.com/",
				"https://sendgrid.com/",
			],
		},
		{
			title: "Extensions",
			urls: [
				"https://github.com/dutiyesh/chrome-extension-cli",
				"https://www.freecodecamp.org/news/how-to-make-a-cross-browser-extension-using-javascript-and-browser-apis-355c001cebba/",
				"https://github.com/fregante/Awesome-WebExtensions",
				"https://wxt.dev/",
				"https://extension.js.org/",
			],
		},
		{
			title: "Free Resources",
			urls: [
				"https://learnweb3.io/",
				"https://onesignal.com/pricing",
				"https://hackmd.io/",
				"https://resourcecards.com/",
				"https://appsco.pe/",
				"https://freefrontend.com/",
				"https://123apps.com/",
				"https://tinywow.com/",
				"https://vocalremover.org/",
				"https://www.trackawesomelist.com/",
				"https://standardnotes.com/",
				"https://ray.so/",
				"https://cs.vkrsi.com/",
				"https://carbon.now.sh/",
				"https://streamlinehq.com/",
				"https://codemyui.com/",
				"https://soundbible.com/",
				"https://saijogeorge.com/best-marketing-tools/",
				"https://www.remotestarterkit.com/",
				"https://www.smashingmagazine.com/category/freebies",
				"https://flowchart.fun/",
				"https://revealjs.com/",
				"https://slides.com/",
				"https://codebeat.co/",
				"https://www.amp-what.com/",
				"https://webflow.com/",
				"https://webcode.tools/",
				"https://easyretro.io/",
				"https://awesometechstack.com/",
				"https://boringavatars.com/",
				"https://runkit.com/home",
				"https://concourse-ci.org/",
				"https://namelix.com/",
				"https://readwise.io/",
				"https://commoncrawl.org/",
				"https://sdf.org/",
				"https://algorithm-visualizer.org/",
				"https://keygen.sh/",
				"https://pandoc.org/",
				"https://imagemagick.org/script/license.php",
				"https://excalidraw.com/",
				"https://www.tldraw.com/",
				"https://awesome-selfhosted.net/index.html",
				"https://github.com/public-apis/public-apis",
				"https://www.utf8-chartable.de/unicode-utf8-table.pl",
				"https://www.unicode.org/charts/PDF/U0000.pdf",
				"https://getstream.io/",
				"https://pixabay.com/",
			],
		},
		{
			title: "Freelance",
			urls: [
				"https://gitcoin.co/",
				"http://upwork.com",
				"https://www.fiverr.com/",
				"https://triplebyte.com",
				"https://coderbyte.com/",
				"https://www.fullstory.com/",
				"https://www.codementor.io/",
				"https://www.freecodecamp.org/news/freelance-web-developer-guide/",
				"https://sunilc.medium.com/kick-start-your-freelancing-career-with-these-tips-747cc27a150f",
				"https://zapier.com/",
				"https://www.make.com/en",
			],
		},
		{
			title: "Fun websites",
			urls: [
				"https://neal.fun/",
				"https://thetruesize.com/",
				"https://based.cooking/",
				"https://theskylive.com/",
				"https://www.meteorshowers.org/view/all",
				"https://nextapps-de.github.io/winbox/",
				"https://opensky-network.org/",
				"https://developer.chrome.com/100/",
				"https://github-contributions.vercel.app/",
				"https://code.org/",
				"https://eyes.nasa.gov/apps/solar-system/#/home",
				"https://eyes.nasa.gov/",
				"https://dgreenheck.github.io/threejs-procedural-planets/",
				"https://www.flightradar24.com/",
				"https://planefinder.net/",
				"https://www.marinetraffic.com/",
				"https://www.piday.org/million/",
				"https://www.gebco.net/",
				"https://bathyglobe.ccom.unh.edu/",
				"https://duckduckgo.github.io/tracker-radar-wiki/",
				"https://www.timeanddate.com/",
				"https://fusionauth.io/password-history/",
				"https://98.js.org/",
				"https://svtsim.com/moonjs/agc.html",
				"https://cryptii.com/",
				"https://visitedplaces.com/",
				"https://www.myretrotvs.com/",
			],
		},
		{
			title: "Placeholder Service",
			urls: [
				"https://placekitten.com/",
				"https://dummyimage.com/",
				"https://loremflickr.com/",
				"https://placeholderimage.dev/",
				"https://lorem.space/",
				"http://dummy-image-generator.com/",
				"https://fakeimg.pl/",
				"https://picsum.photos/",
				"https://placehold.co/",
				"https://randomuser.me/",
			],
		},
		{
			title: "JavaScript",
			urls: [
				"https://doesitmutate.xyz/",
				"https://react-hooks.org/docs/hooks-list/",
				"https://threejs.org/",
				"https://github.com/agauniyal/wireframe",
				"https://github.com/popmotion/popmotion",
				"https://github.com/mifi/editly",
				"https://github.com/remotion-dev/remotion",
				"https://www.robinwieruch.de/react-libraries/",
				"https://storybook.js.org/showcase",
				"https://esb.deno.dev/",
				"https://fireworks.js.org/",
				"https://ejm.sh",
				"https://embed.im/snow/",
				"https://www.autoregex.xyz/",
				"https://regexr.com/",
				"https://eqeq.js.org/",
				"https://javascript.info/",
				"https://culorijs.org/",
				"https://bellard.org/quickjs/",
				"https://www.partykit.io/",
				"https://livekit.io/",
			],
		},
		{
			title: "JavaScript Alternative Runtimes",
			urls: [
				"https://deno.land/",
				"https://bun.sh/",
				"https://wasmer.io/posts/winterjs-v1",
				"https://github.com/cloudflare/workerd",
				"https://deno.com/blog/roll-your-own-javascript-runtime",
			],
		},
		{
			title: "JavaScript tools",
			urls: [
				"https://deno.land/manual@v1.30.1/tools",
				"https://biomejs.dev/",
				"https://oxc-project.github.io/",
				"https://github.com/karimould/awesome-js-tooling-in-rust",
				"https://jsonplaceholder.typicode.com",
			],
		},
		{
			title: "Job Boards",
			urls: [
				"https://www.facet.net/",
				"https://arc.dev/",
				"https://stillhiring.today/",
				"https://remote.co/",
				"https://remote.com/jobs",
				"https://www.workatastartup.com/",
				"https://www.workingnomads.co/jobs",
				"https://www.wfh.io/",
				"https://www.skipthedrive.com/",
				"https://www.flexjobs.com/",
				"https://www.indeed.com/",
				"https://www.linkedin.com/",
				"https://www.glassdoor.com/index.htm",
				"https://www.monster.com/",
				"https://www.ziprecruiter.com/",
				"https://www.idealist.org/en",
				"https://philanthropynewsdigest.org/jobs",
				"https://alltechishuman.org/responsible-tech-job-board",
				"https://chaloner.com/",
				"https://app.otta.com/",
				"https://himalayas.app/",
				"https://powertofly.com/",
				"https://www.hiretechladies.com/",
				"https://4dayweek.io/",
				"https://techjobsforgood.com/",
				"https://www.fossjobs.net/",
				"https://startup.jobs/",
				"https://remoteintech.company/",
				"https://justremote.co/",
				"https://remoteok.com/",
				"https://weworkremotely.com/",
				"https://wellfound.com/",
				"https://jsremotely.com/",
				"https://github.com/remoteintech/remote-jobs",
				"https://stackoverflow.jobs/",
			],
		},
		{
			title: "Online Games",
			urls: [
				"http://ncase.me/trust/",
				"https://speckyboy.com/retro-video-games-html5-js-css/",
				"http://multeor.com/",
				"https://godotengine.org/",
				"https://netgames.io/games/",
				"https://github.com/leereilly/games",
				"https://gist.github.com/roachhd/d579b58148d7e36a6b72#major-companies",
				"https://github.com/collections/web-games",
				"https://js13kgames.com/",
				"https://powerline.io/",
				"https://slither.io/",
				"https://hextris.io/",
				"https://www.chickenkoup.com/",
				"https://dr-d-king.itch.io/lets-go-build-a",
				"https://secrethitler.io/",
				"https://lichess.org/",
				"https://dr-d-king.itch.io/tiny-islands",
				"https://codenames.game/",
				"https://garticphone.com/",
				"https://sandspiel.club/",
				"https://www.airconsole.com/",
				"https://www.antstream.com/",
				"https://docs.happyfuntimes.net/",
				"https://rocketcrab.com/",
				"https://avalon.fun/",
				"https://skribbl.io/",
				"https://www.geoguessr.com/",
				"https://kahoot.it/",
			],
		},
		{
			title: "Module Service",
			urls: [
				"https://unpkg.com/",
				"https://www.skypack.dev/",
				"https://esm.sh/",
				"https://bundlejs.com/",
				"https://nest.land/",
			],
		},
		{
			title: "NPM Packages",
			urls: ["https://www.npmjs.com/package/zod#introduction"],
		},
		{
			title: "Payment Portals",
			urls: [
				"https://stripe.dev/",
				"https://stripe.com/",
				"https://www.paddle.com/",
				"https://www.paypal.com/",
				"https://www.lemonsqueezy.com/",
			],
		},
		{
			title: "Peer 2 Peer",
			urls: [
				"https://www.sharedrop.io/",
				"https://www.snapdrop.net",
				"https://instant.io/",
				"https://webtorrent.io/intro",
				"https://beakerbrowser.com/",
				"https://dat-ecosystem.org/",
				"http://Ipfs.io",
				"https://staltz.com/a-plan-to-rescue-the-web-from-the-internet.html",
			],
		},
		{
			title: "Reference/Articles",
			urls: [
				"https://htmlhead.dev/",
				"https://www.lesscake.com/code-golf-javascript",
				"https://devhints.io/",
				"https://www.microcopy.me/",
				"https://css-tricks.com/the-critical-request/",
				"https://css-tricks.com/creating-photorealistic-3d-graphics-web/",
				"https://css-tricks.com/now-ever-might-not-need-jquery/",
				"https://css-tricks.com/reactive-uis-vanillajs-part-1-pure-functional-style/",
				"https://css-tricks.com/reactive-uis-vanillajs-part-2-class-based-components/",
				"https://css-tricks.com/the-complete-guide-to-lazy-loading-images/",
				"https://github.com/leonardomso/33-js-concepts",
				"https://areknawo.com/your-webgl-aiders/",
				"https://restfulapi.net/",
				"https://github.com/sudheerj/javascript-interview-questions",
				"https://github.com/goldbergyoni/javascript-testing-best-practices#readme",
				"https://looks.wtf/",
				"https://262.ecma-international.org/",
				"https://madewithwebassembly.com/",
				"https://www.bigocheatsheet.com/",
				"https://www.wolframalpha.com/",
				"https://www.opensourcealternative.to/",
				"https://oscarotero.com/deno/",
				"https://allthings.how/",
				"https://caniuse.com/",
				"https://a11y.coffee/",
			],
		},
		{
			title: "Search",
			urls: ["https://crawler.algolia.com/", "https://www.notion.so/"],
		},
		{
			title: "Service Workers",
			urls: [
				"https://serviceworke.rs/",
				"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers",
				"https://jakearchibald.com/2014/offline-cookbook/",
				"https://developers.google.com/web/fundamentals/getting-started/primers/service-workers?authuser=0",
			],
		},
		{
			title: "Security",
			urls: ["https://github.com/RetireJS/retire.js"],
		},
		{
			title: "SVG Editors",
			urls: [
				"https://vectr.com/",
				"https://boxy-svg.com/app",
				"https://github.com/benogle/curve-app",
				"https://gitlab.com/inkscape/inkscape",
				"https://github.com/SVG-Edit/svgedit",
			],
		},
		{
			title: "Tutorials",
			urls: [
				"https://css-tricks.com/implementing-push-notifications-setting-firebase/",
				"https://css-tricks.com/implementing-push-notifications-back-end/",
				"https://angular.io/guide/cheatsheet",
				"https://www.learnrxjs.io/",
				"https://egghead.io/courses/getting-started-with-redux",
				"https://egghead.io/courses/building-react-applications-with-idiomatic-redux",
				"https://learngitbranching.js.org/",
				"http://ES6.io",
			],
		},
		{
			title: "Video",
			urls: [
				"https://ffmpegwasm.netlify.app/",
				"https://github.com/mifi/editly",
				"https://www.vidstack.io/",
				"https://www.mux.com/",
			],
		},
		{
			title: "Web Assembly/Rust",
			urls: [
				"https://mbebenita.github.io/WasmExplorer/",
				"https://webassembly.studio/",
				"https://rustwasm.github.io/docs/book/",
				"https://rocket.rs/guide/",
				"https://github.com/rustwasm/wasm-pack",
				"https://napi.rs/",
				"https://github.com/leptos-rs/leptos",
				"https://github.com/DioxusLabs/dioxus",
				"https://neon-bindings.com/",
				"https://wasmtime.dev",
				"https://wasmer.io",
				"https://wasi.dev",
				"https://github.com/electric-sql/pglite",
				"https://sql.js.org/#/",
				"https://github.com/tursodatabase/libsql-js",
			],
		},
		{
			title: "Website deployment",
			urls: [
				"https://www.noip.com/",
				"https://letsencrypt.org/",
				"https://dnsimple.com/",
				"https://dan.com/",
				"https://www.namecheap.com/",
				"https://www.name.com/",
				"https://www.duckdns.org/",
				"https://porkbun.com/",
			],
		},
		{
			title: "Webscraping",
			urls: [
				"https://brightdata.com/products/scraping-browser",
				"https://brightdata.com/",
				"https://playwright.dev/",
			],
		},
		{
			title: "Web Hosting or Functions",
			urls: [
				"https://www.netlify.com/",
				"https://vercel.com/",
				"https://firebase.google.com/",
				"https://render.com/",
				"https://www.heroku.com/",
				"https://www.withcoherence.com/",
				"https://www.digitalocean.com/",
				"https://webpod.dev/",
				"https://www.linode.com/",
				"https://www.fastly.com/",
				"https://gumroad.com/",
				"https://typedream.com/",
				"https://carrd.co/",
				"https://dynaboard.com/",
				"https://workers.cloudflare.com/",
				"https://aws.amazon.com/",
				"https://www.cloudflare.com/",
				"https://deno.com/deploy",
				"https://www.shuttle.rs/",
				"https://pouchdb.com/",
				"https://www.macincloud.com/",
				"https://www.macstadium.com/",
				"https://www.val.town/",
			],
		},
		{
			title: "Other Resources",
			urls: [
				"https://bevyengine.org/",
				"https://www.gitpod.io/",
				"https://react-spectrum.adobe.com/react-aria/index.html",
				"https://www.crypto101.io/",
			],
		},
	],
};
