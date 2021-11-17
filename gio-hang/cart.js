var DataSet = data.Akko.concat(data.Leopold.concat(data.Keychron));
var ArrayProduct = new Array();
const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',

});
window.onload = () => {
    showCart();
    changeQty();
    removeItem();
}
window.onstorage = () => {
    showCart();
    changeQty();
    removeItem();
}
// Lấy các key addToCart trên localStorage đưa vào mảng
function getKey() {
    ArrayProduct = [];
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).slice(0, 9) == "addToCart") {
            ArrayProduct.push(localStorage.key(i));
        }
    }
}
function showCart() {
    getKey(); changeQty();
    document.getElementsByClassName("cart_body-items")[0].innerHTML = "";
    var ItemsClass = document.getElementsByClassName("cart_body-items")[0];

    ArrayProduct.forEach((element) => {
        var keyLocal = element; // Lấy phần tử trong mảng
        var keyLocalReal = keyLocal.substr(10); //xóa ký tự addToCart
        var valLocal = JSON.parse(localStorage.getItem(keyLocal)); // lấy value và chuyển thành đôi tượng
        var getFromData = findInDataSet(keyLocalReal); // lấy dữ liệu tương ứng trong dataset

        // Tạo thẻ lưu ảnh sản phẩm bao gồm đường link tên class của ảnh
        var imgPr = document.createElement("img");
        imgPr.classList.add("cart_imgItem");
        imgPr.src = `/san-pham/san-pham-img/${getFromData["Tên"]}/${getFromData["Tên"]} 1.jpg`;
        imgPr.alt = "name of product";

        // Tạo thẻ lưu tên sản phẩm
        var namePr = document.createElement("a");
        namePr.classList.add("linkItem");
        namePr.href = "../one-san-pham/OneProduct.html";
        namePr.textContent = getFromData["Tên"];

        // Tạo thẻ lưu loại sản phẩm
        var typePr = document.createElement("div");
        typePr.classList.add("typeItemCart");
        typePr.textContent = valLocal.switch;

        // Tạo thẻ lưu đơn giá sản phẩm
        var pricePr = document.createElement("div");
        pricePr.classList.add("cart_body_item_info1-price");
        pricePr.textContent = formatter.format(getFromData["Giá"].slice(0, getFromData["Giá"].search(" ₫")).replace(/\,/g, ''));

        // Tạo thẻ lưu số lượng sản phẩm
        var qtyPr = document.createElement("span");
        qtyPr.classList.add("valQty");
        qtyPr.textContent = parseInt(valLocal.value);

        // Tính giá thành cho từng sản phẩm
        var valOneTotalPr = document.createElement("span");
        valOneTotalPr.classList.add("valTotal");
        var priceTemp = getFromData["Giá"].slice(0, getFromData["Giá"].search(" ₫")).replace(/\,/g, '');
        valOneTotalPr.textContent = formatter.format(parseInt(priceTemp) * valLocal.value);
        // ItemsClass.append(valOneTotalPr);

        var divItem = document.createElement("div");
        divItem.classList.add("cart_body-item");

        var divInfo1 = document.createElement("div");
        divInfo1.classList.add("cart_body_item-info1")

        var divDescription1 = document.createElement("div");
        divDescription1.classList.add("cart_body_item_info1-description1");

        var divDescription2 = document.createElement("div");
        divDescription2.classList.add("cart_body_item_info1-description2");

        var divInfo2 = document.createElement("div");
        divInfo2.classList.add("cart_body_item-info2");

        var divQty = document.createElement("div");
        divQty.classList.add("cart_body_item_info2_qty");
        divQty.classList.add("content");

        var divTotal = document.createElement("div");
        divTotal.classList.add("cart_body_item_info2_total");
        divTotal.classList.add("content");

        var divDel = document.createElement("div");
        divDel.classList.add("cart_body_item_info2_total");
        divDel.classList.add("content");

        var buttonLeft = document.createElement("button");
        buttonLeft.classList.add("fas");
        buttonLeft.classList.add("fa-angle-left");

        var buttonRight = document.createElement("button");
        buttonRight.classList.add("fas");
        buttonRight.classList.add("fa-angle-right");
        var buttonDel = document.createElement("button");
        buttonDel.classList.add("far");
        buttonDel.classList.add("fa-trash-alt");

        // info1
        divDescription1.append(pricePr);
        divDescription1.append(imgPr);
        divDescription2.append(namePr);
        divDescription2.append(typePr);
        divInfo1.append(divDescription1);
        divInfo1.append(divDescription2);
        // infor2
        divQty.append(buttonLeft);
        divQty.append(qtyPr);
        divQty.append(buttonRight);
        divTotal.append(valOneTotalPr);
        divDel.append(buttonDel);
        divInfo2.append(divQty);
        divInfo2.append(divTotal);
        divInfo2.append(divDel);
        //combine infor
        divItem.append(divInfo1);
        divItem.append(divInfo2);
        ItemsClass.append(divItem);
        ChangeTotalFooter();
    });
}
// Hàm tìm đối tượng sản phẩm từ DataSet dựa trên dữ liệu namePr là tên trên local
function findInDataSet(namePr) {
    for (let i = 0; i < DataSet.length; i++) {
        if (DataSet[i]["Tên"] == namePr) {
            return DataSet[i];
        }
    }
}
// Hàm xử lý nút tăng giảm số lượng sản phẩm
function changeQty() {
    var getQty = document.getElementsByClassName("valQty");
    var getButtonLeft = document.getElementsByClassName("fas fa-angle-left");
    var getButtonRight = document.getElementsByClassName("fas fa-angle-right");
    var getPricePr = document.getElementsByClassName("cart_body_item_info1-price");
    var getValTotal = document.getElementsByClassName("valTotal");
    for (let i = 0; i < getQty.length; i++) {
        getButtonLeft[i].onclick = function () {
            if (getQty[i].innerHTML > 1) {
                getQty[i].innerHTML--;
                getValTotal[i].innerHTML = formatter.format(parseInt(getQty[i].textContent) * parseInt(getPricePr[i].textContent.replace(/\./g, '')));
                ChangeTotalFooter();
            }
        }
        getButtonRight[i].onclick = function () {
            if (getQty[i].innerHTML <= 100) {
                getQty[i].innerHTML++;
                getValTotal[i].innerHTML = formatter.format(parseInt(getQty[i].textContent) * parseInt(getPricePr[i].textContent.replace(/\./g, '')));
                ChangeTotalFooter();
            }
        }
    }
}
// Hàm xử lý tổng giá thành của tất cả sản phẩm
function ChangeTotalFooter() {
    var getTotalFooter = document.getElementById("valTotalFooter");
    var getValTotal = document.getElementsByClassName("valTotal");
    var sum = 0;
    for (let i = 0; i < getValTotal.length; i++) {
        sum += parseInt(getValTotal[i].textContent.slice(0, getValTotal[i].textContent.search("&nbsp;₫")).replace(/\./g, ''));
    }
    getTotalFooter.textContent = formatter.format(sum);
}
// Hàm xóa sản phẩm
function removeItem() {
    var getButtonDel = document.getElementsByClassName("far fa-trash-alt");
    var getProduct = document.getElementsByClassName("cart_body-item");
    var getNamePr = document.getElementsByClassName("linkItem");
    for (let i = 0; i < getButtonDel.length; i++) {
        getButtonDel[i].onclick = function () {
            window.localStorage.removeItem(`addToCart ${getNamePr[i].textContent}`);
            showCart();
            ChangeTotalFooter();
        }
    }
}