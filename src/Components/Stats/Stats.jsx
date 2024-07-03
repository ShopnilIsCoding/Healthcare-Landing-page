import StatsLgCard from "./Cards/StatsLgCard";
import pieChart from "../../assets/pieChart.png"
import videoIcon from "../../assets/video.png"
import StatsMdCard from "./Cards/StatsMdCard";
import certificate from "../../assets/certificate.png";
import coins from "../../assets/coins.png";
import StatsSmCard from "./Cards/StatsSmCard";
import person1 from "../../assets/Ellipse 2.png";
import person2 from "../../assets/Ellipse 3.png";
import person3 from "../../assets/Ellipse 4.png";
import person4 from "../../assets/Ellipse 5.png";
import star from "../../assets/fi-sr-star.png";
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
                    <StatsMdCard value={500} sign1={"+"} desc={"Board-certified doctors"} icon={certificate}></StatsMdCard>
                </div>
                <div className="lg:col-span-1 col-start-1 col-span-2 lg:col-start-3 lg:row-span-2">
                    <StatsSmCard person1={person1} person2={person2} person3={person3} person4={person4} icon={star} value={4.8} desc={"Over 20,000 Patient"}></StatsSmCard>
                </div>
                <div className="lg:col-span-1 lg:col-start-4 lg:row-span-2 col-start-2 row-start-3">
                    <StatsMdCard desc={"Money spend for poor patient"} value={5000} sign2={"$"} icon={coins} ></StatsMdCard>
                </div>
                <div className="lg:col-span-1 lg:col-start-5 lg:row-span-3 lg:row-start-1 col-start-2 row-start-2">
                    <StatsLgCard icon={videoIcon} value={50} sign={"+"} desc={"Free lession video for patient"}></StatsLgCard>
                </div>

            </div>
            
        </div>
    );
};

export default Stats;