import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Hero = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return ( 
        <div className="my-3 md:my-20">
            <div className="flex items-center md:gap-40 gap-10 flex-col md:flex-row md:px-0 px-6 ">
                <div className="text-white md:text-left text-center order-2 md:order-1">
                    <p className="md:text-[19px] text-[14px] font-bold" data-aos="zoom-in-down">Hello, i'm Marvellous </p>
                    <h1 className="md:text-6xl text-4xl  font-bold py-2"> <span className="text-lightBlue">Frontend Developer</span></h1>
                    <p className="md:w-[600px] w-[300px] md:text-sm text-[12px] font-semibold md:py-3 py-8"  data-aos="fade-up" data-aos-duration="1000">
                        I am a highly motivated and results-driven Frontend-developer with a diverse background 
                        and a proven track record of success. My passion for this industry has driven me to continuously seek 
                        opportunities for growth and development making me a versatile candidate for Frontend development roles.
                    </p>
                </div>
                <div className="order-1 md:order-2">
                    <img className="rounded-full md:w-[600px] md:h-[350px] w-[250px] h-[250px]" src="assets/Mr Marvellous cropped.jpg" alt="" />
                </div>
            </div>
            <div className="flex items-center justify-center md:justify-normal gap-2 text-lightBlue ">
                <a href="https://www.instagram.com/kineetic_designs/?next=%2F"><FiInstagram className="text-[19px] shadow-md" /></a>
                <a href="https://twitter.com/Marvellous639"><FaSquareXTwitter className="text-[19px]" /></a>
                <a href="https://www.linkedin.com/in/marvellous-abiola-1b9180259"><FaLinkedin  className="text-[19px]"/></a>
                <a href="https://github.com/marvelsam1"><FaGithubSquare className="text-[19px]" /></a>
            </div>
            <div className="flex items-center md:justify-normal justify-center ">
                <button className="rounded-full py-2 px-8 my-1 bg-lightBlue border-none text-sm font-semibold"><a href="mailto:marvellousabiola004@gmail.com">Hire me</a></button>
            </div>
        </div>
     );
}
 
export default Hero;