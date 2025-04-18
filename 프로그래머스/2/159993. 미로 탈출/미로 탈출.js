function bfs(start, target, maps) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [[start[0], start[1], 0]];
    visited[start[0]][start[1]] = true;
    
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        
        if (maps[x][y] === target) {
            return dist;
        }
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                if (!visited[nx][ny] && maps[nx][ny] !== 'X') {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, dist + 1]);
                }
            }
        }
    }
    
    return -1;
}

function findPosition(map, target) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            if (map[i][j] === target) {
                return [i, j];
            }
        }
    }
}

function solution(maps) {
    const map = maps.map(row => row.split(''));

    const start = findPosition(map, 'S');
    const lever = findPosition(map, 'L');
    const end = findPosition(map, 'E');

    const toLever = bfs(start, 'L', map);
    if (toLever === -1) return -1;

    const toEnd = bfs(lever, 'E', map);
    if (toEnd === -1) return -1;

    return toLever + toEnd;
}