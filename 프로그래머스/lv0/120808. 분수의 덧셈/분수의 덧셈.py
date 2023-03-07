import math

def solution(denum1, num1, denum2, num2):
    top = denum1 * num2 + denum2 * num1
    bottom = num1 * num2
    n = math.gcd(top, bottom)
    if n == 1:
        return [top, bottom]
    else:
        return [top / n, bottom / n]