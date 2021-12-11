$(document).ready(function(){
    var widthThe = 247.5;
    $(".bg-the").hover(function(){
        $(this).parent().children().first().css("width","10%");
        $(this).css("width",widthThe);
    },function(){
        $(this).parent().children().first().css("width","40%");
        $(this).css("width",widthThe-widthThe*0.4);
    });

    $(".slide-the").hover(function(){
        $(this).css("width","100%");
        $(this).next().css("width","0");
        $(this).children().first().next().fadeIn(1000);

    },function(){
        $(this).children().first().next().hide();
        $(this).css("width","40%");
        $(this).next().css("width",widthThe-widthThe*0.4);
    });
});

