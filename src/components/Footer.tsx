import React from "react";

import "../css/App.css";

export const Footer:React.FC = () => {
    return (
        <div className="footer">
            Links I guess?
            <div><a href="https://github.com/zach-hensler" rel="noreferrer noopener" target="_blank">
                Github
            </a></div>
            <div><a href="https://www.linkedin.com/in/zhensler/" rel="noreferrer noopener" target="_blank">
                LinkedIn
            </a></div>
        </div>
    );
};
