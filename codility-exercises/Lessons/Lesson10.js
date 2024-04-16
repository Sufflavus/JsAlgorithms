function CountFactors (N) {
    let
        i = 1,
        result = 0;

    while (i * i < N) {
        if (N % i === 0) {
            result += 2;
        }
        i++;
    }

    if (i * i === N) {
        result++;
    }

    return result;
}

function MinPerimeterRectangle (N) {
    let minPerimeter = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i * i <= N; i++) {
        if (N % i == 0) {
            minPerimeter = Math.min(minPerimeter, 2 * (N / i + i));
        }
    }

    return minPerimeter;
}