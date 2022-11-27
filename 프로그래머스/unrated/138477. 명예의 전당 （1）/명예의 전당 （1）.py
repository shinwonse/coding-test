# 매일 발표된 명예의 전당의 최하위 점수를 return
import heapq

def solution(k, score):
    answer = []
    
    heap = []
    for s in score:
        if len(heap) < k:
            heapq.heappush(heap, s)
            answer.append(min(heap))
            continue
        
        if min(heap) < s:
            heapq.heappop(heap)
            heapq.heappush(heap, s)
            
        answer.append(min(heap))
    return answer