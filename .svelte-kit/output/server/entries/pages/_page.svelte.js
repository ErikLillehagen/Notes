import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-1bj4n12">sveltekit-gh-pages</h1> <p data-svelte-h="svelte-1c2ozz4">Deployed to GitHub Pages.</p> <a href="${escape(base, true) + "/about"}" data-svelte-h="svelte-2hnrj4">About</a>`;
});
export {
  Page as default
};
