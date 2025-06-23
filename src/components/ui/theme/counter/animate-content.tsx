import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

import { IoIosCheckboxOutline } from "react-icons/io";
import { cn } from "@/lib/tailwind";

interface AnimateContentProps {
    titles: string[];
}

export function AnimateContent({ titles }: AnimateContentProps) {

    const container: Variants = {
        invisible: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        }
    }

    const item: Variants = {
        invisible: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        }
    }

    return (
        <motion.div className="size-full flex flex-col justify-center ps-10 gap-y-5 group"
                    variants={ container }
                    initial="invisible"
                    animate="visible">
            {
                titles.map((title, idx) => (
                    <motion.p
                        className={ cn("flex items-center gap-x-5 group-hover:text-purple-800") }
                        variants={ item }
                        key={ idx }>
                        <IoIosCheckboxOutline className="text-3xl lg:text-4xl duration-300"/>
                        <span className="text-3xl lg:text-4xl duration-300">{ title }</span>
                    </motion.p>
                ))
            }
        </motion.div>
    )
}