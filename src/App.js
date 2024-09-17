import './App.css';
import NavBar from "./Composants/NavBar/NavBar";
import Home from "./Composants/Home/Home";
import Presentation from "./Composants/Presentation/Presentation";
import Skills from "./Composants/Skills/Skills";
import Projects from "./Composants/Projects/Projects";
import LiteFooter from "./Composants/LiteFooter/Footer";
import Hobbies from "./Composants/Hobbies/Hobbies";


function App() {


    return (
        <div className="App">
            <NavBar/>
            <main>
                <Home/>
                <Presentation/>
                <Skills/>
                <Projects/>
                <Hobbies/>
                <LiteFooter/>


            </main>
        </div>
    );
}

export default App;