import { useLayoutEffect, useState } from "preact/hooks";
import {safeWindow} from "../utils.ts";

export const useScreenSize = () => {
    const [width, setWidth] = useState<number>(0);

    useLayoutEffect(() => {
        if (!safeWindow) return;

        const updateSize = () => {
            setWidth(window.screen.width);
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window?.removeEventListener?.("resize", updateSize);
    }, []);

    if (width > 1100) {
        return "large";
    }
    if (width > 700) {
        return "medium";
    }
    return "small";
};
