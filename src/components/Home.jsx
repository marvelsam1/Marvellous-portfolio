import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
    return ( 
        <div id="Home">
            <div className="md:px-32 px-6" id="home">
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </div>
     );
}
 
export default Home;