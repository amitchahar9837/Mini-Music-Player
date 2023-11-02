//variables
let audioEl;
let audioDurationMinute;
let audioDurationSeconds;
let songIndex = 0;
const backBtn = document.getElementById("backwardBtn");
const masterPlay = document.getElementById("masterPlay");
const forwardBtn = document.getElementById("forwardBtn");
const progressBar = document.getElementById("progressbar");
let endTime = document.getElementById("endTime");
let startTime = document.getElementById("startTime");
let songTitle = document.querySelector(".background #title");
const titleImg = document.querySelector(".background .titleImage img");

let songs = [
  {
    songName: "3_Peg_Sharry_Mann_mp3_song",
    filePath: "musicList/3_Peg_Sharry_Mann_mp3_song.mp3",
  },
  {
    songName: "Afghan jalebi😈slowed & Reverbed✨💜",
    filePath:
      "musicList/Afghan jalebi😈slowed & Reverbed✨💜Lofi you Need🎶🖤 (64 kbps).mp3",
  },
  {
    songName: "All Black-(Mr-Jatt.com)",
    filePath: "musicList/All Black-(Mr-Jatt.com)Allah Ve - Jassie Gill.mp3",
  },
  {
    songName: "Baby Ko Bass Pasand Hai(etcmobi.com)",
    filePath:
      "musicList/Baby Ko Bass Pasand Hai(etcmobi.com).mp3",
  },
  {
    songName: "High_Heels-Honey_Singhwww.Mp3MaD.Com",
    filePath:
      "musicList/High_Heels-Honey_Singhwww.Mp3MaD.Com.mp3",
  },
  {
    songName: "Jeene_Laga_Hoon-Atif_Aslamwww.Mp3MaD.Com",
    filePath:
      "musicList/Jeene_Laga_Hoon-Atif_Aslamwww.Mp3MaD.Com.mp3",
  },
  {
    songName: "KGF__Gali_Gali_Video_Song___Neha_Kakkar___Mouni_Roy___Tanishk_Bagchi___Rashmi_Vi",
    filePath:
      "musicList/KGF__Gali_Gali_Video_Song___Neha_Kakkar___Mouni_Roy___Tanishk_Bagchi___Rashmi_Vi.mp3",
  },
  {
    songName: "Kyon Ki = Dil Ke Badle Sanam.lite",
    filePath: "musicList/Kyon Ki = Dil Ke Badle Sanam.lite.mp3",
  },
  {
    songName: "Exclusive: LOVE DOSE Full Video Song",
    filePath: "musicList/LOVEDO~1.mp3",
  },
];
songTitle.innerHTML = songs[songIndex].songName;
audioEl = new Audio(songs[songIndex].filePath);
masterPlay.addEventListener(
  "click",
  (playMusic = () => {
    endTimeUpdate();
    if (audioEl.paused || audioEl.duration <= 0) {
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      audioEl.play();
      audioElListener();
      titleImg.classList.add("rotate");
    } else {
      audioEl.pause();
      titleImg.classList.remove("rotate");
      masterPlay.classList.remove("fa-circle-pause");
      masterPlay.classList.add("fa-circle-play");
    }
  })
);
forwardBtn.addEventListener("click", function () {
  audioEl.pause();
  if (songIndex >= songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex++;
  }
  audioEl = new Audio(songs[songIndex].filePath);
  audioEl.currentTime = 0;
  startTime.innerText = "--:--";
  startTime.innerText = "--:--";
  setTimeout(() => {
    songTitle.innerHTML = songs[songIndex].songName;
    audioEl.play();
    endTimeUpdate();
    audioElListener();
    titleImg.classList.add("rotate");
  }, 600);
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
backBtn.addEventListener("click", function () {
  audioEl.pause();
  if (songIndex <= 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex--;
  }
  audioEl = new Audio(songs[songIndex].filePath);
  audioEl.currentTime = 0;
  startTime.innerText = "--:--";
  endTime.innerText = "--:--";
  setTimeout(() => {
    songTitle.innerHTML = songs[songIndex].songName;
    audioEl.play();
    endTimeUpdate();
    audioElListener();
    titleImg.classList.add("rotate");
  }, 100);
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
function endTimeUpdate() {
  audioDurationMinute = parseInt(audioEl.duration / 60);
  audioDurationSeconds = parseInt(audioEl.duration % 60);
  audioDurationMinute =
    audioDurationMinute < 10 ? "0" + audioDurationMinute : audioDurationMinute;
  audioDurationSeconds =
    audioDurationSeconds < 10
      ? "0" + audioDurationSeconds
      : audioDurationSeconds;
  endTime.innerHTML = audioDurationMinute + ":" + audioDurationSeconds;
}
function audioElListener() {
  audioEl.addEventListener("timeupdate", function () {
    var progress = parseInt((audioEl.currentTime / audioEl.duration) * 100);
    progressBar.value = progress;
    (function () {
      let currentMinutes = parseInt(audioEl.currentTime / 60);
      let currentSeconds = parseInt(audioEl.currentTime % 60);
      currentMinutes =
        currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
      currentSeconds =
        currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
      startTime.innerHTML = currentMinutes + ":" + currentSeconds;
    })();
    checkforward();
  });
  progressBar.addEventListener("change", function () {
    audioEl.currentTime = (audioEl.duration * progressBar.value) / 100;
  });
}
function checkforward() {
  if (audioEl.currentTime === audioEl.duration) {
    if (songIndex >= songs.length - 1) {
      songIndex = 0;
    } else {
      songIndex++;
    }
    audioEl = new Audio(songs[songIndex].filePath);
    audioEl.currentTime = 0;
    setTimeout(() => {
      songTitle.innerHTML = songs[songIndex].songName;
      audioEl.play();
      endTimeUpdate();
      audioElListener();
    }, 600);
  }
}
