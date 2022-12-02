def solution(k, d):
    answer = 0
    
    for i in range(0, d + 1, k):
        max_y = d ** 2 - i ** 2
        answer += int(max_y ** 0.5) // k + 1
        
    return answer