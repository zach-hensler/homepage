import React, { useContext, useState } from 'react';
import { routes } from '../constants/routes';

interface NavigationMethods {
    currentRoute: string;
    updateCurrentRoute: (newRoute: string) => void
}

const NavigationContext = React.createContext<NavigationMethods>({
    currentRoute: 'Home',
    updateCurrentRoute: () => {console.error('Initial Navigation Method not overridden...');}
});
export const NavigationProvider = ({ children }: { children: JSX.Element }) => {
    const [currentRoute, setCurrentRoute] = useState<string>(Object.keys(routes)[0]);

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
            currentRoute,
            updateCurrentRoute
        }}>
            {children}
        </NavigationContext.Provider>
    )
}

const useNavigation = () => useContext(NavigationContext);
export default useNavigation;
