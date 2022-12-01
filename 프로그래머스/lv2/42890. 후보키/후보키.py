# 후보키의 개수 return
from itertools import combinations as combi

def solution(relation):
    columns_count = len(relation[0])
    rows_count = len(relation)
    
    # 전체 조합
    candidates = []
    for i in range(1, columns_count + 1):
        candidates.extend(combi(range(columns_count), i))
        
    # 유일성
    unique = []
    for candi in candidates:
        tmp = [tuple([item[i] for i in candi]) for item in relation]
        if len(set(tmp)) == rows_count:
            unique.append(candi)
            
    # 최소성
    answer = set(unique)
    for i in range(len(unique)):
        for j in range(i + 1, len(unique)):
            if len(unique[i]) == len(set(unique[i]) & set(unique[j])):
                answer.discard(unique[j])
                
    return len(answer)
        