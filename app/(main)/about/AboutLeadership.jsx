'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Leadership team
const leaders = [
    { name: 'Comphortine Siwende O.', role: 'CEO & AI Engineer', img: '/comfortine.png' },
    { name: 'Melvins Simon O.', role: 'CTO', img: '/simo.png' },
    { name: 'Sheldon Billy', role: 'COO', img: '/sheldon.png' },
];

const contributors = [
    { name: 'Peter Magana', role: 'Software Engineer' },
    { name: 'Christine Mogambi', role: 'Architect Designer', img: '/christine.jpeg' },
    { name: 'Nicole Whittney', role: 'AI Engineer', img: '/romio.png' },
    { name: 'Abigael Nyambura', role: 'Cyber Security Specialist' },
    { name: 'Eunice Atieno', role: 'Cyber Security Specialist', img: '/Eunice.jpeg' },
    { name: 'June Siele', role: 'Data Analyst', img: '/june.jpeg' },
    { name: 'James Matata', role: 'DevOps' },
    { name: 'Karimi', role: 'Sales & Marketing' },
];

// Funky border radius styles
const shapeClasses = [
    "rounded-tl-[40%] rounded-bl-[40%] rounded-br-[40%] rounded-tr-[40%]",
    "rounded-br-[40%] rounded-bl-[40%] rounded-tl-[40%] rounded-tr-[10%]",
    "rounded-full",
    "rounded-tl-[40%] rounded-br-[40%] rounded-tr-[40%]",
    "rounded-tl-3xl rounded-tr-[40%] rounded-bl-[40%] rounded-br-[40%]",
];

export default function AboutLeadership() {
    return (
        <section
            id="leadership"
            className="relative py-2 px-6 max-w-7xl mx-auto"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                {/* Left side text */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        Meet Our Leadership
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                        Our co-founding leadership team blends AI engineering, technical architecture, and
                        operational excellence to drive the future of African intelligent technology.
                    </motion.p>
                </div>

                {/* Right side scattered floating images */}
                <div className="relative w-full h-[400px] mb-20 mt-20 flex flex-wrap justify-center gap-3">
                    {/* Glow background */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 6, repeat: Infinity }}
                    />

                    {leaders.map((leader, i) => (
                        <motion.div
                            key={leader.name}
                            className="relative cursor-pointer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 2, zIndex: 50 }}
                            animate={{
                                y: [0, -10, 0],
                                repeat: Infinity,
                                duration: 4,
                                ease: "easeInOut",
                                delay: i * 0.2,
                            }}
                        >
                            <motion.div
                                className={`w-32 h-32 md:w-40 md:h-40 overflow-hidden border border-white/30 ${shapeClasses[i % shapeClasses.length]} relative`}
                                whileHover={{
                                    borderRadius: "0px",
                                    transition: { duration: 0.3, ease: "easeInOut" },
                                }}
                            >
                                <img
                                    src={leader.img}
                                    alt={leader.name}
                                    className="w-full h-full object-cover"
                                />
                                <motion.div
                                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white font-semibold opacity-0"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="text-lg">{leader.role}</span>
                                    <span className="text-sm opacity-90">{leader.name}</span>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Contributors Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mt-8 mb-16"
            >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Our Contributors
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {contributors.map((c, i) => (
                        <motion.div
                            key={c.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.07 }}
                            className="p-4 rounded-xl border border-white/10 bg-white/5 dark:bg-gray-800/40 backdrop-blur-sm text-center hover:border-primary/40 transition-all"
                        >
                            {c.img ? (
                                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2 ring-2 ring-primary/30">
                                    <Image
                                        src={c.img}
                                        alt={c.name}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2 text-primary font-bold text-lg">
                                    {c.name.charAt(0)}
                                </div>
                            )}
                            <p className="font-semibold text-gray-900 dark:text-white text-sm">{c.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{c.role}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
