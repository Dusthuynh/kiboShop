const brand = "Akko";
const name = "AKKO 3061S Neon RGB Bluetooth 5.0";
window.onload = () => {
    var data;
    $.getJSON("../san-pham/Data-final.json", data,function(data, textStatus, jqXHR) {
        main(data); 
    })
}

function main(data) {
    var hang = data[brand];
    var position;
    for (let i = 0; i < hang.length ;  i++) {
        if (hang[i]['Tên'] === name) {
            position = i;
            break;
        }    
    }
    getElement(hang[position]);

    //button add and sub 
    document.getElementById('add').onclick = function() {
        document.getElementById('soluong').value++;
    };
    document.getElementById('sub').onclick = function() {
        document.getElementById('soluong').value--;
    };
}

function getElement(Object) {
    $(".product-name").text(Object['Tên']);

    $("#price").text(Object['Giá']);

    for (var i = 1; i <5; i++) {
        document.getElementsByClassName('product-img'+i)[0].src = `../san-pham/san-pham-img/${name}/${name} ${i}.jpg`;
    }
     // get Image
    document.getElementsByClassName('main-img')[0].src = getSrc(1);
    for (let i = 1; i < 5; i++) {
        document.getElementsByClassName('product-img'+i)[0].onclick = function() {
            document.getElementsByClassName('main-img')[0].src = getSrc(i);
        }
    }
    // get infor 
    $(".switch").after(`<div>${Object["Switch"]}</div>`);
    for (let i = 0; i < Object["Kết nối"].length; i++) {
        $("#ketnoi").append(`<div>${Object["Kết nối"][i]}</div>`);
    }

}

function getSrc(i) {
    var img = document.getElementsByClassName('product-img'+i)[0];
    return img.src;
}

