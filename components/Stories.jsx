'use client';

import { motion } from 'framer-motion';
import { Heart, Share, Repeat, Download, MessageCircle } from 'lucide-react';

const stories = [
    {
        title: 'Anirah Fintech Platform',
        summary: 'Speqlink engineered a complete fintech platform infrastructure — streamlining digital payments, transaction management, and financial operations.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'Anirah Client',
        handle: '@anirah',
        followers: '5.2K',
        date: '3d ago',
        likes: 312,
        retweets: 89,
        shares: 44,
        downloads: 18,
        comments: 56,
        quote: "Speqlink built our entire fintech infrastructure from scratch. Exceptional engineering. 💰✨ #Fintech #Speqlink"
    },
    {
        title: 'RBSS KCAA System',
        summary: 'Retirement Benefits Scheme System for Kenya Civil Aviation Authority — a comprehensive enterprise system managing member records and financial reporting.',
        image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'KCAA',
        handle: '@kcaa_kenya',
        followers: '18.3K',
        date: '1w ago',
        likes: 521,
        retweets: 201,
        shares: 89,
        downloads: 45,
        comments: 134,
        quote: "Our retirement benefits system is now fully digital and intelligent. Thank you Speqlink! 🏛️ #Enterprise #Kenya"
    },
    {
        title: 'Octabell Logistics',
        summary: 'Construction logistics ecosystem connecting constructors, quarry suppliers, and transport drivers through intelligent realtime infrastructure.',
        image: 'https://images.unsplash.com/photo-1569144157591-c60f3f82f137?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'Octabell',
        handle: '@octabell',
        followers: '9.7K',
        date: '2w ago',
        likes: 445,
        retweets: 167,
        shares: 72,
        downloads: 38,
        comments: 95,
        quote: "Octabell is transforming construction logistics in Kenya. Built by Speqlink. 🏗️🚚 #Logistics #AfricanTech"
    },
    {
        title: 'Masqany Real Estate',
        summary: 'Intelligent real estate ecosystem connecting Kenyans to homes, apartments, hotels, and affordable housing through smart property discovery.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'Masqany',
        handle: '@masqany',
        followers: '7.1K',
        date: '3w ago',
        likes: 389,
        retweets: 145,
        shares: 63,
        downloads: 29,
        comments: 87,
        quote: "Finding a home in Kenya just got smarter. Masqany by Speqlink. 🏠✨ #PropTech #Kenya"
    },
    {
        title: 'Jenic Agribusiness',
        summary: 'Intelligent agribusiness ecosystem connecting small-scale farmers to ready markets through ecommerce, logistics, and agricultural supply-chain intelligence.',
        image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'Jenic',
        handle: '@jenic_africa',
        followers: '11.4K',
        date: '1mo ago',
        likes: 567,
        retweets: 234,
        shares: 98,
        downloads: 43,
        comments: 167,
        quote: "Jenic is digitizing African agriculture. Farmers now connect directly to markets. 🌱🤖 #AgriTech #Africa"
    },
    {
        title: 'AI Dermatology Assistant',
        summary: 'AI-driven platform identifying skin conditions through image analysis with high accuracy, providing preliminary recommendations to users across Africa.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'HealthTech Client',
        handle: '@healthtech_ke',
        followers: '22.8K',
        date: '1mo ago',
        likes: 892,
        retweets: 345,
        shares: 156,
        downloads: 67,
        comments: 234,
        quote: "AI-powered healthcare is now accessible in Africa. Speqlink made it possible. 🏥❤️ #HealthTech #AI"
    },
    {
        title: 'Enterprise Attendance System',
        summary: 'Biometric and RFID-based attendance system with facial recognition, geo-fencing, and real-time reporting for enterprises and institutions.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'Enterprise Client',
        handle: '@enterprise_ke',
        followers: '14.6K',
        date: '2mo ago',
        likes: 423,
        retweets: 178,
        shares: 82,
        downloads: 34,
        comments: 112,
        quote: "Our attendance system is now fully automated and intelligent. Speqlink delivered. ⚡️ #Enterprise #Automation"
    },
    {
        title: 'Predictive Analytics Dashboard',
        summary: 'Business intelligence platform with predictive analytics, custom reporting, and data visualization for informed decision-making.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'Analytics Client',
        handle: '@analytics_ke',
        followers: '8.9K',
        date: '2mo ago',
        likes: 334,
        retweets: 134,
        shares: 67,
        downloads: 28,
        comments: 89,
        quote: "Data-driven decisions are now our superpower. Built by Speqlink. 📊💡 #DataScience #Intelligence"
    },
];

export default function Stories() {
    return (
        <section className="h-screen flex justify-center items-center px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiM4MDIwZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0wLDMwIGMzMCwwIDMwLDAgNjAsME0zMCwwIGMwLDMwIDAsMzAgMCw2MCIvPjwvZz48L3N2Zz4=')] opacity-10"></div>

            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-blue-400"
                    initial={{
                        x: Math.random() * 100 + 'vw',
                        y: Math.random() * 100 + 'vh',
                        opacity: 0
                    }}
                    animate={{
                        y: [null, (Math.random() - 0.5) * 100],
                        x: [null, (Math.random() - 0.5) * 100],
                        opacity: [0, 0.7, 0],
                    }}
                    transition={{
                        duration: Math.random() * 5 + 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            <div className="w-full max-w-6xl mx-auto relative z-10">
                <motion.h3
                    className="text-2xl md:text-4xl text-center uppercase tracking-widest mb-12 font-black text-[lightblue]"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Solutions We've Delivered
                </motion.h3>

                <div className="relative h-[70vh] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 absolute w-full"
                        animate={{ y: ['0%', '-100%'] }}
                        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                    >
                        {stories.concat(stories).map((s, i) => (
                            <motion.div
                                key={`${s.title}-${i}`}
                                className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                {/* Header with profile info */}
                                <div className="p-4 flex items-center gap-3 border-b border-gray-700">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0"></div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-1">
                                            <h4 className="font-bold text-white truncate">{s.name}</h4>
                                            <span className="text-blue-400">✓</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <span>{s.handle}</span>
                                            <span className="text-xs">•</span>
                                            <span>{s.date}</span>
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                                        {s.followers} followers
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <p className="text-white mb-3">{s.quote}</p>

                                    <div className="h-48 bg-gray-700 rounded-lg overflow-hidden mb-3 relative">
                                        <img
                                            src={s.image}
                                            alt={s.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                                            <h4 className="text-lg font-bold text-white">{s.title}</h4>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-300 mb-4">{s.summary}</p>

                                    {/* Engagement stats */}
                                    <div className="flex justify-between text-sm text-gray-400 mb-4">
                                        <span>{s.likes} Likes</span>
                                        <span>{s.retweets} Retweets</span>
                                        <span>{s.comments} Comments</span>
                                        <span>{s.downloads} Downloads</span>
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex justify-between border-t border-gray-700 pt-3">
                                        <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors">
                                            <MessageCircle size={18} />
                                            <span className="text-xs">{s.comments}</span>
                                        </button>
                                        <button className="flex items-center gap-1 text-gray-400 hover:text-green-400 transition-colors">
                                            <Repeat size={18} />
                                            <span className="text-xs">{s.retweets}</span>
                                        </button>
                                        <button className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors">
                                            <Heart size={18} />
                                            <span className="text-xs">{s.likes}</span>
                                        </button>
                                        <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors">
                                            <Share size={18} />
                                            <span className="text-xs">{s.shares}</span>
                                        </button>
                                        <button className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors">
                                            <Download size={18} />
                                            <span className="text-xs">{s.downloads}</span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Gradient overlays for smooth scrolling effect */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
}