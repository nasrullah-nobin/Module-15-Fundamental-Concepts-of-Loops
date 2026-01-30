// for (let i = 1; i <= 200; i++) {
//   if (i === 100) {
//     console.log(i);
//     break;
//   }
// }

let i = 1;
let sum = 0;
while (i <= 100) {
  sum += i;
  if (sum >= 100) {
    break;
  }
  sum += i;
  i++;
}
console.log(sum);

let num = 0;
for (let i = 1; i <= 100; i++) {
  num += i;
  if (Number.isInteger(Math.sqrt(num))) {
    console.log(num);
    break;
  }
}


for(let i = 0; i<=40; i++){
    if(i % 2 !==0){
        continue
    }
    console.log(i);
}



for(let i = 55; i<=85; i+=2){
    if(i % 5 === 0){
        continue
    }
    console.log(i);
}