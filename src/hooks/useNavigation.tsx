import React, { useContext, useState } from 'react';
import { routes } from '../constants/routes';

interface NavigationMethods {
    getCurrentRoute: () => string;
    updateCurrentRoute: (newRoute: string) => void
}

const NavigationContext = React.createContext<NavigationMethods>({
    getCurrentRoute: () => Object.keys(routes)[0],
    updateCurrentRoute: () => {console.error('Initial Navigation Method not overridden...');}
});
export const NavigationProvider = ({ children }: { children: JSX.Element }) => {
    const [currentRoute, setCurrentRoute] = useState<string>(Object.keys(routes)[0]);

    const getCurrentRoute = () => currentRoute;

    const updateCurrentRoute = (newRoute: string) => {
        // attempted route doesn't exist in route array
        if (!routes?.[newRoute]) {
            console.error(`Attempted to navigate to invalid route: ${newRoute}`);
            return;
        }

        setCurrentRoute(newRoute);
    };

    return (
        <NavigationContext.Provider value={{
            getCurrentRoute,
            updateCurrentRoute
        }}>
            {children}
        </NavigationContext.Provider>
    )
}

const useNavigation = () => useContext(NavigationContext);
export default useNavigation;
