import React from "react";

import {routes} from "../constants/routes";
import "../css/Header.css";
import {useNavigation} from "../hooks";
import {Theme, ThemeNamesType} from "../constants/themes";
import {ThemeSelector} from "./ThemeSelector";

interface HeaderProps {
    selectedTheme: Theme
    selectedThemeName: ThemeNamesType
    setSelectedThemeName: (themeName: ThemeNamesType) => void
}

export const Header:React.FC<HeaderProps> = ({ selectedTheme, selectedThemeName, setSelectedThemeName }) => {
    const { currentRoute, updateCurrentRoute } = useNavigation();
    const headerLinks = Object.keys(routes).map((path) => {

        const classes = `header-item ${currentRoute === path ? "header-item-selected" : ""}`;
        return (
            <button className={classes} onClick={() => updateCurrentRoute(path)} key={path}>{path}</button>
        );
    });

    return (
        <div className="header">
            <div className="header-item-container">
                {headerLinks}
                <ThemeSelector selectedTheme={selectedTheme} selectedThemeName={selectedThemeName} setSelectedThemeName={setSelectedThemeName} />
            </div>
        </div>
    );
};
