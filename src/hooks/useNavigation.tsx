import React, { useContext, useEffect, useState } from "react";
import { routes } from "../constants/routes";

interface NavigationMethods {
    currentRoute: string;
    updateCurrentRoute: (newRoute: string) => void
}

const NavigationContext = React.createContext<NavigationMethods>({
    currentRoute: "Home",
    updateCurrentRoute: () => {console.error("Initial Navigation Method not overridden...");},
});
export const NavigationProvider = ({ children }: { children: JSX.Element }) => {
    const [currentRoute, setCurrentRoute] = useState<string>(Object.keys(routes)[0]);

    const validateRoute = (route: string) => {
        if (!routes?.[route]) {
            return false;
        }
        return true;
    };

    // using query params instead of slashes, because it plays nice with github's hosting
    const updateInternalRouteToPath = () => {
        const initialPath = window.location.href;
        const route = initialPath.split("?")[1];
    
        if (!validateRoute(route)) {
            setCurrentRoute("Home");
            return;
        }
        
        setCurrentRoute(route);
    };

    // set route when page initially loads (handles refreshes)
    useEffect(() => {
        updateInternalRouteToPath();
    }, []);

    // handles back and forward presses in the browser
    useEffect(() => {
        addEventListener("popstate", updateInternalRouteToPath);
    }, []);

    // exposed method for inter-application navigation
    const updateCurrentRoute = (newRoute: string) => {
        if (!validateRoute(newRoute)) {
            console.error(`Attempted to navigate to invalid route: ${newRoute}`);
            return;
        }

        // update url and internal path
        window.history.pushState({}, newRoute, `/homepage?${newRoute}`);
        setCurrentRoute(newRoute);
    };

    return (
        <NavigationContext.Provider value={{
            currentRoute,
            updateCurrentRoute,
        }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => useContext(NavigationContext);
