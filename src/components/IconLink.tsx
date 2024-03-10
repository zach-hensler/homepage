import "../css/IconLink.css";
import {ComponentChildren, FunctionalComponent} from "preact";

interface ChildProps {
    iconSource: string
    iconAltText: string
    linkText: string
    linkUrl: string
    onClick?: () => void
}

export const IconLink: FunctionalComponent<ChildProps> =
    ({iconSource, iconAltText, linkText, linkUrl, onClick}) => {
    const renderLink = linkUrl
        ? <a href={linkUrl} rel="noreferrer noopener" target="_blank">{linkText}</a>
        : <a href="" >{linkText}</a>;

    return (
        <div className="icon-link-container">
            <img className="icon" src={iconSource} alt={iconAltText} />
            <p className="text" onClick={onClick}>{renderLink}</p>
        </div>
    );
};

interface WrapperProps {
    children: ComponentChildren
}
export const IconLinkWrapper: FunctionalComponent<WrapperProps> = ({ children }) => (
    <div className="icon-link-row">
        {children}
    </div>
);
