"use client";

import { motion } from "framer-motion";
import MuxPlayer from "@mux/mux-player-react";

const ShowcaseVideo = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto mt-20 px-4">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-cyan-400/30
                   shadow-[0_0_20px_rgba(34,211,238,0.4),0_0_40px_rgba(168,85,247,0.25)]
                   bg-black/40 backdrop-blur-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Neon glow background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/30 blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-fuchsia-500/30 blur-3xl animate-pulse delay-300" />
        </div>

        {/* Mux Player */}
        <MuxPlayer
          playbackId="1ks1pwPYXn02hGcc9lr5lcahM2002a602hbmCdglXJ2HXA" // replace with actual playbackId
          streamType="on-demand"
          autoPlay="muted"
          loop
          muted
          playsInline
          poster="/assets/images/autokriti/video-poster.jpg"
          className="w-full aspect-video rounded-3xl"
          no-controls
        />

        {/* Overlay gradient for cinematic effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Title overlay */}
        <div className="absolute bottom-6 left-6 text-white/90">
          <h3 className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
            Drift Experience
          </h3>
          <p className="text-sm md:text-base text-zinc-300 mt-1 drop-shadow-[0_0_6px_rgba(255,0,255,0.6)]">
            Feel the adrenaline of the ride
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ShowcaseVideo;
