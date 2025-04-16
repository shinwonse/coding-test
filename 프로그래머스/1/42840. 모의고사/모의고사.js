function solution(answers) {
    let answer = [];
    let score = [0, 0, 0];
    
    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i = 0; i < answers.length; i += 1) {
        if (p1[i % p1.length] === answers[i]) score[0] += 1;
        if (p2[i % p2.length] === answers[i]) score[1] += 1;
        if (p3[i % p3.length] === answers[i]) score[2] += 1;
    }
    
    const max = Math.max(...score);
    
    for (let i = 0; i < score.length; i += 1){
        if (max === score[i]) answer.push(i + 1);
    }
    return answer;
}