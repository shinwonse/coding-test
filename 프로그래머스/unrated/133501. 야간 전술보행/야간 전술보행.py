def solution(distance, scope, times):
    answer = distance
    for s in scope:
        s.sort()
        
    sum_time = [sum(times[i]) for i in range(len(times))]
    scope_dict = {i: scope[i] for i in range(len(scope))}
    scope_dict = sorted(scope_dict.items(), key = lambda item: item[1])
    
    for scope in scope_dict:
        index = scope[0]
        sc = scope[1]

        for i in range(sc[0], sc[1] + 1):
            if 1 <= i % sum_time[index] <= times[index][0]:
                answer = i
                break
        if answer != distance:
            break
            
    return answer