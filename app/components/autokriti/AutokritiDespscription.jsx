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
                Autokriti 14.0: Fueling the Future
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-lg max-w-none mx-auto"
            >
                <p className="text-gray-300 leading-relaxed mb-6">
                    Interested in automobiles but unsure where to begin? Let this be your gateway to the future of mobility. Join us for Autokriti 14.0 and become a part of the revolution.
                </p>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-gray-800/50 p-6 rounded-lg mb-6"
                >
                    <p className="text-gray-300 leading-relaxed">
                        From dismantling a 2-stroke engine of a scooter in Autokriti 1.0 to exploring the intricacies of a Porsche Cayenne engine in Autokriti 11.0, we have consistently aligned ourselves with cutting-edge innovation. Our commitment to staying abreast of evolving technology has solidified our status as North India's largest automotive workshop. In our ongoing pursuit of knowledge sharing, we proudly present Autokriti 14.0.
                    </p>
                    <br/>
                    <p className="text-gray-300 leading-relaxed">
                        This year, we're set to explore the future of mobility under the theme <span className="font-bold text-blue-400">Fueling the Future</span>, focusing on a journey that's safe, steady, and insightful.
                    </p>
                    <br/>
                    <p className="text-gray-300 leading-relaxed">
                        Autokriti 14.0 features four dynamic workshops: <span className="font-bold text-blue-400">Combustion Vehicles (CV)</span>, <span className="font-bold text-blue-400">Electric Vehicles (EV)</span>, <span className="font-bold text-blue-400">Internet of Things (IoT)</span>, and <span className="font-bold text-blue-400">Software</span>. Each workshop is meticulously designed to offer both theoretical insights and hands-on practical experience, ensuring a comprehensive understanding of the respective fields.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        You'll have the opportunity to engage with physical models for a more personalized learning experience. Additionally, the event will include guest lectures by esteemed industry experts. Dive into the future with us and explore the content of these workshops for more details.
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
