let avalami = ""
function csináljValamit (szöveg: string, logikai: boolean, image: Image) {
	
}
basic.forever(function () {
    if (avalami.length > 10) {
        music.playMelody("C5 B A - - - - - ", 1600)
    }
})
basic.forever(function () {
    avalami = "" + avalami + " "
    basic.pause(500)
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
})
