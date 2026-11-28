let red_flags_found = 0;

// finds and assigns the spans to variable names to be used later
let red_flag_span = document.getElementById("red-flag-counter");
let life_counter = document.getElementById("life_counter");

red_flag_span.textContent = red_flags_found;
console.log(life_counter);
life_counter.textContent = String(sessionStorage.getItem('lives'));

if (sessionStorage.getItem('lives')==0) {
    showPopup();
}


// sets variable 'image' to the image onscreen in level 1
const image = document.querySelector('.aronson img');

// .textContent in both blocks edits whats in the span that's assigned at the top 
// of this file

function showPopup() {
    const popup_div = document.getElementById('myPopup');
    popup_div.classList.remove('hide');
    popup_div.classList.add('show');
    document.getElementById('invest-button').disabled = true;
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

document.querySelectorAll('.hotspot').forEach((spot) => {
    spot.addEventListener('click', () => {
        if (sessionStorage.getItem('lives')>0) {
            if (!spot.classList.contains("clicked") 
                && spot.id !== "wrong-answer") {
                spot.classList.add('clicked');
                red_flags_found++;
                red_flag_span.textContent=red_flags_found;
                if (red_flags_found==3) {
                    if (document.title == "Game 2 Level 1") {
                        window.location.href = "game-2-level-1-complete.html";
                    }
                    else if (document.title == "Game 2 Level 3") {
                        window.location.href = "game-2-level-3-complete.html";
                    }
                    else if (document.title == "Game 2 Level 4") {
                        window.location.href = "game-2-level-4-complete.html";
                    }
                    
                }
            }
            // if the area clicked has id "wrong-answer" we should highlight it 
            // red and deduct a life. adding class 'wrong-clicked' triggers css
            // to add a red border
            else if (spot.id == "wrong-answer") {
                spot.classList.add('wrong-clicked');
                sessionStorage.setItem('lives', sessionStorage.getItem('lives')-1);
                life_counter.textContent = String(sessionStorage.getItem('lives'));
                if (sessionStorage.getItem('lives') == 0) {
                showPopup();
                }
            }
            
        }
        
    });
});
