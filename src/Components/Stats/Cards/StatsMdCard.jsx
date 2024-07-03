/* eslint-disable react/prop-types */
import  { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StatsMdCard = ({ value, desc, icon, sign1, sign2, delay }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="p-5 rounded-[24px] h-full flex flex-col border border-[#02004333] bg-[#FFFFF5]"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <h1 className="text-core text-4xl font-semibold font-inter mb-3">
        {sign2}<CountUp start={0} end={value} duration={5} />{sign1}
      </h1>
      <p className="text-sub text-sm font-inter max-w-[110px]">
        {desc}
      </p>
      <div className="flex lg:justify-end justify-center flex-1 items-end">
        <img className="lg:h-32 lg:p-0 p-6 md:h-44 h-28" src={icon} alt="icon" />
      </div>
    </div>
  );
};

export default StatsMdCard;
