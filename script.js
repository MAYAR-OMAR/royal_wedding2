document.addEventListener("DOMContentLoaded", () => {
    const envelopeBox = document.getElementById("envelope-box");
    const envelopePoster = document.getElementById("envelope-poster");
    const envelopeVideo = document.getElementById("envelope-video");
    
    const envelopeScreen = document.getElementById("envelope-screen");
    const mainScrollPage = document.getElementById("main-scroll-page");
    const mainVideo = document.getElementById("main-video");

    // عنصر الأغنية
    const bgMusic = document.getElementById("bg-music");

    // أول ما تفتحي الصفحة، نقفل السكرول لحد ما تدوسي على الظرف
    document.body.classList.add("lock-scroll");

    // لما ندوس على البوستر، يختفي وفيديو الظرف يشتغل والأغنية تشتغل
    envelopeBox.addEventListener("click", () => {
        envelopePoster.style.opacity = "0";
        setTimeout(() => {
            envelopePoster.style.display = "none";
        }, 400);

        // تشغيل فيديو الظرف
        if (envelopeVideo) {
            envelopeVideo.play().catch(error => {
                console.log("Error playing envelope video:", error);
            });
        }

        // تشغيل الأغنية والتأكد من عملها
        if (bgMusic) {
            bgMusic.play().catch(error => {
                console.log("Error playing audio:", error);
            });
        }
    });

    // لما فيديو الظرف يخلص، نخفي شاشة الظرف ونفتح السكرول وننزل أوتوماتيك لتحت
    if (envelopeVideo) {
        envelopeVideo.addEventListener("ended", () => {
            envelopeScreen.classList.add("hidden");
            mainScrollPage.classList.remove("hidden");
            document.body.classList.remove("lock-scroll"); // فتح السكرول هنا تماماً
            
            // تشغيل الفيديو الرئيسي
            if (mainVideo) {
                mainVideo.play().catch(error => {
                    console.log("Error playing main video:", error);
                });
            }

            // الأوتو سكرول (Autoscroll)
            setTimeout(() => {
                mainScrollPage.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }, 100);
        });
    }
});

// تاريخ الفرح (30 نوفمبر 2026 الساعة 7 مساءً)
// (ملاحظة: شهر نوفمبر هو 10 في الـ JavaScript لأن الشهور بتبدأ من 0، فكتابة 2026-11-30 تعني نوفمبر مضبوط)
const weddingDate = new Date("2026-11-30T19:00:00").getTime();

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