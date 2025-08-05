"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import About from "./components/landing/About";
import Teams from "./components/landing/Teams";
import Sponsors from "./components/landing/Sponsors";
import TeamMembers from "./components/landing/TeamMembers";

const Hero = dynamic(() => import("./components/landing/Hero"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen ">
      <Hero />
      <About />
      <Teams />
      <Sponsors />
      <TeamMembers />
    </div>
  );
}
