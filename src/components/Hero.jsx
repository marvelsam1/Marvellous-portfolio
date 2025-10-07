import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="my-3 md:my-20 md:px-[8rem]">
      <div className="flex md:items-center items-start md:gap-40 gap-10 flex-col md:flex-row ">
        <div className="text-white text-left">
          <p
            className=" text-[#64ffda] font-sfmono mt-16 md:mt-0 "
            data-aos="zoom-in-down"
          >
            Hi, my name is{" "}
          </p>
          <h1 className="md:text-6xl text-4xl font-bold md:py-2">
            {" "}
            <span className=" text-[#ccd6f6]">Marvellous Abiola.</span>
          </h1>
          <h1 className="md:text-6xl text-4xl  font-bold py-2">
            {" "}
            <span className=" text-[#a8b2d1]">I build things for the web</span>
          </h1>
          <p
            className="md:w-[600px] w-[300px] md:text-[20px]  font-zoppins text-[#a8b2d1] text-[1rem]  md:py-3 py-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Results-driven Frontend Developer with hands-on experience building
            responsive, user-friendly, and high-performing web applications.
          </p>
        </div>
        {/* <div className="order-1 md:order-2">
          <img
            className="rounded-full md:w-[600px] md:h-[350px] w-[250px] h-[250px]"
            src="assets/Mr Marvellous cropped.jpg"
            alt=""
          />
        </div> */}
      </div>
      <a href="https://docs.google.com/document/d/18iiuF68KCBSZ4nc3oPNvCwgZwgtUpIj0QjVnTv29BJ0/edit?usp=sharing">
        <div className="relative group border-[2px] mt-8 md:mt-0 border-[#64ffda] rounded-md inline-block py-2 px-6 cursor-pointer text-[#64ffda] font-light">
          Download my Resume
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
        </div>
      </a>

      {/* <div className="flex items-center justify-center md:justify-normal gap-2 text-lightBlue ">
        <a href="https://www.instagram.com/kineetic_designs/?next=%2F">
          <FiInstagram className="text-[19px] shadow-md" />
        </a>
        <a href="https://twitter.com/Marvellous639">
          <FaSquareXTwitter className="text-[19px]" />
        </a>
        <a href="https://www.linkedin.com/in/marvellous-abiola-1b9180259">
          <FaLinkedin className="text-[19px]" />
        </a>
        <a href="https://github.com/marvelsam1">
          <FaGithubSquare className="text-[19px]" />
        </a>
      </div>
      <div className="flex items-center md:justify-normal justify-center ">
        <button className="rounded-full py-2 px-8 my-1 bg-lightBlue border-none text-sm font-semibold">
          <a href="mailto:marvellousabiola004@gmail.com">Hire me</a>
        </button>
      </div> */}
    </div>
  );
};

export default Hero;
