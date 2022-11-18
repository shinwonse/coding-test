# 각 유저별로 처리 결과 메일을 받은 횟수를 리턴
def solution(id_list, reports, k):
    stop = []
    report_dic = { id: [] for id in id_list }
    result = [0] * len(id_list)
    
    for report in set(reports):
        report = report.split(' ')
        report_dic[report[1]].append(report[0])
        
    stop = set([i for i in stop if stop.count(i) >= k])
    
    for key, value in report_dic.items():
        if len(value) >= k:
            for v in value:
                result[id_list.index(v)] += 1
                
    return result
