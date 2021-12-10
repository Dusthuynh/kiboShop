  $(document).ready(function(){
    addfile();
    hlHeader();
    var btnnav = document.getElementById("btn-navLink");
    btnnav.onclick = tognav;
  });
  
  function addfile(){
    $("header").html(`<div class="logo-header" onclick="window.location.href='../index.html'"><img src="../media/icon_logo/icon_kibo-bla_org.png"></div>
    <div class="link-header">
        <a class="a-navLink a1" href="../index.html">Trang chủ</a>
        <a class="a-navLink a2" href="../san-pham/san-pham.html">Sản phẩm</a>
        <a class="a-navLink a3" href="#">Giới thiệu</a>
        <a class="a-navLink a4" href="#">Liên hệ</a>
    </div>

    <div class="navigation">
        <a href="../gio-hang/cart.html"><img class="icon-header cart" src="../media/icon/nav-cart-cam.png"></a>
        <a href="#"><img class="icon-header user" src="../media/icon/nav-user-cam.png"></a>
    </div>
    <a href="" id="btn-navLink"><i class="fas fa-chevron-circle-down rotate90deg" style="color:orange;"></i></a>
    <div class="nav-link1 hidden">
        <a class="a-navLink1" href="">Trang chủ</a>
        <a class="a-navLink1" href="san-pham/san-pham.html">Sản phẩm</a>
        <a class="a-navLink1" href="#">Tin tức</a>
        <a class="a-navLink1" href="#">Giới thiệu</a>
        <a class="a-navLink1" href="#">Liên hệ</a>
    </div>`);
    $("footer").html(`        <div class="footer_container">
    <div class="footer footer-contacts">
        <div class="contacts contacts_logo"><img src="../media/icon_logo/icon_kibo.png" width="100"> </div>     
        <div class="contacts contacts_add">3/2 Phường Xuân Khánh, Quận Ninh Kiều,<br> TP.Cần Thơ</div>
        <div class="contacts contacts_email"><span>Email: </span>kiboshop.@gmail.com</div>
        <div class="contacts contacts_others">
            <a href=""><img src="../media/icon/fbLogo.png"></a>
            <a href=""><img src="../media/icon/igLogo.png"></a> 
            <a href=""><img src="../media/icon/ytLogo.png"></a> 
            <a href=""><img src="../media/icon/gmailLogo.png"></a> 
        </div>
    </div>
    <div class = "footer footer-keyboard">
        <div class="header keyboard_header">SẢN PHẨM</div>
        <div class="hr"></div>
        <div class="keyboard"><a href="">Akko</a></div>
        <div class="keyboard"><a href="">Keychron</a></div>
        <div class="keyboard"><a href="">Leopold</a></div>
    </div>
    <div class="footer footer-services">
        <div class = "header services_header">SERVICES</div>
        <div class="hr"></div>
        <div class = "services_p1"><a href="">Hướng dẫn mua hàng</a></div>
        <div class = "services_p2"><a href="">Hướng dẫn thanh toán</a></div>
        <div class = "services_p3"><a href="">Hướng dẫn giao nhận</a></div>
        <div class = "services_p4"><a href="">Điều khoản dịch vụ</a></div>
    </div>
    
    <div class="footer footer-notify">
        <div class="header notify_header">ĐĂNG KÝ NHẬN TIN</div>
        <div class="hr"></div>
        <div class="notify_p">Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa.</div> 
        <div class="notify_input">
              
            <div class="input-text"> 
                <input type="text" name="contacts_email" value="" placeholder="Enter your email address">
            </div> 
            <div class = "input-button-header">Submit</div>
        </div>
    </div>
</div>`);

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
      link.href = '../media/icon_logo/switch-cam.png';
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
  }

  function hlHeader(){
      var a = document.getElementsByClassName("a-navLink");
      for(let i=0;i<a.length;i++){
          if(document.title == a[i].innerHTML){
              a[i].style.color = "#DE9F1E";
              a[i].style.textDecoration = "none";
              a[i].style.fontWeight = "900";
          }
      }
  }

  function tognav(e){
    e.preventDefault();
    var navLink = document.getElementsByClassName("nav-link1")[0];
    var iconnav = document.getElementsByClassName("fa-chevron-circle-down")[0];
    if(!navLink.classList.contains('hidden')){
        navLink.classList.add('hidden');
        iconnav.classList.add("rotate90deg");
    }else{
        navLink.classList.remove('hidden');
        iconnav.classList.remove("rotate90deg");
    }
}