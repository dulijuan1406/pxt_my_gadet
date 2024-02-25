input.onGesture(Gesture.EightG, function () {
    radio.sendNumber(54188)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("how are you?")
    basic.showString("")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("sb")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Asleep)
    basic.showArrow(ArrowNames.South)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("goodbiy")
})
basic.showNumber(985211)
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
})
