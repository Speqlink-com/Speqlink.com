'use client';

import Header from '@/components/Header';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const products = [
    {
        id: 'masqany',
        name: 'Masqany',
        tagline: 'Affordable Housing at Home Comfort',
        emoji: '🏠',
        color: 'from-blue-600 to-cyan-500',
        borderColor: 'border-blue-500/40',
        glowColor: 'bg-blue-500/10',
        category: 'PropTech',
        status: 'In Development',
        statusColor: 'bg-yellow-500/20 text-yellow-400',
        overview: 'Masqany is an intelligent real estate ecosystem connecting Kenyans to homes, apartments, hotels, and affordable housing opportunities through a seamless digital experience.',
        description: 'The platform integrates intelligent property discovery, realtime availability, digital booking systems, and moving-service coordination to simplify how people secure housing and accommodation in Kenya.',
        problem: 'Finding affordable, verified housing in Kenya is fragmented, unreliable, and time-consuming. Renters waste weeks searching across disconnected channels while landlords struggle to reach qualified tenants. The affordable housing gap in Kenya affects millions.',
        businessModel: 'Commission-based model on successful bookings and rentals. Premium listings for property owners and agents. Moving service coordination fees. Hotel booking commissions. Future: subscription tiers for agents and property managers.',
        marketOpportunity: 'Kenya has a housing deficit of over 2 million units. The East African real estate market is valued at $14B+. Digital property platforms are still nascent — Masqany enters at the right time to capture a massive underserved market.',
        revenueStrategy: 'Booking commissions (5–10%), premium agent subscriptions, moving service hailing fees, hotel partnership commissions, and future data intelligence products for developers and investors.',
        aiAdvantage: 'AI-powered property recommendations based on user preferences, budget, and location. Intelligent pricing suggestions for landlords. Automated tenant-landlord matching. Smart fraud detection for listings.',
        scalingPotential: 'Phase 1: Nairobi. Phase 2: Major Kenyan cities. Phase 3: East Africa (Uganda, Tanzania, Rwanda). Phase 4: Pan-African housing marketplace.',
        investorNote: 'Masqany is positioned as scalable prop-tech infrastructure and a future pan-African housing marketplace. Early investors gain equity in a platform targeting a $14B+ market with no dominant digital player.',
        features: [
            'Smart property discovery',
            'Realtime availability',
            'Hotel booking',
            'Affordable housing access',
            'Moving service hailing',
            'Intelligent recommendations',
            'Location-based filtering',
            'Secure communication',
            'Agent/property owner onboarding',
        ],
        techStack: ['React Native', 'Expo', 'Next.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Google Maps API'],
        futureVision: 'A pan-African housing intelligence platform — the go-to ecosystem for anyone seeking accommodation, investment property, or housing services across Africa.',
    },
    {
        id: 'octabell',
        name: 'Octabell',
        tagline: 'Intelligent Construction Logistics Infrastructure',
        emoji: '🏗️',
        color: 'from-orange-600 to-amber-500',
        borderColor: 'border-orange-500/40',
        glowColor: 'bg-orange-500/10',
        category: 'Logistics / ConTech',
        status: 'Live',
        statusColor: 'bg-green-500/20 text-green-400',
        overview: 'Octabell is a smart logistics and construction-material coordination platform that connects constructors, quarry suppliers, transport drivers, and construction stakeholders through intelligent realtime infrastructure.',
        description: 'The platform enables constructors to source materials from nearby quarries, track deliveries in realtime, optimize transportation, and improve operational efficiency across the entire construction supply chain.',
        problem: 'Construction in Kenya is plagued by supply chain inefficiencies — constructors cannot easily find nearby quarries, drivers operate without coordination, and material delivery is unpredictable. This causes project delays and cost overruns worth billions annually.',
        businessModel: 'Transaction fees on material orders, driver marketplace commissions, premium quarry listings, logistics coordination subscriptions for large contractors, and realtime analytics packages for construction firms.',
        marketOpportunity: 'Kenya\'s construction industry contributes ~8% of GDP. The logistics and supply chain market for construction materials in East Africa is worth $3B+. No intelligent digital platform currently dominates this space.',
        revenueStrategy: 'Per-transaction fees (2–5%), driver marketplace commissions, premium supplier listings, enterprise logistics subscriptions, and data analytics products for construction firms and investors.',
        aiAdvantage: 'Intelligent constructor-to-driver matching based on location, load, and availability. AI-powered route optimization for deliveries. Predictive supply analytics to prevent shortages. Smart pricing for materials based on market data.',
        scalingPotential: 'Phase 1: Nairobi construction corridor. Phase 2: All major Kenyan cities. Phase 3: East Africa construction markets. Phase 4: Pan-African construction logistics infrastructure.',
        investorNote: 'Octabell digitizes a $3B+ construction logistics market that is almost entirely offline. First-mover advantage in an industry desperate for intelligent coordination. Strong network effects as more quarries, drivers, and constructors join.',
        features: [
            'Quarry discovery',
            'Constructor-to-driver matching',
            'Delivery tracking',
            'Intelligent logistics coordination',
            'Supply optimization',
            'Driver marketplace',
            'Transaction monitoring',
            'Realtime operational analytics',
        ],
        techStack: ['React Native', 'Expo', 'FastAPI', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Google Maps API'],
        futureVision: 'The operating system for African construction logistics — every quarry, driver, and constructor connected through one intelligent platform.',
    },
    {
        id: 'jenic',
        name: 'Jenic',
        tagline: 'Intelligent Agribusiness Commerce for Africa',
        emoji: '🌱',
        color: 'from-green-600 to-emerald-500',
        borderColor: 'border-green-500/40',
        glowColor: 'bg-green-500/10',
        category: 'AgriTech',
        status: 'In Development',
        statusColor: 'bg-yellow-500/20 text-yellow-400',
        overview: 'Jenic is an intelligent agribusiness ecosystem connecting small-scale farmers to ready markets through ecommerce, logistics, agent stations, and agricultural supply-chain intelligence.',
        description: 'The platform empowers farmers by digitizing agricultural commerce, improving market access, enabling transparent pricing, and integrating transportation and distribution systems across Kenya.',
        problem: 'Kenyan farmers lose 30–40% of produce value due to middlemen, poor market access, and lack of price transparency. Small-scale farmers — who produce 75% of Kenya\'s food — have no direct channel to consumers or fair markets.',
        businessModel: 'Marketplace commission on produce sales, logistics coordination fees, agent station franchise model, vendor subscription tiers, and agricultural analytics products for buyers and government agencies.',
        marketOpportunity: 'Agriculture contributes 33% of Kenya\'s GDP and employs 40% of the population. The African agri-food market is valued at $1 trillion. Digital agricultural commerce is at less than 2% penetration — massive whitespace.',
        revenueStrategy: 'Sales commissions (3–8%), logistics fees, agent station licensing, premium vendor subscriptions, consumer delivery fees, and agricultural data intelligence products.',
        aiAdvantage: 'AI-powered demand forecasting to help farmers plan production. Intelligent price discovery and transparent market pricing. Smart logistics routing for produce delivery. Predictive analytics for crop yields and market trends.',
        scalingPotential: 'Phase 1: Central Kenya farming regions. Phase 2: All major Kenyan agricultural zones. Phase 3: East Africa (Uganda, Tanzania, Ethiopia). Phase 4: Pan-African digital farmer economy.',
        investorNote: 'Jenic is positioned as future African agricultural infrastructure — a digital farmer economy connecting millions of smallholder farmers to markets. Investing in Jenic is investing in Africa\'s food security and economic transformation.',
        features: [
            'Farmer marketplace',
            'Agricultural ecommerce',
            'Vendor onboarding',
            'Logistics coordination',
            'Agent stations in towns',
            'Agricultural analytics',
            'Smart delivery systems',
            'Consumer-to-farmer connection',
        ],
        techStack: ['React Native', 'Expo', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Python', 'Google Maps API'],
        futureVision: 'A pan-African agricultural intelligence platform — the digital backbone connecting Africa\'s 60 million smallholder farmers to markets, logistics, and financial services.',
    },
];

const tabs = ['Overview', 'Problem', 'Business Model', 'Market', 'Technology', 'Investor'];

export default function ProductsPage() {
    const [activeProduct, setActiveProduct] = useState(products[0]);
    const [activeTab, setActiveTab] = useState('Overview');

    const renderTabContent = (product) => {
        switch (activeTab) {
            case 'Overview':
                return (
                    <div className="space-y-6">
                        <p className="text-lg text-gray-300 leading-relaxed">{product.description}</p>
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-lg">Core Features</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {product.features.map((f, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[#38b6ff] flex-shrink-0" />
                                        <span className="text-gray-300 text-sm">{f}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-3 text-lg">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {product.techStack.map((t, i) => (
                                    <span key={i} className="px-3 py-1 text-sm rounded-full bg-[#38b6ff]/10 text-[#38b6ff] border border-[#38b6ff]/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'Problem':
                return (
                    <div className="space-y-6">
                        <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                                <span>⚠️</span> The Problem
                            </h4>
                            <p className="text-gray-300 leading-relaxed">{product.problem}</p>
                        </div>
                        <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                            <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                                <span>✅</span> The Solution
                            </h4>
                            <p className="text-gray-300 leading-relaxed">{product.overview}</p>
                        </div>
                    </div>
                );
            case 'Business Model':
                return (
                    <div className="space-y-6">
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h4 className="text-white font-semibold mb-3">Business Model</h4>
                            <p className="text-gray-300 leading-relaxed">{product.businessModel}</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h4 className="text-white font-semibold mb-3">Revenue Strategy</h4>
                            <p className="text-gray-300 leading-relaxed">{product.revenueStrategy}</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h4 className="text-white font-semibold mb-3">Scaling Potential</h4>
                            <p className="text-gray-300 leading-relaxed">{product.scalingPotential}</p>
                        </div>
                    </div>
                );
            case 'Market':
                return (
                    <div className="space-y-6">
                        <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
                            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
                                <span>📈</span> Market Opportunity
                            </h4>
                            <p className="text-gray-300 leading-relaxed">{product.marketOpportunity}</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h4 className="text-white font-semibold mb-3">Future Vision</h4>
                            <p className="text-gray-300 leading-relaxed italic">{product.futureVision}</p>
                        </div>
                    </div>
                );
            case 'Technology':
                return (
                    <div className="space-y-6">
                        <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20">
                            <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                                <span>🤖</span> AI & Technology Advantage
                            </h4>
                            <p className="text-gray-300 leading-relaxed">{product.aiAdvantage}</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Technology Stack</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {product.techStack.map((t, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.06 }}
                                        className="p-3 rounded-lg bg-white/5 border border-white/10 text-center"
                                    >
                                        <span className="text-[#38b6ff] text-sm font-medium">{t}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'Investor':
                return (
                    <div className="space-y-6">
                        <div className="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                            <h4 className="text-yellow-400 font-semibold mb-3 flex items-center gap-2">
                                <span>💼</span> Investor Information
                            </h4>
                            <p className="text-gray-300 leading-relaxed">{product.investorNote}</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h4 className="text-white font-semibold mb-3">Scaling Roadmap</h4>
                            <p className="text-gray-300 leading-relaxed">{product.scalingPotential}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/invest">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
                                >
                                    Become an Investor →
                                </motion.button>
                            </Link>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                                >
                                    Request Pitch Materials
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Header />
            <section className="min-h-screen py-24 px-6 relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#38b6ff]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <p className="text-[#38b6ff] font-semibold uppercase tracking-widest mb-3">
                            Speqlink Product Ecosystem
                        </p>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Our Products
                        </h1>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            Speqlink doesn't just build for clients — we build our own intelligent product ecosystems.
                            Each product is a scalable startup, an investment opportunity, and a solution to a real African challenge.
                        </p>
                    </motion.div>

                    {/* Product selector */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        {products.map((p) => (
                            <motion.button
                                key={p.id}
                                onClick={() => { setActiveProduct(p); setActiveTab('Overview'); }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all font-semibold text-left ${activeProduct.id === p.id
                                    ? `bg-gradient-to-r ${p.color} text-white border-transparent shadow-xl`
                                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30'
                                    }`}
                            >
                                <span className="text-2xl">{p.emoji}</span>
                                <div>
                                    <p className="font-bold">{p.name}</p>
                                    <p className="text-xs opacity-80">{p.category}</p>
                                </div>
                                <span className={`ml-auto text-xs px-2 py-1 rounded-full ${p.statusColor}`}>
                                    {p.status}
                                </span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Product detail */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProduct.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className={`rounded-3xl border ${activeProduct.borderColor} bg-gradient-to-br from-gray-900 to-black overflow-hidden shadow-2xl`}
                        >
                            {/* Product hero */}
                            <div className={`p-8 md:p-12 bg-gradient-to-r ${activeProduct.color} relative overflow-hidden`}>
                                <div className="absolute inset-0 opacity-20"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                        backgroundSize: '40px 40px'
                                    }}
                                />
                                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                                    <div className="text-6xl">{activeProduct.emoji}</div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-xs font-semibold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full text-white">
                                                {activeProduct.category}
                                            </span>
                                            <span className={`text-xs px-2 py-1 rounded-full ${activeProduct.statusColor}`}>
                                                {activeProduct.status}
                                            </span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
                                            {activeProduct.name}
                                        </h2>
                                        <p className="text-white/80 text-xl font-light italic">
                                            {activeProduct.tagline}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Overview strip */}
                            <div className="px-8 md:px-12 py-6 border-b border-white/10 bg-white/5">
                                <p className="text-gray-300 text-base leading-relaxed">{activeProduct.overview}</p>
                            </div>

                            {/* Tabs */}
                            <div className="px-8 md:px-12 pt-6">
                                <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab
                                                ? `bg-gradient-to-r ${activeProduct.color} text-white shadow-md`
                                                : 'text-gray-400 hover:text-white hover:bg-white/10'
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                {/* Tab content */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.25 }}
                                        className="pb-10"
                                    >
                                        {renderTabContent(activeProduct)}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Investor CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-16 text-center bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-2xl p-12 border border-yellow-500/20"
                    >
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Invest in African Intelligent Infrastructure
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                            Masqany, Octabell, and Jenic are scalable product ecosystems built for Africa's future.
                            Join us as an investor, partner, or early adopter.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/invest">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
                                >
                                    Become an Investor →
                                </motion.button>
                            </Link>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                                >
                                    Talk to Our Team
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
