const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const INF = 1e9;
  const n = Number(input[0]);
  const m = Number(input[1]);

  // graph[i][j] = i에서 j로 가는 초기 비용(간선 비용)
  let graph = [new Array(n + 1).fill(INF)];
  for (let i = 1; i <= n; i += 1) {
    graph.push(new Array(n + 1).fill(INF));
    graph[i][i] = 0;
  }
  for (let i = 2; i <= m + 1; i += 1) {
    const [a, b, c] = input[i].split(" ").map((v) => Number(v));
    graph[a][b] = Math.min(graph[a][b], c);
  }

  // 점화식에 따라 플로이드 워셜 알고리즘을 수행
  for (let k = 1; k <= n; k += 1) {
    for (let a = 1; a <= n; a += 1) {
      for (let b = 1; b <= n; b += 1) {
        const cost = graph[a][k] + graph[k][b];
        graph[a][b] = Math.min(graph[a][b], cost);
      }
    }
  }

  // 수행된 결과를 출력
  for (let a = 1; a <= n; a += 1) {
    let line = '';
    for (let b = 1; b <= n; b += 1) {
      if (graph[a][b] === INF) line += '0 ';
      else line += `${graph[a][b]} `;
    }
    console.log(line);
  }
}

solution(input);
