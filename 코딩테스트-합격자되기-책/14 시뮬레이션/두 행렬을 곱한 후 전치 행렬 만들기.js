function multiplyMatrices(matrix1, matrix2) {
  // 1. 결과 행렬을 0으로 초기화
  const result = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  // 2. 행렬 곱셉을 수정
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      for (let k = 0; k < 3; k += 1) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return result;
}

function transposeMatrix(matrix) {
  // 3. 결과 행렬을 0으로 초기화
  const result = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  // 전치 행렬을 계산
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      result[i][j] = matrix[j][i];
    }
  }

  return result;
}

function solution(matrix1, matrix2) {
  // 주어진 두 행렬을 곱함
  const multiplied = multiplyMatrices(matrix1, matrix2);
  // 곱셈 결과의 전치 행렬을 계산
  const transposed = transposeMatrix(multiplied);
  return transposed;
}
