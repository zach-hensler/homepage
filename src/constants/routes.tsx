import {JSX} from "preact";

import {Home, About, Experience, Projects} from "../workflows";

export const routes: Record<string, JSX.Element> = {
    Home: <Home />,
    About: <About />,
    Projects: <Projects />,
    Experience: <Experience />,
};
