import math

def to_k_number(n, k):
    ret = ''
    while n > 0:
        ret += str(n % k)
        n = n // k
    return ''.join(reversed(ret))

def is_prime_number(x):
    for i in range(2, int(math.sqrt(x)) + 1):
        if x % i == 0:
            return False
    return True

def solution(n, k):
    answer = 0
    k_num = to_k_number(n, k)
    for n in k_num.split('0'):
        if n == '' or n == '1':
            continue
        if is_prime_number(int(n)):
            answer += 1
    return answer