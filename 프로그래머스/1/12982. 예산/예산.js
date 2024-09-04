/*
* 최대한 많은 부서에게 물품 지원
* 정확하게 지원해야함 모자라면 안됨
*/
function solution(d, budget) {
    let answer = 0;
    
    const sortedBudget = d.sort((a, b) => a - b);
    
    for (const amount of d) {
        if (budget < amount) {
            break;
        }
        
        budget -= amount;
        answer += 1;
    }
    
    return answer;
}