import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FiGithub } from "react-icons/fi";
import { CgArrowTopRightR } from "react-icons/cg";

const Cardproject = ({ items }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="card rounded-lg  h-[25rem] bg-[#0e213edc] relative  shadow-2xl"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div>
        <img
          className="rounded-t-md w-full h-[140px]"
          src={items.image}
          alt=""
        />
      </div>
      <div className=" text-[#a8b2d1bb] p-6">
        <p className="text-2xl font-semibold py-3">{items.title}</p>
        <p className="w-[250px] text-sm">{items.content}</p>
        <p className="w-[250px] text-sm  pt-2">{items.stack}</p>
        <div className="flex items-center absolute bottom-6 gap-3">
          <FiGithub className="text-[#ccd6f6] text-[1.2rem]" />
          {/* <LuSquareArrowUpRight  /> */}
          <a href={items.link}>
            {" "}
            <CgArrowTopRightR className="text-[#ccd6f6] text-[1.2rem]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cardproject;
