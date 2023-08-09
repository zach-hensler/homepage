import React from "react";

import "../css/IconLink.css";

interface ChildProps {
    iconUrl: string
    iconAltText: string
    linkText: string
    linkUrl: string
    onClick?: () => void
}

export const IconLink: React.FC<ChildProps> = ({
    iconUrl,
    iconAltText,
    linkText,
    linkUrl,
    onClick,
}) => {
    const renderLink = linkUrl
        ? <a href={linkUrl} rel="noreferrer noopener" target="_blank">{linkText}</a>
        : <a href="" >{linkText}</a>;

    return (
        <div className="icon-link-container">
            <img className="icon" src={iconUrl} alt={iconAltText} />
            <p className="text" onClick={onClick}>{renderLink}</p>
        </div>
    );
};

interface WrapperProps {
    children: React.ReactElement|React.ReactElement[]
}
export const IconLinkWrapper: React.FC<WrapperProps> = ({ children }) => (
    <div className="icon-link-row">
        {children}
    </div>
);
