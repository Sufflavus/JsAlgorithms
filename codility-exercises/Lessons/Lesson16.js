function MaxNonoverlappingSegments (A, B) {
    const lengthA = A.length;

    if (lengthA === 0) {
        return 0;
    }

    if (lengthA < 2) {
        //return lengthA;
    }

    let count = 0,
        end = B[0],
        i = 1;

    while (i < lengthA) {
        while (i < lengthA && A[i] < end) {
            i++;
        }

        if (i === lengthA) {
            break;
        }

        i++;
        count++;
        end = B[i];
    }

    return count;
}

function TieRopes (K, A) {
    let
        count = 0,
        length = 0;

    for (let i = 0, l = A.length; i < l; i++) {
        length += A[i];
        if (length >= K) {
            count++;
            length = 0;
        }
    }

    return count;
}