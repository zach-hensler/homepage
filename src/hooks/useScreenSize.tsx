export const useScreenSize = () => {
    const width = window.screen.width;

    if (width > 1100) {
        return "large";
    }
    if (width > 700) {
        return "medium";
    }
    return "small";
};
