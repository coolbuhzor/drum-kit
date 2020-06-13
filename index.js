// var audio = new Audio('sounds/tom-1.mp3')
var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);


};

function handleClick() {
    // audio.play()
    const buttonInnerHtml = this.innerHTML
    switch (buttonInnerHtml) {
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
console.log(numberOfDrumButtons);