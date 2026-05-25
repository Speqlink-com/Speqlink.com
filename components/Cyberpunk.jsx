'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollFlipSections() {
    const containerRef = useRef(null);
    const cubeRef = useRef(null);
    const [viewportHeight, setViewportHeight] = useState(0);

    // Update viewport height safely on client
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const updateHeight = () => setViewportHeight(window.innerHeight);
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const sections = [
        {
            title: 'INTELLIGENT WEB PLATFORMS',
            subtitle: 'Enterprise-Grade Systems for Africa\'s Digital Future',
            description:
                'Speqlink engineers enterprise-grade web systems built for performance, scalability, and intelligent automation. From SaaS platforms to multi-tenant architectures, every system is designed to handle real-world African business demands.',
            capabilities: [
                'Enterprise websites and SaaS platforms',
                'Admin dashboards and multi-tenant systems',
                'Next.js, React, TanStack, FastAPI, TypeScript',
                'Realtime systems with Apache Kafka and Redis',
                'Cloud deployment on Azure, Railway, and Contabo',
            ],
            image:
                'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=2070&q=80',
            textColor: 'text-blue-300',
            bgColor: 'bg-blue-700/40',
            borderColor: 'border-blue-500',
            gradient: 'from-blue-900/50 to-blue-700/40',
            pattern: 'code-pattern',
        },
        {
            title: 'AI & AGENTIC SYSTEMS',
            subtitle: 'Intelligent Automation for the Next Generation',
            description:
                'Speqlink builds multi-agent AI infrastructures, conversational AI assistants, and intelligent automation systems powered by Amazon Bedrock and Python. Our agentic systems operate autonomously and drive intelligent business outcomes.',
            capabilities: [
                'Multi-agent AI infrastructure and coordination',
                'Conversational AI and intelligent assistants',
                'Amazon Bedrock and Python AI pipelines',
                'Decision-support and automation systems',
                'Intelligent lead qualification and business guidance',
            ],
            image:
                'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=2069&q=80',
            textColor: 'text-cyan-300',
            bgColor: 'bg-cyan-700/40',
            borderColor: 'border-cyan-500',
            gradient: 'from-cyan-900/50 to-cyan-700/40',
            pattern: 'neural-pattern',
        },
        {
            title: 'MOBILE & DESKTOP SYSTEMS',
            subtitle: 'Cross-Platform Applications for Enterprise and Consumer Markets',
            description:
                'We engineer cross-platform mobile applications with Expo and React Native, and enterprise desktop systems with Electron and Tauri. Every application is built for real-world African use cases with offline-first capabilities.',
            capabilities: [
                'Cross-platform mobile apps with Expo & React Native',
                'Enterprise desktop applications with Electron & Tauri',
                'Offline-first architecture for low-connectivity environments',
                'Consumer platforms and enterprise mobile systems',
                'Internal operations software and management systems',
            ],
            image:
                'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=2070&q=80',
            textColor: 'text-purple-300',
            bgColor: 'bg-purple-700/40',
            borderColor: 'border-purple-500',
            gradient: 'from-purple-900/50 to-purple-700/40',
            pattern: 'blockchain-pattern',
        },
        {
            title: 'CLOUD & INFRASTRUCTURE',
            subtitle: 'Scalable, Distributed Systems for Enterprise Reliability',
            description:
                'Speqlink architects scalable cloud deployments on Microsoft Azure, Railway, and Contabo with automated DevOps pipelines. We design distributed systems, realtime infrastructure, and enterprise-grade cloud environments.',
            capabilities: [
                'Microsoft Azure, Railway, and Contabo deployments',
                'Apache Kafka event streaming and Redis pub/sub',
                'Docker containers and DevOps automation',
                'BullMQ job queues and distributed processing',
                'Disaster recovery and business continuity planning',
            ],
            image:
                'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2072&q=80',
            textColor: 'text-orange-300',
            bgColor: 'bg-orange-700/40',
            borderColor: 'border-orange-500',
            gradient: 'from-orange-900/50 to-orange-700/40',
            pattern: 'cloud-pattern',
        },
        {
            title: 'CYBERSECURITY',
            subtitle: 'Protecting African Digital Infrastructure',
            description:
                'Speqlink implements comprehensive security solutions protecting your digital assets. Our cybersecurity team delivers threat detection, vulnerability assessments, penetration testing, and zero-trust architectures for enterprise systems.',
            capabilities: [
                'Threat detection and incident response systems',
                'Vulnerability assessment and penetration testing',
                'Zero-trust architecture implementation',
                'Security compliance and regulatory frameworks',
                'Data protection and encryption systems',
            ],
            image:
                'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2070&q=80',
            textColor: 'text-emerald-300',
            bgColor: 'bg-emerald-700/40',
            borderColor: 'border-emerald-500',
            gradient: 'from-emerald-900/50 to-emerald-700/40',
            pattern: 'cyber-pattern',
        },
    ];

    useEffect(() => {
        if (!cubeRef.current || !containerRef.current || !viewportHeight) return;

        const cube = cubeRef.current;

        gsap.set(cube, { willChange: 'transform' });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '+=' + sections.length * viewportHeight,
                scrub: 1,
                pin: true,
                snap: 1 / (sections.length - 1),
                anticipatePin: 1,
            },
        });

        sections.forEach((_, i) => {
            if (i === 0) return;
            tl.to(cube, {
                rotateX: 90 * i,
                duration: 1,
                ease: 'power2.inOut',
            });
        });

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, [sections.length, viewportHeight]);

    // CSS variable generator
    const getSectionStyle = (index) => {
        const colors = [
            { color1: '#10b981', color2: '#059669', color3: '#34d399', color4: '#065f46' },
            { color1: '#3b82f6', color2: '#2563eb', color3: '#60a5fa', color4: '#1e40af' },
            { color1: '#8b5cf6', color2: '#7c3aed', color3: '#a78bfa', color4: '#5b21b6' },
            { color1: '#f97316', color2: '#ea580c', color3: '#fb923c', color4: '#9a3412' },
            { color1: '#06b6d4', color2: '#0891b2', color3: '#22d3ee', color4: '#0e7490' },
        ];
        return {
            '--color1': colors[index].color1,
            '--color2': colors[index].color2,
            '--color3': colors[index].color3,
            '--color4': colors[index].color4,
        };
    };

    return (
        <div ref={containerRef} className="relative h-screen w-full">
            <div className="w-full h-full flex items-center justify-center perspective-[1400px] overflow-hidden">
                <div
                    ref={cubeRef}
                    className="relative w-full h-full preserve-3d"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {sections.map((section, i) => (
                        <div
                            key={i}
                            className="absolute w-full h-full flex items-center justify-center text-center bg-white overflow-hidden floating-shapes"
                            style={{
                                transform: `rotateX(${-90 * i}deg) translateZ(${viewportHeight / 2}px)`,
                                backgroundImage: `url(${section.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                ...getSectionStyle(i),
                            }}
                        >
                            {/* overlays + content (same as your code) */}
                            <div className={`absolute inset-0 ${section.pattern} ${section.bgColor} z-0`} />
                            <div className={`absolute inset-0 bg-gradient-to-b ${section.gradient} z-0`} />

                            <div className="relative mx-auto max-w-2xl w-full px-6 text-white p-8 rounded-2xl flex flex-col items-center justify-center z-10 mt-16">
                                <h2 className={`text-3xl font-bold mb-6 ${section.textColor}`}>{section.title}</h2>
                                <h3 className="text-xl mb-4">{section.subtitle}</h3>
                                <p className="text-sm mb-4">{section.description}</p>
                                <ul className="space-y-2">
                                    {section.capabilities.map((cap, j) => (
                                        <li key={j} className="flex items-center">
                                            <svg
                                                className="w-5 h-5 mr-2 text-current"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {cap}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
