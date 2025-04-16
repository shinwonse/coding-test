function solution(phoneBook) {
  phoneBook.sort(); // 문자열 정렬 시 사전순으로 정렬됨

  for (let i = 0; i < phoneBook.length - 1; i++) {
    if (phoneBook[i + 1].startsWith(phoneBook[i])) {
      return false;
    }
  }

  return true;
}