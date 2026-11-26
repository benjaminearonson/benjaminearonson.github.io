let red_flags_remaining = 3;

// finds and assigns the spans to variable names to be used later
let red_flag_span = document.getElementById("red-flag-counter");



// sets variable 'image' to the image onscreen in level 1
const image = document.querySelector('.aronson img');

// .textContent in both blocks edits whats in the span that's assigned at the top 
// of this file

function showPopup() {
    const popup_div = document.getElementById('myPopup');
    popup_div.classList.remove('hide');
    popup_div.classList.add('show');
}
//listens for when the image is clicked, and when it is,
// it updates the value of 'lives' in sessionStorage to decrease
// by 1
image.addEventListener('click', () => {
    if (sessionStorage.getItem('lives')>0) {sessionStorage.setItem('lives', 
        sessionStorage.getItem('lives')-1);
    life_counter.textContent = String(sessionStorage.getItem('lives')); }
    if (sessionStorage.getItem('lives') == 0) {
        showPopup();
    }
});

// loops through every item with the class 'hotspot'
// adds an event listener to listen for clicks
// if the thing that gets clicked already has the class 'clicked', 
// nothing happens. If it doesn't have that class, it gets added, 
// and the red flag counter goes up.
// when the red flag counter hits 3, it sends the user to level-1-complete page

document.querySelectorAll('.hotspot').forEach((spot) => {
    spot.addEventListener('click', () => {
        if (sessionStorage.getItem('lives')>0) {
            if (!spot.classList.contains("clicked")) {
                spot.classList.add('clicked');
                red_flags_remaining--;
                red_flag_span.textContent=red_flags_remaining;
                if (red_flags_remaining==0) {
                    window.location.href = "game-2-level-1-complete.html";
                }
            }
        }
    });
});