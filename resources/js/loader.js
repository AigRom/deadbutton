const loader = document.getElementById('db-loader');
const button = document.getElementById('db-button');
const hand = document.getElementById('db-hand');
const headerLogo = document.getElementById('db-header-logo');

const reducedMotion =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const loaderSeen =
    sessionStorage.getItem('deadbutton-loader-seen') === 'true';

const sleep = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

let pageReady =
    document.readyState === 'complete';

let loaderRunning = false;


/*
|--------------------------------------------------------------------------
| Sound
|--------------------------------------------------------------------------
*/

const deadbuttonSound =
    new Audio('/audio/deadbutton.wav');

deadbuttonSound.preload = 'auto';
deadbuttonSound.volume = 0.4;


/*
|--------------------------------------------------------------------------
| Unlock audio on first user interaction
|--------------------------------------------------------------------------
|
| Mobile browsers, especially Android Chrome, may block audio until the
| user has interacted with the page.
|
*/

let audioUnlocked = false;

const unlockAudio = () => {
    if (audioUnlocked) {
        return;
    }

    deadbuttonSound
        .play()
        .then(() => {
            deadbuttonSound.pause();
            deadbuttonSound.currentTime = 0;

            audioUnlocked = true;
        })
        .catch(() => {
            /*
             * Audio is still blocked.
             */
        });
};

document.addEventListener(
    'pointerdown',
    unlockAudio,
    { once: true }
);


/*
|--------------------------------------------------------------------------
| Play sound
|--------------------------------------------------------------------------
*/

const playDeadbuttonSound = () => {
    const sound =
        deadbuttonSound.cloneNode();

    sound.volume =
        deadbuttonSound.volume;

    sound.play().catch(() => {
        /*
         * Browser may block audio before
         * the first user interaction.
         */
    });
};


/*
|--------------------------------------------------------------------------
| Page ready
|--------------------------------------------------------------------------
*/

if (!pageReady) {
    window.addEventListener(
        'load',
        () => {
            pageReady = true;
        },
        { once: true }
    );
}


/*
|--------------------------------------------------------------------------
| Reset loader
|--------------------------------------------------------------------------
*/

const resetLoader = () => {
    if (!loader || !button || !hand) {
        return;
    }

    /*
     * Restore loader.
     */
    loader.style.display = '';

    loader.classList.remove(
        'db-click',
        'db-loader-reveal'
    );


    /*
     * Restore hand.
     */
    hand.classList.remove(
        'db-hand-exit'
    );


    /*
     * Restore button.
     */
    button.style.transition = 'none';
    button.style.transform = 'none';
    button.style.opacity = '1';
    button.style.transformOrigin = 'center center';


    /*
     * Force browser to apply reset
     * before animations start again.
     */
    void loader.offsetWidth;


    /*
     * Hide real header logo while
     * animated button flies toward it.
     */
    if (headerLogo) {
        headerLogo.classList.remove(
            'db-header-logo-visible'
        );
    }
};


/*
|--------------------------------------------------------------------------
| Button click
|--------------------------------------------------------------------------
*/

const clickButton = async () => {
    loader.classList.remove(
        'db-click'
    );

    void loader.offsetWidth;

    loader.classList.add(
        'db-click'
    );


    /*
     * Hand reaches the button at roughly
     * 42% of the animation.
     */
    await sleep(160);

    playDeadbuttonSound();

    await sleep(220);

    loader.classList.remove(
        'db-click'
    );
};


/*
|--------------------------------------------------------------------------
| Move button into header
|--------------------------------------------------------------------------
*/

const moveButtonToHeader = async () => {
    hand.classList.add(
        'db-hand-exit'
    );

    await sleep(220);


    /*
     * Measure start and target.
     */
    const buttonRect =
        button.getBoundingClientRect();

    const targetRect =
        headerLogo.getBoundingClientRect();


    /*
     * Calculate centers.
     */
    const buttonCenterX =
        buttonRect.left + buttonRect.width / 2;

    const buttonCenterY =
        buttonRect.top + buttonRect.height / 2;

    const targetCenterX =
        targetRect.left + targetRect.width / 2;

    const targetCenterY =
        targetRect.top + targetRect.height / 2;


    /*
     * Calculate movement.
     */
    const translateX =
        targetCenterX - buttonCenterX;

    const translateY =
        targetCenterY - buttonCenterY;

    const scale =
        targetRect.width / buttonRect.width;


    /*
     * Prepare flight.
     */
    button.style.transformOrigin =
        'center center';

    button.style.transition = `
        transform 2200ms cubic-bezier(0.16, 1, 0.3, 1),
        opacity 120ms ease
    `;


    /*
     * Reveal page.
     */
    loader.classList.add(
        'db-loader-reveal'
    );


    /*
     * Start / restart hero typewriter.
     */
    window.dispatchEvent(
        new CustomEvent(
            'deadbutton:loader-exit'
        )
    );


    /*
     * Start flight.
     */
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            button.style.transform = `
                translate(
                    ${translateX}px,
                    ${translateY}px
                )
                scale(${scale})
            `;
        });
    });


    /*
     * Wait for flight.
     */
    await sleep(2200);


    /*
     * Reveal real header logo.
     */
    headerLogo.classList.add(
        'db-header-logo-visible'
    );

    button.style.opacity = '0';

    await sleep(120);


    /*
     * Remember that intro has played.
     */
    sessionStorage.setItem(
        'deadbutton-loader-seen',
        'true'
    );


    /*
     * Hide loader instead of removing it.
     *
     * This allows us to replay it later
     * when the header logo is clicked.
     */
    loader.style.display = 'none';
};


/*
|--------------------------------------------------------------------------
| Loader sequence
|--------------------------------------------------------------------------
*/

const runLoader = async () => {
    if (
        loaderRunning ||
        !loader ||
        !button ||
        !hand ||
        !headerLogo
    ) {
        return;
    }

    loaderRunning = true;

    resetLoader();

    const startedAt =
        performance.now();

    const minimumVisibleTime = 650;


    /*
     * First click.
     */
    await sleep(80);

    await clickButton();


    /*
     * Second click.
     */
    await sleep(60);

    await clickButton();


    /*
     * Continue while page loads.
     */
    while (!pageReady) {
        await sleep(100);

        await clickButton();
    }


    /*
     * Minimum intro duration.
     */
    const elapsed =
        performance.now() - startedAt;

    if (elapsed < minimumVisibleTime) {
        await sleep(
            minimumVisibleTime - elapsed
        );
    }


    /*
     * Final successful click.
     */
    await clickButton();


    /*
     * Fly to header.
     */
    await moveButtonToHeader();

    loaderRunning = false;
};


/*
|--------------------------------------------------------------------------
| Initial page visit
|--------------------------------------------------------------------------
*/

if (
    loader &&
    button &&
    hand &&
    headerLogo
) {
    if (
        loaderSeen ||
        reducedMotion
    ) {
        loader.style.display = 'none';

        headerLogo.classList.add(
            'db-header-logo-visible'
        );
    } else {
        runLoader();
    }
}


/*
|--------------------------------------------------------------------------
| Header logo click
|--------------------------------------------------------------------------
|
| On this one-page site the logo acts as a replay/home button.
| Clicking it scrolls to the top and replays the full Deadbutton intro.
|
*/

if (headerLogo) {
    headerLogo.addEventListener(
        'click',
        async (event) => {
            event.preventDefault();

            if (loaderRunning) {
                return;
            }


            /*
             * This interaction also gives mobile
             * browsers permission to play audio.
             */
            unlockAudio();


            /*
             * Return page to the top.
             */
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });


            /*
             * Tell hero to reset before
             * loader starts.
             */
            window.dispatchEvent(
                new CustomEvent(
                    'deadbutton:hero-reset'
                )
            );


            /*
             * Replay intro.
             */
            await runLoader();
        }
    );
}