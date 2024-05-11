const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 벨트 위에는 같은 종류의 초밥이 둘 이상 있을 수 있다.
// 벨트의 임의의 한 위치부터 k개의 접시를 연속해서 먹을 경우 할인된 정액 가격으로 제공된다.
// 각 고객에게 초밥의 종류 하나가 쓰인 쿠폰을 발행하고, 1번 행사에 참가할 경우
// 이 쿠폰에 적혀진 종류의 초밥 하나를 추가로 무료로 제공한다.
// 만약 이 번호에 적혀진 초밥이 현재 벨트 위에 없을 경우, 요리사가 새로 만들어 손님에게 제공한다.
// 가능한 한 많은 종류의 초밥을 먹으려고 한다.
const solution = (input) => {
  // n: 접시의 수, d: 초밥의 가짓수, k: 연속해서 먹는 접시의 수, c: 쿠폰 번호
  const [n, d, k, c] = input[0].split(' ').map(Number); 
  const sushi = input.slice(1).map(Number);
  const check = Array(d + 1).fill(0);
  check[c] = 1;

  let kind = 1;
  for (let i = 0; i < k; i++) {
    if (check[sushi[i]] === 0) {
      check[sushi[i]] = 1;
      kind++;
    } else {
      check[sushi[i]]++;
    }
  }

  let answer = kind;
  for (let i = 0; i < n; i++) {
    let left = sushi[i];
    let right = sushi[(i + k) % n];

    if (check[left] === 1) {
      kind--;
    }
    check[left]--;

    if (check[right] === 0) {
      kind++;
    }
    check[right]++;

    answer = Math.max(answer, kind);
  }

  console.log(answer);
}

solution(input);
