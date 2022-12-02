def solution(array):
    dic = {}
    
    for a in array:
        count = dic.get(a, 0) + 1
        dic[a] = count
    
    max = 0
    for _, value in dic.items():
        if max < value:
            max = value
    
    result = []
    for key, value in dic.items():
        if value == max:
            result.append(key)
            
    if len(result) > 1:
        return -1
    
    return result[0]