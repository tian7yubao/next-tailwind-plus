"use client"

import { useEffect, useRef } from "react";
import { splitText } from "motion-plus";
import { animate, stagger } from "motion";

export function Heading() {

    const ref = useRef(null);

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (ref.current) {
                const element = ref.current as HTMLDivElement;
                element.style.visibility = "visible";
                const { chars } = splitText(element, { splitBy: " ", charClass: "", wordClass: "", lineClass: "" });
                animate(chars,
                    {
                        opacity: [ 0, 1 ],
                        y: [ 10, 0 ],
                    },
                    {
                        type: "spring",
                        duration: 2,
                        bounce: 0,
                        delay: stagger(0.05),
                    })
            }
        });
    }, []);

    return (
        <section className="py-32 px-5">
            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-y-8">
                <h1 className="text-center text-5xl md:text-7xl lg:text-9xl">
                    <span className="text-shadow-lg text-shadow-slate-500/60 invisible **:will-change-transform" ref={ ref }>
                        Example
                    </span>
                </h1>
                <h2 className="text-center text-base sm:text-xl md:text-2xl lg:text-3xl">
                    Each example includes ui & video explanation & pretty source code
                </h2>
                <h3 className="text-center text-4xl md:text-5xl lg:text-6xl">
                    ctrl + f
                </h3>
            </div>
        </section>
    )
}








