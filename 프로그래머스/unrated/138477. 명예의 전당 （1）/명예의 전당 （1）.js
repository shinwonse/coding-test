function solution(k, score) {
    const answer = [];
    const stack = [];
    
    for (const s of score) {
        if (stack.length < k) {
            stack.push(s);
            stack.sort((a, b) => b - a);
            answer.push(Math.min(...stack));
            continue;
        }
        
        if (Math.min(...stack) < s) {
            stack.pop();
            stack.push(s);
            stack.sort((a, b) => b - a);
        }
        
        answer.push(Math.min(...stack));
    }
    
    return answer;
}