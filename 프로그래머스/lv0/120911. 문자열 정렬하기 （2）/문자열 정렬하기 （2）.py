def solution(my_string):
    my_string = my_string.lower()
    my_string_list = list(my_string)
    
    return ''.join(sorted(my_string_list))