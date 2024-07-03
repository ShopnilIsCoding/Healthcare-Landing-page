/* eslint-disable react/prop-types */
const StatsLgCard = ({value,desc,icon,sign}) => {
    return (
        <div className="bg-[#FBFBFB]  p-5 rounded-[24px] h-full flex flex-col">
            <h1 className="text-core text-4xl font-semibold font-inter mb-3">{value}{sign}</h1>
            <p className="text-sub text-sm mb-8 font-inter max-w-[150px] ">{desc}</p>
            <img className="mx-auto flex-1 p-4" src={icon}  />
            
        </div>
    );
};

export default StatsLgCard;