document.addEventListener('keydown', function (event) {
    if (event.key === 'd') {
        videoEl = document.querySelectorAll("video")
        videoEl.forEach(video => {
            video.playbackRate += 0.2
        })
    }
    
    if (event.key === 's') {
        videoEl = document.querySelectorAll("video")
        videoEl.forEach(video => {
            video.playbackRate -= 0.2
        })
    }
    
    if (event.key === 'g') {
        videoEl = document.querySelectorAll("video")
        videoEl.forEach(video => {
            video.playbackRate = 1
        })
    }
})
