import "./css/App.css";
import { Header, WorkflowRenderer } from "./components";
import { useTheme } from "./hooks";

const App = () => {
    const { selectedTheme, toggleTheme } = useTheme();

    return (
        <div class="App" style={{ ...selectedTheme }}>
            <Header toggleTheme={toggleTheme} />
            <WorkflowRenderer />
        </div>
    );
};

export default App;
