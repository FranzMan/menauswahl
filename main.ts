input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        x += -1
    } else {
        if (y > 0) {
            x = 4
            y += -1
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            x = 4
            y = 4
        }
    }
    basic.clearScreen()
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    if (x <= 3) {
        x += 1
    } else {
        if (y <= 3) {
            x = 0
            y += 1
        } else {
            x = 0
            y = 0
        }
    }
    basic.clearScreen()
    led.plot(x, y)
})
let y = 0
let x = 0
x = 2
y = 2
led.plot(x, y)
