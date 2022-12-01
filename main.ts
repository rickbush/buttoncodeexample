function Allblink () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P6, 1)
        pins.digitalWritePin(DigitalPin.P7, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P6, 0)
        pins.digitalWritePin(DigitalPin.P7, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(200)
    }
    pins.digitalWritePin(DigitalPin.P7, 0)
}
function BlueBlink () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P6, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P6, 0)
        basic.pause(200)
    }
}
function RedLEDblink () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(200)
    }
}
function GrnLEDblink () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P7, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P7, 0)
        basic.pause(200)
    }
}
led.enable(false)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
RedLEDblink()
GrnLEDblink()
BlueBlink()
Allblink()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        RedLEDblink()
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        GrnLEDblink()
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        BlueBlink()
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        Allblink()
    }
})
