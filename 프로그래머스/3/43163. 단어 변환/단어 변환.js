function canConvert(a, b) {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) diff++;
    }
    return diff === 1;
}

function bfs(begin, target, words) {
    const visited = new Array(words.length).fill(false);
    const queue = [[begin, 0]];
    
    while (queue.length > 0) {
        const [current, count] = queue.shift();
        
        if (current === target) return count;
        
        for (let i = 0; i < words.length; i++) {
            if (!visited[i] && canConvert(current, words[i])) {
                visited[i] = true;
                queue.push([words[i], count + 1]);
            }
        }
    }
    
    return 0;
}

function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    return bfs(begin, target, words);
}