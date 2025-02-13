const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const [N, d, k, c] = input[0].split(" ").map(Number);
  const sushi = input.slice(1).map(Number);

  const freq = new Array(d + 1).fill(0);
  let distinctCount = 0;

  for (let i = 0; i < k; i++) {
    const kind = sushi[i];
    if (freq[kind] === 0) {
      distinctCount++;
    }
    freq[kind]++;
  }

  let answer = distinctCount + (freq[c] === 0 ? 1 : 0);

  for (let i = 0; i < N; i++) {
    // 시작 위치의 초밥
    const startSushi = sushi[i];
    // 새로 들어올 초밥 (윈도우의 끝)
    const end = (i + k) % N;
    const newSushi = sushi[end];

    // 2-1. startSushi 제거
    freq[startSushi]--;
    if (freq[startSushi] === 0) {
      distinctCount--;
    }

    // 2-2. newSushi 추가
    if (freq[newSushi] === 0) {
      distinctCount++;
    }
    freq[newSushi]++;

    // 2-3. 쿠폰 초밥 고려하여 최대값 갱신
    const current = distinctCount + (freq[c] === 0 ? 1 : 0);
    if (current > answer) {
      answer = current;
    }
  }

  console.log(answer);
}

solution(input);
