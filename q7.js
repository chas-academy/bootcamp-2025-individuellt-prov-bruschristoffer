// tar två nummer och returnerar det mindre numret
let a = 13;
let b = 7;

export const findSmallerNumber = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};
console.log(findSmallerNumber(a, b));