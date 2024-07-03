/* eslint-disable react/prop-types */
import { MdArrowOutward } from "react-icons/md";


const ImgCard = ({title,img,desc}) => {
    return (
        <div>
            <div className="w-fit relative">
            <img className="rounded-3xl" src={img}  />
            <div className="absolute z-50 bg-[#02004399] bottom-0 lg:bottom-5 left-0 lg:left-5 flex gap-2 lg:px-5 lg:py-5 px-3 py-5 lg:w-[65%] rounded-3xl">
                <div className="flex-1">
                <h3 className="text-[#FFFFFF] text-xl">
                {title}

                </h3>
                <p className="text-[#FFFFF5] text-sm mt-2 opacity-80">{desc}</p>
                </div>
                <div className="w-fit flex items-end">
                    <p className="bg-highlight hover:bg-core text-[#FFFFFF] rounded-full w-fit p-2 cursor-pointer transition-colors "><MdArrowOutward className="text-2xl"/></p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ImgCard;