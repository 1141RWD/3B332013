// ... 前面密碼切換功能保持不變 ...

// 模擬登入驗證邏輯
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const inputId = document.getElementById("uid").value.trim();
    const inputPwd = document.getElementById("upass").value.trim();

    // 1. 模擬管理員登入
    if (inputId === "im" && inputPwd === "Bb123456") {
        // --- 重點加在這裡 ---
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userRole", "admin");
        localStorage.setItem("userName", "系學會管理員");
        // ------------------
        
        alert("管理員登入成功！");
        window.location.href = "mevent.html?hname=系學會管理員";
        return;
    }

    // 2. 模擬學生會員登入
    const mockStudent = {
        id: "3b123456",
        pwd: "Aa123456",
        name: "王小明"
    };

    if (inputId === mockStudent.id && inputPwd === mockStudent.pwd) {
        // --- 重點加在這裡 ---
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userRole", "student");
        localStorage.setItem("userName", mockStudent.name);
        // ------------------

        alert("學生登入成功！歡迎 " + mockStudent.name);
        window.location.href = "sevent.html?hname=" + encodeURIComponent(mockStudent.name);
    } else {
        alert("帳號或密碼錯誤！");
    }
});