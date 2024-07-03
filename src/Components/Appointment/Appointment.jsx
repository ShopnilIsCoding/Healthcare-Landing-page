import { MdArrowOutward } from "react-icons/md";
import appointmentImg from "../../assets/Rectangle 32.png";
import logo from "../../assets/logo light.png";
const Appointment = () => {
  return (
    <div className="relative">
      <div className="container mx-auto font-inter my-16 lg:my-40">
      <div className="relative">
        <img className="w-full rounded-3xl" src={appointmentImg} alt="Appointment" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#020043,_rgba(2,_0,_67,_0.30))] top-0 left-0 rounded-3xl"></div>
        <div className="absolute inset-0 flex justify-between z-10 lg:px-16 lg:py-20 p-3">
          <div className="flex justify-center flex-col flex-1"><h1 className="text-[#FFFFF5]  lg:text-4xl text-lg font-bold max-w-xs tracking-wider lg:mb-6 ">
            Get Your First Appointment at 50% Off!
          </h1>
          <div className="">
            <button className="btn bg-highlight border-0 text-core rounded-xl lg:px-6 px-0  hover:bg-core hover:text-[#FFFFFF] transition-colors lg:mr-6 mr-1">Appointment <MdArrowOutward> </MdArrowOutward> </button>
          <button className="btn btn-outline border border-[#FFFFFF] text-[#FFFFFF] hover:bg-highlight hover:text-core rounded-xl lg:px-6 transition-colors px-0">Learn More <MdArrowOutward/> </button>
          </div>
          </div>
          <div className="w-fit h-fit">
            <img className="h-3 lg:h-auto" src={logo} alt="" />
          </div>

        </div>
        
      </div>
    </div>
    <div className='bg-base-100  absolute top-0 -z-50 h-[30%] w-full'></div>
            {/* <div className='bg-[linear-gradient(to_right,#E1F5FF,#E5F6FF,#E5F6FF,#EDF9FF,#E5F6FF)]  absolute top-0 -z-50 h-[25%] w-full'></div> */}
            <div className='bg-base-300  absolute top-[30%] -z-50 h-[25%] w-full'></div>
            {/* <div className='bg-[linear-gradient(to_right,#C1D5DE,#C7DBE5,#E8F7FF,#EDF9FF,#E8F7FF,#C7DBE5)]  absolute top-[25%] -z-50 h-[25%] w-full'></div> */}
            <div className='bg-base-200  absolute top-[50%] -z-50 h-[25%] w-full'></div>
            {/* <div className='bg-[linear-gradient(to_right,#DDF3FD,#ECF9FF,#ECF9FF,#ECF9FF,#DDF3FD,#DDF3FD)]  absolute top-[50%] -z-50 h-[25%] w-full'></div> */}
            <div className='bg-base-300  absolute top-[70%] -z-50 h-[20%] w-full'></div>
            {/* <div className='bg-[linear-gradient(to_right,#C1D5DE,#C7DBE5,#E8F7FF,#EDF9FF,#E8F7FF,#C7DBE5)]  absolute top-[75%] -z-50 h-[25%] w-full'></div> */}


            {/* these commented code can  be used for customizations */}
    </div>
  );
};

export default Appointment;
