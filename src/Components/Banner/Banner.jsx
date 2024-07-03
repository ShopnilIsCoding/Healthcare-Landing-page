
import bannerImg from '../../assets/Rectangle 5.png'
const Banner = () => {
    return (
        <div className='mt-12 relative'>
            <div className='relative rounded-[62px] overflow-hidden container mx-auto' >
                <img src={bannerImg} className='w-full ' />
                <div className='bg-[linear-gradient(179deg,_rgba(0,193,157,0.00)-25.42%,rgba(2,0,67,0.47)107.11%)] absolute z-10 h-full w-full top-0'></div>
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