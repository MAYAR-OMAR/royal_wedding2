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