function checkSubmit(){
    var name = checkName();
    var email = checkEmail();
    var mess = checkMess();
    if(name === true && email===true && mess ===true){
        alert("Form đã được gửi thành công")
        return true;
    } else if (!name){
        alert("Họ tên có ít nhất 4 ký tự");
        return false;
    } else if (!email){
        alert("Email của bạn chưa đúng dạng");
        return false;
    } else if (!mess){
        alert("Bạn chưa nhập tin nhắn");
        return false;
    }
}
function checkName(){
    var length = document.getElementsByClassName("name")[0].value.length;
    if(length < 4){
        return false;
    }else return true;
}
function checkMess(){
    var length = document.getElementsByClassName("mess")[0].value.length;
    if(length < 1){
        return false;
    }else return true;
}
function checkEmail(){
    var email = document.getElementsByClassName("email")[0].value;
    if(!ValidateEmail(email)){
        return false;
    }else return true;
}
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true);
  }
  
    return (false);
}