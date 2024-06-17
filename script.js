// Declare variables below to save the different divs of your story.
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let buttons = document.querySelector(".buttons");
let storyOpening = document.querySelector(".story-opening");
let optionOneEndBtn = document.querySelector(".option-one-end-btn");
let optionTwoEndBtn = document.querySelector(".option-two-end-btn");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

optionOne.addEventListener('click', function() {
    storyOpening.style.display = 'none';
    buttons.style.display = 'none';
    optionOneScreen.style.display = 'block';
});

optionTwo.addEventListener('click', function() {
    storyOpening.style.display = 'none';
    buttons.style.display = 'none';
    optionTwoScreen.style.display = 'block';
});

optionOneEndBtn.addEventListener('click', function() {
    optionOneScreen.style.display = 'none';
    optionOneEnd.style.display = 'block';
});

optionTwoEndBtn.addEventListener('click', function() {
    optionTwoScreen.style.display = 'none';
    optionTwoEnd.style.display = 'block';
});
// INSERT_VARIABLE.addEventListener('click', function(){

// });