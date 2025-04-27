import FundDistribution from "../components/crowdfunding/FundDistribution";
import HeroSection from "../components/crowdfunding/Herosection";
import FacultyMessage from "../components/crowdfunding/Facultymessage";
import TeamTimeline from "../components/crowdfunding/TeamAchievement";
import Testimonials from "../components/crowdfunding/Testimonials";

export default function Crowdfunding(){
    return (
        <div>
            <HeroSection />
            <FundDistribution />
            <FacultyMessage />
            <TeamTimeline />
            <Testimonials />
        </div>

    )
}