import React from "react";
import "./css/App.css";
import { Header, Footer, WorkflowRenderer } from "./components";

const App = () => {
    return (
        <div className="App">
            <Header />
            <WorkflowRenderer />
            <Footer />
        </div>
    );
};

export default App;
