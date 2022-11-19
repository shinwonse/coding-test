# k점이 최상품의 사과, 1점이 최하품의 사과
# 사과를 m개씩 포장, 가장 낮은 점수가 p점인 경우, 사과 한 상자의 가격은 p * m
# 가능한 많은 사과를 팔고, 얻을 수 있는 최대 이익 -> 사과는 상자 단위로만 판매


def solution(k, m, score):
    result = 0
    score.sort(reverse=True)
    
    for i in range(0, len(score), m):
        box = score[i:i + m]
        
        if len(box) == m:
            result += min(box) * m
    
    # while len(score) >= m:
    #     box = []
    #     for i in range(m):
    #         box.append(score.pop(0))
    #     result += min(box) * m
        
    return result
