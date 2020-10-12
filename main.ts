basic.forever(function () {
    led.plot(0, 0)
    led.plot(4, 4)
    led.plot(4, 0)
    led.plot(0, 4)
    led.plot(2, 2)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
})
