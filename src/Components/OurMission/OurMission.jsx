import { MdArrowOutward } from "react-icons/md";
import missionImg from "../../assets/Rectangle 24.png";


const OurMission = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row lg:my-40 my-16 justify-between gap-8">
            <div className="lg:w-[35%]">
                <p className="text-sub font-inter rounded-2xl px-2 py-1 border border-[#343268] bg-[#FFFFF5] w-[130px] text-center">Who we are</p>
                <h1 className="text-core text-3xl lg:text-4xl lg:max-w-sm font-inter font-semibold mt-2 lg:mt-7">We Help To Get Soultions</h1>
                <p className="text-sub font-inter mt-2 lg:mt-7 max-w-lg">
                We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <button className="flex justify-center rounded-xl items-center btn bg-highlight text-core text-inter mt-12 hover:bg-core hover:text-highlight"><span>Learn more</span><MdArrowOutward /></button>
            </div>
            <div className="lg:w-[55%]">
                <div className="relative flex justify-end">
                    <img className="" src={missionImg} alt="" />
                    <div className="absolute z-50 bg-sub font-inter lg:px-[30px] lg:py-[40px] p-5 rounded-xl lg:rounded-3xl lg:-bottom-[10%] md:bottom-[5%] -bottom-[20%] lg:left-[10%] md:left-[50%] left-0 -translate-x-[0%] md:-translate-x-[25%] lg:-translate-x-0 lg:max-w-[390px]">
                    <h3 className="text-[#FFFFFF] lg:mb-2 font-medium lg:text-2xl text-xl">Our mission is simple</h3>
                    <p className="text-[#FFFFFFCC]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;