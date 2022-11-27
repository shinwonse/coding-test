def solution(age):
    result = ''
    age = str(age)
    
    for a in age:
        result += chr(97 + int(a))
    
    return result