import React from "react";
import { Home, About, Technology } from "../workflows";

export const routes: {[path: string]: JSX.Element} = {
    Home: <Home />,
    Technology: <Technology />,
    About: <About />,
};
