console.log("hey");


const song = ['Let Me Love You - DJ Snake  Justin Bieber (128kbps)-(MusicVilla.In).mp3',
                 'Live My Life (feat. Justin Bieber)-(DJmaza.in).mp3',
                'Love_Me-Justin_Bieber[www.Mp3MaD.Com](1).mp3',
                "https://res.cloudinary.com/cbanlawi/video/upload/v1614140796/HarryStyles-WatermelonSugar_f5471p.mp3",
                "https://res.cloudinary.com/cbanlawi/video/upload/v1614144520/Justin_Bieber-Yummy_vercib.mp3",
                "https://res.cloudinary.com/cbanlawi/video/upload/v1614186705/Loud_Luxury_ft._Brando_-_Body_fm7cdr.mp3"];

document.getElementById('title').innerHTML = song[0];

let songindex = 0;


function play(){
    // if(document.getElementById('pause').style.display != "block"){
    //     document.getElementById('pause').style.display = "block";
    //     document.getElementById('play').style.display = "none";
    //    document.getElementById('track').play();
    //   //  document.getElementById('pic').classList.add('scale');
    //    document.getElementById('pic').classList.add('go');
    // }
    if(track.paused){
        document.getElementById('pause').style.display = "block";
        document.getElementById('play').style.display = "none";
       document.getElementById('track').play();
      //  document.getElementById('pic').classList.add('scale');
       document.getElementById('pic').classList.add('go'); 
        console.log(songindex);
      //  activerm();
       active(songindex);
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
  // if(formatTime(track.duration-track.currentTime) == `0:00`){
  //   stop();
  // }
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
  
pro.addEventListener("change", changeProgressBar);

function nextsong(){
  if(songindex <song.length-1){
  songindex =songindex + 1;
  track.src = song[songindex];
  document.getElementById('title').innerHTML =song[songindex] ;
  play();
  }
  else{
    alert("sorry! we have only this much song available in our library..")
  }
  document.getElementById("number").innerHTML = (songindex+1) + " OF song "+ song.length;
  console.log(songindex);

  activerm(songindex - 1);
  active(songindex);
}
function previoussong(){
  songindex =songindex - 1;
  track.src = song[songindex];
  document.getElementById('title').innerHTML =song[songindex] ;
  play();
  document.getElementById("number").innerHTML = (songindex+1) + " OF song "+ song.length;
  console.log(songindex);

  activerm(songindex + 1);
  active(songindex);
}
document.getElementById('track').addEventListener('ended',nextsong);


// show name of song
// console.log(song.length);
let letters=[];
var li = document.createElement("li");
ullist.appendChild(li);
for (let i = 0; i < song.length; i++) {
  li.appendChild(document.createTextNode(song[i]));

    letters += `<li class='p-1 ps-0 overflow-auto h6'><a class='dropdown-item ps-1' id=${i} onclick="songply(this.id)">` + song[i] + "</a></li><hr>";
 
  }
  document.getElementById("ullist").innerHTML = letters;
  document.getElementById(songindex).classList.toggle('active');
  document.getElementById("number").innerHTML = (songindex+1) + " Of Song "+ song.length;

// active class
function active(songindex){
  document.getElementById(songindex).classList.add('active');
}
function activerm(id){
  document.getElementById(id).classList.remove('active');
}
function songply(id){
    console.log(id);
    track.src = song[id];
    document.getElementById('title').innerHTML =song[id] ;
    play();
    
    for (let index = 0; index < song.length; index++) {
      document.getElementById(index).classList.remove('active');
    } active(id);
  document.getElementById("number").innerHTML =(++id) + " Of Song "+ song.length;
}
