const privacy =
    document.getElementById('db-privacy');

const openButton =
    document.getElementById('db-privacy-open');

const closeButton =
    document.getElementById('db-privacy-close');

if (privacy && openButton && closeButton) {
    let isOpen = false;

    const openPrivacy = () => {
        if (isOpen) {
            return;
        }

        isOpen = true;

        privacy.setAttribute(
            'aria-hidden',
            'false'
        );

        document.body.classList.add(
            'db-privacy-open'
        );

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                privacy.classList.add(
                    'db-privacy-visible'
                );
            });
        });
    };

    const closePrivacy = () => {
        if (!isOpen) {
            return;
        }

        isOpen = false;

        privacy.classList.remove(
            'db-privacy-visible'
        );

        privacy.setAttribute(
            'aria-hidden',
            'true'
        );

        document.body.classList.remove(
            'db-privacy-open'
        );
    };

    openButton.addEventListener(
        'click',
        openPrivacy
    );

    closeButton.addEventListener(
        'click',
        closePrivacy
    );

    document.addEventListener(
        'keydown',
        event => {
            if (
                event.key === 'Escape' &&
                isOpen
            ) {
                closePrivacy();
            }
        }
    );
}