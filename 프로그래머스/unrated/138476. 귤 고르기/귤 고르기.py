# 서로 다른 종류의 수를 최소화

def solution(k, tangerine):
    tangerine_dict = dict()
    for tanger in tangerine:
        num = tangerine_dict.get(tanger, 0)
        tangerine_dict[tanger] = num + 1
    
    arr = []
    for _, value in tangerine_dict.items():
        arr.append(value)
        
    arr.sort(reverse=True)
    result = 0
    
    for a in arr:
        k -= a
        result += 1
        if k <= 0:
            return result
        
    return result

        