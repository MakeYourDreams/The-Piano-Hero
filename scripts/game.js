var keyPushed = true;
var keys = {};
window.onkeyup = function(e) {  keys[e.keyCode] = false; }  
window.onkeydown = function(e) { keys = {}; keys[e.keyCode] = true; e.preventDefault(); } //set keys to empty variable to only allow 1 key down event at a time

// setInterval(() => {console.log(keys[65])}, 1000)

class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        // this.car = new Player(this, 200, 550, 100, 150);
        this.obstacles = [];
        this.background = undefined;
        this.score = 0;
        this.backgroundImg = new Image();
        this.x = undefined;
        this.y = undefined;
        this.width = 820;
        this.height = 570;
    }

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = 0;
        this.y = 0;
        this.start();
        // this.createObstacles();
    }

    start() {
        this.drawBackground();
        this.drawMainCharacters();
        setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawMainCharacters();
            // this.car.move();
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].move();
                this.obstacles[i].draw();
                // this.car.crashCollision(this.obstacles[i]);
                if (this.obstacles[i].y > 600) {
                    this.obstacles.splice(i, 1);
                }
                if ((keys[this.obstacles[i].pKey])) {
                    document.getElementById(this.obstacles[i].noteIndex).classList.add("active");
                }else if (this.obstacles[i].noteIndex !== undefined){
                    document.getElementById(this.obstacles[i].noteIndex).classList.remove("active")
                }
                // triggerrelease doesn't work on time with toneJS, need to use triggerattack instead.
                // we need to only allow note to be attack played once. find exact time it takes for note to go down to y axis and add to the release timeout by this amount.
                if ((this.obstacles[i].y >= 565) && (this.obstacles[i].y <= 585) && (keys[this.obstacles[i].pKey])) {
                   
                    if ((this.obstacles[i].oNote !== undefined) && (keyPushed == true)){
                        document.getElementById(this.obstacles[i].noteIndex).style = "box-shadow: 10px 10px 10px rgba(58, 58, 58, 0.1), 0px 2px 10px " + this.obstacles[i].kColor + ";"
                        setTimeout(() => { document.getElementById(this.obstacles[i].noteIndex).style = "box-shadow: ;", keyPushed = true; }, (1000 / 60) * 5); 
                        
                        var subNum = 1
                        if ((this.obstacles[i].noteIndex)[1] == 1) var subNum = -6
                        document.getElementById("n" + ((this.obstacles[i].noteIndex)[1]-subNum)).style = "box-shadow: ;"
                        
                    keyPushed = false;
                    }
                   
                    // console.log("pushed" + Date.now())
                    var randWhite = Math.floor(Math.random() * 55) + 200
                    this.obstacles[i].kColor = "rgb(" + randWhite + "," + randWhite + "," + randWhite + ")" 
                    
                    // console.log(this.obstacles[i].noteIndex)
                    // synth.triggerRelease(this.obstacles[i].oNote, ("+" + 0))
                    synth.triggerAttack(this.obstacles[i].oNote, undefined, this.obstacles[i].oVelocity) //Delta no longer relevant for attack.
                    this.obstacles[i].oNote = undefined;
                    // synth.triggerRelease(this.obstacles[i].oNote, ("+" + this.obstacles[i].oDelta))
                        // console.log("oNote == ", this.obstacles[i].oNote);
                        // keys[this.obstacles[i].pKey] = false;
                }
            }
        }, 1000 / 60);
    }

    createObstacles(oNote, oDelta, oVelocity) {
        // if (Math.floor(Math.random() * 25) % 2 === 0) { 
            this.obstacles.push(new Obstacle(this, oNote, oDelta, oVelocity));
            // console.log("created" + Date.now())
           
        // }

        // setTimeout(() => {
        //     this.createObstacles();
        // }, 1000);
    }

    drawBackground() {
        this.backgroundImg.src = "./images/7rows.jpg";
        this.ctx.drawImage(
            this.backgroundImg,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawMainCharacters() {
        // this.car.drawComponent("./images/car.png");
    }
}
