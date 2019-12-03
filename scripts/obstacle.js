class Obstacle extends Component {
    constructor(game, oNote, oDelta, oVelocity) {
        super(game);
        this.game = game;
        this.x = Math.floor(Math.random() * 440 + 30);
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
