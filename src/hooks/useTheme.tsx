import {useState} from "react";

import {ThemeNamesType, themes} from "../constants/themes";
import {useLocalStorage} from "./useLocalStorage";

const getThemeFromThemeName = (themeName: ThemeNamesType = "default") => {
    if (Object.hasOwn(themes, themeName)) {
        return themes[themeName as ThemeNamesType];
    } else {
        return themes["default"];
    }
};

export const useTheme = () => {
    const {
        getLocalStorage: getSelectedThemeName,
        setLocalStorage: setSelectedThemeNameInStorage,
    } = useLocalStorage<ThemeNamesType>("selectedTheme", "default");

    const [
        selectedTheme,
        setSelectedTheme,
    ] = useState(getThemeFromThemeName(getSelectedThemeName()));

    const setSelectedThemeName = (newSelectedTheme: ThemeNamesType) => {
        setSelectedTheme(getThemeFromThemeName(newSelectedTheme));
        setSelectedThemeNameInStorage(newSelectedTheme);
    };

    return { selectedTheme, selectedThemeName: getSelectedThemeName(), setSelectedThemeName };
};
