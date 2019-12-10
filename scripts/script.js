let myGame = "";
var keys = {"32":true,"49":true,"50":true,"51":true,"37":true,"38":true,"39":true}
window.onload = function() {
    // document.getElementById("start-button").onclick = function() {
        startGame();
        // var midiArray = defaultSong;
        // var pullMyHairOutTempoScale = 0.0008928572916666667;
        // var convertedNote = "";
        // var midiDelta = 0;

        // setInterval(() => {
        //     keyPushed = true;
        // }, 1000);
        
          midiArray.forEach( (midiRow, i) => {
    
            // if ((midiRow[1] == "meta") && (midiRow[2] == "81")){
            // 	pullMyHairOutTempoScale = midiRow[3]
                // midiDelta += (midiArray[i+1][0] * pullMyHairOutTempoScale)
            // }
    
            convertedNote = ((Math.pow(2,(((midiRow[2])-69)/12))) * 440) // converts MIDI to HZ frequency. Hell yeah, science!
            convertedNote = Math.round(convertedNote * 100) / 100
            if (midiRow[1] == 144) {
    
                if (midiDelta == 0) midiDelta += 0.1 //prevents infinite sound bug
                // synth.triggerAttack(convertedNote, midiDelta, (midiRow[3] / 127))
                
            // Create the note at the right time. Delta no longer relevant for attack tone.
    
    
            setTimeout((cN, mD, mV) => {
                myGame.createObstacles(cN, mD, mV)
           }, (midiDelta * 1000), convertedNote, midiDelta, (midiRow[3] / 127));
    
            // this is the same as above code			
                // setTimeout((function (i) {
                // 	return function(){
                // 		myGame.createObstacles(i)
                // 	}
                // })(convertedNote), midiDelta * 1000);
                    
                
                // setTimeout(function() { console.log(convertedNote) }, midiDelta * 1000);
    
                
                
                // synth.triggerAttackRelease(convertedNote, midiArray[i][0] * pullMyHairOutTempoScale, midiDelta, 1)
                //https://www.gamedev.net/forums/topic/535653-convert-midi-deltatime-to-milliseconds/
                midiDelta += (midiArray[i+1][0] * pullMyHairOutTempoScale)
    
    
            }
            if (midiRow[1] == 128) {	
                // synth.triggerRelease(convertedNote, ("+" + midiDelta))
    
                setTimeout((cN2) => {
                    synth.triggerRelease(cN2, ("+" + 0))
                    // console.log("released" + " " + cN2 + " " + Date.now())
               }, ((midiDelta * 1000) + 4975), convertedNote);
    
                midiDelta += (midiArray[i+1][0] * pullMyHairOutTempoScale)
            }
            // if (midiRow[1] == 146) {
            // 	if (midiDelta == 0) midiDelta += 0.1 //prevents infinite sound bug
            // 	synth.triggerAttack(convertedNote, midiDelta, (midiRow[3] / 127))
            // 	// synth.triggerAttackRelease(convertedNote, midiArray[i][0] * pullMyHairOutTempoScale, midiDelta, 1)
            // 	//https://www.gamedev.net/forums/topic/535653-convert-midi-deltatime-to-milliseconds/
            // 	midiDelta += (midiArray[i+1][0] * pullMyHairOutTempoScale)
            // }
            // if (midiRow[1] == 130) {	
            // 	synth.triggerRelease(convertedNote, ("+" + midiDelta))
            // 	midiDelta += (midiArray[i+1][0] * pullMyHairOutTempoScale)
            // }
            if ((midiRow[1] == 176) && (midiRow[2] >= 64)) {	
                synth.triggerRelease(convertedNote, ("+" + midiDelta))
                midiDelta += (midiArray[i+1][0] * pullMyHairOutTempoScale)
            }
    
            if ((midiRow[1] == 176) && (midiRow[2] <= 63)) {	
                if (midiDelta == 0) midiDelta += 0.1 //prevents infinite sound bug
                // synth.triggerAttack(convertedNote, midiDelta, (midiRow[3] / 127))
                midiDelta += (midiArray[i+1][0] * pullMyHairOutTempoScale)
            }
            
    
          });
    // };

    function startGame() {
         myGame = new Game();
        myGame.init();
    }
};
