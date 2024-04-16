/*
FirstUnique
Find the first unique number in a given sequence.

A non-empty array A consisting of N integers is given. The unique number is the number that occurs exactly once in array A.

For example, the following array A:

  A[0] = 4
  A[1] = 10
  A[2] = 5
  A[3] = 4
  A[4] = 2
  A[5] = 10
contains two unique numbers (5 and 2).

You should find the first unique number in A. In other words, find the unique number with the lowest position in A.

For above example, 5 is in second position (because A[2] = 5) and 2 is in fourth position (because A[4] = 2). So, the first unique number is 5.

Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the first unique number in A. The function should return −1 if there are no unique numbers in A.

For example, given:

  A[0] = 1
  A[1] = 4
  A[2] = 3
  A[3] = 3
  A[4] = 1
  A[5] = 2
the function should return 4. There are two unique numbers (4 and 2 occur exactly once). The first one is 4 in position 1 and the second one is 2 in position 5. The function should return 4 bacause it is unique number with the lowest position.

Given array A such that:

  A[0] = 6
  A[1] = 4
  A[2] = 4
  A[3] = 6
the function should return −1. There is no unique number in A (4 and 6 occur more than once).

Write an efficient algorithm for the following assumptions:
- N is an integer within the range [1..100,000];
- each element of array A is an integer within the range [0..1,000,000,000].
*/
// (score = 72%, Correctness = 100%, Performance = 40%)
function FirstUnique (A) {
    if (A.length === 0) {
        return -1;
    }

    let sortedArray = [...A].sort((a, b) => a - b);

    let hasUniqueItems = false;
    let minIndex = A.length - 1;

    for (let i = 0, length = sortedArray.length; i < length; i++) {
        let element = sortedArray[i];

        if ((i === 0 || i !== length - 1) && element === sortedArray[i + 1]) {
            continue;
        }

        if (i !== 0 && element === sortedArray[i - 1]) {
            continue;
        }

        let originalIndex = A.indexOf(element);

        if (originalIndex === 0) {
            return A[originalIndex];
        }

        hasUniqueItems = true;

        if (minIndex > originalIndex) {
            minIndex = originalIndex;
        }
    }

    if (!hasUniqueItems) {
        return -1;
    }

    return A[minIndex];
}
