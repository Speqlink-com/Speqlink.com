'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Logo() {
    return (
        <Link href="/home" aria-label="Speqlink Home">
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center cursor-pointer"
            >
                <Image
                    src="/LOGO-%20Dark%20theme.png"
                    alt="Speqlink logo"
                    width={160}
                    height={48}
                    className="block dark:hidden h-auto w-auto max-h-12 object-contain"
                    priority
                />
                <Image
                    src="/LOGO%20-%20light%20theme.png"
                    alt="Speqlink logo"
                    width={160}
                    height={48}
                    className="hidden dark:block h-auto w-auto max-h-12 object-contain"
                    priority
                />
            </motion.div>
        </Link>
    );
}
