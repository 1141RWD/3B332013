// 等待網頁載入完成後執行
document.addEventListener("DOMContentLoaded", function() {

    // --- 1. 密碼眼睛切換功能 ---
    const eyeIcon = document.getElementById("eyeIcon");
    const passwordInput = document.getElementById("upass");

    if (eyeIcon) {
        eyeIcon.addEventListener("click", function () {
            // 切換 type 屬性：password <-> text
            const isPassword = passwordInput.getAttribute("type") === "password";
            passwordInput.setAttribute("type", isPassword ? "text" : "password");
            
            // 切換圖示外觀：點開變鎖頭或劃掉的眼睛
            this.textContent = isPassword ? "🔓" : "👁";
            
            console.log("密碼切換為: " + (isPassword ? "明碼" : "隱藏")); // 測試用
        });
    }

    // --- 2. 登入驗證邏輯 ---
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const inputId = document.getElementById("uid").value.trim();
            const inputPwd = document.getElementById("upass").value.trim();

            // 模擬管理員登入
            if (inputId === "im" && inputPwd === "Bb123456") {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userRole", "admin");
                localStorage.setItem("userName", "系學會管理員");
                
                alert("管理員登入成功！");
                window.location.href = "mevent.html?hname=系學會管理員";
                return;
            }

            // 模擬學生會員登入
            const mockStudent = {
                id: "3b123456",
                pwd: "Aa123456",
                name: "王小明"
            };

            if (inputId === mockStudent.id && inputPwd === mockStudent.pwd) {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userRole", "student");
                localStorage.setItem("userName", mockStudent.name);

                alert("學生登入成功！歡迎 " + mockStudent.name);
                window.location.href = "sevent.html?hname=" + encodeURIComponent(mockStudent.name);
            } else {
                alert("帳號或密碼錯誤！");
            }
        });
    }
});

// --- 3. 手機版漢堡選單功能 (抽出來讓 HTML 的 onclick 可以呼叫) ---
function toggleMenu() {
    const sideMenu = document.querySelector(".side-menu");
    const overlay = document.querySelector(".overlay");
    
    if (sideMenu && overlay) {
        sideMenu.classList.toggle("active");
        overlay.classList.toggle("active");
    }
}
