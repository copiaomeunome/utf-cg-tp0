DIRECTION = {
    DOWN: {x:0,y:1,moving:false},
    UP: {x:0,y:-1,moving:false},
    LEFT: {x:-1,y:0,moving:false},
    RIGHT: {x:1,y:0,moving:false}
}
class Player{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.move_speed = 10;
        this.img = document.getElementById("img_prota");
    }
    update(){
        this.img.style.left= this.x + "px";
        this.img.style.top= this.y + "px";
    }
    move() {
        let dx = 0;
        let dy = 0;
        const page_width = document.documentElement.scrollWidth;
        const page_height = document.documentElement.scrollHeight;
        const img_width = this.img.offsetWidth;
        const img_height = this.img.offsetHeight;
        if (DIRECTION.UP.moving && this.y>0) {
            dx += DIRECTION.UP.x;
            dy += DIRECTION.UP.y;
        }
        if (DIRECTION.DOWN.moving && this.y<page_height && this.y < page_height - img_height) {
            dx += DIRECTION.DOWN.x;
            dy += DIRECTION.DOWN.y;
        }
        if (DIRECTION.LEFT.moving && this.x>0) {
            dx += DIRECTION.LEFT.x;
            dy += DIRECTION.LEFT.y;
        }
        if (DIRECTION.RIGHT.moving && this.x<page_height && this.x < page_width - img_width) {
            dx += DIRECTION.RIGHT.x;
            dy += DIRECTION.RIGHT.y;
        }
        this.x += this.move_speed * dx;
        this.y += this.move_speed * dy;
        this.update();
    }
}
let player = new Player();
document.addEventListener("keydown", function(event) {
    if(event.key=='w') DIRECTION.UP.moving = true;
    if(event.key=='a') DIRECTION.LEFT.moving = true;
    if(event.key=='d') DIRECTION.RIGHT.moving = true;
    if(event.key=='s') DIRECTION.DOWN.moving = true;
});
document.addEventListener("keyup", function(event) {
    if(event.key=='w') DIRECTION.UP.moving = false;
    if(event.key=='a') DIRECTION.LEFT.moving = false;
    if(event.key=='d') DIRECTION.RIGHT.moving = false;
    if(event.key=='s') DIRECTION.DOWN.moving = false;
});
setInterval(()=>{player.move()},10);