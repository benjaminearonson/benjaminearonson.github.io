let red_flag_count = 0;
let misses = 0;
let red_flag_span = document.getElementById("red-flag-counter");
let misses_span = document.getElementById("misses-counter");

document.querySelectorAll('.hotspot').forEach((spot) => {
    spot.addEventListener('click', () => {
        if (!spot.classList.contains("clicked")) {
            spot.classList.add('clicked');
            red_flag_count++;
            red_flag_span.textContent=red_flag_count;
        }
    });
});

const image = document.querySelectorAll('.level-1 img');
image.addEventListener('click', () => {
    misses++;
    misses_span.textContent= misses;
})

if (red_flag_count==3) {
    
}