import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
    const[seeMore, setSeeMore] = useState(false)

    const handleSeeMore = () => {
        setSeeMore(!seeMore)
    }

    useEffect(() => {
        AOS.init();
      }, [])

    return ( 
        <div id="About"> 
            <div className="flex md:flex-row flex-col items-center md:gap-32 py-10" id="about">
                <div className="hidden md:flex">
                    <img className="rounded-full md:w-[400px] md:h-[350px] w-[700px] h-[250px]" src="assets/Mr Marvellous cropped.jpg" alt="" />
                </div>
                <div className="text-white md:text-left text-center">
                    <h1 className="text-3xl font-bold">About <span className="text-lightBlue">Me</span></h1>
                    <p className="md:text-[19px] text-[14px] font-bold">Frontend Developer</p>
                    <p className="md:w-[600px] w-[300px] leading-6 md:text-sm text-[12px] font-semibold md:py-5 py-8" data-aos="fade-up" data-aos-duration="1000">
                        I am a highly motivated and results-driven Frontend-developer with a diverse background and a proven track record of success. My passion for this industry has driven me to continuously seek opportunities for growth and development making me a versatile candidate for Frontend development roles.
                        I possess the right technical skills needed in building pixel-perfect, user-centric and scalable web Apps for startups and businesses.
                        I am also known for my exceptional problem-solving, communication and team-work skills, which enables me to collaborate effectively with cross-functional teams and convey complex ideas in a clear and concise manner.
                        I thrive under pressure and I’m adept at prioritizing tasks to meet important deadlines
                    </p>
                    {seeMore && (
                        <p className="md:w-[600px] w-[300px] leading-6 md:text-sm text-[12px] font-semibold" data-aos="fade-down" data-aos-duration="500"> 
                           Furthermore, my commitment to continuous improvement drives me to stay up-to-date with 
                           industry trends and emerging technologies. I am confident that the 
                           diverse range of skills I possess will make me a valuable asset to your organization.
                        </p>
                    ) }
                    <button onClick={handleSeeMore} className="rounded-full text-black py-2 px-5 my-1 bg-lightBlue border-none text-sm font-bold">See More</button>
                </div>
            </div>
        </div>
     );
}
 
export default About;