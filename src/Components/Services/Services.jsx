import { MdArrowOutward } from "react-icons/md";
import img1 from "../../assets/Rectangle 27-2.png";
import img2 from "../../assets/Rectangle 27-1.png";
import img3 from "../../assets/Rectangle 27.png";
import ImgCard from "./ImgCard";

const Services = () => {
    return (
        <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 bg-[#FFFFF5] font-inter lg:p-10 p-5 rounded-3xl gap-4 lg:gap-14 mt-28">
            <div>
            <p className="text-sub font-inter rounded-2xl px-2 py-1 border border-[#343268] bg-[#FFFFF5] w-[130px] text-center">Service</p>
                <h1 className="text-core text-3xl lg:text-4xl lg:max-w-md font-inter font-semibold mt-2 lg:mt-5">Empowering Health, Enriching Lives</h1>
                <p className="text-sub font-inter mt-2 lg:mt-5 max-w-lg">
                We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                </p>
                <button className="flex justify-center rounded-xl items-center btn bg-highlight text-core text-inter mt-12 hover:bg-core hover:text-highlight"><span>Appointment</span><MdArrowOutward /></button>
            </div>
            <div className="flex justify-end ">
            <div className="w-fit relative">
            <img className="rounded-3xl" src={img1} alt="" />
            <div className="absolute z-50 bg-[#02004399] bottom-0 lg:bottom-5 left-0 lg:left-5 flex gap-2 lg:px-5 lg:py-5 px-3 py-5 lg:w-[65%] rounded-3xl">
                <div className="flex-1">
                <h3 className="text-[#FFFFFF] text-xl">
                Advanced Technology

                </h3>
                <p className="text-[#FFFFF5] text-sm mt-2 opacity-80">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                </div>
                <div className="w-fit flex items-end">
                    <p className="bg-highlight hover:bg-core text-[#FFFFFF] rounded-full w-fit p-2 cursor-pointer transition-colors "><MdArrowOutward className="text-2xl"/></p>
                </div>
            </div>
            </div>
            
            
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