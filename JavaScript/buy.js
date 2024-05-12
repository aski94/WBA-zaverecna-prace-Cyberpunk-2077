const menuButton = document.getElementById("hamburgerMenu");
const menu = document.getElementById("openMenu");

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
