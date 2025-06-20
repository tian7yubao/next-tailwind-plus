"use client"

import { RiRobot2Line } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { Menu } from "@/components/ui/nav/menu";
import { useToggle } from "usehooks-ts";
import { Aside } from "@/components/ui/nav/aside";

import Link from "next/link";

export function Nav() {

    const [ open, toggle ] = useToggle(false);

    const Tailwind = "https://tailwindcss.com/";
    const React = "https://react.dev/";
    const Zustand = "https://zustand-demo.pmnd.rs/";
    const Motion = "https://motion.dev/";
    const Next = "https://nextjs.org/";
    const Bili = "https://space.bilibili.com/3546375111313568/";
    const Youtube = "https://www.youtube.com/";

    return (
        <nav className="bg-black text-white px-5 sticky top-0 shadow-md shadow-slate-600 z-1000">
            <section className="max-w-7xl mx-auto h-20 flex gap-x-20 items-center">

                <Link className="text-2xl md:text-3xl hover:text-purple-700 duration-300" href="/">
                    Example
                </Link>

                <ul className="hidden md:flex gap-x-10 items-center">
                    <li>
                        <a className="p-2 text-xl relative block group" href={ Tailwind }>
                            <span>Tailwind</span>
                            <Underline/>
                        </a>
                    </li>
                    <li>
                        <a className="p-2 text-xl relative block group" href={ React }>
                            <span>React</span>
                            <Underline/>
                        </a>
                    </li>
                    <li>
                        <a className="p-2 text-xl relative block group" href={ Zustand }>
                            <span>Zustand</span>
                            <Underline/>
                        </a>
                    </li>
                    <li>
                        <a className="p-2 text-xl relative block group" href={ Motion }>
                            <span>Motion</span>
                            <Underline/>
                        </a>
                    </li>
                    <li>
                        <a className="p-2 text-xl relative block group" href={ Next }>
                            <span>Next</span>
                            <Underline/>
                        </a>
                    </li>
                </ul>

                <ul className="hidden lg:flex gap-x-8 items-center ml-auto">
                    <li><a className="p-2 text-2xl hover:text-rose-500" href={ Bili }><RiRobot2Line/></a></li>
                    <li><a className="p-2 text-2xl hover:text-rose-500" href={ Youtube }><CiYoutube/></a></li>
                </ul>

                <div className="ml-auto md:hidden flex justify-center items-center">
                    <Menu onClick={ toggle }/>
                </div>

            </section>

            <Aside open={ open } toggle={ toggle }/>

        </nav>
    )
}


function Underline() {
    return (
        <span
            className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 duration-300 group-hover:scale-x-100"/>
    )
}