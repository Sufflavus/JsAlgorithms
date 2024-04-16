/*
FrogRiverOne
Find the earliest time when a frog can jump to the other side of a river.

A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

For example, you are given integer X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4

In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

Write a function:

function solution(X, A);

that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

If the frog is never able to jump to the other side of the river, the function should return −1.

For example, given X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4

the function should return 6, as explained above.

Write an efficient algorithm for the following assumptions:

- N and X are integers within the range [1..100,000];
- each element of array A is an integer within the range [1..X].
*/
function FrogRiverOne (X, A) {
    let fellLeaves = Array.from({ length: X }, () => false);
    let fellLeavesCount = 0;

    for (let i = 0, length = A.length; i < length; i++) {
        let leaveIndex = A[i] - 1;

        if (fellLeaves[leaveIndex]) {
            continue;
        }

        fellLeaves[leaveIndex] = true;
        fellLeavesCount++;

        if (fellLeavesCount == X) {
            return i;
        }
    }
    return -1;
}

/*
PermCheck
Check whether array A is a permutation.

A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2

is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3

is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2

the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3

the function should return 0.

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [1..100,000];
- each element of array A is an integer within the range [1..1,000,000,000].
*/
function PermCheck (A) {
    const sortedArray = [...A].sort((a, b) => a - b);

    if (sortedArray[0] != 1) {
        return 0;
    }

    for (let i = 1, length = A.length; i < length; i++) {
        if (sortedArray[i] != sortedArray[i - 1] + 1) {
            return 0;
        }
    }

    return 1;
}

/*
MissingInteger
Find the smallest positive integer that does not occur in a given sequence.

This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [1..100,000];
- each element of array A is an integer within the range [−1,000,000..1,000,000].
*/
function MissingInteger (A) {
    const n = A.length;

    if (n === 0) {
        return 1;
    }

    const sortedArray = [...A].filter(x => x > 0).sort((a, b) => a - b);

    if (sortedArray[0] != 1) {
        return 1;
    }

    for (let i = 1; i < n; i++) {
        if (sortedArray[i] == sortedArray[i - 1] || sortedArray[i] <= 0) {
            continue;
        }

        if (sortedArray[i] != sortedArray[i - 1] + 1 && sortedArray[i - 1] + 1 > 0) {
            return sortedArray[i - 1] + 1;
        }
    }

    return sortedArray[n - 1] + 1 > 0 ? sortedArray[n - 1] + 1 : 1;
}
