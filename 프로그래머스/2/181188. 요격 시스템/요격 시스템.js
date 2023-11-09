function solution(targets) {
    const copiedTargets = targets.slice();
    const sortedTargets = copiedTargets.sort((a, b) => b[0] - a[0]);

    let answer = 1;
    let checkPoint = sortedTargets[0][0];
    
    for (let i = 1; i < sortedTargets.length; i += 1) {
        const [start, end] = sortedTargets[i];
        
        if (end <= checkPoint) {
            checkPoint = start;
            answer += 1;
        }
    }
    
    return answer;
}