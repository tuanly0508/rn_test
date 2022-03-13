//1,2: show message
const showMessage = (a,b) => {
    for (let i = 0; i < b; i++) {
        console.log(a);
    }
}

showMessage("Hôm nay trời đẹp quá",10)

//3,4: tinh tong tu 1 den n
const tinhTong = (a) => {
    let tong = 0
    for (let i = 0; i <= a; i++) {
        tong += i
    }
    return tong
}

console.log(`Tong tu 1 den 100 = ${tinhTong(100)}`);
console.log(`Tong tu 1 den 500 = ${tinhTong(500)}`);

//5,6: tinh tong tu a den b

const tinhTongAb = (a,b) => {
    let tong = 0
    for (let i = a; i <= b; i++) {
        tong += i       
    }
    return tong
}

console.log(`Tong tu 1 den 100 = ${tinhTongAb(1,100)}`);
console.log(`Tong tu 20 den 76 = ${tinhTongAb(20,76)}`);

//7,8: tinh tong cac so le a,b

const tongSole = (a,b) => {
    let tong = 0
    for (let i = a; i <= b; i++) {
        if (i%2 != 0) {
            tong += i
        }
    }
    return tong
}

console.log(`Tong so le tu 1 den 100 = ${tongSole(1,100)}`);
console.log(`Tong so le tu 20 den 76 = ${tongSole(20,76)}`);

//9,10: xuat ra so le

const xuatSoLe = () => {
    let list = []
    for (let i = 0;list.length <= 100; i++) {
      if(i%2!=0) list.push(i)
    }
    return list
}

console.log(`100 so le gan nhat: ${xuatSoLe(100)}`);

//11,12: xuat ra so le tu m

const soLeTuM = (a,b) => {
    let list = []
    for (let i = a;list.length <= b; i++) {
       if (i%2!=0) list.push(i)
    }
    return list
}

console.log(`57 so le bat dau tu 1005: ${soLeTuM(1005,57)}`);

//13: kiem tra so nguyen to

const soNguyenTo = (a)=>{
    if(a<2){
        return false
    }
    for(let i=2;i<a;i++){
        if(a%i==0) return false
    }
    return true
}

console.log(soNguyenTo(3));

//14,15: xuat ra so nguyen to

const listSoNguyenTo = (a) => {
    let list = []
    for (let i = 3;list.length <= a; i++) {
        if(soNguyenTo(i)) list.push(i)
    }
    return list
}

console.log(`20 so nguyen to nho nhat: ${listSoNguyenTo(20)}`);


//16,17: xuat r so nguyen to tu m

const listSoNguyenToTuM = (a,b) => {
    let list = []
    for (let i = a; list.length <= b; i++) {
        if(soNguyenTo(i)) {
            list.push(i)
        }
    }
    return list
}

console.log(`20 so nguyen to tu 1000: ${listSoNguyenToTuM(1000,20)}`);
