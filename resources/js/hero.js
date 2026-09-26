const heroTitle = document.getElementById('hero-title');

if (heroTitle) {
    const sleep = (ms) =>
        new Promise(resolve => setTimeout(resolve, ms));

    const reducedMotion =
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    |
    | Clone the audio so fast consecutive keystrokes can overlap naturally.
    |
    */

    const playSound = (audio) => {
        const sound = audio.cloneNode();

        sound.volume = audio.volume;

        sound.play().catch(() => {
            /*
             * Browsers may block audio before
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
    | Type one character
    |--------------------------------------------------------------------------
    */

    const typeCharacter = async (character) => {
        typedText.textContent += character;


        /*
         * Play matching keyboard sound.
         */
        if (character === ' ') {
            playSound(spaceSound);
        } else if (character !== '\n') {
            playSound(keySound);
        }


        /*
         * Natural typing speed.
         */
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
        /*
         * Prevent accidental double start.
         */
        if (started) {
            return;
        }

        started = true;


        /*
         * Accessibility / reduced motion.
         */
        if (reducedMotion) {
            typedText.textContent = finalText;
            heroTitle.classList.add('hero-typing-complete');
            return;
        }


        /*
         * Let the button begin flying first.
         */
        await sleep(220);


        /*
         * First line.
         */
        await typeText('WE MAKE');

        await sleep(120);


        /*
         * New line.
         */
        await typeCharacter('\n');


        /*
         * Start second line.
         */
        await typeText('DIGIT');


        /*
         * Intentional typo.
         */
        await typeCharacter('Q');


        /*
         * Small "oops" pause.
         */
        await sleep(300);


        /*
         * Backspace the wrong character.
         */
        await backspace();


        /*
         * Continue correctly.
         */
        await typeText('AL THINGS.');


        /*
         * Leave cursor blinking briefly.
         */
        await sleep(1000);

        heroTitle.classList.add('hero-typing-complete');
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
    |
    | Also allows loader.js to call:
    |
    | window.revealDeadbuttonHero()
    |
    */

    window.revealDeadbuttonHero = runTypewriter;
}