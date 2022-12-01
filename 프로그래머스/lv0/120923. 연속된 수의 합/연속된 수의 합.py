def solution(num, total):
    result = []
    mid = total // num
    start = mid - ((num - 1) // 2)
        
    for i in range(start, start + num):
        result.append(i)
    
    return result
    