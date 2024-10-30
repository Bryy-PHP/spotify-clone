const audioPlayer = document.getElementById("audioPlayer");
const nowPlayingText = document.getElementById("nowPlayingText");

// Daftar lagu
const songs = [
    { title: "Lagu 1 - Artis 1", src: "music/lagu1.mp3" },
    { title: "Lagu 2 - Artis 2", src: "music/lagu2.mp3" },
    { title: "Lagu 3 - Artis 3", src: "music/lagu3.mp3" }
];

let currentSongIndex = 0;

function loadSong(index) {
    audioPlayer.src = songs[index].src;
    nowPlayingText.textContent = "Lagu Sedang Diputar: " + songs[index].title;
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        document.querySelector(".controls .material-icons").textContent = "pause_circle_filled";
    } else {
        audioPlayer.pause();
        document.querySelector(".controls .material-icons").textContent = "play_circle_filled";
    }
}

function nextTrack() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
}

function prevTrack() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
}

function muteUnmute() {
    audioPlayer.muted = !audioPlayer.muted;
    document.querySelector(".volume-control .material-icons").textContent = audioPlayer.muted ? "volume_off" : "volume_up";
}

// Muat lagu pertama saat halaman di-load
loadSong(currentSongIndex);
