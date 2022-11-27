function solution(age) {
    let answer = '';
    age = String(age);
    
    [...age].map((a) => {
        answer += String.fromCharCode(97 + Number(a));
    });
    
    return answer;
}