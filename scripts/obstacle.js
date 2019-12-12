class Obstacle extends Component {
    constructor(game, oNote, oDelta, oVelocity) {
        super(game);
        this.game = game;

        //https://pages.mtu.edu/~suits/notefreqs.html
        
        this.x = 95, this.pKey = 49, this.kColor = "#0F9D58", this.noteIndex = "n1";  
      if ((oNote >= 55) && (oNote < 110)){
        if (oNote >= 61) this.x = 202, this.pKey = 50, this.kColor = "#DB4437", this.noteIndex = "n2";  
        if (oNote >= 65) this.x = 306, this.pKey = 51, this.kColor = "#F4B400", this.noteIndex = "n3";  
        if (oNote >= 73) this.x = 410, this.pKey = 32, this.kColor = "#FFF", this.noteIndex = "n4";  
        if (oNote >= 82) this.x = 515, this.pKey = 37, this.kColor = "#4285F4", this.noteIndex = "n5";  
        if (oNote >= 87) this.x = 619, this.pKey = 38, this.kColor = "rgb(255, 136, 0)", this.noteIndex = "n6";  
        if (oNote >= 98) this.x = 729, this.pKey = 39, this.kColor = "rgb(187, 0, 244)", this.noteIndex = "n7"; 
      }

      if ((oNote >= 110) && (oNote < 220)){
        this.x = 95, this.pKey = 49, this.kColor = "#0F9D58", this.noteIndex = "n1";  
        if (oNote >= 123) this.x = 202, this.pKey = 50, this.kColor = "#DB4437", this.noteIndex = "n2";  
        if (oNote >= 130) this.x = 306, this.pKey = 51, this.kColor = "#F4B400", this.noteIndex = "n3";  
        if (oNote >= 146) this.x = 410, this.pKey = 32, this.kColor = "#FFF", this.noteIndex = "n4";  
        if (oNote >= 164) this.x = 515, this.pKey = 37, this.kColor = "#4285F4", this.noteIndex = "n5";  
        if (oNote >= 174) this.x = 619, this.pKey = 38, this.kColor = "rgb(255, 136, 0)", this.noteIndex = "n6";  
        if (oNote >= 195.9) this.x = 729, this.pKey = 39, this.kColor = "rgb(187, 0, 244)", this.noteIndex = "n7"; 
      }
      
      if ((oNote >= 220) && (oNote < 439.9)) {
         this.x = 95, this.pKey = 49, this.kColor = "#0F9D58", this.noteIndex = "n1";  
        if (oNote >= 246) this.x = 202, this.pKey = 50, this.kColor = "#DB4437", this.noteIndex = "n2";  
        if (oNote >= 261) this.x = 306, this.pKey = 51, this.kColor = "#F4B400", this.noteIndex = "n3";  
        if (oNote >= 293) this.x = 410, this.pKey = 32, this.kColor = "#FFF", this.noteIndex = "n4";  
        if (oNote >= 329) this.x = 515, this.pKey = 37, this.kColor = "#4285F4", this.noteIndex = "n5";  
        if (oNote >= 349) this.x = 619, this.pKey = 38, this.kColor = "rgb(255, 136, 0)", this.noteIndex = "n6";  
        if (oNote >= 391.9) this.x = 729, this.pKey = 39, this.kColor = "rgb(187, 0, 244)", this.noteIndex = "n7"; 
      }

      if ((oNote >= 439.9) && (oNote < 879)){
         this.x = 95, this.pKey = 49, this.kColor = "#0F9D58", this.noteIndex = "n1";  
        if (oNote >= 493) this.x = 202, this.pKey = 50, this.kColor = "#DB4437", this.noteIndex = "n2";   
        if (oNote >= 523) this.x = 306, this.pKey = 51, this.kColor = "#F4B400", this.noteIndex = "n3";  
        if (oNote >= 587) this.x = 410, this.pKey = 32, this.kColor = "#FFF", this.noteIndex = "n4";    
        if (oNote >= 659) this.x = 515, this.pKey = 37, this.kColor = "#4285F4", this.noteIndex = "n5";    
        if (oNote >= 698) this.x = 619, this.pKey = 38, this.kColor = "rgb(255, 136, 0)", this.noteIndex = "n6";    
        if (oNote >= 783) this.x = 729, this.pKey = 39, this.kColor = "rgb(187, 0, 244)", this.noteIndex = "n7";   
      }

      if ((oNote >= 879) && (oNote < 1759)) {
         this.x = 95, this.pKey = 49, this.kColor = "#0F9D58", this.noteIndex = "n1"; 
        if (oNote >= 987) this.x = 202, this.pKey = 50, this.kColor = "#DB4437", this.noteIndex = "n2";   
        if (oNote >= 1046) this.x = 306, this.pKey = 51, this.kColor = "#F4B400", this.noteIndex = "n3";  
        if (oNote >= 1174) this.x = 410, this.pKey = 32, this.kColor = "#FFF", this.noteIndex = "n4";    
        if (oNote >= 1318) this.x = 515, this.pKey = 37, this.kColor = "#4285F4", this.noteIndex = "n5";    
        if (oNote >= 1396) this.x = 619, this.pKey = 38, this.kColor = "rgb(255, 136, 0)", this.noteIndex = "n6";    
        if (oNote >= 1567) this.x = 729, this.pKey = 39, this.kColor = "rgb(187, 0, 244)", this.noteIndex = "n7";  
      }

      if (oNote >= 1759){
         this.x = 95, this.pKey = 49, this.kColor = "#0F9D58", this.noteIndex = "n1"; 
        if (oNote >= 1975) this.x = 202, this.pKey = 50, this.kColor = "#DB4437", this.noteIndex = "n2";   
        if (oNote >= 2092) this.x = 306, this.pKey = 51, this.kColor = "#F4B400", this.noteIndex = "n3";  
        if (oNote >= 2349) this.x = 410, this.pKey = 32, this.kColor = "#FFF", this.noteIndex = "n4";    
        if (oNote >= 2636) this.x = 515, this.pKey = 37, this.kColor = "#4285F4", this.noteIndex = "n5";    
        if (oNote >= 2793) this.x = 619, this.pKey = 38, this.kColor = "rgb(255, 136, 0)", this.noteIndex = "n6";    
        if (oNote >= 3135) this.x = 729, this.pKey = 39, this.kColor = "rgb(187, 0, 244)", this.noteIndex = "n7"; 
      }  
        // if (oNote >= 110) this.x = 95, this.pKey = 49, this.kColor = "#0F9D58", this.noteIndex = "n1";  
        // if (oNote >= 131) this.x = 202, this.pKey = 50, this.kColor = "#DB4437", this.noteIndex = "n2";  
        // if (oNote >= 165) this.x = 306, this.pKey = 51, this.kColor = "#F4B400", this.noteIndex = "n3";  
        // if (oNote >= 175) this.x = 410, this.pKey = 32, this.kColor = "#FFF", this.noteIndex = "n4";  
        // if (oNote >= 196) this.x = 515, this.pKey = 37, this.kColor = "#4285F4", this.noteIndex = "n5";  

        // if (oNote >= 220) this.x = 95, this.pKey = 49, this.kColor = "#0F9D58", this.noteIndex = "n1";  
        // if (oNote >= 262) this.x = 202, this.pKey = 50, this.kColor = "#DB4437", this.noteIndex = "n2";  
        // if (oNote >= 294) this.x = 306, this.pKey = 51, this.kColor = "#F4B400", this.noteIndex = "n3";  
        // if (oNote >= 349) this.x = 410, this.pKey = 32, this.kColor = "#FFF", this.noteIndex = "n4";   
        // if (oNote >= 392) this.x = 515, this.pKey = 37, this.kColor = "#4285F4", this.noteIndex = "n5";  

        // if (oNote >= 294) this.x = 410, this.pKey = 32, this.kColor = "#FFF", this.noteIndex = "n4";  
        // if (oNote >= 330) this.x = 515, this.pKey = 37, this.kColor = "#4285F4", this.noteIndex = "n5";  
        // if (oNote >= 349) this.x = 619, this.pKey = 38, this.kColor = "rgb(255, 136, 0)", this.noteIndex = "n6";  
        // if (oNote >= 392) this.x = 729, this.pKey = 39, this.kColor = "rgb(187, 0, 244)", this.noteIndex = "n7"; 

        // if (oNote >= 440) this.x = 95, this.pKey = 49, this.kColor = "#0F9D58", this.noteIndex = "n1";  
        // if (oNote >= 523) this.x = 202, this.pKey = 50, this.kColor = "#DB4437", this.noteIndex = "n2";   
        // if (oNote >= 587) this.x = 306, this.pKey = 51, this.kColor = "#F4B400", this.noteIndex = "n3";  
        // if (oNote >= 659) this.x = 410, this.pKey = 32, this.kColor = "#FFF", this.noteIndex = "n4";    
        // if (oNote >= 783.9) this.x = 515, this.pKey = 37, this.kColor = "#4285F4", this.noteIndex = "n5";    

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
this.game.ctx.arc(this.x, this.y, 27, 1 * Math.PI, 0);
this.game.ctx.fillStyle = this.kColor;
this.game.ctx.fill()
this.game.ctx.lineWidth = 1;
this.game.ctx.stroke();
    }

    move() {
        // if (Math.floor(Math.random() * 20) % 3 === 0) {
            this.y += 2;
        // }
    }
}
