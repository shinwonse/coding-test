total = 0

for _ in range(5):
    number = int(input("숫자를 입력하세요: "))
    answer = input("숫자를 total에 더할 것인가요? (Y/N): ")

    if answer == 'Y' or answer == 'y':
        total += number

print('total:', total)
