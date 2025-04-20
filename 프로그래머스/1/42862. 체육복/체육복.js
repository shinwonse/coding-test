function solution(n, lost, reserve) {
    const realLost = lost.filter((l) => !reserve.includes(l));
    const realReserve = reserve.filter((r) => !lost.includes(r));
    
    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b);
    
    for (let i = 0; i < realReserve.length; i++) {
        const lend = realReserve[i];
        const idx = realLost.findIndex((l) => l === lend - 1 || l === lend + 1);
        if (idx !== -1) {
            realLost.splice(idx, 1);
        }
    }
    
    return n - realLost.length;
}