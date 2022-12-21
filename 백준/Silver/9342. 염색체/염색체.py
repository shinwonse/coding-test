# 9342 염색체
# *?A+F+C+*?
import re

t = int(input())
regex = re.compile('^[A-F]?A+F+C+[A-F]?$')

for _ in range(t):
    print('Good' if regex.match(input()) is None else 'Infected!')
