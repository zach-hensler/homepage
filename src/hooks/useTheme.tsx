import {useState} from "react";

import {ThemeNames, themes} from "../constants/themes";
import {useLocalStorage} from "./useLocalStorage";

const getThemeFromThemeName = (themeName: ThemeNames = ThemeNames.default) => {
    if (Object.hasOwn(themes, themeName)) {
        return themes[themeName as ThemeNames];
    } else {
        return themes[ThemeNames.default];
    }
};

export const useTheme = () => {
    const {
        getLocalStorage: getSelectedThemeName,
        setLocalStorage: setSelectedThemeNameInStorage,
    } = useLocalStorage<ThemeNames>("selectedTheme");

    const [
        selectedTheme,
        setSelectedTheme,
    ] = useState(getThemeFromThemeName(getSelectedThemeName()));

    const setSelectedThemeName = (newSelectedTheme: ThemeNames) => {
        setSelectedTheme(getThemeFromThemeName(newSelectedTheme));
        setSelectedThemeNameInStorage(newSelectedTheme);
    };

    return { selectedTheme, selectedThemeName: getSelectedThemeName(), setSelectedThemeName };
};
