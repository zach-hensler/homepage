export const useLocalStorage = <T>(identifier: string) => {
    const setLocalStorage = (state: T) => window.localStorage.setItem(identifier, JSON.stringify(state));
    const getLocalStorage = () => JSON.parse(window.localStorage.getItem(identifier) || "{}") as T;

    return { getLocalStorage, setLocalStorage };
};
