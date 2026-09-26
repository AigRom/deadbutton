<header class="flex items-center justify-between border-b border-black/20 py-6">

    {{-- Deadbutton logo / loader landing target --}}
    <a
        id="db-header-logo"
        href="{{ route('home') }}"
        class="
            relative
            block
            w-[95px]
            text-[#111]
            opacity-0
            transition-opacity
            duration-150
            md:w-[110px]
        "
        aria-label="Deadbutton"
    >
        <svg
            viewBox="0 0 122.88 72.42"
            xmlns="http://www.w3.org/2000/svg"
            class="block w-full overflow-visible"
        >

            {{-- Bottom / depth --}}
            <path
                fill="currentColor"
                d="
                    M3.29 48
                    H119.59
                    V57.13

                    C119.59 63.75
                    114.21 69.13
                    107.59 69.13

                    H15.29

                    C8.67 69.13
                    3.29 63.75
                    3.29 57.13

                    Z
                "
            />

            {{-- Button face --}}
            <path
                fill="#f3f2ed"
                stroke="currentColor"
                stroke-width="3.29"
                d="
                    M15.29 1.645
                    H107.59

                    C114.21 1.645
                    119.59 7.02
                    119.59 13.65

                    V51.46

                    C119.59 58.08
                    114.21 63.46
                    107.59 63.46

                    H15.29

                    C8.67 63.46
                    3.29 58.08
                    3.29 51.46

                    V13.65

                    C3.29 7.02
                    8.67 1.645
                    15.29 1.645

                    Z
                "
            />

            {{-- Text --}}
            <text
                x="61.44"
                y="32"
                text-anchor="middle"
                dominant-baseline="middle"
                fill="currentColor"
                font-size="14"
                font-weight="600"
                letter-spacing="0.8"
            >
                DEADBUTTON
            </text>

        </svg>
    </a>


    <div class="flex items-center gap-8 text-[12px] uppercase tracking-[0.12em]">

        <span class="hidden text-black/65 sm:inline">
            Independent digital workshop
        </span>

        <button
            id="db-contact-open"
            type="button"
            class="
                cursor-pointer
                uppercase
                transition-opacity
                hover:opacity-50
            "
        >
            Contact
        </button>

    </div>

</header>