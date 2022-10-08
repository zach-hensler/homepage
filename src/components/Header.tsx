import React from 'react';

import { routes } from '../constants/routes';
import '../css/Header.css';
import useNavigation from '../hooks/useNavigation';

export const Header:React.FC = () => {
    const { updateCurrentRoute } = useNavigation();
    const headerLinks = Object.keys(routes).map((path) => {
        return (
            <button className='header-item' onClick={() => updateCurrentRoute(path)} key={path}>{path}</button>
        );
    });

    return (
        <div className='header'>
            {headerLinks}
        </div>
    );
};
