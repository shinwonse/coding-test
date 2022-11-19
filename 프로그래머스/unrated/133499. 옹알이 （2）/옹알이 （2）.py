# aya ye woo ma
# 연속해서 같은 발음 x

def solution(babbling):
    possible = ['aya', 'ye', 'woo', 'ma']
    result = 0
    for b in babbling:
        for i, p in enumerate(possible):
            b = b.replace(p, str(i))
        
        if b.isdigit():
            if '00' not in b and '11' not in b and '22' not in b and '33' not in b:
                result += 1
    
    return result
        