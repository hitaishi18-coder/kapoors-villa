"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeUpProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function FadeUp({
    children,
    className,
    delay = 0,
}: FadeUpProps) {
    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.7,
                delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}
