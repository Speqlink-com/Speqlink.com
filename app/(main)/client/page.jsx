'use client';

import Header from '../../../components/Header.jsx';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BuildWithSpeqlink() {
    const [formData, setFormData] = useState({
        businessIdea: '',
        name: '',
        email: '',
        phone: '',
        company: '',
        problemStatement: '',
        industry: '',
        expectedFeatures: '',
        budgetRange: '',
        timeline: '',
        preferredPlatforms: [],
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const industries = [
        'Fintech', 'Healthcare', 'Agriculture', 'Real Estate', 'Logistics',
        'Education', 'Retail / E-commerce', 'Government', 'Manufacturing',
        'Media & Entertainment', 'Other'
    ];

    const budgetRanges = [
        'KSh 25,000 – 40,000 (Website)',
        'KSh 50,000 – 100,000 (Basic Web App)',
        'KSh 100,000 – 300,000 (Web / Mobile App)',
        'KSh 300,000 – 500,000 (Full System)',
        'KSh 500,000 – 1,000,000+ (Full Ecosystem)',
        'Open to discussion',
    ];

    const timelines = [
        '1 – 2 weeks', '1 month', '2 – 3 months', '3 – 6 months', '6 – 12 months', 'Flexible'
    ];

    const platforms = ['Web', 'Mobile (iOS & Android)', 'Desktop', 'AI / Agentic System', 'Cloud Infrastructure', 'All Platforms'];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePlatformToggle = (platform) => {
        setFormData(prev => ({
            ...prev,
            preferredPlatforms: prev.preferredPlatforms.includes(platform)
                ? prev.preferredPlatforms.filter(p => p !== platform)
                : [...prev.preferredPlatforms, platform]
        }));
    };

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
            <section className="min-h-screen py-20 px-6 mt-10">
                {/* Background blobs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="fixed -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl pointer-events-none"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="fixed -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl pointer-events-none"
                />

                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-14">
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[#38b6ff] font-semibold uppercase tracking-widest mb-3"
                        >
                            Business Application Layer
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                        >
                            Build With{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#38b6ff] to-cyan-400">
                                Speqlink
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
                        >
                            Tell us about your business idea and the system you want to build.
                            Speqlink will architect the intelligent solution that brings your vision to life.
                        </motion.p>
                    </div>

                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-10 bg-green-500/10 border border-green-500/20 rounded-2xl text-center"
                        >
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Application Received!</h3>
                            <p className="text-gray-700 dark:text-gray-300 max-w-md mx-auto">
                                Thank you for reaching out. The Speqlink team will review your application and
                                get back to you within 24 hours to discuss your project.
                            </p>
                            <p className="text-[#38b6ff] mt-4 font-medium">hello@speqlink.com</p>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            onSubmit={handleSubmit}
                            className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-8"
                        >
                            {/* Business Idea */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Business Idea *
                                </label>
                                <textarea
                                    name="businessIdea"
                                    value={formData.businessIdea}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    placeholder="Describe your business idea in a few sentences..."
                                    className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#38b6ff] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 resize-none"
                                />
                            </div>

                            {/* Client Info */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your full name"
                                            className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#38b6ff] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#38b6ff] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+254 7XX XXX XXX"
                                            className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#38b6ff] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company / Organisation</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your company name (optional)"
                                            className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#38b6ff] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Problem Statement */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Problem Statement *
                                </label>
                                <textarea
                                    name="problemStatement"
                                    value={formData.problemStatement}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    placeholder="What problem does your system solve? Who does it serve?"
                                    className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#38b6ff] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 resize-none"
                                />
                            </div>

                            {/* Industry */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Industry *</label>
                                <select
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#38b6ff] focus:border-transparent text-gray-900 dark:text-white"
                                >
                                    <option value="">Select your industry</option>
                                    {industries.map(ind => (
                                        <option key={ind} value={ind}>{ind}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Expected Features */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Expected Features *
                                </label>
                                <textarea
                                    name="expectedFeatures"
                                    value={formData.expectedFeatures}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    placeholder="List the key features you want in your system (e.g. user login, payments, dashboard, AI assistant...)"
                                    className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#38b6ff] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 resize-none"
                                />
                            </div>

                            {/* Budget & Timeline */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Budget Range *</label>
                                    <select
                                        name="budgetRange"
                                        value={formData.budgetRange}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#38b6ff] focus:border-transparent text-gray-900 dark:text-white"
                                    >
                                        <option value="">Select budget range</option>
                                        {budgetRanges.map(b => (
                                            <option key={b} value={b}>{b}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Timeline *</label>
                                    <select
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#38b6ff] focus:border-transparent text-gray-900 dark:text-white"
                                    >
                                        <option value="">Select timeline</option>
                                        {timelines.map(t => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Preferred Platforms */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                    Preferred Platforms
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {platforms.map(platform => (
                                        <button
                                            key={platform}
                                            type="button"
                                            onClick={() => handlePlatformToggle(platform)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${formData.preferredPlatforms.includes(platform)
                                                ? 'bg-[#38b6ff] text-white border-[#38b6ff]'
                                                : 'bg-white/5 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border-white/10 hover:border-[#38b6ff]/50'
                                                }`}
                                        >
                                            {platform}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Submit */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gradient-to-r from-[#38b6ff] to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer disabled:opacity-70"
                            >
                                {isSubmitting ? 'Submitting Application...' : 'Submit Application →'}
                            </motion.button>

                            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                                We'll review your application and respond within 24 hours at{' '}
                                <a href="mailto:hello@speqlink.com" className="text-[#38b6ff] hover:underline">hello@speqlink.com</a>
                            </p>
                        </motion.form>
                    )}
                </div>
            </section>
        </>
    );
}
