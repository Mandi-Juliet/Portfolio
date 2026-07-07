// Typing Animation
var typed = new Typed(".typing", {
    strings: [
        "Future Software Engineer",
        "Future CEO",
        "AI Enthusiast",
        "Future Tech Founder"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// Scroll Animation
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));
// Dark / Light Mode

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeButton.innerHTML = "☀️";

    }else{

        themeButton.innerHTML = "🌙";

    }

});
// Animate Skill Bars

const skillsSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".bar div");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            skillBars.forEach(bar => {
                bar.classList.add("animate");
            });

        }

    });

});

skillObserver.observe(skillsSection);