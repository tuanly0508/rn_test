//1
const iphone5={
    name:"iphone 5",
    image:"image",
    price:5000000
}
const iphone6={
    name:"iphone 6",
    image:"image",
    price:6000000
}
const iphone7={
    name:"iphone 7",
    image:"image",
    price:7000000
}
const iphone8={
    name:"iphone 8",
    image:"image",
    price:8000000
}
const iphoneX={
    name:"iphone x",
    image:"image",
    price:10000000
}
const iphone11={
    name:"iphone 11",
    image:"image",
    price:11000000
}
const iphone12={
    name:"iphone 12",
    image:"image",
    price:12000000
}

//2
let listProduct = [iphone5,iphone6,iphone7,iphone8,iphoneX,iphone11,iphone12]

//3
listProduct[3].price=5000000

//4
// listProduct.splice(5,2)
// listProduct.splice(1,2)
// console.log(listProduct);
//5

const xuatThongTin = (array)=>{
    array.forEach(item => {
        document.write(`${item.name} co price la: ${item.price} <br>`)
    });
}

xuatThongTin(listProduct)

//6 xuat giao dien

const xuatGiaoDien = (array)=>{
    array.forEach(item=>{
        document.write(`<div class="product-item">
        <img src=${item.image} width="200px" height="200px" alt="">
        <h2 class="name">${item.name}</h2>
        <h3 class="price">${item.price}</h3>
    </div>`)
    })
}

xuatGiaoDien(listProduct)

//7 tim san pham co price >5000000

const timSanPhamCoGiaHon5 = (array)=>{
    let arr =[]
    array.forEach(item=>{
        if(item.price>5000000){
            arr.push(item)
        }
    })
    return arr
}

console.log(timSanPhamCoGiaHon5(listProduct));

//8 tim san pham co price > price

const sanPhamCoGiaLonHonN=(array,price)=>{
    return array.filter(i=>i.price>price)
}

//9
console.log(sanPhamCoGiaLonHonN(listProduct,6000000));

//10 

const timViTriSanPham = (array)=>{
    let arr=[]
    array.forEach((item,index)=>{
        if(item.name=='iphone 5'){
            arr.push(index)
        }
    })
    return arr
}

console.log(timViTriSanPham(listProduct));

//11 tim vi tri san pham co ten duoc truyen vao

const timTatCaViTriSanPham = (array,name)=>{
    let arr=[]
    array.forEach((item,index)=>{
        if(item.name==name){
            arr.push(index)
        }
    })
    return arr
}

console.log(timTatCaViTriSanPham(listProduct));


//12 cap nhat gia iphone 5 thanh gia moi

const capNhatGiaIp5=(array,price)=>{
    array.forEach((item,index)=>{
        if(item.name=='iphone 5'){
            array[index].price=price
        }
    })
    return array
}

console.log(capNhatGiaIp5(listProduct,5555555));

//13 Vi???t h??m c???p nh???t gi?? c???a t???t c??? s???n ph???m c?? t??n l?? {ten} thanh {giaMoi} 

const capNhatGia =(arr,name,price)=>{
    arr.forEach((item,index)=>{
        if(item.name==name){
            arr[index].price=price
        }
    })
    return arr
}

console.log(capNhatGia(listProduct,'iphone 5',5555000));

// 14. Vi???t h??m s???p x???p m???t m???ng c??c ?????i t?????ng theo gi?? t??ng d???n 
//     - sapXepTangDanTheoGia(mang): []
//     - ?????u v??o l?? m???t m???ng
//     - ?????u ra l?? m???t m???ng sau khi ???? ???????c s???p x???p 

const sapXepTangDanTheoGia=(arr)=>{
    arr.sort((a,b)=> {return a.price-b.price})
    return arr
}
// console.log(sapXepTangDanTheoGia(listProduct));

// 15. Vi???t h??m s???p x???p m???t m???ng c??c ?????i t?????ng theo gi?? gi???m d???n 
//     - sapXepGiamDanTheoGia(mang): []
//     - ?????u v??o l?? m???t m???ng
//     - ?????u ra l?? m???t m???ng sau khi ???? ???????c s???p x???p 
const sapXepGiamDanTheoGia=(arr)=>{
    arr.sort((a,b)=> {return b.price-a.price})
    return arr
}
console.log(sapXepGiamDanTheoGia(listProduct));

// 15. S??? d???ng h??m (14) v?? h??m (6) ????? hi???n th??? danh s??ch s???n ph???m ???? ???????c s???p x???p theo gi?? t??ng d???n 

xuatGiaoDien(sapXepTangDanTheoGia(listProduct))
// 16. S??? d???ng h??m (8); (15); (6) ????? hi???n th??? danh s??ch s???n ph???m c?? gi?? > 3.000.000 v?? s???p x???p theo gi?? gi???m d???n



xuatGiaoDien(sapXepGiamDanTheoGia(sanPhamCoGiaLonHonN(listProduct,3000000)))