/*
BinaryGap
Find longest sequence of zeros in binary representation of an integer.

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
*/

function SlowBinaryGap (N) {
    const binaryArray = ConvertNumberToBinaryArray(N);

    let max = 0,
        currentGap = 0;

    for (let i = 0, length = binaryArray.length; i < length; i++) {
        if (binaryArray[i] == 1 && currentGap > 0) {
            if (currentGap > max) {
                max = currentGap;
            }
            currentGap = 0;
            continue;
        }

        if (binaryArray[i] == 1) {
            continue;
        }

        if (currentGap == 0 && i > 0 && binaryArray[i - 1] == 1 || currentGap > 0) {
            currentGap++;
        }
    }
    return max;
}

function FastBinaryGap (N) {
    let maxGap = 0,
        currentGap = 0,
        gapStartIndex = -1,
        i = 0;

    while (N >= 1) {
        let currentNumber = N % 2;
        N = Math.floor(N / 2);

        if (currentNumber == 1) {
            gapStartIndex = i;

            if (currentGap > 0) {
                if (currentGap > maxGap) {
                    maxGap = currentGap;
                }
                currentGap = 0;
            }
        }
        else if (currentGap == 0 && i > 0 && gapStartIndex == i - 1 || currentGap > 0) {
            currentGap++;
        }
        i++;
    }
    return maxGap;
}

function ConvertNumberToBinaryArray (N) {
    let result = [];

    while (N >= 1) {
        result.unshift(N % 2);
        N = Math.floor(N / 2);
    }

    return result;
}
