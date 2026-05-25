'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';

const pricingTiers = [
    {
        title: 'Bronze',
        subtitle: 'Startup-grade systems',
        price: 'KSh 25,000',
        priceEnd: '– 100,000',
        description: 'For startups and small businesses establishing their digital presence with essential, well-engineered systems.',
        timeline: '2–6 week timeline',
        icon: '🥉',
        features: [
            'Professional website (up to 10 pages)',
            'Responsive design for all devices',
            'Basic web application',
            'Contact & inquiry forms',
            'Basic SEO optimization',
            'Cloud deployment',
            '3 months technical support',
            'Training documentation'
        ],
        cta: 'Start Building',
        popular: false,
        gradient: 'from-amber-700/20 to-orange-600/10',
        border: 'border-amber-700/30'
    },
    {
        title: 'Silver',
        subtitle: 'Growth-stage scalable systems',
        price: 'KSh 100,000',
        priceEnd: '– 400,000',
        description: 'For growing businesses ready to scale with advanced web applications, mobile systems, and intelligent integrations.',
        timeline: '1–3 month timeline',
        icon: '🥈',
        features: [
            'Full-stack web application',
            'Mobile application (iOS & Android)',
            'Desktop application',
            'API development & integration',
            'Database architecture',
            'Cloud infrastructure & DevOps',
            'AI integration',
            'User authentication systems',
            'Analytics dashboard',
            '6 months maintenance & support'
        ],
        cta: 'Scale Up',
        popular: true,
        gradient: 'from-slate-400/20 to-blue-500/10',
        border: 'border-slate-400/40'
    },
    {
        title: 'Gold',
        subtitle: 'Enterprise intelligent infrastructure',
        price: 'KSh 300,000',
        priceEnd: '– 1,000,000+',
        description: 'Full ecosystem engineering for enterprises requiring intelligent systems, agentic AI, and scalable digital infrastructure.',
        timeline: '3–12 month timeline',
        icon: '🥇',
        features: [
            'Full digital ecosystem architecture',
            'Agentic AI & multi-agent infrastructure',
            'Multi-platform development',
            'Realtime systems & Apache Kafka',
            'Enterprise cloud infrastructure',
            'Custom AI assistants & automation',
            'Scalable distributed systems',
            'Security auditing & compliance',
            'Investor-ready product documentation',
            '12 months dedicated support',
            'Team training & onboarding'
        ],
        cta: 'Engineer Enterprise',
        popular: false,
        gradient: 'from-yellow-500/20 to-amber-400/10',
        border: 'border-yellow-500/30'
    }
];

const solutionPricing = [
    { solution: 'Websites', range: 'KSh 25,000 – 40,000' },
    { solution: 'Web Applications', range: 'KSh 50,000 – 300,000' },
    { solution: 'Desktop Applications', range: 'KSh 100,000 – 400,000' },
    { solution: 'Mobile Applications', range: 'KSh 50,000 – 400,000' },
    { solution: 'Full Ecosystems', range: 'KSh 300,000 – 1,000,000+' },
];

export default function Pricing() {
    return (
        <>
            <Header />
            <section id="pricing" className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.5 }}
                    className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl"
                />

                {/* Hero section */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[#38b6ff] font-semibold uppercase tracking-widest mb-3"
                    >
                        Investment Guide
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        Invest in Intelligent Infrastructure
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
                    >
                        Every engagement with Speqlink is an investment in enterprise engineering and scalable architecture.
                        We position every solution as a long-term digital asset — not a cost.
                    </motion.p>
                </div>

                {/* Pricing tiers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={tier.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className={`relative rounded-2xl p-8 shadow-xl backdrop-blur-sm flex flex-col h-full bg-gradient-to-br ${tier.gradient} border ${tier.border} ${tier.popular ? 'scale-105 z-10' : ''}`}
                        >
                            {tier.popular && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                                >
                                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                                        MOST POPULAR
                                    </span>
                                </motion.div>
                            )}

                            <div className="text-4xl mb-3 text-center">{tier.icon}</div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-1">
                                {tier.title}
                            </h3>
                            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-3 italic">
                                {tier.subtitle}
                            </p>
                            <div className="text-center mb-2">
                                <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#38b6ff] to-cyan-400">
                                    {tier.price}
                                </span>
                                <span className="text-gray-500 dark:text-gray-400 text-sm"> {tier.priceEnd}</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-center text-sm mb-4">
                                {tier.description}
                            </p>

                            <div className="bg-white/5 dark:bg-black/10 rounded-lg p-3 text-center mb-6">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    ⏱ {tier.timeline}
                                </span>
                            </div>

                            <ul className="mb-8 space-y-3 flex-grow">
                                {tier.features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                                        className="flex items-start"
                                    >
                                        <svg className="w-5 h-5 text-[#38b6ff] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.a
                                href="/client"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all ${tier.popular
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-xl'
                                    : 'bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/50'
                                    }`}
                            >
                                {tier.cta}
                            </motion.a>
                        </motion.div>
                    ))}
                </div>

                {/* Solution pricing table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                        Solution Price Reference
                    </h3>
                    <div className="overflow-x-auto rounded-2xl border border-white/10">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-white/5 dark:bg-gray-800/50">
                                    <th className="px-6 py-4 text-gray-900 dark:text-white font-semibold">Solution Type</th>
                                    <th className="px-6 py-4 text-gray-900 dark:text-white font-semibold">Price Range</th>
                                </tr>
                            </thead>
                            <tbody>
                                {solutionPricing.map((item, i) => (
                                    <motion.tr
                                        key={item.solution}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.08 }}
                                        className="border-t border-white/5 hover:bg-white/5 transition-all"
                                    >
                                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{item.solution}</td>
                                        <td className="px-6 py-4 text-[#38b6ff] font-semibold">{item.range}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* CTA section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-12 border border-white/5"
                >
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to architect your system?
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                        Submit your business idea and let Speqlink engineer the intelligent infrastructure
                        that drives your growth and delivers exceptional ROI.
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
        </>
    );
}
