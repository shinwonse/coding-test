function solution(x, n) {
    const answer = [];
    
    for (let i = 0; i < n; i += 1) answer.push(x * (i + 1));    
    
    
    return answer;
}