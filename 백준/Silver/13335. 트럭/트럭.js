const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// n개의 트럭이 순서대로 다리를 건너려고 한다.
// 다리 위에는 단지 w대의 트럭만 동시에 올라갈 수 있다.
// 동시에 다리 위에 올라가 있는 트럭들의 무게의 합은 다리의 최대하중인 L보다 작거나 같아야 한다.
// 다리 위에 완전히 올라가지 못한 트럭의 무게는 무시한다.
const solution = (input) => {
  const [n, w, l] = input[0].split(' ').map(Number);
  const truck = input[1].split(' ').map(Number);

  let time = 0;
  let queue = [];
  queue.push([truck.shift(), w]);
  
  while (queue.length > 0) {
    queue = queue.map((q) => [q[0], q[1] - 1]).filter((q) => q[1] !== 0);
    const total = queue.reduce((acc, cur) => acc + cur[0], 0);
    if (truck.length > 0 && total + truck[0] <= l) {
      queue.push([truck.shift(), w]);
    }
    time++;
  }

  return time + 1;
}


const answer = solution(input);
console.log(answer);
