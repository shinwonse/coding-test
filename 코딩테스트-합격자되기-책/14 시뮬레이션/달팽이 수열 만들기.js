function solution(n) {
  // 1. n 크기의 2차원 배열 생성
  const snailArray = Array.from({ length: n }, () => Array(n).fill(0));

  let num = 1; // 2. 달팽이 수열의 시작 숫자

  // 3. 행과 열의 시작과 끝 인덱스를 설정
  let startRow = 0, endRow = n - 1;
  let startCol = 0, endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // 4. 첫번째 행 채우기
    for (let i = startCol; i <= endCol; i += 1) {
      snailArray[startRow][i] = num;
      num += 1;
    }
    startRow += 1;

    // 5. 마지막 열 채우기
    for (let i = startRow; i <= endRow; i += 1) {
      snailArray[i][endCol] = num;
      num += 1;
    }
    endCol -= 1;

    // 6. 마지막 행 채우기
    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i -= 1) {
        snailArray[endRow][i] = num;
        num += 1;
      }
      endRow -= 1;
    }

    // 7. 첫번째 열 채우기
    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i -= 1) {
        snailArray[i][startCol] = num;
        num += 1;
      }
      startCol += 1;
    }
  }

  return snailArray;
}
