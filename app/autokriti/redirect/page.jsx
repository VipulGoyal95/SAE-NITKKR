"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useScrollToTop } from "@/app/utils/scrollToTop";
import Link from "next/link";


const DynamicLottiePlayer = dynamic(
    () => import("@lottiefiles/react-lottie-player").then(mod => ({ default: mod.Player })),
    { ssr: false }
);

export default function Redirect() {
    const router = useRouter();
    const [isStopped, setIsStopped] = useState(false);
    const [isLottieLoaded, setIsLottieLoaded] = useState(false);

    useEffect(() => {
        setIsLottieLoaded(true);
        const timeout = setTimeout(() => {
            // Use replace to prevent user from returning to this page
            router.replace("/autokriti/login");
        }, 5000);
        return () => clearTimeout(timeout);
    }, [router]);
    useScrollToTop();
    return (
        <>
            <Head>
                <title>Congratulations</title>
                <meta name="robots" content="noindex, follow" />
            </Head>
            <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 bg-black">
                {/* Background Elements */}


                <div className="w-[400px] h-[400px] flex items-center justify-center">
                    {isLottieLoaded ? (
                        <DynamicLottiePlayer
                            autoplay
                            keepLastFrame
                            src="/tick.json"
                            style={{ width: "100%", height: "100%" }}
                            loop={false}
                            onEvent={(event) => {
                                if (event === "complete") {
                                    setIsStopped(true);
                                }
                            }}
                        />
                    ) : (
                        // Empty placeholder so text doesn't shift
                        <div className="w-full h-full" />
                    )}
                </div>

                <h1 className="text-3xl font-bold mt-6 text-green-400">
                    Congratulation you had successfully Registered for Autokriti 15.0!
                </h1>
                <p className="text-lg mt-2 text-gray-300 text-center max-w-md">
                    Stay Tuned on your registered email id for further updates.
                </p>
                <p className="text-base mt-6 text-purple-300 text-center">
                    Redirecting in 5 seconds...
                </p>
            </div>
        </>
    );
}
