import * as motion from "motion/react-client";

import { AnimateText } from "@/components/motion/animate-text";

export function Heading() {

    return (
        <section className="py-32 px-5">
            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-y-8">
                <h1 className="text-center text-5xl md:text-7xl lg:text-9xl">
                    <AnimateText className="text-shadow-lg text-shadow-slate-500/60"
                                 content={ [ "E", "x", "a", "m", "p", "l", "e" ] }
                                 initial={ { y: 5 } }
                                 animate={ { y: 0 } }/>
                </h1>
                <h2 className="text-center text-base sm:text-xl md:text-2xl lg:text-3xl">
                    <AnimateText className="gap-x-2"
                                 content={ [ "Each", "example", "includes", "ui", "&", "video", "explanation", "&", "pretty", "source", "code" ] }
                                 initial={ { filter: "blur(8px)" } }
                                 animate={ { filter: "blur(0px)" } }/>
                </h2>
                <h3 className="text-center text-4xl md:text-5xl lg:text-6xl">
                    <motion.p initial={ { y: 10, opacity: 0 } }
                              animate={ { y: 0, opacity: 1 } }>
                        <span className="text-shadow-lg text-shadow-slate-500/60">ctrl + f</span>
                    </motion.p>
                </h3>
            </div>
        </section>
    )

}






