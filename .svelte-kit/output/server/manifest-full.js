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
		client: {"start":"_app/immutable/entry/start.HONQ88e5.js","app":"_app/immutable/entry/app.1_p8QZ-K.js","imports":["_app/immutable/entry/start.HONQ88e5.js","_app/immutable/chunks/scheduler.k-kUyWhY.js","_app/immutable/chunks/singletons.0b8E1JO6.js","_app/immutable/chunks/paths.2PZPor3_.js","_app/immutable/entry/app.1_p8QZ-K.js","_app/immutable/chunks/scheduler.k-kUyWhY.js","_app/immutable/chunks/index.5XCitCbI.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
