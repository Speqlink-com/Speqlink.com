'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Playfair_Display } from 'next/font/google';

// 🎨 Different font
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });

const partners = [
    { name: 'Next.js', logo: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png' },
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'React Native', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
    { name: 'FastAPI', logo: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png' },
    { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
    { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
    { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
    { name: 'Amazon Bedrock', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Redis', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg' },
    { name: 'Docker', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { name: 'GitHub', logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    { name: 'Electron', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg' },
];

export default function Partners() {
    const containerRef = useRef(null);
    const [contentWidth, setContentWidth] = useState(0);

    // duplicate at least twice so we can loop seamlessly
    const loopedPartners = [...partners, ...partners];

    useEffect(() => {
        if (containerRef.current) {
            setContentWidth(containerRef.current.scrollWidth / 2);
            // half, because we duplicated
        }
    }, []);

    return (
        <section className="py-16 bg-background dark:bg-background-dark overflow-hidden relative">
            <div className="container mx-auto px-6">
                <h2
                    className={`${playfair.className} text-3xl md:text-4xl font-bold text-center text-foreground dark:text-foreground-dark mb-12`}
                >
                    Our Technology Stack
                </h2>

                <div className="relative w-full overflow-hidden">
                    <motion.div
                        ref={containerRef}
                        className="flex"
                        animate={{ x: [0, -contentWidth] }}
                        whileHover={{ x: 0 }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 15, // speed = 10s
                                ease: 'linear',
                            },
                        }}
                    >
                        {loopedPartners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 mx-6 w-32 flex flex-col items-center justify-center"
                            >
                                <Card className="mb-3 flex items-center justify-center h-20 w-20 p-4">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-12 max-w-12 object-contain"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRkZGIi8+Cjx0ZXh0IHg9IjMyIiB5PSIzMiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjgiIGZpbGw9IiMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkxPR088L3RleHQ+Cjwvc3ZnPg==';
                                        }}
                                    />
                                </Card>
                                <p className="text-sm font-medium text-center text-foreground dark:text-foreground-dark">
                                    {partner.name}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
