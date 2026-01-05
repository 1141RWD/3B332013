// 模擬資料庫中的使用者資料
const userData = {
    sid: "3b123456",
    name: "王小明",
    birthday: "2004-05-12",
    class: "資訊管理系", // 確保這裡的字跟 HTML 選項完全一模一樣
    food: "拉麵",
    password: "Aa123456"
};

document.getElementById("forgotForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // 1. 抓取 HTML 中的輸入值
    const sid = document.getElementById("member_id").value.trim();
    const name = document.getElementById("member_name").value.trim();
    const birthday = document.getElementById("member_bir").value;
    const userClass = document.getElementById("member_dept").value.trim();
    const food = document.getElementById("member_food").value.trim();
    const resultDiv = document.getElementById("result_msg");

    // 2. 調試用：如果沒反應，請按 F12 檢查 Console 看看哪個是 false
    console.log("比對學號:", sid === userData.sid);
    console.log("比對姓名:", name === userData.name);
    console.log("比對生日:", birthday === userData.birthday);
    console.log("比對系所:", userClass === userData.class);
    console.log("比對食物:", food === userData.food);

    // 3. 進行資料驗證
    if (
        sid === userData.sid &&
        name === userData.name &&
        birthday === userData.birthday &&
        userClass === userData.class &&
        food === userData.food
    ) {
        // 驗證成功
        resultDiv.innerHTML = `
            <div class="result-container success-box" style="display: block;">
                <i class="fa-solid fa-circle-check"></i> 驗證成功！您的密碼為：<br>
                <span class="password-display">${userData.password}</span>
            </div>
        `;
        resultDiv.style.display = "block";
    } else {
        // 驗證失敗
        resultDiv.innerHTML = `
            <div class="result-container error-box" style="display: block;">
                <i class="fa-solid fa-circle-xmark"></i> 資料驗證失敗，請確認填寫內容。
            </div>
        `;
        resultDiv.style.display = "block";
    }
});