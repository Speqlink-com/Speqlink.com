// app/home/page.jsx
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesConstellation from '@/components/ServicesConstellation';
import Journey from '@/components/Journey';
import Stats from '@/components/Stats';
import InnovationSpotlight from '@/components/InnovationSpotlight';
import { motion } from 'framer-motion';
import Partners from '@/components/Partners';
import CyberpunkScrollSections from '@/components/Cyberpunk';
import Link from 'next/link';


export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background-primary to-background-secondary text-text-primary">
            <Header />

            <main className="relative overflow-hidden">
                <HeroSection />
                <Partners />

                {/* ===== DISCOVER SPEQLINK SECTION ===== */}
                <section className="py-24 container mx-auto px-6 relative">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-14"
                        >
                            <p className="text-[#38b6ff] font-semibold uppercase tracking-widest mb-3">Who We Are</p>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
                                Discover Speqlink
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-5 text-muted-foreground text-lg leading-relaxed"
                            >
                                <p>
                                    Speqlink is a Kenyan technology company focused on engineering intelligent software systems,
                                    AI-powered platforms, and scalable digital ecosystems that solve real-world African challenges.
                                </p>
                                <p>
                                    We architect enterprise-grade mobile applications, desktop systems, web platforms, and agentic
                                    AI infrastructures designed for performance, automation, and intelligent decision-making.
                                </p>
                                <p>
                                    Our mission is to transform industries through adaptive technology, intelligent automation,
                                    realtime systems, and scalable digital innovation.
                                </p>
                                <p>
                                    From smart logistics and agribusiness ecosystems to real estate intelligence and enterprise
                                    infrastructure, Speqlink develops products that connect people, businesses, and opportunities
                                    through technology.
                                </p>
                                <div className="pt-4 flex flex-wrap gap-4">
                                    <Link href="/about">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-3 bg-gradient-to-r from-[#38b6ff] to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                                        >
                                            About Speqlink
                                        </motion.button>
                                    </Link>
                                    <Link href="/projects">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-3 bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 font-semibold rounded-lg border border-white/10 hover:bg-white/20 transition-all"
                                        >
                                            Solutions Delivered
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="grid grid-cols-2 gap-4"
                            >
                                {[
                                    { icon: '🏠', label: 'Masqany', desc: 'Real Estate Intelligence', href: '/products' },
                                    { icon: '🏗️', label: 'Octabell', desc: 'Construction Logistics', href: '/products' },
                                    { icon: '🌱', label: 'Jenic', desc: 'Agribusiness Commerce', href: '/products' },
                                    { icon: '🤖', label: 'AI Systems', desc: 'Agentic Infrastructure', href: '/services' },
                                    { icon: '🏛️', label: 'KCAA RBSS', desc: 'Enterprise System', href: '/projects' },
                                    { icon: '💰', label: 'Anirah', desc: 'Fintech Platform', href: '/projects' },
                                ].map((item, i) => (
                                    <Link href={item.href} key={item.label}>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: false }}
                                            transition={{ duration: 0.4, delay: i * 0.08 }}
                                            whileHover={{ scale: 1.04, borderColor: 'rgba(56,182,255,0.5)' }}
                                            className="p-4 rounded-xl border border-white/10 bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm hover:border-[#38b6ff]/40 transition-all cursor-pointer"
                                        >
                                            <div className="text-2xl mb-2">{item.icon}</div>
                                            <p className="font-bold text-foreground text-sm">{item.label}</p>
                                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                                        </motion.div>
                                    </Link>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ===== PRODUCTS TEASER SECTION ===== */}
                <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50 relative overflow-hidden">
                    <div className="absolute inset-0 -z-10"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(56,182,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,182,255,0.05) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px',
                        }}
                    />
                    <div className="container mx-auto px-6 max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-14"
                        >
                            <p className="text-[#38b6ff] font-semibold uppercase tracking-widest mb-3">Speqlink Product Ecosystem</p>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                                Our Products
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                                Speqlink doesn't just build for clients — we build our own intelligent product ecosystems
                                targeting Africa's biggest markets.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {[
                                {
                                    name: 'Masqany',
                                    emoji: '🏠',
                                    tagline: 'Affordable Housing at Home Comfort',
                                    desc: 'Intelligent real estate ecosystem connecting Kenyans to homes, apartments, hotels, and affordable housing through smart digital experiences.',
                                    category: 'PropTech',
                                    market: '$14B+ East African real estate market',
                                    color: 'from-blue-600 to-cyan-500',
                                    status: 'In Development',
                                    statusColor: 'bg-yellow-500/20 text-yellow-400',
                                },
                                {
                                    name: 'Octabell',
                                    emoji: '🏗️',
                                    tagline: 'Intelligent Construction Logistics Infrastructure',
                                    desc: 'Smart logistics platform connecting constructors, quarry suppliers, and transport drivers through intelligent realtime infrastructure.',
                                    category: 'Logistics / ConTech',
                                    market: '$3B+ construction logistics market',
                                    color: 'from-orange-600 to-amber-500',
                                    status: 'Live',
                                    statusColor: 'bg-green-500/20 text-green-400',
                                },
                                {
                                    name: 'Jenic',
                                    emoji: '🌱',
                                    tagline: 'Intelligent Agribusiness Commerce for Africa',
                                    desc: 'Agribusiness ecosystem connecting small-scale farmers to ready markets through ecommerce, logistics, and agricultural supply-chain intelligence.',
                                    category: 'AgriTech',
                                    market: '$1T+ African agri-food market',
                                    color: 'from-green-600 to-emerald-500',
                                    status: 'In Development',
                                    statusColor: 'bg-yellow-500/20 text-yellow-400',
                                },
                            ].map((product, i) => (
                                <motion.div
                                    key={product.name}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    className="rounded-2xl overflow-hidden border border-white/10 bg-gray-900/80 shadow-2xl"
                                >
                                    <div className={`p-6 bg-gradient-to-r ${product.color}`}>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-4xl">{product.emoji}</span>
                                            <div>
                                                <h3 className="text-2xl font-black text-white">{product.name}</h3>
                                                <span className="text-xs text-white/70">{product.category}</span>
                                            </div>
                                        </div>
                                        <p className="text-white/80 text-sm italic">{product.tagline}</p>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className={`text-xs px-2 py-1 rounded-full ${product.statusColor}`}>{product.status}</span>
                                            <span className="text-[#38b6ff] text-xs font-medium">{product.market}</span>
                                        </div>
                                        <p className="text-gray-400 text-sm mb-5 leading-relaxed">{product.desc}</p>
                                        <Link href="/products">
                                            <motion.button
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.96 }}
                                                className={`w-full py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r ${product.color} hover:opacity-90 transition-all`}
                                            >
                                                Explore {product.name} →
                                            </motion.button>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <Link href="/products">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-gradient-to-r from-[#38b6ff] to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                                >
                                    Explore All Products →
                                </motion.button>
                            </Link>
                            <Link href="/invest">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
                                >
                                    Become an Investor →
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <ServicesConstellation />
                <Journey />
                <CyberpunkScrollSections />
                <Stats />
                <InnovationSpotlight />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="py-20"
                />
            </main>
        </div>
    );
}
