import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="Contact">
      <div
        className="pb-2 flex flex-col gap-2 items-center md:px-[8rem] px-2 mt-20 justify-center"
        id="contact"
      >
        <li className="flex items-center font-sfmono text-[#64ffda] gap-1 ">
          <span className="text-[#64ffda]">04.</span>
          <a href="#Home">What's Next?</a>
        </li>
        <h1 className="md:text-6xl text-3xl font-bold py-2">
          {" "}
          <span className=" text-[#ccd6f6] tracking-tight">Get In Touch</span>
        </h1>
        <p className="text-[#a8b2d1bb] font-poppins md:w-[60%] w-full text-center mx-auto">
          Are you looking for a creative Frontend Developer to join your team?
          I'm the perfect fit! Let's connect and discuss how I can contribute to
          your projects and growth of your organisation.
        </p>
        <a href="mailto:marvellousabiola004@gmail.com">
          <div className="relative font-sfmono mt-10 group border-[2px] border-[#64ffda] rounded-md inline-block py-2 px-6 cursor-pointer text-[#64ffda] font-light">
            Send me a message
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
          </div>
        </a>

        <div className="mt-10 text-[0.7rem] font-sfmono text-center">
          <p className="text-[#64ffda] text-[0.7rem]">
            Built by Marvellous Abiola
          </p>
          <p className="text-[#a8b2d1bb]">
            Inspired by <span className="text-[#64ffda] ">Brittany Chiang</span>
          </p>
          <p className="text-[#a8b2d1bb] pt-5">
            (C) Marvellous Abiola. All Rights Reserved.
          </p>
        </div>
        {/* <h1 className="text-center text-3xl font-bold text-white py-10">Get in <span className="text-lightBlue">touch</span></h1>
                <div className="flex items-center md:flex-row flex-col justify-between md:gap-0 gap-6">
                    <div className="text-white md:text-left text-center flex flex-col justify-center md:justify-normal md:items-start items-center gap-3">
                        <p className="md:w-[600px] w-[250px] md:text-[20px] text-[12px] font-semibold md:py-3">Excited to discuss how my skills can contribute to your team? Your message is highly valued and i look forward to connecting with you</p>
                        <p className="font-semibold md:text-[20px] text-[18px] text-lightBlue">marvellousabiola004@gmail.com</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 text-white justify-center">
                            <a href="https://www.instagram.com/kineetic_designs/?next=%2F"><FiInstagram className="text-[19px] shadow-md" /></a>
                            <a href="https://twitter.com/Marvellous639"><FaSquareXTwitter className="text-[19px]" /></a>
                            <a href="https://www.linkedin.com/in/marvellous-abiola-1b9180259"><FaLinkedin  className="text-[19px]"/></a>
                            <a href="https://github.com/marvelsam1"><FaGithubSquare className="text-[19px]" /></a>
                        </div>
                        <button className="rounded-full py-2 px-5 my-1 bg-lightBlue border-none text-sm font-semibold"><a href="mailto:marvellousabiola004@gmail.com">Send a message</a></button>
                    </div>
                </div>
                <p className="text-sm font-semibold text-center pt-20 text-white">(C) 2024 Marvellous. All rights reserved.</p> */}
      </div>
    </div>
  );
};

export default Contact;
