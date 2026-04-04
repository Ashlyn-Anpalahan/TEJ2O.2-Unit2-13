/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ashlyn
 * Created on: Apr 2026
 * This program will countdown from 4 to 0 and light up the corresponding neopixels. 
*/

// variables
const strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
let countdown = 4 

basic.showIcon(IconNames.Happy)

// button a 
input.onButtonPressed(Button.A, function() {
    while (countdown >= 0) {
    strip.clear()
    
        // show neopixels
        strip.range(0, countdown).showColor(neopixel.colors(NeoPixelColors.Violet))
        basic.showNumber(countdown)

        basic.pause(1000)

        // change number 
        countdown = countdown - 1
    }

    strip.clear()
    strip.show()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
