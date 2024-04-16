function CountSemiprimes (N, P, Q) {
    if (N < 4) {
        return [0];
    }

    let sieve = Sieve(N);
    let semiprimes = [];

    var i = 2;

    while (i * i <= N) {
        if (!sieve[i]) {
            i++;
            continue;
        }

        for (let j = i * i; j < N + 1; j++) {
            if (j % i === 0 && sieve[j / i]) {
                semiprimes.push(j);
            }
        }
        i++;
    }

    let counts = Array.from({ length: N + 1 }, (_, index) => index === 4 ? 1 : 0);
    let m = 1;

    for (let j = 5; j < N + 1; j++) {
        if (semiprimes.includes(j)) {
            m++;
        }
        counts[j] = m;
    }

    let result = [];

    for (let j = 0, length = Q.length; j < length; j++) {
        result.push(counts[Q[j]] - counts[P[j] - 1]);
    }

    return result;
}

function Sieve (n) {
    let sieve = Array.from({ length: n + 1 }, (_, index) => index !== 0 && index !== 1);
    let i = 2;

    while (i * i <= n) {
        if (sieve[i]) {
            let k = i * i;
            while (k <= n) {
                sieve[k] = false;
                k += i;
            }
        }
        i++;
    }
    return sieve;
}