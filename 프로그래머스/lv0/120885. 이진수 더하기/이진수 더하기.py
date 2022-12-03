def to_binary(number):
    answer = ''
    value = number
    while value > 1:
        mod = value % 2
        value = value // 2
        answer += str(mod)
    answer += str(value)
    return answer[::-1]


def to_decimal(number):
    answer = 0
    pivot = 1
    for n in str(number)[::-1]:
        if n == '1':
            answer += int(n)*pivot
        pivot *= 2
    return answer


def solution(bin1, bin2):
    result = to_decimal(bin1) + to_decimal(bin2)
    return to_binary(result)