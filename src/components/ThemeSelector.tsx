import {FunctionalComponent} from "preact";
import {paletteIcon} from "../constants/icons";

interface ThemeSelectorProps {
    toggleTheme: () => void
}

export const ThemeSelector: FunctionalComponent<ThemeSelectorProps> = ({ toggleTheme }) => {
    return <button class="header-item header-icon float" onClick={toggleTheme}>{paletteIcon}</button>;
};
