console.log("hey");


const song = ['Let Me Love You - DJ Snake  Justin Bieber (128kbps)-(MusicVilla.In).mp3',
                 'Live My Life (feat. Justin Bieber)-(DJmaza.in).mp3',
                'Love_Me-Justin_Bieber[www.Mp3MaD.Com](1).mp3'];

document.getElementById('title').innerHTML = song[0];

let songindex = 0;
function play(){
  document.getElementById('track').play();
    if(document.getElementById('pause').style.display != "block"){
        document.getElementById('pause').style.display = "block";
        document.getElementById('play').style.display = "none";
       document.getElementById('track').play();
       document.getElementById('pic').classList.add('go');
    }
    else{
        document.getElementById('pause').style.display = "none";
        document.getElementById('play').style.display = "block";
        document.getElementById('track').pause();
       document.getElementById('pic').classList.remove('go');
    }
}

function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

function progressValue() {
  pro.max = track.duration;
  pro.value = track.currentTime;

  start.textContent = formatTime(track.currentTime);
  end.textContent = formatTime(track.duration-track.currentTime);
  // console.log(formatTime(track.duration-track.currentTime));
}

setInterval(progressValue, 500);
function changeProgressBar() {
    track.currentTime = pro.value;
    // track.currentTime = pro.value + 10;

  }
function sec_more() {
    track.currentTime =track.currentTime + 10;
    console.log(track.currentTime+10);
  }
function sec_less() {
    track.currentTime =track.currentTime - 10;
    console.log(track.currentTime-10);
  }
  
pro.addEventListener("input", changeProgressBar);


function nextsong(){
  if(songindex <2){
  songindex =songindex + 1;
  track.src = song[songindex];
  document.getElementById('title').innerHTML =song[songindex] ;
  play();
  }
  else{
    alert("sorry! we have only this much song available in our library..")
  }
  // document.getElementById('track').play();
}
function previoussong(){
  songindex =songindex - 1;
  track.src = song[songindex];
  document.getElementById('title').innerHTML =song[songindex] ;
  play();
 
}
