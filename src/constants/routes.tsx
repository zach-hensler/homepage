import {JSX} from "preact";

import { Home, About, Experience } from "../workflows";

export const routes: Record<string, JSX.Element> = {
    Home: <Home />,
    About: <About />,
    Experience: <Experience />,
};
