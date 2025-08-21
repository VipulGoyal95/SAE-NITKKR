"use client"
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import TabbedCards from '../TabbedCards'

const AutokritiDespscription = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    return (
        <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 max-[500px]:py-6">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl font-bold text-center mb-8 bg-gradient-to-r text-white bg-clip-text"
            >
                 <span className="text-red-500">Auto</span>kriti 15.O : Intelligence Overdrive
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-lg max-w-none mx-auto"
            >
                <p className="text-gray-300 leading-relaxed mb-6">
                   Curious about automobiles and technology but don’t know where to start? Autokriti 15.0 is your gateway to the next era of mobility and intelligence. Join us for the 15th edition of North India’s largest automotive workshop
                </p>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-gray-800/50 p-6 rounded-lg mb-6"
                >
                    <p className="text-gray-300 leading-relaxed">
                        Our journey has been about breaking barriers and embracing innovation. With each edition, we’ve scaled higher, blending automotive engineering with emerging technologies! This year, we’re all set to go into overdrive.
                    </p>
                    <br/>
                    <p className="text-gray-300 leading-relaxed">
                        This year’s theme, <span className="font-bold text-blue-400">Intelligence Overdrive</span>, focuses on harnessing the power of AI, Machine Learning, and smart systems in mobility and beyond.. creating smarter vehicles, smarter technology, and smarter engineers!
                    </p>
                    <br/>
                    <p className="text-gray-300 leading-relaxed">
                        Autokriti 15.0 will feature four cutting-edge workshops:<br/><span className="font-bold text-blue-400">Combustion Vehicles (CV): </span>Dive deep into the fundamentals of power and performance.<br/>
                        <span className="font-bold text-blue-400">Electric Vehicles (EV): </span>Explore the technology shaping tomorrow’s mobility.<br/> <span className="font-bold text-blue-400">Internet of Things (IoT) with AI/ML: </span>Experience the fusion of intelligence and connectivity with hands-on projects.<br/>
                        <span className="font-bold text-blue-400">Software & Simulation: </span> Design, model, and optimize the future with digital tools such as Solidworks and ANSYS.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Each workshop is designed to give participants hands-on practical exposure along with powerful theoretical sessions, ensuring a complete and engaging learning experience.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Experience the vibe of learning and fun.
                    </p>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-12"
            >
                <TabbedCards />
            </motion.div>
        </div>
    )
}

export default AutokritiDespscription
