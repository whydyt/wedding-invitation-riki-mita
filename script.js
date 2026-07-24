// ==============================
// ELEMENT
// ==============================

const body = document.body;
const cover = document.querySelector(".cover");
const navbar = document.getElementById("navbar");
const openBtn = document.getElementById("openInvitation");
const welcome = document.getElementById("welcome");
const music = document.getElementById("music");
document.body.style.overflow = "hidden";

music.volume = 0.5;

function startMusic(){

    music.play()
    .then(()=>{
        console.log("Music start");
    })
    .catch(()=>{});

    document.removeEventListener(
        "click",
        startMusic
    );

    document.removeEventListener(
        "touchstart",
        startMusic
    );
}


document.addEventListener(
    "click",
    startMusic
);


document.addEventListener(
    "touchstart",
    startMusic
);

// ==============================
// LOCK SCROLL
// ==============================

window.onload = () => body.style.overflow = "hidden";

// ==============================
// OPEN INVITATION
// ==============================

openBtn.addEventListener("click", function () {
    
    openBtn.style.transform = "scale(.90)";

    cover.classList.add("hide");

    setTimeout(() => {

        document.body.style.overflow = "auto";

        welcome.classList.add("show");

        welcome.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 700);


});


// ==============================
// NAVBAR
// ==============================

document.querySelectorAll(".nav-link").forEach(link => {

    link.onclick = e => {

        e.preventDefault();

        document.querySelector(link.getAttribute("href"))
            ?.scrollIntoView({

                behavior: "smooth"

            });

    };

});

// ==============================
// ACTIVE NAVBAR
// ==============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(sec => {

        if (scrollY >= sec.offsetTop - 120)

            current = sec.id;

    });

    document.querySelectorAll(".nav-link").forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );

    });

});

// ==============================
// REVEAL
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting)

            entry.target.classList.add("active");

    });

}, { threshold: .2 });

document.querySelectorAll(".reveal")
.forEach(el => observer.observe(el));

// ==============================
// COUNTDOWN
// ==============================

const target = new Date("2026-08-20T08:00:00").getTime();

setInterval(() => {

    let d = target - Date.now();

    if (d < 0) return;

    document.getElementById("days").innerHTML =
        Math.floor(d / 86400000);

    document.getElementById("hours").innerHTML =
        Math.floor(d % 86400000 / 3600000);

    document.getElementById("minutes").innerHTML =
        Math.floor(d % 3600000 / 60000);

    document.getElementById("seconds").innerHTML =
        Math.floor(d % 60000 / 1000);

}, 1000);

// ==============================
// COPY REKENING
// ==============================

function copyRekening(no) {

    navigator.clipboard.writeText(no);

    alert("Nomor rekening berhasil disalin.");

}