"use client"

import FundDistribution from "../components/crowdfunding/FundDistribution";
import HeroSection from "../components/crowdfunding/Herosection";
import FacultyMessage from "../components/crowdfunding/Facultymessage";
import TeamTimeline from "../components/crowdfunding/TeamAchievement";
import Testimonials from "../components/crowdfunding/Testimonials";
import ThreeDWrapper from "../components/crowdfunding/ThreeDWrapper";
import dynamic from "next/dynamic";

const DynamicThreeDWrapper = dynamic(
  () => import("../components/crowdfunding/ThreeDWrapper"),
  { ssr: false }
);

const Threejswrapper = () => {
  return (
    <DynamicThreeDWrapper>
      <div>
        <HeroSection />
        {/* <FundDistribution /> */}
        <FacultyMessage />
        <TeamTimeline />
        <Testimonials />
      </div>
    </DynamicThreeDWrapper>
  )
}

export default Threejswrapper
