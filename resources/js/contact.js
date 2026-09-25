const contact = document.getElementById('db-contact');
const openButton = document.getElementById('db-contact-open');
const closeButton = document.getElementById('db-contact-close');

if (contact && openButton && closeButton) {
    let isOpen = false;

    const openContact = () => {
        if (isOpen) {
            return;
        }

        isOpen = true;

        contact.classList.remove('invisible');

        contact.setAttribute(
            'aria-hidden',
            'false'
        );

        document.body.classList.add(
            'db-contact-open'
        );

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                contact.classList.add(
                    'db-contact-visible'
                );
            });
        });
    };


    const closeContact = () => {
        if (!isOpen) {
            return;
        }

        isOpen = false;

        contact.classList.remove(
            'db-contact-visible'
        );

        contact.setAttribute(
            'aria-hidden',
            'true'
        );

        document.body.classList.remove(
            'db-contact-open'
        );

        /*
         * Wait until the closing animation
         * has finished before hiding it.
         */
        window.setTimeout(() => {
            if (!isOpen) {
                contact.classList.add(
                    'invisible'
                );
            }
        }, 750);
    };


    openButton.addEventListener(
        'click',
        openContact
    );

    closeButton.addEventListener(
        'click',
        closeContact
    );


    /*
    |--------------------------------------------------------------------------
    | Escape closes contact
    |--------------------------------------------------------------------------
    */

    document.addEventListener(
        'keydown',
        event => {
            if (
                event.key === 'Escape' &&
                isOpen
            ) {
                closeContact();
            }
        }
    );
}