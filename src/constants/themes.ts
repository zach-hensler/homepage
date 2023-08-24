export interface Theme {
    "--background-bg-color": string
    "--background-bg-darker": string
    "--background-font-color": string
    "--primary-bg-color": string
    "--primary-bg-darker": string
    "--primary-font-color": string
    "--accent-bg-color": string
    "--accent-bg-darker": string
    "--accent-font-color": string
}

const ThemeNames = {
    "default": "default",
    "dark": "dark",
} as const;
export type ThemeNamesType = typeof ThemeNames[keyof typeof ThemeNames];

export const themes: Record<ThemeNamesType, Theme> = {
    default: {
        "--background-bg-color": "#f4fcfd",
        "--background-bg-darker": "#d8e6e8",
        "--background-font-color": "black",
        "--primary-bg-color": "#5a7dc5",
        "--primary-bg-darker": "#516ba1",
        "--primary-font-color": "white",
        "--accent-bg-color": "#625aa0",
        "--accent-bg-darker": "#524c7f",
        "--accent-font-color": "white",
    },
    dark: {
        "--background-bg-color": "#21212d",
        "--background-bg-darker": "#000",
        "--background-font-color": "white",
        "--primary-bg-color": "#8fb3ff",
        "--primary-bg-darker": "#5a7dc5",
        "--primary-font-color": "black",
        "--accent-bg-color": "#f199bf",
        "--accent-bg-darker": "#f199bf",
        "--accent-font-color": "black",
    },
};
