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