# 모든 문제들을 풀 수 있는 알고력과 코딩력을 얻는 최단시간을 return하라.
# problems의 원소는 alp_req, cop_req, alp_rwd, cop_rwd, cost로 이루어져 있다.
# dp[x][y]: alp이 x고, copy가 y가 되기 위해 필요한 최소 시간
def solution(alp, cop, problems):
    alp_target = 0
    cop_target = 0
        
    alp_target = max([alp_req for alp_req, cop_req, alp_rwd, cop_rwd, cost in problems])
    cop_target = max([cop_req for alp_req, cop_req, alp_rwd, cop_rwd, cost in problems])
    if alp >= alp_target and cop >= cop_target:
        return 0
    
    alp_target = max(alp_target, alp)
    cop_target = max(cop_target, cop)
    
    problems.append([0, 0, 1, 0, 1]) # 알고력 올리는 공부 (문제로 생각)
    problems.append([0, 0, 0, 1, 1]) # 코딩력 올리는 공부 (문제로 생각)
    
    INF = int(1e9)
    
    dp = [[float('inf') for c in range(cop_target + 1)] for r in range(alp_target + 1)]
    dp[alp][cop] = 0
    for r in range(alp, alp_target + 1):
        for c in range(cop, cop_target + 1):
            for alp_req, cop_req, alp_rwd, cop_rwd, cost in problems:
                if r < alp_req or c < cop_req:
                    continue
                nr, nc = min(r + alp_rwd, alp_target), min(c + cop_rwd, cop_target)
                dp[nr][nc] = min(dp[nr][nc], dp[r][c] + cost)
                
    return dp[-1][-1]
