function solution(name) {
    let answer = 0;
    
    // 상하 조작 횟수 개선
    for (let i = 0; i < name.length; i++) {
        const charCode = name.charCodeAt(i);
        const move = Math.min(charCode - 65, 91 - charCode);
        answer += move;
    }
    
    // 좌우 조작 최소 개선
    let minMove = name.length - 1;
    
    for (let i = 0; i < name.length; i++) {
        let next = i + 1;
        
        while (next < name.length && name[next] === 'A') {
            next++;
        }
        
        // 좌로 갔다가 우로 가기, 또는 우로 갔다가 좌로 가기
        const move = i + name.length - next + Math.min(i, name.length - next);
        minMove = Math.min(minMove, move);
    }
    
    return answer + minMove;
}