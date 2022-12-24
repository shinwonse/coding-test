# 17487 타자연습
# 양손의 키를 누른 횟수의 차를 최소로 하도록
# 건덕이의 각 손이 키보드를 누른 횟수

S = input()
li_left = 'qwertyasdfgzxcvb'
li_right = 'uiophjklnm'
cnt_left, cnt_right, cnt_other = 0, 0, 0

for i in S:
    if i.isupper():
        cnt_other += 1

for i in S.lower():
    if i in li_right:
        cnt_right += 1
    elif i in li_left:
        cnt_left += 1
    else:
        cnt_other += 1

while cnt_other != 0:
    if cnt_left <= cnt_right:
        cnt_left += 1
    else:
        cnt_right += 1
    cnt_other -= 1

print(cnt_left, cnt_right)
