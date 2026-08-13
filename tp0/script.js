
document.addEventListener("keydown", function(event) {
    if(event.key=='w') moveUp();
    if(event.key=='a') moveLeft();
    if(event.key=='d') moveRight();
    if(event.key=='s') moveDown();
    if(event.key=='ArrowUp') moveUp();
    if(event.key=='ArrowLeft') moveLeft();
    if(event.key=='ArrowRight') moveRight();
    if(event.key=='ArrowDown') moveDown();
    console.log(event.key);
});
function moveUp(){
    alert("move up");
}
function moveLeft(){
    alert("move left");
}
function moveRight(){
    alert("move right");
}
function moveDown(){
    alert("move down");
}