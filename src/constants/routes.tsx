import React from "react";
import { Home, About } from '../workflows';
import { Projects } from "../workflows/Projects";

export const routes: {[path: string]: JSX.Element} = {
    Home: <Home />,
    Projects: <Projects />,
    About: <About />
}