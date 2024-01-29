import React from "react";
import {contactInfo} from "../constants/contactInfo";

export const Projects: React.FC = () => {
    return (
        <div>
            <h2>Projects</h2>
            <ul>
                <li>View the code for <a href={contactInfo.homepageSourcecode} rel="noreferrer noopener" target="_blank">this project on github</a></li>
            </ul>
        </div>
    );
};
