input.onButtonPressed(Button.A, function () {
    TX = 2
    TY = 2
    led.plot(TX, TY)
    basic.showString("" + (S))
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    led.plot(TX, TY)
    GAME = 1
})
input.onButtonPressed(Button.AB, function () {
    GAME = 0
    music.playMelody("- C - C - C - C5 ", 120)
    basic.showLeds(`
        . # # # .
        # # . . .
        # # # # .
        . # # # .
        . # . # .
        `)
    music.playMelody("G A B C5 A E G C ", 120)
    music.playMelody("F A E C5 C A D G ", 120)
    music.playMelody("C5 G B A F A C5 B ", 120)
    music.playMelody("E B C5 A B G A F ", 120)
    music.playMelody("A C A C G C5 D B ", 120)
    music.playMelody("C F E C D E C C5 ", 120)
    music.playMelody("C5 C5 A A F F D C ", 120)
})
input.onButtonPressed(Button.B, function () {
    GAME = 0
    basic.showNumber(randint(2, 6))
})
let Y = 0
let X = 0
let TY = 0
let TX = 0
let S = 0
let GAME = 0
GAME = 0
S = 0
basic.forever(function () {
    if (1 == GAME) {
        GAME = 1
        if (-100 > input.acceleration(Dimension.X)) {
            X += -1
        }
        if (100 < input.acceleration(Dimension.X)) {
            X += 1
        }
        if (4 < X) {
            X = 4
        }
        if (0 > X) {
            X = 0
        }
        if (-100 > input.acceleration(Dimension.Y)) {
            Y += -1
        }
        if (100 < input.acceleration(Dimension.Y)) {
            Y += 1
        }
        if (4 < Y) {
            Y = 4
        }
        if (0 > Y) {
            Y = 0
        }
        led.plot(X, Y)
        control.waitMicros(200000)
        led.unplot(X, Y)
        if (TY == Y && TX == X) {
            music.playMelody("- - - - F F C5 C5 ", 400)
            X = 0
            Y = 0
            TX = randint(0, 4)
            TY = randint(0, 4)
            led.plot(TX, TY)
            S += 1
        }
    }
})
