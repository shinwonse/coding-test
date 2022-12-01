# 0 1 2 3 4
# 0   1 1 1 
#   1 0 1 0
# divmod 몫과 나머지를 반환


def convert(n, base):
    T = "0123456789ABCDEF"
    q, r = divmod(n, base)
    if q == 0:
        return T[r]
    else:
        return convert(q, base) + T[r]
    

def solution(n, t, m, p):
    answer = ""
    tube = ""
    for num in range(m * t):
        answer += convert(num, n)

    for i in range(p - 1, m * t, m):
        tube += answer[i]

    return tube
        
            