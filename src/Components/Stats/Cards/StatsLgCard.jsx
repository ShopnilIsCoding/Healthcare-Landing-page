/* eslint-disable react/prop-types */
import  { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StatsLgCard = ({ value, desc, icon, sign, delay }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="bg-[#FBFBFB] p-5 rounded-[24px] h-full flex flex-col border border-[#02004333]"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <h1 className="text-core text-4xl font-semibold font-inter mb-3">
        <CountUp start={0} end={value} duration={5} />{sign}
      </h1>
      <p className="text-sub text-sm mb-8 font-inter max-w-[150px]">
        {desc}
      </p>
      <img className="mx-auto flex-1 p-4" src={icon} alt="icon" />
    </div>
  );
};

export default StatsLgCard;
