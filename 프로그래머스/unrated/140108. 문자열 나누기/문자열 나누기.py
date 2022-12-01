# 첫 글자 x

def solution(s):
    result = []
    
    while len(s) != 0:
        stack = ''
        x = s[0]
        s = s[1:]
        stack += x
        
        dic = {}
        dic[x] = 1
        dic['other'] = 0
        
        index = 0
        for i in range(len(s)):
            if s[i] == x:
                dic[x] += 1
                stack += s[i]
            else:
                dic['other'] += 1
                stack += s[i]
            if dic[x] == dic['other']:
                index = i
                break
        
        if dic[x] != dic['other']:
            result.append(stack)
            return len(result)
        
        result.append(stack)
        s = s[index + 1:]
        
    return len(result)