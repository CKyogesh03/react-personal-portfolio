import Education from "./components/Education";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Education />
      <Skills />
      <Project />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
