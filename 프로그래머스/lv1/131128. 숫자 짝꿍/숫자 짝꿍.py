def solution(X, Y):
    result = []
    
    x_dic = {}
    y_dic = {}
    
    for x in X:
        x_dic[x] = x_dic.get(x, 0) + 1
        
    for y in Y:
        y_dic[y] = y_dic.get(y, 0) + 1
        
    for k, v in x_dic.items():
        if k in y_dic.keys():
            while x_dic[k] > 0 and y_dic[k] > 0:
                result.append(k)
                x_dic[k] -= 1
                y_dic[k] -= 1
                
    if len(result) == 0:
        return '-1'
    
    if result.count('0') == len(result):
        return '0'
    
    result.sort(reverse=True)
    
    return ''.join(result)
    