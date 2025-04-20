function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    let left = 0;
    let right = people.length - 1;
    let count = 0;
    
    while (left <= right) {
        const light = people[left];
        const heavy = people[right];
        
        if (light + heavy <= limit) {
            left++;
        }
        right--;
        count++;
    }
    
    return count;
}