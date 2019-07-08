var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//button press
for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {   //click--> activate event on mouse click

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}
//keyboard press
document.addEventListener("keypress", function(event) {   //keypress -->make sound on keyboard click -->function(event)-->this tells which key was pressed from entire keyboard

  makeSound(event.key);

  buttonAnimation(event.key);

}); //addEventListener()-->it is higher order function ,function(event)-->this is a call back function


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {
  
  var activeButton = document.querySelector("." + currentKey);   //here currentKey gives w,a,l....and to get their particular class we concate it with . that means .w,.a etc.

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);                                       //activate this remove function after 100milli sec it what this setTimeout does

}
