import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Skills = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return ( 
        <div className="py-10" id="skills">
            <h1 className="text-3xl font-bold text-white text-center py-10" id="Skills">My Skills</h1>
            <div className="flex items-center justify-center gap-10 flex-wrap">
                <img className="w-[200px]" src="assets/html-logo-removebg-preview.png" alt=""  data-aos="fade-up" data-aos-duration="500"/>
                <img className="w-[160px]" src="assets/css-logo.png" alt=""data-aos="fade-up" data-aos-duration="500" />
                <img className="w-[250px]" src="assets/javascript-logo-removebg-preview.png" alt=""  data-aos="fade-up" data-aos-duration="500"/>
                <img className="w-[200px]" src="assets/react-logo-removebg-preview.png" alt="" data-aos="fade-up" data-aos-duration="500" />
                <img className="w-[200px]" src="assets/bootsrap-logo-removebg-preview.png" alt=""  data-aos="fade-up" data-aos-duration="500"/>
                <img className="w-[200px]" src="assets/tailwind-logo-removebg-preview.png" alt="" data-aos="fade-up" data-aos-duration="500" />
                <img className="w-[150px]" src="assets/git-logo-removebg-preview.png" alt="" data-aos="fade-up" data-aos-duration="500" />
                <img className="w-[200px]" src="assets/github-logo-removebg-preview.png" alt=""  data-aos="fade-up" data-aos-duration="500"/>
            </div>
        </div>
     );
}
 
export default Skills;