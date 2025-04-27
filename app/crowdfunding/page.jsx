"use client";

import FundDistribution from "../components/crowdfunding/FundDistribution";
import HeroSection from "../components/crowdfunding/Herosection";
import FacultyMessage from "../components/crowdfunding/Facultymessage";
import TeamTimeline from "../components/crowdfunding/TeamAchievement";
import Testimonials from "../components/crowdfunding/Testimonials";
import ThreeDWrapper from "../components/crowdfunding/ThreeDWrapper";
import dynamic from "next/dynamic";

// Dynamically import components with animations to avoid SSR issues
const DynamicThreeDWrapper = dynamic(
  () => import("../components/crowdfunding/ThreeDWrapper"),
  { ssr: false }
);

export default function Crowdfunding() {
  return (
    <DynamicThreeDWrapper>
      <div>
        <HeroSection />
        <FundDistribution />
        <FacultyMessage />
        <TeamTimeline />
        <Testimonials />
      </div>
    </DynamicThreeDWrapper>
  );
}
