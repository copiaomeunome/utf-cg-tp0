let start_button = document.getElementById("start");
let guide_popup = document.getElementById("guide_popup");
let guide = document.getElementById("guide");
start_button.addEventListener("click",()=>{
    const audio = document.getElementById("music");
    audio.play();
    guide.style.display = "none";
    guide_popup.style.display = "none";
});
