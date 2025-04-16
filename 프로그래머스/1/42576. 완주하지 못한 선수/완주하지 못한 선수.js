function solution(participant, completion) {
    const participantObj = {};
    
    for (const p of participant) {
        if (participantObj[p] === undefined) {
            participantObj[p] = 1;
        } else {
            participantObj[p] += 1;
        }
    }

    for (const c of completion) {
        if (participantObj[c]) {
            participantObj[c] -= 1;
        }
    }

    for (const [key, value] of Object.entries(participantObj)) {
        if (value !== 0) {
            return key;
        }
    }
}