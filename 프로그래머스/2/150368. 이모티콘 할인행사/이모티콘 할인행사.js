function solution(users, emoticons) {
    const answer = [0, 0];
    const discount = [10, 20, 30, 40];
    const cases = [];

    function dfs(emoticons, result) {
        if (emoticons.length < 1) {
            cases.push(result);
            return;
        }
        for (let i = 0; i < discount.length; i++) {
            dfs(emoticons.slice(1), [...result, [discount[i], emoticons[0]]]);
        }
    }

    dfs(emoticons, []);

    const calcAmount = (dis, price) => (100 - dis) / 100 * price;

    cases.forEach(disArr => {
        const temp = [0, 0]
        users.forEach(([per, price]) => {
            let sum = 0;
            disArr.forEach(([dis, cost]) => {
                if (dis >= per) {
                    sum += calcAmount(dis, cost);
                }
            });
            if (sum >= price) {
                temp[0] += 1;  
            } else {
                temp[1] += sum;
            }
        });
        if (answer[0] < temp[0]) {
            answer[0] = temp[0];
            answer[1] = temp[1];
        } else if (answer[0] === temp[0]) {
            if (answer[1] < temp[1]) {
                answer[1] = temp[1];
            }
        }
        
    }); 
    return answer;
}