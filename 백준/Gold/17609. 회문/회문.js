const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const palindrome = (x) => {
  return x === x.split("").reverse().join("");
}

const solution = (input) => {
  const T = Number(input[0]);
  for (let tc = 1; tc <= T; tc+= 1) {
    let data = input[tc];
    if (palindrome(data)) {
      console.log(0);
    } else {
      let found = false;
      let n = data.length;
      for (let i = 0; i < Math.floor(n / 2); i+= 1) {
        if (data[i] !== data[n - i - 1]) {
          if (palindrome(data.slice(0, i) + data.slice(i + 1, n))) {
            found = true;
          }
          if (palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n))) {
            found = true;
          }
          break;
        }
      }
      if (found) {
        console.log(1);
      } else {
        console.log(2);
      }
    }
  }
};

solution(input);
