def get_divisor_count(n):
    cnt = 0
    
    for i in range(1, (int(n ** .5)) + 1):
        if n % i == 0:
            cnt += 1
            if i ** 2 != n:
                cnt += 1
    
    return cnt

def solution(number, limit, power):
    result = []    
    for i in range(1, number + 1):
        count = get_divisor_count(i)
        if count > limit:
            result.append(power)
            continue
        result.append(count)
        
    return sum(result)
    