// we tapped into the documents and tageted all buttons on the page with the ".drum class" and then got the number of all the drums with the ".length" property and we named this code "numberOfDrumButtons.".
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// here we used "i" to monitor the numberOfDrumButtons and when it is increases and themn we added an event listener to it which is to listen for clicks.
for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);



};

// DETECTING BUTTON CLICKS.

// the handle click functiion would be triggered if any of the buttons were clicked. the "this" element helps in identifying which particular button was clicked.
function handleClick() {
    // audio.play()
    const buttonInnerHtml = this.innerHTML

    //the 'makeSound' function is a function used in releasing sound for the web app. so the makeSound functioin was passed added to the buttonInnerHtmlto release sound when any particular button was clicked.
    makeSound(buttonInnerHtml)


}

//DETECTING KEYBOARD PRESS.

// another event listener was added to listen for keyboard press.
// even is also a keyword used in getting the the particular event that occured when the key is pressed.

document.addEventListener("keypress", function(event) {

// the makeSound function was also addded to this function.
makeSound(event.key);
// the .key is a key word in keypress event listener which tells us which keyboard key was pressed.



})

// EXECUTING AND RELEASING SOUND.

function makeSound (key) {
    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play()

            break;
        case "o":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play()

            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play()

            break;
        case "f":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play()

            break;
        case "i":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play()

            break;
        case "e":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play()

            break;
        case "s":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play()

            break;


        default: console.log(buttonInnerHtml);
        
            break;
    }
}