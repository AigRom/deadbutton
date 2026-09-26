<div
    id="db-privacy"
    class="
        fixed
        inset-0
        z-[110]
        bg-[#f3f2ed]
        text-[#111]
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
                border-black/20
                py-6
            "
        >
            <span
                class="
                    text-[11px]
                    uppercase
                    tracking-[0.14em]
                    text-black/65
                "
            >
                Privacy
            </span>

            <button
                id="db-privacy-close"
                type="button"
                class="
                    cursor-pointer
                    text-[12px]
                    uppercase
                    tracking-[0.12em]
                    transition-opacity
                    hover:opacity-50
                "
                aria-label="Close privacy"
            >
                Close ×
            </button>
        </div>

        {{-- Content --}}
        <div
            class="
                flex
                flex-1
                flex-col
                py-12
                md:py-16
            "
        >
            {{-- Title --}}
            <div
                class="
                    flex
                    flex-1
                    items-center
                    py-8
                    md:py-12
                "
            >
                <h2
                    class="
                        text-[clamp(4rem,10vw,10rem)]
                        font-semibold
                        uppercase
                        leading-[0.82]
                        tracking-[-0.065em]
                    "
                >
                    Privacy.
                </h2>
            </div>

            {{-- Privacy information --}}
            <div
                class="
                    grid
                    gap-10
                    pt-10
                    md:grid-cols-12
                    md:gap-8
                "
            >
                <div
                    class="
                        md:col-span-4
                    "
                >
                    <p
                        class="
                            max-w-[360px]
                            text-[18px]
                            leading-[1.5]
                            tracking-[-0.015em]
                        "
                    >
                        We keep this site simple.
                        That includes how it handles
                        your data.
                    </p>
                </div>

                <div
                    class="
                        md:col-span-7
                        md:col-start-6
                    "
                >
                    {{-- Cookies --}}
                    <div
                        class="
                            grid
                            gap-3
                            border-t
                            border-black/20
                            py-5
                            md:grid-cols-3
                            md:gap-8
                        "
                    >
                        <h3
                            class="
                                text-[11px]
                                uppercase
                                tracking-[0.14em]
                                text-black/65
                            "
                        >
                            Cookies
                        </h3>

                        <p
                            class="
                                text-[15px]
                                leading-[1.6]
                                md:col-span-2
                            "
                        >
                            This site does not use cookies
                            for tracking, analytics or advertising.
                        </p>
                    </div>

                    {{-- Analytics --}}
                    <div
                        class="
                            grid
                            gap-3
                            border-t
                            border-black/20
                            py-5
                            md:grid-cols-3
                            md:gap-8
                        "
                    >
                        <h3
                            class="
                                text-[11px]
                                uppercase
                                tracking-[0.14em]
                                text-black/65
                            "
                        >
                            Analytics
                        </h3>

                        <p
                            class="
                                text-[15px]
                                leading-[1.6]
                                md:col-span-2
                            "
                        >
                            This site does not use analytics
                            or advertising trackers.
                        </p>
                    </div>

                    {{-- Contact --}}
                    <div
                        class="
                            grid
                            gap-3
                            border-y
                            border-black/20
                            py-5
                            md:grid-cols-3
                            md:gap-8
                        "
                    >
                        <h3
                            class="
                                text-[11px]
                                uppercase
                                tracking-[0.14em]
                                text-black/65
                            "
                        >
                            Contact
                        </h3>

                        <div
                            class="
                                text-[15px]
                                leading-[1.6]
                                md:col-span-2
                            "
                        >
                            <p>
                                If you contact us by email,
                                the information you provide is used
                                only to respond to your message.
                            </p>

                            <a
                                href="mailto:hello@deadbutton.com"
                                class="
                                    mt-3
                                    inline-block
                                    border-b
                                    border-black/30
                                    transition-opacity
                                    hover:opacity-50
                                "
                            >
                                hello@deadbutton.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {{-- Footer --}}
        <div
            class="
                flex
                items-center
                justify-between
                border-t
                border-black/20
                py-6
                text-[10px]
                uppercase
                tracking-[0.14em]
                text-black/65
            "
        >
            <span>
                Estonia / Finland
            </span>

            <span>
                © {{ date('Y') }} DBTN
            </span>
        </div>
    </div>
</div>