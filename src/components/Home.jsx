import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div id="Home">
      <div className="md:px-16 px-4" id="home">
        <div className="md:flex hidden flex-col items-center gap-6 fixed left-16 bottom-0">
          <a href="https://github.com/marvelsam1">
            {" "}
            <FiGithub className="text-[#ccd6f6] text-[1.2rem]" />
          </a>
          <a href="https://www.instagram.com/kineetic_designs/?next=%2F">
            <FiInstagram className="text-[#ccd6f6] text-[1.2rem]" />
          </a>
          <a href="https://twitter.com/Marvellous639">
            {" "}
            <FaXTwitter className="text-[#ccd6f6] text-[1.2rem]" />
          </a>
          <a href="https://www.linkedin.com/in/marvellous-abiola-1b9180259">
            {" "}
            <FaLinkedinIn className="text-[#ccd6f6] text-[1.2rem]" />
          </a>

          <div className="border-r-[1px] border-r-[#ccd6f6] h-[6rem] "></div>
        </div>

        <div className="md:flex hidden flex-col items-center gap-[8rem] fixed right-0 bottom-0">
          <p
            className="text-sm font-mono  rotate-90 origin-center text-[#ccd6f6] leading-none tracking-tight"
            // style="writing-mode: vertical-rl;"
          >
            marvellousabiola004@gmail.com
          </p>
          <div className="border-r-[1px] border-r-[#ccd6f6] h-[6rem] "></div>
        </div>

        <Hero />
        <About />
        <Projects />
        {/* <Skills /> */}
        <Contact />
      </div>
    </div>
  );
};

export default Home;
