import {hydrate, prerender as ssr} from "preact-iso";

import "./index.css";
import App from "./App";
import { NavigationProvider } from "./hooks";

const Main = () => (
    <NavigationProvider>
        <App />
    </NavigationProvider>
);

if (typeof window !== 'undefined') {
    hydrate(<Main />, document.getElementById('app')!);
}

export async function prerender() {
    const { html, links } = await ssr(<Main />);
    return {
        html,
        links,
        head: { lang: 'en' },
    };
}
