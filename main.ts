input.onButtonPressed(Button.A, function () {
    MessPin = !(MessPin)
})
let SIGNAL = 0
let MessPin = false
let LEDAnzeige = TM1637.create(
DigitalPin.C16,
DigitalPin.C17,
7,
4
)
MessPin = true
basic.forever(function () {
    if (MessPin) {
        SIGNAL = pins.analogReadPin(AnalogPin.P1)
    } else {
        SIGNAL = pins.analogReadPin(AnalogPin.P2)
    }
    basic.pause(100)
})
basic.forever(function () {
    LEDAnzeige.showNumber(SIGNAL)
})
