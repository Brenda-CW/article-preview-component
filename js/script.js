// set up share Share Button
// share button needs to add hide class to user class
// share button also needs to remove hide class from social class

const openShareBtn = document.getElementById("share--btn");
const closeShareBtn = document.querySelector(".user-btn");
const userBlock = document.querySelector(".user");
const socialBlock = document.querySelector(".social--bar");

function share() {
    console.log({openShareBtn});
    console.log("share button clicked!")
    userBlock.classList.add("hide");
    socialBlock.classList.remove("hide");
}

function user() {
    socialBlock.classList.add("hide");
    userBlock.classList.remove("hide");
}

openShareBtn.addEventListener('click', share());