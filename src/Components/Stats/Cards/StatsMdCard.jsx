/* eslint-disable react/prop-types */


const StatsMdCard = ({value,desc,icon,sign1,sign2}) => {
    return (
        <div className="p-5 rounded-[24px] h-full flex flex-col border border-[#02004333] bg-[#FFFFF5]">
            <h1 className="text-core text-4xl font-semibold font-inter mb-3">{sign2}{value}{sign1}</h1>
            <p className="text-sub text-sm  font-inter max-w-[110px] ">{desc}</p>
            <div className="flex lg:justify-end justify-center flex-1 items-end">
            <img className=" lg:h-32 lg:p-0 p-6 md:h-44 h-28" src={icon}  />
            </div>
        </div>
    );
};

export default StatsMdCard;