const solution = (n, edge) => {
    const graph = Array.from({ length: n + 1}, () => []);
    const visited = Array(n + 1).fill(false);
    const distance = Array(n + 1).fill(0);
    
    for (const [a, b] of edge) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const queue = [1];
    visited[1] = true;
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                distance[neighbor] = distance[node] + 1;
                queue.push(neighbor);
            }
        }
    }
    
    const maxDistance = Math.max(...distance);
    return distance.filter((d) => d === maxDistance).length;
};