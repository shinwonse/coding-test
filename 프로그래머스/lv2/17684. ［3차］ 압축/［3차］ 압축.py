# 현재 입력과 일치하는 가장 긴 문자열 w
# w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w 제거
# w제거하고 남은 글자 c가 있다면 w + c를 사전에 등록
# 압축한 후의 사전 색인 번호를 배열로 출력

def solution(msg):
    answer = []
    # 알파벳 단어 dic 생성!
    dic = {chr(i + 64): i for i in range(1, 27)}
    cnt = 27
    i = 0
    search = ''
    
    while i < len(msg):
        search += msg[i]
        if search in dic:
            i += 1
            continue
        dic[search] = cnt
        cnt += 1
        
        s = search[:-1]
        answer.append(dic[s])
        search = ''
        
    answer.append(dic[search])
    return answer
