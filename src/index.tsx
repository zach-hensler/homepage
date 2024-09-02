// import {hydrate, prerender as ssr} from "preact-iso";
import {render} from "preact";

import "./index.css";
import App from "./App";
import { NavigationProvider } from "./hooks";

const Main = () => (
    <NavigationProvider>
        <App />
    </NavigationProvider>
);

render(<Main />, document.getElementById("app")!);

// if (typeof window !== 'undefined') {
//     hydrate(<Main />, document.getElementById('app')!);
// }
//
// export async function prerender() {
//     const { html, links } = await ssr(<Main />);
//     return {
//         html,
//         links,
//         head: { lang: 'en' },
//     };
// }
