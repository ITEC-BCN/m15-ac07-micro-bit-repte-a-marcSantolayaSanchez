MOVIMIENTO = 0

def on_gesture_shake():
    global MOVIMIENTO
    MOVIMIENTO = randint(1, 3)
    if MOVIMIENTO == 1:
        basic.show_icon(IconNames.SCISSORS)
    if MOVIMIENTO == 2:
        basic.show_leds("""
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            """)
    if MOVIMIENTO == 3:
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
