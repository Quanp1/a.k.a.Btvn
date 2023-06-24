// JavaScript Basic

// 1. Cách khai báo biến

// Sử dụng từ khoá : var (JS ES5) , let and const (JS ES6)

// var namefunction = value
var number1 = 1 

var fname="cikey"

var abc= "abc"


// 2. Các kiểu dữ liệu trong Javascript : 7 kiểu dữ liệu


// number , string , object , array , undefined , null , boolean

// number : VD : 1,2,3,4....1000... 
// string : "abc" , "toi yeu truong" ,....
// object : { name:"Quan" , address : "HN" }   { key : value : value của object }
// array : [ 1,"abc", { name : "Cikey" } , [12312,5132,12312]] // phần tử của mảng, ngăn cách bởi dấu phẩy 
// undefined : Không xác định
// null : Giá trị rỗng
// boolean : true or false


var number  = 1 // Khai báo dữ liệu number

var string = "1" //Khai báo dữ liệu string

var object = {name:"Quan",age:[18,19,20], } // Khai báo dữ lệu object

var array=[1,2,3,4,5,"Quan",[1,2,3] , { kaka:"icon" }] // Khai báo kiểu dữ liệu array


var acb

var lolotica = null

console.log(array)

console.log(lolotica)


// Note : Khi mà thêm một số và một chuỗi thì JavaScript sẽ coi là 1 chuỗi
// Js đánh giá các biểu thức từ trái qua phải . Các trình tự khác nhau thì có thể tạo ra các kq khác nhau

var a=16+4+"abc"

var x="abc"+16+4

console.log(x)
console.log(a)



//

var b

b=15

b="abc"

b=1231231

console.log('=========',b)



// Hàm typeof và console.log - Hàm built-in

// console.log : Dùng để in giá trị của 1 ô biến , debug , kiểm tra một biến bên ngoài . Hiển thị lỗi của trình duyệt 


/**
    cú pháp console.log(value)
    VD1 :
    var name="cikey"
    console.log("name")

    VD2 :
    console.log("cikey")
 */

    var dname="cikey"
    console.log(dname)


    console.log('cikey')


// type of trả về kiểu dữ liệu mà biến ấy đang được gán

// Number , string , undefined , boolean khi typeof ra thì giá trị trả về ra đúng kiểu của nó

// Với kiểu dữ liệu object array null khi typeof ra thì giá trị đều là object 

var luka=[12.4123]

console.log(typeof(luka))

console.log(typeof dname)


/*
   alert , prompt , confirm : 3 hàm built-in dùng để tạo hộp thoại thông báo và lấy thông tin cho người dùng
*/

// alert() : hiển thị 1 popup(của sổ bật lên) và có 1 tham số truyền vào là nội dung sẽ hiển thị thông báo tới người dùng 

alert("bạn đã đặt hàng thành công")


// confirm(xác nhận): xác nhận lại công việc . Có 2 lựa chọn là ok và cancel . Nếu bấm ok thì trả về true còn nếu bấm cancel thì trả về false

var result =confirm("bạn có chắc chắn muốn đặt hàng không ???")

console.log(result)




// promt
var haaa=prompt("nhap vao ten của bạn","đâsdsasad")

console.log(haaa)





