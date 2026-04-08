/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ashlyn
 * Created on: Apr 2026
 * This program will countdown from 4 to 0 and light up the corresponding neopixels. 
*/

// variables
const strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
let counter = 0 

basic.showIcon(IconNames.Happy)

// button a 
input.onButtonPressed(Button.A, function() {
    while (counter <= 4) {
    strip.clear()
    
    // display number
    let displayValue = 4 - counter

        // show neopixels
        strip.range(0, displayValue).showColor(neopixel.colors(NeoPixelColors.Violet))
        basic.showNumber(displayValue)

        basic.pause(1000)

        // change number 
        counter = counter + 1
    }

    strip.clear()
    strip.show()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
