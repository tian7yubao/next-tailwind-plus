"use client"

import { AnimateNumber } from "motion-plus/react"
import { useEffect, useState } from "react";

interface AnimateCounterProps {
    value?: number;
    delay?: number;
}

export function AnimateCounter({ value = 0, delay = 300 }: AnimateCounterProps) {

    const [ counter, setCounter ] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCounter(value);
        }, delay);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimateNumber>{ counter }</AnimateNumber>
    )
}