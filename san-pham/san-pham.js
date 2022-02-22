const sortType = 1;
var fulldata;
fetch('https://kiboshop-api.herokuapp.com/api/keyboards')
  .then((response) => response.json())
  .then((data) => {
    fulldata = data.data.keyboards;
    main(fulldata);
  });

function main(fulldata) {
  passInfo(fulldata); // truyen du lieu
  menuStyling(); //hieu ung cho thanh menu ben trai
  var sortOption = document.getElementsByClassName('sort-by')[0];
  filterProduct(fulldata);
  sortOption.onchange = () => {
    sortItem(fulldata, fulldata, sortOption.value);
  };
}

function filterProduct(data) {
  // truyen filter
  var profile = document.getElementsByClassName('filter-Profile');
  var keycap = document.getElementsByClassName('filter-Keycap');
  var swi = document.getElementsByClassName('filter-Switch');
  var model = document.getElementsByClassName('filter-Model');
  var brand = document.getElementsByClassName('filter-brand');
  var bluetooth = document.getElementsByClassName('filter-Bluetooth');
  var hotswap = document.getElementsByClassName('filter-Hotswap');

  addListener(profile, '"click"', data);
  addListener(keycap, '"click"', data);
  addListener(swi, '"click"', data);
  addListener(model, '"click"', data);
  addListener(brand, '"click"', data);
  addListener(bluetooth, '"click"', data);
  addListener(hotswap, '"click"', data);
}

function addListener(collection, functionType, data) {
  ///them event functionType cho bo collection

  for (let i = 0; i < collection.length; i++) {
    collection[i].onclick = filter;
  }
}

function filter(e) {
  //  bo loc filter
  var filterType = e.target.className.slice(0, e.target.className.indexOf(' '));
  var array = [];
  filterType = filterType.slice(filterType.indexOf('-') + 1, filterType.length);
  contentFilter = e.target.innerHTML;
  if (filterType == 'Hotswap') {
    fetch('https://kiboshop-api.herokuapp.com/api/keyboards?Hotswap=YES')
      .then((response) => response.json())
      .then((dataHotswap) => {
        passInfo(dataHotswap.data.keyboards);
      });
  }

  if (filterType == 'Bluetooth') {
    //loc bluetooth
    for (let i = 0; i < fulldata.length; i++) {
      if (
        fulldata[i]['Connect'].includes('Bluetooth 5.0') ||
        fulldata[i]['Connect'].includes('Bluetooth 5.1')
      ) {
        array = array.concat(fulldata[i]);
      }
    }
    passInfo(array);
  } else if (filterType == 'brand') {
    //loc hang
    var newData;
    var brand = e.target.innerHTML;
    if (brand == 'Leopold') {
      newData = fulldata.filter((el) => el.Name.includes('Leopold'));
    } else if (brand == 'Keychron') {
      newData = fulldata.filter((el) => el.Name.includes('Keychron'));
    } else
      newData = fulldata.filter(
        (el) => !el.Name.includes('Keychron') && !el.Name.includes('Leopold')
      );
    passInfo(newData);
  } else {
    //loc nhung cai con lai
    contentFilter = contentFilter.replace(' ', '+');
    fetch(
      `https://kiboshop-api.herokuapp.com/api/keyboards?${filterType}=${contentFilter}`
    )
      .then((response) => response.json())
      .then((dataFilter) => {
        passInfo(dataFilter.data.keyboards);
      });
  }
}

function compareUp(a, b) {
  // ham so sanh de sap xep theo thu tu tang
  let gia1 = a.Price,
    gia2 = b.Price;
  if (gia1 < gia2) {
    return -1;
  }
  if (gia1 > gia2) {
    return 1;
  }
  return 0;
}
function compareDown(a, b) {
  // ham so sanh de sap xep theo thu tu giam
  let gia1 = a.Price,
    gia2 = b.Price;
  if (gia1 > gia2) {
    return -1;
  }
  if (gia1 < gia2) {
    return 1;
  }
  return 0;
}
function sortItem(data, vanilData, type) {
  // sap xep
  if (type == 1) {
    passInfo(vanilData);
  } else if (type == 2) {
    data.sort(compareUp);
    passInfo(data);
  } else if (type == 3) {
    data.sort(compareDown);
    passInfo(data);
  }
}

function passInfo(Brand) {
  // truyen noi dung vao html
  clearData();

  for (let i = 0; i < Brand.length; i++) {
    let item = Brand[i];
    let includespitem = document.createElement('div');
    let sanphamitem = document.createElement('div');
    let hinhsanpham = document.createElement('img');
    let tensanpham = document.createElement('div');
    let modelsanpham = document.createElement('div');
    let tiensanpham = document.createElement('div');
    let buttonsanpham = document.createElement('button');

    includespitem.className = 'card';
    sanphamitem.className = 'sanpham-item';
    hinhsanpham.className = 'w-100 hinh-sanpham';
    tensanpham.className = 'ten-sanpham';
    modelsanpham.className = 'model-sanpham';
    tiensanpham.className = 'tien-sanpham';
    buttonsanpham.className = 'btn btn-warning';

    hinhsanpham.src =
      './san-pham-img/' + item['Name'] + '/' + item['Name'] + ' 1.jpg';
    tensanpham.innerHTML = item['Name'];
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'VND',
    });
    tiensanpham.innerHTML = formatter.format(item['Price']);
    modelsanpham.innerHTML = item['Model'];
    buttonsanpham.href = '#';
    buttonsanpham.innerHTML = 'Đặt hàng';

    sanphamitem.appendChild(hinhsanpham);
    sanphamitem.appendChild(tensanpham);
    sanphamitem.appendChild(tiensanpham);
    sanphamitem.appendChild(modelsanpham);
    includespitem.appendChild(sanphamitem);
    includespitem.appendChild(buttonsanpham);

    document.getElementById('sanpham').appendChild(includespitem);
    tensanpham.onclick = pastDataLocalStorage;
    hinhsanpham.onclick = pastDataLocalStorageImg;
    buttonsanpham.onclick = pastDataLocalStorageButton;
  }
}

function clearData() {
  // xoa noi dung html
  document.getElementById('sanpham').innerHTML = '';
}

function pastDataLocalStorageButton(e) {
  var name = e.target.parentElement.children[0].children[1].innerHTML;
  e.preventDefault();
  localStorageUpdate(name);
}

function pastDataLocalStorageImg(e) {
  var name = e.target.nextSibling.innerHTML;
  e.preventDefault();
  localStorageUpdate(name);
}

function pastDataLocalStorage(e) {
  // truyen ten san pham vao local storage
  var name = e.target.innerHTML;
  e.preventDefault();
  localStorageUpdate(name);
}
function localStorageUpdate(name) {
  // thay doi key name tren local storage
  if (typeof localStorage['name'] == undefined) {
    window.localStorage.setItem('name', name);
  } else {
    window.localStorage.removeItem('name');
    window.localStorage.setItem('name', name);
  }
  window.location.href = '../one-san-pham/OneProduct.html';
}

function menuStyling() {
  // them hieu ung cho menu
  $('.menu-item').click(function (e) {
    e.preventDefault();
    let nameClass = this.className;
    let nameClassCut = nameClass.slice(
      nameClass.indexOf(' ') + 1,
      nameClass.length
    );
    let textColor =
      document.getElementsByClassName(nameClassCut)[0].style.color;

    $('.' + nameClassCut + '-content').slideToggle();
    $('div.' + nameClassCut + '> i').toggleClass('rotate');
    if (textColor == 'rgb(50, 50, 50)' || textColor == '') {
      document.getElementsByClassName(nameClassCut)[0].style.color =
        'rgb(179, 106, 18)';
      document.getElementsByClassName(nameClassCut)[0].style.borderLeft =
        '5px solid rgb(179, 106, 18)';
    } else {
      document.getElementsByClassName(nameClassCut)[0].style.color =
        'rgb(50, 50, 50)';
      document.getElementsByClassName(nameClassCut)[0].style.borderLeft =
        '0px solid rgb(50, 50, 50)';
    }
  });
}
// fix loi sửa số lượng trên local storage khi out ra vô lại
