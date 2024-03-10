import { useContext, useEffect, useState } from "preact/hooks";
import { createContext } from "preact";
import { routes } from "../constants/routes";
import {JSX} from "preact";

interface NavigationMethods {
    currentRoute: string;
    updateCurrentRoute: (newRoute: string) => void
}

const NavigationContext = createContext<NavigationMethods>({
    currentRoute: "Home",
    updateCurrentRoute: () => {console.error("Initial Navigation Method not overridden...");},
});
export const NavigationProvider = ({ children }: { children: JSX.Element }) => {
    const validateRoute = (route: string) => {
        if (!routes?.[route]) {
            return false;
        }
        return true;
    };

    // using query params instead of slashes, because it plays nice with github's hosting
    const getQueryParamRoute = () => {
        const initialPath = window.location.href;
        const route = initialPath.split("?")[1];
    
        if (!validateRoute(route)) return "Home";
        
        return route;
    };
    
    const [currentRoute, setCurrentRoute] = useState<string>(getQueryParamRoute());

    useEffect(() => {
        addEventListener("popstate", () => setCurrentRoute(getQueryParamRoute()));
    }, []);

    // exposed method for inter-application navigation
    const updateCurrentRoute = (newRoute: string) => {
        if (!validateRoute(newRoute)) {
            console.error(`Attempted to navigate to invalid route: ${newRoute}`);
            return;
        }

        // scroll not automatically fixed since we're using "?" routing
        window.scrollTo(0,0);
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
