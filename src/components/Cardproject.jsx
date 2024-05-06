import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Cardproject = ( { items }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return ( 
        <div className="card rounded-3xl p-6 shadow-2xl" data-aos="fade-up" data-aos-duration="500">
            <div>
                <img className="rounded-lg w-[250px] h-[140px]" src={items.image} alt="" />
            </div>
            <div className=" text-white">
                <p className="text-2xl font-semibold py-3">{items.title}</p>
                <p className="w-[250px] text-[12px]">{items.content}</p>
                <p className="w-[250px] text-sm font-semibold pt-2">{items.stack}</p>
                <button className="py-2 px-6 bg-lightBlue rounded-full text-black text-center mt-3"><a href={items.link}>View project</a></button>
            </div>
        </div>
     );
}
 
export default Cardproject;