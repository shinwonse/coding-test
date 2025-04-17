function dfs(path, tickets, visited, routes) {
  if (path.length === tickets.length + 1) {
    routes.push([...path]);
    return;
  }

  for (let i = 0; i < tickets.length; i++) {
    const [from, to] = tickets[i];

    if (!visited[i] && path[path.length - 1] === from) {
      visited[i] = true;
      path.push(to);
      dfs(path, tickets, visited, routes);
      path.pop();         // 백트래킹
      visited[i] = false; // 방문 되돌리기
    }
  }
}

function solution(tickets) {
  const visited = new Array(tickets.length).fill(false);
  const routes = [];

  dfs(['ICN'], tickets, visited, routes);

  routes.sort(); // 사전순 정렬
  return routes[0]; // 가장 앞선 경로 리턴
}