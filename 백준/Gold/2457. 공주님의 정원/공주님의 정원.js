const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const N = parseInt(input[0]);

  const arr = [];

  for(let i=1;i<=N;i++) {
    arr.push(input[i].split(" ").map(Number));
  }

// 기준 날짜 m, d를 넘지 않고 가장 오래 지속되는 꽃을 고름

  let cnt = 0;

  const find = () => {
    let m = 3;
    let d = 1;
    let index = -1;

    let endMonth = 0;
    let endDay = 0;

    const visit = Array(N).fill(false);

    while(true) {
      for(let i=0;i<N;i++) {
        if(visit[i]) {
          continue;
        }
        if(arr[i][0] < m || (arr[i][0] === m && arr[i][1] <= d)) {
          if(arr[i][2] > endMonth || (arr[i][2] === endMonth && arr[i][3] > endDay)) {
            index = i;
            endMonth = arr[i][2];
            endDay = arr[i][3];
          }
        }
      }
      if(index == -1) {
        console.log(0);
        break;
      }
      m = arr[index][2];
      if(m === 12) {
        console.log(cnt + 1);
        break;
      }
      d = arr[index][3];
      visit[index] = true;
      cnt++;
      endMonth = 0;
      endDay = 0;
      index = -1;
    }
  }

  find();
}

solution(input);
