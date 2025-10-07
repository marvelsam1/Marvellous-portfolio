import { works } from "./Data";
import Cardproject from "./Cardproject";

const Projects = () => {
  return (
    <div id="Projects">
      <div className="py-10 md:px-[8rem] px-2 " id="projects">
        {/* <h1 className="text-3xl font-bold text-white pb-6 text-center">Projects</h1> */}
        <h1 className="md:text-3xl text-xl pb-6 text-[#ccd6f6] flex items-center gap-3">
          <span className=" font-sfmono text-[#64ffda] pr-1">02.</span>
          <p>Projects I worked on</p>
          <div className="border-t-[1px] border-t-[#a8b2d1] md:w-[20rem] w-[5rem] opacity-25 "></div>
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-4 flex-wrap justify-between">
          {works.map((items) => (
            <Cardproject items={items} key={items.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
