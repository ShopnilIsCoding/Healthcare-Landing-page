
import bannerImg from '../../assets/Rectangle 5.png'
const Banner = () => {
    return (
        <div className='mt-12 relative'>
            <div className='relative rounded-[62px] overflow-hidden container mx-auto' data-aos="fade-up" data-aos-duration="1000">
                <img src={bannerImg} className='w-full ' />
                <div className='bg-[linear-gradient(to_bottom,_rgba(0,_155,_144,_0.09),_rgba(2,_11,_72,_0.44))] absolute z-10 h-full w-full top-0'></div>
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

export default Banner;