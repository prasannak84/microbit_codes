let counter = 0
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)

basic.forever(function () {
    serial.writeLine("Ping " + counter + " - Hello from Javascript !\n")
    serial.writeLine("")
    counter += 1
    basic.pause(1000)
})
