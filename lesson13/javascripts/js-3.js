//Toán tử, toán hạng, biểu thức, câu lệnh, khối lệnh
//1. Toán tử số học: +, -, *, /, %
var num1, num2;
//gán giá trị 
num1 = 12;
num2 = 25;

//thực hiện các phép tính toán số học
res = num1 * num2;
console.log(num1, "*", num2, "=", res);
res = num1 / num2;
console.log(num1, "/", num2, "=", res);
res = num1 + num2;
console.log(num1, "+", num2, "=", res);
res = num1 - num2;
console.log(num1, "-", num2, "=", res);

//2.Phép toán so sánh => trả về giá trị kiểu (true/fail)
// >, >=, <, <=
res = num1 > num2;
console.log(num1, ">", num2, "=", res);
res = num1 < num2;
console.log(num1, "<", num2, "=", res);
res = num1 >= num2;
console.log(num1, ">=", num2, "=", res);
res = num1 <= num2;
console.log(num1, "<=", num2, "=", res);
res = num1 == num2;
console.log(num1, "==", num2, "=", res);
res = num1 === num2;
console.log(num1, "===", num2, "=", res);
res = num1 != num2;
console.log(num1, "!=", num2, "=", res);
res = num1 !== num2;
console.log(num1, "!==", num2, "=", res);

num1 = 12;
num2 = "12";
res = num1 == num2;
console.log(num1, "==", num2, "=>", res);
res = num1 === num2;
console.log(num1, "===", num2, "=>", res);

//3. Toán tử logic

num1 = 12;
num2 = 15;

res = (num1 > 10) && (num2 < 10);
console.log("(num1>10) && (num2<10)", res);
res = (num1 > 10) || (num2 < 10);
console.log("(num1>10) || (num2<10)", res);
res = !((num1 > 10) || (num2 < 10));
console.log("!((num1>10) || (num2<10))", res);



//4. Toán tử đặc biệt
res = (num1 > 10) ? "Gía trị lớn hơn" : "Gía trị nhỏ hơn";
console.log(res);
res = (num2 % 2 == 0) ? "Số chẵn" : "Số lẻ";
console.log(num2, "là", res);

//typeof
res = typeof (num1);
console.log("typeof(num1):", res);

num1 = "12345";
res = typeof (num1);
console.log("typeof(num1):", res);
