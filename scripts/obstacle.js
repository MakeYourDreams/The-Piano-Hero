class Obstacle extends Component {
    constructor(game, oNote, oDelta, oVelocity) {
        super(game);
        this.game = game;
        
        this.x = 48;
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

        if (oNote >= 440) this.x = 48, this.pKey = 49;  
        if (oNote >= 494) this.x = 151, this.pKey = 50;  
        if (oNote >= 523) this.x = 253, this.pKey = 51;  
        if (oNote >= 587) this.x = 358, this.pKey = 37;  
        if (oNote >= 659) this.x = 465, this.pKey = 38;  
        if (oNote >= 698) this.x = 566, this.pKey = 40;  
        if (oNote >= 783.9) this.x = 671, this.pKey = 39;   
        if (oNote >= 880) this.x = 48, this.pKey = 49;                

        this.y = -50;
        this.width = 100;
        this.height = 150;
        this.img = new Image();
        this.oNote = oNote;
        this.oDelta = oDelta;
        this.oVelocity = oVelocity;
    }

    draw() {
        this.img.src = "./images/redCar.png";
        this.game.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    move() {
        // if (Math.floor(Math.random() * 20) % 3 === 0) {
            this.y += 2;
        // }
    }
}
