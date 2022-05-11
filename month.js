
function check() {
    let month = document.getElementById("num").value
    a = parseInt(month)

switch (a) {
    case 1 :
    case 3 :
    case 5 :
    case 7 :
    case 8 :
    case 10 :
    case 12 :
        document.getElementById("kqua").innerHTML= "31 ngày"
        break
    case 4 :
    case 6 :
    case 9 :
    case 11 :
        document.getElementById("kqua").innerHTML= "30 ngày"
        break
    case 2 :
        document.getElementById("kqua").innerHTML= "28 hoặc 29 ngày"
        break
    default:
        document.getElementById("kqua").innerHTML= "Nhập chuẩn vào người ae"
}
}