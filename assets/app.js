const playSound = (url) => {
    const audio = new Audio('./assets/timer.mp3');
    audio.volume = 0.1;
    audio.play();
  }



var seconds
,countDiv = document.getElementById('countdown')
,secondPass
,countdown;

function warn1() {
    alert("Time expired!");
        white();
}
function white(){
    document.getElementById("thebody").style.background = "var(--white)";
}

function warn() {
    document.getElementById("hiden").style.visibility = "visible";
}
function hid() {
    document.getElementById("hiden").style.visibility = "hidden";
    restart();
}


function blackout(){
    document.getElementById("thebody").style.background = "var(--background2)";
}

function notify(){
    let permission = Notification.permission;
    if(permission === "granted") {
       showNotification();
    } else if(permission === "default"){
       requestAndShowPermission();
    } else {
      alert("Use normal alert");
    }
    function showNotification() {
       if(document.visibilityState === "visible"){
           return;
       }
       var title = "JavaScript Jeep";
       icon = "image-url"
       var body = "Message to be displayed";
       var notification = new Notification('Title', { body, icon });
       notification.onclick = () => { 
              notification.close();
              window.parent.focus();
       }
    }
    function requestAndShowPermission() {
       Notification.requestPermission(function (permission) {
          if (permission === "granted") {
                showNotification();
          }
       });
    }
}


function start1(){
    seconds = 3120;
    document.getElementById("countdown").innerHTML=("Work Mode")
    document.getElementById("countdown").style.color = "red";
    document.getElementById("thebody").style.background = "brown";
    document.getElementById("start1").style.right  = "10px";
    document.getElementById("start2").style.visibility = "hidden";
    document.getElementById("break").style.visibility = "hidden";

    countdown = setInterval(function(){
    "use strict";
    secondPass();
    }, 1000);

    function secondPass(){
        "use strict";
        var minute = Math.floor(seconds / 60),
        remSeconds = seconds % 60;


        if(remSeconds < 10){
            remSeconds = "0" + remSeconds;
        }

        if(minute < 10){
            minute = "0" + minute;
        }
        countDiv.innerHTML = minute + " : " + remSeconds;

        if (seconds<2) {
            blackout();
        }
        if(seconds > 0){
            seconds--;
        }
        else{
            clearInterval(countdown)
            countDiv.innerHTML = "Done"
            playSound()
            warn();
        }
    }
}

function start2(){
    seconds = 1020;
    document.getElementById("countdown").innerHTML=("See ya")
    document.getElementById("countdown").style.color = "green";
    document.getElementById("thebody").style.background = "limegreen";
    document.getElementById("start2").style.right  = "10px";
    document.getElementById("start1").style.visibility = "hidden";
    document.getElementById("break").style.visibility = "hidden";

    countdown = setInterval(function(){
    "use strict";
    secondPass();
    }, 1000);

    function secondPass(){
        "use strict";
        var minute = Math.floor(seconds / 60),
        remSeconds = seconds % 60;


        if(remSeconds < 10){
            remSeconds = "0" + remSeconds;
        }

        if(minute < 10){
            minute = "0" + minute;
        }
        countDiv.innerHTML = minute + " : " + remSeconds;

        if (seconds<2) {
            blackout();
        }
        if(seconds > 0){
            seconds--;
        }
        else{
            clearInterval(countdown)
            countDiv.innerHTML = "Done"
            playSound()
            warn();
        }
    }
}

function custom(){
    var seconds
    ,countDiv = document.getElementById('countdown')
    ,secondPass
    ,countdown;

    seconds = prompt("enter time by seconds");
    countdown = setInterval(function(){
    "use strict";

    secondPass();
    }, 1000);
    document.getElementById("countdown").innerHTML=("Starting!")
    document.getElementById("countdown").style.color = "blue";
    document.getElementById("thebody").style.background = "skyblue";
    document.getElementById("break").style.right  = "10px";
    document.getElementById("start1").style.visibility = "hidden";
    document.getElementById("start2").style.visibility = "hidden";

    function secondPass(){
        "use strict";
        var minute = Math.floor(seconds / 60),
        remSeconds = seconds % 60;

        if(remSeconds < 10){
            remSeconds = "0" + remSeconds;
        }

        if(minute < 10){
            minute = "0" + minute;
        }
        countDiv.innerHTML = minute + " : " + remSeconds;

        if (seconds<2) {
            blackout();
        }
        if(seconds > 0){
            seconds--;
        }
        else{
        clearInterval(countdown)
        countDiv.innerHTML = "Done"
        playSound()
        warn();
    }
    }
}

function restart(){
    window.location.reload()
}
