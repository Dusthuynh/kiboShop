window.onload = main();
var data;
$.getJSON("./Data-final.json", data,
    function (data, textStatus, jqXHR) {
        console.log(data);
    }
);
function main() {
    $(".menu-item").click(function (e) {
        e.preventDefault();
        let nameClass = this.className;
        let nameClassCut = nameClass.slice(nameClass.indexOf(' ') + 1, nameClass.length);
        let textColor = document.getElementsByClassName(nameClassCut)[0].style.color;
        $("." + nameClassCut + "-content").slideToggle();
        $("div." + nameClassCut + "> i").toggleClass("rotate");

        if (textColor == "black" || textColor == "") {
            document.getElementsByClassName(nameClassCut)[0].style.color = "red";
        } else document.getElementsByClassName(nameClassCut)[0].style.color = "black";
    });
    $(".sanpham-item").hover(function () {
        $(this.children[2]).slideDown();
    }, function () {
        $(this.children[2]).slideUp();
    }
    );
}

