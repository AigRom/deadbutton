<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Deadbutton — Independent Digital Workshop</title>

    <meta
        name="description"
        content="Deadbutton is an independent digital workshop creating software, websites, products and experiments."
    >

    <meta name="theme-color" content="#f3f2ed">


    {{-- Open Graph --}}
    <meta
        property="og:title"
        content="Deadbutton — Independent Digital Workshop"
    >

    <meta
        property="og:description"
        content="Software, web, products and experiments."
    >

    <meta
        property="og:type"
        content="website"
    >

    <meta
        property="og:site_name"
        content="Deadbutton"
    >


    {{-- Favicon --}}
    <link
        rel="icon"
        href="{{ asset('favicon.svg') }}"
        type="image/svg+xml"
    >


    @vite([
        'resources/css/app.css',
        'resources/js/app.js'
    ])
</head>

<body>

    <x-loader />

    <main class="bg-[#f3f2ed] text-[#111]">

        {{-- First screen --}}
        <div
            class="
                mx-auto
                max-w-[1600px]
                px-6
                md:px-10
                lg:px-14
            "
        >
            <div class="flex min-h-screen flex-col">
                <x-header />
                <x-hero />
            </div>

            <x-work />

            <x-footer />
        </div>

    </main>

    <x-contact />
    <x-privacy />

</body>
</html>