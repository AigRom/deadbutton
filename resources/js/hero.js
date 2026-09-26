const heroTitle = document.getElementById('hero-title');

if (heroTitle) {
    const sleep = (ms) =>
        new Promise(resolve => setTimeout(resolve, ms));

    const reducedMotion =
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const loaderSeen =
        sessionStorage.getItem('deadbutton-loader-seen') === 'true';

    const finalText = 'WE MAKE\nDIGITAL THINGS.';


    /*
    |--------------------------------------------------------------------------
    | Sounds
    |--------------------------------------------------------------------------
    */

    const keySound = new Audio('/audio/key.wav');
    const spaceSound = new Audio('/audio/space.wav');
    const backspaceSound = new Audio('/audio/backspace.wav');

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
        const sound = audio.cloneNode();

        sound.volume = audio.volume;

        sound.play().catch(() => {
            /*
             * Browser may block audio before
             * the first user interaction.
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

    let started = false;


    /*
    |--------------------------------------------------------------------------
    | Already seen
    |--------------------------------------------------------------------------
    |
    | If the intro has already played during this browser session,
    | show the finished hero immediately.
    |
    */

    if (loaderSeen || reducedMotion) {
        started = true;

        typedText.textContent = finalText;

        heroTitle.classList.add(
            'hero-typing-complete'
        );
    }


    /*
    |--------------------------------------------------------------------------
    | Type one character
    |--------------------------------------------------------------------------
    */

    const typeCharacter = async (character) => {
        typedText.textContent += character;

        if (character === ' ') {
            playSound(spaceSound);
        } else if (character !== '\n') {
            playSound(keySound);
        }

        const delay =
            65 + Math.random() * 45;

        await sleep(delay);
    };


    /*
    |--------------------------------------------------------------------------
    | Type text
    |--------------------------------------------------------------------------
    */

    const typeText = async (text) => {
        for (const character of text) {
            await typeCharacter(character);

            if (character === ' ') {
                await sleep(35);
            }
        }
    };


    /*
    |--------------------------------------------------------------------------
    | Backspace
    |--------------------------------------------------------------------------
    */

    const backspace = async () => {
        typedText.textContent =
            typedText.textContent.slice(0, -1);

        playSound(backspaceSound);

        await sleep(80);
    };


    /*
    |--------------------------------------------------------------------------
    | Main sequence
    |--------------------------------------------------------------------------
    */

    const runTypewriter = async () => {
        if (started) {
            return;
        }

        started = true;

        await sleep(220);

        await typeText('WE MAKE');

        await sleep(120);

        await typeCharacter('\n');

        await typeText('DIGIT');

        await typeCharacter('Q');

        await sleep(300);

        await backspace();

        await typeText('AL THINGS.');

        await sleep(1000);

        heroTitle.classList.add(
            'hero-typing-complete'
        );
    };


    /*
    |--------------------------------------------------------------------------
    | Loader trigger
    |--------------------------------------------------------------------------
    */

    window.addEventListener(
        'deadbutton:loader-exit',
        runTypewriter,
        { once: true }
    );


    /*
    |--------------------------------------------------------------------------
    | Direct trigger fallback
    |--------------------------------------------------------------------------
    */

    window.revealDeadbuttonHero =
        runTypewriter;
}