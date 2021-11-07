const rowsNum = 3;  // so hang cua grid trong css
const colsNum = 4;  // so cot cua grid trong css
const sortType = 1;
var fulldata = data.Akko.concat(data.Leopold);
var vanilData =  JSON.parse(JSON.stringify(fulldata));

window.onload = main();
// window.onload = () => {
//     var data;
//     $.getJSON("./Data-final.json", data,
//         function (data, textStatus, jqXHR) {
//             main(data);
//         }
//     );
// };// load file data json vao main de su dung



function main() { // ham chinh de goi cac ham khac
    
    passInfo(fulldata); // truyen du lieu
    menuStyling(); //hieu ung cho thanh menu ben trai
    var sortOption = document.getElementsByClassName('sort-by')[0];
    filterProduct(fulldata);
    sortOption.onchange = () =>{
        sortItem(fulldata, vanilData, sortOption.value);
    }
}
function filterProduct(data){// truyen filter
    var profile = document.getElementsByClassName("filter-Profile");
    var keycap = document.getElementsByClassName("filter-Keycap");
    var swi = document.getElementsByClassName("filter-Switch");
    var model = document.getElementsByClassName("filter-Model");
    var brand = document.getElementsByClassName("filter-brand");
    var bluetooth = document.getElementsByClassName("filter-Bluetooth");
    var hotswap = document.getElementsByClassName("filter-Hotswap");


    addListener(profile, "\"click\"", data);
    addListener(keycap, "\"click\"", data);
    addListener(swi, "\"click\"", data);
    addListener(model, "\"click\"", data);
    addListener(brand, "\"click\"", data);
    addListener(bluetooth, "\"click\"", data);
    addListener(hotswap, "\"click\"", data);
}

function addListener(collection, functionType, data){ ///them event functionType cho bo collection

    for (let i=0; i<collection.length; i++){
        collection[i].onclick = filter;
    }
}

function filter(e){ //  bo loc filter
    var filterType = e.target.className.slice(0,e.target.className.indexOf(" "));
    var array=[];
    filterType = filterType.slice(filterType.indexOf("-")+1,filterType.length);
    contentFilter = e.target.innerHTML;
    if (filterType == "Hotswap"){ // loc hotswap
        for (let i=0; i<fulldata.length; i++){
            if (fulldata[i]["Hotswap"] == "YES"){
                array = array.concat(fulldata[i]);
            }
        }
        passInfo(array);
    } else if (filterType == "Bluetooth"){ //loc bluetooth
        for (let i=0; i<fulldata.length; i++){
            if (fulldata[i]["Kết nối"].includes("Bluetooth 5.0")){
                array = array.concat(fulldata[i]);
            }
        }
        passInfo(array);
    } else if (filterType == "brand"){ //loc hang
        var brand = e.target.innerHTML;
        passInfo(data[brand]);
    } else { //loc nhung cai con lai
        for (let i=0; i<fulldata.length; i++){
            if (fulldata[i][filterType].includes(contentFilter)){
                array = array.concat(fulldata[i]);
            }
        }
        passInfo(array);
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
function sortItem(data, vanilData, type){  // sap xep
    if (type==1){
        passInfo(vanilData);
    } else if (type==2){
        data.sort(compareUp);
        passInfo(data);
    } else if (type==3){
        data.sort(compareDown); 
        passInfo(data);
    } 
}


function passInfo(Brand) { // truyen noi dung vao html
    clearData();

    for (let i = 0; i < Brand.length; i++) {
        let item = Brand[i];
        let sanphamitem = document.createElement("div");
        let hinhsanpham = document.createElement('img');
        let tensanpham = document.createElement('div');
        let modelsanpham = document.createElement('div');
        let tiensanpham = document.createElement('div');
        let stridesanpham = document.createElement('div');

        sanphamitem.className = 'sanpham-item';
        hinhsanpham.className = 'hinh-sanpham';
        tensanpham.className = 'ten-sanpham';
        modelsanpham.className = 'model-sanpham';
        tiensanpham.className = 'tien-sanpham';
        stridesanpham.className = 'stride';
        
        tensanpham.onclick = pastDataLocalStorage;

        hinhsanpham.src = "./san-pham-img/" + item["Tên"]+"/" + item["Tên"] +" 1.jpg";
        stridesanpham.innerHTML = '- - - - - - -';
        tensanpham.innerHTML = item["Tên"];
        tiensanpham.innerHTML = item["Giá"];
        modelsanpham.innerHTML = item["Model"];

        sanphamitem.appendChild(hinhsanpham);
        sanphamitem.appendChild(tensanpham);
        sanphamitem.appendChild(stridesanpham);
        sanphamitem.appendChild(tiensanpham);
        sanphamitem.appendChild(modelsanpham);

        document.getElementById('sanpham').appendChild(sanphamitem);
    }
}

function clearData(){ // xoa noi dung html
    document.getElementById("sanpham").innerHTML="";
}

function pastDataLocalStorage(e){ // truyen ten san pham vao local storage
    var name = e.target.innerHTML;
    e.preventDefault();
    if (typeof localStorage['name'] == undefined){
        window.localStorage.setItem('name', name);
    } else{
        window.localStorage.removeItem('name');
        window.localStorage.setItem('name', name);
    }
}

function menuStyling() { // them hieu ung cho menu
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