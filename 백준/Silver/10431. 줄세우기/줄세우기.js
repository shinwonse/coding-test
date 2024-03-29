const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const p = Number(input[0]);

  for (let i = 1; i <= p; i++) {
    let count = 0;

    const [t, ...arr] = input[i].split(' ').map(Number);
    arr.forEach((el, index) => {
      for (let j = index + 1; j < arr.length; j++) {
        if (el > arr[j]) {
          count++;
        }
      }
    })
    console.log(`${t} ${count}`);
  }
}

solution(input);
