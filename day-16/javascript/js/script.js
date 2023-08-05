// Bài 1:
console.log("Bài 1:");

var a = 6,
  b = 9;

console.log(`Hai số ban đầu: ${a}, ${b}`);

a = a + b; // 6 + 9 = 15
b = a - b; // 15 - 9 = 6 (=a)
a = a - b; // 15 - 6 = 9 (=b)

console.log(`Hai số sau hoán vị: ${a}, ${b}`);

// Bài 2:
console.log("Bài 2:");

S = 10 + 20 + 5 ** 10 / 2;
console.log(`Kết quả phép tính: S = ${S}`);

// Bài 3:
console.log("Bài 3:");

var a = 10,
  b = 69,
  c = 96,
  maxValue = a;

if (b > maxValue && b > c) {
  console.log(`Số lớn nhất là: ${b}`);
} else if (c > maxValue && c > b) {
  console.log(`Số lớn nhất là: ${c}`);
} else `Số lớn nhất là: ${a}`;

// Bài 4:
console.log("Bài 4:");

var a = 69,
  b = -69;
console.log(`Hai số a,b: ${a}, ${b}`);

if (a * b > 0) {
  console.log("--Hai số a và b cùng dấu--");
} else if (a * b < 0) {
  console.log("--Hai số a và b trái dấu--");
} else console.log("--Không xác định được trái dấu hay cùng dấu vì có số 0--");

// Bài 5:
console.log("Bài 5:");

var a = 96,
  b = 69,
  c = 123;
console.log(`Ba số ban đầu: ${a}, ${b}, ${c}`);

if (a > b) {
  a += b;
  b = a - b;
  a -= b;
} else if (b > c) {
  b += c;
  c = b - c;
  b -= c;
} else if (a > c) {
  a += c;
  c = a - c;
  a -= c;
}
console.log(`Ba số sau sắp xếp: ${a}, ${b}, ${c}`);

