const countSort = (arr, k) => {
  const hashTable = new Array(k + 1).fill(0);

  for (const num of arr) {
    if (num <= k) {
      hashTable[num] += 1;
    }
  }

  return hashTable;
}