const menuButton = document.getElementById("hamburgerMenu");
const menu = document.getElementById("openMenu");
const galleryContainer = document.getElementById("galleryContainer");
const images = document.querySelectorAll('.galleryImage');
const leftButton = document.getElementById("leftArrowHolder");
const rightButton = document.getElementById("rightArrowHolder");

//Zdroj: https://chat.openai.com/share/30b7b9b5-54de-4805-8061-10fc83452e30
leftButton.addEventListener("click", function () {
    const lastImage = galleryContainer.lastElementChild;
    galleryContainer.insertBefore(lastImage, galleryContainer.firstElementChild);
});

rightButton.addEventListener("click", function () {
    const firstImage = galleryContainer.firstElementChild;
    galleryContainer.appendChild(firstImage);
});

menuButton.addEventListener("click", slide);
window.addEventListener("resize", checkWidth);

function slide() {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }

    menuButton.classList.toggle("open");
}
//Zdroj: https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
function checkWidth() {
    if (window.innerWidth > 1350) {
        menu.style.display = "none";
        menuButton.classList.remove("open")
    }
}

