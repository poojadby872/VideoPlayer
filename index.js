
const control = document.querySelector(".control")
const video = control.querySelector(".viewer")
const Ranges = control.querySelectorAll(".slider")

const play = control.querySelector(".player_control")

const progress = control.querySelector(".progress")
const progressBar = control.querySelector('.progress__filled')
const toggle = control.querySelector('.toggle')
const skipButtons = control.querySelectorAll('[data-skip]')

function togglePlay(e){
   
    const method = video.paused? 'play' : 'pause'
    video[method]()
    
}
function updateButton(){
  const icon = this.paused?  '▶️': '⏸'
  toggle.textContent = icon;

}


function skip(){
    
    console.log(this.dataset)
    video.currentTime += parseFloat(this.dataset.skip)
    
}

function handleRange(){
    video[this.name]= this.value
    console.log(this.name)
    console.log(this.value)
}

function handleProgress(e){
    const percent = (video.currentTime/video.duration)*100
    progressBar.style.flexBasis =`${percent}%`

}
function scrub(e){

   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
   video.currentTime = scrubTime
   
}

video.addEventListener('click',togglePlay)
video.addEventListener('play',updateButton)
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

toggle.addEventListener('click',togglePlay)
skipButtons.forEach(button=>button.addEventListener('click',skip))
Ranges.forEach(Range=>Range.addEventListener('change',handleRange))
Ranges.forEach(Range=>Range.addEventListener('mousemove',handleRange))
let mousedown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e)=> mousedown && scrub(e) );
progress.addEventListener('mousedown',()=>mousedown = true);
progress.addEventListener('mouseup',()=>mousedown = false);











