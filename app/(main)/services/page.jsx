'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
    {
        title: 'Intelligent Web Platforms',
        desc: 'Enterprise-grade web systems engineered for performance, scalability, and intelligent automation. From SaaS platforms to multi-tenant architectures.',
        video: '/software.mp4',
        color: 'from-blue-800 to-cyan-600',
        tools: ['Next.js', 'React', 'TanStack', 'FastAPI', 'TypeScript', 'PostgreSQL'],
        features: ['Enterprise Websites', 'SaaS Platforms', 'Admin Dashboards', 'Multi-tenant Systems']
    },
    {
        title: 'Mobile Applications',
        desc: 'Cross-platform mobile systems built for enterprise and consumer markets. High-performance apps engineered for real-world African use cases.',
        video: '/mobile.mp4',
        color: 'from-blue-900 to-sky-500',
        tools: ['React Native', 'Expo', 'Firebase', 'FastAPI', 'Redis', 'PostgreSQL'],
        features: ['Cross-platform Apps', 'Enterprise Mobile Systems', 'Consumer Platforms', 'Offline-first Apps']
    },
    {
        title: 'Desktop Systems',
        desc: 'Enterprise desktop applications and offline-first systems built for operational environments that demand reliability and performance.',
        video: '/devops.mp4',
        color: 'from-indigo-900 to-blue-500',
        tools: ['Electron', 'Tauri', 'React', 'TypeScript', 'SQLite', 'PostgreSQL'],
        features: ['Enterprise Desktop Apps', 'Offline-first Systems', 'Internal Operations Software', 'Cross-platform Desktop']
    },
    {
        title: 'AI & Agentic Systems',
        desc: 'Intelligent AI assistants, conversational agents, and multi-agent infrastructures that automate decisions and drive intelligent operations.',
        video: '/ai.mp4',
        color: 'from-black to-blue-700',
        tools: ['Amazon Bedrock', 'Python', 'FastAPI', 'LangChain', 'Redis', 'Apache Kafka'],
        features: ['AI Assistants', 'Intelligent Automation', 'Conversational AI', 'Multi-agent Infrastructure']
    },
    {
        title: 'Cloud & Infrastructure',
        desc: 'Scalable cloud deployments, DevOps pipelines, and distributed systems engineered for realtime performance and enterprise reliability.',
        video: '/network.mp4',
        color: 'from-blue-950 to-cyan-400',
        tools: ['Microsoft Azure', 'Railway', 'Contabo', 'Docker', 'BullMQ', 'Apache Kafka'],
        features: ['Cloud Deployment', 'DevOps Pipelines', 'Realtime Infrastructure', 'Distributed Systems']
    },
    {
        title: 'Data & Analytics',
        desc: 'Transform raw data into actionable intelligence. Realtime dashboards, predictive analytics, and business intelligence systems.',
        video: '/data.mp4',
        color: 'from-black to-blue-600',
        tools: ['Python', 'PostgreSQL', 'MongoDB', 'Power BI', 'FastAPI', 'Redis'],
        features: ['Realtime Dashboards', 'Predictive Analytics', 'Business Intelligence', 'Data Pipelines']
    },
    {
        title: 'Cybersecurity',
        desc: 'Comprehensive security solutions protecting your digital assets. Threat detection, vulnerability assessment, and security compliance.',
        video: '/cyber.mp4',
        color: 'from-blue-800 to-sky-400',
        tools: ['Penetration Testing', 'Encryption', 'Zero Trust', 'Security Audits', 'Firewalls'],
        features: ['Threat Detection', 'Vulnerability Assessment', 'Data Protection', 'Security Compliance']
    },
    {
        title: 'IoT Development',
        desc: 'Internet of Things solutions connecting devices and enabling smart automation for African industries and smart city ecosystems.',
        video: '/iot.mp4',
        color: 'from-blue-900 to-cyan-500',
        tools: ['MQTT', 'Arduino', 'Raspberry Pi', 'AWS IoT', 'Edge Computing', 'Node.js'],
        features: ['Device Connectivity', 'Realtime Monitoring', 'Smart Automation', 'IoT Ecosystems']
    },
];

export default function ServicesWeOffer() {
    const [flippedCards, setFlippedCards] = useState({});

    const toggleFlip = (index) =>
        setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));

    return (
        <>
            <Header />
            <section className="py-24 container mx-auto px-6 relative" id="services">
                {/* Grid Background */}
                <div
                    className="absolute inset-0 -z-10 opacity-20 animate-[backgroundMove_30s_linear_infinite]"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Floating particles */}
                <div className="absolute inset-0 -z-10">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-cyan-400"
                            style={{
                                width: Math.random() * 4 + 1,
                                height: Math.random() * 4 + 1,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.7
                            }}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, Math.random() * 20 - 10, 0],
                                opacity: [0.3, 0.8, 0.3]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                delay: Math.random() * 5
                            }}
                        />
                    ))}
                </div>

                {/* Title */}
                <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
                    <h2 className="text-5xl md:text-5xl font-black mb-6 text-[#38b6ff]">
                        WHAT WE ENGINEER
                    </h2>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                        Speqlink architects intelligent software ecosystems, AI-powered systems, and scalable digital
                        infrastructure. Every solution is engineered for performance, automation, and intelligent decision-making.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10 bg-[#c5e2f1] dark:bg-background">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="relative h-96 cursor-pointer perspective"
                            onClick={() => toggleFlip(index)}
                        >
                            <Card className="w-full h-full rounded-2xl" style={{ transformStyle: 'preserve-3d' }}>
                                {/* Front */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl overflow-hidden p-0"
                                    animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ backfaceVisibility: 'hidden' }}
                                >
                                    <div className="relative h-40 overflow-hidden">
                                        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                                            <source src={service.video} type="video/mp4" />
                                        </video>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-4 left-4 z-10">
                                            <h3 className="text-xl font-bold">{service.title}</h3>
                                            <div className="flex gap-1 mt-1">
                                                {service.features.slice(0, 2).map((feature, i) => (
                                                    <span key={i} className="text-xs bg-cyan-500/20 px-2 py-1 rounded-full">{feature}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <p className="text-sm mb-4 line-clamp-3">{service.desc}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {service.tools.slice(0, 3).map((tool, i) => (
                                                <span key={i} className="text-xs bg-cyan-500/20 px-2 py-1 rounded">{tool}</span>
                                            ))}
                                            {service.tools.length > 3 && <span className="text-xs">+{service.tools.length - 3} more</span>}
                                        </div>
                                        <Button variant="outline" className="w-full animate-bounce text-[#38b6ff]" onClick={(e) => e.stopPropagation()}>
                                            Click to see details
                                        </Button>
                                    </div>
                                </motion.div>

                                {/* Back */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl overflow-hidden p-5 flex flex-col"
                                    animate={{ rotateY: flippedCards[index] ? 0 : 180 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                                >
                                    <h4 className="text-lg font-bold mb-4">Service Details</h4>
                                    <div className="mb-4">
                                        <h5 className="text-sm font-semibold mb-2">What we deliver:</h5>
                                        <ul className="space-y-1">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="text-xs flex items-start">
                                                    <span className="mr-2">•</span>{feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mb-4">
                                        <h5 className="text-sm font-semibold mb-2">Technologies we use:</h5>
                                        <div className="flex flex-wrap gap-1">
                                            {service.tools.map((tool, i) => (
                                                <span key={i} className="text-xs bg-cyan-500/20 px-2 py-1 rounded">{tool}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <Button asChild className="mt-auto w-full">
                                        <a href="/client" onClick={(e) => e.stopPropagation()}>Build With Speqlink</a>
                                    </Button>
                                </motion.div>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-12 border border-white/5 relative z-10"
                >
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to engineer your system?
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                        Tell us about your business idea and let Speqlink architect the intelligent solution
                        that drives your growth.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.a
                            href="/client"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            Build With Speqlink
                        </motion.a>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all"
                        >
                            Schedule Consultation
                        </motion.a>
                    </div>
                </motion.div>
            </section>

            <style jsx>{`
        @keyframes backgroundMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
      `}</style>
        </>
    );
}
