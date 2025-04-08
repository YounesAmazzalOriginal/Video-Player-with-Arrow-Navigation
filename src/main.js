// Variables
var myVideo = document.getElementById("myVideo");
var playBtn = document.getElementById("playBtn");
var fullScreen = document.getElementById("fullScreen");
var section = document.querySelector("section");
var smallScreen = document.getElementById("smallScreen");
// var controls = document.getElementById("controls");
var volumeRange = document.getElementById("volumeRange");
var volumeBtn = document.getElementById("volumeBtn");
var videoRange = document.getElementById("videoRange");
var volumeOnTop = document.getElementById("volume%");
var aboutDuration = document.getElementById("about-duration");

// =================== Play Event Handlers ===================
let videoState = false;
function playBtnFunction() {
  if (videoState == false) {
    videoState = true;

    playBtn
      .querySelector("path")
      .setAttribute(
        "d",
        "M615.65-226.46q-23.05 0-39.5-16.55-16.46-16.54-16.46-39.41v-395.16q0-22.87 16.46-39.41 16.45-16.55 39.5-16.55h34.04q22.88 0 39.42 16.55 16.54 16.54 16.54 39.41v395.16q0 22.87-16.54 39.41-16.54 16.55-39.42 16.55h-34.04Zm-305.15 0q-23.05 0-39.51-16.55-16.45-16.54-16.45-39.41v-395.16q0-22.87 16.45-39.41 16.46-16.55 39.51-16.55h34.04q22.87 0 39.42 16.55 16.54 16.54 16.54 39.41v395.16q0 22.87-16.54 39.41-16.55 16.55-39.42 16.55H310.5Z"
      );

    myVideo.play();
  }
  //
  else {
    videoState = false;

    playBtn
      .querySelector("path")
      .setAttribute(
        "d",
        "M345.66-307.55v-345.09q0-15.13 10.31-24.57t24-9.44q4.34 0 9 1.06 4.67 1.05 9.02 3.58l271.12 173.39q7.73 5.44 11.7 12.82 3.96 7.38 3.96 15.8 0 8.42-3.96 15.8-3.97 7.38-11.7 12.62L397.99-278.19q-4.37 2.73-9.05 3.78-4.67 1.06-8.77 1.06-13.94 0-24.23-9.44-10.28-9.44-10.28-24.76Z"
      );

    myVideo.pause();
  }
}

// Play functions Invoke
myVideo.addEventListener("click", playBtnFunction);
playBtn.addEventListener("click", playBtnFunction);

// =================== Fullscreen Event Handlers ===================
let screenState = false;
function fullScreenFunction() {
  if (screenState == false) {
    screenState = true;

    fullScreen
      .querySelector("path")
      .setAttribute(
        "d",
        "M275.73-275.73h-99.58q-11.63 0-19.85-8.23-8.22-8.22-8.22-19.86 0-11.45 8.22-19.66t19.85-8.21h121.5q14.06 0 24.05 9.99t9.99 24.05v121.5q0 11.63-8.22 19.85-8.23 8.22-19.67 8.22-11.64 0-19.86-8.22-8.21-8.22-8.21-19.85v-99.58Zm409.42 0v99.58q0 11.63-8.22 19.85-8.23 8.22-19.87 8.22t-19.75-8.22q-8.12-8.22-8.12-19.85v-121.5q0-14.06 9.9-24.05 9.89-9.99 24.14-9.99h121.19q11.44 0 19.67 8.22 8.22 8.23 8.22 19.67 0 11.64-8.22 19.86-8.23 8.21-19.67 8.21h-99.27ZM275.73-684.77v-99.27q0-11.44 8.23-19.66 8.22-8.22 19.86-8.22 11.45 0 19.66 8.22t8.21 19.66v121.19q0 14.25-9.99 24.15-9.99 9.89-24.05 9.89h-121.5q-11.63 0-19.85-8.13-8.22-8.12-8.22-19.76 0-11.64 8.22-19.86 8.22-8.21 19.85-8.21h99.58Zm409.42 0h99.27q11.44 0 19.67 8.23 8.22 8.22 8.22 19.86 0 11.64-8.22 19.76-8.23 8.11-19.67 8.11H663.23q-14.25 0-24.14-9.89-9.9-9.9-9.9-24.15v-121.19q0-11.44 8.13-19.66t19.77-8.22q11.64 0 19.85 8.22t8.21 19.66v99.27Z"
      );

    section.classList.add("h-screen", "w-screen");
  } else {
    screenState = false;

    fullScreen
      .querySelector("path")
      .setAttribute(
        "d",
        "M204.04-204.04h99.77q11.41 0 19.65 8.24 8.23 8.24 8.23 19.66 0 11.64-8.23 19.85-8.24 8.21-19.65 8.21h-121.5q-14.25 0-24.24-9.99-9.99-9.99-9.99-24.24v-121.5q0-11.41 8.22-19.65 8.23-8.23 19.77-8.23 11.55 0 19.76 8.23 8.21 8.24 8.21 19.65v99.77Zm552.31 0v-99.77q0-11.41 8.22-19.65 8.23-8.23 19.77-8.23t19.76 8.23q8.21 8.24 8.21 19.65v121.5q0 14.25-10.01 24.24-10 9.99-24.03 9.99H657.08q-11.64 0-19.76-8.27-8.13-8.26-8.13-19.72 0-11.46 8.13-19.71 8.12-8.26 19.76-8.26h99.27ZM204.04-755.96v99.27q0 11.63-8.27 19.76-8.27 8.12-19.73 8.12-11.45 0-19.71-8.12-8.25-8.13-8.25-19.76v-121.19q0-14.03 9.99-24.04 9.99-10 24.24-10h121.5q11.41 0 19.65 8.24 8.23 8.24 8.23 19.66 0 11.64-8.23 19.85-8.24 8.21-19.65 8.21h-99.77Zm552.31 0h-99.27q-11.64 0-19.76-8.27-8.13-8.27-8.13-19.73 0-11.45 8.13-19.71 8.12-8.25 19.76-8.25h121.19q14.03 0 24.03 10 10.01 10.01 10.01 24.04v121.19q0 11.63-8.27 19.76-8.27 8.12-19.73 8.12t-19.71-8.12q-8.25-8.13-8.25-19.76v-99.27Z"
      );

    section.classList.remove("h-screen", "w-screen");
  }
}
section.addEventListener("dblclick", fullScreenFunction);
fullScreen.addEventListener("click", fullScreenFunction);

// =================== Smallscreen Event Handlers ===================
let smallState = false;
function smallScreenFunction() {
  if (smallState == false) {
    smallState = true;

    section.classList.remove("h-3/4", "w-3/4", "relative");
    section.classList.add(
      "h-2/6",
      "w-2/6",
      "fixed",
      "bottom-[10px]",
      "right-[10px]"
    );

    smallScreen.classList.add("rotate-[180deg]");
  } else {
    smallState = false;

    section.classList.add("h-3/4", "w-3/4", "relative");
    section.classList.remove(
      "h-2/6",
      "w-2/6",
      "fixed",
      "bottom-[10px]",
      "right-[10px]"
    );
    smallScreen.classList.remove("rotate-[180deg]");
  }
}
smallScreen.addEventListener("click", smallScreenFunction);

// =================== volume Event Handlers ===================
function volumeRangeFunction() {
  myVideo.volume = volumeRange.value;
  if (volumeRange.value > 50) {
    volumeBtn
      .querySelector("path")
      .setAttribute(
        "d",
        "M753.85-481q0-82.62-44.2-150.73-44.19-68.12-118.57-101.73-11.54-5.46-17-16.31-5.46-10.84-1.23-22 4.84-12.15 17.07-16.84 12.23-4.7 24.77.77 90.46 41.07 144.81 123.61 54.34 82.54 54.34 183.23 0 100.69-54.34 183.23-54.35 82.54-144.81 123.61-12.54 5.47-24.77.77-12.23-4.69-17.07-16.84-4.23-11.16 1.23-22 5.46-10.85 17-16.31 74.38-33.61 118.57-101.73 44.2-68.11 44.2-150.73ZM294.62-380H182.31q-15.46 0-25.81-10.35-10.34-10.34-10.34-25.81v-127.68q0-15.47 10.34-25.81Q166.85-580 182.31-580h112.31l119.69-119.69q14.38-14.38 33.11-6.58 18.73 7.81 18.73 28.27v396q0 20.46-18.73 28.27-18.73 7.8-33.11-6.58L294.62-380Zm351.53-100q0 37.38-15.54 70.85-15.53 33.46-41.92 56.3-8.46 5.62-17.81 1.08-9.34-4.54-9.34-15v-228.46q0-10.46 9.34-15 9.35-4.54 17.81 1.08 26.39 23.46 41.92 57.61 15.54 34.16 15.54 71.54Z"
      );
  } else if (volumeRange.value == 0) {
    volumeBtn
      .querySelector("path")
      .setAttribute(
        "d",
        "m707.69-437.85-82.92 82.93q-8.31 8.3-20.89 8.5-12.57.19-21.27-8.5-8.69-8.7-8.69-21.08 0-12.38 8.69-21.08L665.54-480l-82.93-82.92q-8.3-8.31-8.49-20.89-.2-12.57 8.49-21.27 8.7-8.69 21.08-8.69 12.39 0 21.08 8.69l82.92 82.93 82.92-82.93q8.31-8.3 20.89-8.5 12.58-.19 21.27 8.5 8.69 8.7 8.69 21.08 0 12.38-8.69 21.08L749.84-480l82.93 82.92q8.31 8.31 8.5 20.89.19 12.57-8.5 21.27-8.69 8.69-21.08 8.69-12.38 0-21.08-8.69l-82.92-82.93ZM294.62-380H182.31q-15.46 0-25.81-10.35-10.34-10.34-10.34-25.81v-127.68q0-15.47 10.34-25.81Q166.85-580 182.31-580h112.31l119.69-119.69q14.38-14.38 33.11-6.58 18.73 7.81 18.73 28.27v396q0 20.46-18.73 28.27-18.73 7.8-33.11-6.58L294.62-380Z"
      );
  } else {
    volumeBtn
      .querySelector("path")
      .setAttribute(
        "d",
        "M368.46-380h-112.3q-15.47 0-25.81-10.35Q220-400.69 220-416.16v-127.68q0-15.47 10.35-25.81Q240.69-580 256.16-580h112.3l119.69-119.69q14.39-14.38 33.12-6.58Q540-698.46 540-678v396q0 20.46-18.73 28.27-18.73 7.8-33.12-6.58L368.46-380ZM720-480q0 37.38-15.54 70.85-15.54 33.46-41.92 56.3-8.46 5.62-17.81 1.08-9.35-4.54-9.35-15v-228.46q0-10.46 9.35-15 9.35-4.54 17.81 1.08 26.38 23.46 41.92 57.61Q720-517.38 720-480Z"
      );
  }
  volumeOnTop.textContent = `${(volumeRange.value * 100).toFixed(0)}%`;
}
volumeRange.addEventListener("input", volumeRangeFunction);

// =================== Video Duration Event Handlers ===================
function videoRangeFunction() {
  const totalSeconds = myVideo.currentTime;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const formatted = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  const duration = formatTime(myVideo.duration);
  aboutDuration.textContent = `0:00 / ${duration}`;
}
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

// =================== Video Range Event Handlers ===================
myVideo.addEventListener("loadedmetadata", () => {
  videoRange.max = myVideo.duration;
});

myVideo.addEventListener("timeupdate", () => {
  videoRange.value = myVideo.currentTime;
});

videoRange.addEventListener("input", () => {
  myVideo.currentTime = videoRange.value;
});

document.addEventListener("keydown", (event) => {
  // Spacebar for play/pause
  if (event.key == " ") {
    playBtnFunction();
  }

  // 'f' for fullscreen
  if (event.key == "f") {
    fullScreenFunction();
  }

  // 'i' for small screen
  if (event.key == "i") {
    smallScreenFunction();
  }

  // ArrowUp & ArrowDown for volume control
  if (event.key == "ArrowUp") {
    volumeRange.value = parseFloat(volumeRange.value) + 0.05;
    volumeRangeFunction();
  }
  if (event.key == "ArrowDown") {
    volumeRange.value = parseFloat(volumeRange.value) - 0.05;
    volumeRangeFunction();
  }

  //   Backwward & Forward
  if (event.key == "ArrowLeft") {
    myVideo.currentTime -= 5;
  }
  if (event.key == "ArrowRight") {
    myVideo.currentTime += 5;
  }

  console.log(`Video Range: ${videoRange.value}`);
});
