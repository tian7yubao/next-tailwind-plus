"use client"

import type { Variant, Variants } from "motion/react";
import React from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/tailwind";

interface AnimateTextProps {
    content: string[];
    as?: keyof React.JSX.IntrinsicElements;
    stagger?: number;
    initial: Variant;
    animate: Variant;
    className?: string;
}

export function AnimateText(
    {
        as = "p",
        content,
        stagger = 0.02,
        initial,
        animate,
        className,
    }: AnimateTextProps) {

    const MotionTag = motion.create(as) as typeof motion.div;

    const container: Variants = {
        invisible: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                type: "spring",
                bounce: 0,
            }
        }
    }

    const item: Variants = {
        invisible: {
            ...initial,
            opacity: 0,
        },
        visible: {
            ...animate,
            opacity: 1,
        }
    }

    return (
        <MotionTag className={ cn("flex w-fit justify-center flex-wrap", className) }
                   variants={ container }
                   initial="invisible"
                   animate="visible">
            {
                content.map((line, idx) => (
                    <motion.span key={ idx }
                                 variants={ item }>
                        { line }
                    </motion.span>
                ))
            }
        </MotionTag>
    )
}