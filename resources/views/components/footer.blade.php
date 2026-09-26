<footer
    class="
        mt-24
        border-t
        border-black/20
        pb-8
        pt-6
        md:mt-32
    "
>
    <div
        class="
            flex
            flex-col
            gap-16
            md:gap-24
        "
    >
        {{-- Status --}}
        <div
            class="
                flex
                items-center
                gap-2
                text-[11px]
                uppercase
                tracking-[0.14em]
            "
        >
            <span
                class="
                    h-2
                    w-2
                    rounded-full
                    bg-green-500
                "
                aria-hidden="true"
            ></span>

            <span>
                Deadbutton is alive
            </span>
        </div>


        {{-- Bottom --}}
        <div
            class="
                grid
                grid-cols-3
                items-end
                gap-4
                text-[10px]
                uppercase
                tracking-[0.14em]
                text-black/65
            "
        >
            <span>
                Estonia / Finland
            </span>

            <button
                id="db-privacy-open"
                type="button"
                class="
                    cursor-pointer
                    justify-self-center
                    uppercase
                    transition-colors
                    duration-200
                    hover:text-black
                "
            >
                Privacy
            </button>

            <span class="justify-self-end">
                © {{ date('Y') }} DBTN
            </span>
        </div>
    </div>
</footer>