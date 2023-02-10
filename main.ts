let F = 0
let Farenheit = 0
let Reamor = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("Celcius")
})
input.onButtonPressed(Button.AB, function () {
    F = input.temperature() * 1.8
    Farenheit = F + 32
    basic.showNumber(Farenheit)
    basic.showString("Farenheit")
})
input.onButtonPressed(Button.B, function () {
    Reamor = input.temperature() * 0.8
    basic.showNumber(Reamor)
    basic.showString("Reamor")
})
