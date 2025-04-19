function solution(progresses, speeds) {
    const answer = [];
    let queue = [];
    
    for (let i = 0; i < progresses.length; i++) {
        const progress = progresses[i];
        const speed = speeds[i];
        
        const remainedDay = Math.ceil((100 - progress) / speed);
        
        if (queue.length && queue[0] >= remainedDay) {
            queue.push(remainedDay);
        } else if (queue.length && queue[0] < remainedDay) {
            answer.push(queue.length);
            queue = [];
            queue.push(remainedDay);
        } else {        
            queue.push(remainedDay);
        }
    }
    
    answer.push(queue.length);
    
    return answer;
}