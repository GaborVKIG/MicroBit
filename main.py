avalami = ""

def on_forever():
    if len(avalami) > 10:
        music.play_melody("C5 B A - - - - - ", 1600)
basic.forever(on_forever)

def on_forever2():
    global avalami
    avalami = "" + avalami + " "
    basic.pause(500)
    music.play_tone(262, music.beat(BeatFraction.SIXTEENTH))
basic.forever(on_forever2)
