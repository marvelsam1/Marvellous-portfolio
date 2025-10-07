import { IoMenuOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SlMenu } from "react-icons/sl";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-[#0a192f] z-50">
      <div className="flex justify-between items-center md:px-16 py-5 px-4 top-0 relative">
        {/* Logo */}
        <p className="font-bold md:text-3xl text-[25px] text-[#64ffda] font-sfmono">
          M.
        </p>

        {/* Desktop Menu */}
        <ul className="lg:flex lg:flex-row hidden text-[#a8b2d1] items-center gap-10 text-sm font-Poppins">
          <li className="flex items-center gap-1">
            <span className="text-[#64ffda]">01.</span>
            <a href="#Home" className="hover:text-[#64ffda] transition">
              About
            </a>
          </li>
          <li className="flex items-center gap-1">
            <span className="text-[#64ffda]">02.</span>
            <a href="#About" className="hover:text-[#64ffda] transition">
              Experience
            </a>
          </li>
          <li className="flex items-center gap-1">
            <span className="text-[#64ffda]">03.</span>
            <a href="#Projects" className="hover:text-[#64ffda] transition">
              Work
            </a>
          </li>
          <li className="flex items-center gap-1">
            <span className="text-[#64ffda]">04.</span>
            <a href="#Contact" className="hover:text-[#64ffda] transition">
              Contact
            </a>
          </li>

          <a href="https://docs.google.com/document/d/18iiuF68KCBSZ4nc3oPNvCwgZwgtUpIj0QjVnTv29BJ0/edit?usp=sharing">
            <div className="relative group border-[2px] border-[#64ffda] rounded-md inline-block py-2 px-6 cursor-pointer text-[#64ffda] font-light">
              Resume
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
            </div>
          </a>
        </ul>

        {/* Mobile Icon */}
        <div
          className="lg:hidden text-white text-[27px] cursor-pointer z-50"
          onClick={toggleMobileMenu}
        >
          {isOpen ? <LiaTimesSolid /> : <SlMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[70%] sm:w-[50%] bg-[#0a192f] shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col text-[#a8b2d1] items-start gap-8 text-base font-Poppins p-8">
          <li onClick={toggleMobileMenu} className="flex items-center gap-2">
            <span className="text-[#64ffda]">01.</span>
            <a href="#Home" className="hover:text-[#64ffda] transition">
              About
            </a>
          </li>
          <li onClick={toggleMobileMenu} className="flex items-center gap-2">
            <span className="text-[#64ffda]">02.</span>
            <a href="#About" className="hover:text-[#64ffda] transition">
              Experience
            </a>
          </li>
          <li onClick={toggleMobileMenu} className="flex items-center gap-2">
            <span className="text-[#64ffda]">03.</span>
            <a href="#Projects" className="hover:text-[#64ffda] transition">
              Work
            </a>
          </li>
          <li onClick={toggleMobileMenu} className="flex items-center gap-2">
            <span className="text-[#64ffda]">04.</span>
            <a href="#Contact" className="hover:text-[#64ffda] transition">
              Contact
            </a>
          </li>
          <a href="https://docs.google.com/document/d/18iiuF68KCBSZ4nc3oPNvCwgZwgtUpIj0QjVnTv29BJ0/edit?usp=sharing">
            <div className="relative group border-[2px] border-[#64ffda] rounded-md inline-block py-2 px-6 cursor-pointer text-[#64ffda] font-light">
              Resume
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
            </div>
          </a>
        </ul>
      </div>

      {/* Overlay when mobile menu is open */}
      {/* {isOpen && (
        <div
          onClick={toggleMobileMenu}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-40"
        ></div>
      )} */}
    </nav>
  );
};

export default Navbar;
