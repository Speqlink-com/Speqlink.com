'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const leaders = [
    {
        name: 'Civil Aviation Representative',
        role: 'Director of Operations',
        company: 'Kenya Civil Aviation Authority',
        quote: 'Speqlink delivered our RBSS Civil Aviation System with exceptional precision. The system handles thousands of member records seamlessly and has transformed our operations.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
        name: 'Octabell Founder',
        role: 'CEO',
        company: 'Octabell Logistics',
        quote: 'The construction logistics platform Speqlink built for us is exactly what the Kenyan construction industry needed. Realtime tracking, driver matching, and supply optimization — all in one system.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
        name: 'Anirah Client',
        role: 'CTO',
        company: 'Anirah Fintech',
        quote: 'Speqlink architected our entire fintech infrastructure from the ground up. Fast, secure, and scalable. They understood our vision and delivered beyond expectations.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
        name: 'Healthcare Partner',
        role: 'Medical Director',
        company: 'Madini Health Network',
        quote: 'The telemedicine platform Speqlink built connects patients across Africa to specialists. The engineering quality and attention to security compliance was outstanding.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
        name: 'Enterprise Client',
        role: 'Head of IT',
        company: 'Enterprise Solutions Kenya',
        quote: 'The biometric attendance system Speqlink delivered has completely automated our HR operations. Facial recognition, geo-fencing, and realtime reporting — all working flawlessly.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
        name: 'AgriTech Partner',
        role: 'Operations Lead',
        company: 'Jenic Agribusiness',
        quote: 'Jenic is connecting farmers to markets in ways we never thought possible. Speqlink built an intelligent ecosystem that is genuinely transforming African agriculture.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Detect system theme
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);

        const handler = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    // Auto-rotate featured testimonial
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % leaders.length);
        }, 4000); // Faster rotation
        return () => clearInterval(interval);
    }, []);

    // Theme-based colors
    const cardBg = isDarkMode ? 'bg-background text-gray-100' : 'bg-[#c5e2f1] text-background';
    const hoverBg = isDarkMode ? 'hover:bg-gray-700/30' : 'hover:bg-blue-200/70';
    const borderColor = isDarkMode ? 'border-gray-700' : 'border-blue-200';
    const textColor = isDarkMode ? 'text-gray-100' : 'text-background';
    const secondaryText = isDarkMode ? 'text-gray-400' : 'text-background';

    return (
        <section className="py-20 container mx-auto px-6 relative">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
                    Trusted by Our Clients
                </h3>
                <p className={`max-w-2xl mx-auto ${secondaryText}`}>
                    What the businesses and organisations that Speqlink has engineered systems for say about working with us
                </p>
            </motion.div>

            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {leaders.map((leader, i) => (
                    <motion.div
                        key={leader.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        className={`p-6 rounded-xl ${cardBg} border ${borderColor} backdrop-blur-sm ${hoverBg} transition-all duration-300 h-full flex flex-col`}
                    >
                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                            {Array.from({ length: 5 }).map((_, idx) => (
                                <div key={idx} className={`text-sm ${idx < leader.rating ? 'text-yellow-400' : secondaryText}`}>
                                    ★
                                </div>
                            ))}
                        </div>

                        {/* Quote */}
                        <p className={`mb-6 italic ${secondaryText} flex-1`}>
                            "{leader.quote}"
                        </p>

                        {/* Author */}
                        <div className={`flex items-center gap-4 pt-4 border-t ${borderColor}/50`}>
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold overflow-hidden">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className={`font-semibold ${textColor}`}>{leader.name}</div>
                                <div className={`text-sm ${secondaryText}`}>{leader.role}</div>
                                <div className={`text-xs ${secondaryText} opacity-70`}>{leader.company}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Featured Testimonial (Carousel) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-4xl mx-auto"
            >
                <div className={`p-8 rounded-xl ${cardBg} border ${borderColor} backdrop-blur-sm text-center`}>
                    <div className="flex justify-center mb-6">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <div key={idx} className={`text-lg ${idx < leaders[currentIndex].rating ? 'text-yellow-400' : secondaryText}`}>
                                ★
                            </div>
                        ))}
                    </div>

                    <p className={`text-xl italic mb-8 ${secondaryText}`}>
                        "{leaders[currentIndex].quote}"
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold overflow-hidden">
                            <img
                                src={leaders[currentIndex].image}
                                alt={leaders[currentIndex].name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <div className={`font-semibold text-lg ${textColor}`}>{leaders[currentIndex].name}</div>
                            <div className={secondaryText}>{leaders[currentIndex].role}</div>
                            <div className={`text-sm ${secondaryText} opacity-70`}>{leaders[currentIndex].company}</div>
                        </div>
                    </div>

                    {/* Carousel indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {leaders.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? 'bg-blue-500 w-6'
                                    : 'bg-blue-300 hover:bg-blue-400'
                                    }`}
                                aria-label={`View testimonial from ${leaders[idx].name}`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
            >
                <div>
                    <div className={`text-3xl font-bold text-[lightblue] ${textColor}`}>98%</div>
                    <div className={secondaryText}>Client Satisfaction</div>
                </div>
                <div>
                    <div className={`text-3xl font-bold text-[lightblue] ${textColor}`}>15+</div>
                    <div className={secondaryText}>Systems Delivered</div>
                </div>
                <div>
                    <div className={`text-3xl font-bold text-[lightblue] ${textColor}`}>3</div>
                    <div className={secondaryText}>Own Products</div>
                </div>
                <div>
                    <div className={`text-3xl font-bold text-[lightblue] ${textColor}`}>100%</div>
                    <div className={secondaryText}>Recommendation Rate</div>
                </div>
            </motion.div>
        </section>
    );
}
