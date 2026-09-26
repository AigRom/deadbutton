@php
    $projects = [
        [
            'number' => '01',
            'title' => 'EHMERA OY',
            'type' => 'Company website',
            'year' => '2026',

            'services' => [
                'Web design',
                'Development',
            ],

            'url' => 'https://ehmera.fi',

            'image' => 'images/projects/ehmera.webp',
        ],
    ];
@endphp

<section
    id="work"
    class="
        border-t
        border-black/20
        pt-12
        pb-20
        md:pt-20
        md:pb-32
    "
>
    @foreach ($projects as $project)
        <article>

            {{-- Project number --}}
            <div
                class="
                    mb-4
                    text-[11px]
                    uppercase
                    tracking-[0.14em]
                    text-black/65
                    md:mb-6
                "
            >
                {{ $project['number'] }}
            </div>

            {{-- Project heading --}}
            <div
                class="
                    grid
                    gap-5
                    pb-6
                    md:grid-cols-12
                    md:items-end
                    md:gap-8
                    md:pb-7
                "
            >
                <h2
                    class="
                        text-[clamp(3.2rem,14vw,6.5rem)]
                        font-medium
                        uppercase
                        leading-[0.82]
                        tracking-[-0.06em]
                        md:col-span-8
                        md:text-[clamp(3.5rem,6vw,6.5rem)]
                    "
                >
                    {{ $project['title'] }}
                </h2>

                <div
                    class="
                        text-[11px]
                        uppercase
                        leading-[1.6]
                        tracking-[0.12em]
                        text-black/65
                        md:col-span-2
                    "
                >
                    @foreach ($project['services'] as $service)
                        <div>
                            {{ $service }}
                        </div>
                    @endforeach
                </div>

                <div
                    class="
                        text-[11px]
                        uppercase
                        tracking-[0.12em]
                        text-black/65
                        md:col-span-2
                        md:text-right
                    "
                >
                    {{ $project['year'] }}
                </div>
            </div>

            {{-- Project image --}}
            <a
                href="{{ $project['url'] }}"
                target="_blank"
                rel="noopener noreferrer"
                class="
                    group
                    block
                    overflow-hidden
                    bg-black/5
                "
                aria-label="Visit {{ $project['title'] }}"
            >
                @if ($project['image'])
                    <img
                        src="{{ asset($project['image']) }}"
                        alt="{{ $project['title'] }} website"
                        loading="lazy"
                        class="
                            block
                            h-auto
                            w-full
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-[1.015]
                        "
                    >
                @else
                    <div
                        class="
                            flex
                            aspect-[2.4/1]
                            items-center
                            justify-center
                            text-[11px]
                            uppercase
                            tracking-[0.14em]
                            text-black/65
                        "
                    >
                        Project image
                    </div>
                @endif
            </a>

            {{-- Project footer --}}
            <div
                class="
                    mt-5
                    flex
                    items-center
                    justify-between
                    gap-8
                    md:mt-6
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
                    {{ $project['type'] }}
                </span>

                <a
                    href="{{ $project['url'] }}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="
                        group
                        flex
                        items-center
                        gap-3
                        text-[11px]
                        uppercase
                        tracking-[0.14em]
                    "
                >
                    Visit project

                    <span
                        class="
                            transition-transform
                            duration-300
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                        "
                        aria-hidden="true"
                    >
                        ↗
                    </span>
                </a>
            </div>

        </article>
    @endforeach
</section>