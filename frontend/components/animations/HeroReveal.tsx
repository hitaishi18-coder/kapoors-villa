"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface HeroRevealProps {
    children: ReactNode;
    className?: string;
}

export default function HeroReveal({ children, className }: HeroRevealProps) {
    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                y: 50,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.9,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}
