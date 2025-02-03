const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const books = input[1].split(" ").map(Number);

  const positives = [];
  const negatives = [];

  // 책의 위치를 양수와 음수로 분리
  for (const book of books) {
    if (book > 0) {
      positives.push(book);
    } else {
      negatives.push(book);
    }
  }

  // 양수는 내림차순, 음수는 오름차순으로 정렬
  positives.sort((a, b) => b - a);
  negatives.sort((a, b) => a - b);

  let totalDistance = 0;

  // 가장 멀리 있는 책은 마지막에 돌아오지 않아도 되므로 따로 계산
  const maxDistance = Math.max(
    positives.length > 0 ? positives[0] : 0,
    negatives.length > 0 ? Math.abs(negatives[0]) : 0
  );

  // 양수 쪽 거리 계산
  for (let i = 0; i < positives.length; i += M) {
    totalDistance += positives[i] * 2;
  }

  // 음수 쪽 거리 계산
  for (let i = 0; i < negatives.length; i += M) {
    totalDistance += Math.abs(negatives[i]) * 2;
  }

  // 최종 거리에서 가장 먼 거리를 한 번 제외
  totalDistance -= maxDistance;

  console.log(totalDistance);
}

solution(input);
