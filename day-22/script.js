// Bai 1:
// Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter

// Yêu cầu chi tiết:

// Hàm return về giá trị
// Ép ràng buộc kiểu dữ liệu là số
// Nếu dữ liệu truyền vào không hợp lệ, trả về thông báo lỗi

const sumExpression = (...args) => {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    if (!isNaN(parseFloat(args[i]))) {
      result += parseFloat(args[i]);
    } else return `error!`;
  }
  return result;
};

console.log(sumExpression(1, 2, 3, "4", "haha"));

// Bai 2:
// Chuyển đổi mảng 1 chiều thành dạng lồng (nested)

const arr3 = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

const nestingArr = function (arr) {
  const map = {};
  const results = [];
  arr.forEach((value) => {
    const temp = { id: value.id, name: value.name };
    map[value.id] = temp;
    if (value.parent === 0) {
      results.push(temp);
    } else {
      const parent = map[value.parent];
      if (parent) {
        if (parent.children) {
          parent.children.push(temp);
        } else {
          parent.children = [temp];
        }
      }
    }
  });
  return results;
};

console.log(nestingArr(arr3));

// Bai 3:
// Viết lại vòng lặp reduce() trong Array bằng cách sử dụng Prototype trong Javascript

// Lưu ý: Đặt tên là reduce2()

let arr = [0, 1, 2, 3, 4, 5, 6, 7];

Array.prototype.reduce2 = function (callback, initialValue) {
  if (typeof callback === "function") {
    if (!this.length) {
      return initialValue;
    }
    let accumulator = initialValue ? initialValue : this[0];
    let index = initialValue ? 0 : 1;
    while (index < this.length) {
      accumulator = callback(accumulator, this[index], index);
      index += 1;
    }
    return accumulator;
  }
};

console.log(
  arr.reduce2(function (pre, cur) {
    return pre - cur;
  }, 0)
);
