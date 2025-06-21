"use client"

import { AnimateNumber } from "motion-plus/react"
import { useEffect, useState } from "react";

interface CounterProps {
    value?: number;
    delay?: number;
}

export function Counter({ value = 0, delay = 300 }: CounterProps) {

    const [ counter, setCounter ] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCounter(value);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimateNumber>{ counter }</AnimateNumber>
    )
}