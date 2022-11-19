import math

def timeToMinute(time):
    h, m = map(int, time.split(':'))
    return h * 60 + m

def solution(fees, records):
    answer = []
    basic_time, basic_fee, unit_time, unit_fee = fees
    
    dic = dict()
    
    for record in records:
        time, number, history = record.split()
        
        if number in dic:
            dic[number].append([timeToMinute(time), history])
        else:
            dic[number] = [[timeToMinute(time), history]]
            
    recordList = list(dic.items())
    recordList.sort()

    for record in recordList:
        time = 0
        for rec in record[1]:
            if rec[1] == 'IN':
                time -= rec[0]
            else:
                time += rec[0]
                
        if record[1][-1][1] == 'IN':
            time += timeToMinute('23:59')
        
        if time <= basic_time:
            answer.append(basic_fee)
        else:
            answer.append(basic_fee + math.ceil((time - basic_time) / unit_time) * unit_fee)
            
    return answer