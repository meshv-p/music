console.log("hey");

function play(){
    if(document.getElementById('pause').style.display != "block"){
        document.getElementById('pause').style.display = "block";
        document.getElementById('play').style.display = "none";
       document.getElementById('track').play();
     

    }
    else{
        document.getElementById('pause').style.display = "none";
        document.getElementById('play').style.display = "block";
        document.getElementById('track').pause();
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
  end.textContent = formatTime(track.duration);
}

setInterval(progressValue, 500);
function changeProgressBar() {
    track.currentTime = pro.value;
  }
  
pro.addEventListener("click", changeProgressBar);
