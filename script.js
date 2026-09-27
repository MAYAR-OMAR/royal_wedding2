document.addEventListener("DOMContentLoaded", () => {
    const envelopeBox = document.getElementById("envelope-box");
    const envelopePoster = document.getElementById("envelope-poster");
    const envelopeVideo = document.getElementById("envelope-video");
    
    const envelopeScreen = document.getElementById("envelope-screen");
    const mainScrollPage = document.getElementById("main-scroll-page");
    const mainVideo = document.getElementById("main-video");

    // أول ما تفتحي الصفحة، نقفل السكرول لحد ما تدوسي على الظرف
    document.body.classList.add("lock-scroll");

    // لما ندوس على البوستر، يختفي وفيديو الظرف يشتغل
    envelopeBox.addEventListener("click", () => {
        envelopePoster.style.opacity = "0";
        setTimeout(() => {
            envelopePoster.style.display = "none";
        }, 400);

        envelopeVideo.play().catch(error => {
            console.log("Error playing envelope video:", error);
        });
    });

    // لما فيديو الظرف يخلص، نخفي شاشة الظرف ونفتح السكرول ونظهر صفحة الفيديو والصورة
    envelopeVideo.addEventListener("ended", () => {
        envelopeScreen.classList.add("hidden");
        mainScrollPage.classList.remove("hidden");
        document.body.classList.remove("lock-scroll"); // فتح السكرول هنا تماماً
        
        mainVideo.play().catch(error => {
            console.log("Error playing main video:", error);
        });
    });
});
// تاريخ الفرح (تأكدي من التاريخ، وفي الصورة مكتوب 30/10/2026 أو زي ما تحبي)
// Tarikh el farah 30/11/2026
// Stakhdem el raqam 10 lel shahr November (3ashan el shohor btbda' mn 0: 0=Jan, 10=Nov)
// تاريخ الفرح 30/11/2026 مظبوط وصحيح 100%
// تاريخ الفرح (30 نوفمبر 2026)
const weddingDate = new Date("2026-11-30T00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // تحديث خانات العداد تلقائياً
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}, 1000);