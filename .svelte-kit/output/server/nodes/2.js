

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3Aaj1IxO.js","_app/immutable/chunks/scheduler.k-kUyWhY.js","_app/immutable/chunks/index.5XCitCbI.js","_app/immutable/chunks/paths.faq5vR7r.js"];
export const stylesheets = [];
export const fonts = [];
