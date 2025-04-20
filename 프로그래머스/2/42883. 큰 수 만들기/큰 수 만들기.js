function solution(number, k) {
    const stack = [];
    
    for (let i = 0; i < number.length; i++) {
        const digit = number[i];
        
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < digit) {
            stack.pop();
            k--;
        }
        
        stack.push(digit);
    }
    
    return stack.slice(0, stack.length - k).join('');
}