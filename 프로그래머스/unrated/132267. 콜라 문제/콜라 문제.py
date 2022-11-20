def solution(a, b, n):
    current_coke = n
    result = 0
    
    while current_coke >= a:
        remained_coke = current_coke % a
        current_coke = (current_coke // a) * b
        result += current_coke
        current_coke += remained_coke
    
    return result