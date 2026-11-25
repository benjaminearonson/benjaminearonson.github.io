let red_flag_count = 0;
let misses = 0;

// finds and assigns the spans to variable names to be used later
let red_flag_span = document.getElementById("red-flag-counter");
let misses_span = document.getElementById("misses-counter");

// loops through every item with the class 'hotspot'
// adds an event listener to listen for clicks
// if the thing that gets clicked already has the class 'clicked', 
// nothing happens. If it doesn't have that class, it gets added, 
// and the red flag counter goes up.
// when the red flag counter hits 3, it sends the user to level-1-complete page

document.querySelectorAll('.hotspot').forEach((spot) => {
    spot.addEventListener('click', () => {
        if (!spot.classList.contains("clicked")) {
            spot.classList.add('clicked');
            red_flag_count++;
            red_flag_span.textContent=red_flag_count;
            if (red_flag_count==3) {
                window.location.href = "game-2-level-1-complete.html";
            }
        }
    });
});

// sets variable 'image' to the image onscreen in level 1
const image = document.querySelector('.aronson img');

// .textContent in both blocks edits whats in the span that's assigned at the top 
// of this file

// a variable that stores how many lives the player has
const life_counter = document.getElementById('life_counter');

sessionStorage.setItem('lives', 3);


// listens for clicks on the 'image' variable and incremenets the 'misses' counter
// whenever the image is clicked, since it sits behind the hotspots

image.addEventListener('click', () => {
    //misses++;
    //misses_span.textContent= misses;
    sessionStorage.setItem('lives', 
        sessionStorage.getItem('lives')-1);
    console.log("you have "+ sessionStorage.getItem('lives') + " lives");
});

