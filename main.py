MOVIMIENTO = 0

def on_button_pressed_a():
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global MOVIMIENTO
    MOVIMIENTO = randint(1, 3)
    if MOVIMIENTO == 1:
        pass
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

def on_button_pressed_ab():
    basic.show_icon(IconNames.SCISSORS)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_leds("""
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)
