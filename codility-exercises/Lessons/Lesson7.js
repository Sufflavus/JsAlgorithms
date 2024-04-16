function Brackets (S) {
    let stack = [];
    for (let i = 0, length = S.length; i < length; i++) {
        const c = S[i];
        if (c === "{" || c === "[" || c === "(") {
            stack.push(c);
            continue;
        }

        if (stack.length === 0) {
            return 0;
        }

        const left = stack.pop();
        const pair = left + c;

        if (pair !== "{}" && pair !== "[]" && pair !== "()") {
            return 0;
        }
    }

    return stack.length == 0 ? 1 : 0;
}

function Fish (A, B) {
    var upstreamAliveFishesCount = 0;
    var downstreamAliveFishes = [];

    for (let i = 0, length = A.length; i < length; i++) {
        if (B[i] === 1) {
            downstreamAliveFishes.push(A[i]);
            continue;
        }

        let upstreamFish = A[i];
        upstreamAliveFishesCount++;

        while (downstreamAliveFishes.length > 0) {
            let downstreamFish = downstreamAliveFishes.pop();

            if (downstreamFish > upstreamFish) {
                downstreamAliveFishes.push(downstreamFish);
                upstreamAliveFishesCount--;
                break;
            }
        }
    }
    return upstreamAliveFishesCount + downstreamAliveFishes.length;
}

function Nesting (S) {
    let leftCount = 0;

    for (let i = 0, length = S.length; i < length; i++) {
        if (S[i] === '(') {
            leftCount++;
            continue;
        }
        if (leftCount === 0) {
            return 0;
        }

        leftCount--;
    }

    return leftCount === 0 ? 1 : 0;
}