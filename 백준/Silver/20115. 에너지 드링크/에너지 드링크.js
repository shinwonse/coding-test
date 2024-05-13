const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 1. 임의의 서로 다른 두 에너지 드링크를 고른다.
// 2. 한쪽 에너지 드링크를 다른 쪽 에너지 드링크에 모두 붓는다. 단, 붓는 과정에서 원래 양의 절반을 바닥에 흘린다.
// 3. 다 붓고 남은 빈 에너지 드링크는 버린다.
// 4. 1 ~ 3 과정을 에너지 드링크가 하나만 남을 때까지 반복한다.
// 합쳐진 에너지 드링크의 양을 최대로 만들어보자.
const solution = (input) => {
  const n = Number(input[0]);
  const drinks = input[1].split(' ').map(Number);

  drinks.sort((a, b) => a - b);
  while (drinks.length > 1) {

    const smallest = drinks.shift();
    const biggest = drinks.pop();

    const sum = smallest / 2 + biggest;
    drinks.push(sum);
  }

  console.log(drinks[0]);
}

solution(input);
