function solution(progresses, speeds) {
    const answer = [];
    let queue = [];
    
    for (let i = 0; i < progresses.length; i++) {
        const remainedProgress = 100 - progresses[i];
        const remainedDay = Math.ceil(remainedProgress / speeds[i]);
        
        if (queue.length === 0) {
            queue.push(remainedDay);
        } else if (queue[0] >= remainedDay) {
            queue.push(remainedDay);
        } else {
            answer.push(queue.length);
            queue = [];
            queue.push(remainedDay);
        }
    }
    
    answer.push(queue.length);
    
    return answer;
}