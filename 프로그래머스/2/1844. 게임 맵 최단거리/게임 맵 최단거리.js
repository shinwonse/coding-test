class Queue {
    items = [];
    front = 0;
    rear = 0;

    push(item) {
        this.items.push(item);
        this.rear++;
    }

    fisrt() {
        return this.items[this.front];
    }

    last() {
        return this.items[this.rear - 1];
    }

    pop() {
        return this.items[this.front++];
    }

    isEmpty() {
        return this.front === this.rear;
    }
}

/**
* 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값
*/
function solution(maps) {
    // 이동할 수 있는 방향을 나타내는 배열
    const move = [[-1, 0], [0, -1], [0, 1], [1, 0]];
    
    // 맵의 크기를 저장하는 변수
    const n = maps.length;
    const m = maps[0].length;
    
    // 거리를 저장하는 배열 dist를 -1로 초기화
    const dist = Array.from({ length: n }, () => Array(m).fill(-1));
    
    // bfs 함수를 선언
    function bfs(start) {
        // queue를 선언하고 시작 위치를 queue에 추가
        const q = new Queue();
        q.push(start);
        dist[start[0]][start[1]] = 1;
        
        // queue가 빌 때까지 반복
        while (!q.isEmpty()) {
            const here = q.pop();
            
            // 현재 위치에서 이동할 수 있는 모든 방향
            for (const [dx, dy] of move) {
                const row = here[0] + dx;
                const column = here[1] + dy;
                
                // 이동한 위치가 범위를 벗어난 경우 다음 방향으로 넘어감
                if (row < 0 || row >= n || column < 0 || column >= m) {
                    continue;
                }
                
                // 이동한 위치에 벽이 있는 경우 다음 방향으로 넘어감
                if (maps[row][column] === 0) {
                    continue;
                }
                
                // 이동한 위치가 처음 방문하는 경우, queue에 추가하고 거리 갱신
                if (dist[row][column] === -1) {
                    q.push([row, column]);
                    dist[row][column] = dist[here[0]][here[1]] + 1;
                }
            }
        }
         
        // 거리를 저장하는 배열 dist를 반환
        return dist;
    }
    
    // 시작 위치에서 bfs() 함수를 호출하여 거리 계산
    bfs([0, 0]);
    
    // 목적지까지의 거리 반환, 목적지에 도달하지 못한 경우 -1을 반환
    return dist[n - 1][m - 1];
}