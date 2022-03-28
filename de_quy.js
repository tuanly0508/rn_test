// 1. Xuất ra danh sách dãy số Finbonaci. Dãy Finbonaci là dãy mà số sau bằng tổng của 2 số trước nó

const finbonaci = (a) => {
    if (a < 0) return -1
    else if (a==0 ||a==1) return a
    else return finbonaci(a-1)+finbonaci(a-2)
} 

const listFinbonaci = (a) => {
    let list = []
    for (let i = 0; i < a; i++) {
        list.push(finbonaci(i))
    }
    console.log(`Day so ${a} finbonaci: ${list}`);
    return list
}
listFinbonaci(5)

// 2. Tính giai thừa của n. Biết rằng n! = 1*2*3*....*n
const giaiThua = (a) => {
    let b =1
    for (let i = 1; i <= a; i++) {
        b *= i
    }
    console.log(`Giai thua cua ${a} = ${b}`);
    return b
}
giaiThua(5)

// 3.Tính S(n) = 1 + 2 + 3 + ... + n - 1 + n
const sum = (a) => {
    let tong = 0
    for (let i = 1; i <= a; i++) {
        tong += i
    }
    console.log(`S(${a}) = 1 + 2 + 3 + ... + ${a} - 1 + ${a} = ${tong}`);
    return tong
}
sum(1)

// 4.Tính S(n) = 1^2 + 2^2 + 3^2 + ... + (n-1)^2 + n^2
const sum1 = (a) => {
    let tong = 0
    for (let i = 1; i <= a; i++) {
        tong= tong + i * i
    }
    console.log(`S(${a}) = 1^2 + 2^2 + 3^2 + ... + (${a}-1)^2 + ${a}^2 = ${tong}`);
    return tong
}
sum1(5)

// 5.Tính S(n) = 1 + 1/2 + 1/3 + ... + 1/n
const sum2 = (a) => {
    let tong = 0
    for(let i = 1; i <= a; i++){
        tong = tong + 1.0 / i
    }
    console.log(`S(${a}) = 1 + 1/2 + 1/3 + ... + 1/${a} = ${tong}`);
    return tong
}
sum2(5)

// 6.Tính S(n) = 1/2 + 1/4 + ... + 1/2n
const sum3 = (a) => {
    let tong = 0
    for(let i = 1; i <= a; i++){
        tong = tong + 1.0 / (2 * i)
    }
    console.log(`S(${a}) = 1/2 + 1/4 + ... + 1/2n = ${tong}`);
    return tong
}
sum3(5)

// 7.Tính S(n) = 1 + 1/3 + 1/5 + ... + 1/(2n+1)
const sum4 = (a) => {
    let tong = 0
    for(let i = 1; i <= a; i++){
        tong = tong + 1.0 / (2 * i + 1);
    }
    console.log(`S(${a}) = 1 + 1/3 + 1/5 + ... + 1/(2n+1) = ${tong}`);
    return tong
}
sum4(5)

// 8.Tính S(n) = 1/(1*2) + 1/(2*3) + 1/( n(*n-1) )
const sum5 = (a) => {
    let tong = 0
    for(let i = 1; i <= a; i++){
        tong = tong + 1.0 / (i * (i + 1));
    }
    console.log(`S(${a}) = 1/(1*2) + 1/(2*3) + 1/( n(*n-1) ) = ${tong}`);
    return tong
}
sum5(5)

// 9.Tính S(n) = 1/2 + 2/3 + 3/4 + ... + n/(n+1)
const sum6 = (a) => {
    let tong = 0
    for(let i = 1; i <= a; i++){
        tong = tong + i / (i + 1)
    }
    console.log(`S(${a}) = 1/2 + 2/3 + 3/4 + ... + n/(n+1) = ${tong}`);
    return tong
}
sum6(5)

// 10.Tính S(n) = 1/2 + 3/4 + 5/6 + ... + (2n+1)/(2n+2)
const sum7 = (a) => {
    let tong = 0
    for(let i = 1; i <= a; i++){
        tong = tong + (2 * i + 1) / (2 * i + 2);
    }
    console.log(`S(${a}) = 1/2 + 3/4 + 5/6 + ... + (2n+1)/(2n+2) = ${tong}`);
    return tong
}
sum7(5)

// 11.Tính T(n) = 1*2*3*.....*n
const sum8 = (a) => {
    let tong = 1
    for (let i = 1; i <= a; i++) {
        tong *= i
    }
    console.log(`T(${a}) = 1*2*3*.....*n = ${tong}`);
    return tong
}
sum8(5)

// 12.Tính T(x,n) = x^n
const luyThua = (a,b) => {
    let tong = 1
    while (b--) {
        tong = tong * a
    }
    console.log(`T(5,5) = x^n = ${tong}`);
    return tong
}
luyThua(5,5)

// 13.Tính S(n) = 1 + 1.2 + 1.2.3 + .... + 1.2.3....n
const sum9 = (a) => {
    let tong = 0, tong2 =1
    for(let i = 1; i <= a; i ++){
        tong2 = tong2 * i;
        tong = tong + tong2;
    }
    console.log(`S(${a}) = 1 + 1.2 + 1.2.3 + .... + 1.2.3....n = ${tong}`);
    return tong
}
sum9(5)

// 14.Tính S(x,n) = x + x^2 + x^3 + ... + x^n
const sum10 = (a,x) => {
    let tong = 0, tong2 =1
    for(let i = 1; i <= a; i++){
        tong2 = tong2 * x;
        tong = tong + tong2
    }
    console.log(`S(5,5) = x + x^2 + x^3 + ... + x^n = ${tong}`);
    return tong
}
sum10(5,5)

// 15.Tính S(x,n) = x^2 + x^4 +.... + x^2n
const sum11 = (a,x) => {
    let tong = 0, tong2 =1
    for(let i = 1; i <= a; i++){
        tong2 = Math.pow(x, (2 * i ));
        tong = tong + tong2
    }
    console.log(`S(5,5) = x^2 + x^4 +.... + x^2n = ${tong}`);
    return tong
}
sum11(5,5)

// 16.Tính S(x,n) = x + x^3 + x^5 +....+ x^(2n+1)
const sum12 = (a,x) => {
    let tong = 0, tong2 =1
    for(let i = 1; i <= a; i++){
        tong2 = Math.pow(x, (2 * i + 1 ));
        tong = tong + tong2
    }
    console.log(`S(5,5) = x + x^3 + x^5 +....+ x^(2n+1) = ${tong}`);
    return tong
}
sum12(5,5)

// 17.Tính S(n) = 1 + 1/(1+2) + 1/(1+2+3) + ... + 1/(1+2+3+...+n)
const sum13 = (a) => {
    let tong = 0, tong2 =0
    for(let i = 1; i <= a; i++){
        tong2 += i;
        tong += 1.0/tong2;
    }
    console.log(`S(n) = 1 + 1/(1+2) + 1/(1+2+3) + ... + 1/(1+2+3+...+n) = ${tong}`);
    return tong
}
sum13(5,5)

// 18.Tính S(x,n) = x + (x^2)/2! + (x^3)/3! + ... + (x^n)/n!
const sum14 = (a,x) => {
    let tong = 0, tong2 =1, tong3=1
    for(let i = 1; i <= a; i++){
        tong2 *= x;
        tong3 *= i
        tong = tong + tong3/tong2
    }
    console.log(`S(5,5) = x + (x^2)/2! + (x^3)/3! + ... + (x^n)/n! = ${tong}`);
    return tong
}
sum14(5,5)

// 19.Tính S(x,n) = 1 + (x^2)/2! + (x^4)/4! + ... + (x^2n)/(2n)!
const sum15 = (a,x) => {
    let tong = 0, tong2 =1, tong3=0,tong4=0
    for(let i = 1; i <= a; i++){
        tong3 = Math.pow(x,(2*i))
        tong4 = i *2
        tong2 = tong2 * tong4 * (tong4-1)
        tong = tong + tong3/tong2
    }
    console.log(`S(5,5) = 1 + (x^2)/2! + (x^4)/4! + ... + (x^2n)/(2n)! = ${tong}`);
    return tong
}
sum15(5,5)

// 20.Hãy đếm số lượng chữ số của số nguyên dương n
const countNumber = (a) => {
    let temp = a
    if (a < 10) return temp =1
    else return 1+countNumber(a/10)
}
console.log(`Số lượng chữ số của số nguyên dương 555 la ${countNumber(555)}`);

// 21.Hãy tính tổng các chữ số của số nguyên dương n
const sum16 = (a) => {
    let tong = 0
    while(a > 0) {
        tong = tong + a % 10
        a = Math.floor(a / 10)  
    }
    return tong
}
console.log(`tổng các chữ số của số nguyên dương 12345 = ${sum16(12345)}`);


// 22.Hãy tính tích các chữ số của số nguyên dương n
const sum17 = (a) => {
    let tong = 1
    while(a > 0) {
        tong = tong * (a % 10)
        a = Math.floor(a / 10)  
    }
    return tong
}
console.log(`tổng các chữ số của số nguyên dương 1234 = ${sum17(1234)}`);

// 23.Hãy đếm số lượng chữ số lẻ của số nguyên dương n
const countNumberLe = (a) => {
    let temp , count = 0
    while (a > 0) {
        temp = Math.floor(a % 10)
        if(temp % 2 != 0) count ++    
        a /= 10  
    }
    return count
}
console.log(`Số lượng chữ số của số le nguyên dương 12345 la ${countNumberLe(12345)}`);

// 24.Hãy tính tổng các chữ số chẵn của số nguyên dương n
const sum18 = (a) => {
    let temp , sum = 0
    while (a > 0) {
        temp = Math.floor(a % 10)
        if(temp % 2 == 0) sum += temp    
        a /= 10  
    }
    return sum
}
console.log(`tổng các chữ số chẵn của số nguyên dương 12345 la ${sum18(12345)}`);

// 25.Hãy tính tích các chữ số lẻ của số nguyên dương n
const sum19 = (a) => {
    let temp , sum = 1
    while (a > 0) {
        temp = Math.floor(a % 10)
        if(temp % 2 != 0) sum *= temp    
        Math.floor(a /= 10)
    }
    return sum
}
console.log(`tích các chữ số lẻ của số nguyên dương 12345 la ${sum19(12345)}`);

// 26.Cho số nguyên dương n . Hãy tìm chữ số đầu tiên của n
const chuSoDauTien = (a) => {
    let temp = a, first
    do{
        first = Math.floor(temp % 10) ;
    }while(Math.floor(temp /= 10));
    return first
}
console.log(`chữ số đầu tiên của 12345 la ${chuSoDauTien(12345)}`);

// 27.Hãy tìm chữ số đảo ngược của số nguyên dương n
const daoNguoc = (a) => {
    let res = 0, soCuoi
    while (a >= 1) {
        soCuoi = Math.floor(a % 10)
        res = res *10 + soCuoi
        a  = a /10
    }
    return res
}
console.log(`chữ số đảo ngược của số nguyên dương 12345 la ${daoNguoc(12345)}`);

// 28.Tìm chữ số lớn nhất của số nguyên dương n
const maxNumber = (a) => {
    let max = 0,temp
    if (a == 0) return max = 0
    while (a > 0) {
        temp = Math.floor(a % 10)
        a/= 10
        if (temp > max) max = temp
    }
    return max
}
console.log(`chữ số lớn nhất của số nguyên dương 12345 la ${maxNumber(12345)}`);

// 29.Tìm chữ số nhỏ nhất của số nguyên dương n
const minNumber = (a) => {
    let min = Math.floor(a %10)
    if (a == 0) return min = 0
    do {
        let i = Math.floor(a %10)
        if (i < min) min =i
    } while (Math.floor(a/=10));
    return min
}
console.log(`chữ số nhỏ nhất của số nguyên dương 12345 la ${minNumber(12345)}`);

// 30.Hãy kiểm tra số nguyên dương n có toàn chữ số lẻ hay không?
const isOdd = (a) => {
    let odd = true
    while (Math.floor(a/=10)) {
        if ((Math.floor(a%10))%2==0) {
            odd = false
            break
        }
    }
    return odd
}
console.log(`số nguyên dương 1357 có toàn chữ số lẻ ${isOdd(1357)}`);

// 31.Hãy kiểm tra số nguyên dương n có toàn chữ số chẵn hay không?
const isEven = (a) => {
    let even = true
    while (Math.floor(a/=10)) {
        if ((Math.floor(a%10))%2!=0) {
            even = false
            break
        }
    }
    return even
}
console.log(`số nguyên dương 2468 có toàn chữ số chan ${isEven(2468)}`);

// 32. Cho một mảng đối tượng sinh viên bao gồm 2 thông tin 
//     - MSSV
//     - Họ tên 

// MSSV đã được sắp xếp thứ tự từ lớn đến nhỏ. Viết hàm tìm ra vị trí của một được nhập vào.
// Ví dụ cho mảng: 
//     - [
//         {"mssv": 1, "name": "Văn A"},
//         {"mssv": 2, "name": "Văn B"},
//         {"mssv": 4, "name": "Văn C"},
//         {"mssv": 6, "name": "Văn D"},
//         {"mssv": 8, "name": "Văn E"},
//         {"mssv": 10, "name": "Văn F"},
//         {"mssv": 12, "name": "Văn G"},
//         {"mssv": 15, "name": "Văn H"},
//       ]
//     - Viết hàm lấy tên sinh viên theo mssv. 
//     - Ví dụ: mssv = 10 => Văn F

let list = [
    {"mssv": 1, "name": "Văn A"},
    {"mssv": 4, "name": "Văn C"},
    {"mssv": 8, "name": "Văn E"},
    {"mssv": 10, "name": "Văn F"},
    {"mssv": 2, "name": "Văn B"},
    {"mssv": 12, "name": "Văn G"},
    {"mssv": 15, "name": "Văn H"},
    {"mssv": 6, "name": "Văn D"},
]
//sap xep chon
const selectSort = (arr) => {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[i]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}

// sap xep noi bot
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length -1 ; i++) {
        let swaped = true
        for (let j = 0; j < arr.length - i- 1; j++) {
            if (arr[j].mssv < arr[j+1].mssv) {
                let temp = arr[j].mssv
                arr[j].mssv = arr[j+1].mssv
                arr[j+1].mssv = temp
                swaped = false
            }
        }
        if(swaped === true) break
    }
}

//sap xep chen
const inserSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i].mssv
        let j = i - 1
        while (j >= 0 && key < arr[j].mssv) {
            arr[j+1].mssv = arr[j].mssv
            --j
        }
        arr[j+1].mssv = key
    }
}

//tim kiem nhi phan
function binarySearch(value, array) {
  let min = 0;
  let max = array.length - 1;
  let count = 0;
  let index;

  while (min <= max) {
    count++;
    index = Math.floor((max + min) / 2);

    if (array[index].mssv === value) {
      return `${array[index].name}`;
    } else if (value <= array[index].mssv) {
      max = index - 1;
    } else {
      min = index + 1;
    }
  }
  return `Khong ton tai`;
}
inserSort(list)
console.log(list);
const result = binarySearch(6, list);
console.log(result);
