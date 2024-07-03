import { MdArrowOutward } from "react-icons/md";


const Services = () => {
    return (
        <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 bg-[#FFFFF5] font-inter lg:p-10 p-5">
            <div>
            <p className="text-sub font-inter rounded-2xl px-2 py-1 border border-[#343268] bg-[#FFFFF5] w-[130px] text-center">Service</p>
                <h1 className="text-core text-3xl lg:text-4xl lg:max-w-md font-inter font-semibold mt-2 lg:mt-5">Empowering Health, Enriching Lives</h1>
                <p className="text-sub font-inter mt-2 lg:mt-5 max-w-lg">
                We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                </p>
                <button className="flex justify-center rounded-xl items-center btn bg-highlight text-core text-inter mt-12 hover:bg-core hover:text-highlight"><span>Learn more</span><MdArrowOutward /></button>
            </div>
        </div>
    );
};

export default Services;