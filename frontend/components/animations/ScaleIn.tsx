"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScaleInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function ScaleIn({
    children,
    className,
    delay = 0,
}: ScaleInProps) {
    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                scale: 0.92,
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.6,
                delay,
            }}
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
        >
            {children}
        </motion.div>
    );
}
