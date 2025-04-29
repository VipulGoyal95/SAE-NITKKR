import Herosection from "../components/Herosection";
import MeetTheTeam from "../components/MeetTheTeam";
import Participation from "../components/Participation";
import ScrollingGallery from "../components/ScrollingGallery";


export default function Nitrox() {
    return (
        <div>
            <Herosection />
            <div className="bg-black">
                <Participation />
                <ScrollingGallery />
                <MeetTheTeam />
            </div>
        </div>
    )
}
