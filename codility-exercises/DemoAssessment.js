function solution (A) {
    let B = A.filter(item => item >= 1 && item < 1000000);

    if (B.length === 0) {
        return 1;
    }

    B.sort((a, b) => (+a) - (+b));

    let uniqueItems = [];

    for (let i = 0, length = B.length; i < length; i++) {
        let element = B[i];

        if (i !== 0 && element === B[i - 1]) {
            continue;
        }

        uniqueItems.push(element);

        if (element !== uniqueItems.length) {
            uniqueItems.pop();
            break;
        }
    }

    if (uniqueItems.length === 0) {
        return 1;
    }

    return uniqueItems[uniqueItems.length - 1] + 1;
}