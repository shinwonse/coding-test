# 20291 파일 정리

n = int(input())

extension_dic = {}

for _ in range(n):
    file = input()

    extension = file.split('.')[1]
    ext = extension_dic.get(extension, 0)
    extension_dic[extension] = ext + 1

sorted_extension_dic = sorted(extension_dic.items())

for extension in sorted_extension_dic:
    print(extension[0], extension[1])