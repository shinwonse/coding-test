function solution(r1, r2) {
    let answer = 0;
    let r1Y = 0;
    
    for (let i = 1; i < r2; i++) {
        answer += Math.floor(Math.sqrt(r2 ** 2 - i ** 2));
        if (i < r1) {
            r1Y = Math.sqrt(r1 ** 2 - i ** 2);
            if (Number.isInteger(r1Y)) {
                answer -= r1Y - 1;
            } else {
                answer -= Math.floor(r1Y);
            }
        }
    }
    
    answer *= 4;
    answer += (r2 - r1 + 1) * 4;
    return answer;
}