

console.log("Welcome to Nandita's Portfolio!");

const exploreButton = document.querySelector(
    '.btn[href="#projects"]'
);

if (exploreButton) {
    exploreButton.addEventListener("click", function () {
        console.log("Exploring Nandita's projects!");
    });
}

const contactButton = document.querySelector(
    '.btn[href="#contact"]'
);

if (contactButton) {
    contactButton.addEventListener("click", function () {
        alert("Thank you for visiting my portfolio!");
    });
}
