import {hydrate, prerender as ssr} from "preact-iso";

import "./index.css";
import App from "./App";

if (typeof window !== 'undefined') {
    hydrate(<App />, document.getElementById('prerender')!);
}

export async function prerender() {
    const { html, links } = await ssr(<App />);
    return {
        html,
        links,
        head: { lang: 'en' },
    };
}
