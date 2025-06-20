import { cn } from "@/lib/tailwind";
import { Menu } from "@/components/ui/nav/menu";

interface AsideProps {
    open: boolean;
    toggle: () => void;
}

export function Aside({ open, toggle }: AsideProps) {
    return (
        <aside className={ cn("fixed top-0 left-0 w-full h-screen bg-black md:hidden duration-300 z-1000",
            open ? "translate-x-0" : "-translate-x-full") }>
            <div className="h-20 flex items-center justify-end px-5">
                <Menu enabledHover={ true } onClick={ toggle }/>
            </div>
            <section className="h-full flex flex-col items-center gap-y-8 py-10">

                <h2 className="text-6xl text-purple-600 font-tianqi">天气预报</h2>

                <h3 className="text-2xl text-purple-500">Take me a coffee Thanks.</h3>

                <img className="size-48 object-cover shadow-2xl shadow-purple-500/40 cursor-pointer"
                     src="/assets/images/wechat.png"
                     alt=""/>

            </section>
        </aside>
    )
}