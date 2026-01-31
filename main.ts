input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        basic.clearScreen()
        basic.showString("BRANE")
        basic.pause(100)
        basic.showString("BELEV")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.pause(1000)
    music.play(music.stringPlayable("C5 C5 C5 E F G F - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- - F G A G - - ", 120), music.PlaybackMode.UntilDone)
    basic.pause(100)
    music.play(music.stringPlayable("G F E E F G F - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A F G A F G - - ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
})
basic.forever(function () {
    basic.pause(1000)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(500)
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showString("YOD")
        basic.pause(100)
        basic.showString("JOEN")
    }
})
