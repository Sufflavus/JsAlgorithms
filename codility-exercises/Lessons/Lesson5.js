function PassingCars (A) {
    const
        length = A.length,
        prefixSums = PrefixSums(A);

    let couplesCount = 0;

    for (let i = 0; i < length; i++) {
        if (A[i] !== 0) {
            continue;
        }

        let rightSum = GetSum(prefixSums, i + 1, length - 1);
        couplesCount += rightSum;

        if (couplesCount > 1000000000) {
            return -1;
        }
    }
    return couplesCount;
}

function PrefixSums (array) {
    const length = array.length;
    let result = Array.from({ length: length + 1 }, () => 0);

    for (let i = 1; i < length + 1; i++) {
        result[i] = result[i - 1] + array[i - 1];
    }

    return result;
}

function GetSum (prefixSums, start, end) {
    return prefixSums[end + 1] - prefixSums[start];
}

function CountDiv (A, B, K) {
    if (A % K == 0 || B % K == 0) {
        return Math.floor((B - A) / K) + 1;
    }

    return Math.floor(B / K) - Math.floor(A / K);
}