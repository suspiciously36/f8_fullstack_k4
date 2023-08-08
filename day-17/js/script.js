// Bai 1:

var km = 6;

var price;

var unit_price1 = 15000,
  unit_price2 = 13500,
  unit_price3 = 11000;

var discount = 15 / 100;

if (km <= 1) {
  price = unit_price1 * km;
} else if (1 <= km && km <= 5) {
  price = unit_price2 * km;
} else if (km > 5 && km <= 120) {
  price = unit_price3 * km;
} else {
  price = unit_price3 * km * (1 - discount);
}

console.log(price);

// Bai 2:

var electric = 400;

var price;

var unit_price1 = 1678,
  unit_price2 = 1734,
  unit_price3 = 2014,
  unit_price4 = 2536,
  unit_price5 = 2834,
  unit_price6 = 2927;

if (0 < electric && electric <= 50) {
  price = unit_price1 * electric;
} else if (51 <= electric && electric <= 100) {
  price = unit_price2 * electric;
} else if (101 <= electric && electric <= 200) {
  price = unit_price3 * electric;
} else if (201 <= electric && electric <= 300) {
  price = unit_price4 * electric;
} else if (301 <= electric && electric <= 400) {
  price = unit_price5 * electric;
} else {
  price = unit_price6 * electric;
}

console.log(price);

// Bai 3:

var n = 69;
var s = 0;

if (Number.isInteger(n) & (n > 0)) {
  for (var i = 1; i <= n; i++) {
    s += i * (i + 1);
  }
  console.log(`S = ${s}`);
} else {
  console.log(`Nhập n thuộc Z+`);
}

// Bai 4:

function isPrimeNumber(n) {
  var check = true;

  if (n % 1 !== 0 || n <= 1) {
    check = false;
  } else {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        check = false;
        break;
      }
    }
  }
  return check;
}

var a = 2;
if (isPrimeNumber(a)) {
  console.log(`${a} Là số nguyên tố`);
} else {
  console.log(`${a} Không phải số nguyên tố`);
}


// Bai 5:

function drawTriangle(t) {
  for (var i = 1; i <= t; i++) {
    var eachLine = "";

    for (var j = 1; j <= i; j++) {
      eachLine += j + " ";
    }
    eachLine = eachLine.trim();
    console.log(eachLine);
  }
}

var t = 10;
drawTriangle(t);


// Bai 6:

var chessboard = document.getElementById('chessboard');
for (var i = 0; i < 8; i++) {
   for (var j = 0; j < 8; j++) {
      var chessSquare = document.createElement('div');
      chessSquare.className = 'chess-square';
      if ((i + j) % 2 == 0) {
         chessSquare.style.backgroundColor = '#000';
      }
      chessboard.appendChild(chessSquare);
   }
}


// Bai 7:

const multiplicationTable = document.getElementById("multiplication-table");
for (let i = 1; i <= 10; i++) {
  var row = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    row.appendChild(document.createElement("td")).innerHTML = `${i * j}`;

}

  multiplicationTable.appendChild(row);
}


// Bai 8:

if (Number.isInteger(n) && n > 0) {
function calculation(n) {
    if (n === 1) 
    return 1;
    return 1 / n + calculation(n - 1);
} 
}
  
  console.log(calculation(13));
  