const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 캐릭터가 가진 전투력을 기준으로 칭호
// 캐릭터의 전투력에 맞는 칭호를 출력하는 프로그램을 작성하자
const solution = (input) => {
  const [n, m] = input[0].split(' ').map(Number);
  const titles = [];

  for (let i = 1; i <= n; i++) {
    const [title, maxPower] = input[i].split(' ');
    titles.push([title, +maxPower]);
  }

  const results = [];
  for (let i = n + 1; i <= n + m; i++) {
    const power = Number(input[i]);
    let low = 0;
    let high = n - 1;
    let answer = '';  // 가장 적절한 등급을 찾을 것이므로 초기화

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (titles[mid][1] >= power) {
        answer = titles[mid][0];  // 현재 mid가 조건을 만족하므로 저장
        high = mid - 1;  // 더 낮은 범위의 타이틀을 찾기 위해 high를 줄임
      } else {
        low = mid + 1;
      }
    }

    results.push(answer);
  }

  console.log(results.join('\n'));
}

solution(input);
