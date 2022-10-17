import React from "react";
import { useNavigation, useScreenSize } from "../hooks";
import { routes } from "../constants/routes";
import "../css/App.css";

export const WorkflowRenderer = () => {
    const { currentRoute } = useNavigation();
    const screenSize = useScreenSize();

    const className = screenSize === "large" ? "workflow-container" : "workflow-container-small";
    console.log(screenSize);
    return <div className={className}>{routes[currentRoute]}</div>;
};
