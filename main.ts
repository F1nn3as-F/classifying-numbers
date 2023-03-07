input.onButtonPressed(Button.A, function () {
    Number2 += 1
})
input.onButtonPressed(Button.AB, function () {
    if (Number2 < 0) {
        basic.showString("NEGATIVE ")
        basic.showNumber(Number2)
    } else if (Number2 > 0) {
        basic.showString("POSITIVE")
        basic.showNumber(Number2)
    } else if (Number2 == 0) {
        basic.showString("ZERO")
        basic.showNumber(Number2)
    }
})
input.onButtonPressed(Button.B, function () {
    Number2 += -1
})
let Number2 = 0
Number2 = 0
