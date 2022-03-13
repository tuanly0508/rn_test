const n1 = 5
const n2 = 10

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
// 1,2. Tinh tong hieu 2 so

const tong = (a,b) => {
    return a + b
}

const hieu = (a,b) => {
    return a - b
}

console.log(`Tong cua ${n1} va ${n2} = ${tong(n1,n2)}`);
console.log(`Hieu cua ${n1} va ${n2} = ${hieu(n1,n2)}`);

//3,4. Thuong 2 so

const thuong = (a,b) => {
    return a * b
}

console.log(`Thuong cua ${n1} va ${n2} = ${thuong(n1,n2)}`);

//5,6,7: Tich cua 2 so

const tich = (a,b) => {
    return a/b
}

console.log(`Tich cua ${0} va ${n2} = ${tich(0,n2)}`);
console.log(`Tich cua ${n1} va ${0} = ${tich(n1,0)}`);

//8,9: Binh phuong 2 so

const binhPhuong = (a,b) => {
    return a * a
}

console.log(`Binh phuong cua ${n1} va ${n2} = ${binhPhuong(n1,n2)}`);

//10,11: Tim so lon hon trong 2 so

const max = (a,b) => {
    if (a > b) return a
    else return b
}

console.log(`So lon hon giua ${n1} va ${n2} = ${max(n1,n2)}` );

//12,13: Tim so nho hon trong 2 so

const min = (a,b) => {
    if(a<b) return a
    else return b
}

console.log(`So nho hon giua ${n1} va ${n2} = ${min(n1,n2)}`);

//14,15: Gia tri trung binh cua 2 so

const trungBinh = (a,b) => {
    return (a*b)/2
}

console.log(`Gia tri trung binh cua ${n1} va ${n2} = ${trungBinh(n1,n2)}`);

//16,17,18: Tinh phan du khi chia

const chiaLayDu = (a,b) => {
    return a % b
}

console.log(`So du cua ${n1} va ${n2} = ${chiaLayDu(n1,n2)}`);
console.log(`So du cua ${n2} va ${n1} = ${chiaLayDu(n2,n1)}`);

//19,20,21: Chia het cua 2 so

const chiaHet = (a,b) => {
    if (a%b ==0) return `${a} chia het cho ${b}`
    else return `${a} khong chia het cho ${b}`
}

console.log(`${chiaHet(n1,n2)}`);
console.log(`${chiaHet(n2,n1)}`);

//22,23,24: Tinh chu vi va dien tich hinh chu nhat

const chuVi = (a,b) => {
    return (a+b)*2
}

const dienTich = (a,b) => {
    return a*b
}

console.log(`Chu vi hinh chu nhat voi 2 canh ${n1} va ${n2} = ${chuVi(n1,n2)}`);
console.log(`Dien tich hinh chu nhat voi 2 canh ${n1} va ${n2} = ${dienTich(n1,n2)}`);

//25,26,27,28: Tinh chu vi dien tich hinh tron

const chuViHinhTron = (a) => {
    return a*2*3.14
}

const dienTichHinhTron = (a) => {
    return a * a * 3.14
}

console.log(`Chu vi hinh tron voi ban kinh ${n1} = ${chuViHinhTron(n1)}`);
console.log(`Chu vi hinh tron voi ban kinh ${n1} = ${chuViHinhTron(n1)}`);

console.log(`Chu vi hinh tron voi ban kinh ${n2} = ${chuViHinhTron(n2)}`);
console.log(`Chu vi hinh tron voi ban kinh ${n2} = ${chuViHinhTron(n2)}`);

// chuoi 

let s1 = 'Hom ';
let s2 = 'Nay ';
let s3 = 'Ngay ';
let s4 = 'Mai ';
let s5 = '! ';

// 1. noi chuoi
/**
 * 
 * @param {String} s1 
 * @param {String} s2 
 * @returns {String}
 */
const noiChuoi=(s1,s2)=>{
    let noi= s1+s2;
    return noi;
}

console.log(` Chuỗi sau khi nối là: ${noiChuoi(s1,s2)+ noiChuoi(s3,s4) +s5}`);

// ? 2. In hoa chuỗi truyền vào

/**
 * 
 * @param {String} s1 
 * @returns {String}
 */
const inHoa=(s1)=>{
    return s1.toLocaleUpperCase();
}
console.log(inHoa(s1));
console.log(inHoa(s2));
console.log(inHoa(s3));
console.log(inHoa(s4));
console.log(inHoa(s5));

console.log(inHoa(s1+s2+s3+s4+s5));

// ? 5.Kiểm tra sự tồn tại của chuỗi

/**
 * 
 * @param {String} s1 
 * @param {String} s2 
 * @returns {boolean}
 */
const coTonTai=(s1,s2)=> {
    return s1.includes(s2);
}
console.log(` Kiểm tra sự tồn tại của ${s2} trong ${s1}: ${coTonTai(s1,s2)}`);

// ? Xuất độ dài chuỗi
console.log(`Độ dài của chuỗi ${s1} là: ${s1.length}`);
console.log(`Độ dài của chuỗi ${s2} là: ${s2.length}`);
console.log(`Độ dài của chuỗi ${s3} là: ${s3.length}`);
console.log(`Độ dài của chuỗi ${s4} là: ${s4.length}`);
console.log(`Độ dài của chuỗi ${s5} là: ${s5.length}`);

// ? Cắt chuỗi
console.log(`Cắt chuỗi ${s1} là: ${s1.substring(1,3)}`);
console.log(`Cắt chuỗi ${s2} là: ${s2.substring(1,3)}`);
console.log(`Cắt chuỗi ${s3} là: ${s3.substring(1,3)}`);
console.log(`Cắt chuỗi ${s4} là: ${s4.substring(1,3)}`);
console.log(`Cắt chuỗi ${s5} là: ${s5.substring(1,3)}`);

// ? Ktra tồn tại
/**
 * 
 * @param {String} s1 
 * @param {String} s2 
 * @returns {String}
 */
 const chuoiTonTai=(s1,s2)=> {
    if(s1.includes(s2)){
        return`${s2} có tồn tại trong ${s1}`;
    }else return `${s2} không tồn tại trong ${s1}`;
}

console.log(chuoiTonTai(s5,s1));
console.log(chuoiTonTai(s5,s2));
console.log(chuoiTonTai(s5,s3));
console.log(chuoiTonTai(s5,s4));
