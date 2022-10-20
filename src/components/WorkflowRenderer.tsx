import React from "react";
import { useNavigation } from "../hooks";
import { routes } from "../constants/routes";
import "../css/App.css";

export const WorkflowRenderer = () => {
    const { currentRoute } = useNavigation();

    const className = "workflow-container";
    return <div className={className}>{routes[currentRoute]}</div>;
};
