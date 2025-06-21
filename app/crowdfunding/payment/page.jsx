"use client"
import {useState} from 'react';
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaCopy } from "react-icons/fa6";
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { doc, updateDoc } from "firebase/firestore";
import db from "../../firebase"; // adjust path if needed
import { useRouter } from 'next/navigation'
// import ThreeDWrapper from "../../components/crowdfunding/ThreeDWrapper"
const DynamicThreeDWrapper = dynamic(
    () => import("../../components/crowdfunding/ThreeDWrapper"),
    { ssr: false }
  );

const textToCopy = "8570865708@sbi";
const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success("UPI ID copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast.error("Failed to copy text!");
    }
  };

  const handleCopy2 = async () => {
    try {
      await navigator.clipboard.writeText("30993905530");
      toast.success("Account No. copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast.error("Failed to copy text!");
    }
  };

  const handleCopy3 = async () => {
    try {
      await navigator.clipboard.writeText("SBIN0006260");
      toast.success("IFSC Code copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast.error("Failed to copy text!");
    }
  };

  


const Payment=()=>{
    const [loading,setLoading] = useState(false);
    const router = useRouter();
    const handleSubmit = async () => {
      const docId = sessionStorage.getItem("crowdfunding2025_userid");
    
      if (!docId) {
        console.error("No user ID found in session storage.");
        return;
      }
    
      try {
        const userDocRef = doc(db, "CrowdFunding2025", docId);
        await updateDoc(userDocRef, {
          confirmed: true,
        });
        router.push("/crowdfunding/thankyou");
        // console.log("User contribution confirmed successfully.");
      } catch (error) {
        console.error("Error confirming user contribution:", error);
      }
    };
    return(
        <DynamicThreeDWrapper>
            <Toaster
                position="top-right"
                toastOptions={{
                style: {
                    background: '#1e1e2f',
                    color: '#f5f5f5',
                    border: '1px solid #333',
                    borderRadius: '10px',
                },
                success: {
                    iconTheme: {
                    primary: '#4ade80', // green
                    secondary: '#1e1e2f',
                    },
                },
                error: {
                    iconTheme: {
                    primary: '#f87171', // red
                    secondary: '#1e1e2f',
                    },
                },
                }}
            />
            <div className="min-h-screen text-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-900/30 to-indigo-900/20 blur-xl"></div>
                <div className="absolute top-[20%] right-[5%] w-96 h-96 rounded-full bg-gradient-to-l from-purple-900/30 to-blue-900/20 blur-xl"></div>
                <div className="absolute bottom-0 left-[20%] w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-900/30 to-blue-900/20 blur-xl"></div>

                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#6366f1_1px,transparent_1px),linear-gradient(to_right,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="container mx-auto px-4 py-16 relative z-10">
                    <div className="max-w-2xl mt-12 mx-auto text-center">
                        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                            Scan This QR and Make Payment
                        </h1>

                        <Image src="/assets/images/paymentQR/MainQRcode.webp" alt="paymentQR" width={370} height={400} className="mx-auto" />
                        
                        <div style={{ display: 'flex', alignItems: "center", gap: "3px", flexWrap: "wrap", justifyContent: "center" }} className="mt-6 text-[22px]">
                            <p>UPI ID:</p>
                            <p>8570865708@sbi</p>
                            <button className="cursor-pointer ml-4" onClick={handleCopy}><FaCopy /></button>
                        </div>
                        {/* <div className="mx-auto w-[80%] my-10 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500"></div> */}
                        <div className="mt-10">
                            <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                                Bank Account Details
                            </h1>
                            <div className="mx-auto text-center text-[23px]">
                                <p >
                                    Account Number: 30993905530
                                    <button className="cursor-pointer ml-4" onClick={handleCopy2}><FaCopy /></button>
                                </p>
                                <p>
                                    IFSC Code: SBIN0006260
                                    <button className="cursor-pointer ml-4" onClick={handleCopy3}><FaCopy /></button>
                                </p>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-fit mx-auto cursor-pointer mt-12 py-4 px-6 text-[22px] font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-[1.02]"
                            disabled={loading}
                            onClick={handleSubmit}
                        >
                            {
                            loading? <Loader /> : "Confirm"
                            }
                        </button>   
                    </div>
                </div>
            </div>
        </DynamicThreeDWrapper>
    )
}

export default Payment;