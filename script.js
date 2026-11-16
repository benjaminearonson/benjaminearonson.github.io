const image = document.getElementById('scam-call');

    image.addEventListener('click', () => {
        // Check if the element is already fullscreen
        if (!document.fullscreenElement) {
            // Request fullscreen on the image element
            image.requestFullscreen()
                .catch(err => {
                    console.error(`Error attempting to enable fullscreen: ${err.message}`);
                });
        } else {
            // Exit fullscreen if clicked again while open
            document.exitFullscreen();
        }
    });