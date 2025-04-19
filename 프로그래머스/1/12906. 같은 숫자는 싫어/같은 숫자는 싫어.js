function solution(arr) {
    const answer = [];
    let stack = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (stack.length) {
            if (stack[0] === arr[i]) {
                continue;
            } else {
                stack = [];
                stack.push(arr[i]);
                answer.push(arr[i]);
            }
        } else {
            stack.push(arr[i]);
            answer.push(arr[i]);
        }
    }
    
    return answer;
}