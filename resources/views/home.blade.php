<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Deadbutton — Independent Digital Studio</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>

    <x-loader />

    <main class="bg-[#f3f2ed] text-[#111]">

        {{-- First screen --}}
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
            <x-header />

            <x-hero />
        </div>

    </main>
    <x-contact />

</body>
</html>