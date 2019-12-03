class Obstacle extends Component {
    constructor(game, oNote, oDelta, oVelocity) {
        super(game);
        this.game = game;
        
        this.x = 95, this.kColor = "#0F9D58";
        if (oNote >= 16)
        this.x = 253;
        if (oNote >= 18)
        this.x = 358;
        if (oNote >= 21)
        this.x = 465;
        if (oNote >= 22)
        this.x = 566;
        if (oNote >= 25)
        this.x = 671;  

        if (oNote >= 440) this.x = 95, this.pKey = 49, this.kColor = "#0F9D58";  
        if (oNote >= 494) this.x = 202, this.pKey = 50, this.kColor = "#DB4437";  
        if (oNote >= 523) this.x = 306, this.pKey = 51, this.kColor = "#F4B400";  
        if (oNote >= 587) this.x = 410, this.pKey = 32, this.kColor = "#FFF";  
        if (oNote >= 659) this.x = 515, this.pKey = 37, this.kColor = "#4285F4";  
        if (oNote >= 698) this.x = 619, this.pKey = 38, this.kColor = "rgb(255, 136, 0)";  
        if (oNote >= 783.9) this.x = 729, this.pKey = 39, this.kColor = "rgb(187, 0, 244)";   
        if (oNote >= 880) this.x = 95, this.pKey = 49, this.kColor = "#0F9D58";                

        this.y = -50;
        this.width = 100;
        this.height = 150;
        this.img = new Image();
        this.oNote = oNote;
        this.oDelta = oDelta;
        this.oVelocity = oVelocity;
    }

    draw() {
        // this.img.src = "./images/redCar.png";
        // this.game.ctx.drawImage(
        //     this.img,
        //     this.x,
        //     this.y,
        //     this.width,
        //     this.height
        // );
        this.game.ctx.beginPath();
this.game.ctx.arc(this.x, this.y, 26, 0, 1 * Math.PI);
this.game.ctx.fillStyle = this.kColor;
this.game.ctx.fill()
this.game.ctx.lineWidth = 2;
this.game.ctx.stroke();
    }

    move() {
        // if (Math.floor(Math.random() * 20) % 3 === 0) {
            this.y += 2;
        // }
    }
}
