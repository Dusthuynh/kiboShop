const rowsNum = 3;  // so hang cua grid trong css
const colsNum = 4;  // so cot cua grid trong css

window.onload = () => {
    var data;
    $.getJSON("./Data-final.json", data,
        function (data, textStatus, jqXHR) {
            main(data);
        }
    );
};// load file data json vao main de su dung



function main(data) { // ham chinh de goi cac ham khac
    var akkoBrand = data.Akko;
    console.log(akkoBrand);
    menuStyling();
    passInfo(akkoBrand);
}


function passInfo(akkoBrand) {
    var tenSanPham = document.getElementsByClassName("ten-sanpham");
    var tienSanPham = document.getElementsByClassName("tien-sanpham");
    var modelSanPham = document.getElementsByClassName("model-sanpham");
    var hinhSanPham = document.getElementsByClassName("hinh-sanpham");

    for (let i = 0; i <= rowsNum * colsNum - 1; i++) {
        let item = akkoBrand[i];
        tenSanPham[i].innerHTML = item["Tên"];
        tienSanPham[i].innerHTML = item["Giá"];
        modelSanPham[i].innerHTML = item["Model"];
        hinhSanPham[i].src = "./san-pham-img/" + item["Tên"]+"/" + item["Tên"] +" 1.jpg";
    }
}


function menuStyling() {
    $(".menu-item").click(function (e) {
        e.preventDefault();
        let nameClass = this.className;
        let nameClassCut = nameClass.slice(nameClass.indexOf(' ') + 1, nameClass.length);
        let textColor = document.getElementsByClassName(nameClassCut)[0].style.color;

        $("." + nameClassCut + "-content").slideToggle();
        $("div." + nameClassCut + "> i").toggleClass("rotate");

        if (textColor == "black" || textColor == "") {
            document.getElementsByClassName(nameClassCut)[0].style.color = "rgb(179, 106, 18)";
        } else document.getElementsByClassName(nameClassCut)[0].style.color = "black";
    });
}