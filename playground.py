import sys
from collections import defaultdict

input = sys.stdin.readline

R, C = map(int, input().split())
arr = [list(input()) for _ in range(R)]

result = 0
start, end = 0, R-1
while start <= end:
    mid = (start+end)//2

    # 문자열 중복 확인
    isOK = True
    dict = defaultdict(int)
    for j in range(C):
        temp = ''
        for i in range(mid, R):
            temp += str(arr[i][j])
        if not dict[temp]:
            dict[temp] += 1
        else:
            isOK = False
            break

    if isOK:
        result = mid
        start = mid + 1
    else:
        end = mid - 1

print(result)