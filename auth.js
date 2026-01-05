// auth.js
document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userName = localStorage.getItem("userName");
    const userRole = localStorage.getItem("userRole");
    const targetPage = (userRole === "admin") ? "mevent.html" : "sevent.html";

    if (isLoggedIn === "true") {
        // --- 1. 更新桌機版導覽列 ---
        const loginLink = document.querySelector('.nav-desktop a[href="login.html"]');
        if (loginLink) {
            const loginLi = loginLink.parentElement;
            const navigation = document.getElementById("navigation");

            // 換成登出按鈕
            loginLi.innerHTML = `<a href="#" class="logoutBtn">登出 (${userName})</a>`;
            
            // 插入「回個人畫板」
            const memberLi = document.createElement("li");
            memberLi.innerHTML = `<a href="${targetPage}">回個人畫板</a>`;
            navigation.insertBefore(memberLi, loginLi);
        }

        // --- 2. 更新手機版側邊欄 ---
        const sideLoginLink = document.querySelector('.side-menu a[href="login.html"]');
        if (sideLoginLink) {
            const sideMenuUl = sideLoginLink.closest('ul');
            
            // 修改原本的登入連結為個人畫板
            sideLoginLink.innerHTML = `<i class="fa-solid fa-user-gear"></i> 回個人畫板`;
            sideLoginLink.href = targetPage;

            // 在下方新增一個登出選項
            const sideLogoutLi = document.createElement("li");
            sideLogoutLi.innerHTML = `<a href="#" class="logoutBtn"><i class="fa-solid fa-right-from-bracket"></i> 登出 (${userName})</a>`;
            sideMenuUl.appendChild(sideLogoutLi);
        }
    }

    // --- 3. 統一處理登出點擊事件 (用 class 選擇器同時抓桌機與手機) ---
    document.querySelectorAll(".logoutBtn").forEach(btn => {
        btn.onclick = function(e) {
            e.preventDefault();
            if(confirm("確定要登出嗎？")) {
                localStorage.clear();
                alert("您已登出");
                window.location.href = "index.html";
            }
        };
    });
});