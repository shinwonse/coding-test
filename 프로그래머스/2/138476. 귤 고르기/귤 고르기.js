function solution(k, tangerine) {
    const counter = {};
    for (const t of tangerine) {
        counter[t] = (counter[t] || 0) + 1;
    }
    
    const sortedCounts = Object.values(counter).sort((a, b) => b - a);
    
    let numTypes = 0;
    let countSum = 0;
    
    for (const count of sortedCounts) {
        countSum += count;
        numTypes += 1;
        
        if (countSum >= k) break;
    }
    
    return numTypes;
}