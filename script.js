/* =========================================
   OLIVER VILLANUEVA
   PERSONAL INFORMATION PAGE
   JAVASCRIPT
   ========================================= */


/* =========================
   GET HTML ELEMENTS
   ========================= */

const introButton = document.getElementById("introButton");
const greetingButton = document.getElementById("greetingButton");
const visitorName = document.getElementById("visitorName");
const greetingResult = document.getElementById("greetingResult");


/* =========================
   INTRODUCE ME BUTTON
   ========================= */

/* =========================
   INTRODUCE ME - TYPING EFFECT
   ========================= */

introButton.addEventListener("click", function () {
    const heroDescription = document.querySelector(".hero-description");

    const introduction =
        "Anyeongg, hasayoo!! ✦ I'm Oliver Villanueva, a 3rd-year BS Information Technology student who loves combining creativity and technology. I enjoy designing cute and aesthetic websites, experimenting with layouts, and learning how to make websites not only beautiful but also fully functional. I'm still learning and growing, but I'm always excited to turn new ideas into something creative!";

    heroDescription.classList.add("highlight-text");

    // Clear the current text
    heroDescription.textContent = "";

    let i = 0;

    function typeText() {
        if (i < introduction.length) {
            heroDescription.textContent += introduction.charAt(i);
            i++;

            setTimeout(typeText, 30);
        }
    }

    typeText();
});

/* =========================
   GREETING FUNCTION
   ========================= */

function showGreeting() {

    const name = visitorName.value.trim();

    if (name !== "") {

        const message =
            `Anyeongg, ${name}! ✦ Welcome to Oliver's portfolio! I hope you enjoy your stay here.`;

        greetingResult.textContent = message;

    } else {

        greetingResult.textContent =
            "Anyeongg! ✦ Please type your name first.";

    }

    greetingResult.classList.add("show-result");
}


/* =========================
   GREETING BUTTON EVENT
   ========================= */

greetingButton.addEventListener(
    "click",
    showGreeting
);