// set up share Share Button
// share button needs to add hide class to user class
// share button also needs to remove hide class from social class

const openShareBtn = document.getElementById("share--btn");
const closeShareBtn = document.querySelector(".user--btn");
const userBlock = document.querySelector(".user");
const socialBlock = document.querySelector(".social");

openShareBtn.addEventListener('click', () => {
    socialBlock.classList.remove("hide");
    userBlock.classList.add("hide");
});

closeShareBtn.addEventListener('click', () => {
    socialBlock.classList.add("hide");
    userBlock.classList.remove("hide");
});