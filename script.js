document.addEventListener("DOMContentLoaded", () => {
    const envelopeBox = document.getElementById("envelope-box");
    const envelopePoster = document.getElementById("envelope-poster");
    const envelopeVideo = document.getElementById("envelope-video");
    
    const envelopeScreen = document.getElementById("envelope-screen");
    const mainScrollPage = document.getElementById("main-scroll-page");
    const mainVideo = document.getElementById("main-video");

    // 3nsr el oghneya el asasyya
    const bgMusic = document.getElementById("bg-music");

    // awl ma tft7y el saf7a, nqfl el scroll
    document.body.classList.add("lock-scroll");

    // lma ndos 3la el poster
    envelopeBox.addEventListener("click", () => {
        envelopePoster.style.opacity = "0";
        setTimeout(() => {
            envelopePoster.style.display = "none";
        }, 400);

        // t48eel fideo el zrf (samit 3ashan el mobayl mayshfsh t2to3 el song)
        if (envelopeVideo) {
            envelopeVideo.play().catch(error => {
                console.log("Error playing envelope video:", error);
            });
        }

        // t48eel el oghneya w tsht8l bdon ma ttfy
        if (bgMusic) {
            bgMusic.play().catch(error => {
                console.log("Error playing audio:", error);
            });
        }
    });

    // lma fideo el zrf y5ls
    if (envelopeVideo) {
        envelopeVideo.addEventListener("ended", () => {
            envelopeScreen.classList.add("hidden");
            mainScrollPage.classList.remove("hidden");
            
            // fth el scroll w eltga2y el 2fl
            document.body.classList.remove("lock-scroll");
            document.body.style.overflow = "auto"; 
            
            if (mainVideo) {
                mainVideo.play().catch(error => {
                    console.log("Error playing main video:", error);
                });
            }

            // Auto scroll lel qesm el tany
            setTimeout(() => {
                mainScrollPage.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }, 100);
        });
    }
});

// taree5 el farah: 31/10/2026 el sa3a 7 bellel (19:00)
const weddingDate = new Date("2026-10-31T19:00:00").getTime();

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

    // t7deeth el 5anat bshkl sa7ih w bdon ay ghalat
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}, 1000);