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
    songName: "All Black-(Mr-Jatt.com)",
    filePath: "musicList/All Black-(Mr-Jatt.com).mp3",
  },
  {
    songName:
      "Allah Maaf Kare (Desi Boyz) - (Full Video Song)",
    filePath:
      "musicList/Allah Maaf Kare (Desi Boyz) - (Full Video Song) www.DJMaza.Com_(new).mp3",
  },
  {
    songName: "Allah Ve - Jassie Gill",
    filePath: "musicList/Allah Ve - Jassie Gill.mp3",
  },
  {
    songName:
      "Ae_Dil_Hai_Mushkil_(Slowed_Reverb)_I_Arijit_Singh_Bollywood_Lofi_Mix_I_Extra_Lofi_Vibes(256k)",
    filePath:
      "musicList/Ae_Dil_Hai_Mushkil_(Slowed_Reverb)_I_Arijit_Singh_Bollywood_Lofi_Mix_I_Extra_Lofi_Vibes(256k).mp3",
  },
  {
    songName:
      "Afghan jalebi😈slowed & Reverbed✨💜Lofi you Need🎶🖤",
    filePath:
      "musicList/Afghan jalebi😈slowed & Reverbed✨💜Lofi you Need🎶🖤 (64 kbps).mp3",
  },
  {
    songName:
      "Baaton_Ko_Teri_%5BSlowed_Reverb%5D____Arijit_Singh____Sad_Song_Lyrics____Urban_Edits(256k)",
    filePath:
      "musicList/Baaton_Ko_Teri_Slowed_Reverb____Arijit_Singh____Sad_Song.mp3",
  },
  {
    songName: "bach_gyi_jaan_meri_ho_ko_na_song_latest_haryanvi💘💫(256k)",
    filePath:
      "musicList/bach_gyi_jaan_meri_ho_ko_na_song_latest_haryanvi💘💫(256k).mp3",
  },
  {
    songName: "Daru Badnam  8D  Reverb   Music Girl",
    filePath: "musicList/Daru Badnam  8D  Reverb   Music Girl.mp3",
  },
  {
    songName: "Elevated_(Official_Audio)_-_Shubh(256k)",
    filePath: "musicList/Elevated_(Official_Audio)_-_Shubh(256k).mp3",
  },
  {
    songName:
      "Humnava_Mere__Slowed_And_Reverb__Jubin_Nautiyal___Sad_Song___Lofi_Music_Channel(256k)",
    filePath:
      "musicList/Humnava_Mere__Slowed_And_Reverb__Jubin_Nautiyal___Sad_Song___Lofi_Music_Channel(256k).mp3",
  },
  {
    songName:
      "Jale__Official_Video____Sapna_Choudhary___Shiva_Choudhary___New_Haryanvi_Songs_Haryanavi_2023(256k)",
    filePath:
      "musicList/Jale__Official_Video____Sapna_Choudhary___Shiva_Choudhary___New_Haryanvi_Songs_Haryanavi_2023(256k).mp3",
  },
  {
    songName:
      "K_H_A_M_O_S_H_I_Y_A_N_💞tere_suno_(_slowed_&_reverb_)__MOON_LOFI(256k)",
    filePath:
      "musicList/K_H_A_M_O_S_H_I_Y_A_N_💞tere_suno_(_slowed_&_reverb_)__MOON_LOFI(256k).mp3",
  },
  {
    songName:
      "Kabhi_Jo_Badal_Barse_-_Lofi____Slowed___Reverb____Jackpot___Arijit_Singh___Moonlas(256k)",
    filePath:
      "musicList/Kabhi_Jo_Badal_Barse_-_Lofi____Slowed___Reverb____Jackpot___Arijit_Singh___Moonlas(256k).mp3",
  },
];
audioEl = new Audio(songs[songIndex].filePath);
songTitle.innerHTML = songs[songIndex].songName;
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
  audioElListener();
  setTimeout(() => {
    audioEl.play();
    songTitle.innerHTML = songs[songIndex].songName;
    endTimeUpdate();
  }, 100);
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
  audioElListener();
  setTimeout(() => {
    audioEl.play();
    songTitle.innerHTML = songs[songIndex].songName;
    endTimeUpdate();
  }, 100);
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
function endTimeUpdate() {
  // console.log(audioEl.duration);
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
    audioEl.play();
    songTitle.innerHTML = songs[songIndex].songName;
    audioElListener();
  }
}
