// 1. Create a Function that will take two arguments, 
// and the second argument will accept only a data key of first arguments.

interface Data {
    name: string;
    age: number;
    occupation: string;
}

type DataKey = keyof Data;

function extractData(data: Data, key: DataKey) {
    return data[key];
}

const myData: Data = {
    name: 'Max',
    age: 30,
    occupation: 'Software Engineer'
};

const Sname = extractData(myData, 'name');
console.log(Sname); 

const age = extractData(myData, 'age');
console.log(age);

const occupation = extractData(myData, 'occupation');
console.log(occupation); 


 // 1.  Output: 'John Doe'
 // 2. Output: 35
// 3. Output: 'Software Engineer'



// 2. Create a TS generic that will change the type of specific Record's or Map's property to a provided type

function changeRecordPropertyType<K extends keyof any, T>(record: Record<K, any>, key: K, newType: T): Record<K, T> {
    return { ...record, [key]: newType };
  }
  
  const record = { name: 'John', age: 32 };
  
  const updatedRecord = changeRecordPropertyType(record, 'age', '32');
  
  console.log(updatedRecord);


  
  // Output: { name: 'John', age: '32' }
  
// 3. Create a Function that will take an object with conditional property data.
    interface User {
    name: string;
    age?: number;
    isAdmin?: boolean;
  }
  
  function greetUser(user: User) {
    if (typeof user.name !== 'string') {
      (` Name must be a string.`);
    }
    console.log(`Hello, ${user.name}!`);
  
    if (user.age !== undefined && typeof user.age !== 'number') {
      (`Age must be a number.`);
    }
    if (user.age) {
      console.log(`You are ${user.age} years old.`);
    }
  
    if (user.isAdmin) {
      console.log(`You are an admin.`);
    }
  }

  const user1 = { name: 'John Doe', age: 30, isAdmin: true };
  greetUser(user1);

//   4. Create a Function that will take an argument type of number Array and return an array
//   Input = [2,15,30,32,7,-2]
//   Expected output = [82,69,54,52,77,86]
//   Diff:- input[n] === sum of n elements - input[n]
//   Note:- Time and Space complexity must be O(1)

function diffArray(input: number[]): number[] {
    const n = input.length;
    const result = new Array(n);
    let sum = 0;
  
    for (let i = 0; i < n; i++) {
      sum += input[i];
    }
  
    for (let i = 0; i < n; i++) {
      result[i] = sum - input[i];
    }
  
    return result;
  }


  const input = [2, 15, 30, 32, 7, -2];

console.log(diffArray(input));



