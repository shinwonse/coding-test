function solution(people, limit) {
    let answer = 0;
    people = people.sort((a, b)=> b - a);
    
    for (let i = 0, j = people.length - 1; i <= j; i += 1) {
        if (people[i] + people[j] > limit) {
            answer += 1;
        } else {
            answer += 1;
            j -= 1;
        }
    }
    
    return answer;
}