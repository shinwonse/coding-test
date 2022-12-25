# 20300 서강근육맨

n = int(input())
m = 0
muscle_loss = list(map(int, input().split()))

muscle_loss.sort(reverse=True)

if len(muscle_loss) % 2 != 0:
    last = muscle_loss[0]
    muscle_loss = muscle_loss[1:]
    m = last

while len(muscle_loss) > 0:
    maximum = muscle_loss[0]
    minimum = muscle_loss[-1]

    if maximum + minimum > m:
        m = maximum + minimum

    muscle_loss = muscle_loss[1:]
    muscle_loss = muscle_loss[0:-1]

print(m)
