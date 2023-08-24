import React, {CSSProperties} from "react";

import "./css/App.css";
import { Header, WorkflowRenderer } from "./components";
import { useTheme } from "./hooks";

const App = () => {
    const { selectedTheme, toggleTheme } = useTheme();

    return (
        <div className="App" style={selectedTheme as CSSProperties}>
            <Header toggleTheme={toggleTheme} />
            <WorkflowRenderer />
        </div>
    );
};

export default App;
