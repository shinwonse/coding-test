def solution(survey, choices):
    result = ''
    character_dic = {"R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0}
    l = len(survey)
    
    for i in range(l):
        left = survey[i][0]
        right = survey[i][1]
        
        if choices[i] < 4:
            character_dic[left] += 4 - choices[i]
        elif choices[i] > 4:
            character_dic[right] += choices[i] - 4
    
    if character_dic["R"] >= character_dic["T"]:
        result += "R"
    else:
        result += "T"
        
    if character_dic["C"] >= character_dic["F"]:
        result += "C"
    else:
        result += "F"
        
    if character_dic["J"] >= character_dic["M"]:
        result += "J"
    else:
        result += "M"
        
    if character_dic["A"] >= character_dic["N"]:
        result += "A"
    else:
        result += "N"
        
    return result