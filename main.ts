input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    linebeacon.start("0f0f0f0f0f")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    linebeacon.startWithDeviceMessage(
    "0f0f0f0f0f",
    "1a2b3c4d5e6f70809010a0b0c0"
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    linebeacon.stop()
})
basic.showIcon(IconNames.Heart)
