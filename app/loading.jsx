'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <div className="h-[200px] w-[200px] animate-pulse bg-white/10 rounded-full" />
    </div>
  )
});

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <Suspense fallback={
        <div className="h-[200px] w-[200px] animate-pulse bg-white/10 rounded-full" />
      }>
        <Player
          autoplay
          loop
          src="/services.json"
          style={{ height: '200px', width: '200px', filter: 'invert(1)' }}
          onError={(error) => {
            console.error('Lottie animation error:', error);
          }}
        />
      </Suspense>
    </div>
  );
}
