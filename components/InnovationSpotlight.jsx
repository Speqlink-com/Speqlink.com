'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';

const items = [
    {
        title: 'Agentic AI Infrastructure',
        desc: 'Multi-agent systems that operate autonomously, make intelligent decisions, and coordinate complex workflows without human intervention.',
        icon: '🤖',
        features: ['Multi-agent coordination', 'Autonomous decision-making', 'Realtime intelligence', 'Self-optimizing pipelines']
    },
    {
        title: 'Realtime Systems',
        desc: 'Apache Kafka-powered event streaming and Redis-backed realtime infrastructure for systems that demand millisecond-level responsiveness.',
        icon: '⚡',
        features: ['Apache Kafka event streaming', 'Redis pub/sub', 'BullMQ job queues', 'Distributed processing']
    },
    {
        title: 'Intelligent Mobile Ecosystems',
        desc: 'Cross-platform mobile applications built with Expo and React Native, engineered for African markets with offline-first capabilities.',
        icon: '📱',
        features: ['Expo & React Native', 'Offline-first architecture', 'Push notifications', 'Biometric authentication']
    },
    {
        title: 'Enterprise Cloud Architecture',
        desc: 'Scalable cloud deployments on Microsoft Azure, Railway, and Contabo with automated DevOps pipelines and distributed system design.',
        icon: '☁️',
        features: ['Microsoft Azure', 'Railway & Contabo', 'Docker containers', 'CI/CD automation']
    },
    {
        title: 'AI-Powered Decision Systems',
        desc: 'Amazon Bedrock-powered AI systems that analyze data, generate insights, and support intelligent business decision-making at scale.',
        icon: '🧠',
        features: ['Amazon Bedrock', 'Predictive analytics', 'NLP & computer vision', 'Decision-support engines']
    },
    {
        title: 'Scalable Data Infrastructure',
        desc: 'PostgreSQL and MongoDB-backed data architectures designed for high-throughput, intelligent querying, and enterprise-grade reliability.',
        icon: '📊',
        features: ['PostgreSQL & MongoDB', 'High-throughput queries', 'Data pipelines', 'Analytics dashboards']
    },
];

export default function InnovationSpotlight() {
    const titleRef = useRef();
    const [isTitleInView, setIsTitleInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsTitleInView(entry.isIntersecting),
            { threshold: 0.5 }
        );
        if (titleRef.current) observer.observe(titleRef.current);
        return () => titleRef.current && observer.unobserve(titleRef.current);
    }, []);

    return (
        <section className="py-16 container mx-auto px-6 relative">
            {/* Section Heading */}
            <div ref={titleRef} className="mb-12">
                <motion.h3
                    className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Technology Stack
                </motion.h3>
                <p className="text-center max-w-2xl mx-auto text-muted-foreground">
                    Speqlink's technical arsenal — the tools and frameworks we use to architect intelligent, scalable systems
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                {/* Introduction */}
                <motion.div
                    className="p-6 rounded-lg border bg-background/50 border-border backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <h4 className="text-xl font-semibold mb-3 text-foreground">Overview</h4>
                    <p className="text-muted-foreground">
                        Speqlink uses a carefully selected, enterprise-grade technology stack across frontend, backend,
                        cloud, AI, and database layers. Every tool is chosen for performance, scalability, and
                        intelligent system design.
                    </p>
                </motion.div>

                {/* Innovation items */}
                {items.map((it, i) => (
                    <motion.div
                        key={it.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="p-6 rounded-lg border bg-[#c5e2f1] dark:bg-background border-border backdrop-blur-sm"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <span className="text-3xl flex-shrink-0">{it.icon}</span>
                            <div>
                                <h4 className="text-xl font-semibold text-foreground">{it.title}</h4>
                                <p className="mt-1 text-muted-foreground">{it.desc}</p>
                            </div>
                        </div>
                        <div className="ml-12">
                            <h5 className="font-medium mb-2 text-foreground">Key Features:</h5>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                                {it.features.map((f, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">•</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-4 pt-4 border-t border-border flex justify-between items-center text-xs text-muted-foreground">
                            <span>Last updated: {new Date().toLocaleDateString()}</span>
                            <span>Status: <span className="text-green-500">Active</span></span>
                        </div>
                    </motion.div>
                ))}

                {/* Footer */}
                <motion.div
                    className="p-6 rounded-lg border bg-background/50 border-border backdrop-blur-sm flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Button>View API Docs</Button>
                    <Button>Download Whitepaper</Button>
                    <Button>Request Demo</Button>
                </motion.div>
            </div>

            <motion.div
                className="text-center mt-12 text-xs text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                Document Version 2.1.0 • Updated {new Date().toLocaleDateString()}
            </motion.div>
        </section>
    );
}
