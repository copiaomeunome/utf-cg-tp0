let DIRECTION = {
    DOWN: {x:0,y:1,moving:false},
    UP: {x:0,y:-1,moving:false},
    LEFT: {x:-1,y:0,moving:false},
    RIGHT: {x:1,y:0,moving:false}
}
let ANIMATION = {
    DEFAULT:{left:0,top:80,width:112,height:80,frames:1},
    DOWN:{left:0,top:160,width:112,height:80,frames:4},
    UP:{left:0,top:400,width:112,height:80,frames:4},
    LEFT:{left:0,top:320,width:112,height:80,frames:4},
    RIGHT:{left:0,top:240,width:112,height:80,frames:4}
}
class Player{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.move_speed = 5;
        this.img = document.getElementById("img_prota");
        this.animation = "default";
        this.last_animation = Date.now();
        this.animation_speed = 200;
        this.frame = 0;
    }
    update(){
        this.img.style.left= this.x + "px";
        this.img.style.top= this.y + "px";
    }
    animateWalk() {
        let now = Date.now();
        if((now-this.last_animation) >= this.animation_speed) {
            if(this.animation=="walk_down"){
                this.img.style.width = ANIMATION.DOWN.width + "px";
                this.img.style.height = ANIMATION.DOWN.height + "px";
                this.img.style.backgroundPosition =`-${ANIMATION.DOWN.width*this.frame}px -${ANIMATION.DOWN.top}px`;
                this.frame++;
                if(this.frame>=ANIMATION.DOWN.frames) this.frame = 0;
            }
            if(this.animation=="walk_up"){
                this.img.style.width = ANIMATION.UP.width + "px";
                this.img.style.height = ANIMATION.UP.height + "px";
                this.img.style.backgroundPosition =`-${ANIMATION.UP.width*this.frame}px -${ANIMATION.UP.top}px`;
                this.frame++;
                if(this.frame>=ANIMATION.UP.frames) this.frame = 0;
            }
            if(this.animation=="walk_left"){
                this.img.style.width = ANIMATION.LEFT.width + "px";
                this.img.style.height = ANIMATION.LEFT.height + "px";
                this.img.style.backgroundPosition =`-${ANIMATION.LEFT.width*this.frame}px -${ANIMATION.LEFT.top}px`;
                this.frame++;
                if(this.frame>=ANIMATION.LEFT.frames) this.frame = 0;
            }
            if(this.animation=="walk_right"){
                this.img.style.width = ANIMATION.RIGHT.width + "px";
                this.img.style.height = ANIMATION.RIGHT.height + "px";
                this.img.style.backgroundPosition =`-${ANIMATION.RIGHT.width*this.frame}px -${ANIMATION.RIGHT.top}px`;
                this.frame++;
                if(this.frame>=ANIMATION.RIGHT.frames) this.frame = 0;
            }
            if(this.animation=="default"){
                this.img.style.width = ANIMATION.DEFAULT.width + "px";
                this.img.style.height = ANIMATION.DEFAULT.height + "px";
                this.img.style.backgroundPosition =`-${ANIMATION.DEFAULT.width*this.frame}px -${ANIMATION.DEFAULT.top}px`;
                this.frame++;
                if(this.frame>=ANIMATION.DEFAULT.frames) this.frame = 0;
            }
            this.last_animation = now;
        }
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
            if(this.animation!="walk_up") this.frame = 0;
            this.animation = "walk_up";
        }
        if (DIRECTION.DOWN.moving && this.y<page_height && this.y < page_height - img_height) {
            dx += DIRECTION.DOWN.x;
            dy += DIRECTION.DOWN.y;
            if(this.animation!="walk_down") this.frame = 0;
            this.animation = "walk_down";
        }
        if (DIRECTION.LEFT.moving && this.x>0) {
            dx += DIRECTION.LEFT.x;
            dy += DIRECTION.LEFT.y;
            if(this.animation!="walk_left") this.frame = 0;
            this.animation = "walk_left";
        }
        if (DIRECTION.RIGHT.moving && this.x<page_height && this.x < page_width - img_width) {
            dx += DIRECTION.RIGHT.x;
            dy += DIRECTION.RIGHT.y;
            if(this.animation!="walk_right") this.frame = 0;
            this.animation = "walk_right";
        }
        this.x += this.move_speed * dx;
        this.y += this.move_speed * dy;
        if(!(dx!=0 || dy!=0)){
            this.frame = 0;
            this.animation = "default";
        }
        this.animateWalk();
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