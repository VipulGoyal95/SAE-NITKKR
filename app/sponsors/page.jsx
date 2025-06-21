"use client"
import React from 'react';
import { 
  Crown, 
  Star, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Award, 
  Heart,
  ArrowRight,
  CheckCircle,
  Globe,
  Target,
  Sparkles,
  Building2,
  Handshake
} from 'lucide-react';
import { useRouter } from 'next/navigation'


function Page() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                <Handshake className="w-16 h-16 text-purple-400" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-8 leading-tight">
              Become a Sponsor
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Join hands with SAE NIT Kurukshetra to inspire future engineers and drive real innovation in the mobility and automotive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={()=> router.push("/contactus")} className="px-12 py-5 cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl shadow-purple-500/25">
               Know More <ArrowRight className="w-6 h-6" />
              </button>
              
            </div>
          </div>
        </div>
      </div>

       {/* Sponsors Logos Section */}
       <div className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-white">Current </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Sponsors and Partners</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center mb-16">
            <img src="/assets/images/sponsors/Altium2.webp" alt="Altium" className="h-32 object-contain" />
            <img src="/assets/images/sponsors/pankaj_potentiometer.webp" alt="Pankaj Potentiometers" className="h-32 object-contain" />
            <img src="/assets/images/sponsors/bender.webp" alt="Bender" className="h-32 object-contain" />
            <img src="/assets/images/sponsors/bare metal comp.webp" alt="Bare Metal Comp" className="h-32 object-contain" />
            <img src="/assets/images/sponsors/solidworks.webp" alt="SolidWorks" className="h-32 object-contain col-span-2 sm:col-span-1" />
            {/* <img src="/assets/images/sponsors/" alt="Altium2" className="h-32 object-contain col-span-2 sm:col-span-1" /> */}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 mt-20">
            <span className="text-white">Previous </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Sponsors</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
            <img src="/assets/images/sponsors/altium.webp" alt="Altium" className="h-32 object-contain" />
            <img src="/assets/images/sponsors/pankaj_potentiometer.webp" alt="Pankaj Potentiometers" className="h-32 object-contain" />
            <img src="/assets/images/sponsors/bender.webp" alt="Bender" className="h-32 object-contain" />
            <img src="/assets/images/sponsors/bare metal comp.webp" alt="Bare Metal Comp" className="h-32 object-contain" />
            <img src="/assets/images/sponsors/solidworks.webp" alt="SolidWorks" className="h-32 object-contain col-span-2 sm:col-span-1" />
            <img src="/assets/images/sponsors/Altium2.webp" alt="Altium2" className="h-32 object-contain col-span-2 sm:col-span-1" />
          </div>
        </div>
      </div>
     

            {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-10">
            <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
              <Heart className="w-16 h-16 text-purple-400" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Accelerate Innovation?</h2>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
          Join our exclusive sponsorship initiative today and become part of SAE NIT Kurukshetra — a student-driven force shaping the future of mobility, engineering, and automotive excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={()=>router.push("/contactus") } className="px-12 py-5 cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl shadow-purple-500/25">
              Become a Sponsor <Zap className="w-6 h-6" />
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;