import React from "react";
import {Theme, ThemeNames} from "../constants/themes";

interface ThemeSelectorProps {
    selectedTheme: Theme
    selectedThemeName: ThemeNames
    setSelectedThemeName: (themeName: ThemeNames) => void
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ selectedTheme, selectedThemeName, setSelectedThemeName }) => {
    const toggleTheme = () => {
        if (selectedThemeName === ThemeNames.default) return setSelectedThemeName(ThemeNames.dark);
        setSelectedThemeName(ThemeNames.default);
    };

    const paletteIcon = `${process.env.PUBLIC_URL}/img/palette_icon_${selectedTheme["--background-font-color"]}.svg`;

    return <button className="header-item header-icon" onClick={toggleTheme}>
        <img src={paletteIcon} alt="Theme Swap Icon" />
    </button>;
};
