let MOVIMIENTO = 0
let MovimientoMaquina = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    MOVIMIENTO = randint(1, 3)
    if (MOVIMIENTO == 1) {
        basic.showIcon(IconNames.Scissors)
    }
    if (MOVIMIENTO == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    if (MOVIMIENTO == 3) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    MovimientoMaquina = 3
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    MovimientoMaquina = randint(1, 3)
    if (MovimientoMaquina == 1) {
        basic.showIcon(IconNames.Scissors)
    }
    if (MovimientoMaquina == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    if (MovimientoMaquina == 3) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (MovimientoMaquina == 3) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (MovimientoMaquina > 2) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
})
