const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const nearestSquare = (x) => {
  let i = 1;
  while ((2 ** i) <= x) {
    i+= 1;
  }
  return i - 1;
}

const solution = (input) => {
  const [length, width, height] = input[0].split(' ').map(Number);
  const N = Number(input[1]);
  let cubes = Array(20).fill(0);

  for (let i = 2; i <= N + 1; i += 1) {
    const [a, b] = input[i].split(' ').map(Number);
    cubes[a] = b;
  }

  let size = 19;
  size = nearestSquare(length);
  size = Math.min(size, nearestSquare(width));
  size = Math.min(size, nearestSquare(height));

  let res = 0;
  let used = 0;

  for (let i = size; i >= 0; i -= 1) {
    used *= 8;
    let cur = (2 ** i);
    let required = Math.floor(length / cur) * Math.floor(width / cur) * Math.floor(height / cur) - used;

    let usage = Math.min(required, cubes[i]);
    res += usage;
    used += usage;
  }

  if (used === length * width * height) {
    console.log(res);
  } else {
    console.log(-1);
  }
};

solution(input);
