import useNavigation from '../hooks/useNavigation';
import { routes } from '../constants/routes';

export const WorkflowRenderer = () => {
    const { getCurrentRoute } = useNavigation();
    return routes[getCurrentRoute()]
};
