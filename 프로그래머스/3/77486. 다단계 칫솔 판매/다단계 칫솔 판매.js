function solution(enroll, referral, seller, amount) {
    const parent = {};
    for (let i = 0; i < enroll.length; i++) {
        parent[enroll[i]] = referral[i];
    }
    
    const total = {};
    for (const name of enroll) {
        total[name] = 0;
    }
    
    for (let i = 0; i < seller.length; i++) {
        let money = amount[i] * 100;
        let name = seller[i];
        
        while (money > 0 && name !== '-') {
            total[name] += money - Math.floor(money / 10);
            name = parent[name];
            money = Math.floor(money / 10);
        }
    }
    
    return enroll.map(name => total[name]);
}