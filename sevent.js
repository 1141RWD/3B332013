document.addEventListener("DOMContentLoaded", function() {
    const displayElement = document.getElementById("user_name_display");

    // --- 修改這裡：優先從 localStorage 讀取名字 ---
    let userName = localStorage.getItem("userName");

    // 如果 localStorage 沒有，才看網址（這是為了相容你原本的網址傳參跳轉）
    if (!userName) {
        const urlParams = new URLSearchParams(window.location.search);
        const nameFromUrl = urlParams.get('hname');
        if (nameFromUrl) {
            userName = decodeURIComponent(nameFromUrl);
            // 抓到後順便存進去，下次換頁就有了
            localStorage.setItem("userName", userName);
            localStorage.setItem("isLoggedIn", "true"); 
        }
    }

    // 顯示名字，如果都沒抓到才顯示訪客
    displayElement.textContent = userName ? userName : "訪客";

    // --- 3D 效果維持原樣 ---
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelector(".glass-card"), {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });
    }
});

function toggleMenu() {
    document.querySelector('.side-menu').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
}