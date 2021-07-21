const play = document.querySelector('.play');
const playEmoji = document.querySelector('.playEmoji');
const pauseEmoji = document.querySelector('.pauseEmoji');
const videoController = document.querySelector('.videoController');
const video = document.querySelector('.video');
video.muted = false;
// var durationVideo = video.duration;

//console.log(durationVideo)
//document.querySelector('.destinationTime').innerHTML = durationVideo;
video.addEventListener('loadedmetadata',(e)=>{
  document.querySelector('.destinationTime').innerHTML = (video.duration / 60).toFixed(2) ;
  var ready = video.readyState;
  console.log(video.controls)
  setInterval(()=>{
    document.querySelector('.currentTime').innerHTML =(video.currentTime/60).toFixed(2);
    var per = (((video.currentTime/60).toFixed(2) / (video.duration / 60).toFixed(2)) * 100);
    walk(videoTracker,per);
  },1000)

})

var temp2 = 1;
const player = document.querySelector('.player');
const fullScreen = document.querySelector('.fullScreen');
fullScreen.addEventListener('click',()=>{


      if(document.fullscreenElement){
        document.exitFullscreen()

      }
      else{
          player.requestFullscreen();
      }

})

const toggleScreen = document.querySelector('.toggleScreen');
toggleScreen.addEventListener('click',()=>{
  if(document.pictureInPictureElement){
    document.exitPictureInPicture();
  }
  else{
      player.requestPictureInPicture();
  }
})
var temp = 1;
play.addEventListener('click',()=>{
  playEmoji.classList.toggle('hideImg');
  pauseEmoji.classList.toggle('showImg');
  if(temp == 1){
  video.play();
  temp = 0 ;
  }
  else if(temp == 0){
    video.pause();
    temp = 1 ;
  }


})

const volume = document.querySelector('.volume');
const volumeController = document.querySelector('.volumeController')
const volumeTrack41 = document.querySelector('.volumeTrack');
const volumePos = document.querySelector('.volumePos')
const volumeCircle = document.querySelector('.volumeCircle');
const volumeProgress = document.querySelector('.volumeProgress')
volumeTrack41.addEventListener('input',()=>{
    volumeChaange(volumeTrack41.value/100)
    volumeProgress.style.width = volumeTrack41.value+'%';
})

function volumeChaange(num){
  video.volume = num;
}



var count = 0;
const toggleAutoPlay = document.querySelector('.toggleAutoPlay');
const autoImg = document.querySelector('.autoImg');
const nonImg = document.querySelector('.nonImg')
toggleAutoPlay.addEventListener('click',()=>{
  toggleAutoPlay.classList.toggle('shift');
  if(count == 0){
    autoImg.classList.remove('toggleAutoImg');
    nonImg.classList.add('toggleAutoImg')
    count = 1;
  }
  else if(count == 1){
    autoImg.classList.add('toggleAutoImg');
    nonImg.classList.remove('toggleAutoImg')
    count = 0;
  }
})



const videoLength = document.querySelector('.videoLength')
const videoBuffer = document.querySelector('.videoBuffer')
const videoTracker = document.querySelector('.videoTracker')
const videoCircle = document.querySelector('.videoCircle')


document.addEventListener('keydown',(e)=>{
  console.log(e.key)
  switch(e.key){
    case 'f':
          fullSceenFun();
    case ' ':
          playAndStop();
    case 'm':
          muted();
    case 'ArrowUp':
          volumeUp();
    case 'ArrowDown':
          volumeDown();
    case "ArrowRight":
          forwardVide()
    case "ArrowLeft":
          backwardVide()
  }
})

function walk(track,width){
  track.style.width = width+'%';
}


function fullSceenFun(){
  if(document.fullscreenElement){
    document.exitFullscreen()

  }
  else{
      player.requestFullscreen();
  }
}
function playAndStop(){
  playEmoji.classList.toggle('hideImg');
  pauseEmoji.classList.toggle('showImg');
  if(temp == 1){
  video.play();
  temp = 0 ;
  }
  else if(temp == 0){
    video.pause();
    temp = 1 ;
  }
}
function muted(){
  if(video.muted == true){
    video.muted = false;
          volumeProgress.style.width = volumeTrack41.value+'%';
  }
  else{
      video.muted = true;
      volumeProgress.style.width = '0%';
      volumeTrack41.value = "0";

  }
}
function volumeUp(){
  volumeTrack41.value = volumeTrack41.value + 5;
  volumeProgress.style.width = (volumeTrack41.value)+ '%';
  volumeChaange(volumeTrack41.value/100);
}
function volumeDown(){
  volumeTrack41.value = volumeTrack41.value - 5;
  volumeProgress.style.width = (volumeTrack41.value)+ '%';
  volumeChaange(volumeTrack41.value/100);
}

function forwardVide(){
  //document.querySelector('.currentTime').innerHTML =(video.currentTime/60).toFixed(2);
  //console.log((video.currentTime/60).toFixed(2) + 0.55)
  video.currentTime = video.currentTime + 50;
  setInterval(()=>{
    document.querySelector('.currentTime').innerHTML =(video.currentTime/60).toFixed(2);
    var per = (((video.currentTime/60).toFixed(2) / (video.duration / 60).toFixed(2)) * 100);
    walk(videoTracker,per);
  },1000)
}
function backwardVide(){
  //document.querySelector('.currentTime').innerHTML =(video.currentTime/60).toFixed(2);
  //console.log((video.currentTime/60).toFixed(2) + 0.55)
  video.currentTime = video.currentTime - 50;
  setInterval(()=>{
    document.querySelector('.currentTime').innerHTML =(video.currentTime/60).toFixed(2);
    var per = (((video.currentTime/60).toFixed(2) / (video.duration / 60).toFixed(2)) * 100);
    walk(videoTracker,per);
  },1000)
}
