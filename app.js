// console.log("love you Mr Ritesh kedar");
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement(["hello", "world"])); // "hello"
console.log(getFirstElement([1, 2, 3])); // 1
var Tuple = /** @class */ (function () {
    function Tuple(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }
    return Tuple;
}());
var tuple = new Tuple('sir', 5);
console.log(tuple.item1);
console.log(tuple.item2);
