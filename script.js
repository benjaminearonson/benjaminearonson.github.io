const images = document.querySelectorAll('.lesson-image, .about-box img');
    images.forEach(image => {
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
    });});

let red_flag_count = 0;
let red_flag_span = document.getElementById("red-flag-counter");

document.querySelectorAll('.hotspot').forEach((spot) => {
    spot.addEventListener('click', () => {
        if (!spot.classList.contains("clicked")) {
            spot.classList.add('clicked');
            red_flag_count++;
            red_flag_span.textContent=red_flag_count;
        }
    });
});
