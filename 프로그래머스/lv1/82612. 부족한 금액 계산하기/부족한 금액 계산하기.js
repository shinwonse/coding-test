function solution(price, money, count) {
    const dp = Array.from({ length: count + 1 }, () => 0);
    
    for (let i = 1; i < count + 1; i += 1) {
        dp[i] = dp[i - 1] + price;
    }
    
    const sum = dp.reduce((a, b) => a + b, 0);
    if (sum - money <= 0) return 0;
    else return sum - money;
}