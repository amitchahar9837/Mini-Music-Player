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
      "Ae_Dil_Hai_Mushkil_(Slowed_Reverb)_I_Arijit_Singh",
    filePath:
      "musicList/Ae_Dil_Hai_Mushkil_(Slowed_Reverb)_I_Arijit_Singh_Bollywood_Lofi_Mix_I_Extra_Lofi_Vibes(256k).mp3",
  },
  {
    songName:
      "Afghan jalebi Slowd & Reverb Lofi Song",
    filePath:
      "musicList/Afghan jalebi😈slowed & Reverbed✨💜Lofi you Need🎶🖤 (64 kbps).mp3",
  },
  {
    songName:
      "Baaton_Ko_Teri_Slowed_Reverb_Arijit_Singh_Sad_Song",
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
      "Humnava_Mere__Slowed_And_Reverb__Jubin_Nautiyal",
    filePath:
      "musicList/Humnava_Mere__Slowed_And_Reverb__Jubin_Nautiyal___Sad_Song___Lofi_Music_Channel(256k).mp3",
  },
  {
    songName:
      "Jale Official Song Sapna Chaudhary New Haryanvi Song",
    filePath:
      "musicList/Jale__Official_Video____Sapna_Choudhary___Shiva_Choudhary___New_Haryanvi_Songs_Haryanavi_2023(256k).mp3",
  },
  {
    songName:
      "K_H_A_M_O_S_H_I_Y_A_N_💞tere_suno(slowed & reverb)",
    filePath:
      "musicList/K_H_A_M_O_S_H_I_Y_A_N_💞tere_suno_(_slowed_&_reverb_)__MOON_LOFI(256k).mp3",
  },
  {
    songName:
      "Kabhi_Jo_Badal_Barse_-_Lofi_Slowed_Reverb_Jackpot_Arijit_Singh",
    filePath:
      "musicList/Kabhi_Jo_Badal_Barse_-_Lofi____Slowed___Reverb____Jackpot___Arijit_Singh___Moonlas(256k).mp3",
  },
  {
    songName:
      "नसेनी चढ़ के आ जइयो मेरी बाखरिया में खाट Singer Satto Gurjar New Rasiya",
    filePath:
      "musicList/नसेनी चढ़ के आ जइयो मेरी बाखरिया में खाट __ Nseni Chadh Ke Aa Jaiyo __ Singer Satto Gurjar New Rasiya_hWBdIl7M594.mp3",
  },
  {
    songName:
      "Tuition_Badmashi_Ka__Lofi-Slowed_and_Reverb",
    filePath:
      "musicList/Tuition_Badmashi_Ka___Lofi-%255BSlowed_and_Reverb%255D___Masoom_Sharma___Manisha_Sharma___FEEL_MUSIC(256k).mp3",
  },
  {
    songName:
      "Thoda_Thoda__Pyaar__Hua__Tumse__💕💕💕 ",
    filePath:
      "musicList/Thoda Thoda Pyaar_320(PagalWorld.com.se).mp3",
  },
  {
    songName:
      "Thada_Bhartar___Sapna_Chaudhary_Raju_Punjabi_Sushila_Takhar_Ronit___Latest_Haryanvi_Song_2020",
    filePath:
      "musicList/Thada_Bhartar___Sapna_Chaudhary%252C_Raju_Punjabi___Sushila_Takhar%252C_Ronit___Latest_Haryanvi_Song_2020(256k).mp3",
  },
  {
    songName:
      "THAR_Song_Love_Kataria_New_Haryanvi_Song_2023",
    filePath:
      "musicList/THAR__Full_Song____Love_Kataria___Khushi_Baliyan___Jassi_Kirarkot___Komal_C___New_Haryanvi_Song_2023(256k).mp3",
  },
  {
    songName:
      "Swaha_x_faded_Trending_New_remix_iraq_english_2022",
    filePath:
      "musicList/Swaha_x_faded_remix___Tiktok_Trending_New_remix___minimix_iraq_english_2022_djwaz_marshall(256k).mp3",
  },
  {
    songName:
      "Same_Time_Same_Jagah_Slowed_&_Reverb__Lokdhun_Punjabi_Sandeep_Brar_Kulwinder_Billa",
    filePath:
      "musicList/Same_Time_Same_Jagah_-__Slowed___Reverb____%2540Lokdhun_Punjabi___Sandeep_Brar___Kulwinder_Billa___Lofi(256k).mp3",
  },
];
songTitle.innerHTML = songs[songIndex].songName;
masterPlay.addEventListener(
  "click",
  (playMusic = () => {
    audioEl=new Audio(songs[songIndex].filePath);
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
  setTimeout(() => {
    endTimeUpdate();
    audioEl.play();
    songTitle.innerHTML = songs[songIndex].songName;
    audioElListener();
    titleImg.classList.add("rotate");
  }, 1000);
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
  audioElListener();
  setTimeout(() => {
    endTimeUpdate();
    audioEl.play();
    songTitle.innerHTML = songs[songIndex].songName;
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
    endTimeUpdate();
    audioEl.play();
    songTitle.innerHTML = songs[songIndex].songName;
    audioElListener();
  }
}
