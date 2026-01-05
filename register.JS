// register.js

function validateForm() {
    const errorBox = document.getElementById('error-message');
    const pass = document.getElementById('member_pass').value;
    const confirmPass = document.getElementById('member_passcheck').value;
    const memberId = document.getElementById('member_id').value;
    
    // 隱藏先前的錯誤訊息
    errorBox.style.display = 'none';
    errorBox.innerText = '';

    // 1. 檢查兩次密碼是否一致
    if (pass !== confirmPass) {
        showError("兩次輸入的密碼不一致！");
        return false;
    }

    // 2. 檢查密碼格式 (2位英文 + 6位數字)
    const passRule = /^[A-Za-z]{2}\d{6}$/;
    if (!passRule.test(pass)) {
        showError("密碼格式錯誤！請輸入 2 位英文 + 6 位數字。");
        return false;
    }

    // --- 模擬後端行為：檢查是否重複註冊 ---
    // 取得 localStorage 中儲存的會員清單
    const existingMembers = JSON.parse(localStorage.getItem('members') || "[]");
    
    const isDuplicate = existingMembers.some(m => m.id === memberId);
    if (isDuplicate) {
        showError("該學號已經註冊過了！");
        return false;
    }

    // --- 執行註冊 (存入 localStorage) ---
    const newMember = {
        dept: document.getElementById('member_Department').value,
        name: document.getElementById('member_name').value,
        id: memberId,
        pass: pass,
        phone: document.getElementById('member_phone').value,
        food: document.getElementById('member_food').value,
        bir: document.getElementById('member_bir').value,
        gender: document.querySelector('input[name="member_Gender"]:checked').value
    };

    existingMembers.push(newMember);
    localStorage.setItem('members', JSON.stringify(existingMembers));

    alert('註冊成功！請重新登入');
    window.location.href = 'login.html'; // 成功後跳轉至登入頁面
    return false; // 防止表單真正送出
}

function showError(msg) {
    const errorBox = document.getElementById('error-message');
    errorBox.innerText = msg;
    errorBox.style.display = 'block';
    window.scrollTo(0, 0); // 捲動到上方讓使用者看見錯誤
}

// 綁定表單提交事件
document.getElementById('registerForm').onsubmit = function(e) {
    e.preventDefault(); // 攔截預設提交行為
    validateForm();
};