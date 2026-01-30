// task 01
for (let i = 1; i <= 60; i++) {
  console.log(
    i,
    "I will invest at least 6 hrs every single day for next 60 days!",
  );
}

// task 02
for (let i = 61; i <= 100; i += 2) {
  console.log(i);
}

// task 03
for (let i = 78; i <= 98; i += 2) {
  console.log(i);
}

let sum = 0;
for (let i = 91; i <= 129; i += 2) {
  sum += i;
}
console.log("total:", sum);

let sumEven = 0;
for (let i = 51; i <= 85; i++) {
  if (i % 2 !== 1) {
    sum += i;
    console.log(i);
  }
}
console.log("total:", sum);

let num = 9;
for (let i = 1; i <= 10; i++) {
  const result = num * i;
  console.log(num, "x", i, "=", result);
}

for (let i = 81; i >= 65; i--) {
  console.log(i);
}
