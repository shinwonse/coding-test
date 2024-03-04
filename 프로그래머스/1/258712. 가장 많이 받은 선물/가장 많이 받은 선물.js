// 선물 지수 = 자신이 친구들에게 준 선물의 수 - 받은 선물의 수
// 선물 지수도 같다면 다음 달에 선물을 주고받지 않음
// 선물을 가장 많이 받을 친구가 받을 선물의 수
function solution(friends, gifts) {
    const len = friends.length;
    const map = new Map();
    const giftTable = Array.from({ length: len }, () => new Array(len).fill(0));
    const rankInfo = Array.from({ length: len }, () => 0);
    const nextMonth = Array.from({ length: len }, () => 0);
    
    friends.forEach((friend, index) => {
        map.set(friend, index);
    });
    
    gifts.forEach((gift) => {
        const [from, to] = gift.split(' ');
        giftTable[map.get(from)][map.get(to)]++;    
    });
    
    for (let i = 0; i < len; i++) {
        rankInfo[i] = giftTable[i].reduce((acc, cur) => acc + cur);
        for (let j = 0; j < len; j++) {
            rankInfo[i] -= giftTable[j][i];
        }
    }
    
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (i === j) continue;
            if (giftTable[i][j] > giftTable[j][i]) nextMonth[i]++;
            if (giftTable[i][j] < giftTable[j][i]) nextMonth[j]++;
            if (giftTable[i][j] === giftTable[j][i]) {
                if (rankInfo[i] > rankInfo[j]) nextMonth[i]++;
                if (rankInfo[i] < rankInfo[j]) nextMonth[j]++;
            }
        }
    }
    
    return Math.max(...nextMonth);
}