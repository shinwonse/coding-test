function solution(bandage, health, attacks) {
    const [duration, healAmount, bonusHealAmount] = bandage;
    const lastTime = attacks[attacks.length - 1][0];
    const attackMap = new Map();
    attacks.map((attack) => {
        const [time, power] = attack;
        attackMap.set(time, power);
    });
    let currentTime = 0;
    let continueTime = 0;
    let currentHealth = health;
    while (currentTime <= lastTime) {
        if (attackMap.get(currentTime)) {
            currentHealth -= attackMap.get(currentTime);
            currentTime += 1;
            continueTime = 0;
            if (currentHealth <= 0) {
                return -1;
            }
        } else {
            if (currentHealth + healAmount >= health) {
                currentHealth = health;
            } else {
                currentHealth += healAmount;
            }
            currentTime += 1;
            continueTime += 1;
            if (continueTime === duration) {
                if (currentHealth + healAmount >= health) {
                    currentHealth = health;
                } else {
                    currentHealth += bonusHealAmount;
                }
                continueTime = 0;
            }
        }
    }
    return currentHealth >= 0 ? currentHealth: -1;
}