

// Sidebar Toggle
document
.querySelector(".menu-toggle")
.addEventListener("click", function () {
  document.querySelector(".sidebar").classList.add("show-sidebar");
});

// Close Sidebar
document
.querySelector(".close-sidebar")
.addEventListener("click", function () {
  document.querySelector(".sidebar").classList.remove("show-sidebar");
});

// swiper
var swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2, /* يعرض بطاقتين في كل صف عند الشاشات المتوسطة */
        },
        1024: {
            slidesPerView: 2, /* يعرض بطاقتين في كل صف عند الشاشات الكبيرة */
        }
    }
});

// video play button
// function playVideo() {
//     var video = document.getElementById("video");
//     var playButton = document.querySelector(".play-button");

//     if (video.paused) {
//         video.play();
//         playButton.style.display = "none";
//     }
// }
// video.addEventListener("click", function () {
//     if (!video.paused) {
//         video.pause();
//         document.querySelector(".play-button").style.display = "flex";
//     }
// });



