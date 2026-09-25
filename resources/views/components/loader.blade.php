<div
    id="db-loader"
    class="fixed inset-0 z-50 flex items-center justify-center bg-[#f3f2ed]"
>
    <div
        id="db-loader-content"
        class="flex flex-col items-center"
    >

        {{-- BUTTON --}}
        <button
            id="db-button"
            type="button"
            class="
                relative
                z-20
                w-[180px]
                cursor-default
                text-[#111]
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
                    id="db-button-depth"
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
        </button>


        {{-- HAND --}}
        <div
            id="db-hand"
            class="
                relative
                z-30
                mt-[-18px]
                w-[135px]
                text-[#111]
            "
            aria-hidden="true"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="block h-auto w-full"
            >
                <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />

                <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" />

                <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />

                <path
                    d="
                        M17 11.5
                        a1.5 1.5 0 0 1 3 0
                        v4.5

                        a6 6 0 0 1 -6 6

                        h-2
                        h.208

                        a6 6 0 0 1 -5.012 -2.7

                        l-.196 -.3

                        c-.312 -.479
                        -1.407 -2.388
                        -3.286 -5.728

                        a1.5 1.5 0 0 1 .536 -2.022

                        a1.867 1.867 0 0 1 2.28 .28

                        l1.47 1.47
                    "
                />
            </svg>
        </div>

    </div>
</div>