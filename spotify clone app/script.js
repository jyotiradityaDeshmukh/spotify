console.log("Loading...")
// Initialize the Variables
let songIndex = 0
let audioElement = new Audio("happier.mp3")
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementsById('myProgressBar')

let songs = [
    {songName: "salam-e-Ishq", filePath: "happier.mp3", coverPath: ""},
    {songName: "salam-e-Ishq", filePath: "", coverPath: ""},
    {songName: "salam-e-Ishq", filePath: "", coverPath: ""},
    {songName: "salam-e-Ishq", filePath: "", coverPath: ""},
    {songName: "salam-e-Ishq", filePath: "", coverPath: ""},
    {songName: "salam-e-Ishq", filePath: "", coverPath: ""},
    {songName: "salam-e-Ishq", filePath: "", coverPath: ""},
    {songName: "salam-e-Ishq", filePath: "", coverPath: ""},
    {songName: "salam-e-Ishq", filePath: "", coverPath: ""},
    {songName: "salam-e-Ishq", filePath: "", coverPath: ""},
]
// audioElement.play()

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
    }
})

//Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeUpdate')
    // Update  Progress Bar
})