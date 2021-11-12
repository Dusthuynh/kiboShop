// const brand = "Akko";

const name = localStorage.getItem("name");

window.onload = () => {
    console.log(localStorage);
    var fulldata = data.Akko.concat(data.Leopold);
    main(fulldata); 
    $("#title").text(name);
}
window.onstorage = () => {
    location.reload();
}
function main(data) {
    var position;
    for (let i = 0; i < data.length ;  i++) {
        if (data[i]['Tên'] === name) {
            position = i;
            break;
        }    
    }
    getElement(data[position]);

    //button add and sub 
    document.getElementById('add').onclick = function() {
        document.getElementById('soluong').value++;
    };
    document.getElementById('sub').onclick = function() {
        if (document.getElementById('soluong').value > 1) { 
            document.getElementById('soluong').value--;
        }
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
    //get switch 
    for (let i = 0; i < Object["Type"].length; i++) {
        var sw = Object["Type"][i];
        var div = `<div class="option">${sw}</div>`;
        $(".choose-option").append(div);
    }
}

function getSrc(i) {
    var img = document.getElementsByClassName('product-img'+i)[0];
    return img.src;
}

