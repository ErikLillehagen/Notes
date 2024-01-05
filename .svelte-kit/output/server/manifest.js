export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "sveltekit-github-pages/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.UKN9b1gT.js","app":"_app/immutable/entry/app.ec487KXS.js","imports":["_app/immutable/entry/start.UKN9b1gT.js","_app/immutable/chunks/scheduler.k-kUyWhY.js","_app/immutable/chunks/singletons.6pPV1PEl.js","_app/immutable/chunks/paths.faq5vR7r.js","_app/immutable/entry/app.ec487KXS.js","_app/immutable/chunks/scheduler.k-kUyWhY.js","_app/immutable/chunks/index.5XCitCbI.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
