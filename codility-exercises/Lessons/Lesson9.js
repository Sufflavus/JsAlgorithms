function MaxProfit (A) {
    let length = A.length;

    if (length < 2) {
        return 0;
    }

    let
        minPrice = A[0],
        maxOnStep = 0,
        maxProfit = 0;

    for (let i = 1; i < length; i++) {
        maxOnStep = Math.max(A[i] - minPrice, 0);
        minPrice = Math.min(minPrice, A[i]);
        maxProfit = Math.max(maxOnStep, maxProfit);
    }

    return maxProfit;
}

function MaxDoubleSliceSum (A) {
    const n = A.length;

    if (n == 3) {
        return 0;
    }

    let maxLeftSumm = Array.from({ length: n }, () => 0);
    let maxRightSumm = Array.from({ length: n }, () => 0);

    // Kadane's algorithm in forward direction
    for (let i = 1; i < n - 1; i++) {
        maxLeftSumm[i] = Math.max(0, maxLeftSumm[i - 1] + A[i]);
    }

    // Kadane's algorithm in reverse direction
    for (var i = n - 2; i > 0; i--) {
        maxRightSumm[i] = Math.max(0, maxRightSumm[i + 1] + A[i]);
    }

    let max = 0;

    for (let i = 1; i < n - 1; i++) {
        let summ = maxLeftSumm[i - 1] + maxRightSumm[i + 1];

        if (summ > max) {
            max = summ;
        }
    }

    return max;
}