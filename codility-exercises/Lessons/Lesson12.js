function ChocolatesByNumbers (N, M) {
    return Math.floor(N / Gcd2(N, M));
}

function Gcd2 (a, b) {
    if (a % b === 0) {
        return b;
    }

    return Gcd2(b, a % b);
}