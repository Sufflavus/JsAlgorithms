function Distinct (A) {
    const length = A.length;

    if (length === 0) {
        return 0;
    }

    const sortedArray = [...A].sort((a, b) => a - b);
    let result = 1;

    for (let i = 1; i < length; i++) {
        if (sortedArray[i] != sortedArray[i - 1]) {
            result++;
        }
    }
    return result;
}

function MaxProductOfThree (A) {
    const length = A.length;

    if (length < 3) {
        return 0;
    }

    const sortedArray = [...A].sort((a, b) => a - b);

    return Math.max(sortedArray[length - 1] * sortedArray[length - 2] * sortedArray[length - 3],
        sortedArray[0] * sortedArray[1] * sortedArray[length - 1]);
}

function Triangle (A) {
    const length = A.length;

    if (length < 3) {
        return 0;
    }

    const sortedArray = [...A].sort((a, b) => a - b);

    for (let i = 0; i < length - 2; i++) {
        // Beware of overflow
        if (sortedArray[i] > 0 && sortedArray[i] > sortedArray[i + 2] - sortedArray[i + 1]) {
            return 1;
        }
    }

    return 0;
}