import Introduction from "./components/Introduction/Introduction";
import Projects from "./components/Projects/Projects";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import { Routes, Route } from 'react-router-dom';



function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Introduction />}/>
                <Route path="/work-experience" element={<Work />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>

        </>
    );
}

export default App;
