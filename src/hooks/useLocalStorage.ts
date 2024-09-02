import {safeWindow} from "../utils.ts";

export const useLocalStorage = <T>(identifier: string, defaultValue: T) => {
    if (!safeWindow) {
        return {
            getLocalStorage: () => defaultValue,
            setLocalStorage: () => {}
        };
    }
    const setLocalStorage = (state: T) => window.localStorage.setItem(identifier, JSON.stringify(state));
    const getLocalStorage = () => JSON.parse(window.localStorage.getItem(identifier) || JSON.stringify(defaultValue)) as T;

    return { getLocalStorage, setLocalStorage };
};
