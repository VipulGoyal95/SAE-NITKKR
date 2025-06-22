import ContactForm from "../components/ContactForm";
import Image from 'next/image';

export const metadata = {
    title: "Contact Us"
}
export default function ContactUs() {
    return (
        <div className="min-h-screen bg-black text-white py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 mt-14">Contact Us</h1>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Contact Information */}
                    <div className="flex flex-col gap-12 space-y-8">
                        <div className="flex items-start  space-x-4">
                            <div className="bg-white rounded-full p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">Address</h3>
                                <p className="text-gray-400 mt-1">Gol Canteen, NIT Kurukshetra,
                                    Kurukshetra, Haryana - 136119
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white rounded-full p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">Phone</h3>
                                <p className="text-gray-400 mt-1">7 2 0 6 1 6 8 3 5 5</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white rounded-full p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">Email</h3>
                                <p className="text-gray-400 mt-1">saenitkkr@nitkkr.ac.in</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-white rounded-full p-3">
                            <Image
                                    src="/nx.webp"
                                    alt="ac"
                                    width={100}
                                    height={60}
                                    className="w-8 h-8"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">Nitrox Email</h3>
                                <p className="text-gray-400 mt-1">nitroxkkr@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-white rounded-full p-3">
                                <Image
                                    src="/ac.webp"
                                    alt="ac"
                                    width={100}
                                    height={60}
                                    className="w-8 h-8"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">Accelerons Email</h3>
                                <p className="text-gray-400 mt-1">acceleronsnitkkr@gmail.com 
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <ContactForm />
                </div>
            </div>
        </div>
    );
} 