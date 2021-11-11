fetch("../headAndFooter/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

fetch("../headAndFooter/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });



  if(!document.getElementById('hf')) {
    var link = document.createElement('link');
    link.id = 'hf';
    link.rel = 'stylesheet';
    link.href = '../headAndFooter/hf.css';
    document.head.appendChild(link);
  }

  if(!document.getElementById('icon-title')) {
    var link = document.createElement('link');
    link.id = 'icon-title';
    link.rel = 'icon';
    link.href = '../media/icon_logo/switch.png';
    link.type = 'image/x-icon';
    document.head.appendChild(link);
  }

  if(!document.getElementById('fontawesome')) {
    var script = document.createElement('script');
    script.id = 'fontawesome';
    script.src = 'https://kit.fontawesome.com/31ed4068a5.js';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  }


  function mainheader(e){
      // var btnnav = document.getElementById("btn-navLink");
      // btnnav.onclick = tognav;
      tognav(e);
      unclicktitle();
  }
  
  function tognav(e){
      e.preventDefault();
      var navLink = document.getElementsByClassName("nav-link")[0];
      var iconnav = document.getElementsByClassName("fa-chevron-circle-down")[0];
      if(!navLink.classList.contains('hidden')){
          navLink.classList.add('hidden');
          iconnav.classList.remove("rotate90deg");
      }else{
          navLink.classList.remove('hidden');
          iconnav.classList.add("rotate90deg");
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