import React, {useState} from "react";

import {routes} from "../constants/routes";
import "../css/Header.css";
import {useNavigation} from "../hooks";
import { menuOpenIcon, menuClosedIcon } from "../constants/icons";
import {ThemeSelector} from "./ThemeSelector";

interface HeaderProps {
    toggleTheme: () => void
}

export const Header:React.FC<HeaderProps> = ({ toggleTheme }) => {
    const [showMobileLinks, setShowMobileLinks] = useState<boolean>(false);
    const { currentRoute, updateCurrentRoute } = useNavigation();

    const headerLinks = Object.keys(routes).map((path) => {
        const classes = `header-item ${currentRoute === path ? "header-item-selected" : ""}`;
        return (
            <button className={classes} onClick={() => updateCurrentRoute(path)} key={path}>{path}</button>
        );
    });

    return (
        <div className="header">
            <div className="header-container-mobile">
                <button className="header-item header-icon" onClick={() => setShowMobileLinks(!showMobileLinks)}>
                    {showMobileLinks ? menuOpenIcon : menuClosedIcon}
                </button>
                <ThemeSelector toggleTheme={toggleTheme} />
            </div>
            {showMobileLinks ? <div className="header-container-mobile links">{headerLinks}</div> : <></>}
            <div className="header-container">
                {headerLinks}
                <ThemeSelector toggleTheme={toggleTheme} />
            </div>
        </div>
    );
};
