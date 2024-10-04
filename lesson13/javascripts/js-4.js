//Cấu trúc điều khiển if
//Dạng 1:if đơn
/* 
    Cú pháp
    if(condition-expression){
        block statement;
    }
*/
//ví dụ: cho số num, kiểm tra số num có là sô dương?
num = 10;
if (num > 0) {
    console.log(num, "là số dương");
}

//nếu num>0 thì gán lại giá trị num=-100
if (num > 0) {
    num = -100;
    console.log(num);
}

//Dạng 2: if...else
num = 12;
//kiểm tra xem số num là số chẵn hay số lẻ
if (num % 2 == 0) {
    console.log(num, "là số chẵn");
} else {
    console.log(num, "là số lẻ");
}

//Dạng 3: if....else if....
//kiểm tra số num là số dương, âm hay số 0
num = -12;
if (num > 0) {
    console.log(num, "là số dương");
} else if (num < 0) {
    console.log(num, "là số âm");
} else {
    console.log(num, "là số 0");
}

//Dạng 4: nested if
num1 = 12;
num2 = 15;


if (num1 % 2 == 0) {
    if (num2 % 2 == 1) {
        res = num1 + num2;
        console.log(res);
    }
} else {
    if (num2 % 2 == 1) {
        res = num1 - num2;
        console.log(res);
    }
}

//Luyện tập 1: giải pt bậc 1: ax+b=0
a = 2;
b = 1;
if (a == 0 && b == 0) {
    console.log('Phương trình vô số nghiệm');
}
else if (a != 0 && b == 0) {
    console.log('Phương trình có nghiệm x = 0');
}
else if (a == 0 && b != 0) {
    console.log("Phương trình vô nghiệm");
}
else {
    console.log('Phương trình có nghiệm x = ' + (-b / a));
}
a = 3;
b = 6;
c = 0;
if (a == 0) {
    if (b == 0) {
        if (c == 0) {
            console.log('Phuong trinh VSN');
        } else {
            console.log('Phuong trinh VN');
        }
    } else {
        x = -c / b
        console.log('Nghiem phuong trinh x = ' + x)
    }
} else {
    dt = b * b - 4 * a * c;
    if (dt < 0) {
        console.log('Phuong trinh vo nghiem')
    } else if (dt == 0) {
        x = -b / (2 * a)
        console.log('Nghiem phuong trinh x1 = x2 = ' + x)
    } else {
        x1 = (-b + Math.sqrt(dt)) / (2 * a)
        x2 = (-b - Math.sqrt(dt)) / (2 * a)
        console.log(`Nghiem x1 = ${x1}, x2 = ${x2}`)
    }
}