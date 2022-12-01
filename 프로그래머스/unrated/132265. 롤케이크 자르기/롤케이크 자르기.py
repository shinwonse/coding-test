from collections import Counter

def solution(topping):
    answer = 0
    
    me = Counter(topping)
    bro = {}
    
    for t in topping:
        bro_t = bro.get(t, 0) + 1
        bro[t] = bro_t
        me[t] -= 1
        
        if me[t] == 0:
            del me[t]
        
        if len(me) == len(bro):
            answer += 1
            
    return answer