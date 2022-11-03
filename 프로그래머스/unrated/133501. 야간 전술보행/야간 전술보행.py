def solution(distance, scope, times):
    ch = []
    for i in range(len(scope)):
        start, end = sorted(scope[i])
        work, rest = times[i]
        time = start
        while time <= end:
            N = time % (work + rest)
            if 0 < N <= work:
                ch.append(time)
                break
            time += 1
            
    if ch:
        return sorted(ch)[0]
    else:
        return distance
    