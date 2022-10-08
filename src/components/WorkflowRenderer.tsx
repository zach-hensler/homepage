import useNavigation from '../hooks/useNavigation';
import { routes } from '../constants/routes';
import '../css/App.css';

export const WorkflowRenderer = () => {
    const { currentRoute } = useNavigation();
    return <div className="workflow-container">{routes[currentRoute]}</div>;
};
