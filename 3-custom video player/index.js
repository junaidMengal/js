const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timeStamp = document.getElementById('timestamp')

function toggleVideo(){
    if(video.paused){
        video.play()
    }else {
        video.pause()
    }
}

function updateIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>'
    }else{
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>'
    }
}

function stopVideo(){
    video.currentTime = 0
    video.pause()
}

function updateProgress(){
    progress.value = (video.currentTime/video.duration)*100

    // set time
    let mins = Math.floor(video.currentTime/60)
    if(mins < 10)
    mins = '0' + String(mins)

    let secs = Math.floor(video.currentTime % 60)
    if(secs < 10)
    secs = '0' + String(secs)

    timeStamp.innerHTML = `${mins}:${secs}`
}

function setPregress(){
    video.currentTime = (+progress.value*video.duration)/100
}

// events

video.addEventListener('click', toggleVideo);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);
play.addEventListener('click', toggleVideo);
stop.addEventListener('click',stopVideo)

video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('change', setPregress);