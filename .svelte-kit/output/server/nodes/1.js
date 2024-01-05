

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.19Udq9i9.js","_app/immutable/chunks/scheduler.k-kUyWhY.js","_app/immutable/chunks/index.5XCitCbI.js","_app/immutable/chunks/singletons.0b8E1JO6.js","_app/immutable/chunks/paths.2PZPor3_.js"];
export const stylesheets = [];
export const fonts = [];
