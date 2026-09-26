<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Deadbutton — Independent Digital Workshop</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>

    <x-loader />

    <main class="bg-[#f3f2ed] text-[#111]">

        <div
            class="
                mx-auto
                max-w-[1600px]
                px-6
                md:px-10
                lg:px-14
            "
        >

            {{-- First screen --}}
            <div
                class="
                    flex
                    min-h-screen
                    flex-col
                "
            >
                <x-header />

                <x-hero />
            </div>


            {{-- Selected work --}}
            <x-work />


            {{-- Footer --}}
            <x-footer />

        </div>

    </main>

    <x-contact />

</body>
</html>