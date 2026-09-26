const loader = document.getElementById('db-loader');
const button = document.getElementById('db-button');
const hand = document.getElementById('db-hand');
const headerLogo = document.getElementById('db-header-logo');

const loaderSeen =
    sessionStorage.getItem('deadbutton-loader-seen') === 'true';

const reducedMotion =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;


/*
|--------------------------------------------------------------------------
| Skip loader
|--------------------------------------------------------------------------
|
| The intro only plays once per browser tab/session.
|
*/

if (loaderSeen || reducedMotion) {
    if (loader) {
        loader.remove();
    }

    if (headerLogo) {
        headerLogo.classList.add(
            'db-header-logo-visible'
        );
    }
}


/*
|--------------------------------------------------------------------------
| Run loader
|--------------------------------------------------------------------------
*/

else if (loader && button && hand && headerLogo) {
    const sleep = (ms) =>
        new Promise(resolve => setTimeout(resolve, ms));

    let pageReady =
        document.readyState === 'complete';


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

        void loader.offsetWidth;

        loader.classList.add('db-click');

        /*
         * Hand reaches the button at roughly
         * 42% of the animation.
         */
        await sleep(160);

        playDeadbuttonSound();

        await sleep(220);

        loader.classList.remove('db-click');
    };


    /*
    |--------------------------------------------------------------------------
    | Move button into header
    |--------------------------------------------------------------------------
    */

    const moveButtonToHeader = async () => {
        hand.classList.add('db-hand-exit');

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
         * Start hero typewriter.
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
         * Remember that the intro has played.
         */
        sessionStorage.setItem(
            'deadbutton-loader-seen',
            'true'
        );


        /*
         * Remove loader.
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
    };


    /*
    |--------------------------------------------------------------------------
    | Start
    |--------------------------------------------------------------------------
    */

    runLoader();
}