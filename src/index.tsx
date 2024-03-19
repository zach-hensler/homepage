import { render } from "preact";

import "./index.css";
import App from "./App";
import { NavigationProvider } from "./hooks";

const Main = () => (
    <NavigationProvider>
        <App />
    </NavigationProvider>
);

render(<Main />, document.getElementById("app")!);
