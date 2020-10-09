input.onButtonPressed(Button.A, function () {
    music.stopMelody(MelodyStopOptions.Background)
    basic.showLeds(`
        . # . # .
        . . . . .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(5000)
    music.playMelody("C5 B C5 A C5 B G F ", 104)
    basic.clearScreen()
    basic.showString("I'm happy now!")
    music.setVolume(50)
})
input.onButtonPressed(Button.AB, function () {
    music.stopMelody(MelodyStopOptions.Background)
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showString("...")
})
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.Background)
    music.setVolume(50)
    basic.showLeds(`
        . . . # .
        # . . . .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.pause(5000)
    music.playMelody("E D C E D C E C ", 80)
    basic.clearScreen()
    basic.showString("I'm sad now..")
})
input.onGesture(Gesture.Shake, function () {
    music.stopMelody(MelodyStopOptions.Background)
    music.setVolume(50)
    basic.showString("Heres Some Music")
    music.playMelody("C5 B A G C5 B A G ", 120)
    music.playMelody("C5 B A G C5 B A G ", 110)
    music.playMelody("C5 B A G C5 B A G ", 90)
    music.playMelody("C5 B A G C5 B A G ", 80)
})
music.setVolume(50)
music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.ForeverInBackground)
basic.showString("Hello, I am FidgetBot")
