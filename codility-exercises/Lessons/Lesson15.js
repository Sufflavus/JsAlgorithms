function AbsDistinct (A) {
    const length = A.length;

    if (!length) {
        return 0;
    }

    const sortedArray = A.map(x => Math.abs(x)).sort((a, b) => a - b);
    let count = 1;

    for (let i = 1; i < length; i++) {
        if (sortedArray[i - 1] != sortedArray[i]) {
            count++;
        }
    }

    return count;
}

function CountDistinctSlices (M, A) {
    const n = A.length;

    let
        counters = Array.from({ length: M + 1 }, () => 0),
        head = 0,
        tail = 0,
        result = 0;

    while (tail < n) {
        while (head < n && counters[A[head]] != 2) {
            counters[A[head]]++;
            if (counters[A[head]] == 2) {
                break;
            }
            head++;
        }

        result += head - tail;

        if (result > 1000000000) {
            return 1000000000;
        }

        counters[A[tail]] = 0;
        tail++;
    }

    return result;
}

function CountTriangles (A) {
    const
        n = A.length,
        sortedArray = [...A].sort((a, b) => a - b);

    let result = 0;

    for (let i = 0; i < n - 2; i++) {
        let j = i + 2;
        for (let k = i + 1; k < n - 1; k++) {
            while (j < n && sortedArray[i] + sortedArray[k] > sortedArray[j]) {
                j++;
                result += j - k - 1;
            }
        }
    }

    return result;
}