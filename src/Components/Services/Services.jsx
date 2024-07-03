import { MdArrowOutward } from "react-icons/md";
import img1 from "../../assets/Rectangle 27-2.png";
import img2 from "../../assets/Rectangle 27-1.png";
import img3 from "../../assets/Rectangle 27.png";
import ImgCard from "./ImgCard";

const Services = () => {
    return (
        <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 bg-[#FFFFF5] font-inter lg:p-10 p-5 rounded-3xl gap-4 lg:gap-14 mt-28">
            <div>
            <p className="text-sub font-inter rounded-2xl px-2 py-1 border border-[#343268] bg-base-100 w-[130px] text-center">Service</p>
                <h1 className="text-core text-3xl lg:text-4xl lg:max-w-md font-inter font-semibold mt-2 lg:mt-5">Empowering Health, Enriching Lives</h1>
                <p className="text-sub font-inter mt-2 lg:mt-5 max-w-lg">
                We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                </p>
                <button className="flex justify-center rounded-xl items-center btn bg-highlight text-core text-inter mt-12 hover:bg-core hover:text-highlight"><span>Appointment</span><MdArrowOutward /></button>
            </div>
            <div className="flex justify-end ">
            <ImgCard img={img1} desc={"Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"} title={"Advanced Technology"}></ImgCard>
            
            
            </div>
            <div className="flex justify-start">
                <ImgCard img={img2} desc={"Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"} title={"Online Doctor Meet"}></ImgCard>
            </div>
            <div className="flex justify-end">
                <ImgCard img={img3} desc={"Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"} title={"Consultancy your health"}></ImgCard>
            </div>
        </div>
    );
};

export default Services;