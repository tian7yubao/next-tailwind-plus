import { cn } from "@/lib/tailwind";

interface MenuProps {
    enabledHover?: boolean;
    onClick: () => void;
}

export function Menu({ enabledHover, onClick }: MenuProps) {

    const enable = enabledHover;

    return (
        <button className={ cn("size-12 relative cursor-pointer", enable && "group *:duration-300") }
                onClick={ onClick }>
            <span
                className={ cn("absolute inset-0 m-auto w-3/4 h-0.5 bg-white -translate-y-2.5", enable && "group-hover:translate-y-0 group-hover:rotate-45") }/>
            <span
                className={ cn("absolute inset-0 m-auto w-3/4 h-0.5 bg-white translate-y-0", enable && "group-hover:scale-x-0 origin-left group-hover:translate-y-0 group-hover:opacity-0") }/>
            <span
                className={ cn("absolute inset-0 m-auto w-3/4 h-0.5 bg-white translate-y-2.5", enable && "group-hover:translate-y-0 group-hover:-rotate-45") }/>
        </button>
    )
}