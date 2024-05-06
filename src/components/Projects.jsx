import { works } from "./Data";
import Cardproject from "./Cardproject";

const Projects = () => {

    return ( 
        <div id="Projects">
            <div className="py-10" id="projects">
                <h1 className="text-3xl font-bold text-white pb-6 text-center">Projects</h1>
            <div className="flex items-center gap-10 flex-wrap justify-center">
                {
                    works.map(items => <Cardproject items={items} key={items.id}/> )
                }
            </div>
            </div>
        </div>
     );
}
 
export default Projects;