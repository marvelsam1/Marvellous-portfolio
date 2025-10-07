import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="About">
      <div
        className="flex md:flex-row flex-col items-center md:gap-32 pt-10 md:px-[8rem] "
        id="about"
      >
        <div className="text-white text-left  font-poppins">
          <h1 className="md:text-3xl text-xl text-[#ccd6f6] flex items-center gap-3">
            <span className=" font-sfmono  text-[#64ffda] pr-1">01.</span>
            <p>About Me</p>
            <div className="border-t-[1px] border-t-[#a8b2d1] md:w-[20rem] w-[10rem] opacity-25 "></div>
          </h1>
          {/* <p className="md:text-[19px] text-[14px] font-bold">
            Frontend Developer
          </p> */}
          <p
            className="md:w-[600px] text-[#a8b2d1bb] md:leading-[1.5rem] md:text-sm text-[12px] md:py-5 py-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Hello! My name is Marvellous, and I’m a passionate Frontend
            Developer who loves bringing ideas to life on the web. My journey
            into web development began when I discovered how exciting it was to
            turn simple designs into interactive websites using HTML, CSS, and
            JavaScript. <br />
            <br /> What started as curiosity soon became a deep passion for
            building digital experiences that are both functional and beautiful.
            Fast forward to today, I’ve had the opportunity to work on several
            real-world projects — from eCommerce platforms and real estate web
            apps to medical websites and agro-based company websites. <br />
            <br /> I currently focus on helping businesses establish strong
            online presence through responsive, high-performing, and
            user-centered web applications. Beyond client projects, I’m always
            learning and improving — recently diving deeper into React,
            TypeScript, Next.js, and Node.js to build scalable, full-stack
            applications. I also enjoy mentoring others and teaching the
            fundamentals of web development. <br />
            <br /> Here are a few technologies I’ve been working with recently:
          </p>

          {/* <button
            onClick={handleSeeMore}
            className="rounded-full text-black py-2 px-5 my-1 bg-lightBlue border-none text-sm font-bold"
          >
            See More
          </button> */}
        </div>
        <div className="hidden md:block">
          <img
            className="rounded-md"
            src="assets/Mr Marvellous cropped.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center md:gap-32 pb-10 md:px-[8rem] px-2">
        <ul className="grid grid-cols-2 text-sm md:gap-x-[4rem] gap-y-4 text-[#a8b2d1bb]">
          <li>
            <span className="text-[#64ffda] pr-2">-</span>
            Typescript
          </li>
          <li>
            <span className="text-[#64ffda] pr-2">-</span> React js
          </li>
          <li>
            <span className="text-[#64ffda] pr-2">-</span> Next js
          </li>
          <li>
            <span className="text-[#64ffda] pr-2">-</span> Node Js
          </li>
          <li>
            <span className="text-[#64ffda] pr-2">-</span> Tailwind CSS
          </li>
          <li>
            <span className="text-[#64ffda] pr-2">-</span> CSS
          </li>
          <li>
            <span className="text-[#64ffda] pr-2">-</span> HTML
          </li>
        </ul>
        <div></div>
      </div>
      <div className="md:hidden block">
        <img
          className="rounded-md"
          src="assets/Mr Marvellous cropped.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
