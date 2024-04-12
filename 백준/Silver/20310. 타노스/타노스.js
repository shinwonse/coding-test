const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// s가 포함하는 0의 개수와 1의 개수는 모두 짝수
// 타노스가 s를 구성하는 문자 중 절반의 0과 절반의 1을 제거하여 새로운 문자열을 만듦
// 새로운 문자열 중 사전 순으로 가장 빠른 것
const solution = (input) => {
  const s = input[0];

  let arr = s.split('');
  let cnt0 = 0;
  let cnt1 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '0') cnt0++;
    else cnt1++;
  }

  cnt0 = Math.floor(cnt0 / 2);
  cnt1 = Math.floor(cnt1 / 2);

  for (let i = 0; i < s.length && cnt1 !== 0; i++) {
    if (arr[i] === '1') {
      cnt1--;
      arr[i] = 0;
    }
  }

  for (let i = s.length - 1; i >= 0 && cnt0 !== 0; i--) {
    if (arr[i] === '0') {
      cnt0--;
      arr[i] = 0;
    }
  }

  const answer = [];
  for (let i = 0; i < s.length; i++) {
    if (arr[i] !== 0)
      answer.push(arr[i]);
  }

  return answer.join('');
}

const answer = solution(input);
console.log(answer);
