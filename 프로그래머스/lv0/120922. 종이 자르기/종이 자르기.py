def solution(M, N):
    result = 0
    
    min_length = min(M, N)
    max_length = max(M, N)
    result += min_length - 1
    result += (min_length) * (max_length - 1)
    
    return result