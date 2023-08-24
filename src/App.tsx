import React, {CSSProperties} from "react";

import "./css/App.css";
import { Header, WorkflowRenderer } from "./components";
import { useTheme } from "./hooks";

const App = () => {
    const { selectedTheme, selectedThemeName, setSelectedThemeName } = useTheme();

    return (
        <div className="App" style={selectedTheme as CSSProperties}>
            <Header selectedTheme={selectedTheme} selectedThemeName={selectedThemeName} setSelectedThemeName={setSelectedThemeName} />
            <WorkflowRenderer />
        </div>
    );
};

export default App;
