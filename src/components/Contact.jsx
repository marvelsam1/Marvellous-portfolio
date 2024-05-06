import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";

const Contact = () => {
    return ( 
        <div id="Contact">
            <div className="mb-10" id="contact">
                <h1 className="text-center text-3xl font-bold text-white py-10">Get in <span className="text-lightBlue">touch</span></h1>
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
                <p className="text-sm font-semibold text-center pt-20 text-white">(C) 2024 Marvellous. All rights reserved.</p>
            </div>
        </div>
     );
}
 
export default Contact;