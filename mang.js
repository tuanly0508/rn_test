// 1. Tạo một mảng chứa các số từ 1 tới 10
let arrNumber = [1,2,3,4,5,6,7,8,9,10]
// 2. Tạo một mảng lưu trữ sở thích cá nhân 
let arrHobbies = ['golf','game',]
// 3. Xuất mảng (1) ra console.log
arrNumber.forEach(item => {
    console.log(item);
});
// 4. Xuất mảng (2) ra console.log
arrHobbies.forEach(item => {
    console.log(item);
});

// 5. thêm giá trị "cầu lông", "bơi lội" vào mảng sở thích 
arrHobbies.push["cầu lông", "bơi lội"]
// 6. Cập nhật giá trị "bóng chuyền" trong mảng thành "Bóng Chuyền"
arrHobbies.forEach((item,index) => {
    if(item=='bóng chuyền'){
        arrHobbies[index]="Bóng Chuyền"
    }
});
// 7. Xoá 2 phần tử tại vị trí số 1 và 2 ra khỏi mảng 
arrHobbies.splice(1,2)

// 8. Viết hàm trả ra danh sách tất cả số nhỏ hơn n
//     - getLessThan(n): number[]
//     - Ví dụ getLessThan(3) sẽ trả ra mảng [0,1,2]
const getLessThan=(n)=>{
    let arr=[]
    for(let i=0;i<n;i++){
        arr.push(i)
    }
    return arr
}

// 9. Sử dụng hàm (8) xuất ra console danh sách các số nhỏ hơn 100 
console.log(getLessThan(100));

// 10. Viết hàm trả ra danh sách tất cả các số lẻ nhỏ hơn n
//     - getOddlessThan(n): number[]
const getOddlessThan=(n)=>{
    let arr=[]
    for(let i=0;i<n;i++){
        if(i%2!=0){
            arr.push(i)
        }
    }
    return arr
}
// 11. Sử dụng hàm (9) xuất ra console danh sách toàn bộ số lẻ <1000
console.log(getOddlessThan(100));


// 12. Viết hàm trả ra danh sách in hoa tất cả các phần tử trong mảng. Đầu vào là một mang, đầu ra là mông mảng khác và tất cả các phần tử được in hoa  
//     - toUpperCase(arr) : string[]
const toUpperCase=(array)=>{
    let arr=[]
    array.forEach(item=>{
        arr.push(item.toUpperCase())
    })
    return arr
}
// 13. Sử dụng hàm (12) để in hoa mảng sở thích cá nhân 
console.log(toUpperCase(arrHobbies));

// 14. Viết hàm tìm ra vị trí phần tử đầu tiên nằm trong mảng 
//     - findFirst(arr, chuoiCanTim): number

const findFirst=(arr, chuoiCanTim)=>{

    let array=[]
    arr.forEach((item,index)=>{
        if(item==chuoiCanTim){
            array.push(index)
        }
    })
    return array[0]
}
// 15. Sử dụng hàm (9). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
//     - string cần tìm: bóng rổ
//     - kết quả trả ra: vị trí 2
console.log(findFirst(["bóng chuyền", "bóng rổ", "bóng đá"],"bóng rổ"));

// 16. Viết hàm tìm ra vị trí phần tử cuối cùng nằm trong mảng
//     - findLast(arr, chuoiCanTim): number

const findLast=(arr, chuoiCanTim)=>{
    let array=[]
    arr.forEach((item,index)=>{
        if(item==chuoiCanTim){
            array.push(index)
        }
    })
    return array[array.length-1]
}

// 17. Sử dụng hàm (16).
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]
//     - string cần tìm: bóng rổ
//     - kết quả trả ra: vị trí 2
console.log(findLast(["bóng chuyền", "bóng rổ", "bóng đá"],"bóng rổ"));

// 18. Viết hàm tìm ra vị trí tất cả phần tử nằm trong mảng
//     - find(arr, chuoiCanTim): numer[]

const find=(arr, chuoiCanTim)=>{
    let array=[]
    arr.forEach((item,index)=>{
        if(item==chuoiCanTim){
            array.push(index)
        }
    })
    return array
}

// 19. Sử dụng hàm (19).
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá", "bóng rổ"]
//     - string cần tìm: bóng rổ
//     - kết quả trả ra: vị trí [2,4]

console.log(find(["bóng chuyền", "bóng rổ", "bóng đá", "bóng rổ"],"bóng rổ"));

// 20. Viết hàm thêm một phần tử vào mảng 
//     - add(arr, chuoiCanThem): []

const add=(arr, chuoiCanThem)=>{
    let array=arr.slice()
    array.push(chuoiCanThem)
    return array
}
// 21. Sử dụng hàm (20). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
//     - string cần thêm: bóng rổ
//     - kết quả trả ra: ["bóng chuyền", "bóng rổ", "bóng đá", "bóng rổ"]
console.log(add(["bóng chuyền", "bóng rổ", "bóng đá"],"bóng rổ"  ));

// 22. Viết hàm thêm một phần tử vào mảng, nhưng nếu phần tử đó đã tồn tại thì ko thêm nữa.
//     addIfNotExist(arr,chuoiCanThem):[]

const addIfNotExist=(arr,chuoiCanThem)=>{
    let array=find(arr,chuoiCanThem)
    if(array && array.length>0){
    }else{
        arr.push(chuoiCanThem)
    }
    return arr
}

// 23. Sử dụng hàm (22). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
//     - string cần thêm: bóng rổ
//     - kết quả trả ra: ["bóng chuyền", "bóng rổ", "bóng đá"]

console.log(addIfNotExist(["bóng chuyền", "bóng rổ", "bóng đá"],"bóng rổ"));

// 24. Viết hàm xoá toàn bộ phần tử ra khỏi mảng 
//     - delete(arr,chuoiCanXoa): []

const deleteString = (arr,chuoi)=>{
    arr.forEach((item,i)=>{
        if(item==chuoi){
            arr.splice(i,1)
        }
    })
    return arr
}
// 25. Sử dụng hàm (24). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá","bóng chuyền"]    
//     - string cần thêm: bóng chuyền
//     - kết quả trả ra: ["bóng rổ", "bóng đá"]

console.log(deleteString(["bóng chuyền", "bóng rổ", "bóng đá","bóng chuyền"],"bóng chuyền"));