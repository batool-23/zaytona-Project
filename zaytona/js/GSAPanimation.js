


// Top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    gsap.to(scrollTopBtn, { opacity: 1, display: "block", duration: 0.3 });
  } else {
    gsap.to(scrollTopBtn, { opacity: 0, display: "none", duration: 0.3 });
  }
});

scrollTopBtn.addEventListener("click", () => {
  gsap.to(window, { scrollTo: 0, duration: 1 });
});


// loading-screen
gsap.to(".loading-screen", { opacity: 0, duration: 0.5, delay: 1.5, onComplete: () => {
    document.querySelector(".loading-screen").style.display = "none";
}});

  
// Navbar
gsap.from(".navbar", { duration: 1, y: -50,delay: 2, opacity: 0, ease: "power2.out" });

// تحريك نص الهيرو
gsap.from(".hero-text", { duration: 1.5, x: 100, opacity: 0, delay: 2.5 });
gsap.from(".heronavbar", { duration: 1.5, x: -100, opacity: 0, delay: 2 });

// تأثير على الأزرار
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.1, duration: 0.3, ease: "power1.out" });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3, ease: "power1.in" });
  });
});

// gsap.from(".btn", {
//   opacity: 0,
//   duration: 1.2,
//   delay: 3,
//   ease: "power2.out",
//   stagger: 0.2,
// });


// تأثير للبطاقات
const cards = document.querySelectorAll(".story-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.05, duration: 1, ease: "power1.out" });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, duration: 1, ease: "power1.in" });
  });
});

// تأثير للفقرات
// gsap.from(".paragraph", {
//   opacity: 0,
//   y: 50,
//   duration: 2,
//   delay: 3,
//   ease: "power2.out",
//   stagger: 0.2, // تأخير بسيط بين كل فقرة وأخرى
// });
