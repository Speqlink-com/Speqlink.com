"use client";

import { useRef, useEffect } from "react";
import { ArrowRight, Cloud, Shield, Code, Brain, Network, BarChart3, Lightbulb, Wrench, Star } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Updated services data for Speqlink
const services = [
    {
        id: 1,
        name: "Intelligent Web Platforms",
        description: "Enterprise-grade web systems engineered for performance, scalability, and intelligent automation. We build SaaS platforms, admin dashboards, multi-tenant systems, and enterprise websites using Next.js, React, TanStack, FastAPI, and TypeScript.",
        image: "/software.webp",
        link: "/services",
        icon: Code,
    },
    {
        id: 2,
        name: "AI & Agentic Systems",
        description: "Multi-agent AI infrastructures, conversational AI assistants, and intelligent automation systems powered by Amazon Bedrock and Python. We build decision-support systems that operate autonomously and drive intelligent business outcomes.",
        image: "/ai.jpg",
        link: "/services",
        icon: Brain,
    },
    {
        id: 3,
        name: "Mobile Applications",
        description: "Cross-platform mobile systems built with Expo and React Native for enterprise and consumer markets. High-performance apps engineered for real-world African use cases with offline-first capabilities and seamless user experiences.",
        image: "/managed.jpeg",
        link: "/services",
        icon: Star,
    },
    {
        id: 4,
        name: "Cloud & Infrastructure",
        description: "Scalable cloud deployments on Microsoft Azure, Railway, and Contabo with automated DevOps pipelines. We architect distributed systems, realtime infrastructure with Apache Kafka and Redis, and enterprise-grade cloud environments.",
        image: "/cloud.png",
        link: "/services",
        icon: Cloud,
    },
    {
        id: 5,
        name: "Cybersecurity",
        description: "Comprehensive security solutions protecting your digital assets. We implement threat detection, vulnerability assessments, penetration testing, zero-trust architectures, and security compliance for enterprise systems.",
        image: "/security.webp",
        link: "/services",
        icon: Shield,
    },
    {
        id: 6,
        name: "Data & Analytics",
        description: "Transform raw data into actionable intelligence. We build realtime dashboards, predictive analytics systems, and business intelligence platforms using PostgreSQL, MongoDB, Python, and advanced data visualization tools.",
        image: "/data.jpeg",
        link: "/services",
        icon: BarChart3,
    },
    {
        id: 7,
        name: "Desktop Systems",
        description: "Enterprise desktop applications and offline-first systems built with Electron and Tauri. We engineer internal operations software and cross-platform desktop systems designed for reliability and performance.",
        image: "/Transformation.jpg",
        link: "/services",
        icon: Wrench,
    },
    {
        id: 8,
        name: "IoT Development",
        description: "Internet of Things solutions connecting devices and enabling smart automation for African industries. We build IoT ecosystems with realtime monitoring, smart automation, and edge computing capabilities.",
        image: "/network.jpg",
        link: "/services",
        icon: Network,
    },
    {
        id: 9,
        name: "IT Consulting",
        description: "Strategic technology consulting to help businesses architect the right digital systems. We provide technology assessment, digital roadmap planning, system architecture design, and intelligent solution recommendations.",
        image: "/consultation.webp",
        link: "/services",
        icon: Lightbulb,
    },
];

const service1 = {
    id: 0,
    name: "What We Engineer",
    description: "Speqlink architects intelligent software ecosystems, AI-powered systems, and scalable digital infrastructure for Africa's future. From enterprise web platforms and mobile applications to agentic AI systems and cloud infrastructure — every solution is engineered for performance, automation, and intelligent decision-making.",
    image: "/software.webp",
    link: "/services",
    icon: Code,
};

export default function ServicesConstellation() {
    const containerRef = useRef(null);
    const pinRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const totalServices = services.length;

            const totalScrollDistance = totalServices * 80;

            gsap.to(pinRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${totalScrollDistance}%`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    anticipatePin: 1,
                },
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${totalScrollDistance}%`,
                    scrub: 1,
                    pin: false,
                },
            });

            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                tl.fromTo(card,
                    {
                        y: "100%",
                        opacity: 100,
                    },
                    {
                        y: "0%",
                        opacity: 100,
                        duration: 1,
                        ease: "power2.out",
                    },
                    index * 0.5
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToCardsRef = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <>
            <section className="py-20 w-full">
                <div className="container mx-auto px-4 text-center">
                    {/* Main Title with different font */}
                    <h1 className="font-bold tracking-tight text-5xl md:text-7xl font-serif mb-6">
                        What We Engineer
                    </h1>

                    {/* Enhanced descriptive paragraph with icons */}
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl md:text-2xl leading-relaxed mb-8 font-light text-black dark:text-gray-400">
                            Speqlink architects intelligent software ecosystems, AI-powered systems, and scalable digital
                            infrastructure. Every solution is engineered for performance, automation, and intelligent decision-making.
                        </p>

                        {/* Interactive Features Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                    <Brain className="w-6 h-6 text-blue-600" />
                                </div>
                                <span className="text-sm font-semibold text-gray-800">AI-Powered</span>
                            </div>

                            <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                                    <Shield className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-sm font-semibold text-gray-800">Secure by Design</span>
                            </div>

                            <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                                    <Cloud className="w-6 h-6 text-purple-600" />
                                </div>
                                <span className="text-sm font-semibold text-gray-800">Cloud Native</span>
                            </div>

                            <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                                    <Lightbulb className="w-6 h-6 text-orange-600" />
                                </div>
                                <span className="text-sm font-semibold text-gray-800">Intelligent Systems</span>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="flex justify-center items-center space-x-8 text-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-lg font-semibold text-black dark:text-gray-400">African-Built</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-lg font-semibold text-black dark:text-gray-400">Enterprise Grade</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                                <span className="text-lg font-semibold text-black dark:text-gray-400">Scalable</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Constellation */}
            <div ref={containerRef} className="relative">
                <div ref={pinRef} className="h-screen bg-background relative overflow-hidden">
                    {/* Base card - always visible */}
                    <div className="absolute inset-0 z-10">
                        <ServiceCard service={service1} />
                    </div>

                    {/* Scroll-triggered cards */}
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            ref={addToCardsRef}
                            className="absolute inset-0 z-20 opacity-0"
                        >
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

function ServiceCard({ service }) {
    const IconComponent = service.icon;

    return (
        <div className="w-full h-full flex flex-col md:flex-row shadow-2xl overflow-hidden border-y bg-background">
            {/* Left side - Gradient + Image */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 " />
                {/* Image */}
                <Image
                    width={600}
                    height={800}
                    src={service.image}
                    alt={service.name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Right side - Content */}
            <div className="flex w-full md:w-1/2 h-1/2 md:h-full flex-col items-center md:items-start justify-center 
           px-6 py-10 md:px-16 text-center md:text-left 0 z-20">
                {/* Service Icon */}
                <div className="mb-6 p-3 bg-[#38b6ff] rounded-2xl inline-flex">
                    <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Section Label with different font */}
                <span className="uppercase tracking-widest font-bold text-sm md:text-base text-[#38b6ff] mb-4 font-mono">
                    Speqlink Engineering
                </span>

                {/* Service Title with different font */}
                <h2 className="mb-6 text-4xl md:text-6xl font-bold leading-tight text-black dark:text-white font-sans">
                    {service.name}
                </h2>

                {/* Enhanced Description */}
                <p className="text-lg md:text-xl leading-relaxed mb-10 dark:text-gray-500 max-w-2xl font-light">
                    {service.description}
                </p>

                {/* Enhanced Button */}
                <a
                    href={"/contact"}
                    className="group flex items-center justify-center gap-3 px-10 py-4 rounded-full font-semibold 
               text-lg transition-all duration-300 bg-gradient-to-r from-[#38b6ff] to-[lightblue] text-black
               hover:from-[#38b6ff] hover:to-[#38b6ff] shadow-lg hover:shadow-xl hover:scale-105"
                >
                    Get Started
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </a>
            </div>
        </div>
    );
}