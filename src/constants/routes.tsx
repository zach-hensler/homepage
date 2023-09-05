import React from "react";
import { Home, About, Technology } from "../workflows";

export const routes: Record<string, JSX.Element> = {
    Home: <Home />,
    About: <About />,
    Technology: <Technology />,
};
