from collections import deque


def solution(numbers, direction):
    numbers_deque = deque(numbers)
    if direction == "right":
        numbers_deque.rotate(1)
    elif direction == "left":
        numbers_deque.rotate(-1)
    return list(numbers_deque)