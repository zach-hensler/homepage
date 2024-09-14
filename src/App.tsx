import "./css/App.css";
import { Header, WorkflowRenderer } from "./components";
import {NavigationProvider, useTheme} from "./hooks";

const App = () => {
    const { selectedTheme, toggleTheme } = useTheme();

    return (
        <NavigationProvider>
            <div class="App" style={{ ...selectedTheme }}>
                <Header toggleTheme={toggleTheme} />
                <WorkflowRenderer />
            </div>
        </NavigationProvider>
    );
};

export default App;
