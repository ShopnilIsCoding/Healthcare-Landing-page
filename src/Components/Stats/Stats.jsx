import StatsLgCard from "./Cards/StatsLgCard";
import pieChart from "../../assets/pieChart.png"
import videoIcon from "../../assets/video.png"
const Stats = () => {
    return (
        <div className="container mx-auto font-inter mt-10">
            <div className="grid grid-cols-2 lg:grid-cols-5 lg:grid-rows-3 gap-10">
                <div className="lg:col-span-1 lg:row-span-3 lg:col-start-1">
                       <StatsLgCard value={90} sign={"%"} desc={"Patient satisfaction rate, reflecting our commitment."} icon={pieChart}></StatsLgCard>
                </div>
                <div className="lg:col-span-3 row-start-1 col-span-2 lg:row-span-1 lg:col-start-2 text-center text-core text-3xl lg:text-5xl max-w-lg mx-auto font-semibold">
                Comprehensive Care for Every Patient
                </div>
                <div className="lg:col-span-1 lg:col-start-2 lg:row-span-2">
                    2
                </div>
                <div className="lg:col-span-1 lg:col-start-3 lg:row-span-2">
                    3
                </div>
                <div className="lg:col-span-1 lg:col-start-4 lg:row-span-2">
                    4
                </div>
                <div className="lg:col-span-1 lg:col-start-5 lg:row-span-3 lg:row-start-1">
                    <StatsLgCard icon={videoIcon} value={50} sign={"+"} desc={"Free lession video for patient"}></StatsLgCard>
                </div>

            </div>
            
        </div>
    );
};

export default Stats;