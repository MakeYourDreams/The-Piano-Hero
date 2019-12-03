let myGame = "";

window.onload = function() {
    // document.getElementById("start-button").onclick = function() {
        startGame();
    // };

    function startGame() {
         myGame = new Game();
        myGame.init();
    }
};
