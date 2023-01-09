input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    linebeacon.start("016974e615")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    linebeacon.startWithDeviceMessage(
    "016974e615",
    "1a2b3c4d5e6f70809010a0b0c0"
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    linebeacon.stop()
})
basic.showIcon(IconNames.StickFigure)
