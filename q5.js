// returna strängens läng
let clothing = ["tröja", "byxor", "jacka", "skor", "mössa"];
let string = "Hello, world!";

export function measureString(string) {
    return string.length;
}
console.log(measureString(string))


// returna arrayens längd
export function measureArray(array) {
    return array.length;
}
console.log(measureArray(clothing));