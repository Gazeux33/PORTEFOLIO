import './App.css';
import NavBar from "./Composants/NavBar/NavBar";
import Carte from "./Composants/Carte/Carte";
import projects from './projects.json';

function App() {
    return (
        <div className="App">
            <NavBar />
            <div id="project-area">
                {projects.map((project, index) => (
                    <Carte key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

export default App;
