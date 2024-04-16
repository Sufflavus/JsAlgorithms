function Dominator (A) {
    const length = A.length;

    if (length === 0) {
        return -1;
    }

    const sortedArray = [...A].sort((a, b) => a - b);
    let candidate = sortedArray[Math.floor(length / 2)];
    let leader = candidate;
    let count = 0;

    for (let i = 0; i < length; i++) {
        if (sortedArray[i] == candidate) {
            count++;
        }
    }

    if (count <= length / 2) {
        return -1;
    }

    if (count > length / 2) {
        leader = candidate;
    }

    for (let i = 0; i < length; i++) {
        if (A[i] === leader) {
            return i;
        }
    }

    return -1;
}

function EquiLeader (A) {
    let length = A.length;

    if (length < 2) {
        return 0;
    }

    const sortedArray = [...A].sort((a, b) => a - b);
    let candidate = sortedArray[Math.floor(length / 2)];
    let count = 0;

    for (let i = 0; i < length; i++) {
        if (sortedArray[i] === candidate) {
            count++;
        }
    }

    if (count <= length / 2) {
        return 0;
    }

    const leader = candidate;
    let leadersCount = 0;

    for (let i = 0; i < length; i++) {
        if (A[i] === leader) {
            leadersCount++;
        }
    }

    let equiLeaders = 0;
    let leftSum = 0;

    for (let i = 0; i < length; i++) {
        if (A[i] == leader) {
            leftSum++;
        }
        if (leftSum > (i + 1) / 2 && leadersCount - leftSum > (length - i - 1) / 2) {
            equiLeaders++;
        }
    }

    return equiLeaders;
}