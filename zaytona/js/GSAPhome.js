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