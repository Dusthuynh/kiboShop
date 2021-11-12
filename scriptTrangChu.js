var btnnav = document.getElementById("btn-navLink");

window.onload = main;
function main(){
    btnnav.onclick = tognav;
    unclicktitle();

    animaBanner();

    hotSP();
}

function tognav(e){
    e.preventDefault();
    var navLink = document.getElementsByClassName("nav-link")[0];
    var iconnav = document.getElementsByClassName("fa-chevron-circle-down")[0];
    if(!navLink.classList.contains('hidden')){
        navLink.classList.add('hidden');
        iconnav.classList.add("rotate90deg");
    }else{
        navLink.classList.remove('hidden');
        iconnav.classList.remove("rotate90deg");
    }
}

function unclicktitle(){
    var a = document.getElementsByClassName("a-navLink");
    for(let i=0;i<a.length;i++){
        if(document.title == a[i].innerHTML){
            a[i].classList.add("hightlightHeader");
        }
    }
}

var imgBannerList =[
    {"src":"media/banner/akko_tokyo.png"},
    {"src":"media/banner/leopolo_fc980m.png"},
    {"src":"media/banner/keychron_k3v2.png"}];

function animaBanner(){
    var res = $("#bannerTrangChu");
    for(let i=0;i<imgBannerList.length;i++){
        var img = $("<img></img>").attr("src",imgBannerList[i].src);
        res.append(img);
    }

    $("#bannerTrangChu img:gt(0)").hide()
    var loop = setInterval( () =>{
        $("#bannerTrangChu img:first-child").hide();
        $("#bannerTrangChu img:first-child").next().fadeIn("slow");
        $("#bannerTrangChu").append($("#bannerTrangChu img:first-child"));
    },5000);

}

var hotList = {
 "Akko" : [
    {"src":"san-pham/san-pham-img/AKKO 3084 v2 ASA – Los Angeles/AKKO 3084 v2 ASA – Los Angeles 2.jpg",
     "name":"AKKO 3098 v2 ASA – Los Angeles",
     "price":"1,499,000 ₫"},
    {"src":"san-pham/san-pham-img/AKKO 3098 DS Midnight R2/AKKO 3098 DS Midnight R2 2.jpg",
     "name":"AKKO 3098 DS Midnight R2",
     "price":"1,399,000 ₫"},
    {"src":"san-pham/san-pham-img/AKKO 3098N Multi-modes Black Gold/AKKO 3098N Multi-modes Black Gold 4.jpg",
     "name":"AKKO 3098N Multi-modes Black Gold",
     "price":"2,899,000 ₫"},
    {"src":"san-pham/san-pham-img/AKKO 3087 v2 DS Horizon/AKKO 3087 v2 DS Horizon 2.jpg",
     "name":"AKKO 3087 v2 DS Horizon",
     "price":"1,399,000 ₫"}],

 "Leopold" : [
    {"src":"san-pham/san-pham-img/Leopold FC660M PD White Blue Star/Leopold FC660M PD White Blue Star 1.jpg",
     "name":"Leopold FC660M PD White Blue Star",
     "price":"2,750,000 ₫"},
    {"src":"san-pham/san-pham-img/Leopold FC660MPD Blue Grey/Leopold FC660MPD Blue Grey 1.jpg",
     "name":"Leopold FC660MPD Blue Grey",
     "price":"2,750,000 ₫"},
    {"src":"san-pham/san-pham-img/Leopold FC750R PD Sweden - White Case/Leopold FC750R PD Sweden - White Case 1.jpg",
     "name":"Leopold FC750R PD Sweden - White Case",
     "price":"3,270,000 ₫"},
    {"src":"san-pham/san-pham-img/Leopold FC900R PD OEM Sweden/Leopold FC900R PD OEM Sweden 1.jpg",
     "name":"Leopold FC900R PD OEM Sweden",
     "price":"3,449,000 ₫"}]
}

function hotSP(){
    $("#hot-akko div").remove();
    var divAK = $("<div></div>").addClass("list-sp");
    createDivSP("Akko",divAK);
    $("#hot-akko").append(divAK);

    $("#hot-leopold div").remove();
    var divLP = $("<div></div>").addClass("list-sp");
    createDivSP("Leopold",divLP);
    $("#hot-leopold").append(divLP);
}

function createDivSP(hang,div){
    var W = $(document).width();
    var n;
    if(W > 768) 
        n = 4;
    else if(W > 450)
        n = 3;
    else n = 2;
    for(let i=0;i<n;i++){
        var sp = $("<div></div>").addClass("sp");
        var hinh = $("<img></img>").addClass("hinh-sanpham");
        var ten = $("<div></div>").addClass("ten-sanpham").click(pastDataLocalStorage);
        var gia = $("<div></div>").addClass("gia-sanpham");

        hinh.attr("src",hotList[hang][i].src);
        ten.text(hotList[hang][i].name);
        gia.text(hotList[hang][i].price);
        div.append(sp.append(hinh, ten, gia));
    }
}

function pastDataLocalStorage(e){ 
    console.log(e);
    var name = e.target.innerHTML;
    e.preventDefault();
    if (typeof localStorage['name'] == undefined){
        window.localStorage.setItem('name', name);
    } else{
        window.localStorage.removeItem('name');
        window.localStorage.setItem('name', name);
    }
    window.location.href = "../one-san-pham/OneProduct.html";
}
