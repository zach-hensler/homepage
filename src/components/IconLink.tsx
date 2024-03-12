import "../css/IconLink.css";
import {ComponentChildren, FunctionalComponent} from "preact";

interface ChildProps {
    iconSource: string
    iconAltText: string
    linkText: string
    linkUrl: string
    usePrimaryColor?: boolean
    onClick?: () => void
}

export const IconLink: FunctionalComponent<ChildProps> =
    ({iconSource, iconAltText, linkText, linkUrl, usePrimaryColor, onClick}) => {
    const renderLink = linkUrl
        ? <a href={linkUrl} rel="noreferrer noopener" target="_blank">{linkText}</a>
        : <a href="" >{linkText}</a>;

    return (
        <div class={"icon-link-container" + (usePrimaryColor ? " primary" : "")}>
            <img class="icon" src={iconSource} alt={iconAltText} />
            <p class="text" onClick={onClick}>{renderLink}</p>
        </div>
    );
};

interface WrapperProps {
    children: ComponentChildren
}
export const IconLinkWrapper: FunctionalComponent<WrapperProps> = ({ children }) => (
    <div class="icon-link-row">
        {children}
    </div>
);
