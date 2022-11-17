import heapq

def solution(n, paths, gates, summits):
    graph = [[] for _ in range(n + 1)]
    
    for a, b, dist in paths:
        graph[a].append((dist, b))
        graph[b].append((dist, a))        
    
    # 다익스트라
    pq = [(0, gate) for gate in gates]
    INF = int(1e9)
    min_dis = [INF for _ in range(n + 1)]
    
    while pq:
        intensity, node = heapq.heappop(pq)
        if min_dis[node] <= intensity:
            continue
        min_dis[node] = intensity
        if node in summits:
            continue
        for nxt_w, nxt in graph[node]:
            nxt_w = max(nxt_w, intensity)
            if min_dis[nxt] <= nxt_w:
                continue
            heapq.heappush(pq, (nxt_w, nxt))
            
    answer = [0, INF] # 산봉우리 번호, intensity 최솟값
    for summit in summits:
        if min_dis[summit] < answer[1]:
            answer[0], answer[1] = summit, min_dis[summit]
        elif min_dis[summit] == answer[1] and summit < answer[0]:
            answer[0] = summit
            
    return answer
            