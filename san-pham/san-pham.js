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
    var vanilData =  JSON.parse(JSON.stringify(data));
    passInfo(vanilData.Akko); // truyen du lieu
    menuStyling(); //hieu ung cho thanh menu ben trai
    var sortOption = document.getElementsByClassName('sort-by')[0];
    sortOption.onchange = () =>{
        sortItem(data, vanilData, sortOption.value);
    }
}


function compareUp(a, b){ // ham so sanh de sap xep theo thu tu tang
    let gia1 = Number.parseInt(a["Giá"].match(/\d/g).join("")), gia2 = Number.parseInt(b["Giá"].match(/\d/g).join(""));
        if ( gia1 < gia2 ){
            return -1;
        }
        if ( gia1 > gia2 ){
            return 1;
        }
        return 0;  
}
function compareDown(a, b){ // ham so sanh de sap xep theo thu tu giam
    let gia1 = Number.parseInt(a["Giá"].match(/\d/g).join("")), gia2 = Number.parseInt(b["Giá"].match(/\d/g).join(""));
        if ( gia1 > gia2 ){
            return -1;
        }
        if ( gia1 < gia2 ){
            return 1;
        }
        return 0;  
}
function sortItem(data, vanilData, type){
    var Brand = data.Akko;
    if (type==1){
        passInfo(vanilData.Akko);
    } else if (type==2){
        Brand.sort(compareUp);
        passInfo(Brand);
    } else if (type==3){
        Brand.sort(compareDown); 
        passInfo(Brand);
    } 
}


function passInfo(Brand) {
    var tenSanPham = document.getElementsByClassName("ten-sanpham");
    var tienSanPham = document.getElementsByClassName("tien-sanpham");
    var modelSanPham = document.getElementsByClassName("model-sanpham");
    var hinhSanPham = document.getElementsByClassName("hinh-sanpham");

    for (let i = 0; i <= rowsNum * colsNum - 1; i++) {
        let item = Brand[i];
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