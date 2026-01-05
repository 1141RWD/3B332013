// eventdetail.js

function openModal(card) {
    const modal = document.getElementById("eventModal");
    
    // 抓取 HTML data 屬性
    const name = card.getAttribute("data-name");
    const date = card.getAttribute("data-date");
    const reg = card.getAttribute("data-reg");
    const loc = card.getAttribute("data-loc");
    const img = card.getAttribute("data-img");
    const detail = card.getAttribute("data-detail");
    const closed = card.getAttribute("data-closed");

    // 填入彈窗內容
    document.getElementById("modalTitle").innerText = name;
    document.getElementById("modalImg").src = img;
    document.getElementById("modalDate").innerText = date;
    document.getElementById("modalLoc").innerText = loc;
    document.getElementById("modalReg").innerText = reg;

    // 詳細資訊連結處理
    const btnDetail = document.getElementById("btnDetail");
    if (detail) {
        btnDetail.style.display = "block";
        btnDetail.href = detail;
    } else {
        btnDetail.style.display = "none";
    }

    // 報名按鈕處理
    const regBtn = document.getElementById("regBtn");
    if (closed === "1") {
        regBtn.innerText = "報名已截止";
        regBtn.style.background = "#95a5a6";
        regBtn.disabled = true;
    } else {
        regBtn.innerText = "前往報名";
        regBtn.style.background = "#E67E22";
        regBtn.disabled = false;
        
        // 點擊報名時的邏輯
        regBtn.onclick = function() {
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            if (isLoggedIn === "true") {
                window.location.href = "join_event.html"; // 已登入，去報名
            } else {
                alert("請先登入會員方可報名活動！");
                window.location.href = "login.html"; // 未登入，去登入
            }
        };
    }

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("eventModal").style.display = "none";
}

// 點擊彈窗外部可關閉
window.onclick = function(event) {
    const modal = document.getElementById("eventModal");
    if (event.target == modal) {
        closeModal();
    }
};