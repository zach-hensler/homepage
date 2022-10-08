import React from "react";
import { Home, About } from '../workflows';

export const routes: {[path: string]: JSX.Element} = {
    Home: <Home />,
    About: <About />
}