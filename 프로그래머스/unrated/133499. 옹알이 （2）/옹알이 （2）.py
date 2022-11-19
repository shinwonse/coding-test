# aya ye woo ma
# 연속해서 같은 발음 x

def solution(babbling):
    possible = ['aya', 'ye', 'woo', 'ma']
    result = 0
    for b in babbling:
        for p in possible:
            if p * 2 not in b: # 연속되는 발음이 없으면
                b = b.replace(p, ' ')
        if len(b.strip()) == 0:
            result += 1
            
    return result
        
        