"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function FadeIn({
    children,
    className,
    delay = 0,
}: FadeInProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.8,
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}
