/* eslint-disable react/prop-types */
const StatsSmCard = ({
  value,
  desc,
  person1,
  person2,
  person3,
  person4,
  icon,
}) => {
  return (
    <div className="lg:pt-16 h-full">
        <div className="p-5 rounded-[24px] h-full flex flex-col border border-[#02004333] bg-[#FBFBFB] items-center lg:items-start">
      <div className="flex justify-start items-center gap-2 mb-4">
        <h1 className="text-core text-4xl font-semibold font-inter">
          {value}
        </h1>
        <img src={icon} />
      </div>
      <p className="text-sub text-sm mb-6  font-inter flex-1">{desc}</p>
      <div>
        <div className="flex ">
          <div className="relative">
            <img
              className="size-[48px] z-40"
              src={person1}
              alt="person1"
            />
          </div>
          <div className="relative -ml-3">
            <img
              className="size-[48px] z-30"
              src={person2}
              alt="person2"
            />
          </div>
          <div className="relative -ml-3">
            <img
              className="size-[48px] z-20"
              src={person3}
              alt="person3"
            />
          </div>
          <div className="relative -ml-3">
            <img
              className="size-[48px] z-10"
              src={person4}
              alt="person4"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StatsSmCard;
