"use client";

import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useScrollToTop } from "@/app/utils/scrollToTop";
import Link from "next/link";

const DynamicThreeDWrapper = dynamic(
    () => import("../../components/crowdfunding/ThreeDWrapper"),
    { ssr: false }
);

const DynamicLottiePlayer = dynamic(
    () => import("@lottiefiles/react-lottie-player").then(mod => ({ default: mod.Player })),
    { ssr: false }
);

export default function ThankYou() {
    const router = useRouter();
    const [isStopped, setIsStopped] = useState(false);
    const [isLottieLoaded, setIsLottieLoaded] = useState(false);

    useEffect(() => {
        setIsLottieLoaded(true);
        const timeout = setTimeout(() => {
            router.push("/crowdfunding"); // redirect to homepage after delay (optional)
          }, 7000);
          return () => clearTimeout(timeout);
    }, [router]);
    useScrollToTop();
    return (
        <>
            <Head>
                <title>Thank You</title>
                <meta name="robots" content="noindex, follow" />
            </Head>
            <DynamicThreeDWrapper>
                <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 bg-gray-900">
                    {/* Background Elements */}
                    <div className="absolute top-0 left-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-900/30 to-indigo-900/20 blur-xl"></div>
                    <div className="absolute top-[20%] right-[5%] w-96 h-96 rounded-full bg-gradient-to-l from-purple-900/30 to-blue-900/20 blur-xl"></div>
                    <div className="absolute bottom-0 left-[20%] w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-900/30 to-blue-900/20 blur-xl"></div>

                    {/* Animated Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#6366f1_1px,transparent_1px),linear-gradient(to_right,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                    
                    {isLottieLoaded && (
                        <DynamicLottiePlayer
                            autoplay
                            keepLastFrame
                            src="/tick.json"
                            style={{ width: "400px", height: "400px" }}
                            loop={false}
                            onEvent={(event) => {
                            if (event === "complete") {
                                setIsStopped(true);
                            }
                            }}
                        />
                    )}
                    
                    <h1 className="text-3xl font-bold mt-6 text-green-400">Thank you!</h1>
                    <p className="text-lg mt-2 text-gray-300 text-center max-w-md">
                        Your contribution has been received successfully. We deeply appreciate your support.
                    </p>
                </div>
            </DynamicThreeDWrapper>
        </>
    );
}
