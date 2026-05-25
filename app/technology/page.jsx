'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';
import Link from 'next/link';

const stackCategories = [
    {
        category: 'Frontend — Mobile',
        icon: '📱',
        color: 'from-blue-600 to-cyan-500',
        borderColor: 'border-blue-500/30',
        glowColor: 'bg-blue-500/5',
        description: 'Cross-platform mobile applications engineered for performance and offline-first African environments.',
        tools: [
            { name: 'Expo', desc: 'Universal React Native framework for iOS & Android', icon: '⚡' },
            { name: 'React Native', desc: 'Cross-platform mobile UI with native performance', icon: '📲' },
        ],
    },
    {
        category: 'Frontend — Web',
        icon: '🌐',
        color: 'from-indigo-600 to-blue-500',
        borderColor: 'border-indigo-500/30',
        glowColor: 'bg-indigo-500/5',
        description: 'Enterprise-grade web platforms built for speed, scalability, and intelligent user experiences.',
        tools: [
            { name: 'React', desc: 'Component-based UI library for dynamic web interfaces', icon: '⚛️' },
            { name: 'Next.js', desc: 'Full-stack React framework with SSR, SSG, and API routes', icon: '▲' },
            { name: 'TanStack', desc: 'Powerful data fetching, state management, and routing', icon: '🔄' },
        ],
    },
    {
        category: 'Frontend — Desktop',
        icon: '🖥️',
        color: 'from-purple-600 to-indigo-500',
        borderColor: 'border-purple-500/30',
        glowColor: 'bg-purple-500/5',
        description: 'Enterprise desktop applications and offline-first systems for operational environments.',
        tools: [
            { name: 'Electron', desc: 'Cross-platform desktop apps using web technologies', icon: '⚙️' },
            { name: 'Tauri', desc: 'Lightweight, secure desktop apps with Rust backend', icon: '🦀' },
        ],
    },
    {
        category: 'Backend & Infrastructure',
        icon: '⚙️',
        color: 'from-green-600 to-emerald-500',
        borderColor: 'border-green-500/30',
        glowColor: 'bg-green-500/5',
        description: 'High-performance backend systems and realtime infrastructure powering intelligent applications.',
        tools: [
            { name: 'FastAPI', desc: 'High-performance Python API framework with async support', icon: '🚀' },
            { name: 'Flask', desc: 'Lightweight Python web framework for microservices', icon: '🌶️' },
            { name: 'Express.js', desc: 'Minimal Node.js web framework for REST APIs', icon: '🟢' },
            { name: 'TypeScript', desc: 'Typed JavaScript for scalable, maintainable codebases', icon: '🔷' },
            { name: 'Apache Kafka', desc: 'Distributed event streaming for realtime data pipelines', icon: '📡' },
            { name: 'Redis', desc: 'In-memory data store for caching and pub/sub messaging', icon: '🔴' },
            { name: 'BullMQ', desc: 'Robust job queue system built on Redis', icon: '📋' },
        ],
    },
    {
        category: 'Databases',
        icon: '🗄️',
        color: 'from-orange-600 to-amber-500',
        borderColor: 'border-orange-500/30',
        glowColor: 'bg-orange-500/5',
        description: 'Reliable, scalable database systems for structured and unstructured enterprise data.',
        tools: [
            { name: 'PostgreSQL', desc: 'Advanced open-source relational database for enterprise systems', icon: '🐘' },
            { name: 'MongoDB', desc: 'Flexible NoSQL document database for dynamic data models', icon: '🍃' },
        ],
    },
    {
        category: 'Cloud & AI',
        icon: '☁️',
        color: 'from-cyan-600 to-blue-500',
        borderColor: 'border-cyan-500/30',
        glowColor: 'bg-cyan-500/5',
        description: 'Enterprise cloud infrastructure and AI platforms powering Speqlink\'s intelligent systems.',
        tools: [
            { name: 'Microsoft Azure', desc: 'Enterprise cloud platform for scalable deployments and AI services', icon: '🔵' },
            { name: 'Amazon Bedrock', desc: 'Fully managed AI service for building agentic applications', icon: '🤖' },
            { name: 'Contabo', desc: 'High-performance VPS and dedicated server infrastructure', icon: '🖧' },
            { name: 'Railway', desc: 'Modern cloud platform for rapid deployment and scaling', icon: '🚂' },
        ],
    },
];

const whyItMatters = [
    {
        icon: '⚡',
        title: 'Realtime by Design',
        desc: 'Apache Kafka and Redis power event-driven architectures that process data in milliseconds — critical for logistics tracking, live dashboards, and agentic AI systems.',
    },
    {
        icon: '🌍',
        title: 'Built for Africa',
        desc: 'Offline-first mobile apps with Expo, lightweight desktop systems with Tauri, and optimised cloud deployments on Contabo ensure our products work in low-connectivity African environments.',
    },
    {
        icon: '🤖',
        title: 'AI-Native Infrastructure',
        desc: 'Amazon Bedrock enables Speqlink to build agentic AI systems, conversational assistants, and intelligent automation without managing AI model infrastructure.',
    },
    {
        icon: '🔒',
        title: 'Enterprise Security',
        desc: 'TypeScript across the stack, PostgreSQL with row-level security, and Azure enterprise controls ensure every system meets enterprise-grade security standards.',
    },
    {
        icon: '📈',
        title: 'Infinitely Scalable',
        desc: 'Kafka-powered event streaming, Redis caching, and cloud-native deployments on Azure and Railway mean our systems scale from startup to enterprise without re-architecture.',
    },
    {
        icon: '🏗️',
        title: 'Full-Spectrum Engineering',
        desc: 'From mobile to desktop, web to cloud, AI to databases — Speqlink engineers complete digital ecosystems using a single, cohesive, battle-tested technology stack.',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TechnologyPage() {
    return (
        <>
            <Header />
            <section className="min-h-screen py-24 px-6 relative overflow-hidden">

                {/* Background grid */}
                <div
                    className="absolute inset-0 -z-10 opacity-30"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(56,182,255,0.07) 1px, transparent 1px),
                                          linear-gradient(to bottom, rgba(56,182,255,0.07) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#38b6ff]/5 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

                <div className="max-w-7xl mx-auto">

                    {/* Hero */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <p className="text-[#38b6ff] font-semibold uppercase tracking-widest mb-3">
                            Engineering Excellence
                        </p>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
                            Technology Stack
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Speqlink uses a carefully selected, enterprise-grade technology stack across every layer —
                            frontend, backend, cloud, AI, and databases. Every tool is chosen for performance,
                            scalability, and intelligent system design.
                        </p>
                    </motion.div>

                    {/* Stack categories */}
                    <div className="space-y-10 mb-24">
                        {stackCategories.map((cat, catIndex) => (
                            <motion.div
                                key={cat.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: catIndex * 0.05 }}
                                className={`rounded-2xl border ${cat.borderColor} ${cat.glowColor} overflow-hidden`}
                            >
                                {/* Category header */}
                                <div className={`px-8 py-5 bg-gradient-to-r ${cat.color} flex items-center gap-4`}>
                                    <span className="text-3xl">{cat.icon}</span>
                                    <div>
                                        <h2 className="text-xl font-black text-white">{cat.category}</h2>
                                        <p className="text-white/75 text-sm mt-0.5">{cat.description}</p>
                                    </div>
                                </div>

                                {/* Tools grid */}
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6 bg-gray-900/60 dark:bg-black/40"
                                >
                                    {cat.tools.map((tool) => (
                                        <motion.div
                                            key={tool.name}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#38b6ff]/40 transition-all"
                                        >
                                            <span className="text-2xl flex-shrink-0 mt-0.5">{tool.icon}</span>
                                            <div>
                                                <p className="font-bold text-white text-sm">{tool.name}</p>
                                                <p className="text-gray-400 text-xs mt-1 leading-relaxed">{tool.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Why it matters */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <div className="text-center mb-12">
                            <p className="text-[#38b6ff] font-semibold uppercase tracking-widest mb-3">Why It Matters</p>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
                                Engineered for Intelligence & Scale
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whyItMatters.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    className="p-6 rounded-2xl bg-white/5 dark:bg-gray-800/30 border border-white/10 hover:border-[#38b6ff]/30 transition-all"
                                >
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Full stack visual summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 overflow-hidden relative"
                    >
                        <div className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: `linear-gradient(to right, rgba(56,182,255,0.3) 1px, transparent 1px),
                                                  linear-gradient(to bottom, rgba(56,182,255,0.3) 1px, transparent 1px)`,
                                backgroundSize: '40px 40px',
                            }}
                        />
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-10">
                                Complete Stack at a Glance
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {[
                                    { layer: 'Mobile', items: ['Expo', 'React Native'], color: 'text-blue-400' },
                                    { layer: 'Web', items: ['Next.js', 'React', 'TanStack'], color: 'text-indigo-400' },
                                    { layer: 'Desktop', items: ['Electron', 'Tauri'], color: 'text-purple-400' },
                                    { layer: 'Backend', items: ['FastAPI', 'Flask', 'Express.js', 'TypeScript'], color: 'text-green-400' },
                                    { layer: 'Realtime', items: ['Kafka', 'Redis', 'BullMQ'], color: 'text-orange-400' },
                                    { layer: 'Cloud & AI', items: ['Azure', 'Bedrock', 'Contabo', 'Railway'], color: 'text-cyan-400' },
                                    { layer: 'Databases', items: ['PostgreSQL', 'MongoDB'], color: 'text-yellow-400' },
                                ].map((col, i) => (
                                    <motion.div
                                        key={col.layer}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.07 }}
                                        className="text-center"
                                    >
                                        <p className={`text-xs font-black uppercase tracking-widest mb-3 ${col.color}`}>
                                            {col.layer}
                                        </p>
                                        <div className="space-y-2">
                                            {col.items.map((item) => (
                                                <div
                                                    key={item}
                                                    className="px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium"
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center bg-gradient-to-r from-[#38b6ff]/10 to-cyan-500/10 rounded-2xl p-12 border border-[#38b6ff]/20"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Want this stack working for your business?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                            Speqlink engineers intelligent systems using this exact stack.
                            Tell us what you want to build and we'll architect the right solution.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/client">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-4 bg-gradient-to-r from-[#38b6ff] to-cyan-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
                                >
                                    Build With Speqlink →
                                </motion.button>
                            </Link>
                            <Link href="/services">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-4 bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 font-semibold rounded-lg border border-white/10 hover:bg-white/20 transition-all"
                                >
                                    View Our Services
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </section>
        </>
    );
}
