function reverseString(str) {
    str = "" + str;
    var letters = str.split("");
    return letters.reverse().join("");
}