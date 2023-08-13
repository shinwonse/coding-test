msg = '''1) 새로운 파일 생성
2) 파일 내용 출력
3) 내용 추가'''
filename = "Subject.txt"


def create_file(subject):
    with open(filename, 'w') as file:
        file.write(subject + '\n')


def read_file():
    with open(filename, 'r') as file:
        print(file.read())


def append_file(subject):
    with open(filename, 'a') as file:
        file.write(subject + '\n')


while True:
    print(msg)
    answer = int(input("1, 2, 3 선택: "))

    if answer == 1:
        subject = input("과목명을 입력하세요: ")
        create_file(subject)
    elif answer == 2:
        read_file()
    elif answer == 3:
        subject = input("과목명을 입력하세요: ")
        append_file(subject)
    else:
        break
