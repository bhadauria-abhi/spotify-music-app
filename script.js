console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio('3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  { songName: "a cell on the soul - mike", filePath: "1.mp3", coverPath: "cover1.avif" },
  { songName: "deesire is the wAY ", filePath: "1.mp3", coverPath: "cover2.avif" },
  { songName: "LETS GO ON THE MOON - shakira", filePath: "3.mp3", coverPath: "cover1.avif" },
  { songName: "this is phenomenol", filePath: "4.mp3", coverPath: "cover2.avif" },
  { songName: "baby - justin beiber", filePath: "3.mp3", coverPath: "cover1.avif" },
  { songName: "this is good", filePath: "3.mp3", coverPath: "cover2.avif" },
  { songName: "how can i match this - marsey", filePath: "4.mp3", coverPath: "cover1.avif" },

]

songItems.forEach((element, i) => {

   element.getElementsByTagName('img')[0].src = songs[i].coverPath;
   element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

});
// 
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currenTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;

  }
  else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
})





// listen to Events/

audioElement.addEventListener('timeupdate', () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressBar.value = progress;
  //  myprogressBar/
})
myprogressBar.addEventListener('change', () => {
  audioElement.currentTime = myprogressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
  element.addEventListener('click', (e) => {


    makeAllPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = 'songs/${index}.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
})








 
   
 








