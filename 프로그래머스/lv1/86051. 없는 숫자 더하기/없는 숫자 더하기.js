function solution(numbers) {
    const arr1 = [1,2,3,4,5,6,7,8,9,0];
    let difference = arr1.filter(x=>!numbers.includes(x));
    let sum = 0;
    for(let i=0;i<difference.length;i++){
        sum += difference[i];
    }    
    return sum;
}