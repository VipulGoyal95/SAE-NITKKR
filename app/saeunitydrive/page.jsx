import FacultyMessage from "../components/crowdfunding/Facultymessage";
import TeamAchievement from "../components/crowdfunding/TeamAchievement";
import Testimonials from "../components/crowdfunding/Testimonials";
import Herosection from "../components/saeunitydrive/Herosection";
import AlumniCarousel from "../components/saeunitydrive/Alumni";

export const metadata = {
  title: "SAE Unity Drive"
}
export default function Saeunitydrive() {
  return (
    <div className="bg-gray-900">
      <Herosection />
      {/* <FacultyMessage /> */}
      {/* <TeamAchievement /> */}
      <AlumniCarousel />
      <Testimonials />
    </div>
  );
}
