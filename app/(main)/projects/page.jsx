'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const featuredSolutions = [
    {
        id: 1,
        title: 'Anirah Fintech',
        category: 'Fintech',
        description: 'Digital finance platform infrastructure engineered for financial services, digital payments, and intelligent transaction management. Built end-to-end by Speqlink.',
        tools: ['React', 'FastAPI', 'PostgreSQL', 'Redis', 'TypeScript'],
        status: 'Delivered',
    },
    {
        id: 2,
        title: 'RBSS Civil Aviation System',
        category: 'Enterprise',
        description: 'Retirement Benefits Scheme System for Kenya Civil Aviation Authority — a comprehensive enterprise system managing retirement benefits, member records, and financial reporting.',
        tools: ['React', 'FastAPI', 'PostgreSQL', 'Python', 'TypeScript'],
        status: 'Delivered',
    },
];

const projects = [
    {
        id: 3,
        title: 'AI-Powered Dermatology Assistant',
        description: 'AI-driven platform that helps users identify skin conditions through image analysis with high accuracy and provides preliminary recommendations.',
        tools: ['Python', 'TensorFlow', 'React Native', 'Firebase', 'Computer Vision'],
        category: 'AI / Healthcare',
        status: 'Delivered',
    },
    {
        id: 4,
        title: 'Smart Secure Health System (SSHS)',
        description: 'End-to-end encrypted health records system with IoT integration for real-time patient monitoring and secure data sharing between providers.',
        tools: ['React', 'Node.js', 'IoT Sensors', 'PostgreSQL', 'Encryption'],
        category: 'HealthTech',
        status: 'Delivered',
    },
    {
        id: 5,
        title: 'AI Driven Early Crop Disease Detection',
        description: 'Agricultural solution using drone imagery and machine learning to identify crop diseases early, preventing widespread damage and increasing yields.',
        tools: ['Python', 'Machine Learning', 'React', 'Drone APIs', 'Google Maps API'],
        category: 'AgriTech',
        status: 'Delivered',
    },
    {
        id: 6,
        title: 'Secure Attendance System',
        description: 'Biometric and RFID-based attendance system with facial recognition, geo-fencing, and real-time reporting for enterprises and educational institutions.',
        tools: ['React Native', 'Node.js', 'Biometric APIs', 'MySQL', 'AWS'],
        category: 'Enterprise',
        status: 'Delivered',
    },
    {
        id: 7,
        title: 'Blockchain Server Infrastructure',
        description: 'Scalable blockchain infrastructure for secure transactions, smart contracts, and decentralized applications with custom consensus mechanisms.',
        tools: ['Ethereum', 'Solidity', 'Web3.js', 'Go', 'Docker'],
        category: 'Blockchain',
        status: 'Delivered',
    },
    {
        id: 8,
        title: 'Madini Health Network',
        description: 'Telemedicine platform connecting patients with specialists across Africa, featuring video consultations, e-prescriptions, and medical record management.',
        tools: ['React Native', 'WebRTC', 'MongoDB', 'Twilio', 'Redis'],
        category: 'HealthTech',
        status: 'Delivered',
    },
    {
        id: 9,
        title: 'Predictive Analytics Dashboard',
        description: 'Business intelligence platform with predictive analytics, custom reporting, and data visualization for informed decision-making.',
        tools: ['React', 'D3.js', 'Python', 'TensorFlow', 'PostgreSQL'],
        category: 'Data Science',
        status: 'Delivered',
    },
];

const categories = ['All', 'Fintech', 'Enterprise', 'AI / Healthcare', 'HealthTech', 'AgriTech', 'Blockchain', 'Data Science'];

const statusColors = {
    'Delivered': 'bg-green-500/20 text-green-400',
    'Live': 'bg-blue-500/20 text-blue-400',
    'In Development': 'bg-yellow-500/20 text-yellow-400',
};

export default function SolutionsDelivered() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <>
            <Header />
            <section id="solutions" className="relative py-28 px-6 max-w-7xl mx-auto">
                {/* Background blobs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5 }}
                    className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl pointer-events-none"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl pointer-events-none"
                />

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-6"
                >
                    <p className="text-[#38b6ff] font-semibold uppercase tracking-widest mb-3">Client Work</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Solutions <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#38b6ff] to-cyan-400">Delivered</span>
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                        Real systems. Real impact. These are the intelligent solutions Speqlink has engineered
                        for clients across fintech, healthcare, agribusiness, and enterprise infrastructure.
                    </p>
                </motion.div>

                {/* Products banner — clarifying distinction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 p-6 rounded-2xl bg-gradient-to-r from-[#38b6ff]/10 to-purple-500/10 border border-[#38b6ff]/20 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <div>
                        <p className="text-white font-semibold text-lg mb-1">
                            🚀 Looking for Speqlink's own products?
                        </p>
                        <p className="text-gray-400 text-sm">
                            Masqany, Octabell, and Jenic are Speqlink-built product ecosystems — not client work.
                            Explore them on the Products page.
                        </p>
                    </div>
                    <Link href="/products">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-[#38b6ff] to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            View Our Products →
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Featured Solutions */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Featured Client Solutions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featuredSolutions.map((sol, index) => (
                            <motion.div
                                key={sol.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="relative rounded-2xl p-6 bg-gradient-to-br from-[#09011b] via-[#131375] to-black border border-[#38b6ff]/30 shadow-2xl overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#38b6ff]/5 rounded-full blur-2xl" />
                                <div className="flex justify-between items-start mb-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#38b6ff]/10 text-[#38b6ff]">
                                        {sol.category}
                                    </span>
                                    <span className={`px-2 py-1 text-xs rounded-full ${statusColors[sol.status]}`}>
                                        {sol.status}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{sol.title}</h3>
                                <p className="text-gray-300 text-sm mb-5">{sol.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {sol.tools.map((tool, i) => (
                                        <span key={i} className="px-2 py-1 text-xs rounded-md bg-white/10 text-gray-300">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Category filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    <span className="font-bold self-center text-gray-700 dark:text-gray-300 mr-2">Filter:</span>
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                ? 'bg-gradient-to-r from-[#38b6ff] to-cyan-500 text-white shadow-lg'
                                : 'bg-white/5 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-gray-700/50'
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                            transition={{ delay: index * 0.08, duration: 0.6, type: 'spring', stiffness: 100 }}
                            className="relative rounded-2xl p-6 shadow-2xl bg-gradient-to-br from-[#09011b] via-[#131375] to-black border border-white/10 overflow-hidden flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-300">
                                    {project.category}
                                </span>
                                <span className={`px-2 py-1 text-xs rounded-full ${statusColors[project.status]}`}>
                                    {project.status}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                            <p className="text-gray-300 text-sm mb-5 flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="px-2 py-1 text-xs rounded-md bg-white/10 text-gray-300">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                        Want Speqlink to engineer your system?
                    </p>
                    <Link href="/client">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-10 py-4 bg-gradient-to-r from-[#38b6ff] to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            Build With Speqlink →
                        </motion.button>
                    </Link>
                </motion.div>
            </section>
        </>
    );
}
