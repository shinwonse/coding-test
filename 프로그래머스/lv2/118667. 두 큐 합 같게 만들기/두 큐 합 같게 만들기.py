from collections import deque

def solution(queue1, queue2):
    q1 = deque(queue1)
    q2 = deque(queue2)
    
    q1_sum = sum(q1)
    q2_sum = sum(q2)
    
    for i in range(len(queue1) * 3):
        if q1_sum == q2_sum:
            return i
        if q1_sum > q2_sum:
            temp = q1.popleft()
            q2.append(temp)
            q1_sum -= temp
            q2_sum += temp
        else:
            temp = q2.popleft()
            q1.append(temp)
            q1_sum += temp
            q2_sum -= temp
            
    return -1
            