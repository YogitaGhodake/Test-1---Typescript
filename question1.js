// 1. Create a Function that will take two arguments, 
// and the second argument will accept only a data key of first arguments.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function extractData(data, key) {
    return data[key];
}
var myData = {
    name: 'Max',
    age: 30,
    occupation: 'Software Engineer'
};
var Sname = extractData(myData, 'name');
console.log(Sname);
var age = extractData(myData, 'age');
console.log(age);
var occupation = extractData(myData, 'occupation');
console.log(occupation);
// 1.  Output: 'John Doe'
// 2. Output: 35
// 3. Output: 'Software Engineer'
// 2. Create a TS generic that will change the type of specific Record's or Map's property to a provided type
function changeRecordPropertyType(record, key, newType) {
    var _a;
    return __assign(__assign({}, record), (_a = {}, _a[key] = newType, _a));
}
var record = { name: 'John', age: 32 };
var updatedRecord = changeRecordPropertyType(record, 'age', '32');
console.log(updatedRecord);
function greetUser(user) {
    if (typeof user.name !== 'string') {
        (" Name must be a string.");
    }
    console.log("Hello, ".concat(user.name, "!"));
    if (user.age !== undefined && typeof user.age !== 'number') {
        ("Age must be a number.");
    }
    if (user.age) {
        console.log("You are ".concat(user.age, " years old."));
    }
    if (user.isAdmin) {
        console.log("You are an admin.");
    }
}
var user1 = { name: 'John Doe', age: 30, isAdmin: true };
greetUser(user1);
//   4. Create a Function that will take an argument type of number Array and return an array
//   Input = [2,15,30,32,7,-2]
//   Expected output = [82,69,54,52,77,86]
//   Diff:- input[n] === sum of n elements - input[n]
//   Note:- Time and Space complexity must be O(1)
function diffArray(input) {
    var n = input.length;
    var result = new Array(n);
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += input[i];
    }
    for (var i = 0; i < n; i++) {
        result[i] = sum - input[i];
    }
    return result;
}
var input = [2, 15, 30, 32, 7, -2];
console.log(diffArray(input));
// 5.
// import React from "react";
// interface Props {
//   message: string;
// }
// const withMessage = <P extends Props>(Component: React.FC<P>) => (props: P) => {
//   return (
//     <div>
//       <p>{props.message}</p>
//       <Component {...props} />
//     </div>
//   );
// };
// const MyComponent: React.FC<Props> = (props) => {
//   return 
//   <p>This is my component</p>;
// };
// const EnhancedComponent = withMessage(MyComponent);
// export default EnhancedComponent;
