// // for of loop
// const number = [1,2,3,4,5,6,7,8,9];
// for(const num of number){
//     console.log(num, 'example of for of loop');
// }
// // while loop
// let i = 0;
// while(i<= 10){
//     console.log(i,'example of while loop');
//     i++;
// }
// // do while loop
// let n = 0;
// do{
//     console.log(n, 'example of do while loop');
//     n++;
// }
// while(n <= 10);

// // for loop
// for(let i = 0; i<=10; i++){
//     console.log(i, 'example of for loop');
// }

// sum using loop
let n = 1;
let sum = 0;
while (n <= 10) {
  sum += n;
  n++;
}
console.log("sum", sum);

// even number using loop
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 1) {
    console.log(i);
  }
}

// odd Number using for loop
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// another way for even num

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// another way for odd num

for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// decremental
for (let i = 20; i >= 1; i--) {
  console.log(i);
}



for (let i = 0; i <= 10; i++) {
    console.log(i);
  if (i >= 5) {
    break;
  }
}



for (let i = 0; i <= 10; i++) {
    
  if (i >= 5) {
    continue;
  }
  console.log('skip:',i);
}