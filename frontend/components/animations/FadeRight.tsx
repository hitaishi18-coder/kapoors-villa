"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeRightProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function FadeRight({
    children,
    className,
    delay = 0,
}: FadeRightProps) {
    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                x: 80,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.8,
                delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}
