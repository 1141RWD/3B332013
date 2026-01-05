// 漢堡選單控制
function toggleMenu() {
    document.querySelector('.side-menu').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const formContainer = document.getElementById("form-container");
    const successContainer = document.getElementById("success-container");
    const registrationForm = document.getElementById("registrationForm");
    const activitySelect = document.getElementById("activity-select");

    // 1. 自動讀取網址參數
    const urlParams = new URLSearchParams(window.location.search);
    const eventParam = urlParams.get('event');

    if (eventParam) {
        const decodedEvent = decodeURIComponent(eventParam);
        for (let option of activitySelect.options) {
            if (option.value === decodedEvent) {
                activitySelect.value = decodedEvent;
                break;
            }
        }
    }

    // 2. 處理表單提交
    registrationForm.addEventListener("submit", function(e) {
        e.preventDefault(); 

        const formData = new FormData(registrationForm);
        const data = {
            activity: formData.get("activity"),
            id: formData.get("student_id"),
            name: formData.get("student_name"),
            class: formData.get("student_class"),
            contact: formData.get("student_contact"),
            time: new Date().toLocaleString()
        };

        // 儲存到 localStorage
        const registrations = JSON.parse(localStorage.getItem("event_registrations") || "[]");
        registrations.push(data);
        localStorage.setItem("event_registrations", JSON.stringify(registrations));

        // 切換畫面
        formContainer.style.display = "none";
        successContainer.style.display = "block";
        window.scrollTo(0, 0);
    });
});
