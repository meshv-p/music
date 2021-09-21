console.log("hey");
//set variable
let track  = document.getElementById('track'),
    play = document.getElementById('play'),   
    pause = document.getElementById('pause'),   
    pic = document.getElementById('pic'),   
    title = document.getElementById('title');
let songindex = 0;
//collection of songs..
const song = [
                ["Let Me Love You - DJ Snake  Justin Bieber (128kbps)-(MusicVilla.In).mp3","Let Me Love You - DJ Snake"],
                ["Live My Life (feat. Justin Bieber)-(DJmaza.in).mp3","Live My Life (feat. Justin Bieber)"],
                ["Love_Me-Justin_Bieber[www.Mp3MaD.Com](1).mp3","Love_Me-Justin_Bieber"],
                ["https://res.cloudinary.com/cbanlawi/video/upload/v1614140796/HarryStyles-WatermelonSugar_f5471p.mp3","HarryStyles-WatermelonSugar"],
                ["https://res.cloudinary.com/cbanlawi/video/upload/v1614144520/Justin_Bieber-Yummy_vercib.mp3","Justin_Bieber-Yummy"],
                ["https://res.cloudinary.com/cbanlawi/video/upload/v1614186705/Loud_Luxury_ft._Brando_-_Body_fm7cdr.mp3","Loud_Luxury_ft._Brando"]           
            ];

            console.log(song);
       title.innerHTML = song[songindex][1];

//music play - pause
function playmusic(){
    if(track.paused){
      track.play();
       pause.style.display = "block";
       play.style.display = "none";
      //  title.innerHTML = song[songindex][1];
     
       pic.classList.add('go'); 
        console.log(songindex);
      //  activerm();
       active(songindex);
    }
    else{
        pause.style.display = "none";
        play.style.display = "block";
        track.pause();
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
        track.src = song[songindex][0];
        title.innerHTML = song[songindex][1];

        playmusic();
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
  track.src = song[songindex][0];
  title.innerHTML = song[songindex][1];
  playmusic();
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
for (let i = 0; i < Object.keys(song).length; i++) {
  li.appendChild(document.createTextNode(song[i][1]));

    letters += `<li class='p-1 ps-0 overflow-auto h6'><span class='cursor-pointer dropdown-item ps-1' id=${i} onclick="songply(this.id)">` + song[i][1] + "</span></li><hr>";
 
  }
  document.getElementById("ullist").innerHTML = letters;
//   document.getElementById(songindex).classList.toggle('active');
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
    // songindex = id;
    track.src = song[id][0];
    title.innerHTML = song[id][1];
    console.log(song[id][1]);
    playmusic();
    
    for (let index = 0; index < song.length; index++) {
      document.getElementById(index).classList.remove('active');
    } active(id);
  document.getElementById("number").innerHTML =(++id) + " Of Song "+ song.length;
}

function handleFiles(event) {
    var files = event.target.files;
    // $("#track").attr("src", URL.createObjectURL(files[0]));
    
    track.src = URL.createObjectURL(files[0]);
    
}

document.getElementById("formFileSm").addEventListener("change", handleFiles, false);


function Uploadmusic(){
  document.getElementById("track").load();

  var name = document.getElementById('formFileSm').value;
    var d = name.slice('12','35');
    console.log(d);
    title.innerHTML = d;
    playmusic();
}
