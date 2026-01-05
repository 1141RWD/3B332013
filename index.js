// --- 輪播邏輯 ---
let slideIndex = 1;
showSlides(slideIndex);
let timer = setInterval(() => plusSlides(1), 5000);

function plusSlides(n) {
    clearInterval(timer); // 手動點擊時重設計時器
    showSlides(slideIndex += n);
    timer = setInterval(() => plusSlides(1), 5000);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }
}

function toggleMenu() {
    document.querySelector('.side-menu').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
}

function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    lb.style.display = 'flex';
    lbImg.src = src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.mySlides img').forEach(img => {
        img.onclick = function() { openLightbox(this.src); };
    });

    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".service-tile"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
            scale: 1.05
        });
    }
});