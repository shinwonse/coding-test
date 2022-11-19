# 빵-야채-고기-빵
# 1: 빵, 2: 야채, 3: 고기
# 포장하는 햄버거의 개수


def solution(ingredient):
    answer = 0
    stack = []
    hamburger = [1, 2, 3, 1]
    
    for i in ingredient:
        stack.append(i)
        
        if stack[-4:] == hamburger:
            answer += 1
            for i in range(4):
                stack.pop()
                
    return answer