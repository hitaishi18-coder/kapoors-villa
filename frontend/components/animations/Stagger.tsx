"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface StaggerProps {
    children: ReactNode;
    className?: string;
}

export default function Stagger({ children, className }: StaggerProps) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: true,
                amount: 0.2,
            }}
        >
            {children}
        </motion.div>
    );
}

export const StaggerItem = ({ children }: { children: ReactNode }) => (
    <motion.div
        variants={{
            hidden: {
                opacity: 0,
                y: 40,
            },
            show: {
                opacity: 1,
                y: 0,
            },
        }}
        transition={{
            duration: 0.6,
        }}
    >
        {children}
    </motion.div>
);
