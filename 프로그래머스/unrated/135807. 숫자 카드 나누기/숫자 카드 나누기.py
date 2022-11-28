from math import gcd


def get_gcd(arr):
    g = arr[0]
    for i in range(1,len(arr)):
        g = gcd(g, arr[i])
    return g
    

def solution(arrayA, arrayB):
    result = 0
    gcd_a, gcd_b = get_gcd(arrayA), get_gcd(arrayB)

    for i in arrayB:
        if i % gcd_a == 0:
            gcd_a = 1
            break
        result = max(result, gcd_a)

    for i in arrayA:
        if i % gcd_b == 0:
            gcd_b = 1
            break
        result = max(result, gcd_b)

    if gcd_a == 1 and gcd_b == 1:
        return 0
    
    return result
