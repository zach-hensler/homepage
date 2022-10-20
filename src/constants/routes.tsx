import React from "react";
import { Home, About, ShowMe, Technology } from "../workflows";

export const routes: {[path: string]: JSX.Element} = {
    Home: <Home />,
    Technology: <Technology />,
    ShowMe: <ShowMe />,
    About: <About />,
};
