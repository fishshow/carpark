OLED.init(128, 64)
let strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
basic.forever(function () {
    OLED.clear()
    OLED.writeNumNewLine(Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_mm, DigitalPin.P2))
    if (Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_mm, DigitalPin.P2) <= 71) {
        neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB).showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB).showColor(neopixel.colors(NeoPixelColors.Green))
    }
    basic.pause(500)
})
