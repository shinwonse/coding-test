const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const towns = input.slice(1).map(line => {
    const [x, a] = line.split(' ').map(Number);
    return { x, a }; // 마을 위치와 인구 저장
  });

  // 마을을 위치(x) 기준으로 오름차순 정렬
  towns.sort((a, b) => a.x - b.x);

  // 전체 인구 수 계산
  const totalPopulation = towns.reduce((sum, town) => sum + town.a, 0);

  let cumulativePopulation = 0;

  for (let i = 0; i < N; i++) {
    cumulativePopulation += towns[i].a;

    // 누적 인구가 전체 인구의 절반 이상이 되는 순간이 최적 위치
    if (cumulativePopulation >= totalPopulation / 2) {
      console.log(towns[i].x);
      return;
    }
  }
}

solution(input);