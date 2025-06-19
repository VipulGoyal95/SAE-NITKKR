"use client"
import { useEffect } from "react";
import Herosection from "../components/Herosection";
import MeetTheTeam from "../components/MeetTheTeam";
import Participation from "../components/Participation";
import ScrollingGallery from "../components/ScrollingGallery";
import Participation2 from "../components/Participation2";



export default function AcceleronsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Herosection />
            <div className="bg-black">
                <div className="max-[600px]:hidden">
                    <Participation />
                </div>
                <div className="hidden max-[600px]:block">
                    <Participation2 />
                </div>
                <ScrollingGallery />
                <MeetTheTeam />
            </div>
        </div>
    )
}
