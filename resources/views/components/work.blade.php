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
        pt-16
        pb-28
        md:pt-20
        md:pb-40
    "
>
    @foreach ($projects as $project)
        <article>

            {{-- Project number --}}
            <div
                class="
                    mb-5
                    text-[11px]
                    uppercase
                    tracking-[0.14em]
                    text-black/45
                    md:mb-6
                "
            >
                {{ $project['number'] }}
            </div>


            {{-- Project heading --}}
            <div
                class="
                    grid
                    gap-8
                    pb-7
                    md:grid-cols-12
                    md:items-end
                "
            >
                {{-- Title --}}
                <h2
                    class="
                        text-[3.1rem]
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


                {{-- Services --}}
                <div
                    class="
                        text-[11px]
                        uppercase
                        leading-[1.7]
                        tracking-[0.12em]
                        text-black/50
                        md:col-span-2
                    "
                >
                    @foreach ($project['services'] as $service)
                        <div>
                            {{ $service }}
                        </div>
                    @endforeach
                </div>


                {{-- Year --}}
                <div
                    class="
                        text-[11px]
                        uppercase
                        tracking-[0.12em]
                        text-black/50
                        md:col-span-2
                        md:text-right
                    "
                >
                    {{ $project['year'] }}
                </div>
            </div>


            {{-- Project visual --}}
            <a
                href="{{ $project['url'] }}"
                target="_blank"
                rel="noopener noreferrer"
                class="
                    group
                    block
                    aspect-[1.45/1]
                    overflow-hidden
                    bg-black/5
                    md:aspect-[2.4/1]
                "
                aria-label="Visit {{ $project['title'] }}"
            >
                @if ($project['image'])
                    <img
                        src="{{ asset($project['image']) }}"
                        alt="{{ $project['title'] }} website"
                        loading="lazy"
                        class="
                            h-full
                            w-full
                            object-cover
                            object-left
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-[1.015]
                            md:object-center
                        "
                    >
                @else
                    <div
                        class="
                            flex
                            h-full
                            items-center
                            justify-center
                            text-[11px]
                            uppercase
                            tracking-[0.14em]
                            text-black/30
                        "
                    >
                        Project image
                    </div>
                @endif
            </a>


            {{-- Project footer --}}
            <div
                class="
                    mt-6
                    flex
                    items-center
                    justify-between
                    gap-8
                "
            >
                <span
                    class="
                        text-[11px]
                        uppercase
                        tracking-[0.14em]
                        text-black/50
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