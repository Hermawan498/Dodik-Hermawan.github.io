//text animation
const texts = ["Automation Engineer", "Robotic Engineer", "Junior Data Analyst"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    const typingText = document.getElementById("typing-text");
    currentText = texts[index];
    if (isDeleting) {
        charIndex--;
        typingText.textContent = currentText.substring(0, charIndex);
    } else {
        charIndex++;
        typingText.textContent = currentText.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        setTimeout(type, 500); // Wait before typing new text
    } else {
        setTimeout(type, isDeleting ? 50 : 150); // Typing speed
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

//navbar-fixed
window.onscroll = function () {
    const header = document.querySelector ('header');
    const fixedNav = header.offsetTop ;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    };
}

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click',function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Skills Section See More Button
const moreTextEl = document.getElementById('more-text');
    const toggleBtnEl = document.getElementById('toggle-btn');
    const hideBtnEl = document.getElementById('hide-btn');

    toggleBtnEl.addEventListener('click', () => {
        moreTextEl.classList.toggle('hidden');
        toggleBtnEl.classList.toggle('hidden');
        hideBtnEl.classList.toggle('hidden');
    });

    hideBtnEl.addEventListener('click', () => {
        moreTextEl.classList.toggle('hidden');
        toggleBtnEl.classList.toggle('hidden');
        hideBtnEl.classList.toggle('hidden');
    });