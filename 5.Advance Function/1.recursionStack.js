// pow(2,2,)

// function pow(x,n){
//     let result = 1

//     // multiply result by x n times in the loop
//     for(let i=0; i < n; i++){
//         result *= x
//     }
//     return result
// }

// console.log(pow(2,2,))
// console.log(pow(2, 4))

// Recursive thinking

// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log(pow(2, 2));
// console.log(pow(2, 4));

// x * pow(x, n - 1) ==> xn = x * xn-1 .

// using conditional operator
// function pow(x, n) {
//   return n == 1 ? x : x * pow(x, n - 1);
// }

// let company = {
//   // the same object, compressed for brevity
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };

// The function to do the job
// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     // case (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
//   } else {
//     // case (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
//     }
//     return sum;
//   }
// }
// console.log(sumSalaries(company));

// Task

// function sumTo(n) {
//   let sum = 0;
//   if (n == 1) {
//     return n;
//   } else {
//     sum += n + sumTo(n - 1);
//   }
//   return sum;
// }

// console.log(sumTo(100));

// function factorial(n) {
//   let fact = 0;
//   if (n == 1 || n == 0) {
//     return n;
//   } else {
//     fact = n * factorial(n - 1);
//   }
//   return fact;
// }

// console.log(factorial(5));

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// console.log(fib(7));

// Linked List

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

// function printList(list) {
//   console.log(list.value); // output the current item
//   if (list.next) {
//     printList(list.next); // do the same for the rest of the list
//   }
// }
console.log(printList(list));

// Output a single-linked list in the reverse order


// function printReverseList(list) {
//   if (list.next) {
//     printReverseList(list.next);
//   }
//   console.log(list.value);
// }

function printReverseList(list) {
  let arr = [];
  let tmp = list;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
console.log(printReverseList(list));