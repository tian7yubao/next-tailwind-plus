import { Counter } from "@/components/ui/theme/counter/counter";

export function CounterContainer() {
    return (
        <div className="flex gap-5 px-5 flex-col md:flex-row">
            <div className="h-72 w-full bg-linear-to-tr from-cyan-400 to-purple-600">
                <div className="size-full flex justify-center items-center flex-col gap-y-3">
                    <div className="text-white text-7xl lg:text-8xl duration-300 select-none">
                        <Counter value={ 2028 } delay={ 0 }/>
                    </div>
                    <p className="text-white text-4xl">examples</p>
                </div>
            </div>

            <div className="h-72 w-full [--lc:#000] hover:[--lc:#471a94]"
                 style={ {
                     backgroundImage: "linear-gradient(var(--lc) 1px, transparent 1px), linear-gradient(to right, var(--lc) 1px, transparent 1px)",
                     backgroundSize: "20px 20px",
                     backgroundPosition: "center",
                 } }>

            </div>
        </div>
    )
}