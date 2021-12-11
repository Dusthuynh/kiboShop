// const brand = "Akko";
const name = localStorage.getItem("name");



window.onload = () => {
    console.log(localStorage);
    var fulldata = data.Akko.concat(data.Leopold.concat(data.Keychron));

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
        var img = `<div class = "img img_preview${i}"><img class="product-img${i}" src="../san-pham/san-pham-img/${name}/${name} ${i}.jpg"></div>`;
        $('.preview').append(img);
    }
    $('.modal').text(Object['Model']);
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
        var div = `<option class="option" value = "${sw}" >${sw}</option>`;
        $(".choose-option").append(div);
    }

}

function getSrc(i) {
    var img = document.getElementsByClassName('product-img'+i)[0];
    return img.src;
}
function addCart() {

    var product = {
       "value": document.getElementById("soluong").value,
       "switch": document.getElementById("select").value
    }
    localStorage.setItem(`addToCart ${name}`,JSON.stringify(product));
    console.log("1")
    document.getElementById("message").style.display = "block"; 
}
