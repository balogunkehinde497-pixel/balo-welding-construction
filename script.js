/* ==========================================
   BALO WELDING & CONSTRUCTION
   MAIN JAVASCRIPT
========================================== */

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });

      if (navLinks) {
        navLinks.classList.remove("active");
      }
    }
  });
});

// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {
    header.style.background = "rgba(0,0,0,.98)";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";
  } else {
    header.style.background = "rgba(0,0,0,.9)";
    header.style.boxShadow = "none";
  }

});

// Animated Counter
const counters = document.querySelectorAll(".stat-box h2");
let started = false;

function runCounter() {

  if (started) return;

  started = true;

  counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const speed = target / 80;

    function update() {

      count += speed;

      if (count < target) {

        counter.innerText = Math.ceil(count) + "+";

        requestAnimationFrame(update);

      } else {

        if (target === 24) {

          counter.innerText = "24/7";

        } else if (target === 100) {

          counter.innerText = "100%";

        } else {

          counter.innerText = target + "+";

        }

      }

    }

    update();

  });

}

window.addEventListener("scroll", () => {

  const stats = document.querySelector(".stats");

  if (!stats) return;

  const top = stats.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    runCounter();
  }

});

// Reveal Animation
const reveals = document.querySelectorAll(
  ".about,.services,.projects,.why-us,.testimonials,.contact"
);

reveals.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(60px)";
  section.style.transition = "all .8s ease";
});

function revealSections() {

  reveals.forEach(section => {

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {

      section.style.opacity = "1";
      section.style.transform = "translateY(0)";

    }

  });

}

window.addEventListener("scroll", revealSections);

revealSections();

// Gallery Animation
const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(image => {

  image.addEventListener("mouseenter", () => {

    image.style.transform = "scale(1.08)";

  });

  image.addEventListener("mouseleave", () => {

    image.style.transform = "scale(1)";

  });

});

// Footer Year
const footerText = document.querySelector("footer p:last-child");

if (footerText) {

  footerText.innerHTML =
    `© ${new Date().getFullYear()} Balo Welding & Construction Company. All Rights Reserved.`;

}

console.log("Balo Welding Website Loaded Successfully");
