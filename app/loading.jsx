'use client';
import dynamic from 'next/dynamic';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), {
  ssr: false
});

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <Player
        autoplay
        loop
        src="/services.json"
        style={{ height: '200px', width: '200px', filter: 'invert(1)' }}
      />
    </div>
  );
}
