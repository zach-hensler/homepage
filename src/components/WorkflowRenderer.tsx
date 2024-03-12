import { useNavigation } from "../hooks";
import { routes } from "../constants/routes";
import "../css/App.css";

export const WorkflowRenderer = () => {
    const { currentRoute } = useNavigation();

    const className = "workflow-container";
    return <div class={className}>{routes[currentRoute]}</div>;
};
