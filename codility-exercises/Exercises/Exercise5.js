/*
ParkingBill
Given two strings representing times of entry and exit from a car parking lot, find the cost of the ticket according to the given billing rules.

You parked your car in a parking lot and want to compute the total cost of the ticket. The billing rules are as follows:

- The entrance fee of the car parking lot is 2;
- The first full or partial hour costs 3;
- Each successive full or partial hour (after the first) costs 4.

You entered the car parking lot at time E and left at time L. In this task, times are represented as strings in the format "HH:MM" (where "HH" is a two-digit number between 0 and 23, which stands for hours, and "MM" is a two-digit number between 0 and 59, which stands for minutes).

Write a function:

function solution(E, L);

that, given strings E and L specifying points in time in the format "HH:MM", returns the total cost of the parking bill from your entry at time E to your exit at time L. You can assume that E describes a time before L on the same day.

For example, given "10:00" and "13:21" your function should return 17, because the entrance fee equals 2, the first hour costs 3 and there are two more full hours and part of a further hour, so the total cost is 2 + 3 + (3 * 4) = 17. Given "09:42" and "11:42" your function should return 9, because the entrance fee equals 2, the first hour costs 3 and the second hour costs 4, so the total cost is 2 + 3 + 4 = 9.

Assume that:

- strings E and L follow the format "HH:MM" strictly;
- string E describes a time before L on the same day.
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

*/

function ParkingBill (E, L) {
    const
        entranceFee = 2,
        firstHourFee = 3,
        otherThanFirstHourFee = 4,
        separator = ':';

    const
        [h0, m0] = E.split(separator).map(item => +item),
        [h1, m1] = L.split(separator).map(item => +item),
        hoursCount = h1 - h0 + (m1 > m0 ? 1 : 0);

    return entranceFee +
        (hoursCount > 0 ? 1 : 0) * firstHourFee +
        (hoursCount > 1 ? hoursCount - 1 : 0) * otherThanFirstHourFee;
}

function ParityDegree (N) {
    if (N % 2 === 1) {
        return 0;
    }

    let power = 1;
    let currentValue = 2;

    while (currentValue < N) {
        if (N % currentValue !== 0) {
            power--;
            currentValue /= 2;
            break;
        }

        power++;
        currentValue *= 2;
    }

    if (currentValue > N) {
        power--;
    }

    return power;
}
