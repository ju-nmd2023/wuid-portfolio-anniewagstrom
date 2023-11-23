// < !--The following 12 lines of code was adapted from https://www.youtube.com/watch?v=UChcWJ-yRwI Accessed: 2023-11-23 -->

const headingElement = document.getElementById("heading3");
const inputElement = document.getElementById("yourname");
const buttonElement = document.getElementById("thebutton");

buttonElement.addEventListener("click", function (event) {
    let enteredName = inputElement.value;
    headingElement.innerText = "Oh it's you! You are now invited to my website" + enteredName;

    if (enteredName !== "") {
        headingElement.innerText = "Oh it's you! You are now invited to my website " + enteredName;

    } else {
        headingElement.innerText = "*you're knocking on my door* Who's there?";

    }
});