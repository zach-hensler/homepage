import {JSX} from "preact";

import {Home, About, Technical, Projects} from "../workflows";

export const routes: Record<string, JSX.Element> = {
    Home: <Home />,
    About: <About />,
    Technical: <Technical />,
    Projects: <Projects />,
};
