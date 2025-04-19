function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === '(') {
      stack.push(ch);
    } else {
      if (stack.length === 0) return false; // 짝이 없음
      stack.pop(); // 짝 맞춰서 제거
    }
  }

  return stack.length === 0;
}