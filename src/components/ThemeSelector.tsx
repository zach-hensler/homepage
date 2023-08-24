import React from "react";
import {Theme, ThemeNamesType} from "../constants/themes";

interface ThemeSelectorProps {
    selectedTheme: Theme
    selectedThemeName: ThemeNamesType
    setSelectedThemeName: (themeName: ThemeNamesType) => void
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ selectedTheme, selectedThemeName, setSelectedThemeName }) => {
    const toggleTheme = () => {
        if (selectedThemeName === "default") return setSelectedThemeName("dark");
        setSelectedThemeName("default");
    };

    const paletteIcon = `${process.env.PUBLIC_URL}/img/palette_icon_${selectedTheme["--background-font-color"]}.svg`;

    return <button className="header-item header-icon" onClick={toggleTheme}>
        <img src={paletteIcon} alt="Theme Swap Icon" />
    </button>;
};
