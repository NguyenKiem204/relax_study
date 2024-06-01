// script.js
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    const playlist = [
        "./assets/video/musicST.mp3",
        "./assets/video/lofi.mp4"
    ];

    let currentTrack = 0;

    function loadTrack(trackIndex) {
        audio.src = playlist[trackIndex];
        audio.play();
    }

    function prevTrack() {
        currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrack);
    }

    function nextTrack() {
        currentTrack = (currentTrack + 1) % playlist.length;
        loadTrack(currentTrack);
    }

    prevButton.addEventListener("click", prevTrack);
    nextButton.addEventListener("click", nextTrack);

    // Tự động chuyển sang bài tiếp theo khi bài hiện tại kết thúc
    audio.addEventListener("ended", nextTrack);

    // Load track đầu tiên
    loadTrack(currentTrack);
});
