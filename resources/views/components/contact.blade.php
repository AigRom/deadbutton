<div
    id="db-contact"
    class="
        fixed
        inset-0
        z-[100]
        bg-[#111]
        text-[#f3f2ed]
    "
    aria-hidden="true"
>
    <div
        class="
            mx-auto
            flex
            min-h-screen
            max-w-[1600px]
            flex-col
            px-6
            md:px-10
            lg:px-14
        "
    >

        {{-- Header --}}
        <div
            class="
                flex
                items-center
                justify-between
                border-b
                border-white/20
                py-6
            "
        >
            <span
                class="
                    text-[11px]
                    uppercase
                    tracking-[0.14em]
                    text-white/50
                "
            >
                Contact
            </span>

            <button
                id="db-contact-close"
                type="button"
                class="
                    cursor-pointer
                    text-[12px]
                    uppercase
                    tracking-[0.12em]
                    transition-opacity
                    hover:opacity-50
                "
                aria-label="Close contact"
            >
                Close ×
            </button>
        </div>


        {{-- Main --}}
        <div
            class="
                flex
                flex-1
                flex-col
                justify-center
                py-16
            "
        >
            <p
                class="
                    mb-6
                    text-[20px]
                    uppercase
                    tracking-[0.14em]
                    text-white/45
                "
            >
                Have an idea?
            </p>

            <h2
                class="
                    max-w-[1200px]
                    text-[clamp(4rem,10vw,10rem)]
                    font-semibold
                    uppercase
                    leading-[0.82]
                    tracking-[-0.065em]
                "
            >
                Let's make it.
            </h2>
        </div>


        {{-- Email --}}
        <div
            class="
                border-t
                border-white/20
                py-7
            "
        >
            <a
                href="mailto:hello@deadbutton.com"
                class="
                    group
                    flex
                    items-center
                    justify-between
                    gap-6
                    text-[clamp(1.4rem,4vw,4rem)]
                    font-medium
                    tracking-[-0.04em]
                "
            >
                <span>
                    hello@deadbutton.com
                </span>

                <span
                    class="
                        text-[0.8em]
                        font-normal
                        text-white/70
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-white
                    "
                    aria-hidden="true"
                >
                    ↗
                </span>
            </a>
        </div>


        {{-- Footer --}}
        <div
            class="
                flex
                items-center
                justify-between
                border-t
                border-white/20
                py-6
                text-[10px]
                uppercase
                tracking-[0.14em]
                text-white/45
            "
        >
            <span>
                Estonia / Finland
            </span>

            <span>
                Deadbutton
            </span>
        </div>

    </div>
</div>