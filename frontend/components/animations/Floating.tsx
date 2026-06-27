"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FloatingProps {
    children: ReactNode;
}

export default function Floating({ children }: FloatingProps) {
    return (
        <motion.div
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
}
