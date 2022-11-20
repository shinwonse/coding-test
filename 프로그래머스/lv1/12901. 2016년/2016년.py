def solution(a, b):
    result = 0
    days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'] # 금요일부터 시작
    months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    for i in range(a - 1):
        result += months[i]
        
    result += b - 1
    
    return days[result % 7]