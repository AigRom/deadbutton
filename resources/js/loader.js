const loader = document.getElementById('db-loader');
const button = document.getElementById('db-button');
const hand = document.getElementById('db-hand');
const headerLogo = document.getElementById('db-header-logo');

if (loader && button && hand && headerLogo) {
    const sleep = (ms) =>
        new Promise(resolve => setTimeout(resolve, ms));

    let pageReady = document.readyState === 'complete';


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
    | Button click
    |--------------------------------------------------------------------------
    */

    const clickButton = async () => {
        loader.classList.remove('db-click');

        /*
         * Force reflow so the click animation can
         * restart every time.
         */
        void loader.offsetWidth;

        loader.classList.add('db-click');


        /*
         * The hand reaches the button at roughly
         * 42% of the 380ms animation.
         */
        await sleep(160);

        playDeadbuttonSound();


        /*
         * Finish the remaining click animation.
         */
        await sleep(220);

        loader.classList.remove('db-click');
    };


    /*
    |--------------------------------------------------------------------------
    | Move button into header
    |--------------------------------------------------------------------------
    */

    const moveButtonToHeader = async () => {

        /*
         * Hand disappears first.
         */
        hand.classList.add('db-hand-exit');

        await sleep(220);


        /*
         * Measure the loader button and its
         * final position in the header.
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


        /*
         * Scale the loader button to exactly
         * match the header button width.
         */
        const scale =
            targetRect.width / buttonRect.width;


        /*
         * Prepare the flying button.
         */
        button.style.transformOrigin =
            'center center';

        button.style.transition = `
            transform 2200ms cubic-bezier(0.16, 1, 0.3, 1),
            opacity 120ms ease
        `;


        /*
         * Reveal the page behind the loader.
         */
        loader.classList.add(
            'db-loader-reveal'
        );


        /*
         * Start the hero typewriter.
         */
        window.dispatchEvent(
            new CustomEvent(
                'deadbutton:loader-exit'
            )
        );


        /*
         * Start the flight on the next rendered frame.
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
         * Wait until the flying button reaches
         * the header.
         */
        await sleep(2200);


        /*
         * Reveal the identical real header button.
         */
        headerLogo.classList.add(
            'db-header-logo-visible'
        );


        /*
         * Hide the travelling copy.
         */
        button.style.opacity = '0';

        await sleep(120);


        /*
         * Loader is no longer needed.
         */
        loader.remove();
    };


    /*
    |--------------------------------------------------------------------------
    | Loader sequence
    |--------------------------------------------------------------------------
    */

    const runLoader = async () => {
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
         * If the page is still loading,
         * keep pressing the button.
         */
        while (!pageReady) {
            await sleep(100);

            await clickButton();
        }


        /*
         * Keep the intro visible for at least
         * the minimum duration.
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
         * Hand disappears and the button
         * travels into the header.
         */
        await moveButtonToHeader();
    };


    /*
    |--------------------------------------------------------------------------
    | Start
    |--------------------------------------------------------------------------
    */

    runLoader();
}