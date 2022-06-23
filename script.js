// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let playSongName = document.getElementById("playSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Warriyo - Mortals (feat. Laura Brehm)",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "ceilo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heros-Tonight-feat-johnning",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "A-1",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "A-2",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "A-3",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "A-4",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "A-5",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    playSongName.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

// AllsongsPlays function
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("play")).forEach((element) => {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  });
};

// songItems play
Array.from(document.getElementsByClassName("play")).forEach((Item) => {
  Item.addEventListener("click", (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    playSongName.innerText = songs[songIndex - 1].songName;
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  });
});

// logic for Next Button
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 10) {
    songIndex = 0 + 1;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  playSongName.innerText = songs[songIndex - 1].songName;
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

// logic for Previous Button
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 1) {
    songIndex = 0 + 1;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  playSongName.innerText = songs[songIndex - 1].songName;
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
