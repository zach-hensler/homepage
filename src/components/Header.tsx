import React from 'react';

import { routes } from '../constants/routes';
import useNavigation from '../hooks/useNavigation';

export const Header:React.FC = () => {
    const { updateCurrentRoute } = useNavigation();
    const headerLinks = Object.keys(routes).map((path) => {
        return (
            <button onClick={() => updateCurrentRoute(path)} key={path}>{path}</button>
        );
    });

    return (
        <div>
            {headerLinks}
        </div>
    );
};
