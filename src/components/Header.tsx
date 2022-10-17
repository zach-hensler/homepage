import React from "react";

import { routes } from "../constants/routes";
import "../css/Header.css";
import { useNavigation } from "../hooks";

export const Header:React.FC = () => {
    const { currentRoute, updateCurrentRoute } = useNavigation();
    const headerLinks = Object.keys(routes).map((path) => {

        const classes = `header-item ${currentRoute === path ? "header-item-selected" : ""}`;
        return (
            <button className={classes} onClick={() => updateCurrentRoute(path)} key={path}>{path}</button>
        );
    });

    return (
        <div className="header">
            {headerLinks}
        </div>
    );
};
