bluetooth.onBluetoothConnected(function () {
    Bluetooth = true
    while (Bluetooth == true) {
        basic.showIcon(IconNames.Yes)
    }
})
bluetooth.onBluetoothDisconnected(function () {
    Bluetooth = false
    while (Bluetooth == false) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
    }
})
input.onButtonPressed(Button.A, function () {
    keyboard.sendString("" + keyboard.modifiers(keyboard._Modifier.windows) + "r")
    basic.pause(500)
    keyboard.sendString("cmd")
    keyboard.sendString(keyboard.keys(keyboard._Key.enter))
    basic.pause(2000)
    keyboard.sendString("You have been hacked")
})
input.onButtonPressed(Button.AB, function () {
    keyboard.sendString("" + keyboard.modifiers(keyboard._Modifier.windows) + "x")
    basic.pause(200)
    keyboard.sendString("uu")
})
input.onButtonPressed(Button.B, function () {
    keyboard.sendString("" + keyboard.modifiers(keyboard._Modifier.windows) + "x")
    basic.pause(200)
    keyboard.sendString("us")
})
let Bluetooth = false
keyboard.startKeyboardService()
while (Bluetooth == false) {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
}
