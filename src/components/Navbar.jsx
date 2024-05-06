import { IoMenuOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Navbar = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };


    return ( 
        <nav className="sticky top-0 bg-black shadow-lg z-50">
        <div className="flex justify-between items-center md:px-32 py-5 px-4 top-0 relative">
            <p className=" font-bold md:text-2xl text-[20px] text-lightBlue">M_A</p>

            <ul className="lg:flex lg:flex-row flex-col items-center gap-10 text-[15px] font-medium hidden text-white">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Contact">Contacts</a></li>
            </ul>

            <IoMenuOutline
                className="visible lg:invisible cursor-pointer text-white lg:absolute text-[27px]"
                onClick={toggleMenu}
            />

                           

            {menuVisible && (
                <div className="flex flex-col gap-10 lg:flex-row absolute top-0 w-[100%] right-0 py-8 px-6 lg:px-0  shadow-lg z-20 bg-black " data-aos="fade-down" data-aos-duration="500">
                        <div className="flex items-center justify-between text-white">
                            <h1 className="font-bold md:text-2xl text-[20px] text-lightBlue">M_A</h1>
                            <FaTimes
                                onClick={toggleMenu}
                                className="lg:invisible visible cursor-pointer text-white"
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-10 justify-center">
                        <ul className="flex lg:flex-row flex-col items-center gap-10 text-sm font-medium text-white">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contacts</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
        </nav>
     );
}
 
export default Navbar;