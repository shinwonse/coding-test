def solution(food):
    left = ''
    for i in range(1, len(food)):
        possible = food[i] // 2
        for j in range(possible):
            left += str(i)
    right = ''.join(reversed(left))

    return left + str(0) + right