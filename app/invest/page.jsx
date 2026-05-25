'use client';

import Header from '@/components/Header';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const investmentProducts = [
    {
        id: 'masqany',
        name: 'Masqany',
        emoji: '🏠',
        tagline: 'Affordable Housing at Home Comfort',
        category: 'PropTech',
        market: '$14B+ East African real estate market',
        stage: 'Seed',
        color: 'from-blue-600 to-cyan-500',
        borderColor: 'border-blue-500/40',
        highlights: [
            'Kenya housing deficit of 2M+ units',
            'No dominant digital housing platform in East Africa',
            'Pan-African expansion roadmap',
            'Multiple revenue streams: commissions, subscriptions, moving services',
        ],
        model: 'Commission-based + SaaS subscriptions for agents',
        scaling: 'Nairobi → Kenya → East Africa → Pan-Africa',
    },
    {
        id: 'octabell',
        name: 'Octabell',
        emoji: '🏗️',
        tagline: 'Intelligent Construction Logistics Infrastructure',
        category: 'Logistics / ConTech',
        market: '$3B+ East African construction logistics market',
        stage: 'Live / Growth',
        color: 'from-orange-600 to-amber-500',
        borderColor: 'border-orange-500/40',
        highlights: [
            'Construction industry contributes ~8% of Kenya GDP',
            'Entire supply chain currently offline — massive digitization opportunity',
            'Strong network effects as platform grows',
            'First-mover advantage in an underserved market',
        ],
        model: 'Transaction fees + driver marketplace + enterprise subscriptions',
        scaling: 'Nairobi → Kenya → East Africa → Pan-Africa',
    },
    {
        id: 'jenic',
        name: 'Jenic',
        emoji: '🌱',
        tagline: 'Intelligent Agribusiness Commerce for Africa',
        category: 'AgriTech',
        market: '$1T+ African agri-food market',
        stage: 'Seed',
        color: 'from-green-600 to-emerald-500',
        borderColor: 'border-green-500/40',
        highlights: [
            'Agriculture = 33% of Kenya GDP, 40% of employment',
            'Farmers lose 30–40% of value to middlemen',
            'Digital agri-commerce at <2% penetration',
            'Direct impact on food security and farmer livelihoods',
        ],
        model: 'Marketplace commissions + logistics fees + agent station licensing',
        scaling: 'Central Kenya → All Kenya → East Africa → Pan-Africa',
    },
];

const investmentTypes = [
    { type: 'Equity Investment', desc: 'Take an ownership stake in a specific Speqlink product', icon: '📊' },
    { type: 'Strategic Partnership', desc: 'Partner with Speqlink to co-develop or distribute a product', icon: '🤝' },
    { type: 'Angel Investment', desc: 'Early-stage funding for product development and market entry', icon: '👼' },
    { type: 'Venture Capital', desc: 'Institutional investment for scaling and expansion', icon: '🏦' },
];

export default function InvestPage() {
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organisation: '',
        investmentRange: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const investmentRanges = [
        'KSh 500,000 – 1,000,000',
        'KSh 1,000,000 – 5,000,000',
        'KSh 5,000,000 – 20,000,000',
        'KSh 20,000,000+',
        'Open to discussion',
    ];

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <>
            <Header />
            <section className="min-h-screen py-24 px-6 relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(255,200,0,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,200,0,0.3) 1px, transparent 1px)`,
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* Hero */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <p className="text-yellow-400 font-semibold uppercase tracking-widest mb-3">
                            Investment Portal
                        </p>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Invest in African{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-400">
                                Intelligent Infrastructure
                            </span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
                            Speqlink is building the next generation of African technology products.
                            Most software companies don't allow direct investment participation — we do.
                            Join us in architecting Africa's digital future.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                            {['3 Scalable Products', 'Pan-African Markets', 'AI-Powered Ecosystems', 'Proven Engineering Team'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Why Invest in Speqlink */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-amber-500/5 border border-yellow-500/20"
                    >
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Invest in Speqlink?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: '🌍', title: 'African-First', desc: 'Built specifically for African markets with deep understanding of local challenges and opportunities.' },
                                { icon: '🤖', title: 'AI-Powered Products', desc: 'Every product is built with intelligent automation, AI recommendations, and realtime data systems.' },
                                { icon: '📈', title: 'Massive Markets', desc: 'Targeting multi-billion dollar markets in real estate, construction logistics, and agribusiness.' },
                                { icon: '🏗️', title: 'Proven Engineering', desc: 'The same team that delivered KCAA RBSS, Anirah fintech, and Octabell logistics — enterprise-grade execution.' },
                                { icon: '🔗', title: 'Network Effects', desc: 'Each product gains value as more users join — creating defensible moats and compounding growth.' },
                                { icon: '🚀', title: 'Pan-African Roadmap', desc: 'Clear expansion roadmap from Kenya to East Africa to the entire continent.' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-all"
                                >
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Products to invest in */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-white mb-4 text-center">Select a Product to Invest In</h2>
                        <p className="text-gray-400 text-center mb-10">Each product is an independent investment opportunity with its own market, model, and roadmap.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {investmentProducts.map((p, i) => (
                                <motion.div
                                    key={p.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    whileHover={{ y: -6 }}
                                    onClick={() => setSelectedProduct(p.id)}
                                    className={`cursor-pointer rounded-2xl border overflow-hidden transition-all ${selectedProduct === p.id
                                        ? `${p.borderColor} shadow-2xl scale-[1.02]`
                                        : 'border-white/10 hover:border-white/30'
                                        }`}
                                >
                                    {/* Card header */}
                                    <div className={`p-6 bg-gradient-to-r ${p.color}`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-4xl">{p.emoji}</span>
                                            <div>
                                                <h3 className="text-2xl font-black text-white">{p.name}</h3>
                                                <p className="text-white/70 text-sm">{p.category}</p>
                                            </div>
                                        </div>
                                        <p className="text-white/80 text-sm italic">{p.tagline}</p>
                                    </div>

                                    {/* Card body */}
                                    <div className="p-6 bg-gray-900/80">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-xs text-gray-400 uppercase tracking-wider">Market</span>
                                            <span className="text-[#38b6ff] text-sm font-semibold">{p.market}</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-5">
                                            <span className="text-xs text-gray-400 uppercase tracking-wider">Stage</span>
                                            <span className="text-yellow-400 text-sm font-semibold">{p.stage}</span>
                                        </div>
                                        <ul className="space-y-2 mb-5">
                                            {p.highlights.map((h, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                                                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">✓</span>
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                            <p className="text-xs text-gray-400 mb-1">Revenue Model</p>
                                            <p className="text-gray-300 text-sm">{p.model}</p>
                                        </div>
                                        <div className="mt-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                            <p className="text-xs text-gray-400 mb-1">Scaling Path</p>
                                            <p className="text-gray-300 text-sm">{p.scaling}</p>
                                        </div>

                                        {selectedProduct === p.id && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="mt-4 flex items-center justify-center gap-2 text-yellow-400 font-semibold text-sm"
                                            >
                                                <span>✓</span> Selected for investment interest
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-center text-gray-500 text-sm mt-4">Click a product to select it for your investment inquiry</p>
                    </div>

                    {/* Investment types */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-white mb-4 text-center">Investment Type</h2>
                        <p className="text-gray-400 text-center mb-10">Choose how you'd like to participate in Speqlink's growth.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {investmentTypes.map((t, i) => (
                                <motion.div
                                    key={t.type}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    onClick={() => setSelectedType(t.type)}
                                    className={`cursor-pointer p-5 rounded-xl border transition-all ${selectedType === t.type
                                        ? 'border-yellow-500/60 bg-yellow-500/10 shadow-lg'
                                        : 'border-white/10 bg-white/5 hover:border-white/30'
                                        }`}
                                >
                                    <div className="text-3xl mb-3">{t.icon}</div>
                                    <h4 className="text-white font-semibold mb-2">{t.type}</h4>
                                    <p className="text-gray-400 text-sm">{t.desc}</p>
                                    {selectedType === t.type && (
                                        <p className="text-yellow-400 text-xs mt-2 font-semibold">✓ Selected</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Investment form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4 text-center">Submit Investment Interest</h2>
                        <p className="text-gray-400 text-center mb-10">
                            Fill in your details and the Speqlink team will reach out within 48 hours to schedule a strategic session.
                        </p>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-10 bg-green-500/10 border border-green-500/20 rounded-2xl text-center"
                            >
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Investment Interest Received!</h3>
                                <p className="text-gray-400 max-w-md mx-auto mb-4">
                                    Thank you for your interest in investing in Speqlink's product ecosystem.
                                    Our team will contact you within 48 hours to schedule a strategic session.
                                </p>
                                <p className="text-yellow-400 font-medium">hello@speqlink.com</p>
                            </motion.div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-6"
                            >
                                {/* Selected product & type summary */}
                                {(selectedProduct || selectedType) && (
                                    <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-sm text-yellow-300">
                                        {selectedProduct && <p>📦 Product: <strong>{investmentProducts.find(p => p.id === selectedProduct)?.name}</strong></p>}
                                        {selectedType && <p>💼 Type: <strong>{selectedType}</strong></p>}
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                                        <input
                                            type="text" name="name" value={formData.name}
                                            onChange={handleChange} required
                                            placeholder="Your full name"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                                        <input
                                            type="email" name="email" value={formData.email}
                                            onChange={handleChange} required
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                                        <input
                                            type="tel" name="phone" value={formData.phone}
                                            onChange={handleChange} required
                                            placeholder="+254 7XX XXX XXX"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Organisation / Fund</label>
                                        <input
                                            type="text" name="organisation" value={formData.organisation}
                                            onChange={handleChange}
                                            placeholder="Your organisation (optional)"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Investment Range *</label>
                                    <select
                                        name="investmentRange" value={formData.investmentRange}
                                        onChange={handleChange} required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                                    >
                                        <option value="">Select investment range</option>
                                        {investmentRanges.map(r => (
                                            <option key={r} value={r}>{r}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Message / Questions</label>
                                    <textarea
                                        name="message" value={formData.message}
                                        onChange={handleChange} rows={4}
                                        placeholder="Tell us about your investment goals, questions about the products, or anything else..."
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-500 resize-none"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer disabled:opacity-70 text-lg"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Investment Interest →'}
                                </motion.button>

                                <p className="text-center text-sm text-gray-500">
                                    We'll respond within 48 hours at{' '}
                                    <a href="mailto:hello@speqlink.com" className="text-yellow-400 hover:underline">hello@speqlink.com</a>
                                </p>
                            </form>
                        )}
                    </motion.div>

                    {/* View products CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-gray-500 mb-4">Want to learn more about each product before investing?</p>
                        <Link href="/products">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                            >
                                Explore Our Products →
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
