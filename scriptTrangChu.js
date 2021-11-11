var btnnav = document.getElementById("btn-navLink");

window.onload = main;
function main(){
    btnnav.onclick = tognav;
    unclicktitle();

    animaBanner();
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
