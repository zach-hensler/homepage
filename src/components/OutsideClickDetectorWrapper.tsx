import  {useRef, useEffect} from "preact/hooks";
import {FunctionalComponent, ComponentChildren} from "preact";

interface Props {
    handleClick: () => void
    children: ComponentChildren
}

/**
 * Renders children inside a DIV and calls handleClick whenever a click occurs outside of that DIV
 * @param handleClick
 * @param children
 * @constructor
 */
export const OutsideClickDetectorWrapper:FunctionalComponent<Props> = ({ handleClick, children }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current &&
                event.target instanceof Node &&
                !wrapperRef.current.contains(event.target)
            ) { handleClick(); }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    return <div ref={wrapperRef}>{children}</div>;
};
