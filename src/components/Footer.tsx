import React from "react";

import "../css/App.css";
import {contactInfo} from "../constants/contactInfo";

export const Footer:React.FC = () => {
    return (
        <div className="footer">
            Links I guess?
            <div><a href={contactInfo.github} rel="noreferrer noopener" target="_blank">
                Github
            </a></div>
            <div><a href={contactInfo.linkedInUrl} rel="noreferrer noopener" target="_blank">
                LinkedIn
            </a></div>
        </div>
    );
};
