document.addEventListener("DOMContentLoaded", () => {
    const envelopeBox = document.getElementById("envelope-box");
    const envelopePoster = document.getElementById("envelope-poster");
    const envelopeVideo = document.getElementById("envelope-video");
    
    const envelopeScreen = document.getElementById("envelope-screen");
    const firstPageScreen = document.getElementById("first-page-screen");
    const mainVideo = document.getElementById("main-video");

    // lma ndos 3la al poster, y5tfy w al video ysht8l
    envelopeBox.addEventListener("click", () => {
        envelopePoster.style.opacity = "0";
        setTimeout(() => {
            envelopePoster.style.display = "none";
        }, 400);

        envelopeVideo.play().catch(error => {
            console.log("Error playing envelope video:", error);
        });
    });

    // lma video al envelope y5ls, yfta7 al safha al awla (al video al tany)
    envelopeVideo.addEventListener("ended", () => {
        envelopeScreen.classList.add("hidden");
        firstPageScreen.classList.remove("hidden");
        
        mainVideo.play().catch(error => {
            console.log("Error playing main video:", error);
        });
    });
});