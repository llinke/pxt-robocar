let pinLEDsVorne = 0
function LEDsVorneRGB (rot: number, gruen: number, blau: number) {
    pinLEDsVorne = 67
    PCA9685.reset(pinLEDsVorne)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 100 - rot, pinLEDsVorne)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 100 - gruen, pinLEDsVorne)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 100 - blau, pinLEDsVorne)
}
