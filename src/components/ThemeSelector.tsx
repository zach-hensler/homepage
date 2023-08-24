import React from "react";
import {paletteIcon} from "../constants/icons";

interface ThemeSelectorProps {
    toggleTheme: () => void
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ toggleTheme }) => {
    return <button className="header-item header-icon float" onClick={toggleTheme}>{paletteIcon}</button>;
};
