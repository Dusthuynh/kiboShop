var btnnav = document.getElementById("btn-navLink");

window.onload = main;
function main(){
    btnnav.onclick = tognav;
    unclicktitle();

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

