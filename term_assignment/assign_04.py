import random


def pick_num(low, high):
    comp_num = random.randint(low, high)
    return comp_num


def first_guess():
    guess = int(input("생각중인 숫자: "))
    return guess


def compare_num(comp_num, user_num):
    if comp_num == user_num:
        print("정답입니다.")
    elif comp_num < user_num:
        print("생각중인 숫자보다 작습니다.")
    else:
        print("생각중인 숫자보다 큽니다.")


def main():
    low = int(input("최소 숫자를 입력하세요: "))
    high = int(input("최대 숫자를 입력하세요: "))
    comp_num = pick_num(low, high)
    print("생각중인 숫자를 입력하세요.")
    while True:
        user_num = first_guess()
        compare_num(comp_num, user_num)
        if comp_num == user_num:
            break


main()
