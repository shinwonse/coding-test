function dfs(current, word, vowels, count) {
    if (current === word) {
        return { found: true, result: count };
    }
    
    if (current.length === 5) {
        return { found: false, result: count };
    }
    
    for (let i = 0; i < vowels.length; i++) {
        const next = dfs(current + vowels[i], word, vowels, count + 1);
        if (next.found) return next;
        count = next.result;
    }
    
    return { found: false, result: count };
}

function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const { result } = dfs('', word, vowels, 0);
    return result;
}