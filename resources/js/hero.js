const heroTitle = document.getElementById('hero-title');

if (heroTitle) {
    const sleep = (ms) =>
        new Promise(resolve => setTimeout(resolve, ms));

    const reducedMotion =
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const loaderSeen =
        sessionStorage.getItem('deadbutton-loader-seen') === 'true';

    const finalText =
        'WE MAKE\nDIGITAL THINGS.';


    /*
    |--------------------------------------------------------------------------
    | Sounds
    |--------------------------------------------------------------------------
    */

    const keySound =
        new Audio('/audio/key.wav');

    const spaceSound =
        new Audio('/audio/space.wav');

    const backspaceSound =
        new Audio('/audio/backspace.wav');

    keySound.preload = 'auto';
    spaceSound.preload = 'auto';
    backspaceSound.preload = 'auto';

    keySound.volume = 0.25;
    spaceSound.volume = 0.3;
    backspaceSound.volume = 0.3;


    /*
    |--------------------------------------------------------------------------
    | Play sound
    |--------------------------------------------------------------------------
    */

    const playSound = (audio) => {
        const sound =
            audio.cloneNode();

        sound.volume =
            audio.volume;

        sound.play().catch(() => {
            /*
             * Mobile browsers may block audio
             * before the first user interaction.
             */
        });
    };


    /*
    |--------------------------------------------------------------------------
    | Build typewriter
    |--------------------------------------------------------------------------
    */

    heroTitle.innerHTML = `
        <span id="hero-typed-text"></span><span class="hero-cursor" aria-hidden="true"></span>
    `;

    const typedText =
        document.getElementById('hero-typed-text');

    let typing = false;

    let sequenceId = 0;


    /*
    |--------------------------------------------------------------------------
    | Already seen
    |--------------------------------------------------------------------------
    |
    | Normal refresh during the same browser session should not replay
    | the intro automatically.
    |
    */

    if (loaderSeen || reducedMotion) {
        typedText.textContent =
            finalText;

        heroTitle.classList.add(
            'hero-typing-complete'
        );
    }


    /*
    |--------------------------------------------------------------------------
    | Type one character
    |--------------------------------------------------------------------------
    */

    const typeCharacter = async (
        character,
        currentSequence
    ) => {
        /*
         * Stop an old sequence if the hero
         * has been reset in the meantime.
         */
        if (currentSequence !== sequenceId) {
            return false;
        }

        typedText.textContent +=
            character;

        if (character === ' ') {
            playSound(spaceSound);
        } else if (character !== '\n') {
            playSound(keySound);
        }

        const delay =
            65 + Math.random() * 45;

        await sleep(delay);

        return (
            currentSequence === sequenceId
        );
    };


    /*
    |--------------------------------------------------------------------------
    | Type text
    |--------------------------------------------------------------------------
    */

    const typeText = async (
        text,
        currentSequence
    ) => {
        for (const character of text) {
            const active =
                await typeCharacter(
                    character,
                    currentSequence
                );

            if (!active) {
                return false;
            }

            if (character === ' ') {
                await sleep(35);
            }
        }

        return true;
    };


    /*
    |--------------------------------------------------------------------------
    | Backspace
    |--------------------------------------------------------------------------
    */

    const backspace = async (
        currentSequence
    ) => {
        if (currentSequence !== sequenceId) {
            return false;
        }

        typedText.textContent =
            typedText.textContent.slice(
                0,
                -1
            );

        playSound(
            backspaceSound
        );

        await sleep(80);

        return (
            currentSequence === sequenceId
        );
    };


    /*
    |--------------------------------------------------------------------------
    | Reset hero
    |--------------------------------------------------------------------------
    */

    const resetHero = () => {
        /*
         * Incrementing this immediately
         * invalidates an old typing sequence.
         */
        sequenceId++;

        typing = false;

        typedText.textContent = '';

        heroTitle.classList.remove(
            'hero-typing-complete'
        );
    };


    /*
    |--------------------------------------------------------------------------
    | Main sequence
    |--------------------------------------------------------------------------
    */

    const runTypewriter = async () => {
        if (reducedMotion) {
            typedText.textContent =
                finalText;

            heroTitle.classList.add(
                'hero-typing-complete'
            );

            return;
        }

        if (typing) {
            return;
        }

        typing = true;

        /*
         * Each run receives its own ID.
         */
        const currentSequence =
            ++sequenceId;

        /*
         * Always start from an empty hero.
         */
        typedText.textContent = '';

        heroTitle.classList.remove(
            'hero-typing-complete'
        );


        /*
         * Small pause after loader starts
         * revealing the page.
         */
        await sleep(220);

        if (
            currentSequence !== sequenceId
        ) {
            return;
        }


        /*
         * WE MAKE
         */
        if (
            !await typeText(
                'WE MAKE',
                currentSequence
            )
        ) {
            return;
        }

        await sleep(120);


        /*
         * Line break
         */
        if (
            !await typeCharacter(
                '\n',
                currentSequence
            )
        ) {
            return;
        }


        /*
         * Intentional typo
         */
        if (
            !await typeText(
                'DIGIT',
                currentSequence
            )
        ) {
            return;
        }

        if (
            !await typeCharacter(
                'Q',
                currentSequence
            )
        ) {
            return;
        }

        await sleep(300);


        /*
         * Correct typo
         */
        if (
            !await backspace(
                currentSequence
            )
        ) {
            return;
        }


        /*
         * Finish sentence
         */
        if (
            !await typeText(
                'AL THINGS.',
                currentSequence
            )
        ) {
            return;
        }

        await sleep(1000);


        /*
         * Complete.
         */
        if (
            currentSequence === sequenceId
        ) {
            heroTitle.classList.add(
                'hero-typing-complete'
            );

            typing = false;
        }
    };


    /*
    |--------------------------------------------------------------------------
    | Loader trigger
    |--------------------------------------------------------------------------
    |
    | Do NOT use { once: true } here.
    | The loader may now be replayed from the header logo.
    |
    */

    window.addEventListener(
        'deadbutton:loader-exit',
        runTypewriter
    );


    /*
    |--------------------------------------------------------------------------
    | Hero reset trigger
    |--------------------------------------------------------------------------
    |
    | Fired when the header logo is clicked,
    | before the loader starts again.
    |
    */

    window.addEventListener(
        'deadbutton:hero-reset',
        resetHero
    );


    /*
    |--------------------------------------------------------------------------
    | Direct trigger fallback
    |--------------------------------------------------------------------------
    */

    window.revealDeadbuttonHero =
        runTypewriter;
}