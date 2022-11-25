# 각 음은 1분에 1개씩 재생
# 음악은 반드시 처음부터 재생
# 음악 길이보다 재생된 시간이 길 때는 음악이 끊김 없이 처음부터 반복해서 재생됨
# 음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생됨
# 제일 긴 음악 제목 반환, 먼저 입력된 음악 제목 반환
import math

def solution(m, musicinfos):
    answer = ''
    play_list = []
    m = m.replace('C#', 'c').replace('D#', 'd').replace('F#', 'f').replace('G#', 'g').replace('A#', 'a')
    
    for musicinfo in musicinfos:
        start, end, title, melody = musicinfo.split(',')
        
        start_hour, start_minute = map(int, start.split(':'))
        end_hour, end_minute = map(int, end.split(':'))
        
        playing_time = (60 * end_hour + end_minute) - (60 * start_hour + start_minute)
        
        melody = melody.replace('C#', 'c').replace('D#', 'd').replace('F#', 'f').replace('G#', 'g').replace('A#', 'a')
        melody *= math.ceil(playing_time / len(melody))
        melody = melody[:playing_time]
        
        if m not in melody:
            continue
            
        if answer == '' or answer[0] < playing_time or (answer[0] == playing_time and answer[1] > start):
            answer = [playing_time, start, title]
            
    if answer == '':
        return '(None)'
    
    return answer[-1]
        
        
            
