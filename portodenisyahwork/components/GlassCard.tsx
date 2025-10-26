'use client';
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function GlassCard({
children,
className = ""
}: {
children: ReactNode;
className?: string;
}) {
return (
    <motion.div
    className={`p-6bg-white/10backdrop-blur-mdshadow-glassrounded-xlborder border-white/20${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    >
    {children}
    </motion.div>
);
}
