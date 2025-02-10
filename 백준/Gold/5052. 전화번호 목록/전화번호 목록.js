const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

/**
 * 전화번호 목록의 일관성 - 한 번호가 다른 번호의 접두어인 경우가 없어야 한다.
 */
function solution(input) {
  const t = Number(input[0]);

  let index = 1;

  for (let i = 0; i < t; i++) {
    let isConsistent = true;

    const n = Number(input[index]);
    const phoneNumbers = [];

    for (let j = 0; j < n; j++) {
      phoneNumbers.push(input[index + 1 + j]);
    }

    phoneNumbers.sort();

    for (let j = 0; j < n - 1; j++) {
      if (
        phoneNumbers[j] === phoneNumbers[j + 1].slice(0, phoneNumbers[j].length)
      ) {
        isConsistent = false;
        break;
      }
    }

    console.log(isConsistent ? "YES" : "NO");
    index += n + 1;
  }
}

solution(input);
