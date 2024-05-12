const menuButton = document.getElementById("hamburgerMenu");
const menu = document.getElementById("openMenu");
const galleryContainer = document.getElementById("galleryContainer");
const images = document.querySelectorAll('.galleryImage');
const leftButton = document.getElementById("leftArrowHolder");
const rightButton = document.getElementById("rightArrowHolder");
const hiddenCards = document.querySelectorAll('.hidden');

//zdroj: https://youtu.be/T33NN_pPeNI?si=s2N9ywY7nbkpKbMr https://chat.openai.com/share/02204a9d-9c25-4371-a5e9-66c11a19aee7
const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
        else {
            entry.target.classList.remove("show");
        }
    });
};

const observer = new IntersectionObserver(observerCallback);

hiddenCards.forEach((card) => observer.observe(card));

window.addEventListener('scroll', () => {
    hiddenCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.bottom > 0) {
            observer.observe(card);
        }
    });
});



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

